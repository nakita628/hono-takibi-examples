<h1 id="triggerdev-api">Trigger.dev API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for triggering events in Trigger.dev

Base URLs:

* <a href="https://api.trigger.dev">https://api.trigger.dev</a> - Trigger.dev API server

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="triggerdev-api-events">Events</h1>

## Create an event

<a id="opIdsendEvent"></a>

> Code samples

```bash
curl https://api.trigger.dev/api/v1/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "event": {
      "name": "string",
      "payload": {},
      "context": {},
      "id": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "source": "string"
    },
    "options": {
      "deliverAt": "1970-01-01T00:00:00Z",
      "deliverAfter": 0,
      "accountId": "string"
    }
  }'
```

`POST /api/v1/events`

Send an event to Trigger.dev to trigger job runs through eventTrigger()

<a href="https://trigger.dev/docs/api/events/send-event">Find more info here</a>

> Body parameter

```json
{
  "event": {
    "name": "string",
    "payload": {},
    "context": {},
    "id": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "source": "string"
  },
  "options": {
    "deliverAt": "1970-01-01T00:00:00Z",
    "deliverAfter": 0,
    "accountId": "string"
  }
}
```

<h3 id="create-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventRequest](#schemaeventrequest)|true|none|
|» event|body|object|false|none|
|» » name|body|string|true|The name of the event|
|» » payload|body|object|false|The payload of the event|
|» » context|body|object|false|An optional context object|
|» » id|body|string|false|Unique identifier for the event. Auto-generated if not provided. If you provide an ID that already exists, the event will not be redelivered.|
|» » timestamp|body|string(date-time)|false|Event timestamp. Defaults to current timestamp if not provided.|
|» » source|body|string|false|Event source, default is 'trigger.dev'.|
|» options|body|object|false|none|
|» » deliverAt|body|string(date-time)|false|Optional Date to deliver the event.|
|» » deliverAfter|body|integer|false|Optional delay in seconds before delivering the event.|
|» » accountId|body|string|false|Optional account ID to associate with the event.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "payload": {},
  "context": {},
  "timestamp": "1970-01-01T00:00:00Z",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveredAt": "1970-01-01T00:00:00Z",
  "cancelledAt": "1970-01-01T00:00:00Z"
}
```

> 422 Response

```json
{
  "error": "string"
}
```

<h3 id="create-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event successfully sent|[EventResponse](#schemaeventresponse)|
|400|Bad Request|Invalid request|None|
|401|Unauthorized|Unauthorized - API key is missing or invalid|None|
|422|Unprocessable Entity|Invalid request body|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="triggerdev-api-batches">Batches</h1>

## Create a batch (Phase 1)

<a id="opIdcreateBatch"></a>

> Code samples

```bash
curl https://api.trigger.dev/api/v3/batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "runCount": 1,
    "taskIdentifiers": [
      "string"
    ],
    "parentRunId": "string",
    "resumeParentOnCompletion": true,
    "idempotencyKey": "string"
  }'
```

`POST /api/v3/batches`

Phase 1 of 2-phase batch API. Creates a batch record and optionally blocks the parent run for batchTriggerAndWait.
After creating a batch, stream items via POST /api/v3/batches/{batchId}/items.


<a href="https://trigger.dev/docs/triggering">Find more info here</a>

> Body parameter

```json
{
  "runCount": 1,
  "taskIdentifiers": [
    "string"
  ],
  "parentRunId": "string",
  "resumeParentOnCompletion": true,
  "idempotencyKey": "string"
}
```

<h3 id="create-a-batch-phase-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateBatchRequest](#schemacreatebatchrequest)|true|none|
|» runCount|body|integer|true|Expected number of items in the batch. Must be a positive integer, up to the server's maximum batch size (1,000 by default; self-hosted instances can configure it). Requests above the maximum return a 400.|
|» taskIdentifiers|body|[string]|false|Distinct task identifiers of the items in the batch. Used to authorize tokens scoped to specific tasks. If omitted, only credentials with broad task access are accepted.|
|» parentRunId|body|string|false|Parent run ID (friendly ID) for batchTriggerAndWait.|
|» resumeParentOnCompletion|body|boolean|false|Whether to resume parent on completion. Set to true for batchTriggerAndWait.|
|» idempotencyKey|body|string|false|Idempotency key for the batch. If provided and a batch with this key already exists, the existing batch will be returned.|

> Example responses

> 202 Response

```json
{
  "id": "string",
  "runCount": 0,
  "isCached": true,
  "idempotencyKey": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 422 Response

```json
{
  "error": "string"
}
```

> 429 Response

```json
{
  "error": "string"
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="create-a-batch-phase-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Batch successfully created|[CreateBatchResponse](#schemacreatebatchresponse)|
|400|Bad Request|Invalid request (e.g., runCount <= 0 or exceeds maximum)|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized - API key is missing or invalid|None|
|422|Unprocessable Entity|Validation error|[Error](#schemaerror)|
|429|Too Many Requests|Rate limit exceeded|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|x-trigger-jwt-claims|string||JWT claims for the batch|
|202|x-trigger-jwt|string||JWT token for browser clients|
|429|X-RateLimit-Limit|integer||Maximum number of requests allowed|
|429|X-RateLimit-Remaining|integer||Number of requests remaining|
|429|X-RateLimit-Reset|integer||Unix timestamp when the rate limit resets|
|429|Retry-After|integer||Seconds to wait before retrying|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

## Stream batch items (Phase 2)

<a id="opIdstreamBatchItems"></a>

> Code samples

```bash
curl https://api.trigger.dev/api/v3/batches/string/items \
  -X POST \
  -H 'Content-Type: application/x-ndjson' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`POST /api/v3/batches/{batchId}/items`

Phase 2 of 2-phase batch API. Accepts an NDJSON stream of batch items and enqueues them.
Each line in the body should be a valid BatchItemNDJSON object.
The stream is processed with backpressure - items are enqueued as they arrive.
The batch is sealed when the stream completes successfully.


<a href="https://trigger.dev/docs/triggering">Find more info here</a>

> Body parameter

```text
string
```

<h3 id="stream-batch-items-phase-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchId|path|string|true|The batch ID returned from POST /api/v3/batches|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "itemsAccepted": 0,
  "itemsDeduplicated": 0,
  "sealed": true,
  "enqueuedCount": 0,
  "expectedCount": 0
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 401 Response

```json
{
  "error": "string"
}
```

> 415 Response

```json
{
  "error": "string"
}
```

> 422 Response

```json
{
  "error": "string"
}
```

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="stream-batch-items-phase-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Items successfully processed|[StreamBatchItemsResponse](#schemastreambatchitemsresponse)|
|400|Bad Request|Invalid request (e.g., invalid JSON, item exceeds maximum size)|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized - API key is missing or invalid|[Error](#schemaerror)|
|415|Unsupported Media Type|Unsupported Media Type - Content-Type must be application/x-ndjson or application/ndjson|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation error|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<h2 id="tocS_EventRequest">EventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventrequest"></a>
<a id="schema_EventRequest"></a>
<a id="tocSeventrequest"></a>
<a id="tocseventrequest"></a>

```json
{
  "event": {
    "name": "string",
    "payload": {},
    "context": {},
    "id": "string",
    "timestamp": "1970-01-01T00:00:00Z",
    "source": "string"
  },
  "options": {
    "deliverAt": "1970-01-01T00:00:00Z",
    "deliverAfter": 0,
    "accountId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|object|false|none|none|
|options|object|false|none|none|

<h2 id="tocS_EventResponse">EventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventresponse"></a>
<a id="schema_EventResponse"></a>
<a id="tocSeventresponse"></a>
<a id="tocseventresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "payload": {},
  "context": {},
  "timestamp": "1970-01-01T00:00:00Z",
  "deliverAt": "1970-01-01T00:00:00Z",
  "deliveredAt": "1970-01-01T00:00:00Z",
  "cancelledAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the event that was sent.|
|name|string|false|none|The name of the event that was sent.|
|payload|[DeserializedJson](#schemadeserializedjson)|false|none|A JSON object that represents the deserialized payload or context.|
|context|[DeserializedJson](#schemadeserializedjson)|false|none|The context of the event that was sent. Null if no context was set.|
|timestamp|string(date-time)|false|none|The timestamp of the event that was sent.|
|deliverAt|string(date-time) \| null|false|none|The timestamp when the event will be delivered. Null if not applicable.|
|deliveredAt|string(date-time) \| null|false|none|The timestamp when the event was delivered. Null if not applicable.|
|cancelledAt|string(date-time) \| null|false|none|The timestamp when the event was cancelled. Null if the event wasn't cancelled.|

<h2 id="tocS_DeserializedJson">DeserializedJson</h2>
<!-- backwards compatibility -->
<a id="schemadeserializedjson"></a>
<a id="schema_DeserializedJson"></a>
<a id="tocSdeserializedjson"></a>
<a id="tocsdeserializedjson"></a>

```json
{}
```

A JSON object that represents the deserialized payload or context.

<h2 id="tocS_CreateBatchRequest">CreateBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchrequest"></a>
<a id="schema_CreateBatchRequest"></a>
<a id="tocScreatebatchrequest"></a>
<a id="tocscreatebatchrequest"></a>

```json
{
  "runCount": 1,
  "taskIdentifiers": [
    "string"
  ],
  "parentRunId": "string",
  "resumeParentOnCompletion": true,
  "idempotencyKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runCount|integer|true|none|Expected number of items in the batch. Must be a positive integer, up to the server's maximum batch size (1,000 by default; self-hosted instances can configure it). Requests above the maximum return a 400.|
|taskIdentifiers|[string]|false|none|Distinct task identifiers of the items in the batch. Used to authorize tokens scoped to specific tasks. If omitted, only credentials with broad task access are accepted.|
|parentRunId|string|false|none|Parent run ID (friendly ID) for batchTriggerAndWait.|
|resumeParentOnCompletion|boolean|false|none|Whether to resume parent on completion. Set to true for batchTriggerAndWait.|
|idempotencyKey|string|false|none|Idempotency key for the batch. If provided and a batch with this key already exists, the existing batch will be returned.|

<h2 id="tocS_CreateBatchResponse">CreateBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebatchresponse"></a>
<a id="schema_CreateBatchResponse"></a>
<a id="tocScreatebatchresponse"></a>
<a id="tocscreatebatchresponse"></a>

```json
{
  "id": "string",
  "runCount": 0,
  "isCached": true,
  "idempotencyKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The batch ID (friendly ID). Use this to stream items via POST /api/v3/batches/{batchId}/items.|
|runCount|integer|true|none|The expected run count.|
|isCached|boolean|true|none|Whether this response came from a cached/idempotent batch.|
|idempotencyKey|string|false|none|The idempotency key if provided.|

<h2 id="tocS_BatchItemNDJSON">BatchItemNDJSON</h2>
<!-- backwards compatibility -->
<a id="schemabatchitemndjson"></a>
<a id="schema_BatchItemNDJSON"></a>
<a id="tocSbatchitemndjson"></a>
<a id="tocsbatchitemndjson"></a>

```json
{
  "index": 0,
  "task": "string",
  "payload": null,
  "options": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|true|none|Zero-based index of this item. Used for idempotency and ordering.|
|task|string|true|none|The task identifier to trigger.|
|payload|object|false|none|The payload for this task run. Can be any JSON value.|
|options|object|false|none|Options for this specific item.|

<h2 id="tocS_StreamBatchItemsResponse">StreamBatchItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastreambatchitemsresponse"></a>
<a id="schema_StreamBatchItemsResponse"></a>
<a id="tocSstreambatchitemsresponse"></a>
<a id="tocsstreambatchitemsresponse"></a>

```json
{
  "id": "string",
  "itemsAccepted": 0,
  "itemsDeduplicated": 0,
  "sealed": true,
  "enqueuedCount": 0,
  "expectedCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The batch ID.|
|itemsAccepted|integer|true|none|Number of items successfully accepted.|
|itemsDeduplicated|integer|true|none|Number of items that were deduplicated (already enqueued).|
|sealed|boolean|true|none|Whether the batch was sealed and is ready for processing.<br>If false, the batch needs more items before processing can start.<br>Clients should check this field and retry with missing items if needed.<br>|
|enqueuedCount|integer|false|none|Total items currently enqueued. Only present when sealed=false to help with retries.|
|expectedCount|integer|false|none|Expected total item count. Only present when sealed=false to help with retries.|
