<h1 id="comfyui-api">ComfyUI API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for ComfyUI - A powerful and modular UI for Stable Diffusion.

This API allows you to interact with ComfyUI programmatically, including:
- Retrieving prompt information
- Retrieving node information

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a> - Default ComfyUI server

License: <a href="https://github.com/Comfy-Org/ComfyUI/blob/master/LICENSE">GNU General Public License v3.0</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header. API key authentication. Keys are prefixed with 'comfyui-' and can be
generated from user account settings. Example: 'comfyui-abc123...'

- HTTP Authentication, scheme: bearer Firebase JWT token authentication. Obtain a token by authenticating
with Firebase and pass it in the Authorization header.

* API Key (CookieAuth)
    - Parameter Name: **session**, in: cookie. Session cookie authentication. Set automatically after successful
login via the /api/auth/session endpoint.

<h1 id="comfyui-api-workflow">workflow</h1>

Workflow execution and management

## Get the default workflow

<a id="opIdgetDefaultWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/default_workflow \
  -H 'Accept: application/json'
```

`GET /api/default_workflow`

Returns the workflow the frontend loads when no other workflow is open.

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-the-default-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default workflow JSON|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get available subgraph blueprints

<a id="opIdgetGlobalSubgraphs"></a>

> Code samples

```bash
curl http://localhost:8188/api/global_subgraphs \
  -H 'Accept: application/json'
```

`GET /api/global_subgraphs`

Returns a list of globally available subgraph blueprints.
These are pre-built workflow components that can be used as nodes.
The data field contains a promise that resolves to the full subgraph JSON.


> Example responses

> 200 Response

```json
{
  "property1": {
    "data": "string",
    "info": {
      "node_pack": "string"
    },
    "name": "string",
    "source": "string"
  },
  "property2": {
    "data": "string",
    "info": {
      "node_pack": "string"
    },
    "name": "string",
    "source": "string"
  }
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-available-subgraph-blueprints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Map of subgraph IDs to their metadata|Inline|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-available-subgraph-blueprints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[GlobalSubgraphInfo](#schemaglobalsubgraphinfo)|false|none|Metadata for a global subgraph blueprint (without full data)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific subgraph blueprint

<a id="opIdgetGlobalSubgraph"></a>

> Code samples

```bash
curl http://localhost:8188/api/global_subgraphs/string \
  -H 'Accept: application/json'
```

`GET /api/global_subgraphs/{id}`

Returns the full data for a specific subgraph blueprint by ID

<h3 id="get-a-specific-subgraph-blueprint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the subgraph blueprint|

> Example responses

> 200 Response

```json
{
  "data": "string",
  "info": {
    "node_pack": "string"
  },
  "name": "string",
  "source": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-a-specific-subgraph-blueprint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Full subgraph data|[GlobalSubgraphData](#schemaglobalsubgraphdata)|
|404|Not Found|Subgraph not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Manage execution history

<a id="opIdmanageHistory"></a>

> Code samples

```bash
curl http://localhost:8188/api/history \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "clear": true,
    "delete": [
      "string"
    ]
  }'
```

`POST /api/history`

<aside class="warning">
This operation is deprecated
</aside>

**Deprecated.** Superseded by the job-management endpoints under
`/api/jobs`. Planned for removal no earlier than a future major
release; sunset timeline TBD.

Clear all history for the authenticated user or delete specific job IDs.
Supports clearing all history or deleting specific job IDs.


> Body parameter

```json
{
  "clear": true,
  "delete": [
    "string"
  ]
}
```

<h3 id="manage-execution-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HistoryManageRequest](#schemahistorymanagerequest)|true|none|
|» clear|body|boolean|false|If true, clear all history for the authenticated user|
|» delete|body|[string]|false|Array of job IDs to delete from history|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="manage-execution-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - History management operation completed|None|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get execution history (v2)

<a id="opIdgetHistory"></a>

> Code samples

```bash
curl http://localhost:8188/api/history_v2 \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/history_v2`

<aside class="warning">
This operation is deprecated
</aside>

**Deprecated.** Superseded by `GET /api/jobs`, which returns the same
execution records in a paginated, filterable format. Planned for removal
no earlier than a future major release; sunset timeline TBD.

Retrieve execution history for the authenticated user with pagination support.
Returns a lightweight history format with filtered prompt data (workflow removed from extra_pnginfo).


<h3 id="get-execution-history-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_items|query|integer|false|Maximum number of items to return|
|offset|query|integer|false|Starting position (default 0)|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "create_time": 0,
      "meta": {},
      "outputs": {},
      "prompt": {
        "extra_data": {},
        "priority": 0,
        "prompt_id": "string"
      },
      "prompt_id": "string",
      "status": {},
      "workflow_id": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-execution-history-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Execution history retrieved|[HistoryResponse](#schemahistoryresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get history for specific prompt

<a id="opIdgetHistoryForPrompt"></a>

> Code samples

```bash
curl http://localhost:8188/api/history_v2/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/history_v2/{prompt_id}`

<aside class="warning">
This operation is deprecated
</aside>

**Deprecated.** Superseded by `GET /api/jobs/{job_id}`, which returns
the same execution record. Planned for removal no earlier than a future
major release; sunset timeline TBD.

Retrieve detailed execution history for a specific prompt ID.
Returns full history data including complete prompt information.


<h3 id="get-history-for-specific-prompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_id|path|string|true|The prompt ID to retrieve history for|

> Example responses

> 200 Response

```json
{
  "property1": {
    "meta": {},
    "outputs": {},
    "prompt": {
      "extra_data": {},
      "outputs_to_execute": [
        "string"
      ],
      "priority": 0,
      "prompt": {},
      "prompt_id": "string"
    },
    "status": {}
  },
  "property2": {
    "meta": {},
    "outputs": {},
    "prompt": {
      "extra_data": {},
      "outputs_to_execute": [
        "string"
      ],
      "priority": 0,
      "prompt": {},
      "prompt_id": "string"
    },
    "status": {}
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-history-for-specific-prompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - History for prompt retrieved|[HistoryDetailResponse](#schemahistorydetailresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Prompt not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## List jobs with pagination and filtering

<a id="opIdlistJobs"></a>

> Code samples

```bash
curl http://localhost:8188/api/jobs \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/jobs`

Retrieve a paginated list of jobs for the authenticated user.
Returns lightweight job data optimized for list views.
Workflow and full outputs are excluded to reduce payload size.


<h3 id="list-jobs-with-pagination-and-filtering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Filter by one or more statuses (comma-separated). If not provided, returns all jobs.|
|workflow_id|query|string|false|Filter by workflow ID (exact match)|
|output_type|query|string|false|Filter by output media type (only applies to completed jobs with outputs)|
|sort_by|query|string|false|Field to sort by (create_time = when job was submitted, execution_time = how long workflow took to run)|
|sort_order|query|string|false|Sort direction (asc = ascending, desc = descending)|
|after|query|string|false|Opaque cursor for keyset pagination. Pass the `next_cursor` value<br>from a previous response to fetch the next page.<br>Cursor pagination is supported only when `sort_by=create_time`<br>(default). If `sort_by=execution_time`, `after` is ignored and<br>offset/limit pagination is used.<br>Cursors are opaque base64url payloads — clients should treat them<br>as strings and not parse the contents.<br>|
|offset|query|integer|false|**Deprecated.** Pagination offset (0-based). Deprecated: prefer cursor-based pagination via `after`.|
|limit|query|integer|false|Maximum items per page (1-1000)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|output_type|image|
|output_type|video|
|output_type|audio|
|output_type|3d|
|sort_by|create_time|
|sort_by|execution_time|
|sort_order|asc|
|sort_order|desc|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "create_time": 0,
      "execution_end_time": 0,
      "execution_error": {
        "current_inputs": {},
        "current_outputs": {},
        "exception_message": "string",
        "exception_type": "string",
        "node_id": "string",
        "node_type": "string",
        "traceback": [
          "string"
        ]
      },
      "execution_start_time": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outputs_count": 0,
      "preview_output": {},
      "previewable_outputs_count": 0,
      "status": "pending",
      "workflow_id": "string"
    }
  ],
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="list-jobs-with-pagination-and-filtering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Jobs retrieved|[JobsListResponse](#schemajobslistresponse)|
|400|Bad Request|Bad request (e.g. malformed pagination cursor).|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get full job details

<a id="opIdgetJobDetail"></a>

> Code samples

```bash
curl http://localhost:8188/api/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/jobs/{job_id}`

Retrieve complete details for a specific job including workflow and outputs.
Used for detail views, workflow re-execution, and debugging.


<h3 id="get-full-job-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|Job identifier (UUID)|
|short_link|query|string|false|When present, each output item in the response receives a `short_url` field containing a short link for that asset. Omit this parameter (the default) to receive a response identical to the no-param baseline. The value selects the link's lifetime and auth model: use `ephemeral_tool_chain` for short-lived (≤5 minute) machine-to-machine handoffs — these are public bearer links where the link ID itself is the credential, so anyone holding the link can resolve it (intended for pasting into an agent/MCP tool chain); use `default` for durable (30 day) human-revisitable links, which are owner-gated and resolvable only by the authenticated owner. Links are always minted under the authenticated request owner's identity; the auth model is selected by the server and is never settable by the caller.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|short_link|ephemeral_tool_chain|
|short_link|default|

> Example responses

> 200 Response

```json
{
  "create_time": 0,
  "execution_end_time": 0,
  "execution_error": {
    "current_inputs": {},
    "current_outputs": {},
    "exception_message": "string",
    "exception_type": "string",
    "node_id": "string",
    "node_type": "string",
    "traceback": [
      "string"
    ]
  },
  "execution_meta": {},
  "execution_start_time": 0,
  "execution_status": {},
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outputs": {},
  "outputs_count": 0,
  "preview_output": {},
  "previewable_outputs_count": 0,
  "status": "pending",
  "update_time": 0,
  "user_id": "string",
  "workflow": {},
  "workflow_id": "string",
  "workflow_version_id": "string",
  "workspace_id": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-full-job-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Job details retrieved|[JobDetailResponse](#schemajobdetailresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - Job does not belong to user|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Job not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## List a job's output assets

<a id="opIdgetJobAssets"></a>

> Code samples

```bash
curl http://localhost:8188/api/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08/assets \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/jobs/{job_id}/assets`

Retrieve a paginated list of the assets produced by a specific job,
enriched with the per-output node context (`node_id`, `output_key`,
`output_index`) correlated from the job's execution outputs by content
hash. Unlike `GET /api/assets?job_ids={id}`, this endpoint is scoped to a
single job and carries node-level placement, making it suited to job
output views rather than the general asset browser. Returns an empty
`assets` array for jobs that produced no assets.


<h3 id="list-a-jobs-output-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|Job identifier (UUID)|
|limit|query|integer|false|Maximum number of assets to return (1-500)|
|offset|query|integer|false|Number of assets to skip for pagination|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "hash": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "mime_type": "string",
      "name": "string",
      "node_id": "string",
      "output_index": 0,
      "output_key": "string",
      "preview_url": "string",
      "size": 0
    }
  ],
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="list-a-jobs-output-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Job assets returned|[JobAssetsResponse](#schemajobassetsresponse)|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Job not found or does not belong to the user|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Cancel a job

<a id="opIdcancelJob"></a>

> Code samples

```bash
curl http://localhost:8188/api/jobs/497f6eca-6276-4993-bfeb-53cbbbba6f08/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /api/jobs/{job_id}/cancel`

Cancel a specific job for the authenticated user.

Idempotent: a job that is already in a terminal state (completed, failed,
cancelled) or already cancelling is treated as a successful no-op and
returns 200. Only truly missing or cross-user jobs return 404.


<h3 id="cancel-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|Job identifier (UUID)|

> Example responses

> 200 Response

```json
{
  "cancelled": true
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="cancel-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Cancel request accepted (or job was already terminal)|[JobCancelResponse](#schemajobcancelresponse)|
|400|Bad Request|Bad Request - job_id is not a valid UUID (emitted by request validation before the handler runs)|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Job not found for this user|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error - cancellation failed|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Cancel multiple jobs

<a id="opIdcancelJobs"></a>

> Code samples

```bash
curl http://localhost:8188/api/jobs/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "job_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /api/jobs/cancel`

Cancel one or more jobs for the authenticated user in a single request.

State-agnostic: cancels both pending and running jobs (both transition to
the cancelled state via the same mechanism as the single-job endpoint).

Idempotent per job: a job already in a terminal or cancelling state is a
no-op and simply will not appear in the returned `cancelled` list.

Fail-fast on unknown IDs: if any provided job ID does not exist for this
user, the request returns 404 and no jobs are cancelled. This surfaces
bad IDs to the caller rather than silently dropping them.

This is the canonical batch-cancel endpoint. The delete operation on
POST /api/queue is deprecated in favour of this.


> Body parameter

```json
{
  "job_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="cancel-multiple-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JobsCancelRequest](#schemajobscancelrequest)|true|none|
|» job_ids|body|[string(uuid)]|true|Job identifiers (UUIDs) to cancel.|

> Example responses

> 200 Response

```json
{
  "cancelled": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="cancel-multiple-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - cancel requests dispatched (or jobs were already terminal)|[JobsCancelResponse](#schemajobscancelresponse)|
|400|Bad Request|Bad Request - job_ids is missing, empty, exceeds the maximum count, or contains an invalid UUID|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|One or more job IDs not found for this user (no jobs cancelled)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error - cancellation failed|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get information about current prompt execution

<a id="opIdgetPromptInfo"></a>

> Code samples

```bash
curl http://localhost:8188/api/prompt \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/prompt`

Returns information about the current prompt in the execution queue

> Example responses

> 200 Response

```json
{
  "exec_info": {
    "queue_remaining": 0
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-information-about-current-prompt-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PromptInfo](#schemapromptinfo)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Submit a workflow for execution

<a id="opIdexecutePrompt"></a>

> Code samples

```bash
curl http://localhost:8188/api/prompt \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "extra_data": {},
    "front": true,
    "number": 0,
    "partial_execution_targets": [
      "string"
    ],
    "prompt": {},
    "workflow_id": "string",
    "workflow_metadata": {
      "property1": "string",
      "property2": "string"
    },
    "workflow_version_id": "string"
  }'
```

`POST /api/prompt`

Submit a workflow to be executed by the backend.
The workflow is a JSON object describing the nodes and their connections.


> Body parameter

```json
{
  "extra_data": {},
  "front": true,
  "number": 0,
  "partial_execution_targets": [
    "string"
  ],
  "prompt": {},
  "workflow_id": "string",
  "workflow_metadata": {
    "property1": "string",
    "property2": "string"
  },
  "workflow_version_id": "string"
}
```

<h3 id="submit-a-workflow-for-execution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PromptRequest](#schemapromptrequest)|true|none|
|» extra_data|body|object|false|Extra data to be associated with the prompt|
|» front|body|boolean|false|If true, adds the prompt to the front of the queue|
|» number|body|number|false|Priority number for the queue (lower numbers have higher priority)|
|» partial_execution_targets|body|[string]|false|List of node names to execute|
|» prompt|body|object|true|The workflow graph to execute|
|» workflow_id|body|string|false|UUID identifying the cloud workflow entity to associate with this job|
|» workflow_metadata|body|object|false|Key/values echoed on the json websocket messages of this prompt that carry a `prompt_id`, so a client can tell which of its open workflows a message belongs to. Messages without a `prompt_id`, such as `status`, do not carry it, because a single socket serves every open workflow and such a message has no one owner. The server does not interpret the contents. Limited to 256 bytes serialised; a larger or non-object value is ignored. When this field is omitted, the server falls back to `{workflow_id: extra_data.extra_pnginfo.workflow.id}` if the submitted workflow carries an id, so a client that sends only the workflow gets the same messages. Note the `workflow_id` key a client typically sends here is the graph id from `extra_pnginfo.workflow.id`, which is not the same thing as the `workflow_id` field above.|
|» » **additionalProperties**|body|string|false|none|
|» workflow_version_id|body|string|false|UUID identifying the workflow version to associate with this job|

> Example responses

> 200 Response

```json
{
  "node_errors": {},
  "number": 0,
  "prompt_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{}
```

> 402 Response

```json
{}
```

> 403 Response

```json
{}
```

> 413 Response

```json
{}
```

> 429 Response

```json
{}
```

> 500 Response

```json
{}
```

> 503 Response

```json
{}
```

<h3 id="submit-a-workflow-for-execution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Prompt accepted|[PromptResponse](#schemapromptresponse)|
|400|Bad Request|Invalid prompt|[PromptErrorResponse](#schemaprompterrorresponse)|
|402|Payment Required|Payment required - Insufficient credits|[PromptErrorResponse](#schemaprompterrorresponse)|
|403|Forbidden|Workspace governance policy blocks one or more partner providers (error.type PARTNER_NODE_DISABLED; error.class_types lists the offending nodes, error.providers the disabled providers)|[PromptErrorResponse](#schemaprompterrorresponse)|
|413|Payload Too Large|Workflow JSON too large|[PromptErrorResponse](#schemaprompterrorresponse)|
|429|Too Many Requests|Retryable backpressure. Two distinct causes, disambiguated by the body's `error.type`, NOT by parsing `error.message`: `PAYMENT_REQUIRED` / `FREE_TIER_UNAVAILABLE` / `FREE_TIER_EXHAUSTED` / `PARTNER_NODE_PAYMENT_REQUIRED` (a billing gate - retrying without paying never succeeds), or `QUEUE_LIMIT` (this workspace's bounded job queue is full - retrying after some queued jobs complete will succeed).|[PromptErrorResponse](#schemaprompterrorresponse)|
|500|Internal Server Error|Internal server error|[PromptErrorResponse](#schemaprompterrorresponse)|
|503|Service Unavailable|Service unavailable|[PromptErrorResponse](#schemaprompterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get available workflow templates

<a id="opIdgetWorkflowTemplates"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflow_templates \
  -H 'Accept: application/json'
```

`GET /api/workflow_templates`

Returns available workflow templates

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-available-workflow-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="comfyui-api-node">node</h1>

Node information

## List custom node JS extensions

<a id="opIdgetExtensions"></a>

> Code samples

```bash
curl http://localhost:8188/api/extensions \
  -H 'Accept: application/json'
```

`GET /api/extensions`

Returns the list of custom node web extension JS files available for
loading by the ComfyUI frontend. Paths are relative to the web root
(e.g. `/extensions/VHS.core.js`).


> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-custom-node-js-extensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON array of extension file paths|Inline|

<h3 id="list-custom-node-js-extensions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get server feature flags

<a id="opIdgetFeatures"></a>

> Code samples

```bash
curl http://localhost:8188/api/features \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/features`

Returns the server's feature capabilities

> Example responses

> 200 Response

```json
{
  "deploy_to_cloud": true,
  "free_tier_balance": {
    "allowance": 0,
    "remaining": 0,
    "used": 0
  },
  "max_upload_size": 0,
  "supports_preview_metadata": true
}
```

<h3 id="get-server-feature-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-server-feature-flags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploy_to_cloud|boolean|false|none|Local ComfyUI only: whether the UI should offer Deploy to Cloud. True when the server is not --offline and this installation has ever had a prompt queued by a non-browser client (a persistent marker in the user directory). A discovery hint only: it grants nothing, and the /api/deploy/* routes do not check it. Not settable with --feature-flag.|
|free_tier_balance|object|false|none|Free-tier job allowance for an authenticated non-paid (FREE-tier) user in the rollout. Absent for paid users and unauthenticated requests. Synthesized from config before a grant row exists so a brand-new user still sees their full allowance.|
|» allowance|integer|true|none|Total free jobs granted for the current period|
|» remaining|integer|true|none|Free jobs remaining (allowance - used, floored at 0)|
|» used|integer|true|none|Free jobs consumed so far|
|max_upload_size|integer|false|none|Maximum upload size in bytes|
|supports_preview_metadata|boolean|false|none|Whether the server supports preview metadata|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Short-lived private cache to deduplicate rapid-fire calls from the frontend|
|200|Vary|string||Cache key includes auth headers so anonymous and authenticated responses are stored separately|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
ApiKeyAuth, BearerAuth, CookieAuth
</aside>

## Get node replacement mappings

<a id="opIdgetNodeReplacements"></a>

> Code samples

```bash
curl http://localhost:8188/api/node_replacements \
  -H 'Accept: application/json'
```

`GET /api/node_replacements`

Returns mappings of unsupported node class names to their cloud-installed replacements.
Used by the frontend to offer "Quick Fix" when a workflow contains missing nodes.


> Example responses

> 200 Response

```json
{}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-node-replacement-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Node replacement mappings|Inline|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all node information

<a id="opIdgetNodeInfo"></a>

> Code samples

```bash
curl http://localhost:8188/api/object_info \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/object_info`

Returns information about all available nodes

> Example responses

> 200 Response

```json
{
  "property1": {
    "api_node": true,
    "category": "string",
    "deprecated": true,
    "description": "string",
    "display_name": "string",
    "experimental": true,
    "input": {},
    "input_order": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "name": "string",
    "output": [
      "string"
    ],
    "output_is_list": [
      true
    ],
    "output_name": [
      "string"
    ],
    "output_node": true,
    "output_tooltips": [
      "string"
    ],
    "python_module": "string"
  },
  "property2": {
    "api_node": true,
    "category": "string",
    "deprecated": true,
    "description": "string",
    "display_name": "string",
    "experimental": true,
    "input": {},
    "input_order": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "name": "string",
    "output": [
      "string"
    ],
    "output_is_list": [
      true
    ],
    "output_name": [
      "string"
    ],
    "output_node": true,
    "output_tooltips": [
      "string"
    ],
    "python_module": "string"
  }
}
```

<h3 id="get-all-node-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-all-node-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NodeInfo](#schemanodeinfo)|false|none|Metadata describing a single ComfyUI node type and its inputs/outputs.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-file">file</h1>

File operations

## List user assets

<a id="opIdlistAssets"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/assets`

Retrieves a paginated list of assets belonging to the authenticated user.
Supports filtering by tags, name, metadata, and sorting options.


<h3 id="list-user-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_tags|query|[string]|false|**Deprecated.** Deprecated alias for `tags_all`, kept permanently for existing<br>callers. Filter assets that have ALL of these tags. Combining it<br>with `tags_all`, or exceeding 100 tags (counted after removing<br>empty values and duplicates), returns 400 `INVALID_TAG_FILTER`.<br>|
|exclude_tags|query|[string]|false|**Deprecated.** Deprecated alias for `tags_none`, kept permanently for existing<br>callers. Exclude assets that have ANY of these tags. Combining it<br>with `tags_none`, or exceeding 100 tags (counted after removing<br>empty values and duplicates), returns 400 `INVALID_TAG_FILTER`.<br>|
|tags_all|query|[string]|false|Filter assets that have ALL of these tags. Tag values are opaque<br>byte-strings compared exactly and case-sensitively; unknown tags<br>are not an error — they simply match nothing. Replaces the<br>deprecated `include_tags`. Sending both spellings, listing the<br>same tag here and in `tags_none`, or exceeding 100 tags per list<br>(counted after removing empty values and duplicates) returns 400<br>`INVALID_TAG_FILTER`.<br>|
|tags_any|query|[string]|false|Filter assets that have AT LEAST ONE of these tags. Combines with<br>`tags_all`/`tags_none` by intersection (`tags_none` always wins;<br>overlap with `tags_none` is allowed and leaves a dead term).<br>Supplying a positive tag filter (`tags_any`, `tags_all`, or<br>`include_tags`) replaces the default category filter that is<br>otherwise applied. Lists over 100 tags (counted after removing<br>empty values and duplicates) return 400 `INVALID_TAG_FILTER`.<br>|
|tags_none|query|[string]|false|Exclude assets that have ANY of these tags. Replaces the<br>deprecated `exclude_tags`. Sending both spellings, or exceeding<br>100 tags per list (counted after removing empty values and<br>duplicates), returns 400 `INVALID_TAG_FILTER`.<br>|
|name_contains|query|string|false|Filter assets where name contains this substring (case-insensitive)|
|limit|query|integer|false|Maximum number of assets to return (1-500)|
|offset|query|integer|false|Number of assets to skip for pagination|
|sort|query|string|false|Field to sort by|
|order|query|string|false|Sort order|
|include_public|query|boolean|false|Whether to include public/shared assets in results|
|hash|query|string|false|Filter assets by content hash, in the canonical `blake3:<hex>`<br>form. Matches regardless of which of this asset store's two<br>internal hash storage formats the matching row was written<br>under (the canonical form used by from-hash-created references,<br>or the raw `<hex>.<ext>`/bare `<hex>` storage key used by direct<br>uploads) — both represent the same content hash.<br>|
|after|query|string|false|Opaque cursor for keyset pagination. Pass the `next_cursor` value<br>from the previous response to fetch the next page. When provided,<br>`offset` is ignored. Cursor pagination is only supported with<br>`sort` values `created_at`, `updated_at`, `name`, or `size`;<br>requests combining `after` with other sort fields return 400.<br>The cursor must have been minted under the same `sort` value used<br>in the follow-up request.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|name|
|sort|created_at|
|sort|updated_at|
|sort|size|
|sort|last_access_time|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "display_name": "string",
      "hash": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "is_immutable": true,
      "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_access_time": "1970-01-01T00:00:00Z",
      "loader_path": "string",
      "metadata": {},
      "mime_type": "string",
      "name": "string",
      "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "preview_url": "http://example.com",
      "short_url": "string",
      "size": 0,
      "tags": [
        "string"
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "user_metadata": {}
    }
  ],
  "has_more": true,
  "next_cursor": "string",
  "total": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="list-user-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Assets returned|[ListAssetsResponse](#schemalistassetsresponse)|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Create a new asset

<a id="opIdcreateAsset"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -F 'file=@/path/to/file' \
  -F 'hash=string' \
  -F 'id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -F 'mime_type=string' \
  -F 'name=string' \
  -F 'preview_id=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -F 'tags=string' \
  -F 'user_metadata=string'
```

`POST /api/assets`

Creates a new asset from a direct file upload (multipart/form-data) with associated metadata.

If an asset with the same hash already exists, returns the existing asset.


> Body parameter

```yaml
file: string
hash: string
id: "497f6eca-6276-4993-bfeb-53cbbbba6f08"
mime_type: string
name: string
preview_id: "497f6eca-6276-4993-bfeb-53cbbbba6f08"
tags: string
user_metadata: string
```

<h3 id="create-a-new-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The asset file to upload|
|» hash|body|string|false|Content hash of the file.|
|» id|body|string(uuid)|false|Optional asset ID for idempotent creation. If provided and asset exists, returns existing asset.|
|» mime_type|body|string|false|MIME type of the asset (e.g., "image/png", "video/mp4")|
|» name|body|string|false|Display name for the asset|
|» preview_id|body|string(uuid)|false|Optional preview asset ID. If not provided, images will use their own ID as preview.|
|» tags|body|string|false|JSON-encoded array of freeform tag strings, e.g. '["models","checkpoint"]'. Common types include "models", "input", "output", and "temp", but any tag can be used in any order.|
|» user_metadata|body|string|false|Custom JSON metadata as a string|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {},
  "created_new": true
}
```

> 201 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {},
  "created_new": true
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 413 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 415 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="create-a-new-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset already existed for this user (deduplicated by content hash); the<br>existing asset is returned with created_new=false.<br>|[AssetCreated](#schemaassetcreated)|
|201|Created|Asset created successfully (created_new=true)|[AssetCreated](#schemaassetcreated)|
|400|Bad Request|Invalid request (bad file, invalid content type, etc.)|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|File too large|[ErrorResponse](#schemaerrorresponse)|
|415|Unsupported Media Type|Unsupported media type|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error (e.g., disallowed model_type tag)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get asset details

<a id="opIdgetAssetById"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/assets/{id}`

Retrieves detailed information about a specific asset

<h3 id="get-asset-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Asset ID|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {}
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-asset-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset details retrieved successfully|[Asset](#schemaasset)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Asset not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Update asset metadata

<a id="opIdupdateAsset"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "mime_type": "string",
    "name": "string",
    "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_metadata": {}
  }'
```

`PUT /api/assets/{id}`

Updates an asset's metadata. At least one field must be provided.
Only name, mime_type, preview_id, and user_metadata can be updated.
For tag management, use POST (add) and DELETE (remove) /api/assets/{id}/tags.


> Body parameter

```json
{
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_metadata": {}
}
```

<h3 id="update-asset-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Asset ID|
|body|body|object|true|none|
|» mime_type|body|string|false|Updated MIME type of the asset|
|» name|body|string|false|New display name for the asset|
|» preview_id|body|string(uuid)|false|Updated preview asset ID|
|» user_metadata|body|object|false|Updated custom metadata|

> Example responses

> 200 Response

```json
{
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "loader_path": "string",
  "mime_type": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {}
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="update-asset-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset updated successfully|[AssetUpdated](#schemaassetupdated)|
|400|Bad Request|Invalid request — no fields provided, or `preview_id` is the zero UUID<br>(`INVALID_PREVIEW_ID`).<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Asset not found — returned both when the asset being updated does<br>not exist and when `preview_id` does not reference an asset<br>accessible to the caller.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Delete asset

<a id="opIddeleteAsset"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /api/assets/{id}`

Deletes the asset record.

<h3 id="delete-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Asset ID|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="delete-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Asset record deleted successfully|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Asset not found|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Asset cannot be deleted because it is referenced by another resource, e.g. a workflow version (error code: ASSET_IN_USE)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get asset content

<a id="opIdgetAssetContent"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/string/content \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/assets/{id}/content`

Returns the binary content of an asset by ID.

The contract is the same across runtimes — "GET this path and you
receive the asset's bytes" — but the mechanism differs:
- **Local ComfyUI** streams the bytes directly (`200`,
  `application/octet-stream`).
- **Cloud** does not proxy large files; it responds `302` with a
  `Location` redirect to a short-lived signed storage URL. Clients that
  follow redirects (browsers, `fetch`/XHR, `<img>`/`<video>`) receive
  the bytes transparently.

Prefer this over the filename-addressed `/api/view` when you have an
asset ID.


<h3 id="get-asset-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Asset ID|
|disposition|query|string|false|Content-Disposition for the response: `attachment` (download) or<br>`inline` (render in browser). Defaults to `attachment`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|disposition|inline|
|disposition|attachment|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-asset-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset content stream (local runtime streams the bytes directly)|Inline|
|302|Found|Redirect to a signed storage URL (cloud runtime)|None|
|404|Not Found|Asset not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Cache-Control|string||Private caching directive scoped to the signed URL lifetime|
|302|Location|string||Short-lived signed URL to the asset content in storage|
|302|Vary|string||Partitions any cached redirect by auth credentials so a private redirect is not reused across users|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth, CookieAuth
</aside>

## Add tags to asset

<a id="opIdaddAssetTags"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "tags": [
      "string"
    ]
  }'
```

`POST /api/assets/{id}/tags`

Adds one or more tags to an existing asset

> Body parameter

```json
{
  "tags": [
    "string"
  ]
}
```

<h3 id="add-tags-to-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Asset ID|
|body|body|object|true|none|
|» tags|body|[string]|true|Tags to add to the asset|

> Example responses

> 200 Response

```json
{
  "added": [
    "string"
  ],
  "already_present": [
    "string"
  ],
  "not_present": [
    "string"
  ],
  "removed": [
    "string"
  ],
  "total_tags": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="add-tags-to-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags added successfully|[TagsModificationResponse](#schematagsmodificationresponse)|
|400|Bad Request|Invalid request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Asset not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error (e.g., reserved tag)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Remove tags from asset

<a id="opIdremoveAssetTags"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/497f6eca-6276-4993-bfeb-53cbbbba6f08/tags \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "tags": [
      "string"
    ]
  }'
```

`DELETE /api/assets/{id}/tags`

Removes one or more tags from an existing asset

> Body parameter

```json
{
  "tags": [
    "string"
  ]
}
```

<h3 id="remove-tags-from-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Asset ID|
|body|body|object|true|none|
|» tags|body|[string]|true|Tags to remove from the asset|

> Example responses

> 200 Response

```json
{
  "added": [
    "string"
  ],
  "already_present": [
    "string"
  ],
  "not_present": [
    "string"
  ],
  "removed": [
    "string"
  ],
  "total_tags": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="remove-tags-from-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags removed successfully|[TagsModificationResponse](#schematagsmodificationresponse)|
|400|Bad Request|Invalid request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Asset not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error (e.g., reserved tag)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Create asset reference from existing hash

<a id="opIdcreateAssetFromHash"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/from-hash \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "hash": "string",
    "mime_type": "string",
    "name": "string",
    "tags": [
      "string"
    ],
    "user_metadata": {}
  }'
```

`POST /api/assets/from-hash`

Creates a new asset reference using an existing asset's hash.
This avoids re-uploading the file content when the asset already exists in storage.
The user can provide their own metadata and tags for the reference.


> Body parameter

```json
{
  "hash": "string",
  "mime_type": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "user_metadata": {}
}
```

<h3 id="create-asset-reference-from-existing-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» hash|body|string|true|Blake3 content hash of the existing asset (blake3: prefix)|
|» mime_type|body|string|false|MIME type of the asset (e.g., "image/png", "video/mp4")|
|» name|body|string|false|Display name for the asset reference (optional)|
|» tags|body|[string]|true|Freeform tags for the asset. Common types include "models", "input", "output", and "temp", but any tag can be used in any order.|
|» user_metadata|body|object|false|Custom metadata for this asset reference|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {},
  "created_new": true
}
```

> 201 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {},
  "created_new": true
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="create-asset-reference-from-existing-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset reference already existed for this user (deduplicated by content<br>hash); the existing asset is returned with created_new=false.<br>|[AssetCreated](#schemaassetcreated)|
|201|Created|Asset reference created successfully (created_new=true)|[AssetCreated](#schemaassetcreated)|
|400|Bad Request|Invalid request (bad hash format, invalid tags, etc.)|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Source asset with given hash not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error (e.g., disallowed model_type tag)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Check if asset exists by hash

<a id="opIdcheckAssetByHash"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/hash/blake3%3Aa1b2c3d4e5f67890123456789012345678901234567890123456789012345678 \
  -X HEAD \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`HEAD /api/assets/hash/{hash}`

Checks if an asset exists in the system by its blake3 hash.
Returns 200 if the asset exists, 404 if it doesn't.


<h3 id="check-if-asset-exists-by-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|Blake3 hash of the asset in format 'blake3:hex_digest'|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="check-if-asset-exists-by-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Asset exists|None|
|400|Bad Request|Invalid hash format|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Asset not found|None|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get tag histogram for filtered assets

<a id="opIdgetAssetTagHistogram"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/tags/refine \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/assets/tags/refine`

Returns a histogram of tags appearing on assets matching the given filters.
Useful for refining asset searches by showing available tags and their counts.
Only returns tags with non-zero counts (tags that exist on matching assets).


<h3 id="get-tag-histogram-for-filtered-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_tags|query|[string]|false|**Deprecated.** Deprecated alias for `tags_all`, kept permanently for existing<br>callers. Filter assets that have ALL of these tags. The same<br>combination and list-size rules as on `/api/assets` apply<br>(400 `INVALID_TAG_FILTER`).<br>|
|exclude_tags|query|[string]|false|**Deprecated.** Deprecated alias for `tags_none`, kept permanently for existing<br>callers. Exclude assets that have ANY of these tags. The same<br>combination and list-size rules as on `/api/assets` apply<br>(400 `INVALID_TAG_FILTER`).<br>|
|tags_all|query|[string]|false|Filter assets that have ALL of these tags. Replaces the deprecated<br>`include_tags`. The same combination and list-size rules as on<br>`/api/assets` apply (400 `INVALID_TAG_FILTER`).<br>|
|tags_any|query|[string]|false|Filter assets that have AT LEAST ONE of these tags. Combines with<br>`tags_all`/`tags_none` by intersection (`tags_none` always wins).<br>The same combination and list-size rules as on `/api/assets` apply<br>(400 `INVALID_TAG_FILTER`).<br>|
|tags_none|query|[string]|false|Exclude assets that have ANY of these tags. Replaces the deprecated<br>`exclude_tags`. The same combination and list-size rules as on<br>`/api/assets` apply (400 `INVALID_TAG_FILTER`).<br>|
|name_contains|query|string|false|Filter assets where name contains this substring (case-insensitive)|
|limit|query|integer|false|Maximum number of tags to return (1-1000, default 100)|
|include_public|query|boolean|false|Whether to include public/shared assets in results|

> Example responses

> 200 Response

```json
{
  "tag_counts": {
    "checkpoint": 32,
    "lora": 193,
    "vae": 6
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-tag-histogram-for-filtered-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Tag histogram returned|[AssetTagHistogramResponse](#schemaassettaghistogramresponse)|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get available model folders

<a id="opIdgetModelFolders"></a>

> Code samples

```bash
curl http://localhost:8188/api/experiment/models \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/experiment/models`

Returns a list of model folders available in the system.
This is an experimental endpoint that replaces the legacy /models endpoint.
Each folder's name is the identifier to pass to /api/experiment/models/{folder}.
The folder vocabulary is resolved per request from the caller's identity: where the
model_type migration is active for that caller the names are model_type folder_names
(e.g. `ultralytics_bbox`), and a folder with no folder_name mapping is returned by its
directory path. An authenticated response can therefore differ from an anonymous one.


> Example responses

> 200 Response

```json
[
  {
    "folders": [
      "checkpoints"
    ],
    "name": "checkpoints"
  }
]
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-available-model-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - List of model folders|Inline|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-available-model-folders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ModelFolder](#schemamodelfolder)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get models in a specific folder

<a id="opIdgetModelsInFolder"></a>

> Code samples

```bash
curl http://localhost:8188/api/experiment/models/checkpoints \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/experiment/models/{folder}`

Returns a list of models available in the specified folder.
This is an experimental endpoint that provides enhanced model information.
Accepted folder identifiers are those returned by /api/experiment/models for the same
caller. That vocabulary is request-scoped, so list folders and fetch a folder's models
with the same credentials — a name obtained anonymously may not resolve when
authenticated, and vice versa.


<h3 id="get-models-in-a-specific-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|path|string|true|The folder name to list models from|

> Example responses

> 200 Response

```json
[
  {
    "name": "model.safetensors",
    "pathIndex": 0
  }
]
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-models-in-a-specific-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - List of models in the folder|Inline|
|404|Not Found|Folder not found or no models in folder|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-models-in-a-specific-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ModelFile](#schemamodelfile)]|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get related mask layer files

<a id="opIdgetMaskLayers"></a>

> Code samples

```bash
curl 'http://localhost:8188/api/files/mask-layers?filename=abc123def456.png' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/files/mask-layers`

Given a mask file (any of the 4 layers), returns all related mask layer files.
This is used by the mask editor to load the paint, mask, and painted layers
when reopening a previously edited mask.


<h3 id="get-related-mask-layer-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|query|string|true|Hash filename of any mask layer file|

> Example responses

> 200 Response

```json
{
  "mask": "string",
  "paint": "string",
  "painted": "string",
  "painted_masked": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-related-mask-layer-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Related mask layers returned|Inline|
|404|Not Found|File not found or not a mask file|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-related-mask-layer-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mask|string \| null|false|none|Filename of the mask layer|
|paint|string \| null|false|none|Filename of the paint strokes layer|
|painted|string \| null|false|none|Filename of the painted image layer|
|painted_masked|string \| null|false|none|Filename of the final composite layer|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## List all tags

<a id="opIdlistTags"></a>

> Code samples

```bash
curl http://localhost:8188/api/tags \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/tags`

Retrieves a list of all tags used across assets.
Includes usage counts and filtering options.


<h3 id="list-all-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prefix|query|string|false|Filter tags by prefix|
|limit|query|integer|false|Maximum number of tags to return (1-1000)|
|offset|query|integer|false|Number of tags to skip for pagination|
|order|query|string|false|Sort order for tags|
|include_zero|query|boolean|false|Include tags with zero usage count|
|include_public|query|boolean|false|Whether to include public/shared assets when counting tags|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|count_desc|
|order|name_asc|

> Example responses

> 200 Response

```json
{
  "has_more": true,
  "tags": [
    {
      "count": 0,
      "name": "string"
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="list-all-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags retrieved successfully|[ListTagsResponse](#schemalisttagsresponse)|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Upload an image file

<a id="opIduploadImage"></a>

> Code samples

```bash
curl http://localhost:8188/api/upload/image \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -F 'image=@/path/to/file' \
  -F 'overwrite=string' \
  -F 'subfolder=string' \
  -F 'type=string'
```

`POST /api/upload/image`

Upload an image file to cloud storage.

Image limits:
  - Maximum file size: 50 MB
  - Maximum width/height per edge: 16384 px
  - Maximum total pixel count: 64 megapixels (67108864 pixels)

Uploads that exceed any of these limits are rejected with HTTP 400.


> Body parameter

```yaml
image: string
overwrite: string
subfolder: string
type: string
```

<h3 id="upload-an-image-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» image|body|string(binary)|true|The image file to upload|
|» overwrite|body|string|false|Whether to overwrite existing file (true/false)|
|» subfolder|body|string|false|Optional subfolder path|
|» type|body|string|false|Upload type (defaults to "output")|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "subfolder": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="upload-an-image-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image uploaded successfully|Inline|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="upload-an-image-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Filename of the uploaded image|
|subfolder|string|false|none|Subfolder path where image was saved|
|type|string|false|none|Type of upload (e.g., "output")|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Upload a mask image

<a id="opIduploadMask"></a>

> Code samples

```bash
curl http://localhost:8188/api/upload/mask \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -F 'image=@/path/to/file' \
  -F 'original_ref=string'
```

`POST /api/upload/mask`

Upload a mask image to be applied to an existing image.

Image limits apply to both the uploaded mask and the referenced
original image:
  - Maximum file size: 50 MB
  - Maximum width/height per edge: 16384 px
  - Maximum total pixel count: 64 megapixels (67108864 pixels)

Uploads that exceed any of these limits are rejected with HTTP 400.


> Body parameter

```yaml
image: string
original_ref: string
```

<h3 id="upload-a-mask-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» image|body|string(binary)|true|The mask image file to upload|
|» original_ref|body|string|true|JSON string containing reference to the original image|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "subfolder": "string",
  "type": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="upload-a-mask-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mask uploaded successfully|Inline|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="upload-a-mask-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Filename of the uploaded mask|
|subfolder|string|false|none|Subfolder path where mask was saved|
|type|string|false|none|Type of upload (e.g., "output")|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Query VHS video metadata

<a id="opIdgetVhsQueryVideo"></a>

> Code samples

```bash
curl 'http://localhost:8188/api/vhs/queryvideo?filename=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/vhs/queryvideo`

VHS custom node endpoint that returns metadata about a video file
(frame count, fps, resolution, duration). Currently returns default
placeholder values; real ffprobe integration is a follow-up.


<h3 id="query-vhs-video-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|query|string|true|Name of the video file to query|

> Example responses

> 200 Response

```json
{
  "source": {
    "duration": 0,
    "fps": 0,
    "frames": 0,
    "size": [
      0,
      0
    ]
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="query-vhs-video-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Video metadata|Inline|
|400|Bad Request|Missing required query parameter. Produced by the oapi-codegen<br>wrapper via echo.NewHTTPError; the custom Echo HTTPErrorHandler<br>normalizes it to the standard ErrorResponse {code, message} shape<br>(BE-1178).<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<h3 id="query-vhs-video-metadata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|object|true|none|Source video metadata|
|» duration|number|true|none|Duration in seconds|
|» fps|number|true|none|Frames per second|
|» frames|integer|true|none|Total frame count|
|» size|[integer]|true|none|[width, height] in pixels|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth, CookieAuth
</aside>

## View a file

<a id="opIdviewFile"></a>

> Code samples

```bash
curl 'http://localhost:8188/api/view?filename=ComfyUI_00004_.png' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/view`

Retrieve and view a file from the ComfyUI file system.
This endpoint is typically used to view generated images or other output files.
Cookie auth is allowed on this endpoint because it's used by img/video tags in browsers.


<h3 id="view-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|query|string|true|Name of the file to view|
|subfolder|query|string|false|Subfolder path where the file is located|
|type|query|string|false|Type of file (e.g., output, input, temp)|
|fullpath|query|string|false|Full path to the file (used for temp files)|
|format|query|string|false|Format of the file|
|frame_rate|query|integer|false|Frame rate for video files|
|workflow|query|string|false|Workflow identifier|
|timestamp|query|integer|false|Timestamp parameter|
|channel|query|string|false|Image channel to extract from PNG images.<br>- 'rgb': Return only RGB channels (alpha set to fully opaque)<br>- 'a' or 'alpha': Return alpha channel as grayscale image<br>- If not specified, return original image unchanged via redirect<br>|
|res|query|integer|false|Maximum dimension (width or height) to resize the image to, preserving aspect ratio.<br>The image is fit within a res x res box. Returns a JPEG thumbnail.<br>Only applies to raster image files (PNG, JPEG, WebP, GIF).<br>|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="view-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - File content returned (used when channel or res parameter is present)|Inline|
|302|Found|Redirect to GCS signed URL|None|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|File not found or unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Cache-Control|string||Cache directive for the redirect response|
|302|Location|string||Signed URL to access the file in GCS|
|302|Vary|string||Headers that affect response caching|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth, CookieAuth
</aside>

<h1 id="comfyui-api-settings">settings</h1>

User settings management

## Get all user settings

<a id="opIdgetAllSettings"></a>

> Code samples

```bash
curl http://localhost:8188/api/settings \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/settings`

Returns all settings for the authenticated user

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-all-user-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Update multiple settings

<a id="opIdupdateMultipleSettings"></a>

> Code samples

```bash
curl http://localhost:8188/api/settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{}'
```

`POST /api/settings`

Update multiple settings (merge with existing)

> Body parameter

```json
{}
```

<h3 id="update-multiple-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="update-multiple-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Invalid request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get a specific setting by id

<a id="opIdgetSettingById"></a>

> Code samples

```bash
curl http://localhost:8188/api/settings/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/settings/{id}`

Returns a specific setting value by its id

<h3 id="get-a-specific-setting-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Setting id to retrieve|

> Example responses

> 200 Response

```json
{
  "value": null
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-a-specific-setting-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Setting not found|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get-a-specific-setting-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|The setting value|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Update a specific setting by id

<a id="opIdupdateSettingById"></a>

> Code samples

```bash
curl http://localhost:8188/api/settings/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d 'null'
```

`POST /api/settings/{id}`

Update a specific setting by its id

> Body parameter

```json
null
```

<h3 id="update-a-specific-setting-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Setting id to update|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "value": null
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="update-a-specific-setting-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Invalid request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<h3 id="update-a-specific-setting-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|The updated setting value|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-feedback">feedback</h1>

User feedback management

## Submit user feedback

<a id="opIdsubmitFeedback"></a>

> Code samples

```bash
curl http://localhost:8188/api/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "content": "string",
    "metadata": {},
    "rating": 1,
    "type": "missing_nodes"
  }'
```

`POST /api/feedback`

Submit feedback about the ComfyUI service

> Body parameter

```json
{
  "content": "string",
  "metadata": {},
  "rating": 1,
  "type": "missing_nodes"
}
```

<h3 id="submit-user-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FeedbackRequest](#schemafeedbackrequest)|true|none|
|» content|body|string|false|The feedback content or message|
|» metadata|body|object|false|Additional metadata about the feedback|
|» rating|body|integer|false|User's rating of ComfyUI Cloud experience (1-5 stars)|
|» type|body|string|true|Type of feedback being submitted|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|missing_nodes|
|» type|general|
|» type|missing_models|

> Example responses

> 201 Response

```json
{}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="submit-user-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Feedback submitted successfully|[FeedbackResponse](#schemafeedbackresponse)|
|400|Bad Request|Invalid request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-system">system</h1>

System operations and monitoring

## Get system statistics

<a id="opIdgetSystemStats"></a>

> Code samples

```bash
curl http://localhost:8188/api/system_stats \
  -H 'Accept: application/json'
```

`GET /api/system_stats`

Returns system statistics including ComfyUI version, device info, and system resources

> Example responses

> 200 Response

```json
{
  "devices": [
    {
      "name": "string",
      "type": "string",
      "vram_free": 0,
      "vram_total": 0
    }
  ],
  "system": {
    "argv": [
      "string"
    ],
    "cloud_version": "string",
    "comfyui_frontend_version": "string",
    "comfyui_version": "string",
    "deploy_environment": "string",
    "embedded_python": true,
    "os": "string",
    "python_version": "string",
    "pytorch_version": "string",
    "ram_free": 0,
    "ram_total": 0,
    "workflow_templates_version": "string"
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-system-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SystemStatsResponse](#schemasystemstatsresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Health probe for Kubernetes readiness/liveness

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl http://localhost:8188/health
```

`GET /health`

Returns `200 OK` if the database is reachable and dynamic config has
loaded, otherwise `503 Service Unavailable`. Used by the GKE ingress
for health checks. Response body is plain text for probe simplicity.


<h3 id="health-probe-for-kubernetes-readinessliveness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service is healthy|Inline|
|503|Service Unavailable|Service is unhealthy|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="comfyui-api-user">user</h1>

User information and management

## Get current user information

<a id="opIdgetUser"></a>

> Code samples

```bash
curl http://localhost:8188/api/user \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/user`

Returns information about the currently authenticated user

> Example responses

> 200 Response

```json
{
  "id": "string",
  "status": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-current-user-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UserResponse](#schemauserresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## List user data files

<a id="opIdgetUserdata"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/userdata`

Returns a list of user data files in the specified directory, optionally recursively and with full metadata.

<h3 id="list-user-data-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dir|query|string|false|The directory to list files from.|
|recurse|query|boolean|false|Whether to list files recursively.|
|split|query|boolean|false|Whether to split file information by type.|
|full_info|query|boolean|false|Whether to return full file metadata.|

> Example responses

> 200 Response

```json
[
  {
    "modified": 0,
    "path": "string",
    "size": 0
  }
]
```

<h3 id="list-user-data-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of user data files.|[GetUserDataResponseFull](#schemagetuserdataresponsefull)|
|400|Bad Request|Bad request (e.g., invalid filename).|Inline|
|401|Unauthorized|Unauthorized.|Inline|
|404|Not Found|File not found or invalid path.|Inline|
|500|Internal Server Error|General error|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get user data file

<a id="opIdgetUserdataFile"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata/string \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/userdata/{file}`

Returns the requested user data file if it exists.

<h3 id="get-user-data-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|path|string|true|The filename of the user data to retrieve.|

<h3 id="get-user-data-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the file.|Inline|
|400|Bad Request|Bad request (e.g., invalid filename).|Inline|
|401|Unauthorized|Unauthorized.|Inline|
|404|Not Found|File not found or invalid path.|Inline|
|500|Internal Server Error|General error|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Upload or update a user data file

<a id="opIdpostUserdataFile"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata/string \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`POST /api/userdata/{file}`

Upload a file to a user's data directory. Optional query parameters allow
control over overwrite behavior and response detail.


<h3 id="upload-or-update-a-user-data-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|path|string|true|The target file path (URL encoded if necessary).|
|overwrite|query|string|false|If "false", prevents overwriting existing files. Defaults to "true".|
|full_info|query|string|false|If "true", returns detailed file info; if "false", returns only the relative path.|
|body|body|string(binary)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|overwrite|true|
|overwrite|false|
|full_info|true|
|full_info|false|

> Example responses

> 200 Response

```json
{
  "modified": 0,
  "path": "string",
  "size": 0
}
```

<h3 id="upload-or-update-a-user-data-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File uploaded successfully.|[UserDataResponseFull](#schemauserdataresponsefull)|
|400|Bad Request|Missing or invalid 'file' parameter.|Inline|
|401|Unauthorized|Unauthorized.|Inline|
|403|Forbidden|The requested path is not allowed.|Inline|
|409|Conflict|File already exists and overwrite is set to false.|Inline|
|500|Internal Server Error|General error|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Delete a user data file

<a id="opIddeleteUserdataFile"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata/string \
  -X DELETE \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /api/userdata/{file}`

Delete a user data file from the database. The file parameter should be
the relative path within the user's data directory.


<h3 id="delete-a-user-data-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|path|string|true|The file path to delete (URL encoded if necessary).|

<h3 id="delete-a-user-data-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|File deleted successfully (No Content).|None|
|401|Unauthorized|Unauthorized.|Inline|
|404|Not Found|File not found.|Inline|
|500|Internal Server Error|Internal server error.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Move or rename a user data file

<a id="opIdmoveUserdataFile"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata/string/move/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /api/userdata/{file}/move/{dest}`

Move or rename a file within a user's data directory, with options for
controlling overwrite behavior and response format.


<h3 id="move-or-rename-a-user-data-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|path|string|true|The source file path (URL encoded if necessary).|
|dest|path|string|true|The destination file path (URL encoded if necessary).|
|overwrite|query|string|false|If "false", prevents overwriting existing files. Defaults to "true".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|overwrite|true|
|overwrite|false|

> Example responses

> 200 Response

```json
{
  "modified": 0,
  "path": "string",
  "size": 0
}
```

<h3 id="move-or-rename-a-user-data-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File moved successfully.|[UserDataResponseFull](#schemauserdataresponsefull)|
|400|Bad Request|Missing or invalid parameters.|Inline|
|401|Unauthorized|Unauthorized.|Inline|
|404|Not Found|Source file not found.|Inline|
|409|Conflict|Destination file already exists and overwrite is set to false.|Inline|
|500|Internal Server Error|General error|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## ComfyUI userdata storage info

<a id="opIdgetUsersInfo"></a>

> Code samples

```bash
curl http://localhost:8188/api/users \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/users`

ComfyUI legacy users endpoint. Returns information about how user
data is stored. In cloud this is always server-managed, so callers
receive a constant response indicating server-side storage.


> Example responses

> 200 Response

```json
{
  "migrated": true,
  "storage": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="comfyui-userdata-storage-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Userdata storage information|Inline|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|

<h3 id="comfyui-userdata-storage-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrated|boolean|true|none|Whether user data has been migrated (always true in cloud)|
|storage|string|true|none|Where user data is stored (always "server" in cloud)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-task">task</h1>

Background task management

## List background tasks

<a id="opIdlistTasks"></a>

> Code samples

```bash
curl http://localhost:8188/api/tasks \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/tasks`

Retrieve a paginated list of background tasks for the authenticated user.
Supports filtering by task type, status, and creation time.


<h3 id="list-background-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_name|query|string|false|Filter by task type name (exact match)|
|idempotency_key|query|string|false|Filter by idempotency key (exact match). For best performance, specify task_name as well.|
|status|query|string|false|Filter by one or more statuses (comma-separated)|
|created_after|query|string(date-time)|false|Filter tasks created after this timestamp (RFC3339 format)|
|created_before|query|string(date-time)|false|Filter tasks created before this timestamp (RFC3339 format)|
|sort_order|query|string|false|Sort direction (asc = ascending, desc = descending by create_time)|
|offset|query|integer|false|Pagination offset (0-based)|
|limit|query|integer|false|Maximum items per page (1-100)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|asc|
|sort_order|desc|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  },
  "tasks": [
    {
      "completed_at": "1970-01-01T00:00:00Z",
      "create_time": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "started_at": "1970-01-01T00:00:00Z",
      "status": "created",
      "task_name": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="list-background-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Tasks retrieved|[TasksListResponse](#schemataskslistresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error - Invalid filter values|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get task details

<a id="opIdgetTask"></a>

> Code samples

```bash
curl http://localhost:8188/api/tasks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/tasks/{task_id}`

Retrieve full details for a specific background task.


<h3 id="get-task-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string(uuid)|true|Task identifier (UUID)|

> Example responses

> 200 Response

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "create_time": "1970-01-01T00:00:00Z",
  "error_message": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "idempotency_key": "string",
  "payload": {},
  "result": {},
  "started_at": "1970-01-01T00:00:00Z",
  "status": "created",
  "task_name": "string",
  "update_time": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-task-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Task details retrieved|[TaskResponse](#schemataskresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Task not found (also returned for ownership failures to avoid leaking task existence)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-billing">billing</h1>

Workspace billing and subscription management

## Get Churnkey HMAC auth credentials

<a id="opIdgetChurnkeyAuth"></a>

> Code samples

```bash
curl http://localhost:8188/api/billing/churnkey/auth \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/billing/churnkey/auth`

Returns the Stripe customer identifier and a server-signed
HMAC-SHA256 of the customer ID, used to launch the Churnkey-hosted
cancellation flow embed.


> Example responses

> 200 Response

```json
{
  "auth_hash": "string",
  "customer_id": "string",
  "mode": "live"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 503 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-churnkey-hmac-auth-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ChurnkeyAuthResponse](#schemachurnkeyauthresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workspace has no Stripe customer (never subscribed)|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|
|503|Service Unavailable|Churnkey is not configured on the server|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth
</aside>

<h1 id="comfyui-api-workflows">workflows</h1>

Workflow storage and version management

## Get publish info for a workflow file

<a id="opIdgetUserdataFilePublish"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata/string/publish \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/userdata/{file}/publish`

Returns the publish status and share info for a workflow identified by its userdata path.

<h3 id="get-publish-info-for-a-workflow-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|path|string|true|The workflow file path within the user's data directory (URL encoded if necessary).|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "id": "string",
      "in_library": true,
      "model": true,
      "name": "string",
      "preview_url": "string",
      "public": true,
      "storage_url": "string"
    }
  ],
  "listed": true,
  "publish_time": "1970-01-01T00:00:00Z",
  "share_id": "string",
  "workflow_id": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-publish-info-for-a-workflow-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Publish info (publish_time is null if never published)|[WorkflowPublishInfo](#schemaworkflowpublishinfo)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Publish a workflow file

<a id="opIdpostUserdataFilePublish"></a>

> Code samples

```bash
curl http://localhost:8188/api/userdata/string/publish \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "asset_ids": [
      "string"
    ]
  }'
```

`POST /api/userdata/{file}/publish`

Creates a new published_workflow record from the latest version and snapshots the provided assets.

> Body parameter

```json
{
  "asset_ids": [
    "string"
  ]
}
```

<h3 id="publish-a-workflow-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|path|string|true|The workflow file path within the user's data directory (URL encoded if necessary).|
|body|body|[PublishWorkflowAssetsRequest](#schemapublishworkflowassetsrequest)|true|none|
|» asset_ids|body|[string]|true|IDs of assets (inputs and models) to snapshot.|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "id": "string",
      "in_library": true,
      "model": true,
      "name": "string",
      "preview_url": "string",
      "public": true,
      "storage_url": "string"
    }
  ],
  "listed": true,
  "publish_time": "1970-01-01T00:00:00Z",
  "share_id": "string",
  "workflow_id": "string"
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="publish-a-workflow-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow published|[WorkflowPublishInfo](#schemaworkflowpublishinfo)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## List workflows

<a id="opIdlistWorkflows"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/workflows`

Returns a paginated list of workflows for the authenticated user in the current workspace.

<h3 id="list-workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|name|query|string|false|Search workflows by name (case-insensitive substring match)|
|default_view|query|string|false|Filter by default view type|
|sort|query|string|false|Sort field|
|order|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|default_view|workflow|
|default_view|app|
|sort|create_time|
|sort|update_time|
|sort|name|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "default_view": "workflow",
      "description": "string",
      "forked_from": {
        "workflow_id": "string",
        "workflow_version_id": "string"
      },
      "id": "string",
      "latest_version": 0,
      "name": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  }
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="list-workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowListResponse](#schemaworkflowlistresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Create a new workflow

<a id="opIdcreateWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "default_view": "workflow",
    "description": "string",
    "forked_from_workflow_id": "string",
    "forked_from_workflow_version_id": "string",
    "name": "string",
    "workflow_json": {}
  }'
```

`POST /api/workflows`

Creates a new workflow with its first version.

> Body parameter

```json
{
  "default_view": "workflow",
  "description": "string",
  "forked_from_workflow_id": "string",
  "forked_from_workflow_version_id": "string",
  "name": "string",
  "workflow_json": {}
}
```

<h3 id="create-a-new-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWorkflowRequest](#schemacreateworkflowrequest)|true|none|
|» default_view|body|string|false|Default view mode|
|» description|body|string|false|Description of the workflow|
|» forked_from_workflow_id|body|string|false|ID of the source workflow if forked|
|» forked_from_workflow_version_id|body|string|false|ID of the source workflow version if forked|
|» name|body|string|false|Display name for the workflow|
|» workflow_json|body|object|true|The ComfyUI workflow JSON|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» default_view|workflow|
|» default_view|app|

> Example responses

> 201 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "default_view": "workflow",
  "description": "string",
  "forked_from": {
    "workflow_id": "string",
    "workflow_version_id": "string"
  },
  "id": "string",
  "latest_version": 0,
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="create-a-new-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Workflow created successfully|[WorkflowResponse](#schemaworkflowresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get workflow

<a id="opIdgetWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/workflows/{workflow_id}`

Retrieves workflow metadata by ID.

<h3 id="get-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The UUID of the workflow.|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "default_view": "workflow",
  "description": "string",
  "forked_from": {
    "workflow_id": "string",
    "workflow_version_id": "string"
  },
  "id": "string",
  "latest_version": 0,
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowResponse](#schemaworkflowresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Delete workflow

<a id="opIddeleteWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /api/workflows/{workflow_id}`

Soft-deletes a workflow.

<h3 id="delete-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The UUID of the workflow to delete.|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="delete-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Workflow deleted successfully|None|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Update workflow metadata

<a id="opIdupdateWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "default_view": "workflow",
    "description": "string",
    "name": "string"
  }'
```

`PATCH /api/workflows/{workflow_id}`

Updates mutable workflow metadata (name, description, default_view).

> Body parameter

```json
{
  "default_view": "workflow",
  "description": "string",
  "name": "string"
}
```

<h3 id="update-workflow-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The UUID of the workflow to update.|
|body|body|[UpdateWorkflowRequest](#schemaupdateworkflowrequest)|true|none|
|» default_view|body|string|false|New default view mode|
|» description|body|string|false|New description|
|» name|body|string|false|New display name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» default_view|workflow|
|» default_view|app|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "default_view": "workflow",
  "description": "string",
  "forked_from": {
    "workflow_id": "string",
    "workflow_version_id": "string"
  },
  "id": "string",
  "latest_version": 0,
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="update-workflow-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowResponse](#schemaworkflowresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get workflow content

<a id="opIdgetWorkflowContent"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/string/content \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/workflows/{workflow_id}/content`

Retrieves the latest version of a workflow and its JSON content.

<h3 id="get-workflow-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The UUID of the workflow whose content should be retrieved.|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "dependency_asset_ids": [
    "string"
  ],
  "id": "string",
  "version": 0,
  "workflow_json": {}
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-workflow-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WorkflowVersionContentResponse](#schemaworkflowversioncontentresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Fork a workflow

<a id="opIdforkWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/string/fork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "source_version": 0
  }'
```

`POST /api/workflows/{workflow_id}/fork`

Creates a new workflow by forking from an existing version.

> Body parameter

```json
{
  "name": "string",
  "source_version": 0
}
```

<h3 id="fork-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The UUID of the source workflow to fork from.|
|body|body|[ForkWorkflowRequest](#schemaforkworkflowrequest)|true|none|
|» name|body|string|false|Name for the forked workflow|
|» source_version|body|integer|true|Version number to fork from|

> Example responses

> 201 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "default_view": "workflow",
  "description": "string",
  "forked_from": {
    "workflow_id": "string",
    "workflow_version_id": "string"
  },
  "id": "string",
  "latest_version": 0,
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="fork-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Workflow forked successfully|[WorkflowResponse](#schemaworkflowresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Source workflow or version not found|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Create a new version

<a id="opIdcreateWorkflowVersion"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "base_version": 0,
    "workflow_json": {}
  }'
```

`POST /api/workflows/{workflow_id}/versions`

Creates a new workflow version with updated workflow JSON. Uses optimistic concurrency via base_version.

> Body parameter

```json
{
  "base_version": 0,
  "workflow_json": {}
}
```

<h3 id="create-a-new-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The UUID of the workflow to create a new version for.|
|body|body|[CreateWorkflowVersionRequest](#schemacreateworkflowversionrequest)|true|none|
|» base_version|body|integer|true|The version number this change is based on (for optimistic concurrency)|
|» workflow_json|body|object|true|The updated ComfyUI workflow JSON|

> Example responses

> 201 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "id": "string",
  "latest_version": 0,
  "version": 0
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 422 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="create-a-new-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Version created successfully|[WorkflowVersionResponse](#schemaworkflowversionresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - not the workflow owner|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Workflow not found|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|Version conflict - base_version does not match latest|[ErrorResponse](#schemaerrorresponse)|
|422|Unprocessable Entity|Validation error|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get a published workflow by share ID

<a id="opIdgetPublishedWorkflow"></a>

> Code samples

```bash
curl http://localhost:8188/api/workflows/published/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/workflows/published/{share_id}`

Returns the published workflow details including the status of each
published asset relative to the caller's library. Authentication is required.


<h3 id="get-a-published-workflow-by-share-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|share_id|path|string|true|The share ID of the published workflow.|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "id": "string",
      "in_library": true,
      "model": true,
      "name": "string",
      "preview_url": "string",
      "public": true,
      "storage_url": "string"
    }
  ],
  "listed": true,
  "name": "string",
  "publish_time": "1970-01-01T00:00:00Z",
  "share_id": "string",
  "workflow_id": "string",
  "workflow_json": {}
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 413 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-a-published-workflow-by-share-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Published workflow details with asset statuses|[PublishedWorkflowDetail](#schemapublishedworkflowdetail)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Share not found|[ErrorResponse](#schemaerrorresponse)|
|413|Payload Too Large|Workflow JSON too large|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-queue">queue</h1>

Job queue state and control

## Interrupt the first active job

<a id="opIdinterruptJob"></a>

> Code samples

```bash
curl http://localhost:8188/api/interrupt \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /api/interrupt`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated. Prefer the jobs-namespace cancel endpoints:
POST /api/jobs/{job_id}/cancel for a single job, or
POST /api/jobs/cancel to cancel jobs by ID.

Cancels the first active job for the authenticated user (the currently
running job if there is one, otherwise the next pending job). Takes no
body and cannot target a specific job — use the jobs-namespace endpoints
for that.


> Example responses

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="interrupt-the-first-active-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - first active job cancelled, or no active job found|None|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get queue information

<a id="opIdgetQueueInfo"></a>

> Code samples

```bash
curl http://localhost:8188/api/queue \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/queue`

Returns information about running and pending items in the queue

> Example responses

> 200 Response

```json
{
  "queue_pending": [
    [
      null,
      null,
      null,
      null,
      null
    ]
  ],
  "queue_running": [
    [
      null,
      null,
      null,
      null,
      null
    ]
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-queue-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueueInfo](#schemaqueueinfo)|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized - Authentication required|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Manage queue operations

<a id="opIdmanageQueue"></a>

> Code samples

```bash
curl http://localhost:8188/api/queue \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "clear": true,
    "delete": [
      "string"
    ]
  }'
```

`POST /api/queue`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated. Prefer the jobs-namespace cancel endpoints:
POST /api/jobs/cancel for cancelling jobs by ID, and
POST /api/jobs/{job_id}/cancel for a single job.

Cancel specific jobs by ID (the `delete` field) or clear all pending
jobs in the queue (the `clear` field). Despite the `delete` naming, this
does not delete anything — listed jobs transition to the cancelled state,
and `delete` cancels both pending and running jobs (not pending-only as
previously documented). Job-by-ID cancellation is superseded by
POST /api/jobs/cancel; `clear` has no jobs-namespace replacement yet.


> Body parameter

```json
{
  "clear": true,
  "delete": [
    "string"
  ]
}
```

<h3 id="manage-queue-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QueueManageRequest](#schemaqueuemanagerequest)|true|none|
|» clear|body|boolean|false|If true, clear all pending jobs from the queue|
|» delete|body|[string]|false|Array of job IDs to cancel; pending and running jobs transition to cancelled|

> Example responses

> 200 Response

```json
{
  "cleared": true,
  "deleted": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="manage-queue-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[QueueManageResponse](#schemaqueuemanageresponse)|
|400|Bad Request|Invalid request parameters|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-job">job</h1>

Job lifecycle queries

## Get job status (deprecated)

<a id="opIdgetJobStatus"></a>

> Code samples

```bash
curl http://localhost:8188/api/job/497f6eca-6276-4993-bfeb-53cbbbba6f08/status \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/job/{job_id}/status`

<aside class="warning">
This operation is deprecated
</aside>

**Deprecated.** Superseded by `GET /api/jobs/{job_id}` (plural path).
Clients should migrate; the endpoint is retained for backward
compatibility but will be removed in a future release.


<h3 id="get-job-status-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string(uuid)|true|The unique ID of the job|

> Example responses

> 200 Response

```json
{
  "assigned_inference": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "error_message": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_state_update": "1970-01-01T00:00:00Z",
  "status": "waiting_to_dispatch",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

> 500 Response

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

<h3 id="get-job-status-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Job status returned|[JobStatusResponse](#schemajobstatusresponse)|
|401|Unauthorized|Unauthorized|[ErrorResponse](#schemaerrorresponse)|
|403|Forbidden|Forbidden - job belongs to another user|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|Job not found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

<h1 id="comfyui-api-default">Default</h1>

## Mark assets whose backing files no longer exist on disk

<a id="opIdpruneAssets"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/prune \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /api/assets/prune`

Starts a background job that removes asset entries whose underlying content no longer exists on disk.

> Example responses

> 200 Response

```json
{
  "marked": 0,
  "status": "string"
}
```

<h3 id="mark-assets-whose-backing-files-no-longer-exist-on-disk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Prune result|Inline|

<h3 id="mark-assets-whose-backing-files-no-longer-exist-on-disk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marked|integer|false|none|Number of assets marked as missing|
|status|string|false|none|"completed", or "cancelled" when a cancel stopped the prune part way; the assets it marked before that stay marked|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Trigger asset scan/seed from filesystem

<a id="opIdseedAssets"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/seed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "roots": [
      "string"
    ]
  }'
```

`POST /api/assets/seed`

Starts a background job that scans configured directories and registers assets not yet in the asset database.

> Body parameter

```json
{
  "roots": [
    "string"
  ]
}
```

<h3 id="trigger-asset-scanseed-from-filesystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» roots|body|[string]|false|Root folder paths to scan (if omitted, scans all)|

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="trigger-asset-scanseed-from-filesystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Seed started|Inline|

<h3 id="trigger-asset-scanseed-from-filesystem-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Cancel an in-progress asset scan

<a id="opIdcancelAssetSeed"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/seed/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`POST /api/assets/seed/cancel`

Requests cancellation of the currently-running asset seed job.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

<h3 id="cancel-an-in-progress-asset-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan cancelled|Inline|

<h3 id="cancel-an-in-progress-asset-scan-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get asset scan progress

<a id="opIdgetAssetSeedStatus"></a>

> Code samples

```bash
curl http://localhost:8188/api/assets/seed/status \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/assets/seed/status`

Returns progress/status of the most recent asset seed job.

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-asset-scan-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan progress|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Upload this installation to Cloud as an import bundle

<a id="opIdcreateDeployBundle"></a>

> Code samples

```bash
curl http://localhost:8188/api/deploy/bundle \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "workflow": {}
  }'
```

`POST /api/deploy/bundle`

On explicit user action, collects this installation's snapshot (comfyui-desktop-2-snapshot) and installed model list, sends them with the optional workflow and name to comfy-builder's POST /v1/import-bundles, and returns the Create a Build wizard link that opens it. The caller's credential is forwarded verbatim and never stored; exactly one of a Bearer Authorization header or an X-API-Key header must be sent. Never available under --offline.

> Body parameter

```json
{
  "name": "string",
  "workflow": {}
}
```

<h3 id="upload-this-installation-to-cloud-as-an-import-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string \| null|false|Optional label for the bundle.|
|» workflow|body|object \| null|false|The workflow open in ComfyUI, sent as is.|

> Example responses

> 200 Response

```json
{
  "bundle_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "expires_at": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "workspace_id": "string"
}
```

> 400 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

> 401 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

> 403 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

> 413 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

> 429 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

> 502 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

> 503 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

<h3 id="upload-this-installation-to-cloud-as-an-import-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bundle stored on comfy-builder|Inline|
|400|Bad Request|Rejected before upload: `multiple_credentials` (both headers sent), `invalid_api_key_format` (X-API-Key is not comfyui- followed by 64 hex characters) or `invalid_body` (not a JSON object, or a bad workflow or name).|[DeployToCloudError](#schemadeploytoclouderror)|
|401|Unauthorized|`missing_credentials` (no credential sent) or `unauthorized` (the builder refused the credential).|[DeployToCloudError](#schemadeploytoclouderror)|
|403|Forbidden|`offline` (the server runs with --offline) or `unauthorized` (the builder refused the credential).|[DeployToCloudError](#schemadeploytoclouderror)|
|413|Payload Too Large|The bundle exceeds the builder's size cap (`too_large`).|[DeployToCloudError](#schemadeploytoclouderror)|
|429|Too Many Requests|The user already holds the builder's limit of unexpired bundles in this workspace (`too_many_bundles`); clears as older bundles expire.|[DeployToCloudError](#schemadeploytoclouderror)|
|502|Bad Gateway|`builder_rejected` (the builder refused the bundle as invalid; `message` carries its reason, at most 500 characters) or `builder_unavailable` (the builder could not be reached or answered unexpectedly).|[DeployToCloudError](#schemadeploytoclouderror)|
|503|Service Unavailable|The builder is busy (`builder_busy`); retry after Retry-After seconds when present.|[DeployToCloudError](#schemadeploytoclouderror)|

<h3 id="upload-this-installation-to-cloud-as-an-import-bundle-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle_id|string(uuid)|true|none|none|
|expires_at|string(date-time)|true|none|When the bundle stops being readable (24 hours after creation).|
|url|string(uri)|true|none|The Create a Build wizard link that opens the bundle (/profile/builds/new?step=import&bundle=&workspace=&bundle_workspace=).|
|workspace_id|string|true|none|The workspace the bundle belongs to (the credential's).|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|503|Retry-After|integer||Seconds to wait, when the builder sent one.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, ApiKeyAuth
</aside>

## Count what a Deploy to Cloud bundle would carry

<a id="opIdgetDeploySummary"></a>

> Code samples

```bash
curl http://localhost:8188/api/deploy/summary \
  -H 'Accept: application/json'
```

`GET /api/deploy/summary`

Counts the custom nodes and model files this local installation would send in an import bundle, so the UI can describe the upload before the user confirms it. Local reads only; makes no network request.

> Example responses

> 200 Response

```json
{
  "custom_nodes": 0,
  "models": 0
}
```

> 403 Response

```json
{
  "error": "offline",
  "message": "string"
}
```

<h3 id="count-what-a-deploy-to-cloud-bundle-would-carry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Counts of what the bundle would include|Inline|
|403|Forbidden|The server runs with --offline (error `offline`)|[DeployToCloudError](#schemadeploytoclouderror)|

<h3 id="count-what-a-deploy-to-cloud-bundle-would-carry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_nodes|integer|true|none|Custom node packages found in the custom_nodes folders|
|models|integer|true|none|Model files found across the model folders|

<aside class="success">
This operation does not require authentication
</aside>

## List available embedding names

<a id="opIdgetEmbeddings"></a>

> Code samples

```bash
curl http://localhost:8188/api/embeddings \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/embeddings`

Returns the list of text-encoder embeddings available on disk.

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-available-embedding-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Embedding names|Inline|

<h3 id="list-available-embedding-names-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Free GPU memory and/or unload models

<a id="opIdfreeMemory"></a>

> Code samples

```bash
curl http://localhost:8188/api/free \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "free_memory": true,
    "unload_models": true
  }'
```

`POST /api/free`

Frees GPU memory by unloading models and/or freeing the resident model cache.

> Body parameter

```json
{
  "free_memory": true,
  "unload_models": true
}
```

<h3 id="free-gpu-memory-andor-unload-models-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» free_memory|body|boolean|false|Run garbage collection and free cached memory|
|» unload_models|body|boolean|false|Unload all models from VRAM/RAM|

<h3 id="free-gpu-memory-andor-unload-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Memory freed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get internationalisation translation strings

<a id="opIdgetI18n"></a>

> Code samples

```bash
curl http://localhost:8188/api/i18n \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /api/i18n`

Returns translation file URLs contributed by custom nodes, keyed by locale.

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-internationalisation-translation-strings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Translation map|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get configured folder paths

<a id="opIdgetInternalFolderPaths"></a>

> Code samples

```bash
curl http://localhost:8188/internal/folder_paths \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /internal/folder_paths`

Returns the filesystem paths ComfyUI loads models and assets from, keyed by folder type.

> Example responses

> 200 Response

```json
{
  "property1": [
    [
      "string"
    ]
  ],
  "property2": [
    [
      "string"
    ]
  ]
}
```

<h3 id="get-configured-folder-paths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dictionary of folder type to paths|Inline|

<h3 id="get-configured-folder-paths-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[[string]]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get server logs as text

<a id="opIdgetInternalLogs"></a>

> Code samples

```bash
curl http://localhost:8188/internal/logs \
  -H "X-API-Key: ${API_KEY}"
```

`GET /internal/logs`

Returns ComfyUI log entries from the in-memory log buffer.

<h3 id="get-server-logs-as-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log text|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Get raw structured log entries

<a id="opIdgetInternalLogsRaw"></a>

> Code samples

```bash
curl http://localhost:8188/internal/logs/raw \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /internal/logs/raw`

Returns the raw ComfyUI log buffer plus size metadata.

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "m": "string",
      "t": 0
    }
  ],
  "size": {
    "cols": 0,
    "rows": 0
  }
}
```

<h3 id="get-raw-structured-log-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Structured log data|Inline|

<h3 id="get-raw-structured-log-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[object]|false|none|none|
|» m|string|false|none|Message|
|» t|number|false|none|Timestamp|
|size|object|false|none|none|
|» cols|integer|false|none|none|
|» rows|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

## Subscribe or unsubscribe a WebSocket client to log streaming

<a id="opIdsubscribeToLogs"></a>

> Code samples

```bash
curl http://localhost:8188/internal/logs/subscribe \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "clientId": "string",
    "enabled": true
  }'
```

`PATCH /internal/logs/subscribe`

Subscribes or unsubscribes the current client from live log streaming over the WebSocket.

> Body parameter

```json
{
  "clientId": "string",
  "enabled": true
}
```

<h3 id="subscribe-or-unsubscribe-a-websocket-client-to-log-streaming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» clientId|body|string|true|WebSocket client ID|
|» enabled|body|boolean|true|Enable or disable log streaming for this client|

<h3 id="subscribe-or-unsubscribe-a-websocket-client-to-log-streaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription updated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, BearerAuth
</aside>

# Schemas

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {}
}
```

Represents a user-owned asset (image, video, or other generated output).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|Timestamp when the asset was created|
|display_name|string \| null|false|none|Display name of the asset. Mirrors name for backwards compatibility.|
|hash|string|false|none|Blake3 hash of the asset content.|
|id|string(uuid)|true|none|Unique identifier for the asset|
|is_immutable|boolean|false|none|Whether this asset is immutable (cannot be modified or deleted)|
|job_id|string(uuid) \| null|false|none|ID of the job that created this asset, if available|
|last_access_time|string(date-time)|false|none|Timestamp when the asset was last accessed|
|loader_path|string \| null|false|none|The bare value a loader widget consumes for this asset. For models it is the path inside the category folder (e.g. "flux.safetensors" for "models/checkpoints/flux.safetensors"), which is what the model resolver matches. For input/output/temp it is the content hash, because those assets are fetched by hash rather than staged by name — that is the value LoadImage-style widgets must carry. Clients add the "[output]"/"[temp]" annotation from the asset's own type, so it is never included here. Null when no such value can be derived.|
|metadata|object|false|read-only|System-managed metadata from download sources (HuggingFace, CivitAI, etc.) - read-only, not user-modifiable|
|mime_type|string|false|none|MIME type of the asset|
|name|string|true|none|Name of the asset file|
|preview_id|string(uuid) \| null|false|none|ID of the preview asset if available|
|preview_url|string(uri)|false|none|URL for asset preview/thumbnail|
|short_url|string \| null|false|none|Durable, owner-gated short link to this asset's content (relative `/api/s/{id}` path). Stable across the underlying signed URL's expiry — resolving it re-mints a fresh signed URL on every request — so it is safe to persist or share into chat, unlike `preview_url`. Only the minting user can resolve it. Omitted when the short-link surface is disabled or the asset has no resolvable content hash.|
|size|integer(int64)|false|none|Size of the asset in bytes|
|tags|[string]|false|none|Tags associated with the asset|
|updated_at|string(date-time)|true|none|Timestamp when the asset was last updated|
|user_metadata|object|false|none|Custom user metadata for the asset|

<h2 id="tocS_AssetCreated">AssetCreated</h2>
<!-- backwards compatibility -->
<a id="schemaassetcreated"></a>
<a id="schema_AssetCreated"></a>
<a id="tocSassetcreated"></a>
<a id="tocsassetcreated"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_immutable": true,
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_access_time": "1970-01-01T00:00:00Z",
  "loader_path": "string",
  "metadata": {},
  "mime_type": "string",
  "name": "string",
  "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "preview_url": "http://example.com",
  "short_url": "string",
  "size": 0,
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {},
  "created_new": true
}
```

Response returned when a new asset is successfully created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|Timestamp when the asset was created|
|display_name|string \| null|false|none|Display name of the asset. Mirrors name for backwards compatibility.|
|hash|string|false|none|Blake3 hash of the asset content.|
|id|string(uuid)|true|none|Unique identifier for the asset|
|is_immutable|boolean|false|none|Whether this asset is immutable (cannot be modified or deleted)|
|job_id|string(uuid) \| null|false|none|ID of the job that created this asset, if available|
|last_access_time|string(date-time)|false|none|Timestamp when the asset was last accessed|
|loader_path|string \| null|false|none|The bare value a loader widget consumes for this asset. For models it is the path inside the category folder (e.g. "flux.safetensors" for "models/checkpoints/flux.safetensors"), which is what the model resolver matches. For input/output/temp it is the content hash, because those assets are fetched by hash rather than staged by name — that is the value LoadImage-style widgets must carry. Clients add the "[output]"/"[temp]" annotation from the asset's own type, so it is never included here. Null when no such value can be derived.|
|metadata|object|false|read-only|System-managed metadata from download sources (HuggingFace, CivitAI, etc.) - read-only, not user-modifiable|
|mime_type|string|false|none|MIME type of the asset|
|name|string|true|none|Name of the asset file|
|preview_id|string(uuid) \| null|false|none|ID of the preview asset if available|
|preview_url|string(uri)|false|none|URL for asset preview/thumbnail|
|short_url|string \| null|false|none|Durable, owner-gated short link to this asset's content (relative `/api/s/{id}` path). Stable across the underlying signed URL's expiry — resolving it re-mints a fresh signed URL on every request — so it is safe to persist or share into chat, unlike `preview_url`. Only the minting user can resolve it. Omitted when the short-link surface is disabled or the asset has no resolvable content hash.|
|size|integer(int64)|false|none|Size of the asset in bytes|
|tags|[string]|false|none|Tags associated with the asset|
|updated_at|string(date-time)|true|none|Timestamp when the asset was last updated|
|user_metadata|object|false|none|Custom user metadata for the asset|
|created_new|boolean|true|none|Whether this was a new asset creation (true) or returned existing (false)|

<h2 id="tocS_AssetInfo">AssetInfo</h2>
<!-- backwards compatibility -->
<a id="schemaassetinfo"></a>
<a id="schema_AssetInfo"></a>
<a id="tocSassetinfo"></a>
<a id="tocsassetinfo"></a>

```json
{
  "id": "string",
  "in_library": true,
  "model": true,
  "name": "string",
  "preview_url": "string",
  "public": true,
  "storage_url": "string"
}
```

Lightweight asset reference used in workflow publishing payloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Asset identifier.|
|in_library|boolean|true|none|Whether the caller already owns this asset.|
|model|boolean|true|none|Whether this asset is a model.|
|name|string|true|none|none|
|preview_url|string|true|none|Signed URL for previewing the asset.|
|public|boolean|true|none|Whether this is a public (platform-provided) asset.|
|storage_url|string|true|none|none|

<h2 id="tocS_AssetTagHistogramResponse">AssetTagHistogramResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassettaghistogramresponse"></a>
<a id="schema_AssetTagHistogramResponse"></a>
<a id="tocSassettaghistogramresponse"></a>
<a id="tocsassettaghistogramresponse"></a>

```json
{
  "tag_counts": {
    "checkpoint": 32,
    "lora": 193,
    "vae": 6
  }
}
```

Histogram of tag counts used for refining asset search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_counts|object|true|none|Map of tag names to their occurrence counts on matching assets|

<h2 id="tocS_AssetUpdated">AssetUpdated</h2>
<!-- backwards compatibility -->
<a id="schemaassetupdated"></a>
<a id="schema_AssetUpdated"></a>
<a id="tocSassetupdated"></a>
<a id="tocsassetupdated"></a>

```json
{
  "display_name": "string",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "loader_path": "string",
  "mime_type": "string",
  "name": "string",
  "tags": [
    "string"
  ],
  "updated_at": "1970-01-01T00:00:00Z",
  "user_metadata": {}
}
```

Response returned when an existing asset is successfully updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string \| null|false|none|Display name of the asset. Mirrors name for backwards compatibility.|
|hash|string|false|none|Blake3 hash of the asset content.|
|id|string(uuid)|true|none|Asset ID|
|job_id|string(uuid) \| null|false|none|ID of the job that created this asset, if available|
|loader_path|string \| null|false|none|The bare value a loader widget consumes for this asset. For models it is the path inside the category folder (e.g. "flux.safetensors" for "models/checkpoints/flux.safetensors"), which is what the model resolver matches. For input/output/temp it is the content hash, because those assets are fetched by hash rather than staged by name — that is the value LoadImage-style widgets must carry. Clients add the "[output]"/"[temp]" annotation from the asset's own type, so it is never included here. Null when no such value can be derived.|
|mime_type|string|false|none|Updated MIME type of the asset|
|name|string|false|none|Updated name of the asset|
|tags|[string]|false|none|Tags associated with the asset|
|updated_at|string(date-time)|true|none|Timestamp of the update|
|user_metadata|object|false|none|Updated custom metadata|

<h2 id="tocS_ChurnkeyAuthResponse">ChurnkeyAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemachurnkeyauthresponse"></a>
<a id="schema_ChurnkeyAuthResponse"></a>
<a id="tocSchurnkeyauthresponse"></a>
<a id="tocschurnkeyauthresponse"></a>

```json
{
  "auth_hash": "string",
  "customer_id": "string",
  "mode": "live"
}
```

Credentials the Churnkey embed requires to launch the cancel flow.
`auth_hash` is hex-encoded HMAC-SHA256 of `customer_id` signed with the
server's CHURNKEY_HMAC_SECRET; it is bound to that single customer ID
and must not be reused for other customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_hash|string|true|none|Hex-encoded HMAC-SHA256(customer_id, CHURNKEY_HMAC_SECRET)|
|customer_id|string|true|none|Stripe customer ID for the workspace|
|mode|string|true|none|Churnkey environment matching the configured app|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|live|
|mode|test|
|mode|sandbox|

<h2 id="tocS_CreateWorkflowRequest">CreateWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkflowrequest"></a>
<a id="schema_CreateWorkflowRequest"></a>
<a id="tocScreateworkflowrequest"></a>
<a id="tocscreateworkflowrequest"></a>

```json
{
  "default_view": "workflow",
  "description": "string",
  "forked_from_workflow_id": "string",
  "forked_from_workflow_version_id": "string",
  "name": "string",
  "workflow_json": {}
}
```

Request body for creating a new saved workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_view|string|false|none|Default view mode|
|description|string|false|none|Description of the workflow|
|forked_from_workflow_id|string|false|none|ID of the source workflow if forked|
|forked_from_workflow_version_id|string|false|none|ID of the source workflow version if forked|
|name|string|false|none|Display name for the workflow|
|workflow_json|object|true|none|The ComfyUI workflow JSON|

#### Enumerated Values

|Property|Value|
|---|---|
|default_view|workflow|
|default_view|app|

<h2 id="tocS_CreateWorkflowVersionRequest">CreateWorkflowVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateworkflowversionrequest"></a>
<a id="schema_CreateWorkflowVersionRequest"></a>
<a id="tocScreateworkflowversionrequest"></a>
<a id="tocscreateworkflowversionrequest"></a>

```json
{
  "base_version": 0,
  "workflow_json": {}
}
```

Request body for creating a new version of a saved workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_version|integer|true|none|The version number this change is based on (for optimistic concurrency)|
|workflow_json|object|true|none|The updated ComfyUI workflow JSON|

<h2 id="tocS_DeployToCloudError">DeployToCloudError</h2>
<!-- backwards compatibility -->
<a id="schemadeploytoclouderror"></a>
<a id="schema_DeployToCloudError"></a>
<a id="tocSdeploytoclouderror"></a>
<a id="tocsdeploytoclouderror"></a>

```json
{
  "error": "offline",
  "message": "string"
}
```

Error body of local ComfyUI's /api/deploy/* routes. Branch on `error`, never on `message`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|none|
|message|string|false|none|Human-readable detail, present for invalid_body and builder_rejected.|

#### Enumerated Values

|Property|Value|
|---|---|
|error|offline|
|error|multiple_credentials|
|error|invalid_api_key_format|
|error|invalid_body|
|error|missing_credentials|
|error|unauthorized|
|error|too_large|
|error|too_many_bundles|
|error|builder_rejected|
|error|builder_unavailable|
|error|builder_busy|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "code": "string",
  "details": {},
  "message": "string"
}
```

Standard error response with a machine-readable code and human-readable message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|details|object|false|none|Optional open object carrying structured, machine-readable context about the error (e.g. offending field names, validation specifics). Absent for most errors; consumers must not assume any particular shape.|
|message|string|true|none|none|

<h2 id="tocS_ExecutionError">ExecutionError</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionerror"></a>
<a id="schema_ExecutionError"></a>
<a id="tocSexecutionerror"></a>
<a id="tocsexecutionerror"></a>

```json
{
  "current_inputs": {},
  "current_outputs": {},
  "exception_message": "string",
  "exception_type": "string",
  "node_id": "string",
  "node_type": "string",
  "traceback": [
    "string"
  ]
}
```

Detailed execution error information from ComfyUI

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_inputs|object|true|none|Input values at time of failure (empty object if not available)|
|current_outputs|object|true|none|Output values at time of failure (empty object if not available)|
|exception_message|string|true|none|Human-readable error message|
|exception_type|string|true|none|Python exception type (e.g., "RuntimeError")|
|node_id|string|true|none|ID of the node that failed|
|node_type|string|true|none|Type name of the node (e.g., "KSampler")|
|traceback|[string]|true|none|Array of traceback lines (empty array if not available)|

<h2 id="tocS_FeedbackRequest">FeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackrequest"></a>
<a id="schema_FeedbackRequest"></a>
<a id="tocSfeedbackrequest"></a>
<a id="tocsfeedbackrequest"></a>

```json
{
  "content": "string",
  "metadata": {},
  "rating": 1,
  "type": "missing_nodes"
}
```

Request to submit user feedback

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The feedback content or message|
|metadata|object|false|none|Additional metadata about the feedback|
|rating|integer|false|none|User's rating of ComfyUI Cloud experience (1-5 stars)|
|type|string|true|none|Type of feedback being submitted|

#### Enumerated Values

|Property|Value|
|---|---|
|type|missing_nodes|
|type|general|
|type|missing_models|

<h2 id="tocS_FeedbackResponse">FeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackresponse"></a>
<a id="schema_FeedbackResponse"></a>
<a id="tocSfeedbackresponse"></a>
<a id="tocsfeedbackresponse"></a>

```json
{}
```

Response after submitting feedback

<h2 id="tocS_ForkWorkflowRequest">ForkWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaforkworkflowrequest"></a>
<a id="schema_ForkWorkflowRequest"></a>
<a id="tocSforkworkflowrequest"></a>
<a id="tocsforkworkflowrequest"></a>

```json
{
  "name": "string",
  "source_version": 0
}
```

Request body for forking an existing workflow into the user's account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name for the forked workflow|
|source_version|integer|true|none|Version number to fork from|

<h2 id="tocS_GetUserDataResponseFull">GetUserDataResponseFull</h2>
<!-- backwards compatibility -->
<a id="schemagetuserdataresponsefull"></a>
<a id="schema_GetUserDataResponseFull"></a>
<a id="tocSgetuserdataresponsefull"></a>
<a id="tocsgetuserdataresponsefull"></a>

```json
[
  {
    "modified": 0,
    "path": "string",
    "size": 0
  }
]
```

List of user data file entries (each with path, size, and modification time) returned when full_info=true.

<h2 id="tocS_GetUserDataResponseFullFile">GetUserDataResponseFullFile</h2>
<!-- backwards compatibility -->
<a id="schemagetuserdataresponsefullfile"></a>
<a id="schema_GetUserDataResponseFullFile"></a>
<a id="tocSgetuserdataresponsefullfile"></a>
<a id="tocsgetuserdataresponsefullfile"></a>

```json
{
  "modified": 0,
  "path": "string",
  "size": 0
}
```

Individual file entry within a full user data response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modified|integer(int64)|false|none|UNIX timestamp of the last modification in milliseconds.|
|path|string|false|none|File name or path relative to the user directory.|
|size|integer|false|none|File size in bytes.|

<h2 id="tocS_GlobalSubgraphData">GlobalSubgraphData</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsubgraphdata"></a>
<a id="schema_GlobalSubgraphData"></a>
<a id="tocSglobalsubgraphdata"></a>
<a id="tocsglobalsubgraphdata"></a>

```json
{
  "data": "string",
  "info": {
    "node_pack": "string"
  },
  "name": "string",
  "source": "string"
}
```

Full data for a global subgraph blueprint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|The full subgraph JSON data as a string|
|info|object|true|none|Additional information about the subgraph|
|name|string|true|none|Display name of the subgraph blueprint|
|source|string|true|none|Source type of the subgraph - "templates" for workflow templates or "custom_node" for custom node subgraphs|

<h2 id="tocS_GlobalSubgraphInfo">GlobalSubgraphInfo</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsubgraphinfo"></a>
<a id="schema_GlobalSubgraphInfo"></a>
<a id="tocSglobalsubgraphinfo"></a>
<a id="tocsglobalsubgraphinfo"></a>

```json
{
  "data": "string",
  "info": {
    "node_pack": "string"
  },
  "name": "string",
  "source": "string"
}
```

Metadata for a global subgraph blueprint (without full data)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The full subgraph JSON data (may be empty in list view)|
|info|object|true|none|Additional information about the subgraph|
|name|string|true|none|Display name of the subgraph blueprint|
|source|string|true|none|Source type of the subgraph - "templates" for workflow templates or "custom_node" for custom node subgraphs|

<h2 id="tocS_HistoryDetailEntry">HistoryDetailEntry</h2>
<!-- backwards compatibility -->
<a id="schemahistorydetailentry"></a>
<a id="schema_HistoryDetailEntry"></a>
<a id="tocShistorydetailentry"></a>
<a id="tocshistorydetailentry"></a>

```json
{
  "meta": {},
  "outputs": {},
  "prompt": {
    "extra_data": {},
    "outputs_to_execute": [
      "string"
    ],
    "priority": 0,
    "prompt": {},
    "prompt_id": "string"
  },
  "status": {}
}
```

History entry with full prompt data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|false|none|Metadata about the execution and nodes|
|outputs|object|false|none|Output data from execution (generated images, files, etc.)|
|prompt|object|false|none|Full prompt execution data|
|status|object|false|none|Execution status and timeline information|

<h2 id="tocS_HistoryDetailResponse">HistoryDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemahistorydetailresponse"></a>
<a id="schema_HistoryDetailResponse"></a>
<a id="tocShistorydetailresponse"></a>
<a id="tocshistorydetailresponse"></a>

```json
{
  "property1": {
    "meta": {},
    "outputs": {},
    "prompt": {
      "extra_data": {},
      "outputs_to_execute": [
        "string"
      ],
      "priority": 0,
      "prompt": {},
      "prompt_id": "string"
    },
    "status": {}
  },
  "property2": {
    "meta": {},
    "outputs": {},
    "prompt": {
      "extra_data": {},
      "outputs_to_execute": [
        "string"
      ],
      "priority": 0,
      "prompt": {},
      "prompt_id": "string"
    },
    "status": {}
  }
}
```

Detailed execution history response for a specific prompt.
Returns a dictionary with prompt_id as key and full history data as value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[HistoryDetailEntry](#schemahistorydetailentry)|false|none|History entry with full prompt data|

<h2 id="tocS_HistoryEntry">HistoryEntry</h2>
<!-- backwards compatibility -->
<a id="schemahistoryentry"></a>
<a id="schema_HistoryEntry"></a>
<a id="tocShistoryentry"></a>
<a id="tocshistoryentry"></a>

```json
{
  "create_time": 0,
  "meta": {},
  "outputs": {},
  "prompt": {
    "extra_data": {},
    "priority": 0,
    "prompt_id": "string"
  },
  "prompt_id": "string",
  "status": {},
  "workflow_id": "string"
}
```

History entry with prompt_id and execution data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_time|integer(int64)|false|none|Job creation timestamp (Unix timestamp in milliseconds)|
|meta|object|false|none|Metadata about the execution and nodes|
|outputs|object|false|none|Output data from execution (generated images, files, etc.)|
|prompt|object|false|none|Filtered prompt execution data (lightweight format)|
|prompt_id|string|true|none|Unique identifier for this prompt execution|
|status|object|false|none|Execution status and timeline information|
|workflow_id|string|false|none|UUID identifying the workflow graph definition|

<h2 id="tocS_HistoryManageRequest">HistoryManageRequest</h2>
<!-- backwards compatibility -->
<a id="schemahistorymanagerequest"></a>
<a id="schema_HistoryManageRequest"></a>
<a id="tocShistorymanagerequest"></a>
<a id="tocshistorymanagerequest"></a>

```json
{
  "clear": true,
  "delete": [
    "string"
  ]
}
```

Request to manage history operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clear|boolean|false|none|If true, clear all history for the authenticated user|
|delete|[string]|false|none|Array of job IDs to delete from history|

<h2 id="tocS_HistoryResponse">HistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemahistoryresponse"></a>
<a id="schema_HistoryResponse"></a>
<a id="tocShistoryresponse"></a>
<a id="tocshistoryresponse"></a>

```json
{
  "history": [
    {
      "create_time": 0,
      "meta": {},
      "outputs": {},
      "prompt": {
        "extra_data": {},
        "priority": 0,
        "prompt_id": "string"
      },
      "prompt_id": "string",
      "status": {},
      "workflow_id": "string"
    }
  ]
}
```

Execution history response with history array.
Returns an object with a "history" key containing an array of history entries.
Each entry includes prompt_id as a property along with execution data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[[HistoryEntry](#schemahistoryentry)]|true|none|Array of history entries ordered by creation time (newest first)|

<h2 id="tocS_JobAssetsResponse">JobAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobassetsresponse"></a>
<a id="schema_JobAssetsResponse"></a>
<a id="tocSjobassetsresponse"></a>
<a id="tocsjobassetsresponse"></a>

```json
{
  "assets": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "hash": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "mime_type": "string",
      "name": "string",
      "node_id": "string",
      "output_index": 0,
      "output_key": "string",
      "preview_url": "string",
      "size": 0
    }
  ],
  "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  }
}
```

Paginated list of the assets produced by a single job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[JobOutputAsset](#schemajoboutputasset)]|true|none|The job's output assets for the requested page (empty when the job produced none)|
|job_id|string(uuid)|true|none|ID of the job these assets belong to|
|pagination|[PaginationInfo](#schemapaginationinfo)|true|none|Pagination metadata included in list responses. Supports both legacy<br>offset/limit pagination and cursor-based pagination. When cursor-based<br>pagination is used, `next_cursor` is the primary pagination token and<br>`offset`/`total` may be zero.<br>|

<h2 id="tocS_JobCancelResponse">JobCancelResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobcancelresponse"></a>
<a id="schema_JobCancelResponse"></a>
<a id="tocSjobcancelresponse"></a>
<a id="tocsjobcancelresponse"></a>

```json
{
  "cancelled": true
}
```

Response for POST /api/jobs/{job_id}/cancel. Returned on both fresh cancels and idempotent no-ops.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|boolean|true|none|True when a cancel event was successfully dispatched by this call.<br>False when the job was already in a terminal or cancelling state,<br>in which case the call is a no-op (still 200 — idempotent).<br>|

<h2 id="tocS_JobDetailResponse">JobDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobdetailresponse"></a>
<a id="schema_JobDetailResponse"></a>
<a id="tocSjobdetailresponse"></a>
<a id="tocsjobdetailresponse"></a>

```json
{
  "create_time": 0,
  "execution_end_time": 0,
  "execution_error": {
    "current_inputs": {},
    "current_outputs": {},
    "exception_message": "string",
    "exception_type": "string",
    "node_id": "string",
    "node_type": "string",
    "traceback": [
      "string"
    ]
  },
  "execution_meta": {},
  "execution_start_time": 0,
  "execution_status": {},
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outputs": {},
  "outputs_count": 0,
  "preview_output": {},
  "previewable_outputs_count": 0,
  "status": "pending",
  "update_time": 0,
  "user_id": "string",
  "workflow": {},
  "workflow_id": "string",
  "workflow_version_id": "string",
  "workspace_id": "string"
}
```

Full job details including workflow and outputs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_time|integer(int64)|true|none|Job creation timestamp (Unix timestamp in milliseconds)|
|execution_end_time|integer(int64)|false|none|Workflow execution completion timestamp (Unix milliseconds, only present for terminal states)|
|execution_error|object|false|none|Detailed execution error from ComfyUI (only for failed jobs with structured error data)|
|execution_meta|object|false|none|Node-level execution metadata (only for terminal states)|
|execution_start_time|integer(int64)|false|none|Workflow execution start timestamp (Unix milliseconds, only present once execution has started)|
|execution_status|object|false|none|ComfyUI execution status and timeline (only for terminal states)|
|id|string(uuid)|true|none|Unique job identifier|
|outputs|object|false|none|Full outputs object from ComfyUI (only for terminal states)|
|outputs_count|integer|false|none|Total number of output files (omitted for non-terminal states)|
|preview_output|object|false|none|Primary preview output (only for terminal states)|
|previewable_outputs_count|integer|false|none|Count of outputs classified as previewable media types (images, video, audio, 3D, text) — a subset of outputs_count (omitted for non-terminal states)|
|status|string|true|none|User-friendly job status|
|update_time|integer(int64)|true|none|Last update timestamp (Unix timestamp in milliseconds)|
|user_id|string|false|none|ID of the user that owns this job (see the `workspace_id`<br>description above for why this is always the caller's own id<br>on a successful response).<br>|
|workflow|object|false|none|Full ComfyUI workflow (10-100KB, omitted if not available).<br><br>Sensitive credentials are redacted before the response is returned:<br>`extra_data.api_key_comfy_org`, when present, is replaced with the<br>literal string `"[REDACTED]"`. The field is preserved (not removed)<br>so existence checks still pass, but the value is not usable.<br>|
|workflow_id|string|false|none|UUID identifying the workflow graph definition|
|workflow_version_id|string|false|none|UUID of the cloud workflow version this job is pinned to, if the<br>submission carried one (see PromptRequest's workflow_version_id).<br>Absent for jobs submitted without that association, including<br>every job submitted through the public API v2 today.<br>|
|workspace_id|string|false|none|ID of the workspace that owns this job. A successful (200)<br>response from this operation is only ever returned for the<br>caller's own job (see this operation's ownership-scoped<br>query), so this is always the caller's own workspace —<br>consumers that also need to correlate this job to its<br>live-progress broadcast channel (workspace+user scoped; see<br>the internal common/gateways/broadcast package) can use this<br>value directly rather than resolving their own identity a<br>second way.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|in_progress|
|status|completed|
|status|failed|
|status|cancelled|

<h2 id="tocS_JobEntry">JobEntry</h2>
<!-- backwards compatibility -->
<a id="schemajobentry"></a>
<a id="schema_JobEntry"></a>
<a id="tocSjobentry"></a>
<a id="tocsjobentry"></a>

```json
{
  "create_time": 0,
  "execution_end_time": 0,
  "execution_error": {
    "current_inputs": {},
    "current_outputs": {},
    "exception_message": "string",
    "exception_type": "string",
    "node_id": "string",
    "node_type": "string",
    "traceback": [
      "string"
    ]
  },
  "execution_start_time": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "outputs_count": 0,
  "preview_output": {},
  "previewable_outputs_count": 0,
  "status": "pending",
  "workflow_id": "string"
}
```

Lightweight job data for list views (workflow and full outputs excluded)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_time|integer(int64)|true|none|Job creation timestamp (Unix timestamp in milliseconds)|
|execution_end_time|integer(int64)|false|none|Workflow execution completion timestamp (Unix milliseconds, only present for terminal states)|
|execution_error|object|false|none|Detailed execution error from ComfyUI (only for failed jobs with structured error data)|
|execution_start_time|integer(int64)|false|none|Workflow execution start timestamp (Unix milliseconds, only present for terminal states)|
|id|string(uuid)|true|none|Unique job identifier|
|outputs_count|integer|false|none|Total number of output files (omitted for non-terminal states)|
|preview_output|object|false|none|Primary preview output (only present for terminal states)|
|previewable_outputs_count|integer|false|none|Count of outputs classified as previewable media types (images, video, audio, 3D, text) — a subset of outputs_count (omitted for non-terminal states)|
|status|string|true|none|User-friendly job status|
|workflow_id|string|false|none|UUID identifying the workflow graph definition|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|in_progress|
|status|completed|
|status|failed|
|status|cancelled|

<h2 id="tocS_JobOutputAsset">JobOutputAsset</h2>
<!-- backwards compatibility -->
<a id="schemajoboutputasset"></a>
<a id="schema_JobOutputAsset"></a>
<a id="tocSjoboutputasset"></a>
<a id="tocsjoboutputasset"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "hash": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "mime_type": "string",
  "name": "string",
  "node_id": "string",
  "output_index": 0,
  "output_key": "string",
  "preview_url": "string",
  "size": 0
}
```

An asset produced by a job, enriched with the per-output node context
(`node_id`, `output_key`, `output_index`) correlated from the job's
execution outputs by content hash. The node-context fields are null
when the asset cannot be matched to an output entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|Timestamp when the asset was created|
|hash|string|false|none|Blake3 hash of the asset content.|
|id|string(uuid)|true|none|Unique identifier for the asset|
|mime_type|string|false|none|MIME type of the asset|
|name|string|true|none|Name of the asset file|
|node_id|string \| null|false|none|ID of the workflow node that produced this asset, if known|
|output_index|integer \| null|false|none|Zero-based index of this asset within the node's output slot, if known|
|output_key|string \| null|false|none|Output slot key under the producing node (e.g. "images"), if known|
|preview_url|string(uri-reference)|false|none|Relative URL for asset preview/thumbnail|
|size|integer(int64)|false|none|Size of the asset in bytes|

<h2 id="tocS_JobStatusResponse">JobStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobstatusresponse"></a>
<a id="schema_JobStatusResponse"></a>
<a id="tocSjobstatusresponse"></a>
<a id="tocsjobstatusresponse"></a>

```json
{
  "assigned_inference": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "error_message": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_state_update": "1970-01-01T00:00:00Z",
  "status": "waiting_to_dispatch",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Job status information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assigned_inference|string \| null|false|none|The inference instance assigned to this job (if any)|
|created_at|string(date-time)|true|none|When the job was created|
|error_message|string \| null|false|none|Error message if the job failed|
|id|string(uuid)|true|none|The job ID|
|last_state_update|string(date-time)|false|none|When the job status was last changed|
|status|string|true|none|Current job status|
|updated_at|string(date-time)|true|none|When the job was last updated|

#### Enumerated Values

|Property|Value|
|---|---|
|status|waiting_to_dispatch|
|status|pending|
|status|in_progress|
|status|completed|
|status|error|
|status|cancelled|

<h2 id="tocS_JobsCancelRequest">JobsCancelRequest</h2>
<!-- backwards compatibility -->
<a id="schemajobscancelrequest"></a>
<a id="schema_JobsCancelRequest"></a>
<a id="tocSjobscancelrequest"></a>
<a id="tocsjobscancelrequest"></a>

```json
{
  "job_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

Request to cancel multiple jobs by ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_ids|[string(uuid)]|true|none|Job identifiers (UUIDs) to cancel.|

<h2 id="tocS_JobsCancelResponse">JobsCancelResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobscancelresponse"></a>
<a id="schema_JobsCancelResponse"></a>
<a id="tocSjobscancelresponse"></a>
<a id="tocsjobscancelresponse"></a>

```json
{
  "cancelled": [
    "string"
  ]
}
```

Response for POST /api/jobs/cancel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelled|[string]|true|none|Job IDs for which a cancel event was successfully dispatched by this<br>call. Jobs already in a terminal or cancelling state are idempotently<br>skipped and will not appear here.<br>|

<h2 id="tocS_JobsListResponse">JobsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobslistresponse"></a>
<a id="schema_JobsListResponse"></a>
<a id="tocSjobslistresponse"></a>
<a id="tocsjobslistresponse"></a>

```json
{
  "jobs": [
    {
      "create_time": 0,
      "execution_end_time": 0,
      "execution_error": {
        "current_inputs": {},
        "current_outputs": {},
        "exception_message": "string",
        "exception_type": "string",
        "node_id": "string",
        "node_type": "string",
        "traceback": [
          "string"
        ]
      },
      "execution_start_time": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "outputs_count": 0,
      "preview_output": {},
      "previewable_outputs_count": 0,
      "status": "pending",
      "workflow_id": "string"
    }
  ],
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  }
}
```

Paginated list of jobs for the authenticated user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[JobEntry](#schemajobentry)]|true|none|Array of jobs ordered by specified sort field|
|pagination|[PaginationInfo](#schemapaginationinfo)|true|none|Pagination metadata included in list responses. Supports both legacy<br>offset/limit pagination and cursor-based pagination. When cursor-based<br>pagination is used, `next_cursor` is the primary pagination token and<br>`offset`/`total` may be zero.<br>|

<h2 id="tocS_ListAssetsResponse">ListAssetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistassetsresponse"></a>
<a id="schema_ListAssetsResponse"></a>
<a id="tocSlistassetsresponse"></a>
<a id="tocslistassetsresponse"></a>

```json
{
  "assets": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "display_name": "string",
      "hash": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "is_immutable": true,
      "job_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_access_time": "1970-01-01T00:00:00Z",
      "loader_path": "string",
      "metadata": {},
      "mime_type": "string",
      "name": "string",
      "preview_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "preview_url": "http://example.com",
      "short_url": "string",
      "size": 0,
      "tags": [
        "string"
      ],
      "updated_at": "1970-01-01T00:00:00Z",
      "user_metadata": {}
    }
  ],
  "has_more": true,
  "next_cursor": "string",
  "total": 0
}
```

Paginated list of assets belonging to the authenticated user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[Asset](#schemaasset)]|true|none|List of assets matching the query|
|has_more|boolean|true|none|Whether more assets are available beyond this page|
|next_cursor|string|false|none|Opaque cursor to pass as the `after` query parameter to fetch the<br>next page. Omitted from the response when there are no more results.<br>|
|total|integer|true|none|Total number of assets matching the filters|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "has_more": true,
  "tags": [
    {
      "count": 0,
      "name": "string"
    }
  ],
  "total": 0
}
```

Paginated list of available asset tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_more|boolean|true|none|Whether more tags are available|
|tags|[[TagInfo](#schemataginfo)]|true|none|List of tags|
|total|integer|true|none|Total number of tags|

<h2 id="tocS_ModelFile">ModelFile</h2>
<!-- backwards compatibility -->
<a id="schemamodelfile"></a>
<a id="schema_ModelFile"></a>
<a id="tocSmodelfile"></a>
<a id="tocsmodelfile"></a>

```json
{
  "name": "model.safetensors",
  "pathIndex": 0
}
```

Represents a model file with metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The filename of the model|
|pathIndex|integer|true|none|Index of the path where this model is located|

<h2 id="tocS_ModelFolder">ModelFolder</h2>
<!-- backwards compatibility -->
<a id="schemamodelfolder"></a>
<a id="schema_ModelFolder"></a>
<a id="tocSmodelfolder"></a>
<a id="tocsmodelfolder"></a>

```json
{
  "folders": [
    "checkpoints"
  ],
  "name": "checkpoints"
}
```

Represents a folder containing models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folders|[string]|true|none|List of paths where models of this type are stored|
|name|string|true|none|The name of the model folder|

<h2 id="tocS_NodeInfo">NodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemanodeinfo"></a>
<a id="schema_NodeInfo"></a>
<a id="tocSnodeinfo"></a>
<a id="tocsnodeinfo"></a>

```json
{
  "api_node": true,
  "category": "string",
  "deprecated": true,
  "description": "string",
  "display_name": "string",
  "experimental": true,
  "input": {},
  "input_order": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "name": "string",
  "output": [
    "string"
  ],
  "output_is_list": [
    true
  ],
  "output_name": [
    "string"
  ],
  "output_node": true,
  "output_tooltips": [
    "string"
  ],
  "python_module": "string"
}
```

Metadata describing a single ComfyUI node type and its inputs/outputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_node|boolean|false|none|Whether this is an API node|
|category|string|false|none|Category of the node|
|deprecated|boolean|false|none|Whether the node is deprecated|
|description|string|false|none|Description of the node|
|display_name|string|false|none|Display name of the node|
|experimental|boolean|false|none|Whether the node is experimental|
|input|object|false|none|Input specifications for the node|
|input_order|object|false|none|Order of inputs for display|
|name|string|false|none|Internal name of the node|
|output|[string]|false|none|Output types of the node|
|output_is_list|[boolean]|false|none|Whether each output is a list|
|output_name|[string]|false|none|Names of the outputs|
|output_node|boolean|false|none|Whether this is an output node|
|output_tooltips|[string]|false|none|Tooltips for outputs|
|python_module|string|false|none|Python module implementing the node|

<h2 id="tocS_PaginationInfo">PaginationInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginationinfo"></a>
<a id="schema_PaginationInfo"></a>
<a id="tocSpaginationinfo"></a>
<a id="tocspaginationinfo"></a>

```json
{
  "has_more": true,
  "limit": 1,
  "next_cursor": "string",
  "offset": 0,
  "total": 0
}
```

Pagination metadata included in list responses. Supports both legacy
offset/limit pagination and cursor-based pagination. When cursor-based
pagination is used, `next_cursor` is the primary pagination token and
`offset`/`total` may be zero.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_more|boolean|true|none|Whether more items are available beyond this page|
|limit|integer|true|none|Items per page|
|next_cursor|string|false|none|Opaque cursor for the next page. Pass this value as the `after`<br>query parameter on the next request. Empty or absent when there<br>are no more results.<br>|
|offset|integer|true|none|**Deprecated.** Current offset (0-based). Deprecated: use cursor-based pagination.|
|total|integer|true|none|Total number of items matching filters (may be 0 when using cursor pagination)|

<h2 id="tocS_PromptErrorResponse">PromptErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprompterrorresponse"></a>
<a id="schema_PromptErrorResponse"></a>
<a id="tocSprompterrorresponse"></a>
<a id="tocsprompterrorresponse"></a>

```json
{}
```

Error response for ComfyUI prompt execution.

<h2 id="tocS_PromptInfo">PromptInfo</h2>
<!-- backwards compatibility -->
<a id="schemapromptinfo"></a>
<a id="schema_PromptInfo"></a>
<a id="tocSpromptinfo"></a>
<a id="tocspromptinfo"></a>

```json
{
  "exec_info": {
    "queue_remaining": 0
  }
}
```

Metadata about the currently running and queued prompts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exec_info|object|false|none|none|

<h2 id="tocS_PromptRequest">PromptRequest</h2>
<!-- backwards compatibility -->
<a id="schemapromptrequest"></a>
<a id="schema_PromptRequest"></a>
<a id="tocSpromptrequest"></a>
<a id="tocspromptrequest"></a>

```json
{
  "extra_data": {},
  "front": true,
  "number": 0,
  "partial_execution_targets": [
    "string"
  ],
  "prompt": {},
  "workflow_id": "string",
  "workflow_metadata": {
    "property1": "string",
    "property2": "string"
  },
  "workflow_version_id": "string"
}
```

Request body for submitting a ComfyUI workflow prompt for execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra_data|object|false|none|Extra data to be associated with the prompt|
|front|boolean|false|none|If true, adds the prompt to the front of the queue|
|number|number|false|none|Priority number for the queue (lower numbers have higher priority)|
|partial_execution_targets|[string]|false|none|List of node names to execute|
|prompt|object|true|none|The workflow graph to execute|
|workflow_id|string|false|none|UUID identifying the cloud workflow entity to associate with this job|
|workflow_metadata|object|false|none|Key/values echoed on the json websocket messages of this prompt that carry a `prompt_id`, so a client can tell which of its open workflows a message belongs to. Messages without a `prompt_id`, such as `status`, do not carry it, because a single socket serves every open workflow and such a message has no one owner. The server does not interpret the contents. Limited to 256 bytes serialised; a larger or non-object value is ignored. When this field is omitted, the server falls back to `{workflow_id: extra_data.extra_pnginfo.workflow.id}` if the submitted workflow carries an id, so a client that sends only the workflow gets the same messages. Note the `workflow_id` key a client typically sends here is the graph id from `extra_pnginfo.workflow.id`, which is not the same thing as the `workflow_id` field above.|
|workflow_version_id|string|false|none|UUID identifying the workflow version to associate with this job|

<h2 id="tocS_PromptResponse">PromptResponse</h2>
<!-- backwards compatibility -->
<a id="schemapromptresponse"></a>
<a id="schema_PromptResponse"></a>
<a id="tocSpromptresponse"></a>
<a id="tocspromptresponse"></a>

```json
{
  "node_errors": {},
  "number": 0,
  "prompt_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Response returned after successfully queuing a workflow prompt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|node_errors|object|false|none|Any errors in the nodes of the prompt|
|number|number|false|none|Priority number in the queue|
|prompt_id|string(uuid)|false|none|Unique identifier for the prompt execution|

<h2 id="tocS_PublishWorkflowAssetsRequest">PublishWorkflowAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishworkflowassetsrequest"></a>
<a id="schema_PublishWorkflowAssetsRequest"></a>
<a id="tocSpublishworkflowassetsrequest"></a>
<a id="tocspublishworkflowassetsrequest"></a>

```json
{
  "asset_ids": [
    "string"
  ]
}
```

Request body for publishing workflow assets to the Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_ids|[string]|true|none|IDs of assets (inputs and models) to snapshot.|

<h2 id="tocS_PublishedWorkflowDetail">PublishedWorkflowDetail</h2>
<!-- backwards compatibility -->
<a id="schemapublishedworkflowdetail"></a>
<a id="schema_PublishedWorkflowDetail"></a>
<a id="tocSpublishedworkflowdetail"></a>
<a id="tocspublishedworkflowdetail"></a>

```json
{
  "assets": [
    {
      "id": "string",
      "in_library": true,
      "model": true,
      "name": "string",
      "preview_url": "string",
      "public": true,
      "storage_url": "string"
    }
  ],
  "listed": true,
  "name": "string",
  "publish_time": "1970-01-01T00:00:00Z",
  "share_id": "string",
  "workflow_id": "string",
  "workflow_json": {}
}
```

Full detail of a publicly published workflow on the Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[AssetInfo](#schemaassetinfo)]|true|none|Published assets with their library status for the caller.|
|listed|boolean|true|none|none|
|name|string|true|none|Human-readable workflow name.|
|publish_time|string(date-time) \| null|false|none|none|
|share_id|string|true|none|none|
|workflow_id|string|true|none|none|
|workflow_json|object|true|none|The workflow JSON content at publish time.|

<h2 id="tocS_QueueInfo">QueueInfo</h2>
<!-- backwards compatibility -->
<a id="schemaqueueinfo"></a>
<a id="schema_QueueInfo"></a>
<a id="tocSqueueinfo"></a>
<a id="tocsqueueinfo"></a>

```json
{
  "queue_pending": [
    [
      null,
      null,
      null,
      null,
      null
    ]
  ],
  "queue_running": [
    [
      null,
      null,
      null,
      null,
      null
    ]
  ]
}
```

Queue information with pending and running jobs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queue_pending|[[object]]|false|none|Array of pending job items (ordered by creation time, oldest first)|
|queue_running|[[object]]|false|none|Array of currently running job items|

<h2 id="tocS_QueueManageRequest">QueueManageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueuemanagerequest"></a>
<a id="schema_QueueManageRequest"></a>
<a id="tocSqueuemanagerequest"></a>
<a id="tocsqueuemanagerequest"></a>

```json
{
  "clear": true,
  "delete": [
    "string"
  ]
}
```

Request to manage queue operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clear|boolean|false|none|If true, clear all pending jobs from the queue|
|delete|[string]|false|none|Array of job IDs to cancel; pending and running jobs transition to cancelled|

<h2 id="tocS_QueueManageResponse">QueueManageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueuemanageresponse"></a>
<a id="schema_QueueManageResponse"></a>
<a id="tocSqueuemanageresponse"></a>
<a id="tocsqueuemanageresponse"></a>

```json
{
  "cleared": true,
  "deleted": [
    "string"
  ]
}
```

Response after a queue management action (delete or clear).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cleared|boolean|false|none|Whether the queue was cleared|
|deleted|[string]|false|none|Array of job IDs that were successfully cancelled|

<h2 id="tocS_SystemStatsResponse">SystemStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasystemstatsresponse"></a>
<a id="schema_SystemStatsResponse"></a>
<a id="tocSsystemstatsresponse"></a>
<a id="tocssystemstatsresponse"></a>

```json
{
  "devices": [
    {
      "name": "string",
      "type": "string",
      "vram_free": 0,
      "vram_total": 0
    }
  ],
  "system": {
    "argv": [
      "string"
    ],
    "cloud_version": "string",
    "comfyui_frontend_version": "string",
    "comfyui_version": "string",
    "deploy_environment": "string",
    "embedded_python": true,
    "os": "string",
    "python_version": "string",
    "pytorch_version": "string",
    "ram_free": 0,
    "ram_total": 0,
    "workflow_templates_version": "string"
  }
}
```

System statistics response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[object]|true|none|none|
|system|object|true|none|none|

<h2 id="tocS_TagInfo">TagInfo</h2>
<!-- backwards compatibility -->
<a id="schemataginfo"></a>
<a id="schema_TagInfo"></a>
<a id="tocStaginfo"></a>
<a id="tocstaginfo"></a>

```json
{
  "count": 0,
  "name": "string"
}
```

Metadata for a single tag that can be applied to assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|Number of assets using this tag|
|name|string|true|none|Tag name|

<h2 id="tocS_TagsModificationResponse">TagsModificationResponse</h2>
<!-- backwards compatibility -->
<a id="schematagsmodificationresponse"></a>
<a id="schema_TagsModificationResponse"></a>
<a id="tocStagsmodificationresponse"></a>
<a id="tocstagsmodificationresponse"></a>

```json
{
  "added": [
    "string"
  ],
  "already_present": [
    "string"
  ],
  "not_present": [
    "string"
  ],
  "removed": [
    "string"
  ],
  "total_tags": [
    "string"
  ]
}
```

Response after adding, updating, or removing tags on an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|[string]|false|none|Tags that were successfully added (for add operation)|
|already_present|[string]|false|none|Tags that were already present (for add operation)|
|not_present|[string]|false|none|Tags that were not present (for remove operation)|
|removed|[string]|false|none|Tags that were successfully removed (for remove operation)|
|total_tags|[string]|true|none|All tags on the asset after the operation|

<h2 id="tocS_TaskEntry">TaskEntry</h2>
<!-- backwards compatibility -->
<a id="schemataskentry"></a>
<a id="schema_TaskEntry"></a>
<a id="tocStaskentry"></a>
<a id="tocstaskentry"></a>

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "create_time": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "started_at": "1970-01-01T00:00:00Z",
  "status": "created",
  "task_name": "string"
}
```

Task data for list views

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed_at|string(date-time)|false|none|When task completed or failed (null if not finished)|
|create_time|string(date-time)|true|none|Task creation timestamp|
|id|string(uuid)|true|none|Unique task identifier|
|started_at|string(date-time)|false|none|When task execution started (null if not started)|
|status|string|true|none|Current task status|
|task_name|string|true|none|Task type name (e.g., model_upload)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|created|
|status|running|
|status|completed|
|status|failed|

<h2 id="tocS_TaskResponse">TaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskresponse"></a>
<a id="schema_TaskResponse"></a>
<a id="tocStaskresponse"></a>
<a id="tocstaskresponse"></a>

```json
{
  "completed_at": "1970-01-01T00:00:00Z",
  "create_time": "1970-01-01T00:00:00Z",
  "error_message": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "idempotency_key": "string",
  "payload": {},
  "result": {},
  "started_at": "1970-01-01T00:00:00Z",
  "status": "created",
  "task_name": "string",
  "update_time": "1970-01-01T00:00:00Z"
}
```

Full task details including payload and result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed_at|string(date-time)|false|none|When task completed or failed (null if not finished)|
|create_time|string(date-time)|true|none|Task creation timestamp|
|error_message|string|false|none|Error message on failure (null if not failed)|
|id|string(uuid)|true|none|Unique task identifier|
|idempotency_key|string|true|none|Caller-provided key for idempotent task creation|
|payload|object|true|none|Task input data|
|result|object|false|none|Task output data (null if not completed)|
|started_at|string(date-time)|false|none|When task execution started (null if not started)|
|status|string|true|none|Current task status|
|task_name|string|true|none|Task type name (e.g., model_upload)|
|update_time|string(date-time)|true|none|Task last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|status|created|
|status|running|
|status|completed|
|status|failed|

<h2 id="tocS_TasksListResponse">TasksListResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskslistresponse"></a>
<a id="schema_TasksListResponse"></a>
<a id="tocStaskslistresponse"></a>
<a id="tocstaskslistresponse"></a>

```json
{
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  },
  "tasks": [
    {
      "completed_at": "1970-01-01T00:00:00Z",
      "create_time": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "started_at": "1970-01-01T00:00:00Z",
      "status": "created",
      "task_name": "string"
    }
  ]
}
```

Paginated list of background tasks for the authenticated user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[PaginationInfo](#schemapaginationinfo)|true|none|Pagination metadata included in list responses. Supports both legacy<br>offset/limit pagination and cursor-based pagination. When cursor-based<br>pagination is used, `next_cursor` is the primary pagination token and<br>`offset`/`total` may be zero.<br>|
|tasks|[[TaskEntry](#schemataskentry)]|true|none|Array of tasks ordered by create_time|

<h2 id="tocS_UpdateWorkflowRequest">UpdateWorkflowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateworkflowrequest"></a>
<a id="schema_UpdateWorkflowRequest"></a>
<a id="tocSupdateworkflowrequest"></a>
<a id="tocsupdateworkflowrequest"></a>

```json
{
  "default_view": "workflow",
  "description": "string",
  "name": "string"
}
```

Request body for updating an existing saved workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_view|string|false|none|New default view mode|
|description|string|false|none|New description|
|name|string|false|none|New display name|

#### Enumerated Values

|Property|Value|
|---|---|
|default_view|workflow|
|default_view|app|

<h2 id="tocS_UserDataResponseFull">UserDataResponseFull</h2>
<!-- backwards compatibility -->
<a id="schemauserdataresponsefull"></a>
<a id="schema_UserDataResponseFull"></a>
<a id="tocSuserdataresponsefull"></a>
<a id="tocsuserdataresponsefull"></a>

```json
{
  "modified": 0,
  "path": "string",
  "size": 0
}
```

User data listing entry with file metadata (path, size, modification time).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modified|integer(int64)|false|none|UNIX timestamp of the last modification in milliseconds.|
|path|string|false|none|none|
|size|integer|false|none|none|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "id": "string",
  "status": "string"
}
```

User information response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Firebase UID of the authenticated user|
|status|string|true|none|User status (always "active" for authenticated users)|

<h2 id="tocS_WorkflowForkedFrom">WorkflowForkedFrom</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowforkedfrom"></a>
<a id="schema_WorkflowForkedFrom"></a>
<a id="tocSworkflowforkedfrom"></a>
<a id="tocsworkflowforkedfrom"></a>

```json
{
  "workflow_id": "string",
  "workflow_version_id": "string"
}
```

Reference to the parent workflow from which this workflow was forked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_id|string|false|none|none|
|workflow_version_id|string|false|none|none|

<h2 id="tocS_WorkflowListResponse">WorkflowListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowlistresponse"></a>
<a id="schema_WorkflowListResponse"></a>
<a id="tocSworkflowlistresponse"></a>
<a id="tocsworkflowlistresponse"></a>

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "created_by": "string",
      "default_view": "workflow",
      "description": "string",
      "forked_from": {
        "workflow_id": "string",
        "workflow_version_id": "string"
      },
      "id": "string",
      "latest_version": 0,
      "name": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "has_more": true,
    "limit": 1,
    "next_cursor": "string",
    "offset": 0,
    "total": 0
  }
}
```

Paginated list of saved workflows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WorkflowResponse](#schemaworkflowresponse)]|true|none|none|
|pagination|[PaginationInfo](#schemapaginationinfo)|true|none|Pagination metadata included in list responses. Supports both legacy<br>offset/limit pagination and cursor-based pagination. When cursor-based<br>pagination is used, `next_cursor` is the primary pagination token and<br>`offset`/`total` may be zero.<br>|

<h2 id="tocS_WorkflowPublishInfo">WorkflowPublishInfo</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowpublishinfo"></a>
<a id="schema_WorkflowPublishInfo"></a>
<a id="tocSworkflowpublishinfo"></a>
<a id="tocsworkflowpublishinfo"></a>

```json
{
  "assets": [
    {
      "id": "string",
      "in_library": true,
      "model": true,
      "name": "string",
      "preview_url": "string",
      "public": true,
      "storage_url": "string"
    }
  ],
  "listed": true,
  "publish_time": "1970-01-01T00:00:00Z",
  "share_id": "string",
  "workflow_id": "string"
}
```

Publishing metadata for a workflow shared to the Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[AssetInfo](#schemaassetinfo)]|true|none|Published assets (inputs and models).|
|listed|boolean|true|none|none|
|publish_time|string(date-time) \| null|false|none|none|
|share_id|string|true|none|none|
|workflow_id|string|true|none|none|

<h2 id="tocS_WorkflowResponse">WorkflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowresponse"></a>
<a id="schema_WorkflowResponse"></a>
<a id="tocSworkflowresponse"></a>
<a id="tocsworkflowresponse"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "default_view": "workflow",
  "description": "string",
  "forked_from": {
    "workflow_id": "string",
    "workflow_version_id": "string"
  },
  "id": "string",
  "latest_version": 0,
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Full workflow entity including metadata and version history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|none|
|created_by|string|true|none|none|
|default_view|string|false|none|none|
|description|string|false|none|none|
|forked_from|[WorkflowForkedFrom](#schemaworkflowforkedfrom)|false|none|Reference to the parent workflow from which this workflow was forked.|
|id|string|true|none|none|
|latest_version|integer|true|none|none|
|name|string|false|none|none|
|updated_at|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|default_view|workflow|
|default_view|app|

<h2 id="tocS_WorkflowVersionContentResponse">WorkflowVersionContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowversioncontentresponse"></a>
<a id="schema_WorkflowVersionContentResponse"></a>
<a id="tocSworkflowversioncontentresponse"></a>
<a id="tocsworkflowversioncontentresponse"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "dependency_asset_ids": [
    "string"
  ],
  "id": "string",
  "version": 0,
  "workflow_json": {}
}
```

Full workflow version including the serialized workflow JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|none|
|created_by|string|true|none|none|
|dependency_asset_ids|[string]|false|none|none|
|id|string|true|none|none|
|version|integer|true|none|none|
|workflow_json|object|true|none|none|

<h2 id="tocS_WorkflowVersionResponse">WorkflowVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowversionresponse"></a>
<a id="schema_WorkflowVersionResponse"></a>
<a id="tocSworkflowversionresponse"></a>
<a id="tocsworkflowversionresponse"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "string",
  "id": "string",
  "latest_version": 0,
  "version": 0
}
```

Metadata for a single workflow version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|none|
|created_by|string|true|none|none|
|id|string|true|none|none|
|latest_version|integer|true|none|none|
|version|integer|true|none|none|
