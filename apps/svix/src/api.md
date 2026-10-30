<h1 id="svix-api">Svix API v1.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- HTTP Authentication, scheme: bearer HTTP Bearer token passed in the `Authorization` header

<h1 id="svix-api-application">Application</h1>

## List Applications

<a id="opIdv1.application.list"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app \
  -H 'Accept: application/json'
```

`GET /api/v1/app`

List of all the organization's applications.

<h3 id="list-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|order|query|[Ordering](#schemaordering)|false|The sorting order of the returned items|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|ascending|
|order|descending|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "My first application",
      "throttleRate": 0,
      "uid": "unique-app-identifier",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_ApplicationOut_](#schemalistresponse_applicationout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Application

<a id="opIdv1.application.create"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {},
    "name": "My first application",
    "throttleRate": 1,
    "uid": "unique-app-identifier"
  }'
```

`POST /api/v1/app`

Create a new application.

> Body parameter

```json
{
  "metadata": {},
  "name": "My first application",
  "throttleRate": 1,
  "uid": "unique-app-identifier"
}
```

<h3 id="create-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|get_if_exists|query|boolean|false|Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[ApplicationIn](#schemaapplicationin)|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|none|
|» throttleRate|body|integer(uint16) \| null|false|Maximum messages per second to send to this application's endpoints.<br><br>Outgoing messages will be throttled to this rate.|
|» uid|body|string \| null|false|Optional unique identifier for the application|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="create-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApplicationOut](#schemaapplicationout)|
|201|Created||[ApplicationOut](#schemaapplicationout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Application

<a id="opIdv1.application.get"></a>

> Code samples

```bash
curl 'https://api.svix.com/api/v1/app/{app_id}' \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}`

Get an application.

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApplicationOut](#schemaapplicationout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Application

<a id="opIdv1.application.update"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {},
    "name": "My first application",
    "throttleRate": 1,
    "uid": "unique-app-identifier"
  }'
```

`PUT /api/v1/app/{app_id}`

Update an application.

> Body parameter

```json
{
  "metadata": {},
  "name": "My first application",
  "throttleRate": 1,
  "uid": "unique-app-identifier"
}
```

<h3 id="update-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|body|body|[ApplicationIn](#schemaapplicationin)|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|true|none|
|» throttleRate|body|integer(uint16) \| null|false|Maximum messages per second to send to this application's endpoints.<br><br>Outgoing messages will be throttled to this rate.|
|» uid|body|string \| null|false|Optional unique identifier for the application|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 201 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="update-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApplicationOut](#schemaapplicationout)|
|201|Created||[ApplicationOut](#schemaapplicationout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Application

<a id="opIdv1.application.delete"></a>

> Code samples

```bash
curl 'https://api.svix.com/api/v1/app/{app_id}' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/app/{app_id}`

Delete an application.

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="delete-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch Application

<a id="opIdpatch_application"></a>

> Code samples

```bash
curl 'https://api.svix.com/api/v1/app/{app_id}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "throttleRate": 0,
    "uid": "unique-app-identifier"
  }'
```

`PATCH /api/v1/app/{app_id}`

Partially update an application.

> Body parameter

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "throttleRate": 0,
  "uid": "unique-app-identifier"
}
```

<h3 id="patch-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApplicationPatch](#schemaapplicationpatch)|true|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|none|
|» throttleRate|body|integer(uint16) \| null|false|Maximum messages per second to send to this application's endpoints.<br><br>Outgoing messages will be throttled to this rate.|
|» uid|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="patch-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApplicationOut](#schemaapplicationout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-message">Message</h1>

## List Messages

<a id="opIdv1.message.list"></a>

> Code samples

```bash
curl 'https://api.svix.com/api/v1/app/{app_id}/msg' \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/msg`

List all of the application's messages.

The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.
The `after` parameter lets you filter all items created after a certain date and is ignored if an iterator is passed.
`before` and `after` cannot be used simultaneously.

<h3 id="list-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|channel|query|string \| null|false|Filter response based on the channel|
|before|query|string(date-time) \| null|false|Only include items created before a certain date|
|after|query|string(date-time) \| null|false|Only include items created after a certain date|
|with_content|query|boolean|false|When `true` message payloads are included in the response|
|event_types|query|[string]|false|Filter response based on the event type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "eventId": "unique-msg-identifier",
      "eventType": "user.signup",
      "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "payload": {
        "email": "test@example.com",
        "username": "test_user"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_MessageOut_](#schemalistresponse_messageout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Message

<a id="opIdv1.message.create"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "application": {
      "metadata": {},
      "name": "My first application",
      "throttleRate": 1,
      "uid": "unique-app-identifier"
    },
    "channels": [
      "project_123",
      "group_2"
    ],
    "eventId": "unique-msg-identifier",
    "eventType": "user.signup",
    "payload": {
      "email": "test@example.com",
      "username": "test_user"
    },
    "payloadRetentionPeriod": 90
  }'
```

`POST /api/v1/app/{app_id}/msg`

Creates a new message and dispatches it to all of the application's endpoints.

The `eventId` is an optional custom unique ID. It's verified to be unique only up to a day, after that no verification will be made.
If a message with the same `eventId` already exists for any application in your environment, a 409 conflict error will be returned.

The `eventType` indicates the type and schema of the event. All messages of a certain `eventType` are expected to have the same schema. Endpoints can choose to only listen to specific event types.
Messages can also have `channels`, which similar to event types let endpoints filter by them. Unlike event types, messages can have multiple channels, and channels don't imply a specific message content or schema.

The `payload` property is the webhook's body (the actual webhook message). Svix supports payload sizes of up to ~350kb, though it's generally a good idea to keep webhook payloads small, probably no larger than 40kb.

> Body parameter

```json
{
  "application": {
    "metadata": {},
    "name": "My first application",
    "throttleRate": 1,
    "uid": "unique-app-identifier"
  },
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "payloadRetentionPeriod": 90
}
```

<h3 id="create-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|with_content|query|boolean|false|When `true` message payloads are included in the response|
|app_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[MessageIn](#schemamessagein)|true|none|
|» application|body|[ApplicationIn](#schemaapplicationin)|false|Optionally creates a new application alongside the message.<br><br>If the application id or uid that is used in the path already exists, this argument is ignored.|
|» channels|body|[string]|false|List of free-form identifiers that endpoints can filter by|
|» eventId|body|string \| null|false|Optional unique identifier for the message|
|» eventType|body|string|true|none|
|» payload|body|object|true|none|
|» payloadRetentionPeriod|body|integer(int64)|false|none|

> Example responses

> 202 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="create-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[MessageOut](#schemamessageout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk Expunge Message Content

<a id="opIdv1.message.bulk-expunge-content"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/bulk-expunge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ids": []
  }'
```

`POST /api/v1/app/{app_id}/msg/bulk-expunge`

Delete the payloads from the given messages under the current application

Useful in cases when a message was accidentally sent with sensitive content.
A message can't be replayed or resent once its payload has been deleted
(or has expired).

> Body parameter

```json
{
  "ids": []
}
```

<h3 id="bulk-expunge-message-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[BulkExpungeContentsIn](#schemabulkexpungecontentsin)|true|none|
|» ids|body|[string]|false|Message ID or UID to delete|

> Example responses

> 200 Response

```json
{
  "results": {
    "property1": "expunged",
    "property2": "expunged"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="bulk-expunge-message-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BulkExpungeContentsOut](#schemabulkexpungecontentsout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Message

<a id="opIdv1.message.get"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/unique-msg-identifier \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/msg/{msg_id}`

Get a message by its ID or eventID.

<h3 id="get-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|
|with_content|query|boolean|false|When `true` message payloads are included in the response|

> Example responses

> 200 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MessageOut](#schemamessageout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Expunge Message Content

<a id="opIdv1.message.expunge-content"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/unique-msg-identifier/content \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/app/{app_id}/msg/{msg_id}/content`

Delete the given message's payload. Useful in cases when a message was accidentally sent with sensitive content.

The message can't be replayed or resent once its payload has been deleted (or has expired).

<h3 id="expunge-message-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="expunge-message-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-message-attempt">Message Attempt</h1>

## List Attempts By Endpoint

<a id="opIdv1.message-attempt.list-by-endpoint"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/attempt/endpoint/unique-ep-identifier \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}`

List attempts by endpoint id

<h3 id="list-attempts-by-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|status|query|[MessageStatus](#schemamessagestatus)|false|Filter response based on the delivery status|
|status_code_class|query|[StatusCodeClass](#schemastatuscodeclass)|false|Filter response based on the HTTP status code|
|channel|query|string \| null|false|Filter response based on the channel|
|before|query|string(date-time) \| null|false|Only include items created before a certain date|
|after|query|string(date-time) \| null|false|Only include items created after a certain date|
|with_content|query|boolean|false|When `true` attempt content is included in the response|
|event_types|query|[string]|false|Filter response based on the event type|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status_code_class|0|
|status_code_class|100|
|status_code_class|200|
|status_code_class|300|
|status_code_class|400|
|status_code_class|500|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "response": "{}",
      "responseDurationMs": 0,
      "responseStatusCode": 200,
      "status": 0,
      "statusText": "success",
      "timestamp": "1970-01-01T00:00:00Z",
      "triggerType": 0,
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-attempts-by-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_MessageAttemptOut_](#schemalistresponse_messageattemptout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## List Attempts By Msg

<a id="opIdv1.message-attempt.list-by-msg"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/attempt/msg/unique-msg-identifier \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/attempt/msg/{msg_id}`

List attempts by message id

<h3 id="list-attempts-by-msg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|status|query|[MessageStatus](#schemamessagestatus)|false|Filter response based on the delivery status|
|status_code_class|query|[StatusCodeClass](#schemastatuscodeclass)|false|Filter response based on the HTTP status code|
|channel|query|string \| null|false|Filter response based on the channel|
|endpoint_id|query|string \| null|false|Filter the attempts based on the attempted endpoint|
|before|query|string(date-time) \| null|false|Only include items created before a certain date|
|after|query|string(date-time) \| null|false|Only include items created after a certain date|
|with_content|query|boolean|false|When `true` attempt content is included in the response|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|
|event_types|query|[string]|false|Filter response based on the event type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|status_code_class|0|
|status_code_class|100|
|status_code_class|200|
|status_code_class|300|
|status_code_class|400|
|status_code_class|500|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "response": "{}",
      "responseDurationMs": 0,
      "responseStatusCode": 200,
      "status": 0,
      "statusText": "success",
      "timestamp": "1970-01-01T00:00:00Z",
      "triggerType": 0,
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-attempts-by-msg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_MessageAttemptOut_](#schemalistresponse_messageattemptout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## List Attempted Messages

<a id="opIdv1.message-attempt.list-attempted-messages"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/msg \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/endpoint/{endpoint_id}/msg`

List messages for a particular endpoint. Additionally includes metadata about the latest message attempt.

The `before` parameter lets you filter all items created before a certain date and is ignored if an iterator is passed.

<h3 id="list-attempted-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|channel|query|string \| null|false|Filter response based on the channel|
|status|query|[MessageStatus](#schemamessagestatus)|false|Filter response based on the delivery status|
|before|query|string(date-time) \| null|false|Only include items created before a certain date|
|after|query|string(date-time) \| null|false|Only include items created after a certain date|
|with_content|query|boolean|false|When `true` message payloads are included in the response|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|event_types|query|[string]|false|Filter response based on the event type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "eventId": "unique-msg-identifier",
      "eventType": "user.signup",
      "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "nextAttempt": "1970-01-01T00:00:00Z",
      "payload": {
        "email": "test@example.com",
        "username": "test_user"
      },
      "status": 0,
      "statusText": "success",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-attempted-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_EndpointMessageOut_](#schemalistresponse_endpointmessageout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Messageattempt

<a id="opIdv1.message-attempt.get"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/unique-msg-identifier/attempt/atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2 \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}`

`msg_id`: Use a message id or a message `eventId`

<h3 id="get-messageattempt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|
|attempt_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "response": "{}",
  "responseDurationMs": 0,
  "responseStatusCode": 200,
  "status": 0,
  "statusText": "success",
  "timestamp": "1970-01-01T00:00:00Z",
  "triggerType": 0,
  "url": "https://example.com/webhook/"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-messageattempt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MessageAttemptOut](#schemamessageattemptout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Expunge Attempt Content

<a id="opIdv1.message-attempt.expunge-content"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/unique-msg-identifier/attempt/atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2/content \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content`

Deletes the given attempt's response body. Useful when an endpoint accidentally returned sensitive content.

<h3 id="expunge-attempt-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|
|attempt_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="expunge-attempt-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## List Attempted Destinations

<a id="opIdv1.message-attempt.list-attempted-destinations"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/unique-msg-identifier/endpoint \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/msg/{msg_id}/endpoint`

`msg_id`: Use a message id or a message `eventId`

<h3 id="list-attempted-destinations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "disabled": false,
      "eventTypes": [
        "user.signup",
        "user.deleted"
      ],
      "expiry": "1970-01-01T00:00:00Z",
      "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "nextAttempt": "1970-01-01T00:00:00Z",
      "status": 0,
      "statusText": "success",
      "throttleRate": 0,
      "uid": "unique-ep-identifier",
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-attempted-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_MessageEndpointOut_](#schemalistresponse_messageendpointout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Resend Webhook

<a id="opIdv1.message-attempt.resend"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/msg/unique-msg-identifier/endpoint/unique-ep-identifier/resend \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend`

Resend a message to the specified endpoint.

<h3 id="resend-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|msg_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|

> Example responses

> 202 Response

```json
{}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="resend-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[EmptyResponse](#schemaemptyresponse)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-endpoint">Endpoint</h1>

## List Endpoints

<a id="opIdv1.endpoint.list"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/endpoint`

List the application's endpoints.

<h3 id="list-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|order|query|[Ordering](#schemaordering)|false|The sorting order of the returned items|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|ascending|
|order|descending|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "disabled": false,
      "eventTypes": [
        "user.signup",
        "user.deleted"
      ],
      "expiry": "1970-01-01T00:00:00Z",
      "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "throttleRate": 0,
      "uid": "unique-ep-identifier",
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_EndpointOut_](#schemalistresponse_endpointout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Endpoint

<a id="opIdv1.endpoint.create"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channels": [
      "project_123",
      "group_2"
    ],
    "description": "An example endpoint name",
    "disabled": false,
    "eventTypes": [
      "user.signup",
      "user.deleted"
    ],
    "metadata": {},
    "secret": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD",
    "throttleRate": 1,
    "uid": "unique-ep-identifier",
    "url": "https://example.com/webhook/"
  }'
```

`POST /api/v1/app/{app_id}/endpoint`

Create a new endpoint for the application.

When `secret` is `null` the secret is automatically generated (recommended)

> Body parameter

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "description": "An example endpoint name",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "metadata": {},
  "secret": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD",
  "throttleRate": 1,
  "uid": "unique-ep-identifier",
  "url": "https://example.com/webhook/"
}
```

<h3 id="create-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[EndpointIn](#schemaendpointin)|true|none|
|» channels|body|[string]|false|List of message channels this endpoint listens to (omit for all)|
|» description|body|string|false|none|
|» disabled|body|boolean|false|none|
|» eventTypes|body|[string]|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» secret|body|string \| null|false|The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.|
|» throttleRate|body|integer(uint16) \| null|false|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|» uid|body|string \| null|false|Optional unique identifier for the endpoint|
|» url|body|string(uri)|true|none|

> Example responses

> 201 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="create-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[EndpointOut](#schemaendpointout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Endpoint

<a id="opIdv1.endpoint.get"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/endpoint/{endpoint_id}`

Get an endpoint.

<h3 id="get-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EndpointOut](#schemaendpointout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Endpoint

<a id="opIdv1.endpoint.update"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channels": [
      "project_123",
      "group_2"
    ],
    "description": "An example endpoint name",
    "disabled": false,
    "eventTypes": [
      "user.signup",
      "user.deleted"
    ],
    "metadata": {},
    "throttleRate": 1,
    "uid": "unique-ep-identifier",
    "url": "https://example.com/webhook/"
  }'
```

`PUT /api/v1/app/{app_id}/endpoint/{endpoint_id}`

Update an endpoint.

> Body parameter

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "description": "An example endpoint name",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "metadata": {},
  "throttleRate": 1,
  "uid": "unique-ep-identifier",
  "url": "https://example.com/webhook/"
}
```

<h3 id="update-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|body|body|[EndpointUpdate](#schemaendpointupdate)|true|none|
|» channels|body|[string]|false|List of message channels this endpoint listens to (omit for all)|
|» description|body|string|false|none|
|» disabled|body|boolean|false|none|
|» eventTypes|body|[string]|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» throttleRate|body|integer(uint16) \| null|false|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|» uid|body|string \| null|false|Optional unique identifier for the endpoint|
|» url|body|string(uri)|true|none|

> Example responses

> 200 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

> 201 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="update-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EndpointOut](#schemaendpointout)|
|201|Created||[EndpointOut](#schemaendpointout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Endpoint

<a id="opIdv1.endpoint.delete"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/app/{app_id}/endpoint/{endpoint_id}`

Delete an endpoint.

<h3 id="delete-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="delete-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch Endpoint

<a id="opIdpatch_endpoint"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channels": [
      "project_1337"
    ],
    "description": "string",
    "disabled": true,
    "eventTypes": [
      "user.signup"
    ],
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "throttleRate": 0,
    "uid": "unique-ep-identifier",
    "url": "http://example.com"
  }'
```

`PATCH /api/v1/app/{app_id}/endpoint/{endpoint_id}`

Partially update an endpoint.

> Body parameter

```json
{
  "channels": [
    "project_1337"
  ],
  "description": "string",
  "disabled": true,
  "eventTypes": [
    "user.signup"
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "url": "http://example.com"
}
```

<h3 id="patch-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|body|body|[EndpointPatch](#schemaendpointpatch)|true|none|
|» channels|body|[string]|false|none|
|» description|body|string|false|none|
|» disabled|body|boolean|false|none|
|» eventTypes|body|[string]|false|none|
|» metadata|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» throttleRate|body|integer(uint16) \| null|false|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|» uid|body|string \| null|false|none|
|» url|body|string(uri)|false|none|

> Example responses

> 200 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="patch-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EndpointOut](#schemaendpointout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Endpoint Headers

<a id="opIdv1.endpoint.get-headers"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/headers \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/endpoint/{endpoint_id}/headers`

Get the additional headers to be sent with the webhook

<h3 id="get-endpoint-headers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "headers": {
    "X-Example": "123",
    "X-Foobar": "Bar"
  },
  "sensitive": [
    "Authorization"
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-endpoint-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The value of the headers is returned in the `headers` field.<br><br>Sensitive headers that have been redacted are returned in the sensitive field.|[EndpointHeadersOut](#schemaendpointheadersout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Endpoint Headers

<a id="opIdv1.endpoint.update-headers"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/headers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headers": {
      "X-Example": "123",
      "X-Foobar": "Bar"
    }
  }'
```

`PUT /api/v1/app/{app_id}/endpoint/{endpoint_id}/headers`

Set the additional headers to be sent with the webhook

> Body parameter

```json
{
  "headers": {
    "X-Example": "123",
    "X-Foobar": "Bar"
  }
}
```

<h3 id="update-endpoint-headers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|body|body|[EndpointHeadersIn](#schemaendpointheadersin)|true|none|
|» headers|body|object|true|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="update-endpoint-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch Endpoint Headers

<a id="opIdv1.endpoint.patch-headers"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/headers \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headers": {
      "X-Example": "123",
      "X-Foobar": "Bar"
    }
  }'
```

`PATCH /api/v1/app/{app_id}/endpoint/{endpoint_id}/headers`

Partially set the additional headers to be sent with the webhook

> Body parameter

```json
{
  "headers": {
    "X-Example": "123",
    "X-Foobar": "Bar"
  }
}
```

<h3 id="patch-endpoint-headers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|body|body|[EndpointHeadersPatchIn](#schemaendpointheaderspatchin)|true|none|
|» headers|body|object|true|none|
|» » **additionalProperties**|body|string \| null|false|none|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="patch-endpoint-headers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Recover Failed Webhooks

<a id="opIdv1.endpoint.recover"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/recover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "since": "1970-01-01T00:00:00Z",
    "until": "1970-01-01T00:00:00Z"
  }'
```

`POST /api/v1/app/{app_id}/endpoint/{endpoint_id}/recover`

Resend all failed messages since a given time.

> Body parameter

```json
{
  "since": "1970-01-01T00:00:00Z",
  "until": "1970-01-01T00:00:00Z"
}
```

<h3 id="recover-failed-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[RecoverIn](#schemarecoverin)|true|none|
|» since|body|string(date-time)|true|none|
|» until|body|string(date-time) \| null|false|none|

> Example responses

> 202 Response

```json
{
  "id": "string",
  "status": "running",
  "task": "endpoint.recover",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="recover-failed-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[RecoverOut](#schemarecoverout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Endpoint Secret

<a id="opIdv1.endpoint.get-secret"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/secret \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/endpoint/{endpoint_id}/secret`

Get the endpoint's signing secret.

This is used to verify the authenticity of the webhook.
For more information please refer to [the consuming webhooks docs](https://docs.svix.com/consuming-webhooks/).

<h3 id="get-endpoint-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "key": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-endpoint-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EndpointSecretOut](#schemaendpointsecretout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Rotate Endpoint Secret

<a id="opIdv1.endpoint.rotate-secret"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/secret/rotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "gracePeriodSeconds": 86400,
    "key": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
  }'
```

`POST /api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate`

Rotates the endpoint's signing secret.  The previous secret will be valid for the next 24 hours.

> Body parameter

```json
{
  "gracePeriodSeconds": 86400,
  "key": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
}
```

<h3 id="rotate-endpoint-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[EndpointSecretRotateIn](#schemaendpointsecretrotatein)|true|none|
|» gracePeriodSeconds|body|integer(uint32) \| null|false|How long the old secret will be valid for, in seconds.<br><br>Valid values are between 0 (immediate expiry) and 7 days. The default is 24 hours.|
|» key|body|string \| null|false|The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.|

> Example responses

> 200 Response

```json
{
  "key": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="rotate-endpoint-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EndpointSecretOut](#schemaendpointsecretout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Send Event Type Example Message

<a id="opIdv1.endpoint.send-example"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/send-example \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "eventType": "user.signup"
  }'
```

`POST /api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example`

Send an example message for an event

> Body parameter

```json
{
  "eventType": "user.signup"
}
```

<h3 id="send-event-type-example-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[EventExampleIn](#schemaeventexamplein)|true|none|
|» eventType|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="send-event-type-example-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MessageOut](#schemamessageout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Endpoint Stats

<a id="opIdv1.endpoint.get-stats"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/app/unique-app-identifier/endpoint/unique-ep-identifier/stats \
  -H 'Accept: application/json'
```

`GET /api/v1/app/{app_id}/endpoint/{endpoint_id}/stats`

Get basic statistics for the endpoint.

<h3 id="endpoint-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|endpoint_id|path|string|true|none|
|since|query|string(date-time) \| null|false|none|
|until|query|string(date-time) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "canceled": 0,
  "fail": 0,
  "pending": 0,
  "sending": 0,
  "success": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="endpoint-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EndpointStats](#schemaendpointstats)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-event-type">Event Type</h1>

## List Event Types

<a id="opIdv1.event-type.list"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/event-type \
  -H 'Accept: application/json'
```

`GET /api/v1/event-type`

Return the list of event types.

<h3 id="list-event-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(uint64)|false|Limit the number of returned items|
|iterator|query|string \| null|false|The iterator returned from a prior invocation|
|order|query|[Ordering](#schemaordering)|false|The sorting order of the returned items|
|include_archived|query|boolean|false|When `true` archived (deleted but not expunged) items are included in the response|
|with_content|query|boolean|false|When `true` the full item (including the schema) is included in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|ascending|
|order|descending|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "archived": false,
      "createdAt": "1970-01-01T00:00:00Z",
      "deprecated": true,
      "description": "A user has signed up",
      "featureFlag": "cool-new-feature",
      "name": "user.signup",
      "schemas": {
        "1": {
          "description": "An invoice was paid by a user",
          "properties": {
            "invoiceId": {
              "description": "The invoice id",
              "type": "string"
            },
            "userId": {
              "description": "The user id",
              "type": "string"
            }
          },
          "required": [
            "invoiceId",
            "userId"
          ],
          "title": "Invoice Paid Event",
          "type": "object"
        }
      },
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="list-event-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListResponse_EventTypeOut_](#schemalistresponse_eventtypeout_)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Event Type

<a id="opIdv1.event-type.create"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/event-type \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "archived": false,
    "deprecated": false,
    "description": "A user has signed up",
    "featureFlag": "cool-new-feature",
    "name": "user.signup",
    "schemas": {
      "1": {
        "description": "An invoice was paid by a user",
        "properties": {
          "invoiceId": {
            "description": "The invoice id",
            "type": "string"
          },
          "userId": {
            "description": "The user id",
            "type": "string"
          }
        },
        "required": [
          "invoiceId",
          "userId"
        ],
        "title": "Invoice Paid Event",
        "type": "object"
      }
    }
  }'
```

`POST /api/v1/event-type`

Create new or unarchive existing event type.

Unarchiving an event type will allow endpoints to filter on it and messages to be sent with it.
Endpoints filtering on the event type before archival will continue to filter on it.
This operation does not preserve the description and schemas.

> Body parameter

```json
{
  "archived": false,
  "deprecated": false,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  }
}
```

<h3 id="create-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[EventTypeIn](#schemaeventtypein)|true|none|
|» archived|body|boolean|false|none|
|» deprecated|body|boolean|false|none|
|» description|body|string|true|none|
|» featureFlag|body|string \| null|false|none|
|» name|body|string|true|none|
|» schemas|body|object \| null|false|The schema for the event type for a specific version as a JSON schema.|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "archived": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "deprecated": true,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="create-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[EventTypeOut](#schemaeventtypeout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Event Type

<a id="opIdv1.event-type.get"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/event-type/user.signup \
  -H 'Accept: application/json'
```

`GET /api/v1/event-type/{event_type_name}`

Get an event type.

<h3 id="get-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_type_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "archived": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "deprecated": true,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="get-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeOut](#schemaeventtypeout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Event Type

<a id="opIdv1.event-type.update"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/event-type/user.signup \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "archived": false,
    "deprecated": false,
    "description": "A user has signed up",
    "featureFlag": "cool-new-feature",
    "schemas": {
      "1": {
        "description": "An invoice was paid by a user",
        "properties": {
          "invoiceId": {
            "description": "The invoice id",
            "type": "string"
          },
          "userId": {
            "description": "The user id",
            "type": "string"
          }
        },
        "required": [
          "invoiceId",
          "userId"
        ],
        "title": "Invoice Paid Event",
        "type": "object"
      }
    }
  }'
```

`PUT /api/v1/event-type/{event_type_name}`

Update an event type.

> Body parameter

```json
{
  "archived": false,
  "deprecated": false,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  }
}
```

<h3 id="update-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_type_name|path|string|true|none|
|body|body|[EventTypeUpdate](#schemaeventtypeupdate)|true|none|
|» archived|body|boolean|false|none|
|» deprecated|body|boolean|false|none|
|» description|body|string|true|none|
|» featureFlag|body|string \| null|false|none|
|» schemas|body|object \| null|false|The schema for the event type for a specific version as a JSON schema.|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "archived": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "deprecated": true,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 201 Response

```json
{
  "archived": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "deprecated": true,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="update-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeOut](#schemaeventtypeout)|
|201|Created||[EventTypeOut](#schemaeventtypeout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Event Type

<a id="opIdv1.event-type.delete"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/event-type/user.signup \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/v1/event-type/{event_type_name}`

Archive an event type.

Endpoints already configured to filter on an event type will continue to do so after archival.
However, new messages can not be sent with it and endpoints can not filter on it.
An event type can be unarchived with the
[create operation](#operation/create_event_type_api_v1_event_type__post).

<h3 id="delete-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_type_name|path|string|true|none|
|expunge|query|boolean|false|By default event types are archived when "deleted". Passing this to `true` deletes them entirely.|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="delete-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch Event Type

<a id="opIdpatch_event_type"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/event-type/user.signup \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "archived": true,
    "deprecated": true,
    "description": "string",
    "featureFlag": "cool-new-feature",
    "schemas": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  }'
```

`PATCH /api/v1/event-type/{event_type_name}`

Partially update an event type.

> Body parameter

```json
{
  "archived": true,
  "deprecated": true,
  "description": "string",
  "featureFlag": "cool-new-feature",
  "schemas": {
    "description": "An invoice was paid by a user",
    "properties": {
      "invoiceId": {
        "description": "The invoice id",
        "type": "string"
      },
      "userId": {
        "description": "The user id",
        "type": "string"
      }
    },
    "required": [
      "invoiceId",
      "userId"
    ],
    "title": "Invoice Paid Event",
    "type": "object"
  }
}
```

<h3 id="patch-event-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_type_name|path|string|true|none|
|body|body|[EventTypePatch](#schemaeventtypepatch)|true|none|
|» archived|body|boolean|false|none|
|» deprecated|body|boolean|false|none|
|» description|body|string|false|none|
|» featureFlag|body|string \| null|false|none|
|» schemas|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "archived": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "deprecated": true,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="patch-event-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EventTypeOut](#schemaeventtypeout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-authentication">Authentication</h1>

## App Portal Access

<a id="opIdv1.authentication.app-portal-access"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/auth/app-portal-access/unique-app-identifier \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "application": {
      "metadata": {},
      "name": "My first application",
      "throttleRate": 1,
      "uid": "unique-app-identifier"
    },
    "featureFlags": []
  }'
```

`POST /api/v1/auth/app-portal-access/{app_id}`

Use this function to get magic links (and authentication codes) for connecting your users to the Consumer Application Portal.

> Body parameter

```json
{
  "application": {
    "metadata": {},
    "name": "My first application",
    "throttleRate": 1,
    "uid": "unique-app-identifier"
  },
  "featureFlags": []
}
```

<h3 id="app-portal-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|app_id|path|string|true|none|
|idempotency-key|header|string|false|The request's idempotency key|
|body|body|[AppPortalAccessIn](#schemaappportalaccessin)|true|none|
|» application|body|[ApplicationIn](#schemaapplicationin)|false|Optionally creates a new application alongside the message.<br><br>If the application id or uid that is used in the path already exists, this argument is ignored.|
|» featureFlags|body|[string]|false|The set of feature flags the created token will have access to.|

> Example responses

> 200 Response

```json
{
  "token": "appsk_kV3ts5tKPNJN4Dl25cMTfUNdmabxbX0O",
  "url": "https://app.svix.com/login#key=eyJhcHBJZCI6ICJhcHBfMXRSdFl"
}
```

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="app-portal-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AppPortalAccessOut](#schemaappportalaccessout)|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdlogout_api_v1_auth_logout__post"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/auth/logout \
  -X POST
```

`POST /api/v1/auth/logout`


Logout an app token.

Trying to log out other tokens will fail.


<h3 id="logout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idempotency-key|header|string|false|The request's idempotency key|

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-health">Health</h1>

## Health

<a id="opIdv1.health.get"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/health \
  -H 'Accept: application/json'
```

`GET /api/v1/health`

Verify the API server is up and running.

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

## Health

<a id="opIdv1.health.get"></a>

> Code samples

```bash
curl https://api.svix.com/api/v1/health \
  -X HEAD \
  -H 'Accept: application/json'
```

`HEAD /api/v1/health`

Verify the API server is up and running.

> Example responses

> 401 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "detail": "string"
}
```

<h3 id="health-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|Unauthorized|[HttpErrorOut](#schemahttperrorout)|
|403|Forbidden|Forbidden|[HttpErrorOut](#schemahttperrorout)|
|404|Not Found|Not Found|[HttpErrorOut](#schemahttperrorout)|
|409|Conflict|Conflict|[HttpErrorOut](#schemahttperrorout)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|429|Too Many Requests|Too Many Requests|[HttpErrorOut](#schemahttperrorout)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="svix-api-default">Default</h1>

## get/api/v1/health/ping

> Code samples

```bash
curl https://api.svix.com/api/v1/health/ping
```

`GET /api/v1/health/ping`

<h3 id="getapiv1healthping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|

<aside class="success">
This operation does not require authentication
</aside>

## head/api/v1/health/ping

> Code samples

```bash
curl https://api.svix.com/api/v1/health/ping \
  -X HEAD
```

`HEAD /api/v1/health/ping`

<h3 id="headapiv1healthping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|no content|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AppPortalAccessIn">AppPortalAccessIn</h2>
<!-- backwards compatibility -->
<a id="schemaappportalaccessin"></a>
<a id="schema_AppPortalAccessIn"></a>
<a id="tocSappportalaccessin"></a>
<a id="tocsappportalaccessin"></a>

```json
{
  "application": {
    "metadata": {},
    "name": "My first application",
    "throttleRate": 1,
    "uid": "unique-app-identifier"
  },
  "featureFlags": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[ApplicationIn](#schemaapplicationin)|false|none|Optionally creates a new application alongside the message.<br><br>If the application id or uid that is used in the path already exists, this argument is ignored.|
|featureFlags|[string]|false|none|The set of feature flags the created token will have access to.|

<h2 id="tocS_AppPortalAccessOut">AppPortalAccessOut</h2>
<!-- backwards compatibility -->
<a id="schemaappportalaccessout"></a>
<a id="schema_AppPortalAccessOut"></a>
<a id="tocSappportalaccessout"></a>
<a id="tocsappportalaccessout"></a>

```json
{
  "token": "appsk_kV3ts5tKPNJN4Dl25cMTfUNdmabxbX0O",
  "url": "https://app.svix.com/login#key=eyJhcHBJZCI6ICJhcHBfMXRSdFl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|
|url|string(uri)|true|none|none|

<h2 id="tocS_ApplicationIn">ApplicationIn</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationin"></a>
<a id="schema_ApplicationIn"></a>
<a id="tocSapplicationin"></a>
<a id="tocsapplicationin"></a>

```json
{
  "metadata": {},
  "name": "My first application",
  "throttleRate": 1,
  "uid": "unique-app-identifier"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|none|
|name|string|true|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this application's endpoints.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|Optional unique identifier for the application|

<h2 id="tocS_ApplicationOut">ApplicationOut</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationout"></a>
<a id="schema_ApplicationOut"></a>
<a id="tocSapplicationout"></a>
<a id="tocsapplicationout"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "My first application",
  "throttleRate": 0,
  "uid": "unique-app-identifier",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|none|
|id|string|true|none|none|
|metadata|object|true|none|none|
|name|string|true|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this application's endpoints.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_ApplicationPatch">ApplicationPatch</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationpatch"></a>
<a id="schema_ApplicationPatch"></a>
<a id="tocSapplicationpatch"></a>
<a id="tocsapplicationpatch"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "throttleRate": 0,
  "uid": "unique-app-identifier"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|none|
|name|string|false|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this application's endpoints.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|none|

<h2 id="tocS_BackgroundTaskStatus">BackgroundTaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemabackgroundtaskstatus"></a>
<a id="schema_BackgroundTaskStatus"></a>
<a id="tocSbackgroundtaskstatus"></a>
<a id="tocsbackgroundtaskstatus"></a>

```json
"running"
```

<h2 id="tocS_BackgroundTaskType">BackgroundTaskType</h2>
<!-- backwards compatibility -->
<a id="schemabackgroundtasktype"></a>
<a id="schema_BackgroundTaskType"></a>
<a id="tocSbackgroundtasktype"></a>
<a id="tocsbackgroundtasktype"></a>

```json
"endpoint.recover"
```

<h2 id="tocS_BulkExpungeContentsIn">BulkExpungeContentsIn</h2>
<!-- backwards compatibility -->
<a id="schemabulkexpungecontentsin"></a>
<a id="schema_BulkExpungeContentsIn"></a>
<a id="tocSbulkexpungecontentsin"></a>
<a id="tocsbulkexpungecontentsin"></a>

```json
{
  "ids": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|false|none|Message ID or UID to delete|

<h2 id="tocS_BulkExpungeContentsOut">BulkExpungeContentsOut</h2>
<!-- backwards compatibility -->
<a id="schemabulkexpungecontentsout"></a>
<a id="schema_BulkExpungeContentsOut"></a>
<a id="tocSbulkexpungecontentsout"></a>
<a id="tocsbulkexpungecontentsout"></a>

```json
{
  "results": {
    "property1": "expunged",
    "property2": "expunged"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|object|true|none|Results of expunging (by ID)|

<h2 id="tocS_BulkExpungeStatus">BulkExpungeStatus</h2>
<!-- backwards compatibility -->
<a id="schemabulkexpungestatus"></a>
<a id="schema_BulkExpungeStatus"></a>
<a id="tocSbulkexpungestatus"></a>
<a id="tocsbulkexpungestatus"></a>

```json
"expunged"
```

<h2 id="tocS_EmptyResponse">EmptyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemptyresponse"></a>
<a id="schema_EmptyResponse"></a>
<a id="tocSemptyresponse"></a>
<a id="tocsemptyresponse"></a>

```json
{}
```

<h2 id="tocS_EndpointCreatedEvent">EndpointCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaendpointcreatedevent"></a>
<a id="schema_EndpointCreatedEvent"></a>
<a id="tocSendpointcreatedevent"></a>
<a id="tocsendpointcreatedevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "endpointUid": "unique-ep-identifier"
  },
  "type": "endpoint.created"
}
```

Sent when an endpoint is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EndpointCreatedEventData](#schemaendpointcreatedeventdata)|true|none|Sent when an endpoint is created, updated, or deleted|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|endpoint.created|

<h2 id="tocS_EndpointCreatedEventData">EndpointCreatedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaendpointcreatedeventdata"></a>
<a id="schema_EndpointCreatedEventData"></a>
<a id="tocSendpointcreatedeventdata"></a>
<a id="tocsendpointcreatedeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "endpointUid": "unique-ep-identifier"
}
```

Sent when an endpoint is created, updated, or deleted

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|endpointUid|string \| null|false|none|none|

<h2 id="tocS_EndpointDeletedEvent">EndpointDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdeletedevent"></a>
<a id="schema_EndpointDeletedEvent"></a>
<a id="tocSendpointdeletedevent"></a>
<a id="tocsendpointdeletedevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "endpointUid": "unique-ep-identifier"
  },
  "type": "endpoint.deleted"
}
```

Sent when an endpoint is deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EndpointDeletedEventData](#schemaendpointdeletedeventdata)|true|none|Sent when an endpoint is created, updated, or deleted|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|endpoint.deleted|

<h2 id="tocS_EndpointDeletedEventData">EndpointDeletedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdeletedeventdata"></a>
<a id="schema_EndpointDeletedEventData"></a>
<a id="tocSendpointdeletedeventdata"></a>
<a id="tocsendpointdeletedeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "endpointUid": "unique-ep-identifier"
}
```

Sent when an endpoint is created, updated, or deleted

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|endpointUid|string \| null|false|none|none|

<h2 id="tocS_EndpointDisabledEvent">EndpointDisabledEvent</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdisabledevent"></a>
<a id="schema_EndpointDisabledEvent"></a>
<a id="tocSendpointdisabledevent"></a>
<a id="tocsendpointdisabledevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "endpointUid": "unique-ep-identifier",
    "failSince": "1970-01-01T00:00:00Z"
  },
  "type": "endpoint.disabled"
}
```

Sent when an endpoint has been automatically disabled after continuous failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EndpointDisabledEventData](#schemaendpointdisabledeventdata)|true|none|Sent when an endpoint has been automatically disabled after continuous failures.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|endpoint.disabled|

<h2 id="tocS_EndpointDisabledEventData">EndpointDisabledEventData</h2>
<!-- backwards compatibility -->
<a id="schemaendpointdisabledeventdata"></a>
<a id="schema_EndpointDisabledEventData"></a>
<a id="tocSendpointdisabledeventdata"></a>
<a id="tocsendpointdisabledeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "endpointUid": "unique-ep-identifier",
  "failSince": "1970-01-01T00:00:00Z"
}
```

Sent when an endpoint has been automatically disabled after continuous failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|endpointUid|string \| null|false|none|none|
|failSince|string(date-time)|true|none|none|

<h2 id="tocS_EndpointHeadersIn">EndpointHeadersIn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointheadersin"></a>
<a id="schema_EndpointHeadersIn"></a>
<a id="tocSendpointheadersin"></a>
<a id="tocsendpointheadersin"></a>

```json
{
  "headers": {
    "X-Example": "123",
    "X-Foobar": "Bar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|true|none|none|

<h2 id="tocS_EndpointHeadersOut">EndpointHeadersOut</h2>
<!-- backwards compatibility -->
<a id="schemaendpointheadersout"></a>
<a id="schema_EndpointHeadersOut"></a>
<a id="tocSendpointheadersout"></a>
<a id="tocsendpointheadersout"></a>

```json
{
  "headers": {
    "X-Example": "123",
    "X-Foobar": "Bar"
  },
  "sensitive": [
    "Authorization"
  ]
}
```

The value of the headers is returned in the `headers` field.

Sensitive headers that have been redacted are returned in the sensitive field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|true|none|none|
|sensitive|[string]|true|none|none|

<h2 id="tocS_EndpointHeadersPatchIn">EndpointHeadersPatchIn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointheaderspatchin"></a>
<a id="schema_EndpointHeadersPatchIn"></a>
<a id="tocSendpointheaderspatchin"></a>
<a id="tocsendpointheaderspatchin"></a>

```json
{
  "headers": {
    "X-Example": "123",
    "X-Foobar": "Bar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|true|none|none|

<h2 id="tocS_EndpointIn">EndpointIn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointin"></a>
<a id="schema_EndpointIn"></a>
<a id="tocSendpointin"></a>
<a id="tocsendpointin"></a>

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "description": "An example endpoint name",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "metadata": {},
  "secret": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD",
  "throttleRate": 1,
  "uid": "unique-ep-identifier",
  "url": "https://example.com/webhook/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|List of message channels this endpoint listens to (omit for all)|
|description|string|false|none|none|
|disabled|boolean|false|none|none|
|eventTypes|[string]|false|none|none|
|metadata|object|false|none|none|
|secret|string \| null|false|none|The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|Optional unique identifier for the endpoint|
|url|string(uri)|true|none|none|

<h2 id="tocS_EndpointMessageOut">EndpointMessageOut</h2>
<!-- backwards compatibility -->
<a id="schemaendpointmessageout"></a>
<a id="schema_EndpointMessageOut"></a>
<a id="tocSendpointmessageout"></a>
<a id="tocsendpointmessageout"></a>

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "nextAttempt": "1970-01-01T00:00:00Z",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "status": 0,
  "statusText": "success",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

A model containing information on a given message plus additional fields on the last attempt for that message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|List of free-form identifiers that endpoints can filter by|
|eventId|string \| null|false|none|Optional unique identifier for the message|
|eventType|string|true|none|none|
|id|string|true|none|none|
|nextAttempt|string(date-time) \| null|false|none|none|
|payload|object|true|none|none|
|status|[MessageStatus](#schemamessagestatus)|true|none|The sending status of the message:<br>- Success = 0<br>- Pending = 1<br>- Fail = 2<br>- Sending = 3|
|statusText|[MessageStatusText](#schemamessagestatustext)|true|none|none|
|timestamp|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|statusText|success|
|statusText|pending|
|statusText|fail|
|statusText|sending|

<h2 id="tocS_EndpointOut">EndpointOut</h2>
<!-- backwards compatibility -->
<a id="schemaendpointout"></a>
<a id="schema_EndpointOut"></a>
<a id="tocSendpointout"></a>
<a id="tocsendpointout"></a>

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|List of message channels this endpoint listens to (omit for all)|
|createdAt|string(date-time)|true|none|none|
|description|string|true|none|An example endpoint name|
|disabled|boolean|false|none|none|
|eventTypes|[string]|false|none|none|
|expiry|string(date-time) \| null|false|none|When the endpoint expires, if ever.<br><br>This field currently exists only for compatibility with the Svix Cloud API. If you want expiring endpoints in Svix Server OSS, please open an issue.|
|id|string|true|none|none|
|metadata|object|true|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|Optional unique identifier for the endpoint|
|updatedAt|string(date-time)|true|none|none|
|url|string(uri)|true|none|none|

<h2 id="tocS_EndpointPatch">EndpointPatch</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpatch"></a>
<a id="schema_EndpointPatch"></a>
<a id="tocSendpointpatch"></a>
<a id="tocsendpointpatch"></a>

```json
{
  "channels": [
    "project_1337"
  ],
  "description": "string",
  "disabled": true,
  "eventTypes": [
    "user.signup"
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|none|
|description|string|false|none|none|
|disabled|boolean|false|none|none|
|eventTypes|[string]|false|none|none|
|metadata|object|false|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|none|
|url|string(uri)|false|none|none|

<h2 id="tocS_EndpointSecretOut">EndpointSecretOut</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsecretout"></a>
<a id="schema_EndpointSecretOut"></a>
<a id="tocSendpointsecretout"></a>
<a id="tocsendpointsecretout"></a>

```json
{
  "key": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.|

<h2 id="tocS_EndpointSecretRotateIn">EndpointSecretRotateIn</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsecretrotatein"></a>
<a id="schema_EndpointSecretRotateIn"></a>
<a id="tocSendpointsecretrotatein"></a>
<a id="tocsendpointsecretrotatein"></a>

```json
{
  "gracePeriodSeconds": 86400,
  "key": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gracePeriodSeconds|integer(uint32) \| null|false|none|How long the old secret will be valid for, in seconds.<br><br>Valid values are between 0 (immediate expiry) and 7 days. The default is 24 hours.|
|key|string \| null|false|none|The endpoint's verification secret. If `null` is passed, a secret is automatically generated. Format: `base64` encoded random bytes optionally prefixed with `whsec_`. Recommended size: 24.|

<h2 id="tocS_EndpointStats">EndpointStats</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstats"></a>
<a id="schema_EndpointStats"></a>
<a id="tocSendpointstats"></a>
<a id="tocsendpointstats"></a>

```json
{
  "canceled": 0,
  "fail": 0,
  "pending": 0,
  "sending": 0,
  "success": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canceled|integer(int64)|true|none|none|
|fail|integer(int64)|true|none|none|
|pending|integer(int64)|true|none|none|
|sending|integer(int64)|true|none|none|
|success|integer(int64)|true|none|none|

<h2 id="tocS_EndpointStatsRange">EndpointStatsRange</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstatsrange"></a>
<a id="schema_EndpointStatsRange"></a>
<a id="tocSendpointstatsrange"></a>
<a id="tocsendpointstatsrange"></a>

```json
{
  "since": "1970-01-01T00:00:00Z",
  "until": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|since|string(date-time) \| null|false|none|none|
|until|string(date-time) \| null|false|none|none|

<h2 id="tocS_EndpointUpdate">EndpointUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaendpointupdate"></a>
<a id="schema_EndpointUpdate"></a>
<a id="tocSendpointupdate"></a>
<a id="tocsendpointupdate"></a>

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "description": "An example endpoint name",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "metadata": {},
  "throttleRate": 1,
  "uid": "unique-ep-identifier",
  "url": "https://example.com/webhook/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|List of message channels this endpoint listens to (omit for all)|
|description|string|false|none|none|
|disabled|boolean|false|none|none|
|eventTypes|[string]|false|none|none|
|metadata|object|false|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|Optional unique identifier for the endpoint|
|url|string(uri)|true|none|none|

<h2 id="tocS_EndpointUpdatedEvent">EndpointUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaendpointupdatedevent"></a>
<a id="schema_EndpointUpdatedEvent"></a>
<a id="tocSendpointupdatedevent"></a>
<a id="tocsendpointupdatedevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "endpointUid": "unique-ep-identifier"
  },
  "type": "endpoint.updated"
}
```

Sent when an endpoint is updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[EndpointUpdatedEventData](#schemaendpointupdatedeventdata)|true|none|Sent when an endpoint is created, updated, or deleted|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|endpoint.updated|

<h2 id="tocS_EndpointUpdatedEventData">EndpointUpdatedEventData</h2>
<!-- backwards compatibility -->
<a id="schemaendpointupdatedeventdata"></a>
<a id="schema_EndpointUpdatedEventData"></a>
<a id="tocSendpointupdatedeventdata"></a>
<a id="tocsendpointupdatedeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "endpointUid": "unique-ep-identifier"
}
```

Sent when an endpoint is created, updated, or deleted

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|endpointUid|string \| null|false|none|none|

<h2 id="tocS_EventExampleIn">EventExampleIn</h2>
<!-- backwards compatibility -->
<a id="schemaeventexamplein"></a>
<a id="schema_EventExampleIn"></a>
<a id="tocSeventexamplein"></a>
<a id="tocseventexamplein"></a>

```json
{
  "eventType": "user.signup"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|string|true|none|none|

<h2 id="tocS_EventTypeIn">EventTypeIn</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypein"></a>
<a id="schema_EventTypeIn"></a>
<a id="tocSeventtypein"></a>
<a id="tocseventtypein"></a>

```json
{
  "archived": false,
  "deprecated": false,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|deprecated|boolean|false|none|none|
|description|string|true|none|none|
|featureFlag|string \| null|false|none|none|
|name|string|true|none|none|
|schemas|object \| null|false|none|The schema for the event type for a specific version as a JSON schema.|

<h2 id="tocS_EventTypeOut">EventTypeOut</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeout"></a>
<a id="schema_EventTypeOut"></a>
<a id="tocSeventtypeout"></a>
<a id="tocseventtypeout"></a>

```json
{
  "archived": false,
  "createdAt": "1970-01-01T00:00:00Z",
  "deprecated": true,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "name": "user.signup",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|createdAt|string(date-time)|true|none|none|
|deprecated|boolean|true|none|none|
|description|string|true|none|none|
|featureFlag|string \| null|false|none|none|
|name|string|true|none|none|
|schemas|object \| null|false|none|The schema for the event type for a specific version as a JSON schema.|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_EventTypePatch">EventTypePatch</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypepatch"></a>
<a id="schema_EventTypePatch"></a>
<a id="tocSeventtypepatch"></a>
<a id="tocseventtypepatch"></a>

```json
{
  "archived": true,
  "deprecated": true,
  "description": "string",
  "featureFlag": "cool-new-feature",
  "schemas": {
    "description": "An invoice was paid by a user",
    "properties": {
      "invoiceId": {
        "description": "The invoice id",
        "type": "string"
      },
      "userId": {
        "description": "The user id",
        "type": "string"
      }
    },
    "required": [
      "invoiceId",
      "userId"
    ],
    "title": "Invoice Paid Event",
    "type": "object"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|deprecated|boolean|false|none|none|
|description|string|false|none|none|
|featureFlag|string \| null|false|none|none|
|schemas|object \| null|false|none|none|

<h2 id="tocS_EventTypeUpdate">EventTypeUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeupdate"></a>
<a id="schema_EventTypeUpdate"></a>
<a id="tocSeventtypeupdate"></a>
<a id="tocseventtypeupdate"></a>

```json
{
  "archived": false,
  "deprecated": false,
  "description": "A user has signed up",
  "featureFlag": "cool-new-feature",
  "schemas": {
    "1": {
      "description": "An invoice was paid by a user",
      "properties": {
        "invoiceId": {
          "description": "The invoice id",
          "type": "string"
        },
        "userId": {
          "description": "The user id",
          "type": "string"
        }
      },
      "required": [
        "invoiceId",
        "userId"
      ],
      "title": "Invoice Paid Event",
      "type": "object"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|none|
|deprecated|boolean|false|none|none|
|description|string|true|none|none|
|featureFlag|string \| null|false|none|none|
|schemas|object \| null|false|none|The schema for the event type for a specific version as a JSON schema.|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationErrorItem](#schemavalidationerroritem)]|true|none|none|

<h2 id="tocS_HttpErrorOut">HttpErrorOut</h2>
<!-- backwards compatibility -->
<a id="schemahttperrorout"></a>
<a id="schema_HttpErrorOut"></a>
<a id="tocShttperrorout"></a>
<a id="tocshttperrorout"></a>

```json
{
  "code": "string",
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|detail|string|true|none|none|

<h2 id="tocS_ListResponse_ApplicationOut_">ListResponse_ApplicationOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_applicationout_"></a>
<a id="schema_ListResponse_ApplicationOut_"></a>
<a id="tocSlistresponse_applicationout_"></a>
<a id="tocslistresponse_applicationout_"></a>

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "My first application",
      "throttleRate": 0,
      "uid": "unique-app-identifier",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ApplicationOut](#schemaapplicationout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_ListResponse_EndpointMessageOut_">ListResponse_EndpointMessageOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_endpointmessageout_"></a>
<a id="schema_ListResponse_EndpointMessageOut_"></a>
<a id="tocSlistresponse_endpointmessageout_"></a>
<a id="tocslistresponse_endpointmessageout_"></a>

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "eventId": "unique-msg-identifier",
      "eventType": "user.signup",
      "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "nextAttempt": "1970-01-01T00:00:00Z",
      "payload": {
        "email": "test@example.com",
        "username": "test_user"
      },
      "status": 0,
      "statusText": "success",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EndpointMessageOut](#schemaendpointmessageout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_ListResponse_EndpointOut_">ListResponse_EndpointOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_endpointout_"></a>
<a id="schema_ListResponse_EndpointOut_"></a>
<a id="tocSlistresponse_endpointout_"></a>
<a id="tocslistresponse_endpointout_"></a>

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "disabled": false,
      "eventTypes": [
        "user.signup",
        "user.deleted"
      ],
      "expiry": "1970-01-01T00:00:00Z",
      "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "throttleRate": 0,
      "uid": "unique-ep-identifier",
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EndpointOut](#schemaendpointout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_ListResponse_EventTypeOut_">ListResponse_EventTypeOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_eventtypeout_"></a>
<a id="schema_ListResponse_EventTypeOut_"></a>
<a id="tocSlistresponse_eventtypeout_"></a>
<a id="tocslistresponse_eventtypeout_"></a>

```json
{
  "data": [
    {
      "archived": false,
      "createdAt": "1970-01-01T00:00:00Z",
      "deprecated": true,
      "description": "A user has signed up",
      "featureFlag": "cool-new-feature",
      "name": "user.signup",
      "schemas": {
        "1": {
          "description": "An invoice was paid by a user",
          "properties": {
            "invoiceId": {
              "description": "The invoice id",
              "type": "string"
            },
            "userId": {
              "description": "The user id",
              "type": "string"
            }
          },
          "required": [
            "invoiceId",
            "userId"
          ],
          "title": "Invoice Paid Event",
          "type": "object"
        }
      },
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EventTypeOut](#schemaeventtypeout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_ListResponse_MessageAttemptOut_">ListResponse_MessageAttemptOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_messageattemptout_"></a>
<a id="schema_ListResponse_MessageAttemptOut_"></a>
<a id="tocSlistresponse_messageattemptout_"></a>
<a id="tocslistresponse_messageattemptout_"></a>

```json
{
  "data": [
    {
      "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "response": "{}",
      "responseDurationMs": 0,
      "responseStatusCode": 200,
      "status": 0,
      "statusText": "success",
      "timestamp": "1970-01-01T00:00:00Z",
      "triggerType": 0,
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[MessageAttemptOut](#schemamessageattemptout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_ListResponse_MessageEndpointOut_">ListResponse_MessageEndpointOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_messageendpointout_"></a>
<a id="schema_ListResponse_MessageEndpointOut_"></a>
<a id="tocSlistresponse_messageendpointout_"></a>
<a id="tocslistresponse_messageendpointout_"></a>

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "disabled": false,
      "eventTypes": [
        "user.signup",
        "user.deleted"
      ],
      "expiry": "1970-01-01T00:00:00Z",
      "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "nextAttempt": "1970-01-01T00:00:00Z",
      "status": 0,
      "statusText": "success",
      "throttleRate": 0,
      "uid": "unique-ep-identifier",
      "updatedAt": "1970-01-01T00:00:00Z",
      "url": "https://example.com/webhook/"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[MessageEndpointOut](#schemamessageendpointout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_ListResponse_MessageOut_">ListResponse_MessageOut_</h2>
<!-- backwards compatibility -->
<a id="schemalistresponse_messageout_"></a>
<a id="schema_ListResponse_MessageOut_"></a>
<a id="tocSlistresponse_messageout_"></a>
<a id="tocslistresponse_messageout_"></a>

```json
{
  "data": [
    {
      "channels": [
        "project_123",
        "group_2"
      ],
      "eventId": "unique-msg-identifier",
      "eventType": "user.signup",
      "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "payload": {
        "email": "test@example.com",
        "username": "test_user"
      },
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "done": true,
  "iterator": "iterator",
  "prevIterator": "-iterator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[MessageOut](#schemamessageout)]|true|none|none|
|done|boolean|true|none|none|
|iterator|string \| null|false|none|none|
|prevIterator|string \| null|false|none|none|

<h2 id="tocS_MessageAttempetLast">MessageAttempetLast</h2>
<!-- backwards compatibility -->
<a id="schemamessageattempetlast"></a>
<a id="schema_MessageAttempetLast"></a>
<a id="tocSmessageattempetlast"></a>
<a id="tocsmessageattempetlast"></a>

```json
{
  "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "responseStatusCode": 0,
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|responseStatusCode|integer(int16)|true|none|none|
|timestamp|string(date-time)|true|none|none|

<h2 id="tocS_MessageAttemptExhaustedEvent">MessageAttemptExhaustedEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptexhaustedevent"></a>
<a id="schema_MessageAttemptExhaustedEvent"></a>
<a id="tocSmessageattemptexhaustedevent"></a>
<a id="tocsmessageattemptexhaustedevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "lastAttempt": {
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "responseStatusCode": 0,
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "msgEventId": "unique-msg-identifier",
    "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
  },
  "type": "message.attempt.exhausted"
}
```

Sent when a message delivery has failed (all of the retry attempts have been exhausted).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MessageAttemptExhaustedEventData](#schemamessageattemptexhaustedeventdata)|true|none|Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it's failed four times as a "message.attempt.failing" event.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message.attempt.exhausted|

<h2 id="tocS_MessageAttemptExhaustedEventData">MessageAttemptExhaustedEventData</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptexhaustedeventdata"></a>
<a id="schema_MessageAttemptExhaustedEventData"></a>
<a id="tocSmessageattemptexhaustedeventdata"></a>
<a id="tocsmessageattemptexhaustedeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "lastAttempt": {
    "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "responseStatusCode": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "msgEventId": "unique-msg-identifier",
  "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
}
```

Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it's failed four times as a "message.attempt.failing" event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|lastAttempt|[MessageAttempetLast](#schemamessageattempetlast)|true|none|none|
|msgEventId|string \| null|false|none|none|
|msgId|string|true|none|none|

<h2 id="tocS_MessageAttemptFailingEvent">MessageAttemptFailingEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptfailingevent"></a>
<a id="schema_MessageAttemptFailingEvent"></a>
<a id="tocSmessageattemptfailingevent"></a>
<a id="tocsmessageattemptfailingevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "lastAttempt": {
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "responseStatusCode": 0,
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "msgEventId": "unique-msg-identifier",
    "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
  },
  "type": "message.attempt.failing"
}
```

Sent after a message has been failing for a few times.
It's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MessageAttemptFailingEventData](#schemamessageattemptfailingeventdata)|true|none|Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it's failed four times as a "message.attempt.failing" event.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message.attempt.failing|

<h2 id="tocS_MessageAttemptFailingEventData">MessageAttemptFailingEventData</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptfailingeventdata"></a>
<a id="schema_MessageAttemptFailingEventData"></a>
<a id="tocSmessageattemptfailingeventdata"></a>
<a id="tocsmessageattemptfailingeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "lastAttempt": {
    "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "responseStatusCode": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "msgEventId": "unique-msg-identifier",
  "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
}
```

Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it's failed four times as a "message.attempt.failing" event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|lastAttempt|[MessageAttempetLast](#schemamessageattempetlast)|true|none|none|
|msgEventId|string \| null|false|none|none|
|msgId|string|true|none|none|

<h2 id="tocS_MessageAttemptOut">MessageAttemptOut</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptout"></a>
<a id="schema_MessageAttemptOut"></a>
<a id="tocSmessageattemptout"></a>
<a id="tocsmessageattemptout"></a>

```json
{
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "response": "{}",
  "responseDurationMs": 0,
  "responseStatusCode": 200,
  "status": 0,
  "statusText": "success",
  "timestamp": "1970-01-01T00:00:00Z",
  "triggerType": 0,
  "url": "https://example.com/webhook/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointId|string|true|none|none|
|id|string|true|none|none|
|msgId|string|true|none|none|
|response|string|true|none|none|
|responseDurationMs|integer(int64)|true|none|Response duration in milliseconds.|
|responseStatusCode|integer(int16)|true|none|none|
|status|[MessageStatus](#schemamessagestatus)|true|none|The sending status of the message:<br>- Success = 0<br>- Pending = 1<br>- Fail = 2<br>- Sending = 3|
|statusText|[MessageStatusText](#schemamessagestatustext)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|triggerType|[MessageAttemptTriggerType](#schemamessageattempttriggertype)|true|none|The reason an attempt was made:<br>- Scheduled = 0<br>- Manual = 1|
|url|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|statusText|success|
|statusText|pending|
|statusText|fail|
|statusText|sending|
|triggerType|0|
|triggerType|1|

<h2 id="tocS_MessageAttemptRecoveredEvent">MessageAttemptRecoveredEvent</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptrecoveredevent"></a>
<a id="schema_MessageAttemptRecoveredEvent"></a>
<a id="tocSmessageattemptrecoveredevent"></a>
<a id="tocsmessageattemptrecoveredevent"></a>

```json
{
  "data": {
    "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "appUid": "unique-app-identifier",
    "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "lastAttempt": {
      "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
      "responseStatusCode": 0,
      "timestamp": "1970-01-01T00:00:00Z"
    },
    "msgEventId": "unique-msg-identifier",
    "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
  },
  "type": "message.attempt.recovered"
}
```

Sent on a successful dispatch after an earlier failure op webhook has already been sent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[MessageAttemptRecoveredEventData](#schemamessageattemptrecoveredeventdata)|true|none|Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it's failed four times as a "message.attempt.failing" event.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|message.attempt.recovered|

<h2 id="tocS_MessageAttemptRecoveredEventData">MessageAttemptRecoveredEventData</h2>
<!-- backwards compatibility -->
<a id="schemamessageattemptrecoveredeventdata"></a>
<a id="schema_MessageAttemptRecoveredEventData"></a>
<a id="tocSmessageattemptrecoveredeventdata"></a>
<a id="tocsmessageattemptrecoveredeventdata"></a>

```json
{
  "appId": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "appUid": "unique-app-identifier",
  "endpointId": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "lastAttempt": {
    "id": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2",
    "responseStatusCode": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  },
  "msgEventId": "unique-msg-identifier",
  "msgId": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
}
```

Sent when a message delivery has failed (all of the retry attempts have been exhausted) as a "message.attempt.exhausted" type or after it's failed four times as a "message.attempt.failing" event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|none|
|appUid|string \| null|false|none|none|
|endpointId|string|true|none|none|
|lastAttempt|[MessageAttempetLast](#schemamessageattempetlast)|true|none|none|
|msgEventId|string \| null|false|none|none|
|msgId|string|true|none|none|

<h2 id="tocS_MessageAttemptTriggerType">MessageAttemptTriggerType</h2>
<!-- backwards compatibility -->
<a id="schemamessageattempttriggertype"></a>
<a id="schema_MessageAttemptTriggerType"></a>
<a id="tocSmessageattempttriggertype"></a>
<a id="tocsmessageattempttriggertype"></a>

```json
0
```

The reason an attempt was made:
- Scheduled = 0
- Manual = 1

<h2 id="tocS_MessageEndpointOut">MessageEndpointOut</h2>
<!-- backwards compatibility -->
<a id="schemamessageendpointout"></a>
<a id="schema_MessageEndpointOut"></a>
<a id="tocSmessageendpointout"></a>
<a id="tocsmessageendpointout"></a>

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "disabled": false,
  "eventTypes": [
    "user.signup",
    "user.deleted"
  ],
  "expiry": "1970-01-01T00:00:00Z",
  "id": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "nextAttempt": "1970-01-01T00:00:00Z",
  "status": 0,
  "statusText": "success",
  "throttleRate": 0,
  "uid": "unique-ep-identifier",
  "updatedAt": "1970-01-01T00:00:00Z",
  "url": "https://example.com/webhook/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|List of message channels this endpoint listens to (omit for all)|
|createdAt|string(date-time)|true|none|none|
|description|string|true|none|An example endpoint name|
|disabled|boolean|false|none|none|
|eventTypes|[string]|false|none|none|
|expiry|string(date-time) \| null|false|none|When the endpoint expires, if ever.<br><br>This field currently exists only for compatibility with the Svix Cloud API. If you want expiring endpoints in Svix Server OSS, please open an issue.|
|id|string|true|none|none|
|nextAttempt|string(date-time) \| null|false|none|none|
|status|[MessageStatus](#schemamessagestatus)|true|none|The sending status of the message:<br>- Success = 0<br>- Pending = 1<br>- Fail = 2<br>- Sending = 3|
|statusText|[MessageStatusText](#schemamessagestatustext)|true|none|none|
|throttleRate|integer(uint16) \| null|false|none|Maximum messages per second to send to this endpoint.<br><br>Outgoing messages will be throttled to this rate.|
|uid|string \| null|false|none|Optional unique identifier for the endpoint|
|updatedAt|string(date-time)|true|none|none|
|url|string(uri)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|0|
|status|1|
|status|2|
|status|3|
|statusText|success|
|statusText|pending|
|statusText|fail|
|statusText|sending|

<h2 id="tocS_MessageIn">MessageIn</h2>
<!-- backwards compatibility -->
<a id="schemamessagein"></a>
<a id="schema_MessageIn"></a>
<a id="tocSmessagein"></a>
<a id="tocsmessagein"></a>

```json
{
  "application": {
    "metadata": {},
    "name": "My first application",
    "throttleRate": 1,
    "uid": "unique-app-identifier"
  },
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "payloadRetentionPeriod": 90
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[ApplicationIn](#schemaapplicationin)|false|none|Optionally creates a new application alongside the message.<br><br>If the application id or uid that is used in the path already exists, this argument is ignored.|
|channels|[string]|false|none|List of free-form identifiers that endpoints can filter by|
|eventId|string \| null|false|none|Optional unique identifier for the message|
|eventType|string|true|none|none|
|payload|object|true|none|none|
|payloadRetentionPeriod|integer(int64)|false|none|none|

<h2 id="tocS_MessageOut">MessageOut</h2>
<!-- backwards compatibility -->
<a id="schemamessageout"></a>
<a id="schema_MessageOut"></a>
<a id="tocSmessageout"></a>
<a id="tocsmessageout"></a>

```json
{
  "channels": [
    "project_123",
    "group_2"
  ],
  "eventId": "unique-msg-identifier",
  "eventType": "user.signup",
  "id": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2",
  "payload": {
    "email": "test@example.com",
    "username": "test_user"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[string]|false|none|List of free-form identifiers that endpoints can filter by|
|eventId|string \| null|false|none|Optional unique identifier for the message|
|eventType|string|true|none|none|
|id|string|true|none|none|
|payload|object|true|none|none|
|timestamp|string(date-time)|true|none|none|

<h2 id="tocS_MessageStatus">MessageStatus</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatus"></a>
<a id="schema_MessageStatus"></a>
<a id="tocSmessagestatus"></a>
<a id="tocsmessagestatus"></a>

```json
0
```

The sending status of the message:
- Success = 0
- Pending = 1
- Fail = 2
- Sending = 3

<h2 id="tocS_MessageStatusText">MessageStatusText</h2>
<!-- backwards compatibility -->
<a id="schemamessagestatustext"></a>
<a id="schema_MessageStatusText"></a>
<a id="tocSmessagestatustext"></a>
<a id="tocsmessagestatustext"></a>

```json
"success"
```

<h2 id="tocS_Ordering">Ordering</h2>
<!-- backwards compatibility -->
<a id="schemaordering"></a>
<a id="schema_Ordering"></a>
<a id="tocSordering"></a>
<a id="tocsordering"></a>

```json
"ascending"
```

Defines the ordering in a listing of results.

<h2 id="tocS_RecoverIn">RecoverIn</h2>
<!-- backwards compatibility -->
<a id="schemarecoverin"></a>
<a id="schema_RecoverIn"></a>
<a id="tocSrecoverin"></a>
<a id="tocsrecoverin"></a>

```json
{
  "since": "1970-01-01T00:00:00Z",
  "until": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|since|string(date-time)|true|none|none|
|until|string(date-time) \| null|false|none|none|

<h2 id="tocS_RecoverOut">RecoverOut</h2>
<!-- backwards compatibility -->
<a id="schemarecoverout"></a>
<a id="schema_RecoverOut"></a>
<a id="tocSrecoverout"></a>
<a id="tocsrecoverout"></a>

```json
{
  "id": "string",
  "status": "running",
  "task": "endpoint.recover",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|status|[BackgroundTaskStatus](#schemabackgroundtaskstatus)|true|none|none|
|task|[BackgroundTaskType](#schemabackgroundtasktype)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|task|endpoint.recover|

<h2 id="tocS_StatusCodeClass">StatusCodeClass</h2>
<!-- backwards compatibility -->
<a id="schemastatuscodeclass"></a>
<a id="schema_StatusCodeClass"></a>
<a id="tocSstatuscodeclass"></a>
<a id="tocsstatuscodeclass"></a>

```json
0
```

The different classes of HTTP status codes:
- CodeNone = 0
- Code1xx = 100
- Code2xx = 200
- Code3xx = 300
- Code4xx = 400
- Code5xx = 500

<h2 id="tocS_ValidationErrorItem">ValidationErrorItem</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerroritem"></a>
<a id="schema_ValidationErrorItem"></a>
<a id="tocSvalidationerroritem"></a>
<a id="tocsvalidationerroritem"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string"
}
```

Validation errors have their own schema to provide context for invalid requests eg. mismatched types and out of bounds values. There may be any number of these per 422 UNPROCESSABLE ENTITY error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string]|true|none|The location as a [`Vec`] of [`String`]s -- often in the form `["body", "field_name"]`, `["query", "field_name"]`, etc. They may, however, be arbitrarily deep.|
|msg|string|true|none|The message accompanying the validation error item.|
|type|string|true|none|The type of error, often "type_error" or "value_error", but sometimes with more context like as "value_error.number.not_ge"|
