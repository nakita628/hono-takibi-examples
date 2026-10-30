<h1 id="cms-source-code">CMS Source Code v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|content||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="cms-source-code-advanced">Advanced</h1>

## Extract a zip file

<a id="opIdpost-/cms/source-code/2026-09/extract/async_doAsync"></a>

> Code samples

```bash
curl https://api.hubapi.com/cms/source-code/2026-09/extract/async \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /cms/source-code/2026-09/extract/async`

Extract a zip file in the developer file system. Extraction status can be checked with the `/extract/async/tasks/taskId/status` endpoint below.

> Body parameter

```json
null
```

<h3 id="extract-a-zip-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FileExtractRequest](#schemafileextractrequest)|true|none|
|» path|body|string|true|The file system location where the zip file is to be extracted.|

> Example responses

> 202 Response

```json
null
```

> default Response

```json
null
```

<h3 id="extract-a-zip-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|[TaskLocator](#schematasklocator)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Get extraction status

<a id="opIdget-/cms/source-code/2026-09/extract/async/tasks/{taskId}/status_getAsyncStatus"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/extract/async/tasks/{taskId}/status' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/source-code/2026-09/extract/async/tasks/{taskId}/status`

Get the status of an extraction by the `taskId` returned from the initial `extract/async` request.

<h3 id="get-extraction-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int32)|true|The unique identifier of the task whose status you want to retrieve. This is an integer value.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-extraction-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ActionResponse](#schemaactionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create or update a file

<a id="opIdput-/cms/source-code/2026-09/{environment}/content/{path}_createOrUpdate"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/{environment}/content/{path}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cms/source-code/2026-09/{environment}/content/{path}`

Upserts a file at the specified path in the specified environment. Accepts multipart/form-data content type.

> Body parameter

```yaml
null
```

<h3 id="create-or-update-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The environment in which the content file resides, such as 'staging' or 'production'.|
|path|path|string|true|The specific path to the content file within the environment.|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-update-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AssetFileMetadata](#schemaassetfilemetadata)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Create a file

<a id="opIdpost-/cms/source-code/2026-09/{environment}/content/{path}_create"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/{environment}/content/{path}' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/source-code/2026-09/{environment}/content/{path}`

<aside class="warning">
This operation is deprecated
</aside>

Creates a file at the specified path in the specified environment. Accepts multipart/form-data content type. Throws an error if a file already exists at the specified path.

> Body parameter

```yaml
null
```

<h3 id="create-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The environment in which the content file will be uploaded, such as 'staging' or 'production'.|
|path|path|string|true|The specific path where the content file will be stored within the environment.|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AssetFileMetadata](#schemaassetfilemetadata)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Validate the contents of a file

<a id="opIdpost-/cms/source-code/2026-09/{environment}/validate/{path}_doValidate"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/{environment}/validate/{path}' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cms/source-code/2026-09/{environment}/validate/{path}`

Validates the file contents passed to the endpoint given a specified path and environment. Accepts multipart/form-data content type.

> Body parameter

```yaml
null
```

<h3 id="validate-the-contents-of-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|none|
|path|path|string|true|The specific path of the source code file to validate. It must be a valid string pattern.|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

> Example responses

> default Response

```json
null
```

<h3 id="validate-the-contents-of-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

<h1 id="cms-source-code-basic">Basic</h1>

## Download a file

<a id="opIdget-/cms/source-code/2026-09/{environment}/content/{path}_download"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/{environment}/content/{path}' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/source-code/2026-09/{environment}/content/{path}`

Downloads the byte contents of the file at the specified path in the specified environment.

<h3 id="download-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The environment from which to retrieve the content. It specifies the context or stage of the source code.|
|path|path|string|true|The path to the specific content file within the environment. It identifies the location of the file to be retrieved.|

> Example responses

> default Response

```json
null
```

<h3 id="download-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Delete a file

<a id="opIddelete-/cms/source-code/2026-09/{environment}/content/{path}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/{environment}/content/{path}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cms/source-code/2026-09/{environment}/content/{path}`

Deletes the file at the specified path in the specified environment.

<h3 id="delete-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The environment from which the content file will be deleted. This identifies the specific context or workspace within your HubSpot account.|
|path|path|string|true|The path of the content file to be deleted. This should be a valid string that specifies the location of the file within the environment.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

## Get the metadata for a file

<a id="opIdget-/cms/source-code/2026-09/{environment}/metadata/{path}_get"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/cms/source-code/2026-09/{environment}/metadata/{path}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cms/source-code/2026-09/{environment}/metadata/{path}`

Gets the metadata object for the file at the specified path in the specified environment.

<h3 id="get-the-metadata-for-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|environment|path|string|true|The environment in which the file or folder is located, such as 'staging' or 'production'.|
|path|path|string|true|The path to the specific file or folder for which metadata is being retrieved.|
|properties|query|string|false|A comma-separated list of specific properties to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-metadata-for-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AssetFileMetadata](#schemaassetfilemetadata)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: content )
</aside>

# Schemas

<h2 id="tocS_ActionResponse">ActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponse"></a>
<a id="schema_ActionResponse"></a>
<a id="tocSactionresponse"></a>
<a id="tocsactionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp indicating when the action was completed.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|requestedAt|string(date-time)|false|none|The timestamp indicating when the action was requested.|
|startedAt|string(date-time)|true|none|The timestamp indicating when the action was started.|
|status|string|true|none|The current status of the action, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_AssetFileMetadata">AssetFileMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassetfilemetadata"></a>
<a id="schema_AssetFileMetadata"></a>
<a id="tocSassetfilemetadata"></a>
<a id="tocsassetfilemetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivedAt|integer(int64)|false|none|Timestamp of when the object was archived (deleted).|
|children|[string]|false|none|If the object is a folder, contains the filenames of the files within the folder.|
|createdAt|integer(int64)|true|none|Timestamp of when the object was first created.|
|folder|boolean|true|none|Determines whether or not this path points to a folder.|
|hash|string|false|none|A unique identifier for the file's content, used to verify data integrity.|
|id|string|true|none|The path of the file in the CMS Developer File System.|
|name|string|true|none|The name of the file.|
|updatedAt|integer(int64)|true|none|Timestamp of when the object was last updated.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_FileExtractRequest">FileExtractRequest</h2>
<!-- backwards compatibility -->
<a id="schemafileextractrequest"></a>
<a id="schema_FileExtractRequest"></a>
<a id="tocSfileextractrequest"></a>
<a id="tocsfileextractrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|The file system location where the zip file is to be extracted.|

<h2 id="tocS_TaskLocator">TaskLocator</h2>
<!-- backwards compatibility -->
<a id="schematasklocator"></a>
<a id="schema_TaskLocator"></a>
<a id="tocStasklocator"></a>
<a id="tocstasklocator"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the task.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
