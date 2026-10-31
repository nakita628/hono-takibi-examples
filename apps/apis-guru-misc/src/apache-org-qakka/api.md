<h1 id="qakka">Qakka v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for Qakka Queue System

Base URLs:

* <a href="https://apache.local">https://apache.local</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="qakka-queues">queues</h1>

Queue management, send, get and ack.

## Get list of all Queues.

<a id="opIdgetListOfQueues"></a>

> Code samples

```bash
curl https://example.com/queues \
  -H 'Accept: application/json'
```

`GET /queues`

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="get-list-of-all-queues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create new queue.

<a id="opIdcreateQueue"></a>

> Code samples

```bash
curl https://example.com/queues \
  -X POST \
  -H 'Accept: application/json'
```

`POST /queues`

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="create-new-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|No Queue object posted, or name field is missing|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Queue.

<a id="opIddeleteQueue"></a>

> Code samples

```bash
curl https://example.com/queues/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /queues/{queueName}`

<h3 id="delete-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|none|
|confirm|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="delete-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Queue name or confirm flag missing.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Queue config.

<a id="opIdgetQueueConfig"></a>

> Code samples

```bash
curl https://example.com/queues/string/config \
  -H 'Accept: application/json'
```

`GET /queues/{queueName}/config`

<h3 id="get-queue-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|Name of Queue|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="get-queue-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Queue name or confirm flag missing.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Queue configuration.

<a id="opIdupdateQueueConfig"></a>

> Code samples

```bash
curl https://example.com/queues/string/config \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /queues/{queueName}/config`

<h3 id="update-queue-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="update-queue-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|No Queue object posted, or name field is missing|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get data associated with a Queue Message.

<a id="opIdgetMessageData"></a>

> Code samples

```bash
curl https://example.com/queues/string/data/string
```

`GET /queues/{queueName}/data/{queueMessageId}`

<h3 id="get-data-associated-with-a-queue-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|Name of Queue|
|queueMessageId|path|string|true|ID of Queue Message for which data is to be returned|

<h3 id="get-data-associated-with-a-queue-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Message ID invalid|None|
|404|Not Found|Queue Message or data not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get next Queue Messages from a Queue

<a id="opIdgetNextMessages"></a>

> Code samples

```bash
curl https://example.com/queues/string/messages \
  -H 'Accept: application/json'
```

`GET /queues/{queueName}/messages`

<h3 id="get-next-queue-messages-from-a-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|Name of Queue|
|count|query|string|false|Number of messages to get|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="get-next-queue-messages-from-a-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Invalid count parameter|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send Queue Message with a binary data (blob) payload.

<a id="opIdsendMessageBinary"></a>

> Code samples

```bash
curl 'https://example.com/queues/string/messages?contentType=string' \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -d '["string"]'
```

`POST /queues/{queueName}/messages`

> Body parameter

```json
[
  "string"
]
```

<h3 id="send-queue-message-with-a-binary-data-blob-payload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|Name of Queue|
|regions|query|string|false|Regions to which message is to be sent|
|delay|query|string|false|none|
|expiration|query|string|false|none|
|contentType|query|string|true|Content type of the data to be sent with Queue Message|
|body|body|[string(byte)]|true|Data to be send with Queue Message|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="send-queue-message-with-a-binary-data-blob-payload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Acknowledge that Queue Message has been processed.

<a id="opIdackMessage"></a>

> Code samples

```bash
curl https://example.com/queues/string/messages/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /queues/{queueName}/messages/{queueMessageId}`

<h3 id="acknowledge-that-queue-message-has-been-processed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|Name of Queue|
|queueMessageId|path|string|true|ID of Queue Message to be acknowledged|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

<h3 id="acknowledge-that-queue-message-has-been-processed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|
|400|Bad Request|Queue Message ID invalid, or message not in-flight|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="qakka-status">status</h1>

Status end-point.

## Status of webapp.

<a id="opIdstatus"></a>

> Code samples

```bash
curl https://example.com/status \
  -H 'Accept: application/json'
```

`GET /status`

> Example responses

> 200 Response

```json
{}
```

<h3 id="status-of-webapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "count": 0,
  "message": "string",
  "queueMessages": [
    {
      "contentType": "string",
      "createDate": 0,
      "data": "string",
      "href": "string",
      "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "queueName": "string",
      "receivingRegion": "string",
      "sendingRegion": "string"
    }
  ],
  "queues": [
    {
      "name": "string"
    }
  ]
}
```

Response returned by most Queue API calls.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Count of Queues or QueueMessages returned by the call.|
|message|string|false|none|Informative message intended for client.|
|queueMessages|[[QueueMessage](#schemaqueuemessage)]|false|none|Queues Messages returned by the call, or empty if not applicable.|
|queues|[[Queue](#schemaqueue)]|false|none|Queues returned but the call, or empty if not applicable.|

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "name": "string"
}
```

Specifies the configuration for a Queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of queue, must be unique.|

<h2 id="tocS_QueueMessage">QueueMessage</h2>
<!-- backwards compatibility -->
<a id="schemaqueuemessage"></a>
<a id="schema_QueueMessage"></a>
<a id="tocSqueuemessage"></a>
<a id="tocsqueuemessage"></a>

```json
{
  "contentType": "string",
  "createDate": 0,
  "data": "string",
  "href": "string",
  "messageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "queueMessageId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "queueName": "string",
  "receivingRegion": "string",
  "sendingRegion": "string"
}
```

A Queue Message

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|Content-type of data associated with QueueMessage.|
|createDate|integer(int64)|false|none|Date that message was received by system.|
|data|string|false|none|Embedded JSON to be sent with Queue Message.|
|href|string|false|none|URL of data associated with Queue Message (if not embedded JSON)|
|messageId|string(uuid)|false|none|UUID of Message Data associated with this Queue Message|
|queueMessageId|string(uuid)|false|none|UUID of Queue Message in local region.|
|queueName|string|true|none|Name of Queue for message.|
|receivingRegion|string|false|none|Regions to which message will be sent|
|sendingRegion|string|false|none|Region from which was sent|
