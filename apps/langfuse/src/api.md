<h1 id="server">server</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Real-time data

The only real-time path to get tracing data is to ingest via OpenTelemetry (`POST /api/public/otel/v1/traces`) and retrieve via Observations API v2 (`GET /api/public/v2/observations`) and Metrics API v2 (`GET /api/public/v2/metrics`). Other public API write and read endpoints can delay data by about 10 minutes. Direct OpenTelemetry exporters must send the `x-langfuse-ingestion-version: 4` header; current Python and JS SDKs already do. See the [Public API docs](https://langfuse.com/docs/api-and-data-platform/features/public-api) and [real-time ingestion](https://langfuse.com/integrations/native/opentelemetry.md#real-time-ingestion).

## Authentication

Authenticate with the API using [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication), get API keys in the project settings:

- username: Langfuse Public Key
- password: Langfuse Secret Key

## Exports

- OpenAPI spec: https://cloud.langfuse.com/generated/api/openapi.yml
- Self-hosted deployments: interactive API reference at `/api/docs` and OpenAPI spec at `/api/openapi.yaml`

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="server-annotationqueues">AnnotationQueues</h1>

## annotationQueues_listQueues

<a id="opIdannotationQueues_listQueues"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/annotation-queues`

Get all annotation queues

<h3 id="annotationqueueslistqueues-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "scoreConfigIds": [
        "string"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueueslistqueues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedAnnotationQueues](#schemapaginatedannotationqueues)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_createQueue

<a id="opIdannotationQueues_createQueue"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string",
    "scoreConfigIds": [
      "string"
    ]
  }'
```

`POST /api/public/annotation-queues`

Create an annotation queue

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "scoreConfigIds": [
    "string"
  ]
}
```

<h3 id="annotationqueuescreatequeue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAnnotationQueueRequest](#schemacreateannotationqueuerequest)|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» scoreConfigIds|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "scoreConfigIds": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuescreatequeue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationQueue](#schemaannotationqueue)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_getQueue

<a id="opIdannotationQueues_getQueue"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/annotation-queues/{queueId}`

Get an annotation queue by ID

<h3 id="annotationqueuesgetqueue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "scoreConfigIds": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuesgetqueue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationQueue](#schemaannotationqueue)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_listQueueItems

<a id="opIdannotationQueues_listQueueItems"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/items \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/annotation-queues/{queueId}/items`

Get items for a specific annotation queue

<h3 id="annotationqueueslistqueueitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|status|query|[AnnotationQueueStatus](#schemaannotationqueuestatus)|false|Filter by status|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|PENDING|
|status|COMPLETED|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "queueId": "string",
      "objectId": "string",
      "objectType": "TRACE",
      "status": "PENDING",
      "completedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueueslistqueueitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedAnnotationQueueItems](#schemapaginatedannotationqueueitems)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_createQueueItem

<a id="opIdannotationQueues_createQueueItem"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "objectId": "string",
    "objectType": "TRACE",
    "status": "PENDING"
  }'
```

`POST /api/public/annotation-queues/{queueId}/items`

Add an item to an annotation queue

> Body parameter

```json
{
  "objectId": "string",
  "objectType": "TRACE",
  "status": "PENDING"
}
```

<h3 id="annotationqueuescreatequeueitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|body|body|[CreateAnnotationQueueItemRequest](#schemacreateannotationqueueitemrequest)|true|none|
|» objectId|body|string|true|none|
|» objectType|body|[AnnotationQueueObjectType](#schemaannotationqueueobjecttype)|true|none|
|» status|body|[AnnotationQueueStatus](#schemaannotationqueuestatus)|false|Defaults to PENDING for new queue items|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» objectType|TRACE|
|» objectType|OBSERVATION|
|» objectType|SESSION|
|» status|PENDING|
|» status|COMPLETED|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "queueId": "string",
  "objectId": "string",
  "objectType": "TRACE",
  "status": "PENDING",
  "completedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuescreatequeueitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationQueueItem](#schemaannotationqueueitem)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_getQueueItem

<a id="opIdannotationQueues_getQueueItem"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/items/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/annotation-queues/{queueId}/items/{itemId}`

Get a specific item from an annotation queue

<h3 id="annotationqueuesgetqueueitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|itemId|path|string|true|The unique identifier of the annotation queue item|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "queueId": "string",
  "objectId": "string",
  "objectType": "TRACE",
  "status": "PENDING",
  "completedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuesgetqueueitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationQueueItem](#schemaannotationqueueitem)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_deleteQueueItem

<a id="opIdannotationQueues_deleteQueueItem"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/annotation-queues/{queueId}/items/{itemId}`

Remove an item from an annotation queue

<h3 id="annotationqueuesdeletequeueitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|itemId|path|string|true|The unique identifier of the annotation queue item|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuesdeletequeueitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteAnnotationQueueItemResponse](#schemadeleteannotationqueueitemresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_updateQueueItem

<a id="opIdannotationQueues_updateQueueItem"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/items/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "status": "PENDING"
  }'
```

`PATCH /api/public/annotation-queues/{queueId}/items/{itemId}`

Update an annotation queue item

> Body parameter

```json
{
  "status": "PENDING"
}
```

<h3 id="annotationqueuesupdatequeueitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|itemId|path|string|true|The unique identifier of the annotation queue item|
|body|body|[UpdateAnnotationQueueItemRequest](#schemaupdateannotationqueueitemrequest)|true|none|
|» status|body|[AnnotationQueueStatus](#schemaannotationqueuestatus)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|PENDING|
|» status|COMPLETED|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "queueId": "string",
  "objectId": "string",
  "objectType": "TRACE",
  "status": "PENDING",
  "completedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuesupdatequeueitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AnnotationQueueItem](#schemaannotationqueueitem)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_createQueueAssignment

<a id="opIdannotationQueues_createQueueAssignment"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/assignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string"
  }'
```

`POST /api/public/annotation-queues/{queueId}/assignments`

Create an assignment for a user to an annotation queue

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="annotationqueuescreatequeueassignment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|body|body|[AnnotationQueueAssignmentRequest](#schemaannotationqueueassignmentrequest)|true|none|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "queueId": "string",
  "projectId": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuescreatequeueassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreateAnnotationQueueAssignmentResponse](#schemacreateannotationqueueassignmentresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## annotationQueues_deleteQueueAssignment

<a id="opIdannotationQueues_deleteQueueAssignment"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/annotation-queues/string/assignments \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string"
  }'
```

`DELETE /api/public/annotation-queues/{queueId}/assignments`

Delete an assignment for a user to an annotation queue

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="annotationqueuesdeletequeueassignment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queueId|path|string|true|The unique identifier of the annotation queue|
|body|body|[AnnotationQueueAssignmentRequest](#schemaannotationqueueassignmentrequest)|true|none|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="annotationqueuesdeletequeueassignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteAnnotationQueueAssignmentResponse](#schemadeleteannotationqueueassignmentresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-blobstorageintegrations">BlobStorageIntegrations</h1>

## blobStorageIntegrations_getBlobStorageIntegrations

<a id="opIdblobStorageIntegrations_getBlobStorageIntegrations"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/integrations/blob-storage \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/integrations/blob-storage`

Get all blob storage integrations for the organization (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "projectId": "string",
      "type": "S3",
      "bucketName": "string",
      "endpoint": "string",
      "region": "string",
      "accessKeyId": "string",
      "prefix": "string",
      "exportFrequency": "every_20_minutes",
      "enabled": true,
      "forcePathStyle": true,
      "fileType": "JSON",
      "exportMode": "FULL_HISTORY",
      "exportStartDate": "1970-01-01T00:00:00Z",
      "compressed": true,
      "exportSource": "LEGACY_TRACES_OBSERVATIONS",
      "exportFieldGroups": [
        "core"
      ],
      "nextSyncAt": "1970-01-01T00:00:00Z",
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "lastError": "string",
      "lastErrorAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="blobstorageintegrationsgetblobstorageintegrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BlobStorageIntegrationsResponse](#schemablobstorageintegrationsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## blobStorageIntegrations_upsertBlobStorageIntegration

<a id="opIdblobStorageIntegrations_upsertBlobStorageIntegration"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/integrations/blob-storage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "projectId": "string",
    "type": "S3",
    "bucketName": "string",
    "endpoint": "string",
    "region": "string",
    "accessKeyId": "string",
    "secretAccessKey": "string",
    "prefix": "string",
    "exportFrequency": "every_20_minutes",
    "enabled": true,
    "forcePathStyle": true,
    "fileType": "JSON",
    "exportMode": "FULL_HISTORY",
    "exportStartDate": "1970-01-01T00:00:00Z",
    "compressed": true,
    "exportSource": "LEGACY_TRACES_OBSERVATIONS",
    "exportFieldGroups": [
      "core"
    ]
  }'
```

`PUT /api/public/integrations/blob-storage`

Create or update a blob storage integration for a specific project (requires organization-scoped API key). The configuration is validated by performing a test upload to the bucket.

> Body parameter

```json
{
  "projectId": "string",
  "type": "S3",
  "bucketName": "string",
  "endpoint": "string",
  "region": "string",
  "accessKeyId": "string",
  "secretAccessKey": "string",
  "prefix": "string",
  "exportFrequency": "every_20_minutes",
  "enabled": true,
  "forcePathStyle": true,
  "fileType": "JSON",
  "exportMode": "FULL_HISTORY",
  "exportStartDate": "1970-01-01T00:00:00Z",
  "compressed": true,
  "exportSource": "LEGACY_TRACES_OBSERVATIONS",
  "exportFieldGroups": [
    "core"
  ]
}
```

<h3 id="blobstorageintegrationsupsertblobstorageintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateBlobStorageIntegrationRequest](#schemacreateblobstorageintegrationrequest)|true|none|
|» projectId|body|string|true|ID of the project in which to configure the blob storage integration|
|» type|body|[BlobStorageIntegrationType](#schemablobstorageintegrationtype)|true|none|
|» bucketName|body|string|true|Name of the storage bucket. For AZURE_BLOB_STORAGE, must be a valid Azure container name (3-63 chars, lowercase letters, numbers, and hyphens only, must start and end with a letter or number, no consecutive hyphens). For GOOGLE_CLOUD_STORAGE with default credentials, the bucket must be listed in `LANGFUSE_BLOB_STORAGE_GCS_ALLOWED_BUCKETS`.|
|» endpoint|body|string \| null|false|Custom endpoint URL (required for S3_COMPATIBLE type). Ignored for GOOGLE_CLOUD_STORAGE.|
|» region|body|string|true|Storage region used by S3-compatible clients (AWS, GCS, Cloudflare R2, MinIO, Azure location IDs such as eastus, OCI). Leading and trailing whitespace is removed. The remaining value must be 1-63 letters, numbers, or hyphens, and cannot start or end with a hyphen. Examples: us-east-1, europe-west1, eastus, auto. Not used by GOOGLE_CLOUD_STORAGE; pass auto.|
|» accessKeyId|body|string \| null|false|Access key ID for authentication. Not used for GOOGLE_CLOUD_STORAGE.|
|» secretAccessKey|body|string \| null|false|Secret access key for authentication (will be encrypted when stored). When omitted on update, the stored secret is kept, unless the type changes between GOOGLE_CLOUD_STORAGE and another type.<br><br>For GOOGLE_CLOUD_STORAGE, a GCP service account JSON key. On self-hosted deployments, pass `__GCS_DEFAULT_CREDENTIALS__` instead to use the deployment's Application Default Credentials; the bucket must then be listed in `LANGFUSE_BLOB_STORAGE_GCS_ALLOWED_BUCKETS`. Default credentials are not available on Langfuse Cloud.|
|» prefix|body|string \| null|false|Path prefix for exported files (must end with forward slash if provided)|
|» exportFrequency|body|[BlobStorageExportFrequency](#schemablobstorageexportfrequency)|true|none|
|» enabled|body|boolean|true|Whether the integration is active|
|» forcePathStyle|body|boolean|true|Use path-style URLs for S3 requests|
|» fileType|body|[BlobStorageIntegrationFileType](#schemablobstorageintegrationfiletype)|true|File format for exported data. `PARQUET` is a columnar binary format encoded and compressed by the storage engine; gzip compression does not apply to it. Note that the model-price columns (`input_price`, `output_price`, `total_price`) are not included in Parquet observation exports.|
|» exportMode|body|[BlobStorageExportMode](#schemablobstorageexportmode)|true|none|
|» exportStartDate|body|string(date-time) \| null|false|Custom start date for exports (required when exportMode is FROM_CUSTOM_DATE). Must not be in the future (27 h tolerance for timezone differences).|
|» compressed|body|boolean \| null|false|Enable gzip compression for exported files (.csv.gz, .json.gz, .jsonl.gz). Defaults to true.|
|» exportSource|body|[BlobStorageExportSource](#schemablobstorageexportsource)|false|Data to export. When omitted on update, the existing value is preserved. When omitted on create, the default is `OBSERVATIONS_V2` on Langfuse Cloud, and on self-hosted deployments `LEGACY_TRACES_OBSERVATIONS` — or `OBSERVATIONS_V2` where the deployment no longer populates the legacy tables. The default is never a source the deployment cannot serve. Required when `exportFieldGroups` is provided.<br><br>**Cloud-only project deprecation gate (effective 2026-05-20):** For projects created on or after 2026-05-20 on Langfuse Cloud, `LEGACY_TRACES_OBSERVATIONS` and `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` are rejected with HTTP 400. Use `OBSERVATIONS_V2` for all new integrations. Self-hosted deployments are unaffected.<br><br>**Cloud-only integration deprecation gate (effective 2026-06-22):** On Langfuse Cloud, legacy export sources are only accepted for blob storage integrations created before 2026-06-22, regardless of project age. Requests that would create a new integration with `LEGACY_TRACES_OBSERVATIONS` or `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` are rejected with HTTP 400. Use `OBSERVATIONS_V2` instead. Self-hosted deployments are unaffected.|
|» exportFieldGroups|body|[[BlobStorageExportFieldGroup](#schemablobstorageexportfieldgroup)]|false|Field groups to include in each exported observation and score row. Applies to all export sources; must include the observation `core` group if provided. Core score columns are always exported; score groups add columns on top. When omitted on create, all observation groups are selected and no score groups. When omitted on update, the existing value is preserved.<br><br>`exportFieldGroups` requires `exportSource` to be provided in the same request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|S3|
|» type|S3_COMPATIBLE|
|» type|AZURE_BLOB_STORAGE|
|» type|GOOGLE_CLOUD_STORAGE|
|» exportFrequency|every_20_minutes|
|» exportFrequency|hourly|
|» exportFrequency|daily|
|» exportFrequency|weekly|
|» fileType|JSON|
|» fileType|CSV|
|» fileType|JSONL|
|» fileType|PARQUET|
|» exportMode|FULL_HISTORY|
|» exportMode|FROM_TODAY|
|» exportMode|FROM_CUSTOM_DATE|
|» exportSource|LEGACY_TRACES_OBSERVATIONS|
|» exportSource|OBSERVATIONS_V2|
|» exportSource|LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS|
|» exportFieldGroups|core|
|» exportFieldGroups|basic|
|» exportFieldGroups|time|
|» exportFieldGroups|io|
|» exportFieldGroups|metadata|
|» exportFieldGroups|model|
|» exportFieldGroups|usage|
|» exportFieldGroups|prompt|
|» exportFieldGroups|metrics|
|» exportFieldGroups|tools|
|» exportFieldGroups|trace_context|
|» exportFieldGroups|score_metadata|
|» exportFieldGroups|score_provenance|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "projectId": "string",
  "type": "S3",
  "bucketName": "string",
  "endpoint": "string",
  "region": "string",
  "accessKeyId": "string",
  "prefix": "string",
  "exportFrequency": "every_20_minutes",
  "enabled": true,
  "forcePathStyle": true,
  "fileType": "JSON",
  "exportMode": "FULL_HISTORY",
  "exportStartDate": "1970-01-01T00:00:00Z",
  "compressed": true,
  "exportSource": "LEGACY_TRACES_OBSERVATIONS",
  "exportFieldGroups": [
    "core"
  ],
  "nextSyncAt": "1970-01-01T00:00:00Z",
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "lastError": "string",
  "lastErrorAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="blobstorageintegrationsupsertblobstorageintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BlobStorageIntegrationResponse](#schemablobstorageintegrationresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## blobStorageIntegrations_getBlobStorageIntegrationStatus

<a id="opIdblobStorageIntegrations_getBlobStorageIntegrationStatus"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/integrations/blob-storage/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/integrations/blob-storage/{id}`

Get the sync status of a blob storage integration by integration ID (requires organization-scoped API key)

<h3 id="blobstorageintegrationsgetblobstorageintegrationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "projectId": "string",
  "syncStatus": "idle",
  "enabled": true,
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "nextSyncAt": "1970-01-01T00:00:00Z",
  "lastError": "string",
  "lastErrorAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="blobstorageintegrationsgetblobstorageintegrationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BlobStorageIntegrationStatusResponse](#schemablobstorageintegrationstatusresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## blobStorageIntegrations_deleteBlobStorageIntegration

<a id="opIdblobStorageIntegrations_deleteBlobStorageIntegration"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/integrations/blob-storage/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/integrations/blob-storage/{id}`

Delete a blob storage integration by ID (requires organization-scoped API key)

<h3 id="blobstorageintegrationsdeleteblobstorageintegration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="blobstorageintegrationsdeleteblobstorageintegration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[BlobStorageIntegrationDeletionResponse](#schemablobstorageintegrationdeletionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-comments">Comments</h1>

## comments_get

<a id="opIdcomments_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/comments`

Get all comments

<h3 id="commentsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|Page number, starts at 1.|
|limit|query|integer \| null|false|Limit of items per page. If you encounter api issues due to too large page sizes, try to reduce the limit|
|objectType|query|string \| null|false|Filter comments by object type (trace, observation, session, prompt).|
|objectId|query|string \| null|false|Filter comments by object id. If objectType is not provided, an error will be thrown.|
|authorUserId|query|string \| null|false|Filter comments by author user id.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "projectId": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "objectType": "TRACE",
      "objectId": "string",
      "content": "string",
      "authorUserId": "string"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="commentsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetCommentsResponse](#schemagetcommentsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## comments_create

<a id="opIdcomments_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "projectId": "string",
    "objectType": "string",
    "objectId": "string",
    "content": "string",
    "authorUserId": "string"
  }'
```

`POST /api/public/comments`

Create a comment. Comments may be attached to different object types (trace, observation, session, prompt).

> Body parameter

```json
{
  "projectId": "string",
  "objectType": "string",
  "objectId": "string",
  "content": "string",
  "authorUserId": "string"
}
```

<h3 id="commentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCommentRequest](#schemacreatecommentrequest)|true|none|
|» projectId|body|string|true|The id of the project to attach the comment to.|
|» objectType|body|string|true|The type of the object to attach the comment to (trace, observation, session, prompt).|
|» objectId|body|string|true|The id of the object to attach the comment to. If this does not reference a valid existing object, an error will be thrown.|
|» content|body|string|true|The content of the comment. May include markdown. Currently limited to 5000 characters.|
|» authorUserId|body|string \| null|false|The id of the user who created the comment. Must be a member of the organization that owns the project, otherwise an error will be thrown.|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="commentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreateCommentResponse](#schemacreatecommentresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## comments_get-by-id

<a id="opIdcomments_get-by-id"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/comments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/comments/{commentId}`

Get a comment by id

<h3 id="commentsget-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commentId|path|string|true|The unique langfuse identifier of a comment|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "projectId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "objectType": "TRACE",
  "objectId": "string",
  "content": "string",
  "authorUserId": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="commentsget-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Comment](#schemacomment)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-datasetitems">DatasetItems</h1>

## datasetItems_list

<a id="opIddatasetItems_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/dataset-items \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/dataset-items`

Get dataset items. Optionally specify a version to get the items as they existed at that point in time.
Note: If version parameter is provided, datasetName must also be provided.

<h3 id="datasetitemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|query|string \| null|false|none|
|sourceTraceId|query|string \| null|false|none|
|sourceObservationId|query|string \| null|false|none|
|version|query|string(date-time) \| null|false|ISO 8601 timestamp (RFC 3339, Section 5.6) in UTC (e.g., "2026-01-21T14:35:42Z").<br>If provided, returns state of dataset at this timestamp.<br>If not provided, returns the latest version. Requires datasetName to be specified.|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "status": "ACTIVE",
      "input": null,
      "expectedOutput": null,
      "metadata": null,
      "sourceTraceId": "string",
      "sourceObservationId": "string",
      "datasetId": "string",
      "datasetName": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "version": "1970-01-01T00:00:00Z",
      "mediaReferences": [
        {
          "field": "input",
          "referenceString": "string",
          "jsonPath": "string",
          "media": {
            "mediaId": "string",
            "contentType": "string",
            "contentLength": 0,
            "url": "string",
            "urlExpiry": "string"
          }
        }
      ]
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetitemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedDatasetItems](#schemapaginateddatasetitems)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## datasetItems_create

<a id="opIddatasetItems_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/dataset-items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "datasetName": "string",
    "input": null,
    "expectedOutput": null,
    "metadata": null,
    "sourceTraceId": "string",
    "sourceObservationId": "string",
    "id": "string",
    "status": "ACTIVE"
  }'
```

`POST /api/public/dataset-items`

Create a dataset item

> Body parameter

```json
{
  "datasetName": "string",
  "input": null,
  "expectedOutput": null,
  "metadata": null,
  "sourceTraceId": "string",
  "sourceObservationId": "string",
  "id": "string",
  "status": "ACTIVE"
}
```

<h3 id="datasetitemscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDatasetItemRequest](#schemacreatedatasetitemrequest)|true|none|
|» datasetName|body|string|true|none|
|» input|body|object \| null|false|none|
|» expectedOutput|body|object \| null|false|none|
|» metadata|body|object \| null|false|none|
|» sourceTraceId|body|string \| null|false|none|
|» sourceObservationId|body|string \| null|false|none|
|» id|body|string \| null|false|Dataset items are upserted on their id. Id needs to be unique (project-level), cannot be reused across datasets, and must be at most 255 characters.|
|» status|body|[DatasetStatus](#schemadatasetstatus)|false|Defaults to ACTIVE for newly created items|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|ARCHIVED|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "status": "ACTIVE",
  "input": null,
  "expectedOutput": null,
  "metadata": null,
  "sourceTraceId": "string",
  "sourceObservationId": "string",
  "datasetId": "string",
  "datasetName": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "version": "1970-01-01T00:00:00Z",
  "mediaReferences": [
    {
      "field": "input",
      "referenceString": "string",
      "jsonPath": "string",
      "media": {
        "mediaId": "string",
        "contentType": "string",
        "contentLength": 0,
        "url": "string",
        "urlExpiry": "string"
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetitemscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DatasetItem](#schemadatasetitem)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## datasetItems_get

<a id="opIddatasetItems_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/dataset-items/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/dataset-items/{id}`

Get a dataset item

<h3 id="datasetitemsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "status": "ACTIVE",
  "input": null,
  "expectedOutput": null,
  "metadata": null,
  "sourceTraceId": "string",
  "sourceObservationId": "string",
  "datasetId": "string",
  "datasetName": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "version": "1970-01-01T00:00:00Z",
  "mediaReferences": [
    {
      "field": "input",
      "referenceString": "string",
      "jsonPath": "string",
      "media": {
        "mediaId": "string",
        "contentType": "string",
        "contentLength": 0,
        "url": "string",
        "urlExpiry": "string"
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetitemsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DatasetItem](#schemadatasetitem)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## datasetItems_delete

<a id="opIddatasetItems_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/dataset-items/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/dataset-items/{id}`

Delete a dataset item and all its run items. This action is irreversible.

<h3 id="datasetitemsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetitemsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteDatasetItemResponse](#schemadeletedatasetitemresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-datasets">Datasets</h1>

## datasets_list

<a id="opIddatasets_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/datasets`

Get all datasets

<h3 id="datasetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "metadata": null,
      "inputSchema": {},
      "expectedOutputSchema": {},
      "projectId": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedDatasets](#schemapaginateddatasets)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## datasets_create

<a id="opIddatasets_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string",
    "metadata": null,
    "inputSchema": null,
    "expectedOutputSchema": null
  }'
```

`POST /api/public/v2/datasets`

Create a dataset

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "metadata": null,
  "inputSchema": null,
  "expectedOutputSchema": null
}
```

<h3 id="datasetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDatasetRequest](#schemacreatedatasetrequest)|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» metadata|body|object \| null|false|none|
|» inputSchema|body|object \| null|false|JSON Schema for validating dataset item inputs. When set, all new and existing dataset items will be validated against this schema.|
|» expectedOutputSchema|body|object \| null|false|JSON Schema for validating dataset item expected outputs. When set, all new and existing dataset items will be validated against this schema.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "metadata": null,
  "inputSchema": {},
  "expectedOutputSchema": {},
  "projectId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Dataset](#schemadataset)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## datasets_get

<a id="opIddatasets_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/datasets/{datasetName}`

Get a dataset

<h3 id="datasetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|datasetName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "metadata": null,
  "inputSchema": {},
  "expectedOutputSchema": {},
  "projectId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="datasetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Dataset](#schemadataset)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-evaluationrules">EvaluationRules</h1>

## evaluationRules_list

<a id="opIdevaluationRules_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluation-rules \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/evaluation-rules`

List evaluation rules in newest-first creation order.

This includes legacy trace and dataset rules so they can be inspected and migrated. Treat the cursor as opaque and return it unchanged.

<h3 id="evaluationruleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer \| null|false|Maximum number of items to return. Defaults to `50` and cannot exceed `100`.|
|cursor|query|string \| null|false|Opaque cursor returned by the previous page.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "createdBy": {
        "id": "string",
        "name": "string"
      },
      "enabled": true,
      "sampling": 0,
      "filter": [
        {
          "type": "string",
          "column": "string",
          "operator": "string",
          "value": null,
          "key": "string"
        }
      ],
      "evaluatorAssignments": [
        {
          "evaluatorId": "string",
          "variableMapping": [
            {
              "variable": "string",
              "source": "string",
              "jsonPath": "string"
            }
          ]
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluationruleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvaluationRulesPage](#schemaevaluationrulespage)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluationRules_create

<a id="opIdevaluationRules_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluation-rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "enabled": true,
    "sampling": 0,
    "filter": [
      {
        "type": "datetime",
        "column": "string",
        "operator": "=",
        "value": "1970-01-01T00:00:00Z"
      }
    ],
    "evaluatorAssignments": [
      {
        "evaluatorId": "string",
        "variableMapping": [
          {
            "variable": "string",
            "source": "input",
            "jsonPath": "string"
          }
        ]
      }
    ]
  }'
```

`POST /api/public/v2/evaluation-rules`

Create an evaluation rule using stable evaluator identifiers.

An evaluation rule defines **which** incoming observations should be evaluated and how prompt variables should be populated.

Key behavior:
- rule names are not identifiers and do not need to be unique
- rules always use the latest version of each associated evaluator
- an enabled rule requires at least one evaluator assignment
- omit `sampling` to evaluate every matching observation
- omit `filter` to match every incoming observation
- `datasetId` is the public filter name for selecting experiment datasets

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "datetime",
      "column": "string",
      "operator": "=",
      "value": "1970-01-01T00:00:00Z"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "input",
          "jsonPath": "string"
        }
      ]
    }
  ]
}
```

<h3 id="evaluationrulescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateEvaluationRuleRequest](#schemacreateevaluationrulerequest)|true|none|
|» name|body|string|true|Human-readable rule name. Names are not identifiers and do not need to be unique.|
|» enabled|body|boolean|true|Whether live execution should start immediately. Enabled rules require at least one evaluator assignment.|
|» sampling|body|number(double) \| null|false|Fraction of matching observations to evaluate. Omit this field to use the default of `1`, which evaluates every match. `null` is not accepted.|
|» filter|body|[[EvaluationRuleFilter](#schemaevaluationrulefilter)]|false|Conditions used to select observations. Defaults to an empty list, which matches every incoming observation.|
|» evaluatorAssignments|body|[[EvaluationRuleEvaluatorAssignmentInput](#schemaevaluationruleevaluatorassignmentinput)]|true|Evaluators to attach to this rule. Disabled rules may use an empty list as a draft.|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "string",
      "column": "string",
      "operator": "string",
      "value": null,
      "key": "string"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 409 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluationrulescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[EvaluationRule](#schemaevaluationrule)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|409|Conflict||[PublicApiError](#schemapublicapierror)|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluationRules_get

<a id="opIdevaluationRules_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluation-rules/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/evaluation-rules/{evaluationRuleId}`

Get one evaluation rule, including a legacy trace or dataset rule, by its stable identifier.

<h3 id="evaluationrulesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluationRuleId|path|string|true|Stable evaluation-rule identifier returned by the evaluation-rule endpoints.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "string",
      "column": "string",
      "operator": "string",
      "value": null,
      "key": "string"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluationrulesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvaluationRule](#schemaevaluationrule)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluationRules_delete

<a id="opIdevaluationRules_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluation-rules/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/v2/evaluation-rules/{evaluationRuleId}`

Delete an evaluation rule.

This removes the live-ingestion rule only. It does not delete associated evaluators or scores already produced by them.

Legacy trace and dataset rules can also be deleted. Their evaluators and previously produced scores are preserved.

<h3 id="evaluationrulesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluationRuleId|path|string|true|Stable evaluation-rule identifier returned by the evaluation-rule endpoints.|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluationrulesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeletedEvaluationRule](#schemadeletedevaluationrule)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluationRules_update

<a id="opIdevaluationRules_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluation-rules/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "enabled": true,
    "sampling": 0,
    "filter": [
      {
        "type": "datetime",
        "column": "string",
        "operator": "=",
        "value": "1970-01-01T00:00:00Z"
      }
    ],
    "evaluatorAssignments": [
      {
        "evaluatorId": "string",
        "variableMapping": [
          {
            "variable": "string",
            "source": "input",
            "jsonPath": "string"
          }
        ]
      }
    ]
  }'
```

`PATCH /api/public/v2/evaluation-rules/{evaluationRuleId}`

Update an evaluation rule by its stable identifier.

Provide only the fields to change. Providing `evaluatorAssignments` replaces the complete assignment list. Replacing the list with an empty array disables the rule. Setting `enabled=true` is rejected when the resulting assignment list is empty, including when both fields are sent in the same request.

Legacy trace and dataset rules follow the existing lifecycle restrictions: they can be deactivated with `enabled=false`, but their name, filters, sampling, and evaluator assignments cannot be changed.

> Body parameter

```json
{
  "name": "string",
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "datetime",
      "column": "string",
      "operator": "=",
      "value": "1970-01-01T00:00:00Z"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "input",
          "jsonPath": "string"
        }
      ]
    }
  ]
}
```

<h3 id="evaluationrulesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluationRuleId|path|string|true|Stable evaluation-rule identifier returned by the evaluation-rule endpoints.|
|body|body|[UpdateEvaluationRuleRequest](#schemaupdateevaluationrulerequest)|true|none|
|» name|body|string \| null|false|New human-readable rule name.|
|» enabled|body|boolean \| null|false|New desired live-execution state.|
|» sampling|body|number(double) \| null|false|New fraction of matching observations to evaluate. Omit to keep the current value.|
|» filter|body|[[EvaluationRuleFilter](#schemaevaluationrulefilter)]|false|Complete replacement filter list. An empty list matches every incoming observation.|
|» evaluatorAssignments|body|[[EvaluationRuleEvaluatorAssignmentInput](#schemaevaluationruleevaluatorassignmentinput)]|false|Complete replacement assignment list. An empty list disables the rule.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "string",
      "column": "string",
      "operator": "string",
      "value": null,
      "key": "string"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 409 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluationrulesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvaluationRule](#schemaevaluationrule)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|409|Conflict||[PublicApiError](#schemapublicapierror)|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-evaluators">Evaluators</h1>

## evaluators_list

<a id="opIdevaluators_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluators \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/evaluators`

List evaluators in newest-first creation order.

Every evaluator includes its latest definition and version metadata flattened into the evaluator object, plus associated evaluation rules. Treat the cursor as opaque and return it unchanged.

<h3 id="evaluatorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer \| null|false|Maximum number of items to return. Defaults to `50` and cannot exceed `100`.|
|cursor|query|string \| null|false|Opaque cursor returned by the previous page.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "type": "llm_as_judge",
      "id": "string",
      "name": "string",
      "description": "string",
      "createdBy": {
        "id": "string",
        "name": "string"
      },
      "status": "active",
      "pausedAt": "1970-01-01T00:00:00Z",
      "pausedReason": "string",
      "pausedMessage": "string",
      "evaluationRuleAssignments": [
        {
          "evaluationRuleId": "string",
          "variableMappingOverride": [
            {
              "variable": "string",
              "source": "string",
              "jsonPath": "string"
            }
          ]
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "versionId": "string",
      "version": 0,
      "versionCreatedAt": "1970-01-01T00:00:00Z",
      "versionCreatedBy": {
        "id": "string",
        "name": "string"
      },
      "prompt": [
        {
          "role": "system",
          "content": "string"
        }
      ],
      "variables": [
        "string"
      ],
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ],
      "modelConfig": {
        "provider": "string",
        "model": "string"
      },
      "outputDefinition": {
        "dataType": "NUMERIC",
        "scoreReasoningInstructions": "string",
        "scoreValueInstructions": "string",
        "minValue": 0,
        "maxValue": 0
      }
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluatorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvaluatorsPage](#schemaevaluatorspage)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluators_create

<a id="opIdevaluators_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "llm_as_judge",
    "name": "string",
    "description": "string",
    "prompt": "string",
    "modelConfig": {
      "provider": "string",
      "model": "string"
    },
    "variableMapping": [
      {
        "variable": "string",
        "source": "input",
        "jsonPath": "string"
      }
    ],
    "outputDefinition": {
      "dataType": "NUMERIC",
      "scoreReasoningInstructions": "string",
      "scoreValueInstructions": "string",
      "minValue": 0,
      "maxValue": 0
    }
  }'
```

`POST /api/public/v2/evaluators`

Create an evaluator in the authenticated project.

An evaluator defines **how** Langfuse should score data. LLM-as-a-judge evaluators define a prompt, expected structured output, and optional model configuration. Code evaluators define source code and a runtime language.

This always creates a new evaluator with version `1`. Names are not identifiers and do not need to be unique.

> Body parameter

```json
{
  "type": "llm_as_judge",
  "name": "string",
  "description": "string",
  "prompt": "string",
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "variableMapping": [
    {
      "variable": "string",
      "source": "input",
      "jsonPath": "string"
    }
  ],
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

<h3 id="evaluatorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateEvaluatorRequest](#schemacreateevaluatorrequest)|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» name|body|string|true|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|» description|body|string \| null|false|Optional human-readable evaluator description.|
|» type|body|string|true|Evaluator type.|
|» prompt|body|[EvaluatorChatPromptInput](#schemaevaluatorchatpromptinput)|true|User prompt string shortcut or an ordered list of chat messages.|
|» modelConfig|body|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|false|Explicit model configuration. Set to `null` or omit to use the project's default evaluation model.|
|» variableMapping|body|[[PromptVariableMappingInput](#schemapromptvariablemappinginput)]|false|Default prompt-variable mapping, or `null` when no default is configured.|
|» outputDefinition|body|[EvaluatorOutputDefinition](#schemaevaluatoroutputdefinition)|true|Structured output schema returned by this evaluator. Do not include an internal persistence version.|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» name|body|string|true|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|» description|body|string \| null|false|Optional human-readable evaluator description.|
|» type|body|string|true|Evaluator type.|
|» sourceCode|body|string|true|Source code executed for each matched observation.|
|» sourceCodeLanguage|body|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|Runtime language used to execute the source code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|llm_as_judge|
|» type|code|
|» sourceCodeLanguage|PYTHON|
|» sourceCodeLanguage|TYPESCRIPT|

> Example responses

> 201 Response

```json
{
  "type": "llm_as_judge",
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  },
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 412 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluatorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[Evaluator](#schemaevaluator)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|412|Precondition Failed||[PublicApiError](#schemapublicapierror)|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluators_get

<a id="opIdevaluators_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluators/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/evaluators/{evaluatorId}`

Get one evaluator by its stable identifier.

The response includes the evaluator's latest definition and version metadata flattened into the evaluator object, plus associated evaluation rules. Use the version-history endpoint when older definitions are needed.

<h3 id="evaluatorsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluatorId|path|string|true|Stable evaluator identifier returned by the evaluator endpoints.|

> Example responses

> 200 Response

```json
{
  "type": "llm_as_judge",
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  },
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluatorsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Evaluator](#schemaevaluator)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluators_delete

<a id="opIdevaluators_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluators/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/v2/evaluators/{evaluatorId}`

Delete an evaluator and all of its stored versions.

Associated evaluation-rule assignments are also removed. Scores already produced by the evaluator are preserved.

<h3 id="evaluatorsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluatorId|path|string|true|Stable evaluator identifier returned by the evaluator endpoints.|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluatorsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeletedEvaluator](#schemadeletedevaluator)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluators_update

<a id="opIdevaluators_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluators/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`PATCH /api/public/v2/evaluators/{evaluatorId}`

Update an evaluator by its stable identifier.

Provide only the top-level fields to change. Metadata-only changes do not create a version. Evaluator type cannot change.

Definition fields are flattened into the request. To replace a definition, include `type` and every definition field for that type. Definition fields are replaced as a complete unit rather than merged. For LLM-as-a-judge evaluators, omitting or setting `modelConfig` to `null` selects the project's default evaluation model.

Replacing a definition automatically returns an evaluator paused by an invalid or missing model configuration to `active`, while preserving its id and evaluation-rule assignments. Pauses caused by provider authentication, billing, connectivity, account state, or an unknown legacy reason remain paused until the explicit reactivation check succeeds.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="evaluatorsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluatorId|path|string|true|Stable evaluator identifier returned by the evaluator endpoints.|
|body|body|[UpdateEvaluatorRequest](#schemaupdateevaluatorrequest)|true|none|
|» *oneOf*|body|[UpdateEvaluatorMetadataRequest](#schemaupdateevaluatormetadatarequest)|false|Metadata-only update. At least one field must be provided.|
|» *oneOf*|body|[UpdateLlmAsJudgeEvaluatorRequest](#schemaupdatellmasjudgeevaluatorrequest)|false|none|
|» *oneOf*|body|[UpdateCodeEvaluatorRequest](#schemaupdatecodeevaluatorrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "type": "llm_as_judge",
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  },
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 409 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 412 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluatorsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Evaluator](#schemaevaluator)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|409|Conflict||[PublicApiError](#schemapublicapierror)|
|412|Precondition Failed||[PublicApiError](#schemapublicapierror)|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## evaluators_listVersions

<a id="opIdevaluators_listVersions"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/evaluators/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/evaluators/{evaluatorId}/versions`

List an evaluator's version history in newest-first order.

This endpoint is intended for history and audit use cases. Ordinary clients can use the flattened `version` and definition fields on the evaluator response.

<h3 id="evaluatorslistversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|evaluatorId|path|string|true|Stable evaluator identifier returned by the evaluator endpoints.|
|limit|query|integer \| null|false|Maximum number of versions to return. Defaults to `50` and cannot exceed `100`.|
|cursor|query|string \| null|false|Opaque cursor returned by the previous page.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "type": "llm_as_judge",
      "id": "string",
      "version": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "string",
        "name": "string"
      },
      "prompt": [
        {
          "role": "system",
          "content": "string"
        }
      ],
      "variables": [
        "string"
      ],
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ],
      "modelConfig": {
        "provider": "string",
        "model": "string"
      },
      "outputDefinition": {
        "dataType": "NUMERIC",
        "scoreReasoningInstructions": "string",
        "scoreValueInstructions": "string",
        "minValue": 0,
        "maxValue": 0
      }
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

<h3 id="evaluatorslistversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EvaluatorVersionsPage](#schemaevaluatorversionspage)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[PublicApiError](#schemapublicapierror)|
|500|Internal Server Error||[PublicApiError](#schemapublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-experiments">Experiments</h1>

## experiments_list

<a id="opIdexperiments_list"></a>

> Code samples

```bash
curl 'https://cloud.langfuse.com/api/public/experiments?fromStartTime=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/experiments`

List experiments with cursor-based pagination. Results are ordered by
latest experiment activity descending.

<h3 id="experimentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string \| null|false|Comma-separated list of field groups to include. Available groups:<br>`core`, `metadata`, `scores`. If omitted, `core` is returned.|
|limit|query|integer \| null|false|Number of experiments to return per page. Maximum 100, default 50.|
|scoreLimit|query|integer \| null|false|Number of scores to return per experiment when `fields=scores` is requested. Maximum 50, default 50.|
|cursor|query|string \| null|false|Versioned base64url cursor from the previous response page.|
|fromStartTime|query|string(date-time)|true|Required. Retrieve only experiments with events on or after this<br>datetime. A lower bound is required so the query stays fast on<br>large projects; pair it with an upper bound to select a specific<br>window.|
|toStartTime|query|string(date-time) \| null|false|Retrieve only experiments before this datetime.|
|id|query|string \| null|false|Comma-separated list of experiment IDs.|
|name|query|string \| null|false|Comma-separated list of experiment names.|
|datasetId|query|string \| null|false|Comma-separated list of dataset IDs.|
|filter|query|string \| null|false|JSON string containing an array of structured filter conditions.<br>Supported columns are `id`, `name`, and `datasetId`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "itemCount": 0,
      "datasetId": "string",
      "metadata": {},
      "scores": [
        {
          "dataType": "NUMERIC",
          "id": "string",
          "projectId": "string",
          "name": "string",
          "source": "ANNOTATION",
          "timestamp": "1970-01-01T00:00:00Z",
          "environment": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "comment": "string",
          "configId": "string",
          "metadata": {},
          "authorUserId": "string",
          "queueId": "string",
          "subject": {
            "kind": "trace",
            "id": "string"
          },
          "value": 0
        }
      ]
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="experimentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExperimentsResponse](#schemaexperimentsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## experiments_listItems

<a id="opIdexperiments_listItems"></a>

> Code samples

```bash
curl 'https://cloud.langfuse.com/api/public/experiment-items?fromStartTime=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/experiment-items`

List experiment items with cursor-based pagination. Use this endpoint
to export experiment item inputs, outputs, expected outputs, metadata,
and optionally item/trace scores. Results are ordered by time
descending.

<h3 id="experimentslistitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string \| null|false|Comma-separated list of field groups to include. Available groups:<br>`core`, `dataset`, `io`, `metadata`, `itemMetadata`,<br>`experimentMetadata`, `scores`. If omitted, `core,dataset` is<br>returned.|
|limit|query|integer \| null|false|Number of experiment items to return per page. Maximum 100, default 50.|
|scoreLimit|query|integer \| null|false|Number of scores to return per experiment item when `fields=scores` is requested. Maximum 50, default 50.|
|cursor|query|string \| null|false|Versioned base64url cursor from the previous response page.|
|fromStartTime|query|string(date-time)|true|Required. Retrieve only experiment items started on or after this<br>datetime. A lower bound is required so the query stays fast on<br>large projects; pair it with an upper bound to select a specific<br>window.|
|toStartTime|query|string(date-time) \| null|false|Retrieve only experiment items started before this datetime.|
|experimentId|query|string \| null|false|Comma-separated list of experiment IDs.|
|experimentName|query|string \| null|false|Comma-separated list of experiment names.|
|experimentItemId|query|string \| null|false|Comma-separated list of experiment item IDs.|
|datasetId|query|string \| null|false|Comma-separated list of dataset IDs.|
|filter|query|string \| null|false|JSON string containing an array of structured filter conditions.<br>Supported columns are `experimentId`, `experimentName`,<br>`experimentItemId`, and `datasetId`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "traceId": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "level": "DEBUG",
      "environment": "string",
      "experimentId": "string",
      "experimentName": "string",
      "experimentItemId": "string",
      "experimentDatasetId": "string",
      "experimentItemVersion": "1970-01-01T00:00:00Z",
      "input": null,
      "output": null,
      "expectedOutput": null,
      "metadata": {},
      "experimentItemMetadata": {},
      "experimentMetadata": {},
      "experimentDescription": "string",
      "scores": [
        {
          "dataType": "NUMERIC",
          "id": "string",
          "projectId": "string",
          "name": "string",
          "source": "ANNOTATION",
          "timestamp": "1970-01-01T00:00:00Z",
          "environment": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "comment": "string",
          "configId": "string",
          "metadata": {},
          "authorUserId": "string",
          "queueId": "string",
          "subject": {
            "kind": "trace",
            "id": "string"
          },
          "value": 0
        }
      ]
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="experimentslistitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExperimentItemsResponse](#schemaexperimentitemsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-feedback">Feedback</h1>

## feedback_submit

<a id="opIdfeedback_submit"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "targetType": "skill",
    "target": "string",
    "feedback": "string",
    "goal": "string",
    "referenceUrl": "string"
  }'
```

`POST /api/public/feedback`

Submit explicit user-approved feedback about Langfuse skills, MCP tools, CLI, docs, or public API. Do not include secrets, credentials, customer data, trace payloads, or unrelated use-case details.

Not available in the HIPAA cloud region.

> Body parameter

```json
{
  "targetType": "skill",
  "target": "string",
  "feedback": "string",
  "goal": "string",
  "referenceUrl": "string"
}
```

<h3 id="feedbacksubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubmitFeedbackRequest](#schemasubmitfeedbackrequest)|true|none|
|» targetType|body|[FeedbackTargetType](#schemafeedbacktargettype)|true|Category of the thing the feedback is about.|
|» target|body|string|true|The specific instance within targetType: the skill name, MCP tool name, CLI command, API endpoint path, or docs page path (e.g. 'queryMetrics', '/docs/mcp'). An identifier, not a sentence. Must be between 1 and 200 characters.|
|» feedback|body|string|true|Concise feedback text approved by the user. Must be between 1 and 3000 characters.|
|» goal|body|string \| null|false|Optional user-approved goal or use case they were trying to achieve. Must be between 1 and 1500 characters when provided. Do not include secrets, customer data, trace payloads, or broad unrelated context.|
|» referenceUrl|body|string \| null|false|Optional HTTP(S) reference URL. Langfuse stores it as text for triage and does not fetch it.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» targetType|skill|
|» targetType|mcp-tool|
|» targetType|cli|
|» targetType|docs|
|» targetType|public-api|
|» targetType|other|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="feedbacksubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SubmitFeedbackResponse](#schemasubmitfeedbackresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|409|Conflict||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-health">Health</h1>

## health_health

<a id="opIdhealth_health"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/health \
  -H 'Accept: application/json'
```

`GET /api/public/health`

Check health of API and database

> Example responses

> 200 Response

```json
{
  "version": "string",
  "status": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="healthhealth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[HealthResponse](#schemahealthresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|503|Service Unavailable||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="server-llmconnections">LlmConnections</h1>

## llmConnections_list

<a id="opIdllmConnections_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/llm-connections \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/llm-connections`

Get all LLM connections in a project

<h3 id="llmconnectionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "provider": "string",
      "adapter": "string",
      "displaySecretKey": "string",
      "baseURL": "string",
      "customModels": [
        "string"
      ],
      "withDefaultModels": true,
      "extraHeaderKeys": [
        "string"
      ],
      "config": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="llmconnectionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedLlmConnections](#schemapaginatedllmconnections)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## llmConnections_upsert

<a id="opIdllmConnections_upsert"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/llm-connections \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "provider": "string",
    "adapter": "anthropic",
    "secretKey": "string",
    "baseURL": "string",
    "customModels": [
      "string"
    ],
    "withDefaultModels": true,
    "extraHeaders": {
      "property1": "string",
      "property2": "string"
    },
    "config": {}
  }'
```

`PUT /api/public/llm-connections`

Create or update an LLM connection. The connection is upserted on provider.

> Body parameter

```json
{
  "provider": "string",
  "adapter": "anthropic",
  "secretKey": "string",
  "baseURL": "string",
  "customModels": [
    "string"
  ],
  "withDefaultModels": true,
  "extraHeaders": {
    "property1": "string",
    "property2": "string"
  },
  "config": {}
}
```

<h3 id="llmconnectionsupsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpsertLlmConnectionRequest](#schemaupsertllmconnectionrequest)|true|none|
|» provider|body|string|true|Provider name (e.g., 'openai', 'my-gateway'). Must be unique in project, used for upserting.|
|» adapter|body|[LlmAdapter](#schemallmadapter)|true|The adapter used to interface with the LLM|
|» secretKey|body|string|true|Secret key for the LLM API.|
|» baseURL|body|string \| null|false|Custom base URL for the LLM API|
|» customModels|body|[string]|false|List of custom model names|
|» withDefaultModels|body|boolean \| null|false|Whether to include default models. Default is true.|
|» extraHeaders|body|object \| null|false|Extra headers to send with requests|
|» » **additionalProperties**|body|string|false|none|
|» config|body|object \| null|false|Adapter-specific configuration. Validation rules: - **Bedrock**: Required. Must be `{"region": "<aws-region>"}` (e.g., `{"region":"us-east-1"}`) - **OpenAI**: Optional. If provided, must be `{"useResponsesApi": <boolean>}` to control whether Langfuse routes calls through OpenAI's Responses API. - **VertexAI**: Optional. If provided, must be `{"location": "<gcp-location>"}` (e.g., `{"location":"us-central1"}`) - **Other adapters**: Not supported. Omit this field or set to null.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adapter|anthropic|
|» adapter|openai|
|» adapter|azure|
|» adapter|bedrock|
|» adapter|google-vertex-ai|
|» adapter|google-ai-studio|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "provider": "string",
  "adapter": "string",
  "displaySecretKey": "string",
  "baseURL": "string",
  "customModels": [
    "string"
  ],
  "withDefaultModels": true,
  "extraHeaderKeys": [
    "string"
  ],
  "config": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="llmconnectionsupsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LlmConnection](#schemallmconnection)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## llmConnections_delete

<a id="opIdllmConnections_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/llm-connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/llm-connections/{id}`

Delete an LLM connection by id. Evaluators that depend on the deleted connection are automatically paused.

<h3 id="llmconnectionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="llmconnectionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteLlmConnectionResponse](#schemadeletellmconnectionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## llmConnections_listOrganization

<a id="opIdllmConnections_listOrganization"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/llm-connections \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/organizations/llm-connections`

Get all organization-level LLM connections. Requires an organization-scoped API key.

<h3 id="llmconnectionslistorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "provider": "string",
      "adapter": "string",
      "displaySecretKey": "string",
      "baseURL": "string",
      "customModels": [
        "string"
      ],
      "withDefaultModels": true,
      "extraHeaderKeys": [
        "string"
      ],
      "config": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="llmconnectionslistorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedLlmConnections](#schemapaginatedllmconnections)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## llmConnections_upsertOrganization

<a id="opIdllmConnections_upsertOrganization"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/llm-connections \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "provider": "string",
    "adapter": "anthropic",
    "secretKey": "string",
    "baseURL": "string",
    "customModels": [
      "string"
    ],
    "withDefaultModels": true,
    "extraHeaders": {
      "property1": "string",
      "property2": "string"
    },
    "config": {}
  }'
```

`PUT /api/public/organizations/llm-connections`

Create or update an organization-level LLM connection. The connection is upserted on provider and inherited by projects without a provider override. Requires an organization-scoped API key.

> Body parameter

```json
{
  "provider": "string",
  "adapter": "anthropic",
  "secretKey": "string",
  "baseURL": "string",
  "customModels": [
    "string"
  ],
  "withDefaultModels": true,
  "extraHeaders": {
    "property1": "string",
    "property2": "string"
  },
  "config": {}
}
```

<h3 id="llmconnectionsupsertorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpsertLlmConnectionRequest](#schemaupsertllmconnectionrequest)|true|none|
|» provider|body|string|true|Provider name (e.g., 'openai', 'my-gateway'). Must be unique in project, used for upserting.|
|» adapter|body|[LlmAdapter](#schemallmadapter)|true|The adapter used to interface with the LLM|
|» secretKey|body|string|true|Secret key for the LLM API.|
|» baseURL|body|string \| null|false|Custom base URL for the LLM API|
|» customModels|body|[string]|false|List of custom model names|
|» withDefaultModels|body|boolean \| null|false|Whether to include default models. Default is true.|
|» extraHeaders|body|object \| null|false|Extra headers to send with requests|
|» » **additionalProperties**|body|string|false|none|
|» config|body|object \| null|false|Adapter-specific configuration. Validation rules: - **Bedrock**: Required. Must be `{"region": "<aws-region>"}` (e.g., `{"region":"us-east-1"}`) - **OpenAI**: Optional. If provided, must be `{"useResponsesApi": <boolean>}` to control whether Langfuse routes calls through OpenAI's Responses API. - **VertexAI**: Optional. If provided, must be `{"location": "<gcp-location>"}` (e.g., `{"location":"us-central1"}`) - **Other adapters**: Not supported. Omit this field or set to null.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adapter|anthropic|
|» adapter|openai|
|» adapter|azure|
|» adapter|bedrock|
|» adapter|google-vertex-ai|
|» adapter|google-ai-studio|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "provider": "string",
  "adapter": "string",
  "displaySecretKey": "string",
  "baseURL": "string",
  "customModels": [
    "string"
  ],
  "withDefaultModels": true,
  "extraHeaderKeys": [
    "string"
  ],
  "config": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="llmconnectionsupsertorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[LlmConnection](#schemallmconnection)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## llmConnections_deleteOrganization

<a id="opIdllmConnections_deleteOrganization"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/llm-connections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/organizations/llm-connections/{id}`

Delete an organization-level LLM connection by id. Evaluators in projects without an override for the provider are automatically paused. Requires an organization-scoped API key.

<h3 id="llmconnectionsdeleteorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="llmconnectionsdeleteorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteLlmConnectionResponse](#schemadeletellmconnectionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-media">Media</h1>

## media_get

<a id="opIdmedia_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/media/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/media/{mediaId}`

Get a media record

<h3 id="mediaget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaId|path|string|true|The unique langfuse identifier of a media record|

> Example responses

> 200 Response

```json
{
  "mediaId": "string",
  "contentType": "string",
  "contentLength": 0,
  "uploadedAt": "1970-01-01T00:00:00Z",
  "url": "string",
  "urlExpiry": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="mediaget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetMediaResponse](#schemagetmediaresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## media_patch

<a id="opIdmedia_patch"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/media/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "uploadedAt": "1970-01-01T00:00:00Z",
    "uploadHttpStatus": 0,
    "uploadHttpError": "string",
    "uploadTimeMs": 0
  }'
```

`PATCH /api/public/media/{mediaId}`

Patch a media record

> Body parameter

```json
{
  "uploadedAt": "1970-01-01T00:00:00Z",
  "uploadHttpStatus": 0,
  "uploadHttpError": "string",
  "uploadTimeMs": 0
}
```

<h3 id="mediapatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mediaId|path|string|true|The unique langfuse identifier of a media record|
|body|body|[PatchMediaBody](#schemapatchmediabody)|true|none|
|» uploadedAt|body|string(date-time)|true|The date and time when the media record was uploaded|
|» uploadHttpStatus|body|integer|true|The HTTP status code of the upload|
|» uploadHttpError|body|string \| null|false|The HTTP error message of the upload|
|» uploadTimeMs|body|integer \| null|false|The time in milliseconds it took to upload the media record|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="mediapatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## media_getUploadUrl

<a id="opIdmedia_getUploadUrl"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/media \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "traceId": "string",
    "observationId": "string",
    "datasetId": "string",
    "datasetItemId": "string",
    "contentType": "image/png",
    "contentLength": 0,
    "sha256Hash": "string",
    "field": "string"
  }'
```

`POST /api/public/media`

Get a presigned upload URL for a media record

> Body parameter

```json
{
  "traceId": "string",
  "observationId": "string",
  "datasetId": "string",
  "datasetItemId": "string",
  "contentType": "image/png",
  "contentLength": 0,
  "sha256Hash": "string",
  "field": "string"
}
```

<h3 id="mediagetuploadurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetMediaUploadUrlRequest](#schemagetmediauploadurlrequest)|true|none|
|» traceId|body|string \| null|false|The trace the media is associated with. Null for dataset item media uploads.|
|» observationId|body|string \| null|false|The observation ID associated with the media record. If the media record is associated directly with a trace, this will be null.|
|» datasetId|body|string \| null|false|The dataset the media belongs to. Null for trace/observation media uploads.|
|» datasetItemId|body|string \| null|false|The dataset item the media is associated with (need not exist yet). Null for trace/observation media uploads.|
|» contentType|body|[MediaContentType](#schemamediacontenttype)|true|The MIME type of the media record|
|» contentLength|body|integer|true|The size of the media record in bytes|
|» sha256Hash|body|string|true|The SHA-256 hash of the media record|
|» field|body|string|true|The item field the media is in: `input`/`output`/`metadata` (trace) or `input`/`expectedOutput`/`metadata` (dataset item).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentType|image/png|
|» contentType|image/jpeg|
|» contentType|image/jpg|
|» contentType|image/webp|
|» contentType|image/gif|
|» contentType|image/svg+xml|
|» contentType|image/tiff|
|» contentType|image/bmp|
|» contentType|image/avif|
|» contentType|image/heic|
|» contentType|audio/mpeg|
|» contentType|audio/mp3|
|» contentType|audio/wav|
|» contentType|audio/ogg|
|» contentType|audio/oga|
|» contentType|audio/aac|
|» contentType|audio/mp4|
|» contentType|audio/flac|
|» contentType|audio/opus|
|» contentType|audio/webm|
|» contentType|video/mp4|
|» contentType|video/webm|
|» contentType|video/ogg|
|» contentType|video/mpeg|
|» contentType|video/quicktime|
|» contentType|video/x-msvideo|
|» contentType|video/x-matroska|
|» contentType|text/plain|
|» contentType|text/html|
|» contentType|text/css|
|» contentType|text/csv|
|» contentType|text/markdown|
|» contentType|text/x-python|
|» contentType|application/javascript|
|» contentType|text/x-typescript|
|» contentType|application/x-yaml|
|» contentType|application/pdf|
|» contentType|application/msword|
|» contentType|application/vnd.ms-excel|
|» contentType|application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|
|» contentType|application/zip|
|» contentType|application/json|
|» contentType|application/xml|
|» contentType|application/octet-stream|
|» contentType|application/vnd.openxmlformats-officedocument.wordprocessingml.document|
|» contentType|application/vnd.openxmlformats-officedocument.presentationml.presentation|
|» contentType|application/rtf|
|» contentType|application/x-ndjson|
|» contentType|application/vnd.apache.parquet|
|» contentType|application/gzip|
|» contentType|application/x-tar|
|» contentType|application/x-7z-compressed|

> Example responses

> 200 Response

```json
{
  "uploadUrl": "string",
  "mediaId": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="mediagetuploadurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetMediaUploadUrlResponse](#schemagetmediauploadurlresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-metrics">Metrics</h1>

## metrics_metrics

<a id="opIdmetrics_metrics"></a>

> Code samples

```bash
curl 'https://cloud.langfuse.com/api/public/v2/metrics?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/metrics`

Get metrics from the Langfuse project using a query object. V2 endpoint with optimized performance.

Together with OpenTelemetry ingestion and Observations API v2, this is the only real-time read path. Other public API endpoints can delay data by about 10 minutes.

## V2 Differences
- Supports `observations`, `scores-numeric`, `scores-boolean`, and `scores-categorical` views only (traces view not supported)
- Direct access to tags and release fields on observations
- Semantic-root filtering and grouping through the v2-only `isRootObservation` dimension
- Backwards-compatible: traceName, traceRelease, traceVersion dimensions are still available on observations view
- High cardinality dimensions are not supported and will return a 400 error (see below)

For more details, see the [Metrics API documentation](https://langfuse.com/docs/metrics/features/metrics-api).

## Available Views

### observations
Query observation-level data (spans, generations, events).

**Dimensions:**
- `environment` - Deployment environment (e.g., production, staging)
- `type` - Type of observation (SPAN, GENERATION, EVENT)
- `name` - Name of the observation
- `level` - Logging level of the observation
- `version` - Version of the observation
- `tags` - User-defined tags
- `release` - Release version
- `traceName` - Name of the parent trace (backwards-compatible)
- `traceRelease` - Release version of the parent trace (backwards-compatible, maps to release)
- `traceVersion` - Version of the parent trace (backwards-compatible, maps to version)
- `providedModelName` - Name of the model used
- `promptName` - Name of the prompt used
- `promptVersion` - Version of the prompt used
- `isRootObservation` - Boolean semantic-root status. `true` includes physical roots and app roots whose SDK parent is external (so `parentObservationId` may be non-null).
- `startTimeMonth` - Month of start_time in YYYY-MM format

**Measures:**
- `count` - Total number of observations
- `latency` - Observation latency (milliseconds)
- `streamingLatency` - Generation latency from completion start to end (milliseconds)
- `inputTokens` - Sum of input tokens consumed
- `outputTokens` - Sum of output tokens produced
- `totalTokens` - Sum of all tokens consumed
- `outputTokensPerSecond` - Output tokens per second
- `tokensPerSecond` - Total tokens per second
- `inputCost` - Input cost (USD)
- `outputCost` - Output cost (USD)
- `totalCost` - Total cost (USD)
- `timeToFirstToken` - Time to first token (milliseconds)
- `countScores` - Number of scores attached to the observation

### scores-numeric
Query numeric and boolean score data.

**Dimensions:**
- `environment` - Deployment environment
- `name` - Name of the score (e.g., accuracy, toxicity)
- `source` - Origin of the score (API, ANNOTATION, EVAL)
- `dataType` - Data type (NUMERIC, BOOLEAN)
- `configId` - Identifier of the score config
- `timestampMonth` - Month in YYYY-MM format
- `timestampDay` - Day in YYYY-MM-DD format
- `value` - Numeric value of the score
- `traceName` - Name of the parent trace
- `tags` - Tags
- `traceRelease` - Release version
- `traceVersion` - Version
- `observationName` - Name of the associated observation
- `observationModelName` - Model name of the associated observation
- `observationPromptName` - Prompt name of the associated observation
- `observationPromptVersion` - Prompt version of the associated observation

**Measures:**
- `count` - Total number of scores
- `value` - Score value (for aggregations)

### scores-boolean
Query boolean score data. It has the same score and parent trace/observation dimensions as scores-numeric, plus:

**Dimensions:**
- `booleanValue` - Boolean value for true/false grouping and filtering

**Measures:**
- `count` - Total number of boolean scores
- `value` - Numeric 0/1 score value; `avg` returns the true-rate

### scores-categorical
Query categorical score data. Same dimensions as scores-numeric except uses `stringValue` instead of `value`.

**Measures:**
- `count` - Total number of scores

## High Cardinality Dimensions
The following dimensions cannot be used as grouping dimensions in v2 metrics API as they can cause performance issues.
Use them in filters instead.

**observations view:**
- `id` - Use traceId filter to narrow down results
- `traceId` - Use traceId filter instead
- `userId` - Use userId filter instead
- `sessionId` - Use sessionId filter instead
- `parentObservationId` - Use parentObservationId filter instead

**scores-numeric / scores-boolean / scores-categorical views:**
- `id` - Use specific filters to narrow down results
- `traceId` - Use traceId filter instead
- `userId` - Use userId filter instead
- `sessionId` - Use sessionId filter instead
- `observationId` - Use observationId filter instead

## Aggregations
Available aggregation functions: `sum`, `avg`, `count`, `max`, `min`, `p50`, `p75`, `p90`, `p95`, `p99`, `histogram`

## Time Granularities
Available granularities for timeDimension: `auto`, `minute`, `hour`, `day`, `week`, `month`
- `auto` bins the data into approximately 50 buckets based on the time range

<h3 id="metricsmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|JSON string containing the query parameters with the following structure:<br>```json<br>{<br>  "view": string,           // Required. One of "observations", "scores-numeric", "scores-boolean", "scores-categorical"<br>  "dimensions": [           // Optional. Default: []<br>    {<br>      "field": string       // Field to group by (see available dimensions above)<br>    }<br>  ],<br>  "metrics": [              // Required. At least one metric must be provided<br>    {<br>      "measure": string,    // What to measure (see available measures above)<br>      "aggregation": string // How to aggregate: "sum", "avg", "count", "max", "min", "p50", "p75", "p90", "p95", "p99", "histogram"<br>    }<br>  ],<br>  "filters": [              // Optional. Default: []<br>    {<br>      "column": string,     // Column to filter on (any dimension field)<br>      "operator": string,   // Operator based on type:<br>                            // - datetime: ">", "<", ">=", "<="<br>                            // - string: "=", "contains", "does not contain", "starts with", "ends with"<br>                            // - stringOptions: "any of", "none of"<br>                            // - arrayOptions: "any of", "none of", "all of"<br>                            // - number: "=", ">", "<", ">=", "<="<br>                            // - stringObject/numberObject: same as string/number with required "key"<br>                            // - boolean: "=", "<>"<br>                            // - null: "is null", "is not null"<br>      "value": any,         // Value to compare against<br>      "type": string,       // Data type: "datetime", "string", "number", "stringOptions", "categoryOptions", "arrayOptions", "stringObject", "numberObject", "boolean", "null"<br>      "key": string         // Required only for stringObject/numberObject types (e.g., metadata filtering)<br>    }<br>  ],<br>  "timeDimension": {        // Optional. Default: null. If provided, results will be grouped by time<br>    "granularity": string   // One of "auto", "minute", "hour", "day", "week", "month"<br>  },<br>  "fromTimestamp": string,  // Required. ISO datetime string for start of time range<br>  "toTimestamp": string,    // Required. ISO datetime string for end of time range (must be after fromTimestamp)<br>  "orderBy": [              // Optional. Default: null<br>    {<br>      "field": string,      // Field to order by (dimension or metric alias)<br>      "direction": string   // "asc" or "desc"<br>    }<br>  ],<br>  "config": {               // Optional. Query-specific configuration<br>    "bins": number,         // Optional. Number of bins for histogram aggregation (1-100), default: 10<br>    "row_limit": number     // Optional. Maximum number of rows to return (1-1000), default: 100<br>  }<br>}<br>```<br><br>For example, to count semantic roots (including app roots with a non-null external parent), use a boolean filter:<br>```json<br>{<br>  "view": "observations",<br>  "metrics": [{"measure": "count", "aggregation": "count"}],<br>  "filters": [{"column": "isRootObservation", "operator": "=", "value": true, "type": "boolean"}],<br>  "fromTimestamp": "2025-01-01T00:00:00.000Z",<br>  "toTimestamp": "2025-02-01T00:00:00.000Z"<br>}<br>```|

> Example responses

> 200 Response

```json
{
  "data": [
    {}
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="metricsmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MetricsV2Response](#schemametricsv2response)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-models">Models</h1>

## models_list

<a id="opIdmodels_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/models \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/models`

Get all models

<h3 id="modelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "modelName": "string",
      "matchPattern": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "unit": "CHARACTERS",
      "inputPrice": 0,
      "outputPrice": 0,
      "totalPrice": 0,
      "tokenizerId": "string",
      "tokenizerConfig": null,
      "isLangfuseManaged": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "prices": {
        "property1": {
          "price": 0
        },
        "property2": {
          "price": 0
        }
      },
      "pricingTiers": [
        {
          "id": "string",
          "name": "string",
          "isDefault": true,
          "priority": 0,
          "conditions": [
            {
              "usageDetailPattern": "string",
              "operator": "gt",
              "value": 0,
              "caseSensitive": true
            }
          ],
          "prices": {
            "property1": 0,
            "property2": 0
          }
        }
      ]
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="modelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedModels](#schemapaginatedmodels)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## models_create

<a id="opIdmodels_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "modelName": "string",
    "matchPattern": "string",
    "startDate": "1970-01-01T00:00:00Z",
    "unit": "CHARACTERS",
    "inputPrice": 0,
    "outputPrice": 0,
    "totalPrice": 0,
    "pricingTiers": [
      {
        "name": "string",
        "isDefault": true,
        "priority": 0,
        "conditions": [
          {
            "usageDetailPattern": "string",
            "operator": "gt",
            "value": 0,
            "caseSensitive": true
          }
        ],
        "prices": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "tokenizerId": "openai",
    "tokenizerConfig": null
  }'
```

`POST /api/public/models`

Create a model

> Body parameter

```json
{
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "pricingTiers": [
    {
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "tokenizerId": "openai",
  "tokenizerConfig": null
}
```

<h3 id="modelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateModelRequest](#schemacreatemodelrequest)|true|none|
|» modelName|body|string|true|Name of the model definition. If multiple with the same name exist, they are applied in the following order: (1) custom over built-in, (2) newest according to startTime where model.startTime<observation.startTime|
|» matchPattern|body|string|true|Regex pattern which matches this model definition to generation.model. Useful in case of fine-tuned models. If you want to exact match, use `(?i)^modelname$`|
|» startDate|body|string(date-time) \| null|false|Apply only to generations which are newer than this ISO date.|
|» unit|body|[ModelUsageUnit](#schemamodelusageunit)|true|Unit used by this model.|
|» inputPrice|body|number(double) \| null|false|Deprecated. Use 'pricingTiers' instead. Price (USD) per input unit. Creates a default tier if pricingTiers not provided.|
|» outputPrice|body|number(double) \| null|false|Deprecated. Use 'pricingTiers' instead. Price (USD) per output unit. Creates a default tier if pricingTiers not provided.|
|» totalPrice|body|number(double) \| null|false|Deprecated. Use 'pricingTiers' instead. Price (USD) per total units. Cannot be set if input or output price is set. Creates a default tier if pricingTiers not provided.|
|» pricingTiers|body|[[PricingTierInput](#schemapricingtierinput)]|false|Optional. Array of pricing tiers for this model.<br><br>Use pricing tiers for all models - both those with threshold-based pricing variations and those with simple flat pricing:<br><br>- For models with standard flat pricing: Create a single default tier with your prices<br>  (e.g., one tier with isDefault=true, priority=0, conditions=[], and your standard prices)<br><br>- For models with threshold-based pricing: Create a default tier plus additional conditional tiers<br>  (e.g., default tier for standard usage + high-volume tier for usage above certain thresholds)<br><br>Requirements:<br>- Cannot be provided with flat prices (inputPrice/outputPrice/totalPrice) - use one approach or the other<br>- Must include exactly one default tier with isDefault=true, priority=0, and conditions=[]<br>- All tier names and priorities must be unique within the model<br>- Each tier must define at least one price<br><br>If omitted, you must provide flat prices instead (inputPrice/outputPrice/totalPrice),<br>which will automatically create a single default tier named "Standard".|
|» tokenizerId|body|[ModelTokenizerId](#schemamodeltokenizerid)|false|Optional. Tokenizer to be applied to observations which match to this model. See docs for more details.|
|» tokenizerConfig|body|object \| null|false|Optional. Configuration for the selected tokenizer. Needs to be JSON. See docs for more details.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» unit|CHARACTERS|
|» unit|TOKENS|
|» unit|MILLISECONDS|
|» unit|SECONDS|
|» unit|IMAGES|
|» unit|REQUESTS|
|» tokenizerId|openai|
|» tokenizerId|claude|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "tokenizerId": "string",
  "tokenizerConfig": null,
  "isLangfuseManaged": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "prices": {
    "property1": {
      "price": 0
    },
    "property2": {
      "price": 0
    }
  },
  "pricingTiers": [
    {
      "id": "string",
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="modelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Model](#schemamodel)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## models_get

<a id="opIdmodels_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/models/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/models/{id}`

Get a model

<h3 id="modelsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "tokenizerId": "string",
  "tokenizerConfig": null,
  "isLangfuseManaged": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "prices": {
    "property1": {
      "price": 0
    },
    "property2": {
      "price": 0
    }
  },
  "pricingTiers": [
    {
      "id": "string",
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="modelsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Model](#schemamodel)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## models_upsert

<a id="opIdmodels_upsert"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/models/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "modelName": "string",
    "matchPattern": "string",
    "startDate": "1970-01-01T00:00:00Z",
    "unit": "CHARACTERS",
    "inputPrice": 0,
    "outputPrice": 0,
    "totalPrice": 0,
    "pricingTiers": [
      {
        "name": "string",
        "isDefault": true,
        "priority": 0,
        "conditions": [
          {
            "usageDetailPattern": "string",
            "operator": "gt",
            "value": 0,
            "caseSensitive": true
          }
        ],
        "prices": {
          "property1": 0,
          "property2": 0
        }
      }
    ],
    "tokenizerId": "openai",
    "tokenizerConfig": null
  }'
```

`PUT /api/public/models/{id}`

Create or replace a project-owned model using its id. Built-in models cannot be modified.

> Body parameter

```json
{
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "pricingTiers": [
    {
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "tokenizerId": "openai",
  "tokenizerConfig": null
}
```

<h3 id="modelsupsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CreateModelRequest](#schemacreatemodelrequest)|true|none|
|» modelName|body|string|true|Name of the model definition. If multiple with the same name exist, they are applied in the following order: (1) custom over built-in, (2) newest according to startTime where model.startTime<observation.startTime|
|» matchPattern|body|string|true|Regex pattern which matches this model definition to generation.model. Useful in case of fine-tuned models. If you want to exact match, use `(?i)^modelname$`|
|» startDate|body|string(date-time) \| null|false|Apply only to generations which are newer than this ISO date.|
|» unit|body|[ModelUsageUnit](#schemamodelusageunit)|true|Unit used by this model.|
|» inputPrice|body|number(double) \| null|false|Deprecated. Use 'pricingTiers' instead. Price (USD) per input unit. Creates a default tier if pricingTiers not provided.|
|» outputPrice|body|number(double) \| null|false|Deprecated. Use 'pricingTiers' instead. Price (USD) per output unit. Creates a default tier if pricingTiers not provided.|
|» totalPrice|body|number(double) \| null|false|Deprecated. Use 'pricingTiers' instead. Price (USD) per total units. Cannot be set if input or output price is set. Creates a default tier if pricingTiers not provided.|
|» pricingTiers|body|[[PricingTierInput](#schemapricingtierinput)]|false|Optional. Array of pricing tiers for this model.<br><br>Use pricing tiers for all models - both those with threshold-based pricing variations and those with simple flat pricing:<br><br>- For models with standard flat pricing: Create a single default tier with your prices<br>  (e.g., one tier with isDefault=true, priority=0, conditions=[], and your standard prices)<br><br>- For models with threshold-based pricing: Create a default tier plus additional conditional tiers<br>  (e.g., default tier for standard usage + high-volume tier for usage above certain thresholds)<br><br>Requirements:<br>- Cannot be provided with flat prices (inputPrice/outputPrice/totalPrice) - use one approach or the other<br>- Must include exactly one default tier with isDefault=true, priority=0, and conditions=[]<br>- All tier names and priorities must be unique within the model<br>- Each tier must define at least one price<br><br>If omitted, you must provide flat prices instead (inputPrice/outputPrice/totalPrice),<br>which will automatically create a single default tier named "Standard".|
|» tokenizerId|body|[ModelTokenizerId](#schemamodeltokenizerid)|false|Optional. Tokenizer to be applied to observations which match to this model. See docs for more details.|
|» tokenizerConfig|body|object \| null|false|Optional. Configuration for the selected tokenizer. Needs to be JSON. See docs for more details.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» unit|CHARACTERS|
|» unit|TOKENS|
|» unit|MILLISECONDS|
|» unit|SECONDS|
|» unit|IMAGES|
|» unit|REQUESTS|
|» tokenizerId|openai|
|» tokenizerId|claude|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "tokenizerId": "string",
  "tokenizerConfig": null,
  "isLangfuseManaged": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "prices": {
    "property1": {
      "price": 0
    },
    "property2": {
      "price": 0
    }
  },
  "pricingTiers": [
    {
      "id": "string",
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="modelsupsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Model](#schemamodel)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## models_delete

<a id="opIdmodels_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/models/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/models/{id}`

Delete a model. Cannot delete models managed by Langfuse. You can create your own definition with the same modelName to override the definition though.

<h3 id="modelsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="modelsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-observations">Observations</h1>

## observations_getMany

<a id="opIdobservations_getMany"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/observations \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/observations`

Get a list of observations with cursor-based pagination and flexible field selection.

Together with OpenTelemetry ingestion and Metrics API v2, this is the only real-time read path. Other public API endpoints can delay data by about 10 minutes.

## Cursor-based Pagination
This endpoint uses cursor-based pagination for efficient traversal of large datasets.
The cursor is returned in the response metadata and should be passed in subsequent requests
to retrieve the next page of results.

## Field Selection
Use the `fields` parameter to control which observation fields are returned:
- `core` - Always included: id, traceId, startTime, endTime, projectId, parentObservationId, type
- `basic` - name, level, statusMessage, version, environment, bookmarked, public, userId, sessionId, isRootObservation
- `time` - completionStartTime, createdAt, updatedAt
- `io` - input, output
- `metadata` - metadata (truncated to 200 chars by default, use `expandMetadata` to get full values)
- `model` - model, internalModelId, modelParameters
- `usage` - usageDetails, costDetails, totalCost, usagePricingTierName
- `prompt` - promptId, promptName, promptVersion
- `metrics` - latency, timeToFirstToken
- `trace_context` - tags, release, traceName

If not specified, `core` and `basic` field groups are returned.

## Filters
Multiple filtering options are available via query parameters or the structured `filter` parameter.
When using the `filter` parameter, it takes precedence over individual query parameter filters.

<h3 id="observationsgetmany-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string \| null|false|Comma-separated list of field groups to include in the response.<br>Available groups: core, basic, time, io, metadata, model, usage, prompt, metrics, trace_context.<br>If not specified, `core` and `basic` field groups are returned.<br>Example: "basic,usage,model"|
|expandMetadata|query|string \| null|false|Comma-separated list of metadata keys to return non-truncated.<br>By default, metadata values over 200 characters are truncated.<br>Use this parameter to retrieve full values for specific keys.<br>Example: "key1,key2"|
|limit|query|integer \| null|false|Number of items to return per page. Maximum 1000, default 50.|
|cursor|query|string \| null|false|Base64-encoded cursor for pagination. Use the cursor from the previous response to get the next page.|
|parseIoAsJson|query|boolean \| null|false|**Deprecated.** Setting this to `true` will return a 400 error.<br>Input/output fields are always returned as raw strings.<br>Remove this parameter or set it to `false`.|
|name|query|string \| null|false|none|
|userId|query|string \| null|false|none|
|sessionId|query|string \| null|false|Filter by session ID.|
|type|query|string \| null|false|Filter by observation type (e.g., "GENERATION", "SPAN", "EVENT", "AGENT", "TOOL", "CHAIN", "RETRIEVER", "EVALUATOR", "EMBEDDING", "GUARDRAIL")|
|traceId|query|string \| null|false|none|
|level|query|[ObservationLevel](#schemaobservationlevel)|false|Optional filter for observations with a specific level (e.g. "DEBUG", "DEFAULT", "WARNING", "ERROR").|
|parentObservationId|query|string \| null|false|Filter by the physical parent observation ID.<br>An empty value matches only observations without a physical parent. Use `isRootObservation` to include observations marked as app roots by the SDK, which may retain a non-null `parentObservationId`.|
|isRootObservation|query|boolean \| null|false|Filter by whether an observation is a logical root.<br>Root observations include observations without a physical parent and observations marked as app roots by the SDK.<br>An app-root observation may have `isRootObservation=true` and a non-null `parentObservationId`.|
|environment|query|[string \| null]|false|Optional filter for observations where the environment is one of the provided values.|
|fromStartTime|query|string(date-time) \| null|false|Retrieve only observations with a start_time on or after this datetime (ISO 8601).|
|toStartTime|query|string(date-time) \| null|false|Retrieve only observations with a start_time before this datetime (ISO 8601).|
|version|query|string \| null|false|Optional filter to only include observations with a certain version.|
|filter|query|string \| null|false|JSON string containing an array of filter conditions. When provided, this takes precedence over query parameter filters (userId, name, type, level, environment, fromStartTime, ...).<br><br>## Filter Structure<br>Each filter condition has the following structure:<br>```json<br>[<br>  {<br>    "type": string,           // Required. One of: "datetime", "string", "number", "stringOptions", "categoryOptions", "arrayOptions", "stringObject", "numberObject", "boolean", "null"<br>    "column": string,         // Required. Column to filter on (see available columns below)<br>    "operator": string,       // Required. Operator based on type:<br>                              // - datetime: ">", "<", ">=", "<="<br>                              // - string: "=", "contains", "does not contain", "starts with", "ends with", "matches"<br>                              // - stringOptions: "any of", "none of"<br>                              // - categoryOptions: "any of", "none of"<br>                              // - arrayOptions: "any of", "none of", "all of"<br>                              // - number: "=", ">", "<", ">=", "<="<br>                              // - stringObject: "=", "contains", "does not contain", "starts with", "ends with", "matches", "is set", "is not set"<br>                              // - numberObject: "=", ">", "<", ">=", "<="<br>                              // - boolean: "=", "<>"<br>                              // - null: "is null", "is not null"<br>    "value": any,             // Required (except for null type). Value to compare against. Type depends on filter type<br>    "key": string             // Required only for stringObject, numberObject, and categoryOptions types when filtering on nested fields like metadata<br>  }<br>]<br>```<br><br>## Available Columns<br><br>### Core Observation Fields<br>- `id` (string) - Observation ID<br>- `type` (string) - Observation type (SPAN, GENERATION, EVENT)<br>- `name` (string) - Observation name<br>- `traceId` (string) - Associated trace ID<br>- `startTime` (datetime) - Observation start time<br>- `endTime` (datetime) - Observation end time<br>- `environment` (string) - Environment tag<br>- `level` (string) - Log level (DEBUG, DEFAULT, WARNING, ERROR)<br>- `statusMessage` (string) - Status message<br>- `version` (string) - Version tag<br>- `userId` (string) - User ID<br>- `sessionId` (string) - Session ID<br>- `isRootObservation` (boolean) - Whether the observation is a logical root. Observations marked as app roots by the SDK may retain a non-null parentObservationId.<br><br>### Trace-Related Fields<br>- `traceName` (string) - Name of the parent trace<br>- `traceTags` (arrayOptions) - Tags from the parent trace<br>- `tags` (arrayOptions) - Alias for traceTags<br><br>### Performance Metrics<br>- `latency` (number) - Latency in seconds (calculated: end_time - start_time)<br>- `timeToFirstToken` (number) - Time to first token in seconds<br>- `tokensPerSecond` (number) - Output tokens per second<br><br>### Token Usage<br>- `inputTokens` (number) - Number of input tokens<br>- `outputTokens` (number) - Number of output tokens<br>- `totalTokens` (number) - Total tokens (alias: `tokens`)<br><br>### Cost Metrics<br>- `inputCost` (number) - Input cost in USD<br>- `outputCost` (number) - Output cost in USD<br>- `totalCost` (number) - Total cost in USD<br><br>### Model Information<br>- `model` (string) - Provided model name (alias: `providedModelName`)<br>- `promptName` (string) - Associated prompt name<br>- `promptVersion` (number) - Associated prompt version<br><br>### Structured Data<br>- `input` (string) - Observation input. Supports accelerated indexed literal search with the `matches` operator.<br>- `output` (string) - Observation output. Supports accelerated indexed literal search with the `matches` operator.<br>- `metadata` (stringObject/numberObject/categoryOptions) - Metadata key-value pairs. Use `key` parameter to filter on specific metadata keys.<br><br>The `matches` operator is only supported for `input`, `output`, and stringObject `metadata` filters. It performs indexed literal search with token-boundary pruning using the events table text indexes. Case sensitivity differs by target: `input` and `output` matches are case-insensitive, while metadata value matches are case-sensitive. Unlike SQL `LIKE`, `%` and `_` are treated as literal characters. Use `contains` for legacy substring semantics where the API allows it. Any v2 `input` or `output` filter must be accompanied by at least one `=` or `matches` filter on `input` or `output`; standalone `contains`, `starts with`, `ends with`, and `does not contain` filters on these columns are rejected.<br><br>## Filter Examples<br>```json<br>[<br>  {<br>    "type": "string",<br>    "column": "type",<br>    "operator": "=",<br>    "value": "GENERATION"<br>  },<br>  {<br>    "type": "number",<br>    "column": "latency",<br>    "operator": ">=",<br>    "value": 2.5<br>  },<br>  {<br>    "type": "stringObject",<br>    "column": "metadata",<br>    "key": "environment",<br>    "operator": "=",<br>    "value": "production"<br>  },<br>  {<br>    "type": "string",<br>    "column": "output",<br>    "operator": "matches",<br>    "value": "needle"<br>  },<br>  {<br>    "type": "boolean",<br>    "column": "isRootObservation",<br>    "operator": "=",<br>    "value": true<br>  }<br>]<br>```|

#### Enumerated Values

|Parameter|Value|
|---|---|
|level|DEBUG|
|level|DEFAULT|
|level|WARNING|
|level|ERROR|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "traceId": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "projectId": "string",
      "parentObservationId": "string",
      "type": "string",
      "isRootObservation": true,
      "name": "string",
      "level": "DEBUG",
      "statusMessage": "string",
      "version": "string",
      "environment": "string",
      "bookmarked": true,
      "public": true,
      "userId": "string",
      "sessionId": "string",
      "completionStartTime": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "input": null,
      "output": null,
      "metadata": {},
      "model": "string",
      "internalModelId": "string",
      "modelParameters": null,
      "usageDetails": {
        "property1": 0,
        "property2": 0
      },
      "costDetails": {
        "property1": 0,
        "property2": 0
      },
      "totalCost": 0,
      "usagePricingTierName": "string",
      "promptId": "string",
      "promptName": "string",
      "promptVersion": 0,
      "latency": 0,
      "timeToFirstToken": 0,
      "modelId": "string",
      "inputPrice": "string",
      "outputPrice": "string",
      "totalPrice": "string",
      "traceName": "string",
      "tags": [
        "string"
      ],
      "release": "string"
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="observationsgetmany-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ObservationsV2Response](#schemaobservationsv2response)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-opentelemetry">Opentelemetry</h1>

## opentelemetry_exportTraces

<a id="opIdopentelemetry_exportTraces"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/otel/v1/traces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "resourceSpans": [
      {
        "resource": {
          "attributes": [
            {
              "key": "string",
              "value": {
                "stringValue": "string",
                "intValue": 0,
                "doubleValue": 0,
                "boolValue": true
              }
            }
          ]
        },
        "scopeSpans": [
          {
            "scope": {
              "name": "string",
              "version": "string",
              "attributes": [
                {
                  "key": "string",
                  "value": {
                    "stringValue": "string",
                    "intValue": 0,
                    "doubleValue": 0,
                    "boolValue": true
                  }
                }
              ]
            },
            "spans": [
              {
                "traceId": null,
                "spanId": null,
                "parentSpanId": null,
                "name": "string",
                "kind": 0,
                "startTimeUnixNano": null,
                "endTimeUnixNano": null,
                "attributes": [
                  {
                    "key": "string",
                    "value": {
                      "stringValue": "string",
                      "intValue": 0,
                      "doubleValue": 0,
                      "boolValue": true
                    }
                  }
                ],
                "status": null
              }
            ]
          }
        ]
      }
    ]
  }'
```

`POST /api/public/otel/v1/traces`

**OpenTelemetry Traces Ingestion Endpoint**

This endpoint implements the OTLP/HTTP specification for trace ingestion, providing native OpenTelemetry integration for Langfuse Observability.

Together with Observations API v2 and Metrics API v2, this is the only real-time write path. Other public API endpoints can delay data by about 10 minutes. Direct exporters must send `x-langfuse-ingestion-version: 4`; current Python and JS SDKs already do.

**Supported Formats:**
- Binary Protobuf: `Content-Type: application/x-protobuf`
- JSON Protobuf: `Content-Type: application/json`
- Supports gzip compression via `Content-Encoding: gzip` header

**Specification Compliance:**
- Conforms to [OTLP/HTTP Trace Export](https://opentelemetry.io/docs/specs/otlp/#otlphttp)
- Implements `ExportTraceServiceRequest` message format

**Documentation:**
- Integration guide: https://langfuse.com/integrations/native/opentelemetry
- Data model: https://langfuse.com/docs/observability/data-model

> Body parameter

```json
{
  "resourceSpans": [
    {
      "resource": {
        "attributes": [
          {
            "key": "string",
            "value": {
              "stringValue": "string",
              "intValue": 0,
              "doubleValue": 0,
              "boolValue": true
            }
          }
        ]
      },
      "scopeSpans": [
        {
          "scope": {
            "name": "string",
            "version": "string",
            "attributes": [
              {
                "key": "string",
                "value": {
                  "stringValue": "string",
                  "intValue": 0,
                  "doubleValue": 0,
                  "boolValue": true
                }
              }
            ]
          },
          "spans": [
            {
              "traceId": null,
              "spanId": null,
              "parentSpanId": null,
              "name": "string",
              "kind": 0,
              "startTimeUnixNano": null,
              "endTimeUnixNano": null,
              "attributes": [
                {
                  "key": "string",
                  "value": {
                    "stringValue": "string",
                    "intValue": 0,
                    "doubleValue": 0,
                    "boolValue": true
                  }
                }
              ],
              "status": null
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="opentelemetryexporttraces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» resourceSpans|body|[[OtelResourceSpan](#schemaotelresourcespan)]|true|Array of resource spans containing trace data as defined in the OTLP specification|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="opentelemetryexporttraces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OtelTraceResponse](#schemaoteltraceresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-organizations">Organizations</h1>

## organizations_getOrganizationMemberships

<a id="opIdorganizations_getOrganizationMemberships"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/organizations/memberships`

Get all memberships for the organization associated with the API key (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "memberships": [
    {
      "userId": "string",
      "role": "OWNER",
      "email": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsgetorganizationmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipsResponse](#schemamembershipsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_updateOrganizationMembership

<a id="opIdorganizations_updateOrganizationMembership"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/memberships \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string",
    "role": "OWNER"
  }'
```

`PUT /api/public/organizations/memberships`

Create or update a membership for the organization associated with the API key (requires organization-scoped API key)

> Body parameter

```json
{
  "userId": "string",
  "role": "OWNER"
}
```

<h3 id="organizationsupdateorganizationmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MembershipRequest](#schemamembershiprequest)|true|none|
|» userId|body|string|true|none|
|» role|body|[MembershipRole](#schemamembershiprole)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|OWNER|
|» role|ADMIN|
|» role|MEMBER|
|» role|VIEWER|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "role": "OWNER",
  "email": "string",
  "name": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsupdateorganizationmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipResponse](#schemamembershipresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_deleteOrganizationMembership

<a id="opIdorganizations_deleteOrganizationMembership"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/memberships \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string"
  }'
```

`DELETE /api/public/organizations/memberships`

Delete a membership from the organization associated with the API key (requires organization-scoped API key)

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="organizationsdeleteorganizationmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteMembershipRequest](#schemadeletemembershiprequest)|true|none|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "userId": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsdeleteorganizationmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipDeletionResponse](#schemamembershipdeletionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_getProjectMemberships

<a id="opIdorganizations_getProjectMemberships"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/projects/{projectId}/memberships`

Get all memberships for a specific project (requires organization-scoped API key)

<h3 id="organizationsgetprojectmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "memberships": [
    {
      "userId": "string",
      "role": "OWNER",
      "email": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsgetprojectmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipsResponse](#schemamembershipsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_updateProjectMembership

<a id="opIdorganizations_updateProjectMembership"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string/memberships \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string",
    "role": "OWNER"
  }'
```

`PUT /api/public/projects/{projectId}/memberships`

Create or update a membership for a specific project (requires organization-scoped API key). The user must already be a member of the organization.

> Body parameter

```json
{
  "userId": "string",
  "role": "OWNER"
}
```

<h3 id="organizationsupdateprojectmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|body|body|[MembershipRequest](#schemamembershiprequest)|true|none|
|» userId|body|string|true|none|
|» role|body|[MembershipRole](#schemamembershiprole)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|OWNER|
|» role|ADMIN|
|» role|MEMBER|
|» role|VIEWER|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "role": "OWNER",
  "email": "string",
  "name": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsupdateprojectmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipResponse](#schemamembershipresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_deleteProjectMembership

<a id="opIdorganizations_deleteProjectMembership"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string/memberships \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userId": "string"
  }'
```

`DELETE /api/public/projects/{projectId}/memberships`

Delete a membership from a specific project (requires organization-scoped API key). The user must be a member of the organization.

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="organizationsdeleteprojectmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|body|body|[DeleteMembershipRequest](#schemadeletemembershiprequest)|true|none|
|» userId|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string",
  "userId": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsdeleteprojectmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[MembershipDeletionResponse](#schemamembershipdeletionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_getOrganizationProjects

<a id="opIdorganizations_getOrganizationProjects"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/organizations/projects`

Get all projects for the organization associated with the API key (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "id": "string",
      "name": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsgetorganizationprojects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OrganizationProjectsResponse](#schemaorganizationprojectsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## organizations_getOrganizationApiKeys

<a id="opIdorganizations_getOrganizationApiKeys"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/organizations/apiKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/organizations/apiKeys`

Get all API keys for the organization associated with the API key (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "apiKeys": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "expiresAt": "1970-01-01T00:00:00Z",
      "lastUsedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "publicKey": "string",
      "displaySecretKey": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="organizationsgetorganizationapikeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OrganizationApiKeysResponse](#schemaorganizationapikeysresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-projects">Projects</h1>

## projects_get

<a id="opIdprojects_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/projects`

Get Project associated with API key (requires project-scoped API key). You can use GET /api/public/organizations/projects to get all projects with an organization-scoped key.

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "organization": {
        "id": "string",
        "name": "string"
      },
      "metadata": {},
      "retentionDays": 0
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Projects](#schemaprojects)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## projects_create

<a id="opIdprojects_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "metadata": {},
    "retention": 0
  }'
```

`POST /api/public/projects`

Create a new project (requires organization-scoped API key)

> Body parameter

```json
{
  "name": "string",
  "metadata": {},
  "retention": 0
}
```

<h3 id="projectscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|none|
|» metadata|body|object \| null|false|Optional metadata for the project|
|» retention|body|integer|true|Number of days to retain data. Must be 0 or at least 3 days. Requires data-retention entitlement for non-zero values. Optional.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "organization": {
    "id": "string",
    "name": "string"
  },
  "metadata": {},
  "retentionDays": 0
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Project](#schemaproject)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## projects_update

<a id="opIdprojects_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "metadata": {},
    "retention": 0
  }'
```

`PUT /api/public/projects/{projectId}`

Update a project by ID (requires organization-scoped API key).

> Body parameter

```json
{
  "name": "string",
  "metadata": {},
  "retention": 0
}
```

<h3 id="projectsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|body|body|object|true|none|
|» name|body|string|true|none|
|» metadata|body|object \| null|false|Optional metadata for the project|
|» retention|body|integer \| null|false|Number of days to retain data.<br>Must be 0 or at least 3 days.<br>Requires data-retention entitlement for non-zero values.<br>Optional. Will retain existing retention setting if omitted.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "organization": {
    "id": "string",
    "name": "string"
  },
  "metadata": {},
  "retentionDays": 0
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Project](#schemaproject)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## projects_delete

<a id="opIdprojects_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/projects/{projectId}`

Delete a project by ID (requires organization-scoped API key). Project deletion is processed asynchronously.

<h3 id="projectsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

> Example responses

> 202 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted||[ProjectDeletionResponse](#schemaprojectdeletionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## projects_getApiKeys

<a id="opIdprojects_getApiKeys"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string/apiKeys \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/projects/{projectId}/apiKeys`

Get all API keys for a project (requires organization-scoped API key)

<h3 id="projectsgetapikeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "apiKeys": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "expiresAt": "1970-01-01T00:00:00Z",
      "lastUsedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "publicKey": "string",
      "displaySecretKey": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectsgetapikeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApiKeyList](#schemaapikeylist)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## projects_createApiKey

<a id="opIdprojects_createApiKey"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string/apiKeys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "note": "string",
    "expiresAt": "1970-01-01T00:00:00Z",
    "publicKey": "string",
    "secretKey": "string"
  }'
```

`POST /api/public/projects/{projectId}/apiKeys`

Create a new API key for a project (requires organization-scoped API key)

> Body parameter

```json
{
  "name": "string",
  "note": "string",
  "expiresAt": "1970-01-01T00:00:00Z",
  "publicKey": "string",
  "secretKey": "string"
}
```

<h3 id="projectscreateapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|body|body|object|true|none|
|» name|body|string \| null|false|Optional name for the API key. Cannot be provided together with note, even if either value is an empty string.|
|» note|body|string \| null|false|**Deprecated.** Deprecated alias for name. Cannot be provided together with name, even if either value is an empty string.|
|» expiresAt|body|string(date-time) \| null|false|Optional expiration timestamp in ISO 8601 format. Must be in the future. Omit or set to null for a key that does not expire.|
|» publicKey|body|string \| null|false|Optional predefined public key. Must start with 'pk-lf-'. If provided, secretKey must also be provided.|
|» secretKey|body|string \| null|false|Optional predefined secret key. Must start with 'sk-lf-'. If provided, publicKey must also be provided.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "publicKey": "string",
  "secretKey": "string",
  "displaySecretKey": "string",
  "name": "string",
  "note": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectscreateapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApiKeyResponse](#schemaapikeyresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## projects_deleteApiKey

<a id="opIdprojects_deleteApiKey"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/projects/string/apiKeys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/projects/{projectId}/apiKeys/{apiKeyId}`

Delete an API key for a project (requires organization-scoped API key)

<h3 id="projectsdeleteapikey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|
|apiKeyId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="projectsdeleteapikey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ApiKeyDeletionResponse](#schemaapikeydeletionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-promptversion">PromptVersion</h1>

## promptVersion_update

<a id="opIdpromptVersion_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/prompts/string/versions/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "newLabels": [
      "string"
    ]
  }'
```

`PATCH /api/public/v2/prompts/{name}/versions/{version}`

Update labels for a specific prompt version

> Body parameter

```json
{
  "newLabels": [
    "string"
  ]
}
```

<h3 id="promptversionupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the prompt. If the prompt is in a folder (e.g., "folder/subfolder/prompt-name"), <br>the folder path must be URL encoded.|
|version|path|integer|true|Version of the prompt to update|
|body|body|object|true|none|
|» newLabels|body|[string]|true|New labels for the prompt version. Labels are unique across versions. The "latest" label is reserved and managed by Langfuse.|

> Example responses

> 200 Response

```json
{
  "type": "chat",
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {},
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="promptversionupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Prompt](#schemaprompt)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-prompts">Prompts</h1>

## prompts_get

<a id="opIdprompts_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/prompts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/prompts/{promptName}`

Get a prompt

<h3 id="promptsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promptName|path|string|true|The name of the prompt. If the prompt is in a folder (e.g., "folder/subfolder/prompt-name"), <br>the folder path must be URL encoded.|
|version|query|integer \| null|false|Version of the prompt to be retrieved.|
|label|query|string \| null|false|Label of the prompt to be retrieved. Defaults to "production" if no label or version is set.|
|resolve|query|boolean \| null|false|Resolve prompt dependencies before returning the prompt. Defaults to `true`. Set to `false` to return the raw stored prompt with dependency tags intact. This bypasses prompt caching and is intended for debugging or one-off jobs, not production runtime fetches.|

> Example responses

> 200 Response

```json
{
  "type": "chat",
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {},
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="promptsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Prompt](#schemaprompt)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## prompts_delete

<a id="opIdprompts_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/prompts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/v2/prompts/{promptName}`

Delete prompt versions. If neither version nor label is specified, all versions of the prompt are deleted.

<h3 id="promptsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|promptName|path|string|true|The name of the prompt|
|label|query|string \| null|false|Optional label to filter deletion. If specified, deletes all prompt versions that have this label.|
|version|query|integer \| null|false|Optional version to filter deletion. If specified, deletes only this specific version of the prompt.|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="promptsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## prompts_list

<a id="opIdprompts_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/prompts \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v2/prompts`

Get a list of prompt names with versions and labels

<h3 id="promptslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string \| null|false|none|
|label|query|string \| null|false|none|
|tag|query|string \| null|false|none|
|page|query|integer \| null|false|page number, starts at 1|
|limit|query|integer \| null|false|limit of items per page|
|fromUpdatedAt|query|string(date-time) \| null|false|Optional filter to only include prompt versions created/updated on or after a certain datetime (ISO 8601)|
|toUpdatedAt|query|string(date-time) \| null|false|Optional filter to only include prompt versions created/updated before a certain datetime (ISO 8601)|
|filter|query|string \| null|false|JSON string containing an array of filter conditions, combined with AND.<br>When provided, this takes precedence over name, version,<br>label, tag, fromUpdatedAt, and toUpdatedAt. An empty array applies no<br>filters. Project scoping and pagination always apply.<br><br>Each condition requires `type`, `column`, `operator`, and `value`.<br>Supported types and columns:<br>- `string`: `id`, `name`, `type`. Operators: `=`, `contains`, `does not contain`, `starts with`, `ends with`, `is not empty`.<br>- `stringOptions`: `id`, `name`, `type`. Operators: `any of`, `none of`. Value: non-empty string array.<br>- `number`: `version`. Operators: `=`, `>`, `<`, `>=`, `<=`. Value: number.<br>- `datetime`: `createdAt`, `updatedAt`. Operators: `>`, `<`, `>=`, `<=`. Value: ISO 8601 timestamp.<br>- `arrayOptions`: `labels`, `tags`. Operators: `any of`, `all of`, `none of`. Value: non-empty string array.<br>- `stringObject`: `config`. Requires an additional `key` field. Operators: `=`, `contains`, `does not contain`, `starts with`, `ends with`, `is set`, `is not set`. Value: string (use an empty string for key-presence operators).<br><br>String equality is case-sensitive. String search operators use<br>case-insensitive SQL pattern matching: `%` matches any sequence and<br>`_` matches a single character. A backslash escapes these characters;<br>JSON-escape the backslash in the filter value. Asterisks are literal.<br>For config, an empty search value is treated as `is set`.<br><br>Filters apply to prompt versions before aggregation: returned versions,<br>labels, and lastConfig reflect only matching versions.<br><br>Example: [{"type":"string","column":"name","operator":"starts with","value":"tools/"},{"type":"string","column":"name","operator":"ends with","value":"/description"}]|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "type": "chat",
      "versions": [
        0
      ],
      "labels": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "lastUpdatedAt": "1970-01-01T00:00:00Z",
      "lastConfig": null
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="promptslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PromptMetaListResponse](#schemapromptmetalistresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## prompts_create

<a id="opIdprompts_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v2/prompts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "prompt": [
      {
        "role": "string",
        "content": "string",
        "type": "chatmessage"
      }
    ],
    "config": null,
    "type": "chat",
    "labels": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "commitMessage": "string"
  }'
```

`POST /api/public/v2/prompts`

Create a new version for the prompt with the given `name`

> Body parameter

```json
{
  "name": "string",
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ],
  "config": null,
  "type": "chat",
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string"
}
```

<h3 id="promptscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePromptRequest](#schemacreatepromptrequest)|true|none|
|» *oneOf*|body|[CreateChatPromptRequest](#schemacreatechatpromptrequest)|false|none|
|» *oneOf*|body|[CreateTextPromptRequest](#schemacreatetextpromptrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "type": "chat",
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {},
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="promptscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Prompt](#schemaprompt)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-scim">Scim</h1>

## scim_getServiceProviderConfig

<a id="opIdscim_getServiceProviderConfig"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/ServiceProviderConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/scim/ServiceProviderConfig`

Get SCIM Service Provider Configuration (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "schemas": [
    "string"
  ],
  "documentationUri": "string",
  "patch": {
    "supported": true
  },
  "bulk": {
    "supported": true,
    "maxOperations": 0,
    "maxPayloadSize": 0
  },
  "filter": {
    "supported": true,
    "maxResults": 0
  },
  "changePassword": {
    "supported": true
  },
  "sort": {
    "supported": true
  },
  "etag": {
    "supported": true
  },
  "authenticationSchemes": [
    {
      "name": "string",
      "description": "string",
      "specUri": "string",
      "type": "string",
      "primary": true
    }
  ],
  "meta": {
    "resourceType": "string",
    "location": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimgetserviceproviderconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ServiceProviderConfig](#schemaserviceproviderconfig)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scim_getResourceTypes

<a id="opIdscim_getResourceTypes"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/ResourceTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/scim/ResourceTypes`

Get SCIM Resource Types (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "schemas": [
    "string"
  ],
  "totalResults": 0,
  "Resources": [
    {
      "schemas": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "endpoint": "string",
      "description": "string",
      "schema": "string",
      "schemaExtensions": [
        {
          "schema": "string",
          "required": true
        }
      ],
      "meta": {
        "resourceType": "string",
        "location": "string"
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimgetresourcetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ResourceTypesResponse](#schemaresourcetypesresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scim_getSchemas

<a id="opIdscim_getSchemas"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/Schemas \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/scim/Schemas`

Get SCIM Schemas (requires organization-scoped API key)

> Example responses

> 200 Response

```json
{
  "schemas": [
    "string"
  ],
  "totalResults": 0,
  "Resources": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "attributes": [
        null
      ],
      "meta": {
        "resourceType": "string",
        "location": "string"
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimgetschemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SchemasResponse](#schemaschemasresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scim_listUsers

<a id="opIdscim_listUsers"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/Users \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/scim/Users`

List users in the organization (requires organization-scoped API key)

<h3 id="scimlistusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string \| null|false|Filter expression (e.g. userName eq "value")|
|startIndex|query|integer \| null|false|1-based index of the first result to return (default 1)|
|count|query|integer \| null|false|Maximum number of results to return (default 100)|

> Example responses

> 200 Response

```json
{
  "schemas": [
    "string"
  ],
  "totalResults": 0,
  "startIndex": 0,
  "itemsPerPage": 0,
  "Resources": [
    {
      "schemas": [
        "string"
      ],
      "id": "string",
      "userName": "string",
      "name": {
        "formatted": "string"
      },
      "emails": [
        {
          "primary": true,
          "value": "string",
          "type": "string"
        }
      ],
      "meta": {
        "resourceType": "string",
        "created": "string",
        "lastModified": "string"
      }
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimlistusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScimUsersListResponse](#schemascimuserslistresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scim_createUser

<a id="opIdscim_createUser"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/Users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "userName": "string",
    "name": {
      "formatted": "string"
    },
    "emails": [
      {
        "primary": true,
        "value": "string",
        "type": "string"
      }
    ],
    "active": true,
    "password": "string"
  }'
```

`POST /api/public/scim/Users`

Create a new user in the organization (requires organization-scoped API key)

> Body parameter

```json
{
  "userName": "string",
  "name": {
    "formatted": "string"
  },
  "emails": [
    {
      "primary": true,
      "value": "string",
      "type": "string"
    }
  ],
  "active": true,
  "password": "string"
}
```

<h3 id="scimcreateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» userName|body|string|true|User's email address (required)|
|» name|body|[ScimName](#schemascimname)|true|User's name information|
|» emails|body|[[ScimEmail](#schemascimemail)]|false|User's email addresses|
|» active|body|boolean \| null|false|Whether the user is active|
|» password|body|string \| null|false|**Deprecated.** Ignored. Accepted only for compatibility with identity providers that always send a password on user creation (Okta sends a placeholder value even when password sync is disabled). No credential is created for the user; provisioned users authenticate via SSO or set a password themselves through the password reset flow.|

> Example responses

> 200 Response

```json
{
  "schemas": [
    "string"
  ],
  "id": "string",
  "userName": "string",
  "name": {
    "formatted": "string"
  },
  "emails": [
    {
      "primary": true,
      "value": "string",
      "type": "string"
    }
  ],
  "meta": {
    "resourceType": "string",
    "created": "string",
    "lastModified": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimcreateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScimUser](#schemascimuser)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scim_getUser

<a id="opIdscim_getUser"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/Users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/scim/Users/{userId}`

Get a specific user by ID (requires organization-scoped API key)

<h3 id="scimgetuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "schemas": [
    "string"
  ],
  "id": "string",
  "userName": "string",
  "name": {
    "formatted": "string"
  },
  "emails": [
    {
      "primary": true,
      "value": "string",
      "type": "string"
    }
  ],
  "meta": {
    "resourceType": "string",
    "created": "string",
    "lastModified": "string"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimgetuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScimUser](#schemascimuser)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scim_deleteUser

<a id="opIdscim_deleteUser"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scim/Users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/scim/Users/{userId}`

Remove a user from the organization (requires organization-scoped API key). Note that this only removes the user from the organization but does not delete the user entity itself.

<h3 id="scimdeleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scimdeleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[EmptyResponse](#schemaemptyresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-scoreconfigs">ScoreConfigs</h1>

## scoreConfigs_get

<a id="opIdscoreConfigs_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/score-configs \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/score-configs`

Get all score configs

<h3 id="scoreconfigsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|Page number, starts at 1.|
|limit|query|integer \| null|false|Limit of items per page. If you encounter api issues due to too large page sizes, try to reduce the limit|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "projectId": "string",
      "dataType": "NUMERIC",
      "isArchived": true,
      "minValue": 0,
      "maxValue": 0,
      "categories": [
        {
          "value": 0,
          "label": "string"
        }
      ],
      "description": "string"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scoreconfigsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScoreConfigs](#schemascoreconfigs)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scoreConfigs_create

<a id="opIdscoreConfigs_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/score-configs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "dataType": "NUMERIC",
    "categories": [
      {
        "value": 0,
        "label": "string"
      }
    ],
    "minValue": 0,
    "maxValue": 0,
    "description": "string"
  }'
```

`POST /api/public/score-configs`

Create a score configuration (config). Score configs are used to define the structure of scores

> Body parameter

```json
{
  "name": "string",
  "dataType": "NUMERIC",
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "minValue": 0,
  "maxValue": 0,
  "description": "string"
}
```

<h3 id="scoreconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateScoreConfigRequest](#schemacreatescoreconfigrequest)|true|none|
|» name|body|string|true|Name of the score config. Max 80 characters. Only letters, numbers, underscores, spaces, periods, parentheses, and hyphens are allowed.|
|» dataType|body|[ScoreConfigDataType](#schemascoreconfigdatatype)|true|none|
|» categories|body|[[ConfigCategory](#schemaconfigcategory)]|false|Configure custom categories for categorical scores. Pass a list of objects with `label` and `value` properties. Categories are autogenerated for boolean configs and cannot be passed|
|» minValue|body|number(double) \| null|false|Configure a minimum value for numerical scores. If not set, the minimum value defaults to -∞|
|» maxValue|body|number(double) \| null|false|Configure a maximum value for numerical scores. If not set, the maximum value defaults to +∞|
|» description|body|string \| null|false|Description is shown across the Langfuse UI and can be used to e.g. explain the config categories in detail, why a numeric range was set, or provide additional context on config name or usage|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataType|NUMERIC|
|» dataType|BOOLEAN|
|» dataType|CATEGORICAL|
|» dataType|TEXT|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "dataType": "NUMERIC",
  "isArchived": true,
  "minValue": 0,
  "maxValue": 0,
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "description": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scoreconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScoreConfig](#schemascoreconfig)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scoreConfigs_get-by-id

<a id="opIdscoreConfigs_get-by-id"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/score-configs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/score-configs/{configId}`

Get a score config

<h3 id="scoreconfigsget-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string|true|The unique langfuse identifier of a score config|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "dataType": "NUMERIC",
  "isArchived": true,
  "minValue": 0,
  "maxValue": 0,
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "description": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scoreconfigsget-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScoreConfig](#schemascoreconfig)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scoreConfigs_update

<a id="opIdscoreConfigs_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/score-configs/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "isArchived": true,
    "name": "string",
    "categories": [
      {
        "value": 0,
        "label": "string"
      }
    ],
    "minValue": 0,
    "maxValue": 0,
    "description": "string"
  }'
```

`PATCH /api/public/score-configs/{configId}`

Update a score config

> Body parameter

```json
{
  "isArchived": true,
  "name": "string",
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "minValue": 0,
  "maxValue": 0,
  "description": "string"
}
```

<h3 id="scoreconfigsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configId|path|string|true|The unique langfuse identifier of a score config|
|body|body|[UpdateScoreConfigRequest](#schemaupdatescoreconfigrequest)|true|none|
|» isArchived|body|boolean \| null|false|The status of the score config showing if it is archived or not|
|» name|body|string \| null|false|Name of the score config. Max 80 characters. Only letters, numbers, underscores, spaces, periods, parentheses, and hyphens are allowed.|
|» categories|body|[[ConfigCategory](#schemaconfigcategory)]|false|Configure custom categories for categorical scores. Pass a list of objects with `label` and `value` properties. Categories are autogenerated for boolean configs and cannot be passed|
|» minValue|body|number(double) \| null|false|Configure a minimum value for numerical scores. If not set, the minimum value defaults to -∞|
|» maxValue|body|number(double) \| null|false|Configure a maximum value for numerical scores. If not set, the maximum value defaults to +∞|
|» description|body|string \| null|false|Description is shown across the Langfuse UI and can be used to e.g. explain the config categories in detail, why a numeric range was set, or provide additional context on config name or usage|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "dataType": "NUMERIC",
  "isArchived": true,
  "minValue": 0,
  "maxValue": 0,
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "description": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scoreconfigsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ScoreConfig](#schemascoreconfig)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-scores">Scores</h1>

## scores_create

<a id="opIdscores_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    {
      "id": "string",
      "traceId": "string",
      "sessionId": "string",
      "observationId": "string",
      "datasetRunId": "string",
      "name": "string",
      "value": 0,
      "comment": "string",
      "metadata": {},
      "environment": "string",
      "queueId": "string",
      "dataType": "NUMERIC",
      "configId": "string",
      "source": "API",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]'
```

`POST /api/public/scores`

Create scores asynchronously from a list of scores. Returns 202 if all scores are accepted, or 207 with accepted/rejected counts and error messages. Do not automatically retry a 207 batch. The generated reference shows only 200; the endpoint returns 202 or 207.

> Body parameter

```json
[
  {
    "id": "string",
    "traceId": "string",
    "sessionId": "string",
    "observationId": "string",
    "datasetRunId": "string",
    "name": "string",
    "value": 0,
    "comment": "string",
    "metadata": {},
    "environment": "string",
    "queueId": "string",
    "dataType": "NUMERIC",
    "configId": "string",
    "source": "API",
    "timestamp": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="scorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateScoresRequest](#schemacreatescoresrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "accepted": 0,
  "rejected": 0,
  "errors": [
    {
      "message": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreateScoresResponse](#schemacreatescoresresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scores_delete

<a id="opIdscores_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/scores/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/scores/{scoreId}`

Delete a score (supports both trace and session scores)

<h3 id="scoresdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scoreId|path|string|true|The unique langfuse identifier of a score|

> Example responses

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scoresdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## scores_getMany

<a id="opIdscores_getMany"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/v3/scores \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/v3/scores`

Get a list of scores with a polymorphic `value` field (v3).

The `value` field type depends on `dataType`:
- `NUMERIC` → number
- `BOOLEAN` → boolean
- `CATEGORICAL`, `TEXT`, `CORRECTION` → string

The response always includes the core fields: id, projectId, name,
value, dataType, source, timestamp, environment, createdAt, updatedAt.

Additional field groups can be requested via the `fields` parameter:
- `details` — adds comment, configId, metadata
- `subject` — adds the subject object describing the entity the score
  is attached to: kind (trace, observation, session, or experiment),
  id, and traceId for observation-level scores
- `annotation` — adds authorUserId, queueId

Unknown group names return HTTP 400.

<h3 id="scoresgetmany-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer \| null|false|Number of items per page. Maximum 100, default 50. Requests with a limit greater than 100 return HTTP 400.|
|cursor|query|string \| null|false|URL-safe base64 (base64url) cursor for pagination. Use the cursor from the previous response to get the next page. Absent on the final page.|
|fields|query|string \| null|false|Comma-separated field groups to include in addition to the always-returned core fields. Allowed: details, subject, annotation — see the endpoint description for the fields each group adds. Unknown names return HTTP 400.|
|id|query|string \| null|false|Comma-separated list of score IDs to filter by (OR within, AND across filters).|
|name|query|string \| null|false|Comma-separated list of score names to filter by.|
|source|query|string \| null|false|Comma-separated list of score sources to filter by (e.g. API, ANNOTATION, EVAL). Case-insensitive — `api` and `API` are equivalent.|
|dataType|query|string \| null|false|Comma-separated list of data types to filter by (NUMERIC, BOOLEAN, CATEGORICAL, TEXT, CORRECTION). Case-insensitive — `numeric` and `NUMERIC` are equivalent. Must be a single value when used with value, valueMin, or valueMax; otherwise the request returns HTTP 400. Must be NUMERIC when used with valueMin or valueMax.|
|environment|query|string \| null|false|Comma-separated list of environments to filter by.|
|configId|query|string \| null|false|Comma-separated list of score config IDs to filter by.|
|queueId|query|string \| null|false|Comma-separated list of annotation queue IDs to filter by.|
|authorUserId|query|string \| null|false|Comma-separated list of author user IDs to filter by.|
|value|query|string \| null|false|Comma-separated list of exact values to filter by. Requires a single dataType from NUMERIC, BOOLEAN, or CATEGORICAL; any other dataType, multiple dataTypes, or omitting dataType returns HTTP 400. For BOOLEAN, each value must be "true" or "false"; for NUMERIC, each value must be a finite number. Otherwise the request returns HTTP 400.|
|valueMin|query|number(double) \| null|false|Inclusive lower bound on the numeric value. Requires dataType=NUMERIC as a single value; otherwise the request returns HTTP 400.|
|valueMax|query|number(double) \| null|false|Inclusive upper bound on the numeric value. Requires dataType=NUMERIC as a single value; otherwise the request returns HTTP 400.|
|traceId|query|string \| null|false|Comma-separated list of trace IDs to filter by. Mutually exclusive with sessionId, experimentId. May be combined with observationId to scope the observation lookup to a specific trace.|
|sessionId|query|string \| null|false|Comma-separated list of session IDs to filter by. Mutually exclusive with traceId, observationId, experimentId.|
|observationId|query|string \| null|false|Comma-separated list of observation IDs to filter by. Requires traceId to be specified, because observation IDs are scoped to a trace. Mutually exclusive with sessionId, experimentId. Returns HTTP 400 when used without traceId.|
|experimentId|query|string \| null|false|Comma-separated list of dataset run IDs (experiment IDs) to filter by. Mutually exclusive with traceId, sessionId, observationId.|
|fromTimestamp|query|string(date-time) \| null|false|Inclusive lower bound on the score timestamp.|
|toTimestamp|query|string(date-time) \| null|false|Exclusive upper bound on the score timestamp.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "dataType": "NUMERIC",
      "id": "string",
      "projectId": "string",
      "name": "string",
      "source": "ANNOTATION",
      "timestamp": "1970-01-01T00:00:00Z",
      "environment": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "comment": "string",
      "configId": "string",
      "metadata": {},
      "authorUserId": "string",
      "queueId": "string",
      "subject": {
        "kind": "trace",
        "id": "string"
      },
      "value": 0
    }
  ],
  "meta": {
    "cursor": "string",
    "limit": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="scoresgetmany-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[GetScoresV3Response](#schemagetscoresv3response)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-skills">Skills</h1>

## skills_list

<a id="opIdskills_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/skills \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/skills`

List skills with metadata and timestamps from their latest version, shared tags, and the version assigned to production when present.

<h3 id="skillslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string \| null|false|Filter by exact skill name.|
|search|query|string \| null|false|Case-insensitive search across skill names and latest-version descriptions.|
|tag|query|string \| null|false|Filter by a shared skill tag.|
|page|query|integer \| null|false|none|
|limit|query|integer \| null|false|none|
|fromUpdatedAt|query|string(date-time) \| null|false|Include skills whose latest version was updated at or after this timestamp.|
|toUpdatedAt|query|string(date-time) \| null|false|Include skills whose latest version was updated before this timestamp.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "tags": [
        "string"
      ],
      "latestVersion": 0,
      "latestVersionCreatedAt": "1970-01-01T00:00:00Z",
      "latestVersionLastUpdatedAt": "1970-01-01T00:00:00Z",
      "productionVersion": 0
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0,
    "hasNextPage": true
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SkillMetaListResponse](#schemaskillmetalistresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## skills_createVersion

<a id="opIdskills_createVersion"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/skills \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "files": [
      {
        "path": "string",
        "content": "string"
      }
    ],
    "commitMessage": "string"
  }'
```

`POST /api/public/skills`

Create skill version

> Body parameter

```json
{
  "files": [
    {
      "path": "string",
      "content": "string"
    }
  ],
  "commitMessage": "string"
}
```

<h3 id="skillscreateversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSkillVersionRequest](#schemacreateskillversionrequest)|true|none|
|» files|body|[[SkillVersionFileCreateInput](#schemaskillversionfilecreateinput)]|true|none|
|» commitMessage|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "createdBy": "string",
  "name": "string",
  "description": "string",
  "frontmatter": null,
  "version": 0,
  "tags": [
    "string"
  ],
  "labels": [
    "string"
  ],
  "commitMessage": "string",
  "files": [
    {
      "id": "string",
      "path": "string",
      "blobId": "string",
      "sha256Hash": "string",
      "contentType": "string",
      "contentLength": 0,
      "content": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillscreateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[SkillVersion](#schemaskillversion)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## skills_get

<a id="opIdskills_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/skills/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/skills/{skillName}`

Resolve a skill's metadata and file manifest by version or label. Defaults to the production label. Set includeContent to return file contents inline, or use each file's sha256Hash with getFileContents.

<h3 id="skillsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skillName|path|string|true|none|
|version|query|integer \| null|false|none|
|label|query|string \| null|false|none|
|includeContent|query|boolean \| null|false|Include UTF-8 text content in each file. Defaults to false.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "createdBy": "string",
  "name": "string",
  "description": "string",
  "frontmatter": null,
  "version": 0,
  "tags": [
    "string"
  ],
  "labels": [
    "string"
  ],
  "commitMessage": "string",
  "files": [
    {
      "id": "string",
      "path": "string",
      "blobId": "string",
      "sha256Hash": "string",
      "contentType": "string",
      "contentLength": 0,
      "content": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SkillVersion](#schemaskillversion)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## skills_update

<a id="opIdskills_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/skills/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "tags": [
      "string"
    ]
  }'
```

`PATCH /api/public/skills/{skillName}`

Replace the shared tags across all versions of a skill. An empty tags list clears all tags. Returns the latest skill version with the updated tags.

> Body parameter

```json
{
  "tags": [
    "string"
  ]
}
```

<h3 id="skillsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skillName|path|string|true|none|
|body|body|[UpdateSkillRequest](#schemaupdateskillrequest)|true|none|
|» tags|body|[string]|true|The complete set of tags to apply to every version of the skill. Pass an empty list to clear all tags.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "createdBy": "string",
  "name": "string",
  "description": "string",
  "frontmatter": null,
  "version": 0,
  "tags": [
    "string"
  ],
  "labels": [
    "string"
  ],
  "commitMessage": "string",
  "files": [
    {
      "id": "string",
      "path": "string",
      "blobId": "string",
      "sha256Hash": "string",
      "contentType": "string",
      "contentLength": 0,
      "content": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SkillVersion](#schemaskillversion)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## skills_getFileContents

<a id="opIdskills_getFileContents"></a>

> Code samples

```bash
curl 'https://cloud.langfuse.com/api/public/skills/files/content?sha256Hashes=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/skills/files/content`

Read a batch of text contents by canonical base64-encoded SHA-256 hashes.

<h3 id="skillsgetfilecontents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sha256Hashes|query|string|true|Comma-separated list of one to 50 canonical base64-encoded SHA-256 hashes from skill file manifests. URL-encode the value, including +, /, and = characters.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "sha256Hash": "string",
      "content": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillsgetfilecontents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SkillFileContentsResponse](#schemaskillfilecontentsresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## skills_deleteVersion

<a id="opIdskills_deleteVersion"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/skills/string/versions/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/skills/{skillName}/versions/{skillVersion}`

Delete one immutable skill version. Unreferenced blobs are retained for asynchronous cleanup.

<h3 id="skillsdeleteversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skillName|path|string|true|none|
|skillVersion|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": true
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillsdeleteversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteSkillVersionResponse](#schemadeleteskillversionresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## skills_setLabels

<a id="opIdskills_setLabels"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/skills/string/versions/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "labels": [
      "string"
    ]
  }'
```

`PATCH /api/public/skills/{skillName}/versions/{skillVersion}`

Replace the labels on a skill version and atomically move them from other versions.

> Body parameter

```json
{
  "labels": [
    "string"
  ]
}
```

<h3 id="skillssetlabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|skillName|path|string|true|none|
|skillVersion|path|integer|true|none|
|body|body|[UpdateSkillLabelsRequest](#schemaupdateskilllabelsrequest)|true|none|
|» labels|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "createdBy": "string",
  "name": "string",
  "description": "string",
  "frontmatter": null,
  "version": 0,
  "tags": [
    "string"
  ],
  "labels": [
    "string"
  ],
  "commitMessage": "string",
  "files": [
    {
      "id": "string",
      "path": "string",
      "blobId": "string",
      "sha256Hash": "string",
      "contentType": "string",
      "contentLength": 0,
      "content": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="skillssetlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SkillVersion](#schemaskillversion)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-trace">Trace</h1>

## trace_delete

<a id="opIdtrace_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/traces/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/traces/{traceId}`

Delete a specific trace

<h3 id="tracedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|traceId|path|string|true|The unique langfuse identifier of the trace to delete|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="tracedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteTraceResponse](#schemadeletetraceresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## trace_deleteMultiple

<a id="opIdtrace_deleteMultiple"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/traces \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "traceIds": [
      "string"
    ]
  }'
```

`DELETE /api/public/traces`

Delete multiple traces

> Body parameter

```json
{
  "traceIds": [
    "string"
  ]
}
```

<h3 id="tracedeletemultiple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» traceIds|body|[string]|true|List of trace IDs to delete|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

<h3 id="tracedeletemultiple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DeleteTraceResponse](#schemadeletetraceresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-unstabledashboardwidgets">UnstableDashboardWidgets</h1>

## unstable_dashboardWidgets_list

<a id="opIdunstable_dashboardWidgets_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboard-widgets \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/dashboard-widgets`

List dashboard widgets in the project, ordered by most recently
updated first.

Responses may include legacy `traces` widgets created before this
API existed. New widgets cannot be created with `view: traces`.

<h3 id="unstabledashboardwidgetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|1-based page number. Defaults to `1`.|
|limit|query|integer \| null|false|Maximum number of items per page. Defaults to `50`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "description": "string",
      "view": "observations",
      "dimensions": [
        {
          "field": "string"
        }
      ],
      "metrics": [
        {
          "measure": "string",
          "agg": "sum"
        }
      ],
      "filters": [
        {
          "column": "string",
          "operator": "string",
          "type": "string",
          "value": null,
          "key": "string"
        }
      ],
      "chartType": "LINE_TIME_SERIES",
      "chartConfig": {
        "type": "LINE_TIME_SERIES",
        "row_limit": 0,
        "show_value_labels": true,
        "bins": 0,
        "defaultSort": {
          "column": "string",
          "order": "ASC"
        }
      }
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardwidgetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardWidgetList](#schemaunstabledashboardwidgetlist)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboardWidgets_create

<a id="opIdunstable_dashboardWidgets_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboard-widgets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string",
    "view": "observations",
    "dimensions": [
      {
        "field": "string"
      }
    ],
    "metrics": [
      {
        "measure": "string",
        "agg": "sum"
      }
    ],
    "filters": [
      {
        "column": "string",
        "operator": "string",
        "type": "string",
        "value": null,
        "key": "string"
      }
    ],
    "chartType": "LINE_TIME_SERIES",
    "chartConfig": {
      "type": "LINE_TIME_SERIES",
      "row_limit": 0,
      "show_value_labels": true,
      "bins": 0,
      "defaultSort": {
        "column": "string",
        "order": "ASC"
      }
    }
  }'
```

`POST /api/public/unstable/dashboard-widgets`

Create a dashboard widget (a standalone chart definition you place on
any dashboard).

This endpoint creates the widget only; place it on a dashboard via
`POST /dashboards/{dashboardId}/placements`.

Supported views are `observations`, `scores-numeric`, `scores-boolean`, and `scores-categorical`.
The legacy `traces` view is not supported by this unstable API.
Widgets are created as v2 internally.

`chartConfig` is optional and defaults to the plain config for
`chartType`; when `chartConfig.type` is given it must match
`chartType`.

Unstable API note:
- This surface may evolve while dashboard/widget APIs are being finalized.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

<h3 id="unstabledashboardwidgetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[unstableCreateDashboardWidgetRequest](#schemaunstablecreatedashboardwidgetrequest)|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|Defaults to an empty string.|
|» view|body|[unstableDashboardWidgetView](#schemaunstabledashboardwidgetview)|true|none|
|» dimensions|body|[[unstableDashboardWidgetDimension](#schemaunstabledashboardwidgetdimension)]|true|none|
|» metrics|body|[[unstableDashboardWidgetMetric](#schemaunstabledashboardwidgetmetric)]|true|none|
|» filters|body|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|true|none|
|» chartType|body|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|true|none|
|» chartConfig|body|[unstableDashboardWidgetChartConfigInput](#schemaunstabledashboardwidgetchartconfiginput)|false|Defaults to the plain config for `chartType`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» view|observations|
|» view|scores-numeric|
|» view|scores-boolean|
|» view|scores-categorical|
|» chartType|LINE_TIME_SERIES|
|» chartType|AREA_TIME_SERIES|
|» chartType|BAR_TIME_SERIES|
|» chartType|HORIZONTAL_BAR|
|» chartType|VERTICAL_BAR|
|» chartType|PIE|
|» chartType|NUMBER|
|» chartType|HISTOGRAM|
|» chartType|PIVOT_TABLE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardwidgetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardWidget](#schemaunstabledashboardwidget)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboardWidgets_get

<a id="opIdunstable_dashboardWidgets_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboard-widgets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/dashboard-widgets/{widgetId}`

Get a dashboard widget by id.

The response may use `view: traces` for legacy widgets.

<h3 id="unstabledashboardwidgetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|widgetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardwidgetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardWidget](#schemaunstabledashboardwidget)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboardWidgets_delete

<a id="opIdunstable_dashboardWidgets_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboard-widgets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/unstable/dashboard-widgets/{widgetId}`

Delete a dashboard widget.

The API returns `409` while the widget is still placed on a dashboard.
Remove those placements first.

<h3 id="unstabledashboardwidgetsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|widgetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 409 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardwidgetsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDeleteDashboardWidgetResponse](#schemaunstabledeletedashboardwidgetresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|409|Conflict||[unstablePublicApiError](#schemaunstablepublicapierror)|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboardWidgets_update

<a id="opIdunstable_dashboardWidgets_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboard-widgets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string",
    "view": "observations",
    "dimensions": [
      {
        "field": "string"
      }
    ],
    "metrics": [
      {
        "measure": "string",
        "agg": "sum"
      }
    ],
    "filters": [
      {
        "column": "string",
        "operator": "string",
        "type": "string",
        "value": null,
        "key": "string"
      }
    ],
    "chartType": "LINE_TIME_SERIES",
    "chartConfig": {
      "type": "LINE_TIME_SERIES",
      "row_limit": 0,
      "show_value_labels": true,
      "bins": 0,
      "defaultSort": {
        "column": "string",
        "order": "ASC"
      }
    }
  }'
```

`PATCH /api/public/unstable/dashboard-widgets/{widgetId}`

Update a dashboard widget.

All fields are optional; at least one field is required.
Changing `chartType` without sending `chartConfig` resets the config
to the new chart type's defaults. When `chartConfig.type` is given
it must match the widget's (possibly updated) `chartType`.

`view` cannot be changed to the legacy `traces` value. Existing
`traces` widgets may be updated on other fields.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

<h3 id="unstabledashboardwidgetsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|widgetId|path|string|true|none|
|body|body|[unstableUpdateDashboardWidgetRequest](#schemaunstableupdatedashboardwidgetrequest)|true|none|
|» name|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» view|body|[unstableDashboardWidgetView](#schemaunstabledashboardwidgetview)|false|none|
|» dimensions|body|[[unstableDashboardWidgetDimension](#schemaunstabledashboardwidgetdimension)]|false|none|
|» metrics|body|[[unstableDashboardWidgetMetric](#schemaunstabledashboardwidgetmetric)]|false|none|
|» filters|body|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|false|none|
|» chartType|body|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|false|none|
|» chartConfig|body|[unstableDashboardWidgetChartConfigInput](#schemaunstabledashboardwidgetchartconfiginput)|false|Input-side chart config. `type` is optional and defaults to the<br>widget's `chartType`; when given it must match.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» view|observations|
|» view|scores-numeric|
|» view|scores-boolean|
|» view|scores-categorical|
|» chartType|LINE_TIME_SERIES|
|» chartType|AREA_TIME_SERIES|
|» chartType|BAR_TIME_SERIES|
|» chartType|HORIZONTAL_BAR|
|» chartType|VERTICAL_BAR|
|» chartType|PIE|
|» chartType|NUMBER|
|» chartType|HISTOGRAM|
|» chartType|PIVOT_TABLE|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardwidgetsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardWidget](#schemaunstabledashboardwidget)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-unstabledashboards">UnstableDashboards</h1>

## unstable_dashboards_list

<a id="opIdunstable_dashboards_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/dashboards`

List dashboards in the project, ordered by most recently updated
first.

<h3 id="unstabledashboardslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer \| null|false|1-based page number. Defaults to `1`.|
|limit|query|integer \| null|false|Maximum number of items per page. Defaults to `50`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "description": "string",
      "definition": {
        "widgets": [
          {
            "type": "widget",
            "id": "string",
            "widgetId": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
          }
        ]
      },
      "filters": [
        {
          "column": "string",
          "operator": "string",
          "type": "string",
          "value": null,
          "key": "string"
        }
      ]
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardList](#schemaunstabledashboardlist)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_create

<a id="opIdunstable_dashboards_create"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string",
    "definition": {
      "widgets": [
        {
          "type": "widget",
          "id": "string",
          "widgetId": "string",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ]
    },
    "filters": [
      {
        "column": "string",
        "operator": "string",
        "type": "string",
        "value": null,
        "key": "string"
      }
    ]
  }'
```

`POST /api/public/unstable/dashboards`

Create a dashboard.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

<h3 id="unstabledashboardscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[unstableCreateDashboardRequest](#schemaunstablecreatedashboardrequest)|true|none|
|» name|body|string|true|none|
|» description|body|string \| null|false|none|
|» definition|body|[unstableDashboardDefinition](#schemaunstabledashboarddefinition)|false|none|
|» filters|body|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboard](#schemaunstabledashboard)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_get

<a id="opIdunstable_dashboards_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/dashboards/{dashboardId}`

Get a dashboard by id.

<h3 id="unstabledashboardsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboard](#schemaunstabledashboard)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_delete

<a id="opIdunstable_dashboards_delete"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/unstable/dashboards/{dashboardId}`

Delete a dashboard.

<h3 id="unstabledashboardsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDeleteDashboardResponse](#schemaunstabledeletedashboardresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_update

<a id="opIdunstable_dashboards_update"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "description": "string",
    "definition": {
      "widgets": [
        {
          "type": "widget",
          "id": "string",
          "widgetId": "string",
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ]
    },
    "filters": [
      {
        "column": "string",
        "operator": "string",
        "type": "string",
        "value": null,
        "key": "string"
      }
    ]
  }'
```

`PATCH /api/public/unstable/dashboards/{dashboardId}`

Update a dashboard's name, description, definition, or filters.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

<h3 id="unstabledashboardsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|
|body|body|[unstableUpdateDashboardRequest](#schemaunstableupdatedashboardrequest)|true|none|
|» name|body|string \| null|false|none|
|» description|body|string \| null|false|none|
|» definition|body|[unstableDashboardDefinition](#schemaunstabledashboarddefinition)|false|none|
|» filters|body|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboard](#schemaunstabledashboard)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_addPlacement

<a id="opIdunstable_dashboards_addPlacement"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards/string/placements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "widget",
    "id": "string",
    "widgetId": "string",
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  }'
```

`POST /api/public/unstable/dashboards/{dashboardId}/placements`

Add a placement to a dashboard grid (see `DashboardPlacement` for
grid semantics).

`id` and the position fields are optional: when omitted, the
placement gets a server-generated id and is appended below all
existing tiles as a 6x6 tile. Returns the created placement.

The referenced widget must exist in the same project or be a
Langfuse-managed widget. The API returns `409` if a placement with
the same `id` already exists on the dashboard.

> Body parameter

```json
{
  "type": "widget",
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

<h3 id="unstabledashboardsaddplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|
|body|body|[unstableCreateDashboardPlacementRequest](#schemaunstablecreatedashboardplacementrequest)|true|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» id|body|string \| null|false|Server-generated when omitted.|
|» widgetId|body|string|true|none|
|» x|body|integer \| null|false|Grid column (12-column grid). Defaults to `0`.|
|» y|body|integer \| null|false|Grid row. Defaults to the first row below all existing tiles.|
|» width|body|integer \| null|false|Width in grid columns. Defaults to `6`.|
|» height|body|integer \| null|false|Height in grid rows. Defaults to `6`.|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» id|body|string \| null|false|Server-generated when omitted.|
|» presetId|body|string|true|none|
|» x|body|integer \| null|false|Grid column (12-column grid). Defaults to `0`.|
|» y|body|integer \| null|false|Grid row. Defaults to the first row below all existing tiles.|
|» width|body|integer \| null|false|Width in grid columns. Defaults to `6`.|
|» height|body|integer \| null|false|Height in grid rows. Defaults to `6`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|widget|
|» type|preset|

> Example responses

> 200 Response

```json
{
  "type": "widget",
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 409 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardsaddplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardPlacement](#schemaunstabledashboardplacement)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|409|Conflict||[unstablePublicApiError](#schemaunstablepublicapierror)|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_deletePlacement

<a id="opIdunstable_dashboards_deletePlacement"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards/string/placements/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/public/unstable/dashboards/{dashboardId}/placements/{placementId}`

Remove a placement from a dashboard grid without deleting the referenced widget.

<h3 id="unstabledashboardsdeleteplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|
|placementId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardsdeleteplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDeleteDashboardPlacementResponse](#schemaunstabledeletedashboardplacementresponse)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_dashboards_updatePlacement

<a id="opIdunstable_dashboards_updatePlacement"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/dashboards/string/placements/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0
  }'
```

`PATCH /api/public/unstable/dashboards/{dashboardId}/placements/{placementId}`

Move or resize a placement. All fields are optional; at least one is
required. Omitted fields keep their current value. The placement's
content (widget/preset reference) and id cannot change — delete and
re-add the placement to swap content. Returns the updated placement.

> Body parameter

```json
{
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

<h3 id="unstabledashboardsupdateplacement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardId|path|string|true|none|
|placementId|path|string|true|none|
|body|body|[unstableUpdateDashboardPlacementRequest](#schemaunstableupdatedashboardplacementrequest)|true|none|
|» x|body|integer \| null|false|Grid column (12-column grid).|
|» y|body|integer \| null|false|Grid row.|
|» width|body|integer \| null|false|Width in grid columns.|
|» height|body|integer \| null|false|Height in grid rows.|

> Example responses

> 200 Response

```json
{
  "type": "widget",
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabledashboardsupdateplacement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableDashboardPlacement](#schemaunstabledashboardplacement)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

<h1 id="server-unstabletopics">UnstableTopics</h1>

## unstable_topics_listFacets

<a id="opIdunstable_topics_listFacets"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/topic-facets \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/topic-facets`

Unstable: Topics is in closed beta. The shape may change without notice.

List the project's Topics facets. Only active facets (attached to the
project's Topics rule, or all facets if the project has no rule) are
returned unless `filter` contains an `active` condition.

`filter` is a JSON array of filter conditions combined with AND.
String matching is case-insensitive. Columns: `id` (stringOptions),
`name` (string, stringOptions), `description` (string), `isBuiltIn`
(boolean), `active` (boolean).

<h3 id="unstabletopicslistfacets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string \| null|false|JSON array of filter conditions, for example `[{"type":"string","column":"name","operator":"contains","value":"issue"}]`.|
|page|query|integer \| null|false|1-based page number. Defaults to `1`.|
|limit|query|integer \| null|false|Maximum number of items per page. Defaults to `50`, at most `100`.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "isBuiltIn": true,
      "active": true,
      "version": 0,
      "prompt": "string",
      "publishedRun": {
        "id": "string",
        "completedAt": "1970-01-01T00:00:00Z",
        "topicCount": 0
      }
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabletopicslistfacets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableTopicFacetList](#schemaunstabletopicfacetlist)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_topics_getFacet

<a id="opIdunstable_topics_getFacet"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/topic-facets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/topic-facets/{facetId}`

Unstable: Topics is in closed beta. The shape may change without notice.

Get one Topics facet by id, including inactive facets.

<h3 id="unstabletopicsgetfacet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|facetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "isBuiltIn": true,
  "active": true,
  "version": 0,
  "prompt": "string",
  "publishedRun": {
    "id": "string",
    "completedAt": "1970-01-01T00:00:00Z",
    "topicCount": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabletopicsgetfacet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableTopicFacet](#schemaunstabletopicfacet)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_topics_list

<a id="opIdunstable_topics_list"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/topics \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/topics`

Unstable: Topics is in closed beta. The shape may change without notice.

List the topics of each active facet's current published map, with
the number of traces currently assigned to each topic in the window.
Retired topics are not listed. `facets` holds per-facet trace counts
by topic status.

The window applies to the trace start time. It defaults to the last
7 days and can span at most 93 days.

`filter` is a JSON array of filter conditions combined with AND.
String matching is case-insensitive. Columns: `facetId`
(stringOptions), `facetName` (string, stringOptions), `id`
(stringOptions), `name` (string, stringOptions). Facet conditions also
restrict `facets`.

<h3 id="unstabletopicslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromTimestamp|query|string(date-time) \| null|false|Start of the window (trace start time, inclusive). Defaults to 7 days before `toTimestamp`.|
|toTimestamp|query|string(date-time) \| null|false|End of the window (trace start time, exclusive). Defaults to now.|
|filter|query|string \| null|false|JSON array of filter conditions, for example `[{"type":"stringOptions","column":"facetName","operator":"any of","value":["Issues"]}]`.|
|orderBy|query|[unstableTopicsOrderBy](#schemaunstabletopicsorderby)|false|Defaults to `traceCount.desc`.|
|page|query|integer \| null|false|1-based page number. Defaults to `1`.|
|limit|query|integer \| null|false|Maximum number of items per page. Defaults to `50`, at most `100`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|orderBy|traceCount.desc|
|orderBy|traceCount.asc|
|orderBy|name.asc|
|orderBy|name.desc|

> Example responses

> 200 Response

```json
{
  "window": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z"
  },
  "data": [
    {
      "id": "string",
      "versionId": "string",
      "name": "string",
      "description": "string",
      "facet": {
        "id": "string",
        "name": "string",
        "version": 0
      },
      "runId": "string",
      "traceCount": 0
    }
  ],
  "facets": [
    {
      "facet": {
        "id": "string",
        "name": "string",
        "version": 0
      },
      "publishedRunId": "string",
      "counts": {
        "assigned": 0,
        "outlier": 0,
        "awaitingMap": 0,
        "notApplicable": 0,
        "insufficientInput": 0
      }
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabletopicslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableTopicList](#schemaunstabletopiclist)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

## unstable_topics_get

<a id="opIdunstable_topics_get"></a>

> Code samples

```bash
curl https://cloud.langfuse.com/api/public/unstable/topics/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/public/unstable/topics/{topicId}`

Unstable: Topics is in closed beta. The shape may change without notice.

Get one topic by its stable id. Topics on the current map are always
found. A retired topic is found while traces in the window are still
assigned to it, with `inCurrentMap: false`.

<h3 id="unstabletopicsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topicId|path|string|true|none|
|fromTimestamp|query|string(date-time) \| null|false|Start of the window used for `traceCount`. Defaults to 7 days before `toTimestamp`.|
|toTimestamp|query|string(date-time) \| null|false|End of the window used for `traceCount`. Defaults to now.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "versionId": "string",
  "name": "string",
  "description": "string",
  "facet": {
    "id": "string",
    "name": "string",
    "version": 0
  },
  "runId": "string",
  "traceCount": 0,
  "inCurrentMap": true,
  "window": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
null
```

> 401 Response

```json
null
```

> 403 Response

```json
null
```

> 404 Response

```json
null
```

> 405 Response

```json
null
```

> 429 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

> 500 Response

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

<h3 id="unstabletopicsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[unstableTopicWithStatus](#schemaunstabletopicwithstatus)|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|405|Method Not Allowed||Inline|
|429|Too Many Requests||[unstablePublicApiError](#schemaunstablepublicapierror)|
|500|Internal Server Error||[unstablePublicApiError](#schemaunstablepublicapierror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth
</aside>

# Schemas

<h2 id="tocS_AnnotationQueueStatus">AnnotationQueueStatus</h2>
<!-- backwards compatibility -->
<a id="schemaannotationqueuestatus"></a>
<a id="schema_AnnotationQueueStatus"></a>
<a id="tocSannotationqueuestatus"></a>
<a id="tocsannotationqueuestatus"></a>

```json
"PENDING"
```

<h2 id="tocS_AnnotationQueueObjectType">AnnotationQueueObjectType</h2>
<!-- backwards compatibility -->
<a id="schemaannotationqueueobjecttype"></a>
<a id="schema_AnnotationQueueObjectType"></a>
<a id="tocSannotationqueueobjecttype"></a>
<a id="tocsannotationqueueobjecttype"></a>

```json
"TRACE"
```

<h2 id="tocS_AnnotationQueue">AnnotationQueue</h2>
<!-- backwards compatibility -->
<a id="schemaannotationqueue"></a>
<a id="schema_AnnotationQueue"></a>
<a id="tocSannotationqueue"></a>
<a id="tocsannotationqueue"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "scoreConfigIds": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|scoreConfigIds|[string]|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_AnnotationQueueItem">AnnotationQueueItem</h2>
<!-- backwards compatibility -->
<a id="schemaannotationqueueitem"></a>
<a id="schema_AnnotationQueueItem"></a>
<a id="tocSannotationqueueitem"></a>
<a id="tocsannotationqueueitem"></a>

```json
{
  "id": "string",
  "queueId": "string",
  "objectId": "string",
  "objectType": "TRACE",
  "status": "PENDING",
  "completedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|queueId|string|true|none|none|
|objectId|string|true|none|none|
|objectType|[AnnotationQueueObjectType](#schemaannotationqueueobjecttype)|true|none|none|
|status|[AnnotationQueueStatus](#schemaannotationqueuestatus)|true|none|none|
|completedAt|string(date-time) \| null|false|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|objectType|TRACE|
|objectType|OBSERVATION|
|objectType|SESSION|
|status|PENDING|
|status|COMPLETED|

<h2 id="tocS_PaginatedAnnotationQueues">PaginatedAnnotationQueues</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedannotationqueues"></a>
<a id="schema_PaginatedAnnotationQueues"></a>
<a id="tocSpaginatedannotationqueues"></a>
<a id="tocspaginatedannotationqueues"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "scoreConfigIds": [
        "string"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AnnotationQueue](#schemaannotationqueue)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_PaginatedAnnotationQueueItems">PaginatedAnnotationQueueItems</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedannotationqueueitems"></a>
<a id="schema_PaginatedAnnotationQueueItems"></a>
<a id="tocSpaginatedannotationqueueitems"></a>
<a id="tocspaginatedannotationqueueitems"></a>

```json
{
  "data": [
    {
      "id": "string",
      "queueId": "string",
      "objectId": "string",
      "objectType": "TRACE",
      "status": "PENDING",
      "completedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AnnotationQueueItem](#schemaannotationqueueitem)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_CreateAnnotationQueueRequest">CreateAnnotationQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateannotationqueuerequest"></a>
<a id="schema_CreateAnnotationQueueRequest"></a>
<a id="tocScreateannotationqueuerequest"></a>
<a id="tocscreateannotationqueuerequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "scoreConfigIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|scoreConfigIds|[string]|true|none|none|

<h2 id="tocS_CreateAnnotationQueueItemRequest">CreateAnnotationQueueItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateannotationqueueitemrequest"></a>
<a id="schema_CreateAnnotationQueueItemRequest"></a>
<a id="tocScreateannotationqueueitemrequest"></a>
<a id="tocscreateannotationqueueitemrequest"></a>

```json
{
  "objectId": "string",
  "objectType": "TRACE",
  "status": "PENDING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectId|string|true|none|none|
|objectType|[AnnotationQueueObjectType](#schemaannotationqueueobjecttype)|true|none|none|
|status|[AnnotationQueueStatus](#schemaannotationqueuestatus)|false|none|Defaults to PENDING for new queue items|

#### Enumerated Values

|Property|Value|
|---|---|
|objectType|TRACE|
|objectType|OBSERVATION|
|objectType|SESSION|
|status|PENDING|
|status|COMPLETED|

<h2 id="tocS_UpdateAnnotationQueueItemRequest">UpdateAnnotationQueueItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateannotationqueueitemrequest"></a>
<a id="schema_UpdateAnnotationQueueItemRequest"></a>
<a id="tocSupdateannotationqueueitemrequest"></a>
<a id="tocsupdateannotationqueueitemrequest"></a>

```json
{
  "status": "PENDING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[AnnotationQueueStatus](#schemaannotationqueuestatus)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|COMPLETED|

<h2 id="tocS_DeleteAnnotationQueueItemResponse">DeleteAnnotationQueueItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteannotationqueueitemresponse"></a>
<a id="schema_DeleteAnnotationQueueItemResponse"></a>
<a id="tocSdeleteannotationqueueitemresponse"></a>
<a id="tocsdeleteannotationqueueitemresponse"></a>

```json
{
  "success": true,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_AnnotationQueueAssignmentRequest">AnnotationQueueAssignmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotationqueueassignmentrequest"></a>
<a id="schema_AnnotationQueueAssignmentRequest"></a>
<a id="tocSannotationqueueassignmentrequest"></a>
<a id="tocsannotationqueueassignmentrequest"></a>

```json
{
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|

<h2 id="tocS_DeleteAnnotationQueueAssignmentResponse">DeleteAnnotationQueueAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteannotationqueueassignmentresponse"></a>
<a id="schema_DeleteAnnotationQueueAssignmentResponse"></a>
<a id="tocSdeleteannotationqueueassignmentresponse"></a>
<a id="tocsdeleteannotationqueueassignmentresponse"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<h2 id="tocS_CreateAnnotationQueueAssignmentResponse">CreateAnnotationQueueAssignmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateannotationqueueassignmentresponse"></a>
<a id="schema_CreateAnnotationQueueAssignmentResponse"></a>
<a id="tocScreateannotationqueueassignmentresponse"></a>
<a id="tocscreateannotationqueueassignmentresponse"></a>

```json
{
  "userId": "string",
  "queueId": "string",
  "projectId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|queueId|string|true|none|none|
|projectId|string|true|none|none|

<h2 id="tocS_BlobStorageIntegrationType">BlobStorageIntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationtype"></a>
<a id="schema_BlobStorageIntegrationType"></a>
<a id="tocSblobstorageintegrationtype"></a>
<a id="tocsblobstorageintegrationtype"></a>

```json
"S3"
```

<h2 id="tocS_BlobStorageIntegrationFileType">BlobStorageIntegrationFileType</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationfiletype"></a>
<a id="schema_BlobStorageIntegrationFileType"></a>
<a id="tocSblobstorageintegrationfiletype"></a>
<a id="tocsblobstorageintegrationfiletype"></a>

```json
"JSON"
```

File format for exported data. `PARQUET` is a columnar binary format encoded and compressed by the storage engine; gzip compression does not apply to it. Note that the model-price columns (`input_price`, `output_price`, `total_price`) are not included in Parquet observation exports.

<h2 id="tocS_BlobStorageIntegrationFileTypeResponse">BlobStorageIntegrationFileTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationfiletyperesponse"></a>
<a id="schema_BlobStorageIntegrationFileTypeResponse"></a>
<a id="tocSblobstorageintegrationfiletyperesponse"></a>
<a id="tocsblobstorageintegrationfiletyperesponse"></a>

```json
"JSON"
```

File type reported for an existing integration.

<h2 id="tocS_BlobStorageExportMode">BlobStorageExportMode</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageexportmode"></a>
<a id="schema_BlobStorageExportMode"></a>
<a id="tocSblobstorageexportmode"></a>
<a id="tocsblobstorageexportmode"></a>

```json
"FULL_HISTORY"
```

<h2 id="tocS_BlobStorageExportFrequency">BlobStorageExportFrequency</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageexportfrequency"></a>
<a id="schema_BlobStorageExportFrequency"></a>
<a id="tocSblobstorageexportfrequency"></a>
<a id="tocsblobstorageexportfrequency"></a>

```json
"every_20_minutes"
```

<h2 id="tocS_BlobStorageExportSource">BlobStorageExportSource</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageexportsource"></a>
<a id="schema_BlobStorageExportSource"></a>
<a id="tocSblobstorageexportsource"></a>
<a id="tocsblobstorageexportsource"></a>

```json
"LEGACY_TRACES_OBSERVATIONS"
```

What data the integration exports.
- `LEGACY_TRACES_OBSERVATIONS`: traces, observations, and scores tables. Observation columns are controlled by `exportFieldGroups`; field groups without a counterpart in this data model (e.g. `trace_context`) are omitted.
- `OBSERVATIONS_V2`: same data model as the `/api/public/v2/observations` endpoint, plus scores. Columns are controlled by `exportFieldGroups`.
- `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS`: both sets. Observation columns of both portions are controlled by `exportFieldGroups`.

**Note:** which sources a deployment accepts depends on how far it has moved to the v4 data model. `OBSERVATIONS_V2` and the enriched-observations portion of `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` read the enriched observations table, so they require a deployment that already populates it. `LEGACY_TRACES_OBSERVATIONS` and the legacy portion of `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` read the legacy traces and observations tables, so they require a deployment that still populates those. A deployment part-way through the migration populates both and accepts every source. Selecting a source the deployment cannot serve is rejected with `400`, rather than exporting an empty result. See https://langfuse.com/docs/v4.

<h2 id="tocS_BlobStorageExportFieldGroup">BlobStorageExportFieldGroup</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageexportfieldgroup"></a>
<a id="schema_BlobStorageExportFieldGroup"></a>
<a id="tocSblobstorageexportfieldgroup"></a>
<a id="tocsblobstorageexportfieldgroup"></a>

```json
"core"
```

Field group selecting which columns are included in the export. Applies to all export sources.
- Observation groups (`core` through `trace_context`) select observation columns; groups without a counterpart in the legacy data model (e.g. `trace_context`) are omitted from the legacy observations export.
- Score groups (`score_` prefix) add optional columns to the scores export. The core score columns (`id`, `timestamp`, `trace_id`, `name`, `value`, …) are always exported and are not a selectable group; score groups add columns on top of them. `score_metadata` adds the score `metadata` column. `score_provenance` adds the references to where a score came from: `author_user_id`, `config_id`, `queue_id`, `evaluator_id`, `evaluation_rule_id`, `execution_trace_id`. Score groups are never selected by default.

<h2 id="tocS_CreateBlobStorageIntegrationRequest">CreateBlobStorageIntegrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateblobstorageintegrationrequest"></a>
<a id="schema_CreateBlobStorageIntegrationRequest"></a>
<a id="tocScreateblobstorageintegrationrequest"></a>
<a id="tocscreateblobstorageintegrationrequest"></a>

```json
{
  "projectId": "string",
  "type": "S3",
  "bucketName": "string",
  "endpoint": "string",
  "region": "string",
  "accessKeyId": "string",
  "secretAccessKey": "string",
  "prefix": "string",
  "exportFrequency": "every_20_minutes",
  "enabled": true,
  "forcePathStyle": true,
  "fileType": "JSON",
  "exportMode": "FULL_HISTORY",
  "exportStartDate": "1970-01-01T00:00:00Z",
  "compressed": true,
  "exportSource": "LEGACY_TRACES_OBSERVATIONS",
  "exportFieldGroups": [
    "core"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|true|none|ID of the project in which to configure the blob storage integration|
|type|[BlobStorageIntegrationType](#schemablobstorageintegrationtype)|true|none|none|
|bucketName|string|true|none|Name of the storage bucket. For AZURE_BLOB_STORAGE, must be a valid Azure container name (3-63 chars, lowercase letters, numbers, and hyphens only, must start and end with a letter or number, no consecutive hyphens). For GOOGLE_CLOUD_STORAGE with default credentials, the bucket must be listed in `LANGFUSE_BLOB_STORAGE_GCS_ALLOWED_BUCKETS`.|
|endpoint|string \| null|false|none|Custom endpoint URL (required for S3_COMPATIBLE type). Ignored for GOOGLE_CLOUD_STORAGE.|
|region|string|true|none|Storage region used by S3-compatible clients (AWS, GCS, Cloudflare R2, MinIO, Azure location IDs such as eastus, OCI). Leading and trailing whitespace is removed. The remaining value must be 1-63 letters, numbers, or hyphens, and cannot start or end with a hyphen. Examples: us-east-1, europe-west1, eastus, auto. Not used by GOOGLE_CLOUD_STORAGE; pass auto.|
|accessKeyId|string \| null|false|none|Access key ID for authentication. Not used for GOOGLE_CLOUD_STORAGE.|
|secretAccessKey|string \| null|false|none|Secret access key for authentication (will be encrypted when stored). When omitted on update, the stored secret is kept, unless the type changes between GOOGLE_CLOUD_STORAGE and another type.<br><br>For GOOGLE_CLOUD_STORAGE, a GCP service account JSON key. On self-hosted deployments, pass `__GCS_DEFAULT_CREDENTIALS__` instead to use the deployment's Application Default Credentials; the bucket must then be listed in `LANGFUSE_BLOB_STORAGE_GCS_ALLOWED_BUCKETS`. Default credentials are not available on Langfuse Cloud.|
|prefix|string \| null|false|none|Path prefix for exported files (must end with forward slash if provided)|
|exportFrequency|[BlobStorageExportFrequency](#schemablobstorageexportfrequency)|true|none|none|
|enabled|boolean|true|none|Whether the integration is active|
|forcePathStyle|boolean|true|none|Use path-style URLs for S3 requests|
|fileType|[BlobStorageIntegrationFileType](#schemablobstorageintegrationfiletype)|true|none|File format for exported data. `PARQUET` is a columnar binary format encoded and compressed by the storage engine; gzip compression does not apply to it. Note that the model-price columns (`input_price`, `output_price`, `total_price`) are not included in Parquet observation exports.|
|exportMode|[BlobStorageExportMode](#schemablobstorageexportmode)|true|none|none|
|exportStartDate|string(date-time) \| null|false|none|Custom start date for exports (required when exportMode is FROM_CUSTOM_DATE). Must not be in the future (27 h tolerance for timezone differences).|
|compressed|boolean \| null|false|none|Enable gzip compression for exported files (.csv.gz, .json.gz, .jsonl.gz). Defaults to true.|
|exportSource|[BlobStorageExportSource](#schemablobstorageexportsource)|false|none|Data to export. When omitted on update, the existing value is preserved. When omitted on create, the default is `OBSERVATIONS_V2` on Langfuse Cloud, and on self-hosted deployments `LEGACY_TRACES_OBSERVATIONS` — or `OBSERVATIONS_V2` where the deployment no longer populates the legacy tables. The default is never a source the deployment cannot serve. Required when `exportFieldGroups` is provided.<br><br>**Cloud-only project deprecation gate (effective 2026-05-20):** For projects created on or after 2026-05-20 on Langfuse Cloud, `LEGACY_TRACES_OBSERVATIONS` and `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` are rejected with HTTP 400. Use `OBSERVATIONS_V2` for all new integrations. Self-hosted deployments are unaffected.<br><br>**Cloud-only integration deprecation gate (effective 2026-06-22):** On Langfuse Cloud, legacy export sources are only accepted for blob storage integrations created before 2026-06-22, regardless of project age. Requests that would create a new integration with `LEGACY_TRACES_OBSERVATIONS` or `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` are rejected with HTTP 400. Use `OBSERVATIONS_V2` instead. Self-hosted deployments are unaffected.|
|exportFieldGroups|[[BlobStorageExportFieldGroup](#schemablobstorageexportfieldgroup)]|false|none|Field groups to include in each exported observation and score row. Applies to all export sources; must include the observation `core` group if provided. Core score columns are always exported; score groups add columns on top. When omitted on create, all observation groups are selected and no score groups. When omitted on update, the existing value is preserved.<br><br>`exportFieldGroups` requires `exportSource` to be provided in the same request.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|S3|
|type|S3_COMPATIBLE|
|type|AZURE_BLOB_STORAGE|
|type|GOOGLE_CLOUD_STORAGE|
|exportFrequency|every_20_minutes|
|exportFrequency|hourly|
|exportFrequency|daily|
|exportFrequency|weekly|
|fileType|JSON|
|fileType|CSV|
|fileType|JSONL|
|fileType|PARQUET|
|exportMode|FULL_HISTORY|
|exportMode|FROM_TODAY|
|exportMode|FROM_CUSTOM_DATE|
|exportSource|LEGACY_TRACES_OBSERVATIONS|
|exportSource|OBSERVATIONS_V2|
|exportSource|LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS|
|exportFieldGroups|core|
|exportFieldGroups|basic|
|exportFieldGroups|time|
|exportFieldGroups|io|
|exportFieldGroups|metadata|
|exportFieldGroups|model|
|exportFieldGroups|usage|
|exportFieldGroups|prompt|
|exportFieldGroups|metrics|
|exportFieldGroups|tools|
|exportFieldGroups|trace_context|
|exportFieldGroups|score_metadata|
|exportFieldGroups|score_provenance|

<h2 id="tocS_BlobStorageIntegrationResponse">BlobStorageIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationresponse"></a>
<a id="schema_BlobStorageIntegrationResponse"></a>
<a id="tocSblobstorageintegrationresponse"></a>
<a id="tocsblobstorageintegrationresponse"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "type": "S3",
  "bucketName": "string",
  "endpoint": "string",
  "region": "string",
  "accessKeyId": "string",
  "prefix": "string",
  "exportFrequency": "every_20_minutes",
  "enabled": true,
  "forcePathStyle": true,
  "fileType": "JSON",
  "exportMode": "FULL_HISTORY",
  "exportStartDate": "1970-01-01T00:00:00Z",
  "compressed": true,
  "exportSource": "LEGACY_TRACES_OBSERVATIONS",
  "exportFieldGroups": [
    "core"
  ],
  "nextSyncAt": "1970-01-01T00:00:00Z",
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "lastError": "string",
  "lastErrorAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|type|[BlobStorageIntegrationType](#schemablobstorageintegrationtype)|true|none|none|
|bucketName|string|true|none|none|
|endpoint|string \| null|true|none|none|
|region|string|true|none|none|
|accessKeyId|string \| null|true|none|none|
|prefix|string|true|none|none|
|exportFrequency|[BlobStorageExportFrequency](#schemablobstorageexportfrequency)|true|none|none|
|enabled|boolean|true|none|none|
|forcePathStyle|boolean|true|none|none|
|fileType|[BlobStorageIntegrationFileTypeResponse](#schemablobstorageintegrationfiletyperesponse)|true|none|File type reported for an existing integration.|
|exportMode|[BlobStorageExportMode](#schemablobstorageexportmode)|true|none|none|
|exportStartDate|string(date-time) \| null|true|none|none|
|compressed|boolean|true|none|none|
|exportSource|[BlobStorageExportSource](#schemablobstorageexportsource)|true|none|What data the integration exports.<br>- `LEGACY_TRACES_OBSERVATIONS`: traces, observations, and scores tables. Observation columns are controlled by `exportFieldGroups`; field groups without a counterpart in this data model (e.g. `trace_context`) are omitted.<br>- `OBSERVATIONS_V2`: same data model as the `/api/public/v2/observations` endpoint, plus scores. Columns are controlled by `exportFieldGroups`.<br>- `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS`: both sets. Observation columns of both portions are controlled by `exportFieldGroups`.<br><br>**Note:** which sources a deployment accepts depends on how far it has moved to the v4 data model. `OBSERVATIONS_V2` and the enriched-observations portion of `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` read the enriched observations table, so they require a deployment that already populates it. `LEGACY_TRACES_OBSERVATIONS` and the legacy portion of `LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS` read the legacy traces and observations tables, so they require a deployment that still populates those. A deployment part-way through the migration populates both and accepts every source. Selecting a source the deployment cannot serve is rejected with `400`, rather than exporting an empty result. See https://langfuse.com/docs/v4.|
|exportFieldGroups|[[BlobStorageExportFieldGroup](#schemablobstorageexportfieldgroup)]|true|none|Field groups included in each exported observation and score row. An empty list is treated as all observation groups and no score groups during export. Core score columns are always exported.|
|nextSyncAt|string(date-time) \| null|true|none|none|
|lastSyncAt|string(date-time) \| null|true|none|none|
|lastError|string \| null|true|none|none|
|lastErrorAt|string(date-time) \| null|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|S3|
|type|S3_COMPATIBLE|
|type|AZURE_BLOB_STORAGE|
|type|GOOGLE_CLOUD_STORAGE|
|exportFrequency|every_20_minutes|
|exportFrequency|hourly|
|exportFrequency|daily|
|exportFrequency|weekly|
|fileType|JSON|
|fileType|CSV|
|fileType|JSONL|
|fileType|PARQUET|
|exportMode|FULL_HISTORY|
|exportMode|FROM_TODAY|
|exportMode|FROM_CUSTOM_DATE|
|exportSource|LEGACY_TRACES_OBSERVATIONS|
|exportSource|OBSERVATIONS_V2|
|exportSource|LEGACY_TRACES_AND_ENRICHED_OBSERVATIONS|
|exportFieldGroups|core|
|exportFieldGroups|basic|
|exportFieldGroups|time|
|exportFieldGroups|io|
|exportFieldGroups|metadata|
|exportFieldGroups|model|
|exportFieldGroups|usage|
|exportFieldGroups|prompt|
|exportFieldGroups|metrics|
|exportFieldGroups|tools|
|exportFieldGroups|trace_context|
|exportFieldGroups|score_metadata|
|exportFieldGroups|score_provenance|

<h2 id="tocS_BlobStorageIntegrationsResponse">BlobStorageIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationsresponse"></a>
<a id="schema_BlobStorageIntegrationsResponse"></a>
<a id="tocSblobstorageintegrationsresponse"></a>
<a id="tocsblobstorageintegrationsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "projectId": "string",
      "type": "S3",
      "bucketName": "string",
      "endpoint": "string",
      "region": "string",
      "accessKeyId": "string",
      "prefix": "string",
      "exportFrequency": "every_20_minutes",
      "enabled": true,
      "forcePathStyle": true,
      "fileType": "JSON",
      "exportMode": "FULL_HISTORY",
      "exportStartDate": "1970-01-01T00:00:00Z",
      "compressed": true,
      "exportSource": "LEGACY_TRACES_OBSERVATIONS",
      "exportFieldGroups": [
        "core"
      ],
      "nextSyncAt": "1970-01-01T00:00:00Z",
      "lastSyncAt": "1970-01-01T00:00:00Z",
      "lastError": "string",
      "lastErrorAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[BlobStorageIntegrationResponse](#schemablobstorageintegrationresponse)]|true|none|none|

<h2 id="tocS_BlobStorageSyncStatus">BlobStorageSyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemablobstoragesyncstatus"></a>
<a id="schema_BlobStorageSyncStatus"></a>
<a id="tocSblobstoragesyncstatus"></a>
<a id="tocsblobstoragesyncstatus"></a>

```json
"idle"
```

Sync status of the blob storage integration:
- `disabled` — integration is not enabled
- `error` — last export failed (see `lastError` for details)
- `running` — an export job is currently being processed
- `queued` — next export is overdue (`nextSyncAt` is in the past) and waiting to be picked up by the worker
- `idle` — enabled but has never exported yet and no export is queued
- `up_to_date` — all available data has been exported; next export is scheduled for the future

**ETL usage**: poll this endpoint and check for `up_to_date` status. Compare `lastSyncAt` against your
ETL bookmark to determine if new data is available. Note that exports run with a 20-minute lag buffer,
so `lastSyncAt` will always be at least 20 minutes behind real-time.

<h2 id="tocS_BlobStorageIntegrationStatusResponse">BlobStorageIntegrationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationstatusresponse"></a>
<a id="schema_BlobStorageIntegrationStatusResponse"></a>
<a id="tocSblobstorageintegrationstatusresponse"></a>
<a id="tocsblobstorageintegrationstatusresponse"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "syncStatus": "idle",
  "enabled": true,
  "lastSyncAt": "1970-01-01T00:00:00Z",
  "nextSyncAt": "1970-01-01T00:00:00Z",
  "lastError": "string",
  "lastErrorAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|syncStatus|[BlobStorageSyncStatus](#schemablobstoragesyncstatus)|true|none|Sync status of the blob storage integration:<br>- `disabled` — integration is not enabled<br>- `error` — last export failed (see `lastError` for details)<br>- `running` — an export job is currently being processed<br>- `queued` — next export is overdue (`nextSyncAt` is in the past) and waiting to be picked up by the worker<br>- `idle` — enabled but has never exported yet and no export is queued<br>- `up_to_date` — all available data has been exported; next export is scheduled for the future<br><br>**ETL usage**: poll this endpoint and check for `up_to_date` status. Compare `lastSyncAt` against your<br>ETL bookmark to determine if new data is available. Note that exports run with a 20-minute lag buffer,<br>so `lastSyncAt` will always be at least 20 minutes behind real-time.|
|enabled|boolean|true|none|none|
|lastSyncAt|string(date-time) \| null|true|none|End of the last successfully exported time window. Compare against your ETL bookmark to determine if new data is available. Null if the integration has never synced.|
|nextSyncAt|string(date-time) \| null|true|none|When the next export is scheduled. Null if no sync has occurred yet.|
|lastError|string \| null|true|none|Raw error message from the storage provider (S3/Azure/GCS) if the last export failed. Cleared on successful export.|
|lastErrorAt|string(date-time) \| null|true|none|When the last error occurred. Cleared on successful export.|

#### Enumerated Values

|Property|Value|
|---|---|
|syncStatus|idle|
|syncStatus|running|
|syncStatus|queued|
|syncStatus|up_to_date|
|syncStatus|disabled|
|syncStatus|error|

<h2 id="tocS_BlobStorageIntegrationDeletionResponse">BlobStorageIntegrationDeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemablobstorageintegrationdeletionresponse"></a>
<a id="schema_BlobStorageIntegrationDeletionResponse"></a>
<a id="tocSblobstorageintegrationdeletionresponse"></a>
<a id="tocsblobstorageintegrationdeletionresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_CreateCommentRequest">CreateCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentrequest"></a>
<a id="schema_CreateCommentRequest"></a>
<a id="tocScreatecommentrequest"></a>
<a id="tocscreatecommentrequest"></a>

```json
{
  "projectId": "string",
  "objectType": "string",
  "objectId": "string",
  "content": "string",
  "authorUserId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectId|string|true|none|The id of the project to attach the comment to.|
|objectType|string|true|none|The type of the object to attach the comment to (trace, observation, session, prompt).|
|objectId|string|true|none|The id of the object to attach the comment to. If this does not reference a valid existing object, an error will be thrown.|
|content|string|true|none|The content of the comment. May include markdown. Currently limited to 5000 characters.|
|authorUserId|string \| null|false|none|The id of the user who created the comment. Must be a member of the organization that owns the project, otherwise an error will be thrown.|

<h2 id="tocS_CreateCommentResponse">CreateCommentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentresponse"></a>
<a id="schema_CreateCommentResponse"></a>
<a id="tocScreatecommentresponse"></a>
<a id="tocscreatecommentresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The id of the created object in Langfuse|

<h2 id="tocS_GetCommentsResponse">GetCommentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcommentsresponse"></a>
<a id="schema_GetCommentsResponse"></a>
<a id="tocSgetcommentsresponse"></a>
<a id="tocsgetcommentsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "projectId": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "objectType": "TRACE",
      "objectId": "string",
      "content": "string",
      "authorUserId": "string"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Comment](#schemacomment)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_Deprecation">Deprecation</h2>
<!-- backwards compatibility -->
<a id="schemadeprecation"></a>
<a id="schema_Deprecation"></a>
<a id="tocSdeprecation"></a>
<a id="tocsdeprecation"></a>

```json
{
  "message": "string",
  "replacement": "string",
  "docsUrl": "string",
  "sunsetAt": "string"
}
```

Migration signal returned by deprecated endpoints. Optional fields are omitted when they have no value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Human- and agent-readable summary of the deprecation and its replacement.|
|replacement|string \| null|false|none|The replacement endpoint, e.g. "GET /api/public/v2/observations". Omitted when the endpoint is being removed without a direct replacement.|
|docsUrl|string \| null|false|none|Link to the migration documentation (markdown), when available.|
|sunsetAt|string \| null|false|none|ISO date after which the endpoint may stop working, when a removal date is committed.|

<h2 id="tocS_ObservationV2">ObservationV2</h2>
<!-- backwards compatibility -->
<a id="schemaobservationv2"></a>
<a id="schema_ObservationV2"></a>
<a id="tocSobservationv2"></a>
<a id="tocsobservationv2"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "parentObservationId": "string",
  "type": "string",
  "isRootObservation": true,
  "name": "string",
  "level": "DEBUG",
  "statusMessage": "string",
  "version": "string",
  "environment": "string",
  "bookmarked": true,
  "public": true,
  "userId": "string",
  "sessionId": "string",
  "completionStartTime": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "input": null,
  "output": null,
  "metadata": {},
  "model": "string",
  "internalModelId": "string",
  "modelParameters": null,
  "usageDetails": {
    "property1": 0,
    "property2": 0
  },
  "costDetails": {
    "property1": 0,
    "property2": 0
  },
  "totalCost": 0,
  "usagePricingTierName": "string",
  "promptId": "string",
  "promptName": "string",
  "promptVersion": 0,
  "latency": 0,
  "timeToFirstToken": 0,
  "modelId": "string",
  "inputPrice": "string",
  "outputPrice": "string",
  "totalPrice": "string",
  "traceName": "string",
  "tags": [
    "string"
  ],
  "release": "string"
}
```

An observation from the v2 API with field-group-based selection.
Core fields are always present. Other fields are included only when their field group is requested.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the observation|
|traceId|string \| null|true|none|The trace ID associated with the observation|
|startTime|string(date-time)|true|none|The start time of the observation|
|endTime|string(date-time) \| null|true|none|The end time of the observation|
|projectId|string|true|none|The project ID this observation belongs to|
|parentObservationId|string \| null|true|none|The physical parent observation ID, if present.<br>Observations marked as app roots by the SDK may retain a non-null parent ID.|
|type|string|true|none|The type of the observation (e.g. GENERATION, SPAN, EVENT)|
|isRootObservation|boolean \| null|false|none|Whether this observation is a logical root.<br>This is true for observations without a physical parent and observations marked as app roots by the SDK.|
|name|string \| null|false|none|The name of the observation|
|level|[ObservationLevel](#schemaobservationlevel)|false|none|The level of the observation|
|statusMessage|string \| null|false|none|The status message of the observation|
|version|string \| null|false|none|The version of the observation|
|environment|string \| null|false|none|The environment from which this observation originated|
|bookmarked|boolean \| null|false|none|Whether the observation is bookmarked|
|public|boolean \| null|false|none|Whether the observation is public|
|userId|string \| null|false|none|The user ID associated with the observation|
|sessionId|string \| null|false|none|The session ID associated with the observation|
|completionStartTime|string(date-time) \| null|false|none|The completion start time of the observation|
|createdAt|string(date-time) \| null|false|none|The creation timestamp of the observation|
|updatedAt|string(date-time) \| null|false|none|The last update timestamp of the observation|
|input|object \| null|false|none|The input data of the observation|
|output|object \| null|false|none|The output data of the observation|
|metadata|object \| null|false|none|Additional metadata of the observation|
|model|string \| null|false|none|The model name as provided by the user|
|internalModelId|string \| null|false|none|The internal model ID matched by Langfuse|
|modelParameters|object \| null|false|none|The parameters of the model used for the observation|
|usageDetails|object \| null|false|none|The usage details of the observation. Key is the usage metric name, value is the number of units consumed.|
|costDetails|object \| null|false|none|The cost details of the observation. Key is the cost metric name, value is the cost in USD.|
|totalCost|number(double) \| null|false|none|The total cost of the observation in USD|
|usagePricingTierName|string \| null|false|none|The name of the pricing tier applied to this observation's usage costs|
|promptId|string \| null|false|none|The prompt ID associated with the observation|
|promptName|string \| null|false|none|The prompt name associated with the observation|
|promptVersion|integer \| null|false|none|The prompt version associated with the observation|
|latency|number(double) \| null|false|none|The latency in seconds|
|timeToFirstToken|number(double) \| null|false|none|The time to first token in seconds|
|modelId|string \| null|true|none|The matched model ID. Null when the `model` field group is not requested.|
|inputPrice|string \| null|true|none|The input token price (USD per unit) from the matched model, serialized as a decimal string (e.g. "0.0001"). Null when the `model` field group is not requested.|
|outputPrice|string \| null|true|none|The output token price (USD per unit) from the matched model, serialized as a decimal string (e.g. "0.0001"). Null when the `model` field group is not requested.|
|totalPrice|string \| null|true|none|The total token price (USD per unit) from the matched model, serialized as a decimal string (e.g. "0.0001"). Null when the `model` field group is not requested.|
|traceName|string \| null|false|none|The name of the parent trace|
|tags|[string]|false|none|Tags from the parent trace (denormalized onto the observation)|
|release|string \| null|false|none|The release version of the parent trace|

#### Enumerated Values

|Property|Value|
|---|---|
|level|DEBUG|
|level|DEFAULT|
|level|WARNING|
|level|ERROR|

<h2 id="tocS_Usage">Usage</h2>
<!-- backwards compatibility -->
<a id="schemausage"></a>
<a id="schema_Usage"></a>
<a id="tocSusage"></a>
<a id="tocsusage"></a>

```json
{
  "input": 0,
  "output": 0,
  "total": 0,
  "unit": "string",
  "inputCost": 0,
  "outputCost": 0,
  "totalCost": 0
}
```

(Deprecated. Use usageDetails and costDetails instead.) Standard interface for usage and cost

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|integer|true|none|Number of input units (e.g. tokens)|
|output|integer|true|none|Number of output units (e.g. tokens)|
|total|integer|true|none|Defaults to input+output if not set|
|unit|string \| null|true|none|Unit of measurement|
|inputCost|number(double) \| null|false|none|USD input cost|
|outputCost|number(double) \| null|false|none|USD output cost|
|totalCost|number(double) \| null|false|none|USD total cost, defaults to input+output|

<h2 id="tocS_ScoreConfig">ScoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfig"></a>
<a id="schema_ScoreConfig"></a>
<a id="tocSscoreconfig"></a>
<a id="tocsscoreconfig"></a>

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "dataType": "NUMERIC",
  "isArchived": true,
  "minValue": 0,
  "maxValue": 0,
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "description": "string"
}
```

Configuration for a score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|Score config name. Maximum 80 characters.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|projectId|string|true|none|none|
|dataType|[ScoreConfigDataType](#schemascoreconfigdatatype)|true|none|none|
|isArchived|boolean|true|none|Whether the score config is archived. Defaults to false|
|minValue|number(double) \| null|false|none|Sets minimum value for numerical scores. If not set, the minimum value defaults to -∞|
|maxValue|number(double) \| null|false|none|Sets maximum value for numerical scores. If not set, the maximum value defaults to +∞|
|categories|[[ConfigCategory](#schemaconfigcategory)]|false|none|Configures custom categories for categorical scores|
|description|string \| null|false|none|Description of the score config|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|dataType|BOOLEAN|
|dataType|CATEGORICAL|
|dataType|TEXT|

<h2 id="tocS_ConfigCategory">ConfigCategory</h2>
<!-- backwards compatibility -->
<a id="schemaconfigcategory"></a>
<a id="schema_ConfigCategory"></a>
<a id="tocSconfigcategory"></a>
<a id="tocsconfigcategory"></a>

```json
{
  "value": 0,
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|true|none|none|
|label|string|true|none|none|

<h2 id="tocS_BaseScore">BaseScore</h2>
<!-- backwards compatibility -->
<a id="schemabasescore"></a>
<a id="schema_BaseScore"></a>
<a id="tocSbasescore"></a>
<a id="tocsbasescore"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_NumericScore">NumericScore</h2>
<!-- backwards compatibility -->
<a id="schemanumericscore"></a>
<a id="schema_NumericScore"></a>
<a id="tocSnumericscore"></a>
<a id="tocsnumericscore"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|The numeric value of the score|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_BooleanScore">BooleanScore</h2>
<!-- backwards compatibility -->
<a id="schemabooleanscore"></a>
<a id="schema_BooleanScore"></a>
<a id="tocSbooleanscore"></a>
<a id="tocsbooleanscore"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string",
  "value": 0,
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|The numeric value of the score. Equals 1 for "True" and 0 for "False"|
|stringValue|string|true|none|The string representation of the score value. Is inferred from the numeric value and equals "True" or "False"|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_CategoricalScore">CategoricalScore</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalscore"></a>
<a id="schema_CategoricalScore"></a>
<a id="tocScategoricalscore"></a>
<a id="tocscategoricalscore"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string",
  "value": 0,
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|Represents the numeric category mapping of the stringValue. If no config is linked, defaults to 0.|
|stringValue|string|true|none|The string representation of the score value. If no config is linked, can be any string. Otherwise, must map to a config category|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_CorrectionScore">CorrectionScore</h2>
<!-- backwards compatibility -->
<a id="schemacorrectionscore"></a>
<a id="schema_CorrectionScore"></a>
<a id="tocScorrectionscore"></a>
<a id="tocscorrectionscore"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string",
  "value": 0,
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|The numeric value of the score. Always 0 for correction scores.|
|stringValue|string|true|none|The string representation of the correction content|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_TextScore">TextScore</h2>
<!-- backwards compatibility -->
<a id="schematextscore"></a>
<a id="schema_TextScore"></a>
<a id="tocStextscore"></a>
<a id="tocstextscore"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string",
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|stringValue|string|true|none|The text content of the score (1-500 characters)|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_Score">Score</h2>
<!-- backwards compatibility -->
<a id="schemascore"></a>
<a id="schema_Score"></a>
<a id="tocSscore"></a>
<a id="tocsscore"></a>

```json
{
  "dataType": "NUMERIC",
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "authorUserId": "string",
  "comment": "string",
  "metadata": {},
  "configId": "string",
  "queueId": "string",
  "environment": "string",
  "value": 0,
  "_deprecation": {
    "message": "string",
    "replacement": "string",
    "docsUrl": "string",
    "sunsetAt": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_deprecation|[Deprecation](#schemadeprecation)|false|none|Migration signal returned by deprecated endpoints. Optional fields are omitted when they have no value.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|The numeric value of the score|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|Represents the numeric category mapping of the stringValue. If no config is linked, defaults to 0.|
|stringValue|string|true|none|The string representation of the score value. If no config is linked, can be any string. Otherwise, must map to a config category|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|The numeric value of the score. Equals 1 for "True" and 0 for "False"|
|stringValue|string|true|none|The string representation of the score value. Is inferred from the numeric value and equals "True" or "False"|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|value|number(double)|true|none|The numeric value of the score. Always 0 for correction scores.|
|stringValue|string|true|none|The string representation of the correction content|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|traceId|string \| null|false|none|The trace ID associated with the score|
|sessionId|string \| null|false|none|The session ID associated with the score|
|observationId|string \| null|false|none|The observation ID associated with the score|
|datasetRunId|string \| null|false|none|The dataset run ID associated with the score|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|authorUserId|string \| null|true|none|The user ID of the author|
|comment|string \| null|true|none|Comment on the score|
|metadata|object \| null|false|none|Metadata associated with the score|
|configId|string \| null|true|none|Reference a score config on a score. When set, config and score name must be equal and value must comply to optionally defined numerical range|
|queueId|string \| null|true|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|environment|string|true|none|The environment from which this score originated. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|stringValue|string|true|none|The text content of the score (1-500 characters)|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|CATEGORICAL|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|BOOLEAN|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|CORRECTION|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|TEXT|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_CreateScoreValue">CreateScoreValue</h2>
<!-- backwards compatibility -->
<a id="schemacreatescorevalue"></a>
<a id="schema_CreateScoreValue"></a>
<a id="tocScreatescorevalue"></a>
<a id="tocscreatescorevalue"></a>

```json
0
```

The value of the score. Must be passed as string for categorical and text scores, and numeric for boolean and numeric scores

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|number(double)|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "objectType": "TRACE",
  "objectId": "string",
  "content": "string",
  "authorUserId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|objectType|[CommentObjectType](#schemacommentobjecttype)|true|none|none|
|objectId|string|true|none|none|
|content|string|true|none|none|
|authorUserId|string \| null|false|none|The user ID of the comment author|

#### Enumerated Values

|Property|Value|
|---|---|
|objectType|TRACE|
|objectType|OBSERVATION|
|objectType|SESSION|
|objectType|PROMPT|

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
  "metadata": null,
  "inputSchema": {},
  "expectedOutputSchema": {},
  "projectId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|Description of the dataset|
|metadata|object|true|none|Metadata associated with the dataset|
|inputSchema|object \| null|true|none|JSON Schema for validating dataset item inputs|
|expectedOutputSchema|object \| null|true|none|JSON Schema for validating dataset item expected outputs|
|projectId|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_DatasetItem">DatasetItem</h2>
<!-- backwards compatibility -->
<a id="schemadatasetitem"></a>
<a id="schema_DatasetItem"></a>
<a id="tocSdatasetitem"></a>
<a id="tocsdatasetitem"></a>

```json
{
  "id": "string",
  "status": "ACTIVE",
  "input": null,
  "expectedOutput": null,
  "metadata": null,
  "sourceTraceId": "string",
  "sourceObservationId": "string",
  "datasetId": "string",
  "datasetName": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "version": "1970-01-01T00:00:00Z",
  "mediaReferences": [
    {
      "field": "input",
      "referenceString": "string",
      "jsonPath": "string",
      "media": {
        "mediaId": "string",
        "contentType": "string",
        "contentLength": 0,
        "url": "string",
        "urlExpiry": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|status|[DatasetStatus](#schemadatasetstatus)|true|none|none|
|input|object|true|none|Input data for the dataset item|
|expectedOutput|object|true|none|Expected output for the dataset item|
|metadata|object|true|none|Metadata associated with the dataset item|
|sourceTraceId|string \| null|true|none|The trace ID that sourced this dataset item|
|sourceObservationId|string \| null|true|none|The observation ID that sourced this dataset item|
|datasetId|string|true|none|none|
|datasetName|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|version|string(date-time) \| null|false|none|When this version of the dataset item became current. Listing dataset items with a `version` at or after this timestamp returns this item version, until the item is changed again. Self-hosted deployments that set `LANGFUSE_DATASET_SERVICE_WRITE_TO_VERSIONED_IMPLEMENTATION=false` update items in place, so there it stays at the item's first write.|
|mediaReferences|[[DatasetItemMediaReference](#schemadatasetitemmediareference)]|true|none|Resolved Langfuse media references found in input, expectedOutput, and metadata.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|ARCHIVED|

<h2 id="tocS_DatasetItemMediaReference">DatasetItemMediaReference</h2>
<!-- backwards compatibility -->
<a id="schemadatasetitemmediareference"></a>
<a id="schema_DatasetItemMediaReference"></a>
<a id="tocSdatasetitemmediareference"></a>
<a id="tocsdatasetitemmediareference"></a>

```json
{
  "field": "input",
  "referenceString": "string",
  "jsonPath": "string",
  "media": {
    "mediaId": "string",
    "contentType": "string",
    "contentLength": 0,
    "url": "string",
    "urlExpiry": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|[DatasetItemMediaReferenceField](#schemadatasetitemmediareferencefield)|true|none|The dataset item field containing the reference|
|referenceString|string|true|none|The Langfuse media reference string, e.g. `@@@langfuseMedia:type=image/png\|id=...\|source=bytes@@@`|
|jsonPath|string|true|none|JSONPath of the string holding the reference within the field, e.g. `$['image']`|
|media|[DatasetItemMediaReferenceMedia](#schemadatasetitemmediareferencemedia)|true|none|The resolved media record.|

#### Enumerated Values

|Property|Value|
|---|---|
|field|input|
|field|expectedOutput|
|field|metadata|

<h2 id="tocS_DatasetItemMediaReferenceField">DatasetItemMediaReferenceField</h2>
<!-- backwards compatibility -->
<a id="schemadatasetitemmediareferencefield"></a>
<a id="schema_DatasetItemMediaReferenceField"></a>
<a id="tocSdatasetitemmediareferencefield"></a>
<a id="tocsdatasetitemmediareferencefield"></a>

```json
"input"
```

<h2 id="tocS_DatasetItemMediaReferenceMedia">DatasetItemMediaReferenceMedia</h2>
<!-- backwards compatibility -->
<a id="schemadatasetitemmediareferencemedia"></a>
<a id="schema_DatasetItemMediaReferenceMedia"></a>
<a id="tocSdatasetitemmediareferencemedia"></a>
<a id="tocsdatasetitemmediareferencemedia"></a>

```json
{
  "mediaId": "string",
  "contentType": "string",
  "contentLength": 0,
  "url": "string",
  "urlExpiry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaId|string|true|none|The unique langfuse identifier of the media record|
|contentType|string|true|none|The MIME type of the media record|
|contentLength|integer|true|none|The size of the media record in bytes|
|url|string|true|none|The signed download URL of the media record|
|urlExpiry|string|true|none|The expiry date and time of the download URL|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "id": "string",
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "tokenizerId": "string",
  "tokenizerConfig": null,
  "isLangfuseManaged": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "prices": {
    "property1": {
      "price": 0
    },
    "property2": {
      "price": 0
    }
  },
  "pricingTiers": [
    {
      "id": "string",
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ]
}
```

Model definition used for transforming usage into USD cost and/or tokenization.

Models can have either simple flat pricing or tiered pricing:
- Flat pricing: Single price per usage type (legacy, but still supported)
- Tiered pricing: Multiple pricing tiers with conditional matching based on usage patterns or observation attributes

The pricing tiers approach is recommended for models with usage-based pricing variations.
When using tiered pricing, the flat price fields (inputPrice, outputPrice, prices) are populated
from the default tier for backward compatibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|modelName|string|true|none|Name of the model definition. If multiple with the same name exist, they are applied in the following order: (1) custom over built-in, (2) newest according to startTime where model.startTime<observation.startTime|
|matchPattern|string|true|none|Regex pattern which matches this model definition to generation.model. Useful in case of fine-tuned models. If you want to exact match, use `(?i)^modelname$`|
|startDate|string(date-time) \| null|true|none|Apply only to generations which are newer than this ISO date.|
|unit|[ModelUsageUnit](#schemamodelusageunit)|false|none|Unit used by this model.|
|inputPrice|number(double) \| null|true|none|Deprecated. See 'prices' instead. Price (USD) per input unit|
|outputPrice|number(double) \| null|true|none|Deprecated. See 'prices' instead. Price (USD) per output unit|
|totalPrice|number(double) \| null|true|none|Deprecated. See 'prices' instead. Price (USD) per total unit. Cannot be set if input or output price is set.|
|tokenizerId|string \| null|true|none|Optional. Tokenizer to be applied to observations which match to this model. See docs for more details.|
|tokenizerConfig|object|true|none|Optional. Configuration for the selected tokenizer. Needs to be JSON. See docs for more details.|
|isLangfuseManaged|boolean|true|none|none|
|createdAt|string(date-time)|true|none|Timestamp when the model was created|
|prices|object|true|none|Deprecated. Use 'pricingTiers' instead for models with usage-based pricing variations.<br><br>This field shows prices by usage type from the default pricing tier. Maintained for backward compatibility.<br>If the model uses tiered pricing, this field will be populated from the default tier's prices.|
|pricingTiers|[[PricingTier](#schemapricingtier)]|true|none|Array of pricing tiers with conditional pricing based on usage thresholds or observation attributes.<br><br>Pricing tiers enable accurate cost tracking for models that charge different rates based on usage patterns<br>or request attributes (e.g., high-volume usage, large context windows, cached tokens, or service tiers).<br><br>Each model must have exactly one default tier (isDefault=true, priority=0) that serves as a fallback.<br>Additional conditional tiers can be defined with specific matching criteria.<br><br>If this array is empty, the model uses legacy flat pricing from the inputPrice/outputPrice/totalPrice fields.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|CHARACTERS|
|unit|TOKENS|
|unit|MILLISECONDS|
|unit|SECONDS|
|unit|IMAGES|
|unit|REQUESTS|

<h2 id="tocS_ModelPrice">ModelPrice</h2>
<!-- backwards compatibility -->
<a id="schemamodelprice"></a>
<a id="schema_ModelPrice"></a>
<a id="tocSmodelprice"></a>
<a id="tocsmodelprice"></a>

```json
{
  "price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|number(double)|true|none|none|

<h2 id="tocS_PricingTierCondition">PricingTierCondition</h2>
<!-- backwards compatibility -->
<a id="schemapricingtiercondition"></a>
<a id="schema_PricingTierCondition"></a>
<a id="tocSpricingtiercondition"></a>
<a id="tocspricingtiercondition"></a>

```json
{
  "usageDetailPattern": "string",
  "operator": "gt",
  "value": 0,
  "caseSensitive": true
}
```

Condition for matching a pricing tier against usage details or observation attributes.

Usage-detail conditions treat usageDetailPattern as a regex, sum all matching usage values, and compare the sum to the numeric value. Model-parameter and metadata conditions match an exact top-level key against one or more string values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PricingTierUsageCondition](#schemapricingtierusagecondition)|false|none|Condition that sums usage details whose keys match a regex.|
|*oneOf*|[PricingTierAttributeCondition](#schemapricingtierattributecondition)|false|none|Condition that matches any configured value for a top-level observation attribute.|

<h2 id="tocS_PricingTierUsageCondition">PricingTierUsageCondition</h2>
<!-- backwards compatibility -->
<a id="schemapricingtierusagecondition"></a>
<a id="schema_PricingTierUsageCondition"></a>
<a id="tocSpricingtierusagecondition"></a>
<a id="tocspricingtierusagecondition"></a>

```json
{
  "usageDetailPattern": "string",
  "operator": "gt",
  "value": 0,
  "caseSensitive": true
}
```

Condition that sums usage details whose keys match a regex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageDetailPattern|string|true|none|Regex pattern matched against usage detail keys.|
|operator|[PricingTierOperator](#schemapricingtieroperator)|true|none|Comparison operators for pricing tier conditions|
|value|number(double)|true|none|Numeric threshold for the summed matching usage values.|
|caseSensitive|boolean|true|none|Whether the usage-detail regex is case-sensitive.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|gt|
|operator|gte|
|operator|lt|
|operator|lte|
|operator|eq|
|operator|neq|

<h2 id="tocS_PricingTierAttributeCondition">PricingTierAttributeCondition</h2>
<!-- backwards compatibility -->
<a id="schemapricingtierattributecondition"></a>
<a id="schema_PricingTierAttributeCondition"></a>
<a id="tocSpricingtierattributecondition"></a>
<a id="tocspricingtierattributecondition"></a>

```json
{
  "source": "model_parameters",
  "key": "string",
  "operator": "in",
  "values": [
    "string"
  ]
}
```

Condition that matches any configured value for a top-level observation attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[PricingTierAttributeSource](#schemapricingtierattributesource)|true|none|Observation attribute object evaluated by this condition.|
|key|string|true|none|Exact top-level attribute key.|
|operator|string|true|none|Membership operator.|
|values|[string]|true|none|Accepted string attribute values. At least one value is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|model_parameters|
|source|metadata|

<h2 id="tocS_PricingTierAttributeSource">PricingTierAttributeSource</h2>
<!-- backwards compatibility -->
<a id="schemapricingtierattributesource"></a>
<a id="schema_PricingTierAttributeSource"></a>
<a id="tocSpricingtierattributesource"></a>
<a id="tocspricingtierattributesource"></a>

```json
"model_parameters"
```

<h2 id="tocS_PricingTierConditionInput">PricingTierConditionInput</h2>
<!-- backwards compatibility -->
<a id="schemapricingtierconditioninput"></a>
<a id="schema_PricingTierConditionInput"></a>
<a id="tocSpricingtierconditioninput"></a>
<a id="tocspricingtierconditioninput"></a>

```json
{
  "usageDetailPattern": "string",
  "operator": "gt",
  "value": 0,
  "caseSensitive": true
}
```

Condition input for matching a pricing tier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PricingTierUsageConditionInput](#schemapricingtierusageconditioninput)|false|none|Input condition that sums usage details whose keys match a regex.|
|*oneOf*|[PricingTierAttributeCondition](#schemapricingtierattributecondition)|false|none|Condition that matches any configured value for a top-level observation attribute.|

<h2 id="tocS_PricingTierUsageConditionInput">PricingTierUsageConditionInput</h2>
<!-- backwards compatibility -->
<a id="schemapricingtierusageconditioninput"></a>
<a id="schema_PricingTierUsageConditionInput"></a>
<a id="tocSpricingtierusageconditioninput"></a>
<a id="tocspricingtierusageconditioninput"></a>

```json
{
  "usageDetailPattern": "string",
  "operator": "gt",
  "value": 0,
  "caseSensitive": true
}
```

Input condition that sums usage details whose keys match a regex.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageDetailPattern|string|true|none|Regex pattern matched against usage detail keys.|
|operator|[PricingTierOperator](#schemapricingtieroperator)|true|none|Comparison operators for pricing tier conditions|
|value|number(double)|true|none|Numeric threshold for the summed matching usage values.|
|caseSensitive|boolean \| null|false|none|Whether the usage-detail regex is case-sensitive. Defaults to false.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|gt|
|operator|gte|
|operator|lt|
|operator|lte|
|operator|eq|
|operator|neq|

<h2 id="tocS_PricingTier">PricingTier</h2>
<!-- backwards compatibility -->
<a id="schemapricingtier"></a>
<a id="schema_PricingTier"></a>
<a id="tocSpricingtier"></a>
<a id="tocspricingtier"></a>

```json
{
  "id": "string",
  "name": "string",
  "isDefault": true,
  "priority": 0,
  "conditions": [
    {
      "usageDetailPattern": "string",
      "operator": "gt",
      "value": 0,
      "caseSensitive": true
    }
  ],
  "prices": {
    "property1": 0,
    "property2": 0
  }
}
```

Pricing tier definition with conditional pricing based on usage thresholds or observation attributes.

Pricing tiers enable accurate cost tracking for LLM providers that charge different rates based on usage patterns or request attributes.
For example, some providers charge higher rates when context size exceeds certain thresholds or when an accelerated service tier is selected.

How tier matching works:
1. Tiers are evaluated in ascending priority order (priority 1 before priority 2, etc.)
2. The first tier where ALL conditions match is selected
3. If no conditional tiers match, the default tier is used as a fallback
4. The default tier has priority 0 and no conditions

Why priorities matter:
- Lower priority numbers are evaluated first, allowing you to define specific cases before general ones
- Example: Priority 1 for "high usage" (>200K tokens), Priority 2 for "medium usage" (>100K tokens), Priority 0 for default
- Without proper ordering, a less specific condition might match before a more specific one

Every model must have exactly one default tier to ensure cost calculation always succeeds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the pricing tier|
|name|string|true|none|Name of the pricing tier for display and identification purposes.<br><br>Examples: "Standard", "High Volume Tier", "Large Context", "Extended Context Tier"|
|isDefault|boolean|true|none|Whether this is the default tier. Every model must have exactly one default tier with priority 0 and no conditions.<br><br>The default tier serves as a fallback when no conditional tiers match, ensuring cost calculation always succeeds.<br>It typically represents the base pricing for standard usage patterns.|
|priority|integer|true|none|Priority for tier matching evaluation. Lower numbers = higher priority (evaluated first).<br><br>The default tier must always have priority 0. Conditional tiers should have priority 1, 2, 3, etc.<br><br>Example ordering:<br>- Priority 0: Default tier (no conditions, always matches as fallback)<br>- Priority 1: High usage tier (e.g., >200K tokens)<br>- Priority 2: Medium usage tier (e.g., >100K tokens)<br><br>This ensures more specific conditions are checked before general ones.|
|conditions|[[PricingTierCondition](#schemapricingtiercondition)]|true|none|Array of conditions that must ALL be met for this tier to match (AND logic).<br><br>The default tier must have an empty conditions array. Conditional tiers should have one or more conditions<br>that define when this tier's pricing applies.<br><br>Multiple conditions enable complex matching scenarios (e.g., "high input tokens AND low output tokens").|
|prices|object|true|none|Prices (USD) by usage type for this tier.<br><br>Common usage types: "input", "output", "total", "request", "image"<br>Prices are specified in USD per unit (e.g., per token, per request, per second).<br><br>Example: {"input": 0.000003, "output": 0.000015} means $3 per million input tokens and $15 per million output tokens.|

<h2 id="tocS_PricingTierInput">PricingTierInput</h2>
<!-- backwards compatibility -->
<a id="schemapricingtierinput"></a>
<a id="schema_PricingTierInput"></a>
<a id="tocSpricingtierinput"></a>
<a id="tocspricingtierinput"></a>

```json
{
  "name": "string",
  "isDefault": true,
  "priority": 0,
  "conditions": [
    {
      "usageDetailPattern": "string",
      "operator": "gt",
      "value": 0,
      "caseSensitive": true
    }
  ],
  "prices": {
    "property1": 0,
    "property2": 0
  }
}
```

Input schema for creating a pricing tier. The tier ID will be automatically generated server-side.

When creating a model with pricing tiers:
- Exactly one tier must have isDefault=true (the fallback tier)
- The default tier must have priority=0 and conditions=[]
- All tier names and priorities must be unique within the model
- Each tier must define at least one price

See PricingTier for detailed information about how tiers work and why they're useful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the pricing tier for display and identification purposes.<br><br>Must be unique within the model. Common patterns: "Standard", "High Volume Tier", "Extended Context"|
|isDefault|boolean \| null|false|none|Whether this is the default tier. Exactly one tier per model must be marked as default.<br><br>Requirements for default tier:<br>- Must have isDefault=true<br>- Must have priority=0<br>- Must have empty conditions array (conditions=[])<br><br>The default tier acts as a fallback when no conditional tiers match. Defaults to false when omitted.|
|priority|integer|true|none|Priority for tier matching evaluation. Lower numbers = higher priority (evaluated first).<br><br>Must be unique within the model. The default tier must have priority=0.<br>Conditional tiers should use priority 1, 2, 3, etc. based on their specificity.|
|conditions|[[PricingTierConditionInput](#schemapricingtierconditioninput)]|true|none|Array of conditions that must ALL be met for this tier to match (AND logic).<br><br>The default tier must have an empty array (conditions=[]).<br>Conditional tiers should define one or more conditions that specify when this tier's pricing applies.<br><br>Conditions can compare summed matching usage details to a numeric threshold, or exactly match a top-level model parameter or metadata value.|
|prices|object|true|none|Prices (USD) by usage type for this tier. At least one price must be defined.<br><br>Common usage types: "input", "output", "total", "request", "image"<br>Prices are in USD per unit (e.g., per token).<br><br>Example: {"input": 0.000003, "output": 0.000015} represents $3 per million input tokens and $15 per million output tokens.|

<h2 id="tocS_PricingTierOperator">PricingTierOperator</h2>
<!-- backwards compatibility -->
<a id="schemapricingtieroperator"></a>
<a id="schema_PricingTierOperator"></a>
<a id="tocSpricingtieroperator"></a>
<a id="tocspricingtieroperator"></a>

```json
"gt"
```

Comparison operators for pricing tier conditions

<h2 id="tocS_ModelUsageUnit">ModelUsageUnit</h2>
<!-- backwards compatibility -->
<a id="schemamodelusageunit"></a>
<a id="schema_ModelUsageUnit"></a>
<a id="tocSmodelusageunit"></a>
<a id="tocsmodelusageunit"></a>

```json
"CHARACTERS"
```

Unit of usage in Langfuse

<h2 id="tocS_ObservationLevel">ObservationLevel</h2>
<!-- backwards compatibility -->
<a id="schemaobservationlevel"></a>
<a id="schema_ObservationLevel"></a>
<a id="tocSobservationlevel"></a>
<a id="tocsobservationlevel"></a>

```json
"DEBUG"
```

<h2 id="tocS_MapValue">MapValue</h2>
<!-- backwards compatibility -->
<a id="schemamapvalue"></a>
<a id="schema_MapValue"></a>
<a id="tocSmapvalue"></a>
<a id="tocsmapvalue"></a>

```json
"string"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string \| null|false|none|none|
|*oneOf*|integer \| null|false|none|none|
|*oneOf*|number(float) \| null|false|none|none|
|*oneOf*|boolean \| null|false|none|none|
|*oneOf*|[string]|false|none|none|

<h2 id="tocS_CommentObjectType">CommentObjectType</h2>
<!-- backwards compatibility -->
<a id="schemacommentobjecttype"></a>
<a id="schema_CommentObjectType"></a>
<a id="tocScommentobjecttype"></a>
<a id="tocscommentobjecttype"></a>

```json
"TRACE"
```

<h2 id="tocS_DatasetStatus">DatasetStatus</h2>
<!-- backwards compatibility -->
<a id="schemadatasetstatus"></a>
<a id="schema_DatasetStatus"></a>
<a id="tocSdatasetstatus"></a>
<a id="tocsdatasetstatus"></a>

```json
"ACTIVE"
```

<h2 id="tocS_ScoreSource">ScoreSource</h2>
<!-- backwards compatibility -->
<a id="schemascoresource"></a>
<a id="schema_ScoreSource"></a>
<a id="tocSscoresource"></a>
<a id="tocsscoresource"></a>

```json
"ANNOTATION"
```

<h2 id="tocS_ScoreConfigDataType">ScoreConfigDataType</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfigdatatype"></a>
<a id="schema_ScoreConfigDataType"></a>
<a id="tocSscoreconfigdatatype"></a>
<a id="tocsscoreconfigdatatype"></a>

```json
"NUMERIC"
```

<h2 id="tocS_ScoreDataType">ScoreDataType</h2>
<!-- backwards compatibility -->
<a id="schemascoredatatype"></a>
<a id="schema_ScoreDataType"></a>
<a id="tocSscoredatatype"></a>
<a id="tocsscoredatatype"></a>

```json
"NUMERIC"
```

<h2 id="tocS_OpenAIUsage">OpenAIUsage</h2>
<!-- backwards compatibility -->
<a id="schemaopenaiusage"></a>
<a id="schema_OpenAIUsage"></a>
<a id="tocSopenaiusage"></a>
<a id="tocsopenaiusage"></a>

```json
{
  "promptTokens": 0,
  "completionTokens": 0,
  "totalTokens": 0
}
```

Usage interface of OpenAI for improved compatibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|promptTokens|integer \| null|false|none|none|
|completionTokens|integer \| null|false|none|none|
|totalTokens|integer \| null|false|none|none|

<h2 id="tocS_DeleteDatasetItemResponse">DeleteDatasetItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedatasetitemresponse"></a>
<a id="schema_DeleteDatasetItemResponse"></a>
<a id="tocSdeletedatasetitemresponse"></a>
<a id="tocsdeletedatasetitemresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Success message after deletion|

<h2 id="tocS_CreateDatasetItemRequest">CreateDatasetItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetitemrequest"></a>
<a id="schema_CreateDatasetItemRequest"></a>
<a id="tocScreatedatasetitemrequest"></a>
<a id="tocscreatedatasetitemrequest"></a>

```json
{
  "datasetName": "string",
  "input": null,
  "expectedOutput": null,
  "metadata": null,
  "sourceTraceId": "string",
  "sourceObservationId": "string",
  "id": "string",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetName|string|true|none|none|
|input|object \| null|false|none|none|
|expectedOutput|object \| null|false|none|none|
|metadata|object \| null|false|none|none|
|sourceTraceId|string \| null|false|none|none|
|sourceObservationId|string \| null|false|none|none|
|id|string \| null|false|none|Dataset items are upserted on their id. Id needs to be unique (project-level), cannot be reused across datasets, and must be at most 255 characters.|
|status|[DatasetStatus](#schemadatasetstatus)|false|none|Defaults to ACTIVE for newly created items|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|ARCHIVED|

<h2 id="tocS_PaginatedDatasetItems">PaginatedDatasetItems</h2>
<!-- backwards compatibility -->
<a id="schemapaginateddatasetitems"></a>
<a id="schema_PaginatedDatasetItems"></a>
<a id="tocSpaginateddatasetitems"></a>
<a id="tocspaginateddatasetitems"></a>

```json
{
  "data": [
    {
      "id": "string",
      "status": "ACTIVE",
      "input": null,
      "expectedOutput": null,
      "metadata": null,
      "sourceTraceId": "string",
      "sourceObservationId": "string",
      "datasetId": "string",
      "datasetName": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "version": "1970-01-01T00:00:00Z",
      "mediaReferences": [
        {
          "field": "input",
          "referenceString": "string",
          "jsonPath": "string",
          "media": {
            "mediaId": "string",
            "contentType": "string",
            "contentLength": 0,
            "url": "string",
            "urlExpiry": "string"
          }
        }
      ]
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DatasetItem](#schemadatasetitem)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_PaginatedDatasets">PaginatedDatasets</h2>
<!-- backwards compatibility -->
<a id="schemapaginateddatasets"></a>
<a id="schema_PaginatedDatasets"></a>
<a id="tocSpaginateddatasets"></a>
<a id="tocspaginateddatasets"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "metadata": null,
      "inputSchema": {},
      "expectedOutputSchema": {},
      "projectId": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Dataset](#schemadataset)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_CreateDatasetRequest">CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatasetrequest"></a>
<a id="schema_CreateDatasetRequest"></a>
<a id="tocScreatedatasetrequest"></a>
<a id="tocscreatedatasetrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "metadata": null,
  "inputSchema": null,
  "expectedOutputSchema": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|inputSchema|object \| null|false|none|JSON Schema for validating dataset item inputs. When set, all new and existing dataset items will be validated against this schema.|
|expectedOutputSchema|object \| null|false|none|JSON Schema for validating dataset item expected outputs. When set, all new and existing dataset items will be validated against this schema.|

<h2 id="tocS_EvaluatorType">EvaluatorType</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatortype"></a>
<a id="schema_EvaluatorType"></a>
<a id="tocSevaluatortype"></a>
<a id="tocsevaluatortype"></a>

```json
"llm_as_judge"
```

The evaluator type.

The public API supports LLM-as-a-judge and code evaluators.

<h2 id="tocS_CodeEvaluatorSourceCodeLanguage">CodeEvaluatorSourceCodeLanguage</h2>
<!-- backwards compatibility -->
<a id="schemacodeevaluatorsourcecodelanguage"></a>
<a id="schema_CodeEvaluatorSourceCodeLanguage"></a>
<a id="tocScodeevaluatorsourcecodelanguage"></a>
<a id="tocscodeevaluatorsourcecodelanguage"></a>

```json
"PYTHON"
```

Code evaluator runtime language.

<h2 id="tocS_PromptVariableMappingSource">PromptVariableMappingSource</h2>
<!-- backwards compatibility -->
<a id="schemapromptvariablemappingsource"></a>
<a id="schema_PromptVariableMappingSource"></a>
<a id="tocSpromptvariablemappingsource"></a>
<a id="tocspromptvariablemappingsource"></a>

```json
"input"
```

Source field used to populate a prompt variable.

Use these values when mapping evaluator prompt variables to live data.

Source semantics:
- `input`: the observation input payload
- `output`: the observation output payload
- `metadata`: the observation metadata object. Combine with `jsonPath` when you need one nested field instead of the whole object.
- `tool_calls`: the tool calls recorded on the observation, as an array of `{id, name, arguments, type, index}` objects in the order the model emitted them. Combine with `jsonPath` (for example `$[*].name`) to select parts of each call.
- `expected_output`: the experiment item's expected output when the observation belongs to an experiment.
- `experiment_item_metadata`: the experiment item's metadata when the observation belongs to an experiment.

<h2 id="tocS_EvaluatorOutputScoreType">EvaluatorOutputScoreType</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatoroutputscoretype"></a>
<a id="schema_EvaluatorOutputScoreType"></a>
<a id="tocSevaluatoroutputscoretype"></a>
<a id="tocsevaluatoroutputscoretype"></a>

```json
"NUMERIC"
```

Structured score type returned by an evaluator.

This controls the type of score value Langfuse stores for evaluation results:
- `NUMERIC`: a numeric score such as `0.82`
- `BOOLEAN`: a boolean score such as `true`
- `CATEGORICAL`: one or more category labels from a fixed list

<h2 id="tocS_EvaluatorOutputDefinition">EvaluatorOutputDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatoroutputdefinition"></a>
<a id="schema_EvaluatorOutputDefinition"></a>
<a id="tocSevaluatoroutputdefinition"></a>
<a id="tocsevaluatoroutputdefinition"></a>

```json
{
  "dataType": "NUMERIC",
  "scoreReasoningInstructions": "string",
  "scoreValueInstructions": "string",
  "minValue": 0,
  "maxValue": 0
}
```

Flat structured output definition used when creating or updating an evaluator.

- `dataType` is required.
- `scoreReasoningInstructions` and `scoreValueInstructions` are optional instructions.
- `minValue` and `maxValue` apply only to `NUMERIC` outputs. If both are set, `minValue` must not exceed `maxValue`.
- `categories` and `shouldAllowMultipleMatches` apply only to `CATEGORICAL` outputs.
- Do not send `version`; that is an internal storage detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Numeric score output.|
|minValue|number(double) \| null|false|none|Optional inclusive minimum value.|
|maxValue|number(double) \| null|false|none|Optional inclusive maximum value.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Boolean score output.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Categorical score output.|
|categories|[string]|true|none|Allowed category values. At least two unique values are required.|
|shouldAllowMultipleMatches|boolean|true|none|Whether the evaluator may return more than one category.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|dataType|BOOLEAN|
|dataType|CATEGORICAL|

<h2 id="tocS_EvaluatorOutputDefinitionBase">EvaluatorOutputDefinitionBase</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatoroutputdefinitionbase"></a>
<a id="schema_EvaluatorOutputDefinitionBase"></a>
<a id="tocSevaluatoroutputdefinitionbase"></a>
<a id="tocsevaluatoroutputdefinitionbase"></a>

```json
{
  "scoreReasoningInstructions": "string",
  "scoreValueInstructions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|

<h2 id="tocS_PublicEvaluatorNumericScore">PublicEvaluatorNumericScore</h2>
<!-- backwards compatibility -->
<a id="schemapublicevaluatornumericscore"></a>
<a id="schema_PublicEvaluatorNumericScore"></a>
<a id="tocSpublicevaluatornumericscore"></a>
<a id="tocspublicevaluatornumericscore"></a>

```json
{
  "scoreReasoningInstructions": "string",
  "scoreValueInstructions": "string",
  "dataType": "NUMERIC",
  "minValue": 0,
  "maxValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Numeric score output.|
|minValue|number(double) \| null|false|none|Optional inclusive minimum value.|
|maxValue|number(double) \| null|false|none|Optional inclusive maximum value.|

<h2 id="tocS_PublicEvaluatorBooleanScore">PublicEvaluatorBooleanScore</h2>
<!-- backwards compatibility -->
<a id="schemapublicevaluatorbooleanscore"></a>
<a id="schema_PublicEvaluatorBooleanScore"></a>
<a id="tocSpublicevaluatorbooleanscore"></a>
<a id="tocspublicevaluatorbooleanscore"></a>

```json
{
  "scoreReasoningInstructions": "string",
  "scoreValueInstructions": "string",
  "dataType": "BOOLEAN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Boolean score output.|

<h2 id="tocS_PublicEvaluatorCategoricalScore">PublicEvaluatorCategoricalScore</h2>
<!-- backwards compatibility -->
<a id="schemapublicevaluatorcategoricalscore"></a>
<a id="schema_PublicEvaluatorCategoricalScore"></a>
<a id="tocSpublicevaluatorcategoricalscore"></a>
<a id="tocspublicevaluatorcategoricalscore"></a>

```json
{
  "scoreReasoningInstructions": "string",
  "scoreValueInstructions": "string",
  "dataType": "CATEGORICAL",
  "categories": [
    "string"
  ],
  "shouldAllowMultipleMatches": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Categorical score output.|
|categories|[string]|true|none|Allowed category values. At least two unique values are required.|
|shouldAllowMultipleMatches|boolean|true|none|Whether the evaluator may return more than one category.|

<h2 id="tocS_PublicEvaluatorOutputDefinition">PublicEvaluatorOutputDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapublicevaluatoroutputdefinition"></a>
<a id="schema_PublicEvaluatorOutputDefinition"></a>
<a id="tocSpublicevaluatoroutputdefinition"></a>
<a id="tocspublicevaluatoroutputdefinition"></a>

```json
{
  "dataType": "NUMERIC",
  "scoreReasoningInstructions": "string",
  "scoreValueInstructions": "string",
  "minValue": 0,
  "maxValue": 0
}
```

Flat evaluator output definition returned by the public API.

This response always includes `dataType` and never includes an internal output-definition `version`.
Optional empty descriptions from legacy definitions are omitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Numeric score output.|
|minValue|number(double) \| null|false|none|Optional inclusive minimum value.|
|maxValue|number(double) \| null|false|none|Optional inclusive maximum value.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Boolean score output.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|scoreReasoningInstructions|string \| null|false|none|Optional instructions for deriving the reasoning returned with the score.|
|scoreValueInstructions|string \| null|false|none|Optional instructions for deriving the score value.|
|dataType|string|true|none|Categorical score output.|
|categories|[string]|true|none|Allowed category values. At least two unique values are required.|
|shouldAllowMultipleMatches|boolean|true|none|Whether the evaluator may return more than one category.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|dataType|BOOLEAN|
|dataType|CATEGORICAL|

<h2 id="tocS_EvaluationRuleStringFilterOperator">EvaluationRuleStringFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulestringfilteroperator"></a>
<a id="schema_EvaluationRuleStringFilterOperator"></a>
<a id="tocSevaluationrulestringfilteroperator"></a>
<a id="tocsevaluationrulestringfilteroperator"></a>

```json
"="
```

<h2 id="tocS_EvaluationRuleStringObjectFilterOperator">EvaluationRuleStringObjectFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulestringobjectfilteroperator"></a>
<a id="schema_EvaluationRuleStringObjectFilterOperator"></a>
<a id="tocSevaluationrulestringobjectfilteroperator"></a>
<a id="tocsevaluationrulestringobjectfilteroperator"></a>

```json
"="
```

<h2 id="tocS_EvaluationRuleNumberFilterOperator">EvaluationRuleNumberFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulenumberfilteroperator"></a>
<a id="schema_EvaluationRuleNumberFilterOperator"></a>
<a id="tocSevaluationrulenumberfilteroperator"></a>
<a id="tocsevaluationrulenumberfilteroperator"></a>

```json
"="
```

<h2 id="tocS_EvaluationRuleOptionsFilterOperator">EvaluationRuleOptionsFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationruleoptionsfilteroperator"></a>
<a id="schema_EvaluationRuleOptionsFilterOperator"></a>
<a id="tocSevaluationruleoptionsfilteroperator"></a>
<a id="tocsevaluationruleoptionsfilteroperator"></a>

```json
"any of"
```

<h2 id="tocS_EvaluationRuleArrayOptionsFilterOperator">EvaluationRuleArrayOptionsFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulearrayoptionsfilteroperator"></a>
<a id="schema_EvaluationRuleArrayOptionsFilterOperator"></a>
<a id="tocSevaluationrulearrayoptionsfilteroperator"></a>
<a id="tocsevaluationrulearrayoptionsfilteroperator"></a>

```json
"any of"
```

<h2 id="tocS_EvaluationRuleBooleanFilterOperator">EvaluationRuleBooleanFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulebooleanfilteroperator"></a>
<a id="schema_EvaluationRuleBooleanFilterOperator"></a>
<a id="tocSevaluationrulebooleanfilteroperator"></a>
<a id="tocsevaluationrulebooleanfilteroperator"></a>

```json
"="
```

<h2 id="tocS_EvaluationRuleNullFilterOperator">EvaluationRuleNullFilterOperator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulenullfilteroperator"></a>
<a id="schema_EvaluationRuleNullFilterOperator"></a>
<a id="tocSevaluationrulenullfilteroperator"></a>
<a id="tocsevaluationrulenullfilteroperator"></a>

```json
"is null"
```

<h2 id="tocS_DateTimeEvaluationRuleFilter">DateTimeEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemadatetimeevaluationrulefilter"></a>
<a id="schema_DateTimeEvaluationRuleFilter"></a>
<a id="tocSdatetimeevaluationrulefilter"></a>
<a id="tocsdatetimeevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "=",
  "value": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleNumberFilterOperator](#schemaevaluationrulenumberfilteroperator)|true|none|Comparison operator for datetime values.|
|value|string(date-time)|true|none|Datetime value to compare against.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|=|
|operator|>|
|operator|<|
|operator|>=|
|operator|<=|

<h2 id="tocS_StringEvaluationRuleFilter">StringEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemastringevaluationrulefilter"></a>
<a id="schema_StringEvaluationRuleFilter"></a>
<a id="tocSstringevaluationrulefilter"></a>
<a id="tocsstringevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "=",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleStringFilterOperator](#schemaevaluationrulestringfilteroperator)|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|=|
|operator|contains|
|operator|does not contain|
|operator|starts with|
|operator|ends with|

<h2 id="tocS_NumberEvaluationRuleFilter">NumberEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemanumberevaluationrulefilter"></a>
<a id="schema_NumberEvaluationRuleFilter"></a>
<a id="tocSnumberevaluationrulefilter"></a>
<a id="tocsnumberevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "=",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleNumberFilterOperator](#schemaevaluationrulenumberfilteroperator)|true|none|none|
|value|number(double)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|=|
|operator|>|
|operator|<|
|operator|>=|
|operator|<=|

<h2 id="tocS_StringOptionsEvaluationRuleFilter">StringOptionsEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemastringoptionsevaluationrulefilter"></a>
<a id="schema_StringOptionsEvaluationRuleFilter"></a>
<a id="tocSstringoptionsevaluationrulefilter"></a>
<a id="tocsstringoptionsevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "any of",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleOptionsFilterOperator](#schemaevaluationruleoptionsfilteroperator)|true|none|none|
|value|[string]|true|none|One or more allowed string values.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|any of|
|operator|none of|

<h2 id="tocS_ArrayOptionsEvaluationRuleFilter">ArrayOptionsEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemaarrayoptionsevaluationrulefilter"></a>
<a id="schema_ArrayOptionsEvaluationRuleFilter"></a>
<a id="tocSarrayoptionsevaluationrulefilter"></a>
<a id="tocsarrayoptionsevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "any of",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleArrayOptionsFilterOperator](#schemaevaluationrulearrayoptionsfilteroperator)|true|none|none|
|value|[string]|true|none|One or more array elements to match.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|any of|
|operator|none of|
|operator|all of|

<h2 id="tocS_StringObjectEvaluationRuleFilter">StringObjectEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemastringobjectevaluationrulefilter"></a>
<a id="schema_StringObjectEvaluationRuleFilter"></a>
<a id="tocSstringobjectevaluationrulefilter"></a>
<a id="tocsstringobjectevaluationrulefilter"></a>

```json
{
  "column": "string",
  "key": "string",
  "operator": "=",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Object-valued column to filter on. Currently only `metadata` is supported.|
|key|string|true|none|Top-level key inside the object-valued column to filter on.|
|operator|[EvaluationRuleStringObjectFilterOperator](#schemaevaluationrulestringobjectfilteroperator)|true|none|Use `is set` / `is not set` to filter on key presence.|
|value|string|true|none|Value to compare against. Ignored for `is set` / `is not set`; send `""`.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|=|
|operator|contains|
|operator|does not contain|
|operator|starts with|
|operator|ends with|
|operator|is set|
|operator|is not set|

<h2 id="tocS_NumberObjectEvaluationRuleFilter">NumberObjectEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemanumberobjectevaluationrulefilter"></a>
<a id="schema_NumberObjectEvaluationRuleFilter"></a>
<a id="tocSnumberobjectevaluationrulefilter"></a>
<a id="tocsnumberobjectevaluationrulefilter"></a>

```json
{
  "column": "string",
  "key": "string",
  "operator": "=",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Object-valued column to filter on.|
|key|string|true|none|Key inside the object-valued column to filter on.|
|operator|[EvaluationRuleNumberFilterOperator](#schemaevaluationrulenumberfilteroperator)|true|none|none|
|value|number(double)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|=|
|operator|>|
|operator|<|
|operator|>=|
|operator|<=|

<h2 id="tocS_CategoryOptionsEvaluationRuleFilter">CategoryOptionsEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemacategoryoptionsevaluationrulefilter"></a>
<a id="schema_CategoryOptionsEvaluationRuleFilter"></a>
<a id="tocScategoryoptionsevaluationrulefilter"></a>
<a id="tocscategoryoptionsevaluationrulefilter"></a>

```json
{
  "column": "string",
  "key": "string",
  "operator": "any of",
  "value": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Object-valued column to filter on.|
|key|string|true|none|Key inside the object-valued column to filter on.|
|operator|[EvaluationRuleOptionsFilterOperator](#schemaevaluationruleoptionsfilteroperator)|true|none|none|
|value|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|any of|
|operator|none of|

<h2 id="tocS_BooleanEvaluationRuleFilter">BooleanEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemabooleanevaluationrulefilter"></a>
<a id="schema_BooleanEvaluationRuleFilter"></a>
<a id="tocSbooleanevaluationrulefilter"></a>
<a id="tocsbooleanevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "=",
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleBooleanFilterOperator](#schemaevaluationrulebooleanfilteroperator)|true|none|none|
|value|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|=|
|operator|<>|

<h2 id="tocS_NullEvaluationRuleFilter">NullEvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemanullevaluationrulefilter"></a>
<a id="schema_NullEvaluationRuleFilter"></a>
<a id="tocSnullevaluationrulefilter"></a>
<a id="tocsnullevaluationrulefilter"></a>

```json
{
  "column": "string",
  "operator": "is null",
  "value": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|Column to filter on, for example `parentObservationId`.|
|operator|[EvaluationRuleNullFilterOperator](#schemaevaluationrulenullfilteroperator)|true|none|none|
|value|string|true|none|Required empty-string placeholder used by the runtime filter contract.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|is null|
|operator|is not null|

<h2 id="tocS_PromptVariableMappingInput">PromptVariableMappingInput</h2>
<!-- backwards compatibility -->
<a id="schemapromptvariablemappinginput"></a>
<a id="schema_PromptVariableMappingInput"></a>
<a id="tocSpromptvariablemappinginput"></a>
<a id="tocspromptvariablemappinginput"></a>

```json
{
  "variable": "string",
  "source": "input",
  "jsonPath": "string"
}
```

Connects one prompt variable to data from an observation or experiment.

Manual mappings are used for `llm_as_judge` evaluators. `code` evaluators use a fixed runtime mapping managed by Langfuse.

How to build a valid mapping list:
1. Create the evaluator or fetch it with `GET /evaluators/{id}`.
2. Read the evaluator `variables` array.
3. Add exactly one mapping object for each variable in that array.
4. Use the variable name exactly as returned, without braces such as `{{` or `}}`.
5. Choose the source field that should populate the variable.

`jsonPath` is optional. Use it only when the selected source is a JSON object and you want to extract one nested field before inserting it into the evaluator prompt.

Invalid, missing, or duplicate mappings return a validation error. Malformed JSONPath expressions are also rejected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variable|string|true|none|Prompt variable name without braces.<br><br>Example: for the prompt `Judge {{input}} against {{output}}`, use `input` and `output`.|
|source|[PromptVariableMappingSource](#schemapromptvariablemappingsource)|true|none|Source field that should populate the prompt variable.<br><br>Available sources are `input`, `output`, `metadata`, `tool_calls`, `expected_output`, and `experiment_item_metadata`.|
|jsonPath|string \| null|false|none|Optional JSONPath selector applied to the selected source before it is passed to the evaluator prompt.<br><br>Requirements:<br>- Must start with `$`<br>- Must be a syntactically valid JSONPath expression<br>- Most useful with `source=metadata`|

#### Enumerated Values

|Property|Value|
|---|---|
|source|input|
|source|output|
|source|metadata|
|source|tool_calls|
|source|expected_output|
|source|experiment_item_metadata|

<h2 id="tocS_PromptVariableMappingRead">PromptVariableMappingRead</h2>
<!-- backwards compatibility -->
<a id="schemapromptvariablemappingread"></a>
<a id="schema_PromptVariableMappingRead"></a>
<a id="tocSpromptvariablemappingread"></a>
<a id="tocspromptvariablemappingread"></a>

```json
{
  "variable": "string",
  "source": "string",
  "jsonPath": "string"
}
```

Connects one prompt variable to source data.

`source` is `null` when the mapping is incomplete.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variable|string|true|none|Prompt variable name without braces.|
|source|string \| null|true|none|Stored source field populating the variable, or `null` when the mapping is incomplete.|
|jsonPath|string \| null|false|none|Optional JSONPath selector applied to the selected source.|

<h2 id="tocS_PromptVariableMapping">PromptVariableMapping</h2>
<!-- backwards compatibility -->
<a id="schemapromptvariablemapping"></a>
<a id="schema_PromptVariableMapping"></a>
<a id="tocSpromptvariablemapping"></a>
<a id="tocspromptvariablemapping"></a>

```json
{
  "variable": "string",
  "source": "string",
  "jsonPath": "string"
}
```

Connects one prompt variable to source data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PromptVariableMappingRead](#schemapromptvariablemappingread)|false|none|Connects one prompt variable to source data.<br><br>`source` is `null` when the mapping is incomplete.|
|*oneOf*|[LegacyPromptVariableMapping](#schemalegacypromptvariablemapping)|false|none|**Deprecated:** Connects one prompt variable to data from a legacy trace or dataset evaluation rule.<br><br>`langfuseObject` selects the object kind. `objectName` separately selects a named observation and is `null` for trace and dataset-item mappings.|

<h2 id="tocS_LegacyPromptVariableMapping">LegacyPromptVariableMapping</h2>
<!-- backwards compatibility -->
<a id="schemalegacypromptvariablemapping"></a>
<a id="schema_LegacyPromptVariableMapping"></a>
<a id="tocSlegacypromptvariablemapping"></a>
<a id="tocslegacypromptvariablemapping"></a>

```json
{
  "mappingType": "legacy",
  "variable": "string",
  "langfuseObject": "trace",
  "objectName": "string",
  "source": "string",
  "jsonPath": "string"
}
```

**Deprecated:** Connects one prompt variable to data from a legacy trace or dataset evaluation rule.

`langfuseObject` selects the object kind. `objectName` separately selects a named observation and is `null` for trace and dataset-item mappings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mappingType|string|true|none|Explicitly marks this as a legacy mapping.|
|variable|string|true|none|Prompt variable name without braces.|
|langfuseObject|[LegacyEvaluationObject](#schemalegacyevaluationobject)|true|none|Legacy object kind selected as the mapping source.|
|objectName|string \| null|true|none|Observation name to match, or `null` when `langfuseObject` is `trace` or `dataset_item`.|
|source|string|true|none|Field selected from the legacy object.|
|jsonPath|string \| null|false|none|Optional JSONPath selector applied to the selected field.|

#### Enumerated Values

|Property|Value|
|---|---|
|langfuseObject|trace|
|langfuseObject|span|
|langfuseObject|generation|
|langfuseObject|event|
|langfuseObject|agent|
|langfuseObject|tool|
|langfuseObject|chain|
|langfuseObject|retriever|
|langfuseObject|evaluator|
|langfuseObject|embedding|
|langfuseObject|guardrail|
|langfuseObject|dataset_item|

<h2 id="tocS_LegacyEvaluationObject">LegacyEvaluationObject</h2>
<!-- backwards compatibility -->
<a id="schemalegacyevaluationobject"></a>
<a id="schema_LegacyEvaluationObject"></a>
<a id="tocSlegacyevaluationobject"></a>
<a id="tocslegacyevaluationobject"></a>

```json
"trace"
```

**Deprecated:** Legacy Langfuse object kind used by trace and dataset evaluation rules.

<h2 id="tocS_EvaluationRuleFilter">EvaluationRuleFilter</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulefilter"></a>
<a id="schema_EvaluationRuleFilter"></a>
<a id="tocSevaluationrulefilter"></a>
<a id="tocsevaluationrulefilter"></a>

```json
{
  "type": "datetime",
  "column": "string",
  "operator": "=",
  "value": "1970-01-01T00:00:00Z"
}
```

One filter condition used to decide whether a live-ingested observation should be evaluated.

All filters must be satisfied for the rule to run. Experiment scope is expressed with filters rather than a separate target field:
- `isExperimentItemRootSpan = true` limits execution to experiment item roots.
- `datasetId` limits execution to experiments for the selected datasets. Use dataset IDs from `GET /api/public/v2/datasets`.

Pick the filter `type` first, as it determines the required fields and value shape. Use `key` only for object filters such as `metadata`.

Operator quick reference by filter `type`:
- `string`: `"="`, `contains`, `does not contain`, `starts with`, `ends with`
- `number`: `"="`, `">"`, `"<"`, `">="`, `"<="`
- `datetime`: `"="`, `">"`, `"<"`, `">="`, `"<="`
- `stringOptions`: `any of`, `none of`
- `arrayOptions`: `any of`, `none of`, `all of`
- `stringObject`: `"="`, `contains`, `does not contain`, `starts with`, `ends with`, `is set`, `is not set` (use `is set` / `is not set` for key presence; an empty value for `contains`, `starts with`, or `ends with` is treated as `is set`)
- `boolean`: `"="`, `"<>"`
- `null`: `is null`, `is not null`

Supported columns. Each column accepts exactly one filter `type`; sending a column with a different `type` is rejected with `400`.
- `type`: `stringOptions`, values `SPAN`, `EVENT`, `GENERATION`, `AGENT`, `TOOL`, `CHAIN`, `RETRIEVER`, `EVALUATOR`, `EMBEDDING`, `GUARDRAIL`
- `name`: `stringOptions`
- `environment`: `stringOptions`
- `level`: `stringOptions`, values `DEBUG`, `DEFAULT`, `WARNING`, `ERROR`
- `version`: `string`
- `traceName`: `stringOptions`
- `userId`: `string`
- `sessionId`: `string`
- `tags`: `arrayOptions`
- `metadata`: `stringObject`, requires `key`
- `isRootObservation`: `boolean`; true when the observation has no parent or is explicitly marked as an application root
- `parentObservationId`: `null`
- `experimentId`: `stringOptions`
- `isExperimentItemRootSpan`: `boolean`
- `calledToolNames`: `arrayOptions`
- `toolCalls`: `number`, the number of tool calls on the observation
- `datasetId`: `stringOptions`. Use dataset `id` values from `GET /api/public/v2/datasets`, not dataset names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleNumberFilterOperator](#schemaevaluationrulenumberfilteroperator)|true|none|Comparison operator for datetime values.|
|value|string(date-time)|true|none|Datetime value to compare against.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleStringFilterOperator](#schemaevaluationrulestringfilteroperator)|true|none|none|
|value|string|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleNumberFilterOperator](#schemaevaluationrulenumberfilteroperator)|true|none|none|
|value|number(double)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleOptionsFilterOperator](#schemaevaluationruleoptionsfilteroperator)|true|none|none|
|value|[string]|true|none|One or more allowed string values.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Object-valued column to filter on.|
|key|string|true|none|Key inside the object-valued column to filter on.|
|operator|[EvaluationRuleOptionsFilterOperator](#schemaevaluationruleoptionsfilteroperator)|true|none|none|
|value|[string]|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleArrayOptionsFilterOperator](#schemaevaluationrulearrayoptionsfilteroperator)|true|none|none|
|value|[string]|true|none|One or more array elements to match.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Object-valued column to filter on. Currently only `metadata` is supported.|
|key|string|true|none|Top-level key inside the object-valued column to filter on.|
|operator|[EvaluationRuleStringObjectFilterOperator](#schemaevaluationrulestringobjectfilteroperator)|true|none|Use `is set` / `is not set` to filter on key presence.|
|value|string|true|none|Value to compare against. Ignored for `is set` / `is not set`; send `""`.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Object-valued column to filter on.|
|key|string|true|none|Key inside the object-valued column to filter on.|
|operator|[EvaluationRuleNumberFilterOperator](#schemaevaluationrulenumberfilteroperator)|true|none|none|
|value|number(double)|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on.|
|operator|[EvaluationRuleBooleanFilterOperator](#schemaevaluationrulebooleanfilteroperator)|true|none|none|
|value|boolean|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|column|string|true|none|Column to filter on, for example `parentObservationId`.|
|operator|[EvaluationRuleNullFilterOperator](#schemaevaluationrulenullfilteroperator)|true|none|none|
|value|string|true|none|Required empty-string placeholder used by the runtime filter contract.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|datetime|
|operator|=|
|operator|>|
|operator|<|
|operator|>=|
|operator|<=|
|type|string|
|operator|=|
|operator|contains|
|operator|does not contain|
|operator|starts with|
|operator|ends with|
|type|number|
|operator|=|
|operator|>|
|operator|<|
|operator|>=|
|operator|<=|
|type|stringOptions|
|operator|any of|
|operator|none of|
|type|categoryOptions|
|operator|any of|
|operator|none of|
|type|arrayOptions|
|operator|any of|
|operator|none of|
|operator|all of|
|type|stringObject|
|operator|=|
|operator|contains|
|operator|does not contain|
|operator|starts with|
|operator|ends with|
|operator|is set|
|operator|is not set|
|type|numberObject|
|operator|=|
|operator|>|
|operator|<|
|operator|>=|
|operator|<=|
|type|boolean|
|operator|=|
|operator|<>|
|type|null|
|operator|is null|
|operator|is not null|

<h2 id="tocS_EvaluationRuleReadFilterBase">EvaluationRuleReadFilterBase</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulereadfilterbase"></a>
<a id="schema_EvaluationRuleReadFilterBase"></a>
<a id="tocSevaluationrulereadfilterbase"></a>
<a id="tocsevaluationrulereadfilterbase"></a>

```json
{
  "type": "string",
  "column": "string",
  "operator": "string",
  "value": null
}
```

Stored filter returned verbatim by evaluation-rule read endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Stored filter type. This is not broken down into separate public response types.|
|column|string|true|none|none|
|operator|string|true|none|none|
|value|object \| null|false|none|Stored filter value. Its shape depends on the filter type.|

<h2 id="tocS_EvaluationRuleReadFilterWithKey">EvaluationRuleReadFilterWithKey</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulereadfilterwithkey"></a>
<a id="schema_EvaluationRuleReadFilterWithKey"></a>
<a id="tocSevaluationrulereadfilterwithkey"></a>
<a id="tocsevaluationrulereadfilterwithkey"></a>

```json
{
  "type": "string",
  "column": "string",
  "operator": "string",
  "value": null,
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Stored filter type. This is not broken down into separate public response types.|
|column|string|true|none|none|
|operator|string|true|none|none|
|value|object \| null|false|none|Stored filter value. Its shape depends on the filter type.|
|key|string|true|none|Stored object or legacy filter key.|

<h2 id="tocS_EvaluationRuleReadFilter">EvaluationRuleReadFilter</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulereadfilter"></a>
<a id="schema_EvaluationRuleReadFilter"></a>
<a id="tocSevaluationrulereadfilter"></a>
<a id="tocsevaluationrulereadfilter"></a>

```json
{
  "type": "string",
  "column": "string",
  "operator": "string",
  "value": null,
  "key": "string"
}
```

Filter returned verbatim by evaluation-rule read endpoints.

Filters with a stored `key` use the keyed shape. All other filters use the base shape. Response filters are intentionally not broken down by their internal `type` value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[EvaluationRuleReadFilterWithKey](#schemaevaluationrulereadfilterwithkey)|false|none|none|
|*oneOf*|[EvaluationRuleReadFilterBase](#schemaevaluationrulereadfilterbase)|false|none|Stored filter returned verbatim by evaluation-rule read endpoints.|

<h2 id="tocS_PublicApiErrorCode">PublicApiErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemapublicapierrorcode"></a>
<a id="schema_PublicApiErrorCode"></a>
<a id="tocSpublicapierrorcode"></a>
<a id="tocspublicapierrorcode"></a>

```json
"authentication_failed"
```

Stable machine-readable error code returned by the evaluators and evaluation-rules API.

<h2 id="tocS_PublicApiValidationIssue">PublicApiValidationIssue</h2>
<!-- backwards compatibility -->
<a id="schemapublicapivalidationissue"></a>
<a id="schema_PublicApiValidationIssue"></a>
<a id="tocSpublicapivalidationissue"></a>
<a id="tocspublicapivalidationissue"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": [
    null
  ]
}
```

One request validation issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Validator issue code.|
|message|string|true|none|Human-readable explanation.|
|path|[object]|true|none|Path to the invalid request field.|

<h2 id="tocS_PublicApiErrorDetails">PublicApiErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemapublicapierrordetails"></a>
<a id="schema_PublicApiErrorDetails"></a>
<a id="tocSpublicapierrordetails"></a>
<a id="tocspublicapierrordetails"></a>

```json
{
  "issues": [
    {
      "code": "string",
      "message": "string",
      "path": [
        null
      ]
    }
  ],
  "retryAfterSeconds": 0,
  "limit": 0,
  "remaining": 0,
  "resetAt": "1970-01-01T00:00:00Z"
}
```

Optional structured context for validation and rate-limit errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[PublicApiValidationIssue](#schemapublicapivalidationissue)]|false|none|Validation issues for an invalid request body or query.|
|retryAfterSeconds|integer \| null|false|none|Number of seconds to wait before retrying a rate-limited request.|
|limit|integer \| null|false|none|Rate-limit request allowance.|
|remaining|integer \| null|false|none|Remaining requests in the current rate-limit window.|
|resetAt|string(date-time) \| null|false|none|Time when the current rate-limit window resets.|

<h2 id="tocS_PublicApiError">PublicApiError</h2>
<!-- backwards compatibility -->
<a id="schemapublicapierror"></a>
<a id="schema_PublicApiError"></a>
<a id="tocSpublicapierror"></a>
<a id="tocspublicapierror"></a>

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "1970-01-01T00:00:00Z"
  }
}
```

Standard error response for the stable evaluators and evaluation-rules API.

Use the HTTP status for the broad failure class and `code` for programmatic handling. `details` is included when field-level validation or retry information is available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Human-readable description of the failure.|
|code|[PublicApiErrorCode](#schemapublicapierrorcode)|true|none|Stable machine-readable error code.|
|details|[PublicApiErrorDetails](#schemapublicapierrordetails)|false|none|Optional structured validation or rate-limit context.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|authentication_failed|
|code|access_denied|
|code|invalid_request|
|code|invalid_query|
|code|invalid_body|
|code|resource_not_found|
|code|conflict|
|code|rate_limited|
|code|method_not_allowed|
|code|internal_error|

<h2 id="tocS_EvaluationRuleEvaluatorAssignmentInput">EvaluationRuleEvaluatorAssignmentInput</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationruleevaluatorassignmentinput"></a>
<a id="schema_EvaluationRuleEvaluatorAssignmentInput"></a>
<a id="tocSevaluationruleevaluatorassignmentinput"></a>
<a id="tocsevaluationruleevaluatorassignmentinput"></a>

```json
{
  "evaluatorId": "string",
  "variableMapping": [
    {
      "variable": "string",
      "source": "input",
      "jsonPath": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluatorId|string|true|none|Stable evaluator identifier. The rule automatically uses that evaluator's latest version.|
|variableMapping|[[PromptVariableMappingInput](#schemapromptvariablemappinginput)]|false|none|Rule-specific prompt-variable mapping.<br><br>Set to `null` or omit to inherit the evaluator's latest default mapping. Code evaluators use the fixed runtime mapping and should use `null`.|

<h2 id="tocS_EvaluatorAssignment">EvaluatorAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorassignment"></a>
<a id="schema_EvaluatorAssignment"></a>
<a id="tocSevaluatorassignment"></a>
<a id="tocsevaluatorassignment"></a>

```json
{
  "evaluatorId": "string",
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluatorId|string|true|none|Stable identifier of the evaluator associated with this rule.|
|variableMapping|[[PromptVariableMapping](#schemapromptvariablemapping)]|true|none|Stored rule-specific override, or `null` when the evaluator's latest default mapping is inherited. Legacy mappings are returned as an explicit `legacy` variant.|

<h2 id="tocS_EvaluationRule">EvaluationRule</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrule"></a>
<a id="schema_EvaluationRule"></a>
<a id="tocSevaluationrule"></a>
<a id="tocsevaluationrule"></a>

```json
{
  "id": "string",
  "name": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "string",
      "column": "string",
      "operator": "string",
      "value": null,
      "key": "string"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

Live evaluation rule for incoming observations.

A rule determines which evaluators should be used, which observations should trigger scoring, how often scoring should run, and which observation fields should populate prompt variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable evaluation-rule identifier.|
|name|string|true|none|Human-readable rule name. This is independent from evaluator names and does not need to be unique.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this rule, or `null` when no user can be resolved.|
|enabled|boolean|true|none|Whether live execution is enabled for this rule.|
|sampling|number(double)|true|none|Fraction of matching observations that should be evaluated.<br><br>Must be between `0` and `1`.<br>- `1` evaluates every matching observation.<br>- `0.25` evaluates approximately 25% of matching observations.|
|filter|[[EvaluationRuleReadFilter](#schemaevaluationrulereadfilter)]|true|none|List of stored filter conditions returned verbatim. Filters with a `key` use the keyed response shape; all others use the base shape. These response shapes are not broken down by internal filter type. An empty list matches every incoming object.|
|evaluatorAssignments|[[EvaluatorAssignment](#schemaevaluatorassignment)]|true|none|Evaluators attached to this rule in deterministic assignment order.|
|createdAt|string(date-time)|true|none|Timestamp when the evaluation rule was created.|
|updatedAt|string(date-time)|true|none|Timestamp when the evaluation rule was last updated.|

<h2 id="tocS_CreateEvaluationRuleRequest">CreateEvaluationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateevaluationrulerequest"></a>
<a id="schema_CreateEvaluationRuleRequest"></a>
<a id="tocScreateevaluationrulerequest"></a>
<a id="tocscreateevaluationrulerequest"></a>

```json
{
  "name": "string",
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "datetime",
      "column": "string",
      "operator": "=",
      "value": "1970-01-01T00:00:00Z"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "input",
          "jsonPath": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Human-readable rule name. Names are not identifiers and do not need to be unique.|
|enabled|boolean|true|none|Whether live execution should start immediately. Enabled rules require at least one evaluator assignment.|
|sampling|number(double) \| null|false|none|Fraction of matching observations to evaluate. Omit this field to use the default of `1`, which evaluates every match. `null` is not accepted.|
|filter|[[EvaluationRuleFilter](#schemaevaluationrulefilter)]|false|none|Conditions used to select observations. Defaults to an empty list, which matches every incoming observation.|
|evaluatorAssignments|[[EvaluationRuleEvaluatorAssignmentInput](#schemaevaluationruleevaluatorassignmentinput)]|true|none|Evaluators to attach to this rule. Disabled rules may use an empty list as a draft.|

<h2 id="tocS_UpdateEvaluationRuleRequest">UpdateEvaluationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateevaluationrulerequest"></a>
<a id="schema_UpdateEvaluationRuleRequest"></a>
<a id="tocSupdateevaluationrulerequest"></a>
<a id="tocsupdateevaluationrulerequest"></a>

```json
{
  "name": "string",
  "enabled": true,
  "sampling": 0,
  "filter": [
    {
      "type": "datetime",
      "column": "string",
      "operator": "=",
      "value": "1970-01-01T00:00:00Z"
    }
  ],
  "evaluatorAssignments": [
    {
      "evaluatorId": "string",
      "variableMapping": [
        {
          "variable": "string",
          "source": "input",
          "jsonPath": "string"
        }
      ]
    }
  ]
}
```

At least one field must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|New human-readable rule name.|
|enabled|boolean \| null|false|none|New desired live-execution state.|
|sampling|number(double) \| null|false|none|New fraction of matching observations to evaluate. Omit to keep the current value.|
|filter|[[EvaluationRuleFilter](#schemaevaluationrulefilter)]|false|none|Complete replacement filter list. An empty list matches every incoming observation.|
|evaluatorAssignments|[[EvaluationRuleEvaluatorAssignmentInput](#schemaevaluationruleevaluatorassignmentinput)]|false|none|Complete replacement assignment list. An empty list disables the rule.|

<h2 id="tocS_EvaluationRulesPage">EvaluationRulesPage</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationrulespage"></a>
<a id="schema_EvaluationRulesPage"></a>
<a id="tocSevaluationrulespage"></a>
<a id="tocsevaluationrulespage"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "createdBy": {
        "id": "string",
        "name": "string"
      },
      "enabled": true,
      "sampling": 0,
      "filter": [
        {
          "type": "string",
          "column": "string",
          "operator": "string",
          "value": null,
          "key": "string"
        }
      ],
      "evaluatorAssignments": [
        {
          "evaluatorId": "string",
          "variableMapping": [
            {
              "variable": "string",
              "source": "string",
              "jsonPath": "string"
            }
          ]
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EvaluationRule](#schemaevaluationrule)]|true|none|Evaluation rules for this page.|
|meta|[CursorMeta](#schemacursormeta)|true|none|Cursor pagination metadata.|

<h2 id="tocS_DeletedEvaluationRule">DeletedEvaluationRule</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevaluationrule"></a>
<a id="schema_DeletedEvaluationRule"></a>
<a id="tocSdeletedevaluationrule"></a>
<a id="tocsdeletedevaluationrule"></a>

```json
{
  "id": "string"
}
```

Confirmation returned after successful evaluation-rule deletion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Identifier of the deleted evaluation rule.|

<h2 id="tocS_Creator">Creator</h2>
<!-- backwards compatibility -->
<a id="schemacreator"></a>
<a id="schema_Creator"></a>
<a id="tocScreator"></a>
<a id="tocscreator"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

User who created the resource, or `null` when no user can be resolved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|User identifier.|
|name|string \| null|true|none|User name, or `null` when unavailable.|

<h2 id="tocS_EvaluatorModelConfig">EvaluatorModelConfig</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatormodelconfig"></a>
<a id="schema_EvaluatorModelConfig"></a>
<a id="tocSevaluatormodelconfig"></a>
<a id="tocsevaluatormodelconfig"></a>

```json
{
  "provider": "string",
  "model": "string"
}
```

Explicit model configuration for an evaluator.

If the complete `modelConfig` is `null`, Langfuse uses the project's default evaluation model.
If provided, the model must be available to the project when the evaluator or evaluation rule is enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|true|none|Provider identifier, for example `openai` or `anthropic`.<br><br>To discover valid values for the current project, call `GET /api/public/llm-connections` and use one of the returned `provider` values.|
|model|string|true|none|Model identifier exposed by the provider, for example `gpt-4.1-mini`.|

<h2 id="tocS_EvaluatorChatMessageRole">EvaluatorChatMessageRole</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorchatmessagerole"></a>
<a id="schema_EvaluatorChatMessageRole"></a>
<a id="tocSevaluatorchatmessagerole"></a>
<a id="tocsevaluatorchatmessagerole"></a>

```json
"system"
```

Role of an evaluator prompt message.

<h2 id="tocS_EvaluatorChatMessage">EvaluatorChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorchatmessage"></a>
<a id="schema_EvaluatorChatMessage"></a>
<a id="tocSevaluatorchatmessage"></a>
<a id="tocsevaluatorchatmessage"></a>

```json
{
  "role": "system",
  "content": "string"
}
```

One chat message in an evaluator prompt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[EvaluatorChatMessageRole](#schemaevaluatorchatmessagerole)|true|none|Role of an evaluator prompt message.|
|content|string|true|none|Message content. Evaluator variables use `{{variable}}` syntax.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|system|
|role|user|
|role|assistant|

<h2 id="tocS_EvaluatorChatPrompt">EvaluatorChatPrompt</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorchatprompt"></a>
<a id="schema_EvaluatorChatPrompt"></a>
<a id="tocSevaluatorchatprompt"></a>
<a id="tocsevaluatorchatprompt"></a>

```json
[
  {
    "role": "system",
    "content": "string"
  }
]
```

An ordered list of chat messages. A system message is only allowed as the first message.

<h2 id="tocS_EvaluatorChatPromptInput">EvaluatorChatPromptInput</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorchatpromptinput"></a>
<a id="schema_EvaluatorChatPromptInput"></a>
<a id="tocSevaluatorchatpromptinput"></a>
<a id="tocsevaluatorchatpromptinput"></a>

```json
"string"
```

A user prompt string shortcut, or an ordered list of chat messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|[EvaluatorChatPrompt](#schemaevaluatorchatprompt)|false|none|An ordered list of chat messages. A system message is only allowed as the first message.|

<h2 id="tocS_EvaluatorVersionBase">EvaluatorVersionBase</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorversionbase"></a>
<a id="schema_EvaluatorVersionBase"></a>
<a id="tocSevaluatorversionbase"></a>
<a id="tocsevaluatorversionbase"></a>

```json
{
  "id": "string",
  "version": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable identifier of this evaluator version.|
|version|integer|true|none|Monotonically increasing evaluator version number.|
|createdAt|string(date-time)|true|none|Timestamp when this evaluator version was created.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this version, or `null` when no user can be resolved.|

<h2 id="tocS_LlmAsJudgeEvaluatorVersion">LlmAsJudgeEvaluatorVersion</h2>
<!-- backwards compatibility -->
<a id="schemallmasjudgeevaluatorversion"></a>
<a id="schema_LlmAsJudgeEvaluatorVersion"></a>
<a id="tocSllmasjudgeevaluatorversion"></a>
<a id="tocsllmasjudgeevaluatorversion"></a>

```json
{
  "id": "string",
  "version": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "type": "llm_as_judge",
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable identifier of this evaluator version.|
|version|integer|true|none|Monotonically increasing evaluator version number.|
|createdAt|string(date-time)|true|none|Timestamp when this evaluator version was created.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|prompt|[EvaluatorChatPrompt](#schemaevaluatorchatprompt)|true|none|Ordered chat messages used during evaluation.|
|variables|[string]|true|none|Variables extracted from the prompt and available for evaluation-rule mappings.<br><br>Every variable must be mapped exactly once when a rule provides an explicit mapping.|
|variableMapping|[[PromptVariableMappingRead](#schemapromptvariablemappingread)]|true|none|Default variable mapping for this evaluator version, or `null` when no default is configured.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|true|none|Explicit model configuration, or `null` when the project's default evaluation model is used.|
|outputDefinition|[PublicEvaluatorOutputDefinition](#schemapublicevaluatoroutputdefinition)|true|none|Structured output schema returned by this evaluator.<br><br>Responses include `dataType` and omit the internal output-definition persistence version.|

<h2 id="tocS_CodeEvaluatorVersion">CodeEvaluatorVersion</h2>
<!-- backwards compatibility -->
<a id="schemacodeevaluatorversion"></a>
<a id="schema_CodeEvaluatorVersion"></a>
<a id="tocScodeevaluatorversion"></a>
<a id="tocscodeevaluatorversion"></a>

```json
{
  "id": "string",
  "version": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "type": "code",
  "sourceCode": "string",
  "sourceCodeLanguage": "PYTHON"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable identifier of this evaluator version.|
|version|integer|true|none|Monotonically increasing evaluator version number.|
|createdAt|string(date-time)|true|none|Timestamp when this evaluator version was created.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|sourceCode|string|true|none|Source code executed for each matched observation.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_EvaluatorVersion">EvaluatorVersion</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorversion"></a>
<a id="schema_EvaluatorVersion"></a>
<a id="tocSevaluatorversion"></a>
<a id="tocsevaluatorversion"></a>

```json
{
  "type": "llm_as_judge",
  "id": "string",
  "version": 0,
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|Stable identifier of this evaluator version.|
|version|integer|true|none|Monotonically increasing evaluator version number.|
|createdAt|string(date-time)|true|none|Timestamp when this evaluator version was created.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|prompt|[EvaluatorChatPrompt](#schemaevaluatorchatprompt)|true|none|Ordered chat messages used during evaluation.|
|variables|[string]|true|none|Variables extracted from the prompt and available for evaluation-rule mappings.<br><br>Every variable must be mapped exactly once when a rule provides an explicit mapping.|
|variableMapping|[[PromptVariableMappingRead](#schemapromptvariablemappingread)]|true|none|Default variable mapping for this evaluator version, or `null` when no default is configured.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|true|none|Explicit model configuration, or `null` when the project's default evaluation model is used.|
|outputDefinition|[PublicEvaluatorOutputDefinition](#schemapublicevaluatoroutputdefinition)|true|none|Structured output schema returned by this evaluator.<br><br>Responses include `dataType` and omit the internal output-definition persistence version.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|Stable identifier of this evaluator version.|
|version|integer|true|none|Monotonically increasing evaluator version number.|
|createdAt|string(date-time)|true|none|Timestamp when this evaluator version was created.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|sourceCode|string|true|none|Source code executed for each matched observation.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|llm_as_judge|
|type|code|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_EvaluationRuleAssignment">EvaluationRuleAssignment</h2>
<!-- backwards compatibility -->
<a id="schemaevaluationruleassignment"></a>
<a id="schema_EvaluationRuleAssignment"></a>
<a id="tocSevaluationruleassignment"></a>
<a id="tocsevaluationruleassignment"></a>

```json
{
  "evaluationRuleId": "string",
  "variableMappingOverride": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ]
}
```

Evaluation-rule assignment associated with this evaluator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationRuleId|string|true|none|Stable identifier of the assigned evaluation rule.|
|variableMappingOverride|[[PromptVariableMapping](#schemapromptvariablemapping)]|false|none|Rule-specific variable mapping override. Omitted when the evaluator's latest default mapping is inherited. Legacy mappings use the explicit `legacy` variant.|

<h2 id="tocS_EvaluatorBase">EvaluatorBase</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorbase"></a>
<a id="schema_EvaluatorBase"></a>
<a id="tocSevaluatorbase"></a>
<a id="tocsevaluatorbase"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable identifier of this evaluator across all versions.|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|true|none|Optional human-readable evaluator description.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this evaluator, or `null` when no user can be resolved.|
|status|[EvaluatorStatus](#schemaevaluatorstatus)|true|none|Effective evaluator status after Langfuse validates its runtime configuration.|
|pausedAt|string(date-time) \| null|true|none|Timestamp when the evaluator was paused, otherwise `null`.|
|pausedReason|string \| null|true|none|Machine-readable reason when `status=paused`, otherwise `null`.|
|pausedMessage|string \| null|true|none|Human-readable explanation when `status=paused`, otherwise `null`.|
|evaluationRuleAssignments|[[EvaluationRuleAssignment](#schemaevaluationruleassignment)]|true|none|All modern and legacy evaluation-rule assignments in newest-assignment-first order. Rule-specific mappings are exposed as `variableMappingOverride`; inherited defaults are omitted.|
|createdAt|string(date-time)|true|none|Timestamp when the evaluator was created.|
|updatedAt|string(date-time)|true|none|Timestamp when the evaluator was last updated.|
|versionId|string|true|none|Stable identifier of the latest evaluator version.|
|version|integer|true|none|Monotonically increasing latest evaluator version number.|
|versionCreatedAt|string(date-time)|true|none|Timestamp when the latest evaluator version was created.|
|versionCreatedBy|[Creator](#schemacreator)|true|none|User who created the latest evaluator version, or `null` when no user can be resolved.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_LlmAsJudgeEvaluator">LlmAsJudgeEvaluator</h2>
<!-- backwards compatibility -->
<a id="schemallmasjudgeevaluator"></a>
<a id="schema_LlmAsJudgeEvaluator"></a>
<a id="tocSllmasjudgeevaluator"></a>
<a id="tocsllmasjudgeevaluator"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  },
  "type": "llm_as_judge",
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable identifier of this evaluator across all versions.|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|true|none|Optional human-readable evaluator description.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this evaluator, or `null` when no user can be resolved.|
|status|[EvaluatorStatus](#schemaevaluatorstatus)|true|none|Effective evaluator status after Langfuse validates its runtime configuration.|
|pausedAt|string(date-time) \| null|true|none|Timestamp when the evaluator was paused, otherwise `null`.|
|pausedReason|string \| null|true|none|Machine-readable reason when `status=paused`, otherwise `null`.|
|pausedMessage|string \| null|true|none|Human-readable explanation when `status=paused`, otherwise `null`.|
|evaluationRuleAssignments|[[EvaluationRuleAssignment](#schemaevaluationruleassignment)]|true|none|All modern and legacy evaluation-rule assignments in newest-assignment-first order. Rule-specific mappings are exposed as `variableMappingOverride`; inherited defaults are omitted.|
|createdAt|string(date-time)|true|none|Timestamp when the evaluator was created.|
|updatedAt|string(date-time)|true|none|Timestamp when the evaluator was last updated.|
|versionId|string|true|none|Stable identifier of the latest evaluator version.|
|version|integer|true|none|Monotonically increasing latest evaluator version number.|
|versionCreatedAt|string(date-time)|true|none|Timestamp when the latest evaluator version was created.|
|versionCreatedBy|[Creator](#schemacreator)|true|none|User who created the latest evaluator version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|prompt|[EvaluatorChatPrompt](#schemaevaluatorchatprompt)|true|none|Ordered chat messages used by the latest evaluator version.|
|variables|[string]|true|none|Variables extracted from the latest prompt and available for evaluation-rule mappings.|
|variableMapping|[[PromptVariableMappingRead](#schemapromptvariablemappingread)]|true|none|Default variable mapping for the latest version, or `null` when no default is configured.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|true|none|Explicit model configuration for the latest version, or `null` when the project's default evaluation model is used.|
|outputDefinition|[PublicEvaluatorOutputDefinition](#schemapublicevaluatoroutputdefinition)|true|none|Structured output schema returned by the latest evaluator version.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|

<h2 id="tocS_CodeEvaluator">CodeEvaluator</h2>
<!-- backwards compatibility -->
<a id="schemacodeevaluator"></a>
<a id="schema_CodeEvaluator"></a>
<a id="tocScodeevaluator"></a>
<a id="tocscodeevaluator"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  },
  "type": "code",
  "sourceCode": "string",
  "sourceCodeLanguage": "PYTHON"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable identifier of this evaluator across all versions.|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|true|none|Optional human-readable evaluator description.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this evaluator, or `null` when no user can be resolved.|
|status|[EvaluatorStatus](#schemaevaluatorstatus)|true|none|Effective evaluator status after Langfuse validates its runtime configuration.|
|pausedAt|string(date-time) \| null|true|none|Timestamp when the evaluator was paused, otherwise `null`.|
|pausedReason|string \| null|true|none|Machine-readable reason when `status=paused`, otherwise `null`.|
|pausedMessage|string \| null|true|none|Human-readable explanation when `status=paused`, otherwise `null`.|
|evaluationRuleAssignments|[[EvaluationRuleAssignment](#schemaevaluationruleassignment)]|true|none|All modern and legacy evaluation-rule assignments in newest-assignment-first order. Rule-specific mappings are exposed as `variableMappingOverride`; inherited defaults are omitted.|
|createdAt|string(date-time)|true|none|Timestamp when the evaluator was created.|
|updatedAt|string(date-time)|true|none|Timestamp when the evaluator was last updated.|
|versionId|string|true|none|Stable identifier of the latest evaluator version.|
|version|integer|true|none|Monotonically increasing latest evaluator version number.|
|versionCreatedAt|string(date-time)|true|none|Timestamp when the latest evaluator version was created.|
|versionCreatedBy|[Creator](#schemacreator)|true|none|User who created the latest evaluator version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|sourceCode|string|true|none|Source code executed by the latest evaluator version.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the latest source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|paused|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_Evaluator">Evaluator</h2>
<!-- backwards compatibility -->
<a id="schemaevaluator"></a>
<a id="schema_Evaluator"></a>
<a id="tocSevaluator"></a>
<a id="tocsevaluator"></a>

```json
{
  "type": "llm_as_judge",
  "id": "string",
  "name": "string",
  "description": "string",
  "createdBy": {
    "id": "string",
    "name": "string"
  },
  "status": "active",
  "pausedAt": "1970-01-01T00:00:00Z",
  "pausedReason": "string",
  "pausedMessage": "string",
  "evaluationRuleAssignments": [
    {
      "evaluationRuleId": "string",
      "variableMappingOverride": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ]
    }
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "versionId": "string",
  "version": 0,
  "versionCreatedAt": "1970-01-01T00:00:00Z",
  "versionCreatedBy": {
    "id": "string",
    "name": "string"
  },
  "prompt": [
    {
      "role": "system",
      "content": "string"
    }
  ],
  "variables": [
    "string"
  ],
  "variableMapping": [
    {
      "variable": "string",
      "source": "string",
      "jsonPath": "string"
    }
  ],
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

One evaluator that can be used for scoring.

An evaluator describes **how** to score data. Associated evaluation rules describe **which** live objects should be evaluated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|Stable identifier of this evaluator across all versions.|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|true|none|Optional human-readable evaluator description.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this evaluator, or `null` when no user can be resolved.|
|status|[EvaluatorStatus](#schemaevaluatorstatus)|true|none|Effective evaluator status after Langfuse validates its runtime configuration.|
|pausedAt|string(date-time) \| null|true|none|Timestamp when the evaluator was paused, otherwise `null`.|
|pausedReason|string \| null|true|none|Machine-readable reason when `status=paused`, otherwise `null`.|
|pausedMessage|string \| null|true|none|Human-readable explanation when `status=paused`, otherwise `null`.|
|evaluationRuleAssignments|[[EvaluationRuleAssignment](#schemaevaluationruleassignment)]|true|none|All modern and legacy evaluation-rule assignments in newest-assignment-first order. Rule-specific mappings are exposed as `variableMappingOverride`; inherited defaults are omitted.|
|createdAt|string(date-time)|true|none|Timestamp when the evaluator was created.|
|updatedAt|string(date-time)|true|none|Timestamp when the evaluator was last updated.|
|versionId|string|true|none|Stable identifier of the latest evaluator version.|
|version|integer|true|none|Monotonically increasing latest evaluator version number.|
|versionCreatedAt|string(date-time)|true|none|Timestamp when the latest evaluator version was created.|
|versionCreatedBy|[Creator](#schemacreator)|true|none|User who created the latest evaluator version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|prompt|[EvaluatorChatPrompt](#schemaevaluatorchatprompt)|true|none|Ordered chat messages used by the latest evaluator version.|
|variables|[string]|true|none|Variables extracted from the latest prompt and available for evaluation-rule mappings.|
|variableMapping|[[PromptVariableMappingRead](#schemapromptvariablemappingread)]|true|none|Default variable mapping for the latest version, or `null` when no default is configured.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|true|none|Explicit model configuration for the latest version, or `null` when the project's default evaluation model is used.|
|outputDefinition|[PublicEvaluatorOutputDefinition](#schemapublicevaluatoroutputdefinition)|true|none|Structured output schema returned by the latest evaluator version.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|Stable identifier of this evaluator across all versions.|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|true|none|Optional human-readable evaluator description.|
|createdBy|[Creator](#schemacreator)|true|none|User who created this evaluator, or `null` when no user can be resolved.|
|status|[EvaluatorStatus](#schemaevaluatorstatus)|true|none|Effective evaluator status after Langfuse validates its runtime configuration.|
|pausedAt|string(date-time) \| null|true|none|Timestamp when the evaluator was paused, otherwise `null`.|
|pausedReason|string \| null|true|none|Machine-readable reason when `status=paused`, otherwise `null`.|
|pausedMessage|string \| null|true|none|Human-readable explanation when `status=paused`, otherwise `null`.|
|evaluationRuleAssignments|[[EvaluationRuleAssignment](#schemaevaluationruleassignment)]|true|none|All modern and legacy evaluation-rule assignments in newest-assignment-first order. Rule-specific mappings are exposed as `variableMappingOverride`; inherited defaults are omitted.|
|createdAt|string(date-time)|true|none|Timestamp when the evaluator was created.|
|updatedAt|string(date-time)|true|none|Timestamp when the evaluator was last updated.|
|versionId|string|true|none|Stable identifier of the latest evaluator version.|
|version|integer|true|none|Monotonically increasing latest evaluator version number.|
|versionCreatedAt|string(date-time)|true|none|Timestamp when the latest evaluator version was created.|
|versionCreatedBy|[Creator](#schemacreator)|true|none|User who created the latest evaluator version, or `null` when no user can be resolved.|
|type|string|true|none|Evaluator type.|
|sourceCode|string|true|none|Source code executed by the latest evaluator version.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the latest source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|llm_as_judge|
|status|active|
|status|paused|
|type|code|
|status|active|
|status|paused|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_EvaluatorStatus">EvaluatorStatus</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorstatus"></a>
<a id="schema_EvaluatorStatus"></a>
<a id="tocSevaluatorstatus"></a>
<a id="tocsevaluatorstatus"></a>

```json
"active"
```

Effective evaluator runtime status.

- `active`: the evaluator can run.
- `paused`: Langfuse paused execution until the underlying issue is resolved.

<h2 id="tocS_CreateLlmAsJudgeEvaluatorRequest">CreateLlmAsJudgeEvaluatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatellmasjudgeevaluatorrequest"></a>
<a id="schema_CreateLlmAsJudgeEvaluatorRequest"></a>
<a id="tocScreatellmasjudgeevaluatorrequest"></a>
<a id="tocscreatellmasjudgeevaluatorrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "type": "llm_as_judge",
  "prompt": "string",
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "variableMapping": [
    {
      "variable": "string",
      "source": "input",
      "jsonPath": "string"
    }
  ],
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|false|none|Optional human-readable evaluator description.|
|type|string|true|none|Evaluator type.|
|prompt|[EvaluatorChatPromptInput](#schemaevaluatorchatpromptinput)|true|none|User prompt string shortcut or an ordered list of chat messages.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|false|none|Explicit model configuration. Set to `null` or omit to use the project's default evaluation model.|
|variableMapping|[[PromptVariableMappingInput](#schemapromptvariablemappinginput)]|false|none|Default prompt-variable mapping, or `null` when no default is configured.|
|outputDefinition|[EvaluatorOutputDefinition](#schemaevaluatoroutputdefinition)|true|none|Structured output schema returned by this evaluator. Do not include an internal persistence version.|

<h2 id="tocS_CreateCodeEvaluatorRequest">CreateCodeEvaluatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecodeevaluatorrequest"></a>
<a id="schema_CreateCodeEvaluatorRequest"></a>
<a id="tocScreatecodeevaluatorrequest"></a>
<a id="tocscreatecodeevaluatorrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "type": "code",
  "sourceCode": "string",
  "sourceCodeLanguage": "PYTHON"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|false|none|Optional human-readable evaluator description.|
|type|string|true|none|Evaluator type.|
|sourceCode|string|true|none|Source code executed for each matched observation.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_CreateEvaluatorRequest">CreateEvaluatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateevaluatorrequest"></a>
<a id="schema_CreateEvaluatorRequest"></a>
<a id="tocScreateevaluatorrequest"></a>
<a id="tocscreateevaluatorrequest"></a>

```json
{
  "type": "llm_as_judge",
  "name": "string",
  "description": "string",
  "prompt": "string",
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "variableMapping": [
    {
      "variable": "string",
      "source": "input",
      "jsonPath": "string"
    }
  ],
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

Initial evaluator definition with metadata and definition fields at the same level. The returned evaluator starts at version `1`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|false|none|Optional human-readable evaluator description.|
|type|string|true|none|Evaluator type.|
|prompt|[EvaluatorChatPromptInput](#schemaevaluatorchatpromptinput)|true|none|User prompt string shortcut or an ordered list of chat messages.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|false|none|Explicit model configuration. Set to `null` or omit to use the project's default evaluation model.|
|variableMapping|[[PromptVariableMappingInput](#schemapromptvariablemappinginput)]|false|none|Default prompt-variable mapping, or `null` when no default is configured.|
|outputDefinition|[EvaluatorOutputDefinition](#schemaevaluatoroutputdefinition)|true|none|Structured output schema returned by this evaluator. Do not include an internal persistence version.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|name|string|true|none|Human-readable evaluator name. Names are not identifiers and do not need to be unique.|
|description|string \| null|false|none|Optional human-readable evaluator description.|
|type|string|true|none|Evaluator type.|
|sourceCode|string|true|none|Source code executed for each matched observation.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|llm_as_judge|
|type|code|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_UpdateEvaluatorMetadataRequest">UpdateEvaluatorMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateevaluatormetadatarequest"></a>
<a id="schema_UpdateEvaluatorMetadataRequest"></a>
<a id="tocSupdateevaluatormetadatarequest"></a>
<a id="tocsupdateevaluatormetadatarequest"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

Metadata-only update. At least one field must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|New human-readable evaluator name.|
|description|string \| null|false|none|New description. Set to `null` to clear it.|

<h2 id="tocS_UpdateLlmAsJudgeEvaluatorRequest">UpdateLlmAsJudgeEvaluatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatellmasjudgeevaluatorrequest"></a>
<a id="schema_UpdateLlmAsJudgeEvaluatorRequest"></a>
<a id="tocSupdatellmasjudgeevaluatorrequest"></a>
<a id="tocsupdatellmasjudgeevaluatorrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "type": "llm_as_judge",
  "prompt": "string",
  "modelConfig": {
    "provider": "string",
    "model": "string"
  },
  "variableMapping": [
    {
      "variable": "string",
      "source": "input",
      "jsonPath": "string"
    }
  ],
  "outputDefinition": {
    "dataType": "NUMERIC",
    "scoreReasoningInstructions": "string",
    "scoreValueInstructions": "string",
    "minValue": 0,
    "maxValue": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|New human-readable evaluator name.|
|description|string \| null|false|none|New description. Set to `null` to clear it.|
|type|string|true|none|Evaluator type. The type of an existing evaluator cannot change.|
|prompt|[EvaluatorChatPromptInput](#schemaevaluatorchatpromptinput)|true|none|Complete replacement user prompt string or an ordered list of chat messages.|
|modelConfig|[EvaluatorModelConfig](#schemaevaluatormodelconfig)|false|none|Explicit model configuration. Set to `null` or omit to use the project's default evaluation model.|
|variableMapping|[[PromptVariableMappingInput](#schemapromptvariablemappinginput)]|false|none|Complete replacement default variable mapping, or `null` when no default is configured.|
|outputDefinition|[EvaluatorOutputDefinition](#schemaevaluatoroutputdefinition)|true|none|Complete replacement output schema. Do not include an internal persistence version.|

<h2 id="tocS_UpdateCodeEvaluatorRequest">UpdateCodeEvaluatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecodeevaluatorrequest"></a>
<a id="schema_UpdateCodeEvaluatorRequest"></a>
<a id="tocSupdatecodeevaluatorrequest"></a>
<a id="tocsupdatecodeevaluatorrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "type": "code",
  "sourceCode": "string",
  "sourceCodeLanguage": "PYTHON"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|New human-readable evaluator name.|
|description|string \| null|false|none|New description. Set to `null` to clear it.|
|type|string|true|none|Evaluator type. The type of an existing evaluator cannot change.|
|sourceCode|string|true|none|Complete replacement source code.|
|sourceCodeLanguage|[CodeEvaluatorSourceCodeLanguage](#schemacodeevaluatorsourcecodelanguage)|true|none|Runtime language used to execute the source code.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceCodeLanguage|PYTHON|
|sourceCodeLanguage|TYPESCRIPT|

<h2 id="tocS_UpdateEvaluatorRequest">UpdateEvaluatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateevaluatorrequest"></a>
<a id="schema_UpdateEvaluatorRequest"></a>
<a id="tocSupdateevaluatorrequest"></a>
<a id="tocsupdateevaluatorrequest"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

Metadata-only update or complete flattened definition replacement. At least one field must be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[UpdateEvaluatorMetadataRequest](#schemaupdateevaluatormetadatarequest)|false|none|Metadata-only update. At least one field must be provided.|
|*oneOf*|[UpdateLlmAsJudgeEvaluatorRequest](#schemaupdatellmasjudgeevaluatorrequest)|false|none|none|
|*oneOf*|[UpdateCodeEvaluatorRequest](#schemaupdatecodeevaluatorrequest)|false|none|none|

<h2 id="tocS_EvaluatorsPage">EvaluatorsPage</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorspage"></a>
<a id="schema_EvaluatorsPage"></a>
<a id="tocSevaluatorspage"></a>
<a id="tocsevaluatorspage"></a>

```json
{
  "data": [
    {
      "type": "llm_as_judge",
      "id": "string",
      "name": "string",
      "description": "string",
      "createdBy": {
        "id": "string",
        "name": "string"
      },
      "status": "active",
      "pausedAt": "1970-01-01T00:00:00Z",
      "pausedReason": "string",
      "pausedMessage": "string",
      "evaluationRuleAssignments": [
        {
          "evaluationRuleId": "string",
          "variableMappingOverride": [
            {
              "variable": "string",
              "source": "string",
              "jsonPath": "string"
            }
          ]
        }
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "versionId": "string",
      "version": 0,
      "versionCreatedAt": "1970-01-01T00:00:00Z",
      "versionCreatedBy": {
        "id": "string",
        "name": "string"
      },
      "prompt": [
        {
          "role": "system",
          "content": "string"
        }
      ],
      "variables": [
        "string"
      ],
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ],
      "modelConfig": {
        "provider": "string",
        "model": "string"
      },
      "outputDefinition": {
        "dataType": "NUMERIC",
        "scoreReasoningInstructions": "string",
        "scoreValueInstructions": "string",
        "minValue": 0,
        "maxValue": 0
      }
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Evaluator](#schemaevaluator)]|true|none|Evaluators for this page.|
|meta|[CursorMeta](#schemacursormeta)|true|none|Cursor pagination metadata.|

<h2 id="tocS_EvaluatorVersionsPage">EvaluatorVersionsPage</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatorversionspage"></a>
<a id="schema_EvaluatorVersionsPage"></a>
<a id="tocSevaluatorversionspage"></a>
<a id="tocsevaluatorversionspage"></a>

```json
{
  "data": [
    {
      "type": "llm_as_judge",
      "id": "string",
      "version": 0,
      "createdAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "string",
        "name": "string"
      },
      "prompt": [
        {
          "role": "system",
          "content": "string"
        }
      ],
      "variables": [
        "string"
      ],
      "variableMapping": [
        {
          "variable": "string",
          "source": "string",
          "jsonPath": "string"
        }
      ],
      "modelConfig": {
        "provider": "string",
        "model": "string"
      },
      "outputDefinition": {
        "dataType": "NUMERIC",
        "scoreReasoningInstructions": "string",
        "scoreValueInstructions": "string",
        "minValue": 0,
        "maxValue": 0
      }
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EvaluatorVersion](#schemaevaluatorversion)]|true|none|Evaluator versions for this page in newest-first order.|
|meta|[CursorMeta](#schemacursormeta)|true|none|Cursor pagination metadata.|

<h2 id="tocS_CursorMeta">CursorMeta</h2>
<!-- backwards compatibility -->
<a id="schemacursormeta"></a>
<a id="schema_CursorMeta"></a>
<a id="tocScursormeta"></a>
<a id="tocscursormeta"></a>

```json
{
  "cursor": "string"
}
```

Cursor pagination metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string \| null|false|none|Opaque cursor for the next page. Omitted when there is no next page.|

<h2 id="tocS_DeletedEvaluator">DeletedEvaluator</h2>
<!-- backwards compatibility -->
<a id="schemadeletedevaluator"></a>
<a id="schema_DeletedEvaluator"></a>
<a id="tocSdeletedevaluator"></a>
<a id="tocsdeletedevaluator"></a>

```json
{
  "id": "string"
}
```

Confirmation returned after successful evaluator deletion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Identifier of the deleted evaluator.|

<h2 id="tocS_ExperimentsResponse">ExperimentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentsresponse"></a>
<a id="schema_ExperimentsResponse"></a>
<a id="tocSexperimentsresponse"></a>
<a id="tocsexperimentsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "itemCount": 0,
      "datasetId": "string",
      "metadata": {},
      "scores": [
        {
          "dataType": "NUMERIC",
          "id": "string",
          "projectId": "string",
          "name": "string",
          "source": "ANNOTATION",
          "timestamp": "1970-01-01T00:00:00Z",
          "environment": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "comment": "string",
          "configId": "string",
          "metadata": {},
          "authorUserId": "string",
          "queueId": "string",
          "subject": {
            "kind": "trace",
            "id": "string"
          },
          "value": 0
        }
      ]
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Experiment](#schemaexperiment)]|true|none|none|
|meta|[ExperimentsResponseMeta](#schemaexperimentsresponsemeta)|true|none|Metadata for cursor-based pagination.|

<h2 id="tocS_ExperimentsResponseMeta">ExperimentsResponseMeta</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentsresponsemeta"></a>
<a id="schema_ExperimentsResponseMeta"></a>
<a id="tocSexperimentsresponsemeta"></a>
<a id="tocsexperimentsresponsemeta"></a>

```json
{
  "cursor": "string"
}
```

Metadata for cursor-based pagination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string \| null|false|none|Opaque cursor for the next page. Omitted when there is no next page.|

<h2 id="tocS_Experiment">Experiment</h2>
<!-- backwards compatibility -->
<a id="schemaexperiment"></a>
<a id="schema_Experiment"></a>
<a id="tocSexperiment"></a>
<a id="tocsexperiment"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "itemCount": 0,
  "datasetId": "string",
  "metadata": {},
  "scores": [
    {
      "dataType": "NUMERIC",
      "id": "string",
      "projectId": "string",
      "name": "string",
      "source": "ANNOTATION",
      "timestamp": "1970-01-01T00:00:00Z",
      "environment": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "comment": "string",
      "configId": "string",
      "metadata": {},
      "authorUserId": "string",
      "queueId": "string",
      "subject": {
        "kind": "trace",
        "id": "string"
      },
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|true|none|none|
|startTime|string(date-time)|true|none|Start of the experiment, i.e. the earliest event within the<br>requested time range. Clipped to `fromStartTime` when the<br>experiment started before the requested range.|
|endTime|string(date-time)|true|none|End of the experiment, i.e. the latest event end within the<br>requested time range.|
|itemCount|integer|true|none|Number of experiment items within the requested time range.|
|datasetId|string \| null|true|none|Null when the experiment is not associated with a dataset.|
|metadata|object \| null|false|none|Included only when `fields=metadata` is requested.|
|scores|[[ScoreV3](#schemascorev3)]|false|none|Included only when `fields=scores` is requested. Contains scores directly attached to the experiment.|

<h2 id="tocS_ExperimentItemsResponse">ExperimentItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentitemsresponse"></a>
<a id="schema_ExperimentItemsResponse"></a>
<a id="tocSexperimentitemsresponse"></a>
<a id="tocsexperimentitemsresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "traceId": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "level": "DEBUG",
      "environment": "string",
      "experimentId": "string",
      "experimentName": "string",
      "experimentItemId": "string",
      "experimentDatasetId": "string",
      "experimentItemVersion": "1970-01-01T00:00:00Z",
      "input": null,
      "output": null,
      "expectedOutput": null,
      "metadata": {},
      "experimentItemMetadata": {},
      "experimentMetadata": {},
      "experimentDescription": "string",
      "scores": [
        {
          "dataType": "NUMERIC",
          "id": "string",
          "projectId": "string",
          "name": "string",
          "source": "ANNOTATION",
          "timestamp": "1970-01-01T00:00:00Z",
          "environment": "string",
          "createdAt": "1970-01-01T00:00:00Z",
          "updatedAt": "1970-01-01T00:00:00Z",
          "comment": "string",
          "configId": "string",
          "metadata": {},
          "authorUserId": "string",
          "queueId": "string",
          "subject": {
            "kind": "trace",
            "id": "string"
          },
          "value": 0
        }
      ]
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ExperimentItem](#schemaexperimentitem)]|true|none|none|
|meta|[ExperimentsResponseMeta](#schemaexperimentsresponsemeta)|true|none|Metadata for cursor-based pagination.|

<h2 id="tocS_ExperimentItem">ExperimentItem</h2>
<!-- backwards compatibility -->
<a id="schemaexperimentitem"></a>
<a id="schema_ExperimentItem"></a>
<a id="tocSexperimentitem"></a>
<a id="tocsexperimentitem"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "level": "DEBUG",
  "environment": "string",
  "experimentId": "string",
  "experimentName": "string",
  "experimentItemId": "string",
  "experimentDatasetId": "string",
  "experimentItemVersion": "1970-01-01T00:00:00Z",
  "input": null,
  "output": null,
  "expectedOutput": null,
  "metadata": {},
  "experimentItemMetadata": {},
  "experimentMetadata": {},
  "experimentDescription": "string",
  "scores": [
    {
      "dataType": "NUMERIC",
      "id": "string",
      "projectId": "string",
      "name": "string",
      "source": "ANNOTATION",
      "timestamp": "1970-01-01T00:00:00Z",
      "environment": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "comment": "string",
      "configId": "string",
      "metadata": {},
      "authorUserId": "string",
      "queueId": "string",
      "subject": {
        "kind": "trace",
        "id": "string"
      },
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|traceId|string|true|none|none|
|startTime|string(date-time)|true|none|none|
|endTime|string(date-time) \| null|true|none|none|
|level|[ObservationLevel](#schemaobservationlevel)|true|none|none|
|environment|string|true|none|none|
|experimentId|string|true|none|none|
|experimentName|string|true|none|none|
|experimentItemId|string|true|none|none|
|experimentDatasetId|string \| null|false|none|Included when `fields=dataset` is requested.|
|experimentItemVersion|string(date-time) \| null|false|none|Included when `fields=dataset` is requested.|
|input|object \| null|false|none|Included when `fields=io` is requested.|
|output|object \| null|false|none|Included when `fields=io` is requested.|
|expectedOutput|object \| null|false|none|Included when `fields=io` is requested.|
|metadata|object \| null|false|none|Included when `fields=metadata` is requested.|
|experimentItemMetadata|object \| null|false|none|Included when `fields=itemMetadata` is requested.|
|experimentMetadata|object \| null|false|none|Included when `fields=experimentMetadata` is requested.|
|experimentDescription|string \| null|false|none|Included when `fields=experimentMetadata` is requested.|
|scores|[[ScoreV3](#schemascorev3)]|false|none|Included only when `fields=scores` is requested. Contains item and trace scores only; experiment-level scores are returned by the experiments endpoint.|

#### Enumerated Values

|Property|Value|
|---|---|
|level|DEBUG|
|level|DEFAULT|
|level|WARNING|
|level|ERROR|

<h2 id="tocS_FeedbackTargetType">FeedbackTargetType</h2>
<!-- backwards compatibility -->
<a id="schemafeedbacktargettype"></a>
<a id="schema_FeedbackTargetType"></a>
<a id="tocSfeedbacktargettype"></a>
<a id="tocsfeedbacktargettype"></a>

```json
"skill"
```

<h2 id="tocS_SubmitFeedbackRequest">SubmitFeedbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitfeedbackrequest"></a>
<a id="schema_SubmitFeedbackRequest"></a>
<a id="tocSsubmitfeedbackrequest"></a>
<a id="tocssubmitfeedbackrequest"></a>

```json
{
  "targetType": "skill",
  "target": "string",
  "feedback": "string",
  "goal": "string",
  "referenceUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetType|[FeedbackTargetType](#schemafeedbacktargettype)|true|none|Category of the thing the feedback is about.|
|target|string|true|none|The specific instance within targetType: the skill name, MCP tool name, CLI command, API endpoint path, or docs page path (e.g. 'queryMetrics', '/docs/mcp'). An identifier, not a sentence. Must be between 1 and 200 characters.|
|feedback|string|true|none|Concise feedback text approved by the user. Must be between 1 and 3000 characters.|
|goal|string \| null|false|none|Optional user-approved goal or use case they were trying to achieve. Must be between 1 and 1500 characters when provided. Do not include secrets, customer data, trace payloads, or broad unrelated context.|
|referenceUrl|string \| null|false|none|Optional HTTP(S) reference URL. Langfuse stores it as text for triage and does not fetch it.|

#### Enumerated Values

|Property|Value|
|---|---|
|targetType|skill|
|targetType|mcp-tool|
|targetType|cli|
|targetType|docs|
|targetType|public-api|
|targetType|other|

<h2 id="tocS_SubmitFeedbackResponse">SubmitFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubmitfeedbackresponse"></a>
<a id="schema_SubmitFeedbackResponse"></a>
<a id="tocSsubmitfeedbackresponse"></a>
<a id="tocssubmitfeedbackresponse"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Correlation ID for the submitted feedback.|

<h2 id="tocS_HealthResponse">HealthResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthresponse"></a>
<a id="schema_HealthResponse"></a>
<a id="tocShealthresponse"></a>
<a id="tocshealthresponse"></a>

```json
{
  "version": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Langfuse server version|
|status|string|true|none|none|

<h2 id="tocS_LlmConnection">LlmConnection</h2>
<!-- backwards compatibility -->
<a id="schemallmconnection"></a>
<a id="schema_LlmConnection"></a>
<a id="tocSllmconnection"></a>
<a id="tocsllmconnection"></a>

```json
{
  "id": "string",
  "provider": "string",
  "adapter": "string",
  "displaySecretKey": "string",
  "baseURL": "string",
  "customModels": [
    "string"
  ],
  "withDefaultModels": true,
  "extraHeaderKeys": [
    "string"
  ],
  "config": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

LLM API connection configuration (secrets excluded)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|provider|string|true|none|Provider name (e.g., 'openai', 'my-gateway'). Must be unique in project, used for upserting.|
|adapter|string|true|none|The adapter used to interface with the LLM|
|displaySecretKey|string|true|none|Masked version of the secret key for display purposes|
|baseURL|string \| null|false|none|Custom base URL for the LLM API|
|customModels|[string]|true|none|List of custom model names available for this connection|
|withDefaultModels|boolean|true|none|Whether to include default models for this adapter|
|extraHeaderKeys|[string]|true|none|Keys of extra headers sent with requests (values excluded for security)|
|config|object \| null|false|none|Adapter-specific configuration. Required for Bedrock (`{"region":"us-east-1"}`), optional for OpenAI (`{"useResponsesApi":true}`), optional for VertexAI (`{"location":"us-central1"}`), not used by other adapters.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_PaginatedLlmConnections">PaginatedLlmConnections</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedllmconnections"></a>
<a id="schema_PaginatedLlmConnections"></a>
<a id="tocSpaginatedllmconnections"></a>
<a id="tocspaginatedllmconnections"></a>

```json
{
  "data": [
    {
      "id": "string",
      "provider": "string",
      "adapter": "string",
      "displaySecretKey": "string",
      "baseURL": "string",
      "customModels": [
        "string"
      ],
      "withDefaultModels": true,
      "extraHeaderKeys": [
        "string"
      ],
      "config": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LlmConnection](#schemallmconnection)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_UpsertLlmConnectionRequest">UpsertLlmConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupsertllmconnectionrequest"></a>
<a id="schema_UpsertLlmConnectionRequest"></a>
<a id="tocSupsertllmconnectionrequest"></a>
<a id="tocsupsertllmconnectionrequest"></a>

```json
{
  "provider": "string",
  "adapter": "anthropic",
  "secretKey": "string",
  "baseURL": "string",
  "customModels": [
    "string"
  ],
  "withDefaultModels": true,
  "extraHeaders": {
    "property1": "string",
    "property2": "string"
  },
  "config": {}
}
```

Request to create or update an LLM connection (upsert)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|true|none|Provider name (e.g., 'openai', 'my-gateway'). Must be unique in project, used for upserting.|
|adapter|[LlmAdapter](#schemallmadapter)|true|none|The adapter used to interface with the LLM|
|secretKey|string|true|none|Secret key for the LLM API.|
|baseURL|string \| null|false|none|Custom base URL for the LLM API|
|customModels|[string]|false|none|List of custom model names|
|withDefaultModels|boolean \| null|false|none|Whether to include default models. Default is true.|
|extraHeaders|object \| null|false|none|Extra headers to send with requests|
|config|object \| null|false|none|Adapter-specific configuration. Validation rules: - **Bedrock**: Required. Must be `{"region": "<aws-region>"}` (e.g., `{"region":"us-east-1"}`) - **OpenAI**: Optional. If provided, must be `{"useResponsesApi": <boolean>}` to control whether Langfuse routes calls through OpenAI's Responses API. - **VertexAI**: Optional. If provided, must be `{"location": "<gcp-location>"}` (e.g., `{"location":"us-central1"}`) - **Other adapters**: Not supported. Omit this field or set to null.|

#### Enumerated Values

|Property|Value|
|---|---|
|adapter|anthropic|
|adapter|openai|
|adapter|azure|
|adapter|bedrock|
|adapter|google-vertex-ai|
|adapter|google-ai-studio|

<h2 id="tocS_DeleteLlmConnectionResponse">DeleteLlmConnectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletellmconnectionresponse"></a>
<a id="schema_DeleteLlmConnectionResponse"></a>
<a id="tocSdeletellmconnectionresponse"></a>
<a id="tocsdeletellmconnectionresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_LlmAdapter">LlmAdapter</h2>
<!-- backwards compatibility -->
<a id="schemallmadapter"></a>
<a id="schema_LlmAdapter"></a>
<a id="tocSllmadapter"></a>
<a id="tocsllmadapter"></a>

```json
"anthropic"
```

<h2 id="tocS_GetMediaResponse">GetMediaResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmediaresponse"></a>
<a id="schema_GetMediaResponse"></a>
<a id="tocSgetmediaresponse"></a>
<a id="tocsgetmediaresponse"></a>

```json
{
  "mediaId": "string",
  "contentType": "string",
  "contentLength": 0,
  "uploadedAt": "1970-01-01T00:00:00Z",
  "url": "string",
  "urlExpiry": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaId|string|true|none|The unique langfuse identifier of a media record|
|contentType|string|true|none|The MIME type of the media record|
|contentLength|integer|true|none|The size of the media record in bytes|
|uploadedAt|string(date-time)|true|none|The date and time when the media record was uploaded|
|url|string|true|none|The download URL of the media record|
|urlExpiry|string|true|none|The expiry date and time of the media record download URL|

<h2 id="tocS_PatchMediaBody">PatchMediaBody</h2>
<!-- backwards compatibility -->
<a id="schemapatchmediabody"></a>
<a id="schema_PatchMediaBody"></a>
<a id="tocSpatchmediabody"></a>
<a id="tocspatchmediabody"></a>

```json
{
  "uploadedAt": "1970-01-01T00:00:00Z",
  "uploadHttpStatus": 0,
  "uploadHttpError": "string",
  "uploadTimeMs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadedAt|string(date-time)|true|none|The date and time when the media record was uploaded|
|uploadHttpStatus|integer|true|none|The HTTP status code of the upload|
|uploadHttpError|string \| null|false|none|The HTTP error message of the upload|
|uploadTimeMs|integer \| null|false|none|The time in milliseconds it took to upload the media record|

<h2 id="tocS_GetMediaUploadUrlRequest">GetMediaUploadUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmediauploadurlrequest"></a>
<a id="schema_GetMediaUploadUrlRequest"></a>
<a id="tocSgetmediauploadurlrequest"></a>
<a id="tocsgetmediauploadurlrequest"></a>

```json
{
  "traceId": "string",
  "observationId": "string",
  "datasetId": "string",
  "datasetItemId": "string",
  "contentType": "image/png",
  "contentLength": 0,
  "sha256Hash": "string",
  "field": "string"
}
```

Request a presigned media upload URL. Provide exactly one context: a trace (traceId, optionally observationId) or a dataset item (datasetId + datasetItemId). field is required and must match the chosen context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceId|string \| null|false|none|The trace the media is associated with. Null for dataset item media uploads.|
|observationId|string \| null|false|none|The observation ID associated with the media record. If the media record is associated directly with a trace, this will be null.|
|datasetId|string \| null|false|none|The dataset the media belongs to. Null for trace/observation media uploads.|
|datasetItemId|string \| null|false|none|The dataset item the media is associated with (need not exist yet). Null for trace/observation media uploads.|
|contentType|[MediaContentType](#schemamediacontenttype)|true|none|The MIME type of the media record|
|contentLength|integer|true|none|The size of the media record in bytes|
|sha256Hash|string|true|none|The SHA-256 hash of the media record|
|field|string|true|none|The item field the media is in: `input`/`output`/`metadata` (trace) or `input`/`expectedOutput`/`metadata` (dataset item).|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|image/png|
|contentType|image/jpeg|
|contentType|image/jpg|
|contentType|image/webp|
|contentType|image/gif|
|contentType|image/svg+xml|
|contentType|image/tiff|
|contentType|image/bmp|
|contentType|image/avif|
|contentType|image/heic|
|contentType|audio/mpeg|
|contentType|audio/mp3|
|contentType|audio/wav|
|contentType|audio/ogg|
|contentType|audio/oga|
|contentType|audio/aac|
|contentType|audio/mp4|
|contentType|audio/flac|
|contentType|audio/opus|
|contentType|audio/webm|
|contentType|video/mp4|
|contentType|video/webm|
|contentType|video/ogg|
|contentType|video/mpeg|
|contentType|video/quicktime|
|contentType|video/x-msvideo|
|contentType|video/x-matroska|
|contentType|text/plain|
|contentType|text/html|
|contentType|text/css|
|contentType|text/csv|
|contentType|text/markdown|
|contentType|text/x-python|
|contentType|application/javascript|
|contentType|text/x-typescript|
|contentType|application/x-yaml|
|contentType|application/pdf|
|contentType|application/msword|
|contentType|application/vnd.ms-excel|
|contentType|application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|
|contentType|application/zip|
|contentType|application/json|
|contentType|application/xml|
|contentType|application/octet-stream|
|contentType|application/vnd.openxmlformats-officedocument.wordprocessingml.document|
|contentType|application/vnd.openxmlformats-officedocument.presentationml.presentation|
|contentType|application/rtf|
|contentType|application/x-ndjson|
|contentType|application/vnd.apache.parquet|
|contentType|application/gzip|
|contentType|application/x-tar|
|contentType|application/x-7z-compressed|

<h2 id="tocS_GetMediaUploadUrlResponse">GetMediaUploadUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmediauploadurlresponse"></a>
<a id="schema_GetMediaUploadUrlResponse"></a>
<a id="tocSgetmediauploadurlresponse"></a>
<a id="tocsgetmediauploadurlresponse"></a>

```json
{
  "uploadUrl": "string",
  "mediaId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadUrl|string \| null|false|none|The presigned upload URL. If the asset is already uploaded, this will be null|
|mediaId|string|true|none|The unique langfuse identifier of a media record|

<h2 id="tocS_MediaContentType">MediaContentType</h2>
<!-- backwards compatibility -->
<a id="schemamediacontenttype"></a>
<a id="schema_MediaContentType"></a>
<a id="tocSmediacontenttype"></a>
<a id="tocsmediacontenttype"></a>

```json
"image/png"
```

The MIME type of the media record

<h2 id="tocS_MetricsV2Response">MetricsV2Response</h2>
<!-- backwards compatibility -->
<a id="schemametricsv2response"></a>
<a id="schema_MetricsV2Response"></a>
<a id="tocSmetricsv2response"></a>
<a id="tocsmetricsv2response"></a>

```json
{
  "data": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|The metrics data. Each item in the list contains the metric values and dimensions requested in the query.<br>Format varies based on the query parameters.<br>Histograms will return an array with [lower, upper, height] tuples.|

<h2 id="tocS_ModelTokenizerId">ModelTokenizerId</h2>
<!-- backwards compatibility -->
<a id="schemamodeltokenizerid"></a>
<a id="schema_ModelTokenizerId"></a>
<a id="tocSmodeltokenizerid"></a>
<a id="tocsmodeltokenizerid"></a>

```json
"openai"
```

Tokenizer supported by Langfuse for model usage inference.

<h2 id="tocS_PaginatedModels">PaginatedModels</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedmodels"></a>
<a id="schema_PaginatedModels"></a>
<a id="tocSpaginatedmodels"></a>
<a id="tocspaginatedmodels"></a>

```json
{
  "data": [
    {
      "id": "string",
      "modelName": "string",
      "matchPattern": "string",
      "startDate": "1970-01-01T00:00:00Z",
      "unit": "CHARACTERS",
      "inputPrice": 0,
      "outputPrice": 0,
      "totalPrice": 0,
      "tokenizerId": "string",
      "tokenizerConfig": null,
      "isLangfuseManaged": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "prices": {
        "property1": {
          "price": 0
        },
        "property2": {
          "price": 0
        }
      },
      "pricingTiers": [
        {
          "id": "string",
          "name": "string",
          "isDefault": true,
          "priority": 0,
          "conditions": [
            {
              "usageDetailPattern": "string",
              "operator": "gt",
              "value": 0,
              "caseSensitive": true
            }
          ],
          "prices": {
            "property1": 0,
            "property2": 0
          }
        }
      ]
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Model](#schemamodel)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_CreateModelRequest">CreateModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodelrequest"></a>
<a id="schema_CreateModelRequest"></a>
<a id="tocScreatemodelrequest"></a>
<a id="tocscreatemodelrequest"></a>

```json
{
  "modelName": "string",
  "matchPattern": "string",
  "startDate": "1970-01-01T00:00:00Z",
  "unit": "CHARACTERS",
  "inputPrice": 0,
  "outputPrice": 0,
  "totalPrice": 0,
  "pricingTiers": [
    {
      "name": "string",
      "isDefault": true,
      "priority": 0,
      "conditions": [
        {
          "usageDetailPattern": "string",
          "operator": "gt",
          "value": 0,
          "caseSensitive": true
        }
      ],
      "prices": {
        "property1": 0,
        "property2": 0
      }
    }
  ],
  "tokenizerId": "openai",
  "tokenizerConfig": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelName|string|true|none|Name of the model definition. If multiple with the same name exist, they are applied in the following order: (1) custom over built-in, (2) newest according to startTime where model.startTime<observation.startTime|
|matchPattern|string|true|none|Regex pattern which matches this model definition to generation.model. Useful in case of fine-tuned models. If you want to exact match, use `(?i)^modelname$`|
|startDate|string(date-time) \| null|false|none|Apply only to generations which are newer than this ISO date.|
|unit|[ModelUsageUnit](#schemamodelusageunit)|true|none|Unit used by this model.|
|inputPrice|number(double) \| null|false|none|Deprecated. Use 'pricingTiers' instead. Price (USD) per input unit. Creates a default tier if pricingTiers not provided.|
|outputPrice|number(double) \| null|false|none|Deprecated. Use 'pricingTiers' instead. Price (USD) per output unit. Creates a default tier if pricingTiers not provided.|
|totalPrice|number(double) \| null|false|none|Deprecated. Use 'pricingTiers' instead. Price (USD) per total units. Cannot be set if input or output price is set. Creates a default tier if pricingTiers not provided.|
|pricingTiers|[[PricingTierInput](#schemapricingtierinput)]|false|none|Optional. Array of pricing tiers for this model.<br><br>Use pricing tiers for all models - both those with threshold-based pricing variations and those with simple flat pricing:<br><br>- For models with standard flat pricing: Create a single default tier with your prices<br>  (e.g., one tier with isDefault=true, priority=0, conditions=[], and your standard prices)<br><br>- For models with threshold-based pricing: Create a default tier plus additional conditional tiers<br>  (e.g., default tier for standard usage + high-volume tier for usage above certain thresholds)<br><br>Requirements:<br>- Cannot be provided with flat prices (inputPrice/outputPrice/totalPrice) - use one approach or the other<br>- Must include exactly one default tier with isDefault=true, priority=0, and conditions=[]<br>- All tier names and priorities must be unique within the model<br>- Each tier must define at least one price<br><br>If omitted, you must provide flat prices instead (inputPrice/outputPrice/totalPrice),<br>which will automatically create a single default tier named "Standard".|
|tokenizerId|[ModelTokenizerId](#schemamodeltokenizerid)|false|none|Optional. Tokenizer to be applied to observations which match to this model. See docs for more details.|
|tokenizerConfig|object \| null|false|none|Optional. Configuration for the selected tokenizer. Needs to be JSON. See docs for more details.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|CHARACTERS|
|unit|TOKENS|
|unit|MILLISECONDS|
|unit|SECONDS|
|unit|IMAGES|
|unit|REQUESTS|
|tokenizerId|openai|
|tokenizerId|claude|

<h2 id="tocS_ObservationsV2Response">ObservationsV2Response</h2>
<!-- backwards compatibility -->
<a id="schemaobservationsv2response"></a>
<a id="schema_ObservationsV2Response"></a>
<a id="tocSobservationsv2response"></a>
<a id="tocsobservationsv2response"></a>

```json
{
  "data": [
    {
      "id": "string",
      "traceId": "string",
      "startTime": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "projectId": "string",
      "parentObservationId": "string",
      "type": "string",
      "isRootObservation": true,
      "name": "string",
      "level": "DEBUG",
      "statusMessage": "string",
      "version": "string",
      "environment": "string",
      "bookmarked": true,
      "public": true,
      "userId": "string",
      "sessionId": "string",
      "completionStartTime": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "input": null,
      "output": null,
      "metadata": {},
      "model": "string",
      "internalModelId": "string",
      "modelParameters": null,
      "usageDetails": {
        "property1": 0,
        "property2": 0
      },
      "costDetails": {
        "property1": 0,
        "property2": 0
      },
      "totalCost": 0,
      "usagePricingTierName": "string",
      "promptId": "string",
      "promptName": "string",
      "promptVersion": 0,
      "latency": 0,
      "timeToFirstToken": 0,
      "modelId": "string",
      "inputPrice": "string",
      "outputPrice": "string",
      "totalPrice": "string",
      "traceName": "string",
      "tags": [
        "string"
      ],
      "release": "string"
    }
  ],
  "meta": {
    "cursor": "string"
  }
}
```

Response containing observations with field-group-based filtering and cursor-based pagination.

The `data` array contains observation objects with only the requested field groups included.
Use the `cursor` in `meta` to retrieve the next page of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ObservationV2](#schemaobservationv2)]|true|none|Array of observation objects. Fields included depend on the `fields` parameter in the request.|
|meta|[ObservationsV2Meta](#schemaobservationsv2meta)|true|none|Metadata for cursor-based pagination.|

<h2 id="tocS_ObservationsV2Meta">ObservationsV2Meta</h2>
<!-- backwards compatibility -->
<a id="schemaobservationsv2meta"></a>
<a id="schema_ObservationsV2Meta"></a>
<a id="tocSobservationsv2meta"></a>
<a id="tocsobservationsv2meta"></a>

```json
{
  "cursor": "string"
}
```

Metadata for cursor-based pagination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string \| null|false|none|Opaque cursor for the next page. Omitted when there is no next page.|

<h2 id="tocS_OtelResourceSpan">OtelResourceSpan</h2>
<!-- backwards compatibility -->
<a id="schemaotelresourcespan"></a>
<a id="schema_OtelResourceSpan"></a>
<a id="tocSotelresourcespan"></a>
<a id="tocsotelresourcespan"></a>

```json
{
  "resource": {
    "attributes": [
      {
        "key": "string",
        "value": {
          "stringValue": "string",
          "intValue": 0,
          "doubleValue": 0,
          "boolValue": true
        }
      }
    ]
  },
  "scopeSpans": [
    {
      "scope": {
        "name": "string",
        "version": "string",
        "attributes": [
          {
            "key": "string",
            "value": {
              "stringValue": "string",
              "intValue": 0,
              "doubleValue": 0,
              "boolValue": true
            }
          }
        ]
      },
      "spans": [
        {
          "traceId": null,
          "spanId": null,
          "parentSpanId": null,
          "name": "string",
          "kind": 0,
          "startTimeUnixNano": null,
          "endTimeUnixNano": null,
          "attributes": [
            {
              "key": "string",
              "value": {
                "stringValue": "string",
                "intValue": 0,
                "doubleValue": 0,
                "boolValue": true
              }
            }
          ],
          "status": null
        }
      ]
    }
  ]
}
```

Represents a collection of spans from a single resource as per OTLP specification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|[OtelResource](#schemaotelresource)|false|none|Resource information|
|scopeSpans|[[OtelScopeSpan](#schemaotelscopespan)]|false|none|Array of scope spans|

<h2 id="tocS_OtelResource">OtelResource</h2>
<!-- backwards compatibility -->
<a id="schemaotelresource"></a>
<a id="schema_OtelResource"></a>
<a id="tocSotelresource"></a>
<a id="tocsotelresource"></a>

```json
{
  "attributes": [
    {
      "key": "string",
      "value": {
        "stringValue": "string",
        "intValue": 0,
        "doubleValue": 0,
        "boolValue": true
      }
    }
  ]
}
```

Resource attributes identifying the source of telemetry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[OtelAttribute](#schemaotelattribute)]|false|none|Resource attributes like service.name, service.version, etc.|

<h2 id="tocS_OtelScopeSpan">OtelScopeSpan</h2>
<!-- backwards compatibility -->
<a id="schemaotelscopespan"></a>
<a id="schema_OtelScopeSpan"></a>
<a id="tocSotelscopespan"></a>
<a id="tocsotelscopespan"></a>

```json
{
  "scope": {
    "name": "string",
    "version": "string",
    "attributes": [
      {
        "key": "string",
        "value": {
          "stringValue": "string",
          "intValue": 0,
          "doubleValue": 0,
          "boolValue": true
        }
      }
    ]
  },
  "spans": [
    {
      "traceId": null,
      "spanId": null,
      "parentSpanId": null,
      "name": "string",
      "kind": 0,
      "startTimeUnixNano": null,
      "endTimeUnixNano": null,
      "attributes": [
        {
          "key": "string",
          "value": {
            "stringValue": "string",
            "intValue": 0,
            "doubleValue": 0,
            "boolValue": true
          }
        }
      ],
      "status": null
    }
  ]
}
```

Collection of spans from a single instrumentation scope

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|[OtelScope](#schemaotelscope)|false|none|Instrumentation scope information|
|spans|[[OtelSpan](#schemaotelspan)]|false|none|Array of spans|

<h2 id="tocS_OtelScope">OtelScope</h2>
<!-- backwards compatibility -->
<a id="schemaotelscope"></a>
<a id="schema_OtelScope"></a>
<a id="tocSotelscope"></a>
<a id="tocsotelscope"></a>

```json
{
  "name": "string",
  "version": "string",
  "attributes": [
    {
      "key": "string",
      "value": {
        "stringValue": "string",
        "intValue": 0,
        "doubleValue": 0,
        "boolValue": true
      }
    }
  ]
}
```

Instrumentation scope information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Instrumentation scope name|
|version|string \| null|false|none|Instrumentation scope version|
|attributes|[[OtelAttribute](#schemaotelattribute)]|false|none|Additional scope attributes|

<h2 id="tocS_OtelSpan">OtelSpan</h2>
<!-- backwards compatibility -->
<a id="schemaotelspan"></a>
<a id="schema_OtelSpan"></a>
<a id="tocSotelspan"></a>
<a id="tocsotelspan"></a>

```json
{
  "traceId": null,
  "spanId": null,
  "parentSpanId": null,
  "name": "string",
  "kind": 0,
  "startTimeUnixNano": null,
  "endTimeUnixNano": null,
  "attributes": [
    {
      "key": "string",
      "value": {
        "stringValue": "string",
        "intValue": 0,
        "doubleValue": 0,
        "boolValue": true
      }
    }
  ],
  "status": null
}
```

Individual span representing a unit of work or operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceId|object \| null|false|none|Trace ID (16 bytes, hex-encoded string in JSON or Buffer in binary)|
|spanId|object \| null|false|none|Span ID (8 bytes, hex-encoded string in JSON or Buffer in binary)|
|parentSpanId|object \| null|false|none|Parent span ID if this is a child span|
|name|string \| null|false|none|Span name describing the operation|
|kind|integer \| null|false|none|Span kind (1=INTERNAL, 2=SERVER, 3=CLIENT, 4=PRODUCER, 5=CONSUMER)|
|startTimeUnixNano|object \| null|false|none|Start time in nanoseconds since Unix epoch|
|endTimeUnixNano|object \| null|false|none|End time in nanoseconds since Unix epoch|
|attributes|[[OtelAttribute](#schemaotelattribute)]|false|none|Span attributes including Langfuse-specific attributes (langfuse.observation.*)|
|status|object \| null|false|none|Span status object|

<h2 id="tocS_OtelAttribute">OtelAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaotelattribute"></a>
<a id="schema_OtelAttribute"></a>
<a id="tocSotelattribute"></a>
<a id="tocsotelattribute"></a>

```json
{
  "key": "string",
  "value": {
    "stringValue": "string",
    "intValue": 0,
    "doubleValue": 0,
    "boolValue": true
  }
}
```

Key-value attribute pair for resources, scopes, or spans

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string \| null|false|none|Attribute key (e.g., "service.name", "langfuse.observation.type")|
|value|[OtelAttributeValue](#schemaotelattributevalue)|false|none|Attribute value|

<h2 id="tocS_OtelAttributeValue">OtelAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemaotelattributevalue"></a>
<a id="schema_OtelAttributeValue"></a>
<a id="tocSotelattributevalue"></a>
<a id="tocsotelattributevalue"></a>

```json
{
  "stringValue": "string",
  "intValue": 0,
  "doubleValue": 0,
  "boolValue": true
}
```

Attribute value wrapper supporting different value types

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stringValue|string \| null|false|none|String value|
|intValue|integer \| null|false|none|Integer value|
|doubleValue|number(double) \| null|false|none|Double value|
|boolValue|boolean \| null|false|none|Boolean value|

<h2 id="tocS_OtelTraceResponse">OtelTraceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoteltraceresponse"></a>
<a id="schema_OtelTraceResponse"></a>
<a id="tocSoteltraceresponse"></a>
<a id="tocsoteltraceresponse"></a>

```json
{}
```

Response from trace export request. Empty object indicates success.

<h2 id="tocS_MembershipRole">MembershipRole</h2>
<!-- backwards compatibility -->
<a id="schemamembershiprole"></a>
<a id="schema_MembershipRole"></a>
<a id="tocSmembershiprole"></a>
<a id="tocsmembershiprole"></a>

```json
"OWNER"
```

<h2 id="tocS_MembershipRequest">MembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemamembershiprequest"></a>
<a id="schema_MembershipRequest"></a>
<a id="tocSmembershiprequest"></a>
<a id="tocsmembershiprequest"></a>

```json
{
  "userId": "string",
  "role": "OWNER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|role|[MembershipRole](#schemamembershiprole)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|OWNER|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_DeleteMembershipRequest">DeleteMembershipRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemembershiprequest"></a>
<a id="schema_DeleteMembershipRequest"></a>
<a id="tocSdeletemembershiprequest"></a>
<a id="tocsdeletemembershiprequest"></a>

```json
{
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|

<h2 id="tocS_MembershipResponse">MembershipResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershipresponse"></a>
<a id="schema_MembershipResponse"></a>
<a id="tocSmembershipresponse"></a>
<a id="tocsmembershipresponse"></a>

```json
{
  "userId": "string",
  "role": "OWNER",
  "email": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|role|[MembershipRole](#schemamembershiprole)|true|none|none|
|email|string|true|none|none|
|name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|OWNER|
|role|ADMIN|
|role|MEMBER|
|role|VIEWER|

<h2 id="tocS_MembershipDeletionResponse">MembershipDeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershipdeletionresponse"></a>
<a id="schema_MembershipDeletionResponse"></a>
<a id="tocSmembershipdeletionresponse"></a>
<a id="tocsmembershipdeletionresponse"></a>

```json
{
  "message": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|userId|string|true|none|none|

<h2 id="tocS_MembershipsResponse">MembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershipsresponse"></a>
<a id="schema_MembershipsResponse"></a>
<a id="tocSmembershipsresponse"></a>
<a id="tocsmembershipsresponse"></a>

```json
{
  "memberships": [
    {
      "userId": "string",
      "role": "OWNER",
      "email": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberships|[[MembershipResponse](#schemamembershipresponse)]|true|none|none|

<h2 id="tocS_OrganizationProject">OrganizationProject</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationproject"></a>
<a id="schema_OrganizationProject"></a>
<a id="tocSorganizationproject"></a>
<a id="tocsorganizationproject"></a>

```json
{
  "id": "string",
  "name": "string",
  "metadata": {},
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|metadata|object \| null|false|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_OrganizationProjectsResponse">OrganizationProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationprojectsresponse"></a>
<a id="schema_OrganizationProjectsResponse"></a>
<a id="tocSorganizationprojectsresponse"></a>
<a id="tocsorganizationprojectsresponse"></a>

```json
{
  "projects": [
    {
      "id": "string",
      "name": "string",
      "metadata": {},
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[OrganizationProject](#schemaorganizationproject)]|true|none|none|

<h2 id="tocS_OrganizationApiKey">OrganizationApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationapikey"></a>
<a id="schema_OrganizationApiKey"></a>
<a id="tocSorganizationapikey"></a>
<a id="tocsorganizationapikey"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "lastUsedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "note": "string",
  "publicKey": "string",
  "displaySecretKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|expiresAt|string(date-time) \| null|false|none|Expiration timestamp. Null if the key does not expire.|
|lastUsedAt|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|Name of the API key. Contains the same value as note; null if no name was provided.|
|note|string \| null|false|none|**Deprecated.** Deprecated alias for name. Contains the same value as name.|
|publicKey|string|true|none|none|
|displaySecretKey|string|true|none|none|

<h2 id="tocS_OrganizationApiKeysResponse">OrganizationApiKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationapikeysresponse"></a>
<a id="schema_OrganizationApiKeysResponse"></a>
<a id="tocSorganizationapikeysresponse"></a>
<a id="tocsorganizationapikeysresponse"></a>

```json
{
  "apiKeys": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "expiresAt": "1970-01-01T00:00:00Z",
      "lastUsedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "publicKey": "string",
      "displaySecretKey": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeys|[[OrganizationApiKey](#schemaorganizationapikey)]|true|none|none|

<h2 id="tocS_Projects">Projects</h2>
<!-- backwards compatibility -->
<a id="schemaprojects"></a>
<a id="schema_Projects"></a>
<a id="tocSprojects"></a>
<a id="tocsprojects"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "organization": {
        "id": "string",
        "name": "string"
      },
      "metadata": {},
      "retentionDays": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Project](#schemaproject)]|true|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the organization|
|name|string|true|none|The name of the organization|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": "string",
  "name": "string",
  "organization": {
    "id": "string",
    "name": "string"
  },
  "metadata": {},
  "retentionDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|organization|[Organization](#schemaorganization)|true|none|The organization this project belongs to|
|metadata|object|true|none|Metadata for the project|
|retentionDays|integer \| null|false|none|Number of days to retain data. Null or 0 means no retention. Omitted if no retention is configured.|

<h2 id="tocS_ProjectDeletionResponse">ProjectDeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdeletionresponse"></a>
<a id="schema_ProjectDeletionResponse"></a>
<a id="tocSprojectdeletionresponse"></a>
<a id="tocsprojectdeletionresponse"></a>

```json
{
  "success": true,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_ApiKeyList">ApiKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaapikeylist"></a>
<a id="schema_ApiKeyList"></a>
<a id="tocSapikeylist"></a>
<a id="tocsapikeylist"></a>

```json
{
  "apiKeys": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "expiresAt": "1970-01-01T00:00:00Z",
      "lastUsedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "publicKey": "string",
      "displaySecretKey": "string"
    }
  ]
}
```

List of API keys for a project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeys|[[ApiKeySummary](#schemaapikeysummary)]|true|none|none|

<h2 id="tocS_ApiKeySummary">ApiKeySummary</h2>
<!-- backwards compatibility -->
<a id="schemaapikeysummary"></a>
<a id="schema_ApiKeySummary"></a>
<a id="tocSapikeysummary"></a>
<a id="tocsapikeysummary"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "lastUsedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "note": "string",
  "publicKey": "string",
  "displaySecretKey": "string"
}
```

Summary of an API key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|expiresAt|string(date-time) \| null|false|none|Expiration timestamp. Null if the key does not expire.|
|lastUsedAt|string(date-time) \| null|false|none|none|
|name|string \| null|false|none|Name of the API key. Contains the same value as note; null if no name was provided.|
|note|string \| null|false|none|**Deprecated.** Deprecated alias for name. Contains the same value as name.|
|publicKey|string|true|none|none|
|displaySecretKey|string|true|none|none|

<h2 id="tocS_ApiKeyResponse">ApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyresponse"></a>
<a id="schema_ApiKeyResponse"></a>
<a id="tocSapikeyresponse"></a>
<a id="tocsapikeyresponse"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "publicKey": "string",
  "secretKey": "string",
  "displaySecretKey": "string",
  "name": "string",
  "note": "string"
}
```

Response for API key creation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|expiresAt|string(date-time) \| null|false|none|Expiration timestamp. Null if the key does not expire.|
|publicKey|string|true|none|none|
|secretKey|string|true|none|none|
|displaySecretKey|string|true|none|none|
|name|string \| null|false|none|Name of the API key. Contains the same value as note; null if no name was provided.|
|note|string \| null|false|none|**Deprecated.** Deprecated alias for name. Contains the same value as name.|

<h2 id="tocS_ApiKeyDeletionResponse">ApiKeyDeletionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydeletionresponse"></a>
<a id="schema_ApiKeyDeletionResponse"></a>
<a id="tocSapikeydeletionresponse"></a>
<a id="tocsapikeydeletionresponse"></a>

```json
{
  "success": true
}
```

Response for API key deletion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<h2 id="tocS_PromptMetaListResponse">PromptMetaListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapromptmetalistresponse"></a>
<a id="schema_PromptMetaListResponse"></a>
<a id="tocSpromptmetalistresponse"></a>
<a id="tocspromptmetalistresponse"></a>

```json
{
  "data": [
    {
      "name": "string",
      "type": "chat",
      "versions": [
        0
      ],
      "labels": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "lastUpdatedAt": "1970-01-01T00:00:00Z",
      "lastConfig": null
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PromptMeta](#schemapromptmeta)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_PromptMeta">PromptMeta</h2>
<!-- backwards compatibility -->
<a id="schemapromptmeta"></a>
<a id="schema_PromptMeta"></a>
<a id="tocSpromptmeta"></a>
<a id="tocspromptmeta"></a>

```json
{
  "name": "string",
  "type": "chat",
  "versions": [
    0
  ],
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "lastUpdatedAt": "1970-01-01T00:00:00Z",
  "lastConfig": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[PromptType](#schemaprompttype)|true|none|Indicates whether the prompt is a text or chat prompt.|
|versions|[integer]|true|none|none|
|labels|[string]|true|none|none|
|tags|[string]|true|none|none|
|lastUpdatedAt|string(date-time)|true|none|none|
|lastConfig|object|true|none|Config object of the most recent prompt version that matches the filters (if any are provided)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|chat|
|type|text|

<h2 id="tocS_CreatePromptRequest">CreatePromptRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepromptrequest"></a>
<a id="schema_CreatePromptRequest"></a>
<a id="tocScreatepromptrequest"></a>
<a id="tocscreatepromptrequest"></a>

```json
{
  "name": "string",
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ],
  "config": null,
  "type": "chat",
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CreateChatPromptRequest](#schemacreatechatpromptrequest)|false|none|none|
|*oneOf*|[CreateTextPromptRequest](#schemacreatetextpromptrequest)|false|none|none|

<h2 id="tocS_CreateChatPromptRequest">CreateChatPromptRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatechatpromptrequest"></a>
<a id="schema_CreateChatPromptRequest"></a>
<a id="tocScreatechatpromptrequest"></a>
<a id="tocscreatechatpromptrequest"></a>

```json
{
  "name": "string",
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ],
  "config": null,
  "type": "chat",
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The full prompt name, including any folder path, with at most 255 characters.|
|prompt|[[ChatMessageWithPlaceholders](#schemachatmessagewithplaceholders)]|true|none|none|
|config|object \| null|false|none|none|
|type|[CreateChatPromptType](#schemacreatechatprompttype)|true|none|none|
|labels|[string]|false|none|List of deployment labels of this prompt version.|
|tags|[string]|false|none|List of tags to apply to all versions of this prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|chat|

<h2 id="tocS_CreateTextPromptRequest">CreateTextPromptRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetextpromptrequest"></a>
<a id="schema_CreateTextPromptRequest"></a>
<a id="tocScreatetextpromptrequest"></a>
<a id="tocscreatetextpromptrequest"></a>

```json
{
  "name": "string",
  "prompt": "string",
  "config": null,
  "type": "text",
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The full prompt name, including any folder path, with at most 255 characters.|
|prompt|string|true|none|none|
|config|object \| null|false|none|none|
|type|[CreateTextPromptType](#schemacreatetextprompttype)|false|none|none|
|labels|[string]|false|none|List of deployment labels of this prompt version.|
|tags|[string]|false|none|List of tags to apply to all versions of this prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_Prompt">Prompt</h2>
<!-- backwards compatibility -->
<a id="schemaprompt"></a>
<a id="schema_Prompt"></a>
<a id="tocSprompt"></a>
<a id="tocsprompt"></a>

```json
{
  "type": "chat",
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {},
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|version|integer|true|none|none|
|config|object|true|none|none|
|labels|[string]|true|none|List of deployment labels of this prompt version.|
|tags|[string]|true|none|List of tags. Used to filter via UI and API. The same across versions of a prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|
|resolutionGraph|object \| null|false|none|The dependency resolution graph for the current prompt. Null if the prompt has no dependencies or if `resolve=false` was used.|
|prompt|[[ChatMessageWithPlaceholders](#schemachatmessagewithplaceholders)]|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|name|string|true|none|none|
|version|integer|true|none|none|
|config|object|true|none|none|
|labels|[string]|true|none|List of deployment labels of this prompt version.|
|tags|[string]|true|none|List of tags. Used to filter via UI and API. The same across versions of a prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|
|resolutionGraph|object \| null|false|none|The dependency resolution graph for the current prompt. Null if the prompt has no dependencies or if `resolve=false` was used.|
|prompt|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|chat|
|type|text|

<h2 id="tocS_PromptType">PromptType</h2>
<!-- backwards compatibility -->
<a id="schemaprompttype"></a>
<a id="schema_PromptType"></a>
<a id="tocSprompttype"></a>
<a id="tocsprompttype"></a>

```json
"chat"
```

<h2 id="tocS_BasePrompt">BasePrompt</h2>
<!-- backwards compatibility -->
<a id="schemabaseprompt"></a>
<a id="schema_BasePrompt"></a>
<a id="tocSbaseprompt"></a>
<a id="tocsbaseprompt"></a>

```json
{
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|version|integer|true|none|none|
|config|object|true|none|none|
|labels|[string]|true|none|List of deployment labels of this prompt version.|
|tags|[string]|true|none|List of tags. Used to filter via UI and API. The same across versions of a prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|
|resolutionGraph|object \| null|false|none|The dependency resolution graph for the current prompt. Null if the prompt has no dependencies or if `resolve=false` was used.|

<h2 id="tocS_ChatMessageWithPlaceholders">ChatMessageWithPlaceholders</h2>
<!-- backwards compatibility -->
<a id="schemachatmessagewithplaceholders"></a>
<a id="schema_ChatMessageWithPlaceholders"></a>
<a id="tocSchatmessagewithplaceholders"></a>
<a id="tocschatmessagewithplaceholders"></a>

```json
{
  "role": "string",
  "content": "string",
  "type": "chatmessage"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ChatMessage](#schemachatmessage)|false|none|none|
|*oneOf*|[PlaceholderMessage](#schemaplaceholdermessage)|false|none|none|

<h2 id="tocS_ChatMessage">ChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatmessage"></a>
<a id="schema_ChatMessage"></a>
<a id="tocSchatmessage"></a>
<a id="tocschatmessage"></a>

```json
{
  "role": "string",
  "content": "string",
  "type": "chatmessage"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|
|content|string|true|none|none|
|type|[ChatMessageType](#schemachatmessagetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|chatmessage|

<h2 id="tocS_ChatMessageType">ChatMessageType</h2>
<!-- backwards compatibility -->
<a id="schemachatmessagetype"></a>
<a id="schema_ChatMessageType"></a>
<a id="tocSchatmessagetype"></a>
<a id="tocschatmessagetype"></a>

```json
"chatmessage"
```

<h2 id="tocS_PlaceholderMessage">PlaceholderMessage</h2>
<!-- backwards compatibility -->
<a id="schemaplaceholdermessage"></a>
<a id="schema_PlaceholderMessage"></a>
<a id="tocSplaceholdermessage"></a>
<a id="tocsplaceholdermessage"></a>

```json
{
  "name": "string",
  "type": "placeholder"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type|[PlaceholderMessageType](#schemaplaceholdermessagetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|placeholder|

<h2 id="tocS_PlaceholderMessageType">PlaceholderMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaplaceholdermessagetype"></a>
<a id="schema_PlaceholderMessageType"></a>
<a id="tocSplaceholdermessagetype"></a>
<a id="tocsplaceholdermessagetype"></a>

```json
"placeholder"
```

<h2 id="tocS_TextPrompt">TextPrompt</h2>
<!-- backwards compatibility -->
<a id="schematextprompt"></a>
<a id="schema_TextPrompt"></a>
<a id="tocStextprompt"></a>
<a id="tocstextprompt"></a>

```json
{
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {},
  "prompt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|version|integer|true|none|none|
|config|object|true|none|none|
|labels|[string]|true|none|List of deployment labels of this prompt version.|
|tags|[string]|true|none|List of tags. Used to filter via UI and API. The same across versions of a prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|
|resolutionGraph|object \| null|false|none|The dependency resolution graph for the current prompt. Null if the prompt has no dependencies or if `resolve=false` was used.|
|prompt|string|true|none|none|

<h2 id="tocS_ChatPrompt">ChatPrompt</h2>
<!-- backwards compatibility -->
<a id="schemachatprompt"></a>
<a id="schema_ChatPrompt"></a>
<a id="tocSchatprompt"></a>
<a id="tocschatprompt"></a>

```json
{
  "name": "string",
  "version": 0,
  "config": null,
  "labels": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "commitMessage": "string",
  "resolutionGraph": {},
  "prompt": [
    {
      "role": "string",
      "content": "string",
      "type": "chatmessage"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|version|integer|true|none|none|
|config|object|true|none|none|
|labels|[string]|true|none|List of deployment labels of this prompt version.|
|tags|[string]|true|none|List of tags. Used to filter via UI and API. The same across versions of a prompt.|
|commitMessage|string \| null|false|none|Commit message for this prompt version.|
|resolutionGraph|object \| null|false|none|The dependency resolution graph for the current prompt. Null if the prompt has no dependencies or if `resolve=false` was used.|
|prompt|[[ChatMessageWithPlaceholders](#schemachatmessagewithplaceholders)]|true|none|none|

<h2 id="tocS_CreateChatPromptType">CreateChatPromptType</h2>
<!-- backwards compatibility -->
<a id="schemacreatechatprompttype"></a>
<a id="schema_CreateChatPromptType"></a>
<a id="tocScreatechatprompttype"></a>
<a id="tocscreatechatprompttype"></a>

```json
"chat"
```

<h2 id="tocS_CreateTextPromptType">CreateTextPromptType</h2>
<!-- backwards compatibility -->
<a id="schemacreatetextprompttype"></a>
<a id="schema_CreateTextPromptType"></a>
<a id="tocScreatetextprompttype"></a>
<a id="tocscreatetextprompttype"></a>

```json
"text"
```

<h2 id="tocS_ServiceProviderConfig">ServiceProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemaserviceproviderconfig"></a>
<a id="schema_ServiceProviderConfig"></a>
<a id="tocSserviceproviderconfig"></a>
<a id="tocsserviceproviderconfig"></a>

```json
{
  "schemas": [
    "string"
  ],
  "documentationUri": "string",
  "patch": {
    "supported": true
  },
  "bulk": {
    "supported": true,
    "maxOperations": 0,
    "maxPayloadSize": 0
  },
  "filter": {
    "supported": true,
    "maxResults": 0
  },
  "changePassword": {
    "supported": true
  },
  "sort": {
    "supported": true
  },
  "etag": {
    "supported": true
  },
  "authenticationSchemes": [
    {
      "name": "string",
      "description": "string",
      "specUri": "string",
      "type": "string",
      "primary": true
    }
  ],
  "meta": {
    "resourceType": "string",
    "location": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|none|
|documentationUri|string|true|none|none|
|patch|[ScimFeatureSupport](#schemascimfeaturesupport)|true|none|none|
|bulk|[BulkConfig](#schemabulkconfig)|true|none|none|
|filter|[FilterConfig](#schemafilterconfig)|true|none|none|
|changePassword|[ScimFeatureSupport](#schemascimfeaturesupport)|true|none|none|
|sort|[ScimFeatureSupport](#schemascimfeaturesupport)|true|none|none|
|etag|[ScimFeatureSupport](#schemascimfeaturesupport)|true|none|none|
|authenticationSchemes|[[AuthenticationScheme](#schemaauthenticationscheme)]|true|none|none|
|meta|[ResourceMeta](#schemaresourcemeta)|true|none|none|

<h2 id="tocS_ScimFeatureSupport">ScimFeatureSupport</h2>
<!-- backwards compatibility -->
<a id="schemascimfeaturesupport"></a>
<a id="schema_ScimFeatureSupport"></a>
<a id="tocSscimfeaturesupport"></a>
<a id="tocsscimfeaturesupport"></a>

```json
{
  "supported": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supported|boolean|true|none|none|

<h2 id="tocS_BulkConfig">BulkConfig</h2>
<!-- backwards compatibility -->
<a id="schemabulkconfig"></a>
<a id="schema_BulkConfig"></a>
<a id="tocSbulkconfig"></a>
<a id="tocsbulkconfig"></a>

```json
{
  "supported": true,
  "maxOperations": 0,
  "maxPayloadSize": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supported|boolean|true|none|none|
|maxOperations|integer|true|none|none|
|maxPayloadSize|integer|true|none|none|

<h2 id="tocS_FilterConfig">FilterConfig</h2>
<!-- backwards compatibility -->
<a id="schemafilterconfig"></a>
<a id="schema_FilterConfig"></a>
<a id="tocSfilterconfig"></a>
<a id="tocsfilterconfig"></a>

```json
{
  "supported": true,
  "maxResults": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supported|boolean|true|none|none|
|maxResults|integer|true|none|none|

<h2 id="tocS_ResourceMeta">ResourceMeta</h2>
<!-- backwards compatibility -->
<a id="schemaresourcemeta"></a>
<a id="schema_ResourceMeta"></a>
<a id="tocSresourcemeta"></a>
<a id="tocsresourcemeta"></a>

```json
{
  "resourceType": "string",
  "location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|true|none|none|
|location|string|true|none|none|

<h2 id="tocS_AuthenticationScheme">AuthenticationScheme</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationscheme"></a>
<a id="schema_AuthenticationScheme"></a>
<a id="tocSauthenticationscheme"></a>
<a id="tocsauthenticationscheme"></a>

```json
{
  "name": "string",
  "description": "string",
  "specUri": "string",
  "type": "string",
  "primary": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|specUri|string|true|none|none|
|type|string|true|none|none|
|primary|boolean|true|none|none|

<h2 id="tocS_ResourceTypesResponse">ResourceTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetypesresponse"></a>
<a id="schema_ResourceTypesResponse"></a>
<a id="tocSresourcetypesresponse"></a>
<a id="tocsresourcetypesresponse"></a>

```json
{
  "schemas": [
    "string"
  ],
  "totalResults": 0,
  "Resources": [
    {
      "schemas": [
        "string"
      ],
      "id": "string",
      "name": "string",
      "endpoint": "string",
      "description": "string",
      "schema": "string",
      "schemaExtensions": [
        {
          "schema": "string",
          "required": true
        }
      ],
      "meta": {
        "resourceType": "string",
        "location": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|none|
|totalResults|integer|true|none|none|
|Resources|[[ResourceType](#schemaresourcetype)]|true|none|none|

<h2 id="tocS_ResourceType">ResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaresourcetype"></a>
<a id="schema_ResourceType"></a>
<a id="tocSresourcetype"></a>
<a id="tocsresourcetype"></a>

```json
{
  "schemas": [
    "string"
  ],
  "id": "string",
  "name": "string",
  "endpoint": "string",
  "description": "string",
  "schema": "string",
  "schemaExtensions": [
    {
      "schema": "string",
      "required": true
    }
  ],
  "meta": {
    "resourceType": "string",
    "location": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|false|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|endpoint|string|true|none|none|
|description|string|true|none|none|
|schema|string|true|none|none|
|schemaExtensions|[[SchemaExtension](#schemaschemaextension)]|true|none|none|
|meta|[ResourceMeta](#schemaresourcemeta)|true|none|none|

<h2 id="tocS_SchemaExtension">SchemaExtension</h2>
<!-- backwards compatibility -->
<a id="schemaschemaextension"></a>
<a id="schema_SchemaExtension"></a>
<a id="tocSschemaextension"></a>
<a id="tocsschemaextension"></a>

```json
{
  "schema": "string",
  "required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schema|string|true|none|none|
|required|boolean|true|none|none|

<h2 id="tocS_SchemasResponse">SchemasResponse</h2>
<!-- backwards compatibility -->
<a id="schemaschemasresponse"></a>
<a id="schema_SchemasResponse"></a>
<a id="tocSschemasresponse"></a>
<a id="tocsschemasresponse"></a>

```json
{
  "schemas": [
    "string"
  ],
  "totalResults": 0,
  "Resources": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "attributes": [
        null
      ],
      "meta": {
        "resourceType": "string",
        "location": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|none|
|totalResults|integer|true|none|none|
|Resources|[[SchemaResource](#schemaschemaresource)]|true|none|none|

<h2 id="tocS_SchemaResource">SchemaResource</h2>
<!-- backwards compatibility -->
<a id="schemaschemaresource"></a>
<a id="schema_SchemaResource"></a>
<a id="tocSschemaresource"></a>
<a id="tocsschemaresource"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "attributes": [
    null
  ],
  "meta": {
    "resourceType": "string",
    "location": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|attributes|[object]|true|none|none|
|meta|[ResourceMeta](#schemaresourcemeta)|true|none|none|

<h2 id="tocS_ScimUsersListResponse">ScimUsersListResponse</h2>
<!-- backwards compatibility -->
<a id="schemascimuserslistresponse"></a>
<a id="schema_ScimUsersListResponse"></a>
<a id="tocSscimuserslistresponse"></a>
<a id="tocsscimuserslistresponse"></a>

```json
{
  "schemas": [
    "string"
  ],
  "totalResults": 0,
  "startIndex": 0,
  "itemsPerPage": 0,
  "Resources": [
    {
      "schemas": [
        "string"
      ],
      "id": "string",
      "userName": "string",
      "name": {
        "formatted": "string"
      },
      "emails": [
        {
          "primary": true,
          "value": "string",
          "type": "string"
        }
      ],
      "meta": {
        "resourceType": "string",
        "created": "string",
        "lastModified": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|none|
|totalResults|integer|true|none|none|
|startIndex|integer|true|none|none|
|itemsPerPage|integer|true|none|none|
|Resources|[[ScimUser](#schemascimuser)]|true|none|none|

<h2 id="tocS_ScimUser">ScimUser</h2>
<!-- backwards compatibility -->
<a id="schemascimuser"></a>
<a id="schema_ScimUser"></a>
<a id="tocSscimuser"></a>
<a id="tocsscimuser"></a>

```json
{
  "schemas": [
    "string"
  ],
  "id": "string",
  "userName": "string",
  "name": {
    "formatted": "string"
  },
  "emails": [
    {
      "primary": true,
      "value": "string",
      "type": "string"
    }
  ],
  "meta": {
    "resourceType": "string",
    "created": "string",
    "lastModified": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schemas|[string]|true|none|none|
|id|string|true|none|none|
|userName|string|true|none|none|
|name|[ScimName](#schemascimname)|true|none|none|
|emails|[[ScimEmail](#schemascimemail)]|true|none|none|
|meta|[UserMeta](#schemausermeta)|true|none|none|

<h2 id="tocS_UserMeta">UserMeta</h2>
<!-- backwards compatibility -->
<a id="schemausermeta"></a>
<a id="schema_UserMeta"></a>
<a id="tocSusermeta"></a>
<a id="tocsusermeta"></a>

```json
{
  "resourceType": "string",
  "created": "string",
  "lastModified": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|true|none|none|
|created|string \| null|false|none|none|
|lastModified|string \| null|false|none|none|

<h2 id="tocS_ScimName">ScimName</h2>
<!-- backwards compatibility -->
<a id="schemascimname"></a>
<a id="schema_ScimName"></a>
<a id="tocSscimname"></a>
<a id="tocsscimname"></a>

```json
{
  "formatted": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatted|string \| null|false|none|none|

<h2 id="tocS_ScimEmail">ScimEmail</h2>
<!-- backwards compatibility -->
<a id="schemascimemail"></a>
<a id="schema_ScimEmail"></a>
<a id="tocSscimemail"></a>
<a id="tocsscimemail"></a>

```json
{
  "primary": true,
  "value": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary|boolean|true|none|none|
|value|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_EmptyResponse">EmptyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemptyresponse"></a>
<a id="schema_EmptyResponse"></a>
<a id="tocSemptyresponse"></a>
<a id="tocsemptyresponse"></a>

```json
{}
```

Empty response for 204 No Content responses

<h2 id="tocS_ScoreConfigs">ScoreConfigs</h2>
<!-- backwards compatibility -->
<a id="schemascoreconfigs"></a>
<a id="schema_ScoreConfigs"></a>
<a id="tocSscoreconfigs"></a>
<a id="tocsscoreconfigs"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "projectId": "string",
      "dataType": "NUMERIC",
      "isArchived": true,
      "minValue": 0,
      "maxValue": 0,
      "categories": [
        {
          "value": 0,
          "label": "string"
        }
      ],
      "description": "string"
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ScoreConfig](#schemascoreconfig)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_CreateScoreConfigRequest">CreateScoreConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescoreconfigrequest"></a>
<a id="schema_CreateScoreConfigRequest"></a>
<a id="tocScreatescoreconfigrequest"></a>
<a id="tocscreatescoreconfigrequest"></a>

```json
{
  "name": "string",
  "dataType": "NUMERIC",
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "minValue": 0,
  "maxValue": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the score config. Max 80 characters. Only letters, numbers, underscores, spaces, periods, parentheses, and hyphens are allowed.|
|dataType|[ScoreConfigDataType](#schemascoreconfigdatatype)|true|none|none|
|categories|[[ConfigCategory](#schemaconfigcategory)]|false|none|Configure custom categories for categorical scores. Pass a list of objects with `label` and `value` properties. Categories are autogenerated for boolean configs and cannot be passed|
|minValue|number(double) \| null|false|none|Configure a minimum value for numerical scores. If not set, the minimum value defaults to -∞|
|maxValue|number(double) \| null|false|none|Configure a maximum value for numerical scores. If not set, the maximum value defaults to +∞|
|description|string \| null|false|none|Description is shown across the Langfuse UI and can be used to e.g. explain the config categories in detail, why a numeric range was set, or provide additional context on config name or usage|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|dataType|BOOLEAN|
|dataType|CATEGORICAL|
|dataType|TEXT|

<h2 id="tocS_UpdateScoreConfigRequest">UpdateScoreConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatescoreconfigrequest"></a>
<a id="schema_UpdateScoreConfigRequest"></a>
<a id="tocSupdatescoreconfigrequest"></a>
<a id="tocsupdatescoreconfigrequest"></a>

```json
{
  "isArchived": true,
  "name": "string",
  "categories": [
    {
      "value": 0,
      "label": "string"
    }
  ],
  "minValue": 0,
  "maxValue": 0,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isArchived|boolean \| null|false|none|The status of the score config showing if it is archived or not|
|name|string \| null|false|none|Name of the score config. Max 80 characters. Only letters, numbers, underscores, spaces, periods, parentheses, and hyphens are allowed.|
|categories|[[ConfigCategory](#schemaconfigcategory)]|false|none|Configure custom categories for categorical scores. Pass a list of objects with `label` and `value` properties. Categories are autogenerated for boolean configs and cannot be passed|
|minValue|number(double) \| null|false|none|Configure a minimum value for numerical scores. If not set, the minimum value defaults to -∞|
|maxValue|number(double) \| null|false|none|Configure a maximum value for numerical scores. If not set, the maximum value defaults to +∞|
|description|string \| null|false|none|Description is shown across the Langfuse UI and can be used to e.g. explain the config categories in detail, why a numeric range was set, or provide additional context on config name or usage|

<h2 id="tocS_CreateScoresRequest">CreateScoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescoresrequest"></a>
<a id="schema_CreateScoresRequest"></a>
<a id="tocScreatescoresrequest"></a>
<a id="tocscreatescoresrequest"></a>

```json
[
  {
    "id": "string",
    "traceId": "string",
    "sessionId": "string",
    "observationId": "string",
    "datasetRunId": "string",
    "name": "string",
    "value": 0,
    "comment": "string",
    "metadata": {},
    "environment": "string",
    "queueId": "string",
    "dataType": "NUMERIC",
    "configId": "string",
    "source": "API",
    "timestamp": "1970-01-01T00:00:00Z"
  }
]
```

<h2 id="tocS_CreateScoreRequest">CreateScoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatescorerequest"></a>
<a id="schema_CreateScoreRequest"></a>
<a id="tocScreatescorerequest"></a>
<a id="tocscreatescorerequest"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "value": 0,
  "comment": "string",
  "metadata": {},
  "environment": "string",
  "queueId": "string",
  "dataType": "NUMERIC",
  "configId": "string",
  "source": "API",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|traceId|string \| null|false|none|none|
|sessionId|string \| null|false|none|none|
|observationId|string \| null|false|none|none|
|datasetRunId|string \| null|false|none|none|
|name|string|true|none|none|
|value|[CreateScoreValue](#schemacreatescorevalue)|true|none|The value of the score. Must be passed as string for categorical and text scores, and numeric for boolean and numeric scores. Boolean score values must equal either 1 or 0 (true or false). Text score values must be between 1 and 500 characters.|
|comment|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|environment|string \| null|false|none|The environment of the score. Can be any lowercase alphanumeric string with hyphens and underscores that does not start with 'langfuse'.|
|queueId|string \| null|false|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|dataType|[ScoreDataType](#schemascoredatatype)|false|none|The data type of the score. When passing a configId this field is inferred. Otherwise, this field must be passed or will default to numeric.|
|configId|string \| null|false|none|Reference a score config on a score. The unique langfuse identifier of a score config. When passing this field, the dataType and stringValue fields are automatically populated.|
|source|[CreateScoreSource](#schemacreatescoresource)|false|none|The source of the score. Defaults to API. Set to ANNOTATION to prefill scores (e.g. from an LLM) for a human reviewer to verify in an annotation queue. When source is ANNOTATION, a configId is required unless dataType is CORRECTION. EVAL is reserved for internal evaluator outputs and is not accepted on this endpoint.|
|timestamp|string(date-time) \| null|false|none|The timestamp of the score, as an ISO 8601 datetime with a timezone offset. Defaults to the time the request is received. To update an existing score, send it again with the same id and timestamp.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|dataType|BOOLEAN|
|dataType|CATEGORICAL|
|dataType|CORRECTION|
|dataType|TEXT|
|source|API|
|source|ANNOTATION|

<h2 id="tocS_CreateScoreSource">CreateScoreSource</h2>
<!-- backwards compatibility -->
<a id="schemacreatescoresource"></a>
<a id="schema_CreateScoreSource"></a>
<a id="tocScreatescoresource"></a>
<a id="tocscreatescoresource"></a>

```json
"API"
```

Source values accepted when creating a score via the public REST API.
EVAL is reserved for internal evaluator outputs and is intentionally not
exposed here — use commons.ScoreSource when reading scores.

<h2 id="tocS_CreateScoresResponse">CreateScoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatescoresresponse"></a>
<a id="schema_CreateScoresResponse"></a>
<a id="tocScreatescoresresponse"></a>
<a id="tocscreatescoresresponse"></a>

```json
{
  "accepted": 0,
  "rejected": 0,
  "errors": [
    {
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CreateScoreBatchResults](#schemacreatescorebatchresults)|false|none|Acceptance counts and errors (HTTP 207).|
|*oneOf*|[CreateScoreBatchResponse](#schemacreatescorebatchresponse)|false|none|Batch accepted (HTTP 202).|

<h2 id="tocS_CreateScoreBatchResponse">CreateScoreBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatescorebatchresponse"></a>
<a id="schema_CreateScoreBatchResponse"></a>
<a id="tocScreatescorebatchresponse"></a>
<a id="tocscreatescorebatchresponse"></a>

```json
{
  "message": "Accepted"
}
```

Batch accepted (HTTP 202).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_CreateScoreBatchResults">CreateScoreBatchResults</h2>
<!-- backwards compatibility -->
<a id="schemacreatescorebatchresults"></a>
<a id="schema_CreateScoreBatchResults"></a>
<a id="tocScreatescorebatchresults"></a>
<a id="tocscreatescorebatchresults"></a>

```json
{
  "accepted": 0,
  "rejected": 0,
  "errors": [
    {
      "message": "string"
    }
  ]
}
```

Acceptance counts and errors (HTTP 207).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted|integer|true|none|none|
|rejected|integer|true|none|none|
|errors|[[CreateScoreBatchError](#schemacreatescorebatcherror)]|true|none|none|

<h2 id="tocS_CreateScoreBatchError">CreateScoreBatchError</h2>
<!-- backwards compatibility -->
<a id="schemacreatescorebatcherror"></a>
<a id="schema_CreateScoreBatchError"></a>
<a id="tocScreatescorebatcherror"></a>
<a id="tocscreatescorebatcherror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_ScoreSubjectTraceV3">ScoreSubjectTraceV3</h2>
<!-- backwards compatibility -->
<a id="schemascoresubjecttracev3"></a>
<a id="schema_ScoreSubjectTraceV3"></a>
<a id="tocSscoresubjecttracev3"></a>
<a id="tocsscoresubjecttracev3"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The trace ID.|

<h2 id="tocS_ScoreSubjectObservationV3">ScoreSubjectObservationV3</h2>
<!-- backwards compatibility -->
<a id="schemascoresubjectobservationv3"></a>
<a id="schema_ScoreSubjectObservationV3"></a>
<a id="tocSscoresubjectobservationv3"></a>
<a id="tocsscoresubjectobservationv3"></a>

```json
{
  "id": "string",
  "traceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The observation ID.|
|traceId|string \| null|false|none|The parent trace ID, if available.|

<h2 id="tocS_ScoreSubjectSessionV3">ScoreSubjectSessionV3</h2>
<!-- backwards compatibility -->
<a id="schemascoresubjectsessionv3"></a>
<a id="schema_ScoreSubjectSessionV3"></a>
<a id="tocSscoresubjectsessionv3"></a>
<a id="tocsscoresubjectsessionv3"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The session ID.|

<h2 id="tocS_ScoreSubjectExperimentV3">ScoreSubjectExperimentV3</h2>
<!-- backwards compatibility -->
<a id="schemascoresubjectexperimentv3"></a>
<a id="schema_ScoreSubjectExperimentV3"></a>
<a id="tocSscoresubjectexperimentv3"></a>
<a id="tocsscoresubjectexperimentv3"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The dataset run ID (experiment ID).|

<h2 id="tocS_ScoreSubjectV3">ScoreSubjectV3</h2>
<!-- backwards compatibility -->
<a id="schemascoresubjectv3"></a>
<a id="schema_ScoreSubjectV3"></a>
<a id="tocSscoresubjectv3"></a>
<a id="tocsscoresubjectv3"></a>

```json
{
  "kind": "trace",
  "id": "string"
}
```

A reference to the entity this score is attached to. Discriminated by "kind" — one of trace, observation, session, or experiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|kind|string|true|none|none|
|id|string|true|none|The trace ID.|
|*oneOf*|object|false|none|none|
|kind|string|true|none|none|
|id|string|true|none|The observation ID.|
|traceId|string \| null|false|none|The parent trace ID, if available.|
|*oneOf*|object|false|none|none|
|kind|string|true|none|none|
|id|string|true|none|The session ID.|
|*oneOf*|object|false|none|none|
|kind|string|true|none|none|
|id|string|true|none|The dataset run ID (experiment ID).|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|trace|
|kind|observation|
|kind|session|
|kind|experiment|

<h2 id="tocS_BaseScoreV3">BaseScoreV3</h2>
<!-- backwards compatibility -->
<a id="schemabasescorev3"></a>
<a id="schema_BaseScoreV3"></a>
<a id="tocSbasescorev3"></a>
<a id="tocsbasescorev3"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_NumericScoreV3">NumericScoreV3</h2>
<!-- backwards compatibility -->
<a id="schemanumericscorev3"></a>
<a id="schema_NumericScoreV3"></a>
<a id="tocSnumericscorev3"></a>
<a id="tocsnumericscorev3"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  },
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|number(double)|true|none|The numeric value of the score.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_BooleanScoreV3">BooleanScoreV3</h2>
<!-- backwards compatibility -->
<a id="schemabooleanscorev3"></a>
<a id="schema_BooleanScoreV3"></a>
<a id="tocSbooleanscorev3"></a>
<a id="tocsbooleanscorev3"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  },
  "value": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|boolean|true|none|The boolean value of the score.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_CategoricalScoreV3">CategoricalScoreV3</h2>
<!-- backwards compatibility -->
<a id="schemacategoricalscorev3"></a>
<a id="schema_CategoricalScoreV3"></a>
<a id="tocScategoricalscorev3"></a>
<a id="tocscategoricalscorev3"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  },
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|string|true|none|The string category value of the score.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_TextScoreV3">TextScoreV3</h2>
<!-- backwards compatibility -->
<a id="schematextscorev3"></a>
<a id="schema_TextScoreV3"></a>
<a id="tocStextscorev3"></a>
<a id="tocstextscorev3"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  },
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|string|true|none|The text content of the score.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_CorrectionScoreV3">CorrectionScoreV3</h2>
<!-- backwards compatibility -->
<a id="schemacorrectionscorev3"></a>
<a id="schema_CorrectionScoreV3"></a>
<a id="tocScorrectionscorev3"></a>
<a id="tocscorrectionscorev3"></a>

```json
{
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  },
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|string|true|none|The correction content of the score. Empty string if not set.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_ScoreV3">ScoreV3</h2>
<!-- backwards compatibility -->
<a id="schemascorev3"></a>
<a id="schema_ScoreV3"></a>
<a id="tocSscorev3"></a>
<a id="tocsscorev3"></a>

```json
{
  "dataType": "NUMERIC",
  "id": "string",
  "projectId": "string",
  "name": "string",
  "source": "ANNOTATION",
  "timestamp": "1970-01-01T00:00:00Z",
  "environment": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "comment": "string",
  "configId": "string",
  "metadata": {},
  "authorUserId": "string",
  "queueId": "string",
  "subject": {
    "kind": "trace",
    "id": "string"
  },
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|number(double)|true|none|The numeric value of the score.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|boolean|true|none|The boolean value of the score.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|string|true|none|The string category value of the score.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|string|true|none|The text content of the score.|
|*oneOf*|object|false|none|none|
|dataType|string|true|none|none|
|id|string|true|none|none|
|projectId|string|true|none|none|
|name|string|true|none|none|
|source|[ScoreSource](#schemascoresource)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|environment|string|true|none|The environment from which this score originated.|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|comment|string \| null|false|none|Optional comment attached to the score. Present when "details" is included in the fields parameter.|
|configId|string \| null|false|none|The score config ID, if this score was created from a config. Present when "details" is included in the fields parameter.|
|metadata|object \| null|false|none|Arbitrary metadata attached to the score. Present when "details" is included in the fields parameter.|
|authorUserId|string \| null|false|none|The user who created this score, if available. Present when "annotation" is included in the fields parameter.|
|queueId|string \| null|false|none|The annotation queue this score belongs to, if any. Present when "annotation" is included in the fields parameter.|
|subject|[ScoreSubjectV3](#schemascoresubjectv3)|false|none|The entity this score is attached to (trace, observation, session, or experiment). Present when "subject" is included in the fields parameter.|
|value|string|true|none|The correction content of the score. Empty string if not set.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|BOOLEAN|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|CATEGORICAL|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|TEXT|
|source|ANNOTATION|
|source|API|
|source|EVAL|
|dataType|CORRECTION|
|source|ANNOTATION|
|source|API|
|source|EVAL|

<h2 id="tocS_GetScoresV3Meta">GetScoresV3Meta</h2>
<!-- backwards compatibility -->
<a id="schemagetscoresv3meta"></a>
<a id="schema_GetScoresV3Meta"></a>
<a id="tocSgetscoresv3meta"></a>
<a id="tocsgetscoresv3meta"></a>

```json
{
  "cursor": "string",
  "limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string \| null|false|none|Opaque cursor for the next page. Omitted when there is no next page.|
|limit|integer|true|none|none|

<h2 id="tocS_GetScoresV3Response">GetScoresV3Response</h2>
<!-- backwards compatibility -->
<a id="schemagetscoresv3response"></a>
<a id="schema_GetScoresV3Response"></a>
<a id="tocSgetscoresv3response"></a>
<a id="tocsgetscoresv3response"></a>

```json
{
  "data": [
    {
      "dataType": "NUMERIC",
      "id": "string",
      "projectId": "string",
      "name": "string",
      "source": "ANNOTATION",
      "timestamp": "1970-01-01T00:00:00Z",
      "environment": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "comment": "string",
      "configId": "string",
      "metadata": {},
      "authorUserId": "string",
      "queueId": "string",
      "subject": {
        "kind": "trace",
        "id": "string"
      },
      "value": 0
    }
  ],
  "meta": {
    "cursor": "string",
    "limit": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ScoreV3](#schemascorev3)]|true|none|none|
|meta|[GetScoresV3Meta](#schemagetscoresv3meta)|true|none|none|

<h2 id="tocS_ScoreBody">ScoreBody</h2>
<!-- backwards compatibility -->
<a id="schemascorebody"></a>
<a id="schema_ScoreBody"></a>
<a id="tocSscorebody"></a>
<a id="tocsscorebody"></a>

```json
{
  "id": "string",
  "traceId": "string",
  "sessionId": "string",
  "observationId": "string",
  "datasetRunId": "string",
  "name": "string",
  "environment": "string",
  "queueId": "string",
  "value": 0,
  "comment": "string",
  "metadata": null,
  "dataType": "NUMERIC",
  "configId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|
|traceId|string \| null|false|none|none|
|sessionId|string \| null|false|none|none|
|observationId|string \| null|false|none|none|
|datasetRunId|string \| null|false|none|none|
|name|string|true|none|The name of the score. Always overrides "output" for correction scores.|
|environment|string \| null|false|none|none|
|queueId|string \| null|false|none|The annotation queue referenced by the score. Indicates if score was initially created while processing annotation queue.|
|value|[CreateScoreValue](#schemacreatescorevalue)|true|none|The value of the score. Must be passed as string for categorical and text scores, and numeric for boolean and numeric scores. Boolean score values must equal either 1 or 0 (true or false). Text score values must be between 1 and 500 characters.|
|comment|string \| null|false|none|none|
|metadata|object \| null|false|none|none|
|dataType|[ScoreDataType](#schemascoredatatype)|false|none|When set, must match the score value's type. If not set, will be inferred from the score value or config|
|configId|string \| null|false|none|Reference a score config on a score. When set, the score name must equal the config name and scores must comply with the config's range and data type. For categorical scores, the value must map to a config category. Numeric scores might be constrained by the score config's max and min values|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|NUMERIC|
|dataType|BOOLEAN|
|dataType|CATEGORICAL|
|dataType|CORRECTION|
|dataType|TEXT|

<h2 id="tocS_SkillMetaListResponse">SkillMetaListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaskillmetalistresponse"></a>
<a id="schema_SkillMetaListResponse"></a>
<a id="tocSskillmetalistresponse"></a>
<a id="tocsskillmetalistresponse"></a>

```json
{
  "data": [
    {
      "name": "string",
      "description": "string",
      "tags": [
        "string"
      ],
      "latestVersion": 0,
      "latestVersionCreatedAt": "1970-01-01T00:00:00Z",
      "latestVersionLastUpdatedAt": "1970-01-01T00:00:00Z",
      "productionVersion": 0
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0,
    "hasNextPage": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SkillMeta](#schemaskillmeta)]|true|none|none|
|meta|[SkillListPagination](#schemaskilllistpagination)|true|none|none|

<h2 id="tocS_SkillListPagination">SkillListPagination</h2>
<!-- backwards compatibility -->
<a id="schemaskilllistpagination"></a>
<a id="schema_SkillListPagination"></a>
<a id="tocSskilllistpagination"></a>
<a id="tocsskilllistpagination"></a>

```json
{
  "page": 0,
  "limit": 0,
  "totalItems": 0,
  "totalPages": 0,
  "hasNextPage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|true|none|current page number|
|limit|integer|true|none|number of items per page|
|totalItems|integer|true|none|number of total items given the current filters/selection (if any)|
|totalPages|integer|true|none|number of total pages given the current limit|
|hasNextPage|boolean|true|none|none|

<h2 id="tocS_SkillMeta">SkillMeta</h2>
<!-- backwards compatibility -->
<a id="schemaskillmeta"></a>
<a id="schema_SkillMeta"></a>
<a id="tocSskillmeta"></a>
<a id="tocsskillmeta"></a>

```json
{
  "name": "string",
  "description": "string",
  "tags": [
    "string"
  ],
  "latestVersion": 0,
  "latestVersionCreatedAt": "1970-01-01T00:00:00Z",
  "latestVersionLastUpdatedAt": "1970-01-01T00:00:00Z",
  "productionVersion": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|tags|[string]|true|none|none|
|latestVersion|integer|true|none|none|
|latestVersionCreatedAt|string(date-time)|true|none|none|
|latestVersionLastUpdatedAt|string(date-time)|true|none|none|
|productionVersion|integer \| null|true|none|Version assigned the production label, or null when no version is assigned.|

<h2 id="tocS_SkillVersionFileInput">SkillVersionFileInput</h2>
<!-- backwards compatibility -->
<a id="schemaskillversionfileinput"></a>
<a id="schema_SkillVersionFileInput"></a>
<a id="tocSskillversionfileinput"></a>
<a id="tocsskillversionfileinput"></a>

```json
{
  "path": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|content|string|true|none|UTF-8 text content. The server computes the hash and byte length.|

<h2 id="tocS_SkillVersionFileReference">SkillVersionFileReference</h2>
<!-- backwards compatibility -->
<a id="schemaskillversionfilereference"></a>
<a id="schema_SkillVersionFileReference"></a>
<a id="tocSskillversionfilereference"></a>
<a id="tocsskillversionfilereference"></a>

```json
{
  "path": "string",
  "sha256Hash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|sha256Hash|string|true|none|Canonical base64-encoded SHA-256 from a skill file manifest. The content must already exist in this project.|

<h2 id="tocS_SkillVersionFileCreateInput">SkillVersionFileCreateInput</h2>
<!-- backwards compatibility -->
<a id="schemaskillversionfilecreateinput"></a>
<a id="schema_SkillVersionFileCreateInput"></a>
<a id="tocSskillversionfilecreateinput"></a>
<a id="tocsskillversionfilecreateinput"></a>

```json
{
  "path": "string",
  "content": "string"
}
```

Provide exactly one of content or sha256Hash for each path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SkillVersionFileInput](#schemaskillversionfileinput)|false|none|none|
|*oneOf*|[SkillVersionFileReference](#schemaskillversionfilereference)|false|none|none|

<h2 id="tocS_CreateSkillVersionRequest">CreateSkillVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateskillversionrequest"></a>
<a id="schema_CreateSkillVersionRequest"></a>
<a id="tocScreateskillversionrequest"></a>
<a id="tocscreateskillversionrequest"></a>

```json
{
  "files": [
    {
      "path": "string",
      "content": "string"
    }
  ],
  "commitMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[SkillVersionFileCreateInput](#schemaskillversionfilecreateinput)]|true|none|none|
|commitMessage|string \| null|false|none|none|

<h2 id="tocS_SkillFile">SkillFile</h2>
<!-- backwards compatibility -->
<a id="schemaskillfile"></a>
<a id="schema_SkillFile"></a>
<a id="tocSskillfile"></a>
<a id="tocsskillfile"></a>

```json
{
  "id": "string",
  "path": "string",
  "blobId": "string",
  "sha256Hash": "string",
  "contentType": "string",
  "contentLength": 0,
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|path|string|true|none|none|
|blobId|string|true|none|none|
|sha256Hash|string|true|none|none|
|contentType|string|true|none|none|
|contentLength|integer(int64)|true|none|none|
|content|string \| null|false|none|UTF-8 text content, included when fetching a skill with includeContent enabled.|

<h2 id="tocS_SkillFileContentsResponse">SkillFileContentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaskillfilecontentsresponse"></a>
<a id="schema_SkillFileContentsResponse"></a>
<a id="tocSskillfilecontentsresponse"></a>
<a id="tocsskillfilecontentsresponse"></a>

```json
{
  "data": [
    {
      "sha256Hash": "string",
      "content": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SkillFileContent](#schemaskillfilecontent)]|true|none|none|

<h2 id="tocS_SkillFileContent">SkillFileContent</h2>
<!-- backwards compatibility -->
<a id="schemaskillfilecontent"></a>
<a id="schema_SkillFileContent"></a>
<a id="tocSskillfilecontent"></a>
<a id="tocsskillfilecontent"></a>

```json
{
  "sha256Hash": "string",
  "content": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256Hash|string|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_SkillVersion">SkillVersion</h2>
<!-- backwards compatibility -->
<a id="schemaskillversion"></a>
<a id="schema_SkillVersion"></a>
<a id="tocSskillversion"></a>
<a id="tocsskillversion"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "projectId": "string",
  "createdBy": "string",
  "name": "string",
  "description": "string",
  "frontmatter": null,
  "version": 0,
  "tags": [
    "string"
  ],
  "labels": [
    "string"
  ],
  "commitMessage": "string",
  "files": [
    {
      "id": "string",
      "path": "string",
      "blobId": "string",
      "sha256Hash": "string",
      "contentType": "string",
      "contentLength": 0,
      "content": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|projectId|string|true|none|none|
|createdBy|string|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|frontmatter|object|true|none|none|
|version|integer|true|none|none|
|tags|[string]|true|none|none|
|labels|[string]|true|none|none|
|commitMessage|string \| null|true|none|none|
|files|[[SkillFile](#schemaskillfile)]|true|none|none|

<h2 id="tocS_UpdateSkillRequest">UpdateSkillRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateskillrequest"></a>
<a id="schema_UpdateSkillRequest"></a>
<a id="tocSupdateskillrequest"></a>
<a id="tocsupdateskillrequest"></a>

```json
{
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|true|none|The complete set of tags to apply to every version of the skill. Pass an empty list to clear all tags.|

<h2 id="tocS_UpdateSkillLabelsRequest">UpdateSkillLabelsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateskilllabelsrequest"></a>
<a id="schema_UpdateSkillLabelsRequest"></a>
<a id="tocSupdateskilllabelsrequest"></a>
<a id="tocsupdateskilllabelsrequest"></a>

```json
{
  "labels": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|true|none|none|

<h2 id="tocS_DeleteSkillVersionResponse">DeleteSkillVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteskillversionresponse"></a>
<a id="schema_DeleteSkillVersionResponse"></a>
<a id="tocSdeleteskillversionresponse"></a>
<a id="tocsdeleteskillversionresponse"></a>

```json
{
  "deleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|none|

<h2 id="tocS_DeleteTraceResponse">DeleteTraceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetraceresponse"></a>
<a id="schema_DeleteTraceResponse"></a>
<a id="tocSdeletetraceresponse"></a>
<a id="tocsdeletetraceresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_unstableDashboardWidgetView">unstableDashboardWidgetView</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetview"></a>
<a id="schema_unstableDashboardWidgetView"></a>
<a id="tocSunstabledashboardwidgetview"></a>
<a id="tocsunstabledashboardwidgetview"></a>

```json
"observations"
```

<h2 id="tocS_unstableDashboardWidgetViewWithLegacy">unstableDashboardWidgetViewWithLegacy</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetviewwithlegacy"></a>
<a id="schema_unstableDashboardWidgetViewWithLegacy"></a>
<a id="tocSunstabledashboardwidgetviewwithlegacy"></a>
<a id="tocsunstabledashboardwidgetviewwithlegacy"></a>

```json
"observations"
```

Widget data view. Responses may include the legacy `traces` value for
widgets created before this API existed.

<h2 id="tocS_unstableDashboardWidgetChartType">unstableDashboardWidgetChartType</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetcharttype"></a>
<a id="schema_unstableDashboardWidgetChartType"></a>
<a id="tocSunstabledashboardwidgetcharttype"></a>
<a id="tocsunstabledashboardwidgetcharttype"></a>

```json
"LINE_TIME_SERIES"
```

<h2 id="tocS_unstableDashboardWidgetMetricAggregation">unstableDashboardWidgetMetricAggregation</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetmetricaggregation"></a>
<a id="schema_unstableDashboardWidgetMetricAggregation"></a>
<a id="tocSunstabledashboardwidgetmetricaggregation"></a>
<a id="tocsunstabledashboardwidgetmetricaggregation"></a>

```json
"sum"
```

<h2 id="tocS_unstableDashboardWidgetDimension">unstableDashboardWidgetDimension</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetdimension"></a>
<a id="schema_unstableDashboardWidgetDimension"></a>
<a id="tocSunstabledashboardwidgetdimension"></a>
<a id="tocsunstabledashboardwidgetdimension"></a>

```json
{
  "field": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|none|

<h2 id="tocS_unstableDashboardWidgetMetric">unstableDashboardWidgetMetric</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetmetric"></a>
<a id="schema_unstableDashboardWidgetMetric"></a>
<a id="tocSunstabledashboardwidgetmetric"></a>
<a id="tocsunstabledashboardwidgetmetric"></a>

```json
{
  "measure": "string",
  "agg": "sum"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measure|string|true|none|none|
|agg|[unstableDashboardWidgetMetricAggregation](#schemaunstabledashboardwidgetmetricaggregation)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|agg|sum|
|agg|avg|
|agg|count|
|agg|max|
|agg|min|
|agg|p50|
|agg|p75|
|agg|p90|
|agg|p95|
|agg|p99|
|agg|histogram|
|agg|uniq|

<h2 id="tocS_unstableDashboardWidgetFilter">unstableDashboardWidgetFilter</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetfilter"></a>
<a id="schema_unstableDashboardWidgetFilter"></a>
<a id="tocSunstabledashboardwidgetfilter"></a>
<a id="tocsunstabledashboardwidgetfilter"></a>

```json
{
  "column": "string",
  "operator": "string",
  "type": "string",
  "value": null,
  "key": "string"
}
```

A filter in Langfuse filter-state shape. The `value` shape and the
allowed operators depend on `type`:

| `type` | `value` | operators |
|---|---|---|
| `string` | string | `=`, `contains`, `does not contain`, `starts with`, `ends with` |
| `number` | number | `=`, `>`, `<`, `>=`, `<=` |
| `datetime` | ISO datetime string | `>`, `<`, `>=`, `<=` |
| `boolean` | boolean | `=`, `<>` |
| `null` | `""` | `is null`, `is not null` |
| `stringOptions` | list of strings | `any of`, `none of` |
| `arrayOptions` | list of strings | `any of`, `none of`, `all of` |
| `categoryOptions` | list of strings (requires `key`) | `any of`, `none of` |
| `stringObject` | string (requires `key`, e.g. a metadata key) | same as `string` |
| `numberObject` | number (requires `key`, e.g. a score name) | same as `number` |
| `booleanObject` | boolean (requires `key`) | `=`, `<>` |

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|none|
|operator|string|true|none|none|
|type|string|true|none|none|
|value|object \| null|false|none|none|
|key|string \| null|false|none|none|

<h2 id="tocS_unstableDashboardWidgetChartConfig">unstableDashboardWidgetChartConfig</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetchartconfig"></a>
<a id="schema_unstableDashboardWidgetChartConfig"></a>
<a id="tocSunstabledashboardwidgetchartconfig"></a>
<a id="tocsunstabledashboardwidgetchartconfig"></a>

```json
{
  "type": "LINE_TIME_SERIES",
  "row_limit": 0,
  "show_value_labels": true,
  "bins": 0,
  "defaultSort": {
    "column": "string",
    "order": "ASC"
  }
}
```

Chart-specific widget configuration.

`type` must match the top-level `chartType`.
`row_limit` applies to total-value charts and pivot tables.
`bins` applies to histograms.
`defaultSort` applies to pivot tables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|true|none|none|
|row_limit|integer \| null|false|none|none|
|show_value_labels|boolean \| null|false|none|none|
|bins|integer \| null|false|none|none|
|defaultSort|[unstableDashboardWidgetDefaultSort](#schemaunstabledashboardwidgetdefaultsort)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LINE_TIME_SERIES|
|type|AREA_TIME_SERIES|
|type|BAR_TIME_SERIES|
|type|HORIZONTAL_BAR|
|type|VERTICAL_BAR|
|type|PIE|
|type|NUMBER|
|type|HISTOGRAM|
|type|PIVOT_TABLE|

<h2 id="tocS_unstableDashboardWidgetDefaultSort">unstableDashboardWidgetDefaultSort</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetdefaultsort"></a>
<a id="schema_unstableDashboardWidgetDefaultSort"></a>
<a id="tocSunstabledashboardwidgetdefaultsort"></a>
<a id="tocsunstabledashboardwidgetdefaultsort"></a>

```json
{
  "column": "string",
  "order": "ASC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|true|none|none|
|order|[unstableDashboardWidgetSortOrder](#schemaunstabledashboardwidgetsortorder)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|order|ASC|
|order|DESC|

<h2 id="tocS_unstableDashboardWidgetSortOrder">unstableDashboardWidgetSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetsortorder"></a>
<a id="schema_unstableDashboardWidgetSortOrder"></a>
<a id="tocSunstabledashboardwidgetsortorder"></a>
<a id="tocsunstabledashboardwidgetsortorder"></a>

```json
"ASC"
```

<h2 id="tocS_unstableDashboardWidgetChartConfigInput">unstableDashboardWidgetChartConfigInput</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetchartconfiginput"></a>
<a id="schema_unstableDashboardWidgetChartConfigInput"></a>
<a id="tocSunstabledashboardwidgetchartconfiginput"></a>
<a id="tocsunstabledashboardwidgetchartconfiginput"></a>

```json
{
  "type": "LINE_TIME_SERIES",
  "row_limit": 0,
  "show_value_labels": true,
  "bins": 0,
  "defaultSort": {
    "column": "string",
    "order": "ASC"
  }
}
```

Input-side chart config. `type` is optional and defaults to the
widget's `chartType`; when given it must match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|false|none|none|
|row_limit|integer \| null|false|none|none|
|show_value_labels|boolean \| null|false|none|none|
|bins|integer \| null|false|none|none|
|defaultSort|[unstableDashboardWidgetDefaultSort](#schemaunstabledashboardwidgetdefaultsort)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LINE_TIME_SERIES|
|type|AREA_TIME_SERIES|
|type|BAR_TIME_SERIES|
|type|HORIZONTAL_BAR|
|type|VERTICAL_BAR|
|type|PIE|
|type|NUMBER|
|type|HISTOGRAM|
|type|PIVOT_TABLE|

<h2 id="tocS_unstableCreateDashboardWidgetRequest">unstableCreateDashboardWidgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunstablecreatedashboardwidgetrequest"></a>
<a id="schema_unstableCreateDashboardWidgetRequest"></a>
<a id="tocSunstablecreatedashboardwidgetrequest"></a>
<a id="tocsunstablecreatedashboardwidgetrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|Defaults to an empty string.|
|view|[unstableDashboardWidgetView](#schemaunstabledashboardwidgetview)|true|none|none|
|dimensions|[[unstableDashboardWidgetDimension](#schemaunstabledashboardwidgetdimension)]|true|none|none|
|metrics|[[unstableDashboardWidgetMetric](#schemaunstabledashboardwidgetmetric)]|true|none|none|
|filters|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|true|none|none|
|chartType|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|true|none|none|
|chartConfig|[unstableDashboardWidgetChartConfigInput](#schemaunstabledashboardwidgetchartconfiginput)|false|none|Defaults to the plain config for `chartType`.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|observations|
|view|scores-numeric|
|view|scores-boolean|
|view|scores-categorical|
|chartType|LINE_TIME_SERIES|
|chartType|AREA_TIME_SERIES|
|chartType|BAR_TIME_SERIES|
|chartType|HORIZONTAL_BAR|
|chartType|VERTICAL_BAR|
|chartType|PIE|
|chartType|NUMBER|
|chartType|HISTOGRAM|
|chartType|PIVOT_TABLE|

<h2 id="tocS_unstableUpdateDashboardWidgetRequest">unstableUpdateDashboardWidgetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunstableupdatedashboardwidgetrequest"></a>
<a id="schema_unstableUpdateDashboardWidgetRequest"></a>
<a id="tocSunstableupdatedashboardwidgetrequest"></a>
<a id="tocsunstableupdatedashboardwidgetrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|view|[unstableDashboardWidgetView](#schemaunstabledashboardwidgetview)|false|none|none|
|dimensions|[[unstableDashboardWidgetDimension](#schemaunstabledashboardwidgetdimension)]|false|none|none|
|metrics|[[unstableDashboardWidgetMetric](#schemaunstabledashboardwidgetmetric)]|false|none|none|
|filters|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|false|none|none|
|chartType|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|false|none|none|
|chartConfig|[unstableDashboardWidgetChartConfigInput](#schemaunstabledashboardwidgetchartconfiginput)|false|none|Input-side chart config. `type` is optional and defaults to the<br>widget's `chartType`; when given it must match.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|observations|
|view|scores-numeric|
|view|scores-boolean|
|view|scores-categorical|
|chartType|LINE_TIME_SERIES|
|chartType|AREA_TIME_SERIES|
|chartType|BAR_TIME_SERIES|
|chartType|HORIZONTAL_BAR|
|chartType|VERTICAL_BAR|
|chartType|PIE|
|chartType|NUMBER|
|chartType|HISTOGRAM|
|chartType|PIVOT_TABLE|

<h2 id="tocS_unstableDashboardWidgetList">unstableDashboardWidgetList</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidgetlist"></a>
<a id="schema_unstableDashboardWidgetList"></a>
<a id="tocSunstabledashboardwidgetlist"></a>
<a id="tocsunstabledashboardwidgetlist"></a>

```json
{
  "data": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "description": "string",
      "view": "observations",
      "dimensions": [
        {
          "field": "string"
        }
      ],
      "metrics": [
        {
          "measure": "string",
          "agg": "sum"
        }
      ],
      "filters": [
        {
          "column": "string",
          "operator": "string",
          "type": "string",
          "value": null,
          "key": "string"
        }
      ],
      "chartType": "LINE_TIME_SERIES",
      "chartConfig": {
        "type": "LINE_TIME_SERIES",
        "row_limit": 0,
        "show_value_labels": true,
        "bins": 0,
        "defaultSort": {
          "column": "string",
          "order": "ASC"
        }
      }
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[unstableDashboardWidget](#schemaunstabledashboardwidget)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_unstableDeleteDashboardWidgetResponse">unstableDeleteDashboardWidgetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledeletedashboardwidgetresponse"></a>
<a id="schema_unstableDeleteDashboardWidgetResponse"></a>
<a id="tocSunstabledeletedashboardwidgetresponse"></a>
<a id="tocsunstabledeletedashboardwidgetresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_unstableDashboardWidget">unstableDashboardWidget</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardwidget"></a>
<a id="schema_unstableDashboardWidget"></a>
<a id="tocSunstabledashboardwidget"></a>
<a id="tocsunstabledashboardwidget"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "view": "observations",
  "dimensions": [
    {
      "field": "string"
    }
  ],
  "metrics": [
    {
      "measure": "string",
      "agg": "sum"
    }
  ],
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ],
  "chartType": "LINE_TIME_SERIES",
  "chartConfig": {
    "type": "LINE_TIME_SERIES",
    "row_limit": 0,
    "show_value_labels": true,
    "bins": 0,
    "defaultSort": {
      "column": "string",
      "order": "ASC"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|view|[unstableDashboardWidgetViewWithLegacy](#schemaunstabledashboardwidgetviewwithlegacy)|true|none|Widget data view. Responses may include the legacy `traces` value for<br>widgets created before this API existed.|
|dimensions|[[unstableDashboardWidgetDimension](#schemaunstabledashboardwidgetdimension)]|true|none|none|
|metrics|[[unstableDashboardWidgetMetric](#schemaunstabledashboardwidgetmetric)]|true|none|none|
|filters|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|true|none|none|
|chartType|[unstableDashboardWidgetChartType](#schemaunstabledashboardwidgetcharttype)|true|none|none|
|chartConfig|[unstableDashboardWidgetChartConfig](#schemaunstabledashboardwidgetchartconfig)|true|none|Chart-specific widget configuration.<br><br>`type` must match the top-level `chartType`.<br>`row_limit` applies to total-value charts and pivot tables.<br>`bins` applies to histograms.<br>`defaultSort` applies to pivot tables.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|observations|
|view|scores-numeric|
|view|scores-boolean|
|view|scores-categorical|
|view|traces|
|chartType|LINE_TIME_SERIES|
|chartType|AREA_TIME_SERIES|
|chartType|BAR_TIME_SERIES|
|chartType|HORIZONTAL_BAR|
|chartType|VERTICAL_BAR|
|chartType|PIE|
|chartType|NUMBER|
|chartType|HISTOGRAM|
|chartType|PIVOT_TABLE|

<h2 id="tocS_unstableDashboardPlacement">unstableDashboardPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardplacement"></a>
<a id="schema_unstableDashboardPlacement"></a>
<a id="tocSunstabledashboardplacement"></a>
<a id="tocsunstabledashboardplacement"></a>

```json
{
  "type": "widget",
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

A tile on the dashboard's 12-column grid. `x`/`y` are the tile's
top-left cell (0-based; `y` grows downward), `width`/`height` its size
in cells. The UI default tile is 6x6 (half width). Overlapping tiles
are not rejected; prefer appending below existing tiles (or omit the
position on create to let the server do it).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|widgetId|string|true|none|none|
|x|integer|true|none|none|
|y|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string|true|none|none|
|presetId|string|true|none|none|
|x|integer|true|none|none|
|y|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|widget|
|type|preset|

<h2 id="tocS_unstableWidgetPlacement">unstableWidgetPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaunstablewidgetplacement"></a>
<a id="schema_unstableWidgetPlacement"></a>
<a id="tocSunstablewidgetplacement"></a>
<a id="tocsunstablewidgetplacement"></a>

```json
{
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|widgetId|string|true|none|none|
|x|integer|true|none|none|
|y|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|

<h2 id="tocS_unstablePresetPlacement">unstablePresetPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaunstablepresetplacement"></a>
<a id="schema_unstablePresetPlacement"></a>
<a id="tocSunstablepresetplacement"></a>
<a id="tocsunstablepresetplacement"></a>

```json
{
  "id": "string",
  "presetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|presetId|string|true|none|none|
|x|integer|true|none|none|
|y|integer|true|none|none|
|width|integer|true|none|none|
|height|integer|true|none|none|

<h2 id="tocS_unstableCreateDashboardPlacementRequest">unstableCreateDashboardPlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunstablecreatedashboardplacementrequest"></a>
<a id="schema_unstableCreateDashboardPlacementRequest"></a>
<a id="tocSunstablecreatedashboardplacementrequest"></a>
<a id="tocsunstablecreatedashboardplacementrequest"></a>

```json
{
  "type": "widget",
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string \| null|false|none|Server-generated when omitted.|
|widgetId|string|true|none|none|
|x|integer \| null|false|none|Grid column (12-column grid). Defaults to `0`.|
|y|integer \| null|false|none|Grid row. Defaults to the first row below all existing tiles.|
|width|integer \| null|false|none|Width in grid columns. Defaults to `6`.|
|height|integer \| null|false|none|Height in grid rows. Defaults to `6`.|
|*oneOf*|object|false|none|none|
|type|string|true|none|none|
|id|string \| null|false|none|Server-generated when omitted.|
|presetId|string|true|none|none|
|x|integer \| null|false|none|Grid column (12-column grid). Defaults to `0`.|
|y|integer \| null|false|none|Grid row. Defaults to the first row below all existing tiles.|
|width|integer \| null|false|none|Width in grid columns. Defaults to `6`.|
|height|integer \| null|false|none|Height in grid rows. Defaults to `6`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|widget|
|type|preset|

<h2 id="tocS_unstableCreateWidgetPlacement">unstableCreateWidgetPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaunstablecreatewidgetplacement"></a>
<a id="schema_unstableCreateWidgetPlacement"></a>
<a id="tocSunstablecreatewidgetplacement"></a>
<a id="tocsunstablecreatewidgetplacement"></a>

```json
{
  "id": "string",
  "widgetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|Server-generated when omitted.|
|widgetId|string|true|none|none|
|x|integer \| null|false|none|Grid column (12-column grid). Defaults to `0`.|
|y|integer \| null|false|none|Grid row. Defaults to the first row below all existing tiles.|
|width|integer \| null|false|none|Width in grid columns. Defaults to `6`.|
|height|integer \| null|false|none|Height in grid rows. Defaults to `6`.|

<h2 id="tocS_unstableCreatePresetPlacement">unstableCreatePresetPlacement</h2>
<!-- backwards compatibility -->
<a id="schemaunstablecreatepresetplacement"></a>
<a id="schema_unstableCreatePresetPlacement"></a>
<a id="tocSunstablecreatepresetplacement"></a>
<a id="tocsunstablecreatepresetplacement"></a>

```json
{
  "id": "string",
  "presetId": "string",
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|Server-generated when omitted.|
|presetId|string|true|none|none|
|x|integer \| null|false|none|Grid column (12-column grid). Defaults to `0`.|
|y|integer \| null|false|none|Grid row. Defaults to the first row below all existing tiles.|
|width|integer \| null|false|none|Width in grid columns. Defaults to `6`.|
|height|integer \| null|false|none|Height in grid rows. Defaults to `6`.|

<h2 id="tocS_unstableUpdateDashboardPlacementRequest">unstableUpdateDashboardPlacementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunstableupdatedashboardplacementrequest"></a>
<a id="schema_unstableUpdateDashboardPlacementRequest"></a>
<a id="tocSunstableupdatedashboardplacementrequest"></a>
<a id="tocsunstableupdatedashboardplacementrequest"></a>

```json
{
  "x": 0,
  "y": 0,
  "width": 0,
  "height": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer \| null|false|none|Grid column (12-column grid).|
|y|integer \| null|false|none|Grid row.|
|width|integer \| null|false|none|Width in grid columns.|
|height|integer \| null|false|none|Height in grid rows.|

<h2 id="tocS_unstableDeleteDashboardPlacementResponse">unstableDeleteDashboardPlacementResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledeletedashboardplacementresponse"></a>
<a id="schema_unstableDeleteDashboardPlacementResponse"></a>
<a id="tocSunstabledeletedashboardplacementresponse"></a>
<a id="tocsunstabledeletedashboardplacementresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_unstableDashboardDefinition">unstableDashboardDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboarddefinition"></a>
<a id="schema_unstableDashboardDefinition"></a>
<a id="tocSunstabledashboarddefinition"></a>
<a id="tocsunstabledashboarddefinition"></a>

```json
{
  "widgets": [
    {
      "type": "widget",
      "id": "string",
      "widgetId": "string",
      "x": 0,
      "y": 0,
      "width": 0,
      "height": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|widgets|[[unstableDashboardPlacement](#schemaunstabledashboardplacement)]|true|none|none|

<h2 id="tocS_unstableDashboard">unstableDashboard</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboard"></a>
<a id="schema_unstableDashboard"></a>
<a id="tocSunstabledashboard"></a>
<a id="tocsunstabledashboard"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|definition|[unstableDashboardDefinition](#schemaunstabledashboarddefinition)|true|none|none|
|filters|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|true|none|Dashboard-level filters applied to all widgets on the dashboard.|

<h2 id="tocS_unstableDashboardList">unstableDashboardList</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledashboardlist"></a>
<a id="schema_unstableDashboardList"></a>
<a id="tocSunstabledashboardlist"></a>
<a id="tocsunstabledashboardlist"></a>

```json
{
  "data": [
    {
      "id": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "name": "string",
      "description": "string",
      "definition": {
        "widgets": [
          {
            "type": "widget",
            "id": "string",
            "widgetId": "string",
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
          }
        ]
      },
      "filters": [
        {
          "column": "string",
          "operator": "string",
          "type": "string",
          "value": null,
          "key": "string"
        }
      ]
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[unstableDashboard](#schemaunstabledashboard)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_unstableCreateDashboardRequest">unstableCreateDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunstablecreatedashboardrequest"></a>
<a id="schema_unstableCreateDashboardRequest"></a>
<a id="tocSunstablecreatedashboardrequest"></a>
<a id="tocsunstablecreatedashboardrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|definition|[unstableDashboardDefinition](#schemaunstabledashboarddefinition)|false|none|none|
|filters|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|false|none|none|

<h2 id="tocS_unstableUpdateDashboardRequest">unstableUpdateDashboardRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunstableupdatedashboardrequest"></a>
<a id="schema_unstableUpdateDashboardRequest"></a>
<a id="tocSunstableupdatedashboardrequest"></a>
<a id="tocsunstableupdatedashboardrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "definition": {
    "widgets": [
      {
        "type": "widget",
        "id": "string",
        "widgetId": "string",
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 0
      }
    ]
  },
  "filters": [
    {
      "column": "string",
      "operator": "string",
      "type": "string",
      "value": null,
      "key": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|description|string \| null|false|none|none|
|definition|[unstableDashboardDefinition](#schemaunstabledashboarddefinition)|false|none|none|
|filters|[[unstableDashboardWidgetFilter](#schemaunstabledashboardwidgetfilter)]|false|none|none|

<h2 id="tocS_unstableDeleteDashboardResponse">unstableDeleteDashboardResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunstabledeletedashboardresponse"></a>
<a id="schema_unstableDeleteDashboardResponse"></a>
<a id="tocSunstabledeletedashboardresponse"></a>
<a id="tocsunstabledeletedashboardresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_unstablePublicApiErrorCode">unstablePublicApiErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaunstablepublicapierrorcode"></a>
<a id="schema_unstablePublicApiErrorCode"></a>
<a id="tocSunstablepublicapierrorcode"></a>
<a id="tocsunstablepublicapierrorcode"></a>

```json
"authentication_failed"
```

Machine-readable error code returned by unstable public API endpoints.

<h2 id="tocS_unstablePublicApiValidationIssue">unstablePublicApiValidationIssue</h2>
<!-- backwards compatibility -->
<a id="schemaunstablepublicapivalidationissue"></a>
<a id="schema_unstablePublicApiValidationIssue"></a>
<a id="tocSunstablepublicapivalidationissue"></a>
<a id="tocsunstablepublicapivalidationissue"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": [
    null
  ]
}
```

A validation issue returned for malformed request bodies or query parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|
|path|[object]|true|none|none|

<h2 id="tocS_unstablePublicApiErrorDetails">unstablePublicApiErrorDetails</h2>
<!-- backwards compatibility -->
<a id="schemaunstablepublicapierrordetails"></a>
<a id="schema_unstablePublicApiErrorDetails"></a>
<a id="tocSunstablepublicapierrordetails"></a>
<a id="tocsunstablepublicapierrordetails"></a>

```json
{
  "issues": [
    {
      "code": "string",
      "message": "string",
      "path": [
        null
      ]
    }
  ],
  "field": "string",
  "column": "string",
  "invalidValues": [
    "string"
  ],
  "allowedValues": [
    "string"
  ],
  "value": "string",
  "retryAfterSeconds": 0,
  "limit": 0,
  "remaining": 0,
  "resetAt": "string"
}
```

Optional structured context attached to an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[unstablePublicApiValidationIssue](#schemaunstablepublicapivalidationissue)]|false|none|none|
|field|string \| null|false|none|none|
|column|string \| null|false|none|none|
|invalidValues|[string]|false|none|none|
|allowedValues|[string]|false|none|none|
|value|string \| null|false|none|none|
|retryAfterSeconds|integer \| null|false|none|none|
|limit|integer \| null|false|none|none|
|remaining|integer \| null|false|none|none|
|resetAt|string \| null|false|none|none|

<h2 id="tocS_unstablePublicApiError">unstablePublicApiError</h2>
<!-- backwards compatibility -->
<a id="schemaunstablepublicapierror"></a>
<a id="schema_unstablePublicApiError"></a>
<a id="tocSunstablepublicapierror"></a>
<a id="tocsunstablepublicapierror"></a>

```json
{
  "message": "string",
  "code": "authentication_failed",
  "details": {
    "issues": [
      {
        "code": "string",
        "message": "string",
        "path": [
          null
        ]
      }
    ],
    "field": "string",
    "column": "string",
    "invalidValues": [
      "string"
    ],
    "allowedValues": [
      "string"
    ],
    "value": "string",
    "retryAfterSeconds": 0,
    "limit": 0,
    "remaining": 0,
    "resetAt": "string"
  }
}
```

Standard error envelope for unstable public API endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Human-readable description of the failure.|
|code|[unstablePublicApiErrorCode](#schemaunstablepublicapierrorcode)|true|none|Machine-readable error code.|
|details|[unstablePublicApiErrorDetails](#schemaunstablepublicapierrordetails)|false|none|Optional structured error context.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|authentication_failed|
|code|access_denied|
|code|invalid_request|
|code|invalid_query|
|code|invalid_body|
|code|resource_not_found|
|code|conflict|
|code|rate_limited|
|code|method_not_allowed|
|code|internal_error|

<h2 id="tocS_unstableTopicsOrderBy">unstableTopicsOrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicsorderby"></a>
<a id="schema_unstableTopicsOrderBy"></a>
<a id="tocSunstabletopicsorderby"></a>
<a id="tocsunstabletopicsorderby"></a>

```json
"traceCount.desc"
```

<h2 id="tocS_unstableTopicFacetPublishedRun">unstableTopicFacetPublishedRun</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicfacetpublishedrun"></a>
<a id="schema_unstableTopicFacetPublishedRun"></a>
<a id="tocSunstabletopicfacetpublishedrun"></a>
<a id="tocsunstabletopicfacetpublishedrun"></a>

```json
{
  "id": "string",
  "completedAt": "1970-01-01T00:00:00Z",
  "topicCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|completedAt|string(date-time) \| null|false|none|none|
|topicCount|integer|true|none|none|

<h2 id="tocS_unstableTopicFacet">unstableTopicFacet</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicfacet"></a>
<a id="schema_unstableTopicFacet"></a>
<a id="tocSunstabletopicfacet"></a>
<a id="tocsunstabletopicfacet"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "isBuiltIn": true,
  "active": true,
  "version": 0,
  "prompt": "string",
  "publishedRun": {
    "id": "string",
    "completedAt": "1970-01-01T00:00:00Z",
    "topicCount": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string|true|none|none|
|isBuiltIn|boolean|true|none|none|
|active|boolean|true|none|Whether the facet is attached to the project's Topics rule. True for all facets if the project has no rule.|
|version|integer|true|none|Latest facet version.|
|prompt|string|true|none|Prompt of the latest facet version.|
|publishedRun|[unstableTopicFacetPublishedRun](#schemaunstabletopicfacetpublishedrun)|false|none|The run that produced the facet's current map. Null before the first map.|

<h2 id="tocS_unstableTopicFacetList">unstableTopicFacetList</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicfacetlist"></a>
<a id="schema_unstableTopicFacetList"></a>
<a id="tocSunstabletopicfacetlist"></a>
<a id="tocsunstabletopicfacetlist"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "isBuiltIn": true,
      "active": true,
      "version": 0,
      "prompt": "string",
      "publishedRun": {
        "id": "string",
        "completedAt": "1970-01-01T00:00:00Z",
        "topicCount": 0
      }
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[unstableTopicFacet](#schemaunstabletopicfacet)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_unstableTopicFacetRef">unstableTopicFacetRef</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicfacetref"></a>
<a id="schema_unstableTopicFacetRef"></a>
<a id="tocSunstabletopicfacetref"></a>
<a id="tocsunstabletopicfacetref"></a>

```json
{
  "id": "string",
  "name": "string",
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|version|integer|true|none|none|

<h2 id="tocS_unstableTopicWindow">unstableTopicWindow</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicwindow"></a>
<a id="schema_unstableTopicWindow"></a>
<a id="tocSunstabletopicwindow"></a>
<a id="tocsunstabletopicwindow"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date-time)|true|none|none|
|to|string(date-time)|true|none|none|

<h2 id="tocS_unstableTopic">unstableTopic</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopic"></a>
<a id="schema_unstableTopic"></a>
<a id="tocSunstabletopic"></a>
<a id="tocsunstabletopic"></a>

```json
{
  "id": "string",
  "versionId": "string",
  "name": "string",
  "description": "string",
  "facet": {
    "id": "string",
    "name": "string",
    "version": 0
  },
  "runId": "string",
  "traceCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable topic id, kept across map updates.|
|versionId|string|true|none|Id of this topic version.|
|name|string|true|none|none|
|description|string|true|none|none|
|facet|[unstableTopicFacetRef](#schemaunstabletopicfacetref)|true|none|none|
|runId|string|true|none|The run that produced this topic version.|
|traceCount|integer|true|none|Traces in the window whose current result for the facet is this topic.|

<h2 id="tocS_unstableTopicWithStatus">unstableTopicWithStatus</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicwithstatus"></a>
<a id="schema_unstableTopicWithStatus"></a>
<a id="tocSunstabletopicwithstatus"></a>
<a id="tocsunstabletopicwithstatus"></a>

```json
{
  "id": "string",
  "versionId": "string",
  "name": "string",
  "description": "string",
  "facet": {
    "id": "string",
    "name": "string",
    "version": 0
  },
  "runId": "string",
  "traceCount": 0,
  "inCurrentMap": true,
  "window": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Stable topic id, kept across map updates.|
|versionId|string|true|none|Id of this topic version.|
|name|string|true|none|none|
|description|string|true|none|none|
|facet|[unstableTopicFacetRef](#schemaunstabletopicfacetref)|true|none|none|
|runId|string|true|none|The run that produced this topic version.|
|traceCount|integer|true|none|Traces in the window whose current result for the facet is this topic.|
|inCurrentMap|boolean|true|none|False for retired topics that still have assigned traces in the window.|
|window|[unstableTopicWindow](#schemaunstabletopicwindow)|true|none|none|

<h2 id="tocS_unstableTopicStatusCounts">unstableTopicStatusCounts</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicstatuscounts"></a>
<a id="schema_unstableTopicStatusCounts"></a>
<a id="tocSunstabletopicstatuscounts"></a>
<a id="tocsunstabletopicstatuscounts"></a>

```json
{
  "assigned": 0,
  "outlier": 0,
  "awaitingMap": 0,
  "notApplicable": 0,
  "insufficientInput": 0
}
```

Traces in the window by their current result for one facet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assigned|integer|true|none|none|
|outlier|integer|true|none|none|
|awaitingMap|integer|true|none|none|
|notApplicable|integer|true|none|none|
|insufficientInput|integer|true|none|none|

<h2 id="tocS_unstableTopicFacetCounts">unstableTopicFacetCounts</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopicfacetcounts"></a>
<a id="schema_unstableTopicFacetCounts"></a>
<a id="tocSunstabletopicfacetcounts"></a>
<a id="tocsunstabletopicfacetcounts"></a>

```json
{
  "facet": {
    "id": "string",
    "name": "string",
    "version": 0
  },
  "publishedRunId": "string",
  "counts": {
    "assigned": 0,
    "outlier": 0,
    "awaitingMap": 0,
    "notApplicable": 0,
    "insufficientInput": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facet|[unstableTopicFacetRef](#schemaunstabletopicfacetref)|true|none|none|
|publishedRunId|string \| null|false|none|none|
|counts|[unstableTopicStatusCounts](#schemaunstabletopicstatuscounts)|true|none|Traces in the window by their current result for one facet.|

<h2 id="tocS_unstableTopicList">unstableTopicList</h2>
<!-- backwards compatibility -->
<a id="schemaunstabletopiclist"></a>
<a id="schema_unstableTopicList"></a>
<a id="tocSunstabletopiclist"></a>
<a id="tocsunstabletopiclist"></a>

```json
{
  "window": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z"
  },
  "data": [
    {
      "id": "string",
      "versionId": "string",
      "name": "string",
      "description": "string",
      "facet": {
        "id": "string",
        "name": "string",
        "version": 0
      },
      "runId": "string",
      "traceCount": 0
    }
  ],
  "facets": [
    {
      "facet": {
        "id": "string",
        "name": "string",
        "version": 0
      },
      "publishedRunId": "string",
      "counts": {
        "assigned": 0,
        "outlier": 0,
        "awaitingMap": 0,
        "notApplicable": 0,
        "insufficientInput": 0
      }
    }
  ],
  "meta": {
    "page": 0,
    "limit": 0,
    "totalItems": 0,
    "totalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|window|[unstableTopicWindow](#schemaunstabletopicwindow)|true|none|none|
|data|[[unstableTopic](#schemaunstabletopic)]|true|none|none|
|facets|[[unstableTopicFacetCounts](#schemaunstabletopicfacetcounts)]|true|none|none|
|meta|[utilsMetaResponse](#schemautilsmetaresponse)|true|none|none|

<h2 id="tocS_utilsMetaResponse">utilsMetaResponse</h2>
<!-- backwards compatibility -->
<a id="schemautilsmetaresponse"></a>
<a id="schema_utilsMetaResponse"></a>
<a id="tocSutilsmetaresponse"></a>
<a id="tocsutilsmetaresponse"></a>

```json
{
  "page": 0,
  "limit": 0,
  "totalItems": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|true|none|current page number|
|limit|integer|true|none|number of items per page|
|totalItems|integer|true|none|number of total items given the current filters/selection (if any)|
|totalPages|integer|true|none|number of total pages given the current limit|

<h2 id="tocS_utilsCursorMetaResponse">utilsCursorMetaResponse</h2>
<!-- backwards compatibility -->
<a id="schemautilscursormetaresponse"></a>
<a id="schema_utilsCursorMetaResponse"></a>
<a id="tocSutilscursormetaresponse"></a>
<a id="tocsutilscursormetaresponse"></a>

```json
{
  "cursor": "string"
}
```

Metadata for cursor-based pagination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string \| null|false|none|Opaque cursor for the next page. Omitted when there is no next page.|
