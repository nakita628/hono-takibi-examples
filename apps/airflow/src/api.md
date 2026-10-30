<h1 id="airflow-api">Airflow API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Airflow API. All endpoints located under ``/api/v2`` can be used safely, are stable and backward compatible. Endpoints located under ``/ui`` are dedicated to the UI and are subject to breaking change depending on the need of the frontend. Users should not rely on those but use the public ones instead.

**Filtering with pattern parameters.** Many list endpoints accept ``*_pattern`` and ``*_prefix_pattern`` query parameters. Unless a parameter's own description says otherwise, ``*_pattern`` is a case-insensitive substring match (SQL ``ILIKE '%term%'``) where ``%`` matches any sequence and ``_`` matches any single character (e.g. ``%customer_%``) — convenient, but it cannot use B-tree indexes, so it is slow on large tables. ``*_prefix_pattern`` matches the start of the value, is case-sensitive and index-friendly (prefer it at scale); there ``%`` and ``_`` are literal and trailing non-alphanumeric characters are stripped so the range scan stays index-compatible under locale-aware collations (e.g. ``test_`` matches values starting with ``test``, and ``s3://`` matches ``s3``). In both, ``|`` means OR (e.g. ``dag1|dag2``) and ``~`` matches everything. Regular expressions are not supported by these parameters; regex-capable endpoints expose a separate parameter.

# Authentication

- oAuth2 authentication. To authenticate Airflow API requests, clients must include a JWT (JSON Web Token) in the Authorization header of each request. This token is used to verify the identity of the client and ensure that they have the appropriate permissions to access the requested resources. You can use the endpoint ``POST /auth/token`` in order to generate a JWT token. Upon successful authentication, the server will issue a JWT token that contains the necessary information (such as user identity and scope) to authenticate subsequent requests. To learn more about Airflow public API authentication, please read https://airflow.apache.org/docs/apache-airflow/stable/security/api.html.

    - Flow: password
    - Token URL = [/auth/token](/auth/token)

- HTTP Authentication, scheme: bearer

<h1 id="airflow-api-asset">Asset</h1>

## Get Assets

<a id="opIdget_assets"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets`

Get assets.

<h3 id="get-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|uri|query|[string]|false|Exact-match filter on the full asset URI. Compiles to an indexed equality comparison (``uri = ...``). Repeat the parameter (``?uri=a&uri=b``) to match multiple assets.|
|uri_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `uri_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|uri_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|dag_ids|query|[string]|false|none|
|only_active|query|boolean|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name, uri, created_at, updated_at`|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "id": 0,
      "name": "string",
      "uri": "string",
      "group": "string",
      "extra": {
        "property1": null,
        "property2": null
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "scheduled_dags": [
        {
          "dag_id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "team_name": "string"
        }
      ],
      "producing_tasks": [
        {
          "dag_id": "string",
          "task_id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "team_name": "string"
        }
      ],
      "consuming_tasks": [
        {
          "dag_id": "string",
          "task_id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "aliases": [
        {
          "id": 0,
          "name": "string",
          "group": "string"
        }
      ],
      "watchers": [
        {
          "name": "string",
          "trigger_id": 0,
          "created_date": "1970-01-01T00:00:00Z"
        }
      ],
      "last_asset_event": {
        "id": 0,
        "timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetCollectionResponse](#schemaassetcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Asset Aliases

<a id="opIdget_asset_aliases"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/aliases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/aliases`

Get asset aliases.

<h3 id="get-asset-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, name`|

> Example responses

> 200 Response

```json
{
  "asset_aliases": [
    {
      "id": 0,
      "name": "string",
      "group": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-asset-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetAliasCollectionResponse](#schemaassetaliascollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Asset Alias

<a id="opIdget_asset_alias"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/aliases/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/aliases/{asset_alias_id}`

Get an asset alias.

<h3 id="get-asset-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_alias_id|path|integer|true|none|

> Example responses

> 200 Response

```json
null
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-asset-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Asset Events

<a id="opIdget_asset_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/events`

Get asset events.

<h3 id="get-asset-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `source_task_id, source_dag_id, source_run_id, source_map_index, timestamp`|
|asset_id|query|integer \| null|false|none|
|source_dag_id|query|string \| null|false|none|
|source_task_id|query|string \| null|false|none|
|source_task_instance_id|query|string(uuid) \| null|false|none|
|source_run_id|query|string \| null|false|none|
|source_map_index|query|integer \| null|false|none|
|partition_key|query|string \| null|false|none|
|partition_key_regexp_pattern|query|string \| null|false|Filter results by matching this regular expression against the field value.|
|name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|extra|query|[string]|false|Filter by JSON key-value pairs. Repeat for multiple conditions (AND logic). Format: key=value (e.g. extra=region=us&extra=env=prod).|
|timestamp_gte|query|string(date-time) \| null|false|none|
|timestamp_gt|query|string(date-time) \| null|false|none|
|timestamp_lte|query|string(date-time) \| null|false|none|
|timestamp_lt|query|string(date-time) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "asset_events": [
    {
      "id": 0,
      "asset_id": 0,
      "uri": "string",
      "name": "string",
      "group": "string",
      "extra": {
        "property1": null,
        "property2": null
      },
      "source_task_id": "string",
      "source_dag_id": "string",
      "source_run_id": "string",
      "source_map_index": 0,
      "source_task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_dagruns": [
        {
          "run_id": "string",
          "dag_id": "string",
          "logical_date": "1970-01-01T00:00:00Z",
          "start_date": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "state": "string",
          "data_interval_start": "1970-01-01T00:00:00Z",
          "data_interval_end": "1970-01-01T00:00:00Z",
          "partition_key": "string",
          "triggering": true
        }
      ],
      "timestamp": "1970-01-01T00:00:00Z",
      "partition_key": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-asset-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetEventCollectionResponse](#schemaasseteventcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Create Asset Event

<a id="opIdcreate_asset_event"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asset_id": 0,
    "partition_key": "string",
    "extra": {},
    "access_control": {
      "consumer_teams": [
        "string"
      ],
      "allow_global": true
    }
  }'
```

`POST /api/v2/assets/events`

Create asset events.

> Body parameter

```json
{
  "asset_id": 0,
  "partition_key": "string",
  "extra": {},
  "access_control": {
    "consumer_teams": [
      "string"
    ],
    "allow_global": true
  }
}
```

<h3 id="create-asset-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAssetEventsBody](#schemacreateasseteventsbody)|true|none|
|» asset_id|body|integer|true|none|
|» partition_key|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» extra|body|object|false|none|
|» access_control|body|[AssetEventAccessControl](#schemaasseteventaccesscontrol) \| null|false|none|
|» » *anyOf*|body|[AssetEventAccessControl](#schemaasseteventaccesscontrol)|false|Access control settings for asset event consumer team filtering.|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "asset_id": 0,
  "uri": "string",
  "name": "string",
  "group": "string",
  "extra": {
    "property1": null,
    "property2": null
  },
  "source_task_id": "string",
  "source_dag_id": "string",
  "source_run_id": "string",
  "source_map_index": 0,
  "source_task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_dagruns": [
    {
      "run_id": "string",
      "dag_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "state": "string",
      "data_interval_start": "1970-01-01T00:00:00Z",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "partition_key": "string",
      "triggering": true
    }
  ],
  "timestamp": "1970-01-01T00:00:00Z",
  "partition_key": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="create-asset-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetEventResponse](#schemaasseteventresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Materialize Asset

<a id="opIdmaterialize_asset"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/materialize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dag_run_id": "string",
    "data_interval_start": "1970-01-01T00:00:00Z",
    "data_interval_end": "1970-01-01T00:00:00Z",
    "logical_date": "1970-01-01T00:00:00Z",
    "run_after": "1970-01-01T00:00:00Z",
    "conf": {},
    "note": "string",
    "partition_key": "string",
    "bundle_version": "string",
    "drain_dag": false
  }'
```

`POST /api/v2/assets/{asset_id}/materialize`

Materialize an asset by triggering a Dag run that produces it.

> Body parameter

```json
{
  "dag_run_id": "string",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "conf": {},
  "note": "string",
  "partition_key": "string",
  "bundle_version": "string",
  "drain_dag": false
}
```

<h3 id="materialize-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|integer|true|none|
|body|body|[MaterializeAssetBody](#schemamaterializeassetbody)|true|none|
|» dag_run_id|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» data_interval_start|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» data_interval_end|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» conf|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» partition_key|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» bundle_version|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» drain_dag|body|boolean|false|Drain the Dag together with this run. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag.|

> Example responses

> 200 Response

```json
{
  "dag_run_id": "string",
  "dag_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "queued_at": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "run_type": "backfill",
  "state": "queued",
  "triggered_by": "cli",
  "triggering_user_name": "string",
  "conf": {},
  "note": "string",
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "bundle_version": "string",
  "dag_display_name": "string",
  "partition_key": "string",
  "partition_date": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="materialize-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGRunResponse](#schemadagrunresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Asset Queued Events

<a id="opIdget_asset_queued_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/queuedEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/{asset_id}/queuedEvents`

Get queued asset events for an asset.

<h3 id="get-asset-queued-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|integer|true|none|
|before|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "queued_events": [
    {
      "dag_id": "string",
      "asset_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-asset-queued-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[QueuedEventCollectionResponse](#schemaqueuedeventcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Asset Queued Events

<a id="opIddelete_asset_queued_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/queuedEvents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/assets/{asset_id}/queuedEvents`

Delete queued asset events for an asset.

<h3 id="delete-asset-queued-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|integer|true|none|
|before|query|string \| null|false|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-asset-queued-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Asset

<a id="opIdget_asset"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/{asset_id}`

Get an asset.

<h3 id="get-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "uri": "string",
  "group": "string",
  "extra": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "scheduled_dags": [
    {
      "dag_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "producing_tasks": [
    {
      "dag_id": "string",
      "task_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "consuming_tasks": [
    {
      "dag_id": "string",
      "task_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "aliases": [
    {
      "id": 0,
      "name": "string",
      "group": "string"
    }
  ],
  "watchers": [
    {
      "name": "string",
      "trigger_id": 0,
      "created_date": "1970-01-01T00:00:00Z"
    }
  ],
  "last_asset_event": {
    "id": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetResponse](#schemaassetresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Asset Queued Events

<a id="opIdget_dag_asset_queued_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/assets/queuedEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/assets/queuedEvents`

Get queued asset events for a Dag.

<h3 id="get-dag-asset-queued-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|before|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "queued_events": [
    {
      "dag_id": "string",
      "asset_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-asset-queued-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[QueuedEventCollectionResponse](#schemaqueuedeventcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Dag Asset Queued Events

<a id="opIddelete_dag_asset_queued_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/assets/queuedEvents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/assets/queuedEvents`

<h3 id="delete-dag-asset-queued-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|before|query|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-dag-asset-queued-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Asset Queued Event

<a id="opIdget_dag_asset_queued_event"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/assets/0/queuedEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/assets/{asset_id}/queuedEvents`

Get a queued asset event for a Dag.

<h3 id="get-dag-asset-queued-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|asset_id|path|integer|true|none|
|before|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "asset_id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-asset-queued-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[QueuedEventResponse](#schemaqueuedeventresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Dag Asset Queued Event

<a id="opIddelete_dag_asset_queued_event"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/assets/0/queuedEvents \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/assets/{asset_id}/queuedEvents`

Delete a queued asset event for a Dag.

<h3 id="delete-dag-asset-queued-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|asset_id|path|integer|true|none|
|before|query|string \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-dag-asset-queued-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-backfill">Backfill</h1>

## List Backfills

<a id="opIdlist_backfills"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/v2/backfills?dag_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/backfills`

<h3 id="list-backfills-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|query|string|true|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id`|

> Example responses

> 200 Response

```json
{
  "backfills": [
    {
      "id": 0,
      "dag_id": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "to_date": "1970-01-01T00:00:00Z",
      "dag_run_conf": {},
      "is_paused": true,
      "reprocess_behavior": "failed",
      "max_active_runs": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="list-backfills-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillCollectionResponse](#schemabackfillcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Create Backfill

<a id="opIdcreate_backfill"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dag_id": "string",
    "from_date": "1970-01-01T00:00:00Z",
    "to_date": "1970-01-01T00:00:00Z",
    "run_backwards": false,
    "dag_run_conf": {},
    "reprocess_behavior": "failed",
    "max_active_runs": 10,
    "run_on_latest_version": true,
    "drain_dag": false
  }'
```

`POST /api/v2/backfills`

> Body parameter

```json
{
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "run_backwards": false,
  "dag_run_conf": {},
  "reprocess_behavior": "failed",
  "max_active_runs": 10,
  "run_on_latest_version": true,
  "drain_dag": false
}
```

<h3 id="create-backfill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BackfillPostBody](#schemabackfillpostbody)|true|none|
|» dag_id|body|string|true|none|
|» from_date|body|string(date-time)|true|none|
|» to_date|body|string(date-time)|true|none|
|» run_backwards|body|boolean|false|none|
|» dag_run_conf|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» reprocess_behavior|body|[ReprocessBehavior](#schemareprocessbehavior)|false|Internal enum for setting reprocess behavior in a backfill.<br><br>:meta private:|
|» max_active_runs|body|integer|false|none|
|» run_on_latest_version|body|boolean \| null|false|Run on the latest bundle version of the Dag for each backfilled run. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``True`` (the historical default for backfills).|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» drain_dag|body|boolean|false|Drain the Dag together with the backfill. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag. Ignored by the dry-run endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reprocess_behavior|failed|
|» reprocess_behavior|completed|
|» reprocess_behavior|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "dag_run_conf": {},
  "is_paused": true,
  "reprocess_behavior": "failed",
  "max_active_runs": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

> 503 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-backfill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillResponse](#schemabackfillresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|503|Service Unavailable|Service Unavailable|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Backfill

<a id="opIdget_backfill"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/backfills/{backfill_id}`

<h3 id="get-backfill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "dag_run_conf": {},
  "is_paused": true,
  "reprocess_behavior": "failed",
  "max_active_runs": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-backfill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillResponse](#schemabackfillresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## List Backfill Dag Runs

<a id="opIdlist_backfill_dag_runs"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills/0/dag_runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/backfills/{backfill_id}/dag_runs`

List Dag runs associated with a backfill, including skipped slots.

<h3 id="list-backfill-dag-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_id|path|integer|true|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, sort_ordinal`|

> Example responses

> 200 Response

```json
{
  "backfill_dag_runs": [
    {
      "id": 0,
      "backfill_id": 0,
      "dag_id": "string",
      "dag_run_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "partition_key": "string",
      "sort_ordinal": 0,
      "exception_reason": "string",
      "dag_run_state": "queued"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="list-backfill-dag-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillDagRunCollectionResponse](#schemabackfilldagruncollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Pause Backfill

<a id="opIdpause_backfill"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills/0/pause \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v2/backfills/{backfill_id}/pause`

<h3 id="pause-backfill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "dag_run_conf": {},
  "is_paused": true,
  "reprocess_behavior": "failed",
  "max_active_runs": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="pause-backfill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillResponse](#schemabackfillresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Unpause Backfill

<a id="opIdunpause_backfill"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills/0/unpause \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v2/backfills/{backfill_id}/unpause`

<h3 id="unpause-backfill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "dag_run_conf": {},
  "is_paused": true,
  "reprocess_behavior": "failed",
  "max_active_runs": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="unpause-backfill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillResponse](#schemabackfillresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Cancel Backfill

<a id="opIdcancel_backfill"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills/0/cancel \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v2/backfills/{backfill_id}/cancel`

<h3 id="cancel-backfill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "dag_run_conf": {},
  "is_paused": true,
  "reprocess_behavior": "failed",
  "max_active_runs": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="cancel-backfill-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BackfillResponse](#schemabackfillresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Create Backfill Dry Run

<a id="opIdcreate_backfill_dry_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/backfills/dry_run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dag_id": "string",
    "from_date": "1970-01-01T00:00:00Z",
    "to_date": "1970-01-01T00:00:00Z",
    "run_backwards": false,
    "dag_run_conf": {},
    "reprocess_behavior": "failed",
    "max_active_runs": 10,
    "run_on_latest_version": true,
    "drain_dag": false
  }'
```

`POST /api/v2/backfills/dry_run`

> Body parameter

```json
{
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "run_backwards": false,
  "dag_run_conf": {},
  "reprocess_behavior": "failed",
  "max_active_runs": 10,
  "run_on_latest_version": true,
  "drain_dag": false
}
```

<h3 id="create-backfill-dry-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BackfillPostBody](#schemabackfillpostbody)|true|none|
|» dag_id|body|string|true|none|
|» from_date|body|string(date-time)|true|none|
|» to_date|body|string(date-time)|true|none|
|» run_backwards|body|boolean|false|none|
|» dag_run_conf|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» reprocess_behavior|body|[ReprocessBehavior](#schemareprocessbehavior)|false|Internal enum for setting reprocess behavior in a backfill.<br><br>:meta private:|
|» max_active_runs|body|integer|false|none|
|» run_on_latest_version|body|boolean \| null|false|Run on the latest bundle version of the Dag for each backfilled run. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``True`` (the historical default for backfills).|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» drain_dag|body|boolean|false|Drain the Dag together with the backfill. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag. Ignored by the dry-run endpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reprocess_behavior|failed|
|» reprocess_behavior|completed|
|» reprocess_behavior|none|

> Example responses

> 200 Response

```json
{
  "backfills": [
    {
      "logical_date": "1970-01-01T00:00:00Z",
      "partition_key": "string",
      "partition_date": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

> 503 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-backfill-dry-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DryRunBackfillCollectionResponse](#schemadryrunbackfillcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|
|503|Service Unavailable|Service Unavailable|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-connection">Connection</h1>

## Get Connection

<a id="opIdget_connection"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/connections/{connection_id}`

Get a connection entry.

<h3 id="get-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConnectionResponse](#schemaconnectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Connection

<a id="opIddelete_connection"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/connections/{connection_id}`

Delete a connection entry.

<h3 id="delete-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Connection

<a id="opIdpatch_connection"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "string",
    "conn_type": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "schema": "string",
    "port": 0,
    "password": "string",
    "extra": "string",
    "team_name": "string"
  }'
```

`PATCH /api/v2/connections/{connection_id}`

Update a connection entry.

> Body parameter

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

<h3 id="patch-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection_id|path|string|true|none|
|update_mask|query|[string] \| null|false|none|
|body|body|[ConnectionBody](#schemaconnectionbody)|true|none|
|» connection_id|body|string|true|none|
|» conn_type|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» host|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» login|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» schema|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» port|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» password|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» extra|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="patch-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConnectionResponse](#schemaconnectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Connection Test

<a id="opIdget_connection_test"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/enqueue-test \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Airflow-Connection-Test-Token: string'
```

`GET /api/v2/connections/enqueue-test`

Poll for the status of an enqueued connection test by its token (passed as a header).

<h3 id="get-connection-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Airflow-Connection-Test-Token|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "connection_id": "string",
  "state": "string",
  "result_message": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-connection-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AsyncConnectionTestResponse](#schemaasyncconnectiontestresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Enqueue Connection Test

<a id="opIdenqueue_connection_test"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/enqueue-test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "string",
    "conn_type": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "schema": "string",
    "port": 0,
    "password": "string",
    "extra": "string",
    "team_name": "string",
    "commit_on_success": false,
    "executor": "string",
    "queue": "string"
  }'
```

`POST /api/v2/connections/enqueue-test`

Enqueue a connection test for deferred execution on a worker; returns a polling token.

> Body parameter

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string",
  "commit_on_success": false,
  "executor": "string",
  "queue": "string"
}
```

<h3 id="enqueue-connection-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionTestRequestBody](#schemaconnectiontestrequestbody)|true|none|
|» connection_id|body|string|true|none|
|» conn_type|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» host|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» login|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» schema|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» port|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» password|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» extra|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» commit_on_success|body|boolean|false|If True, save or update the connection in the connection table when the test succeeds.|
|» executor|body|string \| null|false|Executor name to dispatch the connection test to.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» queue|body|string \| null|false|Worker queue to route the connection test to (executor-dependent).|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 202 Response

```json
{
  "token": "string",
  "connection_id": "string",
  "state": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": "string"
}
```

<h3 id="enqueue-connection-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[ConnectionTestQueuedResponse](#schemaconnectiontestqueuedresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Connections

<a id="opIdget_connections"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/connections`

Get all connection entries.

<h3 id="get-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `conn_id, conn_type, description, host, port, id, team_name, connection_id`|
|connection_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `connection_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|connection_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "connection_id": "string",
      "conn_type": "string",
      "description": "string",
      "host": "string",
      "login": "string",
      "schema": "string",
      "port": 0,
      "password": "string",
      "extra": "string",
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConnectionCollectionResponse](#schemaconnectioncollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Post Connection

<a id="opIdpost_connection"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "string",
    "conn_type": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "schema": "string",
    "port": 0,
    "password": "string",
    "extra": "string",
    "team_name": "string"
  }'
```

`POST /api/v2/connections`

Create connection entry.

> Body parameter

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

<h3 id="post-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionBody](#schemaconnectionbody)|true|none|
|» connection_id|body|string|true|none|
|» conn_type|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» host|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» login|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» schema|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» port|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» password|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» extra|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="post-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[ConnectionResponse](#schemaconnectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Bulk Connections

<a id="opIdbulk_connections"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "action": "create",
        "entities": [
          {
            "connection_id": "string",
            "conn_type": "string",
            "description": "string",
            "host": "string",
            "login": "string",
            "schema": "string",
            "port": 0,
            "password": "string",
            "extra": "string",
            "team_name": "string"
          }
        ],
        "action_on_existence": "fail"
      }
    ]
  }'
```

`PATCH /api/v2/connections`

Bulk create, update, and delete connections.

> Body parameter

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "connection_id": "string",
          "conn_type": "string",
          "description": "string",
          "host": "string",
          "login": "string",
          "schema": "string",
          "port": 0,
          "password": "string",
          "extra": "string",
          "team_name": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

<h3 id="bulk-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkBody_ConnectionBody_](#schemabulkbody_connectionbody_)|true|none|
|» actions|body|[[BulkCreateAction_ConnectionBody_](#schemabulkcreateaction_connectionbody_) \| [BulkUpdateAction_ConnectionBody_](#schemabulkupdateaction_connectionbody_) \| [BulkDeleteAction_ConnectionBody_](#schemabulkdeleteaction_connectionbody_)]|true|none|
|» » *oneOf*|body|[BulkCreateAction_ConnectionBody_](#schemabulkcreateaction_connectionbody_)|false|none|
|» » *oneOf*|body|[BulkUpdateAction_ConnectionBody_](#schemabulkupdateaction_connectionbody_)|false|none|
|» » *oneOf*|body|[BulkDeleteAction_ConnectionBody_](#schemabulkdeleteaction_connectionbody_)|false|none|

> Example responses

> 200 Response

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="bulk-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BulkResponse](#schemabulkresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Test Connection

<a id="opIdtest_connection"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "connection_id": "string",
    "conn_type": "string",
    "description": "string",
    "host": "string",
    "login": "string",
    "schema": "string",
    "port": 0,
    "password": "string",
    "extra": "string",
    "team_name": "string"
  }'
```

`POST /api/v2/connections/test`

Test an API connection.

This method first creates an in-memory transient conn_id & exports that to an env var,
as some hook classes tries to find out the `conn` from their __init__ method & errors out if not found.
It also deletes the conn id env connection after the test.

> Body parameter

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

<h3 id="test-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionBody](#schemaconnectionbody)|true|none|
|» connection_id|body|string|true|none|
|» conn_type|body|string|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» host|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» login|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» schema|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» port|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» password|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» extra|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "status": true,
  "message": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="test-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ConnectionTestResponse](#schemaconnectiontestresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Create Default Connections

<a id="opIdcreate_default_connections"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/connections/defaults \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v2/connections/defaults`

Create default connections.

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="create-default-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dagrun">DagRun</h1>

## Get Dag Run

<a id="opIdget_dag_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}`

<h3 id="get-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dag_run_id": "string",
  "dag_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "queued_at": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "run_type": "backfill",
  "state": "queued",
  "triggered_by": "cli",
  "triggering_user_name": "string",
  "conf": {},
  "note": "string",
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "bundle_version": "string",
  "dag_display_name": "string",
  "partition_key": "string",
  "partition_date": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGRunResponse](#schemadagrunresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Dag Run

<a id="opIddelete_dag_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}`

Delete a Dag Run entry.

<h3 id="delete-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="delete-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Dag Run

<a id="opIdpatch_dag_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "state": "queued",
    "note": "string"
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}`

Modify a Dag Run.

> Body parameter

```json
{
  "state": "queued",
  "note": "string"
}
```

<h3 id="patch-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|update_mask|query|[string] \| null|false|none|
|body|body|[DAGRunPatchBody](#schemadagrunpatchbody)|true|none|
|» state|body|[DagRunMutableStates](#schemadagrunmutablestates) \| null|false|none|
|» » *anyOf*|body|[DagRunMutableStates](#schemadagrunmutablestates)|false|Dag Run states from which the run may be mutated (patched, deleted).|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|queued|
|» » *anyOf*|success|
|» » *anyOf*|failed|

> Example responses

> 200 Response

```json
{
  "dag_run_id": "string",
  "dag_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "queued_at": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "run_type": "backfill",
  "state": "queued",
  "triggered_by": "cli",
  "triggering_user_name": "string",
  "conf": {},
  "note": "string",
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "bundle_version": "string",
  "dag_display_name": "string",
  "partition_key": "string",
  "partition_date": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="patch-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGRunResponse](#schemadagrunresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Runs

<a id="opIdget_dag_runs"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns`

Get all Dag Runs.

This endpoint allows specifying `~` as the dag_id to retrieve Dag Runs for all Dags.

Supports two pagination modes:

**Offset (default):** use `limit` and `offset` query parameters. Returns `total_entries`.

**Cursor:** pass `cursor` (empty string for the first page, then `next_cursor` from the response).
When `cursor` is provided, `offset` is ignored and `total_entries` is capped at
`total_entries_limit` (a value equal to that limit means at least that many runs match).
``next_cursor`` is ``null`` when there are no more pages; ``previous_cursor`` is ``null``
on the first page.

<h3 id="get-dag-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|partition_date_gte|query|string(date) \| null|false|Inclusive lower bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. Runs from the start of this day onwards match.|
|partition_date_lte|query|string(date) \| null|false|Inclusive upper bound of the partition_date window, interpreted as a local calendar day in the Dag's timetable timezone. The whole day is included: runs up to the end of this day match.|
|cursor|query|string \| null|false|Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|run_after_gte|query|string(date-time) \| null|false|none|
|run_after_gt|query|string(date-time) \| null|false|none|
|run_after_lte|query|string(date-time) \| null|false|none|
|run_after_lt|query|string(date-time) \| null|false|none|
|logical_date_gte|query|string(date-time) \| null|false|none|
|logical_date_gt|query|string(date-time) \| null|false|none|
|logical_date_lte|query|string(date-time) \| null|false|none|
|logical_date_lt|query|string(date-time) \| null|false|none|
|start_date_gte|query|string(date-time) \| null|false|none|
|start_date_gt|query|string(date-time) \| null|false|none|
|start_date_lte|query|string(date-time) \| null|false|none|
|start_date_lt|query|string(date-time) \| null|false|none|
|end_date_gte|query|string(date-time) \| null|false|none|
|end_date_gt|query|string(date-time) \| null|false|none|
|end_date_lte|query|string(date-time) \| null|false|none|
|end_date_lt|query|string(date-time) \| null|false|none|
|duration_gte|query|number \| null|false|none|
|duration_gt|query|number \| null|false|none|
|duration_lte|query|number \| null|false|none|
|duration_lt|query|number \| null|false|none|
|updated_at_gte|query|string(date-time) \| null|false|none|
|updated_at_gt|query|string(date-time) \| null|false|none|
|updated_at_lte|query|string(date-time) \| null|false|none|
|updated_at_lt|query|string(date-time) \| null|false|none|
|conf_contains|query|string|false|none|
|run_type|query|[string]|false|none|
|state|query|[string]|false|none|
|dag_version|query|[integer]|false|none|
|bundle_version|query|string \| null|false|none|
|teams|query|[string]|false|none|
|tags|query|[string]|false|none|
|tags_match_mode|query|string \| null|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, dag_id, run_id, logical_date, partition_date, run_after, start_date, end_date, updated_at, conf, duration, dag_run_id`|
|run_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|run_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|triggering_user_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `triggering_user_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|triggering_user_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|dag_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|partition_key_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Here `\|` is matched literally, not as OR. Slower than `partition_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|partition_key_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. Here `\|` is matched literally, not as OR. See "Filtering with pattern parameters".|
|consuming_asset_pattern|query|string \| null|false|Case-insensitive substring match against the consuming asset name or URI. Unlike the wildcard `*_pattern` parameters, `%` and `_` are matched literally, `\|` is not an OR separator, and `~` does not match everything.|

> Example responses

> 200 Response

```json
{
  "dag_runs": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "queued_at": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "data_interval_start": "1970-01-01T00:00:00Z",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "last_scheduling_decision": "1970-01-01T00:00:00Z",
      "run_type": "backfill",
      "state": "queued",
      "triggered_by": "cli",
      "triggering_user_name": "string",
      "conf": {},
      "note": "string",
      "dag_versions": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "version_number": 0,
          "dag_id": "string",
          "bundle_name": "string",
          "bundle_version": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "dag_display_name": "string",
          "bundle_url": "string"
        }
      ],
      "bundle_version": "string",
      "dag_display_name": "string",
      "partition_key": "string",
      "partition_date": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGRunCollectionResponse](#schemadagruncollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Trigger Dag Run

<a id="opIdtrigger_dag_run"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/v2/dags/{dag_id}/dagRuns' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dag_run_id": "string",
    "data_interval_start": "1970-01-01T00:00:00Z",
    "data_interval_end": "1970-01-01T00:00:00Z",
    "logical_date": "1970-01-01T00:00:00Z",
    "run_after": "1970-01-01T00:00:00Z",
    "conf": {},
    "note": "string",
    "partition_key": "string",
    "bundle_version": "string",
    "drain_dag": false
  }'
```

`POST /api/v2/dags/{dag_id}/dagRuns`

Trigger a Dag.

> Body parameter

```json
{
  "dag_run_id": "string",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "conf": {},
  "note": "string",
  "partition_key": "string",
  "bundle_version": "string",
  "drain_dag": false
}
```

<h3 id="trigger-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|object|true|none|
|body|body|[TriggerDAGRunPostBody](#schematriggerdagrunpostbody)|true|none|
|» dag_run_id|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» data_interval_start|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» data_interval_end|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date|body|string(date-time) \| null|true|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» conf|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» partition_key|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» bundle_version|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» drain_dag|body|boolean|false|Drain the Dag together with this run. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag.|

> Example responses

> 200 Response

```json
{
  "dag_run_id": "string",
  "dag_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "queued_at": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "run_type": "backfill",
  "state": "queued",
  "triggered_by": "cli",
  "triggering_user_name": "string",
  "conf": {},
  "note": "string",
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "bundle_version": "string",
  "dag_display_name": "string",
  "partition_key": "string",
  "partition_date": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="trigger-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGRunResponse](#schemadagrunresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Bulk Dag Runs

<a id="opIdbulk_dag_runs"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "action": "create",
        "entities": [
          {
            "dag_run_id": "string",
            "dag_id": "string",
            "state": "queued",
            "note": "string"
          }
        ],
        "action_on_existence": "fail"
      }
    ]
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns`

Bulk update or delete Dag Runs.

> Body parameter

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "dag_run_id": "string",
          "dag_id": "string",
          "state": "queued",
          "note": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

<h3 id="bulk-dag-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|body|body|[BulkBody_BulkDAGRunBody_](#schemabulkbody_bulkdagrunbody_)|true|none|
|» actions|body|[[BulkCreateAction_BulkDAGRunBody_](#schemabulkcreateaction_bulkdagrunbody_) \| [BulkUpdateAction_BulkDAGRunBody_](#schemabulkupdateaction_bulkdagrunbody_) \| [BulkDeleteAction_BulkDAGRunBody_](#schemabulkdeleteaction_bulkdagrunbody_)]|true|none|
|» » *oneOf*|body|[BulkCreateAction_BulkDAGRunBody_](#schemabulkcreateaction_bulkdagrunbody_)|false|none|
|» » *oneOf*|body|[BulkUpdateAction_BulkDAGRunBody_](#schemabulkupdateaction_bulkdagrunbody_)|false|none|
|» » *oneOf*|body|[BulkDeleteAction_BulkDAGRunBody_](#schemabulkdeleteaction_bulkdagrunbody_)|false|none|

> Example responses

> 200 Response

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="bulk-dag-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BulkResponse](#schemabulkresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Upstream Asset Events

<a id="opIdget_upstream_asset_events"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/upstreamAssetEvents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/upstreamAssetEvents`

If dag run is asset-triggered, return the asset events that triggered it.

<h3 id="get-upstream-asset-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "asset_events": [
    {
      "id": 0,
      "asset_id": 0,
      "uri": "string",
      "name": "string",
      "group": "string",
      "extra": {
        "property1": null,
        "property2": null
      },
      "source_task_id": "string",
      "source_dag_id": "string",
      "source_run_id": "string",
      "source_map_index": 0,
      "source_task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_dagruns": [
        {
          "run_id": "string",
          "dag_id": "string",
          "logical_date": "1970-01-01T00:00:00Z",
          "start_date": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "state": "string",
          "data_interval_start": "1970-01-01T00:00:00Z",
          "data_interval_end": "1970-01-01T00:00:00Z",
          "partition_key": "string",
          "triggering": true
        }
      ],
      "timestamp": "1970-01-01T00:00:00Z",
      "partition_key": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-upstream-asset-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetEventCollectionResponse](#schemaasseteventcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Clear Dag Run

<a id="opIdclear_dag_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/clear \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dry_run": true,
    "only_failed": false,
    "only_new": false,
    "run_on_latest_version": true,
    "note": "string"
  }'
```

`POST /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/clear`

> Body parameter

```json
{
  "dry_run": true,
  "only_failed": false,
  "only_new": false,
  "run_on_latest_version": true,
  "note": "string"
}
```

<h3 id="clear-dag-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|body|body|[DAGRunClearBody](#schemadagrunclearbody)|true|none|
|» dry_run|body|boolean|false|none|
|» only_failed|body|boolean|false|none|
|» only_new|body|boolean|false|Only queue newly added tasks in the latest Dag version without clearing existing tasks.|
|» run_on_latest_version|body|boolean \| null|false|(Experimental) Run on the latest bundle version of the Dag after clearing. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False``.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="clear-dag-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="clear-dag-run-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ClearTaskInstanceCollectionResponse](#schemacleartaskinstancecollectionresponse)|false|none|Response for clear dag run dry run, which may contain new tasks without full TaskInstance data.|
|*anyOf*|[DAGRunResponse](#schemadagrunresponse)|false|none|Dag Run serializer for responses.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Experimental: Wait for a dag run to complete, and return task results if requested.

<a id="opIdwait_dag_run_until_finished"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/v2/dags/string/dagRuns/string/wait?interval=0.1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/wait`

🚧 This is an experimental endpoint and may change or be removed without notice.Successful response are streamed as newline-delimited JSON (NDJSON). Each line is a JSON object representing the Dag run state.

<h3 id="experimental-wait-for-a-dag-run-to-complete-and-return-task-results-if-requested-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|interval|query|number|true|Seconds to wait between dag run state checks|
|result|query|[string] \| null|false|Collect result XCom from task. Can be set multiple times. If unset, return value of the return task as specified in the dag (in present) is returned by default.|

> Example responses

> 200 Response

```json
null
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="experimental-wait-for-a-dag-run-to-complete-and-return-task-results-if-requested-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get List Dag Runs Batch

<a id="opIdget_list_dag_runs_batch"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/~/dagRuns/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "order_by": "string",
    "page_offset": 0,
    "page_limit": 100,
    "dag_ids": [
      "string"
    ],
    "states": [
      "queued"
    ],
    "run_after_gte": "1970-01-01T00:00:00Z",
    "run_after_gt": "1970-01-01T00:00:00Z",
    "run_after_lte": "1970-01-01T00:00:00Z",
    "run_after_lt": "1970-01-01T00:00:00Z",
    "logical_date_gte": "1970-01-01T00:00:00Z",
    "logical_date_gt": "1970-01-01T00:00:00Z",
    "logical_date_lte": "1970-01-01T00:00:00Z",
    "logical_date_lt": "1970-01-01T00:00:00Z",
    "start_date_gte": "1970-01-01T00:00:00Z",
    "start_date_gt": "1970-01-01T00:00:00Z",
    "start_date_lte": "1970-01-01T00:00:00Z",
    "start_date_lt": "1970-01-01T00:00:00Z",
    "end_date_gte": "1970-01-01T00:00:00Z",
    "end_date_gt": "1970-01-01T00:00:00Z",
    "end_date_lte": "1970-01-01T00:00:00Z",
    "end_date_lt": "1970-01-01T00:00:00Z",
    "duration_gte": 0,
    "duration_gt": 0,
    "duration_lte": 0,
    "duration_lt": 0,
    "conf_contains": "string"
  }'
```

`POST /api/v2/dags/{dag_id}/dagRuns/list`

Get a list of Dag Runs.

> Body parameter

```json
{
  "order_by": "string",
  "page_offset": 0,
  "page_limit": 100,
  "dag_ids": [
    "string"
  ],
  "states": [
    "queued"
  ],
  "run_after_gte": "1970-01-01T00:00:00Z",
  "run_after_gt": "1970-01-01T00:00:00Z",
  "run_after_lte": "1970-01-01T00:00:00Z",
  "run_after_lt": "1970-01-01T00:00:00Z",
  "logical_date_gte": "1970-01-01T00:00:00Z",
  "logical_date_gt": "1970-01-01T00:00:00Z",
  "logical_date_lte": "1970-01-01T00:00:00Z",
  "logical_date_lt": "1970-01-01T00:00:00Z",
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_gt": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "start_date_lt": "1970-01-01T00:00:00Z",
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_gt": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "end_date_lt": "1970-01-01T00:00:00Z",
  "duration_gte": 0,
  "duration_gt": 0,
  "duration_lte": 0,
  "duration_lt": 0,
  "conf_contains": "string"
}
```

<h3 id="get-list-dag-runs-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|body|body|[DAGRunsBatchBody](#schemadagrunsbatchbody)|true|none|
|» order_by|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» page_offset|body|integer|false|none|
|» page_limit|body|integer|false|none|
|» dag_ids|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» states|body|[[DagRunState](#schemadagrunstate) \| null] \| null|false|none|
|» » *anyOf*|body|[[DagRunState](#schemadagrunstate) \| null]|false|none|
|» *anyOf*|body|[DagRunState](#schemadagrunstate)|false|All possible states that a DagRun can be in.<br><br>These are "shared" with TaskInstanceState in some parts of the code,<br>so please ensure that their values always match the ones with the<br>same name in TaskInstanceState.|
|» *anyOf*|body|null|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_gte|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_gt|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_lte|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_lt|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» conf_contains|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» *anyOf*|queued|
|» *anyOf*|running|
|» *anyOf*|success|
|» *anyOf*|failed|

> Example responses

> 200 Response

```json
{
  "dag_runs": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "queued_at": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "data_interval_start": "1970-01-01T00:00:00Z",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "last_scheduling_decision": "1970-01-01T00:00:00Z",
      "run_type": "backfill",
      "state": "queued",
      "triggered_by": "cli",
      "triggering_user_name": "string",
      "conf": {},
      "note": "string",
      "dag_versions": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "version_number": 0,
          "dag_id": "string",
          "bundle_name": "string",
          "bundle_version": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "dag_display_name": "string",
          "bundle_url": "string"
        }
      ],
      "bundle_version": "string",
      "dag_display_name": "string",
      "partition_key": "string",
      "partition_date": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-list-dag-runs-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGRunCollectionResponse](#schemadagruncollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Clear Dag Runs

<a id="opIdclear_dag_runs"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/clearDagRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partition_key": "string",
    "partition_date_start": "1970-01-01T00:00:00Z",
    "partition_date_end": "1970-01-01T00:00:00Z",
    "dry_run": true,
    "only_failed": false,
    "only_new": false,
    "run_on_latest_version": true,
    "note": "string",
    "dag_runs": [
      {
        "dag_run_id": "string",
        "dag_id": "string",
        "state": "queued",
        "note": "string"
      }
    ]
  }'
```

`POST /api/v2/dags/{dag_id}/clearDagRuns`

Clear multiple Dag Runs in a single request.

> Body parameter

```json
{
  "partition_key": "string",
  "partition_date_start": "1970-01-01T00:00:00Z",
  "partition_date_end": "1970-01-01T00:00:00Z",
  "dry_run": true,
  "only_failed": false,
  "only_new": false,
  "run_on_latest_version": true,
  "note": "string",
  "dag_runs": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "state": "queued",
      "note": "string"
    }
  ]
}
```

<h3 id="clear-dag-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|body|body|[BulkDAGRunClearBody](#schemabulkdagrunclearbody)|true|none|
|» partition_key|body|string \| null|false|Select runs by exact partition key match. Mutually exclusive with the other partition selectors.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» partition_date_start|body|string(date-time) \| null|false|Inclusive start of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» partition_date_end|body|string(date-time) \| null|false|Inclusive end of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» dry_run|body|boolean|false|none|
|» only_failed|body|boolean|false|none|
|» only_new|body|boolean|false|Only queue newly added tasks in the latest Dag version without clearing existing tasks.|
|» run_on_latest_version|body|boolean \| null|false|(Experimental) Run on the latest bundle version of the Dag after clearing. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False``.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» dag_runs|body|[[BulkDAGRunBody](#schemabulkdagrunbody)]|false|none|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="clear-dag-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="clear-dag-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[ClearTaskInstanceCollectionResponse](#schemacleartaskinstancecollectionresponse)|false|none|Response for clear dag run dry run, which may contain new tasks without full TaskInstance data.|
|*anyOf*|[DAGRunCollectionResponse](#schemadagruncollectionresponse)|false|none|Dag Run collection response supporting both offset and cursor pagination.<br><br>A single flat model is used instead of a discriminated union<br>(``Annotated[Offset \| Cursor, Field(discriminator=...)]``) because<br>the OpenAPI ``oneOf`` + ``discriminator`` construct is not handled<br>correctly by ``@hey-api/openapi-ts`` / ``@7nohe/openapi-react-query-codegen``:<br>return types degrade to ``unknown`` in JSDoc and can produce<br>incorrect TypeScript types (see hey-api/openapi-ts#1613, #3270).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Clear Dag Run Partitions

<a id="opIdclear_dag_run_partitions"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/clearPartitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "partition_key": "string",
    "partition_date_start": "1970-01-01T00:00:00Z",
    "partition_date_end": "1970-01-01T00:00:00Z",
    "run_id": "string",
    "clear_task_instances": false,
    "dry_run": true
  }'
```

`POST /api/v2/dags/{dag_id}/clearPartitions`

Reset partition_key and partition_date fields on matching Dag Runs.

> Body parameter

```json
{
  "partition_key": "string",
  "partition_date_start": "1970-01-01T00:00:00Z",
  "partition_date_end": "1970-01-01T00:00:00Z",
  "run_id": "string",
  "clear_task_instances": false,
  "dry_run": true
}
```

<h3 id="clear-dag-run-partitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|body|body|[ClearPartitionsBody](#schemaclearpartitionsbody)|true|none|
|» partition_key|body|string \| null|false|Select runs by exact partition key match. Mutually exclusive with the other partition selectors.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» partition_date_start|body|string(date-time) \| null|false|Inclusive start of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» partition_date_end|body|string(date-time) \| null|false|Inclusive end of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_id|body|string \| null|false|Select runs by exact run_id. Mutually exclusive with ``partition_key`` and partition date window.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» clear_task_instances|body|boolean|false|Also clear task instances on the matched runs.|
|» dry_run|body|boolean|false|If True, compute counts without writing any changes.|

> Example responses

> 200 Response

```json
{
  "dag_runs_cleared": 0,
  "task_instances_cleared": 0,
  "dry_run": true
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="clear-dag-run-partitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ClearPartitionsResponse](#schemaclearpartitionsresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dagsource">DagSource</h1>

## Get Dag Source

<a id="opIdget_dag_source"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagSources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagSources/{dag_id}`

Get source code using file token.

<h3 id="get-dag-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|version_number|query|integer \| null|false|none|
|accept|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accept|application/json|
|accept|text/plain|
|accept|*/*|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "dag_id": "string",
  "version_number": 0,
  "dag_display_name": "string",
  "language": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 406 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGSourceResponse](#schemadagsourceresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|406|Not Acceptable|Not Acceptable|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dag-bundle">Dag Bundle</h1>

## Get Dag Bundles

<a id="opIdget_dag_bundles"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagBundles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagBundles`

List the Dag bundles Airflow knows about.

Reports the version of each bundle Airflow currently holds and when a Dag processor last
refreshed it, so whoever deployed the code can tell whether it has been picked up yet.

A bundle is visible to a user who can read at least one Dag recorded against it. A bundle
holding no registered Dag at all has nothing to authorize against, so it is listed only for a
user holding the admin-by-default ``AccessView.IMPORT_ERRORS_ALL`` for that bundle's team --
the same view, scoped the same way, that governs import errors for a file that never
registered a Dag.

<h3 id="get-dag-bundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name, version, last_refreshed, active`|

> Example responses

> 200 Response

```json
{
  "dag_bundles": [
    {
      "name": "string",
      "active": true,
      "version": "string",
      "last_refreshed": "1970-01-01T00:00:00Z",
      "bundle_url": "string",
      "team_name": "string",
      "import_error_count": 0
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-bundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DagBundleCollectionResponse](#schemadagbundlecollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Bundle

<a id="opIdget_dag_bundle"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagBundles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagBundles/{bundle_name}`

Get a Dag bundle.

<h3 id="get-dag-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundle_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "active": true,
  "version": "string",
  "last_refreshed": "1970-01-01T00:00:00Z",
  "bundle_url": "string",
  "team_name": "string",
  "import_error_count": 0,
  "dag_count": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DagBundleDetailResponse](#schemadagbundledetailresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Bundle Files

<a id="opIdget_dag_bundle_files"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagBundles/string/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagBundles/{bundle_name}/files`

List the files in a Dag bundle, ordered by path.

A file is listed when the caller can read at least one Dag it defines. A file that recorded an
import error without registering any Dag is listed too, on the same admin-by-default terms as
``GET /importErrors`` -- a file that fails before defining a Dag has no Dag to authorize on,
and it is the case this page most needs to show.

``dag_count`` counts live Dags only. Dag rows are never deleted: a file that fails to import
has every Dag in it marked stale, and so does a file dropped from the bundle. A file therefore
stays listed on the strength of a live Dag *or* an import error, so a file that has just broken
does not vanish from the page someone opened to find out why, while a file deleted long ago
drops out instead of lingering forever.

Parse times come from the Dags in the file rather than the file itself, which is the only
record Airflow keeps: a file whose every Dag was removed keeps no parse time of its own.

<h3 id="get-dag-bundle-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundle_name|path|string|true|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "dag_bundle_files": [
    {
      "relative_fileloc": "string",
      "dag_count": 0,
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_parse_duration": 0,
      "import_error_count": 0
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-bundle-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DagBundleFileCollectionResponse](#schemadagbundlefilecollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dagstats">DagStats</h1>

## Get Dag Stats

<a id="opIdget_dag_stats"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagStats`

Get Dag statistics.

<h3 id="get-dag-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_ids|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "dags": [
    {
      "dag_id": "string",
      "dag_display_name": "string",
      "stats": [
        {
          "state": "queued",
          "count": 0
        }
      ]
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DagStatsCollectionResponse](#schemadagstatscollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-config">Config</h1>

## Get Config

<a id="opIdget_config"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/config`

<h3 id="get-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|query|string \| null|false|none|
|accept|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accept|application/json|
|accept|text/plain|
|accept|*/*|

> Example responses

> 200 Response

```json
{
  "sections": [
    {
      "name": "string",
      "options": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 406 Response

```json
{
  "detail": "string"
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

<h3 id="get-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Config](#schemaconfig)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|406|Not Acceptable|Not Acceptable|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Config Value

<a id="opIdget_config_value"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/config/section/string/option/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/config/section/{section}/option/{option}`

<h3 id="get-config-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|none|
|option|path|string|true|none|
|accept|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accept|application/json|
|accept|text/plain|
|accept|*/*|

> Example responses

> 200 Response

```json
{
  "sections": [
    {
      "name": "string",
      "options": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 406 Response

```json
{
  "detail": "string"
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

<h3 id="get-config-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[Config](#schemaconfig)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|406|Not Acceptable|Not Acceptable|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dagwarning">DagWarning</h1>

## List Dag Warnings

<a id="opIdlist_dag_warnings"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagWarnings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagWarnings`

Get a list of Dag warnings.

<h3 id="list-dag-warnings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|query|string \| null|false|none|
|warning_type|query|[DagWarningType](#schemadagwarningtype) \| string \| null|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, warning_type, message, timestamp`|

> Example responses

> 200 Response

```json
{
  "dag_warnings": [
    {
      "dag_id": "string",
      "warning_type": "asset conflict",
      "message": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="list-dag-warnings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGWarningCollectionResponse](#schemadagwarningcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dag">DAG</h1>

## Get Dags

<a id="opIdget_dags"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags`

Get all Dags.

<h3 id="get-dags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_scheduled|query|boolean \| null|false|Filter Dags by whether their timetable can create scheduled runs.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|tags|query|[string]|false|none|
|tags_match_mode|query|string \| null|false|none|
|owners|query|[string]|false|none|
|dag_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|dag_display_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_display_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|exclude_stale|query|boolean|false|none|
|paused|query|boolean \| null|false|none|
|has_import_errors|query|boolean \| null|false|Filter Dags by having import errors. Only Dags that have been successfully loaded before will be returned.|
|last_dag_run_state|query|[DagRunState](#schemadagrunstate) \| null|false|none|
|bundle_name|query|string \| null|false|none|
|bundle_version|query|string \| null|false|none|
|has_asset_schedule|query|boolean \| null|false|Filter Dags with asset-based scheduling|
|asset_dependency|query|string \| null|false|Filter Dags by asset dependency (name or URI)|
|dag_run_start_date_gte|query|string(date-time) \| null|false|none|
|dag_run_start_date_gt|query|string(date-time) \| null|false|none|
|dag_run_start_date_lte|query|string(date-time) \| null|false|none|
|dag_run_start_date_lt|query|string(date-time) \| null|false|none|
|dag_run_end_date_gte|query|string(date-time) \| null|false|none|
|dag_run_end_date_gt|query|string(date-time) \| null|false|none|
|dag_run_end_date_lte|query|string(date-time) \| null|false|none|
|dag_run_end_date_lt|query|string(date-time) \| null|false|none|
|dag_run_state|query|[string]|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `dag_id, dag_display_name, next_dagrun, last_run_state, last_run_start_date`|
|is_favorite|query|boolean \| null|false|none|
|timetable_type|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "dags": [
    {
      "dag_id": "string",
      "dag_display_name": "string",
      "is_paused": true,
      "scheduling_state": "active",
      "is_stale": true,
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_parse_duration": 0,
      "last_expired": "1970-01-01T00:00:00Z",
      "bundle_name": "string",
      "bundle_version": "string",
      "relative_fileloc": "string",
      "fileloc": "string",
      "description": "string",
      "timetable_summary": "string",
      "timetable_description": "string",
      "timetable_partitioned": true,
      "timetable_periodic": true,
      "tags": [
        {
          "name": "string",
          "dag_id": "string",
          "dag_display_name": "string"
        }
      ],
      "max_active_tasks": 0,
      "max_active_runs": 0,
      "max_consecutive_failed_dag_runs": 0,
      "has_task_concurrency_limits": true,
      "has_import_errors": true,
      "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
      "next_dagrun_run_after": "1970-01-01T00:00:00Z",
      "allowed_run_types": [
        "backfill"
      ],
      "owners": [
        "string"
      ],
      "is_backfillable": true,
      "file_token": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-dags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGCollectionResponse](#schemadagcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Dags

<a id="opIdpatch_dags"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "is_paused": true,
    "scheduling_state": "active"
  }'
```

`PATCH /api/v2/dags`

Patch multiple Dags.

If neither `dag_id_pattern` nor `dag_id_prefix_pattern` is provided, no Dags will be
matched regardless of other filters. To match all Dags, pass a wildcard value such as
`~` or `%` for `dag_id_pattern`.

> Body parameter

```json
{
  "is_paused": true,
  "scheduling_state": "active"
}
```

<h3 id="patch-dags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|update_mask|query|[string] \| null|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|tags|query|[string]|false|none|
|tags_match_mode|query|string \| null|false|none|
|owners|query|[string]|false|none|
|dag_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|exclude_stale|query|boolean|false|none|
|paused|query|boolean \| null|false|none|
|body|body|[DAGPatchBody](#schemadagpatchbody)|true|none|
|» is_paused|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» scheduling_state|body|[DagSchedulingState](#schemadagschedulingstate) \| null|false|none|
|» » *anyOf*|body|[DagSchedulingState](#schemadagschedulingstate)|false|States controlling whether a Dag can create and schedule work.|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|active|
|» » *anyOf*|draining|
|» » *anyOf*|paused|

> Example responses

> 200 Response

```json
{
  "dags": [
    {
      "dag_id": "string",
      "dag_display_name": "string",
      "is_paused": true,
      "scheduling_state": "active",
      "is_stale": true,
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_parse_duration": 0,
      "last_expired": "1970-01-01T00:00:00Z",
      "bundle_name": "string",
      "bundle_version": "string",
      "relative_fileloc": "string",
      "fileloc": "string",
      "description": "string",
      "timetable_summary": "string",
      "timetable_description": "string",
      "timetable_partitioned": true,
      "timetable_periodic": true,
      "tags": [
        {
          "name": "string",
          "dag_id": "string",
          "dag_display_name": "string"
        }
      ],
      "max_active_tasks": 0,
      "max_active_runs": 0,
      "max_consecutive_failed_dag_runs": 0,
      "has_task_concurrency_limits": true,
      "has_import_errors": true,
      "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
      "next_dagrun_run_after": "1970-01-01T00:00:00Z",
      "allowed_run_types": [
        "backfill"
      ],
      "owners": [
        "string"
      ],
      "is_backfillable": true,
      "file_token": "string"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="patch-dags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGCollectionResponse](#schemadagcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag

<a id="opIdget_dag"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}`

Get basic information about a Dag.

<h3 id="get-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_display_name": "string",
  "is_paused": true,
  "scheduling_state": "active",
  "is_stale": true,
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_parse_duration": 0,
  "last_expired": "1970-01-01T00:00:00Z",
  "bundle_name": "string",
  "bundle_version": "string",
  "relative_fileloc": "string",
  "fileloc": "string",
  "description": "string",
  "timetable_summary": "string",
  "timetable_description": "string",
  "timetable_partitioned": true,
  "timetable_periodic": true,
  "tags": [
    {
      "name": "string",
      "dag_id": "string",
      "dag_display_name": "string"
    }
  ],
  "max_active_tasks": 0,
  "max_active_runs": 0,
  "max_consecutive_failed_dag_runs": 0,
  "has_task_concurrency_limits": true,
  "has_import_errors": true,
  "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_run_after": "1970-01-01T00:00:00Z",
  "allowed_run_types": [
    "backfill"
  ],
  "owners": [
    "string"
  ],
  "is_backfillable": true,
  "file_token": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": "string"
}
```

<h3 id="get-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGResponse](#schemadagresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Dag

<a id="opIddelete_dag"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}`

Delete the specific Dag.

<h3 id="delete-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
}
```

> 422 Response

```json
{
  "detail": "string"
}
```

<h3 id="delete-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Unprocessable Entity|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Dag

<a id="opIdpatch_dag"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "is_paused": true,
    "scheduling_state": "active"
  }'
```

`PATCH /api/v2/dags/{dag_id}`

Patch the specific Dag.

> Body parameter

```json
{
  "is_paused": true,
  "scheduling_state": "active"
}
```

<h3 id="patch-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|update_mask|query|[string] \| null|false|none|
|body|body|[DAGPatchBody](#schemadagpatchbody)|true|none|
|» is_paused|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» scheduling_state|body|[DagSchedulingState](#schemadagschedulingstate) \| null|false|none|
|» » *anyOf*|body|[DagSchedulingState](#schemadagschedulingstate)|false|States controlling whether a Dag can create and schedule work.|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|active|
|» » *anyOf*|draining|
|» » *anyOf*|paused|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_display_name": "string",
  "is_paused": true,
  "scheduling_state": "active",
  "is_stale": true,
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_parse_duration": 0,
  "last_expired": "1970-01-01T00:00:00Z",
  "bundle_name": "string",
  "bundle_version": "string",
  "relative_fileloc": "string",
  "fileloc": "string",
  "description": "string",
  "timetable_summary": "string",
  "timetable_description": "string",
  "timetable_partitioned": true,
  "timetable_periodic": true,
  "tags": [
    {
      "name": "string",
      "dag_id": "string",
      "dag_display_name": "string"
    }
  ],
  "max_active_tasks": 0,
  "max_active_runs": 0,
  "max_consecutive_failed_dag_runs": 0,
  "has_task_concurrency_limits": true,
  "has_import_errors": true,
  "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_run_after": "1970-01-01T00:00:00Z",
  "allowed_run_types": [
    "backfill"
  ],
  "owners": [
    "string"
  ],
  "is_backfillable": true,
  "file_token": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="patch-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGResponse](#schemadagresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Details

<a id="opIdget_dag_details"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/details`

Get details of Dag.

<h3 id="get-dag-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dag_id": "string",
  "dag_display_name": "string",
  "is_paused": true,
  "scheduling_state": "active",
  "is_stale": true,
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_parse_duration": 0,
  "last_expired": "1970-01-01T00:00:00Z",
  "bundle_name": "string",
  "bundle_version": "string",
  "relative_fileloc": "string",
  "fileloc": "string",
  "description": "string",
  "timetable_summary": "string",
  "timetable_description": "string",
  "timetable_partitioned": true,
  "timetable_periodic": true,
  "tags": [
    {
      "name": "string",
      "dag_id": "string",
      "dag_display_name": "string"
    }
  ],
  "max_active_tasks": 0,
  "max_active_runs": 0,
  "max_consecutive_failed_dag_runs": 0,
  "has_task_concurrency_limits": true,
  "has_import_errors": true,
  "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_run_after": "1970-01-01T00:00:00Z",
  "allowed_run_types": [
    "backfill"
  ],
  "owners": [
    "string"
  ],
  "catchup": true,
  "dag_run_timeout": "string",
  "asset_expression": {
    "asset": {
      "uri": "string",
      "name": "string",
      "group": "string",
      "id": 0,
      "hidden": false
    }
  },
  "doc_md": "string",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "is_paused_upon_creation": true,
  "params": {},
  "render_template_as_native_obj": true,
  "template_search_path": [
    "string"
  ],
  "timezone": "string",
  "last_parsed": "1970-01-01T00:00:00Z",
  "default_args": {},
  "rerun_with_latest_version": true,
  "owner_links": {
    "property1": "string",
    "property2": "string"
  },
  "is_favorite": false,
  "active_runs_count": 0,
  "team_name": "string",
  "latest_dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "is_backfillable": true,
  "file_token": "string",
  "concurrency": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGDetailsResponse](#schemadagdetailsresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Bulk Dags

<a id="opIdbulk_dags"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/bulk \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "action": "create",
        "entities": [
          {
            "is_paused": true,
            "scheduling_state": "active",
            "dag_id": "string"
          }
        ],
        "action_on_existence": "fail"
      }
    ]
  }'
```

`PATCH /api/v2/dags/bulk`

Bulk pause, resume, or drain Dags by id.

> Body parameter

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "is_paused": true,
          "scheduling_state": "active",
          "dag_id": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

<h3 id="bulk-dags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkBody_BulkDAGBody_](#schemabulkbody_bulkdagbody_)|true|none|
|» actions|body|[[BulkCreateAction_BulkDAGBody_](#schemabulkcreateaction_bulkdagbody_) \| [BulkUpdateAction_BulkDAGBody_](#schemabulkupdateaction_bulkdagbody_) \| [BulkDeleteAction_BulkDAGBody_](#schemabulkdeleteaction_bulkdagbody_)]|true|none|
|» » *oneOf*|body|[BulkCreateAction_BulkDAGBody_](#schemabulkcreateaction_bulkdagbody_)|false|none|
|» » *oneOf*|body|[BulkUpdateAction_BulkDAGBody_](#schemabulkupdateaction_bulkdagbody_)|false|none|
|» » *oneOf*|body|[BulkDeleteAction_BulkDAGBody_](#schemabulkdeleteaction_bulkdagbody_)|false|none|

> Example responses

> 200 Response

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="bulk-dags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BulkResponse](#schemabulkresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Favorite Dag

<a id="opIdfavorite_dag"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/favorite \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v2/dags/{dag_id}/favorite`

Mark the Dag as favorite.

<h3 id="favorite-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="favorite-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Unfavorite Dag

<a id="opIdunfavorite_dag"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/unfavorite \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /api/v2/dags/{dag_id}/unfavorite`

Unmark the Dag as favorite.

<h3 id="unfavorite-dag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="unfavorite-dag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Tags

<a id="opIdget_dag_tags"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dagTags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dagTags`

Get all Dag tags.

<h3 id="get-dag-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `name`|
|tag_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `tag_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|tag_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|

> Example responses

> 200 Response

```json
{
  "tags": [
    "string"
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGTagCollectionResponse](#schemadagtagcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-event-log">Event Log</h1>

## Get Event Log

<a id="opIdget_event_log"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/eventLogs/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/eventLogs/{event_log_id}`

<h3 id="get-event-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_log_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "event_log_id": 0,
  "when": "1970-01-01T00:00:00Z",
  "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dag_id": "string",
  "task_id": "string",
  "run_id": "string",
  "map_index": 0,
  "try_number": 0,
  "event": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "owner": "string",
  "owner_display_name": "string",
  "extra": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-event-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventLogResponse](#schemaeventlogresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Event Logs

<a id="opIdget_event_logs"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/eventLogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/eventLogs`

Get all Event Logs.

<h3 id="get-event-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dttm, dag_id, task_id, run_id, event, logical_date, owner, owner_display_name, extra, when, event_log_id`|
|dag_id|query|string \| null|false|none|
|task_id|query|string \| null|false|none|
|task_instance_id|query|string(uuid) \| null|false|none|
|run_id|query|string \| null|false|none|
|map_index|query|integer \| null|false|none|
|try_number|query|integer \| null|false|none|
|owner|query|string \| null|false|none|
|event|query|string \| null|false|none|
|excluded_events|query|[string] \| null|false|none|
|included_events|query|[string] \| null|false|none|
|before|query|string(date-time) \| null|false|none|
|after|query|string(date-time) \| null|false|none|
|dag_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|task_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|run_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|owner_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|owner_display_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `owner_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|event_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `event_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|task_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|run_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|owner_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|owner_display_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|event_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|teams|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "event_logs": [
    {
      "event_log_id": 0,
      "when": "1970-01-01T00:00:00Z",
      "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dag_id": "string",
      "task_id": "string",
      "run_id": "string",
      "map_index": 0,
      "try_number": 0,
      "event": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "owner": "string",
      "owner_display_name": "string",
      "extra": "string",
      "dag_display_name": "string",
      "task_display_name": "string",
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-event-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventLogCollectionResponse](#schemaeventlogcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-extra-links">Extra Links</h1>

## Get Extra Links

<a id="opIdget_extra_links"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links`

Get extra links for task instance.

<h3 id="get-extra-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|try_number|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "extra_links": {
    "property1": "string",
    "property2": "string"
  },
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-extra-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExtraLinkCollectionResponse](#schemaextralinkcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-import-error">Import Error</h1>

## Get Import Error

<a id="opIdget_import_error"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/importErrors/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/importErrors/{import_error_id}`

Get an import error.

<h3 id="get-import-error-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|import_error_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "import_error_id": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "filename": "string",
  "source_reference": "string",
  "bundle_name": "string",
  "stack_trace": "string",
  "file_token": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-import-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ImportErrorResponse](#schemaimporterrorresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Import Errors

<a id="opIdget_import_errors"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/importErrors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/importErrors`

Get all import errors.

<h3 id="get-import-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, timestamp, filename, source_reference, bundle_name, stacktrace, import_error_id`|
|filename_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `filename_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|filename_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|filename|query|string \| null|false|Exact filename match. Returns only the import error for this specific file path.|
|bundle_name|query|string \| null|false|Exact bundle name match. Returns only import errors from this specific bundle.|

> Example responses

> 200 Response

```json
{
  "import_errors": [
    {
      "import_error_id": 0,
      "timestamp": "1970-01-01T00:00:00Z",
      "filename": "string",
      "source_reference": "string",
      "bundle_name": "string",
      "stack_trace": "string",
      "file_token": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-import-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ImportErrorCollectionResponse](#schemaimporterrorcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-job">Job</h1>

## Get Jobs

<a id="opIdget_jobs"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/jobs`

Get all jobs.

<h3 id="get-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date_gte|query|string(date-time) \| null|false|none|
|start_date_gt|query|string(date-time) \| null|false|none|
|start_date_lte|query|string(date-time) \| null|false|none|
|start_date_lt|query|string(date-time) \| null|false|none|
|end_date_gte|query|string(date-time) \| null|false|none|
|end_date_gt|query|string(date-time) \| null|false|none|
|end_date_lte|query|string(date-time) \| null|false|none|
|end_date_lt|query|string(date-time) \| null|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, dag_id, state, job_type, start_date, end_date, latest_heartbeat, executor_class, hostname, unixname`|
|job_state|query|string \| null|false|none|
|dag_id|query|string \| null|false|none|
|job_type|query|string \| null|false|none|
|hostname|query|string \| null|false|none|
|executor_class|query|string \| null|false|none|
|teams|query|[string]|false|none|
|is_alive|query|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "id": 0,
      "dag_id": "string",
      "state": "string",
      "job_type": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "latest_heartbeat": "1970-01-01T00:00:00Z",
      "executor_class": "string",
      "hostname": "string",
      "unixname": "string",
      "team_names": [
        "string"
      ],
      "bundle_names": [
        "string"
      ],
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[JobCollectionResponse](#schemajobcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-plugin">Plugin</h1>

## Get Plugins

<a id="opIdget_plugins"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/plugins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/plugins`

<h3 id="get-plugins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "plugins": [
    {
      "name": "string",
      "team_name": "string",
      "macros": [
        "string"
      ],
      "flask_blueprints": [
        "string"
      ],
      "fastapi_apps": [
        {
          "app": "string",
          "url_prefix": "string",
          "name": "string"
        }
      ],
      "fastapi_root_middlewares": [
        {
          "middleware": "string",
          "name": "string"
        }
      ],
      "external_views": [
        {
          "name": "string",
          "icon": "string",
          "icon_dark_mode": "string",
          "url_route": "string",
          "category": "string",
          "nav_top_level": false,
          "applies_to": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "href": "string",
          "destination": "nav"
        }
      ],
      "react_apps": [
        {
          "name": "string",
          "icon": "string",
          "icon_dark_mode": "string",
          "url_route": "string",
          "category": "string",
          "nav_top_level": false,
          "applies_to": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "bundle_url": "string",
          "destination": "nav"
        }
      ],
      "ui_actions": [
        {
          "name": "string",
          "destination": "dag",
          "icon": "string",
          "icon_dark_mode": "string",
          "applies_to": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "action_type": "link",
          "href": "string"
        }
      ],
      "appbuilder_views": [
        {
          "name": "string",
          "category": "string",
          "view": "string",
          "label": "string"
        }
      ],
      "appbuilder_menu_items": [
        {
          "name": "string",
          "href": "string",
          "category": "string"
        }
      ],
      "global_operator_extra_links": [
        "string"
      ],
      "operator_extra_links": [
        "string"
      ],
      "source": "string",
      "listeners": [
        "string"
      ],
      "timetables": [
        "string"
      ]
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-plugins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PluginCollectionResponse](#schemaplugincollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Import Errors

<a id="opIdimport_errors"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/plugins/importErrors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/plugins/importErrors`

> Example responses

> 200 Response

```json
{
  "import_errors": [
    {
      "source": "string",
      "error": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

<h3 id="import-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PluginImportErrorCollectionResponse](#schemapluginimporterrorcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-pool">Pool</h1>

## Get Pool

<a id="opIdget_pool"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/pools/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/pools/{pool_name}`

Get a pool.

<h3 id="get-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": true,
  "occupied_slots": 0,
  "running_slots": 0,
  "queued_slots": 0,
  "scheduled_slots": 0,
  "open_slots": 0,
  "deferred_slots": 0,
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PoolResponse](#schemapoolresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Pool

<a id="opIddelete_pool"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/pools/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/pools/{pool_name}`

Delete a pool entry.

<h3 id="delete-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_name|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Pool

<a id="opIdpatch_pool"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/pools/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pool": "string",
    "slots": -1,
    "description": "string",
    "include_deferred": true,
    "team_name": "string"
  }'
```

`PATCH /api/v2/pools/{pool_name}`

Update a Pool.

> Body parameter

```json
{
  "pool": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": true,
  "team_name": "string"
}
```

<h3 id="patch-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pool_name|path|string|true|none|
|update_mask|query|[string] \| null|false|none|
|body|body|[PoolPatchBody](#schemapoolpatchbody)|true|none|
|» pool|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» slots|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|Number of slots. Use -1 for unlimited.|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_deferred|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": true,
  "occupied_slots": 0,
  "running_slots": 0,
  "queued_slots": 0,
  "scheduled_slots": 0,
  "open_slots": 0,
  "deferred_slots": 0,
  "team_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="patch-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PoolResponse](#schemapoolresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Pools

<a id="opIdget_pools"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/pools \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/pools`

Get all pools entries.

<h3 id="get-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, pool, name`|
|pool_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|pool_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|

> Example responses

> 200 Response

```json
{
  "pools": [
    {
      "name": "string",
      "slots": -1,
      "description": "string",
      "include_deferred": true,
      "occupied_slots": 0,
      "running_slots": 0,
      "queued_slots": 0,
      "scheduled_slots": 0,
      "open_slots": 0,
      "deferred_slots": 0,
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[PoolCollectionResponse](#schemapoolcollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Post Pool

<a id="opIdpost_pool"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/pools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "slots": -1,
    "description": "string",
    "include_deferred": false,
    "team_name": "string"
  }'
```

`POST /api/v2/pools`

Create a Pool.

> Body parameter

```json
{
  "name": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": false,
  "team_name": "string"
}
```

<h3 id="post-pool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PoolBody](#schemapoolbody)|true|none|
|» name|body|string|true|none|
|» slots|body|integer|true|Number of slots. Use -1 for unlimited.|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_deferred|body|boolean|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": true,
  "occupied_slots": 0,
  "running_slots": 0,
  "queued_slots": 0,
  "scheduled_slots": 0,
  "open_slots": 0,
  "deferred_slots": 0,
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="post-pool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[PoolResponse](#schemapoolresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Bulk Pools

<a id="opIdbulk_pools"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/pools \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "action": "create",
        "entities": [
          {
            "name": "string",
            "slots": -1,
            "description": "string",
            "include_deferred": false,
            "team_name": "string"
          }
        ],
        "action_on_existence": "fail"
      }
    ]
  }'
```

`PATCH /api/v2/pools`

Bulk create, update, and delete pools.

> Body parameter

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "name": "string",
          "slots": -1,
          "description": "string",
          "include_deferred": false,
          "team_name": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

<h3 id="bulk-pools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkBody_PoolBody_](#schemabulkbody_poolbody_)|true|none|
|» actions|body|[[BulkCreateAction_PoolBody_](#schemabulkcreateaction_poolbody_) \| [BulkUpdateAction_PoolBody_](#schemabulkupdateaction_poolbody_) \| [BulkDeleteAction_PoolBody_](#schemabulkdeleteaction_poolbody_)]|true|none|
|» » *oneOf*|body|[BulkCreateAction_PoolBody_](#schemabulkcreateaction_poolbody_)|false|none|
|» » *oneOf*|body|[BulkUpdateAction_PoolBody_](#schemabulkupdateaction_poolbody_)|false|none|
|» » *oneOf*|body|[BulkDeleteAction_PoolBody_](#schemabulkdeleteaction_poolbody_)|false|none|

> Example responses

> 200 Response

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="bulk-pools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BulkResponse](#schemabulkresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-provider">Provider</h1>

## Get Providers

<a id="opIdget_providers"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/providers`

Get providers.

<h3 id="get-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "providers": [
    {
      "package_name": "string",
      "description": "string",
      "version": "string",
      "documentation_url": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ProviderCollectionResponse](#schemaprovidercollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Provider

<a id="opIdget_provider"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/providers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/providers/{provider_name}`

Get detailed information about an installed provider.

<h3 id="get-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider_name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "package_name": "string",
  "description": "string",
  "version": "string",
  "documentation_url": "string",
  "provider_info": {
    "package_name": "string",
    "name": "string",
    "description": "string",
    "documentation_url": "string",
    "filesystems": [
      "string"
    ],
    "integrations": [
      {
        "integration_name": "string",
        "external_doc_url": "string",
        "how_to_guide": [
          "string"
        ],
        "logo": "string",
        "tags": [
          "string"
        ]
      }
    ],
    "operators": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "sensors": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "hooks": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "triggers": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "bundles": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "asset_uris": [
      {
        "schemes": [
          "string"
        ],
        "handler": "string",
        "factory": "string",
        "to_openlineage_converter": "string"
      }
    ],
    "dialects": [
      {
        "dialect_type": "string",
        "dialect_class_name": "string"
      }
    ],
    "transfers": [
      {
        "source_integration_name": "string",
        "target_integration_name": "string",
        "python_module": "string",
        "how_to_guide": "string"
      }
    ],
    "connection_types": [
      {
        "connection_type": "string",
        "hook_class_name": "string",
        "hook_name": "string",
        "ui_field_behaviour": {
          "hidden_fields": [
            "string"
          ],
          "relabeling": {
            "property1": "string",
            "property2": "string"
          },
          "placeholders": {
            "property1": "string",
            "property2": "string"
          }
        },
        "conn_fields": {
          "property1": {
            "label": "string",
            "description": "string",
            "schema": {}
          },
          "property2": {
            "label": "string",
            "description": "string",
            "schema": {}
          }
        },
        "external_services": [
          "string"
        ]
      }
    ],
    "extra_links": [
      "string"
    ],
    "secrets_backends": [
      "string"
    ],
    "email_backends": [
      "string"
    ],
    "logging": [
      "string"
    ],
    "remote_logging": [
      {
        "classpath": "string",
        "scheme": "string"
      }
    ],
    "auth_backends": [
      "string"
    ],
    "auth_managers": [
      "string"
    ],
    "notifications": [
      "string"
    ],
    "executors": [
      "string"
    ],
    "db_managers": [
      "string"
    ],
    "cli": [
      "string"
    ],
    "config": {
      "property1": {
        "description": "string",
        "options": {
          "property1": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          },
          "property2": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          }
        }
      },
      "property2": {
        "description": "string",
        "options": {
          "property1": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          },
          "property2": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          }
        }
      }
    },
    "task_decorators": [
      {
        "name": "string",
        "class_name": "string"
      }
    ],
    "plugins": [
      {
        "name": "string",
        "plugin_class": "string"
      }
    ],
    "queues": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ProviderDetailsResponse](#schemaproviderdetailsresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-asset-state-store">Asset State Store</h1>

## List Asset State Store

<a id="opIdlist_asset_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/state-store \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/{asset_id}/state-store`

List all state store entries for an asset.

<h3 id="list-asset-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|integer|true|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "asset_state_store": [
    {
      "key": "string",
      "value": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "last_updated_by": {
        "kind": "task",
        "dag_id": "string",
        "run_id": "string",
        "task_id": "string",
        "map_index": 0,
        "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "region_index": 0,
        "try_number": 0
      }
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="list-asset-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetStateStoreCollectionResponse](#schemaassetstatestorecollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Clear Asset State Store

<a id="opIdclear_asset_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/state-store \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/assets/{asset_id}/state-store`

Delete all state store keys for an asset.

<h3 id="clear-asset-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|path|integer|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="clear-asset-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Asset State Store

<a id="opIdget_asset_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/state-store/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/assets/{asset_id}/state-store/{key}`

Get a single asset state store entry.

<h3 id="get-asset-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|asset_id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "last_updated_by": {
    "kind": "task",
    "dag_id": "string",
    "run_id": "string",
    "task_id": "string",
    "map_index": 0,
    "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "try_number": 0
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-asset-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[AssetStateStoreResponse](#schemaassetstatestoreresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Set Asset State Store

<a id="opIdset_asset_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/state-store/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": null
  }'
```

`PUT /api/v2/assets/{asset_id}/state-store/{key}`

Set an asset state store value. Creates or overwrites the key.

> Body parameter

```json
{
  "value": null
}
```

<h3 id="set-asset-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|asset_id|path|integer|true|none|
|body|body|[AssetStateStoreBody](#schemaassetstatestorebody)|true|none|
|» value|body|[JsonValue](#schemajsonvalue)|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="set-asset-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Asset State Store

<a id="opIddelete_asset_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/assets/0/state-store/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/assets/{asset_id}/state-store/{key}`

Delete a single asset state store key. No-op if the key does not exist.

<h3 id="delete-asset-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|asset_id|path|integer|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-asset-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-task-state-store">Task State Store</h1>

## List Task State Store

<a id="opIdlist_task_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/state-store \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store`

List all task state store entries for a task instance.

<h3 id="list-task-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "task_state_store": [
    {
      "key": "string",
      "value": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="list-task-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskStateStoreCollectionResponse](#schemataskstatestorecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Clear Task State Store

<a id="opIdclear_task_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/state-store \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store`

Delete all task state store keys for a task instance.

When ``all_map_indices=true``, state store is cleared for every map index of the task and
the ``map_index`` parameter is ignored.

<h3 id="clear-task-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|all_map_indices|query|boolean|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="clear-task-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task State Store

<a id="opIdget_task_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/state-store/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}`

Get a single task state store entry.

<h3 id="get-task-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskStateStoreResponse](#schemataskstatestoreresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Set Task State Store

<a id="opIdset_task_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/state-store/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": null,
    "expires_at": "default"
  }'
```

`PUT /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}`

Set a task state store value. Creates or overwrites the key.

> Body parameter

```json
{
  "value": null,
  "expires_at": "default"
}
```

<h3 id="set-task-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[TaskStateStoreBody](#schemataskstatestorebody)|true|none|
|» value|body|[JsonValue](#schemajsonvalue)|true|none|
|» expires_at|body|string(date-time) \| string \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="set-task-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Task State Store

<a id="opIddelete_task_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/state-store/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}`

Delete a single task state store key. No-op if the key does not exist.

<h3 id="delete-task-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="delete-task-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task State Store

<a id="opIdpatch_task_state_store"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/state-store/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": null
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/state-store/{key}`

Update the value of an existing task state store key.

> Body parameter

```json
{
  "value": null
}
```

<h3 id="patch-task-state-store-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[TaskStateStorePatchBody](#schemataskstatestorepatchbody)|true|none|
|» value|body|[JsonValue](#schemajsonvalue)|true|none|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-state-store-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-xcom">XCom</h1>

## Get Xcom Entry

<a id="opIdget_xcom_entry"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/xcomEntries/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}`

Get an XCom entry.

<h3 id="get-xcom-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|task_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|xcom_key|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|deserialize|query|boolean|false|none|
|stringify|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "task_id": "string",
  "dag_id": "string",
  "run_id": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "run_after": "1970-01-01T00:00:00Z",
  "team_name": "string",
  "value": null
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-xcom-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-xcom-entry-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[XComResponseNative](#schemaxcomresponsenative)|false|none|XCom response serializer with native return type.|
|*anyOf*|[XComResponseString](#schemaxcomresponsestring)|false|none|XCom response serializer with string return type.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Xcom Entry

<a id="opIddelete_xcom_entry"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/xcomEntries/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}`

Delete an XCom entry.

<h3 id="delete-xcom-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|task_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|xcom_key|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="delete-xcom-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Update Xcom Entry

<a id="opIdupdate_xcom_entry"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/xcomEntries/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": null,
    "map_index": -1,
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": -1
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}`

Update an existing XCom entry.

> Body parameter

```json
{
  "value": null,
  "map_index": -1,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": -1
}
```

<h3 id="update-xcom-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|task_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|xcom_key|path|string|true|none|
|body|body|[XComUpdateBody](#schemaxcomupdatebody)|true|none|
|» value|body|object|true|none|
|» map_index|body|integer|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "task_id": "string",
  "dag_id": "string",
  "run_id": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "run_after": "1970-01-01T00:00:00Z",
  "team_name": "string",
  "value": null
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="update-xcom-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[XComResponseNative](#schemaxcomresponsenative)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Xcom Entries

<a id="opIdget_xcom_entries"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/xcomEntries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries`

Get all XCom entries.

This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCom entries for all Dags.

<h3 id="get-xcom-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|xcom_key|query|string \| null|false|none|
|map_index|query|integer \| null|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|exclude_internal_keys|query|boolean|false|Leave out XComs whose keys Airflow reserves for itself, such as loop decision reasons.|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|xcom_key_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `xcom_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|xcom_key_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|dag_display_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_display_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|run_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|run_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|task_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|task_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|map_index_filter|query|integer \| null|false|none|
|logical_date_gte|query|string(date-time) \| null|false|none|
|logical_date_gt|query|string(date-time) \| null|false|none|
|logical_date_lte|query|string(date-time) \| null|false|none|
|logical_date_lt|query|string(date-time) \| null|false|none|
|run_after_gte|query|string(date-time) \| null|false|none|
|run_after_gt|query|string(date-time) \| null|false|none|
|run_after_lte|query|string(date-time) \| null|false|none|
|run_after_lt|query|string(date-time) \| null|false|none|
|teams|query|[string]|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, dag_id, run_id, task_id, map_index, region_id, region_index, timestamp, run_after`|

> Example responses

> 200 Response

```json
{
  "xcom_entries": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "logical_date": "1970-01-01T00:00:00Z",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "task_id": "string",
      "dag_id": "string",
      "run_id": "string",
      "dag_display_name": "string",
      "task_display_name": "string",
      "run_after": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-xcom-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[XComCollectionResponse](#schemaxcomcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Create Xcom Entry

<a id="opIdcreate_xcom_entry"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/xcomEntries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string",
    "value": null,
    "map_index": -1,
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": -1
  }'
```

`POST /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries`

Create an XCom entry.

> Body parameter

```json
{
  "key": "string",
  "value": null,
  "map_index": -1,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": -1
}
```

<h3 id="create-xcom-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|task_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|body|body|[XComCreateBody](#schemaxcomcreatebody)|true|none|
|» key|body|string|true|none|
|» value|body|object|true|none|
|» map_index|body|integer|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "task_id": "string",
  "dag_id": "string",
  "run_id": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "run_after": "1970-01-01T00:00:00Z",
  "team_name": "string",
  "value": null
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="create-xcom-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[XComResponseNative](#schemaxcomresponsenative)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-task-instance">Task Instance</h1>

## Get Task Instance

<a id="opIdget_task_instance"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`

Get task instance.

<h3 id="get-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_id": "string",
  "dag_id": "string",
  "dag_run_id": "string",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "in_loop": true,
  "loop_iteration": {
    "loop_id": "string",
    "iteration": 1
  },
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "state": "removed",
  "try_number": 0,
  "max_tries": 0,
  "task_display_name": "string",
  "dag_display_name": "string",
  "hostname": "string",
  "unixname": "string",
  "pool": "string",
  "pool_slots": 0,
  "queue": "string",
  "priority_weight": 0,
  "operator": "string",
  "operator_name": "string",
  "queued_when": "1970-01-01T00:00:00Z",
  "scheduled_when": "1970-01-01T00:00:00Z",
  "pid": 0,
  "executor": "string",
  "executor_config": "string",
  "note": "string",
  "rendered_map_index": "string",
  "rendered_fields": {},
  "trigger": {
    "id": 0,
    "classpath": "string",
    "kwargs": "string",
    "created_date": "1970-01-01T00:00:00Z",
    "queue": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "id": 0,
    "dag_id": "string",
    "state": "string",
    "job_type": "string",
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "latest_heartbeat": "1970-01-01T00:00:00Z",
    "executor_class": "string",
    "hostname": "string",
    "unixname": "string",
    "team_names": [
      "string"
    ],
    "bundle_names": [
      "string"
    ],
    "dag_display_name": "string"
  },
  "dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "team_name": "string",
  "state_reason": "string",
  "retry_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceResponse](#schemataskinstanceresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Task Instance

<a id="opIddelete_task_instance"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`

Delete a task instance.

<h3 id="delete-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="delete-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task Instance

<a id="opIdpatch_task_instance"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "new_state": "removed",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "note": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`

Update a task instance.

> Body parameter

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

<h3 id="patch-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer \| null|false|none|
|update_mask|query|[string] \| null|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[PatchTaskInstanceBody](#schemapatchtaskinstancebody)|true|none|
|» new_state|body|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|
|» » *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» » *anyOf*|body|null|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|removed|
|» » *anyOf*|scheduled|
|» » *anyOf*|queued|
|» » *anyOf*|running|
|» » *anyOf*|success|
|» » *anyOf*|restarting|
|» » *anyOf*|failed|
|» » *anyOf*|up_for_retry|
|» » *anyOf*|up_for_reschedule|
|» » *anyOf*|upstream_failed|
|» » *anyOf*|skipped|
|» » *anyOf*|deferred|
|» » *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Mapped Task Instances

<a id="opIdget_mapped_task_instances"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/listMapped \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped`

Get list of mapped task instances.

<h3 id="get-mapped-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|run_after_gte|query|string(date-time) \| null|false|none|
|run_after_gt|query|string(date-time) \| null|false|none|
|run_after_lte|query|string(date-time) \| null|false|none|
|run_after_lt|query|string(date-time) \| null|false|none|
|logical_date_gte|query|string(date-time) \| null|false|none|
|logical_date_gt|query|string(date-time) \| null|false|none|
|logical_date_lte|query|string(date-time) \| null|false|none|
|logical_date_lt|query|string(date-time) \| null|false|none|
|start_date_gte|query|string(date-time) \| null|false|none|
|start_date_gt|query|string(date-time) \| null|false|none|
|start_date_lte|query|string(date-time) \| null|false|none|
|start_date_lt|query|string(date-time) \| null|false|none|
|end_date_gte|query|string(date-time) \| null|false|none|
|end_date_gt|query|string(date-time) \| null|false|none|
|end_date_lte|query|string(date-time) \| null|false|none|
|end_date_lt|query|string(date-time) \| null|false|none|
|updated_at_gte|query|string(date-time) \| null|false|none|
|updated_at_gt|query|string(date-time) \| null|false|none|
|updated_at_lte|query|string(date-time) \| null|false|none|
|updated_at_lt|query|string(date-time) \| null|false|none|
|duration_gte|query|number \| null|false|none|
|duration_gt|query|number \| null|false|none|
|duration_lte|query|number \| null|false|none|
|duration_lt|query|number \| null|false|none|
|state|query|[string]|false|none|
|pool|query|[string]|false|none|
|pool_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|pool_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|queue|query|[string]|false|none|
|queue_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|queue_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|executor|query|[string]|false|none|
|version_number|query|[integer]|false|none|
|try_number|query|[integer]|false|none|
|operator|query|[string]|false|none|
|operator_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|operator_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|map_index|query|[integer]|false|none|
|rendered_map_index_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|rendered_map_index_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-mapped-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task Instance Dependencies

<a id="opIdget_task_instance_dependencies_by_map_index"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/dependencies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/dependencies`

Get dependencies blocking task from getting scheduled.

<h3 id="get-task-instance-dependencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "dependencies": [
    {
      "name": "string",
      "reason": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instance-dependencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskDependencyCollectionResponse](#schemataskdependencycollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task Instance Dependencies

<a id="opIdget_task_instance_dependencies"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/dependencies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/dependencies`

Get dependencies blocking task from getting scheduled.

<h3 id="get-task-instance-dependencies-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "dependencies": [
    {
      "name": "string",
      "reason": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instance-dependencies-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskDependencyCollectionResponse](#schemataskdependencycollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task Instance Tries

<a id="opIdget_task_instance_tries"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/tries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries`

Get list of task instances history.

Tries recorded before the task had regions are not included once it has them.

<h3 id="get-task-instance-tries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "note": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instance-tries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceHistoryCollectionResponse](#schemataskinstancehistorycollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Mapped Task Instance Tries

<a id="opIdget_mapped_task_instance_tries"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/tries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/tries`

Get list of task instances history for a mapped task instance.

Tries recorded before the task had regions are not included once it has them.

<h3 id="get-mapped-task-instance-tries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "note": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-mapped-task-instance-tries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceHistoryCollectionResponse](#schemataskinstancehistorycollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Mapped Task Instance

<a id="opIdget_mapped_task_instance"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}`

Get task instance.

<h3 id="get-mapped-task-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_id": "string",
  "dag_id": "string",
  "dag_run_id": "string",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "in_loop": true,
  "loop_iteration": {
    "loop_id": "string",
    "iteration": 1
  },
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "state": "removed",
  "try_number": 0,
  "max_tries": 0,
  "task_display_name": "string",
  "dag_display_name": "string",
  "hostname": "string",
  "unixname": "string",
  "pool": "string",
  "pool_slots": 0,
  "queue": "string",
  "priority_weight": 0,
  "operator": "string",
  "operator_name": "string",
  "queued_when": "1970-01-01T00:00:00Z",
  "scheduled_when": "1970-01-01T00:00:00Z",
  "pid": 0,
  "executor": "string",
  "executor_config": "string",
  "note": "string",
  "rendered_map_index": "string",
  "rendered_fields": {},
  "trigger": {
    "id": 0,
    "classpath": "string",
    "kwargs": "string",
    "created_date": "1970-01-01T00:00:00Z",
    "queue": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "id": 0,
    "dag_id": "string",
    "state": "string",
    "job_type": "string",
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "latest_heartbeat": "1970-01-01T00:00:00Z",
    "executor_class": "string",
    "hostname": "string",
    "unixname": "string",
    "team_names": [
      "string"
    ],
    "bundle_names": [
      "string"
    ],
    "dag_display_name": "string"
  },
  "dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "team_name": "string",
  "state_reason": "string",
  "retry_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-mapped-task-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceResponse](#schemataskinstanceresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task Instance

<a id="opIdpatch_task_instance_by_map_index"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "new_state": "removed",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "note": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}`

Update a task instance.

> Body parameter

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

<h3 id="patch-task-instance-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer \| null|true|none|
|update_mask|query|[string] \| null|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[PatchTaskInstanceBody](#schemapatchtaskinstancebody)|true|none|
|» new_state|body|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|
|» » *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» » *anyOf*|body|null|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|removed|
|» » *anyOf*|scheduled|
|» » *anyOf*|queued|
|» » *anyOf*|running|
|» » *anyOf*|success|
|» » *anyOf*|restarting|
|» » *anyOf*|failed|
|» » *anyOf*|up_for_retry|
|» » *anyOf*|up_for_reschedule|
|» » *anyOf*|upstream_failed|
|» » *anyOf*|skipped|
|» » *anyOf*|deferred|
|» » *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-instance-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task Instances

<a id="opIdget_task_instances"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances`

Get list of task instances.

This endpoint allows specifying `~` as the dag_id, dag_run_id
to retrieve task instances for all Dags and Dag runs.

Supports two pagination modes:

**Offset (default):** use `limit` and `offset` query parameters. Returns `total_entries`.

**Cursor:** pass `cursor` (empty string for the first page, then `next_cursor` from the response).
When `cursor` is provided, `offset` is ignored and `total_entries` is capped at
`total_entries_limit` (a value equal to that limit means at least that many task instances
match). ``next_cursor`` is ``null`` when there are no more pages; ``previous_cursor`` is
``null`` on the first page.

<h3 id="get-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|loop_id|query|string \| null|false|Task group id of a loop; matches every instance it produced.|
|iteration|query|integer \| null|false|Narrow ``loop_id`` to a single pass of that loop. Iterations count from one.|
|cursor|query|string \| null|false|Cursor for keyset-based pagination. Pass an empty string for the first page, then use ``next_cursor`` from the response. When ``cursor`` is provided, ``offset`` is ignored.|
|task_id|query|string \| null|false|none|
|run_after_gte|query|string(date-time) \| null|false|none|
|run_after_gt|query|string(date-time) \| null|false|none|
|run_after_lte|query|string(date-time) \| null|false|none|
|run_after_lt|query|string(date-time) \| null|false|none|
|logical_date_gte|query|string(date-time) \| null|false|none|
|logical_date_gt|query|string(date-time) \| null|false|none|
|logical_date_lte|query|string(date-time) \| null|false|none|
|logical_date_lt|query|string(date-time) \| null|false|none|
|start_date_gte|query|string(date-time) \| null|false|none|
|start_date_gt|query|string(date-time) \| null|false|none|
|start_date_lte|query|string(date-time) \| null|false|none|
|start_date_lt|query|string(date-time) \| null|false|none|
|end_date_gte|query|string(date-time) \| null|false|none|
|end_date_gt|query|string(date-time) \| null|false|none|
|end_date_lte|query|string(date-time) \| null|false|none|
|end_date_lt|query|string(date-time) \| null|false|none|
|updated_at_gte|query|string(date-time) \| null|false|none|
|updated_at_gt|query|string(date-time) \| null|false|none|
|updated_at_lte|query|string(date-time) \| null|false|none|
|updated_at_lt|query|string(date-time) \| null|false|none|
|duration_gte|query|number \| null|false|none|
|duration_gt|query|number \| null|false|none|
|duration_lte|query|number \| null|false|none|
|duration_lt|query|number \| null|false|none|
|task_display_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `task_display_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|task_display_name_prefix_pattern|query|string \| null|false|Case-sensitive prefix match on task display name (`_task_display_property_value` else `task_id`). Index-friendly alternative to `task_display_name_pattern`; on large databases combine with `dag_id_prefix_pattern` (or a specific Dag in the path) so composite indexes apply. See "Filtering with pattern parameters".|
|task_group_id|query|string \| null|false|Filter by exact task group ID. Returns all tasks within the specified task group.|
|dag_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|run_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `run_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|run_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|state|query|[string]|false|none|
|pool|query|[string]|false|none|
|pool_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `pool_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|pool_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|queue|query|[string]|false|none|
|queue_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `queue_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|queue_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|executor|query|[string]|false|none|
|version_number|query|[integer]|false|none|
|teams|query|[string]|false|none|
|try_number|query|[integer]|false|none|
|operator|query|[string]|false|none|
|operator_name_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `operator_name_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|operator_name_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|map_index|query|[integer]|false|none|
|rendered_map_index_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `rendered_map_index_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|rendered_map_index_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, state, duration, start_date, end_date, map_index, try_number, logical_date, run_after, data_interval_start, data_interval_end, rendered_map_index, operator`|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Bulk Task Instances

<a id="opIdbulk_task_instances"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "action": "create",
        "entities": [
          {
            "new_state": "removed",
            "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "region_index": 0,
            "note": "string",
            "include_upstream": false,
            "include_downstream": false,
            "include_future": false,
            "include_past": false,
            "task_id": "string",
            "map_index": 0,
            "dag_id": "string",
            "dag_run_id": "string"
          }
        ],
        "action_on_existence": "fail"
      }
    ]
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances`

Bulk update, and delete task instances.

> Body parameter

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "new_state": "removed",
          "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "region_index": 0,
          "note": "string",
          "include_upstream": false,
          "include_downstream": false,
          "include_future": false,
          "include_past": false,
          "task_id": "string",
          "map_index": 0,
          "dag_id": "string",
          "dag_run_id": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

<h3 id="bulk-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|body|body|[BulkBody_BulkTaskInstanceBody_](#schemabulkbody_bulktaskinstancebody_)|true|none|
|» actions|body|[[BulkCreateAction_BulkTaskInstanceBody_](#schemabulkcreateaction_bulktaskinstancebody_) \| [BulkUpdateAction_BulkTaskInstanceBody_](#schemabulkupdateaction_bulktaskinstancebody_) \| [BulkDeleteAction_BulkTaskInstanceBody_](#schemabulkdeleteaction_bulktaskinstancebody_)]|true|none|
|» » *oneOf*|body|[BulkCreateAction_BulkTaskInstanceBody_](#schemabulkcreateaction_bulktaskinstancebody_)|false|none|
|» » *oneOf*|body|[BulkUpdateAction_BulkTaskInstanceBody_](#schemabulkupdateaction_bulktaskinstancebody_)|false|none|
|» » *oneOf*|body|[BulkDeleteAction_BulkTaskInstanceBody_](#schemabulkdeleteaction_bulktaskinstancebody_)|false|none|

> Example responses

> 200 Response

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="bulk-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BulkResponse](#schemabulkresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task Instances Batch

<a id="opIdget_task_instances_batch"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/~/dagRuns/~/taskInstances/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dag_ids": [
      "string"
    ],
    "dag_run_ids": [
      "string"
    ],
    "task_ids": [
      "string"
    ],
    "state": [
      "removed"
    ],
    "run_after_gte": "1970-01-01T00:00:00Z",
    "run_after_gt": "1970-01-01T00:00:00Z",
    "run_after_lte": "1970-01-01T00:00:00Z",
    "run_after_lt": "1970-01-01T00:00:00Z",
    "logical_date_gte": "1970-01-01T00:00:00Z",
    "logical_date_gt": "1970-01-01T00:00:00Z",
    "logical_date_lte": "1970-01-01T00:00:00Z",
    "logical_date_lt": "1970-01-01T00:00:00Z",
    "start_date_gte": "1970-01-01T00:00:00Z",
    "start_date_gt": "1970-01-01T00:00:00Z",
    "start_date_lte": "1970-01-01T00:00:00Z",
    "start_date_lt": "1970-01-01T00:00:00Z",
    "end_date_gte": "1970-01-01T00:00:00Z",
    "end_date_gt": "1970-01-01T00:00:00Z",
    "end_date_lte": "1970-01-01T00:00:00Z",
    "end_date_lt": "1970-01-01T00:00:00Z",
    "duration_gte": 0,
    "duration_gt": 0,
    "duration_lte": 0,
    "duration_lt": 0,
    "pool": [
      "string"
    ],
    "queue": [
      "string"
    ],
    "executor": [
      "string"
    ],
    "page_offset": 0,
    "page_limit": 100,
    "order_by": "string"
  }'
```

`POST /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/list`

Get list of task instances.

> Body parameter

```json
{
  "dag_ids": [
    "string"
  ],
  "dag_run_ids": [
    "string"
  ],
  "task_ids": [
    "string"
  ],
  "state": [
    "removed"
  ],
  "run_after_gte": "1970-01-01T00:00:00Z",
  "run_after_gt": "1970-01-01T00:00:00Z",
  "run_after_lte": "1970-01-01T00:00:00Z",
  "run_after_lt": "1970-01-01T00:00:00Z",
  "logical_date_gte": "1970-01-01T00:00:00Z",
  "logical_date_gt": "1970-01-01T00:00:00Z",
  "logical_date_lte": "1970-01-01T00:00:00Z",
  "logical_date_lt": "1970-01-01T00:00:00Z",
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_gt": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "start_date_lt": "1970-01-01T00:00:00Z",
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_gt": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "end_date_lt": "1970-01-01T00:00:00Z",
  "duration_gte": 0,
  "duration_gt": 0,
  "duration_lte": 0,
  "duration_lt": 0,
  "pool": [
    "string"
  ],
  "queue": [
    "string"
  ],
  "executor": [
    "string"
  ],
  "page_offset": 0,
  "page_limit": 100,
  "order_by": "string"
}
```

<h3 id="get-task-instances-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|body|body|[TaskInstancesBatchBody](#schemataskinstancesbatchbody)|true|none|
|» dag_ids|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» dag_run_ids|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» task_ids|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» state|body|[[TaskInstanceState](#schemataskinstancestate) \| null] \| null|false|none|
|» » *anyOf*|body|[[TaskInstanceState](#schemataskinstancestate) \| null]|false|none|
|» *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» *anyOf*|body|null|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» run_after_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» logical_date_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» start_date_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_gte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_gt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_lte|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date_lt|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_gte|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_gt|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_lte|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration_lt|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» pool|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» queue|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» executor|body|[string] \| null|false|none|
|» » *anyOf*|body|[string]|false|none|
|» » *anyOf*|body|null|false|none|
|» page_offset|body|integer|false|none|
|» page_limit|body|integer|false|none|
|» order_by|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» *anyOf*|removed|
|» *anyOf*|scheduled|
|» *anyOf*|queued|
|» *anyOf*|running|
|» *anyOf*|success|
|» *anyOf*|restarting|
|» *anyOf*|failed|
|» *anyOf*|up_for_retry|
|» *anyOf*|up_for_reschedule|
|» *anyOf*|upstream_failed|
|» *anyOf*|skipped|
|» *anyOf*|deferred|
|» *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instances-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task Instance Try Details

<a id="opIdget_task_instance_try_details"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/tries/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries/{task_try_number}`

Get task instance details by try number.

<h3 id="get-task-instance-try-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|task_try_number|path|integer|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_id": "string",
  "dag_id": "string",
  "dag_run_id": "string",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "loop_iteration": {
    "loop_id": "string",
    "iteration": 1
  },
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "state": "removed",
  "try_number": 0,
  "max_tries": 0,
  "task_display_name": "string",
  "dag_display_name": "string",
  "hostname": "string",
  "unixname": "string",
  "pool": "string",
  "pool_slots": 0,
  "queue": "string",
  "priority_weight": 0,
  "operator": "string",
  "operator_name": "string",
  "queued_when": "1970-01-01T00:00:00Z",
  "scheduled_when": "1970-01-01T00:00:00Z",
  "pid": 0,
  "executor": "string",
  "executor_config": "string",
  "dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "note": "string",
  "state_reason": "string",
  "retry_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-instance-try-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceHistoryResponse](#schemataskinstancehistoryresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Mapped Task Instance Try Details

<a id="opIdget_mapped_task_instance_try_details"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/tries/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/tries/{task_try_number}`

<h3 id="get-mapped-task-instance-try-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|task_try_number|path|integer|true|none|
|map_index|path|integer|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_id": "string",
  "dag_id": "string",
  "dag_run_id": "string",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "loop_iteration": {
    "loop_id": "string",
    "iteration": 1
  },
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "state": "removed",
  "try_number": 0,
  "max_tries": 0,
  "task_display_name": "string",
  "dag_display_name": "string",
  "hostname": "string",
  "unixname": "string",
  "pool": "string",
  "pool_slots": 0,
  "queue": "string",
  "priority_weight": 0,
  "operator": "string",
  "operator_name": "string",
  "queued_when": "1970-01-01T00:00:00Z",
  "scheduled_when": "1970-01-01T00:00:00Z",
  "pid": 0,
  "executor": "string",
  "executor_config": "string",
  "dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "note": "string",
  "state_reason": "string",
  "retry_at": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-mapped-task-instance-try-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceHistoryResponse](#schemataskinstancehistoryresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Post Clear Task Instances

<a id="opIdpost_clear_task_instances"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/clearTaskInstances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dry_run": true,
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "only_failed": true,
    "only_running": false,
    "reset_dag_runs": true,
    "task_ids": [
      "string"
    ],
    "task_group_id": "string",
    "task_instance_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "whole_expansion_ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "include_later_loop_iterations": true,
    "dag_run_id": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false,
    "run_on_latest_version": true,
    "prevent_running_task": false,
    "keep_task_state": false,
    "note": "string"
  }'
```

`POST /api/v2/dags/{dag_id}/clearTaskInstances`

Clear task instances.

> Body parameter

```json
{
  "dry_run": true,
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "only_failed": true,
  "only_running": false,
  "reset_dag_runs": true,
  "task_ids": [
    "string"
  ],
  "task_group_id": "string",
  "task_instance_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "whole_expansion_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "include_later_loop_iterations": true,
  "dag_run_id": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false,
  "run_on_latest_version": true,
  "prevent_running_task": false,
  "keep_task_state": false,
  "note": "string"
}
```

<h3 id="post-clear-task-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|body|body|[ClearTaskInstancesBody](#schemacleartaskinstancesbody)|true|none|
|» dry_run|body|boolean|false|none|
|» start_date|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» end_date|body|string(date-time) \| null|false|none|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|
|» only_failed|body|boolean|false|none|
|» only_running|body|boolean|false|none|
|» reset_dag_runs|body|boolean|false|none|
|» task_ids|body|[string \| [string, integer]] \| null|false|A list of `task_id` or [`task_id`, `map_index`]. If only the `task_id` is provided for a mapped task, all of its map indices will be targeted.|
|» » *anyOf*|body|[string \| [string, integer]]|false|none|
|» *anyOf*|body|string|false|none|
|» *anyOf*|body|[string, integer]|false|none|
|» » *anyOf*|body|null|false|none|
|» task_group_id|body|string \| null|false|Clear every task in this task group. Mutually exclusive with `task_ids`. The group's tasks are resolved on the server from the dag structure, so all of them are targeted regardless of how many there are.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» task_instance_ids|body|[string(uuid)] \| null|false|Exact current executions in one DAG run. Mutually exclusive with task_ids and task_group_id.|
|» » *anyOf*|body|[string(uuid)]|false|none|
|» » *anyOf*|body|null|false|none|
|» whole_expansion_ids|body|[string(uuid)]|false|Selected execution IDs whose entire mapped expansion should be cleared.|
|» include_later_loop_iterations|body|boolean|false|Clear later iterations when the selection includes a loop gate.|
|» dag_run_id|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|
|» run_on_latest_version|body|boolean \| null|false|(Experimental) Run on the latest bundle version of the dag after clearing the task instances. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False`` (the historical default for clear/rerun).|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» prevent_running_task|body|boolean|false|none|
|» keep_task_state|body|boolean|false|Keep the task state store entries of the cleared task instances so the next attempt resumes from them. By default they are discarded, so the task starts over.|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="post-clear-task-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task Group Instances

<a id="opIdpatch_task_group_instances"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskGroupInstances/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "new_state": "removed",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "note": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskGroupInstances/{group_id}`

Update the state of all task instances in a task group.

> Body parameter

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

<h3 id="patch-task-group-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|group_id|path|string|true|none|
|update_mask|query|[string] \| null|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[PatchTaskInstanceBody](#schemapatchtaskinstancebody)|true|none|
|» new_state|body|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|
|» » *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» » *anyOf*|body|null|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|removed|
|» » *anyOf*|scheduled|
|» » *anyOf*|queued|
|» » *anyOf*|running|
|» » *anyOf*|success|
|» » *anyOf*|restarting|
|» » *anyOf*|failed|
|» » *anyOf*|up_for_retry|
|» » *anyOf*|up_for_reschedule|
|» » *anyOf*|upstream_failed|
|» » *anyOf*|skipped|
|» » *anyOf*|deferred|
|» » *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-group-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task Group Instances Dry Run

<a id="opIdpatch_task_group_instances_dry_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskGroupInstances/string/dry_run \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "new_state": "removed",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "note": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskGroupInstances/{group_id}/dry_run`

Dry-run of updating the state of all task instances in a task group.

> Body parameter

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

<h3 id="patch-task-group-instances-dry-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|group_id|path|string|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[PatchTaskInstanceBody](#schemapatchtaskinstancebody)|true|none|
|» new_state|body|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|
|» » *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» » *anyOf*|body|null|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|removed|
|» » *anyOf*|scheduled|
|» » *anyOf*|queued|
|» » *anyOf*|running|
|» » *anyOf*|success|
|» » *anyOf*|restarting|
|» » *anyOf*|failed|
|» » *anyOf*|up_for_retry|
|» » *anyOf*|up_for_reschedule|
|» » *anyOf*|upstream_failed|
|» » *anyOf*|skipped|
|» » *anyOf*|deferred|
|» » *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-group-instances-dry-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task Instance Dry Run

<a id="opIdpatch_task_instance_dry_run_by_map_index"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/dry_run \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "new_state": "removed",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "note": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/dry_run`

Update a task instance dry_run mode.

> Body parameter

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

<h3 id="patch-task-instance-dry-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer \| null|true|none|
|update_mask|query|[string] \| null|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[PatchTaskInstanceBody](#schemapatchtaskinstancebody)|true|none|
|» new_state|body|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|
|» » *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» » *anyOf*|body|null|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|removed|
|» » *anyOf*|scheduled|
|» » *anyOf*|queued|
|» » *anyOf*|running|
|» » *anyOf*|success|
|» » *anyOf*|restarting|
|» » *anyOf*|failed|
|» » *anyOf*|up_for_retry|
|» » *anyOf*|up_for_reschedule|
|» » *anyOf*|upstream_failed|
|» » *anyOf*|skipped|
|» » *anyOf*|deferred|
|» » *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-instance-dry-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Task Instance Dry Run

<a id="opIdpatch_task_instance_dry_run"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/dry_run \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "new_state": "removed",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "note": "string",
    "include_upstream": false,
    "include_downstream": false,
    "include_future": false,
    "include_past": false
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/dry_run`

Update a task instance dry_run mode.

> Body parameter

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

<h3 id="patch-task-instance-dry-run-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|query|integer \| null|false|none|
|update_mask|query|[string] \| null|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[PatchTaskInstanceBody](#schemapatchtaskinstancebody)|true|none|
|» new_state|body|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|
|» » *anyOf*|body|[TaskInstanceState](#schemataskinstancestate)|false|All possible states that a Task Instance can be in.<br><br>Note that None is also allowed, so always use this in a type hint with Optional.|
|» » *anyOf*|body|null|false|none|
|» region_id|body|string(uuid) \| null|false|none|
|» » *anyOf*|body|string(uuid)|false|none|
|» » *anyOf*|body|null|false|none|
|» region_index|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» note|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» include_upstream|body|boolean|false|none|
|» include_downstream|body|boolean|false|none|
|» include_future|body|boolean|false|none|
|» include_past|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *anyOf*|removed|
|» » *anyOf*|scheduled|
|» » *anyOf*|queued|
|» » *anyOf*|running|
|» » *anyOf*|success|
|» » *anyOf*|restarting|
|» » *anyOf*|failed|
|» » *anyOf*|up_for_retry|
|» » *anyOf*|up_for_reschedule|
|» » *anyOf*|upstream_failed|
|» » *anyOf*|skipped|
|» » *anyOf*|deferred|
|» » *anyOf*|awaiting_input|

> Example responses

> 200 Response

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="patch-task-instance-dry-run-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstanceCollectionResponse](#schemataskinstancecollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Log

<a id="opIdget_log"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/logs/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{try_number}`

Get logs for a specific task instance.

<h3 id="get-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|try_number|path|integer|true|none|
|full_content|query|boolean|false|none|
|token|query|string \| null|false|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|accept|header|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accept|application/json|
|accept|application/x-ndjson|
|accept|*/*|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "event": "string"
    }
  ],
  "continuation_token": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskInstancesLogResponse](#schemataskinstanceslogresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get External Log Url

<a id="opIdget_external_log_url"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/externalLogUrl/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/externalLogUrl/{try_number}`

Get external log URL for a specific task instance.

<h3 id="get-external-log-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|try_number|path|integer|true|none|
|map_index|query|integer|false|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "url": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-external-log-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExternalLogUrlResponse](#schemaexternallogurlresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Hitl Detail

<a id="opIdget_hitl_detail"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/hitlDetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/hitlDetails`

Get a Human-in-the-loop detail of a specific task instance.

<h3 id="get-hitl-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "options": [
    "string"
  ],
  "subject": "string",
  "body": "string",
  "defaults": [
    "string"
  ],
  "multiple": false,
  "params": {},
  "assigned_users": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "responded_by_user": {
    "id": "string",
    "name": "string"
  },
  "responded_at": "1970-01-01T00:00:00Z",
  "chosen_options": [
    "string"
  ],
  "params_input": {},
  "response_received": false,
  "task_instance": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_id": "string",
    "dag_id": "string",
    "dag_run_id": "string",
    "map_index": 0,
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "in_loop": true,
    "loop_iteration": {
      "loop_id": "string",
      "iteration": 1
    },
    "logical_date": "1970-01-01T00:00:00Z",
    "run_after": "1970-01-01T00:00:00Z",
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "duration": 0,
    "state": "removed",
    "try_number": 0,
    "max_tries": 0,
    "task_display_name": "string",
    "dag_display_name": "string",
    "hostname": "string",
    "unixname": "string",
    "pool": "string",
    "pool_slots": 0,
    "queue": "string",
    "priority_weight": 0,
    "operator": "string",
    "operator_name": "string",
    "queued_when": "1970-01-01T00:00:00Z",
    "scheduled_when": "1970-01-01T00:00:00Z",
    "pid": 0,
    "executor": "string",
    "executor_config": "string",
    "note": "string",
    "rendered_map_index": "string",
    "rendered_fields": {},
    "trigger": {
      "id": 0,
      "classpath": "string",
      "kwargs": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "queue": "string",
      "triggerer_id": 0
    },
    "triggerer_job": {
      "id": 0,
      "dag_id": "string",
      "state": "string",
      "job_type": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "latest_heartbeat": "1970-01-01T00:00:00Z",
      "executor_class": "string",
      "hostname": "string",
      "unixname": "string",
      "team_names": [
        "string"
      ],
      "bundle_names": [
        "string"
      ],
      "dag_display_name": "string"
    },
    "dag_version": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    },
    "team_name": "string",
    "state_reason": "string",
    "retry_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-hitl-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HITLDetail](#schemahitldetail)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Update Hitl Detail

<a id="opIdupdate_hitl_detail"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/hitlDetails \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chosen_options": [
      "string"
    ],
    "params_input": {},
    "request_created_at": "1970-01-01T00:00:00Z"
  }'
```

`PATCH /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/hitlDetails`

Update a Human-in-the-loop detail.

> Body parameter

```json
{
  "chosen_options": [
    "string"
  ],
  "params_input": {},
  "request_created_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-hitl-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|body|body|[UpdateHITLDetailPayload](#schemaupdatehitldetailpayload)|true|none|
|» chosen_options|body|[string]|true|none|
|» params_input|body|object|false|none|
|» request_created_at|body|string(date-time) \| null|false|The ``created_at`` of the request this response answers, exactly as the GET endpoint returned it. When the task has since replaced its request (it asked again after a resume, retry or clear), the response is refused with 409 instead of answering a request the user did not see. Leave it out to answer whatever request is waiting.|
|» » *anyOf*|body|string(date-time)|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "responded_by": {
    "id": "string",
    "name": "string"
  },
  "responded_at": "1970-01-01T00:00:00Z",
  "chosen_options": [
    "string"
  ],
  "params_input": {}
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="update-hitl-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HITLDetailResponse](#schemahitldetailresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Hitl Detail Try Detail

<a id="opIdget_hitl_detail_try_detail"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/taskInstances/string/0/hitlDetails/tries/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/hitlDetails/tries/{try_number}`

Get a Human-in-the-loop detail of a specific task instance.

<h3 id="get-hitl-detail-try-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|task_id|path|string|true|none|
|map_index|path|integer|true|none|
|try_number|path|integer \| null|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "options": [
    "string"
  ],
  "subject": "string",
  "body": "string",
  "defaults": [
    "string"
  ],
  "multiple": false,
  "params": {},
  "assigned_users": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "responded_by_user": {
    "id": "string",
    "name": "string"
  },
  "responded_at": "1970-01-01T00:00:00Z",
  "chosen_options": [
    "string"
  ],
  "params_input": {},
  "response_received": false,
  "task_instance": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_id": "string",
    "dag_id": "string",
    "dag_run_id": "string",
    "map_index": 0,
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "loop_iteration": {
      "loop_id": "string",
      "iteration": 1
    },
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "duration": 0,
    "state": "removed",
    "try_number": 0,
    "max_tries": 0,
    "task_display_name": "string",
    "dag_display_name": "string",
    "hostname": "string",
    "unixname": "string",
    "pool": "string",
    "pool_slots": 0,
    "queue": "string",
    "priority_weight": 0,
    "operator": "string",
    "operator_name": "string",
    "queued_when": "1970-01-01T00:00:00Z",
    "scheduled_when": "1970-01-01T00:00:00Z",
    "pid": 0,
    "executor": "string",
    "executor_config": "string",
    "dag_version": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    },
    "note": "string",
    "state_reason": "string",
    "retry_at": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="get-hitl-detail-try-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HITLDetailHistory](#schemahitldetailhistory)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Hitl Details

<a id="opIdget_hitl_details"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagRuns/string/hitlDetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagRuns/{dag_run_id}/hitlDetails`

Get Human-in-the-loop details.

<h3 id="get-hitl-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|dag_run_id|path|string|true|none|
|region_id|query|string(uuid) \| null|false|none|
|region_index|query|integer \| null|false|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `ti_id, subject, responded_at, created_at, responded_by_user_id, responded_by_user_name, dag_id, run_id, task_display_name, run_after, rendered_map_index, task_instance_operator, task_instance_state`|
|dag_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `dag_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|dag_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|task_id|query|string \| null|false|none|
|task_id_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `task_id_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|task_id_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|
|map_index|query|integer \| null|false|none|
|state|query|[string]|false|none|
|teams|query|[string]|false|none|
|response_received|query|boolean \| null|false|none|
|responded_by_user_id|query|[string]|false|none|
|responded_by_user_name|query|[string]|false|none|
|subject_search|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `subject_search` on large tables — see "Filtering with pattern parameters".|
|body_search|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `body_search` on large tables — see "Filtering with pattern parameters".|
|created_at_gte|query|string(date-time) \| null|false|none|
|created_at_gt|query|string(date-time) \| null|false|none|
|created_at_lte|query|string(date-time) \| null|false|none|
|created_at_lt|query|string(date-time) \| null|false|none|

> Example responses

> 200 Response

```json
{
  "hitl_details": [
    {
      "options": [
        "string"
      ],
      "subject": "string",
      "body": "string",
      "defaults": [
        "string"
      ],
      "multiple": false,
      "params": {},
      "assigned_users": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "responded_by_user": {
        "id": "string",
        "name": "string"
      },
      "responded_at": "1970-01-01T00:00:00Z",
      "chosen_options": [
        "string"
      ],
      "params_input": {},
      "response_received": false,
      "task_instance": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "task_id": "string",
        "dag_id": "string",
        "dag_run_id": "string",
        "map_index": 0,
        "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "region_index": 0,
        "in_loop": true,
        "loop_iteration": {
          "loop_id": "string",
          "iteration": 1
        },
        "logical_date": "1970-01-01T00:00:00Z",
        "run_after": "1970-01-01T00:00:00Z",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "duration": 0,
        "state": "removed",
        "try_number": 0,
        "max_tries": 0,
        "task_display_name": "string",
        "dag_display_name": "string",
        "hostname": "string",
        "unixname": "string",
        "pool": "string",
        "pool_slots": 0,
        "queue": "string",
        "priority_weight": 0,
        "operator": "string",
        "operator_name": "string",
        "queued_when": "1970-01-01T00:00:00Z",
        "scheduled_when": "1970-01-01T00:00:00Z",
        "pid": 0,
        "executor": "string",
        "executor_config": "string",
        "note": "string",
        "rendered_map_index": "string",
        "rendered_fields": {},
        "trigger": {
          "id": 0,
          "classpath": "string",
          "kwargs": "string",
          "created_date": "1970-01-01T00:00:00Z",
          "queue": "string",
          "triggerer_id": 0
        },
        "triggerer_job": {
          "id": 0,
          "dag_id": "string",
          "state": "string",
          "job_type": "string",
          "start_date": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "latest_heartbeat": "1970-01-01T00:00:00Z",
          "executor_class": "string",
          "hostname": "string",
          "unixname": "string",
          "team_names": [
            "string"
          ],
          "bundle_names": [
            "string"
          ],
          "dag_display_name": "string"
        },
        "dag_version": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "version_number": 0,
          "dag_id": "string",
          "bundle_name": "string",
          "bundle_version": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "dag_display_name": "string",
          "bundle_url": "string"
        },
        "team_name": "string",
        "state_reason": "string",
        "retry_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-hitl-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HITLDetailCollection](#schemahitldetailcollection)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-task">Task</h1>

## Get Tasks

<a id="opIdget_tasks"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/tasks`

Get tasks for Dag.

<h3 id="get-tasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|order_by|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "tasks": [
    {
      "task_id": "string",
      "task_display_name": "string",
      "owner": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "trigger_rule": "string",
      "depends_on_past": true,
      "wait_for_downstream": true,
      "retries": 0,
      "queue": "string",
      "pool": "string",
      "pool_slots": 0,
      "execution_timeout": {
        "__type": "TimeDelta",
        "days": 0,
        "seconds": 0,
        "microseconds": 0
      },
      "retry_delay": {
        "__type": "TimeDelta",
        "days": 0,
        "seconds": 0,
        "microseconds": 0
      },
      "retry_exponential_backoff": 0,
      "priority_weight": 0,
      "weight_rule": "string",
      "ui_color": "string",
      "ui_fgcolor": "string",
      "template_fields": [
        "string"
      ],
      "downstream_task_ids": [
        "string"
      ],
      "doc_md": "string",
      "operator_name": "string",
      "params": {},
      "class_ref": {},
      "is_mapped": true,
      "extra_links": [
        "string"
      ]
    }
  ],
  "total_entries": 0
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-tasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskCollectionResponse](#schemataskcollectionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Task

<a id="opIdget_task"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/v2/dags/string/tasks/{task_id}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/tasks/{task_id}`

Get simplified representation of a task.

Pass ``version_number`` (e.g. a task instance's ``dag_version.version_number``) to get the task
as defined in that Dag version. Without it the latest version is used. Returns 404 if that
version of the Dag does not exist.

<h3 id="get-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|task_id|path|object|true|none|
|version_number|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
{
  "task_id": "string",
  "task_display_name": "string",
  "owner": "string",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "trigger_rule": "string",
  "depends_on_past": true,
  "wait_for_downstream": true,
  "retries": 0,
  "queue": "string",
  "pool": "string",
  "pool_slots": 0,
  "execution_timeout": {
    "__type": "TimeDelta",
    "days": 0,
    "seconds": 0,
    "microseconds": 0
  },
  "retry_delay": {
    "__type": "TimeDelta",
    "days": 0,
    "seconds": 0,
    "microseconds": 0
  },
  "retry_exponential_backoff": 0,
  "priority_weight": 0,
  "weight_rule": "string",
  "ui_color": "string",
  "ui_fgcolor": "string",
  "template_fields": [
    "string"
  ],
  "downstream_task_ids": [
    "string"
  ],
  "doc_md": "string",
  "operator_name": "string",
  "params": {},
  "class_ref": {},
  "is_mapped": true,
  "extra_links": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[TaskResponse](#schemataskresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-variable">Variable</h1>

## Get Variable

<a id="opIdget_variable"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/variables/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/variables/{variable_key}`

Get a variable entry.

<h3 id="get-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable_key|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": "string",
  "description": "string",
  "is_encrypted": true,
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VariableResponse](#schemavariableresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Delete Variable

<a id="opIddelete_variable"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/variables/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/variables/{variable_key}`

Delete a variable entry.

<h3 id="delete-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable_key|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="delete-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful Response|None|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Patch Variable

<a id="opIdpatch_variable"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/variables/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string",
    "value": null,
    "description": "string",
    "team_name": "string"
  }'
```

`PATCH /api/v2/variables/{variable_key}`

Update a variable by key.

> Body parameter

```json
{
  "key": "string",
  "value": null,
  "description": "string",
  "team_name": "string"
}
```

<h3 id="patch-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable_key|path|string|true|none|
|update_mask|query|[string] \| null|false|none|
|body|body|[VariableBody](#schemavariablebody)|true|none|
|» key|body|string|true|none|
|» value|body|[JsonValue](#schemajsonvalue)|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": "string",
  "description": "string",
  "is_encrypted": true,
  "team_name": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="patch-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VariableResponse](#schemavariableresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Variables

<a id="opIdget_variables"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/variables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/variables`

Get all Variables entries.

<h3 id="get-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `key, id, _val, description, is_encrypted, team_name`|
|variable_key_pattern|query|string \| null|false|Case-insensitive substring match (SQL `ILIKE`). Slower than `variable_key_prefix_pattern` on large tables — see "Filtering with pattern parameters".|
|variable_key_prefix_pattern|query|string \| null|false|Case-sensitive, index-friendly prefix match. See "Filtering with pattern parameters".|

> Example responses

> 200 Response

```json
{
  "variables": [
    {
      "key": "string",
      "value": "string",
      "description": "string",
      "is_encrypted": true,
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="get-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VariableCollectionResponse](#schemavariablecollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Post Variable

<a id="opIdpost_variable"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string",
    "value": null,
    "description": "string",
    "team_name": "string"
  }'
```

`POST /api/v2/variables`

Create a variable.

> Body parameter

```json
{
  "key": "string",
  "value": null,
  "description": "string",
  "team_name": "string"
}
```

<h3 id="post-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VariableBody](#schemavariablebody)|true|none|
|» key|body|string|true|none|
|» value|body|[JsonValue](#schemajsonvalue)|true|none|
|» description|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» team_name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 201 Response

```json
{
  "key": "string",
  "value": "string",
  "description": "string",
  "is_encrypted": true,
  "team_name": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
}
```

> 409 Response

```json
{
  "detail": "string"
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

<h3 id="post-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|[VariableResponse](#schemavariableresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|409|Conflict|Conflict|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Bulk Variables

<a id="opIdbulk_variables"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/variables \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actions": [
      {
        "action": "create",
        "entities": [
          {
            "key": "string",
            "value": null,
            "description": "string",
            "team_name": "string"
          }
        ],
        "action_on_existence": "fail"
      }
    ]
  }'
```

`PATCH /api/v2/variables`

Bulk create, update, and delete variables.

> Body parameter

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "key": "string",
          "value": null,
          "description": "string",
          "team_name": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

<h3 id="bulk-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BulkBody_VariableBody_](#schemabulkbody_variablebody_)|true|none|
|» actions|body|[[BulkCreateAction_VariableBody_](#schemabulkcreateaction_variablebody_) \| [BulkUpdateAction_VariableBody_](#schemabulkupdateaction_variablebody_) \| [BulkDeleteAction_VariableBody_](#schemabulkdeleteaction_variablebody_)]|true|none|
|» » *oneOf*|body|[BulkCreateAction_VariableBody_](#schemabulkcreateaction_variablebody_)|false|none|
|» » *oneOf*|body|[BulkUpdateAction_VariableBody_](#schemabulkupdateaction_variablebody_)|false|none|
|» » *oneOf*|body|[BulkDeleteAction_VariableBody_](#schemabulkdeleteaction_variablebody_)|false|none|

> Example responses

> 200 Response

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
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

<h3 id="bulk-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BulkResponse](#schemabulkresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dag-parsing">DAG Parsing</h1>

## Reparse Dag File

<a id="opIdreparse_dag_file"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/parseDagFile/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /api/v2/parseDagFile/{file_token}`

Request re-parsing a Dag file.

<h3 id="reparse-dag-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_token|path|string|true|none|

> Example responses

> 201 Response

```json
null
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="reparse-dag-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful Response|Inline|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-dagversion">DagVersion</h1>

## Experimental: Compare what two stored versions of a Dag currently hold.

<a id="opIdget_dag_version_diff"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/v2/dags/string/dagVersions/diff?base_version_number=1&target_version_number=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagVersions/diff`

🚧 This is an experimental endpoint and may change or be removed without notice.

Reports observed state — what the two stored versions currently hold — not why a version was created. Version access returns the changed structure with identifying path components masked; the raw values behind those changes, and the paths that name them, are disclosed only to a caller who may also read the Dag's code.

<h3 id="experimental-compare-what-two-stored-versions-of-a-dag-currently-hold-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|base_version_number|query|integer|true|Version to compare from.|
|target_version_number|query|integer|true|Version to compare to.|
|max_changes|query|integer|false|Largest number of records `changes` may hold. A repeat of a path already recorded does not count towards it, and `truncated` says whether the bound dropped anything.|

> Example responses

> 200 Response

```json
{
  "diff_schema_version": 0,
  "base_version_number": 0,
  "target_version_number": 0,
  "serializer_versions": {
    "base": 0,
    "target": 0
  },
  "mode": "observed_state",
  "unavailable_reason": "string",
  "values_status": "available",
  "truncated": true,
  "total_changes": 0,
  "changes": [
    {
      "path": "string",
      "operation": "added",
      "category": "asset",
      "impact": "authorization",
      "occurrence_count": 0,
      "before_digest": "string",
      "after_digest": "string",
      "before_value": null,
      "after_value": null
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="experimental-compare-what-two-stored-versions-of-a-dag-currently-hold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DagVersionDiffResponse](#schemadagversiondiffresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Version

<a id="opIdget_dag_version"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagVersions/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagVersions/{version_number}`

Get one Dag Version.

<h3 id="get-dag-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|version_number|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "version_number": 0,
  "dag_id": "string",
  "bundle_name": "string",
  "bundle_version": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string",
  "bundle_url": "string"
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DagVersionResponse](#schemadagversionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

## Get Dag Versions

<a id="opIdget_dag_versions"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/dags/string/dagVersions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/dags/{dag_id}/dagVersions`

Get all Dag Versions.

This endpoint allows specifying `~` as the dag_id to retrieve Dag Versions for all Dags.

<h3 id="get-dag-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dag_id|path|string|true|none|
|limit|query|integer|false|none|
|offset|query|integer|false|none|
|version_number|query|integer|false|none|
|bundle_name|query|string|false|none|
|bundle_version|query|string \| null|false|none|
|order_by|query|[string]|false|Attributes to order by, multi criteria sort is supported. Prefix with `-` for descending order. Supported attributes: `id, version_number, bundle_name, bundle_version`|

> Example responses

> 200 Response

```json
{
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "total_entries": 0
}
```

> 401 Response

```json
{
  "detail": "string"
}
```

> 403 Response

```json
{
  "detail": "string"
}
```

> 404 Response

```json
{
  "detail": "string"
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

<h3 id="get-dag-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DAGVersionCollectionResponse](#schemadagversioncollectionresponse)|
|401|Unauthorized|Unauthorized|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|403|Forbidden|Forbidden|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|404|Not Found|Not Found|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

<h1 id="airflow-api-monitor">Monitor</h1>

## Get Health

<a id="opIdget_health"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/monitor/health \
  -H 'Accept: application/json'
```

`GET /api/v2/monitor/health`

> Example responses

> 200 Response

```json
{
  "metadatabase": {
    "status": "healthy"
  },
  "scheduler": {
    "status": "healthy",
    "latest_scheduler_heartbeat": "string",
    "detailed_status": "healthy",
    "instances": [
      {
        "hostname": "string",
        "latest_scheduler_heartbeat": "string"
      }
    ]
  },
  "triggerer": {
    "status": "healthy",
    "latest_triggerer_heartbeat": "string",
    "detailed_status": "healthy",
    "instances": [
      {
        "hostname": "string",
        "latest_triggerer_heartbeat": "string",
        "team_names": [
          "string"
        ]
      }
    ]
  },
  "dag_processor": {
    "status": "healthy",
    "latest_dag_processor_heartbeat": "string",
    "detailed_status": "healthy",
    "instances": [
      {
        "hostname": "string",
        "latest_dag_processor_heartbeat": "string",
        "bundle_names": [
          "string"
        ]
      }
    ]
  }
}
```

<h3 id="get-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HealthInfoResponse](#schemahealthinforesponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-version">Version</h1>

## Get Version

<a id="opIdget_version"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/version \
  -H 'Accept: application/json'
```

`GET /api/v2/version`

Get version information.

> Example responses

> 200 Response

```json
{
  "version": "string",
  "git_version": "string"
}
```

<h3 id="get-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[VersionInfo](#schemaversioninfo)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="airflow-api-login">Login</h1>

## Login

<a id="opIdlogin"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/auth/login \
  -H 'Accept: application/json'
```

`GET /api/v2/auth/login`

Redirect to the login URL depending on the AuthManager configured.

<h3 id="login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|next|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 307 Response

```json
{
  "detail": "string"
}
```

> 400 Response

```json
{
  "detail": "string"
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

<h3 id="login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|307|Temporary Redirect|Temporary Redirect|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|400|Bad Request|Bad Request|[HTTPExceptionResponse](#schemahttpexceptionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Cli Login Metadata

<a id="opIdget_cli_login_metadata"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/auth/cli/metadata \
  -H 'Accept: application/json'
```

`GET /api/v2/auth/cli/metadata`

Return the login methods the AuthManager configured offers to command-line clients.

> Example responses

> 200 Response

```json
{
  "grant_types_supported": [
    "string"
  ],
  "code_challenge_methods_supported": [
    "string"
  ],
  "authorization_endpoint": "string",
  "device_authorization_endpoint": "string",
  "token_endpoint": "string"
}
```

<h3 id="get-cli-login-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[CliLoginMetadataResponse](#schemacliloginmetadataresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Logout

<a id="opIdlogout"></a>

> Code samples

```bash
curl http://localhost:8080/api/v2/auth/logout \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/auth/logout`

Logout the user.

> Example responses

> 200 Response

```json
null
```

> 307 Response

```json
{
  "detail": "string"
}
```

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|307|Temporary Redirect|Temporary Redirect|[HTTPExceptionResponse](#schemahttpexceptionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2PasswordBearer, HTTPBearer
</aside>

# Schemas

<h2 id="tocS_AppBuilderMenuItemResponse">AppBuilderMenuItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaappbuildermenuitemresponse"></a>
<a id="schema_AppBuilderMenuItemResponse"></a>
<a id="tocSappbuildermenuitemresponse"></a>
<a id="tocsappbuildermenuitemresponse"></a>

```json
{
  "name": "string",
  "href": "string",
  "category": "string"
}
```

Serializer for AppBuilder Menu Item responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|href|string|true|none|none|
|category|string \| null|false|none|none|

<h2 id="tocS_AppBuilderViewResponse">AppBuilderViewResponse</h2>
<!-- backwards compatibility -->
<a id="schemaappbuilderviewresponse"></a>
<a id="schema_AppBuilderViewResponse"></a>
<a id="tocSappbuilderviewresponse"></a>
<a id="tocsappbuilderviewresponse"></a>

```json
{
  "name": "string",
  "category": "string",
  "view": "string",
  "label": "string"
}
```

Serializer for AppBuilder View responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|category|string \| null|false|none|none|
|view|string \| null|false|none|none|
|label|string \| null|false|none|none|

<h2 id="tocS_AssetAliasCollectionResponse">AssetAliasCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetaliascollectionresponse"></a>
<a id="schema_AssetAliasCollectionResponse"></a>
<a id="tocSassetaliascollectionresponse"></a>
<a id="tocsassetaliascollectionresponse"></a>

```json
{
  "asset_aliases": [
    {
      "id": 0,
      "name": "string",
      "group": "string"
    }
  ],
  "total_entries": 0
}
```

Asset alias collection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_aliases|[[AssetAliasResponse](#schemaassetaliasresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_AssetAliasResponse">AssetAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetaliasresponse"></a>
<a id="schema_AssetAliasResponse"></a>
<a id="tocSassetaliasresponse"></a>
<a id="tocsassetaliasresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "group": "string"
}
```

Asset alias serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|name|string|true|none|none|
|group|string|true|none|none|

<h2 id="tocS_AssetCollectionResponse">AssetCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetcollectionresponse"></a>
<a id="schema_AssetCollectionResponse"></a>
<a id="tocSassetcollectionresponse"></a>
<a id="tocsassetcollectionresponse"></a>

```json
{
  "assets": [
    {
      "id": 0,
      "name": "string",
      "uri": "string",
      "group": "string",
      "extra": {
        "property1": null,
        "property2": null
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "scheduled_dags": [
        {
          "dag_id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "team_name": "string"
        }
      ],
      "producing_tasks": [
        {
          "dag_id": "string",
          "task_id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z",
          "team_name": "string"
        }
      ],
      "consuming_tasks": [
        {
          "dag_id": "string",
          "task_id": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "aliases": [
        {
          "id": 0,
          "name": "string",
          "group": "string"
        }
      ],
      "watchers": [
        {
          "name": "string",
          "trigger_id": 0,
          "created_date": "1970-01-01T00:00:00Z"
        }
      ],
      "last_asset_event": {
        "id": 0,
        "timestamp": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "total_entries": 0
}
```

Asset collection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[AssetResponse](#schemaassetresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_AssetEventAccessControl">AssetEventAccessControl</h2>
<!-- backwards compatibility -->
<a id="schemaasseteventaccesscontrol"></a>
<a id="schema_AssetEventAccessControl"></a>
<a id="tocSasseteventaccesscontrol"></a>
<a id="tocsasseteventaccesscontrol"></a>

```json
{
  "consumer_teams": [
    "string"
  ],
  "allow_global": true
}
```

Access control settings for asset event consumer team filtering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer_teams|[string] \| null|false|none|none|
|allow_global|boolean|false|none|none|

<h2 id="tocS_AssetEventCollectionResponse">AssetEventCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasseteventcollectionresponse"></a>
<a id="schema_AssetEventCollectionResponse"></a>
<a id="tocSasseteventcollectionresponse"></a>
<a id="tocsasseteventcollectionresponse"></a>

```json
{
  "asset_events": [
    {
      "id": 0,
      "asset_id": 0,
      "uri": "string",
      "name": "string",
      "group": "string",
      "extra": {
        "property1": null,
        "property2": null
      },
      "source_task_id": "string",
      "source_dag_id": "string",
      "source_run_id": "string",
      "source_map_index": 0,
      "source_task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created_dagruns": [
        {
          "run_id": "string",
          "dag_id": "string",
          "logical_date": "1970-01-01T00:00:00Z",
          "start_date": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "state": "string",
          "data_interval_start": "1970-01-01T00:00:00Z",
          "data_interval_end": "1970-01-01T00:00:00Z",
          "partition_key": "string",
          "triggering": true
        }
      ],
      "timestamp": "1970-01-01T00:00:00Z",
      "partition_key": "string"
    }
  ],
  "total_entries": 0
}
```

Asset event collection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_events|[[AssetEventResponse](#schemaasseteventresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_AssetEventResponse">AssetEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasseteventresponse"></a>
<a id="schema_AssetEventResponse"></a>
<a id="tocSasseteventresponse"></a>
<a id="tocsasseteventresponse"></a>

```json
{
  "id": 0,
  "asset_id": 0,
  "uri": "string",
  "name": "string",
  "group": "string",
  "extra": {
    "property1": null,
    "property2": null
  },
  "source_task_id": "string",
  "source_dag_id": "string",
  "source_run_id": "string",
  "source_map_index": 0,
  "source_task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created_dagruns": [
    {
      "run_id": "string",
      "dag_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "state": "string",
      "data_interval_start": "1970-01-01T00:00:00Z",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "partition_key": "string",
      "triggering": true
    }
  ],
  "timestamp": "1970-01-01T00:00:00Z",
  "partition_key": "string"
}
```

Asset event serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|asset_id|integer|true|none|none|
|uri|string \| null|false|none|none|
|name|string \| null|false|none|none|
|group|string \| null|false|none|none|
|extra|object \| null|false|none|none|
|source_task_id|string \| null|false|none|none|
|source_dag_id|string \| null|false|none|none|
|source_run_id|string \| null|false|none|none|
|source_map_index|integer|true|none|none|
|source_task_instance_id|string(uuid) \| null|false|none|none|
|created_dagruns|[[DagRunAssetReference](#schemadagrunassetreference)]|true|none|none|
|timestamp|string(date-time)|true|none|none|
|partition_key|string \| null|false|none|none|

<h2 id="tocS_AssetExpressionAlias">AssetExpressionAlias</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionalias"></a>
<a id="schema_AssetExpressionAlias"></a>
<a id="tocSassetexpressionalias"></a>
<a id="tocsassetexpressionalias"></a>

```json
{
  "alias": {
    "name": "string",
    "group": "string"
  }
}
```

An asset alias leaf: ``{"alias": {"name": ..., "group": ...}}``.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|[AssetExpressionAliasInfo](#schemaassetexpressionaliasinfo)|true|none|Body of an ``alias`` leaf node.|

<h2 id="tocS_AssetExpressionAliasInfo">AssetExpressionAliasInfo</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionaliasinfo"></a>
<a id="schema_AssetExpressionAliasInfo"></a>
<a id="tocSassetexpressionaliasinfo"></a>
<a id="tocsassetexpressionaliasinfo"></a>

```json
{
  "name": "string",
  "group": "string"
}
```

Body of an ``alias`` leaf node.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|group|string|true|none|none|

<h2 id="tocS_AssetExpressionAll">AssetExpressionAll</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionall"></a>
<a id="schema_AssetExpressionAll"></a>
<a id="tocSassetexpressionall"></a>
<a id="tocsassetexpressionall"></a>

```json
{
  "all": [
    {
      "asset": {
        "uri": "string",
        "name": "string",
        "group": "string",
        "id": 0,
        "hidden": false
      }
    }
  ]
}
```

An "and" node: ``{"all": [...]}`` -- satisfied when all children are satisfied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|[[AssetExpressionAsset](#schemaassetexpressionasset) \| [AssetExpressionAlias](#schemaassetexpressionalias) \| [AssetExpressionRef](#schemaassetexpressionref) \| [AssetExpressionAny](#schemaassetexpressionany) \| [AssetExpressionAll](#schemaassetexpressionall)]|true|none|none|

<h2 id="tocS_AssetExpressionAny">AssetExpressionAny</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionany"></a>
<a id="schema_AssetExpressionAny"></a>
<a id="tocSassetexpressionany"></a>
<a id="tocsassetexpressionany"></a>

```json
{
  "any": [
    {
      "asset": {
        "uri": "string",
        "name": "string",
        "group": "string",
        "id": 0,
        "hidden": false
      }
    }
  ]
}
```

An "or" node: ``{"any": [...]}`` -- satisfied when any child is satisfied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|any|[[AssetExpressionAsset](#schemaassetexpressionasset) \| [AssetExpressionAlias](#schemaassetexpressionalias) \| [AssetExpressionRef](#schemaassetexpressionref) \| [AssetExpressionAny](#schemaassetexpressionany) \| [AssetExpressionAll](#schemaassetexpressionall)]|true|none|none|

<h2 id="tocS_AssetExpressionAsset">AssetExpressionAsset</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionasset"></a>
<a id="schema_AssetExpressionAsset"></a>
<a id="tocSassetexpressionasset"></a>
<a id="tocsassetexpressionasset"></a>

```json
{
  "asset": {
    "uri": "string",
    "name": "string",
    "group": "string",
    "id": 0,
    "hidden": false
  }
}
```

An asset leaf: ``{"asset": {"uri": ..., "name": ..., "group": ...}}``.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[AssetExpressionAssetInfo](#schemaassetexpressionassetinfo)|true|none|Body of an ``asset`` leaf node.<br><br>``id`` is injected by ``DagModelOperation.update_dag_asset_expression`` when the expression is<br>persisted; ``BaseAsset.as_expression()`` itself only emits ``uri``/``name``/``group``. It is left<br>optional so a row persisted before id-enrichment (or migrated from the pre-3.0 dataset format)<br>degrades gracefully instead of failing response validation.<br><br>A leaf the caller is not authorized to read is served with ``hidden`` set and ``uri``, ``name``<br>and ``id`` blanked (see ``airflow.api_fastapi.common.asset_expression``), so the shape of the<br>schedule stays visible without revealing which asset it waits on.|

<h2 id="tocS_AssetExpressionAssetInfo">AssetExpressionAssetInfo</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionassetinfo"></a>
<a id="schema_AssetExpressionAssetInfo"></a>
<a id="tocSassetexpressionassetinfo"></a>
<a id="tocsassetexpressionassetinfo"></a>

```json
{
  "uri": "string",
  "name": "string",
  "group": "string",
  "id": 0,
  "hidden": false
}
```

Body of an ``asset`` leaf node.

``id`` is injected by ``DagModelOperation.update_dag_asset_expression`` when the expression is
persisted; ``BaseAsset.as_expression()`` itself only emits ``uri``/``name``/``group``. It is left
optional so a row persisted before id-enrichment (or migrated from the pre-3.0 dataset format)
degrades gracefully instead of failing response validation.

A leaf the caller is not authorized to read is served with ``hidden`` set and ``uri``, ``name``
and ``id`` blanked (see ``airflow.api_fastapi.common.asset_expression``), so the shape of the
schedule stays visible without revealing which asset it waits on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string \| null|true|none|none|
|name|string \| null|true|none|none|
|group|string|true|none|none|
|id|integer \| null|false|none|none|
|hidden|boolean|false|none|none|

<h2 id="tocS_AssetExpressionRef">AssetExpressionRef</h2>
<!-- backwards compatibility -->
<a id="schemaassetexpressionref"></a>
<a id="schema_AssetExpressionRef"></a>
<a id="tocSassetexpressionref"></a>
<a id="tocsassetexpressionref"></a>

```json
{
  "asset_ref": {
    "property1": "string",
    "property2": "string"
  }
}
```

An unresolved asset reference leaf: ``{"asset_ref": {"name": ...}}`` or ``{"asset_ref": {"uri": ...}}``.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_ref|object|true|none|none|

<h2 id="tocS_AssetResponse">AssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetresponse"></a>
<a id="schema_AssetResponse"></a>
<a id="tocSassetresponse"></a>
<a id="tocsassetresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "uri": "string",
  "group": "string",
  "extra": {
    "property1": null,
    "property2": null
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "scheduled_dags": [
    {
      "dag_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "producing_tasks": [
    {
      "dag_id": "string",
      "task_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "consuming_tasks": [
    {
      "dag_id": "string",
      "task_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "aliases": [
    {
      "id": 0,
      "name": "string",
      "group": "string"
    }
  ],
  "watchers": [
    {
      "name": "string",
      "trigger_id": 0,
      "created_date": "1970-01-01T00:00:00Z"
    }
  ],
  "last_asset_event": {
    "id": 0,
    "timestamp": "1970-01-01T00:00:00Z"
  }
}
```

Asset serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|name|string|true|none|none|
|uri|string|true|none|none|
|group|string|true|none|none|
|extra|object \| null|false|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|scheduled_dags|[[DagScheduleAssetReference](#schemadagscheduleassetreference)]|true|none|none|
|producing_tasks|[[TaskOutletAssetReference](#schemataskoutletassetreference)]|true|none|none|
|consuming_tasks|[[TaskInletAssetReference](#schemataskinletassetreference)]|true|none|none|
|aliases|[[AssetAliasResponse](#schemaassetaliasresponse)]|true|none|none|
|watchers|[[AssetWatcherResponse](#schemaassetwatcherresponse)]|true|none|none|
|last_asset_event|[LastAssetEventResponse](#schemalastasseteventresponse) \| null|false|none|none|

<h2 id="tocS_AssetStateStoreBody">AssetStateStoreBody</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatestorebody"></a>
<a id="schema_AssetStateStoreBody"></a>
<a id="tocSassetstatestorebody"></a>
<a id="tocsassetstatestorebody"></a>

```json
{
  "value": null
}
```

Request body for setting an asset state store value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[JsonValue](#schemajsonvalue)|true|none|none|

<h2 id="tocS_AssetStateStoreCollectionResponse">AssetStateStoreCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatestorecollectionresponse"></a>
<a id="schema_AssetStateStoreCollectionResponse"></a>
<a id="tocSassetstatestorecollectionresponse"></a>
<a id="tocsassetstatestorecollectionresponse"></a>

```json
{
  "asset_state_store": [
    {
      "key": "string",
      "value": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "last_updated_by": {
        "kind": "task",
        "dag_id": "string",
        "run_id": "string",
        "task_id": "string",
        "map_index": 0,
        "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "region_index": 0,
        "try_number": 0
      }
    }
  ],
  "total_entries": 0
}
```

All asset state store entries for an asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_state_store|[[AssetStateStoreResponse](#schemaassetstatestoreresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_AssetStateStoreLastUpdatedBy">AssetStateStoreLastUpdatedBy</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatestorelastupdatedby"></a>
<a id="schema_AssetStateStoreLastUpdatedBy"></a>
<a id="tocSassetstatestorelastupdatedby"></a>
<a id="tocsassetstatestorelastupdatedby"></a>

```json
{
  "kind": "task",
  "dag_id": "string",
  "run_id": "string",
  "task_id": "string",
  "map_index": 0,
  "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "try_number": 0
}
```

Writer info for the last write to an asset state store entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|[AssetStateStoreWriterKind](#schemaassetstatestorewriterkind)|true|none|Identifies what kind of writer last updated an asset state store entry.<br><br>``TASK`` — written by a task via the execution API.<br>``WATCHER`` — written by a ``BaseEventTrigger`` (no task instance).<br>``API`` — written directly through the Core API (e.g. manual admin write).|
|dag_id|string \| null|false|none|none|
|run_id|string \| null|false|none|none|
|task_id|string \| null|false|none|none|
|map_index|integer \| null|false|none|none|
|task_instance_id|string(uuid) \| null|false|none|none|
|region_id|string(uuid)|false|none|none|
|region_index|integer|false|none|none|
|try_number|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|task|
|kind|watcher|
|kind|api|

<h2 id="tocS_AssetStateStoreResponse">AssetStateStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatestoreresponse"></a>
<a id="schema_AssetStateStoreResponse"></a>
<a id="tocSassetstatestoreresponse"></a>
<a id="tocsassetstatestoreresponse"></a>

```json
{
  "key": "string",
  "value": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "last_updated_by": {
    "kind": "task",
    "dag_id": "string",
    "run_id": "string",
    "task_id": "string",
    "map_index": 0,
    "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "try_number": 0
  }
}
```

A single asset state store key/value pair with metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|[JsonValue](#schemajsonvalue)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|last_updated_by|[AssetStateStoreLastUpdatedBy](#schemaassetstatestorelastupdatedby) \| null|false|none|none|

<h2 id="tocS_AssetStateStoreWriterKind">AssetStateStoreWriterKind</h2>
<!-- backwards compatibility -->
<a id="schemaassetstatestorewriterkind"></a>
<a id="schema_AssetStateStoreWriterKind"></a>
<a id="tocSassetstatestorewriterkind"></a>
<a id="tocsassetstatestorewriterkind"></a>

```json
"task"
```

Identifies what kind of writer last updated an asset state store entry.

``TASK`` — written by a task via the execution API.
``WATCHER`` — written by a ``BaseEventTrigger`` (no task instance).
``API`` — written directly through the Core API (e.g. manual admin write).

<h2 id="tocS_AssetWatcherResponse">AssetWatcherResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetwatcherresponse"></a>
<a id="schema_AssetWatcherResponse"></a>
<a id="tocSassetwatcherresponse"></a>
<a id="tocsassetwatcherresponse"></a>

```json
{
  "name": "string",
  "trigger_id": 0,
  "created_date": "1970-01-01T00:00:00Z"
}
```

Asset watcher serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|trigger_id|integer|true|none|none|
|created_date|string(date-time)|true|none|none|

<h2 id="tocS_AsyncConnectionTestResponse">AsyncConnectionTestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasyncconnectiontestresponse"></a>
<a id="schema_AsyncConnectionTestResponse"></a>
<a id="tocSasyncconnectiontestresponse"></a>
<a id="tocsasyncconnectiontestresponse"></a>

```json
{
  "token": "string",
  "connection_id": "string",
  "state": "string",
  "result_message": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

Response returned when polling for the status of an enqueued connection test.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|
|connection_id|string|true|none|none|
|state|string|true|none|none|
|result_message|string \| null|false|none|none|
|created_at|string(date-time)|true|none|none|

<h2 id="tocS_BackfillCollectionResponse">BackfillCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackfillcollectionresponse"></a>
<a id="schema_BackfillCollectionResponse"></a>
<a id="tocSbackfillcollectionresponse"></a>
<a id="tocsbackfillcollectionresponse"></a>

```json
{
  "backfills": [
    {
      "id": 0,
      "dag_id": "string",
      "from_date": "1970-01-01T00:00:00Z",
      "to_date": "1970-01-01T00:00:00Z",
      "dag_run_conf": {},
      "is_paused": true,
      "reprocess_behavior": "failed",
      "max_active_runs": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "completed_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

Backfill Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backfills|[[BackfillResponse](#schemabackfillresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_BackfillDagRunCollectionResponse">BackfillDagRunCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackfilldagruncollectionresponse"></a>
<a id="schema_BackfillDagRunCollectionResponse"></a>
<a id="tocSbackfilldagruncollectionresponse"></a>
<a id="tocsbackfilldagruncollectionresponse"></a>

```json
{
  "backfill_dag_runs": [
    {
      "id": 0,
      "backfill_id": 0,
      "dag_id": "string",
      "dag_run_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "partition_key": "string",
      "sort_ordinal": 0,
      "exception_reason": "string",
      "dag_run_state": "queued"
    }
  ],
  "total_entries": 0
}
```

BackfillDagRun Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backfill_dag_runs|[[BackfillDagRunResponse](#schemabackfilldagrunresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_BackfillDagRunResponse">BackfillDagRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackfilldagrunresponse"></a>
<a id="schema_BackfillDagRunResponse"></a>
<a id="tocSbackfilldagrunresponse"></a>
<a id="tocsbackfilldagrunresponse"></a>

```json
{
  "id": 0,
  "backfill_id": 0,
  "dag_id": "string",
  "dag_run_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "partition_key": "string",
  "sort_ordinal": 0,
  "exception_reason": "string",
  "dag_run_state": "queued"
}
```

Serializer for a single BackfillDagRun entry with joined DagRun state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|backfill_id|integer|true|none|none|
|dag_id|string|true|none|none|
|dag_run_id|string \| null|false|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|partition_key|string \| null|true|none|none|
|sort_ordinal|integer|true|none|none|
|exception_reason|string \| null|true|none|none|
|dag_run_state|[DagRunState](#schemadagrunstate) \| null|false|none|none|

<h2 id="tocS_BackfillPostBody">BackfillPostBody</h2>
<!-- backwards compatibility -->
<a id="schemabackfillpostbody"></a>
<a id="schema_BackfillPostBody"></a>
<a id="tocSbackfillpostbody"></a>
<a id="tocsbackfillpostbody"></a>

```json
{
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "run_backwards": false,
  "dag_run_conf": {},
  "reprocess_behavior": "failed",
  "max_active_runs": 10,
  "run_on_latest_version": true,
  "drain_dag": false
}
```

Object used for create backfill request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|from_date|string(date-time)|true|none|none|
|to_date|string(date-time)|true|none|none|
|run_backwards|boolean|false|none|none|
|dag_run_conf|object \| null|false|none|none|
|reprocess_behavior|[ReprocessBehavior](#schemareprocessbehavior)|false|none|Internal enum for setting reprocess behavior in a backfill.<br><br>:meta private:|
|max_active_runs|integer|false|none|none|
|run_on_latest_version|boolean \| null|false|none|Run on the latest bundle version of the Dag for each backfilled run. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``True`` (the historical default for backfills).|
|drain_dag|boolean|false|none|Drain the Dag together with the backfill. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag. Ignored by the dry-run endpoint.|

#### Enumerated Values

|Property|Value|
|---|---|
|reprocess_behavior|failed|
|reprocess_behavior|completed|
|reprocess_behavior|none|

<h2 id="tocS_BackfillResponse">BackfillResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackfillresponse"></a>
<a id="schema_BackfillResponse"></a>
<a id="tocSbackfillresponse"></a>
<a id="tocsbackfillresponse"></a>

```json
{
  "id": 0,
  "dag_id": "string",
  "from_date": "1970-01-01T00:00:00Z",
  "to_date": "1970-01-01T00:00:00Z",
  "dag_run_conf": {},
  "is_paused": true,
  "reprocess_behavior": "failed",
  "max_active_runs": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "completed_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

Base serializer for Backfill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|dag_id|string|true|none|none|
|from_date|string(date-time)|true|none|none|
|to_date|string(date-time)|true|none|none|
|dag_run_conf|object \| null|true|none|none|
|is_paused|boolean|true|none|none|
|reprocess_behavior|[ReprocessBehavior](#schemareprocessbehavior)|true|none|Internal enum for setting reprocess behavior in a backfill.<br><br>:meta private:|
|max_active_runs|integer|true|none|none|
|created_at|string(date-time)|true|none|none|
|completed_at|string(date-time) \| null|true|none|none|
|updated_at|string(date-time)|true|none|none|
|dag_display_name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reprocess_behavior|failed|
|reprocess_behavior|completed|
|reprocess_behavior|none|

<h2 id="tocS_BaseInfoResponse">BaseInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemabaseinforesponse"></a>
<a id="schema_BaseInfoResponse"></a>
<a id="tocSbaseinforesponse"></a>
<a id="tocsbaseinforesponse"></a>

```json
{
  "status": "healthy"
}
```

Base info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[HealthStatus](#schemahealthstatus) \| null|true|none|none|

<h2 id="tocS_BulkActionNotOnExistence">BulkActionNotOnExistence</h2>
<!-- backwards compatibility -->
<a id="schemabulkactionnotonexistence"></a>
<a id="schema_BulkActionNotOnExistence"></a>
<a id="tocSbulkactionnotonexistence"></a>
<a id="tocsbulkactionnotonexistence"></a>

```json
"fail"
```

Bulk Action to be taken if the entity does not exist.

<h2 id="tocS_BulkActionOnExistence">BulkActionOnExistence</h2>
<!-- backwards compatibility -->
<a id="schemabulkactiononexistence"></a>
<a id="schema_BulkActionOnExistence"></a>
<a id="tocSbulkactiononexistence"></a>
<a id="tocsbulkactiononexistence"></a>

```json
"fail"
```

Bulk Action to be taken if the entity already exists or not.

<h2 id="tocS_BulkActionResponse">BulkActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkactionresponse"></a>
<a id="schema_BulkActionResponse"></a>
<a id="tocSbulkactionresponse"></a>
<a id="tocsbulkactionresponse"></a>

```json
{
  "success": [],
  "errors": []
}
```

Serializer for individual bulk action responses.

Represents the outcome of a single bulk operation (create, update, or delete).
The response includes a list of successful keys and any errors encountered during the operation.
This structure helps users understand which key actions succeeded and which failed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|[string]|false|none|A list of unique id/key representing successful operations.|
|errors|[object]|false|none|A list of errors encountered during the operation, each containing details about the issue.|

<h2 id="tocS_BulkBody_BulkDAGBody_">BulkBody_BulkDAGBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkbody_bulkdagbody_"></a>
<a id="schema_BulkBody_BulkDAGBody_"></a>
<a id="tocSbulkbody_bulkdagbody_"></a>
<a id="tocsbulkbody_bulkdagbody_"></a>

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "is_paused": true,
          "scheduling_state": "active",
          "dag_id": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[BulkCreateAction_BulkDAGBody_](#schemabulkcreateaction_bulkdagbody_) \| [BulkUpdateAction_BulkDAGBody_](#schemabulkupdateaction_bulkdagbody_) \| [BulkDeleteAction_BulkDAGBody_](#schemabulkdeleteaction_bulkdagbody_)]|true|none|none|

<h2 id="tocS_BulkBody_BulkDAGRunBody_">BulkBody_BulkDAGRunBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkbody_bulkdagrunbody_"></a>
<a id="schema_BulkBody_BulkDAGRunBody_"></a>
<a id="tocSbulkbody_bulkdagrunbody_"></a>
<a id="tocsbulkbody_bulkdagrunbody_"></a>

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "dag_run_id": "string",
          "dag_id": "string",
          "state": "queued",
          "note": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[BulkCreateAction_BulkDAGRunBody_](#schemabulkcreateaction_bulkdagrunbody_) \| [BulkUpdateAction_BulkDAGRunBody_](#schemabulkupdateaction_bulkdagrunbody_) \| [BulkDeleteAction_BulkDAGRunBody_](#schemabulkdeleteaction_bulkdagrunbody_)]|true|none|none|

<h2 id="tocS_BulkBody_BulkTaskInstanceBody_">BulkBody_BulkTaskInstanceBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkbody_bulktaskinstancebody_"></a>
<a id="schema_BulkBody_BulkTaskInstanceBody_"></a>
<a id="tocSbulkbody_bulktaskinstancebody_"></a>
<a id="tocsbulkbody_bulktaskinstancebody_"></a>

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "new_state": "removed",
          "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "region_index": 0,
          "note": "string",
          "include_upstream": false,
          "include_downstream": false,
          "include_future": false,
          "include_past": false,
          "task_id": "string",
          "map_index": 0,
          "dag_id": "string",
          "dag_run_id": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[BulkCreateAction_BulkTaskInstanceBody_](#schemabulkcreateaction_bulktaskinstancebody_) \| [BulkUpdateAction_BulkTaskInstanceBody_](#schemabulkupdateaction_bulktaskinstancebody_) \| [BulkDeleteAction_BulkTaskInstanceBody_](#schemabulkdeleteaction_bulktaskinstancebody_)]|true|none|none|

<h2 id="tocS_BulkBody_ConnectionBody_">BulkBody_ConnectionBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkbody_connectionbody_"></a>
<a id="schema_BulkBody_ConnectionBody_"></a>
<a id="tocSbulkbody_connectionbody_"></a>
<a id="tocsbulkbody_connectionbody_"></a>

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "connection_id": "string",
          "conn_type": "string",
          "description": "string",
          "host": "string",
          "login": "string",
          "schema": "string",
          "port": 0,
          "password": "string",
          "extra": "string",
          "team_name": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[BulkCreateAction_ConnectionBody_](#schemabulkcreateaction_connectionbody_) \| [BulkUpdateAction_ConnectionBody_](#schemabulkupdateaction_connectionbody_) \| [BulkDeleteAction_ConnectionBody_](#schemabulkdeleteaction_connectionbody_)]|true|none|none|

<h2 id="tocS_BulkBody_PoolBody_">BulkBody_PoolBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkbody_poolbody_"></a>
<a id="schema_BulkBody_PoolBody_"></a>
<a id="tocSbulkbody_poolbody_"></a>
<a id="tocsbulkbody_poolbody_"></a>

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "name": "string",
          "slots": -1,
          "description": "string",
          "include_deferred": false,
          "team_name": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[BulkCreateAction_PoolBody_](#schemabulkcreateaction_poolbody_) \| [BulkUpdateAction_PoolBody_](#schemabulkupdateaction_poolbody_) \| [BulkDeleteAction_PoolBody_](#schemabulkdeleteaction_poolbody_)]|true|none|none|

<h2 id="tocS_BulkBody_VariableBody_">BulkBody_VariableBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkbody_variablebody_"></a>
<a id="schema_BulkBody_VariableBody_"></a>
<a id="tocSbulkbody_variablebody_"></a>
<a id="tocsbulkbody_variablebody_"></a>

```json
{
  "actions": [
    {
      "action": "create",
      "entities": [
        {
          "key": "string",
          "value": null,
          "description": "string",
          "team_name": "string"
        }
      ],
      "action_on_existence": "fail"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[BulkCreateAction_VariableBody_](#schemabulkcreateaction_variablebody_) \| [BulkUpdateAction_VariableBody_](#schemabulkupdateaction_variablebody_) \| [BulkDeleteAction_VariableBody_](#schemabulkdeleteaction_variablebody_)]|true|none|none|

<h2 id="tocS_BulkCreateAction_BulkDAGBody_">BulkCreateAction_BulkDAGBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateaction_bulkdagbody_"></a>
<a id="schema_BulkCreateAction_BulkDAGBody_"></a>
<a id="tocSbulkcreateaction_bulkdagbody_"></a>
<a id="tocsbulkcreateaction_bulkdagbody_"></a>

```json
{
  "action": "create",
  "entities": [
    {
      "is_paused": true,
      "scheduling_state": "active",
      "dag_id": "string"
    }
  ],
  "action_on_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[BulkDAGBody](#schemabulkdagbody)]|true|none|A list of entities to be created.|
|action_on_existence|[BulkActionOnExistence](#schemabulkactiononexistence)|false|none|Bulk Action to be taken if the entity already exists or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_existence|fail|
|action_on_existence|skip|
|action_on_existence|overwrite|

<h2 id="tocS_BulkCreateAction_BulkDAGRunBody_">BulkCreateAction_BulkDAGRunBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateaction_bulkdagrunbody_"></a>
<a id="schema_BulkCreateAction_BulkDAGRunBody_"></a>
<a id="tocSbulkcreateaction_bulkdagrunbody_"></a>
<a id="tocsbulkcreateaction_bulkdagrunbody_"></a>

```json
{
  "action": "create",
  "entities": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "state": "queued",
      "note": "string"
    }
  ],
  "action_on_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[BulkDAGRunBody](#schemabulkdagrunbody)]|true|none|A list of entities to be created.|
|action_on_existence|[BulkActionOnExistence](#schemabulkactiononexistence)|false|none|Bulk Action to be taken if the entity already exists or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_existence|fail|
|action_on_existence|skip|
|action_on_existence|overwrite|

<h2 id="tocS_BulkCreateAction_BulkTaskInstanceBody_">BulkCreateAction_BulkTaskInstanceBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateaction_bulktaskinstancebody_"></a>
<a id="schema_BulkCreateAction_BulkTaskInstanceBody_"></a>
<a id="tocSbulkcreateaction_bulktaskinstancebody_"></a>
<a id="tocsbulkcreateaction_bulktaskinstancebody_"></a>

```json
{
  "action": "create",
  "entities": [
    {
      "new_state": "removed",
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "note": "string",
      "include_upstream": false,
      "include_downstream": false,
      "include_future": false,
      "include_past": false,
      "task_id": "string",
      "map_index": 0,
      "dag_id": "string",
      "dag_run_id": "string"
    }
  ],
  "action_on_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[BulkTaskInstanceBody](#schemabulktaskinstancebody)]|true|none|A list of entities to be created.|
|action_on_existence|[BulkActionOnExistence](#schemabulkactiononexistence)|false|none|Bulk Action to be taken if the entity already exists or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_existence|fail|
|action_on_existence|skip|
|action_on_existence|overwrite|

<h2 id="tocS_BulkCreateAction_ConnectionBody_">BulkCreateAction_ConnectionBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateaction_connectionbody_"></a>
<a id="schema_BulkCreateAction_ConnectionBody_"></a>
<a id="tocSbulkcreateaction_connectionbody_"></a>
<a id="tocsbulkcreateaction_connectionbody_"></a>

```json
{
  "action": "create",
  "entities": [
    {
      "connection_id": "string",
      "conn_type": "string",
      "description": "string",
      "host": "string",
      "login": "string",
      "schema": "string",
      "port": 0,
      "password": "string",
      "extra": "string",
      "team_name": "string"
    }
  ],
  "action_on_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[ConnectionBody](#schemaconnectionbody)]|true|none|A list of entities to be created.|
|action_on_existence|[BulkActionOnExistence](#schemabulkactiononexistence)|false|none|Bulk Action to be taken if the entity already exists or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_existence|fail|
|action_on_existence|skip|
|action_on_existence|overwrite|

<h2 id="tocS_BulkCreateAction_PoolBody_">BulkCreateAction_PoolBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateaction_poolbody_"></a>
<a id="schema_BulkCreateAction_PoolBody_"></a>
<a id="tocSbulkcreateaction_poolbody_"></a>
<a id="tocsbulkcreateaction_poolbody_"></a>

```json
{
  "action": "create",
  "entities": [
    {
      "name": "string",
      "slots": -1,
      "description": "string",
      "include_deferred": false,
      "team_name": "string"
    }
  ],
  "action_on_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[PoolBody](#schemapoolbody)]|true|none|A list of entities to be created.|
|action_on_existence|[BulkActionOnExistence](#schemabulkactiononexistence)|false|none|Bulk Action to be taken if the entity already exists or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_existence|fail|
|action_on_existence|skip|
|action_on_existence|overwrite|

<h2 id="tocS_BulkCreateAction_VariableBody_">BulkCreateAction_VariableBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkcreateaction_variablebody_"></a>
<a id="schema_BulkCreateAction_VariableBody_"></a>
<a id="tocSbulkcreateaction_variablebody_"></a>
<a id="tocsbulkcreateaction_variablebody_"></a>

```json
{
  "action": "create",
  "entities": [
    {
      "key": "string",
      "value": null,
      "description": "string",
      "team_name": "string"
    }
  ],
  "action_on_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[VariableBody](#schemavariablebody)]|true|none|A list of entities to be created.|
|action_on_existence|[BulkActionOnExistence](#schemabulkactiononexistence)|false|none|Bulk Action to be taken if the entity already exists or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_existence|fail|
|action_on_existence|skip|
|action_on_existence|overwrite|

<h2 id="tocS_BulkDAGBody">BulkDAGBody</h2>
<!-- backwards compatibility -->
<a id="schemabulkdagbody"></a>
<a id="schema_BulkDAGBody"></a>
<a id="tocSbulkdagbody"></a>
<a id="tocsbulkdagbody"></a>

```json
{
  "is_paused": true,
  "scheduling_state": "active",
  "dag_id": "string"
}
```

Request body for bulk update of Dags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_paused|boolean \| null|false|none|none|
|scheduling_state|[DagSchedulingState](#schemadagschedulingstate) \| null|false|none|none|
|dag_id|string|true|none|none|

<h2 id="tocS_BulkDAGRunBody">BulkDAGRunBody</h2>
<!-- backwards compatibility -->
<a id="schemabulkdagrunbody"></a>
<a id="schema_BulkDAGRunBody"></a>
<a id="tocSbulkdagrunbody"></a>
<a id="tocsbulkdagrunbody"></a>

```json
{
  "dag_run_id": "string",
  "dag_id": "string",
  "state": "queued",
  "note": "string"
}
```

Request body for bulk operations on Dag Runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_run_id|string|true|none|none|
|dag_id|string \| null|false|none|none|
|state|[DagRunMutableStates](#schemadagrunmutablestates) \| null|false|none|none|
|note|string \| null|false|none|none|

<h2 id="tocS_BulkDAGRunClearBody">BulkDAGRunClearBody</h2>
<!-- backwards compatibility -->
<a id="schemabulkdagrunclearbody"></a>
<a id="schema_BulkDAGRunClearBody"></a>
<a id="tocSbulkdagrunclearbody"></a>
<a id="tocsbulkdagrunclearbody"></a>

```json
{
  "partition_key": "string",
  "partition_date_start": "1970-01-01T00:00:00Z",
  "partition_date_end": "1970-01-01T00:00:00Z",
  "dry_run": true,
  "only_failed": false,
  "only_new": false,
  "run_on_latest_version": true,
  "note": "string",
  "dag_runs": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "state": "queued",
      "note": "string"
    }
  ]
}
```

Request body for the bulk clear Dag Runs endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition_key|string \| null|false|none|Select runs by exact partition key match. Mutually exclusive with the other partition selectors.|
|partition_date_start|string(date-time) \| null|false|none|Inclusive start of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|partition_date_end|string(date-time) \| null|false|none|Inclusive end of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|dry_run|boolean|false|none|none|
|only_failed|boolean|false|none|none|
|only_new|boolean|false|none|Only queue newly added tasks in the latest Dag version without clearing existing tasks.|
|run_on_latest_version|boolean \| null|false|none|(Experimental) Run on the latest bundle version of the Dag after clearing. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False``.|
|note|string \| null|false|none|none|
|dag_runs|[[BulkDAGRunBody](#schemabulkdagrunbody)]|false|none|none|

<h2 id="tocS_BulkDeleteAction_BulkDAGBody_">BulkDeleteAction_BulkDAGBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteaction_bulkdagbody_"></a>
<a id="schema_BulkDeleteAction_BulkDAGBody_"></a>
<a id="tocSbulkdeleteaction_bulkdagbody_"></a>
<a id="tocsbulkdeleteaction_bulkdagbody_"></a>

```json
{
  "action": "delete",
  "entities": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[string \| [BulkDAGBody](#schemabulkdagbody)]|true|none|A list of entity id/key or entity objects to be deleted.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkDeleteAction_BulkDAGRunBody_">BulkDeleteAction_BulkDAGRunBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteaction_bulkdagrunbody_"></a>
<a id="schema_BulkDeleteAction_BulkDAGRunBody_"></a>
<a id="tocSbulkdeleteaction_bulkdagrunbody_"></a>
<a id="tocsbulkdeleteaction_bulkdagrunbody_"></a>

```json
{
  "action": "delete",
  "entities": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[string \| [BulkDAGRunBody](#schemabulkdagrunbody)]|true|none|A list of entity id/key or entity objects to be deleted.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkDeleteAction_BulkTaskInstanceBody_">BulkDeleteAction_BulkTaskInstanceBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteaction_bulktaskinstancebody_"></a>
<a id="schema_BulkDeleteAction_BulkTaskInstanceBody_"></a>
<a id="tocSbulkdeleteaction_bulktaskinstancebody_"></a>
<a id="tocsbulkdeleteaction_bulktaskinstancebody_"></a>

```json
{
  "action": "delete",
  "entities": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[string \| [BulkTaskInstanceBody](#schemabulktaskinstancebody)]|true|none|A list of entity id/key or entity objects to be deleted.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkDeleteAction_ConnectionBody_">BulkDeleteAction_ConnectionBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteaction_connectionbody_"></a>
<a id="schema_BulkDeleteAction_ConnectionBody_"></a>
<a id="tocSbulkdeleteaction_connectionbody_"></a>
<a id="tocsbulkdeleteaction_connectionbody_"></a>

```json
{
  "action": "delete",
  "entities": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[string \| [ConnectionBody](#schemaconnectionbody)]|true|none|A list of entity id/key or entity objects to be deleted.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkDeleteAction_PoolBody_">BulkDeleteAction_PoolBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteaction_poolbody_"></a>
<a id="schema_BulkDeleteAction_PoolBody_"></a>
<a id="tocSbulkdeleteaction_poolbody_"></a>
<a id="tocsbulkdeleteaction_poolbody_"></a>

```json
{
  "action": "delete",
  "entities": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[string \| [PoolBody](#schemapoolbody)]|true|none|A list of entity id/key or entity objects to be deleted.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkDeleteAction_VariableBody_">BulkDeleteAction_VariableBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkdeleteaction_variablebody_"></a>
<a id="schema_BulkDeleteAction_VariableBody_"></a>
<a id="tocSbulkdeleteaction_variablebody_"></a>
<a id="tocsbulkdeleteaction_variablebody_"></a>

```json
{
  "action": "delete",
  "entities": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[string \| [VariableBody](#schemavariablebody)]|true|none|A list of entity id/key or entity objects to be deleted.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkResponse">BulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkresponse"></a>
<a id="schema_BulkResponse"></a>
<a id="tocSbulkresponse"></a>
<a id="tocsbulkresponse"></a>

```json
{
  "create": {
    "success": [],
    "errors": []
  },
  "update": {
    "success": [],
    "errors": []
  },
  "delete": {
    "success": [],
    "errors": []
  }
}
```

Serializer for responses to bulk entity operations.

This represents the results of create, update, and delete actions performed on entity in bulk.
Each action (if requested) is represented as a field containing details about successful keys and any encountered errors.
Fields are populated in the response only if the respective action was part of the request, else are set None.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create|[BulkActionResponse](#schemabulkactionresponse) \| null|false|none|Details of the bulk create operation, including successful keys and errors.|
|update|[BulkActionResponse](#schemabulkactionresponse) \| null|false|none|Details of the bulk update operation, including successful keys and errors.|
|delete|[BulkActionResponse](#schemabulkactionresponse) \| null|false|none|Details of the bulk delete operation, including successful keys and errors.|

<h2 id="tocS_BulkTaskInstanceBody">BulkTaskInstanceBody</h2>
<!-- backwards compatibility -->
<a id="schemabulktaskinstancebody"></a>
<a id="schema_BulkTaskInstanceBody"></a>
<a id="tocSbulktaskinstancebody"></a>
<a id="tocsbulktaskinstancebody"></a>

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false,
  "task_id": "string",
  "map_index": 0,
  "dag_id": "string",
  "dag_run_id": "string"
}
```

Request body for bulk update, and delete task instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_state|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|none|
|region_id|string(uuid) \| null|false|none|none|
|region_index|integer \| null|false|none|none|
|note|string \| null|false|none|none|
|include_upstream|boolean|false|none|none|
|include_downstream|boolean|false|none|none|
|include_future|boolean|false|none|none|
|include_past|boolean|false|none|none|
|task_id|string|true|none|none|
|map_index|integer \| null|false|none|none|
|dag_id|string \| null|false|none|none|
|dag_run_id|string \| null|false|none|none|

<h2 id="tocS_BulkUpdateAction_BulkDAGBody_">BulkUpdateAction_BulkDAGBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateaction_bulkdagbody_"></a>
<a id="schema_BulkUpdateAction_BulkDAGBody_"></a>
<a id="tocSbulkupdateaction_bulkdagbody_"></a>
<a id="tocsbulkupdateaction_bulkdagbody_"></a>

```json
{
  "action": "update",
  "entities": [
    {
      "is_paused": true,
      "scheduling_state": "active",
      "dag_id": "string"
    }
  ],
  "update_mask": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[BulkDAGBody](#schemabulkdagbody)]|true|none|A list of entities to be updated.|
|update_mask|[string] \| null|false|none|A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkUpdateAction_BulkDAGRunBody_">BulkUpdateAction_BulkDAGRunBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateaction_bulkdagrunbody_"></a>
<a id="schema_BulkUpdateAction_BulkDAGRunBody_"></a>
<a id="tocSbulkupdateaction_bulkdagrunbody_"></a>
<a id="tocsbulkupdateaction_bulkdagrunbody_"></a>

```json
{
  "action": "update",
  "entities": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "state": "queued",
      "note": "string"
    }
  ],
  "update_mask": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[BulkDAGRunBody](#schemabulkdagrunbody)]|true|none|A list of entities to be updated.|
|update_mask|[string] \| null|false|none|A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkUpdateAction_BulkTaskInstanceBody_">BulkUpdateAction_BulkTaskInstanceBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateaction_bulktaskinstancebody_"></a>
<a id="schema_BulkUpdateAction_BulkTaskInstanceBody_"></a>
<a id="tocSbulkupdateaction_bulktaskinstancebody_"></a>
<a id="tocsbulkupdateaction_bulktaskinstancebody_"></a>

```json
{
  "action": "update",
  "entities": [
    {
      "new_state": "removed",
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "note": "string",
      "include_upstream": false,
      "include_downstream": false,
      "include_future": false,
      "include_past": false,
      "task_id": "string",
      "map_index": 0,
      "dag_id": "string",
      "dag_run_id": "string"
    }
  ],
  "update_mask": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[BulkTaskInstanceBody](#schemabulktaskinstancebody)]|true|none|A list of entities to be updated.|
|update_mask|[string] \| null|false|none|A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkUpdateAction_ConnectionBody_">BulkUpdateAction_ConnectionBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateaction_connectionbody_"></a>
<a id="schema_BulkUpdateAction_ConnectionBody_"></a>
<a id="tocSbulkupdateaction_connectionbody_"></a>
<a id="tocsbulkupdateaction_connectionbody_"></a>

```json
{
  "action": "update",
  "entities": [
    {
      "connection_id": "string",
      "conn_type": "string",
      "description": "string",
      "host": "string",
      "login": "string",
      "schema": "string",
      "port": 0,
      "password": "string",
      "extra": "string",
      "team_name": "string"
    }
  ],
  "update_mask": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[ConnectionBody](#schemaconnectionbody)]|true|none|A list of entities to be updated.|
|update_mask|[string] \| null|false|none|A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkUpdateAction_PoolBody_">BulkUpdateAction_PoolBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateaction_poolbody_"></a>
<a id="schema_BulkUpdateAction_PoolBody_"></a>
<a id="tocSbulkupdateaction_poolbody_"></a>
<a id="tocsbulkupdateaction_poolbody_"></a>

```json
{
  "action": "update",
  "entities": [
    {
      "name": "string",
      "slots": -1,
      "description": "string",
      "include_deferred": false,
      "team_name": "string"
    }
  ],
  "update_mask": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[PoolBody](#schemapoolbody)]|true|none|A list of entities to be updated.|
|update_mask|[string] \| null|false|none|A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_BulkUpdateAction_VariableBody_">BulkUpdateAction_VariableBody_</h2>
<!-- backwards compatibility -->
<a id="schemabulkupdateaction_variablebody_"></a>
<a id="schema_BulkUpdateAction_VariableBody_"></a>
<a id="tocSbulkupdateaction_variablebody_"></a>
<a id="tocsbulkupdateaction_variablebody_"></a>

```json
{
  "action": "update",
  "entities": [
    {
      "key": "string",
      "value": null,
      "description": "string",
      "team_name": "string"
    }
  ],
  "update_mask": [
    "string"
  ],
  "action_on_non_existence": "fail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to be performed on the entities.|
|entities|[[VariableBody](#schemavariablebody)]|true|none|A list of entities to be updated.|
|update_mask|[string] \| null|false|none|A list of field names to update for each entity.Only these fields will be applied from the request body to the database model.Any extra fields provided will be ignored.|
|action_on_non_existence|[BulkActionNotOnExistence](#schemabulkactionnotonexistence)|false|none|Bulk Action to be taken if the entity does not exist.|

#### Enumerated Values

|Property|Value|
|---|---|
|action_on_non_existence|fail|
|action_on_non_existence|skip|

<h2 id="tocS_ClearPartitionsBody">ClearPartitionsBody</h2>
<!-- backwards compatibility -->
<a id="schemaclearpartitionsbody"></a>
<a id="schema_ClearPartitionsBody"></a>
<a id="tocSclearpartitionsbody"></a>
<a id="tocsclearpartitionsbody"></a>

```json
{
  "partition_key": "string",
  "partition_date_start": "1970-01-01T00:00:00Z",
  "partition_date_end": "1970-01-01T00:00:00Z",
  "run_id": "string",
  "clear_task_instances": false,
  "dry_run": true
}
```

Request body for the clearPartitions endpoint (column-reset: set partition fields to None).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition_key|string \| null|false|none|Select runs by exact partition key match. Mutually exclusive with the other partition selectors.|
|partition_date_start|string(date-time) \| null|false|none|Inclusive start of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|partition_date_end|string(date-time) \| null|false|none|Inclusive end of the partition date window. The value is interpreted in the Dag's timetable timezone. Mutually exclusive with the other partition selectors.|
|run_id|string \| null|false|none|Select runs by exact run_id. Mutually exclusive with ``partition_key`` and partition date window.|
|clear_task_instances|boolean|false|none|Also clear task instances on the matched runs.|
|dry_run|boolean|false|none|If True, compute counts without writing any changes.|

<h2 id="tocS_ClearPartitionsResponse">ClearPartitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclearpartitionsresponse"></a>
<a id="schema_ClearPartitionsResponse"></a>
<a id="tocSclearpartitionsresponse"></a>
<a id="tocsclearpartitionsresponse"></a>

```json
{
  "dag_runs_cleared": 0,
  "task_instances_cleared": 0,
  "dry_run": true
}
```

Response for the clearPartitions endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_runs_cleared|integer|true|none|none|
|task_instances_cleared|integer|true|none|none|
|dry_run|boolean|true|none|none|

<h2 id="tocS_ClearTaskInstanceCollectionResponse">ClearTaskInstanceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacleartaskinstancecollectionresponse"></a>
<a id="schema_ClearTaskInstanceCollectionResponse"></a>
<a id="tocScleartaskinstancecollectionresponse"></a>
<a id="tocscleartaskinstancecollectionresponse"></a>

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

Response for clear dag run dry run, which may contain new tasks without full TaskInstance data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_instances|[[TaskInstanceResponse](#schemataskinstanceresponse) \| [NewTaskResponse](#schemanewtaskresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_ClearTaskInstancesBody">ClearTaskInstancesBody</h2>
<!-- backwards compatibility -->
<a id="schemacleartaskinstancesbody"></a>
<a id="schema_ClearTaskInstancesBody"></a>
<a id="tocScleartaskinstancesbody"></a>
<a id="tocscleartaskinstancesbody"></a>

```json
{
  "dry_run": true,
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "only_failed": true,
  "only_running": false,
  "reset_dag_runs": true,
  "task_ids": [
    "string"
  ],
  "task_group_id": "string",
  "task_instance_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "whole_expansion_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "include_later_loop_iterations": true,
  "dag_run_id": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false,
  "run_on_latest_version": true,
  "prevent_running_task": false,
  "keep_task_state": false,
  "note": "string"
}
```

Request body for Clear Task Instances endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dry_run|boolean|false|none|none|
|start_date|string(date-time) \| null|false|none|none|
|end_date|string(date-time) \| null|false|none|none|
|only_failed|boolean|false|none|none|
|only_running|boolean|false|none|none|
|reset_dag_runs|boolean|false|none|none|
|task_ids|[string \| [string, integer]] \| null|false|none|A list of `task_id` or [`task_id`, `map_index`]. If only the `task_id` is provided for a mapped task, all of its map indices will be targeted.|
|task_group_id|string \| null|false|none|Clear every task in this task group. Mutually exclusive with `task_ids`. The group's tasks are resolved on the server from the dag structure, so all of them are targeted regardless of how many there are.|
|task_instance_ids|[string(uuid)] \| null|false|none|Exact current executions in one DAG run. Mutually exclusive with task_ids and task_group_id.|
|whole_expansion_ids|[string(uuid)]|false|none|Selected execution IDs whose entire mapped expansion should be cleared.|
|include_later_loop_iterations|boolean|false|none|Clear later iterations when the selection includes a loop gate.|
|dag_run_id|string \| null|false|none|none|
|include_upstream|boolean|false|none|none|
|include_downstream|boolean|false|none|none|
|include_future|boolean|false|none|none|
|include_past|boolean|false|none|none|
|run_on_latest_version|boolean \| null|false|none|(Experimental) Run on the latest bundle version of the dag after clearing the task instances. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False`` (the historical default for clear/rerun).|
|prevent_running_task|boolean|false|none|none|
|keep_task_state|boolean|false|none|Keep the task state store entries of the cleared task instances so the next attempt resumes from them. By default they are discarded, so the task starts over.|
|note|string \| null|false|none|none|

<h2 id="tocS_CliLoginMetadataResponse">CliLoginMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemacliloginmetadataresponse"></a>
<a id="schema_CliLoginMetadataResponse"></a>
<a id="tocScliloginmetadataresponse"></a>
<a id="tocscliloginmetadataresponse"></a>

```json
{
  "grant_types_supported": [
    "string"
  ],
  "code_challenge_methods_supported": [
    "string"
  ],
  "authorization_endpoint": "string",
  "device_authorization_endpoint": "string",
  "token_endpoint": "string"
}
```

Login methods the auth manager offers to command-line clients, named as in RFC 8414.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_types_supported|[string]|true|none|none|
|code_challenge_methods_supported|[string]|true|none|none|
|authorization_endpoint|string \| null|true|none|none|
|device_authorization_endpoint|string \| null|true|none|none|
|token_endpoint|string \| null|true|none|none|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "sections": [
    {
      "name": "string",
      "options": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    }
  ]
}
```

List of config sections with their options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sections|[[ConfigSection](#schemaconfigsection)]|true|none|none|

<h2 id="tocS_ConfigOption">ConfigOption</h2>
<!-- backwards compatibility -->
<a id="schemaconfigoption"></a>
<a id="schema_ConfigOption"></a>
<a id="tocSconfigoption"></a>
<a id="tocsconfigoption"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Config option.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string \| [string, string]|true|none|none|

<h2 id="tocS_ConfigSection">ConfigSection</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsection"></a>
<a id="schema_ConfigSection"></a>
<a id="tocSconfigsection"></a>
<a id="tocsconfigsection"></a>

```json
{
  "name": "string",
  "options": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

Config Section Schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|options|[[ConfigOption](#schemaconfigoption)]|true|none|none|

<h2 id="tocS_ConnectionBody">ConnectionBody</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionbody"></a>
<a id="schema_ConnectionBody"></a>
<a id="tocSconnectionbody"></a>
<a id="tocsconnectionbody"></a>

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

Connection Serializer for requests body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string|true|none|none|
|conn_type|string|true|none|none|
|description|string \| null|false|none|none|
|host|string \| null|false|none|none|
|login|string \| null|false|none|none|
|schema|string \| null|false|none|none|
|port|integer \| null|false|none|none|
|password|string \| null|false|none|none|
|extra|string \| null|false|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_ConnectionCollectionResponse">ConnectionCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncollectionresponse"></a>
<a id="schema_ConnectionCollectionResponse"></a>
<a id="tocSconnectioncollectionresponse"></a>
<a id="tocsconnectioncollectionresponse"></a>

```json
{
  "connections": [
    {
      "connection_id": "string",
      "conn_type": "string",
      "description": "string",
      "host": "string",
      "login": "string",
      "schema": "string",
      "port": 0,
      "password": "string",
      "extra": "string",
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

Connection Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[[ConnectionResponse](#schemaconnectionresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_ConnectionResponse">ConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionresponse"></a>
<a id="schema_ConnectionResponse"></a>
<a id="tocSconnectionresponse"></a>
<a id="tocsconnectionresponse"></a>

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string"
}
```

Connection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string|true|none|none|
|conn_type|string|true|none|none|
|description|string \| null|true|none|none|
|host|string \| null|true|none|none|
|login|string \| null|true|none|none|
|schema|string \| null|true|none|none|
|port|integer \| null|true|none|none|
|password|string \| null|true|none|none|
|extra|string \| null|true|none|none|
|team_name|string \| null|true|none|none|

<h2 id="tocS_ConnectionTestQueuedResponse">ConnectionTestQueuedResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontestqueuedresponse"></a>
<a id="schema_ConnectionTestQueuedResponse"></a>
<a id="tocSconnectiontestqueuedresponse"></a>
<a id="tocsconnectiontestqueuedresponse"></a>

```json
{
  "token": "string",
  "connection_id": "string",
  "state": "string"
}
```

Response returned when a connection test has been enqueued for worker execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|
|connection_id|string|true|none|none|
|state|string|true|none|none|

<h2 id="tocS_ConnectionTestRequestBody">ConnectionTestRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontestrequestbody"></a>
<a id="schema_ConnectionTestRequestBody"></a>
<a id="tocSconnectiontestrequestbody"></a>
<a id="tocsconnectiontestrequestbody"></a>

```json
{
  "connection_id": "string",
  "conn_type": "string",
  "description": "string",
  "host": "string",
  "login": "string",
  "schema": "string",
  "port": 0,
  "password": "string",
  "extra": "string",
  "team_name": "string",
  "commit_on_success": false,
  "executor": "string",
  "queue": "string"
}
```

Request body for enqueueing a connection test on a worker.

Inherits ``connection_id`` pattern, ``extra`` JSON validation, and
``team_name`` handling from ``ConnectionBody`` so tested connections share
the same input contract as persisted ones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_id|string|true|none|none|
|conn_type|string|true|none|none|
|description|string \| null|false|none|none|
|host|string \| null|false|none|none|
|login|string \| null|false|none|none|
|schema|string \| null|false|none|none|
|port|integer \| null|false|none|none|
|password|string \| null|false|none|none|
|extra|string \| null|false|none|none|
|team_name|string \| null|false|none|none|
|commit_on_success|boolean|false|none|If True, save or update the connection in the connection table when the test succeeds.|
|executor|string \| null|false|none|Executor name to dispatch the connection test to.|
|queue|string \| null|false|none|Worker queue to route the connection test to (executor-dependent).|

<h2 id="tocS_ConnectionTestResponse">ConnectionTestResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiontestresponse"></a>
<a id="schema_ConnectionTestResponse"></a>
<a id="tocSconnectiontestresponse"></a>
<a id="tocsconnectiontestresponse"></a>

```json
{
  "status": true,
  "message": "string"
}
```

Connection Test serializer for synchronous test responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|boolean|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_CreateAssetEventsBody">CreateAssetEventsBody</h2>
<!-- backwards compatibility -->
<a id="schemacreateasseteventsbody"></a>
<a id="schema_CreateAssetEventsBody"></a>
<a id="tocScreateasseteventsbody"></a>
<a id="tocscreateasseteventsbody"></a>

```json
{
  "asset_id": 0,
  "partition_key": "string",
  "extra": {},
  "access_control": {
    "consumer_teams": [
      "string"
    ],
    "allow_global": true
  }
}
```

Create asset events request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|integer|true|none|none|
|partition_key|string \| null|false|none|none|
|extra|object|false|none|none|
|access_control|[AssetEventAccessControl](#schemaasseteventaccesscontrol) \| null|false|none|none|

<h2 id="tocS_DAGCollectionResponse">DAGCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagcollectionresponse"></a>
<a id="schema_DAGCollectionResponse"></a>
<a id="tocSdagcollectionresponse"></a>
<a id="tocsdagcollectionresponse"></a>

```json
{
  "dags": [
    {
      "dag_id": "string",
      "dag_display_name": "string",
      "is_paused": true,
      "scheduling_state": "active",
      "is_stale": true,
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_parse_duration": 0,
      "last_expired": "1970-01-01T00:00:00Z",
      "bundle_name": "string",
      "bundle_version": "string",
      "relative_fileloc": "string",
      "fileloc": "string",
      "description": "string",
      "timetable_summary": "string",
      "timetable_description": "string",
      "timetable_partitioned": true,
      "timetable_periodic": true,
      "tags": [
        {
          "name": "string",
          "dag_id": "string",
          "dag_display_name": "string"
        }
      ],
      "max_active_tasks": 0,
      "max_active_runs": 0,
      "max_consecutive_failed_dag_runs": 0,
      "has_task_concurrency_limits": true,
      "has_import_errors": true,
      "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
      "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
      "next_dagrun_run_after": "1970-01-01T00:00:00Z",
      "allowed_run_types": [
        "backfill"
      ],
      "owners": [
        "string"
      ],
      "is_backfillable": true,
      "file_token": "string"
    }
  ],
  "total_entries": 0
}
```

Dag Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dags|[[DAGResponse](#schemadagresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DAGDetailsResponse">DAGDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagdetailsresponse"></a>
<a id="schema_DAGDetailsResponse"></a>
<a id="tocSdagdetailsresponse"></a>
<a id="tocsdagdetailsresponse"></a>

```json
{
  "dag_id": "string",
  "dag_display_name": "string",
  "is_paused": true,
  "scheduling_state": "active",
  "is_stale": true,
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_parse_duration": 0,
  "last_expired": "1970-01-01T00:00:00Z",
  "bundle_name": "string",
  "bundle_version": "string",
  "relative_fileloc": "string",
  "fileloc": "string",
  "description": "string",
  "timetable_summary": "string",
  "timetable_description": "string",
  "timetable_partitioned": true,
  "timetable_periodic": true,
  "tags": [
    {
      "name": "string",
      "dag_id": "string",
      "dag_display_name": "string"
    }
  ],
  "max_active_tasks": 0,
  "max_active_runs": 0,
  "max_consecutive_failed_dag_runs": 0,
  "has_task_concurrency_limits": true,
  "has_import_errors": true,
  "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_run_after": "1970-01-01T00:00:00Z",
  "allowed_run_types": [
    "backfill"
  ],
  "owners": [
    "string"
  ],
  "catchup": true,
  "dag_run_timeout": "string",
  "asset_expression": {
    "asset": {
      "uri": "string",
      "name": "string",
      "group": "string",
      "id": 0,
      "hidden": false
    }
  },
  "doc_md": "string",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "is_paused_upon_creation": true,
  "params": {},
  "render_template_as_native_obj": true,
  "template_search_path": [
    "string"
  ],
  "timezone": "string",
  "last_parsed": "1970-01-01T00:00:00Z",
  "default_args": {},
  "rerun_with_latest_version": true,
  "owner_links": {
    "property1": "string",
    "property2": "string"
  },
  "is_favorite": false,
  "active_runs_count": 0,
  "team_name": "string",
  "latest_dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "is_backfillable": true,
  "file_token": "string",
  "concurrency": 0
}
```

Specific serializer for Dag Details responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|dag_display_name|string|true|none|none|
|is_paused|boolean|true|none|none|
|scheduling_state|[DagSchedulingState](#schemadagschedulingstate)|false|none|States controlling whether a Dag can create and schedule work.|
|is_stale|boolean|true|none|none|
|last_parsed_time|string(date-time) \| null|true|none|none|
|last_parse_duration|number \| null|true|none|none|
|last_expired|string(date-time) \| null|true|none|none|
|bundle_name|string \| null|true|none|none|
|bundle_version|string \| null|true|none|none|
|relative_fileloc|string \| null|true|none|none|
|fileloc|string \| null|true|none|none|
|description|string \| null|true|none|none|
|timetable_summary|string \| null|true|none|none|
|timetable_description|string \| null|true|none|none|
|timetable_partitioned|boolean|true|none|none|
|timetable_periodic|boolean|true|none|none|
|tags|[[DagTagResponse](#schemadagtagresponse)]|true|none|none|
|max_active_tasks|integer|true|none|none|
|max_active_runs|integer \| null|true|none|none|
|max_consecutive_failed_dag_runs|integer|true|none|none|
|has_task_concurrency_limits|boolean|true|none|none|
|has_import_errors|boolean|true|none|none|
|next_dagrun_logical_date|string(date-time) \| null|true|none|none|
|next_dagrun_data_interval_start|string(date-time) \| null|true|none|none|
|next_dagrun_data_interval_end|string(date-time) \| null|true|none|none|
|next_dagrun_run_after|string(date-time) \| null|true|none|none|
|allowed_run_types|[[DagRunType](#schemadagruntype)] \| null|true|none|none|
|owners|[string]|true|none|none|
|catchup|boolean|true|none|none|
|dag_run_timeout|string(duration) \| null|true|none|none|
|asset_expression|[AssetExpressionAsset](#schemaassetexpressionasset) \| [AssetExpressionAlias](#schemaassetexpressionalias) \| [AssetExpressionRef](#schemaassetexpressionref) \| [AssetExpressionAny](#schemaassetexpressionany) \| [AssetExpressionAll](#schemaassetexpressionall) \| null|true|none|none|
|doc_md|string \| null|true|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|is_paused_upon_creation|boolean \| null|true|none|none|
|params|object \| null|true|none|none|
|render_template_as_native_obj|boolean|true|none|none|
|template_search_path|[string] \| null|true|none|none|
|timezone|string \| null|true|none|none|
|last_parsed|string(date-time) \| null|true|none|none|
|default_args|object \| null|true|none|none|
|rerun_with_latest_version|boolean \| null|false|none|none|
|owner_links|object \| null|false|none|none|
|is_favorite|boolean|false|none|none|
|active_runs_count|integer|false|none|none|
|team_name|string \| null|false|none|none|
|latest_dag_version|[DagVersionResponse](#schemadagversionresponse) \| null|true|none|none|
|is_backfillable|boolean|true|read-only|Whether this Dag's schedule supports backfilling.|
|file_token|string|true|read-only|Return file token.|
|concurrency|integer|true|read-only|**Deprecated.** Return max_active_tasks as concurrency.<br><br>Deprecated: Use max_active_tasks instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|scheduling_state|active|
|scheduling_state|draining|
|scheduling_state|paused|

<h2 id="tocS_DAGPatchBody">DAGPatchBody</h2>
<!-- backwards compatibility -->
<a id="schemadagpatchbody"></a>
<a id="schema_DAGPatchBody"></a>
<a id="tocSdagpatchbody"></a>
<a id="tocsdagpatchbody"></a>

```json
{
  "is_paused": true,
  "scheduling_state": "active"
}
```

Dag Serializer for updatable bodies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_paused|boolean \| null|false|none|none|
|scheduling_state|[DagSchedulingState](#schemadagschedulingstate) \| null|false|none|none|

<h2 id="tocS_DAGResponse">DAGResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagresponse"></a>
<a id="schema_DAGResponse"></a>
<a id="tocSdagresponse"></a>
<a id="tocsdagresponse"></a>

```json
{
  "dag_id": "string",
  "dag_display_name": "string",
  "is_paused": true,
  "scheduling_state": "active",
  "is_stale": true,
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_parse_duration": 0,
  "last_expired": "1970-01-01T00:00:00Z",
  "bundle_name": "string",
  "bundle_version": "string",
  "relative_fileloc": "string",
  "fileloc": "string",
  "description": "string",
  "timetable_summary": "string",
  "timetable_description": "string",
  "timetable_partitioned": true,
  "timetable_periodic": true,
  "tags": [
    {
      "name": "string",
      "dag_id": "string",
      "dag_display_name": "string"
    }
  ],
  "max_active_tasks": 0,
  "max_active_runs": 0,
  "max_consecutive_failed_dag_runs": 0,
  "has_task_concurrency_limits": true,
  "has_import_errors": true,
  "next_dagrun_logical_date": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_start": "1970-01-01T00:00:00Z",
  "next_dagrun_data_interval_end": "1970-01-01T00:00:00Z",
  "next_dagrun_run_after": "1970-01-01T00:00:00Z",
  "allowed_run_types": [
    "backfill"
  ],
  "owners": [
    "string"
  ],
  "is_backfillable": true,
  "file_token": "string"
}
```

Dag serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|dag_display_name|string|true|none|none|
|is_paused|boolean|true|none|none|
|scheduling_state|[DagSchedulingState](#schemadagschedulingstate)|false|none|States controlling whether a Dag can create and schedule work.|
|is_stale|boolean|true|none|none|
|last_parsed_time|string(date-time) \| null|true|none|none|
|last_parse_duration|number \| null|true|none|none|
|last_expired|string(date-time) \| null|true|none|none|
|bundle_name|string \| null|true|none|none|
|bundle_version|string \| null|true|none|none|
|relative_fileloc|string \| null|true|none|none|
|fileloc|string \| null|true|none|none|
|description|string \| null|true|none|none|
|timetable_summary|string \| null|true|none|none|
|timetable_description|string \| null|true|none|none|
|timetable_partitioned|boolean|true|none|none|
|timetable_periodic|boolean|true|none|none|
|tags|[[DagTagResponse](#schemadagtagresponse)]|true|none|none|
|max_active_tasks|integer|true|none|none|
|max_active_runs|integer \| null|true|none|none|
|max_consecutive_failed_dag_runs|integer|true|none|none|
|has_task_concurrency_limits|boolean|true|none|none|
|has_import_errors|boolean|true|none|none|
|next_dagrun_logical_date|string(date-time) \| null|true|none|none|
|next_dagrun_data_interval_start|string(date-time) \| null|true|none|none|
|next_dagrun_data_interval_end|string(date-time) \| null|true|none|none|
|next_dagrun_run_after|string(date-time) \| null|true|none|none|
|allowed_run_types|[[DagRunType](#schemadagruntype)] \| null|true|none|none|
|owners|[string]|true|none|none|
|is_backfillable|boolean|true|read-only|Whether this Dag's schedule supports backfilling.|
|file_token|string|true|read-only|Return file token.|

#### Enumerated Values

|Property|Value|
|---|---|
|scheduling_state|active|
|scheduling_state|draining|
|scheduling_state|paused|

<h2 id="tocS_DAGRunClearBody">DAGRunClearBody</h2>
<!-- backwards compatibility -->
<a id="schemadagrunclearbody"></a>
<a id="schema_DAGRunClearBody"></a>
<a id="tocSdagrunclearbody"></a>
<a id="tocsdagrunclearbody"></a>

```json
{
  "dry_run": true,
  "only_failed": false,
  "only_new": false,
  "run_on_latest_version": true,
  "note": "string"
}
```

Dag Run serializer for clear endpoint body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dry_run|boolean|false|none|none|
|only_failed|boolean|false|none|none|
|only_new|boolean|false|none|Only queue newly added tasks in the latest Dag version without clearing existing tasks.|
|run_on_latest_version|boolean \| null|false|none|(Experimental) Run on the latest bundle version of the Dag after clearing. If not specified, falls back to the DAG-level ``rerun_with_latest_version`` parameter, then the ``[core] rerun_with_latest_version`` config option, and finally ``False``.|
|note|string \| null|false|none|none|

<h2 id="tocS_DAGRunCollectionResponse">DAGRunCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagruncollectionresponse"></a>
<a id="schema_DAGRunCollectionResponse"></a>
<a id="tocSdagruncollectionresponse"></a>
<a id="tocsdagruncollectionresponse"></a>

```json
{
  "dag_runs": [
    {
      "dag_run_id": "string",
      "dag_id": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "queued_at": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "data_interval_start": "1970-01-01T00:00:00Z",
      "data_interval_end": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "last_scheduling_decision": "1970-01-01T00:00:00Z",
      "run_type": "backfill",
      "state": "queued",
      "triggered_by": "cli",
      "triggering_user_name": "string",
      "conf": {},
      "note": "string",
      "dag_versions": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "version_number": 0,
          "dag_id": "string",
          "bundle_name": "string",
          "bundle_version": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "dag_display_name": "string",
          "bundle_url": "string"
        }
      ],
      "bundle_version": "string",
      "dag_display_name": "string",
      "partition_key": "string",
      "partition_date": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

Dag Run collection response supporting both offset and cursor pagination.

A single flat model is used instead of a discriminated union
(``Annotated[Offset | Cursor, Field(discriminator=...)]``) because
the OpenAPI ``oneOf`` + ``discriminator`` construct is not handled
correctly by ``@hey-api/openapi-ts`` / ``@7nohe/openapi-react-query-codegen``:
return types degrade to ``unknown`` in JSDoc and can produce
incorrect TypeScript types (see hey-api/openapi-ts#1613, #3270).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_runs|[[DAGRunResponse](#schemadagrunresponse)]|true|none|none|
|total_entries|integer \| null|false|none|Number of matching items. For offset pagination this is the exact total. For cursor pagination it is capped at ``total_entries_limit``; a value equal to that limit means at least that many items match.|
|total_entries_limit|integer \| null|false|none|Cap applied to ``total_entries`` under cursor pagination. ``null`` for offset pagination, where ``total_entries`` is exact.|
|next_cursor|string \| null|false|none|Token pointing to the next page. Populated for cursor pagination, ``null`` when using offset pagination or when there is no next page.|
|previous_cursor|string \| null|false|none|Token pointing to the previous page. Populated for cursor pagination, ``null`` when using offset pagination or when on the first page.|

<h2 id="tocS_DAGRunPatchBody">DAGRunPatchBody</h2>
<!-- backwards compatibility -->
<a id="schemadagrunpatchbody"></a>
<a id="schema_DAGRunPatchBody"></a>
<a id="tocSdagrunpatchbody"></a>
<a id="tocsdagrunpatchbody"></a>

```json
{
  "state": "queued",
  "note": "string"
}
```

Dag Run Serializer for PATCH requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[DagRunMutableStates](#schemadagrunmutablestates) \| null|false|none|none|
|note|string \| null|false|none|none|

<h2 id="tocS_DAGRunResponse">DAGRunResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagrunresponse"></a>
<a id="schema_DAGRunResponse"></a>
<a id="tocSdagrunresponse"></a>
<a id="tocsdagrunresponse"></a>

```json
{
  "dag_run_id": "string",
  "dag_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "queued_at": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "last_scheduling_decision": "1970-01-01T00:00:00Z",
  "run_type": "backfill",
  "state": "queued",
  "triggered_by": "cli",
  "triggering_user_name": "string",
  "conf": {},
  "note": "string",
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "bundle_version": "string",
  "dag_display_name": "string",
  "partition_key": "string",
  "partition_date": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

Dag Run serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_run_id|string|true|none|none|
|dag_id|string|true|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|queued_at|string(date-time) \| null|true|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|duration|number \| null|true|none|none|
|data_interval_start|string(date-time) \| null|true|none|none|
|data_interval_end|string(date-time) \| null|true|none|none|
|run_after|string(date-time)|true|none|none|
|last_scheduling_decision|string(date-time) \| null|true|none|none|
|run_type|[DagRunType](#schemadagruntype)|true|none|Class with DagRun types.|
|state|[DagRunState](#schemadagrunstate)|true|none|All possible states that a DagRun can be in.<br><br>These are "shared" with TaskInstanceState in some parts of the code,<br>so please ensure that their values always match the ones with the<br>same name in TaskInstanceState.|
|triggered_by|[DagRunTriggeredByType](#schemadagruntriggeredbytype) \| null|true|none|none|
|triggering_user_name|string \| null|true|none|none|
|conf|object \| null|true|none|none|
|note|string \| null|true|none|none|
|dag_versions|[[DagVersionResponse](#schemadagversionresponse)]|true|none|none|
|bundle_version|string \| null|true|none|none|
|dag_display_name|string|true|none|none|
|partition_key|string \| null|true|none|none|
|partition_date|string(date-time) \| null|true|none|none|
|team_name|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|run_type|backfill|
|run_type|scheduled|
|run_type|manual|
|run_type|operator_triggered|
|run_type|asset_triggered|
|run_type|asset_materialization|
|state|queued|
|state|running|
|state|success|
|state|failed|

<h2 id="tocS_DAGRunsBatchBody">DAGRunsBatchBody</h2>
<!-- backwards compatibility -->
<a id="schemadagrunsbatchbody"></a>
<a id="schema_DAGRunsBatchBody"></a>
<a id="tocSdagrunsbatchbody"></a>
<a id="tocsdagrunsbatchbody"></a>

```json
{
  "order_by": "string",
  "page_offset": 0,
  "page_limit": 100,
  "dag_ids": [
    "string"
  ],
  "states": [
    "queued"
  ],
  "run_after_gte": "1970-01-01T00:00:00Z",
  "run_after_gt": "1970-01-01T00:00:00Z",
  "run_after_lte": "1970-01-01T00:00:00Z",
  "run_after_lt": "1970-01-01T00:00:00Z",
  "logical_date_gte": "1970-01-01T00:00:00Z",
  "logical_date_gt": "1970-01-01T00:00:00Z",
  "logical_date_lte": "1970-01-01T00:00:00Z",
  "logical_date_lt": "1970-01-01T00:00:00Z",
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_gt": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "start_date_lt": "1970-01-01T00:00:00Z",
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_gt": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "end_date_lt": "1970-01-01T00:00:00Z",
  "duration_gte": 0,
  "duration_gt": 0,
  "duration_lte": 0,
  "duration_lt": 0,
  "conf_contains": "string"
}
```

List Dag Runs body for batch endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|order_by|string \| null|false|none|none|
|page_offset|integer|false|none|none|
|page_limit|integer|false|none|none|
|dag_ids|[string] \| null|false|none|none|
|states|[[DagRunState](#schemadagrunstate) \| null] \| null|false|none|none|
|run_after_gte|string(date-time) \| null|false|none|none|
|run_after_gt|string(date-time) \| null|false|none|none|
|run_after_lte|string(date-time) \| null|false|none|none|
|run_after_lt|string(date-time) \| null|false|none|none|
|logical_date_gte|string(date-time) \| null|false|none|none|
|logical_date_gt|string(date-time) \| null|false|none|none|
|logical_date_lte|string(date-time) \| null|false|none|none|
|logical_date_lt|string(date-time) \| null|false|none|none|
|start_date_gte|string(date-time) \| null|false|none|none|
|start_date_gt|string(date-time) \| null|false|none|none|
|start_date_lte|string(date-time) \| null|false|none|none|
|start_date_lt|string(date-time) \| null|false|none|none|
|end_date_gte|string(date-time) \| null|false|none|none|
|end_date_gt|string(date-time) \| null|false|none|none|
|end_date_lte|string(date-time) \| null|false|none|none|
|end_date_lt|string(date-time) \| null|false|none|none|
|duration_gte|number \| null|false|none|none|
|duration_gt|number \| null|false|none|none|
|duration_lte|number \| null|false|none|none|
|duration_lt|number \| null|false|none|none|
|conf_contains|string \| null|false|none|none|

<h2 id="tocS_DAGSourceResponse">DAGSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagsourceresponse"></a>
<a id="schema_DAGSourceResponse"></a>
<a id="tocSdagsourceresponse"></a>
<a id="tocsdagsourceresponse"></a>

```json
{
  "content": "string",
  "dag_id": "string",
  "version_number": 0,
  "dag_display_name": "string",
  "language": "string"
}
```

Dag Source serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|true|none|none|
|dag_id|string|true|none|none|
|version_number|integer \| null|true|none|none|
|dag_display_name|string|true|none|none|
|language|string \| null|false|none|none|

<h2 id="tocS_DAGTagCollectionResponse">DAGTagCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagtagcollectionresponse"></a>
<a id="schema_DAGTagCollectionResponse"></a>
<a id="tocSdagtagcollectionresponse"></a>
<a id="tocsdagtagcollectionresponse"></a>

```json
{
  "tags": [
    "string"
  ],
  "total_entries": 0
}
```

Dag Tags Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DAGVersionCollectionResponse">DAGVersionCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagversioncollectionresponse"></a>
<a id="schema_DAGVersionCollectionResponse"></a>
<a id="tocSdagversioncollectionresponse"></a>
<a id="tocsdagversioncollectionresponse"></a>

```json
{
  "dag_versions": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    }
  ],
  "total_entries": 0
}
```

Dag Version Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_versions|[[DagVersionResponse](#schemadagversionresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DAGWarningCollectionResponse">DAGWarningCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagwarningcollectionresponse"></a>
<a id="schema_DAGWarningCollectionResponse"></a>
<a id="tocSdagwarningcollectionresponse"></a>
<a id="tocsdagwarningcollectionresponse"></a>

```json
{
  "dag_warnings": [
    {
      "dag_id": "string",
      "warning_type": "asset conflict",
      "message": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

Dag warning collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_warnings|[[DAGWarningResponse](#schemadagwarningresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DAGWarningResponse">DAGWarningResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagwarningresponse"></a>
<a id="schema_DAGWarningResponse"></a>
<a id="tocSdagwarningresponse"></a>
<a id="tocsdagwarningresponse"></a>

```json
{
  "dag_id": "string",
  "warning_type": "asset conflict",
  "message": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

Dag Warning serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|warning_type|[DagWarningType](#schemadagwarningtype) \| string|true|none|none|
|message|string|true|none|none|
|timestamp|string(date-time)|true|none|none|
|dag_display_name|string|true|none|none|

<h2 id="tocS_DagBundleCollectionResponse">DagBundleCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagbundlecollectionresponse"></a>
<a id="schema_DagBundleCollectionResponse"></a>
<a id="tocSdagbundlecollectionresponse"></a>
<a id="tocsdagbundlecollectionresponse"></a>

```json
{
  "dag_bundles": [
    {
      "name": "string",
      "active": true,
      "version": "string",
      "last_refreshed": "1970-01-01T00:00:00Z",
      "bundle_url": "string",
      "team_name": "string",
      "import_error_count": 0
    }
  ],
  "total_entries": 0
}
```

Dag bundle collection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_bundles|[[DagBundleResponse](#schemadagbundleresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DagBundleDetailResponse">DagBundleDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagbundledetailresponse"></a>
<a id="schema_DagBundleDetailResponse"></a>
<a id="tocSdagbundledetailresponse"></a>
<a id="tocsdagbundledetailresponse"></a>

```json
{
  "name": "string",
  "active": true,
  "version": "string",
  "last_refreshed": "1970-01-01T00:00:00Z",
  "bundle_url": "string",
  "team_name": "string",
  "import_error_count": 0,
  "dag_count": 0
}
```

Dag bundle serializer for the single-bundle response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|active|boolean \| null|true|none|Whether the bundle is still present in this deployment's configuration.|
|version|string \| null|true|none|The latest version Airflow has seen for the bundle. Null when the bundle does not support versioning, or when no Dag processor has refreshed it successfully yet.|
|last_refreshed|string(date-time) \| null|true|none|When a Dag processor last successfully refreshed the bundle. It advances even when the version did not change, and a failed refresh leaves it untouched.|
|bundle_url|string \| null|true|none|A link to view the bundle at ``version``, when one is configured and the caller may read Dag versions.|
|team_name|string \| null|true|none|The team owning the bundle, in a multi-team deployment.|
|import_error_count|integer \| null|true|none|Number of Dag import errors recorded against this bundle that the caller is permitted to see, counted on the same terms as ``GET /importErrors``. Null when the caller may not read import errors.|
|dag_count|integer|true|none|Number of live Dags recorded against the bundle that the caller is permitted to see, counted on the same terms as ``GET /dags``.|

<h2 id="tocS_DagBundleFileCollectionResponse">DagBundleFileCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagbundlefilecollectionresponse"></a>
<a id="schema_DagBundleFileCollectionResponse"></a>
<a id="tocSdagbundlefilecollectionresponse"></a>
<a id="tocsdagbundlefilecollectionresponse"></a>

```json
{
  "dag_bundle_files": [
    {
      "relative_fileloc": "string",
      "dag_count": 0,
      "last_parsed_time": "1970-01-01T00:00:00Z",
      "last_parse_duration": 0,
      "import_error_count": 0
    }
  ],
  "total_entries": 0
}
```

Dag bundle file collection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_bundle_files|[[DagBundleFileResponse](#schemadagbundlefileresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DagBundleFileResponse">DagBundleFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagbundlefileresponse"></a>
<a id="schema_DagBundleFileResponse"></a>
<a id="tocSdagbundlefileresponse"></a>
<a id="tocsdagbundlefileresponse"></a>

```json
{
  "relative_fileloc": "string",
  "dag_count": 0,
  "last_parsed_time": "1970-01-01T00:00:00Z",
  "last_parse_duration": 0,
  "import_error_count": 0
}
```

A file in a Dag bundle, as the Dag processor last saw it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relative_fileloc|string|true|none|none|
|dag_count|integer|true|none|Number of live Dags the file defines that the caller may read.|
|last_parsed_time|string(date-time) \| null|true|none|When the file was last parsed, or null if it has never parsed successfully.|
|last_parse_duration|number \| null|true|none|How long the last successful parse of the file took, in seconds.|
|import_error_count|integer \| null|true|none|Number of import errors recorded against the file, which is at most one. Null when the caller may not read import errors -- deliberately not zero, which would read as a file with nothing wrong.|

<h2 id="tocS_DagBundleResponse">DagBundleResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagbundleresponse"></a>
<a id="schema_DagBundleResponse"></a>
<a id="tocSdagbundleresponse"></a>
<a id="tocsdagbundleresponse"></a>

```json
{
  "name": "string",
  "active": true,
  "version": "string",
  "last_refreshed": "1970-01-01T00:00:00Z",
  "bundle_url": "string",
  "team_name": "string",
  "import_error_count": 0
}
```

Dag bundle serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|active|boolean \| null|true|none|Whether the bundle is still present in this deployment's configuration.|
|version|string \| null|true|none|The latest version Airflow has seen for the bundle. Null when the bundle does not support versioning, or when no Dag processor has refreshed it successfully yet.|
|last_refreshed|string(date-time) \| null|true|none|When a Dag processor last successfully refreshed the bundle. It advances even when the version did not change, and a failed refresh leaves it untouched.|
|bundle_url|string \| null|true|none|A link to view the bundle at ``version``, when one is configured and the caller may read Dag versions.|
|team_name|string \| null|true|none|The team owning the bundle, in a multi-team deployment.|
|import_error_count|integer \| null|true|none|Number of Dag import errors recorded against this bundle that the caller is permitted to see, counted on the same terms as ``GET /importErrors``. Null when the caller may not read import errors.|

<h2 id="tocS_DagProcessorInfoResponse">DagProcessorInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagprocessorinforesponse"></a>
<a id="schema_DagProcessorInfoResponse"></a>
<a id="tocSdagprocessorinforesponse"></a>
<a id="tocsdagprocessorinforesponse"></a>

```json
{
  "status": "healthy",
  "latest_dag_processor_heartbeat": "string",
  "detailed_status": "healthy",
  "instances": [
    {
      "hostname": "string",
      "latest_dag_processor_heartbeat": "string",
      "bundle_names": [
        "string"
      ]
    }
  ]
}
```

DagProcessor info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[HealthStatus](#schemahealthstatus) \| null|true|none|none|
|latest_dag_processor_heartbeat|string \| null|true|none|none|
|detailed_status|[DetailedHealthStatus](#schemadetailedhealthstatus) \| null|true|none|none|
|instances|[[DagProcessorInstanceInfoResponse](#schemadagprocessorinstanceinforesponse)] \| null|false|none|none|

<h2 id="tocS_DagProcessorInstanceInfoResponse">DagProcessorInstanceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagprocessorinstanceinforesponse"></a>
<a id="schema_DagProcessorInstanceInfoResponse"></a>
<a id="tocSdagprocessorinstanceinforesponse"></a>
<a id="tocsdagprocessorinstanceinforesponse"></a>

```json
{
  "hostname": "string",
  "latest_dag_processor_heartbeat": "string",
  "bundle_names": [
    "string"
  ]
}
```

Dag processor instance info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string \| null|true|none|none|
|latest_dag_processor_heartbeat|string \| null|true|none|none|
|bundle_names|[string] \| null|true|none|none|

<h2 id="tocS_DagRunAssetReference">DagRunAssetReference</h2>
<!-- backwards compatibility -->
<a id="schemadagrunassetreference"></a>
<a id="schema_DagRunAssetReference"></a>
<a id="tocSdagrunassetreference"></a>
<a id="tocsdagrunassetreference"></a>

```json
{
  "run_id": "string",
  "dag_id": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "state": "string",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "partition_key": "string",
  "triggering": true
}
```

DagRun serializer for asset responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run_id|string|true|none|none|
|dag_id|string|true|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|state|string|true|none|none|
|data_interval_start|string(date-time) \| null|true|none|none|
|data_interval_end|string(date-time) \| null|true|none|none|
|partition_key|string \| null|true|none|none|
|triggering|boolean|true|none|Whether this asset event triggered the referenced dag run. Only a run's most recent consumed asset event triggers it; earlier consumed events are included in the run but did not trigger it.|

<h2 id="tocS_DagRunMutableStates">DagRunMutableStates</h2>
<!-- backwards compatibility -->
<a id="schemadagrunmutablestates"></a>
<a id="schema_DagRunMutableStates"></a>
<a id="tocSdagrunmutablestates"></a>
<a id="tocsdagrunmutablestates"></a>

```json
"queued"
```

Dag Run states from which the run may be mutated (patched, deleted).

<h2 id="tocS_DagRunState">DagRunState</h2>
<!-- backwards compatibility -->
<a id="schemadagrunstate"></a>
<a id="schema_DagRunState"></a>
<a id="tocSdagrunstate"></a>
<a id="tocsdagrunstate"></a>

```json
"queued"
```

All possible states that a DagRun can be in.

These are "shared" with TaskInstanceState in some parts of the code,
so please ensure that their values always match the ones with the
same name in TaskInstanceState.

<h2 id="tocS_DagRunTriggeredByType">DagRunTriggeredByType</h2>
<!-- backwards compatibility -->
<a id="schemadagruntriggeredbytype"></a>
<a id="schema_DagRunTriggeredByType"></a>
<a id="tocSdagruntriggeredbytype"></a>
<a id="tocsdagruntriggeredbytype"></a>

```json
"cli"
```

Class with TriggeredBy types for DagRun.

<h2 id="tocS_DagRunType">DagRunType</h2>
<!-- backwards compatibility -->
<a id="schemadagruntype"></a>
<a id="schema_DagRunType"></a>
<a id="tocSdagruntype"></a>
<a id="tocsdagruntype"></a>

```json
"backfill"
```

Class with DagRun types.

<h2 id="tocS_DagScheduleAssetReference">DagScheduleAssetReference</h2>
<!-- backwards compatibility -->
<a id="schemadagscheduleassetreference"></a>
<a id="schema_DagScheduleAssetReference"></a>
<a id="tocSdagscheduleassetreference"></a>
<a id="tocsdagscheduleassetreference"></a>

```json
{
  "dag_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

Dag schedule reference serializer for assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_DagSchedulingState">DagSchedulingState</h2>
<!-- backwards compatibility -->
<a id="schemadagschedulingstate"></a>
<a id="schema_DagSchedulingState"></a>
<a id="tocSdagschedulingstate"></a>
<a id="tocsdagschedulingstate"></a>

```json
"active"
```

States controlling whether a Dag can create and schedule work.

<h2 id="tocS_DagStatsCollectionResponse">DagStatsCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagstatscollectionresponse"></a>
<a id="schema_DagStatsCollectionResponse"></a>
<a id="tocSdagstatscollectionresponse"></a>
<a id="tocsdagstatscollectionresponse"></a>

```json
{
  "dags": [
    {
      "dag_id": "string",
      "dag_display_name": "string",
      "stats": [
        {
          "state": "queued",
          "count": 0
        }
      ]
    }
  ],
  "total_entries": 0
}
```

Dag Stats Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dags|[[DagStatsResponse](#schemadagstatsresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DagStatsResponse">DagStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagstatsresponse"></a>
<a id="schema_DagStatsResponse"></a>
<a id="tocSdagstatsresponse"></a>
<a id="tocsdagstatsresponse"></a>

```json
{
  "dag_id": "string",
  "dag_display_name": "string",
  "stats": [
    {
      "state": "queued",
      "count": 0
    }
  ]
}
```

Dag Stats serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|dag_display_name|string|true|none|none|
|stats|[[DagStatsStateResponse](#schemadagstatsstateresponse)]|true|none|none|

<h2 id="tocS_DagStatsStateResponse">DagStatsStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagstatsstateresponse"></a>
<a id="schema_DagStatsStateResponse"></a>
<a id="tocSdagstatsstateresponse"></a>
<a id="tocsdagstatsstateresponse"></a>

```json
{
  "state": "queued",
  "count": 0
}
```

DagStatsState serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[DagRunState](#schemadagrunstate)|true|none|All possible states that a DagRun can be in.<br><br>These are "shared" with TaskInstanceState in some parts of the code,<br>so please ensure that their values always match the ones with the<br>same name in TaskInstanceState.|
|count|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|queued|
|state|running|
|state|success|
|state|failed|

<h2 id="tocS_DagTagResponse">DagTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagtagresponse"></a>
<a id="schema_DagTagResponse"></a>
<a id="tocSdagtagresponse"></a>
<a id="tocsdagtagresponse"></a>

```json
{
  "name": "string",
  "dag_id": "string",
  "dag_display_name": "string"
}
```

Dag Tag serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|dag_id|string|true|none|none|
|dag_display_name|string|true|none|none|

<h2 id="tocS_DagVersionDiffCategory">DagVersionDiffCategory</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffcategory"></a>
<a id="schema_DagVersionDiffCategory"></a>
<a id="tocSdagversiondiffcategory"></a>
<a id="tocsdagversiondiffcategory"></a>

```json
"asset"
```

What part of a Dag a difference belongs to. Mirrors ``DiffCategory``.

<h2 id="tocS_DagVersionDiffChangeResponse">DagVersionDiffChangeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffchangeresponse"></a>
<a id="schema_DagVersionDiffChangeResponse"></a>
<a id="tocSdagversiondiffchangeresponse"></a>
<a id="tocsdagversiondiffchangeresponse"></a>

```json
{
  "path": "string",
  "operation": "added",
  "category": "asset",
  "impact": "authorization",
  "occurrence_count": 0,
  "before_digest": "string",
  "after_digest": "string",
  "before_value": null,
  "after_value": null
}
```

One structural difference between two stored Dag versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|operation|[DagVersionDiffOperation](#schemadagversiondiffoperation)|true|none|How a difference presents at its path.|
|category|[DagVersionDiffCategory](#schemadagversiondiffcategory)|true|none|What part of a Dag a difference belongs to. Mirrors ``DiffCategory``.|
|impact|[DagVersionDiffImpact](#schemadagversiondiffimpact)|true|none|What a difference affects. Mirrors ``DiffImpact``.|
|occurrence_count|integer|true|none|How many underlying changes this record stands for. Always 1 when values are disclosed, since each change is then its own record; a redacted record merges every change sharing its path and operation.|
|before_digest|string \| null|false|none|SHA-256 over the canonical JSON of `before_value`. Present only when values are disclosed, and null when the change has no before side.|
|after_digest|string \| null|false|none|SHA-256 over the canonical JSON of `after_value`. Present only when values are disclosed, and null when the change has no after side.|
|before_value|object|false|none|The value this path held in the base version. Present only when values are disclosed, and omitted entirely when the change has no before side — which is how an absent side is told apart from a stored null.|
|after_value|object|false|none|The value this path holds in the target version. Present only when values are disclosed, and omitted entirely when the change has no after side — which is how an absent side is told apart from a stored null.|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|added|
|operation|removed|
|operation|changed|
|category|asset|
|category|authorization|
|category|callback|
|category|deadline|
|category|dependency|
|category|metadata|
|category|param|
|category|provenance|
|category|schedule|
|category|task|
|category|unknown|
|impact|authorization|
|impact|execution|
|impact|metadata|
|impact|provenance|
|impact|unknown|

<h2 id="tocS_DagVersionDiffImpact">DagVersionDiffImpact</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffimpact"></a>
<a id="schema_DagVersionDiffImpact"></a>
<a id="tocSdagversiondiffimpact"></a>
<a id="tocsdagversiondiffimpact"></a>

```json
"authorization"
```

What a difference affects. Mirrors ``DiffImpact``.

<h2 id="tocS_DagVersionDiffMode">DagVersionDiffMode</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffmode"></a>
<a id="schema_DagVersionDiffMode"></a>
<a id="tocSdagversiondiffmode"></a>
<a id="tocsdagversiondiffmode"></a>

```json
"observed_state"
```

Whether a comparison could be made at all.

<h2 id="tocS_DagVersionDiffOperation">DagVersionDiffOperation</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffoperation"></a>
<a id="schema_DagVersionDiffOperation"></a>
<a id="tocSdagversiondiffoperation"></a>
<a id="tocsdagversiondiffoperation"></a>

```json
"added"
```

How a difference presents at its path.

<h2 id="tocS_DagVersionDiffResponse">DagVersionDiffResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffresponse"></a>
<a id="schema_DagVersionDiffResponse"></a>
<a id="tocSdagversiondiffresponse"></a>
<a id="tocsdagversiondiffresponse"></a>

```json
{
  "diff_schema_version": 0,
  "base_version_number": 0,
  "target_version_number": 0,
  "serializer_versions": {
    "base": 0,
    "target": 0
  },
  "mode": "observed_state",
  "unavailable_reason": "string",
  "values_status": "available",
  "truncated": true,
  "total_changes": 0,
  "changes": [
    {
      "path": "string",
      "operation": "added",
      "category": "asset",
      "impact": "authorization",
      "occurrence_count": 0,
      "before_digest": "string",
      "after_digest": "string",
      "before_value": null,
      "after_value": null
    }
  ]
}
```

Observed-state difference between two stored Dag versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diff_schema_version|integer|true|none|Wire format of this payload. Incremented when its shape changes.|
|base_version_number|integer|true|none|none|
|target_version_number|integer|true|none|none|
|serializer_versions|[DagVersionDiffSerializerVersions](#schemadagversiondiffserializerversions)|true|none|Which Dag serializer format each compared version was stored under.<br><br>Unrelated to ``diff_schema_version``, which versions this payload rather than the<br>serialized Dags it describes.|
|mode|[DagVersionDiffMode](#schemadagversiondiffmode)|true|none|Whether a comparison could be made at all.|
|unavailable_reason|string \| null|false|none|Why no comparison could be made. Populated only when `mode` is `unavailable`.|
|values_status|[DagVersionDiffValuesStatus](#schemadagversiondiffvaluesstatus)|true|none|Whether values were disclosed. Mirrors ``ValuesStatus``.|
|truncated|boolean|true|none|Whether a change at a path not already in `changes` was dropped to stay within `max_changes`. Paths that are absent are absent, not unchanged.|
|total_changes|integer|true|none|Underlying changes across every disclosed path, not the number of records. Exact when `truncated` is false; a lower bound when it is true, because the changes at dropped paths are not counted.|
|changes|[[DagVersionDiffChangeResponse](#schemadagversiondiffchangeresponse)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|observed_state|
|mode|unavailable|
|values_status|available|
|values_status|unavailable|

<h2 id="tocS_DagVersionDiffSerializerVersions">DagVersionDiffSerializerVersions</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffserializerversions"></a>
<a id="schema_DagVersionDiffSerializerVersions"></a>
<a id="tocSdagversiondiffserializerversions"></a>
<a id="tocsdagversiondiffserializerversions"></a>

```json
{
  "base": 0,
  "target": 0
}
```

Which Dag serializer format each compared version was stored under.

Unrelated to ``diff_schema_version``, which versions this payload rather than the
serialized Dags it describes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|integer \| null|true|none|none|
|target|integer \| null|true|none|none|

<h2 id="tocS_DagVersionDiffValuesStatus">DagVersionDiffValuesStatus</h2>
<!-- backwards compatibility -->
<a id="schemadagversiondiffvaluesstatus"></a>
<a id="schema_DagVersionDiffValuesStatus"></a>
<a id="tocSdagversiondiffvaluesstatus"></a>
<a id="tocsdagversiondiffvaluesstatus"></a>

```json
"available"
```

Whether values were disclosed. Mirrors ``ValuesStatus``.

<h2 id="tocS_DagVersionResponse">DagVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadagversionresponse"></a>
<a id="schema_DagVersionResponse"></a>
<a id="tocSdagversionresponse"></a>
<a id="tocsdagversionresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "version_number": 0,
  "dag_id": "string",
  "bundle_name": "string",
  "bundle_version": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string",
  "bundle_url": "string"
}
```

Dag Version serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|version_number|integer|true|none|none|
|dag_id|string|true|none|none|
|bundle_name|string \| null|true|none|none|
|bundle_version|string \| null|true|none|none|
|created_at|string(date-time)|true|none|none|
|dag_display_name|string|true|none|none|
|bundle_url|string \| null|true|none|none|

<h2 id="tocS_DagWarningType">DagWarningType</h2>
<!-- backwards compatibility -->
<a id="schemadagwarningtype"></a>
<a id="schema_DagWarningType"></a>
<a id="tocSdagwarningtype"></a>
<a id="tocsdagwarningtype"></a>

```json
"asset conflict"
```

Enum for DAG warning types.

This is the set of allowable values for the ``warning_type`` field
in the DagWarning model.

<h2 id="tocS_DetailedHealthStatus">DetailedHealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemadetailedhealthstatus"></a>
<a id="schema_DetailedHealthStatus"></a>
<a id="tocSdetailedhealthstatus"></a>
<a id="tocsdetailedhealthstatus"></a>

```json
"healthy"
```

How much of a component's work has a live instance covering it.

<h2 id="tocS_DryRunBackfillCollectionResponse">DryRunBackfillCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadryrunbackfillcollectionresponse"></a>
<a id="schema_DryRunBackfillCollectionResponse"></a>
<a id="tocSdryrunbackfillcollectionresponse"></a>
<a id="tocsdryrunbackfillcollectionresponse"></a>

```json
{
  "backfills": [
    {
      "logical_date": "1970-01-01T00:00:00Z",
      "partition_key": "string",
      "partition_date": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

Backfill collection serializer for responses in dry-run mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backfills|[[DryRunBackfillResponse](#schemadryrunbackfillresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_DryRunBackfillResponse">DryRunBackfillResponse</h2>
<!-- backwards compatibility -->
<a id="schemadryrunbackfillresponse"></a>
<a id="schema_DryRunBackfillResponse"></a>
<a id="tocSdryrunbackfillresponse"></a>
<a id="tocsdryrunbackfillresponse"></a>

```json
{
  "logical_date": "1970-01-01T00:00:00Z",
  "partition_key": "string",
  "partition_date": "1970-01-01T00:00:00Z"
}
```

Backfill serializer for responses in dry-run mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logical_date|string(date-time) \| null|true|none|none|
|partition_key|string \| null|true|none|none|
|partition_date|string(date-time) \| null|true|none|none|

<h2 id="tocS_EventLogCollectionResponse">EventLogCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventlogcollectionresponse"></a>
<a id="schema_EventLogCollectionResponse"></a>
<a id="tocSeventlogcollectionresponse"></a>
<a id="tocseventlogcollectionresponse"></a>

```json
{
  "event_logs": [
    {
      "event_log_id": 0,
      "when": "1970-01-01T00:00:00Z",
      "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dag_id": "string",
      "task_id": "string",
      "run_id": "string",
      "map_index": 0,
      "try_number": 0,
      "event": "string",
      "logical_date": "1970-01-01T00:00:00Z",
      "owner": "string",
      "owner_display_name": "string",
      "extra": "string",
      "dag_display_name": "string",
      "task_display_name": "string",
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

Event Log Collection Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_logs|[[EventLogResponse](#schemaeventlogresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_EventLogResponse">EventLogResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventlogresponse"></a>
<a id="schema_EventLogResponse"></a>
<a id="tocSeventlogresponse"></a>
<a id="tocseventlogresponse"></a>

```json
{
  "event_log_id": 0,
  "when": "1970-01-01T00:00:00Z",
  "task_instance_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dag_id": "string",
  "task_id": "string",
  "run_id": "string",
  "map_index": 0,
  "try_number": 0,
  "event": "string",
  "logical_date": "1970-01-01T00:00:00Z",
  "owner": "string",
  "owner_display_name": "string",
  "extra": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "team_name": "string"
}
```

Event Log Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_log_id|integer|true|none|none|
|when|string(date-time)|true|none|none|
|task_instance_id|string(uuid) \| null|false|none|none|
|dag_id|string \| null|true|none|none|
|task_id|string \| null|true|none|none|
|run_id|string \| null|true|none|none|
|map_index|integer \| null|true|none|none|
|try_number|integer \| null|true|none|none|
|event|string|true|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|owner|string \| null|true|none|none|
|owner_display_name|string \| null|true|none|none|
|extra|string \| null|true|none|none|
|dag_display_name|string \| null|false|none|none|
|task_display_name|string \| null|false|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_ExternalLogUrlResponse">ExternalLogUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternallogurlresponse"></a>
<a id="schema_ExternalLogUrlResponse"></a>
<a id="tocSexternallogurlresponse"></a>
<a id="tocsexternallogurlresponse"></a>

```json
{
  "url": "string"
}
```

Response for the external log URL endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

<h2 id="tocS_ExternalViewResponse">ExternalViewResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternalviewresponse"></a>
<a id="schema_ExternalViewResponse"></a>
<a id="tocSexternalviewresponse"></a>
<a id="tocsexternalviewresponse"></a>

```json
{
  "name": "string",
  "icon": "string",
  "icon_dark_mode": "string",
  "url_route": "string",
  "category": "string",
  "nav_top_level": false,
  "applies_to": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "href": "string",
  "destination": "nav"
}
```

Serializer for External View Plugin responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|icon|string \| null|false|none|none|
|icon_dark_mode|string \| null|false|none|none|
|url_route|string \| null|false|none|none|
|category|string \| null|false|none|none|
|nav_top_level|boolean \| null|false|none|none|
|applies_to|[PluginAppliesToResponse](#schemapluginappliestoresponse) \| null|false|none|none|
|href|string|true|none|none|
|destination|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|destination|nav|
|destination|dag|
|destination|dag_run|
|destination|task|
|destination|task_instance|
|destination|asset|
|destination|base|

<h2 id="tocS_ExtraLinkCollectionResponse">ExtraLinkCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaextralinkcollectionresponse"></a>
<a id="schema_ExtraLinkCollectionResponse"></a>
<a id="tocSextralinkcollectionresponse"></a>
<a id="tocsextralinkcollectionresponse"></a>

```json
{
  "extra_links": {
    "property1": "string",
    "property2": "string"
  },
  "total_entries": 0
}
```

Extra Links Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extra_links|object|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_FastAPIAppResponse">FastAPIAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemafastapiappresponse"></a>
<a id="schema_FastAPIAppResponse"></a>
<a id="tocSfastapiappresponse"></a>
<a id="tocsfastapiappresponse"></a>

```json
{
  "app": "string",
  "url_prefix": "string",
  "name": "string"
}
```

Serializer for Plugin FastAPI App responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|string|true|none|none|
|url_prefix|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_FastAPIRootMiddlewareResponse">FastAPIRootMiddlewareResponse</h2>
<!-- backwards compatibility -->
<a id="schemafastapirootmiddlewareresponse"></a>
<a id="schema_FastAPIRootMiddlewareResponse"></a>
<a id="tocSfastapirootmiddlewareresponse"></a>
<a id="tocsfastapirootmiddlewareresponse"></a>

```json
{
  "middleware": "string",
  "name": "string"
}
```

Serializer for Plugin FastAPI root middleware responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|middleware|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_HITLDetail">HITLDetail</h2>
<!-- backwards compatibility -->
<a id="schemahitldetail"></a>
<a id="schema_HITLDetail"></a>
<a id="tocShitldetail"></a>
<a id="tocshitldetail"></a>

```json
{
  "options": [
    "string"
  ],
  "subject": "string",
  "body": "string",
  "defaults": [
    "string"
  ],
  "multiple": false,
  "params": {},
  "assigned_users": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "responded_by_user": {
    "id": "string",
    "name": "string"
  },
  "responded_at": "1970-01-01T00:00:00Z",
  "chosen_options": [
    "string"
  ],
  "params_input": {},
  "response_received": false,
  "task_instance": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_id": "string",
    "dag_id": "string",
    "dag_run_id": "string",
    "map_index": 0,
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "in_loop": true,
    "loop_iteration": {
      "loop_id": "string",
      "iteration": 1
    },
    "logical_date": "1970-01-01T00:00:00Z",
    "run_after": "1970-01-01T00:00:00Z",
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "duration": 0,
    "state": "removed",
    "try_number": 0,
    "max_tries": 0,
    "task_display_name": "string",
    "dag_display_name": "string",
    "hostname": "string",
    "unixname": "string",
    "pool": "string",
    "pool_slots": 0,
    "queue": "string",
    "priority_weight": 0,
    "operator": "string",
    "operator_name": "string",
    "queued_when": "1970-01-01T00:00:00Z",
    "scheduled_when": "1970-01-01T00:00:00Z",
    "pid": 0,
    "executor": "string",
    "executor_config": "string",
    "note": "string",
    "rendered_map_index": "string",
    "rendered_fields": {},
    "trigger": {
      "id": 0,
      "classpath": "string",
      "kwargs": "string",
      "created_date": "1970-01-01T00:00:00Z",
      "queue": "string",
      "triggerer_id": 0
    },
    "triggerer_job": {
      "id": 0,
      "dag_id": "string",
      "state": "string",
      "job_type": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "latest_heartbeat": "1970-01-01T00:00:00Z",
      "executor_class": "string",
      "hostname": "string",
      "unixname": "string",
      "team_names": [
        "string"
      ],
      "bundle_names": [
        "string"
      ],
      "dag_display_name": "string"
    },
    "dag_version": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    },
    "team_name": "string",
    "state_reason": "string",
    "retry_at": "1970-01-01T00:00:00Z"
  }
}
```

Schema for Human-in-the-loop detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[string]|true|none|none|
|subject|string|true|none|none|
|body|string \| null|false|none|none|
|defaults|[string] \| null|false|none|none|
|multiple|boolean|false|none|none|
|params|object|false|none|none|
|assigned_users|[[HITLUser](#schemahitluser)]|false|none|none|
|created_at|string(date-time)|true|none|none|
|responded_by_user|[HITLUser](#schemahitluser) \| null|false|none|none|
|responded_at|string(date-time) \| null|false|none|none|
|chosen_options|[string] \| null|false|none|none|
|params_input|object|false|none|none|
|response_received|boolean|false|none|none|
|task_instance|[TaskInstanceResponse](#schemataskinstanceresponse)|true|none|TaskInstance serializer for responses.|

<h2 id="tocS_HITLDetailCollection">HITLDetailCollection</h2>
<!-- backwards compatibility -->
<a id="schemahitldetailcollection"></a>
<a id="schema_HITLDetailCollection"></a>
<a id="tocShitldetailcollection"></a>
<a id="tocshitldetailcollection"></a>

```json
{
  "hitl_details": [
    {
      "options": [
        "string"
      ],
      "subject": "string",
      "body": "string",
      "defaults": [
        "string"
      ],
      "multiple": false,
      "params": {},
      "assigned_users": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "responded_by_user": {
        "id": "string",
        "name": "string"
      },
      "responded_at": "1970-01-01T00:00:00Z",
      "chosen_options": [
        "string"
      ],
      "params_input": {},
      "response_received": false,
      "task_instance": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "task_id": "string",
        "dag_id": "string",
        "dag_run_id": "string",
        "map_index": 0,
        "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "region_index": 0,
        "in_loop": true,
        "loop_iteration": {
          "loop_id": "string",
          "iteration": 1
        },
        "logical_date": "1970-01-01T00:00:00Z",
        "run_after": "1970-01-01T00:00:00Z",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "duration": 0,
        "state": "removed",
        "try_number": 0,
        "max_tries": 0,
        "task_display_name": "string",
        "dag_display_name": "string",
        "hostname": "string",
        "unixname": "string",
        "pool": "string",
        "pool_slots": 0,
        "queue": "string",
        "priority_weight": 0,
        "operator": "string",
        "operator_name": "string",
        "queued_when": "1970-01-01T00:00:00Z",
        "scheduled_when": "1970-01-01T00:00:00Z",
        "pid": 0,
        "executor": "string",
        "executor_config": "string",
        "note": "string",
        "rendered_map_index": "string",
        "rendered_fields": {},
        "trigger": {
          "id": 0,
          "classpath": "string",
          "kwargs": "string",
          "created_date": "1970-01-01T00:00:00Z",
          "queue": "string",
          "triggerer_id": 0
        },
        "triggerer_job": {
          "id": 0,
          "dag_id": "string",
          "state": "string",
          "job_type": "string",
          "start_date": "1970-01-01T00:00:00Z",
          "end_date": "1970-01-01T00:00:00Z",
          "latest_heartbeat": "1970-01-01T00:00:00Z",
          "executor_class": "string",
          "hostname": "string",
          "unixname": "string",
          "team_names": [
            "string"
          ],
          "bundle_names": [
            "string"
          ],
          "dag_display_name": "string"
        },
        "dag_version": {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "version_number": 0,
          "dag_id": "string",
          "bundle_name": "string",
          "bundle_version": "string",
          "created_at": "1970-01-01T00:00:00Z",
          "dag_display_name": "string",
          "bundle_url": "string"
        },
        "team_name": "string",
        "state_reason": "string",
        "retry_at": "1970-01-01T00:00:00Z"
      }
    }
  ],
  "total_entries": 0
}
```

Schema for a collection of Human-in-the-loop details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hitl_details|[[HITLDetail](#schemahitldetail)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_HITLDetailHistory">HITLDetailHistory</h2>
<!-- backwards compatibility -->
<a id="schemahitldetailhistory"></a>
<a id="schema_HITLDetailHistory"></a>
<a id="tocShitldetailhistory"></a>
<a id="tocshitldetailhistory"></a>

```json
{
  "options": [
    "string"
  ],
  "subject": "string",
  "body": "string",
  "defaults": [
    "string"
  ],
  "multiple": false,
  "params": {},
  "assigned_users": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "responded_by_user": {
    "id": "string",
    "name": "string"
  },
  "responded_at": "1970-01-01T00:00:00Z",
  "chosen_options": [
    "string"
  ],
  "params_input": {},
  "response_received": false,
  "task_instance": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "task_id": "string",
    "dag_id": "string",
    "dag_run_id": "string",
    "map_index": 0,
    "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "region_index": 0,
    "loop_iteration": {
      "loop_id": "string",
      "iteration": 1
    },
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "duration": 0,
    "state": "removed",
    "try_number": 0,
    "max_tries": 0,
    "task_display_name": "string",
    "dag_display_name": "string",
    "hostname": "string",
    "unixname": "string",
    "pool": "string",
    "pool_slots": 0,
    "queue": "string",
    "priority_weight": 0,
    "operator": "string",
    "operator_name": "string",
    "queued_when": "1970-01-01T00:00:00Z",
    "scheduled_when": "1970-01-01T00:00:00Z",
    "pid": 0,
    "executor": "string",
    "executor_config": "string",
    "dag_version": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "version_number": 0,
      "dag_id": "string",
      "bundle_name": "string",
      "bundle_version": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string",
      "bundle_url": "string"
    },
    "note": "string",
    "state_reason": "string",
    "retry_at": "1970-01-01T00:00:00Z"
  }
}
```

Schema for Human-in-the-loop detail history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[string]|true|none|none|
|subject|string|true|none|none|
|body|string \| null|false|none|none|
|defaults|[string] \| null|false|none|none|
|multiple|boolean|false|none|none|
|params|object|false|none|none|
|assigned_users|[[HITLUser](#schemahitluser)]|false|none|none|
|created_at|string(date-time)|true|none|none|
|responded_by_user|[HITLUser](#schemahitluser) \| null|false|none|none|
|responded_at|string(date-time) \| null|false|none|none|
|chosen_options|[string] \| null|false|none|none|
|params_input|object|false|none|none|
|response_received|boolean|false|none|none|
|task_instance|[TaskInstanceHistoryResponse](#schemataskinstancehistoryresponse)|true|none|TaskInstanceHistory serializer for responses.|

<h2 id="tocS_HITLDetailResponse">HITLDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemahitldetailresponse"></a>
<a id="schema_HITLDetailResponse"></a>
<a id="tocShitldetailresponse"></a>
<a id="tocshitldetailresponse"></a>

```json
{
  "responded_by": {
    "id": "string",
    "name": "string"
  },
  "responded_at": "1970-01-01T00:00:00Z",
  "chosen_options": [
    "string"
  ],
  "params_input": {}
}
```

Response of updating a Human-in-the-loop detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responded_by|[HITLUser](#schemahitluser)|true|none|Schema for a Human-in-the-loop users.|
|responded_at|string(date-time)|true|none|none|
|chosen_options|[string]|true|none|none|
|params_input|object|false|none|none|

<h2 id="tocS_HITLUser">HITLUser</h2>
<!-- backwards compatibility -->
<a id="schemahitluser"></a>
<a id="schema_HITLUser"></a>
<a id="tocShitluser"></a>
<a id="tocshitluser"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

Schema for a Human-in-the-loop users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_HTTPExceptionResponse">HTTPExceptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemahttpexceptionresponse"></a>
<a id="schema_HTTPExceptionResponse"></a>
<a id="tocShttpexceptionresponse"></a>
<a id="tocshttpexceptionresponse"></a>

```json
{
  "detail": "string"
}
```

HTTPException Model used for error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string \| object|true|none|none|

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

<h2 id="tocS_HealthInfoResponse">HealthInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthinforesponse"></a>
<a id="schema_HealthInfoResponse"></a>
<a id="tocShealthinforesponse"></a>
<a id="tocshealthinforesponse"></a>

```json
{
  "metadatabase": {
    "status": "healthy"
  },
  "scheduler": {
    "status": "healthy",
    "latest_scheduler_heartbeat": "string",
    "detailed_status": "healthy",
    "instances": [
      {
        "hostname": "string",
        "latest_scheduler_heartbeat": "string"
      }
    ]
  },
  "triggerer": {
    "status": "healthy",
    "latest_triggerer_heartbeat": "string",
    "detailed_status": "healthy",
    "instances": [
      {
        "hostname": "string",
        "latest_triggerer_heartbeat": "string",
        "team_names": [
          "string"
        ]
      }
    ]
  },
  "dag_processor": {
    "status": "healthy",
    "latest_dag_processor_heartbeat": "string",
    "detailed_status": "healthy",
    "instances": [
      {
        "hostname": "string",
        "latest_dag_processor_heartbeat": "string",
        "bundle_names": [
          "string"
        ]
      }
    ]
  }
}
```

Health serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadatabase|[BaseInfoResponse](#schemabaseinforesponse)|true|none|Base info serializer for responses.|
|scheduler|[SchedulerInfoResponse](#schemaschedulerinforesponse)|true|none|Scheduler info serializer for responses.|
|triggerer|[TriggererInfoResponse](#schematriggererinforesponse)|true|none|Triggerer info serializer for responses.|
|dag_processor|[DagProcessorInfoResponse](#schemadagprocessorinforesponse) \| null|false|none|none|

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
"healthy"
```

Aggregate health of a component: whether it has at least one live instance.

<h2 id="tocS_ImportErrorCollectionResponse">ImportErrorCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrorcollectionresponse"></a>
<a id="schema_ImportErrorCollectionResponse"></a>
<a id="tocSimporterrorcollectionresponse"></a>
<a id="tocsimporterrorcollectionresponse"></a>

```json
{
  "import_errors": [
    {
      "import_error_id": 0,
      "timestamp": "1970-01-01T00:00:00Z",
      "filename": "string",
      "source_reference": "string",
      "bundle_name": "string",
      "stack_trace": "string",
      "file_token": "string"
    }
  ],
  "total_entries": 0
}
```

Import Error Collection Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|import_errors|[[ImportErrorResponse](#schemaimporterrorresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_ImportErrorResponse">ImportErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrorresponse"></a>
<a id="schema_ImportErrorResponse"></a>
<a id="tocSimporterrorresponse"></a>
<a id="tocsimporterrorresponse"></a>

```json
{
  "import_error_id": 0,
  "timestamp": "1970-01-01T00:00:00Z",
  "filename": "string",
  "source_reference": "string",
  "bundle_name": "string",
  "stack_trace": "string",
  "file_token": "string"
}
```

Import Error Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|import_error_id|integer|true|none|none|
|timestamp|string(date-time)|true|none|none|
|filename|string|true|none|none|
|source_reference|string \| null|true|none|none|
|bundle_name|string \| null|true|none|none|
|stack_trace|string|true|none|none|
|file_token|string|true|read-only|Return a signed token identifying the file, used to request its reparse.|

<h2 id="tocS_JobCollectionResponse">JobCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobcollectionresponse"></a>
<a id="schema_JobCollectionResponse"></a>
<a id="tocSjobcollectionresponse"></a>
<a id="tocsjobcollectionresponse"></a>

```json
{
  "jobs": [
    {
      "id": 0,
      "dag_id": "string",
      "state": "string",
      "job_type": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "latest_heartbeat": "1970-01-01T00:00:00Z",
      "executor_class": "string",
      "hostname": "string",
      "unixname": "string",
      "team_names": [
        "string"
      ],
      "bundle_names": [
        "string"
      ],
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

Job Collection Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[JobResponse](#schemajobresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_JobResponse">JobResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobresponse"></a>
<a id="schema_JobResponse"></a>
<a id="tocSjobresponse"></a>
<a id="tocsjobresponse"></a>

```json
{
  "id": 0,
  "dag_id": "string",
  "state": "string",
  "job_type": "string",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "latest_heartbeat": "1970-01-01T00:00:00Z",
  "executor_class": "string",
  "hostname": "string",
  "unixname": "string",
  "team_names": [
    "string"
  ],
  "bundle_names": [
    "string"
  ],
  "dag_display_name": "string"
}
```

Job serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|dag_id|string \| null|true|none|none|
|state|string \| null|true|none|none|
|job_type|string \| null|true|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|latest_heartbeat|string(date-time) \| null|true|none|none|
|executor_class|string \| null|true|none|none|
|hostname|string \| null|true|none|none|
|unixname|string \| null|true|none|none|
|team_names|[string]|false|none|none|
|bundle_names|[string] \| null|false|none|none|
|dag_display_name|string \| null|false|none|none|

<h2 id="tocS_JsonValue">JsonValue</h2>
<!-- backwards compatibility -->
<a id="schemajsonvalue"></a>
<a id="schema_JsonValue"></a>
<a id="tocSjsonvalue"></a>
<a id="tocsjsonvalue"></a>

```json
null
```

<h2 id="tocS_LastAssetEventResponse">LastAssetEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemalastasseteventresponse"></a>
<a id="schema_LastAssetEventResponse"></a>
<a id="tocSlastasseteventresponse"></a>
<a id="tocslastasseteventresponse"></a>

```json
{
  "id": 0,
  "timestamp": "1970-01-01T00:00:00Z"
}
```

Last asset event response serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|none|
|timestamp|string(date-time) \| null|false|none|none|

<h2 id="tocS_LoopIterationResponse">LoopIterationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloopiterationresponse"></a>
<a id="schema_LoopIterationResponse"></a>
<a id="tocSloopiterationresponse"></a>
<a id="tocsloopiterationresponse"></a>

```json
{
  "loop_id": "string",
  "iteration": 1
}
```

A task execution's position in an enclosing loop.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loop_id|string|true|none|none|
|iteration|integer|true|none|Position in the enclosing loop, counting from one.|

<h2 id="tocS_MaterializeAssetBody">MaterializeAssetBody</h2>
<!-- backwards compatibility -->
<a id="schemamaterializeassetbody"></a>
<a id="schema_MaterializeAssetBody"></a>
<a id="tocSmaterializeassetbody"></a>
<a id="tocsmaterializeassetbody"></a>

```json
{
  "dag_run_id": "string",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "conf": {},
  "note": "string",
  "partition_key": "string",
  "bundle_version": "string",
  "drain_dag": false
}
```

Materialize asset request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_run_id|string \| null|false|none|none|
|data_interval_start|string(date-time) \| null|false|none|none|
|data_interval_end|string(date-time) \| null|false|none|none|
|logical_date|string(date-time) \| null|false|none|none|
|run_after|string(date-time) \| null|false|none|none|
|conf|object \| null|false|none|none|
|note|string \| null|false|none|none|
|partition_key|string \| null|false|none|none|
|bundle_version|string \| null|false|none|none|
|drain_dag|boolean|false|none|Drain the Dag together with this run. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag.|

<h2 id="tocS_NewTaskResponse">NewTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemanewtaskresponse"></a>
<a id="schema_NewTaskResponse"></a>
<a id="tocSnewtaskresponse"></a>
<a id="tocsnewtaskresponse"></a>

```json
{
  "task_id": "string",
  "task_display_name": "string"
}
```

Lightweight response for new tasks that don't have TaskInstances yet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string|true|none|none|
|task_display_name|string|true|none|none|

<h2 id="tocS_PatchTaskInstanceBody">PatchTaskInstanceBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchtaskinstancebody"></a>
<a id="schema_PatchTaskInstanceBody"></a>
<a id="tocSpatchtaskinstancebody"></a>
<a id="tocspatchtaskinstancebody"></a>

```json
{
  "new_state": "removed",
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "note": "string",
  "include_upstream": false,
  "include_downstream": false,
  "include_future": false,
  "include_past": false
}
```

Request body for patching task instance state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_state|[TaskInstanceState](#schemataskinstancestate) \| null|false|none|none|
|region_id|string(uuid) \| null|false|none|none|
|region_index|integer \| null|false|none|none|
|note|string \| null|false|none|none|
|include_upstream|boolean|false|none|none|
|include_downstream|boolean|false|none|none|
|include_future|boolean|false|none|none|
|include_past|boolean|false|none|none|

<h2 id="tocS_PluginAppliesToResponse">PluginAppliesToResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginappliestoresponse"></a>
<a id="schema_PluginAppliesToResponse"></a>
<a id="tocSpluginappliestoresponse"></a>
<a id="tocspluginappliestoresponse"></a>

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

Serializer for the optional scoping criteria of a UI plugin.

An open map of dotted field path to the values that path may take -- not a closed set of
criteria. ``{"state": ["failed"], "dag.tags.name": ["ml"]}`` scopes to failed entities of
ml-tagged Dags. An unqualified path is rooted at the entity the ``destination`` is about;
a path may instead name a related record (``dag``, ``dag_run``, ``task``, ``task_instance``)
as its first segment. Matching is equality against the listed values, OR within a path and
AND across paths, and is evaluated client-side.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<h2 id="tocS_PluginCollectionResponse">PluginCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplugincollectionresponse"></a>
<a id="schema_PluginCollectionResponse"></a>
<a id="tocSplugincollectionresponse"></a>
<a id="tocsplugincollectionresponse"></a>

```json
{
  "plugins": [
    {
      "name": "string",
      "team_name": "string",
      "macros": [
        "string"
      ],
      "flask_blueprints": [
        "string"
      ],
      "fastapi_apps": [
        {
          "app": "string",
          "url_prefix": "string",
          "name": "string"
        }
      ],
      "fastapi_root_middlewares": [
        {
          "middleware": "string",
          "name": "string"
        }
      ],
      "external_views": [
        {
          "name": "string",
          "icon": "string",
          "icon_dark_mode": "string",
          "url_route": "string",
          "category": "string",
          "nav_top_level": false,
          "applies_to": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "href": "string",
          "destination": "nav"
        }
      ],
      "react_apps": [
        {
          "name": "string",
          "icon": "string",
          "icon_dark_mode": "string",
          "url_route": "string",
          "category": "string",
          "nav_top_level": false,
          "applies_to": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "bundle_url": "string",
          "destination": "nav"
        }
      ],
      "ui_actions": [
        {
          "name": "string",
          "destination": "dag",
          "icon": "string",
          "icon_dark_mode": "string",
          "applies_to": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "action_type": "link",
          "href": "string"
        }
      ],
      "appbuilder_views": [
        {
          "name": "string",
          "category": "string",
          "view": "string",
          "label": "string"
        }
      ],
      "appbuilder_menu_items": [
        {
          "name": "string",
          "href": "string",
          "category": "string"
        }
      ],
      "global_operator_extra_links": [
        "string"
      ],
      "operator_extra_links": [
        "string"
      ],
      "source": "string",
      "listeners": [
        "string"
      ],
      "timetables": [
        "string"
      ]
    }
  ],
  "total_entries": 0
}
```

Plugin Collection serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plugins|[[PluginResponse](#schemapluginresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_PluginImportErrorCollectionResponse">PluginImportErrorCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginimporterrorcollectionresponse"></a>
<a id="schema_PluginImportErrorCollectionResponse"></a>
<a id="tocSpluginimporterrorcollectionresponse"></a>
<a id="tocspluginimporterrorcollectionresponse"></a>

```json
{
  "import_errors": [
    {
      "source": "string",
      "error": "string"
    }
  ],
  "total_entries": 0
}
```

Plugin Import Error Collection serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|import_errors|[[PluginImportErrorResponse](#schemapluginimporterrorresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_PluginImportErrorResponse">PluginImportErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginimporterrorresponse"></a>
<a id="schema_PluginImportErrorResponse"></a>
<a id="tocSpluginimporterrorresponse"></a>
<a id="tocspluginimporterrorresponse"></a>

```json
{
  "source": "string",
  "error": "string"
}
```

Plugin Import Error serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|true|none|none|
|error|string|true|none|none|

<h2 id="tocS_PluginLinkActionResponse">PluginLinkActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginlinkactionresponse"></a>
<a id="schema_PluginLinkActionResponse"></a>
<a id="tocSpluginlinkactionresponse"></a>
<a id="tocspluginlinkactionresponse"></a>

```json
{
  "name": "string",
  "destination": "dag",
  "icon": "string",
  "icon_dark_mode": "string",
  "applies_to": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "action_type": "link",
  "href": "string"
}
```

Serializer for a UI action that opens a URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|destination|string|true|none|none|
|icon|string \| null|false|none|none|
|icon_dark_mode|string \| null|false|none|none|
|applies_to|[PluginAppliesToResponse](#schemapluginappliestoresponse) \| null|false|none|none|
|action_type|string|true|none|none|
|href|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|destination|dag|
|destination|dag_run|
|destination|task_instance|

<h2 id="tocS_PluginReactActionResponse">PluginReactActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginreactactionresponse"></a>
<a id="schema_PluginReactActionResponse"></a>
<a id="tocSpluginreactactionresponse"></a>
<a id="tocspluginreactactionresponse"></a>

```json
{
  "name": "string",
  "destination": "dag",
  "icon": "string",
  "icon_dark_mode": "string",
  "applies_to": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "action_type": "react",
  "bundle_url": "string"
}
```

Serializer for a UI action that mounts a React component behind a button.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|destination|string|true|none|none|
|icon|string \| null|false|none|none|
|icon_dark_mode|string \| null|false|none|none|
|applies_to|[PluginAppliesToResponse](#schemapluginappliestoresponse) \| null|false|none|none|
|action_type|string|true|none|none|
|bundle_url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|destination|dag|
|destination|dag_run|
|destination|task_instance|

<h2 id="tocS_PluginResponse">PluginResponse</h2>
<!-- backwards compatibility -->
<a id="schemapluginresponse"></a>
<a id="schema_PluginResponse"></a>
<a id="tocSpluginresponse"></a>
<a id="tocspluginresponse"></a>

```json
{
  "name": "string",
  "team_name": "string",
  "macros": [
    "string"
  ],
  "flask_blueprints": [
    "string"
  ],
  "fastapi_apps": [
    {
      "app": "string",
      "url_prefix": "string",
      "name": "string"
    }
  ],
  "fastapi_root_middlewares": [
    {
      "middleware": "string",
      "name": "string"
    }
  ],
  "external_views": [
    {
      "name": "string",
      "icon": "string",
      "icon_dark_mode": "string",
      "url_route": "string",
      "category": "string",
      "nav_top_level": false,
      "applies_to": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "href": "string",
      "destination": "nav"
    }
  ],
  "react_apps": [
    {
      "name": "string",
      "icon": "string",
      "icon_dark_mode": "string",
      "url_route": "string",
      "category": "string",
      "nav_top_level": false,
      "applies_to": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "bundle_url": "string",
      "destination": "nav"
    }
  ],
  "ui_actions": [
    {
      "name": "string",
      "destination": "dag",
      "icon": "string",
      "icon_dark_mode": "string",
      "applies_to": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "action_type": "link",
      "href": "string"
    }
  ],
  "appbuilder_views": [
    {
      "name": "string",
      "category": "string",
      "view": "string",
      "label": "string"
    }
  ],
  "appbuilder_menu_items": [
    {
      "name": "string",
      "href": "string",
      "category": "string"
    }
  ],
  "global_operator_extra_links": [
    "string"
  ],
  "operator_extra_links": [
    "string"
  ],
  "source": "string",
  "listeners": [
    "string"
  ],
  "timetables": [
    "string"
  ]
}
```

Plugin serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|team_name|string \| null|false|none|none|
|macros|[string]|true|none|none|
|flask_blueprints|[string]|true|none|none|
|fastapi_apps|[[FastAPIAppResponse](#schemafastapiappresponse)]|true|none|none|
|fastapi_root_middlewares|[[FastAPIRootMiddlewareResponse](#schemafastapirootmiddlewareresponse)]|true|none|none|
|external_views|[[ExternalViewResponse](#schemaexternalviewresponse)]|true|none|Aggregate all external views. Both 'external_views' and 'appbuilder_menu_items' are included here.|
|react_apps|[[ReactAppResponse](#schemareactappresponse)]|true|none|none|
|ui_actions|[[PluginLinkActionResponse](#schemapluginlinkactionresponse) \| [PluginReactActionResponse](#schemapluginreactactionresponse)]|false|none|User-defined actions rendered on Dag, Dag Run, and Task Instance table rows and header cards.|
|appbuilder_views|[[AppBuilderViewResponse](#schemaappbuilderviewresponse)]|true|none|none|
|appbuilder_menu_items|[[AppBuilderMenuItemResponse](#schemaappbuildermenuitemresponse)]|true|none|**Deprecated.**|
|global_operator_extra_links|[string]|true|none|none|
|operator_extra_links|[string]|true|none|none|
|source|string|true|none|none|
|listeners|[string]|true|none|none|
|timetables|[string]|true|none|none|

<h2 id="tocS_PoolBody">PoolBody</h2>
<!-- backwards compatibility -->
<a id="schemapoolbody"></a>
<a id="schema_PoolBody"></a>
<a id="tocSpoolbody"></a>
<a id="tocspoolbody"></a>

```json
{
  "name": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": false,
  "team_name": "string"
}
```

Pool serializer for post bodies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|slots|integer|true|none|Number of slots. Use -1 for unlimited.|
|description|string \| null|false|none|none|
|include_deferred|boolean|false|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_PoolCollectionResponse">PoolCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoolcollectionresponse"></a>
<a id="schema_PoolCollectionResponse"></a>
<a id="tocSpoolcollectionresponse"></a>
<a id="tocspoolcollectionresponse"></a>

```json
{
  "pools": [
    {
      "name": "string",
      "slots": -1,
      "description": "string",
      "include_deferred": true,
      "occupied_slots": 0,
      "running_slots": 0,
      "queued_slots": 0,
      "scheduled_slots": 0,
      "open_slots": 0,
      "deferred_slots": 0,
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

Pool Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pools|[[PoolResponse](#schemapoolresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_PoolPatchBody">PoolPatchBody</h2>
<!-- backwards compatibility -->
<a id="schemapoolpatchbody"></a>
<a id="schema_PoolPatchBody"></a>
<a id="tocSpoolpatchbody"></a>
<a id="tocspoolpatchbody"></a>

```json
{
  "pool": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": true,
  "team_name": "string"
}
```

Pool serializer for patch bodies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pool|string \| null|false|none|none|
|slots|integer \| null|false|none|none|
|description|string \| null|false|none|none|
|include_deferred|boolean \| null|false|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_PoolResponse">PoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemapoolresponse"></a>
<a id="schema_PoolResponse"></a>
<a id="tocSpoolresponse"></a>
<a id="tocspoolresponse"></a>

```json
{
  "name": "string",
  "slots": -1,
  "description": "string",
  "include_deferred": true,
  "occupied_slots": 0,
  "running_slots": 0,
  "queued_slots": 0,
  "scheduled_slots": 0,
  "open_slots": 0,
  "deferred_slots": 0,
  "team_name": "string"
}
```

Pool serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|slots|integer|true|none|Number of slots. Use -1 for unlimited.|
|description|string \| null|false|none|none|
|include_deferred|boolean|true|none|none|
|occupied_slots|integer|true|none|none|
|running_slots|integer|true|none|none|
|queued_slots|integer|true|none|none|
|scheduled_slots|integer|true|none|none|
|open_slots|integer|true|none|none|
|deferred_slots|integer|true|none|none|
|team_name|string \| null|true|none|none|

<h2 id="tocS_ProviderAssetUriInfo">ProviderAssetUriInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderasseturiinfo"></a>
<a id="schema_ProviderAssetUriInfo"></a>
<a id="tocSproviderasseturiinfo"></a>
<a id="tocsproviderasseturiinfo"></a>

```json
{
  "schemes": [
    "string"
  ],
  "handler": "string",
  "factory": "string",
  "to_openlineage_converter": "string"
}
```

Asset URI scheme handling provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemes|[string]|true|none|none|
|handler|string \| null|false|none|none|
|factory|string \| null|false|none|none|
|to_openlineage_converter|string \| null|false|none|none|

<h2 id="tocS_ProviderCollectionResponse">ProviderCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovidercollectionresponse"></a>
<a id="schema_ProviderCollectionResponse"></a>
<a id="tocSprovidercollectionresponse"></a>
<a id="tocsprovidercollectionresponse"></a>

```json
{
  "providers": [
    {
      "package_name": "string",
      "description": "string",
      "version": "string",
      "documentation_url": "string"
    }
  ],
  "total_entries": 0
}
```

Provider Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[ProviderResponse](#schemaproviderresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_ProviderConfigOptionInfo">ProviderConfigOptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderconfigoptioninfo"></a>
<a id="schema_ProviderConfigOptionInfo"></a>
<a id="tocSproviderconfigoptioninfo"></a>
<a id="tocsproviderconfigoptioninfo"></a>

```json
{
  "description": "string",
  "version_added": "string",
  "type": "string",
  "example": "string",
  "default": "string",
  "sensitive": true,
  "is_template": true,
  "see_also": "string"
}
```

Configuration option contributed by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|version_added|string \| null|false|none|none|
|type|string \| null|false|none|none|
|example|string \| integer \| number \| null|false|none|none|
|default|string \| integer \| number \| null|false|none|none|
|sensitive|boolean \| null|false|none|none|
|is_template|boolean \| null|false|none|none|
|see_also|string \| null|false|none|none|

<h2 id="tocS_ProviderConfigSectionInfo">ProviderConfigSectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderconfigsectioninfo"></a>
<a id="schema_ProviderConfigSectionInfo"></a>
<a id="tocSproviderconfigsectioninfo"></a>
<a id="tocsproviderconfigsectioninfo"></a>

```json
{
  "description": "string",
  "options": {
    "property1": {
      "description": "string",
      "version_added": "string",
      "type": "string",
      "example": "string",
      "default": "string",
      "sensitive": true,
      "is_template": true,
      "see_also": "string"
    },
    "property2": {
      "description": "string",
      "version_added": "string",
      "type": "string",
      "example": "string",
      "default": "string",
      "sensitive": true,
      "is_template": true,
      "see_also": "string"
    }
  }
}
```

Configuration section contributed by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|options|object|false|none|none|

<h2 id="tocS_ProviderConnectionFieldInfo">ProviderConnectionFieldInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderconnectionfieldinfo"></a>
<a id="schema_ProviderConnectionFieldInfo"></a>
<a id="tocSproviderconnectionfieldinfo"></a>
<a id="tocsproviderconnectionfieldinfo"></a>

```json
{
  "label": "string",
  "description": "string",
  "schema": {}
}
```

Custom connection field a connection type stores in ``Connection.extra``.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|description|string \| null|false|none|none|
|schema|object|true|none|none|

<h2 id="tocS_ProviderConnectionTypeInfo">ProviderConnectionTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderconnectiontypeinfo"></a>
<a id="schema_ProviderConnectionTypeInfo"></a>
<a id="tocSproviderconnectiontypeinfo"></a>
<a id="tocsproviderconnectiontypeinfo"></a>

```json
{
  "connection_type": "string",
  "hook_class_name": "string",
  "hook_name": "string",
  "ui_field_behaviour": {
    "hidden_fields": [
      "string"
    ],
    "relabeling": {
      "property1": "string",
      "property2": "string"
    },
    "placeholders": {
      "property1": "string",
      "property2": "string"
    }
  },
  "conn_fields": {
    "property1": {
      "label": "string",
      "description": "string",
      "schema": {}
    },
    "property2": {
      "label": "string",
      "description": "string",
      "schema": {}
    }
  },
  "external_services": [
    "string"
  ]
}
```

Connection type provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_type|string|true|none|none|
|hook_class_name|string|true|none|none|
|hook_name|string \| null|false|none|none|
|ui_field_behaviour|[ProviderConnectionUiFieldBehaviourInfo](#schemaproviderconnectionuifieldbehaviourinfo) \| null|false|none|none|
|conn_fields|object \| null|false|none|none|
|external_services|[string] \| null|false|none|none|

<h2 id="tocS_ProviderConnectionUiFieldBehaviourInfo">ProviderConnectionUiFieldBehaviourInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderconnectionuifieldbehaviourinfo"></a>
<a id="schema_ProviderConnectionUiFieldBehaviourInfo"></a>
<a id="tocSproviderconnectionuifieldbehaviourinfo"></a>
<a id="tocsproviderconnectionuifieldbehaviourinfo"></a>

```json
{
  "hidden_fields": [
    "string"
  ],
  "relabeling": {
    "property1": "string",
    "property2": "string"
  },
  "placeholders": {
    "property1": "string",
    "property2": "string"
  }
}
```

Customizations a connection type applies to the standard connection form fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hidden_fields|[string] \| null|false|none|none|
|relabeling|object \| null|false|none|none|
|placeholders|object \| null|false|none|none|

<h2 id="tocS_ProviderDetailsResponse">ProviderDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdetailsresponse"></a>
<a id="schema_ProviderDetailsResponse"></a>
<a id="tocSproviderdetailsresponse"></a>
<a id="tocsproviderdetailsresponse"></a>

```json
{
  "package_name": "string",
  "description": "string",
  "version": "string",
  "documentation_url": "string",
  "provider_info": {
    "package_name": "string",
    "name": "string",
    "description": "string",
    "documentation_url": "string",
    "filesystems": [
      "string"
    ],
    "integrations": [
      {
        "integration_name": "string",
        "external_doc_url": "string",
        "how_to_guide": [
          "string"
        ],
        "logo": "string",
        "tags": [
          "string"
        ]
      }
    ],
    "operators": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "sensors": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "hooks": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "triggers": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "bundles": [
      {
        "integration_name": "string",
        "python_modules": [
          "string"
        ]
      }
    ],
    "asset_uris": [
      {
        "schemes": [
          "string"
        ],
        "handler": "string",
        "factory": "string",
        "to_openlineage_converter": "string"
      }
    ],
    "dialects": [
      {
        "dialect_type": "string",
        "dialect_class_name": "string"
      }
    ],
    "transfers": [
      {
        "source_integration_name": "string",
        "target_integration_name": "string",
        "python_module": "string",
        "how_to_guide": "string"
      }
    ],
    "connection_types": [
      {
        "connection_type": "string",
        "hook_class_name": "string",
        "hook_name": "string",
        "ui_field_behaviour": {
          "hidden_fields": [
            "string"
          ],
          "relabeling": {
            "property1": "string",
            "property2": "string"
          },
          "placeholders": {
            "property1": "string",
            "property2": "string"
          }
        },
        "conn_fields": {
          "property1": {
            "label": "string",
            "description": "string",
            "schema": {}
          },
          "property2": {
            "label": "string",
            "description": "string",
            "schema": {}
          }
        },
        "external_services": [
          "string"
        ]
      }
    ],
    "extra_links": [
      "string"
    ],
    "secrets_backends": [
      "string"
    ],
    "email_backends": [
      "string"
    ],
    "logging": [
      "string"
    ],
    "remote_logging": [
      {
        "classpath": "string",
        "scheme": "string"
      }
    ],
    "auth_backends": [
      "string"
    ],
    "auth_managers": [
      "string"
    ],
    "notifications": [
      "string"
    ],
    "executors": [
      "string"
    ],
    "db_managers": [
      "string"
    ],
    "cli": [
      "string"
    ],
    "config": {
      "property1": {
        "description": "string",
        "options": {
          "property1": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          },
          "property2": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          }
        }
      },
      "property2": {
        "description": "string",
        "options": {
          "property1": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          },
          "property2": {
            "description": "string",
            "version_added": "string",
            "type": "string",
            "example": "string",
            "default": "string",
            "sensitive": true,
            "is_template": true,
            "see_also": "string"
          }
        }
      }
    },
    "task_decorators": [
      {
        "name": "string",
        "class_name": "string"
      }
    ],
    "plugins": [
      {
        "name": "string",
        "plugin_class": "string"
      }
    ],
    "queues": [
      "string"
    ]
  }
}
```

Detailed provider serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package_name|string|true|none|none|
|description|string|true|none|none|
|version|string|true|none|none|
|documentation_url|string \| null|true|none|none|
|provider_info|[ProviderInfoResponse](#schemaproviderinforesponse)|true|none|Typed provider metadata (from ``provider.yaml``) exposed by the API.|

<h2 id="tocS_ProviderDialectInfo">ProviderDialectInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdialectinfo"></a>
<a id="schema_ProviderDialectInfo"></a>
<a id="tocSproviderdialectinfo"></a>
<a id="tocsproviderdialectinfo"></a>

```json
{
  "dialect_type": "string",
  "dialect_class_name": "string"
}
```

SQL dialect provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialect_type|string \| null|false|none|none|
|dialect_class_name|string \| null|false|none|none|

<h2 id="tocS_ProviderInfoResponse">ProviderInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinforesponse"></a>
<a id="schema_ProviderInfoResponse"></a>
<a id="tocSproviderinforesponse"></a>
<a id="tocsproviderinforesponse"></a>

```json
{
  "package_name": "string",
  "name": "string",
  "description": "string",
  "documentation_url": "string",
  "filesystems": [
    "string"
  ],
  "integrations": [
    {
      "integration_name": "string",
      "external_doc_url": "string",
      "how_to_guide": [
        "string"
      ],
      "logo": "string",
      "tags": [
        "string"
      ]
    }
  ],
  "operators": [
    {
      "integration_name": "string",
      "python_modules": [
        "string"
      ]
    }
  ],
  "sensors": [
    {
      "integration_name": "string",
      "python_modules": [
        "string"
      ]
    }
  ],
  "hooks": [
    {
      "integration_name": "string",
      "python_modules": [
        "string"
      ]
    }
  ],
  "triggers": [
    {
      "integration_name": "string",
      "python_modules": [
        "string"
      ]
    }
  ],
  "bundles": [
    {
      "integration_name": "string",
      "python_modules": [
        "string"
      ]
    }
  ],
  "asset_uris": [
    {
      "schemes": [
        "string"
      ],
      "handler": "string",
      "factory": "string",
      "to_openlineage_converter": "string"
    }
  ],
  "dialects": [
    {
      "dialect_type": "string",
      "dialect_class_name": "string"
    }
  ],
  "transfers": [
    {
      "source_integration_name": "string",
      "target_integration_name": "string",
      "python_module": "string",
      "how_to_guide": "string"
    }
  ],
  "connection_types": [
    {
      "connection_type": "string",
      "hook_class_name": "string",
      "hook_name": "string",
      "ui_field_behaviour": {
        "hidden_fields": [
          "string"
        ],
        "relabeling": {
          "property1": "string",
          "property2": "string"
        },
        "placeholders": {
          "property1": "string",
          "property2": "string"
        }
      },
      "conn_fields": {
        "property1": {
          "label": "string",
          "description": "string",
          "schema": {}
        },
        "property2": {
          "label": "string",
          "description": "string",
          "schema": {}
        }
      },
      "external_services": [
        "string"
      ]
    }
  ],
  "extra_links": [
    "string"
  ],
  "secrets_backends": [
    "string"
  ],
  "email_backends": [
    "string"
  ],
  "logging": [
    "string"
  ],
  "remote_logging": [
    {
      "classpath": "string",
      "scheme": "string"
    }
  ],
  "auth_backends": [
    "string"
  ],
  "auth_managers": [
    "string"
  ],
  "notifications": [
    "string"
  ],
  "executors": [
    "string"
  ],
  "db_managers": [
    "string"
  ],
  "cli": [
    "string"
  ],
  "config": {
    "property1": {
      "description": "string",
      "options": {
        "property1": {
          "description": "string",
          "version_added": "string",
          "type": "string",
          "example": "string",
          "default": "string",
          "sensitive": true,
          "is_template": true,
          "see_also": "string"
        },
        "property2": {
          "description": "string",
          "version_added": "string",
          "type": "string",
          "example": "string",
          "default": "string",
          "sensitive": true,
          "is_template": true,
          "see_also": "string"
        }
      }
    },
    "property2": {
      "description": "string",
      "options": {
        "property1": {
          "description": "string",
          "version_added": "string",
          "type": "string",
          "example": "string",
          "default": "string",
          "sensitive": true,
          "is_template": true,
          "see_also": "string"
        },
        "property2": {
          "description": "string",
          "version_added": "string",
          "type": "string",
          "example": "string",
          "default": "string",
          "sensitive": true,
          "is_template": true,
          "see_also": "string"
        }
      }
    }
  },
  "task_decorators": [
    {
      "name": "string",
      "class_name": "string"
    }
  ],
  "plugins": [
    {
      "name": "string",
      "plugin_class": "string"
    }
  ],
  "queues": [
    "string"
  ]
}
```

Typed provider metadata (from ``provider.yaml``) exposed by the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package_name|string \| null|false|none|none|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|documentation_url|string \| null|false|none|none|
|filesystems|[string] \| null|false|none|none|
|integrations|[[ProviderIntegrationInfo](#schemaproviderintegrationinfo)] \| null|false|none|none|
|operators|[[ProviderIntegrationModulesInfo](#schemaproviderintegrationmodulesinfo)] \| null|false|none|none|
|sensors|[[ProviderIntegrationModulesInfo](#schemaproviderintegrationmodulesinfo)] \| null|false|none|none|
|hooks|[[ProviderIntegrationModulesInfo](#schemaproviderintegrationmodulesinfo)] \| null|false|none|none|
|triggers|[[ProviderIntegrationModulesInfo](#schemaproviderintegrationmodulesinfo)] \| null|false|none|none|
|bundles|[[ProviderIntegrationModulesInfo](#schemaproviderintegrationmodulesinfo)] \| null|false|none|none|
|asset_uris|[[ProviderAssetUriInfo](#schemaproviderasseturiinfo)] \| null|false|none|none|
|dialects|[[ProviderDialectInfo](#schemaproviderdialectinfo)] \| null|false|none|none|
|transfers|[[ProviderTransferInfo](#schemaprovidertransferinfo)] \| null|false|none|none|
|connection_types|[[ProviderConnectionTypeInfo](#schemaproviderconnectiontypeinfo)] \| null|false|none|none|
|extra_links|[string] \| null|false|none|none|
|secrets_backends|[string] \| null|false|none|none|
|email_backends|[string] \| null|false|none|none|
|logging|[string] \| null|false|none|none|
|remote_logging|[[ProviderRemoteLoggingInfo](#schemaproviderremotelogginginfo)] \| null|false|none|none|
|auth_backends|[string] \| null|false|none|none|
|auth_managers|[string] \| null|false|none|none|
|notifications|[string] \| null|false|none|none|
|executors|[string] \| null|false|none|none|
|db_managers|[string] \| null|false|none|none|
|cli|[string] \| null|false|none|none|
|config|object \| null|false|none|none|
|task_decorators|[[ProviderTaskDecoratorInfo](#schemaprovidertaskdecoratorinfo)] \| null|false|none|none|
|plugins|[[ProviderPluginInfo](#schemaproviderplugininfo)] \| null|false|none|none|
|queues|[string] \| null|false|none|none|

<h2 id="tocS_ProviderIntegrationInfo">ProviderIntegrationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderintegrationinfo"></a>
<a id="schema_ProviderIntegrationInfo"></a>
<a id="tocSproviderintegrationinfo"></a>
<a id="tocsproviderintegrationinfo"></a>

```json
{
  "integration_name": "string",
  "external_doc_url": "string",
  "how_to_guide": [
    "string"
  ],
  "logo": "string",
  "tags": [
    "string"
  ]
}
```

Integration provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration_name|string|true|none|none|
|external_doc_url|string \| null|false|none|none|
|how_to_guide|[string] \| null|false|none|none|
|logo|string \| null|false|none|none|
|tags|[string] \| null|false|none|none|

<h2 id="tocS_ProviderIntegrationModulesInfo">ProviderIntegrationModulesInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderintegrationmodulesinfo"></a>
<a id="schema_ProviderIntegrationModulesInfo"></a>
<a id="tocSproviderintegrationmodulesinfo"></a>
<a id="tocsproviderintegrationmodulesinfo"></a>

```json
{
  "integration_name": "string",
  "python_modules": [
    "string"
  ]
}
```

Python modules an integration contributes for one kind of functionality.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integration_name|string|true|none|none|
|python_modules|[string]|true|none|none|

<h2 id="tocS_ProviderPluginInfo">ProviderPluginInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderplugininfo"></a>
<a id="schema_ProviderPluginInfo"></a>
<a id="tocSproviderplugininfo"></a>
<a id="tocsproviderplugininfo"></a>

```json
{
  "name": "string",
  "plugin_class": "string"
}
```

Plugin provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|plugin_class|string \| null|false|none|none|

<h2 id="tocS_ProviderRemoteLoggingInfo">ProviderRemoteLoggingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaproviderremotelogginginfo"></a>
<a id="schema_ProviderRemoteLoggingInfo"></a>
<a id="tocSproviderremotelogginginfo"></a>
<a id="tocsproviderremotelogginginfo"></a>

```json
{
  "classpath": "string",
  "scheme": "string"
}
```

Remote logging IO handler provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classpath|string|true|none|none|
|scheme|string|true|none|none|

<h2 id="tocS_ProviderResponse">ProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproviderresponse"></a>
<a id="schema_ProviderResponse"></a>
<a id="tocSproviderresponse"></a>
<a id="tocsproviderresponse"></a>

```json
{
  "package_name": "string",
  "description": "string",
  "version": "string",
  "documentation_url": "string"
}
```

Provider serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package_name|string|true|none|none|
|description|string|true|none|none|
|version|string|true|none|none|
|documentation_url|string \| null|true|none|none|

<h2 id="tocS_ProviderTaskDecoratorInfo">ProviderTaskDecoratorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertaskdecoratorinfo"></a>
<a id="schema_ProviderTaskDecoratorInfo"></a>
<a id="tocSprovidertaskdecoratorinfo"></a>
<a id="tocsprovidertaskdecoratorinfo"></a>

```json
{
  "name": "string",
  "class_name": "string"
}
```

TaskFlow decorator provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|class_name|string \| null|false|none|none|

<h2 id="tocS_ProviderTransferInfo">ProviderTransferInfo</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertransferinfo"></a>
<a id="schema_ProviderTransferInfo"></a>
<a id="tocSprovidertransferinfo"></a>
<a id="tocsprovidertransferinfo"></a>

```json
{
  "source_integration_name": "string",
  "target_integration_name": "string",
  "python_module": "string",
  "how_to_guide": "string"
}
```

Transfer operator provided by a provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_integration_name|string|true|none|none|
|target_integration_name|string|true|none|none|
|python_module|string|true|none|none|
|how_to_guide|string \| null|false|none|none|

<h2 id="tocS_QueuedEventCollectionResponse">QueuedEventCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedeventcollectionresponse"></a>
<a id="schema_QueuedEventCollectionResponse"></a>
<a id="tocSqueuedeventcollectionresponse"></a>
<a id="tocsqueuedeventcollectionresponse"></a>

```json
{
  "queued_events": [
    {
      "dag_id": "string",
      "asset_id": 0,
      "created_at": "1970-01-01T00:00:00Z",
      "dag_display_name": "string"
    }
  ],
  "total_entries": 0
}
```

Queued Event Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queued_events|[[QueuedEventResponse](#schemaqueuedeventresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_QueuedEventResponse">QueuedEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedeventresponse"></a>
<a id="schema_QueuedEventResponse"></a>
<a id="tocSqueuedeventresponse"></a>
<a id="tocsqueuedeventresponse"></a>

```json
{
  "dag_id": "string",
  "asset_id": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "dag_display_name": "string"
}
```

Queued Event serializer for responses..

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|asset_id|integer|true|none|none|
|created_at|string(date-time)|true|none|none|
|dag_display_name|string|true|none|none|

<h2 id="tocS_ReactAppResponse">ReactAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemareactappresponse"></a>
<a id="schema_ReactAppResponse"></a>
<a id="tocSreactappresponse"></a>
<a id="tocsreactappresponse"></a>

```json
{
  "name": "string",
  "icon": "string",
  "icon_dark_mode": "string",
  "url_route": "string",
  "category": "string",
  "nav_top_level": false,
  "applies_to": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "bundle_url": "string",
  "destination": "nav"
}
```

Serializer for React App Plugin responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|icon|string \| null|false|none|none|
|icon_dark_mode|string \| null|false|none|none|
|url_route|string \| null|false|none|none|
|category|string \| null|false|none|none|
|nav_top_level|boolean \| null|false|none|none|
|applies_to|[PluginAppliesToResponse](#schemapluginappliestoresponse) \| null|false|none|none|
|bundle_url|string|true|none|none|
|destination|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|destination|nav|
|destination|dag|
|destination|dag_run|
|destination|task|
|destination|task_instance|
|destination|asset|
|destination|base|
|destination|dashboard|
|destination|dag_overview|
|destination|task_overview|

<h2 id="tocS_ReprocessBehavior">ReprocessBehavior</h2>
<!-- backwards compatibility -->
<a id="schemareprocessbehavior"></a>
<a id="schema_ReprocessBehavior"></a>
<a id="tocSreprocessbehavior"></a>
<a id="tocsreprocessbehavior"></a>

```json
"failed"
```

Internal enum for setting reprocess behavior in a backfill.

:meta private:

<h2 id="tocS_SchedulerInfoResponse">SchedulerInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerinforesponse"></a>
<a id="schema_SchedulerInfoResponse"></a>
<a id="tocSschedulerinforesponse"></a>
<a id="tocsschedulerinforesponse"></a>

```json
{
  "status": "healthy",
  "latest_scheduler_heartbeat": "string",
  "detailed_status": "healthy",
  "instances": [
    {
      "hostname": "string",
      "latest_scheduler_heartbeat": "string"
    }
  ]
}
```

Scheduler info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[HealthStatus](#schemahealthstatus) \| null|true|none|none|
|latest_scheduler_heartbeat|string \| null|true|none|none|
|detailed_status|[DetailedHealthStatus](#schemadetailedhealthstatus) \| null|true|none|none|
|instances|[[SchedulerInstanceInfoResponse](#schemaschedulerinstanceinforesponse)] \| null|false|none|none|

<h2 id="tocS_SchedulerInstanceInfoResponse">SchedulerInstanceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschedulerinstanceinforesponse"></a>
<a id="schema_SchedulerInstanceInfoResponse"></a>
<a id="tocSschedulerinstanceinforesponse"></a>
<a id="tocsschedulerinstanceinforesponse"></a>

```json
{
  "hostname": "string",
  "latest_scheduler_heartbeat": "string"
}
```

Scheduler instance info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string \| null|true|none|none|
|latest_scheduler_heartbeat|string \| null|true|none|none|

<h2 id="tocS_StructuredLogMessage">StructuredLogMessage</h2>
<!-- backwards compatibility -->
<a id="schemastructuredlogmessage"></a>
<a id="schema_StructuredLogMessage"></a>
<a id="tocSstructuredlogmessage"></a>
<a id="tocsstructuredlogmessage"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "event": "string"
}
```

An individual log message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|false|none|none|
|event|string|true|none|none|

<h2 id="tocS_TaskCollectionResponse">TaskCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskcollectionresponse"></a>
<a id="schema_TaskCollectionResponse"></a>
<a id="tocStaskcollectionresponse"></a>
<a id="tocstaskcollectionresponse"></a>

```json
{
  "tasks": [
    {
      "task_id": "string",
      "task_display_name": "string",
      "owner": "string",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "trigger_rule": "string",
      "depends_on_past": true,
      "wait_for_downstream": true,
      "retries": 0,
      "queue": "string",
      "pool": "string",
      "pool_slots": 0,
      "execution_timeout": {
        "__type": "TimeDelta",
        "days": 0,
        "seconds": 0,
        "microseconds": 0
      },
      "retry_delay": {
        "__type": "TimeDelta",
        "days": 0,
        "seconds": 0,
        "microseconds": 0
      },
      "retry_exponential_backoff": 0,
      "priority_weight": 0,
      "weight_rule": "string",
      "ui_color": "string",
      "ui_fgcolor": "string",
      "template_fields": [
        "string"
      ],
      "downstream_task_ids": [
        "string"
      ],
      "doc_md": "string",
      "operator_name": "string",
      "params": {},
      "class_ref": {},
      "is_mapped": true,
      "extra_links": [
        "string"
      ]
    }
  ],
  "total_entries": 0
}
```

Task collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tasks|[[TaskResponse](#schemataskresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_TaskDependencyCollectionResponse">TaskDependencyCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskdependencycollectionresponse"></a>
<a id="schema_TaskDependencyCollectionResponse"></a>
<a id="tocStaskdependencycollectionresponse"></a>
<a id="tocstaskdependencycollectionresponse"></a>

```json
{
  "dependencies": [
    {
      "name": "string",
      "reason": "string"
    }
  ]
}
```

Task scheduling dependencies collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencies|[[TaskDependencyResponse](#schemataskdependencyresponse)]|true|none|none|

<h2 id="tocS_TaskDependencyResponse">TaskDependencyResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskdependencyresponse"></a>
<a id="schema_TaskDependencyResponse"></a>
<a id="tocStaskdependencyresponse"></a>
<a id="tocstaskdependencyresponse"></a>

```json
{
  "name": "string",
  "reason": "string"
}
```

Task Dependency serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|reason|string|true|none|none|

<h2 id="tocS_TaskInletAssetReference">TaskInletAssetReference</h2>
<!-- backwards compatibility -->
<a id="schemataskinletassetreference"></a>
<a id="schema_TaskInletAssetReference"></a>
<a id="tocStaskinletassetreference"></a>
<a id="tocstaskinletassetreference"></a>

```json
{
  "dag_id": "string",
  "task_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Task inlet reference serializer for assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|task_id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|

<h2 id="tocS_TaskInstanceCollectionResponse">TaskInstanceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancecollectionresponse"></a>
<a id="schema_TaskInstanceCollectionResponse"></a>
<a id="tocStaskinstancecollectionresponse"></a>
<a id="tocstaskinstancecollectionresponse"></a>

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "in_loop": true,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "logical_date": "1970-01-01T00:00:00Z",
      "run_after": "1970-01-01T00:00:00Z",
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "note": "string",
      "rendered_map_index": "string",
      "rendered_fields": {},
      "trigger": {
        "id": 0,
        "classpath": "string",
        "kwargs": "string",
        "created_date": "1970-01-01T00:00:00Z",
        "queue": "string",
        "triggerer_id": 0
      },
      "triggerer_job": {
        "id": 0,
        "dag_id": "string",
        "state": "string",
        "job_type": "string",
        "start_date": "1970-01-01T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "latest_heartbeat": "1970-01-01T00:00:00Z",
        "executor_class": "string",
        "hostname": "string",
        "unixname": "string",
        "team_names": [
          "string"
        ],
        "bundle_names": [
          "string"
        ],
        "dag_display_name": "string"
      },
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "team_name": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0,
  "total_entries_limit": 0,
  "next_cursor": "string",
  "previous_cursor": "string"
}
```

Task instance collection response supporting both offset and cursor pagination.

A single flat model is used instead of a discriminated union
(``Annotated[Offset | Cursor, Field(discriminator=...)]``) because
the OpenAPI ``oneOf`` + ``discriminator`` construct is not handled
correctly by ``@hey-api/openapi-ts`` / ``@7nohe/openapi-react-query-codegen``:
return types degrade to ``unknown`` in JSDoc and can produce
incorrect TypeScript types (see hey-api/openapi-ts#1613, #3270).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_instances|[[TaskInstanceResponse](#schemataskinstanceresponse)]|true|none|none|
|total_entries|integer \| null|false|none|Number of matching items. For offset pagination this is the exact total. For cursor pagination it is capped at ``total_entries_limit``; a value equal to that limit means at least that many items match.|
|total_entries_limit|integer \| null|false|none|Cap applied to ``total_entries`` under cursor pagination. ``null`` for offset pagination, where ``total_entries`` is exact.|
|next_cursor|string \| null|false|none|Token pointing to the next page. Populated for cursor pagination, ``null`` when using offset pagination or when there is no next page.|
|previous_cursor|string \| null|false|none|Token pointing to the previous page. Populated for cursor pagination, ``null`` when using offset pagination or when on the first page.|

<h2 id="tocS_TaskInstanceHistoryCollectionResponse">TaskInstanceHistoryCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancehistorycollectionresponse"></a>
<a id="schema_TaskInstanceHistoryCollectionResponse"></a>
<a id="tocStaskinstancehistorycollectionresponse"></a>
<a id="tocstaskinstancehistorycollectionresponse"></a>

```json
{
  "task_instances": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "task_id": "string",
      "dag_id": "string",
      "dag_run_id": "string",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "loop_iteration": {
        "loop_id": "string",
        "iteration": 1
      },
      "start_date": "1970-01-01T00:00:00Z",
      "end_date": "1970-01-01T00:00:00Z",
      "duration": 0,
      "state": "removed",
      "try_number": 0,
      "max_tries": 0,
      "task_display_name": "string",
      "dag_display_name": "string",
      "hostname": "string",
      "unixname": "string",
      "pool": "string",
      "pool_slots": 0,
      "queue": "string",
      "priority_weight": 0,
      "operator": "string",
      "operator_name": "string",
      "queued_when": "1970-01-01T00:00:00Z",
      "scheduled_when": "1970-01-01T00:00:00Z",
      "pid": 0,
      "executor": "string",
      "executor_config": "string",
      "dag_version": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "version_number": 0,
        "dag_id": "string",
        "bundle_name": "string",
        "bundle_version": "string",
        "created_at": "1970-01-01T00:00:00Z",
        "dag_display_name": "string",
        "bundle_url": "string"
      },
      "note": "string",
      "state_reason": "string",
      "retry_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

TaskInstanceHistory Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_instances|[[TaskInstanceHistoryResponse](#schemataskinstancehistoryresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_TaskInstanceHistoryResponse">TaskInstanceHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancehistoryresponse"></a>
<a id="schema_TaskInstanceHistoryResponse"></a>
<a id="tocStaskinstancehistoryresponse"></a>
<a id="tocstaskinstancehistoryresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_id": "string",
  "dag_id": "string",
  "dag_run_id": "string",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "loop_iteration": {
    "loop_id": "string",
    "iteration": 1
  },
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "state": "removed",
  "try_number": 0,
  "max_tries": 0,
  "task_display_name": "string",
  "dag_display_name": "string",
  "hostname": "string",
  "unixname": "string",
  "pool": "string",
  "pool_slots": 0,
  "queue": "string",
  "priority_weight": 0,
  "operator": "string",
  "operator_name": "string",
  "queued_when": "1970-01-01T00:00:00Z",
  "scheduled_when": "1970-01-01T00:00:00Z",
  "pid": 0,
  "executor": "string",
  "executor_config": "string",
  "dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "note": "string",
  "state_reason": "string",
  "retry_at": "1970-01-01T00:00:00Z"
}
```

TaskInstanceHistory serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|task_id|string|true|none|none|
|dag_id|string|true|none|none|
|dag_run_id|string|true|none|none|
|map_index|integer|true|none|none|
|region_id|string(uuid)|false|none|none|
|region_index|integer|false|none|none|
|loop_iteration|[LoopIterationResponse](#schemaloopiterationresponse) \| null|false|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|duration|number \| null|true|none|none|
|state|[TaskInstanceState](#schemataskinstancestate) \| null|true|none|none|
|try_number|integer|true|none|none|
|max_tries|integer|true|none|none|
|task_display_name|string|true|none|none|
|dag_display_name|string|true|none|none|
|hostname|string \| null|true|none|none|
|unixname|string \| null|true|none|none|
|pool|string|true|none|none|
|pool_slots|integer|true|none|none|
|queue|string \| null|true|none|none|
|priority_weight|integer \| null|true|none|none|
|operator|string \| null|true|none|none|
|operator_name|string \| null|true|none|none|
|queued_when|string(date-time) \| null|true|none|none|
|scheduled_when|string(date-time) \| null|true|none|none|
|pid|integer \| null|true|none|none|
|executor|string \| null|true|none|none|
|executor_config|string|true|none|none|
|dag_version|[DagVersionResponse](#schemadagversionresponse) \| null|true|none|none|
|note|string \| null|false|none|none|
|state_reason|string \| null|false|none|The reason this try ended, as recorded by a retry policy.|
|retry_at|string(date-time) \| null|false|none|When a task instance waiting to be retried becomes due. Only set in the up_for_retry state.|

<h2 id="tocS_TaskInstanceResponse">TaskInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskinstanceresponse"></a>
<a id="schema_TaskInstanceResponse"></a>
<a id="tocStaskinstanceresponse"></a>
<a id="tocstaskinstanceresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "task_id": "string",
  "dag_id": "string",
  "dag_run_id": "string",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "in_loop": true,
  "loop_iteration": {
    "loop_id": "string",
    "iteration": 1
  },
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "duration": 0,
  "state": "removed",
  "try_number": 0,
  "max_tries": 0,
  "task_display_name": "string",
  "dag_display_name": "string",
  "hostname": "string",
  "unixname": "string",
  "pool": "string",
  "pool_slots": 0,
  "queue": "string",
  "priority_weight": 0,
  "operator": "string",
  "operator_name": "string",
  "queued_when": "1970-01-01T00:00:00Z",
  "scheduled_when": "1970-01-01T00:00:00Z",
  "pid": 0,
  "executor": "string",
  "executor_config": "string",
  "note": "string",
  "rendered_map_index": "string",
  "rendered_fields": {},
  "trigger": {
    "id": 0,
    "classpath": "string",
    "kwargs": "string",
    "created_date": "1970-01-01T00:00:00Z",
    "queue": "string",
    "triggerer_id": 0
  },
  "triggerer_job": {
    "id": 0,
    "dag_id": "string",
    "state": "string",
    "job_type": "string",
    "start_date": "1970-01-01T00:00:00Z",
    "end_date": "1970-01-01T00:00:00Z",
    "latest_heartbeat": "1970-01-01T00:00:00Z",
    "executor_class": "string",
    "hostname": "string",
    "unixname": "string",
    "team_names": [
      "string"
    ],
    "bundle_names": [
      "string"
    ],
    "dag_display_name": "string"
  },
  "dag_version": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version_number": 0,
    "dag_id": "string",
    "bundle_name": "string",
    "bundle_version": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "dag_display_name": "string",
    "bundle_url": "string"
  },
  "team_name": "string",
  "state_reason": "string",
  "retry_at": "1970-01-01T00:00:00Z"
}
```

TaskInstance serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|task_id|string|true|none|none|
|dag_id|string|true|none|none|
|dag_run_id|string|true|none|none|
|map_index|integer|true|none|none|
|region_id|string(uuid)|false|none|none|
|region_index|integer|false|none|none|
|in_loop|boolean|true|none|none|
|loop_iteration|[LoopIterationResponse](#schemaloopiterationresponse) \| null|false|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|run_after|string(date-time)|true|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|duration|number \| null|true|none|none|
|state|[TaskInstanceState](#schemataskinstancestate) \| null|true|none|none|
|try_number|integer|true|none|none|
|max_tries|integer|true|none|none|
|task_display_name|string|true|none|none|
|dag_display_name|string|true|none|none|
|hostname|string \| null|true|none|none|
|unixname|string \| null|true|none|none|
|pool|string|true|none|none|
|pool_slots|integer|true|none|none|
|queue|string \| null|true|none|none|
|priority_weight|integer \| null|true|none|none|
|operator|string \| null|true|none|none|
|operator_name|string \| null|true|none|none|
|queued_when|string(date-time) \| null|true|none|none|
|scheduled_when|string(date-time) \| null|true|none|none|
|pid|integer \| null|true|none|none|
|executor|string \| null|true|none|none|
|executor_config|string|true|none|none|
|note|string \| null|true|none|none|
|rendered_map_index|string \| null|true|none|none|
|rendered_fields|object|false|none|none|
|trigger|[TriggerResponse](#schematriggerresponse) \| null|true|none|none|
|triggerer_job|[JobResponse](#schemajobresponse) \| null|true|none|none|
|dag_version|[DagVersionResponse](#schemadagversionresponse) \| null|true|none|none|
|team_name|string \| null|false|none|none|
|state_reason|string \| null|false|none|The reason the task instance reached its current state, as recorded by a retry policy. May describe a previous attempt: a task waiting to be retried still carries the reason its last attempt ended. It is cleared when the task is cleared and when the next attempt is scheduled or deferred.|
|retry_at|string(date-time) \| null|false|none|When a task instance waiting to be retried becomes due. Only set in the up_for_retry state.|

<h2 id="tocS_TaskInstanceState">TaskInstanceState</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancestate"></a>
<a id="schema_TaskInstanceState"></a>
<a id="tocStaskinstancestate"></a>
<a id="tocstaskinstancestate"></a>

```json
"removed"
```

All possible states that a Task Instance can be in.

Note that None is also allowed, so always use this in a type hint with Optional.

<h2 id="tocS_TaskInstancesBatchBody">TaskInstancesBatchBody</h2>
<!-- backwards compatibility -->
<a id="schemataskinstancesbatchbody"></a>
<a id="schema_TaskInstancesBatchBody"></a>
<a id="tocStaskinstancesbatchbody"></a>
<a id="tocstaskinstancesbatchbody"></a>

```json
{
  "dag_ids": [
    "string"
  ],
  "dag_run_ids": [
    "string"
  ],
  "task_ids": [
    "string"
  ],
  "state": [
    "removed"
  ],
  "run_after_gte": "1970-01-01T00:00:00Z",
  "run_after_gt": "1970-01-01T00:00:00Z",
  "run_after_lte": "1970-01-01T00:00:00Z",
  "run_after_lt": "1970-01-01T00:00:00Z",
  "logical_date_gte": "1970-01-01T00:00:00Z",
  "logical_date_gt": "1970-01-01T00:00:00Z",
  "logical_date_lte": "1970-01-01T00:00:00Z",
  "logical_date_lt": "1970-01-01T00:00:00Z",
  "start_date_gte": "1970-01-01T00:00:00Z",
  "start_date_gt": "1970-01-01T00:00:00Z",
  "start_date_lte": "1970-01-01T00:00:00Z",
  "start_date_lt": "1970-01-01T00:00:00Z",
  "end_date_gte": "1970-01-01T00:00:00Z",
  "end_date_gt": "1970-01-01T00:00:00Z",
  "end_date_lte": "1970-01-01T00:00:00Z",
  "end_date_lt": "1970-01-01T00:00:00Z",
  "duration_gte": 0,
  "duration_gt": 0,
  "duration_lte": 0,
  "duration_lt": 0,
  "pool": [
    "string"
  ],
  "queue": [
    "string"
  ],
  "executor": [
    "string"
  ],
  "page_offset": 0,
  "page_limit": 100,
  "order_by": "string"
}
```

Task Instance body for get batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_ids|[string] \| null|false|none|none|
|dag_run_ids|[string] \| null|false|none|none|
|task_ids|[string] \| null|false|none|none|
|state|[[TaskInstanceState](#schemataskinstancestate) \| null] \| null|false|none|none|
|run_after_gte|string(date-time) \| null|false|none|none|
|run_after_gt|string(date-time) \| null|false|none|none|
|run_after_lte|string(date-time) \| null|false|none|none|
|run_after_lt|string(date-time) \| null|false|none|none|
|logical_date_gte|string(date-time) \| null|false|none|none|
|logical_date_gt|string(date-time) \| null|false|none|none|
|logical_date_lte|string(date-time) \| null|false|none|none|
|logical_date_lt|string(date-time) \| null|false|none|none|
|start_date_gte|string(date-time) \| null|false|none|none|
|start_date_gt|string(date-time) \| null|false|none|none|
|start_date_lte|string(date-time) \| null|false|none|none|
|start_date_lt|string(date-time) \| null|false|none|none|
|end_date_gte|string(date-time) \| null|false|none|none|
|end_date_gt|string(date-time) \| null|false|none|none|
|end_date_lte|string(date-time) \| null|false|none|none|
|end_date_lt|string(date-time) \| null|false|none|none|
|duration_gte|number \| null|false|none|none|
|duration_gt|number \| null|false|none|none|
|duration_lte|number \| null|false|none|none|
|duration_lt|number \| null|false|none|none|
|pool|[string] \| null|false|none|none|
|queue|[string] \| null|false|none|none|
|executor|[string] \| null|false|none|none|
|page_offset|integer|false|none|none|
|page_limit|integer|false|none|none|
|order_by|string \| null|false|none|none|

<h2 id="tocS_TaskInstancesLogResponse">TaskInstancesLogResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskinstanceslogresponse"></a>
<a id="schema_TaskInstancesLogResponse"></a>
<a id="tocStaskinstanceslogresponse"></a>
<a id="tocstaskinstanceslogresponse"></a>

```json
{
  "content": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "event": "string"
    }
  ],
  "continuation_token": "string"
}
```

Log serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[StructuredLogMessage](#schemastructuredlogmessage)] \| [string]|true|none|none|
|continuation_token|string \| null|true|none|none|

<h2 id="tocS_TaskOutletAssetReference">TaskOutletAssetReference</h2>
<!-- backwards compatibility -->
<a id="schemataskoutletassetreference"></a>
<a id="schema_TaskOutletAssetReference"></a>
<a id="tocStaskoutletassetreference"></a>
<a id="tocstaskoutletassetreference"></a>

```json
{
  "dag_id": "string",
  "task_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

Task outlet reference serializer for assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_id|string|true|none|none|
|task_id|string|true|none|none|
|created_at|string(date-time)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_TaskResponse">TaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskresponse"></a>
<a id="schema_TaskResponse"></a>
<a id="tocStaskresponse"></a>
<a id="tocstaskresponse"></a>

```json
{
  "task_id": "string",
  "task_display_name": "string",
  "owner": "string",
  "start_date": "1970-01-01T00:00:00Z",
  "end_date": "1970-01-01T00:00:00Z",
  "trigger_rule": "string",
  "depends_on_past": true,
  "wait_for_downstream": true,
  "retries": 0,
  "queue": "string",
  "pool": "string",
  "pool_slots": 0,
  "execution_timeout": {
    "__type": "TimeDelta",
    "days": 0,
    "seconds": 0,
    "microseconds": 0
  },
  "retry_delay": {
    "__type": "TimeDelta",
    "days": 0,
    "seconds": 0,
    "microseconds": 0
  },
  "retry_exponential_backoff": 0,
  "priority_weight": 0,
  "weight_rule": "string",
  "ui_color": "string",
  "ui_fgcolor": "string",
  "template_fields": [
    "string"
  ],
  "downstream_task_ids": [
    "string"
  ],
  "doc_md": "string",
  "operator_name": "string",
  "params": {},
  "class_ref": {},
  "is_mapped": true,
  "extra_links": [
    "string"
  ]
}
```

Task serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_id|string \| null|true|none|none|
|task_display_name|string \| null|true|none|none|
|owner|string \| null|true|none|none|
|start_date|string(date-time) \| null|true|none|none|
|end_date|string(date-time) \| null|true|none|none|
|trigger_rule|string \| null|true|none|none|
|depends_on_past|boolean|true|none|none|
|wait_for_downstream|boolean|true|none|none|
|retries|number \| null|true|none|none|
|queue|string \| null|true|none|none|
|pool|string \| null|true|none|none|
|pool_slots|number \| null|true|none|none|
|execution_timeout|[TimeDelta](#schematimedelta) \| null|true|none|none|
|retry_delay|[TimeDelta](#schematimedelta) \| null|true|none|none|
|retry_exponential_backoff|number|true|none|none|
|priority_weight|number \| null|true|none|none|
|weight_rule|string \| null|true|none|none|
|ui_color|string \| null|true|none|none|
|ui_fgcolor|string \| null|true|none|none|
|template_fields|[string] \| null|true|none|none|
|downstream_task_ids|[string] \| null|true|none|none|
|doc_md|string \| null|true|none|none|
|operator_name|string \| null|true|none|none|
|params|object \| null|true|none|none|
|class_ref|object \| null|true|none|none|
|is_mapped|boolean \| null|true|none|none|
|extra_links|[string]|true|read-only|Extract and return extra_links.|

<h2 id="tocS_TaskStateStoreBody">TaskStateStoreBody</h2>
<!-- backwards compatibility -->
<a id="schemataskstatestorebody"></a>
<a id="schema_TaskStateStoreBody"></a>
<a id="tocStaskstatestorebody"></a>
<a id="tocstaskstatestorebody"></a>

```json
{
  "value": null,
  "expires_at": "default"
}
```

Request body for setting a task state store value.

``expires_at`` controls expiry:

- ``"default"``: apply the configured ``[state_store] default_retention_days``.
- ``null``: never expire.
- aware datetime: expire at that time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[JsonValue](#schemajsonvalue)|true|none|none|
|expires_at|string(date-time) \| string \| null|false|none|none|

<h2 id="tocS_TaskStateStoreCollectionResponse">TaskStateStoreCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskstatestorecollectionresponse"></a>
<a id="schema_TaskStateStoreCollectionResponse"></a>
<a id="tocStaskstatestorecollectionresponse"></a>
<a id="tocstaskstatestorecollectionresponse"></a>

```json
{
  "task_state_store": [
    {
      "key": "string",
      "value": null,
      "updated_at": "1970-01-01T00:00:00Z",
      "expires_at": "1970-01-01T00:00:00Z"
    }
  ],
  "total_entries": 0
}
```

All task state store entries for a task instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task_state_store|[[TaskStateStoreResponse](#schemataskstatestoreresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_TaskStateStorePatchBody">TaskStateStorePatchBody</h2>
<!-- backwards compatibility -->
<a id="schemataskstatestorepatchbody"></a>
<a id="schema_TaskStateStorePatchBody"></a>
<a id="tocStaskstatestorepatchbody"></a>
<a id="tocstaskstatestorepatchbody"></a>

```json
{
  "value": null
}
```

Request body for patching only the value of an existing task state store key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[JsonValue](#schemajsonvalue)|true|none|none|

<h2 id="tocS_TaskStateStoreResponse">TaskStateStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemataskstatestoreresponse"></a>
<a id="schema_TaskStateStoreResponse"></a>
<a id="tocStaskstatestoreresponse"></a>
<a id="tocstaskstatestoreresponse"></a>

```json
{
  "key": "string",
  "value": null,
  "updated_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z"
}
```

A single task state store key/value pair with metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|[JsonValue](#schemajsonvalue)|true|none|none|
|updated_at|string(date-time)|true|none|none|
|expires_at|string(date-time) \| null|true|none|none|

<h2 id="tocS_TimeDelta">TimeDelta</h2>
<!-- backwards compatibility -->
<a id="schematimedelta"></a>
<a id="schema_TimeDelta"></a>
<a id="tocStimedelta"></a>
<a id="tocstimedelta"></a>

```json
{
  "__type": "TimeDelta",
  "days": 0,
  "seconds": 0,
  "microseconds": 0
}
```

TimeDelta can be used to interact with datetime.timedelta objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|__type|string|false|none|none|
|days|integer|true|none|none|
|seconds|integer|true|none|none|
|microseconds|integer|true|none|none|

<h2 id="tocS_TriggerDAGRunPostBody">TriggerDAGRunPostBody</h2>
<!-- backwards compatibility -->
<a id="schematriggerdagrunpostbody"></a>
<a id="schema_TriggerDAGRunPostBody"></a>
<a id="tocStriggerdagrunpostbody"></a>
<a id="tocstriggerdagrunpostbody"></a>

```json
{
  "dag_run_id": "string",
  "data_interval_start": "1970-01-01T00:00:00Z",
  "data_interval_end": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "run_after": "1970-01-01T00:00:00Z",
  "conf": {},
  "note": "string",
  "partition_key": "string",
  "bundle_version": "string",
  "drain_dag": false
}
```

Trigger Dag Run Serializer for POST body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dag_run_id|string \| null|false|none|none|
|data_interval_start|string(date-time) \| null|false|none|none|
|data_interval_end|string(date-time) \| null|false|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|run_after|string(date-time) \| null|false|none|none|
|conf|object \| null|false|none|none|
|note|string \| null|false|none|none|
|partition_key|string \| null|false|none|none|
|bundle_version|string \| null|false|none|none|
|drain_dag|boolean|false|none|Drain the Dag together with this run. Draining changes the whole Dag: unfinished runs can start or resume except those held by paused backfills. No scheduled runs are created, and the Dag pauses once all unfinished runs finish. Paused backfills must be resumed for draining to complete. Requires the same permission as pausing the Dag.|

<h2 id="tocS_TriggerResponse">TriggerResponse</h2>
<!-- backwards compatibility -->
<a id="schematriggerresponse"></a>
<a id="schema_TriggerResponse"></a>
<a id="tocStriggerresponse"></a>
<a id="tocstriggerresponse"></a>

```json
{
  "id": 0,
  "classpath": "string",
  "kwargs": "string",
  "created_date": "1970-01-01T00:00:00Z",
  "queue": "string",
  "triggerer_id": 0
}
```

Trigger serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|none|
|classpath|string|true|none|none|
|kwargs|string|true|none|**Deprecated.**|
|created_date|string(date-time)|true|none|none|
|queue|string \| null|true|none|none|
|triggerer_id|integer \| null|true|none|none|

<h2 id="tocS_TriggererInfoResponse">TriggererInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schematriggererinforesponse"></a>
<a id="schema_TriggererInfoResponse"></a>
<a id="tocStriggererinforesponse"></a>
<a id="tocstriggererinforesponse"></a>

```json
{
  "status": "healthy",
  "latest_triggerer_heartbeat": "string",
  "detailed_status": "healthy",
  "instances": [
    {
      "hostname": "string",
      "latest_triggerer_heartbeat": "string",
      "team_names": [
        "string"
      ]
    }
  ]
}
```

Triggerer info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[HealthStatus](#schemahealthstatus) \| null|true|none|none|
|latest_triggerer_heartbeat|string \| null|true|none|none|
|detailed_status|[DetailedHealthStatus](#schemadetailedhealthstatus) \| null|true|none|none|
|instances|[[TriggererInstanceInfoResponse](#schematriggererinstanceinforesponse)] \| null|false|none|none|

<h2 id="tocS_TriggererInstanceInfoResponse">TriggererInstanceInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schematriggererinstanceinforesponse"></a>
<a id="schema_TriggererInstanceInfoResponse"></a>
<a id="tocStriggererinstanceinforesponse"></a>
<a id="tocstriggererinstanceinforesponse"></a>

```json
{
  "hostname": "string",
  "latest_triggerer_heartbeat": "string",
  "team_names": [
    "string"
  ]
}
```

Triggerer instance info serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string \| null|true|none|none|
|latest_triggerer_heartbeat|string \| null|true|none|none|
|team_names|[string]|true|none|none|

<h2 id="tocS_UpdateHITLDetailPayload">UpdateHITLDetailPayload</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehitldetailpayload"></a>
<a id="schema_UpdateHITLDetailPayload"></a>
<a id="tocSupdatehitldetailpayload"></a>
<a id="tocsupdatehitldetailpayload"></a>

```json
{
  "chosen_options": [
    "string"
  ],
  "params_input": {},
  "request_created_at": "1970-01-01T00:00:00Z"
}
```

Schema for updating the content of a Human-in-the-loop detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chosen_options|[string]|true|none|none|
|params_input|object|false|none|none|
|request_created_at|string(date-time) \| null|false|none|The ``created_at`` of the request this response answers, exactly as the GET endpoint returned it. When the task has since replaced its request (it asked again after a resume, retry or clear), the response is refused with 409 instead of answering a request the user did not see. Leave it out to answer whatever request is waiting.|

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

<h2 id="tocS_VariableBody">VariableBody</h2>
<!-- backwards compatibility -->
<a id="schemavariablebody"></a>
<a id="schema_VariableBody"></a>
<a id="tocSvariablebody"></a>
<a id="tocsvariablebody"></a>

```json
{
  "key": "string",
  "value": null,
  "description": "string",
  "team_name": "string"
}
```

Variable serializer for bodies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|[JsonValue](#schemajsonvalue)|true|none|none|
|description|string \| null|false|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_VariableCollectionResponse">VariableCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemavariablecollectionresponse"></a>
<a id="schema_VariableCollectionResponse"></a>
<a id="tocSvariablecollectionresponse"></a>
<a id="tocsvariablecollectionresponse"></a>

```json
{
  "variables": [
    {
      "key": "string",
      "value": "string",
      "description": "string",
      "is_encrypted": true,
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

Variable Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variables|[[VariableResponse](#schemavariableresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_VariableResponse">VariableResponse</h2>
<!-- backwards compatibility -->
<a id="schemavariableresponse"></a>
<a id="schema_VariableResponse"></a>
<a id="tocSvariableresponse"></a>
<a id="tocsvariableresponse"></a>

```json
{
  "key": "string",
  "value": "string",
  "description": "string",
  "is_encrypted": true,
  "team_name": "string"
}
```

Variable serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string \| null|false|none|none|
|description|string \| null|true|none|none|
|is_encrypted|boolean|true|none|none|
|team_name|string \| null|true|none|none|

<h2 id="tocS_VersionInfo">VersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaversioninfo"></a>
<a id="schema_VersionInfo"></a>
<a id="tocSversioninfo"></a>
<a id="tocsversioninfo"></a>

```json
{
  "version": "string",
  "git_version": "string"
}
```

Version information serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|none|
|git_version|string \| null|true|none|none|

<h2 id="tocS_XComCollectionResponse">XComCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaxcomcollectionresponse"></a>
<a id="schema_XComCollectionResponse"></a>
<a id="tocSxcomcollectionresponse"></a>
<a id="tocsxcomcollectionresponse"></a>

```json
{
  "xcom_entries": [
    {
      "key": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "logical_date": "1970-01-01T00:00:00Z",
      "map_index": 0,
      "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "region_index": 0,
      "task_id": "string",
      "dag_id": "string",
      "run_id": "string",
      "dag_display_name": "string",
      "task_display_name": "string",
      "run_after": "1970-01-01T00:00:00Z",
      "team_name": "string"
    }
  ],
  "total_entries": 0
}
```

XCom Collection serializer for responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|xcom_entries|[[XComResponse](#schemaxcomresponse)]|true|none|none|
|total_entries|integer|true|none|none|

<h2 id="tocS_XComCreateBody">XComCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemaxcomcreatebody"></a>
<a id="schema_XComCreateBody"></a>
<a id="tocSxcomcreatebody"></a>
<a id="tocsxcomcreatebody"></a>

```json
{
  "key": "string",
  "value": null,
  "map_index": -1,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": -1
}
```

Payload serializer for creating an XCom entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|object|true|none|none|
|map_index|integer|false|none|none|
|region_id|string(uuid) \| null|false|none|none|
|region_index|integer \| null|false|none|none|

<h2 id="tocS_XComResponse">XComResponse</h2>
<!-- backwards compatibility -->
<a id="schemaxcomresponse"></a>
<a id="schema_XComResponse"></a>
<a id="tocSxcomresponse"></a>
<a id="tocsxcomresponse"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "task_id": "string",
  "dag_id": "string",
  "run_id": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "run_after": "1970-01-01T00:00:00Z",
  "team_name": "string"
}
```

Serializer for a xcom item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|timestamp|string(date-time)|true|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|map_index|integer|true|none|none|
|region_id|string(uuid)|false|none|none|
|region_index|integer|false|none|none|
|task_id|string|true|none|none|
|dag_id|string|true|none|none|
|run_id|string|true|none|none|
|dag_display_name|string|true|none|none|
|task_display_name|string|true|none|none|
|run_after|string(date-time)|true|none|none|
|team_name|string \| null|false|none|none|

<h2 id="tocS_XComResponseNative">XComResponseNative</h2>
<!-- backwards compatibility -->
<a id="schemaxcomresponsenative"></a>
<a id="schema_XComResponseNative"></a>
<a id="tocSxcomresponsenative"></a>
<a id="tocsxcomresponsenative"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "task_id": "string",
  "dag_id": "string",
  "run_id": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "run_after": "1970-01-01T00:00:00Z",
  "team_name": "string",
  "value": null
}
```

XCom response serializer with native return type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|timestamp|string(date-time)|true|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|map_index|integer|true|none|none|
|region_id|string(uuid)|false|none|none|
|region_index|integer|false|none|none|
|task_id|string|true|none|none|
|dag_id|string|true|none|none|
|run_id|string|true|none|none|
|dag_display_name|string|true|none|none|
|task_display_name|string|true|none|none|
|run_after|string(date-time)|true|none|none|
|team_name|string \| null|false|none|none|
|value|object|true|none|none|

<h2 id="tocS_XComResponseString">XComResponseString</h2>
<!-- backwards compatibility -->
<a id="schemaxcomresponsestring"></a>
<a id="schema_XComResponseString"></a>
<a id="tocSxcomresponsestring"></a>
<a id="tocsxcomresponsestring"></a>

```json
{
  "key": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "logical_date": "1970-01-01T00:00:00Z",
  "map_index": 0,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": 0,
  "task_id": "string",
  "dag_id": "string",
  "run_id": "string",
  "dag_display_name": "string",
  "task_display_name": "string",
  "run_after": "1970-01-01T00:00:00Z",
  "team_name": "string",
  "value": "string"
}
```

XCom response serializer with string return type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|timestamp|string(date-time)|true|none|none|
|logical_date|string(date-time) \| null|true|none|none|
|map_index|integer|true|none|none|
|region_id|string(uuid)|false|none|none|
|region_index|integer|false|none|none|
|task_id|string|true|none|none|
|dag_id|string|true|none|none|
|run_id|string|true|none|none|
|dag_display_name|string|true|none|none|
|task_display_name|string|true|none|none|
|run_after|string(date-time)|true|none|none|
|team_name|string \| null|false|none|none|
|value|string \| null|true|none|none|

<h2 id="tocS_XComUpdateBody">XComUpdateBody</h2>
<!-- backwards compatibility -->
<a id="schemaxcomupdatebody"></a>
<a id="schema_XComUpdateBody"></a>
<a id="tocSxcomupdatebody"></a>
<a id="tocsxcomupdatebody"></a>

```json
{
  "value": null,
  "map_index": -1,
  "region_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "region_index": -1
}
```

Payload serializer for updating an XCom entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|
|map_index|integer|false|none|none|
|region_id|string(uuid) \| null|false|none|none|
|region_index|integer \| null|false|none|none|
