<h1 id="qstash-rest-api">QStash REST API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

QStash is a message queue and scheduler built on top of Upstash Redis.

Base URLs:

* <a href="https://qstash-eu-central-1.upstash.io">https://qstash-eu-central-1.upstash.io</a> - Regional

Web: <a href="https://upstash.com">Upstash</a> 

# Authentication

- HTTP Authentication, scheme: bearer QStash authentication token

* API Key (bearerAuthQuery)
    - Parameter Name: **qstash_token**, in: query. QStash authentication token passed as a query parameter

<h1 id="qstash-rest-api-messages">Messages</h1>

Publish and manage messages

## Publish a Message

> Code samples

```bash
curl https://qstash.upstash.io/v2/publish/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/publish/{destination}`

Publish a message to the specified destination

> Body parameter

```json
{}
```

<h3 id="publish-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|destination|path|string|true|Destination can either be a valid URL where the message gets sent to, or a URL Group name. <br>- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)<br>- If the destination is a URL Group, a new message will be created for each endpoint in the group.<br><br>Note that destination must be publicly accessible over the internet. If you are working with local endpoints, consider using QStash local development server or a public tunnel service.<br>|
|Content-Type|header|string|false|`Content-Type` is the MIME type of the message.<br><br>We highly recommend sending a `Content-Type` header along, as this will help your destination API to understand the content of the message.<br><br>Set this to whatever data you are sending through QStash, if your message is json, then use `application/json`. Some frameworks like Next.js will not parse your body correctly if the content type is not correct.<br><br>Examples:<br>- `application/json`<br>- `application/xml`<br>- `application/octet-stream`<br>- `text/plain`<br>|
|Upstash-Forward-*|header|string|false|You can send custom headers to your endpoint along with your message.<br><br>To send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.<br><br>\| Header \| Forwarded To Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Method|header|string|false|The HTTP method to use when sending the request to your API.|
|Upstash-Timeout|header|string|false|Specifies the maximum duration the request is allowed to take before timing out.<br><br>This parameter can be used to shorten the default allowed timeout value on your plan. See `Max HTTP Connection Timeout` on the pricing page for default [values](https://upstash.com/pricing/qstash).<br><br>The format of this header is `<value><unit>` where value is a number and unit is one of:<br>- `s` for seconds<br>- `m` for minutes<br>- `h` for hours.<br>|
|Upstash-Retries|header|integer|false|How many times should this message be retried in case the destination API returns an error or is not available.<br><br>The total number of deliveries is 1 (initial attempt) + retries.<br><br>If it is not provided, the default of 3 retries is used.<br>|
|Upstash-Retry-Delay|header|string|false|Customize the delay between retry attempts when message delivery fails.<br><br>By default, QStash uses [exponential backoff](/qstash/features/retry). You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.<br><br>You can use the special variable `retried`, which is how many times the message has been retried. The `retried` is 0 for the first retry.<br><br>Supported functions: <br>\| Function    \| Description                          \|<br>\|-------------\|--------------------------------------\|<br>\| `pow(x, y)`\| Returns x raised to the power of y\|<br>\| `exp(x)`\| Returns e raised to the power of x\|<br>\| `sqrt(x)`\| Takes the square root of x\|<br>\| `abs(x)`\| Returns the absolute value of x\|<br>\| `floor(x)`\| Returns the largest integer less than or equal to x\|<br>\| `ceil(x)`\| Returns the smallest integer greater than or equal to x\|<br>\| `round(x)`\| Rounds x to the nearest integer\|<br>\| `min(x, y)`\| Returns the smaller of x and y\|<br>\| `max(x, y)`\| Returns the larger of x and y\|<br><br>Examples:<br>- `1000`: Fixed 1 second delay<br>- `1000 * (1 + retried)`: Linear backoff<br>- `pow(2, retried) * 1000`: Exponential backoff<br>- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay<br>|
|Upstash-Delay|header|string|false|Delay the message delivery.<br><br>The format of this header is `<value><unit>` where value is a number and unit is one of:<br>- `s` for seconds<br>- `m` for minutes<br>- `h` for hours.<br>- `d` for days.<br>|
|Upstash-Not-Before|header|integer|false|Delay the message delivery until a certain timestamp in the future.<br><br>The format is a unix timestamp in seconds, based on the UTC timezone.<br><br>When both `Upstash-Not-Before` and `Upstash-Delay` headers are provided, `Upstash-Not-Before` will take precedence.<br>|
|Upstash-Label|header|string|false|Label(s) to assign to the message for easier identification and filtering in logs and DLQ.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Flow-Control-Key|header|string|false|Flow Control Key to use for rate limiting messages.<br><br>Make sure you pass `Upstash-Flow-Control-Value` header as well to define the limits for the key.<br>|
|Upstash-Flow-Control-Value|header|string|false|Flow Control parallelism, rate and period values to use for rate limiting messages for the given key.<br>Format: `parallelism=<value>, rate=<value>, period=<value>`. <br>Make sure you pass `Upstash-Flow-Control-Key` header as well to define the key.<br>See [flow control](/qstash/features/flowcontrol) for details.<br>|
|Upstash-Deduplication-Id|header|string|false|Deduplication ID to use for de-duplicating messages.<br><br>If a message with the same deduplication ID was published in the last 10 minutes, the new message will be ignored.<br>|
|Upstash-Content-Based-Deduplication|header|string|false|Enable content based deduplication.<br><br>When enabled, QStash will compute a hash of the message body and use it as deduplication ID.<br>If a message with the same content was published in the last 10 minutes, the new message will be ignored.<br>|
|Upstash-Callback|header|string|false|You can define a callback url that will be called after message delivery, either success or failure. See the content of what will be delivered to a callback [here](/qstash/features/callbacks#how-do-i-use-callbacks).<br><br>- Callback URL must be prefixed with a valid protocol (http:// or https://)<br>- Callbacks are charged as a regular message.<br>- Callbacks will use the retry setting from the original request.<br>|
|Upstash-Callback-Forward-*|header|string|false|You can send custom headers along with your callback message.<br>To send a custom header, prefix the header name with `Upstash-Callback-Forward-`. We will strip prefix and them to the callback URL.<br><br>\| Header \| Forwarded To Callback Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Callback-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Callback-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Callback-*|header|string|false|You can customize the callback message configuration.<br><br>See [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.<br><br>\| Header \| Description \|<br>\|--------\|--------------\|<br>\| Upstash-Callback-Method \| HTTP method to use for the callback request. Default is POST. \|<br>\| Upstash-Callback-Timeout \| Timeout for the callback request. Format is same as Upstash-Timeout header. \|<br>\| Upstash-Callback-Retries \| Number of retries for the callback request. Default is same as original message retries. \|<br>\| Upstash-Callback-Retry-Delay \| Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. \|<br>|
|Upstash-Failure-Callback|header|string|false|You can define a failure callback url that will be called when a delivery is failed. That is when all the defined retries are exhausted. See the content of what will be delivered to a failure callback (here)[/qstash/features/callbacks#how-do-i-use-callbacks]<br><br>- Failure callback URL must be prefixed with a valid protocol (http:// or https://)<br>- Failure callbacks are charged as a regular message.<br>- Failure callbacks will use the retry setting from the original request.<br>|
|Upstash-Failure-Callback-Forward-*|header|string|false|You can send custom headers along with your failure callback message.<br>To send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.<br><br>\| Header \| Forwarded To Callback Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Failure-Callback-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Failure-Callback-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Failure-Callback-*|header|string|false|You can customize the failure callback message configuration.<br><br>See [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.<br><br>\| Header \| Description \|<br>\|--------\|--------------\|<br>\| Upstash-Failure-Callback-Method \| HTTP method to use for the callback request. Default is POST. \|<br>\| Upstash-Failure-Callback-Timeout \| Timeout for the callback request. Format is same as Upstash-Timeout header. \|<br>\| Upstash-Failure-Callback-Retries \| Number of retries for the callback request. Default is same as original message retries. \|<br>\| Upstash-Failure-Callback-Retry-Delay \| Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. \|<br>|
|Upstash-Redact-Fields|header|string|false|Comma-separated list of fields to redact from the schedule. Redacted fields appear as `REDACTED:<SHA256>` in the dashboard and API responses. The original values are still used when delivering messages to your endpoint.<br><br>All messages produced by this schedule will have the specified fields redacted. Schedule get and list endpoints also apply redaction, so private data won't appear in API responses or the dashboard.<br><br>Available options:<br>\| Option \| Description \|<br>\|--------\|-------------\|<br>\| `body` \| Redact the body of the message \|<br>\| `headers` \| Redact all headers of the message \|<br>\| `header[header_name]` \| Redact a specific header (e.g., `header[Authorization]`) \|<br><br>Examples:<br>- `body`: Redact only the body<br>- `body, header[Authorization]`: Redact the body and the Authorization header<br>- `body, headers`: Redact both body and all headers<br>|
|body|body|object|false|The raw request message passed to the endpoints as is|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Upstash-Method|GET|
|Upstash-Method|POST|
|Upstash-Method|PUT|
|Upstash-Method|PATCH|
|Upstash-Method|DELETE|
|Upstash-Content-Based-Deduplication|true|
|Upstash-Content-Based-Deduplication|false|

> Example responses

> 200 Response

```json
{
  "messageId": "string",
  "deduplicated": true
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

<h3 id="publish-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message(s) published successfully|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|

<h3 id="publish-a-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublishResponse](#schemapublishresponse)|false|none|Published to a URL destination|
|*oneOf*|object|false|none|Published to URL Group and created multiple messages for each endpoint the URL Group|
|messages|[[PublishToUrlGroupResponse](#schemapublishtourlgroupresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Enqueue a Message

> Code samples

```bash
curl https://qstash.upstash.io/v2/enqueue/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/enqueue/{queueName}/{destination}`

Enqueue a message to the specified queue

> Body parameter

```json
{}
```

<h3 id="enqueue-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|The name of the queue that message will be enqueued on. If doesn't exist, it will be created automatically with default parallelism.|
|destination|path|string|true|Destination can either be a valid URL where the message gets sent to, or a URL Group name. <br>- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)<br>- If the destination is a URL Group, a new message will be created for each endpoint in the group.<br><br>Note that destination must be publicly accessible over the internet. If you are working with local endpoints, consider using QStash local development server or a public tunnel service.<br>|
|queueName|path|string|true|The name of the queue to enqueue the message to.|
|Content-Type|header|string|false|`Content-Type` is the MIME type of the message.<br><br>We highly recommend sending a `Content-Type` header along, as this will help your destination API to understand the content of the message.<br><br>Set this to whatever data you are sending through QStash, if your message is json, then use `application/json`. Some frameworks like Next.js will not parse your body correctly if the content type is not correct.<br><br>Examples:<br>- `application/json`<br>- `application/xml`<br>- `application/octet-stream`<br>- `text/plain`<br>|
|Upstash-Forward-*|header|string|false|You can send custom headers to your endpoint along with your message.<br><br>To send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.<br><br>\| Header \| Forwarded To Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Method|header|string|false|The HTTP method to use when sending the request to your API.|
|Upstash-Timeout|header|string|false|Specifies the maximum duration the request is allowed to take before timing out.<br><br>This parameter can be used to shorten the default allowed timeout value on your plan. See `Max HTTP Connection Timeout` on the pricing page for default [values](https://upstash.com/pricing/qstash).<br><br>The format of this header is `<value><unit>` where value is a number and unit is one of:<br>- `s` for seconds<br>- `m` for minutes<br>- `h` for hours.<br>|
|Upstash-Retries|header|integer|false|How many times should this message be retried in case the destination API returns an error or is not available.<br><br>The total number of deliveries is 1 (initial attempt) + retries.<br><br>If it is not provided, the default of 3 retries is used.<br>|
|Upstash-Retry-Delay|header|string|false|Customize the delay between retry attempts when message delivery fails.<br><br>By default, QStash uses [exponential backoff](/qstash/features/retry). You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.<br><br>You can use the special variable `retried`, which is how many times the message has been retried. The `retried` is 0 for the first retry.<br><br>Supported functions: <br>\| Function    \| Description                          \|<br>\|-------------\|--------------------------------------\|<br>\| `pow(x, y)`\| Returns x raised to the power of y\|<br>\| `exp(x)`\| Returns e raised to the power of x\|<br>\| `sqrt(x)`\| Takes the square root of x\|<br>\| `abs(x)`\| Returns the absolute value of x\|<br>\| `floor(x)`\| Returns the largest integer less than or equal to x\|<br>\| `ceil(x)`\| Returns the smallest integer greater than or equal to x\|<br>\| `round(x)`\| Rounds x to the nearest integer\|<br>\| `min(x, y)`\| Returns the smaller of x and y\|<br>\| `max(x, y)`\| Returns the larger of x and y\|<br><br>Examples:<br>- `1000`: Fixed 1 second delay<br>- `1000 * (1 + retried)`: Linear backoff<br>- `pow(2, retried) * 1000`: Exponential backoff<br>- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay<br>|
|Upstash-Label|header|string|false|Label(s) to assign to the message for easier identification and filtering in logs and DLQ.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Deduplication-Id|header|string|false|Deduplication ID to use for de-duplicating messages.<br><br>If a message with the same deduplication ID was published in the last 10 minutes, the new message will be ignored.<br>|
|Upstash-Content-Based-Deduplication|header|string|false|Enable content based deduplication.<br><br>When enabled, QStash will compute a hash of the message body and use it as deduplication ID.<br>If a message with the same content was published in the last 10 minutes, the new message will be ignored.<br>|
|Upstash-Callback|header|string|false|You can define a callback url that will be called after message delivery, either success or failure. See the content of what will be delivered to a callback [here](/qstash/features/callbacks#how-do-i-use-callbacks).<br><br>- Callback URL must be prefixed with a valid protocol (http:// or https://)<br>- Callbacks are charged as a regular message.<br>- Callbacks will use the retry setting from the original request.<br>|
|Upstash-Callback-Forward-*|header|string|false|You can send custom headers along with your callback message.<br>To send a custom header, prefix the header name with `Upstash-Callback-Forward-`. We will strip prefix and them to the callback URL.<br><br>\| Header \| Forwarded To Callback Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Callback-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Callback-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Callback-*|header|string|false|You can customize the callback message configuration.<br><br>See [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.<br><br>\| Header \| Description \|<br>\|--------\|--------------\|<br>\| Upstash-Callback-Method \| HTTP method to use for the callback request. Default is POST. \|<br>\| Upstash-Callback-Timeout \| Timeout for the callback request. Format is same as Upstash-Timeout header. \|<br>\| Upstash-Callback-Retries \| Number of retries for the callback request. Default is same as original message retries. \|<br>\| Upstash-Callback-Retry-Delay \| Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. \|<br>|
|Upstash-Failure-Callback|header|string|false|You can define a failure callback url that will be called when a delivery is failed. That is when all the defined retries are exhausted. See the content of what will be delivered to a failure callback [here](/qstash/features/callbacks#how-do-i-use-callbacks)<br><br>- Failure callback URL must be prefixed with a valid protocol (http:// or https://)<br>- Failure callbacks are charged as a regular message.<br>- Failure callbacks will use the retry setting from the original request.<br>|
|Upstash-Failure-Callback-Forward-*|header|string|false|You can send custom headers along with your failure callback message.<br>To send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.<br><br>\| Header \| Forwarded To Callback Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Failure-Callback-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Failure-Callback-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Failure-Callback-*|header|string|false|You can customize the failure callback message configuration.<br><br>See [the Configuring Callbacks](/qstash/features/callbacks#configuring-callbacks) section to learn more.<br><br>\| Header \| Description \|<br>\|--------\|--------------\|<br>\| Upstash-Failure-Callback-Method \| HTTP method to use for the callback request. Default is POST. \|<br>\| Upstash-Failure-Callback-Timeout \| Timeout for the callback request. Format is same as Upstash-Timeout header. \|<br>\| Upstash-Failure-Callback-Retries \| Number of retries for the callback request. Default is same as original message retries. \|<br>\| Upstash-Failure-Callback-Retry-Delay \| Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. \|<br>|
|Upstash-Redact-Fields|header|string|false|Comma-separated list of fields to redact from the message. Redacted fields appear as `REDACTED:<SHA256>` in the dashboard and API responses. The original values are still used when delivering messages to your endpoint.<br><br>Available options:<br>\| Option \| Description \|<br>\|--------\|-------------\|<br>\| `body` \| Redact the body of the message \|<br>\| `headers` \| Redact all headers of the message \|<br>\| `header[header_name]` \| Redact a specific header (e.g., `header[Authorization]`) \|<br><br>Examples:<br>- `body`: Redact only the body<br>- `body, header[Authorization]`: Redact the body and the Authorization header<br>- `body, headers`: Redact both body and all headers<br>|
|body|body|object|false|The raw request message passed to the endpoints as is|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Upstash-Method|GET|
|Upstash-Method|POST|
|Upstash-Method|PUT|
|Upstash-Method|PATCH|
|Upstash-Method|DELETE|
|Upstash-Content-Based-Deduplication|true|
|Upstash-Content-Based-Deduplication|false|

> Example responses

> 200 Response

```json
{
  "messageId": "string",
  "deduplicated": true
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="enqueue-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message(s) enqueued successfully|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|404|Not Found|Queue not found|[Error](#schemaerror)|

<h3 id="enqueue-a-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublishResponse](#schemapublishresponse)|false|none|Enqueued a message to a URL destination|
|*oneOf*|object|false|none|Enqueued to URL Group and created multiple messages for each endpoint the URL Group|
|messages|[[PublishToUrlGroupResponse](#schemapublishtourlgroupresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Batch Messages

> Code samples

```bash
curl https://qstash.upstash.io/v2/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "destination": "string",
      "body": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "queue": "string"
    }
  ]'
```

`POST /v2/batch`

Send multiple messages in a single request

> Body parameter

```json
[
  {
    "destination": "string",
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "queue": "string"
  }
]
```

<h3 id="batch-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|none|
|» destination|body|string|true|Destination can either be a valid URL where the message gets sent to, or a URL Group name. <br>- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)<br>- If the destination is a URL Group, a new message will be created for each endpoint in the group.<br><br>Note that destination must be publicly accessible over the internet. If you are working with local endpoints, consider using QStash local development server or a public tunnel service.<br>|
|» body|body|string|false|The raw request message passed to the endpoints as is|
|» headers|body|object|false|HTTP headers of the message. You can pass all the headers supported in the single publish API.|
|» » **additionalProperties**|body|string|false|none|
|» queue|body|string|false|Queue name to enqueue the message to if desired.|

> Example responses

> 200 Response

```json
[
  {
    "messageId": "string",
    "deduplicated": true
  }
]
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="batch-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages published successfully|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|

<h3 id="batch-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublishResponse](#schemapublishresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get a Message

> Code samples

```bash
curl https://qstash.upstash.io/v2/messages/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/messages/{messageId}`

Retrieve details of a specific message

<h3 id="get-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The identifier of the message to retrieve.|

> Example responses

> 200 Response

```json
{
  "messageId": "string",
  "url": "string",
  "topicName": "string",
  "endpointName": "string",
  "method": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "bodyBase64": "string",
  "maxRetries": 0,
  "notBefore": 0,
  "createdAt": 0,
  "callback": "string",
  "failureCallback": "string",
  "queueName": "string",
  "scheduleId": "string",
  "callerIP": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string",
  "rate": 0,
  "period": 0,
  "parallelism": 0
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message details|[Message](#schemamessage)|
|404|Not Found|Message not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Cancel a Message

> Code samples

```bash
curl https://qstash.upstash.io/v2/messages/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/messages/{messageId}`

Cancel a pending message

<h3 id="cancel-a-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The identifier of the message to cancel.|

> Example responses

> 202 Response

```json
{
  "cancelled": 0
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="cancel-a-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Message canceled successfully|Inline|
|404|Not Found|Message not found|[Error](#schemaerror)|

<h3 id="cancel-a-message-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|integer|false|none|Number of messages cancelled. Always `1`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Retry a Message Now

> Code samples

```bash
curl https://qstash.upstash.io/v2/messages/string/retry \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/messages/{messageId}/retry`

Deliver a delayed message, or a message waiting for its next retry, immediately

<h3 id="retry-a-message-now-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The identifier of the message to deliver now.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="retry-a-message-now-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The message is rescheduled for immediate delivery.|None|
|400|Bad Request|The message id is invalid, or the message belongs to a queue.|[Error](#schemaerror)|
|404|Not Found|Message not found, or the message is not waiting for a delay or a retry.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Cancel Messages

> Code samples

```bash
curl https://qstash.upstash.io/v2/messages \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/messages`

Delete all pending messages

<h3 id="bulk-cancel-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageIds|query|[string]|false|A list of message IDs to delete. If provided, other filters are ignored.|
|topicName|query|[string]|false|Filter messages by URL Group name. Supports multiple values.|
|queueName|query|[string]|false|Filter messages by Queue name. Supports multiple values.|
|url|query|[string]|false|Filter messages by destination URL. Supports multiple values.|
|host|query|[string]|false|Filter messages by the host of the destination URL. Supports multiple values.|
|path|query|[string]|false|Filter messages by the path of the destination URL. Supports multiple values.|
|label|query|[string]|false|Filter messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|flowControlKey|query|[string]|false|Filter messages by Flow Control Key. Supports multiple values.|
|fromDate|query|integer|false|Filter messages created after this timestamp (Unix milli, inclusive).|
|toDate|query|integer|false|Filter messages created before this timestamp (Unix milli, inclusive).|
|scheduleId|query|[string]|false|Filter messages by Schedule ID. Supports multiple values.|
|callerIp|query|[string]|false|Filter messages by the IP address of the publisher. Supports multiple values.|
|callerIP|query|[string]|false|**Deprecated.** Deprecated. Use `callerIp` instead.|
|async|query|boolean|false|Only applies to filter-based cancels. If `true`, the request returns as soon as the bulk action is created, without waiting for it to finish. The response includes the `actionId` of the bulk action.<br>|
|count|query|integer|false|**Deprecated.** Deprecated. This parameter is ignored, and all messages matching the filters are cancelled.|

> Example responses

> 202 Response

```json
{
  "cancelled": 0,
  "actionId": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 412 Response

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

<h3 id="bulk-cancel-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Messages cancelled, or the bulk action is created when `async=true`.|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|412|Precondition Failed|Too many bulk actions are in progress. Up to 1000 bulk actions can be in progress at the same time.|[Error](#schemaerror)|
|429|Too Many Requests|The bulk action did not finish within one minute. It keeps running in the background and can be tracked via `GET /v2/bulkActions`.|[Error](#schemaerror)|

<h3 id="bulk-cancel-messages-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|integer|false|none|When cancelling by `messageIds`, the number of messages cancelled.<br><br>For filter-based cancels, the number of in-progress messages that matched the filters when the request was accepted.<br>|
|actionId|string|false|none|The ID of the bulk action. Only returned for filter-based cancels with `async=true`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-queues">Queues</h1>

Manage message queues

## List Queues

> Code samples

```bash
curl https://qstash.upstash.io/v2/queues \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/queues`

List all your queues

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "createdAt": 0,
    "updatedAt": 0,
    "parallelism": 0,
    "paused": true,
    "lag": 0
  }
]
```

<h3 id="list-queues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of queues|Inline|

<h3 id="list-queues-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Queue](#schemaqueue)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Upsert a Queue

> Code samples

```bash
curl https://qstash.upstash.io/v2/queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "queueName": "string",
    "parallelism": 1
  }'
```

`POST /v2/queues`

Updates or creates a queue

> Body parameter

```json
{
  "queueName": "string",
  "parallelism": 1
}
```

<h3 id="upsert-a-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» queueName|body|string|true|The name of the queue|
|» parallelism|body|integer|true|The number of parallel consumers consuming from the queue. Must be greater than 0.<br>|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

> 412 Response

```json
{
  "error": "string"
}
```

<h3 id="upsert-a-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Queue created or updated successfully|None|
|400|Bad Request|Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.|[Error](#schemaerror)|
|412|Precondition Failed|Either exceeded the maximum number of queues allowed or the maximum parallelism per queue.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get a Queue

> Code samples

```bash
curl https://qstash.upstash.io/v2/queues/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/queues/{queueName}`

Get details of a specific queue

<h3 id="get-a-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|The name of the queue to retrieve.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "createdAt": 0,
  "updatedAt": 0,
  "parallelism": 0,
  "paused": true,
  "lag": 0
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Queue](#schemaqueue)|
|400|Bad Request|Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.|[Error](#schemaerror)|
|404|Not Found|Queue not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Delete a queue

> Code samples

```bash
curl https://qstash.upstash.io/v2/queues/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/queues/{queueName}`

Deletes a queue

<h3 id="delete-a-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|The name of the queue to delete.|

<h3 id="delete-a-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Queue deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Pause Queue

> Code samples

```bash
curl https://qstash.upstash.io/v2/queues/string/pause \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/queues/{queueName}/pause`

Pause a queue to stop the delivery of enqueued messages

<h3 id="pause-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|The name of the queue to pause.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="pause-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Queue paused successfully|None|
|400|Bad Request|Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Resume Queue

> Code samples

```bash
curl https://qstash.upstash.io/v2/queues/string/resume \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/queues/{queueName}/resume`

Resumes a queue to starts the delivery of enqueued messages

<h3 id="resume-queue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueName|path|string|true|The name of the queue to resume.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="resume-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Queue resumed successfully|None|
|400|Bad Request|Queue name is invalid. Queue names can only contain alphanumeric characters, hyphens, periods, and underscores.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-schedules">Schedules</h1>

Create and manage scheduled messages

## Create a Schedule

> Code samples

```bash
curl https://qstash.upstash.io/v2/schedules/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Upstash-Cron: */5 * * * *' \
  -d '{}'
```

`POST /v2/schedules/{destination}`

Create a schedule to send messages periodically

> Body parameter

```json
{}
```

<h3 id="create-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|destination|path|string|true|Destination can either be a valid URL where the message gets sent to, or a URL Group name. <br>- If the destination is a URL, make sure the URL is prefixed with a valid protocol (http:// or https://)<br>- If the destination is a URL Group, a new message will be created for each endpoint in the group.<br>|
|Upstash-Cron|header|string|true|Cron expression defining the schedule frequency. QStash republishes this message whenever the cron expression triggers.<br><br>Timezones are supported and can be specified with the cron expression. <br><br>The maximum schedule resolution is 1 minute.<br>|
|Upstash-Schedule-Id|header|string|false|Assign a custom schedule ID to the created schedule. This header allows you to set the schedule ID yourself instead of QStash assigning a random ID.<br><br>If a schedule with the provided ID exists, the settings of the existing schedule will be updated with the new settings.<br>|
|Content-Type|header|string|false|`Content-Type` is the MIME type of the message.<br><br>We highly recommend sending a `Content-Type` header along, as this will help your destination API to understand the content of the message.<br><br>Set this to whatever data you are sending through QStash, if your message is json, then use `application/json`. Some frameworks like Next.js will not parse your body correctly if the content type is not correct.<br><br>Examples:<br>- `application/json`<br>- `application/xml`<br>- `application/octet-stream`<br>- `text/plain`<br>|
|Upstash-Method|header|string|false|The HTTP method to use when sending the request to your API.|
|Upstash-Timeout|header|string|false|Specifies the maximum duration the request is allowed to take before timing out.<br><br>This parameter can be used to shorten the default allowed timeout value on your plan. See Max HTTP Connection Timeout on the pricing page for default values.<br><br>The format of this header is `<value><unit>` where value is a number and unit is one of:<br>- `s` for seconds<br>- `m` for minutes<br>- `h` for hours.<br>|
|Upstash-Retries|header|integer|false|How many times should this message be retried in case the destination API returns an error or is not available.<br>The total number of deliveries is 1 (initial attempt) + retries.<br><br>If it is not provided, the default of 3 retries is used.<br>|
|Upstash-Retry-Delay|header|string|false|Customize the delay between retry attempts when message delivery fails.<br><br>By default, QStash uses exponential backoff. You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.<br><br>You can use the special variable `retried`, which is current retry attempt. The `retried` is 0 for the first retry. This variable is provided during computation of the expression by QStash.<br><br>Supported functions: <br>\| Function    \| Description                          \|<br>\|-------------\|--------------------------------------\|<br>\| `pow(x, y)`\| Returns x raised to the power of y\|<br>\| `exp(x)`\| Returns e raised to the power of x\|<br>\| `sqrt(x)`\| Takes the square root of x\|<br>\| `abs(x)`\| Returns the absolute value of x\|<br>\| `floor(x)`\| Returns the largest integer less than or equal to x\|<br>\| `ceil(x)`\| Returns the smallest integer greater than or equal to x\|<br>\| `round(x)`\| Rounds x to the nearest integer\|<br>\| `min(x, y)`\| Returns the smaller of x and y\|<br>\| `max(x, y)`\| Returns the larger of x and y\|<br><br>Examples:<br>- `1000`: Fixed 1 second delay<br>- `1000 * (1 + retried)`: Linear backoff<br>- `pow(2, retried) * 1000`: Exponential backoff<br>- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay<br>|
|Upstash-Delay|header|string|false|Delay the message delivery.<br><br>The format of this header is `<value><unit>` where value is a number and unit is one of:<br>- `s` for seconds<br>- `m` for minutes<br>- `h` for hours.<br>- `d` for days.<br>|
|Upstash-Forward-*|header|string|false|You can send custom headers to your endpoint along with your message.<br><br>To send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.<br><br>\| Header \| Forwarded As \|<br>\|--------\|--------------\|<br>\| Upstash-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Callback|header|string|false|You can define a callback url that will be called after each attempt. See the content of what will be delivered to a callback here<br>The callback URL must be prefixed with a valid protocol (http:// or https://)<br><br>Callbacks are charged as a regular message.<br>Callbacks will use the retry setting from the original request.<br>|
|Upstash-Callback-Forward-*|header|string|false|You can send custom headers along with your callback message.<br>To send a custom header, prefix the header name with `Upstash-Callback-Forward-`. We will strip prefix and them to the callback URL.<br><br>Example: <br>- `Upstash-Callback-Forward-My-Header: my-value` will be forwarded as `My-Header: my-value` to your callback destination.<br>|
|Upstash-Callback-*|header|string|false|You can customize the callback message configuration.<br><br>\| Header \| Description \|<br>\|--------\|--------------\|<br>\| Upstash-Callback-Method \| HTTP method to use for the callback request. Default is POST. \|<br>\| Upstash-Callback-Timeout \| Timeout for the callback request. Format is same as Upstash-Timeout header. \|<br>\| Upstash-Callback-Retries \| Number of retries for the callback request. Default is same as original message retries. \|<br>\| Upstash-Callback-Retry-Delay \| Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. \|<br>|
|Upstash-Failure-Callback|header|string|false|You can define a failure callback url that will be called when a delivery is failed. That is when all the defined retries are exhausted. See the content of what will be delivered to a failure callback here<br>The failure callback url must be prefixed with a valid protocol (http:// or https://)<br>Callbacks are charged as a regular message.<br>Callbacks will use the retry setting from the original request.<br>|
|Upstash-Failure-Callback-Forward-*|header|string|false|You can send custom headers along with your failure callback message.<br>To send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.<br><br>Example: <br>- `Upstash-Failure-Callback-Forward-My-Header: my-value` will be forwarded as `My-Header: my-value` to your failure callback destination.<br>|
|Upstash-Failure-Callback-*|header|string|false|You can customize the failure callback message configuration.<br><br>\| Header \| Description \|<br>\|--------\|--------------\|<br>\| Upstash-Failure-Callback-Method \| HTTP method to use for the callback request. Default is POST. \|<br>\| Upstash-Failure-Callback-Timeout \| Timeout for the callback request. Format is same as Upstash-Timeout header. \|<br>\| Upstash-Failure-Callback-Retries \| Number of retries for the callback request. Default is same as original message retries. \|<br>\| Upstash-Failure-Callback-Retry-Delay \| Retry delay for the callback request. Format is same as Upstash-Retry-Delay header. \|<br>|
|Upstash-Redact-Fields|header|string|false|Comma-separated list of fields to redact from the message. Redacted fields appear as `REDACTED:<SHA256>` in the dashboard and API responses. The original values are still used when delivering messages to your endpoint.<br><br>Available options:<br>\| Option \| Description \|<br>\|--------\|-------------\|<br>\| `body` \| Redact the body of the message \|<br>\| `headers` \| Redact all headers of the message \|<br>\| `header[header_name]` \| Redact a specific header (e.g., `header[Authorization]`) \|<br><br>Examples:<br>- `body`: Redact only the body<br>- `body, header[Authorization]`: Redact the body and the Authorization header<br>- `body, headers`: Redact both body and all headers<br>|
|Upstash-Label|header|string|false|Label(s) to assign to the scheduled message for easier identification and filtering in logs and DLQ.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|body|body|object|false|The raw request message passed to the endpoints as is|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Upstash-Method|GET|
|Upstash-Method|POST|
|Upstash-Method|PUT|
|Upstash-Method|PATCH|
|Upstash-Method|DELETE|

> Example responses

> 200 Response

```json
{
  "scheduleId": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

> 412 Response

```json
{
  "error": "string"
}
```

<h3 id="create-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Schedule created successfully|Inline|
|400|Bad Request|Schedule ID is invalid. Schedule IDs can only contain alphanumeric characters, hyphens, periods, and underscores.|[Error](#schemaerror)|
|412|Precondition Failed|Exceeded the maximum number of schedules allowed.|[Error](#schemaerror)|

<h3 id="create-a-schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduleId|string|false|none|Unique identifier for the schedule|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## List schedules

> Code samples

```bash
curl https://qstash.upstash.io/v2/schedules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/schedules`

List all schedules

> Example responses

> 200 Response

```json
[
  {
    "scheduleId": "string",
    "cron": "string",
    "destination": "string",
    "createdAt": 0,
    "method": "string",
    "header": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "body": "string",
    "retries": 0,
    "delay": 0,
    "callback": "string",
    "failureCallback": "string",
    "callerIp": "string",
    "isPaused": true,
    "flowControlKey": "string",
    "parallelism": 0,
    "rate": 0,
    "period": 0,
    "retryDelayExpression": "string",
    "label": "string",
    "labels": [
      "string"
    ],
    "lastScheduleTime": 0,
    "nextScheduleTime": 0,
    "lastScheduleStates": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h3 id="list-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of schedules|Inline|

<h3 id="list-schedules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Schedule](#schemaschedule)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get a Schedule

> Code samples

```bash
curl https://qstash.upstash.io/v2/schedules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/schedules/{scheduleId}`

Get details of a specific schedule

<h3 id="get-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scheduleId|path|string|true|The ID of the schedule to retrieve.|

> Example responses

> 200 Response

```json
{
  "scheduleId": "string",
  "cron": "string",
  "destination": "string",
  "createdAt": 0,
  "method": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "retries": 0,
  "delay": 0,
  "callback": "string",
  "failureCallback": "string",
  "callerIp": "string",
  "isPaused": true,
  "flowControlKey": "string",
  "parallelism": 0,
  "rate": 0,
  "period": 0,
  "retryDelayExpression": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "lastScheduleTime": 0,
  "nextScheduleTime": 0,
  "lastScheduleStates": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Schedule](#schemaschedule)|
|404|Not Found|Schedule not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Delete a Schedule

> Code samples

```bash
curl https://qstash.upstash.io/v2/schedules/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/schedules/{scheduleId}`

Delete a schedule

<h3 id="delete-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scheduleId|path|string|true|The ID of the schedule to delete.|

<h3 id="delete-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Schedule deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Pause a Schedule

> Code samples

```bash
curl https://qstash.upstash.io/v2/schedules/string/pause \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/schedules/{scheduleId}/pause`

Pause a Schedule

<h3 id="pause-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scheduleId|path|string|true|The ID of the schedule to pause.|

<h3 id="pause-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Schedule paused successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Resume a Schedule

> Code samples

```bash
curl https://qstash.upstash.io/v2/schedules/string/resume \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/schedules/{scheduleId}/resume`

Resume a paused Schedule

<h3 id="resume-a-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scheduleId|path|string|true|The ID of the schedule to resume.|

<h3 id="resume-a-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Schedule resumed successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-url-groups">URL Groups</h1>

Manage URL groups and endpoints

## List URL Groups

> Code samples

```bash
curl https://qstash.upstash.io/v2/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/topics`

List all your URL Groups

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "createdAt": 0,
    "updatedAt": 0,
    "endpoints": [
      {
        "name": "string",
        "url": "string"
      }
    ]
  }
]
```

<h3 id="list-url-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-url-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[URLGroup](#schemaurlgroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get a URL Group

> Code samples

```bash
curl https://qstash.upstash.io/v2/topics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/topics/{urlGroupName}`

Retrieve details of a specific URL Group

<h3 id="get-a-url-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlGroupName|path|string|true|The name of the URL Group to retrieve.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "createdAt": 0,
  "updatedAt": 0,
  "endpoints": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-url-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[URLGroup](#schemaurlgroup)|
|404|Not Found|URL Group not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Delete a URL Group

> Code samples

```bash
curl https://qstash.upstash.io/v2/topics/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/topics/{urlGroupName}`

Delete a topic and all its endpoints

<h3 id="delete-a-url-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlGroupName|path|string|true|The name of the URL Group to delete.|

<h3 id="delete-a-url-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|URL Group deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Upsert URL Group and Endpoint

> Code samples

```bash
curl https://qstash.upstash.io/v2/topics/string/endpoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoints": [
      {
        "url": "string",
        "name": "string"
      }
    ]
  }'
```

`POST /v2/topics/{urlGroupName}/endpoints`

Add an endpoint to a URL Group

> Body parameter

```json
{
  "endpoints": [
    {
      "url": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="upsert-url-group-and-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlGroupName|path|string|true|The name of your URL Group. If it doesn't exist yet, it will be created.|
|body|body|object|true|none|
|» endpoints|body|[object]|true|none|
|» » url|body|string|true|The URL of the endpoint|
|» » name|body|string|false|Optional name for the endpoint|

<h3 id="upsert-url-group-and-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Endpoint(s) added successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Remove Endpoints

> Code samples

```bash
curl https://qstash.upstash.io/v2/topics/string/endpoints \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoints": [
      {
        "name": "string",
        "url": "string"
      }
    ]
  }'
```

`DELETE /v2/topics/{urlGroupName}/endpoints`

Remove one or more endpoints from a URL Group

> Body parameter

```json
{
  "endpoints": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="remove-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urlGroupName|path|string|true|The name of your URL Group.|
|body|body|object|true|none|
|» endpoints|body|[[Endpoint](#schemaendpoint)]|true|Then list of endpoints to remove from URL Group. Either name or url must be provided.|

<h3 id="remove-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Endpoint(s) removed successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-dlq">DLQ</h1>

Dead Letter Queue operations

## List DLQ messages

> Code samples

```bash
curl https://qstash.upstash.io/v2/dlq \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/dlq`

List and paginate through all messages currently in the DLQ

<h3 id="list-dlq-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|By providing a cursor you can paginate through all of the messages in the DLQ|
|messageId|query|string|false|Filter DLQ messages by message ID|
|url|query|[string]|false|Filter DLQ messages by destination URL. Supports multiple values.|
|topicName|query|[string]|false|Filter DLQ messages by URL Group name. Supports multiple values.|
|scheduleId|query|[string]|false|Filter DLQ messages by schedule ID. Supports multiple values.|
|queueName|query|[string]|false|Filter DLQ messages by queue name. Supports multiple values.|
|fromDate|query|integer(int64)|false|Filter DLQ messages by starting date, in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter DLQ messages by ending date, in milliseconds (Unix timestamp). This is inclusive.|
|responseStatus|query|[integer]|false|Filter DLQ messages by HTTP response status code of the last delivery attempt. Supports multiple values.|
|callerIp|query|[string]|false|Filter DLQ messages by IP address of the publisher. Supports multiple values.|
|label|query|[string]|false|Filter DLQ messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|count|query|integer|false|The number of messages to return.|

> Example responses

> 200 Response

```json
{
  "cursor": "string",
  "messages": [
    {
      "messageId": "string",
      "url": "string",
      "topicName": "string",
      "endpointName": "string",
      "method": "string",
      "header": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "body": "string",
      "bodyBase64": "string",
      "maxRetries": 0,
      "notBefore": 0,
      "createdAt": 0,
      "callback": "string",
      "failureCallback": "string",
      "queueName": "string",
      "scheduleId": "string",
      "callerIP": "string",
      "label": "string",
      "labels": [
        "string"
      ],
      "flowControlKey": "string",
      "rate": 0,
      "period": 0,
      "parallelism": 0,
      "responseStatus": 0,
      "responseHeader": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "responseBody": "string",
      "responseBodyBase64": "string"
    }
  ]
}
```

<h3 id="list-dlq-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of DLQ messages|Inline|

<h3 id="list-dlq-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|A cursor which you can use in subsequent requests to paginate through all messages. <br>If no cursor is returned, you have reached the end of the messages.<br>|
|messages|[[DLQMessage](#schemadlqmessage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Delete DLQ messages

> Code samples

```bash
curl https://qstash.upstash.io/v2/dlq \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/dlq`

Delete multiple messages from the DLQ

<h3 id="bulk-delete-dlq-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqIds|query|[string]|false|List of DLQ IDs to delete. If provided, other filters are ignored.|
|cursor|query|string|false|By providing a cursor you can paginate through all of the messages in the DLQ|
|messageId|query|string|false|Filter DLQ messages by message ID|
|url|query|[string]|false|Filter DLQ messages by destination URL. Supports multiple values.|
|topicName|query|[string]|false|Filter DLQ messages by URL Group name. Supports multiple values.|
|scheduleId|query|[string]|false|Filter DLQ messages by schedule ID. Supports multiple values.|
|queueName|query|[string]|false|Filter DLQ messages by queue name. Supports multiple values.|
|fromDate|query|integer(int64)|false|Filter DLQ messages by starting date, in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter DLQ messages by ending date, in milliseconds (Unix timestamp). This is inclusive.|
|responseStatus|query|[integer]|false|Filter DLQ messages by HTTP response status code of the last delivery attempt. Supports multiple values.|
|callerIp|query|[string]|false|Filter DLQ messages by IP address of the publisher. Supports multiple values.|
|label|query|[string]|false|Filter DLQ messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|flowControlKey|query|[string]|false|Filter DLQ messages by Flow Control Key. Supports multiple values.|
|count|query|integer|false|The number of messages to delete.|

> Example responses

> 200 Response

```json
{
  "cursor": "string",
  "deleted": 0
}
```

<h3 id="bulk-delete-dlq-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|DLQ messages deleted successfully|Inline|

<h3 id="bulk-delete-dlq-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|A cursor which you can use in subsequent requests to paginate through all messages. <br>If no cursor is returned, you have reached the end of the messages.<br>|
|deleted|integer|false|none|The number of messages that were deleted.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get a DLQ message

> Code samples

```bash
curl https://qstash.upstash.io/v2/dlq/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/dlq/{dlqId}`

Get a specific message from the DLQ

<h3 id="get-a-dlq-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the message you want to retrieve.<br>|

> Example responses

> 200 Response

```json
{
  "messageId": "string",
  "url": "string",
  "topicName": "string",
  "endpointName": "string",
  "method": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "bodyBase64": "string",
  "maxRetries": 0,
  "notBefore": 0,
  "createdAt": 0,
  "callback": "string",
  "failureCallback": "string",
  "queueName": "string",
  "scheduleId": "string",
  "callerIP": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string",
  "rate": 0,
  "period": 0,
  "parallelism": 0,
  "responseStatus": 0,
  "responseHeader": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "responseBody": "string",
  "responseBodyBase64": "string"
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-dlq-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|DLQ message details|[DLQMessage](#schemadlqmessage)|
|404|Not Found|If the message is not found in the DLQ, (either is has been removed by you, or automatically), the endpoint returns a 404 status code.<br>|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Delete a DLQ message

> Code samples

```bash
curl https://qstash.upstash.io/v2/dlq/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/dlq/{dlqId}`

Manually remove a message from the DLQ

<h3 id="delete-a-dlq-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the message you want to remove.<br>|

> Example responses

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-a-dlq-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message deleted successfully|None|
|404|Not Found|If the message is not found in the DLQ, (either is has been removed by you, or automatically), the endpoint returns a 404 status code.<br>|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Retry a DLQ message

> Code samples

```bash
curl https://qstash.upstash.io/v2/dlq/retry/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/dlq/retry/{dlqId}`

Retry delivery of a message from the DLQ

<h3 id="retry-a-dlq-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the message you want to retry.<br>|

> Example responses

> 201 Response

```json
{
  "messageId": "string",
  "deduplicated": true
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="retry-a-dlq-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Message retry initiated successfully|[PublishResponse](#schemapublishresponse)|
|404|Not Found|If the message is not found in the DLQ, (either is has been removed by you, or automatically), the endpoint returns a 404 status code.<br>|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Retry DLQ messages

> Code samples

```bash
curl https://qstash.upstash.io/v2/dlq/retry \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/dlq/retry`

Retry delivery of multiple messages from the DLQ

<h3 id="bulk-retry-dlq-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqIds|query|[string]|false|List of DLQ IDs to retry. If provided, other filters are ignored.|
|messageId|query|string|false|Filter DLQ messages by message ID|
|url|query|[string]|false|Filter DLQ messages by destination URL. Supports multiple values.|
|topicName|query|[string]|false|Filter DLQ messages by URL Group name. Supports multiple values.|
|scheduleId|query|[string]|false|Filter DLQ messages by schedule ID. Supports multiple values.|
|queueName|query|[string]|false|Filter DLQ messages by queue name. Supports multiple values.|
|fromDate|query|integer(int64)|false|Filter DLQ messages by starting date, in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter DLQ messages by ending date, in milliseconds (Unix timestamp). This is inclusive.|
|responseStatus|query|[integer]|false|Filter DLQ messages by HTTP response status code of the last delivery attempt. Supports multiple values.|
|callerIp|query|[string]|false|Filter DLQ messages by IP address of the publisher. Supports multiple values.|
|label|query|[string]|false|Filter DLQ messages by label. Supports multiple values. You can pass multiple values to match messages with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|flowControlKey|query|[string]|false|Filter DLQ messages by Flow Control Key. Supports multiple values.|

> Example responses

> 201 Response

```json
{
  "cursor": "string",
  "responses": [
    {
      "messageId": "string",
      "deduplicated": true
    }
  ]
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="bulk-retry-dlq-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Messages retry initiated successfully|Inline|
|404|Not Found|Some messages were not found in the DLQ|[Error](#schemaerror)|

<h3 id="bulk-retry-dlq-messages-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|A cursor which you can use in subsequent requests to paginate through all messages. <br>If no cursor is returned, you have reached the end of the messages.<br>|
|responses|[[PublishResponse](#schemapublishresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-logs">Logs</h1>

Log operations

## List Logs

> Code samples

```bash
curl https://qstash.upstash.io/v2/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/logs`

Paginate through logs of published messages

<h3 id="list-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|By providing a cursor you can paginate through all of the logs|
|messageId|query|string|false|Filter logs by message ID|
|state|query|string|false|Filter logs by message state<br><br>\|Value	\|Description\|<br>\|-------\|------------\|<br>\| CREATED	\|The message has been accepted and stored in QStash\|<br>\| ACTIVE	\|The task is currently being processed by a worker.\|<br>\| RETRY	\|The task has been scheduled to retry.\|<br>\| ERROR	\|The execution threw an error and the task is waiting to be retried or failed.\|<br>\| IN_PROGRESS	\|The task is in one of ACTIVE, RETRY or ERROR state.\|<br>\| DELIVERED	\|The message was successfully delivered.\|<br>\| FAILED	\|The task has errored too many times or encountered an error that it cannot recover from.\|<br>\| CANCEL_REQUESTED	\|The cancel request from the user is recorded.\|<br>\| CANCELLED	\|The cancel request from the user is honored.\|<br>|
|url|query|string|false|Filter logs by destination URL|
|topicName|query|string|false|Filter logs by URL Group name|
|scheduleId|query|string|false|Filter logs by schedule ID|
|queueName|query|string|false|Filter logs by queue name|
|fromDate|query|integer(int64)|false|Filter logs by starting date, in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter logs by ending date, in milliseconds (Unix timestamp). This is inclusive.|
|count|query|integer|false|The number of log entries to return.|
|label|query|[string]|false|Filter logs by label. Supports multi-value filtering. You can pass multiple values to match messages with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|CREATED|
|state|ACTIVE|
|state|RETRY|
|state|ERROR|
|state|IN_PROGRESS|
|state|DELIVERED|
|state|CANCEL_REQUESTED|
|state|CANCELLED|

> Example responses

> 200 Response

```json
{
  "cursor": "string",
  "logs": [
    {
      "time": 0,
      "messageId": "string",
      "header": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "body": "string",
      "state": "CREATED",
      "error": "string",
      "nextDeliveryTime": 0,
      "url": "string",
      "topicName": "string",
      "endpointName": "string",
      "scheduleId": "string",
      "queueName": "string",
      "responseStatus": 0,
      "responseBody": "string",
      "responseHeaders": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "timeout": 0,
      "method": "string",
      "callback": "string",
      "callbackHeaders": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "failureCallback": "string",
      "failureCallbackHeaders": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "maxRetries": 0,
      "retryDelayExpression": "string",
      "label": "string",
      "labels": [
        "string"
      ]
    }
  ]
}
```

<h3 id="list-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of logs|Inline|

<h3 id="list-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|A cursor which you can use in subsequent requests to paginate through all logs. <br>If no cursor is returned, you have reached the end of the logs.<br>|
|logs|[[LogEntry](#schemalogentry)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-signing-keys">Signing Keys</h1>

Manage signing keys

## Get Signing Keys

> Code samples

```bash
curl https://qstash.upstash.io/v2/keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/keys`

Retrieve your current and next signing keys

> Example responses

> 200 Response

```json
{
  "current": "string",
  "next": "string"
}
```

<h3 id="get-signing-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Signing keys retrieved successfully|[SigningKeys](#schemasigningkeys)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Rotate Signing Keys

> Code samples

```bash
curl https://qstash.upstash.io/v2/keys/rotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/keys/rotate`

Rotate your signing keys

> Example responses

> 200 Response

```json
{
  "current": "string",
  "next": "string"
}
```

<h3 id="rotate-signing-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Keys rotated successfully|[SigningKeys](#schemasigningkeys)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-flow-control">Flow Control</h1>

Monitor flow control keys

## List Flow Control Keys

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/flowControl`

List all Flow Control keys

> Example responses

> 200 Response

```json
[
  {
    "flowControlKey": "string",
    "waitListSize": 0,
    "parallelismMax": 0,
    "parallelismCount": 0,
    "rateMax": 0,
    "rateCount": 0,
    "ratePeriod": 0,
    "ratePeriodStart": 0,
    "isPinnedParallelism": true,
    "isPinnedRate": true,
    "isPaused": true
  }
]
```

<h3 id="list-flow-control-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flow control keys retrieved successfully|Inline|

<h3 id="list-flow-control-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FlowControlKey](#schemaflowcontrolkey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get Flow Control Key

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/flowControl/{flowControlKey}`

Get details of a specific Flow Control key

<h3 id="get-flow-control-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The Flow Control key to retrieve|

> Example responses

> 200 Response

```json
{
  "flowControlKey": "string",
  "waitListSize": 0,
  "parallelismMax": 0,
  "parallelismCount": 0,
  "rateMax": 0,
  "rateCount": 0,
  "ratePeriod": 0,
  "ratePeriodStart": 0,
  "isPinnedParallelism": true,
  "isPinnedRate": true,
  "isPaused": true
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-flow-control-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flow control key details|[FlowControlKey](#schemaflowcontrolkey)|
|404|Not Found|Flow Control key not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Pause Flow Control Key

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl/string/pause \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/flowControl/{flowControlKey}/pause`

Pauses the delivery of messages associated with a specific flow-control key.

<h3 id="pause-flow-control-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The flow-control key to pause.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="pause-flow-control-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The flow-control key has been paused.|None|
|400|Bad Request|Bad request. Returned when the flow-control key is not provided.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Resume Flow Control Key

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl/string/resume \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/flowControl/{flowControlKey}/resume`

Resumes the delivery of messages associated with a specific flow-control key.

<h3 id="resume-flow-control-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The flow-control key to resume.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="resume-flow-control-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The flow-control key has been resumed.|None|
|400|Bad Request|Bad request. Returned when the flow-control key is not provided.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Pin Configuration for Flow Control Key

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl/string/pin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/flowControl/{flowControlKey}/pin`

Pins a processing configuration for a specific flow-control key.

<h3 id="pin-configuration-for-flow-control-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The flow-control key for which the configuration will be pinned.|
|parallelism|query|integer|false|The parallelism value to apply to the flow-control key.|
|rate|query|integer|false|The rate value to apply to the flow-control key.|
|period|query|integer|false|The period value to apply to the flow-control key, in seconds.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="pin-configuration-for-flow-control-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The flow-control key configuration has been pinned.|None|
|400|Bad Request|Bad request. Returned when the flow-control key is not provided, or when the parallelism, rate or period values are invalid.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Unpin Configuration for Flow Control Key

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl/string/unpin \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/flowControl/{flowControlKey}/unpin`

Removes the pinned configuration for a specific flow-control key.

<h3 id="unpin-configuration-for-flow-control-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The flow-control key for which the configuration will be unpinned.|
|parallelism|query|boolean|false|The flag to indicate whether to unpin the parallelism configuration.|
|rate|query|boolean|false|The flag to indicate whether to unpin the rate configuration.|

> Example responses

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="unpin-configuration-for-flow-control-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The flow-control key configuration is pinned|None|
|400|Bad Request|Bad request. Returned when the flow-control key is not provided.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Reset Rate for Flow Control Key

> Code samples

```bash
curl https://qstash.upstash.io/v2/flowControl/string/resetRate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/flowControl/{flowControlKey}/resetRate`

Resets the rate configuration state for a specific flow-control key.

<h3 id="reset-rate-for-flow-control-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The flow-control key for which the rate state will be reset.|

> Example responses

> 400 Response

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

<h3 id="reset-rate-for-flow-control-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The rate state for the flow-control key has been reset.|None|
|400|Bad Request|Bad request. Returned when the flow-control key is not provided.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error. Returned when an unexpected error occurs.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get Global Parallelism

> Code samples

```bash
curl https://qstash.upstash.io/v2/globalParallelism \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/globalParallelism`

Returns the current global parallelism usage across all flow control keys

> Example responses

> 200 Response

```json
{
  "parallelismMax": 0,
  "parallelismCount": 0
}
```

<h3 id="get-global-parallelism-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Global parallelism info retrieved successfully|Inline|

<h3 id="get-global-parallelism-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parallelismMax|integer|false|none|The configured maximum global parallelism|
|parallelismCount|integer|false|none|The current number of messages running globally in parallel|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="qstash-rest-api-bulk-actions">Bulk Actions</h1>

Track filter-based bulk operations

## List Bulk Actions

> Code samples

```bash
curl https://qstash.upstash.io/v2/bulkActions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bulkActions`

List the bulk actions created by filter-based message cancels

<h3 id="list-bulk-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|By providing a cursor you can paginate through all of the bulk actions.|
|count|query|integer|false|The number of bulk actions to scan per page. Values above 1000 are treated as 1000.|
|state|query|string|false|Filter bulk actions by state.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|IN_PROGRESS|
|state|FINISHED|

> Example responses

> 200 Response

```json
{
  "bulkActions": [
    {
      "actionId": "string",
      "kind": "cancel",
      "state": "IN_PROGRESS",
      "total": 0,
      "processed": 0,
      "createdAt": 0,
      "completedAt": 0,
      "filter": {
        "queueName": [
          "my-queue"
        ],
        "label": [
          "label_1",
          "label_2"
        ]
      }
    }
  ],
  "cursor": "string"
}
```

> 400 Response

```json
{
  "error": "string"
}
```

<h3 id="list-bulk-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of bulk actions|Inline|
|400|Bad Request|Invalid `count`, `cursor` or `state`|[Error](#schemaerror)|

<h3 id="list-bulk-actions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulkActions|[[BulkAction](#schemabulkaction)]|false|none|none|
|cursor|string|false|none|A cursor which you can use in subsequent requests to paginate through all bulk actions.<br>If no cursor is returned, you have reached the end of the bulk actions.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get a Bulk Action

> Code samples

```bash
curl https://qstash.upstash.io/v2/bulkActions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/bulkActions/{actionId}`

Retrieve the details and progress of a bulk action

<h3 id="get-a-bulk-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actionId|path|string|true|The ID of the bulk action, as returned by a filter-based bulk cancel with `async=true`.|

> Example responses

> 200 Response

```json
{
  "actionId": "string",
  "kind": "cancel",
  "state": "IN_PROGRESS",
  "total": 0,
  "processed": 0,
  "createdAt": 0,
  "completedAt": 0,
  "filter": {
    "queueName": [
      "my-queue"
    ],
    "label": [
      "label_1",
      "label_2"
    ]
  }
}
```

> 404 Response

```json
{
  "error": "string"
}
```

<h3 id="get-a-bulk-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bulk action details|[BulkAction](#schemabulkaction)|
|404|Not Found|Bulk action not found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
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
|error|string|true|none|Error message|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "messageId": "string",
  "url": "string",
  "topicName": "string",
  "endpointName": "string",
  "method": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "bodyBase64": "string",
  "maxRetries": 0,
  "notBefore": 0,
  "createdAt": 0,
  "callback": "string",
  "failureCallback": "string",
  "queueName": "string",
  "scheduleId": "string",
  "callerIP": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string",
  "rate": 0,
  "period": 0,
  "parallelism": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|false|none|Unique identifier for the message|
|url|string|false|none|The URL to which the message should be delivered.|
|topicName|string|false|none|The URL Group (a.k.a. topic) name if this message was sent to a URL Group.|
|endpointName|string|false|none|The endpoint name of the message if the endpoint is given a name within the URL group.|
|method|string|false|none|The HTTP method to use for the message.|
|header|object|false|none|The HTTP headers sent to your API.|
|body|string|false|none|The body of the message if it is composed of utf8 chars only, empty otherwise.|
|bodyBase64|string|false|none|The base64 encoded body if the body contains a non-utf8 char only, empty otherwise.|
|maxRetries|integer|false|none|The number of retries that should be attempted in case of delivery failure.|
|notBefore|integer(int64)|false|none|The unix timestamp in milliseconds before which the message should not be delivered.|
|createdAt|integer(int64)|false|none|The unix timestamp in milliseconds when the message was created.|
|callback|string|false|none|The url where we send a callback each time the message is attempted to be delivered.|
|failureCallback|string|false|none|The url where we send a callback to after the message is failed|
|queueName|string|false|none|The name of the queue if the message is enqueued to a queue.|
|scheduleId|string|false|none|The scheduleId of the message if the message is triggered by a schedule|
|callerIP|string|false|none|IP address of the publisher of this message.|
|label|string|false|none|**Deprecated.** The label of the message assigned by the user. Deprecated in favor of `labels`.|
|labels|[string]|false|none|The list of labels assigned to the message by the user.|
|flowControlKey|string|false|none|The flow control key used for rate limiting.|
|rate|integer|false|none|The rate value used for flow control.|
|period|integer|false|none|The period value used for flow control.|
|parallelism|integer|false|none|The parallelism value used for flow control.|

<h2 id="tocS_PublishResponse">PublishResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishresponse"></a>
<a id="schema_PublishResponse"></a>
<a id="tocSpublishresponse"></a>
<a id="tocspublishresponse"></a>

```json
{
  "messageId": "string",
  "deduplicated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|false|none|Unique identifier for the published message or the old message ID if deduplicated|
|deduplicated|boolean|false|none|Whether this message is a duplicate and was not sent to the destination.|

<h2 id="tocS_PublishToUrlGroupResponse">PublishToUrlGroupResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishtourlgroupresponse"></a>
<a id="schema_PublishToUrlGroupResponse"></a>
<a id="tocSpublishtourlgroupresponse"></a>
<a id="tocspublishtourlgroupresponse"></a>

```json
{
  "messageId": "string",
  "deduplicated": true,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|false|none|Unique identifier for the published message or the old message ID if deduplicated|
|deduplicated|boolean|false|none|Whether this message is a duplicate and was not sent to the destination.|
|url|string|false|none|Destination URL of the URL Group endpoint.|

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "name": "string",
  "createdAt": 0,
  "updatedAt": 0,
  "parallelism": 0,
  "paused": true,
  "lag": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the queue.|
|createdAt|integer(int64)|false|none|The creation timestamp of the queue in Unix milliseconds|
|updatedAt|integer(int64)|false|none|The last update timestamp of the queue in Unix milliseconds|
|parallelism|integer|false|none|The number of parallel consumers consuming from the queue|
|paused|boolean|false|none|Whether the queue is paused|
|lag|integer|false|none|The number of unprocessed messages that exist in the queue|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "scheduleId": "string",
  "cron": "string",
  "destination": "string",
  "createdAt": 0,
  "method": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "retries": 0,
  "delay": 0,
  "callback": "string",
  "failureCallback": "string",
  "callerIp": "string",
  "isPaused": true,
  "flowControlKey": "string",
  "parallelism": 0,
  "rate": 0,
  "period": 0,
  "retryDelayExpression": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "lastScheduleTime": 0,
  "nextScheduleTime": 0,
  "lastScheduleStates": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scheduleId|string|true|none|Unique identifier for the schedule|
|cron|string|true|none|The cron expression used to schedule the message|
|destination|string|true|none|The destination URL or URL Group name|
|createdAt|integer(int64)|true|none|The creation timestamp of the schedule in unix milliseconds|
|method|string|true|none|The HTTP method used for the scheduled message|
|header|object|false|none|Map of header names to arrays of header values|
|body|string|false|none|The body of the scheduled message|
|retries|integer|false|none|The number of retries for the scheduled message|
|delay|integer|false|none|The delay in seconds before the scheduled message is sent|
|callback|string|false|none|The callback URL for the scheduled message|
|failureCallback|string|false|none|The failure callback URL for the scheduled message|
|callerIp|string|false|none|The IP address of the client that created the schedule|
|isPaused|boolean|true|none|Whether the schedule is paused|
|flowControlKey|string|false|none|The flow control key used for rate limiting|
|parallelism|integer|false|none|The parallelism value used for flow control|
|rate|integer|false|none|The rate value used for flow control|
|period|integer|false|none|The period value used for flow control|
|retryDelayExpression|string|false|none|The retry delay expression used for calculating retry delays|
|label|string|false|none|**Deprecated.** The label assigned to the scheduled message. Deprecated in favor of `labels`.|
|labels|[string]|false|none|The list of labels assigned to the scheduled message.|
|lastScheduleTime|integer(int64)|false|none|The last time the schedule was triggered in unix milliseconds|
|nextScheduleTime|integer(int64)|false|none|The next scheduled trigger time in unix milliseconds|
|lastScheduleStates|object|false|none|The states of the last scheduled messages|

<h2 id="tocS_URLGroup">URLGroup</h2>
<!-- backwards compatibility -->
<a id="schemaurlgroup"></a>
<a id="schema_URLGroup"></a>
<a id="tocSurlgroup"></a>
<a id="tocsurlgroup"></a>

```json
{
  "name": "string",
  "createdAt": 0,
  "updatedAt": 0,
  "endpoints": [
    {
      "name": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|URL Group name|
|createdAt|integer|false|none|Creation timestamp of URL Group in Unix milliseconds|
|updatedAt|integer|false|none|Last update timestamp of URL Group in Unix milliseconds|
|endpoints|[[Endpoint](#schemaendpoint)]|false|none|none|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the endpoint|
|url|string|false|none|The URL of the endpoint|

<h2 id="tocS_FlowControlKey">FlowControlKey</h2>
<!-- backwards compatibility -->
<a id="schemaflowcontrolkey"></a>
<a id="schema_FlowControlKey"></a>
<a id="tocSflowcontrolkey"></a>
<a id="tocsflowcontrolkey"></a>

```json
{
  "flowControlKey": "string",
  "waitListSize": 0,
  "parallelismMax": 0,
  "parallelismCount": 0,
  "rateMax": 0,
  "rateCount": 0,
  "ratePeriod": 0,
  "ratePeriodStart": 0,
  "isPinnedParallelism": true,
  "isPinnedRate": true,
  "isPaused": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowControlKey|string|false|none|The flow control key name|
|waitListSize|integer|false|none|The number of messages waiting due to flow control configuration.|
|parallelismMax|integer|false|none|The configured maximum number of messages allowed to run concurrently, if parallelism is set.|
|parallelismCount|integer|false|none|The current number of messages running in parallel.|
|rateMax|integer|false|none|The configured maximum number of messages allowed per rate period, if rate limiting is set.|
|rateCount|integer|false|none|The number of messages dispatched in the current rate period.|
|ratePeriod|integer|false|none|The length of the rate period in seconds.|
|ratePeriodStart|integer|false|none|Unix timestamp (seconds) when the current rate period started.|
|isPinnedParallelism|boolean|false|none|True if the flow-control key has a pinned parallelism configuration.|
|isPinnedRate|boolean|false|none|True if the flow-control key has a pinned rate configuration.|
|isPaused|boolean|false|none|True if the delivery of messages associated with the flow-control key is paused.|

<h2 id="tocS_DLQMessage">DLQMessage</h2>
<!-- backwards compatibility -->
<a id="schemadlqmessage"></a>
<a id="schema_DLQMessage"></a>
<a id="tocSdlqmessage"></a>
<a id="tocsdlqmessage"></a>

```json
{
  "messageId": "string",
  "url": "string",
  "topicName": "string",
  "endpointName": "string",
  "method": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "bodyBase64": "string",
  "maxRetries": 0,
  "notBefore": 0,
  "createdAt": 0,
  "callback": "string",
  "failureCallback": "string",
  "queueName": "string",
  "scheduleId": "string",
  "callerIP": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string",
  "rate": 0,
  "period": 0,
  "parallelism": 0,
  "responseStatus": 0,
  "responseHeader": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "responseBody": "string",
  "responseBodyBase64": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|false|none|Unique identifier for the message|
|url|string|false|none|The URL to which the message should be delivered.|
|topicName|string|false|none|The URL Group (a.k.a. topic) name if this message was sent to a URL Group.|
|endpointName|string|false|none|The endpoint name of the message if the endpoint is given a name within the URL group.|
|method|string|false|none|The HTTP method to use for the message.|
|header|object|false|none|The HTTP headers sent to your API.|
|body|string|false|none|The body of the message if it is composed of utf8 chars only, empty otherwise.|
|bodyBase64|string|false|none|The base64 encoded body if the body contains a non-utf8 char only, empty otherwise.|
|maxRetries|integer|false|none|The number of retries that should be attempted in case of delivery failure.|
|notBefore|integer(int64)|false|none|The unix timestamp in milliseconds before which the message should not be delivered.|
|createdAt|integer(int64)|false|none|The unix timestamp in milliseconds when the message was created.|
|callback|string|false|none|The url where we send a callback each time the message is attempted to be delivered.|
|failureCallback|string|false|none|The url where we send a callback to after the message is failed|
|queueName|string|false|none|The name of the queue if the message is enqueued to a queue.|
|scheduleId|string|false|none|The scheduleId of the message if the message is triggered by a schedule|
|callerIP|string|false|none|IP address of the publisher of this message.|
|label|string|false|none|**Deprecated.** The label of the message assigned by the user. Deprecated in favor of `labels`.|
|labels|[string]|false|none|The list of labels assigned to the message by the user.|
|flowControlKey|string|false|none|The flow control key used for rate limiting.|
|rate|integer|false|none|The rate value used for flow control.|
|period|integer|false|none|The period value used for flow control.|
|parallelism|integer|false|none|The parallelism value used for flow control.|
|responseStatus|integer|false|none|The HTTP status code received from the destination API.|
|responseHeader|object|false|none|The HTTP response headers received from the destination API.|
|responseBody|string|false|none|The body of the response if it is composed of utf8 chars only, empty otherwise.|
|responseBodyBase64|string|false|none|The base64 encoded body of the response if the body contains a non-utf8 char only, empty otherwise.|

<h2 id="tocS_SigningKeys">SigningKeys</h2>
<!-- backwards compatibility -->
<a id="schemasigningkeys"></a>
<a id="schema_SigningKeys"></a>
<a id="tocSsigningkeys"></a>
<a id="tocssigningkeys"></a>

```json
{
  "current": "string",
  "next": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|string|false|none|The current signing key.|
|next|string|false|none|The next signing key.|

<h2 id="tocS_LogEntry">LogEntry</h2>
<!-- backwards compatibility -->
<a id="schemalogentry"></a>
<a id="schema_LogEntry"></a>
<a id="tocSlogentry"></a>
<a id="tocslogentry"></a>

```json
{
  "time": 0,
  "messageId": "string",
  "header": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "body": "string",
  "state": "CREATED",
  "error": "string",
  "nextDeliveryTime": 0,
  "url": "string",
  "topicName": "string",
  "endpointName": "string",
  "scheduleId": "string",
  "queueName": "string",
  "responseStatus": 0,
  "responseBody": "string",
  "responseHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "timeout": 0,
  "method": "string",
  "callback": "string",
  "callbackHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "failureCallback": "string",
  "failureCallbackHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "maxRetries": 0,
  "retryDelayExpression": "string",
  "label": "string",
  "labels": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|integer(int64)|false|none|The timestamp of the log entry in Unix milliseconds|
|messageId|string|false|none|The message ID associated with the log entry|
|header|object|false|none|The headers of the message.|
|body|string|false|none|Base64 encoded body of the message.|
|state|string|false|none|The state of the message at the time of the log entry.|
|error|string|false|none|The error message if the log entry corresponds to an error state.|
|nextDeliveryTime|integer(int64)|false|none|The next scheduled time of the message. (Unix timestamp in milliseconds)|
|url|string|false|none|The URL to which the message is being delivered.|
|topicName|string|false|none|The URL Group (a.k.a. topic) name if this message was sent to a URL Group.|
|endpointName|string|false|none|The endpoint name of the message if the endpoint is given a name within the URL group.|
|scheduleId|string|false|none|The scheduleId of the message if the message is triggered by a schedule|
|queueName|string|false|none|The name of the queue if the message is enqueued to a queue.|
|responseStatus|integer|false|none|The status code of the response. Only set if the state is ERROR|
|responseBody|string|false|none|The base64 encoded body of the response. Only set if the state is ERROR|
|responseHeaders|object|false|none|The headers of the response. Only set if the state is ERROR|
|timeout|integer|false|none|The timeout(in milliseconds) of the outgoing http requests, after which Qstash cancels the request|
|method|string|false|none|HTTP method of the message for outgoing request|
|callback|string|false|none|Callback is the URL address where QStash sends the response of a publish|
|callbackHeaders|object|false|none|The headers sent to the callback URL|
|failureCallback|string|false|none|Failur eCallback is the URL address where QStash sends the response of a failed message after all retries are exhausted|
|failureCallbackHeaders|object|false|none|The headers sent to the failure callback URL|
|maxRetries|integer|false|none|The maximum number of retries for the message|
|retryDelayExpression|string|false|none|The retry delay expression used for calculating retry delays|
|label|string|false|none|**Deprecated.** The label assigned to the message. Deprecated in favor of `labels`.|
|labels|[string]|false|none|The list of labels assigned to the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|CREATED|
|state|ACTIVE|
|state|RETRY|
|state|ERROR|
|state|DELIVERED|
|state|FAILED|
|state|CANCEL_REQUESTED|
|state|CANCELLED|

<h2 id="tocS_BulkAction">BulkAction</h2>
<!-- backwards compatibility -->
<a id="schemabulkaction"></a>
<a id="schema_BulkAction"></a>
<a id="tocSbulkaction"></a>
<a id="tocsbulkaction"></a>

```json
{
  "actionId": "string",
  "kind": "cancel",
  "state": "IN_PROGRESS",
  "total": 0,
  "processed": 0,
  "createdAt": 0,
  "completedAt": 0,
  "filter": {
    "queueName": [
      "my-queue"
    ],
    "label": [
      "label_1",
      "label_2"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|string|false|none|The ID of the bulk action.|
|kind|string|false|none|The kind of the bulk action.|
|state|string|false|none|The state of the bulk action.<br><br>\|Value	\|Description\|<br>\|-------\|------------\|<br>\| IN_PROGRESS	\|The bulk action is running in the background.\|<br>\| FINISHED	\|The bulk action has finished.\|<br>|
|total|integer(int64)|false|none|The number of in-progress messages that matched the filter when the bulk action was created.|
|processed|integer(int64)|false|none|The number of messages processed by the bulk action so far.|
|createdAt|integer(int64)|false|none|The creation time of the bulk action, in milliseconds (Unix timestamp).|
|completedAt|integer(int64)|false|none|The completion time of the bulk action, in milliseconds (Unix timestamp). Only present once the bulk action has finished.|
|filter|object|false|none|The filter the bulk action was created with. Keys are the filter parameter names of the bulk cancel request, such as `queueName`, `label` or `fromDate`, and values are the given values.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|cancel|
|state|IN_PROGRESS|
|state|FINISHED|
