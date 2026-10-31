<h1 id="userstatus">user_status v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

User status

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="userstatus-heartbeat">heartbeat</h1>

## Keep the status alive

<a id="opIdheartbeat-heartbeat"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/heartbeat \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "status": "string"
  }'
```

`PUT /ocs/v2.php/apps/user_status/api/v1/heartbeat`

> Body parameter

```json
{
  "status": "string"
}
```

<h3 id="keep-the-status-alive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» status|body|string|true|Only online, away|

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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online",
      "messageId": "string",
      "messageIsPredefined": true,
      "statusIsUserDefined": true
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

> 500 Response

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

<h3 id="keep-the-status-alive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status successfully updated|Inline|
|204|No Content|User has no status to keep alive|None|
|400|Bad Request|Invalid status to update|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|500|Internal Server Error||Inline|

<h3 id="keep-the-status-alive-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Private](#schemaprivate)|true|none|none|

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

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="userstatus-predefinedstatus">predefined_status</h1>

## Get all predefined messages

<a id="opIdpredefined_status-find-all"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/predefined_statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/user_status/api/v1/predefined_statuses`

<h3 id="get-all-predefined-messages-parameters">Parameters</h3>

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
      {
        "id": "string",
        "icon": "string",
        "message": "string",
        "clearAt": {
          "type": "period",
          "time": 0
        }
      }
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

<h3 id="get-all-predefined-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Predefined statuses returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-all-predefined-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Predefined](#schemapredefined)]|true|none|none|

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

<h1 id="userstatus-statuses">statuses</h1>

## Find statuses of users

<a id="opIdstatuses-find-all"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/user_status/api/v1/statuses`

Prefer $lastId over $offset: it does not require the database to scan and discard every preceding row on every call.

<h3 id="find-statuses-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64) \| null|false|Maximum number of statuses to find|
|offset|query|integer(int64) \| null|false|Offset for finding statuses|
|lastId|query|integer(int64) \| null|false|Id of the last status returned by the previous page; when given, keyset pagination is used and $offset is ignored|
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
      {
        "userId": "string",
        "message": "string",
        "icon": "string",
        "clearAt": 0,
        "status": "online"
      }
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

<h3 id="find-statuses-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statuses returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="find-statuses-of-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[[Public](#schemapublic)]|true|none|none|

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

## Find the status of a user

<a id="opIdstatuses-find"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/statuses/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/user_status/api/v1/statuses/{userId}`

<h3 id="find-the-status-of-a-user-parameters">Parameters</h3>

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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online"
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

<h3 id="find-the-status-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The user was not found|Inline|

<h3 id="find-the-status-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Public](#schemapublic)|true|none|none|

Status Code **401**

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

<h1 id="userstatus-userstatus">user_status</h1>

## Get the status of the current user

<a id="opIduser_status-get-status"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/user_status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/user_status/api/v1/user_status`

<h3 id="get-the-status-of-the-current-user-parameters">Parameters</h3>

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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online",
      "messageId": "string",
      "messageIsPredefined": true,
      "statusIsUserDefined": true
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

<h3 id="get-the-status-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The status was found successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|The user was not found|Inline|

<h3 id="get-the-status-of-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Private](#schemaprivate)|true|none|none|

Status Code **401**

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

## Update the status type of the current user

<a id="opIduser_status-set-status"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/user_status/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "statusType": "string"
  }'
```

`PUT /ocs/v2.php/apps/user_status/api/v1/user_status/status`

> Body parameter

```json
{
  "statusType": "string"
}
```

<h3 id="update-the-status-type-of-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» statusType|body|string|true|The new status type|

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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online",
      "messageId": "string",
      "messageIsPredefined": true,
      "statusIsUserDefined": true
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

<h3 id="update-the-status-type-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The status was updated successfully|Inline|
|400|Bad Request|The status type is invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-the-status-type-of-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Private](#schemaprivate)|true|none|none|

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

## Set the message to a predefined message for the current user

<a id="opIduser_status-set-predefined-message"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/user_status/message/predefined \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "messageId": "string",
    "clearAt": 0
  }'
```

`PUT /ocs/v2.php/apps/user_status/api/v1/user_status/message/predefined`

> Body parameter

```json
{
  "messageId": "string",
  "clearAt": 0
}
```

<h3 id="set-the-message-to-a-predefined-message-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» messageId|body|string|true|ID of the predefined message|
|» clearAt|body|integer(int64) \| null|false|When the message should be cleared|

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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online",
      "messageId": "string",
      "messageIsPredefined": true,
      "statusIsUserDefined": true
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

<h3 id="set-the-message-to-a-predefined-message-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The message was updated successfully|Inline|
|400|Bad Request|The clearAt or message-id is invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="set-the-message-to-a-predefined-message-for-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Private](#schemaprivate)|true|none|none|

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

## Set the message to a custom message for the current user

<a id="opIduser_status-set-custom-message"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/user_status/message/custom \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "statusIcon": "string",
    "message": "string",
    "clearAt": 0
  }'
```

`PUT /ocs/v2.php/apps/user_status/api/v1/user_status/message/custom`

> Body parameter

```json
{
  "statusIcon": "string",
  "message": "string",
  "clearAt": 0
}
```

<h3 id="set-the-message-to-a-custom-message-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|false|none|
|» statusIcon|body|string \| null|false|Icon of the status|
|» message|body|string \| null|false|Message of the status|
|» clearAt|body|integer(int64) \| null|false|When the message should be cleared|

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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online",
      "messageId": "string",
      "messageIsPredefined": true,
      "statusIsUserDefined": true
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

<h3 id="set-the-message-to-a-custom-message-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The message was updated successfully|Inline|
|400|Bad Request|The clearAt or icon is invalid or the message is too long|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|404|Not Found|No status for the current user|Inline|

<h3 id="set-the-message-to-a-custom-message-for-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Private](#schemaprivate)|true|none|none|

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

## Clear the message of the current user

<a id="opIduser_status-clear-message"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/user_status/message \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/user_status/api/v1/user_status/message`

<h3 id="clear-the-message-of-the-current-user-parameters">Parameters</h3>

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

<h3 id="clear-the-message-of-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message cleared successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="clear-the-message-of-the-current-user-responseschema">Response Schema</h3>

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

## Revert the status to the previous status

<a id="opIduser_status-revert-status"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/user_status/api/v1/user_status/revert/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/user_status/api/v1/user_status/revert/{messageId}`

<h3 id="revert-the-status-to-the-previous-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|ID of the message to delete|
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
      "userId": "string",
      "message": "string",
      "icon": "string",
      "clearAt": 0,
      "status": "online",
      "messageId": "string",
      "messageIsPredefined": true,
      "statusIsUserDefined": true
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

<h3 id="revert-the-status-to-the-previous-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status reverted|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="revert-the-status-to-the-previous-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Private](#schemaprivate) \| array|true|none|none|
|» » *anyOf*|[Private](#schemaprivate)|false|none|none|
|» » *anyOf*|array|false|none|none|

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
  "user_status": {
    "enabled": true,
    "restore": true,
    "supports_emoji": true,
    "supports_busy": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_status|object|true|none|none|

<h2 id="tocS_ClearAt">ClearAt</h2>
<!-- backwards compatibility -->
<a id="schemaclearat"></a>
<a id="schema_ClearAt"></a>
<a id="tocSclearat"></a>
<a id="tocsclearat"></a>

```json
{
  "type": "period",
  "time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|time|integer(int64) \| [ClearAtTimeType](#schemaclearattimetype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|period|
|type|end-of|

<h2 id="tocS_ClearAtTimeType">ClearAtTimeType</h2>
<!-- backwards compatibility -->
<a id="schemaclearattimetype"></a>
<a id="schema_ClearAtTimeType"></a>
<a id="tocSclearattimetype"></a>
<a id="tocsclearattimetype"></a>

```json
"day"
```

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

<h2 id="tocS_Predefined">Predefined</h2>
<!-- backwards compatibility -->
<a id="schemapredefined"></a>
<a id="schema_Predefined"></a>
<a id="tocSpredefined"></a>
<a id="tocspredefined"></a>

```json
{
  "id": "string",
  "icon": "string",
  "message": "string",
  "clearAt": {
    "type": "period",
    "time": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|icon|string|true|none|none|
|message|string|true|none|none|
|clearAt|object \| null|true|none|none|

<h2 id="tocS_Private">Private</h2>
<!-- backwards compatibility -->
<a id="schemaprivate"></a>
<a id="schema_Private"></a>
<a id="tocSprivate"></a>
<a id="tocsprivate"></a>

```json
{
  "userId": "string",
  "message": "string",
  "icon": "string",
  "clearAt": 0,
  "status": "online",
  "messageId": "string",
  "messageIsPredefined": true,
  "statusIsUserDefined": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|message|string \| null|true|none|none|
|icon|string \| null|true|none|none|
|clearAt|integer(int64) \| null|true|none|none|
|status|[Type](#schematype)|true|none|none|
|messageId|string \| null|true|none|none|
|messageIsPredefined|boolean|true|none|none|
|statusIsUserDefined|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|online|
|status|away|
|status|dnd|
|status|busy|
|status|offline|
|status|invisible|

<h2 id="tocS_Public">Public</h2>
<!-- backwards compatibility -->
<a id="schemapublic"></a>
<a id="schema_Public"></a>
<a id="tocSpublic"></a>
<a id="tocspublic"></a>

```json
{
  "userId": "string",
  "message": "string",
  "icon": "string",
  "clearAt": 0,
  "status": "online"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|message|string \| null|true|none|none|
|icon|string \| null|true|none|none|
|clearAt|integer(int64) \| null|true|none|none|
|status|[Type](#schematype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|online|
|status|away|
|status|dnd|
|status|busy|
|status|offline|
|status|invisible|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
"online"
```
