<h1 id="users-okta-api">Users (Okta API) v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The [Okta User API](/docs/api/rest/users.html) provides operations to manage users in your organization.

Base URLs:

* <a href="http://okta.local">http://okta.local</a>

* <a href=",">,</a>

<h1 id="users-okta-api-create-user">Create User</h1>

## Create User in Group

<a id="opIdcreateUserInGroup"></a>

> Code samples

```bash
curl https://example.com/api/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "groupIds": [
      "{{groupId}}"
    ],
    "profile": {
      "email": "isaac@{{email-suffix}}",
      "firstName": "Isaac",
      "lastName": "Brock",
      "login": "isaac@{{email-suffix}}"
    }
  }'
```

`POST /api/v1/users`

Create User in Group

> Body parameter

```json
{
  "groupIds": [
    "{{groupId}}"
  ],
  "profile": {
    "email": "isaac@{{email-suffix}}",
    "firstName": "Isaac",
    "lastName": "Brock",
    "login": "isaac@{{email-suffix}}"
  }
}
```

<h3 id="create-user-in-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activate|query|string|false|none|
|body|body|object|false|none|
|» groupIds|body|[string]|false|none|
|» profile|body|object|false|none|
|» » email|body|string|false|none|
|» » firstName|body|string|false|none|
|» » lastName|body|string|false|none|
|» » login|body|string|false|none|

<h3 id="create-user-in-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="users-okta-api-credential-operations">Credential Operations</h1>

## Set Recovery Credential

<a id="opIdsetRecoveryCredential"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "credentials": {
      "recovery_question": {
        "answer": "Annie Oakley",
        "question": "Who'\''s a major player in the cowboy scene?"
      }
    }
  }'
```

`PUT /api/v1/users/{userId}`

Set Recovery Credential

> Body parameter

```json
{
  "credentials": {
    "recovery_question": {
      "answer": "Annie Oakley",
      "question": "Who's a major player in the cowboy scene?"
    }
  }
}
```

<h3 id="set-recovery-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|body|body|object|false|none|
|» credentials|body|object|false|none|
|» » recovery_question|body|object|false|none|
|» » » answer|body|string|false|none|
|» » » question|body|string|false|none|

<h3 id="set-recovery-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Change Password

<a id="opIdchangePassword"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/credentials/change_password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "newPassword": {
      "value": "uTVM,TPw55"
    },
    "oldPassword": {
      "value": "{{password}}"
    }
  }'
```

`POST /api/v1/users/{userId}/credentials/change_password`

Change Password

> Body parameter

```json
{
  "newPassword": {
    "value": "uTVM,TPw55"
  },
  "oldPassword": {
    "value": "{{password}}"
  }
}
```

<h3 id="change-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|body|body|object|false|none|
|» newPassword|body|object|false|none|
|» » value|body|string|false|none|
|» oldPassword|body|object|false|none|
|» » value|body|string|false|none|

<h3 id="change-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Change Recovery Question

<a id="opIdchangeRecoveryQuestion"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/credentials/change_recovery_question \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "password": {
      "value": "{{password}}"
    },
    "recovery_question": {
      "answer": "My recovery credentials are updated",
      "question": "What happens when I update my question"
    }
  }'
```

`POST /api/v1/users/{userId}/credentials/change_recovery_question`

Change Recovery Question

> Body parameter

```json
{
  "password": {
    "value": "{{password}}"
  },
  "recovery_question": {
    "answer": "My recovery credentials are updated",
    "question": "What happens when I update my question"
  }
}
```

<h3 id="change-recovery-question-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|body|body|object|false|none|
|» password|body|object|false|none|
|» » value|body|string|false|none|
|» recovery_question|body|object|false|none|
|» » answer|body|string|false|none|
|» » question|body|string|false|none|

<h3 id="change-recovery-question-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Forgot Password (One Time Code)

<a id="opIdforgotPassword(oneTimeCode)"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/credentials/forgot_password \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/credentials/forgot_password`

Forgot Password (One Time Code)

> Body parameter

```text

```

<h3 id="forgot-password-one-time-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sendEmail|query|string|false|none|
|userId|path|string|true|none|

<h3 id="forgot-password-one-time-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="users-okta-api-lifecycle-operations">Lifecycle Operations</h1>

## Activate User

<a id="opIdactivateUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/activate \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/activate`

Activate User

> Body parameter

```text

```

<h3 id="activate-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sendEmail|query|string|false|none|
|userId|path|string|true|none|

<h3 id="activate-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate User

<a id="opIddeactivateUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/deactivate \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/deactivate`

Deactivate User

> Body parameter

```text

```

<h3 id="deactivate-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="deactivate-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Set Temp Password

<a id="opIdsetTempPassword"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/expire_password \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/expire_password`

Set Temp Password

> Body parameter

```text

```

<h3 id="set-temp-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tempPassword|query|string|false|none|
|userId|path|string|true|none|

<h3 id="set-temp-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Password

<a id="opIdresetPassword"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/reset_password \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/reset_password`

Reset Password

> Body parameter

```text

```

<h3 id="reset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sendEmail|query|string|false|none|
|userId|path|string|true|none|

<h3 id="reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Suspend User

<a id="opIdsuspendUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/suspend \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/suspend`

Suspend User

> Body parameter

```text

```

<h3 id="suspend-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="suspend-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Unlock User

<a id="opIdunlockUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/unlock \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/unlock`

Unlock User

> Body parameter

```text

```

<h3 id="unlock-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="unlock-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Unsuspend User

<a id="opIdunsuspendUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/unsuspend \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d ''
```

`POST /api/v1/users/{userId}/lifecycle/unsuspend`

Unsuspend User

> Body parameter

```text

```

<h3 id="unsuspend-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="unsuspend-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="users-okta-api-default">Default</h1>

## Find User

<a id="opIdfindUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users \
  -H 'Content-Type: application/octet-stream'
```

`GET /api/v1/users`

Find User

<h3 id="find-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|none|

<h3 id="find-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Current User

<a id="opIdgetCurrentUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/me \
  -H 'Content-Type: application/octet-stream'
```

`GET /api/v1/users/me`

Get Current User

<h3 id="get-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get User

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string \
  -H 'Content-Type: application/octet-stream'
```

`GET /api/v1/users/{userId}`

Get User

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Assigned App Links

<a id="opIdgetAssignedAppLinks"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/appLinks \
  -H 'Content-Type: application/octet-stream'
```

`GET /api/v1/users/{userId}/appLinks`

Get Assigned App Links

<h3 id="get-assigned-app-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="get-assigned-app-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Groups for User

<a id="opIdgetGroupsForUser"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/groups \
  -H 'Content-Type: application/octet-stream'
```

`GET /api/v1/users/{userId}/groups`

Get Groups for User

<h3 id="get-groups-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="get-groups-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Factors

<a id="opIdresetFactors"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/lifecycle/reset_factors \
  -X POST \
  -H 'Content-Type: application/octet-stream'
```

`POST /api/v1/users/{userId}/lifecycle/reset_factors`

Reset Factors

<h3 id="reset-factors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="reset-factors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Clear User Sessions

<a id="opIdclearUserSessions"></a>

> Code samples

```bash
curl https://example.com/api/v1/users/string/sessions \
  -X DELETE \
  -H 'Content-Type: application/octet-stream'
```

`DELETE /api/v1/users/{userId}/sessions`

Clear User Sessions

<h3 id="clear-user-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

<h3 id="clear-user-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
