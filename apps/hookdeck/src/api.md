<h1 id="hookdeck-admin-rest-api">Hookdeck Admin REST API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.hookdeck.com/2024-09-01">https://api.hookdeck.com/2024-09-01</a> - Production API

<a href="https://hookdeck.com/terms">Terms of service</a>
Email: <a href="mailto:info@hookdeck.com">Hookdeck Support</a> 
Web: <a href="https://hookdeck.com/contact-us">Hookdeck Support</a> 

# Authentication

- HTTP Authentication, scheme: bearer

- HTTP Authentication, scheme: basic

<h1 id="hookdeck-admin-rest-api-issue-triggers">Issue Triggers</h1>

Issue Triggers lets you setup rules that trigger issues when certain conditions are met.

## Get issue triggers

<a id="opIdgetIssueTriggers"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /issue-triggers`

<h3 id="get-issue-triggers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|type|query|[IssueType](#schemaissuetype) \| [[IssueType](#schemaissuetype)]|false|none|
|disabled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "name": "string",
      "type": "delivery",
      "configs": {
        "strategy": "first_attempt",
        "connections": "string"
      },
      "channels": {
        "slack": {
          "channel_name": "string"
        },
        "opsgenie": {},
        "email": {}
      },
      "disabled_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-issue-triggers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of issue triggers|[IssueTriggerPaginatedResult](#schemaissuetriggerpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create or update an issue trigger

<a id="opIdupsertIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "delivery",
    "configs": {
      "strategy": "first_attempt",
      "connections": "string"
    },
    "channels": {
      "slack": {
        "channel_name": "string"
      },
      "opsgenie": {},
      "email": {}
    },
    "name": "string"
  }'
```

`PUT /issue-triggers`

> Body parameter

```json
{
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "name": "string"
}
```

<h3 id="create-or-update-an-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» type|body|[IssueType](#schemaissuetype)|true|Issue type|
|» configs|body|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs) \| [IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs) \| [IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|Configuration object for the specific issue type selected|
|» » *anyOf*|body|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs)|false|Configurations for a 'delivery' issue trigger|
|» » *anyOf*|body|[IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs)|false|Configurations for a 'Transformation' issue trigger|
|» » *anyOf*|body|[IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|Configurations for a 'Backpressure' issue trigger|
|» channels|body|[IssueTriggerChannels](#schemaissuetriggerchannels)|true|Notification channels object for the specific channel type|
|» name|body|string|true|Required unique name to use as reference when using the API|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|delivery|
|» type|transformation|
|» type|backpressure|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-or-update-an-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue trigger|[IssueTrigger](#schemaissuetrigger)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create an issue trigger

<a id="opIdcreateIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "delivery",
    "configs": {
      "strategy": "first_attempt",
      "connections": "string"
    },
    "channels": {
      "slack": {
        "channel_name": "string"
      },
      "opsgenie": {},
      "email": {}
    },
    "name": "string"
  }'
```

`POST /issue-triggers`

> Body parameter

```json
{
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "name": "string"
}
```

<h3 id="create-an-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» type|body|[IssueType](#schemaissuetype)|true|Issue type|
|» configs|body|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs) \| [IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs) \| [IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|Configuration object for the specific issue type selected|
|» » *anyOf*|body|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs)|false|Configurations for a 'delivery' issue trigger|
|» » *anyOf*|body|[IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs)|false|Configurations for a 'Transformation' issue trigger|
|» » *anyOf*|body|[IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|Configurations for a 'Backpressure' issue trigger|
|» channels|body|[IssueTriggerChannels](#schemaissuetriggerchannels)|true|Notification channels object for the specific channel type|
|» name|body|string \| null|false|Optional unique name to use as reference when using the API|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|delivery|
|» type|transformation|
|» type|backpressure|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-an-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue trigger|[IssueTrigger](#schemaissuetrigger)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a single issue trigger

<a id="opIdgetIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /issue-triggers/{id}`

<h3 id="get-a-single-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-single-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue trigger|[IssueTrigger](#schemaissuetrigger)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update an issue trigger

<a id="opIdupdateIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "configs": {
      "strategy": "first_attempt",
      "connections": "string"
    },
    "channels": {
      "slack": {
        "channel_name": "string"
      },
      "opsgenie": {},
      "email": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "name": "string"
  }'
```

`PUT /issue-triggers/{id}`

> Body parameter

```json
{
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "name": "string"
}
```

<h3 id="update-an-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» configs|body|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs) \| [IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs) \| [IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|Configuration object for the specific issue type selected|
|» » *anyOf*|body|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs)|false|Configurations for a 'delivery' issue trigger|
|» » *anyOf*|body|[IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs)|false|Configurations for a 'Transformation' issue trigger|
|» » *anyOf*|body|[IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|Configurations for a 'Backpressure' issue trigger|
|» channels|body|[IssueTriggerChannels](#schemaissuetriggerchannels)|false|Notification channels object for the specific channel type|
|» disabled_at|body|string(date-time) \| null|false|Date when the issue trigger was disabled|
|» name|body|string \| null|false|Optional unique name to use as reference when using the API|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-an-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue trigger|[IssueTrigger](#schemaissuetrigger)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete an issue trigger

<a id="opIddeleteIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /issue-triggers/{id}`

<h3 id="delete-an-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-an-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object with deleted issue trigger's id|[DeletedIssueTriggerResponse](#schemadeletedissuetriggerresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable an issue trigger

<a id="opIddisableIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers/string/disable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /issue-triggers/{id}/disable`

<h3 id="disable-an-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-an-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue trigger|[IssueTrigger](#schemaissuetrigger)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable an issue trigger

<a id="opIdenableIssueTrigger"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issue-triggers/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /issue-triggers/{id}/enable`

<h3 id="enable-an-issue-trigger-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-an-issue-trigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue trigger|[IssueTrigger](#schemaissuetrigger)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-attempts">Attempts</h1>

An attempt is any request that Hookdeck makes on behalf of an event.

## Get attempts

<a id="opIdgetAttempts"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/attempts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /attempts`

<h3 id="get-attempts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|query|string \| [string]|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "event_id": "string",
      "destination_id": "string",
      "response_status": 0,
      "attempt_number": 0,
      "trigger": "INITIAL",
      "error_code": "CANCELLED",
      "body": {},
      "requested_url": "string",
      "http_method": "GET",
      "bulk_retry_id": "string",
      "status": "FAILED",
      "successful_at": "1970-01-01T00:00:00Z",
      "delivered_at": "1970-01-01T00:00:00Z",
      "responded_at": "1970-01-01T00:00:00Z",
      "delivery_latency": 0,
      "response_latency": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-attempts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of attempts|[EventAttemptPaginatedResult](#schemaeventattemptpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a single attempt

<a id="opIdgetAttempt"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/attempts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /attempts/{id}`

<h3 id="get-a-single-attempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "event_id": "string",
  "destination_id": "string",
  "response_status": 0,
  "attempt_number": 0,
  "trigger": "INITIAL",
  "error_code": "CANCELLED",
  "body": {},
  "requested_url": "string",
  "http_method": "GET",
  "bulk_retry_id": "string",
  "status": "FAILED",
  "successful_at": "1970-01-01T00:00:00Z",
  "delivered_at": "1970-01-01T00:00:00Z",
  "responded_at": "1970-01-01T00:00:00Z",
  "delivery_latency": 0,
  "response_latency": 0,
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-single-attempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single attempt|[EventAttempt](#schemaeventattempt)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-bookmarks">Bookmarks</h1>

A bookmark lets you conveniently store and replay a specific request.

## Get bookmarks

<a id="opIdgetBookmarks"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks`

<h3 id="get-bookmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|name|query|string \| [string]|false|none|
|webhook_id|query|string \| [string]|false|none|
|event_data_id|query|string \| [string]|false|none|
|label|query|string \| [string]|false|none|
|last_used_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "event_data_id": "string",
      "label": "string",
      "alias": "string",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "last_used_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-bookmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of bookmarks|[BookmarkPaginatedResult](#schemabookmarkpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create a bookmark

<a id="opIdcreateBookmark"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event_data_id": "string",
    "webhook_id": "string",
    "label": "string",
    "name": "string"
  }'
```

`POST /bookmarks`

> Body parameter

```json
{
  "event_data_id": "string",
  "webhook_id": "string",
  "label": "string",
  "name": "string"
}
```

<h3 id="create-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» event_data_id|body|string|true|ID of the event data to bookmark|
|» webhook_id|body|string|true|ID of the associated connection|
|» label|body|string|true|Descriptive name of the bookmark|
|» name|body|string|false|A unique, human-friendly name for the bookmark|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "event_data_id": "string",
  "label": "string",
  "alias": "string",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "last_used_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single bookmark|[Bookmark](#schemabookmark)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a single bookmark

<a id="opIdgetBookmark"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/{id}`

<h3 id="get-a-single-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "event_data_id": "string",
  "label": "string",
  "alias": "string",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "last_used_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-single-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single bookmark|[Bookmark](#schemabookmark)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update a bookmark

<a id="opIdupdateBookmark"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event_data_id": "string",
    "webhook_id": "string",
    "label": "string",
    "name": "string"
  }'
```

`PUT /bookmarks/{id}`

> Body parameter

```json
{
  "event_data_id": "string",
  "webhook_id": "string",
  "label": "string",
  "name": "string"
}
```

<h3 id="update-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» event_data_id|body|string|false|ID of the event data to bookmark|
|» webhook_id|body|string|false|ID of the associated connection|
|» label|body|string|false|Descriptive name of the bookmark|
|» name|body|string|false|A unique, human-friendly name for the bookmark|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "event_data_id": "string",
  "label": "string",
  "alias": "string",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "last_used_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single bookmark|[Bookmark](#schemabookmark)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete a bookmark

<a id="opIddeleteBookmark"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /bookmarks/{id}`

<h3 id="delete-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object with deleted bookmark's id|[DeletedBookmarkResponse](#schemadeletedbookmarkresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a bookmark raw body data

<a id="opIdgetBookmarkRawBody"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks/string/raw_body \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/{id}/raw_body`

<h3 id="get-a-bookmark-raw-body-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "body": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-bookmark-raw-body-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A request raw body data|[RawBody](#schemarawbody)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Trigger a bookmark

<a id="opIdtriggerBookmark"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bookmarks/string/trigger \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target": "http"
  }'
```

`POST /bookmarks/{id}/trigger`

> Body parameter

```json
{
  "target": "http"
}
```

<h3 id="trigger-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» target|body|string|false|Bookmark target|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» target|http|
|» target|cli|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "team_id": "string",
    "webhook_id": "string",
    "source_id": "string",
    "destination_id": "string",
    "event_data_id": "string",
    "request_id": "string",
    "attempts": 0,
    "last_attempt_at": "1970-01-01T00:00:00Z",
    "next_attempt_at": "1970-01-01T00:00:00Z",
    "response_status": 0,
    "error_code": "CANCELLED",
    "status": "SCHEDULED",
    "successful_at": "1970-01-01T00:00:00Z",
    "cli_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    }
  }
]
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="trigger-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of created events|[EventArray](#schemaeventarray)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-destinations">Destinations</h1>

A destination is any endpoint to which your webhooks can be routed.

## Get destinations

<a id="opIdgetDestinations"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /destinations`

<h3 id="get-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|name|query|string \| [Operators](#schemaoperators) \| [string]|false|none|
|disabled|query|boolean|false|none|
|disabled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|url|query|string(URL) \| [string(URL)]|false|none|
|cli_path|query|string \| object \| [string]|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "team_id": "string",
      "path_forwarding_disabled": true,
      "url": "string",
      "cli_path": "string",
      "rate_limit": 0,
      "rate_limit_period": "second",
      "http_method": "GET",
      "auth_method": {
        "type": "HOOKDECK_SIGNATURE",
        "config": {}
      },
      "disabled_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of destinations|[DestinationPaginatedResult](#schemadestinationpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update or create a destination

<a id="opIdupsertDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "path_forwarding_disabled": true
  }'
```

`PUT /destinations`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "path_forwarding_disabled": true
}
```

<h3 id="update-or-create-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Name for the destination|
|» description|body|string \| null|false|Description for the destination|
|» url|body|string(URL) \| null|false|Endpoint of the destination|
|» cli_path|body|string \| null|false|Path for the CLI destination|
|» rate_limit|body|integer \| null|false|Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.|
|» rate_limit_period|body|string \| null|false|Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.|
|» http_method|body|[DestinationHTTPMethod](#schemadestinationhttpmethod)|false|HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.|
|» auth_method|body|[DestinationAuthMethodConfig](#schemadestinationauthmethodconfig)|false|Config for the destination's auth method|
|» path_forwarding_disabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rate_limit_period|second|
|» rate_limit_period|minute|
|» rate_limit_period|hour|
|» rate_limit_period|concurrent|
|» http_method|GET|
|» http_method|POST|
|» http_method|PUT|
|» http_method|PATCH|
|» http_method|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-or-create-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create a destination

<a id="opIdcreateDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "path_forwarding_disabled": true
  }'
```

`POST /destinations`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "path_forwarding_disabled": true
}
```

<h3 id="create-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Name for the destination|
|» description|body|string \| null|false|Description for the destination|
|» url|body|string(URL) \| null|false|Endpoint of the destination|
|» cli_path|body|string \| null|false|Path for the CLI destination|
|» rate_limit|body|integer \| null|false|Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.|
|» rate_limit_period|body|string \| null|false|Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.|
|» http_method|body|[DestinationHTTPMethod](#schemadestinationhttpmethod)|false|HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.|
|» auth_method|body|[DestinationAuthMethodConfig](#schemadestinationauthmethodconfig)|false|Config for the destination's auth method|
|» path_forwarding_disabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rate_limit_period|second|
|» rate_limit_period|minute|
|» rate_limit_period|hour|
|» rate_limit_period|concurrent|
|» http_method|GET|
|» http_method|POST|
|» http_method|PUT|
|» http_method|PATCH|
|» http_method|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a destination

<a id="opIdgetDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /destinations/{id}`

<h3 id="get-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 410 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|410|Gone|Gone|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update a destination

<a id="opIdupdateDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "path_forwarding_disabled": true
  }'
```

`PUT /destinations/{id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "path_forwarding_disabled": true
}
```

<h3 id="update-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|false|Name for the destination|
|» description|body|string \| null|false|Description for the destination|
|» url|body|string(URL) \| null|false|Endpoint of the destination|
|» cli_path|body|string \| null|false|Path for the CLI destination|
|» rate_limit|body|integer \| null|false|Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.|
|» rate_limit_period|body|string \| null|false|Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.|
|» http_method|body|[DestinationHTTPMethod](#schemadestinationhttpmethod)|false|HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.|
|» auth_method|body|[DestinationAuthMethodConfig](#schemadestinationauthmethodconfig)|false|Config for the destination's auth method|
|» path_forwarding_disabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rate_limit_period|second|
|» rate_limit_period|minute|
|» rate_limit_period|hour|
|» rate_limit_period|concurrent|
|» http_method|GET|
|» http_method|POST|
|» http_method|PUT|
|» http_method|PATCH|
|» http_method|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete a destination

<a id="opIddeleteDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /destinations/{id}`

<h3 id="delete-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|Inline|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="delete-a-destination-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the destination|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable a destination

<a id="opIddisableDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string/disable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /destinations/{id}/disable`

<h3 id="disable-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable a destination

<a id="opIddisableDestination_archive"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string/archive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /destinations/{id}/archive`

<h3 id="disable-a-destination-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-a-destination-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable a destination

<a id="opIdenableDestination"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /destinations/{id}/enable`

<h3 id="enable-a-destination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-a-destination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable a destination

<a id="opIdenableDestination_unarchive"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/destinations/string/unarchive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /destinations/{id}/unarchive`

<h3 id="enable-a-destination-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-a-destination-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single destination|[Destination](#schemadestination)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-bulk-retry-events">Bulk retry events</h1>

## Get events bulk retries

<a id="opIdgetEventBulkRetries"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/events/retry \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/events/retry`

<h3 id="get-events-bulk-retries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cancelled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|completed_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|created_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|id|query|string \| [string]|false|none|
|query|query|object|false|none|
|query_partial_match|query|boolean|false|none|
|in_progress|query|boolean|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "query": {
        "property1": null,
        "property2": null
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "cancelled_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "estimated_batch": 0,
      "estimated_count": 0,
      "processed_batch": 0,
      "completed_count": 0,
      "in_progress": true,
      "progress": 0,
      "failed_count": 0,
      "number": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-events-bulk-retries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of events bulk retries|[BatchOperationPaginatedResult](#schemabatchoperationpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create an events bulk retry

<a id="opIdcreateEventBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/events/retry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": {
      "id": "string",
      "status": "SCHEDULED",
      "webhook_id": "string",
      "destination_id": "string",
      "source_id": "string",
      "attempts": 0,
      "response_status": 200,
      "successful_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "error_code": "CANCELLED",
      "cli_id": "string",
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "search_term": "string",
      "headers": "string",
      "body": "string",
      "parsed_query": "string",
      "path": "string",
      "cli_user_id": "string",
      "issue_id": "string",
      "event_data_id": "string",
      "bulk_retry_id": "string"
    }
  }'
```

`POST /bulk/events/retry`

> Body parameter

```json
{
  "query": {
    "id": "string",
    "status": "SCHEDULED",
    "webhook_id": "string",
    "destination_id": "string",
    "source_id": "string",
    "attempts": 0,
    "response_status": 200,
    "successful_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "error_code": "CANCELLED",
    "cli_id": "string",
    "last_attempt_at": "1970-01-01T00:00:00Z",
    "search_term": "string",
    "headers": "string",
    "body": "string",
    "parsed_query": "string",
    "path": "string",
    "cli_user_id": "string",
    "issue_id": "string",
    "event_data_id": "string",
    "bulk_retry_id": "string"
  }
}
```

<h3 id="create-an-events-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|object|false|Filter properties for the events to be included in the bulk retry|
|» » id|body|string \| [string]|false|Filter by event IDs|
|» » » *anyOf*|body|string|false|Event ID|
|» » » *anyOf*|body|[string]|false|none|
|» » status|body|[EventStatus](#schemaeventstatus) \| [[EventStatus](#schemaeventstatus)]|false|Lifecyle status of the event|
|» » » *anyOf*|body|[EventStatus](#schemaeventstatus)|false|none|
|» » » *anyOf*|body|[[EventStatus](#schemaeventstatus)]|false|none|
|» » webhook_id|body|string \| [string]|false|Filter by webhook connection IDs|
|» » » *anyOf*|body|string|false|Webhook ID|
|» » » *anyOf*|body|[string]|false|none|
|» » destination_id|body|string \| [string]|false|Filter by destination IDs|
|» » » *anyOf*|body|string|false|Destination ID|
|» » » *anyOf*|body|[string]|false|none|
|» » source_id|body|string \| [string]|false|Filter by source IDs|
|» » » *anyOf*|body|string|false|Source ID|
|» » » *anyOf*|body|[string]|false|none|
|» » attempts|body|integer \| [Operators](#schemaoperators)|false|Filter by number of attempts|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » response_status|body|integer \| [Operators](#schemaoperators) \| [integer] \| null|false|Filter by HTTP response status code|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » » *anyOf*|body|[integer]|false|none|
|» » successful_at|body|string(date-time) \| [Operators](#schemaoperators) \| null|false|Filter by `successful_at` date using a date operator|
|» » » *anyOf*|body|string(date-time)|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » created_at|body|string(date-time) \| [Operators](#schemaoperators)|false|Filter by `created_at` date using a date operator|
|» » » *anyOf*|body|string(date-time)|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » error_code|body|[AttemptErrorCodes](#schemaattempterrorcodes) \| [[AttemptErrorCodes](#schemaattempterrorcodes)]|false|Filter by error code code|
|» » » *anyOf*|body|[AttemptErrorCodes](#schemaattempterrorcodes)|false|Error code of the delivery attempt|
|» » » *anyOf*|body|[[AttemptErrorCodes](#schemaattempterrorcodes)]|false|none|
|» » cli_id|body|string \| object \| [string] \| null|false|Filter by CLI IDs. `?[any]=true` operator for any CLI.|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » » any|body|boolean|false|none|
|» » » all|body|boolean|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » last_attempt_at|body|string(date-time) \| [Operators](#schemaoperators) \| null|false|Filter by `last_attempt_at` date using a date operator|
|» » » *anyOf*|body|string(date-time)|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » search_term|body|string|false|URL Encoded string of the value to match partially to the body, headers, parsed_query or path|
|» » headers|body|string \| object|false|URL Encoded string of the JSON to match to the data headers|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » body|body|string \| object|false|URL Encoded string of the JSON to match to the data body|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » parsed_query|body|string \| object|false|URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » path|body|string|false|URL Encoded string of the value to match partially to the path|
|» » cli_user_id|body|string \| [string] \| null|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » issue_id|body|string \| [string]|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » event_data_id|body|string \| [string]|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » bulk_retry_id|body|string \| [string]|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » *anyOf*|SCHEDULED|
|» » » *anyOf*|QUEUED|
|» » » *anyOf*|HOLD|
|» » » *anyOf*|SUCCESSFUL|
|» » » *anyOf*|FAILED|
|» » » *anyOf*|SCHEDULED|
|» » » *anyOf*|QUEUED|
|» » » *anyOf*|HOLD|
|» » » *anyOf*|SUCCESSFUL|
|» » » *anyOf*|FAILED|
|» » » *anyOf*|CANCELLED|
|» » » *anyOf*|TIMEOUT|
|» » » *anyOf*|NOT_FOUND|
|» » » *anyOf*|CONNECTION_REFUSED|
|» » » *anyOf*|CONNECTION_RESET|
|» » » *anyOf*|MISSING_URL|
|» » » *anyOf*|CLI|
|» » » *anyOf*|CLI_UNAVAILABLE|
|» » » *anyOf*|SELF_SIGNED_CERT|
|» » » *anyOf*|ERR_TLS_CERT_ALTNAME_INVALID|
|» » » *anyOf*|ERR_SSL_WRONG_VERSION_NUMBER|
|» » » *anyOf*|SSL_ERROR_CA_UNKNOWN|
|» » » *anyOf*|TTL_EXPIRED|
|» » » *anyOf*|DATA_ARCHIVED|
|» » » *anyOf*|SSL_CERT_EXPIRED|
|» » » *anyOf*|BULK_RETRY_CANCELLED|
|» » » *anyOf*|DNS_LOOKUP_FAILED|
|» » » *anyOf*|HOST_UNREACHABLE|
|» » » *anyOf*|PROTOCOL_ERROR|
|» » » *anyOf*|SOCKET_CLOSED|
|» » » *anyOf*|OAUTH2_HANDSHAKE_FAILED|
|» » » *anyOf*|UNKNOWN|
|» » » *anyOf*|CANCELLED|
|» » » *anyOf*|TIMEOUT|
|» » » *anyOf*|NOT_FOUND|
|» » » *anyOf*|CONNECTION_REFUSED|
|» » » *anyOf*|CONNECTION_RESET|
|» » » *anyOf*|MISSING_URL|
|» » » *anyOf*|CLI|
|» » » *anyOf*|CLI_UNAVAILABLE|
|» » » *anyOf*|SELF_SIGNED_CERT|
|» » » *anyOf*|ERR_TLS_CERT_ALTNAME_INVALID|
|» » » *anyOf*|ERR_SSL_WRONG_VERSION_NUMBER|
|» » » *anyOf*|SSL_ERROR_CA_UNKNOWN|
|» » » *anyOf*|TTL_EXPIRED|
|» » » *anyOf*|DATA_ARCHIVED|
|» » » *anyOf*|SSL_CERT_EXPIRED|
|» » » *anyOf*|BULK_RETRY_CANCELLED|
|» » » *anyOf*|DNS_LOOKUP_FAILED|
|» » » *anyOf*|HOST_UNREACHABLE|
|» » » *anyOf*|PROTOCOL_ERROR|
|» » » *anyOf*|SOCKET_CLOSED|
|» » » *anyOf*|OAUTH2_HANDSHAKE_FAILED|
|» » » *anyOf*|UNKNOWN|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-an-events-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single events bulk retry|[BatchOperation](#schemabatchoperation)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Generate an events bulk retry plan

<a id="opIdgenerateEventBulkRetryPlan"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/events/retry/plan \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/events/retry/plan`

<h3 id="generate-an-events-bulk-retry-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "estimated_batch": 0,
  "estimated_count": 0,
  "progress": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="generate-an-events-bulk-retry-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Events bulk retry plan|Inline|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="generate-an-events-bulk-retry-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimated_batch|integer \| null|false|none|Number of batches required to complete the bulk retry|
|estimated_count|integer \| null|false|none|Number of estimated events to be retried|
|progress|number(float) \| null|false|none|Progression of the batch operations, values 0 - 1|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get an events bulk retry

<a id="opIdgetEventBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/events/retry/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/events/retry/{id}`

<h3 id="get-an-events-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-an-events-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single events bulk retry|[BatchOperation](#schemabatchoperation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Cancel an events bulk retry

<a id="opIdcancelEventBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/events/retry/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /bulk/events/retry/{id}/cancel`

<h3 id="cancel-an-events-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="cancel-an-events-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single events bulk retry|[BatchOperation](#schemabatchoperation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-events">Events</h1>

An event is any request that Hookdeck receives from a source.

## Get events

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events`

<h3 id="get-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|status|query|[EventStatus](#schemaeventstatus) \| [[EventStatus](#schemaeventstatus)]|false|none|
|webhook_id|query|string \| [string]|false|none|
|destination_id|query|string \| [string]|false|none|
|source_id|query|string \| [string]|false|none|
|attempts|query|integer \| [Operators](#schemaoperators)|false|none|
|response_status|query|integer \| [Operators](#schemaoperators) \| [integer] \| null|false|none|
|successful_at|query|string(date-time) \| [Operators](#schemaoperators) \| null|false|none|
|created_at|query|string(date-time) \| [Operators](#schemaoperators)|false|none|
|error_code|query|[AttemptErrorCodes](#schemaattempterrorcodes) \| [[AttemptErrorCodes](#schemaattempterrorcodes)]|false|none|
|cli_id|query|string \| object \| [string] \| null|false|none|
|last_attempt_at|query|string(date-time) \| [Operators](#schemaoperators) \| null|false|none|
|search_term|query|string|false|none|
|headers|query|string \| object|false|none|
|body|query|string \| object|false|none|
|parsed_query|query|string \| object|false|none|
|path|query|string|false|none|
|cli_user_id|query|string \| [string] \| null|false|none|
|issue_id|query|string \| [string]|false|none|
|event_data_id|query|string \| [string]|false|none|
|bulk_retry_id|query|string \| [string]|false|none|
|include|query|string|false|none|
|order_by|query|string|false|none|
|dir|query|string|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|data|
|order_by|last_attempt_at|
|order_by|created_at|
|dir|asc|
|dir|desc|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of events|[EventPaginatedResult](#schemaeventpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get an event

<a id="opIdgetEvent"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{id}`

<h3 id="get-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "source_id": "string",
  "destination_id": "string",
  "event_data_id": "string",
  "request_id": "string",
  "attempts": 0,
  "last_attempt_at": "1970-01-01T00:00:00Z",
  "next_attempt_at": "1970-01-01T00:00:00Z",
  "response_status": 0,
  "error_code": "CANCELLED",
  "status": "SCHEDULED",
  "successful_at": "1970-01-01T00:00:00Z",
  "cli_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single event|[Event](#schemaevent)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a event raw body data

<a id="opIdgetEventRawBody"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/events/string/raw_body \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{id}/raw_body`

<h3 id="get-a-event-raw-body-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "body": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-event-raw-body-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A request raw body data|[RawBody](#schemarawbody)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Retry an event

<a id="opIdretryEvent"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/events/string/retry \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /events/{id}/retry`

<h3 id="retry-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "source_id": "string",
  "destination_id": "string",
  "event_data_id": "string",
  "request_id": "string",
  "attempts": 0,
  "last_attempt_at": "1970-01-01T00:00:00Z",
  "next_attempt_at": "1970-01-01T00:00:00Z",
  "response_status": 0,
  "error_code": "CANCELLED",
  "status": "SCHEDULED",
  "successful_at": "1970-01-01T00:00:00Z",
  "cli_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="retry-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retried event with event attempt|[RetriedEvent](#schemaretriedevent)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Mute an event

<a id="opIdmuteEvent"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/events/string/mute \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /events/{id}/mute`

<h3 id="mute-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "source_id": "string",
  "destination_id": "string",
  "event_data_id": "string",
  "request_id": "string",
  "attempts": 0,
  "last_attempt_at": "1970-01-01T00:00:00Z",
  "next_attempt_at": "1970-01-01T00:00:00Z",
  "response_status": 0,
  "error_code": "CANCELLED",
  "status": "SCHEDULED",
  "successful_at": "1970-01-01T00:00:00Z",
  "cli_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="mute-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single event|[Event](#schemaevent)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-bulk-retry-ignored-events">Bulk retry ignored events</h1>

## Get ignored events bulk retries

<a id="opIdgetIgnoredEventBulkRetries"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/ignored-events/retry \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/ignored-events/retry`

<h3 id="get-ignored-events-bulk-retries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cancelled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|completed_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|created_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|id|query|string \| [string]|false|none|
|query|query|object|false|none|
|query_partial_match|query|boolean|false|none|
|in_progress|query|boolean|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "query": {
        "property1": null,
        "property2": null
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "cancelled_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "estimated_batch": 0,
      "estimated_count": 0,
      "processed_batch": 0,
      "completed_count": 0,
      "in_progress": true,
      "progress": 0,
      "failed_count": 0,
      "number": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-ignored-events-bulk-retries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of ignored events bulk retries|[BatchOperationPaginatedResult](#schemabatchoperationpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create an ignored events bulk retry

<a id="opIdcreateIgnoredEventBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/ignored-events/retry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": {
      "cause": "string",
      "webhook_id": "string",
      "transformation_id": "string"
    }
  }'
```

`POST /bulk/ignored-events/retry`

> Body parameter

```json
{
  "query": {
    "cause": "string",
    "webhook_id": "string",
    "transformation_id": "string"
  }
}
```

<h3 id="create-an-ignored-events-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|object|false|Filter by the bulk retry ignored event query object|
|» » cause|body|string \| [string]|false|The cause of the ignored event|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » webhook_id|body|string \| [string]|false|Connection ID of the ignored event|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|
|» » transformation_id|body|string|false|The associated transformation ID (only applicable to the cause `TRANSFORMATION_FAILED`)|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-an-ignored-events-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single ignored events bulk retry|[BatchOperation](#schemabatchoperation)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Generate an ignored events bulk retry plan

<a id="opIdgenerateIgnoredEventBulkRetryPlan"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/ignored-events/retry/plan \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/ignored-events/retry/plan`

<h3 id="generate-an-ignored-events-bulk-retry-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "estimated_batch": 0,
  "estimated_count": 0,
  "progress": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="generate-an-ignored-events-bulk-retry-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ignored events bulk retry plan|Inline|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="generate-an-ignored-events-bulk-retry-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimated_batch|integer \| null|false|none|Number of batches required to complete the bulk retry|
|estimated_count|integer \| null|false|none|Number of estimated events to be retried|
|progress|number(float) \| null|false|none|Progression of the batch operations, values 0 - 1|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get an ignored events bulk retry

<a id="opIdgetIgnoredEventBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/ignored-events/retry/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/ignored-events/retry/{id}`

<h3 id="get-an-ignored-events-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-an-ignored-events-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single ignored events bulk retry|[BatchOperation](#schemabatchoperation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Cancel an ignored events bulk retry

<a id="opIdcancelIgnoredEventBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/ignored-events/retry/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /bulk/ignored-events/retry/{id}/cancel`

<h3 id="cancel-an-ignored-events-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="cancel-an-ignored-events-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single ignored events bulk retry|[BatchOperation](#schemabatchoperation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-integrations">Integrations</h1>

An integration configures platform-specific behaviors, such as signature verification.

## Get integrations

<a id="opIdgetIntegrations"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations`

<h3 id="get-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label|query|string|false|none|
|provider|query|[IntegrationProvider](#schemaintegrationprovider)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|provider|HMAC|
|provider|BASIC_AUTH|
|provider|API_KEY|
|provider|BRIDGE|
|provider|CLOUDSIGNAL|
|provider|COURIER|
|provider|FRONTAPP|
|provider|TWITTER|
|provider|STRIPE|
|provider|RECHARGE|
|provider|TWILIO|
|provider|GITHUB|
|provider|SHOPIFY|
|provider|POSTMARK|
|provider|TYPEFORM|
|provider|XERO|
|provider|SVIX|
|provider|ZOOM|
|provider|AKENEO|
|provider|ADYEN|
|provider|GITLAB|
|provider|PROPERTY-FINDER|
|provider|WOOCOMMERCE|
|provider|OURA|
|provider|COMMERCELAYER|
|provider|HUBSPOT|
|provider|MAILGUN|
|provider|PERSONA|
|provider|PIPEDRIVE|
|provider|SENDGRID|
|provider|WORKOS|
|provider|SYNCTERA|
|provider|AWS_SNS|
|provider|THREE_D_EYE|
|provider|TWITCH|
|provider|ENODE|
|provider|FAVRO|
|provider|LINEAR|
|provider|SHOPLINE|
|provider|WIX|
|provider|NMI|
|provider|ORB|
|provider|PYLON|
|provider|REPAY|
|provider|SQUARE|
|provider|SOLIDGATE|
|provider|TRELLO|
|provider|SANITY|
|provider|EBAY|
|provider|TELNYX|
|provider|DISCORD|
|provider|TOKENIO|
|provider|FISERV|
|provider|BONDSMITH|
|provider|VERCEL_LOG_DRAINS|
|provider|VERCEL|
|provider|TEBEX|
|provider|SLACK|
|provider|RAZORPAY|
|provider|MAILCHIMP|
|provider|PADDLE|
|provider|PAYPAL|
|provider|TREEZOR|
|provider|PRAXIS|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "label": "string",
      "provider": "HMAC",
      "features": [
        "VERIFICATION"
      ],
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      },
      "sources": [
        "string"
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of integrations|[IntegrationPaginatedResult](#schemaintegrationpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create an integration

<a id="opIdcreateIntegration"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "string",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    },
    "provider": "HMAC",
    "features": [
      "VERIFICATION"
    ]
  }'
```

`POST /integrations`

> Body parameter

```json
{
  "label": "string",
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  },
  "provider": "HMAC",
  "features": [
    "VERIFICATION"
  ]
}
```

<h3 id="create-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» label|body|string|false|Label of the integration|
|» configs|body|[HMACIntegrationConfigs](#schemahmacintegrationconfigs) \| [APIKeyIntegrationConfigs](#schemaapikeyintegrationconfigs) \| [HandledAPIKeyIntegrationConfigs](#schemahandledapikeyintegrationconfigs) \| [HandledHMACConfigs](#schemahandledhmacconfigs) \| [BasicAuthIntegrationConfigs](#schemabasicauthintegrationconfigs) \| [ShopifyIntegrationConfigs](#schemashopifyintegrationconfigs) \| [VercelLogDrainsIntegrationConfigs](#schemavercellogdrainsintegrationconfigs) \| object|false|Decrypted Key/Value object of the associated configuration for that provider|
|» » *anyOf*|body|[HMACIntegrationConfigs](#schemahmacintegrationconfigs)|false|none|
|» » *anyOf*|body|[APIKeyIntegrationConfigs](#schemaapikeyintegrationconfigs)|false|none|
|» » *anyOf*|body|[HandledAPIKeyIntegrationConfigs](#schemahandledapikeyintegrationconfigs)|false|none|
|» » *anyOf*|body|[HandledHMACConfigs](#schemahandledhmacconfigs)|false|none|
|» » *anyOf*|body|[BasicAuthIntegrationConfigs](#schemabasicauthintegrationconfigs)|false|none|
|» » *anyOf*|body|[ShopifyIntegrationConfigs](#schemashopifyintegrationconfigs)|false|none|
|» » *anyOf*|body|[VercelLogDrainsIntegrationConfigs](#schemavercellogdrainsintegrationconfigs)|false|none|
|» » *anyOf*|body|object|false|none|
|» provider|body|[IntegrationProvider](#schemaintegrationprovider)|false|none|
|» features|body|[[IntegrationFeature](#schemaintegrationfeature)]|false|List of features to enable (see features list above)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|HMAC|
|» provider|BASIC_AUTH|
|» provider|API_KEY|
|» provider|BRIDGE|
|» provider|CLOUDSIGNAL|
|» provider|COURIER|
|» provider|FRONTAPP|
|» provider|TWITTER|
|» provider|STRIPE|
|» provider|RECHARGE|
|» provider|TWILIO|
|» provider|GITHUB|
|» provider|SHOPIFY|
|» provider|POSTMARK|
|» provider|TYPEFORM|
|» provider|XERO|
|» provider|SVIX|
|» provider|ZOOM|
|» provider|AKENEO|
|» provider|ADYEN|
|» provider|GITLAB|
|» provider|PROPERTY-FINDER|
|» provider|WOOCOMMERCE|
|» provider|OURA|
|» provider|COMMERCELAYER|
|» provider|HUBSPOT|
|» provider|MAILGUN|
|» provider|PERSONA|
|» provider|PIPEDRIVE|
|» provider|SENDGRID|
|» provider|WORKOS|
|» provider|SYNCTERA|
|» provider|AWS_SNS|
|» provider|THREE_D_EYE|
|» provider|TWITCH|
|» provider|ENODE|
|» provider|FAVRO|
|» provider|LINEAR|
|» provider|SHOPLINE|
|» provider|WIX|
|» provider|NMI|
|» provider|ORB|
|» provider|PYLON|
|» provider|REPAY|
|» provider|SQUARE|
|» provider|SOLIDGATE|
|» provider|TRELLO|
|» provider|SANITY|
|» provider|EBAY|
|» provider|TELNYX|
|» provider|DISCORD|
|» provider|TOKENIO|
|» provider|FISERV|
|» provider|BONDSMITH|
|» provider|VERCEL_LOG_DRAINS|
|» provider|VERCEL|
|» provider|TEBEX|
|» provider|SLACK|
|» provider|RAZORPAY|
|» provider|MAILCHIMP|
|» provider|PADDLE|
|» provider|PAYPAL|
|» provider|TREEZOR|
|» provider|PRAXIS|
|» features|VERIFICATION|
|» features|HANDSHAKE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "label": "string",
  "provider": "HMAC",
  "features": [
    "VERIFICATION"
  ],
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  },
  "sources": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single integration|[Integration](#schemaintegration)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get an integration

<a id="opIdgetIntegration"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /integrations/{id}`

<h3 id="get-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "label": "string",
  "provider": "HMAC",
  "features": [
    "VERIFICATION"
  ],
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  },
  "sources": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single integration|[Integration](#schemaintegration)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update an integration

<a id="opIdupdateIntegration"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "string",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    },
    "provider": "HMAC",
    "features": [
      "VERIFICATION"
    ]
  }'
```

`PUT /integrations/{id}`

> Body parameter

```json
{
  "label": "string",
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  },
  "provider": "HMAC",
  "features": [
    "VERIFICATION"
  ]
}
```

<h3 id="update-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» label|body|string|false|Label of the integration|
|» configs|body|[HMACIntegrationConfigs](#schemahmacintegrationconfigs) \| [APIKeyIntegrationConfigs](#schemaapikeyintegrationconfigs) \| [HandledAPIKeyIntegrationConfigs](#schemahandledapikeyintegrationconfigs) \| [HandledHMACConfigs](#schemahandledhmacconfigs) \| [BasicAuthIntegrationConfigs](#schemabasicauthintegrationconfigs) \| [ShopifyIntegrationConfigs](#schemashopifyintegrationconfigs) \| [VercelLogDrainsIntegrationConfigs](#schemavercellogdrainsintegrationconfigs) \| object|false|Decrypted Key/Value object of the associated configuration for that provider|
|» » *anyOf*|body|[HMACIntegrationConfigs](#schemahmacintegrationconfigs)|false|none|
|» » *anyOf*|body|[APIKeyIntegrationConfigs](#schemaapikeyintegrationconfigs)|false|none|
|» » *anyOf*|body|[HandledAPIKeyIntegrationConfigs](#schemahandledapikeyintegrationconfigs)|false|none|
|» » *anyOf*|body|[HandledHMACConfigs](#schemahandledhmacconfigs)|false|none|
|» » *anyOf*|body|[BasicAuthIntegrationConfigs](#schemabasicauthintegrationconfigs)|false|none|
|» » *anyOf*|body|[ShopifyIntegrationConfigs](#schemashopifyintegrationconfigs)|false|none|
|» » *anyOf*|body|[VercelLogDrainsIntegrationConfigs](#schemavercellogdrainsintegrationconfigs)|false|none|
|» » *anyOf*|body|object|false|none|
|» provider|body|[IntegrationProvider](#schemaintegrationprovider)|false|none|
|» features|body|[[IntegrationFeature](#schemaintegrationfeature)]|false|List of features to enable (see features list above)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|HMAC|
|» provider|BASIC_AUTH|
|» provider|API_KEY|
|» provider|BRIDGE|
|» provider|CLOUDSIGNAL|
|» provider|COURIER|
|» provider|FRONTAPP|
|» provider|TWITTER|
|» provider|STRIPE|
|» provider|RECHARGE|
|» provider|TWILIO|
|» provider|GITHUB|
|» provider|SHOPIFY|
|» provider|POSTMARK|
|» provider|TYPEFORM|
|» provider|XERO|
|» provider|SVIX|
|» provider|ZOOM|
|» provider|AKENEO|
|» provider|ADYEN|
|» provider|GITLAB|
|» provider|PROPERTY-FINDER|
|» provider|WOOCOMMERCE|
|» provider|OURA|
|» provider|COMMERCELAYER|
|» provider|HUBSPOT|
|» provider|MAILGUN|
|» provider|PERSONA|
|» provider|PIPEDRIVE|
|» provider|SENDGRID|
|» provider|WORKOS|
|» provider|SYNCTERA|
|» provider|AWS_SNS|
|» provider|THREE_D_EYE|
|» provider|TWITCH|
|» provider|ENODE|
|» provider|FAVRO|
|» provider|LINEAR|
|» provider|SHOPLINE|
|» provider|WIX|
|» provider|NMI|
|» provider|ORB|
|» provider|PYLON|
|» provider|REPAY|
|» provider|SQUARE|
|» provider|SOLIDGATE|
|» provider|TRELLO|
|» provider|SANITY|
|» provider|EBAY|
|» provider|TELNYX|
|» provider|DISCORD|
|» provider|TOKENIO|
|» provider|FISERV|
|» provider|BONDSMITH|
|» provider|VERCEL_LOG_DRAINS|
|» provider|VERCEL|
|» provider|TEBEX|
|» provider|SLACK|
|» provider|RAZORPAY|
|» provider|MAILCHIMP|
|» provider|PADDLE|
|» provider|PAYPAL|
|» provider|TREEZOR|
|» provider|PRAXIS|
|» features|VERIFICATION|
|» features|HANDSHAKE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "label": "string",
  "provider": "HMAC",
  "features": [
    "VERIFICATION"
  ],
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  },
  "sources": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single integration|[Integration](#schemaintegration)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete an integration

<a id="opIddeleteIntegration"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /integrations/{id}`

<h3 id="delete-an-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-an-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object with deleted integration id|[DeletedIntegration](#schemadeletedintegration)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Attach an integration to a source

<a id="opIdattachIntegrationToSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations/string/attach/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /integrations/{id}/attach/{source_id}`

<h3 id="attach-an-integration-to-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|source_id|path|string|true|none|

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
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="attach-an-integration-to-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Attach operation success status|[AttachedIntegrationToSource](#schemaattachedintegrationtosource)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Detach an integration from a source

<a id="opIddetachIntegrationToSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/integrations/string/detach/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /integrations/{id}/detach/{source_id}`

<h3 id="detach-an-integration-from-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|source_id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="detach-an-integration-from-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Detach operation success status|[DetachedIntegrationFromSource](#schemadetachedintegrationfromsource)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-issues">Issues</h1>

Issues lets you track problems in your project and communicate resolution steps with your team.

## Get issues

<a id="opIdgetIssues"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issues \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /issues`

<h3 id="get-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|issue_trigger_id|query|string \| [string]|false|none|
|type|query|string \| [string]|false|none|
|status|query|string \| [string]|false|none|
|merged_with|query|string \| [string]|false|none|
|aggregation_keys|query|object|false|none|
|created_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|first_seen_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|last_seen_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|dismissed_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "iss_YXKv5OdJXCiVwkPhGy",
      "team_id": "string",
      "status": "OPENED",
      "opened_at": "1970-01-01T00:00:00Z",
      "first_seen_at": "1970-01-01T00:00:00Z",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "last_updated_by": "string",
      "dismissed_at": "1970-01-01T00:00:00Z",
      "auto_resolved_at": "1970-01-01T00:00:00Z",
      "merged_with": "string",
      "updated_at": "string",
      "created_at": "string",
      "type": "delivery",
      "aggregation_keys": {
        "webhook_id": [
          "string"
        ],
        "response_status": [
          0
        ],
        "error_code": [
          "CANCELLED"
        ]
      },
      "reference": {
        "event_id": "string",
        "attempt_id": "string"
      },
      "data": {
        "trigger_event": {
          "id": "string",
          "team_id": "string",
          "webhook_id": "string",
          "source_id": "string",
          "destination_id": "string",
          "event_data_id": "string",
          "request_id": "string",
          "attempts": 0,
          "last_attempt_at": "1970-01-01T00:00:00Z",
          "next_attempt_at": "1970-01-01T00:00:00Z",
          "response_status": 0,
          "error_code": "CANCELLED",
          "status": "SCHEDULED",
          "successful_at": "1970-01-01T00:00:00Z",
          "cli_id": "string",
          "updated_at": "1970-01-01T00:00:00Z",
          "created_at": "1970-01-01T00:00:00Z",
          "data": {
            "path": "string",
            "query": "string",
            "parsed_query": "string",
            "headers": "string",
            "body": "string",
            "is_large_payload": true
          }
        },
        "trigger_attempt": {
          "id": "string",
          "team_id": "string",
          "event_id": "string",
          "destination_id": "string",
          "response_status": 0,
          "attempt_number": 0,
          "trigger": "INITIAL",
          "error_code": "CANCELLED",
          "body": {},
          "requested_url": "string",
          "http_method": "GET",
          "bulk_retry_id": "string",
          "status": "FAILED",
          "successful_at": "1970-01-01T00:00:00Z",
          "delivered_at": "1970-01-01T00:00:00Z",
          "responded_at": "1970-01-01T00:00:00Z",
          "delivery_latency": 0,
          "response_latency": 0,
          "updated_at": "1970-01-01T00:00:00Z",
          "created_at": "1970-01-01T00:00:00Z"
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of issues|[IssueWithDataPaginatedResult](#schemaissuewithdatapaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get the number of issues

<a id="opIdgetIssueCount"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issues/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /issues/count`

<h3 id="get-the-number-of-issues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|issue_trigger_id|query|string \| [string]|false|none|
|type|query|string \| [string]|false|none|
|status|query|string \| [string]|false|none|
|merged_with|query|string \| [string]|false|none|
|aggregation_keys|query|object|false|none|
|created_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|first_seen_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|last_seen_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|dismissed_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": 5
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-the-number-of-issues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Issue count|[IssueCount](#schemaissuecount)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a single issue

<a id="opIdgetIssue"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issues/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /issues/{id}`

<h3 id="get-a-single-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  },
  "data": {
    "trigger_event": {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    },
    "trigger_attempt": {
      "id": "string",
      "team_id": "string",
      "event_id": "string",
      "destination_id": "string",
      "response_status": 0,
      "attempt_number": 0,
      "trigger": "INITIAL",
      "error_code": "CANCELLED",
      "body": {},
      "requested_url": "string",
      "http_method": "GET",
      "bulk_retry_id": "string",
      "status": "FAILED",
      "successful_at": "1970-01-01T00:00:00Z",
      "delivered_at": "1970-01-01T00:00:00Z",
      "responded_at": "1970-01-01T00:00:00Z",
      "delivery_latency": 0,
      "response_latency": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-single-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single issue|[IssueWithData](#schemaissuewithdata)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update issue

<a id="opIdupdateIssue"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issues/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "OPENED"
  }'
```

`PUT /issues/{id}`

> Body parameter

```json
{
  "status": "OPENED"
}
```

<h3 id="update-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» status|body|string|true|New status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|OPENED|
|» status|IGNORED|
|» status|ACKNOWLEDGED|
|» status|RESOLVED|

> Example responses

> 200 Response

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated issue|[Issue](#schemaissue)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Dismiss an issue

<a id="opIddismissIssue"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/issues/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /issues/{id}`

<h3 id="dismiss-an-issue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="dismiss-an-issue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dismissed issue|[Issue](#schemaissue)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-requests">Requests</h1>

A request represent a webhook received by Hookdeck.

## Get requests

<a id="opIdgetRequests"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /requests`

<h3 id="get-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|status|query|string|false|none|
|rejection_cause|query|[RequestRejectionCause](#schemarequestrejectioncause) \| [[RequestRejectionCause](#schemarequestrejectioncause)] \| null|false|none|
|source_id|query|string \| [string]|false|none|
|verified|query|boolean|false|none|
|search_term|query|string|false|none|
|headers|query|string \| object|false|none|
|body|query|string \| object|false|none|
|parsed_query|query|string \| object|false|none|
|path|query|string|false|none|
|ignored_count|query|integer \| [Operators](#schemaoperators) \| [integer]|false|none|
|events_count|query|integer \| [Operators](#schemaoperators) \| [integer]|false|none|
|ingested_at|query|string(date-time) \| [Operators](#schemaoperators)|false|none|
|bulk_retry_id|query|string \| [string]|false|none|
|include|query|string|false|none|
|order_by|query|string|false|none|
|dir|query|string|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|accepted|
|status|rejected|
|include|data|
|order_by|ingested_at|
|order_by|created_at|
|dir|asc|
|dir|desc|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "verified": true,
      "original_event_data_id": "string",
      "rejection_cause": "SOURCE_DISABLED",
      "ingest_priority": "NORMAL",
      "ingested_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "events_count": 0,
      "cli_events_count": 0,
      "ignored_count": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of requests|[RequestPaginatedResult](#schemarequestpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a request

<a id="opIdgetRequest"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/requests/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /requests/{id}`

<h3 id="get-a-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "verified": true,
  "original_event_data_id": "string",
  "rejection_cause": "SOURCE_DISABLED",
  "ingest_priority": "NORMAL",
  "ingested_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "events_count": 0,
  "cli_events_count": 0,
  "ignored_count": 0,
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single request|[Request](#schemarequest)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a request raw body data

<a id="opIdgetRequestRawBody"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/requests/string/raw_body \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /requests/{id}/raw_body`

<h3 id="get-a-request-raw-body-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "body": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-request-raw-body-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A request raw body data|[RawBody](#schemarawbody)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Retry a request

<a id="opIdretryRequest"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/requests/string/retry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "webhook_ids": [
      "string"
    ]
  }'
```

`POST /requests/{id}/retry`

> Body parameter

```json
{
  "webhook_ids": [
    "string"
  ]
}
```

<h3 id="retry-a-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» webhook_ids|body|[string]|true|Subset of webhook_ids to re-run the event logic on. Useful to retry only specific ignored_events|

> Example responses

> 200 Response

```json
{
  "request": {
    "id": "string",
    "team_id": "string",
    "verified": true,
    "original_event_data_id": "string",
    "rejection_cause": "SOURCE_DISABLED",
    "ingest_priority": "NORMAL",
    "ingested_at": "1970-01-01T00:00:00Z",
    "source_id": "string",
    "events_count": 0,
    "cli_events_count": 0,
    "ignored_count": 0,
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    }
  },
  "events": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="retry-a-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retry request operation result|[RetryRequest](#schemaretryrequest)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get request events

<a id="opIdgetRequestEvents"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/requests/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /requests/{id}/events`

<h3 id="get-request-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|status|query|[EventStatus](#schemaeventstatus) \| [[EventStatus](#schemaeventstatus)]|false|none|
|webhook_id|query|string \| [string]|false|none|
|destination_id|query|string \| [string]|false|none|
|source_id|query|string \| [string]|false|none|
|attempts|query|integer \| [Operators](#schemaoperators)|false|none|
|response_status|query|integer \| [Operators](#schemaoperators) \| [integer] \| null|false|none|
|successful_at|query|string(date-time) \| [Operators](#schemaoperators) \| null|false|none|
|created_at|query|string(date-time) \| [Operators](#schemaoperators)|false|none|
|error_code|query|[AttemptErrorCodes](#schemaattempterrorcodes) \| [[AttemptErrorCodes](#schemaattempterrorcodes)]|false|none|
|cli_id|query|string \| object \| [string] \| null|false|none|
|last_attempt_at|query|string(date-time) \| [Operators](#schemaoperators) \| null|false|none|
|search_term|query|string|false|none|
|headers|query|string \| object|false|none|
|body|query|string \| object|false|none|
|parsed_query|query|string \| object|false|none|
|path|query|string|false|none|
|cli_user_id|query|string \| [string] \| null|false|none|
|issue_id|query|string \| [string]|false|none|
|event_data_id|query|string \| [string]|false|none|
|bulk_retry_id|query|string \| [string]|false|none|
|include|query|string|false|none|
|order_by|query|string|false|none|
|dir|query|string|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|data|
|order_by|last_attempt_at|
|order_by|created_at|
|dir|asc|
|dir|desc|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-request-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of events|[EventPaginatedResult](#schemaeventpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get request ignored events

<a id="opIdgetRequestIgnoredEvents"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/requests/string/ignored_events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /requests/{id}/ignored_events`

<h3 id="get-request-ignored-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "cause": "DISABLED",
      "request_id": "string",
      "meta": [
        "body"
      ],
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-request-ignored-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of ignored events|[IgnoredEventPaginatedResult](#schemaignoredeventpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-bulk-retry-requests">Bulk retry requests</h1>

## Get request bulk retries

<a id="opIdgetRequestBulkRetries"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/requests/retry \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/requests/retry`

<h3 id="get-request-bulk-retries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cancelled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|completed_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|created_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|id|query|string \| [string]|false|none|
|in_progress|query|boolean|false|none|
|query|query|object|false|none|
|query_partial_match|query|boolean|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "query": {
        "property1": null,
        "property2": null
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "cancelled_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "estimated_batch": 0,
      "estimated_count": 0,
      "processed_batch": 0,
      "completed_count": 0,
      "in_progress": true,
      "progress": 0,
      "failed_count": 0,
      "number": 0
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-request-bulk-retries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of request bulk retries|[BatchOperationPaginatedResult](#schemabatchoperationpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create a requests bulk retry

<a id="opIdcreateRequestBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/requests/retry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": {
      "id": "string",
      "status": "accepted",
      "rejection_cause": "SOURCE_DISABLED",
      "source_id": "string",
      "verified": true,
      "search_term": "string",
      "headers": "string",
      "body": "string",
      "parsed_query": "string",
      "path": "string",
      "ignored_count": 0,
      "events_count": 0,
      "ingested_at": "1970-01-01T00:00:00Z",
      "bulk_retry_id": "string"
    }
  }'
```

`POST /bulk/requests/retry`

> Body parameter

```json
{
  "query": {
    "id": "string",
    "status": "accepted",
    "rejection_cause": "SOURCE_DISABLED",
    "source_id": "string",
    "verified": true,
    "search_term": "string",
    "headers": "string",
    "body": "string",
    "parsed_query": "string",
    "path": "string",
    "ignored_count": 0,
    "events_count": 0,
    "ingested_at": "1970-01-01T00:00:00Z",
    "bulk_retry_id": "string"
  }
}
```

<h3 id="create-a-requests-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» query|body|object|false|Filter properties for the events to be included in the bulk retry, use query parameters of [Requests](#requests)|
|» » id|body|string \| [string]|false|Filter by requests IDs|
|» » » *anyOf*|body|string|false|Request ID|
|» » » *anyOf*|body|[string]|false|none|
|» » status|body|string|false|Filter by status|
|» » rejection_cause|body|[RequestRejectionCause](#schemarequestrejectioncause) \| [[RequestRejectionCause](#schemarequestrejectioncause)] \| null|false|Filter by rejection cause|
|» » » *anyOf*|body|[RequestRejectionCause](#schemarequestrejectioncause)|false|none|
|» » » *anyOf*|body|[[RequestRejectionCause](#schemarequestrejectioncause)]|false|none|
|» » source_id|body|string \| [string]|false|Filter by source IDs|
|» » » *anyOf*|body|string|false|Source ID|
|» » » *anyOf*|body|[string]|false|none|
|» » verified|body|boolean|false|Filter by verification status|
|» » search_term|body|string|false|URL Encoded string of the value to match partially to the body, headers, parsed_query or path|
|» » headers|body|string \| object|false|URL Encoded string of the JSON to match to the data headers|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » body|body|string \| object|false|URL Encoded string of the JSON to match to the data body|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » parsed_query|body|string \| object|false|URL Encoded string of the JSON to match to the parsed query (JSON representation of the query)|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|object|false|none|
|» » path|body|string|false|URL Encoded string of the value to match partially to the path|
|» » ignored_count|body|integer \| [Operators](#schemaoperators) \| [integer]|false|Filter by count of ignored events|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » » *anyOf*|body|[integer]|false|none|
|» » events_count|body|integer \| [Operators](#schemaoperators) \| [integer]|false|Filter by count of events|
|» » » *anyOf*|body|integer|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » » *anyOf*|body|[integer]|false|none|
|» » ingested_at|body|string(date-time) \| [Operators](#schemaoperators)|false|Filter by event ingested date|
|» » » *anyOf*|body|string(date-time)|false|none|
|» » » *anyOf*|body|[Operators](#schemaoperators)|false|none|
|» » bulk_retry_id|body|string \| [string]|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » status|accepted|
|» » status|rejected|
|» » » *anyOf*|SOURCE_DISABLED|
|» » » *anyOf*|NO_CONNECTION|
|» » » *anyOf*|VERIFICATION_FAILED|
|» » » *anyOf*|UNSUPPORTED_HTTP_METHOD|
|» » » *anyOf*|UNSUPPORTED_CONTENT_TYPE|
|» » » *anyOf*|UNPARSABLE_JSON|
|» » » *anyOf*|PAYLOAD_TOO_LARGE|
|» » » *anyOf*|INGESTION_FATAL|
|» » » *anyOf*|UNKNOWN|
|» » » *anyOf*|SOURCE_DISABLED|
|» » » *anyOf*|NO_CONNECTION|
|» » » *anyOf*|VERIFICATION_FAILED|
|» » » *anyOf*|UNSUPPORTED_HTTP_METHOD|
|» » » *anyOf*|UNSUPPORTED_CONTENT_TYPE|
|» » » *anyOf*|UNPARSABLE_JSON|
|» » » *anyOf*|PAYLOAD_TOO_LARGE|
|» » » *anyOf*|INGESTION_FATAL|
|» » » *anyOf*|UNKNOWN|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-a-requests-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single requests bulk retry|[BatchOperation](#schemabatchoperation)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Generate a requests bulk retry plan

<a id="opIdgenerateRequestBulkRetryPlan"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/requests/retry/plan \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/requests/retry/plan`

<h3 id="generate-a-requests-bulk-retry-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "estimated_batch": 0,
  "estimated_count": 0,
  "progress": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="generate-a-requests-bulk-retry-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Requests bulk retry plan|Inline|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="generate-a-requests-bulk-retry-plan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimated_batch|integer \| null|false|none|Number of batches required to complete the bulk retry|
|estimated_count|integer \| null|false|none|Number of estimated events to be retried|
|progress|number(float) \| null|false|none|Progression of the batch operations, values 0 - 1|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a requests bulk retry

<a id="opIdgetRequestBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/requests/retry/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bulk/requests/retry/{id}`

<h3 id="get-a-requests-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-requests-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single requests bulk retry|[BatchOperation](#schemabatchoperation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Cancel a requests bulk retry

<a id="opIdcancelRequestBulkRetry"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/bulk/requests/retry/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /bulk/requests/retry/{id}/cancel`

<h3 id="cancel-a-requests-bulk-retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="cancel-a-requests-bulk-retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single requests bulk retry|[BatchOperation](#schemabatchoperation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-sources">Sources</h1>

A source represents any third party that sends webhooks to Hookdeck.

## Get sources

<a id="opIdgetSources"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sources`

<h3 id="get-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|name|query|string \| [Operators](#schemaoperators) \| [string]|false|none|
|disabled|query|boolean|false|none|
|disabled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "team_id": "string",
      "url": "string",
      "verification": {
        "type": "hmac",
        "configs": {
          "webhook_secret_key": "string",
          "algorithm": "md5",
          "header_key": "string",
          "encoding": "base64"
        }
      },
      "allowed_http_methods": [
        "GET"
      ],
      "custom_response": {
        "content_type": "json",
        "body": "string"
      },
      "disabled_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of sources|[SourcePaginatedResult](#schemasourcepaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update or create a source

<a id="opIdupsertSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    }
  }'
```

`PUT /sources`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  }
}
```

<h3 id="update-or-create-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|A unique name for the source|
|» description|body|string \| null|false|Description for the source|
|» allowed_http_methods|body|[SourceAllowedHTTPMethod](#schemasourceallowedhttpmethod)|false|List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.|
|» custom_response|body|[SourceCustomResponse](#schemasourcecustomresponse)|false|Custom response object|
|» verification|body|[VerificationConfig](#schemaverificationconfig)|false|The verification configs for the specified verification type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowed_http_methods|GET|
|» allowed_http_methods|POST|
|» allowed_http_methods|PUT|
|» allowed_http_methods|PATCH|
|» allowed_http_methods|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-or-create-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create a source

<a id="opIdcreateSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    }
  }'
```

`POST /sources`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  }
}
```

<h3 id="create-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|A unique name for the source|
|» description|body|string \| null|false|Description for the source|
|» allowed_http_methods|body|[SourceAllowedHTTPMethod](#schemasourceallowedhttpmethod)|false|List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.|
|» custom_response|body|[SourceCustomResponse](#schemasourcecustomresponse)|false|Custom response object|
|» verification|body|[VerificationConfig](#schemaverificationconfig)|false|The verification configs for the specified verification type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowed_http_methods|GET|
|» allowed_http_methods|POST|
|» allowed_http_methods|PUT|
|» allowed_http_methods|PATCH|
|» allowed_http_methods|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a source

<a id="opIdgetSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sources/{id}`

<h3 id="get-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|string|false|none|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|verification.configs|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 410 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|410|Gone|Gone|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update a source

<a id="opIdupdateSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    }
  }'
```

`PUT /sources/{id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  }
}
```

<h3 id="update-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|false|A unique name for the source|
|» description|body|string \| null|false|Description for the source|
|» allowed_http_methods|body|[SourceAllowedHTTPMethod](#schemasourceallowedhttpmethod)|false|List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.|
|» custom_response|body|[SourceCustomResponse](#schemasourcecustomresponse)|false|Custom response object|
|» verification|body|[VerificationConfig](#schemaverificationconfig)|false|The verification configs for the specified verification type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowed_http_methods|GET|
|» allowed_http_methods|POST|
|» allowed_http_methods|PUT|
|» allowed_http_methods|PATCH|
|» allowed_http_methods|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete a source

<a id="opIddeleteSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sources/{id}`

<h3 id="delete-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|Inline|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="delete-a-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the source|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable a source

<a id="opIddisableSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string/disable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sources/{id}/disable`

<h3 id="disable-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable a source

<a id="opIddisableSource_archive"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string/archive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sources/{id}/archive`

<h3 id="disable-a-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-a-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable a source

<a id="opIdenableSource"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sources/{id}/enable`

<h3 id="enable-a-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-a-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable a source

<a id="opIdenableSource_unarchive"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/sources/string/unarchive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sources/{id}/unarchive`

<h3 id="enable-a-source-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-a-source-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single source|[Source](#schemasource)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-notifications">Notifications</h1>

Notifications let your team receive alerts anytime an issue changes.

## Toggle webhook notifications for the project

<a id="opIdtoggleWebhookNotifications"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/notifications/webhooks \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "topics": [
      "issue.opened"
    ],
    "source_id": "string"
  }'
```

`PUT /notifications/webhooks`

> Body parameter

```json
{
  "enabled": true,
  "topics": [
    "issue.opened"
  ],
  "source_id": "string"
}
```

<h3 id="toggle-webhook-notifications-for-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» enabled|body|boolean|false|Enable or disable webhook notifications on the project|
|» topics|body|[[TopicsValue](#schematopicsvalue)]|false|List of topics to send notifications for|
|» source_id|body|string|false|The Hookdeck Source to send the webhook to|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» topics|issue.opened|
|» topics|issue.updated|
|» topics|deprecated.attempt-failed|
|» topics|event.successful|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "topics": [
    "issue.opened"
  ],
  "source_id": "string"
}
```

<h3 id="toggle-webhook-notifications-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Toggle operation status response|[ToggleWebhookNotifications](#schematogglewebhooknotifications)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## List all custom domains and their verification statuses for the project

<a id="opIdlistCustomDomains"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/teams/current/custom_domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /teams/current/custom_domains`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "hostname": "string",
    "status": "string",
    "ssl": {
      "id": "string",
      "type": "string",
      "method": "string",
      "status": "string",
      "txt_name": "string",
      "txt_value": "string",
      "validation_records": [
        {
          "status": "string",
          "txt_name": "string",
          "txt_value": "string"
        }
      ],
      "dcv_delegation_records": [
        {
          "cname": "string",
          "cname_target": "string"
        }
      ],
      "settings": {
        "min_tls_version": "string"
      },
      "bundle_method": "string",
      "wildcard": true,
      "certificate_authority": "string"
    },
    "verification_errors": [
      "string"
    ],
    "ownership_verification": {
      "type": "string",
      "name": "string",
      "value": "string"
    },
    "created_at": "string"
  }
]
```

<h3 id="list-all-custom-domains-and-their-verification-statuses-for-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of custom domains|[ListCustomDomainSchema](#schemalistcustomdomainschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Add a custom domain to the project

<a id="opIdaddCustomDomain"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/teams/current/custom_domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hostname": "string"
  }'
```

`POST /teams/current/custom_domains`

> Body parameter

```json
{
  "hostname": "string"
}
```

<h3 id="add-a-custom-domain-to-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AddCustomHostname](#schemaaddcustomhostname)|true|none|
|» hostname|body|string|true|The custom hostname to attach to the project|

> Example responses

> 200 Response

```json
{
  "hostname": "string"
}
```

<h3 id="add-a-custom-domain-to-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom domain successfuly added|[AddCustomHostname](#schemaaddcustomhostname)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Removes a custom domain from the project

<a id="opIddeleteCustomDomain"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/teams/current/custom_domains/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /teams/current/custom_domains/{domain_id}`

<h3 id="removes-a-custom-domain-from-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="removes-a-custom-domain-from-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Custom domain successfuly removed|[DeleteCustomDomainSchema](#schemadeletecustomdomainschema)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-transformations">Transformations</h1>

A transformation represents JavaScript code that will be executed on a connection's requests. Transformations are applied to connections using Rules.

## Get transformations

<a id="opIdgetTransformations"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transformations`

<h3 id="get-transformations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|name|query|string \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "name": "string",
      "code": "string",
      "encrypted_env": "string",
      "iv": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-transformations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of transformations|[TransformationPaginatedResult](#schematransformationpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update or create a transformation

<a id="opIdupsertTransformation"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "code": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /transformations`

> Body parameter

```json
{
  "name": "string",
  "code": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-or-create-a-transformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|A unique, human-friendly name for the transformation|
|» code|body|string|true|JavaScript code to be executed as string|
|» env|body|object|false|Key-value environment variables to be passed to the transformation|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "code": "string",
  "encrypted_env": "string",
  "iv": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-or-create-a-transformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single transformation|[Transformation](#schematransformation)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create a transformation

<a id="opIdcreateTransformation"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "code": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /transformations`

> Body parameter

```json
{
  "name": "string",
  "code": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-transformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|A unique, human-friendly name for the transformation|
|» code|body|string|true|JavaScript code to be executed as string|
|» env|body|object|false|Key-value environment variables to be passed to the transformation|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "code": "string",
  "encrypted_env": "string",
  "iv": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-a-transformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single transformation|[Transformation](#schematransformation)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a transformation

<a id="opIdgetTransformation"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transformations/{id}`

<h3 id="get-a-transformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "code": "string",
  "encrypted_env": "string",
  "iv": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-transformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single transformation|[Transformation](#schematransformation)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update a transformation

<a id="opIdupdateTransformation"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "code": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PUT /transformations/{id}`

> Body parameter

```json
{
  "name": "string",
  "code": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-a-transformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|false|A unique, human-friendly name for the transformation|
|» code|body|string|false|JavaScript code to be executed|
|» env|body|object|false|Key-value environment variables to be passed to the transformation|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "code": "string",
  "encrypted_env": "string",
  "iv": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-a-transformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single transformation|[Transformation](#schematransformation)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete a transformation

<a id="opIddeleteTransformation"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /transformations/{id}`

<h3 id="delete-a-transformation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-a-transformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An object with deleted transformation id|Inline|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="delete-a-transformation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the Transformation|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Test a transformation code

<a id="opIdtestTransformation"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations/run \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "webhook_id": "string",
    "code": "string",
    "transformation_id": "string",
    "request": {
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "body": {},
      "path": "string",
      "query": "string",
      "parsed_query": {}
    },
    "event_id": "string"
  }'
```

`PUT /transformations/run`

> Body parameter

```json
{
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "webhook_id": "string",
  "code": "string",
  "transformation_id": "string",
  "request": {
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "body": {},
    "path": "string",
    "query": "string",
    "parsed_query": {}
  },
  "event_id": "string"
}
```

<h3 id="test-a-transformation-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» env|body|object|false|Key-value environment variables to be passed to the transformation|
|» » **additionalProperties**|body|string|false|none|
|» webhook_id|body|string|false|ID of the connection to use for the execution `context`|
|» code|body|string|false|JavaScript code to be executed|
|» transformation_id|body|string|false|Transformation ID|
|» request|body|object|false|Request input to use for the transformation execution|
|» » headers|body|object|true|Headers of the request|
|» » » **additionalProperties**|body|string|false|none|
|» » body|body|object \| string|false|Body of the request|
|» » » *anyOf*|body|object|false|none|
|» » » *anyOf*|body|string|false|none|
|» » path|body|string \| null|false|Path of the request|
|» » query|body|string \| null|false|String representation of the query params of the request|
|» » parsed_query|body|object|false|JSON representation of the query params|
|» event_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "request_id": "string",
  "transformation_id": "string",
  "execution_id": "string",
  "log_level": "debug",
  "request": {
    "headers": "string",
    "path": "string",
    "query": {},
    "parsed_query": "string",
    "body": "string"
  },
  "console": [
    {
      "type": "error",
      "message": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="test-a-transformation-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transformation run output|[TransformationExecutorOutput](#schematransformationexecutoroutput)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get transformation executions

<a id="opIdgetTransformationExecutions"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations/string/executions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transformations/{id}/executions`

<h3 id="get-transformation-executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|log_level|query|string \| null \| [string \| null]|false|none|
|webhook_id|query|string \| [string]|false|none|
|issue_id|query|string \| [string]|false|none|
|created_at|query|string(date-time) \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "transformed_event_data_id": "string",
      "original_event_data_id": "string",
      "transformation_id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "log_level": "debug",
      "logs": [
        {
          "type": "error",
          "message": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "original_event_data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "transformed_event_data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "issue_id": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-transformation-executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of transformation executions|[TransformationExecutionPaginatedResult](#schematransformationexecutionpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a transformation execution

<a id="opIdgetTransformationExecution"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/transformations/string/executions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transformations/{id}/executions/{execution_id}`

<h3 id="get-a-transformation-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|execution_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "transformed_event_data_id": "string",
  "original_event_data_id": "string",
  "transformation_id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "log_level": "debug",
  "logs": [
    {
      "type": "error",
      "message": "string"
    }
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "original_event_data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "transformed_event_data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "issue_id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-transformation-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single transformation execution|[TransformationExecution](#schematransformationexecution)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

<h1 id="hookdeck-admin-rest-api-connections">Connections</h1>

A connection lets you route webhooks from a source to a destination, using a ruleset.

## Get connections

<a id="opIdgetConnections"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections`

<h3 id="get-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string \| [string]|false|none|
|name|query|string \| null \| [Operators](#schemaoperators) \| [string \| null]|false|none|
|destination_id|query|string \| [string]|false|none|
|source_id|query|string \| [string]|false|none|
|disabled|query|boolean|false|none|
|disabled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|full_name|query|string|false|none|
|paused_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|order_by|query|string \| [string]|false|none|
|dir|query|string \| [string]|false|none|
|limit|query|integer|false|none|
|next|query|string|false|none|
|prev|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "name": "string",
      "full_name": "string",
      "description": "string",
      "team_id": "string",
      "destination": {
        "id": "string",
        "name": "string",
        "description": "string",
        "team_id": "string",
        "path_forwarding_disabled": true,
        "url": "string",
        "cli_path": "string",
        "rate_limit": 0,
        "rate_limit_period": "second",
        "http_method": "GET",
        "auth_method": {
          "type": "HOOKDECK_SIGNATURE",
          "config": {}
        },
        "disabled_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z"
      },
      "source": {
        "id": "string",
        "name": "string",
        "description": "string",
        "team_id": "string",
        "url": "string",
        "verification": {
          "type": "hmac",
          "configs": {
            "webhook_secret_key": "string",
            "algorithm": "md5",
            "header_key": "string",
            "encoding": "base64"
          }
        },
        "allowed_http_methods": [
          "GET"
        ],
        "custom_response": {
          "content_type": "json",
          "body": "string"
        },
        "disabled_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z"
      },
      "rules": [
        {
          "type": "retry",
          "strategy": "linear",
          "interval": 0,
          "count": 0,
          "response_status_codes": [
            "string"
          ]
        }
      ],
      "disabled_at": "1970-01-01T00:00:00Z",
      "paused_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of connections|[ConnectionPaginatedResult](#schemaconnectionpaginatedresult)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update or create a connection

<a id="opIdupsertConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "destination_id": "string",
    "source_id": "string",
    "destination": {
      "name": "string",
      "description": "string",
      "url": "string",
      "cli_path": "string",
      "rate_limit": 0,
      "rate_limit_period": "second",
      "http_method": "GET",
      "auth_method": {
        "type": "HOOKDECK_SIGNATURE",
        "config": {}
      },
      "path_forwarding_disabled": true
    },
    "source": {
      "name": "string",
      "description": "string",
      "allowed_http_methods": [
        "GET"
      ],
      "custom_response": {
        "content_type": "json",
        "body": "string"
      },
      "verification": {
        "type": "hmac",
        "configs": {
          "webhook_secret_key": "string",
          "algorithm": "md5",
          "header_key": "string",
          "encoding": "base64"
        }
      }
    },
    "rules": [
      {
        "type": "retry",
        "strategy": "linear",
        "interval": 0,
        "count": 0,
        "response_status_codes": [
          "string"
        ]
      }
    ]
  }'
```

`PUT /connections`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "destination_id": "string",
  "source_id": "string",
  "destination": {
    "name": "string",
    "description": "string",
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "path_forwarding_disabled": true
  },
  "source": {
    "name": "string",
    "description": "string",
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    }
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ]
}
```

<h3 id="update-or-create-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string \| null|false|A unique name of the connection for the source|
|» description|body|string \| null|false|Description for the connection|
|» destination_id|body|string \| null|false|ID of a destination to bind to the connection|
|» source_id|body|string \| null|false|ID of a source to bind to the connection|
|» destination|body|object|false|Destination input object|
|» » name|body|string|true|Name for the destination|
|» » description|body|string \| null|false|Description for the destination|
|» » url|body|string(URL) \| null|false|Endpoint of the destination|
|» » cli_path|body|string \| null|false|Path for the CLI destination|
|» » rate_limit|body|integer \| null|false|Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.|
|» » rate_limit_period|body|string \| null|false|Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.|
|» » http_method|body|[DestinationHTTPMethod](#schemadestinationhttpmethod)|false|HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.|
|» » auth_method|body|[DestinationAuthMethodConfig](#schemadestinationauthmethodconfig)|false|Config for the destination's auth method|
|» » path_forwarding_disabled|body|boolean|false|none|
|» source|body|object|false|Source input object|
|» » name|body|string|true|A unique name for the source|
|» » description|body|string \| null|false|Description for the source|
|» » allowed_http_methods|body|[SourceAllowedHTTPMethod](#schemasourceallowedhttpmethod)|false|List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.|
|» » custom_response|body|[SourceCustomResponse](#schemasourcecustomresponse)|false|Custom response object|
|» » verification|body|[VerificationConfig](#schemaverificationconfig)|false|The verification configs for the specified verification type|
|» rules|body|[[Rule](#schemarule)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » rate_limit_period|second|
|» » rate_limit_period|minute|
|» » rate_limit_period|hour|
|» » rate_limit_period|concurrent|
|» » http_method|GET|
|» » http_method|POST|
|» » http_method|PUT|
|» » http_method|PATCH|
|» » http_method|DELETE|
|» » allowed_http_methods|GET|
|» » allowed_http_methods|POST|
|» » allowed_http_methods|PUT|
|» » allowed_http_methods|PATCH|
|» » allowed_http_methods|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-or-create-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Create a connection

<a id="opIdcreateConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "destination_id": "string",
    "source_id": "string",
    "destination": {
      "name": "string",
      "description": "string",
      "url": "string",
      "cli_path": "string",
      "rate_limit": 0,
      "rate_limit_period": "second",
      "http_method": "GET",
      "auth_method": {
        "type": "HOOKDECK_SIGNATURE",
        "config": {}
      },
      "path_forwarding_disabled": true
    },
    "source": {
      "name": "string",
      "description": "string",
      "allowed_http_methods": [
        "GET"
      ],
      "custom_response": {
        "content_type": "json",
        "body": "string"
      },
      "verification": {
        "type": "hmac",
        "configs": {
          "webhook_secret_key": "string",
          "algorithm": "md5",
          "header_key": "string",
          "encoding": "base64"
        }
      }
    },
    "rules": [
      {
        "type": "retry",
        "strategy": "linear",
        "interval": 0,
        "count": 0,
        "response_status_codes": [
          "string"
        ]
      }
    ]
  }'
```

`POST /connections`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "destination_id": "string",
  "source_id": "string",
  "destination": {
    "name": "string",
    "description": "string",
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "path_forwarding_disabled": true
  },
  "source": {
    "name": "string",
    "description": "string",
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    }
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ]
}
```

<h3 id="create-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string \| null|false|A unique name of the connection for the source|
|» description|body|string \| null|false|Description for the connection|
|» destination_id|body|string \| null|false|ID of a destination to bind to the connection|
|» source_id|body|string \| null|false|ID of a source to bind to the connection|
|» destination|body|object|false|Destination input object|
|» » name|body|string|true|Name for the destination|
|» » description|body|string \| null|false|Description for the destination|
|» » url|body|string(URL) \| null|false|Endpoint of the destination|
|» » cli_path|body|string \| null|false|Path for the CLI destination|
|» » rate_limit|body|integer \| null|false|Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.|
|» » rate_limit_period|body|string \| null|false|Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.|
|» » http_method|body|[DestinationHTTPMethod](#schemadestinationhttpmethod)|false|HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.|
|» » auth_method|body|[DestinationAuthMethodConfig](#schemadestinationauthmethodconfig)|false|Config for the destination's auth method|
|» » path_forwarding_disabled|body|boolean|false|none|
|» source|body|object|false|Source input object|
|» » name|body|string|true|A unique name for the source|
|» » description|body|string \| null|false|Description for the source|
|» » allowed_http_methods|body|[SourceAllowedHTTPMethod](#schemasourceallowedhttpmethod)|false|List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.|
|» » custom_response|body|[SourceCustomResponse](#schemasourcecustomresponse)|false|Custom response object|
|» » verification|body|[VerificationConfig](#schemaverificationconfig)|false|The verification configs for the specified verification type|
|» rules|body|[[Rule](#schemarule)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » rate_limit_period|second|
|» » rate_limit_period|minute|
|» » rate_limit_period|hour|
|» » rate_limit_period|concurrent|
|» » http_method|GET|
|» » http_method|POST|
|» » http_method|PUT|
|» » http_method|PATCH|
|» » http_method|DELETE|
|» » allowed_http_methods|GET|
|» » allowed_http_methods|POST|
|» » allowed_http_methods|PUT|
|» » allowed_http_methods|PATCH|
|» » allowed_http_methods|DELETE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="create-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Count connections

<a id="opIdcountConnections"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections/count`

<h3 id="count-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|destination_id|query|string \| [string]|false|none|
|source_id|query|string \| [string]|false|none|
|disabled|query|boolean|false|none|
|disabled_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|
|paused_at|query|string(date-time) \| null \| [Operators](#schemaoperators)|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="count-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Count of connections|Inline|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="count-connections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number(float)|true|none|Count of connections|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Get a single connection

<a id="opIdgetConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /connections/{id}`

<h3 id="get-a-single-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 410 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="get-a-single-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|410|Gone|Gone|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Update a connection

<a id="opIdupdateConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "rules": [
      {
        "type": "retry",
        "strategy": "linear",
        "interval": 0,
        "count": 0,
        "response_status_codes": [
          "string"
        ]
      }
    ]
  }'
```

`PUT /connections/{id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ]
}
```

<h3 id="update-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|object|true|none|
|» name|body|string \| null|false|none|
|» description|body|string \| null|false|Description for the connection|
|» rules|body|[[Rule](#schemarule)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="update-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|400|Bad Request|Bad Request|[APIErrorResponse](#schemaapierrorresponse)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Delete a connection

<a id="opIddeleteConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /connections/{id}`

<h3 id="delete-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="delete-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|Inline|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<h3 id="delete-a-connection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the connection|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable a connection

<a id="opIddisableConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string/disable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /connections/{id}/disable`

<h3 id="disable-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Disable a connection

<a id="opIddisableConnection_archive"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string/archive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /connections/{id}/archive`

<h3 id="disable-a-connection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="disable-a-connection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable a connection

<a id="opIdenableConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /connections/{id}/enable`

<h3 id="enable-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Enable a connection

<a id="opIdenableConnection_unarchive"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string/unarchive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /connections/{id}/unarchive`

<h3 id="enable-a-connection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="enable-a-connection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Pause a connection

<a id="opIdpauseConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string/pause \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /connections/{id}/pause`

<h3 id="pause-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="pause-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

## Unpause a connection

<a id="opIdunpauseConnection"></a>

> Code samples

```bash
curl https://api.hookdeck.com/2024-09-01/connections/string/unpause \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /connections/{id}/unpause`

<h3 id="unpause-a-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

<h3 id="unpause-a-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single connection|[Connection](#schemaconnection)|
|404|Not Found|Not Found|[APIErrorResponse](#schemaapierrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, basicAuth
</aside>

# Schemas

<h2 id="tocS_OrderByDirection">OrderByDirection</h2>
<!-- backwards compatibility -->
<a id="schemaorderbydirection"></a>
<a id="schema_OrderByDirection"></a>
<a id="tocSorderbydirection"></a>
<a id="tocsorderbydirection"></a>

```json
"asc"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string|false|none|none|
|*anyOf*|string|false|none|none|
|*anyOf*|string|false|none|none|
|*anyOf*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anyOf*|asc|
|*anyOf*|desc|
|*anyOf*|ASC|
|*anyOf*|DESC|

<h2 id="tocS_SeekPagination">SeekPagination</h2>
<!-- backwards compatibility -->
<a id="schemaseekpagination"></a>
<a id="schema_SeekPagination"></a>
<a id="tocSseekpagination"></a>
<a id="tocsseekpagination"></a>

```json
{
  "order_by": "string",
  "dir": "asc",
  "limit": 0,
  "prev": "string",
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_by|string \| [string]|false|none|none|
|dir|[OrderByDirection](#schemaorderbydirection) \| [[OrderByDirection](#schemaorderbydirection)]|false|none|none|
|limit|integer|false|none|none|
|prev|string|false|none|none|
|next|string|false|none|none|

<h2 id="tocS_IssueType">IssueType</h2>
<!-- backwards compatibility -->
<a id="schemaissuetype"></a>
<a id="schema_IssueType"></a>
<a id="tocSissuetype"></a>
<a id="tocsissuetype"></a>

```json
"delivery"
```

Issue type

<h2 id="tocS_IssueTriggerStrategy">IssueTriggerStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerstrategy"></a>
<a id="schema_IssueTriggerStrategy"></a>
<a id="tocSissuetriggerstrategy"></a>
<a id="tocsissuetriggerstrategy"></a>

```json
"first_attempt"
```

The strategy uses to open the issue

<h2 id="tocS_IssueTriggerDeliveryConfigs">IssueTriggerDeliveryConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerdeliveryconfigs"></a>
<a id="schema_IssueTriggerDeliveryConfigs"></a>
<a id="tocSissuetriggerdeliveryconfigs"></a>
<a id="tocsissuetriggerdeliveryconfigs"></a>

```json
{
  "strategy": "first_attempt",
  "connections": "string"
}
```

Configurations for a 'delivery' issue trigger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|strategy|[IssueTriggerStrategy](#schemaissuetriggerstrategy)|true|none|The strategy uses to open the issue|
|connections|string \| [string]|true|none|A pattern to match on the connection name or array of connection IDs. Use `*` as wildcard.|

#### Enumerated Values

|Property|Value|
|---|---|
|strategy|first_attempt|
|strategy|final_attempt|

<h2 id="tocS_TransformationExecutionLogLevel">TransformationExecutionLogLevel</h2>
<!-- backwards compatibility -->
<a id="schematransformationexecutionloglevel"></a>
<a id="schema_TransformationExecutionLogLevel"></a>
<a id="tocStransformationexecutionloglevel"></a>
<a id="tocstransformationexecutionloglevel"></a>

```json
"debug"
```

The minimum log level to open the issue on

<h2 id="tocS_IssueTriggerTransformationConfigs">IssueTriggerTransformationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggertransformationconfigs"></a>
<a id="schema_IssueTriggerTransformationConfigs"></a>
<a id="tocSissuetriggertransformationconfigs"></a>
<a id="tocsissuetriggertransformationconfigs"></a>

```json
{
  "log_level": "debug",
  "transformations": "string"
}
```

Configurations for a 'Transformation' issue trigger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log_level|[TransformationExecutionLogLevel](#schematransformationexecutionloglevel)|true|none|The minimum log level to open the issue on|
|transformations|string \| [string]|true|none|A pattern to match on the transformation name or array of transformation IDs. Use `*` as wildcard.|

#### Enumerated Values

|Property|Value|
|---|---|
|log_level|debug|
|log_level|info|
|log_level|warn|
|log_level|error|
|log_level|fatal|

<h2 id="tocS_IssueTriggerBackpressureDelay">IssueTriggerBackpressureDelay</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerbackpressuredelay"></a>
<a id="schema_IssueTriggerBackpressureDelay"></a>
<a id="tocSissuetriggerbackpressuredelay"></a>
<a id="tocsissuetriggerbackpressuredelay"></a>

```json
60000
```

The minimum delay (backpressure) to open the issue for min of 1 minute (60000) and max of 1 day (86400000)

<h2 id="tocS_IssueTriggerBackpressureConfigs">IssueTriggerBackpressureConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerbackpressureconfigs"></a>
<a id="schema_IssueTriggerBackpressureConfigs"></a>
<a id="tocSissuetriggerbackpressureconfigs"></a>
<a id="tocsissuetriggerbackpressureconfigs"></a>

```json
{
  "delay": 60000,
  "destinations": "string"
}
```

Configurations for a 'Backpressure' issue trigger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|[IssueTriggerBackpressureDelay](#schemaissuetriggerbackpressuredelay)|true|none|The minimum delay (backpressure) to open the issue for min of 1 minute (60000) and max of 1 day (86400000)|
|destinations|string \| [string]|true|none|A pattern to match on the destination name or array of destination IDs. Use `*` as wildcard.|

<h2 id="tocS_IssueTriggerReference">IssueTriggerReference</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerreference"></a>
<a id="schema_IssueTriggerReference"></a>
<a id="tocSissuetriggerreference"></a>
<a id="tocsissuetriggerreference"></a>

```json
{
  "strategy": "first_attempt",
  "connections": "string"
}
```

Configuration object for the specific issue type selected

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[IssueTriggerDeliveryConfigs](#schemaissuetriggerdeliveryconfigs)|false|none|Configurations for a 'delivery' issue trigger|
|*anyOf*|[IssueTriggerTransformationConfigs](#schemaissuetriggertransformationconfigs)|false|none|Configurations for a 'Transformation' issue trigger|
|*anyOf*|[IssueTriggerBackpressureConfigs](#schemaissuetriggerbackpressureconfigs)|false|none|Configurations for a 'Backpressure' issue trigger|

<h2 id="tocS_IssueTriggerSlackChannel">IssueTriggerSlackChannel</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerslackchannel"></a>
<a id="schema_IssueTriggerSlackChannel"></a>
<a id="tocSissuetriggerslackchannel"></a>
<a id="tocsissuetriggerslackchannel"></a>

```json
{
  "channel_name": "string"
}
```

Slack channel for an issue trigger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_name|string|true|none|Channel name|

<h2 id="tocS_IssueTriggerIntegrationChannel">IssueTriggerIntegrationChannel</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerintegrationchannel"></a>
<a id="schema_IssueTriggerIntegrationChannel"></a>
<a id="tocSissuetriggerintegrationchannel"></a>
<a id="tocsissuetriggerintegrationchannel"></a>

```json
{}
```

Integration channel for an issue trigger

<h2 id="tocS_IssueTriggerEmailChannel">IssueTriggerEmailChannel</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggeremailchannel"></a>
<a id="schema_IssueTriggerEmailChannel"></a>
<a id="tocSissuetriggeremailchannel"></a>
<a id="tocsissuetriggeremailchannel"></a>

```json
{}
```

Email channel for an issue trigger

<h2 id="tocS_IssueTriggerChannels">IssueTriggerChannels</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerchannels"></a>
<a id="schema_IssueTriggerChannels"></a>
<a id="tocSissuetriggerchannels"></a>
<a id="tocsissuetriggerchannels"></a>

```json
{
  "slack": {
    "channel_name": "string"
  },
  "opsgenie": {},
  "email": {}
}
```

Notification channels object for the specific channel type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|slack|[IssueTriggerSlackChannel](#schemaissuetriggerslackchannel)|false|none|Slack channel for an issue trigger|
|opsgenie|[IssueTriggerIntegrationChannel](#schemaissuetriggerintegrationchannel)|false|none|Integration channel for an issue trigger|
|email|[IssueTriggerEmailChannel](#schemaissuetriggeremailchannel)|false|none|Email channel for an issue trigger|

<h2 id="tocS_IssueTrigger">IssueTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaissuetrigger"></a>
<a id="schema_IssueTrigger"></a>
<a id="tocSissuetrigger"></a>
<a id="tocsissuetrigger"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "type": "delivery",
  "configs": {
    "strategy": "first_attempt",
    "connections": "string"
  },
  "channels": {
    "slack": {
      "channel_name": "string"
    },
    "opsgenie": {},
    "email": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "deleted_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the issue trigger|
|team_id|string \| null|false|none|ID of the project|
|name|string \| null|false|none|Optional unique name to use as reference when using the API|
|type|[IssueType](#schemaissuetype)|true|none|Issue type|
|configs|[IssueTriggerReference](#schemaissuetriggerreference)|true|none|Configuration object for the specific issue type selected|
|channels|[IssueTriggerChannels](#schemaissuetriggerchannels)|false|none|Notification channels object for the specific channel type|
|disabled_at|string(date-time) \| null|false|none|ISO timestamp for when the issue trigger was disabled|
|updated_at|string(date-time)|true|none|ISO timestamp for when the issue trigger was last updated|
|created_at|string(date-time)|true|none|ISO timestamp for when the issue trigger was created|
|deleted_at|string(date-time) \| null|false|none|ISO timestamp for when the issue trigger was deleted|

#### Enumerated Values

|Property|Value|
|---|---|
|type|delivery|
|type|transformation|
|type|backpressure|

<h2 id="tocS_IssueTriggerPaginatedResult">IssueTriggerPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaissuetriggerpaginatedresult"></a>
<a id="schema_IssueTriggerPaginatedResult"></a>
<a id="tocSissuetriggerpaginatedresult"></a>
<a id="tocsissuetriggerpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "name": "string",
      "type": "delivery",
      "configs": {
        "strategy": "first_attempt",
        "connections": "string"
      },
      "channels": {
        "slack": {
          "channel_name": "string"
        },
        "opsgenie": {},
        "email": {}
      },
      "disabled_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "deleted_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[IssueTrigger](#schemaissuetrigger)]|false|none|none|

<h2 id="tocS_APIErrorResponse">APIErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapierrorresponse"></a>
<a id="schema_APIErrorResponse"></a>
<a id="tocSapierrorresponse"></a>
<a id="tocsapierrorresponse"></a>

```json
{
  "code": "string",
  "status": 0,
  "message": "string",
  "data": {}
}
```

Error response model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Error code|
|status|number(float)|true|none|Status code|
|message|string|true|none|Error description|
|data|object \| null|false|none|none|

<h2 id="tocS_Operators">Operators</h2>
<!-- backwards compatibility -->
<a id="schemaoperators"></a>
<a id="schema_Operators"></a>
<a id="tocSoperators"></a>
<a id="tocsoperators"></a>

```json
{
  "gt": "1970-01-01T00:00:00Z",
  "gte": "1970-01-01T00:00:00Z",
  "le": "1970-01-01T00:00:00Z",
  "lte": "1970-01-01T00:00:00Z",
  "any": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gt|string(date-time) \| null|false|none|none|
|gte|string(date-time) \| null|false|none|none|
|le|string(date-time) \| null|false|none|none|
|lte|string(date-time) \| null|false|none|none|
|any|boolean|false|none|none|

<h2 id="tocS_DeletedIssueTriggerResponse">DeletedIssueTriggerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedissuetriggerresponse"></a>
<a id="schema_DeletedIssueTriggerResponse"></a>
<a id="tocSdeletedissuetriggerresponse"></a>
<a id="tocsdeletedissuetriggerresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_AttemptTrigger">AttemptTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaattempttrigger"></a>
<a id="schema_AttemptTrigger"></a>
<a id="tocSattempttrigger"></a>
<a id="tocsattempttrigger"></a>

```json
"INITIAL"
```

How the attempt was triggered

<h2 id="tocS_AttemptErrorCodes">AttemptErrorCodes</h2>
<!-- backwards compatibility -->
<a id="schemaattempterrorcodes"></a>
<a id="schema_AttemptErrorCodes"></a>
<a id="tocSattempterrorcodes"></a>
<a id="tocsattempterrorcodes"></a>

```json
"CANCELLED"
```

Error code of the delivery attempt

<h2 id="tocS_AttemptStatus">AttemptStatus</h2>
<!-- backwards compatibility -->
<a id="schemaattemptstatus"></a>
<a id="schema_AttemptStatus"></a>
<a id="tocSattemptstatus"></a>
<a id="tocsattemptstatus"></a>

```json
"FAILED"
```

Attempt status

<h2 id="tocS_EventAttempt">EventAttempt</h2>
<!-- backwards compatibility -->
<a id="schemaeventattempt"></a>
<a id="schema_EventAttempt"></a>
<a id="tocSeventattempt"></a>
<a id="tocseventattempt"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "event_id": "string",
  "destination_id": "string",
  "response_status": 0,
  "attempt_number": 0,
  "trigger": "INITIAL",
  "error_code": "CANCELLED",
  "body": {},
  "requested_url": "string",
  "http_method": "GET",
  "bulk_retry_id": "string",
  "status": "FAILED",
  "successful_at": "1970-01-01T00:00:00Z",
  "delivered_at": "1970-01-01T00:00:00Z",
  "responded_at": "1970-01-01T00:00:00Z",
  "delivery_latency": 0,
  "response_latency": 0,
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Attempt ID|
|team_id|string|true|none|ID of the project|
|event_id|string|true|none|Event ID|
|destination_id|string|true|none|Destination ID|
|response_status|integer \| null|false|none|Attempt's HTTP response code|
|attempt_number|integer \| null|false|none|Sequential number of attempts (up to and including this one) made for the associated event|
|trigger|[AttemptTrigger](#schemaattempttrigger)|false|none|How the attempt was triggered|
|error_code|[AttemptErrorCodes](#schemaattempterrorcodes)|false|none|Error code of the delivery attempt|
|body|object \| null \| string \| null|false|none|none|
|requested_url|string \| null|false|none|URL of the destination where delivery was attempted|
|http_method|string \| null|false|none|HTTP method used to deliver the attempt|
|bulk_retry_id|string \| null|false|none|ID of associated bulk retry|
|status|[AttemptStatus](#schemaattemptstatus)|true|none|Attempt status|
|successful_at|string(date-time) \| null|false|none|Date the attempt was successful|
|delivered_at|string(date-time) \| null|false|none|Date the attempt was delivered|
|responded_at|string(date-time) \| null|false|none|Date the destination responded to this attempt|
|delivery_latency|integer \| null|false|none|Time elapsed between attempt initiation and final delivery (in ms)|
|response_latency|integer \| null|false|none|Time elapsed between attempt initiation and a response from the destination (in ms)|
|updated_at|string(date-time)|true|none|Date the attempt was last updated|
|created_at|string(date-time)|true|none|Date the attempt was created|

#### Enumerated Values

|Property|Value|
|---|---|
|trigger|INITIAL|
|trigger|MANUAL|
|trigger|BULK_RETRY|
|trigger|UNPAUSE|
|trigger|AUTOMATIC|
|error_code|CANCELLED|
|error_code|TIMEOUT|
|error_code|NOT_FOUND|
|error_code|CONNECTION_REFUSED|
|error_code|CONNECTION_RESET|
|error_code|MISSING_URL|
|error_code|CLI|
|error_code|CLI_UNAVAILABLE|
|error_code|SELF_SIGNED_CERT|
|error_code|ERR_TLS_CERT_ALTNAME_INVALID|
|error_code|ERR_SSL_WRONG_VERSION_NUMBER|
|error_code|SSL_ERROR_CA_UNKNOWN|
|error_code|TTL_EXPIRED|
|error_code|DATA_ARCHIVED|
|error_code|SSL_CERT_EXPIRED|
|error_code|BULK_RETRY_CANCELLED|
|error_code|DNS_LOOKUP_FAILED|
|error_code|HOST_UNREACHABLE|
|error_code|PROTOCOL_ERROR|
|error_code|SOCKET_CLOSED|
|error_code|OAUTH2_HANDSHAKE_FAILED|
|error_code|UNKNOWN|
|http_method|GET|
|http_method|POST|
|http_method|PUT|
|http_method|PATCH|
|http_method|DELETE|
|status|FAILED|
|status|SUCCESSFUL|

<h2 id="tocS_EventAttemptPaginatedResult">EventAttemptPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaeventattemptpaginatedresult"></a>
<a id="schema_EventAttemptPaginatedResult"></a>
<a id="tocSeventattemptpaginatedresult"></a>
<a id="tocseventattemptpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "event_id": "string",
      "destination_id": "string",
      "response_status": 0,
      "attempt_number": 0,
      "trigger": "INITIAL",
      "error_code": "CANCELLED",
      "body": {},
      "requested_url": "string",
      "http_method": "GET",
      "bulk_retry_id": "string",
      "status": "FAILED",
      "successful_at": "1970-01-01T00:00:00Z",
      "delivered_at": "1970-01-01T00:00:00Z",
      "responded_at": "1970-01-01T00:00:00Z",
      "delivery_latency": 0,
      "response_latency": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[EventAttempt](#schemaeventattempt)]|false|none|none|

<h2 id="tocS_ShortEventData">ShortEventData</h2>
<!-- backwards compatibility -->
<a id="schemashorteventdata"></a>
<a id="schema_ShortEventData"></a>
<a id="tocSshorteventdata"></a>
<a id="tocsshorteventdata"></a>

```json
{
  "path": "string",
  "query": "string",
  "parsed_query": "string",
  "headers": "string",
  "body": "string",
  "is_large_payload": true
}
```

Request data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|Request path|
|query|string \| null|true|none|Raw query param string|
|parsed_query|string \| null \| object|true|none|JSON representation of query params|
|headers|string \| object \| null|true|none|JSON representation of the headers|
|body|string \| object \| [object] \| null|true|none|JSON or string representation of the body|
|is_large_payload|boolean \| null|false|none|Whether the payload is considered large payload and not searchable|

<h2 id="tocS_Bookmark">Bookmark</h2>
<!-- backwards compatibility -->
<a id="schemabookmark"></a>
<a id="schema_Bookmark"></a>
<a id="tocSbookmark"></a>
<a id="tocsbookmark"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "event_data_id": "string",
  "label": "string",
  "alias": "string",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "last_used_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the bookmark|
|team_id|string|true|none|ID of the project|
|webhook_id|string|true|none|ID of the associated connection|
|event_data_id|string|true|none|ID of the bookmarked event data|
|label|string|true|none|Descriptive name of the bookmark|
|alias|string \| null|false|none|Alternate alias for the bookmark|
|data|[ShortEventData](#schemashorteventdata)|false|none|Request data|
|last_used_at|string(date-time) \| null|false|none|Date the bookmark was last manually triggered|
|updated_at|string(date-time)|true|none|Date the bookmark was last updated|
|created_at|string(date-time)|true|none|Date the bookmark was created|

<h2 id="tocS_BookmarkPaginatedResult">BookmarkPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemabookmarkpaginatedresult"></a>
<a id="schema_BookmarkPaginatedResult"></a>
<a id="tocSbookmarkpaginatedresult"></a>
<a id="tocsbookmarkpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "event_data_id": "string",
      "label": "string",
      "alias": "string",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "last_used_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Bookmark](#schemabookmark)]|false|none|none|

<h2 id="tocS_RawBody">RawBody</h2>
<!-- backwards compatibility -->
<a id="schemarawbody"></a>
<a id="schema_RawBody"></a>
<a id="tocSrawbody"></a>
<a id="tocsrawbody"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|true|none|none|

<h2 id="tocS_EventStatus">EventStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatus"></a>
<a id="schema_EventStatus"></a>
<a id="tocSeventstatus"></a>
<a id="tocseventstatus"></a>

```json
"SCHEDULED"
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "source_id": "string",
  "destination_id": "string",
  "event_data_id": "string",
  "request_id": "string",
  "attempts": 0,
  "last_attempt_at": "1970-01-01T00:00:00Z",
  "next_attempt_at": "1970-01-01T00:00:00Z",
  "response_status": 0,
  "error_code": "CANCELLED",
  "status": "SCHEDULED",
  "successful_at": "1970-01-01T00:00:00Z",
  "cli_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the event|
|team_id|string|true|none|ID of the project|
|webhook_id|string|true|none|ID of the associated connection|
|source_id|string|true|none|ID of the associated source|
|destination_id|string|true|none|ID of the associated destination|
|event_data_id|string|true|none|ID of the event data|
|request_id|string|true|none|ID of the request that created the event|
|attempts|integer|true|none|Number of delivery attempts made|
|last_attempt_at|string(date-time) \| null|true|none|Date of the most recently attempted retry|
|next_attempt_at|string(date-time) \| null|true|none|Date of the next scheduled retry|
|response_status|integer \| null|false|none|Event status|
|error_code|[AttemptErrorCodes](#schemaattempterrorcodes)|false|none|Error code of the delivery attempt|
|status|[EventStatus](#schemaeventstatus)|true|none|none|
|successful_at|string(date-time) \| null|true|none|Date of the latest successful attempt|
|cli_id|string \| null|true|none|ID of the CLI the event is sent to|
|updated_at|string(date-time)|true|none|Date the event was last updated|
|created_at|string(date-time)|true|none|Date the event was created|
|data|[ShortEventData](#schemashorteventdata)|false|none|Request data|

#### Enumerated Values

|Property|Value|
|---|---|
|error_code|CANCELLED|
|error_code|TIMEOUT|
|error_code|NOT_FOUND|
|error_code|CONNECTION_REFUSED|
|error_code|CONNECTION_RESET|
|error_code|MISSING_URL|
|error_code|CLI|
|error_code|CLI_UNAVAILABLE|
|error_code|SELF_SIGNED_CERT|
|error_code|ERR_TLS_CERT_ALTNAME_INVALID|
|error_code|ERR_SSL_WRONG_VERSION_NUMBER|
|error_code|SSL_ERROR_CA_UNKNOWN|
|error_code|TTL_EXPIRED|
|error_code|DATA_ARCHIVED|
|error_code|SSL_CERT_EXPIRED|
|error_code|BULK_RETRY_CANCELLED|
|error_code|DNS_LOOKUP_FAILED|
|error_code|HOST_UNREACHABLE|
|error_code|PROTOCOL_ERROR|
|error_code|SOCKET_CLOSED|
|error_code|OAUTH2_HANDSHAKE_FAILED|
|error_code|UNKNOWN|
|status|SCHEDULED|
|status|QUEUED|
|status|HOLD|
|status|SUCCESSFUL|
|status|FAILED|

<h2 id="tocS_EventArray">EventArray</h2>
<!-- backwards compatibility -->
<a id="schemaeventarray"></a>
<a id="schema_EventArray"></a>
<a id="tocSeventarray"></a>
<a id="tocseventarray"></a>

```json
[
  {
    "id": "string",
    "team_id": "string",
    "webhook_id": "string",
    "source_id": "string",
    "destination_id": "string",
    "event_data_id": "string",
    "request_id": "string",
    "attempts": 0,
    "last_attempt_at": "1970-01-01T00:00:00Z",
    "next_attempt_at": "1970-01-01T00:00:00Z",
    "response_status": 0,
    "error_code": "CANCELLED",
    "status": "SCHEDULED",
    "successful_at": "1970-01-01T00:00:00Z",
    "cli_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    }
  }
]
```

<h2 id="tocS_DeletedBookmarkResponse">DeletedBookmarkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedbookmarkresponse"></a>
<a id="schema_DeletedBookmarkResponse"></a>
<a id="tocSdeletedbookmarkresponse"></a>
<a id="tocsdeletedbookmarkresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Bookmark ID|

<h2 id="tocS_DestinationRateLimitPeriod">DestinationRateLimitPeriod</h2>
<!-- backwards compatibility -->
<a id="schemadestinationratelimitperiod"></a>
<a id="schema_DestinationRateLimitPeriod"></a>
<a id="tocSdestinationratelimitperiod"></a>
<a id="tocsdestinationratelimitperiod"></a>

```json
"second"
```

Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.

<h2 id="tocS_DestinationHTTPMethod">DestinationHTTPMethod</h2>
<!-- backwards compatibility -->
<a id="schemadestinationhttpmethod"></a>
<a id="schema_DestinationHTTPMethod"></a>
<a id="tocSdestinationhttpmethod"></a>
<a id="tocsdestinationhttpmethod"></a>

```json
"GET"
```

HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.

<h2 id="tocS_DestinationAuthMethodSignatureConfig">DestinationAuthMethodSignatureConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodsignatureconfig"></a>
<a id="schema_DestinationAuthMethodSignatureConfig"></a>
<a id="tocSdestinationauthmethodsignatureconfig"></a>
<a id="tocsdestinationauthmethodsignatureconfig"></a>

```json
{}
```

Empty config for the destination's auth method

<h2 id="tocS_AuthHookdeckSignature">AuthHookdeckSignature</h2>
<!-- backwards compatibility -->
<a id="schemaauthhookdecksignature"></a>
<a id="schema_AuthHookdeckSignature"></a>
<a id="tocSauthhookdecksignature"></a>
<a id="tocsauthhookdecksignature"></a>

```json
{
  "type": "HOOKDECK_SIGNATURE",
  "config": {}
}
```

Hookdeck Signature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodSignatureConfig](#schemadestinationauthmethodsignatureconfig)|false|none|Empty config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOOKDECK_SIGNATURE|

<h2 id="tocS_DestinationAuthMethodBasicAuthConfig">DestinationAuthMethodBasicAuthConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodbasicauthconfig"></a>
<a id="schema_DestinationAuthMethodBasicAuthConfig"></a>
<a id="tocSdestinationauthmethodbasicauthconfig"></a>
<a id="tocsdestinationauthmethodbasicauthconfig"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

Basic auth config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Username for basic auth|
|password|string|true|none|Password for basic auth|

<h2 id="tocS_AuthBasicAuth">AuthBasicAuth</h2>
<!-- backwards compatibility -->
<a id="schemaauthbasicauth"></a>
<a id="schema_AuthBasicAuth"></a>
<a id="tocSauthbasicauth"></a>
<a id="tocsauthbasicauth"></a>

```json
{
  "type": "BASIC_AUTH",
  "config": {
    "username": "string",
    "password": "string"
  }
}
```

Basic Auth

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodBasicAuthConfig](#schemadestinationauthmethodbasicauthconfig)|false|none|Basic auth config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BASIC_AUTH|

<h2 id="tocS_DestinationAuthMethodApiKeyConfig">DestinationAuthMethodApiKeyConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodapikeyconfig"></a>
<a id="schema_DestinationAuthMethodApiKeyConfig"></a>
<a id="tocSdestinationauthmethodapikeyconfig"></a>
<a id="tocsdestinationauthmethodapikeyconfig"></a>

```json
{
  "key": "string",
  "api_key": "string",
  "to": "header"
}
```

API key config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Key for the API key auth|
|api_key|string|true|none|API key for the API key auth|
|to|string|false|none|Whether the API key should be sent as a header or a query parameter|

#### Enumerated Values

|Property|Value|
|---|---|
|to|header|
|to|query|

<h2 id="tocS_AuthAPIKey">AuthAPIKey</h2>
<!-- backwards compatibility -->
<a id="schemaauthapikey"></a>
<a id="schema_AuthAPIKey"></a>
<a id="tocSauthapikey"></a>
<a id="tocsauthapikey"></a>

```json
{
  "type": "API_KEY",
  "config": {
    "key": "string",
    "api_key": "string",
    "to": "header"
  }
}
```

API Key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodApiKeyConfig](#schemadestinationauthmethodapikeyconfig)|false|none|API key config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|API_KEY|

<h2 id="tocS_DestinationAuthMethodBearerTokenConfig">DestinationAuthMethodBearerTokenConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodbearertokenconfig"></a>
<a id="schema_DestinationAuthMethodBearerTokenConfig"></a>
<a id="tocSdestinationauthmethodbearertokenconfig"></a>
<a id="tocsdestinationauthmethodbearertokenconfig"></a>

```json
{
  "token": "string"
}
```

Bearer token config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|Token for the bearer token auth|

<h2 id="tocS_AuthBearerToken">AuthBearerToken</h2>
<!-- backwards compatibility -->
<a id="schemaauthbearertoken"></a>
<a id="schema_AuthBearerToken"></a>
<a id="tocSauthbearertoken"></a>
<a id="tocsauthbearertoken"></a>

```json
{
  "type": "BEARER_TOKEN",
  "config": {
    "token": "string"
  }
}
```

Bearer Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodBearerTokenConfig](#schemadestinationauthmethodbearertokenconfig)|false|none|Bearer token config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BEARER_TOKEN|

<h2 id="tocS_DestinationAuthMethodOAuth2ClientCredentialsConfig">DestinationAuthMethodOAuth2ClientCredentialsConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodoauth2clientcredentialsconfig"></a>
<a id="schema_DestinationAuthMethodOAuth2ClientCredentialsConfig"></a>
<a id="tocSdestinationauthmethodoauth2clientcredentialsconfig"></a>
<a id="tocsdestinationauthmethodoauth2clientcredentialsconfig"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "scope": "string",
  "auth_server": "string",
  "authentication_type": "basic"
}
```

OAuth2 Client Credentials config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|Client id in the auth server|
|client_secret|string|true|none|Client secret in the auth server|
|scope|string \| null|false|none|Scope to access|
|auth_server|string(URL)|true|none|URL of the auth server|
|authentication_type|string|false|none|Basic (default), Bearer Authentication or x-www-form-urlencoded|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_type|basic|
|authentication_type|bearer|
|authentication_type|x-www-form-urlencoded|

<h2 id="tocS_AuthOAuth2ClientCredentials">AuthOAuth2ClientCredentials</h2>
<!-- backwards compatibility -->
<a id="schemaauthoauth2clientcredentials"></a>
<a id="schema_AuthOAuth2ClientCredentials"></a>
<a id="tocSauthoauth2clientcredentials"></a>
<a id="tocsauthoauth2clientcredentials"></a>

```json
{
  "type": "OAUTH2_CLIENT_CREDENTIALS",
  "config": {
    "client_id": "string",
    "client_secret": "string",
    "scope": "string",
    "auth_server": "string",
    "authentication_type": "basic"
  }
}
```

OAuth2 Client Credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodOAuth2ClientCredentialsConfig](#schemadestinationauthmethodoauth2clientcredentialsconfig)|false|none|OAuth2 Client Credentials config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2_CLIENT_CREDENTIALS|

<h2 id="tocS_DestinationAuthMethodOAuth2AuthorizationCodeConfig">DestinationAuthMethodOAuth2AuthorizationCodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodoauth2authorizationcodeconfig"></a>
<a id="schema_DestinationAuthMethodOAuth2AuthorizationCodeConfig"></a>
<a id="tocSdestinationauthmethodoauth2authorizationcodeconfig"></a>
<a id="tocsdestinationauthmethodoauth2authorizationcodeconfig"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "refresh_token": "string",
  "scope": "string",
  "auth_server": "string"
}
```

OAuth2 Authorization Code config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|Client id in the auth server|
|client_secret|string|true|none|Client secret in the auth server|
|refresh_token|string|true|none|Refresh token already returned by the auth server|
|scope|string \| null|false|none|Scope to access|
|auth_server|string(URL)|true|none|URL of the auth server|

<h2 id="tocS_AuthOAuth2AuthorizationCode">AuthOAuth2AuthorizationCode</h2>
<!-- backwards compatibility -->
<a id="schemaauthoauth2authorizationcode"></a>
<a id="schema_AuthOAuth2AuthorizationCode"></a>
<a id="tocSauthoauth2authorizationcode"></a>
<a id="tocsauthoauth2authorizationcode"></a>

```json
{
  "type": "OAUTH2_AUTHORIZATION_CODE",
  "config": {
    "client_id": "string",
    "client_secret": "string",
    "refresh_token": "string",
    "scope": "string",
    "auth_server": "string"
  }
}
```

OAuth2 Authorization Code

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodOAuth2AuthorizationCodeConfig](#schemadestinationauthmethodoauth2authorizationcodeconfig)|false|none|OAuth2 Authorization Code config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OAUTH2_AUTHORIZATION_CODE|

<h2 id="tocS_DestinationAuthMethodCustomSignatureConfig">DestinationAuthMethodCustomSignatureConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodcustomsignatureconfig"></a>
<a id="schema_DestinationAuthMethodCustomSignatureConfig"></a>
<a id="tocSdestinationauthmethodcustomsignatureconfig"></a>
<a id="tocsdestinationauthmethodcustomsignatureconfig"></a>

```json
{
  "key": "string",
  "signing_secret": "string"
}
```

Custom signature config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Key for the custom signature auth|
|signing_secret|string|false|none|Signing secret for the custom signature auth. If left empty a secret will be generated for you.|

<h2 id="tocS_AuthCustomSignature">AuthCustomSignature</h2>
<!-- backwards compatibility -->
<a id="schemaauthcustomsignature"></a>
<a id="schema_AuthCustomSignature"></a>
<a id="tocSauthcustomsignature"></a>
<a id="tocsauthcustomsignature"></a>

```json
{
  "type": "CUSTOM_SIGNATURE",
  "config": {
    "key": "string",
    "signing_secret": "string"
  }
}
```

Custom Signature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodCustomSignatureConfig](#schemadestinationauthmethodcustomsignatureconfig)|true|none|Custom signature config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CUSTOM_SIGNATURE|

<h2 id="tocS_DestinationAuthMethodAwsSignatureConfig">DestinationAuthMethodAwsSignatureConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodawssignatureconfig"></a>
<a id="schema_DestinationAuthMethodAwsSignatureConfig"></a>
<a id="tocSdestinationauthmethodawssignatureconfig"></a>
<a id="tocsdestinationauthmethodawssignatureconfig"></a>

```json
{
  "access_key_id": "string",
  "secret_access_key": "string",
  "region": "string",
  "service": "string"
}
```

AWS Signature config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_key_id|string|true|none|AWS access key id|
|secret_access_key|string|true|none|AWS secret access key|
|region|string \| null|false|none|AWS region|
|service|string \| null|false|none|AWS service|

<h2 id="tocS_AuthAwsSignature">AuthAwsSignature</h2>
<!-- backwards compatibility -->
<a id="schemaauthawssignature"></a>
<a id="schema_AuthAwsSignature"></a>
<a id="tocSauthawssignature"></a>
<a id="tocsauthawssignature"></a>

```json
{
  "type": "AWS_SIGNATURE",
  "config": {
    "access_key_id": "string",
    "secret_access_key": "string",
    "region": "string",
    "service": "string"
  }
}
```

AWS Signature

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of auth method|
|config|[DestinationAuthMethodAwsSignatureConfig](#schemadestinationauthmethodawssignatureconfig)|false|none|AWS Signature config for the destination's auth method|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AWS_SIGNATURE|

<h2 id="tocS_DestinationAuthMethodConfig">DestinationAuthMethodConfig</h2>
<!-- backwards compatibility -->
<a id="schemadestinationauthmethodconfig"></a>
<a id="schema_DestinationAuthMethodConfig"></a>
<a id="tocSdestinationauthmethodconfig"></a>
<a id="tocsdestinationauthmethodconfig"></a>

```json
{
  "type": "HOOKDECK_SIGNATURE",
  "config": {}
}
```

Config for the destination's auth method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[AuthHookdeckSignature](#schemaauthhookdecksignature)|false|none|Hookdeck Signature|
|*anyOf*|[AuthBasicAuth](#schemaauthbasicauth)|false|none|Basic Auth|
|*anyOf*|[AuthAPIKey](#schemaauthapikey)|false|none|API Key|
|*anyOf*|[AuthBearerToken](#schemaauthbearertoken)|false|none|Bearer Token|
|*anyOf*|[AuthOAuth2ClientCredentials](#schemaauthoauth2clientcredentials)|false|none|OAuth2 Client Credentials|
|*anyOf*|[AuthOAuth2AuthorizationCode](#schemaauthoauth2authorizationcode)|false|none|OAuth2 Authorization Code|
|*anyOf*|[AuthCustomSignature](#schemaauthcustomsignature)|false|none|Custom Signature|
|*anyOf*|[AuthAwsSignature](#schemaauthawssignature)|false|none|AWS Signature|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "path_forwarding_disabled": true,
  "url": "string",
  "cli_path": "string",
  "rate_limit": 0,
  "rate_limit_period": "second",
  "http_method": "GET",
  "auth_method": {
    "type": "HOOKDECK_SIGNATURE",
    "config": {}
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

Associated [Destination](#destination-object) object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the destination|
|name|string|true|none|A unique, human-friendly name for the destination|
|description|string \| null|false|none|Description of the destination|
|team_id|string|true|none|ID of the project|
|path_forwarding_disabled|boolean \| null|false|none|none|
|url|string(URL) \| null|false|none|HTTP endpoint of the destination|
|cli_path|string \| null|false|none|Path for the CLI destination|
|rate_limit|integer \| null|false|none|Limit of events to receive per period. Refered as Delivery Rate limit in the dashboard and documentation.|
|rate_limit_period|[DestinationRateLimitPeriod](#schemadestinationratelimitperiod)|false|none|Period to rate limit events by. Refered as Delivery Rate period in the dashboard and documentation.|
|http_method|[DestinationHTTPMethod](#schemadestinationhttpmethod)|false|none|HTTP method used on requests sent to the destination, overrides the method used on requests sent to the source.|
|auth_method|[DestinationAuthMethodConfig](#schemadestinationauthmethodconfig)|false|none|Config for the destination's auth method|
|disabled_at|string(date-time) \| null|true|none|Date the destination was disabled|
|updated_at|string(date-time)|true|none|Date the destination was last updated|
|created_at|string(date-time)|true|none|Date the destination was created|

#### Enumerated Values

|Property|Value|
|---|---|
|rate_limit_period|second|
|rate_limit_period|minute|
|rate_limit_period|hour|
|rate_limit_period|concurrent|
|http_method|GET|
|http_method|POST|
|http_method|PUT|
|http_method|PATCH|
|http_method|DELETE|

<h2 id="tocS_DestinationPaginatedResult">DestinationPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemadestinationpaginatedresult"></a>
<a id="schema_DestinationPaginatedResult"></a>
<a id="tocSdestinationpaginatedresult"></a>
<a id="tocsdestinationpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "team_id": "string",
      "path_forwarding_disabled": true,
      "url": "string",
      "cli_path": "string",
      "rate_limit": 0,
      "rate_limit_period": "second",
      "http_method": "GET",
      "auth_method": {
        "type": "HOOKDECK_SIGNATURE",
        "config": {}
      },
      "disabled_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Destination](#schemadestination)]|false|none|none|

<h2 id="tocS_BatchOperation">BatchOperation</h2>
<!-- backwards compatibility -->
<a id="schemabatchoperation"></a>
<a id="schema_BatchOperation"></a>
<a id="tocSbatchoperation"></a>
<a id="tocsbatchoperation"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "query": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "cancelled_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "estimated_batch": 0,
  "estimated_count": 0,
  "processed_batch": 0,
  "completed_count": 0,
  "in_progress": true,
  "progress": 0,
  "failed_count": 0,
  "number": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the bulk retry|
|team_id|string|true|none|ID of the project|
|query|object \| string \| null|false|none|Query object to filter records|
|created_at|string(date-time)|true|none|Date the bulk retry was created|
|updated_at|string(date-time)|true|none|Last time the bulk retry was updated|
|cancelled_at|string(date-time) \| null|false|none|Date the bulk retry was cancelled|
|completed_at|string(date-time) \| null|false|none|Date the bulk retry was completed|
|estimated_batch|integer \| null|false|none|Number of batches required to complete the bulk retry|
|estimated_count|integer \| null|false|none|Number of estimated events to be retried|
|processed_batch|integer \| null|false|none|Number of batches currently processed|
|completed_count|integer \| null|false|none|Number of events that were successfully delivered|
|in_progress|boolean|true|none|Indicates if the bulk retry is currently in progress|
|progress|number(float) \| null|false|none|Progression of the batch operations, values 0 - 1|
|failed_count|integer \| null|false|none|Number of events that failed to be delivered|
|number|number(float) \| null|false|none|none|

<h2 id="tocS_BatchOperationPaginatedResult">BatchOperationPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchoperationpaginatedresult"></a>
<a id="schema_BatchOperationPaginatedResult"></a>
<a id="tocSbatchoperationpaginatedresult"></a>
<a id="tocsbatchoperationpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "query": {
        "property1": null,
        "property2": null
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "cancelled_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "estimated_batch": 0,
      "estimated_count": 0,
      "processed_batch": 0,
      "completed_count": 0,
      "in_progress": true,
      "progress": 0,
      "failed_count": 0,
      "number": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[BatchOperation](#schemabatchoperation)]|false|none|none|

<h2 id="tocS_EventPaginatedResult">EventPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaeventpaginatedresult"></a>
<a id="schema_EventPaginatedResult"></a>
<a id="tocSeventpaginatedresult"></a>
<a id="tocseventpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Event](#schemaevent)]|false|none|none|

<h2 id="tocS_RetriedEvent">RetriedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaretriedevent"></a>
<a id="schema_RetriedEvent"></a>
<a id="tocSretriedevent"></a>
<a id="tocsretriedevent"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "source_id": "string",
  "destination_id": "string",
  "event_data_id": "string",
  "request_id": "string",
  "attempts": 0,
  "last_attempt_at": "1970-01-01T00:00:00Z",
  "next_attempt_at": "1970-01-01T00:00:00Z",
  "response_status": 0,
  "error_code": "CANCELLED",
  "status": "SCHEDULED",
  "successful_at": "1970-01-01T00:00:00Z",
  "cli_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the event|
|team_id|string|true|none|ID of the project|
|webhook_id|string|true|none|ID of the associated connection|
|source_id|string|true|none|ID of the associated source|
|destination_id|string|true|none|ID of the associated destination|
|event_data_id|string|true|none|ID of the event data|
|request_id|string|true|none|ID of the request that created the event|
|attempts|integer|true|none|Number of delivery attempts made|
|last_attempt_at|string(date-time) \| null|true|none|Date of the most recently attempted retry|
|next_attempt_at|string(date-time) \| null|true|none|Date of the next scheduled retry|
|response_status|integer \| null|false|none|Event status|
|error_code|[AttemptErrorCodes](#schemaattempterrorcodes)|false|none|Error code of the delivery attempt|
|status|[EventStatus](#schemaeventstatus)|true|none|none|
|successful_at|string(date-time) \| null|true|none|Date of the latest successful attempt|
|cli_id|string \| null|true|none|ID of the CLI the event is sent to|
|updated_at|string(date-time)|true|none|Date the event was last updated|
|created_at|string(date-time)|true|none|Date the event was created|
|data|[ShortEventData](#schemashorteventdata)|false|none|Request data|

#### Enumerated Values

|Property|Value|
|---|---|
|error_code|CANCELLED|
|error_code|TIMEOUT|
|error_code|NOT_FOUND|
|error_code|CONNECTION_REFUSED|
|error_code|CONNECTION_RESET|
|error_code|MISSING_URL|
|error_code|CLI|
|error_code|CLI_UNAVAILABLE|
|error_code|SELF_SIGNED_CERT|
|error_code|ERR_TLS_CERT_ALTNAME_INVALID|
|error_code|ERR_SSL_WRONG_VERSION_NUMBER|
|error_code|SSL_ERROR_CA_UNKNOWN|
|error_code|TTL_EXPIRED|
|error_code|DATA_ARCHIVED|
|error_code|SSL_CERT_EXPIRED|
|error_code|BULK_RETRY_CANCELLED|
|error_code|DNS_LOOKUP_FAILED|
|error_code|HOST_UNREACHABLE|
|error_code|PROTOCOL_ERROR|
|error_code|SOCKET_CLOSED|
|error_code|OAUTH2_HANDSHAKE_FAILED|
|error_code|UNKNOWN|
|status|SCHEDULED|
|status|QUEUED|
|status|HOLD|
|status|SUCCESSFUL|
|status|FAILED|

<h2 id="tocS_IntegrationProvider">IntegrationProvider</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationprovider"></a>
<a id="schema_IntegrationProvider"></a>
<a id="tocSintegrationprovider"></a>
<a id="tocsintegrationprovider"></a>

```json
"HMAC"
```

<h2 id="tocS_IntegrationFeature">IntegrationFeature</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationfeature"></a>
<a id="schema_IntegrationFeature"></a>
<a id="tocSintegrationfeature"></a>
<a id="tocsintegrationfeature"></a>

```json
"VERIFICATION"
```

<h2 id="tocS_HMACAlgorithms">HMACAlgorithms</h2>
<!-- backwards compatibility -->
<a id="schemahmacalgorithms"></a>
<a id="schema_HMACAlgorithms"></a>
<a id="tocShmacalgorithms"></a>
<a id="tocshmacalgorithms"></a>

```json
"md5"
```

<h2 id="tocS_HMACIntegrationConfigs">HMACIntegrationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemahmacintegrationconfigs"></a>
<a id="schema_HMACIntegrationConfigs"></a>
<a id="tocShmacintegrationconfigs"></a>
<a id="tocshmacintegrationconfigs"></a>

```json
{
  "webhook_secret_key": "string",
  "algorithm": "md5",
  "header_key": "string",
  "encoding": "base64"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|
|algorithm|[HMACAlgorithms](#schemahmacalgorithms)|true|none|none|
|header_key|string|true|none|none|
|encoding|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|md5|
|algorithm|sha1|
|algorithm|sha256|
|algorithm|sha512|
|encoding|base64|
|encoding|hex|

<h2 id="tocS_APIKeyIntegrationConfigs">APIKeyIntegrationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyintegrationconfigs"></a>
<a id="schema_APIKeyIntegrationConfigs"></a>
<a id="tocSapikeyintegrationconfigs"></a>
<a id="tocsapikeyintegrationconfigs"></a>

```json
{
  "header_key": "string",
  "api_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_key|string|true|none|none|
|api_key|string|true|none|none|

<h2 id="tocS_HandledAPIKeyIntegrationConfigs">HandledAPIKeyIntegrationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemahandledapikeyintegrationconfigs"></a>
<a id="schema_HandledAPIKeyIntegrationConfigs"></a>
<a id="tocShandledapikeyintegrationconfigs"></a>
<a id="tocshandledapikeyintegrationconfigs"></a>

```json
{
  "api_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|none|

<h2 id="tocS_HandledHMACConfigs">HandledHMACConfigs</h2>
<!-- backwards compatibility -->
<a id="schemahandledhmacconfigs"></a>
<a id="schema_HandledHMACConfigs"></a>
<a id="tocShandledhmacconfigs"></a>
<a id="tocshandledhmacconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_BasicAuthIntegrationConfigs">BasicAuthIntegrationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthintegrationconfigs"></a>
<a id="schema_BasicAuthIntegrationConfigs"></a>
<a id="tocSbasicauthintegrationconfigs"></a>
<a id="tocsbasicauthintegrationconfigs"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_ShopifyIntegrationConfigs">ShopifyIntegrationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemashopifyintegrationconfigs"></a>
<a id="schema_ShopifyIntegrationConfigs"></a>
<a id="tocSshopifyintegrationconfigs"></a>
<a id="tocsshopifyintegrationconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VercelLogDrainsIntegrationConfigs">VercelLogDrainsIntegrationConfigs</h2>
<!-- backwards compatibility -->
<a id="schemavercellogdrainsintegrationconfigs"></a>
<a id="schema_VercelLogDrainsIntegrationConfigs"></a>
<a id="tocSvercellogdrainsintegrationconfigs"></a>
<a id="tocsvercellogdrainsintegrationconfigs"></a>

```json
{
  "webhook_secret_key": "string",
  "vercel_log_drains_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string \| null|false|none|none|
|vercel_log_drains_secret|string|true|none|none|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "label": "string",
  "provider": "HMAC",
  "features": [
    "VERIFICATION"
  ],
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  },
  "sources": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the integration|
|team_id|string|true|none|ID of the project|
|label|string|true|none|Label of the integration|
|provider|[IntegrationProvider](#schemaintegrationprovider)|true|none|none|
|features|[[IntegrationFeature](#schemaintegrationfeature)]|true|none|List of features to enable (see features list below)|
|configs|[HMACIntegrationConfigs](#schemahmacintegrationconfigs) \| [APIKeyIntegrationConfigs](#schemaapikeyintegrationconfigs) \| [HandledAPIKeyIntegrationConfigs](#schemahandledapikeyintegrationconfigs) \| [HandledHMACConfigs](#schemahandledhmacconfigs) \| [BasicAuthIntegrationConfigs](#schemabasicauthintegrationconfigs) \| [ShopifyIntegrationConfigs](#schemashopifyintegrationconfigs) \| [VercelLogDrainsIntegrationConfigs](#schemavercellogdrainsintegrationconfigs) \| object|true|none|Decrypted Key/Value object of the associated configuration for that provider|
|sources|[string]|true|none|List of source IDs the integration is attached to|
|updated_at|string(date-time)|true|none|Date the integration was last updated|
|created_at|string(date-time)|true|none|Date the integration was created|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|HMAC|
|provider|BASIC_AUTH|
|provider|API_KEY|
|provider|BRIDGE|
|provider|CLOUDSIGNAL|
|provider|COURIER|
|provider|FRONTAPP|
|provider|TWITTER|
|provider|STRIPE|
|provider|RECHARGE|
|provider|TWILIO|
|provider|GITHUB|
|provider|SHOPIFY|
|provider|POSTMARK|
|provider|TYPEFORM|
|provider|XERO|
|provider|SVIX|
|provider|ZOOM|
|provider|AKENEO|
|provider|ADYEN|
|provider|GITLAB|
|provider|PROPERTY-FINDER|
|provider|WOOCOMMERCE|
|provider|OURA|
|provider|COMMERCELAYER|
|provider|HUBSPOT|
|provider|MAILGUN|
|provider|PERSONA|
|provider|PIPEDRIVE|
|provider|SENDGRID|
|provider|WORKOS|
|provider|SYNCTERA|
|provider|AWS_SNS|
|provider|THREE_D_EYE|
|provider|TWITCH|
|provider|ENODE|
|provider|FAVRO|
|provider|LINEAR|
|provider|SHOPLINE|
|provider|WIX|
|provider|NMI|
|provider|ORB|
|provider|PYLON|
|provider|REPAY|
|provider|SQUARE|
|provider|SOLIDGATE|
|provider|TRELLO|
|provider|SANITY|
|provider|EBAY|
|provider|TELNYX|
|provider|DISCORD|
|provider|TOKENIO|
|provider|FISERV|
|provider|BONDSMITH|
|provider|VERCEL_LOG_DRAINS|
|provider|VERCEL|
|provider|TEBEX|
|provider|SLACK|
|provider|RAZORPAY|
|provider|MAILCHIMP|
|provider|PADDLE|
|provider|PAYPAL|
|provider|TREEZOR|
|provider|PRAXIS|
|features|VERIFICATION|
|features|HANDSHAKE|

<h2 id="tocS_IntegrationPaginatedResult">IntegrationPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationpaginatedresult"></a>
<a id="schema_IntegrationPaginatedResult"></a>
<a id="tocSintegrationpaginatedresult"></a>
<a id="tocsintegrationpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "label": "string",
      "provider": "HMAC",
      "features": [
        "VERIFICATION"
      ],
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      },
      "sources": [
        "string"
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Integration](#schemaintegration)]|false|none|none|

<h2 id="tocS_AttachedIntegrationToSource">AttachedIntegrationToSource</h2>
<!-- backwards compatibility -->
<a id="schemaattachedintegrationtosource"></a>
<a id="schema_AttachedIntegrationToSource"></a>
<a id="tocSattachedintegrationtosource"></a>
<a id="tocsattachedintegrationtosource"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<h2 id="tocS_DetachedIntegrationFromSource">DetachedIntegrationFromSource</h2>
<!-- backwards compatibility -->
<a id="schemadetachedintegrationfromsource"></a>
<a id="schema_DetachedIntegrationFromSource"></a>
<a id="tocSdetachedintegrationfromsource"></a>
<a id="tocsdetachedintegrationfromsource"></a>

```json
{}
```

<h2 id="tocS_DeletedIntegration">DeletedIntegration</h2>
<!-- backwards compatibility -->
<a id="schemadeletedintegration"></a>
<a id="schema_DeletedIntegration"></a>
<a id="tocSdeletedintegration"></a>
<a id="tocsdeletedintegration"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_IssueStatus">IssueStatus</h2>
<!-- backwards compatibility -->
<a id="schemaissuestatus"></a>
<a id="schema_IssueStatus"></a>
<a id="tocSissuestatus"></a>
<a id="tocsissuestatus"></a>

```json
"OPENED"
```

Issue status

<h2 id="tocS_DeliveryIssueAggregationKeys">DeliveryIssueAggregationKeys</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryissueaggregationkeys"></a>
<a id="schema_DeliveryIssueAggregationKeys"></a>
<a id="tocSdeliveryissueaggregationkeys"></a>
<a id="tocsdeliveryissueaggregationkeys"></a>

```json
{
  "webhook_id": [
    "string"
  ],
  "response_status": [
    0
  ],
  "error_code": [
    "CANCELLED"
  ]
}
```

Keys used as the aggregation keys a 'delivery' type issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_id|[string]|true|none|none|
|response_status|[number(float)]|true|none|none|
|error_code|[[AttemptErrorCodes](#schemaattempterrorcodes)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error_code|CANCELLED|
|error_code|TIMEOUT|
|error_code|NOT_FOUND|
|error_code|CONNECTION_REFUSED|
|error_code|CONNECTION_RESET|
|error_code|MISSING_URL|
|error_code|CLI|
|error_code|CLI_UNAVAILABLE|
|error_code|SELF_SIGNED_CERT|
|error_code|ERR_TLS_CERT_ALTNAME_INVALID|
|error_code|ERR_SSL_WRONG_VERSION_NUMBER|
|error_code|SSL_ERROR_CA_UNKNOWN|
|error_code|TTL_EXPIRED|
|error_code|DATA_ARCHIVED|
|error_code|SSL_CERT_EXPIRED|
|error_code|BULK_RETRY_CANCELLED|
|error_code|DNS_LOOKUP_FAILED|
|error_code|HOST_UNREACHABLE|
|error_code|PROTOCOL_ERROR|
|error_code|SOCKET_CLOSED|
|error_code|OAUTH2_HANDSHAKE_FAILED|
|error_code|UNKNOWN|

<h2 id="tocS_DeliveryIssueReference">DeliveryIssueReference</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryissuereference"></a>
<a id="schema_DeliveryIssueReference"></a>
<a id="tocSdeliveryissuereference"></a>
<a id="tocsdeliveryissuereference"></a>

```json
{
  "event_id": "string",
  "attempt_id": "string"
}
```

Reference to the event and attempt an issue is being created for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|none|
|attempt_id|string|true|none|none|

<h2 id="tocS_DeliveryIssueData">DeliveryIssueData</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryissuedata"></a>
<a id="schema_DeliveryIssueData"></a>
<a id="tocSdeliveryissuedata"></a>
<a id="tocsdeliveryissuedata"></a>

```json
{
  "trigger_event": {
    "id": "string",
    "team_id": "string",
    "webhook_id": "string",
    "source_id": "string",
    "destination_id": "string",
    "event_data_id": "string",
    "request_id": "string",
    "attempts": 0,
    "last_attempt_at": "1970-01-01T00:00:00Z",
    "next_attempt_at": "1970-01-01T00:00:00Z",
    "response_status": 0,
    "error_code": "CANCELLED",
    "status": "SCHEDULED",
    "successful_at": "1970-01-01T00:00:00Z",
    "cli_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    }
  },
  "trigger_attempt": {
    "id": "string",
    "team_id": "string",
    "event_id": "string",
    "destination_id": "string",
    "response_status": 0,
    "attempt_number": 0,
    "trigger": "INITIAL",
    "error_code": "CANCELLED",
    "body": {},
    "requested_url": "string",
    "http_method": "GET",
    "bulk_retry_id": "string",
    "status": "FAILED",
    "successful_at": "1970-01-01T00:00:00Z",
    "delivered_at": "1970-01-01T00:00:00Z",
    "responded_at": "1970-01-01T00:00:00Z",
    "delivery_latency": 0,
    "response_latency": 0,
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

Delivery issue data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger_event|[Event](#schemaevent)|false|none|none|
|trigger_attempt|[EventAttempt](#schemaeventattempt)|false|none|none|

<h2 id="tocS_DeliveryIssueWithData">DeliveryIssueWithData</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryissuewithdata"></a>
<a id="schema_DeliveryIssueWithData"></a>
<a id="tocSdeliveryissuewithdata"></a>
<a id="tocsdeliveryissuewithdata"></a>

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  },
  "data": {
    "trigger_event": {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    },
    "trigger_attempt": {
      "id": "string",
      "team_id": "string",
      "event_id": "string",
      "destination_id": "string",
      "response_status": 0,
      "attempt_number": 0,
      "trigger": "INITIAL",
      "error_code": "CANCELLED",
      "body": {},
      "requested_url": "string",
      "http_method": "GET",
      "bulk_retry_id": "string",
      "status": "FAILED",
      "successful_at": "1970-01-01T00:00:00Z",
      "delivered_at": "1970-01-01T00:00:00Z",
      "responded_at": "1970-01-01T00:00:00Z",
      "delivery_latency": 0,
      "response_latency": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  }
}
```

Delivery issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Issue ID|
|team_id|string|true|none|ID of the project|
|status|[IssueStatus](#schemaissuestatus)|true|none|Issue status|
|opened_at|string(date-time)|true|none|ISO timestamp for when the issue was last opened|
|first_seen_at|string(date-time)|true|none|ISO timestamp for when the issue was first opened|
|last_seen_at|string(date-time)|true|none|ISO timestamp for when the issue last occured|
|last_updated_by|string \| null|false|none|Deprecated, will always be set to null|
|dismissed_at|string(date-time) \| null|false|none|ISO timestamp for when the issue was dismissed|
|auto_resolved_at|string(date-time) \| null|false|none|none|
|merged_with|string \| null|false|none|none|
|updated_at|string|true|none|ISO timestamp for when the issue was last updated|
|created_at|string|true|none|ISO timestamp for when the issue was created|
|type|string|true|none|none|
|aggregation_keys|[DeliveryIssueAggregationKeys](#schemadeliveryissueaggregationkeys)|true|none|Keys used as the aggregation keys a 'delivery' type issue|
|reference|[DeliveryIssueReference](#schemadeliveryissuereference)|true|none|Reference to the event and attempt an issue is being created for.|
|data|[DeliveryIssueData](#schemadeliveryissuedata)|false|none|Delivery issue data|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPENED|
|status|IGNORED|
|status|ACKNOWLEDGED|
|status|RESOLVED|
|type|delivery|

<h2 id="tocS_TransformationIssueAggregationKeys">TransformationIssueAggregationKeys</h2>
<!-- backwards compatibility -->
<a id="schematransformationissueaggregationkeys"></a>
<a id="schema_TransformationIssueAggregationKeys"></a>
<a id="tocStransformationissueaggregationkeys"></a>
<a id="tocstransformationissueaggregationkeys"></a>

```json
{
  "transformation_id": [
    "string"
  ],
  "log_level": "debug"
}
```

Keys used as the aggregation keys a 'transformation' type issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transformation_id|[string]|true|none|none|
|log_level|[TransformationExecutionLogLevel](#schematransformationexecutionloglevel)|true|none|The minimum log level to open the issue on|

#### Enumerated Values

|Property|Value|
|---|---|
|log_level|debug|
|log_level|info|
|log_level|warn|
|log_level|error|
|log_level|fatal|

<h2 id="tocS_TransformationIssueReference">TransformationIssueReference</h2>
<!-- backwards compatibility -->
<a id="schematransformationissuereference"></a>
<a id="schema_TransformationIssueReference"></a>
<a id="tocStransformationissuereference"></a>
<a id="tocstransformationissuereference"></a>

```json
{
  "transformation_execution_id": "string",
  "trigger_event_request_transformation_id": "string"
}
```

Reference to the event request transformation an issue is being created for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transformation_execution_id|string|true|none|none|
|trigger_event_request_transformation_id|string \| null|false|none|Deprecated but still found on historical issues|

<h2 id="tocS_ConsoleLine">ConsoleLine</h2>
<!-- backwards compatibility -->
<a id="schemaconsoleline"></a>
<a id="schema_ConsoleLine"></a>
<a id="tocSconsoleline"></a>
<a id="tocsconsoleline"></a>

```json
{
  "type": "error",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|error|
|type|log|
|type|warn|
|type|info|
|type|debug|

<h2 id="tocS_TransformationExecution">TransformationExecution</h2>
<!-- backwards compatibility -->
<a id="schematransformationexecution"></a>
<a id="schema_TransformationExecution"></a>
<a id="tocStransformationexecution"></a>
<a id="tocstransformationexecution"></a>

```json
{
  "id": "string",
  "transformed_event_data_id": "string",
  "original_event_data_id": "string",
  "transformation_id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "log_level": "debug",
  "logs": [
    {
      "type": "error",
      "message": "string"
    }
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "original_event_data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "transformed_event_data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  },
  "issue_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|transformed_event_data_id|string|true|none|none|
|original_event_data_id|string|true|none|none|
|transformation_id|string|true|none|none|
|team_id|string|true|none|ID of the project|
|webhook_id|string|true|none|none|
|log_level|[TransformationExecutionLogLevel](#schematransformationexecutionloglevel)|true|none|The minimum log level to open the issue on|
|logs|[[ConsoleLine](#schemaconsoleline)]|true|none|none|
|updated_at|string(date-time)|true|none|none|
|created_at|string(date-time)|true|none|none|
|original_event_data|[ShortEventData](#schemashorteventdata)|false|none|Request data|
|transformed_event_data|[ShortEventData](#schemashorteventdata)|false|none|Request data|
|issue_id|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|log_level|debug|
|log_level|info|
|log_level|warn|
|log_level|error|
|log_level|fatal|

<h2 id="tocS_TransformationIssueData">TransformationIssueData</h2>
<!-- backwards compatibility -->
<a id="schematransformationissuedata"></a>
<a id="schema_TransformationIssueData"></a>
<a id="tocStransformationissuedata"></a>
<a id="tocstransformationissuedata"></a>

```json
{
  "transformation_execution": {
    "id": "string",
    "transformed_event_data_id": "string",
    "original_event_data_id": "string",
    "transformation_id": "string",
    "team_id": "string",
    "webhook_id": "string",
    "log_level": "debug",
    "logs": [
      {
        "type": "error",
        "message": "string"
      }
    ],
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "original_event_data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    },
    "transformed_event_data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    },
    "issue_id": "string"
  },
  "trigger_attempt": {
    "id": "string",
    "team_id": "string",
    "event_id": "string",
    "destination_id": "string",
    "response_status": 0,
    "attempt_number": 0,
    "trigger": "INITIAL",
    "error_code": "CANCELLED",
    "body": {},
    "requested_url": "string",
    "http_method": "GET",
    "bulk_retry_id": "string",
    "status": "FAILED",
    "successful_at": "1970-01-01T00:00:00Z",
    "delivered_at": "1970-01-01T00:00:00Z",
    "responded_at": "1970-01-01T00:00:00Z",
    "delivery_latency": 0,
    "response_latency": 0,
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

Transformation issue data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transformation_execution|[TransformationExecution](#schematransformationexecution)|true|none|none|
|trigger_attempt|[EventAttempt](#schemaeventattempt)|false|none|none|

<h2 id="tocS_TransformationIssueWithData">TransformationIssueWithData</h2>
<!-- backwards compatibility -->
<a id="schematransformationissuewithdata"></a>
<a id="schema_TransformationIssueWithData"></a>
<a id="tocStransformationissuewithdata"></a>
<a id="tocstransformationissuewithdata"></a>

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "transformation",
  "aggregation_keys": {
    "transformation_id": [
      "string"
    ],
    "log_level": "debug"
  },
  "reference": {
    "transformation_execution_id": "string",
    "trigger_event_request_transformation_id": "string"
  },
  "data": {
    "transformation_execution": {
      "id": "string",
      "transformed_event_data_id": "string",
      "original_event_data_id": "string",
      "transformation_id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "log_level": "debug",
      "logs": [
        {
          "type": "error",
          "message": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "original_event_data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "transformed_event_data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "issue_id": "string"
    },
    "trigger_attempt": {
      "id": "string",
      "team_id": "string",
      "event_id": "string",
      "destination_id": "string",
      "response_status": 0,
      "attempt_number": 0,
      "trigger": "INITIAL",
      "error_code": "CANCELLED",
      "body": {},
      "requested_url": "string",
      "http_method": "GET",
      "bulk_retry_id": "string",
      "status": "FAILED",
      "successful_at": "1970-01-01T00:00:00Z",
      "delivered_at": "1970-01-01T00:00:00Z",
      "responded_at": "1970-01-01T00:00:00Z",
      "delivery_latency": 0,
      "response_latency": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  }
}
```

Transformation issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Issue ID|
|team_id|string|true|none|ID of the project|
|status|[IssueStatus](#schemaissuestatus)|true|none|Issue status|
|opened_at|string(date-time)|true|none|ISO timestamp for when the issue was last opened|
|first_seen_at|string(date-time)|true|none|ISO timestamp for when the issue was first opened|
|last_seen_at|string(date-time)|true|none|ISO timestamp for when the issue last occured|
|last_updated_by|string \| null|false|none|Deprecated, will always be set to null|
|dismissed_at|string(date-time) \| null|false|none|ISO timestamp for when the issue was dismissed|
|auto_resolved_at|string(date-time) \| null|false|none|none|
|merged_with|string \| null|false|none|none|
|updated_at|string|true|none|ISO timestamp for when the issue was last updated|
|created_at|string|true|none|ISO timestamp for when the issue was created|
|type|string|true|none|none|
|aggregation_keys|[TransformationIssueAggregationKeys](#schematransformationissueaggregationkeys)|true|none|Keys used as the aggregation keys a 'transformation' type issue|
|reference|[TransformationIssueReference](#schematransformationissuereference)|true|none|Reference to the event request transformation an issue is being created for.|
|data|[TransformationIssueData](#schematransformationissuedata)|false|none|Transformation issue data|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPENED|
|status|IGNORED|
|status|ACKNOWLEDGED|
|status|RESOLVED|
|type|transformation|

<h2 id="tocS_IssueWithData">IssueWithData</h2>
<!-- backwards compatibility -->
<a id="schemaissuewithdata"></a>
<a id="schema_IssueWithData"></a>
<a id="tocSissuewithdata"></a>
<a id="tocsissuewithdata"></a>

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  },
  "data": {
    "trigger_event": {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    },
    "trigger_attempt": {
      "id": "string",
      "team_id": "string",
      "event_id": "string",
      "destination_id": "string",
      "response_status": 0,
      "attempt_number": 0,
      "trigger": "INITIAL",
      "error_code": "CANCELLED",
      "body": {},
      "requested_url": "string",
      "http_method": "GET",
      "bulk_retry_id": "string",
      "status": "FAILED",
      "successful_at": "1970-01-01T00:00:00Z",
      "delivered_at": "1970-01-01T00:00:00Z",
      "responded_at": "1970-01-01T00:00:00Z",
      "delivery_latency": 0,
      "response_latency": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[DeliveryIssueWithData](#schemadeliveryissuewithdata)|false|none|Delivery issue|
|*anyOf*|[TransformationIssueWithData](#schematransformationissuewithdata)|false|none|Transformation issue|

<h2 id="tocS_IssueWithDataPaginatedResult">IssueWithDataPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaissuewithdatapaginatedresult"></a>
<a id="schema_IssueWithDataPaginatedResult"></a>
<a id="tocSissuewithdatapaginatedresult"></a>
<a id="tocsissuewithdatapaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "iss_YXKv5OdJXCiVwkPhGy",
      "team_id": "string",
      "status": "OPENED",
      "opened_at": "1970-01-01T00:00:00Z",
      "first_seen_at": "1970-01-01T00:00:00Z",
      "last_seen_at": "1970-01-01T00:00:00Z",
      "last_updated_by": "string",
      "dismissed_at": "1970-01-01T00:00:00Z",
      "auto_resolved_at": "1970-01-01T00:00:00Z",
      "merged_with": "string",
      "updated_at": "string",
      "created_at": "string",
      "type": "delivery",
      "aggregation_keys": {
        "webhook_id": [
          "string"
        ],
        "response_status": [
          0
        ],
        "error_code": [
          "CANCELLED"
        ]
      },
      "reference": {
        "event_id": "string",
        "attempt_id": "string"
      },
      "data": {
        "trigger_event": {
          "id": "string",
          "team_id": "string",
          "webhook_id": "string",
          "source_id": "string",
          "destination_id": "string",
          "event_data_id": "string",
          "request_id": "string",
          "attempts": 0,
          "last_attempt_at": "1970-01-01T00:00:00Z",
          "next_attempt_at": "1970-01-01T00:00:00Z",
          "response_status": 0,
          "error_code": "CANCELLED",
          "status": "SCHEDULED",
          "successful_at": "1970-01-01T00:00:00Z",
          "cli_id": "string",
          "updated_at": "1970-01-01T00:00:00Z",
          "created_at": "1970-01-01T00:00:00Z",
          "data": {
            "path": "string",
            "query": "string",
            "parsed_query": "string",
            "headers": "string",
            "body": "string",
            "is_large_payload": true
          }
        },
        "trigger_attempt": {
          "id": "string",
          "team_id": "string",
          "event_id": "string",
          "destination_id": "string",
          "response_status": 0,
          "attempt_number": 0,
          "trigger": "INITIAL",
          "error_code": "CANCELLED",
          "body": {},
          "requested_url": "string",
          "http_method": "GET",
          "bulk_retry_id": "string",
          "status": "FAILED",
          "successful_at": "1970-01-01T00:00:00Z",
          "delivered_at": "1970-01-01T00:00:00Z",
          "responded_at": "1970-01-01T00:00:00Z",
          "delivery_latency": 0,
          "response_latency": 0,
          "updated_at": "1970-01-01T00:00:00Z",
          "created_at": "1970-01-01T00:00:00Z"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[IssueWithData](#schemaissuewithdata)]|false|none|none|

<h2 id="tocS_IssueCount">IssueCount</h2>
<!-- backwards compatibility -->
<a id="schemaissuecount"></a>
<a id="schema_IssueCount"></a>
<a id="tocSissuecount"></a>
<a id="tocsissuecount"></a>

```json
{
  "count": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|Number of issues|

<h2 id="tocS_DeliveryIssue">DeliveryIssue</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryissue"></a>
<a id="schema_DeliveryIssue"></a>
<a id="tocSdeliveryissue"></a>
<a id="tocsdeliveryissue"></a>

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  }
}
```

Delivery issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Issue ID|
|team_id|string|true|none|ID of the project|
|status|[IssueStatus](#schemaissuestatus)|true|none|Issue status|
|opened_at|string(date-time)|true|none|ISO timestamp for when the issue was last opened|
|first_seen_at|string(date-time)|true|none|ISO timestamp for when the issue was first opened|
|last_seen_at|string(date-time)|true|none|ISO timestamp for when the issue last occured|
|last_updated_by|string \| null|false|none|Deprecated, will always be set to null|
|dismissed_at|string(date-time) \| null|false|none|ISO timestamp for when the issue was dismissed|
|auto_resolved_at|string(date-time) \| null|false|none|none|
|merged_with|string \| null|false|none|none|
|updated_at|string|true|none|ISO timestamp for when the issue was last updated|
|created_at|string|true|none|ISO timestamp for when the issue was created|
|type|string|true|none|none|
|aggregation_keys|[DeliveryIssueAggregationKeys](#schemadeliveryissueaggregationkeys)|true|none|Keys used as the aggregation keys a 'delivery' type issue|
|reference|[DeliveryIssueReference](#schemadeliveryissuereference)|true|none|Reference to the event and attempt an issue is being created for.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPENED|
|status|IGNORED|
|status|ACKNOWLEDGED|
|status|RESOLVED|
|type|delivery|

<h2 id="tocS_TransformationIssue">TransformationIssue</h2>
<!-- backwards compatibility -->
<a id="schematransformationissue"></a>
<a id="schema_TransformationIssue"></a>
<a id="tocStransformationissue"></a>
<a id="tocstransformationissue"></a>

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "transformation",
  "aggregation_keys": {
    "transformation_id": [
      "string"
    ],
    "log_level": "debug"
  },
  "reference": {
    "transformation_execution_id": "string",
    "trigger_event_request_transformation_id": "string"
  }
}
```

Transformation issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Issue ID|
|team_id|string|true|none|ID of the project|
|status|[IssueStatus](#schemaissuestatus)|true|none|Issue status|
|opened_at|string(date-time)|true|none|ISO timestamp for when the issue was last opened|
|first_seen_at|string(date-time)|true|none|ISO timestamp for when the issue was first opened|
|last_seen_at|string(date-time)|true|none|ISO timestamp for when the issue last occured|
|last_updated_by|string \| null|false|none|Deprecated, will always be set to null|
|dismissed_at|string(date-time) \| null|false|none|ISO timestamp for when the issue was dismissed|
|auto_resolved_at|string(date-time) \| null|false|none|none|
|merged_with|string \| null|false|none|none|
|updated_at|string|true|none|ISO timestamp for when the issue was last updated|
|created_at|string|true|none|ISO timestamp for when the issue was created|
|type|string|true|none|none|
|aggregation_keys|[TransformationIssueAggregationKeys](#schematransformationissueaggregationkeys)|true|none|Keys used as the aggregation keys a 'transformation' type issue|
|reference|[TransformationIssueReference](#schematransformationissuereference)|true|none|Reference to the event request transformation an issue is being created for.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPENED|
|status|IGNORED|
|status|ACKNOWLEDGED|
|status|RESOLVED|
|type|transformation|

<h2 id="tocS_Issue">Issue</h2>
<!-- backwards compatibility -->
<a id="schemaissue"></a>
<a id="schema_Issue"></a>
<a id="tocSissue"></a>
<a id="tocsissue"></a>

```json
{
  "id": "iss_YXKv5OdJXCiVwkPhGy",
  "team_id": "string",
  "status": "OPENED",
  "opened_at": "1970-01-01T00:00:00Z",
  "first_seen_at": "1970-01-01T00:00:00Z",
  "last_seen_at": "1970-01-01T00:00:00Z",
  "last_updated_by": "string",
  "dismissed_at": "1970-01-01T00:00:00Z",
  "auto_resolved_at": "1970-01-01T00:00:00Z",
  "merged_with": "string",
  "updated_at": "string",
  "created_at": "string",
  "type": "delivery",
  "aggregation_keys": {
    "webhook_id": [
      "string"
    ],
    "response_status": [
      0
    ],
    "error_code": [
      "CANCELLED"
    ]
  },
  "reference": {
    "event_id": "string",
    "attempt_id": "string"
  }
}
```

Issue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[DeliveryIssue](#schemadeliveryissue)|false|none|Delivery issue|
|*anyOf*|[TransformationIssue](#schematransformationissue)|false|none|Transformation issue|

<h2 id="tocS_RequestRejectionCause">RequestRejectionCause</h2>
<!-- backwards compatibility -->
<a id="schemarequestrejectioncause"></a>
<a id="schema_RequestRejectionCause"></a>
<a id="tocSrequestrejectioncause"></a>
<a id="tocsrequestrejectioncause"></a>

```json
"SOURCE_DISABLED"
```

<h2 id="tocS_Request">Request</h2>
<!-- backwards compatibility -->
<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "verified": true,
  "original_event_data_id": "string",
  "rejection_cause": "SOURCE_DISABLED",
  "ingest_priority": "NORMAL",
  "ingested_at": "1970-01-01T00:00:00Z",
  "source_id": "string",
  "events_count": 0,
  "cli_events_count": 0,
  "ignored_count": 0,
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z",
  "data": {
    "path": "string",
    "query": "string",
    "parsed_query": "string",
    "headers": "string",
    "body": "string",
    "is_large_payload": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the request|
|team_id|string|true|none|ID of the project|
|verified|boolean \| null|true|none|Whether or not the request was verified when received|
|original_event_data_id|string \| null|true|none|ID of the request data|
|rejection_cause|[RequestRejectionCause](#schemarequestrejectioncause)|true|none|none|
|ingest_priority|string \| null|true|none|The priority attributed to the request when received|
|ingested_at|string(date-time) \| null|true|none|The time the request was originally received|
|source_id|string|true|none|ID of the associated source|
|events_count|integer \| null|true|none|The count of events created from this request (CLI events not included)|
|cli_events_count|integer \| null|true|none|The count of CLI events created from this request|
|ignored_count|integer \| null|true|none|none|
|updated_at|string(date-time)|true|none|Date the event was last updated|
|created_at|string(date-time)|true|none|	Date the event was created|
|data|[ShortEventData](#schemashorteventdata)|false|none|Request data|

#### Enumerated Values

|Property|Value|
|---|---|
|rejection_cause|SOURCE_DISABLED|
|rejection_cause|NO_CONNECTION|
|rejection_cause|VERIFICATION_FAILED|
|rejection_cause|UNSUPPORTED_HTTP_METHOD|
|rejection_cause|UNSUPPORTED_CONTENT_TYPE|
|rejection_cause|UNPARSABLE_JSON|
|rejection_cause|PAYLOAD_TOO_LARGE|
|rejection_cause|INGESTION_FATAL|
|rejection_cause|UNKNOWN|
|ingest_priority|NORMAL|
|ingest_priority|LOW|

<h2 id="tocS_RequestPaginatedResult">RequestPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemarequestpaginatedresult"></a>
<a id="schema_RequestPaginatedResult"></a>
<a id="tocSrequestpaginatedresult"></a>
<a id="tocsrequestpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "verified": true,
      "original_event_data_id": "string",
      "rejection_cause": "SOURCE_DISABLED",
      "ingest_priority": "NORMAL",
      "ingested_at": "1970-01-01T00:00:00Z",
      "source_id": "string",
      "events_count": 0,
      "cli_events_count": 0,
      "ignored_count": 0,
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Request](#schemarequest)]|false|none|none|

<h2 id="tocS_RetryRequest">RetryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaretryrequest"></a>
<a id="schema_RetryRequest"></a>
<a id="tocSretryrequest"></a>
<a id="tocsretryrequest"></a>

```json
{
  "request": {
    "id": "string",
    "team_id": "string",
    "verified": true,
    "original_event_data_id": "string",
    "rejection_cause": "SOURCE_DISABLED",
    "ingest_priority": "NORMAL",
    "ingested_at": "1970-01-01T00:00:00Z",
    "source_id": "string",
    "events_count": 0,
    "cli_events_count": 0,
    "ignored_count": 0,
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z",
    "data": {
      "path": "string",
      "query": "string",
      "parsed_query": "string",
      "headers": "string",
      "body": "string",
      "is_large_payload": true
    }
  },
  "events": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "source_id": "string",
      "destination_id": "string",
      "event_data_id": "string",
      "request_id": "string",
      "attempts": 0,
      "last_attempt_at": "1970-01-01T00:00:00Z",
      "next_attempt_at": "1970-01-01T00:00:00Z",
      "response_status": 0,
      "error_code": "CANCELLED",
      "status": "SCHEDULED",
      "successful_at": "1970-01-01T00:00:00Z",
      "cli_id": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[Request](#schemarequest)|true|none|none|
|events|[[Event](#schemaevent)]|false|none|none|

<h2 id="tocS_IgnoredEventCause">IgnoredEventCause</h2>
<!-- backwards compatibility -->
<a id="schemaignoredeventcause"></a>
<a id="schema_IgnoredEventCause"></a>
<a id="tocSignoredeventcause"></a>
<a id="tocsignoredeventcause"></a>

```json
"DISABLED"
```

<h2 id="tocS_FilteredMeta">FilteredMeta</h2>
<!-- backwards compatibility -->
<a id="schemafilteredmeta"></a>
<a id="schema_FilteredMeta"></a>
<a id="tocSfilteredmeta"></a>
<a id="tocsfilteredmeta"></a>

```json
[
  "body"
]
```

<h2 id="tocS_TransformationFailedMeta">TransformationFailedMeta</h2>
<!-- backwards compatibility -->
<a id="schematransformationfailedmeta"></a>
<a id="schema_TransformationFailedMeta"></a>
<a id="tocStransformationfailedmeta"></a>
<a id="tocstransformationfailedmeta"></a>

```json
{
  "transformation_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transformation_id|string|true|none|none|

<h2 id="tocS_IgnoredEvent">IgnoredEvent</h2>
<!-- backwards compatibility -->
<a id="schemaignoredevent"></a>
<a id="schema_IgnoredEvent"></a>
<a id="tocSignoredevent"></a>
<a id="tocsignoredevent"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "webhook_id": "string",
  "cause": "DISABLED",
  "request_id": "string",
  "meta": [
    "body"
  ],
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|team_id|string|true|none|ID of the project|
|webhook_id|string|true|none|none|
|cause|[IgnoredEventCause](#schemaignoredeventcause)|true|none|none|
|request_id|string|true|none|none|
|meta|[FilteredMeta](#schemafilteredmeta) \| [TransformationFailedMeta](#schematransformationfailedmeta) \| null|false|none|none|
|created_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|cause|DISABLED|
|cause|FILTERED|
|cause|TRANSFORMATION_FAILED|
|cause|CLI_DISCONNECTED|

<h2 id="tocS_IgnoredEventPaginatedResult">IgnoredEventPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaignoredeventpaginatedresult"></a>
<a id="schema_IgnoredEventPaginatedResult"></a>
<a id="tocSignoredeventpaginatedresult"></a>
<a id="tocsignoredeventpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "cause": "DISABLED",
      "request_id": "string",
      "meta": [
        "body"
      ],
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[IgnoredEvent](#schemaignoredevent)]|false|none|none|

<h2 id="tocS_VerificationHMACConfigs">VerificationHMACConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationhmacconfigs"></a>
<a id="schema_VerificationHMACConfigs"></a>
<a id="tocSverificationhmacconfigs"></a>
<a id="tocsverificationhmacconfigs"></a>

```json
{
  "webhook_secret_key": "string",
  "algorithm": "md5",
  "header_key": "string",
  "encoding": "base64"
}
```

The verification configs for HMAC. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|
|algorithm|[HMACAlgorithms](#schemahmacalgorithms)|true|none|none|
|header_key|string|true|none|none|
|encoding|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|md5|
|algorithm|sha1|
|algorithm|sha256|
|algorithm|sha512|
|encoding|base64|
|encoding|base64url|
|encoding|hex|

<h2 id="tocS_VerificationHMAC">VerificationHMAC</h2>
<!-- backwards compatibility -->
<a id="schemaverificationhmac"></a>
<a id="schema_VerificationHMAC"></a>
<a id="tocSverificationhmac"></a>
<a id="tocsverificationhmac"></a>

```json
{
  "type": "hmac",
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationHMACConfigs](#schemaverificationhmacconfigs)|false|none|The verification configs for HMAC. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hmac|
|type|HMAC|

<h2 id="tocS_VerificationBasicAuthConfigs">VerificationBasicAuthConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbasicauthconfigs"></a>
<a id="schema_VerificationBasicAuthConfigs"></a>
<a id="tocSverificationbasicauthconfigs"></a>
<a id="tocsverificationbasicauthconfigs"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

The verification configs for Basic Auth. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_VerificationBasicAuth">VerificationBasicAuth</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbasicauth"></a>
<a id="schema_VerificationBasicAuth"></a>
<a id="tocSverificationbasicauth"></a>
<a id="tocsverificationbasicauth"></a>

```json
{
  "type": "basic_auth",
  "configs": {
    "username": "string",
    "password": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationBasicAuthConfigs](#schemaverificationbasicauthconfigs)|false|none|The verification configs for Basic Auth. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|basic_auth|
|type|BASIC_AUTH|

<h2 id="tocS_VerificationAPIKeyConfigs">VerificationAPIKeyConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationapikeyconfigs"></a>
<a id="schema_VerificationAPIKeyConfigs"></a>
<a id="tocSverificationapikeyconfigs"></a>
<a id="tocsverificationapikeyconfigs"></a>

```json
{
  "header_key": "string",
  "api_key": "string"
}
```

The verification configs for API Key. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_key|string|true|none|none|
|api_key|string|true|none|none|

<h2 id="tocS_VerificationAPIKey">VerificationAPIKey</h2>
<!-- backwards compatibility -->
<a id="schemaverificationapikey"></a>
<a id="schema_VerificationAPIKey"></a>
<a id="tocSverificationapikey"></a>
<a id="tocsverificationapikey"></a>

```json
{
  "type": "api_key",
  "configs": {
    "header_key": "string",
    "api_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationAPIKeyConfigs](#schemaverificationapikeyconfigs)|false|none|The verification configs for API Key. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|api_key|
|type|API_KEY|

<h2 id="tocS_VerificationBridgeConfigs">VerificationBridgeConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbridgeconfigs"></a>
<a id="schema_VerificationBridgeConfigs"></a>
<a id="tocSverificationbridgeconfigs"></a>
<a id="tocsverificationbridgeconfigs"></a>

```json
{
  "public_key": "string"
}
```

The verification configs for Bridge. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|true|none|none|

<h2 id="tocS_VerificationBridge">VerificationBridge</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbridge"></a>
<a id="schema_VerificationBridge"></a>
<a id="tocSverificationbridge"></a>
<a id="tocsverificationbridge"></a>

```json
{
  "type": "bridge",
  "configs": {
    "public_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationBridgeConfigs](#schemaverificationbridgeconfigs)|false|none|The verification configs for Bridge. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bridge|
|type|BRIDGE|

<h2 id="tocS_VerificationCloudSignalConfigs">VerificationCloudSignalConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcloudsignalconfigs"></a>
<a id="schema_VerificationCloudSignalConfigs"></a>
<a id="tocSverificationcloudsignalconfigs"></a>
<a id="tocsverificationcloudsignalconfigs"></a>

```json
{
  "api_key": "string"
}
```

The verification configs for Cloud Signal. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|none|

<h2 id="tocS_VerificationCloudSignal">VerificationCloudSignal</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcloudsignal"></a>
<a id="schema_VerificationCloudSignal"></a>
<a id="tocSverificationcloudsignal"></a>
<a id="tocsverificationcloudsignal"></a>

```json
{
  "type": "cloudsignal",
  "configs": {
    "api_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationCloudSignalConfigs](#schemaverificationcloudsignalconfigs)|false|none|The verification configs for Cloud Signal. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cloudsignal|
|type|CLOUDSIGNAL|

<h2 id="tocS_VerificationCourierConfigs">VerificationCourierConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcourierconfigs"></a>
<a id="schema_VerificationCourierConfigs"></a>
<a id="tocSverificationcourierconfigs"></a>
<a id="tocsverificationcourierconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Courier. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationCourier">VerificationCourier</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcourier"></a>
<a id="schema_VerificationCourier"></a>
<a id="tocSverificationcourier"></a>
<a id="tocsverificationcourier"></a>

```json
{
  "type": "courier",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationCourierConfigs](#schemaverificationcourierconfigs)|false|none|The verification configs for Courier. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|courier|
|type|COURIER|

<h2 id="tocS_VerificationFrontAppConfigs">VerificationFrontAppConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationfrontappconfigs"></a>
<a id="schema_VerificationFrontAppConfigs"></a>
<a id="tocSverificationfrontappconfigs"></a>
<a id="tocsverificationfrontappconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for FrontApp. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationFrontApp">VerificationFrontApp</h2>
<!-- backwards compatibility -->
<a id="schemaverificationfrontapp"></a>
<a id="schema_VerificationFrontApp"></a>
<a id="tocSverificationfrontapp"></a>
<a id="tocsverificationfrontapp"></a>

```json
{
  "type": "frontapp",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationFrontAppConfigs](#schemaverificationfrontappconfigs)|false|none|The verification configs for FrontApp. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|frontapp|
|type|FRONTAPP|

<h2 id="tocS_VerificationTwitterConfigs">VerificationTwitterConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtwitterconfigs"></a>
<a id="schema_VerificationTwitterConfigs"></a>
<a id="tocSverificationtwitterconfigs"></a>
<a id="tocsverificationtwitterconfigs"></a>

```json
{
  "api_key": "string"
}
```

The verification configs for Twitter. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|none|

<h2 id="tocS_VerificationTwitter">VerificationTwitter</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtwitter"></a>
<a id="schema_VerificationTwitter"></a>
<a id="tocSverificationtwitter"></a>
<a id="tocsverificationtwitter"></a>

```json
{
  "type": "twitter",
  "configs": {
    "api_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTwitterConfigs](#schemaverificationtwitterconfigs)|false|none|The verification configs for Twitter. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|twitter|
|type|TWITTER|

<h2 id="tocS_VerificationStripeConfigs">VerificationStripeConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationstripeconfigs"></a>
<a id="schema_VerificationStripeConfigs"></a>
<a id="tocSverificationstripeconfigs"></a>
<a id="tocsverificationstripeconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Stripe. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationStripe">VerificationStripe</h2>
<!-- backwards compatibility -->
<a id="schemaverificationstripe"></a>
<a id="schema_VerificationStripe"></a>
<a id="tocSverificationstripe"></a>
<a id="tocsverificationstripe"></a>

```json
{
  "type": "stripe",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationStripeConfigs](#schemaverificationstripeconfigs)|false|none|The verification configs for Stripe. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|stripe|
|type|STRIPE|

<h2 id="tocS_VerificationRechargeConfigs">VerificationRechargeConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrechargeconfigs"></a>
<a id="schema_VerificationRechargeConfigs"></a>
<a id="tocSverificationrechargeconfigs"></a>
<a id="tocsverificationrechargeconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Recharge. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationRecharge">VerificationRecharge</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrecharge"></a>
<a id="schema_VerificationRecharge"></a>
<a id="tocSverificationrecharge"></a>
<a id="tocsverificationrecharge"></a>

```json
{
  "type": "recharge",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationRechargeConfigs](#schemaverificationrechargeconfigs)|false|none|The verification configs for Recharge. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|recharge|
|type|RECHARGE|

<h2 id="tocS_VerificationTwilioConfigs">VerificationTwilioConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtwilioconfigs"></a>
<a id="schema_VerificationTwilioConfigs"></a>
<a id="tocSverificationtwilioconfigs"></a>
<a id="tocsverificationtwilioconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Twilio. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationTwilio">VerificationTwilio</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtwilio"></a>
<a id="schema_VerificationTwilio"></a>
<a id="tocSverificationtwilio"></a>
<a id="tocsverificationtwilio"></a>

```json
{
  "type": "twilio",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTwilioConfigs](#schemaverificationtwilioconfigs)|false|none|The verification configs for Twilio. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|twilio|
|type|TWILIO|

<h2 id="tocS_VerificationGitHubConfigs">VerificationGitHubConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationgithubconfigs"></a>
<a id="schema_VerificationGitHubConfigs"></a>
<a id="tocSverificationgithubconfigs"></a>
<a id="tocsverificationgithubconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for GitHub. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationGitHub">VerificationGitHub</h2>
<!-- backwards compatibility -->
<a id="schemaverificationgithub"></a>
<a id="schema_VerificationGitHub"></a>
<a id="tocSverificationgithub"></a>
<a id="tocsverificationgithub"></a>

```json
{
  "type": "github",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationGitHubConfigs](#schemaverificationgithubconfigs)|false|none|The verification configs for GitHub. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|github|
|type|GITHUB|

<h2 id="tocS_VerificationShopifyConfigs">VerificationShopifyConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationshopifyconfigs"></a>
<a id="schema_VerificationShopifyConfigs"></a>
<a id="tocSverificationshopifyconfigs"></a>
<a id="tocsverificationshopifyconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Shopify. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationShopify">VerificationShopify</h2>
<!-- backwards compatibility -->
<a id="schemaverificationshopify"></a>
<a id="schema_VerificationShopify"></a>
<a id="tocSverificationshopify"></a>
<a id="tocsverificationshopify"></a>

```json
{
  "type": "shopify",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationShopifyConfigs](#schemaverificationshopifyconfigs)|false|none|The verification configs for Shopify. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shopify|
|type|SHOPIFY|

<h2 id="tocS_VerificationPostmarkConfigs">VerificationPostmarkConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpostmarkconfigs"></a>
<a id="schema_VerificationPostmarkConfigs"></a>
<a id="tocSverificationpostmarkconfigs"></a>
<a id="tocsverificationpostmarkconfigs"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

The verification configs for Postmark. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_VerificationPostmark">VerificationPostmark</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpostmark"></a>
<a id="schema_VerificationPostmark"></a>
<a id="tocSverificationpostmark"></a>
<a id="tocsverificationpostmark"></a>

```json
{
  "type": "postmark",
  "configs": {
    "username": "string",
    "password": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPostmarkConfigs](#schemaverificationpostmarkconfigs)|false|none|The verification configs for Postmark. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|postmark|
|type|POSTMARK|

<h2 id="tocS_VerificationTypeformConfigs">VerificationTypeformConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtypeformconfigs"></a>
<a id="schema_VerificationTypeformConfigs"></a>
<a id="tocSverificationtypeformconfigs"></a>
<a id="tocsverificationtypeformconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Typeform. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationTypeform">VerificationTypeform</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtypeform"></a>
<a id="schema_VerificationTypeform"></a>
<a id="tocSverificationtypeform"></a>
<a id="tocsverificationtypeform"></a>

```json
{
  "type": "typeform",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTypeformConfigs](#schemaverificationtypeformconfigs)|false|none|The verification configs for Typeform. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|typeform|
|type|TYPEFORM|

<h2 id="tocS_VerificationXeroConfigs">VerificationXeroConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationxeroconfigs"></a>
<a id="schema_VerificationXeroConfigs"></a>
<a id="tocSverificationxeroconfigs"></a>
<a id="tocsverificationxeroconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Xero. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationXero">VerificationXero</h2>
<!-- backwards compatibility -->
<a id="schemaverificationxero"></a>
<a id="schema_VerificationXero"></a>
<a id="tocSverificationxero"></a>
<a id="tocsverificationxero"></a>

```json
{
  "type": "xero",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationXeroConfigs](#schemaverificationxeroconfigs)|false|none|The verification configs for Xero. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|xero|
|type|XERO|

<h2 id="tocS_VerificationSvixConfigs">VerificationSvixConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsvixconfigs"></a>
<a id="schema_VerificationSvixConfigs"></a>
<a id="tocSverificationsvixconfigs"></a>
<a id="tocsverificationsvixconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Svix. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSvix">VerificationSvix</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsvix"></a>
<a id="schema_VerificationSvix"></a>
<a id="tocSverificationsvix"></a>
<a id="tocsverificationsvix"></a>

```json
{
  "type": "svix",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSvixConfigs](#schemaverificationsvixconfigs)|false|none|The verification configs for Svix. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|svix|
|type|SVIX|

<h2 id="tocS_VerificationZoomConfigs">VerificationZoomConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationzoomconfigs"></a>
<a id="schema_VerificationZoomConfigs"></a>
<a id="tocSverificationzoomconfigs"></a>
<a id="tocsverificationzoomconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Zoom. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationZoom">VerificationZoom</h2>
<!-- backwards compatibility -->
<a id="schemaverificationzoom"></a>
<a id="schema_VerificationZoom"></a>
<a id="tocSverificationzoom"></a>
<a id="tocsverificationzoom"></a>

```json
{
  "type": "zoom",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationZoomConfigs](#schemaverificationzoomconfigs)|false|none|The verification configs for Zoom. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|zoom|
|type|ZOOM|

<h2 id="tocS_VerificationAkeneoConfigs">VerificationAkeneoConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationakeneoconfigs"></a>
<a id="schema_VerificationAkeneoConfigs"></a>
<a id="tocSverificationakeneoconfigs"></a>
<a id="tocsverificationakeneoconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Akeneo. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationAkeneo">VerificationAkeneo</h2>
<!-- backwards compatibility -->
<a id="schemaverificationakeneo"></a>
<a id="schema_VerificationAkeneo"></a>
<a id="tocSverificationakeneo"></a>
<a id="tocsverificationakeneo"></a>

```json
{
  "type": "akeneo",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationAkeneoConfigs](#schemaverificationakeneoconfigs)|false|none|The verification configs for Akeneo. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|akeneo|
|type|AKENEO|

<h2 id="tocS_VerificationAdyenConfigs">VerificationAdyenConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationadyenconfigs"></a>
<a id="schema_VerificationAdyenConfigs"></a>
<a id="tocSverificationadyenconfigs"></a>
<a id="tocsverificationadyenconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Adyen. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationAdyen">VerificationAdyen</h2>
<!-- backwards compatibility -->
<a id="schemaverificationadyen"></a>
<a id="schema_VerificationAdyen"></a>
<a id="tocSverificationadyen"></a>
<a id="tocsverificationadyen"></a>

```json
{
  "type": "adyen",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationAdyenConfigs](#schemaverificationadyenconfigs)|false|none|The verification configs for Adyen. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|adyen|
|type|ADYEN|

<h2 id="tocS_VerificationGitLabConfigs">VerificationGitLabConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationgitlabconfigs"></a>
<a id="schema_VerificationGitLabConfigs"></a>
<a id="tocSverificationgitlabconfigs"></a>
<a id="tocsverificationgitlabconfigs"></a>

```json
{
  "api_key": "string"
}
```

The verification configs for GitLab. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key|string|true|none|none|

<h2 id="tocS_VerificationGitLab">VerificationGitLab</h2>
<!-- backwards compatibility -->
<a id="schemaverificationgitlab"></a>
<a id="schema_VerificationGitLab"></a>
<a id="tocSverificationgitlab"></a>
<a id="tocsverificationgitlab"></a>

```json
{
  "type": "gitlab",
  "configs": {
    "api_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationGitLabConfigs](#schemaverificationgitlabconfigs)|false|none|The verification configs for GitLab. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|gitlab|
|type|GITLAB|

<h2 id="tocS_VerificationPropertyFinderConfigs">VerificationPropertyFinderConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpropertyfinderconfigs"></a>
<a id="schema_VerificationPropertyFinderConfigs"></a>
<a id="tocSverificationpropertyfinderconfigs"></a>
<a id="tocsverificationpropertyfinderconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Property Finder. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationPropertyFinder">VerificationPropertyFinder</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpropertyfinder"></a>
<a id="schema_VerificationPropertyFinder"></a>
<a id="tocSverificationpropertyfinder"></a>
<a id="tocsverificationpropertyfinder"></a>

```json
{
  "type": "property-finder",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPropertyFinderConfigs](#schemaverificationpropertyfinderconfigs)|false|none|The verification configs for Property Finder. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|property-finder|
|type|PROPERTY-FINDER|

<h2 id="tocS_VerificationWooCommerceConfigs">VerificationWooCommerceConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationwoocommerceconfigs"></a>
<a id="schema_VerificationWooCommerceConfigs"></a>
<a id="tocSverificationwoocommerceconfigs"></a>
<a id="tocsverificationwoocommerceconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for WooCommerce. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationWooCommerce">VerificationWooCommerce</h2>
<!-- backwards compatibility -->
<a id="schemaverificationwoocommerce"></a>
<a id="schema_VerificationWooCommerce"></a>
<a id="tocSverificationwoocommerce"></a>
<a id="tocsverificationwoocommerce"></a>

```json
{
  "type": "woocommerce",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationWooCommerceConfigs](#schemaverificationwoocommerceconfigs)|false|none|The verification configs for WooCommerce. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|woocommerce|
|type|WOOCOMMERCE|

<h2 id="tocS_VerificationOuraConfigs">VerificationOuraConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationouraconfigs"></a>
<a id="schema_VerificationOuraConfigs"></a>
<a id="tocSverificationouraconfigs"></a>
<a id="tocsverificationouraconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Oura. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationOura">VerificationOura</h2>
<!-- backwards compatibility -->
<a id="schemaverificationoura"></a>
<a id="schema_VerificationOura"></a>
<a id="tocSverificationoura"></a>
<a id="tocsverificationoura"></a>

```json
{
  "type": "oura",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationOuraConfigs](#schemaverificationouraconfigs)|false|none|The verification configs for Oura. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|oura|
|type|OURA|

<h2 id="tocS_VerificationCommercelayerConfigs">VerificationCommercelayerConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcommercelayerconfigs"></a>
<a id="schema_VerificationCommercelayerConfigs"></a>
<a id="tocSverificationcommercelayerconfigs"></a>
<a id="tocsverificationcommercelayerconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Commercelayer. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationCommercelayer">VerificationCommercelayer</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcommercelayer"></a>
<a id="schema_VerificationCommercelayer"></a>
<a id="tocSverificationcommercelayer"></a>
<a id="tocsverificationcommercelayer"></a>

```json
{
  "type": "commercelayer",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationCommercelayerConfigs](#schemaverificationcommercelayerconfigs)|false|none|The verification configs for Commercelayer. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|commercelayer|
|type|COMMERCELAYER|

<h2 id="tocS_VerificationHubspotConfigs">VerificationHubspotConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationhubspotconfigs"></a>
<a id="schema_VerificationHubspotConfigs"></a>
<a id="tocSverificationhubspotconfigs"></a>
<a id="tocsverificationhubspotconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Hubspot. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationHubspot">VerificationHubspot</h2>
<!-- backwards compatibility -->
<a id="schemaverificationhubspot"></a>
<a id="schema_VerificationHubspot"></a>
<a id="tocSverificationhubspot"></a>
<a id="tocsverificationhubspot"></a>

```json
{
  "type": "hubspot",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationHubspotConfigs](#schemaverificationhubspotconfigs)|false|none|The verification configs for Hubspot. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hubspot|
|type|HUBSPOT|

<h2 id="tocS_VerificationMailgunConfigs">VerificationMailgunConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationmailgunconfigs"></a>
<a id="schema_VerificationMailgunConfigs"></a>
<a id="tocSverificationmailgunconfigs"></a>
<a id="tocsverificationmailgunconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Mailgun. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationMailgun">VerificationMailgun</h2>
<!-- backwards compatibility -->
<a id="schemaverificationmailgun"></a>
<a id="schema_VerificationMailgun"></a>
<a id="tocSverificationmailgun"></a>
<a id="tocsverificationmailgun"></a>

```json
{
  "type": "mailgun",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationMailgunConfigs](#schemaverificationmailgunconfigs)|false|none|The verification configs for Mailgun. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailgun|
|type|MAILGUN|

<h2 id="tocS_VerificationPersonaConfigs">VerificationPersonaConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpersonaconfigs"></a>
<a id="schema_VerificationPersonaConfigs"></a>
<a id="tocSverificationpersonaconfigs"></a>
<a id="tocsverificationpersonaconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Persona. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationPersona">VerificationPersona</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpersona"></a>
<a id="schema_VerificationPersona"></a>
<a id="tocSverificationpersona"></a>
<a id="tocsverificationpersona"></a>

```json
{
  "type": "persona",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPersonaConfigs](#schemaverificationpersonaconfigs)|false|none|The verification configs for Persona. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|persona|
|type|PERSONA|

<h2 id="tocS_VerificationPipedriveConfigs">VerificationPipedriveConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpipedriveconfigs"></a>
<a id="schema_VerificationPipedriveConfigs"></a>
<a id="tocSverificationpipedriveconfigs"></a>
<a id="tocsverificationpipedriveconfigs"></a>

```json
{
  "username": "string",
  "password": "string"
}
```

The verification configs for Pipedrive. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_VerificationPipedrive">VerificationPipedrive</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpipedrive"></a>
<a id="schema_VerificationPipedrive"></a>
<a id="tocSverificationpipedrive"></a>
<a id="tocsverificationpipedrive"></a>

```json
{
  "type": "pipedrive",
  "configs": {
    "username": "string",
    "password": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPipedriveConfigs](#schemaverificationpipedriveconfigs)|false|none|The verification configs for Pipedrive. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pipedrive|
|type|PIPEDRIVE|

<h2 id="tocS_VerificationSendGridConfigs">VerificationSendGridConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsendgridconfigs"></a>
<a id="schema_VerificationSendGridConfigs"></a>
<a id="tocSverificationsendgridconfigs"></a>
<a id="tocsverificationsendgridconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for SendGrid. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSendGrid">VerificationSendGrid</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsendgrid"></a>
<a id="schema_VerificationSendGrid"></a>
<a id="tocSverificationsendgrid"></a>
<a id="tocsverificationsendgrid"></a>

```json
{
  "type": "sendgrid",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSendGridConfigs](#schemaverificationsendgridconfigs)|false|none|The verification configs for SendGrid. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sendgrid|
|type|SENDGRID|

<h2 id="tocS_VerificationWorkOSConfigs">VerificationWorkOSConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationworkosconfigs"></a>
<a id="schema_VerificationWorkOSConfigs"></a>
<a id="tocSverificationworkosconfigs"></a>
<a id="tocsverificationworkosconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for WorkOS. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationWorkOS">VerificationWorkOS</h2>
<!-- backwards compatibility -->
<a id="schemaverificationworkos"></a>
<a id="schema_VerificationWorkOS"></a>
<a id="tocSverificationworkos"></a>
<a id="tocsverificationworkos"></a>

```json
{
  "type": "workos",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationWorkOSConfigs](#schemaverificationworkosconfigs)|false|none|The verification configs for WorkOS. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|workos|
|type|WORKOS|

<h2 id="tocS_VerificationSyncteraConfigs">VerificationSyncteraConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsyncteraconfigs"></a>
<a id="schema_VerificationSyncteraConfigs"></a>
<a id="tocSverificationsyncteraconfigs"></a>
<a id="tocsverificationsyncteraconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Synctera. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSynctera">VerificationSynctera</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsynctera"></a>
<a id="schema_VerificationSynctera"></a>
<a id="tocSverificationsynctera"></a>
<a id="tocsverificationsynctera"></a>

```json
{
  "type": "synctera",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSyncteraConfigs](#schemaverificationsyncteraconfigs)|false|none|The verification configs for Synctera. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|synctera|
|type|SYNCTERA|

<h2 id="tocS_VerificationAWSSNSConfigs">VerificationAWSSNSConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationawssnsconfigs"></a>
<a id="schema_VerificationAWSSNSConfigs"></a>
<a id="tocSverificationawssnsconfigs"></a>
<a id="tocsverificationawssnsconfigs"></a>

```json
{}
```

The verification configs for AWS SNS. Only included if the ?include=verification.configs query param is present

<h2 id="tocS_VerificationAWSSNS">VerificationAWSSNS</h2>
<!-- backwards compatibility -->
<a id="schemaverificationawssns"></a>
<a id="schema_VerificationAWSSNS"></a>
<a id="tocSverificationawssns"></a>
<a id="tocsverificationawssns"></a>

```json
{
  "type": "aws_sns",
  "configs": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationAWSSNSConfigs](#schemaverificationawssnsconfigs)|false|none|The verification configs for AWS SNS. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|aws_sns|
|type|AWS_SNS|

<h2 id="tocS_Verification3dEyeConfigs">Verification3dEyeConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverification3deyeconfigs"></a>
<a id="schema_Verification3dEyeConfigs"></a>
<a id="tocSverification3deyeconfigs"></a>
<a id="tocsverification3deyeconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for 3dEye. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_Verification3dEye">Verification3dEye</h2>
<!-- backwards compatibility -->
<a id="schemaverification3deye"></a>
<a id="schema_Verification3dEye"></a>
<a id="tocSverification3deye"></a>
<a id="tocsverification3deye"></a>

```json
{
  "type": "three_d_eye",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[Verification3dEyeConfigs](#schemaverification3deyeconfigs)|false|none|The verification configs for 3dEye. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|three_d_eye|
|type|THREE_D_EYE|

<h2 id="tocS_VerificationTwitchConfigs">VerificationTwitchConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtwitchconfigs"></a>
<a id="schema_VerificationTwitchConfigs"></a>
<a id="tocSverificationtwitchconfigs"></a>
<a id="tocsverificationtwitchconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Twitch. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationTwitch">VerificationTwitch</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtwitch"></a>
<a id="schema_VerificationTwitch"></a>
<a id="tocSverificationtwitch"></a>
<a id="tocsverificationtwitch"></a>

```json
{
  "type": "twitch",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTwitchConfigs](#schemaverificationtwitchconfigs)|false|none|The verification configs for Twitch. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|twitch|
|type|TWITCH|

<h2 id="tocS_VerificationEnodeConfigs">VerificationEnodeConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationenodeconfigs"></a>
<a id="schema_VerificationEnodeConfigs"></a>
<a id="tocSverificationenodeconfigs"></a>
<a id="tocsverificationenodeconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Enode. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationEnode">VerificationEnode</h2>
<!-- backwards compatibility -->
<a id="schemaverificationenode"></a>
<a id="schema_VerificationEnode"></a>
<a id="tocSverificationenode"></a>
<a id="tocsverificationenode"></a>

```json
{
  "type": "enode",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationEnodeConfigs](#schemaverificationenodeconfigs)|false|none|The verification configs for Enode. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enode|
|type|ENODE|

<h2 id="tocS_VerificationFavroConfigs">VerificationFavroConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationfavroconfigs"></a>
<a id="schema_VerificationFavroConfigs"></a>
<a id="tocSverificationfavroconfigs"></a>
<a id="tocsverificationfavroconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Favro. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationFavro">VerificationFavro</h2>
<!-- backwards compatibility -->
<a id="schemaverificationfavro"></a>
<a id="schema_VerificationFavro"></a>
<a id="tocSverificationfavro"></a>
<a id="tocsverificationfavro"></a>

```json
{
  "type": "favro",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationFavroConfigs](#schemaverificationfavroconfigs)|false|none|The verification configs for Favro. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|favro|
|type|FAVRO|

<h2 id="tocS_VerificationLinearConfigs">VerificationLinearConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationlinearconfigs"></a>
<a id="schema_VerificationLinearConfigs"></a>
<a id="tocSverificationlinearconfigs"></a>
<a id="tocsverificationlinearconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Linear. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationLinear">VerificationLinear</h2>
<!-- backwards compatibility -->
<a id="schemaverificationlinear"></a>
<a id="schema_VerificationLinear"></a>
<a id="tocSverificationlinear"></a>
<a id="tocsverificationlinear"></a>

```json
{
  "type": "linear",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationLinearConfigs](#schemaverificationlinearconfigs)|false|none|The verification configs for Linear. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|linear|
|type|LINEAR|

<h2 id="tocS_VerificationShoplineConfigs">VerificationShoplineConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationshoplineconfigs"></a>
<a id="schema_VerificationShoplineConfigs"></a>
<a id="tocSverificationshoplineconfigs"></a>
<a id="tocsverificationshoplineconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Shopline. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationShopline">VerificationShopline</h2>
<!-- backwards compatibility -->
<a id="schemaverificationshopline"></a>
<a id="schema_VerificationShopline"></a>
<a id="tocSverificationshopline"></a>
<a id="tocsverificationshopline"></a>

```json
{
  "type": "shopline",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationShoplineConfigs](#schemaverificationshoplineconfigs)|false|none|The verification configs for Shopline. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shopline|
|type|SHOPLINE|

<h2 id="tocS_VerificationWixConfigs">VerificationWixConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationwixconfigs"></a>
<a id="schema_VerificationWixConfigs"></a>
<a id="tocSverificationwixconfigs"></a>
<a id="tocsverificationwixconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Wix. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationWix">VerificationWix</h2>
<!-- backwards compatibility -->
<a id="schemaverificationwix"></a>
<a id="schema_VerificationWix"></a>
<a id="tocSverificationwix"></a>
<a id="tocsverificationwix"></a>

```json
{
  "type": "wix",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationWixConfigs](#schemaverificationwixconfigs)|false|none|The verification configs for Wix. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|wix|
|type|WIX|

<h2 id="tocS_VerificationNMIPaymentGatewayConfigs">VerificationNMIPaymentGatewayConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationnmipaymentgatewayconfigs"></a>
<a id="schema_VerificationNMIPaymentGatewayConfigs"></a>
<a id="tocSverificationnmipaymentgatewayconfigs"></a>
<a id="tocsverificationnmipaymentgatewayconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for NMI Payment Gateway. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationNMIPaymentGateway">VerificationNMIPaymentGateway</h2>
<!-- backwards compatibility -->
<a id="schemaverificationnmipaymentgateway"></a>
<a id="schema_VerificationNMIPaymentGateway"></a>
<a id="tocSverificationnmipaymentgateway"></a>
<a id="tocsverificationnmipaymentgateway"></a>

```json
{
  "type": "nmi",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationNMIPaymentGatewayConfigs](#schemaverificationnmipaymentgatewayconfigs)|false|none|The verification configs for NMI Payment Gateway. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|nmi|
|type|NMI|

<h2 id="tocS_VerificationOrbConfigs">VerificationOrbConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationorbconfigs"></a>
<a id="schema_VerificationOrbConfigs"></a>
<a id="tocSverificationorbconfigs"></a>
<a id="tocsverificationorbconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Orb. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationOrb">VerificationOrb</h2>
<!-- backwards compatibility -->
<a id="schemaverificationorb"></a>
<a id="schema_VerificationOrb"></a>
<a id="tocSverificationorb"></a>
<a id="tocsverificationorb"></a>

```json
{
  "type": "orb",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationOrbConfigs](#schemaverificationorbconfigs)|false|none|The verification configs for Orb. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|orb|
|type|ORB|

<h2 id="tocS_VerificationPylonConfigs">VerificationPylonConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpylonconfigs"></a>
<a id="schema_VerificationPylonConfigs"></a>
<a id="tocSverificationpylonconfigs"></a>
<a id="tocsverificationpylonconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Pylon. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationPylon">VerificationPylon</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpylon"></a>
<a id="schema_VerificationPylon"></a>
<a id="tocSverificationpylon"></a>
<a id="tocsverificationpylon"></a>

```json
{
  "type": "pylon",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPylonConfigs](#schemaverificationpylonconfigs)|false|none|The verification configs for Pylon. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pylon|
|type|PYLON|

<h2 id="tocS_VerificationRepayConfigs">VerificationRepayConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrepayconfigs"></a>
<a id="schema_VerificationRepayConfigs"></a>
<a id="tocSverificationrepayconfigs"></a>
<a id="tocsverificationrepayconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Repay. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationRepay">VerificationRepay</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrepay"></a>
<a id="schema_VerificationRepay"></a>
<a id="tocSverificationrepay"></a>
<a id="tocsverificationrepay"></a>

```json
{
  "type": "repay",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationRepayConfigs](#schemaverificationrepayconfigs)|false|none|The verification configs for Repay. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|repay|
|type|REPAY|

<h2 id="tocS_VerificationSquareConfigs">VerificationSquareConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsquareconfigs"></a>
<a id="schema_VerificationSquareConfigs"></a>
<a id="tocSverificationsquareconfigs"></a>
<a id="tocsverificationsquareconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Square. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSquare">VerificationSquare</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsquare"></a>
<a id="schema_VerificationSquare"></a>
<a id="tocSverificationsquare"></a>
<a id="tocsverificationsquare"></a>

```json
{
  "type": "square",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSquareConfigs](#schemaverificationsquareconfigs)|false|none|The verification configs for Square. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|square|
|type|SQUARE|

<h2 id="tocS_VerificationSolidGateConfigs">VerificationSolidGateConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsolidgateconfigs"></a>
<a id="schema_VerificationSolidGateConfigs"></a>
<a id="tocSverificationsolidgateconfigs"></a>
<a id="tocsverificationsolidgateconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for SolidGate. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSolidGate">VerificationSolidGate</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsolidgate"></a>
<a id="schema_VerificationSolidGate"></a>
<a id="tocSverificationsolidgate"></a>
<a id="tocsverificationsolidgate"></a>

```json
{
  "type": "solidgate",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSolidGateConfigs](#schemaverificationsolidgateconfigs)|false|none|The verification configs for SolidGate. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|solidgate|
|type|SOLIDGATE|

<h2 id="tocS_VerificationTrelloConfigs">VerificationTrelloConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtrelloconfigs"></a>
<a id="schema_VerificationTrelloConfigs"></a>
<a id="tocSverificationtrelloconfigs"></a>
<a id="tocsverificationtrelloconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Trello. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationTrello">VerificationTrello</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtrello"></a>
<a id="schema_VerificationTrello"></a>
<a id="tocSverificationtrello"></a>
<a id="tocsverificationtrello"></a>

```json
{
  "type": "trello",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTrelloConfigs](#schemaverificationtrelloconfigs)|false|none|The verification configs for Trello. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|trello|
|type|TRELLO|

<h2 id="tocS_VerificationSanityConfigs">VerificationSanityConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsanityconfigs"></a>
<a id="schema_VerificationSanityConfigs"></a>
<a id="tocSverificationsanityconfigs"></a>
<a id="tocsverificationsanityconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Sanity. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSanity">VerificationSanity</h2>
<!-- backwards compatibility -->
<a id="schemaverificationsanity"></a>
<a id="schema_VerificationSanity"></a>
<a id="tocSverificationsanity"></a>
<a id="tocsverificationsanity"></a>

```json
{
  "type": "sanity",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSanityConfigs](#schemaverificationsanityconfigs)|false|none|The verification configs for Sanity. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sanity|
|type|SANITY|

<h2 id="tocS_VerificationEbayConfigs">VerificationEbayConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationebayconfigs"></a>
<a id="schema_VerificationEbayConfigs"></a>
<a id="tocSverificationebayconfigs"></a>
<a id="tocsverificationebayconfigs"></a>

```json
{
  "environment": "string",
  "client_id": "string",
  "client_secret": "string",
  "dev_id": "string",
  "verification_token": "string"
}
```

The verification configs for Ebay. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|string|true|none|none|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|dev_id|string|true|none|none|
|verification_token|string|true|none|none|

<h2 id="tocS_VerificationEbay">VerificationEbay</h2>
<!-- backwards compatibility -->
<a id="schemaverificationebay"></a>
<a id="schema_VerificationEbay"></a>
<a id="tocSverificationebay"></a>
<a id="tocsverificationebay"></a>

```json
{
  "type": "ebay",
  "configs": {
    "environment": "string",
    "client_id": "string",
    "client_secret": "string",
    "dev_id": "string",
    "verification_token": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationEbayConfigs](#schemaverificationebayconfigs)|false|none|The verification configs for Ebay. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ebay|
|type|EBAY|

<h2 id="tocS_VerificationTelnyxConfigs">VerificationTelnyxConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtelnyxconfigs"></a>
<a id="schema_VerificationTelnyxConfigs"></a>
<a id="tocSverificationtelnyxconfigs"></a>
<a id="tocsverificationtelnyxconfigs"></a>

```json
{
  "public_key": "string"
}
```

The verification configs for Telnyx. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|true|none|none|

<h2 id="tocS_VerificationTelnyx">VerificationTelnyx</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtelnyx"></a>
<a id="schema_VerificationTelnyx"></a>
<a id="tocSverificationtelnyx"></a>
<a id="tocsverificationtelnyx"></a>

```json
{
  "type": "telnyx",
  "configs": {
    "public_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTelnyxConfigs](#schemaverificationtelnyxconfigs)|false|none|The verification configs for Telnyx. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|telnyx|
|type|TELNYX|

<h2 id="tocS_VerificationDiscordConfigs">VerificationDiscordConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdiscordconfigs"></a>
<a id="schema_VerificationDiscordConfigs"></a>
<a id="tocSverificationdiscordconfigs"></a>
<a id="tocsverificationdiscordconfigs"></a>

```json
{
  "public_key": "string"
}
```

The verification configs for Discord. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|true|none|none|

<h2 id="tocS_VerificationDiscord">VerificationDiscord</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdiscord"></a>
<a id="schema_VerificationDiscord"></a>
<a id="tocSverificationdiscord"></a>
<a id="tocsverificationdiscord"></a>

```json
{
  "type": "discord",
  "configs": {
    "public_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationDiscordConfigs](#schemaverificationdiscordconfigs)|false|none|The verification configs for Discord. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|discord|
|type|DISCORD|

<h2 id="tocS_VerificationTokenIOConfigs">VerificationTokenIOConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtokenioconfigs"></a>
<a id="schema_VerificationTokenIOConfigs"></a>
<a id="tocSverificationtokenioconfigs"></a>
<a id="tocsverificationtokenioconfigs"></a>

```json
{
  "public_key": "string"
}
```

The verification configs for TokenIO. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|string|true|none|none|

<h2 id="tocS_VerificationTokenIO">VerificationTokenIO</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtokenio"></a>
<a id="schema_VerificationTokenIO"></a>
<a id="tocSverificationtokenio"></a>
<a id="tocsverificationtokenio"></a>

```json
{
  "type": "tokenio",
  "configs": {
    "public_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTokenIOConfigs](#schemaverificationtokenioconfigs)|false|none|The verification configs for TokenIO. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|tokenio|
|type|TOKENIO|

<h2 id="tocS_VerificationFiservConfigs">VerificationFiservConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationfiservconfigs"></a>
<a id="schema_VerificationFiservConfigs"></a>
<a id="tocSverificationfiservconfigs"></a>
<a id="tocsverificationfiservconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Fiserv. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationFiserv">VerificationFiserv</h2>
<!-- backwards compatibility -->
<a id="schemaverificationfiserv"></a>
<a id="schema_VerificationFiserv"></a>
<a id="tocSverificationfiserv"></a>
<a id="tocsverificationfiserv"></a>

```json
{
  "type": "fiserv",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationFiservConfigs](#schemaverificationfiservconfigs)|false|none|The verification configs for Fiserv. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|fiserv|
|type|FISERV|

<h2 id="tocS_VerificationBondsmithConfigs">VerificationBondsmithConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbondsmithconfigs"></a>
<a id="schema_VerificationBondsmithConfigs"></a>
<a id="tocSverificationbondsmithconfigs"></a>
<a id="tocsverificationbondsmithconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Bondsmith. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationBondsmith">VerificationBondsmith</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbondsmith"></a>
<a id="schema_VerificationBondsmith"></a>
<a id="tocSverificationbondsmith"></a>
<a id="tocsverificationbondsmith"></a>

```json
{
  "type": "bondsmith",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationBondsmithConfigs](#schemaverificationbondsmithconfigs)|false|none|The verification configs for Bondsmith. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bondsmith|
|type|BONDSMITH|

<h2 id="tocS_VerificationVercelLogDrainsConfigs">VerificationVercelLogDrainsConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationvercellogdrainsconfigs"></a>
<a id="schema_VerificationVercelLogDrainsConfigs"></a>
<a id="tocSverificationvercellogdrainsconfigs"></a>
<a id="tocsverificationvercellogdrainsconfigs"></a>

```json
{
  "webhook_secret_key": "string",
  "vercel_log_drains_secret": "string"
}
```

The verification configs for Vercel Log Drains. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string \| null|false|none|none|
|vercel_log_drains_secret|string|true|none|none|

<h2 id="tocS_VerificationVercelLogDrains">VerificationVercelLogDrains</h2>
<!-- backwards compatibility -->
<a id="schemaverificationvercellogdrains"></a>
<a id="schema_VerificationVercelLogDrains"></a>
<a id="tocSverificationvercellogdrains"></a>
<a id="tocsverificationvercellogdrains"></a>

```json
{
  "type": "vercel_log_drains",
  "configs": {
    "webhook_secret_key": "string",
    "vercel_log_drains_secret": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationVercelLogDrainsConfigs](#schemaverificationvercellogdrainsconfigs)|false|none|The verification configs for Vercel Log Drains. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|vercel_log_drains|
|type|VERCEL_LOG_DRAINS|

<h2 id="tocS_VerificationVercelConfigs">VerificationVercelConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationvercelconfigs"></a>
<a id="schema_VerificationVercelConfigs"></a>
<a id="tocSverificationvercelconfigs"></a>
<a id="tocsverificationvercelconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Vercel. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationVercel">VerificationVercel</h2>
<!-- backwards compatibility -->
<a id="schemaverificationvercel"></a>
<a id="schema_VerificationVercel"></a>
<a id="tocSverificationvercel"></a>
<a id="tocsverificationvercel"></a>

```json
{
  "type": "vercel",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationVercelConfigs](#schemaverificationvercelconfigs)|false|none|The verification configs for Vercel. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|vercel|
|type|VERCEL|

<h2 id="tocS_VerificationTebexConfigs">VerificationTebexConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtebexconfigs"></a>
<a id="schema_VerificationTebexConfigs"></a>
<a id="tocSverificationtebexconfigs"></a>
<a id="tocsverificationtebexconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Tebex. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationTebex">VerificationTebex</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtebex"></a>
<a id="schema_VerificationTebex"></a>
<a id="tocSverificationtebex"></a>
<a id="tocsverificationtebex"></a>

```json
{
  "type": "tebex",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTebexConfigs](#schemaverificationtebexconfigs)|false|none|The verification configs for Tebex. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|tebex|
|type|TEBEX|

<h2 id="tocS_VerificationSlackConfigs">VerificationSlackConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationslackconfigs"></a>
<a id="schema_VerificationSlackConfigs"></a>
<a id="tocSverificationslackconfigs"></a>
<a id="tocsverificationslackconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Slack. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationSlack">VerificationSlack</h2>
<!-- backwards compatibility -->
<a id="schemaverificationslack"></a>
<a id="schema_VerificationSlack"></a>
<a id="tocSverificationslack"></a>
<a id="tocsverificationslack"></a>

```json
{
  "type": "slack",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationSlackConfigs](#schemaverificationslackconfigs)|false|none|The verification configs for Slack. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|slack|
|type|SLACK|

<h2 id="tocS_VerificationRazorpayConfigs">VerificationRazorpayConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrazorpayconfigs"></a>
<a id="schema_VerificationRazorpayConfigs"></a>
<a id="tocSverificationrazorpayconfigs"></a>
<a id="tocsverificationrazorpayconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Razorpay. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationRazorpay">VerificationRazorpay</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrazorpay"></a>
<a id="schema_VerificationRazorpay"></a>
<a id="tocSverificationrazorpay"></a>
<a id="tocsverificationrazorpay"></a>

```json
{
  "type": "razorpay",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationRazorpayConfigs](#schemaverificationrazorpayconfigs)|false|none|The verification configs for Razorpay. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|razorpay|
|type|RAZORPAY|

<h2 id="tocS_VerificationMailchimpConfigs">VerificationMailchimpConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationmailchimpconfigs"></a>
<a id="schema_VerificationMailchimpConfigs"></a>
<a id="tocSverificationmailchimpconfigs"></a>
<a id="tocsverificationmailchimpconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Mailchimp. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationMailchimp">VerificationMailchimp</h2>
<!-- backwards compatibility -->
<a id="schemaverificationmailchimp"></a>
<a id="schema_VerificationMailchimp"></a>
<a id="tocSverificationmailchimp"></a>
<a id="tocsverificationmailchimp"></a>

```json
{
  "type": "mailchimp",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationMailchimpConfigs](#schemaverificationmailchimpconfigs)|false|none|The verification configs for Mailchimp. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mailchimp|
|type|MAILCHIMP|

<h2 id="tocS_VerificationPaddleConfigs">VerificationPaddleConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpaddleconfigs"></a>
<a id="schema_VerificationPaddleConfigs"></a>
<a id="tocSverificationpaddleconfigs"></a>
<a id="tocsverificationpaddleconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Paddle. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationPaddle">VerificationPaddle</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpaddle"></a>
<a id="schema_VerificationPaddle"></a>
<a id="tocSverificationpaddle"></a>
<a id="tocsverificationpaddle"></a>

```json
{
  "type": "paddle",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPaddleConfigs](#schemaverificationpaddleconfigs)|false|none|The verification configs for Paddle. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paddle|
|type|PADDLE|

<h2 id="tocS_VerificationPaypalConfigs">VerificationPaypalConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpaypalconfigs"></a>
<a id="schema_VerificationPaypalConfigs"></a>
<a id="tocSverificationpaypalconfigs"></a>
<a id="tocsverificationpaypalconfigs"></a>

```json
{
  "webhook_id": "string"
}
```

The verification configs for Paypal. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_id|string|true|none|none|

<h2 id="tocS_VerificationPaypal">VerificationPaypal</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpaypal"></a>
<a id="schema_VerificationPaypal"></a>
<a id="tocSverificationpaypal"></a>
<a id="tocsverificationpaypal"></a>

```json
{
  "type": "paypal",
  "configs": {
    "webhook_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPaypalConfigs](#schemaverificationpaypalconfigs)|false|none|The verification configs for Paypal. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paypal|
|type|PAYPAL|

<h2 id="tocS_VerificationTreezorConfigs">VerificationTreezorConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtreezorconfigs"></a>
<a id="schema_VerificationTreezorConfigs"></a>
<a id="tocSverificationtreezorconfigs"></a>
<a id="tocsverificationtreezorconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Treezor. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationTreezor">VerificationTreezor</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtreezor"></a>
<a id="schema_VerificationTreezor"></a>
<a id="tocSverificationtreezor"></a>
<a id="tocsverificationtreezor"></a>

```json
{
  "type": "treezor",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationTreezorConfigs](#schemaverificationtreezorconfigs)|false|none|The verification configs for Treezor. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|treezor|
|type|TREEZOR|

<h2 id="tocS_VerificationPraxisConfigs">VerificationPraxisConfigs</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpraxisconfigs"></a>
<a id="schema_VerificationPraxisConfigs"></a>
<a id="tocSverificationpraxisconfigs"></a>
<a id="tocsverificationpraxisconfigs"></a>

```json
{
  "webhook_secret_key": "string"
}
```

The verification configs for Praxis. Only included if the ?include=verification.configs query param is present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhook_secret_key|string|true|none|none|

<h2 id="tocS_VerificationPraxis">VerificationPraxis</h2>
<!-- backwards compatibility -->
<a id="schemaverificationpraxis"></a>
<a id="schema_VerificationPraxis"></a>
<a id="tocSverificationpraxis"></a>
<a id="tocsverificationpraxis"></a>

```json
{
  "type": "praxis",
  "configs": {
    "webhook_secret_key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|configs|[VerificationPraxisConfigs](#schemaverificationpraxisconfigs)|false|none|The verification configs for Praxis. Only included if the ?include=verification.configs query param is present|

#### Enumerated Values

|Property|Value|
|---|---|
|type|praxis|
|type|PRAXIS|

<h2 id="tocS_VerificationConfig">VerificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaverificationconfig"></a>
<a id="schema_VerificationConfig"></a>
<a id="tocSverificationconfig"></a>
<a id="tocsverificationconfig"></a>

```json
{
  "type": "hmac",
  "configs": {
    "webhook_secret_key": "string",
    "algorithm": "md5",
    "header_key": "string",
    "encoding": "base64"
  }
}
```

The verification configs for the specified verification type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[VerificationHMAC](#schemaverificationhmac)|false|none|none|
|*oneOf*|[VerificationBasicAuth](#schemaverificationbasicauth)|false|none|none|
|*oneOf*|[VerificationAPIKey](#schemaverificationapikey)|false|none|none|
|*oneOf*|[VerificationBridge](#schemaverificationbridge)|false|none|none|
|*oneOf*|[VerificationCloudSignal](#schemaverificationcloudsignal)|false|none|none|
|*oneOf*|[VerificationCourier](#schemaverificationcourier)|false|none|none|
|*oneOf*|[VerificationFrontApp](#schemaverificationfrontapp)|false|none|none|
|*oneOf*|[VerificationTwitter](#schemaverificationtwitter)|false|none|none|
|*oneOf*|[VerificationStripe](#schemaverificationstripe)|false|none|none|
|*oneOf*|[VerificationRecharge](#schemaverificationrecharge)|false|none|none|
|*oneOf*|[VerificationTwilio](#schemaverificationtwilio)|false|none|none|
|*oneOf*|[VerificationGitHub](#schemaverificationgithub)|false|none|none|
|*oneOf*|[VerificationShopify](#schemaverificationshopify)|false|none|none|
|*oneOf*|[VerificationPostmark](#schemaverificationpostmark)|false|none|none|
|*oneOf*|[VerificationTypeform](#schemaverificationtypeform)|false|none|none|
|*oneOf*|[VerificationXero](#schemaverificationxero)|false|none|none|
|*oneOf*|[VerificationSvix](#schemaverificationsvix)|false|none|none|
|*oneOf*|[VerificationZoom](#schemaverificationzoom)|false|none|none|
|*oneOf*|[VerificationAkeneo](#schemaverificationakeneo)|false|none|none|
|*oneOf*|[VerificationAdyen](#schemaverificationadyen)|false|none|none|
|*oneOf*|[VerificationGitLab](#schemaverificationgitlab)|false|none|none|
|*oneOf*|[VerificationPropertyFinder](#schemaverificationpropertyfinder)|false|none|none|
|*oneOf*|[VerificationWooCommerce](#schemaverificationwoocommerce)|false|none|none|
|*oneOf*|[VerificationOura](#schemaverificationoura)|false|none|none|
|*oneOf*|[VerificationCommercelayer](#schemaverificationcommercelayer)|false|none|none|
|*oneOf*|[VerificationHubspot](#schemaverificationhubspot)|false|none|none|
|*oneOf*|[VerificationMailgun](#schemaverificationmailgun)|false|none|none|
|*oneOf*|[VerificationPersona](#schemaverificationpersona)|false|none|none|
|*oneOf*|[VerificationPipedrive](#schemaverificationpipedrive)|false|none|none|
|*oneOf*|[VerificationSendGrid](#schemaverificationsendgrid)|false|none|none|
|*oneOf*|[VerificationWorkOS](#schemaverificationworkos)|false|none|none|
|*oneOf*|[VerificationSynctera](#schemaverificationsynctera)|false|none|none|
|*oneOf*|[VerificationAWSSNS](#schemaverificationawssns)|false|none|none|
|*oneOf*|[Verification3dEye](#schemaverification3deye)|false|none|none|
|*oneOf*|[VerificationTwitch](#schemaverificationtwitch)|false|none|none|
|*oneOf*|[VerificationEnode](#schemaverificationenode)|false|none|none|
|*oneOf*|[VerificationFavro](#schemaverificationfavro)|false|none|none|
|*oneOf*|[VerificationLinear](#schemaverificationlinear)|false|none|none|
|*oneOf*|[VerificationShopline](#schemaverificationshopline)|false|none|none|
|*oneOf*|[VerificationWix](#schemaverificationwix)|false|none|none|
|*oneOf*|[VerificationNMIPaymentGateway](#schemaverificationnmipaymentgateway)|false|none|none|
|*oneOf*|[VerificationOrb](#schemaverificationorb)|false|none|none|
|*oneOf*|[VerificationPylon](#schemaverificationpylon)|false|none|none|
|*oneOf*|[VerificationRepay](#schemaverificationrepay)|false|none|none|
|*oneOf*|[VerificationSquare](#schemaverificationsquare)|false|none|none|
|*oneOf*|[VerificationSolidGate](#schemaverificationsolidgate)|false|none|none|
|*oneOf*|[VerificationTrello](#schemaverificationtrello)|false|none|none|
|*oneOf*|[VerificationSanity](#schemaverificationsanity)|false|none|none|
|*oneOf*|[VerificationEbay](#schemaverificationebay)|false|none|none|
|*oneOf*|[VerificationTelnyx](#schemaverificationtelnyx)|false|none|none|
|*oneOf*|[VerificationDiscord](#schemaverificationdiscord)|false|none|none|
|*oneOf*|[VerificationTokenIO](#schemaverificationtokenio)|false|none|none|
|*oneOf*|[VerificationFiserv](#schemaverificationfiserv)|false|none|none|
|*oneOf*|[VerificationBondsmith](#schemaverificationbondsmith)|false|none|none|
|*oneOf*|[VerificationVercelLogDrains](#schemaverificationvercellogdrains)|false|none|none|
|*oneOf*|[VerificationVercel](#schemaverificationvercel)|false|none|none|
|*oneOf*|[VerificationTebex](#schemaverificationtebex)|false|none|none|
|*oneOf*|[VerificationSlack](#schemaverificationslack)|false|none|none|
|*oneOf*|[VerificationRazorpay](#schemaverificationrazorpay)|false|none|none|
|*oneOf*|[VerificationMailchimp](#schemaverificationmailchimp)|false|none|none|
|*oneOf*|[VerificationPaddle](#schemaverificationpaddle)|false|none|none|
|*oneOf*|[VerificationPaypal](#schemaverificationpaypal)|false|none|none|
|*oneOf*|[VerificationTreezor](#schemaverificationtreezor)|false|none|none|
|*oneOf*|[VerificationPraxis](#schemaverificationpraxis)|false|none|none|

<h2 id="tocS_SourceAllowedHTTPMethod">SourceAllowedHTTPMethod</h2>
<!-- backwards compatibility -->
<a id="schemasourceallowedhttpmethod"></a>
<a id="schema_SourceAllowedHTTPMethod"></a>
<a id="tocSsourceallowedhttpmethod"></a>
<a id="tocssourceallowedhttpmethod"></a>

```json
[
  "GET"
]
```

List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.

<h2 id="tocS_SourceCustomResponseContentType">SourceCustomResponseContentType</h2>
<!-- backwards compatibility -->
<a id="schemasourcecustomresponsecontenttype"></a>
<a id="schema_SourceCustomResponseContentType"></a>
<a id="tocSsourcecustomresponsecontenttype"></a>
<a id="tocssourcecustomresponsecontenttype"></a>

```json
"json"
```

Content type of the custom response

<h2 id="tocS_SourceCustomResponse">SourceCustomResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcecustomresponse"></a>
<a id="schema_SourceCustomResponse"></a>
<a id="tocSsourcecustomresponse"></a>
<a id="tocssourcecustomresponse"></a>

```json
{
  "content_type": "json",
  "body": "string"
}
```

Custom response object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|[SourceCustomResponseContentType](#schemasourcecustomresponsecontenttype)|true|none|Content type of the custom response|
|body|string|true|none|Body of the custom response|

#### Enumerated Values

|Property|Value|
|---|---|
|content_type|json|
|content_type|text|
|content_type|xml|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "team_id": "string",
  "url": "string",
  "verification": {
    "type": "hmac",
    "configs": {
      "webhook_secret_key": "string",
      "algorithm": "md5",
      "header_key": "string",
      "encoding": "base64"
    }
  },
  "allowed_http_methods": [
    "GET"
  ],
  "custom_response": {
    "content_type": "json",
    "body": "string"
  },
  "disabled_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

Associated [Source](#source-object) object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the source|
|name|string|true|none|Name for the source|
|description|string \| null|false|none|Description of the source|
|team_id|string|true|none|ID of the project|
|url|string(URL)|true|none|A unique URL that must be supplied to your webhook's provider|
|verification|[VerificationConfig](#schemaverificationconfig)|false|none|The verification configs for the specified verification type|
|allowed_http_methods|[SourceAllowedHTTPMethod](#schemasourceallowedhttpmethod)|false|none|List of allowed HTTP methods. Defaults to PUT, POST, PATCH, DELETE.|
|custom_response|[SourceCustomResponse](#schemasourcecustomresponse)|false|none|Custom response object|
|disabled_at|string(date-time) \| null|true|none|Date the source was disabled|
|updated_at|string(date-time)|true|none|Date the source was last updated|
|created_at|string(date-time)|true|none|Date the source was created|

#### Enumerated Values

|Property|Value|
|---|---|
|allowed_http_methods|GET|
|allowed_http_methods|POST|
|allowed_http_methods|PUT|
|allowed_http_methods|PATCH|
|allowed_http_methods|DELETE|

<h2 id="tocS_SourcePaginatedResult">SourcePaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemasourcepaginatedresult"></a>
<a id="schema_SourcePaginatedResult"></a>
<a id="tocSsourcepaginatedresult"></a>
<a id="tocssourcepaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "team_id": "string",
      "url": "string",
      "verification": {
        "type": "hmac",
        "configs": {
          "webhook_secret_key": "string",
          "algorithm": "md5",
          "header_key": "string",
          "encoding": "base64"
        }
      },
      "allowed_http_methods": [
        "GET"
      ],
      "custom_response": {
        "content_type": "json",
        "body": "string"
      },
      "disabled_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Source](#schemasource)]|false|none|none|

<h2 id="tocS_TopicsValue">TopicsValue</h2>
<!-- backwards compatibility -->
<a id="schematopicsvalue"></a>
<a id="schema_TopicsValue"></a>
<a id="tocStopicsvalue"></a>
<a id="tocstopicsvalue"></a>

```json
"issue.opened"
```

Supported topics

<h2 id="tocS_ToggleWebhookNotifications">ToggleWebhookNotifications</h2>
<!-- backwards compatibility -->
<a id="schematogglewebhooknotifications"></a>
<a id="schema_ToggleWebhookNotifications"></a>
<a id="tocStogglewebhooknotifications"></a>
<a id="tocstogglewebhooknotifications"></a>

```json
{
  "enabled": true,
  "topics": [
    "issue.opened"
  ],
  "source_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|topics|[[TopicsValue](#schematopicsvalue)]|false|none|none|
|source_id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|topics|issue.opened|
|topics|issue.updated|
|topics|deprecated.attempt-failed|
|topics|event.successful|

<h2 id="tocS_AddCustomHostname">AddCustomHostname</h2>
<!-- backwards compatibility -->
<a id="schemaaddcustomhostname"></a>
<a id="schema_AddCustomHostname"></a>
<a id="tocSaddcustomhostname"></a>
<a id="tocsaddcustomhostname"></a>

```json
{
  "hostname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|true|none|The custom hostname to attach to the project|

<h2 id="tocS_DeleteCustomDomainSchema">DeleteCustomDomainSchema</h2>
<!-- backwards compatibility -->
<a id="schemadeletecustomdomainschema"></a>
<a id="schema_DeleteCustomDomainSchema"></a>
<a id="tocSdeletecustomdomainschema"></a>
<a id="tocsdeletecustomdomainschema"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The custom hostname ID|

<h2 id="tocS_ListCustomDomainSchema">ListCustomDomainSchema</h2>
<!-- backwards compatibility -->
<a id="schemalistcustomdomainschema"></a>
<a id="schema_ListCustomDomainSchema"></a>
<a id="tocSlistcustomdomainschema"></a>
<a id="tocslistcustomdomainschema"></a>

```json
[
  {
    "id": "string",
    "hostname": "string",
    "status": "string",
    "ssl": {
      "id": "string",
      "type": "string",
      "method": "string",
      "status": "string",
      "txt_name": "string",
      "txt_value": "string",
      "validation_records": [
        {
          "status": "string",
          "txt_name": "string",
          "txt_value": "string"
        }
      ],
      "dcv_delegation_records": [
        {
          "cname": "string",
          "cname_target": "string"
        }
      ],
      "settings": {
        "min_tls_version": "string"
      },
      "bundle_method": "string",
      "wildcard": true,
      "certificate_authority": "string"
    },
    "verification_errors": [
      "string"
    ],
    "ownership_verification": {
      "type": "string",
      "name": "string",
      "value": "string"
    },
    "created_at": "string"
  }
]
```

<h2 id="tocS_Transformation">Transformation</h2>
<!-- backwards compatibility -->
<a id="schematransformation"></a>
<a id="schema_Transformation"></a>
<a id="tocStransformation"></a>
<a id="tocstransformation"></a>

```json
{
  "id": "string",
  "team_id": "string",
  "name": "string",
  "code": "string",
  "encrypted_env": "string",
  "iv": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the transformation|
|team_id|string|true|none|ID of the project|
|name|string|true|none|A unique, human-friendly name for the transformation|
|code|string|true|none|JavaScript code to be executed|
|encrypted_env|string \| null|false|none|none|
|iv|string \| null|false|none|none|
|env|object \| null|false|none|Key-value environment variables to be passed to the transformation|
|updated_at|string(date-time)|true|none|Date the transformation was last updated|
|created_at|string(date-time)|true|none|Date the transformation was created|

<h2 id="tocS_TransformationPaginatedResult">TransformationPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schematransformationpaginatedresult"></a>
<a id="schema_TransformationPaginatedResult"></a>
<a id="tocStransformationpaginatedresult"></a>
<a id="tocstransformationpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "team_id": "string",
      "name": "string",
      "code": "string",
      "encrypted_env": "string",
      "iv": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Transformation](#schematransformation)]|false|none|none|

<h2 id="tocS_TransformationExecutorOutput">TransformationExecutorOutput</h2>
<!-- backwards compatibility -->
<a id="schematransformationexecutoroutput"></a>
<a id="schema_TransformationExecutorOutput"></a>
<a id="tocStransformationexecutoroutput"></a>
<a id="tocstransformationexecutoroutput"></a>

```json
{
  "request_id": "string",
  "transformation_id": "string",
  "execution_id": "string",
  "log_level": "debug",
  "request": {
    "headers": "string",
    "path": "string",
    "query": {},
    "parsed_query": "string",
    "body": "string"
  },
  "console": [
    {
      "type": "error",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string \| null|false|none|none|
|transformation_id|string \| null|false|none|none|
|execution_id|string \| null|false|none|none|
|log_level|[TransformationExecutionLogLevel](#schematransformationexecutionloglevel)|true|none|The minimum log level to open the issue on|
|request|object \| null|false|none|none|
|console|[[ConsoleLine](#schemaconsoleline)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|log_level|debug|
|log_level|info|
|log_level|warn|
|log_level|error|
|log_level|fatal|

<h2 id="tocS_TransformationExecutionPaginatedResult">TransformationExecutionPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schematransformationexecutionpaginatedresult"></a>
<a id="schema_TransformationExecutionPaginatedResult"></a>
<a id="tocStransformationexecutionpaginatedresult"></a>
<a id="tocstransformationexecutionpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "transformed_event_data_id": "string",
      "original_event_data_id": "string",
      "transformation_id": "string",
      "team_id": "string",
      "webhook_id": "string",
      "log_level": "debug",
      "logs": [
        {
          "type": "error",
          "message": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z",
      "original_event_data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "transformed_event_data": {
        "path": "string",
        "query": "string",
        "parsed_query": "string",
        "headers": "string",
        "body": "string",
        "is_large_payload": true
      },
      "issue_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[TransformationExecution](#schematransformationexecution)]|false|none|none|

<h2 id="tocS_RetryStrategy">RetryStrategy</h2>
<!-- backwards compatibility -->
<a id="schemaretrystrategy"></a>
<a id="schema_RetryStrategy"></a>
<a id="tocSretrystrategy"></a>
<a id="tocsretrystrategy"></a>

```json
"linear"
```

Algorithm to use when calculating delay between retries

<h2 id="tocS_RetryRule">RetryRule</h2>
<!-- backwards compatibility -->
<a id="schemaretryrule"></a>
<a id="schema_RetryRule"></a>
<a id="tocSretryrule"></a>
<a id="tocsretryrule"></a>

```json
{
  "type": "retry",
  "strategy": "linear",
  "interval": 0,
  "count": 0,
  "response_status_codes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A retry rule must be of type `retry`|
|strategy|[RetryStrategy](#schemaretrystrategy)|true|none|Algorithm to use when calculating delay between retries|
|interval|integer \| null|false|none|Time in MS between each retry|
|count|integer \| null|false|none|Maximum number of retries to attempt|
|response_status_codes|[string]|false|none|HTTP codes to retry on. Accepts: range expressions (e.g., "400-499", ">400"), specific codes (e.g., 404), and exclusions (e.g., "!401"). Example: ["500-599", ">400", 404, "!401"]|

#### Enumerated Values

|Property|Value|
|---|---|
|type|retry|
|strategy|linear|
|strategy|exponential|

<h2 id="tocS_FilterRuleProperty">FilterRuleProperty</h2>
<!-- backwards compatibility -->
<a id="schemafilterruleproperty"></a>
<a id="schema_FilterRuleProperty"></a>
<a id="tocSfilterruleproperty"></a>
<a id="tocsfilterruleproperty"></a>

```json
"string"
```

JSON using our filter syntax to filter on request headers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|string \| null|false|none|none|
|*anyOf*|number(float) \| null|false|none|none|
|*anyOf*|boolean \| null|false|none|none|
|*anyOf*|object \| null|false|none|none|

<h2 id="tocS_FilterRule">FilterRule</h2>
<!-- backwards compatibility -->
<a id="schemafilterrule"></a>
<a id="schema_FilterRule"></a>
<a id="tocSfilterrule"></a>
<a id="tocsfilterrule"></a>

```json
{
  "type": "filter",
  "headers": "string",
  "body": "string",
  "query": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A filter rule must be of type `filter`|
|headers|[FilterRuleProperty](#schemafilterruleproperty)|false|none|JSON using our filter syntax to filter on request headers|
|body|[FilterRuleProperty](#schemafilterruleproperty)|false|none|JSON using our filter syntax to filter on request headers|
|query|[FilterRuleProperty](#schemafilterruleproperty)|false|none|JSON using our filter syntax to filter on request headers|
|path|[FilterRuleProperty](#schemafilterruleproperty)|false|none|JSON using our filter syntax to filter on request headers|

#### Enumerated Values

|Property|Value|
|---|---|
|type|filter|

<h2 id="tocS_TransformRule">TransformRule</h2>
<!-- backwards compatibility -->
<a id="schematransformrule"></a>
<a id="schema_TransformRule"></a>
<a id="tocStransformrule"></a>
<a id="tocstransformrule"></a>

```json
{
  "type": "transform",
  "transformation_id": "string",
  "transformation": {
    "name": "string",
    "code": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A transformation rule must be of type `transformation`|
|transformation_id|string \| null|false|none|ID of the attached transformation object. Optional input, always set once the rule is defined|
|transformation|object|false|none|You can optionally define a new transformation while creating a transform rule|

#### Enumerated Values

|Property|Value|
|---|---|
|type|transform|

<h2 id="tocS_DelayRule">DelayRule</h2>
<!-- backwards compatibility -->
<a id="schemadelayrule"></a>
<a id="schema_DelayRule"></a>
<a id="tocSdelayrule"></a>
<a id="tocsdelayrule"></a>

```json
{
  "type": "delay",
  "delay": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A delay rule must be of type `delay`|
|delay|integer|true|none|Delay to introduce in MS|

#### Enumerated Values

|Property|Value|
|---|---|
|type|delay|

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "type": "retry",
  "strategy": "linear",
  "interval": 0,
  "count": 0,
  "response_status_codes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[RetryRule](#schemaretryrule)|false|none|none|
|*anyOf*|[FilterRule](#schemafilterrule)|false|none|none|
|*anyOf*|[TransformRule](#schematransformrule)|false|none|none|
|*anyOf*|[DelayRule](#schemadelayrule)|false|none|none|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "id": "string",
  "name": "string",
  "full_name": "string",
  "description": "string",
  "team_id": "string",
  "destination": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "path_forwarding_disabled": true,
    "url": "string",
    "cli_path": "string",
    "rate_limit": 0,
    "rate_limit_period": "second",
    "http_method": "GET",
    "auth_method": {
      "type": "HOOKDECK_SIGNATURE",
      "config": {}
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "source": {
    "id": "string",
    "name": "string",
    "description": "string",
    "team_id": "string",
    "url": "string",
    "verification": {
      "type": "hmac",
      "configs": {
        "webhook_secret_key": "string",
        "algorithm": "md5",
        "header_key": "string",
        "encoding": "base64"
      }
    },
    "allowed_http_methods": [
      "GET"
    ],
    "custom_response": {
      "content_type": "json",
      "body": "string"
    },
    "disabled_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "created_at": "1970-01-01T00:00:00Z"
  },
  "rules": [
    {
      "type": "retry",
      "strategy": "linear",
      "interval": 0,
      "count": 0,
      "response_status_codes": [
        "string"
      ]
    }
  ],
  "disabled_at": "1970-01-01T00:00:00Z",
  "paused_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the connection|
|name|string \| null|true|none|Unique name of the connection for this source|
|full_name|string \| null|true|none|Full name of the connection concatenated from source, connection and desitnation name|
|description|string \| null|true|none|Description of the connection|
|team_id|string|true|none|ID of the project|
|destination|[Destination](#schemadestination)|true|none|Associated [Destination](#destination-object) object|
|source|[Source](#schemasource)|true|none|Associated [Source](#source-object) object|
|rules|[[Rule](#schemarule)]|true|none|Array of rules configured on the connection|
|disabled_at|string(date-time) \| null|true|none|Date the connection was disabled|
|paused_at|string(date-time) \| null|true|none|Date the connection was paused|
|updated_at|string(date-time)|true|none|Date the connection was last updated|
|created_at|string(date-time)|true|none|Date the connection was created|

<h2 id="tocS_ConnectionPaginatedResult">ConnectionPaginatedResult</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionpaginatedresult"></a>
<a id="schema_ConnectionPaginatedResult"></a>
<a id="tocSconnectionpaginatedresult"></a>
<a id="tocsconnectionpaginatedresult"></a>

```json
{
  "pagination": {
    "order_by": "string",
    "dir": "asc",
    "limit": 0,
    "prev": "string",
    "next": "string"
  },
  "count": 0,
  "models": [
    {
      "id": "string",
      "name": "string",
      "full_name": "string",
      "description": "string",
      "team_id": "string",
      "destination": {
        "id": "string",
        "name": "string",
        "description": "string",
        "team_id": "string",
        "path_forwarding_disabled": true,
        "url": "string",
        "cli_path": "string",
        "rate_limit": 0,
        "rate_limit_period": "second",
        "http_method": "GET",
        "auth_method": {
          "type": "HOOKDECK_SIGNATURE",
          "config": {}
        },
        "disabled_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z"
      },
      "source": {
        "id": "string",
        "name": "string",
        "description": "string",
        "team_id": "string",
        "url": "string",
        "verification": {
          "type": "hmac",
          "configs": {
            "webhook_secret_key": "string",
            "algorithm": "md5",
            "header_key": "string",
            "encoding": "base64"
          }
        },
        "allowed_http_methods": [
          "GET"
        ],
        "custom_response": {
          "content_type": "json",
          "body": "string"
        },
        "disabled_at": "1970-01-01T00:00:00Z",
        "updated_at": "1970-01-01T00:00:00Z",
        "created_at": "1970-01-01T00:00:00Z"
      },
      "rules": [
        {
          "type": "retry",
          "strategy": "linear",
          "interval": 0,
          "count": 0,
          "response_status_codes": [
            "string"
          ]
        }
      ],
      "disabled_at": "1970-01-01T00:00:00Z",
      "paused_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[SeekPagination](#schemaseekpagination)|false|none|none|
|count|integer|false|none|none|
|models|[[Connection](#schemaconnection)]|false|none|none|
