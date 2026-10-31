<h1 id="scaffolder">scaffolder v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Software Templates API lets you inspect templates and installed actions,
run templates, and monitor tasks. Endpoints are grouped by functionality below.

All paths are relative to the Scaffolder backend base URL, which is typically
your `backend.baseUrl` plus `/api/scaffolder`. For example, the actions endpoint
is `http://localhost:7007/api/scaffolder/v2/actions` during local development.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache-2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="scaffolder-templates">Templates</h1>

Inspect template parameters and test templates with a dry run.

## GetTemplateParameterSchema

<a id="opIdGetTemplateParameterSchema"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/templates/string/string/string/parameter-schema \
  -H 'Accept: application/json'
```

`GET /v2/templates/{namespace}/{kind}/{name}/parameter-schema`

Get template parameter schema.

<h3 id="gettemplateparameterschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespace|path|string|true|none|
|kind|path|string|true|none|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "title": "string",
  "description": "string",
  "steps": [
    {
      "title": "string",
      "description": "string",
      "schema": {}
    }
  ],
  "property1": null,
  "property2": null
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="gettemplateparameterschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[TemplateParameterSchema](#schematemplateparameterschema)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## DryRun

<a id="opIdDryRun"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/dry-run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "template": {},
    "values": {
      "property1": null,
      "property2": null
    },
    "secrets": {
      "property1": "string",
      "property2": "string"
    },
    "directoryContents": [
      {
        "path": "string",
        "base64Content": "string"
      }
    ]
  }'
```

`POST /v2/dry-run`

Perform a dry-run of a template

> Body parameter

```json
{
  "template": {},
  "values": {
    "property1": null,
    "property2": null
  },
  "secrets": {
    "property1": "string",
    "property2": "string"
  },
  "directoryContents": [
    {
      "path": "string",
      "base64Content": "string"
    }
  ]
}
```

<h3 id="dryrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» template|body|object|true|none|
|» values|body|[JsonObject](#schemajsonobject)|true|A type representing all allowed JSON object values.|
|» secrets|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» directoryContents|body|[object]|true|none|
|» » path|body|string|false|none|
|» » base64Content|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "log": [
    {
      "body": {
        "property1": null,
        "property2": null,
        "message": "string",
        "status": "cancelled",
        "stepId": "string"
      }
    }
  ],
  "directoryContents": [
    {
      "path": "string",
      "executable": true,
      "base64Content": "string"
    }
  ],
  "output": {
    "property1": null,
    "property2": null
  },
  "steps": [
    {
      "id": "string",
      "name": "string",
      "action": "string",
      "property1": null,
      "property2": null
    }
  ]
}
```

> 400 Response

```json
{
  "errors": [
    {
      "path": [
        "string"
      ],
      "property": "string",
      "message": "string",
      "instance": {},
      "name": "string",
      "argument": true,
      "stack": "string",
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="dryrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|
|400|Bad Request|Validation errors.|Inline|

<h3 id="dryrun-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log|[object]|true|none|none|
|» body|object|true|none|none|
|» » **additionalProperties**|object|false|none|none|
|» » message|string|true|none|none|
|» » status|[TaskStatus](#schemataskstatus)|false|none|The status of each step of the Task|
|» » stepId|string|false|none|none|
|directoryContents|[[SerializedFile](#schemaserializedfile)]|true|none|none|
|output|[JsonObject](#schemajsonobject)|true|none|A type representing all allowed JSON object values.|
|steps|[object]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|
|» action|string|true|none|none|
|» **additionalProperties**|object|false|none|none|
|directoryContents|[object]|true|none|none|
|» path|string|true|none|none|
|» executable|boolean|false|none|none|
|» base64Content|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » status|cancelled|
|» » status|completed|
|» » status|failed|
|» » status|open|
|» » status|processing|
|» » status|skipped|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ValidationError](#schemavalidationerror)]|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="scaffolder-tasks">Tasks</h1>

Create, list, inspect, cancel, and retry tasks, and retrieve task events.

## ListTasks

<a id="opIdListTasks"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/tasks \
  -H 'Accept: application/json'
```

`GET /v2/tasks`

Returns a list of tasks, filtering by ownership and/or status if given.

<h3 id="listtasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|createdBy|query|[string]|false|Created by|
|limit|query|integer|false|Number of records to return in the response.|
|offset|query|integer|false|Number of records to skip in the query page.|
|order|query|[string]|false|Order|
|status|query|[string]|false|Status|

> Example responses

> 200 Response

```json
{
  "tasks": [
    {
      "id": "string",
      "spec": {},
      "status": "cancelled",
      "createdAt": "string",
      "lastHeartbeatAt": "string",
      "createdBy": "string"
    }
  ],
  "totalTasks": 0
}
```

> 400 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="listtasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[ListTasksResponse](#schemalisttasksresponse)|
|400|Bad Request|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## Scaffold

<a id="opIdScaffold"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "templateRef": "string",
    "values": {
      "property1": null,
      "property2": null
    },
    "secrets": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v2/tasks`

Executes the scaffolding of a component, given a template and its
parameter values.

> Body parameter

```json
{
  "templateRef": "string",
  "values": {
    "property1": null,
    "property2": null
  },
  "secrets": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="scaffold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScaffolderScaffoldOptions](#schemascaffolderscaffoldoptions)|true|none|
|» templateRef|body|string|true|none|
|» values|body|object|true|none|
|» » **additionalProperties**|body|object|false|none|
|» secrets|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "path": [
        "string"
      ],
      "property": "string",
      "message": "string",
      "instance": {},
      "name": "string",
      "argument": true,
      "stack": "string",
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="scaffold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|Inline|
|400|Bad Request|Validation errors.|Inline|

<h3 id="scaffold-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ValidationError](#schemavalidationerror)]|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## GetTask

<a id="opIdGetTask"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/tasks/string \
  -H 'Accept: application/json'
```

`GET /v2/tasks/{taskId}`

Get a task by ID.

<h3 id="gettask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "spec": {},
  "status": "cancelled",
  "createdAt": "string",
  "lastHeartbeatAt": "string",
  "createdBy": "string"
}
```

> 403 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="gettask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[SerializedTask](#schemaserializedtask)|
|403|Forbidden|An error response from the backend.|[Error](#schemaerror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## CancelTask

<a id="opIdCancelTask"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/tasks/string/cancel \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/tasks/{taskId}/cancel`

Sends a signal to a task broker to cancel the running task by taskId.

<h3 id="canceltask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "cancelled"
}
```

<h3 id="canceltask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|

<h3 id="canceltask-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[TaskStatus](#schemataskstatus)|false|none|The status of each step of the Task|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|completed|
|status|failed|
|status|open|
|status|processing|
|status|skipped|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## Retry

<a id="opIdRetry"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/tasks/string/retry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "secrets": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v2/tasks/{taskId}/retry`

Starts the task again from the point where it failed.

> Body parameter

```json
{
  "secrets": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="retry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|none|
|body|body|object|false|none|
|» secrets|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
{
  "errors": [
    {
      "path": [
        "string"
      ],
      "property": "string",
      "message": "string",
      "instance": {},
      "name": "string",
      "argument": true,
      "stack": "string",
      "property1": null,
      "property2": null
    }
  ]
}
```

> 409 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="retry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Ok|Inline|
|400|Bad Request|Validation errors.|Inline|
|409|Conflict|An error response from the backend.|[Error](#schemaerror)|

<h3 id="retry-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ValidationError](#schemavalidationerror)]|true|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

## StreamLogsPolling

<a id="opIdStreamLogsPolling"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/tasks/string/events \
  -H 'Accept: application/json'
```

`GET /v2/tasks/{taskId}/events`

Get events for a task by ID.

<h3 id="streamlogspolling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|integer|false|Offset event ID to stream events after.|
|taskId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "isTaskRecoverable": true,
    "taskId": "string",
    "body": {
      "property1": null,
      "property2": null,
      "message": "string",
      "status": "cancelled",
      "stepId": "string"
    },
    "type": "cancelled",
    "createdAt": "string"
  }
]
```

> 403 Response

```json
{
  "error": {
    "name": "string",
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

<h3 id="streamlogspolling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|
|403|Forbidden|An error response from the backend.|[Error](#schemaerror)|

<h3 id="streamlogspolling-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SerializedTaskEvent](#schemaserializedtaskevent)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="scaffolder-actions">Actions</h1>

List installed template actions.

## ListActions

<a id="opIdListActions"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/actions \
  -H 'Accept: application/json'
```

`GET /v2/actions`

Returns a list of all installed actions.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "description": "string",
    "examples": [
      {
        "description": "string",
        "example": "string"
      }
    ],
    "schema": {
      "input": {
        "property1": null,
        "property2": null
      },
      "output": {
        "property1": null,
        "property2": null
      }
    }
  }
]
```

<h3 id="listactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[ListActionsResponse](#schemalistactionsresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

<h1 id="scaffolder-autocomplete-providers">Autocomplete providers</h1>

Retrieve autocomplete suggestions from registered providers.

## Autocomplete

<a id="opIdAutocomplete"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/autocomplete/string/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": {
      "property1": "string",
      "property2": "string"
    },
    "token": "string"
  }'
```

`POST /v2/autocomplete/{provider}/{resource}`

Perform an autocomplete for the given provider and resource.

> Body parameter

```json
{
  "context": {
    "property1": "string",
    "property2": "string"
  },
  "token": "string"
}
```

<h3 id="autocomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|
|resource|path|string|true|none|
|body|body|object|true|none|
|» context|body|object|true|none|
|» » **additionalProperties**|body|string|false|none|
|» token|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "title": "string",
      "id": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "string",
  "name": "string"
}
```

<h3 id="autocomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|
|400|Bad Request|Unsupported provider.|Inline|

<h3 id="autocomplete-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|» title|string|false|none|none|
|» id|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|name|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="scaffolder-templating-extensions">Templating extensions</h1>

List available template filters and global functions and values.

## ListTemplatingExtensions

<a id="opIdListTemplatingExtensions"></a>

> Code samples

```bash
curl http://localhost:7007/api/scaffolder/v2/templating-extensions \
  -H 'Accept: application/json'
```

`GET /v2/templating-extensions`

Returns a structure describing the available templating extensions.

> Example responses

> 200 Response

```json
{
  "filters": {
    "property1": {
      "description": "string",
      "schema": {
        "input": {
          "property1": null,
          "property2": null
        },
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "output": {
          "property1": null,
          "property2": null
        }
      },
      "examples": [
        {
          "description": "string",
          "example": "string",
          "notes": "string"
        }
      ]
    },
    "property2": {
      "description": "string",
      "schema": {
        "input": {
          "property1": null,
          "property2": null
        },
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "output": {
          "property1": null,
          "property2": null
        }
      },
      "examples": [
        {
          "description": "string",
          "example": "string",
          "notes": "string"
        }
      ]
    }
  },
  "globals": {
    "functions": {
      "property1": {
        "description": "string",
        "schema": {
          "arguments": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "output": {
            "property1": null,
            "property2": null
          }
        },
        "examples": [
          {
            "description": "string",
            "example": "string",
            "notes": "string"
          }
        ]
      },
      "property2": {
        "description": "string",
        "schema": {
          "arguments": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "output": {
            "property1": null,
            "property2": null
          }
        },
        "examples": [
          {
            "description": "string",
            "example": "string",
            "notes": "string"
          }
        ]
      }
    },
    "values": {
      "property1": {
        "description": "string",
        "value": {}
      },
      "property2": {
        "description": "string",
        "value": {}
      }
    }
  }
}
```

<h3 id="listtemplatingextensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|[ListTemplatingExtensionsResponse](#schemalisttemplatingextensionsresponse)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "id": "string",
  "description": "string",
  "examples": [
    {
      "description": "string",
      "example": "string"
    }
  ],
  "schema": {
    "input": {
      "property1": null,
      "property2": null
    },
    "output": {
      "property1": null,
      "property2": null
    }
  }
}
```

The response shape for a single action in the `listActions` call to the `scaffolder-backend`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|description|string|false|none|none|
|examples|[[ActionExample](#schemaactionexample)]|false|none|none|
|schema|object|false|none|none|

<h2 id="tocS_ActionExample">ActionExample</h2>
<!-- backwards compatibility -->
<a id="schemaactionexample"></a>
<a id="schema_ActionExample"></a>
<a id="tocSactionexample"></a>
<a id="tocsactionexample"></a>

```json
{
  "description": "string",
  "example": "string"
}
```

A single action example

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|example|string|true|none|none|

<h2 id="tocS_DryRunResult">DryRunResult</h2>
<!-- backwards compatibility -->
<a id="schemadryrunresult"></a>
<a id="schema_DryRunResult"></a>
<a id="tocSdryrunresult"></a>
<a id="tocsdryrunresult"></a>

```json
{
  "log": [
    {
      "body": {
        "property1": null,
        "property2": null,
        "message": "string",
        "status": "cancelled",
        "stepId": "string"
      }
    }
  ],
  "directoryContents": [
    {
      "path": "string",
      "content": "string",
      "executable": true,
      "symlink": true
    }
  ],
  "output": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log|[object]|true|none|none|
|directoryContents|[[SerializedFile](#schemaserializedfile)]|true|none|none|
|output|[JsonObject](#schemajsonobject)|true|none|A type representing all allowed JSON object values.|

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
    "message": "string",
    "stack": "string",
    "code": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  },
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|request|object|false|none|none|
|response|object|true|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_JsonArray">JsonArray</h2>
<!-- backwards compatibility -->
<a id="schemajsonarray"></a>
<a id="schema_JsonArray"></a>
<a id="tocSjsonarray"></a>
<a id="tocsjsonarray"></a>

```json
[
  {
    "property1": null,
    "property2": null
  }
]
```

A type representing all allowed JSON array values.

<h2 id="tocS_JsonObject">JsonObject</h2>
<!-- backwards compatibility -->
<a id="schemajsonobject"></a>
<a id="schema_JsonObject"></a>
<a id="tocSjsonobject"></a>
<a id="tocsjsonobject"></a>

```json
{
  "property1": null,
  "property2": null
}
```

A type representing all allowed JSON object values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_JsonPrimitive">JsonPrimitive</h2>
<!-- backwards compatibility -->
<a id="schemajsonprimitive"></a>
<a id="schema_JsonPrimitive"></a>
<a id="tocSjsonprimitive"></a>
<a id="tocsjsonprimitive"></a>

```json
true
```

A type representing all allowed JSON primitive values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|boolean|false|none|none|
|*oneOf*|number|false|none|none|
|*oneOf*|string|false|none|none|
|*oneOf*|null|false|none|none|

<h2 id="tocS_JsonValue">JsonValue</h2>
<!-- backwards compatibility -->
<a id="schemajsonvalue"></a>
<a id="schema_JsonValue"></a>
<a id="tocSjsonvalue"></a>
<a id="tocsjsonvalue"></a>

```json
{
  "property1": null,
  "property2": null
}
```

A type representing all allowed JSON values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[JsonObject](#schemajsonobject)|false|none|A type representing all allowed JSON object values.|
|*oneOf*|[JsonArray](#schemajsonarray)|false|none|A type representing all allowed JSON array values.|
|*oneOf*|[JsonPrimitive](#schemajsonprimitive)|false|none|A type representing all allowed JSON primitive values.|

<h2 id="tocS_ListActionsResponse">ListActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactionsresponse"></a>
<a id="schema_ListActionsResponse"></a>
<a id="tocSlistactionsresponse"></a>
<a id="tocslistactionsresponse"></a>

```json
[
  {
    "id": "string",
    "description": "string",
    "examples": [
      {
        "description": "string",
        "example": "string"
      }
    ],
    "schema": {
      "input": {
        "property1": null,
        "property2": null
      },
      "output": {
        "property1": null,
        "property2": null
      }
    }
  }
]
```

The response shape for the `listActions` call to the `scaffolder-backend`

<h2 id="tocS_ListTasksResponse">ListTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksresponse"></a>
<a id="schema_ListTasksResponse"></a>
<a id="tocSlisttasksresponse"></a>
<a id="tocslisttasksresponse"></a>

```json
{
  "tasks": [
    {
      "id": "string",
      "spec": {},
      "status": "cancelled",
      "createdAt": "string",
      "lastHeartbeatAt": "string",
      "createdBy": "string"
    }
  ],
  "totalTasks": 0
}
```

The response shape for the `listTasks` call to the `scaffolder-backend`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|[[SerializedTask](#schemaserializedtask)]|true|none|none|
|totalTasks|number|false|none|none|

<h2 id="tocS_ListTemplatingExtensionsResponse">ListTemplatingExtensionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplatingextensionsresponse"></a>
<a id="schema_ListTemplatingExtensionsResponse"></a>
<a id="tocSlisttemplatingextensionsresponse"></a>
<a id="tocslisttemplatingextensionsresponse"></a>

```json
{
  "filters": {
    "property1": {
      "description": "string",
      "schema": {
        "input": {
          "property1": null,
          "property2": null
        },
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "output": {
          "property1": null,
          "property2": null
        }
      },
      "examples": [
        {
          "description": "string",
          "example": "string",
          "notes": "string"
        }
      ]
    },
    "property2": {
      "description": "string",
      "schema": {
        "input": {
          "property1": null,
          "property2": null
        },
        "arguments": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "output": {
          "property1": null,
          "property2": null
        }
      },
      "examples": [
        {
          "description": "string",
          "example": "string",
          "notes": "string"
        }
      ]
    }
  },
  "globals": {
    "functions": {
      "property1": {
        "description": "string",
        "schema": {
          "arguments": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "output": {
            "property1": null,
            "property2": null
          }
        },
        "examples": [
          {
            "description": "string",
            "example": "string",
            "notes": "string"
          }
        ]
      },
      "property2": {
        "description": "string",
        "schema": {
          "arguments": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "output": {
            "property1": null,
            "property2": null
          }
        },
        "examples": [
          {
            "description": "string",
            "example": "string",
            "notes": "string"
          }
        ]
      }
    },
    "values": {
      "property1": {
        "description": "string",
        "value": {}
      },
      "property2": {
        "description": "string",
        "value": {}
      }
    }
  }
}
```

The response shape for the `listTemplatingExtensions` call to the `scaffolder-backend`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|none|
|globals|object|true|none|none|

<h2 id="tocS_ScaffolderScaffoldOptions">ScaffolderScaffoldOptions</h2>
<!-- backwards compatibility -->
<a id="schemascaffolderscaffoldoptions"></a>
<a id="schema_ScaffolderScaffoldOptions"></a>
<a id="tocSscaffolderscaffoldoptions"></a>
<a id="tocsscaffolderscaffoldoptions"></a>

```json
{
  "templateRef": "string",
  "values": {
    "property1": null,
    "property2": null
  },
  "secrets": {
    "property1": "string",
    "property2": "string"
  }
}
```

The input options to the `scaffold` method of the `ScaffolderClient`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateRef|string|true|none|none|
|values|object|true|none|none|
|secrets|object|false|none|none|

<h2 id="tocS_ScaffolderUsageExample">ScaffolderUsageExample</h2>
<!-- backwards compatibility -->
<a id="schemascaffolderusageexample"></a>
<a id="schema_ScaffolderUsageExample"></a>
<a id="tocSscaffolderusageexample"></a>
<a id="tocsscaffolderusageexample"></a>

```json
{
  "description": "string",
  "example": "string",
  "notes": "string"
}
```

A single scaffolder usage example

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|example|string|true|none|none|
|notes|string|false|none|none|

<h2 id="tocS_SerializedFile">SerializedFile</h2>
<!-- backwards compatibility -->
<a id="schemaserializedfile"></a>
<a id="schema_SerializedFile"></a>
<a id="tocSserializedfile"></a>
<a id="tocsserializedfile"></a>

```json
{
  "path": "string",
  "content": "string",
  "executable": true,
  "symlink": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|content|string|true|none|none|
|executable|boolean|false|none|none|
|symlink|boolean|false|none|none|

<h2 id="tocS_SerializedTaskEvent">SerializedTaskEvent</h2>
<!-- backwards compatibility -->
<a id="schemaserializedtaskevent"></a>
<a id="schema_SerializedTaskEvent"></a>
<a id="tocSserializedtaskevent"></a>
<a id="tocsserializedtaskevent"></a>

```json
{
  "id": 0,
  "isTaskRecoverable": true,
  "taskId": "string",
  "body": {
    "property1": null,
    "property2": null,
    "message": "string",
    "status": "cancelled",
    "stepId": "string"
  },
  "type": "cancelled",
  "createdAt": "string"
}
```

SerializedTaskEvent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|isTaskRecoverable|boolean|false|none|none|
|taskId|string|true|none|none|
|body|object|true|none|none|
|type|[TaskEventType](#schemataskeventtype)|true|none|TaskEventType|
|createdAt|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cancelled|
|type|completion|
|type|log|
|type|recovered|

<h2 id="tocS_SerializedTask">SerializedTask</h2>
<!-- backwards compatibility -->
<a id="schemaserializedtask"></a>
<a id="schema_SerializedTask"></a>
<a id="tocSserializedtask"></a>
<a id="tocsserializedtask"></a>

```json
{
  "id": "string",
  "spec": {},
  "status": "cancelled",
  "createdAt": "string",
  "lastHeartbeatAt": "string",
  "createdBy": "string"
}
```

SerializedTask

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|spec|object|true|none|none|
|status|[TaskStatus](#schemataskstatus)|true|none|The status of each step of the Task|
|createdAt|string|true|none|none|
|lastHeartbeatAt|string|false|none|none|
|createdBy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|cancelled|
|status|completed|
|status|failed|
|status|open|
|status|processing|
|status|skipped|

<h2 id="tocS_TaskEventType">TaskEventType</h2>
<!-- backwards compatibility -->
<a id="schemataskeventtype"></a>
<a id="schema_TaskEventType"></a>
<a id="tocStaskeventtype"></a>
<a id="tocstaskeventtype"></a>

```json
"cancelled"
```

TaskEventType

<h2 id="tocS_TaskSecrets">TaskSecrets</h2>
<!-- backwards compatibility -->
<a id="schematasksecrets"></a>
<a id="schema_TaskSecrets"></a>
<a id="tocStasksecrets"></a>
<a id="tocstasksecrets"></a>

```json
{
  "property1": "string",
  "property2": "string",
  "backstageToken": "string"
}
```

TaskSecrets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|
|backstageToken|string|false|none|none|

<h2 id="tocS_TaskStatus">TaskStatus</h2>
<!-- backwards compatibility -->
<a id="schemataskstatus"></a>
<a id="schema_TaskStatus"></a>
<a id="tocStaskstatus"></a>
<a id="tocstaskstatus"></a>

```json
"cancelled"
```

The status of each step of the Task

<h2 id="tocS_TemplateGlobalFunction">TemplateGlobalFunction</h2>
<!-- backwards compatibility -->
<a id="schematemplateglobalfunction"></a>
<a id="schema_TemplateGlobalFunction"></a>
<a id="tocStemplateglobalfunction"></a>
<a id="tocstemplateglobalfunction"></a>

```json
{
  "description": "string",
  "schema": {
    "arguments": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "output": {
      "property1": null,
      "property2": null
    }
  },
  "examples": [
    {
      "description": "string",
      "example": "string",
      "notes": "string"
    }
  ]
}
```

The response shape for a single global function in the `listTemplatingExtensions` call to the `scaffolder-backend`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|schema|object|false|none|none|
|examples|[[ScaffolderUsageExample](#schemascaffolderusageexample)]|false|none|none|

<h2 id="tocS_TemplateGlobalValue">TemplateGlobalValue</h2>
<!-- backwards compatibility -->
<a id="schematemplateglobalvalue"></a>
<a id="schema_TemplateGlobalValue"></a>
<a id="tocStemplateglobalvalue"></a>
<a id="tocstemplateglobalvalue"></a>

```json
{
  "description": "string",
  "value": {}
}
```

The response shape for a single global value in the `listTemplatingExtensions` call to the `scaffolder-backend`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|value|object \| null|true|none|none|

<h2 id="tocS_TemplateFilter">TemplateFilter</h2>
<!-- backwards compatibility -->
<a id="schematemplatefilter"></a>
<a id="schema_TemplateFilter"></a>
<a id="tocStemplatefilter"></a>
<a id="tocstemplatefilter"></a>

```json
{
  "description": "string",
  "schema": {
    "input": {
      "property1": null,
      "property2": null
    },
    "arguments": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "output": {
      "property1": null,
      "property2": null
    }
  },
  "examples": [
    {
      "description": "string",
      "example": "string",
      "notes": "string"
    }
  ]
}
```

The response shape for a single filter in the `listTemplatingExtensions` call to the `scaffolder-backend`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|schema|object|false|none|none|
|examples|[[ScaffolderUsageExample](#schemascaffolderusageexample)]|false|none|none|

<h2 id="tocS_TemplateParameterSchema">TemplateParameterSchema</h2>
<!-- backwards compatibility -->
<a id="schematemplateparameterschema"></a>
<a id="schema_TemplateParameterSchema"></a>
<a id="tocStemplateparameterschema"></a>
<a id="tocstemplateparameterschema"></a>

```json
{
  "title": "string",
  "description": "string",
  "steps": [
    {
      "title": "string",
      "description": "string",
      "schema": {}
    }
  ],
  "property1": null,
  "property2": null
}
```

The shape of each entry of parameters which gets rendered
as a separate step in the wizard input

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|description|string|false|none|none|
|steps|[object]|true|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "path": [
    "string"
  ],
  "property": "string",
  "message": "string",
  "instance": {},
  "name": "string",
  "argument": true,
  "stack": "string",
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|[string \| integer]|true|none|none|
|property|string|true|none|none|
|message|string|true|none|none|
|instance|object|true|none|none|
|name|string|true|none|none|
|argument|boolean \| number \| object \| string|true|none|none|
|stack|string|true|none|none|
|**additionalProperties**|object|false|none|none|
