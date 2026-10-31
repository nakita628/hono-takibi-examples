<h1 id="the-mercure-protocol">The Mercure protocol v0.3.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[Mercure](https://mercure.rocks) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.

Base URLs:

* <a href="http://mercure.local">http://mercure.local</a>

Email: <a href="mailto:contact@mercure.rocks">Kévin Dunglas</a> 
Web: <a href="https://mercure.rocks">Kévin Dunglas</a> 
License: <a href="https://github.com/dunglas/mercure/blob/master/LICENSE">GNU Affero General Public License v3.0 or later</a>

<a href="https://mercure.rocks/spec">The Mercure protocol specification</a>

# Authentication

- HTTP Authentication, scheme: bearer Preferred for server to server

* API Key (Cookie)
    - Parameter Name: **mercureAuthorization**, in: cookie. Preferred for web browsers (the cookie name may change depending on the configuration)

<h1 id="the-mercure-protocol-default">Default</h1>

## Subscribe to updates

> Code samples

```bash
curl 'https://example.com/.well-known/mercure?topic=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /.well-known/mercure`

<a href="https://mercure.rocks/spec#subscription">Subscription specification</a>

<h3 id="subscribe-to-updates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|query|[string]|true|The topic to get updates from, can be a URI template (RFC6570).|
|Last-Event-ID|query|string|false|The last received event id, to retrieve missed events.|
|Last-Event-ID|header|string|false|The last received event id, to retrieve missed events, takes precedence over the query parameter.|

<h3 id="subscribe-to-updates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event stream opened.|None|
|400|Bad Request|Missing topic parameter or invalid URI template.|None|
|401|Unauthorized|Not authorized (missing or invalid JWT).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer, Cookie
</aside>

## Publish an update

> Code samples

```bash
curl https://example.com/.well-known/mercure \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'data=string&id=string&private=true&retry=0&topic=%5B%22string%22%5D&type=string'
```

`POST /.well-known/mercure`

<a href="https://mercure.rocks/spec#publication">Publishing specification</a>

> Body parameter

```yaml
data: string
id: string
private: true
retry: 0
topic:
  - string
type: string
```

<h3 id="publish-an-update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» data|body|string|true|The content of the new version of this topic.|
|» id|body|string|false|The topic's revision identifier: it will be used as the SSE's `id` property.|
|» private|body|boolean|false|To mark an update as private. If not provided, this update will be public.|
|» retry|body|integer|false|The SSE's `retry` property (the reconnection time).|
|» topic|body|[string]|true|IRIs of the updated topic. If this key is present several times, the first occurrence is considered to be the canonical URL of the topic, and other ones are considered to be alternate URLs.|
|» type|body|string|false|The SSE's `event` property (a specific event type).|

<h3 id="publish-an-update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The id of this update|None|
|400|Bad Request|Invalid request|None|
|401|Unauthorized|Not authorized (missing or invalid JWT).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer, Cookie
</aside>

## Active subscriptions

> Code samples

```bash
curl https://example.com/.well-known/mercure/subscriptions \
  -H 'Accept: application/ld+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /.well-known/mercure/subscriptions`

<a href="https://mercure.rocks/spec#subscription-api">Subscription API</a>

> Example responses

> 200 Response

```json
{
  "@context": "https://mercure.rocks/",
  "id": "/.well-known/mercure/subscriptions",
  "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
  "subscriptions": [
    {
      "@context": "https://mercure.rocks/",
      "active": true,
      "id": "/.well-known/mercure/subscriptions",
      "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
      "payload": {},
      "subscriber": "urn:uuid:bb3de268-05b0-4c65-b44e-8f9acefc29d6",
      "topic": "https://example.com/{selector}",
      "type": "Subscription"
    }
  ],
  "type": "Subscriptions"
}
```

<h3 id="active-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of active subscriptions|[Subscriptions](#schemasubscriptions)|
|401|Unauthorized|Not authorized (missing or invalid JWT).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer, Cookie
</aside>

## Active subscriptions for the given topic

> Code samples

```bash
curl https://example.com/.well-known/mercure/subscriptions/string \
  -H 'Accept: application/ld+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /.well-known/mercure/subscriptions/{topic}`

<a href="https://mercure.rocks/spec#subscription-api">Subscription API</a>

<h3 id="active-subscriptions-for-the-given-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "@context": "https://mercure.rocks/",
  "id": "/.well-known/mercure/subscriptions",
  "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
  "subscriptions": [
    {
      "@context": "https://mercure.rocks/",
      "active": true,
      "id": "/.well-known/mercure/subscriptions",
      "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
      "payload": {},
      "subscriber": "urn:uuid:bb3de268-05b0-4c65-b44e-8f9acefc29d6",
      "topic": "https://example.com/{selector}",
      "type": "Subscription"
    }
  ],
  "type": "Subscriptions"
}
```

<h3 id="active-subscriptions-for-the-given-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of active subscriptions|[Subscriptions](#schemasubscriptions)|
|401|Unauthorized|Not authorized (missing or invalid JWT).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer, Cookie
</aside>

## Active subscription for the given topic and subscriber

> Code samples

```bash
curl https://example.com/.well-known/mercure/subscriptions/string/string \
  -H 'Accept: application/ld+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /.well-known/mercure/subscriptions/{topic}/{subscriber}`

<a href="https://mercure.rocks/spec#active-subscriptions">Subscription API</a>

<h3 id="active-subscription-for-the-given-topic-and-subscriber-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic|path|string|true|none|
|subscriber|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "@context": "https://mercure.rocks/",
  "id": "/.well-known/mercure/subscriptions",
  "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
  "subscriptions": [
    {
      "@context": "https://mercure.rocks/",
      "active": true,
      "id": "/.well-known/mercure/subscriptions",
      "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
      "payload": {},
      "subscriber": "urn:uuid:bb3de268-05b0-4c65-b44e-8f9acefc29d6",
      "topic": "https://example.com/{selector}",
      "type": "Subscription"
    }
  ],
  "type": "Subscriptions"
}
```

<h3 id="active-subscription-for-the-given-topic-and-subscriber-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of active subscriptions|[Subscriptions](#schemasubscriptions)|
|401|Unauthorized|Not authorized (missing or invalid JWT).|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer, Cookie
</aside>

# Schemas

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "@context": "https://mercure.rocks/",
  "active": true,
  "id": "/.well-known/mercure/subscriptions",
  "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
  "payload": {},
  "subscriber": "urn:uuid:bb3de268-05b0-4c65-b44e-8f9acefc29d6",
  "topic": "https://example.com/{selector}",
  "type": "Subscription"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|string(iri)|false|none|none|
|active|boolean|true|none|none|
|id|string(iri-reference)|true|none|none|
|lastEventID|string|false|none|none|
|payload|object|false|none|none|
|subscriber|string|true|none|none|
|topic|string|true|none|none|
|type|string(iri-reference)|true|none|none|

<h2 id="tocS_Subscriptions">Subscriptions</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions"></a>
<a id="schema_Subscriptions"></a>
<a id="tocSsubscriptions"></a>
<a id="tocssubscriptions"></a>

```json
{
  "@context": "https://mercure.rocks/",
  "id": "/.well-known/mercure/subscriptions",
  "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
  "subscriptions": [
    {
      "@context": "https://mercure.rocks/",
      "active": true,
      "id": "/.well-known/mercure/subscriptions",
      "lastEventID": "urn:uuid:5e94c686-2c0b-4f9b-958c-92ccc3bbb4eb",
      "payload": {},
      "subscriber": "urn:uuid:bb3de268-05b0-4c65-b44e-8f9acefc29d6",
      "topic": "https://example.com/{selector}",
      "type": "Subscription"
    }
  ],
  "type": "Subscriptions"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@context|string(iri)|true|none|none|
|id|string(iri-reference)|true|none|none|
|lastEventID|string|true|none|none|
|subscriptions|[[Subscription](#schemasubscription)]|true|none|none|
|type|string(iri-reference)|true|none|none|
