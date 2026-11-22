<h1 id="e2b-api">E2B API v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.e2b.app">https://api.e2b.app</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: bearer

* API Key (AuthProviderTeamAuth)
    - Parameter Name: **X-Team-ID**, in: header.

* API Key (AdminApiKeyAuth)
    - Parameter Name: **X-Admin-Token**, in: header.

- HTTP Authentication, scheme: bearer

* API Key (AdminTeamAuth)
    - Parameter Name: **X-Team-ID**, in: header.

<h1 id="e2b-api-templates">templates</h1>

## Create template (v3)

> Code samples

```bash
curl https://api.e2b.dev/v3/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "tags": [
      "string"
    ],
    "alias": "string",
    "teamID": "string",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "minFreeDiskMb": 0
  }'
```

`POST /v3/templates`

Create a new template.

> Body parameter

```json
{
  "name": "string",
  "tags": [
    "string"
  ],
  "alias": "string",
  "teamID": "string",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "minFreeDiskMb": 0
}
```

<h3 id="create-template-v3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Optional team-scoped key for retrying the request. Use 1 to 255 lowercase ASCII letters,<br>digits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. The HTTP method, path, query,<br>and request content identify the request. When idempotency is enabled, a matching retry of<br>a completed request replays its status and body, including the IDs of any resources it<br>created, without repeating the operation. A failure explicitly classified as safe to retry<br>(Should-Retry: true) permits a fresh attempt with the same key and request. Only one<br>attempt can run at a time. A different request returns 409 with error_code<br>idempotency_request_mismatch. A matching request whose original has no recorded response<br>yet and is within its expected response window returns 409 with error_code<br>idempotency_in_progress. A matching request whose original has no recorded response and<br>whose expected response deadline has passed or is unknown returns 422 with error_code<br>idempotency_outcome_unknown. These conflicts and unknown outcomes do not execute the<br>request again. If the key's record is unavailable or idempotency is misconfigured, the<br>request returns 503; Should-Retry tells whether to retry with the same key. After the<br>retention period expires, the key can start a new operation.<br>|
|body|body|[TemplateBuildRequestV3](#schematemplatebuildrequestv3)|true|none|
|» name|body|string|false|Name of the template. Can include a tag with colon separator (e.g. "my-template" or "my-template:v1"). If tag is included, it will be treated as if the tag was provided in the tags array.|
|» tags|body|[string]|false|Tags to assign to the template build|
|» alias|body|string|false|**Deprecated.** Alias of the template. Deprecated, use name instead.|
|» teamID|body|string|false|**Deprecated.** Identifier of the team, as its UUID or its public project ID (prj_)|
|» cpuCount|body|[CPUCount](#schemacpucount)|false|CPU cores for the sandbox|
|» maxCpuCount|body|object|false|Maximum CPU count the template's sandboxes can be resized to; makes the template resizable. Must be at least cpuCount.|
|» memoryMB|body|[MemoryMB](#schemamemorymb)|false|Memory for the sandbox in MiB|
|» minFreeDiskMb|body|[MinFreeDiskMb](#schemaminfreediskmb)|false|Requested minimum free space after the template's build steps, in MiB. Omit to use the team's default. Set to 0 to request no minimum free-disk growth. The filesystem is never shrunk, including inherited or already-larger filesystems. Growth is best effort, so filesystem metadata can leave the available space slightly below the requested minimum.|

> Example responses

> 202 Response

```json
{
  "templateID": "string",
  "buildID": "string",
  "public": true,
  "names": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "aliases": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-template-v3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The build was requested successfully|[TemplateRequestResponseV3](#schematemplaterequestresponsev3)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable request|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|Should-Retry|boolean||none|
|401|Should-Retry|boolean||none|
|403|Should-Retry|boolean||none|
|409|Should-Retry|boolean||none|
|422|Should-Retry|boolean||none|
|429|Should-Retry|boolean||none|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|
|500|Should-Retry|boolean||none|
|503|Should-Retry|boolean||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List templates (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/templates \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /v2/templates`

List all templates

<h3 id="list-templates-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|query|string|false|none|
|nextToken|query|string|false|Cursor to start the list from|
|limit|query|integer(int32)|false|Maximum number of items to return per page|

> Example responses

> 200 Response

```json
[
  {
    "templateID": "string",
    "buildID": "string",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "diskSizeMB": 0,
    "public": true,
    "aliases": [
      "string"
    ],
    "names": [
      "string"
    ],
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": null
    },
    "lastSpawnedAt": "1970-01-01T00:00:00Z",
    "spawnCount": 0,
    "buildCount": 0,
    "envdVersion": "string",
    "buildStatus": "building",
    "isDefault": true,
    "description": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-templates-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all templates|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-templates-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Template](#schematemplate)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Template build file upload URL

> Code samples

```bash
curl https://api.e2b.dev/templates/string/files/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/files/{hash}`

Get an upload link for a tar file containing build layer files

<h3 id="template-build-file-upload-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|hash|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "present": true,
  "url": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="template-build-file-upload-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The upload link where to upload the tar file|[TemplateBuildFileUpload](#schematemplatebuildfileupload)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List templates

> Code samples

```bash
curl https://api.e2b.dev/templates \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates`

<aside class="warning">
This operation is deprecated
</aside>

List all templates. Returns 400 when the team has more than 5000 templates; use /v2/templates to page through them.

<h3 id="list-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "templateID": "string",
    "buildID": "string",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "diskSizeMB": 0,
    "public": true,
    "aliases": [
      "string"
    ],
    "names": [
      "string"
    ],
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": null
    },
    "lastSpawnedAt": "1970-01-01T00:00:00Z",
    "spawnCount": 0,
    "buildCount": 0,
    "envdVersion": "string",
    "buildStatus": "building",
    "isDefault": true,
    "description": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all templates|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Template](#schematemplate)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List default templates

> Code samples

```bash
curl https://api.e2b.dev/default-templates \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /default-templates`

Lists the platform's default templates, ordered by template ID. Deleted templates are left out. Templates that are not public are listed only to their own team and to admin callers. The build, resources and envd version are those of the newest ready build tagged `default`, the one a sandbox started from the template runs, and are zero or empty when there is none; `buildStatus` describes the newest build tagged `default` in any state. Usage fields (`spawnCount`, `buildCount`, `lastSpawnedAt`, `createdBy`) are reported only for the caller's own templates and to admin callers.


> Example responses

> 200 Response

```json
[
  {
    "templateID": "string",
    "buildID": "string",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "diskSizeMB": 0,
    "public": true,
    "aliases": [
      "string"
    ],
    "names": [
      "string"
    ],
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": null
    },
    "lastSpawnedAt": "1970-01-01T00:00:00Z",
    "spawnCount": 0,
    "buildCount": 0,
    "envdVersion": "string",
    "buildStatus": "building",
    "isDefault": true,
    "description": "string"
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-default-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the default templates|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-default-templates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Template](#schematemplate)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth, AdminApiKeyAuth, AdminJWTAuth
</aside>

## List template builds

> Code samples

```bash
curl https://api.e2b.dev/templates/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}`

List all builds for a template

<h3 id="list-template-builds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|nextToken|query|string|false|Cursor to start the list from|
|limit|query|integer(int32)|false|Maximum number of items to return per page|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "buildID": "string",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "diskSizeMB": 0,
  "public": true,
  "aliases": [
    "string"
  ],
  "names": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "buildCount": 0,
  "envdVersion": "string",
  "buildStatus": "building",
  "isDefault": true,
  "description": "string",
  "builds": [
    {
      "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "building",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "cpuCount": 1,
      "maxCpuCount": {},
      "memoryMB": 128,
      "diskSizeMB": 0,
      "envdVersion": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-template-builds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the template with its builds|[TemplateWithBuilds](#schematemplatewithbuilds)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Delete template

> Code samples

```bash
curl https://api.e2b.dev/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /templates/{templateID}`

Delete a template

<h3 id="delete-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The template was deleted successfully|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Update template

> Code samples

```bash
curl https://api.e2b.dev/templates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "public": true
  }'
```

`PATCH /templates/{templateID}`

<aside class="warning">
This operation is deprecated
</aside>

Update template

> Body parameter

```json
{
  "public": true
}
```

<h3 id="update-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|body|body|[TemplateUpdateRequest](#schematemplateupdaterequest)|true|none|
|» public|body|boolean|false|Whether the template is public or only accessible by the team|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The template was updated successfully|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List a template's builds

> Code samples

```bash
curl https://api.e2b.dev/templates/string/builds \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/builds`

List the builds of a template, newest first. The template is given by its ID or name. A template named `aliases` is given by its ID or by its name with the team prefix.

<h3 id="list-a-templates-builds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|nextToken|query|string|false|Cursor to start the list from|
|limit|query|integer(int32)|false|Maximum number of items to return per page|
|statuses|query|[[TemplateBuildStatus](#schematemplatebuildstatus)]|false|Comma-separated list of build statuses to include. Every status when omitted.|
|tags|query|[string]|false|Comma-separated list of tags. Only the builds these tags point at are returned. Every build when omitted.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statuses|building|
|statuses|waiting|
|statuses|ready|
|statuses|error|

> Example responses

> 200 Response

```json
[
  {
    "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "building",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "diskSizeMB": 0,
    "envdVersion": "string",
    "tags": [
      "string"
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-a-templates-builds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the template builds|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-a-templates-builds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TemplateBuildWithTags](#schematemplatebuildwithtags)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Start template build (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/templates/string/builds/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "fromImage": "string",
    "fromTemplate": "string",
    "fromImageRegistry": {
      "type": "aws",
      "awsAccessKeyId": "string",
      "awsSecretAccessKey": "password",
      "awsRegion": "string"
    },
    "force": false,
    "steps": [],
    "startCmd": "string",
    "readyCmd": "string"
  }'
```

`POST /v2/templates/{templateID}/builds/{buildID}`

Start the build. With an Idempotency-Key, replays continue to work after the build has left the waiting state.

> Body parameter

```json
{
  "fromImage": "string",
  "fromTemplate": "string",
  "fromImageRegistry": {
    "type": "aws",
    "awsAccessKeyId": "string",
    "awsSecretAccessKey": "password",
    "awsRegion": "string"
  },
  "force": false,
  "steps": [],
  "startCmd": "string",
  "readyCmd": "string"
}
```

<h3 id="start-template-build-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|buildID|path|string|true|none|
|Idempotency-Key|header|string|false|Optional team-scoped key for retrying the request. Use 1 to 255 lowercase ASCII letters,<br>digits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. The HTTP method, path, query,<br>and request content identify the request. When idempotency is enabled, a matching retry of<br>a completed request replays its status and body, including the IDs of any resources it<br>created, without repeating the operation. A failure explicitly classified as safe to retry<br>(Should-Retry: true) permits a fresh attempt with the same key and request. Only one<br>attempt can run at a time. A different request returns 409 with error_code<br>idempotency_request_mismatch. A matching request whose original has no recorded response<br>yet and is within its expected response window returns 409 with error_code<br>idempotency_in_progress. A matching request whose original has no recorded response and<br>whose expected response deadline has passed or is unknown returns 422 with error_code<br>idempotency_outcome_unknown. These conflicts and unknown outcomes do not execute the<br>request again. If the key's record is unavailable or idempotency is misconfigured, the<br>request returns 503; Should-Retry tells whether to retry with the same key. After the<br>retention period expires, the key can start a new operation.<br>|
|body|body|[TemplateBuildStartV2](#schematemplatebuildstartv2)|true|none|
|» fromImage|body|string|false|Image to use as a base for the template build|
|» fromTemplate|body|string|false|Template to use as a base for the template build|
|» fromImageRegistry|body|[FromImageRegistry](#schemafromimageregistry)|false|none|
|» force|body|boolean|false|Whether the whole build should be forced to run regardless of the cache|
|» steps|body|[[TemplateStep](#schematemplatestep)]|false|List of steps to execute in the template build|
|» startCmd|body|string|false|Start command to execute in the template after the build|
|» readyCmd|body|string|false|Ready check command to execute in the template after the build|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="start-template-build-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The build has started|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|The Idempotency-Key conflicts with a different request (error_code idempotency_request_mismatch), or the matching original request has no recorded response yet and is within its expected response window (error_code idempotency_in_progress); this request was not executed again|[Error](#schemaerror)|
|422|Unprocessable Entity|The matching original request has no recorded response and its expected response deadline has passed or is unknown (error_code idempotency_outcome_unknown); this request was not executed again|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|Should-Retry|boolean||none|
|401|Should-Retry|boolean||none|
|403|Should-Retry|boolean||none|
|404|Should-Retry|boolean||none|
|409|Should-Retry|boolean||none|
|422|Should-Retry|boolean||none|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|
|500|Should-Retry|boolean||none|
|503|Should-Retry|boolean||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Template info (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/templates/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /v2/templates/{templateID}`

Get a template by its ID or name, with its default build and without its other builds.

<h3 id="template-info-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "names": [
    "string"
  ],
  "public": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "buildCount": 0,
  "isDefault": true,
  "description": "string",
  "buildStatus": "building",
  "defaultBuild": {
    "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "building",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "diskSizeMB": 0,
    "envdVersion": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="template-info-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the template|[TemplateV2](#schematemplatev2)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Update template (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/templates/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "public": true
  }'
```

`PATCH /v2/templates/{templateID}`

Update template

> Body parameter

```json
{
  "public": true
}
```

<h3 id="update-template-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|body|body|[TemplateUpdateRequest](#schematemplateupdaterequest)|true|none|
|» public|body|boolean|false|Whether the template is public or only accessible by the team|

> Example responses

> 200 Response

```json
{
  "names": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-template-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The template was updated successfully|[TemplateUpdateResponse](#schematemplateupdateresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Template build status

> Code samples

```bash
curl https://api.e2b.dev/templates/string/builds/string/status \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/builds/{buildID}/status`

Get template build info

<h3 id="template-build-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|buildID|path|string|true|none|
|logsOffset|query|integer(int32)|false|Index of the starting build log that should be returned with the template|
|limit|query|integer(int32)|false|Maximum number of logs that should be returned|
|level|query|[LogLevel](#schemaloglevel)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|level|debug|
|level|info|
|level|warn|
|level|error|

> Example responses

> 200 Response

```json
{
  "logs": [],
  "logEntries": [],
  "templateID": "string",
  "buildID": "string",
  "status": "building",
  "reason": {
    "message": "string",
    "step": "string",
    "logEntries": []
  }
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="template-build-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the template|[TemplateBuildInfo](#schematemplatebuildinfo)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Template build logs

> Code samples

```bash
curl https://api.e2b.dev/templates/string/builds/string/logs \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/builds/{buildID}/logs`

Get template build logs

<h3 id="template-build-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|buildID|path|string|true|none|
|cursor|query|integer(int64)|false|Starting timestamp of the logs that should be returned in milliseconds|
|limit|query|integer(int32)|false|Maximum number of logs that should be returned|
|direction|query|[LogsDirection](#schemalogsdirection)|false|none|
|level|query|[LogLevel](#schemaloglevel)|false|none|
|source|query|[LogsSource](#schemalogssource)|false|Source of the logs that should be returned from|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|forward|
|direction|backward|
|level|debug|
|level|info|
|level|warn|
|level|error|
|source|temporary|
|source|persistent|

> Example responses

> 200 Response

```json
{
  "logs": []
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="template-build-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the template build logs|[TemplateBuildLogsResponse](#schematemplatebuildlogsresponse)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Check template alias

> Code samples

```bash
curl https://api.e2b.dev/templates/aliases/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/aliases/{alias}`

Check if template with given alias exists

<h3 id="check-template-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alias|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "public": true
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="check-template-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully queried template by alias|[TemplateAliasResponse](#schematemplatealiasresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-sandboxes">sandboxes</h1>

## List running sandboxes

> Code samples

```bash
curl https://api.e2b.dev/sandboxes \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /sandboxes`

<aside class="warning">
This operation is deprecated
</aside>

List all running sandboxes. Returns 400 when more than 5000 running sandboxes match; use GET /v2/sandboxes to page through them.

<h3 id="list-running-sandboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metadata|query|string|false|Metadata query used to filter the sandboxes (e.g. "user=abc&app=prod"). Each key and values must be URL encoded.|

> Example responses

> 200 Response

```json
[
  {
    "templateID": "string",
    "alias": "string",
    "sandboxID": "string",
    "clientID": "string",
    "startedAt": "1970-01-01T00:00:00Z",
    "endAt": "1970-01-01T00:00:00Z",
    "cpuCount": 1,
    "memoryMB": 128,
    "diskSizeMB": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "state": "running",
    "envdVersion": "string",
    "envdUnresponsiveAtPause": true,
    "volumeMounts": [
      {
        "name": "string",
        "path": "string"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-running-sandboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all running sandboxes|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-running-sandboxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListedSandbox](#schemalistedsandbox)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Create sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "templateID": "string",
    "timeout": 15,
    "cpuCount": {},
    "autoPause": false,
    "autoPauseMemory": true,
    "autoResume": {
      "enabled": false
    },
    "secure": true,
    "allow_internet_access": true,
    "network": {
      "allowPublicTraffic": true,
      "allowOut": [
        "string"
      ],
      "denyOut": [
        "string"
      ],
      "dnsServers": [
        "string"
      ],
      "egressProxy": {
        "address": "string",
        "username": "string",
        "password": "string",
        "tls": {
          "enabled": true,
          "serverName": "string",
          "caCert": "string"
        }
      },
      "maskRequestHost": "string",
      "httpsPorts": [
        1
      ],
      "rules": {
        "property1": [
          {
            "transform": {
              "headers": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        ],
        "property2": [
          {
            "transform": {
              "headers": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        ]
      }
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "envVars": {
      "property1": "string",
      "property2": "string"
    },
    "mcp": {
      "property1": null,
      "property2": null
    },
    "iam": {
      "tokens": {
        "property1": {
          "audience": "string",
          "tokenType": "string"
        },
        "property2": {
          "audience": "string",
          "tokenType": "string"
        }
      }
    },
    "volumeMounts": [
      {
        "name": "string",
        "path": "string"
      }
    ]
  }'
```

`POST /sandboxes`

<aside class="warning">
This operation is deprecated
</aside>

Create a sandbox from the template. All system communication with the sandbox is secured. Use POST /v2/sandboxes instead.

> Body parameter

```json
{
  "templateID": "string",
  "timeout": 15,
  "cpuCount": {},
  "autoPause": false,
  "autoPauseMemory": true,
  "autoResume": {
    "enabled": false
  },
  "secure": true,
  "allow_internet_access": true,
  "network": {
    "allowPublicTraffic": true,
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "maskRequestHost": "string",
    "httpsPorts": [
      1
    ],
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "mcp": {
    "property1": null,
    "property2": null
  },
  "iam": {
    "tokens": {
      "property1": {
        "audience": "string",
        "tokenType": "string"
      },
      "property2": {
        "audience": "string",
        "tokenType": "string"
      }
    }
  },
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

<h3 id="create-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewSandbox](#schemanewsandbox)|true|none|
|» templateID|body|string|true|Identifier of the required template|
|» timeout|body|integer(int32)|false|Time to live for the sandbox in seconds.|
|» cpuCount|body|object|false|Online vCPU target for the sandbox. Defaults to the template's cpuCount; at most its maxCpuCount (fixed-size templates accept only their cpuCount).|
|» autoPause|body|boolean|false|Automatically pauses the sandbox after the timeout|
|» autoPauseMemory|body|boolean|false|Controls the snapshot kind taken when the sandbox auto-pauses on timeout (only relevant when autoPause is true). When false, the auto-pause drops the in-memory state and persists only the filesystem (a filesystem-only snapshot); resuming it cold-boots (reboots) the sandbox from disk. Such a snapshot cannot be auto-resumed by traffic and must be resumed explicitly, so it cannot be combined with autoResume. Defaults to true (full memory snapshot).|
|» autoResume|body|[SandboxAutoResumeConfig](#schemasandboxautoresumeconfig)|false|Auto-resume configuration for paused sandboxes.|
|» secure|body|boolean|false|**Deprecated.** Ignored. All system communication with the sandbox is always secured; the template's envd version must support secured access.|
|» allow_internet_access|body|boolean|false|Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.|
|» network|body|[SandboxNetworkConfig](#schemasandboxnetworkconfig)|false|none|
|» metadata|body|[SandboxMetadata](#schemasandboxmetadata)|false|none|
|» envVars|body|[EnvVars](#schemaenvvars)|false|none|
|» mcp|body|[Mcp](#schemamcp)|false|MCP configuration for the sandbox|
|» iam|body|[SandboxIam](#schemasandboxiam)|false|Sandbox workload identity configuration. A non-empty, valid tokens map enables workload identity for the sandbox.|
|» volumeMounts|body|[[SandboxVolumeMount](#schemasandboxvolumemount)]|false|none|

> Example responses

> 201 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The sandbox was created successfully|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List sandboxes (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/sandboxes \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /v2/sandboxes`

List all sandboxes

<h3 id="list-sandboxes-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metadata|query|string|false|Metadata query used to filter the sandboxes (e.g. "user=abc&app=prod"). Each key and values must be URL encoded.|
|state|query|[[SandboxState](#schemasandboxstate)]|false|Filter sandboxes by one or more states|
|order|query|[OrderDirection](#schemaorderdirection)|false|Sort direction by sandbox start time. Defaults to desc (newest first).|
|startedAfter|query|string(date-time)|false|Return sandboxes started at or after this timestamp.|
|template|query|string|false|Filter sandboxes by a template ID or alias.|
|nextToken|query|string|false|Cursor to start the list from|
|limit|query|integer(int32)|false|Maximum number of items to return per page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|running|
|state|paused|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
[
  {
    "templateID": "string",
    "alias": "string",
    "sandboxID": "string",
    "clientID": "string",
    "startedAt": "1970-01-01T00:00:00Z",
    "endAt": "1970-01-01T00:00:00Z",
    "cpuCount": 1,
    "memoryMB": 128,
    "diskSizeMB": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "state": "running",
    "envdVersion": "string",
    "envdUnresponsiveAtPause": true,
    "volumeMounts": [
      {
        "name": "string",
        "path": "string"
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-sandboxes-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all running sandboxes|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-sandboxes-v2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListedSandbox](#schemalistedsandbox)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|
|200|X-Total-Running|integer|int32|Number of running sandboxes matching the filters, before pagination is applied. Only present when running sandboxes were requested.<br>|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Create sandbox (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/sandboxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "templateID": "string",
    "timeout": 300,
    "cpuCount": {},
    "autoPause": false,
    "autoPauseMemory": true,
    "autoResume": {
      "enabled": false
    },
    "allow_internet_access": true,
    "network": {
      "allowPublicTraffic": true,
      "allowOut": [
        "string"
      ],
      "denyOut": [
        "string"
      ],
      "dnsServers": [
        "string"
      ],
      "egressProxy": {
        "address": "string",
        "username": "string",
        "password": "string",
        "tls": {
          "enabled": true,
          "serverName": "string",
          "caCert": "string"
        }
      },
      "maskRequestHost": "string",
      "httpsPorts": [
        1
      ],
      "rules": {
        "property1": [
          {
            "transform": {
              "headers": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        ],
        "property2": [
          {
            "transform": {
              "headers": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        ]
      }
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "envVars": {
      "property1": "string",
      "property2": "string"
    },
    "mcp": {
      "property1": null,
      "property2": null
    },
    "iam": {
      "tokens": {
        "property1": {
          "audience": "string",
          "tokenType": "string"
        },
        "property2": {
          "audience": "string",
          "tokenType": "string"
        }
      }
    },
    "volumeMounts": [
      {
        "name": "string",
        "path": "string"
      }
    ]
  }'
```

`POST /v2/sandboxes`

Create a sandbox from the template. All system communication with the sandbox is secured.

> Body parameter

```json
{
  "templateID": "string",
  "timeout": 300,
  "cpuCount": {},
  "autoPause": false,
  "autoPauseMemory": true,
  "autoResume": {
    "enabled": false
  },
  "allow_internet_access": true,
  "network": {
    "allowPublicTraffic": true,
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "maskRequestHost": "string",
    "httpsPorts": [
      1
    ],
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "mcp": {
    "property1": null,
    "property2": null
  },
  "iam": {
    "tokens": {
      "property1": {
        "audience": "string",
        "tokenType": "string"
      },
      "property2": {
        "audience": "string",
        "tokenType": "string"
      }
    }
  },
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

<h3 id="create-sandbox-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Optional team-scoped key for retrying sandbox creation. Use 1 to 255 lowercase ASCII<br>letters, digits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. When idempotency is enabled,<br>matching retries replay a completed status and body for the retention period. A creation<br>failure explicitly classified as safe to retry (Should-Retry: true) permits a fresh<br>attempt with the same key and parameters. Only one attempt can run at a time.<br>Different request parameters return 409 with error_code idempotency_request_mismatch.<br>An in-progress request returns 409 with error_code idempotency_in_progress; an unknown<br>outcome returns 422 with error_code idempotency_outcome_unknown. These retries do not execute the request again.<br>Retries do not extend retention. If a fresh attempt's request deadline plus response<br>persistence budget would exceed the remaining retention, the previous error is replayed.<br>After the key expires, it can start a new creation.<br>|
|body|body|[NewSandboxV2](#schemanewsandboxv2)|true|none|
|» templateID|body|string|true|Identifier of the required template|
|» timeout|body|integer(int32)|false|Time to live for the sandbox in seconds.|
|» cpuCount|body|object|false|Online vCPU target for the sandbox. Defaults to the template's cpuCount; at most its maxCpuCount (fixed-size templates accept only their cpuCount).|
|» autoPause|body|boolean|false|Automatically pauses the sandbox after the timeout|
|» autoPauseMemory|body|boolean|false|Controls the snapshot kind taken when the sandbox auto-pauses on timeout (only relevant when autoPause is true). When false, the auto-pause drops the in-memory state and persists only the filesystem (a filesystem-only snapshot); resuming it cold-boots (reboots) the sandbox from disk. Such a snapshot cannot be auto-resumed by traffic and must be resumed explicitly, so it cannot be combined with autoResume. Defaults to true (full memory snapshot).|
|» autoResume|body|[SandboxAutoResumeConfig](#schemasandboxautoresumeconfig)|false|Auto-resume configuration for paused sandboxes.|
|» allow_internet_access|body|boolean|false|Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.|
|» network|body|[SandboxNetworkConfig](#schemasandboxnetworkconfig)|false|none|
|» metadata|body|[SandboxMetadata](#schemasandboxmetadata)|false|none|
|» envVars|body|[EnvVars](#schemaenvvars)|false|none|
|» mcp|body|[Mcp](#schemamcp)|false|MCP configuration for the sandbox|
|» iam|body|[SandboxIam](#schemasandboxiam)|false|Sandbox workload identity configuration. A non-empty, valid tokens map enables workload identity for the sandbox.|
|» volumeMounts|body|[[SandboxVolumeMount](#schemasandboxvolumemount)]|false|none|

> Example responses

> 201 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-sandbox-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The sandbox was created successfully|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|The Idempotency-Key conflicts with a different request (error_code idempotency_request_mismatch), or the matching original request has no recorded response yet and is within its expected response window (error_code idempotency_in_progress); this request was not executed again|[Error](#schemaerror)|
|422|Unprocessable Entity|The matching original request has no recorded response and its expected response deadline has passed or is unknown (error_code idempotency_outcome_unknown); this request was not executed again|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|Should-Retry|boolean||none|
|403|Should-Retry|boolean||none|
|404|Should-Retry|boolean||none|
|409|Should-Retry|boolean||none|
|422|Should-Retry|boolean||none|
|429|Should-Retry|boolean||none|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|
|500|Should-Retry|boolean||none|
|503|Should-Retry|boolean||none|
|504|Should-Retry|boolean||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List sandbox metrics

> Code samples

```bash
curl 'https://api.e2b.dev/sandboxes/metrics?sandbox_ids=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /sandboxes/metrics`

List metrics for given sandboxes

<h3 id="list-sandbox-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandbox_ids|query|[string]|true|Comma-separated list of sandbox IDs to get metrics for|

> Example responses

> 200 Response

```json
{
  "sandboxes": {
    "property1": {
      "timestamp": "1970-01-01T00:00:00Z",
      "timestampUnix": 0,
      "cpuCount": 0,
      "cpuUsedPct": 0,
      "memUsed": 0,
      "memTotal": 0,
      "memCache": 0,
      "diskUsed": 0,
      "diskTotal": 0
    },
    "property2": {
      "timestamp": "1970-01-01T00:00:00Z",
      "timestampUnix": 0,
      "cpuCount": 0,
      "cpuUsedPct": 0,
      "memUsed": 0,
      "memTotal": 0,
      "memCache": 0,
      "diskUsed": 0,
      "diskTotal": 0
    }
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-sandbox-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all running sandboxes with metrics|[SandboxesWithMetrics](#schemasandboxeswithmetrics)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Sandbox logs

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/logs \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /sandboxes/{sandboxID}/logs`

<aside class="warning">
This operation is deprecated
</aside>

Get sandbox logs. Use /v2/sandboxes/{sandboxID}/logs instead.

<h3 id="sandbox-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|start|query|integer(int64)|false|Starting timestamp of the logs that should be returned in milliseconds|
|limit|query|integer(int32)|false|Maximum number of logs that should be returned|

> Example responses

> 200 Response

```json
{
  "logs": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "line": "string"
    }
  ],
  "logEntries": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "message": "string",
      "level": "debug",
      "fields": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="sandbox-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox logs|[SandboxLogs](#schemasandboxlogs)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Sandbox logs (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/sandboxes/string/logs \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /v2/sandboxes/{sandboxID}/logs`

Get sandbox logs

<h3 id="sandbox-logs-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|cursor|query|integer(int64)|false|Starting timestamp of the logs that should be returned in milliseconds|
|limit|query|integer(int32)|false|Maximum number of logs that should be returned|
|direction|query|[LogsDirection](#schemalogsdirection)|false|Direction of the logs that should be returned|
|level|query|[LogLevel](#schemaloglevel)|false|Minimum log level to return. Logs below this level are excluded|
|search|query|string|false|Case-sensitive substring match on log message content|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|forward|
|direction|backward|
|level|debug|
|level|info|
|level|warn|
|level|error|

> Example responses

> 200 Response

```json
{
  "logs": []
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="sandbox-logs-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox logs|[SandboxLogsV2Response](#schemasandboxlogsv2response)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /sandboxes/{sandboxID}`

Get a sandbox by id

<h3 id="sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "alias": "string",
  "sandboxID": "string",
  "clientID": "string",
  "startedAt": "1970-01-01T00:00:00Z",
  "endAt": "1970-01-01T00:00:00Z",
  "envdVersion": "string",
  "envdUnresponsiveAtPause": true,
  "envdAccessToken": "string",
  "allowInternetAccess": true,
  "domain": "string",
  "cpuCount": 1,
  "memoryMB": 128,
  "diskSizeMB": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "state": "running",
  "network": {
    "allowPublicTraffic": true,
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "maskRequestHost": "string",
    "httpsPorts": [
      1
    ],
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  },
  "lifecycle": {
    "autoResume": true,
    "onTimeout": "kill"
  },
  "pauseMode": "full",
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox|[SandboxDetail](#schemasandboxdetail)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Kill sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /sandboxes/{sandboxID}`

Kill a sandbox

<h3 id="kill-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="kill-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The sandbox was killed successfully|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Sandbox metrics

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/metrics \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /sandboxes/{sandboxID}/metrics`

Get sandbox metrics

<h3 id="sandbox-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|start|query|integer(int64)|false|Unix timestamp for the start of the interval, in seconds, for which the metrics|
|end|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "1970-01-01T00:00:00Z",
    "timestampUnix": 0,
    "cpuCount": 0,
    "cpuUsedPct": 0,
    "memUsed": 0,
    "memTotal": 0,
    "memCache": 0,
    "diskUsed": 0,
    "diskTotal": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="sandbox-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox metrics|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="sandbox-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SandboxMetric](#schemasandboxmetric)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Sandbox record

> Code samples

```bash
curl https://api.e2b.dev/unstable/sandboxes/string/record \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}"
```

`GET /unstable/sandboxes/{sandboxID}/record`

Returns the team's latest recorded run of the sandbox, including runs that have already ended, and whether its monitoring, logs and events data are still retained. Returns 404 when the team has no recorded run of the sandbox.

<h3 id="sandbox-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "alias": "string",
  "sandboxID": "string",
  "startedAt": "1970-01-01T00:00:00Z",
  "stoppedAt": "1970-01-01T00:00:00Z",
  "domain": "string",
  "cpuCount": 1,
  "memoryMB": 128,
  "diskSizeMB": 0,
  "retentionExpired": true,
  "eventsRetentionExpired": true
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="sandbox-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox record|[SandboxRecord](#schemasandboxrecord)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth
</aside>

## Pause sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "memory": true,
    "requireHealthyGuest": false
  }'
```

`POST /sandboxes/{sandboxID}/pause`

Pause the sandbox. Answers 503 and leaves the sandbox running when it cannot be paused right now: its node is busy, it is being snapshotted, or `requireHealthyGuest` was set and the sandbox guest agent is not responding; retry later.

> Body parameter

```json
{
  "memory": true,
  "requireHealthyGuest": false
}
```

<h3 id="pause-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[SandboxPauseRequest](#schemasandboxpauserequest)|false|none|
|» memory|body|boolean|false|Whether to capture a full memory snapshot. When false, only the filesystem is persisted and resuming the sandbox cold-boots (reboots) it from disk, losing in-memory state, running processes, and open connections. Resume it with an explicit request (connect or resume); auto-resume, which can be triggered by arbitrary traffic, refuses such a sandbox. Defaults to true.|
|» requireHealthyGuest|body|boolean|false|The pause checks that the sandbox guest agent answers before it takes the snapshot. By default an unresponsive agent is recorded on the snapshot and the pause proceeds; the sandbox then shows `envdUnresponsiveAtPause` and a later resume must ask for `memory: false`, since restoring that memory would bring the unresponsive agent back. With this true, the pause is instead refused with 503 while the agent does not answer, and the sandbox keeps running. A filesystem-only pause (`memory: false`) is always refused while the agent does not answer, whatever this says.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="pause-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The sandbox was paused successfully and can be resumed|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Resume sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "timeout": 15,
    "cpuCount": {},
    "autoPause": true,
    "memory": true
  }'
```

`POST /sandboxes/{sandboxID}/resume`

<aside class="warning">
This operation is deprecated
</aside>

Resume the sandbox. Answers 409 when the sandbox is already running, or when its snapshot was taken while the sandbox guest agent was not responding and a plain resume would restore that memory (error_code sandbox_snapshot_guest_agent_unresponsive); resume such a sandbox without memory (`memory: false`).

> Body parameter

```json
{
  "timeout": 15,
  "cpuCount": {},
  "autoPause": true,
  "memory": true
}
```

<h3 id="resume-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[ResumedSandbox](#schemaresumedsandbox)|false|none|
|» timeout|body|integer(int32)|false|Time to live for the sandbox in seconds.|
|» cpuCount|body|object|false|Online vCPU target for the resumed sandbox. Defaults to the snapshot's cpuCount; at most the template's maxCpuCount (fixed-size templates accept only their cpuCount).|
|» autoPause|body|boolean|false|**Deprecated.** Automatically pauses the sandbox after the timeout|
|» memory|body|boolean|false|Defaults to true. When false, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.|

> Example responses

> 201 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="resume-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The sandbox was resumed successfully|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Fork sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/fork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "timeout": 15,
    "count": 1
  }'
```

`POST /sandboxes/{sandboxID}/fork`

Fork the sandbox: checkpoint the running sandbox in place (it is briefly paused, snapshotted with its full memory state, and resumed on its node, keeping its ID and expiration untouched) and create count new sandboxes from that snapshot. Returns one result per requested fork, each carrying either the created sandbox or the error that prevented it from starting. A non-201 status means the request failed before any fork was attempted.

> Body parameter

```json
{
  "timeout": 15,
  "count": 1
}
```

<h3 id="fork-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[SandboxForkRequest](#schemasandboxforkrequest)|false|none|
|» timeout|body|integer(int32)|false|Time to live for the new forked sandboxes in seconds.|
|» count|body|integer(int32)|false|Number of forked sandboxes to create. All forks boot from the same snapshot, so the snapshot is captured once regardless of count. Each fork succeeds or fails independently; the outcome of each is reported in its entry of the response list.|

> Example responses

> 201 Response

```json
[
  {
    "sandbox": {
      "templateID": "string",
      "sandboxID": "string",
      "alias": "string",
      "clientID": "string",
      "envdVersion": "string",
      "envdAccessToken": "string",
      "trafficAccessToken": "string",
      "domain": "string"
    },
    "error": {
      "code": 0,
      "error_code": "string",
      "message": "string"
    }
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="fork-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The sandbox was snapshotted and the forks were attempted; each entry reports one fork's outcome|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<h3 id="fork-sandbox-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SandboxForkResult](#schemasandboxforkresult)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Connect sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/connect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "timeout": 0,
    "memory": true
  }'
```

`POST /sandboxes/{sandboxID}/connect`

<aside class="warning">
This operation is deprecated
</aside>

Returns sandbox details. If the sandbox is paused, it will be resumed. TTL is only extended. Use POST /v2/sandboxes/{sandboxID}/connect instead. Answers 409 with error_code sandbox_snapshot_guest_agent_unresponsive when the paused sandbox's snapshot was taken while its guest agent was not responding and the request did not ask for `memory: false`.

> Body parameter

```json
{
  "timeout": 0,
  "memory": true
}
```

<h3 id="connect-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[ConnectSandbox](#schemaconnectsandbox)|true|none|
|» timeout|body|integer(int32)|true|Timeout in seconds from the current time after which the sandbox should expire|
|» memory|body|boolean|false|Defaults to true. When false and the sandbox is paused, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 201 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="connect-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The sandbox was already running|[Sandbox](#schemasandbox)|
|201|Created|The sandbox was resumed successfully|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Connect sandbox (v2)

> Code samples

```bash
curl https://api.e2b.dev/v2/sandboxes/string/connect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "timeout": 300,
    "memory": true
  }'
```

`POST /v2/sandboxes/{sandboxID}/connect`

Returns sandbox details. If the sandbox is paused, it will be resumed. TTL is only extended. The request body is optional; an omitted timeout defaults to 300 seconds. Answers 409 with error_code sandbox_snapshot_guest_agent_unresponsive when the paused sandbox's snapshot was taken while its guest agent was not responding and the request did not ask for `memory: false`.

> Body parameter

```json
{
  "timeout": 300,
  "memory": true
}
```

<h3 id="connect-sandbox-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[ConnectSandboxV2](#schemaconnectsandboxv2)|false|none|
|» timeout|body|integer(int32)|false|Timeout in seconds from the current time after which the sandbox should expire|
|» memory|body|boolean|false|Defaults to true. When false and the sandbox is paused, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 201 Response

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="connect-sandbox-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The sandbox was already running|[Sandbox](#schemasandbox)|
|201|Created|The sandbox was resumed successfully|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Set sandbox timeout

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/timeout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "timeout": 0
  }'
```

`POST /sandboxes/{sandboxID}/timeout`

Set the timeout for the sandbox. The sandbox will expire x seconds from the time of the request. Calling this method multiple times overwrites the TTL, each time using the current timestamp as the starting point to measure the timeout duration.

> Body parameter

```json
{
  "timeout": 0
}
```

<h3 id="set-sandbox-timeout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[SandboxTimeoutRequest](#schemasandboxtimeoutrequest)|false|none|
|» timeout|body|integer(int32)|true|Timeout in seconds from the current time after which the sandbox should expire|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="set-sandbox-timeout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully set the sandbox timeout|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Update sandbox network

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/network \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    },
    "allow_internet_access": true
  }'
```

`PUT /sandboxes/{sandboxID}/network`

Update the network configuration for a running sandbox. Replaces the current egress rules with the provided configuration. Omitting field clears it.

> Body parameter

```json
{
  "allowOut": [
    "string"
  ],
  "denyOut": [
    "string"
  ],
  "dnsServers": [
    "string"
  ],
  "egressProxy": {
    "address": "string",
    "username": "string",
    "password": "string",
    "tls": {
      "enabled": true,
      "serverName": "string",
      "caCert": "string"
    }
  },
  "rules": {
    "property1": [
      {
        "transform": {
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "property2": [
      {
        "transform": {
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ]
  },
  "allow_internet_access": true
}
```

<h3 id="update-sandbox-network-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[SandboxNetworkUpdateConfig](#schemasandboxnetworkupdateconfig)|true|none|
|» allowOut|body|[string]|false|List of allowed destinations for egress traffic. Each entry can be a CIDR block (e.g. "8.8.8.8/32"), a bare IP address (e.g. "8.8.8.8"), or a domain name (e.g. "example.com", "*.example.com"). Allowed entries always take precedence over denied entries. When allowOut contains a domain, the servers in dnsServers (8.8.8.8 by default) are also allowed.|
|» denyOut|body|[string]|false|List of denied CIDR blocks or IP addresses for egress traffic. Domain names are not supported for deny rules.|
|» dnsServers|body|[string]|false|DNS servers the sandbox can reach when allowOut contains a domain. Each entry must be an IPv4 address, and all traffic to it is allowed. Omit it to reset to the default nameserver 8.8.8.8, or pass an empty list to allow none. This does not change the sandbox's /etc/resolv.conf.|
|» egressProxy|body|[SandboxEgressProxyConfig](#schemasandboxegressproxyconfig)|false|SOCKS5 proxy for sandbox egress. Outbound TCP is tunneled through the proxy after allow/deny filtering; the sandbox is unaware. Domain-matched flows use remote DNS (ATYP=domain).|
|» rules|body|object|false|Per-domain transform rules applied to matching outbound HTTPS requests. Replaces all existing rules when provided. Keys may be exact DNS names or a single leading wildcard (for example, "*.example.com"), and are normalized to lowercase on write. Wildcards match subdomains at any depth but not the apex domain; a bare "*" is invalid. Exact rules take precedence, followed by the longest matching wildcard suffix, and matching rule sets are not merged. Broad wildcards such as "*.com" are allowed and may expose transformed credentials to every matching destination the sandbox contacts. Rules do not grant network access; configure allowOut separately to permit the destination.<br>|
|» » **additionalProperties**|body|[[SandboxNetworkRule](#schemasandboxnetworkrule)]|false|none|
|» allow_internet_access|body|boolean|false|Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-sandbox-network-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated the sandbox network configuration|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Refresh sandbox

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/refreshes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "duration": 0
  }'
```

`POST /sandboxes/{sandboxID}/refreshes`

Refresh the sandbox extending its time to live

> Body parameter

```json
{
  "duration": 0
}
```

<h3 id="refresh-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[SandboxRefreshRequest](#schemasandboxrefreshrequest)|false|none|
|» duration|body|integer|false|Duration for which the sandbox should be kept alive in seconds|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="refresh-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully refreshed the sandbox|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Create snapshot

> Code samples

```bash
curl https://api.e2b.dev/sandboxes/string/snapshots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "memory": true
  }'
```

`POST /sandboxes/{sandboxID}/snapshots`

Create a persistent snapshot from the sandbox's current state. Snapshots can be used to create new sandboxes and persist beyond the original sandbox's lifetime.

> Body parameter

```json
{
  "name": "string",
  "memory": true
}
```

<h3 id="create-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|Idempotency-Key|header|string|false|Optional team-scoped key for retrying the request. Use 1 to 255 lowercase ASCII letters,<br>digits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. The HTTP method, path, query,<br>and request content identify the request. When idempotency is enabled, a matching retry of<br>a completed request replays its status and body, including the IDs of any resources it<br>created, without repeating the operation. A failure explicitly classified as safe to retry<br>(Should-Retry: true) permits a fresh attempt with the same key and request. Only one<br>attempt can run at a time. A different request returns 409 with error_code<br>idempotency_request_mismatch. A matching request whose original has no recorded response<br>yet and is within its expected response window returns 409 with error_code<br>idempotency_in_progress. A matching request whose original has no recorded response and<br>whose expected response deadline has passed or is unknown returns 422 with error_code<br>idempotency_outcome_unknown. These conflicts and unknown outcomes do not execute the<br>request again. If the key's record is unavailable or idempotency is misconfigured, the<br>request returns 503; Should-Retry tells whether to retry with the same key. After the<br>retention period expires, the key can start a new operation.<br>|
|body|body|[SandboxSnapshotRequest](#schemasandboxsnapshotrequest)|true|none|
|» name|body|string|false|Optional name for the snapshot template. If a snapshot template with this name already exists, a new build will be assigned to the existing template instead of creating a new one.|
|» memory|body|boolean|false|Whether to capture a full memory snapshot. When false, only the filesystem is persisted: the snapshot is smaller and faster to take, and sandboxes created from it cold-boot (start fresh from disk) instead of restoring memory, so they begin without the source sandbox's running processes, in-memory state, and open connections. The source sandbox keeps running in both cases. Defaults to true.|

> Example responses

> 201 Response

```json
{
  "snapshotID": "string",
  "names": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Snapshot created successfully|[SnapshotInfo](#schemasnapshotinfo)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|422|Unprocessable Entity|Unprocessable request|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|Should-Retry|boolean||none|
|404|Should-Retry|boolean||none|
|409|Should-Retry|boolean||none|
|422|Should-Retry|boolean||none|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|
|500|Should-Retry|boolean||none|
|503|Should-Retry|boolean||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-auth">auth</h1>

## Team metrics

> Code samples

```bash
curl https://api.e2b.dev/teams/string/metrics \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /teams/{teamID}/metrics`

Get metrics for the team

<h3 id="team-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string|true|Identifier of the team, as its UUID or its public project ID (prj_)|
|start|query|integer(int64)|false|Unix timestamp for the start of the interval, in seconds, for which the metrics|
|end|query|integer(int64)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "1970-01-01T00:00:00Z",
    "timestampUnix": 0,
    "concurrentSandboxes": 0,
    "sandboxStartRate": 0
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="team-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the team metrics|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="team-metrics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamMetric](#schemateammetric)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Maximum team metrics

> Code samples

```bash
curl 'https://api.e2b.dev/teams/string/metrics/max?metric=concurrent_sandboxes' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /teams/{teamID}/metrics/max`

Get the maximum metrics for the team in the given interval

<h3 id="maximum-team-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string|true|Identifier of the team, as its UUID or its public project ID (prj_)|
|start|query|integer(int64)|false|Unix timestamp for the start of the interval, in seconds, for which the metrics|
|end|query|integer(int64)|false|none|
|metric|query|string|true|Metric to retrieve the maximum value for|

#### Enumerated Values

|Parameter|Value|
|---|---|
|metric|concurrent_sandboxes|
|metric|sandbox_start_rate|

> Example responses

> 200 Response

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "timestampUnix": 0,
  "value": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="maximum-team-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the team metrics|[MaxTeamMetric](#schemamaxteammetric)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Team access status

> Code samples

```bash
curl https://api.e2b.dev/unstable/teams/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}"
```

`GET /unstable/teams/{teamID}/status`

Returns whether the team is banned or blocked, and why it is blocked. A team-authenticated request may read only its own team.

<h3 id="team-access-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string|true|Identifier of the team, as its UUID or its public project ID (prj_)|

> Example responses

> 200 Response

```json
{
  "isBanned": true,
  "isBlocked": true,
  "blockedReason": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="team-access-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the team access status|[TeamStatusResponse](#schemateamstatusresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth, AdminJWTAuth
</aside>

## Team limits

> Code samples

```bash
curl https://api.e2b.dev/unstable/teams/string/limits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}"
```

`GET /unstable/teams/{teamID}/limits`

Returns the team's effective resource limits. A team-authenticated request may read only its own team.

<h3 id="team-limits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string|true|Identifier of the team, as its UUID or its public project ID (prj_)|

> Example responses

> 200 Response

```json
{
  "limits": {
    "maxLengthHours": 0,
    "concurrentSandboxes": 0,
    "concurrentTemplateBuilds": 0,
    "maxVcpu": 0,
    "maxRamMb": 0,
    "diskMb": 0,
    "eventsTtlDays": 0,
    "defaultFreeDiskSizeMb": 0,
    "maxFreeDiskSizeMb": 0,
    "apiTeamRpsList": 0,
    "apiTeamRpsDelete": 0,
    "maxSecrets": 0
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="team-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the team limits|[TeamLimitsResponse](#schemateamlimitsresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth, AdminJWTAuth
</aside>

<h1 id="e2b-api-api-keys">api-keys</h1>

## List team API keys

> Code samples

```bash
curl https://api.e2b.dev/api-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}"
```

`GET /api-keys`

List all team API keys

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "mask": {
      "prefix": "string",
      "valueLength": 0,
      "maskedValuePrefix": "string",
      "maskedValueSuffix": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": null
    },
    "lastUsed": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-team-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all team API keys|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-team-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamAPIKey](#schemateamapikey)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Create team API key

> Code samples

```bash
curl https://api.e2b.dev/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /api-keys`

Create a new team API key

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-team-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewTeamAPIKey](#schemanewteamapikey)|true|none|
|» name|body|string|true|Name of the API key|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "key": "string",
  "mask": {
    "prefix": "string",
    "valueLength": 0,
    "maskedValuePrefix": "string",
    "maskedValueSuffix": "string"
  },
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastUsed": "1970-01-01T00:00:00Z"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-team-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Team API key created successfully|[CreatedTeamAPIKey](#schemacreatedteamapikey)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth
</aside>

## Delete team API key

> Code samples

```bash
curl https://api.e2b.dev/api-keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}"
```

`DELETE /api-keys/{apiKeyID}`

Delete a team API key

<h3 id="delete-team-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKeyID|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-team-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Team API key deleted successfully|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Update team API key

> Code samples

```bash
curl https://api.e2b.dev/api-keys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "X-Team-ID: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /api-keys/{apiKeyID}`

Update a team API key

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-team-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKeyID|path|string|true|none|
|body|body|[UpdateTeamAPIKey](#schemaupdateteamapikey)|true|none|
|» name|body|string|true|New name for the API key|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-team-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Team API key updated successfully|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-tags">tags</h1>

## Assign template tags

> Code samples

```bash
curl https://api.e2b.dev/templates/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "target": "string",
    "tags": [
      "string"
    ]
  }'
```

`POST /templates/tags`

Assign tag(s) to a template build.

> Body parameter

```json
{
  "target": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="assign-template-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|Optional team-scoped key for retrying the request. Use 1 to 255 lowercase ASCII letters,<br>digits, or hyphens (a-z, 0-9, -), such as a lowercase UUID. The HTTP method, path, query,<br>and request content identify the request. When idempotency is enabled, a matching retry of<br>a completed request replays its status and body, including the IDs of any resources it<br>created, without repeating the operation. A failure explicitly classified as safe to retry<br>(Should-Retry: true) permits a fresh attempt with the same key and request. Only one<br>attempt can run at a time. A different request returns 409 with error_code<br>idempotency_request_mismatch. A matching request whose original has no recorded response<br>yet and is within its expected response window returns 409 with error_code<br>idempotency_in_progress. A matching request whose original has no recorded response and<br>whose expected response deadline has passed or is unknown returns 422 with error_code<br>idempotency_outcome_unknown. These conflicts and unknown outcomes do not execute the<br>request again. If the key's record is unavailable or idempotency is misconfigured, the<br>request returns 503; Should-Retry tells whether to retry with the same key. After the<br>retention period expires, the key can start a new operation.<br>|
|body|body|[AssignTemplateTagsRequest](#schemaassigntemplatetagsrequest)|true|none|
|» target|body|string|true|Target template in "name:tag" format|
|» tags|body|[string]|true|Tags to assign to the template|

> Example responses

> 201 Response

```json
{
  "tags": [
    "string"
  ],
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 408 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="assign-template-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Tag assigned successfully|[AssignedTemplateTags](#schemaassignedtemplatetags)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|408|Request Timeout|Request body read timed out before execution|[Error](#schemaerror)|
|409|Conflict|The Idempotency-Key conflicts with a different request (error_code idempotency_request_mismatch), or the matching original request has no recorded response yet and is within its expected response window (error_code idempotency_in_progress); this request was not executed again|[Error](#schemaerror)|
|413|Payload Too Large|Request body exceeds the size limit|Inline|
|422|Unprocessable Entity|The matching original request has no recorded response and its expected response deadline has passed or is unknown (error_code idempotency_outcome_unknown); this request was not executed again|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error. A failed commit has an uncertain outcome and omits Should-Retry; with an Idempotency-Key that error is replayed without executing again.|[Error](#schemaerror)|
|503|Service Unavailable|Idempotency is unavailable; the request was not executed|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|Should-Retry|boolean||none|
|401|Should-Retry|boolean||none|
|403|Should-Retry|boolean||none|
|404|Should-Retry|boolean||none|
|408|Should-Retry|boolean||none|
|409|Should-Retry|boolean||none|
|413|Should-Retry|boolean||none|
|422|Should-Retry|boolean||none|
|429|Should-Retry|boolean||none|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|
|500|Should-Retry|boolean||none|
|503|Should-Retry|boolean||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Delete template tags

> Code samples

```bash
curl https://api.e2b.dev/templates/tags \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "tags": [
      "string"
    ]
  }'
```

`DELETE /templates/tags`

Delete multiple tags from templates

> Body parameter

```json
{
  "name": "string",
  "tags": [
    "string"
  ]
}
```

<h3 id="delete-template-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteTemplateTagsRequest](#schemadeletetemplatetagsrequest)|true|none|
|» name|body|string|true|Name of the template|
|» tags|body|[string]|true|Tags to delete|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-template-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Tags deleted successfully|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List template tags

> Code samples

```bash
curl https://api.e2b.dev/templates/string/tags \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/tags`

List all tags for a template

<h3 id="list-template-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "tag": "string",
    "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "createdAt": "1970-01-01T00:00:00Z"
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-template-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the template tags|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-template-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TemplateTag](#schematemplatetag)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List template tag groups

> Code samples

```bash
curl https://api.e2b.dev/templates/string/tags/groups \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/tags/groups`

Lists the template's tags that have at least one ready build, each with its most recent ready assignments, paginated over tags with a keyset cursor. Returns 404 when the template does not exist or belongs to another team.


<h3 id="list-template-tag-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|assignmentLimit|query|integer(int32)|false|Maximum number of ready assignment rows to return per tag.|
|tagsLimit|query|integer(int32)|false|Maximum number of distinct tags to return per page.|
|tagsCursor|query|string|false|Cursor returned by the previous list response in `{sort}\|{latest_assigned_at}\|{tag}` format (sort-tagged, RFC3339Nano).|
|search|query|string|false|Substring filter on tag name. Allowed characters are `a-z`, `0-9`, `.`, `_`, `-`.|
|sort|query|string|false|Sort order for the returned tag groups.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|latest_desc|
|sort|latest_asc|
|sort|name_asc|
|sort|name_desc|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "tag": "string",
      "assignments": [
        {
          "assignmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "assignedAt": "1970-01-01T00:00:00Z",
          "buildCreatedAt": "1970-01-01T00:00:00Z",
          "buildFinishedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "hasMore": true
    }
  ],
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-template-tag-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned template tag groups|[TemplateTagGroupsResponse](#schematemplatetaggroupsresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Count template tags

> Code samples

```bash
curl https://api.e2b.dev/templates/string/tags/count \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/tags/count`

Returns the number of distinct tags of the template that have at least one ready build. Returns 404 when the template does not exist or belongs to another team.


<h3 id="count-template-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "total": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="count-template-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the tag count|[TemplateTagsCountResponse](#schematemplatetagscountresponse)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Check template tag

> Code samples

```bash
curl 'https://api.e2b.dev/templates/string/tags/exists?tag=string' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/tags/exists`

Checks whether a tag of the template has at least one ready build. Returns 404 when the template does not exist or belongs to another team.


<h3 id="check-template-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|tag|query|string|true|Template tag name to check.|

> Example responses

> 200 Response

```json
{
  "exists": true,
  "normalizedTag": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="check-template-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully checked the tag|[TemplateTagExistsResponse](#schematemplatetagexistsresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List template tag assignments

> Code samples

```bash
curl https://api.e2b.dev/templates/string/tags/string/assignments \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /templates/{templateID}/tags/{tag}/assignments`

Lists the ready assignments of one tag of the template, newest first, with keyset cursor pagination. Returns 404 when the template does not exist or belongs to another team.


<h3 id="list-template-tag-assignments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|tag|path|string|true|none|
|cursor|query|string|false|Cursor returned by the previous list response in `assigned_at\|assignment_id` format.|
|limit|query|integer(int32)|false|Maximum number of assignment rows to return per page.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "assignmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "assignedAt": "1970-01-01T00:00:00Z",
      "buildCreatedAt": "1970-01-01T00:00:00Z",
      "buildFinishedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-template-tag-assignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the tag assignments|[TemplateTagAssignmentsResponse](#schematemplatetagassignmentsresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-volumes">volumes</h1>

## List team volumes

> Code samples

```bash
curl https://api.e2b.dev/volumes \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /volumes`

List all team volumes

> Example responses

> 200 Response

```json
[
  {
    "volumeID": "string",
    "name": "string"
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-team-volumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully listed all team volumes|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-team-volumes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Volume](#schemavolume)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Create team volume

> Code samples

```bash
curl https://api.e2b.dev/volumes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /volumes`

Create a new team volume

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-team-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewVolume](#schemanewvolume)|true|none|
|» name|body|string|true|Name of the volume|

> Example responses

> 201 Response

```json
{
  "volumeID": "string",
  "name": "string",
  "token": "string",
  "domain": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-team-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created a new team volume|[VolumeAndToken](#schemavolumeandtoken)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Team volume

> Code samples

```bash
curl https://api.e2b.dev/volumes/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /volumes/{volumeID}`

Get team volume info

<h3 id="team-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "volumeID": "string",
  "name": "string",
  "token": "string",
  "domain": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="team-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved a team volume|[VolumeAndToken](#schemavolumeandtoken)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Delete team volume

> Code samples

```bash
curl https://api.e2b.dev/volumes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /volumes/{volumeID}`

Delete a team volume

<h3 id="delete-team-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|volumeID|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-team-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted a team volume|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-secrets">secrets</h1>

## List project secrets

> Code samples

```bash
curl https://api.e2b.dev/secrets \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /secrets`

List the project's secrets. No response carries a secret value.

<h3 id="list-project-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|Cursor to start the list from|
|limit|query|integer(int32)|false|Maximum number of items to return per page|

> Example responses

> 200 Response

```json
[
  {
    "secretID": "string",
    "name": "string",
    "currentVersion": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 502 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-project-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully listed the project's secrets|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|502|Bad Gateway|Backend error|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

<h3 id="list-project-secrets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Secret](#schemasecret)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Create a secret

> Code samples

```bash
curl https://api.e2b.dev/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "value": "password",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /secrets`

Create a secret by storing a runtime marker as its first version. The response carries metadata only.

> Body parameter

```json
{
  "name": "string",
  "value": "password",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewSecret](#schemanewsecret)|true|none|
|» name|body|string|true|Name of the secret, unique within the project. Names are lower-cased before storage and returned in that canonical form; the sec_ prefix is reserved for secret identifiers.<br>|
|» value|body|string(password)|true|Runtime marker stored as the secret's first version. The runtime resolves it to a value at sandbox egress.|
|» metadata|body|[SecretMetadata](#schemasecretmetadata)|false|Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.<br>|

> Example responses

> 201 Response

```json
{
  "secretID": "string",
  "name": "string",
  "currentVersion": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 409,
  "message": "Project has reached its limit of 50 live secrets",
  "error_code": "secret_limit_reached"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 502 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created the secret|[Secret](#schemasecret)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Secret name conflict or project live-secret limit reached. A quota response has error_code secret_limit_reached and, when reported by the backend, the effective cap in message.|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|502|Bad Gateway|Backend error|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Get a secret

> Code samples

```bash
curl https://api.e2b.dev/secrets/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /secrets/{secretID}`

Get one secret's metadata, selected by identifier or name.

<h3 id="get-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|secretID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "secretID": "string",
  "name": "string",
  "currentVersion": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 502 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="get-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved the secret|[Secret](#schemasecret)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|502|Bad Gateway|Backend error|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Update a secret

> Code samples

```bash
curl https://api.e2b.dev/secrets/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "value": "password",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /secrets/{secretID}`

Replace the secret's stored marker by appending a new version. The response carries metadata only.

> Body parameter

```json
{
  "value": "password",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|secretID|path|string|true|none|
|body|body|[SecretUpdate](#schemasecretupdate)|true|none|
|» value|body|string(password)|true|Runtime marker stored as the secret's new version. The runtime resolves it to a value at sandbox egress.|
|» metadata|body|[SecretMetadata](#schemasecretmetadata)|false|Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.<br>|

> Example responses

> 200 Response

```json
{
  "secretID": "string",
  "name": "string",
  "currentVersion": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 502 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated the secret|[Secret](#schemasecret)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|502|Bad Gateway|Backend error|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Delete a secret

> Code samples

```bash
curl https://api.e2b.dev/secrets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /secrets/{secretID}`

Revoke the secret and schedule its versions for cleanup.

<h3 id="delete-a-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|secretID|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 502 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 504 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-a-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted the secret|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|502|Bad Gateway|Backend error|[Error](#schemaerror)|
|504|Gateway Timeout|Backend timeout|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-default">Default</h1>

## Health check

> Code samples

```bash
curl https://api.e2b.dev/health \
  -H 'Accept: application/json'
```

`GET /health`

Health check

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="health-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The service is healthy|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|503|Service Unavailable|The service is starting up or draining|Inline|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="e2b-api-snapshots">snapshots</h1>

## List snapshots

> Code samples

```bash
curl https://api.e2b.dev/snapshots \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /snapshots`

List all snapshots for the team

<h3 id="list-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|query|string|false|none|
|name|query|string|false|Filter snapshots by name or ID, optionally tag-qualified (e.g. "my-snapshot", "my-team/my-snapshot" or "my-snapshot:v1").|
|limit|query|integer(int32)|false|Maximum number of items to return per page|
|nextToken|query|string|false|Cursor to start the list from|

> Example responses

> 200 Response

```json
[
  {
    "snapshotID": "string",
    "names": [
      "string"
    ]
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned snapshots|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SnapshotInfo](#schemasnapshotinfo)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-unstable">unstable</h1>

## Search templates

> Code samples

```bash
curl https://api.e2b.dev/unstable/templates/search \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /unstable/templates/search`

Lists the team's templates together with the platform's public default templates, which carry `isDefault: true`, with search, a visibility filter and sorts. Default templates are not listed to teams on a dedicated cluster, and those owned by another team carry zero or null usage fields. Results are newest first unless `sort` says otherwise; `nextCursor` continues the listing and is only valid with the same `sort`. For E2B's own clients: it may change or disappear without notice.


<h3 id="search-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Case-insensitive substring match on the template ID, its aliases and its names.|
|sort|query|string|false|Sort column and direction.|
|public|query|boolean|false|Only list public (true) or only non-public (false) templates.|
|limit|query|integer(int32)|false|Maximum number of templates to return per page.|
|cursor|query|string|false|Cursor returned by the previous page in `{sort}\|{value}\|{templateID}` format. Rejected if its sort does not match the request.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|created_at_desc|
|sort|created_at_asc|
|sort|updated_at_desc|
|sort|updated_at_asc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "templateID": "string",
      "buildID": "string",
      "cpuCount": 1,
      "maxCpuCount": {},
      "memoryMB": 128,
      "diskSizeMB": 0,
      "public": true,
      "aliases": [
        "string"
      ],
      "names": [
        "string"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": null
      },
      "lastSpawnedAt": "1970-01-01T00:00:00Z",
      "spawnCount": 0,
      "buildCount": 0,
      "envdVersion": "string",
      "buildStatus": "building",
      "isDefault": true,
      "description": "string"
    }
  ],
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="search-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the templates|[TemplateSearchResponse](#schematemplatesearchresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## List team builds

> Code samples

```bash
curl https://api.e2b.dev/unstable/builds \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /unstable/builds`

Lists the team's builds, newest first, with an optional filter by build ID, template ID or template alias and by status. `nextCursor` continues the listing. For E2B's own clients: it may change or disappear without notice.


<h3 id="list-team-builds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|build_id_or_template|query|string|false|Optional filter by build identifier, template identifier, or template alias.|
|statuses|query|[[BuildStatus](#schemabuildstatus)]|false|Comma-separated list of build statuses to include.|
|limit|query|integer(int32)|false|Maximum number of builds to return per page.|
|cursor|query|string|false|Cursor returned by the previous list response in `created_at\|build_id` format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statuses|building|
|statuses|failed|
|statuses|success|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "template": "string",
      "templateId": "string",
      "status": "building",
      "statusMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "cpuCount": 0,
      "memoryMB": 0,
      "diskSizeMB": 0,
      "envdVersion": "string"
    }
  ],
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-team-builds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned paginated builds.|[BuildsListResponse](#schemabuildslistresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Build statuses

> Code samples

```bash
curl 'https://api.e2b.dev/unstable/builds/statuses?build_ids=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /unstable/builds/statuses`

Returns the statuses of the team's builds with the given IDs; IDs of other teams' builds are left out. For E2B's own clients: it may change or disappear without notice.


<h3 id="build-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|build_ids|query|[string(uuid)]|true|Comma-separated list of build IDs to get statuses for.|

> Example responses

> 200 Response

```json
{
  "buildStatuses": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "building",
      "finishedAt": "1970-01-01T00:00:00Z",
      "statusMessage": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="build-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned build statuses|[BuildsStatusesResponse](#schemabuildsstatusesresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## Build details

> Code samples

```bash
curl https://api.e2b.dev/unstable/builds/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /unstable/builds/{buildID}`

Returns a build of the team with the names of its template. For E2B's own clients: it may change or disappear without notice.


<h3 id="build-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|buildID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "names": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "status": "building",
  "statusMessage": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="build-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned build details.|[BuildInfo](#schemabuildinfo)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-admin">admin</h1>

## List nodes

> Code samples

```bash
curl https://api.e2b.dev/nodes \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /nodes`

List all nodes

<h3 id="list-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|query|string(uuid)|false|Identifier of the cluster|

> Example responses

> 200 Response

```json
[
  {
    "version": "string",
    "commit": "string",
    "id": "string",
    "serviceInstanceID": "string",
    "clusterID": "string",
    "machineInfo": {
      "cpuFamily": "string",
      "cpuModel": "string",
      "cpuModelName": "string",
      "cpuArchitecture": "string"
    },
    "status": "ready",
    "statusChangedAt": "1970-01-01T00:00:00Z",
    "statusOwner": "string",
    "capabilities": [
      "string"
    ],
    "sandboxCount": 0,
    "maxSandboxes": 0,
    "outstandingWork": 0,
    "metrics": {
      "allocatedCPU": 0,
      "cpuPercent": 0,
      "cpuCount": 0,
      "allocatedMemoryBytes": 0,
      "memoryUsedBytes": 0,
      "memoryTotalBytes": 0,
      "hugePagesTotal": 0,
      "hugePagesUsed": 0,
      "hugePagesReserved": 0,
      "hugePageSizeBytes": 0,
      "disks": [
        {
          "mountPoint": "string",
          "device": "string",
          "filesystemType": "string",
          "usedBytes": 0,
          "totalBytes": 0
        }
      ]
    },
    "createSuccesses": 0,
    "createFails": 0,
    "sandboxStartingCount": 0
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned all nodes|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-nodes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Node](#schemanode)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Node info

> Code samples

```bash
curl https://api.e2b.dev/nodes/string \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /nodes/{nodeID}`

Get node info

<h3 id="node-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeID|path|string|true|none|
|clusterID|query|string(uuid)|false|Identifier of the cluster|

> Example responses

> 200 Response

```json
{
  "clusterID": "string",
  "version": "string",
  "commit": "string",
  "id": "string",
  "serviceInstanceID": "string",
  "machineInfo": {
    "cpuFamily": "string",
    "cpuModel": "string",
    "cpuModelName": "string",
    "cpuArchitecture": "string"
  },
  "status": "ready",
  "statusChangedAt": "1970-01-01T00:00:00Z",
  "statusOwner": "string",
  "capabilities": [
    "string"
  ],
  "sandboxCount": 0,
  "maxSandboxes": 0,
  "outstandingWork": 0,
  "metrics": {
    "allocatedCPU": 0,
    "cpuPercent": 0,
    "cpuCount": 0,
    "allocatedMemoryBytes": 0,
    "memoryUsedBytes": 0,
    "memoryTotalBytes": 0,
    "hugePagesTotal": 0,
    "hugePagesUsed": 0,
    "hugePagesReserved": 0,
    "hugePageSizeBytes": 0,
    "disks": [
      {
        "mountPoint": "string",
        "device": "string",
        "filesystemType": "string",
        "usedBytes": 0,
        "totalBytes": 0
      }
    ]
  },
  "createSuccesses": 0,
  "createFails": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="node-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the node|[NodeDetail](#schemanodedetail)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Change node status

> Code samples

```bash
curl https://api.e2b.dev/nodes/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "clusterID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "ready",
    "owner": "string",
    "force": true
  }'
```

`POST /nodes/{nodeID}`

Change status of a node

> Body parameter

```json
{
  "clusterID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "ready",
  "owner": "string",
  "force": true
}
```

<h3 id="change-node-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeID|path|string|true|none|
|body|body|[NodeStatusChange](#schemanodestatuschange)|false|none|
|» clusterID|body|string(uuid)|false|Identifier of the cluster|
|» status|body|[NodeStatus](#schemanodestatus)|true|Status of the node.<br>- standby: the node refuses new sandboxes and keeps serving the ones it holds; it can return to ready.<br>- not_ready: the node is starting and cannot take new work yet. It becomes ready by itself and cannot be set through the API.<br>|
|» owner|body|string|false|Owner of a standby override; required to release a standby that carries one|
|» force|body|boolean|false|Apply the status and owner regardless of the recorded owner|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ready|
|» status|draining|
|» status|connecting|
|» status|unhealthy|
|» status|standby|
|» status|shutting_down|
|» status|not_ready|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="change-node-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The node status was changed successfully|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Node sandboxes

> Code samples

```bash
curl https://api.e2b.dev/nodes/string/sandboxes \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /nodes/{nodeID}/sandboxes`

List the sandboxes the API confirms are running on the node

<h3 id="node-sandboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeID|path|string|true|none|
|clusterID|query|string(uuid)|false|Identifier of the cluster|

> Example responses

> 200 Response

```json
{
  "nodeID": "string",
  "observedAt": "1970-01-01T00:00:00Z",
  "items": [
    {
      "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sandboxID": "string",
      "executionID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "lifecycleHoldUntil": "1970-01-01T00:00:00Z",
      "networkMode": "string",
      "volumesAttached": true
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="node-sandboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the node's sandboxes|[NodeSandboxes](#schemanodesandboxes)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Kill all sandboxes for a team

> Code samples

```bash
curl https://api.e2b.dev/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/sandboxes/kill \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`POST /admin/teams/{teamID}/sandboxes/kill`

Kills all sandboxes for the specified team

<h3 id="kill-all-sandboxes-for-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|

> Example responses

> 200 Response

```json
{
  "killedCount": 0,
  "failedCount": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="kill-all-sandboxes-for-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully killed sandboxes|[AdminSandboxKillResult](#schemaadminsandboxkillresult)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Count running sandboxes by team

> Code samples

```bash
curl https://api.e2b.dev/admin/sandboxes/running-counts \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /admin/sandboxes/running-counts`

Returns a shared snapshot normally refreshed after five seconds. A
sandbox transitioning out of running can remain counted until removal.


> Example responses

> 200 Response

```json
{
  "property1": 1,
  "property2": 1
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="count-running-sandboxes-by-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Running sandbox counts keyed by team ID|[AdminTeamRunningSandboxCounts](#schemaadminteamrunningsandboxcounts)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Get a sandbox's team and state

> Code samples

```bash
curl https://api.e2b.dev/admin/sandboxes/string \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /admin/sandboxes/{sandboxID}`

Reads the team and state of a sandbox from its latest lifecycle event.
The state lags the sandbox while that event is in flight. A sandbox
whose events have expired is not found.


<h3 id="get-a-sandboxs-team-and-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "sandboxID": "string",
  "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "running"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="get-a-sandboxs-team-and-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The sandbox, its team and its state|[AdminSandbox](#schemaadminsandbox)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Sandbox overview

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/sandboxes/string/overview \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/sandboxes/{sandboxID}/overview`

Reads a sandbox's team, snapshot template, most recent pause and newest
default-tag build from the database. The team comes from the
stopped-sandbox log, or from the snapshot when the sandbox has not
stopped. Returns 404 when neither knows the sandbox. A sandbox without
a snapshot returns null `snapshotTemplateId`, `lastPause` and
`latestBuild`.


<h3 id="sandbox-overview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "sandboxId": "string",
  "team": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "email": "string"
  },
  "snapshotTemplateId": "string",
  "lastPause": {
    "kind": {},
    "autoPause": true,
    "autoPauseKind": {}
  },
  "latestBuild": {
    "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "templateId": "string",
    "tag": "string",
    "status": "string",
    "statusGroup": {},
    "clusterNodeId": "string",
    "assignedAt": "1970-01-01T00:00:00Z",
    "isCurrent": true,
    "restorable": true
  },
  "buildCount": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="sandbox-overview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The sandbox overview|[AdminSandboxOverview](#schemaadminsandboxoverview)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List the builds of a sandbox's snapshot template

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/sandboxes/string/builds \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/sandboxes/{sandboxID}/builds`

Lists the build assignments of the template that holds the sandbox's
snapshot under one tag. Assignments without a creation time are left
out. A sandbox without a snapshot returns no items and a null
`snapshotTemplateID`; this route does not report whether the sandbox
exists.


<h3 id="list-the-builds-of-a-sandboxs-snapshot-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|statusGroup|query|[[AdminSandboxBuildStatusGroup](#schemaadminsandboxbuildstatusgroup)]|false|Only list builds in these status groups, comma-separated. Omit to list every group.|
|tag|query|string|false|Tag whose assignments are listed|
|order|query|[OrderDirection](#schemaorderdirection)|false|Direction of the assignment time order|
|limit|query|integer(int32)|false|Maximum number of builds to return|
|offset|query|integer(int32)|false|Number of matching builds to skip|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statusGroup|pending|
|statusGroup|in_progress|
|statusGroup|ready|
|statusGroup|failed|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "templateID": "string",
      "tag": "string",
      "status": "string",
      "statusGroup": "pending",
      "clusterNodeID": "string",
      "assignedAt": "1970-01-01T00:00:00Z",
      "isCurrent": true,
      "restorable": true
    }
  ],
  "total": 0,
  "snapshotTemplateID": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-the-builds-of-a-sandboxs-snapshot-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A page of the snapshot template's build assignments|[AdminSandboxBuildList](#schemaadminsandboxbuildlist)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Make a build the current build of a sandbox's snapshot

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/sandboxes/string/builds/restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /unstable/admin/sandboxes/{sandboxID}/builds/restore`

Assigns a ready build of the sandbox's snapshot template to the template
again under the default tag, so the sandbox resumes from that build.
The snapshot takes the restored build's kind, filesystem-only or
memory.
Answers 404 when the sandbox has no snapshot, its snapshot template is
deleted, or the build is not assigned to that template under the
default tag, and 409 when the build is not ready or is already the
current build.


> Body parameter

```json
{
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="make-a-build-the-current-build-of-a-sandboxs-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|body|body|[AdminSandboxBuildRestoreRequest](#schemaadminsandboxbuildrestorerequest)|true|none|
|» buildID|body|string(uuid)|true|Build to make current. It must be ready and already assigned to the<br>sandbox's snapshot template under the default tag.<br>|

> Example responses

> 200 Response

```json
{
  "sandboxID": "string",
  "templateID": "string",
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "assignedAt": "1970-01-01T00:00:00Z",
  "previousBuildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="make-a-build-the-current-build-of-a-sandboxs-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The build is now the snapshot template's current default build|[AdminSandboxBuildRestoreResult](#schemaadminsandboxbuildrestoreresult)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Cancel all builds for a team

> Code samples

```bash
curl https://api.e2b.dev/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/builds/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`POST /admin/teams/{teamID}/builds/cancel`

Cancels all in-progress and pending builds for the specified team

<h3 id="cancel-all-builds-for-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|

> Example responses

> 200 Response

```json
{
  "cancelledCount": 0,
  "failedCount": 0
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="cancel-all-builds-for-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully cancelled builds|[AdminBuildCancelResult](#schemaadminbuildcancelresult)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List team API keys as admin

> Code samples

```bash
curl https://api.e2b.dev/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/api-keys \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /admin/teams/{teamID}/api-keys`

Lists a team's API keys for internal service workflows. Unlike `GET /api-keys`, it does not resolve the team, so it also answers for a banned team.

<h3 id="list-team-api-keys-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "mask": {
      "prefix": "string",
      "valueLength": 0,
      "maskedValuePrefix": "string",
      "maskedValueSuffix": "string"
    },
    "createdAt": "1970-01-01T00:00:00Z",
    "createdBy": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": null
    },
    "lastUsed": "1970-01-01T00:00:00Z"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-team-api-keys-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the team's API keys|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="list-team-api-keys-as-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TeamAPIKey](#schemateamapikey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Create team API key as admin

> Code samples

```bash
curl https://api.e2b.dev/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`POST /admin/teams/{teamID}/api-keys`

Creates a team API key for internal service workflows.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-team-api-key-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|
|body|body|[NewTeamAPIKey](#schemanewteamapikey)|true|none|
|» name|body|string|true|Name of the API key|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "key": "string",
  "mask": {
    "prefix": "string",
    "valueLength": 0,
    "maskedValuePrefix": "string",
    "maskedValueSuffix": "string"
  },
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastUsed": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-team-api-key-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Team API key created successfully|[CreatedTeamAPIKey](#schemacreatedteamapikey)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Delete team API key as admin

> Code samples

```bash
curl https://api.e2b.dev/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/api-keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`DELETE /admin/teams/{teamID}/api-keys/{apiKeyID}`

Deletes a team API key for internal service workflows.

<h3 id="delete-team-api-key-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|
|apiKeyID|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-team-api-key-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Team API key deleted successfully|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Read team and cluster names for telemetry.

<a id="opIdmanagementTelemetryNames"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/telemetry/names \
  -H 'Accept: application/json'
```

`GET /unstable/management/telemetry/names`

Requires a direct mutual TLS connection from the configured telemetry reader service identity. Bearer tokens and forwarded identity headers are not accepted. Returns regional team and cluster names without connection credentials. Deleted projects and clusters being deleted are omitted.

> Example responses

> 200 Response

```json
{
  "teams": {
    "property1": {
      "name": "string",
      "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "property2": {
      "name": "string",
      "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "clusters": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "clientId": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="read-team-and-cluster-names-for-telemetry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current regional names.|[TelemetryNames](#schematelemetrynames)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Register a cluster.

<a id="opIdmanagementRegisterCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "endpoint": "string",
    "endpoint_tls": true,
    "token": "string",
    "sandbox_proxy_domain": "string",
    "auth_org_id": "string",
    "telemetry_client_id": "string"
  }'
```

`PUT /unstable/management/clusters/{clusterID}`

A cluster registered here for the first time starts with deletion protection turned off. Registering an existing cluster again with the same auth organization updates its endpoint, TLS setting, sandbox proxy domain and token, while preserving its regional display name and deletion protection, then sets a telemetry client ID the cluster does not have yet. An omitted telemetry client ID preserves the stored one. A different auth organization returns a conflict with error_code cluster_registration_conflict, and so does a telemetry client ID different from the stored one, after the endpoint, TLS setting, sandbox proxy domain and token are updated. An invalid registration returns 400 with error_code cluster_registration_invalid.

> Body parameter

```json
{
  "name": "string",
  "endpoint": "string",
  "endpoint_tls": true,
  "token": "string",
  "sandbox_proxy_domain": "string",
  "auth_org_id": "string",
  "telemetry_client_id": "string"
}
```

<h3 id="register-a-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|body|body|[ManagementClusterRegistrationRequest](#schemamanagementclusterregistrationrequest)|true|none|
|» name|body|string|true|none|
|» endpoint|body|string|true|none|
|» endpoint_tls|body|boolean|true|none|
|» token|body|string|true|none|
|» sandbox_proxy_domain|body|string \| null|false|none|
|» auth_org_id|body|string \| null|false|none|
|» telemetry_client_id|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="register-a-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cluster registration is present.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Delete a cluster and its environments.

<a id="opIdmanagementDeleteCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /unstable/management/clusters/{clusterID}`

Deletes a cluster after all team assignments are detached. Deletion protection on the cluster rejects the deletion, and so does a live team assignment, before anything changes. In one transaction it then soft-deletes every live template, snapshot template and paused sandbox snapshot on the cluster, releases their aliases, and releases all environment references while preserving environment and build history, and afterwards the cluster service deletes the cluster. A team assigned between those two steps returns a conflict with the templates already deleted; repeating the deletion once that team is detached completes it. The local cluster's nil ID is rejected. Repeating a completed deletion succeeds.

<h3 id="delete-a-cluster-and-its-environments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-a-cluster-and-its-environments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cluster is absent.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Update the telemetry identity of an existing cluster.

<a id="opIdmanagementUpdateClusterTelemetry"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/telemetry \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "telemetry_client_id": "string"
  }'
```

`PUT /unstable/management/clusters/{clusterID}/telemetry`

Changes only the telemetry client mapping. Missing or deleting clusters are refused; connection settings, credentials and names are preserved.

> Body parameter

```json
{
  "telemetry_client_id": "string"
}
```

<h3 id="update-the-telemetry-identity-of-an-existing-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|body|body|object|true|none|
|» telemetry_client_id|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-the-telemetry-identity-of-an-existing-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Telemetry identity updated.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## List the projects assigned to a cluster.

<a id="opIdmanagementListClusterProjects"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /unstable/management/clusters/{clusterID}/projects`

Returns the ID of every project whose team is assigned to the cluster, whichever way it was assigned. A deleted project is never assigned. An absent cluster has no projects.

<h3 id="list-the-projects-assigned-to-a-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 200 Response

```json
{
  "project_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-the-projects-assigned-to-a-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The projects assigned to the cluster.|[ManagementClusterProjects](#schemamanagementclusterprojects)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Record that a cluster is being deleted.

<a id="opIdmanagementRequestClusterDeletion"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/deletion \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /unstable/management/clusters/{clusterID}/deletion`

Records that the caller is deleting the cluster, for a caller that deletes the cluster's teams before the cluster itself. Refused while the cluster has deletion protection turned on; a protection change in flight commits before or after the check, never between. Once recorded, deletion protection cannot be turned on, so the cluster delete that follows is not refused for protection, and no team can be newly assigned to the cluster. An assignment either commits before the deletion is recorded, where the caller's next project listing finds it, or is refused with cluster_assignment_cluster_deleting. Succeeds when the cluster is absent. Repeating the request succeeds. The local cluster's nil ID is rejected.

<h3 id="record-that-a-cluster-is-being-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="record-that-a-cluster-is-being-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The deletion is recorded, or the cluster is absent.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|409|Conflict|The cluster has deletion protection turned on.|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Check cluster destroy readiness.

<a id="opIdmanagementClusterDestroyReadiness"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/destroy-readiness \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /unstable/management/clusters/{clusterID}/destroy-readiness`

Checks whether the cluster has deletion protection turned on, or more than one team uses this exact cluster, either as an assigned team or as the owner of active templates or snapshots on it. One team's own templates and snapshots do not block this check, because deleting the cluster soft-deletes them. Soft-deleted history does not count. Returns success if the cluster is absent. This read does not change resources or prevent later assignments or template creation.

<h3 id="check-cluster-destroy-readiness-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="check-cluster-destroy-readiness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|At most one team uses the cluster.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|409|Conflict|The cluster has deletion protection turned on, or more than one team uses it and the other teams and their templates must move off it before destroying the cluster.|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Assign a cluster to a project.

<a id="opIdmanagementAssignProjectCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/cluster/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /unstable/management/projects/{projectID}/cluster/{clusterID}`

Assigns the cluster when the project has no cluster assigned. Replaying the identical assignment succeeds; replacing a different assigned cluster returns a conflict. Answers 404 when the project is missing or deleted.

<h3 id="assign-a-cluster-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="assign-a-cluster-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cluster is assigned to the project.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Detach a cluster assignment from a project.

<a id="opIdmanagementDetachProjectCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/cluster/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /unstable/management/projects/{projectID}/cluster/{clusterID}`

Answers 404 when the project is missing or deleted.

<h3 id="detach-a-cluster-assignment-from-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="detach-a-cluster-assignment-from-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The matching assignment is absent.|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Create or reconcile a project.

<a id="opIdmanagementUpsertProject"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "slug": "string",
    "email": "string"
  }'
```

`PUT /unstable/management/projects/{projectID}`

> Body parameter

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "slug": "string",
  "email": "string"
}
```

<h3 id="create-or-reconcile-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|body|body|[ManagementProjectUpsertRequest](#schemamanagementprojectupsertrequest)|true|none|
|» cluster_id|body|string(uuid)|false|Cluster assignment to synchronize. Omission preserves the existing assignment.|
|» name|body|string|true|none|
|» slug|body|string|true|Changing it renames the project, and its template names follow: each name held under an earlier slug is also given under the new one, and the old names keep working. A name the new slug already holds is left as it is. A slug already held on this control plane is a 409, on a rename as much as on a create.|
|» email|body|string|true|Contact address recorded on the project.|

> Example responses

> 200 Response

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "slug": "string",
  "email": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 201 Response

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "slug": "string",
  "email": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-or-reconcile-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Existing project reconciled.|[ManagementProject](#schemamanagementproject)|
|201|Created|Project created.|[ManagementProject](#schemamanagementproject)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Soft-delete a project.

<a id="opIdmanagementDeleteProject"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /unstable/management/projects/{projectID}`

Marks the project deleted and blocked, releases its cluster assignment, scrubs its name and email to DELETED and its slug to deleted-<project ID>, which releases the old slug for reuse, deletes its memberships and API keys, soft-deletes its templates and snapshots, and enqueues the teardown of its running sandboxes, all in one transaction. The project row remains. Afterwards the project answers 404 to other management writes. Repeating the call answers 204 and repeats every step except the deletion time: it re-blocks and re-scrubs the project, clears a cluster assignment written since, deletes any memberships, keys, templates or snapshots created since, and enqueues the teardown again.

<h3 id="soft-delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="soft-delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Project is deleted and its teardown is enqueued.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Apply one versioned project member projection.

<a id="opIdmanagementApplyProjectMember"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/members/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "revision": 1,
    "present": true,
    "is_default": false,
    "role": "owner",
    "identities": [
      {
        "issuer": "string",
        "subject": "string"
      }
    ]
  }'
```

`PUT /unstable/management/projects/{projectID}/members/{userID}`

Applies the newest desired presence for one project member. An older or duplicate revision is accepted without changing target state.

> Body parameter

```json
{
  "revision": 1,
  "present": true,
  "is_default": false,
  "role": "owner",
  "identities": [
    {
      "issuer": "string",
      "subject": "string"
    }
  ]
}
```

<h3 id="apply-one-versioned-project-member-projection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|userID|path|string(uuid)|true|none|
|body|body|[ManagementProjectMemberApplyRequest](#schemamanagementprojectmemberapplyrequest)|true|none|
|» revision|body|integer(int64)|true|none|
|» present|body|boolean|true|none|
|» is_default|body|boolean|false|Whether this membership is the user's default team. Omitted requests from older sources remain non-default.|
|» role|body|string|false|The member's effective role on the project. A viewer may only read. An omitted role keeps the stored one, and a new member without one is stored as member.|
|» identities|body|[[ManagementProjectMemberIdentity](#schemamanagementprojectmemberidentity)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|owner|
|» role|member|
|» role|viewer|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="apply-one-versioned-project-member-projection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Membership projection is applied or already superseded.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Reconcile effective limits for a project.

<a id="opIdmanagementUpsertProjectLimits"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/limits \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "revision": 1,
    "concurrent_sandboxes": 1,
    "max_sandbox_length_hours": 1,
    "max_vcpu": 1,
    "max_ram_mb": 1,
    "disk_mb": 1,
    "concurrent_template_builds": 1,
    "events_ttl_days": 1,
    "default_free_disk_size_mb": 0,
    "max_free_disk_size_mb": 1,
    "max_disk_size_mb": 1,
    "api_team_rps_list": 0,
    "api_team_rps_delete": 0,
    "max_secrets": 1,
    "decided_at": "1970-01-01T00:00:00Z"
  }'
```

`PUT /unstable/management/projects/{projectID}/limits`

> Body parameter

```json
{
  "revision": 1,
  "concurrent_sandboxes": 1,
  "max_sandbox_length_hours": 1,
  "max_vcpu": 1,
  "max_ram_mb": 1,
  "disk_mb": 1,
  "concurrent_template_builds": 1,
  "events_ttl_days": 1,
  "default_free_disk_size_mb": 0,
  "max_free_disk_size_mb": 1,
  "max_disk_size_mb": 1,
  "api_team_rps_list": 0,
  "api_team_rps_delete": 0,
  "max_secrets": 1,
  "decided_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="reconcile-effective-limits-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|body|body|[ManagementProjectLimits](#schemamanagementprojectlimits)|true|none|
|» revision|body|integer(int64)|true|The caller's version of this answer, raised whenever the limits it resolved for the project change. Delivery is over a network, so two pushes can be in flight at once and arrive in either order: this side stores the revision it accepted and drops a delivery at or below it, which is what keeps a delayed retry from putting the project back on limits it has already left.<br><br>Comparable only against earlier revisions for the same project.|
|» concurrent_sandboxes|body|integer(int32)|true|none|
|» max_sandbox_length_hours|body|integer(int32)|true|none|
|» max_vcpu|body|integer(int32)|true|none|
|» max_ram_mb|body|integer(int64)|true|none|
|» disk_mb|body|integer(int64)|true|none|
|» concurrent_template_builds|body|integer(int32)|true|none|
|» events_ttl_days|body|integer(int32)|true|none|
|» default_free_disk_size_mb|body|integer(int64)|true|The default free-space growth target when a template build request omits one. May sit anywhere at or below the maximum free-space growth target, and usually sits well below it; a delivery whose default exceeds the maximum is rejected.|
|» max_free_disk_size_mb|body|integer(int64)|false|The most a template build may request as its free-space growth target.|
|» max_disk_size_mb|body|integer(int64)|false|The same ceiling as max_free_disk_size_mb, under the name it was first published with. Kept until every deployed sender and receiver speaks the other name.|
|» api_team_rps_list|body|integer(int64)|true|Requests per second a project may make to each list endpoint. Zero disables the limit.|
|» api_team_rps_delete|body|integer(int64)|true|Requests per second a project may make to each delete endpoint. Zero disables the limit.|
|» max_secrets|body|integer(int32)|true|Live secrets the project may hold.|
|» decided_at|body|[ManagementDecidedAt](#schemamanagementdecidedat)|false|When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.|
|» *anyOf*|body|object|false|none|
|» *anyOf*|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="reconcile-effective-limits-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Effective limits are synchronized.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Apply a project's settings revision.

<a id="opIdmanagementSetProjectSettings"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "revision": 1,
    "settings": {
      "sandboxSettings": {
        "defaultAllowPublicTraffic": true
      }
    }
  }'
```

`PUT /unstable/management/projects/{projectID}/settings`

Replaces the complete project settings document when the revision is newer than the stored revision. Omitted settings are removed. Older and duplicate revisions leave the stored document unchanged. Every successful delivery invalidates the cached team. Answers 404 when the project is missing or deleted.

> Body parameter

```json
{
  "revision": 1,
  "settings": {
    "sandboxSettings": {
      "defaultAllowPublicTraffic": true
    }
  }
}
```

<h3 id="apply-a-projects-settings-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|body|body|[ManagementProjectSettingsRequest](#schemamanagementprojectsettingsrequest)|true|none|
|» revision|body|integer(int64)|true|Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.|
|» settings|body|[ProjectSettings](#schemaprojectsettings)|true|The project's stored settings. PUT replaces the complete document.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="apply-a-projects-settings-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Project settings are applied or already superseded.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Apply a project's block state.

<a id="opIdmanagementApplyProjectBlock"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/block \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "revision": 1,
    "blocked": true,
    "reason": "string",
    "decided_at": "1970-01-01T00:00:00Z"
  }'
```

`PUT /unstable/management/projects/{projectID}/block`

Records whether the project is refused billable work, which the auth path reads before it lets a sandbox start. An older or duplicate revision is accepted without changing target state. Answers 404 when the project is missing or deleted.

> Body parameter

```json
{
  "revision": 1,
  "blocked": true,
  "reason": "string",
  "decided_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="apply-a-projects-block-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|body|body|[ManagementProjectBlockRequest](#schemamanagementprojectblockrequest)|true|none|
|» revision|body|integer(int64)|true|Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.|
|» blocked|body|boolean|true|Whether the project is refused billable work.|
|» reason|body|string|false|Reason included in blocked-request errors. Cleared when blocked is false.|
|» decided_at|body|[ManagementDecidedAt](#schemamanagementdecidedat)|false|When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="apply-a-projects-block-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Block state is applied or already superseded.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## Apply a project's ban state.

<a id="opIdmanagementApplyProjectBan"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/management/projects/497f6eca-6276-4993-bfeb-53cbbbba6f08/ban \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "revision": 1,
    "banned": true,
    "decided_at": "1970-01-01T00:00:00Z"
  }'
```

`PUT /unstable/management/projects/{projectID}/ban`

Records whether the project is banned. Authentication refuses a banned project's API keys and members. A revision that turns the ban on also kills the project's running sandboxes and cancels its builds in the background, and retries while the project stays banned and any of them remain. The newest revision wins: an older or duplicate revision is accepted without changing target state. Answers 404 when the project is missing or deleted.

> Body parameter

```json
{
  "revision": 1,
  "banned": true,
  "decided_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="apply-a-projects-ban-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectID|path|string(uuid)|true|none|
|body|body|[ManagementProjectBanRequest](#schemamanagementprojectbanrequest)|true|none|
|» revision|body|integer(int64)|true|Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.|
|» banned|body|boolean|true|Whether the project is refused at authentication.|
|» decided_at|body|[ManagementDecidedAt](#schemamanagementdecidedat)|false|When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="apply-a-projects-ban-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Ban state is applied or already superseded.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminJWTAuth
</aside>

## List teams as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/teams/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "projectIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "search": "string",
    "hideBanned": false,
    "hideBlocked": false,
    "createdAfter": "1970-01-01T00:00:00Z",
    "createdBefore": "1970-01-01T00:00:00Z",
    "sortBy": "name",
    "sortOrder": {},
    "limit": 50,
    "offset": 0
  }'
```

`POST /unstable/admin/teams/query`

Lists teams matching the filters in the request body, with each team's
member count, and its running sandbox count when sorted by running
sandboxes. A read despite the POST: the body carries a project ID list
too long for a query string.


> Body parameter

```json
{
  "projectIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "search": "string",
  "hideBanned": false,
  "hideBlocked": false,
  "createdAfter": "1970-01-01T00:00:00Z",
  "createdBefore": "1970-01-01T00:00:00Z",
  "sortBy": "name",
  "sortOrder": {},
  "limit": 50,
  "offset": 0
}
```

<h3 id="list-teams-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminTeamListRequest](#schemaadminteamlistrequest)|true|none|
|» projectIds|body|[string(uuid)]|false|Only list these teams. An empty list matches no team; omit it to list every team.|
|» search|body|string|false|A team ID, as a UUID or public project ID, matches that team exactly. Any other text matches a substring of the email, name or slug, ignoring case.|
|» hideBanned|body|boolean|false|Leave out banned teams|
|» hideBlocked|body|boolean|false|Leave out blocked teams|
|» createdAfter|body|string(date-time)|false|Only list teams created at or after this time|
|» createdBefore|body|string(date-time)|false|Only list teams created at or before this time|
|» sortBy|body|[AdminTeamListSortField](#schemaadminteamlistsortfield)|false|Column to order by, with newer teams first among equal values. Omit it<br>to list the newest teams first.<br>|
|» sortOrder|body|object|false|Ignored when `sortBy` is omitted.|
|» limit|body|integer(int32)|false|Maximum number of teams to return|
|» offset|body|integer(int32)|false|Number of matching teams to skip|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» sortBy|name|
|» sortBy|email|
|» sortBy|createdAt|
|» sortBy|runningSandboxes|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "string",
      "name": "string",
      "isBanned": true,
      "isBlocked": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "memberCount": 0,
      "runningSandboxCount": 0
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-teams-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The page of matching teams and the number of all matching teams|[AdminTeamList](#schemaadminteamlist)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Ban teams

<a id="opIdadminBanTeams"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/teams/bans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "teamIDs": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /unstable/admin/teams/bans`

Bans up to 100 teams at once, as
`PUT /unstable/admin/teams/{teamID}/ban` does, except that every
team's ban is stored before any team's sandboxes are killed or builds
cancelled, and the kills and cancellations of all teams share one time
budget. One team's failure does not stop the others; the response sorts
every requested team into banned, not found or failed. The work
continues if the caller disconnects.


> Body parameter

```json
{
  "teamIDs": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="ban-teams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminTeamsBanRequest](#schemaadminteamsbanrequest)|true|none|
|» teamIDs|body|[string(uuid)]|true|none|

> Example responses

> 200 Response

```json
{
  "banned": [
    {
      "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sandboxesKilled": 0,
      "sandboxesFailedToKill": 0,
      "sandboxKillError": "string",
      "buildsCancelled": 0,
      "buildsFailedToCancel": 0,
      "buildCancelError": "string"
    }
  ],
  "notFound": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "failed": [
    {
      "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "error": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="ban-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The outcome for every requested team|[AdminTeamsBanResult](#schemaadminteamsbanresult)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Team as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/teams/{teamID}`

Returns a team with its sandbox scheduling labels and cluster. It also answers for a banned or blocked team.

<h3 id="team-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "string",
  "name": "string",
  "slug": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "isBlocked": true,
  "isBanned": true,
  "blockedReason": "string",
  "sandboxSchedulingLabels": [
    "string"
  ],
  "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "clusterName": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="team-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The team|[AdminTeam](#schemaadminteam)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Replace a team's sandbox scheduling labels

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/scheduling-labels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "labels": [
      "string"
    ]
  }'
```

`PUT /unstable/admin/teams/{teamID}/scheduling-labels`

Replaces the labels that place the team's new sandboxes on matching
nodes. Labels are deduplicated, keeping the first occurrence of each.


> Body parameter

```json
{
  "labels": [
    "string"
  ]
}
```

<h3 id="replace-a-teams-sandbox-scheduling-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|
|body|body|[AdminTeamSchedulingLabels](#schemaadminteamschedulinglabels)|true|none|
|» labels|body|[string]|true|The team's full set of labels. A request's labels replace the current ones.|

> Example responses

> 200 Response

```json
{
  "labels": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="replace-a-teams-sandbox-scheduling-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The labels as written|[AdminTeamSchedulingLabels](#schemaadminteamschedulinglabels)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Ban a team

<a id="opIdadminBanTeam"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/ban \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`PUT /unstable/admin/teams/{teamID}/ban`

Marks the team as banned so its API keys stop authenticating, then
kills its sandboxes and cancels its builds. The ban is stored first:
a failure to kill or cancel is reported in the result and does not
undo it. Killing and cancelling stop after a fixed time budget, and a
step cut short is reported as failed. Banning an already banned team
repeats the kill and cancel. The work continues if the caller
disconnects.


<h3 id="ban-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|

> Example responses

> 200 Response

```json
{
  "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sandboxesKilled": 0,
  "sandboxesFailedToKill": 0,
  "sandboxKillError": "string",
  "buildsCancelled": 0,
  "buildsFailedToCancel": 0,
  "buildCancelError": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="ban-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The team is banned|[AdminTeamBanResult](#schemaadminteambanresult)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Unban a team

<a id="opIdadminUnbanTeam"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/teams/497f6eca-6276-4993-bfeb-53cbbbba6f08/ban \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`DELETE /unstable/admin/teams/{teamID}/ban`

Clears the team's ban. Idempotent.

<h3 id="unban-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamID|path|string(uuid)|true|Team ID|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="unban-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The team is not banned|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List clusters as admin

<a id="opIdadminListClusters"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/clusters`

Lists the registered clusters with the number of teams assigned to each. Never returns a cluster's token. The local cluster is not a registered cluster and is not listed.

<h3 id="list-clusters-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Maximum number of clusters to return|
|offset|query|integer(int32)|false|Number of matching clusters to skip|
|search|query|string|false|Case-insensitive substring match on the cluster name or endpoint|
|sortBy|query|string|false|Column to order by|
|sortOrder|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|endpoint|
|sortBy|name|
|sortBy|teamCount|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "endpoint": "string",
      "sandboxProxyDomain": "string",
      "teamCount": 0
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-clusters-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The page of matching clusters and the number of all matching clusters|[ClusterListResponse](#schemaclusterlistresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Create a cluster as admin

<a id="opIdadminCreateCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "endpoint": "string",
    "endpoint_tls": true,
    "token": "string",
    "sandbox_proxy_domain": "string",
    "auth_org_id": "string",
    "telemetry_client_id": "string"
  }'
```

`POST /unstable/admin/clusters`

Creates a cluster whose configuration cannot be modified through this route. A new cluster starts with deletion protection turned on. Creating a cluster again with the same `cluster_id` and an identical configuration answers 201 with the stored cluster, whose deletionProtection is whatever is stored; a different configuration, or an auth organization another cluster uses, returns 409 with error_code cluster_registration_conflict. An invalid request returns 400 with error_code cluster_registration_invalid.

> Body parameter

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "endpoint_tls": true,
  "token": "string",
  "sandbox_proxy_domain": "string",
  "auth_org_id": "string",
  "telemetry_client_id": "string"
}
```

<h3 id="create-a-cluster-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminClusterCreateRequest](#schemaadminclustercreaterequest)|true|none|
|» cluster_id|body|string(uuid)|false|Optional stable identifier for idempotent creation. Reuse succeeds only when the immutable configuration is identical.|
|» name|body|string|true|none|
|» endpoint|body|string|true|none|
|» endpoint_tls|body|boolean|true|none|
|» token|body|string|true|none|
|» sandbox_proxy_domain|body|string \| null|false|none|
|» auth_org_id|body|string \| null|false|none|
|» telemetry_client_id|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "endpointTls": true,
  "sandboxProxyDomain": "string",
  "authOrgId": "string",
  "deletionProtection": true
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="create-a-cluster-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Cluster created.|[ClusterDetail](#schemaclusterdetail)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Cluster as admin

<a id="opIdadminGetCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/clusters/{clusterID}`

Returns a cluster with the first page of its assigned teams, the number of teams assigned to it and the number of live templates on it. Never returns the cluster's token.

<h3 id="cluster-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamsLimit|query|integer(int32)|false|Page size for the embedded teams page|
|teamsOffset|query|integer(int32)|false|Offset for the embedded teams page|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 200 Response

```json
{
  "cluster": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "endpoint": "string",
    "endpointTls": true,
    "sandboxProxyDomain": "string",
    "authOrgId": "string",
    "deletionProtection": true
  },
  "teams": {
    "items": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "string",
        "name": "string",
        "slug": "string",
        "isBanned": true,
        "createdAt": "1970-01-01T00:00:00Z"
      }
    ],
    "total": 0
  },
  "teamCount": 0,
  "templateCount": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="cluster-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The cluster|[ClusterDetailWithTeams](#schemaclusterdetailwithteams)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Delete a cluster and its environments as admin

<a id="opIdadminDeleteCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`DELETE /unstable/admin/clusters/{clusterID}`

Deletes a cluster after all team assignments are detached. Deletion protection on the cluster rejects the deletion, and so does a live team assignment, before anything changes. In one transaction it then soft-deletes every live template, snapshot template and paused sandbox snapshot on the cluster, releases their aliases, and releases all environment references while preserving environment and build history, and afterwards the cluster service deletes the cluster. A team assigned between those two steps returns a conflict with the templates already deleted; repeating the deletion once that team is detached completes it. The local cluster's nil ID is rejected. Repeating a completed deletion succeeds.

<h3 id="delete-a-cluster-and-its-environments-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="delete-a-cluster-and-its-environments-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cluster deleted or already absent.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Update a cluster as admin

<a id="opIdadminUpdateCluster"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "name": "string",
    "endpoint": "string",
    "endpointTls": true,
    "sandboxProxyDomain": "string",
    "authOrgId": "string",
    "deletionProtection": true
  }'
```

`PATCH /unstable/admin/clusters/{clusterID}`

Writes only the properties present in the body. `endpoint` and `endpointTls` change where orchestration traffic for every team on the cluster goes, `sandboxProxyDomain` changes the public URL of every sandbox on it, and `authOrgId` changes how the cluster authenticates. A body with no property returns 400. Another cluster using the auth organization returns 409, and so does turning deletion protection on after the cluster's deletion is recorded. The token is rotated through `PUT /unstable/admin/clusters/{clusterID}/token`.

> Body parameter

```json
{
  "name": "string",
  "endpoint": "string",
  "endpointTls": true,
  "sandboxProxyDomain": "string",
  "authOrgId": "string",
  "deletionProtection": true
}
```

<h3 id="update-a-cluster-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|body|body|[ClusterUpdateRequest](#schemaclusterupdaterequest)|true|none|
|» name|body|string|false|none|
|» endpoint|body|string|false|none|
|» endpointTls|body|boolean|false|none|
|» sandboxProxyDomain|body|string \| null|false|none|
|» authOrgId|body|string \| null|false|none|
|» deletionProtection|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "endpointTls": true,
  "sandboxProxyDomain": "string",
  "authOrgId": "string",
  "deletionProtection": true
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-a-cluster-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The cluster as updated|[ClusterDetail](#schemaclusterdetail)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Cluster metadata as admin

<a id="opIdadminGetClusterMetadata"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/metadata \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/clusters/{clusterID}/metadata`

Returns cluster metadata without reading assigned teams or counting teams and templates. Never returns the cluster's token.

<h3 id="cluster-metadata-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "endpointTls": true,
  "sandboxProxyDomain": "string",
  "authOrgId": "string",
  "deletionProtection": true
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="cluster-metadata-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cluster metadata|[ClusterDetail](#schemaclusterdetail)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List a cluster's teams as admin

<a id="opIdadminListClusterTeams"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/teams \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/clusters/{clusterID}/teams`

Lists the teams assigned to the cluster.

<h3 id="list-a-clusters-teams-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|Maximum number of teams to return|
|offset|query|integer(int32)|false|Number of teams to skip|
|sortBy|query|string|false|Column to order by|
|sortOrder|query|string|false|none|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortBy|createdAt|
|sortBy|name|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "string",
      "name": "string",
      "slug": "string",
      "isBanned": true,
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 0
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-a-clusters-teams-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The page of teams assigned to the cluster|[ClusterTeamListResponse](#schemaclusterteamlistresponse)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Rotate a cluster's token as admin

<a id="opIdadminRotateClusterToken"></a>

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/token \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "token": "password"
  }'
```

`PUT /unstable/admin/clusters/{clusterID}/token`

Replaces the token used to reach the cluster. The previous token stops working at once. No route returns a cluster's token.

> Body parameter

```json
{
  "token": "password"
}
```

<h3 id="rotate-a-clusters-token-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|body|body|[ClusterTokenRotateRequest](#schemaclustertokenrotaterequest)|true|none|
|» token|body|string(password)|true|New cluster access token. Write-only.|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 503 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="rotate-a-clusters-token-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Token rotated.|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|503|Service Unavailable|Service unavailable|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Search template aliases as admin

> Code samples

```bash
curl 'https://api.e2b.dev/unstable/admin/templates/aliases?search=string' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/templates/aliases`

Finds the templates whose ID equals `search`, or that own an alias equal to `search` in any namespace, with their owning team and all their aliases. Deleted templates are left out. Results are ordered by template ID; the next page's token is returned in `X-Next-Token`.


<h3 id="search-template-aliases-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|Exact template ID or alias|
|nextToken|query|string|false|Cursor to start the list from|
|limit|query|integer(int32)|false|Maximum number of items to return per page|

> Example responses

> 200 Response

```json
[
  {
    "templateID": "string",
    "public": true,
    "team": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "email": "string"
    },
    "aliases": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "templateID": "string",
        "alias": "string",
        "namespace": "string",
        "isRenamable": true
      }
    ]
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="search-template-aliases-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the matching templates|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="search-template-aliases-as-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AdminTemplateAliases](#schemaadmintemplatealiases)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Next-Token|string||Cursor to fetch the next page of results, if more exist|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Add a template alias without a namespace as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/templates/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "templateID": "string",
    "alias": "string"
  }'
```

`POST /unstable/admin/templates/aliases`

Adds an alias without a namespace to a template, so the template resolves by that name for every team. The alias follows the rules of template names (lowercase letters, digits, `-` and `_`) and cannot equal a template ID. Returns 404 when the template does not exist and 409 when the alias is taken.


> Body parameter

```json
{
  "templateID": "string",
  "alias": "string"
}
```

<h3 id="add-a-template-alias-without-a-namespace-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminTemplateAliasCreateRequest](#schemaadmintemplatealiascreaterequest)|true|none|
|» templateID|body|string|true|Identifier of the template the alias resolves to|
|» alias|body|string|true|The alias, without a namespace or tag|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateID": "string",
  "alias": "string",
  "namespace": "string",
  "isRenamable": true
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="add-a-template-alias-without-a-namespace-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The alias was added|[AdminTemplateAlias](#schemaadmintemplatealias)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Remove a template alias without a namespace as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/templates/aliases/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`DELETE /unstable/admin/templates/aliases/{aliasID}`

Removes an alias without a namespace. A namespaced alias is not removed and answers 404.


<h3 id="remove-a-template-alias-without-a-namespace-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|aliasID|path|string(uuid)|true|Identifier of the alias|

> Example responses

> 200 Response

```json
{
  "aliasID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateID": "string",
  "alias": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="remove-a-template-alias-without-a-namespace-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The alias was removed|[AdminTemplateAliasDeleted](#schemaadmintemplatealiasdeleted)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Add a default template as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/templates/defaults \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "templateID": "string",
    "description": "string"
  }'
```

`POST /unstable/admin/templates/defaults`

Makes a template one of the platform's default templates. Returns 404 when the template does not exist and 409 when it is already a default template.


> Body parameter

```json
{
  "templateID": "string",
  "description": "string"
}
```

<h3 id="add-a-default-template-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminDefaultTemplateCreateRequest](#schemaadmindefaulttemplatecreaterequest)|true|none|
|» templateID|body|string|true|Identifier of the template to make a default template|
|» description|body|string \| null|false|Description of the default template; blank is stored as none|

> Example responses

> 201 Response

```json
{
  "templateID": "string",
  "description": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="add-a-default-template-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The template is now a default template|[AdminDefaultTemplate](#schemaadmindefaulttemplate)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Remove a default template as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/templates/defaults/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`DELETE /unstable/admin/templates/defaults/{templateID}`

Stops a template being one of the platform's default templates. The template itself is not changed. Returns 404 when the template is not a default template.


<h3 id="remove-a-default-template-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="remove-a-default-template-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The template is no longer a default template|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Update a default template as admin

> Code samples

```bash
curl https://api.e2b.dev/unstable/admin/templates/defaults/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "description": "string"
  }'
```

`PATCH /unstable/admin/templates/defaults/{templateID}`

Updates the description of a default template. Returns 404 when the template is not a default template.

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="update-a-default-template-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateID|path|string|true|none|
|body|body|[AdminDefaultTemplateUpdateRequest](#schemaadmindefaulttemplateupdaterequest)|true|none|
|» description|body|string \| null|true|New description of the default template; null or blank clears it|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "description": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="update-a-default-template-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The default template was updated|[AdminDefaultTemplate](#schemaadmindefaulttemplate)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Look up a template as admin

> Code samples

```bash
curl 'https://api.e2b.dev/unstable/admin/templates/lookup?query=string' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /unstable/admin/templates/lookup`

Resolves `query` as, in order: a build ID (a UUID, matched to the template of the build's newest assignment, with no fallback), a template ID, or a template name (`namespace/alias`, or an alias without a namespace). Returns the template with its owning team and its newest builds. Deleted templates are not found.


<h3 id="look-up-a-template-as-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Build ID, template ID, or template name|

> Example responses

> 200 Response

```json
{
  "templateID": "string",
  "team": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "email": "string"
  },
  "names": [
    "string"
  ],
  "public": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "isSnapshot": true,
  "snapshotSandboxID": "string",
  "matchedBuildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "builds": [
    {
      "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "building",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "cpuCount": 1,
      "maxCpuCount": {},
      "memoryMB": 128,
      "diskSizeMB": 0,
      "envdVersion": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="look-up-a-template-as-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully resolved the template|[AdminTemplateLookup](#schemaadmintemplatelookup)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List rigs of a cluster

> Code samples

```bash
curl https://api.e2b.dev/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/rigs \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /clusters/{clusterID}/rigs`

List the orchestrator node pools ("rigs") of a cluster with a snapshot of their scaling groups. Forwarded to the cluster's edge service; a cluster with no rig management configured returns an empty list, and the local cluster answers 501.


<h3 id="list-rigs-of-a-cluster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "provider": "string",
    "resourceID": "string",
    "capacityDesired": 0,
    "capacityMin": 0,
    "capacityMax": 0,
    "capacityCurrent": 0
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 501 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-rigs-of-a-cluster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the rigs of the cluster|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|501|Not Implemented|Not implemented by this deployment|[Error](#schemaerror)|

<h3 id="list-rigs-of-a-cluster-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Rig](#schemarig)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Set the capacity of a rig

> Code samples

```bash
curl https://api.e2b.dev/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/rigs/string/capacity \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}" \
  -d '{
    "desired": 0
  }'
```

`PUT /clusters/{clusterID}/rigs/{rigID}/capacity`

Set the desired instance count on the rig's scaling group. The value is passed to the cloud provider unchanged; violations of the group's bounds or conflicting concurrent operations surface as errors.


> Body parameter

```json
{
  "desired": 0
}
```

<h3 id="set-the-capacity-of-a-rig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|rigID|path|string|true|Rig identifier (e.g. "default")|
|body|body|[RigCapacityChange](#schemarigcapacitychange)|true|none|
|» desired|body|integer(int32)|true|Absolute desired number of instances in the rig|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 501 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="set-the-capacity-of-a-rig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Capacity change accepted|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|501|Not Implemented|Not implemented by this deployment|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## Terminate an instance of a rig

> Code samples

```bash
curl 'https://api.e2b.dev/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/rigs/instances/string?decrementDesired=true' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`DELETE /clusters/{clusterID}/rigs/instances/{instanceID}`

Terminate an instance in whichever rig's scaling group it belongs to. The caller chooses whether the rig shrinks or the instance is replaced.


<h3 id="terminate-an-instance-of-a-rig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|instanceID|path|string|true|Provider instance ID|
|decrementDesired|query|boolean|true|When true, desired capacity is decremented (rig shrinks); when false, the scaling group launches a replacement instance<br>|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 501 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="terminate-an-instance-of-a-rig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Instance termination accepted|None|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|501|Not Implemented|Not implemented by this deployment|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List the instances attached to a rig

> Code samples

```bash
curl https://api.e2b.dev/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/rigs/string/instances \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /clusters/{clusterID}/rigs/{rigID}/instances`

List the instances attached to the rig's scaling group with their creation time and transition state, sorted by instance ID.


<h3 id="list-the-instances-attached-to-a-rig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|rigID|path|string|true|Rig identifier (e.g. "default")|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "transitioning": true,
    "terminating": true
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 501 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-the-instances-attached-to-a-rig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the instances of the rig|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|501|Not Implemented|Not implemented by this deployment|[Error](#schemaerror)|

<h3 id="list-the-instances-attached-to-a-rig-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RigInstance](#schemariginstance)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

## List recent scaling errors of a rig

> Code samples

```bash
curl https://api.e2b.dev/clusters/497f6eca-6276-4993-bfeb-53cbbbba6f08/rigs/string/errors \
  -H 'Accept: application/json' \
  -H "X-Admin-Token: ${API_KEY}"
```

`GET /clusters/{clusterID}/rigs/{rigID}/errors`

List recent scaling errors on the rig's scaling group (e.g. failed instance creations due to resource exhaustion), newest first.


<h3 id="list-recent-scaling-errors-of-a-rig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clusterID|path|string(uuid)|true|Identifier of the cluster|
|rigID|path|string|true|Rig identifier (e.g. "default")|
|limit|query|integer(int32)|false|Maximum number of errors to return|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "1970-01-01T00:00:00Z",
    "code": "string",
    "message": "string",
    "instance": "string",
    "action": "string"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 501 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="list-recent-scaling-errors-of-a-rig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the scaling errors of the rig|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|
|501|Not Implemented|Not implemented by this deployment|[Error](#schemaerror)|

<h3 id="list-recent-scaling-errors-of-a-rig-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RigError](#schemarigerror)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|429|Retry-After|integer||When present, the number of seconds to wait before retrying the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
AdminApiKeyAuth, AdminJWTAuth
</aside>

<h1 id="e2b-api-events">events</h1>

## get/events/sandboxes/{sandboxID}

> Code samples

```bash
curl https://api.e2b.dev/events/sandboxes/string \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /events/sandboxes/{sandboxID}`

Get sandbox events

<h3 id="geteventssandboxessandboxid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxID|path|string|true|none|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|
|orderAsc|query|boolean|false|none|
|types|query|[string]|false|Filter events to the provided event types|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "string",
    "type": "string",
    "eventCategory": "string",
    "eventLabel": "string",
    "eventData": {},
    "timestamp": "1970-01-01T00:00:00Z",
    "sandboxId": "string",
    "sandboxExecutionId": "string",
    "sandboxTemplateId": "string",
    "sandboxBuildId": "string",
    "sandboxTeamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="geteventssandboxessandboxid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox events|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="geteventssandboxessandboxid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SandboxEvent](#schemasandboxevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## get/events/sandboxes

> Code samples

```bash
curl https://api.e2b.dev/events/sandboxes \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /events/sandboxes`

Get all sandbox events for the team associated with the API key

<h3 id="geteventssandboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|false|none|
|limit|query|integer(int32)|false|none|
|orderAsc|query|boolean|false|none|
|types|query|[string]|false|Filter events to the provided event types|

> Example responses

> 200 Response

```json
[
  {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "version": "string",
    "type": "string",
    "eventCategory": "string",
    "eventLabel": "string",
    "eventData": {},
    "timestamp": "1970-01-01T00:00:00Z",
    "sandboxId": "string",
    "sandboxExecutionId": "string",
    "sandboxTemplateId": "string",
    "sandboxBuildId": "string",
    "sandboxTeamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
]
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="geteventssandboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the sandbox events|Inline|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="geteventssandboxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SandboxEvent](#schemasandboxevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

<h1 id="e2b-api-webhooks">webhooks</h1>

## get/events/webhooks

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /events/webhooks`

List registered webhooks.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "teamId": "string",
    "name": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "enabled": true,
    "events": [
      "string"
    ]
  }
]
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="geteventswebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of registered webhooks.|Inline|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<h3 id="geteventswebhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WebhookDetail](#schemawebhookdetail)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## post/events/webhooks

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "name": "string",
    "url": "http://example.com",
    "events": [
      "string"
    ],
    "enabled": true,
    "signatureSecret": "password"
  }'
```

`POST /events/webhooks`

Register events webhook.

> Body parameter

```json
{
  "name": "string",
  "url": "http://example.com",
  "events": [
    "string"
  ],
  "enabled": true,
  "signatureSecret": "password"
}
```

<h3 id="posteventswebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WebhookCreate](#schemawebhookcreate)|true|none|
|» name|body|string|true|none|
|» url|body|string(uri)|true|none|
|» events|body|[string]|true|none|
|» enabled|body|boolean|false|none|
|» signatureSecret|body|string(password)|true|Secret used to sign the webhook payloads|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "teamId": "string",
  "url": "http://example.com",
  "enabled": true,
  "events": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="posteventswebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created webhook.|[WebhookCreation](#schemawebhookcreation)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## get/events/webhooks/{webhookID}

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /events/webhooks/{webhookID}`

Get a registered webhook.

<h3 id="geteventswebhookswebhookid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookID|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "teamId": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "enabled": true,
  "events": [
    "string"
  ]
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="geteventswebhookswebhookid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully returned the webhook configuration.|[WebhookDetail](#schemawebhookdetail)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## delete/events/webhooks/{webhookID}

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`DELETE /events/webhooks/{webhookID}`

Delete a registered webhook.

<h3 id="deleteeventswebhookswebhookid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookID|path|string(uuid)|true|none|

> Example responses

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="deleteeventswebhookswebhookid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted webhook.|None|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## patch/events/webhooks/{webhookID}

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "enabled": true,
    "name": "string",
    "url": "http://example.com",
    "events": [
      "string"
    ],
    "signatureSecret": "password"
  }'
```

`PATCH /events/webhooks/{webhookID}`

Update a registered webhook configuration.

> Body parameter

```json
{
  "enabled": true,
  "name": "string",
  "url": "http://example.com",
  "events": [
    "string"
  ],
  "signatureSecret": "password"
}
```

<h3 id="patcheventswebhookswebhookid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookID|path|string(uuid)|true|none|
|body|body|[WebhookConfiguration](#schemawebhookconfiguration)|true|none|
|» enabled|body|boolean|false|none|
|» name|body|string|false|Webhook user friendly name|
|» url|body|string(uri)|false|none|
|» events|body|[string]|false|none|
|» signatureSecret|body|string(password)|false|Secret used to sign the webhook payloads|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "teamId": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "enabled": true,
  "events": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="patcheventswebhookswebhookid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully updated webhook.|[WebhookDetail](#schemawebhookdetail)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## get/events/webhooks/{webhookID}/deliveries

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/deliveries \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /events/webhooks/{webhookID}/deliveries`

List webhook delivery attempts.

<h3 id="geteventswebhookswebhookiddeliveries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookID|path|string(uuid)|true|none|
|cursor|query|string|false|Opaque cursor from the previous response's nextCursor field.|
|limit|query|integer(int32)|false|none|
|orderAsc|query|boolean|false|none|
|start|query|string(date-time)|false|Include deliveries at or after this timestamp.|
|end|query|string(date-time)|false|Include deliveries before this timestamp.|
|deliveryStatus|query|[string]|false|Filter deliveries by delivery status|
|eventType|query|[string]|false|Filter deliveries by event type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|deliveryStatus|success|
|deliveryStatus|failed|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventType": "string",
      "sandboxId": "string",
      "attempts": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "sandboxId": "string",
          "eventType": "string",
          "status": "success",
          "durationMs": 0,
          "requestBody": "string",
          "requestHeaders": "string",
          "requestUrl": "http://example.com",
          "responseBody": "string",
          "responseHeaders": "string",
          "responseHttpStatusCode": 0,
          "errorClass": "http_error",
          "errorMessage": "string",
          "timestamp": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

> 400 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="geteventswebhookswebhookiddeliveries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of webhook delivery attempts grouped by event.|[WebhookDeliveriesListPayload](#schemawebhookdeliverieslistpayload)|
|400|Bad Request|Bad request|[Error](#schemaerror)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

## get/events/webhooks/{webhookID}/stats

> Code samples

```bash
curl https://api.e2b.dev/events/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/stats \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}"
```

`GET /events/webhooks/{webhookID}/stats`

Get webhook delivery aggregate stats.

<h3 id="geteventswebhookswebhookidstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookID|path|string(uuid)|true|none|
|start|query|string(date-time)|false|Inclusive stats range start. Defaults to 24 hours ago.|
|end|query|string(date-time)|false|Exclusive stats range end. Defaults to now.|

> Example responses

> 200 Response

```json
{
  "buckets": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "total": 0,
      "failed": 0,
      "durationMs": {
        "minimum": 0,
        "average": 0,
        "maximum": 0
      }
    }
  ],
  "total": 0,
  "failed": 0,
  "durationMs": {
    "minimum": 0,
    "average": 0,
    "maximum": 0
  }
}
```

> 401 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

<h3 id="geteventswebhookswebhookidstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook delivery stats.|[WebhookDeliveryStats](#schemawebhookdeliverystats)|
|401|Unauthorized|Authentication error|[Error](#schemaerror)|
|404|Not Found|Not found|[Error](#schemaerror)|
|500|Internal Server Error|Server error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth, AuthProviderBearerAuth & AuthProviderTeamAuth, AdminApiKeyAuth & AdminTeamAuth, AdminJWTAuth & AdminTeamAuth
</aside>

# Schemas

<h2 id="tocS_TelemetryNames">TelemetryNames</h2>
<!-- backwards compatibility -->
<a id="schematelemetrynames"></a>
<a id="schema_TelemetryNames"></a>
<a id="tocStelemetrynames"></a>
<a id="tocstelemetrynames"></a>

```json
{
  "teams": {
    "property1": {
      "name": "string",
      "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "property2": {
      "name": "string",
      "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  },
  "clusters": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "clientId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teams|object|true|none|none|
|clusters|[[TelemetryClusterName](#schematelemetryclustername)]|true|none|none|

<h2 id="tocS_TelemetryTeamName">TelemetryTeamName</h2>
<!-- backwards compatibility -->
<a id="schematelemetryteamname"></a>
<a id="schema_TelemetryTeamName"></a>
<a id="tocStelemetryteamname"></a>
<a id="tocstelemetryteamname"></a>

```json
{
  "name": "string",
  "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|clusterId|string(uuid)|false|none|none|

<h2 id="tocS_TelemetryClusterName">TelemetryClusterName</h2>
<!-- backwards compatibility -->
<a id="schematelemetryclustername"></a>
<a id="schema_TelemetryClusterName"></a>
<a id="tocStelemetryclustername"></a>
<a id="tocstelemetryclustername"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "clientId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|clientId|string|false|none|none|

<h2 id="tocS_Rig">Rig</h2>
<!-- backwards compatibility -->
<a id="schemarig"></a>
<a id="schema_Rig"></a>
<a id="tocSrig"></a>
<a id="tocsrig"></a>

```json
{
  "id": "string",
  "provider": "string",
  "resourceID": "string",
  "capacityDesired": 0,
  "capacityMin": 0,
  "capacityMax": 0,
  "capacityCurrent": 0
}
```

An orchestrator node pool backed by one cloud scaling group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Rig identifier (e.g. "default")|
|provider|string|true|none|Cloud provider backing the rig ("aws" or "gcp")|
|resourceID|string|true|none|Canonical cloud resource ID of the scaling group backing the rig (ARN on AWS, self-link on GCP)|
|capacityDesired|integer(int32)|true|none|Desired number of instances in the rig|
|capacityMin|integer(int32)|false|none|Minimum capacity enforced on the rig's scaling group. Omitted when nothing enforces bounds (GCP MIG without an active autoscaler).<br>|
|capacityMax|integer(int32)|false|none|Maximum capacity enforced on the rig's scaling group. Omitted when nothing enforces bounds (GCP MIG without an active autoscaler).<br>|
|capacityCurrent|integer(int32)|true|none|Number of instances currently attached to the rig|

<h2 id="tocS_RigCapacityChange">RigCapacityChange</h2>
<!-- backwards compatibility -->
<a id="schemarigcapacitychange"></a>
<a id="schema_RigCapacityChange"></a>
<a id="tocSrigcapacitychange"></a>
<a id="tocsrigcapacitychange"></a>

```json
{
  "desired": 0
}
```

Desired capacity to set on the rig's scaling group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desired|integer(int32)|true|none|Absolute desired number of instances in the rig|

<h2 id="tocS_RigInstance">RigInstance</h2>
<!-- backwards compatibility -->
<a id="schemariginstance"></a>
<a id="schema_RigInstance"></a>
<a id="tocSriginstance"></a>
<a id="tocsriginstance"></a>

```json
{
  "id": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "transitioning": true,
  "terminating": true
}
```

An instance attached to a rig's scaling group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Provider instance ID (EC2 instance ID on AWS, instance name on GCP), also the node ID the orchestrator reports|
|createdAt|string(date-time)|false|none|When the provider created the instance. Omitted while the instance is transitioning.|
|transitioning|boolean|true|none|The provider is creating, deleting, recreating or otherwise mutating the instance|
|terminating|boolean|true|none|The instance is on its way out of the group and can never become healthy again|

<h2 id="tocS_RigError">RigError</h2>
<!-- backwards compatibility -->
<a id="schemarigerror"></a>
<a id="schema_RigError"></a>
<a id="tocSrigerror"></a>
<a id="tocsrigerror"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "code": "string",
  "message": "string",
  "instance": "string",
  "action": "string"
}
```

Scaling error on the rig's scaling group, e.g. a failed instance creation due to resource exhaustion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|When the error occurred|
|code|string|true|none|Provider-specific error code (e.g. ZONE_RESOURCE_POOL_EXHAUSTED, Failed)|
|message|string|true|none|Human-readable error message|
|instance|string|false|none|Instance the error relates to, if any|
|action|string|false|none|Action being performed when the error occurred (e.g. CREATING)|

<h2 id="tocS_TeamUser">TeamUser</h2>
<!-- backwards compatibility -->
<a id="schemateamuser"></a>
<a id="schema_TeamUser"></a>
<a id="tocSteamuser"></a>
<a id="tocsteamuser"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the user|
|email|string \| null|true|none|**Deprecated.** Email of the user|

<h2 id="tocS_TemplateUpdateRequest">TemplateUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schematemplateupdaterequest"></a>
<a id="schema_TemplateUpdateRequest"></a>
<a id="tocStemplateupdaterequest"></a>
<a id="tocstemplateupdaterequest"></a>

```json
{
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public|boolean|false|none|Whether the template is public or only accessible by the team|

<h2 id="tocS_TemplateUpdateResponse">TemplateUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplateupdateresponse"></a>
<a id="schema_TemplateUpdateResponse"></a>
<a id="tocStemplateupdateresponse"></a>
<a id="tocstemplateupdateresponse"></a>

```json
{
  "names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|true|none|Names of the template (namespace/alias format when namespaced)|

<h2 id="tocS_CPUCount">CPUCount</h2>
<!-- backwards compatibility -->
<a id="schemacpucount"></a>
<a id="schema_CPUCount"></a>
<a id="tocScpucount"></a>
<a id="tocscpucount"></a>

```json
1
```

CPU cores for the sandbox

<h2 id="tocS_MemoryMB">MemoryMB</h2>
<!-- backwards compatibility -->
<a id="schemamemorymb"></a>
<a id="schema_MemoryMB"></a>
<a id="tocSmemorymb"></a>
<a id="tocsmemorymb"></a>

```json
128
```

Memory for the sandbox in MiB

<h2 id="tocS_DiskSizeMB">DiskSizeMB</h2>
<!-- backwards compatibility -->
<a id="schemadisksizemb"></a>
<a id="schema_DiskSizeMB"></a>
<a id="tocSdisksizemb"></a>
<a id="tocsdisksizemb"></a>

```json
0
```

Disk size for the sandbox in MiB

<h2 id="tocS_MinFreeDiskMb">MinFreeDiskMb</h2>
<!-- backwards compatibility -->
<a id="schemaminfreediskmb"></a>
<a id="schema_MinFreeDiskMb"></a>
<a id="tocSminfreediskmb"></a>
<a id="tocsminfreediskmb"></a>

```json
0
```

Requested minimum free space after the template's build steps, in MiB. Omit to use the team's default. Set to 0 to request no minimum free-disk growth. The filesystem is never shrunk, including inherited or already-larger filesystems. Growth is best effort, so filesystem metadata can leave the available space slightly below the requested minimum.

<h2 id="tocS_EnvdVersion">EnvdVersion</h2>
<!-- backwards compatibility -->
<a id="schemaenvdversion"></a>
<a id="schema_EnvdVersion"></a>
<a id="tocSenvdversion"></a>
<a id="tocsenvdversion"></a>

```json
"string"
```

Version of the envd running in the sandbox

<h2 id="tocS_SandboxMetadata">SandboxMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasandboxmetadata"></a>
<a id="schema_SandboxMetadata"></a>
<a id="tocSsandboxmetadata"></a>
<a id="tocssandboxmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|Metadata of the sandbox|

<h2 id="tocS_SandboxState">SandboxState</h2>
<!-- backwards compatibility -->
<a id="schemasandboxstate"></a>
<a id="schema_SandboxState"></a>
<a id="tocSsandboxstate"></a>
<a id="tocssandboxstate"></a>

```json
"running"
```

State of the sandbox

<h2 id="tocS_OrderDirection">OrderDirection</h2>
<!-- backwards compatibility -->
<a id="schemaorderdirection"></a>
<a id="schema_OrderDirection"></a>
<a id="tocSorderdirection"></a>
<a id="tocsorderdirection"></a>

```json
"desc"
```

Sort direction

<h2 id="tocS_SnapshotInfo">SnapshotInfo</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotinfo"></a>
<a id="schema_SnapshotInfo"></a>
<a id="tocSsnapshotinfo"></a>
<a id="tocssnapshotinfo"></a>

```json
{
  "snapshotID": "string",
  "names": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshotID|string|true|none|Identifier of the snapshot template including the tag. Uses namespace/alias when a name was provided (e.g. team-slug/my-snapshot:default), otherwise falls back to the raw template ID (e.g. abc123:default).|
|names|[string]|true|none|Full names of the snapshot template including team namespace and tag (e.g. team-slug/my-snapshot:v2)|

<h2 id="tocS_EnvVars">EnvVars</h2>
<!-- backwards compatibility -->
<a id="schemaenvvars"></a>
<a id="schema_EnvVars"></a>
<a id="tocSenvvars"></a>
<a id="tocsenvvars"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|Environment variables for the sandbox|

<h2 id="tocS_Mcp">Mcp</h2>
<!-- backwards compatibility -->
<a id="schemamcp"></a>
<a id="schema_Mcp"></a>
<a id="tocSmcp"></a>
<a id="tocsmcp"></a>

```json
{
  "property1": null,
  "property2": null
}
```

MCP configuration for the sandbox

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_SandboxNetworkConfig">SandboxNetworkConfig</h2>
<!-- backwards compatibility -->
<a id="schemasandboxnetworkconfig"></a>
<a id="schema_SandboxNetworkConfig"></a>
<a id="tocSsandboxnetworkconfig"></a>
<a id="tocssandboxnetworkconfig"></a>

```json
{
  "allowPublicTraffic": true,
  "allowOut": [
    "string"
  ],
  "denyOut": [
    "string"
  ],
  "dnsServers": [
    "string"
  ],
  "egressProxy": {
    "address": "string",
    "username": "string",
    "password": "string",
    "tls": {
      "enabled": true,
      "serverName": "string",
      "caCert": "string"
    }
  },
  "maskRequestHost": "string",
  "httpsPorts": [
    1
  ],
  "rules": {
    "property1": [
      {
        "transform": {
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "property2": [
      {
        "transform": {
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPublicTraffic|boolean \| null|false|none|Whether sandbox URLs accept traffic without the sandbox's traffic access token. When omitted or null on create, the project's default applies, which is true unless the project changed it.|
|allowOut|[string]|false|none|List of allowed destinations for egress traffic. Each entry can be a CIDR block (e.g. "8.8.8.8/32"), a bare IP address (e.g. "8.8.8.8"), or a domain name (e.g. "example.com", "*.example.com"). Allowed entries always take precedence over denied entries. When allowOut contains a domain, the servers in dnsServers (8.8.8.8 by default) are also allowed.|
|denyOut|[string]|false|none|List of denied CIDR blocks or IP addresses for egress traffic. Domain names are not supported for deny rules.|
|dnsServers|[string]|false|none|DNS servers the sandbox can reach when allowOut contains a domain. Each entry must be an IPv4 address, and all traffic to it is allowed. Omit it to allow the default nameserver 8.8.8.8, or pass an empty list to allow none. This does not change the sandbox's /etc/resolv.conf.|
|egressProxy|[SandboxEgressProxyConfig](#schemasandboxegressproxyconfig)|false|none|SOCKS5 proxy for sandbox egress. Outbound TCP is tunneled through the proxy after allow/deny filtering; the sandbox is unaware. Domain-matched flows use remote DNS (ATYP=domain).|
|maskRequestHost|string|false|none|Specify host mask which will be used for all sandbox requests|
|httpsPorts|[integer(uint32)]|false|none|Sandbox ports that serve HTTPS rather than plaintext HTTP. Affects how the proxy reaches the service inside the sandbox; the public URL is HTTPS either way. Certificates are not verified, so self-signed ones work. The envd port (49983) cannot be listed.|
|rules|object|false|none|Per-domain transform rules applied to matching outbound HTTPS requests. Keys may be exact DNS names (for example, "api.example.com") or a leading wildcard (for example, "*.example.com"), and are normalized to lowercase on write. Wildcards match subdomains at any depth but not the apex domain; a bare "*" is invalid. Exact rules take precedence, followed by the longest matching wildcard suffix, and matching rule sets are not merged. Broad wildcards such as "*.com" are allowed and may expose transformed credentials to every matching destination the sandbox contacts. Rules do not grant network access; configure allowOut separately to permit the destination.<br>|

<h2 id="tocS_SandboxNetworkUpdateConfig">SandboxNetworkUpdateConfig</h2>
<!-- backwards compatibility -->
<a id="schemasandboxnetworkupdateconfig"></a>
<a id="schema_SandboxNetworkUpdateConfig"></a>
<a id="tocSsandboxnetworkupdateconfig"></a>
<a id="tocssandboxnetworkupdateconfig"></a>

```json
{
  "allowOut": [
    "string"
  ],
  "denyOut": [
    "string"
  ],
  "dnsServers": [
    "string"
  ],
  "egressProxy": {
    "address": "string",
    "username": "string",
    "password": "string",
    "tls": {
      "enabled": true,
      "serverName": "string",
      "caCert": "string"
    }
  },
  "rules": {
    "property1": [
      {
        "transform": {
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "property2": [
      {
        "transform": {
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ]
  },
  "allow_internet_access": true
}
```

Network configuration update for a running sandbox. Replaces the current egress rules with the provided configuration. Omitting a field clears it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowOut|[string]|false|none|List of allowed destinations for egress traffic. Each entry can be a CIDR block (e.g. "8.8.8.8/32"), a bare IP address (e.g. "8.8.8.8"), or a domain name (e.g. "example.com", "*.example.com"). Allowed entries always take precedence over denied entries. When allowOut contains a domain, the servers in dnsServers (8.8.8.8 by default) are also allowed.|
|denyOut|[string]|false|none|List of denied CIDR blocks or IP addresses for egress traffic. Domain names are not supported for deny rules.|
|dnsServers|[string]|false|none|DNS servers the sandbox can reach when allowOut contains a domain. Each entry must be an IPv4 address, and all traffic to it is allowed. Omit it to reset to the default nameserver 8.8.8.8, or pass an empty list to allow none. This does not change the sandbox's /etc/resolv.conf.|
|egressProxy|[SandboxEgressProxyConfig](#schemasandboxegressproxyconfig)|false|none|SOCKS5 proxy for sandbox egress. Outbound TCP is tunneled through the proxy after allow/deny filtering; the sandbox is unaware. Domain-matched flows use remote DNS (ATYP=domain).|
|rules|object|false|none|Per-domain transform rules applied to matching outbound HTTPS requests. Replaces all existing rules when provided. Keys may be exact DNS names or a single leading wildcard (for example, "*.example.com"), and are normalized to lowercase on write. Wildcards match subdomains at any depth but not the apex domain; a bare "*" is invalid. Exact rules take precedence, followed by the longest matching wildcard suffix, and matching rule sets are not merged. Broad wildcards such as "*.com" are allowed and may expose transformed credentials to every matching destination the sandbox contacts. Rules do not grant network access; configure allowOut separately to permit the destination.<br>|
|allow_internet_access|boolean|false|none|Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.|

<h2 id="tocS_SandboxNetworkRule">SandboxNetworkRule</h2>
<!-- backwards compatibility -->
<a id="schemasandboxnetworkrule"></a>
<a id="schema_SandboxNetworkRule"></a>
<a id="tocSsandboxnetworkrule"></a>
<a id="tocssandboxnetworkrule"></a>

```json
{
  "transform": {
    "headers": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Transform rule applied to egress requests matching a domain pattern.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transform|[SandboxNetworkTransform](#schemasandboxnetworktransform)|false|none|Transformations applied to matching egress requests before forwarding.|

<h2 id="tocS_SandboxNetworkTransform">SandboxNetworkTransform</h2>
<!-- backwards compatibility -->
<a id="schemasandboxnetworktransform"></a>
<a id="schema_SandboxNetworkTransform"></a>
<a id="tocSsandboxnetworktransform"></a>
<a id="tocssandboxnetworktransform"></a>

```json
{
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

Transformations applied to matching egress requests before forwarding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headers|object|false|none|HTTP headers to inject or override in matching requests. An existing header with the same name is replaced. Values are plain strings; secret resolution happens client-side before sending to the API.<br>|

<h2 id="tocS_SandboxEgressProxyConfig">SandboxEgressProxyConfig</h2>
<!-- backwards compatibility -->
<a id="schemasandboxegressproxyconfig"></a>
<a id="schema_SandboxEgressProxyConfig"></a>
<a id="tocSsandboxegressproxyconfig"></a>
<a id="tocssandboxegressproxyconfig"></a>

```json
{
  "address": "string",
  "username": "string",
  "password": "string",
  "tls": {
    "enabled": true,
    "serverName": "string",
    "caCert": "string"
  }
}
```

SOCKS5 proxy for sandbox egress. Outbound TCP is tunneled through the proxy after allow/deny filtering; the sandbox is unaware. Domain-matched flows use remote DNS (ATYP=domain).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|SOCKS5 proxy address in host:port format (e.g. "proxy.example.com:1080").|
|username|string|false|none|Optional SOCKS5 username (RFC 1929), max 255 bytes.|
|password|string|false|none|Optional SOCKS5 password (RFC 1929), max 255 bytes.|
|tls|[SandboxEgressProxyTLSConfig](#schemasandboxegressproxytlsconfig)|false|none|TLS for the connection to the SOCKS5 proxy. The SOCKS5 negotiation and the tunneled traffic both run inside the TLS session, so the proxy credentials are not sent in the clear. This secures only the hop to the proxy; what the proxy does onward is its own concern. A half-close from the sandbox reaches the proxy as a TLS close_notify, not a TCP FIN, and a proxy that treats close_notify as a full close cuts the reply short.|

<h2 id="tocS_SandboxEgressProxyTLSConfig">SandboxEgressProxyTLSConfig</h2>
<!-- backwards compatibility -->
<a id="schemasandboxegressproxytlsconfig"></a>
<a id="schema_SandboxEgressProxyTLSConfig"></a>
<a id="tocSsandboxegressproxytlsconfig"></a>
<a id="tocssandboxegressproxytlsconfig"></a>

```json
{
  "enabled": true,
  "serverName": "string",
  "caCert": "string"
}
```

TLS for the connection to the SOCKS5 proxy. The SOCKS5 negotiation and the tunneled traffic both run inside the TLS session, so the proxy credentials are not sent in the clear. This secures only the hop to the proxy; what the proxy does onward is its own concern. A half-close from the sandbox reaches the proxy as a TLS close_notify, not a TCP FIN, and a proxy that treats close_notify as a full close cuts the reply short.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Connect to the proxy over TLS. When false, no other field in this object may be set.|
|serverName|string|false|none|Name to verify the proxy certificate against, and to send as SNI. Defaults to the host part of address. Set this only when the certificate does not match the address the proxy is reached at.|
|caCert|string|false|none|One or more PEM-encoded certificates to verify the proxy against, for a proxy fronted by a private CA. These replace the system trust store, which is what is used when this is omitted. The system trust store depends on the host the orchestrator runs on, so set this to get the same verification everywhere.|

<h2 id="tocS_SandboxAutoResumeEnabled">SandboxAutoResumeEnabled</h2>
<!-- backwards compatibility -->
<a id="schemasandboxautoresumeenabled"></a>
<a id="schema_SandboxAutoResumeEnabled"></a>
<a id="tocSsandboxautoresumeenabled"></a>
<a id="tocssandboxautoresumeenabled"></a>

```json
false
```

Auto-resume enabled flag for paused sandboxes. Default false.

<h2 id="tocS_SandboxAutoResumeConfig">SandboxAutoResumeConfig</h2>
<!-- backwards compatibility -->
<a id="schemasandboxautoresumeconfig"></a>
<a id="schema_SandboxAutoResumeConfig"></a>
<a id="tocSsandboxautoresumeconfig"></a>
<a id="tocssandboxautoresumeconfig"></a>

```json
{
  "enabled": false
}
```

Auto-resume configuration for paused sandboxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|[SandboxAutoResumeEnabled](#schemasandboxautoresumeenabled)|true|none|Auto-resume enabled flag for paused sandboxes. Default false.|

<h2 id="tocS_SandboxOnTimeout">SandboxOnTimeout</h2>
<!-- backwards compatibility -->
<a id="schemasandboxontimeout"></a>
<a id="schema_SandboxOnTimeout"></a>
<a id="tocSsandboxontimeout"></a>
<a id="tocssandboxontimeout"></a>

```json
"kill"
```

Action taken when the sandbox times out.

<h2 id="tocS_SandboxLifecycle">SandboxLifecycle</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlifecycle"></a>
<a id="schema_SandboxLifecycle"></a>
<a id="tocSsandboxlifecycle"></a>
<a id="tocssandboxlifecycle"></a>

```json
{
  "autoResume": true,
  "onTimeout": "kill"
}
```

Sandbox lifecycle policy returned by sandbox info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoResume|boolean|true|none|Whether the sandbox can auto-resume.|
|onTimeout|[SandboxOnTimeout](#schemasandboxontimeout)|true|none|Action taken when the sandbox times out.|

#### Enumerated Values

|Property|Value|
|---|---|
|onTimeout|kill|
|onTimeout|pause|

<h2 id="tocS_EnvdUnresponsiveAtPause">EnvdUnresponsiveAtPause</h2>
<!-- backwards compatibility -->
<a id="schemaenvdunresponsiveatpause"></a>
<a id="schema_EnvdUnresponsiveAtPause"></a>
<a id="tocSenvdunresponsiveatpause"></a>
<a id="tocsenvdunresponsiveatpause"></a>

```json
true
```

True when the snapshot a paused sandbox would resume from was taken while the sandbox guest agent was not responding. A plain resume of it is refused with 409 and error_code sandbox_snapshot_guest_agent_unresponsive, because restoring that memory would bring the unresponsive agent back; resume it without memory (`memory: false`), which cold-boots the sandbox from its disk. Omitted for a running sandbox and for a snapshot whose agent answered.

<h2 id="tocS_SandboxPauseMode">SandboxPauseMode</h2>
<!-- backwards compatibility -->
<a id="schemasandboxpausemode"></a>
<a id="schema_SandboxPauseMode"></a>
<a id="tocSsandboxpausemode"></a>
<a id="tocssandboxpausemode"></a>

```json
"full"
```

What the sandbox's latest pause saved. `full` saved the filesystem and the memory, and resuming restores the sandbox where it left off. `filesystem` saved only the filesystem, and resuming reboots the sandbox from disk. Returned for a paused sandbox once its pause has finished, and omitted while it is still pausing.

<h2 id="tocS_SandboxLog">SandboxLog</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlog"></a>
<a id="schema_SandboxLog"></a>
<a id="tocSsandboxlog"></a>
<a id="tocssandboxlog"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "line": "string"
}
```

Log entry with timestamp and line

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|Timestamp of the log entry|
|line|string|true|none|Log line content|

<h2 id="tocS_SandboxLogEntry">SandboxLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlogentry"></a>
<a id="schema_SandboxLogEntry"></a>
<a id="tocSsandboxlogentry"></a>
<a id="tocssandboxlogentry"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "message": "string",
  "level": "debug",
  "fields": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|Timestamp of the log entry|
|message|string|true|none|Log message content|
|level|[LogLevel](#schemaloglevel)|true|none|State of the sandbox|
|fields|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|level|debug|
|level|info|
|level|warn|
|level|error|

<h2 id="tocS_SandboxLogs">SandboxLogs</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlogs"></a>
<a id="schema_SandboxLogs"></a>
<a id="tocSsandboxlogs"></a>
<a id="tocssandboxlogs"></a>

```json
{
  "logs": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "line": "string"
    }
  ],
  "logEntries": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "message": "string",
      "level": "debug",
      "fields": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[[SandboxLog](#schemasandboxlog)]|true|none|Logs of the sandbox|
|logEntries|[[SandboxLogEntry](#schemasandboxlogentry)]|true|none|Structured logs of the sandbox|

<h2 id="tocS_SandboxLogsV2Response">SandboxLogsV2Response</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlogsv2response"></a>
<a id="schema_SandboxLogsV2Response"></a>
<a id="tocSsandboxlogsv2response"></a>
<a id="tocssandboxlogsv2response"></a>

```json
{
  "logs": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[[SandboxLogEntry](#schemasandboxlogentry)]|true|none|Sandbox logs structured|

<h2 id="tocS_SandboxMetric">SandboxMetric</h2>
<!-- backwards compatibility -->
<a id="schemasandboxmetric"></a>
<a id="schema_SandboxMetric"></a>
<a id="tocSsandboxmetric"></a>
<a id="tocssandboxmetric"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "timestampUnix": 0,
  "cpuCount": 0,
  "cpuUsedPct": 0,
  "memUsed": 0,
  "memTotal": 0,
  "memCache": 0,
  "diskUsed": 0,
  "diskTotal": 0
}
```

Metric entry with timestamp and line

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|**Deprecated.** Timestamp of the metric entry|
|timestampUnix|integer(int64)|true|none|Timestamp of the metric entry in Unix time (seconds since epoch)|
|cpuCount|integer(int32)|true|none|Number of CPU cores|
|cpuUsedPct|number(float)|true|none|CPU usage percentage|
|memUsed|integer(int64)|true|none|Memory used in bytes|
|memTotal|integer(int64)|true|none|Total memory in bytes|
|memCache|integer(int64)|true|none|Cached memory (page cache) in bytes|
|diskUsed|integer(int64)|true|none|Disk used in bytes|
|diskTotal|integer(int64)|true|none|Total disk space in bytes|

<h2 id="tocS_SandboxVolumeMount">SandboxVolumeMount</h2>
<!-- backwards compatibility -->
<a id="schemasandboxvolumemount"></a>
<a id="schema_SandboxVolumeMount"></a>
<a id="tocSsandboxvolumemount"></a>
<a id="tocssandboxvolumemount"></a>

```json
{
  "name": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the volume|
|path|string|true|none|Path of the volume|

<h2 id="tocS_Sandbox">Sandbox</h2>
<!-- backwards compatibility -->
<a id="schemasandbox"></a>
<a id="schema_Sandbox"></a>
<a id="tocSsandbox"></a>
<a id="tocssandbox"></a>

```json
{
  "templateID": "string",
  "sandboxID": "string",
  "alias": "string",
  "clientID": "string",
  "envdVersion": "string",
  "envdAccessToken": "string",
  "trafficAccessToken": "string",
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template from which is the sandbox created|
|sandboxID|string|true|none|Identifier of the sandbox|
|alias|string|false|none|Alias of the template|
|clientID|string|true|none|**Deprecated.** Identifier of the client|
|envdVersion|[EnvdVersion](#schemaenvdversion)|true|none|Version of the envd running in the sandbox|
|envdAccessToken|string|false|none|Access token used for envd communication|
|trafficAccessToken|string \| null|false|none|Token required for accessing sandbox via proxy.|
|domain|string \| null|false|none|Base domain where the sandbox traffic is accessible|

<h2 id="tocS_SandboxDetail">SandboxDetail</h2>
<!-- backwards compatibility -->
<a id="schemasandboxdetail"></a>
<a id="schema_SandboxDetail"></a>
<a id="tocSsandboxdetail"></a>
<a id="tocssandboxdetail"></a>

```json
{
  "templateID": "string",
  "alias": "string",
  "sandboxID": "string",
  "clientID": "string",
  "startedAt": "1970-01-01T00:00:00Z",
  "endAt": "1970-01-01T00:00:00Z",
  "envdVersion": "string",
  "envdUnresponsiveAtPause": true,
  "envdAccessToken": "string",
  "allowInternetAccess": true,
  "domain": "string",
  "cpuCount": 1,
  "memoryMB": 128,
  "diskSizeMB": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "state": "running",
  "network": {
    "allowPublicTraffic": true,
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "maskRequestHost": "string",
    "httpsPorts": [
      1
    ],
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  },
  "lifecycle": {
    "autoResume": true,
    "onTimeout": "kill"
  },
  "pauseMode": "full",
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template from which is the sandbox created|
|alias|string|false|none|Alias of the template|
|sandboxID|string|true|none|Identifier of the sandbox|
|clientID|string|true|none|**Deprecated.** Identifier of the client|
|startedAt|string(date-time)|true|none|Time when the sandbox was started|
|endAt|string(date-time)|true|none|Time when the sandbox will expire|
|envdVersion|[EnvdVersion](#schemaenvdversion)|true|none|Version of the envd running in the sandbox|
|envdUnresponsiveAtPause|[EnvdUnresponsiveAtPause](#schemaenvdunresponsiveatpause)|false|none|True when the snapshot a paused sandbox would resume from was taken while the sandbox guest agent was not responding. A plain resume of it is refused with 409 and error_code sandbox_snapshot_guest_agent_unresponsive, because restoring that memory would bring the unresponsive agent back; resume it without memory (`memory: false`), which cold-boots the sandbox from its disk. Omitted for a running sandbox and for a snapshot whose agent answered.|
|envdAccessToken|string|false|none|Access token used for envd communication|
|allowInternetAccess|boolean \| null|false|none|Whether internet access was explicitly enabled or disabled for the sandbox. Null means it was not explicitly set.|
|domain|string \| null|false|none|Base domain where the sandbox traffic is accessible|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|true|none|Disk size for the sandbox in MiB|
|metadata|[SandboxMetadata](#schemasandboxmetadata)|false|none|none|
|state|[SandboxState](#schemasandboxstate)|true|none|State of the sandbox|
|network|[SandboxNetworkConfig](#schemasandboxnetworkconfig)|false|none|none|
|lifecycle|[SandboxLifecycle](#schemasandboxlifecycle)|false|none|Sandbox lifecycle policy returned by sandbox info.|
|pauseMode|[SandboxPauseMode](#schemasandboxpausemode)|false|none|What the sandbox's latest pause saved. `full` saved the filesystem and the memory, and resuming restores the sandbox where it left off. `filesystem` saved only the filesystem, and resuming reboots the sandbox from disk. Returned for a paused sandbox once its pause has finished, and omitted while it is still pausing.|
|volumeMounts|[[SandboxVolumeMount](#schemasandboxvolumemount)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|running|
|state|paused|
|pauseMode|full|
|pauseMode|filesystem|

<h2 id="tocS_SandboxRecord">SandboxRecord</h2>
<!-- backwards compatibility -->
<a id="schemasandboxrecord"></a>
<a id="schema_SandboxRecord"></a>
<a id="tocSsandboxrecord"></a>
<a id="tocssandboxrecord"></a>

```json
{
  "templateID": "string",
  "alias": "string",
  "sandboxID": "string",
  "startedAt": "1970-01-01T00:00:00Z",
  "stoppedAt": "1970-01-01T00:00:00Z",
  "domain": "string",
  "cpuCount": 1,
  "memoryMB": 128,
  "diskSizeMB": 0,
  "retentionExpired": true,
  "eventsRetentionExpired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template from which is the sandbox created|
|alias|string|false|none|Alias of the template|
|sandboxID|string|true|none|Identifier of the sandbox|
|startedAt|string(date-time)|true|none|Time when the sandbox was started|
|stoppedAt|string(date-time) \| null|false|none|Time when the sandbox was stopped|
|domain|string \| null|false|none|Base domain where the sandbox traffic is accessible|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|true|none|Disk size for the sandbox in MiB|
|retentionExpired|boolean|true|none|Whether the sandbox ended more than the fixed retention window ago, so its monitoring and logs data is no longer available|
|eventsRetentionExpired|boolean|true|none|Whether the sandbox ended more than the team's events retention window ago, so its events data is no longer available|

<h2 id="tocS_ListedSandbox">ListedSandbox</h2>
<!-- backwards compatibility -->
<a id="schemalistedsandbox"></a>
<a id="schema_ListedSandbox"></a>
<a id="tocSlistedsandbox"></a>
<a id="tocslistedsandbox"></a>

```json
{
  "templateID": "string",
  "alias": "string",
  "sandboxID": "string",
  "clientID": "string",
  "startedAt": "1970-01-01T00:00:00Z",
  "endAt": "1970-01-01T00:00:00Z",
  "cpuCount": 1,
  "memoryMB": 128,
  "diskSizeMB": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "state": "running",
  "envdVersion": "string",
  "envdUnresponsiveAtPause": true,
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template from which is the sandbox created|
|alias|string|false|none|Alias of the template|
|sandboxID|string|true|none|Identifier of the sandbox|
|clientID|string|true|none|**Deprecated.** Identifier of the client|
|startedAt|string(date-time)|true|none|Time when the sandbox was started|
|endAt|string(date-time)|true|none|Time when the sandbox will expire|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|true|none|Disk size for the sandbox in MiB|
|metadata|[SandboxMetadata](#schemasandboxmetadata)|false|none|none|
|state|[SandboxState](#schemasandboxstate)|true|none|State of the sandbox|
|envdVersion|[EnvdVersion](#schemaenvdversion)|true|none|Version of the envd running in the sandbox|
|envdUnresponsiveAtPause|[EnvdUnresponsiveAtPause](#schemaenvdunresponsiveatpause)|false|none|True when the snapshot a paused sandbox would resume from was taken while the sandbox guest agent was not responding. A plain resume of it is refused with 409 and error_code sandbox_snapshot_guest_agent_unresponsive, because restoring that memory would bring the unresponsive agent back; resume it without memory (`memory: false`), which cold-boots the sandbox from its disk. Omitted for a running sandbox and for a snapshot whose agent answered.|
|volumeMounts|[[SandboxVolumeMount](#schemasandboxvolumemount)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|running|
|state|paused|

<h2 id="tocS_SandboxesWithMetrics">SandboxesWithMetrics</h2>
<!-- backwards compatibility -->
<a id="schemasandboxeswithmetrics"></a>
<a id="schema_SandboxesWithMetrics"></a>
<a id="tocSsandboxeswithmetrics"></a>
<a id="tocssandboxeswithmetrics"></a>

```json
{
  "sandboxes": {
    "property1": {
      "timestamp": "1970-01-01T00:00:00Z",
      "timestampUnix": 0,
      "cpuCount": 0,
      "cpuUsedPct": 0,
      "memUsed": 0,
      "memTotal": 0,
      "memCache": 0,
      "diskUsed": 0,
      "diskTotal": 0
    },
    "property2": {
      "timestamp": "1970-01-01T00:00:00Z",
      "timestampUnix": 0,
      "cpuCount": 0,
      "cpuUsedPct": 0,
      "memUsed": 0,
      "memTotal": 0,
      "memCache": 0,
      "diskUsed": 0,
      "diskTotal": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxes|object|true|none|none|

<h2 id="tocS_NewSandbox">NewSandbox</h2>
<!-- backwards compatibility -->
<a id="schemanewsandbox"></a>
<a id="schema_NewSandbox"></a>
<a id="tocSnewsandbox"></a>
<a id="tocsnewsandbox"></a>

```json
{
  "templateID": "string",
  "timeout": 15,
  "cpuCount": {},
  "autoPause": false,
  "autoPauseMemory": true,
  "autoResume": {
    "enabled": false
  },
  "secure": true,
  "allow_internet_access": true,
  "network": {
    "allowPublicTraffic": true,
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "maskRequestHost": "string",
    "httpsPorts": [
      1
    ],
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "mcp": {
    "property1": null,
    "property2": null
  },
  "iam": {
    "tokens": {
      "property1": {
        "audience": "string",
        "tokenType": "string"
      },
      "property2": {
        "audience": "string",
        "tokenType": "string"
      }
    }
  },
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the required template|
|timeout|integer(int32)|false|none|Time to live for the sandbox in seconds.|
|cpuCount|object|false|none|Online vCPU target for the sandbox. Defaults to the template's cpuCount; at most its maxCpuCount (fixed-size templates accept only their cpuCount).|
|autoPause|boolean|false|none|Automatically pauses the sandbox after the timeout|
|autoPauseMemory|boolean|false|none|Controls the snapshot kind taken when the sandbox auto-pauses on timeout (only relevant when autoPause is true). When false, the auto-pause drops the in-memory state and persists only the filesystem (a filesystem-only snapshot); resuming it cold-boots (reboots) the sandbox from disk. Such a snapshot cannot be auto-resumed by traffic and must be resumed explicitly, so it cannot be combined with autoResume. Defaults to true (full memory snapshot).|
|autoResume|[SandboxAutoResumeConfig](#schemasandboxautoresumeconfig)|false|none|Auto-resume configuration for paused sandboxes.|
|secure|boolean|false|none|**Deprecated.** Ignored. All system communication with the sandbox is always secured; the template's envd version must support secured access.|
|allow_internet_access|boolean|false|none|Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.|
|network|[SandboxNetworkConfig](#schemasandboxnetworkconfig)|false|none|none|
|metadata|[SandboxMetadata](#schemasandboxmetadata)|false|none|none|
|envVars|[EnvVars](#schemaenvvars)|false|none|none|
|mcp|[Mcp](#schemamcp)|false|none|MCP configuration for the sandbox|
|iam|[SandboxIam](#schemasandboxiam)|false|none|Sandbox workload identity configuration. A non-empty, valid tokens map enables workload identity for the sandbox.|
|volumeMounts|[[SandboxVolumeMount](#schemasandboxvolumemount)]|false|none|none|

<h2 id="tocS_NewSandboxV2">NewSandboxV2</h2>
<!-- backwards compatibility -->
<a id="schemanewsandboxv2"></a>
<a id="schema_NewSandboxV2"></a>
<a id="tocSnewsandboxv2"></a>
<a id="tocsnewsandboxv2"></a>

```json
{
  "templateID": "string",
  "timeout": 300,
  "cpuCount": {},
  "autoPause": false,
  "autoPauseMemory": true,
  "autoResume": {
    "enabled": false
  },
  "allow_internet_access": true,
  "network": {
    "allowPublicTraffic": true,
    "allowOut": [
      "string"
    ],
    "denyOut": [
      "string"
    ],
    "dnsServers": [
      "string"
    ],
    "egressProxy": {
      "address": "string",
      "username": "string",
      "password": "string",
      "tls": {
        "enabled": true,
        "serverName": "string",
        "caCert": "string"
      }
    },
    "maskRequestHost": "string",
    "httpsPorts": [
      1
    ],
    "rules": {
      "property1": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "property2": [
        {
          "transform": {
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ]
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "envVars": {
    "property1": "string",
    "property2": "string"
  },
  "mcp": {
    "property1": null,
    "property2": null
  },
  "iam": {
    "tokens": {
      "property1": {
        "audience": "string",
        "tokenType": "string"
      },
      "property2": {
        "audience": "string",
        "tokenType": "string"
      }
    }
  },
  "volumeMounts": [
    {
      "name": "string",
      "path": "string"
    }
  ]
}
```

Sandbox creation request. All system communication with the sandbox is always secured; the template's envd version must support secured access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the required template|
|timeout|integer(int32)|false|none|Time to live for the sandbox in seconds.|
|cpuCount|object|false|none|Online vCPU target for the sandbox. Defaults to the template's cpuCount; at most its maxCpuCount (fixed-size templates accept only their cpuCount).|
|autoPause|boolean|false|none|Automatically pauses the sandbox after the timeout|
|autoPauseMemory|boolean|false|none|Controls the snapshot kind taken when the sandbox auto-pauses on timeout (only relevant when autoPause is true). When false, the auto-pause drops the in-memory state and persists only the filesystem (a filesystem-only snapshot); resuming it cold-boots (reboots) the sandbox from disk. Such a snapshot cannot be auto-resumed by traffic and must be resumed explicitly, so it cannot be combined with autoResume. Defaults to true (full memory snapshot).|
|autoResume|[SandboxAutoResumeConfig](#schemasandboxautoresumeconfig)|false|none|Auto-resume configuration for paused sandboxes.|
|allow_internet_access|boolean|false|none|Allow sandbox to access the internet. When set to false, it behaves the same as specifying denyOut to 0.0.0.0/0 in the network config.|
|network|[SandboxNetworkConfig](#schemasandboxnetworkconfig)|false|none|none|
|metadata|[SandboxMetadata](#schemasandboxmetadata)|false|none|none|
|envVars|[EnvVars](#schemaenvvars)|false|none|none|
|mcp|[Mcp](#schemamcp)|false|none|MCP configuration for the sandbox|
|iam|[SandboxIam](#schemasandboxiam)|false|none|Sandbox workload identity configuration. A non-empty, valid tokens map enables workload identity for the sandbox.|
|volumeMounts|[[SandboxVolumeMount](#schemasandboxvolumemount)]|false|none|none|

<h2 id="tocS_SandboxIam">SandboxIam</h2>
<!-- backwards compatibility -->
<a id="schemasandboxiam"></a>
<a id="schema_SandboxIam"></a>
<a id="tocSsandboxiam"></a>
<a id="tocssandboxiam"></a>

```json
{
  "tokens": {
    "property1": {
      "audience": "string",
      "tokenType": "string"
    },
    "property2": {
      "audience": "string",
      "tokenType": "string"
    }
  }
}
```

Sandbox workload identity configuration. A non-empty, valid tokens map enables workload identity for the sandbox.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokens|[SandboxIamTokens](#schemasandboxiamtokens)|false|none|Named workload-token definitions, keyed by a caller-chosen token name.|

<h2 id="tocS_SandboxIamTokens">SandboxIamTokens</h2>
<!-- backwards compatibility -->
<a id="schemasandboxiamtokens"></a>
<a id="schema_SandboxIamTokens"></a>
<a id="tocSsandboxiamtokens"></a>
<a id="tocssandboxiamtokens"></a>

```json
{
  "property1": {
    "audience": "string",
    "tokenType": "string"
  },
  "property2": {
    "audience": "string",
    "tokenType": "string"
  }
}
```

Named workload-token definitions, keyed by a caller-chosen token name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[SandboxIamToken](#schemasandboxiamtoken)|false|none|none|

<h2 id="tocS_SandboxIamToken">SandboxIamToken</h2>
<!-- backwards compatibility -->
<a id="schemasandboxiamtoken"></a>
<a id="schema_SandboxIamToken"></a>
<a id="tocSsandboxiamtoken"></a>
<a id="tocssandboxiamtoken"></a>

```json
{
  "audience": "string",
  "tokenType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|true|none|Audience of the workload token, stored exactly as provided.|
|tokenType|string|true|none|Workload token type.|

<h2 id="tocS_ResumedSandbox">ResumedSandbox</h2>
<!-- backwards compatibility -->
<a id="schemaresumedsandbox"></a>
<a id="schema_ResumedSandbox"></a>
<a id="tocSresumedsandbox"></a>
<a id="tocsresumedsandbox"></a>

```json
{
  "timeout": 15,
  "cpuCount": {},
  "autoPause": true,
  "memory": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|integer(int32)|false|none|Time to live for the sandbox in seconds.|
|cpuCount|object|false|none|Online vCPU target for the resumed sandbox. Defaults to the snapshot's cpuCount; at most the template's maxCpuCount (fixed-size templates accept only their cpuCount).|
|autoPause|boolean|false|none|**Deprecated.** Automatically pauses the sandbox after the timeout|
|memory|boolean|false|none|Defaults to true. When false, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.|

<h2 id="tocS_ConnectSandbox">ConnectSandbox</h2>
<!-- backwards compatibility -->
<a id="schemaconnectsandbox"></a>
<a id="schema_ConnectSandbox"></a>
<a id="tocSconnectsandbox"></a>
<a id="tocsconnectsandbox"></a>

```json
{
  "timeout": 0,
  "memory": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|integer(int32)|true|none|Timeout in seconds from the current time after which the sandbox should expire|
|memory|boolean|false|none|Defaults to true. When false and the sandbox is paused, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.|

<h2 id="tocS_ConnectSandboxV2">ConnectSandboxV2</h2>
<!-- backwards compatibility -->
<a id="schemaconnectsandboxv2"></a>
<a id="schema_ConnectSandboxV2"></a>
<a id="tocSconnectsandboxv2"></a>
<a id="tocsconnectsandboxv2"></a>

```json
{
  "timeout": 300,
  "memory": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|integer(int32)|false|none|Timeout in seconds from the current time after which the sandbox should expire|
|memory|boolean|false|none|Defaults to true. When false and the sandbox is paused, resume from disk state only: the sandbox cold-boots fresh and any memory in the snapshot is ignored, never modified or deleted. Disk state has crash-recovery semantics — writes not flushed before the pause may be lost. A no-op for snapshots that contain no memory. Rejected with an error in environments where this capability is not enabled, never silently downgraded to a memory restore. A snapshot taken while the sandbox guest agent was not responding (envdUnresponsiveAtPause) can only be resumed this way, and needs no enablement.|

<h2 id="tocS_SandboxTimeoutRequest">SandboxTimeoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemasandboxtimeoutrequest"></a>
<a id="schema_SandboxTimeoutRequest"></a>
<a id="tocSsandboxtimeoutrequest"></a>
<a id="tocssandboxtimeoutrequest"></a>

```json
{
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|integer(int32)|true|none|Timeout in seconds from the current time after which the sandbox should expire|

<h2 id="tocS_SandboxRefreshRequest">SandboxRefreshRequest</h2>
<!-- backwards compatibility -->
<a id="schemasandboxrefreshrequest"></a>
<a id="schema_SandboxRefreshRequest"></a>
<a id="tocSsandboxrefreshrequest"></a>
<a id="tocssandboxrefreshrequest"></a>

```json
{
  "duration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|integer|false|none|Duration for which the sandbox should be kept alive in seconds|

<h2 id="tocS_SandboxSnapshotRequest">SandboxSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemasandboxsnapshotrequest"></a>
<a id="schema_SandboxSnapshotRequest"></a>
<a id="tocSsandboxsnapshotrequest"></a>
<a id="tocssandboxsnapshotrequest"></a>

```json
{
  "name": "string",
  "memory": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Optional name for the snapshot template. If a snapshot template with this name already exists, a new build will be assigned to the existing template instead of creating a new one.|
|memory|boolean|false|none|Whether to capture a full memory snapshot. When false, only the filesystem is persisted: the snapshot is smaller and faster to take, and sandboxes created from it cold-boot (start fresh from disk) instead of restoring memory, so they begin without the source sandbox's running processes, in-memory state, and open connections. The source sandbox keeps running in both cases. Defaults to true.|

<h2 id="tocS_SandboxPauseRequest">SandboxPauseRequest</h2>
<!-- backwards compatibility -->
<a id="schemasandboxpauserequest"></a>
<a id="schema_SandboxPauseRequest"></a>
<a id="tocSsandboxpauserequest"></a>
<a id="tocssandboxpauserequest"></a>

```json
{
  "memory": true,
  "requireHealthyGuest": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memory|boolean|false|none|Whether to capture a full memory snapshot. When false, only the filesystem is persisted and resuming the sandbox cold-boots (reboots) it from disk, losing in-memory state, running processes, and open connections. Resume it with an explicit request (connect or resume); auto-resume, which can be triggered by arbitrary traffic, refuses such a sandbox. Defaults to true.|
|requireHealthyGuest|boolean|false|none|The pause checks that the sandbox guest agent answers before it takes the snapshot. By default an unresponsive agent is recorded on the snapshot and the pause proceeds; the sandbox then shows `envdUnresponsiveAtPause` and a later resume must ask for `memory: false`, since restoring that memory would bring the unresponsive agent back. With this true, the pause is instead refused with 503 while the agent does not answer, and the sandbox keeps running. A filesystem-only pause (`memory: false`) is always refused while the agent does not answer, whatever this says.|

<h2 id="tocS_SandboxForkRequest">SandboxForkRequest</h2>
<!-- backwards compatibility -->
<a id="schemasandboxforkrequest"></a>
<a id="schema_SandboxForkRequest"></a>
<a id="tocSsandboxforkrequest"></a>
<a id="tocssandboxforkrequest"></a>

```json
{
  "timeout": 15,
  "count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|integer(int32)|false|none|Time to live for the new forked sandboxes in seconds.|
|count|integer(int32)|false|none|Number of forked sandboxes to create. All forks boot from the same snapshot, so the snapshot is captured once regardless of count. Each fork succeeds or fails independently; the outcome of each is reported in its entry of the response list.|

<h2 id="tocS_SandboxForkResult">SandboxForkResult</h2>
<!-- backwards compatibility -->
<a id="schemasandboxforkresult"></a>
<a id="schema_SandboxForkResult"></a>
<a id="tocSsandboxforkresult"></a>
<a id="tocssandboxforkresult"></a>

```json
{
  "sandbox": {
    "templateID": "string",
    "sandboxID": "string",
    "alias": "string",
    "clientID": "string",
    "envdVersion": "string",
    "envdAccessToken": "string",
    "trafficAccessToken": "string",
    "domain": "string"
  },
  "error": {
    "code": 0,
    "error_code": "string",
    "message": "string"
  }
}
```

Result of one requested fork. Exactly one of sandbox or error is set: sandbox when the fork started successfully, error when it failed to start.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandbox|[Sandbox](#schemasandbox)|false|none|none|
|error|[Error](#schemaerror)|false|none|none|

<h2 id="tocS_TeamMetric">TeamMetric</h2>
<!-- backwards compatibility -->
<a id="schemateammetric"></a>
<a id="schema_TeamMetric"></a>
<a id="tocSteammetric"></a>
<a id="tocsteammetric"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "timestampUnix": 0,
  "concurrentSandboxes": 0,
  "sandboxStartRate": 0
}
```

Team metric with timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|**Deprecated.** Timestamp of the metric entry|
|timestampUnix|integer(int64)|true|none|Timestamp of the metric entry in Unix time (seconds since epoch)|
|concurrentSandboxes|integer(int32)|true|none|The number of concurrent sandboxes for the team|
|sandboxStartRate|number(float)|true|none|Number of sandboxes started per second|

<h2 id="tocS_MaxTeamMetric">MaxTeamMetric</h2>
<!-- backwards compatibility -->
<a id="schemamaxteammetric"></a>
<a id="schema_MaxTeamMetric"></a>
<a id="tocSmaxteammetric"></a>
<a id="tocsmaxteammetric"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "timestampUnix": 0,
  "value": 0
}
```

Team metric with timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|**Deprecated.** Timestamp of the metric entry|
|timestampUnix|integer(int64)|true|none|Timestamp of the metric entry in Unix time (seconds since epoch)|
|value|number|true|none|The maximum value of the requested metric in the given interval|

<h2 id="tocS_TeamStatusResponse">TeamStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamstatusresponse"></a>
<a id="schema_TeamStatusResponse"></a>
<a id="tocSteamstatusresponse"></a>
<a id="tocsteamstatusresponse"></a>

```json
{
  "isBanned": true,
  "isBlocked": true,
  "blockedReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isBanned|boolean|true|none|Whether the team is banned|
|isBlocked|boolean|true|none|Whether the team is blocked|
|blockedReason|string \| null|true|none|Why the team is blocked, if a reason was recorded|

<h2 id="tocS_TeamLimits">TeamLimits</h2>
<!-- backwards compatibility -->
<a id="schemateamlimits"></a>
<a id="schema_TeamLimits"></a>
<a id="tocSteamlimits"></a>
<a id="tocsteamlimits"></a>

```json
{
  "maxLengthHours": 0,
  "concurrentSandboxes": 0,
  "concurrentTemplateBuilds": 0,
  "maxVcpu": 0,
  "maxRamMb": 0,
  "diskMb": 0,
  "eventsTtlDays": 0,
  "defaultFreeDiskSizeMb": 0,
  "maxFreeDiskSizeMb": 0,
  "apiTeamRpsList": 0,
  "apiTeamRpsDelete": 0,
  "maxSecrets": 0
}
```

The team's effective resource limits

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLengthHours|integer(int64)|true|none|Maximum sandbox lifetime, in hours|
|concurrentSandboxes|integer(int64)|true|none|Maximum number of sandboxes running at once|
|concurrentTemplateBuilds|integer(int64)|true|none|Maximum number of template builds running at once|
|maxVcpu|integer(int64)|true|none|Maximum vCPUs per sandbox|
|maxRamMb|integer(int64)|true|none|Maximum memory per sandbox, in MiB|
|diskMb|integer(int64)|true|none|Disk size per sandbox, in MiB|
|eventsTtlDays|integer(int64)|true|none|Number of days sandbox events are kept|
|defaultFreeDiskSizeMb|integer(int64)|true|none|Free disk space a template build gets when it requests none, in MiB|
|maxFreeDiskSizeMb|integer(int64)|true|none|Maximum free disk space a template build may request, in MiB|
|apiTeamRpsList|integer(int64)|true|none|Requests per second the team may make to list endpoints|
|apiTeamRpsDelete|integer(int64)|true|none|Requests per second the team may make to delete endpoints|
|maxSecrets|integer(int64)|true|none|Maximum number of secrets the team may store|

<h2 id="tocS_TeamLimitsResponse">TeamLimitsResponse</h2>
<!-- backwards compatibility -->
<a id="schemateamlimitsresponse"></a>
<a id="schema_TeamLimitsResponse"></a>
<a id="tocSteamlimitsresponse"></a>
<a id="tocsteamlimitsresponse"></a>

```json
{
  "limits": {
    "maxLengthHours": 0,
    "concurrentSandboxes": 0,
    "concurrentTemplateBuilds": 0,
    "maxVcpu": 0,
    "maxRamMb": 0,
    "diskMb": 0,
    "eventsTtlDays": 0,
    "defaultFreeDiskSizeMb": 0,
    "maxFreeDiskSizeMb": 0,
    "apiTeamRpsList": 0,
    "apiTeamRpsDelete": 0,
    "maxSecrets": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|[TeamLimits](#schemateamlimits)|true|none|The team's effective resource limits|

<h2 id="tocS_ClusterDetail">ClusterDetail</h2>
<!-- backwards compatibility -->
<a id="schemaclusterdetail"></a>
<a id="schema_ClusterDetail"></a>
<a id="tocSclusterdetail"></a>
<a id="tocsclusterdetail"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "endpointTls": true,
  "sandboxProxyDomain": "string",
  "authOrgId": "string",
  "deletionProtection": true
}
```

A cluster's configuration. The cluster's token is never returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|endpoint|string|true|none|none|
|endpointTls|boolean|true|none|none|
|sandboxProxyDomain|string \| null|false|none|none|
|authOrgId|string \| null|false|none|none|
|deletionProtection|boolean|true|none|While true, deleting the cluster is refused.|

<h2 id="tocS_ClusterDetailWithTeams">ClusterDetailWithTeams</h2>
<!-- backwards compatibility -->
<a id="schemaclusterdetailwithteams"></a>
<a id="schema_ClusterDetailWithTeams"></a>
<a id="tocSclusterdetailwithteams"></a>
<a id="tocsclusterdetailwithteams"></a>

```json
{
  "cluster": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "endpoint": "string",
    "endpointTls": true,
    "sandboxProxyDomain": "string",
    "authOrgId": "string",
    "deletionProtection": true
  },
  "teams": {
    "items": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "string",
        "name": "string",
        "slug": "string",
        "isBanned": true,
        "createdAt": "1970-01-01T00:00:00Z"
      }
    ],
    "total": 0
  },
  "teamCount": 0,
  "templateCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster|[ClusterDetail](#schemaclusterdetail)|true|none|A cluster's configuration. The cluster's token is never returned.|
|teams|[ClusterTeamListResponse](#schemaclusterteamlistresponse)|true|none|none|
|teamCount|integer(int64)|true|none|Teams assigned to the cluster. Must be 0 before the cluster can be deleted.|
|templateCount|integer(int64)|true|none|Live templates on the cluster. Deleting the cluster deletes them.|

<h2 id="tocS_ClusterListItem">ClusterListItem</h2>
<!-- backwards compatibility -->
<a id="schemaclusterlistitem"></a>
<a id="schema_ClusterListItem"></a>
<a id="tocSclusterlistitem"></a>
<a id="tocsclusterlistitem"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "sandboxProxyDomain": "string",
  "teamCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|endpoint|string|true|none|none|
|sandboxProxyDomain|string \| null|false|none|none|
|teamCount|integer(int64)|true|none|Number of teams assigned to the cluster.|

<h2 id="tocS_ClusterListResponse">ClusterListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclusterlistresponse"></a>
<a id="schema_ClusterListResponse"></a>
<a id="tocSclusterlistresponse"></a>
<a id="tocsclusterlistresponse"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "endpoint": "string",
      "sandboxProxyDomain": "string",
      "teamCount": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ClusterListItem](#schemaclusterlistitem)]|true|none|none|
|total|integer(int64)|true|none|Number of clusters matching the search, ignoring limit and offset|

<h2 id="tocS_ClusterTeamListItem">ClusterTeamListItem</h2>
<!-- backwards compatibility -->
<a id="schemaclusterteamlistitem"></a>
<a id="schema_ClusterTeamListItem"></a>
<a id="tocSclusterteamlistitem"></a>
<a id="tocsclusterteamlistitem"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "string",
  "name": "string",
  "slug": "string",
  "isBanned": true,
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|email|string|true|none|none|
|name|string \| null|false|none|none|
|slug|string \| null|false|none|none|
|isBanned|boolean|true|none|none|
|createdAt|string(date-time)|true|none|none|

<h2 id="tocS_ClusterTeamListResponse">ClusterTeamListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclusterteamlistresponse"></a>
<a id="schema_ClusterTeamListResponse"></a>
<a id="tocSclusterteamlistresponse"></a>
<a id="tocsclusterteamlistresponse"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "string",
      "name": "string",
      "slug": "string",
      "isBanned": true,
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ClusterTeamListItem](#schemaclusterteamlistitem)]|true|none|none|
|total|integer(int64)|true|none|Number of teams assigned to the cluster, ignoring limit and offset|

<h2 id="tocS_AdminClusterCreateRequest">AdminClusterCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminclustercreaterequest"></a>
<a id="schema_AdminClusterCreateRequest"></a>
<a id="tocSadminclustercreaterequest"></a>
<a id="tocsadminclustercreaterequest"></a>

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "endpoint": "string",
  "endpoint_tls": true,
  "token": "string",
  "sandbox_proxy_domain": "string",
  "auth_org_id": "string",
  "telemetry_client_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_id|string(uuid)|false|none|Optional stable identifier for idempotent creation. Reuse succeeds only when the immutable configuration is identical.|
|name|string|true|none|none|
|endpoint|string|true|none|none|
|endpoint_tls|boolean|true|none|none|
|token|string|true|none|none|
|sandbox_proxy_domain|string \| null|false|none|none|
|auth_org_id|string \| null|false|none|none|
|telemetry_client_id|string|false|none|none|

<h2 id="tocS_ClusterUpdateRequest">ClusterUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclusterupdaterequest"></a>
<a id="schema_ClusterUpdateRequest"></a>
<a id="tocSclusterupdaterequest"></a>
<a id="tocsclusterupdaterequest"></a>

```json
{
  "name": "string",
  "endpoint": "string",
  "endpointTls": true,
  "sandboxProxyDomain": "string",
  "authOrgId": "string",
  "deletionProtection": true
}
```

Partial update; only the properties present are written. An explicit null or an empty string clears `sandboxProxyDomain` or `authOrgId`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|endpoint|string|false|none|none|
|endpointTls|boolean|false|none|none|
|sandboxProxyDomain|string \| null|false|none|none|
|authOrgId|string \| null|false|none|none|
|deletionProtection|boolean|false|none|none|

<h2 id="tocS_ClusterTokenRotateRequest">ClusterTokenRotateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclustertokenrotaterequest"></a>
<a id="schema_ClusterTokenRotateRequest"></a>
<a id="tocSclustertokenrotaterequest"></a>
<a id="tocsclustertokenrotaterequest"></a>

```json
{
  "token": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string(password)|true|none|New cluster access token. Write-only.|

<h2 id="tocS_AdminSandboxKillResult">AdminSandboxKillResult</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxkillresult"></a>
<a id="schema_AdminSandboxKillResult"></a>
<a id="tocSadminsandboxkillresult"></a>
<a id="tocsadminsandboxkillresult"></a>

```json
{
  "killedCount": 0,
  "failedCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|killedCount|integer|true|none|Number of sandboxes successfully killed|
|failedCount|integer|true|none|Number of sandboxes that failed to kill|

<h2 id="tocS_AdminSandbox">AdminSandbox</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandbox"></a>
<a id="schema_AdminSandbox"></a>
<a id="tocSadminsandbox"></a>
<a id="tocsadminsandbox"></a>

```json
{
  "sandboxID": "string",
  "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "state": "running"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxID|string|true|none|Identifier of the sandbox|
|teamID|string(uuid)|true|none|Identifier of the team that owns the sandbox|
|state|[AdminSandboxState](#schemaadminsandboxstate)|true|none|State after the sandbox's latest create, resume, pause or kill event|

#### Enumerated Values

|Property|Value|
|---|---|
|state|running|
|state|paused|
|state|killed|

<h2 id="tocS_AdminSandboxState">AdminSandboxState</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxstate"></a>
<a id="schema_AdminSandboxState"></a>
<a id="tocSadminsandboxstate"></a>
<a id="tocsadminsandboxstate"></a>

```json
"running"
```

State after the sandbox's latest create, resume, pause or kill event

<h2 id="tocS_AdminSandboxBuildStatusGroup">AdminSandboxBuildStatusGroup</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxbuildstatusgroup"></a>
<a id="schema_AdminSandboxBuildStatusGroup"></a>
<a id="tocSadminsandboxbuildstatusgroup"></a>
<a id="tocsadminsandboxbuildstatusgroup"></a>

```json
"pending"
```

Coarse build state derived from the build status: pending (pending,
waiting), in_progress (in_progress, building, snapshotting), ready
(ready, uploaded, success) or failed (any other status)

<h2 id="tocS_AdminSandboxBuild">AdminSandboxBuild</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxbuild"></a>
<a id="schema_AdminSandboxBuild"></a>
<a id="tocSadminsandboxbuild"></a>
<a id="tocsadminsandboxbuild"></a>

```json
{
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateID": "string",
  "tag": "string",
  "status": "string",
  "statusGroup": "pending",
  "clusterNodeID": "string",
  "assignedAt": "1970-01-01T00:00:00Z",
  "isCurrent": true,
  "restorable": true
}
```

A build assigned to a sandbox's snapshot template under a tag

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildID|string(uuid)|true|none|Identifier of the build|
|templateID|string|true|none|Identifier of the snapshot template the build is assigned to|
|tag|string|true|none|Tag the build is assigned under|
|status|string|true|none|**Deprecated.** Same value as statusGroup|
|statusGroup|[AdminSandboxBuildStatusGroup](#schemaadminsandboxbuildstatusgroup)|true|none|Coarse build state derived from the build status: pending (pending,<br>waiting), in_progress (in_progress, building, snapshotting), ready<br>(ready, uploaded, success) or failed (any other status)<br>|
|clusterNodeID|string \| null|true|none|Node that produced the build, null when it was not recorded|
|assignedAt|string(date-time)|true|none|When the build was assigned to the template under this tag|
|isCurrent|boolean|true|none|Whether this build is the template's newest ready assignment under<br>the tag, the build a resume uses, regardless of the status filter<br>|
|restorable|boolean|true|none|Whether the restore route would accept this build: it is ready,<br>assigned under the default tag, not the current build, and its<br>snapshot template is not deleted<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|statusGroup|pending|
|statusGroup|in_progress|
|statusGroup|ready|
|statusGroup|failed|

<h2 id="tocS_AdminSandboxBuildList">AdminSandboxBuildList</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxbuildlist"></a>
<a id="schema_AdminSandboxBuildList"></a>
<a id="tocSadminsandboxbuildlist"></a>
<a id="tocsadminsandboxbuildlist"></a>

```json
{
  "items": [
    {
      "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "templateID": "string",
      "tag": "string",
      "status": "string",
      "statusGroup": "pending",
      "clusterNodeID": "string",
      "assignedAt": "1970-01-01T00:00:00Z",
      "isCurrent": true,
      "restorable": true
    }
  ],
  "total": 0,
  "snapshotTemplateID": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AdminSandboxBuild](#schemaadminsandboxbuild)]|true|none|none|
|total|integer(int64)|true|none|Number of assignments matching the tag and status filter, ignoring limit and offset|
|snapshotTemplateID|string \| null|true|none|Identifier of the template that holds the sandbox's snapshot, null<br>when the sandbox has no snapshot<br>|

<h2 id="tocS_AdminSandboxBuildRestoreRequest">AdminSandboxBuildRestoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxbuildrestorerequest"></a>
<a id="schema_AdminSandboxBuildRestoreRequest"></a>
<a id="tocSadminsandboxbuildrestorerequest"></a>
<a id="tocsadminsandboxbuildrestorerequest"></a>

```json
{
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildID|string(uuid)|true|none|Build to make current. It must be ready and already assigned to the<br>sandbox's snapshot template under the default tag.<br>|

<h2 id="tocS_AdminSandboxBuildRestoreResult">AdminSandboxBuildRestoreResult</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxbuildrestoreresult"></a>
<a id="schema_AdminSandboxBuildRestoreResult"></a>
<a id="tocSadminsandboxbuildrestoreresult"></a>
<a id="tocsadminsandboxbuildrestoreresult"></a>

```json
{
  "sandboxID": "string",
  "templateID": "string",
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "assignedAt": "1970-01-01T00:00:00Z",
  "previousBuildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxID|string|true|none|Identifier of the sandbox|
|templateID|string|true|none|Identifier of the snapshot template that received the assignment|
|buildID|string(uuid)|true|none|Build that is now the template's current default build|
|assignedAt|string(date-time)|true|none|When the new assignment was written|
|previousBuildID|string(uuid) \| null|true|none|Build that was current before the restore, null when there was none|

<h2 id="tocS_AdminSandboxOverview">AdminSandboxOverview</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxoverview"></a>
<a id="schema_AdminSandboxOverview"></a>
<a id="tocSadminsandboxoverview"></a>
<a id="tocsadminsandboxoverview"></a>

```json
{
  "sandboxId": "string",
  "team": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "email": "string"
  },
  "snapshotTemplateId": "string",
  "lastPause": {
    "kind": {},
    "autoPause": true,
    "autoPauseKind": {}
  },
  "latestBuild": {
    "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "templateId": "string",
    "tag": "string",
    "status": "string",
    "statusGroup": {},
    "clusterNodeId": "string",
    "assignedAt": "1970-01-01T00:00:00Z",
    "isCurrent": true,
    "restorable": true
  },
  "buildCount": 0
}
```

Who owns a sandbox and what its snapshot holds, read from the database:
the team, the snapshot template and its most recent pause, and the
newest default-tag build assignment of that template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxId|string|true|none|Identifier of the sandbox|
|team|[AdminSandboxOverviewTeam](#schemaadminsandboxoverviewteam)|true|none|The team the sandbox belongs to|
|snapshotTemplateId|string \| null|true|none|Template that holds the sandbox's snapshot, null when the sandbox has no snapshot|
|lastPause|object \| null|true|none|What the most recent pause recorded, null when the sandbox has no snapshot|
|latestBuild|object \| null|true|none|Newest default-tag build assignment of the snapshot template, null<br>when there is no snapshot or no assignment<br>|
|buildCount|integer(int64)|true|none|Number of default-tag build assignments of the snapshot template|

<h2 id="tocS_AdminSandboxOverviewTeam">AdminSandboxOverviewTeam</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxoverviewteam"></a>
<a id="schema_AdminSandboxOverviewTeam"></a>
<a id="tocSadminsandboxoverviewteam"></a>
<a id="tocsadminsandboxoverviewteam"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "email": "string"
}
```

The team the sandbox belongs to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the team|
|name|string \| null|true|none|Name of the team|
|email|string \| null|true|none|Contact email of the team|

<h2 id="tocS_AdminSandboxLastPause">AdminSandboxLastPause</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxlastpause"></a>
<a id="schema_AdminSandboxLastPause"></a>
<a id="tocSadminsandboxlastpause"></a>
<a id="tocsadminsandboxlastpause"></a>

```json
{
  "kind": {},
  "autoPause": true,
  "autoPauseKind": {}
}
```

The snapshot as the most recent pause left it. A resume can change
whether the sandbox auto-pauses without rewriting it, and restoring an
older build does not change it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|object|true|none|Kind of snapshot the most recent pause took|
|autoPause|boolean|true|none|Whether the sandbox pauses instead of being killed on timeout, as of the most recent pause|
|autoPauseKind|object|true|none|Kind of snapshot an auto-pause takes, as of the most recent pause|

<h2 id="tocS_AdminSandboxPauseKind">AdminSandboxPauseKind</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxpausekind"></a>
<a id="schema_AdminSandboxPauseKind"></a>
<a id="tocSadminsandboxpausekind"></a>
<a id="tocsadminsandboxpausekind"></a>

```json
"memory"
```

What a pause kept: memory is a full snapshot that resumes where the
sandbox left off, filesystem keeps only the root filesystem and boots
it again on resume

<h2 id="tocS_AdminSandboxOverviewBuild">AdminSandboxOverviewBuild</h2>
<!-- backwards compatibility -->
<a id="schemaadminsandboxoverviewbuild"></a>
<a id="schema_AdminSandboxOverviewBuild"></a>
<a id="tocSadminsandboxoverviewbuild"></a>
<a id="tocsadminsandboxoverviewbuild"></a>

```json
{
  "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateId": "string",
  "tag": "string",
  "status": "string",
  "statusGroup": {},
  "clusterNodeId": "string",
  "assignedAt": "1970-01-01T00:00:00Z",
  "isCurrent": true,
  "restorable": true
}
```

The newest default-tag build assignment of a sandbox's snapshot template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildId|string(uuid)|true|none|Identifier of the build|
|templateId|string|true|none|Identifier of the snapshot template the build is assigned to|
|tag|string|true|none|Tag the build is assigned under|
|status|string|true|none|**Deprecated.** Same value as statusGroup|
|statusGroup|object \| null|true|none|Coarse build state, null when the stored group is not one of the known values|
|clusterNodeId|string \| null|true|none|Node that produced the build, null when it was not recorded|
|assignedAt|string(date-time)|true|none|When the build was assigned to the template under the tag|
|isCurrent|boolean|true|none|Always true, the newest assignment is the one the template resolves to|
|restorable|boolean|true|none|Always false, the newest assignment is already current|

<h2 id="tocS_AdminTeamRunningSandboxCounts">AdminTeamRunningSandboxCounts</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamrunningsandboxcounts"></a>
<a id="schema_AdminTeamRunningSandboxCounts"></a>
<a id="tocSadminteamrunningsandboxcounts"></a>
<a id="tocsadminteamrunningsandboxcounts"></a>

```json
{
  "property1": 1,
  "property2": 1
}
```

Cached live sandbox index count keyed by team ID. Counts may briefly
include sandboxes transitioning out of running; teams without indexed
sandboxes are omitted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int64)|false|none|none|

<h2 id="tocS_AdminBuildCancelResult">AdminBuildCancelResult</h2>
<!-- backwards compatibility -->
<a id="schemaadminbuildcancelresult"></a>
<a id="schema_AdminBuildCancelResult"></a>
<a id="tocSadminbuildcancelresult"></a>
<a id="tocsadminbuildcancelresult"></a>

```json
{
  "cancelledCount": 0,
  "failedCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelledCount|integer|true|none|Number of builds successfully cancelled|
|failedCount|integer|true|none|Number of builds that failed to cancel|

<h2 id="tocS_AdminTeamListRequest">AdminTeamListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamlistrequest"></a>
<a id="schema_AdminTeamListRequest"></a>
<a id="tocSadminteamlistrequest"></a>
<a id="tocsadminteamlistrequest"></a>

```json
{
  "projectIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "search": "string",
  "hideBanned": false,
  "hideBlocked": false,
  "createdAfter": "1970-01-01T00:00:00Z",
  "createdBefore": "1970-01-01T00:00:00Z",
  "sortBy": "name",
  "sortOrder": {},
  "limit": 50,
  "offset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectIds|[string(uuid)]|false|none|Only list these teams. An empty list matches no team; omit it to list every team.|
|search|string|false|none|A team ID, as a UUID or public project ID, matches that team exactly. Any other text matches a substring of the email, name or slug, ignoring case.|
|hideBanned|boolean|false|none|Leave out banned teams|
|hideBlocked|boolean|false|none|Leave out blocked teams|
|createdAfter|string(date-time)|false|none|Only list teams created at or after this time|
|createdBefore|string(date-time)|false|none|Only list teams created at or before this time|
|sortBy|[AdminTeamListSortField](#schemaadminteamlistsortfield)|false|none|Column to order by, with newer teams first among equal values. Omit it<br>to list the newest teams first.<br>|
|sortOrder|object|false|none|Ignored when `sortBy` is omitted.|
|limit|integer(int32)|false|none|Maximum number of teams to return|
|offset|integer(int32)|false|none|Number of matching teams to skip|

#### Enumerated Values

|Property|Value|
|---|---|
|sortBy|name|
|sortBy|email|
|sortBy|createdAt|
|sortBy|runningSandboxes|

<h2 id="tocS_AdminTeamListSortField">AdminTeamListSortField</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamlistsortfield"></a>
<a id="schema_AdminTeamListSortField"></a>
<a id="tocSadminteamlistsortfield"></a>
<a id="tocsadminteamlistsortfield"></a>

```json
"name"
```

Column to order by, with newer teams first among equal values. Omit it
to list the newest teams first.

<h2 id="tocS_AdminTeamList">AdminTeamList</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamlist"></a>
<a id="schema_AdminTeamList"></a>
<a id="tocSadminteamlist"></a>
<a id="tocsadminteamlist"></a>

```json
{
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "string",
      "name": "string",
      "isBanned": true,
      "isBlocked": true,
      "createdAt": "1970-01-01T00:00:00Z",
      "memberCount": 0,
      "runningSandboxCount": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AdminTeamListItem](#schemaadminteamlistitem)]|true|none|none|
|total|integer(int64)|true|none|Number of teams matching the filters, ignoring limit and offset|

<h2 id="tocS_AdminTeamListItem">AdminTeamListItem</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamlistitem"></a>
<a id="schema_AdminTeamListItem"></a>
<a id="tocSadminteamlistitem"></a>
<a id="tocsadminteamlistitem"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "string",
  "name": "string",
  "isBanned": true,
  "isBlocked": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "memberCount": 0,
  "runningSandboxCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|email|string|true|none|none|
|name|string|true|none|none|
|isBanned|boolean|true|none|none|
|isBlocked|boolean|true|none|none|
|createdAt|string(date-time)|true|none|none|
|memberCount|integer(int64)|true|none|Number of users in the team|
|runningSandboxCount|integer(int64)|false|none|Running sandboxes from the same cached snapshot as `GET /admin/sandboxes/running-counts`. Present only when the list is sorted by `runningSandboxes`.|

<h2 id="tocS_AdminTeam">AdminTeam</h2>
<!-- backwards compatibility -->
<a id="schemaadminteam"></a>
<a id="schema_AdminTeam"></a>
<a id="tocSadminteam"></a>
<a id="tocsadminteam"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "string",
  "name": "string",
  "slug": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "isBlocked": true,
  "isBanned": true,
  "blockedReason": "string",
  "sandboxSchedulingLabels": [
    "string"
  ],
  "clusterId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "clusterName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|email|string|true|none|none|
|name|string|true|none|none|
|slug|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|isBlocked|boolean|true|none|none|
|isBanned|boolean|true|none|none|
|blockedReason|string \| null|false|none|none|
|sandboxSchedulingLabels|[string]|true|none|none|
|clusterId|string(uuid) \| null|false|none|none|
|clusterName|string \| null|false|none|none|

<h2 id="tocS_AdminTeamSchedulingLabels">AdminTeamSchedulingLabels</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamschedulinglabels"></a>
<a id="schema_AdminTeamSchedulingLabels"></a>
<a id="tocSadminteamschedulinglabels"></a>
<a id="tocsadminteamschedulinglabels"></a>

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
|labels|[string]|true|none|The team's full set of labels. A request's labels replace the current ones.|

<h2 id="tocS_AdminTeamBanResult">AdminTeamBanResult</h2>
<!-- backwards compatibility -->
<a id="schemaadminteambanresult"></a>
<a id="schema_AdminTeamBanResult"></a>
<a id="tocSadminteambanresult"></a>
<a id="tocsadminteambanresult"></a>

```json
{
  "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sandboxesKilled": 0,
  "sandboxesFailedToKill": 0,
  "sandboxKillError": "string",
  "buildsCancelled": 0,
  "buildsFailedToCancel": 0,
  "buildCancelError": "string"
}
```

The outcome of banning one team. The ban is stored before the team's
sandboxes are killed and its builds cancelled, so it holds even when
either step fails.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamID|string(uuid)|true|none|none|
|sandboxesKilled|integer|true|none|Number of the team's sandboxes killed|
|sandboxesFailedToKill|integer|true|none|Number of the team's sandboxes that failed to kill|
|sandboxKillError|string|false|none|Set when the kill step failed or ran out of time; the counts cover what it did until then.|
|buildsCancelled|integer|true|none|Number of the team's builds cancelled|
|buildsFailedToCancel|integer|true|none|Number of the team's builds that failed to cancel|
|buildCancelError|string|false|none|Set when the cancel step failed or ran out of time; the counts cover what it did until then.|

<h2 id="tocS_AdminTeamsBanRequest">AdminTeamsBanRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamsbanrequest"></a>
<a id="schema_AdminTeamsBanRequest"></a>
<a id="tocSadminteamsbanrequest"></a>
<a id="tocsadminteamsbanrequest"></a>

```json
{
  "teamIDs": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamIDs|[string(uuid)]|true|none|none|

<h2 id="tocS_AdminTeamsBanResult">AdminTeamsBanResult</h2>
<!-- backwards compatibility -->
<a id="schemaadminteamsbanresult"></a>
<a id="schema_AdminTeamsBanResult"></a>
<a id="tocSadminteamsbanresult"></a>
<a id="tocsadminteamsbanresult"></a>

```json
{
  "banned": [
    {
      "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sandboxesKilled": 0,
      "sandboxesFailedToKill": 0,
      "sandboxKillError": "string",
      "buildsCancelled": 0,
      "buildsFailedToCancel": 0,
      "buildCancelError": "string"
    }
  ],
  "notFound": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "failed": [
    {
      "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "error": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|banned|[[AdminTeamBanResult](#schemaadminteambanresult)]|true|none|Teams whose ban is stored, with the outcome of killing their sandboxes and cancelling their builds|
|notFound|[string(uuid)]|true|none|Requested teams that do not exist|
|failed|[[AdminTeamBanFailure](#schemaadminteambanfailure)]|true|none|Teams whose ban could not be stored or put into force; retrying repeats every step|

<h2 id="tocS_AdminTeamBanFailure">AdminTeamBanFailure</h2>
<!-- backwards compatibility -->
<a id="schemaadminteambanfailure"></a>
<a id="schema_AdminTeamBanFailure"></a>
<a id="tocSadminteambanfailure"></a>
<a id="tocsadminteambanfailure"></a>

```json
{
  "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "error": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamID|string(uuid)|true|none|none|
|error|string|true|none|none|

<h2 id="tocS_AdminTemplateTeam">AdminTemplateTeam</h2>
<!-- backwards compatibility -->
<a id="schemaadmintemplateteam"></a>
<a id="schema_AdminTemplateTeam"></a>
<a id="tocSadmintemplateteam"></a>
<a id="tocsadmintemplateteam"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the team that owns the template|
|name|string|true|none|Name of the team|
|email|string|true|none|Contact email of the team|

<h2 id="tocS_AdminTemplateAlias">AdminTemplateAlias</h2>
<!-- backwards compatibility -->
<a id="schemaadmintemplatealias"></a>
<a id="schema_AdminTemplateAlias"></a>
<a id="tocSadmintemplatealias"></a>
<a id="tocsadmintemplatealias"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateID": "string",
  "alias": "string",
  "namespace": "string",
  "isRenamable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the alias|
|templateID|string|true|none|Identifier of the template the alias resolves to|
|alias|string|true|none|The alias|
|namespace|string \| null|true|none|Namespace of the alias, or null for an alias that resolves for every team|
|isRenamable|boolean|true|none|Whether building the template under another name replaces the alias|

<h2 id="tocS_AdminTemplateAliases">AdminTemplateAliases</h2>
<!-- backwards compatibility -->
<a id="schemaadmintemplatealiases"></a>
<a id="schema_AdminTemplateAliases"></a>
<a id="tocSadmintemplatealiases"></a>
<a id="tocsadmintemplatealiases"></a>

```json
{
  "templateID": "string",
  "public": true,
  "team": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "email": "string"
  },
  "aliases": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "templateID": "string",
      "alias": "string",
      "namespace": "string",
      "isRenamable": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|public|boolean|true|none|Whether the template is public|
|team|[AdminTemplateTeam](#schemaadmintemplateteam)|true|none|none|
|aliases|[[AdminTemplateAlias](#schemaadmintemplatealias)]|true|none|All aliases of the template, those without a namespace first|

<h2 id="tocS_AdminTemplateAliasCreateRequest">AdminTemplateAliasCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmintemplatealiascreaterequest"></a>
<a id="schema_AdminTemplateAliasCreateRequest"></a>
<a id="tocSadmintemplatealiascreaterequest"></a>
<a id="tocsadmintemplatealiascreaterequest"></a>

```json
{
  "templateID": "string",
  "alias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template the alias resolves to|
|alias|string|true|none|The alias, without a namespace or tag|

<h2 id="tocS_AdminTemplateAliasDeleted">AdminTemplateAliasDeleted</h2>
<!-- backwards compatibility -->
<a id="schemaadmintemplatealiasdeleted"></a>
<a id="schema_AdminTemplateAliasDeleted"></a>
<a id="tocSadmintemplatealiasdeleted"></a>
<a id="tocsadmintemplatealiasdeleted"></a>

```json
{
  "aliasID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "templateID": "string",
  "alias": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasID|string(uuid)|true|none|Identifier of the removed alias|
|templateID|string|true|none|Identifier of the template the alias resolved to|
|alias|string|true|none|The removed alias|

<h2 id="tocS_AdminDefaultTemplate">AdminDefaultTemplate</h2>
<!-- backwards compatibility -->
<a id="schemaadmindefaulttemplate"></a>
<a id="schema_AdminDefaultTemplate"></a>
<a id="tocSadmindefaulttemplate"></a>
<a id="tocsadmindefaulttemplate"></a>

```json
{
  "templateID": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the default template|
|description|string \| null|true|none|Description of the default template|

<h2 id="tocS_AdminDefaultTemplateCreateRequest">AdminDefaultTemplateCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindefaulttemplatecreaterequest"></a>
<a id="schema_AdminDefaultTemplateCreateRequest"></a>
<a id="tocSadmindefaulttemplatecreaterequest"></a>
<a id="tocsadmindefaulttemplatecreaterequest"></a>

```json
{
  "templateID": "string",
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template to make a default template|
|description|string \| null|false|none|Description of the default template; blank is stored as none|

<h2 id="tocS_AdminDefaultTemplateUpdateRequest">AdminDefaultTemplateUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadmindefaulttemplateupdaterequest"></a>
<a id="schema_AdminDefaultTemplateUpdateRequest"></a>
<a id="tocSadmindefaulttemplateupdaterequest"></a>
<a id="tocsadmindefaulttemplateupdaterequest"></a>

```json
{
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|true|none|New description of the default template; null or blank clears it|

<h2 id="tocS_AdminTemplateLookup">AdminTemplateLookup</h2>
<!-- backwards compatibility -->
<a id="schemaadmintemplatelookup"></a>
<a id="schema_AdminTemplateLookup"></a>
<a id="tocSadmintemplatelookup"></a>
<a id="tocsadmintemplatelookup"></a>

```json
{
  "templateID": "string",
  "team": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "email": "string"
  },
  "names": [
    "string"
  ],
  "public": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "isSnapshot": true,
  "snapshotSandboxID": "string",
  "matchedBuildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "builds": [
    {
      "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "building",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "cpuCount": 1,
      "maxCpuCount": {},
      "memoryMB": 128,
      "diskSizeMB": 0,
      "envdVersion": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|team|[AdminTemplateTeam](#schemaadmintemplateteam)|true|none|none|
|names|[string]|true|none|Names of the template (namespace/alias format when namespaced)|
|public|boolean|true|none|Whether the template is public|
|createdAt|string(date-time)|true|none|Time when the template was created|
|lastSpawnedAt|string(date-time) \| null|true|none|Time when the template was last used|
|spawnCount|integer(int64)|true|none|Number of times the template was used|
|isSnapshot|boolean|true|none|Whether the template is a snapshot of a sandbox|
|snapshotSandboxID|string \| null|true|none|The sandbox a snapshot template was taken from|
|matchedBuildID|string(uuid) \| null|true|none|The build the query matched, when it was a build ID|
|builds|[[TemplateBuild](#schematemplatebuild)]|true|none|The template's newest builds of any tag and status, newest first, at most 100|

<h2 id="tocS_VolumeToken">VolumeToken</h2>
<!-- backwards compatibility -->
<a id="schemavolumetoken"></a>
<a id="schema_VolumeToken"></a>
<a id="tocSvolumetoken"></a>
<a id="tocsvolumetoken"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|none|

<h2 id="tocS_Template">Template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_Template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "templateID": "string",
  "buildID": "string",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "diskSizeMB": 0,
  "public": true,
  "aliases": [
    "string"
  ],
  "names": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "buildCount": 0,
  "envdVersion": "string",
  "buildStatus": "building",
  "isDefault": true,
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|buildID|string|true|none|Identifier of the last successful build for given template|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|maxCpuCount|object|false|none|Maximum CPU count for resizable templates; absent for fixed-size templates.|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|true|none|Disk size for the sandbox in MiB|
|public|boolean|true|none|Whether the template is public or only accessible by the team|
|aliases|[string]|true|none|**Deprecated.** Aliases of the template|
|names|[string]|true|none|Names of the template (namespace/alias format when namespaced)|
|createdAt|string(date-time)|true|none|Time when the template was created|
|updatedAt|string(date-time)|true|none|Time when the template was last updated|
|createdBy|object \| null|true|none|none|
|lastSpawnedAt|string(date-time) \| null|true|none|Time when the template was last used|
|spawnCount|integer(int64)|true|none|Number of times the template was used|
|buildCount|integer(int32)|true|none|Number of times the template was built|
|envdVersion|[EnvdVersion](#schemaenvdversion)|true|none|Version of the envd running in the sandbox|
|buildStatus|[TemplateBuildStatus](#schematemplatebuildstatus)|true|none|Status of the template build|
|isDefault|boolean|false|none|Whether the template is one of the platform's default templates. A default template owned by another team carries zero or null usage fields (`spawnCount`, `buildCount`, `lastSpawnedAt`, `createdBy`).<br>|
|description|string|false|none|Description of the template|

#### Enumerated Values

|Property|Value|
|---|---|
|buildStatus|building|
|buildStatus|waiting|
|buildStatus|ready|
|buildStatus|error|

<h2 id="tocS_TemplateSearchResponse">TemplateSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatesearchresponse"></a>
<a id="schema_TemplateSearchResponse"></a>
<a id="tocStemplatesearchresponse"></a>
<a id="tocstemplatesearchresponse"></a>

```json
{
  "data": [
    {
      "templateID": "string",
      "buildID": "string",
      "cpuCount": 1,
      "maxCpuCount": {},
      "memoryMB": 128,
      "diskSizeMB": 0,
      "public": true,
      "aliases": [
        "string"
      ],
      "names": [
        "string"
      ],
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "createdBy": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": null
      },
      "lastSpawnedAt": "1970-01-01T00:00:00Z",
      "spawnCount": 0,
      "buildCount": 0,
      "envdVersion": "string",
      "buildStatus": "building",
      "isDefault": true,
      "description": "string"
    }
  ],
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Template](#schematemplate)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor of the next page, or null on the last page|

<h2 id="tocS_BuildStatus">BuildStatus</h2>
<!-- backwards compatibility -->
<a id="schemabuildstatus"></a>
<a id="schema_BuildStatus"></a>
<a id="tocSbuildstatus"></a>
<a id="tocsbuildstatus"></a>

```json
"building"
```

Build status as the builds list reports it.

<h2 id="tocS_ListedBuild">ListedBuild</h2>
<!-- backwards compatibility -->
<a id="schemalistedbuild"></a>
<a id="schema_ListedBuild"></a>
<a id="tocSlistedbuild"></a>
<a id="tocslistedbuild"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "template": "string",
  "templateId": "string",
  "status": "building",
  "statusMessage": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "cpuCount": 0,
  "memoryMB": 0,
  "diskSizeMB": 0,
  "envdVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the build.|
|template|string|true|none|Template alias when present, otherwise template ID.|
|templateId|string|true|none|Identifier of the template.|
|status|[BuildStatus](#schemabuildstatus)|true|none|Build status as the builds list reports it.|
|statusMessage|string \| null|true|none|Failure message when status is `failed`, otherwise `null`.|
|createdAt|string(date-time)|true|none|Build creation timestamp in RFC3339 format.|
|finishedAt|string(date-time) \| null|true|none|Build completion timestamp in RFC3339 format, if finished.|
|cpuCount|integer(int64)|true|none|CPU cores configured for the build.|
|memoryMB|integer(int64)|true|none|Memory in MiB configured for the build.|
|diskSizeMB|integer(int64) \| null|true|none|Disk size in MiB configured for the build, if recorded.|
|envdVersion|string \| null|true|none|envd version the build was created with, if recorded.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|building|
|status|failed|
|status|success|

<h2 id="tocS_BuildsListResponse">BuildsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemabuildslistresponse"></a>
<a id="schema_BuildsListResponse"></a>
<a id="tocSbuildslistresponse"></a>
<a id="tocsbuildslistresponse"></a>

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "template": "string",
      "templateId": "string",
      "status": "building",
      "statusMessage": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "cpuCount": 0,
      "memoryMB": 0,
      "diskSizeMB": 0,
      "envdVersion": "string"
    }
  ],
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ListedBuild](#schemalistedbuild)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor to pass to the next list request, or `null` if there is no next page.|

<h2 id="tocS_BuildStatusItem">BuildStatusItem</h2>
<!-- backwards compatibility -->
<a id="schemabuildstatusitem"></a>
<a id="schema_BuildStatusItem"></a>
<a id="tocSbuildstatusitem"></a>
<a id="tocsbuildstatusitem"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "building",
  "finishedAt": "1970-01-01T00:00:00Z",
  "statusMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the build.|
|status|[BuildStatus](#schemabuildstatus)|true|none|Build status as the builds list reports it.|
|finishedAt|string(date-time) \| null|true|none|Build completion timestamp in RFC3339 format, if finished.|
|statusMessage|string \| null|true|none|Failure message when status is `failed`, otherwise `null`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|building|
|status|failed|
|status|success|

<h2 id="tocS_BuildsStatusesResponse">BuildsStatusesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabuildsstatusesresponse"></a>
<a id="schema_BuildsStatusesResponse"></a>
<a id="tocSbuildsstatusesresponse"></a>
<a id="tocsbuildsstatusesresponse"></a>

```json
{
  "buildStatuses": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "building",
      "finishedAt": "1970-01-01T00:00:00Z",
      "statusMessage": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildStatuses|[[BuildStatusItem](#schemabuildstatusitem)]|true|none|List of build statuses|

<h2 id="tocS_BuildInfo">BuildInfo</h2>
<!-- backwards compatibility -->
<a id="schemabuildinfo"></a>
<a id="schema_BuildInfo"></a>
<a id="tocSbuildinfo"></a>
<a id="tocsbuildinfo"></a>

```json
{
  "names": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "status": "building",
  "statusMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|Template names related to this build, if available.|
|createdAt|string(date-time)|true|none|Build creation timestamp in RFC3339 format.|
|finishedAt|string(date-time) \| null|true|none|Build completion timestamp in RFC3339 format, if finished.|
|status|[BuildStatus](#schemabuildstatus)|true|none|Build status as the builds list reports it.|
|statusMessage|string \| null|true|none|Failure message when status is `failed`, otherwise `null`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|building|
|status|failed|
|status|success|

<h2 id="tocS_TemplateRequestResponseV3">TemplateRequestResponseV3</h2>
<!-- backwards compatibility -->
<a id="schematemplaterequestresponsev3"></a>
<a id="schema_TemplateRequestResponseV3"></a>
<a id="tocStemplaterequestresponsev3"></a>
<a id="tocstemplaterequestresponsev3"></a>

```json
{
  "templateID": "string",
  "buildID": "string",
  "public": true,
  "names": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "aliases": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|buildID|string|true|none|Identifier of the last successful build for given template|
|public|boolean|true|none|Whether the template is public or only accessible by the team|
|names|[string]|true|none|Names of the template|
|tags|[string]|true|none|Tags assigned to the template build|
|aliases|[string]|true|none|**Deprecated.** Aliases of the template|

<h2 id="tocS_TemplateBuild">TemplateBuild</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuild"></a>
<a id="schema_TemplateBuild"></a>
<a id="tocStemplatebuild"></a>
<a id="tocstemplatebuild"></a>

```json
{
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "building",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "diskSizeMB": 0,
  "envdVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildID|string(uuid)|true|none|Identifier of the build|
|status|[TemplateBuildStatus](#schematemplatebuildstatus)|true|none|Status of the template build|
|createdAt|string(date-time)|true|none|Time when the build was created|
|updatedAt|string(date-time)|true|none|Time when the build was last updated|
|finishedAt|string(date-time)|false|none|Time when the build was finished|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|maxCpuCount|object|false|none|Maximum CPU count for resizable templates; absent for fixed-size templates.|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|false|none|Disk size for the sandbox in MiB|
|envdVersion|[EnvdVersion](#schemaenvdversion)|false|none|Version of the envd running in the sandbox|

#### Enumerated Values

|Property|Value|
|---|---|
|status|building|
|status|waiting|
|status|ready|
|status|error|

<h2 id="tocS_TemplateBuildWithTags">TemplateBuildWithTags</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildwithtags"></a>
<a id="schema_TemplateBuildWithTags"></a>
<a id="tocStemplatebuildwithtags"></a>
<a id="tocstemplatebuildwithtags"></a>

```json
{
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "building",
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "finishedAt": "1970-01-01T00:00:00Z",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "diskSizeMB": 0,
  "envdVersion": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buildID|string(uuid)|true|none|Identifier of the build|
|status|[TemplateBuildStatus](#schematemplatebuildstatus)|true|none|Status of the template build|
|createdAt|string(date-time)|true|none|Time when the build was created|
|updatedAt|string(date-time)|true|none|Time when the build was last updated|
|finishedAt|string(date-time)|false|none|Time when the build was finished|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|maxCpuCount|object|false|none|Maximum CPU count for resizable templates; absent for fixed-size templates.|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|false|none|Disk size for the sandbox in MiB|
|envdVersion|[EnvdVersion](#schemaenvdversion)|false|none|Version of the envd running in the sandbox|
|tags|[string]|true|none|Tags of the template that point at this build. A tag points at the latest ready build it was assigned to, the build a sandbox created with that tag starts from.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|building|
|status|waiting|
|status|ready|
|status|error|

<h2 id="tocS_TemplateV2">TemplateV2</h2>
<!-- backwards compatibility -->
<a id="schematemplatev2"></a>
<a id="schema_TemplateV2"></a>
<a id="tocStemplatev2"></a>
<a id="tocstemplatev2"></a>

```json
{
  "templateID": "string",
  "names": [
    "string"
  ],
  "public": true,
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "buildCount": 0,
  "isDefault": true,
  "description": "string",
  "buildStatus": "building",
  "defaultBuild": {
    "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "status": "building",
    "createdAt": "1970-01-01T00:00:00Z",
    "updatedAt": "1970-01-01T00:00:00Z",
    "finishedAt": "1970-01-01T00:00:00Z",
    "cpuCount": 1,
    "maxCpuCount": {},
    "memoryMB": 128,
    "diskSizeMB": 0,
    "envdVersion": "string"
  }
}
```

A template with its default build. `defaultBuild` is the build a sandbox created without a tag starts from, the latest ready build tagged default; it is absent until such a build is ready. `buildStatus` is the status of the latest build tagged default in any state: it is `building` while a rebuild runs, although sandboxes still start from the default build.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|names|[string]|true|none|Names of the template (namespace/alias format when namespaced)|
|public|boolean|true|none|Whether the template is public or only accessible by the team|
|createdAt|string(date-time)|true|none|Time when the template was created|
|updatedAt|string(date-time)|true|none|Time when the template was last updated|
|createdBy|object \| null|true|none|none|
|lastSpawnedAt|string(date-time) \| null|true|none|Time when the template was last used|
|spawnCount|integer(int64)|true|none|Number of times the template was used|
|buildCount|integer(int32)|true|none|Number of times the template was built|
|isDefault|boolean|true|none|Whether the template is one of the platform's default templates|
|description|string|false|none|Description of the template|
|buildStatus|[TemplateBuildStatus](#schematemplatebuildstatus)|true|none|Status of the template build|
|defaultBuild|[TemplateBuild](#schematemplatebuild)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|buildStatus|building|
|buildStatus|waiting|
|buildStatus|ready|
|buildStatus|error|

<h2 id="tocS_TemplateWithBuilds">TemplateWithBuilds</h2>
<!-- backwards compatibility -->
<a id="schematemplatewithbuilds"></a>
<a id="schema_TemplateWithBuilds"></a>
<a id="tocStemplatewithbuilds"></a>
<a id="tocstemplatewithbuilds"></a>

```json
{
  "templateID": "string",
  "buildID": "string",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "diskSizeMB": 0,
  "public": true,
  "aliases": [
    "string"
  ],
  "names": [
    "string"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastSpawnedAt": "1970-01-01T00:00:00Z",
  "spawnCount": 0,
  "buildCount": 0,
  "envdVersion": "string",
  "buildStatus": "building",
  "isDefault": true,
  "description": "string",
  "builds": [
    {
      "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "building",
      "createdAt": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z",
      "finishedAt": "1970-01-01T00:00:00Z",
      "cpuCount": 1,
      "maxCpuCount": {},
      "memoryMB": 128,
      "diskSizeMB": 0,
      "envdVersion": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|buildID|string|true|none|Identifier of the last successful build for given template|
|cpuCount|[CPUCount](#schemacpucount)|true|none|CPU cores for the sandbox|
|maxCpuCount|object|false|none|Maximum CPU count for resizable templates; absent for fixed-size templates.|
|memoryMB|[MemoryMB](#schemamemorymb)|true|none|Memory for the sandbox in MiB|
|diskSizeMB|[DiskSizeMB](#schemadisksizemb)|true|none|Disk size for the sandbox in MiB|
|public|boolean|true|none|Whether the template is public or only accessible by the team|
|aliases|[string]|true|none|**Deprecated.** Aliases of the template|
|names|[string]|true|none|Names of the template (namespace/alias format when namespaced)|
|createdAt|string(date-time)|true|none|Time when the template was created|
|updatedAt|string(date-time)|true|none|Time when the template was last updated|
|createdBy|object \| null|true|none|none|
|lastSpawnedAt|string(date-time) \| null|true|none|Time when the template was last used|
|spawnCount|integer(int64)|true|none|Number of times the template was used|
|buildCount|integer(int32)|true|none|Number of times the template was built|
|envdVersion|[EnvdVersion](#schemaenvdversion)|true|none|Version of the envd running in the sandbox|
|buildStatus|[TemplateBuildStatus](#schematemplatebuildstatus)|true|none|Status of the template build|
|isDefault|boolean|false|none|Whether the template is one of the platform's default templates. A default template owned by another team carries zero or null usage fields (`spawnCount`, `buildCount`, `lastSpawnedAt`, `createdBy`).<br>|
|description|string|false|none|Description of the template|
|builds|[[TemplateBuild](#schematemplatebuild)]|true|none|List of builds for the template|

#### Enumerated Values

|Property|Value|
|---|---|
|buildStatus|building|
|buildStatus|waiting|
|buildStatus|ready|
|buildStatus|error|

<h2 id="tocS_TemplateAliasResponse">TemplateAliasResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatealiasresponse"></a>
<a id="schema_TemplateAliasResponse"></a>
<a id="tocStemplatealiasresponse"></a>
<a id="tocstemplatealiasresponse"></a>

```json
{
  "templateID": "string",
  "public": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|templateID|string|true|none|Identifier of the template|
|public|boolean|true|none|Whether the template is public or only accessible by the team|

<h2 id="tocS_TemplateStep">TemplateStep</h2>
<!-- backwards compatibility -->
<a id="schematemplatestep"></a>
<a id="schema_TemplateStep"></a>
<a id="tocStemplatestep"></a>
<a id="tocstemplatestep"></a>

```json
{
  "type": "string",
  "args": [],
  "filesHash": "string",
  "force": false
}
```

Step in the template build process

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of the step|
|args|[string]|false|none|Arguments for the step|
|filesHash|string|false|none|Hash of the files used in the step (lowercase hex SHA-256)|
|force|boolean|false|none|Whether the step should be forced to run regardless of the cache|

<h2 id="tocS_TemplateBuildRequestV3">TemplateBuildRequestV3</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildrequestv3"></a>
<a id="schema_TemplateBuildRequestV3"></a>
<a id="tocStemplatebuildrequestv3"></a>
<a id="tocstemplatebuildrequestv3"></a>

```json
{
  "name": "string",
  "tags": [
    "string"
  ],
  "alias": "string",
  "teamID": "string",
  "cpuCount": 1,
  "maxCpuCount": {},
  "memoryMB": 128,
  "minFreeDiskMb": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the template. Can include a tag with colon separator (e.g. "my-template" or "my-template:v1"). If tag is included, it will be treated as if the tag was provided in the tags array.|
|tags|[string]|false|none|Tags to assign to the template build|
|alias|string|false|none|**Deprecated.** Alias of the template. Deprecated, use name instead.|
|teamID|string|false|none|**Deprecated.** Identifier of the team, as its UUID or its public project ID (prj_)|
|cpuCount|[CPUCount](#schemacpucount)|false|none|CPU cores for the sandbox|
|maxCpuCount|object|false|none|Maximum CPU count the template's sandboxes can be resized to; makes the template resizable. Must be at least cpuCount.|
|memoryMB|[MemoryMB](#schemamemorymb)|false|none|Memory for the sandbox in MiB|
|minFreeDiskMb|[MinFreeDiskMb](#schemaminfreediskmb)|false|none|Requested minimum free space after the template's build steps, in MiB. Omit to use the team's default. Set to 0 to request no minimum free-disk growth. The filesystem is never shrunk, including inherited or already-larger filesystems. Growth is best effort, so filesystem metadata can leave the available space slightly below the requested minimum.|

<h2 id="tocS_FromImageRegistry">FromImageRegistry</h2>
<!-- backwards compatibility -->
<a id="schemafromimageregistry"></a>
<a id="schema_FromImageRegistry"></a>
<a id="tocSfromimageregistry"></a>
<a id="tocsfromimageregistry"></a>

```json
{
  "type": "aws",
  "awsAccessKeyId": "string",
  "awsSecretAccessKey": "password",
  "awsRegion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AWSRegistry](#schemaawsregistry)|false|none|none|
|*oneOf*|[GCPRegistry](#schemagcpregistry)|false|none|none|
|*oneOf*|[GeneralRegistry](#schemageneralregistry)|false|none|none|

<h2 id="tocS_AWSRegistry">AWSRegistry</h2>
<!-- backwards compatibility -->
<a id="schemaawsregistry"></a>
<a id="schema_AWSRegistry"></a>
<a id="tocSawsregistry"></a>
<a id="tocsawsregistry"></a>

```json
{
  "type": "aws",
  "awsAccessKeyId": "string",
  "awsSecretAccessKey": "password",
  "awsRegion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of registry authentication|
|awsAccessKeyId|string|true|none|AWS Access Key ID for ECR authentication|
|awsSecretAccessKey|string(password)|true|none|AWS Secret Access Key for ECR authentication|
|awsRegion|string|true|none|AWS Region where the ECR registry is located|

#### Enumerated Values

|Property|Value|
|---|---|
|type|aws|

<h2 id="tocS_GCPRegistry">GCPRegistry</h2>
<!-- backwards compatibility -->
<a id="schemagcpregistry"></a>
<a id="schema_GCPRegistry"></a>
<a id="tocSgcpregistry"></a>
<a id="tocsgcpregistry"></a>

```json
{
  "type": "gcp",
  "serviceAccountJson": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of registry authentication|
|serviceAccountJson|string(password)|true|none|Service Account JSON for GCP authentication|

#### Enumerated Values

|Property|Value|
|---|---|
|type|gcp|

<h2 id="tocS_GeneralRegistry">GeneralRegistry</h2>
<!-- backwards compatibility -->
<a id="schemageneralregistry"></a>
<a id="schema_GeneralRegistry"></a>
<a id="tocSgeneralregistry"></a>
<a id="tocsgeneralregistry"></a>

```json
{
  "type": "registry",
  "username": "string",
  "password": "password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of registry authentication|
|username|string|true|none|Username to use for the registry|
|password|string(password)|true|none|Password to use for the registry|

#### Enumerated Values

|Property|Value|
|---|---|
|type|registry|

<h2 id="tocS_TemplateBuildStartV2">TemplateBuildStartV2</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildstartv2"></a>
<a id="schema_TemplateBuildStartV2"></a>
<a id="tocStemplatebuildstartv2"></a>
<a id="tocstemplatebuildstartv2"></a>

```json
{
  "fromImage": "string",
  "fromTemplate": "string",
  "fromImageRegistry": {
    "type": "aws",
    "awsAccessKeyId": "string",
    "awsSecretAccessKey": "password",
    "awsRegion": "string"
  },
  "force": false,
  "steps": [],
  "startCmd": "string",
  "readyCmd": "string"
}
```

Exactly one of fromImage or fromTemplate must be given and non-empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromImage|string|false|none|Image to use as a base for the template build|
|fromTemplate|string|false|none|Template to use as a base for the template build|
|fromImageRegistry|[FromImageRegistry](#schemafromimageregistry)|false|none|none|
|force|boolean|false|none|Whether the whole build should be forced to run regardless of the cache|
|steps|[[TemplateStep](#schematemplatestep)]|false|none|List of steps to execute in the template build|
|startCmd|string|false|none|Start command to execute in the template after the build|
|readyCmd|string|false|none|Ready check command to execute in the template after the build|

<h2 id="tocS_TemplateBuildFileUpload">TemplateBuildFileUpload</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildfileupload"></a>
<a id="schema_TemplateBuildFileUpload"></a>
<a id="tocStemplatebuildfileupload"></a>
<a id="tocstemplatebuildfileupload"></a>

```json
{
  "present": true,
  "url": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|present|boolean|true|none|Whether the file is already present in the cache|
|url|string|false|none|Url where the file should be uploaded to|
|headers|object|false|none|Request headers that must be sent with the upload request|

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"debug"
```

State of the sandbox

<h2 id="tocS_BuildLogEntry">BuildLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemabuildlogentry"></a>
<a id="schema_BuildLogEntry"></a>
<a id="tocSbuildlogentry"></a>
<a id="tocsbuildlogentry"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "message": "string",
  "level": "debug",
  "step": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|Timestamp of the log entry|
|message|string|true|none|Log message content|
|level|[LogLevel](#schemaloglevel)|true|none|State of the sandbox|
|step|string|false|none|Step in the build process related to the log entry|

#### Enumerated Values

|Property|Value|
|---|---|
|level|debug|
|level|info|
|level|warn|
|level|error|

<h2 id="tocS_BuildStatusReason">BuildStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemabuildstatusreason"></a>
<a id="schema_BuildStatusReason"></a>
<a id="tocSbuildstatusreason"></a>
<a id="tocsbuildstatusreason"></a>

```json
{
  "message": "string",
  "step": "string",
  "logEntries": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Message with the status reason, currently reporting only for error status|
|step|string|false|none|Step that failed|
|logEntries|[[BuildLogEntry](#schemabuildlogentry)]|false|none|Log entries related to the status reason|

<h2 id="tocS_TemplateBuildStatus">TemplateBuildStatus</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildstatus"></a>
<a id="schema_TemplateBuildStatus"></a>
<a id="tocStemplatebuildstatus"></a>
<a id="tocstemplatebuildstatus"></a>

```json
"building"
```

Status of the template build

<h2 id="tocS_TemplateBuildInfo">TemplateBuildInfo</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildinfo"></a>
<a id="schema_TemplateBuildInfo"></a>
<a id="tocStemplatebuildinfo"></a>
<a id="tocstemplatebuildinfo"></a>

```json
{
  "logs": [],
  "logEntries": [],
  "templateID": "string",
  "buildID": "string",
  "status": "building",
  "reason": {
    "message": "string",
    "step": "string",
    "logEntries": []
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[string]|true|none|**Deprecated.** Build logs (always empty since the V1 build path was removed, use logEntries)|
|logEntries|[[BuildLogEntry](#schemabuildlogentry)]|true|none|Build logs structured|
|templateID|string|true|none|Identifier of the template|
|buildID|string|true|none|Identifier of the build|
|status|[TemplateBuildStatus](#schematemplatebuildstatus)|true|none|Status of the template build|
|reason|[BuildStatusReason](#schemabuildstatusreason)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|building|
|status|waiting|
|status|ready|
|status|error|

<h2 id="tocS_TemplateBuildLogsResponse">TemplateBuildLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatebuildlogsresponse"></a>
<a id="schema_TemplateBuildLogsResponse"></a>
<a id="tocStemplatebuildlogsresponse"></a>
<a id="tocstemplatebuildlogsresponse"></a>

```json
{
  "logs": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[[BuildLogEntry](#schemabuildlogentry)]|true|none|Build logs structured|

<h2 id="tocS_LogsDirection">LogsDirection</h2>
<!-- backwards compatibility -->
<a id="schemalogsdirection"></a>
<a id="schema_LogsDirection"></a>
<a id="tocSlogsdirection"></a>
<a id="tocslogsdirection"></a>

```json
"forward"
```

Direction of the logs that should be returned

<h2 id="tocS_LogsSource">LogsSource</h2>
<!-- backwards compatibility -->
<a id="schemalogssource"></a>
<a id="schema_LogsSource"></a>
<a id="tocSlogssource"></a>
<a id="tocslogssource"></a>

```json
"temporary"
```

Source of the logs that should be returned

<h2 id="tocS_NodeStatus">NodeStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodestatus"></a>
<a id="schema_NodeStatus"></a>
<a id="tocSnodestatus"></a>
<a id="tocsnodestatus"></a>

```json
"ready"
```

Status of the node.
- standby: the node refuses new sandboxes and keeps serving the ones it holds; it can return to ready.
- not_ready: the node is starting and cannot take new work yet. It becomes ready by itself and cannot be set through the API.

<h2 id="tocS_NodeStatusChange">NodeStatusChange</h2>
<!-- backwards compatibility -->
<a id="schemanodestatuschange"></a>
<a id="schema_NodeStatusChange"></a>
<a id="tocSnodestatuschange"></a>
<a id="tocsnodestatuschange"></a>

```json
{
  "clusterID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "ready",
  "owner": "string",
  "force": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterID|string(uuid)|false|none|Identifier of the cluster|
|status|[NodeStatus](#schemanodestatus)|true|none|Status of the node.<br>- standby: the node refuses new sandboxes and keeps serving the ones it holds; it can return to ready.<br>- not_ready: the node is starting and cannot take new work yet. It becomes ready by itself and cannot be set through the API.<br>|
|owner|string|false|none|Owner of a standby override; required to release a standby that carries one|
|force|boolean|false|none|Apply the status and owner regardless of the recorded owner|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|
|status|draining|
|status|connecting|
|status|unhealthy|
|status|standby|
|status|shutting_down|
|status|not_ready|

<h2 id="tocS_DiskMetrics">DiskMetrics</h2>
<!-- backwards compatibility -->
<a id="schemadiskmetrics"></a>
<a id="schema_DiskMetrics"></a>
<a id="tocSdiskmetrics"></a>
<a id="tocsdiskmetrics"></a>

```json
{
  "mountPoint": "string",
  "device": "string",
  "filesystemType": "string",
  "usedBytes": 0,
  "totalBytes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mountPoint|string|true|none|Mount point of the disk|
|device|string|true|none|Device name|
|filesystemType|string|true|none|Filesystem type (e.g., ext4, xfs)|
|usedBytes|integer(uint64)|true|none|Used space in bytes|
|totalBytes|integer(uint64)|true|none|Total space in bytes|

<h2 id="tocS_NodeMetrics">NodeMetrics</h2>
<!-- backwards compatibility -->
<a id="schemanodemetrics"></a>
<a id="schema_NodeMetrics"></a>
<a id="tocSnodemetrics"></a>
<a id="tocsnodemetrics"></a>

```json
{
  "allocatedCPU": 0,
  "cpuPercent": 0,
  "cpuCount": 0,
  "allocatedMemoryBytes": 0,
  "memoryUsedBytes": 0,
  "memoryTotalBytes": 0,
  "hugePagesTotal": 0,
  "hugePagesUsed": 0,
  "hugePagesReserved": 0,
  "hugePageSizeBytes": 0,
  "disks": [
    {
      "mountPoint": "string",
      "device": "string",
      "filesystemType": "string",
      "usedBytes": 0,
      "totalBytes": 0
    }
  ]
}
```

Node metrics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocatedCPU|integer(uint32)|true|none|Number of allocated CPU cores|
|cpuPercent|integer(uint32)|true|none|Node CPU usage percentage|
|cpuCount|integer(uint32)|true|none|Total number of CPU cores on the node|
|allocatedMemoryBytes|integer(uint64)|true|none|Amount of allocated memory in bytes|
|memoryUsedBytes|integer(uint64)|true|none|Node memory used in bytes|
|memoryTotalBytes|integer(uint64)|true|none|Total node memory in bytes|
|hugePagesTotal|integer(uint64)|true|none|Total number of preallocated hugepages on the node|
|hugePagesUsed|integer(uint64)|true|none|Number of hugepages in use (total - free)|
|hugePagesReserved|integer(uint64)|true|none|Number of reserved hugepages (committed but not yet faulted)|
|hugePageSizeBytes|integer(uint64)|true|none|Size of a single hugepage in bytes|
|disks|[[DiskMetrics](#schemadiskmetrics)]|true|none|Detailed metrics for each disk/mount point|

<h2 id="tocS_MachineInfo">MachineInfo</h2>
<!-- backwards compatibility -->
<a id="schemamachineinfo"></a>
<a id="schema_MachineInfo"></a>
<a id="tocSmachineinfo"></a>
<a id="tocsmachineinfo"></a>

```json
{
  "cpuFamily": "string",
  "cpuModel": "string",
  "cpuModelName": "string",
  "cpuArchitecture": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpuFamily|string|true|none|CPU family of the node|
|cpuModel|string|true|none|CPU model of the node|
|cpuModelName|string|true|none|CPU model name of the node|
|cpuArchitecture|string|true|none|CPU architecture of the node|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "version": "string",
  "commit": "string",
  "id": "string",
  "serviceInstanceID": "string",
  "clusterID": "string",
  "machineInfo": {
    "cpuFamily": "string",
    "cpuModel": "string",
    "cpuModelName": "string",
    "cpuArchitecture": "string"
  },
  "status": "ready",
  "statusChangedAt": "1970-01-01T00:00:00Z",
  "statusOwner": "string",
  "capabilities": [
    "string"
  ],
  "sandboxCount": 0,
  "maxSandboxes": 0,
  "outstandingWork": 0,
  "metrics": {
    "allocatedCPU": 0,
    "cpuPercent": 0,
    "cpuCount": 0,
    "allocatedMemoryBytes": 0,
    "memoryUsedBytes": 0,
    "memoryTotalBytes": 0,
    "hugePagesTotal": 0,
    "hugePagesUsed": 0,
    "hugePagesReserved": 0,
    "hugePageSizeBytes": 0,
    "disks": [
      {
        "mountPoint": "string",
        "device": "string",
        "filesystemType": "string",
        "usedBytes": 0,
        "totalBytes": 0
      }
    ]
  },
  "createSuccesses": 0,
  "createFails": 0,
  "sandboxStartingCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Version of the orchestrator|
|commit|string|true|none|Commit of the orchestrator|
|id|string|true|none|Identifier of the node|
|serviceInstanceID|string|true|none|Service instance identifier of the node|
|clusterID|string|true|none|Identifier of the cluster|
|machineInfo|[MachineInfo](#schemamachineinfo)|true|none|none|
|status|[NodeStatus](#schemanodestatus)|true|none|Status of the node.<br>- standby: the node refuses new sandboxes and keeps serving the ones it holds; it can return to ready.<br>- not_ready: the node is starting and cannot take new work yet. It becomes ready by itself and cannot be set through the API.<br>|
|statusChangedAt|string(date-time)|true|none|Time when the node status was last changed|
|statusOwner|string|false|none|Owner recorded by the current standby override|
|capabilities|[string]|false|none|Capabilities of the orchestrator build, for example park-owner|
|sandboxCount|integer(uint32)|true|none|Number of sandboxes running on the node|
|maxSandboxes|integer(int64)|true|none|Cached node-scoped sandbox admission limit. Nonpositive values reject creation.|
|outstandingWork|integer(uint64)|true|none|Cached count of work holds on the node. Zero means idle or not yet reported; it does not by itself authorize deletion.|
|metrics|[NodeMetrics](#schemanodemetrics)|true|none|Node metrics|
|createSuccesses|integer(uint64)|true|none|Number of sandbox create successes|
|createFails|integer(uint64)|true|none|Number of sandbox create fails|
|sandboxStartingCount|integer(int)|true|none|Number of starting Sandboxes|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|
|status|draining|
|status|connecting|
|status|unhealthy|
|status|standby|
|status|shutting_down|
|status|not_ready|

<h2 id="tocS_NodeSandboxes">NodeSandboxes</h2>
<!-- backwards compatibility -->
<a id="schemanodesandboxes"></a>
<a id="schema_NodeSandboxes"></a>
<a id="tocSnodesandboxes"></a>
<a id="tocsnodesandboxes"></a>

```json
{
  "nodeID": "string",
  "observedAt": "1970-01-01T00:00:00Z",
  "items": [
    {
      "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sandboxID": "string",
      "executionID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "lifecycleHoldUntil": "1970-01-01T00:00:00Z",
      "networkMode": "string",
      "volumesAttached": true
    }
  ]
}
```

The sandboxes the API confirms are running on a node, as the node and the API's records agree on them when read. A guest the node runs for an execution the API records elsewhere, or does not record, is left out.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeID|string|true|none|Identifier of the node|
|observedAt|string(date-time)|true|none|Time the node's sandboxes were read|
|items|[[NodeSandbox](#schemanodesandbox)]|true|none|none|

<h2 id="tocS_NodeSandbox">NodeSandbox</h2>
<!-- backwards compatibility -->
<a id="schemanodesandbox"></a>
<a id="schema_NodeSandbox"></a>
<a id="tocSnodesandbox"></a>
<a id="tocsnodesandbox"></a>

```json
{
  "teamID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sandboxID": "string",
  "executionID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "lifecycleHoldUntil": "1970-01-01T00:00:00Z",
  "networkMode": "string",
  "volumesAttached": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamID|string(uuid)|true|none|Identifier of the team|
|sandboxID|string|true|none|Identifier of the sandbox|
|executionID|string(uuid)|true|none|Identifier of the running execution|
|lifecycleHoldUntil|string(date-time)|false|none|Deadline of the operation holding the sandbox's lifecycle, absent when it is not held|
|networkMode|string|true|none|Network the execution runs on, legacy, egress-router or full-router|
|volumesAttached|boolean|true|none|Whether the sandbox runs with managed volumes attached|

<h2 id="tocS_NodeDetail">NodeDetail</h2>
<!-- backwards compatibility -->
<a id="schemanodedetail"></a>
<a id="schema_NodeDetail"></a>
<a id="tocSnodedetail"></a>
<a id="tocsnodedetail"></a>

```json
{
  "clusterID": "string",
  "version": "string",
  "commit": "string",
  "id": "string",
  "serviceInstanceID": "string",
  "machineInfo": {
    "cpuFamily": "string",
    "cpuModel": "string",
    "cpuModelName": "string",
    "cpuArchitecture": "string"
  },
  "status": "ready",
  "statusChangedAt": "1970-01-01T00:00:00Z",
  "statusOwner": "string",
  "capabilities": [
    "string"
  ],
  "sandboxCount": 0,
  "maxSandboxes": 0,
  "outstandingWork": 0,
  "metrics": {
    "allocatedCPU": 0,
    "cpuPercent": 0,
    "cpuCount": 0,
    "allocatedMemoryBytes": 0,
    "memoryUsedBytes": 0,
    "memoryTotalBytes": 0,
    "hugePagesTotal": 0,
    "hugePagesUsed": 0,
    "hugePagesReserved": 0,
    "hugePageSizeBytes": 0,
    "disks": [
      {
        "mountPoint": "string",
        "device": "string",
        "filesystemType": "string",
        "usedBytes": 0,
        "totalBytes": 0
      }
    ]
  },
  "createSuccesses": 0,
  "createFails": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterID|string|true|none|Identifier of the cluster|
|version|string|true|none|Version of the orchestrator|
|commit|string|true|none|Commit of the orchestrator|
|id|string|true|none|Identifier of the node|
|serviceInstanceID|string|true|none|Service instance identifier of the node|
|machineInfo|[MachineInfo](#schemamachineinfo)|true|none|none|
|status|[NodeStatus](#schemanodestatus)|true|none|Status of the node.<br>- standby: the node refuses new sandboxes and keeps serving the ones it holds; it can return to ready.<br>- not_ready: the node is starting and cannot take new work yet. It becomes ready by itself and cannot be set through the API.<br>|
|statusChangedAt|string(date-time)|true|none|Time when the node status was last changed|
|statusOwner|string|false|none|Owner recorded by the current standby override|
|capabilities|[string]|false|none|Capabilities of the orchestrator build, for example park-owner|
|sandboxCount|integer(uint32)|true|none|Number of sandboxes running on the node|
|maxSandboxes|integer(int64)|true|none|Cached node-scoped sandbox admission limit. Nonpositive values reject creation.|
|outstandingWork|integer(uint64)|true|none|Cached count of work holds on the node. Zero means idle or not yet reported; it does not by itself authorize deletion.|
|metrics|[NodeMetrics](#schemanodemetrics)|true|none|Node metrics|
|createSuccesses|integer(uint64)|true|none|Number of sandbox create successes|
|createFails|integer(uint64)|true|none|Number of sandbox create fails|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ready|
|status|draining|
|status|connecting|
|status|unhealthy|
|status|standby|
|status|shutting_down|
|status|not_ready|

<h2 id="tocS_TeamAPIKey">TeamAPIKey</h2>
<!-- backwards compatibility -->
<a id="schemateamapikey"></a>
<a id="schema_TeamAPIKey"></a>
<a id="tocSteamapikey"></a>
<a id="tocsteamapikey"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "mask": {
    "prefix": "string",
    "valueLength": 0,
    "maskedValuePrefix": "string",
    "maskedValueSuffix": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastUsed": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the API key|
|name|string|true|none|Name of the API key|
|mask|[IdentifierMaskingDetails](#schemaidentifiermaskingdetails)|true|none|none|
|createdAt|string(date-time)|true|none|Timestamp of API key creation|
|createdBy|object \| null|false|none|none|
|lastUsed|string(date-time) \| null|false|none|Last time this API key was used|

<h2 id="tocS_CreatedTeamAPIKey">CreatedTeamAPIKey</h2>
<!-- backwards compatibility -->
<a id="schemacreatedteamapikey"></a>
<a id="schema_CreatedTeamAPIKey"></a>
<a id="tocScreatedteamapikey"></a>
<a id="tocscreatedteamapikey"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "key": "string",
  "mask": {
    "prefix": "string",
    "valueLength": 0,
    "maskedValuePrefix": "string",
    "maskedValueSuffix": "string"
  },
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "createdBy": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": null
  },
  "lastUsed": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Identifier of the API key|
|key|string|true|none|Raw value of the API key|
|mask|[IdentifierMaskingDetails](#schemaidentifiermaskingdetails)|true|none|none|
|name|string|true|none|Name of the API key|
|createdAt|string(date-time)|true|none|Timestamp of API key creation|
|createdBy|object \| null|false|none|none|
|lastUsed|string(date-time) \| null|false|none|Last time this API key was used|

<h2 id="tocS_NewTeamAPIKey">NewTeamAPIKey</h2>
<!-- backwards compatibility -->
<a id="schemanewteamapikey"></a>
<a id="schema_NewTeamAPIKey"></a>
<a id="tocSnewteamapikey"></a>
<a id="tocsnewteamapikey"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the API key|

<h2 id="tocS_UpdateTeamAPIKey">UpdateTeamAPIKey</h2>
<!-- backwards compatibility -->
<a id="schemaupdateteamapikey"></a>
<a id="schema_UpdateTeamAPIKey"></a>
<a id="tocSupdateteamapikey"></a>
<a id="tocsupdateteamapikey"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|New name for the API key|

<h2 id="tocS_AssignedTemplateTags">AssignedTemplateTags</h2>
<!-- backwards compatibility -->
<a id="schemaassignedtemplatetags"></a>
<a id="schema_AssignedTemplateTags"></a>
<a id="tocSassignedtemplatetags"></a>
<a id="tocsassignedtemplatetags"></a>

```json
{
  "tags": [
    "string"
  ],
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|true|none|Assigned tags of the template|
|buildID|string(uuid)|true|none|Identifier of the build associated with these tags|

<h2 id="tocS_TemplateTag">TemplateTag</h2>
<!-- backwards compatibility -->
<a id="schematemplatetag"></a>
<a id="schema_TemplateTag"></a>
<a id="tocStemplatetag"></a>
<a id="tocstemplatetag"></a>

```json
{
  "tag": "string",
  "buildID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|The tag name|
|buildID|string(uuid)|true|none|Identifier of the build associated with this tag|
|createdAt|string(date-time)|true|none|Time when the tag was assigned|

<h2 id="tocS_TemplateTagAssignment">TemplateTagAssignment</h2>
<!-- backwards compatibility -->
<a id="schematemplatetagassignment"></a>
<a id="schema_TemplateTagAssignment"></a>
<a id="tocStemplatetagassignment"></a>
<a id="tocstemplatetagassignment"></a>

```json
{
  "assignmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "assignedAt": "1970-01-01T00:00:00Z",
  "buildCreatedAt": "1970-01-01T00:00:00Z",
  "buildFinishedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignmentId|string(uuid)|true|none|Identifier of the tag assignment event.|
|buildId|string(uuid)|true|none|Identifier of the assigned build.|
|assignedAt|string(date-time)|true|none|Time when the tag was assigned to the build.|
|buildCreatedAt|string(date-time)|true|none|Time when the assigned build was created.|
|buildFinishedAt|string(date-time) \| null|true|none|Time when the assigned build finished.|

<h2 id="tocS_TemplateTagGroup">TemplateTagGroup</h2>
<!-- backwards compatibility -->
<a id="schematemplatetaggroup"></a>
<a id="schema_TemplateTagGroup"></a>
<a id="tocStemplatetaggroup"></a>
<a id="tocstemplatetaggroup"></a>

```json
{
  "tag": "string",
  "assignments": [
    {
      "assignmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "assignedAt": "1970-01-01T00:00:00Z",
      "buildCreatedAt": "1970-01-01T00:00:00Z",
      "buildFinishedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "hasMore": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|Template tag name.|
|assignments|[[TemplateTagAssignment](#schematemplatetagassignment)]|true|none|Ready assignment events for this tag, sorted latest first.|
|hasMore|boolean|true|none|Whether more ready assignment events exist beyond the requested assignment limit.|

<h2 id="tocS_TemplateTagGroupsResponse">TemplateTagGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatetaggroupsresponse"></a>
<a id="schema_TemplateTagGroupsResponse"></a>
<a id="tocStemplatetaggroupsresponse"></a>
<a id="tocstemplatetaggroupsresponse"></a>

```json
{
  "tags": [
    {
      "tag": "string",
      "assignments": [
        {
          "assignmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "assignedAt": "1970-01-01T00:00:00Z",
          "buildCreatedAt": "1970-01-01T00:00:00Z",
          "buildFinishedAt": "1970-01-01T00:00:00Z"
        }
      ],
      "hasMore": true
    }
  ],
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[[TemplateTagGroup](#schematemplatetaggroup)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor to pass as `tagsCursor` for the next page, or `null` if there is no next page.|

<h2 id="tocS_TemplateTagsCountResponse">TemplateTagsCountResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatetagscountresponse"></a>
<a id="schema_TemplateTagsCountResponse"></a>
<a id="tocStemplatetagscountresponse"></a>
<a id="tocstemplatetagscountresponse"></a>

```json
{
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|true|none|Total distinct ready tags for the template.|

<h2 id="tocS_TemplateTagExistsResponse">TemplateTagExistsResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatetagexistsresponse"></a>
<a id="schema_TemplateTagExistsResponse"></a>
<a id="tocStemplatetagexistsresponse"></a>
<a id="tocstemplatetagexistsresponse"></a>

```json
{
  "exists": true,
  "normalizedTag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exists|boolean|true|none|Whether the template tag has at least one ready assignment.|
|normalizedTag|string|true|none|Normalized template tag name.|

<h2 id="tocS_TemplateTagAssignmentsResponse">TemplateTagAssignmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schematemplatetagassignmentsresponse"></a>
<a id="schema_TemplateTagAssignmentsResponse"></a>
<a id="tocStemplatetagassignmentsresponse"></a>
<a id="tocstemplatetagassignmentsresponse"></a>

```json
{
  "data": [
    {
      "assignmentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "buildId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "assignedAt": "1970-01-01T00:00:00Z",
      "buildCreatedAt": "1970-01-01T00:00:00Z",
      "buildFinishedAt": "1970-01-01T00:00:00Z"
    }
  ],
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TemplateTagAssignment](#schematemplatetagassignment)]|true|none|Ready assignment events for the tag, sorted latest first.|
|nextCursor|string \| null|true|none|Cursor to pass to the next list request, or `null` if there is no next page.|

<h2 id="tocS_AssignTemplateTagsRequest">AssignTemplateTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassigntemplatetagsrequest"></a>
<a id="schema_AssignTemplateTagsRequest"></a>
<a id="tocSassigntemplatetagsrequest"></a>
<a id="tocsassigntemplatetagsrequest"></a>

```json
{
  "target": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|string|true|none|Target template in "name:tag" format|
|tags|[string]|true|none|Tags to assign to the template|

<h2 id="tocS_DeleteTemplateTagsRequest">DeleteTemplateTagsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetemplatetagsrequest"></a>
<a id="schema_DeleteTemplateTagsRequest"></a>
<a id="tocSdeletetemplatetagsrequest"></a>
<a id="tocsdeletetemplatetagsrequest"></a>

```json
{
  "name": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the template|
|tags|[string]|true|none|Tags to delete|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "error_code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|Error code|
|error_code|string|false|none|Machine-readable semantic error code. Not a closed set; initial values: sandbox_capacity_unavailable, sandbox_placement_timeout, sandbox_no_compatible_node, sandbox_create_failed (a node could not create the sandbox this time; retry), sandbox_create_refused (a node refused the sandbox for a reason no retry changes, such as a vcpu count out of bounds in the stored build; a server error, since no request field reaches that check), internal_server_error, secret_limit_reached, idempotency_request_mismatch, idempotency_in_progress, idempotency_outcome_unknown, cluster_registration_invalid, cluster_registration_conflict, cluster_assignment_invalid, cluster_assignment_project_not_found, cluster_assignment_cluster_not_found, cluster_assignment_already_assigned, cluster_assignment_cluster_deleting, sandbox_snapshot_guest_agent_unresponsive (a plain resume of a snapshot taken while the sandbox guest agent was not responding; resume it with memory: false).|
|message|string|true|none|Error|

<h2 id="tocS_IdentifierMaskingDetails">IdentifierMaskingDetails</h2>
<!-- backwards compatibility -->
<a id="schemaidentifiermaskingdetails"></a>
<a id="schema_IdentifierMaskingDetails"></a>
<a id="tocSidentifiermaskingdetails"></a>
<a id="tocsidentifiermaskingdetails"></a>

```json
{
  "prefix": "string",
  "valueLength": 0,
  "maskedValuePrefix": "string",
  "maskedValueSuffix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string|true|none|Prefix that identifies the token or key type|
|valueLength|integer|true|none|Length of the token or key|
|maskedValuePrefix|string|true|none|Prefix used in masked version of the token or key|
|maskedValueSuffix|string|true|none|Suffix used in masked version of the token or key|

<h2 id="tocS_Volume">Volume</h2>
<!-- backwards compatibility -->
<a id="schemavolume"></a>
<a id="schema_Volume"></a>
<a id="tocSvolume"></a>
<a id="tocsvolume"></a>

```json
{
  "volumeID": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeID|string|true|none|ID of the volume|
|name|string|true|none|Name of the volume|

<h2 id="tocS_VolumeAndToken">VolumeAndToken</h2>
<!-- backwards compatibility -->
<a id="schemavolumeandtoken"></a>
<a id="schema_VolumeAndToken"></a>
<a id="tocSvolumeandtoken"></a>
<a id="tocsvolumeandtoken"></a>

```json
{
  "volumeID": "string",
  "name": "string",
  "token": "string",
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeID|string|true|none|ID of the volume|
|name|string|true|none|Name of the volume|
|token|string|true|none|Auth token to use for interacting with volume content|
|domain|string|false|none|Domain to use as the destination for volume content requests,<br>replacing the default `api.<E2B_DOMAIN>`. Only returned when the<br>team is connected to a custom (BYOC) cluster; absent otherwise, in<br>which case the default domain is used.<br>|

<h2 id="tocS_NewVolume">NewVolume</h2>
<!-- backwards compatibility -->
<a id="schemanewvolume"></a>
<a id="schema_NewVolume"></a>
<a id="tocSnewvolume"></a>
<a id="tocsnewvolume"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the volume|

<h2 id="tocS_SecretMetadata">SecretMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasecretmetadata"></a>
<a id="schema_SecretMetadata"></a>
<a id="tocSsecretmetadata"></a>
<a id="tocssecretmetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_Secret">Secret</h2>
<!-- backwards compatibility -->
<a id="schemasecret"></a>
<a id="schema_Secret"></a>
<a id="tocSsecret"></a>
<a id="tocssecret"></a>

```json
{
  "secretID": "string",
  "name": "string",
  "currentVersion": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

Metadata of a secret. It never carries the secret value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretID|string|true|none|Identifier of the secret|
|name|string|true|none|Name of the secret, unique within the project|
|currentVersion|integer(int64)|true|none|Version served to readers that do not name one|
|metadata|[SecretMetadata](#schemasecretmetadata)|true|none|Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.<br>|
|createdAt|string(date-time)|true|none|Time when the secret was created|
|updatedAt|string(date-time)|true|none|Time when the secret was last updated|

<h2 id="tocS_NewSecret">NewSecret</h2>
<!-- backwards compatibility -->
<a id="schemanewsecret"></a>
<a id="schema_NewSecret"></a>
<a id="tocSnewsecret"></a>
<a id="tocsnewsecret"></a>

```json
{
  "name": "string",
  "value": "password",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name of the secret, unique within the project. Names are lower-cased before storage and returned in that canonical form; the sec_ prefix is reserved for secret identifiers.<br>|
|value|string(password)|true|none|Runtime marker stored as the secret's first version. The runtime resolves it to a value at sandbox egress.|
|metadata|[SecretMetadata](#schemasecretmetadata)|false|none|Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.<br>|

<h2 id="tocS_SecretUpdate">SecretUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasecretupdate"></a>
<a id="schema_SecretUpdate"></a>
<a id="tocSsecretupdate"></a>
<a id="tocssecretupdate"></a>

```json
{
  "value": "password",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string(password)|true|none|Runtime marker stored as the secret's new version. The runtime resolves it to a value at sandbox egress.|
|metadata|[SecretMetadata](#schemasecretmetadata)|false|none|Customer metadata of the secret. Always present, empty when unset. At most 32 entries; keys are limited to 128 bytes, values to 1024 bytes, and a secret's metadata to 8192 bytes in total.<br>|

<h2 id="tocS_SandboxEvent">SandboxEvent</h2>
<!-- backwards compatibility -->
<a id="schemasandboxevent"></a>
<a id="schema_SandboxEvent"></a>
<a id="tocSsandboxevent"></a>
<a id="tocssandboxevent"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "version": "string",
  "type": "string",
  "eventCategory": "string",
  "eventLabel": "string",
  "eventData": {},
  "timestamp": "1970-01-01T00:00:00Z",
  "sandboxId": "string",
  "sandboxExecutionId": "string",
  "sandboxTemplateId": "string",
  "sandboxBuildId": "string",
  "sandboxTeamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Sandbox event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Event unique identifier|
|version|string|true|none|Event structure version|
|type|string|true|none|Event name|
|eventCategory|string|false|none|**Deprecated.** Category of the event (e.g., 'lifecycle', 'process', etc.)|
|eventLabel|string|false|none|**Deprecated.** Label for the specific event type (e.g., 'sandbox_started', 'process_oom', etc.)|
|eventData|object \| null|false|none|Optional JSON data associated with the event|
|timestamp|string(date-time)|true|none|Timestamp of the event|
|sandboxId|string(string)|true|none|Unique identifier for the sandbox|
|sandboxExecutionId|string(string)|true|none|Unique identifier for the sandbox execution|
|sandboxTemplateId|string(string)|true|none|Unique identifier for the sandbox template|
|sandboxBuildId|string(string)|true|none|Unique identifier for the sandbox build|
|sandboxTeamId|string(uuid)|true|none|Team identifier associated with the sandbox|

<h2 id="tocS_WebhookCreate">WebhookCreate</h2>
<!-- backwards compatibility -->
<a id="schemawebhookcreate"></a>
<a id="schema_WebhookCreate"></a>
<a id="tocSwebhookcreate"></a>
<a id="tocswebhookcreate"></a>

```json
{
  "name": "string",
  "url": "http://example.com",
  "events": [
    "string"
  ],
  "enabled": true,
  "signatureSecret": "password"
}
```

Configuration for registering new webhooks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|url|string(uri)|true|none|none|
|events|[string]|true|none|none|
|enabled|boolean|false|none|none|
|signatureSecret|string(password)|true|none|Secret used to sign the webhook payloads|

<h2 id="tocS_WebhookCreation">WebhookCreation</h2>
<!-- backwards compatibility -->
<a id="schemawebhookcreation"></a>
<a id="schema_WebhookCreation"></a>
<a id="tocSwebhookcreation"></a>
<a id="tocswebhookcreation"></a>

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "teamId": "string",
  "url": "http://example.com",
  "enabled": true,
  "events": [
    "string"
  ]
}
```

Webhook creation response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Webhook unique identifier|
|name|string|true|none|Webhook user friendly name|
|createdAt|string(date-time)|true|none|Time when the template was created|
|teamId|string|true|none|Unique identifier for the team|
|url|string(uri)|true|none|none|
|enabled|boolean|true|none|none|
|events|[string]|true|none|none|

<h2 id="tocS_WebhookDetail">WebhookDetail</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdetail"></a>
<a id="schema_WebhookDetail"></a>
<a id="tocSwebhookdetail"></a>
<a id="tocswebhookdetail"></a>

```json
{
  "id": "string",
  "teamId": "string",
  "name": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "enabled": true,
  "events": [
    "string"
  ]
}
```

Webhook detail response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Webhook unique identifier|
|teamId|string|true|none|Unique identifier for the team|
|name|string|true|none|Webhook user friendly name|
|createdAt|string(date-time)|true|none|Time when the template was created|
|url|string(uri)|true|none|none|
|enabled|boolean|true|none|none|
|events|[string]|true|none|none|

<h2 id="tocS_WebhookConfiguration">WebhookConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemawebhookconfiguration"></a>
<a id="schema_WebhookConfiguration"></a>
<a id="tocSwebhookconfiguration"></a>
<a id="tocswebhookconfiguration"></a>

```json
{
  "enabled": true,
  "name": "string",
  "url": "http://example.com",
  "events": [
    "string"
  ],
  "signatureSecret": "password"
}
```

Configuration for updating existing webhooks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|name|string|false|none|Webhook user friendly name|
|url|string(uri)|false|none|none|
|events|[string]|false|none|none|
|signatureSecret|string(password)|false|none|Secret used to sign the webhook payloads|

<h2 id="tocS_WebhookDelivery">WebhookDelivery</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdelivery"></a>
<a id="schema_WebhookDelivery"></a>
<a id="tocSwebhookdelivery"></a>
<a id="tocswebhookdelivery"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "webhookId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "sandboxId": "string",
  "eventType": "string",
  "status": "success",
  "durationMs": 0,
  "requestBody": "string",
  "requestHeaders": "string",
  "requestUrl": "http://example.com",
  "responseBody": "string",
  "responseHeaders": "string",
  "responseHttpStatusCode": 0,
  "errorClass": "http_error",
  "errorMessage": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

Webhook delivery attempt

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Delivery attempt identifier|
|teamId|string(uuid)|true|none|Team identifier|
|webhookId|string(uuid)|true|none|Webhook configuration identifier|
|eventId|string(uuid)|true|none|Sandbox event identifier|
|sandboxId|string|true|none|Sandbox identifier|
|eventType|string|true|none|Sandbox event type|
|status|string|true|none|Delivery attempt status|
|durationMs|integer(int32)|true|none|Delivery request duration in milliseconds|
|requestBody|string|true|none|Serialized webhook request body|
|requestHeaders|string|true|none|JSON-encoded request headers with sensitive values redacted|
|requestUrl|string(uri)|true|none|URL attempted for this delivery|
|responseBody|string \| null|false|none|Truncated response body, if a response was received|
|responseHeaders|string \| null|false|none|JSON-encoded response headers, if a response was received|
|responseHttpStatusCode|integer(int32) \| null|false|none|HTTP response status code, if a response was received|
|errorClass|string \| null|true|none|Machine-readable non-HTTP or HTTP failure class|
|errorMessage|string \| null|false|none|Error message for failures without a useful response body|
|timestamp|string(date-time)|true|none|Time when the delivery attempt started|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failed|
|errorClass|http_error|
|errorClass|dns_error|
|errorClass|timeout|
|errorClass|transport_error|
|errorClass|request_error|
|errorClass|signature_error|
|errorClass|canceled|

<h2 id="tocS_WebhookDeliveryStats">WebhookDeliveryStats</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverystats"></a>
<a id="schema_WebhookDeliveryStats"></a>
<a id="tocSwebhookdeliverystats"></a>
<a id="tocswebhookdeliverystats"></a>

```json
{
  "buckets": [
    {
      "timestamp": "1970-01-01T00:00:00Z",
      "total": 0,
      "failed": 0,
      "durationMs": {
        "minimum": 0,
        "average": 0,
        "maximum": 0
      }
    }
  ],
  "total": 0,
  "failed": 0,
  "durationMs": {
    "minimum": 0,
    "average": 0,
    "maximum": 0
  }
}
```

Webhook delivery aggregate stats

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[WebhookDeliveryStatsBucket](#schemawebhookdeliverystatsbucket)]|true|none|none|
|total|integer(int64)|true|none|none|
|failed|integer(int64)|true|none|none|
|durationMs|[WebhookDeliveryDurationStats](#schemawebhookdeliverydurationstats)|true|none|Webhook delivery duration statistics in milliseconds|

<h2 id="tocS_WebhookDeliveryDurationStats">WebhookDeliveryDurationStats</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverydurationstats"></a>
<a id="schema_WebhookDeliveryDurationStats"></a>
<a id="tocSwebhookdeliverydurationstats"></a>
<a id="tocswebhookdeliverydurationstats"></a>

```json
{
  "minimum": 0,
  "average": 0,
  "maximum": 0
}
```

Webhook delivery duration statistics in milliseconds

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimum|number(double)|true|none|none|
|average|number(double)|true|none|none|
|maximum|number(double)|true|none|none|

<h2 id="tocS_WebhookDeliveryStatsBucket">WebhookDeliveryStatsBucket</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverystatsbucket"></a>
<a id="schema_WebhookDeliveryStatsBucket"></a>
<a id="tocSwebhookdeliverystatsbucket"></a>
<a id="tocswebhookdeliverystatsbucket"></a>

```json
{
  "timestamp": "1970-01-01T00:00:00Z",
  "total": 0,
  "failed": 0,
  "durationMs": {
    "minimum": 0,
    "average": 0,
    "maximum": 0
  }
}
```

Webhook delivery stats for a time bucket

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|none|none|
|total|integer(int64)|true|none|none|
|failed|integer(int64)|true|none|none|
|durationMs|[WebhookDeliveryDurationStats](#schemawebhookdeliverydurationstats)|true|none|Webhook delivery duration statistics in milliseconds|

<h2 id="tocS_WebhookDeliveryGroup">WebhookDeliveryGroup</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverygroup"></a>
<a id="schema_WebhookDeliveryGroup"></a>
<a id="tocSwebhookdeliverygroup"></a>
<a id="tocswebhookdeliverygroup"></a>

```json
{
  "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "eventType": "string",
  "sandboxId": "string",
  "attempts": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "webhookId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "sandboxId": "string",
      "eventType": "string",
      "status": "success",
      "durationMs": 0,
      "requestBody": "string",
      "requestHeaders": "string",
      "requestUrl": "http://example.com",
      "responseBody": "string",
      "responseHeaders": "string",
      "responseHttpStatusCode": 0,
      "errorClass": "http_error",
      "errorMessage": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Webhook delivery attempts grouped by sandbox event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventId|string(uuid)|true|none|none|
|eventType|string|true|none|none|
|sandboxId|string|true|none|none|
|attempts|[[WebhookDelivery](#schemawebhookdelivery)]|true|none|none|

<h2 id="tocS_WebhookDeliveriesListPayload">WebhookDeliveriesListPayload</h2>
<!-- backwards compatibility -->
<a id="schemawebhookdeliverieslistpayload"></a>
<a id="schema_WebhookDeliveriesListPayload"></a>
<a id="tocSwebhookdeliverieslistpayload"></a>
<a id="tocswebhookdeliverieslistpayload"></a>

```json
{
  "data": [
    {
      "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "eventType": "string",
      "sandboxId": "string",
      "attempts": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "teamId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "webhookId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "eventId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "sandboxId": "string",
          "eventType": "string",
          "status": "success",
          "durationMs": 0,
          "requestBody": "string",
          "requestHeaders": "string",
          "requestUrl": "http://example.com",
          "responseBody": "string",
          "responseHeaders": "string",
          "responseHttpStatusCode": 0,
          "errorClass": "http_error",
          "errorMessage": "string",
          "timestamp": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

Paginated webhook delivery attempts grouped by event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[WebhookDeliveryGroup](#schemawebhookdeliverygroup)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor to pass to the next list request, or null when there is no next page.|

<h2 id="tocS_ManagementClusterRegistrationRequest">ManagementClusterRegistrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagementclusterregistrationrequest"></a>
<a id="schema_ManagementClusterRegistrationRequest"></a>
<a id="tocSmanagementclusterregistrationrequest"></a>
<a id="tocsmanagementclusterregistrationrequest"></a>

```json
{
  "name": "string",
  "endpoint": "string",
  "endpoint_tls": true,
  "token": "string",
  "sandbox_proxy_domain": "string",
  "auth_org_id": "string",
  "telemetry_client_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|endpoint|string|true|none|none|
|endpoint_tls|boolean|true|none|none|
|token|string|true|none|none|
|sandbox_proxy_domain|string \| null|false|none|none|
|auth_org_id|string \| null|false|none|none|
|telemetry_client_id|string|false|none|none|

<h2 id="tocS_ManagementClusterProjects">ManagementClusterProjects</h2>
<!-- backwards compatibility -->
<a id="schemamanagementclusterprojects"></a>
<a id="schema_ManagementClusterProjects"></a>
<a id="tocSmanagementclusterprojects"></a>
<a id="tocsmanagementclusterprojects"></a>

```json
{
  "project_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_ids|[string(uuid)]|true|none|none|

<h2 id="tocS_ManagementProjectSettingsRequest">ManagementProjectSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectsettingsrequest"></a>
<a id="schema_ManagementProjectSettingsRequest"></a>
<a id="tocSmanagementprojectsettingsrequest"></a>
<a id="tocsmanagementprojectsettingsrequest"></a>

```json
{
  "revision": 1,
  "settings": {
    "sandboxSettings": {
      "defaultAllowPublicTraffic": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|integer(int64)|true|none|Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.|
|settings|[ProjectSettings](#schemaprojectsettings)|true|none|The project's stored settings. PUT replaces the complete document.|

<h2 id="tocS_ProjectSettings">ProjectSettings</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsettings"></a>
<a id="schema_ProjectSettings"></a>
<a id="tocSprojectsettings"></a>
<a id="tocsprojectsettings"></a>

```json
{
  "sandboxSettings": {
    "defaultAllowPublicTraffic": true
  }
}
```

The project's stored settings. PUT replaces the complete document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxSettings|[SandboxSettings](#schemasandboxsettings)|true|none|none|

<h2 id="tocS_SandboxSettings">SandboxSettings</h2>
<!-- backwards compatibility -->
<a id="schemasandboxsettings"></a>
<a id="schema_SandboxSettings"></a>
<a id="tocSsandboxsettings"></a>
<a id="tocssandboxsettings"></a>

```json
{
  "defaultAllowPublicTraffic": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultAllowPublicTraffic|boolean|false|none|Whether new sandboxes without an explicit network.allowPublicTraffic accept traffic without a traffic access token. Omission uses the public default. Existing sandboxes, resumes and forks keep their settings.|

<h2 id="tocS_ManagementProjectUpsertRequest">ManagementProjectUpsertRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectupsertrequest"></a>
<a id="schema_ManagementProjectUpsertRequest"></a>
<a id="tocSmanagementprojectupsertrequest"></a>
<a id="tocsmanagementprojectupsertrequest"></a>

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "slug": "string",
  "email": "string"
}
```

The properties of a project this side stores. Name, slug and email are synchronized on every push. The optional cluster assignment is preserved when omitted.

A project's tier is not among them, and this side assigns none. Limits arrive separately and in full through managementUpsertProjectLimits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_id|string(uuid)|false|none|Cluster assignment to synchronize. Omission preserves the existing assignment.|
|name|string|true|none|none|
|slug|string|true|none|Changing it renames the project, and its template names follow: each name held under an earlier slug is also given under the new one, and the old names keep working. A name the new slug already holds is left as it is. A slug already held on this control plane is a 409, on a rename as much as on a create.|
|email|string|true|none|Contact address recorded on the project.|

<h2 id="tocS_ManagementProject">ManagementProject</h2>
<!-- backwards compatibility -->
<a id="schemamanagementproject"></a>
<a id="schema_ManagementProject"></a>
<a id="tocSmanagementproject"></a>
<a id="tocsmanagementproject"></a>

```json
{
  "cluster_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "slug": "string",
  "email": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cluster_id|string(uuid)|false|none|Cluster assignment to synchronize. Omission preserves the existing assignment.|
|name|string|true|none|none|
|slug|string|true|none|Changing it renames the project, and its template names follow: each name held under an earlier slug is also given under the new one, and the old names keep working. A name the new slug already holds is left as it is. A slug already held on this control plane is a 409, on a rename as much as on a create.|
|email|string|true|none|Contact address recorded on the project.|
|id|string(uuid)|true|none|none|

<h2 id="tocS_ManagementProjectMemberIdentity">ManagementProjectMemberIdentity</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectmemberidentity"></a>
<a id="schema_ManagementProjectMemberIdentity"></a>
<a id="tocSmanagementprojectmemberidentity"></a>
<a id="tocsmanagementprojectmemberidentity"></a>

```json
{
  "issuer": "string",
  "subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|string|true|none|none|
|subject|string|true|none|none|

<h2 id="tocS_ManagementProjectMemberApplyRequest">ManagementProjectMemberApplyRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectmemberapplyrequest"></a>
<a id="schema_ManagementProjectMemberApplyRequest"></a>
<a id="tocSmanagementprojectmemberapplyrequest"></a>
<a id="tocsmanagementprojectmemberapplyrequest"></a>

```json
{
  "revision": 1,
  "present": true,
  "is_default": false,
  "role": "owner",
  "identities": [
    {
      "issuer": "string",
      "subject": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|integer(int64)|true|none|none|
|present|boolean|true|none|none|
|is_default|boolean|false|none|Whether this membership is the user's default team. Omitted requests from older sources remain non-default.|
|role|string|false|none|The member's effective role on the project. A viewer may only read. An omitted role keeps the stored one, and a new member without one is stored as member.|
|identities|[[ManagementProjectMemberIdentity](#schemamanagementprojectmemberidentity)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|member|
|role|viewer|

<h2 id="tocS_ManagementProjectBlockRequest">ManagementProjectBlockRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectblockrequest"></a>
<a id="schema_ManagementProjectBlockRequest"></a>
<a id="tocSmanagementprojectblockrequest"></a>
<a id="tocsmanagementprojectblockrequest"></a>

```json
{
  "revision": 1,
  "blocked": true,
  "reason": "string",
  "decided_at": "1970-01-01T00:00:00Z"
}
```

Desired project block state. A newer revision replaces the state, including any intervening manual block or unblock.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|integer(int64)|true|none|Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.|
|blocked|boolean|true|none|Whether the project is refused billable work.|
|reason|string|false|none|Reason included in blocked-request errors. Cleared when blocked is false.|
|decided_at|[ManagementDecidedAt](#schemamanagementdecidedat)|false|none|When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.|

<h2 id="tocS_ManagementProjectBanRequest">ManagementProjectBanRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectbanrequest"></a>
<a id="schema_ManagementProjectBanRequest"></a>
<a id="tocSmanagementprojectbanrequest"></a>
<a id="tocsmanagementprojectbanrequest"></a>

```json
{
  "revision": 1,
  "banned": true,
  "decided_at": "1970-01-01T00:00:00Z"
}
```

Desired project ban state. A newer revision replaces the state, including any intervening manual ban or unban.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|integer(int64)|true|none|Monotonic per-project revision. Older or duplicate revisions succeed without changing stored state.|
|banned|boolean|true|none|Whether the project is refused at authentication.|
|decided_at|[ManagementDecidedAt](#schemamanagementdecidedat)|false|none|When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.|

<h2 id="tocS_ManagementDecidedAt">ManagementDecidedAt</h2>
<!-- backwards compatibility -->
<a id="schemamanagementdecidedat"></a>
<a id="schema_ManagementDecidedAt"></a>
<a id="tocSmanagementdecidedat"></a>
<a id="tocsmanagementdecidedat"></a>

```json
"1970-01-01T00:00:00Z"
```

When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.

<h2 id="tocS_ManagementProjectLimits">ManagementProjectLimits</h2>
<!-- backwards compatibility -->
<a id="schemamanagementprojectlimits"></a>
<a id="schema_ManagementProjectLimits"></a>
<a id="tocSmanagementprojectlimits"></a>
<a id="tocsmanagementprojectlimits"></a>

```json
{
  "revision": 1,
  "concurrent_sandboxes": 1,
  "max_sandbox_length_hours": 1,
  "max_vcpu": 1,
  "max_ram_mb": 1,
  "disk_mb": 1,
  "concurrent_template_builds": 1,
  "events_ttl_days": 1,
  "default_free_disk_size_mb": 0,
  "max_free_disk_size_mb": 1,
  "max_disk_size_mb": 1,
  "api_team_rps_list": 0,
  "api_team_rps_delete": 0,
  "max_secrets": 1,
  "decided_at": "1970-01-01T00:00:00Z"
}
```

A project's effective limits, already resolved by the caller. Every field is absolute: this side stores what it is given and performs no arithmetic of its own.

The minimums below are the contract for what a limit may be, at least as strict as the CHECK constraints on default_limits. project_limits stores the same values under looser constraints on purpose — it is a push target, and a floor that only rejects the impossible keeps a future decision about what is allowed a change to this schema rather than a migration.

`max_disk_size_mb` and `max_free_disk_size_mb` are one ceiling under two names, and either name alone carries it. A caller that sends both must send them equal; a caller that sends neither is refused. Sending both is what a caller does while receivers older than the second name are still running.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|revision|integer(int64)|true|none|The caller's version of this answer, raised whenever the limits it resolved for the project change. Delivery is over a network, so two pushes can be in flight at once and arrive in either order: this side stores the revision it accepted and drops a delivery at or below it, which is what keeps a delayed retry from putting the project back on limits it has already left.<br><br>Comparable only against earlier revisions for the same project.|
|concurrent_sandboxes|integer(int32)|true|none|none|
|max_sandbox_length_hours|integer(int32)|true|none|none|
|max_vcpu|integer(int32)|true|none|none|
|max_ram_mb|integer(int64)|true|none|none|
|disk_mb|integer(int64)|true|none|none|
|concurrent_template_builds|integer(int32)|true|none|none|
|events_ttl_days|integer(int32)|true|none|none|
|default_free_disk_size_mb|integer(int64)|true|none|The default free-space growth target when a template build request omits one. May sit anywhere at or below the maximum free-space growth target, and usually sits well below it; a delivery whose default exceeds the maximum is rejected.|
|max_free_disk_size_mb|integer(int64)|false|none|The most a template build may request as its free-space growth target.|
|max_disk_size_mb|integer(int64)|false|none|The same ceiling as max_free_disk_size_mb, under the name it was first published with. Kept until every deployed sender and receiver speaks the other name.|
|api_team_rps_list|integer(int64)|true|none|Requests per second a project may make to each list endpoint. Zero disables the limit.|
|api_team_rps_delete|integer(int64)|true|none|Requests per second a project may make to each delete endpoint. Zero disables the limit.|
|max_secrets|integer(int32)|true|none|Live secrets the project may hold.|
|decided_at|[ManagementDecidedAt](#schemamanagementdecidedat)|false|none|When the caller decided this revision, in RFC 3339. Stored with the revision and used to measure how long the decision took to apply here. Omit it when the caller does not know; the delivery is then counted as origin unknown rather than as zero lag.|
|*anyOf*|object|false|none|none|
|*anyOf*|object|false|none|none|
