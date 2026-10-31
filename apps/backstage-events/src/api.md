<h1 id="events">events v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Backstage backend plugin that powers the events system.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache-2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="events-default">Default</h1>

## PostEvent

<a id="opIdPostEvent"></a>

> Code samples

```bash
curl http://localhost:7007/api/events/bus/v1/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "event": {
      "topic": "test-topic",
      "payload": {
        "myData": "foo"
      }
    }
  }'
```

`POST /bus/v1/events`

Publish a new event

> Body parameter

```json
{
  "event": {
    "topic": "test-topic",
    "payload": {
      "myData": "foo"
    }
  }
}
```

<h3 id="postevent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» event|body|[Event](#schemaevent)|true|none|
|» notifiedSubscribers|body|[string]|false|The IDs of subscriptions that have already received this event|

> Example responses

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

<h3 id="postevent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The event was published successfully|None|
|204|No Content|The event did not need to be published as all subscribers have already been notified|None|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## PutSubscription

<a id="opIdPutSubscription"></a>

> Code samples

```bash
curl http://localhost:7007/api/events/bus/v1/subscriptions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "topics": [
      "test-topic"
    ]
  }'
```

`PUT /bus/v1/subscriptions/{subscriptionId}`

Ensures that the subscription exists with the provided configuration

> Body parameter

```json
{
  "topics": [
    "test-topic"
  ]
}
```

<h3 id="putsubscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|body|body|object|true|none|
|» topics|body|[string]|true|The topics to subscribe to|

> Example responses

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

<h3 id="putsubscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The subscription exists or was created successfully|None|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetSubscriptionEvents

<a id="opIdGetSubscriptionEvents"></a>

> Code samples

```bash
curl http://localhost:7007/api/events/bus/v1/subscriptions/string/events \
  -H 'Accept: application/json'
```

`GET /bus/v1/subscriptions/{subscriptionId}/events`

Get new events for the provided subscription

<h3 id="getsubscriptionevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "topic": "string",
      "payload": null
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

<h3 id="getsubscriptionevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New events|Inline|
|202|Accepted|No new events are available. Response will block until the client should try again.|None|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="getsubscriptionevents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[Event](#schemaevent)]|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

# Schemas

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "topic": "string",
  "payload": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|true|none|The topic that the event is published on|
|payload|object|true|none|The event payload|

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
