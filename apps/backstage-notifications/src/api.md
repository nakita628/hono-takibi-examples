<h1 id="notifications">notifications v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Backstage backend plugin that powers user notifications.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache-2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="notifications-default">Default</h1>

## ListNotificationsLegacy

<a id="opIdListNotificationsLegacy"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/ \
  -H 'Accept: application/json'
```

`GET /`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated alias for `GET /notifications`.

<h3 id="listnotificationslegacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|orderField|query|[OrderField](#schemaorderfield)|false|One or more "field,direction" pairs. Direction is "asc" or "desc". Pass multiple to express compound sorts.|
|topic|query|string|false|none|
|search|query|string|false|none|
|read|query|string|false|none|
|saved|query|string|false|none|
|createdAfter|query|string|false|ISO 8601 date-time string. Validated by the handler.|
|minimumSeverity|query|[NotificationSeverity](#schemanotificationseverity)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|read|true|
|read|false|
|saved|true|
|saved|false|
|minimumSeverity|critical|
|minimumSeverity|high|
|minimumSeverity|normal|
|minimumSeverity|low|

> Example responses

> 200 Response

```json
{
  "totalCount": 0,
  "notifications": [
    {
      "id": "string",
      "user": "string",
      "created": "1970-01-01T00:00:00Z",
      "saved": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z",
      "origin": "string",
      "payload": {
        "title": "string",
        "description": "string",
        "link": "string",
        "severity": "critical",
        "topic": "string",
        "scope": "string",
        "icon": "string",
        "metadata": {}
      }
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="listnotificationslegacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A page of notifications for the current user.|[ListNotificationsResponse](#schemalistnotificationsresponse)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## CreateNotificationsLegacy

<a id="opIdCreateNotificationsLegacy"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipients": {
      "type": "entity",
      "entityRef": "string",
      "excludeEntityRef": "string"
    },
    "payload": {
      "title": "string",
      "description": "string",
      "link": "string",
      "severity": "critical",
      "topic": "string",
      "scope": "string",
      "icon": "string",
      "metadata": {}
    }
  }'
```

`POST /`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated alias for `POST /notifications`.

> Body parameter

```json
{
  "recipients": {
    "type": "entity",
    "entityRef": "string",
    "excludeEntityRef": "string"
  },
  "payload": {
    "title": "string",
    "description": "string",
    "link": "string",
    "severity": "critical",
    "topic": "string",
    "scope": "string",
    "icon": "string",
    "metadata": {}
  }
}
```

<h3 id="createnotificationslegacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationSendOptions](#schemanotificationsendoptions)|true|none|
|» recipients|body|[NotificationRecipients](#schemanotificationrecipients)|true|none|
|» payload|body|[NotificationPayload](#schemanotificationpayload)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "user": "string",
    "created": "1970-01-01T00:00:00Z",
    "saved": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "origin": "string",
    "payload": {
      "title": "string",
      "description": "string",
      "link": "string",
      "severity": "critical",
      "topic": "string",
      "scope": "string",
      "icon": "string",
      "metadata": {}
    }
  }
]
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="createnotificationslegacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notifications that were created.|Inline|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="createnotificationslegacy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## ListNotifications

<a id="opIdListNotifications"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/notifications \
  -H 'Accept: application/json'
```

`GET /notifications`

List notifications for the current user.

<h3 id="listnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|orderField|query|[OrderField](#schemaorderfield)|false|One or more "field,direction" pairs. Direction is "asc" or "desc". Pass multiple to express compound sorts.|
|topic|query|string|false|none|
|search|query|string|false|none|
|read|query|string|false|none|
|saved|query|string|false|none|
|createdAfter|query|string|false|ISO 8601 date-time string. Validated by the handler.|
|minimumSeverity|query|[NotificationSeverity](#schemanotificationseverity)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|read|true|
|read|false|
|saved|true|
|saved|false|
|minimumSeverity|critical|
|minimumSeverity|high|
|minimumSeverity|normal|
|minimumSeverity|low|

> Example responses

> 200 Response

```json
{
  "totalCount": 0,
  "notifications": [
    {
      "id": "string",
      "user": "string",
      "created": "1970-01-01T00:00:00Z",
      "saved": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z",
      "origin": "string",
      "payload": {
        "title": "string",
        "description": "string",
        "link": "string",
        "severity": "critical",
        "topic": "string",
        "scope": "string",
        "icon": "string",
        "metadata": {}
      }
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="listnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A page of notifications for the current user.|[ListNotificationsResponse](#schemalistnotificationsresponse)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## CreateNotifications

<a id="opIdCreateNotifications"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "recipients": {
      "type": "entity",
      "entityRef": "string",
      "excludeEntityRef": "string"
    },
    "payload": {
      "title": "string",
      "description": "string",
      "link": "string",
      "severity": "critical",
      "topic": "string",
      "scope": "string",
      "icon": "string",
      "metadata": {}
    }
  }'
```

`POST /notifications`

Send a notification to one or more recipients (service credentials required).

> Body parameter

```json
{
  "recipients": {
    "type": "entity",
    "entityRef": "string",
    "excludeEntityRef": "string"
  },
  "payload": {
    "title": "string",
    "description": "string",
    "link": "string",
    "severity": "critical",
    "topic": "string",
    "scope": "string",
    "icon": "string",
    "metadata": {}
  }
}
```

<h3 id="createnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationSendOptions](#schemanotificationsendoptions)|true|none|
|» recipients|body|[NotificationRecipients](#schemanotificationrecipients)|true|none|
|» payload|body|[NotificationPayload](#schemanotificationpayload)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "user": "string",
    "created": "1970-01-01T00:00:00Z",
    "saved": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "origin": "string",
    "payload": {
      "title": "string",
      "description": "string",
      "link": "string",
      "severity": "critical",
      "topic": "string",
      "scope": "string",
      "icon": "string",
      "metadata": {}
    }
  }
]
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="createnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notifications that were created.|Inline|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="createnotifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## UpdateNotificationsLegacy

<a id="opIdUpdateNotificationsLegacy"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ids": [
      "string"
    ],
    "read": true,
    "saved": true
  }'
```

`POST /update`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated alias for `POST /notifications/update`.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "read": true,
  "saved": true
}
```

<h3 id="updatenotificationslegacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateNotificationsRequest](#schemaupdatenotificationsrequest)|true|none|
|» ids|body|[string]|true|none|
|» read|body|boolean|false|none|
|» saved|body|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "user": "string",
    "created": "1970-01-01T00:00:00Z",
    "saved": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "origin": "string",
    "payload": {
      "title": "string",
      "description": "string",
      "link": "string",
      "severity": "critical",
      "topic": "string",
      "scope": "string",
      "icon": "string",
      "metadata": {}
    }
  }
]
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="updatenotificationslegacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notifications that were updated.|Inline|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="updatenotificationslegacy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## UpdateNotifications

<a id="opIdUpdateNotifications"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/notifications/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ids": [
      "string"
    ],
    "read": true,
    "saved": true
  }'
```

`POST /notifications/update`

Mark notifications as read/unread or saved/unsaved.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "read": true,
  "saved": true
}
```

<h3 id="updatenotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateNotificationsRequest](#schemaupdatenotificationsrequest)|true|none|
|» ids|body|[string]|true|none|
|» read|body|boolean|false|none|
|» saved|body|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "user": "string",
    "created": "1970-01-01T00:00:00Z",
    "saved": "1970-01-01T00:00:00Z",
    "read": "1970-01-01T00:00:00Z",
    "updated": "1970-01-01T00:00:00Z",
    "origin": "string",
    "payload": {
      "title": "string",
      "description": "string",
      "link": "string",
      "severity": "critical",
      "topic": "string",
      "scope": "string",
      "icon": "string",
      "metadata": {}
    }
  }
]
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="updatenotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The notifications that were updated.|Inline|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="updatenotifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetStatus

<a id="opIdGetStatus"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/status \
  -H 'Accept: application/json'
```

`GET /status`

Get the unread/read counts for the current user.

> Example responses

> 200 Response

```json
{
  "unread": 0,
  "read": 0
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="getstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current user's notification status.|[NotificationStatus](#schemanotificationstatus)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetSettings

<a id="opIdGetSettings"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/settings \
  -H 'Accept: application/json'
```

`GET /settings`

Get the current user's notification settings, merged with defaults.

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "id": "string",
      "enabled": true,
      "origins": [
        {
          "id": "string",
          "enabled": true,
          "topics": [
            {
              "id": "string",
              "enabled": true
            }
          ]
        }
      ]
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="getsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Effective notification settings for the user.|[NotificationSettings](#schemanotificationsettings)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## UpdateSettings

<a id="opIdUpdateSettings"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channels": [
      {
        "id": "string",
        "enabled": true,
        "origins": [
          {
            "id": "string",
            "enabled": true,
            "topics": [
              {
                "id": "string",
                "enabled": true
              }
            ]
          }
        ]
      }
    ]
  }'
```

`POST /settings`

Update the current user's notification settings.

> Body parameter

```json
{
  "channels": [
    {
      "id": "string",
      "enabled": true,
      "origins": [
        {
          "id": "string",
          "enabled": true,
          "topics": [
            {
              "id": "string",
              "enabled": true
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="updatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NotificationSettings](#schemanotificationsettings)|true|none|
|» channels|body|[[ChannelSetting](#schemachannelsetting)]|true|none|

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "id": "string",
      "enabled": true,
      "origins": [
        {
          "id": "string",
          "enabled": true,
          "topics": [
            {
              "id": "string",
              "enabled": true
            }
          ]
        }
      ]
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="updatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Effective notification settings for the user.|[NotificationSettings](#schemanotificationsettings)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetTopics

<a id="opIdGetTopics"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/topics \
  -H 'Accept: application/json'
```

`GET /topics`

List notification topics that the user has received notifications on.

<h3 id="gettopics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|read|query|string|false|none|
|saved|query|string|false|none|
|createdAfter|query|string|false|ISO 8601 date-time string. Validated by the handler.|
|minimumSeverity|query|[NotificationSeverity](#schemanotificationseverity)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|read|true|
|read|false|
|saved|true|
|saved|false|
|minimumSeverity|critical|
|minimumSeverity|high|
|minimumSeverity|normal|
|minimumSeverity|low|

> Example responses

> 200 Response

```json
{
  "topics": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="gettopics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of topics.|[GetTopicsResponse](#schemagettopicsresponse)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetNotificationLegacy

<a id="opIdGetNotificationLegacy"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/string \
  -H 'Accept: application/json'
```

`GET /{id}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated alias for `GET /notifications/{id}`.

<h3 id="getnotificationlegacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "user": "string",
  "created": "1970-01-01T00:00:00Z",
  "saved": "1970-01-01T00:00:00Z",
  "read": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "origin": "string",
  "payload": {
    "title": "string",
    "description": "string",
    "link": "string",
    "severity": "critical",
    "topic": "string",
    "scope": "string",
    "icon": "string",
    "metadata": {}
  }
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="getnotificationlegacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested notification.|[Notification](#schemanotification)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetNotification

<a id="opIdGetNotification"></a>

> Code samples

```bash
curl http://localhost:7007/api/notifications/notifications/string \
  -H 'Accept: application/json'
```

`GET /notifications/{id}`

Get a single notification by id for the current user.

<h3 id="getnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "user": "string",
  "created": "1970-01-01T00:00:00Z",
  "saved": "1970-01-01T00:00:00Z",
  "read": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "origin": "string",
  "payload": {
    "title": "string",
    "description": "string",
    "link": "string",
    "severity": "critical",
    "topic": "string",
    "scope": "string",
    "icon": "string",
    "metadata": {}
  }
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="getnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested notification.|[Notification](#schemanotification)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

# Schemas

<h2 id="tocS_NotificationSeverity">NotificationSeverity</h2>
<!-- backwards compatibility -->
<a id="schemanotificationseverity"></a>
<a id="schema_NotificationSeverity"></a>
<a id="tocSnotificationseverity"></a>
<a id="tocsnotificationseverity"></a>

```json
"critical"
```

<h2 id="tocS_NotificationPayload">NotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schemanotificationpayload"></a>
<a id="schema_NotificationPayload"></a>
<a id="tocSnotificationpayload"></a>
<a id="tocsnotificationpayload"></a>

```json
{
  "title": "string",
  "description": "string",
  "link": "string",
  "severity": "critical",
  "topic": "string",
  "scope": "string",
  "icon": "string",
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Notification title|
|description|string|false|none|Optional longer description for the notification|
|link|string|false|none|Optional link where the notification is pointing to|
|severity|[NotificationSeverity](#schemanotificationseverity)|false|none|none|
|topic|string|false|none|Optional notification topic|
|scope|string|false|none|Notification scope, can be used to re-send same notifications in case the scope and origin matches.|
|icon|string|false|none|Optional notification icon|
|metadata|object|false|none|Optional additional customizable metadata.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|critical|
|severity|high|
|severity|normal|
|severity|low|

<h2 id="tocS_NotificationResponsePayload">NotificationResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemanotificationresponsepayload"></a>
<a id="schema_NotificationResponsePayload"></a>
<a id="tocSnotificationresponsepayload"></a>
<a id="tocsnotificationresponsepayload"></a>

```json
{
  "title": "string",
  "description": "string",
  "link": "string",
  "severity": "critical",
  "topic": "string",
  "scope": "string",
  "icon": "string",
  "metadata": {}
}
```

Response variant of NotificationPayload. Optional string fields may be returned as null when unset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|description|string \| null|false|none|none|
|link|string \| null|false|none|none|
|severity|[NotificationSeverity](#schemanotificationseverity)|false|none|none|
|topic|string \| null|false|none|none|
|scope|string \| null|false|none|none|
|icon|string \| null|false|none|none|
|metadata|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|critical|
|severity|high|
|severity|normal|
|severity|low|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": "string",
  "user": "string",
  "created": "1970-01-01T00:00:00Z",
  "saved": "1970-01-01T00:00:00Z",
  "read": "1970-01-01T00:00:00Z",
  "updated": "1970-01-01T00:00:00Z",
  "origin": "string",
  "payload": {
    "title": "string",
    "description": "string",
    "link": "string",
    "severity": "critical",
    "topic": "string",
    "scope": "string",
    "icon": "string",
    "metadata": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the notification.|
|user|string \| null|true|none|User entity reference, or null for broadcast notifications.|
|created|string(date-time)|true|none|none|
|saved|string \| null(date-time)|false|none|none|
|read|string \| null(date-time)|false|none|none|
|updated|string \| null(date-time)|false|none|none|
|origin|string|true|none|Origin of the notification (the sender's reference).|
|payload|[NotificationResponsePayload](#schemanotificationresponsepayload)|true|none|Response variant of NotificationPayload. Optional string fields may be returned as null when unset.|

<h2 id="tocS_NotificationStatus">NotificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemanotificationstatus"></a>
<a id="schema_NotificationStatus"></a>
<a id="tocSnotificationstatus"></a>
<a id="tocsnotificationstatus"></a>

```json
{
  "unread": 0,
  "read": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unread|integer|true|none|none|
|read|integer|true|none|none|

<h2 id="tocS_TopicSetting">TopicSetting</h2>
<!-- backwards compatibility -->
<a id="schematopicsetting"></a>
<a id="schema_TopicSetting"></a>
<a id="tocStopicsetting"></a>
<a id="tocstopicsetting"></a>

```json
{
  "id": "string",
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|enabled|boolean|true|none|none|

<h2 id="tocS_OriginSetting">OriginSetting</h2>
<!-- backwards compatibility -->
<a id="schemaoriginsetting"></a>
<a id="schema_OriginSetting"></a>
<a id="tocSoriginsetting"></a>
<a id="tocsoriginsetting"></a>

```json
{
  "id": "string",
  "enabled": true,
  "topics": [
    {
      "id": "string",
      "enabled": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|enabled|boolean|true|none|none|
|topics|[[TopicSetting](#schematopicsetting)]|false|none|none|

<h2 id="tocS_ChannelSetting">ChannelSetting</h2>
<!-- backwards compatibility -->
<a id="schemachannelsetting"></a>
<a id="schema_ChannelSetting"></a>
<a id="tocSchannelsetting"></a>
<a id="tocschannelsetting"></a>

```json
{
  "id": "string",
  "enabled": true,
  "origins": [
    {
      "id": "string",
      "enabled": true,
      "topics": [
        {
          "id": "string",
          "enabled": true
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|enabled|boolean|false|none|none|
|origins|[[OriginSetting](#schemaoriginsetting)]|true|none|none|

<h2 id="tocS_NotificationSettings">NotificationSettings</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsettings"></a>
<a id="schema_NotificationSettings"></a>
<a id="tocSnotificationsettings"></a>
<a id="tocsnotificationsettings"></a>

```json
{
  "channels": [
    {
      "id": "string",
      "enabled": true,
      "origins": [
        {
          "id": "string",
          "enabled": true,
          "topics": [
            {
              "id": "string",
              "enabled": true
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[ChannelSetting](#schemachannelsetting)]|true|none|none|

<h2 id="tocS_EntityRef">EntityRef</h2>
<!-- backwards compatibility -->
<a id="schemaentityref"></a>
<a id="schema_EntityRef"></a>
<a id="tocSentityref"></a>
<a id="tocsentityref"></a>

```json
"string"
```

A single entity ref, or a list of entity refs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_OrderField">OrderField</h2>
<!-- backwards compatibility -->
<a id="schemaorderfield"></a>
<a id="schema_OrderField"></a>
<a id="tocSorderfield"></a>
<a id="tocsorderfield"></a>

```json
"string"
```

One or more "field,direction" pairs, given as a single string or an array of strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_NotificationRecipients">NotificationRecipients</h2>
<!-- backwards compatibility -->
<a id="schemanotificationrecipients"></a>
<a id="schema_NotificationRecipients"></a>
<a id="tocSnotificationrecipients"></a>
<a id="tocsnotificationrecipients"></a>

```json
{
  "type": "entity",
  "entityRef": "string",
  "excludeEntityRef": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|entityRef|[EntityRef](#schemaentityref)|true|none|A single entity ref, or a list of entity refs.|
|excludeEntityRef|[EntityRef](#schemaentityref)|false|none|A single entity ref, or a list of entity refs.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|entity|
|type|broadcast|

<h2 id="tocS_NotificationSendOptions">NotificationSendOptions</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsendoptions"></a>
<a id="schema_NotificationSendOptions"></a>
<a id="tocSnotificationsendoptions"></a>
<a id="tocsnotificationsendoptions"></a>

```json
{
  "recipients": {
    "type": "entity",
    "entityRef": "string",
    "excludeEntityRef": "string"
  },
  "payload": {
    "title": "string",
    "description": "string",
    "link": "string",
    "severity": "critical",
    "topic": "string",
    "scope": "string",
    "icon": "string",
    "metadata": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipients|[NotificationRecipients](#schemanotificationrecipients)|true|none|none|
|payload|[NotificationPayload](#schemanotificationpayload)|true|none|none|

<h2 id="tocS_UpdateNotificationsRequest">UpdateNotificationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatenotificationsrequest"></a>
<a id="schema_UpdateNotificationsRequest"></a>
<a id="tocSupdatenotificationsrequest"></a>
<a id="tocsupdatenotificationsrequest"></a>

```json
{
  "ids": [
    "string"
  ],
  "read": true,
  "saved": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|none|
|read|boolean|false|none|none|
|saved|boolean|false|none|none|

<h2 id="tocS_ListNotificationsResponse">ListNotificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnotificationsresponse"></a>
<a id="schema_ListNotificationsResponse"></a>
<a id="tocSlistnotificationsresponse"></a>
<a id="tocslistnotificationsresponse"></a>

```json
{
  "totalCount": 0,
  "notifications": [
    {
      "id": "string",
      "user": "string",
      "created": "1970-01-01T00:00:00Z",
      "saved": "1970-01-01T00:00:00Z",
      "read": "1970-01-01T00:00:00Z",
      "updated": "1970-01-01T00:00:00Z",
      "origin": "string",
      "payload": {
        "title": "string",
        "description": "string",
        "link": "string",
        "severity": "critical",
        "topic": "string",
        "scope": "string",
        "icon": "string",
        "metadata": {}
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCount|integer|true|none|none|
|notifications|[[Notification](#schemanotification)]|true|none|none|

<h2 id="tocS_GetTopicsResponse">GetTopicsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettopicsresponse"></a>
<a id="schema_GetTopicsResponse"></a>
<a id="tocSgettopicsresponse"></a>
<a id="tocsgettopicsresponse"></a>

```json
{
  "topics": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topics|[string]|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|request|object|true|none|none|
|response|object|true|none|none|
