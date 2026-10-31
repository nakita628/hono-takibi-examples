<h1 id="arize-phoenix-rest-api">Arize-Phoenix REST API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Schema for Arize-Phoenix REST API

<h1 id="arize-phoenix-rest-api-annotationconfigs">annotation_configs</h1>

## List annotation configurations

<a id="opIdlistAnnotationConfigs"></a>

> Code samples

```bash
curl http://localhost:6006/v1/annotation_configs \
  -H 'Accept: application/json'
```

`GET /v1/annotation_configs`

Retrieve a paginated list of all annotation configurations in the system.

<h3 id="list-annotation-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded annotation config ID)|
|limit|query|integer|false|Maximum number of configs to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "type": "CATEGORICAL",
      "description": "string",
      "optimization_direction": "MINIMIZE",
      "values": [
        {
          "label": "string",
          "score": 0
        }
      ],
      "id": "string"
    }
  ],
  "next_cursor": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="list-annotation-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of annotation configurations with pagination information|[GetAnnotationConfigsResponseBody](#schemagetannotationconfigsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an annotation configuration

<a id="opIdcreateAnnotationConfig"></a>

> Code samples

```bash
curl http://localhost:6006/v1/annotation_configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ]
  }'
```

`POST /v1/annotation_configs`

> Body parameter

```json
{
  "name": "string",
  "type": "CATEGORICAL",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "values": [
    {
      "label": "string",
      "score": 0
    }
  ]
}
```

<h3 id="create-an-annotation-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAnnotationConfigData](#schemacreateannotationconfigdata)|true|none|
|» *oneOf*|body|[CategoricalAnnotationConfigData](#schemacategoricalannotationconfigdata)|false|none|
|» *oneOf*|body|[ContinuousAnnotationConfigData](#schemacontinuousannotationconfigdata)|false|none|
|» *oneOf*|body|[FreeformAnnotationConfigData](#schemafreeformannotationconfigdata)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-an-annotation-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CreateAnnotationConfigResponseBody](#schemacreateannotationconfigresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an annotation configuration by ID or name

<a id="opIdgetAnnotationConfig"></a>

> Code samples

```bash
curl http://localhost:6006/v1/annotation_configs/string \
  -H 'Accept: application/json'
```

`GET /v1/annotation_configs/{config_identifier}`

<h3 id="get-an-annotation-configuration-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|config_identifier|path|string|true|ID or name of the annotation configuration|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-an-annotation-configuration-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetAnnotationConfigResponseBody](#schemagetannotationconfigresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an annotation configuration

<a id="opIdupdateAnnotationConfig"></a>

> Code samples

```bash
curl http://localhost:6006/v1/annotation_configs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ]
  }'
```

`PUT /v1/annotation_configs/{config_id}`

> Body parameter

```json
{
  "name": "string",
  "type": "CATEGORICAL",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "values": [
    {
      "label": "string",
      "score": 0
    }
  ]
}
```

<h3 id="update-an-annotation-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|config_id|path|string|true|ID of the annotation configuration|
|body|body|[CreateAnnotationConfigData](#schemacreateannotationconfigdata)|true|none|
|» *oneOf*|body|[CategoricalAnnotationConfigData](#schemacategoricalannotationconfigdata)|false|none|
|» *oneOf*|body|[ContinuousAnnotationConfigData](#schemacontinuousannotationconfigdata)|false|none|
|» *oneOf*|body|[FreeformAnnotationConfigData](#schemafreeformannotationconfigdata)|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="update-an-annotation-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[UpdateAnnotationConfigResponseBody](#schemaupdateannotationconfigresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an annotation configuration

<a id="opIddeleteAnnotationConfig"></a>

> Code samples

```bash
curl http://localhost:6006/v1/annotation_configs/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/annotation_configs/{config_id}`

<h3 id="delete-an-annotation-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|config_id|path|string|true|ID of the annotation configuration|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-an-annotation-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DeleteAnnotationConfigResponseBody](#schemadeleteannotationconfigresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List annotation configurations assigned to a project

<a id="opIdgetProjectAnnotationConfigs"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/annotation_configs \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/annotation_configs`

Retrieve a paginated list of the annotation configurations assigned to a project, identified by either project ID or project name.

<h3 id="list-annotation-configurations-assigned-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded annotation config ID)|
|limit|query|integer|false|Maximum number of configs to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "type": "CATEGORICAL",
      "description": "string",
      "optimization_direction": "MINIMIZE",
      "values": [
        {
          "label": "string",
          "score": 0
        }
      ],
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-annotation-configurations-assigned-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of the project's annotation configurations with pagination information|[GetProjectAnnotationConfigsResponseBody](#schemagetprojectannotationconfigsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Replace the set of annotation configurations assigned to a project

<a id="opIdsetProjectAnnotationConfigs"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/annotation_configs \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotation_config_ids": [
      "string"
    ]
  }'
```

`PUT /v1/projects/{project_identifier}/annotation_configs`

Replace the project's entire set of assigned annotation configurations with the provided set. The server diffs the desired set against the current set: configs in the body but not assigned are added, and configs assigned but not in the body are removed. An empty array clears all assignments.

> Body parameter

```json
{
  "annotation_config_ids": [
    "string"
  ]
}
```

<h3 id="replace-the-set-of-annotation-configurations-assigned-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|body|body|[SetProjectAnnotationConfigsRequestBody](#schemasetprojectannotationconfigsrequestbody)|true|none|
|» annotation_config_ids|body|[string]|true|The complete set of annotation configuration GlobalIDs that should be assigned to the project. Configs not in this list are unassigned; an empty list clears all assignments.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "type": "CATEGORICAL",
      "description": "string",
      "optimization_direction": "MINIMIZE",
      "values": [
        {
          "label": "string",
          "score": 0
        }
      ],
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="replace-the-set-of-annotation-configurations-assigned-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The resulting set of annotation configurations assigned to the project|[SetProjectAnnotationConfigsResponseBody](#schemasetprojectannotationconfigsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Assign an annotation configuration to a project

<a id="opIdassignAnnotationConfigToProject"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/annotation_configs/string \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /v1/projects/{project_identifier}/annotation_configs/{config_identifier}`

Assign an annotation configuration to a project. This operation is idempotent: re-assigning a config that is already assigned is a no-op that returns the config. Both the project and the config are identified by either ID or name.

<h3 id="assign-an-annotation-configuration-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|config_identifier|path|string|true|The annotation configuration identifier: either ID or name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
}
```

<h3 id="assign-an-annotation-configuration-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The annotation configuration assigned to the project|[AssignAnnotationConfigToProjectResponseBody](#schemaassignannotationconfigtoprojectresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Unassign an annotation configuration from a project

<a id="opIdunassignAnnotationConfigFromProject"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/annotation_configs/string \
  -X DELETE
```

`DELETE /v1/projects/{project_identifier}/annotation_configs/{config_identifier}`

Unassign an annotation configuration from a project. This operation is idempotent: unassigning a config that is not currently assigned is a no-op. The underlying annotation config is not deleted. Both the project and the config are identified by either ID or name.

<h3 id="unassign-an-annotation-configuration-from-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|config_identifier|path|string|true|The annotation configuration identifier: either ID or name.|

<h3 id="unassign-an-annotation-configuration-from-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful unassignment|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-annotations">annotations</h1>

## Get span annotations filtered by span_ids and/or identifier.

<a id="opIdlistSpanAnnotationsBySpanIds"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/span_annotations \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/span_annotations`

Return span annotations for a project, filtered by `span_ids`, `identifier`, or both. At least one of `span_ids` or `identifier` must be supplied. When both are supplied, results are the AND-intersection of the two filters.

<h3 id="get-span-annotations-filtered-by-spanids-andor-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|span_ids|query|[string] \| null|false|Optional list of span ids to fetch annotations for. If omitted, `identifier` must be supplied.|
|identifier|query|[string] \| null|false|Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `span_ids` must be supplied. When combined with `span_ids`, results are the AND-intersection of both filters.|
|include_annotation_names|query|[string] \| null|false|Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).|
|exclude_annotation_names|query|[string] \| null|false|Optional list of annotation names to exclude from results.|
|cursor|query|string \| null|false|A cursor for pagination|
|limit|query|integer|false|The maximum number of annotations to return in a single request|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "source": "API",
      "user_id": "string",
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "span_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="get-span-annotations-filtered-by-spanids-andor-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SpanAnnotationsResponseBody](#schemaspanannotationsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Project or spans not found|Inline|
|422|Unprocessable Entity|Invalid parameters|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete span annotations in a project that match the supplied filter.

<a id="opIddeleteSpanAnnotations"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/span_annotations \
  -X DELETE
```

`DELETE /v1/projects/{project_identifier}/span_annotations`

Hard-delete span annotations within the named project that match the
supplied filter.

- The request must either supply both `start_time` AND `end_time`
  to bound the delete to a `[start_time, end_time)` time window,
  OR set `delete_all=true` to acknowledge an unbounded sweep. A request
  that satisfies neither is rejected with 422.
- `name`, `identifier`, and `annotator_kind` are optional narrowing
  filters; on their own they do NOT authorize the request — they only
  narrow within an already-authorized request (bounded time range or
  `delete_all=true`).
- All supplied filters are combined with AND. `name` and `identifier`,
  when present, must be non-empty.
- `start_time` is inclusive (`>=`); `end_time` is exclusive
  (`<`). When both are supplied, `start_time` must be strictly earlier
  than `end_time` (else 422). A half-bounded range (only one of
  the two) does NOT satisfy the gate and is rejected unless
  `delete_all=true` is also set. Naive datetimes are interpreted as UTC.
- The endpoint is idempotent: a request that matches no rows still
  returns 204.
- When authentication is enabled, non-admin callers can only delete rows
  they own (`user_id == current_user.id`); admins delete all matching
  rows.

<h3 id="delete-span-annotations-in-a-project-that-match-the-supplied-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|name|query|string \| null|false|Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.|
|identifier|query|string \| null|false|Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.|
|annotator_kind|query|string \| null|false|Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.|
|start_time|query|string(date-time) \| null|false|Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.|
|end_time|query|string(date-time) \| null|false|Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.|
|delete_all|query|boolean|false|Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.|

<h3 id="delete-span-annotations-in-a-project-that-match-the-supplied-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Project not found|Inline|
|422|Unprocessable Entity|Invalid parameters|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get trace annotations filtered by trace_ids and/or identifier.

<a id="opIdlistTraceAnnotationsByTraceIds"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/trace_annotations \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/trace_annotations`

Return trace annotations for a project, filtered by `trace_ids`, `identifier`, or both. At least one of `trace_ids` or `identifier` must be supplied. When both are supplied, results are the AND-intersection of the two filters.

<h3 id="get-trace-annotations-filtered-by-traceids-andor-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|trace_ids|query|[string] \| null|false|Optional list of trace ids to fetch annotations for. If omitted, `identifier` must be supplied.|
|identifier|query|[string] \| null|false|Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `trace_ids` must be supplied. When combined with `trace_ids`, results are the AND-intersection of both filters.|
|include_annotation_names|query|[string] \| null|false|Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).|
|exclude_annotation_names|query|[string] \| null|false|Optional list of annotation names to exclude from results.|
|cursor|query|string \| null|false|A cursor for pagination|
|limit|query|integer|false|The maximum number of annotations to return in a single request|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "source": "API",
      "user_id": "string",
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "trace_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="get-trace-annotations-filtered-by-traceids-andor-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TraceAnnotationsResponseBody](#schematraceannotationsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Project or traces not found|Inline|
|422|Unprocessable Entity|Invalid parameters|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete trace annotations in a project that match the supplied filter.

<a id="opIddeleteTraceAnnotations"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/trace_annotations \
  -X DELETE
```

`DELETE /v1/projects/{project_identifier}/trace_annotations`

Hard-delete trace annotations within the named project that match the
supplied filter.

- The request must either supply both `start_time` AND `end_time`
  to bound the delete to a `[start_time, end_time)` time window,
  OR set `delete_all=true` to acknowledge an unbounded sweep. A request
  that satisfies neither is rejected with 422.
- `name`, `identifier`, and `annotator_kind` are optional narrowing
  filters; on their own they do NOT authorize the request — they only
  narrow within an already-authorized request (bounded time range or
  `delete_all=true`).
- All supplied filters are combined with AND. `name` and `identifier`,
  when present, must be non-empty.
- `start_time` is inclusive (`>=`); `end_time` is exclusive
  (`<`). When both are supplied, `start_time` must be strictly earlier
  than `end_time` (else 422). A half-bounded range (only one of
  the two) does NOT satisfy the gate and is rejected unless
  `delete_all=true` is also set. Naive datetimes are interpreted as UTC.
- The endpoint is idempotent: a request that matches no rows still
  returns 204.
- When authentication is enabled, non-admin callers can only delete rows
  they own (`user_id == current_user.id`); admins delete all matching
  rows.

<h3 id="delete-trace-annotations-in-a-project-that-match-the-supplied-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|name|query|string \| null|false|Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.|
|identifier|query|string \| null|false|Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.|
|annotator_kind|query|string \| null|false|Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.|
|start_time|query|string(date-time) \| null|false|Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.|
|end_time|query|string(date-time) \| null|false|Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.|
|delete_all|query|boolean|false|Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.|

<h3 id="delete-trace-annotations-in-a-project-that-match-the-supplied-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Project not found|Inline|
|422|Unprocessable Entity|Invalid parameters|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get session annotations filtered by session_ids and/or identifier.

<a id="opIdlistSessionAnnotationsBySessionIds"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/session_annotations \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/session_annotations`

Return session annotations for a project, filtered by `session_ids`, `identifier`, or both. At least one of `session_ids` or `identifier` must be supplied. When both are supplied, results are the AND-intersection of the two filters.

<h3 id="get-session-annotations-filtered-by-sessionids-andor-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|session_ids|query|[string] \| null|false|Optional list of session ids to fetch annotations for. If omitted, `identifier` must be supplied.|
|identifier|query|[string] \| null|false|Optional list of annotation identifiers to filter by. Each value must be non-empty. If omitted, `session_ids` must be supplied. When combined with `session_ids`, results are the AND-intersection of both filters.|
|include_annotation_names|query|[string] \| null|false|Optional list of annotation names to include. If provided, only annotations with these names will be returned (allowlist). When omitted, the response includes every matching row regardless of name (no annotation names are excluded by default).|
|exclude_annotation_names|query|[string] \| null|false|Optional list of annotation names to exclude from results.|
|cursor|query|string \| null|false|A cursor for pagination|
|limit|query|integer|false|The maximum number of annotations to return in a single request|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "source": "API",
      "user_id": "string",
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "session_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="get-session-annotations-filtered-by-sessionids-andor-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SessionAnnotationsResponseBody](#schemasessionannotationsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Project or sessions not found|Inline|
|422|Unprocessable Entity|Invalid parameters|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete session annotations in a project that match the supplied filter.

<a id="opIddeleteSessionAnnotations"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/session_annotations \
  -X DELETE
```

`DELETE /v1/projects/{project_identifier}/session_annotations`

Hard-delete session annotations within the named project that match the
supplied filter.

- The request must either supply both `start_time` AND `end_time`
  to bound the delete to a `[start_time, end_time)` time window,
  OR set `delete_all=true` to acknowledge an unbounded sweep. A request
  that satisfies neither is rejected with 422.
- `name`, `identifier`, and `annotator_kind` are optional narrowing
  filters; on their own they do NOT authorize the request — they only
  narrow within an already-authorized request (bounded time range or
  `delete_all=true`).
- All supplied filters are combined with AND. `name` and `identifier`,
  when present, must be non-empty.
- `start_time` is inclusive (`>=`); `end_time` is exclusive
  (`<`). When both are supplied, `start_time` must be strictly earlier
  than `end_time` (else 422). A half-bounded range (only one of
  the two) does NOT satisfy the gate and is rejected unless
  `delete_all=true` is also set. Naive datetimes are interpreted as UTC.
- The endpoint is idempotent: a request that matches no rows still
  returns 204.
- When authentication is enabled, non-admin callers can only delete rows
  they own (`user_id == current_user.id`); admins delete all matching
  rows.

<h3 id="delete-session-annotations-in-a-project-that-match-the-supplied-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|name|query|string \| null|false|Optional annotation name. When provided, must be non-empty and narrows the delete to annotations of that name.|
|identifier|query|string \| null|false|Optional annotation identifier. When provided, must be non-empty and narrows the delete to annotations with that identifier.|
|annotator_kind|query|string \| null|false|Optional annotator kind. When provided, narrows the delete to annotations produced by this annotator kind.|
|start_time|query|string(date-time) \| null|false|Optional inclusive lower bound on `created_at` (>=). Naive datetimes are interpreted as UTC.|
|end_time|query|string(date-time) \| null|false|Optional exclusive upper bound on `created_at` (<). Naive datetimes are interpreted as UTC.|
|delete_all|query|boolean|false|Opt-in flag that authorizes the request without a bounded `[start_time, end_time)` time window. When `false` (default) or absent, the request must supply both `start_time` AND `end_time` to bound the delete. When `true`, the time-range bound is waived and any other filters (`name`, `identifier`, `annotator_kind`) still narrow the delete within the project — e.g. `delete_all=true&name=X` deletes all annotations named X regardless of time.|

<h3 id="delete-session-annotations-in-a-project-that-match-the-supplied-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Project not found|Inline|
|422|Unprocessable Entity|Invalid parameters|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-datasets">datasets</h1>

## List dataset labels

<a id="opIdlistDatasetLabels"></a>

> Code samples

```bash
curl http://localhost:6006/v1/dataset_labels \
  -H 'Accept: application/json'
```

`GET /v1/dataset_labels`

Retrieve a paginated list of all dataset labels in the system.

<h3 id="list-dataset-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination (a dataset label GlobalID)|
|limit|query|integer|false|The max number of dataset labels to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-dataset-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetDatasetLabelsResponseBody](#schemagetdatasetlabelsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a dataset label

<a id="opIdcreateDatasetLabel"></a>

> Code samples

```bash
curl http://localhost:6006/v1/dataset_labels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "color": "string",
    "description": "string"
  }'
```

`POST /v1/dataset_labels`

> Body parameter

```json
{
  "name": "string",
  "color": "string",
  "description": "string"
}
```

<h3 id="create-a-dataset-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDatasetLabelRequestBody](#schemacreatedatasetlabelrequestbody)|true|none|
|» name|body|string|true|The name of the dataset label|
|» color|body|string|true|A lowercase hex color code (e.g. '#00cc88') used to display the label|
|» description|body|string \| null|false|An optional description of the dataset label|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

<h3 id="create-a-dataset-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[CreateDatasetLabelResponseBody](#schemacreatedatasetlabelresponsebody)|
|403|Forbidden|Forbidden|Inline|
|409|Conflict|A dataset label with the same name already exists|Inline|
|422|Unprocessable Entity|Invalid request body|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get a dataset label by ID

<a id="opIdgetDatasetLabel"></a>

> Code samples

```bash
curl http://localhost:6006/v1/dataset_labels/string \
  -H 'Accept: application/json'
```

`GET /v1/dataset_labels/{label_id}`

<h3 id="get-a-dataset-label-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_id|path|string|true|The ID of the dataset label|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

<h3 id="get-a-dataset-label-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetDatasetLabelResponseBody](#schemagetdatasetlabelresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset label not found|Inline|
|422|Unprocessable Entity|Invalid dataset label ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a dataset label by ID

<a id="opIddeleteDatasetLabel"></a>

> Code samples

```bash
curl http://localhost:6006/v1/dataset_labels/string \
  -X DELETE
```

`DELETE /v1/dataset_labels/{label_id}`

Delete a dataset label. This also removes the label from every dataset it is applied to.

<h3 id="delete-a-dataset-label-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_id|path|string|true|The ID of the dataset label|

<h3 id="delete-a-dataset-label-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset label not found|Inline|
|422|Unprocessable Entity|Invalid dataset label ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a dataset label by ID

<a id="opIdupdateDatasetLabel"></a>

> Code samples

```bash
curl http://localhost:6006/v1/dataset_labels/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "color": "string",
    "description": "string"
  }'
```

`PATCH /v1/dataset_labels/{label_id}`

Partially update a dataset label's name, color, and/or description. Only the fields included in the request body are changed; omitted fields are left as-is.

> Body parameter

```json
{
  "name": "string",
  "color": "string",
  "description": "string"
}
```

<h3 id="update-a-dataset-label-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|label_id|path|string|true|The ID of the dataset label|
|body|body|[UpdateDatasetLabelRequestBody](#schemaupdatedatasetlabelrequestbody)|true|none|
|» name|body|string \| null|false|New name for the label (null is rejected; name is required)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» color|body|string \| null|false|New lowercase hex color code for the label (null is rejected)|
|» » *anyOf*|body|string|false|A lowercase six-digit hex color code (e.g. '#00cc88')|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|New description for the label (null clears the description)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

<h3 id="update-a-dataset-label-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[UpdateDatasetLabelResponseBody](#schemaupdatedatasetlabelresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset label not found|Inline|
|409|Conflict|A dataset label with the same name already exists|Inline|
|422|Unprocessable Entity|Invalid dataset label ID or request body|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List the labels applied to a dataset

<a id="opIdlistDatasetLabelsForDataset"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/labels \
  -H 'Accept: application/json'
```

`GET /v1/datasets/{dataset_identifier}/labels`

<h3 id="list-the-labels-applied-to-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either the dataset ID (GlobalID) or its name.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string"
    }
  ]
}
```

<h3 id="list-the-labels-applied-to-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListDatasetLabelsForDatasetResponseBody](#schemalistdatasetlabelsfordatasetresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset not found|Inline|
|422|Unprocessable Entity|Invalid dataset identifier|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Replace the set of labels applied to a dataset

<a id="opIdsetDatasetLabelsForDataset"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/labels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dataset_label_ids": [
      "string"
    ]
  }'
```

`PUT /v1/datasets/{dataset_identifier}/labels`

Replace the entire set of labels applied to a dataset. Labels present in the request but not currently applied are added; labels currently applied but absent from the request are removed. An empty list removes all labels.

> Body parameter

```json
{
  "dataset_label_ids": [
    "string"
  ]
}
```

<h3 id="replace-the-set-of-labels-applied-to-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either the dataset ID (GlobalID) or its name.|
|body|body|[SetDatasetLabelsRequestBody](#schemasetdatasetlabelsrequestbody)|true|none|
|» dataset_label_ids|body|[string]|false|The complete set of dataset label GlobalIDs to apply to the dataset. Labels not in this list are removed from the dataset; an empty list removes all labels.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string"
    }
  ]
}
```

<h3 id="replace-the-set-of-labels-applied-to-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SetDatasetLabelsForDatasetResponseBody](#schemasetdatasetlabelsfordatasetresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset or one or more dataset labels not found|Inline|
|422|Unprocessable Entity|Invalid dataset identifier or request body|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Apply a label to a dataset

<a id="opIdaddDatasetLabelToDataset"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/labels/string \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /v1/datasets/{dataset_identifier}/labels/{label_id}`

Apply an existing label to a dataset. This operation is idempotent: applying a label that is already applied is a no-op that returns the label.

<h3 id="apply-a-label-to-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either the dataset ID (GlobalID) or its name.|
|label_id|path|string|true|The ID of the dataset label to apply|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

<h3 id="apply-a-label-to-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AddDatasetLabelToDatasetResponseBody](#schemaadddatasetlabeltodatasetresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset or dataset label not found|Inline|
|422|Unprocessable Entity|Invalid dataset identifier or dataset label ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a label from a dataset

<a id="opIdremoveDatasetLabelFromDataset"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/labels/string \
  -X DELETE
```

`DELETE /v1/datasets/{dataset_identifier}/labels/{label_id}`

Remove a label from a dataset without deleting the label itself. This operation is idempotent: removing a label that is not applied is a no-op.

<h3 id="remove-a-label-from-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either the dataset ID (GlobalID) or its name.|
|label_id|path|string|true|The ID of the dataset label to remove|

<h3 id="remove-a-label-from-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset not found|Inline|
|422|Unprocessable Entity|Invalid dataset identifier or dataset label ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List datasets

<a id="opIdlistDatasets"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets \
  -H 'Accept: application/json'
```

`GET /v1/datasets`

<h3 id="list-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination|
|name|query|string \| null|false|An optional dataset name to filter by|
|limit|query|integer|false|The max number of datasets to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "metadata": {},
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "example_count": 0
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListDatasetsResponseBody](#schemalistdatasetsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get dataset by ID

<a id="opIdgetDataset"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string \
  -H 'Accept: application/json'
```

`GET /v1/datasets/{id}`

<h3 id="get-dataset-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "metadata": {},
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-dataset-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetDatasetResponseBody](#schemagetdatasetresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete dataset by ID

<a id="opIddeleteDatasetById"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string \
  -X DELETE
```

`DELETE /v1/datasets/{id}`

<h3 id="delete-dataset-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset to delete.|

<h3 id="delete-dataset-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset not found|Inline|
|422|Unprocessable Entity|Invalid dataset ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List dataset versions

<a id="opIdlistDatasetVersionsByDatasetId"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/versions \
  -H 'Accept: application/json'
```

`GET /v1/datasets/{id}/versions`

<h3 id="list-dataset-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|
|cursor|query|string \| null|false|Cursor for pagination|
|limit|query|integer|false|The max number of dataset versions to return at a time|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "version_id": "string",
      "description": "string",
      "metadata": {},
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-dataset-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListDatasetVersionsResponseBody](#schemalistdatasetversionsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Upload dataset from JSON, JSONL, CSV, or PyArrow

<a id="opIduploadDataset"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action": "create",
    "name": "string",
    "description": "string",
    "inputs": [
      {}
    ],
    "outputs": [
      {}
    ],
    "metadata": [
      {}
    ],
    "splits": [
      "string"
    ],
    "span_ids": [
      "string"
    ],
    "example_ids": [
      "string"
    ]
  }'
```

`POST /v1/datasets/upload`

> Body parameter

```json
{
  "action": "create",
  "name": "string",
  "description": "string",
  "inputs": [
    {}
  ],
  "outputs": [
    {}
  ],
  "metadata": [
    {}
  ],
  "splits": [
    "string"
  ],
  "span_ids": [
    "string"
  ],
  "example_ids": [
    "string"
  ]
}
```

<h3 id="upload-dataset-from-json-jsonl-csv-or-pyarrow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sync|query|boolean|false|If true, fulfill request synchronously and return JSON containing dataset_id.|
|body|body|object|false|none|
|» action|body|string|false|none|
|» name|body|string|true|none|
|» description|body|string|false|none|
|» inputs|body|[object]|true|none|
|» outputs|body|[object]|false|none|
|» metadata|body|[object]|false|none|
|» splits|body|[string \| [string] \| null]|false|Split per example: string, string array, or null|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|[string]|false|none|
|» » *oneOf*|body|null|false|none|
|» span_ids|body|[string \| null]|false|Span IDs to link examples back to spans|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|null|false|none|
|» example_ids|body|[string \| null]|false|Optional example ID per example. If provided, it is used as the example's stable public ID.|
|» » *oneOf*|body|string|false|none|
|» » *oneOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|create|
|» action|append|
|» action|update|

> Example responses

> 200 Response

```json
{
  "data": {
    "dataset_id": "string",
    "version_id": "string",
    "num_created_examples": 0,
    "num_updated_examples": 0,
    "num_deleted_examples": 0
  }
}
```

<h3 id="upload-dataset-from-json-jsonl-csv-or-pyarrow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|409|Conflict|Dataset with the given name already exists (action=create).|Inline|
|422|Unprocessable Entity|Invalid request body|Inline|

<h3 id="upload-dataset-from-json-jsonl-csv-or-pyarrow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[UploadDatasetResponseBody](#schemauploaddatasetresponsebody)|false|none|none|
|*anyOf*|null|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get examples from a dataset

<a id="opIdgetDatasetExamples"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/examples \
  -H 'Accept: application/json'
```

`GET /v1/datasets/{id}/examples`

<h3 id="get-examples-from-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|
|version_id|query|string \| null|false|The ID of the dataset version (if omitted, returns data from the latest version)|
|split|query|[string] \| null|false|List of dataset split identifiers (GlobalIDs or names) to filter by|

> Example responses

> 200 Response

```json
{
  "data": {
    "dataset_id": "string",
    "version_id": "string",
    "filtered_splits": [
      "string"
    ],
    "examples": [
      {
        "id": "string",
        "node_id": "string",
        "input": {},
        "output": {},
        "metadata": {},
        "updated_at": "1970-01-01T00:00:00Z",
        "source": {
          "span_id": "string",
          "span_node_id": "string"
        }
      }
    ]
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-examples-from-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListDatasetExamplesResponseBody](#schemalistdatasetexamplesresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List dataset splits

<a id="opIdlistDatasetSplits"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/splits \
  -H 'Accept: application/json'
```

`GET /v1/datasets/{dataset_identifier}/splits`

<h3 id="list-dataset-splits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either dataset ID or dataset name.|
|cursor|query|string \| null|false|Cursor for pagination|
|limit|query|integer|false|The max number of dataset splits to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string",
      "metadata": {},
      "example_count": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-dataset-splits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListDatasetSplitsResponseBody](#schemalistdatasetsplitsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset not found|Inline|
|422|Unprocessable Entity|Invalid request|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a dataset split

<a id="opIdcreateDatasetSplit"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/splits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "description": "string",
    "color": "string",
    "metadata": {},
    "example_ids": [
      "string"
    ]
  }'
```

`POST /v1/datasets/{dataset_identifier}/splits`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "color": "string",
  "metadata": {},
  "example_ids": [
    "string"
  ]
}
```

<h3 id="create-a-dataset-split-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either dataset ID or dataset name.|
|body|body|[CreateDatasetSplitRequestBody](#schemacreatedatasetsplitrequestbody)|true|none|
|» name|body|string|true|A unique name for the split.|
|» description|body|string \| null|false|An optional description of the split.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» color|body|string \| null|false|An optional hex color for the split (e.g. #33c5e8). Omit for a default.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object|false|Arbitrary JSON metadata for the split.|
|» example_ids|body|[string]|false|Optional dataset example identifiers (GlobalIDs or user-provided IDs) to seed the split with. Each example must belong to this dataset. Omit to create an empty split.|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string",
    "metadata": {},
    "example_count": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-a-dataset-split-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[CreateDatasetSplitResponseBody](#schemacreatedatasetsplitresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset or example not found|Inline|
|409|Conflict|A dataset split with the given name already exists|Inline|
|422|Unprocessable Entity|Invalid request|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a dataset split

<a id="opIddeleteDatasetSplit"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/splits/string \
  -X DELETE
```

`DELETE /v1/datasets/{dataset_identifier}/splits/{split_id}`

<h3 id="delete-a-dataset-split-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either dataset ID or dataset name.|
|split_id|path|string|true|The ID (GlobalID) of the dataset split.|

<h3 id="delete-a-dataset-split-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset or split not found|Inline|
|422|Unprocessable Entity|Invalid dataset split ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a dataset split

<a id="opIdupdateDatasetSplit"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/splits/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "description": "string",
    "color": "string",
    "metadata": {},
    "add_example_ids": [
      "string"
    ],
    "remove_example_ids": [
      "string"
    ]
  }'
```

`PATCH /v1/datasets/{dataset_identifier}/splits/{split_id}`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "color": "string",
  "metadata": {},
  "add_example_ids": [
    "string"
  ],
  "remove_example_ids": [
    "string"
  ]
}
```

<h3 id="update-a-dataset-split-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_identifier|path|string|true|The dataset identifier: either dataset ID or dataset name.|
|split_id|path|string|true|The ID (GlobalID) of the dataset split.|
|body|body|[UpdateDatasetSplitRequestBody](#schemaupdatedatasetsplitrequestbody)|true|none|
|» name|body|string \| null|false|A new unique name for the split.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|A new description, or null to clear it.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» color|body|string \| null|false|A new hex color for the split.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|New JSON metadata that replaces the existing metadata.|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» add_example_ids|body|[string]|false|Dataset example identifiers (GlobalIDs or user-provided IDs) to add to the split. Each example must belong to this dataset. Adding an example already in the split is a no-op.|
|» remove_example_ids|body|[string]|false|Dataset example identifiers (GlobalIDs or user-provided IDs) to remove from the split.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string",
    "metadata": {},
    "example_count": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="update-a-dataset-split-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[UpdateDatasetSplitResponseBody](#schemaupdatedatasetsplitresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset, split, or example not found|Inline|
|409|Conflict|A dataset split with the given name already exists|Inline|
|422|Unprocessable Entity|Invalid request|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Download dataset examples as CSV file

<a id="opIdgetDatasetCsv"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/csv
```

`GET /v1/datasets/{id}/csv`

<h3 id="download-dataset-examples-as-csv-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|
|version_id|query|string \| null|false|The ID of the dataset version (if omitted, returns data from the latest version)|

<h3 id="download-dataset-examples-as-csv-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Download dataset examples as JSONL file

<a id="opIdgetDatasetJSONL"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/jsonl
```

`GET /v1/datasets/{id}/jsonl`

<h3 id="download-dataset-examples-as-jsonl-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|
|version_id|query|string \| null|false|The ID of the dataset version (if omitted, returns data from the latest version)|

<h3 id="download-dataset-examples-as-jsonl-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Invalid dataset or version ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Download dataset examples as OpenAI fine-tuning JSONL file

<a id="opIdgetDatasetJSONLOpenAIFineTuning"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/jsonl/openai_ft
```

`GET /v1/datasets/{id}/jsonl/openai_ft`

<h3 id="download-dataset-examples-as-openai-fine-tuning-jsonl-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|
|version_id|query|string \| null|false|The ID of the dataset version (if omitted, returns data from the latest version)|

<h3 id="download-dataset-examples-as-openai-fine-tuning-jsonl-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Invalid dataset or version ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Download dataset examples as OpenAI evals JSONL file

<a id="opIdgetDatasetJSONLOpenAIEvals"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/jsonl/openai_evals
```

`GET /v1/datasets/{id}/jsonl/openai_evals`

<h3 id="download-dataset-examples-as-openai-evals-jsonl-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dataset|
|version_id|query|string \| null|false|The ID of the dataset version (if omitted, returns data from the latest version)|

<h3 id="download-dataset-examples-as-openai-evals-jsonl-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Invalid dataset or version ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-experiments">experiments</h1>

## List experiments by dataset

<a id="opIdlistExperiments"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/experiments \
  -H 'Accept: application/json'
```

`GET /v1/datasets/{dataset_id}/experiments`

Retrieve a paginated list of experiments for the specified dataset.

<h3 id="list-experiments-by-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string|true|none|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded experiment ID)|
|limit|query|integer|false|The max number of experiments to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "dataset_id": "string",
      "dataset_version_id": "string",
      "name": "string",
      "description": "string",
      "repetitions": 1,
      "metadata": {},
      "project_name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "example_count": 0,
      "successful_run_count": 0,
      "failed_run_count": 0,
      "missing_run_count": 0
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-experiments-by-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of experiments for the dataset|[ListExperimentsResponseBody](#schemalistexperimentsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create experiment on a dataset

<a id="opIdcreateExperiment"></a>

> Code samples

```bash
curl http://localhost:6006/v1/datasets/string/experiments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "description": "string",
    "metadata": {},
    "version_id": "string",
    "splits": [
      "string"
    ],
    "repetitions": 1
  }'
```

`POST /v1/datasets/{dataset_id}/experiments`

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "metadata": {},
  "version_id": "string",
  "splits": [
    "string"
  ],
  "repetitions": 1
}
```

<h3 id="create-experiment-on-a-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dataset_id|path|string|true|none|
|body|body|[CreateExperimentRequestBody](#schemacreateexperimentrequestbody)|true|none|
|» name|body|string \| null|false|Name of the experiment (if omitted, a random name will be generated)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|An optional description of the experiment|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|Metadata for the experiment|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» version_id|body|string \| null|false|ID of the dataset version over which the experiment will be run (if omitted, the latest version will be used)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» splits|body|[string] \| null|false|List of dataset split identifiers (GlobalIDs or names) to filter by|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» repetitions|body|integer|false|Number of times the experiment should be repeated for each example|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "dataset_id": "string",
    "dataset_version_id": "string",
    "name": "string",
    "description": "string",
    "repetitions": 1,
    "metadata": {},
    "project_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0,
    "successful_run_count": 0,
    "failed_run_count": 0,
    "missing_run_count": 0
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-experiment-on-a-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experiment retrieved successfully|[CreateExperimentResponseBody](#schemacreateexperimentresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Dataset or DatasetVersion not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get experiment by ID

<a id="opIdgetExperiment"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}`

<h3 id="get-experiment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "dataset_id": "string",
    "dataset_version_id": "string",
    "name": "string",
    "description": "string",
    "repetitions": 1,
    "metadata": {},
    "project_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0,
    "successful_run_count": 0,
    "failed_run_count": 0,
    "missing_run_count": 0
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-experiment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experiment retrieved successfully|[GetExperimentResponseBody](#schemagetexperimentresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete experiment by ID

<a id="opIddeleteExperiment"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/experiments/{experiment_id}`

<h3 id="delete-experiment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|
|delete_project|query|boolean|false|If true, also delete the project associated with the experiment that contains traces and spans for the experiment tasks.|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-experiment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Experiment deleted successfully|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an experiment by ID

<a id="opIdupdateExperiment"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "description": "string",
    "metadata": {}
  }'
```

`PATCH /v1/experiments/{experiment_id}`

Partially update an experiment's name, description, and/or metadata. Only the fields included in the request body are changed; omitted fields are left as-is. Patching an ephemeral experiment refreshes its last-update timestamp, which extends the window before it is swept away.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "metadata": {}
}
```

<h3 id="update-an-experiment-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|
|body|body|[UpdateExperimentRequestBody](#schemaupdateexperimentrequestbody)|true|none|
|» name|body|string \| null|false|New name for the experiment (null is rejected; name is required)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|New description for the experiment (null clears the description)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|New metadata object for the experiment (replaces the existing metadata as a whole; null is rejected)|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "dataset_id": "string",
    "dataset_version_id": "string",
    "name": "string",
    "description": "string",
    "repetitions": 1,
    "metadata": {},
    "project_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0,
    "successful_run_count": 0,
    "failed_run_count": 0,
    "missing_run_count": 0
  }
}
```

<h3 id="update-an-experiment-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experiment updated successfully|[UpdateExperimentResponseBody](#schemaupdateexperimentresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid experiment ID or request body|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get incomplete runs for an experiment

<a id="opIdgetIncompleteExperimentRuns"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/incomplete-runs \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}/incomplete-runs`

Get runs that need to be completed for this experiment.

Returns all incomplete runs, including both missing runs (not yet attempted)
and failed runs (attempted but have errors).

Args:
    experiment_id: The ID of the experiment
    cursor: Cursor for pagination
    limit: Maximum number of results to return

Returns:
    Paginated list of incomplete runs grouped by dataset example,
    with repetition numbers that need to be run

<h3 id="get-incomplete-runs-for-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|
|cursor|query|string \| null|false|Cursor for pagination|
|limit|query|integer|false|Maximum number of examples with incomplete runs to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataset_example": {
        "id": "string",
        "node_id": "string",
        "input": {},
        "output": {},
        "metadata": {},
        "updated_at": "1970-01-01T00:00:00Z",
        "source": {
          "span_id": "string",
          "span_node_id": "string"
        }
      },
      "repetition_numbers": [
        0
      ]
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="get-incomplete-runs-for-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Incomplete runs retrieved successfully|[GetIncompleteExperimentRunsResponseBody](#schemagetincompleteexperimentrunsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid cursor format|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Download experiment runs as a JSON file

<a id="opIdgetExperimentJSON"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/json \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}/json`

<h3 id="download-experiment-runs-as-a-json-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="download-experiment-runs-as-a-json-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Download experiment runs as a CSV file

<a id="opIdgetExperimentCSV"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/csv \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}/csv`

<h3 id="download-experiment-runs-as-a-csv-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="download-experiment-runs-as-a-csv-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## List the tags applied to an experiment

<a id="opIdlistExperimentTags"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/tags \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}/tags`

List the tags currently pointing at this experiment. Tags are scoped to the experiment's dataset, so a tag appears here only while this experiment owns it.

<h3 id="list-the-tags-applied-to-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|The ID of the experiment|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="list-the-tags-applied-to-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tags currently applied to the experiment|[ListExperimentTagsResponseBody](#schemalistexperimenttagsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid experiment ID|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Assign a tag to an experiment

<a id="opIdsetExperimentTag"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`POST /v1/experiments/{experiment_id}/tags`

Assign a tag to an experiment. Tags are scoped to the experiment's dataset and each tag name points at a single experiment, so assigning a tag that another experiment on the same dataset owns atomically moves the tag to this experiment. Re-assigning a tag the experiment already owns is idempotent and replaces the description. Assigning the reserved 'baseline' tag makes this experiment the dataset's baseline; ephemeral experiments cannot become the baseline.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="assign-a-tag-to-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|The ID of the experiment|
|body|body|[SetExperimentTagRequestBody](#schemasetexperimenttagrequestbody)|true|none|
|» name|body|[Identifier](#schemaidentifier)|true|The name of the tag to assign, e.g. 'baseline'. If another experiment on the same dataset already owns this tag, the tag is moved to this experiment.|
|» description|body|string \| null|false|An optional description of the tag (replaces any existing description)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string"
  }
}
```

<h3 id="assign-a-tag-to-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tag as it now applies to the experiment|[SetExperimentTagResponseBody](#schemasetexperimenttagresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid experiment ID or request body, or the experiment is ephemeral and cannot be tagged as the baseline|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a tag from an experiment

<a id="opIddeleteExperimentTag"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/tags/string \
  -X DELETE
```

`DELETE /v1/experiments/{experiment_id}/tags/{tag_identifier}`

Remove a tag, identified by its node ID or name, from the experiment that owns it. This operation is idempotent and never steals a tag from another experiment: if the experiment does not currently own the tag, the request is a no-op.

<h3 id="remove-a-tag-from-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|The ID of the experiment|
|tag_identifier|path|string|true|The node ID or name of the tag to remove|

<h3 id="remove-a-tag-from-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful tag removal|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid experiment ID or tag identifier|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List runs for an experiment

<a id="opIdlistExperimentRuns"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/runs \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}/runs`

Retrieve a paginated list of runs for an experiment

<h3 id="list-runs-for-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded experiment run ID)|
|limit|query|integer \| null|false|The max number of experiment runs to return at a time. If not specified, returns all results.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataset_example_id": "string",
      "output": null,
      "repetition_number": 1,
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "trace_id": "string",
      "error": "string",
      "id": "string",
      "experiment_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-runs-for-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experiment runs retrieved successfully|[ListExperimentRunsResponseBody](#schemalistexperimentrunsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid cursor format|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create run for an experiment

<a id="opIdcreateExperimentRun"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/runs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dataset_example_id": "string",
    "output": null,
    "repetition_number": 1,
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "trace_id": "string",
    "error": "string"
  }'
```

`POST /v1/experiments/{experiment_id}/runs`

> Body parameter

```json
{
  "dataset_example_id": "string",
  "output": null,
  "repetition_number": 1,
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "trace_id": "string",
  "error": "string"
}
```

<h3 id="create-run-for-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|
|body|body|[CreateExperimentRunRequestBody](#schemacreateexperimentrunrequestbody)|true|none|
|» dataset_example_id|body|string|true|The ID of the dataset example used in the experiment run|
|» output|body|object|true|The output of the experiment task|
|» repetition_number|body|integer|true|The repetition number of the experiment run|
|» start_time|body|string(date-time)|true|The start time of the experiment run|
|» end_time|body|string(date-time)|true|The end time of the experiment run|
|» trace_id|body|string \| null|false|The ID of the corresponding trace (if one exists)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» error|body|string \| null|false|Optional error message if the experiment run encountered an error|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-run-for-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experiment run created successfully|[CreateExperimentRunResponseBody](#schemacreateexperimentrunresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment or dataset example not found|Inline|
|409|Conflict|Experiment run already exists with a successful result and cannot be updated|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get incomplete evaluations for an experiment

<a id="opIdgetIncompleteExperimentEvaluations"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiments/string/incomplete-evaluations \
  -H 'Accept: application/json'
```

`GET /v1/experiments/{experiment_id}/incomplete-evaluations`

Get experiment runs that have incomplete evaluations.

Returns runs with:
- Missing evaluations (evaluator has not been run)
- Failed evaluations (evaluator ran but has errors)

Args:
    experiment_id: The ID of the experiment
    evaluation_name: List of evaluation names to check (required, at least one)
    cursor: Cursor for pagination
    limit: Maximum number of results to return

Returns:
    Paginated list of runs with incomplete evaluations

<h3 id="get-incomplete-evaluations-for-an-experiment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|experiment_id|path|string|true|none|
|evaluation_name|query|[string]|false|Evaluation names to check|
|cursor|query|string \| null|false|Cursor for pagination|
|limit|query|integer|false|Maximum number of runs with incomplete evaluations to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "experiment_run": {
        "dataset_example_id": "string",
        "output": null,
        "repetition_number": 1,
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z",
        "trace_id": "string",
        "error": "string",
        "id": "string",
        "experiment_id": "string"
      },
      "dataset_example": {
        "id": "string",
        "node_id": "string",
        "input": {},
        "output": {},
        "metadata": {},
        "updated_at": "1970-01-01T00:00:00Z",
        "source": {
          "span_id": "string",
          "span_node_id": "string"
        }
      },
      "evaluation_names": [
        "string"
      ]
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="get-incomplete-evaluations-for-an-experiment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Incomplete evaluations retrieved successfully|[GetIncompleteEvaluationsResponseBody](#schemagetincompleteevaluationsresponsebody)|
|400|Bad Request|No evaluator names provided|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment not found|Inline|
|422|Unprocessable Entity|Invalid cursor format|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update evaluation for an experiment run

<a id="opIdupsertExperimentEvaluation"></a>

> Code samples

```bash
curl http://localhost:6006/v1/experiment_evaluations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "experiment_run_id": "string",
    "name": "string",
    "annotator_kind": "LLM",
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "result": {
      "label": "string",
      "score": 0,
      "explanation": "string"
    },
    "error": "string",
    "metadata": {},
    "trace_id": "string"
  }'
```

`POST /v1/experiment_evaluations`

> Body parameter

```json
{
  "experiment_run_id": "string",
  "name": "string",
  "annotator_kind": "LLM",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "error": "string",
  "metadata": {},
  "trace_id": "string"
}
```

<h3 id="create-or-update-evaluation-for-an-experiment-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpsertExperimentEvaluationRequestBody](#schemaupsertexperimentevaluationrequestbody)|true|none|
|» experiment_run_id|body|string|true|The ID of the experiment run being evaluated|
|» name|body|string|true|The name of the evaluation|
|» annotator_kind|body|string|true|The kind of annotator used for the evaluation|
|» start_time|body|string(date-time)|true|The start time of the evaluation in ISO format|
|» end_time|body|string(date-time)|true|The end time of the evaluation in ISO format|
|» result|body|[ExperimentEvaluationResult](#schemaexperimentevaluationresult) \| null|false|The result of the evaluation. Either result or error must be provided.|
|» » *anyOf*|body|[ExperimentEvaluationResult](#schemaexperimentevaluationresult)|false|none|
|» » *anyOf*|body|null|false|none|
|» error|body|string \| null|false|Error message if the evaluation encountered an error. Either result or error must be provided.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object \| null|false|Metadata for the evaluation|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» trace_id|body|string \| null|false|Optional trace ID for tracking|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» annotator_kind|LLM|
|» annotator_kind|CODE|
|» annotator_kind|HUMAN|
|» annotator_kind|DECISION|
|» annotator_kind|AGENT|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-or-update-evaluation-for-an-experiment-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[UpsertExperimentEvaluationResponseBody](#schemaupsertexperimentevaluationresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Experiment run not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-traces">traces</h1>

## List traces for a project

<a id="opIdlistProjectTraces"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/traces \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/traces`

<h3 id="list-traces-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|start_time|query|string(date-time) \| null|false|Inclusive lower bound on trace start time (ISO 8601)|
|end_time|query|string(date-time) \| null|false|Exclusive upper bound on trace start time (ISO 8601)|
|sort|query|string|false|Sort field|
|order|query|string|false|Sort direction|
|limit|query|integer|false|Maximum number of traces to return|
|cursor|query|string \| null|false|Pagination cursor returned by a previous request|
|include_spans|query|boolean|false|If true, include full span details for each trace. This significantly increases response size and query latency, especially with large page sizes. Prefer fetching spans lazily for individual traces when possible.|
|session_identifier|query|[string] \| null|false|List of session identifiers to filter traces by. Each value can be either a session_id string or a session GlobalID. Only traces belonging to the specified sessions will be returned.|
|error|query|boolean \| null|false|**Deprecated.** Deprecated: use `filter=error_count > 0` or `filter=error_count == 0`. Filter by trace error status. If true, only return traces that contain at least one span with `status_code == ERROR`. If false, only return traces with no errored spans. If omitted, traces are not filtered by error status.|
|min_latency_ms|query|number \| null|false|**Deprecated.** Inclusive lower bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms >= N`.|
|max_latency_ms|query|number \| null|false|**Deprecated.** Inclusive upper bound on trace latency in milliseconds. Deprecated: use `filter=latency_ms <= N`.|
|filter|query|string \| null|false|Trace filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Combined with other filters using AND. Empty expressions do not filter. Invalid expressions return 400.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|start_time|
|sort|latency_ms|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "trace_id": "string",
      "project_id": "string",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "token_count_prompt": 0,
      "token_count_completion": 0,
      "token_count_total": 0,
      "spans": [
        {
          "id": "string",
          "span_id": "string",
          "parent_id": "string",
          "name": "string",
          "span_kind": "string",
          "status_code": "string",
          "start_time": "1970-01-01T00:00:00Z",
          "end_time": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-traces-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetTracesResponseBody](#schemagettracesresponsebody)|
|400|Bad Request|Bad Request|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete traces from a project

<a id="opIddeleteProjectTraces"></a>

> Code samples

```bash
curl 'http://localhost:6006/v1/projects/string/traces?start_time=1970-01-01T00%3A00%3A00Z&end_time=1970-01-01T00%3A00%3A00Z' \
  -X DELETE
```

`DELETE /v1/projects/{project_identifier}/traces`

Delete traces from a project without deleting the project or its configuration. Only traces whose start time is within the required `[start_time, end_time)` interval are deleted. Associated spans are cascade deleted, and project sessions left with no remaining traces are also deleted. Naive datetimes are interpreted as UTC.

<h3 id="delete-traces-from-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|start_time|query|string(date-time)|true|Required inclusive lower bound on trace start time (ISO 8601).|
|end_time|query|string(date-time)|true|Required exclusive upper bound on trace start time (ISO 8601).|

<h3 id="delete-traces-from-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned after the matching traces are deleted|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create trace annotations

<a id="opIdannotateTraces"></a>

> Code samples

```bash
curl http://localhost:6006/v1/trace_annotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "string",
        "annotator_kind": "LLM",
        "result": {
          "label": "string",
          "score": 0,
          "explanation": "string"
        },
        "metadata": {},
        "identifier": "",
        "trace_id": "string"
      }
    ]
  }'
```

`POST /v1/trace_annotations`

> Body parameter

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "trace_id": "string"
    }
  ]
}
```

<h3 id="create-trace-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sync|query|boolean|false|If true, fulfill request synchronously.|
|body|body|[AnnotateTracesRequestBody](#schemaannotatetracesrequestbody)|true|none|
|» data|body|[[TraceAnnotationData](#schematraceannotationdata)]|true|The trace annotations to be upserted|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-trace-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AnnotateTracesResponseBody](#schemaannotatetracesresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Trace not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a trace note

<a id="opIdcreateTraceNote"></a>

> Code samples

```bash
curl http://localhost:6006/v1/trace_notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "trace_id": "string",
      "note": "string",
      "identifier": ""
    }
  }'
```

`POST /v1/trace_notes`

Add a note annotation to a trace. By default each call appends a new note with an auto-generated UUIDv4 identifier, so multiple notes accumulate on the same trace. Callers may supply a non-empty `identifier` to upsert on (trace_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note, matching the semantics of structured annotations.

> Body parameter

```json
{
  "data": {
    "trace_id": "string",
    "note": "string",
    "identifier": ""
  }
}
```

<h3 id="create-a-trace-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTraceNoteRequestBody](#schemacreatetracenoterequestbody)|true|none|
|» data|body|[TraceNoteData](#schematracenotedata)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-a-trace-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trace note created successfully|[CreateTraceNoteResponseBody](#schemacreatetracenoteresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Trace not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Transfer traces to a project

<a id="opIdtransferTraces"></a>

> Code samples

```bash
curl http://localhost:6006/v1/traces/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "trace_identifiers": [
      "string"
    ],
    "destination_project_identifier": "string"
  }'
```

`POST /v1/traces/transfer`

Move traces into a different project. This re-parents the traces rather than copying them, so they no longer appear under their original project. All traces must currently belong to the same source project.

> Body parameter

```json
{
  "trace_identifiers": [
    "string"
  ],
  "destination_project_identifier": "string"
}
```

<h3 id="transfer-traces-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferTracesRequestBody](#schematransfertracesrequestbody)|true|none|
|» trace_identifiers|body|[string]|true|The traces to transfer. Each identifier is either a trace ID (GlobalID) or an OpenTelemetry trace_id (hex string). Must be non-empty, and all traces must currently belong to the same source project.|
|» destination_project_identifier|body|string|true|The destination project: either project ID (GlobalID) or project name.|

> Example responses

> 200 Response

```json
{
  "data": {
    "transferred_trace_count": 0,
    "destination_project_id": "string"
  }
}
```

<h3 id="transfer-traces-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TransferTracesResponseBody](#schematransfertracesresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Destination project or trace not found|Inline|
|422|Unprocessable Entity|Invalid request|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a trace by identifier

<a id="opIddeleteTrace"></a>

> Code samples

```bash
curl http://localhost:6006/v1/traces/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/traces/{trace_identifier}`

Delete an entire trace by its identifier. The identifier can be either:
1. A Relay node ID (base64-encoded)
2. An OpenTelemetry trace_id (hex string)

This will permanently remove all spans in the trace and their associated data.

<h3 id="delete-a-trace-by-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trace_identifier|path|string|true|The trace identifier: either a relay GlobalID or OpenTelemetry trace_id|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-a-trace-by-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-spans">spans</h1>

## Search spans with simple filters (no DSL)

<a id="opIdspanSearch"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/spans/otlpv1 \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/spans/otlpv1`

Return spans within a project filtered by time range. Supports cursor-based pagination.

<h3 id="search-spans-with-simple-filters-no-dsl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|cursor|query|string \| null|false|Pagination cursor (Span Global ID)|
|limit|query|integer|false|Maximum number of spans to return|
|start_time|query|string(date-time) \| null|false|Inclusive lower bound time|
|end_time|query|string(date-time) \| null|false|Exclusive upper bound time|
|trace_id|query|[string] \| null|false|Filter by one or more trace IDs|
|span_id|query|[string] \| null|false|Filter by one or more span IDs|
|parent_id|query|string \| null|false|Filter by parent span ID. Use "null" to get root spans only.|
|name|query|[string] \| null|false|Filter by span name(s)|
|status_code|query|[string] \| null|false|Filter by status code(s). Values: OK, ERROR, UNSET|
|attribute|query|[string] \| null|false|Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": [
        {
          "key": "string",
          "value": {
            "array_value": {},
            "bool_value": true,
            "bytes_value": "string",
            "double_value": 0,
            "int_value": -9223372036850000000,
            "kvlist_value": null,
            "string_value": "string"
          }
        }
      ],
      "dropped_attributes_count": 0,
      "dropped_events_count": 0,
      "dropped_links_count": 0,
      "end_time_unix_nano": 0,
      "events": [
        {
          "attributes": [
            {
              "key": "string",
              "value": {
                "array_value": {},
                "bool_value": true,
                "bytes_value": "string",
                "double_value": 0,
                "int_value": -9223372036850000000,
                "kvlist_value": null,
                "string_value": "string"
              }
            }
          ],
          "dropped_attributes_count": 0,
          "name": "string",
          "time_unix_nano": 0
        }
      ],
      "flags": 0,
      "kind": "SPAN_KIND_INTERNAL",
      "links": null,
      "name": "string",
      "parent_span_id": "string",
      "span_id": "string",
      "start_time_unix_nano": 0,
      "status": {
        "code": -2147483648,
        "message": "string"
      },
      "trace_id": "string",
      "trace_state": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="search-spans-with-simple-filters-no-dsl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[OtlpSpansResponseBody](#schemaotlpspansresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List spans with simple filters (no DSL)

<a id="opIdgetSpans"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/spans \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/spans`

Return spans within a project filtered by time range. Supports cursor-based pagination.

<h3 id="list-spans-with-simple-filters-no-dsl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|cursor|query|string \| null|false|Pagination cursor: the next_cursor of a previous response with the same sort|
|limit|query|integer|false|Maximum number of spans to return|
|sort|query|string|false|Sort field. 'id' orders by insertion; 'start_time' orders by when the span started, breaking ties by id.|
|order|query|string|false|Sort direction|
|start_time|query|string(date-time) \| null|false|Inclusive lower bound time|
|end_time|query|string(date-time) \| null|false|Exclusive upper bound time|
|trace_id|query|[string] \| null|false|Filter by one or more trace IDs|
|span_id|query|[string] \| null|false|Filter by one or more span IDs|
|parent_id|query|string \| null|false|Filter by parent span ID. Use "null" to get root spans only.|
|name|query|[string] \| null|false|Filter by span name(s)|
|span_kind|query|[string] \| null|false|Filter by span kind(s). Values: LLM, CHAIN, TOOL, RETRIEVER, EMBEDDING, AGENT, RERANKER, GUARDRAIL, EVALUATOR, DECISION, UNKNOWN|
|status_code|query|[string] \| null|false|Filter by status code(s). Values: OK, ERROR, UNSET|
|attribute|query|[string] \| null|false|Filter spans by `key:value`. Key is a dot-path (e.g. `user.id`, `metadata.tier`). Value is JSON-parsed: `k:12345` is int, `k:true` is bool, otherwise string (`k:user-42`). To match a numeric- or boolean-looking STRING, JSON-quote it: `user.id:"12345"` (URL-encoded `%2212345%22`). Split is on the first `:` only, so values may contain colons (`session.id:sess:abc:123`, ISO timestamps). Repeat the param to AND filters. List-valued attributes (e.g. `tag.tags`) cannot be matched here. Returns 422 on malformed input (missing colon, empty key/value, or list/dict/null value).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|id|
|sort|start_time|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attributes": {
        "llm.model_name": "gpt-4",
        "llm.token_count.completion": 50,
        "llm.token_count.prompt": 100
      },
      "context": {
        "span_id": "1a2b3c4d5e6f7a8b",
        "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
      },
      "end_time": "2024-01-01T12:00:01Z",
      "events": [],
      "name": "llm_call",
      "span_kind": "LLM",
      "start_time": "2024-01-01T12:00:00Z",
      "status_code": "OK",
      "status_message": ""
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-spans-with-simple-filters-no-dsl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SpansResponseBody](#schemaspansresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create spans

<a id="opIdcreateSpans"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/spans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "attributes": {
          "llm.model_name": "gpt-4",
          "llm.token_count.completion": 50,
          "llm.token_count.prompt": 100
        },
        "context": {
          "span_id": "1a2b3c4d5e6f7a8b",
          "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
        },
        "end_time": "2024-01-01T12:00:01Z",
        "events": [],
        "name": "llm_call",
        "span_kind": "LLM",
        "start_time": "2024-01-01T12:00:00Z",
        "status_code": "OK",
        "status_message": ""
      }
    ]
  }'
```

`POST /v1/projects/{project_identifier}/spans`

Submit spans to be inserted into a project. If any spans are invalid or duplicates, no spans will be inserted.

> Body parameter

```json
{
  "data": [
    {
      "attributes": {
        "llm.model_name": "gpt-4",
        "llm.token_count.completion": 50,
        "llm.token_count.prompt": 100
      },
      "context": {
        "span_id": "1a2b3c4d5e6f7a8b",
        "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
      },
      "end_time": "2024-01-01T12:00:01Z",
      "events": [],
      "name": "llm_call",
      "span_kind": "LLM",
      "start_time": "2024-01-01T12:00:00Z",
      "status_code": "OK",
      "status_message": ""
    }
  ]
}
```

<h3 id="create-spans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|body|body|[CreateSpansRequestBody](#schemacreatespansrequestbody)|true|none|
|» data|body|[[Span](#schemaspan)]|true|none|

> Example responses

> 202 Response

```json
{
  "total_received": 0,
  "total_queued": 0
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-spans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[CreateSpansResponseBody](#schemacreatespansresponsebody)|
|400|Bad Request|Bad Request|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|503|Service Unavailable|Span ingestion queue is at capacity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create span annotations

<a id="opIdannotateSpans"></a>

> Code samples

```bash
curl http://localhost:6006/v1/span_annotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "string",
        "annotator_kind": "LLM",
        "result": {
          "label": "string",
          "score": 0,
          "explanation": "string"
        },
        "metadata": {},
        "identifier": "",
        "span_id": "string"
      }
    ]
  }'
```

`POST /v1/span_annotations`

> Body parameter

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "span_id": "string"
    }
  ]
}
```

<h3 id="create-span-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sync|query|boolean|false|If true, fulfill request synchronously.|
|body|body|[AnnotateSpansRequestBody](#schemaannotatespansrequestbody)|true|none|
|» data|body|[[SpanAnnotationData](#schemaspanannotationdata)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-span-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Span annotations inserted successfully|[AnnotateSpansResponseBody](#schemaannotatespansresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Span not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a span note

<a id="opIdcreateSpanNote"></a>

> Code samples

```bash
curl http://localhost:6006/v1/span_notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "span_id": "string",
      "note": "string",
      "identifier": ""
    }
  }'
```

`POST /v1/span_notes`

Add a note annotation to a span. By default each call appends a new note with an auto-generated UUIDv4 identifier, so multiple notes accumulate on the same span. Callers may supply a non-empty `identifier` to upsert on (span_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note, matching the semantics of structured annotations.

> Body parameter

```json
{
  "data": {
    "span_id": "string",
    "note": "string",
    "identifier": ""
  }
}
```

<h3 id="create-a-span-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSpanNoteRequestBody](#schemacreatespannoterequestbody)|true|none|
|» data|body|[SpanNoteData](#schemaspannotedata)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-a-span-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Span note created successfully|[CreateSpanNoteResponseBody](#schemacreatespannoteresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Span not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a span by span_identifier

<a id="opIddeleteSpan"></a>

> Code samples

```bash
curl http://localhost:6006/v1/spans/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/spans/{span_identifier}`

Delete a single span by identifier.

        **Important**: This operation deletes ONLY the specified span itself and does NOT
        delete its descendants/children. All child spans will remain in the trace and
        become orphaned (their parent_id will point to a non-existent span).

        Behavior:
        - Deletes only the target span (preserves all descendant spans)
        - If this was the last span in the trace, the trace record is also deleted
        - If the deleted span had a parent, its cumulative metrics (error count, token counts)
          are subtracted from all ancestor spans in the chain

        **Note**: This operation is irreversible and may create orphaned spans.

<h3 id="delete-a-span-by-spanidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|span_identifier|path|string|true|The span identifier: either a relay GlobalID or OpenTelemetry span_id|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-a-span-by-spanidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create span document annotations

<a id="opIdannotateSpanDocuments"></a>

> Code samples

```bash
curl http://localhost:6006/v1/document_annotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "string",
        "annotator_kind": "LLM",
        "result": {
          "label": "string",
          "score": 0,
          "explanation": "string"
        },
        "metadata": {},
        "identifier": "",
        "span_id": "string",
        "document_position": 0
      }
    ]
  }'
```

`POST /v1/document_annotations`

> Body parameter

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "span_id": "string",
      "document_position": 0
    }
  ]
}
```

<h3 id="create-span-document-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sync|query|boolean|false|If set to true, the annotations are inserted synchronously.|
|body|body|[AnnotateSpanDocumentsRequestBody](#schemaannotatespandocumentsrequestbody)|true|none|
|» data|body|[[SpanDocumentAnnotationData](#schemaspandocumentannotationdata)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

<h3 id="create-span-document-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Span document annotation inserted successfully|[AnnotateSpanDocumentsResponseBody](#schemaannotatespandocumentsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Span not found|Inline|
|422|Unprocessable Entity|Invalid request - non-empty identifier not supported|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-prompts">prompts</h1>

## List all prompts

<a id="opIdgetPrompts"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts \
  -H 'Accept: application/json'
```

`GET /v1/prompts`

Retrieve a paginated list of all prompts in the system. A prompt can have multiple versions.

<h3 id="list-all-prompts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded prompt ID)|
|limit|query|integer|false|The max number of prompts to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "source_prompt_id": "string",
      "metadata": {},
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-all-prompts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of prompts with pagination information|[GetPromptsResponseBody](#schemagetpromptsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new prompt

<a id="opIdpostPromptVersion"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "prompt": {
      "name": "string",
      "description": "string",
      "source_prompt_id": "string",
      "metadata": {}
    },
    "version": {
      "description": "string",
      "metadata": {},
      "model_provider": "OPENAI",
      "model_name": "string",
      "template": {
        "type": "chat",
        "messages": [
          {
            "role": "user",
            "content": "string"
          }
        ]
      },
      "template_type": "STR",
      "template_format": "MUSTACHE",
      "invocation_parameters": {
        "type": "openai",
        "openai": {
          "temperature": 0,
          "max_tokens": 0,
          "max_completion_tokens": 0,
          "frequency_penalty": 0,
          "presence_penalty": 0,
          "top_p": 0,
          "seed": 0,
          "stop": [
            "string"
          ],
          "reasoning_effort": "none",
          "extra_body": {}
        }
      },
      "tools": {
        "type": "tools",
        "tools": [
          {
            "type": "function",
            "function": {
              "name": "string",
              "description": "string",
              "parameters": {},
              "strict": true
            }
          }
        ],
        "tool_choice": {
          "type": "none"
        },
        "disable_parallel_tool_calls": true
      },
      "response_format": {
        "type": "json_schema",
        "json_schema": {
          "name": "string",
          "description": "string",
          "schema": {},
          "strict": true
        }
      }
    }
  }'
```

`POST /v1/prompts`

Create a new prompt and its initial version. A prompt can have multiple versions.

> Body parameter

```json
{
  "prompt": {
    "name": "string",
    "description": "string",
    "source_prompt_id": "string",
    "metadata": {}
  },
  "version": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    }
  }
}
```

<h3 id="create-a-new-prompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePromptRequestBody](#schemacreatepromptrequestbody)|true|none|
|» prompt|body|[PromptData](#schemapromptdata)|true|none|
|» version|body|[PromptVersionData](#schemapromptversiondata)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-a-new-prompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly created prompt version|[CreatePromptResponseBody](#schemacreatepromptresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List prompt versions

<a id="opIdlistPromptVersions"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts/string/versions \
  -H 'Accept: application/json'
```

`GET /v1/prompts/{prompt_identifier}/versions`

Retrieve all versions of a specific prompt with pagination support. Each prompt can have multiple versions with different configurations.

<h3 id="list-prompt-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_identifier|path|string|true|The identifier of the prompt, i.e. name or ID.|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded promptVersion ID)|
|limit|query|integer|false|The max number of prompt versions to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "description": "string",
      "metadata": {},
      "model_provider": "OPENAI",
      "model_name": "string",
      "template": {
        "type": "chat",
        "messages": [
          {
            "role": "user",
            "content": "string"
          }
        ]
      },
      "template_type": "STR",
      "template_format": "MUSTACHE",
      "invocation_parameters": {
        "type": "openai",
        "openai": {
          "temperature": 0,
          "max_tokens": 0,
          "max_completion_tokens": 0,
          "frequency_penalty": 0,
          "presence_penalty": 0,
          "top_p": 0,
          "seed": 0,
          "stop": [
            "string"
          ],
          "reasoning_effort": "none",
          "extra_body": {}
        }
      },
      "tools": {
        "type": "tools",
        "tools": [
          {
            "type": "function",
            "function": {
              "name": "string",
              "description": "string",
              "parameters": {},
              "strict": true
            }
          }
        ],
        "tool_choice": {
          "type": "none"
        },
        "disable_parallel_tool_calls": true
      },
      "response_format": {
        "type": "json_schema",
        "json_schema": {
          "name": "string",
          "description": "string",
          "schema": {},
          "strict": true
        }
      },
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-prompt-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of prompt versions with pagination information|[GetPromptVersionsResponseBody](#schemagetpromptversionsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create prompt version

<a id="opIdcreatePromptVersion"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "version": {
      "description": "string",
      "metadata": {},
      "model_provider": "OPENAI",
      "model_name": "string",
      "template": {
        "type": "chat",
        "messages": [
          {
            "role": "user",
            "content": "string"
          }
        ]
      },
      "template_type": "STR",
      "template_format": "MUSTACHE",
      "invocation_parameters": {
        "type": "openai",
        "openai": {
          "temperature": 0,
          "max_tokens": 0,
          "max_completion_tokens": 0,
          "frequency_penalty": 0,
          "presence_penalty": 0,
          "top_p": 0,
          "seed": 0,
          "stop": [
            "string"
          ],
          "reasoning_effort": "none",
          "extra_body": {}
        }
      },
      "tools": {
        "type": "tools",
        "tools": [
          {
            "type": "function",
            "function": {
              "name": "string",
              "description": "string",
              "parameters": {},
              "strict": true
            }
          }
        ],
        "tool_choice": {
          "type": "none"
        },
        "disable_parallel_tool_calls": true
      },
      "response_format": {
        "type": "json_schema",
        "json_schema": {
          "name": "string",
          "description": "string",
          "schema": {},
          "strict": true
        }
      }
    },
    "tags": [
      {
        "name": "string",
        "description": "string"
      }
    ]
  }'
```

`POST /v1/prompts/{prompt_identifier}/versions`

Create a new version for an existing prompt by identifier.

> Body parameter

```json
{
  "version": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    }
  },
  "tags": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="create-prompt-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_identifier|path|string|true|The identifier of the prompt, i.e. name or ID.|
|body|body|[CreatePromptVersionRequestBody](#schemacreatepromptversionrequestbody)|true|none|
|» version|body|[PromptVersionData](#schemapromptversiondata)|true|none|
|» tags|body|[[PromptVersionTagData](#schemapromptversiontagdata)] \| null|false|none|
|» » *anyOf*|body|[[PromptVersionTagData](#schemapromptversiontagdata)]|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-prompt-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created prompt version|[CreatePromptVersionResponseBody](#schemacreatepromptversionresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get prompt version by ID

<a id="opIdgetPromptVersionByPromptVersionId"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompt_versions/string \
  -H 'Accept: application/json'
```

`GET /v1/prompt_versions/{prompt_version_id}`

Retrieve a specific prompt version using its unique identifier. A prompt version contains the actual template and configuration.

<h3 id="get-prompt-version-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_version_id|path|string|true|The ID of the prompt version.|

> Example responses

> 200 Response

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="get-prompt-version-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested prompt version|[GetPromptResponseBody](#schemagetpromptresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get prompt version by tag

<a id="opIdgetPromptVersionByTagName"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts/string/tags/string \
  -H 'Accept: application/json'
```

`GET /v1/prompts/{prompt_identifier}/tags/{tag_name}`

Retrieve a specific prompt version using its tag name. Tags are used to identify specific versions of a prompt.

<h3 id="get-prompt-version-by-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_identifier|path|string|true|The identifier of the prompt, i.e. name or ID.|
|tag_name|path|string|true|The tag of the prompt version|

> Example responses

> 200 Response

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="get-prompt-version-by-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The prompt version with the specified tag|[GetPromptResponseBody](#schemagetpromptresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get latest prompt version

<a id="opIdgetPromptVersionLatest"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts/string/latest \
  -H 'Accept: application/json'
```

`GET /v1/prompts/{prompt_identifier}/latest`

Retrieve the most recent version of a specific prompt.

<h3 id="get-latest-prompt-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_identifier|path|string|true|The identifier of the prompt, i.e. name or ID.|

> Example responses

> 200 Response

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="get-latest-prompt-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The latest version of the specified prompt|[GetPromptResponseBody](#schemagetpromptresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List prompt version tags

<a id="opIdgetPromptVersionTags"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompt_versions/string/tags \
  -H 'Accept: application/json'
```

`GET /v1/prompt_versions/{prompt_version_id}/tags`

Retrieve all tags associated with a specific prompt version. Tags are used to identify and categorize different versions of a prompt.

<h3 id="list-prompt-version-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_version_id|path|string|true|The ID of the prompt version.|
|cursor|query|string \| null|false|Cursor for pagination (base64-encoded promptVersionTag ID)|
|limit|query|integer|false|The max number of tags to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-prompt-version-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of tags associated with the prompt version|[GetPromptVersionTagsResponseBody](#schemagetpromptversiontagsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Add tag to prompt version

<a id="opIdcreatePromptVersionTag"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompt_versions/string/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`POST /v1/prompt_versions/{prompt_version_id}/tags`

Add a new tag to a specific prompt version. Tags help identify and categorize different versions of a prompt.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="add-tag-to-prompt-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_version_id|path|string|true|The ID of the prompt version.|
|body|body|[PromptVersionTagData](#schemapromptversiontagdata)|true|none|
|» name|body|[Identifier](#schemaidentifier)|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

<h3 id="add-tag-to-prompt-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful tag creation|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a tag from a prompt version

<a id="opIddeletePromptVersionTag"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompt_versions/string/tags/string \
  -X DELETE
```

`DELETE /v1/prompt_versions/{prompt_version_id}/tags/{tag_name}`

Delete a tag from a specific prompt version by tag name. The tag is resolved within the scope of the prompt linked to the version.

<h3 id="delete-a-tag-from-a-prompt-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_version_id|path|string|true|The ID of the prompt version.|
|tag_name|path|string|true|The name of the tag to delete.|

<h3 id="delete-a-tag-from-a-prompt-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful tag deletion|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a prompt

<a id="opIddeletePrompt"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts/string \
  -X DELETE
```

`DELETE /v1/prompts/{prompt_identifier}`

Delete a prompt and all its versions, tags, and labels by identifier.

<h3 id="delete-a-prompt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_identifier|path|string|true|The identifier of the prompt, i.e. name or ID.|

<h3 id="delete-a-prompt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update prompt metadata

<a id="opIdpatchPrompt"></a>

> Code samples

```bash
curl http://localhost:6006/v1/prompts/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string",
    "metadata": {}
  }'
```

`PATCH /v1/prompts/{prompt_identifier}`

Update a prompt's description and metadata by identifier.

> Body parameter

```json
{
  "description": "string",
  "metadata": {}
}
```

<h3 id="update-prompt-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt_identifier|path|string|true|The identifier of the prompt, i.e. name or ID.|
|body|body|[PatchPromptRequestBody](#schemapatchpromptrequestbody)|true|none|
|» description|body|string \| null|false|New description for the prompt (null clears the description)|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» metadata|body|object|false|New metadata object for the prompt (replaces the existing metadata as a whole)|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "source_prompt_id": "string",
    "metadata": {},
    "id": "string"
  }
}
```

<h3 id="update-prompt-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated prompt|[PatchPromptResponseBody](#schemapatchpromptresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-projects">projects</h1>

## List all projects

<a id="opIdgetProjects"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects \
  -H 'Accept: application/json'
```

`GET /v1/projects`

Retrieve a paginated list of all projects in the system.

<h3 id="list-all-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination (project ID)|
|limit|query|integer|false|The max number of projects to return at a time.|
|include_experiment_projects|query|boolean|false|Include experiment projects in the response. Experiment projects are created from running experiments.|
|include_dataset_evaluator_projects|query|boolean|false|Include dataset evaluator projects in the response. Dataset evaluator projects are created when running experiments with persisted evaluators.|
|name_contains|query|string \| null|false|Return only projects whose name contains this substring (case-insensitive).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-all-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of projects with pagination information|[GetProjectsResponseBody](#schemagetprojectsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new project

<a id="opIdcreateProject"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`POST /v1/projects`

Create a new project with the specified configuration.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="create-a-new-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateProjectRequestBody](#schemacreateprojectrequestbody)|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "id": "string"
  }
}
```

<h3 id="create-a-new-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly created project|[CreateProjectResponseBody](#schemacreateprojectresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get project by ID or name

<a id="opIdgetProject"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}`

Retrieve a specific project using its unique identifier: either project ID or project name. Note: When using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.

<h3 id="get-project-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "id": "string"
  }
}
```

<h3 id="get-project-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested project|[GetProjectResponseBody](#schemagetprojectresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update a project by ID or name

<a id="opIdupdateProject"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "description": "string"
  }'
```

`PUT /v1/projects/{project_identifier}`

Update an existing project with new configuration. Project names cannot be changed. The project identifier is either project ID or project name. Note: When using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="update-a-project-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|
|body|body|[UpdateProjectRequestBody](#schemaupdateprojectrequestbody)|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "id": "string"
  }
}
```

<h3 id="update-a-project-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated project|[UpdateProjectResponseBody](#schemaupdateprojectresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a project by ID or name

<a id="opIddeleteProject"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string \
  -X DELETE
```

`DELETE /v1/projects/{project_identifier}`

Delete an existing project and all its associated data. The project identifier is either project ID or project name. The default project cannot be deleted. Note: When using a project name as the identifier, it cannot contain slash (/), question mark (?), or pound sign (#) characters.

<h3 id="delete-a-project-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name. If using a project name, it cannot contain slash (/), question mark (?), or pound sign (#) characters.|

<h3 id="delete-a-project-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful deletion|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Set a project's trace retention policy

<a id="opIdsetProjectRetentionPolicy"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/retention \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "policy_id": "string"
  }'
```

`PATCH /v1/projects/{project_identifier}/retention`

Assign an existing trace retention policy to a project, or reset the project to the default policy with a null `policy_id`. Retention policies are standalone, reusable entities: this endpoint only changes which policy the project points at, and never creates, edits, or deletes a policy.

> Body parameter

```json
{
  "policy_id": "string"
}
```

<h3 id="set-a-projects-trace-retention-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|body|body|[SetProjectRetentionPolicyRequestBody](#schemasetprojectretentionpolicyrequestbody)|true|none|
|» policy_id|body|string \| null|true|The ID (GlobalID) of an existing trace retention policy to assign, or null to reset the project to the default policy.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "project_id": "string",
    "policy_id": "string"
  }
}
```

<h3 id="set-a-projects-trace-retention-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The project's retention policy assignment|[SetProjectRetentionPolicyResponseBody](#schemasetprojectretentionpolicyresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-modelproviders">model_providers</h1>

## List built-in model provider families

<a id="opIdgetModelProviders"></a>

> Code samples

```bash
curl http://localhost:6006/v1/model_providers \
  -H 'Accept: application/json'
```

`GET /v1/model_providers`

Retrieve the built-in model provider families available to this deployment. Built-in families are a fixed enum rather than stored records, so this list is not paginated; it is narrowed by the PHOENIX_ALLOWED_PROVIDERS environment variable when that is set. User-defined providers are listed separately by `GET /v1/custom_model_providers`.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "provider": "OPENAI",
      "name": "string"
    }
  ]
}
```

<h3 id="list-built-in-model-provider-families-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of built-in model provider families|[GetModelProvidersResponseBody](#schemagetmodelprovidersresponsebody)|
|403|Forbidden|Forbidden|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List custom model providers

<a id="opIdgetCustomModelProviders"></a>

> Code samples

```bash
curl http://localhost:6006/v1/custom_model_providers \
  -H 'Accept: application/json'
```

`GET /v1/custom_model_providers`

Retrieve a paginated list of user-defined custom model providers. Encrypted provider credentials are never returned. Built-in provider families are listed separately by `GET /v1/model_providers`.

<h3 id="list-custom-model-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination (custom provider ID)|
|limit|query|integer|false|The max number of custom providers to return at a time (at most 1000).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "provider": "string",
      "sdk": "openai",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-custom-model-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of custom model providers with pagination information|[GetCustomModelProvidersResponseBody](#schemagetcustommodelprovidersresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-sessions">sessions</h1>

## Get session by ID or session_id

<a id="opIdgetSession"></a>

> Code samples

```bash
curl http://localhost:6006/v1/sessions/string \
  -H 'Accept: application/json'
```

`GET /v1/sessions/{session_identifier}`

<h3 id="get-session-by-id-or-sessionid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_identifier|path|string|true|The session identifier: either a GlobalID or user-provided session_id string.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "session_id": "string",
    "project_id": "string",
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "traces": [
      {
        "id": "string",
        "trace_id": "string",
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z"
      }
    ],
    "token_count_prompt": 0,
    "token_count_completion": 0,
    "token_count_total": 0
  }
}
```

<h3 id="get-session-by-id-or-sessionid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetSessionResponseBody](#schemagetsessionresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a session by identifier

<a id="opIddeleteSession"></a>

> Code samples

```bash
curl http://localhost:6006/v1/sessions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/sessions/{session_identifier}`

Delete a session by its identifier. The identifier can be either:
1. A global ID (base64-encoded)
2. A user-provided session_id string

This will permanently remove the session and all associated traces, spans, and annotations via cascade delete.

<h3 id="delete-a-session-by-identifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_identifier|path|string|true|The session identifier: either a GlobalID or user-provided session_id string.|

> Example responses

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-a-session-by-identifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk delete sessions

<a id="opIddeleteSessions"></a>

> Code samples

```bash
curl http://localhost:6006/v1/sessions/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "session_identifiers": [
      "string"
    ]
  }'
```

`POST /v1/sessions/delete`

Delete multiple sessions by their identifiers (GlobalIDs or session_id strings). All identifiers in a single request must be the same type. Non-existent IDs are silently skipped. All associated traces, spans, and annotations are cascade deleted.

> Body parameter

```json
{
  "session_identifiers": [
    "string"
  ]
}
```

<h3 id="bulk-delete-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteSessionsRequestBody](#schemadeletesessionsrequestbody)|true|none|
|» session_identifiers|body|[string]|true|List of session identifiers to delete. All identifiers must be the same type: either all GlobalIDs or all user-provided session_id strings.|

<h3 id="bulk-delete-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List sessions for a project

<a id="opIdlistProjectSessions"></a>

> Code samples

```bash
curl http://localhost:6006/v1/projects/string/sessions \
  -H 'Accept: application/json'
```

`GET /v1/projects/{project_identifier}/sessions`

<h3 id="list-sessions-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_identifier|path|string|true|The project identifier: either project ID or project name.|
|cursor|query|string \| null|false|Cursor for pagination (session ID)|
|limit|query|integer|false|The max number of sessions to return at a time.|
|order|query|string|false|Sort order by ID: 'asc' (ascending) or 'desc' (descending).|
|filter|query|string \| null|false|Session filter expression, as documented at https://arize.com/docs/phoenix/tracing/how-to-tracing/filter-expressions. Empty expressions do not filter. Invalid expressions return 400.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "session_id": "string",
      "project_id": "string",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "traces": [
        {
          "id": "string",
          "trace_id": "string",
          "start_time": "1970-01-01T00:00:00Z",
          "end_time": "1970-01-01T00:00:00Z"
        }
      ],
      "token_count_prompt": 0,
      "token_count_completion": 0,
      "token_count_total": 0
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-sessions-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetSessionsResponseBody](#schemagetsessionsresponsebody)|
|400|Bad Request|Bad Request|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create session annotations

<a id="opIdannotateSessions"></a>

> Code samples

```bash
curl http://localhost:6006/v1/session_annotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": [
      {
        "name": "string",
        "annotator_kind": "LLM",
        "result": {
          "label": "string",
          "score": 0,
          "explanation": "string"
        },
        "metadata": {},
        "identifier": "",
        "session_id": "string"
      }
    ]
  }'
```

`POST /v1/session_annotations`

> Body parameter

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "session_id": "string"
    }
  ]
}
```

<h3 id="create-session-annotations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sync|query|boolean|false|If true, fulfill request synchronously.|
|body|body|[AnnotateSessionsRequestBody](#schemaannotatesessionsrequestbody)|true|none|
|» data|body|[[SessionAnnotationData](#schemasessionannotationdata)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-session-annotations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session annotations inserted successfully|[AnnotateSessionsResponseBody](#schemaannotatesessionsresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Session not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a session note

<a id="opIdcreateSessionNote"></a>

> Code samples

```bash
curl http://localhost:6006/v1/session_notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "session_id": "string",
      "note": "string",
      "identifier": ""
    }
  }'
```

`POST /v1/session_notes`

Add a note annotation to a session. By default each call appends a new note with an auto-generated UUIDv4 identifier, so multiple notes accumulate on the same session. Callers may supply a non-empty `identifier` to upsert on (session_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note, matching the semantics of structured annotations.

> Body parameter

```json
{
  "data": {
    "session_id": "string",
    "note": "string",
    "identifier": ""
  }
}
```

<h3 id="create-a-session-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSessionNoteRequestBody](#schemacreatesessionnoterequestbody)|true|none|
|» data|body|[SessionNoteData](#schemasessionnotedata)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-a-session-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session note created successfully|[CreateSessionNoteResponseBody](#schemacreatesessionnoteresponsebody)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Session not found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-users">users</h1>

## Get the authenticated user

<a id="opIdgetViewer"></a>

> Code samples

```bash
curl http://localhost:6006/v1/user \
  -H 'Accept: application/json'
```

`GET /v1/user`

Returns the profile of the currently authenticated user. When authentication is disabled, returns an anonymous user representation.

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "username": "string",
    "role": "SYSTEM",
    "auth_method": "LOCAL",
    "password": "string",
    "password_needs_reset": true
  }
}
```

<h3 id="get-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The authenticated user's profile.|[GetViewerResponseBody](#schemagetviewerresponsebody)|
|401|Unauthorized|User not found.|Inline|
|403|Forbidden|Forbidden|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List all users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl http://localhost:6006/v1/users \
  -H 'Accept: application/json'
```

`GET /v1/users`

Retrieve a paginated list of all users in the system.

<h3 id="list-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Cursor for pagination (base64-encoded user ID)|
|limit|query|integer|false|The max number of users to return at a time.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "string",
      "username": "string",
      "role": "SYSTEM",
      "auth_method": "LOCAL",
      "password": "string",
      "password_needs_reset": true
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of users.|[GetUsersResponseBody](#schemagetusersresponsebody)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new user

<a id="opIdcreateUser"></a>

> Code samples

```bash
curl http://localhost:6006/v1/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user": {
      "email": "string",
      "username": "string",
      "role": "SYSTEM",
      "auth_method": "LOCAL",
      "password": "string"
    },
    "send_welcome_email": true
  }'
```

`POST /v1/users`

Create a new user with the specified configuration.

> Body parameter

```json
{
  "user": {
    "email": "string",
    "username": "string",
    "role": "SYSTEM",
    "auth_method": "LOCAL",
    "password": "string"
  },
  "send_welcome_email": true
}
```

<h3 id="create-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserRequestBody](#schemacreateuserrequestbody)|true|none|
|» user|body|[LocalUserData](#schemalocaluserdata) \| [OAuth2UserData](#schemaoauth2userdata) \| [LDAPUserData](#schemaldapuserdata)|true|none|
|» » *oneOf*|body|[LocalUserData](#schemalocaluserdata)|false|none|
|» » *oneOf*|body|[OAuth2UserData](#schemaoauth2userdata)|false|none|
|» » *oneOf*|body|[LDAPUserData](#schemaldapuserdata)|false|none|
|» send_welcome_email|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "username": "string",
    "role": "SYSTEM",
    "auth_method": "LOCAL",
    "password": "string",
    "password_needs_reset": true
  }
}
```

<h3 id="create-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly created user.|[CreateUserResponseBody](#schemacreateuserresponsebody)|
|400|Bad Request|Role not found.|Inline|
|403|Forbidden|Forbidden|Inline|
|409|Conflict|Username or email already exists.|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user by ID

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl http://localhost:6006/v1/users/string \
  -X DELETE
```

`DELETE /v1/users/{user_id}`

Delete an existing user by their unique GlobalID.

<h3 id="delete-a-user-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The GlobalID of the user (e.g. 'VXNlcjox').|

<h3 id="delete-a-user-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful deletion.|None|
|403|Forbidden|Cannot delete the default admin or system user|Inline|
|404|Not Found|User not found.|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-secrets">secrets</h1>

## Upsert or delete secrets

<a id="opIdupsertOrDeleteSecrets"></a>

> Code samples

```bash
curl http://localhost:6006/v1/secrets \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "secrets": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  }'
```

`PUT /v1/secrets`

Atomically upsert or delete a batch of secrets. Entries with a non-null `value` are created or updated; entries with `value: null` are deleted. The `value` field is required for every entry, and omitting it returns 422. When the same key appears more than once, the last occurrence wins. Deleting a non-existent key succeeds silently. Secret values are never returned in the response.

> Body parameter

```json
{
  "secrets": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="upsert-or-delete-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpsertOrDeleteSecretsRequest](#schemaupsertordeletesecretsrequest)|true|none|
|» secrets|body|[[SecretKeyValue](#schemasecretkeyvalue)]|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "upserted_keys": [
      "string"
    ],
    "deleted_keys": [
      "string"
    ]
  }
}
```

<h3 id="upsert-or-delete-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ResponseBody_UpsertOrDeleteSecretsResult_](#schemaresponsebody_upsertordeletesecretsresult_)|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-apikeys">api_keys</h1>

## List the authenticated user's API keys

<a id="opIdgetUserApiKeys"></a>

> Code samples

```bash
curl http://localhost:6006/v1/user/api_keys \
  -H 'Accept: application/json'
```

`GET /v1/user/api_keys`

Retrieve the API keys belonging to the currently authenticated user. The keys themselves are not recoverable and are never included in the response.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-the-authenticated-users-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The authenticated user's API keys.|[GetApiKeysResponseBody](#schemagetapikeysresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create an API key for the authenticated user

<a id="opIdcreateUserApiKey"></a>

> Code samples

```bash
curl http://localhost:6006/v1/user/api_keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "name": "string",
      "description": "string",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  }'
```

`POST /v1/user/api_keys`

Create a personal API key for the currently authenticated user. The key inherits the user's role, so it grants no more access than the user already has. Creation requires an access-token session; API keys cannot mint replacement keys. The response contains the key itself, which is shown only once and cannot be retrieved afterwards.

> Body parameter

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-an-api-key-for-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateApiKeyRequestBody](#schemacreateapikeyrequestbody)|true|none|
|» data|body|[ApiKeyData](#schemaapikeydata)|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "key": "string"
  }
}
```

<h3 id="create-an-api-key-for-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly created API key, including the key itself.|[CreateApiKeyResponseBody](#schemacreateapikeyresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List all user API keys

<a id="opIdgetAllUserApiKeys"></a>

> Code samples

```bash
curl http://localhost:6006/v1/users/api_keys \
  -H 'Accept: application/json'
```

`GET /v1/users/api_keys`

Retrieve API keys belonging to human users across the organization. System API keys are excluded. Restricted to admins.

<h3 id="list-all-user-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Cursor for pagination (a UserApiKey GlobalID).|
|limit|query|integer|false|The maximum number of API keys to return (at most 1000).|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-all-user-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of user API keys and their owners.|[GetAllUserApiKeysResponseBody](#schemagetalluserapikeysresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a user API key

<a id="opIddeleteUserApiKey"></a>

> Code samples

```bash
curl http://localhost:6006/v1/user/api_keys/string \
  -X DELETE
```

`DELETE /v1/user/api_keys/{api_key_id}`

Permanently revoke a user API key. Users can revoke their own keys, and admins can revoke keys belonging to other users. The key stops working immediately.

<h3 id="delete-a-user-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key_id|path|string|true|The GlobalID of the API key.|

<h3 id="delete-a-user-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful deletion.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|API key not found.|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List system API keys

<a id="opIdgetSystemApiKeys"></a>

> Code samples

```bash
curl http://localhost:6006/v1/system/api_keys \
  -H 'Accept: application/json'
```

`GET /v1/system/api_keys`

Retrieve all system API keys. System keys belong to the system user rather than to any human, so this endpoint is restricted to admins. The keys themselves are not recoverable and are never included in the response.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="list-system-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The system API keys.|[GetApiKeysResponseBody](#schemagetapikeysresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a system API key

<a id="opIdcreateSystemApiKey"></a>

> Code samples

```bash
curl http://localhost:6006/v1/system/api_keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "data": {
      "name": "string",
      "description": "string",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  }'
```

`POST /v1/system/api_keys`

Create a system API key. System keys belong to the system user rather than to any human, so this endpoint is restricted to admins. Creation requires an admin access-token session or the configured admin secret; API keys cannot mint keys. The response contains the key itself, which is shown only once and cannot be retrieved afterwards.

> Body parameter

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="create-a-system-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateApiKeyRequestBody](#schemacreateapikeyrequestbody)|true|none|
|» data|body|[ApiKeyData](#schemaapikeydata)|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "key": "string"
  }
}
```

<h3 id="create-a-system-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The newly created system API key, including the key itself.|[CreateApiKeyResponseBody](#schemacreateapikeyresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a system API key

<a id="opIddeleteSystemApiKey"></a>

> Code samples

```bash
curl http://localhost:6006/v1/system/api_keys/string \
  -X DELETE
```

`DELETE /v1/system/api_keys/{api_key_id}`

Permanently revoke a system API key. The key stops working immediately. Restricted to admins.

<h3 id="delete-a-system-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key_id|path|string|true|The GlobalID of the system API key.|

<h3 id="delete-a-system-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content returned on successful deletion.|None|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|System API key not found.|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-chatcompletions">chat_completions</h1>

## OpenAI-compatible chat completions

<a id="opIdcreateChatCompletion"></a>

> Code samples

```bash
curl http://localhost:6006/v1/chat/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "messages": [
      {
        "content": "You are a helpful assistant.",
        "role": "system"
      },
      {
        "content": "Say hello.",
        "role": "user"
      }
    ],
    "model": "openai:gpt-4o"
  }'
```

`POST /v1/chat/completions`

Creates a chat completion using the OpenAI wire format, proxying to the selected provider with credentials resolved on the server (secret store first, environment second) — callers never handle provider API keys. Model must be '{provider}:{model_name}' for a built-in provider (one of anthropic, aws, azure_openai, cerebras, deepseek, fireworks, google, groq, meta, minimax, moonshot, ollama, openai, perplexity, together, xai, zai) or 'custom:{provider_id}:{model_name}' for a stored custom provider, e.g. 'openai:gpt-4o' or 'anthropic:claude-sonnet-4-5'. Set `stream: true` for server-sent events of `chat.completion.chunk` payloads terminated by `data: [DONE]`. Tool calling is not supported.

**Phoenix is not an AI gateway.** The same server also takes on trace ingestion traffic, so routing production LLM calls through it competes with ingestion. Use this endpoint only to quickly try out different models in non-production environments.

> Body parameter

```json
{
  "messages": [
    {
      "content": "You are a helpful assistant.",
      "role": "system"
    },
    {
      "content": "Say hello.",
      "role": "user"
    }
  ],
  "model": "openai:gpt-4o"
}
```

<h3 id="openai-compatible-chat-completions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateChatCompletionRequestBody](#schemacreatechatcompletionrequestbody)|true|none|
|» model|body|string|true|Model must be '{provider}:{model_name}' for a built-in provider (one of anthropic, aws, azure_openai, cerebras, deepseek, fireworks, google, groq, meta, minimax, moonshot, ollama, openai, perplexity, together, xai, zai) or 'custom:{provider_id}:{model_name}' for a stored custom provider, e.g. 'openai:gpt-4o' or 'anthropic:claude-sonnet-4-5'.|
|» messages|body|[[ChatCompletionRequestMessage](#schemachatcompletionrequestmessage)]|true|none|
|» stream|body|boolean|false|none|
|» temperature|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» top_p|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» max_tokens|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» max_completion_tokens|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stop|body|string \| [string] \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» frequency_penalty|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» presence_penalty|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» seed|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» n|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» stream_options|body|[ChatCompletionStreamOptions](#schemachatcompletionstreamoptions) \| null|false|none|
|» » *anyOf*|body|[ChatCompletionStreamOptions](#schemachatcompletionstreamoptions)|false|none|
|» » *anyOf*|body|null|false|none|
|» tools|body|[object] \| null|false|none|
|» » *anyOf*|body|[object]|false|none|
|» » *anyOf*|body|null|false|none|
|» tool_choice|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» response_format|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "object": "chat.completion",
  "created": 0,
  "model": "string",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "string"
      },
      "finish_reason": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "string",
    "type": "string",
    "param": "string",
    "code": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "string",
    "type": "string",
    "param": "string",
    "code": "string"
  }
}
```

> 422 Response

```json
{
  "error": {
    "message": "string",
    "type": "string",
    "param": "string",
    "code": "string"
  }
}
```

<h3 id="openai-compatible-chat-completions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ChatCompletion](#schemachatcompletion)|
|400|Bad Request|Bad Request|[ChatCompletionErrorResponse](#schemachatcompletionerrorresponse)|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|[ChatCompletionErrorResponse](#schemachatcompletionerrorresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[ChatCompletionErrorResponse](#schemachatcompletionerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-default">Default</h1>

## Login

<a id="opId_login_auth_login_post"></a>

> Code samples

```bash
curl http://localhost:6006/auth/login \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/login`

Authenticate user via email/password and return access/refresh tokens.

> Example responses

> 200 Response

```json
null
```

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opId_logout_auth_logout_get"></a>

> Code samples

```bash
curl http://localhost:6006/auth/logout \
  -H 'Accept: application/json'
```

`GET /auth/logout`

Log out of every browser session by revoking its tokens, and clear the cookies.

> Example responses

> 200 Response

```json
null
```

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Refresh Tokens

<a id="opId_refresh_tokens_auth_refresh_post"></a>

> Code samples

```bash
curl http://localhost:6006/auth/refresh \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/refresh`

Refresh access and refresh tokens.

> Example responses

> 200 Response

```json
null
```

<h3 id="refresh-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Initiate Password Reset

<a id="opId_initiate_password_reset_auth_password_reset_email_post"></a>

> Code samples

```bash
curl http://localhost:6006/auth/password-reset-email \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/password-reset-email`

Send password reset email to user.

> Example responses

> 200 Response

```json
null
```

<h3 id="initiate-password-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Reset Password

<a id="opId_reset_password_auth_password_reset_post"></a>

> Code samples

```bash
curl http://localhost:6006/auth/password-reset \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/password-reset`

Reset user password using a valid reset token.

> Example responses

> 200 Response

```json
null
```

<h3 id="reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Ldap Login

<a id="opId_ldap_login_auth_ldap_login_post"></a>

> Code samples

```bash
curl http://localhost:6006/auth/ldap/login \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/ldap/login`

Authenticate user via LDAP and return access/refresh tokens.

> Example responses

> 200 Response

```json
null
```

<h3 id="ldap-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Login

<a id="opIdlogin_oauth2__idp_name__login_get"></a>

> Code samples

```bash
curl http://localhost:6006/oauth2/string/login \
  -H 'Accept: application/json'
```

`GET /oauth2/{idp_name}/login`

<h3 id="login-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idp_name|path|string|true|none|
|returnUrl|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="login-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Login

<a id="opIdlogin_oauth2__idp_name__login_post"></a>

> Code samples

```bash
curl http://localhost:6006/oauth2/string/login \
  -X POST \
  -H 'Accept: application/json'
```

`POST /oauth2/{idp_name}/login`

<h3 id="login-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idp_name|path|string|true|none|
|returnUrl|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="login-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create Tokens

<a id="opIdcreate_tokens_oauth2__idp_name__tokens_get"></a>

> Code samples

```bash
curl 'http://localhost:6006/oauth2/string/tokens?state=string' \
  -H 'Accept: application/json' \
  -H 'Cookie: phoenix-oauth2-state=string; phoenix-oauth2-nonce=string'
```

`GET /oauth2/{idp_name}/tokens`

<h3 id="create-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idp_name|path|string|true|none|
|state|query|string|true|none|
|code|query|string \| null|false|none|
|error|query|string \| null|false|none|
|error_description|query|string \| null|false|none|
|phoenix-oauth2-state|cookie|string|true|none|
|phoenix-oauth2-login-context|cookie|string \| null|false|none|
|phoenix-oauth2-nonce|cookie|string|true|none|
|phoenix-oauth2-code-verifier|cookie|string \| null|false|none|

> Example responses

> 200 Response

```json
null
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Version

<a id="opIdversion_arize_phoenix_version_get"></a>

> Code samples

```bash
curl http://localhost:6006/arize_phoenix_version \
  -H 'Accept: application/json'
```

`GET /arize_phoenix_version`

> Example responses

> 200 Response

```json
null
```

<h3 id="version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Check Healthz

<a id="opIdcheck_healthz_healthz_get"></a>

> Code samples

```bash
curl http://localhost:6006/healthz \
  -H 'Accept: application/json'
```

`GET /healthz`

> Example responses

> 200 Response

```json
null
```

<h3 id="check-healthz-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Check Readyz

<a id="opIdcheck_readyz_readyz_get"></a>

> Code samples

```bash
curl http://localhost:6006/readyz \
  -H 'Accept: application/json'
```

`GET /readyz`

> Example responses

> 200 Response

```json
null
```

<h3 id="check-readyz-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="arize-phoenix-rest-api-chat">chat</h1>

## Run Headless Agent

<a id="opIdlegacyServerAgentChat"></a>

> Code samples

```bash
curl http://localhost:6006/agents/server/sessions/string/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "trigger": "submit-message",
    "id": "string",
    "messages": [
      {
        "id": "string",
        "role": "system",
        "metadata": {
          "type": "assistant",
          "sessionId": "string",
          "turnTraceContext": {
            "traceId": "string",
            "rootSpanId": "string",
            "startedAt": "1970-01-01T00:00:00Z"
          },
          "usage": {
            "tokens": {
              "prompt": 0,
              "completion": 0,
              "total": 0
            },
            "promptDetails": {
              "cacheRead": 0,
              "cacheWrite": 0
            }
          },
          "interrupted": false
        },
        "parts": [
          {
            "type": "text",
            "text": "string",
            "state": "streaming",
            "providerMetadata": {
              "property1": {},
              "property2": {}
            }
          }
        ]
      }
    ],
    "ingestTraces": false,
    "exportRemoteTraces": false,
    "attachUserId": false,
    "contexts": [
      {
        "type": "app",
        "currentDateTime": "string",
        "timeZone": "string"
      }
    ],
    "editPermission": "manual",
    "requestedSkills": [
      "string"
    ],
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    }
  }'
```

`POST /agents/server/sessions/{session_id}/chat`

<aside class="warning">
This operation is deprecated
</aside>

> Body parameter

```json
{
  "trigger": "submit-message",
  "id": "string",
  "messages": [
    {
      "id": "string",
      "role": "system",
      "metadata": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    }
  ],
  "ingestTraces": false,
  "exportRemoteTraces": false,
  "attachUserId": false,
  "contexts": [
    {
      "type": "app",
      "currentDateTime": "string",
      "timeZone": "string"
    }
  ],
  "editPermission": "manual",
  "requestedSkills": [
    "string"
  ],
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

<h3 id="run-headless-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|body|body|[LegacyChatRequest](#schemalegacychatrequest)|true|none|
|» *oneOf*|body|[LegacyChatSubmitMessage](#schemalegacychatsubmitmessage)|false|Submit message extended with Phoenix-specific fields.|
|» *oneOf*|body|[LegacyChatRegenerateMessage](#schemalegacychatregeneratemessage)|false|Regenerate message extended with Phoenix-specific fields.|

> Example responses

> 200 Response

```json
null
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="run-headless-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List Sessions

<a id="opIdlistAgentSessions"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions \
  -H 'Accept: application/json'
```

`GET /v1/agent_sessions`

List the viewer's persisted sessions, most recently active first.

<h3 id="list-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string \| null|false|Opaque pagination cursor.|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "is_ephemeral": true
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListAgentSessionsResponseBody](#schemalistagentsessionsresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create Session

<a id="opIdcreateAgentSession"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    },
    "title": "",
    "is_ephemeral": false
  }'
```

`POST /v1/agent_sessions`

Create a persisted agent session owned by the requesting user.

> Body parameter

```json
{
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  },
  "title": "",
  "is_ephemeral": false
}
```

<h3 id="create-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAgentSessionRequestBody](#schemacreateagentsessionrequestbody)|true|none|
|» model|body|[AgentModelSelection](#schemaagentmodelselection)|true|none|
|» title|body|string|false|Optional initial title.|
|» is_ephemeral|body|boolean|false|Whether the session should expire after a period of inactivity.|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "string"
  }
}
```

<h3 id="create-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[CreateAgentSessionResponseBody](#schemacreateagentsessionresponsebody)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get Session

<a id="opIdgetAgentSession"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string \
  -H 'Accept: application/json'
```

`GET /v1/agent_sessions/{session_id}`

Retrieve an owned session's metadata.

<h3 id="get-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "title": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "is_ephemeral": true,
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    },
    "is_active": true,
    "last_message_id": "string"
  }
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GetAgentSessionResponseBody](#schemagetagentsessionresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Patch Session

<a id="opIdpatchAgentSession"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "title": "string",
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    }
  }'
```

`PATCH /v1/agent_sessions/{session_id}`

Update a persisted session's mutable fields.

> Body parameter

```json
{
  "title": "string",
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

<h3 id="patch-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|body|body|[PatchAgentSessionRequestBody](#schemapatchagentsessionrequestbody)|true|none|
|» title|body|string|false|New title for the session|
|» model|body|[AgentModelSelection](#schemaagentmodelselection)|false|New model selection for the session|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "title": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "is_ephemeral": true,
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    },
    "is_active": true,
    "last_message_id": "string"
  }
}
```

> 409 Response

```json
{
  "code": "agent_session_busy",
  "message": "string"
}
```

<h3 id="patch-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PatchAgentSessionResponseBody](#schemapatchagentsessionresponsebody)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|The request conflicts with the session's current state; the body's ``code`` field says how.|[AgentSessionConflictError](#schemaagentsessionconflicterror)|
|422|Unprocessable Entity|Unprocessable Entity|Inline|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List Session Messages

<a id="opIdlistAgentSessionMessages"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string/messages \
  -H 'Accept: application/json'
```

`GET /v1/agent_sessions/{session_id}/messages`

Page through an owned session's persisted transcript, oldest first.

<h3 id="list-session-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|cursor|query|string \| null|false|Opaque pagination cursor.|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "role": "system",
      "metadata": {
        "phoenix": {
          "type": "assistant",
          "sessionId": "string",
          "turnTraceContext": {
            "traceId": "string",
            "rootSpanId": "string",
            "startedAt": "1970-01-01T00:00:00Z"
          },
          "usage": {
            "tokens": {
              "prompt": 0,
              "completion": 0,
              "total": 0
            },
            "promptDetails": {
              "cacheRead": 0,
              "cacheWrite": 0
            }
          },
          "interrupted": false
        },
        "pydantic_ai": {
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    }
  ],
  "next_cursor": "string"
}
```

<h3 id="list-session-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ListAgentSessionMessagesResponseBody](#schemalistagentsessionmessagesresponsebody)|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Compact Agent Session

<a id="opIdcompactAgentSession"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string/compact \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    }
  }'
```

`POST /v1/agent_sessions/{session_id}/compact`

> Body parameter

```json
{
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

<h3 id="compact-agent-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|body|body|[CompactAgentSessionRequestBody](#schemacompactagentsessionrequestbody)|true|none|
|» model|body|[AgentModelSelection](#schemaagentmodelselection)|true|The model the client believes the session is set to. As on the chat route this is a precondition: the summary is generated with the session's persisted selection, and a mismatch is rejected with HTTP 409 and code ``agent_session_model_stale``.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  }
}
```

> 409 Response

```json
{
  "code": "agent_session_busy",
  "message": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="compact-agent-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CompactAgentSessionResponseBody](#schemacompactagentsessionresponsebody)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|The request conflicts with the session's current state; the body's ``code`` field says how.|[AgentSessionConflictError](#schemaagentsessionconflicterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|502|Bad Gateway|Bad Gateway|Inline|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Submit Agent Session Tool Outputs

<a id="opIdsubmitAgentSessionToolOutputs"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string/tool_outputs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "toolOutputs": [
      {
        "type": "string",
        "toolCallId": "string",
        "title": "string",
        "state": "output-available",
        "input": null,
        "output": null,
        "providerExecuted": true,
        "callProviderMetadata": {
          "property1": {},
          "property2": {}
        },
        "resultProviderMetadata": {
          "property1": {},
          "property2": {}
        },
        "preliminary": true,
        "approval": {
          "id": "string"
        }
      }
    ],
    "lastMessageId": "string"
  }'
```

`POST /v1/agent_sessions/{session_id}/tool_outputs`

Persist resolved client tool outputs for the session's open turn.

> Body parameter

```json
{
  "toolOutputs": [
    {
      "type": "string",
      "toolCallId": "string",
      "title": "string",
      "state": "output-available",
      "input": null,
      "output": null,
      "providerExecuted": true,
      "callProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "resultProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "preliminary": true,
      "approval": {
        "id": "string"
      }
    }
  ],
  "lastMessageId": "string"
}
```

<h3 id="submit-agent-session-tool-outputs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|body|body|[SubmitAgentSessionToolOutputsRequestBody](#schemasubmitagentsessiontooloutputsrequestbody)|true|none|
|» toolOutputs|body|[[phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart)]|true|Client tool results for pending calls on the trailing assistant message, matched by ``toolCallId``. Resending a persisted output verbatim is a no-op; an output that differs from the persisted result or matches no call is rejected with HTTP 409 and code ``agent_session_tool_outputs_conflict``.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart)|false|Tool part in output-available state.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart)|false|Tool part in output-error state.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart)|false|Dynamic tool part in output-available state.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart)|false|Dynamic tool part in output-error state.|
|» lastMessageId|body|string|true|The trailing assistant message's id. On mismatch the submission is rejected with HTTP 409 and code ``agent_session_messages_stale``.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  }
}
```

> 409 Response

```json
{
  "code": "agent_session_busy",
  "message": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="submit-agent-session-tool-outputs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SubmitAgentSessionToolOutputsResponseBody](#schemasubmitagentsessiontooloutputsresponsebody)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|The request conflicts with the session's current state; the body's ``code`` field says how.|[AgentSessionConflictError](#schemaagentsessionconflicterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Submit Agent Session Tool Approvals

<a id="opIdsubmitAgentSessionToolApprovals"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string/tool_approvals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "toolApprovals": [
      {
        "toolCallId": "string",
        "approved": true
      }
    ],
    "lastMessageId": "string"
  }'
```

`POST /v1/agent_sessions/{session_id}/tool_approvals`

Persist answered tool approvals for the session's open turn.

> Body parameter

```json
{
  "toolApprovals": [
    {
      "toolCallId": "string",
      "approved": true
    }
  ],
  "lastMessageId": "string"
}
```

<h3 id="submit-agent-session-tool-approvals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|body|body|[SubmitAgentSessionToolApprovalsRequestBody](#schemasubmitagentsessiontoolapprovalsrequestbody)|true|none|
|» toolApprovals|body|[[ToolApproval](#schematoolapproval)]|true|Answers to tool calls awaiting approval on the trailing assistant message, matched by ``toolCallId``. Resending a persisted answer is a no-op; an answer that reverses one, or that matches no call awaiting approval, is rejected with HTTP 409 and code ``agent_session_tool_approvals_conflict``.|
|» lastMessageId|body|string|true|The trailing assistant message's id. On mismatch the submission is rejected with HTTP 409 and code ``agent_session_messages_stale``.|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  }
}
```

> 409 Response

```json
{
  "code": "agent_session_busy",
  "message": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="submit-agent-session-tool-approvals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[SubmitAgentSessionToolApprovalsResponseBody](#schemasubmitagentsessiontoolapprovalsresponsebody)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|The request conflicts with the session's current state; the body's ``code`` field says how.|[AgentSessionConflictError](#schemaagentsessionconflicterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Chat

<a id="opIdagentSessionChat"></a>

> Code samples

```bash
curl http://localhost:6006/v1/agent_sessions/string/chat \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "headless": true,
    "contexts": [
      {
        "type": "app",
        "currentDateTime": "string",
        "timeZone": "string"
      }
    ],
    "editPermission": "manual",
    "requestedSkills": [
      "string"
    ],
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    },
    "trigger": "submit-message",
    "id": "string",
    "message": {
      "id": "string",
      "role": "system",
      "metadata": {
        "phoenix": {
          "type": "assistant",
          "sessionId": "string",
          "turnTraceContext": {
            "traceId": "string",
            "rootSpanId": "string",
            "startedAt": "1970-01-01T00:00:00Z"
          },
          "usage": {
            "tokens": {
              "prompt": 0,
              "completion": 0,
              "total": 0
            },
            "promptDetails": {
              "cacheRead": 0,
              "cacheWrite": 0
            }
          },
          "interrupted": false
        },
        "pydantic_ai": {
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    },
    "toolOutputs": [
      {
        "type": "string",
        "toolCallId": "string",
        "title": "string",
        "state": "output-available",
        "input": null,
        "output": null,
        "providerExecuted": true,
        "callProviderMetadata": {
          "property1": {},
          "property2": {}
        },
        "resultProviderMetadata": {
          "property1": {},
          "property2": {}
        },
        "preliminary": true,
        "approval": {
          "id": "string"
        }
      }
    ],
    "toolApprovals": [
      {
        "toolCallId": "string",
        "approved": true
      }
    ],
    "lastMessageId": "string",
    "credentials": [
      {
        "key": "GITHUB_PERSONAL_ACCESS_TOKEN",
        "value": "password"
      }
    ],
    "recordLocalTraces": false,
    "exportRemoteTraces": false,
    "instrumentUserId": false
  }'
```

`POST /v1/agent_sessions/{session_id}/chat`

> Body parameter

```json
{
  "headless": true,
  "contexts": [
    {
      "type": "app",
      "currentDateTime": "string",
      "timeZone": "string"
    }
  ],
  "editPermission": "manual",
  "requestedSkills": [
    "string"
  ],
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  },
  "trigger": "submit-message",
  "id": "string",
  "message": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  },
  "toolOutputs": [
    {
      "type": "string",
      "toolCallId": "string",
      "title": "string",
      "state": "output-available",
      "input": null,
      "output": null,
      "providerExecuted": true,
      "callProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "resultProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "preliminary": true,
      "approval": {
        "id": "string"
      }
    }
  ],
  "toolApprovals": [
    {
      "toolCallId": "string",
      "approved": true
    }
  ],
  "lastMessageId": "string",
  "credentials": [
    {
      "key": "GITHUB_PERSONAL_ACCESS_TOKEN",
      "value": "password"
    }
  ],
  "recordLocalTraces": false,
  "exportRemoteTraces": false,
  "instrumentUserId": false
}
```

<h3 id="chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session_id|path|string|true|none|
|body|body|[ChatRequestBody](#schemachatrequestbody)|true|none|
|» headless|body|boolean|true|Whether a headless client (terminal or scripted) is driving the turn, as opposed to the browser assistant. Selects the agent configuration the turn runs on.|
|» contexts|body|[[ChatContext](#schemachatcontext)]|false|none|
|» editPermission|body|string|false|none|
|» requestedSkills|body|[string]|false|Skills the user explicitly requested via the prompt's slash-command affordance. The server force-loads each available skill by injecting a synthetic load_skill tool call/result at the tail of the message history. Unknown or context-unavailable names are ignored.|
|» model|body|[AgentModelSelection](#schemaagentmodelselection)|true|The model the client believes the session is set to. This is a precondition, not an instruction: the turn always runs on the session's persisted selection, and a mismatch is rejected with HTTP 409 and code ``agent_session_model_stale`` rather than silently running on — or switching to — an unexpected model. Change the session's model with ``PATCH .../agent_sessions/{session_id}``.|
|» trigger|body|string|false|none|
|» id|body|string|true|none|
|» message|body|[PhoenixUIMessage](#schemaphoenixuimessage) \| null|false|The turn's new user message to append. May be omitted for client-tool continuation, where ``toolOutputs`` resolve the trailing assistant message's pending tool calls instead.|
|» » *anyOf*|body|[PhoenixUIMessage](#schemaphoenixuimessage)|false|``UIMessage`` with metadata narrowed to the Phoenix wire shapes.|
|» » *anyOf*|body|null|false|none|
|» toolOutputs|body|[[phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart)]|false|Client-executed tool results for pending tool calls on the transcript's trailing assistant message, matched by ``toolCallId``. Submitted alone they continue the assistant turn; submitted with ``message`` they resolve dangling tool calls before the new user turn runs.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart)|false|Tool part in output-available state.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart)|false|Tool part in output-error state.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart)|false|Dynamic tool part in output-available state.|
|» » *anyOf*|body|[phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart)|false|Dynamic tool part in output-error state.|
|» toolApprovals|body|[[ToolApproval](#schematoolapproval)]|false|Responses to tool calls awaiting approval on the trailing assistant message, matched by ``toolCallId``. Cannot be combined with ``message``.|
|» lastMessageId|body|string \| null|false|The id of the last transcript message the client has rendered, used for optimistic concurrency. Omit when the session has no messages; required (and validated against the persisted transcript) once it does. On mismatch the server rejects the send with HTTP 409 and code ``agent_session_messages_stale`` — the client should refetch the session before retrying.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» credentials|body|[[ChatRequestCredential](#schemachatrequestcredential)]|false|Client-held credentials for optional integrations (e.g. the user's own GitHub personal access token under the key ``GITHUB_PERSONAL_ACCESS_TOKEN``), used only for the duration of the turn and never persisted. Unknown keys are rejected.|
|» recordLocalTraces|body|boolean|false|none|
|» exportRemoteTraces|body|boolean|false|none|
|» instrumentUserId|body|boolean|false|When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» editPermission|manual|
|» editPermission|bypass|

> Example responses

> 200 Response

```json
null
```

> 409 Response

```json
{
  "code": "agent_session_busy",
  "message": "string"
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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|
|404|Not Found|Not Found|Inline|
|409|Conflict|The request conflicts with the session's current state; the body's ``code`` field says how.|[AgentSessionConflictError](#schemaagentsessionconflicterror)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|507|Insufficient Storage|Insufficient Storage|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AddDatasetLabelToDatasetResponseBody">AddDatasetLabelToDatasetResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaadddatasetlabeltodatasetresponsebody"></a>
<a id="schema_AddDatasetLabelToDatasetResponseBody"></a>
<a id="tocSadddatasetlabeltodatasetresponsebody"></a>
<a id="tocsadddatasetlabeltodatasetresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetLabel](#schemadatasetlabel)|true|none|none|

<h2 id="tocS_AgentModelSelection">AgentModelSelection</h2>
<!-- backwards compatibility -->
<a id="schemaagentmodelselection"></a>
<a id="schema_AgentModelSelection"></a>
<a id="tocSagentmodelselection"></a>
<a id="tocsagentmodelselection"></a>

```json
{
  "providerType": "custom",
  "providerId": "string",
  "modelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CustomProviderModelSelection](#schemacustomprovidermodelselection)|false|none|Chat against a stored custom provider record.|
|*oneOf*|[BuiltInProviderModelSelection](#schemabuiltinprovidermodelselection)|false|none|Chat against a Phoenix built-in provider.<br><br>Credentials and connection details (base URL, Azure endpoint, AWS<br>region) are resolved from the secret store first and the process<br>environment second.|

<h2 id="tocS_AgentSessionConflictError">AgentSessionConflictError</h2>
<!-- backwards compatibility -->
<a id="schemaagentsessionconflicterror"></a>
<a id="schema_AgentSessionConflictError"></a>
<a id="tocSagentsessionconflicterror"></a>
<a id="tocsagentsessionconflicterror"></a>

```json
{
  "code": "agent_session_busy",
  "message": "string"
}
```

Body of every HTTP 409 returned by the agent session routes.

- ``agent_session_busy``: another turn holds the session's turn lock.
- ``agent_session_model_stale``: the request asserted a model the session
  is no longer set to; refetch the session before retrying.
- ``agent_session_messages_stale``: the send's ``lastMessageId`` no longer
  matches the persisted transcript — another client appended; refetch the
  transcript and retry.
- ``agent_session_tool_outputs_conflict``: the submitted ``toolOutputs`` do
  not match the transcript's trailing assistant message (no trailing
  assistant message to continue, an unknown ``toolCallId``, or a tool-name
  mismatch). Unlike ``agent_session_messages_stale`` this is not a
  concurrent-writer race but an inconsistent request; fix the client
  rather than retrying.
- ``agent_session_tool_approvals_conflict``: the submitted ``toolApprovals``
  do not match the transcript's trailing assistant message (no trailing
  assistant message to answer, an unknown ``toolCallId``, a call that is
  not awaiting approval, or a reversal of an already-persisted answer).
  Like the tool-output conflict this is an inconsistent request rather than
  a concurrent-writer race; fix the client rather than retrying.
- ``agent_session_already_compact``: there are no complete turns to
  compact — either nothing new has finished since the transcript's latest
  checkpoint, or a concurrent request's checkpoint already covers them.
  Not retryable; the conversation is as compact as it can get.
- ``agent_session_compaction_conflict``: the conversation changed while it
  was being compacted; retry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Machine-readable reason the request conflicted.|
|message|string \| null|false|none|Optional human-readable elaboration on the conflict.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|agent_session_busy|
|code|agent_session_model_stale|
|code|agent_session_messages_stale|
|code|agent_session_tool_outputs_conflict|
|code|agent_session_tool_approvals_conflict|
|code|agent_session_already_compact|
|code|agent_session_compaction_conflict|

<h2 id="tocS_AgentSessionData">AgentSessionData</h2>
<!-- backwards compatibility -->
<a id="schemaagentsessiondata"></a>
<a id="schema_AgentSessionData"></a>
<a id="tocSagentsessiondata"></a>
<a id="tocsagentsessiondata"></a>

```json
{
  "id": "string",
  "title": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "is_ephemeral": true,
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  },
  "is_active": true,
  "last_message_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|is_ephemeral|boolean|true|none|none|
|model|[AgentModelSelection](#schemaagentmodelselection)|true|none|none|
|is_active|boolean|true|none|Whether a response is currently streaming on this session, i.e. its lock has a live (non-stale) heartbeat.|
|last_message_id|string \| null|false|none|The message ID of the most recently persisted transcript message, or null for an empty transcript.|

<h2 id="tocS_AgentSessionSummary">AgentSessionSummary</h2>
<!-- backwards compatibility -->
<a id="schemaagentsessionsummary"></a>
<a id="schema_AgentSessionSummary"></a>
<a id="tocSagentsessionsummary"></a>
<a id="tocsagentsessionsummary"></a>

```json
{
  "id": "string",
  "title": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "is_ephemeral": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|is_ephemeral|boolean|true|none|none|

<h2 id="tocS_AnnotateSessionsRequestBody">AnnotateSessionsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatesessionsrequestbody"></a>
<a id="schema_AnnotateSessionsRequestBody"></a>
<a id="tocSannotatesessionsrequestbody"></a>
<a id="tocsannotatesessionsrequestbody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "session_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SessionAnnotationData](#schemasessionannotationdata)]|true|none|none|

<h2 id="tocS_AnnotateSessionsResponseBody">AnnotateSessionsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatesessionsresponsebody"></a>
<a id="schema_AnnotateSessionsResponseBody"></a>
<a id="tocSannotatesessionsresponsebody"></a>
<a id="tocsannotatesessionsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InsertedSessionAnnotation](#schemainsertedsessionannotation)]|true|none|none|

<h2 id="tocS_AnnotateSpanDocumentsRequestBody">AnnotateSpanDocumentsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatespandocumentsrequestbody"></a>
<a id="schema_AnnotateSpanDocumentsRequestBody"></a>
<a id="tocSannotatespandocumentsrequestbody"></a>
<a id="tocsannotatespandocumentsrequestbody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "span_id": "string",
      "document_position": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SpanDocumentAnnotationData](#schemaspandocumentannotationdata)]|true|none|none|

<h2 id="tocS_AnnotateSpanDocumentsResponseBody">AnnotateSpanDocumentsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatespandocumentsresponsebody"></a>
<a id="schema_AnnotateSpanDocumentsResponseBody"></a>
<a id="tocSannotatespandocumentsresponsebody"></a>
<a id="tocsannotatespandocumentsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InsertedSpanDocumentAnnotation](#schemainsertedspandocumentannotation)]|true|none|none|

<h2 id="tocS_AnnotateSpansRequestBody">AnnotateSpansRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatespansrequestbody"></a>
<a id="schema_AnnotateSpansRequestBody"></a>
<a id="tocSannotatespansrequestbody"></a>
<a id="tocsannotatespansrequestbody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "span_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SpanAnnotationData](#schemaspanannotationdata)]|true|none|none|

<h2 id="tocS_AnnotateSpansResponseBody">AnnotateSpansResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatespansresponsebody"></a>
<a id="schema_AnnotateSpansResponseBody"></a>
<a id="tocSannotatespansresponsebody"></a>
<a id="tocsannotatespansresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InsertedSpanAnnotation](#schemainsertedspanannotation)]|true|none|none|

<h2 id="tocS_AnnotateTracesRequestBody">AnnotateTracesRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatetracesrequestbody"></a>
<a id="schema_AnnotateTracesRequestBody"></a>
<a id="tocSannotatetracesrequestbody"></a>
<a id="tocsannotatetracesrequestbody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "trace_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TraceAnnotationData](#schematraceannotationdata)]|true|none|The trace annotations to be upserted|

<h2 id="tocS_AnnotateTracesResponseBody">AnnotateTracesResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaannotatetracesresponsebody"></a>
<a id="schema_AnnotateTracesResponseBody"></a>
<a id="tocSannotatetracesresponsebody"></a>
<a id="tocsannotatetracesresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[InsertedTraceAnnotation](#schemainsertedtraceannotation)]|true|none|none|

<h2 id="tocS_AnnotationResult">AnnotationResult</h2>
<!-- backwards compatibility -->
<a id="schemaannotationresult"></a>
<a id="schema_AnnotationResult"></a>
<a id="tocSannotationresult"></a>
<a id="tocsannotationresult"></a>

```json
{
  "label": "string",
  "score": 0,
  "explanation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string \| null|false|none|The label assigned by the annotation|
|score|number \| null|false|none|The score assigned by the annotation|
|explanation|string \| null|false|none|Explanation of the annotation result|

<h2 id="tocS_AnonymousUser">AnonymousUser</h2>
<!-- backwards compatibility -->
<a id="schemaanonymoususer"></a>
<a id="schema_AnonymousUser"></a>
<a id="tocSanonymoususer"></a>
<a id="tocsanonymoususer"></a>

```json
{
  "auth_method": "ANONYMOUS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_method|string|true|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|created_at|string(date-time)|true|none|none|
|expires_at|string(date-time) \| null|false|none|none|

<h2 id="tocS_ApiKeyData">ApiKeyData</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydata"></a>
<a id="schema_ApiKeyData"></a>
<a id="tocSapikeydata"></a>
<a id="tocsapikeydata"></a>

```json
{
  "name": "string",
  "description": "string",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A human-readable name for the API key.|
|description|string \| null|false|none|An optional description of what the API key is for.|
|expires_at|string(date-time) \| null|false|none|When the API key expires. The key never expires when omitted.|

<h2 id="tocS_ApiKeyUser">ApiKeyUser</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyuser"></a>
<a id="schema_ApiKeyUser"></a>
<a id="tocSapikeyuser"></a>
<a id="tocsapikeyuser"></a>

```json
{
  "id": "string",
  "username": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|username|string|true|none|none|
|email|string \| null|true|none|none|

<h2 id="tocS_AppContext">AppContext</h2>
<!-- backwards compatibility -->
<a id="schemaappcontext"></a>
<a id="schema_AppContext"></a>
<a id="tocSappcontext"></a>
<a id="tocsappcontext"></a>

```json
{
  "type": "app",
  "currentDateTime": "string",
  "timeZone": "string"
}
```

Per-turn browser clock context for resolving relative time requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|currentDateTime|string|true|none|none|
|timeZone|string|true|none|none|

<h2 id="tocS_AssignAnnotationConfigToProjectResponseBody">AssignAnnotationConfigToProjectResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaassignannotationconfigtoprojectresponsebody"></a>
<a id="schema_AssignAnnotationConfigToProjectResponseBody"></a>
<a id="tocSassignannotationconfigtoprojectresponsebody"></a>
<a id="tocsassignannotationconfigtoprojectresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)|true|none|none|

<h2 id="tocS_AssistantMessageMetadataUsage">AssistantMessageMetadataUsage</h2>
<!-- backwards compatibility -->
<a id="schemaassistantmessagemetadatausage"></a>
<a id="schema_AssistantMessageMetadataUsage"></a>
<a id="tocSassistantmessagemetadatausage"></a>
<a id="tocsassistantmessagemetadatausage"></a>

```json
{
  "tokens": {
    "prompt": 0,
    "completion": 0,
    "total": 0
  },
  "promptDetails": {
    "cacheRead": 0,
    "cacheWrite": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokens|[AssistantMessageMetadataUsageTokens](#schemaassistantmessagemetadatausagetokens)|true|none|none|
|promptDetails|[AssistantMessageMetadataUsageCacheTokenDetails](#schemaassistantmessagemetadatausagecachetokendetails) \| null|false|none|none|

<h2 id="tocS_AssistantMessageMetadataUsageCacheTokenDetails">AssistantMessageMetadataUsageCacheTokenDetails</h2>
<!-- backwards compatibility -->
<a id="schemaassistantmessagemetadatausagecachetokendetails"></a>
<a id="schema_AssistantMessageMetadataUsageCacheTokenDetails"></a>
<a id="tocSassistantmessagemetadatausagecachetokendetails"></a>
<a id="tocsassistantmessagemetadatausagecachetokendetails"></a>

```json
{
  "cacheRead": 0,
  "cacheWrite": 0
}
```

Prompt-cache token counts, mounted as the usage payload's
``prompt_details`` because cached tokens are a breakdown of the prompt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheRead|integer|true|none|none|
|cacheWrite|integer|true|none|none|

<h2 id="tocS_AssistantMessageMetadataUsageTokens">AssistantMessageMetadataUsageTokens</h2>
<!-- backwards compatibility -->
<a id="schemaassistantmessagemetadatausagetokens"></a>
<a id="schema_AssistantMessageMetadataUsageTokens"></a>
<a id="tocSassistantmessagemetadatausagetokens"></a>
<a id="tocsassistantmessagemetadatausagetokens"></a>

```json
{
  "prompt": 0,
  "completion": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|integer|true|none|none|
|completion|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_BuiltInModelProvider">BuiltInModelProvider</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinmodelprovider"></a>
<a id="schema_BuiltInModelProvider"></a>
<a id="tocSbuiltinmodelprovider"></a>
<a id="tocsbuiltinmodelprovider"></a>

```json
{
  "provider": "OPENAI",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[ModelProvider](#schemamodelprovider)|true|none|The provider family identifier, accepted wherever a built-in model provider is specified (e.g. 'OPENAI').|
|name|string|true|none|The human-readable name of the provider family (e.g. 'OpenAI').|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|OPENAI|
|provider|AZURE_OPENAI|
|provider|ANTHROPIC|
|provider|GOOGLE|
|provider|DEEPSEEK|
|provider|XAI|
|provider|OLLAMA|
|provider|AWS|
|provider|CEREBRAS|
|provider|FIREWORKS|
|provider|GROQ|
|provider|MOONSHOT|
|provider|MINIMAX|
|provider|PERPLEXITY|
|provider|TOGETHER|
|provider|ZAI|
|provider|META|

<h2 id="tocS_BuiltInProviderModelSelection">BuiltInProviderModelSelection</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinprovidermodelselection"></a>
<a id="schema_BuiltInProviderModelSelection"></a>
<a id="tocSbuiltinprovidermodelselection"></a>
<a id="tocsbuiltinprovidermodelselection"></a>

```json
{
  "providerType": "builtin",
  "provider": "OPENAI",
  "modelName": "string"
}
```

Chat against a Phoenix built-in provider.

Credentials and connection details (base URL, Azure endpoint, AWS
region) are resolved from the secret store first and the process
environment second.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerType|string|true|none|none|
|provider|[ModelProvider](#schemamodelprovider)|true|none|none|
|modelName|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|OPENAI|
|provider|AZURE_OPENAI|
|provider|ANTHROPIC|
|provider|GOOGLE|
|provider|DEEPSEEK|
|provider|XAI|
|provider|OLLAMA|
|provider|AWS|
|provider|CEREBRAS|
|provider|FIREWORKS|
|provider|GROQ|
|provider|MOONSHOT|
|provider|MINIMAX|
|provider|PERPLEXITY|
|provider|TOGETHER|
|provider|ZAI|
|provider|META|

<h2 id="tocS_CategoricalAnnotationConfig">CategoricalAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalannotationconfig"></a>
<a id="schema_CategoricalAnnotationConfig"></a>
<a id="tocScategoricalannotationconfig"></a>
<a id="tocscategoricalannotationconfig"></a>

```json
{
  "name": "string",
  "type": "CATEGORICAL",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "values": [
    {
      "label": "string",
      "score": 0
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|description|string \| null|false|none|none|
|optimization_direction|[OptimizationDirection](#schemaoptimizationdirection)|true|none|none|
|values|[[CategoricalAnnotationValue](#schemacategoricalannotationvalue)]|true|none|none|
|id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|optimization_direction|MINIMIZE|
|optimization_direction|MAXIMIZE|
|optimization_direction|NONE|

<h2 id="tocS_CategoricalAnnotationConfigData">CategoricalAnnotationConfigData</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalannotationconfigdata"></a>
<a id="schema_CategoricalAnnotationConfigData"></a>
<a id="tocScategoricalannotationconfigdata"></a>
<a id="tocscategoricalannotationconfigdata"></a>

```json
{
  "name": "string",
  "type": "CATEGORICAL",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "values": [
    {
      "label": "string",
      "score": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|description|string \| null|false|none|none|
|optimization_direction|[OptimizationDirection](#schemaoptimizationdirection)|true|none|none|
|values|[[CategoricalAnnotationValue](#schemacategoricalannotationvalue)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|optimization_direction|MINIMIZE|
|optimization_direction|MAXIMIZE|
|optimization_direction|NONE|

<h2 id="tocS_CategoricalAnnotationValue">CategoricalAnnotationValue</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalannotationvalue"></a>
<a id="schema_CategoricalAnnotationValue"></a>
<a id="tocScategoricalannotationvalue"></a>
<a id="tocscategoricalannotationvalue"></a>

```json
{
  "label": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|score|number \| null|false|none|none|

<h2 id="tocS_ChatCompletion">ChatCompletion</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletion"></a>
<a id="schema_ChatCompletion"></a>
<a id="tocSchatcompletion"></a>
<a id="tocschatcompletion"></a>

```json
{
  "id": "string",
  "object": "chat.completion",
  "created": 0,
  "model": "string",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "string"
      },
      "finish_reason": "string"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0,
    "prompt_tokens_details": {
      "cached_tokens": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|object|string|false|none|none|
|created|integer|true|none|none|
|model|string|true|none|none|
|choices|[[ChatCompletionChoice](#schemachatcompletionchoice)]|true|none|none|
|usage|[ChatCompletionUsage](#schemachatcompletionusage)|true|none|none|

<h2 id="tocS_ChatCompletionChoice">ChatCompletionChoice</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionchoice"></a>
<a id="schema_ChatCompletionChoice"></a>
<a id="tocSchatcompletionchoice"></a>
<a id="tocschatcompletionchoice"></a>

```json
{
  "index": 0,
  "message": {
    "role": "assistant",
    "content": "string"
  },
  "finish_reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer|false|none|none|
|message|[ChatCompletionMessage](#schemachatcompletionmessage)|true|none|none|
|finish_reason|string|true|none|none|

<h2 id="tocS_ChatCompletionErrorDetail">ChatCompletionErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionerrordetail"></a>
<a id="schema_ChatCompletionErrorDetail"></a>
<a id="tocSchatcompletionerrordetail"></a>
<a id="tocschatcompletionerrordetail"></a>

```json
{
  "message": "string",
  "type": "string",
  "param": "string",
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|type|string|true|none|none|
|param|string \| null|false|none|none|
|code|string \| null|false|none|none|

<h2 id="tocS_ChatCompletionErrorResponse">ChatCompletionErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionerrorresponse"></a>
<a id="schema_ChatCompletionErrorResponse"></a>
<a id="tocSchatcompletionerrorresponse"></a>
<a id="tocschatcompletionerrorresponse"></a>

```json
{
  "error": {
    "message": "string",
    "type": "string",
    "param": "string",
    "code": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ChatCompletionErrorDetail](#schemachatcompletionerrordetail)|true|none|none|

<h2 id="tocS_ChatCompletionMessage">ChatCompletionMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionmessage"></a>
<a id="schema_ChatCompletionMessage"></a>
<a id="tocSchatcompletionmessage"></a>
<a id="tocschatcompletionmessage"></a>

```json
{
  "role": "assistant",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|content|string|true|none|none|

<h2 id="tocS_ChatCompletionRequestMessage">ChatCompletionRequestMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionrequestmessage"></a>
<a id="schema_ChatCompletionRequestMessage"></a>
<a id="tocSchatcompletionrequestmessage"></a>
<a id="tocschatcompletionrequestmessage"></a>

```json
{
  "role": "system",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|content|string \| [[ChatCompletionTextPart](#schemachatcompletiontextpart)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|system|
|role|developer|
|role|user|
|role|assistant|

<h2 id="tocS_ChatCompletionStreamOptions">ChatCompletionStreamOptions</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionstreamoptions"></a>
<a id="schema_ChatCompletionStreamOptions"></a>
<a id="tocSchatcompletionstreamoptions"></a>
<a id="tocschatcompletionstreamoptions"></a>

```json
{
  "include_usage": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include_usage|boolean|false|none|none|

<h2 id="tocS_ChatCompletionTextPart">ChatCompletionTextPart</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletiontextpart"></a>
<a id="schema_ChatCompletionTextPart"></a>
<a id="tocSchatcompletiontextpart"></a>
<a id="tocschatcompletiontextpart"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_ChatCompletionUsage">ChatCompletionUsage</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionusage"></a>
<a id="schema_ChatCompletionUsage"></a>
<a id="tocSchatcompletionusage"></a>
<a id="tocschatcompletionusage"></a>

```json
{
  "prompt_tokens": 0,
  "completion_tokens": 0,
  "total_tokens": 0,
  "prompt_tokens_details": {
    "cached_tokens": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt_tokens|integer|true|none|none|
|completion_tokens|integer|true|none|none|
|total_tokens|integer|true|none|none|
|prompt_tokens_details|[ChatCompletionUsagePromptTokensDetails](#schemachatcompletionusageprompttokensdetails) \| null|false|none|none|

<h2 id="tocS_ChatCompletionUsagePromptTokensDetails">ChatCompletionUsagePromptTokensDetails</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionusageprompttokensdetails"></a>
<a id="schema_ChatCompletionUsagePromptTokensDetails"></a>
<a id="tocSchatcompletionusageprompttokensdetails"></a>
<a id="tocschatcompletionusageprompttokensdetails"></a>

```json
{
  "cached_tokens": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cached_tokens|integer|true|none|none|

<h2 id="tocS_ChatContext">ChatContext</h2>
<!-- backwards compatibility -->
<a id="schemachatcontext"></a>
<a id="schema_ChatContext"></a>
<a id="tocSchatcontext"></a>
<a id="tocschatcontext"></a>

```json
{
  "type": "app",
  "currentDateTime": "string",
  "timeZone": "string"
}
```

Discriminated union of every UI-state context the agent understands.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AppContext](#schemaappcontext)|false|none|Per-turn browser clock context for resolving relative time requests.|
|*oneOf*|[ProjectUIContext](#schemaprojectuicontext)|false|none|none|
|*oneOf*|[TraceUIContext](#schematraceuicontext)|false|none|none|
|*oneOf*|[SessionUIContext](#schemasessionuicontext)|false|none|none|
|*oneOf*|[PromptUIContext](#schemapromptuicontext)|false|none|none|
|*oneOf*|[PromptVersionUIContext](#schemapromptversionuicontext)|false|none|none|
|*oneOf*|[SpanUIContext](#schemaspanuicontext)|false|none|none|
|*oneOf*|[PlaygroundUIContext](#schemaplaygrounduicontext)|false|none|none|
|*oneOf*|[CodeEvaluatorUIContext](#schemacodeevaluatoruicontext)|false|none|none|
|*oneOf*|[LlmEvaluatorUIContext](#schemallmevaluatoruicontext)|false|none|none|
|*oneOf*|[DatasetUIContext](#schemadatasetuicontext)|false|none|none|
|*oneOf*|[GraphQLContext](#schemagraphqlcontext)|false|none|**Deprecated.** Deprecated GraphQL mutations opt-in.|
|*oneOf*|[WebAccessContext](#schemawebaccesscontext)|false|none|User's per-turn request to expose web search / fetch tools.|
|*oneOf*|[SubagentsContext](#schemasubagentscontext)|false|none|User's per-turn request to expose the subagent-spawning tool.|

<h2 id="tocS_ChatRequestBody">ChatRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemachatrequestbody"></a>
<a id="schema_ChatRequestBody"></a>
<a id="tocSchatrequestbody"></a>
<a id="tocschatrequestbody"></a>

```json
{
  "headless": true,
  "contexts": [
    {
      "type": "app",
      "currentDateTime": "string",
      "timeZone": "string"
    }
  ],
  "editPermission": "manual",
  "requestedSkills": [
    "string"
  ],
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  },
  "trigger": "submit-message",
  "id": "string",
  "message": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  },
  "toolOutputs": [
    {
      "type": "string",
      "toolCallId": "string",
      "title": "string",
      "state": "output-available",
      "input": null,
      "output": null,
      "providerExecuted": true,
      "callProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "resultProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "preliminary": true,
      "approval": {
        "id": "string"
      }
    }
  ],
  "toolApprovals": [
    {
      "toolCallId": "string",
      "approved": true
    }
  ],
  "lastMessageId": "string",
  "credentials": [
    {
      "key": "GITHUB_PERSONAL_ACCESS_TOKEN",
      "value": "password"
    }
  ],
  "recordLocalTraces": false,
  "exportRemoteTraces": false,
  "instrumentUserId": false
}
```

Assistant chat submit request payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headless|boolean|true|none|Whether a headless client (terminal or scripted) is driving the turn, as opposed to the browser assistant. Selects the agent configuration the turn runs on.|
|contexts|[[ChatContext](#schemachatcontext)]|false|none|none|
|editPermission|string|false|none|none|
|requestedSkills|[string]|false|none|Skills the user explicitly requested via the prompt's slash-command affordance. The server force-loads each available skill by injecting a synthetic load_skill tool call/result at the tail of the message history. Unknown or context-unavailable names are ignored.|
|model|[AgentModelSelection](#schemaagentmodelselection)|true|none|The model the client believes the session is set to. This is a precondition, not an instruction: the turn always runs on the session's persisted selection, and a mismatch is rejected with HTTP 409 and code ``agent_session_model_stale`` rather than silently running on — or switching to — an unexpected model. Change the session's model with ``PATCH .../agent_sessions/{session_id}``.|
|trigger|string|false|none|none|
|id|string|true|none|none|
|message|[PhoenixUIMessage](#schemaphoenixuimessage) \| null|false|none|The turn's new user message to append. May be omitted for client-tool continuation, where ``toolOutputs`` resolve the trailing assistant message's pending tool calls instead.|
|toolOutputs|[[phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart)]|false|none|Client-executed tool results for pending tool calls on the transcript's trailing assistant message, matched by ``toolCallId``. Submitted alone they continue the assistant turn; submitted with ``message`` they resolve dangling tool calls before the new user turn runs.|
|toolApprovals|[[ToolApproval](#schematoolapproval)]|false|none|Responses to tool calls awaiting approval on the trailing assistant message, matched by ``toolCallId``. Cannot be combined with ``message``.|
|lastMessageId|string \| null|false|none|The id of the last transcript message the client has rendered, used for optimistic concurrency. Omit when the session has no messages; required (and validated against the persisted transcript) once it does. On mismatch the server rejects the send with HTTP 409 and code ``agent_session_messages_stale`` — the client should refetch the session before retrying.|
|credentials|[[ChatRequestCredential](#schemachatrequestcredential)]|false|none|Client-held credentials for optional integrations (e.g. the user's own GitHub personal access token under the key ``GITHUB_PERSONAL_ACCESS_TOKEN``), used only for the duration of the turn and never persisted. Unknown keys are rejected.|
|recordLocalTraces|boolean|false|none|none|
|exportRemoteTraces|boolean|false|none|none|
|instrumentUserId|boolean|false|none|When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.|

#### Enumerated Values

|Property|Value|
|---|---|
|editPermission|manual|
|editPermission|bypass|

<h2 id="tocS_ChatRequestCredential">ChatRequestCredential</h2>
<!-- backwards compatibility -->
<a id="schemachatrequestcredential"></a>
<a id="schema_ChatRequestCredential"></a>
<a id="tocSchatrequestcredential"></a>
<a id="tocschatrequestcredential"></a>

```json
{
  "key": "GITHUB_PERSONAL_ACCESS_TOKEN",
  "value": "password"
}
```

One client-held credential riding the request for the duration of a turn.

The value is ephemeral: it is injected server-side as transport auth for
the matching integration and is never persisted, traced, or echoed. It is
top-level on the request body — never part of the message — so it cannot
reach the session transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The credential's secret-key name.|
|value|string(password)|true|write-only|none|

<h2 id="tocS_CodeEvaluatorUIContext">CodeEvaluatorUIContext</h2>
<!-- backwards compatibility -->
<a id="schemacodeevaluatoruicontext"></a>
<a id="schema_CodeEvaluatorUIContext"></a>
<a id="tocScodeevaluatoruicontext"></a>
<a id="tocscodeevaluatoruicontext"></a>

```json
{
  "type": "code_evaluator",
  "evaluatorNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|evaluatorNodeId|string \| null|false|none|none|

<h2 id="tocS_CompactAgentSessionRequestBody">CompactAgentSessionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacompactagentsessionrequestbody"></a>
<a id="schema_CompactAgentSessionRequestBody"></a>
<a id="tocScompactagentsessionrequestbody"></a>
<a id="tocscompactagentsessionrequestbody"></a>

```json
{
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

Request a model-generated checkpoint for a persisted conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|[AgentModelSelection](#schemaagentmodelselection)|true|none|The model the client believes the session is set to. As on the chat route this is a precondition: the summary is generated with the session's persisted selection, and a mismatch is rejected with HTTP 409 and code ``agent_session_model_stale``.|

<h2 id="tocS_CompactAgentSessionResponseBody">CompactAgentSessionResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacompactagentsessionresponsebody"></a>
<a id="schema_CompactAgentSessionResponseBody"></a>
<a id="tocScompactagentsessionresponsebody"></a>
<a id="tocscompactagentsessionresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  }
}
```

The checkpoint message this request created. A 200 always means a new
checkpoint was persisted; every other outcome is an HTTP 409 whose body's
``code`` says why (see ``AgentSessionConflictError``).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PhoenixUIMessage](#schemaphoenixuimessage)|true|none|``UIMessage`` with metadata narrowed to the Phoenix wire shapes.|

<h2 id="tocS_ContinuousAnnotationConfig">ContinuousAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousannotationconfig"></a>
<a id="schema_ContinuousAnnotationConfig"></a>
<a id="tocScontinuousannotationconfig"></a>
<a id="tocscontinuousannotationconfig"></a>

```json
{
  "name": "string",
  "type": "CONTINUOUS",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "lower_bound": 0,
  "upper_bound": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|description|string \| null|false|none|none|
|optimization_direction|[OptimizationDirection](#schemaoptimizationdirection)|true|none|none|
|lower_bound|number \| null|false|none|none|
|upper_bound|number \| null|false|none|none|
|id|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|optimization_direction|MINIMIZE|
|optimization_direction|MAXIMIZE|
|optimization_direction|NONE|

<h2 id="tocS_ContinuousAnnotationConfigData">ContinuousAnnotationConfigData</h2>
<!-- backwards compatibility -->
<a id="schemacontinuousannotationconfigdata"></a>
<a id="schema_ContinuousAnnotationConfigData"></a>
<a id="tocScontinuousannotationconfigdata"></a>
<a id="tocscontinuousannotationconfigdata"></a>

```json
{
  "name": "string",
  "type": "CONTINUOUS",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "lower_bound": 0,
  "upper_bound": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|description|string \| null|false|none|none|
|optimization_direction|[OptimizationDirection](#schemaoptimizationdirection)|true|none|none|
|lower_bound|number \| null|false|none|none|
|upper_bound|number \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|optimization_direction|MINIMIZE|
|optimization_direction|MAXIMIZE|
|optimization_direction|NONE|

<h2 id="tocS_CreateAgentSessionRequestBody">CreateAgentSessionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentsessionrequestbody"></a>
<a id="schema_CreateAgentSessionRequestBody"></a>
<a id="tocScreateagentsessionrequestbody"></a>
<a id="tocscreateagentsessionrequestbody"></a>

```json
{
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  },
  "title": "",
  "is_ephemeral": false
}
```

Request body for creating a persisted agent session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|[AgentModelSelection](#schemaagentmodelselection)|true|none|none|
|title|string|false|none|Optional initial title.|
|is_ephemeral|boolean|false|none|Whether the session should expire after a period of inactivity.|

<h2 id="tocS_CreateAgentSessionResponseBody">CreateAgentSessionResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateagentsessionresponsebody"></a>
<a id="schema_CreateAgentSessionResponseBody"></a>
<a id="tocScreateagentsessionresponsebody"></a>
<a id="tocscreateagentsessionresponsebody"></a>

```json
{
  "data": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CreatedAgentSession](#schemacreatedagentsession)|true|none|none|

<h2 id="tocS_CreateAnnotationConfigData">CreateAnnotationConfigData</h2>
<!-- backwards compatibility -->
<a id="schemacreateannotationconfigdata"></a>
<a id="schema_CreateAnnotationConfigData"></a>
<a id="tocScreateannotationconfigdata"></a>
<a id="tocscreateannotationconfigdata"></a>

```json
{
  "name": "string",
  "type": "CATEGORICAL",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "values": [
    {
      "label": "string",
      "score": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CategoricalAnnotationConfigData](#schemacategoricalannotationconfigdata)|false|none|none|
|*oneOf*|[ContinuousAnnotationConfigData](#schemacontinuousannotationconfigdata)|false|none|none|
|*oneOf*|[FreeformAnnotationConfigData](#schemafreeformannotationconfigdata)|false|none|none|

<h2 id="tocS_CreateAnnotationConfigResponseBody">CreateAnnotationConfigResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateannotationconfigresponsebody"></a>
<a id="schema_CreateAnnotationConfigResponseBody"></a>
<a id="tocScreateannotationconfigresponsebody"></a>
<a id="tocscreateannotationconfigresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)|true|none|none|

<h2 id="tocS_CreateApiKeyRequestBody">CreateApiKeyRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyrequestbody"></a>
<a id="schema_CreateApiKeyRequestBody"></a>
<a id="tocScreateapikeyrequestbody"></a>
<a id="tocscreateapikeyrequestbody"></a>

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "expires_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ApiKeyData](#schemaapikeydata)|true|none|none|

<h2 id="tocS_CreateApiKeyResponseBody">CreateApiKeyResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikeyresponsebody"></a>
<a id="schema_CreateApiKeyResponseBody"></a>
<a id="tocScreateapikeyresponsebody"></a>
<a id="tocscreateapikeyresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CreatedApiKey](#schemacreatedapikey)|true|none|none|

<h2 id="tocS_CreateChatCompletionRequestBody">CreateChatCompletionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatechatcompletionrequestbody"></a>
<a id="schema_CreateChatCompletionRequestBody"></a>
<a id="tocScreatechatcompletionrequestbody"></a>
<a id="tocscreatechatcompletionrequestbody"></a>

```json
{
  "messages": [
    {
      "content": "You are a helpful assistant.",
      "role": "system"
    },
    {
      "content": "Say hello.",
      "role": "user"
    }
  ],
  "model": "openai:gpt-4o"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|true|none|Model must be '{provider}:{model_name}' for a built-in provider (one of anthropic, aws, azure_openai, cerebras, deepseek, fireworks, google, groq, meta, minimax, moonshot, ollama, openai, perplexity, together, xai, zai) or 'custom:{provider_id}:{model_name}' for a stored custom provider, e.g. 'openai:gpt-4o' or 'anthropic:claude-sonnet-4-5'.|
|messages|[[ChatCompletionRequestMessage](#schemachatcompletionrequestmessage)]|true|none|none|
|stream|boolean|false|none|none|
|temperature|number \| null|false|none|none|
|top_p|number \| null|false|none|none|
|max_tokens|integer \| null|false|none|none|
|max_completion_tokens|integer \| null|false|none|none|
|stop|string \| [string] \| null|false|none|none|
|frequency_penalty|number \| null|false|none|none|
|presence_penalty|number \| null|false|none|none|
|seed|integer \| null|false|none|none|
|n|integer \| null|false|none|none|
|stream_options|[ChatCompletionStreamOptions](#schemachatcompletionstreamoptions) \| null|false|none|none|
|tools|[object] \| null|false|none|none|
|tool_choice|object \| null|false|none|none|
|response_format|object \| null|false|none|none|

<h2 id="tocS_CreateDatasetLabelRequestBody">CreateDatasetLabelRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetlabelrequestbody"></a>
<a id="schema_CreateDatasetLabelRequestBody"></a>
<a id="tocScreatedatasetlabelrequestbody"></a>
<a id="tocscreatedatasetlabelrequestbody"></a>

```json
{
  "name": "string",
  "color": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the dataset label|
|color|string|true|none|A lowercase hex color code (e.g. '#00cc88') used to display the label|
|description|string \| null|false|none|An optional description of the dataset label|

<h2 id="tocS_CreateDatasetLabelResponseBody">CreateDatasetLabelResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetlabelresponsebody"></a>
<a id="schema_CreateDatasetLabelResponseBody"></a>
<a id="tocScreatedatasetlabelresponsebody"></a>
<a id="tocscreatedatasetlabelresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetLabel](#schemadatasetlabel)|true|none|none|

<h2 id="tocS_CreateDatasetSplitRequestBody">CreateDatasetSplitRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetsplitrequestbody"></a>
<a id="schema_CreateDatasetSplitRequestBody"></a>
<a id="tocScreatedatasetsplitrequestbody"></a>
<a id="tocscreatedatasetsplitrequestbody"></a>

```json
{
  "name": "string",
  "description": "string",
  "color": "string",
  "metadata": {},
  "example_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique name for the split.|
|description|string \| null|false|none|An optional description of the split.|
|color|string \| null|false|none|An optional hex color for the split (e.g. #33c5e8). Omit for a default.|
|metadata|object|false|none|Arbitrary JSON metadata for the split.|
|example_ids|[string]|false|none|Optional dataset example identifiers (GlobalIDs or user-provided IDs) to seed the split with. Each example must belong to this dataset. Omit to create an empty split.|

<h2 id="tocS_CreateDatasetSplitResponseBody">CreateDatasetSplitResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetsplitresponsebody"></a>
<a id="schema_CreateDatasetSplitResponseBody"></a>
<a id="tocScreatedatasetsplitresponsebody"></a>
<a id="tocscreatedatasetsplitresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string",
    "metadata": {},
    "example_count": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetSplit](#schemadatasetsplit)|true|none|none|

<h2 id="tocS_CreateExperimentRequestBody">CreateExperimentRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimentrequestbody"></a>
<a id="schema_CreateExperimentRequestBody"></a>
<a id="tocScreateexperimentrequestbody"></a>
<a id="tocscreateexperimentrequestbody"></a>

```json
{
  "name": "string",
  "description": "string",
  "metadata": {},
  "version_id": "string",
  "splits": [
    "string"
  ],
  "repetitions": 1
}
```

Details of the experiment to be created

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Name of the experiment (if omitted, a random name will be generated)|
|description|string \| null|false|none|An optional description of the experiment|
|metadata|object \| null|false|none|Metadata for the experiment|
|version_id|string \| null|false|none|ID of the dataset version over which the experiment will be run (if omitted, the latest version will be used)|
|splits|[string] \| null|false|none|List of dataset split identifiers (GlobalIDs or names) to filter by|
|repetitions|integer|false|none|Number of times the experiment should be repeated for each example|

<h2 id="tocS_CreateExperimentResponseBody">CreateExperimentResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimentresponsebody"></a>
<a id="schema_CreateExperimentResponseBody"></a>
<a id="tocScreateexperimentresponsebody"></a>
<a id="tocscreateexperimentresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "dataset_id": "string",
    "dataset_version_id": "string",
    "name": "string",
    "description": "string",
    "repetitions": 1,
    "metadata": {},
    "project_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0,
    "successful_run_count": 0,
    "failed_run_count": 0,
    "missing_run_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Experiment](#schemaexperiment)|true|none|none|

<h2 id="tocS_CreateExperimentRunRequestBody">CreateExperimentRunRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimentrunrequestbody"></a>
<a id="schema_CreateExperimentRunRequestBody"></a>
<a id="tocScreateexperimentrunrequestbody"></a>
<a id="tocscreateexperimentrunrequestbody"></a>

```json
{
  "dataset_example_id": "string",
  "output": null,
  "repetition_number": 1,
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "trace_id": "string",
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_example_id|string|true|none|The ID of the dataset example used in the experiment run|
|output|object|true|none|The output of the experiment task|
|repetition_number|integer|true|none|The repetition number of the experiment run|
|start_time|string(date-time)|true|none|The start time of the experiment run|
|end_time|string(date-time)|true|none|The end time of the experiment run|
|trace_id|string \| null|false|none|The ID of the corresponding trace (if one exists)|
|error|string \| null|false|none|Optional error message if the experiment run encountered an error|

<h2 id="tocS_CreateExperimentRunResponseBody">CreateExperimentRunResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimentrunresponsebody"></a>
<a id="schema_CreateExperimentRunResponseBody"></a>
<a id="tocScreateexperimentrunresponsebody"></a>
<a id="tocscreateexperimentrunresponsebody"></a>

```json
{
  "data": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CreateExperimentRunResponseBodyData](#schemacreateexperimentrunresponsebodydata)|true|none|none|

<h2 id="tocS_CreateExperimentRunResponseBodyData">CreateExperimentRunResponseBodyData</h2>
<!-- backwards compatibility -->
<a id="schemacreateexperimentrunresponsebodydata"></a>
<a id="schema_CreateExperimentRunResponseBodyData"></a>
<a id="tocScreateexperimentrunresponsebodydata"></a>
<a id="tocscreateexperimentrunresponsebodydata"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the newly created experiment run|

<h2 id="tocS_CreateProjectRequestBody">CreateProjectRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectrequestbody"></a>
<a id="schema_CreateProjectRequestBody"></a>
<a id="tocScreateprojectrequestbody"></a>
<a id="tocscreateprojectrequestbody"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|

<h2 id="tocS_CreateProjectResponseBody">CreateProjectResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresponsebody"></a>
<a id="schema_CreateProjectResponseBody"></a>
<a id="tocScreateprojectresponsebody"></a>
<a id="tocscreateprojectresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Project](#schemaproject)|true|none|none|

<h2 id="tocS_CreatePromptRequestBody">CreatePromptRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepromptrequestbody"></a>
<a id="schema_CreatePromptRequestBody"></a>
<a id="tocScreatepromptrequestbody"></a>
<a id="tocscreatepromptrequestbody"></a>

```json
{
  "prompt": {
    "name": "string",
    "description": "string",
    "source_prompt_id": "string",
    "metadata": {}
  },
  "version": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|[PromptData](#schemapromptdata)|true|none|none|
|version|[PromptVersionData](#schemapromptversiondata)|true|none|none|

<h2 id="tocS_CreatePromptResponseBody">CreatePromptResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepromptresponsebody"></a>
<a id="schema_CreatePromptResponseBody"></a>
<a id="tocScreatepromptresponsebody"></a>
<a id="tocscreatepromptresponsebody"></a>

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PromptVersion](#schemapromptversion)|true|none|none|

<h2 id="tocS_CreatePromptVersionRequestBody">CreatePromptVersionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepromptversionrequestbody"></a>
<a id="schema_CreatePromptVersionRequestBody"></a>
<a id="tocScreatepromptversionrequestbody"></a>
<a id="tocscreatepromptversionrequestbody"></a>

```json
{
  "version": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    }
  },
  "tags": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|[PromptVersionData](#schemapromptversiondata)|true|none|none|
|tags|[[PromptVersionTagData](#schemapromptversiontagdata)] \| null|false|none|none|

<h2 id="tocS_CreatePromptVersionResponseBody">CreatePromptVersionResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepromptversionresponsebody"></a>
<a id="schema_CreatePromptVersionResponseBody"></a>
<a id="tocScreatepromptversionresponsebody"></a>
<a id="tocscreatepromptversionresponsebody"></a>

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PromptVersion](#schemapromptversion)|true|none|none|

<h2 id="tocS_CreateSessionNoteRequestBody">CreateSessionNoteRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionnoterequestbody"></a>
<a id="schema_CreateSessionNoteRequestBody"></a>
<a id="tocScreatesessionnoterequestbody"></a>
<a id="tocscreatesessionnoterequestbody"></a>

```json
{
  "data": {
    "session_id": "string",
    "note": "string",
    "identifier": ""
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SessionNoteData](#schemasessionnotedata)|true|none|none|

<h2 id="tocS_CreateSessionNoteResponseBody">CreateSessionNoteResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionnoteresponsebody"></a>
<a id="schema_CreateSessionNoteResponseBody"></a>
<a id="tocScreatesessionnoteresponsebody"></a>
<a id="tocscreatesessionnoteresponsebody"></a>

```json
{
  "data": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InsertedSessionAnnotation](#schemainsertedsessionannotation)|true|none|none|

<h2 id="tocS_CreateSpanNoteRequestBody">CreateSpanNoteRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatespannoterequestbody"></a>
<a id="schema_CreateSpanNoteRequestBody"></a>
<a id="tocScreatespannoterequestbody"></a>
<a id="tocscreatespannoterequestbody"></a>

```json
{
  "data": {
    "span_id": "string",
    "note": "string",
    "identifier": ""
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SpanNoteData](#schemaspannotedata)|true|none|none|

<h2 id="tocS_CreateSpanNoteResponseBody">CreateSpanNoteResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatespannoteresponsebody"></a>
<a id="schema_CreateSpanNoteResponseBody"></a>
<a id="tocScreatespannoteresponsebody"></a>
<a id="tocscreatespannoteresponsebody"></a>

```json
{
  "data": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InsertedSpanAnnotation](#schemainsertedspanannotation)|true|none|none|

<h2 id="tocS_CreateSpansRequestBody">CreateSpansRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatespansrequestbody"></a>
<a id="schema_CreateSpansRequestBody"></a>
<a id="tocScreatespansrequestbody"></a>
<a id="tocscreatespansrequestbody"></a>

```json
{
  "data": [
    {
      "attributes": {
        "llm.model_name": "gpt-4",
        "llm.token_count.completion": 50,
        "llm.token_count.prompt": 100
      },
      "context": {
        "span_id": "1a2b3c4d5e6f7a8b",
        "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
      },
      "end_time": "2024-01-01T12:00:01Z",
      "events": [],
      "name": "llm_call",
      "span_kind": "LLM",
      "start_time": "2024-01-01T12:00:00Z",
      "status_code": "OK",
      "status_message": ""
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Span](#schemaspan)]|true|none|none|

<h2 id="tocS_CreateSpansResponseBody">CreateSpansResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatespansresponsebody"></a>
<a id="schema_CreateSpansResponseBody"></a>
<a id="tocScreatespansresponsebody"></a>
<a id="tocscreatespansresponsebody"></a>

```json
{
  "total_received": 0,
  "total_queued": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_received|integer|true|none|Total number of spans received|
|total_queued|integer|true|none|Number of spans successfully queued for insertion|

<h2 id="tocS_CreateTraceNoteRequestBody">CreateTraceNoteRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatetracenoterequestbody"></a>
<a id="schema_CreateTraceNoteRequestBody"></a>
<a id="tocScreatetracenoterequestbody"></a>
<a id="tocscreatetracenoterequestbody"></a>

```json
{
  "data": {
    "trace_id": "string",
    "note": "string",
    "identifier": ""
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TraceNoteData](#schematracenotedata)|true|none|none|

<h2 id="tocS_CreateTraceNoteResponseBody">CreateTraceNoteResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatetracenoteresponsebody"></a>
<a id="schema_CreateTraceNoteResponseBody"></a>
<a id="tocScreatetracenoteresponsebody"></a>
<a id="tocscreatetracenoteresponsebody"></a>

```json
{
  "data": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[InsertedTraceAnnotation](#schemainsertedtraceannotation)|true|none|none|

<h2 id="tocS_CreateUserRequestBody">CreateUserRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserrequestbody"></a>
<a id="schema_CreateUserRequestBody"></a>
<a id="tocScreateuserrequestbody"></a>
<a id="tocscreateuserrequestbody"></a>

```json
{
  "user": {
    "email": "string",
    "username": "string",
    "role": "SYSTEM",
    "auth_method": "LOCAL",
    "password": "string"
  },
  "send_welcome_email": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[LocalUserData](#schemalocaluserdata) \| [OAuth2UserData](#schemaoauth2userdata) \| [LDAPUserData](#schemaldapuserdata)|true|none|none|
|send_welcome_email|boolean|false|none|none|

<h2 id="tocS_CreateUserResponseBody">CreateUserResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserresponsebody"></a>
<a id="schema_CreateUserResponseBody"></a>
<a id="tocScreateuserresponsebody"></a>
<a id="tocscreateuserresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "username": "string",
    "role": "SYSTEM",
    "auth_method": "LOCAL",
    "password": "string",
    "password_needs_reset": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[LocalUser](#schemalocaluser) \| [OAuth2User](#schemaoauth2user) \| [LDAPUser](#schemaldapuser)|true|none|none|

<h2 id="tocS_CreatedAgentSession">CreatedAgentSession</h2>
<!-- backwards compatibility -->
<a id="schemacreatedagentsession"></a>
<a id="schema_CreatedAgentSession"></a>
<a id="tocScreatedagentsession"></a>
<a id="tocscreatedagentsession"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The session's GlobalID — the ``session_id`` the chat route expects.|

<h2 id="tocS_CreatedApiKey">CreatedApiKey</h2>
<!-- backwards compatibility -->
<a id="schemacreatedapikey"></a>
<a id="schema_CreatedApiKey"></a>
<a id="tocScreatedapikey"></a>
<a id="tocscreatedapikey"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|created_at|string(date-time)|true|none|none|
|expires_at|string(date-time) \| null|false|none|none|
|key|string|true|none|The API key. This is the only time it is returned; it cannot be recovered from the listing endpoints.|

<h2 id="tocS_CustomModelProvider">CustomModelProvider</h2>
<!-- backwards compatibility -->
<a id="schemacustommodelprovider"></a>
<a id="schema_CustomModelProvider"></a>
<a id="tocScustommodelprovider"></a>
<a id="tocscustommodelprovider"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "provider": "string",
  "sdk": "openai",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the custom provider.|
|name|string|true|none|The unique name of the custom provider.|
|description|string \| null|false|none|An optional description of the custom provider.|
|provider|string|true|none|The free-form provider label recorded on the custom provider. Unlike the `provider` of a built-in family, this is not drawn from a fixed set.|
|sdk|string|true|none|The SDK used to communicate with the custom provider.|
|created_at|string(date-time)|true|none|The time the custom provider was created.|
|updated_at|string(date-time)|true|none|The time the custom provider was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|sdk|openai|
|sdk|azure_openai|
|sdk|anthropic|
|sdk|google_genai|
|sdk|aws_bedrock|

<h2 id="tocS_CustomProviderModelSelection">CustomProviderModelSelection</h2>
<!-- backwards compatibility -->
<a id="schemacustomprovidermodelselection"></a>
<a id="schema_CustomProviderModelSelection"></a>
<a id="tocScustomprovidermodelselection"></a>
<a id="tocscustomprovidermodelselection"></a>

```json
{
  "providerType": "custom",
  "providerId": "string",
  "modelName": "string"
}
```

Chat against a stored custom provider record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerType|string|true|none|none|
|providerId|string|true|none|none|
|modelName|string|true|none|none|

<h2 id="tocS_DataUIPart">DataUIPart</h2>
<!-- backwards compatibility -->
<a id="schemadatauipart"></a>
<a id="schema_DataUIPart"></a>
<a id="tocSdatauipart"></a>
<a id="tocsdatauipart"></a>

```json
{
  "type": "string",
  "id": "string",
  "data": null
}
```

Data part with dynamic type based on data name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|id|string \| null|false|none|none|
|data|object|true|none|none|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "metadata": {},
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "example_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|metadata|object|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|example_count|integer|true|none|none|

<h2 id="tocS_DatasetExample">DatasetExample</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexample"></a>
<a id="schema_DatasetExample"></a>
<a id="tocSdatasetexample"></a>
<a id="tocsdatasetexample"></a>

```json
{
  "id": "string",
  "node_id": "string",
  "input": {},
  "output": {},
  "metadata": {},
  "updated_at": "1970-01-01T00:00:00Z",
  "source": {
    "span_id": "string",
    "span_node_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|node_id|string|true|none|none|
|input|object|true|none|none|
|output|object|true|none|none|
|metadata|object|true|none|none|
|updated_at|string(date-time)|true|none|none|
|source|[DatasetExampleSource](#schemadatasetexamplesource) \| null|false|none|none|

<h2 id="tocS_DatasetExampleSource">DatasetExampleSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasetexamplesource"></a>
<a id="schema_DatasetExampleSource"></a>
<a id="tocSdatasetexamplesource"></a>
<a id="tocsdatasetexamplesource"></a>

```json
{
  "span_id": "string",
  "span_node_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|span_id|string|true|none|none|
|span_node_id|string|true|none|none|

<h2 id="tocS_DatasetLabel">DatasetLabel</h2>
<!-- backwards compatibility -->
<a id="schemadatasetlabel"></a>
<a id="schema_DatasetLabel"></a>
<a id="tocSdatasetlabel"></a>
<a id="tocsdatasetlabel"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "color": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|color|string|true|none|none|

<h2 id="tocS_DatasetSplit">DatasetSplit</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsplit"></a>
<a id="schema_DatasetSplit"></a>
<a id="tocSdatasetsplit"></a>
<a id="tocsdatasetsplit"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "color": "string",
  "metadata": {},
  "example_count": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|color|string|true|none|none|
|metadata|object|true|none|none|
|example_count|integer|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|

<h2 id="tocS_DatasetUIContext">DatasetUIContext</h2>
<!-- backwards compatibility -->
<a id="schemadatasetuicontext"></a>
<a id="schema_DatasetUIContext"></a>
<a id="tocSdatasetuicontext"></a>
<a id="tocsdatasetuicontext"></a>

```json
{
  "type": "dataset",
  "datasetNodeId": "string",
  "datasetVersionNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|datasetNodeId|string|true|none|none|
|datasetVersionNodeId|string \| null|false|none|none|

<h2 id="tocS_DatasetVersion">DatasetVersion</h2>
<!-- backwards compatibility -->
<a id="schemadatasetversion"></a>
<a id="schema_DatasetVersion"></a>
<a id="tocSdatasetversion"></a>
<a id="tocsdatasetversion"></a>

```json
{
  "version_id": "string",
  "description": "string",
  "metadata": {},
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version_id|string|true|none|none|
|description|string \| null|true|none|none|
|metadata|object|true|none|none|
|created_at|string(date-time)|true|none|none|

<h2 id="tocS_DatasetWithExampleCount">DatasetWithExampleCount</h2>
<!-- backwards compatibility -->
<a id="schemadatasetwithexamplecount"></a>
<a id="schema_DatasetWithExampleCount"></a>
<a id="tocSdatasetwithexamplecount"></a>
<a id="tocsdatasetwithexamplecount"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "metadata": {},
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "example_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|metadata|object|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|example_count|integer|true|none|none|

<h2 id="tocS_DeleteAnnotationConfigResponseBody">DeleteAnnotationConfigResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemadeleteannotationconfigresponsebody"></a>
<a id="schema_DeleteAnnotationConfigResponseBody"></a>
<a id="tocSdeleteannotationconfigresponsebody"></a>
<a id="tocsdeleteannotationconfigresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)|true|none|none|

<h2 id="tocS_DeleteSessionsRequestBody">DeleteSessionsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemadeletesessionsrequestbody"></a>
<a id="schema_DeleteSessionsRequestBody"></a>
<a id="tocSdeletesessionsrequestbody"></a>
<a id="tocsdeletesessionsrequestbody"></a>

```json
{
  "session_identifiers": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session_identifiers|[string]|true|none|List of session identifiers to delete. All identifiers must be the same type: either all GlobalIDs or all user-provided session_id strings.|

<h2 id="tocS_DynamicToolApprovalRequestedPart">DynamicToolApprovalRequestedPart</h2>
<!-- backwards compatibility -->
<a id="schemadynamictoolapprovalrequestedpart"></a>
<a id="schema_DynamicToolApprovalRequestedPart"></a>
<a id="tocSdynamictoolapprovalrequestedpart"></a>
<a id="tocsdynamictoolapprovalrequestedpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "approval-requested",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in approval-requested state (awaiting user decision).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_DynamicToolApprovalRespondedPart">DynamicToolApprovalRespondedPart</h2>
<!-- backwards compatibility -->
<a id="schemadynamictoolapprovalrespondedpart"></a>
<a id="schema_DynamicToolApprovalRespondedPart"></a>
<a id="tocSdynamictoolapprovalrespondedpart"></a>
<a id="tocsdynamictoolapprovalrespondedpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "approval-responded",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in approval-responded state (user approved/denied, execution pending).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_DynamicToolInputAvailablePart">DynamicToolInputAvailablePart</h2>
<!-- backwards compatibility -->
<a id="schemadynamictoolinputavailablepart"></a>
<a id="schema_DynamicToolInputAvailablePart"></a>
<a id="tocSdynamictoolinputavailablepart"></a>
<a id="tocsdynamictoolinputavailablepart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "input-available",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in input-available state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_DynamicToolOutputDeniedPart">DynamicToolOutputDeniedPart</h2>
<!-- backwards compatibility -->
<a id="schemadynamictooloutputdeniedpart"></a>
<a id="schema_DynamicToolOutputDeniedPart"></a>
<a id="tocSdynamictooloutputdeniedpart"></a>
<a id="tocsdynamictooloutputdeniedpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-denied",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in output-denied state (tool was denied, terminal state).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_Experiment">Experiment</h2>
<!-- backwards compatibility -->
<a id="schemaexperiment"></a>
<a id="schema_Experiment"></a>
<a id="tocSexperiment"></a>
<a id="tocsexperiment"></a>

```json
{
  "id": "string",
  "dataset_id": "string",
  "dataset_version_id": "string",
  "name": "string",
  "description": "string",
  "repetitions": 1,
  "metadata": {},
  "project_name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "example_count": 0,
  "successful_run_count": 0,
  "failed_run_count": 0,
  "missing_run_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the experiment|
|dataset_id|string|true|none|The ID of the dataset associated with the experiment|
|dataset_version_id|string|true|none|The ID of the dataset version associated with the experiment|
|name|string|true|none|The name of the experiment|
|description|string \| null|true|none|The description of the experiment|
|repetitions|integer|true|none|Number of times the experiment is repeated|
|metadata|object|true|none|Metadata of the experiment|
|project_name|string \| null|true|none|The name of the project associated with the experiment|
|created_at|string(date-time)|true|none|The creation timestamp of the experiment|
|updated_at|string(date-time)|true|none|The last update timestamp of the experiment|
|example_count|integer|true|none|Number of examples in the experiment|
|successful_run_count|integer|true|none|Number of successful runs in the experiment|
|failed_run_count|integer|true|none|Number of failed runs in the experiment|
|missing_run_count|integer|true|none|Number of missing (not yet executed) runs in the experiment|

<h2 id="tocS_ExperimentEvaluationResult">ExperimentEvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentevaluationresult"></a>
<a id="schema_ExperimentEvaluationResult"></a>
<a id="tocSexperimentevaluationresult"></a>
<a id="tocsexperimentevaluationresult"></a>

```json
{
  "label": "string",
  "score": 0,
  "explanation": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string \| null|false|none|The label assigned by the evaluation|
|score|number \| null|false|none|The score assigned by the evaluation|
|explanation|string \| null|false|none|Explanation of the evaluation result|

<h2 id="tocS_ExperimentRun">ExperimentRun</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentrun"></a>
<a id="schema_ExperimentRun"></a>
<a id="tocSexperimentrun"></a>
<a id="tocsexperimentrun"></a>

```json
{
  "dataset_example_id": "string",
  "output": null,
  "repetition_number": 1,
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "trace_id": "string",
  "error": "string",
  "id": "string",
  "experiment_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_example_id|string|true|none|The ID of the dataset example used in the experiment run|
|output|object|true|none|The output of the experiment task|
|repetition_number|integer|true|none|The repetition number of the experiment run|
|start_time|string(date-time)|true|none|The start time of the experiment run|
|end_time|string(date-time)|true|none|The end time of the experiment run|
|trace_id|string \| null|false|none|The ID of the corresponding trace (if one exists)|
|error|string \| null|false|none|Optional error message if the experiment run encountered an error|
|id|string|true|none|The ID of the experiment run|
|experiment_id|string|true|none|The ID of the experiment|

<h2 id="tocS_ExperimentTag">ExperimentTag</h2>
<!-- backwards compatibility -->
<a id="schemaexperimenttag"></a>
<a id="schema_ExperimentTag"></a>
<a id="tocSexperimenttag"></a>
<a id="tocsexperimenttag"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The node ID of the tag|
|name|string|true|none|The name of the tag|
|description|string \| null|true|none|The description of the tag|

<h2 id="tocS_FileUIPart">FileUIPart</h2>
<!-- backwards compatibility -->
<a id="schemafileuipart"></a>
<a id="schema_FileUIPart"></a>
<a id="tocSfileuipart"></a>
<a id="tocsfileuipart"></a>

```json
{
  "type": "file",
  "mediaType": "string",
  "filename": "string",
  "url": "string",
  "providerMetadata": {
    "property1": {},
    "property2": {}
  }
}
```

A file part of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|mediaType|string|true|none|none|
|filename|string \| null|false|none|none|
|url|string|true|none|none|
|providerMetadata|object \| null|false|none|none|

<h2 id="tocS_FreeformAnnotationConfig">FreeformAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemafreeformannotationconfig"></a>
<a id="schema_FreeformAnnotationConfig"></a>
<a id="tocSfreeformannotationconfig"></a>
<a id="tocsfreeformannotationconfig"></a>

```json
{
  "name": "string",
  "type": "FREEFORM",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "threshold": 0,
  "lower_bound": 0,
  "upper_bound": 0,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|description|string \| null|false|none|none|
|optimization_direction|[OptimizationDirection](#schemaoptimizationdirection) \| null|false|none|none|
|threshold|number \| null|false|none|none|
|lower_bound|number \| null|false|none|none|
|upper_bound|number \| null|false|none|none|
|id|string|true|none|none|

<h2 id="tocS_FreeformAnnotationConfigData">FreeformAnnotationConfigData</h2>
<!-- backwards compatibility -->
<a id="schemafreeformannotationconfigdata"></a>
<a id="schema_FreeformAnnotationConfigData"></a>
<a id="tocSfreeformannotationconfigdata"></a>
<a id="tocsfreeformannotationconfigdata"></a>

```json
{
  "name": "string",
  "type": "FREEFORM",
  "description": "string",
  "optimization_direction": "MINIMIZE",
  "threshold": 0,
  "lower_bound": 0,
  "upper_bound": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|string|true|none|none|
|description|string \| null|false|none|none|
|optimization_direction|[OptimizationDirection](#schemaoptimizationdirection) \| null|false|none|none|
|threshold|number \| null|false|none|none|
|lower_bound|number \| null|false|none|none|
|upper_bound|number \| null|false|none|none|

<h2 id="tocS_GetAgentSessionResponseBody">GetAgentSessionResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetagentsessionresponsebody"></a>
<a id="schema_GetAgentSessionResponseBody"></a>
<a id="tocSgetagentsessionresponsebody"></a>
<a id="tocsgetagentsessionresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "title": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "is_ephemeral": true,
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    },
    "is_active": true,
    "last_message_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AgentSessionData](#schemaagentsessiondata)|true|none|none|

<h2 id="tocS_GetAllUserApiKeysResponseBody">GetAllUserApiKeysResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetalluserapikeysresponsebody"></a>
<a id="schema_GetAllUserApiKeysResponseBody"></a>
<a id="tocSgetalluserapikeysresponsebody"></a>
<a id="tocsgetalluserapikeysresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UserApiKey](#schemauserapikey)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetAnnotationConfigResponseBody">GetAnnotationConfigResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetannotationconfigresponsebody"></a>
<a id="schema_GetAnnotationConfigResponseBody"></a>
<a id="tocSgetannotationconfigresponsebody"></a>
<a id="tocsgetannotationconfigresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)|true|none|none|

<h2 id="tocS_GetAnnotationConfigsResponseBody">GetAnnotationConfigsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetannotationconfigsresponsebody"></a>
<a id="schema_GetAnnotationConfigsResponseBody"></a>
<a id="tocSgetannotationconfigsresponsebody"></a>
<a id="tocsgetannotationconfigsresponsebody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "type": "CATEGORICAL",
      "description": "string",
      "optimization_direction": "MINIMIZE",
      "values": [
        {
          "label": "string",
          "score": 0
        }
      ],
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetApiKeysResponseBody">GetApiKeysResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetapikeysresponsebody"></a>
<a id="schema_GetApiKeysResponseBody"></a>
<a id="tocSgetapikeysresponsebody"></a>
<a id="tocsgetapikeysresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ApiKey](#schemaapikey)]|true|none|none|

<h2 id="tocS_GetCustomModelProvidersResponseBody">GetCustomModelProvidersResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetcustommodelprovidersresponsebody"></a>
<a id="schema_GetCustomModelProvidersResponseBody"></a>
<a id="tocSgetcustommodelprovidersresponsebody"></a>
<a id="tocsgetcustommodelprovidersresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "provider": "string",
      "sdk": "openai",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CustomModelProvider](#schemacustommodelprovider)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetDatasetLabelResponseBody">GetDatasetLabelResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetlabelresponsebody"></a>
<a id="schema_GetDatasetLabelResponseBody"></a>
<a id="tocSgetdatasetlabelresponsebody"></a>
<a id="tocsgetdatasetlabelresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetLabel](#schemadatasetlabel)|true|none|none|

<h2 id="tocS_GetDatasetLabelsResponseBody">GetDatasetLabelsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetlabelsresponsebody"></a>
<a id="schema_GetDatasetLabelsResponseBody"></a>
<a id="tocSgetdatasetlabelsresponsebody"></a>
<a id="tocsgetdatasetlabelsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DatasetLabel](#schemadatasetlabel)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetDatasetResponseBody">GetDatasetResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetdatasetresponsebody"></a>
<a id="schema_GetDatasetResponseBody"></a>
<a id="tocSgetdatasetresponsebody"></a>
<a id="tocsgetdatasetresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "metadata": {},
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetWithExampleCount](#schemadatasetwithexamplecount)|true|none|none|

<h2 id="tocS_GetExperimentResponseBody">GetExperimentResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetexperimentresponsebody"></a>
<a id="schema_GetExperimentResponseBody"></a>
<a id="tocSgetexperimentresponsebody"></a>
<a id="tocsgetexperimentresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "dataset_id": "string",
    "dataset_version_id": "string",
    "name": "string",
    "description": "string",
    "repetitions": 1,
    "metadata": {},
    "project_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0,
    "successful_run_count": 0,
    "failed_run_count": 0,
    "missing_run_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Experiment](#schemaexperiment)|true|none|none|

<h2 id="tocS_GetIncompleteEvaluationsResponseBody">GetIncompleteEvaluationsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetincompleteevaluationsresponsebody"></a>
<a id="schema_GetIncompleteEvaluationsResponseBody"></a>
<a id="tocSgetincompleteevaluationsresponsebody"></a>
<a id="tocsgetincompleteevaluationsresponsebody"></a>

```json
{
  "data": [
    {
      "experiment_run": {
        "dataset_example_id": "string",
        "output": null,
        "repetition_number": 1,
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z",
        "trace_id": "string",
        "error": "string",
        "id": "string",
        "experiment_id": "string"
      },
      "dataset_example": {
        "id": "string",
        "node_id": "string",
        "input": {},
        "output": {},
        "metadata": {},
        "updated_at": "1970-01-01T00:00:00Z",
        "source": {
          "span_id": "string",
          "span_node_id": "string"
        }
      },
      "evaluation_names": [
        "string"
      ]
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IncompleteExperimentEvaluation](#schemaincompleteexperimentevaluation)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetIncompleteExperimentRunsResponseBody">GetIncompleteExperimentRunsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetincompleteexperimentrunsresponsebody"></a>
<a id="schema_GetIncompleteExperimentRunsResponseBody"></a>
<a id="tocSgetincompleteexperimentrunsresponsebody"></a>
<a id="tocsgetincompleteexperimentrunsresponsebody"></a>

```json
{
  "data": [
    {
      "dataset_example": {
        "id": "string",
        "node_id": "string",
        "input": {},
        "output": {},
        "metadata": {},
        "updated_at": "1970-01-01T00:00:00Z",
        "source": {
          "span_id": "string",
          "span_node_id": "string"
        }
      },
      "repetition_numbers": [
        0
      ]
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IncompleteExperimentRun](#schemaincompleteexperimentrun)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetModelProvidersResponseBody">GetModelProvidersResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetmodelprovidersresponsebody"></a>
<a id="schema_GetModelProvidersResponseBody"></a>
<a id="tocSgetmodelprovidersresponsebody"></a>
<a id="tocsgetmodelprovidersresponsebody"></a>

```json
{
  "data": [
    {
      "provider": "OPENAI",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BuiltInModelProvider](#schemabuiltinmodelprovider)]|true|none|none|

<h2 id="tocS_GetProjectAnnotationConfigsResponseBody">GetProjectAnnotationConfigsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectannotationconfigsresponsebody"></a>
<a id="schema_GetProjectAnnotationConfigsResponseBody"></a>
<a id="tocSgetprojectannotationconfigsresponsebody"></a>
<a id="tocsgetprojectannotationconfigsresponsebody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "type": "CATEGORICAL",
      "description": "string",
      "optimization_direction": "MINIMIZE",
      "values": [
        {
          "label": "string",
          "score": 0
        }
      ],
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetProjectResponseBody">GetProjectResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectresponsebody"></a>
<a id="schema_GetProjectResponseBody"></a>
<a id="tocSgetprojectresponsebody"></a>
<a id="tocsgetprojectresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Project](#schemaproject)|true|none|none|

<h2 id="tocS_GetProjectsResponseBody">GetProjectsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetprojectsresponsebody"></a>
<a id="schema_GetProjectsResponseBody"></a>
<a id="tocSgetprojectsresponsebody"></a>
<a id="tocsgetprojectsresponsebody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Project](#schemaproject)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetPromptResponseBody">GetPromptResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetpromptresponsebody"></a>
<a id="schema_GetPromptResponseBody"></a>
<a id="tocSgetpromptresponsebody"></a>
<a id="tocsgetpromptresponsebody"></a>

```json
{
  "data": {
    "description": "string",
    "metadata": {},
    "model_provider": "OPENAI",
    "model_name": "string",
    "template": {
      "type": "chat",
      "messages": [
        {
          "role": "user",
          "content": "string"
        }
      ]
    },
    "template_type": "STR",
    "template_format": "MUSTACHE",
    "invocation_parameters": {
      "type": "openai",
      "openai": {
        "temperature": 0,
        "max_tokens": 0,
        "max_completion_tokens": 0,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "top_p": 0,
        "seed": 0,
        "stop": [
          "string"
        ],
        "reasoning_effort": "none",
        "extra_body": {}
      }
    },
    "tools": {
      "type": "tools",
      "tools": [
        {
          "type": "function",
          "function": {
            "name": "string",
            "description": "string",
            "parameters": {},
            "strict": true
          }
        }
      ],
      "tool_choice": {
        "type": "none"
      },
      "disable_parallel_tool_calls": true
    },
    "response_format": {
      "type": "json_schema",
      "json_schema": {
        "name": "string",
        "description": "string",
        "schema": {},
        "strict": true
      }
    },
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PromptVersion](#schemapromptversion)|true|none|none|

<h2 id="tocS_GetPromptVersionTagsResponseBody">GetPromptVersionTagsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetpromptversiontagsresponsebody"></a>
<a id="schema_GetPromptVersionTagsResponseBody"></a>
<a id="tocSgetpromptversiontagsresponsebody"></a>
<a id="tocsgetpromptversiontagsresponsebody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PromptVersionTag](#schemapromptversiontag)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetPromptVersionsResponseBody">GetPromptVersionsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetpromptversionsresponsebody"></a>
<a id="schema_GetPromptVersionsResponseBody"></a>
<a id="tocSgetpromptversionsresponsebody"></a>
<a id="tocsgetpromptversionsresponsebody"></a>

```json
{
  "data": [
    {
      "description": "string",
      "metadata": {},
      "model_provider": "OPENAI",
      "model_name": "string",
      "template": {
        "type": "chat",
        "messages": [
          {
            "role": "user",
            "content": "string"
          }
        ]
      },
      "template_type": "STR",
      "template_format": "MUSTACHE",
      "invocation_parameters": {
        "type": "openai",
        "openai": {
          "temperature": 0,
          "max_tokens": 0,
          "max_completion_tokens": 0,
          "frequency_penalty": 0,
          "presence_penalty": 0,
          "top_p": 0,
          "seed": 0,
          "stop": [
            "string"
          ],
          "reasoning_effort": "none",
          "extra_body": {}
        }
      },
      "tools": {
        "type": "tools",
        "tools": [
          {
            "type": "function",
            "function": {
              "name": "string",
              "description": "string",
              "parameters": {},
              "strict": true
            }
          }
        ],
        "tool_choice": {
          "type": "none"
        },
        "disable_parallel_tool_calls": true
      },
      "response_format": {
        "type": "json_schema",
        "json_schema": {
          "name": "string",
          "description": "string",
          "schema": {},
          "strict": true
        }
      },
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PromptVersion](#schemapromptversion)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetPromptsResponseBody">GetPromptsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetpromptsresponsebody"></a>
<a id="schema_GetPromptsResponseBody"></a>
<a id="tocSgetpromptsresponsebody"></a>
<a id="tocsgetpromptsresponsebody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "source_prompt_id": "string",
      "metadata": {},
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Prompt](#schemaprompt)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetSessionResponseBody">GetSessionResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionresponsebody"></a>
<a id="schema_GetSessionResponseBody"></a>
<a id="tocSgetsessionresponsebody"></a>
<a id="tocsgetsessionresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "session_id": "string",
    "project_id": "string",
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "traces": [
      {
        "id": "string",
        "trace_id": "string",
        "start_time": "1970-01-01T00:00:00Z",
        "end_time": "1970-01-01T00:00:00Z"
      }
    ],
    "token_count_prompt": 0,
    "token_count_completion": 0,
    "token_count_total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[SessionData](#schemasessiondata)|true|none|none|

<h2 id="tocS_GetSessionsResponseBody">GetSessionsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetsessionsresponsebody"></a>
<a id="schema_GetSessionsResponseBody"></a>
<a id="tocSgetsessionsresponsebody"></a>
<a id="tocsgetsessionsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "session_id": "string",
      "project_id": "string",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "traces": [
        {
          "id": "string",
          "trace_id": "string",
          "start_time": "1970-01-01T00:00:00Z",
          "end_time": "1970-01-01T00:00:00Z"
        }
      ],
      "token_count_prompt": 0,
      "token_count_completion": 0,
      "token_count_total": 0
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SessionData](#schemasessiondata)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetTracesResponseBody">GetTracesResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagettracesresponsebody"></a>
<a id="schema_GetTracesResponseBody"></a>
<a id="tocSgettracesresponsebody"></a>
<a id="tocsgettracesresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "trace_id": "string",
      "project_id": "string",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "token_count_prompt": 0,
      "token_count_completion": 0,
      "token_count_total": 0,
      "spans": [
        {
          "id": "string",
          "span_id": "string",
          "parent_id": "string",
          "name": "string",
          "span_kind": "string",
          "status_code": "string",
          "start_time": "1970-01-01T00:00:00Z",
          "end_time": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TraceData](#schematracedata)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetUsersResponseBody">GetUsersResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetusersresponsebody"></a>
<a id="schema_GetUsersResponseBody"></a>
<a id="tocSgetusersresponsebody"></a>
<a id="tocsgetusersresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "email": "string",
      "username": "string",
      "role": "SYSTEM",
      "auth_method": "LOCAL",
      "password": "string",
      "password_needs_reset": true
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LocalUser](#schemalocaluser) \| [OAuth2User](#schemaoauth2user) \| [LDAPUser](#schemaldapuser)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_GetViewerResponseBody">GetViewerResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemagetviewerresponsebody"></a>
<a id="schema_GetViewerResponseBody"></a>
<a id="tocSgetviewerresponsebody"></a>
<a id="tocsgetviewerresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "username": "string",
    "role": "SYSTEM",
    "auth_method": "LOCAL",
    "password": "string",
    "password_needs_reset": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[LocalUser](#schemalocaluser) \| [OAuth2User](#schemaoauth2user) \| [LDAPUser](#schemaldapuser) \| [AnonymousUser](#schemaanonymoususer)|true|none|none|

<h2 id="tocS_GraphQLContext">GraphQLContext</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlcontext"></a>
<a id="schema_GraphQLContext"></a>
<a id="tocSgraphqlcontext"></a>
<a id="tocsgraphqlcontext"></a>

```json
{
  "type": "graphql",
  "mutationsEnabled": true
}
```

Deprecated GraphQL mutations opt-in.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|mutationsEnabled|boolean|true|none|none|

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
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
"string"
```

<h2 id="tocS_IncompleteExperimentEvaluation">IncompleteExperimentEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemaincompleteexperimentevaluation"></a>
<a id="schema_IncompleteExperimentEvaluation"></a>
<a id="tocSincompleteexperimentevaluation"></a>
<a id="tocsincompleteexperimentevaluation"></a>

```json
{
  "experiment_run": {
    "dataset_example_id": "string",
    "output": null,
    "repetition_number": 1,
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "trace_id": "string",
    "error": "string",
    "id": "string",
    "experiment_id": "string"
  },
  "dataset_example": {
    "id": "string",
    "node_id": "string",
    "input": {},
    "output": {},
    "metadata": {},
    "updated_at": "1970-01-01T00:00:00Z",
    "source": {
      "span_id": "string",
      "span_node_id": "string"
    }
  },
  "evaluation_names": [
    "string"
  ]
}
```

Information about an experiment run with incomplete evaluations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiment_run|[ExperimentRun](#schemaexperimentrun)|true|none|The experiment run|
|dataset_example|[DatasetExample](#schemadatasetexample)|true|none|The dataset example|
|evaluation_names|[string]|true|none|List of evaluation names that are incomplete (either missing or failed)|

<h2 id="tocS_IncompleteExperimentRun">IncompleteExperimentRun</h2>
<!-- backwards compatibility -->
<a id="schemaincompleteexperimentrun"></a>
<a id="schema_IncompleteExperimentRun"></a>
<a id="tocSincompleteexperimentrun"></a>
<a id="tocsincompleteexperimentrun"></a>

```json
{
  "dataset_example": {
    "id": "string",
    "node_id": "string",
    "input": {},
    "output": {},
    "metadata": {},
    "updated_at": "1970-01-01T00:00:00Z",
    "source": {
      "span_id": "string",
      "span_node_id": "string"
    }
  },
  "repetition_numbers": [
    0
  ]
}
```

Information about incomplete runs for a dataset example

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_example|[DatasetExample](#schemadatasetexample)|true|none|The dataset example|
|repetition_numbers|[integer]|true|none|List of repetition numbers that need to be run|

<h2 id="tocS_InsertedSessionAnnotation">InsertedSessionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemainsertedsessionannotation"></a>
<a id="schema_InsertedSessionAnnotation"></a>
<a id="tocSinsertedsessionannotation"></a>
<a id="tocsinsertedsessionannotation"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the inserted session annotation|

<h2 id="tocS_InsertedSpanAnnotation">InsertedSpanAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemainsertedspanannotation"></a>
<a id="schema_InsertedSpanAnnotation"></a>
<a id="tocSinsertedspanannotation"></a>
<a id="tocsinsertedspanannotation"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the inserted span annotation|

<h2 id="tocS_InsertedSpanDocumentAnnotation">InsertedSpanDocumentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemainsertedspandocumentannotation"></a>
<a id="schema_InsertedSpanDocumentAnnotation"></a>
<a id="tocSinsertedspandocumentannotation"></a>
<a id="tocsinsertedspandocumentannotation"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the inserted span document annotation|

<h2 id="tocS_InsertedTraceAnnotation">InsertedTraceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemainsertedtraceannotation"></a>
<a id="schema_InsertedTraceAnnotation"></a>
<a id="tocSinsertedtraceannotation"></a>
<a id="tocsinsertedtraceannotation"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the inserted trace annotation|

<h2 id="tocS_LDAPUser">LDAPUser</h2>
<!-- backwards compatibility -->
<a id="schemaldapuser"></a>
<a id="schema_LDAPUser"></a>
<a id="tocSldapuser"></a>
<a id="tocsldapuser"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "username": "string",
  "role": "SYSTEM",
  "auth_method": "LDAP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|email|string|true|none|none|
|username|string|true|none|none|
|role|string|true|none|none|
|auth_method|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|SYSTEM|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_LDAPUserData">LDAPUserData</h2>
<!-- backwards compatibility -->
<a id="schemaldapuserdata"></a>
<a id="schema_LDAPUserData"></a>
<a id="tocSldapuserdata"></a>
<a id="tocsldapuserdata"></a>

```json
{
  "email": "string",
  "username": "string",
  "role": "SYSTEM",
  "auth_method": "LDAP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|username|string|true|none|none|
|role|string|true|none|none|
|auth_method|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|SYSTEM|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_LegacyAssistantMessageMetadata">LegacyAssistantMessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalegacyassistantmessagemetadata"></a>
<a id="schema_LegacyAssistantMessageMetadata"></a>
<a id="tocSlegacyassistantmessagemetadata"></a>
<a id="tocslegacyassistantmessagemetadata"></a>

```json
{
  "type": "assistant",
  "sessionId": "string",
  "turnTraceContext": {
    "traceId": "string",
    "rootSpanId": "string",
    "startedAt": "1970-01-01T00:00:00Z"
  },
  "usage": {
    "tokens": {
      "prompt": 0,
      "completion": 0,
      "total": 0
    },
    "promptDetails": {
      "cacheRead": 0,
      "cacheWrite": 0
    }
  },
  "interrupted": false
}
```

Legacy transcripts predate the ``type`` discriminator, so default it here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|sessionId|string|true|none|none|
|turnTraceContext|[TurnTraceContext](#schematurntracecontext) \| null|false|none|none|
|usage|[AssistantMessageMetadataUsage](#schemaassistantmessagemetadatausage) \| null|false|none|none|
|interrupted|boolean|false|none|none|

<h2 id="tocS_LegacyAssistantMetadataUIMessage">LegacyAssistantMetadataUIMessage</h2>
<!-- backwards compatibility -->
<a id="schemalegacyassistantmetadatauimessage"></a>
<a id="schema_LegacyAssistantMetadataUIMessage"></a>
<a id="tocSlegacyassistantmetadatauimessage"></a>
<a id="tocslegacyassistantmetadatauimessage"></a>

```json
{
  "id": "string",
  "role": "system",
  "metadata": {
    "type": "assistant",
    "sessionId": "string",
    "turnTraceContext": {
      "traceId": "string",
      "rootSpanId": "string",
      "startedAt": "1970-01-01T00:00:00Z"
    },
    "usage": {
      "tokens": {
        "prompt": 0,
        "completion": 0,
        "total": 0
      },
      "promptDetails": {
        "cacheRead": 0,
        "cacheWrite": 0
      }
    },
    "interrupted": false
  },
  "parts": [
    {
      "type": "text",
      "text": "string",
      "state": "streaming",
      "providerMetadata": {
        "property1": {},
        "property2": {}
      }
    }
  ]
}
```

``UIMessage`` with ``metadata`` narrowed to ``PhoenixAssistantMessageMetadata``.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|role|string|true|none|none|
|metadata|[LegacyAssistantMessageMetadata](#schemalegacyassistantmessagemetadata) \| null|false|none|none|
|parts|[[TextUIPart](#schematextuipart) \| [ReasoningUIPart](#schemareasoninguipart) \| [pydantic_ai__ui__vercel_ai__request_types__ToolInputStreamingPart](#schemapydantic_ai__ui__vercel_ai__request_types__toolinputstreamingpart) \| [ToolInputAvailablePart](#schematoolinputavailablepart) \| [pydantic_ai__ui__vercel_ai__request_types__ToolOutputAvailablePart](#schemapydantic_ai__ui__vercel_ai__request_types__tooloutputavailablepart) \| [pydantic_ai__ui__vercel_ai__request_types__ToolOutputErrorPart](#schemapydantic_ai__ui__vercel_ai__request_types__tooloutputerrorpart) \| [ToolApprovalRequestedPart](#schematoolapprovalrequestedpart) \| [ToolApprovalRespondedPart](#schematoolapprovalrespondedpart) \| [ToolOutputDeniedPart](#schematooloutputdeniedpart) \| [pydantic_ai__ui__vercel_ai__request_types__DynamicToolInputStreamingPart](#schemapydantic_ai__ui__vercel_ai__request_types__dynamictoolinputstreamingpart) \| [DynamicToolInputAvailablePart](#schemadynamictoolinputavailablepart) \| [pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputAvailablePart](#schemapydantic_ai__ui__vercel_ai__request_types__dynamictooloutputavailablepart) \| [pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputErrorPart](#schemapydantic_ai__ui__vercel_ai__request_types__dynamictooloutputerrorpart) \| [DynamicToolApprovalRequestedPart](#schemadynamictoolapprovalrequestedpart) \| [DynamicToolApprovalRespondedPart](#schemadynamictoolapprovalrespondedpart) \| [DynamicToolOutputDeniedPart](#schemadynamictooloutputdeniedpart) \| [SourceUrlUIPart](#schemasourceurluipart) \| [SourceDocumentUIPart](#schemasourcedocumentuipart) \| [FileUIPart](#schemafileuipart) \| [DataUIPart](#schemadatauipart) \| [StepStartUIPart](#schemastepstartuipart)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|system|
|role|user|
|role|assistant|

<h2 id="tocS_LegacyChatRegenerateMessage">LegacyChatRegenerateMessage</h2>
<!-- backwards compatibility -->
<a id="schemalegacychatregeneratemessage"></a>
<a id="schema_LegacyChatRegenerateMessage"></a>
<a id="tocSlegacychatregeneratemessage"></a>
<a id="tocslegacychatregeneratemessage"></a>

```json
{
  "trigger": "regenerate-message",
  "id": "string",
  "messages": [
    {
      "id": "string",
      "role": "system",
      "metadata": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    }
  ],
  "messageId": "string",
  "ingestTraces": false,
  "exportRemoteTraces": false,
  "attachUserId": false,
  "contexts": [
    {
      "type": "app",
      "currentDateTime": "string",
      "timeZone": "string"
    }
  ],
  "editPermission": "manual",
  "requestedSkills": [
    "string"
  ],
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

Regenerate message extended with Phoenix-specific fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|string|true|none|none|
|id|string|true|none|none|
|messages|[[LegacyAssistantMetadataUIMessage](#schemalegacyassistantmetadatauimessage)]|true|none|none|
|messageId|string \| null|false|none|none|
|ingestTraces|boolean|false|none|none|
|exportRemoteTraces|boolean|false|none|none|
|attachUserId|boolean|false|none|When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.|
|contexts|[[ChatContext](#schemachatcontext)]|false|none|none|
|editPermission|string|false|none|none|
|requestedSkills|[string]|false|none|Skills the user explicitly requested via the prompt's slash-command affordance. Ignored by this legacy route.|
|model|[AgentModelSelection](#schemaagentmodelselection)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|editPermission|manual|
|editPermission|bypass|

<h2 id="tocS_LegacyChatRequest">LegacyChatRequest</h2>
<!-- backwards compatibility -->
<a id="schemalegacychatrequest"></a>
<a id="schema_LegacyChatRequest"></a>
<a id="tocSlegacychatrequest"></a>
<a id="tocslegacychatrequest"></a>

```json
{
  "trigger": "submit-message",
  "id": "string",
  "messages": [
    {
      "id": "string",
      "role": "system",
      "metadata": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    }
  ],
  "ingestTraces": false,
  "exportRemoteTraces": false,
  "attachUserId": false,
  "contexts": [
    {
      "type": "app",
      "currentDateTime": "string",
      "timeZone": "string"
    }
  ],
  "editPermission": "manual",
  "requestedSkills": [
    "string"
  ],
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

Discriminated union of legacy chat request payloads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LegacyChatSubmitMessage](#schemalegacychatsubmitmessage)|false|none|Submit message extended with Phoenix-specific fields.|
|*oneOf*|[LegacyChatRegenerateMessage](#schemalegacychatregeneratemessage)|false|none|Regenerate message extended with Phoenix-specific fields.|

<h2 id="tocS_LegacyChatSubmitMessage">LegacyChatSubmitMessage</h2>
<!-- backwards compatibility -->
<a id="schemalegacychatsubmitmessage"></a>
<a id="schema_LegacyChatSubmitMessage"></a>
<a id="tocSlegacychatsubmitmessage"></a>
<a id="tocslegacychatsubmitmessage"></a>

```json
{
  "trigger": "submit-message",
  "id": "string",
  "messages": [
    {
      "id": "string",
      "role": "system",
      "metadata": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    }
  ],
  "ingestTraces": false,
  "exportRemoteTraces": false,
  "attachUserId": false,
  "contexts": [
    {
      "type": "app",
      "currentDateTime": "string",
      "timeZone": "string"
    }
  ],
  "editPermission": "manual",
  "requestedSkills": [
    "string"
  ],
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

Submit message extended with Phoenix-specific fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|string|false|none|none|
|id|string|true|none|none|
|messages|[[LegacyAssistantMetadataUIMessage](#schemalegacyassistantmetadatauimessage)]|true|none|none|
|ingestTraces|boolean|false|none|none|
|exportRemoteTraces|boolean|false|none|none|
|attachUserId|boolean|false|none|When true and the request is authenticated as a PhoenixUser, attaches the user's email as the OpenInference ``user.id`` span attribute on all traced work for this request.|
|contexts|[[ChatContext](#schemachatcontext)]|false|none|none|
|editPermission|string|false|none|none|
|requestedSkills|[string]|false|none|Skills the user explicitly requested via the prompt's slash-command affordance. Ignored by this legacy route.|
|model|[AgentModelSelection](#schemaagentmodelselection)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|editPermission|manual|
|editPermission|bypass|

<h2 id="tocS_ListAgentSessionMessagesResponseBody">ListAgentSessionMessagesResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistagentsessionmessagesresponsebody"></a>
<a id="schema_ListAgentSessionMessagesResponseBody"></a>
<a id="tocSlistagentsessionmessagesresponsebody"></a>
<a id="tocslistagentsessionmessagesresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "role": "system",
      "metadata": {
        "phoenix": {
          "type": "assistant",
          "sessionId": "string",
          "turnTraceContext": {
            "traceId": "string",
            "rootSpanId": "string",
            "startedAt": "1970-01-01T00:00:00Z"
          },
          "usage": {
            "tokens": {
              "prompt": 0,
              "completion": 0,
              "total": 0
            },
            "promptDetails": {
              "cacheRead": 0,
              "cacheWrite": 0
            }
          },
          "interrupted": false
        },
        "pydantic_ai": {
          "timestamp": "1970-01-01T00:00:00Z"
        }
      },
      "parts": [
        {
          "type": "text",
          "text": "string",
          "state": "streaming",
          "providerMetadata": {
            "property1": {},
            "property2": {}
          }
        }
      ]
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PhoenixUIMessage](#schemaphoenixuimessage)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_ListAgentSessionsResponseBody">ListAgentSessionsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistagentsessionsresponsebody"></a>
<a id="schema_ListAgentSessionsResponseBody"></a>
<a id="tocSlistagentsessionsresponsebody"></a>
<a id="tocslistagentsessionsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "is_ephemeral": true
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AgentSessionSummary](#schemaagentsessionsummary)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_ListDatasetExamplesData">ListDatasetExamplesData</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetexamplesdata"></a>
<a id="schema_ListDatasetExamplesData"></a>
<a id="tocSlistdatasetexamplesdata"></a>
<a id="tocslistdatasetexamplesdata"></a>

```json
{
  "dataset_id": "string",
  "version_id": "string",
  "filtered_splits": [
    "string"
  ],
  "examples": [
    {
      "id": "string",
      "node_id": "string",
      "input": {},
      "output": {},
      "metadata": {},
      "updated_at": "1970-01-01T00:00:00Z",
      "source": {
        "span_id": "string",
        "span_node_id": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_id|string|true|none|none|
|version_id|string|true|none|none|
|filtered_splits|[string]|false|none|none|
|examples|[[DatasetExample](#schemadatasetexample)]|true|none|none|

<h2 id="tocS_ListDatasetExamplesResponseBody">ListDatasetExamplesResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetexamplesresponsebody"></a>
<a id="schema_ListDatasetExamplesResponseBody"></a>
<a id="tocSlistdatasetexamplesresponsebody"></a>
<a id="tocslistdatasetexamplesresponsebody"></a>

```json
{
  "data": {
    "dataset_id": "string",
    "version_id": "string",
    "filtered_splits": [
      "string"
    ],
    "examples": [
      {
        "id": "string",
        "node_id": "string",
        "input": {},
        "output": {},
        "metadata": {},
        "updated_at": "1970-01-01T00:00:00Z",
        "source": {
          "span_id": "string",
          "span_node_id": "string"
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ListDatasetExamplesData](#schemalistdatasetexamplesdata)|true|none|none|

<h2 id="tocS_ListDatasetLabelsForDatasetResponseBody">ListDatasetLabelsForDatasetResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetlabelsfordatasetresponsebody"></a>
<a id="schema_ListDatasetLabelsForDatasetResponseBody"></a>
<a id="tocSlistdatasetlabelsfordatasetresponsebody"></a>
<a id="tocslistdatasetlabelsfordatasetresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DatasetLabel](#schemadatasetlabel)]|true|none|none|

<h2 id="tocS_ListDatasetSplitsResponseBody">ListDatasetSplitsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsplitsresponsebody"></a>
<a id="schema_ListDatasetSplitsResponseBody"></a>
<a id="tocSlistdatasetsplitsresponsebody"></a>
<a id="tocslistdatasetsplitsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string",
      "metadata": {},
      "example_count": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DatasetSplit](#schemadatasetsplit)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_ListDatasetVersionsResponseBody">ListDatasetVersionsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetversionsresponsebody"></a>
<a id="schema_ListDatasetVersionsResponseBody"></a>
<a id="tocSlistdatasetversionsresponsebody"></a>
<a id="tocslistdatasetversionsresponsebody"></a>

```json
{
  "data": [
    {
      "version_id": "string",
      "description": "string",
      "metadata": {},
      "created_at": "1970-01-01T00:00:00Z"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DatasetVersion](#schemadatasetversion)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_ListDatasetsResponseBody">ListDatasetsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponsebody"></a>
<a id="schema_ListDatasetsResponseBody"></a>
<a id="tocSlistdatasetsresponsebody"></a>
<a id="tocslistdatasetsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "metadata": {},
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "example_count": 0
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Dataset](#schemadataset)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_ListExperimentRunsResponseBody">ListExperimentRunsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimentrunsresponsebody"></a>
<a id="schema_ListExperimentRunsResponseBody"></a>
<a id="tocSlistexperimentrunsresponsebody"></a>
<a id="tocslistexperimentrunsresponsebody"></a>

```json
{
  "data": [
    {
      "dataset_example_id": "string",
      "output": null,
      "repetition_number": 1,
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z",
      "trace_id": "string",
      "error": "string",
      "id": "string",
      "experiment_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExperimentRun](#schemaexperimentrun)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_ListExperimentTagsResponseBody">ListExperimentTagsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimenttagsresponsebody"></a>
<a id="schema_ListExperimentTagsResponseBody"></a>
<a id="tocSlistexperimenttagsresponsebody"></a>
<a id="tocslistexperimenttagsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExperimentTag](#schemaexperimenttag)]|true|none|none|

<h2 id="tocS_ListExperimentsResponseBody">ListExperimentsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemalistexperimentsresponsebody"></a>
<a id="schema_ListExperimentsResponseBody"></a>
<a id="tocSlistexperimentsresponsebody"></a>
<a id="tocslistexperimentsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "dataset_id": "string",
      "dataset_version_id": "string",
      "name": "string",
      "description": "string",
      "repetitions": 1,
      "metadata": {},
      "project_name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "example_count": 0,
      "successful_run_count": 0,
      "failed_run_count": 0,
      "missing_run_count": 0
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Experiment](#schemaexperiment)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_LlmEvaluatorUIContext">LlmEvaluatorUIContext</h2>
<!-- backwards compatibility -->
<a id="schemallmevaluatoruicontext"></a>
<a id="schema_LlmEvaluatorUIContext"></a>
<a id="tocSllmevaluatoruicontext"></a>
<a id="tocsllmevaluatoruicontext"></a>

```json
{
  "type": "llm_evaluator",
  "evaluatorNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|evaluatorNodeId|string \| null|false|none|none|

<h2 id="tocS_LocalUser">LocalUser</h2>
<!-- backwards compatibility -->
<a id="schemalocaluser"></a>
<a id="schema_LocalUser"></a>
<a id="tocSlocaluser"></a>
<a id="tocslocaluser"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "username": "string",
  "role": "SYSTEM",
  "auth_method": "LOCAL",
  "password": "string",
  "password_needs_reset": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|email|string|true|none|none|
|username|string|true|none|none|
|role|string|true|none|none|
|auth_method|string|true|none|none|
|password|string|false|none|none|
|password_needs_reset|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|SYSTEM|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_LocalUserData">LocalUserData</h2>
<!-- backwards compatibility -->
<a id="schemalocaluserdata"></a>
<a id="schema_LocalUserData"></a>
<a id="tocSlocaluserdata"></a>
<a id="tocslocaluserdata"></a>

```json
{
  "email": "string",
  "username": "string",
  "role": "SYSTEM",
  "auth_method": "LOCAL",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|username|string|true|none|none|
|role|string|true|none|none|
|auth_method|string|true|none|none|
|password|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|SYSTEM|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_MessageMetadata">MessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamessagemetadata"></a>
<a id="schema_MessageMetadata"></a>
<a id="tocSmessagemetadata"></a>
<a id="tocsmessagemetadata"></a>

```json
{
  "phoenix": {
    "type": "assistant",
    "sessionId": "string",
    "turnTraceContext": {
      "traceId": "string",
      "rootSpanId": "string",
      "startedAt": "1970-01-01T00:00:00Z"
    },
    "usage": {
      "tokens": {
        "prompt": 0,
        "completion": 0,
        "total": 0
      },
      "promptDetails": {
        "cacheRead": 0,
        "cacheWrite": 0
      }
    },
    "interrupted": false
  },
  "pydantic_ai": {
    "timestamp": "1970-01-01T00:00:00Z"
  }
}
```

``UIMessage.metadata`` as a registry of namespaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoenix|[PhoenixAssistantMessageMetadata](#schemaphoenixassistantmessagemetadata) \| [PhoenixUserMessageMetadata](#schemaphoenixusermessagemetadata) \| null|false|none|none|
|pydantic_ai|[PydanticAIMessageMetadata](#schemapydanticaimessagemetadata) \| null|false|none|none|

<h2 id="tocS_ModelProvider">ModelProvider</h2>
<!-- backwards compatibility -->
<a id="schemamodelprovider"></a>
<a id="schema_ModelProvider"></a>
<a id="tocSmodelprovider"></a>
<a id="tocsmodelprovider"></a>

```json
"OPENAI"
```

<h2 id="tocS_OAuth2User">OAuth2User</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2user"></a>
<a id="schema_OAuth2User"></a>
<a id="tocSoauth2user"></a>
<a id="tocsoauth2user"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "username": "string",
  "role": "SYSTEM",
  "auth_method": "OAUTH2",
  "oauth2_client_id": "string",
  "oauth2_user_id": "string",
  "profile_picture_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|email|string|true|none|none|
|username|string|true|none|none|
|role|string|true|none|none|
|auth_method|string|true|none|none|
|oauth2_client_id|string|false|none|none|
|oauth2_user_id|string|false|none|none|
|profile_picture_url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|SYSTEM|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_OAuth2UserData">OAuth2UserData</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2userdata"></a>
<a id="schema_OAuth2UserData"></a>
<a id="tocSoauth2userdata"></a>
<a id="tocsoauth2userdata"></a>

```json
{
  "email": "string",
  "username": "string",
  "role": "SYSTEM",
  "auth_method": "OAUTH2",
  "oauth2_client_id": "string",
  "oauth2_user_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|username|string|true|none|none|
|role|string|true|none|none|
|auth_method|string|true|none|none|
|oauth2_client_id|string|false|none|none|
|oauth2_user_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|SYSTEM|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_OptimizationDirection">OptimizationDirection</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizationdirection"></a>
<a id="schema_OptimizationDirection"></a>
<a id="tocSoptimizationdirection"></a>
<a id="tocsoptimizationdirection"></a>

```json
"MINIMIZE"
```

<h2 id="tocS_OtlpAnyValue">OtlpAnyValue</h2>
<!-- backwards compatibility -->
<a id="schemaotlpanyvalue"></a>
<a id="schema_OtlpAnyValue"></a>
<a id="tocSotlpanyvalue"></a>
<a id="tocsotlpanyvalue"></a>

```json
{
  "array_value": {
    "values": [
      {}
    ]
  },
  "bool_value": true,
  "bytes_value": "string",
  "double_value": 0,
  "int_value": -9223372036850000000,
  "kvlist_value": null,
  "string_value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|array_value|[OtlpArrayValue](#schemaotlparrayvalue) \| null|false|none|none|
|bool_value|boolean \| null|false|none|none|
|bytes_value|string \| null|false|none|none|
|double_value|number \| [OtlpDoubleValue](#schemaotlpdoublevalue) \| string \| null|false|none|none|
|int_value|integer \| string \| null|false|none|none|
|kvlist_value|null|false|none|none|
|string_value|string \| null|false|none|none|

<h2 id="tocS_OtlpArrayValue">OtlpArrayValue</h2>
<!-- backwards compatibility -->
<a id="schemaotlparrayvalue"></a>
<a id="schema_OtlpArrayValue"></a>
<a id="tocSotlparrayvalue"></a>
<a id="tocsotlparrayvalue"></a>

```json
{
  "values": [
    {
      "array_value": {},
      "bool_value": true,
      "bytes_value": "string",
      "double_value": 0,
      "int_value": -9223372036850000000,
      "kvlist_value": null,
      "string_value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[[OtlpAnyValue](#schemaotlpanyvalue)] \| null|false|none|Array of values. The array may be empty (contain 0 elements).|

<h2 id="tocS_OtlpDoubleValue">OtlpDoubleValue</h2>
<!-- backwards compatibility -->
<a id="schemaotlpdoublevalue"></a>
<a id="schema_OtlpDoubleValue"></a>
<a id="tocSotlpdoublevalue"></a>
<a id="tocsotlpdoublevalue"></a>

```json
"Infinity"
```

<h2 id="tocS_OtlpEvent">OtlpEvent</h2>
<!-- backwards compatibility -->
<a id="schemaotlpevent"></a>
<a id="schema_OtlpEvent"></a>
<a id="tocSotlpevent"></a>
<a id="tocsotlpevent"></a>

```json
{
  "attributes": [
    {
      "key": "string",
      "value": {
        "array_value": {},
        "bool_value": true,
        "bytes_value": "string",
        "double_value": 0,
        "int_value": -9223372036850000000,
        "kvlist_value": null,
        "string_value": "string"
      }
    }
  ],
  "dropped_attributes_count": 0,
  "name": "string",
  "time_unix_nano": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[OtlpKeyValue](#schemaotlpkeyvalue)] \| null|false|none|attributes is a collection of attribute key/value pairs on the event. Attribute keys MUST be unique (it is not allowed to have more than one attribute with the same key).|
|dropped_attributes_count|integer \| null|false|none|dropped_attributes_count is the number of dropped attributes. If the value is 0, then no attributes were dropped.|
|name|string \| null|false|none|name of the event. This field is semantically required to be set to non-empty string.|
|time_unix_nano|integer \| string \| null|false|none|time_unix_nano is the time the event occurred. Value is UNIX Epoch time in nanoseconds since 00:00:00 UTC on 1 January 1970.|

<h2 id="tocS_OtlpKeyValue">OtlpKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemaotlpkeyvalue"></a>
<a id="schema_OtlpKeyValue"></a>
<a id="tocSotlpkeyvalue"></a>
<a id="tocsotlpkeyvalue"></a>

```json
{
  "key": "string",
  "value": {
    "array_value": {},
    "bool_value": true,
    "bytes_value": "string",
    "double_value": 0,
    "int_value": -9223372036850000000,
    "kvlist_value": null,
    "string_value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string \| null|false|none|none|
|value|[OtlpAnyValue](#schemaotlpanyvalue) \| null|false|none|none|

<h2 id="tocS_OtlpKind">OtlpKind</h2>
<!-- backwards compatibility -->
<a id="schemaotlpkind"></a>
<a id="schema_OtlpKind"></a>
<a id="tocSotlpkind"></a>
<a id="tocsotlpkind"></a>

```json
"SPAN_KIND_UNSPECIFIED"
```

<h2 id="tocS_OtlpSpan">OtlpSpan</h2>
<!-- backwards compatibility -->
<a id="schemaotlpspan"></a>
<a id="schema_OtlpSpan"></a>
<a id="tocSotlpspan"></a>
<a id="tocsotlpspan"></a>

```json
{
  "attributes": [
    {
      "key": "string",
      "value": {
        "array_value": {},
        "bool_value": true,
        "bytes_value": "string",
        "double_value": 0,
        "int_value": -9223372036850000000,
        "kvlist_value": null,
        "string_value": "string"
      }
    }
  ],
  "dropped_attributes_count": 0,
  "dropped_events_count": 0,
  "dropped_links_count": 0,
  "end_time_unix_nano": 0,
  "events": [
    {
      "attributes": [
        {
          "key": "string",
          "value": {
            "array_value": {},
            "bool_value": true,
            "bytes_value": "string",
            "double_value": 0,
            "int_value": -9223372036850000000,
            "kvlist_value": null,
            "string_value": "string"
          }
        }
      ],
      "dropped_attributes_count": 0,
      "name": "string",
      "time_unix_nano": 0
    }
  ],
  "flags": 0,
  "kind": "SPAN_KIND_INTERNAL",
  "links": null,
  "name": "string",
  "parent_span_id": "string",
  "span_id": "string",
  "start_time_unix_nano": 0,
  "status": {
    "code": -2147483648,
    "message": "string"
  },
  "trace_id": "string",
  "trace_state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[OtlpKeyValue](#schemaotlpkeyvalue)] \| null|false|none|attributes is a collection of key/value pairs. Note, global attributes like server name can be set using the resource API. Examples of attributes:<br><br>    "/http/user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"<br>    "/http/server_latency": 300<br>    "example.com/myattribute": true<br>    "example.com/score": 10.239<br><br>The OpenTelemetry API specification further restricts the allowed value types:<br>https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/common/README.md#attribute<br>Attribute keys MUST be unique (it is not allowed to have more than one attribute with the same key).|
|dropped_attributes_count|integer \| null|false|none|dropped_attributes_count is the number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0, then no attributes were dropped.|
|dropped_events_count|integer \| null|false|none|dropped_events_count is the number of dropped events. If the value is 0, then no events were dropped.|
|dropped_links_count|integer \| null|false|none|dropped_links_count is the number of dropped links after the maximum size was enforced. If this value is 0, then no links were dropped.|
|end_time_unix_nano|integer \| string \| null|false|none|end_time_unix_nano is the end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.<br>Value is UNIX Epoch time in nanoseconds since 00:00:00 UTC on 1 January 1970.<br><br>This field is semantically required and it is expected that end_time >= start_time.|
|events|[[OtlpEvent](#schemaotlpevent)] \| null|false|none|events is a collection of Event items. A span with no events is valid.|
|flags|integer \| null|false|none|Flags, a bit field.<br><br>Bits 0-7 (8 least significant bits) are the trace flags as defined in W3C Trace Context specification. To read the 8-bit W3C trace flag, use `flags & SPAN_FLAGS_TRACE_FLAGS_MASK`.<br><br>See https://www.w3.org/TR/trace-context-2/#trace-flags for the flag definitions.<br><br>Bits 8 and 9 represent the 3 states of whether a span's parent is remote. The states are (unknown, is not remote, is remote).<br>To read whether the value is known, use `(flags & SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK) != 0`.<br>To read whether the span is remote, use `(flags & SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK) != 0`.<br><br>When creating span messages, if the message is logically forwarded from another source with an equivalent flags fields (i.e., usually another OTLP span message), the field SHOULD be copied as-is. If creating from a source that does not have an equivalent flags field (such as a runtime representation of an OpenTelemetry span), the high 22 bits MUST be set to zero.<br>Readers MUST NOT assume that bits 10-31 (22 most significant bits) will be zero.<br><br>[Optional].|
|kind|[OtlpKind](#schemaotlpkind) \| integer \| null|false|none|Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify queueing latency associated with the span.|
|links|null|false|none|none|
|name|string \| null|false|none|A description of the span's operation.<br><br>For example, the name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name at the same call point in an application. This makes it easier to correlate spans in different traces.<br><br>This field is semantically required to be set to non-empty string. Empty value is equivalent to an unknown span name.<br><br>This field is required.|
|parent_span_id|string \| null|false|none|The `span_id` of this span's parent span. If this is a root span, then this field must be empty. The ID is an 8-byte array.|
|span_id|string \| null|false|none|A unique identifier for a span within a trace, assigned when the span is created. The ID is an 8-byte array. An ID with all zeroes OR of length other than 8 bytes is considered invalid (empty string in OTLP/JSON is zero-length and thus is also invalid).<br><br>This field is required.|
|start_time_unix_nano|integer \| string \| null|false|none|start_time_unix_nano is the start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.<br>Value is UNIX Epoch time in nanoseconds since 00:00:00 UTC on 1 January 1970.<br><br>This field is semantically required and it is expected that end_time >= start_time.|
|status|[OtlpStatus](#schemaotlpstatus) \| null|false|none|An optional final status for this span. Semantically when Status isn't set, it means span's status code is unset, i.e. assume STATUS_CODE_UNSET (code = 0).|
|trace_id|string \| null|false|none|A unique identifier for a trace. All spans from the same trace share the same `trace_id`. The ID is a 16-byte array. An ID with all zeroes OR of length other than 16 bytes is considered invalid (empty string in OTLP/JSON is zero-length and thus is also invalid).<br><br>This field is required.|
|trace_state|string \| null|false|none|trace_state conveys information about request position in multiple distributed tracing graphs. It is a trace_state in w3c-trace-context format: https://www.w3.org/TR/trace-context/#tracestate-header<br>See also https://github.com/w3c/distributed-tracing for more details about this field.|

<h2 id="tocS_OtlpSpansResponseBody">OtlpSpansResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaotlpspansresponsebody"></a>
<a id="schema_OtlpSpansResponseBody"></a>
<a id="tocSotlpspansresponsebody"></a>
<a id="tocsotlpspansresponsebody"></a>

```json
{
  "data": [
    {
      "attributes": [
        {
          "key": "string",
          "value": {
            "array_value": {},
            "bool_value": true,
            "bytes_value": "string",
            "double_value": 0,
            "int_value": -9223372036850000000,
            "kvlist_value": null,
            "string_value": "string"
          }
        }
      ],
      "dropped_attributes_count": 0,
      "dropped_events_count": 0,
      "dropped_links_count": 0,
      "end_time_unix_nano": 0,
      "events": [
        {
          "attributes": [
            {
              "key": "string",
              "value": {
                "array_value": {},
                "bool_value": true,
                "bytes_value": "string",
                "double_value": 0,
                "int_value": -9223372036850000000,
                "kvlist_value": null,
                "string_value": "string"
              }
            }
          ],
          "dropped_attributes_count": 0,
          "name": "string",
          "time_unix_nano": 0
        }
      ],
      "flags": 0,
      "kind": "SPAN_KIND_INTERNAL",
      "links": null,
      "name": "string",
      "parent_span_id": "string",
      "span_id": "string",
      "start_time_unix_nano": 0,
      "status": {
        "code": -2147483648,
        "message": "string"
      },
      "trace_id": "string",
      "trace_state": "string"
    }
  ],
  "next_cursor": "string"
}
```

Paginated response where each span follows OTLP JSON structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[OtlpSpan](#schemaotlpspan)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_OtlpStatus">OtlpStatus</h2>
<!-- backwards compatibility -->
<a id="schemaotlpstatus"></a>
<a id="schema_OtlpStatus"></a>
<a id="tocSotlpstatus"></a>
<a id="tocsotlpstatus"></a>

```json
{
  "code": -2147483648,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer \| null|false|none|The status code.|
|message|string \| null|false|none|A developer-facing human readable error message.|

<h2 id="tocS_PatchAgentSessionRequestBody">PatchAgentSessionRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchagentsessionrequestbody"></a>
<a id="schema_PatchAgentSessionRequestBody"></a>
<a id="tocSpatchagentsessionrequestbody"></a>
<a id="tocspatchagentsessionrequestbody"></a>

```json
{
  "title": "string",
  "model": {
    "providerType": "custom",
    "providerId": "string",
    "modelName": "string"
  }
}
```

Fields to update on a persisted session. Omit a field to leave it unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|New title for the session|
|model|[AgentModelSelection](#schemaagentmodelselection)|false|none|New model selection for the session|

<h2 id="tocS_PatchAgentSessionResponseBody">PatchAgentSessionResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchagentsessionresponsebody"></a>
<a id="schema_PatchAgentSessionResponseBody"></a>
<a id="tocSpatchagentsessionresponsebody"></a>
<a id="tocspatchagentsessionresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "title": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "is_ephemeral": true,
    "model": {
      "providerType": "custom",
      "providerId": "string",
      "modelName": "string"
    },
    "is_active": true,
    "last_message_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[AgentSessionData](#schemaagentsessiondata)|true|none|none|

<h2 id="tocS_PatchPromptRequestBody">PatchPromptRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchpromptrequestbody"></a>
<a id="schema_PatchPromptRequestBody"></a>
<a id="tocSpatchpromptrequestbody"></a>
<a id="tocspatchpromptrequestbody"></a>

```json
{
  "description": "string",
  "metadata": {}
}
```

Fields to update on a prompt. Omit a field to leave it unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|New description for the prompt (null clears the description)|
|metadata|object|false|none|New metadata object for the prompt (replaces the existing metadata as a whole)|

<h2 id="tocS_PatchPromptResponseBody">PatchPromptResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchpromptresponsebody"></a>
<a id="schema_PatchPromptResponseBody"></a>
<a id="tocSpatchpromptresponsebody"></a>
<a id="tocspatchpromptresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "source_prompt_id": "string",
    "metadata": {},
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Prompt](#schemaprompt)|true|none|none|

<h2 id="tocS_PhoenixAssistantMessageMetadata">PhoenixAssistantMessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaphoenixassistantmessagemetadata"></a>
<a id="schema_PhoenixAssistantMessageMetadata"></a>
<a id="tocSphoenixassistantmessagemetadata"></a>
<a id="tocsphoenixassistantmessagemetadata"></a>

```json
{
  "type": "assistant",
  "sessionId": "string",
  "turnTraceContext": {
    "traceId": "string",
    "rootSpanId": "string",
    "startedAt": "1970-01-01T00:00:00Z"
  },
  "usage": {
    "tokens": {
      "prompt": 0,
      "completion": 0,
      "total": 0
    },
    "promptDetails": {
      "cacheRead": 0,
      "cacheWrite": 0
    }
  },
  "interrupted": false
}
```

The ``phoenix`` metadata namespace of an assistant message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|sessionId|string|true|none|none|
|turnTraceContext|[TurnTraceContext](#schematurntracecontext) \| null|false|none|none|
|usage|[AssistantMessageMetadataUsage](#schemaassistantmessagemetadatausage) \| null|false|none|none|
|interrupted|boolean|false|none|none|

<h2 id="tocS_PhoenixUIMessage">PhoenixUIMessage</h2>
<!-- backwards compatibility -->
<a id="schemaphoenixuimessage"></a>
<a id="schema_PhoenixUIMessage"></a>
<a id="tocSphoenixuimessage"></a>
<a id="tocsphoenixuimessage"></a>

```json
{
  "id": "string",
  "role": "system",
  "metadata": {
    "phoenix": {
      "type": "assistant",
      "sessionId": "string",
      "turnTraceContext": {
        "traceId": "string",
        "rootSpanId": "string",
        "startedAt": "1970-01-01T00:00:00Z"
      },
      "usage": {
        "tokens": {
          "prompt": 0,
          "completion": 0,
          "total": 0
        },
        "promptDetails": {
          "cacheRead": 0,
          "cacheWrite": 0
        }
      },
      "interrupted": false
    },
    "pydantic_ai": {
      "timestamp": "1970-01-01T00:00:00Z"
    }
  },
  "parts": [
    {
      "type": "text",
      "text": "string",
      "state": "streaming",
      "providerMetadata": {
        "property1": {},
        "property2": {}
      }
    }
  ]
}
```

``UIMessage`` with metadata narrowed to the Phoenix wire shapes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|role|string|true|none|none|
|metadata|[MessageMetadata](#schemamessagemetadata) \| null|false|none|none|
|parts|[[TextUIPart](#schematextuipart) \| [ReasoningUIPart](#schemareasoninguipart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolInputStreamingPart](#schemaphoenix__db__types__data_stream_protocol__request_types__toolinputstreamingpart) \| [ToolInputAvailablePart](#schematoolinputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart) \| [ToolApprovalRequestedPart](#schematoolapprovalrequestedpart) \| [ToolApprovalRespondedPart](#schematoolapprovalrespondedpart) \| [ToolOutputDeniedPart](#schematooloutputdeniedpart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolInputStreamingPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictoolinputstreamingpart) \| [DynamicToolInputAvailablePart](#schemadynamictoolinputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart) \| [DynamicToolApprovalRequestedPart](#schemadynamictoolapprovalrequestedpart) \| [DynamicToolApprovalRespondedPart](#schemadynamictoolapprovalrespondedpart) \| [DynamicToolOutputDeniedPart](#schemadynamictooloutputdeniedpart) \| [SourceUrlUIPart](#schemasourceurluipart) \| [SourceDocumentUIPart](#schemasourcedocumentuipart) \| [FileUIPart](#schemafileuipart) \| [DataUIPart](#schemadatauipart) \| [StepStartUIPart](#schemastepstartuipart)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|system|
|role|user|
|role|assistant|

<h2 id="tocS_PhoenixUserMessageMetadata">PhoenixUserMessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaphoenixusermessagemetadata"></a>
<a id="schema_PhoenixUserMessageMetadata"></a>
<a id="tocSphoenixusermessagemetadata"></a>
<a id="tocsphoenixusermessagemetadata"></a>

```json
{
  "type": "user",
  "currentDateTime": "string",
  "timeZone": "string",
  "isCompactionMessage": false,
  "uiContexts": {
    "project": {
      "type": "project",
      "projectNodeId": "string",
      "spanFilter": "string"
    },
    "trace": {
      "type": "trace",
      "projectNodeId": "string",
      "otelTraceId": "string"
    },
    "session": {
      "type": "session",
      "projectNodeId": "string",
      "sessionNodeId": "string"
    },
    "span": {
      "type": "span",
      "projectNodeId": "string",
      "spanNodeId": "string",
      "otelSpanId": "string"
    },
    "prompt": {
      "type": "prompt",
      "promptNodeId": "string"
    },
    "promptVersion": {
      "type": "prompt_version",
      "promptNodeId": "string",
      "promptVersionNodeId": "string"
    },
    "dataset": {
      "type": "dataset",
      "datasetNodeId": "string",
      "datasetVersionNodeId": "string"
    },
    "playground": {
      "type": "playground",
      "recordExperiments": true,
      "repetitions": 1,
      "nextExperimentScaffold": {
        "name": "string",
        "description": "string",
        "hasMetadata": false
      },
      "instances": [
        {
          "instanceId": 0,
          "model": {
            "type": "builtin",
            "provider": "string",
            "modelName": "string"
          },
          "experimentId": "string"
        }
      ],
      "evaluators": [
        {
          "datasetEvaluatorId": "string",
          "name": "string",
          "kind": "LLM",
          "isBuiltin": true,
          "isApplied": true
        }
      ]
    },
    "codeEvaluator": {
      "type": "code_evaluator",
      "evaluatorNodeId": "string"
    },
    "llmEvaluator": {
      "type": "llm_evaluator",
      "evaluatorNodeId": "string"
    }
  },
  "editPermission": "manual"
}
```

The ``phoenix`` metadata namespace the browser attaches to outgoing
user messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|currentDateTime|string|true|none|none|
|timeZone|string|true|none|none|
|isCompactionMessage|boolean|false|none|none|
|uiContexts|[UIContexts](#schemauicontexts) \| null|false|none|none|
|editPermission|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|editPermission|manual|
|editPermission|bypass|

<h2 id="tocS_PlaygroundBuiltinModelUIContext">PlaygroundBuiltinModelUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaplaygroundbuiltinmodeluicontext"></a>
<a id="schema_PlaygroundBuiltinModelUIContext"></a>
<a id="tocSplaygroundbuiltinmodeluicontext"></a>
<a id="tocsplaygroundbuiltinmodeluicontext"></a>

```json
{
  "type": "builtin",
  "provider": "string",
  "modelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|provider|string|true|none|none|
|modelName|string|true|none|none|

<h2 id="tocS_PlaygroundCustomProviderModelUIContext">PlaygroundCustomProviderModelUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaplaygroundcustomprovidermodeluicontext"></a>
<a id="schema_PlaygroundCustomProviderModelUIContext"></a>
<a id="tocSplaygroundcustomprovidermodeluicontext"></a>
<a id="tocsplaygroundcustomprovidermodeluicontext"></a>

```json
{
  "type": "custom",
  "customProviderId": "string",
  "customProviderName": "string",
  "provider": "string",
  "modelName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|customProviderId|string|true|none|none|
|customProviderName|string|true|none|none|
|provider|string|true|none|none|
|modelName|string|true|none|none|

<h2 id="tocS_PlaygroundEvaluatorUIContext">PlaygroundEvaluatorUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaplaygroundevaluatoruicontext"></a>
<a id="schema_PlaygroundEvaluatorUIContext"></a>
<a id="tocSplaygroundevaluatoruicontext"></a>
<a id="tocsplaygroundevaluatoruicontext"></a>

```json
{
  "datasetEvaluatorId": "string",
  "name": "string",
  "kind": "LLM",
  "isBuiltin": true,
  "isApplied": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetEvaluatorId|string|true|none|none|
|name|string|true|none|none|
|kind|string|true|none|none|
|isBuiltin|boolean|true|none|none|
|isApplied|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|LLM|
|kind|CODE|
|kind|BUILTIN|

<h2 id="tocS_PlaygroundExperimentScaffoldUIContext">PlaygroundExperimentScaffoldUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaplaygroundexperimentscaffolduicontext"></a>
<a id="schema_PlaygroundExperimentScaffoldUIContext"></a>
<a id="tocSplaygroundexperimentscaffolduicontext"></a>
<a id="tocsplaygroundexperimentscaffolduicontext"></a>

```json
{
  "name": "string",
  "description": "string",
  "hasMetadata": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|hasMetadata|boolean|false|none|none|

<h2 id="tocS_PlaygroundInstanceUIContext">PlaygroundInstanceUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaplaygroundinstanceuicontext"></a>
<a id="schema_PlaygroundInstanceUIContext"></a>
<a id="tocSplaygroundinstanceuicontext"></a>
<a id="tocsplaygroundinstanceuicontext"></a>

```json
{
  "instanceId": 0,
  "model": {
    "type": "builtin",
    "provider": "string",
    "modelName": "string"
  },
  "experimentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceId|integer|true|none|none|
|model|[PlaygroundBuiltinModelUIContext](#schemaplaygroundbuiltinmodeluicontext) \| [PlaygroundCustomProviderModelUIContext](#schemaplaygroundcustomprovidermodeluicontext) \| null|false|none|none|
|experimentId|string \| null|false|none|none|

<h2 id="tocS_PlaygroundUIContext">PlaygroundUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaplaygrounduicontext"></a>
<a id="schema_PlaygroundUIContext"></a>
<a id="tocSplaygrounduicontext"></a>
<a id="tocsplaygrounduicontext"></a>

```json
{
  "type": "playground",
  "recordExperiments": true,
  "repetitions": 1,
  "nextExperimentScaffold": {
    "name": "string",
    "description": "string",
    "hasMetadata": false
  },
  "instances": [
    {
      "instanceId": 0,
      "model": {
        "type": "builtin",
        "provider": "string",
        "modelName": "string"
      },
      "experimentId": "string"
    }
  ],
  "evaluators": [
    {
      "datasetEvaluatorId": "string",
      "name": "string",
      "kind": "LLM",
      "isBuiltin": true,
      "isApplied": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|recordExperiments|boolean|false|none|none|
|repetitions|integer|false|none|none|
|nextExperimentScaffold|[PlaygroundExperimentScaffoldUIContext](#schemaplaygroundexperimentscaffolduicontext) \| null|false|none|none|
|instances|[[PlaygroundInstanceUIContext](#schemaplaygroundinstanceuicontext)]|false|none|none|
|evaluators|[[PlaygroundEvaluatorUIContext](#schemaplaygroundevaluatoruicontext)]|false|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "name": "string",
  "description": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|id|string|true|none|none|

<h2 id="tocS_ProjectRetentionPolicyData">ProjectRetentionPolicyData</h2>
<!-- backwards compatibility -->
<a id="schemaprojectretentionpolicydata"></a>
<a id="schema_ProjectRetentionPolicyData"></a>
<a id="tocSprojectretentionpolicydata"></a>
<a id="tocsprojectretentionpolicydata"></a>

```json
{
  "project_id": "string",
  "policy_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|true|none|none|
|policy_id|string \| null|true|none|The retention policy the project now uses, or null when the project falls back to the default policy.|

<h2 id="tocS_ProjectUIContext">ProjectUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaprojectuicontext"></a>
<a id="schema_ProjectUIContext"></a>
<a id="tocSprojectuicontext"></a>
<a id="tocsprojectuicontext"></a>

```json
{
  "type": "project",
  "projectNodeId": "string",
  "spanFilter": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|projectNodeId|string|true|none|none|
|spanFilter|string \| null|false|none|none|

<h2 id="tocS_Prompt">Prompt</h2>
<!-- backwards compatibility -->
<a id="schemaprompt"></a>
<a id="schema_Prompt"></a>
<a id="tocSprompt"></a>
<a id="tocsprompt"></a>

```json
{
  "name": "string",
  "description": "string",
  "source_prompt_id": "string",
  "metadata": {},
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Identifier](#schemaidentifier)|true|none|none|
|description|string \| null|false|none|none|
|source_prompt_id|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|id|string|true|none|none|

<h2 id="tocS_PromptAnthropicInvocationParameters">PromptAnthropicInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptanthropicinvocationparameters"></a>
<a id="schema_PromptAnthropicInvocationParameters"></a>
<a id="tocSpromptanthropicinvocationparameters"></a>
<a id="tocspromptanthropicinvocationparameters"></a>

```json
{
  "type": "anthropic",
  "anthropic": {
    "max_tokens": 0,
    "temperature": 0,
    "top_p": 0,
    "stop_sequences": [
      "string"
    ],
    "output_config": {
      "effort": "low"
    },
    "thinking": {
      "type": "disabled"
    },
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|anthropic|[PromptAnthropicInvocationParametersContent](#schemapromptanthropicinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptAnthropicInvocationParametersContent">PromptAnthropicInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptanthropicinvocationparameterscontent"></a>
<a id="schema_PromptAnthropicInvocationParametersContent"></a>
<a id="tocSpromptanthropicinvocationparameterscontent"></a>
<a id="tocspromptanthropicinvocationparameterscontent"></a>

```json
{
  "max_tokens": 0,
  "temperature": 0,
  "top_p": 0,
  "stop_sequences": [
    "string"
  ],
  "output_config": {
    "effort": "low"
  },
  "thinking": {
    "type": "disabled"
  },
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_tokens|integer|true|none|none|
|temperature|number|false|none|none|
|top_p|number|false|none|none|
|stop_sequences|[string]|false|none|none|
|output_config|[PromptAnthropicOutputConfig](#schemapromptanthropicoutputconfig)|false|none|none|
|thinking|[PromptAnthropicThinkingConfigDisabled](#schemapromptanthropicthinkingconfigdisabled) \| [PromptAnthropicThinkingConfigEnabled](#schemapromptanthropicthinkingconfigenabled) \| [PromptAnthropicThinkingConfigAdaptive](#schemapromptanthropicthinkingconfigadaptive)|false|none|none|
|extra_body|object|false|none|none|

<h2 id="tocS_PromptAnthropicOutputConfig">PromptAnthropicOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemapromptanthropicoutputconfig"></a>
<a id="schema_PromptAnthropicOutputConfig"></a>
<a id="tocSpromptanthropicoutputconfig"></a>
<a id="tocspromptanthropicoutputconfig"></a>

```json
{
  "effort": "low"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|effort|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|effort|low|
|effort|medium|
|effort|high|
|effort|xhigh|
|effort|max|

<h2 id="tocS_PromptAnthropicThinkingConfigAdaptive">PromptAnthropicThinkingConfigAdaptive</h2>
<!-- backwards compatibility -->
<a id="schemapromptanthropicthinkingconfigadaptive"></a>
<a id="schema_PromptAnthropicThinkingConfigAdaptive"></a>
<a id="tocSpromptanthropicthinkingconfigadaptive"></a>
<a id="tocspromptanthropicthinkingconfigadaptive"></a>

```json
{
  "type": "adaptive",
  "display": "summarized"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|display|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|display|summarized|
|display|omitted|

<h2 id="tocS_PromptAnthropicThinkingConfigDisabled">PromptAnthropicThinkingConfigDisabled</h2>
<!-- backwards compatibility -->
<a id="schemapromptanthropicthinkingconfigdisabled"></a>
<a id="schema_PromptAnthropicThinkingConfigDisabled"></a>
<a id="tocSpromptanthropicthinkingconfigdisabled"></a>
<a id="tocspromptanthropicthinkingconfigdisabled"></a>

```json
{
  "type": "disabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_PromptAnthropicThinkingConfigEnabled">PromptAnthropicThinkingConfigEnabled</h2>
<!-- backwards compatibility -->
<a id="schemapromptanthropicthinkingconfigenabled"></a>
<a id="schema_PromptAnthropicThinkingConfigEnabled"></a>
<a id="tocSpromptanthropicthinkingconfigenabled"></a>
<a id="tocspromptanthropicthinkingconfigenabled"></a>

```json
{
  "type": "enabled",
  "budget_tokens": 1024,
  "display": "summarized"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|budget_tokens|integer|true|none|none|
|display|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|display|summarized|
|display|omitted|

<h2 id="tocS_PromptAwsInvocationParameters">PromptAwsInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptawsinvocationparameters"></a>
<a id="schema_PromptAwsInvocationParameters"></a>
<a id="tocSpromptawsinvocationparameters"></a>
<a id="tocspromptawsinvocationparameters"></a>

```json
{
  "type": "aws",
  "aws": {
    "max_tokens": 0,
    "temperature": 0,
    "top_p": 0,
    "stop_sequences": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|aws|[PromptAwsInvocationParametersContent](#schemapromptawsinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptAwsInvocationParametersContent">PromptAwsInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptawsinvocationparameterscontent"></a>
<a id="schema_PromptAwsInvocationParametersContent"></a>
<a id="tocSpromptawsinvocationparameterscontent"></a>
<a id="tocspromptawsinvocationparameterscontent"></a>

```json
{
  "max_tokens": 0,
  "temperature": 0,
  "top_p": 0,
  "stop_sequences": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_tokens|integer|false|none|none|
|temperature|number|false|none|none|
|top_p|number|false|none|none|
|stop_sequences|[string]|false|none|none|

<h2 id="tocS_PromptAzureOpenAIInvocationParameters">PromptAzureOpenAIInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptazureopenaiinvocationparameters"></a>
<a id="schema_PromptAzureOpenAIInvocationParameters"></a>
<a id="tocSpromptazureopenaiinvocationparameters"></a>
<a id="tocspromptazureopenaiinvocationparameters"></a>

```json
{
  "type": "azure_openai",
  "azure_openai": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|azure_openai|[PromptAzureOpenAIInvocationParametersContent](#schemapromptazureopenaiinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptAzureOpenAIInvocationParametersContent">PromptAzureOpenAIInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptazureopenaiinvocationparameterscontent"></a>
<a id="schema_PromptAzureOpenAIInvocationParametersContent"></a>
<a id="tocSpromptazureopenaiinvocationparameterscontent"></a>
<a id="tocspromptazureopenaiinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptCerebrasInvocationParameters">PromptCerebrasInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptcerebrasinvocationparameters"></a>
<a id="schema_PromptCerebrasInvocationParameters"></a>
<a id="tocSpromptcerebrasinvocationparameters"></a>
<a id="tocspromptcerebrasinvocationparameters"></a>

```json
{
  "type": "cerebras",
  "cerebras": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|cerebras|[PromptCerebrasInvocationParametersContent](#schemapromptcerebrasinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptCerebrasInvocationParametersContent">PromptCerebrasInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptcerebrasinvocationparameterscontent"></a>
<a id="schema_PromptCerebrasInvocationParametersContent"></a>
<a id="tocSpromptcerebrasinvocationparameterscontent"></a>
<a id="tocspromptcerebrasinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptChatTemplate">PromptChatTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapromptchattemplate"></a>
<a id="schema_PromptChatTemplate"></a>
<a id="tocSpromptchattemplate"></a>
<a id="tocspromptchattemplate"></a>

```json
{
  "type": "chat",
  "messages": [
    {
      "role": "user",
      "content": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|messages|[[PromptMessage](#schemapromptmessage)]|true|none|none|

<h2 id="tocS_PromptData">PromptData</h2>
<!-- backwards compatibility -->
<a id="schemapromptdata"></a>
<a id="schema_PromptData"></a>
<a id="tocSpromptdata"></a>
<a id="tocspromptdata"></a>

```json
{
  "name": "string",
  "description": "string",
  "source_prompt_id": "string",
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Identifier](#schemaidentifier)|true|none|none|
|description|string \| null|false|none|none|
|source_prompt_id|string \| null|false|none|none|
|metadata|object \| null|false|none|none|

<h2 id="tocS_PromptDeepSeekInvocationParameters">PromptDeepSeekInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptdeepseekinvocationparameters"></a>
<a id="schema_PromptDeepSeekInvocationParameters"></a>
<a id="tocSpromptdeepseekinvocationparameters"></a>
<a id="tocspromptdeepseekinvocationparameters"></a>

```json
{
  "type": "deepseek",
  "deepseek": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|deepseek|[PromptDeepSeekInvocationParametersContent](#schemapromptdeepseekinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptDeepSeekInvocationParametersContent">PromptDeepSeekInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptdeepseekinvocationparameterscontent"></a>
<a id="schema_PromptDeepSeekInvocationParametersContent"></a>
<a id="tocSpromptdeepseekinvocationparameterscontent"></a>
<a id="tocspromptdeepseekinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptFireworksInvocationParameters">PromptFireworksInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptfireworksinvocationparameters"></a>
<a id="schema_PromptFireworksInvocationParameters"></a>
<a id="tocSpromptfireworksinvocationparameters"></a>
<a id="tocspromptfireworksinvocationparameters"></a>

```json
{
  "type": "fireworks",
  "fireworks": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|fireworks|[PromptFireworksInvocationParametersContent](#schemapromptfireworksinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptFireworksInvocationParametersContent">PromptFireworksInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptfireworksinvocationparameterscontent"></a>
<a id="schema_PromptFireworksInvocationParametersContent"></a>
<a id="tocSpromptfireworksinvocationparameterscontent"></a>
<a id="tocspromptfireworksinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptGoogleInvocationParameters">PromptGoogleInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptgoogleinvocationparameters"></a>
<a id="schema_PromptGoogleInvocationParameters"></a>
<a id="tocSpromptgoogleinvocationparameters"></a>
<a id="tocspromptgoogleinvocationparameters"></a>

```json
{
  "type": "google",
  "google": {
    "temperature": 0,
    "max_output_tokens": 0,
    "stop_sequences": [
      "string"
    ],
    "presence_penalty": 0,
    "frequency_penalty": 0,
    "top_p": 0,
    "top_k": 0,
    "thinking_config": {
      "thinking_budget": 0,
      "thinking_level": "minimal",
      "include_thoughts": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|google|[PromptGoogleInvocationParametersContent](#schemapromptgoogleinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptGoogleInvocationParametersContent">PromptGoogleInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptgoogleinvocationparameterscontent"></a>
<a id="schema_PromptGoogleInvocationParametersContent"></a>
<a id="tocSpromptgoogleinvocationparameterscontent"></a>
<a id="tocspromptgoogleinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_output_tokens": 0,
  "stop_sequences": [
    "string"
  ],
  "presence_penalty": 0,
  "frequency_penalty": 0,
  "top_p": 0,
  "top_k": 0,
  "thinking_config": {
    "thinking_budget": 0,
    "thinking_level": "minimal",
    "include_thoughts": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_output_tokens|integer|false|none|none|
|stop_sequences|[string]|false|none|none|
|presence_penalty|number|false|none|none|
|frequency_penalty|number|false|none|none|
|top_p|number|false|none|none|
|top_k|integer|false|none|none|
|thinking_config|[PromptGoogleThinkingConfig](#schemapromptgooglethinkingconfig)|false|none|none|

<h2 id="tocS_PromptGoogleThinkingConfig">PromptGoogleThinkingConfig</h2>
<!-- backwards compatibility -->
<a id="schemapromptgooglethinkingconfig"></a>
<a id="schema_PromptGoogleThinkingConfig"></a>
<a id="tocSpromptgooglethinkingconfig"></a>
<a id="tocspromptgooglethinkingconfig"></a>

```json
{
  "thinking_budget": 0,
  "thinking_level": "minimal",
  "include_thoughts": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thinking_budget|integer|false|none|none|
|thinking_level|string|false|none|none|
|include_thoughts|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|thinking_level|minimal|
|thinking_level|low|
|thinking_level|medium|
|thinking_level|high|

<h2 id="tocS_PromptGroqInvocationParameters">PromptGroqInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptgroqinvocationparameters"></a>
<a id="schema_PromptGroqInvocationParameters"></a>
<a id="tocSpromptgroqinvocationparameters"></a>
<a id="tocspromptgroqinvocationparameters"></a>

```json
{
  "type": "groq",
  "groq": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|groq|[PromptGroqInvocationParametersContent](#schemapromptgroqinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptGroqInvocationParametersContent">PromptGroqInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptgroqinvocationparameterscontent"></a>
<a id="schema_PromptGroqInvocationParametersContent"></a>
<a id="tocSpromptgroqinvocationparameterscontent"></a>
<a id="tocspromptgroqinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptMessage">PromptMessage</h2>
<!-- backwards compatibility -->
<a id="schemapromptmessage"></a>
<a id="schema_PromptMessage"></a>
<a id="tocSpromptmessage"></a>
<a id="tocspromptmessage"></a>

```json
{
  "role": "user",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|content|string \| [[TextContentPart](#schematextcontentpart) \| [ToolCallContentPart](#schematoolcallcontentpart) \| [ToolResultContentPart](#schematoolresultcontentpart)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|user|
|role|assistant|
|role|model|
|role|ai|
|role|tool|
|role|system|
|role|developer|

<h2 id="tocS_PromptMetaInvocationParameters">PromptMetaInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptmetainvocationparameters"></a>
<a id="schema_PromptMetaInvocationParameters"></a>
<a id="tocSpromptmetainvocationparameters"></a>
<a id="tocspromptmetainvocationparameters"></a>

```json
{
  "type": "meta",
  "meta": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|meta|[PromptMetaInvocationParametersContent](#schemapromptmetainvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptMetaInvocationParametersContent">PromptMetaInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptmetainvocationparameterscontent"></a>
<a id="schema_PromptMetaInvocationParametersContent"></a>
<a id="tocSpromptmetainvocationparameterscontent"></a>
<a id="tocspromptmetainvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptMoonshotInvocationParameters">PromptMoonshotInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptmoonshotinvocationparameters"></a>
<a id="schema_PromptMoonshotInvocationParameters"></a>
<a id="tocSpromptmoonshotinvocationparameters"></a>
<a id="tocspromptmoonshotinvocationparameters"></a>

```json
{
  "type": "moonshot",
  "moonshot": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|moonshot|[PromptMoonshotInvocationParametersContent](#schemapromptmoonshotinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptMoonshotInvocationParametersContent">PromptMoonshotInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptmoonshotinvocationparameterscontent"></a>
<a id="schema_PromptMoonshotInvocationParametersContent"></a>
<a id="tocSpromptmoonshotinvocationparameterscontent"></a>
<a id="tocspromptmoonshotinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptOllamaInvocationParameters">PromptOllamaInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptollamainvocationparameters"></a>
<a id="schema_PromptOllamaInvocationParameters"></a>
<a id="tocSpromptollamainvocationparameters"></a>
<a id="tocspromptollamainvocationparameters"></a>

```json
{
  "type": "ollama",
  "ollama": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|ollama|[PromptOllamaInvocationParametersContent](#schemapromptollamainvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptOllamaInvocationParametersContent">PromptOllamaInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptollamainvocationparameterscontent"></a>
<a id="schema_PromptOllamaInvocationParametersContent"></a>
<a id="tocSpromptollamainvocationparameterscontent"></a>
<a id="tocspromptollamainvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptOpenAIInvocationParameters">PromptOpenAIInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptopenaiinvocationparameters"></a>
<a id="schema_PromptOpenAIInvocationParameters"></a>
<a id="tocSpromptopenaiinvocationparameters"></a>
<a id="tocspromptopenaiinvocationparameters"></a>

```json
{
  "type": "openai",
  "openai": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|openai|[PromptOpenAIInvocationParametersContent](#schemapromptopenaiinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptOpenAIInvocationParametersContent">PromptOpenAIInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptopenaiinvocationparameterscontent"></a>
<a id="schema_PromptOpenAIInvocationParametersContent"></a>
<a id="tocSpromptopenaiinvocationparameterscontent"></a>
<a id="tocspromptopenaiinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptPerplexityInvocationParameters">PromptPerplexityInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptperplexityinvocationparameters"></a>
<a id="schema_PromptPerplexityInvocationParameters"></a>
<a id="tocSpromptperplexityinvocationparameters"></a>
<a id="tocspromptperplexityinvocationparameters"></a>

```json
{
  "type": "perplexity",
  "perplexity": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|perplexity|[PromptPerplexityInvocationParametersContent](#schemapromptperplexityinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptPerplexityInvocationParametersContent">PromptPerplexityInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptperplexityinvocationparameterscontent"></a>
<a id="schema_PromptPerplexityInvocationParametersContent"></a>
<a id="tocSpromptperplexityinvocationparameterscontent"></a>
<a id="tocspromptperplexityinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptResponseFormatJSONSchema">PromptResponseFormatJSONSchema</h2>
<!-- backwards compatibility -->
<a id="schemapromptresponseformatjsonschema"></a>
<a id="schema_PromptResponseFormatJSONSchema"></a>
<a id="tocSpromptresponseformatjsonschema"></a>
<a id="tocspromptresponseformatjsonschema"></a>

```json
{
  "type": "json_schema",
  "json_schema": {
    "name": "string",
    "description": "string",
    "schema": {},
    "strict": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|json_schema|[PromptResponseFormatJSONSchemaDefinition](#schemapromptresponseformatjsonschemadefinition)|true|none|none|

<h2 id="tocS_PromptResponseFormatJSONSchemaDefinition">PromptResponseFormatJSONSchemaDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapromptresponseformatjsonschemadefinition"></a>
<a id="schema_PromptResponseFormatJSONSchemaDefinition"></a>
<a id="tocSpromptresponseformatjsonschemadefinition"></a>
<a id="tocspromptresponseformatjsonschemadefinition"></a>

```json
{
  "name": "string",
  "description": "string",
  "schema": {},
  "strict": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|schema|object|false|none|none|
|strict|boolean|false|none|none|

<h2 id="tocS_PromptStringTemplate">PromptStringTemplate</h2>
<!-- backwards compatibility -->
<a id="schemapromptstringtemplate"></a>
<a id="schema_PromptStringTemplate"></a>
<a id="tocSpromptstringtemplate"></a>
<a id="tocspromptstringtemplate"></a>

```json
{
  "type": "string",
  "template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|template|string|true|none|none|

<h2 id="tocS_PromptTemplateFormat">PromptTemplateFormat</h2>
<!-- backwards compatibility -->
<a id="schemaprompttemplateformat"></a>
<a id="schema_PromptTemplateFormat"></a>
<a id="tocSprompttemplateformat"></a>
<a id="tocsprompttemplateformat"></a>

```json
"MUSTACHE"
```

<h2 id="tocS_PromptTemplateType">PromptTemplateType</h2>
<!-- backwards compatibility -->
<a id="schemaprompttemplatetype"></a>
<a id="schema_PromptTemplateType"></a>
<a id="tocSprompttemplatetype"></a>
<a id="tocsprompttemplatetype"></a>

```json
"STR"
```

<h2 id="tocS_PromptTogetherInvocationParameters">PromptTogetherInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemaprompttogetherinvocationparameters"></a>
<a id="schema_PromptTogetherInvocationParameters"></a>
<a id="tocSprompttogetherinvocationparameters"></a>
<a id="tocsprompttogetherinvocationparameters"></a>

```json
{
  "type": "together",
  "together": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|together|[PromptTogetherInvocationParametersContent](#schemaprompttogetherinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptTogetherInvocationParametersContent">PromptTogetherInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemaprompttogetherinvocationparameterscontent"></a>
<a id="schema_PromptTogetherInvocationParametersContent"></a>
<a id="tocSprompttogetherinvocationparameterscontent"></a>
<a id="tocsprompttogetherinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptToolChoiceNone">PromptToolChoiceNone</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolchoicenone"></a>
<a id="schema_PromptToolChoiceNone"></a>
<a id="tocSprompttoolchoicenone"></a>
<a id="tocsprompttoolchoicenone"></a>

```json
{
  "type": "none"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_PromptToolChoiceOneOrMore">PromptToolChoiceOneOrMore</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolchoiceoneormore"></a>
<a id="schema_PromptToolChoiceOneOrMore"></a>
<a id="tocSprompttoolchoiceoneormore"></a>
<a id="tocsprompttoolchoiceoneormore"></a>

```json
{
  "type": "one_or_more"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_PromptToolChoiceSpecificFunctionTool">PromptToolChoiceSpecificFunctionTool</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolchoicespecificfunctiontool"></a>
<a id="schema_PromptToolChoiceSpecificFunctionTool"></a>
<a id="tocSprompttoolchoicespecificfunctiontool"></a>
<a id="tocsprompttoolchoicespecificfunctiontool"></a>

```json
{
  "type": "specific_function",
  "function_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|function_name|string|true|none|none|

<h2 id="tocS_PromptToolChoiceZeroOrMore">PromptToolChoiceZeroOrMore</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolchoicezeroormore"></a>
<a id="schema_PromptToolChoiceZeroOrMore"></a>
<a id="tocSprompttoolchoicezeroormore"></a>
<a id="tocsprompttoolchoicezeroormore"></a>

```json
{
  "type": "zero_or_more"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

<h2 id="tocS_PromptToolFunction">PromptToolFunction</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolfunction"></a>
<a id="schema_PromptToolFunction"></a>
<a id="tocSprompttoolfunction"></a>
<a id="tocsprompttoolfunction"></a>

```json
{
  "type": "function",
  "function": {
    "name": "string",
    "description": "string",
    "parameters": {},
    "strict": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|function|[PromptToolFunctionDefinition](#schemaprompttoolfunctiondefinition)|true|none|none|

<h2 id="tocS_PromptToolFunctionDefinition">PromptToolFunctionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolfunctiondefinition"></a>
<a id="schema_PromptToolFunctionDefinition"></a>
<a id="tocSprompttoolfunctiondefinition"></a>
<a id="tocsprompttoolfunctiondefinition"></a>

```json
{
  "name": "string",
  "description": "string",
  "parameters": {},
  "strict": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|parameters|object|false|none|none|
|strict|boolean|false|none|none|

<h2 id="tocS_PromptToolRaw">PromptToolRaw</h2>
<!-- backwards compatibility -->
<a id="schemaprompttoolraw"></a>
<a id="schema_PromptToolRaw"></a>
<a id="tocSprompttoolraw"></a>
<a id="tocsprompttoolraw"></a>

```json
{
  "type": "raw",
  "raw": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|raw|object|true|none|none|

<h2 id="tocS_PromptTools">PromptTools</h2>
<!-- backwards compatibility -->
<a id="schemaprompttools"></a>
<a id="schema_PromptTools"></a>
<a id="tocSprompttools"></a>
<a id="tocsprompttools"></a>

```json
{
  "type": "tools",
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "string",
        "description": "string",
        "parameters": {},
        "strict": true
      }
    }
  ],
  "tool_choice": {
    "type": "none"
  },
  "disable_parallel_tool_calls": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|tools|[[PromptToolFunction](#schemaprompttoolfunction) \| [PromptToolRaw](#schemaprompttoolraw)]|true|none|none|
|tool_choice|[PromptToolChoiceNone](#schemaprompttoolchoicenone) \| [PromptToolChoiceZeroOrMore](#schemaprompttoolchoicezeroormore) \| [PromptToolChoiceOneOrMore](#schemaprompttoolchoiceoneormore) \| [PromptToolChoiceSpecificFunctionTool](#schemaprompttoolchoicespecificfunctiontool)|false|none|none|
|disable_parallel_tool_calls|boolean|false|none|none|

<h2 id="tocS_PromptUIContext">PromptUIContext</h2>
<!-- backwards compatibility -->
<a id="schemapromptuicontext"></a>
<a id="schema_PromptUIContext"></a>
<a id="tocSpromptuicontext"></a>
<a id="tocspromptuicontext"></a>

```json
{
  "type": "prompt",
  "promptNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|promptNodeId|string|true|none|none|

<h2 id="tocS_PromptVersion">PromptVersion</h2>
<!-- backwards compatibility -->
<a id="schemapromptversion"></a>
<a id="schema_PromptVersion"></a>
<a id="tocSpromptversion"></a>
<a id="tocspromptversion"></a>

```json
{
  "description": "string",
  "metadata": {},
  "model_provider": "OPENAI",
  "model_name": "string",
  "template": {
    "type": "chat",
    "messages": [
      {
        "role": "user",
        "content": "string"
      }
    ]
  },
  "template_type": "STR",
  "template_format": "MUSTACHE",
  "invocation_parameters": {
    "type": "openai",
    "openai": {
      "temperature": 0,
      "max_tokens": 0,
      "max_completion_tokens": 0,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "top_p": 0,
      "seed": 0,
      "stop": [
        "string"
      ],
      "reasoning_effort": "none",
      "extra_body": {}
    }
  },
  "tools": {
    "type": "tools",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "string",
          "parameters": {},
          "strict": true
        }
      }
    ],
    "tool_choice": {
      "type": "none"
    },
    "disable_parallel_tool_calls": true
  },
  "response_format": {
    "type": "json_schema",
    "json_schema": {
      "name": "string",
      "description": "string",
      "schema": {},
      "strict": true
    }
  },
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|metadata|object|false|none|Arbitrary JSON metadata for the prompt version.|
|model_provider|[ModelProvider](#schemamodelprovider)|true|none|none|
|model_name|string|true|none|none|
|template|[PromptChatTemplate](#schemapromptchattemplate) \| [PromptStringTemplate](#schemapromptstringtemplate)|true|none|none|
|template_type|[PromptTemplateType](#schemaprompttemplatetype)|true|none|none|
|template_format|[PromptTemplateFormat](#schemaprompttemplateformat)|true|none|none|
|invocation_parameters|[PromptOpenAIInvocationParameters](#schemapromptopenaiinvocationparameters) \| [PromptAzureOpenAIInvocationParameters](#schemapromptazureopenaiinvocationparameters) \| [PromptAnthropicInvocationParameters](#schemapromptanthropicinvocationparameters) \| [PromptGoogleInvocationParameters](#schemapromptgoogleinvocationparameters) \| [PromptDeepSeekInvocationParameters](#schemapromptdeepseekinvocationparameters) \| [PromptXAIInvocationParameters](#schemapromptxaiinvocationparameters) \| [PromptOllamaInvocationParameters](#schemapromptollamainvocationparameters) \| [PromptAwsInvocationParameters](#schemapromptawsinvocationparameters) \| [PromptCerebrasInvocationParameters](#schemapromptcerebrasinvocationparameters) \| [PromptFireworksInvocationParameters](#schemapromptfireworksinvocationparameters) \| [PromptGroqInvocationParameters](#schemapromptgroqinvocationparameters) \| [PromptMoonshotInvocationParameters](#schemapromptmoonshotinvocationparameters) \| [PromptPerplexityInvocationParameters](#schemapromptperplexityinvocationparameters) \| [PromptTogetherInvocationParameters](#schemaprompttogetherinvocationparameters) \| [PromptZAIInvocationParameters](#schemapromptzaiinvocationparameters) \| [PromptMetaInvocationParameters](#schemapromptmetainvocationparameters)|true|none|none|
|tools|[PromptTools](#schemaprompttools) \| null|false|none|none|
|response_format|[PromptResponseFormatJSONSchema](#schemapromptresponseformatjsonschema) \| null|false|none|none|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|The creation timestamp of the prompt version.|

#### Enumerated Values

|Property|Value|
|---|---|
|model_provider|OPENAI|
|model_provider|AZURE_OPENAI|
|model_provider|ANTHROPIC|
|model_provider|GOOGLE|
|model_provider|DEEPSEEK|
|model_provider|XAI|
|model_provider|OLLAMA|
|model_provider|AWS|
|model_provider|CEREBRAS|
|model_provider|FIREWORKS|
|model_provider|GROQ|
|model_provider|MOONSHOT|
|model_provider|MINIMAX|
|model_provider|PERPLEXITY|
|model_provider|TOGETHER|
|model_provider|ZAI|
|model_provider|META|
|template_type|STR|
|template_type|CHAT|
|template_format|MUSTACHE|
|template_format|F_STRING|
|template_format|NONE|

<h2 id="tocS_PromptVersionData">PromptVersionData</h2>
<!-- backwards compatibility -->
<a id="schemapromptversiondata"></a>
<a id="schema_PromptVersionData"></a>
<a id="tocSpromptversiondata"></a>
<a id="tocspromptversiondata"></a>

```json
{
  "description": "string",
  "metadata": {},
  "model_provider": "OPENAI",
  "model_name": "string",
  "template": {
    "type": "chat",
    "messages": [
      {
        "role": "user",
        "content": "string"
      }
    ]
  },
  "template_type": "STR",
  "template_format": "MUSTACHE",
  "invocation_parameters": {
    "type": "openai",
    "openai": {
      "temperature": 0,
      "max_tokens": 0,
      "max_completion_tokens": 0,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "top_p": 0,
      "seed": 0,
      "stop": [
        "string"
      ],
      "reasoning_effort": "none",
      "extra_body": {}
    }
  },
  "tools": {
    "type": "tools",
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "string",
          "description": "string",
          "parameters": {},
          "strict": true
        }
      }
    ],
    "tool_choice": {
      "type": "none"
    },
    "disable_parallel_tool_calls": true
  },
  "response_format": {
    "type": "json_schema",
    "json_schema": {
      "name": "string",
      "description": "string",
      "schema": {},
      "strict": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|metadata|object|false|none|Arbitrary JSON metadata for the prompt version.|
|model_provider|[ModelProvider](#schemamodelprovider)|true|none|none|
|model_name|string|true|none|none|
|template|[PromptChatTemplate](#schemapromptchattemplate) \| [PromptStringTemplate](#schemapromptstringtemplate)|true|none|none|
|template_type|[PromptTemplateType](#schemaprompttemplatetype)|true|none|none|
|template_format|[PromptTemplateFormat](#schemaprompttemplateformat)|true|none|none|
|invocation_parameters|[PromptOpenAIInvocationParameters](#schemapromptopenaiinvocationparameters) \| [PromptAzureOpenAIInvocationParameters](#schemapromptazureopenaiinvocationparameters) \| [PromptAnthropicInvocationParameters](#schemapromptanthropicinvocationparameters) \| [PromptGoogleInvocationParameters](#schemapromptgoogleinvocationparameters) \| [PromptDeepSeekInvocationParameters](#schemapromptdeepseekinvocationparameters) \| [PromptXAIInvocationParameters](#schemapromptxaiinvocationparameters) \| [PromptOllamaInvocationParameters](#schemapromptollamainvocationparameters) \| [PromptAwsInvocationParameters](#schemapromptawsinvocationparameters) \| [PromptCerebrasInvocationParameters](#schemapromptcerebrasinvocationparameters) \| [PromptFireworksInvocationParameters](#schemapromptfireworksinvocationparameters) \| [PromptGroqInvocationParameters](#schemapromptgroqinvocationparameters) \| [PromptMoonshotInvocationParameters](#schemapromptmoonshotinvocationparameters) \| [PromptPerplexityInvocationParameters](#schemapromptperplexityinvocationparameters) \| [PromptTogetherInvocationParameters](#schemaprompttogetherinvocationparameters) \| [PromptZAIInvocationParameters](#schemapromptzaiinvocationparameters) \| [PromptMetaInvocationParameters](#schemapromptmetainvocationparameters)|true|none|none|
|tools|[PromptTools](#schemaprompttools) \| null|false|none|none|
|response_format|[PromptResponseFormatJSONSchema](#schemapromptresponseformatjsonschema) \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|model_provider|OPENAI|
|model_provider|AZURE_OPENAI|
|model_provider|ANTHROPIC|
|model_provider|GOOGLE|
|model_provider|DEEPSEEK|
|model_provider|XAI|
|model_provider|OLLAMA|
|model_provider|AWS|
|model_provider|CEREBRAS|
|model_provider|FIREWORKS|
|model_provider|GROQ|
|model_provider|MOONSHOT|
|model_provider|MINIMAX|
|model_provider|PERPLEXITY|
|model_provider|TOGETHER|
|model_provider|ZAI|
|model_provider|META|
|template_type|STR|
|template_type|CHAT|
|template_format|MUSTACHE|
|template_format|F_STRING|
|template_format|NONE|

<h2 id="tocS_PromptVersionTag">PromptVersionTag</h2>
<!-- backwards compatibility -->
<a id="schemapromptversiontag"></a>
<a id="schema_PromptVersionTag"></a>
<a id="tocSpromptversiontag"></a>
<a id="tocspromptversiontag"></a>

```json
{
  "name": "string",
  "description": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Identifier](#schemaidentifier)|true|none|none|
|description|string \| null|false|none|none|
|id|string|true|none|none|

<h2 id="tocS_PromptVersionTagData">PromptVersionTagData</h2>
<!-- backwards compatibility -->
<a id="schemapromptversiontagdata"></a>
<a id="schema_PromptVersionTagData"></a>
<a id="tocSpromptversiontagdata"></a>
<a id="tocspromptversiontagdata"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Identifier](#schemaidentifier)|true|none|none|
|description|string \| null|false|none|none|

<h2 id="tocS_PromptVersionUIContext">PromptVersionUIContext</h2>
<!-- backwards compatibility -->
<a id="schemapromptversionuicontext"></a>
<a id="schema_PromptVersionUIContext"></a>
<a id="tocSpromptversionuicontext"></a>
<a id="tocspromptversionuicontext"></a>

```json
{
  "type": "prompt_version",
  "promptNodeId": "string",
  "promptVersionNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|promptNodeId|string|true|none|none|
|promptVersionNodeId|string|true|none|none|

<h2 id="tocS_PromptXAIInvocationParameters">PromptXAIInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptxaiinvocationparameters"></a>
<a id="schema_PromptXAIInvocationParameters"></a>
<a id="tocSpromptxaiinvocationparameters"></a>
<a id="tocspromptxaiinvocationparameters"></a>

```json
{
  "type": "xai",
  "xai": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|xai|[PromptXAIInvocationParametersContent](#schemapromptxaiinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptXAIInvocationParametersContent">PromptXAIInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptxaiinvocationparameterscontent"></a>
<a id="schema_PromptXAIInvocationParametersContent"></a>
<a id="tocSpromptxaiinvocationparameterscontent"></a>
<a id="tocspromptxaiinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PromptZAIInvocationParameters">PromptZAIInvocationParameters</h2>
<!-- backwards compatibility -->
<a id="schemapromptzaiinvocationparameters"></a>
<a id="schema_PromptZAIInvocationParameters"></a>
<a id="tocSpromptzaiinvocationparameters"></a>
<a id="tocspromptzaiinvocationparameters"></a>

```json
{
  "type": "zai",
  "zai": {
    "temperature": 0,
    "max_tokens": 0,
    "max_completion_tokens": 0,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0,
    "seed": 0,
    "stop": [
      "string"
    ],
    "reasoning_effort": "none",
    "extra_body": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|zai|[PromptZAIInvocationParametersContent](#schemapromptzaiinvocationparameterscontent)|true|none|none|

<h2 id="tocS_PromptZAIInvocationParametersContent">PromptZAIInvocationParametersContent</h2>
<!-- backwards compatibility -->
<a id="schemapromptzaiinvocationparameterscontent"></a>
<a id="schema_PromptZAIInvocationParametersContent"></a>
<a id="tocSpromptzaiinvocationparameterscontent"></a>
<a id="tocspromptzaiinvocationparameterscontent"></a>

```json
{
  "temperature": 0,
  "max_tokens": 0,
  "max_completion_tokens": 0,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0,
  "seed": 0,
  "stop": [
    "string"
  ],
  "reasoning_effort": "none",
  "extra_body": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|temperature|number|false|none|none|
|max_tokens|integer|false|none|none|
|max_completion_tokens|integer|false|none|none|
|frequency_penalty|number|false|none|none|
|presence_penalty|number|false|none|none|
|top_p|number|false|none|none|
|seed|integer|false|none|none|
|stop|[string]|false|none|none|
|reasoning_effort|string|false|none|none|
|extra_body|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reasoning_effort|none|
|reasoning_effort|minimal|
|reasoning_effort|low|
|reasoning_effort|medium|
|reasoning_effort|high|
|reasoning_effort|xhigh|

<h2 id="tocS_PydanticAIMessageMetadata">PydanticAIMessageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapydanticaimessagemetadata"></a>
<a id="schema_PydanticAIMessageMetadata"></a>
<a id="tocSpydanticaimessagemetadata"></a>
<a id="tocspydanticaimessagemetadata"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z"
}
```

Local pin of pydantic-ai's message-level ``pydantic_ai`` metadata
namespace (its private ``_PydanticAIMessageMetadata``), merged into the
assistant metadata by the stream's metadata chunk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time) \| null|false|none|none|

<h2 id="tocS_ReasoningUIPart">ReasoningUIPart</h2>
<!-- backwards compatibility -->
<a id="schemareasoninguipart"></a>
<a id="schema_ReasoningUIPart"></a>
<a id="tocSreasoninguipart"></a>
<a id="tocsreasoninguipart"></a>

```json
{
  "type": "reasoning",
  "id": "string",
  "text": "string",
  "state": "streaming",
  "providerMetadata": {
    "property1": {},
    "property2": {}
  }
}
```

A reasoning part of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|id|string \| null|false|none|none|
|text|string|true|none|none|
|state|string \| null|false|none|none|
|providerMetadata|object \| null|false|none|none|

<h2 id="tocS_ResponseBody_UpsertOrDeleteSecretsResult_">ResponseBody_UpsertOrDeleteSecretsResult_</h2>
<!-- backwards compatibility -->
<a id="schemaresponsebody_upsertordeletesecretsresult_"></a>
<a id="schema_ResponseBody_UpsertOrDeleteSecretsResult_"></a>
<a id="tocSresponsebody_upsertordeletesecretsresult_"></a>
<a id="tocsresponsebody_upsertordeletesecretsresult_"></a>

```json
{
  "data": {
    "upserted_keys": [
      "string"
    ],
    "deleted_keys": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UpsertOrDeleteSecretsResult](#schemaupsertordeletesecretsresult)|true|none|Result payload listing which keys were upserted and which were deleted.|

<h2 id="tocS_SecretKeyValue">SecretKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemasecretkeyvalue"></a>
<a id="schema_SecretKeyValue"></a>
<a id="tocSsecretkeyvalue"></a>
<a id="tocssecretkeyvalue"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A single secret entry specifying a key and a required nullable value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string \| null|true|none|Provide a string to create or update the secret, or explicit null to delete it. This field is required; omitting it returns 422.|

<h2 id="tocS_SessionAnnotation">SessionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemasessionannotation"></a>
<a id="schema_SessionAnnotation"></a>
<a id="tocSsessionannotation"></a>
<a id="tocssessionannotation"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "source": "API",
  "user_id": "string",
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "session_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|source|string|true|none|none|
|user_id|string \| null|true|none|none|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|session_id|string|true|none|Session ID|

#### Enumerated Values

|Property|Value|
|---|---|
|source|API|
|source|APP|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_SessionAnnotationData">SessionAnnotationData</h2>
<!-- backwards compatibility -->
<a id="schemasessionannotationdata"></a>
<a id="schema_SessionAnnotationData"></a>
<a id="tocSsessionannotationdata"></a>
<a id="tocssessionannotationdata"></a>

```json
{
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "session_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|session_id|string|true|none|Session ID|

#### Enumerated Values

|Property|Value|
|---|---|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_SessionAnnotationsResponseBody">SessionAnnotationsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasessionannotationsresponsebody"></a>
<a id="schema_SessionAnnotationsResponseBody"></a>
<a id="tocSsessionannotationsresponsebody"></a>
<a id="tocssessionannotationsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "source": "API",
      "user_id": "string",
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "session_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SessionAnnotation](#schemasessionannotation)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_SessionData">SessionData</h2>
<!-- backwards compatibility -->
<a id="schemasessiondata"></a>
<a id="schema_SessionData"></a>
<a id="tocSsessiondata"></a>
<a id="tocssessiondata"></a>

```json
{
  "id": "string",
  "session_id": "string",
  "project_id": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "traces": [
    {
      "id": "string",
      "trace_id": "string",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z"
    }
  ],
  "token_count_prompt": 0,
  "token_count_completion": 0,
  "token_count_total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|session_id|string|true|none|none|
|project_id|string|true|none|none|
|start_time|string(date-time)|true|none|none|
|end_time|string(date-time)|true|none|none|
|traces|[[SessionTraceData](#schemasessiontracedata)]|true|none|none|
|token_count_prompt|integer|false|none|Cumulative prompt token count across all spans in the session.|
|token_count_completion|integer|false|none|Cumulative completion token count across all spans in the session.|
|token_count_total|integer|false|none|Cumulative total token count across all spans in the session (prompt + completion).|

<h2 id="tocS_SessionNoteData">SessionNoteData</h2>
<!-- backwards compatibility -->
<a id="schemasessionnotedata"></a>
<a id="schema_SessionNoteData"></a>
<a id="tocSsessionnotedata"></a>
<a id="tocssessionnotedata"></a>

```json
{
  "session_id": "string",
  "note": "string",
  "identifier": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session_id|string|true|none|Session ID|
|note|string|true|none|The note text to add to the session|
|identifier|string|false|none|Optional caller-supplied identifier. When non-empty, the note is upserted on (session_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note. When omitted or empty, the server stamps a unique 'px-session-note:<uuid>' identifier so each call appends a new note.|

<h2 id="tocS_SessionTraceData">SessionTraceData</h2>
<!-- backwards compatibility -->
<a id="schemasessiontracedata"></a>
<a id="schema_SessionTraceData"></a>
<a id="tocSsessiontracedata"></a>
<a id="tocssessiontracedata"></a>

```json
{
  "id": "string",
  "trace_id": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|trace_id|string|true|none|none|
|start_time|string(date-time)|true|none|none|
|end_time|string(date-time)|true|none|none|

<h2 id="tocS_SessionUIContext">SessionUIContext</h2>
<!-- backwards compatibility -->
<a id="schemasessionuicontext"></a>
<a id="schema_SessionUIContext"></a>
<a id="tocSsessionuicontext"></a>
<a id="tocssessionuicontext"></a>

```json
{
  "type": "session",
  "projectNodeId": "string",
  "sessionNodeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|projectNodeId|string|true|none|none|
|sessionNodeId|string|true|none|none|

<h2 id="tocS_SetDatasetLabelsForDatasetResponseBody">SetDatasetLabelsForDatasetResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasetdatasetlabelsfordatasetresponsebody"></a>
<a id="schema_SetDatasetLabelsForDatasetResponseBody"></a>
<a id="tocSsetdatasetlabelsfordatasetresponsebody"></a>
<a id="tocssetdatasetlabelsfordatasetresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DatasetLabel](#schemadatasetlabel)]|true|none|none|

<h2 id="tocS_SetDatasetLabelsRequestBody">SetDatasetLabelsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetdatasetlabelsrequestbody"></a>
<a id="schema_SetDatasetLabelsRequestBody"></a>
<a id="tocSsetdatasetlabelsrequestbody"></a>
<a id="tocssetdatasetlabelsrequestbody"></a>

```json
{
  "dataset_label_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_label_ids|[string]|false|none|The complete set of dataset label GlobalIDs to apply to the dataset. Labels not in this list are removed from the dataset; an empty list removes all labels.|

<h2 id="tocS_SetExperimentTagRequestBody">SetExperimentTagRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetexperimenttagrequestbody"></a>
<a id="schema_SetExperimentTagRequestBody"></a>
<a id="tocSsetexperimenttagrequestbody"></a>
<a id="tocssetexperimenttagrequestbody"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Identifier](#schemaidentifier)|true|none|The name of the tag to assign, e.g. 'baseline'. If another experiment on the same dataset already owns this tag, the tag is moved to this experiment.|
|description|string \| null|false|none|An optional description of the tag (replaces any existing description)|

<h2 id="tocS_SetExperimentTagResponseBody">SetExperimentTagResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasetexperimenttagresponsebody"></a>
<a id="schema_SetExperimentTagResponseBody"></a>
<a id="tocSsetexperimenttagresponsebody"></a>
<a id="tocssetexperimenttagresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ExperimentTag](#schemaexperimenttag)|true|none|none|

<h2 id="tocS_SetProjectAnnotationConfigsRequestBody">SetProjectAnnotationConfigsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetprojectannotationconfigsrequestbody"></a>
<a id="schema_SetProjectAnnotationConfigsRequestBody"></a>
<a id="tocSsetprojectannotationconfigsrequestbody"></a>
<a id="tocssetprojectannotationconfigsrequestbody"></a>

```json
{
  "annotation_config_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation_config_ids|[string]|true|none|The complete set of annotation configuration GlobalIDs that should be assigned to the project. Configs not in this list are unassigned; an empty list clears all assignments.|

<h2 id="tocS_SetProjectAnnotationConfigsResponseBody">SetProjectAnnotationConfigsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasetprojectannotationconfigsresponsebody"></a>
<a id="schema_SetProjectAnnotationConfigsResponseBody"></a>
<a id="tocSsetprojectannotationconfigsresponsebody"></a>
<a id="tocssetprojectannotationconfigsresponsebody"></a>

```json
{
  "data": [
    {
      "name": "string",
      "type": "CATEGORICAL",
      "description": "string",
      "optimization_direction": "MINIMIZE",
      "values": [
        {
          "label": "string",
          "score": 0
        }
      ],
      "id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_SetProjectRetentionPolicyRequestBody">SetProjectRetentionPolicyRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasetprojectretentionpolicyrequestbody"></a>
<a id="schema_SetProjectRetentionPolicyRequestBody"></a>
<a id="tocSsetprojectretentionpolicyrequestbody"></a>
<a id="tocssetprojectretentionpolicyrequestbody"></a>

```json
{
  "policy_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy_id|string \| null|true|none|The ID (GlobalID) of an existing trace retention policy to assign, or null to reset the project to the default policy.|

<h2 id="tocS_SetProjectRetentionPolicyResponseBody">SetProjectRetentionPolicyResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasetprojectretentionpolicyresponsebody"></a>
<a id="schema_SetProjectRetentionPolicyResponseBody"></a>
<a id="tocSsetprojectretentionpolicyresponsebody"></a>
<a id="tocssetprojectretentionpolicyresponsebody"></a>

```json
{
  "data": {
    "project_id": "string",
    "policy_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ProjectRetentionPolicyData](#schemaprojectretentionpolicydata)|true|none|none|

<h2 id="tocS_SourceDocumentUIPart">SourceDocumentUIPart</h2>
<!-- backwards compatibility -->
<a id="schemasourcedocumentuipart"></a>
<a id="schema_SourceDocumentUIPart"></a>
<a id="tocSsourcedocumentuipart"></a>
<a id="tocssourcedocumentuipart"></a>

```json
{
  "type": "source-document",
  "sourceId": "string",
  "mediaType": "string",
  "title": "string",
  "filename": "string",
  "providerMetadata": {
    "property1": {},
    "property2": {}
  }
}
```

A document source part of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|sourceId|string|true|none|none|
|mediaType|string|true|none|none|
|title|string|true|none|none|
|filename|string \| null|false|none|none|
|providerMetadata|object \| null|false|none|none|

<h2 id="tocS_SourceUrlUIPart">SourceUrlUIPart</h2>
<!-- backwards compatibility -->
<a id="schemasourceurluipart"></a>
<a id="schema_SourceUrlUIPart"></a>
<a id="tocSsourceurluipart"></a>
<a id="tocssourceurluipart"></a>

```json
{
  "type": "source-url",
  "sourceId": "string",
  "url": "string",
  "title": "string",
  "providerMetadata": {
    "property1": {},
    "property2": {}
  }
}
```

A source part of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|sourceId|string|true|none|none|
|url|string|true|none|none|
|title|string \| null|false|none|none|
|providerMetadata|object \| null|false|none|none|

<h2 id="tocS_Span">Span</h2>
<!-- backwards compatibility -->
<a id="schemaspan"></a>
<a id="schema_Span"></a>
<a id="tocSspan"></a>
<a id="tocsspan"></a>

```json
{
  "attributes": {
    "llm.model_name": "gpt-4",
    "llm.token_count.completion": 50,
    "llm.token_count.prompt": 100
  },
  "context": {
    "span_id": "1a2b3c4d5e6f7a8b",
    "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
  },
  "end_time": "2024-01-01T12:00:01Z",
  "events": [],
  "name": "llm_call",
  "span_kind": "LLM",
  "start_time": "2024-01-01T12:00:00Z",
  "status_code": "OK",
  "status_message": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Span Global ID, distinct from the OpenTelemetry span ID|
|name|string|true|none|Name of the span operation|
|context|[SpanContext](#schemaspancontext)|true|none|Span context containing trace_id and span_id|
|span_kind|string|true|none|Type of work that the span encapsulates|
|parent_id|string \| null|false|none|OpenTelemetry span ID of the parent span|
|start_time|string(date-time)|true|none|Start time of the span (must be timezone-aware)|
|end_time|string(date-time)|true|none|End time of the span (must be timezone-aware)|
|status_code|string|true|none|Status code of the span|
|status_message|string|false|none|Status message|
|attributes|object|false|none|Span attributes|
|events|[[SpanEvent](#schemaspanevent)]|false|none|Span events|

<h2 id="tocS_SpanAnnotation">SpanAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaspanannotation"></a>
<a id="schema_SpanAnnotation"></a>
<a id="tocSspanannotation"></a>
<a id="tocsspanannotation"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "source": "API",
  "user_id": "string",
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "span_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|source|string|true|none|none|
|user_id|string \| null|true|none|none|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|span_id|string|true|none|OpenTelemetry Span ID (hex format w/o 0x prefix)|

#### Enumerated Values

|Property|Value|
|---|---|
|source|API|
|source|APP|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_SpanAnnotationData">SpanAnnotationData</h2>
<!-- backwards compatibility -->
<a id="schemaspanannotationdata"></a>
<a id="schema_SpanAnnotationData"></a>
<a id="tocSspanannotationdata"></a>
<a id="tocsspanannotationdata"></a>

```json
{
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "span_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|span_id|string|true|none|OpenTelemetry Span ID (hex format w/o 0x prefix)|

#### Enumerated Values

|Property|Value|
|---|---|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_SpanAnnotationsResponseBody">SpanAnnotationsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaspanannotationsresponsebody"></a>
<a id="schema_SpanAnnotationsResponseBody"></a>
<a id="tocSspanannotationsresponsebody"></a>
<a id="tocsspanannotationsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "source": "API",
      "user_id": "string",
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "span_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SpanAnnotation](#schemaspanannotation)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_SpanContext">SpanContext</h2>
<!-- backwards compatibility -->
<a id="schemaspancontext"></a>
<a id="schema_SpanContext"></a>
<a id="tocSspancontext"></a>
<a id="tocsspancontext"></a>

```json
{
  "span_id": "1a2b3c4d5e6f7a8b",
  "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trace_id|string|true|none|OpenTelemetry trace ID|
|span_id|string|true|none|OpenTelemetry span ID|

<h2 id="tocS_SpanDocumentAnnotationData">SpanDocumentAnnotationData</h2>
<!-- backwards compatibility -->
<a id="schemaspandocumentannotationdata"></a>
<a id="schema_SpanDocumentAnnotationData"></a>
<a id="tocSspandocumentannotationdata"></a>
<a id="tocsspandocumentannotationdata"></a>

```json
{
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "span_id": "string",
  "document_position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|span_id|string|true|none|OpenTelemetry Span ID (hex format w/o 0x prefix)|
|document_position|integer|true|none|A 0 based index of the document. E.x. the first document during retrieval is 0|

#### Enumerated Values

|Property|Value|
|---|---|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_SpanEvent">SpanEvent</h2>
<!-- backwards compatibility -->
<a id="schemaspanevent"></a>
<a id="schema_SpanEvent"></a>
<a id="tocSspanevent"></a>
<a id="tocsspanevent"></a>

```json
{
  "attributes": {
    "exception.message": "Connection refused"
  },
  "name": "exception",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the event|
|timestamp|string(date-time)|true|none|When the event occurred (must be timezone-aware)|
|attributes|object|false|none|Event attributes|

<h2 id="tocS_SpanNoteData">SpanNoteData</h2>
<!-- backwards compatibility -->
<a id="schemaspannotedata"></a>
<a id="schema_SpanNoteData"></a>
<a id="tocSspannotedata"></a>
<a id="tocsspannotedata"></a>

```json
{
  "span_id": "string",
  "note": "string",
  "identifier": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|span_id|string|true|none|OpenTelemetry Span ID (hex format w/o 0x prefix)|
|note|string|true|none|The note text to add to the span|
|identifier|string|false|none|Optional caller-supplied identifier. When non-empty, the note is upserted on (span_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note. When omitted or empty, the server stamps a unique 'px-span-note:<uuid>' identifier so each call appends a new note.|

<h2 id="tocS_SpanUIContext">SpanUIContext</h2>
<!-- backwards compatibility -->
<a id="schemaspanuicontext"></a>
<a id="schema_SpanUIContext"></a>
<a id="tocSspanuicontext"></a>
<a id="tocsspanuicontext"></a>

```json
{
  "type": "span",
  "projectNodeId": "string",
  "spanNodeId": "string",
  "otelSpanId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|projectNodeId|string \| null|false|none|none|
|spanNodeId|string \| null|false|none|none|
|otelSpanId|string \| null|false|none|none|

<h2 id="tocS_SpansResponseBody">SpansResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaspansresponsebody"></a>
<a id="schema_SpansResponseBody"></a>
<a id="tocSspansresponsebody"></a>
<a id="tocsspansresponsebody"></a>

```json
{
  "data": [
    {
      "attributes": {
        "llm.model_name": "gpt-4",
        "llm.token_count.completion": 50,
        "llm.token_count.prompt": 100
      },
      "context": {
        "span_id": "1a2b3c4d5e6f7a8b",
        "trace_id": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
      },
      "end_time": "2024-01-01T12:00:01Z",
      "events": [],
      "name": "llm_call",
      "span_kind": "LLM",
      "start_time": "2024-01-01T12:00:00Z",
      "status_code": "OK",
      "status_message": ""
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Span](#schemaspan)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_StepStartUIPart">StepStartUIPart</h2>
<!-- backwards compatibility -->
<a id="schemastepstartuipart"></a>
<a id="schema_StepStartUIPart"></a>
<a id="tocSstepstartuipart"></a>
<a id="tocsstepstartuipart"></a>

```json
{
  "type": "step-start"
}
```

A step boundary part of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

<h2 id="tocS_SubagentsContext">SubagentsContext</h2>
<!-- backwards compatibility -->
<a id="schemasubagentscontext"></a>
<a id="schema_SubagentsContext"></a>
<a id="tocSsubagentscontext"></a>
<a id="tocssubagentscontext"></a>

```json
{
  "type": "subagents",
  "enabled": true
}
```

User's per-turn request to expose the subagent-spawning tool.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|enabled|boolean|true|none|none|

<h2 id="tocS_SubmitAgentSessionToolApprovalsRequestBody">SubmitAgentSessionToolApprovalsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasubmitagentsessiontoolapprovalsrequestbody"></a>
<a id="schema_SubmitAgentSessionToolApprovalsRequestBody"></a>
<a id="tocSsubmitagentsessiontoolapprovalsrequestbody"></a>
<a id="tocssubmitagentsessiontoolapprovalsrequestbody"></a>

```json
{
  "toolApprovals": [
    {
      "toolCallId": "string",
      "approved": true
    }
  ],
  "lastMessageId": "string"
}
```

Persist answered tool approvals without continuing the turn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toolApprovals|[[ToolApproval](#schematoolapproval)]|true|none|Answers to tool calls awaiting approval on the trailing assistant message, matched by ``toolCallId``. Resending a persisted answer is a no-op; an answer that reverses one, or that matches no call awaiting approval, is rejected with HTTP 409 and code ``agent_session_tool_approvals_conflict``.|
|lastMessageId|string|true|none|The trailing assistant message's id. On mismatch the submission is rejected with HTTP 409 and code ``agent_session_messages_stale``.|

<h2 id="tocS_SubmitAgentSessionToolApprovalsResponseBody">SubmitAgentSessionToolApprovalsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasubmitagentsessiontoolapprovalsresponsebody"></a>
<a id="schema_SubmitAgentSessionToolApprovalsResponseBody"></a>
<a id="tocSsubmitagentsessiontoolapprovalsresponsebody"></a>
<a id="tocssubmitagentsessiontoolapprovalsresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  }
}
```

The trailing assistant message with the submitted approvals applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PhoenixUIMessage](#schemaphoenixuimessage)|true|none|``UIMessage`` with metadata narrowed to the Phoenix wire shapes.|

<h2 id="tocS_SubmitAgentSessionToolOutputsRequestBody">SubmitAgentSessionToolOutputsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemasubmitagentsessiontooloutputsrequestbody"></a>
<a id="schema_SubmitAgentSessionToolOutputsRequestBody"></a>
<a id="tocSsubmitagentsessiontooloutputsrequestbody"></a>
<a id="tocssubmitagentsessiontooloutputsrequestbody"></a>

```json
{
  "toolOutputs": [
    {
      "type": "string",
      "toolCallId": "string",
      "title": "string",
      "state": "output-available",
      "input": null,
      "output": null,
      "providerExecuted": true,
      "callProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "resultProviderMetadata": {
        "property1": {},
        "property2": {}
      },
      "preliminary": true,
      "approval": {
        "id": "string"
      }
    }
  ],
  "lastMessageId": "string"
}
```

Persist resolved client tool outputs without continuing the turn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toolOutputs|[[phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart) \| [phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart](#schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart)]|true|none|Client tool results for pending calls on the trailing assistant message, matched by ``toolCallId``. Resending a persisted output verbatim is a no-op; an output that differs from the persisted result or matches no call is rejected with HTTP 409 and code ``agent_session_tool_outputs_conflict``.|
|lastMessageId|string|true|none|The trailing assistant message's id. On mismatch the submission is rejected with HTTP 409 and code ``agent_session_messages_stale``.|

<h2 id="tocS_SubmitAgentSessionToolOutputsResponseBody">SubmitAgentSessionToolOutputsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemasubmitagentsessiontooloutputsresponsebody"></a>
<a id="schema_SubmitAgentSessionToolOutputsResponseBody"></a>
<a id="tocSsubmitagentsessiontooloutputsresponsebody"></a>
<a id="tocssubmitagentsessiontooloutputsresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "role": "system",
    "metadata": {
      "phoenix": {
        "type": "assistant",
        "sessionId": "string",
        "turnTraceContext": {
          "traceId": "string",
          "rootSpanId": "string",
          "startedAt": "1970-01-01T00:00:00Z"
        },
        "usage": {
          "tokens": {
            "prompt": 0,
            "completion": 0,
            "total": 0
          },
          "promptDetails": {
            "cacheRead": 0,
            "cacheWrite": 0
          }
        },
        "interrupted": false
      },
      "pydantic_ai": {
        "timestamp": "1970-01-01T00:00:00Z"
      }
    },
    "parts": [
      {
        "type": "text",
        "text": "string",
        "state": "streaming",
        "providerMetadata": {
          "property1": {},
          "property2": {}
        }
      }
    ]
  }
}
```

The trailing assistant message with the submitted outputs applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[PhoenixUIMessage](#schemaphoenixuimessage)|true|none|``UIMessage`` with metadata narrowed to the Phoenix wire shapes.|

<h2 id="tocS_TextContentPart">TextContentPart</h2>
<!-- backwards compatibility -->
<a id="schematextcontentpart"></a>
<a id="schema_TextContentPart"></a>
<a id="tocStextcontentpart"></a>
<a id="tocstextcontentpart"></a>

```json
{
  "type": "text",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|

<h2 id="tocS_TextUIPart">TextUIPart</h2>
<!-- backwards compatibility -->
<a id="schematextuipart"></a>
<a id="schema_TextUIPart"></a>
<a id="tocStextuipart"></a>
<a id="tocstextuipart"></a>

```json
{
  "type": "text",
  "text": "string",
  "state": "streaming",
  "providerMetadata": {
    "property1": {},
    "property2": {}
  }
}
```

A text part of a message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|text|string|true|none|none|
|state|string \| null|false|none|none|
|providerMetadata|object \| null|false|none|none|

<h2 id="tocS_ToolApproval">ToolApproval</h2>
<!-- backwards compatibility -->
<a id="schematoolapproval"></a>
<a id="schema_ToolApproval"></a>
<a id="tocStoolapproval"></a>
<a id="tocstoolapproval"></a>

```json
{
  "toolCallId": "string",
  "approved": true
}
```

A user's response to a tool call awaiting approval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toolCallId|string|true|none|none|
|approved|boolean|true|none|Whether the user approved the tool call.|

<h2 id="tocS_ToolApprovalRequested">ToolApprovalRequested</h2>
<!-- backwards compatibility -->
<a id="schematoolapprovalrequested"></a>
<a id="schema_ToolApprovalRequested"></a>
<a id="tocStoolapprovalrequested"></a>
<a id="tocstoolapprovalrequested"></a>

```json
{
  "id": "string"
}
```

Tool approval in requested state (awaiting user response).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_ToolApprovalRequestedPart">ToolApprovalRequestedPart</h2>
<!-- backwards compatibility -->
<a id="schematoolapprovalrequestedpart"></a>
<a id="schema_ToolApprovalRequestedPart"></a>
<a id="tocStoolapprovalrequestedpart"></a>
<a id="tocstoolapprovalrequestedpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "approval-requested",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in approval-requested state (awaiting user decision).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_ToolApprovalResponded">ToolApprovalResponded</h2>
<!-- backwards compatibility -->
<a id="schematoolapprovalresponded"></a>
<a id="schema_ToolApprovalResponded"></a>
<a id="tocStoolapprovalresponded"></a>
<a id="tocstoolapprovalresponded"></a>

```json
{
  "id": "string",
  "approved": true,
  "reason": "string"
}
```

Tool approval in responded state (user has approved or denied).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|approved|boolean|true|none|none|
|reason|string \| null|false|none|none|

<h2 id="tocS_ToolApprovalRespondedPart">ToolApprovalRespondedPart</h2>
<!-- backwards compatibility -->
<a id="schematoolapprovalrespondedpart"></a>
<a id="schema_ToolApprovalRespondedPart"></a>
<a id="tocStoolapprovalrespondedpart"></a>
<a id="tocstoolapprovalrespondedpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "approval-responded",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in approval-responded state (user approved/denied, execution pending).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_ToolCallContentPart">ToolCallContentPart</h2>
<!-- backwards compatibility -->
<a id="schematoolcallcontentpart"></a>
<a id="schema_ToolCallContentPart"></a>
<a id="tocStoolcallcontentpart"></a>
<a id="tocstoolcallcontentpart"></a>

```json
{
  "type": "tool_call",
  "tool_call_id": "string",
  "tool_call": {
    "type": "function",
    "name": "string",
    "arguments": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|tool_call_id|string|true|none|none|
|tool_call|[ToolCallFunction](#schematoolcallfunction)|true|none|none|

<h2 id="tocS_ToolCallFunction">ToolCallFunction</h2>
<!-- backwards compatibility -->
<a id="schematoolcallfunction"></a>
<a id="schema_ToolCallFunction"></a>
<a id="tocStoolcallfunction"></a>
<a id="tocstoolcallfunction"></a>

```json
{
  "type": "function",
  "name": "string",
  "arguments": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|name|string|true|none|none|
|arguments|string|true|none|none|

<h2 id="tocS_ToolInputAvailablePart">ToolInputAvailablePart</h2>
<!-- backwards compatibility -->
<a id="schematoolinputavailablepart"></a>
<a id="schema_ToolInputAvailablePart"></a>
<a id="tocStoolinputavailablepart"></a>
<a id="tocstoolinputavailablepart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "input-available",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in input-available state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_ToolOutputDeniedPart">ToolOutputDeniedPart</h2>
<!-- backwards compatibility -->
<a id="schematooloutputdeniedpart"></a>
<a id="schema_ToolOutputDeniedPart"></a>
<a id="tocStooloutputdeniedpart"></a>
<a id="tocstooloutputdeniedpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-denied",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in output-denied state (tool was denied, terminal state).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_ToolResultContentPart">ToolResultContentPart</h2>
<!-- backwards compatibility -->
<a id="schematoolresultcontentpart"></a>
<a id="schema_ToolResultContentPart"></a>
<a id="tocStoolresultcontentpart"></a>
<a id="tocstoolresultcontentpart"></a>

```json
{
  "type": "tool_result",
  "tool_call_id": "string",
  "tool_result": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|tool_call_id|string|true|none|none|
|tool_result|boolean \| integer \| number \| string \| object \| [object] \| null|true|none|none|

<h2 id="tocS_TraceAnnotation">TraceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematraceannotation"></a>
<a id="schema_TraceAnnotation"></a>
<a id="tocStraceannotation"></a>
<a id="tocstraceannotation"></a>

```json
{
  "id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "source": "API",
  "user_id": "string",
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "trace_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|source|string|true|none|none|
|user_id|string \| null|true|none|none|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|trace_id|string|true|none|OpenTelemetry Trace ID (hex format w/o 0x prefix)|

#### Enumerated Values

|Property|Value|
|---|---|
|source|API|
|source|APP|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_TraceAnnotationData">TraceAnnotationData</h2>
<!-- backwards compatibility -->
<a id="schematraceannotationdata"></a>
<a id="schema_TraceAnnotationData"></a>
<a id="tocStraceannotationdata"></a>
<a id="tocstraceannotationdata"></a>

```json
{
  "name": "string",
  "annotator_kind": "LLM",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "metadata": {},
  "identifier": "",
  "trace_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the annotation|
|annotator_kind|string|true|none|The kind of annotator used for the annotation|
|result|[AnnotationResult](#schemaannotationresult) \| null|false|none|The result of the annotation|
|metadata|object \| null|false|none|Metadata for the annotation|
|identifier|string|false|none|The identifier of the annotation. If provided, the annotation will be updated if it already exists.|
|trace_id|string|true|none|OpenTelemetry Trace ID (hex format w/o 0x prefix)|

#### Enumerated Values

|Property|Value|
|---|---|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_TraceAnnotationsResponseBody">TraceAnnotationsResponseBody</h2>
<!-- backwards compatibility -->
<a id="schematraceannotationsresponsebody"></a>
<a id="schema_TraceAnnotationsResponseBody"></a>
<a id="tocStraceannotationsresponsebody"></a>
<a id="tocstraceannotationsresponsebody"></a>

```json
{
  "data": [
    {
      "id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "source": "API",
      "user_id": "string",
      "name": "string",
      "annotator_kind": "LLM",
      "result": {
        "label": "string",
        "score": 0,
        "explanation": "string"
      },
      "metadata": {},
      "identifier": "",
      "trace_id": "string"
    }
  ],
  "next_cursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TraceAnnotation](#schematraceannotation)]|true|none|none|
|next_cursor|string \| null|true|none|none|

<h2 id="tocS_TraceData">TraceData</h2>
<!-- backwards compatibility -->
<a id="schematracedata"></a>
<a id="schema_TraceData"></a>
<a id="tocStracedata"></a>
<a id="tocstracedata"></a>

```json
{
  "id": "string",
  "trace_id": "string",
  "project_id": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "token_count_prompt": 0,
  "token_count_completion": 0,
  "token_count_total": 0,
  "spans": [
    {
      "id": "string",
      "span_id": "string",
      "parent_id": "string",
      "name": "string",
      "span_kind": "string",
      "status_code": "string",
      "start_time": "1970-01-01T00:00:00Z",
      "end_time": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|trace_id|string|true|none|none|
|project_id|string|true|none|none|
|start_time|string(date-time)|true|none|none|
|end_time|string(date-time)|true|none|none|
|token_count_prompt|integer|false|none|Cumulative prompt token count across all spans in the trace.|
|token_count_completion|integer|false|none|Cumulative completion token count across all spans in the trace.|
|token_count_total|integer|false|none|Cumulative total token count across all spans in the trace (prompt + completion).|
|spans|[[TraceSpanData](#schematracespandata)] \| null|false|none|none|

<h2 id="tocS_TraceNoteData">TraceNoteData</h2>
<!-- backwards compatibility -->
<a id="schematracenotedata"></a>
<a id="schema_TraceNoteData"></a>
<a id="tocStracenotedata"></a>
<a id="tocstracenotedata"></a>

```json
{
  "trace_id": "string",
  "note": "string",
  "identifier": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trace_id|string|true|none|OpenTelemetry Trace ID (hex format w/o 0x prefix)|
|note|string|true|none|The note text to add to the trace|
|identifier|string|false|none|Optional caller-supplied identifier. When non-empty, the note is upserted on (trace_id, name='note', identifier) — repeated calls with the same identifier overwrite the existing note. When omitted or empty, the server stamps a unique 'px-trace-note:<uuid>' identifier so each call appends a new note.|

<h2 id="tocS_TraceSpanData">TraceSpanData</h2>
<!-- backwards compatibility -->
<a id="schematracespandata"></a>
<a id="schema_TraceSpanData"></a>
<a id="tocStracespandata"></a>
<a id="tocstracespandata"></a>

```json
{
  "id": "string",
  "span_id": "string",
  "parent_id": "string",
  "name": "string",
  "span_kind": "string",
  "status_code": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|span_id|string|true|none|none|
|parent_id|string \| null|true|none|none|
|name|string|true|none|none|
|span_kind|string|true|none|none|
|status_code|string|true|none|none|
|start_time|string(date-time)|true|none|none|
|end_time|string(date-time)|true|none|none|

<h2 id="tocS_TraceUIContext">TraceUIContext</h2>
<!-- backwards compatibility -->
<a id="schematraceuicontext"></a>
<a id="schema_TraceUIContext"></a>
<a id="tocStraceuicontext"></a>
<a id="tocstraceuicontext"></a>

```json
{
  "type": "trace",
  "projectNodeId": "string",
  "otelTraceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|projectNodeId|string|true|none|none|
|otelTraceId|string|true|none|none|

<h2 id="tocS_TransferTracesData">TransferTracesData</h2>
<!-- backwards compatibility -->
<a id="schematransfertracesdata"></a>
<a id="schema_TransferTracesData"></a>
<a id="tocStransfertracesdata"></a>
<a id="tocstransfertracesdata"></a>

```json
{
  "transferred_trace_count": 0,
  "destination_project_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferred_trace_count|integer|true|none|The number of traces that were moved to the destination project.|
|destination_project_id|string|true|none|The ID (GlobalID) of the project the traces were moved to.|

<h2 id="tocS_TransferTracesRequestBody">TransferTracesRequestBody</h2>
<!-- backwards compatibility -->
<a id="schematransfertracesrequestbody"></a>
<a id="schema_TransferTracesRequestBody"></a>
<a id="tocStransfertracesrequestbody"></a>
<a id="tocstransfertracesrequestbody"></a>

```json
{
  "trace_identifiers": [
    "string"
  ],
  "destination_project_identifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trace_identifiers|[string]|true|none|The traces to transfer. Each identifier is either a trace ID (GlobalID) or an OpenTelemetry trace_id (hex string). Must be non-empty, and all traces must currently belong to the same source project.|
|destination_project_identifier|string|true|none|The destination project: either project ID (GlobalID) or project name.|

<h2 id="tocS_TransferTracesResponseBody">TransferTracesResponseBody</h2>
<!-- backwards compatibility -->
<a id="schematransfertracesresponsebody"></a>
<a id="schema_TransferTracesResponseBody"></a>
<a id="tocStransfertracesresponsebody"></a>
<a id="tocstransfertracesresponsebody"></a>

```json
{
  "data": {
    "transferred_trace_count": 0,
    "destination_project_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[TransferTracesData](#schematransfertracesdata)|true|none|none|

<h2 id="tocS_TurnTraceContext">TurnTraceContext</h2>
<!-- backwards compatibility -->
<a id="schematurntracecontext"></a>
<a id="schema_TurnTraceContext"></a>
<a id="tocSturntracecontext"></a>
<a id="tocsturntracecontext"></a>

```json
{
  "traceId": "string",
  "rootSpanId": "string",
  "startedAt": "1970-01-01T00:00:00Z"
}
```

The trace identity a turn's spans are parented to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceId|string|true|none|none|
|rootSpanId|string|true|none|none|
|startedAt|string(date-time)|true|none|none|

<h2 id="tocS_UIContexts">UIContexts</h2>
<!-- backwards compatibility -->
<a id="schemauicontexts"></a>
<a id="schema_UIContexts"></a>
<a id="tocSuicontexts"></a>
<a id="tocsuicontexts"></a>

```json
{
  "project": {
    "type": "project",
    "projectNodeId": "string",
    "spanFilter": "string"
  },
  "trace": {
    "type": "trace",
    "projectNodeId": "string",
    "otelTraceId": "string"
  },
  "session": {
    "type": "session",
    "projectNodeId": "string",
    "sessionNodeId": "string"
  },
  "span": {
    "type": "span",
    "projectNodeId": "string",
    "spanNodeId": "string",
    "otelSpanId": "string"
  },
  "prompt": {
    "type": "prompt",
    "promptNodeId": "string"
  },
  "promptVersion": {
    "type": "prompt_version",
    "promptNodeId": "string",
    "promptVersionNodeId": "string"
  },
  "dataset": {
    "type": "dataset",
    "datasetNodeId": "string",
    "datasetVersionNodeId": "string"
  },
  "playground": {
    "type": "playground",
    "recordExperiments": true,
    "repetitions": 1,
    "nextExperimentScaffold": {
      "name": "string",
      "description": "string",
      "hasMetadata": false
    },
    "instances": [
      {
        "instanceId": 0,
        "model": {
          "type": "builtin",
          "provider": "string",
          "modelName": "string"
        },
        "experimentId": "string"
      }
    ],
    "evaluators": [
      {
        "datasetEvaluatorId": "string",
        "name": "string",
        "kind": "LLM",
        "isBuiltin": true,
        "isApplied": true
      }
    ]
  },
  "codeEvaluator": {
    "type": "code_evaluator",
    "evaluatorNodeId": "string"
  },
  "llmEvaluator": {
    "type": "llm_evaluator",
    "evaluatorNodeId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|[ProjectUIContext](#schemaprojectuicontext) \| null|false|none|none|
|trace|[TraceUIContext](#schematraceuicontext) \| null|false|none|none|
|session|[SessionUIContext](#schemasessionuicontext) \| null|false|none|none|
|span|[SpanUIContext](#schemaspanuicontext) \| null|false|none|none|
|prompt|[PromptUIContext](#schemapromptuicontext) \| null|false|none|none|
|promptVersion|[PromptVersionUIContext](#schemapromptversionuicontext) \| null|false|none|none|
|dataset|[DatasetUIContext](#schemadatasetuicontext) \| null|false|none|none|
|playground|[PlaygroundUIContext](#schemaplaygrounduicontext) \| null|false|none|none|
|codeEvaluator|[CodeEvaluatorUIContext](#schemacodeevaluatoruicontext) \| null|false|none|none|
|llmEvaluator|[LlmEvaluatorUIContext](#schemallmevaluatoruicontext) \| null|false|none|none|

<h2 id="tocS_UpdateAnnotationConfigResponseBody">UpdateAnnotationConfigResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateannotationconfigresponsebody"></a>
<a id="schema_UpdateAnnotationConfigResponseBody"></a>
<a id="tocSupdateannotationconfigresponsebody"></a>
<a id="tocsupdateannotationconfigresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "type": "CATEGORICAL",
    "description": "string",
    "optimization_direction": "MINIMIZE",
    "values": [
      {
        "label": "string",
        "score": 0
      }
    ],
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[CategoricalAnnotationConfig](#schemacategoricalannotationconfig) \| [ContinuousAnnotationConfig](#schemacontinuousannotationconfig) \| [FreeformAnnotationConfig](#schemafreeformannotationconfig)|true|none|none|

<h2 id="tocS_UpdateDatasetLabelRequestBody">UpdateDatasetLabelRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetlabelrequestbody"></a>
<a id="schema_UpdateDatasetLabelRequestBody"></a>
<a id="tocSupdatedatasetlabelrequestbody"></a>
<a id="tocsupdatedatasetlabelrequestbody"></a>

```json
{
  "name": "string",
  "color": "string",
  "description": "string"
}
```

Fields to update on a dataset label. Omit a field to leave it unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|New name for the label (null is rejected; name is required)|
|color|string \| null|false|none|New lowercase hex color code for the label (null is rejected)|
|description|string \| null|false|none|New description for the label (null clears the description)|

<h2 id="tocS_UpdateDatasetLabelResponseBody">UpdateDatasetLabelResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetlabelresponsebody"></a>
<a id="schema_UpdateDatasetLabelResponseBody"></a>
<a id="tocSupdatedatasetlabelresponsebody"></a>
<a id="tocsupdatedatasetlabelresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetLabel](#schemadatasetlabel)|true|none|none|

<h2 id="tocS_UpdateDatasetSplitRequestBody">UpdateDatasetSplitRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetsplitrequestbody"></a>
<a id="schema_UpdateDatasetSplitRequestBody"></a>
<a id="tocSupdatedatasetsplitrequestbody"></a>
<a id="tocsupdatedatasetsplitrequestbody"></a>

```json
{
  "name": "string",
  "description": "string",
  "color": "string",
  "metadata": {},
  "add_example_ids": [
    "string"
  ],
  "remove_example_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|A new unique name for the split.|
|description|string \| null|false|none|A new description, or null to clear it.|
|color|string \| null|false|none|A new hex color for the split.|
|metadata|object \| null|false|none|New JSON metadata that replaces the existing metadata.|
|add_example_ids|[string]|false|none|Dataset example identifiers (GlobalIDs or user-provided IDs) to add to the split. Each example must belong to this dataset. Adding an example already in the split is a no-op.|
|remove_example_ids|[string]|false|none|Dataset example identifiers (GlobalIDs or user-provided IDs) to remove from the split.|

<h2 id="tocS_UpdateDatasetSplitResponseBody">UpdateDatasetSplitResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatasetsplitresponsebody"></a>
<a id="schema_UpdateDatasetSplitResponseBody"></a>
<a id="tocSupdatedatasetsplitresponsebody"></a>
<a id="tocsupdatedatasetsplitresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "color": "string",
    "metadata": {},
    "example_count": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DatasetSplit](#schemadatasetsplit)|true|none|none|

<h2 id="tocS_UpdateExperimentRequestBody">UpdateExperimentRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimentrequestbody"></a>
<a id="schema_UpdateExperimentRequestBody"></a>
<a id="tocSupdateexperimentrequestbody"></a>
<a id="tocsupdateexperimentrequestbody"></a>

```json
{
  "name": "string",
  "description": "string",
  "metadata": {}
}
```

Fields to update on an experiment. Omit a field to leave it unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|New name for the experiment (null is rejected; name is required)|
|description|string \| null|false|none|New description for the experiment (null clears the description)|
|metadata|object \| null|false|none|New metadata object for the experiment (replaces the existing metadata as a whole; null is rejected)|

<h2 id="tocS_UpdateExperimentResponseBody">UpdateExperimentResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateexperimentresponsebody"></a>
<a id="schema_UpdateExperimentResponseBody"></a>
<a id="tocSupdateexperimentresponsebody"></a>
<a id="tocsupdateexperimentresponsebody"></a>

```json
{
  "data": {
    "id": "string",
    "dataset_id": "string",
    "dataset_version_id": "string",
    "name": "string",
    "description": "string",
    "repetitions": 1,
    "metadata": {},
    "project_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "example_count": 0,
    "successful_run_count": 0,
    "failed_run_count": 0,
    "missing_run_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Experiment](#schemaexperiment)|true|none|none|

<h2 id="tocS_UpdateProjectRequestBody">UpdateProjectRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectrequestbody"></a>
<a id="schema_UpdateProjectRequestBody"></a>
<a id="tocSupdateprojectrequestbody"></a>
<a id="tocsupdateprojectrequestbody"></a>

```json
{
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|

<h2 id="tocS_UpdateProjectResponseBody">UpdateProjectResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprojectresponsebody"></a>
<a id="schema_UpdateProjectResponseBody"></a>
<a id="tocSupdateprojectresponsebody"></a>
<a id="tocsupdateprojectresponsebody"></a>

```json
{
  "data": {
    "name": "string",
    "description": "string",
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Project](#schemaproject)|true|none|none|

<h2 id="tocS_UploadDatasetData">UploadDatasetData</h2>
<!-- backwards compatibility -->
<a id="schemauploaddatasetdata"></a>
<a id="schema_UploadDatasetData"></a>
<a id="tocSuploaddatasetdata"></a>
<a id="tocsuploaddatasetdata"></a>

```json
{
  "dataset_id": "string",
  "version_id": "string",
  "num_created_examples": 0,
  "num_updated_examples": 0,
  "num_deleted_examples": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset_id|string|true|none|none|
|version_id|string|true|none|none|
|num_created_examples|integer|true|none|none|
|num_updated_examples|integer|true|none|none|
|num_deleted_examples|integer|true|none|none|

<h2 id="tocS_UploadDatasetResponseBody">UploadDatasetResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemauploaddatasetresponsebody"></a>
<a id="schema_UploadDatasetResponseBody"></a>
<a id="tocSuploaddatasetresponsebody"></a>
<a id="tocsuploaddatasetresponsebody"></a>

```json
{
  "data": {
    "dataset_id": "string",
    "version_id": "string",
    "num_created_examples": 0,
    "num_updated_examples": 0,
    "num_deleted_examples": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UploadDatasetData](#schemauploaddatasetdata)|true|none|none|

<h2 id="tocS_UpsertExperimentEvaluationRequestBody">UpsertExperimentEvaluationRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaupsertexperimentevaluationrequestbody"></a>
<a id="schema_UpsertExperimentEvaluationRequestBody"></a>
<a id="tocSupsertexperimentevaluationrequestbody"></a>
<a id="tocsupsertexperimentevaluationrequestbody"></a>

```json
{
  "experiment_run_id": "string",
  "name": "string",
  "annotator_kind": "LLM",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "result": {
    "label": "string",
    "score": 0,
    "explanation": "string"
  },
  "error": "string",
  "metadata": {},
  "trace_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiment_run_id|string|true|none|The ID of the experiment run being evaluated|
|name|string|true|none|The name of the evaluation|
|annotator_kind|string|true|none|The kind of annotator used for the evaluation|
|start_time|string(date-time)|true|none|The start time of the evaluation in ISO format|
|end_time|string(date-time)|true|none|The end time of the evaluation in ISO format|
|result|[ExperimentEvaluationResult](#schemaexperimentevaluationresult) \| null|false|none|The result of the evaluation. Either result or error must be provided.|
|error|string \| null|false|none|Error message if the evaluation encountered an error. Either result or error must be provided.|
|metadata|object \| null|false|none|Metadata for the evaluation|
|trace_id|string \| null|false|none|Optional trace ID for tracking|

#### Enumerated Values

|Property|Value|
|---|---|
|annotator_kind|LLM|
|annotator_kind|CODE|
|annotator_kind|HUMAN|
|annotator_kind|DECISION|
|annotator_kind|AGENT|

<h2 id="tocS_UpsertExperimentEvaluationResponseBody">UpsertExperimentEvaluationResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemaupsertexperimentevaluationresponsebody"></a>
<a id="schema_UpsertExperimentEvaluationResponseBody"></a>
<a id="tocSupsertexperimentevaluationresponsebody"></a>
<a id="tocsupsertexperimentevaluationresponsebody"></a>

```json
{
  "data": {
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UpsertExperimentEvaluationResponseBodyData](#schemaupsertexperimentevaluationresponsebodydata)|true|none|none|

<h2 id="tocS_UpsertExperimentEvaluationResponseBodyData">UpsertExperimentEvaluationResponseBodyData</h2>
<!-- backwards compatibility -->
<a id="schemaupsertexperimentevaluationresponsebodydata"></a>
<a id="schema_UpsertExperimentEvaluationResponseBodyData"></a>
<a id="tocSupsertexperimentevaluationresponsebodydata"></a>
<a id="tocsupsertexperimentevaluationresponsebodydata"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the upserted experiment evaluation|

<h2 id="tocS_UpsertOrDeleteSecretsRequest">UpsertOrDeleteSecretsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertordeletesecretsrequest"></a>
<a id="schema_UpsertOrDeleteSecretsRequest"></a>
<a id="tocSupsertordeletesecretsrequest"></a>
<a id="tocsupsertordeletesecretsrequest"></a>

```json
{
  "secrets": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

Request body for the PUT /secrets endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secrets|[[SecretKeyValue](#schemasecretkeyvalue)]|true|none|none|

<h2 id="tocS_UpsertOrDeleteSecretsResult">UpsertOrDeleteSecretsResult</h2>
<!-- backwards compatibility -->
<a id="schemaupsertordeletesecretsresult"></a>
<a id="schema_UpsertOrDeleteSecretsResult"></a>
<a id="tocSupsertordeletesecretsresult"></a>
<a id="tocsupsertordeletesecretsresult"></a>

```json
{
  "upserted_keys": [
    "string"
  ],
  "deleted_keys": [
    "string"
  ]
}
```

Result payload listing which keys were upserted and which were deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upserted_keys|[string]|true|none|none|
|deleted_keys|[string]|true|none|none|

<h2 id="tocS_UserApiKey">UserApiKey</h2>
<!-- backwards compatibility -->
<a id="schemauserapikey"></a>
<a id="schema_UserApiKey"></a>
<a id="tocSuserapikey"></a>
<a id="tocsuserapikey"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|created_at|string(date-time)|true|none|none|
|expires_at|string(date-time) \| null|false|none|none|
|user|[ApiKeyUser](#schemaapikeyuser)|true|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string",
  "input": null,
  "ctx": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
|input|object|false|none|none|
|ctx|object|false|none|none|

<h2 id="tocS_WebAccessContext">WebAccessContext</h2>
<!-- backwards compatibility -->
<a id="schemawebaccesscontext"></a>
<a id="schema_WebAccessContext"></a>
<a id="tocSwebaccesscontext"></a>
<a id="tocswebaccesscontext"></a>

```json
{
  "type": "web_access",
  "enabled": true
}
```

User's per-turn request to expose web search / fetch tools.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|enabled|boolean|true|none|none|

<h2 id="tocS_phoenix__db__types__data_stream_protocol__request_types__DynamicToolInputStreamingPart">phoenix__db__types__data_stream_protocol__request_types__DynamicToolInputStreamingPart</h2>
<!-- backwards compatibility -->
<a id="schemaphoenix__db__types__data_stream_protocol__request_types__dynamictoolinputstreamingpart"></a>
<a id="schema_phoenix__db__types__data_stream_protocol__request_types__DynamicToolInputStreamingPart"></a>
<a id="tocSphoenix__db__types__data_stream_protocol__request_types__dynamictoolinputstreamingpart"></a>
<a id="tocsphoenix__db__types__data_stream_protocol__request_types__dynamictoolinputstreamingpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "input-streaming",
  "input": null,
  "rawInput": "string",
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in input-streaming state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|rawInput|string \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart">phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart</h2>
<!-- backwards compatibility -->
<a id="schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart"></a>
<a id="schema_phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputAvailablePart"></a>
<a id="tocSphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart"></a>
<a id="tocsphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputavailablepart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-available",
  "input": null,
  "output": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "resultProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "preliminary": true,
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in output-available state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|output|object|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|resultProviderMetadata|object \| null|false|none|none|
|preliminary|boolean \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart">phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart</h2>
<!-- backwards compatibility -->
<a id="schemaphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart"></a>
<a id="schema_phoenix__db__types__data_stream_protocol__request_types__DynamicToolOutputErrorPart"></a>
<a id="tocSphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart"></a>
<a id="tocsphoenix__db__types__data_stream_protocol__request_types__dynamictooloutputerrorpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-error",
  "input": null,
  "errorText": "string",
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "resultProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in output-error state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|errorText|string|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|resultProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_phoenix__db__types__data_stream_protocol__request_types__ToolInputStreamingPart">phoenix__db__types__data_stream_protocol__request_types__ToolInputStreamingPart</h2>
<!-- backwards compatibility -->
<a id="schemaphoenix__db__types__data_stream_protocol__request_types__toolinputstreamingpart"></a>
<a id="schema_phoenix__db__types__data_stream_protocol__request_types__ToolInputStreamingPart"></a>
<a id="tocSphoenix__db__types__data_stream_protocol__request_types__toolinputstreamingpart"></a>
<a id="tocsphoenix__db__types__data_stream_protocol__request_types__toolinputstreamingpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "input-streaming",
  "input": null,
  "rawInput": "string",
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in input-streaming state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|rawInput|string \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart">phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart</h2>
<!-- backwards compatibility -->
<a id="schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart"></a>
<a id="schema_phoenix__db__types__data_stream_protocol__request_types__ToolOutputAvailablePart"></a>
<a id="tocSphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart"></a>
<a id="tocsphoenix__db__types__data_stream_protocol__request_types__tooloutputavailablepart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-available",
  "input": null,
  "output": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "resultProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "preliminary": true,
  "approval": {
    "id": "string"
  }
}
```

Tool part in output-available state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|output|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|resultProviderMetadata|object \| null|false|none|none|
|preliminary|boolean \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart">phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart</h2>
<!-- backwards compatibility -->
<a id="schemaphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart"></a>
<a id="schema_phoenix__db__types__data_stream_protocol__request_types__ToolOutputErrorPart"></a>
<a id="tocSphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart"></a>
<a id="tocsphoenix__db__types__data_stream_protocol__request_types__tooloutputerrorpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-error",
  "input": null,
  "rawInput": null,
  "errorText": "string",
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "resultProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in output-error state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|rawInput|object \| null|false|none|none|
|errorText|string|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|resultProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_pydantic_ai__ui__vercel_ai__request_types__DynamicToolInputStreamingPart">pydantic_ai__ui__vercel_ai__request_types__DynamicToolInputStreamingPart</h2>
<!-- backwards compatibility -->
<a id="schemapydantic_ai__ui__vercel_ai__request_types__dynamictoolinputstreamingpart"></a>
<a id="schema_pydantic_ai__ui__vercel_ai__request_types__DynamicToolInputStreamingPart"></a>
<a id="tocSpydantic_ai__ui__vercel_ai__request_types__dynamictoolinputstreamingpart"></a>
<a id="tocspydantic_ai__ui__vercel_ai__request_types__dynamictoolinputstreamingpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "input-streaming",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in input-streaming state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputAvailablePart">pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputAvailablePart</h2>
<!-- backwards compatibility -->
<a id="schemapydantic_ai__ui__vercel_ai__request_types__dynamictooloutputavailablepart"></a>
<a id="schema_pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputAvailablePart"></a>
<a id="tocSpydantic_ai__ui__vercel_ai__request_types__dynamictooloutputavailablepart"></a>
<a id="tocspydantic_ai__ui__vercel_ai__request_types__dynamictooloutputavailablepart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-available",
  "input": null,
  "output": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "preliminary": true,
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in output-available state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|output|object|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|preliminary|boolean \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputErrorPart">pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputErrorPart</h2>
<!-- backwards compatibility -->
<a id="schemapydantic_ai__ui__vercel_ai__request_types__dynamictooloutputerrorpart"></a>
<a id="schema_pydantic_ai__ui__vercel_ai__request_types__DynamicToolOutputErrorPart"></a>
<a id="tocSpydantic_ai__ui__vercel_ai__request_types__dynamictooloutputerrorpart"></a>
<a id="tocspydantic_ai__ui__vercel_ai__request_types__dynamictooloutputerrorpart"></a>

```json
{
  "type": "dynamic-tool",
  "toolName": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-error",
  "input": null,
  "errorText": "string",
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Dynamic tool part in output-error state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|toolName|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object|true|none|none|
|errorText|string|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_pydantic_ai__ui__vercel_ai__request_types__ToolInputStreamingPart">pydantic_ai__ui__vercel_ai__request_types__ToolInputStreamingPart</h2>
<!-- backwards compatibility -->
<a id="schemapydantic_ai__ui__vercel_ai__request_types__toolinputstreamingpart"></a>
<a id="schema_pydantic_ai__ui__vercel_ai__request_types__ToolInputStreamingPart"></a>
<a id="tocSpydantic_ai__ui__vercel_ai__request_types__toolinputstreamingpart"></a>
<a id="tocspydantic_ai__ui__vercel_ai__request_types__toolinputstreamingpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "input-streaming",
  "input": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in input-streaming state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_pydantic_ai__ui__vercel_ai__request_types__ToolOutputAvailablePart">pydantic_ai__ui__vercel_ai__request_types__ToolOutputAvailablePart</h2>
<!-- backwards compatibility -->
<a id="schemapydantic_ai__ui__vercel_ai__request_types__tooloutputavailablepart"></a>
<a id="schema_pydantic_ai__ui__vercel_ai__request_types__ToolOutputAvailablePart"></a>
<a id="tocSpydantic_ai__ui__vercel_ai__request_types__tooloutputavailablepart"></a>
<a id="tocspydantic_ai__ui__vercel_ai__request_types__tooloutputavailablepart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-available",
  "input": null,
  "output": null,
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "preliminary": true,
  "approval": {
    "id": "string"
  }
}
```

Tool part in output-available state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|output|object \| null|false|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|preliminary|boolean \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_pydantic_ai__ui__vercel_ai__request_types__ToolOutputErrorPart">pydantic_ai__ui__vercel_ai__request_types__ToolOutputErrorPart</h2>
<!-- backwards compatibility -->
<a id="schemapydantic_ai__ui__vercel_ai__request_types__tooloutputerrorpart"></a>
<a id="schema_pydantic_ai__ui__vercel_ai__request_types__ToolOutputErrorPart"></a>
<a id="tocSpydantic_ai__ui__vercel_ai__request_types__tooloutputerrorpart"></a>
<a id="tocspydantic_ai__ui__vercel_ai__request_types__tooloutputerrorpart"></a>

```json
{
  "type": "string",
  "toolCallId": "string",
  "title": "string",
  "state": "output-error",
  "input": null,
  "rawInput": null,
  "errorText": "string",
  "providerExecuted": true,
  "callProviderMetadata": {
    "property1": {},
    "property2": {}
  },
  "approval": {
    "id": "string"
  }
}
```

Tool part in output-error state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|toolCallId|string|true|none|none|
|title|string \| null|false|none|none|
|state|string|false|none|none|
|input|object \| null|false|none|none|
|rawInput|object \| null|false|none|none|
|errorText|string|true|none|none|
|providerExecuted|boolean \| null|false|none|none|
|callProviderMetadata|object \| null|false|none|none|
|approval|[ToolApprovalRequested](#schematoolapprovalrequested) \| [ToolApprovalResponded](#schematoolapprovalresponded) \| null|false|none|none|

<h2 id="tocS_AgentErrorChunk">AgentErrorChunk</h2>
<!-- backwards compatibility -->
<a id="schemaagenterrorchunk"></a>
<a id="schema_AgentErrorChunk"></a>
<a id="tocSagenterrorchunk"></a>
<a id="tocsagenterrorchunk"></a>

```json
{
  "type": "data-error",
  "id": null,
  "data": {
    "errorText": "string"
  },
  "transient": null
}
```

Durable data part paired with a standard protocol ``error`` chunk.

Standard ``error`` chunks are transient: the reducer routes them to error
callbacks without adding a message part, so they vanish from persisted
transcripts. Pairing each one with this ``data-error`` part records the
error durably in the message for persistence, reload, and subagents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|id|string \| null|false|none|none|
|data|[AgentErrorData](#schemaagenterrordata)|true|none|Payload of the durable ``data-error`` part persisted for protocol errors.|
|transient|boolean \| null|false|none|none|

<h2 id="tocS_AgentErrorData">AgentErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaagenterrordata"></a>
<a id="schema_AgentErrorData"></a>
<a id="tocSagenterrordata"></a>
<a id="tocsagenterrordata"></a>

```json
{
  "errorText": "string"
}
```

Payload of the durable ``data-error`` part persisted for protocol errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorText|string|true|none|none|

<h2 id="tocS_PhoenixToolCallCallbackProviderMetadata">PhoenixToolCallCallbackProviderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaphoenixtoolcallcallbackprovidermetadata"></a>
<a id="schema_PhoenixToolCallCallbackProviderMetadata"></a>
<a id="tocSphoenixtoolcallcallbackprovidermetadata"></a>
<a id="tocsphoenixtoolcallcallbackprovidermetadata"></a>

```json
{
  "toolExecutionEnvironment": "client",
  "toolInputEmittedAt": null,
  "clientStartedAt": null,
  "clientEndedAt": null,
  "outcome": null
}
```

Shape of the ``phoenix`` namespace the browser returns in
``callProviderMetadata`` on resolved tool parts: the server-stamped fields
plus browser-recorded execution timings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toolExecutionEnvironment|string|true|none|none|
|toolInputEmittedAt|string \| null|false|none|none|
|clientStartedAt|string \| null|false|none|none|
|clientEndedAt|string \| null|false|none|none|
|outcome|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|toolExecutionEnvironment|client|
|toolExecutionEnvironment|server|

<h2 id="tocS_PhoenixToolCallProviderMetadata">PhoenixToolCallProviderMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaphoenixtoolcallprovidermetadata"></a>
<a id="schema_PhoenixToolCallProviderMetadata"></a>
<a id="tocSphoenixtoolcallprovidermetadata"></a>
<a id="tocsphoenixtoolcallprovidermetadata"></a>

```json
{
  "toolExecutionEnvironment": "client",
  "toolInputEmittedAt": null
}
```

Payload Phoenix stamps under the ``phoenix`` namespace of Vercel AI
``providerMetadata`` on tool-call chunks (``tool-input-start`` and
``tool-input-available``).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|toolExecutionEnvironment|string|true|none|none|
|toolInputEmittedAt|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|toolExecutionEnvironment|client|
|toolExecutionEnvironment|server|

<h2 id="tocS_SessionSummaryChunk">SessionSummaryChunk</h2>
<!-- backwards compatibility -->
<a id="schemasessionsummarychunk"></a>
<a id="schema_SessionSummaryChunk"></a>
<a id="tocSsessionsummarychunk"></a>
<a id="tocssessionsummarychunk"></a>

```json
{
  "type": "data-session-summary",
  "id": null,
  "data": "string",
  "transient": true
}
```

Transient ``data-session-summary`` stream chunk: the LLM-generated
session title, emitted on any turn that starts with the session still
untitled. Being transient, it reaches the client's ``onData`` callback
but is never appended to the message parts.

See the Vercel AI SDK data stream protocol:
    - Data parts: https://ai-sdk.dev/docs/ai-sdk-ui/stream-protocol#data-parts
    - Transient parts: https://ai-sdk.dev/docs/ai-sdk-ui/streaming-data#transient-data-parts-ephemeral

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|id|string \| null|false|none|none|
|data|string|true|none|none|
|transient|boolean|false|none|none|

<h2 id="tocS_TranscriptPersistedChunk">TranscriptPersistedChunk</h2>
<!-- backwards compatibility -->
<a id="schematranscriptpersistedchunk"></a>
<a id="schema_TranscriptPersistedChunk"></a>
<a id="tocStranscriptpersistedchunk"></a>
<a id="tocstranscriptpersistedchunk"></a>

```json
{
  "type": "data-transcript-persisted",
  "id": null,
  "data": {
    "messageId": "string"
  },
  "transient": true
}
```

Confirms that a streamed assistant message is durable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|id|string \| null|false|none|none|
|data|[TranscriptPersistedData](#schematranscriptpersisteddata)|true|none|none|
|transient|boolean|false|none|none|

<h2 id="tocS_TranscriptPersistedData">TranscriptPersistedData</h2>
<!-- backwards compatibility -->
<a id="schematranscriptpersisteddata"></a>
<a id="schema_TranscriptPersistedData"></a>
<a id="tocStranscriptpersisteddata"></a>
<a id="tocstranscriptpersisteddata"></a>

```json
{
  "messageId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageId|string|true|none|none|
