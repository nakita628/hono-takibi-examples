<h1 id="id4i-api">ID4i API v1.0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

ID4i HTTP API

Base URLs:

* <a href="https://api.apis.guru//backend.id4i.de">https://api.apis.guru//backend.id4i.de</a>

<a href="http://id4i.de">Terms of service</a>
Email: <a href="mailto:info@bluerain.de">BlueRain Software GmbH &amp; Co. KG</a> 
Web: <a href="http://bluerain.de">BlueRain Software GmbH &amp; Co. KG</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

# Authentication

* API Key (Authorization)
    - Parameter Name: **Authorization**, in: header.

<h1 id="id4i-api-accounts">Accounts</h1>

User accounts allows people to register for ID4i and login. All permissions and roles for interactive ID4i usage (as opposed to machine-to-machine interactions) are attached to Organizations and User Accounts. The API allows users to register, verify their registration, login and reset their passwords.

## Verify password reset

<a id="opIdverifyPasswordReset"></a>

> Code samples

```bash
curl https://example.com/account/password \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "string",
    "token": "string"
  }'
```

`PUT /account/password`

Setting a new password and verifying the request to set the password.

> Body parameter

```json
{
  "password": "string",
  "token": "string"
}
```

<h3 id="verify-password-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordResetVerificationRequest](#schemapasswordresetverificationrequest)|true|Contains the new password and the verification token to set the new password.|
|» password|body|string|true|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="verify-password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SimpleMessageResponse](#schemasimplemessageresponse)|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Request password reset

<a id="opIdrequestPasswordReset"></a>

> Code samples

```bash
curl https://example.com/account/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "string"
  }'
```

`POST /account/password`

Requesting a reset for a new password. 

> Body parameter

```json
{
  "username": "string"
}
```

<h3 id="request-password-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordResetRequest](#schemapasswordresetrequest)|true|Contains the required information to request a new password.|
|» username|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="request-password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SimpleMessageResponse](#schemasimplemessageresponse)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Complete registration

<a id="opIdcompleteRegistration"></a>

> Code samples

```bash
curl https://example.com/account/registration \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "stringst",
    "username": "string",
    "verificationToken": "string"
  }'
```

`PUT /account/registration`

Completing a registration e.g. for invited users. Finish registration with a username and a password.

> Body parameter

```json
{
  "password": "stringst",
  "username": "string",
  "verificationToken": "string"
}
```

<h3 id="complete-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompleteUserRegistrationRequest](#schemacompleteuserregistrationrequest)|true|Contains the verification token, the username and the initial password.|
|» password|body|string|true|none|
|» username|body|string|true|none|
|» verificationToken|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="complete-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Register user

<a id="opIdregisterUser"></a>

> Code samples

```bash
curl https://example.com/account/registration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "password": "stringst",
    "username": "string"
  }'
```

`POST /account/registration`

Registering a new user.

> Body parameter

```json
{
  "email": "string",
  "password": "stringst",
  "username": "string"
}
```

<h3 id="register-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRegistrationRequest](#schemauserregistrationrequest)|true|The user information about the new created user.|
|» email|body|string|true|none|
|» password|body|string|true|none|
|» username|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": 0,
  "message": "string",
  "username": "string"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="register-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserRegistrationResponse](#schemauserregistrationresponse)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Verify registration

<a id="opIdverifyUserRegistration"></a>

> Code samples

```bash
curl https://example.com/account/verification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "string"
  }'
```

`POST /account/verification`

Verifies a new user registration.

> Body parameter

```json
{
  "token": "string"
}
```

<h3 id="verify-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegistrationVerificationTokenPresentation](#schemaregistrationverificationtokenpresentation)|true|The token for user verification.|
|» token|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="verify-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

## List users and their roles

<a id="opIdgetAllOrganizationRoles"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/roles`

Listing users and their roles in a paginated manner.

<h3 id="list-users-and-their-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|
|organizationId|path|string|true|organizationId|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "roles": [
        "string"
      ],
      "user": {
        "id": "string",
        "name": "string"
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-users-and-their-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfUserRoles](#schemapaginatedresponseofuserroles)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find users in organization

<a id="opIdgetUsersOfOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/users`

Finding users in the specified organization in a paginated manner.

<h3 id="find-users-in-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|
|organizationId|path|string|true|organizationId|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="find-users-in-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfUserPresentation](#schemapaginatedresponseofuserpresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Invite Users

<a id="opIdinviteUsers"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/users/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "invitations": [
      {
        "email": "string",
        "roles": [
          "string"
        ],
        "userName": "string"
      }
    ]
  }'
```

`POST /api/v1/organizations/{organizationId}/users/invite`

> Body parameter

```json
{
  "invitations": [
    {
      "email": "string",
      "roles": [
        "string"
      ],
      "userName": "string"
    }
  ]
}
```

<h3 id="invite-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization where users should be invited|
|body|body|[OrganizationUserInvitationListRequest](#schemaorganizationuserinvitationlistrequest)|true|invitationList|
|» invitations|body|[[OrganizationUserInvitation](#schemaorganizationuserinvitation)]|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="invite-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Get user roles by username

<a id="opIdgetUserRoles"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/users/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/users/{username}/roles`

<h3 id="get-user-roles-by-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization|
|username|path|string|true|username|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    "string"
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-user-roles-by-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfstring](#schemapaginatedresponseofstring)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add role(s) to user

<a id="opIdaddUserRoles"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/users/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "roles": [
      "string"
    ]
  }'
```

`POST /api/v1/organizations/{organizationId}/users/{username}/roles`

> Body parameter

```json
{
  "roles": [
    "string"
  ]
}
```

<h3 id="add-roles-to-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization|
|username|path|string|true|username|
|body|body|[ChangeRoleRequest](#schemachangerolerequest)|true|changeRoleRequest|
|» roles|body|[string]|false|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-roles-to-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove role(s) from user

<a id="opIdremoveUserRoles"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/users/string/roles \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "roles": [
      "string"
    ]
  }'
```

`DELETE /api/v1/organizations/{organizationId}/users/{username}/roles`

> Body parameter

```json
{
  "roles": [
    "string"
  ]
}
```

<h3 id="remove-roles-from-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization|
|username|path|string|true|username|
|body|body|[ChangeRoleRequest](#schemachangerolerequest)|true|changeRoleRequest|
|» roles|body|[string]|false|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-roles-from-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List roles

<a id="opIdlistAllRoles"></a>

> Code samples

```bash
curl https://example.com/api/v1/roles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/roles`

Listing of roles.

<h3 id="list-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilege|query|string|false|If specified the roles will be filtered containing that privilege.|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "name": "string",
      "privileges": [
        "string"
      ]
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfRole](#schemapaginatedresponseofrole)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve organizations of user

<a id="opIdgetOrganizationsOfUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/user/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/user/organizations`

<h3 id="retrieve-organizations-of-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|false|role|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "id": 100,
      "logoURL": "/api/v1/public/images/abcdef",
      "name": "ACME Inc.",
      "namespace": "de.acme"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-organizations-of-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfOrganization](#schemapaginatedresponseoforganization)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find users

<a id="opIdfindUsers"></a>

> Code samples

```bash
curl https://example.com/api/v1/users \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/users`

<h3 id="find-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usernamePrefix|query|string|false|none|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="find-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfUserPresentation](#schemapaginatedresponseofuserpresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find by username

<a id="opIdfindUserByUsername"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/users/{username}`

<h3 id="find-by-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|username|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="find-by-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserPresentation](#schemauserpresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## login

<a id="opIdlogin"></a>

> Code samples

```bash
curl https://example.com/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "login": "string",
    "password": "string"
  }'
```

`POST /login`

ID4i API Login

> Body parameter

```json
{
  "login": "string",
  "password": "string"
}
```

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCredentials](#schemaaccountcredentials)|true|none|
|» login|body|string|false|none|
|» password|body|string|false|none|

> Example responses

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="id4i-api-alias">Alias</h1>

Guid Alias Controller

## Get all aliases for the given GUID or Collection.

<a id="opIdgetGuidAliases"></a>

> Code samples

```bash
curl https://example.com/api/v1/id4ns/string/alias \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/id4ns/{id4n}/alias`

Looks up the alias for each alias type (group and single) and returns a map of all aliases found.

<h3 id="get-all-aliases-for-the-given-guid-or-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The GUID or Collection to operate on|

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-all-aliases-for-the-given-guid-or-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="get-all-aliases-for-the-given-guid-or-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add alias for GUID or Collection

<a id="opIdaddGuidAlias"></a>

> Code samples

```bash
curl https://example.com/api/v1/id4ns/string/alias/gtin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "alias": "alias"
  }'
```

`POST /api/v1/id4ns/{id4n}/alias/{aliasType}`

Adds or replaces aliases for single ID4ns (alias type item and mapp) or groups of ID4ns (alias types gtin, ean and article)

> Body parameter

```json
{
  "alias": "alias"
}
```

<h3 id="add-alias-for-guid-or-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The GUID or Collection to operate on|
|aliasType|path|string|true|Alias type, see the corresponding API model|
|body|body|[GuidAlias](#schemaguidalias)|true|The alias to add or update|
|» alias|body|string|true|An alias|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aliasType|gtin|
|aliasType|article|
|aliasType|mapp|
|aliasType|item|
|aliasType|rfid|
|aliasType|tracking|
|aliasType|eclass|
|aliasType|unspsc|
|aliasType|product|
|aliasType|material|
|aliasType|reference|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-alias-for-guid-or-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove aliases from GUID or Collection

<a id="opIdremoveGuidAlias"></a>

> Code samples

```bash
curl https://example.com/api/v1/id4ns/string/alias/gtin \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/id4ns/{id4n}/alias/{aliasType}`

Remove the alias of the given type

<h3 id="remove-aliases-from-guid-or-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The GUID or Collection to operate on|
|aliasType|path|string|true|Alias type, see the corresponding API model|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aliasType|gtin|
|aliasType|article|
|aliasType|mapp|
|aliasType|item|
|aliasType|rfid|
|aliasType|tracking|
|aliasType|eclass|
|aliasType|unspsc|
|aliasType|product|
|aliasType|material|
|aliasType|reference|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-aliases-from-guid-or-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Search for GUIDs by alias

<a id="opIdsearchByAlias"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/search/guids?alias=string&aliasType=gtin' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/search/guids`

<h3 id="search-for-guids-by-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|query|string|true|The alias to search for|
|aliasType|query|string|true|Alias type type to search for|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aliasType|gtin|
|aliasType|article|
|aliasType|mapp|
|aliasType|item|
|aliasType|rfid|
|aliasType|tracking|
|aliasType|eclass|
|aliasType|unspsc|
|aliasType|product|
|aliasType|material|
|aliasType|reference|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "createdTimestamp": 1517232722,
      "holderOrganizationId": "string",
      "id4n": "3THvgrWxqgTFC4",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "properties": "de.example"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="search-for-guids-by-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfGuid](#schemapaginatedresponseofguid)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List all supported alias types

<a id="opIdgetGuidAliasTypes"></a>

> Code samples

```bash
curl https://example.com/api/v1/search/guids/aliases/types \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/search/guids/aliases/types`

Retrieve this list to find out all alias types to use with alias search and change operations

> Example responses

> 200 Response

```json
[
  "gtin"
]
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-all-supported-alias-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="list-all-supported-alias-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-api-keys">Api Keys</h1>

Api Key Controller

## Find API key by organization

<a id="opIdlistAllApiKeysOfOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/apikeys`

Finding all API key assigned to the specified organization in a paginated manner.

<h3 id="find-api-key-by-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|query|string|false|The namespace of the organization to search in.|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "active": true,
      "createdAt": 1517232722,
      "createdBy": "user123",
      "key": "39978f49-6ff1-4147-bf0f-9910185084b7",
      "label": "My Api Key",
      "organizationId": "de.acme"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="find-api-key-by-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfApiKeyPresentation](#schemapaginatedresponseofapikeypresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Create API key

<a id="opIdcreateNewApiKey"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "label": "string",
    "organizationId": "de.acme",
    "secret": "stringstri"
  }'
```

`POST /api/v1/apikeys`

Creation of a new API key.

> Body parameter

```json
{
  "label": "string",
  "organizationId": "de.acme",
  "secret": "stringstri"
}
```

<h3 id="create-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiKeyCreationRequest](#schemaapikeycreationrequest)|true|API key to be created.|
|» label|body|string|true|none|
|» organizationId|body|string|true|none|
|» secret|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdAt": 1517232722,
  "createdBy": "user123",
  "key": "39978f49-6ff1-4147-bf0f-9910185084b7",
  "label": "My Api Key",
  "organizationId": "de.acme"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="create-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiKeyPresentation](#schemaapikeypresentation)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List all privileges

<a id="opIdlistAllApiKeyPrivileges"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/privileges \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/apikeys/privileges`

Listing all possible API key privileges.

<h3 id="list-all-privileges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4nConcerning|query|boolean|false|id4nConcerning|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "allowsBillableOperations": true,
      "helpText": "string",
      "id4nAssociated": true,
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-all-privileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfApiKeyPrivilegeInfo](#schemapaginatedresponseofapikeyprivilegeinfo)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Show API key

<a id="opIdgetApiKey"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/apikeys/{key}`

Showing the details of an API key.

<h3 id="show-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The API key to show.|

> Example responses

> 200 Response

```json
{
  "active": true,
  "createdAt": 1517232722,
  "createdBy": "user123",
  "key": "39978f49-6ff1-4147-bf0f-9910185084b7",
  "label": "My Api Key",
  "organizationId": "de.acme"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="show-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiKeyPresentation](#schemaapikeypresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update API keys

<a id="opIdupdateApiKey"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "active": true,
    "newLabel": "string"
  }'
```

`PUT /api/v1/apikeys/{key}`

API keys can be updated with new labels, and be activated and deactivated. The secret or UUID cannot be changed.

> Body parameter

```json
{
  "active": true,
  "newLabel": "string"
}
```

<h3 id="update-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The API key to be updated.|
|body|body|[ApiKeyChangeRequest](#schemaapikeychangerequest)|true|The new values to apply.|
|» active|body|boolean|false|none|
|» newLabel|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="update-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Delete API key

<a id="opIddeleteApiKey"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/apikeys/{key}`

Deletion of an API key.

<h3 id="delete-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|The API key to delete.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="delete-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List privileges

<a id="opIdlistApiKeyPrivileges"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string/privileges \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/apikeys/{key}/privileges`

<h3 id="list-privileges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "id4nAssociated": true,
      "privilege": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-privileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfApiKeyPrivilege](#schemapaginatedresponseofapikeyprivilege)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add privilege

<a id="opIdaddApiKeyPrivilege"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string/privileges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "privilege": "string"
  }'
```

`POST /api/v1/apikeys/{key}/privileges`

> Body parameter

```json
{
  "privilege": "string"
}
```

<h3 id="add-privilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|
|body|body|[AddApiKeyPrivilegeRequest](#schemaaddapikeyprivilegerequest)|true|addApiKeyPrivilegeRequest|
|» privilege|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-privilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove privilege

<a id="opIdremoveApiKeyPrivilege"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string/privileges \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "privilege": "string"
  }'
```

`DELETE /api/v1/apikeys/{key}/privileges`

> Body parameter

```json
{
  "privilege": "string"
}
```

<h3 id="remove-privilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|
|body|body|[RemoveApiKeyPrivilegeRequest](#schemaremoveapikeyprivilegerequest)|true|removeApiKeyPrivilegeRequest|
|» privilege|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-privilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## ID4ns of a privilege

<a id="opIdlistId4ns"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string/privileges/string/id4ns \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/apikeys/{key}/privileges/{privilege}/id4ns`

Listing ID4ns of a id4n concerning privilege

<h3 id="id4ns-of-a-privilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|
|privilege|path|string|true|privilege|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "createdTimestamp": 1517232722,
      "holderOrganizationId": "de.example",
      "id4n": "3THvgrWxqgTFC4",
      "label": "string",
      "ownerOrganizationId": "org.acme",
      "properties": "de.example",
      "type": "GUID"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="id4ns-of-a-privilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfId4nPresentation](#schemapaginatedresponseofid4npresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add ID4ns of a privilege

<a id="opIdaddApiKeyPrivilegeForId4ns"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string/privileges/string/id4ns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id4ns": [
      "string"
    ]
  }'
```

`POST /api/v1/apikeys/{key}/privileges/{privilege}/id4ns`

> Body parameter

```json
{
  "id4ns": [
    "string"
  ]
}
```

<h3 id="add-id4ns-of-a-privilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|
|privilege|path|string|true|privilege|
|body|body|[ListOfId4ns](#schemalistofid4ns)|true|id4ns|
|» id4ns|body|[string]|false|A list of id4ns.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-id4ns-of-a-privilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove id4ns of a privilege

<a id="opIdremoveApiKeyPrivilegeForId4ns"></a>

> Code samples

```bash
curl https://example.com/api/v1/apikeys/string/privileges/string/id4ns \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id4ns": [
      "string"
    ]
  }'
```

`DELETE /api/v1/apikeys/{key}/privileges/{privilege}/id4ns`

> Body parameter

```json
{
  "id4ns": [
    "string"
  ]
}
```

<h3 id="remove-id4ns-of-a-privilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|
|privilege|path|string|true|privilege|
|body|body|[ListOfId4ns](#schemalistofid4ns)|true|id4ns|
|» id4ns|body|[string]|false|A list of id4ns.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-id4ns-of-a-privilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-auditing">Auditing</h1>

Auditing services allow to review changes made by users or api keys. Changelog messages can be resolved as plain text or formatted message with parameters.

## List change log entries of an organization

<a id="opIdlistOrganizationChangeLog"></a>

> Code samples

```bash
curl https://example.com/api/v1/changelog/organization/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/changelog/organization/{organizationId}/`

Listing change log entries of the specified organization id.

<h3 id="list-change-log-entries-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace identifying the organization whose change log entries are to be listed|
|messageMimeType|query|string|false|The Mime-type for the message format that should be returned. e.g. 'text/plain' or 'text/mustache' |
|fromDate|query|string(date-time)|false|From date time as UTC Date-Time format|
|toDate|query|string(date-time)|false|To date time as UTC Date-Time format|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "id": "e100123",
      "message": "User {{&user}} has changed the title of {{&object}}",
      "messageProperties": {
        "object": "nearly every object",
        "user": {
          "type": "user",
          "value": "a.vratny"
        }
      },
      "timestamp": 1517232722
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-change-log-entries-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfChangeLogEntry](#schemapaginatedresponseofchangelogentry)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-billing">Billing</h1>

Billing Controller

## Get billing amount of services for a given organization

<a id="opIdgetSumForOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/billing/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/billing/{organizationId}`

<h3 id="get-billing-amount-of-services-for-a-given-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The organization to compute the billing information for|
|fromDate|query|string(date-time)|false|Billing start date|
|toDate|query|string(date-time)|false|Billing end date|

> Example responses

> 200 Response

```json
{
  "listing": {
    "property1": 0,
    "property2": 0
  }
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-billing-amount-of-services-for-a-given-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ServiceCosts](#schemaservicecosts)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Get billing positions for a given organization

<a id="opIdgetPositionsForOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/billing/string/positions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/billing/{organizationId}/positions`

<h3 id="get-billing-positions-for-a-given-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The organization to compute the billing information for|
|fromDate|query|string(date-time)|false|Billing start date|
|toDate|query|string(date-time)|false|Billing end date|

> Example responses

> 200 Response

```json
[
  {
    "amount": 0,
    "count": 0,
    "description": "string",
    "service": "string",
    "singlePrice": 0,
    "sum": 0,
    "unit": "string"
  }
]
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-billing-positions-for-a-given-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="get-billing-positions-for-a-given-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BillingPosition](#schemabillingposition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-collections">Collections</h1>

Collection Controller

## Create collection

<a id="opIdcreateCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "label": "string",
    "length": 6,
    "organizationId": "de.acme",
    "type": "ROUTING_COLLECTION"
  }'
```

`POST /api/v1/collections`

> Body parameter

```json
{
  "label": "string",
  "length": 6,
  "organizationId": "de.acme",
  "type": "ROUTING_COLLECTION"
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCollectionRequest](#schemacreatecollectionrequest)|true|createInfo|
|» label|body|string|false|none|
|» length|body|integer(int32)|true|none|
|» organizationId|body|string|true|none|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|ROUTING_COLLECTION|
|» type|LOGISTIC_COLLECTION|
|» type|LABELLED_COLLECTION|

> Example responses

> 200 Response

```json
{
  "id4n": "3THvgrWxqgTFC4"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Id4n](#schemaid4n)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find collection

<a id="opIdfindCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/collections/{id4n}`

<h3 id="find-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|

> Example responses

> 200 Response

```json
{
  "createdTimestamp": 0,
  "holderOrganizationId": "string",
  "id4n": "string",
  "label": "string",
  "ownerOrganizationId": "string",
  "physicalState": "UNATTACHED",
  "type": "ROUTING_COLLECTION"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="find-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GuidCollection](#schemaguidcollection)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Delete collection

<a id="opIddeleteCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/collections/{id4n}`

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update collection

<a id="opIdupdateCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "holderOrganizationId": "string",
    "label": "string",
    "physicalState": "UNATTACHED"
  }'
```

`PATCH /api/v1/collections/{id4n}`

Update collection changing only the given values

> Body parameter

```json
{
  "holderOrganizationId": "string",
  "label": "string",
  "physicalState": "UNATTACHED"
}
```

<h3 id="update-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|body|body|[GuidCollection](#schemaguidcollection)|true|request|
|» holderOrganizationId|body|string|false|Organization namespace of the holder of the collection|
|» label|body|string|false|none|
|» physicalState|body|string|false|Physical attachment state of the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» physicalState|UNATTACHED|
|» physicalState|ATTACHED|
|» physicalState|DETACHED|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List contents of the collection

<a id="opIdlistElementsOfCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections/string/elements \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/collections/{id4n}/elements`

<h3 id="list-contents-of-the-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|
|organizationId|query|string|false|The organization namespace.|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "createdTimestamp": 1517232722,
      "holderOrganizationId": "string",
      "id4n": "3THvgrWxqgTFC4",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "properties": "de.example"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-contents-of-the-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfGuid](#schemapaginatedresponseofguid)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add elements to collection

<a id="opIdaddElementsToCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections/string/elements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id4ns": [
      "string"
    ]
  }'
```

`POST /api/v1/collections/{id4n}/elements`

> Body parameter

```json
{
  "id4ns": [
    "string"
  ]
}
```

<h3 id="add-elements-to-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|body|body|[ListOfId4ns](#schemalistofid4ns)|true|listOfGuids|
|» id4ns|body|[string]|false|A list of id4ns.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-elements-to-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove elements from collection

<a id="opIdremoveElementsFromCollection"></a>

> Code samples

```bash
curl https://example.com/api/v1/collections/string/elements \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "id4ns": [
      "string"
    ]
  }'
```

`DELETE /api/v1/collections/{id4n}/elements`

> Body parameter

```json
{
  "id4ns": [
    "string"
  ]
}
```

<h3 id="remove-elements-from-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|body|body|[ListOfId4ns](#schemalistofid4ns)|true|listOfGuids|
|» id4ns|body|[string]|false|A list of id4ns.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-elements-from-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve ID4n properties

<a id="opIdgetProperties"></a>

> Code samples

```bash
curl https://example.com/api/v1/id4ns/string/properties \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/id4ns/{id4n}/properties`

List all properties of an id4n.

<h3 id="retrieve-id4n-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The id4n|
|organizationId|query|string|false|The organization namespace.|

> Example responses

> 200 Response

```json
{
  "property1": "string",
  "property2": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-id4n-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="retrieve-id4n-properties-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Delete ID4n properties

<a id="opIddeleteProperties"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/id4ns/string/properties?organizationId=string' \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    "string"
  ]'
```

`DELETE /api/v1/id4ns/{id4n}/properties`

Partial deletion of id4n properties. If the property does not exist, it will be ignored.

> Body parameter

```json
[
  "string"
]
```

<h3 id="delete-id4n-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The id4n|
|organizationId|query|string|true|The organization namespace to work on while deleting the properties.|
|body|body|[string]|true|A set of property keys to delete.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="delete-id4n-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Patch ID4n properties

<a id="opIdpatchProperties"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/id4ns/string/properties?organizationId=string' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`PATCH /api/v1/id4ns/{id4n}/properties`

Partial updating of id4n properties. If a property contains a null value the property will be deleted other values will be saved and overwritten if they already exist.

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="patch-id4n-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The id4n|
|organizationId|query|string|true|The organization namespace to work on while patching the properties.|
|body|body|object|true|The properties to update.|
|» **additionalProperties**|body|string|false|none|

<h3 id="patch-id4n-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Get multiple ID4n properties

<a id="opIdgetMultipleProperties"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/multiple/id4ns/properties?id4ns=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/multiple/id4ns/properties`

Get a list of ID4n properties for the specified ID4ns.

<h3 id="get-multiple-id4n-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4ns|query|[string]|true|The list of ID4ns to resolve.|
|organizationId|query|string|false|The organization namespace.|

> Example responses

> 200 Response

```json
{
  "list": [
    {
      "id4n": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-multiple-id4n-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListOfId4nProperties](#schemalistofid4nproperties)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Get collections of organization

<a id="opIdgetAllCollectionsOfOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/collections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/collections`

Retrieving all collections of an organization in a paginated manner. You may filter the results by specifying id4n properties with filter operations (eq, in, ne) in the query parameters. e.g. `com.yourcompany.orderId.eq=1234`  

<h3 id="get-collections-of-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|
|organizationId|path|string|true|The namespace of the organization|
|type|query|string|false|Filter by this type|
|label|query|string|false|Filter by this label|
|labelPrefix|query|string|false|Filter by this label prefix|
|property|query|[string]|false|List of i4dn property filter. e.g. "com.myorga.state:IN:waiting\|processing" or "com.myorga.orderId:EQ:SAP001"|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|ROUTING_COLLECTION|
|type|LOGISTIC_COLLECTION|
|type|LABELLED_COLLECTION|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "createdTimestamp": 0,
      "holderOrganizationId": "string",
      "id4n": "string",
      "label": "string",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "type": "ROUTING_COLLECTION"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-collections-of-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfGuidCollection](#schemapaginatedresponseofguidcollection)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-guids">Guids</h1>

Guid Alias Controller

## Create GUID(s)

<a id="opIdcreateGuid"></a>

> Code samples

```bash
curl https://example.com/api/v1/guids \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "count": 1,
    "length": 40,
    "organizationId": "de.acme"
  }'
```

`POST /api/v1/guids`

Creating one or more GUIDs with a specified length.

> Body parameter

```json
{
  "count": 1,
  "length": 40,
  "organizationId": "de.acme"
}
```

<h3 id="create-guids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateGuidRequest](#schemacreateguidrequest)|true|GUID creation model|
|» count|body|integer(int32)|true|The total number of GUIDs to create|
|» length|body|integer(int32)|true|The charactersequence length of the GUID|
|» organizationId|body|string|true|The namespace of the organization where the generated GUIDs should be assigned.|

> Example responses

> 200 Response

```json
{
  "id4ns": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="create-guids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListOfId4ns](#schemalistofid4ns)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve GUIDs not in any collection

<a id="opIdgetGuidsWithoutCollection"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/guids/withoutCollection?organizationId=string' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/guids/withoutCollection`

<h3 id="retrieve-guids-not-in-any-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|query|string|true|The namespace of the organization to search GUIDs for|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "createdTimestamp": 1517232722,
      "holderOrganizationId": "string",
      "id4n": "3THvgrWxqgTFC4",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "properties": "de.example"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-guids-not-in-any-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfGuid](#schemapaginatedresponseofguid)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve GUID information

<a id="opIdgetGuid"></a>

> Code samples

```bash
curl https://example.com/api/v1/guids/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/guids/{id4n}`

<h3 id="retrieve-guid-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The GUID number|
|organizationId|query|string|false|The organization namespace to resolve.|

> Example responses

> 200 Response

```json
{
  "createdTimestamp": 1517232722,
  "holderOrganizationId": "string",
  "id4n": "3THvgrWxqgTFC4",
  "ownerOrganizationId": "string",
  "physicalState": "UNATTACHED",
  "properties": "de.example"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-guid-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Guid](#schemaguid)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Change GUID information.

<a id="opIdupdateGuid"></a>

> Code samples

```bash
curl https://example.com/api/v1/guids/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "physicalState": "UNATTACHED"
  }'
```

`PATCH /api/v1/guids/{id4n}`

Allows ownership transfer.

> Body parameter

```json
{
  "physicalState": "UNATTACHED"
}
```

<h3 id="change-guid-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The GUID number|
|body|body|[Guid](#schemaguid)|true|request|
|» physicalState|body|string|false|Physical attachment state of the GUID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» physicalState|UNATTACHED|
|» physicalState|ATTACHED|
|» physicalState|DETACHED|

> Example responses

> 200 Response

```json
{}
```

<h3 id="change-guid-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve ID4n information

<a id="opIdgetId4n"></a>

> Code samples

```bash
curl https://example.com/api/v1/id4ns/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/id4ns/{id4n}`

Retrieving basic information about an ID like the type and the creation time.

<h3 id="retrieve-id4n-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The ID to resolve to|
|organizationId|query|string|false|The organization namespace to resolve.|

> Example responses

> 200 Response

```json
{
  "createdTimestamp": 1517232722,
  "holderOrganizationId": "de.example",
  "id4n": "3THvgrWxqgTFC4",
  "label": "string",
  "ownerOrganizationId": "org.acme",
  "properties": "de.example",
  "type": "GUID"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-id4n-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Id4nPresentation](#schemaid4npresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve collections of an ID

<a id="opIdgetCollections"></a>

> Code samples

```bash
curl https://example.com/api/v1/id4ns/string/collections \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/id4ns/{id4n}/collections`

Retrieving all owned or holding collections the specified id4n is assigned to.

<h3 id="retrieve-collections-of-an-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The ID which the collections should contain|
|organizationId|query|string|false|The organization holding the collections.|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "createdTimestamp": 0,
      "holderOrganizationId": "string",
      "id4n": "string",
      "label": "string",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "type": "ROUTING_COLLECTION"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-collections-of-an-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfGuidCollection](#schemapaginatedresponseofguidcollection)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Import GS1/MAPP codes

<a id="opIdimportGS1Codes"></a>

> Code samples

```bash
curl https://example.com/api/v1/import/gs1 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "listOfGS1s": {
      "codes": [
        "string"
      ]
    },
    "organizationId": "de.acme"
  }'
```

`POST /api/v1/import/gs1`

Importing GS1/MAPP codes that contain unique components.

> Body parameter

```json
{
  "listOfGS1s": {
    "codes": [
      "string"
    ]
  },
  "organizationId": "de.acme"
}
```

<h3 id="import-gs1mapp-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportGS1CodesRequest](#schemaimportgs1codesrequest)|true|The information how the MAPP codes should be imported and the list of MAPP codes|
|» listOfGS1s|body|[ListOfGS1s](#schemalistofgs1s)|true|A list of GS1/MAPP codes|
|» organizationId|body|string|true|The organization where the GS1/Mapp code is imported.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="import-gs1mapp-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-history">History</h1>

Allows to retrieve a GUID's history and to publish new history items.

## List history

<a id="opIdfilteredList"></a>

> Code samples

```bash
curl https://example.com/api/v1/history/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/history/{id4n}`

Lists the history of a GUID

<h3 id="list-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|includePrivate|query|boolean|false|Also return private history entries|
|organization|query|string|false|Show only entries created by one of the given organizations. This parameter can be used multiple times.|
|type|query|[string]|false|Show only entries matching one of the given history item types. This parameter can be used multiple times.|
|qualifier|query|[string]|false|Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times.|
|fromDate|query|string(date-time)|false|From date time as UTC Date-Time format|
|toDate|query|string(date-time)|false|To date time as UTC Date-Time format|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|CREATED|
|type|DESTROYED|
|type|RECYCLED|
|type|SHIPMENT_PREPARED|
|type|STORED|
|type|RETRIEVED_FROM_STORAGE|
|type|PACKAGED|
|type|DISPATCHED|
|type|RECEIVED|
|type|DELIVERY_REFUSED|
|type|REPROCESSING_STARTED|
|type|REPROCESSING_STEP_STARTED|
|type|REPROCESSING_STEP_CANCELLED|
|type|REPROCESSING_STEP_FINISHED|
|type|REPROCESSING_CANCELLED|
|type|REPROCESSING_FINISHED|
|type|DISASSEMBLED|
|type|MAINTENANCE_STARTED|
|type|MAINTENANCE_STEP_STARTED|
|type|MAINTENANCE_STEP_CANCELLED|
|type|MAINTENANCE_STEP_FINISHED|
|type|MAINTENANCE_CANCELLED|
|type|MAINTENANCE_FINISHED|
|type|PRODUCTION_STARTED|
|type|PRODUCTION_CANCELLED|
|type|PRODUCTION_FINISHED|
|type|PRODUCTION_STEP_STARTED|
|type|PRODUCTION_STEP_CANCELLED|
|type|PRODUCTION_STEP_FINISHED|
|type|QUALITY_CHECK_PERFORMED|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "additionalProperties": {
        "property1": "string",
        "property2": "string"
      },
      "organizationId": "org.acme",
      "ownerOrganizationId": "de.bluerain",
      "sequenceId": 9784,
      "timestamp": 1517232722,
      "type": "DISPATCHED",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfHistoryItem](#schemapaginatedresponseofhistoryitem)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add history item

<a id="opIdaddItem"></a>

> Code samples

```bash
curl https://example.com/api/v1/history/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "additionalProperties": {
      "property1": "string",
      "property2": "string"
    },
    "organizationId": "org.acme",
    "type": "DISPATCHED",
    "visibility": {
      "public": true,
      "sharedOrganizationIds": [
        "de.acme",
        "com.porsche",
        "de.bluerain"
      ]
    }
  }'
```

`POST /api/v1/history/{id4n}`

Add a new history item

> Body parameter

```json
{
  "additionalProperties": {
    "property1": "string",
    "property2": "string"
  },
  "organizationId": "org.acme",
  "type": "DISPATCHED",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

<h3 id="add-history-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|body|body|[HistoryItem](#schemahistoryitem)|true|The history item to publish|
|» additionalProperties|body|object|false|History items custom additional properties|
|» » **additionalProperties**|body|string|false|none|
|» organizationId|body|string|true|Originator of the history item|
|» type|body|string|true|Type of the history item|
|» visibility|body|[Visibility](#schemavisibility)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|CREATED|
|» type|DESTROYED|
|» type|RECYCLED|
|» type|SHIPMENT_PREPARED|
|» type|STORED|
|» type|RETRIEVED_FROM_STORAGE|
|» type|PACKAGED|
|» type|DISPATCHED|
|» type|RECEIVED|
|» type|DELIVERY_REFUSED|
|» type|REPROCESSING_STARTED|
|» type|REPROCESSING_STEP_STARTED|
|» type|REPROCESSING_STEP_CANCELLED|
|» type|REPROCESSING_STEP_FINISHED|
|» type|REPROCESSING_CANCELLED|
|» type|REPROCESSING_FINISHED|
|» type|DISASSEMBLED|
|» type|MAINTENANCE_STARTED|
|» type|MAINTENANCE_STEP_STARTED|
|» type|MAINTENANCE_STEP_CANCELLED|
|» type|MAINTENANCE_STEP_FINISHED|
|» type|MAINTENANCE_CANCELLED|
|» type|MAINTENANCE_FINISHED|
|» type|PRODUCTION_STARTED|
|» type|PRODUCTION_CANCELLED|
|» type|PRODUCTION_FINISHED|
|» type|PRODUCTION_STEP_STARTED|
|» type|PRODUCTION_STEP_CANCELLED|
|» type|PRODUCTION_STEP_FINISHED|
|» type|QUALITY_CHECK_PERFORMED|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-history-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## DEPRECATED - List history

<a id="opIdlist"></a>

> Code samples

```bash
curl https://example.com/api/v1/history/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/history/{id4n}/{organizationId}`

<aside class="warning">
This operation is deprecated
</aside>

DEPRECATED - please use filteredList with organization parameter to achieve the same functionality

<h3 id="deprecated---list-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|organizationId|path|string|true|organizationId|
|includePrivate|query|boolean|false|Also return private history entries|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "additionalProperties": {
        "property1": "string",
        "property2": "string"
      },
      "organizationId": "org.acme",
      "ownerOrganizationId": "de.bluerain",
      "sequenceId": 9784,
      "timestamp": 1517232722,
      "type": "DISPATCHED",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="deprecated---list-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfHistoryItem](#schemapaginatedresponseofhistoryitem)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Get history item

<a id="opIdretrieveItem"></a>

> Code samples

```bash
curl https://example.com/api/v1/history/string/string/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/history/{id4n}/{organizationId}/{sequenceId}`

<h3 id="get-history-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|organizationId|path|string|true|organizationId|
|sequenceId|path|integer(int32)|true|sequenceId|

> Example responses

> 200 Response

```json
{
  "additionalProperties": {
    "property1": "string",
    "property2": "string"
  },
  "organizationId": "org.acme",
  "ownerOrganizationId": "de.bluerain",
  "sequenceId": 9784,
  "timestamp": 1517232722,
  "type": "DISPATCHED",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-history-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HistoryItem](#schemahistoryitem)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update history item

<a id="opIdupdateItem"></a>

> Code samples

```bash
curl https://example.com/api/v1/history/string/string/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "organizationId": "de.acme",
    "visibility": {
      "public": true,
      "sharedOrganizationIds": [
        "de.acme",
        "com.porsche",
        "de.bluerain"
      ]
    }
  }'
```

`PATCH /api/v1/history/{id4n}/{organizationId}/{sequenceId}`

> Body parameter

```json
{
  "organizationId": "de.acme",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

<h3 id="update-history-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|organizationId|path|string|true|organizationId|
|sequenceId|path|integer(int32)|true|sequenceId|
|body|body|[HistoryItemUpdate](#schemahistoryitemupdate)|true|update|
|» organizationId|body|string|false|New organization id displayed for this item. If given, must match the holder of GUID and the organization the history item is found under.|
|» visibility|body|[Visibility](#schemavisibility)|false|none|

> Example responses

> 200 Response

```json
{
  "additionalProperties": {
    "property1": "string",
    "property2": "string"
  },
  "organizationId": "org.acme",
  "ownerOrganizationId": "de.bluerain",
  "sequenceId": 9784,
  "timestamp": 1517232722,
  "type": "DISPATCHED",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

<h3 id="update-history-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HistoryItem](#schemahistoryitem)|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Set history item visibility

<a id="opIdupdateItemVisibility"></a>

> Code samples

```bash
curl https://example.com/api/v1/history/string/string/0/visibility \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }'
```

`PUT /api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility`

> Body parameter

```json
{
  "public": true,
  "sharedOrganizationIds": [
    "de.acme",
    "com.porsche",
    "de.bluerain"
  ]
}
```

<h3 id="set-history-item-visibility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|organizationId|path|string|true|organizationId|
|sequenceId|path|integer(int32)|true|sequenceId|
|body|body|[Visibility](#schemavisibility)|true|History item visibility restrictions|
|» public|body|boolean|false|Document is publicly readable (if ID4N is owned by the same organization)|
|» sharedOrganizationIds|body|[string]|false|Document is readable by these organizations (independend of ID4N ownership)|

> Example responses

> 200 Response

```json
{
  "additionalProperties": {
    "property1": "string",
    "property2": "string"
  },
  "organizationId": "org.acme",
  "ownerOrganizationId": "de.bluerain",
  "sequenceId": 9784,
  "timestamp": 1517232722,
  "type": "DISPATCHED",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="set-history-item-visibility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HistoryItem](#schemahistoryitem)|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-images">Images</h1>

Services can use images stored with public visibility. This API allows you to retrieve the stored image by ID.

## Resolve image

<a id="opIdresolveImageUsingGET"></a>

> Code samples

```bash
curl https://example.com/api/v1/public/image/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/image/{imageID}`

<h3 id="resolve-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageID|path|string|true|The id of the image to be resolved.|

> Example responses

> 200 Response

```json
"string"
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="resolve-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-messaging">Messaging</h1>

Organization Messaging Controller

## getDefaultQueue

<a id="opIdgetDefaultQueue"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/messaging \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/messaging`

<h3 id="getdefaultqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|

> Example responses

> 200 Response

```json
{
  "active": true,
  "id": "<default>",
  "waitingMessages": true
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="getdefaultqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QueuePresentation](#schemaqueuepresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## patchDefaultQueue

<a id="opIdpatchDefaultQueue"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/messaging \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "active": true,
    "id": "<default>",
    "purgeQueue": false
  }'
```

`PATCH /api/v1/organizations/{organizationId}/messaging`

> Body parameter

```json
{
  "active": true,
  "id": "<default>",
  "purgeQueue": false
}
```

<h3 id="patchdefaultqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|body|body|[QueueUpdateRequest](#schemaqueueupdaterequest)|true|request|
|» active|body|boolean|false|If this value is set to false the queue will be deleted.|
|» id|body|string|false|none|
|» purgeQueue|body|boolean|false|Set this value to true if you want to purge the queue.|

<h3 id="patchdefaultqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Enqueue a custom message

<a id="opIdenqueueCustomMessage"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/messaging/enqueueCustomMessage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "data": "x = y",
    "name": "<event name>"
  }'
```

`POST /api/v1/organizations/{organizationId}/messaging/enqueueCustomMessage`

Enqueue a custom organisation message with custom data.

> Body parameter

```json
{
  "data": "x = y",
  "name": "<event name>"
}
```

<h3 id="enqueue-a-custom-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The organisation namespace|
|body|body|[SendCustomMessage](#schemasendcustommessage)|true|request|
|» data|body|object|true|Custom data in a map. You may use JSON content|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|The name of the message (organisation specific)|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="enqueue-a-custom-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-meta-information">Meta Information</h1>

App Info Controller

## Retrieve version information about ID4i

<a id="opIdapplicationInfo"></a>

> Code samples

```bash
curl https://example.com/api/v1/info \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/info`

Retrieving version information about ID4i.

> Example responses

> 200 Response

```json
{
  "branch": "string",
  "commitTime": "string",
  "name": "string",
  "productionMode": true,
  "revision": "string",
  "version": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-version-information-about-id4i-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AppInfoPresentation](#schemaappinfopresentation)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-organizations">Organizations</h1>

Country Controller

## List countries

<a id="opIdlistCountries"></a>

> Code samples

```bash
curl https://example.com/api/v1/countries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/countries`

<h3 id="list-countries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "code": "string",
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfCountry](#schemapaginatedresponseofcountry)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Create organization

<a id="opIdcreateOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "ACME Inc.",
    "namespace": "de.acme"
  }'
```

`POST /api/v1/organizations`

Creating a new organization.

> Body parameter

```json
{
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

<h3 id="create-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Organization](#schemaorganization)|true|Organization to be created|
|» name|body|string|true|The name of the organization|
|» namespace|body|string|true|The namespace of the organization|

> Example responses

> 200 Response

```json
{
  "id": 100,
  "logoURL": "/api/v1/public/images/abcdef",
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="create-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Organization](#schemaorganization)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Find organization by id/namespace

<a id="opIdfindOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}`

Returns a single organization.

<h3 id="find-organization-by-idnamespace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization to be retrieved.|

> Example responses

> 200 Response

```json
{
  "id": 100,
  "logoURL": "/api/v1/public/images/abcdef",
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="find-organization-by-idnamespace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Organization](#schemaorganization)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update organization

<a id="opIdupdateOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "name": "ACME Inc."
  }'
```

`PUT /api/v1/organizations/{organizationId}`

> Body parameter

```json
{
  "name": "ACME Inc."
}
```

<h3 id="update-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization to be updated.|
|body|body|[OrganizationUpdate](#schemaorganizationupdate)|true|Updated organization object|
|» name|body|string|false|The name of the organization|

> Example responses

> 200 Response

```json
{
  "id": 100,
  "logoURL": "/api/v1/public/images/abcdef",
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="update-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Organization](#schemaorganization)|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Delete organization

<a id="opIddeleteOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/organizations/{organizationId}`

<h3 id="delete-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization to be deleted.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="delete-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve billing address

<a id="opIdfindOrganizationBillingAddress"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/addresses/billing \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/addresses/billing`

<h3 id="retrieve-billing-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|

> Example responses

> 200 Response

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "countryName": "Germany",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-billing-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationAddress](#schemaorganizationaddress)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Store billing address

<a id="opIdupdateOrganizationBillingAddress"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/addresses/billing \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "city": "MyCity",
    "companyName": "ACME Inc.",
    "countryCode": "DE",
    "firstname": "Max",
    "lastname": "Muster",
    "postCode": 12345,
    "street": "Examplestreet 1",
    "telephone": "+49 8088 12345"
  }'
```

`PUT /api/v1/organizations/{organizationId}/addresses/billing`

> Body parameter

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

<h3 id="store-billing-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|body|body|[OrganizationAddress](#schemaorganizationaddress)|true|addressResource|
|» city|body|string|true|none|
|» companyName|body|string|false|none|
|» countryCode|body|string|true|The ISO 3166 two-letter country code|
|» firstname|body|string|true|none|
|» lastname|body|string|true|none|
|» postCode|body|string|true|none|
|» street|body|string|true|none|
|» telephone|body|string|false|The telephone number e.g.|

> Example responses

> 200 Response

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "countryName": "Germany",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="store-billing-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationAddress](#schemaorganizationaddress)|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove billing address

<a id="opIddeleteOrganizationBillingAddress"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/addresses/billing \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/organizations/{organizationId}/addresses/billing`

<h3 id="remove-billing-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-billing-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve address

<a id="opIdfindOrganizationAddress"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/addresses/default \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/addresses/default`

<h3 id="retrieve-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|

> Example responses

> 200 Response

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "countryName": "Germany",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationAddress](#schemaorganizationaddress)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Store address

<a id="opIdupdateOrganizationAddress"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/addresses/default \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "city": "MyCity",
    "companyName": "ACME Inc.",
    "countryCode": "DE",
    "firstname": "Max",
    "lastname": "Muster",
    "postCode": 12345,
    "street": "Examplestreet 1",
    "telephone": "+49 8088 12345"
  }'
```

`PUT /api/v1/organizations/{organizationId}/addresses/default`

> Body parameter

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

<h3 id="store-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|body|body|[OrganizationAddress](#schemaorganizationaddress)|true|addressResource|
|» city|body|string|true|none|
|» companyName|body|string|false|none|
|» countryCode|body|string|true|The ISO 3166 two-letter country code|
|» firstname|body|string|true|none|
|» lastname|body|string|true|none|
|» postCode|body|string|true|none|
|» street|body|string|true|none|
|» telephone|body|string|false|The telephone number e.g.|

> Example responses

> 200 Response

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "countryName": "Germany",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="store-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationAddress](#schemaorganizationaddress)|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update organization logo

<a id="opIdsetOrganizationLogo"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/logo \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /api/v1/organizations/{organizationId}/logo`

Updating an organization logo using a multipart file upload.

> Body parameter

```yaml
file: string
```

<h3 id="update-organization-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization where the logo should be updated.|
|body|body|object|true|none|
|» file|body|string(binary)|true|An image containing the new logo.|

> Example responses

> 200 Response

```json
{
  "uri": "/api/v1/public/image/bc671c63-4a9b-46e7-8c59-9bbe1917e6cc"
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="update-organization-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PublicImagePresentation](#schemapublicimagepresentation)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Delete organization logo

<a id="opIddeleteOrganizationLogo"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/logo \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/organizations/{organizationId}/logo`

<h3 id="delete-organization-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization where the logo should be deleted.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="delete-organization-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Get partners of an organization

<a id="opIdgetPartnerOrganizations"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/partner \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/partner`

Listing partners in a paginated manner.

<h3 id="get-partners-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization to query partner organizations|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "logoURL": "/api/v1/public/images/abcdef",
      "name": "ACME Inc.",
      "namespace": "de.acme"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="get-partners-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfPartnerOrganization](#schemapaginatedresponseofpartnerorganization)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Add partner

<a id="opIdaddPartnerOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/partner \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "organizationId": "org.acme"
  }'
```

`PUT /api/v1/organizations/{organizationId}/partner`

Adding a partner organization. If the given organization is already a partner the result will be state 200 too.

> Body parameter

```json
{
  "organizationId": "org.acme"
}
```

<h3 id="add-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization|
|body|body|[AddPartnerRequest](#schemaaddpartnerrequest)|true|request|
|» organizationId|body|string|true|The namespace of the partner organization to add|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="add-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Remove partner

<a id="opIdremovePartnerOrganization"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/partner \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "organizationId": "org.acme"
  }'
```

`DELETE /api/v1/organizations/{organizationId}/partner`

Removing a partner organization

> Body parameter

```json
{
  "organizationId": "org.acme"
}
```

<h3 id="remove-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization|
|body|body|[RemovePartnerRequest](#schemaremovepartnerrequest)|true|request|
|» organizationId|body|string|true|The namespace of the partner organization to remove|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="remove-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List my privileges

<a id="opIdgetOrganizationPrivileges"></a>

> Code samples

```bash
curl https://example.com/api/v1/organizations/string/privileges \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/organizations/{organizationId}/privileges`

Listing all privileges of the current user/APIKey of the specified organization.

<h3 id="list-my-privileges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The namespace of the organization|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-my-privileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="list-my-privileges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-public-services">Public Services</h1>

Go Controller

## List public documents

<a id="opIdlistAllPublicDocuments"></a>

> Code samples

```bash
curl https://example.com/api/v1/public/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/documents/{id4n}`

Listing all public documents of an id4n

<h3 id="list-public-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|query|string|false|organizationId|
|id4n|path|string|true|id4n|
|owner|query|string|false|Filter by owner organization|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "filename": "publicInfo.pdf",
      "mimeType": "text/plain",
      "ownerOrganizationId": "de.bluerain",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-public-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfDocument](#schemapaginatedresponseofdocument)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Read public document contents

<a id="opIdreadPublicDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/public/documents/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/documents/{id4n}/{organizationId}/{fileName}`

<h3 id="read-public-document-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|fileName|path|string|true|fileName|

> Example responses

> 200 Response

```json
"string"
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="read-public-document-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve a public document (meta-data only, no content)

<a id="opIdgetPublicDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/public/documents/string/string/string/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata`

<h3 id="retrieve-a-public-document-meta-data-only-no-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|fileName|path|string|true|fileName|

> Example responses

> 200 Response

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "ownerOrganizationId": "de.bluerain",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-a-public-document-meta-data-only-no-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Document](#schemadocument)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Shows the public history of the given GUID

<a id="opIdlistPublicHistory"></a>

> Code samples

```bash
curl https://example.com/api/v1/public/history/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/history/{id4n}`

Only contains public history items

<h3 id="shows-the-public-history-of-the-given-guid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|GUID to retrieve the history for|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "additionalProperties": {
        "property1": "string",
        "property2": "string"
      },
      "organizationId": "org.acme",
      "ownerOrganizationId": "de.bluerain",
      "sequenceId": 9784,
      "timestamp": 1517232722,
      "type": "DISPATCHED",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="shows-the-public-history-of-the-given-guid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfHistoryItem](#schemapaginatedresponseofhistoryitem)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Read public organization information

<a id="opIdreadOrganizationInfo"></a>

> Code samples

```bash
curl https://example.com/api/v1/public/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/organizations/{organizationId}`

<h3 id="read-public-organization-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
{
  "id": 100,
  "logoURL": "/api/v1/public/images/abcdef",
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="read-public-organization-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Organization](#schemaorganization)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve all public routes for a GUID

<a id="opIdgetRoutes"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/public/routes/string?type=web' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/public/routes/{id4n}`

<h3 id="retrieve-all-public-routes-for-a-guid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|type|query|string|true|type|
|interpolate|query|boolean|false|interpolate|

> Example responses

> 200 Response

```json
[
  {
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "priority": 0,
    "public": true,
    "type": "string",
    "validUntil": 0
  }
]
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-all-public-routes-for-a-guid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="retrieve-all-public-routes-for-a-guid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Route](#schemaroute)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Forward

<a id="opIdgo"></a>

> Code samples

```bash
curl https://example.com/go/string \
  -H 'Accept: application/json'
```

`GET /go/{guid}`

Forwarding to the designated route defined in the routing,

<h3 id="forward-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|guid|

> Example responses

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="forward-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

## Resolve owner of id4n

<a id="opIdresolveWhoIsEntry"></a>

> Code samples

```bash
curl https://example.com/whois/string \
  -H 'Accept: application/json'
```

`GET /whois/{id4n}`

<h3 id="resolve-owner-of-id4n-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|

> Example responses

> 200 Response

```json
{
  "aliases": {
    "property1": "string",
    "property2": "string"
  },
  "organization": {
    "id": 100,
    "logoURL": "/api/v1/public/images/abcdef",
    "name": "ACME Inc.",
    "namespace": "de.acme"
  },
  "organizationAddress": {
    "city": "MyCity",
    "companyName": "ACME Inc.",
    "countryCode": "DE",
    "countryName": "Germany",
    "firstname": "Max",
    "lastname": "Muster",
    "postCode": 12345,
    "street": "Examplestreet 1",
    "telephone": "+49 8088 12345"
  }
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="resolve-owner-of-id4n-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WhoIsResponse](#schemawhoisresponse)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="id4i-api-routing">Routing</h1>

Routing Controller

## Retrieve routing file

<a id="opIdgetRoutingFile"></a>

> Code samples

```bash
curl https://example.com/api/v1/routingfiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/routingfiles/{id4n}`

<h3 id="retrieve-routing-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|organizationId|query|string|false|organizationId|

> Example responses

> 200 Response

```json
{
  "options": {
    "deleteOutdatedRoutes": true
  },
  "routes": [
    {
      "params": {
        "property1": "string",
        "property2": "string"
      },
      "priority": 0,
      "public": true,
      "type": "string",
      "validUntil": 0
    }
  ]
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-routing-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RoutingFile](#schemaroutingfile)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Store routing file

<a id="opIdupdateRoutingFile"></a>

> Code samples

```bash
curl https://example.com/api/v1/routingfiles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "organizationId": "string",
    "routing": {
      "options": {
        "deleteOutdatedRoutes": true
      },
      "routes": [
        {
          "params": {
            "property1": "string",
            "property2": "string"
          },
          "priority": 0,
          "public": true,
          "type": "string",
          "validUntil": 0
        }
      ]
    }
  }'
```

`PUT /api/v1/routingfiles/{id4n}`

> Body parameter

```json
{
  "organizationId": "string",
  "routing": {
    "options": {
      "deleteOutdatedRoutes": true
    },
    "routes": [
      {
        "params": {
          "property1": "string",
          "property2": "string"
        },
        "priority": 0,
        "public": true,
        "type": "string",
        "validUntil": 0
      }
    ]
  }
}
```

<h3 id="store-routing-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|body|body|[RoutingFileRequest](#schemaroutingfilerequest)|true|rfr|
|» organizationId|body|string|false|none|
|» routing|body|[RoutingFile](#schemaroutingfile)|true|none|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="store-routing-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve current route of a GUID (or ID4N)

<a id="opIdgetRoute"></a>

> Code samples

```bash
curl https://example.com/api/v1/routingfiles/string/route/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/routingfiles/{id4n}/route/{type}`

<h3 id="retrieve-current-route-of-a-guid-or-id4n-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|type|path|string|true|The type of route you want to have|
|privateRoutes|query|boolean|false|privateRoutes|
|publicRoutes|query|boolean|false|publicRoutes|
|interpolate|query|boolean|false|interpolate|

> Example responses

> 200 Response

```json
{
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "priority": 0,
  "public": true,
  "type": "string",
  "validUntil": 0
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-current-route-of-a-guid-or-id4n-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Route](#schemaroute)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve all routes of a GUID (or ID4N)

<a id="opIdgetAllRoutes"></a>

> Code samples

```bash
curl https://example.com/api/v1/routingfiles/string/routes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/routingfiles/{id4n}/routes/{type}`

<h3 id="retrieve-all-routes-of-a-guid-or-id4n-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|type|path|string|true|The type of route you want to have|
|organizationId|query|string|false|organizationId|
|interpolate|query|boolean|false|interpolate|

> Example responses

> 200 Response

```json
[
  {
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "priority": 0,
    "public": true,
    "type": "string",
    "validUntil": 0
  }
]
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-all-routes-of-a-guid-or-id4n-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<h3 id="retrieve-all-routes-of-a-guid-or-id4n-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Route](#schemaroute)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-storage">Storage</h1>

Document Storage Controller

## List documents

<a id="opIdlistAllDocuments"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{id4n}`

Listing all documents of an id4n

<h3 id="list-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|id4n|
|owner|query|string|false|Filter by owner organization|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "filename": "publicInfo.pdf",
      "mimeType": "text/plain",
      "ownerOrganizationId": "de.bluerain",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfDocument](#schemapaginatedresponseofdocument)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## List organization specific documents

<a id="opIdlistDocuments"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{id4n}/{organizationId}`

Listing documents of an id4n seen by a specified organization

<h3 id="list-organization-specific-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|owner|query|string|false|Filter by owner organization|
|offset|query|integer(int32)|false|Start with the n-th element|
|limit|query|integer(int32)|false|The maximum count of returned elements|

> Example responses

> 200 Response

```json
{
  "elements": [
    {
      "filename": "publicInfo.pdf",
      "mimeType": "text/plain",
      "ownerOrganizationId": "de.bluerain",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="list-organization-specific-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaginatedResponseOfDocument](#schemapaginatedresponseofdocument)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Put an document for an id4n

<a id="opIdputDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'content=@/path/to/file'
```

`PUT /api/v1/documents/{id4n}/{organizationId}`

Creating or overwriting an existing document 

> Body parameter

```yaml
content: string
```

<h3 id="put-an-document-for-an-id4n-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|body|body|object|true|none|
|» content|body|string(binary)|true|content|

> Example responses

> 200 Response

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "ownerOrganizationId": "de.bluerain",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="put-an-document-for-an-id4n-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Document](#schemadocument)|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Create an document for an id4n

<a id="opIdcreateDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'content=@/path/to/file'
```

`POST /api/v1/documents/{id4n}/{organizationId}`

The documents' mime type is suggested on octet-stream data. Otherwise the specified content mime type is used.

> Body parameter

```yaml
content: string
```

<h3 id="create-an-document-for-an-id4n-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|body|body|object|true|none|
|» content|body|string(binary)|true|content|

> Example responses

> 200 Response

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "ownerOrganizationId": "de.bluerain",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="create-an-document-for-an-id4n-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Document](#schemadocument)|
|201|Created|Created|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Read document contents

<a id="opIdreadDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{id4n}/{organizationId}/{fileName}`

<h3 id="read-document-contents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|fileName|path|string|true|fileName|

> Example responses

> 200 Response

```json
"string"
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="read-document-contents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Delete a document

<a id="opIddeleteDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /api/v1/documents/{id4n}/{organizationId}/{fileName}`

<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|fileName|path|string|true|fileName|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Retrieve a document (meta-data only, no content)

<a id="opIdgetDocument"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string/string/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata`

<h3 id="retrieve-a-document-meta-data-only-no-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|fileName|path|string|true|fileName|

> Example responses

> 200 Response

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "ownerOrganizationId": "de.bluerain",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="retrieve-a-document-meta-data-only-no-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Document](#schemadocument)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Update a document

<a id="opIdupdateDocumentMetadata"></a>

> Code samples

```bash
curl https://example.com/api/v1/documents/string/string/string/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "filename": "publicInfo.pdf",
    "mimeType": "text/plain",
    "visibility": {
      "public": true,
      "sharedWithOrganizationIds": [
        "de.acme",
        "com.porsche",
        "de.bluerain"
      ]
    }
  }'
```

`PATCH /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata`

> Body parameter

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "visibility": {
    "public": true,
    "sharedWithOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

<h3 id="update-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|organizationId|
|id4n|path|string|true|id4n|
|fileName|path|string|true|fileName|
|body|body|[DocumentUpdate](#schemadocumentupdate)|true|document|
|» filename|body|string|false|File Name|
|» mimeType|body|string|false|Mime Type|
|» visibility|body|[VisibilityUpdate](#schemavisibilityupdate)|false|none|

> Example responses

> 200 Response

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "ownerOrganizationId": "de.bluerain",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

<h3 id="update-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Document](#schemadocument)|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Read data from microstorage

<a id="opIdreadFromMicrostorage"></a>

> Code samples

```bash
curl https://example.com/api/v1/microstorage/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/microstorage/{id4n}/{organization}`

<h3 id="read-data-from-microstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization|path|string|true|organization|
|id4n|path|string|true|id4n|

> Example responses

> 200 Response

```json
"string"
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="read-data-from-microstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Write data to microstorage

<a id="opIdwriteToMicrostorage"></a>

> Code samples

```bash
curl https://example.com/api/v1/microstorage/string/string \
  -X PUT \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`PUT /api/v1/microstorage/{id4n}/{organization}`

<h3 id="write-data-to-microstorage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization|path|string|true|organization|
|id4n|path|string|true|id4n|
|Content-Type|header|string|false|Content-Type|
|Content-Length|header|integer(int64)|false|Content-Length|
|body|body|string(byte)|false|body|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="write-data-to-microstorage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

<h1 id="id4i-api-transfer">Transfer</h1>

Id 4n Transfer Controller

## Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership

<a id="opIdreceive"></a>

> Code samples

```bash
curl https://example.com/api/v1/transfers/string/receiveInfo \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "organizationId": "de.id4i"
  }'
```

`PUT /api/v1/transfers/{id4n}/receiveInfo`

Taking ownership can be forbidden by a previous owner. See methods prepare and getInfo

> Body parameter

```json
{
  "organizationId": "de.id4i"
}
```

<h3 id="transfer-a-guid-or-collection-obtaining-it-ie-becoming-the-holder-and-if-allowed-also-taking-ownership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|This ID4N identifies the object to take hold of|
|body|body|[TransferReceiveInfo](#schematransferreceiveinfo)|true|Required information to receive an id4n object|
|» organizationId|body|string|true|Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.|

> Example responses

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="transfer-a-guid-or-collection-obtaining-it-ie-becoming-the-holder-and-if-allowed-also-taking-ownership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Show transfer preparation information

<a id="opIdgetSendInfo"></a>

> Code samples

```bash
curl https://example.com/api/v1/transfers/string/sendInfo \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /api/v1/transfers/{id4n}/sendInfo`

<h3 id="show-transfer-preparation-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The ID4N to retrieve information about|

> Example responses

> 200 Response

```json
{
  "holderOrganizationId": "de.id4i",
  "keepOwnership": true,
  "openForClaims": false,
  "ownerOrganizationId": "de.bluerain",
  "recipientOrganizationIds": [
    "de.acme",
    "com.porsche",
    "de.bluerain"
  ]
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="show-transfer-preparation-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TransferSendInfo](#schematransfersendinfo)|
|202|Accepted|Accepted|None|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

## Prepare an object for transfer

<a id="opIdprepare"></a>

> Code samples

```bash
curl https://example.com/api/v1/transfers/string/sendInfo \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "keepOwnership": true,
    "openForClaims": false,
    "recipientOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }'
```

`PUT /api/v1/transfers/{id4n}/sendInfo`

> Body parameter

```json
{
  "keepOwnership": true,
  "openForClaims": false,
  "recipientOrganizationIds": [
    "de.acme",
    "com.porsche",
    "de.bluerain"
  ]
}
```

<h3 id="prepare-an-object-for-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id4n|path|string|true|The ID4N to prepare for transfer|
|body|body|[TransferSendInfo](#schematransfersendinfo)|true|Transfer preparation status|
|» keepOwnership|body|boolean|true|Keep the public ownership while transferring the object|
|» openForClaims|body|boolean|true|Allow anyone who knows (or can scan) the ID4N to claim ownership of this object|
|» recipientOrganizationIds|body|[string]|true|Allow only these organizations to obtain this object|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 405 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 406 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {}
  ],
  "message": "string"
}
```

<h3 id="prepare-an-object-for-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ApiError](#schemaapierror)|
|401|Unauthorized|Unauthorized|[ApiError](#schemaapierror)|
|403|Forbidden|Forbidden|[ApiError](#schemaapierror)|
|404|Not Found|Not Found|[ApiError](#schemaapierror)|
|405|Method Not Allowed|Method not allowed|[ApiError](#schemaapierror)|
|406|Not Acceptable|Not Acceptable|[ApiError](#schemaapierror)|
|409|Conflict|Conflict|[ApiError](#schemaapierror)|
|415|Unsupported Media Type|Unsupported Media Type|[ApiError](#schemaapierror)|
|500|Internal Server Error|Internal Server Error|[ApiError](#schemaapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization
</aside>

# Schemas

<h2 id="tocS_AccountCredentials">AccountCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcredentials"></a>
<a id="schema_AccountCredentials"></a>
<a id="tocSaccountcredentials"></a>
<a id="tocsaccountcredentials"></a>

```json
{
  "login": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|login|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocS_AddApiKeyPrivilegeRequest">AddApiKeyPrivilegeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddapikeyprivilegerequest"></a>
<a id="schema_AddApiKeyPrivilegeRequest"></a>
<a id="tocSaddapikeyprivilegerequest"></a>
<a id="tocsaddapikeyprivilegerequest"></a>

```json
{
  "privilege": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privilege|string|true|none|none|

<h2 id="tocS_AddPartnerRequest">AddPartnerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddpartnerrequest"></a>
<a id="schema_AddPartnerRequest"></a>
<a id="tocSaddpartnerrequest"></a>
<a id="tocsaddpartnerrequest"></a>

```json
{
  "organizationId": "org.acme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|true|none|The namespace of the partner organization to add|

<h2 id="tocS_ApiError">ApiError</h2>
<!-- backwards compatibility -->
<a id="schemaapierror"></a>
<a id="schema_ApiError"></a>
<a id="tocSapierror"></a>
<a id="tocsapierror"></a>

```json
{
  "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
  "errorId": "string",
  "errorList": [
    {
      "code": "ERR_REGISTRATION_VERIFICATION_NO_TOKEN",
      "errorId": "string",
      "errorList": [
        {}
      ],
      "message": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|errorId|string|true|none|none|
|errorList|[[ApiError](#schemaapierror)]|true|none|none|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|ERR_REGISTRATION_VERIFICATION_NO_TOKEN|
|code|ERR_REGISTRATION_VERIFICATION_INVALID_TOKEN|
|code|ERR_REGISTRATION_VERIFICATION_EXPIRED_TOKEN|
|code|ERR_AUTHENTICATION_NO_TOKEN|
|code|ERR_AUTHENTICATION_INVALID_TOKEN|
|code|ERR_AUTHENTICATION_EXPIRED_TOKEN|
|code|ERR_AUTHENTICATION_FAILED|
|code|ERR_AUTHORIZATION_MISSING_PRIVILEGES|
|code|ERR_AUTHORIZATION_FORBIDDEN|
|code|ERR_AUTHORIZATION_REQUIRE_USER|
|code|ERR_INPUT_VALIDATION_FAILED|
|code|ERR_FIELD_INPUT_VALIDATION_FAILED|
|code|ERR_VALIDATION_CONSTRAINT_FAILED|
|code|ERR_INPUT_NOT_READABLE|
|code|ERR_INVALID_INPUT_PARAMETER|
|code|ERR_GUID_CREATION|
|code|ERR_INVALID_ID4N_OBJECT_TYPE|
|code|ERR_MISSING_BILLING_INFORMATION|
|code|ERR_COLLECTION_UPDATE_DENIED|
|code|ERR_ENTITY_NOT_FOUND|
|code|ERR_ENTITY_TOO_BIG|
|code|ERR_DUPLICATE|
|code|ERR_INTERNAL|
|code|ERR_UNKNOWN|
|code|ERR_INVALID_ORGANIZATION_USERROLE|
|code|ERR_ORGANIZATION_ROLE_INCONSISTENCY|
|code|ERR_ORGANIZATION_NOT_DELETABLE|
|code|ERR_USER_ALREADY_IN_ORGANIZATION|
|code|ERR_USER_INVITATION_NEEDS_MINIMUM_ONE_ROLE|
|code|ERR_USER_INVITATION_SPECIFY_EMAIL_OR_USERNAME|
|code|ERR_USER_DEACTIVATED|
|code|ERR_LANGUAGE_NOT_SUPPORTED|
|code|ERR_EMAIL_MISSING_TEMPLATE_PARAM|
|code|ERR_EMAIL_TEMPLATE_NOT_AVAILABLE|
|code|ERR_EMAIL_PREPARATION_FAILED|
|code|ERR_IMAGE_CONVERSION|
|code|ERR_UPLOAD_TOO_LARGE|
|code|ERR_INVALID_ALIAS_TYPE|
|code|ERR_INVALID_URI_TEMPLATE|
|code|ERR_INVALID_URI_TEMPLATE_VARIABLE|
|code|ERR_INVALID_NAMESPACE|
|code|ERR_INVALID_PROPERTY_KEY|
|code|ERR_INVALID_FILTER|
|code|ERR_NAMESPACE_ALREADY_EXISTS|
|code|ERR_INSECURE_PASSWORD|
|code|ERR_TRANSFER_DENIED|
|code|ERR_INVALID_PHYSICAL_STATE|
|code|ERR_INVALID_HISTORY_PROPERTY_NAMESPACE|
|code|ERR_INVALID_HISTORY_PROPERTY_VALUE|
|code|ERR_ORGA_CANNOT_BE_OWN_PARTNER|
|code|ERR_INVALID_GS1_CODE|
|code|ERR_INVALID_GS1_CHAR_IN_CODE|
|code|ERR_INVALID_GS1_CODE_NOT_UNIQUE|
|code|ERR_INVALID_GS1_GTIN|
|code|ERR_GS1_CODE_CURRENTLY_UNSUPPORTED|

<h2 id="tocS_ApiKeyChangeRequest">ApiKeyChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapikeychangerequest"></a>
<a id="schema_ApiKeyChangeRequest"></a>
<a id="tocSapikeychangerequest"></a>
<a id="tocsapikeychangerequest"></a>

```json
{
  "active": true,
  "newLabel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|newLabel|string|true|none|none|

<h2 id="tocS_ApiKeyCreationRequest">ApiKeyCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycreationrequest"></a>
<a id="schema_ApiKeyCreationRequest"></a>
<a id="tocSapikeycreationrequest"></a>
<a id="tocsapikeycreationrequest"></a>

```json
{
  "label": "string",
  "organizationId": "de.acme",
  "secret": "stringstri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|organizationId|string|true|none|none|
|secret|string|true|none|none|

<h2 id="tocS_ApiKeyPresentation">ApiKeyPresentation</h2>
<!-- backwards compatibility -->
<a id="schemaapikeypresentation"></a>
<a id="schema_ApiKeyPresentation"></a>
<a id="tocSapikeypresentation"></a>
<a id="tocsapikeypresentation"></a>

```json
{
  "active": true,
  "createdAt": 1517232722,
  "createdBy": "user123",
  "key": "39978f49-6ff1-4147-bf0f-9910185084b7",
  "label": "My Api Key",
  "organizationId": "de.acme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Whether this API key is active|
|createdAt|integer(int64)|true|none|The UTC unix timestamp of when this api key has been created|
|createdBy|string|true|none|none|
|key|string|true|none|The api key identifier|
|label|string|true|none|The label / name of the api key|
|organizationId|string|true|none|The organization namespace this api key belongs to|

<h2 id="tocS_ApiKeyPrivilege">ApiKeyPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyprivilege"></a>
<a id="schema_ApiKeyPrivilege"></a>
<a id="tocSapikeyprivilege"></a>
<a id="tocsapikeyprivilege"></a>

```json
{
  "id4nAssociated": true,
  "privilege": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id4nAssociated|boolean|true|none|none|
|privilege|string|true|none|none|

<h2 id="tocS_ApiKeyPrivilegeInfo">ApiKeyPrivilegeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyprivilegeinfo"></a>
<a id="schema_ApiKeyPrivilegeInfo"></a>
<a id="tocSapikeyprivilegeinfo"></a>
<a id="tocsapikeyprivilegeinfo"></a>

```json
{
  "allowsBillableOperations": true,
  "helpText": "string",
  "id4nAssociated": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsBillableOperations|boolean|false|none|none|
|helpText|string|false|none|none|
|id4nAssociated|boolean|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_AppInfoPresentation">AppInfoPresentation</h2>
<!-- backwards compatibility -->
<a id="schemaappinfopresentation"></a>
<a id="schema_AppInfoPresentation"></a>
<a id="tocSappinfopresentation"></a>
<a id="tocsappinfopresentation"></a>

```json
{
  "branch": "string",
  "commitTime": "string",
  "name": "string",
  "productionMode": true,
  "revision": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|none|
|commitTime|string|false|none|none|
|name|string|false|none|none|
|productionMode|boolean|false|none|none|
|revision|string|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_BillingPosition">BillingPosition</h2>
<!-- backwards compatibility -->
<a id="schemabillingposition"></a>
<a id="schema_BillingPosition"></a>
<a id="tocSbillingposition"></a>
<a id="tocsbillingposition"></a>

```json
{
  "amount": 0,
  "count": 0,
  "description": "string",
  "service": "string",
  "singlePrice": 0,
  "sum": 0,
  "unit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|none|
|count|number|true|none|none|
|description|string|true|none|none|
|service|string|true|none|none|
|singlePrice|number|true|none|none|
|sum|number|true|none|none|
|unit|string|true|none|none|

<h2 id="tocS_ChangeLogEntry">ChangeLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemachangelogentry"></a>
<a id="schema_ChangeLogEntry"></a>
<a id="tocSchangelogentry"></a>
<a id="tocschangelogentry"></a>

```json
{
  "id": "e100123",
  "message": "User {{&user}} has changed the title of {{&object}}",
  "messageProperties": {
    "object": "nearly every object",
    "user": {
      "type": "user",
      "value": "a.vratny"
    }
  },
  "timestamp": 1517232722
}
```

A changelog entry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The unique id of the changelog entry|
|message|string|false|read-only|The message as template or rendered as plain text|
|messageProperties|object|false|read-only|The values of the properties in the message. May be nested as object with a value field |
|timestamp|integer(int64)|false|read-only|The UTC unix timestamp when this change occurred|

<h2 id="tocS_ChangeRoleRequest">ChangeRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangerolerequest"></a>
<a id="schema_ChangeRoleRequest"></a>
<a id="tocSchangerolerequest"></a>
<a id="tocschangerolerequest"></a>

```json
{
  "roles": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[string]|false|none|none|

<h2 id="tocS_CompleteUserRegistrationRequest">CompleteUserRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompleteuserregistrationrequest"></a>
<a id="schema_CompleteUserRegistrationRequest"></a>
<a id="tocScompleteuserregistrationrequest"></a>
<a id="tocscompleteuserregistrationrequest"></a>

```json
{
  "password": "stringst",
  "username": "string",
  "verificationToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|username|string|true|none|none|
|verificationToken|string|true|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CreateCollectionRequest">CreateCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecollectionrequest"></a>
<a id="schema_CreateCollectionRequest"></a>
<a id="tocScreatecollectionrequest"></a>
<a id="tocscreatecollectionrequest"></a>

```json
{
  "label": "string",
  "length": 6,
  "organizationId": "de.acme",
  "type": "ROUTING_COLLECTION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|length|integer(int32)|true|none|none|
|organizationId|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ROUTING_COLLECTION|
|type|LOGISTIC_COLLECTION|
|type|LABELLED_COLLECTION|

<h2 id="tocS_CreateGuidRequest">CreateGuidRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateguidrequest"></a>
<a id="schema_CreateGuidRequest"></a>
<a id="tocScreateguidrequest"></a>
<a id="tocscreateguidrequest"></a>

```json
{
  "count": 1,
  "length": 40,
  "organizationId": "de.acme"
}
```

GUID creation information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|The total number of GUIDs to create|
|length|integer(int32)|true|none|The charactersequence length of the GUID|
|organizationId|string|true|none|The namespace of the organization where the generated GUIDs should be assigned.|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "ownerOrganizationId": "de.bluerain",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|false|none|File Name|
|mimeType|string|false|none|Mime Type|
|ownerOrganizationId|string|false|read-only|The organization's namespace which owns the document|
|visibility|[Visibility](#schemavisibility)|false|none|none|

<h2 id="tocS_DocumentUpdate">DocumentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadocumentupdate"></a>
<a id="schema_DocumentUpdate"></a>
<a id="tocSdocumentupdate"></a>
<a id="tocsdocumentupdate"></a>

```json
{
  "filename": "publicInfo.pdf",
  "mimeType": "text/plain",
  "visibility": {
    "public": true,
    "sharedWithOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|false|none|File Name|
|mimeType|string|false|none|Mime Type|
|visibility|[VisibilityUpdate](#schemavisibilityupdate)|false|none|none|

<h2 id="tocS_Guid">Guid</h2>
<!-- backwards compatibility -->
<a id="schemaguid"></a>
<a id="schema_Guid"></a>
<a id="tocSguid"></a>
<a id="tocsguid"></a>

```json
{
  "createdTimestamp": 1517232722,
  "holderOrganizationId": "string",
  "id4n": "3THvgrWxqgTFC4",
  "ownerOrganizationId": "string",
  "physicalState": "UNATTACHED",
  "properties": "de.example"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdTimestamp|integer(int64)|false|read-only|The UTC unix timestamp of when this GUID has been created|
|holderOrganizationId|string|false|read-only|Organization namespace of the GUID holder|
|id4n|string|false|read-only|The ID|
|ownerOrganizationId|string|false|read-only|Organization namespace of the GUID owner|
|physicalState|string|false|none|Physical attachment state of the GUID|
|properties|object|false|read-only|The properties of the organization|

#### Enumerated Values

|Property|Value|
|---|---|
|physicalState|UNATTACHED|
|physicalState|ATTACHED|
|physicalState|DETACHED|

<h2 id="tocS_GuidAlias">GuidAlias</h2>
<!-- backwards compatibility -->
<a id="schemaguidalias"></a>
<a id="schema_GuidAlias"></a>
<a id="tocSguidalias"></a>
<a id="tocsguidalias"></a>

```json
{
  "alias": "alias"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|An alias|

<h2 id="tocS_GuidCollection">GuidCollection</h2>
<!-- backwards compatibility -->
<a id="schemaguidcollection"></a>
<a id="schema_GuidCollection"></a>
<a id="tocSguidcollection"></a>
<a id="tocsguidcollection"></a>

```json
{
  "createdTimestamp": 0,
  "holderOrganizationId": "string",
  "id4n": "string",
  "label": "string",
  "ownerOrganizationId": "string",
  "physicalState": "UNATTACHED",
  "type": "ROUTING_COLLECTION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdTimestamp|integer(int64)|false|read-only|The UTC unix timestamp of when this collection has been created|
|holderOrganizationId|string|false|none|Organization namespace of the holder of the collection|
|id4n|string|false|read-only|The ID|
|label|string|false|none|none|
|ownerOrganizationId|string|false|read-only|Organization namespace of the collection owner|
|physicalState|string|false|none|Physical attachment state of the collection|
|type|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|physicalState|UNATTACHED|
|physicalState|ATTACHED|
|physicalState|DETACHED|
|type|ROUTING_COLLECTION|
|type|LOGISTIC_COLLECTION|
|type|LABELLED_COLLECTION|

<h2 id="tocS_HistoryItem">HistoryItem</h2>
<!-- backwards compatibility -->
<a id="schemahistoryitem"></a>
<a id="schema_HistoryItem"></a>
<a id="tocShistoryitem"></a>
<a id="tocshistoryitem"></a>

```json
{
  "additionalProperties": {
    "property1": "string",
    "property2": "string"
  },
  "organizationId": "org.acme",
  "ownerOrganizationId": "de.bluerain",
  "sequenceId": 9784,
  "timestamp": 1517232722,
  "type": "DISPATCHED",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

GUID history item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProperties|object|false|none|History items custom additional properties|
|organizationId|string|true|none|Originator of the history item|
|ownerOrganizationId|string|false|read-only|Owner of the history item|
|sequenceId|integer(int32)|false|read-only|Forms the primary key of the history item together with the GUID and the organizationId|
|timestamp|integer(int64)|false|read-only|History item timestamp|
|type|string|true|none|Type of the history item|
|visibility|[Visibility](#schemavisibility)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CREATED|
|type|DESTROYED|
|type|RECYCLED|
|type|SHIPMENT_PREPARED|
|type|STORED|
|type|RETRIEVED_FROM_STORAGE|
|type|PACKAGED|
|type|DISPATCHED|
|type|RECEIVED|
|type|DELIVERY_REFUSED|
|type|REPROCESSING_STARTED|
|type|REPROCESSING_STEP_STARTED|
|type|REPROCESSING_STEP_CANCELLED|
|type|REPROCESSING_STEP_FINISHED|
|type|REPROCESSING_CANCELLED|
|type|REPROCESSING_FINISHED|
|type|DISASSEMBLED|
|type|MAINTENANCE_STARTED|
|type|MAINTENANCE_STEP_STARTED|
|type|MAINTENANCE_STEP_CANCELLED|
|type|MAINTENANCE_STEP_FINISHED|
|type|MAINTENANCE_CANCELLED|
|type|MAINTENANCE_FINISHED|
|type|PRODUCTION_STARTED|
|type|PRODUCTION_CANCELLED|
|type|PRODUCTION_FINISHED|
|type|PRODUCTION_STEP_STARTED|
|type|PRODUCTION_STEP_CANCELLED|
|type|PRODUCTION_STEP_FINISHED|
|type|QUALITY_CHECK_PERFORMED|

<h2 id="tocS_HistoryItemUpdate">HistoryItemUpdate</h2>
<!-- backwards compatibility -->
<a id="schemahistoryitemupdate"></a>
<a id="schema_HistoryItemUpdate"></a>
<a id="tocShistoryitemupdate"></a>
<a id="tocshistoryitemupdate"></a>

```json
{
  "organizationId": "de.acme",
  "visibility": {
    "public": true,
    "sharedOrganizationIds": [
      "de.acme",
      "com.porsche",
      "de.bluerain"
    ]
  }
}
```

GUID history item update (diff patch)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|false|none|New organization id displayed for this item. If given, must match the holder of GUID and the organization the history item is found under.|
|visibility|[Visibility](#schemavisibility)|false|none|none|

<h2 id="tocS_Id4n">Id4n</h2>
<!-- backwards compatibility -->
<a id="schemaid4n"></a>
<a id="schema_Id4n"></a>
<a id="tocSid4n"></a>
<a id="tocsid4n"></a>

```json
{
  "id4n": "3THvgrWxqgTFC4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id4n|string|false|none|The ID|

<h2 id="tocS_Id4nPresentation">Id4nPresentation</h2>
<!-- backwards compatibility -->
<a id="schemaid4npresentation"></a>
<a id="schema_Id4nPresentation"></a>
<a id="tocSid4npresentation"></a>
<a id="tocsid4npresentation"></a>

```json
{
  "createdTimestamp": 1517232722,
  "holderOrganizationId": "de.example",
  "id4n": "3THvgrWxqgTFC4",
  "label": "string",
  "ownerOrganizationId": "org.acme",
  "properties": "de.example",
  "type": "GUID"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdTimestamp|integer(int64)|false|read-only|The UTC unix timestamp of when this ID has been created|
|holderOrganizationId|string|false|read-only|Organization namespace of the holder of the ID|
|id4n|string|false|read-only|The ID|
|label|string|false|read-only|none|
|ownerOrganizationId|string|false|read-only|Organization namespace of the ID owner|
|properties|object|false|read-only|The properties of the organization|
|type|string|false|read-only|The type of ID|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GUID|
|type|ROUTING_COLLECTION|
|type|LOGISTIC_COLLECTION|
|type|LABELLED_COLLECTION|

<h2 id="tocS_Id4nProperties">Id4nProperties</h2>
<!-- backwards compatibility -->
<a id="schemaid4nproperties"></a>
<a id="schema_Id4nProperties"></a>
<a id="tocSid4nproperties"></a>
<a id="tocsid4nproperties"></a>

```json
{
  "id4n": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

An id4n with its properties

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id4n|string|false|none|The ID4n|
|properties|object|false|none|The properties of the ID4n|

<h2 id="tocS_ImportGS1CodesRequest">ImportGS1CodesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportgs1codesrequest"></a>
<a id="schema_ImportGS1CodesRequest"></a>
<a id="tocSimportgs1codesrequest"></a>
<a id="tocsimportgs1codesrequest"></a>

```json
{
  "listOfGS1s": {
    "codes": [
      "string"
    ]
  },
  "organizationId": "de.acme"
}
```

GS1/MAPP codes import information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listOfGS1s|[ListOfGS1s](#schemalistofgs1s)|true|none|A list of GS1/MAPP codes|
|organizationId|string|true|none|The organization where the GS1/Mapp code is imported.|

<h2 id="tocS_ListOfGS1s">ListOfGS1s</h2>
<!-- backwards compatibility -->
<a id="schemalistofgs1s"></a>
<a id="schema_ListOfGS1s"></a>
<a id="tocSlistofgs1s"></a>
<a id="tocslistofgs1s"></a>

```json
{
  "codes": [
    "string"
  ]
}
```

A list of GS1/MAPP codes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codes|[string]|false|none|A list of GS1/MAPP codes.|

<h2 id="tocS_ListOfId4nProperties">ListOfId4nProperties</h2>
<!-- backwards compatibility -->
<a id="schemalistofid4nproperties"></a>
<a id="schema_ListOfId4nProperties"></a>
<a id="tocSlistofid4nproperties"></a>
<a id="tocslistofid4nproperties"></a>

```json
{
  "list": [
    {
      "id4n": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

A list of id4n properties

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[[Id4nProperties](#schemaid4nproperties)]|false|none|A list containing the id4n with its properties.|

<h2 id="tocS_ListOfId4ns">ListOfId4ns</h2>
<!-- backwards compatibility -->
<a id="schemalistofid4ns"></a>
<a id="schema_ListOfId4ns"></a>
<a id="tocSlistofid4ns"></a>
<a id="tocslistofid4ns"></a>

```json
{
  "id4ns": [
    "string"
  ]
}
```

A list of id4ns

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id4ns|[string]|false|none|A list of id4ns.|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "id": 100,
  "logoURL": "/api/v1/public/images/abcdef",
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

An organization

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|The id of the organization ( Deprecated: Use namespace instead. )|
|logoURL|string|false|read-only|URL to a logo of the organization|
|name|string|true|none|The name of the organization|
|namespace|string|true|none|The namespace of the organization|

<h2 id="tocS_OrganizationAddress">OrganizationAddress</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationaddress"></a>
<a id="schema_OrganizationAddress"></a>
<a id="tocSorganizationaddress"></a>
<a id="tocsorganizationaddress"></a>

```json
{
  "city": "MyCity",
  "companyName": "ACME Inc.",
  "countryCode": "DE",
  "countryName": "Germany",
  "firstname": "Max",
  "lastname": "Muster",
  "postCode": 12345,
  "street": "Examplestreet 1",
  "telephone": "+49 8088 12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|companyName|string|false|none|none|
|countryCode|string|true|none|The ISO 3166 two-letter country code|
|countryName|string|false|read-only|The country name|
|firstname|string|true|none|none|
|lastname|string|true|none|none|
|postCode|string|true|none|none|
|street|string|true|none|none|
|telephone|string|false|none|The telephone number e.g.|

<h2 id="tocS_OrganizationUpdate">OrganizationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationupdate"></a>
<a id="schema_OrganizationUpdate"></a>
<a id="tocSorganizationupdate"></a>
<a id="tocsorganizationupdate"></a>

```json
{
  "name": "ACME Inc."
}
```

An organization

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the organization|

<h2 id="tocS_OrganizationUserInvitation">OrganizationUserInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationuserinvitation"></a>
<a id="schema_OrganizationUserInvitation"></a>
<a id="tocSorganizationuserinvitation"></a>
<a id="tocsorganizationuserinvitation"></a>

```json
{
  "email": "string",
  "roles": [
    "string"
  ],
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|roles|[string]|true|none|none|
|userName|string|false|none|none|

<h2 id="tocS_OrganizationUserInvitationListRequest">OrganizationUserInvitationListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationuserinvitationlistrequest"></a>
<a id="schema_OrganizationUserInvitationListRequest"></a>
<a id="tocSorganizationuserinvitationlistrequest"></a>
<a id="tocsorganizationuserinvitationlistrequest"></a>

```json
{
  "invitations": [
    {
      "email": "string",
      "roles": [
        "string"
      ],
      "userName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[OrganizationUserInvitation](#schemaorganizationuserinvitation)]|true|none|none|

<h2 id="tocS_PaginatedResponseOfApiKeyPresentation">PaginatedResponseOfApiKeyPresentation</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofapikeypresentation"></a>
<a id="schema_PaginatedResponseOfApiKeyPresentation"></a>
<a id="tocSpaginatedresponseofapikeypresentation"></a>
<a id="tocspaginatedresponseofapikeypresentation"></a>

```json
{
  "elements": [
    {
      "active": true,
      "createdAt": 1517232722,
      "createdBy": "user123",
      "key": "39978f49-6ff1-4147-bf0f-9910185084b7",
      "label": "My Api Key",
      "organizationId": "de.acme"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[ApiKeyPresentation](#schemaapikeypresentation)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfApiKeyPrivilege">PaginatedResponseOfApiKeyPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofapikeyprivilege"></a>
<a id="schema_PaginatedResponseOfApiKeyPrivilege"></a>
<a id="tocSpaginatedresponseofapikeyprivilege"></a>
<a id="tocspaginatedresponseofapikeyprivilege"></a>

```json
{
  "elements": [
    {
      "id4nAssociated": true,
      "privilege": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[ApiKeyPrivilege](#schemaapikeyprivilege)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfApiKeyPrivilegeInfo">PaginatedResponseOfApiKeyPrivilegeInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofapikeyprivilegeinfo"></a>
<a id="schema_PaginatedResponseOfApiKeyPrivilegeInfo"></a>
<a id="tocSpaginatedresponseofapikeyprivilegeinfo"></a>
<a id="tocspaginatedresponseofapikeyprivilegeinfo"></a>

```json
{
  "elements": [
    {
      "allowsBillableOperations": true,
      "helpText": "string",
      "id4nAssociated": true,
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[ApiKeyPrivilegeInfo](#schemaapikeyprivilegeinfo)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfChangeLogEntry">PaginatedResponseOfChangeLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofchangelogentry"></a>
<a id="schema_PaginatedResponseOfChangeLogEntry"></a>
<a id="tocSpaginatedresponseofchangelogentry"></a>
<a id="tocspaginatedresponseofchangelogentry"></a>

```json
{
  "elements": [
    {
      "id": "e100123",
      "message": "User {{&user}} has changed the title of {{&object}}",
      "messageProperties": {
        "object": "nearly every object",
        "user": {
          "type": "user",
          "value": "a.vratny"
        }
      },
      "timestamp": 1517232722
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[ChangeLogEntry](#schemachangelogentry)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfCountry">PaginatedResponseOfCountry</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofcountry"></a>
<a id="schema_PaginatedResponseOfCountry"></a>
<a id="tocSpaginatedresponseofcountry"></a>
<a id="tocspaginatedresponseofcountry"></a>

```json
{
  "elements": [
    {
      "code": "string",
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Country](#schemacountry)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfDocument">PaginatedResponseOfDocument</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofdocument"></a>
<a id="schema_PaginatedResponseOfDocument"></a>
<a id="tocSpaginatedresponseofdocument"></a>
<a id="tocspaginatedresponseofdocument"></a>

```json
{
  "elements": [
    {
      "filename": "publicInfo.pdf",
      "mimeType": "text/plain",
      "ownerOrganizationId": "de.bluerain",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Document](#schemadocument)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfGuid">PaginatedResponseOfGuid</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofguid"></a>
<a id="schema_PaginatedResponseOfGuid"></a>
<a id="tocSpaginatedresponseofguid"></a>
<a id="tocspaginatedresponseofguid"></a>

```json
{
  "elements": [
    {
      "createdTimestamp": 1517232722,
      "holderOrganizationId": "string",
      "id4n": "3THvgrWxqgTFC4",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "properties": "de.example"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Guid](#schemaguid)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfGuidCollection">PaginatedResponseOfGuidCollection</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofguidcollection"></a>
<a id="schema_PaginatedResponseOfGuidCollection"></a>
<a id="tocSpaginatedresponseofguidcollection"></a>
<a id="tocspaginatedresponseofguidcollection"></a>

```json
{
  "elements": [
    {
      "createdTimestamp": 0,
      "holderOrganizationId": "string",
      "id4n": "string",
      "label": "string",
      "ownerOrganizationId": "string",
      "physicalState": "UNATTACHED",
      "type": "ROUTING_COLLECTION"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[GuidCollection](#schemaguidcollection)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfHistoryItem">PaginatedResponseOfHistoryItem</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofhistoryitem"></a>
<a id="schema_PaginatedResponseOfHistoryItem"></a>
<a id="tocSpaginatedresponseofhistoryitem"></a>
<a id="tocspaginatedresponseofhistoryitem"></a>

```json
{
  "elements": [
    {
      "additionalProperties": {
        "property1": "string",
        "property2": "string"
      },
      "organizationId": "org.acme",
      "ownerOrganizationId": "de.bluerain",
      "sequenceId": 9784,
      "timestamp": 1517232722,
      "type": "DISPATCHED",
      "visibility": {
        "public": true,
        "sharedOrganizationIds": [
          "de.acme",
          "com.porsche",
          "de.bluerain"
        ]
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[HistoryItem](#schemahistoryitem)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfId4nPresentation">PaginatedResponseOfId4nPresentation</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofid4npresentation"></a>
<a id="schema_PaginatedResponseOfId4nPresentation"></a>
<a id="tocSpaginatedresponseofid4npresentation"></a>
<a id="tocspaginatedresponseofid4npresentation"></a>

```json
{
  "elements": [
    {
      "createdTimestamp": 1517232722,
      "holderOrganizationId": "de.example",
      "id4n": "3THvgrWxqgTFC4",
      "label": "string",
      "ownerOrganizationId": "org.acme",
      "properties": "de.example",
      "type": "GUID"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Id4nPresentation](#schemaid4npresentation)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfOrganization">PaginatedResponseOfOrganization</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseoforganization"></a>
<a id="schema_PaginatedResponseOfOrganization"></a>
<a id="tocSpaginatedresponseoforganization"></a>
<a id="tocspaginatedresponseoforganization"></a>

```json
{
  "elements": [
    {
      "id": 100,
      "logoURL": "/api/v1/public/images/abcdef",
      "name": "ACME Inc.",
      "namespace": "de.acme"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Organization](#schemaorganization)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfPartnerOrganization">PaginatedResponseOfPartnerOrganization</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofpartnerorganization"></a>
<a id="schema_PaginatedResponseOfPartnerOrganization"></a>
<a id="tocSpaginatedresponseofpartnerorganization"></a>
<a id="tocspaginatedresponseofpartnerorganization"></a>

```json
{
  "elements": [
    {
      "logoURL": "/api/v1/public/images/abcdef",
      "name": "ACME Inc.",
      "namespace": "de.acme"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[PartnerOrganization](#schemapartnerorganization)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfRole">PaginatedResponseOfRole</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofrole"></a>
<a id="schema_PaginatedResponseOfRole"></a>
<a id="tocSpaginatedresponseofrole"></a>
<a id="tocspaginatedresponseofrole"></a>

```json
{
  "elements": [
    {
      "name": "string",
      "privileges": [
        "string"
      ]
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[Role](#schemarole)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfUserPresentation">PaginatedResponseOfUserPresentation</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofuserpresentation"></a>
<a id="schema_PaginatedResponseOfUserPresentation"></a>
<a id="tocSpaginatedresponseofuserpresentation"></a>
<a id="tocspaginatedresponseofuserpresentation"></a>

```json
{
  "elements": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[UserPresentation](#schemauserpresentation)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfUserRoles">PaginatedResponseOfUserRoles</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofuserroles"></a>
<a id="schema_PaginatedResponseOfUserRoles"></a>
<a id="tocSpaginatedresponseofuserroles"></a>
<a id="tocspaginatedresponseofuserroles"></a>

```json
{
  "elements": [
    {
      "roles": [
        "string"
      ],
      "user": {
        "id": "string",
        "name": "string"
      }
    }
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[UserRoles](#schemauserroles)]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PaginatedResponseOfstring">PaginatedResponseOfstring</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedresponseofstring"></a>
<a id="schema_PaginatedResponseOfstring"></a>
<a id="tocSpaginatedresponseofstring"></a>
<a id="tocspaginatedresponseofstring"></a>

```json
{
  "elements": [
    "string"
  ],
  "limit": 100,
  "offset": 0,
  "total": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[string]|true|none|none|
|limit|integer(int32)|true|none|The number of returned elements|
|offset|integer(int32)|true|none|Starting with the n-th element|
|total|integer(int32)|false|none|The total number of elements|

<h2 id="tocS_PartnerOrganization">PartnerOrganization</h2>
<!-- backwards compatibility -->
<a id="schemapartnerorganization"></a>
<a id="schema_PartnerOrganization"></a>
<a id="tocSpartnerorganization"></a>
<a id="tocspartnerorganization"></a>

```json
{
  "logoURL": "/api/v1/public/images/abcdef",
  "name": "ACME Inc.",
  "namespace": "de.acme"
}
```

A partner organization

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logoURL|string|false|read-only|URL to a logo of the organization|
|name|string|false|read-only|The name of the organization|
|namespace|string|false|read-only|The namespace of the organization|

<h2 id="tocS_PasswordResetRequest">PasswordResetRequest</h2>
<!-- backwards compatibility -->
<a id="schemapasswordresetrequest"></a>
<a id="schema_PasswordResetRequest"></a>
<a id="tocSpasswordresetrequest"></a>
<a id="tocspasswordresetrequest"></a>

```json
{
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|

<h2 id="tocS_PasswordResetVerificationRequest">PasswordResetVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapasswordresetverificationrequest"></a>
<a id="schema_PasswordResetVerificationRequest"></a>
<a id="tocSpasswordresetverificationrequest"></a>
<a id="tocspasswordresetverificationrequest"></a>

```json
{
  "password": "string",
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|token|string|true|none|none|

<h2 id="tocS_PublicImagePresentation">PublicImagePresentation</h2>
<!-- backwards compatibility -->
<a id="schemapublicimagepresentation"></a>
<a id="schema_PublicImagePresentation"></a>
<a id="tocSpublicimagepresentation"></a>
<a id="tocspublicimagepresentation"></a>

```json
{
  "uri": "/api/v1/public/image/bc671c63-4a9b-46e7-8c59-9bbe1917e6cc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|read-only|The uri/url of the image|

<h2 id="tocS_QueuePresentation">QueuePresentation</h2>
<!-- backwards compatibility -->
<a id="schemaqueuepresentation"></a>
<a id="schema_QueuePresentation"></a>
<a id="tocSqueuepresentation"></a>
<a id="tocsqueuepresentation"></a>

```json
{
  "active": true,
  "id": "<default>",
  "waitingMessages": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|none|
|id|string|true|none|none|
|waitingMessages|integer(int64)|false|none|The count of queued messages|

<h2 id="tocS_QueueUpdateRequest">QueueUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueueupdaterequest"></a>
<a id="schema_QueueUpdateRequest"></a>
<a id="tocSqueueupdaterequest"></a>
<a id="tocsqueueupdaterequest"></a>

```json
{
  "active": true,
  "id": "<default>",
  "purgeQueue": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|If this value is set to false the queue will be deleted.|
|id|string|false|none|none|
|purgeQueue|boolean|false|none|Set this value to true if you want to purge the queue.|

<h2 id="tocS_RegistrationVerificationTokenPresentation">RegistrationVerificationTokenPresentation</h2>
<!-- backwards compatibility -->
<a id="schemaregistrationverificationtokenpresentation"></a>
<a id="schema_RegistrationVerificationTokenPresentation"></a>
<a id="tocSregistrationverificationtokenpresentation"></a>
<a id="tocsregistrationverificationtokenpresentation"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_RemoveApiKeyPrivilegeRequest">RemoveApiKeyPrivilegeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremoveapikeyprivilegerequest"></a>
<a id="schema_RemoveApiKeyPrivilegeRequest"></a>
<a id="tocSremoveapikeyprivilegerequest"></a>
<a id="tocsremoveapikeyprivilegerequest"></a>

```json
{
  "privilege": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privilege|string|true|none|none|

<h2 id="tocS_RemovePartnerRequest">RemovePartnerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovepartnerrequest"></a>
<a id="schema_RemovePartnerRequest"></a>
<a id="tocSremovepartnerrequest"></a>
<a id="tocsremovepartnerrequest"></a>

```json
{
  "organizationId": "org.acme"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|true|none|The namespace of the partner organization to remove|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "name": "string",
  "privileges": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|privileges|[string]|false|none|none|

<h2 id="tocS_Route">Route</h2>
<!-- backwards compatibility -->
<a id="schemaroute"></a>
<a id="schema_Route"></a>
<a id="tocSroute"></a>
<a id="tocsroute"></a>

```json
{
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "priority": 0,
  "public": true,
  "type": "string",
  "validUntil": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|true|none|none|
|priority|integer(int32)|false|none|none|
|public|boolean|true|none|none|
|type|string|true|none|none|
|validUntil|integer(int64)|false|none|none|

<h2 id="tocS_RoutingFile">RoutingFile</h2>
<!-- backwards compatibility -->
<a id="schemaroutingfile"></a>
<a id="schema_RoutingFile"></a>
<a id="tocSroutingfile"></a>
<a id="tocsroutingfile"></a>

```json
{
  "options": {
    "deleteOutdatedRoutes": true
  },
  "routes": [
    {
      "params": {
        "property1": "string",
        "property2": "string"
      },
      "priority": 0,
      "public": true,
      "type": "string",
      "validUntil": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[RoutingOptions](#schemaroutingoptions)|false|none|none|
|routes|[[Route](#schemaroute)]|true|none|none|

<h2 id="tocS_RoutingFileRequest">RoutingFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaroutingfilerequest"></a>
<a id="schema_RoutingFileRequest"></a>
<a id="tocSroutingfilerequest"></a>
<a id="tocsroutingfilerequest"></a>

```json
{
  "organizationId": "string",
  "routing": {
    "options": {
      "deleteOutdatedRoutes": true
    },
    "routes": [
      {
        "params": {
          "property1": "string",
          "property2": "string"
        },
        "priority": 0,
        "public": true,
        "type": "string",
        "validUntil": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|false|none|none|
|routing|[RoutingFile](#schemaroutingfile)|true|none|none|

<h2 id="tocS_RoutingOptions">RoutingOptions</h2>
<!-- backwards compatibility -->
<a id="schemaroutingoptions"></a>
<a id="schema_RoutingOptions"></a>
<a id="tocSroutingoptions"></a>
<a id="tocsroutingoptions"></a>

```json
{
  "deleteOutdatedRoutes": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteOutdatedRoutes|boolean|false|none|none|

<h2 id="tocS_SendCustomMessage">SendCustomMessage</h2>
<!-- backwards compatibility -->
<a id="schemasendcustommessage"></a>
<a id="schema_SendCustomMessage"></a>
<a id="tocSsendcustommessage"></a>
<a id="tocssendcustommessage"></a>

```json
{
  "data": "x = y",
  "name": "<event name>"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|Custom data in a map. You may use JSON content|
|name|string|true|none|The name of the message (organisation specific)|

<h2 id="tocS_ServiceCosts">ServiceCosts</h2>
<!-- backwards compatibility -->
<a id="schemaservicecosts"></a>
<a id="schema_ServiceCosts"></a>
<a id="tocSservicecosts"></a>
<a id="tocsservicecosts"></a>

```json
{
  "listing": {
    "property1": 0,
    "property2": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listing|object|true|none|none|

<h2 id="tocS_SimpleMessageResponse">SimpleMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemasimplemessageresponse"></a>
<a id="schema_SimpleMessageResponse"></a>
<a id="tocSsimplemessageresponse"></a>
<a id="tocssimplemessageresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_TransferReceiveInfo">TransferReceiveInfo</h2>
<!-- backwards compatibility -->
<a id="schematransferreceiveinfo"></a>
<a id="schema_TransferReceiveInfo"></a>
<a id="tocStransferreceiveinfo"></a>
<a id="tocstransferreceiveinfo"></a>

```json
{
  "organizationId": "de.id4i"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|true|none|Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.|

<h2 id="tocS_TransferSendInfo">TransferSendInfo</h2>
<!-- backwards compatibility -->
<a id="schematransfersendinfo"></a>
<a id="schema_TransferSendInfo"></a>
<a id="tocStransfersendinfo"></a>
<a id="tocstransfersendinfo"></a>

```json
{
  "holderOrganizationId": "de.id4i",
  "keepOwnership": true,
  "openForClaims": false,
  "ownerOrganizationId": "de.bluerain",
  "recipientOrganizationIds": [
    "de.acme",
    "com.porsche",
    "de.bluerain"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holderOrganizationId|string|false|read-only|The current holder of the object|
|keepOwnership|boolean|true|none|Keep the public ownership while transferring the object|
|openForClaims|boolean|true|none|Allow anyone who knows (or can scan) the ID4N to claim ownership of this object|
|ownerOrganizationId|string|false|read-only|The current publicly visible owner of the object|
|recipientOrganizationIds|[string]|true|none|Allow only these organizations to obtain this object|

<h2 id="tocS_UserPresentation">UserPresentation</h2>
<!-- backwards compatibility -->
<a id="schemauserpresentation"></a>
<a id="schema_UserPresentation"></a>
<a id="tocSuserpresentation"></a>
<a id="tocsuserpresentation"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_UserRegistrationRequest">UserRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserregistrationrequest"></a>
<a id="schema_UserRegistrationRequest"></a>
<a id="tocSuserregistrationrequest"></a>
<a id="tocsuserregistrationrequest"></a>

```json
{
  "email": "string",
  "password": "stringst",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|password|string|true|none|none|
|username|string|true|none|none|

<h2 id="tocS_UserRegistrationResponse">UserRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserregistrationresponse"></a>
<a id="schema_UserRegistrationResponse"></a>
<a id="tocSuserregistrationresponse"></a>
<a id="tocsuserregistrationresponse"></a>

```json
{
  "email": "string",
  "id": 0,
  "message": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|id|integer(int64)|true|none|none|
|message|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_UserRoles">UserRoles</h2>
<!-- backwards compatibility -->
<a id="schemauserroles"></a>
<a id="schema_UserRoles"></a>
<a id="tocSuserroles"></a>
<a id="tocsuserroles"></a>

```json
{
  "roles": [
    "string"
  ],
  "user": {
    "id": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[string]|false|none|none|
|user|[UserPresentation](#schemauserpresentation)|false|none|none|

<h2 id="tocS_Visibility">Visibility</h2>
<!-- backwards compatibility -->
<a id="schemavisibility"></a>
<a id="schema_Visibility"></a>
<a id="tocSvisibility"></a>
<a id="tocsvisibility"></a>

```json
{
  "public": true,
  "sharedOrganizationIds": [
    "de.acme",
    "com.porsche",
    "de.bluerain"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|boolean|false|none|Document is publicly readable (if ID4N is owned by the same organization)|
|sharedOrganizationIds|[string]|false|none|Document is readable by these organizations (independend of ID4N ownership)|

<h2 id="tocS_VisibilityUpdate">VisibilityUpdate</h2>
<!-- backwards compatibility -->
<a id="schemavisibilityupdate"></a>
<a id="schema_VisibilityUpdate"></a>
<a id="tocSvisibilityupdate"></a>
<a id="tocsvisibilityupdate"></a>

```json
{
  "public": true,
  "sharedWithOrganizationIds": [
    "de.acme",
    "com.porsche",
    "de.bluerain"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|boolean|false|none|Document is publicly readable (if ID4N is owned by the same organization)|
|sharedWithOrganizationIds|[string]|false|none|Document is readable by these organizations (independend of ID4N ownership)|

<h2 id="tocS_WhoIsResponse">WhoIsResponse</h2>
<!-- backwards compatibility -->
<a id="schemawhoisresponse"></a>
<a id="schema_WhoIsResponse"></a>
<a id="tocSwhoisresponse"></a>
<a id="tocswhoisresponse"></a>

```json
{
  "aliases": {
    "property1": "string",
    "property2": "string"
  },
  "organization": {
    "id": 100,
    "logoURL": "/api/v1/public/images/abcdef",
    "name": "ACME Inc.",
    "namespace": "de.acme"
  },
  "organizationAddress": {
    "city": "MyCity",
    "companyName": "ACME Inc.",
    "countryCode": "DE",
    "countryName": "Germany",
    "firstname": "Max",
    "lastname": "Muster",
    "postCode": 12345,
    "street": "Examplestreet 1",
    "telephone": "+49 8088 12345"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|object|false|none|none|
|organization|[Organization](#schemaorganization)|false|none|An organization|
|organizationAddress|[OrganizationAddress](#schemaorganizationaddress)|false|none|none|
