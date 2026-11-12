<h1 id="api-v1">API v1 v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Inngest API

Inngest is an event-driven durable workflow engine served in your own API, with zero new infrastructure. Learn more at https://www.inngest.com/

This API is the V1 API for interacting with events, functions, and runs programmatically.

**Authentication**

Use your environment's signing key as a bearer token.  You must an `Authorization` header with the value of `Bearer ${signing-key}` to authenticate.

**Note**

Trailing slashes on the URLs doesn't work.

Base URLs:

* <a href="https://api.inngest.com">https://api.inngest.com</a> - Production

* <a href="http://localhost:8288">http://localhost:8288</a> - Dev Server

<a href="https://www.inngest.com/terms">Terms of service</a>
Email: <a href="mailto:hello@inngest.com">Inngest</a> 
Web: <a href="https://www.inngest.com">Inngest</a> 

# Authentication

- HTTP Authentication, scheme: bearer The signing key from your environment

<h1 id="api-v1-events">Events</h1>

## List events

<a id="opIdListEvents"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/events`

Fetches recent events from your environment.

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|received_before|query|string|false|List events received before this RFC3339 timestamp|
|received_after|query|string|false|List events received after this RFC3339 timestamp|
|limit|query|number|false|The number of events to list|
|name|query|string|false|The optional name of the event to filter by|
|cursor|query|string|false|The internal event ID used as a cursor to paginate through events within your time range|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "internal_id": "string",
      "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "environmentID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "source": "string",
      "sourceID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "receivedAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "name": "string",
      "data": {},
      "user": {},
      "ts": 0,
      "v": "string"
    }
  ],
  "metadata": {
    "fetchedAt": "string",
    "cachedUntil": "string"
  }
}
```

> 401 Response

```json
{
  "error": "string",
  "data": {},
  "status": 0
}
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response when listing events.|Inline|
|401|Unauthorized|An error from the API|Inline|

<h3 id="list-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» internal_id|string(ulid)|true|none|Unique identifier used to represent this event internally and to the API.|
|» accountID|string(uuid)|true|none|Your account ID|
|» environmentID|string(uuid)|true|none|Your environment ID|
|» source|string|true|none|The origin of the event, eg. "key" for an event key.|
|» sourceID|string(uuid)|false|none|The ID of the key used to deliver the event|
|» receivedAt|string(date-time)|true|none|When the event was received by Inngest|
|» id|string|true|none|The `id` field specified in the event|
|» name|string|true|none|The `name` field specified in the event|
|» data|object|true|none|The `data` field specified in the event|
|» user|object \| null|false|none|The `user` field specified in the event|
|» ts|integer|true|none|The `ts` field specified in the event|
|» v|string \| null|false|none|The `v` field specified in the event|
|metadata|object|true|none|none|
|» fetchedAt|string|true|none|none|
|» cachedUntil|string \| null|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|data|object \| string \| null|false|none|none|
|status|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Get an event

<a id="opIdGetEvent"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/events/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/events/{internalID}`

Retrieve a single event within your environment, given its internal ID

<h3 id="get-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|internalID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "internal_id": "string",
    "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "environmentID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "source": "string",
    "sourceID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "receivedAt": "1970-01-01T00:00:00Z",
    "id": "string",
    "name": "string",
    "data": {},
    "user": {},
    "ts": 0,
    "v": "string"
  },
  "metadata": {
    "fetchedAt": "string",
    "cachedUntil": "string"
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "data": {},
  "status": 0
}
```

<h3 id="get-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response when fetching an event|Inline|
|404|Not Found|An error from the API|Inline|

<h3 id="get-an-event-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|An event and metadata attached to the event returned from an API response|
|» internal_id|string(ulid)|true|none|Unique identifier used to represent this event internally and to the API.|
|» accountID|string(uuid)|true|none|Your account ID|
|» environmentID|string(uuid)|true|none|Your environment ID|
|» source|string|true|none|The origin of the event, eg. "key" for an event key.|
|» sourceID|string(uuid)|false|none|The ID of the key used to deliver the event|
|» receivedAt|string(date-time)|true|none|When the event was received by Inngest|
|» id|string|true|none|The `id` field specified in the event|
|» name|string|true|none|The `name` field specified in the event|
|» data|object|true|none|The `data` field specified in the event|
|» user|object \| null|false|none|The `user` field specified in the event|
|» ts|integer|true|none|The `ts` field specified in the event|
|» v|string \| null|false|none|The `v` field specified in the event|
|metadata|object|true|none|none|
|» fetchedAt|string|true|none|none|
|» cachedUntil|string \| null|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|data|object \| string \| null|false|none|none|
|status|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## List event function runs

<a id="opIdListEventRuns"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/events/string/runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/events/{internalID}/runs`

Returns function runs initialized by the given event

<h3 id="list-event-function-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|internalID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "run_id": "string",
      "run_started_at": "1970-01-01T00:00:00Z",
      "ended_at": "string",
      "status": "Running",
      "output": {},
      "function_id": "string",
      "function_version": 0,
      "environment_id": "string",
      "event_id": "string",
      "batch_id": "string",
      "original_run_id": "string",
      "cron": "string"
    }
  ],
  "metadata": {
    "fetchedAt": "string",
    "cachedUntil": "string"
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "data": {},
  "status": 0
}
```

<h3 id="list-event-function-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response when fetching function runs|Inline|
|404|Not Found|An error from the API|Inline|

<h3 id="list-event-function-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» run_id|string|true|none|The ID of the function run|
|» run_started_at|string(date-time)|true|none|When the function run was scheduled|
|» ended_at|string \| null|false|none|If the function has ended, the end time.  A function has ended if the status is not Running.|
|» status|string|true|read-only|none|
|» output|object \| array \| number \| string \| boolean \| null|false|none|Data returned from the function handler. The data structure returned will match what the function returns.|
|» function_id|string|true|none|none|
|» function_version|integer|true|none|none|
|» environment_id|string|true|none|none|
|» event_id|string \| null|false|none|The internal ID of the triggering event, if the function was initialized via an event|
|» batch_id|string \| null|false|none|The ID of the batch, if this function was initialized via a batch of events|
|» original_run_id|string \| null|false|none|The run ID of the original run, if this is a replay|
|» cron|string \| null|false|none|The cron used to initialize this scheduled function, if the function was initialized via a cron|
|metadata|object|true|none|none|
|» fetchedAt|string|true|none|none|
|» cachedUntil|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|Running|
|» status|Completed|
|» status|Failed|
|» status|Cancelled|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|data|object \| string \| null|false|none|none|
|status|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

<h1 id="api-v1-function-runs">Function runs</h1>

## Get a function run

<a id="opIdGetRun"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/runs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/runs/{runID}`

Returns a single function run by its run ID

<h3 id="get-a-function-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|runID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "run_id": "string",
    "run_started_at": "1970-01-01T00:00:00Z",
    "ended_at": "string",
    "status": "Running",
    "output": {},
    "function_id": "string",
    "function_version": 0,
    "environment_id": "string",
    "event_id": "string",
    "batch_id": "string",
    "original_run_id": "string",
    "cron": "string"
  },
  "metadata": {
    "fetchedAt": "string",
    "cachedUntil": "string"
  }
}
```

> 404 Response

```json
{
  "error": "string",
  "data": {},
  "status": 0
}
```

<h3 id="get-a-function-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response when fetching a function run|Inline|
|404|Not Found|An error from the API|Inline|

<h3 id="get-a-function-run-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
|» run_id|string|true|none|The ID of the function run|
|» run_started_at|string(date-time)|true|none|When the function run was scheduled|
|» ended_at|string \| null|false|none|If the function has ended, the end time.  A function has ended if the status is not Running.|
|» status|string|true|read-only|none|
|» output|object \| array \| number \| string \| boolean \| null|false|none|Data returned from the function handler. The data structure returned will match what the function returns.|
|» function_id|string|true|none|none|
|» function_version|integer|true|none|none|
|» environment_id|string|true|none|none|
|» event_id|string \| null|false|none|The internal ID of the triggering event, if the function was initialized via an event|
|» batch_id|string \| null|false|none|The ID of the batch, if this function was initialized via a batch of events|
|» original_run_id|string \| null|false|none|The run ID of the original run, if this is a replay|
|» cron|string \| null|false|none|The cron used to initialize this scheduled function, if the function was initialized via a cron|
|metadata|object|true|none|none|
|» fetchedAt|string|true|none|none|
|» cachedUntil|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|Running|
|» status|Completed|
|» status|Failed|
|» status|Cancelled|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|data|object \| string \| null|false|none|none|
|status|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Cancel a function run

<a id="opIdCancelRun"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/runs/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/runs/{runID}`

Cancels a running function immediately.  No new steps will run after a function is cancelled.

<h3 id="cancel-a-function-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|runID|path|string|true|none|

<h3 id="cancel-a-function-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Fetch function run jobs

<a id="opIdGetRunJobs"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/runs/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/runs/{runID}/jobs`

An endpoint to fetch a subset of the function run's jobs within the function_id queue, in order of earliest to latest. This primarily allows you to see the order of the run's jobs within the function queue.

A single function enqueues all function run jobs wihtin the same queue.  This endpoint fetches a subset of jobs for a given function run.

This endpoint is rate limited and cached for 5 seconds.

<h3 id="fetch-function-run-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|runID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "at": "1970-01-01T00:00:00Z",
      "position": 0,
      "attempt": 0
    }
  ],
  "metadata": {
    "fetchedAt": "string",
    "cachedUntil": "string"
  }
}
```

<h3 id="fetch-function-run-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response when fetching function runs|Inline|

<h3 id="fetch-function-run-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» at|string(date-time)|false|none|The time the job is scheduled to run|
|» position|integer|false|none|The position of the job within the function queue|
|» attempt|integer|false|none|The attempt number of the job|
|metadata|object|true|none|none|
|» fetchedAt|string|true|none|none|
|» cachedUntil|string \| null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

<h1 id="api-v1-signals">Signals</h1>

## Resume signal

<a id="opIdResumeSignal"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/signals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "signal": "string",
    "data": {}
  }'
```

`POST /v1/signals`

Sends data to resume a given signal

> Body parameter

```json
{
  "signal": "string",
  "data": {}
}
```

<h3 id="resume-signal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|body|body|object|false|Resume a function which is awaiting a signal via the `WaitForSignal` step.  The function run will resume with the given data and signal.|
|» signal|body|string|false|The signal to resume.  This is a unique string, and represents a single run waiting for the signal via `step.waitForSignal`.|
|» data|body|object \| array \| integer \| number \| string \| boolean|false|The data to be sent to the waiting function run.|

> Example responses

> 200 Response

```json
{
  "run_id": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "data": {},
  "status": 0
}
```

<h3 id="resume-signal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The run ID of the run resumed.|Inline|
|401|Unauthorized|An error from the API|Inline|

<h3 id="resume-signal-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run_id|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|data|object \| string \| null|false|none|none|
|status|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

<h1 id="api-v1-cancellations">Cancellations</h1>

## List cancellations

<a id="opIdListCancellations"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/cancellations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/cancellations`

Returns all cancellations in your environment

<h3 id="list-cancellations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "environment_id": "string",
      "function_internal_id": "string",
      "function_id": "string",
      "started_before": "1970-01-01T00:00:00Z",
      "started_after": "1970-01-01T00:00:00Z",
      "if": "string"
    }
  ]
}
```

<h3 id="list-cancellations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response when listing cancellations|Inline|

<h3 id="list-cancellations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» id|string|true|none|none|
|» environment_id|string|true|none|none|
|» function_internal_id|string|true|none|none|
|» function_id|string|true|none|none|
|» started_before|string(date-time)|true|none|none|
|» started_after|string(date-time)|false|none|none|
|» if|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Create a cancellation

<a id="opIdCreateCancellation"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/cancellations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "app_id": "string",
    "function_id": "string",
    "started_before": "1970-01-01T00:00:00Z",
    "started_after": "1970-01-01T00:00:00Z",
    "if": "string"
  }'
```

`POST /v1/cancellations`

Creates a bulk cancellation, cancelling all functions in the given time range matching an optional expression

> Body parameter

```json
{
  "app_id": "string",
  "function_id": "string",
  "started_before": "1970-01-01T00:00:00Z",
  "started_after": "1970-01-01T00:00:00Z",
  "if": "string"
}
```

<h3 id="create-a-cancellation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|body|body|object|false|none|
|» app_id|body|string|true|The client ID specified via the SDK for the app, eg: `new Inngest({ id: "this-id" })`|
|» function_id|body|string|true|The function ID specified in the SDK|
|» started_before|body|string(date-time)|true|none|
|» started_after|body|string(date-time)|false|none|
|» if|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "environment_id": "string",
    "function_internal_id": "string",
    "function_id": "string",
    "started_before": "1970-01-01T00:00:00Z",
    "started_after": "1970-01-01T00:00:00Z",
    "if": "string"
  },
  "error": "string"
}
```

<h3 id="create-a-cancellation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="create-a-cancellation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» id|string|true|none|none|
|» environment_id|string|true|none|none|
|» function_internal_id|string|true|none|none|
|» function_id|string|true|none|none|
|» started_before|string(date-time)|true|none|none|
|» started_after|string(date-time)|false|none|none|
|» if|string|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Delete a cancellation

<a id="opIdDeleteCancellation"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/cancellations/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/cancellations/{id}`

Delete a cancellation, preventing the cancellation from stopping function runs between the given dates with a given expression.

<h3 id="delete-a-cancellation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-inngest-env|header|string|false|Branch environment name when using a branch signing key|
|id|path|string|true|none|

<h3 id="delete-a-cancellation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cancellation deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

<h1 id="api-v1-webhooks">Webhooks</h1>

## Get webhooks

<a id="opIdListWebhooks"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks`

Get all webhook endpoints in the given environment.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "5e627760-ce58-4068-861e-bcfe5161382e",
      "name": "Clerk",
      "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }",
      "url": "https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw"
    }
  ]
}
```

<h3 id="get-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Create webhook

<a id="opIdCreateWebhook"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /v1/webhooks`

Create a new webhook endpoint with the given configuration.

> Body parameter

```json
null
```

<h3 id="create-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "5e627760-ce58-4068-861e-bcfe5161382e",
    "name": "Clerk",
    "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }",
    "url": "https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw"
  }
}
```

<h3 id="create-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Get webhook

<a id="opIdGetWebhook"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks/{id}`

Get a webhook endpoint's configuration

<h3 id="get-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|uuid|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "5e627760-ce58-4068-861e-bcfe5161382e",
    "name": "Clerk",
    "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }",
    "url": "https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw"
  }
}
```

<h3 id="get-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Update webhook

<a id="opIdUpdateWebhook"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/webhooks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Clerk",
    "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }"
  }'
```

`PUT /v1/webhooks/{id}`

Update a webhook endpoint's configuration

> Body parameter

```json
{
  "name": "Clerk",
  "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }"
}
```

<h3 id="update-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|uuid|
|body|body|[Webhook](#schemawebhook)|false|none|
|» name|body|string|false|A custom descripter for the webhook endpoint|
|» transform|body|string|false|A JavaScript transform function that accepts the inbound request components and returns an object in the Inngest event payload format.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "5e627760-ce58-4068-861e-bcfe5161382e",
    "name": "Clerk",
    "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }",
    "url": "https://inn.gs/e/eRqRM2PcvLbQ8mwmnCq7SnjD3mclZrk5WGBpB-AbIkJY0cBZpiceni8ktSDF3WCjarOHOkciliKjrXLoi7fHqw"
  }
}
```

<h3 id="update-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
</aside>

## Delete webhook

<a id="opIdDeleteWebhook"></a>

> Code samples

```bash
curl https://api.inngest.com/v1/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/webhooks/{id}`

Delete a webhook endpoint

<h3 id="delete-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|uuid|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "5e627760-ce58-4068-861e-bcfe5161382e"
  }
}
```

<h3 id="delete-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="delete-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» id|string(uuid)|false|none|Unique identifier of the webhook endpoint|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
your-signing-key
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
  "internal_id": "string",
  "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "environmentID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "source": "string",
  "sourceID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "receivedAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "name": "string",
  "data": {},
  "user": {},
  "ts": 0,
  "v": "string"
}
```

An event and metadata attached to the event returned from an API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|internal_id|string(ulid)|true|none|Unique identifier used to represent this event internally and to the API.|
|accountID|string(uuid)|true|none|Your account ID|
|environmentID|string(uuid)|true|none|Your environment ID|
|source|string|true|none|The origin of the event, eg. "key" for an event key.|
|sourceID|string(uuid)|false|none|The ID of the key used to deliver the event|
|receivedAt|string(date-time)|true|none|When the event was received by Inngest|
|id|string|true|none|The `id` field specified in the event|
|name|string|true|none|The `name` field specified in the event|
|data|object|true|none|The `data` field specified in the event|
|user|object \| null|false|none|The `user` field specified in the event|
|ts|integer|true|none|The `ts` field specified in the event|
|v|string \| null|false|none|The `v` field specified in the event|

<h2 id="tocS_Function-run">Function-run</h2>
<!-- backwards compatibility -->
<a id="schemafunction-run"></a>
<a id="schema_Function-run"></a>
<a id="tocSfunction-run"></a>
<a id="tocsfunction-run"></a>

```json
{
  "run_id": "string",
  "run_started_at": "1970-01-01T00:00:00Z",
  "ended_at": "string",
  "status": "Running",
  "output": {},
  "function_id": "string",
  "function_version": 0,
  "environment_id": "string",
  "event_id": "string",
  "batch_id": "string",
  "original_run_id": "string",
  "cron": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run_id|string|true|none|The ID of the function run|
|run_started_at|string(date-time)|true|none|When the function run was scheduled|
|ended_at|string \| null|false|none|If the function has ended, the end time.  A function has ended if the status is not Running.|
|status|string|true|read-only|none|
|output|object \| array \| number \| string \| boolean \| null|false|none|Data returned from the function handler. The data structure returned will match what the function returns.|
|function_id|string|true|none|none|
|function_version|integer|true|none|none|
|environment_id|string|true|none|none|
|event_id|string \| null|false|none|The internal ID of the triggering event, if the function was initialized via an event|
|batch_id|string \| null|false|none|The ID of the batch, if this function was initialized via a batch of events|
|original_run_id|string \| null|false|none|The run ID of the original run, if this is a replay|
|cron|string \| null|false|none|The cron used to initialize this scheduled function, if the function was initialized via a cron|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Running|
|status|Completed|
|status|Failed|
|status|Cancelled|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "at": "1970-01-01T00:00:00Z",
  "position": 0,
  "attempt": 0
}
```

A single job returned when listing jobs within a run ID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|at|string(date-time)|false|none|The time the job is scheduled to run|
|position|integer|false|none|The position of the job within the function queue|
|attempt|integer|false|none|The attempt number of the job|

<h2 id="tocS_Cancellation">Cancellation</h2>
<!-- backwards compatibility -->
<a id="schemacancellation"></a>
<a id="schema_Cancellation"></a>
<a id="tocScancellation"></a>
<a id="tocscancellation"></a>

```json
{
  "id": "string",
  "environment_id": "string",
  "function_internal_id": "string",
  "function_id": "string",
  "started_before": "1970-01-01T00:00:00Z",
  "started_after": "1970-01-01T00:00:00Z",
  "if": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|environment_id|string|true|none|none|
|function_internal_id|string|true|none|none|
|function_id|string|true|none|none|
|started_before|string(date-time)|true|none|none|
|started_after|string(date-time)|false|none|none|
|if|string|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "name": "Clerk",
  "transform": "function transform(evt) { return { name: `clerk/${evt.type}`, data: evt.data }; }"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A custom descripter for the webhook endpoint|
|transform|string|false|none|A JavaScript transform function that accepts the inbound request components and returns an object in the Inngest event payload format.|
