<h1 id="upstash-workflow-rest-api">Upstash Workflow REST API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Upstash Workflow is a serverless workflow orchestration service built on top of Upstash QStash and Upstash Redis.

Base URLs:

* <a href="https://qstash-eu-central-1.upstash.io">https://qstash-eu-central-1.upstash.io</a> - Regional

Web: <a href="https://upstash.com">Upstash</a> 

# Authentication

- HTTP Authentication, scheme: bearer QStash authentication token

* API Key (bearerAuthQuery)
    - Parameter Name: **qstash_token**, in: query. QStash authentication token passed as a query parameter

<h1 id="upstash-workflow-rest-api-runs">Runs</h1>

## Trigger Workflow Run

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/trigger/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/trigger/{workflowUrl}`

Start a new workflow run.

> Body parameter

```json
{}
```

<h3 id="trigger-workflow-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowUrl|path|string|true|The URL of the workflow to trigger.|
|Upstash-Workflow-RunId|header|string|false|Optional custom run ID for the workflow run. A random ID will be generated if not provided.|
|Upstash-Forward-*|header|string|false|You can send custom headers to your workflow.<br><br>To send a custom header, prefix the header name with `Upstash-Forward-`. We will strip prefix and send them to the destination.<br><br>\| Header \| Forwarded To Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Retries|header|integer|false|Number of retries for the workflow steps in case of failure.|
|Upstash-Delay|header|string|false|Delay the message delivery.<br><br>The format of this header is `<value><unit>` where value is a number and unit is one of:<br>- `s` for seconds<br>- `m` for minutes<br>- `h` for hours.<br>- `d` for days.<br>|
|Upstash-Not-Before|header|integer|false|Delay the message delivery until a certain timestamp in the future.<br><br>The format is a unix timestamp in seconds, based on the UTC timezone.<br><br>When both `Upstash-Not-Before` and `Upstash-Delay` headers are provided, `Upstash-Not-Before` will take precedence.<br>|
|Upstash-Label|header|string|false|Optional label(s) to attach to the workflow run for easier identification in logs and DLQ.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Flow-Control-Key|header|string|false|Flow control key to manage concurrency for the workflow run. Steps with the same key will respect the same concurrency limit.<br>Make sure you pass `Upstash-Flow-Control-Value` header as well to define the limits for the key.|
|Upstash-Flow-Control-Value|header|string|false|Parallelism and rate limit configuration for the flow control key in the format:<br> `parallelism=<value>, rate=<value>, period=<value>`.<br>See [flow control](/workflow/features/flow-control) for details.<br>|
|Upstash-Failure-Callback|header|string|false|Failure callback URL to be called if the workflow run fails after all retries. That is when all the defined retries are exhausted. To call the failure function defined on server, this options should be left empty. A url should be given with this header only to call a different endpoint on failure. See [failureUrl](https://upstash.com/docs/workflow/features/failureFunction/advanced).<br><br>- Failure callback URL must be prefixed with a valid protocol (http:// or https://)<br>- Failure callbacks are charged as a regular message.<br>- Failure callbacks will use the retry setting from the original request.<br>|
|Upstash-Failure-Callback-Forward-*|header|string|false|You can send custom headers along with your failure callback message.<br>To send a custom header, prefix the header name with `Upstash-Failure-Callback-Forward-`. We will strip prefix and them to the failure callback URL.<br><br>\| Header \| Forwarded To Callback Destination As \|<br>\|--------\|--------------\|<br>\| Upstash-Failure-Callback-Forward-My-Header: my-value \| My-Header: my-value \|<br>\| Upstash-Failure-Callback-Forward-Authorization: Bearer <token> \| Authorization: Bearer <token> \|<br>|
|Upstash-Retry-Delay|header|string|false|Customize the delay between retry attempts when step delivery fails.<br><br>By default, Upstash Workflow uses [exponential backoff](/qstash/features/retry). You can override this by providing a mathematical expressions to compute next delay. This expression is computed after each failed attempt.<br><br>You can use the special variable `retried`, which is how many times the message has been retried. The `retried` is 0 for the first retry.<br><br>Supported functions: <br>\| Function    \| Description                          \|<br>\|-------------\|--------------------------------------\|<br>\| `pow(x, y)`\| Returns x raised to the power of y\|<br>\| `exp(x)`\| Returns e raised to the power of x\|<br>\| `sqrt(x)`\| Takes the square root of x\|<br>\| `abs(x)`\| Returns the absolute value of x\|<br>\| `floor(x)`\| Returns the largest integer less than or equal to x\|<br>\| `ceil(x)`\| Returns the smallest integer greater than or equal to x\|<br>\| `round(x)`\| Rounds x to the nearest integer\|<br>\| `min(x, y)`\| Returns the smaller of x and y\|<br>\| `max(x, y)`\| Returns the larger of x and y\|<br><br>Examples:<br>- `1000`: Fixed 1 second delay<br>- `1000 * (1 + retried)`: Linear backoff<br>- `pow(2, retried) * 1000`: Exponential backoff<br>- `max(1000, pow(2, retried) * 100)`: Exponential with minimum 1s delay<br>|
|body|body|object|false|The raw request payload passed to the workflow endpoints as is. You can access it via requestPayload parameter on the context object.|

> Example responses

> 200 Response

```json
{
  "workflowRunId": "string",
  "workflowCreatedAt": 0
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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="trigger-workflow-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow triggered successfully|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="trigger-workflow-run-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRunId|string|false|none|The ID of the triggered workflow run.|
|workflowCreatedAt|number(date-time)|false|none|The timestamp when the workflow run was created.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Batch Trigger Workflow Runs

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/batch/trigger \
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
      }
    }
  ]'
```

`POST /v2/batch/trigger`

Start multiple workflow runs in a single request.

> Body parameter

```json
[
  {
    "destination": "string",
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h3 id="batch-trigger-workflow-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|none|
|» destination|body|string|true|The URL of the workflow to trigger.|
|» body|body|string|false|The raw request payload passed to the workflow endpoint as is. You can access it via request payload parameter on the context object.|
|» headers|body|object|false|HTTP headers to forward to the workflow. You can pass any headers supported in the single trigger API.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
[
  {
    "workflowRunId": "string",
    "workflowCreatedAt": 0,
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

> 401 Response

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

<h3 id="batch-trigger-workflow-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Workflow runs triggered successfully|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="batch-trigger-workflow-runs-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» workflowRunId|string|false|none|The ID of the triggered workflow run.|
|» workflowCreatedAt|integer(int64)|false|none|The unix timestamp in milliseconds when the workflow run was created.|
|» deduplicated|boolean|false|none|Whether the workflow run was deduplicated (i.e. a run with the same ID already existed and a new one was not created).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Cancel Workflow Run

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/runs/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/workflows/runs/{workflowRunId}`

Cancel an ongoing workflow run.

<h3 id="cancel-workflow-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowRunId|path|string|true|The ID of the workflow run to cancel.|

<h3 id="cancel-workflow-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow run cancelled successfully|None|
|404|Not Found|A workflow run is not found with the given id.|None|
|500|Internal Server Error|An unexpected error occured.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Cancel Workflow Runs

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/runs \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/workflows/runs`

Cancel all matching workflow runs.

<h3 id="bulk-cancel-workflow-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowRunIds|query|[string]|false|Optional list of specific workflow run IDs to cancel. If provided, the other filters are ignored.|
|workflowUrl|query|[string]|false|The URL of the workflow whose runs to cancel. Supports multiple values.|
|workflowUrlExactMatch|query|boolean|false|workflow url is searched as a prefix by default. To make it exact match, `workflowUrlExactMatch` can be set to true.|
|fromDate|query|number(date-time)|false|Optional start date to filter workflow runs to cancel. Unix timestamp in milliseconds.|
|toDate|query|number(date-time)|false|Optional end date to filter workflow runs to cancel. Unix timestamp in milliseconds.|
|callerIp|query|[string]|false|Optional caller IP address to filter workflow runs to cancel. Supports multiple values.|
|flowControlKey|query|[string]|false|Optional flow control key to filter workflow runs to cancel. Supports multiple values.|
|label|query|[string]|false|Optional label to filter workflow runs to cancel. Supports multiple values. You can pass multiple values to match workflow runs with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|host|query|[string]|false|Optional host of the workflow URL to filter workflow runs to cancel. Supports multiple values.|
|path|query|[string]|false|Optional path of the workflow URL to filter workflow runs to cancel. Supports multiple values.|
|async|query|boolean|false|Only applies to filter-based cancels. If `true`, the request returns as soon as the bulk action is created, without waiting for it to finish. The response includes the `actionId` of the bulk action.<br>|
|count|query|integer|false|**Deprecated.** Deprecated. This parameter is ignored, and all workflow runs matching the filters are cancelled.|

> Example responses

> 200 Response

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

<h3 id="bulk-cancel-workflow-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow runs cancelled, or the bulk action is created when `async=true`.|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|412|Precondition Failed|Too many bulk actions are in progress. Up to 1000 bulk actions can be in progress at the same time.|[Error](#schemaerror)|
|429|Too Many Requests|The bulk action did not finish within one minute. It keeps running in the background and can be tracked via `GET /v2/workflows/bulkActions`.|[Error](#schemaerror)|

<h3 id="bulk-cancel-workflow-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|integer|false|none|When cancelling by `workflowRunIds`, the number of workflow runs cancelled.<br><br>For filter-based cancels, the number of in-progress workflow runs that matched the filters when the request was accepted.<br>|
|actionId|string|false|none|The ID of the bulk action. Only returned for filter-based cancels with `async=true`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Retry a Step Now

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/messages/string/retry \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/messages/{messageId}/retry`

Execute a workflow step that is waiting for its next retry immediately

<h3 id="retry-a-step-now-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|messageId|path|string|true|The message ID of the retrying step.|

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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="retry-a-step-now-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The step is scheduled for immediate execution.|None|
|400|Bad Request|The message id is invalid.|[Error](#schemaerror)|
|404|Not Found|Step not found, or the step is not waiting for a retry.|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="upstash-workflow-rest-api-bulk-actions">Bulk Actions</h1>

## List Bulk Actions

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/bulkActions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/workflows/bulkActions`

List the bulk actions created by filter-based workflow run cancels

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
        "workflowUrl": [
          "https://example.com/api/workflow"
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
curl https://qstash-eu-central-1.upstash.io/v2/workflows/bulkActions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/workflows/bulkActions/{actionId}`

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
    "workflowUrl": [
      "https://example.com/api/workflow"
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

<h1 id="upstash-workflow-rest-api-logs">Logs</h1>

## List Workflow Run Logs

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/workflows/logs`

List and filter workflow runs with their state, completed and in-progress steps, and step details.

<h3 id="list-workflow-run-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Pagination cursor for fetching the next page of results.|
|workflowUrl|query|string|false|Filter by workflow URL (exact match). Must start with http:// or https://.|
|workflowRunId|query|string|false|Filter by specific workflow run ID..|
|workflowCreatedAt|query|integer(int64)|false|Filter by workflow creation timestamp in milliseconds (Unix timestamp).|
|workflowRuns|query|string|false|Filter by multiple workflow runs. Provide a comma-separated list of `workflowRunId@workflowCreatedAt` pairs to query specific runs in a single request.<br><br>Example: `workflowRuns=ID1@TS1,ID2@TS2`<br><br>When this parameter is provided, all other filters are ignored.<br>|
|state|query|string|false|Filter by workflow or step state. Common states include:<br><br>\| Value          \| Description                                                    \|<br>\| -------------- \| -------------------------------------------------------------- \|<br>\| `RUN_STARTED`  \| The workflow has started to run and currently in progress.     \|<br>\| `RUN_SUCCESS`  \| The workflow run has completed succesfully.                    \|<br>\| `RUN_FAILED`   \| Some errors has occured and workflow failed after all retries. \|<br>\| `RUN_CANCELED` \| The workflow run has canceled upon user request.               \|<br>\| `STEP_SUCCESS` \| The step succesfully fnished.               \|<br>\| `STEP_RETRY` \| The step is being retried.               \|<br>\| `STEP_FAILED` \| The step is failed.               \|<br>\| `STEP_PROGRESS` \| The step is in progress.                \|<br>\| `STEP_CANCELED` \| The step is cancelled manually.               \|<br>|
|fromDate|query|integer(int64)|false|Filter events from this date onwards in milliseconds (Unix timestamp). Inclusive.|
|toDate|query|integer(int64)|false|Filter events up to this date in milliseconds (Unix timestamp). Inclusive.|
|count|query|integer|false|Maximum number of results to return per page.<br>- Event mode: Max 1000 (default 1000)<br>- Run mode (groupBy=workflowRunId): Max 10 (default 10)<br>|
|trimBody|query|integer|false|Trim request/response bodies to this many bytes. Use -1 to exclude bodies entirely.<br>Useful for reducing response size when bodies are large.<br>|
|label|query|[string]|false|Filter workflow run by label. Supports multi-value filtering. You can pass multiple values to match workflow runs with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>|
|flowControlKey|query|string|false|Filter workflow run by the flow control key assigned by the user on trigger.<br>|
|callerIp|query|string|false|Filter workflow run by the callerIp that started to workflow run.<br>|

> Example responses

> 200 Response

```json
{
  "cursor": "string",
  "runs": [
    {
      "workflowRunId": "string",
      "workflowUrl": "string",
      "workflowState": "string",
      "workflowRunCreatedAt": 0,
      "workflowRunCompletedAt": 0,
      "workflowRunCallerIp": "string",
      "steps": [
        {
          "steps": [
            {
              "stepId": 0,
              "stepName": "string",
              "stepType": "string",
              "callType": "string",
              "messageId": "string",
              "state": "string",
              "createdAt": 0,
              "out": "string",
              "callUrl": "string",
              "callMethod": "string",
              "callBody": "string",
              "callHeaders": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "callResponseStatus": 0,
              "callResponseBody": "string",
              "callResponseHeaders": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "waitEventId": "string",
              "waitTimeout": true,
              "invokedWorkflowRunId": "string",
              "invokedWorkflowUrl": "string",
              "retries": 0,
              "nextDeliveryTime": 0
            }
          ],
          "type": "parallel"
        }
      ],
      "workflowRunResponse": "string",
      "invoker": {
        "workflowRunId": "string",
        "workflowUrl": "string",
        "workflowRunCreatedAt": 0
      },
      "failureFunction": {
        "messageId": "string",
        "url": "string",
        "state": "string",
        "dlqId": "string",
        "failHeaders": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "failStatus": 0,
        "failResponse": "string",
        "responseBody": "string",
        "responseHeaders": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "responseStatus": 0,
        "maxRetries": 0
      },
      "dlqId": "string",
      "label": "string",
      "labels": [
        "string"
      ],
      "flowControlKey": "string"
    }
  ]
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

<h3 id="list-workflow-run-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow logs retrieved successfully|Inline|
|400|Bad Request|Bad Request - Invalid parameters (e.g., invalid cursor, state, or groupBy value)|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests - Rate limit exceeded|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="list-workflow-run-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|Pagination cursor for the next page. Empty if no more results.|
|runs|[[WorkflowRun](#schemaworkflowrun)]|false|none|Array of complete workflow runs with all steps and metadata.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="upstash-workflow-rest-api-dlq">DLQ</h1>

## List Failed Workflow Runs

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/workflows/dlq`

List and paginate through all failed workflow runs currently in the DLQ.

Failed workflows end up in the DLQ after exhausting all retry attempts. You can filter,
paginate, and inspect these failures to understand what went wrong and decide whether to
resume, restart, or delete them.


<h3 id="list-failed-workflow-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Pagination cursor. If provided, returns the next page of results.|
|count|query|integer|false|The maximum number of failed workflow runs to return per page.|
|fromDate|query|integer(int64)|false|Filter by starting date in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter by ending date in milliseconds (Unix timestamp). This is inclusive.|
|workflowUrl|query|[string]|false|Filter by workflow URL. Supports multiple values.|
|workflowRunId|query|string|false|Filter by workflow run ID.|
|workflowCreatedAt|query|integer(int64)|false|Filter by workflow creation timestamp in milliseconds (Unix timestamp).|
|label|query|[string]|false|Filter by label assigned to the workflow run. Supports multiple values. You can pass multiple values to match workflow runs with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|failureFunctionState|query|[string]|false|Filter by failure function state. Supports multiple values.<br><br> \| State \| Description \|<br>\|--------\|--------------\|<br>\| CALLBACK_INPROGRESS \| The failure function is in progress. \|<br>\| CALLBACK_SUCCESS \| The failure function run successfully. \|<br>\| CALLBACK_FAIL \| The failure function failed to run. \|<br>\| CALLBACK_CANCELED \| The failure function was manually canceled \|<br>|
|callerIp|query|[string]|false|Filter by IP address of the publisher. Supports multiple values.|
|flowControlKey|query|[string]|false|Filter by Flow Control Key. Supports multiple values.|

> Example responses

> 200 Response

```json
{
  "cursor": "string",
  "messages": [
    {
      "dlqId": "string",
      "workflowUrl": "string",
      "workflowRunId": "string",
      "workflowCreatedAt": 0,
      "url": "string",
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
      "createdAt": 0,
      "failureCallback": "string",
      "callerIP": "string",
      "label": "string",
      "labels": [
        "string"
      ],
      "flowControlKey": "string",
      "failureFunctionState": "string",
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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="list-failed-workflow-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of failed workflow runs|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="list-failed-workflow-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|false|none|Pagination cursor for the next page. Empty if no more results.|
|messages|[[WorkflowDLQMessage](#schemaworkflowdlqmessage)]|false|none|Array of failed workflow messages.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Delete Failed Workflow Runs

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/workflows/dlq`

Delete multiple failed workflow runs from the DLQ.

When a workflow run fails, it is moved to the DLQ. You can manually remove a failed workflow run from the DLQ using this endpoint. This is useful for cleaning up failed runs that you no longer wish to retry or analyze.

You can either specify specific DLQ IDs to delete, or use filters to delete matching workflows.
When using filters without DLQ IDs, the operation supports pagination via cursor.


<h3 id="bulk-delete-failed-workflow-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqIds|query|[string]|false|List of specific DLQ IDs to delete. If provided, other filters are ignored.|
|cursor|query|string|false|Pagination cursor for deleting in batches.|
|count|query|integer|false|Maximum number of workflows to delete per request.|
|fromDate|query|integer(int64)|false|Filter by starting date in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter by ending date in milliseconds (Unix timestamp). This is inclusive.|
|workflowUrl|query|[string]|false|Filter by workflow URL. Supports multiple values.|
|workflowRunId|query|string|false|Filter by workflow run ID.|
|workflowCreatedAt|query|integer(int64)|false|Filter by workflow creation timestamp in milliseconds (Unix timestamp).|
|label|query|[string]|false|Filter by label assigned to the workflow run. Supports multiple values. You can pass multiple values to match workflow runs with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|failureFunctionState|query|[string]|false|Filter by failure function state. Supports multiple values.<br><br>\| State \| Description \|<br>\|--------\|--------------\|<br>\| CALLBACK_INPROGRESS \| The failure function is in progress. \|<br>\| CALLBACK_SUCCESS \| The failure function run successfully. \|<br>\| CALLBACK_FAIL \| The failure function failed to run. \|<br>\| CALLBACK_CANCELED \| The failure function was manually canceled \|<br>|
|callerIp|query|[string]|false|Filter by IP address of the publisher. Supports multiple values.|
|flowControlKey|query|[string]|false|Filter by Flow Control Key. Supports multiple values.|

> Example responses

> 200 Response

```json
{
  "deleted": 0,
  "cursor": "string"
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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="bulk-delete-failed-workflow-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflows deleted successfully|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="bulk-delete-failed-workflow-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|integer(int64)|false|none|The number of workflow runs that were deleted.|
|cursor|string|false|none|Pagination cursor for the next batch. Only present when using filters without DLQ IDs.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Get Failed Workflow Run

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/workflows/dlq/{dlqId}`

Get details of a specific failed workflow run from the DLQ.


<h3 id="get-failed-workflow-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the failed workflow run.|

> Example responses

> 200 Response

```json
{
  "dlqId": "string",
  "workflowUrl": "string",
  "workflowRunId": "string",
  "workflowCreatedAt": 0,
  "url": "string",
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
  "createdAt": 0,
  "failureCallback": "string",
  "callerIP": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string",
  "failureFunctionState": "string",
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

> 404 Response

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

<h3 id="get-failed-workflow-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Failed workflow run details|[WorkflowDLQMessage](#schemaworkflowdlqmessage)|
|400|Bad Request|Bad Request - Invalid DLQ ID|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|DLQ message not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Delete Failed Workflow Run

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/workflows/dlq/{dlqId}`

Delete a specific failed workflow run from the DLQ.

Use this endpoint to remove a workflow from the DLQ after you have addressed the issue
or determined that the workflow should not be retried.


<h3 id="delete-failed-workflow-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the failed workflow run to delete.|

> Example responses

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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="delete-failed-workflow-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow deleted successfully|None|
|400|Bad Request|Bad Request - Invalid DLQ ID|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|DLQ message not found|None|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Resume Workflow from DLQ

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/resume/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/workflows/dlq/resume/{dlqId}`

Resume a failed workflow run from the DLQ at the step where it failed, without re-running completed steps.

<h3 id="resume-workflow-from-dlq-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the workflow run to resume.|
|Upstash-Retries|header|integer|false|Override the number of retries for the remaining workflow steps.|
|Upstash-Delay|header|string|false|Override the delay before executing the next workflow step. Format is `<value><unit>` (e.g., "10s", "5m").|
|Upstash-Retry-Delay|header|string|false|Override the retry delay expression for the remaining workflow steps.|
|Upstash-Flow-Control-Key|header|string|false|Override the flow control key for the remaining workflow steps.|
|Upstash-Flow-Control-Value|header|string|false|Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.|
|Upstash-Label|header|string|false|Override the label(s) for the remaining workflow steps.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Failure-Callback|header|string|false|Override the failure callback URL for the remaining workflow steps.|

> Example responses

> 200 Response

```json
{
  "workflowRunId": "string",
  "workflowCreatedAt": 0
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

> 404 Response

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

<h3 id="resume-workflow-from-dlq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow resumed successfully|Inline|
|400|Bad Request|Bad Request - Invalid DLQ ID, not a workflow message, or workflow doesn't support resume|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|DLQ message not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="resume-workflow-from-dlq-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRunId|string|false|none|The ID of the resumed workflow run (a new ID is generated for the resumed run).|
|workflowCreatedAt|integer(int64)|false|none|The timestamp when the resumed workflow run was created (Unix timestamp in milliseconds).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Resume Workflows from DLQ

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/resume \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/workflows/dlq/resume`

When a workflow run fails, it's automatically moved to the DLQ (Dead Letter Queue) where it can be analyzed and resumed. 
  The resume feature allows you to continue a failed workflow run from exactly where it failed, without re-executing successfully completed steps.

  This is particularly useful for long-running workflows where you don't want to lose progress from successful steps when a single step fails.

  When a workflow is resumed, it continues execution from the last failed step. A new workflow run ID is generated,
  but the workflow maintains the state and results from previously completed steps.

  <Note>
    You can make changes to the workflow code as long as these changes come after the failed steps. 
    However, making changes before the failed step will break the code and is not allowed.

    For more details, check out [Handle workflow route code changes](/workflow/howto/changes) page.
  </Note>


<h3 id="bulk-resume-workflows-from-dlq-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqIds|query|[string]|false|List of specific DLQ IDs to resume. If provided, other filters are ignored.|
|cursor|query|string|false|Pagination cursor for resuming workflows in batches.|
|count|query|integer|false|Maximum number of workflows to resume. If not provided, all matching workflows will be resumed.|
|fromDate|query|integer(int64)|false|Filter workflows by starting date, in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter workflows by ending date, in milliseconds (Unix timestamp). This is inclusive.|
|workflowUrl|query|[string]|false|Filter workflows by workflow URL. Supports multiple values.|
|workflowRunId|query|string|false|Filter workflows by workflow run ID.|
|workflowCreatedAt|query|integer(int64)|false|Filter workflows by creation timestamp in milliseconds (Unix timestamp).|
|label|query|[string]|false|Filter workflows by label. Supports multiple values. You can pass multiple values to match workflows with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|failureFunctionState|query|[string]|false|Filter workflows by failure function state. Supports multiple values.<br><br>\| State \| Description \|<br>\|--------\|--------------\|<br>\| CALLBACK_INPROGRESS \| The failure function is in progress. \|<br>\| CALLBACK_SUCCESS \| The failure function run successfully. \|<br>\| CALLBACK_FAIL \| The failure function failed to run. \|<br>\| CALLBACK_CANCELED \| The failure function was manually canceled \|<br>|
|callerIp|query|[string]|false|Filter workflows by IP address of the publisher. Supports multiple values.|
|flowControlKey|query|[string]|false|Filter workflows by Flow Control Key. Supports multiple values.|
|Upstash-Retries|header|integer|false|Override the number of retries for the remaining workflow steps.|
|Upstash-Delay|header|string|false|Override the delay before executing the next workflow step. Format is `<value><unit>` (e.g., "10s", "5m").|
|Upstash-Retry-Delay|header|string|false|Override the retry delay expression for the remaining workflow steps.|
|Upstash-Flow-Control-Key|header|string|false|Override the flow control key for the remaining workflow steps.|
|Upstash-Flow-Control-Value|header|string|false|Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.|
|Upstash-Label|header|string|false|Override the label(s) for the remaining workflow steps.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Failure-Callback|header|string|false|Override the failure callback URL for the remaining workflow steps.|

> Example responses

> 200 Response

```json
{
  "workflowRuns": [
    {
      "workflowRunId": "string",
      "workflowCreatedAt": 0
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

> 401 Response

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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="bulk-resume-workflows-from-dlq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflows resumed successfully|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Some DLQ messages were not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="bulk-resume-workflows-from-dlq-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRuns|[object]|false|none|Array of resumed workflow runs.|
|» workflowRunId|string|false|none|The ID of the resumed workflow run (a new ID is generated for each resumed run).|
|» workflowCreatedAt|integer(int64)|false|none|The timestamp when the resumed workflow run was created (Unix timestamp in milliseconds).|
|cursor|string|false|none|Pagination cursor to use in subsequent requests. If empty, all matching workflows have been processed.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Restart Workflow from DLQ

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/restart/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/workflows/dlq/restart/{dlqId}`

Restart a failed workflow run from the DLQ. The workflow will start from the beginning.

Unlike resume, which continues from where the workflow failed, restart executes the entire workflow
from the first step. A new workflow run ID is generated and all steps will be executed again.


<h3 id="restart-workflow-from-dlq-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the workflow run to restart.|
|Upstash-Retries|header|integer|false|Override the number of retries for the workflow steps.|
|Upstash-Delay|header|string|false|Override the delay before executing the workflow. Format is `<value><unit>` (e.g., "10s", "5m").|
|Upstash-Retry-Delay|header|string|false|Override the retry delay expression for the workflow steps.|
|Upstash-Flow-Control-Key|header|string|false|Override the flow control key for the workflow.|
|Upstash-Flow-Control-Value|header|string|false|Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.|
|Upstash-Label|header|string|false|Override the label(s) for the workflow.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Failure-Callback|header|string|false|Override the failure callback URL for the workflow.|

> Example responses

> 200 Response

```json
{
  "workflowRunId": "string",
  "workflowCreatedAt": 0
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

> 404 Response

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

<h3 id="restart-workflow-from-dlq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow restarted successfully|Inline|
|400|Bad Request|Bad Request - Invalid DLQ ID, not a workflow message, or workflow doesn't support restart|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|DLQ message not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="restart-workflow-from-dlq-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRunId|string|false|none|The ID of the restarted workflow run (a new ID is generated for the restarted run).|
|workflowCreatedAt|integer(int64)|false|none|The timestamp when the restarted workflow run was created (Unix timestamp in milliseconds).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Bulk Restart Workflows from DLQ

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/workflows/dlq/restart`

Restart multiple failed workflow runs from the DLQ. Each workflow will start from the beginning.

Unlike resume, which continues from where workflows failed, restart executes the entire workflows
from the first step. New workflow run IDs are generated and all steps will be executed again.

A maximum of 50 workflow runs can be restarted per request. If more runs are available, a cursor is returned, which can be used in subsequent requests to continue the operation. When no cursor is returned, all entries have been processed.
Each restarted workflow run is assigned a new random Run ID.


<h3 id="bulk-restart-workflows-from-dlq-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqIds|query|[string]|false|List of specific DLQ IDs to restart. If provided, other filters are ignored.|
|cursor|query|string|false|Pagination cursor for restarting workflows in batches.|
|count|query|integer|false|Maximum number of workflows to restart. If not provided, all matching workflows will be restarted.|
|fromDate|query|integer(int64)|false|Filter workflows by starting date, in milliseconds (Unix timestamp). This is inclusive.|
|toDate|query|integer(int64)|false|Filter workflows by ending date, in milliseconds (Unix timestamp). This is inclusive.|
|workflowUrl|query|[string]|false|Filter workflows by workflow URL. Supports multiple values.|
|workflowRunId|query|string|false|Filter workflows by workflow run ID.|
|workflowCreatedAt|query|integer(int64)|false|Filter workflows by creation timestamp in milliseconds (Unix timestamp).|
|label|query|[string]|false|Filter workflows by label. Supports multiple values. You can pass multiple values to match workflows with any of the given labels (OR logic).<br><br>Examples:<br>- `label=my_label`<br>- `label=label_1&label=label_2`<br>- `label=label_1,label_2`<br>|
|failureFunctionState|query|[string]|false|Filter workflows by failure function state. Supports multiple values.<br><br>\| State \| Description \|<br>\|--------\|--------------\|<br>\| CALLBACK_INPROGRESS \| The failure function is in progress. \|<br>\| CALLBACK_SUCCESS \| The failure function run successfully. \|<br>\| CALLBACK_FAIL \| The failure function failed to run. \|<br>\| CALLBACK_CANCELED \| The failure function was manually canceled \|<br>|
|callerIp|query|[string]|false|Filter workflows by IP address of the publisher. Supports multiple values.|
|flowControlKey|query|[string]|false|Filter workflows by Flow Control Key. Supports multiple values.|
|Upstash-Retries|header|integer|false|Override the number of retries for the workflow steps.|
|Upstash-Delay|header|string|false|Override the delay before executing the workflows. Format is `<value><unit>` (e.g., "10s", "5m").|
|Upstash-Retry-Delay|header|string|false|Override the retry delay expression for the workflow steps.|
|Upstash-Flow-Control-Key|header|string|false|Override the flow control key for the workflows.|
|Upstash-Flow-Control-Value|header|string|false|Override the flow control configuration in the format `parallelism=<value>, rate=<value>, period=<value>`.|
|Upstash-Label|header|string|false|Override the label(s) for the workflows.<br><br>You can assign multiple labels by providing a comma-separated list.<br><br>Example: `label_1,label_2`<br>|
|Upstash-Failure-Callback|header|string|false|Override the failure callback URL for the workflows.|

> Example responses

> 200 Response

```json
{
  "workflowRuns": [
    {
      "workflowRunId": "string",
      "workflowCreatedAt": 0
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

> 401 Response

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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="bulk-restart-workflows-from-dlq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflows restarted successfully|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Some DLQ messages were not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="bulk-restart-workflows-from-dlq-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRuns|[object]|false|none|Array of restarted workflow runs.|
|» workflowRunId|string|false|none|The ID of the restarted workflow run (a new ID is generated for each restarted run).|
|» workflowCreatedAt|integer(int64)|false|none|The timestamp when the restarted workflow run was created (Unix timestamp in milliseconds).|
|cursor|string|false|none|Pagination cursor to use in subsequent requests. If empty, all matching workflows have been processed.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Retry Failure Callback

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/callback/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/workflows/dlq/callback/{dlqId}`

If the failure callback for a workflow run has failed, you can use this endpoint to manually trigger the failure callback again. 
This is useful for ensuring that your system is notified of workflow failures even if the original callback attempt did not succeed.

The state of the failure callback for each workflow run is included in the DLQ message response as failureCallbackInfo.state. 
You can filter for all workflow runs with a failed failure callback by using the failureCallbackState filter when listing workflow runs in the DLQ with the `/v2/workflows/dlq` endpoint.


<h3 id="retry-failure-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the failed workflow run whose failure callback should be retried.|

> Example responses

> 200 Response

```json
{
  "workflowRunId": "string",
  "workflowCreatedAt": 0
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

> 404 Response

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

<h3 id="retry-failure-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Failure callback retried successfully|Inline|
|400|Bad Request|Bad Request. Workflow doesn't have a failed callback, callback is already in-progress, succeeded, or was canceled|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|DLQ message not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="retry-failure-callback-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRunId|string|false|none|The ID of the workflow run.|
|workflowCreatedAt|integer(int64)|false|none|The timestamp when the workflow run was created (Unix timestamp in milliseconds).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Cancel In-Progress Failure Callback

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/workflows/dlq/callback/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/workflows/dlq/callback/{dlqId}`

Cancel an in-progress failure callback for a failed workflow.

When you retry a failed failure callback using the POST endpoint, it enters an in-progress state.
This endpoint allows you to cancel that in-progress callback before it completes.

The callback must be in an in-progress state. If there's no in-progress callback,
the request will fail with a 400 error.


<h3 id="cancel-in-progress-failure-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dlqId|path|string|true|The DLQ ID of the workflow run whose in-progress failure callback should be canceled.|

> Example responses

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

> 404 Response

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

<h3 id="cancel-in-progress-failure-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Failure callback canceled successfully|None|
|400|Bad Request|Bad Request - No in-progress failure callback to cancel, or callback information is invalid|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Failure callback not found or message not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="upstash-workflow-rest-api-flow-control">Flow Control</h1>

## List Flow Control Keys

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/flowControl \
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
    "waitlistSize": 0
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
curl https://qstash-eu-central-1.upstash.io/v2/flowControl/string \
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
  "waitlistSize": 0
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
curl https://qstash-eu-central-1.upstash.io/v2/flowControl/string/pause \
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
curl https://qstash-eu-central-1.upstash.io/v2/flowControl/string/resume \
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
curl https://qstash-eu-central-1.upstash.io/v2/flowControl/string/pin \
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
curl https://qstash-eu-central-1.upstash.io/v2/flowControl/string/unpin \
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
curl https://qstash-eu-central-1.upstash.io/v2/flowControl/string/resetRate \
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
curl https://qstash-eu-central-1.upstash.io/v2/globalParallelism \
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

## Get Flow Control Key

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/keys/rotate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/keys/rotate`

Get details of a specific Flow Control key.

Flow Control keys are used to manage concurrency and rate limiting for workflow steps.
This endpoint returns the current waitlist size for the specified flow control key,
which indicates how many workflow steps are currently waiting due to flow control constraints.


<h3 id="get-flow-control-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flowControlKey|path|string|true|The Flow Control key to retrieve.|

> Example responses

> 200 Response

```json
{
  "flowControlKey": "string",
  "waitlistSize": 0
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

> 404 Response

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

<h3 id="get-flow-control-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Flow control key details|[FlowControlKey](#schemaflowcontrolkey)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Flow Control key not found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

<h1 id="upstash-workflow-rest-api-signing-keys">Signing Keys</h1>

## Get Signing Keys

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/keys \
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
curl https://qstash-eu-central-1.upstash.io/v2/keys/rotate \
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

<h1 id="upstash-workflow-rest-api-notify">Notify</h1>

## Notify Event

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/notify/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/notify/{eventId}`

Notify an event to all waiters listening for that event ID.

This endpoint broadcasts an event to all active waiters that are waiting for the specified event.
Each waiting workflow step receives the event data and continues execution.

**Important:** This is an "unsafe notify" operation - if there are no active waiters when the
notification is sent, the event is lost and will not be delivered later. For guaranteed delivery
within a specific workflow run, use the `/v2/notify/{workflowRunId}/{eventId}` endpoint instead.


> Body parameter

```json
{}
```

<h3 id="notify-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|The event ID that waiters are listening for.|
|body|body|object|false|The event data to send to all waiters. This will be the request payload for waiting workflow steps.|

> Example responses

> 201 Response

```json
[
  {
    "waiter": {
      "url": "string",
      "headers": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "deadline": 0,
      "timeoutBody": "string",
      "timeoutUrl": "string",
      "timeoutHeaders": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    },
    "messageId": "string",
    "deduplicated": true,
    "error": "string",
    "workflowRunId": "string",
    "workflowCreatedAt": 0
  }
]
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

<h3 id="notify-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Event notification sent successfully|Inline|
|400|Bad Request|Bad Request - Invalid event ID|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|429|Too Many Requests|Rate Limit Exceeded|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="notify-event-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotifyResponse](#schemanotifyresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## Notify Workflow Run Event

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/notify/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/notify/{workflowRunId}/{eventId}`

Notify an event to a specific workflow run's waiters.

This endpoint sends an event notification to waiters within a specific workflow run.
Unlike the general notify endpoint, this uses a "safe notify" mechanism that guarantees
delivery even if no waiter is currently active.

**Safe Notify Behavior:**
- If a waiter is currently active, it receives the notification immediately
- If no waiter is active, the notification is saved in the database
- When a waiter becomes active later, it will consume the saved notification
- This ensures events are never lost due to timing issues


> Body parameter

```json
{}
```

<h3 id="notify-workflow-run-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowRunId|path|string|true|The workflow run ID to notify.|
|eventId|path|string|true|The event ID that waiters are listening for.|
|body|body|object|false|The event data to send to the waiter. This will be the request payload for the waiting workflow step.|

> Example responses

> 201 Response

```json
{
  "waiter": {
    "url": "string",
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "deadline": 0,
    "timeoutBody": "string",
    "timeoutUrl": "string",
    "timeoutHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "messageId": "string",
  "deduplicated": true,
  "error": "string",
  "workflowRunId": "string",
  "workflowCreatedAt": 0
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

<h3 id="notify-workflow-run-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Event notification sent or saved successfully|[NotifyResponse](#schemanotifyresponse)|
|400|Bad Request|Bad Request - Invalid workflow run ID or event ID|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|429|Too Many Requests|Rate Limit Exceeded|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth, bearerAuthQuery
</aside>

## List Waiters

> Code samples

```bash
curl https://qstash-eu-central-1.upstash.io/v2/waiters/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/waiters/{eventId}`

List all active waiters for a specific event ID.

Returns information about all workflow runs that are currently waiting for the specified event.


<h3 id="list-waiters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|The event ID to list waiters for.|

> Example responses

> 200 Response

```json
[
  {
    "url": "string",
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "deadline": 0,
    "timeoutBody": "string",
    "timeoutUrl": "string",
    "timeoutHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  }
]
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

> 500 Response

```json
{
  "error": "string"
}
```

<h3 id="list-waiters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of active waiters|Inline|
|400|Bad Request|Bad Request - Invalid event ID|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

<h3 id="list-waiters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Waiter](#schemawaiter)]|false|none|none|

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

<h2 id="tocS_FlowControlKey">FlowControlKey</h2>
<!-- backwards compatibility -->
<a id="schemaflowcontrolkey"></a>
<a id="schema_FlowControlKey"></a>
<a id="tocSflowcontrolkey"></a>
<a id="tocsflowcontrolkey"></a>

```json
{
  "flowControlKey": "string",
  "waitlistSize": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flowControlKey|string|false|none|The flow control key name|
|waitlistSize|integer|false|none|The number of messages waiting due to flow control configuration.|

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

<h2 id="tocS_WorkflowDLQMessage">WorkflowDLQMessage</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowdlqmessage"></a>
<a id="schema_WorkflowDLQMessage"></a>
<a id="tocSworkflowdlqmessage"></a>
<a id="tocsworkflowdlqmessage"></a>

```json
{
  "dlqId": "string",
  "workflowUrl": "string",
  "workflowRunId": "string",
  "workflowCreatedAt": 0,
  "url": "string",
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
  "createdAt": 0,
  "failureCallback": "string",
  "callerIP": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string",
  "failureFunctionState": "string",
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
|dlqId|string|false|none|The DLQ ID of the failed workflow message.|
|workflowUrl|string|false|none|The URL of the workflow.|
|workflowRunId|string|false|none|The ID of the workflow run.|
|workflowCreatedAt|integer(int64)|false|none|The timestamp when the workflow run was created (Unix timestamp in milliseconds).|
|url|string|false|none|The URL of the failed workflow step.|
|method|string|false|none|The HTTP method used for the workflow step.|
|header|object|false|none|The HTTP headers sent to the workflow step.|
|body|string|false|none|The body of the message if it is composed of utf8 chars only, empty otherwise.|
|bodyBase64|string|false|none|The base64 encoded body if the body contains a non-utf8 char only, empty otherwise.|
|maxRetries|integer|false|none|The number of retries that should be attempted in case of delivery failure.|
|createdAt|integer(int64)|false|none|The unix timestamp in milliseconds when the message was created.|
|failureCallback|string|false|none|The url where we send a callback to after the workflow fails.|
|callerIP|string|false|none|IP address of the publisher of this workflow.|
|label|string|false|none|**Deprecated.** The label assigned to the workflow run. Deprecated in favor of `labels`.|
|labels|[string]|false|none|The list of labels assigned to the workflow run.|
|flowControlKey|string|false|none|The flow control key used for rate limiting.|
|failureFunctionState|string|false|none|The state of the failure function if applicable.|
|responseStatus|integer|false|none|The HTTP status code received from the destination API.|
|responseHeader|object|false|none|The HTTP response headers received from the destination API.|
|responseBody|string|false|none|The body of the response if it is composed of utf8 chars only, empty otherwise.|
|responseBodyBase64|string|false|none|The base64 encoded body of the response if the body contains a non-utf8 char only, empty otherwise.|

<h2 id="tocS_Waiter">Waiter</h2>
<!-- backwards compatibility -->
<a id="schemawaiter"></a>
<a id="schema_Waiter"></a>
<a id="tocSwaiter"></a>
<a id="tocswaiter"></a>

```json
{
  "url": "string",
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "deadline": 0,
  "timeoutBody": "string",
  "timeoutUrl": "string",
  "timeoutHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL that is waiting for the event notification.|
|headers|object|false|none|The HTTP headers to send with the notification.|
|deadline|integer(int64)|false|none|The Unix timestamp in seconds when the wait operation times out.|
|timeoutBody|string(byte)|false|none|The body to send if the wait times out.|
|timeoutUrl|string|false|none|The URL to call if the wait times out.|
|timeoutHeaders|object|false|none|The HTTP headers to send with the timeout callback.|

<h2 id="tocS_NotifyResponse">NotifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotifyresponse"></a>
<a id="schema_NotifyResponse"></a>
<a id="tocSnotifyresponse"></a>
<a id="tocsnotifyresponse"></a>

```json
{
  "waiter": {
    "url": "string",
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "deadline": 0,
    "timeoutBody": "string",
    "timeoutUrl": "string",
    "timeoutHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    }
  },
  "messageId": "string",
  "deduplicated": true,
  "error": "string",
  "workflowRunId": "string",
  "workflowCreatedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waiter|[Waiter](#schemawaiter)|false|none|The waiter that was notified.|
|messageId|string|false|none|The ID of the notification message that was published.|
|deduplicated|boolean|false|none|Whether this notification was deduplicated.|
|error|string|false|none|Error message if the notification failed.|
|workflowRunId|string|false|none|The workflow run ID if the notification was sent within a workflow.|
|workflowCreatedAt|integer(int64)|false|none|The timestamp when the workflow run was created (Unix timestamp in milliseconds).|

<h2 id="tocS_WorkflowEvent">WorkflowEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowevent"></a>
<a id="schema_WorkflowEvent"></a>
<a id="tocSworkflowevent"></a>
<a id="tocsworkflowevent"></a>

```json
{
  "time": 0,
  "state": "string",
  "workflowRunId": "string",
  "workflowUrl": "string",
  "workflowCreatedAt": 0,
  "stepInfo": {
    "stepId": 0,
    "stepName": "string",
    "stepType": "string",
    "callType": "string",
    "messageId": "string",
    "state": "string",
    "createdAt": 0,
    "out": "string",
    "callUrl": "string",
    "callMethod": "string",
    "callBody": "string",
    "callHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "callResponseStatus": 0,
    "callResponseBody": "string",
    "callResponseHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "waitEventId": "string",
    "waitTimeout": true,
    "invokedWorkflowRunId": "string",
    "invokedWorkflowUrl": "string",
    "retries": 0,
    "nextDeliveryTime": 0
  },
  "nextDeliveryTime": 0,
  "error": "string",
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
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "invokerWorkflowRunId": "string",
  "invokerWorkflowUrl": "string",
  "invokerWorkflowCreatedAt": 0,
  "workflowRunResponse": "string",
  "dlqId": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "callerIp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|integer(int64)|false|none|The timestamp of the event (Unix timestamp in milliseconds).|
|state|string|false|none|The state of the workflow or step (e.g., RUN_STARTED, STEP_SUCCESS, RUN_FAILED).|
|workflowRunId|string|false|none|The ID of the workflow run.|
|workflowUrl|string|false|none|The URL of the workflow.|
|workflowCreatedAt|integer(int64)|false|none|The timestamp when the workflow run was created (Unix timestamp in milliseconds).|
|stepInfo|[StepInfo](#schemastepinfo)|false|none|none|
|nextDeliveryTime|integer(int64)|false|none|The next scheduled delivery time for a retrying step (Unix timestamp in milliseconds).|
|error|string|false|none|Error message if the state is error.|
|responseStatus|integer|false|none|HTTP status code of the response for error states.|
|responseBody|string|false|none|Response body for error states.|
|responseHeaders|object|false|none|Response headers for error states.|
|headers|object|false|none|The headers of the message.|
|invokerWorkflowRunId|string|false|none|The run ID of the workflow that started this workflow (only in RUN_STARTED).|
|invokerWorkflowUrl|string|false|none|The URL of the workflow that started this workflow (only in RUN_STARTED).|
|invokerWorkflowCreatedAt|integer(int64)|false|none|The creation timestamp of the invoker workflow (only in RUN_STARTED).|
|workflowRunResponse|string|false|none|The response returned by the workflow run (only in RUN_SUCCESS).|
|dlqId|string|false|none|The DLQ ID if the workflow run failed (only in RUN_FAILED).|
|label|string|false|none|**Deprecated.** Label of the workflow run. Deprecated in favor of `labels`.|
|labels|[string]|false|none|List of labels assigned to the workflow run.|
|callerIp|string|false|none|IP address of the client who submitted the workflow.|

<h2 id="tocS_StepInfo">StepInfo</h2>
<!-- backwards compatibility -->
<a id="schemastepinfo"></a>
<a id="schema_StepInfo"></a>
<a id="tocSstepinfo"></a>
<a id="tocsstepinfo"></a>

```json
{
  "stepId": 0,
  "stepName": "string",
  "stepType": "string",
  "callType": "string",
  "messageId": "string",
  "state": "string",
  "createdAt": 0,
  "out": "string",
  "callUrl": "string",
  "callMethod": "string",
  "callBody": "string",
  "callHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "callResponseStatus": 0,
  "callResponseBody": "string",
  "callResponseHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "waitEventId": "string",
  "waitTimeout": true,
  "invokedWorkflowRunId": "string",
  "invokedWorkflowUrl": "string",
  "retries": 0,
  "nextDeliveryTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stepId|integer(int64)|false|none|The unique identifier for this step.|
|stepName|string|false|none|The name of the step.|
|stepType|string|false|none|The type of step (e.g., call, wait, sleep, invoke).|
|callType|string|false|none|The call type (e.g., step, parallelPlan, parallelResult).|
|messageId|string|false|none|The message ID for this step.|
|state|string|false|none|The state of the step (STEP_SUCCESS, STEP_RETRY, STEP_FAILED, STEP_PROGRESS, STEP_CANCELED).|
|createdAt|integer(int64)|false|none|When the step was created (Unix timestamp in milliseconds).|
|out|string|false|none|The output/result of the step.|
|callUrl|string|false|none|The URL called in this step.|
|callMethod|string|false|none|The HTTP method used.|
|callBody|string|false|none|The request body sent.|
|callHeaders|object|false|none|The request headers sent.|
|callResponseStatus|integer(int64)|false|none|The HTTP status code received.|
|callResponseBody|string|false|none|The response body received.|
|callResponseHeaders|object|false|none|The response headers received.|
|waitEventId|string|false|none|The event ID being waited for (wait steps only).|
|waitTimeout|boolean|false|none|Whether the wait timed out.|
|invokedWorkflowRunId|string|false|none|The run ID of the invoked workflow (invoke steps only).|
|invokedWorkflowUrl|string|false|none|The URL of the invoked workflow.|
|retries|integer|false|none|Maximum number of retries configured.|
|nextDeliveryTime|integer(int64)|false|none|Next scheduled retry time (Unix timestamp in milliseconds).|

<h2 id="tocS_GroupedSteps">GroupedSteps</h2>
<!-- backwards compatibility -->
<a id="schemagroupedsteps"></a>
<a id="schema_GroupedSteps"></a>
<a id="tocSgroupedsteps"></a>
<a id="tocsgroupedsteps"></a>

```json
{
  "steps": [
    {
      "stepId": 0,
      "stepName": "string",
      "stepType": "string",
      "callType": "string",
      "messageId": "string",
      "state": "string",
      "createdAt": 0,
      "out": "string",
      "callUrl": "string",
      "callMethod": "string",
      "callBody": "string",
      "callHeaders": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "callResponseStatus": 0,
      "callResponseBody": "string",
      "callResponseHeaders": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "waitEventId": "string",
      "waitTimeout": true,
      "invokedWorkflowRunId": "string",
      "invokedWorkflowUrl": "string",
      "retries": 0,
      "nextDeliveryTime": 0
    }
  ],
  "type": "parallel"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|steps|[[StepInfo](#schemastepinfo)]|false|none|Array of steps in this group.|
|type|string|false|none|The type of grouping (parallel, sequential, or next).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|parallel|
|type|sequential|
|type|next|

<h2 id="tocS_InvokerContext">InvokerContext</h2>
<!-- backwards compatibility -->
<a id="schemainvokercontext"></a>
<a id="schema_InvokerContext"></a>
<a id="tocSinvokercontext"></a>
<a id="tocsinvokercontext"></a>

```json
{
  "workflowRunId": "string",
  "workflowUrl": "string",
  "workflowRunCreatedAt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRunId|string|false|none|The workflow run ID of the invoker.|
|workflowUrl|string|false|none|The workflow URL of the invoker.|
|workflowRunCreatedAt|integer(int64)|false|none|The creation timestamp of the invoker workflow run.|

<h2 id="tocS_FailureFunction">FailureFunction</h2>
<!-- backwards compatibility -->
<a id="schemafailurefunction"></a>
<a id="schema_FailureFunction"></a>
<a id="tocSfailurefunction"></a>
<a id="tocsfailurefunction"></a>

```json
{
  "messageId": "string",
  "url": "string",
  "state": "string",
  "dlqId": "string",
  "failHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "failStatus": 0,
  "failResponse": "string",
  "responseBody": "string",
  "responseHeaders": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "responseStatus": 0,
  "maxRetries": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|false|none|The message ID of the failure callback.|
|url|string|false|none|The URL of the failure callback.|
|state|string|false|none|The state of the failure callback.|
|dlqId|string|false|none|The DLQ ID of the failure callback if it failed.|
|failHeaders|object|false|none|The headers from the failed workflow step.|
|failStatus|integer|false|none|The status code from the failed workflow step.|
|failResponse|string|false|none|The response body from the failed workflow step.|
|responseBody|string|false|none|The response body from the failure callback attempt.|
|responseHeaders|object|false|none|The response headers from the failure callback attempt.|
|responseStatus|integer|false|none|The response status from the failure callback attempt.|
|maxRetries|integer|false|none|Maximum number of retries configured for the failure callback.|

<h2 id="tocS_WorkflowRun">WorkflowRun</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowrun"></a>
<a id="schema_WorkflowRun"></a>
<a id="tocSworkflowrun"></a>
<a id="tocsworkflowrun"></a>

```json
{
  "workflowRunId": "string",
  "workflowUrl": "string",
  "workflowState": "string",
  "workflowRunCreatedAt": 0,
  "workflowRunCompletedAt": 0,
  "workflowRunCallerIp": "string",
  "steps": [
    {
      "steps": [
        {
          "stepId": 0,
          "stepName": "string",
          "stepType": "string",
          "callType": "string",
          "messageId": "string",
          "state": "string",
          "createdAt": 0,
          "out": "string",
          "callUrl": "string",
          "callMethod": "string",
          "callBody": "string",
          "callHeaders": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "callResponseStatus": 0,
          "callResponseBody": "string",
          "callResponseHeaders": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "waitEventId": "string",
          "waitTimeout": true,
          "invokedWorkflowRunId": "string",
          "invokedWorkflowUrl": "string",
          "retries": 0,
          "nextDeliveryTime": 0
        }
      ],
      "type": "parallel"
    }
  ],
  "workflowRunResponse": "string",
  "invoker": {
    "workflowRunId": "string",
    "workflowUrl": "string",
    "workflowRunCreatedAt": 0
  },
  "failureFunction": {
    "messageId": "string",
    "url": "string",
    "state": "string",
    "dlqId": "string",
    "failHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "failStatus": 0,
    "failResponse": "string",
    "responseBody": "string",
    "responseHeaders": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "responseStatus": 0,
    "maxRetries": 0
  },
  "dlqId": "string",
  "label": "string",
  "labels": [
    "string"
  ],
  "flowControlKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowRunId|string|false|none|The unique identifier for this workflow run.|
|workflowUrl|string|false|none|The URL of the workflow.|
|workflowState|string|false|none|The current state of the workflow run <br><br>\| Value          \| Description                                                    \|<br>  \| -------------- \| -------------------------------------------------------------- \|<br>  \| `RUN_STARTED`  \| The workflow has started to run and currently in progress.     \|<br>  \| `RUN_SUCCESS`  \| The workflow run has completed succesfully.                    \|<br>  \| `RUN_FAILED`   \| Some errors has occured and workflow failed after all retries. \|<br>  \| `RUN_CANCELED` \| The workflow run has canceled upon user request.               \|<br>|
|workflowRunCreatedAt|integer(int64)|false|none|When the workflow run was created (Unix timestamp in milliseconds).|
|workflowRunCompletedAt|integer(int64)|false|none|When the workflow run completed (Unix timestamp in milliseconds).|
|workflowRunCallerIp|string|false|none|IP address of the client who triggered the workflow.|
|steps|[[GroupedSteps](#schemagroupedsteps)]|false|none|The workflow steps grouped by execution pattern.|
|workflowRunResponse|string|false|none|The response returned by the workflow run.|
|invoker|[InvokerContext](#schemainvokercontext)|false|none|Information about the workflow that invoked this one.|
|failureFunction|[FailureFunction](#schemafailurefunction)|false|none|Information about the failure callback if configured.|
|dlqId|string|false|none|The DLQ ID if the workflow run failed.|
|label|string|false|none|**Deprecated.** Label assigned to the workflow run. Deprecated in favor of `labels`.|
|labels|[string]|false|none|List of labels assigned to the workflow run.|
|flowControlKey|string|false|none|Flow Control Key assigned to the workflow run.|

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
    "workflowUrl": [
      "https://example.com/api/workflow"
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
|total|integer(int64)|false|none|The number of in-progress workflow runs that matched the filter when the bulk action was created.|
|processed|integer(int64)|false|none|The number of workflow runs processed by the bulk action so far.|
|createdAt|integer(int64)|false|none|The creation time of the bulk action, in milliseconds (Unix timestamp).|
|completedAt|integer(int64)|false|none|The completion time of the bulk action, in milliseconds (Unix timestamp). Only present once the bulk action has finished.|
|filter|object|false|none|The filter the bulk action was created with. Keys are the filter parameter names of the bulk cancel request, such as `workflowUrl`, `label` or `fromDate`, and values are the given values.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|cancel|
|state|IN_PROGRESS|
|state|FINISHED|
