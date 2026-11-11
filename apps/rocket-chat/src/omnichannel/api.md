<h1 id="omnichannel">Omnichannel v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="omnichannel-omnichannel-users">Omnichannel Users</h1>

## Get List of Agents or Managers

<a id="opIdget-api-v1-livechat-users-type"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/users/agent \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/users/{type}`

* If the `type` is `manager`, permission required: `view-livechat-manager`.
* If the `type` is `agent`, permission required: at least one of `transfer-livechat-guest` or `edit-omnichannel-contact`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.2.0             | Added support to pagination       |
|0.42.0            | Added       |

<h3 id="get-list-of-agents-or-managers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|type|path|string|true|The type of user that you want to register. The value can either be `agent` or `manager`.|
|onlyAvailable|query|boolean|false|When set to `true`, it only list agents whose [livechat status](https://docs.rocket.chat/docs/omnichannel-users#edit-agent) (`statusLivechat`) is `available`.|
|showIdleAgents|query|boolean|false|When set to `false`, offline agents will be excluded from the response. This filter does not apply to bots. All bot agents will be returned in the response.|
|excludeId|query|string|false|The ID of a specific agent to exclude from the list.|
|text|query|string|false|Enter the text you want to filter the search result with.|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "_id": "XLzGrYF9L2miSpPHP",
      "username": "dialog.bot",
      "status": "offline",
      "statusLivechat": "not-available",
      "name": "Dialog Bot",
      "emails": [
        {
          "address": "dialog.bot@test.com",
          "verified": true
        }
      ],
      "livechat": null,
      "departments": []
    },
    {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "john.doe",
      "status": "offline",
      "statusLivechat": "available",
      "name": "John Doe",
      "emails": [
        {
          "address": "john.doe@gmail.com",
          "verified": true
        }
      ],
      "livechat": {
        "maxNumberSimultaneousChat": ""
      },
      "departments": [
        "64181a0728384134ed600dcc"
      ]
    },
    {
      "_id": "hFDuCPam7sWziWFYa",
      "username": "hookdeck.write",
      "status": "offline",
      "statusLivechat": "not-available",
      "name": "Hookdeck Write",
      "emails": [
        {
          "address": "hookdeckwrite@gmail.com",
          "verified": true
        }
      ],
      "livechat": null,
      "departments": []
    },
    {
      "_id": "stjxrXYBWy3EcDugH",
      "username": "rocket.agent",
      "status": "offline",
      "statusLivechat": "not-available",
      "name": "Rocket Agent",
      "emails": [
        {
          "address": "rocket.agent@rocket.chat",
          "verified": false
        }
      ],
      "livechat": {
        "maxNumberSimultaneousChat": ""
      },
      "departments": [
        "64181a0728384134ed600dcc"
      ]
    }
  ]
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

<h3 id="get-list-of-agents-or-managers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-agents-or-managers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» statusLivechat|string|false|none|none|
|» name|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» livechat|string|false|none|none|
|» departments|[string]|false|none|none|

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

## Register New Agent or Manager

<a id="opIdpost-api-v1-livechat-users-:type"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/users/agent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "username": "john.doe"
  }'
```

`POST /api/v1/livechat/users/{type}`

Register a new <a href='https://docs.rocket.chat/use-rocket.chat/omnichannel/agents' target='_blank'>agent</a> or <a href='https://docs.rocket.chat/use-rocket.chat/omnichannel/managers' target='_blank'>manager</a>.
Permission required:
* If the `type` is `agent`: `manage-livechat-agents`.
* If the `type` is `manager`: `manage-livechat-managers`.

Requests without the required permission return a `403` response.

### Changelog
| Version      | Description |
| ------------ | ------------|
|8.9.0         | Required `manage-livechat-agents` for agents and `manage-livechat-managers` for managers. |
|0.42.0        | Added       |

> Body parameter

```json
{
  "username": "john.doe"
}
```

<h3 id="register-new-agent-or-manager-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|type|path|string|true|The type of user that you want to register. The value can either be `agent` or `manager`.|
|body|body|object|false|none|
|» username|body|string|true|The user name that you want to register.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "SQafHvoFPuB57NmBD",
    "username": "john.doe"
  },
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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="register-new-agent-or-manager-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="register-new-agent-or-manager-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
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

## Get Agent or Manager Information

<a id="opIdget-api-v1-livechat-users-type-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/users/string/SQafHvoFPuB57NmBD \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/users/{type}/{_id}`

Get information about a particular agent or a manager.
Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.42.0            | Added       |

<h3 id="get-agent-or-manager-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|type|path|string|true|The type of user. The value can either be `agent` or `manager`.|
|_id|path|string|true|The user ID.|

> Example responses

> 200 Response

```json
{
  "user": {
    "_id": "SQafHvoFPuB57NmBD",
    "username": "john.doe",
    "name": "John Doe",
    "status": "offline",
    "statusLivechat": "available",
    "emails": [
      {
        "address": "john.doe@test.com",
        "verified": "true"
      }
    ],
    "livechat": {
      "maxNumberSimultaneousChat": ""
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-agent-or-manager-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-agent-or-manager-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» status|string|false|none|none|
|» statusLivechat|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|string|false|none|none|
|» livechat|object|false|none|none|
|» » maxNumberSimultaneousChat|string|false|none|none|
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

## Remove Agent or Manager

<a id="opIddelete-api-v1-livechat-users-type-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/users/string/SQafHvoFPuB57NmBD \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/livechat/users/{type}/{_id}`

Remove a user as an agent or a manager.
Permission required:
* If the `type` is `agent`: `manage-livechat-agents`.
* If the `type` is `manager`: `manage-livechat-managers`.

Requests without the required permission return a `403` response.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|8.9.0             | Required `manage-livechat-agents` for agents and `manage-livechat-managers` for managers. |
|0.42.0            | Added       |

<h3 id="remove-agent-or-manager-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|type|path|string|true|The type of user. The value can either be `agent` or `manager`.|
|_id|path|string|true|The user ID.|

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

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="remove-agent-or-manager-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-agent-or-manager-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-agents">Omnichannel Agents</h1>

## Get Agent Information

<a id="opIdget-api-v1-livechat-agent"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/agent.info/zRAeTszXor8CCPceB/iNKE8a6k6cjbqWhWd \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/agent.info/{rid}/{token}`

Get the Livechat agent data according to the path variables. To get the `rid` and `token` values, call the <a href="https://developer.rocket.chat/apidocs/get-rooms" target="_blank">Get Rooms</a> endpoint to retrieve the details of all rooms.

<h3 id="get-agent-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|path|string|true|The room ID.|
|token|path|string|true|The visitor token.|

> Example responses

> 200 Response

```json
{
  "agent": {
    "_id": "XycfA5CetCPuEjqxw",
    "emails": [
      {
        "address": "agent@rocket.chat",
        "verified": true
      }
    ],
    "status": "online",
    "name": "testAgent",
    "username": "test.agent",
    "livechat": {
      "maxNumberSimultaneousChat": "5"
    }
  },
  "success": true
}
```

<h3 id="get-agent-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-agent-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|object|false|none|none|
|» _id|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» status|string|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|» livechat|object|false|none|none|
|» » maxNumberSimultaneousChat|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Next Agent Information

<a id="opIdget-api-v1-livechat-agent.next"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/agent.next/string \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/agent.next/{token}`

Get information about the next available agent for an incoming conversation. This endpoint returns the available agents who have not been assigned to any chat yet. To get the `token` value, call the <a href="https://developer.rocket.chat/apidocs/get-rooms" target="_blank">Get Rooms</a> endpoint to retrieve the details of all rooms.

<h3 id="get-next-agent-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|The visitor token.|

> Example responses

> 200 Response

```json
{
  "agent": {
    "_id": "7Gm3PoFCJWTCJ68XR",
    "emails": [
      {
        "address": "agent@rocket.chat",
        "verified": true
      }
    ],
    "name": "Livechat Agent",
    "username": "livechat.agent"
  },
  "success": true
}
```

<h3 id="get-next-agent-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-next-agent-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|object|false|none|none|
|» _id|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» name|string|false|none|none|
|» username|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Agent Info

<a id="opIdpost-api-v1-livechat-agents.saveInfo"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/agents.saveInfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "agentId": "4zqiF9BSWmBTe6yvt",
    "agentData": {},
    "agentDepartments": [
      ""
    ]
  }'
```

`POST /api/v1/livechat/agents.saveInfo`

Update an Omnichannel agent's information. Permission required: `manage-livechat-agents`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.11.0            | Added       |

> Body parameter

```json
{
  "agentId": "4zqiF9BSWmBTe6yvt",
  "agentData": {},
  "agentDepartments": [
    ""
  ]
}
```

<h3 id="update-agent-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» agentId|body|string|true|Enter the agent's ID.|
|» agentData|body|object|true|Enter the agent data that you want to update.|
|» agentDepartments|body|[string]|true|Enter the agent's departments. You can leave it as an empty string if you don't want to add any departments.|

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

<h3 id="update-agent-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-agent-info-responseschema">Response Schema</h3>

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

## Update Agent Status

<a id="opIdpost-api-v1-livechat-agent.status"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/agent.status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "agentId": "J6Q87AnWP5aNc9xhx"
  }'
```

`POST /api/v1/livechat/agent.status`

Update the agent's livechat status. If the agent is available, using this endpoint will set the status as unavailable, and vice versa. Permission required: `view-l-room`. 
If you want to update the status of another agent, you need the `manage-livechat-agents` permission. If you have configured business hours, the agent status cannot be updated outside of business hours.

> Body parameter

```json
{
  "agentId": "J6Q87AnWP5aNc9xhx"
}
```

<h3 id="update-agent-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» agentId|body|string|false|Enter this parameter if you want to update the livechat status of another agent. If this parameter is not provided, the agent that is calling the endpoint will be updated.|

> Example responses

> 200 Response

```json
{
  "status": "not-available",
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

<h3 id="update-agent-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="update-agent-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-monitors">Omnichannel Monitors</h1>

## Get List of Monitors

<a id="opIdget-api-v1-livechat-monitors"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/monitors \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/monitors`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Retrieves a list of <a href='https://docs.rocket.chat/docs/monitors' target='_blank'>monitors</a>.
Permission required: `manage-livechat-monitors`

<h3 id="get-list-of-monitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|text|query|string|false|Filter the result with the text.|

> Example responses

> 200 Response

```json
{
  "monitors": [
    {
      "_id": "gxcJTYapi5mPxuAme",
      "username": "Bruno",
      "emails": [
        {
          "address": "",
          "verified": false
        }
      ],
      "status": "offline",
      "name": "Bruno",
      "statusLivechat": "not-available"
    },
    {
      "_id": "QDHWqcubZunM8C4NR",
      "username": "gomes",
      "emails": [
        {
          "address": "",
          "verified": true
        }
      ],
      "status": "offline",
      "name": " Gomes",
      "statusLivechat": "not-available"
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="get-list-of-monitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-monitors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monitors|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» » verified|boolean|false|none|none|
|» status|string|false|none|none|
|» name|string|false|none|none|
|» statusLivechat|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get a Monitor

<a id="opIdget-api-v1-livechat-monitors-username"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/monitors/1-agent \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/monitors/{username}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get details of a specific monitor.
Permission required: `manage-livechat-monitors`

<h3 id="get-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|username|path|string|true|The username of the person monitoring.|

> Example responses

> 200 Response

```json
{
  "_id": "RSb7exHJsiKqwRjPF",
  "username": "1-agent",
  "emails": [
    {
      "address": "1-agent@g.c",
      "verified": false
    }
  ],
  "status": "offline",
  "name": "1-agent",
  "statusLivechat": "not-available",
  "livechat": {
    "maxNumberSimultaneousChat": "4"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-a-monitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|username|string|false|none|none|
|emails|[object]|false|none|none|
|» address|string|false|none|none|
|» verified|boolean|false|none|none|
|status|string|false|none|none|
|name|string|false|none|none|
|statusLivechat|string|false|none|none|
|livechat|object|false|none|none|
|» maxNumberSimultaneousChat|string|false|none|none|
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

## Delete a Monitor

<a id="opIdpost-api-v1-livechat-monitors.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/monitors.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "username": "test.user"
  }'
```

`POST /api/v1/livechat/monitors.delete`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Delete an Omnichannel monitor. Permission required: `manage-livechat-monitors`

> Body parameter

```json
{
  "username": "test.user"
}
```

<h3 id="delete-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» username|body|string|true|Enter the username that you want to remove as the monitor.|

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
  "errorType": "error-invalid-params",
  "error": "must have required property 'username'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-a-monitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Monitor

<a id="opIdpost-api-v1-livechat-monitors.create"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/monitors.create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "username": "cat.kat"
  }'
```

`POST /api/v1/livechat/monitors.create`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Add a user as monitor. Permission required: `manage-livechat-monitors`

> Body parameter

```json
{
  "username": "cat.kat"
}
```

<h3 id="create-a-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» username|body|string|true|Enter the username that you want to add as monitor.|

> Example responses

> 200 Response

```json
{
  "_id": "J6Q87AnWP5aNc9xhx",
  "username": "cat.kat",
  "roles": [
    "user",
    "livechat-agent"
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'username'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-a-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-a-monitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|username|string|false|none|none|
|roles|[string]|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-visitors">Omnichannel Visitors</h1>

## Register Livechat Visitor

<a id="opIdpost-api-v1-livechat-visitor"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "visitor": {
      "name": "Livechat Visitor",
      "email": "visitor@rocket.chat",
      "department": "Support",
      "token": "iNKE8a6k6cjbqWhWd",
      "phone": "55 51 5555-5555",
      "customFields": [
        {
          "key": "address",
          "value": "Rocket.Chat street",
          "overwrite": true
        }
      ]
    }
  }'
```

`POST /api/v1/livechat/visitor`

Register a visitor's information before creating a new Omnichannel room. You can set basic information such as name, phone, custom fields, and the initial department.

The response may include `externalIds` when the visitor has been linked to an external system by an omnichannel app. This field cannot be set through this endpoint's request body.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.4.0   | Added `externalIds` field to the visitor response. |

> Body parameter

```json
{
  "visitor": {
    "name": "Livechat Visitor",
    "email": "visitor@rocket.chat",
    "department": "Support",
    "token": "iNKE8a6k6cjbqWhWd",
    "phone": "55 51 5555-5555",
    "customFields": [
      {
        "key": "address",
        "value": "Rocket.Chat street",
        "overwrite": true
      }
    ]
  }
}
```

<h3 id="register-livechat-visitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» visitor|body|object|true|Enter the body parameters in the `visitor` object.|
|» » name|body|string|false|The visitor's name.|
|» » email|body|string|false|The visitor's email.|
|» » department|body|string|false|The department that the visitor wants to register to.|
|» » token|body|string|true|Enter a random unique string as the visitor token.|
|» » phone|body|string|false|The visitor's phone number.|
|» » username|body|string|false|The agent's username.|
|» » customFields|body|[object]|false|Enter the custom field key, value, and whether you want to overwrite this information.|
|» » » key|body|string|false|none|
|» » » value|body|string|false|none|
|» » » overwrite|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "visitor": {
    "_id": "6a22b1765528fa64dd29de70",
    "username": "guest-10",
    "status": "online",
    "ts": "2026-06-05T11:22:30.664Z",
    "_updatedAt": "2026-06-05T11:22:30.665Z",
    "name": "Postman Test Visitor",
    "phone": [
      {
        "phoneNumber": "+15551234567"
      }
    ],
    "token": "test-token-12345",
    "visitorEmails": [
      {
        "address": "postman-test@example.com"
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
  "error": "Match error: Missing key 'visitor'"
}
```

<h3 id="register-livechat-visitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="register-livechat-visitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visitor|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» ts|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» name|string|false|none|none|
|» phone|[object]|false|none|none|
|» » phoneNumber|string|false|none|none|
|» token|string|false|none|none|
|» visitorEmails|[object]|false|none|none|
|» » address|string|false|none|none|
|» department|string|false|none|none|
|» externalIds|[object]|false|none|Channel-specific external identifiers (e.g. WhatsApp BSUID). Set by omnichannel apps via apps-engine, not through this REST endpoint's request body.|
|» » appId|string|false|none|ID of the omnichannel app that registered this identifier.|
|» » entityId|string|false|none|External identifier value (e.g. Meta BSUID).|
|» » metadata|object|false|none|Optional app-specific metadata (e.g. WhatsApp username).|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Visitor Information

<a id="opIdget-api-v1-livechat-visitor-token"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitor/string \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/visitor/{token}`

Get the details of a specific visitor.

The response may include `externalIds` when the visitor has been linked to an external system by an omnichannel app.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.4.0   | Added `externalIds` field to the visitor response. |

<h3 id="get-visitor-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|The visitor token.|

> Example responses

> 200 Response

```json
{
  "visitor": {
    "_id": "6a22b1765528fa64dd29de70",
    "username": "guest-10",
    "_updatedAt": "2026-06-05T11:22:30.665Z",
    "token": "test-token-12345",
    "phone": [
      {
        "phoneNumber": "+15551234567"
      }
    ],
    "visitorEmails": [
      {
        "address": "postman-test@example.com"
      }
    ],
    "name": "Postman Test Visitor"
  },
  "success": true
}
```

<h3 id="get-visitor-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-visitor-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visitor|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» token|string|false|none|none|
|» phone|[object]|false|none|none|
|» » phoneNumber|string|false|none|none|
|» visitorEmails|[object]|false|none|none|
|» » address|string|false|none|none|
|» name|string|false|none|none|
|» livechatData|object|false|none|none|
|» » address|string|false|none|none|
|» externalIds|[object]|false|none|Channel-specific external identifiers (e.g. WhatsApp BSUID). Set by omnichannel apps via apps-engine, not through this REST endpoint's request body.|
|» » appId|string|false|none|ID of the omnichannel app that registered this identifier.|
|» » entityId|string|false|none|External identifier value (e.g. Meta BSUID).|
|» » metadata|object|false|none|Optional app-specific metadata (e.g. WhatsApp username).|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Visitor

<a id="opIddelete-api-v1-livechat-visitor-token"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitor/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/livechat/visitor/{token}`

<h3 id="delete-visitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|The visitor token.|

> Example responses

> 200 Response

```json
{
  "visitor": {
    "_id": "47Dajwh9DjpnTAugW",
    "ts": "2021-07-18T13:28:38.962Z"
  },
  "success": true
}
```

<h3 id="delete-visitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="delete-visitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visitor|object|false|none|none|
|» _id|string|false|none|none|
|» ts|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Visitor Information by ID

<a id="opIdget-api-v1-livechat-visitor.info"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/visitors.info?visitorId=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitors.info`

Retrieve information for a Livechat visitor by ID.

Permission required: `view-l-room`

The response does not include the visitor `token`. To obtain a token, register or update the visitor using <a href='https://developer.rocket.chat/apidocs/register-a-new-livechat-visitor' target='_blank'>Register a New Livechat Visitor</a>, which returns the token in the response.

The response may include `externalIds` when the visitor has been linked to an external system by an omnichannel app (e.g. WhatsApp BSUID). This field cannot be set through REST registration endpoints.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.5.0   | The `token` field is no longer returned in the response. Retrieve the token from the visitor registration endpoint instead. |
| 8.4.0   | Added `externalIds` field to the visitor response. |

<h3 id="get-visitor-information-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|visitorId|query|string|true|The visitor ID.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "visitor": {
    "_id": "6a22b1765528fa64dd29de70",
    "username": "guest-10",
    "status": "online",
    "ts": "2026-06-05T11:22:30.664Z",
    "_updatedAt": "2026-06-05T11:22:30.665Z",
    "name": "Postman Test Visitor",
    "phone": [
      {
        "phoneNumber": "+15551234567"
      }
    ],
    "visitorEmails": [
      {
        "address": "postman-test@example.com"
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
  "error": "must have required property 'visitorId' [error-invalid-params]",
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

<h3 id="get-visitor-information-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-visitor-information-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visitor|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» ts|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» name|string|false|none|none|
|» phone|[object]|false|none|none|
|» » phoneNumber|string|false|none|none|
|» visitorEmails|[object]|false|none|none|
|» » address|string|false|none|none|
|» department|string|false|none|none|
|» externalIds|[object]|false|none|Channel-specific external identifiers (e.g. WhatsApp BSUID). Set by omnichannel apps via apps-engine, not through this REST endpoint's request body.|
|» » appId|string|false|none|ID of the omnichannel app that registered this identifier.|
|» » entityId|string|false|none|External identifier value (e.g. Meta BSUID).|
|» » metadata|object|false|none|Optional app-specific metadata (e.g. WhatsApp username).|
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

## Get Open Conversation of a Visitor

<a id="opIdget-api-v1-livechat-visitor-token-room"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitor/string/room \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitor/{token}/room`

Retrieve open conversations associated with a particular visitor.

<h3 id="get-open-conversation-of-a-visitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|token|path|string|true|The visitor token.|

> Example responses

> 200 Response

```json
{
  "rooms": [
    {
      "_id": "D2hej3mmvkwyB4HR6",
      "t": "l",
      "cl": false,
      "servedBy": {
        "_id": "XycfA5CetCPuEjqxw",
        "username": "kim.jane",
        "ts": "2021-07-18T11:50:38.822Z"
      }
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

<h3 id="get-open-conversation-of-a-visitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-open-conversation-of-a-visitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» cl|boolean|false|none|none|
|» servedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » ts|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Visitors by Term

<a id="opIdget-api-v1-livechat-visitors-search"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/visitors.search?term=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitors.search`

Search Livechat visitors using a specific term.

<h3 id="search-visitors-by-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|term|query|string|true|The visitor's name, username, email, or phone.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|Sort the results by ascending (`1`) or descending (`-1`) order. The following options are available:<br> * `ts`: Sort by timestamp. For example, `sort={"ts":1}` or `sort={"ts":-1}`. By default, results are sorted in descending order of timestamp.<br> * `lastChat.ts`: Last chat timestamp. For example, `sort={"lastChat.ts":1}` or `sort={"lastChat":-1}`.<br> * `name`: Visitor name. For example, `sort={"name":1}` or `sort={"name":-1}`.<br> * `username`: Visitor username. For example, `sort={"username":1}` or `sort={"username":-1}`.|

> Example responses

> 200 Response

```json
{
  "visitors": [
    {
      "_id": "6410749f28384134ed600ce4",
      "username": "guest-14",
      "name": "James",
      "visitorEmails": [
        {
          "address": "pilebe6631@kaudat.com"
        }
      ],
      "lastChat": {
        "_id": "eJ5ZzeT2XkLtcBkMM",
        "ts": "2023-03-14T13:21:02.239Z"
      }
    },
    {
      "_id": "63db8d4990fe6eda42ad429a",
      "username": "guest-3",
      "name": "James",
      "visitorEmails": [
        {
          "address": "f.r@rocket.chat"
        }
      ],
      "lastChat": {
        "_id": "82htiMFZLCtvRFqZi",
        "ts": "2023-02-06T12:34:53.392Z"
      }
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'term' [error-invalid-params]",
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

<h3 id="search-visitors-by-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="search-visitors-by-term-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|visitors|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» visitorEmails|[object]|false|none|none|
|» » address|string|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
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

<aside class="success">
This operation does not require authentication
</aside>

## Get Pages Visited by Livechat Visitor

<a id="opIdget-api-v1-livechat-visitors.pagesVisited-roomId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitors.pagesVisited/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitors.pagesVisited/{roomId}`

<h3 id="get-pages-visited-by-livechat-visitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|path|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "pages": [
    {
      "_id": "6523fbf5a2f73c7460e18d60",
      "t": "livechat_navigation_history",
      "ts": "2023-10-09T13:11:17.968Z",
      "msg": "Document - https://s3.amazonaws.com/uploads.use1.cloud.rocket.cht.html%22",
      "u": {
        "_id": "rocket.cat",
        "username": "rocket.cat",
        "name": "Rocket.Cat"
      },
      "groupable": false,
      "navigation": {
        "page": {
          "change": "url",
          "title": "Document",
          "location": {
            "href": "https://s3.amazonaws.com/uploads.use1.cloud.rocket.cht.html%22"
          }
        },
        "token": "54fc5544030bcecda053311cb6b98920bdf953f242c12"
      },
      "expireAt": 1699449077968,
      "_updatedAt": "2023-10-09T13:12:00.608Z",
      "rid": "MmGnqizEa8pvc9LRg"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-pages-visited-by-livechat-visitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-pages-visited-by-livechat-visitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[object]|false|none|none|
|» _id|string|false|none|none|
|» t|string|false|none|none|
|» ts|string|false|none|none|
|» msg|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» groupable|boolean|false|none|none|
|» navigation|object|false|none|none|
|» » page|object|false|none|none|
|» » » change|string|false|none|none|
|» » » title|string|false|none|none|
|» » » location|object|false|none|none|
|» » » » href|string|false|none|none|
|» » token|string|false|none|none|
|» expireAt|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|» rid|string|false|none|none|
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

## Get Livechat Visitor Chat History

<a id="opIdget-api-v1-livechat-visitors.chatHistory-room-roomId-visitor-visitorId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitors.chatHistory/room/string/visitor/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitors.chatHistory/room/{roomId}/visitor/{visitorId}`

Get the chat history of a Livechat visitor. The response does not include the visitor `token` in the `v` and `lastMessage` objects.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Removed the visitor `token` from `v` and `lastMessage`. |

<h3 id="get-livechat-visitor-chat-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|roomId|path|string|true|The room ID.|
|visitorId|path|string|true|The visitor ID.|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "_id": "hhMKhHnnbY79mGs9K",
      "msgs": 2,
      "usersCount": 1,
      "lm": "2021-07-22T17:17:04.937Z",
      "fname": "Maria",
      "t": "l",
      "ts": "2021-07-22T17:17:04.216Z",
      "departmentId": "CAJioQNAvLnYWTy8i",
      "v": {
        "_id": "QyBAKC5Wc8tcv6cco",
        "username": "guest-537",
        "status": "online",
        "lastMessageTs": "2021-07-22T17:17:04.937Z"
      },
      "cl": false,
      "open": true,
      "_updatedAt": "2021-07-22T17:17:05.078Z",
      "departmentAncestors": [
        "sriw2wmP2Zz2pPrre"
      ],
      "lastMessage": {
        "_id": "YfrxZ6gmaYLpPTxFP",
        "rid": "hhMKhHnnbY79mGs9K",
        "msg": "hi",
        "alias": "Maria",
        "ts": "2021-07-22T17:17:04.937Z",
        "u": {
          "_id": "QyBAKC5Wc8tcv6cco",
          "username": "guest-537",
          "name": "Maria"
        },
        "unread": true,
        "_updatedAt": "2021-07-22T17:17:05.044Z",
        "urls": [],
        "mentions": [],
        "channels": [],
        "md": [
          {
            "type": "PARAGRAPH",
            "value": [
              {
                "type": "PLAIN_TEXT",
                "value": "hi"
              }
            ]
          }
        ],
        "newRoom": false,
        "showConnecting": true
      },
      "metrics": {
        "reaction": {
          "fd": "2021-07-22T17:17:04.449Z",
          "ft": 0.233,
          "tt": 0.233
        },
        "response": {
          "avg": 0.233,
          "fd": "2021-07-22T17:17:04.449Z",
          "ft": 0.233,
          "total": 1,
          "tt": 0.233
        },
        "v": {
          "lq": "2021-07-22T17:17:04.937Z"
        }
      },
      "waitingResponse": true
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-livechat-visitor-chat-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-livechat-visitor-chat-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[object]|false|none|none|
|» _id|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» lm|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» ts|string|false|none|none|
|» departmentId|string|false|none|none|
|» v|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » status|string|false|none|none|
|» » lastMessageTs|string|false|none|none|
|» cl|boolean|false|none|none|
|» open|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» departmentAncestors|[string]|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » alias|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » unread|boolean|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» » newRoom|boolean|false|none|none|
|» » showConnecting|boolean|false|none|none|
|» metrics|object|false|none|none|
|» » reaction|object|false|none|none|
|» » » fd|string|false|none|none|
|» » » ft|number|false|none|none|
|» » » tt|number|false|none|none|
|» » response|object|false|none|none|
|» » » avg|number|false|none|none|
|» » » fd|string|false|none|none|
|» » » ft|number|false|none|none|
|» » » total|integer|false|none|none|
|» » » tt|number|false|none|none|
|» » v|object|false|none|none|
|» » » lq|string|false|none|none|
|» waitingResponse|boolean|false|none|none|
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

## Search Visitor Chat

<a id="opIdget-api-v1-livechat-visitors.searchChats-room-roomId-visitor-visitorId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitors.searchChats/room/string/visitor/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitors.searchChats/room/{roomId}/visitor/{visitorId}`

Get the Livechat chats for a visitor. Set `closedChatsOnly` to `true` to return closed chats, and `servedChatsOnly` to `true` to return chats joined by an agent.

The response omits the visitor `token` from `v` and from `closingMessage`.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Removed the visitor `token` from `v` and `closingMessage`. |

<h3 id="search-visitor-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|Sort the events in the ascending (`1`) or descending (`-1`) order. By default, the result is sorted in descending order. The most recent chats are returned first. Enter the value as: `sort[ts]=1` or `sort[ts]=-1`. Here `ts` refers to timestamp.|
|searchText|query|string|false|Enter the text to search for within the chat.|
|closedChatsOnly|query|string|false|Filter the results to display only closed chats. The value can be `"true"` or `"false"`.|
|servedChatsOnly|query|string|false|Filter the results to display only chats that are joined by agents. The value can be `"true"` or `"false"`.|
|source|query|string|false|Filter the results by the source of the chat. The value can be: `widget`, `sms`, `api`, `email`, `app`, `other`.|
|roomId|path|string|true|The room ID.|
|visitorId|path|string|true|The visitor ID.|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "_id": "hhMKhHnnbY79mGs9K",
      "msgs": 2,
      "fname": "Maria",
      "ts": "2021-07-22T17:17:04.216Z",
      "v": {
        "_id": "QyBAKC5Wc8tcv6cco",
        "username": "guest-537",
        "status": "online",
        "lastMessageTs": "2021-07-22T17:17:04.937Z"
      }
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="search-visitor-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="search-visitor-chat-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[object]|false|none|none|
|» _id|string|false|none|none|
|» msgs|integer|false|none|none|
|» fname|string|false|none|none|
|» ts|string|false|none|none|
|» v|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » status|string|false|none|none|
|» » lastMessageTs|string|false|none|none|
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

## Autocomplete Visitors

<a id="opIdget-api-v1-livechat-visitors.autocomplete"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/visitors.autocomplete?selector=%7B%22exceptions%22%3A%5B%5D%2C%22term%22%3A%22Jane%22%7D' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/visitors.autocomplete`

Search for visitors by name.

Permission required: `view-l-room`


### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `conditions` field from the `selector` parameter.       |
| 8.8.0   | Deprecated the `conditions` field in the `selector` parameter. |

<h3 id="autocomplete-visitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|selector|query|string|true|A JSON string containing the search `term` and an optional array of visitor IDs to exclude in `exceptions`.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "6400be90fa0ed7dd90509300",
      "username": "guest-5",
      "name": "Jane",
      "custom_name": "guest-5 - An agent"
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

<h3 id="autocomplete-visitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-visitors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|» custom_name|string|false|none|none|
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

## Set Visitor's Status

<a id="opIdpost-api-v1-livechat-visitors.status"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitor.status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "54fc5544030bcecda0533",
    "status": "busy"
  }'
```

`POST /api/v1/livechat/visitor.status`

Update an Omnichannel visitor's status in their conversations. The new status appears on all of the visitor's conversations, including conversations waiting in the queue. The status saved on the visitor's record doesn't change.

### Changelog
| Version | Description |
| ------- | ----------- |
| 0.74.0  | Added       |

> Body parameter

```json
{
  "token": "54fc5544030bcecda0533",
  "status": "busy"
}
```

<h3 id="set-visitors-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|The visitor token.|
|» status|body|string|true|The visitor's new status. Use `online`, `away`, `busy`, or `offline`.|

> Example responses

> 200 Response

```json
{
  "token": "54fc5544030bcecda0533",
  "status": "busy",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'token'"
}
```

<h3 id="set-visitors-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="set-visitors-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|status|string|false|none|none|
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

<h1 id="omnichannel-omnichannel-contacts">Omnichannel Contacts</h1>

## Get Omnichannel Contact

<a id="opIdget-api-v1-omnichannel-contact"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contact?contactId=62fbed6d337291dc9a68ff89' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contact`

> **Note:** This endpoint will be replaced. Refer to the [new API documentation](https://developer.rocket.chat/apidocs/get-omnichannel-contact) for updated usage and features.

Get an Omnichannel contact by ID.
Permission required: `view-l-room`.

The response does not include the contact's visitor `token`.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Removed the visitor `token` from the response. |

<h3 id="get-omnichannel-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|contactId|query|string|true|The contact ID.|

> Example responses

> 200 Response

```json
{
  "contact": {
    "_id": "62fbed6d337291dc9a68ff89",
    "username": "guest-16",
    "status": "online",
    "ts": "2022-08-16T19:18:05.380Z",
    "_updatedAt": "2022-08-23T17:58:37.254Z",
    "name": "Kev",
    "visitorEmails": [
      {
        "address": "email@rocket.chat"
      }
    ]
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-omnichannel-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-omnichannel-contact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|object \| null|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» ts|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» department|string|false|none|none|
|» name|string|false|none|none|
|» visitorEmails|[object]|false|none|none|
|» » address|string|false|none|none|
|» phone|[object]|false|none|none|
|» » phoneNumber|string|false|none|none|
|» livechatData|object|false|none|none|
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

## Register or Update Omnichannel Contact

<a id="opIdpost-api-v1-omnichannel-contact"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "token": "434lxd7iss8yh8c4m80wh",
    "name": "Chris",
    "email": "chris@gmail.com",
    "phone": "+91123456788",
    "contactManager": {
      "username": "kim.jane"
    }
  }'
```

`POST /api/v1/omnichannel/contact`

> **Note:** This endpoint will be replaced. Refer to the new API documentation for [registering](https://developer.rocket.chat/apidocs/register-omnichannel-contacts) and [updating](https://developer.rocket.chat/apidocs/update-omnichannel-contact) contact for updated usage and features.

Register a guest user as a new omnichannel contact.
Permission required: `view-l-room`

> Body parameter

```json
{
  "token": "434lxd7iss8yh8c4m80wh",
  "name": "Chris",
  "email": "chris@gmail.com",
  "phone": "+91123456788",
  "contactManager": {
    "username": "kim.jane"
  }
}
```

<h3 id="register-or-update-omnichannel-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» token|body|string|true|The contact token. Enter a random unique string as the value. Use this same token to update the contact.|
|» name|body|string|true|The contact name.|
|» email|body|string|false|The contact email.|
|» phone|body|string|false|The contact phone number.|
|» contactManager|body|object|false|The contact manager's user name.|
|» » username|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "contact": "7ipCD6NDtkkRDCiNM",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'token'"
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

<h3 id="register-or-update-omnichannel-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br>To update a contact, use the contact token created in the response.|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="register-or-update-omnichannel-contact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Contacts

<a id="opIdget-api-v1-contact.search"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contact.search \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contact.search`

> **Note:** This endpoint will be replaced. Refer to the [new API documentation](https://developer.rocket.chat/apidocs/search-omnichannel-contacts) for updated usage and features.

Find contacts by name, email, phone number, or any custom field values stored in the database.
Permission required: `view-l-room`.
* Encode values having characters like @,+, /and * to avoid breaking the endpoint.
* To find contacts using custom fields, use the custom query parameter. The custom query parameter must be encoded by <a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams" target="_blank">URLSearchParams</a>.
For example, to search contacts with premium subscription, the request is as follows:
```
curl --location --globoff 'http://localhost:3000/api/v1/omnichannel/contact.search?custom={%20%22Subscription%22%3A%20%22premium%22%20}' \
--header 'X-Auth-Token: b5BKhblglC5OU0AfB_Tl9dKmOb0zXUvWK-nhNT_aE8V' \
--header 'X-User-Id: CkCPNcvsvCDfmWLqC'
```

The response does not include the contact's visitor `token`.

### Changelog
| Version | Description |
| ------- | ----------- |
| 8.9.0   | Removed the visitor `token` from the response. |

<h3 id="search-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|email|query|string|false|The contact's email address.|
|phone|query|string|false|The contact's phone number.|
|custom|query|string|false|The defined custom fields.|

> Example responses

> 200 Response

```json
{
  "contact": {
    "_id": "62fbed6d337291dc9a68ff89",
    "username": "guest-16",
    "status": "online",
    "ts": "2022-08-16T19:18:05.380Z",
    "_updatedAt": "2022-08-23T17:58:37.254Z",
    "department": "MgzoccgEFHZ856i97",
    "name": "Kev",
    "visitorEmails": [
      {
        "address": "email@rocket.chat"
      }
    ],
    "lastChat": {
      "_id": "CT5bru2WjJ2EsmGbH",
      "ts": "2022-08-16T19:24:35.916Z"
    },
    "livechatData": {
      "hobby": "gaming"
    }
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error-invalid-params"
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

<h3 id="search-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="search-contacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» status|string|false|none|none|
|» ts|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» department|string|false|none|none|
|» name|string|false|none|none|
|» visitorEmails|[object]|false|none|none|
|» » address|string|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
|» livechatData|object|false|none|none|
|» » hobby|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register Omnichannel Contacts

<a id="opIdpost-api-v1-omnichannel-contacts"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "John",
    "phones": [
      "+123456789"
    ],
    "emails": [
      "email@example.com"
    ],
    "customFileds": {},
    "contactManager": "67dfghjkjhgfdce31dd9bdae"
  }'
```

`POST /api/v1/omnichannel/contacts`

Register a new omnichannel contact.
Permission required: `create-livechat-contact`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.1.0             | Added       |

> Body parameter

```json
{
  "name": "John",
  "phones": [
    "+123456789"
  ],
  "emails": [
    "email@example.com"
  ],
  "customFileds": {},
  "contactManager": "67dfghjkjhgfdce31dd9bdae"
}
```

<h3 id="register-omnichannel-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|The contact's name.|
|» phones|body|[string]|true|An array of the contact's phone number(s).|
|» emails|body|[string]|true|An array of the contact's email address(es).|
|» customFields|body|object|false|The custom fields.|
|» contactManager|body|string|false|The contact manager's ID.|

> Example responses

> 200 Response

```json
{
  "contactId": "674eeb4343725ce31dd9bdae",
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="register-omnichannel-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="register-omnichannel-contacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string|false|none|none|
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

## Update Omnichannel Contact

<a id="opIdpost-api-v1-omnichannel-contacts.update"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "contactId": "67487f45e98719b7908d0f29",
    "name": "John",
    "phones": [
      "+123456789"
    ],
    "emails": [
      "email@example.com"
    ],
    "contactManager": "9sLvmAcQk4EAGdi6e",
    "customFields": {},
    "wipeConflicts": false
  }'
```

`POST /api/v1/omnichannel/contacts.update`

Update omnichannel contact. Permission required: `update-livechat-contact`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.1.0             | Added       |

> Body parameter

```json
{
  "contactId": "67487f45e98719b7908d0f29",
  "name": "John",
  "phones": [
    "+123456789"
  ],
  "emails": [
    "email@example.com"
  ],
  "contactManager": "9sLvmAcQk4EAGdi6e",
  "customFields": {},
  "wipeConflicts": false
}
```

<h3 id="update-omnichannel-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "contact": {
    "_id": "67487f45e98719b7908d0f29",
    "createdAt": "2024-11-28T14:33:41.487Z",
    "name": "John",
    "emails": [
      {
        "address": "email@example.com"
      }
    ],
    "phones": [
      {
        "phoneNumber": "+123383883838"
      }
    ],
    "channels": [
      {
        "name": "widget",
        "visitor": {
          "visitorId": "67499b2243725ce31dd57fc7",
          "source": {
            "type": "widget"
          }
        },
        "blocked": false,
        "verified": false,
        "details": {
          "type": "widget",
          "destination": "example.com"
        },
        "lastChat": {
          "_id": "bC5x3zmBdgtmA4m3W",
          "ts": "2024-11-29T10:44:55.016Z"
        }
      }
    ],
    "customFields": {},
    "unknown": false,
    "preRegistration": false,
    "_updatedAt": "2024-11-29T13:31:43.595Z",
    "conflictingFields": [],
    "lastChat": {
      "_id": "bC5x3zmBdgtmA4m3W",
      "ts": "2024-11-29T10:44:55.016Z"
    },
    "contactManager": "9sLvmAcQk4EAGdi6e"
  },
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="update-omnichannel-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-omnichannel-contact-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» name|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» phones|[object]|false|none|none|
|» » phoneNumber|string|false|none|none|
|» channels|[object]|false|none|none|
|» » name|string|false|none|none|
|» » visitor|object|false|none|none|
|» » » visitorId|string|false|none|none|
|» » » source|object|false|none|none|
|» » » » type|string|false|none|none|
|» » blocked|boolean|false|none|none|
|» » verified|boolean|false|none|none|
|» » details|object|false|none|none|
|» » » type|string|false|none|none|
|» » » destination|string|false|none|none|
|» » lastChat|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » ts|string|false|none|none|
|» customFields|object|false|none|none|
|» unknown|boolean|false|none|none|
|» preRegistration|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» conflictingFields|[object]|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
|» contactManager|string|false|none|none|
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

## Resolve Contact Conflicts

<a id="opIdpost-api-v1-omnichannel-contacts.conflicts"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.conflicts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "contactId": "68135a22e384b3ad127c7dbc",
    "name": "John Doe",
    "customFields": {
      "field1": "field1",
      "field2": "field2"
    },
    "contactManager": "test.agent",
    "wipeConflicts": false
  }'
```

`POST /api/v1/omnichannel/contacts.conflicts`

Use this endpoint to resolve conflicts in a contact's details.

This endpoint works only when a contact has conflicts.
Conflicts can occur when a verified contact uses another channel to communicate with you. 
For example, a contact's details (phone number, email address, custom fields) were saved when they 
accessed the Livechat widget.
Next time, they use WhatsApp and they provide different details.
By default, the values are overwritten. 
If you choose to flag conflicts, the conflicting detail will be displayed and you can decide the values to keep.
You can flag conflicts in custom fields using the [custom fields endpoints](https://developer.rocket.chat/apidocs/send-custom-field-value) or the [Set Custom Field method](https://developer.rocket.chat/apidocs/livechatwidget-api)
from the livechat widget API.

Permission required: `update-livechat-contact`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|7.7.0             | Added       |

> Body parameter

```json
{
  "contactId": "68135a22e384b3ad127c7dbc",
  "name": "John Doe",
  "customFields": {
    "field1": "field1",
    "field2": "field2"
  },
  "contactManager": "test.agent",
  "wipeConflicts": false
}
```

<h3 id="resolve-contact-conflicts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» contactId|body|string|true|The contact's ID.|
|» name|body|string|false|The contact's name.|
|» customFields|body|object|false|You can enter custom fields if you have created any.|
|» » field1|body|string|false|none|
|» » field2|body|string|false|none|
|» contactManager|body|string|false|The contact's assigned agent or manager.|
|» wipeConflicts|body|boolean|false|To overwrite the old data with the new details, enter `true`.|

> Example responses

> 200 Response

```json
{
  "result": {
    "_id": "68341efdd387e3d7509267fb",
    "createdAt": "2025-05-26T07:57:49.616Z",
    "name": "Jane Doe",
    "channels": [
      {
        "name": "widget",
        "visitor": {
          "visitorId": "68341ef9d387e3d7509267fa",
          "source": {
            "type": "widget"
          }
        },
        "blocked": false,
        "verified": true,
        "details": {
          "type": "widget",
          "destination": "writing-demo.dev.rocket.chat"
        },
        "lastChat": {
          "_id": "cz5uyBRyKPfoWHBat",
          "ts": "2025-05-26T07:57:49.661Z"
        },
        "field": "email",
        "value": "jane.doe@email.com",
        "verifiedAt": "2025-05-26T07:58:26.895Z"
      }
    ],
    "customFields": {
      "field1": "field1",
      "field2": "field2"
    },
    "unknown": false,
    "preRegistration": false,
    "_updatedAt": "2025-05-26T11:35:31.241Z",
    "lastChat": {
      "_id": "cz5uyBRyKPfoWHBat",
      "ts": "2025-05-26T07:57:49.661Z"
    },
    "activity": [
      "2025-05"
    ],
    "emails": [
      {
        "address": "jane.doe@email.com"
      }
    ],
    "phones": [],
    "conflictingFields": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'contactId' [error-invalid-params]",
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

<h3 id="resolve-contact-conflicts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="resolve-contact-conflicts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» name|string|false|none|none|
|» channels|[object]|false|none|none|
|» » name|string|false|none|none|
|» » visitor|object|false|none|none|
|» » » visitorId|string|false|none|none|
|» » » source|object|false|none|none|
|» » » » type|string|false|none|none|
|» » blocked|boolean|false|none|none|
|» » verified|boolean|false|none|none|
|» » details|object|false|none|none|
|» » » type|string|false|none|none|
|» » » destination|string|false|none|none|
|» » lastChat|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » ts|string|false|none|none|
|» » field|string|false|none|none|
|» » value|string|false|none|none|
|» » verifiedAt|string|false|none|none|
|» customFields|object|false|none|none|
|» » field1|string|false|none|none|
|» » field2|string|false|none|none|
|» unknown|boolean|false|none|none|
|» preRegistration|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
|» activity|[string]|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» phones|[object]|false|none|none|
|» conflictingFields|[object]|false|none|none|
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

## Get Omnichannel Contact

<a id="opIdget-api-v1-omnichannel-contacts.get"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.get?contactId=673c76df47a6c9b89dd263d8' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contacts.get`

Retrieve a single omnichannel contact by its unique `contactId`.

Required permission: `view-livechat-contact`.


<h3 id="get-omnichannel-contact-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|contactId|query|string|true|The contact's unique ID.|

> Example responses

> 200 Response

```json
{
  "contact": {
    "_id": "673c76df47a6c9b89dd263d8",
    "createdAt": "2024-11-19T11:30:39.710Z",
    "name": "John Doe",
    "channels": [
      {
        "name": "widget",
        "visitor": {
          "visitorId": "673c76df1e2e6feb77939c70",
          "source": {
            "type": "widget"
          }
        },
        "blocked": false,
        "verified": true,
        "details": {
          "type": "widget",
          "destination": "example.com"
        },
        "lastChat": {
          "_id": "ixnGsLNT8rTL9eYY3",
          "ts": "2024-11-19T11:30:39.724Z"
        },
        "field": "email",
        "value": "mail@example.com",
        "verifiedAt": "2024-11-19T11:31:58.997Z"
      }
    ],
    "customFields": {
      "social-number": "123456-12345",
      "address": "P.O. Box 123 3456 Home Rd. Somewhere in the world",
      "zip-code": "123456-099"
    },
    "unknown": false,
    "_updatedAt": "2024-11-19T11:33:55.424Z",
    "lastChat": {
      "_id": "ixnGsLNT8rTL9eYY3",
      "ts": "2024-11-19T11:30:39.724Z"
    },
    "conflictingFields": [],
    "emails": [
      {
        "address": "mail@example.com"
      }
    ],
    "contactManager": "cbTgcixmLxYSdFmmZ",
    "phones": []
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "error: must have required property 'contactId' [error-invalid-params]",
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

<h3 id="get-omnichannel-contact-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-omnichannel-contact-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|object|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» name|string|false|none|none|
|» channels|[object]|false|none|none|
|» » name|string|false|none|none|
|» » visitor|object|false|none|none|
|» » » visitorId|string|false|none|none|
|» » » source|object|false|none|none|
|» » » » type|string|false|none|none|
|» » blocked|boolean|false|none|none|
|» » verified|boolean|false|none|none|
|» » details|object|false|none|none|
|» » » type|string|false|none|none|
|» » » destination|string|false|none|none|
|» » lastChat|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » ts|string|false|none|none|
|» » field|string|false|none|none|
|» » value|string|false|none|none|
|» » verifiedAt|string|false|none|none|
|» customFields|object|false|none|none|
|» » social-number|string|false|none|none|
|» » address|string|false|none|none|
|» » zip-code|string|false|none|none|
|» unknown|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
|» conflictingFields|[object]|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» contactManager|string|false|none|none|
|» phones|[object]|false|none|none|
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

## Search Omnichannel Contacts

<a id="opIdget-api-v1-omnichannel-contacts.search"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.search \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contacts.search`

Retrieve a list of omnichannel contacts based on search criteria like name, email or phone number.
Permission required: `view-livechat-contact`.

**Note**: Ensure to URL-encode special characters such as `@`, `+`, `/`, and `*` in query parameters to prevent issues with the endpoint. For example, encode email addresses as `mail%40example.com` instead of `mail@example.com`.

<h3 id="search-omnichannel-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|searchText|query|string|false|Text to search for in contact details.|
|unknown|query|boolean|false|Filter by contact's unknown status.|

> Example responses

> 200 Response

```json
{
  "contacts": [
    {
      "_id": "673be1711e2e6feb77939a7b",
      "createdAt": "2024-11-19T00:53:05.468Z",
      "name": "Boris Doe",
      "emails": [
        {
          "address": "boris@doe.com"
        }
      ],
      "phones": [],
      "channels": [
        {
          "name": "widget",
          "visitor": {
            "visitorId": "673be2101e2e6feb77939a7f",
            "source": {
              "type": "widget"
            }
          },
          "blocked": false,
          "verified": false,
          "details": {
            "type": "widget",
            "destination": "example.com"
          },
          "lastChat": {
            "_id": "NMee5zFPv62N7RAhh",
            "ts": "2024-11-19T00:55:46.723Z"
          }
        }
      ],
      "customFields": {
        "social-number": "45600-00"
      },
      "unknown": false,
      "_updatedAt": "2024-11-19T00:56:43.140Z",
      "conflictingFields": [],
      "lastChat": {
        "_id": "NMee5zFPv62N7RAhh",
        "ts": "2024-11-19T00:55:46.723Z"
      },
      "contactManager": {
        "_id": "mAwAgmNndK7SHnQ89",
        "name": "Jane",
        "username": "Jane"
      }
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must be number [error-invalid-params]",
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

<h3 id="search-omnichannel-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="search-omnichannel-contacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[object]|false|none|none|
|» _id|string|false|none|none|
|» createdAt|string|false|none|none|
|» name|string|false|none|none|
|» emails|[object]|false|none|none|
|» » address|string|false|none|none|
|» phones|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» » name|string|false|none|none|
|» » visitor|object|false|none|none|
|» » » visitorId|string|false|none|none|
|» » » source|object|false|none|none|
|» » » » type|string|false|none|none|
|» » blocked|boolean|false|none|none|
|» » verified|boolean|false|none|none|
|» » details|object|false|none|none|
|» » » type|string|false|none|none|
|» » » destination|string|false|none|none|
|» » lastChat|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » ts|string|false|none|none|
|» customFields|object|false|none|none|
|» » social-number|string|false|none|none|
|» unknown|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» conflictingFields|[object]|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
|» contactManager|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » username|string|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get channels grouped by contact name

<a id="opIdget-api-v1-omnichannel-contacts.channels"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.channels?contactId=673653b997f0fbcd657f0ebf' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contacts.channels`

Get channels grouped by contact name.
Permission required: `view-livechat-contact`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.1.0             | Added       |

<h3 id="get-channels-grouped-by-contact-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|contactId|query|string|true|The contact's ID.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "name": "widget",
      "visitor": {
        "visitorId": "234567987655weygcbg",
        "source": {
          "type": "widget"
        }
      },
      "blocked": false,
      "verified": true,
      "details": {
        "type": "widget",
        "destination": "example.com"
      },
      "lastChat": {
        "_id": "sdfgjhgfdfeG",
        "ts": "2024-11-22T14:53:36.500Z"
      },
      "field": "email",
      "value": "example@mail.com",
      "verifiedAt": "2024-11-22T14:55:21.354Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'contactId' [error-invalid-params]",
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

<h3 id="get-channels-grouped-by-contact-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-channels-grouped-by-contact-name-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[object]|false|none|none|
|» name|string|false|none|none|
|» visitor|object|false|none|none|
|» » visitorId|string|false|none|none|
|» » source|object|false|none|none|
|» » » type|string|false|none|none|
|» blocked|boolean|false|none|none|
|» verified|boolean|false|none|none|
|» details|object|false|none|none|
|» » type|string|false|none|none|
|» » destination|string|false|none|none|
|» lastChat|object|false|none|none|
|» » _id|string|false|none|none|
|» » ts|string|false|none|none|
|» field|string|false|none|none|
|» value|string|false|none|none|
|» verifiedAt|string|false|none|none|
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

## Get Contact History

<a id="opIdget-api-v1-omnichannel-contacts.history"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.history?contactId=673653b997f0fbcd657f0ebf' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contacts.history`

Get contact's history. Permission required: `view-livechat-contact-history`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
|6.1.0             | Added       |

<h3 id="get-contact-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|contactId|query|string|true|The contact's ID.|
|source|query|string|false|The source of the contact's interaction with your organization.|

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
  "error": "must have required property 'contactId' [error-invalid-params]",
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

<h3 id="get-contact-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-contact-history-responseschema">Response Schema</h3>

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

## Check Contacts Existence

<a id="opIdget-api-v1-omnichannel-contacts.checkExistence"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.checkExistence \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/omnichannel/contacts.checkExistence`

This identifies whether a contact is already registered using a given query parameter such as `email` or `phone` or `contactId`.
**Note**: You must provide only one of the parameters in the request.

**Required permission**: `view-livechat-contact`.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.2.0             | Added       |

<h3 id="check-contacts-existence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|contactId|query|string|false|The contact's unique ID.|
|email|query|string|false|The omnichannel contact's email address.|
|phone|query|string|false|Phone number of the omnichannel contact.|

> Example responses

> 200 Response

```json
{
  "exists": true,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'contactId'\n must have required property 'email'\n must have required property 'phone'\n must match exactly one schema in oneOf [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="check-contacts-existence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="check-contacts-existence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exists|boolean|false|none|none|
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

## Block Omnichannel Contact

<a id="opIdpost-api-v1-omnichannel-contacts.block"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.block \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "visitor": {
      "visitorId": "68f0d2c201e202fefed83672",
      "source": {
        "type": "widget"
      }
    }
  }'
```

`POST /api/v1/omnichannel/contacts.block`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Use this endpoint to block an Omnichannel on a specific channel. Permission required: `block-livechat-contact`

> Body parameter

```json
{
  "visitor": {
    "visitorId": "68f0d2c201e202fefed83672",
    "source": {
      "type": "widget"
    }
  }
}
```

<h3 id="block-omnichannel-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» visitor|body|object|true|The visitor object contains the details of the contact that you want to block.|
|» » visitorId|body|string|true|Enter the visitor ID of the contact that you want to block. To get the visitor ID, you can use the <a href='https://developer.rocket.chat/apidocs/search-omnichannel-contacts' target='_blank'>Search Omnichannel Contacts</a> endpoint.|
|» » source|body|object|true|The source object contains the channels from which you want to block the contact. To get the room types, you can use the <a href='https://developer.rocket.chat/apidocs/view-omnichannel-room-sources' target='_blank'>View Omnichannel Room Sources</a> endpoint.|
|» » » type|body|string|true|Enter the type of channel from which you want to block the contact.|

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
  "error": "must have required property 'visitor' [error-invalid-params]",
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

<h3 id="block-omnichannel-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="block-omnichannel-contact-responseschema">Response Schema</h3>

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

## Unblock Omnichannel Contact

<a id="opIdpost-api-v1-omnichannel-contacts.unblock"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/contacts.unblock \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "visitor": {
      "visitorId": "68f0d2c201e202fefed83672",
      "source": {
        "type": "widget"
      }
    }
  }'
```

`POST /api/v1/omnichannel/contacts.unblock`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Use this endpoint to unblock an Omnichannel on a specific channel. Permission required: `unblock-livechat-contact`

> Body parameter

```json
{
  "visitor": {
    "visitorId": "68f0d2c201e202fefed83672",
    "source": {
      "type": "widget"
    }
  }
}
```

<h3 id="unblock-omnichannel-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» visitor|body|object|true|The visitor object contains the details of the contact that you want to unblock.|
|» » visitorId|body|string|true|Enter the visitor ID of the contact that you want to unblock.|
|» » source|body|object|true|The source object contains the channels from which you want to unblock the contact.|
|» » » type|body|string|true|Enter the type of channel from which you want to unblock the contact.|

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
  "error": "must have required property 'visitor' [error-invalid-params]",
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

<h3 id="unblock-omnichannel-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="unblock-omnichannel-contact-responseschema">Response Schema</h3>

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

<h1 id="omnichannel-omnichannel-rooms">Omnichannel Rooms</h1>

## Get List of Omnichannel Rooms

<a id="opIdget-api-v1-livechat-rooms"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/rooms \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/rooms`

Retrieves a list of Omnichannel rooms. You can use the available query parameters to filter the response.
At least one of the following permissions is required:
* `view-livechat-rooms`
* `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters.       |
|7.0.0             | Remove support of filtering by agent's username |
|2.4.0             | Added support to the parameter `roomName`|
|2.0.0             | Added       |

<h3 id="get-list-of-omnichannel-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|agents|query|[string]|false|A list of agent IDs.|
|departmentId|query|string|false|The department ID. You can also enter multiple IDs as an array of string values.|
|open|query|boolean|false|If it should filter by open/closed rooms.|
|createdAt|query|string|false|An object representing when the room was created (can also be filtered only with `start` or `end`).|
|closedAt|query|string|false|An object representing when the room was closed (can also be filtered only with `start` or `end`).|
|tags|query|string|false|A list of tags.|
|customFields|query|string|false|An object with custom fields to be filtered (previously created and populated at custom fields endpoints)|
|roomName|query|string|false|The room's name.|
|onhold|query|boolean|false|Whether you want to include rooms that are on hold or not.|
|queued|query|string|false|Whether you want to include queued rooms or not.|
|units|query|[string]|false|Enter the unit IDs you want to include as an array of string values.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "rooms": [
    {
      "_id": "9dQMveZhqxiDgCM3B",
      "msgs": 1,
      "usersCount": 1,
      "lm": "2019-08-09T20:18:02.350Z",
      "fname": "Marcos Defendi",
      "t": "l",
      "ts": "2019-08-09T20:18:02.108Z",
      "v": {
        "_id": "xh45w4y7oPW5SiMJu",
        "username": "guest-4",
        "token": "xn5hdkyptei11m07f3me",
        "status": "online"
      },
      "servedBy": {
        "_id": "3kyWm8PsmwhC7xgwg",
        "username": "marcos",
        "ts": "2019-08-09T20:18:02.109Z"
      },
      "cl": false,
      "open": true,
      "waitingResponse": true,
      "departmentId": "xnmXQmytuvxp2TuSC",
      "_updatedAt": "2019-08-09T20:19:34.856Z",
      "lastMessage": {
        "_id": "TBEz7zSCBaKsfyrzc",
        "rid": "9dQMveZhqxiDgCM3B",
        "msg": "Hello",
        "token": "xn5hdkyptei11m07f3me",
        "alias": "Marcos Defendi",
        "ts": "2019-08-09T20:18:02.350Z",
        "u": {
          "_id": "xh45w4y7oPW5SiMJu",
          "username": "guest-4",
          "name": "Marcos Defendi"
        },
        "_updatedAt": "2019-08-09T20:18:02.383Z",
        "mentions": [],
        "channels": [],
        "newRoom": false,
        "showConnecting": false
      },
      "metrics": {
        "v": {
          "lq": "2019-08-09T20:18:02.350Z"
        }
      },
      "livechatData": {
        "docId": "0310584343112"
      },
      "tags": [
        "rocket",
        "chat"
      ],
      "name": "Marcos Defendi"
    }
  ],
  "count": 1,
  "offset": 1,
  "total": 7,
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

<h3 id="get-list-of-omnichannel-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-omnichannel-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rooms|[object]|false|none|none|
|» _id|string|false|none|none|
|» msgs|integer|false|none|none|
|» usersCount|integer|false|none|none|
|» lm|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» ts|string|false|none|none|
|» v|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » token|string|false|none|none|
|» » status|string|false|none|none|
|» servedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » ts|string|false|none|none|
|» cl|boolean|false|none|none|
|» open|boolean|false|none|none|
|» waitingResponse|boolean|false|none|none|
|» departmentId|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » token|string|false|none|none|
|» » alias|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » newRoom|boolean|false|none|none|
|» » showConnecting|boolean|false|none|none|
|» metrics|object|false|none|none|
|» » v|object|false|none|none|
|» » » lq|string|false|none|none|
|» livechatData|object|false|none|none|
|» » docId|string|false|none|none|
|» tags|[string]|false|none|none|
|» name|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get or Create Omnichannel Rooms

<a id="opIdget-api-v1-livechat-room"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/room?token=iNKE8a6k6cjbqWhWd' \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/room`

Get the data of an existing room of a visitor. If a room doesn't exist for the visitor, a new room is created.

<h3 id="get-or-create-omnichannel-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The visitor token.|
|rid|query|string|false|The room ID.|
|agentId|query|string|false|The agent ID.|

> Example responses

> 200 Response

```json
{
  "room": {
    "_id": "kCJDd5peKiZnGJLPq",
    "fname": "Mary",
    "t": "l",
    "v": {
      "_id": "47Dajwh9DjpnTAugW",
      "username": "guest-165",
      "token": "8s7e9ony6ctl27e1qf8kue",
      "status": "offline",
      "lastMessageTs": "2021-07-09T20:20:58.755Z"
    },
    "departmentId": "CAJioQNAvLnYWTy8i",
    "default": false,
    "ro": false,
    "sysMes": true,
    "open": true,
    "msgs": 7,
    "ts": "2021-07-09T20:12:19.795Z",
    "_updatedAt": "2021-07-09T20:21:07.334Z",
    "lm": "2021-07-09T20:20:58.755Z",
    "customFields": {
      "salesforceCrmContactId": "0032y000009mtOIAAY"
    },
    "usersCount": 2,
    "cl": false,
    "departmentAncestors": [
      "sriw2wmP2Zz2pPrre"
    ],
    "lastMessage": {
      "_id": "SgrsSm3HNGrG5xTmk",
      "rid": "kCJDd5peKiZnGJLPq",
      "msg": "d",
      "token": "8s7e9ony6ctl27e1qf8kue",
      "alias": "Mary",
      "ts": "2021-07-09T20:20:58.755Z",
      "u": {
        "_id": "47Dajwh9DjpnTAugW",
        "username": "guest-165",
        "name": "Mary"
      },
      "_updatedAt": "2021-07-09T20:20:58.896Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "d"
            }
          ]
        }
      ],
      "newRoom": false,
      "showConnecting": true
    },
    "metrics": {
      "reaction": {
        "fd": "2021-07-09T20:19:53.243Z",
        "ft": 23.821,
        "tt": 24.006
      },
      "response": {
        "avg": 226.4365,
        "fd": "2021-07-09T20:19:53.243Z",
        "ft": 452.688,
        "total": 2,
        "tt": 452.873
      },
      "v": {
        "lq": "2021-07-09T20:20:58.755Z"
      },
      "servedBy": {
        "lr": "2021-07-09T20:19:53.077Z"
      }
    },
    "servedBy": {
      "_id": "XycfA5CetCPuEjqxw",
      "username": "jane.doe",
      "ts": "2021-07-09T20:19:29.422Z"
    },
    "waitingResponse": true
  },
  "newRoom": false,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'token'"
}
```

<h3 id="get-or-create-omnichannel-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-or-create-omnichannel-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|room|object|false|none|none|
|» _id|string|false|none|none|
|» fname|string|false|none|none|
|» t|string|false|none|none|
|» v|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » token|string|false|none|none|
|» » status|string|false|none|none|
|» » lastMessageTs|string|false|none|none|
|» departmentId|string|false|none|none|
|» default|boolean|false|none|none|
|» ro|boolean|false|none|none|
|» sysMes|boolean|false|none|none|
|» open|boolean|false|none|none|
|» msgs|integer|false|none|none|
|» ts|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» lm|string|false|none|none|
|» customFields|object|false|none|none|
|» » salesforceCrmContactId|string|false|none|none|
|» usersCount|integer|false|none|none|
|» cl|boolean|false|none|none|
|» departmentAncestors|[string]|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » token|string|false|none|none|
|» » alias|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» » newRoom|boolean|false|none|none|
|» » showConnecting|boolean|false|none|none|
|» metrics|object|false|none|none|
|» » reaction|object|false|none|none|
|» » » fd|string|false|none|none|
|» » » ft|number|false|none|none|
|» » » tt|number|false|none|none|
|» » response|object|false|none|none|
|» » » avg|number|false|none|none|
|» » » fd|string|false|none|none|
|» » » ft|number|false|none|none|
|» » » total|integer|false|none|none|
|» » » tt|number|false|none|none|
|» » v|object|false|none|none|
|» » » lq|string|false|none|none|
|» » servedBy|object|false|none|none|
|» » » lr|string|false|none|none|
|» servedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » ts|string|false|none|none|
|» waitingResponse|boolean|false|none|none|
|newRoom|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Close Omnichannel Room by Visitor

<a id="opIdpost-api-v1-livechat-room.close"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rid": "XFzMqgn33DcsQkpJp",
    "token": "iNKE8a6k6cjbqWhWd"
  }'
```

`POST /api/v1/livechat/room.close`

If you are a visitor, use this endpoint to close the room.

> Body parameter

```json
{
  "rid": "XFzMqgn33DcsQkpJp",
  "token": "iNKE8a6k6cjbqWhWd"
}
```

<h3 id="close-omnichannel-room-by-visitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» token|body|string|true|The visitor token.|

> Example responses

> 200 Response

```json
{
  "rid": "XFzMqgn33DcsQkpJp",
  "comment": "Closed by visitor",
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

<h3 id="close-omnichannel-room-by-visitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="close-omnichannel-room-by-visitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rid|string|false|none|none|
|comment|string|false|none|none|
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

## Close Omnichannel Room

<a id="opIdpost-api-v1-livechat-room.closeByUser"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.closeByUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "rid": "8ceKgWvo5qT5TrCRN",
    "comment": "close via API",
    "tags": [
      "abc",
      "abc"
    ],
    "transcriptEmail": {
      "sendToVisitor": true,
      "requestData": {
        "email": "test@example.com",
        "subject": "transcript"
      }
    }
  }'
```

`POST /api/v1/livechat/room.closeByUser`

If you are an Omnichannel user (agent, manager), use this endpoint to close the room.

> Body parameter

```json
{
  "rid": "8ceKgWvo5qT5TrCRN",
  "comment": "close via API",
  "tags": [
    "abc",
    "abc"
  ],
  "transcriptEmail": {
    "sendToVisitor": true,
    "requestData": {
      "email": "test@example.com",
      "subject": "transcript"
    }
  }
}
```

<h3 id="close-omnichannel-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» rid|body|string|true|Enter the room ID.|
|» comment|body|string|false|Add a description for closing the room. It is required when the [`Request comment when closing conversation`](https://docs.rocket.chat/docs/omnichannel-admins-guide) setting is enabled.|
|» forceClose|body|boolean|false|Use this parameter to forcefully close a room. Before using this parameter, make sure to enable the [`Force Close Conversation API`](https://docs.rocket.chat/v1/docs/omnichannel-admins-guide#api) setting in **Manage > Workspace > Settings > Omnichannel > API**. Exercise caution when using this parameter and reserve it for situations involving misconfigured rooms.|
|» tags|body|[string]|false|Add [tags](https://docs.rocket.chat/docs/tags).|
|» generateTranscriptPdf|body|boolean|false|Enter whether you want to generate a conversation transcript PDF.|
|» transcriptEmail|body|object|false|none|
|» » sendToVisitor|body|boolean|false|Enter whether you want to send the transcript to the visitor.|
|» » requestData|body|object|false|none|
|» » » email|body|string|false|Enter the visitor's email ID to whom you want to send the transcript.|
|» » » subject|body|string|false|Enter a subject for the email.|

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
  "error": "must have required property 'rid' [error-invalid-params]",
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

<h3 id="close-omnichannel-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="close-omnichannel-room-responseschema">Response Schema</h3>

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

## Join Omnichannel Room

<a id="opIdget-api-v1-livechat-room.join"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/room.join?roomId=gMMeBpWyLeowCrzBv' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/room.join`

Call this endpoint to join an Omnichannel room.
Permission required: `view-l-room`

<h3 id="join-omnichannel-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID that you want to join.|

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
  "error": "must have required property 'roomId' [error-invalid-params]",
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

<h3 id="join-omnichannel-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="join-omnichannel-room-responseschema">Response Schema</h3>

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

## Update Omnichannel Room

<a id="opIdpost-api-v1-livechat-room.saveInfo"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.saveInfo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "guestData": {
      "_id": "rbAXPnMktTFbNpwtJ"
    },
    "roomData": {
      "_id": "nf52k8bpJ8y7oHmwk",
      "topic": "Hmm",
      "tags": [
        "testtags"
      ]
    }
  }'
```

`POST /api/v1/livechat/room.saveInfo`

Edit an Omnichannel room. Update the topic, tags, and other details.
Permission required: `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|5.3.0            | Added       |

> Body parameter

```json
{
  "guestData": {
    "_id": "rbAXPnMktTFbNpwtJ"
  },
  "roomData": {
    "_id": "nf52k8bpJ8y7oHmwk",
    "topic": "Hmm",
    "tags": [
      "testtags"
    ]
  }
}
```

<h3 id="update-omnichannel-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» guestData|body|object|false|none|
|» » _id|body|string|true|The guest ID.|
|» » name|body|string|false|The name  of the guest.|
|» » email|body|string|false|The email of the guest.|
|» » phone|body|string|false|The contact of the guest. |
|» » livechatData|body|object|false|Custom fields information.|
|» roomData|body|object|false|none|
|» » _id|body|string|true|The room ID.|
|» » topic|body|string|false|The topic of the room.|
|» » tags|body|[string]|false|An array of tags to be associated with the room.|
|» » priorityId|body|string|false|The priority ID of the room.|
|» » slaId|body|string|false|The SLA priority ID of the room.|
|» » livechatData|body|object|false|Custom fields information.|

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
  "error": "must have required property 'guestData' [error-invalid-params]",
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

<h3 id="update-omnichannel-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-omnichannel-room-responseschema">Response Schema</h3>

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

## Forward Omnichannel Room

<a id="opIdpost-api-v1-livechat-room.forward"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.forward \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "XFzMqgn33DcsQkpJp",
    "userId": "iNKE8a6k6cjbqWhWd"
  }'
```

`POST /api/v1/livechat/room.forward`

Use this endpoint to transfer  a chat to another department or agent. When transfering the chat to another department, you can also specify a default agent in that department to receive the chat if  an [auto-assignment routing algorithm](https://docs.rocket.chat/docs/queue-types-routing-algorithm) is enabled.

### Changelog
| Version | Description  |
| ------- |--------------|
| 7.10.0  | Added support for selecting a default agent when transferring chat to another department.         |

> Body parameter

```json
{
  "roomId": "XFzMqgn33DcsQkpJp",
  "userId": "iNKE8a6k6cjbqWhWd"
}
```

<h3 id="forward-omnichannel-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID.|
|» userId|body|string|false|The new agent ID.|
|» departmentId|body|string|false|The new department ID.|

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
  "error": "must have required property 'roomId' [error-invalid-params]",
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

<h3 id="forward-omnichannel-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="forward-omnichannel-room-responseschema">Response Schema</h3>

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

## Get Department Transfer History

<a id="opIdget-api-v1-livechat-transfer.history-:rid"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/transfer.history/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/transfer.history/{rid}`

Retrieve the conversation transfer history from one department to another.
Permission required: `view-livechat-rooms`

<h3 id="get-department-transfer-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|path|string|true|The room ID|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "history": [
    {}
  ],
  "count": 0,
  "offset": 0,
  "data": {
    "history": [
      {
        "transferredBy": {
          "_id": "string",
          "username": "string",
          "name": "string",
          "type": "string"
        },
        "ts": "string",
        "scope": "string",
        "previousDepartment": "string",
        "nextDepartment": {
          "_id": "string",
          "name": "string"
        }
      }
    ],
    "count": 0,
    "offset": 0,
    "total": 0,
    "success": true
  },
  "total": 0,
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

<h3 id="get-department-transfer-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-department-transfer-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[object]|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|data|object|false|none|none|
|» history|[object]|false|none|none|
|» » transferredBy|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » » type|string|false|none|none|
|» » ts|string|false|none|none|
|» » scope|string|false|none|none|
|» » previousDepartment|string|false|none|none|
|» » nextDepartment|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » name|string|false|none|none|
|» count|integer|false|none|none|
|» offset|integer|false|none|none|
|» total|integer|false|none|none|
|» success|boolean|false|none|none|
|total|integer|false|none|none|
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

## Survey Omnichannel Room

<a id="opIdpost-api-v1-livechat-room.survey"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.survey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rid": "gMMeBpWyLeowCrzBv",
    "token": "d4a8338e5a7d98b6750b4f839431b34a3f4813b2c43f7d89597948f21f607bb4",
    "data": [
      {
        "name": "additionalFeedback",
        "value": "Thankszzzzz"
      }
    ]
  }'
```

`POST /api/v1/livechat/room.survey`

Provide feedback on an Omnichannel room.

> Body parameter

```json
{
  "rid": "gMMeBpWyLeowCrzBv",
  "token": "d4a8338e5a7d98b6750b4f839431b34a3f4813b2c43f7d89597948f21f607bb4",
  "data": [
    {
      "name": "additionalFeedback",
      "value": "Thankszzzzz"
    }
  ]
}
```

<h3 id="survey-omnichannel-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» token|body|string|true|The visitor token.|
|» data|body|[object]|true|An array of object with `name` and `value` to provide feedback.|
|» » name|body|string|false|none|
|» » value|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "rid": "gMMeBpWyLeowCrzBv",
  "data": {
    "additionalFeedback": "Thankszzzzz"
  },
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

<h3 id="survey-omnichannel-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="survey-omnichannel-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rid|string|false|none|none|
|data|object|false|none|none|
|» additionalFeedback|string|false|none|none|
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

## Put Omnichannel Room on Hold

<a id="opIdpost-api-v1-livechat-room.onHold"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.onHold \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -d '{
    "roomId": "Z7223PfNPwH7ihQPh"
  }'
```

`POST /api/v1/livechat/room.onHold`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Put an active conversation on hold.

> Body parameter

```json
{
  "roomId": "Z7223PfNPwH7ihQPh"
}
```

<h3 id="put-omnichannel-room-on-hold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Active Omnichannel room ID.|

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
  "error": "must have required property 'roomId' [error-invalid-params]",
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

<h3 id="put-omnichannel-room-on-hold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="put-omnichannel-room-on-hold-responseschema">Response Schema</h3>

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

## Upload Files to Room

<a id="opIdpost-api-v1-livechat-upload"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/upload/string \
  -X POST \
  -H 'Accept: application/json' \
  -H 'x-visitor-token: iNKE8a6k6cjyPyOyI' \
  -F 'file=/home/rodriq/Desktop/cod.png' \
  -F 'description=image file description here'
```

`POST /api/v1/livechat/upload/{rid}`

Upload files to an Omnichannel room.

> Body parameter

```yaml
file: /home/rodriq/Desktop/cod.png
description: image file description here
```

<h3 id="upload-files-to-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-visitor-token|header|string|true|The visitor token|
|rid|path|string|true|The room ID.|
|body|body|object|false|none|
|» file|body|string|true|The file to be uploaded.|
|» description|body|string|false|The file description.|

> Example responses

> 200 Response

```json
{
  "_id": "CeswhhAKTQMsnEbc8",
  "rid": "cbjQCtywHbuTYzmLx",
  "msg": "",
  "token": "932a1c3019aeeaa9b687bb04b979d",
  "file": {
    "_id": "uredcLri4GdehDQnD",
    "name": "globe.png",
    "type": "image/png"
  },
  "attachments": [
    {
      "ts": "1970-01-01T00:00:00.000Z",
      "title": "globe.png",
      "title_link": "/file-upload/uredcLri4GdehDQnD/globe.png",
      "title_link_download": true,
      "image_dimensions": {
        "width": 1746,
        "height": 1624
      },
      "image_preview": "/9j/2wBDAAYEBQYFBAYGzMKHSdwCQf2EhyBetVviuOVGrulRJ9NsHpQPgQH/9k=",
      "image_url": "/file-upload/uredcLri4GdehDQnD/globe.png",
      "image_type": "image/png",
      "image_size": 562975,
      "type": "file",
      "description": "Here is the file",
      "descriptionMd": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "Here is the file"
            }
          ]
        }
      ]
    }
  ],
  "alias": "James",
  "ts": "2023-03-21T16:21:39.131Z",
  "u": {
    "_id": "6410766605957d866e0fcf37",
    "username": "guest-3",
    "name": "James"
  },
  "_updatedAt": "2023-03-21T16:21:39.173Z",
  "urls": [],
  "mentions": [],
  "channels": [],
  "newRoom": false,
  "showConnecting": false,
  "success": true
}
```

> 403 Response

```json
{
  "success": false,
  "error": "forbidden"
}
```

<h3 id="upload-files-to-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="upload-files-to-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|rid|string|false|none|none|
|msg|string|false|none|none|
|token|string|false|none|none|
|file|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» type|string|false|none|none|
|attachments|[object]|false|none|none|
|» ts|string|false|none|none|
|» title|string|false|none|none|
|» title_link|string|false|none|none|
|» title_link_download|boolean|false|none|none|
|» image_dimensions|object|false|none|none|
|» » width|integer|false|none|none|
|» » height|integer|false|none|none|
|» image_preview|string|false|none|none|
|» image_url|string|false|none|none|
|» image_type|string|false|none|none|
|» image_size|integer|false|none|none|
|» type|string|false|none|none|
|» description|string|false|none|none|
|» descriptionMd|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|alias|string|false|none|none|
|ts|string|false|none|none|
|u|object|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» name|string|false|none|none|
|_updatedAt|string|false|none|none|
|urls|[object]|false|none|none|
|mentions|[object]|false|none|none|
|channels|[object]|false|none|none|
|newRoom|boolean|false|none|none|
|showConnecting|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Set Omnichannel Room Priority

<a id="opIdpost-api-v1-livechat-room-rid-priority"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room/string/priority \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "priorityId": "64007cc2fa0ed7dd905092e6"
  }'
```

`POST /api/v1/livechat/room/{rid}/priority`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Set the priority of an Omnichannel room.

Permission required: `view-l-room`

### Changelog
| Version | Description  |
| ------- |--------------|
| 6.0.0  | Added         |

> Body parameter

```json
{
  "priorityId": "64007cc2fa0ed7dd905092e6"
}
```

<h3 id="set-omnichannel-room-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|path|string|true|The room ID.|
|body|body|object|false|none|
|» priorityId|body|string|true|The ID of the priority to set.|

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
  "error": "must have required property 'priorityId' [error-invalid-params]",
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

<h3 id="set-omnichannel-room-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="set-omnichannel-room-priority-responseschema">Response Schema</h3>

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

## Remove Omnichannel Room Priority

<a id="opIddelete-api-v1-livechat-room-rid-priority"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room/string/priority \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/livechat/room/{rid}/priority`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Remove the priority set to an Omnichannel room.

Permission required: `view-l-room`

### Changelog
| Version | Description  |
| ------- |--------------|
| 6.0.0  | Added         |

<h3 id="remove-omnichannel-room-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|path|string|true|The room ID.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="remove-omnichannel-room-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-omnichannel-room-priority-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Remove Closed Omnichannel Rooms

<a id="opIdpost-api-v1-livechat-rooms.removeAllClosedRooms"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/rooms.removeAllClosedRooms \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/livechat/rooms.removeAllClosedRooms`

Use this endpoint to remove closed Omnichannel rooms. 

Permission required: `remove-closed-livechat-rooms`. (On the workspace UI, go to **Manage** > **Workspace** > **Permissions**. Search for the `Remove All Closed Omnichannel Rooms` permission. By default, livechat managers and monitors have this permission.)

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
|7.11.0            | Added       |

<h3 id="remove-closed-omnichannel-rooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "removedRooms": 19,
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

<h3 id="remove-closed-omnichannel-rooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-closed-omnichannel-rooms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|removedRooms|integer|false|none|none|
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

## Remove a Closed Omnichannel Room

<a id="opIdpost-api-v1-livechat-rooms.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/rooms.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "nXHYnNu38qKRRtZDi"
  }'
```

`POST /api/v1/livechat/rooms.delete`

Use this endpoint to delete a specific closed Omnichannel room from the workspace. Permission required: `remove-closed-livechat-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.12.0            | Added       |

> Body parameter

```json
{
  "roomId": "nXHYnNu38qKRRtZDi"
}
```

<h3 id="remove-a-closed-omnichannel-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the ID of the closed livechat room that you want to delete.|

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
  "errorType": "error-invalid-params",
  "error": "must have required property 'roomId'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-a-closed-omnichannel-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-a-closed-omnichannel-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Resume Room On-Hold

<a id="opIdpost-api-v1-livechat-room.resumeOnHold"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/room.resumeOnHold \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "dCBiZX3XPWyPsa6pt"
  }'
```

`POST /api/v1/livechat/room.resumeOnHold`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Use this endpoint to resume a room that was on-hold. Permission required: `view-l-room`

> Body parameter

```json
{
  "roomId": "dCBiZX3XPWyPsa6pt"
}
```

<h3 id="resume-room-on-hold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the Omnichannel room ID that you want to resume.|

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
  "error": "must have required property 'roomId' [error-invalid-params]",
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

<h3 id="resume-room-on-hold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="resume-room-on-hold-responseschema">Response Schema</h3>

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

## View Omnichannel Room Sources

<a id="opIdget-api-v1-livechat-rooms-filters"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/rooms/filters \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/rooms/filters`

Use this endpoint to view the sources of the Omnichannel rooms, for example, an app or the Livechat widget. Permission required: `view-l-room`

<h3 id="view-omnichannel-room-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "filters": [
    {},
    {
      "type": "app",
      "id": "5e3dadaa-e774-40d8-b3a4-b93b91747168",
      "alias": "WhatsApp Cloud",
      "sidebarIcon": "whatsapp",
      "defaultIcon": "whatsapp"
    },
    {
      "type": "app",
      "id": "99ecc706-ca5a-4b8f-bbaf-c28de243f1db",
      "alias": "WhatsApp Sandbox",
      "sidebarIcon": "whatsapp",
      "defaultIcon": "whatsapp"
    },
    {
      "type": "app",
      "id": "fc96e832-5472-49e4-aace-1521a7ebeaa6",
      "alias": "Telegram",
      "sidebarIcon": "telegram",
      "defaultIcon": "telegram"
    },
    {
      "type": "sms"
    },
    {
      "type": "widget"
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

<h3 id="view-omnichannel-room-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="view-omnichannel-room-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[object]|false|none|none|
|» type|string|false|none|none|
|» id|string|false|none|none|
|» alias|string|false|none|none|
|» sidebarIcon|string|false|none|none|
|» defaultIcon|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Visitor Transfer Room

<a id="opIdpost-api-v1-livechat-visitor-department.transfer"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/visitor/department.transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "2c9035b72dec31be7e9ccbb3cbd9952394ea41c1517b76c528d403c00a3fccf9",
    "rid": "dCBiZX3XPWyPsa6pt",
    "department": "68304887113ac52640bc1ca6"
  }'
```

`POST /api/v1/livechat/visitor/department.transfer`

This endpoint can be used by visitors to transfer an ongoing chat to another department.

> Body parameter

```json
{
  "token": "2c9035b72dec31be7e9ccbb3cbd9952394ea41c1517b76c528d403c00a3fccf9",
  "rid": "dCBiZX3XPWyPsa6pt",
  "department": "68304887113ac52640bc1ca6"
}
```

<h3 id="visitor-transfer-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|Enter the visitor token.|
|» rid|body|string|true|Enter the room ID.|
|» department|body|string|true|Enter the department ID to which you want to transfer the chat.|

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
  "errorType": "error-invalid-params",
  "error": "must have required property 'token'"
}
```

<h3 id="visitor-transfer-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="visitor-transfer-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-departments">Omnichannel Departments</h1>

## Get List of Departments

<a id="opIdget-api-v1-livechat-department"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/department`

Get a list of the departments.
At least one of the following permissions is required:
* `view-livechat-departments`
* `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Removed the `query` parameter.       |
|2.2.0             | Added support to pagination    |
|0.42.0            | Added       |

<h3 id="get-list-of-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|text|query|string|false|Filter the result with any text.|
|enabled|query|boolean|false|Filter the result to only show enabled departments. The value can be boolean true or false.|
|showArchived|query|boolean|false|You can include the archived departments in the result. The value can be boolean true or false.|
|onlyMyDepartments|query|boolean|false|This parameter is for users with managers or admin roles. It only displays the departments that you are an agent of.|
|excludeDepartmentId|query|string|false|The department ID that you want to exclude from the result.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "64181a0728384134ed600dcc",
      "enabled": true,
      "name": "Support",
      "description": "",
      "showOnRegistration": false,
      "showOnOfflineForm": false,
      "requestTagBeforeClosingChat": false,
      "email": "kim.jane@rocketchat.com",
      "chatClosingTags": [],
      "offlineMessageChannelName": "Livestream",
      "abandonedRoomsCloseCustomMessage": "",
      "waitingQueueMessage": "",
      "departmentsAllowedToForward": [],
      "fallbackForwardDepartment": "",
      "_updatedAt": "2023-10-13T13:03:58.406Z",
      "numAgents": 4,
      "type": "d"
    },
    {
      "_id": "649230d479f5c6e276cf4a12",
      "enabled": false,
      "name": "Finance",
      "description": "",
      "showOnRegistration": false,
      "showOnOfflineForm": false,
      "requestTagBeforeClosingChat": false,
      "email": "test@gmail.com",
      "chatClosingTags": [],
      "offlineMessageChannelName": "",
      "abandonedRoomsCloseCustomMessage": "",
      "waitingQueueMessage": "",
      "departmentsAllowedToForward": [],
      "fallbackForwardDepartment": "",
      "type": "d",
      "_updatedAt": "2023-10-13T13:03:58.426Z",
      "numAgents": 3,
      "businessHourId": "650dc9cfa2f73c7460e18bea"
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="get-list-of-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» showOnOfflineForm|boolean|false|none|none|
|» requestTagBeforeClosingChat|boolean|false|none|none|
|» email|string|false|none|none|
|» chatClosingTags|[object]|false|none|none|
|» offlineMessageChannelName|string|false|none|none|
|» abandonedRoomsCloseCustomMessage|string|false|none|none|
|» waitingQueueMessage|string|false|none|none|
|» departmentsAllowedToForward|[object]|false|none|none|
|» fallbackForwardDepartment|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» numAgents|integer|false|none|none|
|» type|string|false|none|none|
|» businessHourId|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Register New Department

<a id="opIdpost-api-v1-livechat-department"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "department": {
      "enabled": false,
      "showOnRegistration": true,
      "name": "new from api",
      "email": "john@doe.com",
      "showOnOfflineForm": true
    },
    "agents": [
      {
        "agentId": "SQafHvoFPuB57NmBD"
      }
    ],
    "departmentUnit": {
      "_id": "66f46dc59a0766c20712d698"
    }
  }'
```

`POST /api/v1/livechat/department`

Permission required: `manage-livechat-departments`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.0.0           | New fields for department updated |
|0.42.0          | Added       |

> Body parameter

```json
{
  "department": {
    "enabled": false,
    "showOnRegistration": true,
    "name": "new from api",
    "email": "john@doe.com",
    "showOnOfflineForm": true
  },
  "agents": [
    {
      "agentId": "SQafHvoFPuB57NmBD"
    }
  ],
  "departmentUnit": {
    "_id": "66f46dc59a0766c20712d698"
  }
}
```

<h3 id="register-new-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» department|body|object|true|The object which takes the department details.|
|» » enabled|body|boolean|true|Whether you want to enable the department. The value can be boolean true or false.|
|» » showOnRegistration|body|boolean|true|You can let visitors choose the department they want to talk to. The option will appear to your customer in the Livechat widget. The value can be boolean true or false.|
|» » name|body|string|true|The name of the department you are creating.|
|» » email|body|string|true|The email ID associated with the department.|
|» » showOnOfflineForm|body|boolean|true|If you want your department to be displayed during off-business hours. The value can be boolean true or false.|
|» » description|body|string|false|A description of your department.|
|» agents|body|[object]|false|The object with the agent details that you want to add to the department.|
|» » agentId|body|string|false|The agent ID that you want to assign to the department.|
|» » order|body|integer|false|Determines agent priority when multiple agents have the same chat count. Agents with lower order values are assigned chats before others.|
|» departmentUnit|body|object|false|Assign the department to a [unit](https://docs.rocket.chat/docs/units).<br><br>**Guidelines for assigning departments to a unit**<br>- Permission required: `manage-livechat-departments`<br>- If the user making the request is a [monitor](https://docs.rocket.chat/docs/monitors), they must be a supervisor of the specified unit.<br>- If the user is not a monitor (such as an admin or [manager](https://docs.rocket.chat/docs/managers)), any unit can be associated to the department|
|» » _id|body|string|false|The id of the unit to assign the department.|

> Example responses

> 200 Response

```json
{
  "department": {
    "enabled": false,
    "name": "new from api",
    "numAgents": 1,
    "showOnRegistration": true,
    "_updatedAt": "2016-12-13T17:22:19.109Z",
    "_id": "iTfLCX3qqwKgf5uqg"
  },
  "agents": [
    {
      "agentId": "SQafHvoFPuB57NmBD",
      "count": 0,
      "order": 0
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'department' [error-invalid-params]",
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

<h3 id="register-new-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="register-new-department-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|object|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» numAgents|integer|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» _id|string|false|none|none|
|agents|[object]|false|none|none|
|» agentId|string|false|none|none|
|» count|integer|false|none|none|
|» order|integer|false|none|none|
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

## Get Department Information

<a id="opIdget-api-v1-livechat-department-:_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/department/{_id}`

Get information about a specific department using the department ID.
At least one of the following permissions is required:
* `view-livechat-departments`
* `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.2.0             | Added `includeAgents` query parameter|
|0.42.0            | Added       |

<h3 id="get-department-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|includeAgents|query|boolean|false|If agents should be included in the result. By default, the value is true and the list of agents is returned. The agents field will only be returned if the user has the `view-livechat-departments` permission.|
|_id|path|string|true|The department ID.|

> Example responses

> 200 Response

```json
{
  "department": {
    "_id": "iTfLCX3qqwKgf5uqg",
    "enabled": false,
    "name": "new from api",
    "description": "creating a department",
    "numAgents": 1,
    "showOnRegistration": true,
    "_updatedAt": "2016-12-13T17:22:19.109Z"
  },
  "agents": [
    {
      "_id": "DDjZbhTF74n3NBuWK",
      "agentId": "SQafHvoFPuB57NmBD",
      "departmentId": "iTfLCX3qqwKgf5uqg",
      "username": "john.doe",
      "count": 0,
      "order": 0,
      "_updatedAt": "2016-12-13T17:22:19.169Z"
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

<h3 id="get-department-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-department-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|object|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» numAgents|integer|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|agents|[object]|false|none|none|
|» _id|string|false|none|none|
|» agentId|string|false|none|none|
|» departmentId|string|false|none|none|
|» username|string|false|none|none|
|» count|integer|false|none|none|
|» order|integer|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Update Department

<a id="opIdput-api-v1-livechat-department-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "department": {
      "enabled": true,
      "name": "new from api - live",
      "showOnRegistration": true,
      "email": "test@test.com",
      "showOnOfflineForm": false
    },
    "agents": [
      {
        "agentId": "SQafHvoFPuB57NmBD",
        "username": "john.doe"
      }
    ],
    "departmentUnit": {
      "_id": "66f46dc59a0766c20712d698"
    }
  }'
```

`PUT /api/v1/livechat/department/{_id}`

Update the details of a specific department.
Permissions required:
* `manage-livechat-departments`
* To add agents: `add-livechat-department-agents`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.42.0            | Added       |

> Body parameter

```json
{
  "department": {
    "enabled": true,
    "name": "new from api - live",
    "showOnRegistration": true,
    "email": "test@test.com",
    "showOnOfflineForm": false
  },
  "agents": [
    {
      "agentId": "SQafHvoFPuB57NmBD",
      "username": "john.doe"
    }
  ],
  "departmentUnit": {
    "_id": "66f46dc59a0766c20712d698"
  }
}
```

<h3 id="update-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The department ID.|
|body|body|object|false|none|
|» department|body|object|true|The object which takes the department details.|
|» » enabled|body|boolean|true|Whether you want to enable the department. The value can be boolean true or false.|
|» » showOnRegistration|body|boolean|true|You can let visitors choose the department they want to talk to. The option will appear to your customer in the Livechat widget.<br>The value can be boolean true or false.|
|» » name|body|string|true|The name of the department you are creating.|
|» » email|body|string|true|The email ID associated with the department.|
|» » showOnOfflineForm|body|boolean|true|If you want your department to be displayed during off-business hours. The value can be boolean true or false.|
|» » description|body|string|false|A description of your department.|
|» agents|body|[object]|false|none|
|» » agentId|body|string|false|The agent ID that you want to assign to the department.|
|» » count|body|string|false|none|
|» » order|body|string|false|none|
|» departmentUnit|body|object|false|Assign the department to a [unit](https://docs.rocket.chat/docs/units).<br><br>**Guidelines for assigning departments to a unit**<br>- Permission required: `manage-livechat-departments`<br>- If the user making the request is a [monitor](https://docs.rocket.chat/docs/monitors), they must be a supervisor of the specified unit.<br>- If the user is not a monitor (such as an admin or [manager](https://docs.rocket.chat/docs/managers)), any unit can be associated to the department.<br>- Providing an empty object `({})`, undefined `({ _id: undefined})`, or null `({ _id: null})` for this parameter removes the department from the associated unit.|
|» » _id|body|string|false|The id of the unit to assign the department.|

> Example responses

> 200 Response

```json
{
  "department": {
    "_id": "iTfLCX3qqwKgf5uqg",
    "enabled": true,
    "name": "new from api - live",
    "description": "update api",
    "numAgents": 1,
    "showOnRegistration": true,
    "_updatedAt": "2016-12-13T17:30:02.643Z"
  },
  "agents": [
    {
      "_id": "DDjZbhTF74n3NBuWK",
      "agentId": "SQafHvoFPuB57NmBD",
      "departmentId": "iTfLCX3qqwKgf5uqg",
      "username": "john.doe",
      "count": 0,
      "order": 0,
      "_updatedAt": "2016-12-13T17:30:02.656Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'department' [error-invalid-params]",
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

<h3 id="update-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-department-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|object|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» numAgents|integer|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|agents|[object]|false|none|none|
|» _id|string|false|none|none|
|» agentId|string|false|none|none|
|» departmentId|string|false|none|none|
|» username|string|false|none|none|
|» count|integer|false|none|none|
|» order|integer|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Department

<a id="opIddelete-api-v1-livechat-department-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/livechat/department/{_id}`

At least one of the following permissions is required:
* `manage-livechat-departments`
* `remove-livechat-department`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.42.0            | Added       |

<h3 id="remove-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The department ID.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="remove-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="remove-department-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Autocomplete Department

<a id="opIdget-api-v1-livechat-department.autocomplete"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/department.autocomplete?selector=%7B%22exceptions%22%3A%5B%22departmentId%22%5D%2C%22term%22%3A%22test%22%7D' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/department.autocomplete`

Search for departments by name.

At least one of the following permissions is required:
  * `view-livechat-departments`
  * `view-l-room`


### Changelog
| Version | Description |
| ------- | ----------- |
|9.0.0   | Removed the `conditions` field from the `selector` parameter.       |
| 8.8.0   | Deprecated the `conditions` field in the `selector` parameter. |

<h3 id="autocomplete-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|selector|query|string|true|A JSON string containing the search `term` and an optional array of department IDs to exclude in `exceptions`.|
|onlyMyDepartments|query|boolean|false|Only displays the departments that you are assigned to. The value can be boolean `true` or `false`|
|showArchived|query|boolean|false|The result includes archived departments. The value can be Boolean `true` or `false`.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "_id": "64f0c2a1b3d4e5f6a7b8c9d0",
      "name": "Sales"
    },
    {
      "_id": "64f0c2a1b3d4e5f6a7b8c9d1",
      "name": "Support"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The 'selector' param is required"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="autocomplete-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="autocomplete-department-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
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

## Get Agents of Department

<a id="opIdget-api-v1-livechat-department-:_id-agents"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/string/agents \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/department/{_id}/agents`

Get the agents of a specific department. At least one of the following permissions is required:
  * `view-livechat-departments`
  * `view-l-room`

<h3 id="get-agents-of-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The department ID.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "agents": [
    {
      "_id": "SWugWdHhcTX4G2NAP",
      "agentId": "rocket.cat",
      "departmentId": "BiqbQav59HD2LzXEY",
      "_updatedAt": "2021-07-14T14:58:01.013Z",
      "count": 17,
      "departmentEnabled": true,
      "order": 0,
      "username": "rocket.cat"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-agents-of-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-agents-of-department-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agents|[object]|false|none|none|
|» _id|string|false|none|none|
|» agentId|string|false|none|none|
|» departmentId|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» count|integer|false|none|none|
|» departmentEnabled|boolean|false|none|none|
|» order|integer|false|none|none|
|» username|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Update Agents of Department

<a id="opIdpost-api-v1-livechat-department-_id-agents"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/string/agents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "upsert": [
      {
        "agentId": "6529401b024dde05d3f1cd85",
        "username": "kim"
      }
    ],
    "remove": []
  }'
```

`POST /api/v1/livechat/department/{_id}/agents`

Update the agents of a specific department. At least one of the following permissions is required:
  * `add-livechat-department-agents`
  * `manage-livechat-departments`

> Body parameter

```json
{
  "upsert": [
    {
      "agentId": "6529401b024dde05d3f1cd85",
      "username": "kim"
    }
  ],
  "remove": []
}
```

<h3 id="update-agents-of-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The department ID.|
|body|body|object|false|none|
|» upsert|body|[object]|true|The object that contains the agent details.|
|» » agentId|body|string|true|The agent ID.|
|» » username|body|string|true|The user name of the agent.|
|» remove|body|[object]|true|The object containing the details of the agent that you want to remove.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="update-agents-of-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-agents-of-department-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Get Departments by ID

<a id="opIdget-api-v1-livechat-department.listByIds"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/department.listByIds?ids=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/department.listByIds`

Get a list of departments by department IDs. At least one of the following permissions is required:
  * `view-livechat-departments`
  * `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Removed the `fields` parameter.       |

<h3 id="get-departments-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|ids|query|string|true|The department ID.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "4LCeYmCHHnQ3EDBgf",
      "enabled": true,
      "name": "Chatbot Sales",
      "description": "",
      "showOnRegistration": false,
      "showOnOfflineForm": false,
      "requestTagBeforeClosingChat": false,
      "email": "chatbotSales@g.c",
      "chatClosingTags": [],
      "offlineMessageChannelName": "",
      "abandonedRoomsCloseCustomMessage": "",
      "waitingQueueMessage": "",
      "departmentsAllowedToForward": "",
      "_updatedAt": "2021-07-15T15:11:16.856Z",
      "numAgents": 4,
      "ancestors": []
    },
    {
      "_id": "CAJioQNAvLnYWTy8i",
      "enabled": true,
      "name": "Support",
      "description": "",
      "showOnRegistration": true,
      "showOnOfflineForm": true,
      "requestTagBeforeClosingChat": false,
      "email": "mary@rocket.chat",
      "maxNumberSimultaneousChat": "",
      "waitingQueueMessage": "",
      "type": "d",
      "numAgents": 28,
      "_updatedAt": "2021-07-21T23:54:35.574Z",
      "ancestors": [
        "sriw2wmP2Zz2pPrre"
      ],
      "chatClosingTags": [],
      "abandonedRoomsCloseCustomMessage": "",
      "departmentsAllowedToForward": "",
      "offlineMessageChannelName": "",
      "visitorInactivityTimeoutInSeconds": "10",
      "parentId": "sriw2wmP2Zz2pPrre"
    },
    {
      "_id": "mHcx4rbi7htAmCCR5",
      "enabled": true,
      "name": "Chatbot Support",
      "description": "",
      "showOnRegistration": false,
      "showOnOfflineForm": false,
      "requestTagBeforeClosingChat": false,
      "email": "chatbotSupport@g.c",
      "chatClosingTags": [],
      "offlineMessageChannelName": "",
      "abandonedRoomsCloseCustomMessage": "",
      "waitingQueueMessage": "",
      "departmentsAllowedToForward": "",
      "_updatedAt": "2021-06-28T22:10:01.371Z",
      "numAgents": 3,
      "ancestors": [
        "sriw2wmP2Zz2pPrre"
      ],
      "parentId": "sriw2wmP2Zz2pPrre"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "The 'ids' param is required"
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

<h3 id="get-departments-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-departments-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» showOnOfflineForm|boolean|false|none|none|
|» requestTagBeforeClosingChat|boolean|false|none|none|
|» email|string|false|none|none|
|» chatClosingTags|[object]|false|none|none|
|» offlineMessageChannelName|string|false|none|none|
|» abandonedRoomsCloseCustomMessage|string|false|none|none|
|» waitingQueueMessage|string|false|none|none|
|» departmentsAllowedToForward|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» numAgents|integer|false|none|none|
|» ancestors|[string]|false|none|none|
|» maxNumberSimultaneousChat|string|false|none|none|
|» type|string|false|none|none|
|» visitorInactivityTimeoutInSeconds|string|false|none|none|
|» parentId|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Number of Chats

<a id="opIdget-api-v1-livechat-analytics-departments-amount-of-chats"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/amount-of-chats?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/amount-of-chats`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the number of chat rooms by department. Permission required: `view-livechat-manager`

<h3 id="get-number-of-chats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|answered|query|boolean|false|Whether the chats are answered or not.|
|departmentId|query|string|false|Enter the department ID for which you want the number of chats.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "rooms": 13,
      "_id": "NJaMpSvZFZ4NAXm3j"
    },
    {
      "rooms": 10,
      "_id": "8MGLTfaKLCbE9CqR8"
    },
    {
      "rooms": 4,
      "_id": "MpAiP9PMyHwBcmALx"
    },
    {
      "rooms": 51,
      "_id": "Yi87Ju7eTHiZQ7CJt"
    }
  ],
  "count": 4,
  "offset": 0,
  "total": 11,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-number-of-chats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-number-of-chats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» rooms|integer|false|none|none|
|» _id|string|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Average Service Time

<a id="opIdget-api-v1-livechat-analytics-departments-average-service-time"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/average-service-time?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/average-service-time`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Returns average service time (in seconds) for chats by department. Permission required: `view-livechat-manager`

<h3 id="get-average-service-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the average service time.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "sLYp3ry7CRizaP3rJ",
      "averageServiceTimeInSeconds": 2941
    },
    {
      "_id": "BiqbQav59HD2LzXEY",
      "averageServiceTimeInSeconds": 5831
    },
    {
      "_id": "8MGLTfaKLCbE9CqR8",
      "averageServiceTimeInSeconds": 1635
    }
  ],
  "count": 8,
  "offset": 0,
  "total": 8,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-average-service-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-average-service-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» averageServiceTimeInSeconds|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Average Chat Duration

<a id="opIdget-api-v1-livechat-analytics-departments-average-chat-duration-time"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/average-chat-duration-time?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/average-chat-duration-time`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Returns the average chat duration of each department. Permission required: `view-livechat-manager`

<h3 id="get-average-chat-duration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the average chat duration.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "64cf6c6feb07a913d946f34d",
      "averageChatDurationTimeInSeconds": 3314449
    },
    {
      "_id": "64181a0728384134ed600dcc",
      "averageChatDurationTimeInSeconds": 174296
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-average-chat-duration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-average-chat-duration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» averageChatDurationTimeInSeconds|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Total Service Time

<a id="opIdget-api-v1-livechat-analytics-departments-total-service-time"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/total-service-time?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/total-service-time`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the total service time (in seconds) by department. Permission required: `view-livechat-manager`

<h3 id="get-total-service-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the total service time.|

> Example responses

> 206 Response

```json
{
  "departments": [
    {
      "_id": "64181a0728384134ed600dcc",
      "chats": 5,
      "serviceTimeDuration": 268684
    },
    {
      "_id": "64cf6c6feb07a913d946f34d",
      "chats": 1,
      "serviceTimeDuration": 2461
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-total-service-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|206|Partial Content|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-total-service-time-responseschema">Response Schema</h3>

Status Code **206**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» chats|integer|false|none|none|
|» serviceTimeDuration|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Average Waiting Time

<a id="opIdget-api-v1-livechat-analytics-departments-average-waiting-time"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/average-waiting-time?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/average-waiting-time`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the average visitor waiting time (in seconds) by department. Permission required: `view-livechat-manager`

<h3 id="get-average-waiting-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the average waiting time.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "64181a0728384134ed600dcc",
      "averageWaitingTimeInSeconds": 199
    },
    {
      "_id": "649230d479f5c6e276cf4a12",
      "averageWaitingTimeInSeconds": 521
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-average-waiting-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-average-waiting-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» averageWaitingTimeInSeconds|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Total Transferred Chats

<a id="opIdget-api-v1-livechat-analytics-departments-total-transferred-chats"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/total-transferred-chats?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/total-transferred-chats`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the total number of transferred chats by department. Permission required: `view-livechat-manager`

<h3 id="get-total-transferred-chats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the total transferred chats.|

> Example responses

> 206 Response

```json
{
  "departments": [
    {
      "numberOfTransferredRooms": 6,
      "_id": "BiqbQav59HD2LzXEY"
    },
    {
      "numberOfTransferredRooms": 27,
      "_id": "CAJioQNAvLnYWTy8i"
    },
    {
      "numberOfTransferredRooms": 1,
      "_id": "8MGLTfaKLCbE9CqR8"
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
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-total-transferred-chats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|206|Partial Content|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-total-transferred-chats-responseschema">Response Schema</h3>

Status Code **206**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» numberOfTransferredRooms|integer|false|none|none|
|» _id|string|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Total Abandoned Chats

<a id="opIdget-api-v1-livechat-analytics-departments-total-abandoned-chats"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/total-abandoned-chats?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/total-abandoned-chats`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the total number of abandoned chats (rooms) by department. Permission required: `view-livechat-manager`

<h3 id="get-total-abandoned-chats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the total abandoned chats.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "abandonedRooms": 3,
      "_id": "4LCeYmCHHnQ3EDBgf"
    },
    {
      "abandonedRooms": 1,
      "_id": "8MGLTfaKLCbE9CqR8"
    },
    {
      "abandonedRooms": 1,
      "_id": "Yi87Ju7eTHiZQ7CJt"
    },
    {
      "abandonedRooms": 77,
      "_id": "GgYvrkAF63aeQmsh4"
    },
    {
      "abandonedRooms": 12,
      "_id": "sLYp3ry7CRizaP3rJ"
    },
    {
      "abandonedRooms": 12,
      "_id": "BiqbQav59HD2LzXEY"
    },
    {
      "abandonedRooms": 6,
      "_id": "CAJioQNAvLnYWTy8i"
    }
  ],
  "count": 7,
  "offset": 0,
  "total": 7,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-total-abandoned-chats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-total-abandoned-chats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» abandonedRooms|integer|false|none|none|
|» _id|string|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Percentage of Abandoned Chats

<a id="opIdget-api-v1-livechat-analytics-departments-percentage-abandoned-chats"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/departments/percentage-abandoned-chats?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/departments/percentage-abandoned-chats`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the percentage of abandoned chats per department. Permission required: `view-livechat-manager`

<h3 id="get-percentage-of-abandoned-chats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|departmentId|query|string|false|Enter the department ID for which you want the percentage of abandoned chats.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "64cf6c6feb07a913d946f34d",
      "percentageOfAbandonedChats": 0
    },
    {
      "_id": "649230d479f5c6e276cf4a12",
      "percentageOfAbandonedChats": 0
    },
    {
      "_id": "64181a0728384134ed600dcc",
      "percentageOfAbandonedChats": 11
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
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-percentage-of-abandoned-chats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-percentage-of-abandoned-chats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» percentageOfAbandonedChats|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Archived Departments

<a id="opIdget-api-v1-livechat-departments-archived"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/departments/archived \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/departments/archived`

Get the list of archived departments in the workspace. Any of the following permissions is required: 
 * `view-livechat-departments`
 * `view-l-room`

<h3 id="get-archived-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "66fa9f5d6ea9eba859b650b6",
      "enabled": false,
      "showOnRegistration": true,
      "name": "gfyh88",
      "email": "john@doe.com",
      "showOnOfflineForm": true,
      "type": "d",
      "_updatedAt": "2025-03-28T11:17:22.654Z",
      "abandonedRoomsCloseCustomMessage": "",
      "allowReceiveForwardOffline": true,
      "chatClosingTags": [],
      "departmentsAllowedToForward": [],
      "description": "",
      "fallbackForwardDepartment": "",
      "offlineMessageChannelName": "",
      "requestTagBeforeClosingChat": false,
      "waitingQueueMessage": "",
      "numAgents": 0,
      "ancestors": [
        "67b84af9382738a951e6f3b8"
      ],
      "parentId": "67b84af9382738a951e6f3b8",
      "archived": true
    },
    {
      "_id": "66a7680360ab9acca6a57fad",
      "enabled": false,
      "name": "test-dept",
      "description": "",
      "showOnRegistration": false,
      "showOnOfflineForm": false,
      "requestTagBeforeClosingChat": false,
      "email": "test-dept@example.com",
      "chatClosingTags": [],
      "offlineMessageChannelName": "",
      "abandonedRoomsCloseCustomMessage": "",
      "waitingQueueMessage": "",
      "departmentsAllowedToForward": [],
      "fallbackForwardDepartment": "",
      "allowReceiveForwardOffline": false,
      "type": "d",
      "_updatedAt": "2025-04-02T11:28:31.651Z",
      "numAgents": 0,
      "archived": true
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="get-archived-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-archived-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» name|string|false|none|none|
|» email|string|false|none|none|
|» showOnOfflineForm|boolean|false|none|none|
|» type|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» abandonedRoomsCloseCustomMessage|string|false|none|none|
|» allowReceiveForwardOffline|boolean|false|none|none|
|» chatClosingTags|[object]|false|none|none|
|» departmentsAllowedToForward|[object]|false|none|none|
|» description|string|false|none|none|
|» fallbackForwardDepartment|string|false|none|none|
|» offlineMessageChannelName|string|false|none|none|
|» requestTagBeforeClosingChat|boolean|false|none|none|
|» waitingQueueMessage|string|false|none|none|
|» numAgents|integer|false|none|none|
|» ancestors|[string]|false|none|none|
|» parentId|string|false|none|none|
|» archived|boolean|false|none|none|
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

## Archive a Department

<a id="opIdpost-api-v1-livechat-department-archive-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/693fc4b0ddfe6ceaf280f7f6/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/livechat/department/{_id}/archive`

Use this endpoint to archive a department. If a department is no longer needed but you want to retain it for future use, you can archive it.

Archiving a department also disables it and removes it from the list of departments. To view archived departments, use the <a href='https://developer.rocket.chat/apidocs/get-archived-departments' target='_blank'>Get Archived Departments</a> endpoint.

Permission required: `manage-livechat-departments`

<h3 id="archive-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|Enter the department ID that you want to archive.|

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
  "error": "department-not-found"
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

<h3 id="archive-a-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="archive-a-department-responseschema">Response Schema</h3>

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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Unarchive a Department

<a id="opIdpost-api-v1-livechat-department-unarchive-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/693fc4b0ddfe6ceaf280f7f6/unarchive \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/livechat/department/{_id}/unarchive`

Use this endpoint to unarchive a department. The department returns to the list of departments, but it stays disabled because archiving a department also disables it. To enable the department again, use the <a href='https://developer.rocket.chat/apidocs/update-department' target='_blank'>Update Department</a> endpoint and set `enabled` to `true`.

Permission required: `manage-livechat-departments`

<h3 id="unarchive-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|Enter the department ID that you want to unarchive.|

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
  "error": "[department-not-found]",
  "errorType": "department-not-found"
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

<h3 id="unarchive-a-department-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="unarchive-a-department-responseschema">Response Schema</h3>

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

## Check Department Creation

<a id="opIdget-api-v1-livechat-department-isDepartmentCreationAvailable"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/department/isDepartmentCreationAvailable \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/department/isDepartmentCreationAvailable`

Use this endpoint to check whether departments can be created on the workspace. Workspaces on the Premium plans have no limit to the number of departments that can be created. On Community workspaces, only one department can be created.

Any of the following permissions is required:
 * `view-livechat-departments`
 * `manage-livechat-departments`

<h3 id="check-department-creation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "isDepartmentCreationAvailable": true,
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

<h3 id="check-department-creation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-department-creation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isDepartmentCreationAvailable|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-custom-fields">Omnichannel Custom Fields</h1>

## Create Omnichannel Custom Field

<a id="opIdpost-api-v1-livechat-custom-fields.save"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/custom-fields.save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "customFieldData": {
      "field": "new1",
      "label": "new11",
      "visibility": true,
      "scope": "visitor",
      "type": "select",
      "searchable": true,
      "regexp": "",
      "required": false,
      "defaultValue": "",
      "options": "optionA, optionB",
      "public": true
    }
  }'
```

`POST /api/v1/livechat/custom-fields.save`

Create a new Omnichannel custom field or update an existing custom field. You can refer to the <a href='https://docs.rocket.chat/docs/omnichannel-custom-fields' target='_blank'>Omnichannel Custom Fields</a> user guide for details.

Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
|7.11.0            | Added       |

> Body parameter

```json
{
  "customFieldData": {
    "field": "new1",
    "label": "new11",
    "visibility": true,
    "scope": "visitor",
    "type": "select",
    "searchable": true,
    "regexp": "",
    "required": false,
    "defaultValue": "",
    "options": "optionA, optionB",
    "public": true
  }
}
```

<h3 id="create-omnichannel-custom-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» customFieldId|body|string|false|If you want to update an existing custom field, enter the `field` value.|
|» customFieldData|body|object|true|In this object, provide the custom field data.|
|» » field|body|string|false|Enter a value for the field.|
|» » label|body|string|false|Enter a label for the field.|
|» » visibility|body|string|false|The only options are `hidden` or `visible`. When visible, the custom field is displayed in the contact or room info for agents.|
|» » scope|body|string|false|Set the scope of the custom field. The options are: `visitor` and `room`.<br>Refer to the user guide for details.|
|» » type|body|string|false|Set the input type of this field. The options are: `input` and `select`.|
|» » searchable|body|boolean|false|Set whether or not searching in the Omnichannel Contact Center can be done with the custom field.|
|» » regexp|body|string|false|Validate the values entered for the custom field using regular expressions. For example, [a-z]. This means that the custom field only accepts lowercase letters. Any other characters will display an error message.|
|» » required|body|boolean|false|Set whether or not this field should be mandatory.|
|» » defaultValue|body|string|false|Enter a default value for the field.|
|» » options|body|string|false|If the field `type` is `select`, enter the options that users can select. The values must be comma-separated.|
|» » public|body|boolean|false|If enabled, the custom field will be displayed in external applications, such as Livechat.|

> Example responses

> 200 Response

```json
{
  "customField": {
    "label": "address11",
    "scope": "visitor",
    "visibility": "hidden",
    "type": "input",
    "searchable": true,
    "regexp": "",
    "required": false,
    "defaultValue": "",
    "options": "",
    "public": true,
    "_updatedAt": "2025-10-06T06:52:40.102Z"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="create-omnichannel-custom-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-omnichannel-custom-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customField|object|false|none|none|
|» label|string|false|none|none|
|» scope|string|false|none|none|
|» visibility|string|false|none|none|
|» type|string|false|none|none|
|» searchable|boolean|false|none|none|
|» regexp|string|false|none|none|
|» required|boolean|false|none|none|
|» defaultValue|string|false|none|none|
|» options|string|false|none|none|
|» public|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Send Custom Field Value

<a id="opIdpost-api-v1-livechat-custom.field"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/custom.field \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "iNKE8a6k6cjbqWhWd",
    "key": "address",
    "value": "Rocket.Chat Avenue",
    "overwrite": true
  }'
```

`POST /api/v1/livechat/custom.field`

Send the value for a custom field.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.70.0            | Added       |

> Body parameter

```json
{
  "token": "iNKE8a6k6cjbqWhWd",
  "key": "address",
  "value": "Rocket.Chat Avenue",
  "overwrite": true
}
```

<h3 id="send-custom-field-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|The visitor token.|
|» key|body|string|true|The custom field.|
|» value|body|string|true|The value you want to set for the custom field.|
|» overwrite|body|boolean|true|Overwrite the value of the custom field.|

> Example responses

> 200 Response

```json
{
  "field": {
    "key": "address",
    "value": "Rocket.Chat Avenue",
    "overwrite": true
  },
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

<h3 id="send-custom-field-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-custom-field-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|object|false|none|none|
|» key|string|false|none|none|
|» value|string|false|none|none|
|» overwrite|boolean|false|none|none|
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

## Send Array of Custom Field Values

<a id="opIdpost-api-v1-livechat-custom.fields"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/custom.fields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "iNKE8a6k6cjbqWhWd",
    "customFields": [
      {
        "key": "address",
        "value": "Rocket.Chat Avenue",
        "overwrite": true
      }
    ]
  }'
```

`POST /api/v1/livechat/custom.fields`

Send an array of values for different custom fields.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.70.0            | Added       |

> Body parameter

```json
{
  "token": "iNKE8a6k6cjbqWhWd",
  "customFields": [
    {
      "key": "address",
      "value": "Rocket.Chat Avenue",
      "overwrite": true
    }
  ]
}
```

<h3 id="send-array-of-custom-field-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|The visitor token.|
|» customFields|body|[object]|true|The object in which you must enter the custom field information.|
|» » key|body|string|true|The custom field.|
|» » value|body|string|true|The value you want to set for the custom field.|
|» » overwrite|body|boolean|true|Overwrite the value of the custom field.|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "Key": "address",
      "value": "Rocket.Chat Avenue",
      "overwrite": true
    }
  ],
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

<h3 id="send-array-of-custom-field-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-array-of-custom-field-values-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[object]|false|none|none|
|» Key|string|false|none|none|
|» value|string|false|none|none|
|» overwrite|boolean|false|none|none|
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

## Get Omnichannel Custom Fields

<a id="opIdget-api-v1-livechat-custom-fields"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/custom-fields \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/custom-fields`

Get a list of the Omnichannel custom fields.
Permission required: `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.2.0             | Added       |

<h3 id="get-omnichannel-custom-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|text|query|string|false|Enter the text to filter the search result.|

> Example responses

> 200 Response

```json
{
  "customFields": [
    {
      "_id": "address",
      "label": "address",
      "scope": "visitor",
      "visibility": "visible",
      "regexp": "",
      "searchable": true,
      "type": "input",
      "required": false,
      "defaultValue": "",
      "options": "",
      "public": true,
      "_updatedAt": "2023-10-30T13:43:09.408Z",
      "id": "address"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-omnichannel-custom-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-omnichannel-custom-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customFields|[object]|false|none|none|
|» _id|string|false|none|none|
|» label|string|false|none|none|
|» scope|string|false|none|none|
|» visibility|string|false|none|none|
|» regexp|string|false|none|none|
|» searchable|boolean|false|none|none|
|» type|string|false|none|none|
|» required|boolean|false|none|none|
|» defaultValue|string|false|none|none|
|» options|string|false|none|none|
|» public|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» id|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get Custom Field Information

<a id="opIdget-api-v1-livechat-custom-fields-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/custom-fields/address \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/custom-fields/{_id}`

Get details about a specific custom field.
Permission required: `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.4.0             | Added       |

<h3 id="get-custom-field-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The custom field ID.|

> Example responses

> 200 Response

```json
{
  "customField": {
    "_id": "address",
    "label": "address",
    "scope": "visitor",
    "visibility": "visible",
    "regexp": "",
    "searchable": true,
    "type": "input",
    "required": false,
    "defaultValue": "",
    "options": "",
    "public": true,
    "_updatedAt": "2023-10-30T13:43:09.408Z",
    "id": "address"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-custom-field-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-custom-field-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customField|object|false|none|none|
|» _id|string|false|none|none|
|» label|string|false|none|none|
|» scope|string|false|none|none|
|» visibility|string|false|none|none|
|» regexp|string|false|none|none|
|» searchable|boolean|false|none|none|
|» type|string|false|none|none|
|» required|boolean|false|none|none|
|» defaultValue|string|false|none|none|
|» options|string|false|none|none|
|» public|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» id|string|false|none|none|
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

## Delete Omnichannel Custom Field

<a id="opIdpost-api-v1-livechat-custom-fields.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/custom-fields.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "customFieldId": "class"
  }'
```

`POST /api/v1/livechat/custom-fields.delete`

Delete an Omnichannel custom field entry. Permission required: `view-livechat-manager`. (On the workspace UI, go to **Manage** > **Workspace** > **Permissions**. Search for the `View Omnichannel Manager` permission. By default, livechat managers and agents have this permission.)

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
|7.11.0            | Added       |

> Body parameter

```json
{
  "customFieldId": "class"
}
```

<h3 id="delete-omnichannel-custom-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» customFieldId|body|string|true|Enter the custom field name that you want to delete.|

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
  "errorType": "error-invalid-params",
  "error": "must have required property 'customFieldId'"
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

<h3 id="delete-omnichannel-custom-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-omnichannel-custom-field-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

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

<h1 id="omnichannel-omnichannel-business-hours">Omnichannel Business Hours</h1>

## Get Business Hours

<a id="opIdget-api-v1-livechat-business-hours"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/business-hours \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/business-hours`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Retrieves all the <a href='https://docs.rocket.chat/docs/business-hours' target='_blank'>business hours</a> attached to a workspace.
Permission required: `view-livechat-business-hours`

<h3 id="get-business-hours-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|false|Name of the business hour.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "businessHours": [
    {
      "_id": "5eeed2c5ffea9759d3a0e5ac",
      "name": "",
      "active": true,
      "type": "default",
      "ts": "2020-06-21T03:24:02.252Z",
      "workHours": [
        {
          "day": "Monday",
          "start": {
            "time": "08:00",
            "utc": {
              "dayOfWeek": "Monday",
              "time": "08:00"
            },
            "cron": {
              "dayOfWeek": "Monday",
              "time": "08:00"
            }
          },
          "finish": {
            "time": "21:06",
            "utc": {
              "dayOfWeek": "Monday",
              "time": "21:06"
            },
            "cron": {
              "dayOfWeek": "Monday",
              "time": "21:06"
            }
          },
          "open": true
        },
        {
          "day": "Tuesday",
          "start": {
            "time": "08:00",
            "utc": {
              "dayOfWeek": "Tuesday",
              "time": "08:00"
            },
            "cron": {
              "dayOfWeek": "Tuesday",
              "time": "08:00"
            }
          },
          "finish": {
            "time": "10:00",
            "utc": {
              "dayOfWeek": "Tuesday",
              "time": "10:00"
            },
            "cron": {
              "dayOfWeek": "Tuesday",
              "time": "10:00"
            }
          },
          "open": true
        },
        {
          "day": "Wednesday",
          "start": {
            "time": "08:00",
            "utc": {
              "dayOfWeek": "Wednesday",
              "time": "08:00"
            },
            "cron": {
              "dayOfWeek": "Wednesday",
              "time": "08:00"
            }
          },
          "finish": {
            "time": "21:00",
            "utc": {
              "dayOfWeek": "Wednesday",
              "time": "21:00"
            },
            "cron": {
              "dayOfWeek": "Wednesday",
              "time": "21:00"
            }
          },
          "open": true
        },
        {
          "day": "Thursday",
          "start": {
            "time": "01:00",
            "utc": {
              "dayOfWeek": "Thursday",
              "time": "01:00"
            },
            "cron": {
              "dayOfWeek": "Thursday",
              "time": "01:00"
            }
          },
          "finish": {
            "time": "23:00",
            "utc": {
              "dayOfWeek": "Thursday",
              "time": "23:00"
            },
            "cron": {
              "dayOfWeek": "Thursday",
              "time": "23:00"
            }
          },
          "open": true
        },
        {
          "day": "Friday",
          "start": {
            "time": "10:00",
            "utc": {
              "dayOfWeek": "Friday",
              "time": "10:00"
            },
            "cron": {
              "dayOfWeek": "Friday",
              "time": "10:00"
            }
          },
          "finish": {
            "time": "22:00",
            "utc": {
              "dayOfWeek": "Friday",
              "time": "22:00"
            },
            "cron": {
              "dayOfWeek": "Friday",
              "time": "22:00"
            }
          },
          "open": true
        },
        {
          "day": "Saturday",
          "start": {
            "time": "08:00",
            "utc": {
              "dayOfWeek": "Saturday",
              "time": "08:00"
            },
            "cron": {
              "dayOfWeek": "Saturday",
              "time": "08:00"
            }
          },
          "finish": {
            "time": "20:00",
            "utc": {
              "dayOfWeek": "Saturday",
              "time": "20:00"
            },
            "cron": {
              "dayOfWeek": "Saturday",
              "time": "20:00"
            }
          },
          "open": false
        },
        {
          "day": "Sunday",
          "start": {
            "time": "08:00",
            "utc": {
              "dayOfWeek": "Sunday",
              "time": "08:00"
            },
            "cron": {
              "dayOfWeek": "Sunday",
              "time": "08:00"
            }
          },
          "finish": {
            "time": "20:00",
            "utc": {
              "dayOfWeek": "Sunday",
              "time": "20:00"
            },
            "cron": {
              "dayOfWeek": "Sunday",
              "time": "20:00"
            }
          },
          "open": false
        }
      ],
      "timezone": {
        "name": "Africa/Abidjan",
        "utc": "0"
      },
      "_updatedAt": "2022-12-05T17:12:11.585Z",
      "departmentsToApplyBusinessHour": ""
    },
    {
      "_id": "62b1f74aa98c5b539adc912c",
      "ts": "2022-06-21T16:52:26.386Z",
      "name": "indian support time ",
      "workHours": [
        {
          "day": "Monday",
          "start": {
            "time": "10:00",
            "utc": {
              "dayOfWeek": "Monday",
              "time": "04:30"
            },
            "cron": {
              "dayOfWeek": "Monday",
              "time": "04:30"
            }
          },
          "finish": {
            "time": "12:00",
            "utc": {
              "dayOfWeek": "Monday",
              "time": "06:30"
            },
            "cron": {
              "dayOfWeek": "Monday",
              "time": "06:30"
            }
          },
          "open": true
        },
        {
          "day": "Tuesday",
          "start": {
            "time": "00:00",
            "utc": {
              "dayOfWeek": "Monday",
              "time": "18:30"
            },
            "cron": {
              "dayOfWeek": "Monday",
              "time": "18:30"
            }
          },
          "finish": {
            "time": "23:00",
            "utc": {
              "dayOfWeek": "Tuesday",
              "time": "17:30"
            },
            "cron": {
              "dayOfWeek": "Tuesday",
              "time": "17:30"
            }
          },
          "open": true
        },
        {
          "day": "Wednesday",
          "start": {
            "time": "08:00",
            "utc": {
              "dayOfWeek": "Wednesday",
              "time": "02:30"
            },
            "cron": {
              "dayOfWeek": "Wednesday",
              "time": "02:30"
            }
          },
          "finish": {
            "time": "23:00",
            "utc": {
              "dayOfWeek": "Wednesday",
              "time": "17:30"
            },
            "cron": {
              "dayOfWeek": "Wednesday",
              "time": "17:30"
            }
          },
          "open": true
        },
        {
          "day": "Thursday",
          "start": {
            "time": "10:00",
            "utc": {
              "dayOfWeek": "Thursday",
              "time": "04:30"
            },
            "cron": {
              "dayOfWeek": "Thursday",
              "time": "04:30"
            }
          },
          "finish": {
            "time": "01:00",
            "utc": {
              "dayOfWeek": "Wednesday",
              "time": "19:30"
            },
            "cron": {
              "dayOfWeek": "Wednesday",
              "time": "19:30"
            }
          },
          "open": true
        },
        {
          "day": "Friday",
          "start": {
            "time": "12:00",
            "utc": {
              "dayOfWeek": "Friday",
              "time": "06:30"
            },
            "cron": {
              "dayOfWeek": "Friday",
              "time": "06:30"
            }
          },
          "finish": {
            "time": "23:50",
            "utc": {
              "dayOfWeek": "Friday",
              "time": "18:20"
            },
            "cron": {
              "dayOfWeek": "Friday",
              "time": "18:20"
            }
          },
          "open": true
        },
        {
          "day": "Saturday",
          "start": {
            "time": "00:00",
            "utc": {
              "dayOfWeek": "Friday",
              "time": "18:30"
            },
            "cron": {
              "dayOfWeek": "Friday",
              "time": "18:30"
            }
          },
          "finish": {
            "time": "00:00",
            "utc": {
              "dayOfWeek": "Friday",
              "time": "18:30"
            },
            "cron": {
              "dayOfWeek": "Friday",
              "time": "18:30"
            }
          },
          "open": false
        },
        {
          "day": "Sunday",
          "start": {
            "time": "00:00",
            "utc": {
              "dayOfWeek": "Saturday",
              "time": "18:30"
            },
            "cron": {
              "dayOfWeek": "Saturday",
              "time": "18:30"
            }
          },
          "finish": {
            "time": "00:00",
            "utc": {
              "dayOfWeek": "Saturday",
              "time": "18:30"
            },
            "cron": {
              "dayOfWeek": "Saturday",
              "time": "18:30"
            }
          },
          "open": false
        }
      ],
      "active": true,
      "type": "custom",
      "timezone": {
        "name": "Asia/Kolkata",
        "utc": "+05:30"
      },
      "_updatedAt": "2022-11-28T10:41:17.303Z"
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="get-business-hours-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-business-hours-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessHours|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» active|boolean|false|none|none|
|» type|string|false|none|none|
|» ts|string|false|none|none|
|» workHours|[object]|false|none|none|
|» » day|string|false|none|none|
|» » start|object|false|none|none|
|» » » time|string|false|none|none|
|» » » utc|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » » cron|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » finish|object|false|none|none|
|» » » time|string|false|none|none|
|» » » utc|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » » cron|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » open|boolean|false|none|none|
|» timezone|object|false|none|none|
|» » name|string|false|none|none|
|» » utc|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» departmentsToApplyBusinessHour|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get Default Business Hour

<a id="opIdget-api-v1-livechat-business-hour"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/business-hour \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/business-hour`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Fetches the default business hours of a workspace.
Permission required: `view-livechat-business-hours`

<h3 id="get-default-business-hour-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "businessHour": {
    "_id": "62f14dd55026d9aac120c653",
    "name": "",
    "active": true,
    "type": "default",
    "ts": "2022-08-08T17:54:29.441Z",
    "workHours": [
      {
        "day": "Monday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Monday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Monday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Monday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Monday",
            "time": "20:00"
          }
        },
        "code": 1,
        "open": true
      },
      {
        "day": "Tuesday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Tuesday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Tuesday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Tuesday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Tuesday",
            "time": "20:00"
          }
        },
        "code": 2,
        "open": true
      },
      {
        "day": "Wednesday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Wednesday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Wednesday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Wednesday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Wednesday",
            "time": "20:00"
          }
        },
        "code": 3,
        "open": true
      },
      {
        "day": "Thursday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Thursday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Thursday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Thursday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Thursday",
            "time": "20:00"
          }
        },
        "code": 4,
        "open": true
      },
      {
        "day": "Friday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Friday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Friday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Friday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Friday",
            "time": "20:00"
          }
        },
        "code": 5,
        "open": true
      },
      {
        "day": "Saturday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Saturday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Saturday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Saturday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Saturday",
            "time": "20:00"
          }
        },
        "code": 6,
        "open": false
      },
      {
        "day": "Sunday",
        "start": {
          "time": "08:00",
          "utc": {
            "dayOfWeek": "Sunday",
            "time": "08:00"
          },
          "cron": {
            "dayOfWeek": "Sunday",
            "time": "08:00"
          }
        },
        "finish": {
          "time": "20:00",
          "utc": {
            "dayOfWeek": "Sunday",
            "time": "20:00"
          },
          "cron": {
            "dayOfWeek": "Sunday",
            "time": "20:00"
          }
        },
        "code": 7,
        "open": false
      }
    ],
    "timezone": {
      "name": "Africa/Abidjan",
      "utc": "0"
    },
    "_updatedAt": "2023-01-02T18:30:31.632Z"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-default-business-hour-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-default-business-hour-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessHour|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» active|boolean|false|none|none|
|» type|string|false|none|none|
|» ts|string|false|none|none|
|» workHours|[object]|false|none|none|
|» » day|string|false|none|none|
|» » start|object|false|none|none|
|» » » time|string|false|none|none|
|» » » utc|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » » cron|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » finish|object|false|none|none|
|» » » time|string|false|none|none|
|» » » utc|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » » cron|object|false|none|none|
|» » » » dayOfWeek|string|false|none|none|
|» » » » time|string|false|none|none|
|» » code|integer|false|none|none|
|» » open|boolean|false|none|none|
|» timezone|object|false|none|none|
|» » name|string|false|none|none|
|» » utc|string|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Remove Business Hour

<a id="opIdpost-api-v1-livechat-business-hours.remove"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/business-hours.remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "_id": "6953aca46ff48667974be88c",
    "type": "custom"
  }'
```

`POST /api/v1/livechat/business-hours.remove`

Remove an Omnichannel business hour. 

> Body parameter

```json
{
  "_id": "6953aca46ff48667974be88c",
  "type": "custom"
}
```

<h3 id="remove-business-hour-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|true|Enter the business hour ID that you want to delete.|
|» type|body|string|true|Enter the type of the business hour. It can be `default` or `custom`.|

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
  "errorType": "error-invalid-params",
  "error": "must have required property '_id'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="remove-business-hour-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="remove-business-hour-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a Business Hour

<a id="opIdpost-api-v1-livechat-business-hours.save"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/business-hours.save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "api-BH",
    "timezoneName": "Asia/Bangkok",
    "daysOpen": [
      "Monday",
      "Wednesday"
    ],
    "departmentsToApplyBusinessHour": "TEST-DEPT",
    "active": true,
    "type": "custom",
    "workHours": [
      {
        "day": "Monday",
        "start": "08:00:00",
        "finish": "16:00:00",
        "open": true
      },
      {
        "day": "Wednesday",
        "start": "08:00:00",
        "finish": "16:00:00",
        "open": true
      }
    ],
    "_id": "6953b3bc6ff48667974be88e"
  }'
```

`POST /api/v1/livechat/business-hours.save`

Use this endpoint to create a new Omnichannel business hour.

> Body parameter

```json
{
  "name": "api-BH",
  "timezoneName": "Asia/Bangkok",
  "daysOpen": [
    "Monday",
    "Wednesday"
  ],
  "departmentsToApplyBusinessHour": "TEST-DEPT",
  "active": true,
  "type": "custom",
  "workHours": [
    {
      "day": "Monday",
      "start": "08:00:00",
      "finish": "16:00:00",
      "open": true
    },
    {
      "day": "Wednesday",
      "start": "08:00:00",
      "finish": "16:00:00",
      "open": true
    }
  ],
  "_id": "6953b3bc6ff48667974be88e"
}
```

<h3 id="create-a-business-hour-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|Enter a name for the business hour.|
|» timezoneName|body|string|true|Enter the timezone for the business hour. You can view the list of time zones from the Business Hours settings in the workspace.|
|» daysOpen|body|[string]|true|Enter the days of the week that the business hour will apply to.|
|» departmentsToApplyBusinessHour|body|string|true|Enter the department ID to which the business hour must be applied.|
|» active|body|boolean|true|Enter whether or not the business hour must be active as soon as it is created.|
|» type|body|string|true|Enter the type of the business hour. It can be `default` or `custom`.|
|» workHours|body|[object]|true|Enter the work hours for each open day. Make sure to include the day you have added to the `daysOpen` parameter. Otherwise, it will not be included in the business hour.|
|» » day|body|string|true|Enter the day of the week.|
|» » start|body|string|true|Enter the start time of the business hour.|
|» » finish|body|string|true|Enter the end time of the business hour.|
|» » open|body|boolean|true|Enter whether or not this work hour is active. If you set this as `false`, the work hour will not be included in the business hour.|
|» _id|body|string|false|Use this parameter to update an existing business hour.|

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

<h3 id="create-a-business-hour-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-a-business-hour-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-priorities">Omnichannel Priorities</h1>

## Get List of Priorities

<a id="opIdget-api-v1-livechat-priorities"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/priorities \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/priorities`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Retrieves list of existing <a href='https://docs.rocket.chat/docs/priorities' target='_blank'>priorities</a>. At least one of the following permissions is required:
  * `manage-livechat-priorities`
  * `view-l-room`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

<h3 id="get-list-of-priorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|text|query|string|false|Filter the search result with the text.|

> Example responses

> 200 Response

```json
{
  "priorities": [
    {
      "_id": "64007cc2fa0ed7dd905092e3",
      "i18n": "Lowest",
      "sortItem": 5,
      "dirty": false
    },
    {
      "_id": "64007cc2fa0ed7dd905092e4",
      "i18n": "Low",
      "sortItem": 4,
      "dirty": false
    },
    {
      "_id": "64007cc2fa0ed7dd905092e5",
      "i18n": "Medium",
      "sortItem": 3,
      "dirty": false
    },
    {
      "_id": "64007cc2fa0ed7dd905092e6",
      "i18n": "High",
      "sortItem": 2,
      "dirty": false
    },
    {
      "_id": "64007cc2fa0ed7dd905092e7",
      "i18n": "Highest",
      "sortItem": 1,
      "dirty": false
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-list-of-priorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-priorities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priorities|[object]|false|none|none|
|» _id|string|false|none|none|
|» i18n|string|false|none|none|
|» sortItem|integer|false|none|none|
|» dirty|boolean|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get a Priority

<a id="opIdget-api-v1-livechat-priorities-priorityId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/priorities/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/priorities/{priorityId}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get details of a specific priority.
At least one of the following permissions is required:
  * `manage-livechat-priorities`
  * `view-l-room`

### Changelog
| Version | Description  |
| ------- |--------------|
| 6.0.0  | Added         |

<h3 id="get-a-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|priorityId|path|string|true|The priority ID.|

> Example responses

> 200 Response

```json
{
  "_id": "64007cc2fa0ed7dd905092e3",
  "i18n": "Lowest",
  "sortItem": 5,
  "dirty": false,
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

<h3 id="get-a-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-a-priority-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|i18n|string|false|none|none|
|sortItem|integer|false|none|none|
|dirty|boolean|false|none|none|
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

## Update Priority

<a id="opIdput-api-v1-livechat-priorities-priorityId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/priorities/64007cc2fa0ed7dd905092e3 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "Very low"
  }'
```

`PUT /api/v1/livechat/priorities/{priorityId}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Update an existing priority.
Permission required: `manage-livechat-priorities`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

> Body parameter

```json
{
  "name": "Very low"
}
```

<h3 id="update-priority-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|priorityId|path|string|true|The priority ID.|
|body|body|object|false|none|
|» name|body|string|true|The name of the priority.|

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
  "error": "must match exactly one schema in oneOf [error-invalid-params]",
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

<h3 id="update-priority-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-priority-responseschema">Response Schema</h3>

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

## Check Priority Reset

<a id="opIdget-api-v1-livechat-priorities.reset"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/priorities.reset \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/priorities.reset`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Use this endpoint to check whether or not you can reset the priorities or not. You cannot reset priorities if the values are already in the default state. Once you edit the priorities, you get the option to reset them. Permission required: `manage-livechat-priorities`

<h3 id="check-priority-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "reset": true,
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

<h3 id="check-priority-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-priority-reset-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reset|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Priorities

<a id="opIdpost-livechat-priorities.reset"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/priorities.reset \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/livechat/priorities.reset`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

This endpoint resets all priorities back to default.
Permission required: `manage-livechat-priorities`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

<h3 id="reset-priorities-parameters">Parameters</h3>

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="reset-priorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="reset-priorities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

<h1 id="omnichannel-omnichannel-tags">Omnichannel Tags</h1>

## Get List of Tags

<a id="opIdget-api-v1-livechat-tags"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/tags \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/tags`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Retrieves list of <a href='https://docs.rocket.chat/docs/tags' target='_blank'>tags</a>. Here are some important details to note when retrieving tags:
- By default, only tags not linked to any department are returned.
- To retrieve all tags in the workspace, set the `viewAll` parameter to `true`.
- If a `department` is specified, the response includes both the tags associated with that department and those not linked to any department.

At least one of the following permissions is required:
  * `view-l-room`
  * `manage-livechat-tags`

<h3 id="get-list-of-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|text|query|string|false|Filter the search result with the text.|
|department|query|string|false|Enter the department ID.|
|viewAll|query|boolean|false|Select whether you want to view all tags.|
|sort|query|object|false|Sort tags in ascending (`1`) or descending (`-1`) order. The options are:<br> * `name`: Sort by tag name. `sort={"name": 1}` (default) or `sort={"name": -1}`<br> * `description`: Sort by tag description. `sort={"description": 1}` or `sort={"description": -1}`<br> * `numDepartments`: Sort by number of departments associated with the tag.<br> * `_createdAt`: Sort by date of tag creation.<br> * `_updatedAt`: Sort by the update timestamp.|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "_id": "nNJntq2n6GBdR8JC4",
      "name": "331",
      "numDepartments": 2,
      "departments": [
        "kxL4qaa29SMpy3ZXG",
        "WRY3EFGAT9Xh5NFBv"
      ],
      "_updatedAt": "2022-11-28T07:17:31.973Z",
      "description": "xfgh"
    },
    {
      "_id": "bhA8DPhSdeBEJ2C94",
      "name": "QA-Passed",
      "numDepartments": 0,
      "departments": [],
      "_updatedAt": "2022-08-30T12:14:54.173Z"
    },
    {
      "_id": "b8mvKqZXiAw36pDqE",
      "name": "VoIP",
      "description": "voip test",
      "numDepartments": 0,
      "departments": [],
      "_updatedAt": "2022-03-01T06:27:43.113Z"
    },
    {
      "_id": "GR6zxTM5PMHxGwud6",
      "name": "t1",
      "description": "test1",
      "numDepartments": 1,
      "departments": [
        "kxL4qaa29SMpy3ZXG"
      ],
      "_updatedAt": "2023-01-04T14:02:29.038Z"
    }
  ],
  "count": 4,
  "offset": 0,
  "total": 4,
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

<h3 id="get-list-of-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» numDepartments|integer|false|none|none|
|» departments|[string]|false|none|none|
|» _updatedAt|string|false|none|none|
|» description|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get a Tag

<a id="opIdget-api-v1-livechat-tags-tagId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/tags/pXkCRLGxD34y2FEZq \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/tags/{tagId}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

At least one of the following permissions is required:
  * `view-l-room`
  * `manage-livechat-tags`

<h3 id="get-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|tagId|path|string|true|The tag ID.|

> Example responses

> 200 Response

```json
{
  "_id": "nNJntq2n6GBdR8JC4",
  "name": "331",
  "numDepartments": 2,
  "departments": [
    "kxL4qaa29SMpy3ZXG",
    "WRY3EFGAT9Xh5NFBv"
  ],
  "_updatedAt": "2022-11-28T07:17:31.973Z",
  "description": "test",
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

> 404 Response

```json
{
  "success": false,
  "error": "Tag not found"
}
```

<h3 id="get-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|

<h3 id="get-a-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|name|string|false|none|none|
|numDepartments|integer|false|none|none|
|departments|[string]|false|none|none|
|_updatedAt|string|false|none|none|
|description|string|false|none|none|
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

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tag

<a id="opIdpost-api-v1-livechat-tags.delete"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/tags.delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "id": "682223ba30c9c71254e46012"
  }'
```

`POST /api/v1/livechat/tags.delete`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

This endpoint is used to delete an Omnichannel tag from the workspace. Permission required: `manage-livechat-tags`

### Changelog
| Version      | Description |
| ------------ | ------------|
|7.12.0         | Added       |

> Body parameter

```json
{
  "id": "682223ba30c9c71254e46012"
}
```

<h3 id="delete-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» id|body|string|true|Enter the tag ID that you want to delete.|

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
  "error": "Tag not found"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="delete-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-a-tag-responseschema">Response Schema</h3>

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

## Create a Tag

<a id="opIdpost-api-v1-livechat-tags.save"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/tags.save \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "tagData": {
      "name": "apiTag",
      "description": "testing"
    },
    "tagDepartments": [
      "TEST-DEPT"
    ],
    "_id": "69536b7a6ff48667974be86b"
  }'
```

`POST /api/v1/livechat/tags.save`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>

Use this endpoint to create an Omnichannel tag. Permission required: `manage-livechat-tags`

> Body parameter

```json
{
  "tagData": {
    "name": "apiTag",
    "description": "testing"
  },
  "tagDepartments": [
    "TEST-DEPT"
  ],
  "_id": "69536b7a6ff48667974be86b"
}
```

<h3 id="create-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» tagData|body|object|true|none|
|» » name|body|string|false|Enter a name for the tag.|
|» » description|body|string|false|Enter the tag's description.|
|» tagDepartments|body|[string]|false|Enter the department IDs that can use this tag.|
|» _id|body|string|false|Use this parameter to update an existing tag.|

> Example responses

> 200 Response

```json
{
  "name": "apiTag01",
  "description": "testing api endpoint",
  "numDepartments": 1,
  "departments": [
    "TEST-DEPT"
  ],
  "_id": "69536ca06ff48667974be86d",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "errorType": "error-invalid-params",
  "error": "must have required property 'tagData'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="create-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-a-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|description|string|false|none|none|
|numDepartments|integer|false|none|none|
|departments|[string]|false|none|none|
|_id|string|false|none|none|
|success|boolean|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|errorType|string|false|none|none|
|error|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-units">Omnichannel Units</h1>

## Get List of Units

<a id="opIdget-api-v1-livechat-units"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/units`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-units`

<h3 id="get-list-of-units-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|text|query|string|false|Enter some text to filter the results.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "units": [
    {
      "_id": "SB3Z7uuEvd3aKPjnE",
      "name": "12345",
      "visibility": "public",
      "type": "u",
      "numMonitors": 3,
      "numDepartments": 3,
      "_updatedAt": "2022-09-15T14:55:32.338Z"
    },
    {
      "_id": "uiPBkzcau5hrWwBkG",
      "name": "C",
      "visibility": "public",
      "type": "u",
      "numMonitors": 1,
      "numDepartments": 3,
      "_updatedAt": "2022-08-29T20:18:07.442Z"
    },
    {
      "_id": "jsNuTwygAAWFPkt8u",
      "name": "Mtest",
      "visibility": "public",
      "type": "u",
      "numMonitors": 1,
      "numDepartments": 1,
      "_updatedAt": "2022-09-15T11:44:32.103Z"
    },
    {
      "_id": "LnM2rzbknjYSkkd5p",
      "name": "Sales Unit",
      "visibility": "public",
      "type": "u",
      "numMonitors": 1,
      "numDepartments": 2,
      "_updatedAt": "2022-09-15T11:44:15.721Z"
    },
    {
      "_id": "y6TXZeTzn4mAxDhL2",
      "name": "TestDept1",
      "visibility": "public",
      "type": "u",
      "numMonitors": 4,
      "numDepartments": 1,
      "_updatedAt": "2022-08-30T09:55:19.240Z"
    },
    {
      "_id": "xiAnkznAh4RSJ8DQT",
      "name": "abc",
      "visibility": "public",
      "type": "u",
      "numMonitors": 1,
      "numDepartments": 3,
      "_updatedAt": "2023-01-03T10:19:58.219Z"
    },
    {
      "_id": "TGjc7wN84KxQup9cF",
      "name": "business unit test",
      "visibility": "public",
      "type": "u",
      "numMonitors": 3,
      "numDepartments": 1,
      "_updatedAt": "2022-11-21T11:16:01.698Z"
    }
  ],
  "count": 7,
  "offset": 0,
  "total": 7,
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

<h3 id="get-list-of-units-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-units-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|units|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» visibility|string|false|none|none|
|» type|string|false|none|none|
|» numMonitors|integer|false|none|none|
|» numDepartments|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Create Unit

<a id="opIdpost-api-v1-livechat-units"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "unitData": {
      "name": "unitxx2",
      "visibility": "public"
    },
    "unitMonitors": [
      {
        "monitorId": "GT67Tv6x5p5y5xZWN",
        "username": "testerio"
      }
    ],
    "unitDepartments": [
      {
        "departmentId": "CgM4vfNNtj8t4QEMd"
      }
    ]
  }'
```

`POST /api/v1/livechat/units`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Create a <a href='https://docs.rocket.chat/docs/units' target='_blank'>unit</a> to group departments. Permission required: `manage-livechat-units`
### Changelog
| Version      | Description |
| ------------ | ------------|
|4.2.0         | Added       |

> Body parameter

```json
{
  "unitData": {
    "name": "unitxx2",
    "visibility": "public"
  },
  "unitMonitors": [
    {
      "monitorId": "GT67Tv6x5p5y5xZWN",
      "username": "testerio"
    }
  ],
  "unitDepartments": [
    {
      "departmentId": "CgM4vfNNtj8t4QEMd"
    }
  ]
}
```

<h3 id="create-unit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» unitData|body|object|true|The object containing the unit information.|
|» » name|body|string|true|The name of the unit that you are creating.|
|» » visibility|body|string|true|The visibility of the unit. For example, `public` or `private`.|
|» unitMonitors|body|[object]|true|The object containing the unit monitors information.|
|» » monitorId|body|string|true|The monitor ID that you want to add to the unit.|
|» » username|body|string|true|The user name of the monitor.|
|» unitDepartments|body|[object]|true|The object containing the department information.|
|» » departmentId|body|string|true|The department ID that you want to add to the unit.|

> Example responses

> 200 Response

```json
{
  "name": "unitxx2",
  "visibility": "public",
  "type": "u",
  "numMonitors": 1,
  "numDepartments": 1,
  "_updatedAt": "2021-12-06T14:30:27.744Z",
  "_id": "o5zNtKy7BcTMgyXtm",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Expected object, got undefined"
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

<h3 id="create-unit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-unit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|visibility|string|false|none|none|
|type|string|false|none|none|
|numMonitors|integer|false|none|none|
|numDepartments|integer|false|none|none|
|_updatedAt|string|false|none|none|
|_id|string|false|none|none|
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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Unit

<a id="opIdget-api-v1-livechat-units-unitId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/units/{id}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get details of a specific unit.

Permission required: `manage-livechat-units`

<h3 id="get-a-unit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|id|path|string|true|The unit ID.|

> Example responses

> 200 Response

```json
{
  "_id": "LnM2rzbknjYSkkd5p",
  "name": "Sales Unit",
  "visibility": "public",
  "type": "u",
  "numMonitors": 1,
  "numDepartments": 2,
  "_updatedAt": "2022-09-15T11:44:15.721Z",
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

<h3 id="get-a-unit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-a-unit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|name|string|false|none|none|
|visibility|string|false|none|none|
|type|string|false|none|none|
|numMonitors|integer|false|none|none|
|numDepartments|integer|false|none|none|
|_updatedAt|string|false|none|none|
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

## Update Unit

<a id="opIdpost-api-v1-livechat-units-id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "unitData": {
      "name": "unitxx2",
      "visibility": "private"
    },
    "unitMonitors": [
      {
        "monitorId": "GT67Tv6x5p5y5xZWN",
        "username": "testerio"
      }
    ],
    "unitDepartments": [
      {
        "departmentId": "CgM4vfNNtj8t4QEMd"
      }
    ]
  }'
```

`POST /api/v1/livechat/units/{id}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-units`

### Changelog
| Version      | Description |
| ------------ | ------------|
|4.2.0         | Added       |

> Body parameter

```json
{
  "unitData": {
    "name": "unitxx2",
    "visibility": "private"
  },
  "unitMonitors": [
    {
      "monitorId": "GT67Tv6x5p5y5xZWN",
      "username": "testerio"
    }
  ],
  "unitDepartments": [
    {
      "departmentId": "CgM4vfNNtj8t4QEMd"
    }
  ]
}
```

<h3 id="update-unit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|id|path|string|true|The unit ID.|
|body|body|object|false|none|
|» unitData|body|object|true|The object containing the unit data.|
|» » name|body|string|true|The name of the unit that you are creating.|
|» » visibility|body|string|true|The visibility of the unit. For example, `public` or `private`.|
|» unitMonitors|body|[object]|true|The object containing the unit monitors information.|
|» » monitorId|body|string|true|The monitor ID that you want to add to the unit.|
|» » username|body|string|true|The user name of the monitor.|
|» unitDepartments|body|[object]|true|The object containing the department information.|
|» » departmentId|body|string|true|The department ID that you want to add to the unit.|

> Example responses

> 200 Response

```json
{
  "name": "unitxx2",
  "visibility": "private",
  "type": "u",
  "numMonitors": 1,
  "numDepartments": 1,
  "_updatedAt": "2021-12-06T14:40:59.478Z",
  "_id": "o5zNtKy7BcTMgyXtm",
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

<h3 id="update-unit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-unit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|visibility|string|false|none|none|
|type|string|false|none|none|
|numMonitors|integer|false|none|none|
|numDepartments|integer|false|none|none|
|_updatedAt|string|false|none|none|
|_id|string|false|none|none|
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

## Delete a Unit

<a id="opIddelete-api-v1-livechat-units-id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/livechat/units/{id}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-units`

### Changelog
| Version      | Description |
| ------------ | ------------|
|4.2.0         | Added       |

<h3 id="delete-a-unit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|id|path|string|true|The unit ID.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-a-unit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-a-unit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Get List of Unit Monitors

<a id="opIdget-api-v1-livechat-units-unitId-monitors"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units/string/monitors \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/units/{unitId}/monitors`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get the list of monitors associated with a specific unit.

Permission required: `manage-livechat-units`

<h3 id="get-list-of-unit-monitors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|unitId|path|string|true|The unit ID.|

> Example responses

> 200 Response

```json
{
  "monitors": [
    {
      "_id": "Gv8rxcv4WTEDnnGiT",
      "monitorId": "MJk4XK5QpsFWJzmSz",
      "unitId": "TGjc7wN84KxQup9cF",
      "_updatedAt": "2022-11-21T11:16:01.708Z",
      "username": "jjay"
    },
    {
      "_id": "dvSh7G6WW6J5XykQw",
      "monitorId": "GdyoCfHfd3um5N9vP",
      "unitId": "TGjc7wN84KxQup9cF",
      "_updatedAt": "2022-11-21T11:16:01.718Z",
      "username": "j.coel"
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

<h3 id="get-list-of-unit-monitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-unit-monitors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monitors|[object]|false|none|none|
|» _id|string|false|none|none|
|» monitorId|string|false|none|none|
|» unitId|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» username|string|false|none|none|
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

## Get Available Departments by Unit Id

<a id="opIdget-api-v1-livechat-units-unitId-departments-available"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units/string/departments/available \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/units/{unitId}/departments/available`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-units`

<h3 id="get-available-departments-by-unit-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|text|query|string|false|Filter the result with the text.|
|onlyMyDepartments|query|boolean|false|Whether you want the result for the departments that you are part of.|
|unitId|path|string|true|The unit ID.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "64181a0728384134ed600dcc",
      "enabled": false,
      "name": "Missing Money",
      "description": "",
      "showOnRegistration": false,
      "showOnOfflineForm": false,
      "requestTagBeforeClosingChat": false,
      "email": "test@test.com",
      "chatClosingTags": [],
      "offlineMessageChannelName": "Livestream",
      "abandonedRoomsCloseCustomMessage": "",
      "waitingQueueMessage": "",
      "departmentsAllowedToForward": [],
      "fallbackForwardDepartment": "",
      "_updatedAt": "2023-11-29T12:48:03.843Z",
      "numAgents": 3,
      "type": "d",
      "ancestors": [
        "6567236571f856761e61c9a2"
      ],
      "parentId": "6567236571f856761e61c9a2"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-available-departments-by-unit-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-available-departments-by-unit-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» showOnOfflineForm|boolean|false|none|none|
|» requestTagBeforeClosingChat|boolean|false|none|none|
|» email|string|false|none|none|
|» chatClosingTags|[object]|false|none|none|
|» offlineMessageChannelName|string|false|none|none|
|» abandonedRoomsCloseCustomMessage|string|false|none|none|
|» waitingQueueMessage|string|false|none|none|
|» departmentsAllowedToForward|[object]|false|none|none|
|» fallbackForwardDepartment|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» numAgents|integer|false|none|none|
|» type|string|false|none|none|
|» ancestors|[string]|false|none|none|
|» parentId|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get Departments by Unit ID

<a id="opIdget-api-v1-livechat-units-unitId-departments"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/units/string/departments \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/units/{unitId}/departments`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-units`

<h3 id="get-departments-by-unit-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|unitId|path|string|true|The unit ID.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "MfvRXBwEWY6tTwqFh",
      "enabled": true,
      "name": "C",
      "description": "test dept",
      "showOnRegistration": true,
      "showOnOfflineForm": true,
      "requestTagBeforeClosingChat": true,
      "email": "C@test.com",
      "chatClosingTags": [
        "please add a tag"
      ],
      "offlineMessageChannelName": "",
      "maxNumberSimultaneousChat": "2",
      "visitorInactivityTimeoutInSeconds": "0",
      "abandonedRoomsCloseCustomMessage": "closed",
      "waitingQueueMessage": "please wait!",
      "departmentsAllowedToForward": "",
      "_updatedAt": "2022-12-14T14:44:51.923Z",
      "numAgents": 5,
      "ancestors": [
        "TGjc7wN84KxQup9cF"
      ],
      "parentId": "TGjc7wN84KxQup9cF",
      "fallbackForwardDepartment": "KgCzEB2gWngKp9JF3"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-departments-by-unit-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-departments-by-unit-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» enabled|boolean|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» showOnRegistration|boolean|false|none|none|
|» showOnOfflineForm|boolean|false|none|none|
|» requestTagBeforeClosingChat|boolean|false|none|none|
|» email|string|false|none|none|
|» chatClosingTags|[string]|false|none|none|
|» offlineMessageChannelName|string|false|none|none|
|» maxNumberSimultaneousChat|string|false|none|none|
|» visitorInactivityTimeoutInSeconds|string|false|none|none|
|» abandonedRoomsCloseCustomMessage|string|false|none|none|
|» waitingQueueMessage|string|false|none|none|
|» departmentsAllowedToForward|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» numAgents|integer|false|none|none|
|» ancestors|[string]|false|none|none|
|» parentId|string|false|none|none|
|» fallbackForwardDepartment|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

<h1 id="omnichannel-sla-policies">SLA Policies</h1>

## Get List of SLA Policies

<a id="opIdget-api-v1-livechat-sla"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/sla \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/sla`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

<h3 id="get-list-of-sla-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|text|query|string|false|The text with which you want to filter the result.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "sla": [
    {
      "_id": "641daf3d7718f90c810429c8",
      "name": "Minimal",
      "description": "2m UI creat",
      "dueTimeInMinutes": 2,
      "_updatedAt": "2023-03-24T14:10:05.063Z"
    },
    {
      "_id": "6417f67528384134ed600dc6",
      "name": "Try",
      "description": "Based on 1 min",
      "dueTimeInMinutes": 1,
      "_updatedAt": "2023-03-20T06:00:21.736Z"
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="get-list-of-sla-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-sla-policies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sla|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» dueTimeInMinutes|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Create SLA Policy

<a id="opIdpost-api-v1-livechat-sla"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/sla \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "Optimum",
    "description": "OPtimum SLA",
    "dueTimeInMinutes": 4
  }'
```

`POST /api/v1/livechat/sla`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-sla`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

> Body parameter

```json
{
  "name": "Optimum",
  "description": "OPtimum SLA",
  "dueTimeInMinutes": 4
}
```

<h3 id="create-sla-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» name|body|string|true|The name of the SLA policy.|
|» description|body|string|true|The SLA description.|
|» dueTimeInMinutes|body|integer|true|The SLA due time.|

> Example responses

> 200 Response

```json
{
  "sla": {
    "name": "Optimum",
    "description": "Optimum SLA",
    "dueTimeInMinutes": 4,
    "_id": "641db89a7718f90c810429cc"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
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

<h3 id="create-sla-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-sla-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sla|object|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» dueTimeInMinutes|integer|false|none|none|
|» _id|string|false|none|none|
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

## Get an SLA

<a id="opIdget-api-v1-livechat-sla-slaId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/sla/string \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/sla/{slaId}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get details of a specific SLA policy.

At least one of the following permissions is required:
  * `manage-livechat-sla`
  * `view-l-room`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

<h3 id="get-an-sla-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|slaId|path|string|true|The ID of the SLA.|

> Example responses

> 200 Response

```json
{
  "_id": "641daf3d7718f90c810429c8",
  "name": "Minimal",
  "description": "2m UI creat",
  "dueTimeInMinutes": 2,
  "_updatedAt": "2023-03-24T14:10:05.063Z",
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

<h3 id="get-an-sla-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-an-sla-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|dueTimeInMinutes|integer|false|none|none|
|_updatedAt|string|false|none|none|
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

## Update an SLA

<a id="opIdput-api-v1-livechat-sla-slaId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/sla/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`PUT /api/v1/livechat/sla/{slaId}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>


Update an existing SLA policy.

Permission required: `manage-livechat-sla`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

<h3 id="update-an-sla-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|slaId|path|string|true|The ID of the SLA.|

> Example responses

> 200 Response

```json
{
  "sla": {
    "name": "Minimal updated",
    "description": "Minimal SLA updated",
    "dueTimeInMinutes": 7,
    "_updatedAt": "2023-03-24T16:31:34.712Z",
    "_id": "641daf3d7718f90c810429c8"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
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

<h3 id="update-an-sla-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="update-an-sla-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sla|object|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» dueTimeInMinutes|integer|false|none|none|
|» _updatedAt|string|false|none|none|
|» _id|string|false|none|none|
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

## Delete an SLA

<a id="opIddelete-api-v1-livechat-sla-slaId"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/sla/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/livechat/sla/{slaId}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Permission required: `manage-livechat-sla`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.0.0         | Added       |

<h3 id="delete-an-sla-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|slaId|path|string|true|The ID of the SLA.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-an-sla-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-an-sla-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

<h1 id="omnichannel-canned-responses">Canned Responses</h1>

## List All Canned Responses

<a id="opIdget-api-v1-canned-responses"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/canned-responses \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/canned-responses`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get a list of all canned responses in the workspace.

Permissions required:
- `view-canned-responses`
- `view-all-canned-responses`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | Removed the `fields` parameter.       |
|1.0.0            | Added       |

<h3 id="list-all-canned-responses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|shortcut|query|string|false|The shortcut to trigger the message snippet.|
|text|query|string|false|The message snippet.|
|scope|query|string|false|The scope of the canned response. It can either be `global`, `user`, or `department`.|
|tags|query|string|false|The tags for your canned response.|
|departmentId|query|string|false|The department ID where the canned response belongs to. It is required if the `scope` is `department`.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|createdBy|query|string|false|The user ID who created the canned response.|

> Example responses

> 200 Response

```json
{
  "cannedResponses": [
    {
      "_id": "646c747ca8c3a3ba32d0e2e8",
      "shortcut": "Denied",
      "text": "This is an example",
      "scope": "global",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "kim.jane"
      },
      "_createdAt": "2023-05-23T08:08:28.241Z",
      "_updatedAt": "2023-05-23T08:08:28.241Z"
    },
    {
      "_id": "646c6ed9a8c3a3ba32d0e2db",
      "shortcut": "my-new-canned",
      "text": "This is an example",
      "scope": "global",
      "tags": [
        "failed",
        "card"
      ],
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "doe.john"
      },
      "_createdAt": "2023-05-23T07:44:25.912Z",
      "_updatedAt": "2023-05-23T07:44:25.912Z"
    },
    {
      "_id": "646c7350a8c3a3ba32d0e2e0",
      "shortcut": "my-new-canned-",
      "text": "This is an example",
      "scope": "hi",
      "tags": [
        "failed",
        "card"
      ],
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "jane.mary"
      },
      "_createdAt": "2023-05-23T08:03:28.148Z",
      "_updatedAt": "2023-05-23T08:03:28.148Z"
    }
  ],
  "count": 3,
  "offset": 0,
  "total": 3,
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

<h3 id="list-all-canned-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-all-canned-responses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cannedResponses|[object]|false|none|none|
|» _id|string|false|none|none|
|» shortcut|string|false|none|none|
|» text|string|false|none|none|
|» scope|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» tags|[string]|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Create or Update a Canned Response

<a id="opIdpost-api-v1-canned-responses"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/canned-responses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "shortcut": "test-canned",
    "text": "This is an example test for canned response",
    "scope": "global",
    "tags": [
      "tag1",
      "tag2"
    ]
  }'
```

`POST /api/v1/canned-responses`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

To create and update <a href='https://docs.rocket.chat/docs/canned-responses' target='_blank'>canned responses</a>, the following permissions are required:
* `save-canned-responses`
* `save-all-canned-responses`

### Changelog
| Version      | Description |
| ------------ | ------------|
|1.0.0         | Added       |

> Body parameter

```json
{
  "shortcut": "test-canned",
  "text": "This is an example test for canned response",
  "scope": "global",
  "tags": [
    "tag1",
    "tag2"
  ]
}
```

<h3 id="create-or-update-a-canned-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|Note: To update a canned response, the `_id` parameter is required along with the other required parameters. This parameter is not used to create a canned response.|
|» shortcut|body|string|true|The shortcut to trigger the message snippet.|
|» text|body|string|true|The message snippet.|
|» scope|body|string|true|The scope of the canned response. It can either be global, user or department.|
|» tags|body|[string]|false|The tags for your canned response.|
|» departmentId|body|string|false|The departmentId where the canned response belongs to. It is required if the scope is department.|
|» _id|body|string|false|The canned response's ID.|

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
  "error": "must have required property 'shortcut' [error-invalid-params]",
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

<h3 id="create-or-update-a-canned-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-or-update-a-canned-response-responseschema">Response Schema</h3>

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

## Get User Canned Responses

<a id="opIdget-api-v1-canned-responses.get"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/canned-responses.get \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/canned-responses.get`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get a list of all canned responses in the workspace that belong to the current user scope.

Permission required: `view-canned-responses`

### Changelog
| Version      | Description |
| ------------ | ------------|
|1.0.0         | Added       |

<h3 id="get-user-canned-responses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "responses": [
    {
      "_id": "6470086ba8c3a3ba32d0fb1b",
      "shortcut": "department-checking",
      "text": "This is check test for departmental canned response",
      "scope": "global",
      "departmentId": "64181a0728384134ed600dcc",
      "createdBy": {
        "_id": "2tTEqR7ZNMJ4HGGNa",
        "username": "testroxie"
      },
      "_createdAt": "2023-05-26T01:16:27.848Z",
      "_updatedAt": "2023-05-26T01:16:27.848Z"
    },
    {
      "_id": "647009e1a8c3a3ba32d0fb1f",
      "shortcut": "admin-checking",
      "text": "This is check test for departmental canned response",
      "scope": "department",
      "departmentId": "64181a0728384134ed600dcc",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "kim.jane"
      },
      "_createdAt": "2023-05-26T01:22:41.104Z",
      "_updatedAt": "2023-05-26T01:22:41.104Z"
    },
    {
      "_id": "647009fba8c3a3ba32d0fb21",
      "shortcut": "admin-checking3",
      "text": "This is check test for departmental canned response",
      "scope": "global",
      "departmentId": "64181a0728384134ed600dcc",
      "createdBy": {
        "_id": "rbAXPnMktTFbNpwtJ",
        "username": "doe.john"
      },
      "_createdAt": "2023-05-26T01:23:07.374Z",
      "_updatedAt": "2023-05-26T01:23:07.374Z"
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

<h3 id="get-user-canned-responses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-user-canned-responses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[object]|false|none|none|
|» _id|string|false|none|none|
|» shortcut|string|false|none|none|
|» text|string|false|none|none|
|» scope|string|false|none|none|
|» departmentId|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Get a Canned Response

<a id="opIdget-api-v1-canned-responses-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/canned-responses/EwmbZ9nLSx7kFamYB \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/canned-responses/{_id}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Get a specific canned response.

Permission required: `view-canned-responses`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.0.0            | Added       |

<h3 id="get-a-canned-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The canned response's ID.|

> Example responses

> 200 Response

```json
{
  "cannedResponse": {
    "_id": "EwmbZ9nLSx7kFamYB",
    "shortcut": "user",
    "text": "Meu 32423423423423423",
    "scope": "user",
    "userId": "9L3wuBXKpbAWdfgx8",
    "createdBy": {
      "_id": "9L3wuBXKpbAWdfgx8",
      "username": "rafael.ferreira"
    },
    "_createdAt": "2021-05-26T18:59:17.929Z",
    "_updatedAt": "2021-05-26T18:59:17.929Z"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-a-canned-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-a-canned-response-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cannedResponse|object|false|none|none|
|» _id|string|false|none|none|
|» shortcut|string|false|none|none|
|» text|string|false|none|none|
|» scope|string|false|none|none|
|» userId|string|false|none|none|
|» createdBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» _createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Delete a Canned Response

<a id="opIddelete-api-v1-canned-responses-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/canned-responses/EwmbZ9nLSx7kFamYB \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/canned-responses/{_id}`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Use this endpoint to delete a canned response. Permission required: `remove-canned-responses`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.12.0            | Added       |

<h3 id="delete-a-canned-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The canned response's ID.|

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

<h3 id="delete-a-canned-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="delete-a-canned-response-responseschema">Response Schema</h3>

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

<h1 id="omnichannel-omnichannel-transcript">Omnichannel Transcript</h1>

## Request Omnichannel Transcript

<a id="opIdpost-api-v1-livechat-transcript"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/transcript \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rid": "XFzMqgn33DcsQkpJp",
    "token": "iNKE8a6k6cjbqWhWd",
    "email": "visitor@rocket.chat"
  }'
```

`POST /api/v1/livechat/transcript`

The endpoint is used by visitors to request a transcript of their chat to be sent to their email once the conversation ends. The room must be closed before you can send a transcript.

You can also request transcripts for older conversations given that you know the older token and room ID.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.70.0             | Added       |

> Body parameter

```json
{
  "rid": "XFzMqgn33DcsQkpJp",
  "token": "iNKE8a6k6cjbqWhWd",
  "email": "visitor@rocket.chat"
}
```

<h3 id="request-omnichannel-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» rid|body|string|true|The room ID.|
|» token|body|string|true|The visitor token.|
|» email|body|string|true|The visitor's email ID where the transcript should be sent.|

> Example responses

> 200 Response

```json
{
  "message": "Livechat transcript sent",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'rid' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="request-omnichannel-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="request-omnichannel-transcript-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Send Omnichannel Transcript

<a id="opIdpost-api-v1-livechat-transcript-:rid"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/transcript/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "email": "email@test.com",
    "subject": "Livechat Transcript"
  }'
```

`POST /api/v1/livechat/transcript/{rid}`

This endpoint is used by agents and managers to schedule an email transcript to be sent once the chat is closed.
Permission required: `send-omnichannel-chat-transcript`
The room must be opened.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0            | Added       |

> Body parameter

```json
{
  "email": "email@test.com",
  "subject": "Livechat Transcript"
}
```

<h3 id="send-omnichannel-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|rid|path|string|true|The room ID.|
|body|body|object|false|none|
|» email|body|string|true|The email address where the transcript should be sent.|
|» subject|body|string|true|The subject of the email.|

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

<h3 id="send-omnichannel-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="send-omnichannel-transcript-responseschema">Response Schema</h3>

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

## Delete Omnichannel Transcript

<a id="opIddelete-api-v1-livechat-transcript-rid"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/transcript/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`DELETE /api/v1/livechat/transcript/{rid}`

This endpoint is used to cancel any transcript requests for an open room, meaning that the chat transcript won't be sent after the chat is closed. You can not use Send Omnichannel Transcript endpoint twice at a time. You must delete the previous request with this endpoint before requesting again.
Permission required: `send-omnichannel-chat-transcript`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0            | Added       |

<h3 id="delete-omnichannel-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|rid|path|string|true|The room ID.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-omnichannel-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-omnichannel-transcript-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Request PDF Transcript

<a id="opIdpost-api-v1-omnichannel-rid-request-transcript"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/string/request-transcript \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/omnichannel/{rid}/request-transcript`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

<a href="https://docs.rocket.chat/docs/omnichannel-conversations#conversation-transcript" target="_blank">Request a PDF transcript</a> for an Omnichannel conversation. The conversation must be closed before it can be exported.

Permission required: `request-pdf-transcript`.
Omnichannel <a href="https://docs.rocket.chat/docs/managers" target="_blank">managers</a> and <a href="https://docs.rocket.chat/docs/agents" target="_blank">agents</a> have this permission by default.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.0.0            | Added       |

<h3 id="request-pdf-transcript-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|path|string|true|The room ID.|
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="request-pdf-transcript-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="request-pdf-transcript-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

<h1 id="omnichannel-omnichannel-statistics">Omnichannel Statistics</h1>

## Get Agent Analytics Overview

<a id="opIdget-api-v1-livechat-analytics-agent-overview"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/agent-overview?name=string&from=2019-05-22T12%3A11%3A45.392Z&to=2023-05-22T12%3A11%3A45.392Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/agent-overview`

Get the analytics overview for the agents in your workspace.
Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0             | Added       |

<h3 id="get-agent-analytics-overview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|true|The data that you want to get. The available options are:<br>* `Total_conversations`<br>* `Avg_chat_duration`<br>* `Total_messages`<br>* `Avg_first_response_time`<br>* `Best_first_response_time`<br>* `Avg_response_time`<br>* `Avg_reaction_time`|
|from|query|string|true|The start date|
|to|query|string|true|The end date|
|departmentId|query|string|false|The department ID to return results for.|

> Example responses

> 200 Response

```json
{
  "head": [
    {
      "name": "Agent"
    },
    {
      "name": "Total_messages"
    }
  ],
  "data": [
    {
      "name": "kim",
      "value": "25"
    },
    {
      "name": "jane",
      "value": "50"
    },
    {
      "name": "baek",
      "value": "44"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
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

<h3 id="get-agent-analytics-overview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-agent-analytics-overview-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|head|[object]|false|none|none|
|» name|string|false|none|none|
|data|[object]|false|none|none|
|» name|string|false|none|none|
|» value|string|false|none|none|
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

## Get Analytics Overview

<a id="opIdget-api-v1-livechat-analytics-overview"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/overview?name=Conversations&from=2019-05-22T12%3A11%3A45.392Z&to=2023-05-22T12%3A11%3A45.392Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/overview`

Get the overview of omnichannel analytics in your workspace.
Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0             | Added       |

<h3 id="get-analytics-overview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|name|query|string|true|The data that you want to get. The available options are: `Productivity`, `Conversations`|
|from|query|string|true|The start date|
|to|query|string|true|The end date|
|departmentId|query|string|false|The department ID to return results for.|

> Example responses

> 200 Response

```json
[
  {
    "title": "Total_conversations",
    "value": 1086
  },
  {
    "title": "Open_conversations",
    "value": 119
  },
  {
    "title": "On_Hold_conversations",
    "value": 1
  },
  {
    "title": "Total_messages",
    "value": 4892
  },
  {
    "title": "Busiest_day",
    "value": "Tuesday"
  },
  {
    "title": "Conversations_per_day",
    "value": "0.74"
  },
  {
    "title": "Busiest_time",
    "value": "7AM- 8AM"
  }
]
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
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

<h3 id="get-analytics-overview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-analytics-overview-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» title|string|false|none|none|
|» value|string \| integer|false|none|none|
|» » *oneOf*|string|false|none|none|
|» » *oneOf*|integer|false|none|none|

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

<h1 id="omnichannel-omnichannel-agent-stats">Omnichannel Agent Stats</h1>

## Get Agent Departments

<a id="opIdget-api-v1-livechat-agents-agentId-departments"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/agents/string/departments \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/agents/{agentId}/departments`

Returns the departments associated with an agent.
Permission required: `view-l-room`

<h3 id="get-agent-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|agentId|path|string|true|The agent ID.|

> Example responses

> 200 Response

```json
{
  "departments": [
    {
      "_id": "R34ZLL6wxDuk4S29G",
      "agentId": "XycfA5CetCPuEjqxw",
      "departmentId": "CAJioQNAvLnYWTy8i",
      "_updatedAt": "2021-06-29T16:09:12.897Z",
      "count": 0,
      "departmentEnabled": true,
      "order": 0,
      "username": "kim.baek"
    },
    {
      "_id": "4TnnwbRsBY2upkzjp",
      "agentId": "XycfA5CetCPuEjqxw",
      "departmentId": "GgYvrkAF63aeQmsh4",
      "_updatedAt": "2021-06-29T16:09:12.918Z",
      "count": 0,
      "departmentEnabled": true,
      "order": 0,
      "username": "kim.baek"
    },
    {
      "_id": "wJTwJsAxRcZ8nc9sB",
      "agentId": "XycfA5CetCPuEjqxw",
      "departmentId": "Yi87Ju7eTHiZQ7CJt",
      "_updatedAt": "2021-06-29T16:09:12.937Z",
      "count": 0,
      "departmentEnabled": false,
      "order": 0,
      "username": "kim.baek"
    },
    {
      "_id": "ccjbvLEREZ6vwjBFk",
      "agentId": "XycfA5CetCPuEjqxw",
      "departmentId": "sLYp3ry7CRizaP3rJ",
      "_updatedAt": "2021-06-29T16:09:12.956Z",
      "count": 0,
      "departmentEnabled": false,
      "order": 0,
      "username": "kim.baek"
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

<h3 id="get-agent-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-agent-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|departments|[object]|false|none|none|
|» _id|string|false|none|none|
|» agentId|string|false|none|none|
|» departmentId|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» count|integer|false|none|none|
|» departmentEnabled|boolean|false|none|none|
|» order|integer|false|none|none|
|» username|string|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Agent Average Service Time

<a id="opIdget-api-v1-livechat-analytics-agents-average-service-time"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/agents/average-service-time?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/agents/average-service-time`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the average service time (in seconds) for each agent.
Permission required: `view-livechat-manager`

<h3 id="get-agent-average-service-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "agents": [
    {
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "kim.jane",
      "averageServiceTimeInSeconds": 1106183
    },
    {
      "_id": "CkCPNcvsvCDfmWLqC",
      "username": "byu.baek",
      "averageServiceTimeInSeconds": 2059
    },
    {
      "_id": "CkCPNcvsvCDfmWLqC",
      "username": "doe.john",
      "averageServiceTimeInSeconds": 83303
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
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-agent-average-service-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-agent-average-service-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agents|[object]|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» averageServiceTimeInSeconds|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Agent Total Service Time

<a id="opIdget-api-v1-livechat-analytics-agents-total-service-time"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/agents/total-service-time?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/agents/total-service-time`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Gives the total service time sorted by agent.
Permission required: `view-livechat-manager`

**Service time** means how long time the agent is online and available. It does not mean how long time the agent was busy answering chats.

<h3 id="get-agent-total-service-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "agents": [
    {
      "chats": 3,
      "_id": "rbAXPnMktTFbNpwtJ",
      "username": "kim.baeko",
      "serviceTimeDuration": 331
    },
    {
      "chats": 4,
      "_id": "CkCPNcvsvCDfmWLqC",
      "username": "han.jun",
      "serviceTimeDuration": 823
    },
    {
      "chats": 4,
      "_id": "CkCPNcvsvCDfmWLqC",
      "username": "doe.john",
      "serviceTimeDuration": 333
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
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-agent-total-service-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-agent-total-service-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agents|[object]|false|none|none|
|» chats|integer|false|none|none|
|» _id|string|false|none|none|
|» username|string|false|none|none|
|» serviceTimeDuration|integer|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get History of Agents Available for Service

<a id="opIdget-api-v1-livechat-analytics-agents-available-for-service-history"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/agents/available-for-service-history?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/agents/available-for-service-history`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Return the list of agents and their available time for the provided time frame.
Permission required: `view-livechat-manager`

<h3 id="get-history-of-agents-available-for-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|fullReport|query|boolean|false|If set to true, it shares the service history which will contain more granular data such as the time of the day the agent was available.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "agents": [
    {
      "serviceHistory": [
        {
          "startedAt": "2021-11-24T08:35:49.058Z",
          "stoppedAt": "2021-11-24T08:41:32.721Z"
        },
        {
          "startedAt": "2021-11-24T08:51:15.623Z",
          "stoppedAt": "2021-11-24T08:53:59.707Z"
        },
        {
          "startedAt": "2021-11-24T08:55:45.128Z",
          "stoppedAt": "2021-11-24T08:55:45.214Z"
        },
        {
          "startedAt": "2021-11-24T16:56:35.486Z",
          "stoppedAt": "2021-11-24T17:05:56.611Z"
        },
        {
          "startedAt": "2021-11-24T17:20:26.066Z",
          "stoppedAt": "2021-11-24T18:29:59.000Z"
        }
      ],
      "availableTimeInSeconds": 2115334,
      "username": "doe.john"
    },
    {
      "serviceHistory": [
        {
          "startedAt": "2022-02-06T09:45:26.476Z",
          "stoppedAt": "2022-02-06T09:45:27.499Z"
        },
        {
          "startedAt": "2022-02-06T09:45:28.083Z",
          "stoppedAt": "2022-02-06T09:45:28.663Z"
        },
        {
          "startedAt": "2022-02-06T09:45:29.117Z",
          "stoppedAt": "2022-02-06T09:45:29.672Z"
        },
        {
          "startedAt": "2022-02-06T09:45:30.129Z",
          "stoppedAt": "2022-02-06T09:45:30.534Z"
        },
        {
          "startedAt": "2022-02-06T09:45:30.923Z",
          "stoppedAt": "2022-02-06T09:45:31.714Z"
        },
        {
          "startedAt": "2022-02-06T09:45:39.037Z",
          "stoppedAt": "2022-02-06T09:45:41.680Z"
        }
      ],
      "availableTimeInSeconds": 7586,
      "username": "white.chris"
    },
    {
      "serviceHistory": [
        {
          "startedAt": "2021-12-27T13:25:44.459Z",
          "stoppedAt": "2021-12-27T13:27:11.208Z"
        }
      ],
      "availableTimeInSeconds": 1508,
      "username": "max.yui"
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
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-history-of-agents-available-for-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-history-of-agents-available-for-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agents|[object]|false|none|none|
|» serviceHistory|[object]|false|none|none|
|» » startedAt|string|false|none|none|
|» » stoppedAt|string|false|none|none|
|» availableTimeInSeconds|integer|false|none|none|
|» username|string|false|none|none|
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
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-dashboards">Omnichannel Dashboards</h1>

## Get Conversation Metrics

<a id="opIdget-api-v1-livechat-analytics-dashboards-conversation-totalizers"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/conversation-totalizers?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/conversation-totalizers`

Retrieves metrics about all conversations.
Permission required: `view-livechat-manager`

<h3 id="get-conversation-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "totalizers": [
    {
      "title": "Total_conversations",
      "value": 20
    },
    {
      "title": "Open_conversations",
      "value": 2
    },
    {
      "title": "On_Hold_conversations",
      "value": 0
    },
    {
      "title": "Total_messages",
      "value": 51
    },
    {
      "title": "Total_visitors",
      "value": 5
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-conversation-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-conversation-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalizers|[object]|false|none|none|
|» title|string|false|none|none|
|» value|integer|false|none|none|
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

## Get Agent Service Time Metrics

<a id="opIdget-api-v1-livechat-analytics-dashboards-agents-productivity-totalizers"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/agents-productivity-totalizers?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/agents-productivity-totalizers`

Permission required: `view-livechat-manager`

<h3 id="get-agent-service-time-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "totalizers": [
    {
      "title": "Busiest_time",
      "value": "9AM- 10AM"
    },
    {
      "title": "Avg_of_available_service_time",
      "value": "00:45:18"
    },
    {
      "title": "Avg_of_service_time",
      "value": "00:06:00"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-agent-service-time-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-agent-service-time-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalizers|[object]|false|none|none|
|» title|string|false|none|none|
|» value|string|false|none|none|
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

## Get Chat Metrics

<a id="opIdget-api-v1-livechat-analytics-dashboards-chats-totalizers"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/chats-totalizers?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/chats-totalizers`

Retrieves information about the chats.
Permission required: `view-livechat-manager`

<h3 id="get-chat-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "totalizers": [
    {
      "title": "Total_abandoned_chats",
      "value": 1
    },
    {
      "title": "Avg_of_abandoned_chats",
      "value": "11%"
    },
    {
      "title": "Avg_of_chat_duration_time",
      "value": "01:24:56"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-chat-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-chat-metrics-responseschema">Response Schema</h3>

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

## Get Chat Metrics by Time

<a id="opIdget-api-v1-livechat-analytics-dashboards-productivity-totalizers"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/productivity-totalizers?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/productivity-totalizers`

Retrieves the average time for Livechat conversations.
Permission required: `view-livechat-manager`

<h3 id="get-chat-metrics-by-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "totalizers": [
    {
      "title": "Avg_response_time",
      "value": "00:00:00"
    },
    {
      "title": "Avg_first_response_time",
      "value": "00:00:00"
    },
    {
      "title": "Avg_reaction_time",
      "value": "00:00:00"
    },
    {
      "title": "Avg_of_waiting_time",
      "value": "00:00:00"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-chat-metrics-by-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-chat-metrics-by-time-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalizers|[object]|false|none|none|
|» title|string|false|none|none|
|» value|string|false|none|none|
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

## Get Chats Status

<a id="opIdget-api-v1-livechat-analytics-dashboards-charts-chats"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/charts/chats?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/charts/chats`

Retrieves the status of chats for a specific time duration.
Permission required: `view-livechat-manager`

<h3 id="get-chats-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "open": 2,
  "closed": 18,
  "queued": 0,
  "onhold": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-chats-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-chats-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|open|integer|false|none|none|
|closed|integer|false|none|none|
|queued|integer|false|none|none|
|onhold|integer|false|none|none|
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

## Get Chat Status of Agents

<a id="opIdget-api-v1-livechat-analytics-dashboards-charts-chats-per-agent"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/charts/chats-per-agent?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/charts/chats-per-agent`

Retrieves the status of chats per agent for a specific time duration.
Permission required: `view-livechat-manager`

<h3 id="get-chat-status-of-agents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "test.cat": {
    "open": 1,
    "closed": 4
  },
  "kim.jane": {
    "open": 1,
    "closed": 3
  },
  "lee.keith": {
    "open": 0,
    "closed": 4
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-chat-status-of-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-chat-status-of-agents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|test.cat|object|false|none|none|
|» open|integer|false|none|none|
|» closed|integer|false|none|none|
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

## Get Status of Agents

<a id="opIdget-api-v1-livechat-analytics-dashboards-charts-agents-status"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/charts/agents-status \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/charts/agents-status`

Retrieves the number of agents for each status.
Permission required: `view-livechat-manager`

<h3 id="get-status-of-agents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "_id": null,
  "offline": 78,
  "away": 5,
  "busy": 0,
  "available": 3,
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

<h3 id="get-status-of-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-status-of-agents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|offline|integer|false|none|none|
|away|integer|false|none|none|
|busy|integer|false|none|none|
|available|integer|false|none|none|
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

## Get Chats Status for Departments

<a id="opIdget-api-v1-livechat-analytics-dashboards-charts-chats-per-department"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/charts/chats-per-department?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/charts/chats-per-department`

Retrieves the status of chats for each department.
Permission required: `view-livechat-manager`

<h3 id="get-chats-status-for-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "Test": {
    "open": 1,
    "closed": 0
  },
  "Sales": {
    "open": 0,
    "closed": 9
  },
  "Finance": {
    "open": 0,
    "closed": 1
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-chats-status-for-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-chats-status-for-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Test|object|false|none|none|
|» open|integer|false|none|none|
|» closed|integer|false|none|none|
|Sales|object|false|none|none|
|» open|integer|false|none|none|
|» closed|integer|false|none|none|
|Finance|object|false|none|none|
|» open|integer|false|none|none|
|» closed|integer|false|none|none|
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

## Get Chat Times

<a id="opIdget-api-v1-livechat-analytics-dashboards-charts-timings"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/charts/timings?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/charts/timings`

Permission required: `view-livechat-manager`

<h3 id="get-chat-times-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|departmentId|query|string|false|The department ID. |

> Example responses

> 200 Response

```json
{
  "response": {
    "avg": 0,
    "longest": 0
  },
  "reaction": {
    "avg": 0,
    "longest": 0
  },
  "chatDuration": {
    "avg": 0,
    "longest": 0
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-chat-times-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-chat-times-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|none|
|» avg|integer|false|none|none|
|» longest|integer|false|none|none|
|reaction|object|false|none|none|
|» avg|integer|false|none|none|
|» longest|integer|false|none|none|
|chatDuration|object|false|none|none|
|» avg|integer|false|none|none|
|» longest|integer|false|none|none|
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

## Get Analytics Chart Data

<a id="opIdget-api-v1-livechat-livechat-analytics-dashboards-charts-data"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/livechat/analytics/dashboards/charts-data?start=2025-01-01&end=2025-10-01&chartName=Total_conversations' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/livechat/analytics/dashboards/charts-data`

View the Omnichannel analytics chart data by chart name within a specific duration. On the workspace UI, you can access this feature by going to `Manage` > `Omnichannel` > `Analytics`.

Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |
|7.11.0            | Added       |

<h3 id="get-analytics-chart-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|Enter the start date from which you want to view the data. Format: YYYY-MM-DD|
|end|query|string|true|Enter the end date till which you want to view the data. Format: YYYY-MM-DD|
|chartName|query|string|true|Enter the chart name for which you want to view the analytics. The options are: <br>* `Total_conversations`<br>* `Avg_chat_duration`<br>* `Total_messages`<br>* `Avg_first_response_time`<br>* `Avg_reaction_time`<br>* `Best_first_response_time`<br>* `Avg_response_time`|
|departmentId|query|string|false|Enter the department ID for which you want to view the analytics.|

> Example responses

> 200 Response

```json
{
  "chartLabel": "Total_conversations",
  "dataLabels": [
    "10/1",
    "10/2",
    "10/3",
    "10/4",
    "10/5",
    "10/6"
  ],
  "dataPoints": [
    0,
    0,
    0,
    0,
    0,
    0
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

<h3 id="get-analytics-chart-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br>In the response, the `dataLabels` array is a list of dates within the specified date range. The `dataPoints` array refers to the chart analytics for the corresponding dates and the chart label.|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-analytics-chart-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartLabel|string|false|none|none|
|dataLabels|[string]|false|none|none|
|dataPoints|[integer]|false|none|none|
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

<h1 id="omnichannel-reports">Reports</h1>

## Get Conversations by Status

<a id="opIdget-api-v1-livechat-analytics-dashboards-conversations-by-status"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/conversations-by-status?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/conversations-by-status`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

View the metrics of omnichannel conversations in your workspace during a selected time range based on their status: **Open**, **Queued**, **On Hold**, or **Closed**.

Permission required: `view-livechat-reports`

### Changelog
| Version      | Description |
| -----------  | ------------|
|6.4.0         | Added       |

<h3 id="get-conversations-by-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "total": 25,
  "data": [
    {
      "label": "Closed",
      "value": 24
    },
    {
      "label": "Open",
      "value": 1
    },
    {
      "label": "Queued",
      "value": 0
    },
    {
      "label": "On_Hold",
      "value": 0
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-conversations-by-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-conversations-by-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» label|string|false|none|none|
|» value|integer|false|none|none|
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

## Get Conversations by Departments

<a id="opIdget-api-v1-livechat-analytics-dashboards-conversations-by-department"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/conversations-by-department?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/conversations-by-department`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>


View the metrics of omnichannel conversations in your workspace during a selected time range based on their departments.

Permission required: `view-livechat-reports`

### Changelog
| Version      | Description |
| -----------  | ------------|
|6.4.0         | Added       |

<h3 id="get-conversations-by-departments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "total": 18,
  "data": [
    {
      "label": "TestQueue",
      "value": 1
    },
    {
      "label": "TestBH",
      "value": 1
    },
    {
      "label": "Missing",
      "value": 16
    }
  ],
  "unspecified": 43,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-conversations-by-departments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-conversations-by-departments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» label|string|false|none|none|
|» value|integer|false|none|none|
|unspecified|integer|false|none|none|
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

## Get Conversations by Tags

<a id="opIdget-api-v1-livechat-analytics-dashboards-conversations-by-tags"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/conversations-by-tags?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/conversations-by-tags`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

View the metrics of omnichannel conversations in your workspace during a selected time range based on their tags.

Permission required: `view-livechat-reports`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.4.0         | Added       |

<h3 id="get-conversations-by-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "total": 5,
  "data": [
    {
      "label": "tech",
      "value": 1
    },
    {
      "label": "solved",
      "value": 1
    },
    {
      "label": "self",
      "value": 1
    },
    {
      "label": "testtags",
      "value": 2
    }
  ],
  "unspecified": 55,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-conversations-by-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-conversations-by-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» label|string|false|none|none|
|» value|integer|false|none|none|
|unspecified|integer|false|none|none|
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

## Get Conversation by Agents

<a id="opIdget-api-v1-livechat-analytics-dashboards-conversations-by-agent"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/conversations-by-agent?start=2020-09-10T23%3A59%3A22.345Z&end=2020-09-09T00%3A11%3A22.345Z' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/livechat/analytics/dashboards/conversations-by-agent`


<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

View the metrics of omnichannel conversations in your workspace during a selected time range based on the agents in your workspace.

Permission required: `view-livechat-reports`

### Changelog
| Version      | Description |
| ------------ | ------------|
|6.4.0         | Added       |

<h3 id="get-conversation-by-agents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "total": 51,
  "data": [
    {
      "label": "9iN96PXnDK7XAYESA",
      "value": 4
    },
    {
      "label": "Dialog Bot",
      "value": 1
    },
    {
      "label": "Jane Kim",
      "value": 15
    },
    {
      "label": "Baek Kim",
      "value": 1
    },
    {
      "label": "agent5",
      "value": 5
    },
    {
      "label": "Rod",
      "value": 5
    },
    {
      "label": "User One",
      "value": 6
    },
    {
      "label": "oDCQTTquRFJWZtFxY",
      "value": 1
    },
    {
      "label": "sDNa65jXv4JaiGKQP",
      "value": 1
    },
    {
      "label": "testC",
      "value": 12
    }
  ],
  "unspecified": 9,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-conversation-by-agents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-conversation-by-agents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» label|string|false|none|none|
|» value|integer|false|none|none|
|unspecified|integer|false|none|none|
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

## Get Conversations By Source

<a id="opIdget-api-v1-livechat-analytics-dashboards-conversations-by-source"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/analytics/dashboards/conversations-by-source?start=2025-06-01&end=2025-12-01' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/analytics/dashboards/conversations-by-source`


<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Use this endpoint to view the list of sources of Omnichannel conversation during the specified time range. Permission required: `view-livechat-reports`'

<h3 id="get-conversations-by-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|start|query|string|true|Enter the start date. Format: YYYY-MM-DD|
|end|query|string|true|Enter the end date. Format: YYYY-MM-DD|

> Example responses

> 200 Response

```json
{
  "total": 19,
  "data": [
    {
      "label": "widget",
      "value": 18
    },
    {
      "label": "twilio",
      "value": 1
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'start' [error-invalid-params]",
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

<h3 id="get-conversations-by-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-conversations-by-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer|false|none|none|
|data|[object]|false|none|none|
|» label|string|false|none|none|
|» value|integer|false|none|none|
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

<h1 id="omnichannel-omnichannel-inquiries">Omnichannel Inquiries</h1>

## Get Inquiries List

<a id="opIdget-api-v1-livechat-inquiries.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/inquiries.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/inquiries.list`

Lists all open inquiries. An incoming chat that has not yet been taken by the agent is called an inquiry. After it's been taken by the agent it is referred to as room.
Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.2.0            | Added       |

<h3 id="get-inquiries-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|department|query|string|false|The department ID or name.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|Sort the inquiries in ascending (`1`) or descending (`-1`) order. The available options are:<br> * `ts`: Sort by timestamp. `sort={"ts": 1}` or `sort={"ts": -1}` (newest first, default)<br> * `name`: Sort by inquiry name. `sort={"name": 1}` or `sort={"name": -1}`<br> * `priorityWeight`: Sort by priority of the inquiry. `sort={"priorityWeight": 1}` or `sort={"priorityWeight": -1}`<br> * `estimatedWaitingTimeQueue`: Sort by the estimated waiting time in the queue. `sort={"estimatedWaitingTimeQueue": 1}` or `sort={"estimatedWaitingTimeQueue": -1}`<br> * `status`: Sort by inquiry status. `sort={"status": 1}` or `sort={"status": 1}`<br> * You can also use multiple options for the sort query. For example, `sort={"estimatedWaitingTimeQueue": 1, "priorityWeight": -1}`.|

> Example responses

> 200 Response

```json
{
  "inquiries": [
    {
      "_id": "GpxfRo8TaPHfsnnC5",
      "rid": "EbQjtCosHJWLQmQYT",
      "name": "Marcos Defendi",
      "ts": "2019-06-11T19:01:57.424Z",
      "status": "queued"
    }
  ],
  "offset": 0,
  "count": 1,
  "total": 1,
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

<h3 id="get-inquiries-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-inquiries-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inquiries|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» name|string|false|none|none|
|» ts|string|false|none|none|
|» status|string|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
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

## Take Inquiry

<a id="opIdpost-api-v1-livechat-inquiries.take"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/inquiries.take \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "inquiryId": "ByehQjC44FwMeiLbX"
  }'
```

`POST /api/v1/livechat/inquiries.take`

Join an open inquiry.
Permission required: `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|1.2.0            | Added       |

> Body parameter

```json
{
  "inquiryId": "ByehQjC44FwMeiLbX"
}
```

<h3 id="take-inquiry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|If the `userId` is provided, the user must have the `view-l-room` permission.|
|» inquiryId|body|string|true|The inquiry ID.|
|» userId|body|string|false|The user's (agent) ID who is taking the inquiry. The user must have `view-l-room` permission.|

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
  "error": "must have required property 'inquiryId' [error-invalid-params]",
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

<h3 id="take-inquiry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="take-inquiry-responseschema">Response Schema</h3>

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

## List Queued User Inquiries

<a id="opIdget-api-v1-livechat-inquiries.queuedForUser"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/inquiries.queuedForUser \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/livechat/inquiries.queuedForUser`

Permission required: `view-l-room`
The `livechat/inquiries.queued` endpoint has been removed from 7.0. Use this endpoint instead.

<h3 id="list-queued-user-inquiries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|department|query|string|false|The department ID or name.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "inquiries": [
    {
      "_id": "xn5sKBatdkgDfjDLC",
      "rid": "8AuphbFBSNBjeZQFs",
      "name": "hk",
      "ts": "2021-07-22T14:28:57.987Z",
      "department": "CAJioQNAvLnYWTy8i",
      "message": "",
      "status": "queued",
      "v": {
        "_id": "hPF84vuahYBZugM8L",
        "username": "guest-535",
        "token": "zdynf0a9vsiiiq1dlf9abf",
        "status": "offline"
      },
      "t": "l",
      "queueOrder": 1,
      "estimatedWaitingTimeQueue": 0,
      "estimatedServiceTimeAt": "2021-07-22T14:28:57.987Z",
      "_updatedAt": "2021-07-22T14:37:28.470Z"
    },
    {
      "_id": "g6FY2B8PNwneteRG9",
      "rid": "iZ7XDSgcjBgczqko9",
      "name": "dk",
      "ts": "2021-07-22T14:28:07.350Z",
      "department": "CAJioQNAvLnYWTy8i",
      "message": "",
      "status": "queued",
      "v": {
        "_id": "ycwLFcaH4ey9XYYvu",
        "username": "guest-534",
        "token": "ili20miimhh8x33ld0b5de",
        "status": "offline"
      },
      "t": "l",
      "queueOrder": 1,
      "estimatedWaitingTimeQueue": 0,
      "estimatedServiceTimeAt": "2021-07-22T14:28:07.350Z",
      "_updatedAt": "2021-07-22T14:28:24.521Z"
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="list-queued-user-inquiries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="list-queued-user-inquiries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inquiries|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» name|string|false|none|none|
|» ts|string|false|none|none|
|» department|string|false|none|none|
|» message|string|false|none|none|
|» status|string|false|none|none|
|» v|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » token|string|false|none|none|
|» » status|string|false|none|none|
|» t|string|false|none|none|
|» queueOrder|integer|false|none|none|
|» estimatedWaitingTimeQueue|integer|false|none|none|
|» estimatedServiceTimeAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Get Inquiry by Room

<a id="opIdget-api-v1-livechat-inquiries.getOne"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/inquiries.getOne?roomId=string' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/inquiries.getOne`

Permission required: `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.4.0            | Added       |

<h3 id="get-inquiry-by-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|roomId|query|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "inquiry": {
    "_id": "6560940c6a1ef5b1a2bf9324",
    "rid": "yy8SmYKfHQ6GZdnJp",
    "name": "kookie",
    "ts": "2023-11-24T12:16:12.370Z",
    "message": "",
    "status": "taken",
    "v": {
      "_id": "656090576a1ef5b1a2bf919b",
      "username": "guest-51",
      "token": "38cc8c765bf77e943f6e4319c5891f6c04",
      "status": "online",
      "activity": [
        "2023-11"
      ]
    },
    "t": "l",
    "priorityWeight": 99,
    "estimatedWaitingTimeQueue": 9999999,
    "source": {
      "type": "widget"
    },
    "_updatedAt": "2023-11-24T12:27:43.852Z",
    "lastMessage": {
      "_id": "Hjwmd7bBZTiEXrywn",
      "rid": "yy8SmYKfHQ6GZdnJp",
      "msg": "hello",
      "ts": "2023-11-24T12:27:43.474Z",
      "u": {
        "_id": "CkCPNcvsvCDfmWLqC",
        "username": "test.cat",
        "name": "testCat"
      },
      "_updatedAt": "2023-11-24T12:27:43.820Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "hello"
            }
          ]
        }
      ]
    },
    "takenAt": "2023-11-24T12:18:19.012Z"
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'roomId' [error-invalid-params]",
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

<h3 id="get-inquiry-by-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-inquiry-by-room-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inquiry|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» name|string|false|none|none|
|» ts|string|false|none|none|
|» message|string|false|none|none|
|» status|string|false|none|none|
|» v|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » token|string|false|none|none|
|» » status|string|false|none|none|
|» » activity|[string]|false|none|none|
|» t|string|false|none|none|
|» priorityWeight|integer|false|none|none|
|» estimatedWaitingTimeQueue|integer|false|none|none|
|» source|object|false|none|none|
|» » type|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» lastMessage|object|false|none|none|
|» » _id|string|false|none|none|
|» » rid|string|false|none|none|
|» » msg|string|false|none|none|
|» » ts|string|false|none|none|
|» » u|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » » name|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » urls|[object]|false|none|none|
|» » mentions|[object]|false|none|none|
|» » channels|[object]|false|none|none|
|» » md|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|[object]|false|none|none|
|» » » » type|string|false|none|none|
|» » » » value|string|false|none|none|
|» takenAt|string|false|none|none|
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

## Set SLA Policy to Inquiry

<a id="opIdput-api-v1-livechat-inquiry.setSLA"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/inquiry.setSLA \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "ZDYMFPpvnXgptmzMs",
    "sla": "6417f67528384134ed600dc6"
  }'
```

`PUT /api/v1/livechat/inquiry.setSLA`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Set <a href="https://docs.rocket.chat/docs/sla-policies" target="_blank">SLA policy</a> to an inquiry. You can only set the policy for an inquiry that has not been taken by an agent.

At least one of the following permissions is required:
* `view-l-room`
* `manage-livechat-sla`

### Changelog
| Version | Description  |
| ------- |--------------|
| 5.0.0  | Added         |

> Body parameter

```json
{
  "roomId": "ZDYMFPpvnXgptmzMs",
  "sla": "6417f67528384134ed600dc6"
}
```

<h3 id="set-sla-policy-to-inquiry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|The room ID.|
|» sla|body|string|true|Name or ID of the SLA policy.|

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
  "error": "The 'roomId' param is required"
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

<h3 id="set-sla-policy-to-inquiry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="set-sla-policy-to-inquiry-responseschema">Response Schema</h3>

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

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|
|errorType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Move Chat to Inquiry

<a id="opIdpost-api-v1-livechat-inquiries.returnAsInquiry"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/inquiries.returnAsInquiry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "roomId": "iFzJuwGtkg4KB4keW",
    "departmentId": "66fa9ec66ea9eba859b650b3"
  }'
```

`POST /api/v1/livechat/inquiries.returnAsInquiry`

This endpoint is used to move an open chat to the queue. Permission required: `view-l-room`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.12.0            | Added       |

> Body parameter

```json
{
  "roomId": "iFzJuwGtkg4KB4keW",
  "departmentId": "66fa9ec66ea9eba859b650b3"
}
```

<h3 id="move-chat-to-inquiry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» roomId|body|string|true|Enter the room ID that you want to return to the queue.|
|» departmentId|body|string|false|Enter the department ID that the chat is part of.|

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
  "error": "room-closed"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="move-chat-to-inquiry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="move-chat-to-inquiry-responseschema">Response Schema</h3>

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

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-omnichannel-webhooks">Omnichannel Webhooks</h1>

## Set up Omnichannel webhook

<a id="opIdpost-api-v1-omnichannel-integrations"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/omnichannel/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "LivechatWebhookUrl": "https://webhook/d548683u3-7f38ow-48ba-ieooefa-oejiduiw",
    "LivechatSecretToken": "",
    "LivechatHttpTimeout": 5000,
    "LivechatWebhookOnStart": true,
    "LivechatWebhookOnClose": true,
    "LivechatWebhookOnChatTaken": true,
    "LivechatWebhookOnChatQueued": false,
    "LivechatWebhookOnForward": false,
    "LivechatWebhookOnOfflineMsg": true,
    "LivechatWebhookOnVisitorMessage": true,
    "LivechatWebhookOnAgentMessage": true
  }'
```

`POST /api/v1/omnichannel/integrations`

Set up a [webhook](https://docs.rocket.chat/docs/webhooks) to easily integrate Omnichannel with your CRM. Permission required: `view-livechat-manager`.

> Body parameter

```json
{
  "LivechatWebhookUrl": "https://webhook/d548683u3-7f38ow-48ba-ieooefa-oejiduiw",
  "LivechatSecretToken": "",
  "LivechatHttpTimeout": 5000,
  "LivechatWebhookOnStart": true,
  "LivechatWebhookOnClose": true,
  "LivechatWebhookOnChatTaken": true,
  "LivechatWebhookOnChatQueued": false,
  "LivechatWebhookOnForward": false,
  "LivechatWebhookOnOfflineMsg": true,
  "LivechatWebhookOnVisitorMessage": true,
  "LivechatWebhookOnAgentMessage": true
}
```

<h3 id="set-up-omnichannel-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» LivechatWebhookUrl|body|string|false|The destination webhook URL where the data will be sent.|
|» LivechatSecretToken|body|string|false|A secret token that can be used to verify the webhook.|
|» LivechatHttpTimeout|body|integer|false|The request timeout value|
|» LivechatWebhookOnStart|body|boolean|false|When set to true, data is sent to the configured webhook URL each time a new chat starts.|
|» LivechatWebhookOnClose|body|boolean|false|When set to true, data is sent to the configured webhook URL each time a chat is closed.|
|» LivechatWebhookOnChatTaken|body|boolean|false|When set to true, data is sent to the configured webhook URL each time a chat is taken.|
|» LivechatWebhookOnChatQueued|body|boolean|false|When set to true, data is sent to the configured webhook URL each time a chat is queued.|
|» LivechatWebhookOnForward|body|boolean|false|When set to true, data is sent to the configured webhook URL each time a chat is forwarded.|
|» LivechatWebhookOnOfflineMsg|body|boolean|false|When set to true, data is sent to the configured webhook URL each time offline messages are sent.|
|» LivechatWebhookOnVisitorMessage|body|boolean|false|When set to true, data is sent to the configured webhook URL each time a visitor sends a message.|
|» LivechatWebhookOnAgentMessage|body|boolean|false|When set to true, data is sent to the configured webhook URL each time an agent sends a message.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="set-up-omnichannel-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="set-up-omnichannel-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Test the Webhook Integration

<a id="opIdpost-api-v1-livechat-webhook.test"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/webhook.test \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`POST /api/v1/livechat/webhook.test`

This endpoint sends sample data to test whether the [configured webhook URL](https://docs.rocket.chat/docs/webhooks) is functioning correctly. Permission required: `view-livechat-webhooks`.

The data you can expect on your webhook for this test follows this format:
```
{
  "type": "LivechatSession",
  "_id": "fasd6f5a4sd6f8a4sdf",
  "label": "title",
  "topic": "asiodojf",
  "createdAt": "2024-09-18T12:22:02.975Z",
  "lastMessageAt": "2024-09-18T12:22:02.975Z",
  "tags": [
    "tag1",
    "tag2",
    "tag3"
  ],
  "customFields": {
    "productId": "123456"
  },
  "visitor": {
    "_id": "",
    "name": "visitor name",
    "username": "visitor-username",
    "department": "department",
    "email": "email@address.com",
    "phone": "192873192873",
    "ip": "123.456.7.89",
    "browser": "Chrome",
    "os": "Linux",
    "customFields": {
      "customerId": "123456"
    }
  },
  "agent": {
    "_id": "asdf89as6df8",
    "username": "agent.username",
    "name": "Agent Name",
    "email": "agent@email.com"
  },
  "messages": [
    {
      "username": "visitor-username",
      "msg": "message content",
      "ts": "2024-09-18T12:22:02.975Z"
    },
    {
      "username": "agent.username",
      "agentId": "asdf89as6df8",
      "msg": "message content from agent",
      "ts": "2024-09-18T12:22:02.975Z"
    }
  ]
}
```

<h3 id="test-the-webhook-integration-parameters">Parameters</h3>

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

<h3 id="test-the-webhook-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="test-the-webhook-integration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-livechat">Livechat</h1>

## Get Livechat Configurations

<a id="opIdget-api-v1-livechat-config"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/config \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/config`

Get Livechat widget configuration information and additional visitor data.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.70.0             | Added       |

<h3 id="get-livechat-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|false|The visitor token.|
|department|query|string|false|The visitor's department.|

> Example responses

> 200 Response

```json
{
  "config": {
    "enabled": true,
    "settings": {
      "registrationForm": true,
      "allowSwitchingDepartments": false,
      "nameFieldRegistrationForm": true,
      "emailFieldRegistrationForm": true,
      "displayOfflineForm": true,
      "videoCall": false,
      "fileUpload": true,
      "language": "",
      "transcript": false,
      "historyMonitorType": "url",
      "forceAcceptDataProcessingConsent": false,
      "showConnecting": true,
      "agentHiddenInfo": false,
      "clearLocalStorageWhenChatEnded": false,
      "limitTextLength": false
    },
    "theme": {
      "title": "Rocket.Chat",
      "color": "#C1272D",
      "offlineTitle": "Leave a message",
      "offlineColor": "#666666",
      "actionLinks": [
        {
          "icon": "icon-videocam",
          "i18nLabel": "Accept",
          "method_id": "createLivechatCall",
          "params": ""
        },
        {
          "icon": "icon-cancel",
          "i18nLabel": "Decline",
          "method_id": "denyLivechatCall",
          "params": ""
        }
      ]
    },
    "messages": {
      "offlineMessage": "",
      "offlineSuccessMessage": "",
      "offlineUnavailableMessage": "",
      "conversationFinishedMessage": "",
      "transcriptMessage": ""
    },
    "survey": {
      "items": [
        "satisfaction",
        "agentKnowledge",
        "agentResposiveness",
        "agentFriendliness"
      ],
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "departments": [
      {
        "_id": "652882d8a2f73c7460e18dc4",
        "name": "Support",
        "showOnRegistration": false,
        "showOnOfflineForm": false,
        "departmentsAllowedToForward": []
      },
      {
        "_id": "64181a0728384134ed600dcc",
        "name": "Lost",
        "showOnRegistration": false,
        "showOnOfflineForm": false,
        "departmentsAllowedToForward": []
      }
    ],
    "online": true,
    "guest": {
      "_id": "2KNu66RPCwxA4ncy7",
      "username": "guest-3",
      "token": "iNKE8a6k6cjbqWhWd",
      "name": "Livechat Visitor"
    },
    "room": {
      "_id": "zRAeTszXor8CCPceB",
      "servedBy": {
        "_id": "7Gm3PoFCJWTCJ68XR",
        "username": "livechat.agent"
      },
      "open": true
    },
    "agent": {
      "_id": "7Gm3PoFCJWTCJ68XR",
      "emails": [
        {
          "address": "agent@rocket.chat",
          "verified": true
        }
      ],
      "name": "Livechat Agent",
      "username": "livechat.agent"
    }
  },
  "success": true
}
```

<h3 id="get-livechat-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-livechat-configurations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|» enabled|boolean|false|none|none|
|» settings|object|false|none|none|
|» » registrationForm|boolean|false|none|none|
|» » allowSwitchingDepartments|boolean|false|none|none|
|» » nameFieldRegistrationForm|boolean|false|none|none|
|» » emailFieldRegistrationForm|boolean|false|none|none|
|» » displayOfflineForm|boolean|false|none|none|
|» » videoCall|boolean|false|none|none|
|» » fileUpload|boolean|false|none|none|
|» » language|string|false|none|none|
|» » transcript|boolean|false|none|none|
|» » historyMonitorType|string|false|none|none|
|» » forceAcceptDataProcessingConsent|boolean|false|none|none|
|» » showConnecting|boolean|false|none|none|
|» » agentHiddenInfo|boolean|false|none|none|
|» » clearLocalStorageWhenChatEnded|boolean|false|none|none|
|» » limitTextLength|boolean|false|none|none|
|» theme|object|false|none|none|
|» » title|string|false|none|none|
|» » color|string|false|none|none|
|» » offlineTitle|string|false|none|none|
|» » offlineColor|string|false|none|none|
|» » actionLinks|[object]|false|none|none|
|» » » icon|string|false|none|none|
|» » » i18nLabel|string|false|none|none|
|» » » method_id|string|false|none|none|
|» » » params|string|false|none|none|
|» messages|object|false|none|none|
|» » offlineMessage|string|false|none|none|
|» » offlineSuccessMessage|string|false|none|none|
|» » offlineUnavailableMessage|string|false|none|none|
|» » conversationFinishedMessage|string|false|none|none|
|» » transcriptMessage|string|false|none|none|
|» survey|object|false|none|none|
|» » items|[string]|false|none|none|
|» » values|[string]|false|none|none|
|» departments|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » showOnRegistration|boolean|false|none|none|
|» » showOnOfflineForm|boolean|false|none|none|
|» » departmentsAllowedToForward|[string]|false|none|none|
|» online|boolean|false|none|none|
|» guest|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » token|string|false|none|none|
|» » name|string|false|none|none|
|» room|object|false|none|none|
|» » _id|string|false|none|none|
|» » servedBy|object|false|none|none|
|» » » _id|string|false|none|none|
|» » » username|string|false|none|none|
|» » open|boolean|false|none|none|
|» agent|object|false|none|none|
|» » _id|string|false|none|none|
|» » emails|[object]|false|none|none|
|» » » address|string|false|none|none|
|» » » verified|boolean|false|none|none|
|» » name|string|false|none|none|
|» » username|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Livechat Integrations

<a id="opIdget-api-v1-livechat-integrations.settings"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/integrations.settings \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/integrations.settings`

Retrieves a list of integration settings.
Permission required: `view-livechat-manager`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.2.0             | Added       |

<h3 id="get-livechat-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "settings": [
    {
      "_id": "Livechat_secret_token",
      "_updatedAt": "2019-10-17T13:56:07.285Z",
      "autocomplete": true,
      "blocked": false,
      "createdAt": "2019-10-07T18:52:20.484Z",
      "group": "Livechat",
      "hidden": false,
      "i18nDescription": "Livechat_secret_token_Description",
      "i18nLabel": "Secret_token",
      "packageValue": "",
      "secret": true,
      "section": "CRM_Integration",
      "sorter": 25,
      "ts": "2019-10-07T21:00:01.287Z",
      "type": "string",
      "value": "",
      "valueSource": "meteorSettingsValue",
      "meteorSettingsValue": ""
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

<h3 id="get-livechat-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-livechat-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|settings|[object]|false|none|none|
|» _id|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» autocomplete|boolean|false|none|none|
|» blocked|boolean|false|none|none|
|» createdAt|string|false|none|none|
|» group|string|false|none|none|
|» hidden|boolean|false|none|none|
|» i18nDescription|string|false|none|none|
|» i18nLabel|string|false|none|none|
|» packageValue|string|false|none|none|
|» secret|boolean|false|none|none|
|» section|string|false|none|none|
|» sorter|integer|false|none|none|
|» ts|string|false|none|none|
|» type|string|false|none|none|
|» value|string|false|none|none|
|» valueSource|string|false|none|none|
|» meteorSettingsValue|string|false|none|none|
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

## Get Livechat Queue

<a id="opIdget-api-v1-livechat-queue"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/queue \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/queue`

Permission required: `view-l-room`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.4.0             | Added       |

<h3 id="get-livechat-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|departmentId|query|string|false|The department ID. |
|agentId|query|string|false|The agent ID.|
|includeOfflineAgents|query|string|false|Whether you want to include offline agents or not.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "queue": [
    {
      "chats": 1,
      "user": {
        "_id": "CaevAPDbXN252kyXa",
        "username": "marcos.defendi",
        "status": "online"
      },
      "department": {
        "_id": "457diLwcQMmdpaTjo",
        "name": "Department 1"
      }
    },
    {
      "chats": 2,
      "user": {
        "_id": "CaevAPDbXN252kyXa",
        "username": "marcos.defendi",
        "status": "online"
      },
      "department": {
        "_id": "5mt9oEtQxuMMH23Co",
        "name": "Department 2"
      }
    }
  ],
  "count": 2,
  "offset": 0,
  "total": 2,
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

<h3 id="get-livechat-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-livechat-queue-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queue|[object]|false|none|none|
|» chats|integer|false|none|none|
|» user|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » status|string|false|none|none|
|» department|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Livechat SMS Incoming (Twilio)

<a id="opIdpost-api-v1-livechat-sms-incoming-service"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/sms-incoming/twilio \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "From": "5551123456789",
    "To": "5551987654321",
    "Body": "SMS message",
    "ToCountry": "Brazil",
    "ToState": "RS",
    "ToCity": "Porto Alegre",
    "ToZip": "",
    "FromCountry": "Brazil",
    "FromState": "RS",
    "FromCity": "Porto Alegre",
    "FromZip": ""
  }'
```

`POST /api/v1/livechat/sms-incoming/{service}`

Receive SMS.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|0.42.0            | Added      |

> Body parameter

```json
{
  "From": "5551123456789",
  "To": "5551987654321",
  "Body": "SMS message",
  "ToCountry": "Brazil",
  "ToState": "RS",
  "ToCity": "Porto Alegre",
  "ToZip": "",
  "FromCountry": "Brazil",
  "FromState": "RS",
  "FromCity": "Porto Alegre",
  "FromZip": ""
}
```

<h3 id="livechat-sms-incoming-twilio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|Only the server `twilio` is accepted at moment.|
|body|body|object|false|none|
|» From|body|string|false|none|
|» To|body|string|false|none|
|» Body|body|string|false|none|
|» ToCountry|body|string|false|none|
|» ToState|body|string|false|none|
|» ToCity|body|string|false|none|
|» ToZip|body|string|false|none|
|» FromCountry|body|string|false|none|
|» FromState|body|string|false|none|
|» FromCity|body|string|false|none|
|» FromZip|body|string|false|none|

> Example responses

> 200 Response

```text
<Response></Response>
```

<h3 id="livechat-sms-incoming-twilio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get Livechat Routing Configuration

<a id="opIdget-api-v1-livechat-config-routing"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/config/routing \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/config/routing`

This endpoint returns the livechat routing configuration. It is called automatically when logging into the application to make the Omnichannel/livechat features available in the client.

### Changelog
| Version      | Description |
| ---------------- | ------------|
|7.11.0            | Added       |
           

<h3 id="get-livechat-routing-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "config": {
    "previewRoom": false,
    "showConnecting": false,
    "showQueue": false,
    "showQueueLink": true,
    "returnQueue": false,
    "enableTriggerAction": true,
    "autoAssignAgent": true
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

<h3 id="get-livechat-routing-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br>The parameters in the response indicate whether the specific livechat setting in the workspace is enabled or not.|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-livechat-routing-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|» previewRoom|boolean|false|none|none|
|» showConnecting|boolean|false|none|none|
|» showQueue|boolean|false|none|none|
|» showQueueLink|boolean|false|none|none|
|» returnQueue|boolean|false|none|none|
|» enableTriggerAction|boolean|false|none|none|
|» autoAssignAgent|boolean|false|none|none|
|success|boolean|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|error|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="omnichannel-livechat-appearance">Livechat Appearance</h1>

## Get Livechat Appearance

<a id="opIdget-api-v1-livechat-appearance"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/appearance \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/appearance`

Get the settings about the widget appearance.
Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0             | Added       |

<h3 id="get-livechat-appearance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "appearance": [
    {
      "_id": "Livechat_conversation_finished_message",
      "type": "string",
      "group": "Omnichannel",
      "public": true,
      "i18nLabel": "Conversation_finished_message",
      "packageValue": "",
      "valueSource": "packageValue",
      "hidden": false,
      "blocked": false,
      "sorter": 16,
      "i18nDescription": "Livechat_conversation_finished_message_Description",
      "autocomplete": true,
      "ts": "2021-12-03T16:21:59.851Z",
      "_updatedAt": "2021-12-03T16:21:59.851Z",
      "createdAt": "2021-12-03T16:21:59.851Z",
      "value": "CLOSE!!!",
      "secret": false,
      "section": "Livechat",
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
    },
    {
      "_id": "Livechat_conversation_finished_text",
      "_updatedAt": "2023-02-06T17:25:35.940Z",
      "autocomplete": true,
      "blocked": false,
      "createdAt": "2021-12-03T16:21:59.861Z",
      "group": "Omnichannel",
      "hidden": false,
      "i18nDescription": "Livechat_conversation_finished_text_Description",
      "i18nLabel": "Conversation_finished_text",
      "multiline": true,
      "packageValue": "",
      "public": true,
      "secret": false,
      "sorter": 17,
      "ts": "2021-12-03T16:21:59.861Z",
      "type": "string",
      "value": "BYE!!!",
      "valueSource": "packageValue",
      "section": "Livechat",
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
    },
    {
      "_id": "Livechat_display_offline_form",
      "type": "boolean",
      "group": "Omnichannel",
      "public": true,
      "section": "Livechat",
      "i18nLabel": "Display_offline_form",
      "packageValue": true,
      "valueSource": "packageValue",
      "hidden": false,
      "blocked": false,
      "sorter": 4,
      "i18nDescription": "Livechat_display_offline_form_Description",
      "ts": "2021-10-27T22:25:42.892Z",
      "_updatedAt": "2021-10-27T22:25:42.892Z",
      "createdAt": "2021-10-27T22:25:42.892Z",
      "value": true,
      "autocomplete": true,
      "secret": false,
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
    },
    {
      "_id": "Livechat_email_field_registration_form",
      "type": "boolean",
      "group": "Omnichannel",
      "public": true,
      "i18nLabel": "Show_email_field",
      "packageValue": true,
      "valueSource": "packageValue",
      "hidden": false,
      "blocked": false,
      "sorter": 20,
      "i18nDescription": "Livechat_email_field_registration_form_Description",
      "autocomplete": true,
      "ts": "2021-12-03T16:21:59.926Z",
      "_updatedAt": "2021-12-03T16:21:59.926Z",
      "createdAt": "2021-12-03T16:21:59.926Z",
      "value": true,
      "secret": false,
      "section": "Livechat",
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
    },
    {
      "_id": "Livechat_show_agent_info",
      "_updatedAt": "2023-08-10T13:27:26.422Z",
      "autocomplete": true,
      "blocked": false,
      "createdAt": "2021-12-03T16:21:59.833Z",
      "group": "Omnichannel",
      "hidden": false,
      "i18nDescription": "Livechat_show_agent_info_Description",
      "i18nLabel": "Show_agent_info",
      "packageValue": true,
      "public": true,
      "secret": false,
      "sorter": 14,
      "ts": "2021-12-03T16:21:59.833Z",
      "type": "boolean",
      "value": false,
      "valueSource": "packageValue",
      "section": "Livechat",
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
    },
    {
      "_id": "Livechat_title",
      "type": "string",
      "group": "Omnichannel",
      "public": true,
      "packageValue": "Rocket.Chat",
      "valueSource": "packageValue",
      "hidden": false,
      "blocked": false,
      "sorter": 0,
      "i18nLabel": "Livechat_title",
      "i18nDescription": "Livechat_title_Description",
      "ts": "2021-10-27T22:25:42.874Z",
      "_updatedAt": "2023-09-01T17:17:39.628Z",
      "createdAt": "2021-10-27T22:25:42.874Z",
      "value": "Hello",
      "autocomplete": true,
      "secret": false,
      "section": "Livechat",
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
    },
    {
      "_id": "Livechat_title_color",
      "type": "color",
      "group": "Omnichannel",
      "public": true,
      "packageValue": "#C1272D",
      "valueSource": "packageValue",
      "hidden": false,
      "blocked": false,
      "sorter": 1,
      "i18nLabel": "Livechat_title_color",
      "i18nDescription": "Livechat_title_color_Description",
      "ts": "2021-10-27T22:25:42.882Z",
      "_updatedAt": "2023-03-30T12:19:01.124Z",
      "createdAt": "2021-10-27T22:25:42.882Z",
      "value": "#b427be",
      "autocomplete": true,
      "editor": "color",
      "secret": false,
      "section": "Livechat",
      "enterprise": false,
      "requiredOnWizard": false,
      "env": false,
      "packageEditor": "color",
      "enableQuery": "{\"_id\":\"Livechat_enabled\",\"value\":true}"
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

<h3 id="get-livechat-appearance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-livechat-appearance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appearance|[object]|false|none|none|
|» _id|string|false|none|none|
|» type|string|false|none|none|
|» group|string|false|none|none|
|» public|boolean|false|none|none|
|» i18nLabel|string|false|none|none|
|» packageValue|boolean|false|none|none|
|» valueSource|string|false|none|none|
|» hidden|boolean|false|none|none|
|» blocked|boolean|false|none|none|
|» sorter|integer|false|none|none|
|» i18nDescription|string|false|none|none|
|» autocomplete|boolean|false|none|none|
|» ts|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» createdAt|string|false|none|none|
|» value|boolean|false|none|none|
|» secret|boolean|false|none|none|
|» section|string|false|none|none|
|» enterprise|boolean|false|none|none|
|» requiredOnWizard|boolean|false|none|none|
|» env|boolean|false|none|none|
|» enableQuery|string|false|none|none|
|» editor|string|false|none|none|
|» packageEditor|string|false|none|none|
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

## Set Livechat Appearance

<a id="opIdpost-api-v1-livechat-appearance"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/appearance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '[
    {
      "_id": "Livechat_title",
      "value": "Hello"
    },
    {
      "_id": "Livechat_show_agent_email",
      "value": "false"
    },
    {
      "_id": "Livechat_show_agent_info",
      "value": true
    },
    {
      "_id": "Livechat_title_color",
      "value": "#b427bed"
    }
  ]'
```

`POST /api/v1/livechat/appearance`

Update the <a href="https://docs.rocket.chat/docs/livechat-widget-appearance" target="_blank">livechat widget appearance</a> settings.
Permission required: `view-livechat-manager`

### Changelog
| Version      | Description |
| ---------------- | ------------|
|6.4.0           | Added       |

> Body parameter

```json
[
  {
    "_id": "Livechat_title",
    "value": "Hello"
  },
  {
    "_id": "Livechat_show_agent_email",
    "value": "false"
  },
  {
    "_id": "Livechat_show_agent_info",
    "value": true
  },
  {
    "_id": "Livechat_title_color",
    "value": "#b427bed"
  }
]
```

<h3 id="set-livechat-appearance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|[object]|false|An array of objects containing the `_id` and `value` of the settings to be updated. See <a href="https://developer.rocket.chat/apidocs/get-livechat-appearance" target="_blank">Get LiveChat Appearance</a> example response for the `_id` of each setting.|
|» _id|body|string|true|none|
|» value|body|boolean|true|none|

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
  "error": "must be array [error-invalid-params]",
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

<h3 id="set-livechat-appearance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="set-livechat-appearance-responseschema">Response Schema</h3>

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

<h1 id="omnichannel-livechat-triggers">Livechat Triggers</h1>

## Get List of Livechat Triggers

<a id="opIdget-api-v1-livechat-triggers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/triggers \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/triggers`

Permission required: `view-livechat-manager`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.2.0             | Added       |

<h3 id="get-list-of-livechat-triggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "triggers": [
    {
      "_id": "Lk52shJFYyb55trw8",
      "name": "test",
      "description": "test",
      "enabled": true,
      "runOnce": true,
      "conditions": [
        {
          "name": "page-url",
          "value": ""
        }
      ],
      "actions": [
        {
          "name": "send-message",
          "params": {
            "sender": "",
            "msg": ""
          }
        }
      ],
      "_updatedAt": "2019-10-04T15:36:29.695Z"
    }
  ],
  "count": 1,
  "offset": 0,
  "total": 1,
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

<h3 id="get-list-of-livechat-triggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-list-of-livechat-triggers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggers|[object]|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» enabled|boolean|false|none|none|
|» runOnce|boolean|false|none|none|
|» conditions|[object]|false|none|none|
|» » name|string|false|none|none|
|» » value|string|false|none|none|
|» actions|[object]|false|none|none|
|» » name|string|false|none|none|
|» » params|object|false|none|none|
|» » » sender|string|false|none|none|
|» » » msg|string|false|none|none|
|» _updatedAt|string|false|none|none|
|count|integer|false|none|none|
|offset|integer|false|none|none|
|total|integer|false|none|none|
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

## Create or Update Livechat Triggers

<a id="opIdpost-api-v1-livechat-triggers"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/triggers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "name": "api-trigger",
    "description": "testing create trigger endpoint",
    "enabled": false,
    "runOnce": true,
    "conditions": [
      {
        "name": "chat-opened-by-visitor",
        "value": 0
      }
    ],
    "actions": [
      {
        "name": "send-message",
        "params": {
          "sender": "queue",
          "msg": "hello world"
        }
      }
    ]
  }'
```

`POST /api/v1/livechat/triggers`

Permission required: `view-livechat-manager`

See the <a href="https://docs.rocket.chat/docs/livechat-triggers" target="_blank">Livechat Triggers</a> guide for more information.

> Body parameter

```json
{
  "name": "api-trigger",
  "description": "testing create trigger endpoint",
  "enabled": false,
  "runOnce": true,
  "conditions": [
    {
      "name": "chat-opened-by-visitor",
      "value": 0
    }
  ],
  "actions": [
    {
      "name": "send-message",
      "params": {
        "sender": "queue",
        "msg": "hello world"
      }
    }
  ]
}
```

<h3 id="create-or-update-livechat-triggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» _id|body|string|false|If you want to update a trigger, enter the trigger ID.|
|» name|body|string|true|Enter a name for the trigger.|
|» description|body|string|true|Enter a description for the trigger.|
|» enabled|body|boolean|true|Whether the trigger is enabled for use or not.|
|» runOnce|body|boolean|true|Whether the trigger will be run only once for each visitor.|
|» conditions|body|[object]|true|Enter the conditions for the trigger to execute.|
|» » name|body|string|false|The condition that should take place for the trigger to execute. The possible values are:<br>* `time-on-site`: The amount of time a visitor is on the site.<br>* `page-url`: The site URL that a visitor visits.<br>* `chat-opened-by-visitor`: The chat is opened by the visitor.<br>* `after-guest-registration`: The guest is registered to the chat.|
|» » value|body|number \| string|false|Enter the value of the `page-url` (string) or the `time-on-site`, in seconds (number). Otherwise, you can enter `null`.|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|string|false|none|
|» actions|body|[object]|true|The actions that take place once the trigger is executed.|
|» » name|body|string|false|The name of the trigger action that takes place. The possible values are:<br>* `send-message`: A message is sent to the visitor.<br>* `use-external-service`: An external service is used for the trigger action.|
|» » params|body|object|false|Enter the parameter values for the trigger action.|
|» » » sender|body|string|false|The sender of the trigger action. The possible values are:<br>* `queue`: Impersonate the next available agent in the queue.<br>* `custom`: Use a specific agent or bot.|
|» » » name|body|string|false|Enter the name of the agent or bot that you want to use, if the `sender` is `custom`.|
|» » » msg|body|string|false|Enter a message for the visitor, if the action `name` is `send-message`.|
|» » » serviceUrl|body|string|false|Enter the external service URL you want to use, if the action `name` is `use-external-service`.|
|» » » serviceTimeout|body|number|false|Enter the service timeout value, in seconds, if the action `name` is `use-external-service`.|
|» » » serviceFallbackMessage|body|string|false|Enter a message when the service is not accessible, if the action `name` is `use-external-service`.|

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
  "error": "must have required property 'description' [error-invalid-params]",
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

<h3 id="create-or-update-livechat-triggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="create-or-update-livechat-triggers-responseschema">Response Schema</h3>

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

## Get Livechat Trigger

<a id="opIdget-api-v1-livechat-triggers-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/triggers/Lk52shJFYyb55trw8 \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/triggers/{_id}`

Get the details about a specific trigger.
Permission required: `view-livechat-manager`
### Changelog
| Version      | Description |
| ---------------- | ------------|
|2.2.0             | Added       |

<h3 id="get-livechat-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_id|path|string|true|The trigger ID.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|

> Example responses

> 200 Response

```json
{
  "trigger": {
    "_id": "Lk52shJFYyb55trw8",
    "name": "test",
    "description": "test",
    "enabled": true,
    "runOnce": true,
    "conditions": [
      {
        "name": "page-url",
        "value": ""
      }
    ],
    "actions": [
      {
        "name": "send-message",
        "params": {
          "sender": "",
          "msg": ""
        }
      }
    ],
    "_updatedAt": "2019-10-04T15:36:29.695Z"
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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="get-livechat-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-livechat-trigger-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|object|false|none|none|
|» _id|string|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» enabled|boolean|false|none|none|
|» runOnce|boolean|false|none|none|
|» conditions|[object]|false|none|none|
|» » name|string|false|none|none|
|» » value|string|false|none|none|
|» actions|[object]|false|none|none|
|» » name|string|false|none|none|
|» » params|object|false|none|none|
|» » » sender|string|false|none|none|
|» » » msg|string|false|none|none|
|» _updatedAt|string|false|none|none|
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

## Delete a trigger

<a id="opIddelete-api-v1-livechat-triggers-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/triggers/Lk52shJFYyb55trw8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`DELETE /api/v1/livechat/triggers/{_id}`

Permission required: `view-livechat-manager`

<h3 id="delete-a-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|_id|path|string|true|The trigger ID.|

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

> 403 Response

```json
{
  "success": false,
  "error": "User does not have the permissions required for this action",
  "errorType": "error-forbidden"
}
```

<h3 id="delete-a-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="delete-a-trigger-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
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

## Test Trigger with External Service

<a id="opIdpost-api-v1-livechat-triggers-external-service-test"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/triggers/external-service/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "webhookUrl": "https://webhook.site/2f5df6a1-592c-4d9f-8f36-ab15ca3caf23",
    "timeout": "10000",
    "fallbackMessage": "Request timeout"
  }'
```

`POST /api/v1/livechat/triggers/external-service/test`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>

Test your Livechat trigger setup with external service using this endpoint. Make sure that you have created the <a href='https://docs.rocket.chat/docs/livechat-triggers' target='_blank'>trigger</a>. Permission required: `view-livechat-manager`. Rate limit applies: 15 requests per 60000 milliseconds.

> Body parameter

```json
{
  "webhookUrl": "https://webhook.site/2f5df6a1-592c-4d9f-8f36-ab15ca3caf23",
  "timeout": "10000",
  "fallbackMessage": "Request timeout"
}
```

<h3 id="test-trigger-with-external-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» webhookUrl|body|string|true|Enter the external webhook URL.|
|» timeout|body|string|true|Enter the time in milliseconds to wait for the external service to respond before cancelling the request.|
|» fallbackMessage|body|string|true|Enter the message to send after the timeout ends.|

> Example responses

> 200 Response

```json
{
  "triggerId": "test-trigger",
  "response": {
    "statusCode": 200,
    "contents": [
      {
        "msg": "Welcome to our support center, Morgan! How can we assist you today?",
        "order": 0
      },
      {
        "msg": "Feel free to ask any questions you have. We're here to help!",
        "order": 1
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
  "error": "must have required property 'webhookUrl' [error-invalid-params]",
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

<h3 id="test-trigger-with-external-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK<br><br>Rocket.Chat sends a request to the webhook containing a payload of the visitor metadata. The webhook returns the response as demonstrated in this example.|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="test-trigger-with-external-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggerId|string|false|none|none|
|response|object|false|none|none|
|» statusCode|integer|false|none|none|
|» contents|[object]|false|none|none|
|» » msg|string|false|none|none|
|» » order|integer|false|none|none|
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

<h1 id="omnichannel-livechat-messages">Livechat Messages</h1>

## Send New Livechat Message

<a id="opIdpost-api-v1-livechat-message"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/message \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "54fc5544030bcecda053311cb6b",
    "rid": "hGFwSKA28nRKut3pD",
    "msg": "Hello World!",
    "agent": {
      "agentId": "CkCPNcvsvCDfmWLqC",
      "username": "kim.jane"
    }
  }'
```

`POST /api/v1/livechat/message`

Send a new message in a Livechat room.

> Body parameter

```json
{
  "token": "54fc5544030bcecda053311cb6b",
  "rid": "hGFwSKA28nRKut3pD",
  "msg": "Hello World!",
  "agent": {
    "agentId": "CkCPNcvsvCDfmWLqC",
    "username": "kim.jane"
  }
}
```

<h3 id="send-new-livechat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|The visitor token.|
|» rid|body|string|true|The room ID.|
|» msg|body|string|true|The message to send to the visitor.|
|» _id|body|string|false|If you do not enter any value, a message ID is automatically generated. If you want to override the message ID in the database with your own, enter a random unique string.|
|» agent|body|object|false|Enter the ID and the username of the agent to whom you want to send the message.|
|» » agentId|body|string|false|none|
|» » username|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "djsajdkscks787",
    "rid": "hGFwSKA28nRKut3pD",
    "msg": "Hello World!",
    "token": "54fc5544030bcecda053311cb6b98920bdf953f242c129d7b8065000b1f9b2e9",
    "alias": "Baek",
    "ts": "2023-10-31T13:14:29.804Z",
    "u": {
      "_id": "6523dc0ba2f73c7460e18d4d",
      "username": "guest-35",
      "name": "Baek"
    },
    "_updatedAt": "2023-10-31T13:14:29.960Z",
    "urls": [],
    "mentions": [],
    "channels": [],
    "md": [
      {
        "type": "PARAGRAPH",
        "value": [
          {
            "type": "PLAIN_TEXT",
            "value": "Hello World!"
          }
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
  "error": "must have required property 'token' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="send-new-livechat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-new-livechat-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» token|string|false|none|none|
|» alias|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
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

## Send Array of Messages

<a id="opIdpost-api-v1-livechat-messages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "visitor": {
      "token": "54fc5544030bcecda053311cb6b98920b"
    },
    "messages": [
      {
        "msg": "test"
      },
      {
        "msg": "hello"
      }
    ]
  }'
```

`POST /api/v1/livechat/messages`

Send an array of messsages in a Livechat room.

> Body parameter

```json
{
  "visitor": {
    "token": "54fc5544030bcecda053311cb6b98920b"
  },
  "messages": [
    {
      "msg": "test"
    },
    {
      "msg": "hello"
    }
  ]
}
```

<h3 id="send-array-of-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|body|body|object|false|none|
|» visitor|body|object|true|The vistor token.|
|» » token|body|string|false|none|
|» messages|body|[object]|true|The array of messages.|
|» » msg|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "username": "guest-35",
      "msg": "test",
      "ts": "2023-10-31T08:41:29.724Z"
    },
    {
      "username": "guest-35",
      "msg": "hello",
      "ts": "2023-10-31T08:41:29.725Z"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'visitor' [error-invalid-params]",
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

<h3 id="send-array-of-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-array-of-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» username|string|false|none|none|
|» msg|string|false|none|none|
|» ts|string|false|none|none|
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

## Get a Livechat Message

<a id="opIdget-api-v1-livechat-message-_id"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/message/ZKWP8LfGnRHQ3ozWa?token=8s7e9ony6ctl27e1qf8kue&rid=mmqCzYgiL8fzRYfuY' \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/message/{_id}`

Retrieve specific livechat message information.

<h3 id="get-a-livechat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The visitor token.|
|rid|query|string|true|The room ID.|
|_id|path|string|true|The message ID that you want to update.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "AgRFdj96mbHDPrTHq",
    "rid": "mmqCzYgiL8fzRYfuY",
    "msg": "hi",
    "token": "8s7e9ony6ctl27e1qf8kue",
    "alias": "Mary",
    "ts": "2021-07-13T16:20:26.672Z",
    "u": {
      "_id": "47Dajwh9DjpnTAugW",
      "username": "guest-165",
      "name": "Mary"
    },
    "unread": true,
    "_updatedAt": "2021-07-13T16:20:26.776Z",
    "urls": [],
    "mentions": [],
    "channels": [],
    "md": [
      {
        "type": "PARAGRAPH",
        "value": [
          {
            "type": "PLAIN_TEXT",
            "value": "hi"
          }
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
  "error": "must have required property 'rid' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="get-a-livechat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-a-livechat-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» token|string|false|none|none|
|» alias|string|false|none|none|
|» ts|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» unread|boolean|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
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

## Update Livechat Message

<a id="opIdput-api-v1-livechat-message-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/message/ZKWP8LfGnRHQ3ozWa \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "54fc5544030bcecda053311cb6b9892",
    "rid": "hGFwSKA28nRKut3pD",
    "msg": "editing livechat message.."
  }'
```

`PUT /api/v1/livechat/message/{_id}`

Update a specific livechat message.

> Body parameter

```json
{
  "token": "54fc5544030bcecda053311cb6b9892",
  "rid": "hGFwSKA28nRKut3pD",
  "msg": "editing livechat message.."
}
```

<h3 id="update-livechat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_id|path|string|true|The message ID that you want to update.|
|body|body|object|false|none|
|» token|body|string|false|The visitor token.|
|» rid|body|string|false|The room ID.|
|» msg|body|string|false|The updated message that you want to send.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "ZKWP8LfGnRHQ3ozWa",
    "msg": "editing livechat message..",
    "u": {
      "_id": "YgEoq2djbGdjjZnsL",
      "username": "guest-4",
      "name": "Livechat Visitor"
    },
    "ls": "2018-09-14T13:31:33.201Z"
  },
  "success": true
}
```

<h3 id="update-livechat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="update-livechat-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» msg|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» ls|string|false|none|none|
|success|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Livechat Message

<a id="opIddelete-api-v1-livechat-message-_id"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/message/ZKWP8LfGnRHQ3ozWa \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "54fc5544030bcecda053311cb6b989",
    "rid": "hGFwSKA28nRKut3pD"
  }'
```

`DELETE /api/v1/livechat/message/{_id}`

Remove a specific livechat message. You can only delete your messages if the **Allow Message Deleting** setting is enabled in the Rocket.Chat workspace.


> Body parameter

```json
{
  "token": "54fc5544030bcecda053311cb6b989",
  "rid": "hGFwSKA28nRKut3pD"
}
```

<h3 id="delete-livechat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_id|path|string|true|The message ID that you want to update.|
|body|body|object|false|none|
|» token|body|string|true|The visitor token.|
|» rid|body|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "message": {
    "_id": "ZKWP8LfGnRHQ3ozWa",
    "ls": "2018-09-14T13:31:33.279Z"
  },
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

<h3 id="delete-livechat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="delete-livechat-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|object|false|none|none|
|» _id|string|false|none|none|
|» ls|string|false|none|none|
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

## Get Livechat Message History

<a id="opIdget-api-v1-livechat-messages.history-rid"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/livechat/messages.history/string?token=iNKE8a6k6cjbqWhWd' \
  -H 'Accept: application/json'
```

`GET /api/v1/livechat/messages.history/{rid}`

Get the entire message history of a conversation.

<h3 id="get-livechat-message-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|The visitor token.|
|ls|query|object(date-time)|false|The timestamp to start loading the messages.|
|end|query|object(date-time)|false|Returns only messages sent before this timestamp.|
|limit|query|number|false|The number of messages to load.|
|rid|path|string|true|The room ID.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "ZKWP8LfGnRHQ3ozWa",
      "rid": "KuACMJ5MpN6SfAFWg",
      "msg": "editing livechat message..",
      "token": "iNKE8a6k6cjbqWhWd",
      "alias": "Livechat Visitor",
      "ls": "2018-09-14T13:31:33.201Z",
      "u": {
        "_id": "YgEoq2djbGdjjZnsL",
        "username": "guest-4",
        "name": "Livechat Visitor"
      },
      "mentions": [],
      "channels": [],
      "_updatedAt": "2018-09-14T13:31:33.222Z",
      "editedAt": "2018-09-14T13:31:33.219Z",
      "editedBy": {
        "_id": "YgEoq2djbGdjjZnsL",
        "username": "guest-4"
      },
      "urls": []
    }
  ],
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

<h3 id="get-livechat-message-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-livechat-message-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» msg|string|false|none|none|
|» token|string|false|none|none|
|» alias|string|false|none|none|
|» ls|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» _updatedAt|string|false|none|none|
|» editedAt|string|false|none|none|
|» editedBy|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» urls|[object]|false|none|none|
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

## Send Offline Livechat Message

<a id="opIdpost-api-v1-livechat-offline.message"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/offline.message \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "Livechat Visitor",
    "email": "visitor@rocket.chat",
    "message": "I need help",
    "department": "Support",
    "host": "null"
  }'
```

`POST /api/v1/livechat/offline.message`

Send the offline message when no agent is available to attend the omnichannel conversation.

> Body parameter

```json
{
  "name": "Livechat Visitor",
  "email": "visitor@rocket.chat",
  "message": "I need help",
  "department": "Support",
  "host": "null"
}
```

<h3 id="send-offline-livechat-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|true|Message name.|
|» email|body|string|true|The visitor email.|
|» message|body|string|true|Message text.|
|» department|body|string|true|The department name.|
|» host|body|string|true|The username of the agent.|

> Example responses

> 200 Response

```json
{
  "message": "Livechat offline message sent",
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "must have required property 'name' [error-invalid-params]",
  "errorType": "error-invalid-params"
}
```

<h3 id="send-offline-livechat-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-offline-livechat-message-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

## Get Livechat Messages

<a id="opIdget-api-v1-livechat-:rid-messages"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/string/messages \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/livechat/{rid}/messages`

View the messages of a specific Livechat room.

Permission required: `view-l-room`

<h3 id="get-livechat-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|rid|path|string|true|The room ID.|
|X-Auth-Token|header|string|true|The `authToken` of the authenticated user.|
|X-User-Id|header|string|true|The `userId` of the authenticated user.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object(object)|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|searchTerm|query|string|false|Enter a term that you want to search in the messages.|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "_id": "hmnQoYcnSJp7c9f2v",
      "rid": "dCBiZX3XPWyPsa6pt",
      "ts": "2025-10-16T11:17:07.068Z",
      "msg": "",
      "groupable": false,
      "file": {
        "_id": "68f0d43201e202fefed836cf",
        "name": "video-designs (1).png",
        "type": "image/png",
        "size": 17466,
        "format": "png"
      },
      "files": [
        {
          "_id": "68f0d43201e202fefed836cf",
          "name": "video-designs (1).png",
          "type": "image/png",
          "size": 17466,
          "format": "png"
        },
        {
          "_id": "68f0d43301e202fefed836d1",
          "name": "thumb-video-designs (1).png",
          "type": "image/png",
          "size": 14848,
          "format": "png"
        }
      ],
      "attachments": [
        {
          "title": "video-designs (1).png",
          "title_link": "/file-upload/68f0d43201e202fefed836cf/video-designs%20(1).png",
          "title_link_download": true,
          "image_dimensions": {
            "width": 480,
            "height": 301
          },
          "image_preview": "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAUI/8QAHRAAAgIDAAMAAAAAAAAAAAAAAQIAAwQRMQUhIv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERQf/aAAwDAQACEQMRAD8A8qqCzAKNk8EtbGvW4VNUwsPF17kKXNVquvVO5vt8pdZnpklvpRoHUszqXWNca5rjUKmNg6uvcqYFWIYaI6J0a/KXJnvkhvthrepgusNtrO3WOzFzhLUIiJFIiIH/2Q==",
          "image_url": "/file-upload/68f0d43301e202fefed836d1/video-designs%20(1).png",
          "image_type": "image/png",
          "image_size": 17466,
          "type": "file",
          "description": ""
        }
      ],
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat",
        "name": "Test Cat"
      },
      "_updatedAt": "2025-11-12T10:24:44.420Z",
      "urls": [],
      "mentions": [],
      "channels": []
    },
    {
      "_id": "6j9hrchZBHwZHpsF2",
      "rid": "dCBiZX3XPWyPsa6pt",
      "msg": "hello",
      "ts": "2025-10-16T11:16:58.948Z",
      "u": {
        "_id": "C38WSSzrGd2NCjzqJ",
        "username": "test.cat",
        "name": "Test Cat"
      },
      "_updatedAt": "2025-11-12T10:24:44.420Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "hello"
            }
          ]
        }
      ]
    },
    {
      "_id": "CfD55oXeSvvC3jmZS",
      "rid": "dCBiZX3XPWyPsa6pt",
      "msg": "hello",
      "token": "2c9035b72dec31be7e9ccbb3cbd9952394ea41c1517b76c528d403c00a3fccf9",
      "alias": "swayyy",
      "ts": "2025-10-16T11:16:36.406Z",
      "u": {
        "_id": "68f0d41001e202fefed836af",
        "username": "guest-49",
        "name": "swayyy"
      },
      "_updatedAt": "2025-10-16T11:16:36.447Z",
      "urls": [],
      "mentions": [],
      "channels": [],
      "md": [
        {
          "type": "PARAGRAPH",
          "value": [
            {
              "type": "PLAIN_TEXT",
              "value": "hello"
            }
          ]
        }
      ]
    }
  ],
  "offset": 0,
  "count": 50,
  "total": 3,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "invalid-room"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-livechat-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-livechat-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» _id|string|false|none|none|
|» rid|string|false|none|none|
|» ts|string|false|none|none|
|» msg|string|false|none|none|
|» groupable|boolean|false|none|none|
|» file|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » type|string|false|none|none|
|» » size|integer|false|none|none|
|» » format|string|false|none|none|
|» files|[object]|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » type|string|false|none|none|
|» » size|integer|false|none|none|
|» » format|string|false|none|none|
|» attachments|[object]|false|none|none|
|» » title|string|false|none|none|
|» » title_link|string|false|none|none|
|» » title_link_download|boolean|false|none|none|
|» » image_dimensions|object|false|none|none|
|» » » width|integer|false|none|none|
|» » » height|integer|false|none|none|
|» » image_preview|string|false|none|none|
|» » image_url|string|false|none|none|
|» » image_type|string|false|none|none|
|» » image_size|integer|false|none|none|
|» » type|string|false|none|none|
|» » description|string|false|none|none|
|» u|object|false|none|none|
|» » _id|string|false|none|none|
|» » username|string|false|none|none|
|» » name|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» urls|[object]|false|none|none|
|» mentions|[object]|false|none|none|
|» channels|[object]|false|none|none|
|» md|[object]|false|none|none|
|» » type|string|false|none|none|
|» » value|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» token|string|false|none|none|
|» alias|string|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
|total|integer|false|none|none|
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

<h1 id="omnichannel-livechat-page-visited">Livechat Page Visited</h1>

## Send Visitor Navigation History

<a id="opIdpost-api-v1-livechat-page.visited"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/livechat/page.visited \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "token": "iNKE8a6k6cjbqWhWd",
    "rid": "vp3D9H8ud6HYvRpvq",
    "pageInfo": {
      "change": "url",
      "title": "",
      "location": {
        "href": "http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4"
      }
    }
  }'
```

`POST /api/v1/livechat/page.visited`

Retrieves the pages your visitor navigated on your website.

> Body parameter

```json
{
  "token": "iNKE8a6k6cjbqWhWd",
  "rid": "vp3D9H8ud6HYvRpvq",
  "pageInfo": {
    "change": "url",
    "title": "",
    "location": {
      "href": "http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4"
    }
  }
}
```

<h3 id="send-visitor-navigation-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|Enter the visitor token.|
|» rid|body|string|false|Enter the room ID.|
|» pageInfo|body|object|true|Enter the page information|
|» » change|body|string|true|none|
|» » title|body|string|true|none|
|» » location|body|object|true|none|
|» » » href|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "page": {
    "msg": " - file:///C:/Users/xyz/livechat/helloWorld.html",
    "navigation": {
      "page": {
        "change": "url",
        "title": "",
        "location": {
          "href": "file:///C:/Users/xyz/livechat/helloWorld.html"
        }
      },
      "token": "38cc8c765bf77e943f6e4319c5891f6c40d8538ce83473c8987562ea1d762d04"
    }
  },
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

<h3 id="send-visitor-navigation-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="send-visitor-navigation-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|object|false|none|none|
|» msg|string|false|none|none|
|» navigation|object|false|none|none|
|» » page|object|false|none|none|
|» » » change|string|false|none|none|
|» » » title|string|false|none|none|
|» » » location|object|false|none|none|
|» » » » href|string|false|none|none|
|» » token|string|false|none|none|
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
