<h1 id="profilarr-api">Profilarr API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Profilarr manages configuration for Radarr and Sonarr by syncing
curated configuration databases into Arr instances.

`POST`, `PUT`, `PATCH`, and `DELETE` requests without a body must still
send `Content-Type: application/json`. Requests with no `Content-Type`
are rejected with `403` as cross-site form submissions.

Base URLs:

* <a href="https://raw.githubusercontent.com/api/v1">https://raw.githubusercontent.com/api/v1</a> - API v1

Web: <a href="https://github.com/Dictionarry-Hub/profilarr">Profilarr</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-Api-Key**, in: header. API key for programmatic access. Create keys in Settings > Security.

Each key has either full access or per-area access. Areas match the
tags in this spec, and each operation's `x-permission` says whether it
needs `read` or `write` access to its area. Write access includes
read. A key without the required access gets 403, and an expired key
gets 401.

* API Key (session)
    - Parameter Name: **session**, in: cookie. Session cookie set after browser login.

<h1 id="profilarr-api-system">System</h1>

Health checks, system status, and API metadata.

## Health Check

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/health \
  -H 'Accept: application/json'
```

`GET /health`

Public endpoint, no authentication required. Use this for uptime monitors
and load balancers. Returns 200 for healthy or degraded, 503 for unhealthy.


> Example responses

> 200 Response

```json
{
  "status": "healthy",
  "timestamp": "2026-03-09T12:00:00.000Z"
}
```

> 503 Response

```json
{
  "status": "unhealthy",
  "timestamp": "2026-03-09T12:00:00.000Z"
}
```

<h3 id="health-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System is healthy or degraded (status field indicates which)|Inline|
|503|Service Unavailable|System is unhealthy (status field will be "unhealthy")|Inline|

<h3 id="health-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Overall health status|
|timestamp|string(date-time)|true|none|Current server time|

#### Enumerated Values

|Property|Value|
|---|---|
|status|healthy|
|status|degraded|
|status|unhealthy|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Overall health status|
|timestamp|string(date-time)|true|none|Current server time|

#### Enumerated Values

|Property|Value|
|---|---|
|status|healthy|
|status|degraded|
|status|unhealthy|

<aside class="success">
This operation does not require authentication
</aside>

## System Status

<a id="opIdgetStatus"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /status`

Single-call overview designed for dashboard integrations (e.g. Homepage).
The `drift` field on each arr is reserved for future use and always null.


> Example responses

> 200 Response

```json
{
  "version": "2.0.0",
  "uptime": 86400,
  "timezone": "America/New_York",
  "databases": [
    {
      "id": 1,
      "name": "Dictionarry",
      "enabled": true,
      "lastSyncedAt": "2026-04-09T12:00:00Z",
      "syncStrategy": "auto",
      "counts": {
        "customFormats": 52,
        "qualityProfiles": 3,
        "regularExpressions": 120,
        "delayProfiles": 1
      }
    }
  ],
  "arrs": [
    {
      "id": 1,
      "name": "Radarr",
      "type": "radarr",
      "enabled": true,
      "sync": {
        "qualityProfiles": {
          "count": 2,
          "status": "idle",
          "lastSyncedAt": "2026-04-09T12:00:00Z"
        },
        "delayProfiles": {
          "configured": true,
          "status": "idle",
          "lastSyncedAt": "2026-04-09T12:00:00Z"
        },
        "mediaManagement": {
          "configured": true,
          "status": "idle",
          "lastSyncedAt": "2026-04-09T12:00:00Z"
        }
      },
      "drift": null
    }
  ],
  "jobs": {
    "active": 0,
    "queued": 2,
    "nextRunAt": "2026-04-09T13:00:00Z"
  },
  "backups": {
    "enabled": true,
    "lastBackupAt": "2026-04-09T00:00:00Z"
  },
  "announcements": {
    "unread": 2
  }
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to System"
}
```

<h3 id="system-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System status|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="system-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Application version|
|uptime|integer|true|none|Server uptime in seconds|
|timezone|string|true|none|Server timezone (IANA, e.g. "America/New_York")|
|databases|[object]|true|none|none|
|» id|integer|true|none|Database instance ID|
|» name|string|true|none|Display name|
|» enabled|boolean|true|none|Whether the database is active|
|» lastSyncedAt|string(date-time) \| null|true|none|Last successful sync check timestamp|
|» syncStrategy|string|true|none|Sync strategy|
|» counts|object|true|none|none|
|» » customFormats|integer|true|none|Number of custom formats|
|» » qualityProfiles|integer|true|none|Number of quality profiles|
|» » regularExpressions|integer|true|none|Number of regular expressions|
|» » delayProfiles|integer|true|none|Number of delay profiles|
|arrs|[object]|true|none|none|
|» id|integer|true|none|Arr instance ID|
|» name|string|true|none|Display name|
|» type|string|true|none|Arr application type|
|» enabled|boolean|true|none|Whether the instance is active|
|» sync|object|true|none|none|
|» » qualityProfiles|object|true|none|none|
|» » » count|integer|true|none|Number of synced quality profiles|
|» » » status|string|true|none|Sync status (idle, pending, in_progress, failed)|
|» » » lastSyncedAt|string(date-time) \| null|true|none|Last successful sync timestamp|
|» » delayProfiles|object|true|none|none|
|» » » configured|boolean|true|none|Whether this sync section has been configured|
|» » » status|string|true|none|Sync status (idle, pending, in_progress, failed)|
|» » » lastSyncedAt|string(date-time) \| null|true|none|Last successful sync timestamp|
|» » mediaManagement|object|true|none|none|
|» » » configured|boolean|true|none|Whether this sync section has been configured|
|» » » status|string|true|none|Sync status (idle, pending, in_progress, failed)|
|» » » lastSyncedAt|string(date-time) \| null|true|none|Last successful sync timestamp|
|» drift|object \| null|true|none|Drift detection result (null until implemented)|
|» » *oneOf*|object|false|none|none|
|» » lastCheckedAt|string(date-time)|true|none|When drift was last checked|
|» » drifted|boolean|true|none|Whether any section has drifted|
|» » details|object|true|none|none|
|» » » qualityProfiles|integer|true|none|Number of drifted quality profiles|
|» » » delayProfiles|integer|true|none|Number of drifted delay profiles|
|» » » mediaManagement|integer|true|none|Number of drifted media management configs|
|» » *oneOf*|null|false|none|none|
|jobs|object|true|none|none|
|» active|integer|true|none|Number of currently running jobs|
|» queued|integer|true|none|Number of queued jobs|
|» nextRunAt|string(date-time) \| null|true|none|Earliest scheduled job run time|
|backups|object|true|none|none|
|» enabled|boolean|true|none|Whether automatic backups are enabled|
|» lastBackupAt|string(date-time) \| null|true|none|Timestamp of last backup|
|announcements|object|true|none|none|
|» unread|integer|true|none|Number of unread, visible announcements. Visibility honours<br>`withdrawn`, `expires_at`, and the running build's version bounds<br>(`min_version` / `max_version`).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|» syncStrategy|manual|
|» syncStrategy|auto|
|» type|radarr|
|» type|sonarr|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## OpenAPI Specification

<a id="opIdgetOpenApiSpec"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/openapi.json \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /openapi.json`

Returns the resolved OpenAPI 3.1 spec as a single JSON document.
Useful for generating client SDKs or feeding to documentation tools.


> Example responses

> 200 Response

```json
{}
```

> 403 Response

```json
{
  "error": "API key does not have read access to System"
}
```

<h3 id="openapi-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI specification|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="openapi-specification-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

<h1 id="profilarr-api-jobs">Jobs</h1>

Job queue status and polling

## Get Job Status

<a id="opIdgetJob"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/jobs/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /jobs/{id}`

Returns the current status of a job queue entry.

**Use cases:**
- Polling for completion after creating a backup
- Checking if a scheduled job has run
- Inspecting job errors after failure

**Behavior:**
- Returns the job queue record with its current status
- If the job has executed, `result` includes the latest run history
- If the job is still queued or running, `result` is null


<h3 id="get-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Job queue ID (returned by endpoints that create jobs)|

> Example responses

> 200 Response

```json
{
  "id": 42,
  "jobType": "backup.create",
  "status": "success",
  "source": "manual",
  "createdAt": "2026-03-15T10:00:00.000Z",
  "startedAt": "2026-03-15T10:00:01.000Z",
  "finishedAt": "2026-03-15T10:00:05.000Z",
  "result": {
    "status": "success",
    "output": "Backup created: backup-2026-03-15-100005.tar.gz (12.34 MB)",
    "error": null,
    "durationMs": 4000
  }
}
```

> 400 Response

```json
{
  "error": "Invalid job ID"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Jobs"
}
```

> 404 Response

```json
{
  "error": "Job not found"
}
```

<h3 id="get-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job found|Inline|
|400|Bad Request|Invalid job ID (non-numeric or less than 1)|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Job not found|Inline|

<h3 id="get-job-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Job queue ID|
|jobType|string|true|none|Job type identifier (e.g. backup.create, arr.sync)|
|status|string|true|none|Current state of the job in the queue|
|source|string|true|none|How the job was triggered|
|createdAt|string|true|none|When the job was enqueued|
|startedAt|string \| null|true|none|When execution started (null if still queued)|
|finishedAt|string \| null|true|none|When execution finished (null if not yet complete)|
|result|object \| null|true|none|Latest run result, or null if the job has not executed yet|
|» *oneOf*|object|false|none|none|
|» status|string|true|none|Outcome of the job execution|
|» output|string \| null|true|none|Human-readable output from the handler|
|» error|string \| null|true|none|Error message if the job failed|
|» durationMs|integer|true|none|Execution time in milliseconds|
|» *oneOf*|null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|running|
|status|success|
|status|failed|
|status|cancelled|
|source|manual|
|source|schedule|
|source|system|
|» status|success|
|» status|failure|
|» status|skipped|
|» status|cancelled|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

<h1 id="profilarr-api-backups">Backups</h1>

Backup creation, listing, download, upload, and settings

## List Backups

<a id="opIdlistBackups"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /backups`

> Example responses

> 200 Response

```json
[
  {
    "filename": "backup-2026-03-15-100005.tar.gz",
    "created": "1970-01-01T00:00:00Z",
    "size": 0,
    "sizeFormatted": "12.34 MB"
  }
]
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Backups"
}
```

<h3 id="list-backups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of backup files, sorted newest first|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="list-backups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» filename|string|true|none|Backup archive filename|
|» created|string(date-time)|true|none|File modification time (when the backup was created)|
|» size|integer|true|none|File size in bytes|
|» sizeFormatted|string|true|none|Human-readable file size|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Create Backup

<a id="opIdcreateBackup"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /backups`

Async. Enqueues a `backup.create` job and returns 202 with the job ID.
Poll `GET /api/v1/jobs/{jobId}` for completion. The backup includes a
sanitized database copy with all secrets stripped.


> Example responses

> 202 Response

```json
{
  "jobId": 42
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Backups"
}
```

<h3 id="create-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Backup job enqueued|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="create-backup-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|integer|true|none|Job queue ID. Poll GET /api/v1/jobs/{jobId} for status.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Download Backup

<a id="opIddownloadBackup"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /backups/{filename}`

Download a backup archive. The local file on disk is full-fidelity, but
the downloaded copy is sanitized on the fly so it is safer to share.
The following are removed from the downloaded archive:

- Arr instances (URLs, API keys, sync configs, drift state, rename and
  cleanup history)
- Notification services (webhook URLs, tokens, history)
- User accounts and active sessions
- Personal access tokens for linked databases
- AI and TMDB API keys

The local archive on the server is not modified. Restoring the
downloaded file on a different host will require re-adding the removed
items.


<h3 id="download-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Backup filename (must match `backup-*.tar.gz`)|

> Example responses

> 400 Response

```json
{
  "error": "Invalid filename"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Backups"
}
```

> 404 Response

```json
{
  "error": "Backup file not found"
}
```

<h3 id="download-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sanitized backup file download|Inline|
|400|Bad Request|Invalid filename or path traversal attempt|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Backup file not found|Inline|

<h3 id="download-backup-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Disposition|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Delete Backup

<a id="opIddeleteBackup"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /backups/{filename}`

<h3 id="delete-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filename|path|string|true|Backup filename|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": "Invalid filename"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Backups"
}
```

> 404 Response

```json
{
  "error": "Backup file not found"
}
```

<h3 id="delete-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Backup deleted|Inline|
|400|Bad Request|Invalid filename or path traversal attempt|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Backup file not found|Inline|

<h3 id="delete-backup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Upload Backup

<a id="opIduploadBackup"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /backups/upload`

Only `.tar.gz` files, max 1GB. Archive contents are scanned for path
traversal entries (zip slip protection). Files without a `backup-` prefix
are renamed to `backup-uploaded-{timestamp}.tar.gz`. Duplicates rejected.


> Body parameter

```yaml
file: string
```

<h3 id="upload-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» file|body|string(binary)|true|The `.tar.gz` backup archive to upload|

> Example responses

> 201 Response

```json
{
  "filename": "backup-uploaded-1710504000000.tar.gz",
  "size": 12345678,
  "sizeFormatted": "11.77 MB"
}
```

> 400 Response

```json
{
  "error": "Invalid file type. Only .tar.gz files are allowed."
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Backups"
}
```

<h3 id="upload-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Backup uploaded|Inline|
|400|Bad Request|Invalid file (wrong type, too large, zip slip, or duplicate)|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="upload-backup-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|true|none|Stored filename (may differ from upload name)|
|size|integer|true|none|File size in bytes|
|sizeFormatted|string|true|none|Human-readable file size|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Get Backup Settings

<a id="opIdgetBackupSettings"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups/settings \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /backups/settings`

> Example responses

> 200 Response

```json
{
  "schedule": "daily",
  "retentionDays": 30,
  "enabled": true,
  "includeDatabase": true,
  "compressionEnabled": true
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Backups"
}
```

<h3 id="get-backup-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current backup settings|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="get-backup-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|true|none|How often automatic backups run|
|retentionDays|integer|true|none|Days to keep backups before cleanup deletes them|
|enabled|boolean|true|none|Whether automatic backups are enabled|
|includeDatabase|boolean|true|none|Whether to include the database in backups|
|compressionEnabled|boolean|true|none|Whether backup compression is enabled|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|hourly|
|schedule|daily|
|schedule|weekly|
|schedule|monthly|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Update Backup Settings

<a id="opIdupdateBackupSettings"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/backups/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "schedule": "hourly",
    "retentionDays": 1,
    "enabled": true
  }'
```

`PATCH /backups/settings`

Partial update. After saving, backup jobs are rescheduled to match the
new settings.


> Body parameter

```json
{
  "schedule": "hourly",
  "retentionDays": 1,
  "enabled": true
}
```

<h3 id="update-backup-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» schedule|body|string|false|none|
|» retentionDays|body|integer|false|none|
|» enabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» schedule|hourly|
|» schedule|daily|
|» schedule|weekly|
|» schedule|monthly|

> Example responses

> 200 Response

```json
{
  "schedule": "hourly",
  "retentionDays": 1,
  "enabled": true,
  "includeDatabase": true,
  "compressionEnabled": true
}
```

> 400 Response

```json
{
  "error": "retentionDays must be between 1 and 365"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Backups"
}
```

<h3 id="update-backup-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated backup settings|Inline|
|400|Bad Request|Invalid input (bad schedule, retention out of range, empty body)|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="update-backup-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|true|none|How often automatic backups run|
|retentionDays|integer|true|none|Days to keep backups before cleanup deletes them|
|enabled|boolean|true|none|Whether automatic backups are enabled|
|includeDatabase|boolean|true|none|Whether to include the database in backups|
|compressionEnabled|boolean|true|none|Whether backup compression is enabled|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|hourly|
|schedule|daily|
|schedule|weekly|
|schedule|monthly|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

<h1 id="profilarr-api-arr">Arr</h1>

Arr instance management, library, and sync endpoints

## List Arr Instances

<a id="opIdlistArrInstances"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/arr \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /arr`

Returns all Arr instances (Radarr/Sonarr) with secrets stripped.

**Use cases:**
- Dashboard widgets showing connected instances
- Automation scripts checking instance state
- Prerequisite checks (e.g. onboarding)

**Behavior:**
- Returns an empty array if no instances are connected
- The `api_key`, `basic_auth_username`, and `basic_auth_password` fields are never included


> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "type": "radarr",
    "url": "string",
    "external_url": "https://radarr.example.com",
    "tags": "string",
    "enabled": 0,
    "library_refresh_interval": 0,
    "library_last_refreshed_at": "string",
    "detected_version": "5.0.0.2569",
    "detected_api": "v5",
    "detected_at": "string",
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> 403 Response

```json
{
  "error": "API key does not have read access to Arr"
}
```

<h3 id="list-arr-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Arr instances|Inline|
|401|Unauthorized|Not authenticated|None|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="list-arr-instances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|Instance ID|
|» name|string|true|none|Display name|
|» type|string|true|none|Type of Arr instance|
|» url|string|true|none|Instance URL used by Profilarr's backend for API calls|
|» external_url|string \| null|false|none|Optional external/browser-facing URL. When set, the UI uses this for<br>"Open in Radarr/Sonarr" browser links while Profilarr's backend continues<br>to call the instance using `url`. Useful for reverse-proxied deployments<br>where the internal and external hostnames differ.<br>|
|» tags|string \| null|false|none|JSON array of tags|
|» enabled|integer|true|none|Whether the instance is active (0 or 1)|
|» library_refresh_interval|integer|true|none|Library cache refresh interval in minutes (0 = manual)|
|» library_last_refreshed_at|string \| null|false|none|Last library refresh timestamp|
|» detected_version|string \| null|false|none|App version the instance reported on the last successful version probe,<br>e.g. `5.0.0.2569`. Null until Profilarr has probed it.<br>|
|» detected_api|string \| null|false|none|API generation the instance's unversioned `/api` route reported as<br>current on the last probe, e.g. `v3` or `v5`. Null when the instance<br>has no such route or has not been probed.<br>|
|» detected_at|string \| null|false|none|When the last successful version probe ran|
|» created_at|string|true|none|Creation timestamp|
|» updated_at|string|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|radarr|
|» type|sonarr|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

<h1 id="profilarr-api-databases">Databases</h1>

Linked database instance management

## List Databases

<a id="opIdlistDatabases"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/databases \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /databases`

Secrets are stripped: `personal_access_token` is replaced by `hasPat` (boolean)
and `local_path` is excluded.


> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "repository_url": "string",
    "sync_strategy": 0,
    "auto_pull": 0,
    "enabled": 0,
    "is_private": 0,
    "local_ops_enabled": 0,
    "git_user_name": "string",
    "git_user_email": "string",
    "conflict_strategy": "override",
    "last_synced_at": "string",
    "created_at": "string",
    "updated_at": "string",
    "hasPat": true
  }
]
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Databases"
}
```

<h3 id="list-databases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of linked databases|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="list-databases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|integer|true|none|Database instance ID|
|» uuid|string(uuid)|true|none|Unique identifier|
|» name|string|true|none|Display name|
|» repository_url|string|true|none|GitHub repository URL|
|» sync_strategy|integer|true|none|Auto-sync interval in minutes (0 = manual only)|
|» auto_pull|integer|true|none|Whether to automatically pull updates (0 or 1)|
|» enabled|integer|true|none|Whether the database is active (0 or 1)|
|» is_private|integer|true|none|Whether the repository is private (0 or 1)|
|» local_ops_enabled|integer|true|none|Whether local ops editing is enabled (0 or 1)|
|» git_user_name|string \| null|false|none|Git user name for commits|
|» git_user_email|string \| null|false|none|Git user email for commits|
|» conflict_strategy|string|true|none|How to handle conflicts between local tweaks and upstream updates|
|» last_synced_at|string \| null|false|none|Last successful sync timestamp|
|» created_at|string|true|none|Creation timestamp|
|» updated_at|string|true|none|Last update timestamp|
|» hasPat|boolean|true|none|Whether a personal access token is configured|

#### Enumerated Values

|Property|Value|
|---|---|
|» conflict_strategy|override|
|» conflict_strategy|align|
|» conflict_strategy|ask|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Link Database

<a id="opIdcreateDatabase"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/databases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "repository_url": "string",
    "branch": "string",
    "personal_access_token": "string",
    "git_user_name": "string",
    "git_user_email": "string",
    "sync_strategy": 0,
    "auto_pull": false,
    "local_ops_enabled": false,
    "conflict_strategy": "override"
  }'
```

`POST /databases`

Clones the repository, validates its PCD manifest, and processes dependencies.
This is synchronous and may take several seconds for large repositories.

Field dependencies:
- `personal_access_token` requires `git_user_name` and `git_user_email`
- `local_ops_enabled` requires `personal_access_token`
- `conflict_strategy` is only accepted without a PAT, or with PAT + `local_ops_enabled`


> Body parameter

```json
{
  "name": "string",
  "repository_url": "string",
  "branch": "string",
  "personal_access_token": "string",
  "git_user_name": "string",
  "git_user_email": "string",
  "sync_strategy": 0,
  "auto_pull": false,
  "local_ops_enabled": false,
  "conflict_strategy": "override"
}
```

<h3 id="link-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|Display name (must be unique)|
|» repository_url|body|string|true|GitHub repository URL|
|» branch|body|string|false|Git branch to clone (defaults to remote's default branch)|
|» personal_access_token|body|string|false|GitHub PAT for private repos and push access|
|» git_user_name|body|string|false|Required when personal_access_token is set|
|» git_user_email|body|string|false|Required when personal_access_token is set|
|» sync_strategy|body|integer|false|Auto-sync interval in minutes (0 = manual only)|
|» auto_pull|body|boolean|false|Whether to automatically pull updates|
|» local_ops_enabled|body|boolean|false|Force writes to local user ops even with a PAT (requires personal_access_token)|
|» conflict_strategy|body|string|false|How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» conflict_strategy|override|
|» conflict_strategy|align|
|» conflict_strategy|ask|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "repository_url": "string",
  "sync_strategy": 0,
  "auto_pull": 0,
  "enabled": 0,
  "is_private": 0,
  "local_ops_enabled": 0,
  "git_user_name": "string",
  "git_user_email": "string",
  "conflict_strategy": "override",
  "last_synced_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "hasPat": true
}
```

> 400 Response

```json
{
  "error": "Name and repository URL are required"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Databases"
}
```

> 409 Response

```json
{
  "error": "A database with this name already exists"
}
```

> 422 Response

```json
{
  "error": "Repository not found or inaccessible"
}
```

<h3 id="link-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Database linked|Inline|
|400|Bad Request|Validation error|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|409|Conflict|A database with this name already exists|Inline|
|422|Unprocessable Entity|Link failed (invalid URL, clone failure, bad manifest)|Inline|

<h3 id="link-database-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Database instance ID|
|uuid|string(uuid)|true|none|Unique identifier|
|name|string|true|none|Display name|
|repository_url|string|true|none|GitHub repository URL|
|sync_strategy|integer|true|none|Auto-sync interval in minutes (0 = manual only)|
|auto_pull|integer|true|none|Whether to automatically pull updates (0 or 1)|
|enabled|integer|true|none|Whether the database is active (0 or 1)|
|is_private|integer|true|none|Whether the repository is private (0 or 1)|
|local_ops_enabled|integer|true|none|Whether local ops editing is enabled (0 or 1)|
|git_user_name|string \| null|false|none|Git user name for commits|
|git_user_email|string \| null|false|none|Git user email for commits|
|conflict_strategy|string|true|none|How to handle conflicts between local tweaks and upstream updates|
|last_synced_at|string \| null|false|none|Last successful sync timestamp|
|created_at|string|true|none|Creation timestamp|
|updated_at|string|true|none|Last update timestamp|
|hasPat|boolean|true|none|Whether a personal access token is configured|

#### Enumerated Values

|Property|Value|
|---|---|
|conflict_strategy|override|
|conflict_strategy|align|
|conflict_strategy|ask|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Get Database

<a id="opIdgetDatabase"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/databases/0 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /databases/{id}`

Secrets are stripped: `personal_access_token` is replaced by `hasPat` (boolean)
and `local_path` is excluded.


<h3 id="get-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Database instance ID|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "repository_url": "string",
  "sync_strategy": 0,
  "auto_pull": 0,
  "enabled": 0,
  "is_private": 0,
  "local_ops_enabled": 0,
  "git_user_name": "string",
  "git_user_email": "string",
  "conflict_strategy": "override",
  "last_synced_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "hasPat": true
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Databases"
}
```

> 404 Response

```json
{
  "error": "Database not found"
}
```

<h3 id="get-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database detail|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Database not found|Inline|

<h3 id="get-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Database instance ID|
|uuid|string(uuid)|true|none|Unique identifier|
|name|string|true|none|Display name|
|repository_url|string|true|none|GitHub repository URL|
|sync_strategy|integer|true|none|Auto-sync interval in minutes (0 = manual only)|
|auto_pull|integer|true|none|Whether to automatically pull updates (0 or 1)|
|enabled|integer|true|none|Whether the database is active (0 or 1)|
|is_private|integer|true|none|Whether the repository is private (0 or 1)|
|local_ops_enabled|integer|true|none|Whether local ops editing is enabled (0 or 1)|
|git_user_name|string \| null|false|none|Git user name for commits|
|git_user_email|string \| null|false|none|Git user email for commits|
|conflict_strategy|string|true|none|How to handle conflicts between local tweaks and upstream updates|
|last_synced_at|string \| null|false|none|Last successful sync timestamp|
|created_at|string|true|none|Creation timestamp|
|updated_at|string|true|none|Last update timestamp|
|hasPat|boolean|true|none|Whether a personal access token is configured|

#### Enumerated Values

|Property|Value|
|---|---|
|conflict_strategy|override|
|conflict_strategy|align|
|conflict_strategy|ask|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Unlink Database

<a id="opIddeleteDatabase"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/databases/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`DELETE /databases/{id}`

Removes the database row, deletes the cloned repository from disk,
and cancels any scheduled sync jobs.


<h3 id="unlink-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Database instance ID|

> Example responses

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Databases"
}
```

> 404 Response

```json
{
  "error": "Database not found"
}
```

<h3 id="unlink-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Database unlinked|None|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Database not found|Inline|

<h3 id="unlink-database-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Update Database

<a id="opIdupdateDatabase"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/databases/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "personal_access_token": "string",
    "git_user_name": "string",
    "git_user_email": "string",
    "sync_strategy": 0,
    "auto_pull": true,
    "local_ops_enabled": true,
    "conflict_strategy": "override"
  }'
```

`PATCH /databases/{id}`

Partial update. Only the provided fields are changed. Unknown fields
are silently ignored.

Field dependencies:
- `personal_access_token` requires `git_user_name` and `git_user_email`
- `local_ops_enabled` requires `personal_access_token`
- `conflict_strategy` is only accepted without a PAT, or with PAT + `local_ops_enabled`


> Body parameter

```json
{
  "name": "string",
  "personal_access_token": "string",
  "git_user_name": "string",
  "git_user_email": "string",
  "sync_strategy": 0,
  "auto_pull": true,
  "local_ops_enabled": true,
  "conflict_strategy": "override"
}
```

<h3 id="update-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Database instance ID|
|body|body|object|true|none|
|» name|body|string|false|Display name (must be unique)|
|» personal_access_token|body|string|false|GitHub PAT for private repos and push access|
|» git_user_name|body|string|false|Required when personal_access_token is set|
|» git_user_email|body|string|false|Required when personal_access_token is set|
|» sync_strategy|body|integer|false|Auto-sync interval in minutes (0 = manual only)|
|» auto_pull|body|boolean|false|Whether to automatically pull updates|
|» local_ops_enabled|body|boolean|false|Force writes to local user ops even with a PAT (requires personal_access_token)|
|» conflict_strategy|body|string|false|How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» conflict_strategy|override|
|» conflict_strategy|align|
|» conflict_strategy|ask|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "repository_url": "string",
  "sync_strategy": 0,
  "auto_pull": 0,
  "enabled": 0,
  "is_private": 0,
  "local_ops_enabled": 0,
  "git_user_name": "string",
  "git_user_email": "string",
  "conflict_strategy": "override",
  "last_synced_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "hasPat": true
}
```

> 400 Response

```json
{
  "error": "No updatable fields provided"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Databases"
}
```

> 404 Response

```json
{
  "error": "Database not found"
}
```

> 409 Response

```json
{
  "error": "A database with this name already exists"
}
```

<h3 id="update-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database updated|Inline|
|400|Bad Request|Validation error or empty body|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Database not found|Inline|
|409|Conflict|A database with this name already exists|Inline|

<h3 id="update-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Database instance ID|
|uuid|string(uuid)|true|none|Unique identifier|
|name|string|true|none|Display name|
|repository_url|string|true|none|GitHub repository URL|
|sync_strategy|integer|true|none|Auto-sync interval in minutes (0 = manual only)|
|auto_pull|integer|true|none|Whether to automatically pull updates (0 or 1)|
|enabled|integer|true|none|Whether the database is active (0 or 1)|
|is_private|integer|true|none|Whether the repository is private (0 or 1)|
|local_ops_enabled|integer|true|none|Whether local ops editing is enabled (0 or 1)|
|git_user_name|string \| null|false|none|Git user name for commits|
|git_user_email|string \| null|false|none|Git user email for commits|
|conflict_strategy|string|true|none|How to handle conflicts between local tweaks and upstream updates|
|last_synced_at|string \| null|false|none|Last successful sync timestamp|
|created_at|string|true|none|Creation timestamp|
|updated_at|string|true|none|Last update timestamp|
|hasPat|boolean|true|none|Whether a personal access token is configured|

#### Enumerated Values

|Property|Value|
|---|---|
|conflict_strategy|override|
|conflict_strategy|align|
|conflict_strategy|ask|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Trigger Sync

<a id="opIdsyncDatabase"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/databases/0/sync \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`POST /databases/{id}/sync`

Async. Enqueues a `pcd.sync` job and returns 202 with the job ID.
Poll `GET /api/v1/jobs/{jobId}` for completion.


<h3 id="trigger-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Database instance ID|

> Example responses

> 202 Response

```json
{
  "jobId": 42
}
```

> 400 Response

```json
{
  "error": "Database is disabled"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have write access to Databases"
}
```

> 404 Response

```json
{
  "error": "Database not found"
}
```

<h3 id="trigger-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Sync job enqueued|Inline|
|400|Bad Request|Database is disabled|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Database not found|Inline|

<h3 id="trigger-sync-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|integer|true|none|Job queue ID to poll via GET /api/v1/jobs/{jobId}|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

<h1 id="profilarr-api-announcements">Announcements</h1>

In-app announcements fed from the bulletin repo

## List Announcements

<a id="opIdlistAnnouncements"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/announcements \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /announcements`

Visible announcements only: withdrawn, expired, and version-incompatible
entries are filtered out server-side. Bodies are not included; use the
detail endpoint to fetch one.


> Example responses

> 200 Response

```json
[
  {
    "id": "01HXYZ0000000000000000000A",
    "title": "API v1 migration landing in 2.4",
    "severity": "warning",
    "publishedAt": "2026-04-10T10:00:00Z",
    "expiresAt": null,
    "minVersion": "2.0.0",
    "maxVersion": null,
    "link": "https://github.com/Dictionarry-Hub/profilarr/discussions/999",
    "readAt": null
  }
]
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Announcements"
}
```

<h3 id="list-announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Visible announcements, newest first.|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|

<h3 id="list-announcements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» id|string|true|none|ULID, immutable once published.|
|» title|string|true|none|none|
|» severity|string|true|none|Severity level. `critical` is reserved for genuine break-glass messages.|
|» publishedAt|string(date-time)|true|none|ISO-8601 UTC. Drives sort order.|
|» expiresAt|string(date-time) \| null|true|none|Null = no expiry.|
|» minVersion|string \| null|true|none|Minimum running version for this announcement to apply.|
|» maxVersion|string \| null|true|none|Maximum running version for this announcement to apply.|
|» link|string(uri) \| null|true|none|Optional external "Read more" URL.|
|» readAt|string(date-time) \| null|true|none|When the announcement was opened in the app. Null = unread.|

#### Enumerated Values

|Property|Value|
|---|---|
|» severity|info|
|» severity|warning|
|» severity|critical|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

## Get Announcement

<a id="opIdgetAnnouncement"></a>

> Code samples

```bash
curl http://localhost:6868/api/v1/announcements/string \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /announcements/{id}`

Returns the full announcement including its markdown body. The body
is lazy-fetched from the bulletin repo on first call and cached
locally; subsequent calls read from cache.

404 is returned for unknown ids and for ids that have not yet been
ingested by the fetch job (e.g. calling the API between a new
bulletin PR merging and the next scheduled reconcile).


<h3 id="get-announcement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ULID of the announcement.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "severity": "info",
  "publishedAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "minVersion": "string",
  "maxVersion": "string",
  "link": "http://example.com",
  "readAt": "1970-01-01T00:00:00Z",
  "body": "string"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "API key does not have read access to Announcements"
}
```

> 404 Response

```json
{
  "error": "Announcement not found"
}
```

<h3 id="get-announcement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Announcement detail with body.|Inline|
|401|Unauthorized|Not authenticated|Inline|
|403|Forbidden|API key does not have the required permission|Inline|
|404|Not Found|Announcement not found.|Inline|

<h3 id="get-announcement-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|severity|string|true|none|Severity level. `critical` is reserved for genuine break-glass messages.|
|publishedAt|string(date-time)|true|none|none|
|expiresAt|string(date-time) \| null|true|none|none|
|minVersion|string \| null|true|none|none|
|maxVersion|string \| null|true|none|none|
|link|string(uri) \| null|true|none|none|
|readAt|string(date-time) \| null|true|none|none|
|body|string \| null|true|none|Raw markdown body. Lazy-fetched from the bulletin on first call.<br>May be null briefly if the lazy fetch fails; subsequent calls retry.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|info|
|severity|warning|
|severity|critical|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKey, session
</aside>

# Schemas

<h2 id="tocS_HealthStatus">HealthStatus</h2>
<!-- backwards compatibility -->
<a id="schemahealthstatus"></a>
<a id="schema_HealthStatus"></a>
<a id="tocShealthstatus"></a>
<a id="tocshealthstatus"></a>

```json
"healthy"
```

Overall health status

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "Unauthorized"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|true|none|Error message|

<h2 id="tocS_HealthCheckResponse">HealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckresponse"></a>
<a id="schema_HealthCheckResponse"></a>
<a id="tocShealthcheckresponse"></a>
<a id="tocshealthcheckresponse"></a>

```json
{
  "status": "healthy",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Overall health status|
|timestamp|string(date-time)|true|none|Current server time|

#### Enumerated Values

|Property|Value|
|---|---|
|status|healthy|
|status|degraded|
|status|unhealthy|

<h2 id="tocS_StatusResponse">StatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatusresponse"></a>
<a id="schema_StatusResponse"></a>
<a id="tocSstatusresponse"></a>
<a id="tocsstatusresponse"></a>

```json
{
  "version": "string",
  "uptime": 0,
  "timezone": "string",
  "databases": [
    {
      "id": 0,
      "name": "string",
      "enabled": true,
      "lastSyncedAt": "1970-01-01T00:00:00Z",
      "syncStrategy": "manual",
      "counts": {
        "customFormats": 0,
        "qualityProfiles": 0,
        "regularExpressions": 0,
        "delayProfiles": 0
      }
    }
  ],
  "arrs": [
    {
      "id": 0,
      "name": "string",
      "type": "radarr",
      "enabled": true,
      "sync": {
        "qualityProfiles": {
          "count": 0,
          "status": "string",
          "lastSyncedAt": "1970-01-01T00:00:00Z"
        },
        "delayProfiles": {
          "configured": true,
          "status": "string",
          "lastSyncedAt": "1970-01-01T00:00:00Z"
        },
        "mediaManagement": {
          "configured": true,
          "status": "string",
          "lastSyncedAt": "1970-01-01T00:00:00Z"
        }
      },
      "drift": {
        "lastCheckedAt": "1970-01-01T00:00:00Z",
        "drifted": true,
        "details": {
          "qualityProfiles": 0,
          "delayProfiles": 0,
          "mediaManagement": 0
        }
      }
    }
  ],
  "jobs": {
    "active": 0,
    "queued": 0,
    "nextRunAt": "1970-01-01T00:00:00Z"
  },
  "backups": {
    "enabled": true,
    "lastBackupAt": "1970-01-01T00:00:00Z"
  },
  "announcements": {
    "unread": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Application version|
|uptime|integer|true|none|Server uptime in seconds|
|timezone|string|true|none|Server timezone (IANA, e.g. "America/New_York")|
|databases|[object]|true|none|none|
|arrs|[object]|true|none|none|
|jobs|object|true|none|none|
|backups|object|true|none|none|
|announcements|object|true|none|none|

<h2 id="tocS_StatusDatabase">StatusDatabase</h2>
<!-- backwards compatibility -->
<a id="schemastatusdatabase"></a>
<a id="schema_StatusDatabase"></a>
<a id="tocSstatusdatabase"></a>
<a id="tocsstatusdatabase"></a>

```json
{
  "id": 0,
  "name": "string",
  "enabled": true,
  "lastSyncedAt": "1970-01-01T00:00:00Z",
  "syncStrategy": "manual",
  "counts": {
    "customFormats": 0,
    "qualityProfiles": 0,
    "regularExpressions": 0,
    "delayProfiles": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Database instance ID|
|name|string|true|none|Display name|
|enabled|boolean|true|none|Whether the database is active|
|lastSyncedAt|string(date-time) \| null|true|none|Last successful sync check timestamp|
|syncStrategy|string|true|none|Sync strategy|
|counts|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|syncStrategy|manual|
|syncStrategy|auto|

<h2 id="tocS_StatusDatabaseCounts">StatusDatabaseCounts</h2>
<!-- backwards compatibility -->
<a id="schemastatusdatabasecounts"></a>
<a id="schema_StatusDatabaseCounts"></a>
<a id="tocSstatusdatabasecounts"></a>
<a id="tocsstatusdatabasecounts"></a>

```json
{
  "customFormats": 0,
  "qualityProfiles": 0,
  "regularExpressions": 0,
  "delayProfiles": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customFormats|integer|true|none|Number of custom formats|
|qualityProfiles|integer|true|none|Number of quality profiles|
|regularExpressions|integer|true|none|Number of regular expressions|
|delayProfiles|integer|true|none|Number of delay profiles|

<h2 id="tocS_StatusArr">StatusArr</h2>
<!-- backwards compatibility -->
<a id="schemastatusarr"></a>
<a id="schema_StatusArr"></a>
<a id="tocSstatusarr"></a>
<a id="tocsstatusarr"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": "radarr",
  "enabled": true,
  "sync": {
    "qualityProfiles": {
      "count": 0,
      "status": "string",
      "lastSyncedAt": "1970-01-01T00:00:00Z"
    },
    "delayProfiles": {
      "configured": true,
      "status": "string",
      "lastSyncedAt": "1970-01-01T00:00:00Z"
    },
    "mediaManagement": {
      "configured": true,
      "status": "string",
      "lastSyncedAt": "1970-01-01T00:00:00Z"
    }
  },
  "drift": {
    "lastCheckedAt": "1970-01-01T00:00:00Z",
    "drifted": true,
    "details": {
      "qualityProfiles": 0,
      "delayProfiles": 0,
      "mediaManagement": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Arr instance ID|
|name|string|true|none|Display name|
|type|string|true|none|Arr application type|
|enabled|boolean|true|none|Whether the instance is active|
|sync|object|true|none|none|
|drift|object \| null|true|none|Drift detection result (null until implemented)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|radarr|
|type|sonarr|

<h2 id="tocS_StatusArrSync">StatusArrSync</h2>
<!-- backwards compatibility -->
<a id="schemastatusarrsync"></a>
<a id="schema_StatusArrSync"></a>
<a id="tocSstatusarrsync"></a>
<a id="tocsstatusarrsync"></a>

```json
{
  "qualityProfiles": {
    "count": 0,
    "status": "string",
    "lastSyncedAt": "1970-01-01T00:00:00Z"
  },
  "delayProfiles": {
    "configured": true,
    "status": "string",
    "lastSyncedAt": "1970-01-01T00:00:00Z"
  },
  "mediaManagement": {
    "configured": true,
    "status": "string",
    "lastSyncedAt": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|qualityProfiles|object|true|none|none|
|delayProfiles|object|true|none|none|
|mediaManagement|object|true|none|none|

<h2 id="tocS_StatusArrSyncQualityProfiles">StatusArrSyncQualityProfiles</h2>
<!-- backwards compatibility -->
<a id="schemastatusarrsyncqualityprofiles"></a>
<a id="schema_StatusArrSyncQualityProfiles"></a>
<a id="tocSstatusarrsyncqualityprofiles"></a>
<a id="tocsstatusarrsyncqualityprofiles"></a>

```json
{
  "count": 0,
  "status": "string",
  "lastSyncedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|Number of synced quality profiles|
|status|string|true|none|Sync status (idle, pending, in_progress, failed)|
|lastSyncedAt|string(date-time) \| null|true|none|Last successful sync timestamp|

<h2 id="tocS_StatusArrSyncSection">StatusArrSyncSection</h2>
<!-- backwards compatibility -->
<a id="schemastatusarrsyncsection"></a>
<a id="schema_StatusArrSyncSection"></a>
<a id="tocSstatusarrsyncsection"></a>
<a id="tocsstatusarrsyncsection"></a>

```json
{
  "configured": true,
  "status": "string",
  "lastSyncedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configured|boolean|true|none|Whether this sync section has been configured|
|status|string|true|none|Sync status (idle, pending, in_progress, failed)|
|lastSyncedAt|string(date-time) \| null|true|none|Last successful sync timestamp|

<h2 id="tocS_StatusArrDrift">StatusArrDrift</h2>
<!-- backwards compatibility -->
<a id="schemastatusarrdrift"></a>
<a id="schema_StatusArrDrift"></a>
<a id="tocSstatusarrdrift"></a>
<a id="tocsstatusarrdrift"></a>

```json
{
  "lastCheckedAt": "1970-01-01T00:00:00Z",
  "drifted": true,
  "details": {
    "qualityProfiles": 0,
    "delayProfiles": 0,
    "mediaManagement": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastCheckedAt|string(date-time)|true|none|When drift was last checked|
|drifted|boolean|true|none|Whether any section has drifted|
|details|object|true|none|none|

<h2 id="tocS_StatusJobs">StatusJobs</h2>
<!-- backwards compatibility -->
<a id="schemastatusjobs"></a>
<a id="schema_StatusJobs"></a>
<a id="tocSstatusjobs"></a>
<a id="tocsstatusjobs"></a>

```json
{
  "active": 0,
  "queued": 0,
  "nextRunAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|integer|true|none|Number of currently running jobs|
|queued|integer|true|none|Number of queued jobs|
|nextRunAt|string(date-time) \| null|true|none|Earliest scheduled job run time|

<h2 id="tocS_StatusBackups">StatusBackups</h2>
<!-- backwards compatibility -->
<a id="schemastatusbackups"></a>
<a id="schema_StatusBackups"></a>
<a id="tocSstatusbackups"></a>
<a id="tocsstatusbackups"></a>

```json
{
  "enabled": true,
  "lastBackupAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether automatic backups are enabled|
|lastBackupAt|string(date-time) \| null|true|none|Timestamp of last backup|

<h2 id="tocS_StatusAnnouncements">StatusAnnouncements</h2>
<!-- backwards compatibility -->
<a id="schemastatusannouncements"></a>
<a id="schema_StatusAnnouncements"></a>
<a id="tocSstatusannouncements"></a>
<a id="tocsstatusannouncements"></a>

```json
{
  "unread": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unread|integer|true|none|Number of unread, visible announcements. Visibility honours<br>`withdrawn`, `expires_at`, and the running build's version bounds<br>(`min_version` / `max_version`).<br>|

<h2 id="tocS_AnnouncementSeverity">AnnouncementSeverity</h2>
<!-- backwards compatibility -->
<a id="schemaannouncementseverity"></a>
<a id="schema_AnnouncementSeverity"></a>
<a id="tocSannouncementseverity"></a>
<a id="tocsannouncementseverity"></a>

```json
"info"
```

Severity level. `critical` is reserved for genuine break-glass messages.

<h2 id="tocS_AnnouncementSummary">AnnouncementSummary</h2>
<!-- backwards compatibility -->
<a id="schemaannouncementsummary"></a>
<a id="schema_AnnouncementSummary"></a>
<a id="tocSannouncementsummary"></a>
<a id="tocsannouncementsummary"></a>

```json
{
  "id": "string",
  "title": "string",
  "severity": "info",
  "publishedAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "minVersion": "string",
  "maxVersion": "string",
  "link": "http://example.com",
  "readAt": "1970-01-01T00:00:00Z"
}
```

Announcement without body. Returned by the list endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ULID, immutable once published.|
|title|string|true|none|none|
|severity|string|true|none|Severity level. `critical` is reserved for genuine break-glass messages.|
|publishedAt|string(date-time)|true|none|ISO-8601 UTC. Drives sort order.|
|expiresAt|string(date-time) \| null|true|none|Null = no expiry.|
|minVersion|string \| null|true|none|Minimum running version for this announcement to apply.|
|maxVersion|string \| null|true|none|Maximum running version for this announcement to apply.|
|link|string(uri) \| null|true|none|Optional external "Read more" URL.|
|readAt|string(date-time) \| null|true|none|When the announcement was opened in the app. Null = unread.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|info|
|severity|warning|
|severity|critical|

<h2 id="tocS_AnnouncementDetail">AnnouncementDetail</h2>
<!-- backwards compatibility -->
<a id="schemaannouncementdetail"></a>
<a id="schema_AnnouncementDetail"></a>
<a id="tocSannouncementdetail"></a>
<a id="tocsannouncementdetail"></a>

```json
{
  "id": "string",
  "title": "string",
  "severity": "info",
  "publishedAt": "1970-01-01T00:00:00Z",
  "expiresAt": "1970-01-01T00:00:00Z",
  "minVersion": "string",
  "maxVersion": "string",
  "link": "http://example.com",
  "readAt": "1970-01-01T00:00:00Z",
  "body": "string"
}
```

Announcement with the full markdown body. Returned by the detail endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|severity|string|true|none|Severity level. `critical` is reserved for genuine break-glass messages.|
|publishedAt|string(date-time)|true|none|none|
|expiresAt|string(date-time) \| null|true|none|none|
|minVersion|string \| null|true|none|none|
|maxVersion|string \| null|true|none|none|
|link|string(uri) \| null|true|none|none|
|readAt|string(date-time) \| null|true|none|none|
|body|string \| null|true|none|Raw markdown body. Lazy-fetched from the bulletin on first call.<br>May be null briefly if the lazy fetch fails; subsequent calls retry.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|info|
|severity|warning|
|severity|critical|

<h2 id="tocS_ArrType">ArrType</h2>
<!-- backwards compatibility -->
<a id="schemaarrtype"></a>
<a id="schema_ArrType"></a>
<a id="tocSarrtype"></a>
<a id="tocsarrtype"></a>

```json
"radarr"
```

Type of Arr instance

<h2 id="tocS_CustomFormatRef">CustomFormatRef</h2>
<!-- backwards compatibility -->
<a id="schemacustomformatref"></a>
<a id="schema_CustomFormatRef"></a>
<a id="tocScustomformatref"></a>
<a id="tocscustomformatref"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Custom format ID|
|name|string|true|none|Custom format name|

<h2 id="tocS_ScoreBreakdownItem">ScoreBreakdownItem</h2>
<!-- backwards compatibility -->
<a id="schemascorebreakdownitem"></a>
<a id="schema_ScoreBreakdownItem"></a>
<a id="tocSscorebreakdownitem"></a>
<a id="tocsscorebreakdownitem"></a>

```json
{
  "name": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Custom format name|
|score|integer|true|none|Score assigned by the quality profile|

<h2 id="tocS_ArrInstance">ArrInstance</h2>
<!-- backwards compatibility -->
<a id="schemaarrinstance"></a>
<a id="schema_ArrInstance"></a>
<a id="tocSarrinstance"></a>
<a id="tocsarrinstance"></a>

```json
{
  "id": 0,
  "name": "string",
  "type": "radarr",
  "url": "string",
  "external_url": "https://radarr.example.com",
  "tags": "string",
  "enabled": 0,
  "library_refresh_interval": 0,
  "library_last_refreshed_at": "string",
  "detected_version": "5.0.0.2569",
  "detected_api": "v5",
  "detected_at": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Instance ID|
|name|string|true|none|Display name|
|type|string|true|none|Type of Arr instance|
|url|string|true|none|Instance URL used by Profilarr's backend for API calls|
|external_url|string \| null|false|none|Optional external/browser-facing URL. When set, the UI uses this for<br>"Open in Radarr/Sonarr" browser links while Profilarr's backend continues<br>to call the instance using `url`. Useful for reverse-proxied deployments<br>where the internal and external hostnames differ.<br>|
|tags|string \| null|false|none|JSON array of tags|
|enabled|integer|true|none|Whether the instance is active (0 or 1)|
|library_refresh_interval|integer|true|none|Library cache refresh interval in minutes (0 = manual)|
|library_last_refreshed_at|string \| null|false|none|Last library refresh timestamp|
|detected_version|string \| null|false|none|App version the instance reported on the last successful version probe,<br>e.g. `5.0.0.2569`. Null until Profilarr has probed it.<br>|
|detected_api|string \| null|false|none|API generation the instance's unversioned `/api` route reported as<br>current on the last probe, e.g. `v3` or `v5`. Null when the instance<br>has no such route or has not been probed.<br>|
|detected_at|string \| null|false|none|When the last successful version probe ran|
|created_at|string|true|none|Creation timestamp|
|updated_at|string|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|type|radarr|
|type|sonarr|

<h2 id="tocS_DatabaseInstance">DatabaseInstance</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseinstance"></a>
<a id="schema_DatabaseInstance"></a>
<a id="tocSdatabaseinstance"></a>
<a id="tocsdatabaseinstance"></a>

```json
{
  "id": 0,
  "uuid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "repository_url": "string",
  "sync_strategy": 0,
  "auto_pull": 0,
  "enabled": 0,
  "is_private": 0,
  "local_ops_enabled": 0,
  "git_user_name": "string",
  "git_user_email": "string",
  "conflict_strategy": "override",
  "last_synced_at": "string",
  "created_at": "string",
  "updated_at": "string",
  "hasPat": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Database instance ID|
|uuid|string(uuid)|true|none|Unique identifier|
|name|string|true|none|Display name|
|repository_url|string|true|none|GitHub repository URL|
|sync_strategy|integer|true|none|Auto-sync interval in minutes (0 = manual only)|
|auto_pull|integer|true|none|Whether to automatically pull updates (0 or 1)|
|enabled|integer|true|none|Whether the database is active (0 or 1)|
|is_private|integer|true|none|Whether the repository is private (0 or 1)|
|local_ops_enabled|integer|true|none|Whether local ops editing is enabled (0 or 1)|
|git_user_name|string \| null|false|none|Git user name for commits|
|git_user_email|string \| null|false|none|Git user email for commits|
|conflict_strategy|string|true|none|How to handle conflicts between local tweaks and upstream updates|
|last_synced_at|string \| null|false|none|Last successful sync timestamp|
|created_at|string|true|none|Creation timestamp|
|updated_at|string|true|none|Last update timestamp|
|hasPat|boolean|true|none|Whether a personal access token is configured|

#### Enumerated Values

|Property|Value|
|---|---|
|conflict_strategy|override|
|conflict_strategy|align|
|conflict_strategy|ask|

<h2 id="tocS_CreateDatabaseInput">CreateDatabaseInput</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabaseinput"></a>
<a id="schema_CreateDatabaseInput"></a>
<a id="tocScreatedatabaseinput"></a>
<a id="tocscreatedatabaseinput"></a>

```json
{
  "name": "string",
  "repository_url": "string",
  "branch": "string",
  "personal_access_token": "string",
  "git_user_name": "string",
  "git_user_email": "string",
  "sync_strategy": 0,
  "auto_pull": false,
  "local_ops_enabled": false,
  "conflict_strategy": "override"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Display name (must be unique)|
|repository_url|string|true|none|GitHub repository URL|
|branch|string|false|none|Git branch to clone (defaults to remote's default branch)|
|personal_access_token|string|false|none|GitHub PAT for private repos and push access|
|git_user_name|string|false|none|Required when personal_access_token is set|
|git_user_email|string|false|none|Required when personal_access_token is set|
|sync_strategy|integer|false|none|Auto-sync interval in minutes (0 = manual only)|
|auto_pull|boolean|false|none|Whether to automatically pull updates|
|local_ops_enabled|boolean|false|none|Force writes to local user ops even with a PAT (requires personal_access_token)|
|conflict_strategy|string|false|none|How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)|

#### Enumerated Values

|Property|Value|
|---|---|
|conflict_strategy|override|
|conflict_strategy|align|
|conflict_strategy|ask|

<h2 id="tocS_UpdateDatabaseInput">UpdateDatabaseInput</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabaseinput"></a>
<a id="schema_UpdateDatabaseInput"></a>
<a id="tocSupdatedatabaseinput"></a>
<a id="tocsupdatedatabaseinput"></a>

```json
{
  "name": "string",
  "personal_access_token": "string",
  "git_user_name": "string",
  "git_user_email": "string",
  "sync_strategy": 0,
  "auto_pull": true,
  "local_ops_enabled": true,
  "conflict_strategy": "override"
}
```

All fields are optional. Unknown fields are silently ignored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Display name (must be unique)|
|personal_access_token|string|false|none|GitHub PAT for private repos and push access|
|git_user_name|string|false|none|Required when personal_access_token is set|
|git_user_email|string|false|none|Required when personal_access_token is set|
|sync_strategy|integer|false|none|Auto-sync interval in minutes (0 = manual only)|
|auto_pull|boolean|false|none|Whether to automatically pull updates|
|local_ops_enabled|boolean|false|none|Force writes to local user ops even with a PAT (requires personal_access_token)|
|conflict_strategy|string|false|none|How to handle conflicts (only valid without a PAT, or with PAT + local_ops_enabled)|

#### Enumerated Values

|Property|Value|
|---|---|
|conflict_strategy|override|
|conflict_strategy|align|
|conflict_strategy|ask|

<h2 id="tocS_SyncTriggerResponse">SyncTriggerResponse</h2>
<!-- backwards compatibility -->
<a id="schemasynctriggerresponse"></a>
<a id="schema_SyncTriggerResponse"></a>
<a id="tocSsynctriggerresponse"></a>
<a id="tocssynctriggerresponse"></a>

```json
{
  "jobId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|integer|true|none|Job queue ID to poll via GET /api/v1/jobs/{jobId}|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"queued"
```

Current state of the job in the queue

<h2 id="tocS_JobSource">JobSource</h2>
<!-- backwards compatibility -->
<a id="schemajobsource"></a>
<a id="schema_JobSource"></a>
<a id="tocSjobsource"></a>
<a id="tocsjobsource"></a>

```json
"manual"
```

How the job was triggered

<h2 id="tocS_JobRunResult">JobRunResult</h2>
<!-- backwards compatibility -->
<a id="schemajobrunresult"></a>
<a id="schema_JobRunResult"></a>
<a id="tocSjobrunresult"></a>
<a id="tocsjobrunresult"></a>

```json
{
  "status": "success",
  "output": "string",
  "error": "string",
  "durationMs": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Outcome of the job execution|
|output|string \| null|true|none|Human-readable output from the handler|
|error|string \| null|true|none|Error message if the job failed|
|durationMs|integer|true|none|Execution time in milliseconds|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failure|
|status|skipped|
|status|cancelled|

<h2 id="tocS_JobResponse">JobResponse</h2>
<!-- backwards compatibility -->
<a id="schemajobresponse"></a>
<a id="schema_JobResponse"></a>
<a id="tocSjobresponse"></a>
<a id="tocsjobresponse"></a>

```json
{
  "id": 0,
  "jobType": "string",
  "status": "queued",
  "source": "manual",
  "createdAt": "string",
  "startedAt": "string",
  "finishedAt": "string",
  "result": {
    "status": "success",
    "output": "string",
    "error": "string",
    "durationMs": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Job queue ID|
|jobType|string|true|none|Job type identifier (e.g. backup.create, arr.sync)|
|status|string|true|none|Current state of the job in the queue|
|source|string|true|none|How the job was triggered|
|createdAt|string|true|none|When the job was enqueued|
|startedAt|string \| null|true|none|When execution started (null if still queued)|
|finishedAt|string \| null|true|none|When execution finished (null if not yet complete)|
|result|object \| null|true|none|Latest run result, or null if the job has not executed yet|

#### Enumerated Values

|Property|Value|
|---|---|
|status|queued|
|status|running|
|status|success|
|status|failed|
|status|cancelled|
|source|manual|
|source|schedule|
|source|system|

<h2 id="tocS_BackupFile">BackupFile</h2>
<!-- backwards compatibility -->
<a id="schemabackupfile"></a>
<a id="schema_BackupFile"></a>
<a id="tocSbackupfile"></a>
<a id="tocsbackupfile"></a>

```json
{
  "filename": "backup-2026-03-15-100005.tar.gz",
  "created": "1970-01-01T00:00:00Z",
  "size": 0,
  "sizeFormatted": "12.34 MB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|true|none|Backup archive filename|
|created|string(date-time)|true|none|File modification time (when the backup was created)|
|size|integer|true|none|File size in bytes|
|sizeFormatted|string|true|none|Human-readable file size|

<h2 id="tocS_BackupCreateResponse">BackupCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackupcreateresponse"></a>
<a id="schema_BackupCreateResponse"></a>
<a id="tocSbackupcreateresponse"></a>
<a id="tocsbackupcreateresponse"></a>

```json
{
  "jobId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobId|integer|true|none|Job queue ID. Poll GET /api/v1/jobs/{jobId} for status.|

<h2 id="tocS_BackupUploadResponse">BackupUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemabackupuploadresponse"></a>
<a id="schema_BackupUploadResponse"></a>
<a id="tocSbackupuploadresponse"></a>
<a id="tocsbackupuploadresponse"></a>

```json
{
  "filename": "string",
  "size": 0,
  "sizeFormatted": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|true|none|Stored filename (may differ from upload name)|
|size|integer|true|none|File size in bytes|
|sizeFormatted|string|true|none|Human-readable file size|

<h2 id="tocS_BackupSettings">BackupSettings</h2>
<!-- backwards compatibility -->
<a id="schemabackupsettings"></a>
<a id="schema_BackupSettings"></a>
<a id="tocSbackupsettings"></a>
<a id="tocsbackupsettings"></a>

```json
{
  "schedule": "hourly",
  "retentionDays": 1,
  "enabled": true,
  "includeDatabase": true,
  "compressionEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|true|none|How often automatic backups run|
|retentionDays|integer|true|none|Days to keep backups before cleanup deletes them|
|enabled|boolean|true|none|Whether automatic backups are enabled|
|includeDatabase|boolean|true|none|Whether to include the database in backups|
|compressionEnabled|boolean|true|none|Whether backup compression is enabled|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|hourly|
|schedule|daily|
|schedule|weekly|
|schedule|monthly|

<h2 id="tocS_BackupSettingsUpdate">BackupSettingsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemabackupsettingsupdate"></a>
<a id="schema_BackupSettingsUpdate"></a>
<a id="tocSbackupsettingsupdate"></a>
<a id="tocsbackupsettingsupdate"></a>

```json
{
  "schedule": "hourly",
  "retentionDays": 1,
  "enabled": true
}
```

All fields are optional. Only provided fields are updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|false|none|none|
|retentionDays|integer|false|none|none|
|enabled|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|hourly|
|schedule|daily|
|schedule|weekly|
|schedule|monthly|
