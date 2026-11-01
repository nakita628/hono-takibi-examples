<h1 id="fluss-gateway">fluss-gateway v1.1.0-SNAPSHOT</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Stateless REST gateway for Apache Fluss

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache-2.0</a>

<h1 id="fluss-gateway-health">health</h1>

## Returns process liveness and uptime without a backend RPC.

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl http://localhost:8080/health \
  -H 'Accept: application/json'
```

`GET /health`

> Example responses

> 200 Response

```json
{
  "status": "string",
  "uptime_ms": 0
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 405 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="returns-process-liveness-and-uptime-without-a-backend-rpc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Gateway liveness and uptime|[HealthResponse](#schemahealthresponse)|
|400|Bad Request|This operation accepts no query parameters|[ErrorEnvelope](#schemaerrorenvelope)|
|405|Method Not Allowed|Wrong method for this route|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Readiness for load balancers and readiness probes.

<a id="opIdgetReady"></a>

> Code samples

```bash
curl http://localhost:8080/ready \
  -H 'Accept: application/json'
```

`GET /ready`

`/health` is liveness and stays 200 while the process answers, so a liveness probe never
restarts a draining process; this route reports acceptance instead. Readiness covers the process
lifecycle only: Fluss cluster availability surfaces through request errors and metrics, not by
unloading every gateway instance at once.

> Example responses

> 200 Response

```json
{
  "status": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 405 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="readiness-for-load-balancers-and-readiness-probes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The gateway accepts application traffic|[ReadyResponse](#schemareadyresponse)|
|400|Bad Request|This operation accepts no query parameters|[ErrorEnvelope](#schemaerrorenvelope)|
|405|Method Not Allowed|Wrong method for this route|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|The gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fluss-gateway-metadata">metadata</h1>

## Lists the configured clusters.

<a id="opIdlistClusters"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters \
  -H 'Accept: application/json'
```

`GET /v1/clusters`

This is a configuration echo: it touches no connection, so it answers at the same speed whether
Fluss is up or down, and a caller polling it cannot turn into a burst of connection attempts. It
deliberately carries **no** reachability field — the gateway has no background probe, so any such
field would report the outcome of some earlier request rather than the current state. Whether a
cluster can be served shows up in the errors of its own requests and in the `connections_*` metrics.

> Example responses

> 200 Response

```json
{
  "clusters": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 405 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="lists-the-configured-clusters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configured cluster IDs in lexical order|[ClustersResponse](#schemaclustersresponse)|
|400|Bad Request|This operation accepts no query parameters|[ErrorEnvelope](#schemaerrorenvelope)|
|405|Method Not Allowed|Wrong method for this route|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Gateway starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Lists the databases of one configured cluster.

<a id="opIdlistDatabases"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases \
  -H 'Accept: application/json'
```

`GET /v1/clusters/{cluster}/databases`

<h3 id="lists-the-databases-of-one-configured-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|max_results|query|integer|false|Maximum entries to return. Defaults to 100, capped at 1000.|
|page_token|query|string|false|Opaque token from the `next_page_token` of the previous response.|

> Example responses

> 200 Response

```json
{
  "databases": [
    "string"
  ],
  "next_page_token": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="lists-the-databases-of-one-configured-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Databases in lexical order|[DatabasesResponse](#schemadatabasesresponse)|
|400|Bad Request|Invalid page parameter or page token|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Lists the tables of one database.

<a id="opIdlistTables"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables \
  -H 'Accept: application/json'
```

`GET /v1/clusters/{cluster}/databases/{database}/tables`

<h3 id="lists-the-tables-of-one-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|max_results|query|integer|false|Maximum entries to return. Defaults to 100, capped at 1000.|
|page_token|query|string|false|Opaque token from the `next_page_token` of the previous response.|

> Example responses

> 200 Response

```json
{
  "next_page_token": "string",
  "tables": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="lists-the-tables-of-one-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tables in lexical order|[TablesResponse](#schematablesresponse)|
|400|Bad Request|Invalid page parameter or page token|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster or database|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Describes one table: its schema, keys, distribution, partitioning, and properties.

<a id="opIddescribeTable"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string \
  -H 'Accept: application/json'
```

`GET /v1/clusters/{cluster}/databases/{database}/tables/{table}`

<h3 id="describes-one-table-its-schema-keys-distribution-partitioning-and-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|table|path|string|true|Table name|

> Example responses

> 200 Response

```json
{
  "columns": [
    {
      "comment": "string",
      "data_type": {
        "type": "BOOLEAN"
      },
      "name": "string",
      "nullable": true
    }
  ],
  "comment": "string",
  "configs": {
    "property1": "string",
    "property2": "string"
  },
  "custom_properties": {
    "property1": "string",
    "property2": "string"
  },
  "database": "string",
  "distribution": {
    "bucket_count": 1,
    "bucket_keys": [
      "string"
    ]
  },
  "partitioned_by": [
    "string"
  ],
  "primary_key": [
    "string"
  ],
  "table": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="describes-one-table-its-schema-keys-distribution-partitioning-and-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The table metadata|[TableResponse](#schematableresponse)|
|400|Bad Request|Unsupported query parameter|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster, database, or table|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Lists the partitions of one partitioned table.

<a id="opIdlistPartitions"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string/partitions \
  -H 'Accept: application/json'
```

`GET /v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions`

<h3 id="lists-the-partitions-of-one-partitioned-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|table|path|string|true|Table name|
|max_results|query|integer|false|Maximum entries to return. Defaults to 100, capped at 1000.|
|page_token|query|string|false|Opaque token from the `next_page_token` of the previous response.|

> Example responses

> 200 Response

```json
{
  "next_page_token": "string",
  "partitions": [
    {
      "name": "string",
      "partition": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="lists-the-partitions-of-one-partitioned-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Partitions in partition-name order|[PartitionsResponse](#schemapartitionsresponse)|
|400|Bad Request|Invalid page parameter or page token|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster, database, or table|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Serves the generated OpenAPI 3.1 document as JSON.

<a id="opIdgetOpenApi"></a>

> Code samples

```bash
curl http://localhost:8080/v1/openapi.json \
  -H 'Accept: application/json'
```

`GET /v1/openapi.json`

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 405 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="serves-the-generated-openapi-31-document-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI 3.1 document|None|
|400|Bad Request|This operation accepts no query parameters|[ErrorEnvelope](#schemaerrorenvelope)|
|405|Method Not Allowed|Wrong method for this route|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Gateway starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fluss-gateway-ddl">ddl</h1>

## Creates one database.

<a id="opIdcreateDatabase"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "database": "string"
  }'
```

`POST /v1/clusters/{cluster}/databases`

> Body parameter

```json
{
  "database": "string"
}
```

<h3 id="creates-one-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|body|body|[CreateDatabaseBody](#schemacreatedatabasebody)|true|none|
|» database|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "database": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 415 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="creates-one-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created database|[DatabaseResponse](#schemadatabaseresponse)|
|400|Bad Request|Malformed body or invalid definition|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster|[ErrorEnvelope](#schemaerrorenvelope)|
|409|Conflict|The database already exists|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|415|Unsupported Media Type|The body is not JSON|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Created database URL|

<aside class="success">
This operation does not require authentication
</aside>

## Drops a database only if it contains no tables.

<a id="opIddropDatabase"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/clusters/{cluster}/databases/{database}`

<h3 id="drops-a-database-only-if-it-contains-no-tables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="drops-a-database-only-if-it-contains-no-tables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The database was dropped|None|
|400|Bad Request|Unsupported query parameter|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster or database|[ErrorEnvelope](#schemaerrorenvelope)|
|409|Conflict|The database still holds tables|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates one table, or validates its definition without creating it.

<a id="opIdcreateTable"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "columns": [
      {
        "comment": "string",
        "data_type": {
          "type": "BOOLEAN"
        },
        "name": "string",
        "nullable": true
      }
    ],
    "comment": "string",
    "configs": {
      "property1": "string",
      "property2": "string"
    },
    "custom_properties": {
      "property1": "string",
      "property2": "string"
    },
    "distribution": {
      "bucket_count": 1,
      "bucket_keys": [
        "string"
      ]
    },
    "partitioned_by": [
      "string"
    ],
    "primary_key": [
      "string"
    ],
    "table_name": "string",
    "validate_only": true
  }'
```

`POST /v1/clusters/{cluster}/databases/{database}/tables`

> Body parameter

```json
{
  "columns": [
    {
      "comment": "string",
      "data_type": {
        "type": "BOOLEAN"
      },
      "name": "string",
      "nullable": true
    }
  ],
  "comment": "string",
  "configs": {
    "property1": "string",
    "property2": "string"
  },
  "custom_properties": {
    "property1": "string",
    "property2": "string"
  },
  "distribution": {
    "bucket_count": 1,
    "bucket_keys": [
      "string"
    ]
  },
  "partitioned_by": [
    "string"
  ],
  "primary_key": [
    "string"
  ],
  "table_name": "string",
  "validate_only": true
}
```

<h3 id="creates-one-table-or-validates-its-definition-without-creating-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|body|body|[CreateTableBody](#schemacreatetablebody)|true|none|
|» columns|body|[[ColumnBody](#schemacolumnbody)]|true|none|
|» comment|body|string \| null|false|none|
|» configs|body|object|false|Fluss table properties, validated by the server.|
|» » **additionalProperties**|body|string|false|none|
|» custom_properties|body|object|false|Custom table metadata; keys must not use the reserved `table.` prefix.|
|» » **additionalProperties**|body|string|false|none|
|» distribution|body|null \| [DistributionBody](#schemadistributionbody)|false|none|
|» » *oneOf*|body|null|false|none|
|» » *oneOf*|body|[DistributionBody](#schemadistributionbody)|false|The bucket distribution of a table definition.|
|» partitioned_by|body|[string]|false|none|
|» primary_key|body|[string]|false|Primary-key columns; omit for a log table.|
|» table_name|body|string|true|none|
|» validate_only|body|boolean|false|Build and validate the definition locally without creating anything.|

> Example responses

> 200 Response

```json
{
  "column_count": 0,
  "database": "string",
  "primary_key": [
    "string"
  ],
  "table": "string",
  "validate_only": true
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 415 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="creates-one-table-or-validates-its-definition-without-creating-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Dry run: fluss-rs accepted the definition and nothing was created|[ValidateOnlyResponse](#schemavalidateonlyresponse)|
|201|Created|The table was created; GET Location to read its metadata|None|
|400|Bad Request|Malformed body or invalid definition|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster or database|[ErrorEnvelope](#schemaerrorenvelope)|
|409|Conflict|The table already exists|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|415|Unsupported Media Type|The body is not JSON|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Created table URL|

<aside class="success">
This operation does not require authentication
</aside>

## Drops one table.

<a id="opIddropTable"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/clusters/{cluster}/databases/{database}/tables/{table}`

<h3 id="drops-one-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|table|path|string|true|Table name|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="drops-one-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The table was dropped|None|
|400|Bad Request|Unsupported query parameter|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster, database, or table|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Applies one group of schema or config changes to a table.

<a id="opIdalterTable"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "changes": [
      {
        "comment": "string",
        "data_type": {
          "type": "BOOLEAN"
        },
        "kind": "add_column",
        "name": "string"
      }
    ]
  }'
```

`PATCH /v1/clusters/{cluster}/databases/{database}/tables/{table}`

> Body parameter

```json
{
  "changes": [
    {
      "comment": "string",
      "data_type": {
        "type": "BOOLEAN"
      },
      "kind": "add_column",
      "name": "string"
    }
  ]
}
```

<h3 id="applies-one-group-of-schema-or-config-changes-to-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|table|path|string|true|Table name|
|body|body|[AlterTableBody](#schemaaltertablebody)|true|none|
|» changes|body|[[TableChangeBody](#schematablechangebody)]|true|The server currently rejects mixing schema and config changes.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 415 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="applies-one-group-of-schema-or-config-changes-to-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The table was altered; GET the same URL to read its metadata|None|
|400|Bad Request|Malformed body or invalid change|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster, database, or table|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|415|Unsupported Media Type|The body is not JSON|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates one partition of a partitioned table.

<a id="opIdcreatePartition"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string/partitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "partition": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions`

> Body parameter

```json
{
  "partition": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creates-one-partition-of-a-partitioned-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|table|path|string|true|Table name|
|body|body|[CreatePartitionBody](#schemacreatepartitionbody)|true|none|
|» partition|body|object|true|none|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "database": "string",
  "partition": {
    "property1": "string",
    "property2": "string"
  },
  "table": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 415 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="creates-one-partition-of-a-partitioned-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created partition|[PartitionResponse](#schemapartitionresponse)|
|400|Bad Request|Malformed body, or a spec that does not match the partition keys|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster, database, or table|[ErrorEnvelope](#schemaerrorenvelope)|
|409|Conflict|The partition already exists or the table's partition limit was reached|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|415|Unsupported Media Type|The body is not JSON|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Created partition URL|

<aside class="success">
This operation does not require authentication
</aside>

## Drops one partition by its Fluss name.

<a id="opIddropPartition"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string/partitions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions/{partition}`

<h3 id="drops-one-partition-by-its-fluss-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Database name|
|table|path|string|true|Table name|
|partition|path|string|true|Fluss partition name; values follow partition-key order and are joined by `$`|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="drops-one-partition-by-its-fluss-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The partition was dropped|None|
|400|Bad Request|Unsupported query parameter, or a name that does not match the partition keys|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster, database, table, or partition|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Request body above the configured limit|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|Metadata concurrency limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, or the gateway is starting or shutting down|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|Request deadline exceeded|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="fluss-gateway-records">records</h1>

## Writes a batch of records to a table

<a id="opIdwriteRecords"></a>

> Code samples

```bash
curl http://localhost:8080/v1/clusters/string/databases/string/tables/string/records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entries": [
      {
        "append": {},
        "delete": {},
        "id": "string",
        "upsert": {}
      }
    ],
    "partial_update_columns": [
      "string"
    ]
  }'
```

`POST /v1/clusters/{cluster}/databases/{database}/tables/{table}/records`

Writes a batch in input order after validating every row against the table schema. A validation failure rejects the whole batch with 400 before anything is submitted. Delivery is at least once from the caller's perspective: the gateway never resubmits after submission, but client retries and caller retries can duplicate log appends. An entry whose code is `timeout` may have been applied, and entries sharing one accumulator batch can share a verdict.

> Body parameter

```json
{
  "entries": [
    {
      "append": {},
      "delete": {},
      "id": "string",
      "upsert": {}
    }
  ],
  "partial_update_columns": [
    "string"
  ]
}
```

<h3 id="writes-a-batch-of-records-to-a-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cluster|path|string|true|Configured cluster ID|
|database|path|string|true|Exact database name|
|table|path|string|true|Exact table name|
|body|body|[WriteBody_Value](#schemawritebody_value)|true|none|
|» entries|body|[[WriteBodyEntry_Value](#schemawritebodyentry_value)]|true|none|
|» partial_update_columns|body|[string]|false|Columns targeted by every entry in this batch. KV tables only.<br><br>Every primary-key column must be included, and every non-primary-key,<br>non-auto-increment column in the table must be nullable. Missing or explicit-null nullable<br>targets are written as null; untargeted columns are preserved. Deletes require only<br>primary-key values and clear the targeted non-key columns; the row is removed when all<br>non-key columns become null.|

> Example responses

> 200 Response

```json
{
  "error_count": 0,
  "failures": [
    {
      "error_code": "string",
      "id": "string",
      "message": "string"
    }
  ],
  "row_count": 0,
  "success_count": 0,
  "successes": [
    {
      "id": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 406 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 413 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 415 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 501 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

> 504 Response

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

<h3 id="writes-a-batch-of-records-to-a-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ordered entry outcomes; completion can be indeterminate after submission|[WriteResponse](#schemawriteresponse)|
|400|Bad Request|Malformed request, or preflight rejected the whole batch|[ErrorEnvelope](#schemaerrorenvelope)|
|404|Not Found|Unknown cluster or table|[ErrorEnvelope](#schemaerrorenvelope)|
|406|Not Acceptable|A JSON response is not acceptable|[ErrorEnvelope](#schemaerrorenvelope)|
|413|Payload Too Large|Body or row limit exceeded|[ErrorEnvelope](#schemaerrorenvelope)|
|415|Unsupported Media Type|Unsupported request media type|[ErrorEnvelope](#schemaerrorenvelope)|
|429|Too Many Requests|The write concurrency gate or rate limit is exhausted; retry after the `Retry-After` pause|[ErrorEnvelope](#schemaerrorenvelope)|
|500|Internal Server Error|Fluss backend failure|[ErrorEnvelope](#schemaerrorenvelope)|
|501|Not Implemented|Fluss does not support the operation or API version|[ErrorEnvelope](#schemaerrorenvelope)|
|503|Service Unavailable|Fluss is unavailable, the gateway is starting or shutting down, or the table/schema changed before submission|[ErrorEnvelope](#schemaerrorenvelope)|
|504|Gateway Timeout|The request deadline passed; writes may still complete after submission|[ErrorEnvelope](#schemaerrorenvelope)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AlterTableBody">AlterTableBody</h2>
<!-- backwards compatibility -->
<a id="schemaaltertablebody"></a>
<a id="schema_AlterTableBody"></a>
<a id="tocSaltertablebody"></a>
<a id="tocsaltertablebody"></a>

```json
{
  "changes": [
    {
      "comment": "string",
      "data_type": {
        "type": "BOOLEAN"
      },
      "kind": "add_column",
      "name": "string"
    }
  ]
}
```

Body of `PATCH /v1/clusters/{cluster}/databases/{database}/tables/{table}`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[TableChangeBody](#schematablechangebody)]|true|none|The server currently rejects mixing schema and config changes.|

<h2 id="tocS_ClustersResponse">ClustersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclustersresponse"></a>
<a id="schema_ClustersResponse"></a>
<a id="tocSclustersresponse"></a>
<a id="tocsclustersresponse"></a>

```json
{
  "clusters": [
    "string"
  ]
}
```

Response of `GET /v1/clusters`: the IDs used in the cluster-scoped paths of the other APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusters|[string]|true|none|none|

<h2 id="tocS_ColumnBody">ColumnBody</h2>
<!-- backwards compatibility -->
<a id="schemacolumnbody"></a>
<a id="schema_ColumnBody"></a>
<a id="tocScolumnbody"></a>
<a id="tocscolumnbody"></a>

```json
{
  "comment": "string",
  "data_type": {
    "type": "BOOLEAN"
  },
  "name": "string",
  "nullable": true
}
```

One column; top-level nullability belongs here, not inside `data_type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string \| null|false|none|none|
|data_type|[ColumnDataType](#schemacolumndatatype)|true|none|A Fluss column type; top-level nullability is declared by the column.|
|name|string|true|none|none|
|nullable|boolean \| null|false|none|Primary-key columns default to false and reject true; other columns default to true.|

<h2 id="tocS_ColumnDataType">ColumnDataType</h2>
<!-- backwards compatibility -->
<a id="schemacolumndatatype"></a>
<a id="schema_ColumnDataType"></a>
<a id="tocScolumndatatype"></a>
<a id="tocscolumndatatype"></a>

```json
{
  "type": "BOOLEAN"
}
```

A Fluss column type; top-level nullability is declared by the column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|length|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|precision|integer(int32)|true|none|none|
|scale|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|precision|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|precision|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|precision|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|length|integer|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|element_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|key_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|type|string|true|none|none|
|value_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|*oneOf*|object|false|none|none|
|fields|[[WireRowField](#schemawirerowfield)]|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BOOLEAN|
|type|TINYINT|
|type|SMALLINT|
|type|INTEGER|
|type|BIGINT|
|type|FLOAT|
|type|DOUBLE|
|type|CHAR|
|type|STRING|
|type|DECIMAL|
|type|DATE|
|type|TIME_WITHOUT_TIME_ZONE|
|type|TIMESTAMP_WITHOUT_TIME_ZONE|
|type|TIMESTAMP_WITH_LOCAL_TIME_ZONE|
|type|BYTES|
|type|BINARY|
|type|ARRAY|
|type|MAP|
|type|ROW|

<h2 id="tocS_ColumnResponse">ColumnResponse</h2>
<!-- backwards compatibility -->
<a id="schemacolumnresponse"></a>
<a id="schema_ColumnResponse"></a>
<a id="tocScolumnresponse"></a>
<a id="tocscolumnresponse"></a>

```json
{
  "comment": "string",
  "data_type": {
    "type": "BOOLEAN"
  },
  "name": "string",
  "nullable": true
}
```

One column of a table schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|data_type|[ColumnDataType](#schemacolumndatatype)|true|none|A Fluss column type; top-level nullability is declared by the column.|
|name|string|true|none|none|
|nullable|boolean|true|none|none|

<h2 id="tocS_CreateDatabaseBody">CreateDatabaseBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabasebody"></a>
<a id="schema_CreateDatabaseBody"></a>
<a id="tocScreatedatabasebody"></a>
<a id="tocscreatedatabasebody"></a>

```json
{
  "database": "string"
}
```

Body of `POST /v1/clusters/{cluster}/databases`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|true|none|none|

<h2 id="tocS_CreatePartitionBody">CreatePartitionBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatepartitionbody"></a>
<a id="schema_CreatePartitionBody"></a>
<a id="tocScreatepartitionbody"></a>
<a id="tocscreatepartitionbody"></a>

```json
{
  "partition": {
    "property1": "string",
    "property2": "string"
  }
}
```

Body of `POST .../tables/{table}/partitions`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partition|object|true|none|none|

<h2 id="tocS_CreateTableBody">CreateTableBody</h2>
<!-- backwards compatibility -->
<a id="schemacreatetablebody"></a>
<a id="schema_CreateTableBody"></a>
<a id="tocScreatetablebody"></a>
<a id="tocscreatetablebody"></a>

```json
{
  "columns": [
    {
      "comment": "string",
      "data_type": {
        "type": "BOOLEAN"
      },
      "name": "string",
      "nullable": true
    }
  ],
  "comment": "string",
  "configs": {
    "property1": "string",
    "property2": "string"
  },
  "custom_properties": {
    "property1": "string",
    "property2": "string"
  },
  "distribution": {
    "bucket_count": 1,
    "bucket_keys": [
      "string"
    ]
  },
  "partitioned_by": [
    "string"
  ],
  "primary_key": [
    "string"
  ],
  "table_name": "string",
  "validate_only": true
}
```

Body of `POST /v1/clusters/{cluster}/databases/{database}/tables`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ColumnBody](#schemacolumnbody)]|true|none|none|
|comment|string \| null|false|none|none|
|configs|object|false|none|Fluss table properties, validated by the server.|
|custom_properties|object|false|none|Custom table metadata; keys must not use the reserved `table.` prefix.|
|distribution|null \| [DistributionBody](#schemadistributionbody)|false|none|none|
|partitioned_by|[string]|false|none|none|
|primary_key|[string]|false|none|Primary-key columns; omit for a log table.|
|table_name|string|true|none|none|
|validate_only|boolean|false|none|Build and validate the definition locally without creating anything.|

<h2 id="tocS_DatabaseResponse">DatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseresponse"></a>
<a id="schema_DatabaseResponse"></a>
<a id="tocSdatabaseresponse"></a>
<a id="tocsdatabaseresponse"></a>

```json
{
  "database": "string"
}
```

Response of a database creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|true|none|none|

<h2 id="tocS_DatabasesResponse">DatabasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabasesresponse"></a>
<a id="schema_DatabasesResponse"></a>
<a id="tocSdatabasesresponse"></a>
<a id="tocsdatabasesresponse"></a>

```json
{
  "databases": [
    "string"
  ],
  "next_page_token": "string"
}
```

Response of `GET /v1/clusters/{cluster}/databases`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databases|[string]|true|none|none|
|next_page_token|string|false|none|Present only while more entries follow.|

<h2 id="tocS_DistributionBody">DistributionBody</h2>
<!-- backwards compatibility -->
<a id="schemadistributionbody"></a>
<a id="schema_DistributionBody"></a>
<a id="tocSdistributionbody"></a>
<a id="tocsdistributionbody"></a>

```json
{
  "bucket_count": 1,
  "bucket_keys": [
    "string"
  ]
}
```

The bucket distribution of a table definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket_count|integer(int32)|true|none|none|
|bucket_keys|[string]|true|none|none|

<h2 id="tocS_DistributionResponse">DistributionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadistributionresponse"></a>
<a id="schema_DistributionResponse"></a>
<a id="tocSdistributionresponse"></a>
<a id="tocsdistributionresponse"></a>

```json
{
  "bucket_count": 1,
  "bucket_keys": [
    "string"
  ]
}
```

The bucket distribution of a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket_count|integer(int32)|true|none|none|
|bucket_keys|[string]|true|none|none|

<h2 id="tocS_ErrorBody">ErrorBody</h2>
<!-- backwards compatibility -->
<a id="schemaerrorbody"></a>
<a id="schema_ErrorBody"></a>
<a id="tocSerrorbody"></a>
<a id="tocserrorbody"></a>

```json
{
  "code": "already_exists",
  "message": "string",
  "request_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Body of the REST error envelope.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ErrorCode](#schemaerrorcode)|true|none|Stable error code, resource-specific where the error names a resource.|
|message|string|true|none|none|
|request_id|string(uuid)|true|none|Correlates the response with the `x-request-id` header and the access log.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|already_exists|
|code|backend|
|code|cancelled|
|code|cluster_already_exists|
|code|cluster_not_found|
|code|database_already_exists|
|code|database_not_empty|
|code|database_not_found|
|code|failed_precondition|
|code|internal|
|code|invalid_argument|
|code|limit_exceeded|
|code|method_not_allowed|
|code|not_acceptable|
|code|not_found|
|code|partition_already_exists|
|code|partition_not_found|
|code|resource_exhausted|
|code|storage_backpressure|
|code|table_already_exists|
|code|table_not_found|
|code|timeout|
|code|unauthenticated|
|code|unauthorized|
|code|unavailable|
|code|unsupported|
|code|unsupported_media_type|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"already_exists"
```

Stable error code, resource-specific where the error names a resource.

<h2 id="tocS_ErrorEnvelope">ErrorEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemaerrorenvelope"></a>
<a id="schema_ErrorEnvelope"></a>
<a id="tocSerrorenvelope"></a>
<a id="tocserrorenvelope"></a>

```json
{
  "error": {
    "code": "table_not_found",
    "message": "table `mydb.orders` does not exist",
    "request_id": "8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913"
  }
}
```

REST error envelope: `{"error": {"code", "message", "request_id"}}`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorBody](#schemaerrorbody)|true|none|Body of the REST error envelope.|

<h2 id="tocS_HealthResponse">HealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthresponse"></a>
<a id="schema_HealthResponse"></a>
<a id="tocShealthresponse"></a>
<a id="tocshealthresponse"></a>

```json
{
  "status": "string",
  "uptime_ms": 0
}
```

Response of `GET /health`: liveness plus process uptime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|uptime_ms|integer(int64)|true|none|Milliseconds since the gateway process started.|

<h2 id="tocS_PartitionEntry">PartitionEntry</h2>
<!-- backwards compatibility -->
<a id="schemapartitionentry"></a>
<a id="schema_PartitionEntry"></a>
<a id="tocSpartitionentry"></a>
<a id="tocspartitionentry"></a>

```json
{
  "name": "string",
  "partition": {
    "property1": "string",
    "property2": "string"
  }
}
```

One partition in a listing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Native partition name; percent-encode it as a path segment when deleting.|
|partition|object|true|none|none|

<h2 id="tocS_PartitionResponse">PartitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapartitionresponse"></a>
<a id="schema_PartitionResponse"></a>
<a id="tocSpartitionresponse"></a>
<a id="tocspartitionresponse"></a>

```json
{
  "database": "string",
  "partition": {
    "property1": "string",
    "property2": "string"
  },
  "table": "string"
}
```

Response of a partition creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|true|none|none|
|partition|object|true|none|none|
|table|string|true|none|none|

<h2 id="tocS_PartitionsResponse">PartitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapartitionsresponse"></a>
<a id="schema_PartitionsResponse"></a>
<a id="tocSpartitionsresponse"></a>
<a id="tocspartitionsresponse"></a>

```json
{
  "next_page_token": "string",
  "partitions": [
    {
      "name": "string",
      "partition": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

Response of `GET /v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|string|false|none|Present only while more entries follow.|
|partitions|[[PartitionEntry](#schemapartitionentry)]|true|none|none|

<h2 id="tocS_ReadyResponse">ReadyResponse</h2>
<!-- backwards compatibility -->
<a id="schemareadyresponse"></a>
<a id="schema_ReadyResponse"></a>
<a id="tocSreadyresponse"></a>
<a id="tocsreadyresponse"></a>

```json
{
  "status": "string"
}
```

Response of `GET /ready`: the gateway accepts application traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

<h2 id="tocS_TableChangeBody">TableChangeBody</h2>
<!-- backwards compatibility -->
<a id="schematablechangebody"></a>
<a id="schema_TableChangeBody"></a>
<a id="tocStablechangebody"></a>
<a id="tocstablechangebody"></a>

```json
{
  "comment": "string",
  "data_type": {
    "type": "BOOLEAN"
  },
  "kind": "add_column",
  "name": "string"
}
```

One supported table change. Config keys under `table.` address Fluss table properties;
other keys address custom properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|An added column must be nullable: existing rows have no value for it.|
|comment|string \| null|false|none|none|
|data_type|[ColumnDataType](#schemacolumndatatype)|true|none|A Fluss column type; top-level nullability is declared by the column.|
|kind|string|true|none|none|
|name|string|true|none|none|
|*oneOf*|object|false|none|none|
|key|string|true|none|none|
|kind|string|true|none|none|
|value|string|true|none|none|
|*oneOf*|object|false|none|Removes the explicitly configured value.|
|key|string|true|none|none|
|kind|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|add_column|
|kind|set_config|
|kind|reset_config|

<h2 id="tocS_TableResponse">TableResponse</h2>
<!-- backwards compatibility -->
<a id="schematableresponse"></a>
<a id="schema_TableResponse"></a>
<a id="tocStableresponse"></a>
<a id="tocstableresponse"></a>

```json
{
  "columns": [
    {
      "comment": "string",
      "data_type": {
        "type": "BOOLEAN"
      },
      "name": "string",
      "nullable": true
    }
  ],
  "comment": "string",
  "configs": {
    "property1": "string",
    "property2": "string"
  },
  "custom_properties": {
    "property1": "string",
    "property2": "string"
  },
  "database": "string",
  "distribution": {
    "bucket_count": 1,
    "bucket_keys": [
      "string"
    ]
  },
  "partitioned_by": [
    "string"
  ],
  "primary_key": [
    "string"
  ],
  "table": "string"
}
```

Response of `GET /v1/clusters/{cluster}/databases/{database}/tables/{table}`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ColumnResponse](#schemacolumnresponse)]|true|none|none|
|comment|string|false|none|none|
|configs|object|false|none|Fluss table properties.|
|custom_properties|object|false|none|Custom table metadata.|
|database|string|true|none|none|
|distribution|[DistributionResponse](#schemadistributionresponse)|false|none|The bucket distribution of a table.|
|partitioned_by|[string]|false|none|none|
|primary_key|[string]|false|none|none|
|table|string|true|none|none|

<h2 id="tocS_TablesResponse">TablesResponse</h2>
<!-- backwards compatibility -->
<a id="schematablesresponse"></a>
<a id="schema_TablesResponse"></a>
<a id="tocStablesresponse"></a>
<a id="tocstablesresponse"></a>

```json
{
  "next_page_token": "string",
  "tables": [
    "string"
  ]
}
```

Response of `GET /v1/clusters/{cluster}/databases/{database}/tables`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page_token|string|false|none|Present only while more entries follow.|
|tables|[string]|true|none|none|

<h2 id="tocS_ValidateOnlyResponse">ValidateOnlyResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateonlyresponse"></a>
<a id="schema_ValidateOnlyResponse"></a>
<a id="tocSvalidateonlyresponse"></a>
<a id="tocsvalidateonlyresponse"></a>

```json
{
  "column_count": 0,
  "database": "string",
  "primary_key": [
    "string"
  ],
  "table": "string",
  "validate_only": true
}
```

The result of a successful local `validate_only` dry run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column_count|integer|true|none|none|
|database|string|true|none|none|
|primary_key|[string]|true|none|none|
|table|string|true|none|none|
|validate_only|boolean|true|none|none|

<h2 id="tocS_WireDataType">WireDataType</h2>
<!-- backwards compatibility -->
<a id="schemawiredatatype"></a>
<a id="schema_WireDataType"></a>
<a id="tocSwiredatatype"></a>
<a id="tocswiredatatype"></a>

```json
{
  "nullable": true,
  "type": "BOOLEAN"
}
```

The exact recursive Fluss type as it appears on the wire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|length|integer(int32)|true|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|precision|integer(int32)|true|none|none|
|scale|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|precision|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|precision|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|precision|integer(int32)|true|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|length|integer|true|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|element_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|*oneOf*|object|false|none|none|
|key_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|nullable|boolean|false|none|none|
|type|string|true|none|none|
|value_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|*oneOf*|object|false|none|none|
|fields|[[WireRowField](#schemawirerowfield)]|true|none|none|
|nullable|boolean|false|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BOOLEAN|
|type|TINYINT|
|type|SMALLINT|
|type|INTEGER|
|type|BIGINT|
|type|FLOAT|
|type|DOUBLE|
|type|CHAR|
|type|STRING|
|type|DECIMAL|
|type|DATE|
|type|TIME_WITHOUT_TIME_ZONE|
|type|TIMESTAMP_WITHOUT_TIME_ZONE|
|type|TIMESTAMP_WITH_LOCAL_TIME_ZONE|
|type|BYTES|
|type|BINARY|
|type|ARRAY|
|type|MAP|
|type|ROW|

<h2 id="tocS_WireRowField">WireRowField</h2>
<!-- backwards compatibility -->
<a id="schemawirerowfield"></a>
<a id="schema_WireRowField"></a>
<a id="tocSwirerowfield"></a>
<a id="tocswirerowfield"></a>

```json
{
  "description": "string",
  "field_type": {
    "nullable": true,
    "type": "BOOLEAN"
  },
  "name": "string"
}
```

One `ROW` field. Server-assigned field IDs are not exposed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|field_type|[WireDataType](#schemawiredatatype)|true|none|The exact recursive Fluss type as it appears on the wire.|
|name|string|true|none|none|

<h2 id="tocS_WriteBodyEntry_Value">WriteBodyEntry_Value</h2>
<!-- backwards compatibility -->
<a id="schemawritebodyentry_value"></a>
<a id="schema_WriteBodyEntry_Value"></a>
<a id="tocSwritebodyentry_value"></a>
<a id="tocswritebodyentry_value"></a>

```json
{
  "append": {},
  "delete": {},
  "id": "string",
  "upsert": {}
}
```

One request entry. Exactly one of `append`, `upsert`, or `delete` is required, and its value is
the row object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|append|object|false|none|none|
|delete|object|false|none|none|
|id|string|true|none|Opaque caller correlation value, unique within the request, echoed by every outcome.|
|upsert|object|false|none|none|

<h2 id="tocS_WriteBody_Value">WriteBody_Value</h2>
<!-- backwards compatibility -->
<a id="schemawritebody_value"></a>
<a id="schema_WriteBody_Value"></a>
<a id="tocSwritebody_value"></a>
<a id="tocswritebody_value"></a>

```json
{
  "entries": [
    {
      "append": {},
      "delete": {},
      "id": "string",
      "upsert": {}
    }
  ],
  "partial_update_columns": [
    "string"
  ]
}
```

The write request body.

The row objects stay as raw JSON so that number lexemes survive to schema-aware decoding: a
BIGINT or DECIMAL sent as a base-10 string must not pass through an `f64`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[WriteBodyEntry_Value](#schemawritebodyentry_value)]|true|none|none|
|partial_update_columns|[string]|false|none|Columns targeted by every entry in this batch. KV tables only.<br><br>Every primary-key column must be included, and every non-primary-key,<br>non-auto-increment column in the table must be nullable. Missing or explicit-null nullable<br>targets are written as null; untargeted columns are preserved. Deletes require only<br>primary-key values and clear the targeted non-key columns; the row is removed when all<br>non-key columns become null.|

<h2 id="tocS_WriteFailureResponse">WriteFailureResponse</h2>
<!-- backwards compatibility -->
<a id="schemawritefailureresponse"></a>
<a id="schema_WriteFailureResponse"></a>
<a id="tocSwritefailureresponse"></a>
<a id="tocswritefailureresponse"></a>

```json
{
  "error_code": "string",
  "id": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|string|true|none|A stable error code, plus `storage_backpressure` — a KV write the store refused under<br>backpressure. `timeout` marks an indeterminate outcome: the row may already be applied.|
|id|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_WriteResponse">WriteResponse</h2>
<!-- backwards compatibility -->
<a id="schemawriteresponse"></a>
<a id="schema_WriteResponse"></a>
<a id="tocSwriteresponse"></a>
<a id="tocswriteresponse"></a>

```json
{
  "error_count": 0,
  "failures": [
    {
      "error_code": "string",
      "id": "string",
      "message": "string"
    }
  ],
  "row_count": 0,
  "success_count": 0,
  "successes": [
    {
      "id": "string"
    }
  ]
}
```

Ordered, entry-correlated outcomes of one batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_count|integer(int64)|true|none|none|
|failures|[[WriteFailureResponse](#schemawritefailureresponse)]|true|none|Failures in input order. A verdict can be shared by entries that landed in one accumulator<br>batch.|
|row_count|integer(int64)|true|none|none|
|success_count|integer(int64)|true|none|none|
|successes|[[WriteSuccessResponse](#schemawritesuccessresponse)]|true|none|Successes in input order.|

<h2 id="tocS_WriteSuccessResponse">WriteSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemawritesuccessresponse"></a>
<a id="schema_WriteSuccessResponse"></a>
<a id="tocSwritesuccessresponse"></a>
<a id="tocswritesuccessresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
