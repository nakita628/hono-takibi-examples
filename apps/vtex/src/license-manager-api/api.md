<h1 id="license-manager-api">License Manager API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Welcome!

The License Manager API allows you to create users, modify their names and emails, as well as add and remove roles from users.

### ATTRIBUTES

|Attribute name | Description |
|:------------|--------------|
|accountName | Account name in VTEX License Manager |
|environment | Environment on which you want to run the query e.g. vtexcommercestable |
|userId      | Unique user identification string |
|roleId      | Integer that represents a role, can be looked up on the License Manager UI |

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="license-manager-api-user">User</h1>

## Get List of Users

<a id="opIdGetListUsers"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/site/pvt/logins/list/paged \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/license-manager/site/pvt/logins/list/paged`

Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

<h3 id="get-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The media type of the body of the request. Default value for license manager protocol is application/json|
|numItems|query|integer|false|Number of items in the returned page|
|pageNumber|query|integer|false|Which page from the whole list will be returned|
|sort|query|string|false|Chooses the field that the list will be sorted by|
|sortType|query|string|false|Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountNames": [],
      "email": "mynewuser@mydomain.com",
      "id": "a404870467d24533a085a6b3c6a5a320",
      "isAdmin": false,
      "isBlocked": false,
      "isReliable": false,
      "name": "testuser",
      "roles": []
    }
  ],
  "paging": {
    "page": 1,
    "pages": 1,
    "perPage": 1,
    "total": 1
  }
}
```

<h3 id="get-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListUsersResponse](#schemalistusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create User

<a id="opIdCreateUser"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "email": "mynewuser@mydomain.com",
    "name": "My New User Name"
  }'
```

`POST /api/license-manager/users`

Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.

> Body parameter

```json
{
  "email": "mynewuser@mydomain.com",
  "name": "My New User Name"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserRequest](#schemacreateuserrequest)|true|none|
|» email|body|string|true|Email of the user|
|» name|body|string|true|Name of the user|

> Example responses

> 200 Response

```json
{
  "email": "mynewuser@mydomain.com",
  "id": "a404870467d24533a085a6b3c6a5a320",
  "name": "testuser"
}
```

> 400 Response

```json
{
  "Message": "Invalid email"
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="create-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email of user|
|id|string|false|none|ID of user|
|name|string|false|none|Name of user|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get User

<a id="opIdGetUser"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/users/string \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/license-manager/users/{userId}`

Allows you to get a user from the database, using the `userId` as the identifier.

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The media type of the body of the request. Default value for license manager protocol is application/json|
|userId|path|string|true|ID from queried user.|

> Example responses

> 200 Response

```json
{
  "email": "mynewuser@mydomain.com",
  "id": "a404870467d24533a085a6b3c6a5a320",
  "name": "testuser"
}
```

> 400 Response

```json
{
  "Message": "Invalid UserId"
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|Inline|
|405|Method Not Allowed|Method Not Allowed - A null `userId` sends the request to a path that is not allowed.|None|

<h3 id="get-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email of user|
|id|string|false|none|ID of user|
|name|string|false|none|Name of user|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="license-manager-api-app-keys">App Keys</h1>

## Get appKeys from account

<a id="opIdGetappkeysfromaccount"></a>

> Code samples

```bash
curl https://example.com/api/vlm/appkeys \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/vlm/appkeys`

Gets all application keys from an account.

<h3 id="get-appkeys-from-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The media type of the body of the request. Default value for license manager protocol is application/json|

> Example responses

> 200 Response

```json
[
  {
    "appKey": "vtexappkey-myaccount-ORYNWX",
    "createdIn": "2018-07-04T14:09:08.2718405Z",
    "id": "a2555e95-9db8-48be-94f8-2a28577c0b4a",
    "isActive": true,
    "label": "my new appkey"
  },
  {
    "appKey": "vtexappkey-myaccount-ORKPDC",
    "createdIn": "2018-07-04T14:09:08.2718405Z",
    "id": "a2555e95-9db8-48be-94f8-2a28577c0b4a",
    "isActive": true,
    "label": "my other appkey"
  }
]
```

<h3 id="get-appkeys-from-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-appkeys-from-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Getappkeysfromaccount](#schemagetappkeysfromaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create new appkey

<a id="opIdCreatenewappkey"></a>

> Code samples

```bash
curl https://example.com/api/vlm/appkeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "label": "my new appkey"
  }'
```

`POST /api/vlm/appkeys`

Creates a new pair of `appKey` and `appToken`.

> Body parameter

```json
{
  "label": "my new appkey"
}
```

<h3 id="create-new-appkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatenewappkeyRequest](#schemacreatenewappkeyrequest)|true|none|
|» label|body|string|true|Label for application key|

> Example responses

> 200 Response

```json
{
  "appKey": "vtexappkey-myaccount-ORYNWX",
  "appToken": "WNVUJKYFKJFLTPXHQGAZDHPBHSDQVJJWSFZUBOGCKPEXAIFHTPANKJTOXUKRIIJAAJSOPCFBAXOODRABMUXFJVLJLKWGEOUCFDXRPRRQKYNNUFLGTIEOKERFXJCFFYXL",
  "createdIn": "2018-07-04T14:09:08.2718405Z",
  "id": "a2555e95-9db8-48be-94f8-2a28577c0b4a",
  "isActive": true,
  "label": "my new appkey"
}
```

<h3 id="create-new-appkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatenewappkeyResponse](#schemacreatenewappkeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update appkey

<a id="opIdUpdateappkey"></a>

> Code samples

```bash
curl https://example.com/api/vlm/appkeys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "isActive": false
  }'
```

`PUT /api/vlm/appkeys/{id}`

Activates or deactivates an `appKey` by its ID.

> Body parameter

```json
{
  "isActive": false
}
```

<h3 id="update-appkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID from the appKey which will be updated|
|body|body|[UpdateappkeyRequest](#schemaupdateappkeyrequest)|true|Request body for updating AppKeys|
|» isActive|body|boolean|true|If the application key should be active or inactive|

> Example responses

> 400 Response

```json
{
  "Details": null,
  "HttpStatusCode": 400,
  "Message": "Token not exists for this account",
  "VLMErrorCode": 17
}
```

<h3 id="update-appkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad Request|[VLMError](#schemavlmerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="license-manager-api-roles">Roles</h1>

## Get List of Roles

<a id="opIdGetListRoles"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/site/pvt/roles/list/paged \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/license-manager/site/pvt/roles/list/paged`

Returns a list of available roles. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.

<h3 id="get-list-of-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The media type of the body of the request. Default value for license manager protocol is application/json|
|numItems|query|integer|false|Number of items in the returned page|
|pageNumber|query|integer|false|Which page from the whole list will be returned|
|sort|query|string|false|Chooses the field that the list will be sorted by|
|sortType|query|string|false|Defines the sorting order. ASC is used for ascendant order. DSC is used for descendant order|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": 957,
      "isAdmin": false,
      "logins": null,
      "name": "Call center operator",
      "products": [
        {
          "categoryId": null,
          "categoryName": null,
          "consoleUrlMask": null,
          "description": null,
          "id": null,
          "name": "Catalog",
          "productResources": null,
          "url": null,
          "urlConfiguration": null,
          "webApiUrlMask": null
        },
        {
          "categoryId": null,
          "categoryName": null,
          "consoleUrlMask": null,
          "description": null,
          "id": null,
          "name": "OMS",
          "productResources": null,
          "url": null,
          "urlConfiguration": null,
          "webApiUrlMask": null
        }
      ],
      "resources": null,
      "roleType": 0
    }
  ],
  "paging": {
    "page": 1,
    "pages": 1,
    "perPage": 1,
    "total": 1
  }
}
```

<h3 id="get-list-of-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRolesResponse](#schemalistrolesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Get Roles by User/appKey

<a id="opIdGetRolesbyUser"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/users/string/roles \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/license-manager/users/{userId}/roles`

Gets roles of a particular user or application key.

<h3 id="get-roles-by-userappkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The media type of the body of the request. Default value for license manager protocol is application/json|
|userId|path|string|true|ID corresponding to the user|

> Example responses

> 200 Response

```json
[
  {
    "id": 957,
    "name": "Call center operator"
  },
  {
    "id": 1,
    "name": "Owner (Admin Super)"
  }
]
```

<h3 id="get-roles-by-userappkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-roles-by-userappkey-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer(int32)|false|none|ID of role|
|» name|string|false|none|Name of role|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Put Roles in User/appKey

<a id="opIdPutRolesinUser"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/users/string/roles \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '[
    9000,
    9111,
    9333,
    9444
  ]'
```

`PUT /api/license-manager/users/{userId}/roles`

Allows you to add roles to a particular user or application key by specifying the list of roles' IDs on the request's body.

> Body parameter

```json
[
  9000,
  9111,
  9333,
  9444
]
```

<h3 id="put-roles-in-userappkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID corresponding to the user|
|body|body|[integer(int32)]|true|List of roles' IDs to add to the user or application key.|

> Example responses

> 400 Response

```json
{
  "Message": "Roles list contains roles that do not exist in this account"
}
```

> 500 Response

```json
{
  "Message": "Unexpected error"
}
```

<h3 id="put-roles-in-userappkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - A no-content response, but the roles were added successfully.|None|
|400|Bad Request|Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.|Inline|
|500|Internal Server Error|Unexpected error - One possible reason is that the userId is not present on the database.|Inline|

<h3 id="put-roles-in-userappkey-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|Error message|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Remove Role from User/appKey

<a id="opIdRemoveRolefromUser"></a>

> Code samples

```bash
curl https://example.com/api/license-manager/users/string/roles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`DELETE /api/license-manager/users/{userId}/roles/{roleId}`

Allows you to remove a role from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.

> Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.

<h3 id="remove-role-from-userappkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|The media type of the body of the request. Default value for license manager protocol is application/json|
|userId|path|string|true|ID corresponding to the user|
|roleId|path|string|true|ID of the role which will be removed from the user|

> Example responses

> 400 Response

```json
{
  "Message": "Invalid UserId"
}
```

<h3 id="remove-role-from-userappkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success - A no-content response, but the role deletion was performed successfully.|None|
|400|Bad Request|Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information.|Inline|
|405|Method Not Allowed|Method Not Allowed|None|

<h3 id="remove-role-from-userappkey-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="license-manager-api-store">Store</h1>

## Get Stores

<a id="opIdGetByAccount"></a>

> Code samples

```bash
curl https://example.com/api/vlm/account/stores \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/vlm/account/stores`

Gets the stores and respective hosts of the account

> Example responses

> 200 Response

```json
[
  {
    "hosts": [
      "loja.ambientecrm.com.br",
      "www.ambientecrm.com.br"
    ],
    "id": 1213,
    "name": "ambientecrm"
  },
  {
    "hosts": [
      "loja.blackbox.com.br",
      "www.blackbox.com.br"
    ],
    "id": 213,
    "name": "ambienteqa"
  }
]
```

<h3 id="get-stores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-stores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StoreItems](#schemastoreitems)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="license-manager-api-account">Account</h1>

## Get information about account

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl https://example.com/api/vlm/account \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /api/vlm/account`

Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.

This endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).

> Example responses

> 200 Response

```json
{
  "accountName": "apiexamples",
  "address": null,
  "appKey": {
    "name": null,
    "token": null
  },
  "appKeys": [
    {
      "appKey": "vtexappkey-apiexamples-YSTRGZ",
      "appToken": null,
      "createdIn": "2019-12-11T21:06:33",
      "id": "03ccde55547d43b09bbb2e1e6f7d455e",
      "isActive": true,
      "isBlocked": false,
      "label": "apiexamples"
    },
    {
      "appKey": "vtexappkey-apiexamples-LVQVVA",
      "appToken": null,
      "createdIn": "2021-10-21T20:00:21.308679",
      "id": "d585d6d94fd5415fb36c574a4c22986f",
      "isActive": true,
      "isBlocked": false,
      "label": "tadashi-test"
    }
  ],
  "city": null,
  "cnpj": null,
  "companyName": "UNISUPER, SOCIEDAD ANONIMA",
  "complement": null,
  "contact": {
    "email": "john.doe@vtex.com.br",
    "name": "John Doe",
    "phone": "+219999999"
  },
  "country": null,
  "creationDate": "2019-12-11T17:02:34",
  "defaultUrl": null,
  "district": null,
  "hasLogo": false,
  "haveParentAccount": false,
  "hosts": [],
  "id": "71fe5fdabc4940ad81c226d43b754ba8",
  "inactivationDate": null,
  "isActive": true,
  "isOperating": false,
  "licenses": [
    {
      "expiration": null,
      "id": 24,
      "isPurchased": false,
      "name": "Carrier",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 10,
      "isPurchased": false,
      "name": "CRM",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 3,
          "name": "Master Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 25,
          "name": "Dynamic Storage"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 30,
          "name": "Key Store"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 51,
          "name": "Vtex My Account"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 67,
          "name": "VTable"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 68,
          "name": "Zendesk"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 8,
      "isPurchased": false,
      "name": "E-Commerce Professional",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 3,
          "name": "Master Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 4,
          "name": "Request Capture"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 13,
          "name": "Channels"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 20,
          "name": "Conversation Tracker"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 25,
          "name": "Dynamic Storage"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 27,
          "name": "Portal"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 38,
          "name": "CMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 50,
          "name": "Suggestion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 51,
          "name": "Vtex My Account"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 53,
          "name": "Network"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 57,
          "name": "Insights"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 58,
          "name": "Credit Control"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 61,
          "name": "WebService"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 67,
          "name": "VTable"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 69,
          "name": "Conditions Evaluator"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 70,
          "name": "GiftCard"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 76,
          "name": "Search"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 81,
          "name": "Application Logs Stream"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 83,
          "name": "Subscriptions"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 84,
          "name": "CDN Service"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 85,
          "name": "Dandelion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 88,
          "name": "Tenant Switcher"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 6,
      "isPurchased": false,
      "name": "E-Commerce Starter",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 3,
          "name": "Master Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 4,
          "name": "Request Capture"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 7,
          "name": "Buscapé Connect"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 13,
          "name": "Channels"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 20,
          "name": "Conversation Tracker"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 25,
          "name": "Dynamic Storage"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 27,
          "name": "Portal"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 38,
          "name": "CMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 50,
          "name": "Suggestion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 51,
          "name": "Vtex My Account"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 53,
          "name": "Network"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 57,
          "name": "Insights"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 58,
          "name": "Credit Control"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 61,
          "name": "WebService"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 67,
          "name": "VTable"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 68,
          "name": "Zendesk"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 69,
          "name": "Conditions Evaluator"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 70,
          "name": "GiftCard"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 76,
          "name": "Search"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 81,
          "name": "Application Logs Stream"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 83,
          "name": "Subscriptions"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 84,
          "name": "CDN Service"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 85,
          "name": "Dandelion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 88,
          "name": "Tenant Switcher"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 7,
      "isPurchased": true,
      "name": "E-Commerce Unlimited",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 3,
          "name": "Master Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 4,
          "name": "Request Capture"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 7,
          "name": "Buscapé Connect"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 8,
          "name": "VTEX Events"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 10,
          "name": "Shipping Notification"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 13,
          "name": "Channels"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 15,
          "name": "VTEX Fulfilment"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 20,
          "name": "Conversation Tracker"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 22,
          "name": "VtexID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 25,
          "name": "Dynamic Storage"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 27,
          "name": "Portal"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 28,
          "name": "Dumbo"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 30,
          "name": "Key Store"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 31,
          "name": "Dashboard"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 37,
          "name": "Vtex PAI"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 38,
          "name": "CMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 39,
          "name": "Availability"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 41,
          "name": "Big Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 45,
          "name": "Healthcheck"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 46,
          "name": "VTEX Home"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 50,
          "name": "Suggestion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 51,
          "name": "Vtex My Account"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 53,
          "name": "Network"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 57,
          "name": "Insights"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 58,
          "name": "Credit Control"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 60,
          "name": "Extension Store"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 61,
          "name": "WebService"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 67,
          "name": "VTable"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 68,
          "name": "Zendesk"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 69,
          "name": "Conditions Evaluator"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 70,
          "name": "GiftCard"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 76,
          "name": "Search"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 81,
          "name": "Application Logs Stream"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 83,
          "name": "Subscriptions"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 84,
          "name": "CDN Service"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 85,
          "name": "Dandelion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 88,
          "name": "Tenant Switcher"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 28,
      "isPurchased": false,
      "name": "E-Commerce Unlimited No Billing",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 3,
          "name": "Master Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 4,
          "name": "Request Capture"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 7,
          "name": "Buscapé Connect"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 8,
          "name": "VTEX Events"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 10,
          "name": "Shipping Notification"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 13,
          "name": "Channels"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 15,
          "name": "VTEX Fulfilment"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 20,
          "name": "Conversation Tracker"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 22,
          "name": "VtexID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 25,
          "name": "Dynamic Storage"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 27,
          "name": "Portal"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 28,
          "name": "Dumbo"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 30,
          "name": "Key Store"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 31,
          "name": "Dashboard"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 37,
          "name": "Vtex PAI"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 38,
          "name": "CMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 39,
          "name": "Availability"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 41,
          "name": "Big Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 45,
          "name": "Healthcheck"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 46,
          "name": "VTEX Home"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 50,
          "name": "Suggestion"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 51,
          "name": "Vtex My Account"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 53,
          "name": "Network"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 57,
          "name": "Insights"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 58,
          "name": "Credit Control"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 60,
          "name": "Extension Store"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 61,
          "name": "WebService"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 67,
          "name": "VTable"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 68,
          "name": "Zendesk"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 69,
          "name": "Conditions Evaluator"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 70,
          "name": "GiftCard"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 76,
          "name": "Search"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 81,
          "name": "Application Logs Stream"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 83,
          "name": "Subscriptions"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 84,
          "name": "CDN Service"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 88,
          "name": "Tenant Switcher"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 11,
      "isPurchased": false,
      "name": "Gateway",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 8,
          "name": "VTEX Events"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 22,
          "name": "VtexID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 15,
      "isPurchased": false,
      "name": "Gateway Seller Nao VTEX",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 8,
          "name": "VTEX Events"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 17,
          "name": "VTEX DWT"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 18,
          "name": "Unikey"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 22,
          "name": "VtexID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 48,
          "name": "VTEX Bridge"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 29,
      "isPurchased": false,
      "name": "Indeva",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 30,
      "isPurchased": false,
      "name": "Marketplace Seller",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 13,
          "name": "Channels"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 20,
          "name": "Conversation Tracker"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 46,
          "name": "VTEX Home"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 86,
          "name": "CatalogV2"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 23,
      "isPurchased": false,
      "name": "VTEX Backoffice",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 84,
          "name": "CDN Service"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 88,
          "name": "Tenant Switcher"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 90,
          "name": "Payments' Provider Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 26,
      "isPurchased": false,
      "name": "VTEX Bank",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 82,
          "name": "Banking Service"
        }
      ]
    },
    {
      "expiration": null,
      "id": 22,
      "isPurchased": false,
      "name": "VTEX Billing",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        }
      ]
    },
    {
      "expiration": null,
      "id": 27,
      "isPurchased": false,
      "name": "VTEX Partner",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 88,
          "name": "Tenant Switcher"
        }
      ]
    },
    {
      "expiration": null,
      "id": 25,
      "isPurchased": false,
      "name": "VTEX Payment",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 72,
          "name": "VTEX Payment"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        }
      ]
    },
    {
      "expiration": null,
      "id": 19,
      "isPurchased": false,
      "name": "WhiteLabel",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 3,
          "name": "Master Data"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 25,
          "name": "Dynamic Storage"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 27,
          "name": "Portal"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 39,
          "name": "Availability"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 57,
          "name": "Insights"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 67,
          "name": "VTable"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 68,
          "name": "Zendesk"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 76,
          "name": "Search"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 81,
          "name": "Application Logs Stream"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 21,
      "isPurchased": false,
      "name": "Whitelabel Instore",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 14,
          "name": "Log"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 73,
          "name": "Seller Register"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 75,
          "name": "Time Series"
        }
      ]
    },
    {
      "expiration": null,
      "id": 31,
      "isPurchased": false,
      "name": "Marketplace Seller Whitelabel",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 2,
          "name": "Catalog"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 5,
          "name": "Checkout"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 6,
          "name": "PCI Gateway"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 9,
          "name": "Logistics"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 16,
          "name": "Rates and Benefits"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 19,
          "name": "OMS"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 20,
          "name": "Conversation Tracker"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 23,
          "name": "Message Center"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 43,
          "name": "Billing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 46,
          "name": "VTEX Home"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 65,
          "name": "Pricing"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 66,
          "name": "VTEX IO"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 74,
          "name": "Order Authorization"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 86,
          "name": "CatalogV2"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 89,
          "name": "Promotions Policy Engine"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    },
    {
      "expiration": null,
      "id": 33,
      "isPurchased": false,
      "name": "Buyer Organization",
      "products": [
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 1,
          "name": "License Manager"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 55,
          "name": "Audit"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 64,
          "name": "Vtex ID"
        },
        {
          "domains": [],
          "endpoints": {
            "consoleUrl": null,
            "webApiUrl": null
          },
          "id": 91,
          "name": "Releases"
        }
      ]
    }
  ],
  "logo": null,
  "lv": null,
  "name": "UNISUPER, SOCIEDAD ANONIMA",
  "number": null,
  "operationDate": null,
  "parentAccountId": null,
  "parentAccountName": null,
  "postalCode": null,
  "sites": [
    {
      "LV": null,
      "aliases": [],
      "domains": null,
      "hosts": [],
      "id": 23117,
      "logo": null,
      "monetaryUnitId": 1,
      "name": "apiexamples",
      "tradingName": "UNISUPER, SOCIEDAD ANONIMA"
    }
  ],
  "sponsor": {
    "email": "john.doe@vtex.com.br",
    "name": "John Doe",
    "phone": "+219999999"
  },
  "state": null,
  "telephone": "+219999999",
  "tradingName": "UNISUPER, SOCIEDAD ANONIMA"
}
```

<h3 id="get-information-about-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccountResponse](#schemaaccountresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "accountName": "string",
  "address": "string",
  "appKey": {
    "name": "string",
    "token": "string"
  },
  "appKeys": [
    {
      "appKey": "string",
      "appToken": "string",
      "createdIn": "1970-01-01T00:00:00Z",
      "id": "string",
      "isActive": true,
      "isBlocked": true,
      "label": "string"
    }
  ],
  "city": "string",
  "cnpj": "string",
  "companyName": "string",
  "complement": "string",
  "contact": {
    "email": "string",
    "name": "string",
    "phone": "string"
  },
  "country": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "defaultUrl": "string",
  "district": "string",
  "hasLogo": true,
  "haveParentAccount": true,
  "hosts": [
    "string"
  ],
  "id": "string",
  "inactivationDate": "1970-01-01T00:00:00Z",
  "isActive": true,
  "isOperating": true,
  "licenses": [
    {
      "expiration": "1970-01-01T00:00:00Z",
      "id": 0,
      "isPurchased": true,
      "name": "string",
      "products": [
        {
          "domains": [
            "string"
          ],
          "endpoints": {
            "consoleUrl": "string",
            "webApiUrl": "string"
          },
          "id": 0,
          "name": "string"
        }
      ]
    }
  ],
  "logo": "string",
  "lv": "string",
  "name": "string",
  "number": "string",
  "operationDate": "1970-01-01T00:00:00Z",
  "parentAccountId": "string",
  "parentAccountName": "string",
  "postalCode": "string",
  "sites": [
    {
      "LV": "string",
      "aliases": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "hosts": [
        "string"
      ],
      "id": 0,
      "logo": "string",
      "monetaryUnitId": 0,
      "name": "string",
      "tradingName": "string"
    }
  ],
  "sponsor": {
    "email": "string",
    "name": "string",
    "phone": "string"
  },
  "state": "string",
  "telephone": "string",
  "tradingName": "string"
}
```

Successful response for `/api/vlm/account`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|Account name|
|address|string \| null|false|none|Address of contact|
|appKey|object|false|none|**Deprecated.** Deprecated. Check appKeys object for all appKeys|
|appKeys|[[AppKeyItems](#schemaappkeyitems)]|false|none|Array of application keys|
|city|string \| null|false|none|City of contact|
|cnpj|string \| null|false|none|CNPJ (Tax ID) of account|
|companyName|string|false|none|Company name|
|complement|string \| null|false|none|Additional address of contact|
|contact|object|false|none|none|
|country|string \| null|false|none|Country of contact|
|creationDate|string(date-time)|false|none|The date when the account was created|
|defaultUrl|string \| null|false|none|**Deprecated.**|
|district|string \| null|false|none|Neighborhood of contact|
|hasLogo|boolean|false|none|If logo has been setup|
|haveParentAccount|boolean|false|none|If it has a parent account|
|hosts|[string]|false|none|Hosts of all stores|
|id|string|false|none|ID of the account|
|inactivationDate|string(date-time) \| null|false|none|The date when the account was deactivated|
|isActive|boolean|false|none|If account is active or not|
|isOperating|boolean|false|none|If it is in production|
|licenses|[[LicenseItems](#schemalicenseitems)]|false|none|Licenses of the account|
|logo|string \| null|false|none|Filename of account logo|
|lv|string \| null|false|none|**Deprecated.**|
|name|string|false|none|Trading name|
|number|string \| null|false|none|Number of the address of contact|
|operationDate|string(date-time) \| null|false|none|The date when the account went into production|
|parentAccountId|string \| null|false|none|The ID of the parent account|
|parentAccountName|string \| null|false|none|The name of the parent account|
|postalCode|string \| null|false|none|Zip Code of contact|
|sites|[[SiteItems](#schemasiteitems)]|false|none|Array of objects representing a store|
|sponsor|object|false|none|Object representing the sponsor user|
|state|string \| null|false|none|State/Province of contact|
|telephone|string|false|none|Telephone of contact|
|tradingName|string|false|none|Trading name|

<h2 id="tocS_AppKeyItems">AppKeyItems</h2>
<!-- backwards compatibility -->
<a id="schemaappkeyitems"></a>
<a id="schema_AppKeyItems"></a>
<a id="tocSappkeyitems"></a>
<a id="tocsappkeyitems"></a>

```json
{
  "appKey": "string",
  "appToken": "string",
  "createdIn": "1970-01-01T00:00:00Z",
  "id": "string",
  "isActive": true,
  "isBlocked": true,
  "label": "string"
}
```

Object representing application keys

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appKey|string|false|none|AppKey (Access Key in the license manager UI)|
|appToken|string \| null|false|none|AppToken. For security reasons, should always be null.|
|createdIn|string(date-time)|false|none|Creation date of the application key|
|id|string|false|none|ID of the application key|
|isActive|boolean|false|none|If the application key is active|
|isBlocked|boolean|false|none|If the application key is blocked|
|label|string|false|none|Label of the application key|

<h2 id="tocS_CreateUserRequest">CreateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequest"></a>
<a id="schema_CreateUserRequest"></a>
<a id="tocScreateuserrequest"></a>
<a id="tocscreateuserrequest"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

Request body for creating users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email of the user|
|name|string|true|none|Name of the user|

<h2 id="tocS_CreatenewappkeyRequest">CreatenewappkeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatenewappkeyrequest"></a>
<a id="schema_CreatenewappkeyRequest"></a>
<a id="tocScreatenewappkeyrequest"></a>
<a id="tocscreatenewappkeyrequest"></a>

```json
{
  "label": "string"
}
```

Request body for creating new application key (/api/vlm/appkeys)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Label for application key|

<h2 id="tocS_CreatenewappkeyResponse">CreatenewappkeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatenewappkeyresponse"></a>
<a id="schema_CreatenewappkeyResponse"></a>
<a id="tocScreatenewappkeyresponse"></a>
<a id="tocscreatenewappkeyresponse"></a>

```json
{
  "appKey": "string",
  "appToken": "string",
  "createdIn": "1970-01-01T00:00:00Z",
  "id": "string",
  "isActive": true,
  "label": "string"
}
```

Response body of sucessful call to /api/vlm/appkeys

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appKey|string|true|none|AppKey (Access Key in the license manager UI)|
|appToken|string|true|none|Secret of application key|
|createdIn|string(date-time)|true|none|Date of creation of application key|
|id|string|true|none|ID of application key|
|isActive|boolean|true|none|If the application key is active|
|label|string|true|none|Label for application key|

<h2 id="tocS_Getappkeysfromaccount">Getappkeysfromaccount</h2>
<!-- backwards compatibility -->
<a id="schemagetappkeysfromaccount"></a>
<a id="schema_Getappkeysfromaccount"></a>
<a id="tocSgetappkeysfromaccount"></a>
<a id="tocsgetappkeysfromaccount"></a>

```json
{
  "appKey": "string",
  "createdIn": "1970-01-01T00:00:00Z",
  "id": "string",
  "isActive": true,
  "label": "string"
}
```

Response body for getting all application keys from the account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appKey|string|true|none|AppKey (Access Key in the license manager UI)|
|createdIn|string(date-time)|true|none|Date of creation of application key|
|id|string|true|none|ID of application key|
|isActive|boolean|true|none|If the application key is active|
|label|string|true|none|Label for application key|

<h2 id="tocS_LicenseItems">LicenseItems</h2>
<!-- backwards compatibility -->
<a id="schemalicenseitems"></a>
<a id="schema_LicenseItems"></a>
<a id="tocSlicenseitems"></a>
<a id="tocslicenseitems"></a>

```json
{
  "expiration": "1970-01-01T00:00:00Z",
  "id": 0,
  "isPurchased": true,
  "name": "string",
  "products": [
    {
      "domains": [
        "string"
      ],
      "endpoints": {
        "consoleUrl": "string",
        "webApiUrl": "string"
      },
      "id": 0,
      "name": "string"
    }
  ]
}
```

Object representing licenses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiration|string(date-time) \| null|false|none|**Deprecated.**|
|id|number|false|none|ID of the category of the license|
|isPurchased|boolean|false|none|If the license is purchased|
|name|string|false|none|Name of the category of the license|
|products|[object]|false|none|Array of products|

<h2 id="tocS_ListRolesResponse">ListRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrolesresponse"></a>
<a id="schema_ListRolesResponse"></a>
<a id="tocSlistrolesresponse"></a>
<a id="tocslistrolesresponse"></a>

```json
{
  "items": [
    {
      "id": 0,
      "isAdmin": true,
      "logins": "string",
      "name": "string",
      "products": [
        {
          "categoryId": "string",
          "categoryName": "string",
          "consoleUrlMask": "string",
          "description": "string",
          "id": "string",
          "name": "string",
          "productResources": "string",
          "url": "string",
          "urlConfiguration": "string",
          "webApiUrlMask": "string"
        }
      ],
      "resources": "string",
      "roleType": 0
    }
  ],
  "paging": {
    "page": 0,
    "pages": 0,
    "perPage": 0,
    "total": 0
  }
}
```

Response body for listing all roles

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[RoleItems](#schemaroleitems)]|false|none|Array of role objects|
|paging|[Paging](#schemapaging)|false|none|Paging object|

<h2 id="tocS_ListUsersResponse">ListUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistusersresponse"></a>
<a id="schema_ListUsersResponse"></a>
<a id="tocSlistusersresponse"></a>
<a id="tocslistusersresponse"></a>

```json
{
  "items": [
    {
      "accountNames": [],
      "email": "string",
      "id": "string",
      "isAdmin": true,
      "isBlocked": true,
      "isReliable": true,
      "name": "string",
      "roles": []
    }
  ],
  "paging": {
    "page": 0,
    "pages": 0,
    "perPage": 0,
    "total": 0
  }
}
```

Response body for listing all users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[UserItems](#schemauseritems)]|false|none|Array of user objects|
|paging|[Paging](#schemapaging)|false|none|Paging object|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
{
  "page": 0,
  "pages": 0,
  "perPage": 0,
  "total": 0
}
```

Paging object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|true|none|Current page number|
|pages|integer|true|none|Total of pages|
|perPage|integer|true|none|Items per page|
|total|integer|true|none|Total of items|

<h2 id="tocS_ProductItems">ProductItems</h2>
<!-- backwards compatibility -->
<a id="schemaproductitems"></a>
<a id="schema_ProductItems"></a>
<a id="tocSproductitems"></a>
<a id="tocsproductitems"></a>

```json
{
  "categoryId": "string",
  "categoryName": "string",
  "consoleUrlMask": "string",
  "description": "string",
  "id": "string",
  "name": "string",
  "productResources": "string",
  "url": "string",
  "urlConfiguration": "string",
  "webApiUrlMask": "string"
}
```

Object representing products

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|string \| null|false|none|**Deprecated.**|
|categoryName|string \| null|false|none|**Deprecated.**|
|consoleUrlMask|string \| null|false|none|**Deprecated.**|
|description|string \| null|false|none|**Deprecated.**|
|id|string \| null|false|none|**Deprecated.**|
|name|string|false|none|Name of the product|
|productResources|string \| null|false|none|**Deprecated.**|
|url|string \| null|false|none|**Deprecated.**|
|urlConfiguration|string \| null|false|none|**Deprecated.**|
|webApiUrlMask|string \| null|false|none|**Deprecated.**|

<h2 id="tocS_RoleItems">RoleItems</h2>
<!-- backwards compatibility -->
<a id="schemaroleitems"></a>
<a id="schema_RoleItems"></a>
<a id="tocSroleitems"></a>
<a id="tocsroleitems"></a>

```json
{
  "id": 0,
  "isAdmin": true,
  "logins": "string",
  "name": "string",
  "products": [
    {
      "categoryId": "string",
      "categoryName": "string",
      "consoleUrlMask": "string",
      "description": "string",
      "id": "string",
      "name": "string",
      "productResources": "string",
      "url": "string",
      "urlConfiguration": "string",
      "webApiUrlMask": "string"
    }
  ],
  "resources": "string",
  "roleType": 0
}
```

Object representing roles

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|ID of the role|
|isAdmin|boolean|false|none|If the role is admin|
|logins|string \| null|false|none|**Deprecated.**|
|name|string|false|none|Name of the role|
|products|[[ProductItems](#schemaproductitems)]|false|none|Array of product objects|
|resources|string \| null|false|none|**Deprecated.**|
|roleType|integer|false|none|Returns 1 for custom roles, and 0 otherwise|

<h2 id="tocS_SiteItems">SiteItems</h2>
<!-- backwards compatibility -->
<a id="schemasiteitems"></a>
<a id="schema_SiteItems"></a>
<a id="tocSsiteitems"></a>
<a id="tocssiteitems"></a>

```json
{
  "LV": "string",
  "aliases": [
    "string"
  ],
  "domains": [
    "string"
  ],
  "hosts": [
    "string"
  ],
  "id": 0,
  "logo": "string",
  "monetaryUnitId": 0,
  "name": "string",
  "tradingName": "string"
}
```

Object containing complete information from a store

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LV|string \| null|false|none|**Deprecated.**|
|aliases|[string]|false|none|**Deprecated.**|
|domains|[string]|false|none|**Deprecated.**|
|hosts|[string]|false|none|Hosts associated to the store|
|id|number|false|none|ID of the store|
|logo|string \| null|false|none|**Deprecated.**|
|monetaryUnitId|number|false|none|**Deprecated.**|
|name|string|false|none|Store name|
|tradingName|string|false|none|Trading name of the store|

<h2 id="tocS_StoreItems">StoreItems</h2>
<!-- backwards compatibility -->
<a id="schemastoreitems"></a>
<a id="schema_StoreItems"></a>
<a id="tocSstoreitems"></a>
<a id="tocsstoreitems"></a>

```json
{
  "hosts": [
    "string"
  ],
  "id": 0,
  "name": "string"
}
```

Object containing summarized information from a store

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hosts|[string]|false|none|Array of hosts corresponding to the store|
|id|number|false|none|ID of the store|
|name|string|false|none|Name of the store|

<h2 id="tocS_UpdateappkeyRequest">UpdateappkeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateappkeyrequest"></a>
<a id="schema_UpdateappkeyRequest"></a>
<a id="tocSupdateappkeyrequest"></a>
<a id="tocsupdateappkeyrequest"></a>

```json
{
  "isActive": true
}
```

Request body for activating/deactivating application keys

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isActive|boolean|true|none|If the application key should be active or inactive|

<h2 id="tocS_UserItems">UserItems</h2>
<!-- backwards compatibility -->
<a id="schemauseritems"></a>
<a id="schema_UserItems"></a>
<a id="tocSuseritems"></a>
<a id="tocsuseritems"></a>

```json
{
  "accountNames": [],
  "email": "string",
  "id": "string",
  "isAdmin": true,
  "isBlocked": true,
  "isReliable": true,
  "name": "string",
  "roles": []
}
```

Object representing users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNames|[string]|false|none|Array of account names|
|email|string|false|none|Email of the user|
|id|string|false|none|ID of the user|
|isAdmin|boolean|false|none|If user is admin|
|isBlocked|boolean|false|none|If user is blocked|
|isReliable|boolean|false|none|For internal use only|
|name|string|false|none|Name of the user|
|roles|[string]|false|none|Array of roles|

<h2 id="tocS_VLMError">VLMError</h2>
<!-- backwards compatibility -->
<a id="schemavlmerror"></a>
<a id="schema_VLMError"></a>
<a id="tocSvlmerror"></a>
<a id="tocsvlmerror"></a>

```json
{
  "Detais": "string",
  "HttpStatusCode": 0,
  "Message": "string",
  "VLMErrorCode": 0
}
```

Object representing VLMError

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Detais|string \| null|false|none|Details of error|
|HttpStatusCode|integer|false|none|Status code of HTTP response|
|Message|string|false|none|Error message|
|VLMErrorCode|integer|false|none|Error code for License Manager|
