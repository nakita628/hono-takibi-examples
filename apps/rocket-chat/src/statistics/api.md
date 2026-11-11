<h1 id="statistics">Statistics v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://apiexplorer.support.rocket.chat">https://apiexplorer.support.rocket.chat</a>

<h1 id="statistics-channels-engagement">Channels Engagement</h1>

## Get Channels Engagement

<a id="opIdget-api-v1-engagement-dashboard-channels-list"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/channels/list?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/channels/list`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve all active channels and the number of messages in each channel within a specific period.

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-channels-engagement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return `count` items, skipping the first `offset` items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "room": {
        "_id": "string",
        "name": "string",
        "ts": "string",
        "t": "string",
        "_updatedAt": "string"
      },
      "messages": 0,
      "lastWeekMessages": 0,
      "diffFromLastWeek": 0
    }
  ],
  "total": 0,
  "offset": 0,
  "count": 0,
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-channels-engagement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-channels-engagement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[object]|false|none|none|
|» room|object|false|none|none|
|» » _id|string|false|none|none|
|» » name|string|false|none|none|
|» » ts|string|false|none|none|
|» » t|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» messages|integer|false|none|none|
|» lastWeekMessages|integer|false|none|none|
|» diffFromLastWeek|integer|false|none|none|
|total|integer|false|none|none|
|offset|integer|false|none|none|
|count|integer|false|none|none|
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

<h1 id="statistics-messages-engagement">Messages Engagement</h1>

## Get Number of Sent Messages

<a id="opIdget-api-v1-engagement-dashboard-messages-messages-sent"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/messages/messages-sent?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/messages/messages-sent`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve the number of messages sent daily during a specific period.

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-number-of-sent-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "days": [
    {
      "day": "2023-05-22T00:00:00.000Z",
      "messages": 22
    },
    {
      "day": "2023-05-21T00:00:00.000Z",
      "messages": 5
    }
  ],
  "period": {
    "count": 760,
    "variation": 716
  },
  "yesterday": {
    "count": 101,
    "variation": 82
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-number-of-sent-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-number-of-sent-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[object]|false|none|none|
|» day|string|false|none|none|
|» messages|integer|false|none|none|
|period|object|false|none|none|
|» count|integer|false|none|none|
|» variation|integer|false|none|none|
|yesterday|object|false|none|none|
|» count|integer|false|none|none|
|» variation|integer|false|none|none|
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

## Get Origin of Message Sent

<a id="opIdget-api-v1-engagement-dashboard-messages-origin"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/messages/origin?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/messages/origin`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Get the origin of messages sent during a specific period. It highlights the number of messages sent in private channels, private chats, and public channels.

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-origin-of-message-sent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "origins": [
    {
      "messages": 7302,
      "t": "c"
    },
    {
      "messages": 1147,
      "t": "d"
    },
    {
      "messages": 122,
      "t": "p"
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-origin-of-message-sent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|`t` denotes the type of room where the messages are sent. The types of rooms can be any of the following:<br>  - `d` represents Private Chats<br>  - `c` represents Public Channels<br>  - `p` represents Private Channels|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-origin-of-message-sent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|origins|[object]|false|none|none|
|» messages|integer|false|none|none|
|» t|string|false|none|none|
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

## Get the Most Popular Channels

<a id="opIdget-api-v1-engagement-dashboard-messages-top-five-popular-channels"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/messages/top-five-popular-channels?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/messages/top-five-popular-channels`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieves the top 5 popular channels in your workspace by the number of messages sent. It highlights the number of messages sent in private channels, private chats, and public channels. 

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-the-most-popular-channels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "messages": 727,
      "t": "d",
      "usernames": [
        "google-calendar.bot",
        "pavi.kim"
      ]
    },
    {
      "messages": 26,
      "t": "d",
      "usernames": [
        "fun.baek",
        "google-calendar.bot"
      ]
    },
    {
      "messages": 2,
      "t": "d",
      "usernames": [
        "test.test",
        "rocket.cat"
      ]
    },
    {
      "messages": 1,
      "t": "d",
      "usernames": [
        "ria.mit",
        "rocket.cat"
      ]
    },
    {
      "messages": 1,
      "t": "d",
      "usernames": [
        "janna.coelho",
        "rocket.cat"
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
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-the-most-popular-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|`t` denotes the type of room where the messages are sent. The types of rooms can be any of the following:<br>  - `d` represents Private Chats<br>  - `c` represents Public Channels<br>  - `p` represents Private Channels"|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-the-most-popular-channels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[object]|false|none|none|
|» messages|integer|false|none|none|
|» t|string|false|none|none|
|» name|string|false|none|none|
|» usernames|[object]|false|none|none|
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

<h1 id="statistics-statistics">Statistics</h1>

## Get Statistics List

<a id="opIdget-api-v1-statistics.list"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/statistics.list \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/statistics.list`

Get statistics about the Rocket.Chat workspace. 

Permission required: `view-statistics` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed the `fields` and `query` parameters, retired OAuth provider statistics, and the `allowUnsafeQueryAndFieldsApiParamsEnabled` field. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |
|8.7.0             | Added the `fips` field to statistics records. |        
|0.51.0            | Added       |

<h3 id="get-statistics-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|count|query|integer|false|The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|offset|query|integer|false|Number of items to "skip" in the query, i.e. requests return `count` items, skipping the first `offset` items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|
|sort|query|object|false|List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{"value": -1, "_id": 1}`.  Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.|

> Example responses

> 200 Response

```json
{
  "statistics": [
    {
      "_id": "6a708537c8fc3c65b1808baf",
      "wizard": {
        "organizationType": "",
        "industry": "",
        "size": "",
        "country": "",
        "language": "",
        "serverType": "",
        "registerServer": false
      },
      "uniqueId": "2d3ad4fb-d515-4f09-8f02-0f186c8cc929",
      "installedAt": "2026-08-03T12:10:10.817Z",
      "deploymentFingerprintHash": "",
      "deploymentFingerprintVerified": true,
      "version": "8.7.0-rc.3",
      "tag": null,
      "branch": null,
      "totalUsers": 0,
      "activeUsers": 0,
      "activeGuests": 0,
      "nonActiveUsers": 0,
      "appUsers": 0,
      "onlineUsers": 0,
      "awayUsers": 0,
      "busyUsers": 0,
      "totalConnectedUsers": 0,
      "offlineUsers": 0,
      "userLanguages": {
        "none": 0
      },
      "totalRooms": 0,
      "totalChannels": 0,
      "totalPrivateGroups": 0,
      "totalDirect": 0,
      "totalLivechat": 0,
      "totalDiscussions": 0,
      "totalThreads": 0,
      "totalLivechatVisitors": 0,
      "totalLivechatAgents": 0,
      "totalLivechatManagers": 0,
      "livechatEnabled": true,
      "isDepartmentRemovalEnabled": false,
      "omnichannelSources": [],
      "totalLivechatRoomsWithDepartment": 0,
      "departments": 0,
      "totalTriggers": 0,
      "archivedDepartments": 0,
      "totalCustomFields": 0,
      "totalLivechatPublicCustomFields": 0,
      "livechatAutomaticForwardingUnansweredChats": true,
      "routingAlgorithm": "Auto_Selection",
      "onHoldEnabled": null,
      "lastChattedAgentPreferred": null,
      "assignNewConversationsToContactManager": null,
      "visitorAbandonment": null,
      "emailInboxes": 0,
      "BusinessHours": {
        "total": 0,
        "strategy": ""
      },
      "chatsOnHold": 0,
      "uniqueContactsOfLastMonth": {
        "contactsCount": 0,
        "conversationsCount": 0,
        "sources": []
      },
      "omnichannelContactsBySource": {
        "contactsCount": 0,
        "conversationsCount": 0,
        "sources": []
      },
      "totalChannelMessages": 0,
      "uniqueContactsOfYesterday": {
        "contactsCount": 0,
        "conversationsCount": 0,
        "sources": []
      },
      "uniqueContactsOfLastWeek": {
        "contactsCount": 0,
        "conversationsCount": 0,
        "sources": []
      },
      "totalPrivateGroupMessages": 0,
      "totalDiscussionsMessages": 0,
      "totalDirectMessages": 0,
      "totalLivechatMessages": 0,
      "totalMessages": 0,
      "lastLogin": "",
      "lastMessageSentAt": null,
      "lastSeenSubscription": "",
      "os": {
        "type": "Linux",
        "platform": "linux",
        "arch": "x64",
        "release": "6.17.0-1017-aws",
        "uptime": 2119.94,
        "loadavg": [
          6.92,
          5.81,
          3.52
        ],
        "totalmem": 8220839936,
        "freemem": 3768729600,
        "cpus": [
          {
            "model": "AMD EPYC 7571",
            "speed": 0,
            "times": {
              "user": 404110,
              "nice": 0,
              "sys": 206780,
              "idle": 1425940,
              "irq": 0
            }
          },
          {
            "model": "AMD EPYC 7571",
            "speed": 0,
            "times": {
              "user": 416850,
              "nice": 0,
              "sys": 203030,
              "idle": 1418740,
              "irq": 0
            }
          }
        ]
      },
      "process": {
        "nodeVersion": "v22.22.3",
        "pid": 1,
        "uptime": 74.175831587
      },
      "deploy": {
        "method": "docker",
        "platform": "helm-chart"
      },
      "fips": true,
      "readReceiptsEnabled": false,
      "readReceiptsDetailed": false,
      "enterpriseReady": true,
      "fileStoreType": "GridFS",
      "uploadsTotal": 0,
      "uploadsTotalSize": 0,
      "migration": {
        "_id": "control",
        "_updatedAt": "2026-08-03T12:10:13.492Z",
        "locked": false,
        "version": 335
      },
      "instanceCount": 0,
      "msEnabled": true,
      "oplogEnabled": false,
      "mongoVersion": "8.0.0",
      "mongoStorageEngine": "unknown",
      "apps": {
        "engineVersion": "1.65.1-rc.0",
        "totalInstalled": 0,
        "totalActive": 0,
        "totalFailed": 0,
        "totalPrivateApps": 0,
        "totalPrivateAppsEnabled": 0
      },
      "uniqueUsersOfYesterday": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueDevicesOfYesterday": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueUsersOfLastMonth": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueUsersOfLastWeek": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueOSOfYesterday": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueDevicesOfLastMonth": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueOSOfLastMonth": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueDevicesOfLastWeek": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "uniqueOSOfLastWeek": {
        "year": 2026,
        "month": 8,
        "day": 2,
        "data": []
      },
      "services": {
        "ldap": {
          "users": 0,
          "enabled": false,
          "loginFallback": false,
          "encryption": "plain",
          "mergeUsers": false,
          "syncRoles": null,
          "syncRolesAutoRemove": null,
          "syncData": null,
          "syncChannels": null,
          "syncAvatar": true,
          "groupFilter": false,
          "backgroundSync": {
            "enabled": null,
            "interval": null,
            "newUsers": null,
            "existingUsers": null
          },
          "ee": {
            "syncActiveState": null,
            "syncTeams": null,
            "syncRoles": null
          }
        },
        "saml": {
          "enabled": null,
          "users": 0,
          "signatureValidationType": null,
          "generateUsername": null,
          "updateSubscriptionsOnLogin": null,
          "syncRoles": null,
          "userDataCustomFieldMap": false
        },
        "cas": {
          "enabled": false,
          "users": 0,
          "allowUserCreation": true,
          "alwaysSyncUserData": true
        },
        "oauth": {
          "apple": {
            "enabled": false,
            "users": 0
          },
          "github": {
            "enabled": false,
            "users": 0
          },
          "gitlab": {
            "enabled": false,
            "users": 0
          },
          "google": {
            "enabled": false,
            "users": 0
          },
          "nextcloud": {
            "enabled": false,
            "users": 0
          },
          "custom": {}
        }
      },
      "importer": {
        "totalCSVImportedUsers": 0,
        "totalHipchatEnterpriseImportedUsers": 0,
        "totalSlackImportedUsers": 0,
        "totalSlackUsersImportedUsers": 0
      },
      "videoConf": {
        "videoConference": {
          "started": 0,
          "ended": 0
        },
        "direct": {
          "calling": 0,
          "started": 0,
          "ended": 0
        },
        "livechat": {
          "started": 0,
          "ended": 0
        },
        "settings": {
          "provider": "",
          "dms": null,
          "channels": null,
          "groups": null,
          "teams": null
        }
      },
      "contactVerification": {
        "totalContacts": 0,
        "totalUnknownContacts": 0,
        "totalMergedContacts": null,
        "totalConflicts": 0,
        "totalResolvedConflicts": null,
        "totalBlockedContacts": 0,
        "totalPartiallyBlockedContacts": 0,
        "totalFullyBlockedContacts": 0,
        "totalVerifiedContacts": 0,
        "avgChannelsPerContact": 0,
        "totalContactsWithoutChannels": 0,
        "totalImportedContacts": null,
        "totalUpsellViews": null,
        "totalUpsellClicks": null
      },
      "dashboardCount": 0,
      "messageAuditApply": 0,
      "messageAuditLoad": 0,
      "joinJitsiButton": 0,
      "slashCommandsJitsi": 0,
      "settings": {
        "accounts": {
          "account2fa": true
        },
        "cannedResponses": {
          "cannedResponsesEnabled": true
        },
        "e2ee": {
          "e2e": false,
          "e2eDefaultDirectRoom": false,
          "e2eDefaultPrivateRoom": false
        },
        "email": {
          "smtp": {
            "smtpHost": "",
            "smtpPort": "",
            "fromEmail": ""
          }
        },
        "fileUpload": {
          "fileUploadEnable": true
        },
        "general": {
          "apps": {
            "frameworkDevMode": null,
            "frameworkEnable": null
          },
          "nps": {
            "surveyEnabled": true
          },
          "update": {
            "updateChecker": true
          }
        },
        "liveStreamAndBroadcasting": {
          "liveStream": null,
          "broadcasting": null
        },
        "message": {
          "allowEditing": true,
          "allowDeleting": true,
          "allowUnrecognizedSlashCommand": false,
          "allowBadWordsFilter": false,
          "readReceiptEnabled": false,
          "readReceiptStoreUsers": false
        },
        "push": {
          "pushEnable": true
        },
        "search": {
          "defaultProvider": {
            "globalSearchEnabled": null
          }
        },
        "threads": {
          "threadsEnabled": true
        },
        "webRTC": {
          "webRTCEnableChannel": null,
          "webRTCEnablePrivate": null,
          "webRTCEnableDirect": null
        }
      },
      "totalBroadcastRooms": 0,
      "totalTriggeredEmails": 0,
      "pushQueue": 0,
      "integrations": {
        "totalIntegrations": 0,
        "totalIncoming": 0,
        "totalIncomingActive": 0,
        "totalOutgoing": 0,
        "totalOutgoingActive": 0,
        "totalWithScriptEnabled": 0
      },
      "enterprise": {
        "modules": [
          "auditing",
          "canned-responses",
          "ldap-enterprise",
          "livechat-enterprise",
          "voip-enterprise",
          "omnichannel-mobile-enterprise",
          "engagement-dashboard",
          "push-privacy",
          "scalability",
          "teams-mention",
          "saml-enterprise",
          "oauth-enterprise",
          "device-management",
          "federation",
          "videoconference-enterprise",
          "message-read-receipt",
          "outlook-calendar",
          "hide-watermark",
          "custom-roles",
          "accessibility-certification",
          "fips"
        ],
        "tags": [
          "Commercial"
        ],
        "seatRequests": 0,
        "livechatTags": 0,
        "cannedResponses": 0,
        "slas": 0,
        "omnichannelRoomsWithPriorities": 0,
        "omnichannelRoomsWithSlas": 0,
        "businessUnits": 0,
        "omnichannelPdfTranscriptSucceeded": 0,
        "livechatMonitors": 0
      },
      "teams": {
        "totalTeams": 0,
        "totalRoomsInsideTeams": 0,
        "totalDefaultRoomsInsideTeams": 0
      },
      "totalRoomsWithStarred": 0,
      "totalRoomsWithPinned": 0,
      "totalUserTOTP": 0,
      "totalUserEmail2fa": 0,
      "totalPinned": 0,
      "totalStarred": 0,
      "totalLinkInvitation": 0,
      "totalLinkInvitationUses": 0,
      "totalEmailInvitation": 0,
      "totalE2ERooms": 0,
      "logoChange": false,
      "showHomeButton": true,
      "totalEncryptedMessages": 0,
      "totalManuallyAddedUsers": 0,
      "totalSubscriptionRoles": 3,
      "totalUserRoles": 11,
      "totalCustomRoles": 0,
      "totalWebRTCCalls": null,
      "uncaughtExceptionsCount": 0,
      "push": 3,
      "pushSecured": false,
      "homeTitleChanged": false,
      "homeBodyChanged": false,
      "customCSSChanged": false,
      "onLogoutCustomScriptChanged": false,
      "loggedOutCustomScriptChanged": false,
      "loggedInCustomScriptChanged": false,
      "dailyPeakConnections": 0,
      "maxMonthlyPeakConnections": 0,
      "matrixFederation": {
        "enabled": false,
        "maximumSizeOfPublicRoomsUsers": false,
        "biggestRoom": null,
        "smallestRoom": null,
        "amountOfExternalUsers": 0,
        "amountOfFederatedRooms": 0,
        "externalConnectedServers": {
          "quantity": 0,
          "servers": []
        }
      },
      "createdAt": "2026-08-03T12:10:31.265Z",
      "_updatedAt": "2026-08-03T12:10:31.426Z",
      "statsToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6IiIsInVuaXF1ZUlkIjoiMmQzYWQ0ZmItZDUxNS00ZjA5LThmMDItMGYxODZjOGNjOTI5IiwicmVjb3JkSWQiOiI2YTcwODUzN2M4ZmMzYzY1YjE4MDhiYWYiLCJ0aW1lc3RhbXAiOiIyMDI2LTA4LTAzVDEyOjEwOjMxLjQwNzk5NzEyOFoiLCJpbmZvIjp7InRvdGFsVXNlcnMiOjAsImFjdGl2ZVVzZXJzIjowLCJ0b3RhbENvbm5lY3RlZFVzZXJzIjowLCJvbW5pQ2hhbm5lbENvbnZlcnNhdGlvbnMiOjAsInRvdGFsUm9vbXMiOjAsInRvdGFsTWVzc2FnZXMiOjAsInVwbG9hZHNUb3RhbFNpemUiOjAsIm1pY3Jvc2VydmljZUVuYWJsZWQiOnRydWUsImZpbGVTdG9yZVR5cGUiOiJHcmlkRlMifX0.JnBb7z--brY2k00kIkC_Rp502P8wdKVcC2kAxEKK0OBFJlAgLM4ezZ5m_xG2w1wX3wCTNKnrjO3D5Mi-bzYNmNNBcJQbujP2uUGWMnr42UUAbyPY9VWKCf4L3H9cgzB9WjJX94KiVlwLjnbqle9TE0wAubP-NR1lzZn06GrnD9bAFSdz2E5lI4s6qozfUW5z8ZmSgXs5MBSbhBQczUbmQkQoj2XjKs5Mkqow0qLeBsCrc0F2m_92YeO1S6StRGvLIVyce-qvm0DLT8hXhpoJyRRgLz_3JyOzOE6hfxcgWI43YUZ4o4n7QruSYDhSFnAjuAlZjHasBCKPfs9ht9vRtQ"
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
  "error": "error-not-allowed",
  "errorType": "error-forbidden"
}
```

<h3 id="get-statistics-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-statistics-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statistics|[object]|false|none|none|
|» _id|string|false|none|none|
|» wizard|object|false|none|none|
|» » organizationType|string|false|none|none|
|» » industry|string|false|none|none|
|» » size|string|false|none|none|
|» » country|string|false|none|none|
|» » language|string|false|none|none|
|» » serverType|string|false|none|none|
|» » registerServer|boolean|false|none|none|
|» uniqueId|string|false|none|none|
|» installedAt|string|false|none|none|
|» deploymentFingerprintHash|string|false|none|none|
|» deploymentFingerprintVerified|boolean|false|none|none|
|» version|string|false|none|none|
|» tag|string|false|none|none|
|» branch|string|false|none|none|
|» totalUsers|integer|false|none|none|
|» activeUsers|integer|false|none|none|
|» activeGuests|integer|false|none|none|
|» nonActiveUsers|integer|false|none|none|
|» appUsers|integer|false|none|none|
|» onlineUsers|integer|false|none|none|
|» awayUsers|integer|false|none|none|
|» busyUsers|integer|false|none|none|
|» totalConnectedUsers|integer|false|none|none|
|» offlineUsers|integer|false|none|none|
|» userLanguages|object|false|none|none|
|» » none|integer|false|none|none|
|» totalRooms|integer|false|none|none|
|» totalChannels|integer|false|none|none|
|» totalPrivateGroups|integer|false|none|none|
|» totalDirect|integer|false|none|none|
|» totalLivechat|integer|false|none|none|
|» totalDiscussions|integer|false|none|none|
|» totalThreads|integer|false|none|none|
|» totalLivechatVisitors|integer|false|none|none|
|» totalLivechatAgents|integer|false|none|none|
|» totalLivechatManagers|integer|false|none|none|
|» livechatEnabled|boolean|false|none|none|
|» isDepartmentRemovalEnabled|boolean|false|none|none|
|» omnichannelSources|[object]|false|none|none|
|» totalLivechatRoomsWithDepartment|integer|false|none|none|
|» departments|integer|false|none|none|
|» totalTriggers|integer|false|none|none|
|» archivedDepartments|integer|false|none|none|
|» totalCustomFields|integer|false|none|none|
|» totalLivechatPublicCustomFields|integer|false|none|none|
|» livechatAutomaticForwardingUnansweredChats|boolean|false|none|none|
|» routingAlgorithm|string|false|none|none|
|» onHoldEnabled|string|false|none|none|
|» lastChattedAgentPreferred|string|false|none|none|
|» assignNewConversationsToContactManager|string|false|none|none|
|» visitorAbandonment|string|false|none|none|
|» emailInboxes|integer|false|none|none|
|» BusinessHours|object|false|none|none|
|» » total|integer|false|none|none|
|» » strategy|string|false|none|none|
|» chatsOnHold|integer|false|none|none|
|» uniqueContactsOfLastMonth|object|false|none|none|
|» » contactsCount|integer|false|none|none|
|» » conversationsCount|integer|false|none|none|
|» » sources|[object]|false|none|none|
|» omnichannelContactsBySource|object|false|none|none|
|» » contactsCount|integer|false|none|none|
|» » conversationsCount|integer|false|none|none|
|» » sources|[object]|false|none|none|
|» totalChannelMessages|integer|false|none|none|
|» uniqueContactsOfYesterday|object|false|none|none|
|» » contactsCount|integer|false|none|none|
|» » conversationsCount|integer|false|none|none|
|» » sources|[object]|false|none|none|
|» uniqueContactsOfLastWeek|object|false|none|none|
|» » contactsCount|integer|false|none|none|
|» » conversationsCount|integer|false|none|none|
|» » sources|[object]|false|none|none|
|» totalPrivateGroupMessages|integer|false|none|none|
|» totalDiscussionsMessages|integer|false|none|none|
|» totalDirectMessages|integer|false|none|none|
|» totalLivechatMessages|integer|false|none|none|
|» totalMessages|integer|false|none|none|
|» lastLogin|string|false|none|none|
|» lastMessageSentAt|string|false|none|none|
|» lastSeenSubscription|string|false|none|none|
|» os|object|false|none|none|
|» » type|string|false|none|none|
|» » platform|string|false|none|none|
|» » arch|string|false|none|none|
|» » release|string|false|none|none|
|» » uptime|number|false|none|none|
|» » loadavg|[number]|false|none|none|
|» » totalmem|integer|false|none|none|
|» » freemem|integer|false|none|none|
|» » cpus|[object]|false|none|none|
|» » » model|string|false|none|none|
|» » » speed|integer|false|none|none|
|» » » times|object|false|none|none|
|» » » » user|integer|false|none|none|
|» » » » nice|integer|false|none|none|
|» » » » sys|integer|false|none|none|
|» » » » idle|integer|false|none|none|
|» » » » irq|integer|false|none|none|
|» process|object|false|none|none|
|» » nodeVersion|string|false|none|none|
|» » pid|integer|false|none|none|
|» » uptime|number|false|none|none|
|» deploy|object|false|none|none|
|» » method|string|false|none|none|
|» » platform|string|false|none|none|
|» fips|boolean|false|none|none|
|» readReceiptsEnabled|boolean|false|none|none|
|» readReceiptsDetailed|boolean|false|none|none|
|» enterpriseReady|boolean|false|none|none|
|» fileStoreType|string|false|none|none|
|» uploadsTotal|integer|false|none|none|
|» uploadsTotalSize|integer|false|none|none|
|» migration|object|false|none|none|
|» » _id|string|false|none|none|
|» » _updatedAt|string|false|none|none|
|» » locked|boolean|false|none|none|
|» » version|integer|false|none|none|
|» instanceCount|integer|false|none|none|
|» msEnabled|boolean|false|none|none|
|» oplogEnabled|boolean|false|none|none|
|» mongoVersion|string|false|none|none|
|» mongoStorageEngine|string|false|none|none|
|» apps|object|false|none|none|
|» » engineVersion|string|false|none|none|
|» » totalInstalled|integer|false|none|none|
|» » totalActive|integer|false|none|none|
|» » totalFailed|integer|false|none|none|
|» » totalPrivateApps|integer|false|none|none|
|» » totalPrivateAppsEnabled|integer|false|none|none|
|» uniqueUsersOfYesterday|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueDevicesOfYesterday|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueUsersOfLastMonth|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueUsersOfLastWeek|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueOSOfYesterday|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueDevicesOfLastMonth|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueOSOfLastMonth|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueDevicesOfLastWeek|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» uniqueOSOfLastWeek|object|false|none|none|
|» » year|integer|false|none|none|
|» » month|integer|false|none|none|
|» » day|integer|false|none|none|
|» » data|[object]|false|none|none|
|» services|object|false|none|none|
|» » ldap|object|false|none|none|
|» » » users|integer|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » loginFallback|boolean|false|none|none|
|» » » encryption|string|false|none|none|
|» » » mergeUsers|boolean|false|none|none|
|» » » syncRoles|string|false|none|none|
|» » » syncRolesAutoRemove|string|false|none|none|
|» » » syncData|string|false|none|none|
|» » » syncChannels|string|false|none|none|
|» » » syncAvatar|boolean|false|none|none|
|» » » groupFilter|boolean|false|none|none|
|» » » backgroundSync|object|false|none|none|
|» » » » enabled|string|false|none|none|
|» » » » interval|string|false|none|none|
|» » » » newUsers|string|false|none|none|
|» » » » existingUsers|string|false|none|none|
|» » » ee|object|false|none|none|
|» » » » syncActiveState|string|false|none|none|
|» » » » syncTeams|string|false|none|none|
|» » » » syncRoles|string|false|none|none|
|» » saml|object|false|none|none|
|» » » enabled|string|false|none|none|
|» » » users|integer|false|none|none|
|» » » signatureValidationType|string|false|none|none|
|» » » generateUsername|string|false|none|none|
|» » » updateSubscriptionsOnLogin|string|false|none|none|
|» » » syncRoles|string|false|none|none|
|» » » userDataCustomFieldMap|boolean|false|none|none|
|» » cas|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » users|integer|false|none|none|
|» » » allowUserCreation|boolean|false|none|none|
|» » » alwaysSyncUserData|boolean|false|none|none|
|» » oauth|object|false|none|none|
|» » » apple|object|false|none|none|
|» » » » enabled|boolean|false|none|none|
|» » » » users|integer|false|none|none|
|» » » github|object|false|none|none|
|» » » » enabled|boolean|false|none|none|
|» » » » users|integer|false|none|none|
|» » » gitlab|object|false|none|none|
|» » » » enabled|boolean|false|none|none|
|» » » » users|integer|false|none|none|
|» » » google|object|false|none|none|
|» » » » enabled|boolean|false|none|none|
|» » » » users|integer|false|none|none|
|» » » nextcloud|object|false|none|none|
|» » » » enabled|boolean|false|none|none|
|» » » » users|integer|false|none|none|
|» » » custom|object|false|none|none|
|» importer|object|false|none|none|
|» » totalCSVImportedUsers|integer|false|none|none|
|» » totalHipchatEnterpriseImportedUsers|integer|false|none|none|
|» » totalSlackImportedUsers|integer|false|none|none|
|» » totalSlackUsersImportedUsers|integer|false|none|none|
|» videoConf|object|false|none|none|
|» » videoConference|object|false|none|none|
|» » » started|integer|false|none|none|
|» » » ended|integer|false|none|none|
|» » direct|object|false|none|none|
|» » » calling|integer|false|none|none|
|» » » started|integer|false|none|none|
|» » » ended|integer|false|none|none|
|» » livechat|object|false|none|none|
|» » » started|integer|false|none|none|
|» » » ended|integer|false|none|none|
|» » settings|object|false|none|none|
|» » » provider|string|false|none|none|
|» » » dms|string|false|none|none|
|» » » channels|string|false|none|none|
|» » » groups|string|false|none|none|
|» » » teams|string|false|none|none|
|» contactVerification|object|false|none|none|
|» » totalContacts|integer|false|none|none|
|» » totalUnknownContacts|integer|false|none|none|
|» » totalMergedContacts|string|false|none|none|
|» » totalConflicts|integer|false|none|none|
|» » totalResolvedConflicts|string|false|none|none|
|» » totalBlockedContacts|integer|false|none|none|
|» » totalPartiallyBlockedContacts|integer|false|none|none|
|» » totalFullyBlockedContacts|integer|false|none|none|
|» » totalVerifiedContacts|integer|false|none|none|
|» » avgChannelsPerContact|integer|false|none|none|
|» » totalContactsWithoutChannels|integer|false|none|none|
|» » totalImportedContacts|string|false|none|none|
|» » totalUpsellViews|string|false|none|none|
|» » totalUpsellClicks|string|false|none|none|
|» dashboardCount|integer|false|none|none|
|» messageAuditApply|integer|false|none|none|
|» messageAuditLoad|integer|false|none|none|
|» joinJitsiButton|integer|false|none|none|
|» slashCommandsJitsi|integer|false|none|none|
|» settings|object|false|none|none|
|» » accounts|object|false|none|none|
|» » » account2fa|boolean|false|none|none|
|» » cannedResponses|object|false|none|none|
|» » » cannedResponsesEnabled|boolean|false|none|none|
|» » e2ee|object|false|none|none|
|» » » e2e|boolean|false|none|none|
|» » » e2eDefaultDirectRoom|boolean|false|none|none|
|» » » e2eDefaultPrivateRoom|boolean|false|none|none|
|» » email|object|false|none|none|
|» » » smtp|object|false|none|none|
|» » » » smtpHost|string|false|none|none|
|» » » » smtpPort|string|false|none|none|
|» » » » fromEmail|string|false|none|none|
|» » fileUpload|object|false|none|none|
|» » » fileUploadEnable|boolean|false|none|none|
|» » general|object|false|none|none|
|» » » apps|object|false|none|none|
|» » » » frameworkDevMode|string|false|none|none|
|» » » » frameworkEnable|string|false|none|none|
|» » » nps|object|false|none|none|
|» » » » surveyEnabled|boolean|false|none|none|
|» » » update|object|false|none|none|
|» » » » updateChecker|boolean|false|none|none|
|» » liveStreamAndBroadcasting|object|false|none|none|
|» » » liveStream|string|false|none|none|
|» » » broadcasting|string|false|none|none|
|» » message|object|false|none|none|
|» » » allowEditing|boolean|false|none|none|
|» » » allowDeleting|boolean|false|none|none|
|» » » allowUnrecognizedSlashCommand|boolean|false|none|none|
|» » » allowBadWordsFilter|boolean|false|none|none|
|» » » readReceiptEnabled|boolean|false|none|none|
|» » » readReceiptStoreUsers|boolean|false|none|none|
|» » push|object|false|none|none|
|» » » pushEnable|boolean|false|none|none|
|» » search|object|false|none|none|
|» » » defaultProvider|object|false|none|none|
|» » » » globalSearchEnabled|string|false|none|none|
|» » threads|object|false|none|none|
|» » » threadsEnabled|boolean|false|none|none|
|» » webRTC|object|false|none|none|
|» » » webRTCEnableChannel|string|false|none|none|
|» » » webRTCEnablePrivate|string|false|none|none|
|» » » webRTCEnableDirect|string|false|none|none|
|» totalBroadcastRooms|integer|false|none|none|
|» totalTriggeredEmails|integer|false|none|none|
|» pushQueue|integer|false|none|none|
|» integrations|object|false|none|none|
|» » totalIntegrations|integer|false|none|none|
|» » totalIncoming|integer|false|none|none|
|» » totalIncomingActive|integer|false|none|none|
|» » totalOutgoing|integer|false|none|none|
|» » totalOutgoingActive|integer|false|none|none|
|» » totalWithScriptEnabled|integer|false|none|none|
|» enterprise|object|false|none|none|
|» » modules|[string]|false|none|none|
|» » tags|[string]|false|none|none|
|» » seatRequests|integer|false|none|none|
|» » livechatTags|integer|false|none|none|
|» » cannedResponses|integer|false|none|none|
|» » slas|integer|false|none|none|
|» » omnichannelRoomsWithPriorities|integer|false|none|none|
|» » omnichannelRoomsWithSlas|integer|false|none|none|
|» » businessUnits|integer|false|none|none|
|» » omnichannelPdfTranscriptSucceeded|integer|false|none|none|
|» » livechatMonitors|integer|false|none|none|
|» teams|object|false|none|none|
|» » totalTeams|integer|false|none|none|
|» » totalRoomsInsideTeams|integer|false|none|none|
|» » totalDefaultRoomsInsideTeams|integer|false|none|none|
|» totalRoomsWithStarred|integer|false|none|none|
|» totalRoomsWithPinned|integer|false|none|none|
|» totalUserTOTP|integer|false|none|none|
|» totalUserEmail2fa|integer|false|none|none|
|» totalPinned|integer|false|none|none|
|» totalStarred|integer|false|none|none|
|» totalLinkInvitation|integer|false|none|none|
|» totalLinkInvitationUses|integer|false|none|none|
|» totalEmailInvitation|integer|false|none|none|
|» totalE2ERooms|integer|false|none|none|
|» logoChange|boolean|false|none|none|
|» showHomeButton|boolean|false|none|none|
|» totalEncryptedMessages|integer|false|none|none|
|» totalManuallyAddedUsers|integer|false|none|none|
|» totalSubscriptionRoles|integer|false|none|none|
|» totalUserRoles|integer|false|none|none|
|» totalCustomRoles|integer|false|none|none|
|» totalWebRTCCalls|string|false|none|none|
|» uncaughtExceptionsCount|integer|false|none|none|
|» push|integer|false|none|none|
|» pushSecured|boolean|false|none|none|
|» homeTitleChanged|boolean|false|none|none|
|» homeBodyChanged|boolean|false|none|none|
|» customCSSChanged|boolean|false|none|none|
|» onLogoutCustomScriptChanged|boolean|false|none|none|
|» loggedOutCustomScriptChanged|boolean|false|none|none|
|» loggedInCustomScriptChanged|boolean|false|none|none|
|» dailyPeakConnections|integer|false|none|none|
|» maxMonthlyPeakConnections|integer|false|none|none|
|» matrixFederation|object|false|none|none|
|» » enabled|boolean|false|none|none|
|» » maximumSizeOfPublicRoomsUsers|boolean|false|none|none|
|» » biggestRoom|string|false|none|none|
|» » smallestRoom|string|false|none|none|
|» » amountOfExternalUsers|integer|false|none|none|
|» » amountOfFederatedRooms|integer|false|none|none|
|» » externalConnectedServers|object|false|none|none|
|» » » quantity|integer|false|none|none|
|» » » servers|[object]|false|none|none|
|» createdAt|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» statsToken|string|false|none|none|
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

## Get Last Statistics

<a id="opIdget-api-v1-statistics"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/statistics \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/statistics`

Statistics about the Rocket.Chat workspace. 

Permission required: `view-statistics` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|9.0.0   | Removed retired OAuth provider statistics and the `allowUnsafeQueryAndFieldsApiParamsEnabled` field. Returns `403` with `errorType: error-forbidden` instead of `400` when refused.       |
|8.7.0             | Added the `fips` field to statistics records. |        
|0.51.0            | Added       |

<h3 id="get-last-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|refresh|query|boolean|false|Set to true to refresh the statistics.|

> Example responses

> 200 Response

```json
{
  "_id": "6a708537c8fc3c65b1808baf",
  "wizard": {
    "organizationType": "",
    "industry": "",
    "size": "",
    "country": "",
    "language": "",
    "serverType": "",
    "registerServer": false
  },
  "uniqueId": "2d3ad4fb-d515-4f09-8f02-0f186c8cc929",
  "installedAt": "2026-08-03T12:10:10.817Z",
  "deploymentFingerprintHash": "",
  "deploymentFingerprintVerified": true,
  "version": "8.7.0",
  "tag": null,
  "branch": null,
  "totalUsers": 0,
  "activeUsers": 0,
  "activeGuests": 0,
  "nonActiveUsers": 0,
  "appUsers": 0,
  "onlineUsers": 0,
  "awayUsers": 0,
  "busyUsers": 0,
  "totalConnectedUsers": 0,
  "offlineUsers": 0,
  "userLanguages": {
    "none": 0
  },
  "totalRooms": 0,
  "totalChannels": 0,
  "totalPrivateGroups": 0,
  "totalDirect": 0,
  "totalLivechat": 0,
  "totalDiscussions": 0,
  "totalThreads": 0,
  "totalLivechatVisitors": 0,
  "totalLivechatAgents": 0,
  "totalLivechatManagers": 0,
  "livechatEnabled": true,
  "isDepartmentRemovalEnabled": false,
  "omnichannelSources": [],
  "totalLivechatRoomsWithDepartment": 0,
  "departments": 0,
  "totalTriggers": 0,
  "archivedDepartments": 0,
  "totalCustomFields": 0,
  "totalLivechatPublicCustomFields": 0,
  "livechatAutomaticForwardingUnansweredChats": true,
  "routingAlgorithm": "Auto_Selection",
  "onHoldEnabled": null,
  "lastChattedAgentPreferred": null,
  "assignNewConversationsToContactManager": null,
  "visitorAbandonment": null,
  "emailInboxes": 0,
  "BusinessHours": {
    "total": 0,
    "strategy": ""
  },
  "chatsOnHold": 0,
  "uniqueContactsOfLastMonth": {
    "contactsCount": 0,
    "conversationsCount": 0,
    "sources": []
  },
  "omnichannelContactsBySource": {
    "contactsCount": 0,
    "conversationsCount": 0,
    "sources": []
  },
  "totalChannelMessages": 0,
  "uniqueContactsOfYesterday": {
    "contactsCount": 0,
    "conversationsCount": 0,
    "sources": []
  },
  "uniqueContactsOfLastWeek": {
    "contactsCount": 0,
    "conversationsCount": 0,
    "sources": []
  },
  "totalPrivateGroupMessages": 0,
  "totalDiscussionsMessages": 0,
  "totalDirectMessages": 0,
  "totalLivechatMessages": 0,
  "totalMessages": 0,
  "lastLogin": "",
  "lastMessageSentAt": null,
  "lastSeenSubscription": "",
  "os": {
    "type": "Linux",
    "platform": "linux",
    "arch": "x64",
    "release": "6.17.0-1017-aws",
    "uptime": 2119.94,
    "loadavg": [
      6.92,
      5.81,
      3.52
    ],
    "totalmem": 8220839936,
    "freemem": 3768729600,
    "cpus": [
      {
        "model": "AMD EPYC 7571",
        "speed": 0,
        "times": {
          "user": 404110,
          "nice": 0,
          "sys": 206780,
          "idle": 1425940,
          "irq": 0
        }
      },
      {
        "model": "AMD EPYC 7571",
        "speed": 0,
        "times": {
          "user": 416850,
          "nice": 0,
          "sys": 203030,
          "idle": 1418740,
          "irq": 0
        }
      }
    ]
  },
  "process": {
    "nodeVersion": "v22.22.3",
    "pid": 1,
    "uptime": 74.175831587
  },
  "deploy": {
    "method": "docker",
    "platform": "helm-chart"
  },
  "fips": true,
  "readReceiptsEnabled": false,
  "readReceiptsDetailed": false,
  "enterpriseReady": true,
  "fileStoreType": "GridFS",
  "uploadsTotal": 0,
  "uploadsTotalSize": 0,
  "migration": {
    "_id": "control",
    "_updatedAt": "2026-08-03T12:10:13.492Z",
    "locked": false,
    "version": 335
  },
  "instanceCount": 0,
  "msEnabled": true,
  "oplogEnabled": false,
  "mongoVersion": "8.0.0",
  "mongoStorageEngine": "unknown",
  "apps": {
    "engineVersion": "1.65.1-rc.0",
    "totalInstalled": 0,
    "totalActive": 0,
    "totalFailed": 0,
    "totalPrivateApps": 0,
    "totalPrivateAppsEnabled": 0
  },
  "uniqueUsersOfYesterday": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueDevicesOfYesterday": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueUsersOfLastMonth": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueUsersOfLastWeek": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueOSOfYesterday": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueDevicesOfLastMonth": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueOSOfLastMonth": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueDevicesOfLastWeek": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "uniqueOSOfLastWeek": {
    "year": 2026,
    "month": 8,
    "day": 2,
    "data": []
  },
  "services": {
    "ldap": {
      "users": 0,
      "enabled": false,
      "loginFallback": false,
      "encryption": "plain",
      "mergeUsers": false,
      "syncRoles": null,
      "syncRolesAutoRemove": null,
      "syncData": null,
      "syncChannels": null,
      "syncAvatar": true,
      "groupFilter": false,
      "backgroundSync": {
        "enabled": null,
        "interval": null,
        "newUsers": null,
        "existingUsers": null
      },
      "ee": {
        "syncActiveState": null,
        "syncTeams": null,
        "syncRoles": null
      }
    },
    "saml": {
      "enabled": null,
      "users": 0,
      "signatureValidationType": null,
      "generateUsername": null,
      "updateSubscriptionsOnLogin": null,
      "syncRoles": null,
      "userDataCustomFieldMap": false
    },
    "cas": {
      "enabled": false,
      "users": 0,
      "allowUserCreation": true,
      "alwaysSyncUserData": true
    },
    "oauth": {
      "apple": {
        "enabled": false,
        "users": 0
      },
      "github": {
        "enabled": false,
        "users": 0
      },
      "gitlab": {
        "enabled": false,
        "users": 0
      },
      "google": {
        "enabled": false,
        "users": 0
      },
      "nextcloud": {
        "enabled": false,
        "users": 0
      },
      "custom": {}
    }
  },
  "importer": {
    "totalCSVImportedUsers": 0,
    "totalHipchatEnterpriseImportedUsers": 0,
    "totalSlackImportedUsers": 0,
    "totalSlackUsersImportedUsers": 0
  },
  "videoConf": {
    "videoConference": {
      "started": 0,
      "ended": 0
    },
    "direct": {
      "calling": 0,
      "started": 0,
      "ended": 0
    },
    "livechat": {
      "started": 0,
      "ended": 0
    },
    "settings": {
      "provider": "",
      "dms": null,
      "channels": null,
      "groups": null,
      "teams": null
    }
  },
  "contactVerification": {
    "totalContacts": 0,
    "totalUnknownContacts": 0,
    "totalMergedContacts": null,
    "totalConflicts": 0,
    "totalResolvedConflicts": null,
    "totalBlockedContacts": 0,
    "totalPartiallyBlockedContacts": 0,
    "totalFullyBlockedContacts": 0,
    "totalVerifiedContacts": 0,
    "avgChannelsPerContact": 0,
    "totalContactsWithoutChannels": 0,
    "totalImportedContacts": null,
    "totalUpsellViews": null,
    "totalUpsellClicks": null
  },
  "dashboardCount": 0,
  "messageAuditApply": 0,
  "messageAuditLoad": 0,
  "joinJitsiButton": 0,
  "slashCommandsJitsi": 0,
  "settings": {
    "accounts": {
      "account2fa": true
    },
    "cannedResponses": {
      "cannedResponsesEnabled": true
    },
    "e2ee": {
      "e2e": false,
      "e2eDefaultDirectRoom": false,
      "e2eDefaultPrivateRoom": false
    },
    "email": {
      "smtp": {
        "smtpHost": "",
        "smtpPort": "",
        "fromEmail": ""
      }
    },
    "fileUpload": {
      "fileUploadEnable": true
    },
    "general": {
      "apps": {
        "frameworkDevMode": null,
        "frameworkEnable": null
      },
      "nps": {
        "surveyEnabled": true
      },
      "update": {
        "updateChecker": true
      }
    },
    "liveStreamAndBroadcasting": {
      "liveStream": null,
      "broadcasting": null
    },
    "message": {
      "allowEditing": true,
      "allowDeleting": true,
      "allowUnrecognizedSlashCommand": false,
      "allowBadWordsFilter": false,
      "readReceiptEnabled": false,
      "readReceiptStoreUsers": false
    },
    "push": {
      "pushEnable": true
    },
    "search": {
      "defaultProvider": {
        "globalSearchEnabled": null
      }
    },
    "threads": {
      "threadsEnabled": true
    },
    "webRTC": {
      "webRTCEnableChannel": null,
      "webRTCEnablePrivate": null,
      "webRTCEnableDirect": null
    }
  },
  "totalBroadcastRooms": 0,
  "totalTriggeredEmails": 0,
  "pushQueue": 0,
  "integrations": {
    "totalIntegrations": 0,
    "totalIncoming": 0,
    "totalIncomingActive": 0,
    "totalOutgoing": 0,
    "totalOutgoingActive": 0,
    "totalWithScriptEnabled": 0
  },
  "enterprise": {
    "modules": [
      "auditing",
      "canned-responses",
      "ldap-enterprise",
      "livechat-enterprise",
      "voip-enterprise",
      "omnichannel-mobile-enterprise",
      "engagement-dashboard",
      "push-privacy",
      "scalability",
      "teams-mention",
      "saml-enterprise",
      "oauth-enterprise",
      "device-management",
      "federation",
      "videoconference-enterprise",
      "message-read-receipt",
      "outlook-calendar",
      "hide-watermark",
      "custom-roles",
      "accessibility-certification",
      "fips"
    ],
    "tags": [
      "Commercial"
    ],
    "seatRequests": 0,
    "livechatTags": 0,
    "cannedResponses": 0,
    "slas": 0,
    "omnichannelRoomsWithPriorities": 0,
    "omnichannelRoomsWithSlas": 0,
    "businessUnits": 0,
    "omnichannelPdfTranscriptSucceeded": 0,
    "livechatMonitors": 0
  },
  "teams": {
    "totalTeams": 0,
    "totalRoomsInsideTeams": 0,
    "totalDefaultRoomsInsideTeams": 0
  },
  "totalRoomsWithStarred": 0,
  "totalRoomsWithPinned": 0,
  "totalUserTOTP": 0,
  "totalUserEmail2fa": 0,
  "totalPinned": 0,
  "totalStarred": 0,
  "totalLinkInvitation": 0,
  "totalLinkInvitationUses": 0,
  "totalEmailInvitation": 0,
  "totalE2ERooms": 0,
  "logoChange": false,
  "showHomeButton": true,
  "totalEncryptedMessages": 0,
  "totalManuallyAddedUsers": 0,
  "totalSubscriptionRoles": 3,
  "totalUserRoles": 11,
  "totalCustomRoles": 0,
  "totalWebRTCCalls": null,
  "uncaughtExceptionsCount": 0,
  "push": 3,
  "pushSecured": false,
  "homeTitleChanged": false,
  "homeBodyChanged": false,
  "customCSSChanged": false,
  "onLogoutCustomScriptChanged": false,
  "loggedOutCustomScriptChanged": false,
  "loggedInCustomScriptChanged": false,
  "dailyPeakConnections": 0,
  "maxMonthlyPeakConnections": 0,
  "matrixFederation": {
    "enabled": false,
    "maximumSizeOfPublicRoomsUsers": false,
    "biggestRoom": null,
    "smallestRoom": null,
    "amountOfExternalUsers": 0,
    "amountOfFederatedRooms": 0,
    "externalConnectedServers": {
      "quantity": 0,
      "servers": []
    }
  },
  "createdAt": "2026-08-03T12:10:31.265Z",
  "_updatedAt": "2026-08-03T12:10:31.426Z",
  "statsToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3Jrc3BhY2VJZCI6IiIsInVuaXF1ZUlkIjoiMmQzYWQ0ZmItZDUxNS00ZjA5LThmMDItMGYxODZjOGNjOTI5IiwicmVjb3JkSWQiOiI2YTcwODUzN2M4ZmMzYzY1YjE4MDhiYWYiLCJ0aW1lc3RhbXAiOiIyMDI2LTA4LTAzVDEyOjEwOjMxLjQwNzk5NzEyOFoiLCJpbmZvIjp7InRvdGFsVXNlcnMiOjAsImFjdGl2ZVVzZXJzIjowLCJ0b3RhbENvbm5lY3RlZFVzZXJzIjowLCJvbW5pQ2hhbm5lbENvbnZlcnNhdGlvbnMiOjAsInRvdGFsUm9vbXMiOjAsInRvdGFsTWVzc2FnZXMiOjAsInVwbG9hZHNUb3RhbFNpemUiOjAsIm1pY3Jvc2VydmljZUVuYWJsZWQiOnRydWUsImZpbGVTdG9yZVR5cGUiOiJHcmlkRlMifX0.JnBb7z--brY2k00kIkC_Rp502P8wdKVcC2kAxEKK0OBFJlAgLM4ezZ5m_xG2w1wX3wCTNKnrjO3D5Mi-bzYNmNNBcJQbujP2uUGWMnr42UUAbyPY9VWKCf4L3H9cgzB9WjJX94KiVlwLjnbqle9TE0wAubP-NR1lzZn06GrnD9bAFSdz2E5lI4s6qozfUW5z8ZmSgXs5MBSbhBQczUbmQkQoj2XjKs5Mkqow0qLeBsCrc0F2m_92YeO1S6StRGvLIVyce-qvm0DLT8hXhpoJyRRgLz_3JyOzOE6hfxcgWI43YUZ4o4n7QruSYDhSFnAjuAlZjHasBCKPfs9ht9vRtQ",
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
  "error": "error-not-allowed",
  "errorType": "error-forbidden"
}
```

<h3 id="get-last-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-last-statistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|wizard|object|false|none|none|
|» organizationType|string|false|none|none|
|» industry|string|false|none|none|
|» size|string|false|none|none|
|» country|string|false|none|none|
|» language|string|false|none|none|
|» serverType|string|false|none|none|
|» registerServer|boolean|false|none|none|
|uniqueId|string|false|none|none|
|installedAt|string|false|none|none|
|deploymentFingerprintHash|string|false|none|none|
|deploymentFingerprintVerified|boolean|false|none|none|
|version|string|false|none|none|
|tag|string|false|none|none|
|branch|string|false|none|none|
|totalUsers|integer|false|none|none|
|activeUsers|integer|false|none|none|
|activeGuests|integer|false|none|none|
|nonActiveUsers|integer|false|none|none|
|appUsers|integer|false|none|none|
|onlineUsers|integer|false|none|none|
|awayUsers|integer|false|none|none|
|busyUsers|integer|false|none|none|
|totalConnectedUsers|integer|false|none|none|
|offlineUsers|integer|false|none|none|
|userLanguages|object|false|none|none|
|» none|integer|false|none|none|
|totalRooms|integer|false|none|none|
|totalChannels|integer|false|none|none|
|totalPrivateGroups|integer|false|none|none|
|totalDirect|integer|false|none|none|
|totalLivechat|integer|false|none|none|
|totalDiscussions|integer|false|none|none|
|totalThreads|integer|false|none|none|
|totalLivechatVisitors|integer|false|none|none|
|totalLivechatAgents|integer|false|none|none|
|totalLivechatManagers|integer|false|none|none|
|livechatEnabled|boolean|false|none|none|
|isDepartmentRemovalEnabled|boolean|false|none|none|
|omnichannelSources|[object]|false|none|none|
|totalLivechatRoomsWithDepartment|integer|false|none|none|
|departments|integer|false|none|none|
|totalTriggers|integer|false|none|none|
|archivedDepartments|integer|false|none|none|
|totalCustomFields|integer|false|none|none|
|totalLivechatPublicCustomFields|integer|false|none|none|
|livechatAutomaticForwardingUnansweredChats|boolean|false|none|none|
|routingAlgorithm|string|false|none|none|
|onHoldEnabled|string|false|none|none|
|lastChattedAgentPreferred|string|false|none|none|
|assignNewConversationsToContactManager|string|false|none|none|
|visitorAbandonment|string|false|none|none|
|emailInboxes|integer|false|none|none|
|BusinessHours|object|false|none|none|
|» total|integer|false|none|none|
|» strategy|string|false|none|none|
|chatsOnHold|integer|false|none|none|
|uniqueContactsOfLastMonth|object|false|none|none|
|» contactsCount|integer|false|none|none|
|» conversationsCount|integer|false|none|none|
|» sources|[object]|false|none|none|
|omnichannelContactsBySource|object|false|none|none|
|» contactsCount|integer|false|none|none|
|» conversationsCount|integer|false|none|none|
|» sources|[object]|false|none|none|
|totalChannelMessages|integer|false|none|none|
|uniqueContactsOfYesterday|object|false|none|none|
|» contactsCount|integer|false|none|none|
|» conversationsCount|integer|false|none|none|
|» sources|[object]|false|none|none|
|uniqueContactsOfLastWeek|object|false|none|none|
|» contactsCount|integer|false|none|none|
|» conversationsCount|integer|false|none|none|
|» sources|[object]|false|none|none|
|totalPrivateGroupMessages|integer|false|none|none|
|totalDiscussionsMessages|integer|false|none|none|
|totalDirectMessages|integer|false|none|none|
|totalLivechatMessages|integer|false|none|none|
|totalMessages|integer|false|none|none|
|lastLogin|string|false|none|none|
|lastMessageSentAt|string|false|none|none|
|lastSeenSubscription|string|false|none|none|
|os|object|false|none|none|
|» type|string|false|none|none|
|» platform|string|false|none|none|
|» arch|string|false|none|none|
|» release|string|false|none|none|
|» uptime|number|false|none|none|
|» loadavg|[number]|false|none|none|
|» totalmem|integer|false|none|none|
|» freemem|integer|false|none|none|
|» cpus|[object]|false|none|none|
|» » model|string|false|none|none|
|» » speed|integer|false|none|none|
|» » times|object|false|none|none|
|» » » user|integer|false|none|none|
|» » » nice|integer|false|none|none|
|» » » sys|integer|false|none|none|
|» » » idle|integer|false|none|none|
|» » » irq|integer|false|none|none|
|process|object|false|none|none|
|» nodeVersion|string|false|none|none|
|» pid|integer|false|none|none|
|» uptime|number|false|none|none|
|deploy|object|false|none|none|
|» method|string|false|none|none|
|» platform|string|false|none|none|
|fips|boolean|false|none|none|
|readReceiptsEnabled|boolean|false|none|none|
|readReceiptsDetailed|boolean|false|none|none|
|enterpriseReady|boolean|false|none|none|
|fileStoreType|string|false|none|none|
|uploadsTotal|integer|false|none|none|
|uploadsTotalSize|integer|false|none|none|
|migration|object|false|none|none|
|» _id|string|false|none|none|
|» _updatedAt|string|false|none|none|
|» locked|boolean|false|none|none|
|» version|integer|false|none|none|
|instanceCount|integer|false|none|none|
|msEnabled|boolean|false|none|none|
|oplogEnabled|boolean|false|none|none|
|mongoVersion|string|false|none|none|
|mongoStorageEngine|string|false|none|none|
|apps|object|false|none|none|
|» engineVersion|string|false|none|none|
|» totalInstalled|integer|false|none|none|
|» totalActive|integer|false|none|none|
|» totalFailed|integer|false|none|none|
|» totalPrivateApps|integer|false|none|none|
|» totalPrivateAppsEnabled|integer|false|none|none|
|uniqueUsersOfYesterday|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueDevicesOfYesterday|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueUsersOfLastMonth|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueUsersOfLastWeek|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueOSOfYesterday|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueDevicesOfLastMonth|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueOSOfLastMonth|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueDevicesOfLastWeek|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|uniqueOSOfLastWeek|object|false|none|none|
|» year|integer|false|none|none|
|» month|integer|false|none|none|
|» day|integer|false|none|none|
|» data|[object]|false|none|none|
|services|object|false|none|none|
|» ldap|object|false|none|none|
|» » users|integer|false|none|none|
|» » enabled|boolean|false|none|none|
|» » loginFallback|boolean|false|none|none|
|» » encryption|string|false|none|none|
|» » mergeUsers|boolean|false|none|none|
|» » syncRoles|string|false|none|none|
|» » syncRolesAutoRemove|string|false|none|none|
|» » syncData|string|false|none|none|
|» » syncChannels|string|false|none|none|
|» » syncAvatar|boolean|false|none|none|
|» » groupFilter|boolean|false|none|none|
|» » backgroundSync|object|false|none|none|
|» » » enabled|string|false|none|none|
|» » » interval|string|false|none|none|
|» » » newUsers|string|false|none|none|
|» » » existingUsers|string|false|none|none|
|» » ee|object|false|none|none|
|» » » syncActiveState|string|false|none|none|
|» » » syncTeams|string|false|none|none|
|» » » syncRoles|string|false|none|none|
|» saml|object|false|none|none|
|» » enabled|string|false|none|none|
|» » users|integer|false|none|none|
|» » signatureValidationType|string|false|none|none|
|» » generateUsername|string|false|none|none|
|» » updateSubscriptionsOnLogin|string|false|none|none|
|» » syncRoles|string|false|none|none|
|» » userDataCustomFieldMap|boolean|false|none|none|
|» cas|object|false|none|none|
|» » enabled|boolean|false|none|none|
|» » users|integer|false|none|none|
|» » allowUserCreation|boolean|false|none|none|
|» » alwaysSyncUserData|boolean|false|none|none|
|» oauth|object|false|none|none|
|» » apple|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » users|integer|false|none|none|
|» » github|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » users|integer|false|none|none|
|» » gitlab|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » users|integer|false|none|none|
|» » google|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » users|integer|false|none|none|
|» » nextcloud|object|false|none|none|
|» » » enabled|boolean|false|none|none|
|» » » users|integer|false|none|none|
|» » custom|object|false|none|none|
|importer|object|false|none|none|
|» totalCSVImportedUsers|integer|false|none|none|
|» totalHipchatEnterpriseImportedUsers|integer|false|none|none|
|» totalSlackImportedUsers|integer|false|none|none|
|» totalSlackUsersImportedUsers|integer|false|none|none|
|videoConf|object|false|none|none|
|» videoConference|object|false|none|none|
|» » started|integer|false|none|none|
|» » ended|integer|false|none|none|
|» direct|object|false|none|none|
|» » calling|integer|false|none|none|
|» » started|integer|false|none|none|
|» » ended|integer|false|none|none|
|» livechat|object|false|none|none|
|» » started|integer|false|none|none|
|» » ended|integer|false|none|none|
|» settings|object|false|none|none|
|» » provider|string|false|none|none|
|» » dms|string|false|none|none|
|» » channels|string|false|none|none|
|» » groups|string|false|none|none|
|» » teams|string|false|none|none|
|contactVerification|object|false|none|none|
|» totalContacts|integer|false|none|none|
|» totalUnknownContacts|integer|false|none|none|
|» totalMergedContacts|string|false|none|none|
|» totalConflicts|integer|false|none|none|
|» totalResolvedConflicts|string|false|none|none|
|» totalBlockedContacts|integer|false|none|none|
|» totalPartiallyBlockedContacts|integer|false|none|none|
|» totalFullyBlockedContacts|integer|false|none|none|
|» totalVerifiedContacts|integer|false|none|none|
|» avgChannelsPerContact|integer|false|none|none|
|» totalContactsWithoutChannels|integer|false|none|none|
|» totalImportedContacts|string|false|none|none|
|» totalUpsellViews|string|false|none|none|
|» totalUpsellClicks|string|false|none|none|
|dashboardCount|integer|false|none|none|
|messageAuditApply|integer|false|none|none|
|messageAuditLoad|integer|false|none|none|
|joinJitsiButton|integer|false|none|none|
|slashCommandsJitsi|integer|false|none|none|
|settings|object|false|none|none|
|» accounts|object|false|none|none|
|» » account2fa|boolean|false|none|none|
|» cannedResponses|object|false|none|none|
|» » cannedResponsesEnabled|boolean|false|none|none|
|» e2ee|object|false|none|none|
|» » e2e|boolean|false|none|none|
|» » e2eDefaultDirectRoom|boolean|false|none|none|
|» » e2eDefaultPrivateRoom|boolean|false|none|none|
|» email|object|false|none|none|
|» » smtp|object|false|none|none|
|» » » smtpHost|string|false|none|none|
|» » » smtpPort|string|false|none|none|
|» » » fromEmail|string|false|none|none|
|» fileUpload|object|false|none|none|
|» » fileUploadEnable|boolean|false|none|none|
|» general|object|false|none|none|
|» » apps|object|false|none|none|
|» » » frameworkDevMode|string|false|none|none|
|» » » frameworkEnable|string|false|none|none|
|» » nps|object|false|none|none|
|» » » surveyEnabled|boolean|false|none|none|
|» » update|object|false|none|none|
|» » » updateChecker|boolean|false|none|none|
|» liveStreamAndBroadcasting|object|false|none|none|
|» » liveStream|string|false|none|none|
|» » broadcasting|string|false|none|none|
|» message|object|false|none|none|
|» » allowEditing|boolean|false|none|none|
|» » allowDeleting|boolean|false|none|none|
|» » allowUnrecognizedSlashCommand|boolean|false|none|none|
|» » allowBadWordsFilter|boolean|false|none|none|
|» » readReceiptEnabled|boolean|false|none|none|
|» » readReceiptStoreUsers|boolean|false|none|none|
|» push|object|false|none|none|
|» » pushEnable|boolean|false|none|none|
|» search|object|false|none|none|
|» » defaultProvider|object|false|none|none|
|» » » globalSearchEnabled|string|false|none|none|
|» threads|object|false|none|none|
|» » threadsEnabled|boolean|false|none|none|
|» webRTC|object|false|none|none|
|» » webRTCEnableChannel|string|false|none|none|
|» » webRTCEnablePrivate|string|false|none|none|
|» » webRTCEnableDirect|string|false|none|none|
|totalBroadcastRooms|integer|false|none|none|
|totalTriggeredEmails|integer|false|none|none|
|pushQueue|integer|false|none|none|
|integrations|object|false|none|none|
|» totalIntegrations|integer|false|none|none|
|» totalIncoming|integer|false|none|none|
|» totalIncomingActive|integer|false|none|none|
|» totalOutgoing|integer|false|none|none|
|» totalOutgoingActive|integer|false|none|none|
|» totalWithScriptEnabled|integer|false|none|none|
|enterprise|object|false|none|none|
|» modules|[string]|false|none|none|
|» tags|[string]|false|none|none|
|» seatRequests|integer|false|none|none|
|» livechatTags|integer|false|none|none|
|» cannedResponses|integer|false|none|none|
|» slas|integer|false|none|none|
|» omnichannelRoomsWithPriorities|integer|false|none|none|
|» omnichannelRoomsWithSlas|integer|false|none|none|
|» businessUnits|integer|false|none|none|
|» omnichannelPdfTranscriptSucceeded|integer|false|none|none|
|» livechatMonitors|integer|false|none|none|
|teams|object|false|none|none|
|» totalTeams|integer|false|none|none|
|» totalRoomsInsideTeams|integer|false|none|none|
|» totalDefaultRoomsInsideTeams|integer|false|none|none|
|totalRoomsWithStarred|integer|false|none|none|
|totalRoomsWithPinned|integer|false|none|none|
|totalUserTOTP|integer|false|none|none|
|totalUserEmail2fa|integer|false|none|none|
|totalPinned|integer|false|none|none|
|totalStarred|integer|false|none|none|
|totalLinkInvitation|integer|false|none|none|
|totalLinkInvitationUses|integer|false|none|none|
|totalEmailInvitation|integer|false|none|none|
|totalE2ERooms|integer|false|none|none|
|logoChange|boolean|false|none|none|
|showHomeButton|boolean|false|none|none|
|totalEncryptedMessages|integer|false|none|none|
|totalManuallyAddedUsers|integer|false|none|none|
|totalSubscriptionRoles|integer|false|none|none|
|totalUserRoles|integer|false|none|none|
|totalCustomRoles|integer|false|none|none|
|totalWebRTCCalls|string|false|none|none|
|uncaughtExceptionsCount|integer|false|none|none|
|push|integer|false|none|none|
|pushSecured|boolean|false|none|none|
|homeTitleChanged|boolean|false|none|none|
|homeBodyChanged|boolean|false|none|none|
|customCSSChanged|boolean|false|none|none|
|onLogoutCustomScriptChanged|boolean|false|none|none|
|loggedOutCustomScriptChanged|boolean|false|none|none|
|loggedInCustomScriptChanged|boolean|false|none|none|
|dailyPeakConnections|integer|false|none|none|
|maxMonthlyPeakConnections|integer|false|none|none|
|matrixFederation|object|false|none|none|
|» enabled|boolean|false|none|none|
|» maximumSizeOfPublicRoomsUsers|boolean|false|none|none|
|» biggestRoom|string|false|none|none|
|» smallestRoom|string|false|none|none|
|» amountOfExternalUsers|integer|false|none|none|
|» amountOfFederatedRooms|integer|false|none|none|
|» externalConnectedServers|object|false|none|none|
|» » quantity|integer|false|none|none|
|» » servers|[object]|false|none|none|
|createdAt|string|false|none|none|
|_updatedAt|string|false|none|none|
|statsToken|string|false|none|none|
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

## Send Telemetry Events

<a id="opIdpost-api-v1-statistics.telemetry"></a>

> Code samples

```bash
curl https://apiexplorer.support.rocket.chat/api/v1/statistics.telemetry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -d '{
    "params": [
      {
        "eventName": "slashCommandsStats",
        "timestamp": 1759920000000,
        "command": "jitsi"
      }
    ]
  }'
```

`POST /api/v1/statistics.telemetry`

Send one or more telemetry events to the workspace. Each event increases a usage counter that is stored as a workspace setting.

The workspace processes the events in the order you send them. If an event has an unknown `eventName`, the request fails with `event not found`, but the events before it in the list are still processed.

### Changelog
| Version | Description |
| ------- | ----------- |
| 4.6.0   | Added       |

> Body parameter

```json
{
  "params": [
    {
      "eventName": "slashCommandsStats",
      "timestamp": 1759920000000,
      "command": "jitsi"
    }
  ]
}
```

<h3 id="send-telemetry-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|body|body|object|false|none|
|» params|body|[object]|true|The list of telemetry events to send. Each event is an object.|
|» » eventName|body|string|true|The event type. Either `slashCommandsStats` or `updateCounter`.|
|» » timestamp|body|number|false|The time the event happened, as a Unix timestamp in milliseconds.|
|» » command|body|string|false|The slash command that was run, without the leading `/`. Use with the `slashCommandsStats` event.<br>The `jitsi` command increases the `Jitsi_Start_SlashCommands_Count` setting by 1. Other commands return a success response but don't change any counter.|
|» » settingsId|body|string|false|The ID of the counter setting to increase by 1. Use with the `updateCounter` event.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » eventName|slashCommandsStats|
|» » eventName|updateCounter|

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
  "error": "must have required property 'params'",
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

<h3 id="send-telemetry-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="send-telemetry-events-responseschema">Response Schema</h3>

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

<h1 id="statistics-users-engagement">Users Engagement</h1>

## Get New Users

<a id="opIdget-api-v1-engagement-dashboard-users-new-users"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/users/new-users?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/users/new-users`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve the metrics of newly registered users during a specific period.

Permission required: `view-engagement-dashboard`

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-new-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "days": [
    {
      "day": "2023-02-09T00:00:00.000Z",
      "users": 1
    },
    {
      "day": "2023-02-06T00:00:00.000Z",
      "users": 6
    },
    {
      "day": "2023-02-01T00:00:00.000Z",
      "users": 1
    },
    {
      "day": "2023-01-24T00:00:00.000Z",
      "users": 1
    },
    {
      "day": "2023-01-17T00:00:00.000Z",
      "users": 1
    }
  ],
  "period": {
    "count": 27,
    "variation": 27
  },
  "yesterday": {
    "count": 0,
    "variation": 0
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-new-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-new-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|[object]|false|none|none|
|» day|string|false|none|none|
|» users|integer|false|none|none|
|period|object|false|none|none|
|» count|integer|false|none|none|
|» variation|integer|false|none|none|
|yesterday|object|false|none|none|
|» count|integer|false|none|none|
|» variation|integer|false|none|none|
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

## Get Active Users

<a id="opIdget-api-v1-engagement-dashboard-users-active-users"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/users/active-users?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f'
```

`GET /api/v1/engagement-dashboard/users/active-users`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve the metrics of active users in the workspace during a specific period.

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-active-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "month": [
    {
      "usersList": [
        "rYhzFRd2QZjNwAAXX"
      ],
      "users": 1,
      "day": 5,
      "month": 5,
      "year": 2023
    },
    {
      "usersList": [
        "rYhzFRd2QZjNwAAXX"
      ],
      "users": 1,
      "day": 4,
      "month": 5,
      "year": 2023
    },
    {
      "usersList": [
        "rYhzFRd2QZjNwAAXX"
      ],
      "users": 1,
      "day": 3,
      "month": 5,
      "year": 2023
    },
    {
      "usersList": [
        "rYhzFRd2QZjNwAAXX"
      ],
      "users": 1,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "usersList": [
        "rbAXPnMktTFbNpwtJ",
        "9iN96PXnDK7XAYESA"
      ],
      "users": 2,
      "day": 17,
      "month": 4,
      "year": 2023
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
}
```

> 401 Response

```json
{
  "success": false,
  "error": "You must be logged in to do this."
}
```

<h3 id="get-active-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|None|

<h3 id="get-active-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|[object]|false|none|none|
|» usersList|[string]|false|none|none|
|» users|integer|false|none|none|
|» day|integer|false|none|none|
|» month|integer|false|none|none|
|» year|integer|false|none|none|
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

## Get User By Time of the Day

<a id="opIdget-api-v1-engagement-dashboard-users-users-by-time-of-the-day-in-a-week"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week?start=2023-10-29T14%3A48%3A00.000Z&end=2023-11-05T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve users by hours at a particular time of the day in a week.

Permission required: `view-engagement-dashboard`  

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-user-by-time-of-the-day-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|
|end|query|string|true|The end date.|

> Example responses

> 200 Response

```json
{
  "week": [
    {
      "users": 1,
      "hour": 23,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 22,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 21,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 20,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 19,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 18,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 17,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 16,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 15,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 14,
      "day": 2,
      "month": 5,
      "year": 2023
    },
    {
      "users": 1,
      "hour": 1,
      "day": 1,
      "month": 5,
      "year": 2023
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-user-by-time-of-the-day-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-user-by-time-of-the-day-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|week|[object]|false|none|none|
|» users|integer|false|none|none|
|» hour|integer|false|none|none|
|» day|integer|false|none|none|
|» month|integer|false|none|none|
|» year|integer|false|none|none|
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

## Get Hourly Data When Chat is Busier

<a id="opIdget-api-v1-engagement-dashboard-users-chat-busier-hourly-data"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/users/chat-busier/hourly-data?start=2023-10-29T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/users/chat-busier/hourly-data`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieve hourly data when chat is busier.

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-hourly-data-when-chat-is-busier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|

> Example responses

> 200 Response

```json
{
  "hours": [
    {
      "users": 3,
      "hour": 22
    },
    {
      "users": 3,
      "hour": 20
    },
    {
      "users": 4,
      "hour": 18
    },
    {
      "users": 2,
      "hour": 16
    },
    {
      "users": 4,
      "hour": 14
    },
    {
      "users": 4,
      "hour": 12
    },
    {
      "users": 2,
      "hour": 10
    },
    {
      "users": 1,
      "hour": 8
    },
    {
      "users": 1,
      "hour": 6
    },
    {
      "users": 1,
      "hour": 4
    },
    {
      "users": 0,
      "hour": 2
    },
    {
      "users": 0,
      "hour": 0
    }
  ],
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-hourly-data-when-chat-is-busier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-hourly-data-when-chat-is-busier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|[object]|false|none|none|
|» users|integer|false|none|none|
|» hour|integer|false|none|none|
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

## Get Weekly Data When Chat is Busier

<a id="opIdget-api-v1-engagement-dashboard-users-chat-busier-weekly-data"></a>

> Code samples

```bash
curl 'https://apiexplorer.support.rocket.chat/api/v1/engagement-dashboard/users/chat-busier/weekly-data?start=2023-10-29T14%3A48%3A00.000Z' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f' \
  -H 'X-User-Id: rbAXPnMktTFbNpwtJ'
```

`GET /api/v1/engagement-dashboard/users/chat-busier/weekly-data`

<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>

Retrieves weekly data when chat is busier. 

Permission required: `view-engagement-dashboard` 

### Changelog
| Version      | Description | 
| ---------------- | ------------|
|3.1.0            | Added       |

<h3 id="get-weekly-data-when-chat-is-busier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Auth-Token|header|string|true|The token of the authenticated user.|
|X-User-Id|header|string|true|The user ID of the authenticated user.|
|start|query|string|true|The start date.|

> Example responses

> 200 Response

```json
{
  "days": [
    {
      "day": "2023-02-01T00:00:00.000Z",
      "users": 1
    },
    {
      "day": "2023-01-24T00:00:00.000Z",
      "users": 1
    },
    {
      "day": "2023-01-17T00:00:00.000Z",
      "users": 1
    }
  ],
  "period": {
    "count": 27,
    "variation": 27
  },
  "yesterday": {
    "count": 0,
    "variation": 0
  },
  "success": true
}
```

> 400 Response

```json
{
  "success": false,
  "error": "Match error: Missing key 'start'"
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

<h3 id="get-weekly-data-when-chat-is-busier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="get-weekly-data-when-chat-is-busier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|[object]|false|none|none|
|» users|integer|false|none|none|
|» day|integer|false|none|none|
|» month|integer|false|none|none|
|» year|integer|false|none|none|
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
