<h1 id="meilisearch">meilisearch v1.15.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Meilisearch HTTP server

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a> - Local server

Email: <a href="mailto:quentin@dequelen.me">Quentin de Quelen</a> 
License: MIT

# Authentication

- HTTP Authentication, scheme: bearer An API key is a token that you provide when making API calls. Include the token in a header parameter called `Authorization`.
Example: `Authorization: Bearer 8fece4405662dd830e4cb265e7e047aab2e79672a760a12712d2a263c9003509`

<h1 id="meilisearch-stats">Stats</h1>

Stats gives extended information and metrics about indexes and the Meilisearch database.

## Get stats of index

<a id="opIdget_index_stats"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/stats`

Get the stats of an index.

<h3 id="get-stats-of-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{
  "numberOfDocuments": 10,
  "rawDocumentDbSize": 10,
  "avgDocumentSize": 10,
  "numberOfEmbeddings": 10,
  "numberOfEmbeddedDocuments": 10,
  "isIndexing": true,
  "fieldDistribution": {
    "genre": 10,
    "author": 9
  }
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="get-stats-of-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stats of the index|[IndexStats](#schemaindexstats)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get prometheus metrics

<a id="opIdget_metrics"></a>

> Code samples

```bash
curl http://localhost:7700/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /metrics`

Retrieve metrics on the engine. See https://www.meilisearch.com/docs/learn/experimental/metrics
Currently, [the feature is experimental](https://www.meilisearch.com/docs/learn/experimental/overview)
which means it must be enabled.

> Example responses

> 200 Response

```text

# HELP meilisearch_db_size_bytes Meilisearch DB Size In Bytes
# TYPE meilisearch_db_size_bytes gauge
meilisearch_db_size_bytes 1130496
# HELP meilisearch_http_requests_total Meilisearch HTTP requests total
# TYPE meilisearch_http_requests_total counter
meilisearch_http_requests_total{method="GET",path="/metrics",status="400"} 1
meilisearch_http_requests_total{method="PATCH",path="/experimental-features",status="200"} 1
# HELP meilisearch_http_response_time_seconds Meilisearch HTTP response times
# TYPE meilisearch_http_response_time_seconds histogram
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.005"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.01"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.025"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.05"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.075"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.1"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.25"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.5"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.75"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="1"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="2.5"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="5"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="7.5"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="10"} 0
meilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="+Inf"} 0
meilisearch_http_response_time_seconds_sum{method="GET",path="/metrics"} 0
meilisearch_http_response_time_seconds_count{method="GET",path="/metrics"} 0
# HELP meilisearch_index_count Meilisearch Index Count
# TYPE meilisearch_index_count gauge
meilisearch_index_count 1
# HELP meilisearch_index_docs_count Meilisearch Index Docs Count
# TYPE meilisearch_index_docs_count gauge
meilisearch_index_docs_count{index="mieli"} 2
# HELP meilisearch_is_indexing Meilisearch Is Indexing
# TYPE meilisearch_is_indexing gauge
meilisearch_is_indexing 0
# HELP meilisearch_last_update Meilisearch Last Update
# TYPE meilisearch_last_update gauge
meilisearch_last_update 1726675964
# HELP meilisearch_nb_tasks Meilisearch Number of tasks
# TYPE meilisearch_nb_tasks gauge
meilisearch_nb_tasks{kind="indexes",value="mieli"} 39
meilisearch_nb_tasks{kind="statuses",value="canceled"} 0
meilisearch_nb_tasks{kind="statuses",value="enqueued"} 0
meilisearch_nb_tasks{kind="statuses",value="failed"} 4
meilisearch_nb_tasks{kind="statuses",value="processing"} 0
meilisearch_nb_tasks{kind="statuses",value="succeeded"} 35
meilisearch_nb_tasks{kind="types",value="documentAdditionOrUpdate"} 9
meilisearch_nb_tasks{kind="types",value="documentDeletion"} 0
meilisearch_nb_tasks{kind="types",value="documentEdition"} 0
meilisearch_nb_tasks{kind="types",value="dumpCreation"} 0
meilisearch_nb_tasks{kind="types",value="indexCreation"} 0
meilisearch_nb_tasks{kind="types",value="indexDeletion"} 8
meilisearch_nb_tasks{kind="types",value="indexSwap"} 0
meilisearch_nb_tasks{kind="types",value="indexUpdate"} 0
meilisearch_nb_tasks{kind="types",value="settingsUpdate"} 22
meilisearch_nb_tasks{kind="types",value="snapshotCreation"} 0
meilisearch_nb_tasks{kind="types",value="taskCancelation"} 0
meilisearch_nb_tasks{kind="types",value="taskDeletion"} 0
# HELP meilisearch_used_db_size_bytes Meilisearch Used DB Size In Bytes
# TYPE meilisearch_used_db_size_bytes gauge
meilisearch_used_db_size_bytes 409600

```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-prometheus-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The metrics of the instance|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get stats of all indexes.

<a id="opIdget_stats"></a>

> Code samples

```bash
curl http://localhost:7700/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stats`

Get stats of all indexes.

> Example responses

> 200 Response

```json
{
  "databaseSize": 567,
  "usedDatabaseSize": 456,
  "lastUpdate": "2019-11-20T09:40:33.711324Z",
  "indexes": {
    "movies": {
      "numberOfDocuments": 10,
      "rawDocumentDbSize": 100,
      "maxDocumentSize": 16,
      "avgDocumentSize": 10,
      "isIndexing": true,
      "fieldDistribution": {
        "genre": 10,
        "author": 9
      }
    }
  }
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-stats-of-all-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stats of the instance|[Stats](#schemastats)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-tasks">Tasks</h1>

The tasks route gives information about the progress of the [asynchronous operations](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html).

<a href="https://www.meilisearch.com/docs/reference/api/tasks">External documentation</a>

## Get all tasks

<a id="opIdget_tasks"></a>

> Code samples

```bash
curl http://localhost:7700/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tasks`

Get all [tasks](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html)

<h3 id="get-all-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(u-int32)|false|Maximum number of results to return.|
|from|query|integer(u-int32)|false|Fetch the next set of results from the given uid.|
|reverse|query|boolean|false|The order you want to retrieve the objects.|
|batchUids|query|integer(u-int32)|false|Permits to filter tasks by their batch uid. By default, when the `batchUids` query parameter is not set, all task uids are returned. It's possible to specify several batch uids by separating them with the `,` character.|
|uids|query|[integer(u-int32)]|false|Permits to filter tasks by their uid. By default, when the uids query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.|
|canceledBy|query|[integer(u-int32)]|false|Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.|
|types|query|[string]|false|Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.|
|statuses|query|[[Status](#schemastatus)]|false|Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.|
|indexUids|query|[string]|false|Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.|
|afterEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.|
|beforeEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.|
|afterStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.|
|beforeStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.|
|afterFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.|
|beforeFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statuses|enqueued|
|statuses|processing|
|statuses|succeeded|
|statuses|failed|
|statuses|canceled|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "uid": 144,
      "indexUid": "mieli",
      "status": "succeeded",
      "type": "settingsUpdate",
      "canceledBy": null,
      "details": {
        "settings": {
          "filterableAttributes": [
            "play_count"
          ]
        }
      },
      "error": null,
      "duration": "PT0.009330S",
      "enqueuedAt": "2024-08-08T09:01:13.348471Z",
      "startedAt": "2024-08-08T09:01:13.349442Z",
      "finishedAt": "2024-08-08T09:01:13.358772Z"
    }
  ],
  "total": 1,
  "limit": 1,
  "from": 144,
  "next": null
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-all-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get all tasks|[AllTasks](#schemaalltasks)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete tasks

<a id="opIddelete_tasks"></a>

> Code samples

```bash
curl http://localhost:7700/tasks \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tasks`

Delete [tasks](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html) on filter

<h3 id="delete-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uids|query|[integer(u-int32)]|false|Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.|
|batchUids|query|[integer(u-int32)]|false|Lets you filter tasks by their `batchUid`.|
|canceledBy|query|[integer(u-int32)]|false|Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.|
|types|query|[[Kind](#schemakind)]|false|Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.|
|statuses|query|[[Status](#schemastatus)]|false|Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.|
|indexUids|query|[string]|false|Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.|
|afterEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.|
|beforeEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.|
|afterStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.|
|beforeStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.|
|afterFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.|
|beforeFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|types|documentAdditionOrUpdate|
|types|documentEdition|
|types|documentDeletion|
|types|settingsUpdate|
|types|indexCreation|
|types|indexDeletion|
|types|indexUpdate|
|types|indexSwap|
|types|taskCancelation|
|types|taskDeletion|
|types|dumpCreation|
|types|snapshotCreation|
|types|upgradeDatabase|
|statuses|enqueued|
|statuses|processing|
|statuses|succeeded|
|statuses|failed|
|statuses|canceled|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "taskDeletion",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 400 Response

```json
{
  "message": "Query parameters to filter the tasks to delete are missing. Available query parameters are: `uids`, `indexUids`, `statuses`, `types`, `canceledBy`, `beforeEnqueuedAt`, `afterEnqueuedAt`, `beforeStartedAt`, `afterStartedAt`, `beforeFinishedAt`, `afterFinishedAt`.",
  "code": "missing_task_filters",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#missing_task_filters"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Task :taskUid not found.",
  "code": "task_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors/#task_not_found"
}
```

<h3 id="delete-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|400|Bad Request|A filter is missing|[ResponseError](#schemaresponseerror)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|The task uid does not exists|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Cancel tasks

<a id="opIdcancel_tasks"></a>

> Code samples

```bash
curl http://localhost:7700/tasks/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tasks/cancel`

Cancel enqueued and/or processing [tasks](https://www.meilisearch.com/docs/learn/async/asynchronous_operations)

<h3 id="cancel-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uids|query|[integer(u-int32)]|false|Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.|
|batchUids|query|[integer(u-int32)]|false|Lets you filter tasks by their `batchUid`.|
|canceledBy|query|[integer(u-int32)]|false|Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.|
|types|query|[[Kind](#schemakind)]|false|Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.|
|statuses|query|[[Status](#schemastatus)]|false|Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.|
|indexUids|query|[string]|false|Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.|
|afterEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.|
|beforeEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.|
|afterStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.|
|beforeStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.|
|afterFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.|
|beforeFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|types|documentAdditionOrUpdate|
|types|documentEdition|
|types|documentDeletion|
|types|settingsUpdate|
|types|indexCreation|
|types|indexDeletion|
|types|indexUpdate|
|types|indexSwap|
|types|taskCancelation|
|types|taskDeletion|
|types|dumpCreation|
|types|snapshotCreation|
|types|upgradeDatabase|
|statuses|enqueued|
|statuses|processing|
|statuses|succeeded|
|statuses|failed|
|statuses|canceled|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "taskCancelation",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 400 Response

```json
{
  "message": "Query parameters to filter the tasks to cancel are missing. Available query parameters are: `uids`, `indexUids`, `statuses`, `types`, `canceledBy`, `beforeEnqueuedAt`, `afterEnqueuedAt`, `beforeStartedAt`, `afterStartedAt`, `beforeFinishedAt`, `afterFinishedAt`.",
  "code": "missing_task_filters",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#missing_task_filters"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Task :taskUid not found.",
  "code": "task_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors/#task_not_found"
}
```

<h3 id="cancel-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|400|Bad Request|A filter is missing|[ResponseError](#schemaresponseerror)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|The task uid does not exists|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get a task

<a id="opIdget_task"></a>

> Code samples

```bash
curl http://localhost:7700/tasks/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tasks/{taskUid}`

Get a [task](https://www.meilisearch.com/docs/learn/async/asynchronous_operations)

<h3 id="get-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskUid|path|string(u-int32)|true|The task identifier|

> Example responses

> 200 Response

```json
{
  "uid": 1,
  "indexUid": "movies",
  "status": "succeeded",
  "type": "documentAdditionOrUpdate",
  "canceledBy": null,
  "details": {
    "receivedDocuments": 79000,
    "indexedDocuments": 79000
  },
  "error": null,
  "duration": "PT1S",
  "enqueuedAt": "2021-01-01T09:39:00.000000Z",
  "startedAt": "2021-01-01T09:39:01.000000Z",
  "finishedAt": "2021-01-01T09:39:02.000000Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Task :taskUid not found.",
  "code": "task_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors/#task_not_found"
}
```

<h3 id="get-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully retrieved|[TaskView](#schemataskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|The task uid does not exists|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-batches">Batches</h1>

The /batches route gives information about the progress of batches of asynchronous operations.

<a href="https://www.meilisearch.com/docs/reference/api/batches">External documentation</a>

## Get batches

<a id="opIdget_batches"></a>

> Code samples

```bash
curl http://localhost:7700/batches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batches`

List all batches, regardless of index. The batch objects are contained in the results array.
Batches are always returned in descending order of uid. This means that by default, the most recently created batch objects appear first.
Batch results are paginated and can be filtered with query parameters.

<h3 id="get-batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(u-int32)|false|Maximum number of results to return.|
|from|query|integer(u-int32)|false|Fetch the next set of results from the given uid.|
|reverse|query|boolean|false|The order you want to retrieve the objects.|
|batchUids|query|integer(u-int32)|false|Permits to filter tasks by their batch uid. By default, when the `batchUids` query parameter is not set, all task uids are returned. It's possible to specify several batch uids by separating them with the `,` character.|
|uids|query|[integer(u-int32)]|false|Permits to filter tasks by their uid. By default, when the uids query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.|
|canceledBy|query|[integer(u-int32)]|false|Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.|
|types|query|[string]|false|Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.|
|statuses|query|[[Status](#schemastatus)]|false|Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.|
|indexUids|query|[string]|false|Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.|
|afterEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.|
|beforeEnqueuedAt|query|string|false|Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.|
|afterStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.|
|beforeStartedAt|query|string|false|Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.|
|afterFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.|
|beforeFinishedAt|query|string|false|Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statuses|enqueued|
|statuses|processing|
|statuses|succeeded|
|statuses|failed|
|statuses|canceled|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "uid": 2,
      "details": {
        "stopWords": [
          "of",
          "the"
        ]
      },
      "progress": null,
      "stats": {
        "totalNbTasks": 1,
        "status": {
          "succeeded": 1
        },
        "types": {
          "settingsUpdate": 1
        },
        "indexUids": {
          "INDEX_NAME": 1
        }
      },
      "duration": "PT0.110083S",
      "startedAt": "2024-12-10T15:49:04.995321Z",
      "finishedAt": "2024-12-10T15:49:05.105404Z"
    }
  ],
  "total": 3,
  "limit": 1,
  "from": 2,
  "next": 1
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the batches|[AllBatches](#schemaallbatches)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get one batch

<a id="opIdget_batch"></a>

> Code samples

```bash
curl http://localhost:7700/batches/8685 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batches/{batchUid}`

Get a single batch.

<h3 id="get-one-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchUid|path|string|true|The unique batch id|

> Example responses

> 200 Response

```json
{
  "uid": 1,
  "details": {
    "receivedDocuments": 1,
    "indexedDocuments": 1
  },
  "progress": null,
  "stats": {
    "totalNbTasks": 1,
    "status": {
      "succeeded": 1
    },
    "types": {
      "documentAdditionOrUpdate": 1
    },
    "indexUids": {
      "INDEX_NAME": 1
    }
  },
  "duration": "PT0.364788S",
  "startedAt": "2024-12-10T15:48:49.672141Z",
  "finishedAt": "2024-12-10T15:48:50.036929Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-one-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return the batch|[BatchView](#schemabatchview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-indexes">Indexes</h1>

An index is an entity that gathers a set of [documents](https://www.meilisearch.com/docs/learn/getting_started/documents) with its own [settings](https://www.meilisearch.com/docs/reference/api/settings). Learn more about indexes.

<a href="https://www.meilisearch.com/docs/reference/api/indexes">External documentation</a>

## List indexes

<a id="opIdlist_indexes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes`

List all indexes.

<h3 id="list-indexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The number of indexes to skip before starting to retrieve anything|
|limit|query|integer|false|The number of indexes to retrieve|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "uid": "movies",
      "primaryKey": "movie_id",
      "createdAt": "2019-11-20T09:40:33.711324Z",
      "updatedAt": "2019-11-20T09:40:33.711324Z"
    }
  ],
  "limit": 1,
  "offset": 0,
  "total": 1
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="list-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Indexes are returned|[PaginationView_IndexView](#schemapaginationview_indexview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create index

<a id="opIdcreate_index"></a>

> Code samples

```bash
curl http://localhost:7700/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "uid": "movies",
    "primaryKey": "id"
  }'
```

`POST /indexes`

Create an index.

> Body parameter

```json
{
  "uid": "movies",
  "primaryKey": "id"
}
```

<h3 id="create-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IndexCreateRequest](#schemaindexcreaterequest)|true|none|
|» uid|body|[IndexUid](#schemaindexuid)|true|The name of the index|
|» primaryKey|body|string \| null|false|The primary key of the index|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "indexCreation",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="create-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get index

<a id="opIdget_index"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}`

Get information about an index.

<h3 id="get-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{
  "uid": "movies",
  "primaryKey": "movie_id",
  "createdAt": "2019-11-20T09:40:33.711324Z",
  "updatedAt": "2019-11-20T09:40:33.711324Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="get-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The index is returned|[IndexView](#schemaindexview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete index

<a id="opIddelete_index"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /indexes/{indexUid}`

Delete an index.

<h3 id="delete-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 202 Response

```json
{
  "taskUid": 0,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "indexDeletion",
  "enqueuedAt": "2021-01-01T09:39:00.000000Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="delete-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update index

<a id="opIdupdate_index"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "primaryKey": "string"
  }'
```

`PATCH /indexes/{indexUid}`

Update the `primaryKey` of an index.
Return an error if the index doesn't exists yet or if it contains documents.

> Body parameter

```json
{
  "primaryKey": "string"
}
```

<h3 id="update-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[UpdateIndexRequest](#schemaupdateindexrequest)|true|none|
|» primaryKey|body|string \| null|false|The new primary key of the index|

> Example responses

> 202 Response

```json
{
  "taskUid": 0,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "indexUpdate",
  "enqueuedAt": "2021-01-01T09:39:00.000000Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Search an index with GET

<a id="opIdsearch_with_url_query"></a>

> Code samples

```bash
curl 'http://localhost:7700/indexes/movies/search?vector=0&offset=0&limit=20&attributesToRetrieve=string&retrieveVectors=true&attributesToCrop=string&cropLength=10&attributesToHighlight=string&showMatchesPosition=true&showRankingScore=true&showRankingScoreDetails=true&facets=string&highlightPreTag=%3Cem%3E&highlightPostTag=%3C%2Fem%3E&cropMarker=%E2%80%A6&matchingStrategy=last&attributesToSearchOn=string&hybridSemanticRatio=0&rankingScoreThreshold=0&locales=af' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/search`

Search for documents matching a specific query in the given index.

<h3 id="search-an-index-with-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|q|query|string|false|none|
|vector|query|[number(float)]|true|none|
|offset|query|integer|true|none|
|limit|query|integer|true|none|
|page|query|integer|false|none|
|hitsPerPage|query|integer|false|none|
|attributesToRetrieve|query|[string]|true|none|
|retrieveVectors|query|boolean|true|none|
|attributesToCrop|query|[string]|true|none|
|cropLength|query|integer|true|none|
|attributesToHighlight|query|[string]|true|none|
|filter|query|string|false|none|
|sort|query|string|false|none|
|distinct|query|string|false|none|
|showMatchesPosition|query|boolean|true|none|
|showRankingScore|query|boolean|true|none|
|showRankingScoreDetails|query|boolean|true|none|
|facets|query|[string]|true|none|
|highlightPreTag|query|string|true|none|
|highlightPostTag|query|string|true|none|
|cropMarker|query|string|true|none|
|matchingStrategy|query|[MatchingStrategy](#schemamatchingstrategy)|true|none|
|attributesToSearchOn|query|[string]|true|none|
|hybridEmbedder|query|string|false|none|
|hybridSemanticRatio|query|number(float)|true|none|
|rankingScoreThreshold|query|number(float)|true|none|
|locales|query|[[Locale](#schemalocale)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|matchingStrategy|last|
|matchingStrategy|all|
|matchingStrategy|frequency|
|locales|af|
|locales|ak|
|locales|am|
|locales|ar|
|locales|az|
|locales|be|
|locales|bn|
|locales|bg|
|locales|ca|
|locales|cs|
|locales|da|
|locales|de|
|locales|el|
|locales|en|
|locales|eo|
|locales|et|
|locales|fi|
|locales|fr|
|locales|gu|
|locales|he|
|locales|hi|
|locales|hr|
|locales|hu|
|locales|hy|
|locales|id|
|locales|it|
|locales|jv|
|locales|ja|
|locales|kn|
|locales|ka|
|locales|km|
|locales|ko|
|locales|la|
|locales|lv|
|locales|lt|
|locales|ml|
|locales|mr|
|locales|mk|
|locales|my|
|locales|ne|
|locales|nl|
|locales|nb|
|locales|or|
|locales|pa|
|locales|fa|
|locales|pl|
|locales|pt|
|locales|ro|
|locales|ru|
|locales|si|
|locales|sk|
|locales|sl|
|locales|sn|
|locales|es|
|locales|sr|
|locales|sv|
|locales|ta|
|locales|te|
|locales|tl|
|locales|th|
|locales|tk|
|locales|tr|
|locales|uk|
|locales|ur|
|locales|uz|
|locales|vi|
|locales|yi|
|locales|zh|
|locales|zu|
|locales|afr|
|locales|aka|
|locales|amh|
|locales|ara|
|locales|aze|
|locales|bel|
|locales|ben|
|locales|bul|
|locales|cat|
|locales|ces|
|locales|dan|
|locales|deu|
|locales|ell|
|locales|eng|
|locales|epo|
|locales|est|
|locales|fin|
|locales|fra|
|locales|guj|
|locales|heb|
|locales|hin|
|locales|hrv|
|locales|hun|
|locales|hye|
|locales|ind|
|locales|ita|
|locales|jav|
|locales|jpn|
|locales|kan|
|locales|kat|
|locales|khm|
|locales|kor|
|locales|lat|
|locales|lav|
|locales|lit|
|locales|mal|
|locales|mar|
|locales|mkd|
|locales|mya|
|locales|nep|
|locales|nld|
|locales|nob|
|locales|ori|
|locales|pan|
|locales|pes|
|locales|pol|
|locales|por|
|locales|ron|
|locales|rus|
|locales|sin|
|locales|slk|
|locales|slv|
|locales|sna|
|locales|spa|
|locales|srp|
|locales|swe|
|locales|tam|
|locales|tel|
|locales|tgl|
|locales|tha|
|locales|tuk|
|locales|tur|
|locales|ukr|
|locales|urd|
|locales|uzb|
|locales|vie|
|locales|yid|
|locales|zho|
|locales|zul|
|locales|cmn|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "id": 2770,
      "title": "American Pie 2",
      "poster": "https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
      "overview": "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…",
      "release_date": 997405200
    },
    {
      "id": 190859,
      "title": "American Sniper",
      "poster": "https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
      "overview": "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…",
      "release_date": 1418256000
    }
  ],
  "offset": 0,
  "limit": 2,
  "estimatedTotalHits": 976,
  "processingTimeMs": 35,
  "query": "american "
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="search-an-index-with-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The documents are returned|[SearchResult](#schemasearchresult)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Search with POST

<a id="opIdsearch_with_post"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "q": "string",
    "vector": [
      0
    ],
    "hybrid": {
      "semanticRatio": 0,
      "embedder": "string"
    },
    "offset": 0,
    "limit": 20,
    "page": 0,
    "hits_per_page": 0,
    "attributes_to_retrieve": [
      "string"
    ],
    "retrieve_vectors": true,
    "attributes_to_crop": [
      "string"
    ],
    "crop_length": 10,
    "attributes_to_highlight": [
      "string"
    ],
    "show_matches_position": true,
    "show_ranking_score": true,
    "show_ranking_score_details": true,
    "filter": null,
    "sort": [
      "string"
    ],
    "distinct": "string",
    "facets": [
      "string"
    ],
    "highlight_pre_tag": "<em>",
    "highlight_post_tag": "</em>",
    "crop_marker": "…",
    "matching_strategy": "last",
    "attributes_to_search_on": [
      "string"
    ],
    "ranking_score_threshold": 0,
    "locales": [
      "af"
    ]
  }'
```

`POST /indexes/{indexUid}/search`

Search for documents matching a specific query in the given index.

> Body parameter

```json
{
  "q": "string",
  "vector": [
    0
  ],
  "hybrid": {
    "semanticRatio": 0,
    "embedder": "string"
  },
  "offset": 0,
  "limit": 20,
  "page": 0,
  "hits_per_page": 0,
  "attributes_to_retrieve": [
    "string"
  ],
  "retrieve_vectors": true,
  "attributes_to_crop": [
    "string"
  ],
  "crop_length": 10,
  "attributes_to_highlight": [
    "string"
  ],
  "show_matches_position": true,
  "show_ranking_score": true,
  "show_ranking_score_details": true,
  "filter": null,
  "sort": [
    "string"
  ],
  "distinct": "string",
  "facets": [
    "string"
  ],
  "highlight_pre_tag": "<em>",
  "highlight_post_tag": "</em>",
  "crop_marker": "…",
  "matching_strategy": "last",
  "attributes_to_search_on": [
    "string"
  ],
  "ranking_score_threshold": 0,
  "locales": [
    "af"
  ]
}
```

<h3 id="search-with-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[SearchQuery](#schemasearchquery)|true|none|
|» q|body|string \| null|false|none|
|» vector|body|[number(float)]|false|none|
|» hybrid|body|null \| [HybridQuery](#schemahybridquery)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[HybridQuery](#schemahybridquery)|false|none|
|» offset|body|integer|true|none|
|» limit|body|integer|true|none|
|» page|body|integer \| null|false|none|
|» hits_per_page|body|integer \| null|false|none|
|» attributes_to_retrieve|body|[string]|false|none|
|» retrieve_vectors|body|boolean|true|none|
|» attributes_to_crop|body|[string]|false|none|
|» crop_length|body|integer|true|none|
|» attributes_to_highlight|body|[string]|false|none|
|» show_matches_position|body|boolean|true|none|
|» show_ranking_score|body|boolean|true|none|
|» show_ranking_score_details|body|boolean|true|none|
|» filter|body|object|false|none|
|» sort|body|[string]|false|none|
|» distinct|body|string \| null|false|none|
|» facets|body|[string]|false|none|
|» highlight_pre_tag|body|string|true|none|
|» highlight_post_tag|body|string|true|none|
|» crop_marker|body|string|true|none|
|» matching_strategy|body|[MatchingStrategy](#schemamatchingstrategy)|true|This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.<br>The reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.|
|» attributes_to_search_on|body|[string]|false|none|
|» ranking_score_threshold|body|null \| [RankingScoreThreshold](#schemarankingscorethreshold)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[RankingScoreThreshold](#schemarankingscorethreshold)|false|none|
|» locales|body|[[Locale](#schemalocale)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» matching_strategy|last|
|» matching_strategy|all|
|» matching_strategy|frequency|
|» locales|af|
|» locales|ak|
|» locales|am|
|» locales|ar|
|» locales|az|
|» locales|be|
|» locales|bn|
|» locales|bg|
|» locales|ca|
|» locales|cs|
|» locales|da|
|» locales|de|
|» locales|el|
|» locales|en|
|» locales|eo|
|» locales|et|
|» locales|fi|
|» locales|fr|
|» locales|gu|
|» locales|he|
|» locales|hi|
|» locales|hr|
|» locales|hu|
|» locales|hy|
|» locales|id|
|» locales|it|
|» locales|jv|
|» locales|ja|
|» locales|kn|
|» locales|ka|
|» locales|km|
|» locales|ko|
|» locales|la|
|» locales|lv|
|» locales|lt|
|» locales|ml|
|» locales|mr|
|» locales|mk|
|» locales|my|
|» locales|ne|
|» locales|nl|
|» locales|nb|
|» locales|or|
|» locales|pa|
|» locales|fa|
|» locales|pl|
|» locales|pt|
|» locales|ro|
|» locales|ru|
|» locales|si|
|» locales|sk|
|» locales|sl|
|» locales|sn|
|» locales|es|
|» locales|sr|
|» locales|sv|
|» locales|ta|
|» locales|te|
|» locales|tl|
|» locales|th|
|» locales|tk|
|» locales|tr|
|» locales|uk|
|» locales|ur|
|» locales|uz|
|» locales|vi|
|» locales|yi|
|» locales|zh|
|» locales|zu|
|» locales|afr|
|» locales|aka|
|» locales|amh|
|» locales|ara|
|» locales|aze|
|» locales|bel|
|» locales|ben|
|» locales|bul|
|» locales|cat|
|» locales|ces|
|» locales|dan|
|» locales|deu|
|» locales|ell|
|» locales|eng|
|» locales|epo|
|» locales|est|
|» locales|fin|
|» locales|fra|
|» locales|guj|
|» locales|heb|
|» locales|hin|
|» locales|hrv|
|» locales|hun|
|» locales|hye|
|» locales|ind|
|» locales|ita|
|» locales|jav|
|» locales|jpn|
|» locales|kan|
|» locales|kat|
|» locales|khm|
|» locales|kor|
|» locales|lat|
|» locales|lav|
|» locales|lit|
|» locales|mal|
|» locales|mar|
|» locales|mkd|
|» locales|mya|
|» locales|nep|
|» locales|nld|
|» locales|nob|
|» locales|ori|
|» locales|pan|
|» locales|pes|
|» locales|pol|
|» locales|por|
|» locales|ron|
|» locales|rus|
|» locales|sin|
|» locales|slk|
|» locales|slv|
|» locales|sna|
|» locales|spa|
|» locales|srp|
|» locales|swe|
|» locales|tam|
|» locales|tel|
|» locales|tgl|
|» locales|tha|
|» locales|tuk|
|» locales|tur|
|» locales|ukr|
|» locales|urd|
|» locales|uzb|
|» locales|vie|
|» locales|yid|
|» locales|zho|
|» locales|zul|
|» locales|cmn|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "id": 2770,
      "title": "American Pie 2",
      "poster": "https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
      "overview": "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…",
      "release_date": 997405200
    },
    {
      "id": 190859,
      "title": "American Sniper",
      "poster": "https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
      "overview": "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…",
      "release_date": 1418256000
    }
  ],
  "offset": 0,
  "limit": 2,
  "estimatedTotalHits": 976,
  "processingTimeMs": 35,
  "query": "american "
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="search-with-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The documents are returned|[SearchResult](#schemasearchresult)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Swap indexes

<a id="opIdswap_indexes"></a>

> Code samples

```bash
curl http://localhost:7700/swap-indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "indexes": [
        "movies"
      ]
    }
  ]'
```

`POST /swap-indexes`

Swap the documents, settings, and task history of two or more indexes. You can only swap indexes in pairs. However, a single request can swap as many index pairs as you wish.
Swapping indexes is an atomic transaction: either all indexes are successfully swapped, or none are.
Swapping indexA and indexB will also replace every mention of indexA by indexB and vice-versa in the task history. enqueued tasks are left unmodified.

> Body parameter

```json
[
  {
    "indexes": [
      "movies"
    ]
  }
]
```

<h3 id="swap-indexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[SwapIndexesPayload](#schemaswapindexespayload)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 3,
  "indexUid": null,
  "status": "enqueued",
  "type": "indexSwap",
  "enqueuedAt": "2021-08-12T10:00:00.000000Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="swap-indexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-documents">Documents</h1>

Documents are objects composed of fields that can store any type of data. Each field contains an attribute and its associated value. Documents are stored inside [indexes](https://www.meilisearch.com/docs/learn/getting_started/indexes).

<a href="https://www.meilisearch.com/docs/learn/getting_started/documents">External documentation</a>

## Delete documents by batch

<a id="opIddelete_documents_batch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/delete-batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    null
  ]'
```

`POST /indexes/{indexUid}/delete-batch`

Delete a set of documents based on an array of document ids.

> Body parameter

```json
[
  null
]
```

<h3 id="delete-documents-by-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[object]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentAdditionOrUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="delete-documents-by-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get documents

<a id="opIdget_documents"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/documents`

Get documents by batches.

<h3 id="get-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|offset|query|integer|false|none|
|limit|query|integer|false|none|
|fields|query|[string]|false|none|
|retrieveVectors|query|boolean|false|none|
|ids|query|[string]|false|none|
|filter|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": 25684,
      "title": "American Ninja 5",
      "poster": "https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg",
      "overview": "When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja.",
      "release_date": 725846400
    },
    {
      "id": 45881,
      "title": "The Bridge of San Luis Rey",
      "poster": "https://image.tmdb.org/t/p/w500/4X7quIcdkc24Cveg5XdpfRqxtYA.jpg",
      "overview": "The Bridge of San Luis Rey is American author Thornton Wilder's second novel, first published in 1927 to worldwide acclaim. It tells the story of several interrelated people who die in the collapse of an Inca rope-fiber suspension bridge in Peru, and the events that lead up to their being on the bridge.[ A friar who has witnessed the tragic accident then goes about inquiring into the lives of the victims, seeking some sort of cosmic answer to the question of why each had to die. The novel won the Pulitzer Prize in 1928.",
      "release_date": 1072915200
    }
  ],
  "limit": 20,
  "offset": 0,
  "total": 2
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="get-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The documents are returned|[PaginationView_Value](#schemapaginationview_value)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Add or update documents

<a id="opIdupdate_documents"></a>

> Code samples

```bash
curl 'http://localhost:7700/indexes/movies/documents?csvDelimiter=%3B' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /indexes/{indexUid}/documents`

Add a list of documents or update them if they already exist.
If you send an already existing document (same id) the old document will be only partially updated according to the fields of the new document. Thus, any fields not present in the new document are kept and remained unchanged.
To completely overwrite a document, see Add or replace documents route.
> info
> If the provided index does not exist, it will be created.
> info
> Use the reserved `_geo` object to add geo coordinates to a document. `_geo` is an object made of `lat` and `lng` field.
>
> When the vectorStore feature is enabled you can use the reserved `_vectors` field in your documents.
> It can accept an array of floats, multiple arrays of floats in an outer array or an object.
> This object accepts keys corresponding to the different embedders defined your index settings.

> Body parameter

```json
null
```

<h3 id="add-or-update-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|primaryKey|query|string|false|The primary key of the documents. primaryKey is optional. If you want to set the primary key of your index through this route,<br>it only has to be done the first time you add documents to the index. After which it will be ignored if given.|
|csvDelimiter|query|string|true|Customize the csv delimiter when importing CSV documents.|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentAdditionOrUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="add-or-update-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Add or replace documents

<a id="opIdreplace_documents"></a>

> Code samples

```bash
curl 'http://localhost:7700/indexes/movies/documents?csvDelimiter=%3B' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /indexes/{indexUid}/documents`

Add a list of documents or replace them if they already exist.

If you send an already existing document (same id) the whole existing document will be overwritten by the new document. Fields previously in the document not present in the new document are removed.

For a partial update of the document see Add or update documents route.
> info
> If the provided index does not exist, it will be created.
> info
> Use the reserved `_geo` object to add geo coordinates to a document. `_geo` is an object made of `lat` and `lng` field.
>
> When the vectorStore feature is enabled you can use the reserved `_vectors` field in your documents.
> It can accept an array of floats, multiple arrays of floats in an outer array or an object.
> This object accepts keys corresponding to the different embedders defined your index settings.

> Body parameter

```json
null
```

<h3 id="add-or-replace-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|primaryKey|query|string|false|The primary key of the documents. primaryKey is optional. If you want to set the primary key of your index through this route,<br>it only has to be done the first time you add documents to the index. After which it will be ignored if given.|
|csvDelimiter|query|string|true|Customize the csv delimiter when importing CSV documents.|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentAdditionOrUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="add-or-replace-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete all documents

<a id="opIdclear_all_documents"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /indexes/{indexUid}/documents`

Delete all documents in the specified index.

<h3 id="delete-all-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentDeletion",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="delete-all-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete documents by filter

<a id="opIddelete_documents_by_filter"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": null
  }'
```

`POST /indexes/{indexUid}/documents/delete`

Delete a set of documents based on a filter.

> Body parameter

```json
{
  "filter": null
}
```

<h3 id="delete-documents-by-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[DocumentDeletionByFilter](#schemadocumentdeletionbyfilter)|true|none|
|» filter|body|object|true|none|

> Example responses

> 202 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentDeletion",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="delete-documents-by-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Edit documents by function.

<a id="opIdedit_documents_by_function"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents/edit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": null,
    "context": null,
    "function": "string"
  }'
```

`POST /indexes/{indexUid}/documents/edit`

Use a [RHAI function](https://rhai.rs/book/engine/hello-world.html) to edit one or more documents directly in Meilisearch.

> Body parameter

```json
{
  "filter": null,
  "context": null,
  "function": "string"
}
```

<h3 id="edit-documents-by-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[DocumentEditionByFunction](#schemadocumenteditionbyfunction)|true|none|
|» filter|body|object|false|A string containing a RHAI function.|
|» context|body|object|false|A string containing a filter expression.|
|» function|body|string|true|An object with data Meilisearch should make available for the editing function.|

> Example responses

> 202 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentDeletion",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="edit-documents-by-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get documents with POST

<a id="opIddocuments_by_query_post"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents/fetch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "offset": 150,
    "limit": 1,
    "fields": [
      "title, description"
    ],
    "retrieveVectors": true,
    "ids": [
      "cody",
      "finn",
      "brandy",
      "gambit"
    ],
    "filter": null
  }'
```

`POST /indexes/{indexUid}/documents/fetch`

Get a set of documents.

> Body parameter

```json
{
  "offset": 150,
  "limit": 1,
  "fields": [
    "title, description"
  ],
  "retrieveVectors": true,
  "ids": [
    "cody",
    "finn",
    "brandy",
    "gambit"
  ],
  "filter": null
}
```

<h3 id="get-documents-with-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[BrowseQuery](#schemabrowsequery)|true|none|
|» offset|body|integer|true|none|
|» limit|body|integer|true|none|
|» fields|body|[string]|false|none|
|» retrieveVectors|body|boolean|true|none|
|» ids|body|[string]|false|none|
|» filter|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "title": "The Travels of Ibn Battuta",
      "genres": [
        "Travel",
        "Adventure"
      ],
      "language": "English",
      "rating": 4.5
    },
    {
      "title": "Pride and Prejudice",
      "genres": [
        "Classics",
        "Fiction",
        "Romance",
        "Literature"
      ],
      "language": "English",
      "rating": 4
    }
  ],
  "offset": 0,
  "limit": 2,
  "total": 5
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-documents-with-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[PaginationView_Value](#schemapaginationview_value)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get one document

<a id="opIdget_document"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents/85087 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/documents/{documentId}`

Get one document from its primary key.

<h3 id="get-one-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|documentId|path|string|true|The document identifier|
|fields|query|[string]|false|none|
|retrieveVectors|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": 25684,
  "title": "American Ninja 5",
  "poster": "https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg",
  "overview": "When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja.",
  "release_date": 725846400
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Document `a` not found.",
  "code": "document_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#document_not_found"
}
```

<h3 id="get-one-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The document is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Document not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete a document

<a id="opIddelete_document"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/documents/853 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /indexes/{indexUid}/documents/{documentId}`

Delete a single document by id.

<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|documentId|path|string|true|Document Identifier|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": null,
  "status": "enqueued",
  "type": "documentAdditionOrUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-facet-search">Facet Search</h1>

The `/facet-search` route allows you to search for facet values. Facet search supports prefix search and typo tolerance. The returned hits are sorted lexicographically in ascending order. You can configure how facets are sorted using the sortFacetValuesBy property of the faceting index settings.

<a href="https://www.meilisearch.com/docs/reference/api/facet_search">External documentation</a>

## Perform a facet search

<a id="opIdsearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/facet-search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "facet_query": "string",
    "facet_name": "string",
    "q": "string",
    "vector": [
      0
    ],
    "hybrid": {
      "semanticRatio": 0,
      "embedder": "string"
    },
    "filter": null,
    "matching_strategy": "last",
    "attributes_to_search_on": [
      "string"
    ],
    "ranking_score_threshold": 0,
    "locales": [
      "af"
    ],
    "exhaustive_facet_count": true
  }'
```

`POST /indexes/{indexUid}/facet-search`

Search for a facet value within a given facet.

> Body parameter

```json
{
  "facet_query": "string",
  "facet_name": "string",
  "q": "string",
  "vector": [
    0
  ],
  "hybrid": {
    "semanticRatio": 0,
    "embedder": "string"
  },
  "filter": null,
  "matching_strategy": "last",
  "attributes_to_search_on": [
    "string"
  ],
  "ranking_score_threshold": 0,
  "locales": [
    "af"
  ],
  "exhaustive_facet_count": true
}
```

<h3 id="perform-a-facet-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[FacetSearchQuery](#schemafacetsearchquery)|true|none|
|» facet_query|body|string \| null|false|none|
|» facet_name|body|string|true|none|
|» q|body|string \| null|false|none|
|» vector|body|[number(float)]|false|none|
|» hybrid|body|null \| [HybridQuery](#schemahybridquery)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[HybridQuery](#schemahybridquery)|false|none|
|» filter|body|object|false|none|
|» matching_strategy|body|[MatchingStrategy](#schemamatchingstrategy)|true|This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.<br>The reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.|
|» attributes_to_search_on|body|[string]|false|none|
|» ranking_score_threshold|body|null \| [RankingScoreThreshold](#schemarankingscorethreshold)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[RankingScoreThreshold](#schemarankingscorethreshold)|false|none|
|» locales|body|[[Locale](#schemalocale)]|false|none|
|» exhaustive_facet_count|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» matching_strategy|last|
|» matching_strategy|all|
|» matching_strategy|frequency|
|» locales|af|
|» locales|ak|
|» locales|am|
|» locales|ar|
|» locales|az|
|» locales|be|
|» locales|bn|
|» locales|bg|
|» locales|ca|
|» locales|cs|
|» locales|da|
|» locales|de|
|» locales|el|
|» locales|en|
|» locales|eo|
|» locales|et|
|» locales|fi|
|» locales|fr|
|» locales|gu|
|» locales|he|
|» locales|hi|
|» locales|hr|
|» locales|hu|
|» locales|hy|
|» locales|id|
|» locales|it|
|» locales|jv|
|» locales|ja|
|» locales|kn|
|» locales|ka|
|» locales|km|
|» locales|ko|
|» locales|la|
|» locales|lv|
|» locales|lt|
|» locales|ml|
|» locales|mr|
|» locales|mk|
|» locales|my|
|» locales|ne|
|» locales|nl|
|» locales|nb|
|» locales|or|
|» locales|pa|
|» locales|fa|
|» locales|pl|
|» locales|pt|
|» locales|ro|
|» locales|ru|
|» locales|si|
|» locales|sk|
|» locales|sl|
|» locales|sn|
|» locales|es|
|» locales|sr|
|» locales|sv|
|» locales|ta|
|» locales|te|
|» locales|tl|
|» locales|th|
|» locales|tk|
|» locales|tr|
|» locales|uk|
|» locales|ur|
|» locales|uz|
|» locales|vi|
|» locales|yi|
|» locales|zh|
|» locales|zu|
|» locales|afr|
|» locales|aka|
|» locales|amh|
|» locales|ara|
|» locales|aze|
|» locales|bel|
|» locales|ben|
|» locales|bul|
|» locales|cat|
|» locales|ces|
|» locales|dan|
|» locales|deu|
|» locales|ell|
|» locales|eng|
|» locales|epo|
|» locales|est|
|» locales|fin|
|» locales|fra|
|» locales|guj|
|» locales|heb|
|» locales|hin|
|» locales|hrv|
|» locales|hun|
|» locales|hye|
|» locales|ind|
|» locales|ita|
|» locales|jav|
|» locales|jpn|
|» locales|kan|
|» locales|kat|
|» locales|khm|
|» locales|kor|
|» locales|lat|
|» locales|lav|
|» locales|lit|
|» locales|mal|
|» locales|mar|
|» locales|mkd|
|» locales|mya|
|» locales|nep|
|» locales|nld|
|» locales|nob|
|» locales|ori|
|» locales|pan|
|» locales|pes|
|» locales|pol|
|» locales|por|
|» locales|ron|
|» locales|rus|
|» locales|sin|
|» locales|slk|
|» locales|slv|
|» locales|sna|
|» locales|spa|
|» locales|srp|
|» locales|swe|
|» locales|tam|
|» locales|tel|
|» locales|tgl|
|» locales|tha|
|» locales|tuk|
|» locales|tur|
|» locales|ukr|
|» locales|urd|
|» locales|uzb|
|» locales|vie|
|» locales|yid|
|» locales|zho|
|» locales|zul|
|» locales|cmn|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "id": 2770,
      "title": "American Pie 2",
      "poster": "https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
      "overview": "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…",
      "release_date": 997405200
    },
    {
      "id": 190859,
      "title": "American Sniper",
      "poster": "https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
      "overview": "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…",
      "release_date": 1418256000
    }
  ],
  "offset": 0,
  "limit": 2,
  "estimatedTotalHits": 976,
  "processingTimeMs": 35,
  "query": "american "
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="perform-a-facet-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The documents are returned|[SearchResult](#schemasearchresult)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-similar-documents">Similar documents</h1>

The /similar route uses AI-powered search to return a number of documents similar to a target document.

Meilisearch exposes two routes for retrieving similar documents: POST and GET. In the majority of cases, POST will offer better performance and ease of use.

<a href="https://www.meilisearch.com/docs/reference/api/similar">External documentation</a>

## Get similar documents with GET

<a id="opIdsimilar_get"></a>

> Code samples

```bash
curl 'http://localhost:7700/indexes/movies/similar?id=string&offset=0&limit=20&attributes_to_retrieve=string&retrieve_vectors=true&show_ranking_score=true&show_ranking_score_details=true&embedder=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/similar`

Retrieve documents similar to a specific search result.

<h3 id="get-similar-documents-with-get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|id|query|string|true|none|
|offset|query|integer|true|none|
|limit|query|integer|true|none|
|attributes_to_retrieve|query|[string]|true|none|
|retrieve_vectors|query|boolean|true|none|
|filter|query|string|false|none|
|show_ranking_score|query|boolean|true|none|
|show_ranking_score_details|query|boolean|true|none|
|ranking_score_threshold|query|number(float)|false|none|
|embedder|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "id": 2770,
      "title": "American Pie 2",
      "poster": "https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
      "overview": "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…",
      "release_date": 997405200
    },
    {
      "id": 190859,
      "title": "American Sniper",
      "poster": "https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
      "overview": "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…",
      "release_date": 1418256000
    }
  ],
  "offset": 0,
  "limit": 2,
  "estimatedTotalHits": 976,
  "processingTimeMs": 35,
  "query": "american "
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="get-similar-documents-with-get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The documents are returned|[SimilarResult](#schemasimilarresult)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get similar documents with POST

<a id="opIdsimilar_post"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/similar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "offset": 0,
    "limit": 0,
    "filter": null,
    "embedder": "string",
    "attributes_to_retrieve": [
      "string"
    ],
    "retrieve_vectors": true,
    "show_ranking_score": true,
    "show_ranking_score_details": true,
    "ranking_score_threshold": 0
  }'
```

`POST /indexes/{indexUid}/similar`

Retrieve documents similar to a specific search result.

> Body parameter

```json
{
  "id": "string",
  "offset": 0,
  "limit": 0,
  "filter": null,
  "embedder": "string",
  "attributes_to_retrieve": [
    "string"
  ],
  "retrieve_vectors": true,
  "show_ranking_score": true,
  "show_ranking_score_details": true,
  "ranking_score_threshold": 0
}
```

<h3 id="get-similar-documents-with-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[SimilarQuery](#schemasimilarquery)|true|none|
|» id|body|string|true|none|
|» offset|body|integer|true|none|
|» limit|body|integer|true|none|
|» filter|body|object|false|none|
|» embedder|body|string|true|none|
|» attributes_to_retrieve|body|[string]|false|none|
|» retrieve_vectors|body|boolean|true|none|
|» show_ranking_score|body|boolean|true|none|
|» show_ranking_score_details|body|boolean|true|none|
|» ranking_score_threshold|body|number(double)|true|none|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "id": 2770,
      "title": "American Pie 2",
      "poster": "https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg",
      "overview": "The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…",
      "release_date": 997405200
    },
    {
      "id": 190859,
      "title": "American Sniper",
      "poster": "https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg",
      "overview": "U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…",
      "release_date": 1418256000
    }
  ],
  "offset": 0,
  "limit": 2,
  "estimatedTotalHits": 976,
  "processingTimeMs": 35,
  "query": "american "
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

> 404 Response

```json
{
  "message": "Index `movies` not found.",
  "code": "index_not_found",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#index_not_found"
}
```

<h3 id="get-similar-documents-with-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The documents are returned|[SimilarResult](#schemasimilarresult)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|
|404|Not Found|Index not found|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-settings">Settings</h1>

Use the /settings route to customize search settings for a given index. You can either modify all index settings at once using the update settings endpoint, or use a child route to configure a single setting.

<a href="https://www.meilisearch.com/docs/reference/api/settings">External documentation</a>

## All settings

<a id="opIdget_all"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings`

This route allows you to retrieve, configure, or reset all of an index's settings at once.

<h3 id="all-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="all-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Settings are returned|[Settings_Unchecked](#schemasettings_unchecked)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset settings

<a id="opIddelete_all"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /indexes/{indexUid}/settings`

Reset all the settings of an index to their default value.

<h3 id="reset-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update settings

<a id="opIdupdate_all"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayedAttributes": [
      "id",
      "title",
      "description",
      "url"
    ],
    "searchableAttributes": [
      "title",
      "description"
    ],
    "filterableAttributes": [
      "release_date",
      "genre"
    ],
    "sortableAttributes": [
      "release_date"
    ],
    "rankingRules": [
      "words",
      "typo",
      "proximity",
      "attribute",
      "exactness"
    ],
    "stopWords": [
      "the",
      "a",
      "them",
      "their"
    ],
    "nonSeparatorTokens": [
      " ",
      "\n"
    ],
    "separatorTokens": [
      "S"
    ],
    "dictionary": [
      "iPhone pro"
    ],
    "synonyms": {
      "he": [
        "she",
        "they",
        "them"
      ],
      "phone": [
        "iPhone",
        "android"
      ]
    },
    "distinctAttribute": "sku",
    "proximityPrecision": "byAttribute",
    "typoTolerance": {
      "enabled": true,
      "minWordSizeForTypos": {
        "oneTypo": 5,
        "twoTypos": 9
      },
      "disableOnWords": [
        "iPhone",
        "phone"
      ],
      "disableOnAttributes": [
        "uuid",
        "url"
      ],
      "disableOnNumbers": true
    },
    "faceting": {
      "maxValuesPerFacet": 10,
      "sortFacetValuesBy": {
        "genre": "count"
      }
    },
    "pagination": {
      "maxTotalHits": 250
    },
    "embedders": {
      "property1": {
        "inner": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "binaryQuantized": true,
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "searchEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "indexingEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "distribution": {
            "current_mean": 0,
            "current_sigma": 0
          }
        }
      },
      "property2": {
        "inner": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "binaryQuantized": true,
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "searchEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "indexingEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "distribution": {
            "current_mean": 0,
            "current_sigma": 0
          }
        }
      }
    },
    "searchCutoffMs": 50,
    "localizedAttributes": 50,
    "facetSearch": true,
    "prefixSearch": "indexingTime",
    "chat": {
      "description": "string",
      "documentTemplate": "string",
      "documentTemplateMaxBytes": 0,
      "searchParameters": {
        "hybrid": {
          "semanticRatio": 0,
          "embedder": "string"
        },
        "limit": 0,
        "sort": [
          "string"
        ],
        "distinct": "string",
        "matchingStrategy": "last",
        "attributesToSearchOn": [
          "string"
        ],
        "rankingScoreThreshold": 0
      }
    }
  }'
```

`PATCH /indexes/{indexUid}/settings`

Update the settings of an index.
Passing null to an index setting will reset it to its default value.
Updates in the settings route are partial. This means that any parameters not provided in the body will be left unchanged.
If the provided index does not exist, it will be created.

> Body parameter

```json
{
  "displayedAttributes": [
    "id",
    "title",
    "description",
    "url"
  ],
  "searchableAttributes": [
    "title",
    "description"
  ],
  "filterableAttributes": [
    "release_date",
    "genre"
  ],
  "sortableAttributes": [
    "release_date"
  ],
  "rankingRules": [
    "words",
    "typo",
    "proximity",
    "attribute",
    "exactness"
  ],
  "stopWords": [
    "the",
    "a",
    "them",
    "their"
  ],
  "nonSeparatorTokens": [
    " ",
    "\n"
  ],
  "separatorTokens": [
    "S"
  ],
  "dictionary": [
    "iPhone pro"
  ],
  "synonyms": {
    "he": [
      "she",
      "they",
      "them"
    ],
    "phone": [
      "iPhone",
      "android"
    ]
  },
  "distinctAttribute": "sku",
  "proximityPrecision": "byAttribute",
  "typoTolerance": {
    "enabled": true,
    "minWordSizeForTypos": {
      "oneTypo": 5,
      "twoTypos": 9
    },
    "disableOnWords": [
      "iPhone",
      "phone"
    ],
    "disableOnAttributes": [
      "uuid",
      "url"
    ],
    "disableOnNumbers": true
  },
  "faceting": {
    "maxValuesPerFacet": 10,
    "sortFacetValuesBy": {
      "genre": "count"
    }
  },
  "pagination": {
    "maxTotalHits": 250
  },
  "embedders": {
    "property1": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    },
    "property2": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    }
  },
  "searchCutoffMs": 50,
  "localizedAttributes": 50,
  "facetSearch": true,
  "prefixSearch": "indexingTime",
  "chat": {
    "description": "string",
    "documentTemplate": "string",
    "documentTemplateMaxBytes": 0,
    "searchParameters": {
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "limit": 0,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0
    }
  }
}
```

<h3 id="update-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[Settings_Unchecked](#schemasettings_unchecked)|true|none|
|» displayedAttributes|body|[string]|false|Fields displayed in the returned documents.|
|» searchableAttributes|body|[string]|false|Fields in which to search for matching query words sorted by order of importance.|
|» filterableAttributes|body|[[FilterableAttributesRule](#schemafilterableattributesrule)]|false|Attributes to use for faceting and filtering. See [Filtering and Faceted Search](https://www.meilisearch.com/docs/learn/filtering_and_sorting/search_with_facet_filters).|
|» sortableAttributes|body|[string]|false|Attributes to use when sorting search results.|
|» rankingRules|body|[string]|false|List of ranking rules sorted by order of importance. The order is customizable.<br>[A list of ordered built-in ranking rules](https://www.meilisearch.com/docs/learn/relevancy/relevancy).|
|» stopWords|body|[string]|false|List of words ignored when present in search queries.|
|» nonSeparatorTokens|body|[string]|false|List of characters not delimiting where one term begins and ends.|
|» separatorTokens|body|[string]|false|List of characters delimiting where one term begins and ends.|
|» dictionary|body|[string]|false|List of strings Meilisearch should parse as a single term.|
|» synonyms|body|object \| null|false|List of associated words treated similarly. A word associated to an array of word as synonyms.|
|» » **additionalProperties**|body|[string]|false|none|
|» distinctAttribute|body|string \| null|false|Search returns documents with distinct (different) values of the given field.|
|» proximityPrecision|body|string \| null|false|Precision level when calculating the proximity ranking rule.|
|» typoTolerance|body|null \| [TypoSettings](#schematyposettings)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[TypoSettings](#schematyposettings)|false|Customize typo tolerance feature.|
|» faceting|body|null \| [FacetingSettings](#schemafacetingsettings)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[FacetingSettings](#schemafacetingsettings)|false|Faceting settings.|
|» pagination|body|null \| [PaginationSettings](#schemapaginationsettings)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[PaginationSettings](#schemapaginationsettings)|false|Pagination settings.|
|» embedders|body|object \| null|false|Embedder required for performing semantic search queries.|
|» » **additionalProperties**|body|[SettingEmbeddingSettings](#schemasettingembeddingsettings)|false|"Technical" type that is required due to utoipa.<br><br>We did not find a way to implement [`utoipa::ToSchema`] for the [`Setting`] enum,<br>but most types can use the `value_type` macro parameter to workaround that issue.<br><br>However that type is used in the settings route, including through the macro that auto-generate<br>all the settings route, so we can't remap the `value_type`.|
|» searchCutoffMs|body|integer \| null(u-int64)|false|Maximum duration of a search query.|
|» localizedAttributes|body|[[LocalizedAttributesRuleView](#schemalocalizedattributesruleview)]|false|none|
|» facetSearch|body|boolean \| null|false|none|
|» prefixSearch|body|null \| [PrefixSearchSettings](#schemaprefixsearchsettings)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[PrefixSearchSettings](#schemaprefixsearchsettings)|false|none|
|» chat|body|null \| [ChatSettings](#schemachatsettings)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[ChatSettings](#schemachatsettings)|false|Customize the chat prompting.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|indexingTime|
|» » *oneOf*|disabled|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get chat

<a id="opIdgetchat"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/chat \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/chat`

Get an user defined chat

<h3 id="get-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|chat is returned|[ChatSettings](#schemachatsettings)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update chat

<a id="opIdputchat"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/chat \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "documentTemplate": "string",
    "documentTemplateMaxBytes": 0,
    "searchParameters": {
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "limit": 0,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0
    }
  }'
```

`PUT /indexes/{indexUid}/settings/chat`

Update an index's user defined chat

> Body parameter

```json
{
  "description": "string",
  "documentTemplate": "string",
  "documentTemplateMaxBytes": 0,
  "searchParameters": {
    "hybrid": {
      "semanticRatio": 0,
      "embedder": "string"
    },
    "limit": 0,
    "sort": [
      "string"
    ],
    "distinct": "string",
    "matchingStrategy": "last",
    "attributesToSearchOn": [
      "string"
    ],
    "rankingScoreThreshold": 0
  }
}
```

<h3 id="update-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[ChatSettings](#schemachatsettings)|true|none|
|» description|body|string \| null|false|none|
|» documentTemplate|body|string \| null|false|A liquid template used to render documents to a text that can be embedded.<br><br>Meillisearch interpolates the template for each document and sends the resulting text to the embedder.<br>The embedder then generates document vectors based on this text.|
|» documentTemplateMaxBytes|body|integer \| null|false|Rendered texts are truncated to this size. Defaults to 400.|
|» searchParameters|body|null \| [ChatSearchParams](#schemachatsearchparams)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[ChatSearchParams](#schemachatsearchparams)|false|The search parameters to use for the LLM.|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset chat

<a id="opIddeletechat"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/chat \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "documentTemplate": "string",
    "documentTemplateMaxBytes": 0,
    "searchParameters": {
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "limit": 0,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0
    }
  }'
```

`DELETE /indexes/{indexUid}/settings/chat`

Reset an index's chat to its default value

> Body parameter

```json
{
  "description": "string",
  "documentTemplate": "string",
  "documentTemplateMaxBytes": 0,
  "searchParameters": {
    "hybrid": {
      "semanticRatio": 0,
      "embedder": "string"
    },
    "limit": 0,
    "sort": [
      "string"
    ],
    "distinct": "string",
    "matchingStrategy": "last",
    "attributesToSearchOn": [
      "string"
    ],
    "rankingScoreThreshold": 0
  }
}
```

<h3 id="reset-chat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[ChatSettings](#schemachatsettings)|true|none|
|» description|body|string \| null|false|none|
|» documentTemplate|body|string \| null|false|A liquid template used to render documents to a text that can be embedded.<br><br>Meillisearch interpolates the template for each document and sends the resulting text to the embedder.<br>The embedder then generates document vectors based on this text.|
|» documentTemplateMaxBytes|body|integer \| null|false|Rendered texts are truncated to this size. Defaults to 400.|
|» searchParameters|body|null \| [ChatSearchParams](#schemachatsearchparams)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[ChatSearchParams](#schemachatsearchparams)|false|The search parameters to use for the LLM.|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-chat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get dictionary

<a id="opIdgetdictionary"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/dictionary \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/dictionary`

Get an user defined dictionary

<h3 id="get-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|dictionary is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-dictionary-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update dictionary

<a id="opIdputdictionary"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/dictionary \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/dictionary`

Update an index's user defined dictionary

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset dictionary

<a id="opIddeletedictionary"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/dictionary \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/dictionary`

Reset an index's dictionary to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get displayedAttributes

<a id="opIdgetdisplayedAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/displayed-attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/displayed-attributes`

Get an user defined displayedAttributes

<h3 id="get-displayedattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-displayedattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|displayedAttributes is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-displayedattributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update displayedAttributes

<a id="opIdputdisplayedAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/displayed-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/displayed-attributes`

Update an index's user defined displayedAttributes

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-displayedattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-displayedattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset displayedAttributes

<a id="opIddeletedisplayedAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/displayed-attributes \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/displayed-attributes`

Reset an index's displayedAttributes to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-displayedattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-displayedattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get distinctAttribute

<a id="opIdgetdistinctAttribute"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/distinct-attribute \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/distinct-attribute`

Get an user defined distinctAttribute

<h3 id="get-distinctattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
""
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-distinctattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|distinctAttribute is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update distinctAttribute

<a id="opIdputdistinctAttribute"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/distinct-attribute \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`PUT /indexes/{indexUid}/settings/distinct-attribute`

Update an index's user defined distinctAttribute

> Body parameter

```text
string
```

<h3 id="update-distinctattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-distinctattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset distinctAttribute

<a id="opIddeletedistinctAttribute"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/distinct-attribute \
  -X DELETE \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'string'
```

`DELETE /indexes/{indexUid}/settings/distinct-attribute`

Reset an index's distinctAttribute to its default value

> Body parameter

```text
string
```

<h3 id="reset-distinctattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-distinctattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get embedders

<a id="opIdgetembedders"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/embedders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/embedders`

Get an user defined embedders

<h3 id="get-embedders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-embedders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|embedders is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-embedders-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SettingEmbeddingSettings](#schemasettingembeddingsettings)|false|none|"Technical" type that is required due to utoipa.<br><br>We did not find a way to implement [`utoipa::ToSchema`] for the [`Setting`] enum,<br>but most types can use the `value_type` macro parameter to workaround that issue.<br><br>However that type is used in the settings route, including through the macro that auto-generate<br>all the settings route, so we can't remap the `value_type`.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset embedders

<a id="opIddeleteembedders"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/embedders \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "property1": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    },
    "property2": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    }
  }'
```

`DELETE /indexes/{indexUid}/settings/embedders`

Reset an index's embedders to its default value

> Body parameter

```json
{
  "property1": {
    "inner": {
      "source": "openAi",
      "model": "string",
      "revision": "string",
      "pooling": "useModel",
      "apiKey": "string",
      "dimensions": "string",
      "binaryQuantized": true,
      "documentTemplate": true,
      "documentTemplateMaxBytes": 0,
      "url": "string",
      "request": null,
      "response": null,
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "searchEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "indexingEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "distribution": {
        "current_mean": 0,
        "current_sigma": 0
      }
    }
  },
  "property2": {
    "inner": {
      "source": "openAi",
      "model": "string",
      "revision": "string",
      "pooling": "useModel",
      "apiKey": "string",
      "dimensions": "string",
      "binaryQuantized": true,
      "documentTemplate": true,
      "documentTemplateMaxBytes": 0,
      "url": "string",
      "request": null,
      "response": null,
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "searchEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "indexingEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "distribution": {
        "current_mean": 0,
        "current_sigma": 0
      }
    }
  }
}
```

<h3 id="reset-embedders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|object|true|none|
|» **additionalProperties**|body|[SettingEmbeddingSettings](#schemasettingembeddingsettings)|false|"Technical" type that is required due to utoipa.<br><br>We did not find a way to implement [`utoipa::ToSchema`] for the [`Setting`] enum,<br>but most types can use the `value_type` macro parameter to workaround that issue.<br><br>However that type is used in the settings route, including through the macro that auto-generate<br>all the settings route, so we can't remap the `value_type`.|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-embedders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update embedders

<a id="opIdpatchembedders"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/embedders \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "property1": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    },
    "property2": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    }
  }'
```

`PATCH /indexes/{indexUid}/settings/embedders`

Update an index's user defined embedders

> Body parameter

```json
{
  "property1": {
    "inner": {
      "source": "openAi",
      "model": "string",
      "revision": "string",
      "pooling": "useModel",
      "apiKey": "string",
      "dimensions": "string",
      "binaryQuantized": true,
      "documentTemplate": true,
      "documentTemplateMaxBytes": 0,
      "url": "string",
      "request": null,
      "response": null,
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "searchEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "indexingEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "distribution": {
        "current_mean": 0,
        "current_sigma": 0
      }
    }
  },
  "property2": {
    "inner": {
      "source": "openAi",
      "model": "string",
      "revision": "string",
      "pooling": "useModel",
      "apiKey": "string",
      "dimensions": "string",
      "binaryQuantized": true,
      "documentTemplate": true,
      "documentTemplateMaxBytes": 0,
      "url": "string",
      "request": null,
      "response": null,
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "searchEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "indexingEmbedder": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        }
      },
      "distribution": {
        "current_mean": 0,
        "current_sigma": 0
      }
    }
  }
}
```

<h3 id="update-embedders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|object|true|none|
|» **additionalProperties**|body|[SettingEmbeddingSettings](#schemasettingembeddingsettings)|false|"Technical" type that is required due to utoipa.<br><br>We did not find a way to implement [`utoipa::ToSchema`] for the [`Setting`] enum,<br>but most types can use the `value_type` macro parameter to workaround that issue.<br><br>However that type is used in the settings route, including through the macro that auto-generate<br>all the settings route, so we can't remap the `value_type`.|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-embedders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get facetSearch

<a id="opIdgetfacetSearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/facet-search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/facet-search`

Get an user defined facetSearch

<h3 id="get-facetsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
false
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-facetsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|facetSearch is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update facetSearch

<a id="opIdputfacetSearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/facet-search \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'true'
```

`PUT /indexes/{indexUid}/settings/facet-search`

Update an index's user defined facetSearch

> Body parameter

```json
true
```

<h3 id="update-facetsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-facetsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset facetSearch

<a id="opIddeletefacetSearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/facet-search \
  -X DELETE \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'true'
```

`DELETE /indexes/{indexUid}/settings/facet-search`

Reset an index's facetSearch to its default value

> Body parameter

```json
true
```

<h3 id="reset-facetsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-facetsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get faceting

<a id="opIdgetfaceting"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/faceting \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/faceting`

Get an user defined faceting

<h3 id="get-faceting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-faceting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|faceting is returned|[FacetingSettings](#schemafacetingsettings)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset faceting

<a id="opIddeletefaceting"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/faceting \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "maxValuesPerFacet": 10,
    "sortFacetValuesBy": {
      "genre": "count"
    }
  }'
```

`DELETE /indexes/{indexUid}/settings/faceting`

Reset an index's faceting to its default value

> Body parameter

```json
{
  "maxValuesPerFacet": 10,
  "sortFacetValuesBy": {
    "genre": "count"
  }
}
```

<h3 id="reset-faceting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[FacetingSettings](#schemafacetingsettings)|true|none|
|» maxValuesPerFacet|body|integer \| null|false|none|
|» sortFacetValuesBy|body|object \| null|false|none|
|» » **additionalProperties**|body|[FacetValuesSort](#schemafacetvaluessort)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » **additionalProperties**|alpha|
|» » **additionalProperties**|count|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-faceting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update faceting

<a id="opIdpatchfaceting"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/faceting \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "maxValuesPerFacet": 10,
    "sortFacetValuesBy": {
      "genre": "count"
    }
  }'
```

`PATCH /indexes/{indexUid}/settings/faceting`

Update an index's user defined faceting

> Body parameter

```json
{
  "maxValuesPerFacet": 10,
  "sortFacetValuesBy": {
    "genre": "count"
  }
}
```

<h3 id="update-faceting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[FacetingSettings](#schemafacetingsettings)|true|none|
|» maxValuesPerFacet|body|integer \| null|false|none|
|» sortFacetValuesBy|body|object \| null|false|none|
|» » **additionalProperties**|body|[FacetValuesSort](#schemafacetvaluessort)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » **additionalProperties**|alpha|
|» » **additionalProperties**|count|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-faceting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get filterableAttributes

<a id="opIdgetfilterableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/filterable-attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/filterable-attributes`

Get an user defined filterableAttributes

<h3 id="get-filterableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-filterableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|filterableAttributes is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-filterableattributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FilterableAttributesRule](#schemafilterableattributesrule)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update filterableAttributes

<a id="opIdputfilterableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/filterable-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/filterable-attributes`

Update an index's user defined filterableAttributes

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-filterableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[[FilterableAttributesRule](#schemafilterableattributesrule)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-filterableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset filterableAttributes

<a id="opIddeletefilterableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/filterable-attributes \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/filterable-attributes`

Reset an index's filterableAttributes to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-filterableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[[FilterableAttributesRule](#schemafilterableattributesrule)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-filterableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get localizedAttributes

<a id="opIdgetlocalizedAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/localized-attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/localized-attributes`

Get an user defined localizedAttributes

<h3 id="get-localizedattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-localizedattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|localizedAttributes is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-localizedattributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LocalizedAttributesRuleView](#schemalocalizedattributesruleview)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update localizedAttributes

<a id="opIdputlocalizedAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/localized-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributePatterns": {
        "patterns": [
          "title",
          "overview_*",
          "release_date"
        ]
      },
      "locales": [
        "af"
      ]
    }
  ]'
```

`PUT /indexes/{indexUid}/settings/localized-attributes`

Update an index's user defined localizedAttributes

> Body parameter

```json
[
  {
    "attributePatterns": {
      "patterns": [
        "title",
        "overview_*",
        "release_date"
      ]
    },
    "locales": [
      "af"
    ]
  }
]
```

<h3 id="update-localizedattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[[LocalizedAttributesRuleView](#schemalocalizedattributesruleview)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-localizedattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset localizedAttributes

<a id="opIddeletelocalizedAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/localized-attributes \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "attributePatterns": {
        "patterns": [
          "title",
          "overview_*",
          "release_date"
        ]
      },
      "locales": [
        "af"
      ]
    }
  ]'
```

`DELETE /indexes/{indexUid}/settings/localized-attributes`

Reset an index's localizedAttributes to its default value

> Body parameter

```json
[
  {
    "attributePatterns": {
      "patterns": [
        "title",
        "overview_*",
        "release_date"
      ]
    },
    "locales": [
      "af"
    ]
  }
]
```

<h3 id="reset-localizedattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[[LocalizedAttributesRuleView](#schemalocalizedattributesruleview)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-localizedattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get nonSeparatorTokens

<a id="opIdgetnonSeparatorTokens"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/non-separator-tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/non-separator-tokens`

Get an user defined nonSeparatorTokens

<h3 id="get-nonseparatortokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-nonseparatortokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|nonSeparatorTokens is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-nonseparatortokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update nonSeparatorTokens

<a id="opIdputnonSeparatorTokens"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/non-separator-tokens \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/non-separator-tokens`

Update an index's user defined nonSeparatorTokens

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-nonseparatortokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-nonseparatortokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset nonSeparatorTokens

<a id="opIddeletenonSeparatorTokens"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/non-separator-tokens \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/non-separator-tokens`

Reset an index's nonSeparatorTokens to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-nonseparatortokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-nonseparatortokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get pagination

<a id="opIdgetpagination"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/pagination \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/pagination`

Get an user defined pagination

<h3 id="get-pagination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|pagination is returned|[PaginationSettings](#schemapaginationsettings)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset pagination

<a id="opIddeletepagination"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/pagination \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "maxTotalHits": 250
  }'
```

`DELETE /indexes/{indexUid}/settings/pagination`

Reset an index's pagination to its default value

> Body parameter

```json
{
  "maxTotalHits": 250
}
```

<h3 id="reset-pagination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[PaginationSettings](#schemapaginationsettings)|true|none|
|» maxTotalHits|body|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update pagination

<a id="opIdpatchpagination"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/pagination \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "maxTotalHits": 250
  }'
```

`PATCH /indexes/{indexUid}/settings/pagination`

Update an index's user defined pagination

> Body parameter

```json
{
  "maxTotalHits": 250
}
```

<h3 id="update-pagination-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[PaginationSettings](#schemapaginationsettings)|true|none|
|» maxTotalHits|body|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-pagination-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get prefixSearch

<a id="opIdgetprefixSearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/prefix-search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/prefix-search`

Get an user defined prefixSearch

<h3 id="get-prefixsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
"indexingTime"
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-prefixsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|prefixSearch is returned|[PrefixSearchSettings](#schemaprefixsearchsettings)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update prefixSearch

<a id="opIdputprefixSearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/prefix-search \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"indexingTime"'
```

`PUT /indexes/{indexUid}/settings/prefix-search`

Update an index's user defined prefixSearch

> Body parameter

```json
"indexingTime"
```

<h3 id="update-prefixsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[PrefixSearchSettings](#schemaprefixsearchsettings)|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-prefixsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset prefixSearch

<a id="opIddeleteprefixSearch"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/prefix-search \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"indexingTime"'
```

`DELETE /indexes/{indexUid}/settings/prefix-search`

Reset an index's prefixSearch to its default value

> Body parameter

```json
"indexingTime"
```

<h3 id="reset-prefixsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[PrefixSearchSettings](#schemaprefixsearchsettings)|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-prefixsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get proximityPrecision

<a id="opIdgetproximityPrecision"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/proximity-precision \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/proximity-precision`

Get an user defined proximityPrecision

<h3 id="get-proximityprecision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
"byWord"
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-proximityprecision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|proximityPrecision is returned|[ProximityPrecisionView](#schemaproximityprecisionview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update proximityPrecision

<a id="opIdputproximityPrecision"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/proximity-precision \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"byWord"'
```

`PUT /indexes/{indexUid}/settings/proximity-precision`

Update an index's user defined proximityPrecision

> Body parameter

```json
"byWord"
```

<h3 id="update-proximityprecision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[ProximityPrecisionView](#schemaproximityprecisionview)|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-proximityprecision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset proximityPrecision

<a id="opIddeleteproximityPrecision"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/proximity-precision \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"byWord"'
```

`DELETE /indexes/{indexUid}/settings/proximity-precision`

Reset an index's proximityPrecision to its default value

> Body parameter

```json
"byWord"
```

<h3 id="reset-proximityprecision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[ProximityPrecisionView](#schemaproximityprecisionview)|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-proximityprecision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get rankingRules

<a id="opIdgetrankingRules"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/ranking-rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/ranking-rules`

Get an user defined rankingRules

<h3 id="get-rankingrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-rankingrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|rankingRules is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-rankingrules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RankingRuleView](#schemarankingruleview)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update rankingRules

<a id="opIdputrankingRules"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/ranking-rules \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "Words"
  ]'
```

`PUT /indexes/{indexUid}/settings/ranking-rules`

Update an index's user defined rankingRules

> Body parameter

```json
[
  "Words"
]
```

<h3 id="update-rankingrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[[RankingRuleView](#schemarankingruleview)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-rankingrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset rankingRules

<a id="opIddeleterankingRules"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/ranking-rules \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "Words"
  ]'
```

`DELETE /indexes/{indexUid}/settings/ranking-rules`

Reset an index's rankingRules to its default value

> Body parameter

```json
[
  "Words"
]
```

<h3 id="reset-rankingrules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[[RankingRuleView](#schemarankingruleview)]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-rankingrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get searchCutoffMs

<a id="opIdgetsearchCutoffMs"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/search-cutoff-ms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/search-cutoff-ms`

Get an user defined searchCutoffMs

<h3 id="get-searchcutoffms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
0
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-searchcutoffms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|searchCutoffMs is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update searchCutoffMs

<a id="opIdputsearchCutoffMs"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/search-cutoff-ms \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '0'
```

`PUT /indexes/{indexUid}/settings/search-cutoff-ms`

Update an index's user defined searchCutoffMs

> Body parameter

```json
0
```

<h3 id="update-searchcutoffms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|integer(u-int64)|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-searchcutoffms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset searchCutoffMs

<a id="opIddeletesearchCutoffMs"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/search-cutoff-ms \
  -X DELETE \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '0'
```

`DELETE /indexes/{indexUid}/settings/search-cutoff-ms`

Reset an index's searchCutoffMs to its default value

> Body parameter

```json
0
```

<h3 id="reset-searchcutoffms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|integer(u-int64)|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-searchcutoffms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get searchableAttributes

<a id="opIdgetsearchableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/searchable-attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/searchable-attributes`

Get an user defined searchableAttributes

<h3 id="get-searchableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-searchableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|searchableAttributes is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-searchableattributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update searchableAttributes

<a id="opIdputsearchableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/searchable-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/searchable-attributes`

Update an index's user defined searchableAttributes

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-searchableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-searchableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset searchableAttributes

<a id="opIddeletesearchableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/searchable-attributes \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/searchable-attributes`

Reset an index's searchableAttributes to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-searchableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-searchableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get separatorTokens

<a id="opIdgetseparatorTokens"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/separator-tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/separator-tokens`

Get an user defined separatorTokens

<h3 id="get-separatortokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-separatortokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|separatorTokens is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-separatortokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update separatorTokens

<a id="opIdputseparatorTokens"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/separator-tokens \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/separator-tokens`

Update an index's user defined separatorTokens

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-separatortokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-separatortokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset separatorTokens

<a id="opIddeleteseparatorTokens"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/separator-tokens \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/separator-tokens`

Reset an index's separatorTokens to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-separatortokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-separatortokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get sortableAttributes

<a id="opIdgetsortableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/sortable-attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/sortable-attributes`

Get an user defined sortableAttributes

<h3 id="get-sortableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-sortableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sortableAttributes is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-sortableattributes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update sortableAttributes

<a id="opIdputsortableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/sortable-attributes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/sortable-attributes`

Update an index's user defined sortableAttributes

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-sortableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-sortableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset sortableAttributes

<a id="opIddeletesortableAttributes"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/sortable-attributes \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/sortable-attributes`

Reset an index's sortableAttributes to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-sortableattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-sortableattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get stopWords

<a id="opIdgetstopWords"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/stop-words \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/stop-words`

Get an user defined stopWords

<h3 id="get-stopwords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
[]
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-stopwords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|stopWords is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-stopwords-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update stopWords

<a id="opIdputstopWords"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/stop-words \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`PUT /indexes/{indexUid}/settings/stop-words`

Update an index's user defined stopWords

> Body parameter

```json
[
  "string"
]
```

<h3 id="update-stopwords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-stopwords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset stopWords

<a id="opIddeletestopWords"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/stop-words \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    "string"
  ]'
```

`DELETE /indexes/{indexUid}/settings/stop-words`

Reset an index's stopWords to its default value

> Body parameter

```json
[
  "string"
]
```

<h3 id="reset-stopwords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-stopwords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get synonyms

<a id="opIdgetsynonyms"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/synonyms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/synonyms`

Get an user defined synonyms

<h3 id="get-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|synonyms is returned|Inline|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<h3 id="get-synonyms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update synonyms

<a id="opIdputsynonyms"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/synonyms \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }'
```

`PUT /indexes/{indexUid}/settings/synonyms`

Update an index's user defined synonyms

> Body parameter

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

<h3 id="update-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|object|true|none|
|» **additionalProperties**|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset synonyms

<a id="opIddeletesynonyms"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/synonyms \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  }'
```

`DELETE /indexes/{indexUid}/settings/synonyms`

Reset an index's synonyms to its default value

> Body parameter

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

<h3 id="reset-synonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|object|true|none|
|» **additionalProperties**|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-synonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get typoTolerance

<a id="opIdgettypoTolerance"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/typo-tolerance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /indexes/{indexUid}/settings/typo-tolerance`

Get an user defined typoTolerance

<h3 id="get-typotolerance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-typotolerance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|typoTolerance is returned|[TypoSettings](#schematyposettings)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Reset typoTolerance

<a id="opIddeletetypoTolerance"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/typo-tolerance \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "minWordSizeForTypos": {
      "oneTypo": 5,
      "twoTypos": 9
    },
    "disableOnWords": [
      "iPhone",
      "phone"
    ],
    "disableOnAttributes": [
      "uuid",
      "url"
    ],
    "disableOnNumbers": true
  }'
```

`DELETE /indexes/{indexUid}/settings/typo-tolerance`

Reset an index's typoTolerance to its default value

> Body parameter

```json
{
  "enabled": true,
  "minWordSizeForTypos": {
    "oneTypo": 5,
    "twoTypos": 9
  },
  "disableOnWords": [
    "iPhone",
    "phone"
  ],
  "disableOnAttributes": [
    "uuid",
    "url"
  ],
  "disableOnNumbers": true
}
```

<h3 id="reset-typotolerance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[TypoSettings](#schematyposettings)|true|none|
|» enabled|body|boolean \| null|false|none|
|» minWordSizeForTypos|body|null \| [MinWordSizeTyposSetting](#schemaminwordsizetypossetting)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[MinWordSizeTyposSetting](#schemaminwordsizetypossetting)|false|none|
|» disableOnWords|body|[string]|false|none|
|» disableOnAttributes|body|[string]|false|none|
|» disableOnNumbers|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="reset-typotolerance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update typoTolerance

<a id="opIdpatchtypoTolerance"></a>

> Code samples

```bash
curl http://localhost:7700/indexes/movies/settings/typo-tolerance \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enabled": true,
    "minWordSizeForTypos": {
      "oneTypo": 5,
      "twoTypos": 9
    },
    "disableOnWords": [
      "iPhone",
      "phone"
    ],
    "disableOnAttributes": [
      "uuid",
      "url"
    ],
    "disableOnNumbers": true
  }'
```

`PATCH /indexes/{indexUid}/settings/typo-tolerance`

Update an index's user defined typoTolerance

> Body parameter

```json
{
  "enabled": true,
  "minWordSizeForTypos": {
    "oneTypo": 5,
    "twoTypos": 9
  },
  "disableOnWords": [
    "iPhone",
    "phone"
  ],
  "disableOnAttributes": [
    "uuid",
    "url"
  ],
  "disableOnNumbers": true
}
```

<h3 id="update-typotolerance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|indexUid|path|string|true|Index Unique Identifier|
|body|body|[TypoSettings](#schematyposettings)|true|none|
|» enabled|body|boolean \| null|false|none|
|» minWordSizeForTypos|body|null \| [MinWordSizeTyposSetting](#schemaminwordsizetypossetting)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[MinWordSizeTyposSetting](#schemaminwordsizetypossetting)|false|none|
|» disableOnWords|body|[string]|false|none|
|» disableOnAttributes|body|[string]|false|none|
|» disableOnNumbers|body|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "taskUid": 147,
  "indexUid": "movies",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2024-08-08T17:05:55.791772Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-typotolerance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Task successfully enqueued|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-snapshots">Snapshots</h1>

The snapshots route allows the creation of database snapshots. Snapshots are .snapshot files that can be used to launch Meilisearch.
Creating a snapshot is also referred to as exporting it, whereas launching Meilisearch with a snapshot is referred to as importing it.
During a snapshot export, all indexes of the current instance are exported—together with their documents and settings—and saved as a single .snapshot file.
During a snapshot import, all indexes contained in the indicated .snapshot file are imported along with their associated documents and settings.
Snapshot imports are performed at launch using an option.

<a href="https://www.meilisearch.com/docs/reference/api/snapshots">External documentation</a>

## Create a snapshot

<a id="opIdcreate_snapshot"></a>

> Code samples

```bash
curl http://localhost:7700/snapshots \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /snapshots`

Triggers a snapshot creation process. Once the process is complete, a snapshot is created in the snapshot directory. If the snapshot directory does not exist yet, it will be created.

> Example responses

> 202 Response

```json
{
  "taskUid": 0,
  "indexUid": null,
  "status": "enqueued",
  "type": "snapshotCreation",
  "enqueuedAt": "2021-01-01T09:39:00.000000Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="create-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Snapshot is being created|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-dumps">Dumps</h1>

The `dumps` route allows the creation of database dumps.
Dumps are `.dump` files that can be used to launch Meilisearch. Dumps are compatible between Meilisearch versions.
Creating a dump is also referred to as exporting it, whereas launching Meilisearch with a dump is referred to as importing it.
During a [dump export](https://www.meilisearch.com/docs/reference/api/dump#create-a-dump), all indexes of the current instance are
exported—together with their documents and settings—and saved as a single `.dump` file. During a dump import,
all indexes contained in the indicated `.dump` file are imported along with their associated documents and settings.
Any existing index with the same uid as an index in the dump file will be overwritten.
Dump imports are [performed at launch](https://www.meilisearch.com/docs/learn/advanced/dumps#importing-a-dump) using an option.

<a href="https://www.meilisearch.com/docs/reference/api/dump">External documentation</a>

## Create a dump

<a id="opIdcreate_dump"></a>

> Code samples

```bash
curl http://localhost:7700/dumps \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /dumps`

Triggers a dump creation process. Once the process is complete, a dump is created in the
[dump directory](https://www.meilisearch.com/docs/learn/self_hosted/configure_meilisearch_at_launch#dump-directory).
If the dump directory does not exist yet, it will be created.

> Example responses

> 202 Response

```json
{
  "taskUid": 0,
  "indexUid": null,
  "status": "enqueued",
  "type": "DumpCreation",
  "enqueuedAt": "2021-01-01T09:39:00.000000Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="create-a-dump-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Dump is being created|[SummarizedTaskView](#schemasummarizedtaskview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-keys">Keys</h1>

Manage API `keys` for a Meilisearch instance. Each key has a given set of permissions.
You must have the master key or the default admin key to access the keys route. More information about the keys and their rights.
Accessing any route under `/keys` without having set a master key will result in an error.

<a href="https://www.meilisearch.com/docs/reference/api/keys">External documentation</a>

## Get API Keys

<a id="opIdlist_api_keys"></a>

> Code samples

```bash
curl 'http://localhost:7700/keys?offset=0&limit=20' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /keys`

List all API Keys

<h3 id="get-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|true|none|
|limit|query|integer|true|none|

> Example responses

> 202 Response

```json
{
  "results": [
    {
      "uid": "01b4bc42-eb33-4041-b481-254d00cce834",
      "key": "d0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4",
      "name": "An API Key",
      "description": null,
      "actions": [
        "documents.add"
      ],
      "indexes": [
        "movies"
      ],
      "expiresAt": "2022-11-12T10:00:00Z",
      "createdAt": "2021-11-12T10:00:00Z",
      "updatedAt": "2021-11-12T10:00:00Z"
    }
  ],
  "limit": 20,
  "offset": 0,
  "total": 1
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|List of keys|[PaginationView_KeyView](#schemapaginationview_keyview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create an API Key

<a id="opIdcreate_api_key"></a>

> Code samples

```bash
curl http://localhost:7700/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": null,
    "name": "Indexing Products API key",
    "uid": null,
    "actions": [
      "documents.add"
    ],
    "indexes": [
      "products"
    ],
    "expiresAt": "1970-01-01T00:00:00Z"
  }'
```

`POST /keys`

Create an API Key.

> Body parameter

```json
{
  "description": null,
  "name": "Indexing Products API key",
  "uid": null,
  "actions": [
    "documents.add"
  ],
  "indexes": [
    "products"
  ],
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateApiKey](#schemacreateapikey)|true|none|
|» description|body|string \| null|false|A description for the key. `null` if empty.|
|» name|body|string \| null|false|A human-readable name for the key. `null` if empty.|
|» uid|body|string(uuid)|true|A uuid v4 to identify the API Key. If not specified, it's generated by Meilisearch.|
|» actions|body|[[Action](#schemaaction)]|true|A list of actions permitted for the key. `["*"]` for all actions. The `*` character can be used as a wildcard when located at the last position. e.g. `documents.*` to authorize access on all documents endpoints.|
|» indexes|body|[string]|true|A list of accessible indexes permitted for the key. `["*"]` for all indexes. The `*` character can be used as a wildcard when located at the last position. e.g. `products_*` to allow access to all indexes whose names start with `products_`.|
|» expiresAt|body|string \| null(date-time)|false|Represent the expiration date and time as RFC 3339 format. `null` equals to no expiration time.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» actions|*|
|» actions|search|
|» actions|documents.*|
|» actions|documents.add|
|» actions|documents.get|
|» actions|documents.delete|
|» actions|indexes.*|
|» actions|indexes.create|
|» actions|indexes.get|
|» actions|indexes.update|
|» actions|indexes.delete|
|» actions|indexes.swap|
|» actions|tasks.*|
|» actions|tasks.cancel|
|» actions|tasks.delete|
|» actions|tasks.get|
|» actions|settings.*|
|» actions|settings.get|
|» actions|settings.update|
|» actions|stats.*|
|» actions|stats.get|
|» actions|metrics.*|
|» actions|metrics.get|
|» actions|dumps.*|
|» actions|dumps.create|
|» actions|snapshots.*|
|» actions|snapshots.create|
|» actions|version|
|» actions|keys.create|
|» actions|keys.get|
|» actions|keys.update|
|» actions|keys.delete|
|» actions|experimental.get|
|» actions|experimental.update|
|» actions|network.get|
|» actions|network.update|
|» actions|chatCompletions|
|» actions|chats.*|
|» actions|chats.get|
|» actions|chats.delete|
|» actions|chatsSettings.*|
|» actions|chatsSettings.get|
|» actions|chatsSettings.update|

> Example responses

> 202 Response

```json
{
  "uid": "01b4bc42-eb33-4041-b481-254d00cce834",
  "key": "d0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4",
  "name": "Indexing Products API key",
  "description": null,
  "actions": [
    "documents.add"
  ],
  "indexes": [
    "products"
  ],
  "expiresAt": "2021-11-13T00:00:00Z",
  "createdAt": "2021-11-12T10:00:00Z",
  "updatedAt": "2021-11-12T10:00:00Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="create-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Key has been created|[KeyView](#schemakeyview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get an API Key

<a id="opIdget_api_key"></a>

> Code samples

```bash
curl http://localhost:7700/keys/7b198a7f-52a0-4188-8762-9ad93cd608b2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /keys/{uidOrKey}`

Get an API key from its `uid` or its `key` field.

<h3 id="get-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uidOrKey|path|string(password)|true|The `uid` or `key` field of an existing API key|

> Example responses

> 200 Response

```json
{
  "uid": "01b4bc42-eb33-4041-b481-254d00cce834",
  "key": "d0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4",
  "name": "An API Key",
  "description": null,
  "actions": [
    "documents.add"
  ],
  "indexes": [
    "movies"
  ],
  "expiresAt": "2022-11-12T10:00:00Z",
  "createdAt": "2021-11-12T10:00:00Z",
  "updatedAt": "2021-11-12T10:00:00Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The key is returned|[KeyView](#schemakeyview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete a key

<a id="opIddelete_api_key"></a>

> Code samples

```bash
curl http://localhost:7700/keys/7b198a7f-52a0-4188-8762-9ad93cd608b2 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /keys/{uidOrKey}`

Delete the specified API key.

<h3 id="delete-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uidOrKey|path|string(password)|true|The `uid` or `key` field of an existing API key|

> Example responses

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="delete-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The key have been removed|None|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update a Key

<a id="opIdpatch_api_key"></a>

> Code samples

```bash
curl http://localhost:7700/keys/7b198a7f-52a0-4188-8762-9ad93cd608b2 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "This key is used to update documents in the products index",
    "name": "Indexing Products API key"
  }'
```

`PATCH /keys/{uidOrKey}`

Update the name and description of an API key.
Updates to keys are partial. This means you should provide only the fields you intend to update, as any fields not present in the payload will remain unchanged.

> Body parameter

```json
{
  "description": "This key is used to update documents in the products index",
  "name": "Indexing Products API key"
}
```

<h3 id="update-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uidOrKey|path|string(password)|true|The `uid` or `key` field of an existing API key|
|body|body|[PatchApiKey](#schemapatchapikey)|true|none|
|» description|body|string \| null|false|none|
|» name|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "uid": "01b4bc42-eb33-4041-b481-254d00cce834",
  "key": "d0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4",
  "name": "An API Key",
  "description": null,
  "actions": [
    "documents.add"
  ],
  "indexes": [
    "movies"
  ],
  "expiresAt": "2022-11-12T10:00:00Z",
  "createdAt": "2021-11-12T10:00:00Z",
  "updatedAt": "2021-11-12T10:00:00Z"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The key have been updated|[KeyView](#schemakeyview)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-logs">Logs</h1>

Everything about retrieving or customizing logs.
Currently [experimental](https://www.meilisearch.com/docs/learn/experimental/overview).

<a href="https://www.meilisearch.com/docs/learn/experimental/log_customization">External documentation</a>

## Update target of the console logs

<a id="opIdupdate_stderr_target"></a>

> Code samples

```bash
curl http://localhost:7700/logs/stderr \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target": "milli=trace,index_scheduler,actix_web=off"
  }'
```

`POST /logs/stderr`

This route lets you specify at runtime the level of the console logs outputted on stderr.

> Body parameter

```json
{
  "target": "milli=trace,index_scheduler,actix_web=off"
}
```

<h3 id="update-target-of-the-console-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateStderrLogs](#schemaupdatestderrlogs)|true|none|
|» target|body|string|true|Lets you specify which parts of the code you want to inspect and is formatted like that: code_part=log_level,code_part=log_level<br>- If the `code_part` is missing, then the `log_level` will be applied to everything.<br>- If the `log_level` is missing, then the `code_part` will be selected in `info` log level.|

> Example responses

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="update-target-of-the-console-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The console logs have been updated|None|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Retrieve logs

<a id="opIdget_logs"></a>

> Code samples

```bash
curl http://localhost:7700/logs/stream \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target": "milli=trace,index_scheduler,actix_web=off",
    "mode": "Human",
    "profileMemory": false
  }'
```

`POST /logs/stream`

Stream logs over HTTP. The format of the logs depends on the configuration specified in the payload.
The logs are sent as multi-part, and the stream never stops, so make sure your clients correctly handle that.
To make the server stop sending you logs, you can call the `DELETE /logs/stream` route.

There can only be one listener at a timeand an error will be returned if you call this route while it's being used by another client.

> Body parameter

```json
{
  "target": "milli=trace,index_scheduler,actix_web=off",
  "mode": "Human",
  "profileMemory": false
}
```

<h3 id="retrieve-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetLogs](#schemagetlogs)|true|none|
|» target|body|string|true|Lets you specify which parts of the code you want to inspect and is formatted like that: code_part=log_level,code_part=log_level<br>- If the `code_part` is missing, then the `log_level` will be applied to everything.<br>- If the `log_level` is missing, then the `code_part` will be selected in `info` log level.|
|» mode|body|[LogMode](#schemalogmode)|true|none|
|» » *oneOf*|body|[LogMode](#schemalogmode)|false|Lets you customize the format of the logs.|
|» profileMemory|body|boolean|true|A boolean to indicate if you want to profile the memory as well. This is only useful while using the `profile` mode.<br>Be cautious, though; it slows down the engine a lot.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|human|
|» » *oneOf*|json|
|» » *oneOf*|profile|

> Example responses

> 200 Response

```json
"\n2024-10-08T13:35:02.643750Z  WARN HTTP request{method=GET host=\"localhost:7700\" route=/metrics query_parameters= user_agent=HTTPie/3.2.3 status_code=400 error=Getting metrics requires enabling the `metrics` experimental feature. See https://github.com/meilisearch/product/discussions/625}: tracing_actix_web::middleware: Error encountered while processing the incoming HTTP request: ResponseError { code: 400, message: \"Getting metrics requires enabling the `metrics` experimental feature. See https://github.com/meilisearch/product/discussions/625\", error_code: \"feature_not_enabled\", error_type: \"invalid_request\", error_link: \"https://docs.meilisearch.com/errors#feature_not_enabled\" }\n2024-10-08T13:35:02.644191Z  INFO HTTP request{method=GET host=\"localhost:7700\" route=/metrics query_parameters= user_agent=HTTPie/3.2.3 status_code=400 error=Getting metrics requires enabling the `metrics` experimental feature. See https://github.com/meilisearch/product/discussions/625}: meilisearch: close time.busy=1.66ms time.idle=658µs\n2024-10-08T13:35:18.564152Z  INFO HTTP request{method=PATCH host=\"localhost:7700\" route=/experimental-features query_parameters= user_agent=curl/8.6.0 status_code=200}: meilisearch: close time.busy=1.17ms time.idle=127µs\n2024-10-08T13:35:23.094987Z  INFO HTTP request{method=GET host=\"localhost:7700\" route=/metrics query_parameters= user_agent=HTTPie/3.2.3 status_code=200}: meilisearch: close time.busy=2.12ms time.idle=595µs\n"
```

> 400 Response

```json
{
  "message": "The `/logs/stream` route is currently in use by someone else.",
  "code": "bad_request",
  "type": "invalid_request",
  "link": "https://docs.meilisearch.com/errors#bad_request"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="retrieve-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Logs are being returned|Inline|
|400|Bad Request|The route is already being used|[ResponseError](#schemaresponseerror)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Stop retrieving logs

<a id="opIdcancel_logs"></a>

> Code samples

```bash
curl http://localhost:7700/logs/stream \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /logs/stream`

Call this route to make the engine stops sending logs through the `POST /logs/stream` route.

> Example responses

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="stop-retrieving-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Logs are being returned|None|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-multi-search">Multi-search</h1>

The `/multi-search` route allows you to perform multiple search queries on one or more indexes by bundling them into a single HTTP request. Multi-search is also known as federated search.

<a href="https://www.meilisearch.com/docs/reference/api/multi_search">External documentation</a>

## Perform a multi-search

<a id="opIdmulti_search_with_post"></a>

> Code samples

```bash
curl http://localhost:7700/multi-search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "queries": [
      {
        "indexUid": "movies",
        "q": "string",
        "vector": [
          0
        ],
        "hybrid": {
          "semanticRatio": 0,
          "embedder": "string"
        },
        "offset": 0,
        "limit": 0,
        "page": 0,
        "hitsPerPage": 0,
        "attributesToRetrieve": [
          "string"
        ],
        "retrieveVectors": true,
        "attributesToCrop": [
          "string"
        ],
        "cropLength": 0,
        "attributesToHighlight": [
          "string"
        ],
        "showRankingScore": true,
        "showRankingScoreDetails": true,
        "showMatchesPosition": true,
        "filter": null,
        "sort": [
          "string"
        ],
        "distinct": "string",
        "facets": [
          "string"
        ],
        "highlightPreTag": "string",
        "highlightPostTag": "string",
        "cropMarker": "string",
        "matchingStrategy": "last",
        "attributesToSearchOn": [
          "string"
        ],
        "rankingScoreThreshold": 0,
        "locales": [
          "af"
        ],
        "federationOptions": {
          "weight": 0,
          "remote": "string",
          "queryPosition": 0
        }
      }
    ],
    "federation": {
      "limit": 0,
      "offset": 0,
      "facetsByIndex": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mergeFacets": {
        "maxValuesPerFacet": 0
      }
    }
  }'
```

`POST /multi-search`

Bundle multiple search queries in a single API request. Use this endpoint to search through multiple indexes at once.

> Body parameter

```json
{
  "queries": [
    {
      "indexUid": "movies",
      "q": "string",
      "vector": [
        0
      ],
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "offset": 0,
      "limit": 0,
      "page": 0,
      "hitsPerPage": 0,
      "attributesToRetrieve": [
        "string"
      ],
      "retrieveVectors": true,
      "attributesToCrop": [
        "string"
      ],
      "cropLength": 0,
      "attributesToHighlight": [
        "string"
      ],
      "showRankingScore": true,
      "showRankingScoreDetails": true,
      "showMatchesPosition": true,
      "filter": null,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "facets": [
        "string"
      ],
      "highlightPreTag": "string",
      "highlightPostTag": "string",
      "cropMarker": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0,
      "locales": [
        "af"
      ],
      "federationOptions": {
        "weight": 0,
        "remote": "string",
        "queryPosition": 0
      }
    }
  ],
  "federation": {
    "limit": 0,
    "offset": 0,
    "facetsByIndex": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mergeFacets": {
      "maxValuesPerFacet": 0
    }
  }
}
```

<h3 id="perform-a-multi-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FederatedSearch](#schemafederatedsearch)|true|none|
|» queries|body|[[SearchQueryWithIndex](#schemasearchquerywithindex)]|true|none|
|» federation|body|null \| [Federation](#schemafederation)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[Federation](#schemafederation)|false|none|

> Example responses

> 200 Response

```json
{
  "hits": [
    {
      "id": 42,
      "title": "Batman returns",
      "overview": "The overview of batman returns",
      "_federation": {
        "indexUid": "movies",
        "queriesPosition": 0
      }
    },
    {
      "comicsId": "batman-killing-joke",
      "description": "This comic is really awesome",
      "title": "Batman: the killing joke",
      "_federation": {
        "indexUid": "comics",
        "queriesPosition": 1
      }
    }
  ],
  "processingTimeMs": 0,
  "limit": 20,
  "offset": 0,
  "estimatedTotalHits": 2,
  "semanticHitCount": 0
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="perform-a-multi-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Federated multi-search|[FederatedSearchResult](#schemafederatedsearchresult)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-experimental-features">Experimental features</h1>

The `/experimental-features` route allows you to activate or deactivate some of Meilisearch's experimental features.

This route is **synchronous**. This means that no task object will be returned, and any activated or deactivated features will be made available or unavailable immediately.

<a href="https://www.meilisearch.com/docs/reference/api/experimental_features">External documentation</a>

## Get all experimental features

<a id="opIdget_features"></a>

> Code samples

```bash
curl http://localhost:7700/experimental-features \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /experimental-features`

Get a list of all experimental features that can be activated via the /experimental-features route and whether or not they are currently activated.

> Example responses

> 200 Response

```json
{
  "metrics": true,
  "logsRoute": false,
  "editDocumentsByFunction": false,
  "containsFilter": false,
  "network": false,
  "getTaskDocumentsRoute": false,
  "compositeEmbedders": false,
  "chatCompletions": false
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-all-experimental-features-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experimental features are returned|[RuntimeTogglableFeatures](#schemaruntimetogglablefeatures)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Configure experimental features

<a id="opIdpatch_features"></a>

> Code samples

```bash
curl http://localhost:7700/experimental-features \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /experimental-features`

Activate or deactivate experimental features.

> Example responses

> 200 Response

```json
{
  "metrics": true,
  "logsRoute": false,
  "editDocumentsByFunction": false,
  "containsFilter": false,
  "network": false,
  "getTaskDocumentsRoute": false,
  "compositeEmbedders": false,
  "chatCompletions": false
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="configure-experimental-features-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Experimental features are returned|[RuntimeTogglableFeatures](#schemaruntimetogglablefeatures)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-network">Network</h1>

The `/network` route allows you to describe the topology of a network of Meilisearch instances.

This route is **synchronous**. This means that no task object will be returned, and any change to the network will be made available immediately.

<a href="https://www.meilisearch.com/docs/reference/api/network">External documentation</a>

## Get network topology

<a id="opIdget_network"></a>

> Code samples

```bash
curl http://localhost:7700/network \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /network`

Get a list of all Meilisearch instances currently known to this instance.

> Example responses

> 200 Response

```json
{
  "self": "ms-0",
  "remotes": {
    "ms-0": {
      "url": "http://localhost:7700",
      "searchApiKey": null
    },
    "ms-1": {
      "url": "http://localhost:7701",
      "searchApiKey": "foo"
    },
    "ms-2": {
      "url": "http://localhost:7702",
      "searchApiKey": "bar"
    }
  }
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-network-topology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Known nodes are returned|[Network](#schemanetwork)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Configure Network

<a id="opIdpatch_network"></a>

> Code samples

```bash
curl http://localhost:7700/network \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "remotes": "http://localhost:7700",
    "self": "ms-00"
  }'
```

`PATCH /network`

Add or remove nodes from network.

> Body parameter

```json
{
  "remotes": "http://localhost:7700",
  "self": "ms-00"
}
```

<h3 id="configure-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Network](#schemanetwork)|true|none|
|» remotes|body|object \| null|false|none|
|» » **additionalProperties**|body|[Remote](#schemaremote)|false|none|
|» self|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "self": "ms-0",
  "remotes": {
    "ms-0": {
      "url": "http://localhost:7700",
      "searchApiKey": null
    },
    "ms-1": {
      "url": "http://localhost:7701",
      "searchApiKey": "foo"
    },
    "ms-2": {
      "url": "http://localhost:7702",
      "searchApiKey": "bar"
    }
  }
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="configure-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New network state is returned|[Network](#schemanetwork)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="meilisearch-health">Health</h1>

## Get Health

<a id="opIdget_health"></a>

> Code samples

```bash
curl http://localhost:7700/health \
  -H 'Accept: application/json'
```

`GET /health`

The health check endpoint enables you to periodically test the health of your Meilisearch instance.

> Example responses

> 200 Response

```json
{
  "status": "available"
}
```

<h3 id="get-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Instance is healthy|[HealthResponse](#schemahealthresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meilisearch-version">Version</h1>

## Get version

<a id="opIdget_version"></a>

> Code samples

```bash
curl http://localhost:7700/version \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /version`

Current version of Meilisearch.

> Example responses

> 200 Response

```json
{
  "commitSha": "b46889b5f0f2f8b91438a08a358ba8f05fc09fc1",
  "commitDate": "2021-07-08",
  "pkgVersion": "0.23.0"
}
```

> 401 Response

```json
{
  "message": "The Authorization header is missing. It must use the bearer authorization method.",
  "code": "missing_authorization_header",
  "type": "auth",
  "link": "https://docs.meilisearch.com/errors#missing_authorization_header"
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Instance is healthy|[VersionResponse](#schemaversionresponse)|
|401|Unauthorized|The authorization header is missing|[ResponseError](#schemaresponseerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"*"
```

<h2 id="tocS_AllBatches">AllBatches</h2>
<!-- backwards compatibility -->
<a id="schemaallbatches"></a>
<a id="schema_AllBatches"></a>
<a id="tocSallbatches"></a>
<a id="tocsallbatches"></a>

```json
{
  "results": [
    {
      "uid": 0,
      "progress": {
        "steps": [
          {
            "currentStep": "string",
            "finished": 0,
            "total": 0
          }
        ],
        "percentage": 0
      },
      "details": {
        "displayedAttributes": [
          "id",
          "title",
          "description",
          "url"
        ],
        "searchableAttributes": [
          "title",
          "description"
        ],
        "filterableAttributes": [
          "release_date",
          "genre"
        ],
        "sortableAttributes": [
          "release_date"
        ],
        "rankingRules": [
          "words",
          "typo",
          "proximity",
          "attribute",
          "exactness"
        ],
        "stopWords": [
          "the",
          "a",
          "them",
          "their"
        ],
        "nonSeparatorTokens": [
          " ",
          "\n"
        ],
        "separatorTokens": [
          "S"
        ],
        "dictionary": [
          "iPhone pro"
        ],
        "synonyms": {
          "he": [
            "she",
            "they",
            "them"
          ],
          "phone": [
            "iPhone",
            "android"
          ]
        },
        "distinctAttribute": "sku",
        "proximityPrecision": "byAttribute",
        "typoTolerance": {
          "enabled": true,
          "minWordSizeForTypos": {
            "oneTypo": 5,
            "twoTypos": 9
          },
          "disableOnWords": [
            "iPhone",
            "phone"
          ],
          "disableOnAttributes": [
            "uuid",
            "url"
          ],
          "disableOnNumbers": true
        },
        "faceting": {
          "maxValuesPerFacet": 10,
          "sortFacetValuesBy": {
            "genre": "count"
          }
        },
        "pagination": {
          "maxTotalHits": 250
        },
        "embedders": {
          "property1": {
            "inner": {
              "source": "openAi",
              "model": "string",
              "revision": "string",
              "pooling": "useModel",
              "apiKey": "string",
              "dimensions": "string",
              "binaryQuantized": true,
              "documentTemplate": true,
              "documentTemplateMaxBytes": 0,
              "url": "string",
              "request": null,
              "response": null,
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "searchEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "indexingEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "distribution": {
                "current_mean": 0,
                "current_sigma": 0
              }
            }
          },
          "property2": {
            "inner": {
              "source": "openAi",
              "model": "string",
              "revision": "string",
              "pooling": "useModel",
              "apiKey": "string",
              "dimensions": "string",
              "binaryQuantized": true,
              "documentTemplate": true,
              "documentTemplateMaxBytes": 0,
              "url": "string",
              "request": null,
              "response": null,
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "searchEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "indexingEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "distribution": {
                "current_mean": 0,
                "current_sigma": 0
              }
            }
          }
        },
        "searchCutoffMs": 50,
        "localizedAttributes": 50,
        "facetSearch": true,
        "prefixSearch": "indexingTime",
        "chat": {
          "description": "string",
          "documentTemplate": "string",
          "documentTemplateMaxBytes": 0,
          "searchParameters": {
            "hybrid": {
              "semanticRatio": 0,
              "embedder": "string"
            },
            "limit": 0,
            "sort": [
              "string"
            ],
            "distinct": "string",
            "matchingStrategy": "last",
            "attributesToSearchOn": [
              "string"
            ],
            "rankingScoreThreshold": 0
          }
        },
        "receivedDocuments": 0,
        "indexedDocuments": 0,
        "editedDocuments": 0,
        "primaryKey": "string",
        "providedIds": 0,
        "deletedDocuments": 0,
        "matchedTasks": 0,
        "canceledTasks": 0,
        "deletedTasks": 0,
        "originalFilter": "string",
        "dumpUid": "string",
        "context": {},
        "function": "string",
        "swaps": [
          {
            "indexes": [
              "string",
              "string"
            ]
          }
        ],
        "upgradeFrom": "string",
        "upgradeTo": "string"
      },
      "stats": {
        "totalNbTasks": 0,
        "status": {
          "property1": 0,
          "property2": 0
        },
        "types": {
          "property1": 0,
          "property2": 0
        },
        "indexUids": {
          "property1": 0,
          "property2": 0
        },
        "progressTrace": {
          "property1": null,
          "property2": null
        },
        "writeChannelCongestion": {
          "property1": null,
          "property2": null
        },
        "internalDatabaseSizes": {
          "property1": null,
          "property2": null
        }
      },
      "duration": "string",
      "startedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "batchStrategy": "string"
    }
  ],
  "total": 0,
  "limit": 0,
  "from": 0,
  "next": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[BatchView](#schemabatchview)]|true|none|none|
|total|integer(u-int64)|true|none|none|
|limit|integer(u-int32)|true|none|none|
|from|integer \| null(u-int32)|false|none|none|
|next|integer \| null(u-int32)|false|none|none|

<h2 id="tocS_AllTasks">AllTasks</h2>
<!-- backwards compatibility -->
<a id="schemaalltasks"></a>
<a id="schema_AllTasks"></a>
<a id="tocSalltasks"></a>
<a id="tocsalltasks"></a>

```json
{
  "results": [
    {
      "uid": 4312,
      "batchUid": "movies",
      "indexUid": "string",
      "status": "processing",
      "type": [
        "documentAdditionOrUpdate",
        "documentEdition",
        "documentDeletion",
        "settingsUpdate",
        "indexCreation",
        "indexDeletion",
        "indexUpdate",
        "indexSwap",
        "taskCancelation",
        "taskDeletion",
        "dumpCreation",
        "snapshotCreation",
        "upgradeDatabase"
      ],
      "canceledBy": 4326,
      "details": {
        "displayedAttributes": [
          "id",
          "title",
          "description",
          "url"
        ],
        "searchableAttributes": [
          "title",
          "description"
        ],
        "filterableAttributes": [
          "release_date",
          "genre"
        ],
        "sortableAttributes": [
          "release_date"
        ],
        "rankingRules": [
          "words",
          "typo",
          "proximity",
          "attribute",
          "exactness"
        ],
        "stopWords": [
          "the",
          "a",
          "them",
          "their"
        ],
        "nonSeparatorTokens": [
          " ",
          "\n"
        ],
        "separatorTokens": [
          "S"
        ],
        "dictionary": [
          "iPhone pro"
        ],
        "synonyms": {
          "he": [
            "she",
            "they",
            "them"
          ],
          "phone": [
            "iPhone",
            "android"
          ]
        },
        "distinctAttribute": "sku",
        "proximityPrecision": "byAttribute",
        "typoTolerance": {
          "enabled": true,
          "minWordSizeForTypos": {
            "oneTypo": 5,
            "twoTypos": 9
          },
          "disableOnWords": [
            "iPhone",
            "phone"
          ],
          "disableOnAttributes": [
            "uuid",
            "url"
          ],
          "disableOnNumbers": true
        },
        "faceting": {
          "maxValuesPerFacet": 10,
          "sortFacetValuesBy": {
            "genre": "count"
          }
        },
        "pagination": {
          "maxTotalHits": 250
        },
        "embedders": {
          "property1": {
            "inner": {
              "source": "openAi",
              "model": "string",
              "revision": "string",
              "pooling": "useModel",
              "apiKey": "string",
              "dimensions": "string",
              "binaryQuantized": true,
              "documentTemplate": true,
              "documentTemplateMaxBytes": 0,
              "url": "string",
              "request": null,
              "response": null,
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "searchEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "indexingEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "distribution": {
                "current_mean": 0,
                "current_sigma": 0
              }
            }
          },
          "property2": {
            "inner": {
              "source": "openAi",
              "model": "string",
              "revision": "string",
              "pooling": "useModel",
              "apiKey": "string",
              "dimensions": "string",
              "binaryQuantized": true,
              "documentTemplate": true,
              "documentTemplateMaxBytes": 0,
              "url": "string",
              "request": null,
              "response": null,
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "searchEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "indexingEmbedder": {
                "source": "openAi",
                "model": "string",
                "revision": "string",
                "pooling": "useModel",
                "apiKey": "string",
                "dimensions": "string",
                "documentTemplate": true,
                "documentTemplateMaxBytes": 0,
                "url": "string",
                "request": null,
                "response": null,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "distribution": {
                "current_mean": 0,
                "current_sigma": 0
              }
            }
          }
        },
        "searchCutoffMs": 50,
        "localizedAttributes": 50,
        "facetSearch": true,
        "prefixSearch": "indexingTime",
        "chat": {
          "description": "string",
          "documentTemplate": "string",
          "documentTemplateMaxBytes": 0,
          "searchParameters": {
            "hybrid": {
              "semanticRatio": 0,
              "embedder": "string"
            },
            "limit": 0,
            "sort": [
              "string"
            ],
            "distinct": "string",
            "matchingStrategy": "last",
            "attributesToSearchOn": [
              "string"
            ],
            "rankingScoreThreshold": 0
          }
        },
        "receivedDocuments": 0,
        "indexedDocuments": 0,
        "editedDocuments": 0,
        "primaryKey": "string",
        "providedIds": 0,
        "deletedDocuments": 0,
        "matchedTasks": 0,
        "canceledTasks": 0,
        "deletedTasks": 0,
        "originalFilter": "string",
        "dumpUid": "string",
        "context": {},
        "function": "string",
        "swaps": [
          {
            "indexes": [
              "string",
              "string"
            ]
          }
        ],
        "upgradeFrom": "string",
        "upgradeTo": "string"
      },
      "error": {
        "message": "string",
        "code": "api_key_already_exists",
        "type": "internal",
        "link": "string"
      },
      "duration": null,
      "enqueuedAt": "2024-08-08_14:12:09.393Z",
      "startedAt": "2024-08-08_14:12:09.393Z",
      "finishedAt": "2024-08-08_14:12:09.393Z"
    }
  ],
  "total": 0,
  "limit": 0,
  "from": 0,
  "next": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[TaskView](#schemataskview)]|true|none|The list of tasks that matched the filter.|
|total|integer(u-int64)|true|none|Total number of browsable results using offset/limit parameters for the given resource.|
|limit|integer(u-int32)|true|none|Limit given for the query. If limit is not provided as a query parameter, this parameter displays the default limit value.|
|from|integer \| null(u-int32)|false|none|The first task uid returned.|
|next|integer \| null(u-int32)|false|none|Represents the value to send in from to fetch the next slice of the results. The first item for the next slice starts at this exact number. When the returned value is null, it means that all the data have been browsed in the given order.|

<h2 id="tocS_AttributePatterns">AttributePatterns</h2>
<!-- backwards compatibility -->
<a id="schemaattributepatterns"></a>
<a id="schema_AttributePatterns"></a>
<a id="tocSattributepatterns"></a>
<a id="tocsattributepatterns"></a>

```json
{
  "patterns": [
    "title",
    "overview_*",
    "release_date"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patterns|[string]|true|none|none|

<h2 id="tocS_BTreeMap">BTreeMap</h2>
<!-- backwards compatibility -->
<a id="schemabtreemap"></a>
<a id="schema_BTreeMap"></a>
<a id="tocSbtreemap"></a>
<a id="tocsbtreemap"></a>

```json
{
  "property1": [
    {
      "start": 0,
      "length": 0,
      "indices": [
        0
      ]
    }
  ],
  "property2": [
    {
      "start": 0,
      "length": 0,
      "indices": [
        0
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[object]|false|none|none|

<h2 id="tocS_BatchStats">BatchStats</h2>
<!-- backwards compatibility -->
<a id="schemabatchstats"></a>
<a id="schema_BatchStats"></a>
<a id="tocSbatchstats"></a>
<a id="tocsbatchstats"></a>

```json
{
  "totalNbTasks": 0,
  "status": {
    "property1": 0,
    "property2": 0
  },
  "types": {
    "property1": 0,
    "property2": 0
  },
  "indexUids": {
    "property1": 0,
    "property2": 0
  },
  "progressTrace": {
    "property1": null,
    "property2": null
  },
  "writeChannelCongestion": {
    "property1": null,
    "property2": null
  },
  "internalDatabaseSizes": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalNbTasks|[u32](#schemau32)|true|none|none|
|status|object|true|none|none|
|types|object|true|none|none|
|indexUids|object|true|none|none|
|progressTrace|object|false|none|none|
|writeChannelCongestion|object \| null|false|none|none|
|internalDatabaseSizes|object|false|none|none|

<h2 id="tocS_BatchView">BatchView</h2>
<!-- backwards compatibility -->
<a id="schemabatchview"></a>
<a id="schema_BatchView"></a>
<a id="tocSbatchview"></a>
<a id="tocsbatchview"></a>

```json
{
  "uid": 0,
  "progress": {
    "steps": [
      {
        "currentStep": "string",
        "finished": 0,
        "total": 0
      }
    ],
    "percentage": 0
  },
  "details": {
    "displayedAttributes": [
      "id",
      "title",
      "description",
      "url"
    ],
    "searchableAttributes": [
      "title",
      "description"
    ],
    "filterableAttributes": [
      "release_date",
      "genre"
    ],
    "sortableAttributes": [
      "release_date"
    ],
    "rankingRules": [
      "words",
      "typo",
      "proximity",
      "attribute",
      "exactness"
    ],
    "stopWords": [
      "the",
      "a",
      "them",
      "their"
    ],
    "nonSeparatorTokens": [
      " ",
      "\n"
    ],
    "separatorTokens": [
      "S"
    ],
    "dictionary": [
      "iPhone pro"
    ],
    "synonyms": {
      "he": [
        "she",
        "they",
        "them"
      ],
      "phone": [
        "iPhone",
        "android"
      ]
    },
    "distinctAttribute": "sku",
    "proximityPrecision": "byAttribute",
    "typoTolerance": {
      "enabled": true,
      "minWordSizeForTypos": {
        "oneTypo": 5,
        "twoTypos": 9
      },
      "disableOnWords": [
        "iPhone",
        "phone"
      ],
      "disableOnAttributes": [
        "uuid",
        "url"
      ],
      "disableOnNumbers": true
    },
    "faceting": {
      "maxValuesPerFacet": 10,
      "sortFacetValuesBy": {
        "genre": "count"
      }
    },
    "pagination": {
      "maxTotalHits": 250
    },
    "embedders": {
      "property1": {
        "inner": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "binaryQuantized": true,
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "searchEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "indexingEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "distribution": {
            "current_mean": 0,
            "current_sigma": 0
          }
        }
      },
      "property2": {
        "inner": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "binaryQuantized": true,
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "searchEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "indexingEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "distribution": {
            "current_mean": 0,
            "current_sigma": 0
          }
        }
      }
    },
    "searchCutoffMs": 50,
    "localizedAttributes": 50,
    "facetSearch": true,
    "prefixSearch": "indexingTime",
    "chat": {
      "description": "string",
      "documentTemplate": "string",
      "documentTemplateMaxBytes": 0,
      "searchParameters": {
        "hybrid": {
          "semanticRatio": 0,
          "embedder": "string"
        },
        "limit": 0,
        "sort": [
          "string"
        ],
        "distinct": "string",
        "matchingStrategy": "last",
        "attributesToSearchOn": [
          "string"
        ],
        "rankingScoreThreshold": 0
      }
    },
    "receivedDocuments": 0,
    "indexedDocuments": 0,
    "editedDocuments": 0,
    "primaryKey": "string",
    "providedIds": 0,
    "deletedDocuments": 0,
    "matchedTasks": 0,
    "canceledTasks": 0,
    "deletedTasks": 0,
    "originalFilter": "string",
    "dumpUid": "string",
    "context": {},
    "function": "string",
    "swaps": [
      {
        "indexes": [
          "string",
          "string"
        ]
      }
    ],
    "upgradeFrom": "string",
    "upgradeTo": "string"
  },
  "stats": {
    "totalNbTasks": 0,
    "status": {
      "property1": 0,
      "property2": 0
    },
    "types": {
      "property1": 0,
      "property2": 0
    },
    "indexUids": {
      "property1": 0,
      "property2": 0
    },
    "progressTrace": {
      "property1": null,
      "property2": null
    },
    "writeChannelCongestion": {
      "property1": null,
      "property2": null
    },
    "internalDatabaseSizes": {
      "property1": null,
      "property2": null
    }
  },
  "duration": "string",
  "startedAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "batchStrategy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|[u32](#schemau32)|true|none|none|
|progress|null \| [ProgressView](#schemaprogressview)|false|none|none|
|details|[DetailsView](#schemadetailsview)|true|none|none|
|stats|[BatchStats](#schemabatchstats)|true|none|none|
|duration|string \| null|false|none|none|
|startedAt|string(date-time)|false|none|none|
|finishedAt|string \| null(date-time)|false|none|none|
|batchStrategy|string|false|none|none|

<h2 id="tocS_BrowseQuery">BrowseQuery</h2>
<!-- backwards compatibility -->
<a id="schemabrowsequery"></a>
<a id="schema_BrowseQuery"></a>
<a id="tocSbrowsequery"></a>
<a id="tocsbrowsequery"></a>

```json
{
  "offset": 150,
  "limit": 1,
  "fields": [
    "title, description"
  ],
  "retrieveVectors": true,
  "ids": [
    "cody",
    "finn",
    "brandy",
    "gambit"
  ],
  "filter": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer|true|none|none|
|limit|integer|true|none|none|
|fields|[string]|false|none|none|
|retrieveVectors|boolean|true|none|none|
|ids|[string]|false|none|none|
|filter|object|false|none|none|

<h2 id="tocS_ChatSearchParams">ChatSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemachatsearchparams"></a>
<a id="schema_ChatSearchParams"></a>
<a id="tocSchatsearchparams"></a>
<a id="tocschatsearchparams"></a>

```json
{
  "hybrid": {
    "semanticRatio": 0,
    "embedder": "string"
  },
  "limit": 0,
  "sort": [
    "string"
  ],
  "distinct": "string",
  "matchingStrategy": "last",
  "attributesToSearchOn": [
    "string"
  ],
  "rankingScoreThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hybrid|null \| [HybridQuery](#schemahybridquery)|false|none|none|
|limit|integer \| null|false|none|none|
|sort|[string]|false|none|none|
|distinct|string \| null|false|none|none|
|matchingStrategy|null \| [MatchingStrategy](#schemamatchingstrategy)|false|none|none|
|attributesToSearchOn|[string]|false|none|none|
|rankingScoreThreshold|null \| [RankingScoreThreshold](#schemarankingscorethreshold)|false|none|none|

<h2 id="tocS_ChatSettings">ChatSettings</h2>
<!-- backwards compatibility -->
<a id="schemachatsettings"></a>
<a id="schema_ChatSettings"></a>
<a id="tocSchatsettings"></a>
<a id="tocschatsettings"></a>

```json
{
  "description": "string",
  "documentTemplate": "string",
  "documentTemplateMaxBytes": 0,
  "searchParameters": {
    "hybrid": {
      "semanticRatio": 0,
      "embedder": "string"
    },
    "limit": 0,
    "sort": [
      "string"
    ],
    "distinct": "string",
    "matchingStrategy": "last",
    "attributesToSearchOn": [
      "string"
    ],
    "rankingScoreThreshold": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|documentTemplate|string \| null|false|none|A liquid template used to render documents to a text that can be embedded.<br><br>Meillisearch interpolates the template for each document and sends the resulting text to the embedder.<br>The embedder then generates document vectors based on this text.|
|documentTemplateMaxBytes|integer \| null|false|none|Rendered texts are truncated to this size. Defaults to 400.|
|searchParameters|null \| [ChatSearchParams](#schemachatsearchparams)|false|none|none|

<h2 id="tocS_Code">Code</h2>
<!-- backwards compatibility -->
<a id="schemacode"></a>
<a id="schema_Code"></a>
<a id="tocScode"></a>
<a id="tocscode"></a>

```json
"api_key_already_exists"
```

<h2 id="tocS_ComputedFacets">ComputedFacets</h2>
<!-- backwards compatibility -->
<a id="schemacomputedfacets"></a>
<a id="schema_ComputedFacets"></a>
<a id="tocScomputedfacets"></a>
<a id="tocscomputedfacets"></a>

```json
{
  "distribution": {
    "property1": {
      "property1": 0,
      "property2": 0
    },
    "property2": {
      "property1": 0,
      "property2": 0
    }
  },
  "stats": {
    "property1": {
      "min": 0,
      "max": 0
    },
    "property2": {
      "min": 0,
      "max": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|object|true|none|none|
|stats|object|true|none|none|

<h2 id="tocS_CreateApiKey">CreateApiKey</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikey"></a>
<a id="schema_CreateApiKey"></a>
<a id="tocScreateapikey"></a>
<a id="tocscreateapikey"></a>

```json
{
  "description": null,
  "name": "Indexing Products API key",
  "uid": null,
  "actions": [
    "documents.add"
  ],
  "indexes": [
    "products"
  ],
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|A description for the key. `null` if empty.|
|name|string \| null|false|none|A human-readable name for the key. `null` if empty.|
|uid|string(uuid)|true|none|A uuid v4 to identify the API Key. If not specified, it's generated by Meilisearch.|
|actions|[[Action](#schemaaction)]|true|none|A list of actions permitted for the key. `["*"]` for all actions. The `*` character can be used as a wildcard when located at the last position. e.g. `documents.*` to authorize access on all documents endpoints.|
|indexes|[string]|true|none|A list of accessible indexes permitted for the key. `["*"]` for all indexes. The `*` character can be used as a wildcard when located at the last position. e.g. `products_*` to allow access to all indexes whose names start with `products_`.|
|expiresAt|string \| null(date-time)|false|none|Represent the expiration date and time as RFC 3339 format. `null` equals to no expiration time.|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|*|
|actions|search|
|actions|documents.*|
|actions|documents.add|
|actions|documents.get|
|actions|documents.delete|
|actions|indexes.*|
|actions|indexes.create|
|actions|indexes.get|
|actions|indexes.update|
|actions|indexes.delete|
|actions|indexes.swap|
|actions|tasks.*|
|actions|tasks.cancel|
|actions|tasks.delete|
|actions|tasks.get|
|actions|settings.*|
|actions|settings.get|
|actions|settings.update|
|actions|stats.*|
|actions|stats.get|
|actions|metrics.*|
|actions|metrics.get|
|actions|dumps.*|
|actions|dumps.create|
|actions|snapshots.*|
|actions|snapshots.create|
|actions|version|
|actions|keys.create|
|actions|keys.get|
|actions|keys.update|
|actions|keys.delete|
|actions|experimental.get|
|actions|experimental.update|
|actions|network.get|
|actions|network.update|
|actions|chatCompletions|
|actions|chats.*|
|actions|chats.get|
|actions|chats.delete|
|actions|chatsSettings.*|
|actions|chatsSettings.get|
|actions|chatsSettings.update|

<h2 id="tocS_DetailsView">DetailsView</h2>
<!-- backwards compatibility -->
<a id="schemadetailsview"></a>
<a id="schema_DetailsView"></a>
<a id="tocSdetailsview"></a>
<a id="tocsdetailsview"></a>

```json
{
  "displayedAttributes": [
    "id",
    "title",
    "description",
    "url"
  ],
  "searchableAttributes": [
    "title",
    "description"
  ],
  "filterableAttributes": [
    "release_date",
    "genre"
  ],
  "sortableAttributes": [
    "release_date"
  ],
  "rankingRules": [
    "words",
    "typo",
    "proximity",
    "attribute",
    "exactness"
  ],
  "stopWords": [
    "the",
    "a",
    "them",
    "their"
  ],
  "nonSeparatorTokens": [
    " ",
    "\n"
  ],
  "separatorTokens": [
    "S"
  ],
  "dictionary": [
    "iPhone pro"
  ],
  "synonyms": {
    "he": [
      "she",
      "they",
      "them"
    ],
    "phone": [
      "iPhone",
      "android"
    ]
  },
  "distinctAttribute": "sku",
  "proximityPrecision": "byAttribute",
  "typoTolerance": {
    "enabled": true,
    "minWordSizeForTypos": {
      "oneTypo": 5,
      "twoTypos": 9
    },
    "disableOnWords": [
      "iPhone",
      "phone"
    ],
    "disableOnAttributes": [
      "uuid",
      "url"
    ],
    "disableOnNumbers": true
  },
  "faceting": {
    "maxValuesPerFacet": 10,
    "sortFacetValuesBy": {
      "genre": "count"
    }
  },
  "pagination": {
    "maxTotalHits": 250
  },
  "embedders": {
    "property1": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    },
    "property2": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    }
  },
  "searchCutoffMs": 50,
  "localizedAttributes": 50,
  "facetSearch": true,
  "prefixSearch": "indexingTime",
  "chat": {
    "description": "string",
    "documentTemplate": "string",
    "documentTemplateMaxBytes": 0,
    "searchParameters": {
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "limit": 0,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0
    }
  },
  "receivedDocuments": 0,
  "indexedDocuments": 0,
  "editedDocuments": 0,
  "primaryKey": "string",
  "providedIds": 0,
  "deletedDocuments": 0,
  "matchedTasks": 0,
  "canceledTasks": 0,
  "deletedTasks": 0,
  "originalFilter": "string",
  "dumpUid": "string",
  "context": {},
  "function": "string",
  "swaps": [
    {
      "indexes": [
        "string",
        "string"
      ]
    }
  ],
  "upgradeFrom": "string",
  "upgradeTo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|null|false|none|none|
|*oneOf*|[Settings_Unchecked](#schemasettings_unchecked)|false|none|[Learn more about the settings in this guide](https://www.meilisearch.com/docs/reference/api/settings).|
|receivedDocuments|integer \| null(u-int64)|false|none|Number of documents received for documentAdditionOrUpdate task.|
|indexedDocuments|integer \| null(u-int64)|false|none|Number of documents finally indexed for documentAdditionOrUpdate task or a documentAdditionOrUpdate batch of tasks.|
|editedDocuments|integer \| null(u-int64)|false|none|Number of documents edited for editDocumentByFunction task.|
|primaryKey|string \| null|false|none|Value for the primaryKey field encountered if any for indexCreation or indexUpdate task.|
|providedIds|integer \| null|false|none|Number of provided document ids for the documentDeletion task.|
|deletedDocuments|integer \| null(u-int64)|false|none|Number of documents finally deleted for documentDeletion and indexDeletion tasks.|
|matchedTasks|integer \| null(u-int64)|false|none|Number of tasks that match the request for taskCancelation or taskDeletion tasks.|
|canceledTasks|integer \| null(u-int64)|false|none|Number of tasks canceled for taskCancelation.|
|deletedTasks|integer \| null(u-int64)|false|none|Number of tasks deleted for taskDeletion.|
|originalFilter|string \| null|false|none|Original filter query for taskCancelation or taskDeletion tasks.|
|dumpUid|string \| null|false|none|Identifier generated for the dump for dumpCreation task.|
|context|object \| null|false|none|none|
|function|string \| null|false|none|none|
|swaps|[[IndexSwap](#schemaindexswap)]|false|none|none|
|upgradeFrom|string \| null|false|none|none|
|upgradeTo|string \| null|false|none|none|

<h2 id="tocS_DistributionShift">DistributionShift</h2>
<!-- backwards compatibility -->
<a id="schemadistributionshift"></a>
<a id="schema_DistributionShift"></a>
<a id="tocSdistributionshift"></a>
<a id="tocsdistributionshift"></a>

```json
{
  "current_mean": 0,
  "current_sigma": 0
}
```

Describes the mean and sigma of distribution of embedding similarity in the embedding space.

The intended use is to make the similarity score more comparable to the regular ranking score.
This allows to correct effects where results are too "packed" around a certain value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_mean|number(float)|true|none|Value where the results are "packed".<br><br>Similarity scores are translated so that they are packed around 0.5 instead|
|current_sigma|number(float)|true|none|standard deviation of a similarity score.<br><br>Set below 0.4 to make the results less packed around the mean, and above 0.4 to make them more packed.|

<h2 id="tocS_DocumentDeletionByFilter">DocumentDeletionByFilter</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdeletionbyfilter"></a>
<a id="schema_DocumentDeletionByFilter"></a>
<a id="tocSdocumentdeletionbyfilter"></a>
<a id="tocsdocumentdeletionbyfilter"></a>

```json
{
  "filter": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|true|none|none|

<h2 id="tocS_DocumentEditionByFunction">DocumentEditionByFunction</h2>
<!-- backwards compatibility -->
<a id="schemadocumenteditionbyfunction"></a>
<a id="schema_DocumentEditionByFunction"></a>
<a id="tocSdocumenteditionbyfunction"></a>
<a id="tocsdocumenteditionbyfunction"></a>

```json
{
  "filter": null,
  "context": null,
  "function": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|object|false|none|A string containing a RHAI function.|
|context|object|false|none|A string containing a filter expression.|
|function|string|true|none|An object with data Meilisearch should make available for the editing function.|

<h2 id="tocS_EmbedderSource">EmbedderSource</h2>
<!-- backwards compatibility -->
<a id="schemaembeddersource"></a>
<a id="schema_EmbedderSource"></a>
<a id="tocSembeddersource"></a>
<a id="tocsembeddersource"></a>

```json
"openAi"
```

<h2 id="tocS_ErrorType">ErrorType</h2>
<!-- backwards compatibility -->
<a id="schemaerrortype"></a>
<a id="schema_ErrorType"></a>
<a id="tocSerrortype"></a>
<a id="tocserrortype"></a>

```json
"internal"
```

<h2 id="tocS_FacetSearchQuery">FacetSearchQuery</h2>
<!-- backwards compatibility -->
<a id="schemafacetsearchquery"></a>
<a id="schema_FacetSearchQuery"></a>
<a id="tocSfacetsearchquery"></a>
<a id="tocsfacetsearchquery"></a>

```json
{
  "facet_query": "string",
  "facet_name": "string",
  "q": "string",
  "vector": [
    0
  ],
  "hybrid": {
    "semanticRatio": 0,
    "embedder": "string"
  },
  "filter": null,
  "matching_strategy": "last",
  "attributes_to_search_on": [
    "string"
  ],
  "ranking_score_threshold": 0,
  "locales": [
    "af"
  ],
  "exhaustive_facet_count": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet_query|string \| null|false|none|none|
|facet_name|string|true|none|none|
|q|string \| null|false|none|none|
|vector|[number(float)]|false|none|none|
|hybrid|null \| [HybridQuery](#schemahybridquery)|false|none|none|
|filter|object|false|none|none|
|matching_strategy|[MatchingStrategy](#schemamatchingstrategy)|true|none|This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.<br>The reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.|
|attributes_to_search_on|[string]|false|none|none|
|ranking_score_threshold|null \| [RankingScoreThreshold](#schemarankingscorethreshold)|false|none|none|
|locales|[[Locale](#schemalocale)]|false|none|none|
|exhaustive_facet_count|boolean \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matching_strategy|last|
|matching_strategy|all|
|matching_strategy|frequency|
|locales|af|
|locales|ak|
|locales|am|
|locales|ar|
|locales|az|
|locales|be|
|locales|bn|
|locales|bg|
|locales|ca|
|locales|cs|
|locales|da|
|locales|de|
|locales|el|
|locales|en|
|locales|eo|
|locales|et|
|locales|fi|
|locales|fr|
|locales|gu|
|locales|he|
|locales|hi|
|locales|hr|
|locales|hu|
|locales|hy|
|locales|id|
|locales|it|
|locales|jv|
|locales|ja|
|locales|kn|
|locales|ka|
|locales|km|
|locales|ko|
|locales|la|
|locales|lv|
|locales|lt|
|locales|ml|
|locales|mr|
|locales|mk|
|locales|my|
|locales|ne|
|locales|nl|
|locales|nb|
|locales|or|
|locales|pa|
|locales|fa|
|locales|pl|
|locales|pt|
|locales|ro|
|locales|ru|
|locales|si|
|locales|sk|
|locales|sl|
|locales|sn|
|locales|es|
|locales|sr|
|locales|sv|
|locales|ta|
|locales|te|
|locales|tl|
|locales|th|
|locales|tk|
|locales|tr|
|locales|uk|
|locales|ur|
|locales|uz|
|locales|vi|
|locales|yi|
|locales|zh|
|locales|zu|
|locales|afr|
|locales|aka|
|locales|amh|
|locales|ara|
|locales|aze|
|locales|bel|
|locales|ben|
|locales|bul|
|locales|cat|
|locales|ces|
|locales|dan|
|locales|deu|
|locales|ell|
|locales|eng|
|locales|epo|
|locales|est|
|locales|fin|
|locales|fra|
|locales|guj|
|locales|heb|
|locales|hin|
|locales|hrv|
|locales|hun|
|locales|hye|
|locales|ind|
|locales|ita|
|locales|jav|
|locales|jpn|
|locales|kan|
|locales|kat|
|locales|khm|
|locales|kor|
|locales|lat|
|locales|lav|
|locales|lit|
|locales|mal|
|locales|mar|
|locales|mkd|
|locales|mya|
|locales|nep|
|locales|nld|
|locales|nob|
|locales|ori|
|locales|pan|
|locales|pes|
|locales|pol|
|locales|por|
|locales|ron|
|locales|rus|
|locales|sin|
|locales|slk|
|locales|slv|
|locales|sna|
|locales|spa|
|locales|srp|
|locales|swe|
|locales|tam|
|locales|tel|
|locales|tgl|
|locales|tha|
|locales|tuk|
|locales|tur|
|locales|ukr|
|locales|urd|
|locales|uzb|
|locales|vie|
|locales|yid|
|locales|zho|
|locales|zul|
|locales|cmn|

<h2 id="tocS_FacetStats">FacetStats</h2>
<!-- backwards compatibility -->
<a id="schemafacetstats"></a>
<a id="schema_FacetStats"></a>
<a id="tocSfacetstats"></a>
<a id="tocsfacetstats"></a>

```json
{
  "min": 0,
  "max": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min|number(double)|true|none|none|
|max|number(double)|true|none|none|

<h2 id="tocS_FacetValuesSort">FacetValuesSort</h2>
<!-- backwards compatibility -->
<a id="schemafacetvaluessort"></a>
<a id="schema_FacetValuesSort"></a>
<a id="tocSfacetvaluessort"></a>
<a id="tocsfacetvaluessort"></a>

```json
"alpha"
```

<h2 id="tocS_FacetingSettings">FacetingSettings</h2>
<!-- backwards compatibility -->
<a id="schemafacetingsettings"></a>
<a id="schema_FacetingSettings"></a>
<a id="tocSfacetingsettings"></a>
<a id="tocsfacetingsettings"></a>

```json
{
  "maxValuesPerFacet": 10,
  "sortFacetValuesBy": {
    "genre": "count"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValuesPerFacet|integer \| null|false|none|none|
|sortFacetValuesBy|object \| null|false|none|none|

<h2 id="tocS_FederatedFacets">FederatedFacets</h2>
<!-- backwards compatibility -->
<a id="schemafederatedfacets"></a>
<a id="schema_FederatedFacets"></a>
<a id="tocSfederatedfacets"></a>
<a id="tocsfederatedfacets"></a>

```json
{
  "property1": {
    "distribution": {
      "property1": {
        "property1": 0,
        "property2": 0
      },
      "property2": {
        "property1": 0,
        "property2": 0
      }
    },
    "stats": {
      "property1": {
        "min": 0,
        "max": 0
      },
      "property2": {
        "min": 0,
        "max": 0
      }
    }
  },
  "property2": {
    "distribution": {
      "property1": {
        "property1": 0,
        "property2": 0
      },
      "property2": {
        "property1": 0,
        "property2": 0
      }
    },
    "stats": {
      "property1": {
        "min": 0,
        "max": 0
      },
      "property2": {
        "min": 0,
        "max": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ComputedFacets](#schemacomputedfacets)|false|none|none|

<h2 id="tocS_FederatedSearch">FederatedSearch</h2>
<!-- backwards compatibility -->
<a id="schemafederatedsearch"></a>
<a id="schema_FederatedSearch"></a>
<a id="tocSfederatedsearch"></a>
<a id="tocsfederatedsearch"></a>

```json
{
  "queries": [
    {
      "indexUid": "movies",
      "q": "string",
      "vector": [
        0
      ],
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "offset": 0,
      "limit": 0,
      "page": 0,
      "hitsPerPage": 0,
      "attributesToRetrieve": [
        "string"
      ],
      "retrieveVectors": true,
      "attributesToCrop": [
        "string"
      ],
      "cropLength": 0,
      "attributesToHighlight": [
        "string"
      ],
      "showRankingScore": true,
      "showRankingScoreDetails": true,
      "showMatchesPosition": true,
      "filter": null,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "facets": [
        "string"
      ],
      "highlightPreTag": "string",
      "highlightPostTag": "string",
      "cropMarker": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0,
      "locales": [
        "af"
      ],
      "federationOptions": {
        "weight": 0,
        "remote": "string",
        "queryPosition": 0
      }
    }
  ],
  "federation": {
    "limit": 0,
    "offset": 0,
    "facetsByIndex": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mergeFacets": {
      "maxValuesPerFacet": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|[[SearchQueryWithIndex](#schemasearchquerywithindex)]|true|none|none|
|federation|null \| [Federation](#schemafederation)|false|none|none|

<h2 id="tocS_FederatedSearchResult">FederatedSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemafederatedsearchresult"></a>
<a id="schema_FederatedSearchResult"></a>
<a id="tocSfederatedsearchresult"></a>
<a id="tocsfederatedsearchresult"></a>

```json
{
  "hitsPerPage": 0,
  "page": 0,
  "totalPages": 0,
  "totalHits": 0,
  "hits": [
    {
      "_formatted": {},
      "_matchesPosition": {
        "property1": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ],
        "property2": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ]
      },
      "_rankingScore": 0,
      "_rankingScoreDetails": {
        "property1": null,
        "property2": null
      },
      "property1": null,
      "property2": null
    }
  ],
  "processingTimeMs": 0,
  "semanticHitCount": 0,
  "facetDistribution": {
    "property1": {
      "property1": 0,
      "property2": 0
    },
    "property2": {
      "property1": 0,
      "property2": 0
    }
  },
  "facetStats": {
    "property1": {
      "min": 0,
      "max": 0
    },
    "property2": {
      "min": 0,
      "max": 0
    }
  },
  "facetsByIndex": {
    "property1": {
      "distribution": {
        "property1": {
          "property1": 0,
          "property2": 0
        },
        "property2": {
          "property1": 0,
          "property2": 0
        }
      },
      "stats": {
        "property1": {
          "min": 0,
          "max": 0
        },
        "property2": {
          "min": 0,
          "max": 0
        }
      }
    },
    "property2": {
      "distribution": {
        "property1": {
          "property1": 0,
          "property2": 0
        },
        "property2": {
          "property1": 0,
          "property2": 0
        }
      },
      "stats": {
        "property1": {
          "min": 0,
          "max": 0
        },
        "property2": {
          "min": 0,
          "max": 0
        }
      }
    }
  },
  "remoteErrors": {
    "property1": {
      "message": "string",
      "code": "api_key_already_exists",
      "type": "internal",
      "link": "string"
    },
    "property2": {
      "message": "string",
      "code": "api_key_already_exists",
      "type": "internal",
      "link": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|hitsPerPage|integer|true|none|none|
|page|integer|true|none|none|
|totalPages|integer|true|none|none|
|totalHits|integer|true|none|none|
|*oneOf*|object|false|none|none|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|estimatedTotalHits|integer|true|none|none|
|hits|[[SearchHit](#schemasearchhit)]|true|none|none|
|processingTimeMs|integer|true|none|none|
|semanticHitCount|integer \| null(u-int32)|false|none|none|
|facetDistribution|object \| null|false|none|none|
|facetStats|object \| null|false|none|none|
|facetsByIndex|[FederatedFacets](#schemafederatedfacets)|false|none|none|
|remoteErrors|object \| null|false|none|none|

<h2 id="tocS_Federation">Federation</h2>
<!-- backwards compatibility -->
<a id="schemafederation"></a>
<a id="schema_Federation"></a>
<a id="tocSfederation"></a>
<a id="tocsfederation"></a>

```json
{
  "limit": 0,
  "offset": 0,
  "facetsByIndex": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mergeFacets": {
    "maxValuesPerFacet": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|facetsByIndex|object|true|none|none|
|mergeFacets|null \| [MergeFacets](#schemamergefacets)|false|none|none|

<h2 id="tocS_FederationOptions">FederationOptions</h2>
<!-- backwards compatibility -->
<a id="schemafederationoptions"></a>
<a id="schema_FederationOptions"></a>
<a id="tocSfederationoptions"></a>
<a id="tocsfederationoptions"></a>

```json
{
  "weight": 0,
  "remote": "string",
  "queryPosition": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weight|number(double)|true|none|none|
|remote|string \| null|false|none|none|
|queryPosition|integer \| null|false|none|none|

<h2 id="tocS_FilterFeatures">FilterFeatures</h2>
<!-- backwards compatibility -->
<a id="schemafilterfeatures"></a>
<a id="schema_FilterFeatures"></a>
<a id="tocSfilterfeatures"></a>
<a id="tocsfilterfeatures"></a>

```json
{
  "equality": true,
  "comparison": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|equality|boolean|false|none|none|
|comparison|boolean|false|none|none|

<h2 id="tocS_FilterableAttributesFeatures">FilterableAttributesFeatures</h2>
<!-- backwards compatibility -->
<a id="schemafilterableattributesfeatures"></a>
<a id="schema_FilterableAttributesFeatures"></a>
<a id="tocSfilterableattributesfeatures"></a>
<a id="tocsfilterableattributesfeatures"></a>

```json
{
  "facetSearch": true,
  "filter": {
    "equality": true,
    "comparison": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facetSearch|boolean|false|none|none|
|filter|[FilterFeatures](#schemafilterfeatures)|false|none|none|

<h2 id="tocS_FilterableAttributesPatterns">FilterableAttributesPatterns</h2>
<!-- backwards compatibility -->
<a id="schemafilterableattributespatterns"></a>
<a id="schema_FilterableAttributesPatterns"></a>
<a id="tocSfilterableattributespatterns"></a>
<a id="tocsfilterableattributespatterns"></a>

```json
{
  "attributePatterns": {
    "patterns": [
      "title",
      "overview_*",
      "release_date"
    ]
  },
  "features": {
    "facetSearch": true,
    "filter": {
      "equality": true,
      "comparison": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributePatterns|[AttributePatterns](#schemaattributepatterns)|true|none|none|
|features|[FilterableAttributesFeatures](#schemafilterableattributesfeatures)|false|none|none|

<h2 id="tocS_FilterableAttributesRule">FilterableAttributesRule</h2>
<!-- backwards compatibility -->
<a id="schemafilterableattributesrule"></a>
<a id="schema_FilterableAttributesRule"></a>
<a id="tocSfilterableattributesrule"></a>
<a id="tocsfilterableattributesrule"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[FilterableAttributesPatterns](#schemafilterableattributespatterns)|false|none|none|

<h2 id="tocS_GetLogs">GetLogs</h2>
<!-- backwards compatibility -->
<a id="schemagetlogs"></a>
<a id="schema_GetLogs"></a>
<a id="tocSgetlogs"></a>
<a id="tocsgetlogs"></a>

```json
{
  "target": "milli=trace,index_scheduler,actix_web=off",
  "mode": "Human",
  "profileMemory": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|true|none|Lets you specify which parts of the code you want to inspect and is formatted like that: code_part=log_level,code_part=log_level<br>- If the `code_part` is missing, then the `log_level` will be applied to everything.<br>- If the `log_level` is missing, then the `code_part` will be selected in `info` log level.|
|mode|[LogMode](#schemalogmode)|true|none|none|
|profileMemory|boolean|true|none|A boolean to indicate if you want to profile the memory as well. This is only useful while using the `profile` mode.<br>Be cautious, though; it slows down the engine a lot.|

<h2 id="tocS_HealthResponse">HealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthresponse"></a>
<a id="schema_HealthResponse"></a>
<a id="tocShealthresponse"></a>
<a id="tocshealthresponse"></a>

```json
{
  "status": "available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[HealthStatus](#schemahealthstatus)|true|none|The status of the instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|available|

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
"available"
```

<h2 id="tocS_HitsInfo">HitsInfo</h2>
<!-- backwards compatibility -->
<a id="schemahitsinfo"></a>
<a id="schema_HitsInfo"></a>
<a id="tocShitsinfo"></a>
<a id="tocshitsinfo"></a>

```json
{
  "hitsPerPage": 0,
  "page": 0,
  "totalPages": 0,
  "totalHits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|hitsPerPage|integer|true|none|none|
|page|integer|true|none|none|
|totalPages|integer|true|none|none|
|totalHits|integer|true|none|none|
|*oneOf*|object|false|none|none|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|estimatedTotalHits|integer|true|none|none|

<h2 id="tocS_HybridQuery">HybridQuery</h2>
<!-- backwards compatibility -->
<a id="schemahybridquery"></a>
<a id="schema_HybridQuery"></a>
<a id="tocShybridquery"></a>
<a id="tocshybridquery"></a>

```json
{
  "semanticRatio": 0,
  "embedder": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|semanticRatio|number(float)|false|none|none|
|embedder|string|true|none|none|

<h2 id="tocS_IndexCreateRequest">IndexCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaindexcreaterequest"></a>
<a id="schema_IndexCreateRequest"></a>
<a id="tocSindexcreaterequest"></a>
<a id="tocsindexcreaterequest"></a>

```json
{
  "uid": "movies",
  "primaryKey": "id"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|[IndexUid](#schemaindexuid)|true|none|The name of the index|
|primaryKey|string \| null|false|none|The primary key of the index|

<h2 id="tocS_IndexStats">IndexStats</h2>
<!-- backwards compatibility -->
<a id="schemaindexstats"></a>
<a id="schema_IndexStats"></a>
<a id="tocSindexstats"></a>
<a id="tocsindexstats"></a>

```json
{
  "numberOfDocuments": 0,
  "rawDocumentDbSize": 0,
  "avgDocumentSize": 0,
  "isIndexing": true,
  "numberOfEmbeddings": 0,
  "numberOfEmbeddedDocuments": 0,
  "fieldDistribution": {
    "property1": 0,
    "property2": 0
  }
}
```

Stats of an `Index`, as known to the `stats` route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfDocuments|integer(u-int64)|true|none|Number of documents in the index|
|rawDocumentDbSize|integer(u-int64)|true|none|Size of the documents database, in bytes.|
|avgDocumentSize|integer(u-int64)|true|none|Average size of a document in the documents database.|
|isIndexing|boolean|true|none|Whether or not the index is currently ingesting document|
|numberOfEmbeddings|integer \| null(u-int64)|false|none|Number of embeddings in the index|
|numberOfEmbeddedDocuments|integer \| null(u-int64)|false|none|Number of embedded documents in the index|
|fieldDistribution|object|true|none|Association of every field name with the number of times it occurs in the documents.|

<h2 id="tocS_IndexSwap">IndexSwap</h2>
<!-- backwards compatibility -->
<a id="schemaindexswap"></a>
<a id="schema_IndexSwap"></a>
<a id="tocSindexswap"></a>
<a id="tocsindexswap"></a>

```json
{
  "indexes": [
    "string",
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexes|[string, string]|true|none|none|

<h2 id="tocS_IndexUid">IndexUid</h2>
<!-- backwards compatibility -->
<a id="schemaindexuid"></a>
<a id="schema_IndexUid"></a>
<a id="tocSindexuid"></a>
<a id="tocsindexuid"></a>

```json
"movies"
```

An index uid is composed of only ascii alphanumeric characters, - and _, between 1 and 400
bytes long

<h2 id="tocS_IndexView">IndexView</h2>
<!-- backwards compatibility -->
<a id="schemaindexview"></a>
<a id="schema_IndexView"></a>
<a id="tocSindexview"></a>
<a id="tocsindexview"></a>

```json
{
  "uid": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "primaryKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Unique identifier for the index|
|createdAt|string(date-time)|true|none|An `RFC 3339` format for date/time/duration.|
|updatedAt|string(date-time)|true|none|An `RFC 3339` format for date/time/duration.|
|primaryKey|string \| null|false|none|Custom primaryKey for documents|

<h2 id="tocS_KeyView">KeyView</h2>
<!-- backwards compatibility -->
<a id="schemakeyview"></a>
<a id="schema_KeyView"></a>
<a id="tocSkeyview"></a>
<a id="tocskeyview"></a>

```json
{
  "name": "string",
  "description": "string",
  "key": "string",
  "uid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "actions": [
    "*"
  ],
  "indexes": [
    "string"
  ],
  "expiresAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|The name of the API Key if any|
|description|string \| null|false|none|The description of the API Key if any|
|key|string|true|none|The actual API Key you can send to Meilisearch|
|uid|string(uuid)|true|none|The `Uuid` specified while creating the key or autogenerated by Meilisearch.|
|actions|[[Action](#schemaaction)]|true|none|The actions accessible with this key.|
|indexes|[string]|true|none|The indexes accessible with this key.|
|expiresAt|string \| null(date-time)|false|none|The expiration date of the key. Once this timestamp is exceeded the key is not deleted but cannot be used anymore.|
|createdAt|string(date-time)|true|read-only|The date of creation of this API Key.|
|updatedAt|string(date-time)|true|read-only|The date of the last update made on this key.|

#### Enumerated Values

|Property|Value|
|---|---|
|actions|*|
|actions|search|
|actions|documents.*|
|actions|documents.add|
|actions|documents.get|
|actions|documents.delete|
|actions|indexes.*|
|actions|indexes.create|
|actions|indexes.get|
|actions|indexes.update|
|actions|indexes.delete|
|actions|indexes.swap|
|actions|tasks.*|
|actions|tasks.cancel|
|actions|tasks.delete|
|actions|tasks.get|
|actions|settings.*|
|actions|settings.get|
|actions|settings.update|
|actions|stats.*|
|actions|stats.get|
|actions|metrics.*|
|actions|metrics.get|
|actions|dumps.*|
|actions|dumps.create|
|actions|snapshots.*|
|actions|snapshots.create|
|actions|version|
|actions|keys.create|
|actions|keys.get|
|actions|keys.update|
|actions|keys.delete|
|actions|experimental.get|
|actions|experimental.update|
|actions|network.get|
|actions|network.update|
|actions|chatCompletions|
|actions|chats.*|
|actions|chats.get|
|actions|chats.delete|
|actions|chatsSettings.*|
|actions|chatsSettings.get|
|actions|chatsSettings.update|

<h2 id="tocS_Kind">Kind</h2>
<!-- backwards compatibility -->
<a id="schemakind"></a>
<a id="schema_Kind"></a>
<a id="tocSkind"></a>
<a id="tocskind"></a>

```json
[
  "documentAdditionOrUpdate",
  "documentEdition",
  "documentDeletion",
  "settingsUpdate",
  "indexCreation",
  "indexDeletion",
  "indexUpdate",
  "indexSwap",
  "taskCancelation",
  "taskDeletion",
  "dumpCreation",
  "snapshotCreation",
  "upgradeDatabase"
]
```

The type of the task.

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
"af"
```

<h2 id="tocS_LocalizedAttributesRuleView">LocalizedAttributesRuleView</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedattributesruleview"></a>
<a id="schema_LocalizedAttributesRuleView"></a>
<a id="tocSlocalizedattributesruleview"></a>
<a id="tocslocalizedattributesruleview"></a>

```json
{
  "attributePatterns": {
    "patterns": [
      "title",
      "overview_*",
      "release_date"
    ]
  },
  "locales": [
    "af"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributePatterns|[AttributePatterns](#schemaattributepatterns)|true|none|none|
|locales|[[Locale](#schemalocale)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|locales|af|
|locales|ak|
|locales|am|
|locales|ar|
|locales|az|
|locales|be|
|locales|bn|
|locales|bg|
|locales|ca|
|locales|cs|
|locales|da|
|locales|de|
|locales|el|
|locales|en|
|locales|eo|
|locales|et|
|locales|fi|
|locales|fr|
|locales|gu|
|locales|he|
|locales|hi|
|locales|hr|
|locales|hu|
|locales|hy|
|locales|id|
|locales|it|
|locales|jv|
|locales|ja|
|locales|kn|
|locales|ka|
|locales|km|
|locales|ko|
|locales|la|
|locales|lv|
|locales|lt|
|locales|ml|
|locales|mr|
|locales|mk|
|locales|my|
|locales|ne|
|locales|nl|
|locales|nb|
|locales|or|
|locales|pa|
|locales|fa|
|locales|pl|
|locales|pt|
|locales|ro|
|locales|ru|
|locales|si|
|locales|sk|
|locales|sl|
|locales|sn|
|locales|es|
|locales|sr|
|locales|sv|
|locales|ta|
|locales|te|
|locales|tl|
|locales|th|
|locales|tk|
|locales|tr|
|locales|uk|
|locales|ur|
|locales|uz|
|locales|vi|
|locales|yi|
|locales|zh|
|locales|zu|
|locales|afr|
|locales|aka|
|locales|amh|
|locales|ara|
|locales|aze|
|locales|bel|
|locales|ben|
|locales|bul|
|locales|cat|
|locales|ces|
|locales|dan|
|locales|deu|
|locales|ell|
|locales|eng|
|locales|epo|
|locales|est|
|locales|fin|
|locales|fra|
|locales|guj|
|locales|heb|
|locales|hin|
|locales|hrv|
|locales|hun|
|locales|hye|
|locales|ind|
|locales|ita|
|locales|jav|
|locales|jpn|
|locales|kan|
|locales|kat|
|locales|khm|
|locales|kor|
|locales|lat|
|locales|lav|
|locales|lit|
|locales|mal|
|locales|mar|
|locales|mkd|
|locales|mya|
|locales|nep|
|locales|nld|
|locales|nob|
|locales|ori|
|locales|pan|
|locales|pes|
|locales|pol|
|locales|por|
|locales|ron|
|locales|rus|
|locales|sin|
|locales|slk|
|locales|slv|
|locales|sna|
|locales|spa|
|locales|srp|
|locales|swe|
|locales|tam|
|locales|tel|
|locales|tgl|
|locales|tha|
|locales|tuk|
|locales|tur|
|locales|ukr|
|locales|urd|
|locales|uzb|
|locales|vie|
|locales|yid|
|locales|zho|
|locales|zul|
|locales|cmn|

<h2 id="tocS_LogMode">LogMode</h2>
<!-- backwards compatibility -->
<a id="schemalogmode"></a>
<a id="schema_LogMode"></a>
<a id="tocSlogmode"></a>
<a id="tocslogmode"></a>

```json
"human"
```

<h2 id="tocS_MatchingStrategy">MatchingStrategy</h2>
<!-- backwards compatibility -->
<a id="schemamatchingstrategy"></a>
<a id="schema_MatchingStrategy"></a>
<a id="tocSmatchingstrategy"></a>
<a id="tocsmatchingstrategy"></a>

```json
"last"
```

This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.
The reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.

<h2 id="tocS_MergeFacets">MergeFacets</h2>
<!-- backwards compatibility -->
<a id="schemamergefacets"></a>
<a id="schema_MergeFacets"></a>
<a id="tocSmergefacets"></a>
<a id="tocsmergefacets"></a>

```json
{
  "maxValuesPerFacet": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValuesPerFacet|integer \| null|false|none|none|

<h2 id="tocS_MinWordSizeTyposSetting">MinWordSizeTyposSetting</h2>
<!-- backwards compatibility -->
<a id="schemaminwordsizetypossetting"></a>
<a id="schema_MinWordSizeTyposSetting"></a>
<a id="tocSminwordsizetypossetting"></a>
<a id="tocsminwordsizetypossetting"></a>

```json
{
  "oneTypo": 5,
  "twoTypos": 9
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oneTypo|integer \| null(u-int8)|false|none|none|
|twoTypos|integer \| null(u-int8)|false|none|none|

<h2 id="tocS_Network">Network</h2>
<!-- backwards compatibility -->
<a id="schemanetwork"></a>
<a id="schema_Network"></a>
<a id="tocSnetwork"></a>
<a id="tocsnetwork"></a>

```json
{
  "remotes": "http://localhost:7700",
  "self": "ms-00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remotes|object \| null|false|none|none|
|self|string \| null|false|none|none|

<h2 id="tocS_OverridePooling">OverridePooling</h2>
<!-- backwards compatibility -->
<a id="schemaoverridepooling"></a>
<a id="schema_OverridePooling"></a>
<a id="tocSoverridepooling"></a>
<a id="tocsoverridepooling"></a>

```json
"useModel"
```

<h2 id="tocS_PaginationSettings">PaginationSettings</h2>
<!-- backwards compatibility -->
<a id="schemapaginationsettings"></a>
<a id="schema_PaginationSettings"></a>
<a id="tocSpaginationsettings"></a>
<a id="tocspaginationsettings"></a>

```json
{
  "maxTotalHits": 250
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxTotalHits|integer \| null|false|none|none|

<h2 id="tocS_PaginationView_IndexView">PaginationView_IndexView</h2>
<!-- backwards compatibility -->
<a id="schemapaginationview_indexview"></a>
<a id="schema_PaginationView_IndexView"></a>
<a id="tocSpaginationview_indexview"></a>
<a id="tocspaginationview_indexview"></a>

```json
{
  "results": [
    {
      "uid": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "primaryKey": "string"
    }
  ],
  "offset": 0,
  "limit": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|offset|integer|true|none|none|
|limit|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_PaginationView_KeyView">PaginationView_KeyView</h2>
<!-- backwards compatibility -->
<a id="schemapaginationview_keyview"></a>
<a id="schema_PaginationView_KeyView"></a>
<a id="tocSpaginationview_keyview"></a>
<a id="tocspaginationview_keyview"></a>

```json
{
  "results": [
    {
      "name": "string",
      "description": "string",
      "key": "string",
      "uid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "actions": [
        "*"
      ],
      "indexes": [
        "string"
      ],
      "expiresAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "offset": 0,
  "limit": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|offset|integer|true|none|none|
|limit|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_PaginationView_Value">PaginationView_Value</h2>
<!-- backwards compatibility -->
<a id="schemapaginationview_value"></a>
<a id="schema_PaginationView_Value"></a>
<a id="tocSpaginationview_value"></a>
<a id="tocspaginationview_value"></a>

```json
{
  "results": [
    null
  ],
  "offset": 0,
  "limit": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|offset|integer|true|none|none|
|limit|integer|true|none|none|
|total|integer|true|none|none|

<h2 id="tocS_PatchApiKey">PatchApiKey</h2>
<!-- backwards compatibility -->
<a id="schemapatchapikey"></a>
<a id="schema_PatchApiKey"></a>
<a id="tocSpatchapikey"></a>
<a id="tocspatchapikey"></a>

```json
{
  "description": "This key is used to update documents in the products index",
  "name": "Indexing Products API key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_PrefixSearchSettings">PrefixSearchSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprefixsearchsettings"></a>
<a id="schema_PrefixSearchSettings"></a>
<a id="tocSprefixsearchsettings"></a>
<a id="tocsprefixsearchsettings"></a>

```json
"indexingTime"
```

<h2 id="tocS_ProgressStepView">ProgressStepView</h2>
<!-- backwards compatibility -->
<a id="schemaprogressstepview"></a>
<a id="schema_ProgressStepView"></a>
<a id="tocSprogressstepview"></a>
<a id="tocsprogressstepview"></a>

```json
{
  "currentStep": "string",
  "finished": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStep|string|true|none|none|
|finished|integer(u-int32)|true|none|none|
|total|integer(u-int32)|true|none|none|

<h2 id="tocS_ProgressView">ProgressView</h2>
<!-- backwards compatibility -->
<a id="schemaprogressview"></a>
<a id="schema_ProgressView"></a>
<a id="tocSprogressview"></a>
<a id="tocsprogressview"></a>

```json
{
  "steps": [
    {
      "currentStep": "string",
      "finished": 0,
      "total": 0
    }
  ],
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|steps|[[ProgressStepView](#schemaprogressstepview)]|true|none|none|
|percentage|number(float)|true|none|none|

<h2 id="tocS_ProximityPrecisionView">ProximityPrecisionView</h2>
<!-- backwards compatibility -->
<a id="schemaproximityprecisionview"></a>
<a id="schema_ProximityPrecisionView"></a>
<a id="tocSproximityprecisionview"></a>
<a id="tocsproximityprecisionview"></a>

```json
"byWord"
```

<h2 id="tocS_RankingRuleView">RankingRuleView</h2>
<!-- backwards compatibility -->
<a id="schemarankingruleview"></a>
<a id="schema_RankingRuleView"></a>
<a id="tocSrankingruleview"></a>
<a id="tocsrankingruleview"></a>

```json
"Words"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|Sorted by decreasing number of matched query terms.<br>Query words at the front of an attribute is considered better than if it was at the back.|
|*oneOf*|string|false|none|Sorted by increasing number of typos.|
|*oneOf*|string|false|none|Sorted by increasing distance between matched query terms.|
|*oneOf*|string|false|none|Documents with quey words contained in more important<br>attributes are considered better.|
|*oneOf*|string|false|none|Dynamically sort at query time the documents. None, one or multiple Asc/Desc sortable<br>attributes can be used in place of this criterion at query time.|
|*oneOf*|string|false|none|Sorted by the similarity of the matched words with the query words.|
|*oneOf*|object|false|none|Sorted by the increasing value of the field specified.|
|Asc|string|true|none|Sorted by the increasing value of the field specified.|
|*oneOf*|object|false|none|Sorted by the decreasing value of the field specified.|
|Desc|string|true|none|Sorted by the decreasing value of the field specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|Words|
|*oneOf*|Typo|
|*oneOf*|Proximity|
|*oneOf*|Attribute|
|*oneOf*|Sort|
|*oneOf*|Exactness|

<h2 id="tocS_RankingScoreThreshold">RankingScoreThreshold</h2>
<!-- backwards compatibility -->
<a id="schemarankingscorethreshold"></a>
<a id="schema_RankingScoreThreshold"></a>
<a id="tocSrankingscorethreshold"></a>
<a id="tocsrankingscorethreshold"></a>

```json
0
```

<h2 id="tocS_Remote">Remote</h2>
<!-- backwards compatibility -->
<a id="schemaremote"></a>
<a id="schema_Remote"></a>
<a id="tocSremote"></a>
<a id="tocsremote"></a>

```json
{
  "url": {
    "ms-0": {
      "url": "http://localhost:7700",
      "searchApiKey": null
    },
    "ms-1": {
      "url": "http://localhost:7701",
      "searchApiKey": "foo"
    },
    "ms-2": {
      "url": "http://localhost:7702",
      "searchApiKey": "bar"
    }
  },
  "searchApiKey": "XWnBI8QHUc-4IlqbKPLUDuhftNq19mQtjc6JvmivzJU"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string \| null|false|none|none|
|searchApiKey|string \| null|false|none|none|

<h2 id="tocS_ResponseError">ResponseError</h2>
<!-- backwards compatibility -->
<a id="schemaresponseerror"></a>
<a id="schema_ResponseError"></a>
<a id="tocSresponseerror"></a>
<a id="tocsresponseerror"></a>

```json
{
  "message": "string",
  "code": "api_key_already_exists",
  "type": "internal",
  "link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The error message.|
|code|[Code](#schemacode)|true|none|The error code.|
|type|[ErrorType](#schemaerrortype)|true|none|The error type.|
|link|string|true|none|A link to the documentation about this specific error.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|api_key_already_exists|
|code|api_key_not_found|
|code|bad_parameter|
|code|bad_request|
|code|database_size_limit_reached|
|code|document_not_found|
|code|dump_already_processing|
|code|dump_not_found|
|code|dump_process_failed|
|code|duplicate_index_found|
|code|immutable_api_key_actions|
|code|immutable_api_key_created_at|
|code|immutable_api_key_expires_at|
|code|immutable_api_key_indexes|
|code|immutable_api_key_key|
|code|immutable_api_key_uid|
|code|immutable_api_key_updated_at|
|code|immutable_index_created_at|
|code|immutable_index_uid|
|code|immutable_index_updated_at|
|code|index_already_exists|
|code|index_creation_failed|
|code|index_not_found|
|code|index_primary_key_already_exists|
|code|index_primary_key_multiple_candidates_found|
|code|index_primary_key_no_candidate_found|
|code|internal|
|code|invalid_api_key|
|code|invalid_api_key_actions|
|code|invalid_api_key_description|
|code|invalid_api_key_expires_at|
|code|invalid_api_key_indexes|
|code|invalid_api_key_limit|
|code|invalid_api_key_name|
|code|invalid_api_key_offset|
|code|invalid_api_key_uid|
|code|invalid_content_type|
|code|invalid_document_csv_delimiter|
|code|invalid_document_fields|
|code|invalid_document_retrieve_vectors|
|code|missing_document_filter|
|code|missing_document_edition_function|
|code|invalid_document_filter|
|code|invalid_document_geo_field|
|code|invalid_vector_dimensions|
|code|invalid_vectors_type|
|code|invalid_document_id|
|code|invalid_document_ids|
|code|invalid_document_limit|
|code|invalid_document_offset|
|code|invalid_search_embedder|
|code|invalid_similar_embedder|
|code|invalid_search_hybrid_query|
|code|invalid_index_limit|
|code|invalid_index_offset|
|code|invalid_index_primary_key|
|code|invalid_index_uid|
|code|invalid_multi_search_facets|
|code|invalid_multi_search_facets_by_index|
|code|invalid_multi_search_facet_order|
|code|invalid_multi_search_federated|
|code|invalid_multi_search_federation_options|
|code|invalid_multi_search_max_values_per_facet|
|code|invalid_multi_search_merge_facets|
|code|invalid_multi_search_query_facets|
|code|invalid_multi_search_query_pagination|
|code|invalid_multi_search_query_ranking_rules|
|code|invalid_multi_search_query_position|
|code|invalid_multi_search_remote|
|code|invalid_multi_search_weight|
|code|invalid_network_remotes|
|code|invalid_network_self|
|code|invalid_network_search_api_key|
|code|invalid_network_url|
|code|invalid_search_attributes_to_search_on|
|code|invalid_search_attributes_to_crop|
|code|invalid_search_attributes_to_highlight|
|code|invalid_similar_attributes_to_retrieve|
|code|invalid_similar_retrieve_vectors|
|code|invalid_search_attributes_to_retrieve|
|code|invalid_search_ranking_score_threshold|
|code|invalid_similar_ranking_score_threshold|
|code|invalid_search_retrieve_vectors|
|code|invalid_search_crop_length|
|code|invalid_search_crop_marker|
|code|invalid_search_facets|
|code|invalid_search_semantic_ratio|
|code|invalid_search_locales|
|code|invalid_facet_search_exhaustive_facet_count|
|code|invalid_facet_search_facet_name|
|code|invalid_similar_id|
|code|invalid_search_filter|
|code|invalid_similar_filter|
|code|invalid_search_highlight_post_tag|
|code|invalid_search_highlight_pre_tag|
|code|invalid_search_hits_per_page|
|code|invalid_similar_limit|
|code|invalid_search_limit|
|code|invalid_search_matching_strategy|
|code|invalid_similar_offset|
|code|invalid_search_offset|
|code|invalid_search_page|
|code|invalid_search_q|
|code|invalid_facet_search_query|
|code|invalid_facet_search_name|
|code|facet_search_disabled|
|code|invalid_search_vector|
|code|invalid_search_show_matches_position|
|code|invalid_search_show_ranking_score|
|code|invalid_similar_show_ranking_score|
|code|invalid_search_show_ranking_score_details|
|code|invalid_similar_show_ranking_score_details|
|code|invalid_search_sort|
|code|invalid_search_distinct|
|code|invalid_settings_displayed_attributes|
|code|invalid_settings_distinct_attribute|
|code|invalid_settings_proximity_precision|
|code|invalid_settings_facet_search|
|code|invalid_settings_prefix_search|
|code|invalid_settings_faceting|
|code|invalid_settings_filterable_attributes|
|code|invalid_settings_pagination|
|code|invalid_settings_search_cutoff_ms|
|code|invalid_settings_embedders|
|code|invalid_settings_ranking_rules|
|code|invalid_settings_searchable_attributes|
|code|invalid_settings_sortable_attributes|
|code|invalid_settings_stop_words|
|code|invalid_settings_non_separator_tokens|
|code|invalid_settings_separator_tokens|
|code|invalid_settings_dictionary|
|code|invalid_settings_synonyms|
|code|invalid_settings_typo_tolerance|
|code|invalid_settings_localized_attributes|
|code|invalid_state|
|code|invalid_store_file|
|code|invalid_swap_duplicate_index_found|
|code|invalid_swap_indexes|
|code|invalid_task_after_enqueued_at|
|code|invalid_task_after_finished_at|
|code|invalid_task_after_started_at|
|code|invalid_task_before_enqueued_at|
|code|invalid_task_before_finished_at|
|code|invalid_task_before_started_at|
|code|invalid_task_canceled_by|
|code|invalid_task_from|
|code|invalid_task_limit|
|code|invalid_task_reverse|
|code|invalid_task_statuses|
|code|invalid_task_types|
|code|invalid_task_uids|
|code|invalid_batch_uids|
|code|io_error|
|code|feature_not_enabled|
|code|malformed_payload|
|code|max_fields_limit_exceeded|
|code|missing_api_key_actions|
|code|missing_api_key_expires_at|
|code|missing_api_key_indexes|
|code|missing_authorization_header|
|code|missing_content_type|
|code|missing_document_id|
|code|missing_facet_search_facet_name|
|code|missing_index_uid|
|code|missing_master_key|
|code|missing_network_url|
|code|missing_payload|
|code|missing_search_hybrid|
|code|missing_swap_indexes|
|code|missing_task_filters|
|code|no_space_left_on_device|
|code|payload_too_large|
|code|remote_bad_response|
|code|remote_bad_request|
|code|remote_could_not_send_request|
|code|remote_invalid_api_key|
|code|remote_remote_error|
|code|remote_timeout|
|code|too_many_search_requests|
|code|task_not_found|
|code|task_file_not_found|
|code|batch_not_found|
|code|too_many_open_files|
|code|too_many_vectors|
|code|unretrievable_document|
|code|unretrievable_error_code|
|code|unsupported_media_type|
|code|vector_embedding_error|
|code|not_found_similar_id|
|code|invalid_document_edition_context|
|code|invalid_document_edition_function_filter|
|code|edit_documents_by_function_error|
|code|invalid_settings_index_chat|
|code|unimplemented_external_function_calling|
|code|unimplemented_non_streaming_chat_completions|
|code|unimplemented_multi_choice_chat_completions|
|code|chat_not_found|
|code|invalid_chat_setting_document_template|
|code|invalid_chat_completion_org_id|
|code|invalid_chat_completion_project_id|
|code|invalid_chat_completion_api_version|
|code|invalid_chat_completion_deployment_id|
|code|invalid_chat_completion_source|
|code|invalid_chat_completion_base_api|
|code|invalid_chat_completion_api_key|
|code|invalid_chat_completion_prompts|
|code|invalid_chat_completion_system_prompt|
|code|invalid_chat_completion_search_description_prompt|
|code|invalid_chat_completion_search_query_param_prompt|
|code|invalid_chat_completion_search_index_uid_param_prompt|
|code|invalid_chat_completion_pre_query_prompt|
|type|internal|
|type|invalid_request|
|type|auth|
|type|system|

<h2 id="tocS_RuntimeTogglableFeatures">RuntimeTogglableFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaruntimetogglablefeatures"></a>
<a id="schema_RuntimeTogglableFeatures"></a>
<a id="tocSruntimetogglablefeatures"></a>
<a id="tocsruntimetogglablefeatures"></a>

```json
{
  "metrics": true,
  "logsRoute": true,
  "editDocumentsByFunction": true,
  "containsFilter": true,
  "network": true,
  "getTaskDocumentsRoute": true,
  "compositeEmbedders": true,
  "chatCompletions": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|boolean \| null|false|none|none|
|logsRoute|boolean \| null|false|none|none|
|editDocumentsByFunction|boolean \| null|false|none|none|
|containsFilter|boolean \| null|false|none|none|
|network|boolean \| null|false|none|none|
|getTaskDocumentsRoute|boolean \| null|false|none|none|
|compositeEmbedders|boolean \| null|false|none|none|
|chatCompletions|boolean \| null|false|none|none|

<h2 id="tocS_SearchHit">SearchHit</h2>
<!-- backwards compatibility -->
<a id="schemasearchhit"></a>
<a id="schema_SearchHit"></a>
<a id="tocSsearchhit"></a>
<a id="tocssearchhit"></a>

```json
{
  "_formatted": {},
  "_matchesPosition": {
    "property1": [
      {
        "start": 0,
        "length": 0,
        "indices": [
          0
        ]
      }
    ],
    "property2": [
      {
        "start": 0,
        "length": 0,
        "indices": [
          0
        ]
      }
    ]
  },
  "_rankingScore": 0,
  "_rankingScoreDetails": {
    "property1": null,
    "property2": null
  },
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_formatted|object|false|none|none|
|_matchesPosition|null \| [BTreeMap](#schemabtreemap)|false|none|none|
|_rankingScore|number \| null(double)|false|none|none|
|_rankingScoreDetails|object \| null|false|none|none|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_SearchQuery">SearchQuery</h2>
<!-- backwards compatibility -->
<a id="schemasearchquery"></a>
<a id="schema_SearchQuery"></a>
<a id="tocSsearchquery"></a>
<a id="tocssearchquery"></a>

```json
{
  "q": "string",
  "vector": [
    0
  ],
  "hybrid": {
    "semanticRatio": 0,
    "embedder": "string"
  },
  "offset": 0,
  "limit": 20,
  "page": 0,
  "hits_per_page": 0,
  "attributes_to_retrieve": [
    "string"
  ],
  "retrieve_vectors": true,
  "attributes_to_crop": [
    "string"
  ],
  "crop_length": 10,
  "attributes_to_highlight": [
    "string"
  ],
  "show_matches_position": true,
  "show_ranking_score": true,
  "show_ranking_score_details": true,
  "filter": null,
  "sort": [
    "string"
  ],
  "distinct": "string",
  "facets": [
    "string"
  ],
  "highlight_pre_tag": "<em>",
  "highlight_post_tag": "</em>",
  "crop_marker": "…",
  "matching_strategy": "last",
  "attributes_to_search_on": [
    "string"
  ],
  "ranking_score_threshold": 0,
  "locales": [
    "af"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|q|string \| null|false|none|none|
|vector|[number(float)]|false|none|none|
|hybrid|null \| [HybridQuery](#schemahybridquery)|false|none|none|
|offset|integer|true|none|none|
|limit|integer|true|none|none|
|page|integer \| null|false|none|none|
|hits_per_page|integer \| null|false|none|none|
|attributes_to_retrieve|[string]|false|none|none|
|retrieve_vectors|boolean|true|none|none|
|attributes_to_crop|[string]|false|none|none|
|crop_length|integer|true|none|none|
|attributes_to_highlight|[string]|false|none|none|
|show_matches_position|boolean|true|none|none|
|show_ranking_score|boolean|true|none|none|
|show_ranking_score_details|boolean|true|none|none|
|filter|object|false|none|none|
|sort|[string]|false|none|none|
|distinct|string \| null|false|none|none|
|facets|[string]|false|none|none|
|highlight_pre_tag|string|true|none|none|
|highlight_post_tag|string|true|none|none|
|crop_marker|string|true|none|none|
|matching_strategy|[MatchingStrategy](#schemamatchingstrategy)|true|none|This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.<br>The reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.|
|attributes_to_search_on|[string]|false|none|none|
|ranking_score_threshold|null \| [RankingScoreThreshold](#schemarankingscorethreshold)|false|none|none|
|locales|[[Locale](#schemalocale)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matching_strategy|last|
|matching_strategy|all|
|matching_strategy|frequency|
|locales|af|
|locales|ak|
|locales|am|
|locales|ar|
|locales|az|
|locales|be|
|locales|bn|
|locales|bg|
|locales|ca|
|locales|cs|
|locales|da|
|locales|de|
|locales|el|
|locales|en|
|locales|eo|
|locales|et|
|locales|fi|
|locales|fr|
|locales|gu|
|locales|he|
|locales|hi|
|locales|hr|
|locales|hu|
|locales|hy|
|locales|id|
|locales|it|
|locales|jv|
|locales|ja|
|locales|kn|
|locales|ka|
|locales|km|
|locales|ko|
|locales|la|
|locales|lv|
|locales|lt|
|locales|ml|
|locales|mr|
|locales|mk|
|locales|my|
|locales|ne|
|locales|nl|
|locales|nb|
|locales|or|
|locales|pa|
|locales|fa|
|locales|pl|
|locales|pt|
|locales|ro|
|locales|ru|
|locales|si|
|locales|sk|
|locales|sl|
|locales|sn|
|locales|es|
|locales|sr|
|locales|sv|
|locales|ta|
|locales|te|
|locales|tl|
|locales|th|
|locales|tk|
|locales|tr|
|locales|uk|
|locales|ur|
|locales|uz|
|locales|vi|
|locales|yi|
|locales|zh|
|locales|zu|
|locales|afr|
|locales|aka|
|locales|amh|
|locales|ara|
|locales|aze|
|locales|bel|
|locales|ben|
|locales|bul|
|locales|cat|
|locales|ces|
|locales|dan|
|locales|deu|
|locales|ell|
|locales|eng|
|locales|epo|
|locales|est|
|locales|fin|
|locales|fra|
|locales|guj|
|locales|heb|
|locales|hin|
|locales|hrv|
|locales|hun|
|locales|hye|
|locales|ind|
|locales|ita|
|locales|jav|
|locales|jpn|
|locales|kan|
|locales|kat|
|locales|khm|
|locales|kor|
|locales|lat|
|locales|lav|
|locales|lit|
|locales|mal|
|locales|mar|
|locales|mkd|
|locales|mya|
|locales|nep|
|locales|nld|
|locales|nob|
|locales|ori|
|locales|pan|
|locales|pes|
|locales|pol|
|locales|por|
|locales|ron|
|locales|rus|
|locales|sin|
|locales|slk|
|locales|slv|
|locales|sna|
|locales|spa|
|locales|srp|
|locales|swe|
|locales|tam|
|locales|tel|
|locales|tgl|
|locales|tha|
|locales|tuk|
|locales|tur|
|locales|ukr|
|locales|urd|
|locales|uzb|
|locales|vie|
|locales|yid|
|locales|zho|
|locales|zul|
|locales|cmn|

<h2 id="tocS_SearchQueryWithIndex">SearchQueryWithIndex</h2>
<!-- backwards compatibility -->
<a id="schemasearchquerywithindex"></a>
<a id="schema_SearchQueryWithIndex"></a>
<a id="tocSsearchquerywithindex"></a>
<a id="tocssearchquerywithindex"></a>

```json
{
  "indexUid": "movies",
  "q": "string",
  "vector": [
    0
  ],
  "hybrid": {
    "semanticRatio": 0,
    "embedder": "string"
  },
  "offset": 0,
  "limit": 0,
  "page": 0,
  "hitsPerPage": 0,
  "attributesToRetrieve": [
    "string"
  ],
  "retrieveVectors": true,
  "attributesToCrop": [
    "string"
  ],
  "cropLength": 0,
  "attributesToHighlight": [
    "string"
  ],
  "showRankingScore": true,
  "showRankingScoreDetails": true,
  "showMatchesPosition": true,
  "filter": null,
  "sort": [
    "string"
  ],
  "distinct": "string",
  "facets": [
    "string"
  ],
  "highlightPreTag": "string",
  "highlightPostTag": "string",
  "cropMarker": "string",
  "matchingStrategy": "last",
  "attributesToSearchOn": [
    "string"
  ],
  "rankingScoreThreshold": 0,
  "locales": [
    "af"
  ],
  "federationOptions": {
    "weight": 0,
    "remote": "string",
    "queryPosition": 0
  }
}
```

A `SearchQuery` + an index UID and optional FederationOptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexUid|[IndexUid](#schemaindexuid)|true|none|An index uid is composed of only ascii alphanumeric characters, - and _, between 1 and 400<br>bytes long|
|q|string \| null|false|none|none|
|vector|[number(float)]|false|none|none|
|hybrid|null \| [HybridQuery](#schemahybridquery)|false|none|none|
|offset|integer \| null|false|none|none|
|limit|integer \| null|false|none|none|
|page|integer \| null|false|none|none|
|hitsPerPage|integer \| null|false|none|none|
|attributesToRetrieve|[string]|false|none|none|
|retrieveVectors|boolean|true|none|none|
|attributesToCrop|[string]|false|none|none|
|cropLength|integer|true|none|none|
|attributesToHighlight|[string]|false|none|none|
|showRankingScore|boolean|true|none|none|
|showRankingScoreDetails|boolean|true|none|none|
|showMatchesPosition|boolean|true|none|none|
|filter|object|false|none|none|
|sort|[string]|false|none|none|
|distinct|string \| null|false|none|none|
|facets|[string]|false|none|none|
|highlightPreTag|string|true|none|none|
|highlightPostTag|string|true|none|none|
|cropMarker|string|true|none|none|
|matchingStrategy|[MatchingStrategy](#schemamatchingstrategy)|true|none|This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.<br>The reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.|
|attributesToSearchOn|[string]|false|none|none|
|rankingScoreThreshold|null \| [RankingScoreThreshold](#schemarankingscorethreshold)|false|none|none|
|locales|[[Locale](#schemalocale)]|false|none|none|
|federationOptions|null \| [FederationOptions](#schemafederationoptions)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matchingStrategy|last|
|matchingStrategy|all|
|matchingStrategy|frequency|
|locales|af|
|locales|ak|
|locales|am|
|locales|ar|
|locales|az|
|locales|be|
|locales|bn|
|locales|bg|
|locales|ca|
|locales|cs|
|locales|da|
|locales|de|
|locales|el|
|locales|en|
|locales|eo|
|locales|et|
|locales|fi|
|locales|fr|
|locales|gu|
|locales|he|
|locales|hi|
|locales|hr|
|locales|hu|
|locales|hy|
|locales|id|
|locales|it|
|locales|jv|
|locales|ja|
|locales|kn|
|locales|ka|
|locales|km|
|locales|ko|
|locales|la|
|locales|lv|
|locales|lt|
|locales|ml|
|locales|mr|
|locales|mk|
|locales|my|
|locales|ne|
|locales|nl|
|locales|nb|
|locales|or|
|locales|pa|
|locales|fa|
|locales|pl|
|locales|pt|
|locales|ro|
|locales|ru|
|locales|si|
|locales|sk|
|locales|sl|
|locales|sn|
|locales|es|
|locales|sr|
|locales|sv|
|locales|ta|
|locales|te|
|locales|tl|
|locales|th|
|locales|tk|
|locales|tr|
|locales|uk|
|locales|ur|
|locales|uz|
|locales|vi|
|locales|yi|
|locales|zh|
|locales|zu|
|locales|afr|
|locales|aka|
|locales|amh|
|locales|ara|
|locales|aze|
|locales|bel|
|locales|ben|
|locales|bul|
|locales|cat|
|locales|ces|
|locales|dan|
|locales|deu|
|locales|ell|
|locales|eng|
|locales|epo|
|locales|est|
|locales|fin|
|locales|fra|
|locales|guj|
|locales|heb|
|locales|hin|
|locales|hrv|
|locales|hun|
|locales|hye|
|locales|ind|
|locales|ita|
|locales|jav|
|locales|jpn|
|locales|kan|
|locales|kat|
|locales|khm|
|locales|kor|
|locales|lat|
|locales|lav|
|locales|lit|
|locales|mal|
|locales|mar|
|locales|mkd|
|locales|mya|
|locales|nep|
|locales|nld|
|locales|nob|
|locales|ori|
|locales|pan|
|locales|pes|
|locales|pol|
|locales|por|
|locales|ron|
|locales|rus|
|locales|sin|
|locales|slk|
|locales|slv|
|locales|sna|
|locales|spa|
|locales|srp|
|locales|swe|
|locales|tam|
|locales|tel|
|locales|tgl|
|locales|tha|
|locales|tuk|
|locales|tur|
|locales|ukr|
|locales|urd|
|locales|uzb|
|locales|vie|
|locales|yid|
|locales|zho|
|locales|zul|
|locales|cmn|

<h2 id="tocS_SearchResult">SearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

```json
{
  "hitsPerPage": 0,
  "page": 0,
  "totalPages": 0,
  "totalHits": 0,
  "hits": [
    {
      "_formatted": {},
      "_matchesPosition": {
        "property1": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ],
        "property2": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ]
      },
      "_rankingScore": 0,
      "_rankingScoreDetails": {
        "property1": null,
        "property2": null
      },
      "property1": null,
      "property2": null
    }
  ],
  "query": "string",
  "processingTimeMs": 0,
  "facetDistribution": {
    "property1": null,
    "property2": null
  },
  "facetStats": {
    "property1": {
      "min": 0,
      "max": 0
    },
    "property2": {
      "min": 0,
      "max": 0
    }
  },
  "semanticHitCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|hitsPerPage|integer|true|none|none|
|page|integer|true|none|none|
|totalPages|integer|true|none|none|
|totalHits|integer|true|none|none|
|*oneOf*|object|false|none|none|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|estimatedTotalHits|integer|true|none|none|
|hits|[[SearchHit](#schemasearchhit)]|true|none|none|
|query|string|true|none|none|
|processingTimeMs|integer|true|none|none|
|facetDistribution|object \| null|false|none|none|
|facetStats|object \| null|false|none|none|
|semanticHitCount|integer \| null(u-int32)|false|none|none|

<h2 id="tocS_SearchResultWithIndex">SearchResultWithIndex</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultwithindex"></a>
<a id="schema_SearchResultWithIndex"></a>
<a id="tocSsearchresultwithindex"></a>
<a id="tocssearchresultwithindex"></a>

```json
{
  "hitsPerPage": 0,
  "page": 0,
  "totalPages": 0,
  "totalHits": 0,
  "hits": [
    {
      "_formatted": {},
      "_matchesPosition": {
        "property1": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ],
        "property2": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ]
      },
      "_rankingScore": 0,
      "_rankingScoreDetails": {
        "property1": null,
        "property2": null
      },
      "property1": null,
      "property2": null
    }
  ],
  "query": "string",
  "processingTimeMs": 0,
  "facetDistribution": {
    "property1": null,
    "property2": null
  },
  "facetStats": {
    "property1": {
      "min": 0,
      "max": 0
    },
    "property2": {
      "min": 0,
      "max": 0
    }
  },
  "semanticHitCount": 0,
  "indexUid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|hitsPerPage|integer|true|none|none|
|page|integer|true|none|none|
|totalPages|integer|true|none|none|
|totalHits|integer|true|none|none|
|*oneOf*|object|false|none|none|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|estimatedTotalHits|integer|true|none|none|
|hits|[[SearchHit](#schemasearchhit)]|true|none|none|
|query|string|true|none|none|
|processingTimeMs|integer|true|none|none|
|facetDistribution|object \| null|false|none|none|
|facetStats|object \| null|false|none|none|
|semanticHitCount|integer \| null(u-int32)|false|none|none|
|indexUid|string|true|none|none|

<h2 id="tocS_SearchResults">SearchResults</h2>
<!-- backwards compatibility -->
<a id="schemasearchresults"></a>
<a id="schema_SearchResults"></a>
<a id="tocSsearchresults"></a>
<a id="tocssearchresults"></a>

```json
{
  "results": [
    {
      "hitsPerPage": 0,
      "page": 0,
      "totalPages": 0,
      "totalHits": 0,
      "hits": [
        {
          "_formatted": {},
          "_matchesPosition": {
            "property1": [
              {
                "start": 0,
                "length": 0,
                "indices": [
                  0
                ]
              }
            ],
            "property2": [
              {
                "start": 0,
                "length": 0,
                "indices": [
                  0
                ]
              }
            ]
          },
          "_rankingScore": 0,
          "_rankingScoreDetails": {
            "property1": null,
            "property2": null
          },
          "property1": null,
          "property2": null
        }
      ],
      "query": "string",
      "processingTimeMs": 0,
      "facetDistribution": {
        "property1": null,
        "property2": null
      },
      "facetStats": {
        "property1": {
          "min": 0,
          "max": 0
        },
        "property2": {
          "min": 0,
          "max": 0
        }
      },
      "semanticHitCount": 0,
      "indexUid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[SearchResultWithIndex](#schemasearchresultwithindex)]|true|none|none|

<h2 id="tocS_SettingEmbeddingSettings">SettingEmbeddingSettings</h2>
<!-- backwards compatibility -->
<a id="schemasettingembeddingsettings"></a>
<a id="schema_SettingEmbeddingSettings"></a>
<a id="tocSsettingembeddingsettings"></a>
<a id="tocssettingembeddingsettings"></a>

```json
{
  "inner": {
    "source": "openAi",
    "model": "string",
    "revision": "string",
    "pooling": "useModel",
    "apiKey": "string",
    "dimensions": "string",
    "binaryQuantized": true,
    "documentTemplate": true,
    "documentTemplateMaxBytes": 0,
    "url": "string",
    "request": null,
    "response": null,
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "searchEmbedder": {
      "source": "openAi",
      "model": "string",
      "revision": "string",
      "pooling": "useModel",
      "apiKey": "string",
      "dimensions": "string",
      "documentTemplate": true,
      "documentTemplateMaxBytes": 0,
      "url": "string",
      "request": null,
      "response": null,
      "headers": {
        "property1": "string",
        "property2": "string"
      }
    },
    "indexingEmbedder": {
      "source": "openAi",
      "model": "string",
      "revision": "string",
      "pooling": "useModel",
      "apiKey": "string",
      "dimensions": "string",
      "documentTemplate": true,
      "documentTemplateMaxBytes": 0,
      "url": "string",
      "request": null,
      "response": null,
      "headers": {
        "property1": "string",
        "property2": "string"
      }
    },
    "distribution": {
      "current_mean": 0,
      "current_sigma": 0
    }
  }
}
```

"Technical" type that is required due to utoipa.

We did not find a way to implement [`utoipa::ToSchema`] for the [`Setting`] enum,
but most types can use the `value_type` macro parameter to workaround that issue.

However that type is used in the settings route, including through the macro that auto-generate
all the settings route, so we can't remap the `value_type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inner|null \| object|false|none|none|

<h2 id="tocS_Settings_Checked">Settings_Checked</h2>
<!-- backwards compatibility -->
<a id="schemasettings_checked"></a>
<a id="schema_Settings_Checked"></a>
<a id="tocSsettings_checked"></a>
<a id="tocssettings_checked"></a>

```json
{
  "displayedAttributes": [
    "id",
    "title",
    "description",
    "url"
  ],
  "searchableAttributes": [
    "title",
    "description"
  ],
  "filterableAttributes": [
    "release_date",
    "genre"
  ],
  "sortableAttributes": [
    "release_date"
  ],
  "rankingRules": [
    "words",
    "typo",
    "proximity",
    "attribute",
    "exactness"
  ],
  "stopWords": [
    "the",
    "a",
    "them",
    "their"
  ],
  "nonSeparatorTokens": [
    " ",
    "\n"
  ],
  "separatorTokens": [
    "S"
  ],
  "dictionary": [
    "iPhone pro"
  ],
  "synonyms": {
    "he": [
      "she",
      "they",
      "them"
    ],
    "phone": [
      "iPhone",
      "android"
    ]
  },
  "distinctAttribute": "sku",
  "proximityPrecision": "byAttribute",
  "typoTolerance": {
    "enabled": true,
    "minWordSizeForTypos": {
      "oneTypo": 5,
      "twoTypos": 9
    },
    "disableOnWords": [
      "iPhone",
      "phone"
    ],
    "disableOnAttributes": [
      "uuid",
      "url"
    ],
    "disableOnNumbers": true
  },
  "faceting": {
    "maxValuesPerFacet": 10,
    "sortFacetValuesBy": {
      "genre": "count"
    }
  },
  "pagination": {
    "maxTotalHits": 250
  },
  "embedders": {
    "property1": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    },
    "property2": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    }
  },
  "searchCutoffMs": 50,
  "localizedAttributes": 50,
  "facetSearch": true,
  "prefixSearch": "indexingTime",
  "chat": {
    "description": "string",
    "documentTemplate": "string",
    "documentTemplateMaxBytes": 0,
    "searchParameters": {
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "limit": 0,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0
    }
  }
}
```

Holds all the settings for an index. `T` can either be `Checked` if they represents settings
whose validity is guaranteed, or `Unchecked` if they need to be validated. In the later case, a
call to `check` will return a `Settings<Checked>` from a `Settings<Unchecked>`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayedAttributes|[string]|false|none|Fields displayed in the returned documents.|
|searchableAttributes|[string]|false|none|Fields in which to search for matching query words sorted by order of importance.|
|filterableAttributes|[[FilterableAttributesRule](#schemafilterableattributesrule)]|false|none|Attributes to use for faceting and filtering. See [Filtering and Faceted Search](https://www.meilisearch.com/docs/learn/filtering_and_sorting/search_with_facet_filters).|
|sortableAttributes|[string]|false|none|Attributes to use when sorting search results.|
|rankingRules|[string]|false|none|List of ranking rules sorted by order of importance. The order is customizable.<br>[A list of ordered built-in ranking rules](https://www.meilisearch.com/docs/learn/relevancy/relevancy).|
|stopWords|[string]|false|none|List of words ignored when present in search queries.|
|nonSeparatorTokens|[string]|false|none|List of characters not delimiting where one term begins and ends.|
|separatorTokens|[string]|false|none|List of characters delimiting where one term begins and ends.|
|dictionary|[string]|false|none|List of strings Meilisearch should parse as a single term.|
|synonyms|object \| null|false|none|List of associated words treated similarly. A word associated to an array of word as synonyms.|
|distinctAttribute|string \| null|false|none|Search returns documents with distinct (different) values of the given field.|
|proximityPrecision|string \| null|false|none|Precision level when calculating the proximity ranking rule.|
|typoTolerance|null \| [TypoSettings](#schematyposettings)|false|none|none|
|faceting|null \| [FacetingSettings](#schemafacetingsettings)|false|none|none|
|pagination|null \| [PaginationSettings](#schemapaginationsettings)|false|none|none|
|embedders|object \| null|false|none|Embedder required for performing semantic search queries.|
|searchCutoffMs|integer \| null(u-int64)|false|none|Maximum duration of a search query.|
|localizedAttributes|[[LocalizedAttributesRuleView](#schemalocalizedattributesruleview)]|false|none|none|
|facetSearch|boolean \| null|false|none|none|
|prefixSearch|null \| [PrefixSearchSettings](#schemaprefixsearchsettings)|false|none|none|
|chat|null \| [ChatSettings](#schemachatsettings)|false|none|none|

<h2 id="tocS_Settings_Unchecked">Settings_Unchecked</h2>
<!-- backwards compatibility -->
<a id="schemasettings_unchecked"></a>
<a id="schema_Settings_Unchecked"></a>
<a id="tocSsettings_unchecked"></a>
<a id="tocssettings_unchecked"></a>

```json
{
  "displayedAttributes": [
    "id",
    "title",
    "description",
    "url"
  ],
  "searchableAttributes": [
    "title",
    "description"
  ],
  "filterableAttributes": [
    "release_date",
    "genre"
  ],
  "sortableAttributes": [
    "release_date"
  ],
  "rankingRules": [
    "words",
    "typo",
    "proximity",
    "attribute",
    "exactness"
  ],
  "stopWords": [
    "the",
    "a",
    "them",
    "their"
  ],
  "nonSeparatorTokens": [
    " ",
    "\n"
  ],
  "separatorTokens": [
    "S"
  ],
  "dictionary": [
    "iPhone pro"
  ],
  "synonyms": {
    "he": [
      "she",
      "they",
      "them"
    ],
    "phone": [
      "iPhone",
      "android"
    ]
  },
  "distinctAttribute": "sku",
  "proximityPrecision": "byAttribute",
  "typoTolerance": {
    "enabled": true,
    "minWordSizeForTypos": {
      "oneTypo": 5,
      "twoTypos": 9
    },
    "disableOnWords": [
      "iPhone",
      "phone"
    ],
    "disableOnAttributes": [
      "uuid",
      "url"
    ],
    "disableOnNumbers": true
  },
  "faceting": {
    "maxValuesPerFacet": 10,
    "sortFacetValuesBy": {
      "genre": "count"
    }
  },
  "pagination": {
    "maxTotalHits": 250
  },
  "embedders": {
    "property1": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    },
    "property2": {
      "inner": {
        "source": "openAi",
        "model": "string",
        "revision": "string",
        "pooling": "useModel",
        "apiKey": "string",
        "dimensions": "string",
        "binaryQuantized": true,
        "documentTemplate": true,
        "documentTemplateMaxBytes": 0,
        "url": "string",
        "request": null,
        "response": null,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "searchEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "indexingEmbedder": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "distribution": {
          "current_mean": 0,
          "current_sigma": 0
        }
      }
    }
  },
  "searchCutoffMs": 50,
  "localizedAttributes": 50,
  "facetSearch": true,
  "prefixSearch": "indexingTime",
  "chat": {
    "description": "string",
    "documentTemplate": "string",
    "documentTemplateMaxBytes": 0,
    "searchParameters": {
      "hybrid": {
        "semanticRatio": 0,
        "embedder": "string"
      },
      "limit": 0,
      "sort": [
        "string"
      ],
      "distinct": "string",
      "matchingStrategy": "last",
      "attributesToSearchOn": [
        "string"
      ],
      "rankingScoreThreshold": 0
    }
  }
}
```

Holds all the settings for an index. `T` can either be `Checked` if they represents settings
whose validity is guaranteed, or `Unchecked` if they need to be validated. In the later case, a
call to `check` will return a `Settings<Checked>` from a `Settings<Unchecked>`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayedAttributes|[string]|false|none|Fields displayed in the returned documents.|
|searchableAttributes|[string]|false|none|Fields in which to search for matching query words sorted by order of importance.|
|filterableAttributes|[[FilterableAttributesRule](#schemafilterableattributesrule)]|false|none|Attributes to use for faceting and filtering. See [Filtering and Faceted Search](https://www.meilisearch.com/docs/learn/filtering_and_sorting/search_with_facet_filters).|
|sortableAttributes|[string]|false|none|Attributes to use when sorting search results.|
|rankingRules|[string]|false|none|List of ranking rules sorted by order of importance. The order is customizable.<br>[A list of ordered built-in ranking rules](https://www.meilisearch.com/docs/learn/relevancy/relevancy).|
|stopWords|[string]|false|none|List of words ignored when present in search queries.|
|nonSeparatorTokens|[string]|false|none|List of characters not delimiting where one term begins and ends.|
|separatorTokens|[string]|false|none|List of characters delimiting where one term begins and ends.|
|dictionary|[string]|false|none|List of strings Meilisearch should parse as a single term.|
|synonyms|object \| null|false|none|List of associated words treated similarly. A word associated to an array of word as synonyms.|
|distinctAttribute|string \| null|false|none|Search returns documents with distinct (different) values of the given field.|
|proximityPrecision|string \| null|false|none|Precision level when calculating the proximity ranking rule.|
|typoTolerance|null \| [TypoSettings](#schematyposettings)|false|none|none|
|faceting|null \| [FacetingSettings](#schemafacetingsettings)|false|none|none|
|pagination|null \| [PaginationSettings](#schemapaginationsettings)|false|none|none|
|embedders|object \| null|false|none|Embedder required for performing semantic search queries.|
|searchCutoffMs|integer \| null(u-int64)|false|none|Maximum duration of a search query.|
|localizedAttributes|[[LocalizedAttributesRuleView](#schemalocalizedattributesruleview)]|false|none|none|
|facetSearch|boolean \| null|false|none|none|
|prefixSearch|null \| [PrefixSearchSettings](#schemaprefixsearchsettings)|false|none|none|
|chat|null \| [ChatSettings](#schemachatsettings)|false|none|none|

<h2 id="tocS_SimilarQuery">SimilarQuery</h2>
<!-- backwards compatibility -->
<a id="schemasimilarquery"></a>
<a id="schema_SimilarQuery"></a>
<a id="tocSsimilarquery"></a>
<a id="tocssimilarquery"></a>

```json
{
  "id": "string",
  "offset": 0,
  "limit": 0,
  "filter": null,
  "embedder": "string",
  "attributes_to_retrieve": [
    "string"
  ],
  "retrieve_vectors": true,
  "show_ranking_score": true,
  "show_ranking_score_details": true,
  "ranking_score_threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|offset|integer|true|none|none|
|limit|integer|true|none|none|
|filter|object|false|none|none|
|embedder|string|true|none|none|
|attributes_to_retrieve|[string]|false|none|none|
|retrieve_vectors|boolean|true|none|none|
|show_ranking_score|boolean|true|none|none|
|show_ranking_score_details|boolean|true|none|none|
|ranking_score_threshold|number(double)|true|none|none|

<h2 id="tocS_SimilarResult">SimilarResult</h2>
<!-- backwards compatibility -->
<a id="schemasimilarresult"></a>
<a id="schema_SimilarResult"></a>
<a id="tocSsimilarresult"></a>
<a id="tocssimilarresult"></a>

```json
{
  "hitsPerPage": 0,
  "page": 0,
  "totalPages": 0,
  "totalHits": 0,
  "hits": [
    {
      "_formatted": {},
      "_matchesPosition": {
        "property1": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ],
        "property2": [
          {
            "start": 0,
            "length": 0,
            "indices": [
              0
            ]
          }
        ]
      },
      "_rankingScore": 0,
      "_rankingScoreDetails": {
        "property1": null,
        "property2": null
      },
      "property1": null,
      "property2": null
    }
  ],
  "id": "string",
  "processingTimeMs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|hitsPerPage|integer|true|none|none|
|page|integer|true|none|none|
|totalPages|integer|true|none|none|
|totalHits|integer|true|none|none|
|*oneOf*|object|false|none|none|
|limit|integer|true|none|none|
|offset|integer|true|none|none|
|estimatedTotalHits|integer|true|none|none|
|hits|[[SearchHit](#schemasearchhit)]|true|none|none|
|id|string|true|none|none|
|processingTimeMs|integer|true|none|none|

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
{
  "databaseSize": 0,
  "usedDatabaseSize": 0,
  "lastUpdate": "1970-01-01T00:00:00Z",
  "indexes": {
    "property1": {
      "numberOfDocuments": 0,
      "rawDocumentDbSize": 0,
      "avgDocumentSize": 0,
      "isIndexing": true,
      "numberOfEmbeddings": 0,
      "numberOfEmbeddedDocuments": 0,
      "fieldDistribution": {
        "property1": 0,
        "property2": 0
      }
    },
    "property2": {
      "numberOfDocuments": 0,
      "rawDocumentDbSize": 0,
      "avgDocumentSize": 0,
      "isIndexing": true,
      "numberOfEmbeddings": 0,
      "numberOfEmbeddedDocuments": 0,
      "fieldDistribution": {
        "property1": 0,
        "property2": 0
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseSize|integer(u-int64)|true|none|The disk space used by the database, in bytes.|
|usedDatabaseSize|integer(u-int64)|true|none|The size of the database, in bytes.|
|lastUpdate|string \| null(date-time)|false|none|The date of the last update in the RFC 3339 formats. Can be `null` if no update has ever been processed.|
|indexes|object|true|none|The stats of every individual index your API key lets you access.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"processing"
```

The status of a task.

<h2 id="tocS_SubEmbeddingSettings">SubEmbeddingSettings</h2>
<!-- backwards compatibility -->
<a id="schemasubembeddingsettings"></a>
<a id="schema_SubEmbeddingSettings"></a>
<a id="tocSsubembeddingsettings"></a>
<a id="tocssubembeddingsettings"></a>

```json
{
  "source": "openAi",
  "model": "string",
  "revision": "string",
  "pooling": "useModel",
  "apiKey": "string",
  "dimensions": "string",
  "documentTemplate": true,
  "documentTemplateMaxBytes": 0,
  "url": "string",
  "request": null,
  "response": null,
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|null \| [EmbedderSource](#schemaembeddersource)|false|none|none|
|model|string \| null|false|none|The name of the model to use.<br><br># Mandatory<br><br>- This parameter is mandatory for source `ollama`<br><br># Availability<br><br>- This parameter is available for sources `openAi`, `huggingFace`, `ollama`<br><br># 🔄 Reindexing<br><br>- 🏗️ Changing the value of this parameter always regenerates embeddings.<br><br># Defaults<br><br>- For source `openAi`, defaults to `text-embedding-3-small`<br>- For source `huggingFace`, defaults to `BAAI/bge-base-en-v1.5`|
|revision|string \| null|false|none|The revision (commit SHA1) of the model to use.<br><br>If unspecified, Meilisearch picks the latest revision of the model.<br><br># Availability<br><br>- This parameter is available for source `huggingFace`<br><br># 🔄 Reindexing<br><br>- 🏗️ Changing the value of this parameter always regenerates embeddings<br><br># Defaults<br><br>- When `model` is set to default, defaults to `617ca489d9e86b49b8167676d8220688b99db36e`<br>- Otherwise, defaults to `null`|
|pooling|null \| [OverridePooling](#schemaoverridepooling)|false|none|none|
|apiKey|string \| null|false|none|The API key to pass to the remote embedder while making requests.<br><br># Availability<br><br>- This parameter is available for source `openAi`, `ollama`, `rest`<br><br># 🔄 Reindexing<br><br>- 🌱 Changing the value of this parameter never regenerates embeddings<br><br># Defaults<br><br>- For source `openAi`, the key is read from `OPENAI_API_KEY`, then `MEILI_OPENAI_API_KEY`.<br>- For other sources, no bearer token is sent if this parameter is not set.<br><br># Note<br><br>- This setting is partially hidden when returned by the settings|
|dimensions|string \| null|false|none|The expected dimensions of the embeddings produced by this embedder.<br><br># Mandatory<br><br>- This parameter is mandatory for source `userProvided`<br><br># Availability<br><br>- This parameter is available for source `openAi`, `ollama`, `rest`, `userProvided`<br><br># 🔄 Reindexing<br><br>- 🏗️ When the source is `openAi`, changing the value of this parameter always regenerates embeddings<br>- 🌱 For other sources, changing the value of this parameter never regenerates embeddings<br><br># Defaults<br><br>- For source `openAi`, the dimensions is the maximum allowed by the model.<br>- For sources `ollama` and `rest`, the dimensions are inferred by embedding a sample text.|
|documentTemplate|boolean \| null|false|none|A liquid template used to render documents to a text that can be embedded.<br><br>Meillisearch interpolates the template for each document and sends the resulting text to the embedder.<br>The embedder then generates document vectors based on this text.<br><br># Availability<br><br>- This parameter is available for source `openAi`, `huggingFace`, `ollama` and `rest<br><br># 🔄 Reindexing<br><br>- 🏗️ When modified, embeddings are regenerated for documents whose rendering through the template produces a different text.|
|documentTemplateMaxBytes|integer \| null|false|none|Rendered texts are truncated to this size.<br><br># Availability<br><br>- This parameter is available for source `openAi`, `huggingFace`, `ollama` and `rest`<br><br># 🔄 Reindexing<br><br>- 🏗️ When increased, embeddings are regenerated for documents whose rendering through the template produces a different text.<br>- 🌱 When decreased, embeddings are never regenerated<br><br># Default<br><br>- Defaults to 400|
|url|string \| null|false|none|URL to reach the remote embedder.<br><br># Mandatory<br><br>- This parameter is mandatory for source `rest`<br><br># Availability<br><br>- This parameter is available for source `openAi`, `ollama` and `rest`<br><br># 🔄 Reindexing<br><br>- 🌱 When modified for source `openAi`, embeddings are never regenerated<br>- 🏗️ When modified for sources `ollama` and `rest`, embeddings are always regenerated|
|request|object|false|none|Template request to send to the remote embedder.<br><br># Mandatory<br><br>- This parameter is mandatory for source `rest`<br><br># Availability<br><br>- This parameter is available for source `rest`<br><br># 🔄 Reindexing<br><br>- 🏗️ Changing the value of this parameter always regenerates embeddings|
|response|object|false|none|Template response indicating how to find the embeddings in the response from the remote embedder.<br><br># Mandatory<br><br>- This parameter is mandatory for source `rest`<br><br># Availability<br><br>- This parameter is available for source `rest`<br><br># 🔄 Reindexing<br><br>- 🏗️ Changing the value of this parameter always regenerates embeddings|
|headers|object \| null|false|none|Additional headers to send to the remote embedder.<br><br># Availability<br><br>- This parameter is available for source `rest`<br><br># 🔄 Reindexing<br><br>- 🌱 Changing the value of this parameter never regenerates embeddings|

<h2 id="tocS_SummarizedTaskView">SummarizedTaskView</h2>
<!-- backwards compatibility -->
<a id="schemasummarizedtaskview"></a>
<a id="schema_SummarizedTaskView"></a>
<a id="tocSsummarizedtaskview"></a>
<a id="tocssummarizedtaskview"></a>

```json
{
  "taskUid": 0,
  "indexUid": "string",
  "status": "processing",
  "type": [
    "documentAdditionOrUpdate",
    "documentEdition",
    "documentDeletion",
    "settingsUpdate",
    "indexCreation",
    "indexDeletion",
    "indexUpdate",
    "indexSwap",
    "taskCancelation",
    "taskDeletion",
    "dumpCreation",
    "snapshotCreation",
    "upgradeDatabase"
  ],
  "enqueuedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taskUid|integer(u-int32)|true|none|The task unique identifier.|
|indexUid|string \| null|false|none|The index affected by this task. May be `null` if the task is not linked to any index.|
|status|[Status](#schemastatus)|true|none|The status of the task.|
|type|[Kind](#schemakind)|true|none|The type of the task.|
|enqueuedAt|string(date-time)|true|none|The date on which the task was enqueued.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enqueued|
|status|processing|
|status|succeeded|
|status|failed|
|status|canceled|
|type|documentAdditionOrUpdate|
|type|documentEdition|
|type|documentDeletion|
|type|settingsUpdate|
|type|indexCreation|
|type|indexDeletion|
|type|indexUpdate|
|type|indexSwap|
|type|taskCancelation|
|type|taskDeletion|
|type|dumpCreation|
|type|snapshotCreation|
|type|upgradeDatabase|

<h2 id="tocS_SwapIndexesPayload">SwapIndexesPayload</h2>
<!-- backwards compatibility -->
<a id="schemaswapindexespayload"></a>
<a id="schema_SwapIndexesPayload"></a>
<a id="tocSswapindexespayload"></a>
<a id="tocsswapindexespayload"></a>

```json
{
  "indexes": [
    "movies"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexes|[[IndexUid](#schemaindexuid)]|true|none|Array of the two indexUids to be swapped|

<h2 id="tocS_TaskView">TaskView</h2>
<!-- backwards compatibility -->
<a id="schemataskview"></a>
<a id="schema_TaskView"></a>
<a id="tocStaskview"></a>
<a id="tocstaskview"></a>

```json
{
  "uid": 4312,
  "batchUid": "movies",
  "indexUid": "string",
  "status": "processing",
  "type": [
    "documentAdditionOrUpdate",
    "documentEdition",
    "documentDeletion",
    "settingsUpdate",
    "indexCreation",
    "indexDeletion",
    "indexUpdate",
    "indexSwap",
    "taskCancelation",
    "taskDeletion",
    "dumpCreation",
    "snapshotCreation",
    "upgradeDatabase"
  ],
  "canceledBy": 4326,
  "details": {
    "displayedAttributes": [
      "id",
      "title",
      "description",
      "url"
    ],
    "searchableAttributes": [
      "title",
      "description"
    ],
    "filterableAttributes": [
      "release_date",
      "genre"
    ],
    "sortableAttributes": [
      "release_date"
    ],
    "rankingRules": [
      "words",
      "typo",
      "proximity",
      "attribute",
      "exactness"
    ],
    "stopWords": [
      "the",
      "a",
      "them",
      "their"
    ],
    "nonSeparatorTokens": [
      " ",
      "\n"
    ],
    "separatorTokens": [
      "S"
    ],
    "dictionary": [
      "iPhone pro"
    ],
    "synonyms": {
      "he": [
        "she",
        "they",
        "them"
      ],
      "phone": [
        "iPhone",
        "android"
      ]
    },
    "distinctAttribute": "sku",
    "proximityPrecision": "byAttribute",
    "typoTolerance": {
      "enabled": true,
      "minWordSizeForTypos": {
        "oneTypo": 5,
        "twoTypos": 9
      },
      "disableOnWords": [
        "iPhone",
        "phone"
      ],
      "disableOnAttributes": [
        "uuid",
        "url"
      ],
      "disableOnNumbers": true
    },
    "faceting": {
      "maxValuesPerFacet": 10,
      "sortFacetValuesBy": {
        "genre": "count"
      }
    },
    "pagination": {
      "maxTotalHits": 250
    },
    "embedders": {
      "property1": {
        "inner": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "binaryQuantized": true,
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "searchEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "indexingEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "distribution": {
            "current_mean": 0,
            "current_sigma": 0
          }
        }
      },
      "property2": {
        "inner": {
          "source": "openAi",
          "model": "string",
          "revision": "string",
          "pooling": "useModel",
          "apiKey": "string",
          "dimensions": "string",
          "binaryQuantized": true,
          "documentTemplate": true,
          "documentTemplateMaxBytes": 0,
          "url": "string",
          "request": null,
          "response": null,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "searchEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "indexingEmbedder": {
            "source": "openAi",
            "model": "string",
            "revision": "string",
            "pooling": "useModel",
            "apiKey": "string",
            "dimensions": "string",
            "documentTemplate": true,
            "documentTemplateMaxBytes": 0,
            "url": "string",
            "request": null,
            "response": null,
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "distribution": {
            "current_mean": 0,
            "current_sigma": 0
          }
        }
      }
    },
    "searchCutoffMs": 50,
    "localizedAttributes": 50,
    "facetSearch": true,
    "prefixSearch": "indexingTime",
    "chat": {
      "description": "string",
      "documentTemplate": "string",
      "documentTemplateMaxBytes": 0,
      "searchParameters": {
        "hybrid": {
          "semanticRatio": 0,
          "embedder": "string"
        },
        "limit": 0,
        "sort": [
          "string"
        ],
        "distinct": "string",
        "matchingStrategy": "last",
        "attributesToSearchOn": [
          "string"
        ],
        "rankingScoreThreshold": 0
      }
    },
    "receivedDocuments": 0,
    "indexedDocuments": 0,
    "editedDocuments": 0,
    "primaryKey": "string",
    "providedIds": 0,
    "deletedDocuments": 0,
    "matchedTasks": 0,
    "canceledTasks": 0,
    "deletedTasks": 0,
    "originalFilter": "string",
    "dumpUid": "string",
    "context": {},
    "function": "string",
    "swaps": [
      {
        "indexes": [
          "string",
          "string"
        ]
      }
    ],
    "upgradeFrom": "string",
    "upgradeTo": "string"
  },
  "error": {
    "message": "string",
    "code": "api_key_already_exists",
    "type": "internal",
    "link": "string"
  },
  "duration": null,
  "enqueuedAt": "2024-08-08_14:12:09.393Z",
  "startedAt": "2024-08-08_14:12:09.393Z",
  "finishedAt": "2024-08-08_14:12:09.393Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|integer(u-int32)|true|none|The unique sequential identifier of the task.|
|batchUid|integer \| null(u-int32)|false|none|The unique identifier of the index where this task is operated.|
|indexUid|string \| null|false|none|none|
|status|[Status](#schemastatus)|true|none|The status of a task.|
|type|[Kind](#schemakind)|true|none|The type of the task.|
|canceledBy|integer \| null(u-int32)|false|none|The uid of the task that performed the taskCancelation if the task has been canceled.|
|details|null \| [DetailsView](#schemadetailsview)|false|none|none|
|error|null \| [ResponseError](#schemaresponseerror)|false|none|none|
|duration|string \| null|false|none|Total elasped time the engine was in processing state expressed as a `ISO-8601` duration format.|
|enqueuedAt|string|true|none|An `RFC 3339` format for date/time/duration.|
|startedAt|string|false|none|An `RFC 3339` format for date/time/duration.|
|finishedAt|string|false|none|An `RFC 3339` format for date/time/duration.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enqueued|
|status|processing|
|status|succeeded|
|status|failed|
|status|canceled|
|type|documentAdditionOrUpdate|
|type|documentEdition|
|type|documentDeletion|
|type|settingsUpdate|
|type|indexCreation|
|type|indexDeletion|
|type|indexUpdate|
|type|indexSwap|
|type|taskCancelation|
|type|taskDeletion|
|type|dumpCreation|
|type|snapshotCreation|
|type|upgradeDatabase|

<h2 id="tocS_TypoSettings">TypoSettings</h2>
<!-- backwards compatibility -->
<a id="schematyposettings"></a>
<a id="schema_TypoSettings"></a>
<a id="tocStyposettings"></a>
<a id="tocstyposettings"></a>

```json
{
  "enabled": true,
  "minWordSizeForTypos": {
    "oneTypo": 5,
    "twoTypos": 9
  },
  "disableOnWords": [
    "iPhone",
    "phone"
  ],
  "disableOnAttributes": [
    "uuid",
    "url"
  ],
  "disableOnNumbers": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean \| null|false|none|none|
|minWordSizeForTypos|null \| [MinWordSizeTyposSetting](#schemaminwordsizetypossetting)|false|none|none|
|disableOnWords|[string]|false|none|none|
|disableOnAttributes|[string]|false|none|none|
|disableOnNumbers|boolean \| null|false|none|none|

<h2 id="tocS_Unchecked">Unchecked</h2>
<!-- backwards compatibility -->
<a id="schemaunchecked"></a>
<a id="schema_Unchecked"></a>
<a id="tocSunchecked"></a>
<a id="tocsunchecked"></a>

```json
null
```

<h2 id="tocS_UpdateIndexRequest">UpdateIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateindexrequest"></a>
<a id="schema_UpdateIndexRequest"></a>
<a id="tocSupdateindexrequest"></a>
<a id="tocsupdateindexrequest"></a>

```json
{
  "primaryKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryKey|string \| null|false|none|The new primary key of the index|

<h2 id="tocS_UpdateStderrLogs">UpdateStderrLogs</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestderrlogs"></a>
<a id="schema_UpdateStderrLogs"></a>
<a id="tocSupdatestderrlogs"></a>
<a id="tocsupdatestderrlogs"></a>

```json
{
  "target": "milli=trace,index_scheduler,actix_web=off"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|true|none|Lets you specify which parts of the code you want to inspect and is formatted like that: code_part=log_level,code_part=log_level<br>- If the `code_part` is missing, then the `log_level` will be applied to everything.<br>- If the `log_level` is missing, then the `code_part` will be selected in `info` log level.|

<h2 id="tocS_VersionResponse">VersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaversionresponse"></a>
<a id="schema_VersionResponse"></a>
<a id="tocSversionresponse"></a>
<a id="tocsversionresponse"></a>

```json
{
  "commitSha": "string",
  "commitDate": "string",
  "pkgVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitSha|string|true|none|The commit used to compile this build of Meilisearch.|
|commitDate|string|true|none|The date of this build.|
|pkgVersion|string|true|none|The version of Meilisearch.|

<h2 id="tocS_u32">u32</h2>
<!-- backwards compatibility -->
<a id="schemau32"></a>
<a id="schema_u32"></a>
<a id="tocSu32"></a>
<a id="tocsu32"></a>

```json
0
```
