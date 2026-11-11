<h1 id="user-management">User Management v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="user-management-ldap">LDAP</h1>

## LDAP Sync

<a id="opIdpost-api-v1-ldap.syncNow"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/ldap.syncNow \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/ldap.syncNow`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Syncs your <a href="https://docs.rocket.chat/use-rocket.chat/authentication/ldap" target="_blank">LDAP data</a> based on the <a href="https://docs.rocket.chat/use-rocket.chat/authentication/ldap/ldap-data-sync-settings" target="_blank">data sync configurations</a>. This endpoint requires 2FA.

Make sure LDAP is enabled before using this endpoint.

Permission required: `sync-auth-services-users`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Moved to premium plans. Added the `LDAP_Background_Sync_disabled` and `LDAP_Sync_failed` errors. |
|5.2.0            | Include `syncAvatars`       |
|4.0.0            | Added       |

<h3 id="ldap-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|

> Example responses

> 200 Response

```json
{
  "message": "Sync_in_progress",
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
    "method": "totp",
    "codeGenerated": false,
    "availableMethods": [
      "totp"
    ]
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

<h3 id="ldap-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="ldap-sync-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
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
|» availableMethods|[string]|false|none|none|
|» error|string|false|none|The error that stopped the sync. Returned with `LDAP_Sync_failed`.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Test LDAP Connection

<a id="opIdpost-api-v1-ldap.testConnection"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/ldap.testConnection \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/ldap.testConnection`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Test if Rocket.Chat can connect to the specified LDAP server using the port and host provided in the Rocket.Chat settings.
Make sure LDAP is enabled before using this endpoint.

Permission required: `test-admin-options`.

### Changelog
| Version | Description |
| ------- | ----------- |
| 9.0.0   | Moved to premium plans. |
| 9.0.0   | Added the `LDAP_Bind_failed` and `LDAP_Connection_failed_reason` errors. Removed the `Connection_failed` error. |

<h3 id="test-ldap-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

> Example responses

> 200 Response

```json
{
  "message": "LDAP_Connection_successful",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "LDAP_Bind_failed",
  "details": {
    "error": "Invalid Credentials"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action [error-unauthorized]"
}
```

<h3 id="test-ldap-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="test-ldap-connection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» error|string|false|none|The LDAP server's error. Returned with `LDAP_Bind_failed`.|
|» reason|string|false|none|The connection error. Returned with `LDAP_Connection_failed_reason`.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Test LDAP User Search

<a id="opIdpost-api-v1-ldap.testSearch"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/ldap.testSearch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "username": "bob"
  }'
```

`POST /api/v1/ldap.testSearch`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Test if a given username can be found in the LDAP server using the authentication and filter <a href='https://docs.rocket.chat/docs/configure-ldap-connection' target='_blank'>settings</a> provided to Rocket.Chat.
Make sure LDAP is enabled in **Settings** > **LDAP** > **Enable** before using this endpoint.

Permission required: `test-admin-options`.

### Changelog
| Version | Description |
| ------- | ----------- |
| 9.0.0   | Moved to premium plans. Requires a license with the `ldap-enterprise` module. |
| 9.0.0   | Added the `LDAP_Bind_failed`, `LDAP_User_not_found`, and `LDAP_Multiple_users_found` errors. |

> Body parameter

```json
{
  "username": "bob"
}
```

<h3 id="test-ldap-user-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» username|body|string|true|The username that you want to search.|

> Example responses

> 200 Response

```json
{
  "message": "LDAP_User_Found",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'username'",
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action [error-unauthorized]"
}
```

<h3 id="test-ldap-user-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="test-ldap-user-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» error|string|false|none|The LDAP server's error. Returned with `LDAP_Bind_failed`.|
|» total|string|false|none|The number of matching users. Returned with `LDAP_Multiple_users_found`.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="user-management-permissions">Permissions</h1>

## List All Permissions

<a id="opIdget-permissions.listAll"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/permissions.listAll \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/permissions.listAll`

Returns the list of <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permissions</a> from the workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.73.0            | Added       |

<h3 id="list-all-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|string|false|Date as ISO string. If you include this parameter, the `update` and<br>`remove` fields in the response will contain only those permissions<br>updated and removed since this date and time.|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|

> Example responses

> 200 Response

```json
{
  "update": [
    {
      "_id": "access-permissions",
      "_updatedAt": "2018-11-28T11:55:49.106Z",
      "roles": [
        "admin"
      ]
    },
    {
      "_id": "add-oauth-service",
      "_updatedAt": "2018-11-28T12:59:51.974Z",
      "roles": [
        "admin",
        "user"
      ]
    }
  ],
  "remove": [],
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

<h3 id="list-all-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-all-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|update|[object]|false|none|none|
|» _id|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roles|[string]|false|none|none|
|remove|[object]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Permissions

<a id="opIdpost-api-v1-permissions.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/permissions.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "permissions": [
      {
        "_id": "access-permissions",
        "roles": [
          "admin"
        ]
      }
    ]
  }'
```

`POST /api/v1/permissions.update`

Update the <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permissions</a> on the workspace.
Permission required: `access-permissions`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.66.0            | Added       |

> Body parameter

```json
{
  "permissions": [
    {
      "_id": "access-permissions",
      "roles": [
        "admin"
      ]
    }
  ]
}
```

<h3 id="update-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» permissions|body|[object]|true|The array of roles to overwrite.|
|» » _id|body|string|false|Enter the permission ID.|
|» » roles|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "permissions": [
    {
      "_id": "access-permissions",
      "roles": [
        "admin"
      ]
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Invalid body params",
  "errorType": "error-invalid-body-params"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[object]|false|none|none|
|» _id|string|false|none|none|
|» roles|[string]|false|none|none|
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

## Add Permission to a Role

<a id="opIdpost-api-v1-permissions.addRole"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/permissions.addRole \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "permissionId": "create-team-channel",
    "role": "user"
  }'
```

`POST /api/v1/permissions.addRole`

Grant a <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permission</a> to a role. 

Permission required: `access-permissions`. 

To modify a setting-level permission, the `access-setting-permissions` permission is also required.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | The `403` response returns `errorType: error-forbidden`.       |
|8.7.0            | Added       |

> Body parameter

```json
{
  "permissionId": "create-team-channel",
  "role": "user"
}
```

<h3 id="add-permission-to-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» permissionId|body|string|true|The permission ID.|
|» role|body|string|true|The role to grant the permission to. For default Rocket.Chat roles, enter the role name, such as `admin` or `user`. For custom roles, enter the role ID.|

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
  "error": "must have required property 'role'",
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="add-permission-to-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="add-permission-to-a-role-responseschema">Response Schema</h3>

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
|» action|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Role from Permission

<a id="opIdpost-api-v1-permissions.removeRole"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/permissions.removeRole \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "permissionId": "create-team-channel",
    "role": "user"
  }'
```

`POST /api/v1/permissions.removeRole`

Revoke a <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permission</a> from a role. 

Permission required: `access-permissions`. 

To modify a setting-level permission, the `access-setting-permissions` permission is also required.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | The `403` response returns `errorType: error-forbidden`.       |
|8.7.0            | Added       |

> Body parameter

```json
{
  "permissionId": "create-team-channel",
  "role": "user"
}
```

<h3 id="remove-role-from-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» permissionId|body|string|true|The permission ID.|
|» role|body|string|true|The role to revoke the permission from. For default Rocket.Chat roles, enter the role name, such as `admin` or `user`. For custom roles, enter the role ID.|

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
  "error": "must have required property 'role'",
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="remove-role-from-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-role-from-permission-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="user-management-roles">Roles</h1>

## Create Role

<a id="opIdpost-api-v1-roles.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "name": "Test Role",
    "scope": "Users",
    "description": "Testing Role for API",
    "mandatory2fa": false
  }'
```

`POST /api/v1/roles.create`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Create a new <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>role</a> in the workspace. See <a href='https://docs.rocket.chat/v1/docs/custom-roles' target='_blank'>Custom Roles</a> for further information.

* You can't create new roles with the same name as existing roles. For example, it is not possible to create a new role with the name `admin`.
* The scope can either be `Users`(user level) or `Subscriptions`(room level).
* Permission required: `access-permissions`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.0.0            | Moved to Enterprise plan.       |
|3.15.0            | The endpoint is no longer used to update roles.       |
|0.70.0            | Added       |

> Body parameter

```json
{
  "name": "Test Role",
  "scope": "Users",
  "description": "Testing Role for API",
  "mandatory2fa": false
}
```

<h3 id="create-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» name|body|string|true|Enter the new role's name.|
|» scope|body|string|false|The new role's scope. The scope can either be Users (user level) or Subscriptions (room level). The default value is `Users`.|
|» description|body|string|false|Enter a description for the new role.|
|» mandatory2fa|body|boolean|false|Whether the role should have a mandatory 2FA. The default value is `false`. If set to true, users assigned to this role are prompted to enter a 2FA code for certain activities.|

> Example responses

> 200 Response

```json
{
  "role": {
    "_id": "646c431fa8c3a3ba32d0e1c4",
    "name": "support1",
    "scope": "Subscriptions",
    "description": "Role support tier 1",
    "protected": false,
    "mandatory2fa": false,
    "_updatedAt": "2023-05-23T04:37:51.161Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'name'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» scope|string|false|none|none|
|» description|string|false|none|none|
|» protected|boolean|false|none|none|
|» mandatory2fa|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Update Role

<a id="opIdpost-api-v1-roles.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roleId": "646c431fa8c3a3ba32d0e1c4",
    "name": "Test Role",
    "scope": "Users",
    "description": "Testing Role for API",
    "mandatory2fa": false
  }'
```

`POST /api/v1/roles.update`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Update a role in the workspace.

Permission required: `access-permissions`
        
### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.0.0            | Moved to Enterprise plan.       |

> Body parameter

```json
{
  "roleId": "646c431fa8c3a3ba32d0e1c4",
  "name": "Test Role",
  "scope": "Users",
  "description": "Testing Role for API",
  "mandatory2fa": false
}
```

<h3 id="update-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» roleId|body|string|true|The role ID that you want to update.|
|» name|body|string|true|The updated name of the role.|
|» scope|body|string|false|The updated  scope of the role. The scope can either be Users (user level) or Subscriptions (room level). The default value is `Users`.|
|» description|body|string|false|Updated description for the role.|
|» mandatory2fa|body|boolean|false|Whether the role should have a mandatory 2FA. The default value is `false`. If set to true, users assigned to this role are prompted to enter a 2FA code for certain activities.|

> Example responses

> 200 Response

```json
{
  "role": {
    "_id": "646c431fa8c3a3ba32d0e1c4",
    "name": "update role",
    "scope": "Users",
    "description": "Update Role support tier 1",
    "protected": false,
    "mandatory2fa": false,
    "_updatedAt": "2023-05-23T05:33:33.730Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'name'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="update-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» scope|string|false|none|none|
|» description|string|false|none|none|
|» protected|boolean|false|none|none|
|» mandatory2fa|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Assign Role to User

<a id="opIdpost-api-v1-roles.addUserToRole"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.addUserToRole \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roleId": "6579adcf2dd9f9d9514f6",
    "username": "test.fun",
    "roomId": "64adb09baa5ad4273bfc"
  }'
```

`POST /api/v1/roles.addUserToRole`

Assign a role to a user. Optionally, you can set this role to a user for a specific room.

**Permissions required**:
- `access-permissions`: Required to modify permissions for various roles
- `assign-admin-role`: Permission to assign the admin role to other users

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.70.0            | Added       |

> Body parameter

```json
{
  "roleId": "6579adcf2dd9f9d9514f6",
  "username": "test.fun",
  "roomId": "64adb09baa5ad4273bfc"
}
```

<h3 id="assign-role-to-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|By default, the three major room roles are available in Rocket.Chat are **Owner**, **Leader**, and **Moderator**. <br>[Creating custom roles](https://docs.rocket.chat/use-rocket.chat/user-management/custom-roles) is exclusively available on the Enterprise plan. <br>Refer to [Roles](https://docs.rocket.chat/setup-and-configure/roles-in-rocket.chat) for more information.|
|» roleId|body|string|false|The ID of an existing role.|
|» username|body|string|true|The user name.|
|» roomId|body|string|false|The ID of the room where the user should be assigned a role, if it is a room role.|

> Example responses

> 200 Response

```json
{
  "role": {
    "_id": "auditor-log",
    "scope": "Users",
    "description": "",
    "mandatory2fa": false,
    "name": "auditor-log",
    "protected": true,
    "_updatedAt": "2023-07-10T23:20:56.702Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'username' [error-invalid-role-properties]",
  "errorType": "error-invalid-role-properties"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="assign-role-to-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="assign-role-to-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|object|false|none|none|
|» _id|string|false|none|none|
|» scope|string|false|none|none|
|» description|string|false|none|none|
|» mandatory2fa|boolean|false|none|none|
|» name|string|false|none|none|
|» protected|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Get Users of a Role

<a id="opIdget-api-v1-roles.getUsersInRole"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/roles.getUsersInRole?role=653ec9873c7460e18e6f' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/roles.getUsersInRole`

Gets the users that belong to a specific role.
**Permissions required**: 
- `access-permissions`: Required to modify permissions for various roles
- `view-other-user-channels`: Permission to view channels owned by other users. Required if the request includes a `roomId`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.3.0            | Added       |

<h3 id="get-users-of-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|true|The ID of the role|
|roomId|query|string|false|The room ID.|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "voakrL3cHjYBwwRPq",
      "username": "a",
      "type": "user",
      "status": "offline",
      "active": true,
      "name": "a"
    },
    {
      "_id": "N2s7KG6YkzgJfXbyn",
      "username": "b",
      "type": "user",
      "status": "offline",
      "active": true,
      "name": "b"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Query param \"role\" is required [error-param-not-provided]",
  "errorType": "error-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-users-of-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-of-a-role-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» type|string|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» name|string|false|none|none|
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

## Get Roles

<a id="opIdget-api-v1-roles.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.list \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/roles.list`

Gets all the roles in the workspace.
### Changelog
| Version      | Description | 
| ---------------- | ------------|
|0.73.0            | Added `mandatory2fa` property       |
|0.70.0            | Added       |

<h3 id="get-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "_id": "admin",
      "description": "Admin",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "moderator",
      "description": "Moderator",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Subscriptions"
    },
    {
      "_id": "leader",
      "description": "Leader",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Subscriptions"
    },
    {
      "_id": "owner",
      "description": "Owner",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Subscriptions"
    },
    {
      "_id": "user",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "bot",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "guest",
      "description": "",
      "mandatory2fa": false,
      "protected": true,
      "scope": "Users"
    },
    {
      "_id": "livechat-agent",
      "name": "livechat-agent",
      "scope": "Users"
    },
    {
      "_id": "livechat-manager",
      "name": "livechat-manager",
      "scope": "Users"
    },
    {
      "_id": "livechat-guest",
      "name": "livechat-guest",
      "scope": "Users"
    }
  ],
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

<h3 id="get-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[object]|false|none|none|
|» _id|string|false|none|none|
|» description|string|false|none|none|
|» mandatory2fa|boolean|false|none|none|
|» protected|boolean|false|none|none|
|» scope|string|false|none|none|
|» name|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Updated Roles

<a id="opIdget-api-v1-roles.sync"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.sync \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/roles.sync`

Gets the roles in the workspace that were created, updated, or deleted after a given date. 

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-updated-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|string(date-time)|false|Date as an ISO string. Roles updated at or after this date are returned in `update`, and roles deleted after this date are returned in `remove`.|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|

> Example responses

> 200 Response

```json
{
  "roles": {
    "update": [
      {
        "_id": "admin",
        "scope": "Users",
        "description": "Admin",
        "mandatory2fa": false,
        "name": "admin",
        "protected": true,
        "_updatedAt": "2026-11-07T02:22:08.393Z"
      },
      {
        "_id": "moderator",
        "scope": "Subscriptions",
        "description": "Moderator",
        "mandatory2fa": false,
        "name": "moderator",
        "protected": true,
        "_updatedAt": "2026-11-07T02:22:08.408Z"
      },
      {
        "_id": "680fc8d0825d98f164760591",
        "name": "TOTP",
        "scope": "Users",
        "description": "TOTP",
        "protected": false,
        "mandatory2fa": true,
        "_updatedAt": "2025-04-28T18:31:33.121Z"
      }
    ],
    "remove": [
      {
        "_id": "anonymous",
        "__collection__": "roles",
        "_deletedAt": "2026-10-27T19:31:44.643Z",
        "_updatedAt": "2026-10-03T03:00:56.098Z",
        "description": "",
        "mandatory2fa": false,
        "name": "anonymous",
        "protected": true,
        "scope": "Users"
      }
    ]
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "updatedSince must be a valid date string [error-invalid-param]",
  "errorType": "error-invalid-param"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-updated-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-updated-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|object|false|none|none|
|» update|[object]|false|none|Roles created or updated at or after the `updatedSince` date.|
|» » _id|string|false|none|The role ID. For default roles, this is the same as the role name. For custom roles, this is a generated ID.|
|» » name|string|false|none|The role name.|
|» » scope|string|false|none|Whether the role applies to the whole workspace (`Users`) or to rooms (`Subscriptions`).|
|» » description|string|false|none|The role description. Can be an empty string.|
|» » mandatory2fa|boolean|false|none|Whether users with this role must use two-factor authentication. This field is optional and can be missing from older roles.|
|» » protected|boolean|false|none|Whether the role is a protected default role that can't be deleted.|
|» » _updatedAt|string(date-time)|false|none|The date the role was last updated.|
|» remove|[object]|false|none|Roles deleted after the `updatedSince` date.|
|» » _id|string|false|none|The role ID.|
|» » name|string|false|none|The role name.|
|» » scope|string|false|none|none|
|» » description|string|false|none|none|
|» » mandatory2fa|boolean|false|none|none|
|» » protected|boolean|false|none|none|
|» » __collection__|string|false|none|The collection the role was deleted from. Always `roles`.|
|» » _deletedAt|string(date-time)|false|none|The date the role was deleted.|
|» » _updatedAt|string(date-time)|false|none|The date the role was last updated before it was deleted.|
|success|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » scope|Users|
|» » scope|Subscriptions|
|» » scope|Users|
|» » scope|Subscriptions|
|success|true|

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

## Delete Role

<a id="opIdpost-api-v1-roles.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roleId": "6579adcf2dd9f9d9514f6"
  }'
```

`POST /api/v1/roles.delete`

Permission required: `access-permissions`
- Roles that have the protected value as true can't be deleted (such as: `admin`, `moderator`, `user` and so on).
- You cannot delete roles that are assigned to users. To do that, you must first remove this role from all the users.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.17.0            | Added       |

> Body parameter

```json
{
  "roleId": "6579adcf2dd9f9d9514f6"
}
```

<h3 id="delete-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» roleId|body|string|true|The ID of an existing role.|

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
  "error": "The role properties are invalid. [error-invalid-role-properties]",
  "errorType": "error-invalid-role-properties"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-role-responseschema">Response Schema</h3>

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

## Remove Role from User

<a id="opIdpost-api-v1-roles.removeUserFromRole"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.removeUserFromRole \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roleId": "6579adcf2dd9f9d9514f6",
    "username": "user08",
    "scope": "string"
  }'
```

`POST /api/v1/roles.removeUserFromRole`

Remove a role from a user. Permission required: `access-permissions`

> Body parameter

```json
{
  "roleId": "6579adcf2dd9f9d9514f6",
  "username": "user08",
  "scope": "string"
}
```

<h3 id="remove-role-from-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» roleId|body|string|true|The ID of an existing role.|
|» username|body|string|true|The username for which you want to remove the role.|
|» scope|body|string|false|Optionally, you can also provide the role scope. The options are `Users` and `Subscriptions`.|

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
  "error": "The role properties are invalid. [error-invalid-role-properties]",
  "errorType": "error-invalid-role-properties"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-role-from-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-role-from-user-responseschema">Response Schema</h3>

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

## Get Users in Public Roles

<a id="opIdget-api-v1-roles.getUsersInPublicRoles"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/roles.getUsersInPublicRoles \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/roles.getUsersInPublicRoles`

Use this endpoint to get the list of roles other than `user`, such as admin, livechat, and custom roles.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.10.0            | Added       |

<h3 id="get-users-in-public-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "kb2WBkjkut4YJpFQk",
      "username": "agent2",
      "roles": [
        "livechat-agent"
      ]
    },
    {
      "_id": "Ahgf5k9Ca4YEdMjwX",
      "username": "test.agent",
      "roles": [
        "admin",
        "livechat-agent"
      ]
    }
  ],
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

<h3 id="get-users-in-public-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-in-public-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» roles|[string]|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="user-management-users">Users</h1>

## Create User

<a id="opIdpost-api-v1-users.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "name": "Test User",
    "email": "email@user.tld1",
    "password": "anypassyouwant",
    "username": "uniqueusername1",
    "active": true,
    "nickname": "testusername",
    "bio": "All about the user",
    "joinDefaultChannels": true,
    "statusText": "On a vacation",
    "roles": [
      "bot"
    ],
    "requirePasswordChange": false,
    "setRandomPassword": false,
    "sendWelcomeEmail": false,
    "sipExtension": "string",
    "phones": [
      {
        "number": "string",
        "label": "string"
      }
    ],
    "verified": false,
    "customFields": {
      "clearance": "High",
      "team": "Queen"
    }
  }'
```

`POST /api/v1/users.create`

Create a new user in your workspace. This endpoint is typically used by admins to create user accounts in the workspace.

Permissions required:
- `create-user`: Permission to create users
- `edit-other-user-active-status`: Permission to enable or disable other accounts


### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0            | Renamed `freeSwitchExtension` to `sipExtension`. Added the `phones` field.       |
|0.48.0            | `role` property is now `roles` which is an array of strings for the roles to create the user with.       |
|0.45.0            | Users created via this now join the default channels.       |
|0.40.0            | Added       |

> Body parameter

```json
{
  "name": "Test User",
  "email": "email@user.tld1",
  "password": "anypassyouwant",
  "username": "uniqueusername1",
  "active": true,
  "nickname": "testusername",
  "bio": "All about the user",
  "joinDefaultChannels": true,
  "statusText": "On a vacation",
  "roles": [
    "bot"
  ],
  "requirePasswordChange": false,
  "setRandomPassword": false,
  "sendWelcomeEmail": false,
  "sipExtension": "string",
  "phones": [
    {
      "number": "string",
      "label": "string"
    }
  ],
  "verified": false,
  "customFields": {
    "clearance": "High",
    "team": "Queen"
  }
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» name|body|string|true|The display name of the user.|
|» email|body|string|true|The email address for the user.|
|» password|body|string|true|The password for the user.|
|» username|body|string|true|The username for the user.|
|» active|body|boolean|false|Set the users' active status.  If the user is deactivated, they can not login. By default, the user is active.|
|» nickname|body|string|false|The nickname for the user. |
|» bio|body|string|false|The bio for the user.|
|» joinDefaultChannels|body|boolean|false|Select whether users should automatically join default channels once they are created. By default, it is set to `true`.|
|» statusText|body|string|false|The status text of the user.|
|» roles|body|[string]|false|The roles to be assigned to this user. If it is not specified, the `user` role is assigned by default.<br>**Note:**<br>* For default roles, the role name and ID are the same. For custom roles, the name and ID are different. <br>* If you are setting a custom role for a user, make sure to enter the custom role ID, and not the role name.<br>Refer to [Roles](https://docs.rocket.chat/use-rocket.chat/workspace-administration/permissions#roles) for more information.|
|» requirePasswordChange|body|boolean|false|Should the user be required to change their password when they login? It is set to `false` by default|
|» setRandomPassword|body|boolean|false|Should the user be assigned a random password once they are created? It is set to `false` by defualt.|
|» sendWelcomeEmail|body|boolean|false|Should the user get a welcome email? It is set to `true` by default.|
|» sipExtension|body|string|false|The user's SIP extension (formerly `freeSwitchExtension`).|
|» phones|body|[object]|false|The user's phone numbers. Up to 10 numbers, each with an optional label.|
|» » number|body|string|true|The phone number. Spaces are removed.|
|» » label|body|string|false|A label for the number, for example `Work`.|
|» verified|body|boolean|false|Should the user's email address be verified when created? It is set to `false` by default.|
|» customFields|body|object|false|A valid JSON object of key-value pairs consisting of additional fields to be<br>added during user registration. By default, the value is `undefined`.<br>To save custom fields, you must first define them in the [workspace admin settings](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts/custom-fields).<br>For information on how to view the custom fields, see the [Get Users List](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/get-users-list) endpoint.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "BsNr28znDkG8aeo7W",
    "createdAt": "2016-09-13T14:57:56.037Z",
    "services": {
      "password": {
        "bcrypt": "$2a$i7BFS55uFYRf5TE4ErSUH8HymMNAbpMAvsOcl2C"
      }
    },
    "username": "uniqueusername",
    "emails": [
      {
        "address": "email@user.tld",
        "verified": false
      }
    ],
    "type": "user",
    "status": "offline",
    "active": true,
    "roles": [
      "user"
    ],
    "_updatedAt": "2016-09-13T14:57:56.175Z",
    "name": "name",
    "settings": {}
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Adding user is not allowed [error-action-not-allowed]",
  "errorType": "error-action-not-allowed",
  "details": {
    "method": "insertOrUpdateUser",
    "action": "Adding_user"
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

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» type|string|false|none|none|
|» roles|[string]|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» bio|string|false|none|none|
|» name|string|false|none|none|
|» nickname|string|false|none|none|
|» requirePasswordChange|boolean|false|none|none|
|» settings|object|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» action|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register User

<a id="opIdpost-api-v1-users.register"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "rogersmith",
    "email": "roger@example.com",
    "pass": "passw0rd",
    "name": "Roger Smith",
    "secretURL": "Jjwjg6gouWLXhMGKW"
  }'
```

`POST /api/v1/users.register`

* An external member can use this endpoint to create an account on the workspace.
* The number of requests you can make and the interval between each request depends on the workspace's rate limiter settings. You can find the settings from **Manage** > **Workspace** > **Settings** > **Rate Limiter** > **API Rate Limiter**.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.50.0            | Added       |

> Body parameter

```json
{
  "username": "rogersmith",
  "email": "roger@example.com",
  "pass": "passw0rd",
  "name": "Roger Smith",
  "secretURL": "Jjwjg6gouWLXhMGKW"
}
```

<h3 id="register-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» username|body|string|true|The username for the user.|
|» email|body|string|true|The email for the user.|
|» pass|body|string|true|The password for the user.|
|» name|body|string|true|The name of the user. <br>The value can be an empty string if `Require Name For Signup` is disabled in [account registration](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts#registration).|
|» secretURL|body|string|false|You may have been provided with a secret URL. It includes a string appended to the registration URL. For example, `https://workspacedomain.com/register/my-secret-code`. For this parameter, enter the additional string at the end of the URL.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "nSYqWzZ4GsKTX4dyK",
    "type": "user",
    "status": "offline",
    "active": true,
    "name": "Example User",
    "utcOffset": 0,
    "username": "example"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'pass' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="register-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="register-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» name|string|false|none|none|
|» utcOffset|integer|false|none|none|
|» username|string|false|none|none|
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

## Update User Details

<a id="opIdpost-api-v1-users.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'x-2fa-code: 148750' \
  -H 'x-2fa-method: string' \
  -d '{
    "userId": "PMGoujw82oETsaw9828rQh2oXM",
    "data": {
      "name": "Agent 2 Updated",
      "email": "agent2@agent.com",
      "password": "passw0rd",
      "username": "example",
      "active": true,
      "roles": [
        "string"
      ],
      "requirePasswordChange": false,
      "sendWelcomeEmail": false,
      "sipExtension": "string",
      "phones": [
        {
          "number": "string",
          "label": "string"
        }
      ],
      "verified": true,
      "customFields": {
        "clearance": "High",
        "team": "Queen"
      }
    },
    "confirmRelinquish": false
  }'
```

`POST /api/v1/users.update`

Use this endpoint to update the details of an existing user. This endpoint requires 2FA.

**Permissions required**:
- `edit-other-user-password`: Permission to modify other user's passwords
- `edit-other-user-info_description`: Permission to change other user's name, username or email address
- `edit-other-user-active-status`: Permission to enable or disable other accounts

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0            | Renamed `freeSwitchExtension` to `sipExtension`. Added the `phones` field.       |
|7.0.0             | Removed upsert behaviour and stopped allowing `joinDefaultChannels` param|
|0.48.0            | Renamed to `users.update`       |
|0.35.0            | Added       |

> Body parameter

```json
{
  "userId": "PMGoujw82oETsaw9828rQh2oXM",
  "data": {
    "name": "Agent 2 Updated",
    "email": "agent2@agent.com",
    "password": "passw0rd",
    "username": "example",
    "active": true,
    "roles": [
      "string"
    ],
    "requirePasswordChange": false,
    "sendWelcomeEmail": false,
    "sipExtension": "string",
    "phones": [
      {
        "number": "string",
        "label": "string"
      }
    ],
    "verified": true,
    "customFields": {
      "clearance": "High",
      "team": "Queen"
    }
  },
  "confirmRelinquish": false
}
```

<h3 id="update-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|x-2fa-code|header|string|true|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|true|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» userId|body|string|true|The user ID to update. This value must not be empty.|
|» data|body|object|true|The object that includes the user information to update with the following parameters. Note: If you provide an empty object, the user details are returned.|
|» » name|body|string|false|The name of the user.|
|» » email|body|string|false|The email ID of the user.|
|» » password|body|string|false|The password for the user.|
|» » username|body|string|false|The username for the user.|
|» » active|body|boolean|false|Whether the user is active, which determines if they can log in. Setting this to `false` deactivates the user. If the user is the last owner of any room, or the only member of a private room, the request fails with `user-last-owner` unless `confirmRelinquish` is also `true`. See `confirmRelinquish`.|
|» » roles|body|[string]|false|The roles the user has been assigned.|
|» » requirePasswordChange|body|boolean|false|Whether the user should be required to change their password when they login.|
|» » sendWelcomeEmail|body|boolean|false|Whether the user should get a welcome email.|
|» » sipExtension|body|string|false|The user's SIP extension (formerly `freeSwitchExtension`).|
|» » phones|body|[object]|false|The user's phone numbers. Up to 10 numbers, each with an optional label.|
|» » » number|body|string|true|The phone number. Spaces are removed.|
|» » » label|body|string|false|A label for the number, for example `Work`.|
|» » verified|body|boolean|false|Whether the user's email address should be verified.|
|» » customFields|body|object|false|Any custom fields the user should have on their account.<br>To save custom fields, you must first define the custom fields in the admin panel (Manage > Workspace > Settings > Accounts > Registration > Custom Fields). For details on how to configure this field, see [Custom Fields](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts/custom-fields).<br>For information on how to view the custom fields, see the [Get Users List](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/get-users-list) endpoint.|
|» confirmRelinquish|body|boolean|false|Top-level body parameter (not inside `data`). Only used when `data.active` is `false`. Set to `true` to deactivate the user even if they are the last owner of a room, or the only member of a private room.<br>If the room has other active members, the member who joined earliest becomes the new owner. If the user is the only member of a private room, or no other active member can take ownership, that room is deleted, together with every discussion that belongs to it. Public channels are not deleted.<br>If omitted or `false` and the user is the last owner of any room, the request fails with `user-last-owner` and the user's active status is not changed.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "PMGoujw82oETsaw9828rQh2oXM",
    "createdAt": "2026-02-24T23:22:54.986Z",
    "username": "agent2",
    "emails": [
      {
        "address": "agent2@agent.com",
        "verified": false
      }
    ],
    "type": "user",
    "roles": [
      "user",
      "livechat-agent"
    ],
    "status": "offline",
    "active": true,
    "inactiveReason": null,
    "name": "Agent 2 Updated",
    "_updatedAt": "2026-02-25T14:25:59.157Z",
    "__rooms": [
      "GENERAL"
    ],
    "requirePasswordChange": false,
    "settings": {},
    "statusText": "",
    "livechatStatusSystemModified": false,
    "statusLivechat": "not-available"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Editing user is not allowed [error-action-not-allowed]",
  "errorType": "error-action-not-allowed",
  "details": {
    "method": "insertOrUpdateUser",
    "action": "Editing_user"
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

<h3 id="update-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-user-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» type|string|false|none|none|
|» roles|[string]|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» inactiveReason|string|false|none|none|
|» name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» __rooms|[string]|false|none|none|
|» requirePasswordChange|boolean|false|none|none|
|» settings|object|false|none|none|
|» statusText|string|false|none|none|
|» livechatStatusSystemModified|boolean|false|none|none|
|» statusLivechat|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» action|string|false|none|none|
|» shouldBeRemoved|[string]|false|none|none|
|» shouldChangeOwner|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Own Basic Information

<a id="opIdpost-api-v1-users.updateOwnBasicInfo"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.updateOwnBasicInfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "data": {
      "email": "example@example.com",
      "newPassword": "passw0rd",
      "currentPassword": "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5",
      "nickname": "cake",
      "bio": "Engineer",
      "username": "example",
      "name": "Example User",
      "statusType": "offline",
      "statusText": "On a vacation",
      "phones": [
        {
          "number": "string",
          "label": "string"
        }
      ]
    },
    "customFields": {}
  }'
```

`POST /api/v1/users.updateOwnBasicInfo`

Update your account information using this endpoint.
* To change your email or password, you must confirm it using TOTP. If you don't have 2FA enabled in your account (token code or email), TOTP will require the current password method. Note that if 2FA is not enabled in the workspace, the 2FA headers are not required.
* If you add the `currentPassword` encrypted in SHA256 to the request body, the request won't require TOTP again.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Added the `phones` field.       |
|6.4.0            | Add `bio` and `statusType` parameters.       |
|0.62.2            | Added       |

> Body parameter

```json
{
  "data": {
    "email": "example@example.com",
    "newPassword": "passw0rd",
    "currentPassword": "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5",
    "nickname": "cake",
    "bio": "Engineer",
    "username": "example",
    "name": "Example User",
    "statusType": "offline",
    "statusText": "On a vacation",
    "phones": [
      {
        "number": "string",
        "label": "string"
      }
    ]
  },
  "customFields": {}
}
```

<h3 id="update-own-basic-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» data|body|object|true|An object of user data to be updated with the following parameters. If you enter an empty string, the user details are returned.|
|» » email|body|string|false|Email ID of the user.|
|» » newPassword|body|string|false|The new password of the user.|
|» » currentPassword|body|string|false|The password for the user encrypted in SHA256.|
|» » nickname|body|string|false|The nickname of the user.|
|» » bio|body|string|false|The bio of the user.|
|» » username|body|string|false|The username of the user.|
|» » name|body|string|false|Name of the user.|
|» » statusType|body|string|false|The status type of the user. It can be `online`, `busy`, `away`, or `offline`.|
|» » statusText|body|string|false|The status text of the user.|
|» » phones|body|[object]|false|The user's phone numbers. Up to 10 numbers, each with an optional label.|
|» » » number|body|string|true|The phone number. Spaces are removed.|
|» » » label|body|string|false|A label for the number, for example `Work`.|
|» customFields|body|object|false|Any custom fields the user should have on their account. You must define the custom fields in the workspace settings.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "rbAXPnMktTFbNpwtJ",
    "createdAt": "2023-02-20T13:42:07.119Z",
    "services": {
      "password": {
        "bcrypt": "$2b$10$E9ppW3T2itbMEcDvOdWBR.NXiW3YbifRHwBhjVkt26r1XS8yNhh6u"
      },
      "email2fa": {
        "enabled": true,
        "changedAt": "2023-02-20T13:42:07.118Z"
      },
      "resume": {
        "loginTokens": [
          {
            "when": "2023-09-16T09:27:10.959Z",
            "hashedToken": "A1jmsVCHHH2SkXHrEJDfumN+VtUP3tcuJ/OGseGrRbA=",
            "twoFactorAuthorizedHash": "3067196228a830eacd6181a6977fe86a",
            "twoFactorAuthorizedUntil": "2023-09-19T16:40:58.767Z"
          },
          {
            "when": "2023-09-18T10:37:58.218Z",
            "hashedToken": "RLdxvu9dDnk6QRwFdaK3my1AoPeGaR5lTkK+zEhTuPk="
          },
          {
            "when": "2023-09-18T10:41:25.814Z",
            "hashedToken": "zWZ8wW9PNlVuI2Q65vK/9vytaONk1BXxaWcNld4qvEc="
          }
        ]
      },
      "email": {
        "verificationTokens": [
          {
            "token": "lHq_4L8Orgxu2p5NhfVb0V9kA7kO1VaBXA5GmaJiuX3",
            "address": "test@test.com",
            "when": "2023-05-23T18:47:07.142Z"
          }
        ]
      },
      "totp": {
        "enabled": false
      },
      "passwordHistory": [
        "$2b$10$n1.FV8S2mxz7GzXA392V5OaDa5X0WR1DQ4eGGFKI/wpdhS9sVIC6S",
        "$2b$10$4I68O5mlR.C8dRhtZ4Mj6us6EMwRHNIUqEWQe/nOhISs4e8RtOliW",
        "$2b$10$AU9Ncfd8bO5TpE.5iLMjyujdd6RVJaoeKckVqo3MMO9Ngc3oyMAs2"
      ]
    },
    "username": "roxie",
    "emails": [
      {
        "address": "test@test.com",
        "verified": true
      }
    ],
    "type": "user",
    "status": "offline",
    "active": true,
    "_updatedAt": "2023-09-19T16:10:58.873Z",
    "__rooms": [
      "GENERAL",
      "siyr2oWQJBjQjhLwr",
      "6GFJ3tbmHiyHbahmC",
      "64f0f82c2c26843a68c1f7ba"
    ],
    "roles": [
      "user",
      "admin",
      "livechat-agent",
      "livechat-manager"
    ],
    "name": "test test",
    "settings": {
      "preferences": {
        "themeAppearence": "light"
      },
      "profile": {}
    },
    "lastLogin": "2023-09-19T16:00:19.657Z",
    "statusConnection": "away",
    "utcOffset": 1,
    "banners": {
      "versionUpdate-6_0_0": {
        "id": "versionUpdate-6_0_0",
        "priority": 10,
        "title": "Update_your_RocketChat",
        "text": "New_version_available_(s)",
        "textArguments": [
          "6.0.0"
        ],
        "link": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.0.0",
        "modifiers": [],
        "read": true
      },
      "versionUpdate-6_2_8": {
        "id": "versionUpdate-6_2_8",
        "priority": 10,
        "title": "Update_your_RocketChat",
        "text": "New_version_available_(s)",
        "textArguments": [
          "6.2.8"
        ],
        "link": "https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8",
        "modifiers": []
      }
    },
    "statusDefault": "offline",
    "statusText": "On a vacation",
    "operator": true,
    "livechatStatusSystemModified": false,
    "statusLivechat": "available",
    "livechatCount": 8,
    "livechat": {
      "maxNumberSimultaneousChat": ""
    },
    "bio": "Engineer",
    "nickname": ""
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'data' [error-invalid-params]",
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

<h3 id="update-own-basic-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-own-basic-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» services|object|false|none|none|
|» » password|object|false|none|none|
|» » » bcrypt|string|false|none|none|
|» » email2fa|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » changedAt|string|false|none|none|
|» » resume|object|false|none|none|
|» » » loginTokens|[object]|false|none|none|
|» » » » when|string|false|none|none|
|» » » » hashedToken|string|false|none|none|
|» » » » twoFactorAuthorizedHash|string|false|none|none|
|» » » » twoFactorAuthorizedUntil|string|false|none|none|
|» » email|object|false|none|none|
|» » » verificationTokens|[object]|false|none|none|
|» » » » token|string|false|none|none|
|» » » » address|string|false|none|none|
|» » » » when|string|false|none|none|
|» » totp|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » passwordHistory|[string]|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» type|string|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» __rooms|[string]|false|none|none|
|» roles|[string]|false|none|none|
|» name|string|false|none|none|
|» settings|object|false|none|none|
|» » preferences|object|false|none|none|
|» » » themeAppearence|string|false|none|none|
|» » profile|object|false|none|none|
|» lastLogin|string|false|none|none|
|» statusConnection|string|false|none|none|
|» utcOffset|integer|false|none|none|
|» banners|object|false|none|none|
|» » versionUpdate-6_0_0|object|false|none|none|
|» » » id|string|false|none|none|
|» » » priority|integer|false|none|none|
|» » » title|string|false|none|none|
|» » » text|string|false|none|none|
|» » » textArguments|[string]|false|none|none|
|» » » link|string|false|none|none|
|» » » modifiers|[object]|false|none|none|
|» » » read|boolean|false|none|none|
|» » versionUpdate-6_2_8|object|false|none|none|
|» » » id|string|false|none|none|
|» » » priority|integer|false|none|none|
|» » » title|string|false|none|none|
|» » » text|string|false|none|none|
|» » » textArguments|[string]|false|none|none|
|» » » link|string|false|none|none|
|» » » modifiers|[object]|false|none|none|
|» statusDefault|string|false|none|none|
|» statusText|string|false|none|none|
|» operator|boolean|false|none|none|
|» livechatStatusSystemModified|boolean|false|none|none|
|» statusLivechat|string|false|none|none|
|» livechatCount|integer|false|none|none|
|» livechat|object|false|none|none|
|» » maxNumberSimultaneousChat|string|false|none|none|
|» bio|string|false|none|none|
|» nickname|string|false|none|none|
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

## Get User's Info

<a id="opIdget-api-v1-users.info"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.info \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.info`

Retrieves information about a user, limited to the details the caller is allowed to view. Look up the user by `userId`, `username`, `importId`, `email`, or `sipExtension`. Provide exactly one of these parameters per request.

This endpoint doesn't support the `fields` parameter. Use `includeUserRooms` instead.

When the Premium **User status hiding** feature is enabled and the requested user has hidden their status from the caller, the response shows the user as `offline` and omits `statusText`, `statusSource`, `statusExpiresAt`, `statusDefault`, and `statusConnection`. This restriction also applies to administrators. Users always see their own status.


### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Renamed `freeSwitchExtension` to `sipExtension`. Added the `phones` field.       |
|8.8.0             | Added status visibility filtering |
|8.5.0             | Added `freeSwitchExtension` query parameter for user lookup |
|8.4.0             | Added `email` query parameter for user lookup |
|7.0.0             | Removed the `fields` query parameter       |
|3.4.0             | Added `unread` property inside `rooms` object       |
|0.70.0            | Added `rooms` property to response if the user request it and has the `view-other-user-channels` permission       |
|0.49.0            | Updated to support `userId` or `username`       |
|0.48.0            | Renamed to `users.info`       |
|0.35.0            | Added       |

<h3 id="get-users-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|userId|query|string|false|The `userId` of the user. Alternatively, you can use `username`, `importId`, `email`, or `sipExtension` to retrieve user information.|
|username|query|string|false|The username of the user. Alternatively, you can use `userId`, `importId`, `email`, or `sipExtension` to retrieve user information.|
|importId|query|string|false|The import ID of the user. Alternatively, you can use `userId`, `username`, `email`, or `sipExtension` to retrieve user information.|
|includeUserRooms|query|string|false|Whether to include the list of rooms the user is a member of.|
|email|query|string|false|Filter the results by entering the user's email. Alternatively, you can use `userId`, `username`, `importId`, or `sipExtension` to retrieve user information.|
|sipExtension|query|string|false|The SIP extension assigned to the user (formerly `freeSwitchExtension`). Alternatively, you can use `userId`, `username`, `importId`, or `email` to retrieve user information.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "5fRTXMt7DMJbpPJfh",
    "createdAt": "2023-07-10T16:44:58.548Z",
    "services": {
      "password": true,
      "email2fa": {
        "enabled": true,
        "changedAt": "2023-07-10T16:44:58.546Z"
      },
      "resume": {
        "loginTokens": [
          {
            "when": "2023-10-05T18:55:02.996Z",
            "hashedToken": "..."
          },
          {
            "when": "2023-10-05T19:09:30.415Z",
            "hashedToken": "...."
          },
          {
            "when": "2023-10-10T23:40:46.098Z",
            "hashedToken": "...."
          }
        ]
      }
    },
    "username": "test.john",
    "emails": [
      {
        "address": "test.john@test.com",
        "verified": true
      }
    ],
    "type": "user",
    "status": "offline",
    "active": true,
    "roles": [
      "user",
      "admin"
    ],
    "name": "Test John",
    "requirePasswordChange": false,
    "lastLogin": "2023-10-10T23:40:46.093Z",
    "statusConnection": "offline",
    "utcOffset": 1,
    "statusText": "",
    "avatarETag": "GFoEi6wv3uAxnzDcD",
    "nickname": "tesuser2",
    "sipExtension": "1234",
    "phones": [
      {
        "number": "+15551234567",
        "label": "Work"
      }
    ],
    "canViewAllInfo": true,
    "rooms": [
      {
        "_id": "651667dda2f73c7460e18cce",
        "unread": 1,
        "rid": "JKa7R9zu2DinBhBN9",
        "name": "Livestream",
        "t": "c"
      },
      {
        "_id": "64ac358a79f5c6e276cfe718",
        "unread": 0,
        "rid": "GENERAL",
        "name": "general",
        "t": "c"
      },
      {
        "_id": "64aca0e5aa5ad4273bfbfdb8",
        "unread": 0,
        "rid": "6GFJ3tbmHiyHbahmC",
        "name": "test-audit",
        "t": "c"
      },
      {
        "_id": "64adb09baa5ad4273bfc0cc0",
        "unread": 0,
        "rid": "64adb09baa5ad4273bfc0cbf",
        "name": "test-room",
        "t": "c",
        "roles": [
          "owner"
        ]
      },
      {
        "_id": "64fd791c2c26843a68c1f7e5",
        "unread": 0,
        "rid": "siyr2oWQJBjQjhLwr",
        "name": "try",
        "t": "c",
        "roles": []
      },
      {
        "_id": "g5xHGWAGLA7vZXwW8",
        "rid": "5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ",
        "name": "roxie",
        "t": "d",
        "unread": 2
      },
      {
        "_id": "64ef8a982c26843a68c1f7ae",
        "unread": 0,
        "rid": "WDuJLFkjwk6L7LdFC",
        "name": "new",
        "t": "p",
        "roles": [
          "leader"
        ]
      }
    ]
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'userId'\n must have required property 'username'\n must have required property 'importId'\n must match a schema in anyOf [error-invalid-params]",
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

<h3 id="get-users-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» type|string|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» name|string|false|none|none|
|» requirePasswordChange|boolean|false|none|none|
|» lastLogin|string|false|none|none|
|» statusConnection|string|false|none|none|
|» utcOffset|integer|false|none|none|
|» sipExtension|string|false|none|The user's SIP extension (formerly `freeSwitchExtension`).|
|» phones|[object]|false|none|The user's phone numbers. Up to 10 numbers, each with an optional label. Phones are returned only when the caller can see the user's full profile, for example their own user.|
|» » number|string|true|none|The phone number. Spaces are removed.|
|» » label|string|false|none|A label for the number, for example `Work`.|
|» canViewAllInfo|boolean|false|none|none|
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

## Get Users List

<a id="opIdget-api-v1-users.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.list`

Retrieves workspace users and the information the caller is allowed to view.
Filter by `username`, `email`, or custom field values to locate a user and obtain their `userId` for the `users.info` endpoint.

The response only contains the default user fields. To read `customFields`, set `includeCustomFields` to `true`. Other fields, such as `utcOffset`, `nickname`, `bio`, and `statusText`, are not returned by this endpoint. Use the `users.info` endpoint instead.

When the Premium **User status hiding** feature is enabled, users who have hidden their status from the caller appear as `offline`, and their detailed status fields are omitted.

**Permissions required**:
- `view-d-room`: View direct messages.
- `view-full-other-user-info`: View complete user details, such as account creation and last login. Also required to use the `customFields` and `includeCustomFields` parameters.
- `view-outside-room`: View users outside the caller's rooms when `Apply_permission_view-outside-room` is enabled under **Settings** > **General** > **REST API**.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Removed the `query` and `fields` parameters. Requests that include them return a `400` error. Added the `username`, `customFields`, and `includeCustomFields` query parameters.       |
|8.8.0             | Added status visibility filtering |
|8.4.0             | Added `email` query parameter for filtering |
|0.49.0            | `Count` and `offset` query parameters supported.       |
|0.35.0            | Added       |

<h3 id="get-users-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|string|false|Sort the users in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON string. The options are as follows: * `status`: Sort by users' status. For example, `sort={"status":1}` (this maps to the `active` status). * `createdAt`: Sort by the time of user creation. For example, `sort={"createdAt":-1}` * `name`: Sort by user name. For example, `sort={"name":1}`|
|email|query|string \| null|false|Filter users by email address. Minimum length: 1 character.|
|username|query|string \| null|false|Filter users whose username contains this value. The match is not case-sensitive and checks the username only, not the display name. Regular expression characters are matched literally. Minimum length: 1 character. An empty value returns a `400` error.|
|customFields|query|object|false|Filter users by exact custom field values, in the format `customFields[<key>]=<value>`. For example, `customFields[department]=Sales`. The value match is case-sensitive. When you send more than one key, a user must match all of them. The filter works without `includeCustomFields`. Sending the parameter as a JSON string, such as `customFields={"department":"Sales"}`, returns a `400` error. Requires the `view-full-other-user-info` permission.|
|includeCustomFields|query|boolean|false|Whether to include each user's full `customFields` object in the response. Users without custom fields are returned without the `customFields` key. The value must be `true` or `false`; other values return a `400` error. Requires the `view-full-other-user-info` permission. Defaults to `false`.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "DGsmi2J4WjizYn7jc",
      "username": "uniqueusername",
      "emails": [
        {
          "address": "email@user.tld",
          "verified": false
        }
      ],
      "type": "user",
      "status": "offline",
      "active": true,
      "roles": [
        "bot",
        "user"
      ],
      "name": "name",
      "nameInsensitive": "name"
    },
    {
      "_id": "uZ5JvvioeHK8Coyqe",
      "active": true,
      "type": "user",
      "status": "offline",
      "roles": [
        "user"
      ],
      "lastLogin": "2023-05-16T20:50:33.579Z",
      "username": "user-0",
      "nameInsensitive": ""
    },
    {
      "_id": "aspKK7FHe7iQgzexX",
      "active": true,
      "type": "user",
      "status": "offline",
      "roles": [
        "user"
      ],
      "lastLogin": "2023-05-12T10:44:46.703Z",
      "username": "user-00",
      "name": "User 00",
      "emails": [
        {
          "address": "user00@mail.cm",
          "verified": false
        }
      ],
      "nameInsensitive": "user 00"
    }
  ],
  "count": 3,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must NOT have additional properties",
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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="get-users-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-users-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» type|string|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» roles|[string]|false|none|none|
|» name|string|false|none|none|
|» lastLogin|string|false|none|Returned only for users who have logged in.|
|» nameInsensitive|string|false|none|none|
|» avatarETag|string|false|none|none|
|» customFields|object|false|none|Returned only when `includeCustomFields` is `true` and the user has custom fields.|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set User Avatar

<a id="opIdpost-api-v1-users.setAvatar"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.setAvatar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "avatarUrl": "http://domain.tld/to/my/own/avatar.jpg"
  }'
```

`POST /api/v1/users.setAvatar`

Use this endpoint to change your or another user's avatar. You can change avatars only if the `AllowUserAvatarChange` setting under **Accounts** is enabled. To change another user's avatar, you need the permission: `edit-other-user-avatar`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.7.0             | Added optional `service` multipart field (stored as `avatarOrigin`)       |
|0.56.0            | Add support for `username` argument.       |
|0.48.0            | Set other users avatars if the callee has permission.       |
|0.46.0            | Added       |

> Body parameter

```json
{
  "avatarUrl": "http://domain.tld/to/my/own/avatar.jpg"
}
```

<h3 id="set-user-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|You have two options to set the user avatar:<br>  * Upload the image file to use as the new avatar, as form-data. For example, `image=@my-own-avatar.png`. Optionally include a `service` field to record which OAuth/external service the avatar came from (stored as `avatarOrigin`).<br>  * Enter the image URL you want to set as the user avatar in the request body, using the parameter `avatarUrl`.|
|» avatarUrl|body|string|true|Enter the image URL you want to set as the user avatar.|
|» userId|body|string|false|The ID or username of the user. If not provided, the avatar of the user who is sending the request is updated. Alternatively, you can enter the `username` parameter.|

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
  "error": "Missing Content-Type"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-user-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-user-avatar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Avatar

<a id="opIdget-api-v1-users.getAvatar"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/users.getAvatar?userId=BsNr28znDkG8aeo7W' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/users.getAvatar`

View a user's avatar.

### Changelog
| Version      | Description |
| ------------ | ------------|
|0.50.0        | Added       |

<h3 id="get-user-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|true|The user ID. Alternatively, you can enter the `username` parameter.|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|

> Example responses

> 400 Response

```json
{
  "success": false,
  "error": "The required \"userId\" or \"username\" param was not provided [error-user-param-not-provided]",
  "errorType": "error-user-param-not-provided"
}
```

<h3 id="get-user-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-user-avatar-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Avatar

<a id="opIdpost-api-v1-users.resetAvatar"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.resetAvatar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "userId": "BsNr28znDkG8aeo7W"
  }'
```

`POST /api/v1/users.resetAvatar`

Reset a user's avatar to the default icon. By default, icons contain the user's initials.
Permissions required, if the setting `AllowUserAvatarChange` is enabled: 
  * `edit-other-user-avatar`: Permission to change other user's avatar
  * `manage-moderation-actions`: Permission to manage moderation actions, perform actions on reported users
  
  ### Changelog
  | Version      | Description |
  | ---------------- | ------------|
  |9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
  |0.55.0            | Added       |

> Body parameter

```json
{
  "userId": "BsNr28znDkG8aeo7W"
}
```

<h3 id="reset-avatar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» userId|body|string|true|The user ID. Alternatively, you can enter the `username` parameter.|

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
  "error": "The required \"userId\" or \"username\" param was not provided [error-user-param-not-provided]",
  "errorType": "error-user-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Reset avatar is not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="reset-avatar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="reset-avatar-responseschema">Response Schema</h3>

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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set User Status

<a id="opIdpost-api-v1-users.setStatus"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.setStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "message": "My status update",
    "status": "online",
    "expiresAt": "2026-06-22T18:00:00.000Z",
    "userId": "zXuq7SvPKYbzYmfpo",
    "username": "bob"
  }'
```

`POST /api/v1/users.setStatus`

* You can set the status for yourself or another user. The `AllowUserStatusMessageChange` setting must be enabled in the `Accounts` workspace settings.
* To change another user's status, you must have the `edit-other-user-info` permission.
* According to your workspace settings (under **Accounts**), you will only be able to set the invisible or `offline` status if the `Allow Invisible status option` setting is enabled.
  
  ### Changelog
  | Version      | Description |
  | ---------------- | ------------|
  |8.6.0            | Added `expiresAt` request parameter for timed status expiration. |
  |1.2.0            | Added       |

> Body parameter

```json
{
  "message": "My status update",
  "status": "online",
  "expiresAt": "2026-06-22T18:00:00.000Z",
  "userId": "zXuq7SvPKYbzYmfpo",
  "username": "bob"
}
```

<h3 id="set-user-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» message|body|string|false|The user's status message. At least one of the `message` or `status` parameters is required.|
|» status|body|string|false|The user's status like `online`, `away`, `busy`, or `offline`. At least one of the `message` or `status` parameters is required.|
|» expiresAt|body|string|false|Date as an ISO 8601 string. Sets an expiration time for the status. When this time passes, the presence engine restores the user's previous status. Must be a future date. Omit this parameter to keep the status until it is changed again.|
|» userId|body|string|false|The user ID for which you want to set the status. You don't need to add this if you are setting the status for yourself. Alternatively, you can use the `username` parameter and enter the username for which you want to set the status.|

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
  "error": "Match error: Failed Match.OneOf, Match.Maybe or Match.Optional validation"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="set-user-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-user-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Status

<a id="opIdget-api-v1-users.getStatus"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.getStatus \
  -H 'Accept: application/json'
```

`GET /api/v1/users.getStatus`

Gets a user's status in your workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.6.0            | Added `statusSource` and `statusExpiresAt` response fields. |
|1.2.0            | Added       |

<h3 id="get-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|The `userId` of the user. Alternatively, you can use the `username` property and value. If the value is not provided, the authenticated user is used. |

> Example responses

> 200 Response

```json
{
  "_id": "W7NHuX5ri2e3mu2Fc",
  "connectionStatus": "online",
  "status": "online",
  "statusSource": "manual",
  "statusExpiresAt": "2026-06-22T18:00:00.000Z",
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

<h3 id="get-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|The user ID.|
|connectionStatus|string|false|none|The connection status. Returned when requesting the authenticated user's own status.|
|status|string|false|none|none|
|statusSource|string|false|none|The claim that set the current status. One of `internal`, `manual`, or `external`. Omitted when the user has no recorded status source.|
|statusExpiresAt|string|false|none|Date as an ISO 8601 string indicating when the current status expires. Omitted when the status has no expiration.|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set User's Status Active

<a id="opIdpost-api-v1-users.setActiveStatus"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.setActiveStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "activeStatus": true,
    "userId": "5HmCfpoB7jp2uibTC",
    "confirmRelinquish": false
  }'
```

`POST /api/v1/users.setActiveStatus`

Activate or deactivate a user in the workspace.

Any one of the following permissions is required:
* `edit-other-user-active-status`: Change another user's active status.
* `manage-moderation-actions`: Manage moderation actions on reported users.

When a user is deactivated (`activeStatus=false`), Rocket.Chat revokes all of the user's login tokens and OAuth access tokens, refresh tokens, and authorization codes. The user can no longer call the REST API with previously issued OAuth credentials.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.5.0            | Added OAuth access token, refresh token, and authorization code revocation on deactivation. |
|3.7.0            | Added `confirmRelinquish` to the payload.       |
|0.75.0            | Added       |

> Body parameter

```json
{
  "activeStatus": true,
  "userId": "5HmCfpoB7jp2uibTC",
  "confirmRelinquish": false
}
```

<h3 id="set-users-status-active-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|When deactivating a user (`activeStatus=false`) and `confirmRelinquish=true`:<br><br>* If the user is the last owner of a room that has other active members, the member who joined earliest becomes the new owner.<br>* If the user is the only member of a private room, or no other active member can take ownership, that room is deleted, together with every discussion that belongs to it, regardless of who is a member of those discussions. Public channels are not deleted.<br><br>When `confirmRelinquish` is omitted or `false` and the user is the last owner of any room, or the only member of a private room, the request fails with `user-last-owner` and no change is made. `details.shouldBeRemoved` names the rooms that would be deleted. `details.shouldChangeOwner` names the rooms that would get a new owner. Child discussions that the user is not subscribed to are not listed; any room in `shouldBeRemoved` also takes its discussions with it.|
|» activeStatus|body|boolean|true|The value of the active status.|
|» userId|body|string|true|The user ID whose status value is to be changed.|
|» confirmRelinquish|body|boolean|false|Only used when `activeStatus` is `false`. Set to `true` to deactivate the user even if they are the last owner of a room, or the only member of a private room. If omitted or `false` and the user is the last owner of any room, the request fails with `user-last-owner`.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "jJNyu4BQFqdgEcqnR",
    "active": false
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'activeStatus'\n[error-invalid-params]",
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

<h3 id="set-users-status-active-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-users-status-active-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» active|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» shouldBeRemoved|[string]|false|none|none|
|» shouldChangeOwner|[string]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Deactivate Idle Users

<a id="opIdpost-api-v1-users.deactivateIdle"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.deactivateIdle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "daysIdle": 2,
    "role": "user"
  }'
```

`POST /api/v1/users.deactivateIdle`

Automatically deactivate idle users in your workspace based on the number of days and roles.

For every user that this endpoint deactivates, Rocket.Chat clears the user's login tokens and revokes their OAuth access tokens, refresh tokens, and authorization codes. Deactivated users can no longer call the REST API with previously issued OAuth credentials.

Permission required: `edit-other-user-active-status`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.5.0            | Added login and OAuth token revocation for users deactivated by this endpoint. |
|3.1.0            | Added       |

> Body parameter

```json
{
  "daysIdle": 2,
  "role": "user"
}
```

<h3 id="deactivate-idle-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» daysIdle|body|integer|true|The number of days that the user is idle.|
|» role|body|string|false|The user role.|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'daysIdle' [error-invalid-params]",
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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="deactivate-idle-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="deactivate-idle-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Specific User's Presence

<a id="opIdget-api-v1-users.getPresence"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.getPresence \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/users.getPresence`

Get a user's presence in the workspace (offline, busy, active, or away).

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.49.0            | Updated to support `userId` or `username`       |
|0.48.0            | Renamed to `users.getPresence`       |
|0.35.0            | Added       |

<h3 id="get-specific-users-presence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|userId|query|string|false|The user ID. Alternatively, you can enter the `username` parameter. If not provided, the user who sending the request is retrieved.|

> Example responses

> 200 Response

```json
{
  "presence": "offline",
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

<h3 id="get-specific-users-presence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-specific-users-presence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presence|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Users Presence

<a id="opIdget-api-v1-users.presence"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.presence \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/users.presence`

Get presence of multiple workspace users. You can filter by date and user IDs.

If the `Presence_broadcast_disabled` setting is true, the endpoint returns an empty array. You can find this setting under **Manage** > **Workspace** > **Settings** > **Troubleshoot**.

When the Premium **User status hiding** feature is enabled, users who have hidden their status from the caller are omitted from the response. This applies to full results and requests filtered by `from` or `ids`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added status visibility filtering. |
|8.6.0            | Added `statusSource` and `statusExpiresAt` to returned user objects. |
|8.5.0            | Restored comma-separated `ids` query parameter support.       |
|1.1.0            | Added       |

<h3 id="get-users-presence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|from|query|string|false|The last date when the status was changed. Format: ISO 8601 datetime. Timezone, milliseconds and seconds are optional. If you don't pass `from` parameter, you'll get a list of all users' presence and the result will have a `full` field with value `true` .|
|ids|query|string|false|The IDs of the users whose presence you want. Provide one ID as `?ids=userId1`, multiple comma-separated IDs as `?ids=userId1,userId2`, or repeat the parameter as `?ids=userId1&ids=userId2`.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "rocket.cat",
      "name": "Rocket.Cat",
      "username": "rocket.cat",
      "status": "online",
      "utcOffset": 0,
      "statusText": "In a call",
      "statusSource": "internal",
      "avatarETag": "5BB9B5ny5DkKdrwkq"
    },
    {
      "_id": "rocketchat.internal.admin.test",
      "name": "RocketChat Internal Admin Test",
      "username": "rocketchat.internal.admin.test",
      "status": "online",
      "utcOffset": -2,
      "statusText": "Focus time",
      "statusSource": "manual",
      "statusExpiresAt": "2026-06-22T18:00:00.000Z",
      "avatarETag": "iEbEm4bTT327NJjXt"
    }
  ],
  "full": true,
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

<h3 id="get-users-presence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-presence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» utcOffset|integer|false|none|none|
|» statusText|string|false|none|The user's status message.|
|» statusSource|string|false|none|The claim that set the user's current status. One of `internal`, `manual`, or `external` (priority order: `internal` > `manual` > `external`). Omitted when the user has no recorded status source.|
|» statusExpiresAt|string|false|none|Date as an ISO 8601 string indicating when the user's current status expires. Omitted when the status has no expiration.|
|» avatarETag|string|false|none|none|
|full|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete User

<a id="opIdpost-api-v1-users.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "BsNr28znDkG8aeo7W",
    "confirmRelinquish": true
  }'
```

`POST /api/v1/users.delete`

Permanently deletes an existing user from your workspace. Permission required: `delete-user`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.7.0            | Added `confirmRelinquish` to the payload.       |
|0.35.0            | Added       |

> Body parameter

```json
{
  "userId": "BsNr28znDkG8aeo7W",
  "confirmRelinquish": true
}
```

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» userId|body|string|true|The `userId` of the user. Alternatively, you can use the `username` property and value.|
|» confirmRelinquish|body|boolean|false|Deletes the user, even if they are the last owner of a room. By default, it is set to `false`.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "deletedRooms": []
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"userId\" or \"username\" param was not provided [error-user-param-not-provided]",
  "errorType": "error-user-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|deletedRooms|[object]|false|none|The rooms deleted as part of the user deletion process.|

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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Own Account

<a id="opIdpost-api-v1-users.deleteOwnAccount"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.deleteOwnAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "password": "8f0e2f76e22b43e2855189877e7dc1e1e7d98c226c95db247cd1d547928334a9",
    "confirmRelinquish": false
  }'
```

`POST /api/v1/users.deleteOwnAccount`

Deletes your own user account. Requires the `Allow Users to Delete Own Account` setting enabled. Access this setting from **Manage** > **Workspace** > **Settings** > **Accounts**.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.7.0            | Added `confirmRelinquish` to the payload.       |
|0.67.0            | Added       |

> Body parameter

```json
{
  "password": "8f0e2f76e22b43e2855189877e7dc1e1e7d98c226c95db247cd1d547928334a9",
  "confirmRelinquish": false
}
```

<h3 id="delete-own-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» password|body|string|true|The password of user (encrypted in SHA256).|
|» confirmRelinquish|body|boolean|false|Deletes own account even if user is the last owner of a room.|

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
  "error": "Body parameter \"password\" is required."
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-own-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-own-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Users Token

<a id="opIdpost-api-v1-users.createToken"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.createToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "BsNr28znDkG8aeo7W",
    "secret": "pass123"
  }'
```

`POST /api/v1/users.createToken`

As a workspace admin, you can create temporary authentication tokens for users. This is the same type of session authentication token a user gets via <a href="https://developer.rocket.chat/apidocs/login-with-username-and-password" target="_blank">login</a> and expires the same way.
* To use this endpoint, you must set a secret with the `CREATE_TOKENS_FOR_USERS_SECRET` <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">environment variable</a> in your deployment configuration. This secret will be used to authorize all requests made to this endpoint.
* For SaaS workspaces, <a href="https://desk.rocket.chat/portal/en/signin" target="_blank">contact</a> support to set this variable.
* Permission required: `user-generate-access-token`. This permission is required only when you generate a token for another user; it is not required when you generate a token for your own account.
* The maximum number of login tokens per user is 50. See this <a href='https://github.com/RocketChat/Rocket.Chat/pull/32216' target='_blank'>GitHub PR</a> for details.
  
### Changelog
  | Version      | Description |
  | ---------------- | ------------|
  |9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
  |8.7.0             | Enforced the `user-generate-access-token` permission when generating a token for another user.|
  |8.0.0             | Added `CREATE_TOKENS_FOR_USERS_SECRET` <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">environment variable</a> to define a shared secret that will be used to authorize this endpoint.|
  |2.1.0            | Added ENV VAR to be able to use this endpoint (process.env.CREATE_TOKENS_FOR_USERS).       |
  |0.56.0            | Added       |

> Body parameter

```json
{
  "userId": "BsNr28znDkG8aeo7W",
  "secret": "pass123"
}
```

<h3 id="create-users-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» userId|body|string|true|The ID of the user you want to generate a token for.|
|» secret|body|string|true|The secret defined in the `CREATE_TOKENS_FOR_USERS_SECRET` <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">environment variable</a>. Without the valid secret, you can't access this endpoint.|

> Example responses

> 200 Response

```json
{
  "data": {
    "userId": "BsNr28znDkG8aeo7W",
    "authToken": "2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The required \"userId\" or \"username\" param was not provided [error-user-param-not-provided]",
  "errorType": "error-user-param-not-provided"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Not authorized [error-not-authorized]",
  "errorType": "error-forbidden"
}
```

<h3 id="create-users-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-users-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» userId|string|false|none|none|
|» authToken|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get User's Preferences

<a id="opIdget-api-v1-users.getPreferences"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.getPreferences \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.getPreferences`

Gets all the preferences of the authenticated user in the workspace.

<h3 id="get-users-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

> Example responses

> 200 Response

```json
{
  "preferences": {
    "newRoomNotification": "door",
    "newMessageNotification": "chime",
    "muteFocusedConversations": true,
    "useEmojis": true,
    "convertAsciiEmoji": true,
    "saveMobileBandwidth": true,
    "collapseMediaByDefault": false,
    "autoImageLoad": true,
    "emailNotificationMode": "all",
    "roomsListExhibitionMode": "category",
    "unreadAlert": true,
    "notificationsSoundVolume": 100,
    "desktopNotifications": "default",
    "mobileNotifications": "default",
    "enableAutoAway": true,
    "highlights": [],
    "desktopNotificationDuration": 0,
    "viewMode": 0,
    "hideUsernames": false,
    "hideRoles": false,
    "hideAvatars": false,
    "hideFlexTab": false,
    "sendOnEnter": "normal",
    "roomCounterSidebar": false
  },
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

<h3 id="get-users-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-users-preferences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preferences|object|false|none|none|
|» newRoomNotification|string|false|none|none|
|» newMessageNotification|string|false|none|none|
|» muteFocusedConversations|boolean|false|none|none|
|» useEmojis|boolean|false|none|none|
|» convertAsciiEmoji|boolean|false|none|none|
|» saveMobileBandwidth|boolean|false|none|none|
|» collapseMediaByDefault|boolean|false|none|none|
|» autoImageLoad|boolean|false|none|none|
|» emailNotificationMode|string|false|none|none|
|» roomsListExhibitionMode|string|false|none|none|
|» unreadAlert|boolean|false|none|none|
|» notificationsSoundVolume|integer|false|none|none|
|» desktopNotifications|string|false|none|none|
|» mobileNotifications|string|false|none|none|
|» enableAutoAway|boolean|false|none|none|
|» highlights|[object]|false|none|none|
|» desktopNotificationDuration|integer|false|none|none|
|» viewMode|integer|false|none|none|
|» hideUsernames|boolean|false|none|none|
|» hideRoles|boolean|false|none|none|
|» hideAvatars|boolean|false|none|none|
|» hideFlexTab|boolean|false|none|none|
|» sendOnEnter|string|false|none|none|
|» roomCounterSidebar|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set User Preferences

<a id="opIdpost-api-v1-users.setPreferences"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.setPreferences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "userId": "rbAXPnMktTFbNpwtJ",
    "data": {
      "language": "en",
      "newRoomNotification": "door",
      "newMessageNotification": "chime",
      "muteFocusedConversations": true,
      "clockMode": 0,
      "useEmojis": true,
      "convertAsciiEmoji": true,
      "saveMobileBandwidth": true,
      "collapseMediaByDefault": true,
      "autoImageLoad": true,
      "emailNotificationMode": "mentions",
      "unreadAlert": true,
      "notificationsSoundVolume": 0,
      "desktopNotifications": "mentions",
      "pushNotifications": "mentions",
      "enableAutoAway": true,
      "highlights": [
        "[\"deploy\", \"docker\"]"
      ],
      "messageViewMode": 0,
      "hideUsernames": true,
      "hideRoles": true,
      "displayAvatars": true,
      "hideFlexTab": true,
      "sendOnEnter": "string",
      "idleTimeLimit": 300,
      "sidebarShowFavorites": true,
      "sidebarShowUnread": true,
      "statusVisibilityDenied": [
        "bob",
        "rocket.cat"
      ],
      "sidebarSortby": "string",
      "sidebarViewMode": "string",
      "sidebarDisplayAvatar": true,
      "sidebarGroupByType": true,
      "sidebarCategories": [
        {
          "_id": "Favorites",
          "name": "Favorites",
          "default": true
        },
        {
          "_id": "qT7bXk2mZ9wLpR4sD",
          "name": "Project Apollo",
          "showUnreads": true,
          "keepUnreadsOnTop": false
        },
        {
          "_id": "Channels",
          "name": "Channels",
          "default": true
        }
      ],
      "dontAskAgainList": [
        {}
      ],
      "notifyCalendarEvents": false,
      "themeAppearence": "auto"
    }
  }'
```

`POST /api/v1/users.setPreferences`

Set preferences for your account. If you want to edit another user's preferences, you need the permission `edit-other-user-info`.

Use `statusVisibilityDenied` to specify the usernames of people who cannot see your presence and status message. Send an empty array to clear the list. Status hiding takes effect only when the Premium **User status hiding** setting (`Accounts_StatusVisibility_Enabled`) is enabled. You can change only your own list; if `userId` identifies another user, this preference is ignored.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.9.0            | Added the `sidebarCategories` preference. |
|8.8.0            | Added the `statusVisibilityDenied` preference. |
|8.6.0            | Added `utcOffset` property.       |
|2.3.0            | Added `desktopNotificationRequireInteraction` property.       |

> Body parameter

```json
{
  "userId": "rbAXPnMktTFbNpwtJ",
  "data": {
    "language": "en",
    "newRoomNotification": "door",
    "newMessageNotification": "chime",
    "muteFocusedConversations": true,
    "clockMode": 0,
    "useEmojis": true,
    "convertAsciiEmoji": true,
    "saveMobileBandwidth": true,
    "collapseMediaByDefault": true,
    "autoImageLoad": true,
    "emailNotificationMode": "mentions",
    "unreadAlert": true,
    "notificationsSoundVolume": 0,
    "desktopNotifications": "mentions",
    "pushNotifications": "mentions",
    "enableAutoAway": true,
    "highlights": [
      "[\"deploy\", \"docker\"]"
    ],
    "messageViewMode": 0,
    "hideUsernames": true,
    "hideRoles": true,
    "displayAvatars": true,
    "hideFlexTab": true,
    "sendOnEnter": "string",
    "idleTimeLimit": 300,
    "sidebarShowFavorites": true,
    "sidebarShowUnread": true,
    "statusVisibilityDenied": [
      "bob",
      "rocket.cat"
    ],
    "sidebarSortby": "string",
    "sidebarViewMode": "string",
    "sidebarDisplayAvatar": true,
    "sidebarGroupByType": true,
    "sidebarCategories": [
      {
        "_id": "Favorites",
        "name": "Favorites",
        "default": true
      },
      {
        "_id": "qT7bXk2mZ9wLpR4sD",
        "name": "Project Apollo",
        "showUnreads": true,
        "keepUnreadsOnTop": false
      },
      {
        "_id": "Channels",
        "name": "Channels",
        "default": true
      }
    ],
    "dontAskAgainList": [
      {}
    ],
    "notifyCalendarEvents": false,
    "themeAppearence": "auto"
  }
}
```

<h3 id="set-user-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|
|body|body|object|false|none|
|» userId|body|string|false|The user ID whose preferences you want to change. If an ID is not provided, the preferences will be set for the user who is sending the request.|
|» data|body|object|true|The object with the following preference details.|
|» » language|body|string|false|The preferred language for the user.|
|» » newRoomNotification|body|string|false|Set the sound for new room notifications. The notification sounds are customizable, you can check the preferences in your workspace account for the list of options available.|
|» » newMessageNotification|body|string|false|New message notification sound. The notification sounds are customizable, you can check the preferences in your workspace account for the list of options available.|
|» » muteFocusedConversations|body|boolean|false|When set to true, open and active rooms will not create notification sounds.|
|» » clockMode|body|integer|false|The valid display formats for the clock. You can enter the values 0, 1, or 2.<br>* `0`: System default<br>* `1`: 12-hour clock<br>* `2`: 24-hour clock|
|» » useEmojis|body|boolean|false|A boolean value that indicates whether the user has enabled the option to use emojis.|
|» » convertAsciiEmoji|body|boolean|false|A boolean value that indicates whether the user has enabled the option to convert ASCII emojis.|
|» » saveMobileBandwidth|body|boolean|false|A boolean value that indicates whether the user has enabled the option to save mobile bandwidth.|
|» » collapseMediaByDefault|body|boolean|false|A boolean value that indicates whether the user has enabled the option to collapse media by default.|
|» » autoImageLoad|body|boolean|false|A boolean value indicates whether the user has enabled the option to load images automatically.|
|» » emailNotificationMode|body|string|false|The preferred mode for email notifications. The options are:<br>  * `all`: Get desktop notifications for all messages.<br>  * `mentions`: Get the notifications only for mentions.<br>  * `nothing`: Get no desktop notifications.|
|» » unreadAlert|body|boolean|false|A boolean value indicates whether the user has enabled the option.|
|» » notificationsSoundVolume|body|integer|false|The sound volume for notifications.|
|» » desktopNotifications|body|string|false|The type of desktop notifications.<br>* `all`: Get desktop notifications for all messages.<br>* `mentions`: Get the notifications only for mentions.<br>* `nothing`: Get no desktop notifications.|
|» » pushNotifications|body|string|false|The type of push notifications.<br>* `all`: Get push notifications for all messages.<br>* `mentions`: Get the notifications only for mentions.<br>* `nothing`: Get no push notifications.|
|» » enableAutoAway|body|boolean|false|A boolean value that indicates whether the user has enabled the option to update the status as away after a certain amount of idle time.|
|» » highlights|body|[string]|false|The message highlights section. You will be notified when someone mentions a word or phrase that you add here. Highlight words are not case-sensitive.|
|» » messageViewMode|body|integer|false|The preferred view mode for the messages i. The available options are:<br>  * `0` - Normal<br>  * `1` - Cozy<br>  * `2` - Compact|
|» » hideUsernames|body|boolean|false|A boolean value that indicates whether the user has enabled the option to hide usernames.|
|» » hideRoles|body|boolean|false|A boolean value that indicates whether the user has enabled the option to hide roles.|
|» » displayAvatars|body|boolean|false|A boolean value that indicates whether the user has enabled the option to display user avatars.|
|» » hideFlexTab|body|boolean|false|A boolean value that indicates whether the user has enabled the option to automatically close the right sidebar in rooms when you click outside them.|
|» » sendOnEnter|body|string|false|Set how you want the **Enter** key to behave when sending messages.<br><br>* `normal` - Send messages with the **Enter** key.<br>* `alternative` - Send messages with **Enter** + **Ctrl/Alt/Shift/Cmd**.<br>* `desktop` - Send messages with **Enter** only on the desktop.|
|» » idleTimeLimit|body|integer|false|The time limit that is to be considered as idle time. After this time, the user status changes to `away`.|
|» » sidebarShowFavorites|body|boolean|false|A boolean value that indicates whether the user has enabled the option to show favorites on the sidebar.|
|» » sidebarShowUnread|body|boolean|false|A boolean value that indicates whether the user has enabled the option to show unread messages in the sidebar.|
|» » statusVisibilityDenied|body|[string]|false|The usernames of users who cannot see your presence and status message. Send an empty array to clear the list.|
|» » sidebarSortby|body|string|false|To sort the messages in the sidebar alphabetically or by activity. The values can be:<br>  * `activity`<br>  * `alphabetical`|
|» » sidebarViewMode|body|string|false|The view mode of the sidebar. The values can be:<br>  * `extended`<br>  * `medium`<br>  * `condensed`|
|» » sidebarDisplayAvatar|body|boolean|false|A boolean value that indicates whether the user has enabled the option to display avatars in the sidebar.|
|» » sidebarGroupByType|body|boolean|false|A boolean value that indicates whether the user has enabled the option to show the grouped values in the sidebar.|
|» » sidebarCategories|body|[object]|false|The full, ordered list of sidebar categories for the user. The array replaces the stored list, so include every category you want to keep. Each entry is either a system group (such as `Favorites` or `Channels`) marked with `default: true`, or a custom category created by the user.<br><br>Custom category names are trimmed and must contain 1 to 30 characters, and `_id` values must be unique in the array. Otherwise, the request fails with `error-invalid-param`. Custom categories are available in Commercial, Government, and Defense plans.|
|» » » _id|body|string|true|The category ID. For system groups, this is the group key, for example `Favorites`, `Channels`, `Direct_Messages`, `Discussions`, or `Teams`.|
|» » » name|body|string|true|The category name.|
|» » » default|body|boolean|false|Whether the entry is a system group rather than a custom category.|
|» » » showUnreads|body|boolean|false|Whether to show unread rooms in the category.|
|» » » keepUnreadsOnTop|body|boolean|false|Whether to keep unread rooms at the top of the category.|
|» » dontAskAgainList|body|[object]|false|This field stores all the "warnings" a user opted not to be displayed again. An example where this works is when hiding a room.<br>"dontAskAgainList\":[{\"action\":\"hideRoom\",\"label\":\"Hide\"}]"|
|» » » action|body|string|false|none|
|» » » label|body|string|false|none|
|» » notifyCalendarEvents|body|boolean|false|If you are using Outlook Calendar in your workspace, you can enable or disable calendar event notifications using this parameter.|
|» » themeAppearence|body|string|false|Set your preferrred workspace theme. The options are:<br>* `light`<br>* `dark`<br>* `auto`<br>* `high-contrast`|
|» » masterVolume|body|number|false|Control the volume for all sounds coming from your workspace.|
|» » alsoSendThreadToChannel|body|string|false|When replying to a thread, select how your replies should be sent to the room:<br>* `never`: Thread replies are not sent to the channel.<br>* `always`: Thread replies are sent to the channel.<br>* `default`: Defaults to the workspace settings set by the admin.|
|» » desktopNotificationRequireInteraction|body|boolean|false|When set to true, notifications will remain in the notification panel until they are visited or closed.|
|» » showThreadsInMainChannel|body|boolean|false|When set to true, all replies under a thread will also be displayed directly in the main room. When disabled, they're displayed based on the sender's choice.|
|» » fontSize|body|string|false|Set the font size. The options are:<br>* `small`<br>* `medium`<br>* `large`|
|» » receiveLoginDetectionEmail|body|boolean|false|Set this option to true to get an email notification whenever a login is made to your account.|
|» » omnichannelTranscriptPDF|body|boolean|false|Set to true to always export the transcript as PDF at the end of Omnichannel conversations.|
|» » omnichannelTranscriptEmail|body|boolean|false|Set to true to always send the transcript to contacts at the end of conversations.|
|» » omnichannelHideConversationAfterClosing|body|boolean|false|Set to true to redirect agents to the home page after closing a conversation.|
|» » enableMobileRinging|body|boolean|false|If you are using the Rocket.Chat Voice feature, you can set this parameter to true for mobile call notifications.|
|» » utcOffset|body|number|false|The user's UTC offset in hours. Used to localize times such as notification schedules.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "rbAXPnMktTFbNpwtJ",
    "settings": {
      "preferences": {
        "statusVisibilityDenied": [
          "bob",
          "rocket.cat"
        ],
        "language": "en"
      }
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'data' [error-invalid-params]",
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

<h3 id="set-user-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="set-user-preferences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» settings|object|false|none|none|
|» » preferences|object|false|none|none|
|» » » enableAutoAway|boolean|false|none|none|
|» » » idleTimeLimit|integer|false|none|none|
|» » » desktopNotificationRequireInteraction|boolean|false|none|none|
|» » » desktopNotifications|string|false|none|none|
|» » » pushNotifications|string|false|none|none|
|» » » unreadAlert|boolean|false|none|none|
|» » » useEmojis|boolean|false|none|none|
|» » » convertAsciiEmoji|boolean|false|none|none|
|» » » autoImageLoad|boolean|false|none|none|
|» » » saveMobileBandwidth|boolean|false|none|none|
|» » » collapseMediaByDefault|boolean|false|none|none|
|» » » hideUsernames|boolean|false|none|none|
|» » » hideRoles|boolean|false|none|none|
|» » » hideFlexTab|boolean|false|none|none|
|» » » displayAvatars|boolean|false|none|none|
|» » » sidebarGroupByType|boolean|false|none|none|
|» » » sidebarCategories|[object]|false|none|The sidebar categories saved for the user, including system groups and custom categories, in display order.|
|» » » » _id|string|false|none|none|
|» » » » name|string|false|none|none|
|» » » » default|boolean|false|none|none|
|» » » » showUnreads|boolean|false|none|none|
|» » » » keepUnreadsOnTop|boolean|false|none|none|
|» » » sidebarViewMode|string|false|none|none|
|» » » sidebarDisplayAvatar|boolean|false|none|none|
|» » » sidebarShowUnread|boolean|false|none|none|
|» » » sidebarSortby|string|false|none|none|
|» » » statusVisibilityDenied|[string]|false|none|The usernames of users who cannot see the authenticated user's presence and status message. Returned only to the authenticated user when the feature is enabled and the list is not empty.|
|» » » showMessageInMainThread|boolean|false|none|none|
|» » » sidebarShowFavorites|boolean|false|none|none|
|» » » sendOnEnter|string|false|none|none|
|» » » messageViewMode|integer|false|none|none|
|» » » emailNotificationMode|string|false|none|none|
|» » » newRoomNotification|string|false|none|none|
|» » » newMessageNotification|string|false|none|none|
|» » » muteFocusedConversations|boolean|false|none|none|
|» » » notificationsSoundVolume|integer|false|none|none|
|» » » enableMessageParserEarlyAdoption|boolean|false|none|none|
|» » » mobileNotifications|string|false|none|none|
|» » » desktopNotificationDuration|integer|false|none|none|
|» » » dontAskAgainList|[object]|false|none|none|
|» » » highlights|[object]|false|none|none|
|» » » language|string|false|none|none|
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

## Forgot Password

<a id="opIdpost-api-v1-users.forgotPassword"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.forgotPassword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "email@rocket.cat"
  }'
```

`POST /api/v1/users.forgotPassword`

Send an email to reset your password. Ensure that you have completed the configuration of the email; otherwise, your users will not receive the mail normally. Access this from **Manage** > **Workspace** > **Settings** > **Email**.

To use this endpoint, the `PasswordReset` setting must be enabled in **Settings** > **Accounts** > **Registration** > **Password Reset**.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.64.0            | Added       |

> Body parameter

```json
{
  "email": "email@rocket.cat"
}
```

<h3 id="forgot-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|The email to send password reset link.|

> Example responses

> 200 Response

```json
{
  "status": "success"
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The 'email' param is required"
}
```

<h3 id="forgot-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="forgot-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Username Suggestion

<a id="opIdget-api-v1-users.getUsernameSuggestion"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.getUsernameSuggestion \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.getUsernameSuggestion`

Get a username suggestion for the authenticated user.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.65.0            | Added       |

<h3 id="get-username-suggestion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

> Example responses

> 200 Response

```json
{
  "result": "rocket.mic",
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

<h3 id="get-username-suggestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-username-suggestion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Avatar Suggestion

<a id="opIdget-api-v1-users.getAvatarSuggestion"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.getAvatarSuggestion \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.getAvatarSuggestion`

Use this endpoint to get avatar suggestions for the user from their connected OAuth services. The response is empty if no suggestions are found.

### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0            | Removed Gravatar suggestions.       |

<h3 id="get-avatar-suggestion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

> Example responses

> 200 Response

```json
{
  "suggestions": {
    "google": {
      "service": "google",
      "url": "https://lh3.googleusercontent.com/a/example",
      "blob": "data:image/png;base64,...",
      "contentType": "image/png"
    }
  },
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

<h3 id="get-avatar-suggestion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-avatar-suggestion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestions|object|false|none|none|
|» google|object|false|none|none|
|» » service|string|false|none|none|
|» » url|string|false|none|none|
|» » blob|string|false|none|none|
|» » contentType|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check Username Availability

<a id="opIdget-api-v1-users.checkUsernameAvailability"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/users.checkUsernameAvailability?username=johnDoe' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.checkUsernameAvailability`

Check if the username is available or used by another user

<h3 id="check-username-availability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|username|query|string|true|The username to check for availability|

> Example responses

> 200 Response

```json
{
  "result": true,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'username' [error-invalid-params]",
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

<h3 id="check-username-availability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-username-availability-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|
|details|object|false|none|none|
|» method|string|false|none|none|
|» field|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Generate Personal Access Token

<a id="opIdpost-api-v1-users.generatePersonalAccessToken"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.generatePersonalAccessToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "tokenName": "mypersonaltoken",
    "bypassTwoFactor": false
  }'
```

`POST /api/v1/users.generatePersonalAccessToken`

Permission required: `create-personal-access-tokens`. 

* This endpoint requires <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">two-factor authentication</a>.

* Note that the generated access tokens are irrecoverable, so storing them safely is essential. If a token is lost or forgotten, it can be regenerated or deleted.
* When making calls to the API that mandate authentication, include the generated token in the `X-Auth-Token` header and your user ID in the `X-User-Id` header to authenticate the requests.
Visit the <a href="https://docs.rocket.chat/docs/manage-personal-access-tokens" target="_blank"> Personal Access Token user guide</a> for more details.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|3.1.0            | Added `bypassTwoFactor` param       |
|0.69.0            | Added       |

> Body parameter

```json
{
  "tokenName": "mypersonaltoken",
  "bypassTwoFactor": false
}
```

<h3 id="generate-personal-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» tokenName|body|string|true|The name of the token.|
|» bypassTwoFactor|body|boolean|false|If 2FA requirement should be ignored when using this token.|

> Example responses

> 200 Response

```json
{
  "token": "2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk",
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

> 403 Response

```json
{
  "success": false,
  "error": "Not Authorized [not-authorized]",
  "errorType": "error-forbidden"
}
```

<h3 id="generate-personal-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="generate-personal-access-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Regenerate Personal Access Token

<a id="opIdpost-api-v1-users.regeneratePersonalAccessToken"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.regeneratePersonalAccessToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "tokenName": "mypersonaltoken"
  }'
```

`POST /api/v1/users.regeneratePersonalAccessToken`

Permission required: `create-personal-access-tokens`.
This endpoint requires 2FA.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|0.69.0            | Added       |

> Body parameter

```json
{
  "tokenName": "mypersonaltoken"
}
```

<h3 id="regenerate-personal-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» tokenName|body|string|true|The name of the token.|

> Example responses

> 200 Response

```json
{
  "token": "2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk",
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

> 403 Response

```json
{
  "success": false,
  "error": "Not Authorized [not-authorized]",
  "errorType": "error-forbidden"
}
```

<h3 id="regenerate-personal-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="regenerate-personal-access-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Personal Access Tokens

<a id="opIdget-api-v1-users.getPersonalAccessTokens"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.getPersonalAccessTokens \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/users.getPersonalAccessTokens`

Permission required: `create-personal-access-tokens`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|0.69.0            | Added       |

<h3 id="get-personal-access-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The authenticated user ID.|
|X-Auth-Token|header|string|true|The authenticated user token.|

> Example responses

> 200 Response

```json
{
  "tokens": [
    {
      "name": "myToken",
      "createdAt": "2018-08-01T17:17:48.068Z",
      "lastTokenPart": "R8Agh3"
    }
  ],
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-personal-access-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-personal-access-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokens|[object]|false|none|none|
|» name|string|false|none|none|
|» createdAt|string|false|none|none|
|» lastTokenPart|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Personal Access Token

<a id="opIdpost-api-v1-users.removePersonalAccessToken"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.removePersonalAccessToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "tokenName": "mytoken"
  }'
```

`POST /api/v1/users.removePersonalAccessToken`

This endpoint requires 2FA and the `create-personal-access-tokens` permission.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.69.0            | Added       |

> Body parameter

```json
{
  "tokenName": "mytoken"
}
```

<h3 id="remove-personal-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» tokenName|body|string|true|The name of the token.|

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

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-personal-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-personal-access-token-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Request Data Download

<a id="opIdget-api-v1-users.requestDataDownload"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.requestDataDownload \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.requestDataDownload`

Request download of your personal data using this endpoint. The <a href='https://docs.rocket.chat/v1/docs/user-data-download' target='_blank'>User Data Download</a> feature must be configured in the workspace by the admin. The exported file is available in the configured directory.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.2.0            | Added as `users.requestDataDownload`       |

<h3 id="request-data-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|fullExport|query|boolean|false|Whether you want a full export or not. By default, the value is false.|

> Example responses

> 200 Response

```json
{
  "requested": false,
  "exportOperation": {
    "_id": "uDSuaW7vGd9B7j8qD",
    "createdAt": "2019-06-07T23:02:13.359Z",
    "userId": "hjwGZafNqExtFNmN7",
    "roomList": [
      {
        "roomId": "GENERAL",
        "roomName": "general",
        "userId": null,
        "exportedCount": 8,
        "status": "completed",
        "targetFile": "general.html",
        "type": "c"
      }
    ],
    "status": "uploading",
    "exportPath": "/tmp/userData/hjwGZafNqExtFNmN7/partial",
    "assetsPath": "/tmp/userData/hjwGZafNqExtFNmN7/partial/assets",
    "fileList": [],
    "generatedFile": "/tmp/zipFiles/hjwGZafNqExtFNmN7.zip",
    "fullExport": false,
    "_updatedAt": "2019-06-07T23:15:00.326Z"
  },
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

<h3 id="request-data-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="request-data-download-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requested|boolean|false|none|none|
|exportOperation|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» userId|string|false|none|none|
|» roomList|[object]|false|none|none|
|» » roomId|string|false|none|none|
|» » roomName|string|false|none|none|
|» » userId|string \| null|false|none|none|
|» » exportedCount|integer|false|none|none|
|» » status|string|false|none|none|
|» » targetFile|string|false|none|none|
|» » type|string|false|none|none|
|» status|string|false|none|none|
|» exportPath|string|false|none|none|
|» assetsPath|string|false|none|none|
|» fileList|[object]|false|none|none|
|» generatedFile|string|false|none|none|
|» fullExport|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Logout Other Clients

<a id="opIdpost-api-v1-users.logoutOtherClients"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.logoutOtherClients \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/users.logoutOtherClients`

Logs out of user sessions in other clients while keeping the current session active. The response the current token and its expiration date. Requires the `LoginExpiration` settings enabled in **Accounts** > **Login Expiration in Days** which defines how long a login token remains valid before expiration.


<h3 id="logout-other-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

> Example responses

> 200 Response

```json
{
  "token": "SnS70r0VkngGFrSbxVK-pdwFMEzhefcjQgdnXaPeAaq",
  "tokenExpires": "2021-12-27T14:33:09.851Z",
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

<h3 id="logout-other-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="logout-other-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|tokenExpires|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Autocomplete User

<a id="opIdget-api-v1-users.autocomplete"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/users.autocomplete?exceptions=%5B%22john.doe%22%5D&conditions=%7B%22status%22%3A%22offline%22%7D&term=user&%24or=%5B%7B%22type%22%3A%22user%22%7D%2C%7B%22roles%22%3A%5B%22bot%22%5D%7D%5D' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.autocomplete`

List the users whose names match a given pattern.

<h3 id="autocomplete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|selector|query|object|true|Filter the response with the parameters.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "6esQ6cpqSQYvoLTvC",
      "username": "Aaron.altamirano",
      "status": "offline",
      "name": "Aaron Altamirano ",
      "nickname": "aaron.altamirano@rocket.chat"
    },
    {
      "_id": "AySWYsyzToxy3239z",
      "username": "Balazs.Nemethi",
      "status": "offline",
      "name": "Balázs Némethi"
    },
    {
      "_id": "gxcJTYapi5mPxuAme",
      "username": "Bruno.Solis",
      "status": "offline",
      "name": "Bruno Solis",
      "avatarETag": "ZAHMxLQ6bW426Knwm"
    },
    {
      "_id": "kvqbntLso8y2dEx7C",
      "username": "Ivan.Belousov",
      "status": "offline",
      "name": "Ivan"
    },
    {
      "_id": "AkFjhgJFHAhNK3e6o",
      "status": "offline",
      "name": "Karina Monarkh",
      "username": "Karina"
    },
    {
      "_id": "M3ajjGeyg8SfKXopd",
      "username": "Rucks_guest2",
      "status": "offline",
      "name": "Rucks_guest2",
      "nickname": "anonymous3"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'selector' [error-invalid-params]",
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

<h3 id="autocomplete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» name|string|false|none|none|
|» nickname|string|false|none|none|
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

## Remove Other Tokens

<a id="opIdpost-api-v1-users.removeOtherTokens"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.removeOtherTokens \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/users.removeOtherTokens`

Remove user's login tokens. This endpoint is primarily used when a user changes their password and they need to log in to the workspace again on other devices.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="remove-other-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|

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

<h3 id="remove-other-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-other-tokens-responseschema">Response Schema</h3>

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

## Reset Users E2E Key

<a id="opIdpost-api-v1-users.resetE2EKey"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.resetE2EKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "GonjPyg3gB3Z9ur9s"
  }'
```

`POST /api/v1/users.resetE2EKey`

<a href="https://docs.rocket.chat/docs/manage-your-account-settings#endtoend-encryption" target="_blank">Reset the E2E key</a> for your account or another user in the workspace.
* To reset other users' E2EE key, you need the `edit-other-user-e2ee` permission.
* This endpoint requires 2FA, if 2FA is enabled and configured on your workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|3.6.0            | Added       |

> Body parameter

```json
{
  "userId": "GonjPyg3gB3Z9ur9s"
}
```

<h3 id="reset-users-e2e-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» userId|body|string|false|The `userId` of the user whose e2e key you want to reset. You can also use the `username` parameter. If you don't enter a value, the sender's E2E value is reset.|

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

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="reset-users-e2e-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="reset-users-e2e-key-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Users TOTP

<a id="opIdpost-api-v1-users.resetTOTP"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.resetTOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "GonjPyg3gB3Z9ur9s"
  }'
```

`POST /api/v1/users.resetTOTP`

Reset 2FA via TOTP for a user in the workspace. Make sure that the `Enable Two Factor Authentication` setting is enabled under **Manage** > **Workspace** > **Settings** > **Accounts** > **Two Factor Authentication**.
* Permission required: `edit-other-user-totp`.
* It requires two-factor authentication, if 2FA is enabled and configured in your workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |
|3.6.0            | Added       |

> Body parameter

```json
{
  "userId": "GonjPyg3gB3Z9ur9s"
}
```

<h3 id="reset-users-totp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|x-2fa-code|header|string|false|Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.|
|x-2fa-method|header|string|false|Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.|
|body|body|object|false|none|
|» userId|body|string|false|The `userId` of the user whose TOTP you want to reset. You can also use the username. If you do not enter a value, the sender's TOTP is reset.|

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

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "Not allowed [error-not-allowed]",
  "errorType": "error-forbidden"
}
```

<h3 id="reset-users-totp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="reset-users-totp-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List User's Teams

<a id="opIdget-api-v1-users.listTeams"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/users.listTeams?userId=rbAXPnMktTFbNpwtJ' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.listTeams`

Get the list of teams that a specific user is a member of. The teams returned by the endpoint depend on your permissions. To view all teams, you need the `view-all-teams` permission.

<h3 id="list-users-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|userId|query|string|true|The `userId` of the user.|

> Example responses

> 200 Response

```json
{
  "teams": [
    {
      "_id": "612b8ae982d286c3",
      "name": "documentation-team",
      "type": 0,
      "createdAt": "2021-08-29T13:26:01.750Z",
      "createdBy": {
        "_id": "JxemcN9PDCdfzJe",
        "username": "renato.b"
      },
      "_updatedAt": "2021-08-29T13:26:01.762Z",
      "roomId": "GwktYAajqw4RiWiBK",
      "isOwner": true
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'userId' [error-invalid-params]",
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

<h3 id="list-users-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-users-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teams|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|integer|false|none|none|
|» createdAt|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» roomId|string|false|none|none|
|» isOwner|boolean|false|none|none|
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

## Report User

<a id="opIdpost-api-v1-moderation.reportUser"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/moderation.reportUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "ByehQjC44FwMeiLbX",
    "description": "test"
  }'
```

`POST /api/v1/moderation.reportUser`

Report a user for offensive messages in the workspace.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0            | Added       |

> Body parameter

```json
{
  "userId": "ByehQjC44FwMeiLbX",
  "description": "test"
}
```

<h3 id="report-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» userId|body|string|true|The ID of the user to be reported.|
|» description|body|string|true|The reason for reporting the user.|

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
  "error": "must have required property 'userId' [error-invalid-params]",
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

<h3 id="report-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="report-user-responseschema">Response Schema</h3>

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

## Logout User

<a id="opIdpost-api-v1-users.logout"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.logout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "userId": "BsNr28znDkG8aeo7W"
  }'
```

`POST /api/v1/users.logout`

Log out of your account. You can also log out of another user's session. You will need the `logout-other-user` permission.

> Body parameter

```json
{
  "userId": "BsNr28znDkG8aeo7W"
}
```

<h3 id="logout-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» userId|body|string|false|Enter the user ID to be logged out.|

> Example responses

> 200 Response

```json
{
  "message": "User JxemcN9PDCdfzJeZr has been logged out!",
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

<h3 id="logout-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="logout-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Avatars

<a id="opIdget-api-v1-avatar-subject"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/avatar/alice%2C%20%40general
```

`GET /api/v1/avatar/{subject}`

Note:
  * This is a RESTful endpoint that sits separately from the REST API in the server codebase and behaves slightly differently.
  * The `rc_uid` and `rc_token` can alternately be provided as cookies (already present in the web interface), but not as auth headers.
  * When requesting the avatar of a user, if they have a custom avatar set, this will override the user's choices of format or size.
  * If no uploaded avatar exists for a user, a default one will be generated for them based on the initial of their username in a randomly colored square.
  * If `UI_Use_Name_Avatar` is set and the user has a real name set, the generated avatar will be based on their actual name instead of the username.
  * If no format is requested, or the format requested isn't supported, the format returned will be SVG.

<h3 id="get-avatars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|Format of the image requested.  The values can be one of: jpg, jpeg, png.|
|size|query|integer|false|Width and height of the image. Default: 200|
|rc_uid|query|string|false|User ID for authenticating is only required if `Accounts_AvatarBlockUnauthenticatedAccess` is enabled.|
|rc_token|query|string|false|User auth token for authenticating is only required if `Accounts_AvatarBlockUnauthenticatedAccess` is enabled.|
|subject|path|string|true|Name of the user or channel.  Channels are always preceded by an `@` symbol. Rooms that are DMs are always represented by the other participant's user avatar.|

<h3 id="get-avatars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Send Welcome Email to User

<a id="opIdget-api-v1-users.sendWelcomeEmail"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.sendWelcomeEmail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "email": "test@email.com"
  }'
```

`POST /api/v1/users.sendWelcomeEmail`

Ensure that you have configured the <a href='https://docs.rocket.chat/docs/email' target='_blank'>email settings</a> in your workspace to send emails. 

Permission required: `send-mail`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.8.0         | Added       |

> Body parameter

```json
{
  "email": "test@email.com"
}
```

<h3 id="send-welcome-email-to-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» email|body|string|true|The user's email address to which you want to send the welcome email.|

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
  "error": "SMTP is not configured [error-email-send-failed]",
  "errorType": "error-email-send-failed",
  "details": {
    "method": "sendWelcomeEmail"
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

<h3 id="send-welcome-email-to-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-welcome-email-to-user-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Send Invitation Email

<a id="opIdpost-api-v1-sendInvitationEmail"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/sendInvitationEmail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "emails": [
      "example@example.com"
    ]
  }'
```

`POST /api/v1/sendInvitationEmail`

Send workspace invitation emails using this endpoint.

> Body parameter

```json
{
  "emails": [
    "example@example.com"
  ]
}
```

<h3 id="send-invitation-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|false|none|
|» emails|body|[string]|true|Enter the list of emails to which you want to send the invitation.|

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
  "error": "must have required property 'emails' [error-invalid-params]",
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

<h3 id="send-invitation-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-invitation-email-responseschema">Response Schema</h3>

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

## Send Email Verification

<a id="opIdpost-api-v1-users.sendConfirmationEmail"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.sendConfirmationEmail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "example@example.com"
  }'
```

`POST /api/v1/users.sendConfirmationEmail`

Send an email to verify a user's email address. The user receives the email and they must click the confirmation button to confirm their email address. Rate limit applies: One request can be sent every 60000ms. This endpoint does not require authentication. An unverified user can call it from the login screen to resend their own verification email.

### Changelog
 | Version    | Description                            |
 | ---------- | -------------------------------------- |
 | 8.6.0 | Authentication is no longer required.  |

> Body parameter

```json
{
  "email": "example@example.com"
}
```

<h3 id="send-email-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» email|body|string|true|Enter the email address that needs to be verified.|

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
  "error": "must have required property 'email' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="send-email-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-email-verification-responseschema">Response Schema</h3>

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

## Verify User Email

<a id="opIdpost-api-v1-users.verifyEmail"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.verifyEmail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "hf5Wf4Kj9R3mR7cQ2xkPd"
  }'
```

`POST /api/v1/users.verifyEmail`

Verifies a user's email address using the token embedded in the verification sent to their email.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Removed the `anonymous` role swap on verification.       |
|8.7.0            | Added       |

> Body parameter

```json
{
  "token": "hf5Wf4Kj9R3mR7cQ2xkPd"
}
```

<h3 id="verify-user-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|The email verification token the user received by email.|

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
  "error": "must have required property 'token' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="verify-user-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="verify-user-email-responseschema">Response Schema</h3>

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

## List Users by Status

<a id="opIdget-api-v1-users.listByStatus"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/users.listByStatus \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/users.listByStatus`

Returns users filtered by activation status, whether they have logged in, user type, role, search term, or inactive reason.

When the Premium **User status hiding** feature is enabled, users who have hidden their status from the caller remain in the response but appear as `offline`, and their detailed status fields are omitted.

**Permissions required**:
- `view-d-room`: View direct messages.
- `view-outside-room`: View users outside the caller's rooms when `Apply_permission_view-outside-room` is enabled under **Settings** > **General** > **REST API**.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.8.0            | Added status visibility filtering. |
|6.8.0            | Added       |

<h3 id="list-users-by-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|status|query|string|false|Filter users based on their activation status. It can either  be `active` or `deactivated`|
|hasLoggedIn|query|boolean|false|Filter the users who have logged into their accounts for the first time.|
|type|query|string|false|Filter the type of users to be returned. For example, 'bot', 'user', 'app', etc.|
|roles[]|query|string|false|Filter the users returned based on a list of roles.|
|searchTerm|query|string|false|Filter the list of users returned based on a search term|
|inactiveReason[]|query|string|false|Filter the users based on the reason for inactive status. The options are: `idle_too_long`, `deactivated`, and `pending_approval`.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "W7MRNgkYLXKKAGNvW",
      "username": "agent1",
      "emails": [
        {
          "address": "agent1@agent.com",
          "verified": false
        }
      ],
      "type": "user",
      "roles": [
        "user",
        "livechat-agent"
      ],
      "status": "offline",
      "active": true,
      "name": "Agent 1",
      "lastLogin": "2024-04-24T17:47:50.485Z"
    },
    {
      "_id": "Tf44Q5AaYDehtJLzA",
      "username": "agent2",
      "emails": [
        {
          "address": "agent2@agent.com",
          "verified": false
        }
      ],
      "type": "user",
      "roles": [
        "user",
        "livechat-agent"
      ],
      "status": "offline",
      "active": true,
      "name": "Agent 2",
      "lastLogin": "2024-04-29T16:38:56.809Z"
    },
    {
      "_id": "JwATAtGzrzHYHCXFy",
      "username": "agent3",
      "emails": [
        {
          "address": "agent3@agent.com",
          "verified": false
        }
      ],
      "type": "user",
      "roles": [
        "user",
        "livechat-agent"
      ],
      "status": "online",
      "active": true,
      "name": "Agent3",
      "lastLogin": "2024-04-30T16:59:21.879Z"
    },
    {
      "_id": "u6C62WdHKNk5X8Rzr",
      "username": "guy",
      "emails": [
        {
          "address": "guy@guy.com",
          "verified": false
        }
      ],
      "type": "user",
      "roles": [
        "user"
      ],
      "status": "offline",
      "active": true,
      "name": "guy"
    },
    {
      "_id": "rocket.cat",
      "name": "Rocket.Cat",
      "username": "rocket.cat",
      "status": "online",
      "active": true,
      "type": "bot",
      "roles": [
        "bot"
      ],
      "avatarETag": "MEhPLkenJqs3jTJP5"
    }
  ],
  "count": 5,
  "offset": 0,
  "total": 5,
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

<h3 id="list-users-by-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-users-by-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» type|string|false|none|none|
|» roles|[string]|false|none|none|
|» status|string|false|none|none|
|» active|boolean|false|none|none|
|» name|string|false|none|none|
|» lastLogin|string|false|none|none|
|» avatarETag|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="user-management-saml">SAML</h1>

## Parse SAML IdP Metadata

<a id="opIdpost-api-v1-saml.parseMetadata"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/saml.parseMetadata \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "url": "https://idp.example.com/metadata"
  }'
```

`POST /api/v1/saml.parseMetadata`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Fetches and parses a SAML identity provider (IdP) metadata document from a URL. It returns the IdP certificate, sign-in URL, sign-out URL, and identifier format when those values are available in the metadata.

The **Import IdP metadata** button at the top of **Manage** → **Workspace** → **Settings** → **SAML** uses this endpoint to prefill the corresponding SAML settings. The imported values can be reviewed and edited before they are saved. This endpoint does not save or change any workspace settings.

The metadata request is subject to SSRF protection and the workspace's SSRF allowlist. It has a 20-second timeout and a 1 MB response-size limit.

**Permission required**:
- `test-admin-options`

From Rocket.Chat 9.0.0, SAML is available on Starter workspaces and on all premium plans (Commercial, Government, and Defense). It is not available on Community workspaces, where this endpoint returns `error-action-not-allowed`. See <a href="https://docs.rocket.chat/docs/our-plans" target="_blank">Our Plans</a> for details.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0            | Added premium plan availability details. The `403` response returns `errorType: error-forbidden`.       |
|8.8.0            | Added       |

> Body parameter

```json
{
  "url": "https://idp.example.com/metadata"
}
```

<h3 id="parse-saml-idp-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The authenticated user token.|
|X-User-Id|header|string|true|The authenticated user ID.|
|body|body|object|true|none|
|» url|body|string|true|The URL of the SAML IdP metadata document.|

> Example responses

> 200 Response

```json
{
  "entryPoint": "https://idp.example.com/sso/saml",
  "idpSLORedirectURL": "https://idp.example.com/slo/saml",
  "cert": "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIEXAMPLEONLY\n-----END CERTIFICATE-----",
  "identifierFormat": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent",
  "warnings": [],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "SAML_Metadata_url_blocked"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="parse-saml-idp-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The metadata was parsed successfully.|Inline|
|400|Bad Request|The request is invalid, the metadata cannot be fetched or parsed, or the URL is blocked.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="parse-saml-idp-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryPoint|string|false|none|The IdP URL where Rocket.Chat sends SAML sign-in requests.|
|idpSLORedirectURL|string|false|none|The IdP URL where Rocket.Chat sends SAML sign-out requests.|
|cert|string|false|none|The IdP signing certificate in PEM format.|
|identifierFormat|string|false|none|The first SAML NameID format found in the metadata. The SAML settings page applies this value when the Enterprise-only Identifier Format setting is available.|
|warnings|[string]|true|none|Warnings about missing or multiple usable values in the metadata.|
|success|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|success|true|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|error|string|true|none|none|
|errorType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|success|false|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
