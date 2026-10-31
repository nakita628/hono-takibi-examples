<h1 id="vtex-do-api">VTEX Do API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

VTEX DO is a task management system for authorized users to process orders. It is possible to control notes, and create, update, list, and retrieve tasks.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br/api/do">https://{accountName}.{environment}.com.br/api/do</a> - VTEX server url

# Authentication

* API Key (appKey)
    - Parameter Name: **X-VTEX-API-AppKey**, in: header.

* API Key (appToken)
    - Parameter Name: **X-VTEX-API-AppToken**, in: header.

<h1 id="vtex-do-api-note">Note</h1>

## Get Notes by orderId

<a id="opIdGetNotesbyorderId"></a>

> Code samples

```bash
curl 'https://example.com/notes?target.id=1172452900788-01' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /notes`

Retrieves notes related to a specific `orderId`.

<h3 id="get-notes-by-orderid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|target.id|query|string|true|ID of the order.|
|perPage|query|integer|false|Number of notes per page. Maximum: 30.|
|page|query|integer|false|Number of the page to be retrieved.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|reason|query|string|false|This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-notes-by-orderid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Note

<a id="opIdNewNote"></a>

> Code samples

```bash
curl https://example.com/notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "description": "Order ID in the marketplace is 786-09.",
    "domain": "oms",
    "target": {
      "id": "v964735bdev-01",
      "type": "order",
      "url": "https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01"
    }
  }'
```

`POST /notes`

This endpoint creates a new note in VTEX DO. Be aware of the following limitations:

- The maximum number of notes for an order is 30.

- The maximum number of characters in a note's description is 2000.

> Body parameter

```json
{
  "description": "Order ID in the marketplace is 786-09.",
  "domain": "oms",
  "target": {
    "id": "v964735bdev-01",
    "type": "order",
    "url": "https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01"
  }
}
```

<h3 id="create-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|body|body|object|false|none|
|» description|body|string|true|Note description. Maximum number of characters: 2000.|
|» domain|body|string|true|Note domain.|
|» target|body|object|true|Target.|
|» » id|body|string|false|Target ID.|
|» » type|body|string|false|Target type.|
|» » url|body|string|false|Target URL.|

> Example responses

> 200 Response

```json
{
  "createdBy": {
    "email": "pedro.costa@vtex.com.br",
    "id": "fb542e51-5488-4c34-8d17-ed8fcf597a94",
    "key": null,
    "name": "pedro.costa@vtex.com.br"
  },
  "creationDate": "2022-01-11T15:49:17.8785392Z",
  "description": "The order's ID in the marketplace is 786-09",
  "domain": "oms",
  "id": "A08CDB2519AC4FA49EB6099CF72C3642",
  "lastUpdate": "2022-01-11T15:49:17.8785392Z",
  "owner": "c97ef6c8491a439f927cf9918644329f",
  "target": {
    "id": "v964735bdev-01",
    "type": "order",
    "url": "https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01"
  }
}
```

<h3 id="create-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Note

<a id="opIdGetNote"></a>

> Code samples

```bash
curl https://example.com/notes/654321cba \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /notes/{noteId}`

Retrieves a given note in VTEX DO, filtering by `noteId`.

<h3 id="retrieve-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|noteId|path|string|true|Note's ID.|
|reason|query|string|false|This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

<h1 id="vtex-do-api-task">Task</h1>

## List tasks

<a id="opIdListtasksbyassignee"></a>

> Code samples

```bash
curl https://example.com/tasks \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /tasks`

This endpoint allows you to filter tasks. You can choose between the following filtering options: 

- **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`. 

- **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`. 

- **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`. 

- **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.

<h3 id="list-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assignee.email|query|string|false|If you wish to list tasks by assignee, insert the desired assignee's email and status.|
|target.id|query|string|false|If you wish to list tasks by target, insert the desired `targetId` and `status`.|
|context|query|string|false|If you wish to list tasks by context, insert the desired context, `page`, `perPage` and `status`.|
|page|query|string|false|If you wish to list tasks by context, also insert the desired `page`.|
|perPage|query|string|false|If you wish to list tasks by context, also insert the desired `perPage` value.|
|status|query|string|false|If you wish to list tasks by context, also insert the desired `status`.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="list-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Create Task

<a id="opIdNewTask"></a>

> Code samples

```bash
curl https://example.com/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "assignee": {
      "email": "frederico.santos@vtex.com.br",
      "id": null,
      "name": null
    },
    "context": "Marketplace",
    "description": "Ajudar na doc API para lancar no postman",
    "domain": "oms",
    "dueDate": "2016-03-01",
    "followers": [
      {
        "email": "alan.dantas@vtex.com.br",
        "id": null,
        "name": null
      }
    ],
    "name": "pricing",
    "parentTaskId": null,
    "priority": "Critical",
    "surrogateKey": "505224-0",
    "target": [
      {
        "id": "633730670642-01",
        "type": "order",
        "url": "https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01"
      }
    ]
  }'
```

`POST /tasks`

Creates a new task in VTEX DO.

> Body parameter

```json
{
  "assignee": {
    "email": "frederico.santos@vtex.com.br",
    "id": null,
    "name": null
  },
  "context": "Marketplace",
  "description": "Ajudar na doc API para lancar no postman",
  "domain": "oms",
  "dueDate": "2016-03-01",
  "followers": [
    {
      "email": "alan.dantas@vtex.com.br",
      "id": null,
      "name": null
    }
  ],
  "name": "pricing",
  "parentTaskId": null,
  "priority": "Critical",
  "surrogateKey": "505224-0",
  "target": [
    {
      "id": "633730670642-01",
      "type": "order",
      "url": "https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01"
    }
  ]
}
```

<h3 id="create-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Type of the content being sent.|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|body|body|[NewTaskRequest](#schemanewtaskrequest)|true|none|
|» assignee|body|[Assignee](#schemaassignee)|true|none|
|» context|body|string|true|none|
|» description|body|string|true|none|
|» domain|body|string|true|none|
|» dueDate|body|string|true|none|
|» followers|body|[[Follower](#schemafollower)]|true|none|
|» name|body|string|true|none|
|» parentTaskId|body|string \| null|true|none|
|» priority|body|string|true|none|
|» surrogateKey|body|string|true|none|
|» target|body|[[Target](#schematarget)]|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="create-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Retrieve Task

<a id="opIdGetTask"></a>

> Code samples

```bash
curl https://example.com/tasks/123456abc \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}"
```

`GET /tasks/{taskId}`

Retrieves a given task, filtering by `taskId`.

<h3 id="retrieve-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|taskId|path|string|true|Task ID.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Update Task

<a id="opIdEditTask"></a>

> Code samples

```bash
curl https://example.com/tasks/123456abc \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "status": "InProgress"
  }'
```

`PUT /tasks/{taskId}`

Updates a given task's status, for example, filtering by `taskId`.

> Body parameter

```json
{
  "status": "InProgress"
}
```

<h3 id="update-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|taskId|path|string|true|Task ID.|
|body|body|[EditTaskRequest](#schemaedittaskrequest)|true|none|
|» status|body|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="update-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

## Add Comment on a Task

<a id="opIdAddComment"></a>

> Code samples

```bash
curl https://example.com/tasks/123456abc/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-VTEX-API-AppKey: ${API_KEY}" \
  -H "X-VTEX-API-AppToken: ${API_KEY}" \
  -d '{
    "text": "write your comment here"
  }'
```

`POST /tasks/{taskId}/comments`

Adds a comment to a given task, filtering by `taskId`.

> Body parameter

```json
{
  "text": "write your comment here"
}
```

<h3 id="add-comment-on-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.|
|Content-Type|header|string|true|Type of the content being sent.|
|taskId|path|string|true|Task ID.|
|body|body|[AddCommentRequest](#schemaaddcommentrequest)|true|none|
|» text|body|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="add-comment-on-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
appKey & appToken
</aside>

# Schemas

<h2 id="tocS_AddCommentRequest">AddCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddcommentrequest"></a>
<a id="schema_AddCommentRequest"></a>
<a id="tocSaddcommentrequest"></a>
<a id="tocsaddcommentrequest"></a>

```json
{
  "text": "escreva seu comentário"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|none|

<h2 id="tocS_Assignee">Assignee</h2>
<!-- backwards compatibility -->
<a id="schemaassignee"></a>
<a id="schema_Assignee"></a>
<a id="tocSassignee"></a>
<a id="tocsassignee"></a>

```json
{
  "email": "frederico.santos@vtex.com.br",
  "id": null,
  "name": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|id|string \| null|true|none|none|
|name|string \| null|true|none|none|

<h2 id="tocS_EditTaskRequest">EditTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaedittaskrequest"></a>
<a id="schema_EditTaskRequest"></a>
<a id="tocSedittaskrequest"></a>
<a id="tocsedittaskrequest"></a>

```json
{
  "status": "InProgress"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

<h2 id="tocS_Follower">Follower</h2>
<!-- backwards compatibility -->
<a id="schemafollower"></a>
<a id="schema_Follower"></a>
<a id="tocSfollower"></a>
<a id="tocsfollower"></a>

```json
{
  "email": "alan.dantas@vtex.com.br",
  "id": null,
  "name": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|id|string \| null|true|none|none|
|name|string \| null|true|none|none|

<h2 id="tocS_NewNoteRequest">NewNoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewnoterequest"></a>
<a id="schema_NewNoteRequest"></a>
<a id="tocSnewnoterequest"></a>
<a id="tocsnewnoterequest"></a>

```json
{
  "description": "string",
  "domain": "string",
  "target": {
    "id": "string",
    "type": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|domain|string|true|none|none|
|target|object|true|none|Target.|

<h2 id="tocS_NewTaskRequest">NewTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewtaskrequest"></a>
<a id="schema_NewTaskRequest"></a>
<a id="tocSnewtaskrequest"></a>
<a id="tocsnewtaskrequest"></a>

```json
{
  "assignee": {
    "email": "frederico.santos@vtex.com.br",
    "id": null,
    "name": null
  },
  "context": "Marketplace",
  "description": "Ajudar na doc API para lancar no postman",
  "domain": "oms",
  "dueDate": "2016-03-01",
  "followers": [
    {
      "email": "alan.dantas@vtex.com.br",
      "id": null,
      "name": null
    }
  ],
  "name": "pricing",
  "parentTaskId": null,
  "priority": "Critical",
  "surrogateKey": "505224-0",
  "target": [
    {
      "id": "633730670642-01",
      "type": "order",
      "url": "https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignee|[Assignee](#schemaassignee)|true|none|none|
|context|string|true|none|none|
|description|string|true|none|none|
|domain|string|true|none|none|
|dueDate|string|true|none|none|
|followers|[[Follower](#schemafollower)]|true|none|none|
|name|string|true|none|none|
|parentTaskId|string \| null|true|none|none|
|priority|string|true|none|none|
|surrogateKey|string|true|none|none|
|target|[[Target](#schematarget)]|true|none|none|

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
{
  "id": "v964735bdev-01",
  "type": "order",
  "url": "https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|type|string|true|none|none|
|url|string|true|none|none|
