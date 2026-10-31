<h1 id="provisioningapi-full">provisioning_api-full v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This application enables a set of APIs that external systems can use to manage accounts, groups and apps.

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="provisioningapi-full-apps">apps</h1>

## Get a list of installed apps

<a id="opIdapps-get-apps"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/apps`

This endpoint requires admin access

<h3 id="get-a-list-of-installed-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string \| null|false|Filter for enabled or disabled apps|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|enabled|
|filter|disabled|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "apps": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-installed-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Installed apps returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="get-a-list-of-installed-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » apps|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the app info for an app

<a id="opIdapps-get-app-info"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/apps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/apps/{app}`

This endpoint requires admin access

<h3 id="get-the-app-info-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": {},
      "property2": {}
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-app-info-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App info returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="get-the-app-info-for-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|object \| null|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Enable an app

<a id="opIdapps-enable"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/apps/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/cloud/apps/{app}`

This endpoint requires admin access
This endpoint requires password confirmation

<h3 id="enable-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="enable-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App enabled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="enable-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Disable an app

<a id="opIdapps-disable"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/apps/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/cloud/apps/{app}`

This endpoint requires admin access
This endpoint requires password confirmation

<h3 id="disable-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="disable-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App disabled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="disable-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="provisioningapi-full-groups">groups</h1>

## Get the list of user IDs that are a subadmin of the group

<a id="opIdgroups-get-sub-admins-of-group"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/string/subadmins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/groups/{groupId}/subadmins`

This endpoint requires admin access

<h3 id="get-the-list-of-user-ids-that-are-a-subadmin-of-the-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-list-of-user-ids-that-are-a-subadmin-of-the-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sub admins returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="get-the-list-of-user-ids-that-are-a-subadmin-of-the-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of groups

<a id="opIdgroups-get-groups"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/groups`

<h3 id="get-a-list-of-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of groups returned|
|offset|query|integer(int64)|false|Offset for searching for groups|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "groups": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » groups|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Create a new group

<a id="opIdgroups-add-group"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "groupid": "string",
    "displayname": ""
  }'
```

`POST /ocs/v2.php/cloud/groups`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "groupid": "string",
  "displayname": ""
}
```

<h3 id="create-a-new-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» groupid|body|string|true|ID of the group|
|» displayname|body|string|false|Display name of the group|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="create-a-new-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group created successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="create-a-new-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of users in the specified group

<a id="opIdgroups-get-group"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/groups/{groupId}`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="get-a-list-of-users-in-the-specified-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-users-in-the-specified-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group users returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-users-in-the-specified-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update a group

<a id="opIdgroups-update-group"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "key": "string",
    "value": "string"
  }'
```

`PUT /ocs/v2.php/cloud/groups/{groupId}`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "key": "string",
  "value": "string"
}
```

<h3 id="update-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» key|body|string|true|Key to update, only 'displayname'|
|» value|body|string|true|New value for the key|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="update-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a group

<a id="opIdgroups-delete-group"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/cloud/groups/{groupId}`

This endpoint requires admin access
This endpoint requires password confirmation

<h3 id="delete-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group deleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="delete-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of groups details

<a id="opIdgroups-get-groups-details"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/groups/details`

<h3 id="get-a-list-of-groups-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of groups returned|
|offset|query|integer(int64)|false|Offset for searching for groups|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "groups": [
        {
          "id": "string",
          "displayname": "string",
          "usercount": true,
          "disabled": true,
          "canAdd": true,
          "canRemove": true
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-groups-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups details returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-groups-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » groups|[[GroupDetails](#schemagroupdetails)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of users in the specified group

<a id="opIdgroups-get-group-users"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/groups/{groupId}/users`

<h3 id="get-a-list-of-users-in-the-specified-group-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 404 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-users-in-the-specified-group-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User IDs returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Missing permissions to get users in the group|Inline|
|404|Not Found|Group not found|Inline|

<h3 id="get-a-list-of-users-in-the-specified-group-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of users details in the specified group

<a id="opIdgroups-get-group-users-details"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/groups/string/users/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/groups/{groupId}/users/details`

<h3 id="get-a-list-of-users-details-in-the-specified-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|ID of the group|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of groups returned|
|offset|query|integer(int64)|false|Offset for searching for groups|
|enabled|query|boolean \| null|false|Only return users with this enabled state, or all users if null. Use the `Link` header for the next page offset|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": {
        "property1": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        },
        "property2": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        }
      },
      "groups": [
        {
          "id": "string",
          "displayname": "string"
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-users-details-in-the-specified-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group users details returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-users-details-in-the-specified-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|object|true|none|none|
|» » » **additionalProperties**|[UserDetails](#schemauserdetails) \| object|false|none|none|
|» » » » *anyOf*|[UserDetails](#schemauserdetails)|false|none|none|
|» » » » *anyOf*|object|false|none|none|
|» » » » id|string|true|none|none|
|» » groups|[[UserDetailsGroupDisplayname](#schemauserdetailsgroupdisplayname)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="provisioningapi-full-users">users</h1>

## Gets the list of users sorted by lastLogin, from most recent to least recent

<a id="opIdusers-get-last-logged-in-users"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/recent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/recent`

This endpoint requires admin access

<h3 id="gets-the-list-of-users-sorted-by-lastlogin-from-most-recent-to-least-recent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of users returned|
|offset|query|integer(int64)|false|Offset|
|enabled|query|boolean \| null|false|Only return users with this enabled state, or all users if null. Use the `Link` header for the next page offset|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": {
        "property1": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        },
        "property2": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        }
      }
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="gets-the-list-of-users-sorted-by-lastlogin-from-most-recent-to-least-recent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users details returned based on last logged in information|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="gets-the-list-of-users-sorted-by-lastlogin-from-most-recent-to-least-recent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|object|true|none|none|
|» » » **additionalProperties**|[UserDetails](#schemauserdetails) \| object|false|none|none|
|» » » » *anyOf*|[UserDetails](#schemauserdetails)|false|none|none|
|» » » » *anyOf*|object|false|none|none|
|» » » » id|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the groups a user is a subadmin of

<a id="opIdusers-get-user-sub-admin-groups"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/subadmins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/{userId}/subadmins`

This endpoint requires admin access

<h3 id="get-the-groups-a-user-is-a-subadmin-of-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID if the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-groups-a-user-is-a-subadmin-of-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User subadmin groups returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="get-the-groups-a-user-is-a-subadmin-of-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Make a user a subadmin of a group

<a id="opIdusers-add-sub-admin"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/subadmins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "groupid": "string"
  }'
```

`POST /ocs/v2.php/cloud/users/{userId}/subadmins`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "groupid": "string"
}
```

<h3 id="make-a-user-a-subadmin-of-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» groupid|body|string|true|ID of the group|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="make-a-user-a-subadmin-of-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User added as group subadmin successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="make-a-user-a-subadmin-of-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove a user from the subadmins of a group

<a id="opIdusers-remove-sub-admin"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/cloud/users/string/subadmins?groupid=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/cloud/users/{userId}/subadmins`

This endpoint requires admin access
This endpoint requires password confirmation

<h3 id="remove-a-user-from-the-subadmins-of-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|groupid|query|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="remove-a-user-from-the-subadmins-of-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User removed as group subadmin successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="remove-a-user-from-the-subadmins-of-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of users

<a id="opIdusers-get-users"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users`

<h3 id="get-a-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of groups returned|
|offset|query|integer(int64)|false|Offset for searching for groups|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Create a new user

<a id="opIdusers-add-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "userid": "string",
    "password": "",
    "displayName": "",
    "email": "",
    "groups": [],
    "subadmin": [],
    "quota": "",
    "language": "",
    "manager": null
  }'
```

`POST /ocs/v2.php/cloud/users`

This endpoint requires password confirmation

> Body parameter

```json
{
  "userid": "string",
  "password": "",
  "displayName": "",
  "email": "",
  "groups": [],
  "subadmin": [],
  "quota": "",
  "language": "",
  "manager": null
}
```

<h3 id="create-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» userid|body|string|true|ID of the user|
|» password|body|string|false|Password of the user|
|» displayName|body|string|false|Display name of the user|
|» email|body|string|false|Email of the user|
|» groups|body|[string]|false|Groups of the user|
|» subadmin|body|[string]|false|Groups where the user is subadmin|
|» quota|body|string|false|Quota of the user|
|» language|body|string|false|Language of the user|
|» manager|body|string \| null|false|Manager of the user|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": "string"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="create-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User added successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Missing permissions to make user subadmin|Inline|

<h3 id="create-a-new-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » id|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of users and their details

<a id="opIdusers-get-users-details"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/details`

<h3 id="get-a-list-of-users-and-their-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of groups returned|
|offset|query|integer(int64)|false|Offset for searching for groups|
|enabled|query|boolean \| null|false|Only return users with this enabled state, or all users if null. Use the `Link` header for the next page offset|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": {
        "property1": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        },
        "property2": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        }
      },
      "groups": [
        {
          "id": "string",
          "displayname": "string"
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-users-and-their-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users details returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-users-and-their-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|object|true|none|none|
|» » » **additionalProperties**|[UserDetails](#schemauserdetails) \| object|false|none|none|
|» » » » *anyOf*|[UserDetails](#schemauserdetails)|false|none|none|
|» » » » *anyOf*|object|false|none|none|
|» » » » id|string|true|none|none|
|» » groups|[[UserDetailsGroupDisplayname](#schemauserdetailsgroupdisplayname)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the list of disabled users and their details

<a id="opIdusers-get-disabled-users-details"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/disabled \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/disabled`

<h3 id="get-the-list-of-disabled-users-and-their-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Text to search for|
|limit|query|integer(int64) \| null|false|Limit the amount of users returned|
|offset|query|integer(int64)|false|Offset|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "users": {
        "property1": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        },
        "property2": {
          "additional_mail": [
            "string"
          ],
          "additional_mailScope": [
            "v2-private"
          ],
          "address": "string",
          "addressScope": "v2-private",
          "avatarScope": "v2-private",
          "backend": "string",
          "backendCapabilities": {
            "setDisplayName": true,
            "setPassword": true
          },
          "biography": "string",
          "biographyScope": "v2-private",
          "display-name": "string",
          "displayname": "string",
          "displaynameScope": "v2-private",
          "email": "string",
          "emailScope": "v2-private",
          "enabled": true,
          "fediverse": "string",
          "fediverseScope": "v2-private",
          "groups": [
            "string"
          ],
          "headline": "string",
          "headlineScope": "v2-private",
          "id": "string",
          "language": "string",
          "firstLoginTimestamp": 0,
          "lastLoginTimestamp": 0,
          "lastLogin": 0,
          "locale": "string",
          "manager": "string",
          "notify_email": "string",
          "organisation": "string",
          "organisationScope": "v2-private",
          "phone": "string",
          "phoneScope": "v2-private",
          "profile_enabled": "string",
          "profile_enabledScope": "v2-private",
          "pronouns": "string",
          "pronounsScope": "v2-private",
          "quota": {
            "free": 0,
            "quota": 0,
            "relative": 0,
            "total": 0,
            "used": 0
          },
          "role": "string",
          "roleScope": "v2-private",
          "storageLocation": "string",
          "subadmin": [
            "string"
          ],
          "timezone": "string",
          "twitter": "string",
          "twitterScope": "v2-private",
          "bluesky": "string",
          "blueskyScope": "v2-private",
          "website": "string",
          "websiteScope": "v2-private"
        }
      }
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-list-of-disabled-users-and-their-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Disabled users details returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-list-of-disabled-users-and-their-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » users|object|true|none|none|
|» » » **additionalProperties**|[UserDetails](#schemauserdetails) \| object|false|none|none|
|» » » » *anyOf*|[UserDetails](#schemauserdetails)|false|none|none|
|» » » » *anyOf*|object|false|none|none|
|» » » » id|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Link|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Search users by their phone numbers

<a id="opIdusers-search-by-phone-numbers"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/search/by-phone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "location": "string",
    "search": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }'
```

`POST /ocs/v2.php/cloud/users/search/by-phone`

> Body parameter

```json
{
  "location": "string",
  "search": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

<h3 id="search-users-by-their-phone-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» location|body|string|true|Location of the phone number (for country code)|
|» search|body|object|true|Phone numbers to search for|
|» » **additionalProperties**|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="search-users-by-their-phone-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users returned|Inline|
|400|Bad Request|Invalid location|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="search-users-by-their-phone-numbers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the details of a user

<a id="opIdusers-get-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/{userId}`

<h3 id="get-the-details-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "additional_mail": [
        "string"
      ],
      "additional_mailScope": [
        "v2-private"
      ],
      "address": "string",
      "addressScope": "v2-private",
      "avatarScope": "v2-private",
      "backend": "string",
      "backendCapabilities": {
        "setDisplayName": true,
        "setPassword": true
      },
      "biography": "string",
      "biographyScope": "v2-private",
      "display-name": "string",
      "displayname": "string",
      "displaynameScope": "v2-private",
      "email": "string",
      "emailScope": "v2-private",
      "enabled": true,
      "fediverse": "string",
      "fediverseScope": "v2-private",
      "groups": [
        "string"
      ],
      "headline": "string",
      "headlineScope": "v2-private",
      "id": "string",
      "language": "string",
      "firstLoginTimestamp": 0,
      "lastLoginTimestamp": 0,
      "lastLogin": 0,
      "locale": "string",
      "manager": "string",
      "notify_email": "string",
      "organisation": "string",
      "organisationScope": "v2-private",
      "phone": "string",
      "phoneScope": "v2-private",
      "profile_enabled": "string",
      "profile_enabledScope": "v2-private",
      "pronouns": "string",
      "pronounsScope": "v2-private",
      "quota": {
        "free": 0,
        "quota": 0,
        "relative": 0,
        "total": 0,
        "used": 0
      },
      "role": "string",
      "roleScope": "v2-private",
      "storageLocation": "string",
      "subadmin": [
        "string"
      ],
      "timezone": "string",
      "twitter": "string",
      "twitterScope": "v2-private",
      "bluesky": "string",
      "blueskyScope": "v2-private",
      "website": "string",
      "websiteScope": "v2-private"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-details-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-details-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[UserDetails](#schemauserdetails)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update a value of the user's details

<a id="opIdusers-edit-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "key": "string",
    "value": "string"
  }'
```

`PUT /ocs/v2.php/cloud/users/{userId}`

This endpoint requires password confirmation

> Body parameter

```json
{
  "key": "string",
  "value": "string"
}
```

<h3 id="update-a-value-of-the-users-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» key|body|string|true|Key that will be updated|
|» value|body|string|true|New value for the key|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-a-value-of-the-users-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User value edited successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-a-value-of-the-users-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a user

<a id="opIdusers-delete-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/cloud/users/{userId}`

This endpoint requires password confirmation

<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User deleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="delete-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update multiple user account fields atomically. All submitted fields are validated first; if any fail, no changes are applied.

<a id="opIdusers-edit-user-multi-field"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "displayName": null,
    "password": null,
    "email": null,
    "quota": null,
    "language": null,
    "manager": null,
    "groups": null,
    "subadminGroups": null
  }'
```

`PATCH /ocs/v2.php/cloud/users/{userId}`

Unlike editUser (which updates one field at a time via key/value), this method accepts named fields and applies them all in a single request.
This endpoint requires password confirmation

> Body parameter

```json
{
  "displayName": null,
  "password": null,
  "email": null,
  "quota": null,
  "language": null,
  "manager": null,
  "groups": null,
  "subadminGroups": null
}
```

<h3 id="update-multiple-user-account-fields-atomically-all-submitted-fields-are-validated-first-if-any-fail-no-changes-are-applied-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The user to update|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» displayName|body|string \| null|false|New display name (null = no change)|
|» password|body|string \| null|false|New password (null = no change)|
|» email|body|string \| null|false|New primary email (null = no change, '' = clear)|
|» quota|body|string \| null|false|New quota e.g. "5 GB" (null = no change)|
|» language|body|string \| null|false|Language code e.g. "de" (null = no change)|
|» manager|body|string \| null|false|Manager user ID (null = no change, '' = clear)|
|» groups|body|[string]|false|Group IDs to assign (null = no change, [] = remove all)|
|» subadminGroups|body|[string]|false|Subadmin group IDs (null = no change, [] = remove all)|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "additional_mail": [
        "string"
      ],
      "additional_mailScope": [
        "v2-private"
      ],
      "address": "string",
      "addressScope": "v2-private",
      "avatarScope": "v2-private",
      "backend": "string",
      "backendCapabilities": {
        "setDisplayName": true,
        "setPassword": true
      },
      "biography": "string",
      "biographyScope": "v2-private",
      "display-name": "string",
      "displayname": "string",
      "displaynameScope": "v2-private",
      "email": "string",
      "emailScope": "v2-private",
      "enabled": true,
      "fediverse": "string",
      "fediverseScope": "v2-private",
      "groups": [
        "string"
      ],
      "headline": "string",
      "headlineScope": "v2-private",
      "id": "string",
      "language": "string",
      "firstLoginTimestamp": 0,
      "lastLoginTimestamp": 0,
      "lastLogin": 0,
      "locale": "string",
      "manager": "string",
      "notify_email": "string",
      "organisation": "string",
      "organisationScope": "v2-private",
      "phone": "string",
      "phoneScope": "v2-private",
      "profile_enabled": "string",
      "profile_enabledScope": "v2-private",
      "pronouns": "string",
      "pronounsScope": "v2-private",
      "quota": {
        "free": 0,
        "quota": 0,
        "relative": 0,
        "total": 0,
        "used": 0
      },
      "role": "string",
      "roleScope": "v2-private",
      "storageLocation": "string",
      "subadmin": [
        "string"
      ],
      "timezone": "string",
      "twitter": "string",
      "twitterScope": "v2-private",
      "bluesky": "string",
      "blueskyScope": "v2-private",
      "website": "string",
      "websiteScope": "v2-private"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 422 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "errors": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

<h3 id="update-multiple-user-account-fields-atomically-all-submitted-fields-are-validated-first-if-any-fail-no-changes-are-applied-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|422|Unprocessable Entity|One or more submitted fields failed validation|Inline|

<h3 id="update-multiple-user-account-fields-atomically-all-submitted-fields-are-validated-first-if-any-fail-no-changes-are-applied-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[UserDetails](#schemauserdetails)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » errors|object|true|none|none|
|» » » **additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the details of the current user

<a id="opIdusers-get-current-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/user`

<h3 id="get-the-details-of-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "additional_mail": [
        "string"
      ],
      "additional_mailScope": [
        "v2-private"
      ],
      "address": "string",
      "addressScope": "v2-private",
      "avatarScope": "v2-private",
      "backend": "string",
      "backendCapabilities": {
        "setDisplayName": true,
        "setPassword": true
      },
      "biography": "string",
      "biographyScope": "v2-private",
      "display-name": "string",
      "displayname": "string",
      "displaynameScope": "v2-private",
      "email": "string",
      "emailScope": "v2-private",
      "enabled": true,
      "fediverse": "string",
      "fediverseScope": "v2-private",
      "groups": [
        "string"
      ],
      "headline": "string",
      "headlineScope": "v2-private",
      "id": "string",
      "language": "string",
      "firstLoginTimestamp": 0,
      "lastLoginTimestamp": 0,
      "lastLogin": 0,
      "locale": "string",
      "manager": "string",
      "notify_email": "string",
      "organisation": "string",
      "organisationScope": "v2-private",
      "phone": "string",
      "phoneScope": "v2-private",
      "profile_enabled": "string",
      "profile_enabledScope": "v2-private",
      "pronouns": "string",
      "pronounsScope": "v2-private",
      "quota": {
        "free": 0,
        "quota": 0,
        "relative": 0,
        "total": 0,
        "used": 0
      },
      "role": "string",
      "roleScope": "v2-private",
      "storageLocation": "string",
      "subadmin": [
        "string"
      ],
      "timezone": "string",
      "twitter": "string",
      "twitterScope": "v2-private",
      "bluesky": "string",
      "blueskyScope": "v2-private",
      "website": "string",
      "websiteScope": "v2-private"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-details-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current user returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-details-of-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[UserDetails](#schemauserdetails)|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of fields that are editable for the current user

<a id="opIdusers-get-editable-fields"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/user/fields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/user/fields`

<h3 id="get-a-list-of-fields-that-are-editable-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-fields-that-are-editable-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Editable fields returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-fields-that-are-editable-for-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of fields that are editable for a user

<a id="opIdusers-get-editable-fields-for-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/user/fields/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/user/fields/{userId}`

<h3 id="get-a-list-of-fields-that-are-editable-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-fields-that-are-editable-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Editable fields for user returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-fields-that-are-editable-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of enabled apps for the current user

<a id="opIdusers-get-enabled-apps"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/user/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/user/apps`

<h3 id="get-a-list-of-enabled-apps-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "apps": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-enabled-apps-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Enabled apps returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-enabled-apps-for-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » apps|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update multiple values of the user's details

<a id="opIdusers-edit-user-multi-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "key": "string",
    "value": "string"
  }'
```

`PUT /ocs/v2.php/cloud/users/{userId}/{collectionName}`

This endpoint requires password confirmation

> Body parameter

```json
{
  "key": "string",
  "value": "string"
}
```

<h3 id="update-multiple-values-of-the-users-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|collectionName|path|string|true|Collection to update|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» key|body|string|true|Key that will be updated|
|» value|body|string|true|New value for the key|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-multiple-values-of-the-users-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User values edited successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-multiple-values-of-the-users-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Wipe all devices of a user

<a id="opIdusers-wipe-user-devices"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/wipe \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/cloud/users/{userId}/wipe`

This endpoint requires password confirmation

<h3 id="wipe-all-devices-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="wipe-all-devices-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wiped all user devices successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="wipe-all-devices-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Enable a user

<a id="opIdusers-enable-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`PUT /ocs/v2.php/cloud/users/{userId}/enable`

This endpoint requires password confirmation

<h3 id="enable-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="enable-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User enabled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="enable-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Disable a user

<a id="opIdusers-disable-user"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/disable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`PUT /ocs/v2.php/cloud/users/{userId}/disable`

This endpoint requires password confirmation

<h3 id="disable-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="disable-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User disabled successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="disable-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of groups the user belongs to

<a id="opIdusers-get-users-groups"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/{userId}/groups`

<h3 id="get-a-list-of-groups-the-user-belongs-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "groups": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-groups-the-user-belongs-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users groups returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-groups-the-user-belongs-to-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » groups|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Add a user to a group

<a id="opIdusers-add-to-group"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "groupid": ""
  }'
```

`POST /ocs/v2.php/cloud/users/{userId}/groups`

This endpoint requires password confirmation

> Body parameter

```json
{
  "groupid": ""
}
```

<h3 id="add-a-user-to-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» groupid|body|string|false|ID of the group|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="add-a-user-to-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User added to group successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="add-a-user-to-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Remove a user from a group

<a id="opIdusers-remove-from-group"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/cloud/users/string/groups?groupid=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/cloud/users/{userId}/groups`

This endpoint requires password confirmation

<h3 id="remove-a-user-from-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|groupid|query|string|true|ID of the group|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="remove-a-user-from-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User removed from group successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="remove-a-user-from-a-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of groups with details

<a id="opIdusers-get-users-groups-details"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/groups/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/{userId}/groups/details`

<h3 id="get-a-list-of-groups-with-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "groups": [
        {
          "id": "string",
          "displayname": "string",
          "usercount": true,
          "disabled": true,
          "canAdd": true,
          "canRemove": true
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-groups-with-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users groups returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-groups-with-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » groups|[[GroupDetails](#schemagroupdetails)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a list of the groups the user is a subadmin of, with details

<a id="opIdusers-get-user-sub-admin-groups-details"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/subadmins/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/cloud/users/{userId}/subadmins/details`

<h3 id="get-a-list-of-the-groups-the-user-is-a-subadmin-of-with-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "groups": [
        {
          "id": "string",
          "displayname": "string",
          "usercount": true,
          "disabled": true,
          "canAdd": true,
          "canRemove": true
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-the-groups-the-user-is-a-subadmin-of-with-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users subadmin groups returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-a-list-of-the-groups-the-user-is-a-subadmin-of-with-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » groups|[[GroupDetails](#schemagroupdetails)]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Resend the welcome message

<a id="opIdusers-resend-welcome-message"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/cloud/users/string/welcome \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`POST /ocs/v2.php/cloud/users/{userId}/welcome`

This endpoint requires password confirmation

<h3 id="resend-the-welcome-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID if the user|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="resend-the-welcome-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resent welcome message successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="resend-the-welcome-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="provisioningapi-full-appconfig">app_config</h1>

## Get a list of apps

<a id="opIdapp_config-get-apps"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/provisioning_api/api/v1/config/apps`

This endpoint requires admin access

<h3 id="get-a-list-of-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-a-list-of-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Apps returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="get-a-list-of-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the config keys of an app

<a id="opIdapp_config-get-keys"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}`

This endpoint requires admin access

<h3 id="get-the-config-keys-of-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": {
        "message": "string"
      }
    }
  }
}
```

<h3 id="get-the-config-keys-of-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Keys returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|App is not allowed|Inline|

<h3 id="get-the-config-keys-of-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|object|true|none|none|
|» » » message|string|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get a the config value of an app

<a id="opIdapp_config-get-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}/{key}`

This endpoint requires admin access

<h3 id="get-a-the-config-value-of-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|key|path|string|true|Key|
|defaultValue|query|string|false|Default returned value if the value is empty|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": "string"
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": {
        "message": "string"
      }
    }
  }
}
```

<h3 id="get-a-the-config-value-of-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Value returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|App is not allowed|Inline|

<h3 id="get-a-the-config-value-of-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|object|true|none|none|
|» » » message|string|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the config value of an app

<a id="opIdapp_config-set-value"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "value": "string"
  }'
```

`POST /ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}/{key}`

This endpoint requires password confirmation

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="update-the-config-value-of-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|key|path|string|true|Key to update|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» value|body|string|true|New value for the key|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": {
        "message": "string"
      }
    }
  }
}
```

<h3 id="update-the-config-value-of-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Value updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|App or key is not allowed|Inline|

<h3 id="update-the-config-value-of-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|object|true|none|none|
|» » » message|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a config key of an app

<a id="opIdapp_config-delete-key"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/apps/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/provisioning_api/api/v1/config/apps/{app}/{key}`

This endpoint requires admin access
This endpoint requires password confirmation

<h3 id="delete-a-config-key-of-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app|path|string|true|ID of the app|
|key|path|string|true|Key to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "data": {
        "message": "string"
      }
    }
  }
}
```

<h3 id="delete-a-config-key-of-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key deleted successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|App or key is not allowed|Inline|

<h3 id="delete-a-config-key-of-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » data|object|true|none|none|
|» » » message|string|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="provisioningapi-full-preferences">preferences</h1>

## Update a preference value of an app

<a id="opIdpreferences-set-preference"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/users/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configValue": "string"
  }'
```

`POST /ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}`

> Body parameter

```json
{
  "configValue": "string"
}
```

<h3 id="update-a-preference-value-of-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|configKey|path|string|true|Key of the preference|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configValue|body|string|true|New value|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-a-preference-value-of-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preference updated successfully|Inline|
|400|Bad Request|Preference invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-a-preference-value-of-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a preference for an app

<a id="opIdpreferences-delete-preference"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/users/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}/{configKey}`

<h3 id="delete-a-preference-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|configKey|path|string|true|Key to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-preference-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preference deleted successfully|Inline|
|400|Bad Request|Preference invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="delete-a-preference-for-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update multiple preference values of an app

<a id="opIdpreferences-set-multiple-preferences"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/users/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "configs": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}`

> Body parameter

```json
{
  "configs": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-multiple-preference-values-of-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» configs|body|object|true|Key-value pairs of the preferences|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-multiple-preference-values-of-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences updated successfully|Inline|
|400|Bad Request|Preference invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-multiple-preference-values-of-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete multiple preferences for an app

<a id="opIdpreferences-delete-multiple-preference"></a>

> Code samples

```bash
curl 'https://cloud.example.com/ocs/v2.php/apps/provisioning_api/api/v1/config/users/string?configKeys%5B%5D=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/provisioning_api/api/v1/config/users/{appId}`

<h3 id="delete-multiple-preferences-for-an-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|ID of the app|
|configKeys[]|query|[string]|true|Keys to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-multiple-preferences-for-an-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preferences deleted successfully|Inline|
|400|Bad Request|Preference invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="delete-multiple-preferences-for-an-app-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_Capabilities">Capabilities</h2>
<!-- backwards compatibility -->
<a id="schemacapabilities"></a>
<a id="schema_Capabilities"></a>
<a id="tocScapabilities"></a>
<a id="tocscapabilities"></a>

```json
{
  "provisioning_api": {
    "version": "string",
    "AccountPropertyScopesVersion": 0,
    "AccountPropertyScopesFederatedEnabled": true,
    "AccountPropertyScopesPublishedEnabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provisioning_api|object|true|none|none|

<h2 id="tocS_GroupDetails">GroupDetails</h2>
<!-- backwards compatibility -->
<a id="schemagroupdetails"></a>
<a id="schema_GroupDetails"></a>
<a id="tocSgroupdetails"></a>
<a id="tocsgroupdetails"></a>

```json
{
  "id": "string",
  "displayname": "string",
  "usercount": true,
  "disabled": true,
  "canAdd": true,
  "canRemove": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|displayname|string|true|none|none|
|usercount|boolean \| integer(int64)|true|none|none|
|disabled|boolean \| integer(int64)|true|none|none|
|canAdd|boolean|true|none|none|
|canRemove|boolean|true|none|none|

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|

<h2 id="tocS_UserDetails">UserDetails</h2>
<!-- backwards compatibility -->
<a id="schemauserdetails"></a>
<a id="schema_UserDetails"></a>
<a id="tocSuserdetails"></a>
<a id="tocsuserdetails"></a>

```json
{
  "additional_mail": [
    "string"
  ],
  "additional_mailScope": [
    "v2-private"
  ],
  "address": "string",
  "addressScope": "v2-private",
  "avatarScope": "v2-private",
  "backend": "string",
  "backendCapabilities": {
    "setDisplayName": true,
    "setPassword": true
  },
  "biography": "string",
  "biographyScope": "v2-private",
  "display-name": "string",
  "displayname": "string",
  "displaynameScope": "v2-private",
  "email": "string",
  "emailScope": "v2-private",
  "enabled": true,
  "fediverse": "string",
  "fediverseScope": "v2-private",
  "groups": [
    "string"
  ],
  "headline": "string",
  "headlineScope": "v2-private",
  "id": "string",
  "language": "string",
  "firstLoginTimestamp": 0,
  "lastLoginTimestamp": 0,
  "lastLogin": 0,
  "locale": "string",
  "manager": "string",
  "notify_email": "string",
  "organisation": "string",
  "organisationScope": "v2-private",
  "phone": "string",
  "phoneScope": "v2-private",
  "profile_enabled": "string",
  "profile_enabledScope": "v2-private",
  "pronouns": "string",
  "pronounsScope": "v2-private",
  "quota": {
    "free": 0,
    "quota": 0,
    "relative": 0,
    "total": 0,
    "used": 0
  },
  "role": "string",
  "roleScope": "v2-private",
  "storageLocation": "string",
  "subadmin": [
    "string"
  ],
  "timezone": "string",
  "twitter": "string",
  "twitterScope": "v2-private",
  "bluesky": "string",
  "blueskyScope": "v2-private",
  "website": "string",
  "websiteScope": "v2-private"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional_mail|[string]|true|none|none|
|additional_mailScope|[[UserDetailsScope](#schemauserdetailsscope)]|false|none|none|
|address|string|true|none|none|
|addressScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|avatarScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|backend|string|true|none|none|
|backendCapabilities|object|true|none|none|
|biography|string|true|none|none|
|biographyScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|display-name|string|true|none|none|
|displayname|string|true|none|none|
|displaynameScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|email|string \| null|true|none|none|
|emailScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|enabled|boolean|false|none|none|
|fediverse|string|true|none|none|
|fediverseScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|groups|[string]|true|none|none|
|headline|string|true|none|none|
|headlineScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|id|string|true|none|none|
|language|string|true|none|none|
|firstLoginTimestamp|integer(int64)|true|none|none|
|lastLoginTimestamp|integer(int64)|true|none|none|
|lastLogin|integer(int64)|true|none|none|
|locale|string|true|none|none|
|manager|string|true|none|none|
|notify_email|string \| null|true|none|none|
|organisation|string|true|none|none|
|organisationScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|phone|string|true|none|none|
|phoneScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|profile_enabled|string|true|none|none|
|profile_enabledScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|pronouns|string|true|none|none|
|pronounsScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|quota|[UserDetailsQuota](#schemauserdetailsquota)|true|none|none|
|role|string|true|none|none|
|roleScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|storageLocation|string|false|none|none|
|subadmin|[string]|true|none|none|
|timezone|string|true|none|none|
|twitter|string|true|none|none|
|twitterScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|bluesky|string|true|none|none|
|blueskyScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|
|website|string|true|none|none|
|websiteScope|[UserDetailsScope](#schemauserdetailsscope)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|additional_mailScope|v2-private|
|additional_mailScope|v2-local|
|additional_mailScope|v2-federated|
|additional_mailScope|v2-published|
|addressScope|v2-private|
|addressScope|v2-local|
|addressScope|v2-federated|
|addressScope|v2-published|
|avatarScope|v2-private|
|avatarScope|v2-local|
|avatarScope|v2-federated|
|avatarScope|v2-published|
|biographyScope|v2-private|
|biographyScope|v2-local|
|biographyScope|v2-federated|
|biographyScope|v2-published|
|displaynameScope|v2-private|
|displaynameScope|v2-local|
|displaynameScope|v2-federated|
|displaynameScope|v2-published|
|emailScope|v2-private|
|emailScope|v2-local|
|emailScope|v2-federated|
|emailScope|v2-published|
|fediverseScope|v2-private|
|fediverseScope|v2-local|
|fediverseScope|v2-federated|
|fediverseScope|v2-published|
|headlineScope|v2-private|
|headlineScope|v2-local|
|headlineScope|v2-federated|
|headlineScope|v2-published|
|organisationScope|v2-private|
|organisationScope|v2-local|
|organisationScope|v2-federated|
|organisationScope|v2-published|
|phoneScope|v2-private|
|phoneScope|v2-local|
|phoneScope|v2-federated|
|phoneScope|v2-published|
|profile_enabledScope|v2-private|
|profile_enabledScope|v2-local|
|profile_enabledScope|v2-federated|
|profile_enabledScope|v2-published|
|pronounsScope|v2-private|
|pronounsScope|v2-local|
|pronounsScope|v2-federated|
|pronounsScope|v2-published|
|roleScope|v2-private|
|roleScope|v2-local|
|roleScope|v2-federated|
|roleScope|v2-published|
|twitterScope|v2-private|
|twitterScope|v2-local|
|twitterScope|v2-federated|
|twitterScope|v2-published|
|blueskyScope|v2-private|
|blueskyScope|v2-local|
|blueskyScope|v2-federated|
|blueskyScope|v2-published|
|websiteScope|v2-private|
|websiteScope|v2-local|
|websiteScope|v2-federated|
|websiteScope|v2-published|

<h2 id="tocS_UserDetailsGroupDisplayname">UserDetailsGroupDisplayname</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsgroupdisplayname"></a>
<a id="schema_UserDetailsGroupDisplayname"></a>
<a id="tocSuserdetailsgroupdisplayname"></a>
<a id="tocsuserdetailsgroupdisplayname"></a>

```json
{
  "id": "string",
  "displayname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|displayname|string|true|none|none|

<h2 id="tocS_UserDetailsQuota">UserDetailsQuota</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsquota"></a>
<a id="schema_UserDetailsQuota"></a>
<a id="tocSuserdetailsquota"></a>
<a id="tocsuserdetailsquota"></a>

```json
{
  "free": 0,
  "quota": 0,
  "relative": 0,
  "total": 0,
  "used": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|free|number(double) \| integer(int64)|false|none|none|
|quota|number(double) \| integer(int64) \| string|false|none|none|
|relative|number(double) \| integer(int64)|false|none|none|
|total|number(double) \| integer(int64)|false|none|none|
|used|number(double) \| integer(int64)|false|none|none|

<h2 id="tocS_UserDetailsScope">UserDetailsScope</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsscope"></a>
<a id="schema_UserDetailsScope"></a>
<a id="tocSuserdetailsscope"></a>
<a id="tocsuserdetailsscope"></a>

```json
"v2-private"
```
