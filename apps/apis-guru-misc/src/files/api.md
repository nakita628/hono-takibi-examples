<h1 id="filescom-api">Files.com API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//app.files.com/api/rest/v1">https://api.apis.guru//app.files.com/api/rest/v1</a>

Email: <a href="mailto:support@files.com">Files.com Customer Success Team</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **X-FilesAPI-Key**, in: header. API Key - supports user-based or site-wide API keys

<h1 id="filescom-api-actionnotificationexports">action_notification_exports</h1>

Operations about action_notification_exports

## Create Action Notification Export

<a id="opIdPostActionNotificationExports"></a>

> Code samples

```bash
curl https://example.com/action_notification_exports \
  -X POST \
  -H 'Accept: application/json' \
  -F 'end_at=2000-01-01T01:00:00Z' \
  -F 'query_folder=MyFolder' \
  -F 'query_message=Connection Refused' \
  -F 'query_path=MyFile.txt' \
  -F 'query_request_method=GET' \
  -F 'query_request_url=http://example.com/webhook' \
  -F 'query_status=200' \
  -F 'query_success=true' \
  -F 'start_at=2000-01-01T01:00:00Z' \
  -F 'user_id=0'
```

`POST /action_notification_exports`

Create Action Notification Export

> Body parameter

```yaml
end_at: "2000-01-01T01:00:00Z"
query_folder: MyFolder
query_message: Connection Refused
query_path: MyFile.txt
query_request_method: GET
query_request_url: "http://example.com/webhook"
query_status: "200"
query_success: true
start_at: "2000-01-01T01:00:00Z"
user_id: 0
```

<h3 id="create-action-notification-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» end_at|body|string(date-time)|false|End date/time of export range.|
|» query_folder|body|string|false|Return notifications that were triggered by actions in this folder.|
|» query_message|body|string|false|Error message associated with the request, if any.|
|» query_path|body|string|false|Return notifications that were triggered by actions on this specific path.|
|» query_request_method|body|string|false|The HTTP request method used by the webhook.|
|» query_request_url|body|string|false|The target webhook URL.|
|» query_status|body|string|false|The HTTP status returned from the server in response to the webhook request.|
|» query_success|body|boolean|false|true if the webhook request succeeded (i.e. returned a 200 or 204 response status). false otherwise.|
|» start_at|body|string(date-time)|false|Start date/time of export range.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "end_at": "2000-01-01T01:00:00Z",
  "export_version": "example",
  "id": 1,
  "query_folder": "MyFolder",
  "query_message": "Connection Refused",
  "query_path": "MyFile.txt",
  "query_request_method": "GET",
  "query_request_url": "http://example.com/webhook",
  "query_status": "200",
  "query_success": true,
  "results_url": "https://files.com/action_notification_results.csv",
  "start_at": "2000-01-01T01:00:00Z",
  "status": "ready"
}
```

<h3 id="create-action-notification-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ActionNotificationExports object.|[ActionNotificationExportEntity](#schemaactionnotificationexportentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Action Notification Export

<a id="opIdGetActionNotificationExportsId"></a>

> Code samples

```bash
curl https://example.com/action_notification_exports/0 \
  -H 'Accept: application/json'
```

`GET /action_notification_exports/{id}`

Show Action Notification Export

<h3 id="show-action-notification-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Action Notification Export ID.|

> Example responses

> 200 Response

```json
{
  "end_at": "2000-01-01T01:00:00Z",
  "export_version": "example",
  "id": 1,
  "query_folder": "MyFolder",
  "query_message": "Connection Refused",
  "query_path": "MyFile.txt",
  "query_request_method": "GET",
  "query_request_url": "http://example.com/webhook",
  "query_status": "200",
  "query_success": true,
  "results_url": "https://files.com/action_notification_results.csv",
  "start_at": "2000-01-01T01:00:00Z",
  "status": "ready"
}
```

<h3 id="show-action-notification-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ActionNotificationExports object.|[ActionNotificationExportEntity](#schemaactionnotificationexportentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-actionnotificationexportresults">action_notification_export_results</h1>

Operations about action_notification_export_results

## List Action Notification Export Results

<a id="opIdGetActionNotificationExportResults"></a>

> Code samples

```bash
curl 'https://example.com/action_notification_export_results?action_notification_export_id=0' \
  -H 'Accept: application/json'
```

`GET /action_notification_export_results`

List Action Notification Export Results

<h3 id="list-action-notification-export-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|action_notification_export_id|query|integer(int32)|true|ID of the associated action notification export.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": 1,
    "folder": "MyFolder",
    "id": 1,
    "message": "Success",
    "path": "MyFolder/MyFile.txt",
    "request_headers": "{\"User-Agent\":\"Files.com Webhook\"}",
    "request_method": "GET",
    "request_url": "www.example.com/webhook_receiver",
    "status": 200,
    "success": true
  }
]
```

<h3 id="list-action-notification-export-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ActionNotificationExportResults objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-action-notification-export-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionNotificationExportResultEntity](#schemaactionnotificationexportresultentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-actionwebhookfailures">action_webhook_failures</h1>

Operations about action_webhook_failures

## retry Action Webhook Failure

<a id="opIdPostActionWebhookFailuresIdRetry"></a>

> Code samples

```bash
curl https://example.com/action_webhook_failures/0/retry \
  -X POST
```

`POST /action_webhook_failures/{id}/retry`

retry Action Webhook Failure

<h3 id="retry-action-webhook-failure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Action Webhook Failure ID.|

<h3 id="retry-action-webhook-failure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ActionWebhookFailures object.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-apikey">api_key</h1>

Operations about api_keys

## Show information about current API key. (Requires current API connection to be using an API key.)

<a id="opIdApiKeyFindCurrent"></a>

> Code samples

```bash
curl https://example.com/api_key \
  -H 'Accept: application/json'
```

`GET /api_key`

Show information about current API key.  (Requires current API connection to be using an API key.)

> Example responses

> 200 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="show-information-about-current-api-key-requires-current-api-connection-to-be-using-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ApiKey object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete current API key. (Requires current API connection to be using an API key.)

<a id="opIdApiKeyDeleteCurrent"></a>

> Code samples

```bash
curl https://example.com/api_key \
  -X DELETE
```

`DELETE /api_key`

Delete current API key.  (Requires current API connection to be using an API key.)

<h3 id="delete-current-api-key-requires-current-api-connection-to-be-using-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update current API key. (Requires current API connection to be using an API key.)

<a id="opIdApiKeyUpdateCurrent"></a>

> Code samples

```bash
curl https://example.com/api_key \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'name=My Main API Key' \
  -F 'permission_set=full'
```

`PATCH /api_key`

Update current API key.  (Requires current API connection to be using an API key.)

> Body parameter

```yaml
expires_at: "2000-01-01T01:00:00Z"
name: My Main API Key
permission_set: full
```

<h3 id="update-current-api-key-requires-current-api-connection-to-be-using-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» expires_at|body|string(date-time)|false|API Key expiration date|
|» name|body|string|false|Internal name for the API Key.  For your use.|
|» permission_set|body|string|false|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission_set|none|
|» permission_set|full|
|» permission_set|desktop_app|
|» permission_set|sync_app|
|» permission_set|office_integration|
|» permission_set|mobile_app|

> Example responses

> 200 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="update-current-api-key-requires-current-api-connection-to-be-using-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ApiKey object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-apikeys">api_keys</h1>

Operations about api_keys

## List Api Keys

<a id="opIdGetApiKeys"></a>

> Code samples

```bash
curl https://example.com/api_keys \
  -H 'Accept: application/json'
```

`GET /api_keys`

List Api Keys

<h3 id="list-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[expires_at]=desc`). Valid fields are `expires_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `expires_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `expires_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `expires_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `expires_at`.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "description": "example",
    "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
    "expires_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "key": "[key]",
    "last_use_at": "2000-01-01T01:00:00Z",
    "name": "My Main API Key",
    "path": "shared/docs",
    "permission_set": "full",
    "platform": "win32",
    "url": "example",
    "user_id": 1
  }
]
```

<h3 id="list-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ApiKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyEntity](#schemaapikeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Api Key

<a id="opIdPostApiKeys"></a>

> Code samples

```bash
curl https://example.com/api_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'description=example' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'name=My Main API Key' \
  -F 'path=shared/docs' \
  -F 'permission_set=full' \
  -F 'user_id=0'
```

`POST /api_keys`

Create Api Key

> Body parameter

```yaml
description: example
expires_at: "2000-01-01T01:00:00Z"
name: My Main API Key
path: shared/docs
permission_set: full
user_id: 0
```

<h3 id="create-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|User-supplied description of API key.|
|» expires_at|body|string(date-time)|false|API Key expiration date|
|» name|body|string|false|Internal name for the API Key.  For your use.|
|» path|body|string|false|Folder path restriction for this api key.|
|» permission_set|body|string|false|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission_set|none|
|» permission_set|full|
|» permission_set|desktop_app|
|» permission_set|sync_app|
|» permission_set|office_integration|
|» permission_set|mobile_app|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="create-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ApiKeys object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Api Key

<a id="opIdGetApiKeysId"></a>

> Code samples

```bash
curl https://example.com/api_keys/0 \
  -H 'Accept: application/json'
```

`GET /api_keys/{id}`

Show Api Key

<h3 id="show-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Api Key ID.|

> Example responses

> 200 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="show-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ApiKeys object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Api Key

<a id="opIdDeleteApiKeysId"></a>

> Code samples

```bash
curl https://example.com/api_keys/0 \
  -X DELETE
```

`DELETE /api_keys/{id}`

Delete Api Key

<h3 id="delete-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Api Key ID.|

<h3 id="delete-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Api Key

<a id="opIdPatchApiKeysId"></a>

> Code samples

```bash
curl https://example.com/api_keys/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'description=example' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'name=My Main API Key' \
  -F 'permission_set=full'
```

`PATCH /api_keys/{id}`

Update Api Key

> Body parameter

```yaml
description: example
expires_at: "2000-01-01T01:00:00Z"
name: My Main API Key
permission_set: full
```

<h3 id="update-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Api Key ID.|
|body|body|object|false|none|
|» description|body|string|false|User-supplied description of API key.|
|» expires_at|body|string(date-time)|false|API Key expiration date|
|» name|body|string|false|Internal name for the API Key.  For your use.|
|» permission_set|body|string|false|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission_set|none|
|» permission_set|full|
|» permission_set|desktop_app|
|» permission_set|sync_app|
|» permission_set|office_integration|
|» permission_set|mobile_app|

> Example responses

> 200 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="update-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ApiKeys object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-site">site</h1>

Operations about sites

## Show site settings

<a id="opIdGetSite"></a>

> Code samples

```bash
curl https://example.com/site \
  -H 'Accept: application/json'
```

`GET /site`

Show site settings

> Example responses

> 200 Response

```json
{
  "active_sftp_host_key_id": 1,
  "admin_user_id": 1,
  "allow_bundle_names": true,
  "allowed_2fa_method_bypass_for_ftp_sftp_dav": true,
  "allowed_2fa_method_sms": true,
  "allowed_2fa_method_totp": true,
  "allowed_2fa_method_u2f": true,
  "allowed_2fa_method_webauthn": true,
  "allowed_2fa_method_yubi": true,
  "allowed_countries": "US,DE",
  "allowed_ips": "example",
  "ask_about_overwrites": true,
  "bundle_activity_notifications": "never",
  "bundle_expiration": 1,
  "bundle_password_required": true,
  "bundle_registration_notifications": "never",
  "bundle_require_share_recipient": true,
  "bundle_upload_receipt_notifications": "never",
  "bundle_watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "bundle_watermark_value": {
    "key": "example value"
  },
  "color2_left": "#0066a7",
  "color2_link": "#d34f5d",
  "color2_text": "#0066a7",
  "color2_top": "#000000",
  "color2_top_text": "#ffffff",
  "contact_name": "John Doe",
  "created_at": "2000-01-01T01:00:00Z",
  "currency": "USD",
  "custom_namespace": true,
  "days_to_retain_backups": 30,
  "default_time_zone": "Pacific Time (US & Canada)",
  "desktop_app": true,
  "desktop_app_session_ip_pinning": true,
  "desktop_app_session_lifetime": 1,
  "disable_files_certificate_generation": true,
  "disable_notifications": true,
  "disable_password_reset": true,
  "disable_users_from_inactivity_period_days": 1,
  "disallowed_countries": "US,DE",
  "domain": "my-custom-domain.com",
  "domain_hsts_header": true,
  "domain_letsencrypt_chain": "example",
  "email": "example",
  "folder_permissions_groups_only": true,
  "ftp_enabled": true,
  "hipaa": true,
  "icon128": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon16": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon32": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon48": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "immutable_files_set_at": "2000-01-01T01:00:00Z",
  "include_password_in_welcome_email": true,
  "language": "en",
  "ldap_base_dn": "example",
  "ldap_domain": "mysite.com",
  "ldap_enabled": true,
  "ldap_group_action": "disabled",
  "ldap_group_exclusion": "example",
  "ldap_group_inclusion": "example",
  "ldap_host": "ldap.site.com",
  "ldap_host_2": "ldap2.site.com",
  "ldap_host_3": "ldap3.site.com",
  "ldap_port": 1,
  "ldap_secure": true,
  "ldap_type": "open_ldap",
  "ldap_user_action": "disabled",
  "ldap_user_include_groups": "example",
  "ldap_username": "[ldap username]",
  "ldap_username_field": "sAMAccountName",
  "login_help_text": "Login page help text.",
  "logo": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "max_prior_passwords": 1,
  "mobile_app": true,
  "mobile_app_session_ip_pinning": true,
  "mobile_app_session_lifetime": 1,
  "motd_text": "example",
  "motd_use_for_ftp": true,
  "motd_use_for_sftp": true,
  "name": "My Site",
  "next_billing_amount": 1,
  "next_billing_date": "Apr 20",
  "non_sso_groups_allowed": true,
  "non_sso_users_allowed": true,
  "office_integration_available": true,
  "office_integration_type": "example",
  "oncehub_link": "https://go.oncehub.com/files",
  "opt_out_global": true,
  "overage_notified_at": "2000-01-01T01:00:00Z",
  "overage_notify": true,
  "overdue": true,
  "password_min_length": 1,
  "password_require_letter": true,
  "password_require_mixed": true,
  "password_require_number": true,
  "password_require_special": true,
  "password_require_unbreached": true,
  "password_requirements_apply_to_bundles": true,
  "password_validity_days": 1,
  "phone": "555-555-5555",
  "pin_all_remote_servers_to_site_region": true,
  "reply_to_email": "example",
  "require_2fa": true,
  "require_2fa_stop_time": "2000-01-01T01:00:00Z",
  "require_2fa_user_type": "`site_admins`",
  "session": {
    "id": "60525f92e859c4c3d74cb02fd176b1525901b525",
    "language": "en",
    "read_only": true,
    "sftp_insecure_ciphers": true
  },
  "session_expiry": 6,
  "session_expiry_minutes": 360,
  "session_pinned_by_ip": true,
  "sftp_enabled": true,
  "sftp_host_key_type": "default",
  "sftp_insecure_ciphers": true,
  "sftp_user_root_enabled": true,
  "sharing_enabled": true,
  "show_request_access_link": true,
  "site_footer": "example",
  "site_header": "example",
  "smtp_address": "smtp.my-mail-server.com",
  "smtp_authentication": "plain",
  "smtp_from": "me@my-mail-server.com",
  "smtp_port": 25,
  "smtp_username": "mail",
  "ssl_required": true,
  "subdomain": "mysite",
  "switch_to_plan_date": "2000-01-01T01:00:00Z",
  "tls_disabled": true,
  "trial_days_left": 1,
  "trial_until": "2000-01-01T01:00:00Z",
  "updated_at": "2000-01-01T01:00:00Z",
  "uploads_via_email_authentication": true,
  "use_provided_modified_at": true,
  "user": {
    "active_2fa": true,
    "admin_group_ids": [
      1
    ],
    "allowed_ips": "127.0.0.1",
    "api_keys_count": 1,
    "attachments_permission": true,
    "authenticate_until": "2000-01-01T01:00:00Z",
    "authentication_method": "password",
    "avatar_url": "example",
    "billing_permission": true,
    "bypass_inactive_disable": true,
    "bypass_site_allowed_ips": true,
    "company": "ACME Corp.",
    "created_at": "2000-01-01T01:00:00Z",
    "dav_permission": true,
    "days_remaining_until_password_expire": 1,
    "disabled": true,
    "email": "example",
    "externally_managed": true,
    "first_login_at": "2000-01-01T01:00:00Z",
    "ftp_permission": true,
    "group_ids": "example",
    "header_text": "User-specific message.",
    "id": 1,
    "language": "en",
    "last_active_at": "2000-01-01T01:00:00Z",
    "last_api_use_at": "2000-01-01T01:00:00Z",
    "last_dav_login_at": "2000-01-01T01:00:00Z",
    "last_desktop_login_at": "2000-01-01T01:00:00Z",
    "last_ftp_login_at": "2000-01-01T01:00:00Z",
    "last_login_at": "2000-01-01T01:00:00Z",
    "last_protocol_cipher": "example",
    "last_restapi_login_at": "2000-01-01T01:00:00Z",
    "last_sftp_login_at": "2000-01-01T01:00:00Z",
    "last_web_login_at": "2000-01-01T01:00:00Z",
    "lockout_expires": "2000-01-01T01:00:00Z",
    "name": "John Doe",
    "notes": "Internal notes on this user.",
    "notification_daily_send_time": 18,
    "office_integration_enabled": true,
    "password_expire_at": "2000-01-01T01:00:00Z",
    "password_expired": true,
    "password_set_at": "2000-01-01T01:00:00Z",
    "password_validity_days": 1,
    "public_keys_count": 1,
    "receive_admin_alerts": true,
    "require_2fa": "always_require",
    "require_password_change": true,
    "restapi_permission": true,
    "self_managed": true,
    "sftp_permission": true,
    "site_admin": true,
    "skip_welcome_screen": true,
    "ssl_required": "always_require",
    "sso_strategy_id": 1,
    "subscribe_to_newsletter": true,
    "time_zone": "Pacific Time (US & Canada)",
    "type_of_2fa": "yubi",
    "user_root": "example",
    "username": "user"
  },
  "user_lockout": true,
  "user_lockout_lock_period": 1,
  "user_lockout_tries": 1,
  "user_lockout_within": 6,
  "user_requests_enabled": true,
  "user_requests_notify_admins": true,
  "welcome_custom_text": "Welcome to my site!",
  "welcome_email_cc": "example",
  "welcome_email_enabled": true,
  "welcome_email_subject": "example",
  "welcome_screen": "user_controlled",
  "windows_mode_ftp": true
}
```

<h3 id="show-site-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Site object.|[SiteEntity](#schemasiteentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update site settings.

<a id="opIdPatchSite"></a>

> Code samples

```bash
curl https://example.com/site \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'active_sftp_host_key_id=0' \
  -F 'allow_bundle_names=true' \
  -F 'allowed_2fa_method_bypass_for_ftp_sftp_dav=true' \
  -F 'allowed_2fa_method_sms=true' \
  -F 'allowed_2fa_method_totp=true' \
  -F 'allowed_2fa_method_u2f=true' \
  -F 'allowed_2fa_method_webauthn=true' \
  -F 'allowed_2fa_method_yubi=true' \
  -F 'allowed_countries=string' \
  -F 'allowed_ips=string' \
  -F 'ask_about_overwrites=true' \
  -F 'bundle_activity_notifications=string' \
  -F 'bundle_expiration=0' \
  -F 'bundle_password_required=true' \
  -F 'bundle_registration_notifications=string' \
  -F 'bundle_require_share_recipient=true' \
  -F 'bundle_upload_receipt_notifications=string' \
  -F 'bundle_watermark_attachment_delete=true' \
  -F 'bundle_watermark_attachment_file=@/path/to/file' \
  -F 'bundle_watermark_value={}' \
  -F 'color2_left=string' \
  -F 'color2_link=string' \
  -F 'color2_text=string' \
  -F 'color2_top=string' \
  -F 'color2_top_text=string' \
  -F 'custom_namespace=true' \
  -F 'days_to_retain_backups=0' \
  -F 'default_time_zone=string' \
  -F 'desktop_app=true' \
  -F 'desktop_app_session_ip_pinning=true' \
  -F 'desktop_app_session_lifetime=0' \
  -F 'disable_2fa_with_delay=true' \
  -F 'disable_files_certificate_generation=true' \
  -F 'disable_password_reset=true' \
  -F 'disable_users_from_inactivity_period_days=0' \
  -F 'disallowed_countries=string' \
  -F 'domain=string' \
  -F 'domain_hsts_header=true' \
  -F 'domain_letsencrypt_chain=string' \
  -F 'email=string' \
  -F 'folder_permissions_groups_only=true' \
  -F 'ftp_enabled=true' \
  -F 'icon128_delete=true' \
  -F 'icon128_file=@/path/to/file' \
  -F 'icon16_delete=true' \
  -F 'icon16_file=@/path/to/file' \
  -F 'icon32_delete=true' \
  -F 'icon32_file=@/path/to/file' \
  -F 'icon48_delete=true' \
  -F 'icon48_file=@/path/to/file' \
  -F 'immutable_files=true' \
  -F 'include_password_in_welcome_email=true' \
  -F 'language=string' \
  -F 'ldap_base_dn=string' \
  -F 'ldap_domain=string' \
  -F 'ldap_enabled=true' \
  -F 'ldap_group_action=string' \
  -F 'ldap_group_exclusion=string' \
  -F 'ldap_group_inclusion=string' \
  -F 'ldap_host=string' \
  -F 'ldap_host_2=string' \
  -F 'ldap_host_3=string' \
  -F 'ldap_password_change=string' \
  -F 'ldap_password_change_confirmation=string' \
  -F 'ldap_port=0' \
  -F 'ldap_secure=true' \
  -F 'ldap_type=string' \
  -F 'ldap_user_action=string' \
  -F 'ldap_user_include_groups=string' \
  -F 'ldap_username=string' \
  -F 'ldap_username_field=string' \
  -F 'login_help_text=string' \
  -F 'logo_delete=true' \
  -F 'logo_file=@/path/to/file' \
  -F 'max_prior_passwords=0' \
  -F 'mobile_app=true' \
  -F 'mobile_app_session_ip_pinning=true' \
  -F 'mobile_app_session_lifetime=0' \
  -F 'motd_text=string' \
  -F 'motd_use_for_ftp=true' \
  -F 'motd_use_for_sftp=true' \
  -F 'name=string' \
  -F 'non_sso_groups_allowed=true' \
  -F 'non_sso_users_allowed=true' \
  -F 'office_integration_available=true' \
  -F 'office_integration_type=string' \
  -F 'opt_out_global=true' \
  -F 'overage_notify=true' \
  -F 'password_min_length=0' \
  -F 'password_require_letter=true' \
  -F 'password_require_mixed=true' \
  -F 'password_require_number=true' \
  -F 'password_require_special=true' \
  -F 'password_require_unbreached=true' \
  -F 'password_requirements_apply_to_bundles=true' \
  -F 'password_validity_days=0' \
  -F 'pin_all_remote_servers_to_site_region=true' \
  -F 'reply_to_email=string' \
  -F 'require_2fa=true' \
  -F 'require_2fa_user_type=string' \
  -F 'session_expiry=0' \
  -F 'session_expiry_minutes=0' \
  -F 'session_pinned_by_ip=true' \
  -F 'sftp_enabled=true' \
  -F 'sftp_host_key_type=string' \
  -F 'sftp_insecure_ciphers=true' \
  -F 'sftp_user_root_enabled=true' \
  -F 'sharing_enabled=true' \
  -F 'show_request_access_link=true' \
  -F 'site_footer=string' \
  -F 'site_header=string' \
  -F 'smtp_address=string' \
  -F 'smtp_authentication=string' \
  -F 'smtp_from=string' \
  -F 'smtp_password=string' \
  -F 'smtp_port=0' \
  -F 'smtp_username=string' \
  -F 'ssl_required=true' \
  -F 'subdomain=string' \
  -F 'tls_disabled=true' \
  -F 'uploads_via_email_authentication=true' \
  -F 'use_provided_modified_at=true' \
  -F 'user_lockout=true' \
  -F 'user_lockout_lock_period=0' \
  -F 'user_lockout_tries=0' \
  -F 'user_lockout_within=0' \
  -F 'user_requests_enabled=true' \
  -F 'user_requests_notify_admins=true' \
  -F 'welcome_custom_text=string' \
  -F 'welcome_email_cc=string' \
  -F 'welcome_email_enabled=true' \
  -F 'welcome_email_subject=string' \
  -F 'welcome_screen=string' \
  -F 'windows_mode_ftp=true'
```

`PATCH /site`

Update site settings.

> Body parameter

```yaml
active_sftp_host_key_id: 0
allow_bundle_names: true
allowed_2fa_method_bypass_for_ftp_sftp_dav: true
allowed_2fa_method_sms: true
allowed_2fa_method_totp: true
allowed_2fa_method_u2f: true
allowed_2fa_method_webauthn: true
allowed_2fa_method_yubi: true
allowed_countries: string
allowed_ips: string
ask_about_overwrites: true
bundle_activity_notifications: string
bundle_expiration: 0
bundle_password_required: true
bundle_registration_notifications: string
bundle_require_share_recipient: true
bundle_upload_receipt_notifications: string
bundle_watermark_attachment_delete: true
bundle_watermark_attachment_file: string
bundle_watermark_value: {}
color2_left: string
color2_link: string
color2_text: string
color2_top: string
color2_top_text: string
custom_namespace: true
days_to_retain_backups: 0
default_time_zone: string
desktop_app: true
desktop_app_session_ip_pinning: true
desktop_app_session_lifetime: 0
disable_2fa_with_delay: true
disable_files_certificate_generation: true
disable_password_reset: true
disable_users_from_inactivity_period_days: 0
disallowed_countries: string
domain: string
domain_hsts_header: true
domain_letsencrypt_chain: string
email: string
folder_permissions_groups_only: true
ftp_enabled: true
icon128_delete: true
icon128_file: string
icon16_delete: true
icon16_file: string
icon32_delete: true
icon32_file: string
icon48_delete: true
icon48_file: string
immutable_files: true
include_password_in_welcome_email: true
language: string
ldap_base_dn: string
ldap_domain: string
ldap_enabled: true
ldap_group_action: string
ldap_group_exclusion: string
ldap_group_inclusion: string
ldap_host: string
ldap_host_2: string
ldap_host_3: string
ldap_password_change: string
ldap_password_change_confirmation: string
ldap_port: 0
ldap_secure: true
ldap_type: string
ldap_user_action: string
ldap_user_include_groups: string
ldap_username: string
ldap_username_field: string
login_help_text: string
logo_delete: true
logo_file: string
max_prior_passwords: 0
mobile_app: true
mobile_app_session_ip_pinning: true
mobile_app_session_lifetime: 0
motd_text: string
motd_use_for_ftp: true
motd_use_for_sftp: true
name: string
non_sso_groups_allowed: true
non_sso_users_allowed: true
office_integration_available: true
office_integration_type: string
opt_out_global: true
overage_notify: true
password_min_length: 0
password_require_letter: true
password_require_mixed: true
password_require_number: true
password_require_special: true
password_require_unbreached: true
password_requirements_apply_to_bundles: true
password_validity_days: 0
pin_all_remote_servers_to_site_region: true
reply_to_email: string
require_2fa: true
require_2fa_user_type: string
session_expiry: 0
session_expiry_minutes: 0
session_pinned_by_ip: true
sftp_enabled: true
sftp_host_key_type: string
sftp_insecure_ciphers: true
sftp_user_root_enabled: true
sharing_enabled: true
show_request_access_link: true
site_footer: string
site_header: string
smtp_address: string
smtp_authentication: string
smtp_from: string
smtp_password: string
smtp_port: 0
smtp_username: string
ssl_required: true
subdomain: string
tls_disabled: true
uploads_via_email_authentication: true
use_provided_modified_at: true
user_lockout: true
user_lockout_lock_period: 0
user_lockout_tries: 0
user_lockout_within: 0
user_requests_enabled: true
user_requests_notify_admins: true
welcome_custom_text: string
welcome_email_cc: string
welcome_email_enabled: true
welcome_email_subject: string
welcome_screen: string
windows_mode_ftp: true
```

<h3 id="update-site-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» active_sftp_host_key_id|body|integer(int32)|false|Id of the currently selected custom SFTP Host Key|
|» allow_bundle_names|body|boolean|false|Are manual Bundle names allowed?|
|» allowed_2fa_method_bypass_for_ftp_sftp_dav|body|boolean|false|Are users allowed to configure their two factor authentication to be bypassed for FTP/SFTP/WebDAV?|
|» allowed_2fa_method_sms|body|boolean|false|Is SMS two factor authentication allowed?|
|» allowed_2fa_method_totp|body|boolean|false|Is TOTP two factor authentication allowed?|
|» allowed_2fa_method_u2f|body|boolean|false|Is U2F two factor authentication allowed?|
|» allowed_2fa_method_webauthn|body|boolean|false|Is WebAuthn two factor authentication allowed?|
|» allowed_2fa_method_yubi|body|boolean|false|Is yubikey two factor authentication allowed?|
|» allowed_countries|body|string|false|Comma seperated list of allowed Country codes|
|» allowed_ips|body|string|false|List of allowed IP addresses|
|» ask_about_overwrites|body|boolean|false|If false, rename conflicting files instead of asking for overwrite confirmation.  Only applies to web interface.|
|» bundle_activity_notifications|body|string|false|Do Bundle owners receive activity notifications?|
|» bundle_expiration|body|integer(int32)|false|Site-wide Bundle expiration in days|
|» bundle_password_required|body|boolean|false|Do Bundles require password protection?|
|» bundle_registration_notifications|body|string|false|Do Bundle owners receive registration notification?|
|» bundle_require_share_recipient|body|boolean|false|Do Bundles require recipients for sharing?|
|» bundle_upload_receipt_notifications|body|string|false|Do Bundle uploaders receive upload confirmation notifications?|
|» bundle_watermark_attachment_delete|body|boolean|false|If true, will delete the file stored in bundle_watermark_attachment|
|» bundle_watermark_attachment_file|body|string(binary)|false|none|
|» bundle_watermark_value|body|object|false|Preview watermark settings applied to all bundle items. Uses the same keys as Behavior.value|
|» color2_left|body|string|false|Page link and button color|
|» color2_link|body|string|false|Top bar link color|
|» color2_text|body|string|false|Page link and button color|
|» color2_top|body|string|false|Top bar background color|
|» color2_top_text|body|string|false|Top bar text color|
|» custom_namespace|body|boolean|false|Is this site using a custom namespace for users?|
|» days_to_retain_backups|body|integer(int32)|false|Number of days to keep deleted files|
|» default_time_zone|body|string|false|Site default time zone|
|» desktop_app|body|boolean|false|Is the desktop app enabled?|
|» desktop_app_session_ip_pinning|body|boolean|false|Is desktop app session IP pinning enabled?|
|» desktop_app_session_lifetime|body|integer(int32)|false|Desktop app session lifetime (in hours)|
|» disable_2fa_with_delay|body|boolean|false|If set to true, we will begin the process of disabling 2FA on this site.|
|» disable_files_certificate_generation|body|boolean|false|If set, Files.com will not set the CAA records required to generate future SSL certificates for this domain.|
|» disable_password_reset|body|boolean|false|Is password reset disabled?|
|» disable_users_from_inactivity_period_days|body|integer(int32)|false|If greater than zero, users will unable to login if they do not show activity within this number of days.|
|» disallowed_countries|body|string|false|Comma seperated list of disallowed Country codes|
|» domain|body|string|false|Custom domain|
|» domain_hsts_header|body|boolean|false|Send HSTS (HTTP Strict Transport Security) header when visitors access the site via a custom domain?|
|» domain_letsencrypt_chain|body|string|false|Letsencrypt chain to use when registering SSL Certificate for domain.|
|» email|body|string|false|Main email for this site|
|» folder_permissions_groups_only|body|boolean|false|If true, permissions for this site must be bound to a group (not a user). Otherwise, permissions must be bound to a user.|
|» ftp_enabled|body|boolean|false|Is FTP enabled?|
|» icon128_delete|body|boolean|false|If true, will delete the file stored in icon128|
|» icon128_file|body|string(binary)|false|none|
|» icon16_delete|body|boolean|false|If true, will delete the file stored in icon16|
|» icon16_file|body|string(binary)|false|none|
|» icon32_delete|body|boolean|false|If true, will delete the file stored in icon32|
|» icon32_file|body|string(binary)|false|none|
|» icon48_delete|body|boolean|false|If true, will delete the file stored in icon48|
|» icon48_file|body|string(binary)|false|none|
|» immutable_files|body|boolean|false|Are files protected from modification?|
|» include_password_in_welcome_email|body|boolean|false|Include password in emails to new users?|
|» language|body|string|false|Site default language|
|» ldap_base_dn|body|string|false|Base DN for looking up users in LDAP server|
|» ldap_domain|body|string|false|Domain name that will be appended to usernames|
|» ldap_enabled|body|boolean|false|Main LDAP setting: is LDAP enabled?|
|» ldap_group_action|body|string|false|Should we sync groups from LDAP server?|
|» ldap_group_exclusion|body|string|false|Comma or newline separated list of group names (with optional wildcards) to exclude when syncing.|
|» ldap_group_inclusion|body|string|false|Comma or newline separated list of group names (with optional wildcards) to include when syncing.|
|» ldap_host|body|string|false|LDAP host|
|» ldap_host_2|body|string|false|LDAP backup host|
|» ldap_host_3|body|string|false|LDAP backup host|
|» ldap_password_change|body|string|false|New LDAP password.|
|» ldap_password_change_confirmation|body|string|false|Confirm new LDAP password.|
|» ldap_port|body|integer(int32)|false|LDAP port|
|» ldap_secure|body|boolean|false|Use secure LDAP?|
|» ldap_type|body|string|false|LDAP type|
|» ldap_user_action|body|string|false|Should we sync users from LDAP server?|
|» ldap_user_include_groups|body|string|false|Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.|
|» ldap_username|body|string|false|Username for signing in to LDAP server.|
|» ldap_username_field|body|string|false|LDAP username field|
|» login_help_text|body|string|false|Login help text|
|» logo_delete|body|boolean|false|If true, will delete the file stored in logo|
|» logo_file|body|string(binary)|false|none|
|» max_prior_passwords|body|integer(int32)|false|Number of prior passwords to disallow|
|» mobile_app|body|boolean|false|Is the mobile app enabled?|
|» mobile_app_session_ip_pinning|body|boolean|false|Is mobile app session IP pinning enabled?|
|» mobile_app_session_lifetime|body|integer(int32)|false|Mobile app session lifetime (in hours)|
|» motd_text|body|string|false|A message to show users when they connect via FTP or SFTP.|
|» motd_use_for_ftp|body|boolean|false|Show message to users connecting via FTP|
|» motd_use_for_sftp|body|boolean|false|Show message to users connecting via SFTP|
|» name|body|string|false|Site name|
|» non_sso_groups_allowed|body|boolean|false|If true, groups can be manually created / modified / deleted by Site Admins. Otherwise, groups can only be managed via your SSO provider.|
|» non_sso_users_allowed|body|boolean|false|If true, users can be manually created / modified / deleted by Site Admins. Otherwise, users can only be managed via your SSO provider.|
|» office_integration_available|body|boolean|false|Allow users to use Office for the web?|
|» office_integration_type|body|string|false|Office integration application used to edit and view the MS Office documents|
|» opt_out_global|body|boolean|false|Use servers in the USA only?|
|» overage_notify|body|boolean|false|Notify site email of overages?|
|» password_min_length|body|integer(int32)|false|Shortest password length for users|
|» password_require_letter|body|boolean|false|Require a letter in passwords?|
|» password_require_mixed|body|boolean|false|Require lower and upper case letters in passwords?|
|» password_require_number|body|boolean|false|Require a number in passwords?|
|» password_require_special|body|boolean|false|Require special characters in password?|
|» password_require_unbreached|body|boolean|false|Require passwords that have not been previously breached? (see https://haveibeenpwned.com/)|
|» password_requirements_apply_to_bundles|body|boolean|false|Require bundles' passwords, and passwords for other items (inboxes, public shares, etc.) to conform to the same requirements as users' passwords?|
|» password_validity_days|body|integer(int32)|false|Number of days password is valid|
|» pin_all_remote_servers_to_site_region|body|boolean|false|If true, we will ensure that all internal communications with any remote server are made through the primary region of the site. This setting overrides individual remote server settings.|
|» reply_to_email|body|string|false|Reply-to email for this site|
|» require_2fa|body|boolean|false|Require two-factor authentication for all users?|
|» require_2fa_user_type|body|string|false|What type of user is required to use two-factor authentication (when require_2fa is set to `true` for this site)?|
|» session_expiry|body|number(double)|false|Session expiry in hours|
|» session_expiry_minutes|body|integer(int32)|false|Session expiry in minutes|
|» session_pinned_by_ip|body|boolean|false|Are sessions locked to the same IP? (i.e. do users need to log in again if they change IPs?)|
|» sftp_enabled|body|boolean|false|Is SFTP enabled?|
|» sftp_host_key_type|body|string|false|Sftp Host Key Type|
|» sftp_insecure_ciphers|body|boolean|false|Are Insecure Ciphers allowed for SFTP?  Note:  Settting TLS Disabled -> True will always allow insecure ciphers for SFTP as well.  Enabling this is insecure.|
|» sftp_user_root_enabled|body|boolean|false|Use user FTP roots also for SFTP?|
|» sharing_enabled|body|boolean|false|Allow bundle creation|
|» show_request_access_link|body|boolean|false|Show request access link for users without access?  Currently unused.|
|» site_footer|body|string|false|Custom site footer text|
|» site_header|body|string|false|Custom site header text|
|» smtp_address|body|string|false|SMTP server hostname or IP|
|» smtp_authentication|body|string|false|SMTP server authentication type|
|» smtp_from|body|string|false|From address to use when mailing through custom SMTP|
|» smtp_password|body|string|false|Password for SMTP server.|
|» smtp_port|body|integer(int32)|false|SMTP server port|
|» smtp_username|body|string|false|SMTP server username|
|» ssl_required|body|boolean|false|Is SSL required?  Disabling this is insecure.|
|» subdomain|body|string|false|Site subdomain|
|» tls_disabled|body|boolean|false|Are Insecure TLS and SFTP Ciphers allowed?  Enabling this is insecure.|
|» uploads_via_email_authentication|body|boolean|false|Do incoming emails in the Inboxes require checking for SPF/DKIM/DMARC?|
|» use_provided_modified_at|body|boolean|false|Allow uploaders to set `provided_modified_at` for uploaded files?|
|» user_lockout|body|boolean|false|Will users be locked out after incorrect login attempts?|
|» user_lockout_lock_period|body|integer(int32)|false|How many hours to lock user out for failed password?|
|» user_lockout_tries|body|integer(int32)|false|Number of login tries within `user_lockout_within` hours before users are locked out|
|» user_lockout_within|body|integer(int32)|false|Number of hours for user lockout window|
|» user_requests_enabled|body|boolean|false|Enable User Requests feature|
|» user_requests_notify_admins|body|boolean|false|Send email to site admins when a user request is received?|
|» welcome_custom_text|body|string|false|Custom text send in user welcome email|
|» welcome_email_cc|body|string|false|Include this email in welcome emails if enabled|
|» welcome_email_enabled|body|boolean|false|Will the welcome email be sent to new users?|
|» welcome_email_subject|body|string|false|Include this email subject in welcome emails if enabled|
|» welcome_screen|body|string|false|Does the welcome screen appear?|
|» windows_mode_ftp|body|boolean|false|Does FTP user Windows emulation mode?|

> Example responses

> 200 Response

```json
{
  "active_sftp_host_key_id": 1,
  "admin_user_id": 1,
  "allow_bundle_names": true,
  "allowed_2fa_method_bypass_for_ftp_sftp_dav": true,
  "allowed_2fa_method_sms": true,
  "allowed_2fa_method_totp": true,
  "allowed_2fa_method_u2f": true,
  "allowed_2fa_method_webauthn": true,
  "allowed_2fa_method_yubi": true,
  "allowed_countries": "US,DE",
  "allowed_ips": "example",
  "ask_about_overwrites": true,
  "bundle_activity_notifications": "never",
  "bundle_expiration": 1,
  "bundle_password_required": true,
  "bundle_registration_notifications": "never",
  "bundle_require_share_recipient": true,
  "bundle_upload_receipt_notifications": "never",
  "bundle_watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "bundle_watermark_value": {
    "key": "example value"
  },
  "color2_left": "#0066a7",
  "color2_link": "#d34f5d",
  "color2_text": "#0066a7",
  "color2_top": "#000000",
  "color2_top_text": "#ffffff",
  "contact_name": "John Doe",
  "created_at": "2000-01-01T01:00:00Z",
  "currency": "USD",
  "custom_namespace": true,
  "days_to_retain_backups": 30,
  "default_time_zone": "Pacific Time (US & Canada)",
  "desktop_app": true,
  "desktop_app_session_ip_pinning": true,
  "desktop_app_session_lifetime": 1,
  "disable_files_certificate_generation": true,
  "disable_notifications": true,
  "disable_password_reset": true,
  "disable_users_from_inactivity_period_days": 1,
  "disallowed_countries": "US,DE",
  "domain": "my-custom-domain.com",
  "domain_hsts_header": true,
  "domain_letsencrypt_chain": "example",
  "email": "example",
  "folder_permissions_groups_only": true,
  "ftp_enabled": true,
  "hipaa": true,
  "icon128": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon16": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon32": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon48": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "immutable_files_set_at": "2000-01-01T01:00:00Z",
  "include_password_in_welcome_email": true,
  "language": "en",
  "ldap_base_dn": "example",
  "ldap_domain": "mysite.com",
  "ldap_enabled": true,
  "ldap_group_action": "disabled",
  "ldap_group_exclusion": "example",
  "ldap_group_inclusion": "example",
  "ldap_host": "ldap.site.com",
  "ldap_host_2": "ldap2.site.com",
  "ldap_host_3": "ldap3.site.com",
  "ldap_port": 1,
  "ldap_secure": true,
  "ldap_type": "open_ldap",
  "ldap_user_action": "disabled",
  "ldap_user_include_groups": "example",
  "ldap_username": "[ldap username]",
  "ldap_username_field": "sAMAccountName",
  "login_help_text": "Login page help text.",
  "logo": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "max_prior_passwords": 1,
  "mobile_app": true,
  "mobile_app_session_ip_pinning": true,
  "mobile_app_session_lifetime": 1,
  "motd_text": "example",
  "motd_use_for_ftp": true,
  "motd_use_for_sftp": true,
  "name": "My Site",
  "next_billing_amount": 1,
  "next_billing_date": "Apr 20",
  "non_sso_groups_allowed": true,
  "non_sso_users_allowed": true,
  "office_integration_available": true,
  "office_integration_type": "example",
  "oncehub_link": "https://go.oncehub.com/files",
  "opt_out_global": true,
  "overage_notified_at": "2000-01-01T01:00:00Z",
  "overage_notify": true,
  "overdue": true,
  "password_min_length": 1,
  "password_require_letter": true,
  "password_require_mixed": true,
  "password_require_number": true,
  "password_require_special": true,
  "password_require_unbreached": true,
  "password_requirements_apply_to_bundles": true,
  "password_validity_days": 1,
  "phone": "555-555-5555",
  "pin_all_remote_servers_to_site_region": true,
  "reply_to_email": "example",
  "require_2fa": true,
  "require_2fa_stop_time": "2000-01-01T01:00:00Z",
  "require_2fa_user_type": "`site_admins`",
  "session": {
    "id": "60525f92e859c4c3d74cb02fd176b1525901b525",
    "language": "en",
    "read_only": true,
    "sftp_insecure_ciphers": true
  },
  "session_expiry": 6,
  "session_expiry_minutes": 360,
  "session_pinned_by_ip": true,
  "sftp_enabled": true,
  "sftp_host_key_type": "default",
  "sftp_insecure_ciphers": true,
  "sftp_user_root_enabled": true,
  "sharing_enabled": true,
  "show_request_access_link": true,
  "site_footer": "example",
  "site_header": "example",
  "smtp_address": "smtp.my-mail-server.com",
  "smtp_authentication": "plain",
  "smtp_from": "me@my-mail-server.com",
  "smtp_port": 25,
  "smtp_username": "mail",
  "ssl_required": true,
  "subdomain": "mysite",
  "switch_to_plan_date": "2000-01-01T01:00:00Z",
  "tls_disabled": true,
  "trial_days_left": 1,
  "trial_until": "2000-01-01T01:00:00Z",
  "updated_at": "2000-01-01T01:00:00Z",
  "uploads_via_email_authentication": true,
  "use_provided_modified_at": true,
  "user": {
    "active_2fa": true,
    "admin_group_ids": [
      1
    ],
    "allowed_ips": "127.0.0.1",
    "api_keys_count": 1,
    "attachments_permission": true,
    "authenticate_until": "2000-01-01T01:00:00Z",
    "authentication_method": "password",
    "avatar_url": "example",
    "billing_permission": true,
    "bypass_inactive_disable": true,
    "bypass_site_allowed_ips": true,
    "company": "ACME Corp.",
    "created_at": "2000-01-01T01:00:00Z",
    "dav_permission": true,
    "days_remaining_until_password_expire": 1,
    "disabled": true,
    "email": "example",
    "externally_managed": true,
    "first_login_at": "2000-01-01T01:00:00Z",
    "ftp_permission": true,
    "group_ids": "example",
    "header_text": "User-specific message.",
    "id": 1,
    "language": "en",
    "last_active_at": "2000-01-01T01:00:00Z",
    "last_api_use_at": "2000-01-01T01:00:00Z",
    "last_dav_login_at": "2000-01-01T01:00:00Z",
    "last_desktop_login_at": "2000-01-01T01:00:00Z",
    "last_ftp_login_at": "2000-01-01T01:00:00Z",
    "last_login_at": "2000-01-01T01:00:00Z",
    "last_protocol_cipher": "example",
    "last_restapi_login_at": "2000-01-01T01:00:00Z",
    "last_sftp_login_at": "2000-01-01T01:00:00Z",
    "last_web_login_at": "2000-01-01T01:00:00Z",
    "lockout_expires": "2000-01-01T01:00:00Z",
    "name": "John Doe",
    "notes": "Internal notes on this user.",
    "notification_daily_send_time": 18,
    "office_integration_enabled": true,
    "password_expire_at": "2000-01-01T01:00:00Z",
    "password_expired": true,
    "password_set_at": "2000-01-01T01:00:00Z",
    "password_validity_days": 1,
    "public_keys_count": 1,
    "receive_admin_alerts": true,
    "require_2fa": "always_require",
    "require_password_change": true,
    "restapi_permission": true,
    "self_managed": true,
    "sftp_permission": true,
    "site_admin": true,
    "skip_welcome_screen": true,
    "ssl_required": "always_require",
    "sso_strategy_id": 1,
    "subscribe_to_newsletter": true,
    "time_zone": "Pacific Time (US & Canada)",
    "type_of_2fa": "yubi",
    "user_root": "example",
    "username": "user"
  },
  "user_lockout": true,
  "user_lockout_lock_period": 1,
  "user_lockout_tries": 1,
  "user_lockout_within": 6,
  "user_requests_enabled": true,
  "user_requests_notify_admins": true,
  "welcome_custom_text": "Welcome to my site!",
  "welcome_email_cc": "example",
  "welcome_email_enabled": true,
  "welcome_email_subject": "example",
  "welcome_screen": "user_controlled",
  "windows_mode_ftp": true
}
```

<h3 id="update-site-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Site object.|[SiteEntity](#schemasiteentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Api Keys

<a id="opIdGetSiteApiKeys"></a>

> Code samples

```bash
curl https://example.com/site/api_keys \
  -H 'Accept: application/json'
```

`GET /site/api_keys`

List Api Keys

<h3 id="list-api-keys-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[expires_at]=desc`). Valid fields are `expires_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `expires_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `expires_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `expires_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `expires_at`.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "description": "example",
    "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
    "expires_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "key": "[key]",
    "last_use_at": "2000-01-01T01:00:00Z",
    "name": "My Main API Key",
    "path": "shared/docs",
    "permission_set": "full",
    "platform": "win32",
    "url": "example",
    "user_id": 1
  }
]
```

<h3 id="list-api-keys-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ApiKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-api-keys-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyEntity](#schemaapikeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Api Key

<a id="opIdPostSiteApiKeys"></a>

> Code samples

```bash
curl https://example.com/site/api_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'description=example' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'name=My Main API Key' \
  -F 'path=shared/docs' \
  -F 'permission_set=full' \
  -F 'user_id=0'
```

`POST /site/api_keys`

Create Api Key

> Body parameter

```yaml
description: example
expires_at: "2000-01-01T01:00:00Z"
name: My Main API Key
path: shared/docs
permission_set: full
user_id: 0
```

<h3 id="create-api-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|User-supplied description of API key.|
|» expires_at|body|string(date-time)|false|API Key expiration date|
|» name|body|string|false|Internal name for the API Key.  For your use.|
|» path|body|string|false|Folder path restriction for this api key.|
|» permission_set|body|string|false|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission_set|none|
|» permission_set|full|
|» permission_set|desktop_app|
|» permission_set|sync_app|
|» permission_set|office_integration|
|» permission_set|mobile_app|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="create-api-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ApiKeys object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show site DNS configuration.

<a id="opIdGetSiteDnsRecords"></a>

> Code samples

```bash
curl https://example.com/site/dns_records \
  -H 'Accept: application/json'
```

`GET /site/dns_records`

Show site DNS configuration.

<h3 id="show-site-dns-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "domain": "my-custom-domain.com",
    "id": "example",
    "rrtype": "CNAME",
    "value": "mysite.files.com"
  }
]
```

<h3 id="show-site-dns-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of DnsRecords objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="show-site-dns-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DnsRecordEntity](#schemadnsrecordentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List IP Addresses associated with the current site

<a id="opIdGetSiteIpAddresses"></a>

> Code samples

```bash
curl https://example.com/site/ip_addresses \
  -H 'Accept: application/json'
```

`GET /site/ip_addresses`

List IP Addresses associated with the current site

<h3 id="list-ip-addresses-associated-with-the-current-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "associated_with": "Site",
    "group_id": 1,
    "id": "Site",
    "ip_addresses": [
      "127.0.0.1"
    ]
  }
]
```

<h3 id="list-ip-addresses-associated-with-the-current-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of IpAddresses objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-ip-addresses-associated-with-the-current-site-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IpAddressEntity](#schemaipaddressentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Test webhook.

<a id="opIdPostSiteTestWebhook"></a>

> Code samples

```bash
curl https://example.com/site/test-webhook \
  -X POST \
  -H 'Accept: application/json' \
  -F 'action=test' \
  -F 'body={"test-param":"testvalue"}' \
  -F 'encoding=RAW' \
  -F 'headers={"x-test-header":"testvalue"}' \
  -F 'method=GET' \
  -F 'url=https://www.site.com/...'
```

`POST /site/test-webhook`

Test webhook.

> Body parameter

```yaml
action: test
body:
  test-param: testvalue
encoding: RAW
headers:
  x-test-header: testvalue
method: GET
url: "https://www.site.com/..."
```

<h3 id="test-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» action|body|string|false|action for test body|
|» body|body|object|false|Additional body parameters.|
|» encoding|body|string|false|HTTP encoding method.  Can be JSON, XML, or RAW (form data).|
|» headers|body|object|false|Additional request headers.|
|» method|body|string|false|HTTP method(GET or POST).|
|» url|body|string|true|URL for testing the webhook.|

> Example responses

> 200 Response

```json
{
  "clickwrap_body": "example",
  "clickwrap_id": 1,
  "code": 200,
  "data": {
    "dynamic": {}
  },
  "errors": [
    null
  ],
  "message": "example",
  "status": ""
}
```

<h3 id="test-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Behaviors object.|[StatusEntity](#schemastatusentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most recent usage snapshot (usage data for billing purposes) for a Site.

<a id="opIdGetSiteUsage"></a>

> Code samples

```bash
curl https://example.com/site/usage \
  -H 'Accept: application/json'
```

`GET /site/usage`

Get the most recent usage snapshot (usage data for billing purposes) for a Site.

> Example responses

> 200 Response

```json
{
  "bytes_sent": 1,
  "current_storage": 1,
  "deleted_files_counted_in_minimum": 1,
  "deleted_files_storage": 1,
  "end_at": "2000-01-01T01:00:00Z",
  "high_water_storage": 1,
  "high_water_user_count": 1,
  "id": 1,
  "root_storage": 1,
  "start_at": "2000-01-01T01:00:00Z",
  "sync_bytes_received": 1,
  "sync_bytes_sent": 1,
  "total_billable_transfer_usage": 1,
  "total_billable_usage": 1,
  "usage_by_top_level_dir": {
    "key": "example value"
  }
}
```

<h3 id="get-the-most-recent-usage-snapshot-usage-data-for-billing-purposes-for-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Site object.|[UsageSnapshotEntity](#schemausagesnapshotentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-user">user</h1>

Operations about users

## Update User

<a id="opIdPatchUser"></a>

> Code samples

```bash
curl https://example.com/user \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'allowed_ips=127.0.0.1' \
  -F 'announcements_read=true' \
  -F 'attachments_permission=true' \
  -F 'authenticate_until=2000-01-01T01:00:00Z' \
  -F 'authentication_method=password' \
  -F 'avatar_delete=true' \
  -F 'avatar_file=@/path/to/file' \
  -F 'billing_permission=true' \
  -F 'bypass_inactive_disable=true' \
  -F 'bypass_site_allowed_ips=true' \
  -F 'change_password=string' \
  -F 'change_password_confirmation=string' \
  -F 'company=ACME Corp.' \
  -F 'dav_permission=true' \
  -F 'disabled=true' \
  -F 'email=string' \
  -F 'ftp_permission=true' \
  -F 'grant_permission=string' \
  -F 'group_id=0' \
  -F 'group_ids=string' \
  -F 'header_text=User-specific message.' \
  -F 'imported_password_hash=string' \
  -F 'language=en' \
  -F 'name=John Doe' \
  -F 'notes=Internal notes on this user.' \
  -F 'notification_daily_send_time=18' \
  -F 'office_integration_enabled=true' \
  -F 'password=string' \
  -F 'password_confirmation=string' \
  -F 'password_validity_days=1' \
  -F 'receive_admin_alerts=true' \
  -F 'require_2fa=always_require' \
  -F 'require_password_change=true' \
  -F 'restapi_permission=true' \
  -F 'self_managed=true' \
  -F 'sftp_permission=true' \
  -F 'site_admin=true' \
  -F 'skip_welcome_screen=true' \
  -F 'ssl_required=always_require' \
  -F 'sso_strategy_id=1' \
  -F 'subscribe_to_newsletter=true' \
  -F 'time_zone=Pacific Time (US & Canada)' \
  -F 'user_root=example' \
  -F 'username=user'
```

`PATCH /user`

Update User

> Body parameter

```yaml
allowed_ips: "127.0.0.1"
announcements_read: true
attachments_permission: true
authenticate_until: "2000-01-01T01:00:00Z"
authentication_method: password
avatar_delete: true
avatar_file: string
billing_permission: true
bypass_inactive_disable: true
bypass_site_allowed_ips: true
change_password: string
change_password_confirmation: string
company: ACME Corp.
dav_permission: true
disabled: true
email: string
ftp_permission: true
grant_permission: string
group_id: 0
group_ids: string
header_text: User-specific message.
imported_password_hash: string
language: en
name: John Doe
notes: Internal notes on this user.
notification_daily_send_time: 18
office_integration_enabled: true
password: string
password_confirmation: string
password_validity_days: 1
receive_admin_alerts: true
require_2fa: always_require
require_password_change: true
restapi_permission: true
self_managed: true
sftp_permission: true
site_admin: true
skip_welcome_screen: true
ssl_required: always_require
sso_strategy_id: 1
subscribe_to_newsletter: true
time_zone: "Pacific Time (US & Canada)"
user_root: example
username: user
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» allowed_ips|body|string|false|A list of allowed IPs if applicable.  Newline delimited|
|» announcements_read|body|boolean|false|Signifies that the user has read all the announcements in the UI.|
|» attachments_permission|body|boolean|false|DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.|
|» authenticate_until|body|string(date-time)|false|Scheduled Date/Time at which user will be deactivated|
|» authentication_method|body|string|false|How is this user authenticated?|
|» avatar_delete|body|boolean|false|If true, the avatar will be deleted.|
|» avatar_file|body|string(binary)|false|An image file for your user avatar.|
|» billing_permission|body|boolean|false|Allow this user to perform operations on the account, payments, and invoices?|
|» bypass_inactive_disable|body|boolean|false|Exempt this user from being disabled based on inactivity?|
|» bypass_site_allowed_ips|body|boolean|false|Allow this user to skip site-wide IP blacklists?|
|» change_password|body|string|false|Used for changing a password on an existing user.|
|» change_password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `change_password`.|
|» company|body|string|false|User's company|
|» dav_permission|body|boolean|false|Can the user connect with WebDAV?|
|» disabled|body|boolean|false|Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.|
|» email|body|string|false|User's email.|
|» ftp_permission|body|boolean|false|Can the user access with FTP/FTPS?|
|» grant_permission|body|string|false|Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, or `history`.|
|» group_id|body|integer(int32)|false|Group ID to associate this user with.|
|» group_ids|body|string|false|A list of group ids to associate this user with.  Comma delimited.|
|» header_text|body|string|false|Text to display to the user in the header of the UI|
|» imported_password_hash|body|string|false|Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.|
|» language|body|string|false|Preferred language|
|» name|body|string|false|User's full name|
|» notes|body|string|false|Any internal notes on the user|
|» notification_daily_send_time|body|integer(int32)|false|Hour of the day at which daily notifications should be sent. Can be in range 0 to 23|
|» office_integration_enabled|body|boolean|false|Enable integration with Office for the web?|
|» password|body|string|false|User password.|
|» password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `password`.|
|» password_validity_days|body|integer(int32)|false|Number of days to allow user to use the same password|
|» receive_admin_alerts|body|boolean|false|Should the user receive admin alerts such a certificate expiration notifications and overages?|
|» require_2fa|body|string|false|2FA required setting|
|» require_password_change|body|boolean|false|Is a password change required upon next user login?|
|» restapi_permission|body|boolean|false|Can this user access the REST API?|
|» self_managed|body|boolean|false|Does this user manage it's own credentials or is it a shared/bot user?|
|» sftp_permission|body|boolean|false|Can the user access with SFTP?|
|» site_admin|body|boolean|false|Is the user an administrator for this site?|
|» skip_welcome_screen|body|boolean|false|Skip Welcome page in the UI?|
|» ssl_required|body|string|false|SSL required setting|
|» sso_strategy_id|body|integer(int32)|false|SSO (Single Sign On) strategy ID for the user, if applicable.|
|» subscribe_to_newsletter|body|boolean|false|Is the user subscribed to the newsletter?|
|» time_zone|body|string|false|User time zone|
|» user_root|body|string|false|Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.|
|» username|body|string|false|User's username|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authentication_method|password|
|» authentication_method|unused_former_ldap|
|» authentication_method|sso|
|» authentication_method|none|
|» authentication_method|email_signup|
|» authentication_method|password_with_imported_hash|
|» require_2fa|use_system_setting|
|» require_2fa|always_require|
|» require_2fa|never_require|
|» ssl_required|use_system_setting|
|» ssl_required|always_require|
|» ssl_required|never_require|

> Example responses

> 200 Response

```json
{
  "active_2fa": true,
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "api_keys_count": 1,
  "attachments_permission": true,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_inactive_disable": true,
  "bypass_site_allowed_ips": true,
  "company": "ACME Corp.",
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "days_remaining_until_password_expire": 1,
  "disabled": true,
  "email": "example",
  "externally_managed": true,
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "id": 1,
  "language": "en",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_expire_at": "2000-01-01T01:00:00Z",
  "password_expired": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_password_change": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "username": "user"
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Users object.|[UserEntity](#schemauserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Api Keys

<a id="opIdGetUserApiKeys"></a>

> Code samples

```bash
curl https://example.com/user/api_keys \
  -H 'Accept: application/json'
```

`GET /user/api_keys`

List Api Keys

<h3 id="list-api-keys-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[expires_at]=desc`). Valid fields are `expires_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `expires_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `expires_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `expires_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `expires_at`.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "description": "example",
    "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
    "expires_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "key": "[key]",
    "last_use_at": "2000-01-01T01:00:00Z",
    "name": "My Main API Key",
    "path": "shared/docs",
    "permission_set": "full",
    "platform": "win32",
    "url": "example",
    "user_id": 1
  }
]
```

<h3 id="list-api-keys-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ApiKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-api-keys-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyEntity](#schemaapikeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Api Key

<a id="opIdPostUserApiKeys"></a>

> Code samples

```bash
curl https://example.com/user/api_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'description=example' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'name=My Main API Key' \
  -F 'path=shared/docs' \
  -F 'permission_set=full' \
  -F 'user_id=0'
```

`POST /user/api_keys`

Create Api Key

> Body parameter

```yaml
description: example
expires_at: "2000-01-01T01:00:00Z"
name: My Main API Key
path: shared/docs
permission_set: full
user_id: 0
```

<h3 id="create-api-key-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|User-supplied description of API key.|
|» expires_at|body|string(date-time)|false|API Key expiration date|
|» name|body|string|false|Internal name for the API Key.  For your use.|
|» path|body|string|false|Folder path restriction for this api key.|
|» permission_set|body|string|false|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission_set|none|
|» permission_set|full|
|» permission_set|desktop_app|
|» permission_set|sync_app|
|» permission_set|office_integration|
|» permission_set|mobile_app|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="create-api-key-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ApiKeys object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Group Users

<a id="opIdGetUserGroups"></a>

> Code samples

```bash
curl https://example.com/user/groups \
  -H 'Accept: application/json'
```

`GET /user/groups`

List Group Users

<h3 id="list-group-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  If provided, will return group_users of this user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|group_id|query|integer(int32)|false|Group ID.  If provided, will return group_users of this group.|

> Example responses

> 200 Response

```json
[
  {
    "admin": true,
    "group_id": 1,
    "group_name": "example",
    "user_id": 1,
    "usernames": [
      "user"
    ]
  }
]
```

<h3 id="list-group-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of GroupUsers objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-group-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupUserEntity](#schemagroupuserentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Public Keys

<a id="opIdGetUserPublicKeys"></a>

> Code samples

```bash
curl https://example.com/user/public_keys \
  -H 'Accept: application/json'
```

`GET /user/public_keys`

List Public Keys

<h3 id="list-public-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
    "id": 1,
    "title": "My public key"
  }
]
```

<h3 id="list-public-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of PublicKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-public-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicKeyEntity](#schemapublickeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Public Key

<a id="opIdPostUserPublicKeys"></a>

> Code samples

```bash
curl https://example.com/user/public_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'public_key=string' \
  -F 'title=My Main Key' \
  -F 'user_id=0'
```

`POST /user/public_keys`

Create Public Key

> Body parameter

```yaml
public_key: string
title: My Main Key
user_id: 0
```

<h3 id="create-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» public_key|body|string|true|Actual contents of SSH key.|
|» title|body|string|true|Internal reference for key.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
  "id": 1,
  "title": "My public key"
}
```

<h3 id="create-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The PublicKeys object.|[PublicKeyEntity](#schemapublickeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-users">users</h1>

Operations about users

## List Users

<a id="opIdGetUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json'
```

`GET /users`

List Users

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[authenticate_until]=desc`). Valid fields are `authenticate_until`, `active`, `email`, `last_desktop_login_at`, `last_login_at`, `username`, `company`, `name`, `site_admin`, `receive_admin_alerts`, `password_validity_days`, `ssl_required` or `not_site_admin`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.|
|ids|query|string|false|comma-separated list of User IDs|
|q[username]|query|string|false|List users matching username.|
|q[email]|query|string|false|List users matching email.|
|q[notes]|query|string|false|List users matching notes field.|
|q[admin]|query|string|false|If `true`, list only admin users.|
|q[allowed_ips]|query|string|false|If set, list only users with overridden allowed IP setting.|
|q[password_validity_days]|query|string|false|If set, list only users with overridden password validity days setting.|
|q[ssl_required]|query|string|false|If set, list only users with overridden SSL required setting.|
|search|query|string|false|Searches for partial matches of name, username, or email.|

> Example responses

> 200 Response

```json
[
  {
    "active_2fa": true,
    "admin_group_ids": [
      1
    ],
    "allowed_ips": "127.0.0.1",
    "api_keys_count": 1,
    "attachments_permission": true,
    "authenticate_until": "2000-01-01T01:00:00Z",
    "authentication_method": "password",
    "avatar_url": "example",
    "billing_permission": true,
    "bypass_inactive_disable": true,
    "bypass_site_allowed_ips": true,
    "company": "ACME Corp.",
    "created_at": "2000-01-01T01:00:00Z",
    "dav_permission": true,
    "days_remaining_until_password_expire": 1,
    "disabled": true,
    "email": "example",
    "externally_managed": true,
    "first_login_at": "2000-01-01T01:00:00Z",
    "ftp_permission": true,
    "group_ids": "example",
    "header_text": "User-specific message.",
    "id": 1,
    "language": "en",
    "last_active_at": "2000-01-01T01:00:00Z",
    "last_api_use_at": "2000-01-01T01:00:00Z",
    "last_dav_login_at": "2000-01-01T01:00:00Z",
    "last_desktop_login_at": "2000-01-01T01:00:00Z",
    "last_ftp_login_at": "2000-01-01T01:00:00Z",
    "last_login_at": "2000-01-01T01:00:00Z",
    "last_protocol_cipher": "example",
    "last_restapi_login_at": "2000-01-01T01:00:00Z",
    "last_sftp_login_at": "2000-01-01T01:00:00Z",
    "last_web_login_at": "2000-01-01T01:00:00Z",
    "lockout_expires": "2000-01-01T01:00:00Z",
    "name": "John Doe",
    "notes": "Internal notes on this user.",
    "notification_daily_send_time": 18,
    "office_integration_enabled": true,
    "password_expire_at": "2000-01-01T01:00:00Z",
    "password_expired": true,
    "password_set_at": "2000-01-01T01:00:00Z",
    "password_validity_days": 1,
    "public_keys_count": 1,
    "receive_admin_alerts": true,
    "require_2fa": "always_require",
    "require_password_change": true,
    "restapi_permission": true,
    "self_managed": true,
    "sftp_permission": true,
    "site_admin": true,
    "skip_welcome_screen": true,
    "ssl_required": "always_require",
    "sso_strategy_id": 1,
    "subscribe_to_newsletter": true,
    "time_zone": "Pacific Time (US & Canada)",
    "type_of_2fa": "yubi",
    "user_root": "example",
    "username": "user"
  }
]
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Users objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserEntity](#schemauserentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create User

<a id="opIdPostUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allowed_ips=127.0.0.1' \
  -F 'announcements_read=true' \
  -F 'attachments_permission=true' \
  -F 'authenticate_until=2000-01-01T01:00:00Z' \
  -F 'authentication_method=password' \
  -F 'avatar_delete=true' \
  -F 'avatar_file=@/path/to/file' \
  -F 'billing_permission=true' \
  -F 'bypass_inactive_disable=true' \
  -F 'bypass_site_allowed_ips=true' \
  -F 'change_password=string' \
  -F 'change_password_confirmation=string' \
  -F 'company=ACME Corp.' \
  -F 'dav_permission=true' \
  -F 'disabled=true' \
  -F 'email=string' \
  -F 'ftp_permission=true' \
  -F 'grant_permission=string' \
  -F 'group_id=0' \
  -F 'group_ids=string' \
  -F 'header_text=User-specific message.' \
  -F 'imported_password_hash=string' \
  -F 'language=en' \
  -F 'name=John Doe' \
  -F 'notes=Internal notes on this user.' \
  -F 'notification_daily_send_time=18' \
  -F 'office_integration_enabled=true' \
  -F 'password=string' \
  -F 'password_confirmation=string' \
  -F 'password_validity_days=1' \
  -F 'receive_admin_alerts=true' \
  -F 'require_2fa=always_require' \
  -F 'require_password_change=true' \
  -F 'restapi_permission=true' \
  -F 'self_managed=true' \
  -F 'sftp_permission=true' \
  -F 'site_admin=true' \
  -F 'skip_welcome_screen=true' \
  -F 'ssl_required=always_require' \
  -F 'sso_strategy_id=1' \
  -F 'subscribe_to_newsletter=true' \
  -F 'time_zone=Pacific Time (US & Canada)' \
  -F 'user_root=example' \
  -F 'username=user'
```

`POST /users`

Create User

> Body parameter

```yaml
allowed_ips: "127.0.0.1"
announcements_read: true
attachments_permission: true
authenticate_until: "2000-01-01T01:00:00Z"
authentication_method: password
avatar_delete: true
avatar_file: string
billing_permission: true
bypass_inactive_disable: true
bypass_site_allowed_ips: true
change_password: string
change_password_confirmation: string
company: ACME Corp.
dav_permission: true
disabled: true
email: string
ftp_permission: true
grant_permission: string
group_id: 0
group_ids: string
header_text: User-specific message.
imported_password_hash: string
language: en
name: John Doe
notes: Internal notes on this user.
notification_daily_send_time: 18
office_integration_enabled: true
password: string
password_confirmation: string
password_validity_days: 1
receive_admin_alerts: true
require_2fa: always_require
require_password_change: true
restapi_permission: true
self_managed: true
sftp_permission: true
site_admin: true
skip_welcome_screen: true
ssl_required: always_require
sso_strategy_id: 1
subscribe_to_newsletter: true
time_zone: "Pacific Time (US & Canada)"
user_root: example
username: user
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» allowed_ips|body|string|false|A list of allowed IPs if applicable.  Newline delimited|
|» announcements_read|body|boolean|false|Signifies that the user has read all the announcements in the UI.|
|» attachments_permission|body|boolean|false|DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.|
|» authenticate_until|body|string(date-time)|false|Scheduled Date/Time at which user will be deactivated|
|» authentication_method|body|string|false|How is this user authenticated?|
|» avatar_delete|body|boolean|false|If true, the avatar will be deleted.|
|» avatar_file|body|string(binary)|false|An image file for your user avatar.|
|» billing_permission|body|boolean|false|Allow this user to perform operations on the account, payments, and invoices?|
|» bypass_inactive_disable|body|boolean|false|Exempt this user from being disabled based on inactivity?|
|» bypass_site_allowed_ips|body|boolean|false|Allow this user to skip site-wide IP blacklists?|
|» change_password|body|string|false|Used for changing a password on an existing user.|
|» change_password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `change_password`.|
|» company|body|string|false|User's company|
|» dav_permission|body|boolean|false|Can the user connect with WebDAV?|
|» disabled|body|boolean|false|Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.|
|» email|body|string|false|User's email.|
|» ftp_permission|body|boolean|false|Can the user access with FTP/FTPS?|
|» grant_permission|body|string|false|Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, or `history`.|
|» group_id|body|integer(int32)|false|Group ID to associate this user with.|
|» group_ids|body|string|false|A list of group ids to associate this user with.  Comma delimited.|
|» header_text|body|string|false|Text to display to the user in the header of the UI|
|» imported_password_hash|body|string|false|Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.|
|» language|body|string|false|Preferred language|
|» name|body|string|false|User's full name|
|» notes|body|string|false|Any internal notes on the user|
|» notification_daily_send_time|body|integer(int32)|false|Hour of the day at which daily notifications should be sent. Can be in range 0 to 23|
|» office_integration_enabled|body|boolean|false|Enable integration with Office for the web?|
|» password|body|string|false|User password.|
|» password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `password`.|
|» password_validity_days|body|integer(int32)|false|Number of days to allow user to use the same password|
|» receive_admin_alerts|body|boolean|false|Should the user receive admin alerts such a certificate expiration notifications and overages?|
|» require_2fa|body|string|false|2FA required setting|
|» require_password_change|body|boolean|false|Is a password change required upon next user login?|
|» restapi_permission|body|boolean|false|Can this user access the REST API?|
|» self_managed|body|boolean|false|Does this user manage it's own credentials or is it a shared/bot user?|
|» sftp_permission|body|boolean|false|Can the user access with SFTP?|
|» site_admin|body|boolean|false|Is the user an administrator for this site?|
|» skip_welcome_screen|body|boolean|false|Skip Welcome page in the UI?|
|» ssl_required|body|string|false|SSL required setting|
|» sso_strategy_id|body|integer(int32)|false|SSO (Single Sign On) strategy ID for the user, if applicable.|
|» subscribe_to_newsletter|body|boolean|false|Is the user subscribed to the newsletter?|
|» time_zone|body|string|false|User time zone|
|» user_root|body|string|false|Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.|
|» username|body|string|false|User's username|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authentication_method|password|
|» authentication_method|unused_former_ldap|
|» authentication_method|sso|
|» authentication_method|none|
|» authentication_method|email_signup|
|» authentication_method|password_with_imported_hash|
|» require_2fa|use_system_setting|
|» require_2fa|always_require|
|» require_2fa|never_require|
|» ssl_required|use_system_setting|
|» ssl_required|always_require|
|» ssl_required|never_require|

> Example responses

> 201 Response

```json
{
  "active_2fa": true,
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "api_keys_count": 1,
  "attachments_permission": true,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_inactive_disable": true,
  "bypass_site_allowed_ips": true,
  "company": "ACME Corp.",
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "days_remaining_until_password_expire": 1,
  "disabled": true,
  "email": "example",
  "externally_managed": true,
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "id": 1,
  "language": "en",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_expire_at": "2000-01-01T01:00:00Z",
  "password_expired": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_password_change": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "username": "user"
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Users object.|[UserEntity](#schemauserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show User

<a id="opIdGetUsersId"></a>

> Code samples

```bash
curl https://example.com/users/0 \
  -H 'Accept: application/json'
```

`GET /users/{id}`

Show User

<h3 id="show-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User ID.|

> Example responses

> 200 Response

```json
{
  "active_2fa": true,
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "api_keys_count": 1,
  "attachments_permission": true,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_inactive_disable": true,
  "bypass_site_allowed_ips": true,
  "company": "ACME Corp.",
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "days_remaining_until_password_expire": 1,
  "disabled": true,
  "email": "example",
  "externally_managed": true,
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "id": 1,
  "language": "en",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_expire_at": "2000-01-01T01:00:00Z",
  "password_expired": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_password_change": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "username": "user"
}
```

<h3 id="show-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Users object.|[UserEntity](#schemauserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete User

<a id="opIdDeleteUsersId"></a>

> Code samples

```bash
curl https://example.com/users/0 \
  -X DELETE
```

`DELETE /users/{id}`

Delete User

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User ID.|

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update User

<a id="opIdPatchUsersId"></a>

> Code samples

```bash
curl https://example.com/users/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'allowed_ips=127.0.0.1' \
  -F 'announcements_read=true' \
  -F 'attachments_permission=true' \
  -F 'authenticate_until=2000-01-01T01:00:00Z' \
  -F 'authentication_method=password' \
  -F 'avatar_delete=true' \
  -F 'avatar_file=@/path/to/file' \
  -F 'billing_permission=true' \
  -F 'bypass_inactive_disable=true' \
  -F 'bypass_site_allowed_ips=true' \
  -F 'change_password=string' \
  -F 'change_password_confirmation=string' \
  -F 'company=ACME Corp.' \
  -F 'dav_permission=true' \
  -F 'disabled=true' \
  -F 'email=string' \
  -F 'ftp_permission=true' \
  -F 'grant_permission=string' \
  -F 'group_id=0' \
  -F 'group_ids=string' \
  -F 'header_text=User-specific message.' \
  -F 'imported_password_hash=string' \
  -F 'language=en' \
  -F 'name=John Doe' \
  -F 'notes=Internal notes on this user.' \
  -F 'notification_daily_send_time=18' \
  -F 'office_integration_enabled=true' \
  -F 'password=string' \
  -F 'password_confirmation=string' \
  -F 'password_validity_days=1' \
  -F 'receive_admin_alerts=true' \
  -F 'require_2fa=always_require' \
  -F 'require_password_change=true' \
  -F 'restapi_permission=true' \
  -F 'self_managed=true' \
  -F 'sftp_permission=true' \
  -F 'site_admin=true' \
  -F 'skip_welcome_screen=true' \
  -F 'ssl_required=always_require' \
  -F 'sso_strategy_id=1' \
  -F 'subscribe_to_newsletter=true' \
  -F 'time_zone=Pacific Time (US & Canada)' \
  -F 'user_root=example' \
  -F 'username=user'
```

`PATCH /users/{id}`

Update User

> Body parameter

```yaml
allowed_ips: "127.0.0.1"
announcements_read: true
attachments_permission: true
authenticate_until: "2000-01-01T01:00:00Z"
authentication_method: password
avatar_delete: true
avatar_file: string
billing_permission: true
bypass_inactive_disable: true
bypass_site_allowed_ips: true
change_password: string
change_password_confirmation: string
company: ACME Corp.
dav_permission: true
disabled: true
email: string
ftp_permission: true
grant_permission: string
group_id: 0
group_ids: string
header_text: User-specific message.
imported_password_hash: string
language: en
name: John Doe
notes: Internal notes on this user.
notification_daily_send_time: 18
office_integration_enabled: true
password: string
password_confirmation: string
password_validity_days: 1
receive_admin_alerts: true
require_2fa: always_require
require_password_change: true
restapi_permission: true
self_managed: true
sftp_permission: true
site_admin: true
skip_welcome_screen: true
ssl_required: always_require
sso_strategy_id: 1
subscribe_to_newsletter: true
time_zone: "Pacific Time (US & Canada)"
user_root: example
username: user
```

<h3 id="update-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User ID.|
|body|body|object|false|none|
|» allowed_ips|body|string|false|A list of allowed IPs if applicable.  Newline delimited|
|» announcements_read|body|boolean|false|Signifies that the user has read all the announcements in the UI.|
|» attachments_permission|body|boolean|false|DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.|
|» authenticate_until|body|string(date-time)|false|Scheduled Date/Time at which user will be deactivated|
|» authentication_method|body|string|false|How is this user authenticated?|
|» avatar_delete|body|boolean|false|If true, the avatar will be deleted.|
|» avatar_file|body|string(binary)|false|An image file for your user avatar.|
|» billing_permission|body|boolean|false|Allow this user to perform operations on the account, payments, and invoices?|
|» bypass_inactive_disable|body|boolean|false|Exempt this user from being disabled based on inactivity?|
|» bypass_site_allowed_ips|body|boolean|false|Allow this user to skip site-wide IP blacklists?|
|» change_password|body|string|false|Used for changing a password on an existing user.|
|» change_password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `change_password`.|
|» company|body|string|false|User's company|
|» dav_permission|body|boolean|false|Can the user connect with WebDAV?|
|» disabled|body|boolean|false|Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.|
|» email|body|string|false|User's email.|
|» ftp_permission|body|boolean|false|Can the user access with FTP/FTPS?|
|» grant_permission|body|string|false|Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, or `history`.|
|» group_id|body|integer(int32)|false|Group ID to associate this user with.|
|» group_ids|body|string|false|A list of group ids to associate this user with.  Comma delimited.|
|» header_text|body|string|false|Text to display to the user in the header of the UI|
|» imported_password_hash|body|string|false|Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.|
|» language|body|string|false|Preferred language|
|» name|body|string|false|User's full name|
|» notes|body|string|false|Any internal notes on the user|
|» notification_daily_send_time|body|integer(int32)|false|Hour of the day at which daily notifications should be sent. Can be in range 0 to 23|
|» office_integration_enabled|body|boolean|false|Enable integration with Office for the web?|
|» password|body|string|false|User password.|
|» password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `password`.|
|» password_validity_days|body|integer(int32)|false|Number of days to allow user to use the same password|
|» receive_admin_alerts|body|boolean|false|Should the user receive admin alerts such a certificate expiration notifications and overages?|
|» require_2fa|body|string|false|2FA required setting|
|» require_password_change|body|boolean|false|Is a password change required upon next user login?|
|» restapi_permission|body|boolean|false|Can this user access the REST API?|
|» self_managed|body|boolean|false|Does this user manage it's own credentials or is it a shared/bot user?|
|» sftp_permission|body|boolean|false|Can the user access with SFTP?|
|» site_admin|body|boolean|false|Is the user an administrator for this site?|
|» skip_welcome_screen|body|boolean|false|Skip Welcome page in the UI?|
|» ssl_required|body|string|false|SSL required setting|
|» sso_strategy_id|body|integer(int32)|false|SSO (Single Sign On) strategy ID for the user, if applicable.|
|» subscribe_to_newsletter|body|boolean|false|Is the user subscribed to the newsletter?|
|» time_zone|body|string|false|User time zone|
|» user_root|body|string|false|Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.|
|» username|body|string|false|User's username|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authentication_method|password|
|» authentication_method|unused_former_ldap|
|» authentication_method|sso|
|» authentication_method|none|
|» authentication_method|email_signup|
|» authentication_method|password_with_imported_hash|
|» require_2fa|use_system_setting|
|» require_2fa|always_require|
|» require_2fa|never_require|
|» ssl_required|use_system_setting|
|» ssl_required|always_require|
|» ssl_required|never_require|

> Example responses

> 200 Response

```json
{
  "active_2fa": true,
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "api_keys_count": 1,
  "attachments_permission": true,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_inactive_disable": true,
  "bypass_site_allowed_ips": true,
  "company": "ACME Corp.",
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "days_remaining_until_password_expire": 1,
  "disabled": true,
  "email": "example",
  "externally_managed": true,
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "id": 1,
  "language": "en",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_expire_at": "2000-01-01T01:00:00Z",
  "password_expired": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_password_change": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "username": "user"
}
```

<h3 id="update-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Users object.|[UserEntity](#schemauserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.

<a id="opIdPostUsersId2faReset"></a>

> Code samples

```bash
curl https://example.com/users/0/2fa/reset \
  -X POST
```

`POST /users/{id}/2fa/reset`

Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.

<h3 id="trigger-2fa-reset-process-for-user-who-has-lost-access-to-their-existing-2fa-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User ID.|

<h3 id="trigger-2fa-reset-process-for-user-who-has-lost-access-to-their-existing-2fa-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Resend user welcome email

<a id="opIdPostUsersIdResendWelcomeEmail"></a>

> Code samples

```bash
curl https://example.com/users/0/resend_welcome_email \
  -X POST
```

`POST /users/{id}/resend_welcome_email`

Resend user welcome email

<h3 id="resend-user-welcome-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User ID.|

<h3 id="resend-user-welcome-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Unlock user who has been locked out due to failed logins.

<a id="opIdPostUsersIdUnlock"></a>

> Code samples

```bash
curl https://example.com/users/0/unlock \
  -X POST
```

`POST /users/{id}/unlock`

Unlock user who has been locked out due to failed logins.

<h3 id="unlock-user-who-has-been-locked-out-due-to-failed-logins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User ID.|

<h3 id="unlock-user-who-has-been-locked-out-due-to-failed-logins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Api Keys

<a id="opIdGetUsersUserIdApiKeys"></a>

> Code samples

```bash
curl https://example.com/users/0/api_keys \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/api_keys`

List Api Keys

<h3 id="list-api-keys-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[expires_at]=desc`). Valid fields are `expires_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `expires_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `expires_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `expires_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `expires_at`.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "description": "example",
    "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
    "expires_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "key": "[key]",
    "last_use_at": "2000-01-01T01:00:00Z",
    "name": "My Main API Key",
    "path": "shared/docs",
    "permission_set": "full",
    "platform": "win32",
    "url": "example",
    "user_id": 1
  }
]
```

<h3 id="list-api-keys-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ApiKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-api-keys-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyEntity](#schemaapikeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Api Key

<a id="opIdPostUsersUserIdApiKeys"></a>

> Code samples

```bash
curl https://example.com/users/0/api_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'description=example' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'name=My Main API Key' \
  -F 'path=shared/docs' \
  -F 'permission_set=full'
```

`POST /users/{user_id}/api_keys`

Create Api Key

> Body parameter

```yaml
description: example
expires_at: "2000-01-01T01:00:00Z"
name: My Main API Key
path: shared/docs
permission_set: full
```

<h3 id="create-api-key-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID.  Provide a value of `0` to operate the current session's user.|
|body|body|object|false|none|
|» description|body|string|false|User-supplied description of API key.|
|» expires_at|body|string(date-time)|false|API Key expiration date|
|» name|body|string|false|Internal name for the API Key.  For your use.|
|» path|body|string|false|Folder path restriction for this api key.|
|» permission_set|body|string|false|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permission_set|none|
|» permission_set|full|
|» permission_set|desktop_app|
|» permission_set|sync_app|
|» permission_set|office_integration|
|» permission_set|mobile_app|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

<h3 id="create-api-key-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ApiKeys object.|[ApiKeyEntity](#schemaapikeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List User Cipher Uses

<a id="opIdGetUsersUserIdCipherUses"></a>

> Code samples

```bash
curl https://example.com/users/0/cipher_uses \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/cipher_uses`

List User Cipher Uses

<h3 id="list-user-cipher-uses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "interface": "restapi",
    "protocol_cipher": "TLSv1.2; ECDHE-RSA-AES256-GCM-SHA384",
    "updated_at": "2000-01-01T01:00:00Z",
    "user_id": 1
  }
]
```

<h3 id="list-user-cipher-uses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of UserCipherUses objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-user-cipher-uses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserCipherUseEntity](#schemausercipheruseentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Group Users

<a id="opIdGetUsersUserIdGroups"></a>

> Code samples

```bash
curl https://example.com/users/0/groups \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/groups`

List Group Users

<h3 id="list-group-users-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID.  If provided, will return group_users of this user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|group_id|query|integer(int32)|false|Group ID.  If provided, will return group_users of this group.|

> Example responses

> 200 Response

```json
[
  {
    "admin": true,
    "group_id": 1,
    "group_name": "example",
    "user_id": 1,
    "usernames": [
      "user"
    ]
  }
]
```

<h3 id="list-group-users-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of GroupUsers objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-group-users-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupUserEntity](#schemagroupuserentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Permissions

<a id="opIdGetUsersUserIdPermissions"></a>

> Code samples

```bash
curl https://example.com/users/string/permissions \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/permissions`

List Permissions

<h3 id="list-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[group_id]=desc`). Valid fields are `group_id`, `path`, `user_id` or `permission`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|path|query|string|false|DEPRECATED: Permission path.  If provided, will scope permissions to this path. Use `filter[path]` instead.|
|group_id|query|string|false|DEPRECATED: Group ID.  If provided, will scope permissions to this group. Use `filter[group_id]` instead.`|
|user_id|path|string|true|DEPRECATED: User ID.  If provided, will scope permissions to this user. Use `filter[user_id]` instead.`|
|include_groups|query|boolean|false|If searching by user or group, also include user's permissions that are inherited from its groups?|

> Example responses

> 200 Response

```json
[
  {
    "group_id": 0,
    "group_name": "example",
    "id": 1,
    "path": "example",
    "permission": "full",
    "recursive": true,
    "user_id": 1,
    "username": "Sser"
  }
]
```

<h3 id="list-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Permissions objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PermissionEntity](#schemapermissionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Public Keys

<a id="opIdGetUsersUserIdPublicKeys"></a>

> Code samples

```bash
curl https://example.com/users/0/public_keys \
  -H 'Accept: application/json'
```

`GET /users/{user_id}/public_keys`

List Public Keys

<h3 id="list-public-keys-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
    "id": 1,
    "title": "My public key"
  }
]
```

<h3 id="list-public-keys-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of PublicKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-public-keys-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicKeyEntity](#schemapublickeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Public Key

<a id="opIdPostUsersUserIdPublicKeys"></a>

> Code samples

```bash
curl https://example.com/users/0/public_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'public_key=string' \
  -F 'title=My Main Key'
```

`POST /users/{user_id}/public_keys`

Create Public Key

> Body parameter

```yaml
public_key: string
title: My Main Key
```

<h3 id="create-public-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID.  Provide a value of `0` to operate the current session's user.|
|body|body|object|true|none|
|» public_key|body|string|true|Actual contents of SSH key.|
|» title|body|string|true|Internal reference for key.|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
  "id": 1,
  "title": "My public key"
}
```

<h3 id="create-public-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The PublicKeys object.|[PublicKeyEntity](#schemapublickeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-apps">apps</h1>

Operations about apps

## List Apps

<a id="opIdGetApps"></a>

> Code samples

```bash
curl https://example.com/apps \
  -H 'Accept: application/json'
```

`GET /apps`

List Apps

<h3 id="list-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[name]=desc`). Valid fields are `name` and `app_type`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.|

> Example responses

> 200 Response

```json
[
  {
    "app_type": "example",
    "documentation_links": {
      "Important Info": "http://files.test/learn-more"
    },
    "extended_description": "example",
    "external_homepage_url": "example",
    "featured": true,
    "folder_behavior_type": "example",
    "icon_url": "example",
    "logo_thumbnail_url": "example",
    "logo_url": "example",
    "marketing_youtube_url": "example",
    "name": "example",
    "remote_server_type": "example",
    "screenshot_list_urls": [
      "example"
    ],
    "short_description": "example",
    "sso_strategy_type": "example",
    "tutorial_youtube_url": "example"
  }
]
```

<h3 id="list-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Apps objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppEntity](#schemaappentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-as2incomingmessages">as2_incoming_messages</h1>

Operations about as2_incoming_messages

## List As2 Incoming Messages

<a id="opIdGetAs2IncomingMessages"></a>

> Code samples

```bash
curl https://example.com/as2_incoming_messages \
  -H 'Accept: application/json'
```

`GET /as2_incoming_messages`

List As2 Incoming Messages

<h3 id="list-as2-incoming-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at` and `as2_partner_id`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `created_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `created_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `created_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `created_at`.|
|as2_partner_id|query|integer(int32)|false|As2 Partner ID.  If provided, will return message specific to that partner.|

> Example responses

> 200 Response

```json
[
  {
    "activity_log": "example",
    "as2_from": "example",
    "as2_partner_id": 1,
    "as2_station_id": 1,
    "as2_to": "example",
    "attachment_filename": "example",
    "body_size": "example",
    "content_type": "example",
    "created_at": "2000-01-01T01:00:00Z",
    "date": "example",
    "encrypted_uri": "example",
    "hex_recipient_serial": "A5:EB:C1:95:DC:D8:2B:E7",
    "http_headers": {
      "key": "example value"
    },
    "http_response_code": "example",
    "http_response_headers": {
      "key": "example value"
    },
    "id": 1,
    "ip": "example",
    "mdn_response_uri": "example",
    "message_decrypted": true,
    "message_id": "example",
    "message_mdn_returned": true,
    "message_processing_success": true,
    "message_received": true,
    "message_signature_verified": true,
    "mic": "example",
    "mic_algo": "example",
    "processing_result": "example",
    "processing_result_description": "example",
    "raw_uri": "example",
    "recipient_issuer": "example",
    "recipient_serial": "example",
    "smime_signed_uri": "example",
    "smime_uri": "example",
    "subject": "example",
    "uuid": "example"
  }
]
```

<h3 id="list-as2-incoming-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of As2IncomingMessages objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-as2-incoming-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[As2IncomingMessageEntity](#schemaas2incomingmessageentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-as2outgoingmessages">as2_outgoing_messages</h1>

Operations about as2_outgoing_messages

## List As2 Outgoing Messages

<a id="opIdGetAs2OutgoingMessages"></a>

> Code samples

```bash
curl https://example.com/as2_outgoing_messages \
  -H 'Accept: application/json'
```

`GET /as2_outgoing_messages`

List As2 Outgoing Messages

<h3 id="list-as2-outgoing-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at` and `as2_partner_id`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `created_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `created_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `created_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `created_at`.|
|as2_partner_id|query|integer(int32)|false|As2 Partner ID.  If provided, will return message specific to that partner.|

> Example responses

> 200 Response

```json
[
  {
    "activity_log": "example",
    "as2_from": "example",
    "as2_partner_id": 1,
    "as2_station_id": 1,
    "as2_to": "example",
    "attachment_filename": "example",
    "body_size": "example",
    "created_at": "2000-01-01T01:00:00Z",
    "date": "example",
    "encrypted_uri": "example",
    "http_headers": {
      "key": "example value"
    },
    "http_response_code": "example",
    "http_response_headers": {
      "key": "example value"
    },
    "http_transmission_duration": 1,
    "id": 1,
    "mdn_message_id_matched": true,
    "mdn_mic_matched": true,
    "mdn_processing_success": true,
    "mdn_received": true,
    "mdn_response_uri": "example",
    "mdn_signature_verified": true,
    "mdn_valid": true,
    "message_id": "example",
    "mic": "example",
    "mic_sha_256": "example",
    "processing_result": "example",
    "processing_result_description": "example",
    "raw_uri": "example",
    "smime_signed_uri": "example",
    "smime_uri": "example",
    "uuid": "example"
  }
]
```

<h3 id="list-as2-outgoing-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of As2OutgoingMessages objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-as2-outgoing-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[As2OutgoingMessageEntity](#schemaas2outgoingmessageentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-as2partners">as2_partners</h1>

Operations about as2_partners

## List As2 Partners

<a id="opIdGetAs2Partners"></a>

> Code samples

```bash
curl https://example.com/as2_partners \
  -H 'Accept: application/json'
```

`GET /as2_partners`

List As2 Partners

<h3 id="list-as2-partners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "as2_station_id": 1,
    "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
    "id": 1,
    "name": "AS2 Partner Name",
    "public_certificate_issuer": "example",
    "public_certificate_md5": "example",
    "public_certificate_not_after": "example",
    "public_certificate_not_before": "example",
    "public_certificate_serial": "example",
    "public_certificate_subject": "example",
    "server_certificate": "require_match",
    "uri": "example"
  }
]
```

<h3 id="list-as2-partners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of As2Partners objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-as2-partners-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[As2PartnerEntity](#schemaas2partnerentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create As2 Partner

<a id="opIdPostAs2Partners"></a>

> Code samples

```bash
curl https://example.com/as2_partners \
  -X POST \
  -H 'Accept: application/json' \
  -F 'as2_station_id=0' \
  -F 'name=string' \
  -F 'public_certificate=string' \
  -F 'server_certificate=string' \
  -F 'uri=string'
```

`POST /as2_partners`

Create As2 Partner

> Body parameter

```yaml
as2_station_id: 0
name: string
public_certificate: string
server_certificate: string
uri: string
```

<h3 id="create-as2-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» as2_station_id|body|integer(int32)|true|Id of As2Station for this partner|
|» name|body|string|true|AS2 Name|
|» public_certificate|body|string|true|none|
|» server_certificate|body|string|false|Remote server certificate security setting|
|» uri|body|string|true|URL base for AS2 responses|

> Example responses

> 201 Response

```json
{
  "as2_station_id": 1,
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Partner Name",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "server_certificate": "require_match",
  "uri": "example"
}
```

<h3 id="create-as2-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The As2Partners object.|[As2PartnerEntity](#schemaas2partnerentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show As2 Partner

<a id="opIdGetAs2PartnersId"></a>

> Code samples

```bash
curl https://example.com/as2_partners/0 \
  -H 'Accept: application/json'
```

`GET /as2_partners/{id}`

Show As2 Partner

<h3 id="show-as2-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|As2 Partner ID.|

> Example responses

> 200 Response

```json
{
  "as2_station_id": 1,
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Partner Name",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "server_certificate": "require_match",
  "uri": "example"
}
```

<h3 id="show-as2-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The As2Partners object.|[As2PartnerEntity](#schemaas2partnerentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete As2 Partner

<a id="opIdDeleteAs2PartnersId"></a>

> Code samples

```bash
curl https://example.com/as2_partners/0 \
  -X DELETE
```

`DELETE /as2_partners/{id}`

Delete As2 Partner

<h3 id="delete-as2-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|As2 Partner ID.|

<h3 id="delete-as2-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update As2 Partner

<a id="opIdPatchAs2PartnersId"></a>

> Code samples

```bash
curl https://example.com/as2_partners/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'name=string' \
  -F 'public_certificate=string' \
  -F 'server_certificate=string' \
  -F 'uri=string'
```

`PATCH /as2_partners/{id}`

Update As2 Partner

> Body parameter

```yaml
name: string
public_certificate: string
server_certificate: string
uri: string
```

<h3 id="update-as2-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|As2 Partner ID.|
|body|body|object|false|none|
|» name|body|string|false|AS2 Name|
|» public_certificate|body|string|false|none|
|» server_certificate|body|string|false|Remote server certificate security setting|
|» uri|body|string|false|URL base for AS2 responses|

> Example responses

> 200 Response

```json
{
  "as2_station_id": 1,
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Partner Name",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "server_certificate": "require_match",
  "uri": "example"
}
```

<h3 id="update-as2-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The As2Partners object.|[As2PartnerEntity](#schemaas2partnerentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-as2stations">as2_stations</h1>

Operations about as2_stations

## List As2 Stations

<a id="opIdGetAs2Stations"></a>

> Code samples

```bash
curl https://example.com/as2_stations \
  -H 'Accept: application/json'
```

`GET /as2_stations`

List As2 Stations

<h3 id="list-as2-stations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "domain": "domain.test",
    "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
    "id": 1,
    "name": "AS2 Station Name",
    "private_key_md5": "example",
    "private_key_password_md5": "example",
    "public_certificate_issuer": "example",
    "public_certificate_md5": "example",
    "public_certificate_not_after": "example",
    "public_certificate_not_before": "example",
    "public_certificate_serial": "example",
    "public_certificate_subject": "example",
    "uri": "example"
  }
]
```

<h3 id="list-as2-stations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of As2Stations objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-as2-stations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[As2StationEntity](#schemaas2stationentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create As2 Station

<a id="opIdPostAs2Stations"></a>

> Code samples

```bash
curl https://example.com/as2_stations \
  -X POST \
  -H 'Accept: application/json' \
  -F 'name=string' \
  -F 'private_key=string' \
  -F 'private_key_password=string' \
  -F 'public_certificate=string'
```

`POST /as2_stations`

Create As2 Station

> Body parameter

```yaml
name: string
private_key: string
private_key_password: string
public_certificate: string
```

<h3 id="create-as2-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|AS2 Name|
|» private_key|body|string|true|none|
|» private_key_password|body|string|false|none|
|» public_certificate|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "domain": "domain.test",
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Station Name",
  "private_key_md5": "example",
  "private_key_password_md5": "example",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "uri": "example"
}
```

<h3 id="create-as2-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The As2Stations object.|[As2StationEntity](#schemaas2stationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show As2 Station

<a id="opIdGetAs2StationsId"></a>

> Code samples

```bash
curl https://example.com/as2_stations/0 \
  -H 'Accept: application/json'
```

`GET /as2_stations/{id}`

Show As2 Station

<h3 id="show-as2-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|As2 Station ID.|

> Example responses

> 200 Response

```json
{
  "domain": "domain.test",
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Station Name",
  "private_key_md5": "example",
  "private_key_password_md5": "example",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "uri": "example"
}
```

<h3 id="show-as2-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The As2Stations object.|[As2StationEntity](#schemaas2stationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete As2 Station

<a id="opIdDeleteAs2StationsId"></a>

> Code samples

```bash
curl https://example.com/as2_stations/0 \
  -X DELETE
```

`DELETE /as2_stations/{id}`

Delete As2 Station

<h3 id="delete-as2-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|As2 Station ID.|

<h3 id="delete-as2-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update As2 Station

<a id="opIdPatchAs2StationsId"></a>

> Code samples

```bash
curl https://example.com/as2_stations/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'name=string' \
  -F 'private_key=string' \
  -F 'private_key_password=string' \
  -F 'public_certificate=string'
```

`PATCH /as2_stations/{id}`

Update As2 Station

> Body parameter

```yaml
name: string
private_key: string
private_key_password: string
public_certificate: string
```

<h3 id="update-as2-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|As2 Station ID.|
|body|body|object|false|none|
|» name|body|string|false|AS2 Name|
|» private_key|body|string|false|none|
|» private_key_password|body|string|false|none|
|» public_certificate|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "domain": "domain.test",
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Station Name",
  "private_key_md5": "example",
  "private_key_password_md5": "example",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "uri": "example"
}
```

<h3 id="update-as2-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The As2Stations object.|[As2StationEntity](#schemaas2stationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-automations">automations</h1>

Operations about automations

## List Automations

<a id="opIdGetAutomations"></a>

> Code samples

```bash
curl https://example.com/automations \
  -H 'Accept: application/json'
```

`GET /automations`

List Automations

<h3 id="list-automations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[automation]=desc`). Valid fields are `automation`, `disabled`, `last_modified_at` or `name`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `automation`, `last_modified_at` or `disabled`. Valid field combinations are `[ automation, disabled ]` and `[ disabled, automation ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `automation`, `last_modified_at` or `disabled`. Valid field combinations are `[ automation, disabled ]` and `[ disabled, automation ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `automation`, `last_modified_at` or `disabled`. Valid field combinations are `[ automation, disabled ]` and `[ disabled, automation ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `automation`, `last_modified_at` or `disabled`. Valid field combinations are `[ automation, disabled ]` and `[ disabled, automation ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `automation`, `last_modified_at` or `disabled`. Valid field combinations are `[ automation, disabled ]` and `[ disabled, automation ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `automation`, `last_modified_at` or `disabled`. Valid field combinations are `[ automation, disabled ]` and `[ disabled, automation ]`.|
|with_deleted|query|boolean|false|Set to true to include deleted automations in the results.|
|automation|query|string|false|DEPRECATED: Type of automation to filter by. Use `filter[automation]` instead.|

> Example responses

> 200 Response

```json
[
  {
    "automation": "create_folder",
    "deleted": true,
    "description": "example",
    "destination_replace_from": "example",
    "destination_replace_to": "example",
    "destinations": [
      "destination"
    ],
    "disabled": true,
    "group_ids": [
      1,
      2
    ],
    "id": 1,
    "interval": "week",
    "last_modified_at": "2000-01-01T01:00:00Z",
    "name": "example",
    "path": "example",
    "schedule": "example",
    "source": "example",
    "sync_ids": [
      1,
      2
    ],
    "trigger": "realtime",
    "trigger_actions": [
      "create"
    ],
    "user_id": 1,
    "user_ids": [
      1,
      2
    ],
    "value": {
      "limit": "1"
    },
    "webhook_url": "https://app.files.com/api/webhooks/abc123"
  }
]
```

<h3 id="list-automations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Automations objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-automations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutomationEntity](#schemaautomationentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Automation

<a id="opIdPostAutomations"></a>

> Code samples

```bash
curl https://example.com/automations \
  -X POST \
  -H 'Accept: application/json' \
  -F 'automation=create_folder' \
  -F 'description=example' \
  -F 'destination=string' \
  -F 'destination_replace_from=string' \
  -F 'destination_replace_to=string' \
  -F 'destinations=["folder_a/file_a.txt",{"file_path":"file_b.txt","folder_path":"folder_b"},{"folder_path":"folder_c"}]' \
  -F 'disabled=true' \
  -F 'group_ids=string' \
  -F 'interval=year' \
  -F 'name=example' \
  -F 'path=string' \
  -F 'schedule={"days_of_week":[0,1,3],"time_zone":"Eastern Time (US & Canada)","times_of_day":["7:30","11:30"]}' \
  -F 'source=source' \
  -F 'sync_ids=string' \
  -F 'trigger=realtime' \
  -F 'trigger_actions=["create"]' \
  -F 'user_ids=string' \
  -F 'value={"limit":"1"}'
```

`POST /automations`

Create Automation

> Body parameter

```yaml
automation: create_folder
description: example
destination: string
destination_replace_from: string
destination_replace_to: string
destinations:
  - folder_a/file_a.txt
  -
    file_path: file_b.txt
    folder_path: folder_b
  -
    folder_path: folder_c
disabled: true
group_ids: string
interval: year
name: example
path: string
schedule:
  days_of_week:
    - 0
    - 1
    - 3
  time_zone: "Eastern Time (US & Canada)"
  times_of_day:
    - "7:30"
    - "11:30"
source: source
sync_ids: string
trigger: realtime
trigger_actions:
  - create
user_ids: string
value:
  limit: "1"
```

<h3 id="create-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» automation|body|string|true|Automation type|
|» description|body|string|false|Description for the this Automation.|
|» destination|body|string|false|DEPRECATED: Destination Path. Use `destinations` instead.|
|» destination_replace_from|body|string|false|If set, this string in the destination path will be replaced with the value in `destination_replace_to`.|
|» destination_replace_to|body|string|false|If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.|
|» destinations|body|[string]|false|A list of String destination paths or Hash of folder_path and optional file_path.|
|» disabled|body|boolean|false|If true, this automation will not run.|
|» group_ids|body|string|false|A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.|
|» interval|body|string|false|How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`|
|» name|body|string|false|Name for this automation.|
|» path|body|string|false|Path on which this Automation runs.  Supports globs.|
|» schedule|body|object|false|Custom schedule for running this automation.|
|» source|body|string|false|Source Path|
|» sync_ids|body|string|false|A list of sync IDs the automation is associated with. If sent as a string, it should be comma-delimited.|
|» trigger|body|string|false|How this automation is triggered to run. One of: `realtime`, `daily`, `custom_schedule`, `webhook`, `email`, or `action`.|
|» trigger_actions|body|[string]|false|If trigger is `action`, this is the list of action types on which to trigger the automation. Valid actions are create, read, update, destroy, move, copy|
|» user_ids|body|string|false|A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.|
|» value|body|object|false|A Hash of attributes specific to the automation type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» automation|create_folder|
|» automation|request_file|
|» automation|request_move|
|» automation|copy_newest_file|
|» automation|delete_file|
|» automation|copy_file|
|» automation|move_file|
|» automation|as2_send|
|» automation|run_sync|
|» trigger|realtime|
|» trigger|daily|
|» trigger|custom_schedule|
|» trigger|webhook|
|» trigger|email|
|» trigger|action|

> Example responses

> 201 Response

```json
{
  "automation": "create_folder",
  "deleted": true,
  "description": "example",
  "destination_replace_from": "example",
  "destination_replace_to": "example",
  "destinations": [
    "destination"
  ],
  "disabled": true,
  "group_ids": [
    1,
    2
  ],
  "id": 1,
  "interval": "week",
  "last_modified_at": "2000-01-01T01:00:00Z",
  "name": "example",
  "path": "example",
  "schedule": "example",
  "source": "example",
  "sync_ids": [
    1,
    2
  ],
  "trigger": "realtime",
  "trigger_actions": [
    "create"
  ],
  "user_id": 1,
  "user_ids": [
    1,
    2
  ],
  "value": {
    "limit": "1"
  },
  "webhook_url": "https://app.files.com/api/webhooks/abc123"
}
```

<h3 id="create-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Automations object.|[AutomationEntity](#schemaautomationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Automation

<a id="opIdGetAutomationsId"></a>

> Code samples

```bash
curl https://example.com/automations/0 \
  -H 'Accept: application/json'
```

`GET /automations/{id}`

Show Automation

<h3 id="show-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Automation ID.|

> Example responses

> 200 Response

```json
{
  "automation": "create_folder",
  "deleted": true,
  "description": "example",
  "destination_replace_from": "example",
  "destination_replace_to": "example",
  "destinations": [
    "destination"
  ],
  "disabled": true,
  "group_ids": [
    1,
    2
  ],
  "id": 1,
  "interval": "week",
  "last_modified_at": "2000-01-01T01:00:00Z",
  "name": "example",
  "path": "example",
  "schedule": "example",
  "source": "example",
  "sync_ids": [
    1,
    2
  ],
  "trigger": "realtime",
  "trigger_actions": [
    "create"
  ],
  "user_id": 1,
  "user_ids": [
    1,
    2
  ],
  "value": {
    "limit": "1"
  },
  "webhook_url": "https://app.files.com/api/webhooks/abc123"
}
```

<h3 id="show-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Automations object.|[AutomationEntity](#schemaautomationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Automation

<a id="opIdDeleteAutomationsId"></a>

> Code samples

```bash
curl https://example.com/automations/0 \
  -X DELETE
```

`DELETE /automations/{id}`

Delete Automation

<h3 id="delete-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Automation ID.|

<h3 id="delete-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Automation

<a id="opIdPatchAutomationsId"></a>

> Code samples

```bash
curl https://example.com/automations/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'automation=create_folder' \
  -F 'description=example' \
  -F 'destination=string' \
  -F 'destination_replace_from=string' \
  -F 'destination_replace_to=string' \
  -F 'destinations=["folder_a/file_a.txt",{"file_path":"file_b.txt","folder_path":"folder_b"},{"folder_path":"folder_c"}]' \
  -F 'disabled=true' \
  -F 'group_ids=string' \
  -F 'interval=year' \
  -F 'name=example' \
  -F 'path=string' \
  -F 'schedule={"days_of_week":[0,1,3],"time_zone":"Eastern Time (US & Canada)","times_of_day":["7:30","11:30"]}' \
  -F 'source=source' \
  -F 'sync_ids=string' \
  -F 'trigger=realtime' \
  -F 'trigger_actions=["create"]' \
  -F 'user_ids=string' \
  -F 'value={"limit":"1"}'
```

`PATCH /automations/{id}`

Update Automation

> Body parameter

```yaml
automation: create_folder
description: example
destination: string
destination_replace_from: string
destination_replace_to: string
destinations:
  - folder_a/file_a.txt
  -
    file_path: file_b.txt
    folder_path: folder_b
  -
    folder_path: folder_c
disabled: true
group_ids: string
interval: year
name: example
path: string
schedule:
  days_of_week:
    - 0
    - 1
    - 3
  time_zone: "Eastern Time (US & Canada)"
  times_of_day:
    - "7:30"
    - "11:30"
source: source
sync_ids: string
trigger: realtime
trigger_actions:
  - create
user_ids: string
value:
  limit: "1"
```

<h3 id="update-automation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Automation ID.|
|body|body|object|false|none|
|» automation|body|string|false|Automation type|
|» description|body|string|false|Description for the this Automation.|
|» destination|body|string|false|DEPRECATED: Destination Path. Use `destinations` instead.|
|» destination_replace_from|body|string|false|If set, this string in the destination path will be replaced with the value in `destination_replace_to`.|
|» destination_replace_to|body|string|false|If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.|
|» destinations|body|[string]|false|A list of String destination paths or Hash of folder_path and optional file_path.|
|» disabled|body|boolean|false|If true, this automation will not run.|
|» group_ids|body|string|false|A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.|
|» interval|body|string|false|How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`|
|» name|body|string|false|Name for this automation.|
|» path|body|string|false|Path on which this Automation runs.  Supports globs.|
|» schedule|body|object|false|Custom schedule for running this automation.|
|» source|body|string|false|Source Path|
|» sync_ids|body|string|false|A list of sync IDs the automation is associated with. If sent as a string, it should be comma-delimited.|
|» trigger|body|string|false|How this automation is triggered to run. One of: `realtime`, `daily`, `custom_schedule`, `webhook`, `email`, or `action`.|
|» trigger_actions|body|[string]|false|If trigger is `action`, this is the list of action types on which to trigger the automation. Valid actions are create, read, update, destroy, move, copy|
|» user_ids|body|string|false|A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.|
|» value|body|object|false|A Hash of attributes specific to the automation type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» automation|create_folder|
|» automation|request_file|
|» automation|request_move|
|» automation|copy_newest_file|
|» automation|delete_file|
|» automation|copy_file|
|» automation|move_file|
|» automation|as2_send|
|» automation|run_sync|
|» trigger|realtime|
|» trigger|daily|
|» trigger|custom_schedule|
|» trigger|webhook|
|» trigger|email|
|» trigger|action|

> Example responses

> 200 Response

```json
{
  "automation": "create_folder",
  "deleted": true,
  "description": "example",
  "destination_replace_from": "example",
  "destination_replace_to": "example",
  "destinations": [
    "destination"
  ],
  "disabled": true,
  "group_ids": [
    1,
    2
  ],
  "id": 1,
  "interval": "week",
  "last_modified_at": "2000-01-01T01:00:00Z",
  "name": "example",
  "path": "example",
  "schedule": "example",
  "source": "example",
  "sync_ids": [
    1,
    2
  ],
  "trigger": "realtime",
  "trigger_actions": [
    "create"
  ],
  "user_id": 1,
  "user_ids": [
    1,
    2
  ],
  "value": {
    "limit": "1"
  },
  "webhook_url": "https://app.files.com/api/webhooks/abc123"
}
```

<h3 id="update-automation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Automations object.|[AutomationEntity](#schemaautomationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-automationruns">automation_runs</h1>

Operations about automation_runs

## List Automation Runs

<a id="opIdGetAutomationRuns"></a>

> Code samples

```bash
curl 'https://example.com/automation_runs?automation_id=1' \
  -H 'Accept: application/json'
```

`GET /automation_runs`

List Automation Runs

<h3 id="list-automation-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at` and `status`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `status`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `status`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `status`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `status`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `status`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `status`.|
|automation_id|query|integer(int32)|true|ID of the associated Automation.|

> Example responses

> 200 Response

```json
[
  {
    "automation_id": 1,
    "completed_at": "2000-01-01T01:00:00Z",
    "created_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "status": "success",
    "status_messages_url": "https://www.example.com/log_file.txt"
  }
]
```

<h3 id="list-automation-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of AutomationRuns objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-automation-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AutomationRunEntity](#schemaautomationrunentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Show Automation Run

<a id="opIdGetAutomationRunsId"></a>

> Code samples

```bash
curl https://example.com/automation_runs/0 \
  -H 'Accept: application/json'
```

`GET /automation_runs/{id}`

Show Automation Run

<h3 id="show-automation-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Automation Run ID.|

> Example responses

> 200 Response

```json
{
  "automation_id": 1,
  "completed_at": "2000-01-01T01:00:00Z",
  "created_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "status": "success",
  "status_messages_url": "https://www.example.com/log_file.txt"
}
```

<h3 id="show-automation-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The AutomationRuns object.|[AutomationRunEntity](#schemaautomationrunentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-bandwidthsnapshots">bandwidth_snapshots</h1>

Operations about bandwidth_snapshots

## List Bandwidth Snapshots

<a id="opIdGetBandwidthSnapshots"></a>

> Code samples

```bash
curl https://example.com/bandwidth_snapshots \
  -H 'Accept: application/json'
```

`GET /bandwidth_snapshots`

List Bandwidth Snapshots

<h3 id="list-bandwidth-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[logged_at]=desc`). Valid fields are `logged_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `logged_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `logged_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `logged_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `logged_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `logged_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `logged_at`.|

> Example responses

> 200 Response

```json
[
  {
    "bytes_received": 1,
    "bytes_sent": 1,
    "id": 1,
    "logged_at": "2000-01-01T01:00:00Z",
    "requests_get": 1,
    "requests_other": 1,
    "requests_put": 1,
    "sync_bytes_received": 1,
    "sync_bytes_sent": 1
  }
]
```

<h3 id="list-bandwidth-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of BandwidthSnapshots objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-bandwidth-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BandwidthSnapshotEntity](#schemabandwidthsnapshotentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-behaviors">behaviors</h1>

Operations about behaviors

## List Behaviors

<a id="opIdGetBehaviors"></a>

> Code samples

```bash
curl https://example.com/behaviors \
  -H 'Accept: application/json'
```

`GET /behaviors`

List Behaviors

<h3 id="list-behaviors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[behavior]=desc`). Valid fields are `behavior`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `behavior`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `behavior`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `behavior`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `behavior`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `behavior`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `behavior`.|
|behavior|query|string|false|If set, only shows folder behaviors matching this behavior type.|

> Example responses

> 200 Response

```json
[
  {
    "attachment_url": "example",
    "behavior": "webhook",
    "description": "example",
    "id": 1,
    "name": "example",
    "path": "example",
    "value": {
      "key": "example value"
    }
  }
]
```

<h3 id="list-behaviors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Behaviors objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-behaviors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BehaviorEntity](#schemabehaviorentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Behavior

<a id="opIdPostBehaviors"></a>

> Code samples

```bash
curl https://example.com/behaviors \
  -X POST \
  -H 'Accept: application/json' \
  -F 'attachment_file=@/path/to/file' \
  -F 'behavior=webhook' \
  -F 'description=example' \
  -F 'name=example' \
  -F 'path=string' \
  -F 'value={"method": "GET"}'
```

`POST /behaviors`

Create Behavior

> Body parameter

```yaml
attachment_file: string
behavior: webhook
description: example
name: example
path: string
value: "{\"method\": \"GET\"}"
```

<h3 id="create-behavior-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» attachment_file|body|string(binary)|false|Certain behaviors may require a file, for instance, the "watermark" behavior requires a watermark image|
|» behavior|body|string|true|Behavior type.|
|» description|body|string|false|Description for this behavior.|
|» name|body|string|false|Name for this behavior.|
|» path|body|string|true|Folder behaviors path.|
|» value|body|string|false|The value of the folder behavior.  Can be a integer, array, or hash depending on the type of folder behavior. See The Behavior Types section for example values for each type of behavior.|

> Example responses

> 201 Response

```json
{
  "attachment_url": "example",
  "behavior": "webhook",
  "description": "example",
  "id": 1,
  "name": "example",
  "path": "example",
  "value": {
    "key": "example value"
  }
}
```

<h3 id="create-behavior-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Behaviors object.|[BehaviorEntity](#schemabehaviorentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Behaviors by path

<a id="opIdBehaviorListForPath"></a>

> Code samples

```bash
curl https://example.com/behaviors/folders/string \
  -H 'Accept: application/json'
```

`GET /behaviors/folders/{path}`

List Behaviors by path

<h3 id="list-behaviors-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[behavior]=desc`). Valid fields are `behavior`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `behavior`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `behavior`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `behavior`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `behavior`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `behavior`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `behavior`.|
|path|path|string|true|Path to operate on.|
|recursive|query|string|false|Show behaviors above this path?|
|behavior|query|string|false|DEPRECATED: If set only shows folder behaviors matching this behavior type. Use `filter[behavior]` instead.|

> Example responses

> 200 Response

```json
[
  {
    "attachment_url": "example",
    "behavior": "webhook",
    "description": "example",
    "id": 1,
    "name": "example",
    "path": "example",
    "value": {
      "key": "example value"
    }
  }
]
```

<h3 id="list-behaviors-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Behaviors objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-behaviors-by-path-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BehaviorEntity](#schemabehaviorentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Test webhook.

<a id="opIdPostBehaviorsWebhookTest"></a>

> Code samples

```bash
curl https://example.com/behaviors/webhook/test \
  -X POST \
  -H 'Accept: application/json' \
  -F 'action=test' \
  -F 'body={"test-param":"testvalue"}' \
  -F 'encoding=RAW' \
  -F 'headers={"x-test-header":"testvalue"}' \
  -F 'method=GET' \
  -F 'url=https://www.site.com/...'
```

`POST /behaviors/webhook/test`

Test webhook.

> Body parameter

```yaml
action: test
body:
  test-param: testvalue
encoding: RAW
headers:
  x-test-header: testvalue
method: GET
url: "https://www.site.com/..."
```

<h3 id="test-webhook-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» action|body|string|false|action for test body|
|» body|body|object|false|Additional body parameters.|
|» encoding|body|string|false|HTTP encoding method.  Can be JSON, XML, or RAW (form data).|
|» headers|body|object|false|Additional request headers.|
|» method|body|string|false|HTTP method(GET or POST).|
|» url|body|string|true|URL for testing the webhook.|

> Example responses

> 200 Response

```json
{
  "clickwrap_body": "example",
  "clickwrap_id": 1,
  "code": 200,
  "data": {
    "dynamic": {}
  },
  "errors": [
    null
  ],
  "message": "example",
  "status": ""
}
```

<h3 id="test-webhook-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Behaviors object.|[StatusEntity](#schemastatusentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Behavior

<a id="opIdGetBehaviorsId"></a>

> Code samples

```bash
curl https://example.com/behaviors/0 \
  -H 'Accept: application/json'
```

`GET /behaviors/{id}`

Show Behavior

<h3 id="show-behavior-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Behavior ID.|

> Example responses

> 200 Response

```json
{
  "attachment_url": "example",
  "behavior": "webhook",
  "description": "example",
  "id": 1,
  "name": "example",
  "path": "example",
  "value": {
    "key": "example value"
  }
}
```

<h3 id="show-behavior-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Behaviors object.|[BehaviorEntity](#schemabehaviorentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Behavior

<a id="opIdDeleteBehaviorsId"></a>

> Code samples

```bash
curl https://example.com/behaviors/0 \
  -X DELETE
```

`DELETE /behaviors/{id}`

Delete Behavior

<h3 id="delete-behavior-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Behavior ID.|

<h3 id="delete-behavior-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Behavior

<a id="opIdPatchBehaviorsId"></a>

> Code samples

```bash
curl https://example.com/behaviors/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'attachment_delete=true' \
  -F 'attachment_file=@/path/to/file' \
  -F 'behavior=webhook' \
  -F 'description=example' \
  -F 'name=example' \
  -F 'path=string' \
  -F 'value={"method": "GET"}'
```

`PATCH /behaviors/{id}`

Update Behavior

> Body parameter

```yaml
attachment_delete: true
attachment_file: string
behavior: webhook
description: example
name: example
path: string
value: "{\"method\": \"GET\"}"
```

<h3 id="update-behavior-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Behavior ID.|
|body|body|object|false|none|
|» attachment_delete|body|boolean|false|If true, will delete the file stored in attachment|
|» attachment_file|body|string(binary)|false|Certain behaviors may require a file, for instance, the "watermark" behavior requires a watermark image|
|» behavior|body|string|false|Behavior type.|
|» description|body|string|false|Description for this behavior.|
|» name|body|string|false|Name for this behavior.|
|» path|body|string|false|Folder behaviors path.|
|» value|body|string|false|The value of the folder behavior.  Can be a integer, array, or hash depending on the type of folder behavior. See The Behavior Types section for example values for each type of behavior.|

> Example responses

> 200 Response

```json
{
  "attachment_url": "example",
  "behavior": "webhook",
  "description": "example",
  "id": 1,
  "name": "example",
  "path": "example",
  "value": {
    "key": "example value"
  }
}
```

<h3 id="update-behavior-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Behaviors object.|[BehaviorEntity](#schemabehaviorentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-bundles">bundles</h1>

Operations about bundles

## List Bundles

<a id="opIdGetBundles"></a>

> Code samples

```bash
curl https://example.com/bundles \
  -H 'Accept: application/json'
```

`GET /bundles`

List Bundles

<h3 id="list-bundles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at` and `code`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `created_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `created_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `created_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `created_at`.|

> Example responses

> 200 Response

```json
[
  {
    "clickwrap_body": "[Legal text]",
    "clickwrap_id": 1,
    "code": "abc123",
    "created_at": "2000-01-01T01:00:00Z",
    "description": "The public description of the bundle.",
    "dont_separate_submissions_by_folder": true,
    "expires_at": "2000-01-01T01:00:00Z",
    "form_field_set": {
      "form_fields": [
        null
      ],
      "form_layout": [
        1,
        2,
        3,
        4
      ],
      "id": 1,
      "skip_company": true,
      "skip_email": true,
      "skip_name": true,
      "title": "Sample Form Title"
    },
    "has_inbox": true,
    "id": 1,
    "inbox_id": 1,
    "max_uses": 1,
    "note": "The internal note on the bundle.",
    "password_protected": true,
    "path_template": "{{name}}_{{ip}}",
    "paths": [
      "file.txt"
    ],
    "permissions": "read",
    "preview_only": true,
    "require_registration": true,
    "require_share_recipient": true,
    "send_email_receipt_to_uploader": true,
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "url": "https://subdomain.files.com/f/12345678",
    "user_id": 1,
    "username": "user",
    "watermark_attachment": {
      "name": "My logo",
      "uri": "https://mysite.files.com/.../my_image.png"
    },
    "watermark_value": {
      "key": "example value"
    }
  }
]
```

<h3 id="list-bundles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Bundles objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-bundles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BundleEntity](#schemabundleentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Bundle

<a id="opIdPostBundles"></a>

> Code samples

```bash
curl https://example.com/bundles \
  -X POST \
  -H 'Accept: application/json' \
  -F 'clickwrap_id=1' \
  -F 'code=abc123' \
  -F 'description=The public description of the bundle.' \
  -F 'dont_separate_submissions_by_folder=true' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'form_field_set_id=0' \
  -F 'inbox_id=1' \
  -F 'max_uses=1' \
  -F 'note=The internal note on the bundle.' \
  -F 'password=Password' \
  -F 'path_template={{name}}_{{ip}}' \
  -F 'paths=["file.txt"]' \
  -F 'permissions=read' \
  -F 'preview_only=true' \
  -F 'require_registration=true' \
  -F 'require_share_recipient=true' \
  -F 'send_email_receipt_to_uploader=true' \
  -F 'skip_company=true' \
  -F 'skip_email=true' \
  -F 'skip_name=true' \
  -F 'user_id=0' \
  -F 'watermark_attachment_file=@/path/to/file'
```

`POST /bundles`

Create Bundle

> Body parameter

```yaml
clickwrap_id: 1
code: abc123
description: The public description of the bundle.
dont_separate_submissions_by_folder: true
expires_at: "2000-01-01T01:00:00Z"
form_field_set_id: 0
inbox_id: 1
max_uses: 1
note: The internal note on the bundle.
password: Password
path_template: "{{name}}_{{ip}}"
paths:
  - file.txt
permissions: read
preview_only: true
require_registration: true
require_share_recipient: true
send_email_receipt_to_uploader: true
skip_company: true
skip_email: true
skip_name: true
user_id: 0
watermark_attachment_file: string
```

<h3 id="create-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» clickwrap_id|body|integer(int32)|false|ID of the clickwrap to use with this bundle.|
|» code|body|string|false|Bundle code.  This code forms the end part of the Public URL.|
|» description|body|string|false|Public description|
|» dont_separate_submissions_by_folder|body|boolean|false|Do not create subfolders for files uploaded to this share. Note: there are subtle security pitfalls with allowing anonymous uploads from multiple users to live in the same folder. We strongly discourage use of this option unless absolutely required.|
|» expires_at|body|string(date-time)|false|Bundle expiration date/time|
|» form_field_set_id|body|integer(int32)|false|Id of Form Field Set to use with this bundle|
|» inbox_id|body|integer(int32)|false|ID of the associated inbox, if available.|
|» max_uses|body|integer(int32)|false|Maximum number of times bundle can be accessed|
|» note|body|string|false|Bundle internal note|
|» password|body|string|false|Password for this bundle.|
|» path_template|body|string|false|Template for creating submission subfolders. Can use the uploader's name, email address, ip, company, and any custom form data.|
|» paths|body|[string]|true|A list of paths to include in this bundle.|
|» permissions|body|string|false|Permissions that apply to Folders in this Share Link.|
|» preview_only|body|boolean|false|Restrict users to previewing files only?|
|» require_registration|body|boolean|false|Show a registration page that captures the downloader's name and email address?|
|» require_share_recipient|body|boolean|false|Only allow access to recipients who have explicitly received the share via an email sent through the Files.com UI?|
|» send_email_receipt_to_uploader|body|boolean|false|Send delivery receipt to the uploader. Note: For writable share only|
|» skip_company|body|boolean|false|BundleRegistrations can be saved without providing company?|
|» skip_email|body|boolean|false|BundleRegistrations can be saved without providing email?|
|» skip_name|body|boolean|false|BundleRegistrations can be saved without providing name?|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|» watermark_attachment_file|body|string(binary)|false|Preview watermark image applied to all bundle items.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|read|
|» permissions|write|
|» permissions|read_write|
|» permissions|full|
|» permissions|none|
|» permissions|preview_only|

> Example responses

> 201 Response

```json
{
  "clickwrap_body": "[Legal text]",
  "clickwrap_id": 1,
  "code": "abc123",
  "created_at": "2000-01-01T01:00:00Z",
  "description": "The public description of the bundle.",
  "dont_separate_submissions_by_folder": true,
  "expires_at": "2000-01-01T01:00:00Z",
  "form_field_set": {
    "form_fields": [
      null
    ],
    "form_layout": [
      1,
      2,
      3,
      4
    ],
    "id": 1,
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "Sample Form Title"
  },
  "has_inbox": true,
  "id": 1,
  "inbox_id": 1,
  "max_uses": 1,
  "note": "The internal note on the bundle.",
  "password_protected": true,
  "path_template": "{{name}}_{{ip}}",
  "paths": [
    "file.txt"
  ],
  "permissions": "read",
  "preview_only": true,
  "require_registration": true,
  "require_share_recipient": true,
  "send_email_receipt_to_uploader": true,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "url": "https://subdomain.files.com/f/12345678",
  "user_id": 1,
  "username": "user",
  "watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "watermark_value": {
    "key": "example value"
  }
}
```

<h3 id="create-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Bundles object.|[BundleEntity](#schemabundleentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Bundle

<a id="opIdGetBundlesId"></a>

> Code samples

```bash
curl https://example.com/bundles/0 \
  -H 'Accept: application/json'
```

`GET /bundles/{id}`

Show Bundle

<h3 id="show-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle ID.|

> Example responses

> 200 Response

```json
{
  "clickwrap_body": "[Legal text]",
  "clickwrap_id": 1,
  "code": "abc123",
  "created_at": "2000-01-01T01:00:00Z",
  "description": "The public description of the bundle.",
  "dont_separate_submissions_by_folder": true,
  "expires_at": "2000-01-01T01:00:00Z",
  "form_field_set": {
    "form_fields": [
      null
    ],
    "form_layout": [
      1,
      2,
      3,
      4
    ],
    "id": 1,
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "Sample Form Title"
  },
  "has_inbox": true,
  "id": 1,
  "inbox_id": 1,
  "max_uses": 1,
  "note": "The internal note on the bundle.",
  "password_protected": true,
  "path_template": "{{name}}_{{ip}}",
  "paths": [
    "file.txt"
  ],
  "permissions": "read",
  "preview_only": true,
  "require_registration": true,
  "require_share_recipient": true,
  "send_email_receipt_to_uploader": true,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "url": "https://subdomain.files.com/f/12345678",
  "user_id": 1,
  "username": "user",
  "watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "watermark_value": {
    "key": "example value"
  }
}
```

<h3 id="show-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Bundles object.|[BundleEntity](#schemabundleentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Bundle

<a id="opIdDeleteBundlesId"></a>

> Code samples

```bash
curl https://example.com/bundles/0 \
  -X DELETE
```

`DELETE /bundles/{id}`

Delete Bundle

<h3 id="delete-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle ID.|

<h3 id="delete-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Bundle

<a id="opIdPatchBundlesId"></a>

> Code samples

```bash
curl https://example.com/bundles/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'clickwrap_id=1' \
  -F 'code=abc123' \
  -F 'description=The public description of the bundle.' \
  -F 'dont_separate_submissions_by_folder=true' \
  -F 'expires_at=2000-01-01T01:00:00Z' \
  -F 'form_field_set_id=0' \
  -F 'inbox_id=1' \
  -F 'max_uses=1' \
  -F 'note=The internal note on the bundle.' \
  -F 'password=Password' \
  -F 'path_template={{name}}_{{ip}}' \
  -F 'paths=["file.txt"]' \
  -F 'permissions=read' \
  -F 'preview_only=true' \
  -F 'require_registration=true' \
  -F 'require_share_recipient=true' \
  -F 'send_email_receipt_to_uploader=true' \
  -F 'skip_company=true' \
  -F 'skip_email=true' \
  -F 'skip_name=true' \
  -F 'watermark_attachment_delete=true' \
  -F 'watermark_attachment_file=@/path/to/file'
```

`PATCH /bundles/{id}`

Update Bundle

> Body parameter

```yaml
clickwrap_id: 1
code: abc123
description: The public description of the bundle.
dont_separate_submissions_by_folder: true
expires_at: "2000-01-01T01:00:00Z"
form_field_set_id: 0
inbox_id: 1
max_uses: 1
note: The internal note on the bundle.
password: Password
path_template: "{{name}}_{{ip}}"
paths:
  - file.txt
permissions: read
preview_only: true
require_registration: true
require_share_recipient: true
send_email_receipt_to_uploader: true
skip_company: true
skip_email: true
skip_name: true
watermark_attachment_delete: true
watermark_attachment_file: string
```

<h3 id="update-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle ID.|
|body|body|object|false|none|
|» clickwrap_id|body|integer(int32)|false|ID of the clickwrap to use with this bundle.|
|» code|body|string|false|Bundle code.  This code forms the end part of the Public URL.|
|» description|body|string|false|Public description|
|» dont_separate_submissions_by_folder|body|boolean|false|Do not create subfolders for files uploaded to this share. Note: there are subtle security pitfalls with allowing anonymous uploads from multiple users to live in the same folder. We strongly discourage use of this option unless absolutely required.|
|» expires_at|body|string(date-time)|false|Bundle expiration date/time|
|» form_field_set_id|body|integer(int32)|false|Id of Form Field Set to use with this bundle|
|» inbox_id|body|integer(int32)|false|ID of the associated inbox, if available.|
|» max_uses|body|integer(int32)|false|Maximum number of times bundle can be accessed|
|» note|body|string|false|Bundle internal note|
|» password|body|string|false|Password for this bundle.|
|» path_template|body|string|false|Template for creating submission subfolders. Can use the uploader's name, email address, ip, company, and any custom form data.|
|» paths|body|[string]|false|A list of paths to include in this bundle.|
|» permissions|body|string|false|Permissions that apply to Folders in this Share Link.|
|» preview_only|body|boolean|false|Restrict users to previewing files only?|
|» require_registration|body|boolean|false|Show a registration page that captures the downloader's name and email address?|
|» require_share_recipient|body|boolean|false|Only allow access to recipients who have explicitly received the share via an email sent through the Files.com UI?|
|» send_email_receipt_to_uploader|body|boolean|false|Send delivery receipt to the uploader. Note: For writable share only|
|» skip_company|body|boolean|false|BundleRegistrations can be saved without providing company?|
|» skip_email|body|boolean|false|BundleRegistrations can be saved without providing email?|
|» skip_name|body|boolean|false|BundleRegistrations can be saved without providing name?|
|» watermark_attachment_delete|body|boolean|false|If true, will delete the file stored in watermark_attachment|
|» watermark_attachment_file|body|string(binary)|false|Preview watermark image applied to all bundle items.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|read|
|» permissions|write|
|» permissions|read_write|
|» permissions|full|
|» permissions|none|
|» permissions|preview_only|

> Example responses

> 200 Response

```json
{
  "clickwrap_body": "[Legal text]",
  "clickwrap_id": 1,
  "code": "abc123",
  "created_at": "2000-01-01T01:00:00Z",
  "description": "The public description of the bundle.",
  "dont_separate_submissions_by_folder": true,
  "expires_at": "2000-01-01T01:00:00Z",
  "form_field_set": {
    "form_fields": [
      null
    ],
    "form_layout": [
      1,
      2,
      3,
      4
    ],
    "id": 1,
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "Sample Form Title"
  },
  "has_inbox": true,
  "id": 1,
  "inbox_id": 1,
  "max_uses": 1,
  "note": "The internal note on the bundle.",
  "password_protected": true,
  "path_template": "{{name}}_{{ip}}",
  "paths": [
    "file.txt"
  ],
  "permissions": "read",
  "preview_only": true,
  "require_registration": true,
  "require_share_recipient": true,
  "send_email_receipt_to_uploader": true,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "url": "https://subdomain.files.com/f/12345678",
  "user_id": 1,
  "username": "user",
  "watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "watermark_value": {
    "key": "example value"
  }
}
```

<h3 id="update-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Bundles object.|[BundleEntity](#schemabundleentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send email(s) with a link to bundle

<a id="opIdPostBundlesIdShare"></a>

> Code samples

```bash
curl https://example.com/bundles/0/share \
  -X POST \
  -F 'note=Just a note.' \
  -F 'recipients=[{"company":"Acme Ltd","name":"John Doe","recipient":"johndoe@gmail.com"}]' \
  -F 'to=["johndoe@gmail.com"]'
```

`POST /bundles/{id}/share`

Send email(s) with a link to bundle

> Body parameter

```yaml
note: Just a note.
recipients:
  -
    company: Acme Ltd
    name: John Doe
    recipient: johndoe@gmail.com
to:
  - johndoe@gmail.com
```

<h3 id="send-emails-with-a-link-to-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle ID.|
|body|body|object|false|none|
|» note|body|string|false|Note to include in email.|
|» recipients|body|[object]|false|A list of recipients to share this bundle with. Required unless `to` is used.|
|» to|body|[string]|false|A list of email addresses to share this bundle with. Required unless `recipients` is used.|

<h3 id="send-emails-with-a-link-to-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-bundledownloads">bundle_downloads</h1>

Operations about bundle_downloads

## List Bundle Downloads

<a id="opIdGetBundleDownloads"></a>

> Code samples

```bash
curl https://example.com/bundle_downloads \
  -H 'Accept: application/json'
```

`GET /bundle_downloads`

List Bundle Downloads

<h3 id="list-bundle-downloads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `created_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `created_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `created_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `created_at`.|
|bundle_id|query|integer(int32)|false|Bundle ID|
|bundle_registration_id|query|integer(int32)|false|BundleRegistration ID|

> Example responses

> 200 Response

```json
[
  {
    "bundle_registration": {
      "bundle_code": "example",
      "bundle_id": 1,
      "bundle_recipient_id": 1,
      "clickwrap_body": "example",
      "code": "abc123",
      "company": "Action Verb",
      "created_at": "2000-01-01T01:00:00Z",
      "email": "john.doe@files.com",
      "form_field_data": {
        "key": "example value"
      },
      "form_field_set_id": 1,
      "inbox_code": "abc123",
      "ip": "10.1.1.1",
      "name": "account"
    },
    "created_at": "2000-01-01T01:00:00Z",
    "download_method": "file",
    "path": "a/b/test.txt"
  }
]
```

<h3 id="list-bundle-downloads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of BundleDownloads objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-bundle-downloads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BundleDownloadEntity](#schemabundledownloadentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-bundlenotifications">bundle_notifications</h1>

Operations about bundle_notifications

## List Bundle Notifications

<a id="opIdGetBundleNotifications"></a>

> Code samples

```bash
curl https://example.com/bundle_notifications \
  -H 'Accept: application/json'
```

`GET /bundle_notifications`

List Bundle Notifications

<h3 id="list-bundle-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|bundle_id|query|integer(int32)|false|Bundle ID to notify on|

> Example responses

> 200 Response

```json
[
  {
    "bundle_id": 1,
    "id": 1,
    "notify_on_registration": true,
    "notify_on_upload": true,
    "user_id": 1
  }
]
```

<h3 id="list-bundle-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of BundleNotifications objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-bundle-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BundleNotificationEntity](#schemabundlenotificationentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Bundle Notification

<a id="opIdPostBundleNotifications"></a>

> Code samples

```bash
curl https://example.com/bundle_notifications \
  -X POST \
  -H 'Accept: application/json' \
  -F 'bundle_id=1' \
  -F 'notify_on_registration=true' \
  -F 'notify_on_upload=true' \
  -F 'user_id=1'
```

`POST /bundle_notifications`

Create Bundle Notification

> Body parameter

```yaml
bundle_id: 1
notify_on_registration: true
notify_on_upload: true
user_id: 1
```

<h3 id="create-bundle-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» bundle_id|body|integer(int32)|true|Bundle ID to notify on|
|» notify_on_registration|body|boolean|false|Triggers bundle notification when a registration action occurs for it.|
|» notify_on_upload|body|boolean|false|Triggers bundle notification when a upload action occurs for it.|
|» user_id|body|integer(int32)|false|The id of the user to notify.|

> Example responses

> 201 Response

```json
{
  "bundle_id": 1,
  "id": 1,
  "notify_on_registration": true,
  "notify_on_upload": true,
  "user_id": 1
}
```

<h3 id="create-bundle-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The BundleNotifications object.|[BundleNotificationEntity](#schemabundlenotificationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Bundle Notification

<a id="opIdGetBundleNotificationsId"></a>

> Code samples

```bash
curl https://example.com/bundle_notifications/0 \
  -H 'Accept: application/json'
```

`GET /bundle_notifications/{id}`

Show Bundle Notification

<h3 id="show-bundle-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle Notification ID.|

> Example responses

> 200 Response

```json
{
  "bundle_id": 1,
  "id": 1,
  "notify_on_registration": true,
  "notify_on_upload": true,
  "user_id": 1
}
```

<h3 id="show-bundle-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The BundleNotifications object.|[BundleNotificationEntity](#schemabundlenotificationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Bundle Notification

<a id="opIdDeleteBundleNotificationsId"></a>

> Code samples

```bash
curl https://example.com/bundle_notifications/0 \
  -X DELETE
```

`DELETE /bundle_notifications/{id}`

Delete Bundle Notification

<h3 id="delete-bundle-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle Notification ID.|

<h3 id="delete-bundle-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Bundle Notification

<a id="opIdPatchBundleNotificationsId"></a>

> Code samples

```bash
curl https://example.com/bundle_notifications/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'notify_on_registration=true' \
  -F 'notify_on_upload=true'
```

`PATCH /bundle_notifications/{id}`

Update Bundle Notification

> Body parameter

```yaml
notify_on_registration: true
notify_on_upload: true
```

<h3 id="update-bundle-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Bundle Notification ID.|
|body|body|object|false|none|
|» notify_on_registration|body|boolean|false|Triggers bundle notification when a registration action occurs for it.|
|» notify_on_upload|body|boolean|false|Triggers bundle notification when a upload action occurs for it.|

> Example responses

> 200 Response

```json
{
  "bundle_id": 1,
  "id": 1,
  "notify_on_registration": true,
  "notify_on_upload": true,
  "user_id": 1
}
```

<h3 id="update-bundle-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The BundleNotifications object.|[BundleNotificationEntity](#schemabundlenotificationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-bundlerecipients">bundle_recipients</h1>

Operations about bundle_recipients

## List Bundle Recipients

<a id="opIdGetBundleRecipients"></a>

> Code samples

```bash
curl 'https://example.com/bundle_recipients?bundle_id=0' \
  -H 'Accept: application/json'
```

`GET /bundle_recipients`

List Bundle Recipients

<h3 id="list-bundle-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[has_registrations]=desc`). Valid fields are `has_registrations`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `has_registrations`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `has_registrations`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `has_registrations`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `has_registrations`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `has_registrations`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `has_registrations`.|
|bundle_id|query|integer(int32)|true|List recipients for the bundle with this ID.|

> Example responses

> 200 Response

```json
[
  {
    "company": "Acme Inc.",
    "name": "John Doe",
    "note": "Some note.",
    "recipient": "john.doe@example.com",
    "sent_at": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-bundle-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of BundleRecipients objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-bundle-recipients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BundleRecipientEntity](#schemabundlerecipiententity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Bundle Recipient

<a id="opIdPostBundleRecipients"></a>

> Code samples

```bash
curl https://example.com/bundle_recipients \
  -X POST \
  -H 'Accept: application/json' \
  -F 'bundle_id=0' \
  -F 'company=Acme Ltd' \
  -F 'name=John Smith' \
  -F 'note=Just a note.' \
  -F 'recipient=johndoe@gmail.com' \
  -F 'share_after_create=true' \
  -F 'user_id=0'
```

`POST /bundle_recipients`

Create Bundle Recipient

> Body parameter

```yaml
bundle_id: 0
company: Acme Ltd
name: John Smith
note: Just a note.
recipient: johndoe@gmail.com
share_after_create: true
user_id: 0
```

<h3 id="create-bundle-recipient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» bundle_id|body|integer(int32)|true|Bundle to share.|
|» company|body|string|false|Company of recipient.|
|» name|body|string|false|Name of recipient.|
|» note|body|string|false|Note to include in email.|
|» recipient|body|string|true|Email addresses to share this bundle with.|
|» share_after_create|body|boolean|false|Set to true to share the link with the recipient upon creation.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "company": "Acme Inc.",
  "name": "John Doe",
  "note": "Some note.",
  "recipient": "john.doe@example.com",
  "sent_at": "2000-01-01T01:00:00Z"
}
```

<h3 id="create-bundle-recipient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The BundleRecipients object.|[BundleRecipientEntity](#schemabundlerecipiententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-bundleregistrations">bundle_registrations</h1>

Operations about bundle_registrations

## List Bundle Registrations

<a id="opIdGetBundleRegistrations"></a>

> Code samples

```bash
curl https://example.com/bundle_registrations \
  -H 'Accept: application/json'
```

`GET /bundle_registrations`

List Bundle Registrations

<h3 id="list-bundle-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|bundle_id|query|integer(int32)|false|ID of the associated Bundle|

> Example responses

> 200 Response

```json
[
  {
    "bundle_code": "example",
    "bundle_id": 1,
    "bundle_recipient_id": 1,
    "clickwrap_body": "example",
    "code": "abc123",
    "company": "Action Verb",
    "created_at": "2000-01-01T01:00:00Z",
    "email": "john.doe@files.com",
    "form_field_data": {
      "key": "example value"
    },
    "form_field_set_id": 1,
    "inbox_code": "abc123",
    "ip": "10.1.1.1",
    "name": "account"
  }
]
```

<h3 id="list-bundle-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of BundleRegistrations objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-bundle-registrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BundleRegistrationEntity](#schemabundleregistrationentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-clickwraps">clickwraps</h1>

Operations about clickwraps

## List Clickwraps

<a id="opIdGetClickwraps"></a>

> Code samples

```bash
curl https://example.com/clickwraps \
  -H 'Accept: application/json'
```

`GET /clickwraps`

List Clickwraps

<h3 id="list-clickwraps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "body": "[Legal body text]",
    "id": 1,
    "name": "Example Site NDA for Files.com Use",
    "use_with_bundles": "example",
    "use_with_inboxes": "example",
    "use_with_users": "example"
  }
]
```

<h3 id="list-clickwraps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Clickwraps objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-clickwraps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClickwrapEntity](#schemaclickwrapentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Clickwrap

<a id="opIdPostClickwraps"></a>

> Code samples

```bash
curl https://example.com/clickwraps \
  -X POST \
  -H 'Accept: application/json' \
  -F 'body=[Legal body text]' \
  -F 'name=Example Site NDA for Files.com Use' \
  -F 'use_with_bundles=example' \
  -F 'use_with_inboxes=example' \
  -F 'use_with_users=example'
```

`POST /clickwraps`

Create Clickwrap

> Body parameter

```yaml
body: "[Legal body text]"
name: Example Site NDA for Files.com Use
use_with_bundles: example
use_with_inboxes: example
use_with_users: example
```

<h3 id="create-clickwrap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|false|Body text of Clickwrap (supports Markdown formatting).|
|» name|body|string|false|Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)|
|» use_with_bundles|body|string|false|Use this Clickwrap for Bundles?|
|» use_with_inboxes|body|string|false|Use this Clickwrap for Inboxes?|
|» use_with_users|body|string|false|Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» use_with_bundles|none|
|» use_with_bundles|available|
|» use_with_bundles|require|
|» use_with_inboxes|none|
|» use_with_inboxes|available|
|» use_with_inboxes|require|
|» use_with_users|none|
|» use_with_users|require|

> Example responses

> 201 Response

```json
{
  "body": "[Legal body text]",
  "id": 1,
  "name": "Example Site NDA for Files.com Use",
  "use_with_bundles": "example",
  "use_with_inboxes": "example",
  "use_with_users": "example"
}
```

<h3 id="create-clickwrap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Clickwraps object.|[ClickwrapEntity](#schemaclickwrapentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Clickwrap

<a id="opIdGetClickwrapsId"></a>

> Code samples

```bash
curl https://example.com/clickwraps/0 \
  -H 'Accept: application/json'
```

`GET /clickwraps/{id}`

Show Clickwrap

<h3 id="show-clickwrap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Clickwrap ID.|

> Example responses

> 200 Response

```json
{
  "body": "[Legal body text]",
  "id": 1,
  "name": "Example Site NDA for Files.com Use",
  "use_with_bundles": "example",
  "use_with_inboxes": "example",
  "use_with_users": "example"
}
```

<h3 id="show-clickwrap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Clickwraps object.|[ClickwrapEntity](#schemaclickwrapentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Clickwrap

<a id="opIdDeleteClickwrapsId"></a>

> Code samples

```bash
curl https://example.com/clickwraps/0 \
  -X DELETE
```

`DELETE /clickwraps/{id}`

Delete Clickwrap

<h3 id="delete-clickwrap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Clickwrap ID.|

<h3 id="delete-clickwrap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Clickwrap

<a id="opIdPatchClickwrapsId"></a>

> Code samples

```bash
curl https://example.com/clickwraps/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'body=[Legal body text]' \
  -F 'name=Example Site NDA for Files.com Use' \
  -F 'use_with_bundles=example' \
  -F 'use_with_inboxes=example' \
  -F 'use_with_users=example'
```

`PATCH /clickwraps/{id}`

Update Clickwrap

> Body parameter

```yaml
body: "[Legal body text]"
name: Example Site NDA for Files.com Use
use_with_bundles: example
use_with_inboxes: example
use_with_users: example
```

<h3 id="update-clickwrap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Clickwrap ID.|
|body|body|object|false|none|
|» body|body|string|false|Body text of Clickwrap (supports Markdown formatting).|
|» name|body|string|false|Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)|
|» use_with_bundles|body|string|false|Use this Clickwrap for Bundles?|
|» use_with_inboxes|body|string|false|Use this Clickwrap for Inboxes?|
|» use_with_users|body|string|false|Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» use_with_bundles|none|
|» use_with_bundles|available|
|» use_with_bundles|require|
|» use_with_inboxes|none|
|» use_with_inboxes|available|
|» use_with_inboxes|require|
|» use_with_users|none|
|» use_with_users|require|

> Example responses

> 200 Response

```json
{
  "body": "[Legal body text]",
  "id": 1,
  "name": "Example Site NDA for Files.com Use",
  "use_with_bundles": "example",
  "use_with_inboxes": "example",
  "use_with_users": "example"
}
```

<h3 id="update-clickwrap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Clickwraps object.|[ClickwrapEntity](#schemaclickwrapentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-dnsrecords">dns_records</h1>

Operations about dns_records

## Show site DNS configuration.

<a id="opIdGetDnsRecords"></a>

> Code samples

```bash
curl https://example.com/dns_records \
  -H 'Accept: application/json'
```

`GET /dns_records`

Show site DNS configuration.

<h3 id="show-site-dns-configuration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "domain": "my-custom-domain.com",
    "id": "example",
    "rrtype": "CNAME",
    "value": "mysite.files.com"
  }
]
```

<h3 id="show-site-dns-configuration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of DnsRecords objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="show-site-dns-configuration-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DnsRecordEntity](#schemadnsrecordentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-externalevents">external_events</h1>

Operations about external_events

## List External Events

<a id="opIdGetExternalEvents"></a>

> Code samples

```bash
curl https://example.com/external_events \
  -H 'Accept: application/json'
```

`GET /external_events`

List External Events

<h3 id="list-external-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[remote_server_type]=desc`). Valid fields are `remote_server_type`, `site_id`, `folder_behavior_id`, `event_type`, `created_at` or `status`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`, `event_type`, `remote_server_type`, `status` or `folder_behavior_id`. Valid field combinations are `[ event_type, status, created_at ]`, `[ event_type, created_at ]` or `[ status, created_at ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `created_at`, `event_type`, `remote_server_type`, `status` or `folder_behavior_id`. Valid field combinations are `[ event_type, status, created_at ]`, `[ event_type, created_at ]` or `[ status, created_at ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `created_at`, `event_type`, `remote_server_type`, `status` or `folder_behavior_id`. Valid field combinations are `[ event_type, status, created_at ]`, `[ event_type, created_at ]` or `[ status, created_at ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`, `event_type`, `remote_server_type`, `status` or `folder_behavior_id`. Valid field combinations are `[ event_type, status, created_at ]`, `[ event_type, created_at ]` or `[ status, created_at ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `created_at`, `event_type`, `remote_server_type`, `status` or `folder_behavior_id`. Valid field combinations are `[ event_type, status, created_at ]`, `[ event_type, created_at ]` or `[ status, created_at ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `created_at`, `event_type`, `remote_server_type`, `status` or `folder_behavior_id`. Valid field combinations are `[ event_type, status, created_at ]`, `[ event_type, created_at ]` or `[ status, created_at ]`.|

> Example responses

> 200 Response

```json
[
  {
    "body": "example",
    "body_url": "example",
    "bytes_synced": 1,
    "created_at": "2000-01-01T01:00:00Z",
    "errored_files": 1,
    "event_type": "example",
    "folder_behavior_id": 1,
    "id": 1,
    "remote_server_type": "example",
    "status": "example",
    "successful_files": 1
  }
]
```

<h3 id="list-external-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of ExternalEvents objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-external-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExternalEventEntity](#schemaexternalevententity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create External Event

<a id="opIdPostExternalEvents"></a>

> Code samples

```bash
curl https://example.com/external_events \
  -X POST \
  -H 'Accept: application/json' \
  -F 'body=example' \
  -F 'status=example'
```

`POST /external_events`

Create External Event

> Body parameter

```yaml
body: example
status: example
```

<h3 id="create-external-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» body|body|string|true|Event body|
|» status|body|string|true|Status of event.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|success|
|» status|failure|
|» status|partial_failure|
|» status|in_progress|
|» status|skipped|

> Example responses

> 201 Response

```json
{
  "body": "example",
  "body_url": "example",
  "bytes_synced": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "errored_files": 1,
  "event_type": "example",
  "folder_behavior_id": 1,
  "id": 1,
  "remote_server_type": "example",
  "status": "example",
  "successful_files": 1
}
```

<h3 id="create-external-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The ExternalEvents object.|[ExternalEventEntity](#schemaexternalevententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show External Event

<a id="opIdGetExternalEventsId"></a>

> Code samples

```bash
curl https://example.com/external_events/0 \
  -H 'Accept: application/json'
```

`GET /external_events/{id}`

Show External Event

<h3 id="show-external-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|External Event ID.|

> Example responses

> 200 Response

```json
{
  "body": "example",
  "body_url": "example",
  "bytes_synced": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "errored_files": 1,
  "event_type": "example",
  "folder_behavior_id": 1,
  "id": 1,
  "remote_server_type": "example",
  "status": "example",
  "successful_files": 1
}
```

<h3 id="show-external-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The ExternalEvents object.|[ExternalEventEntity](#schemaexternalevententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-files">files</h1>

Operations about files

## Download file

<a id="opIdFileDownload"></a>

> Code samples

```bash
curl https://example.com/files/string \
  -H 'Accept: application/json'
```

`GET /files/{path}`

Download file

<h3 id="download-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|action|query|string|false|Can be blank, `redirect` or `stat`.  If set to `stat`, we will return file information but without a download URL, and without logging a download.  If set to `redirect` we will serve a 302 redirect directly to the file.  This is used for integrations with Zapier, and is not recommended for most integrations.|
|preview_size|query|string|false|Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.|
|with_previews|query|boolean|false|Include file preview information?|
|with_priority_color|query|boolean|false|Include file priority color information?|

> Example responses

> 200 Response

```json
{
  "crc32": "70976923",
  "created_at": "2000-01-01T01:00:00Z",
  "display_name": "file.txt",
  "download_uri": "https://mysite.files.com/...",
  "is_locked": true,
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "mtime": "2000-01-01T01:00:00Z",
  "path": "path/file.txt",
  "permissions": "rwd",
  "preview": {
    "download_uri": "https://mysite.files.com/...",
    "id": 1,
    "size": "large",
    "status": "complete",
    "type": "image"
  },
  "preview_id": 1,
  "priority_color": "red",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "region": "us-east-1",
  "size": 1024,
  "subfolders_locked?": true,
  "type": "file"
}
```

<h3 id="download-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Files object.|[FileEntity](#schemafileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upload file

<a id="opIdPostFilesPath"></a>

> Code samples

```bash
curl https://example.com/files/string \
  -X POST \
  -H 'Accept: application/json' \
  -F 'action=string' \
  -F 'etags[etag]=["string"]' \
  -F 'etags[part]=[0]' \
  -F 'length=0' \
  -F 'mkdir_parents=true' \
  -F 'part=0' \
  -F 'parts=0' \
  -F 'provided_mtime=1970-01-01T00:00:00Z' \
  -F 'ref=string' \
  -F 'restart=0' \
  -F 'size=0' \
  -F 'structure=string' \
  -F 'with_rename=true'
```

`POST /files/{path}`

Upload file

> Body parameter

```yaml
action: string
"etags[etag]":
  - string
"etags[part]":
  - 0
length: 0
mkdir_parents: true
part: 0
parts: 0
provided_mtime: "1970-01-01T00:00:00Z"
ref: string
restart: 0
size: 0
structure: string
with_rename: true
```

<h3 id="upload-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|body|body|object|false|none|
|» action|body|string|false|The action to perform.  Can be `append`, `attachment`, `end`, `upload`, `put`, or may not exist|
|» etags[etag]|body|[string]|true|etag identifier.|
|» etags[part]|body|[integer(int32)]|true|Part number.|
|» length|body|integer(int32)|false|Length of file.|
|» mkdir_parents|body|boolean|false|Create parent directories if they do not exist?|
|» part|body|integer(int32)|false|Part if uploading a part.|
|» parts|body|integer(int32)|false|How many parts to fetch?|
|» provided_mtime|body|string(date-time)|false|User provided modification time.|
|» ref|body|string|false|none|
|» restart|body|integer(int32)|false|File byte offset to restart from.|
|» size|body|integer(int32)|false|Size of file.|
|» structure|body|string|false|If copying folder, copy just the structure?|
|» with_rename|body|boolean|false|Allow file rename instead of overwrite?|

> Example responses

> 201 Response

```json
{
  "crc32": "70976923",
  "created_at": "2000-01-01T01:00:00Z",
  "display_name": "file.txt",
  "download_uri": "https://mysite.files.com/...",
  "is_locked": true,
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "mtime": "2000-01-01T01:00:00Z",
  "path": "path/file.txt",
  "permissions": "rwd",
  "preview": {
    "download_uri": "https://mysite.files.com/...",
    "id": 1,
    "size": "large",
    "status": "complete",
    "type": "image"
  },
  "preview_id": 1,
  "priority_color": "red",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "region": "us-east-1",
  "size": 1024,
  "subfolders_locked?": true,
  "type": "file"
}
```

<h3 id="upload-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Files object.|[FileEntity](#schemafileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete file/folder

<a id="opIdDeleteFilesPath"></a>

> Code samples

```bash
curl https://example.com/files/string \
  -X DELETE
```

`DELETE /files/{path}`

Delete file/folder

<h3 id="delete-filefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|recursive|query|boolean|false|If true, will recursively delete folers.  Otherwise, will error on non-empty folders.|

<h3 id="delete-filefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update file/folder metadata

<a id="opIdPatchFilesPath"></a>

> Code samples

```bash
curl https://example.com/files/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'priority_color=red' \
  -F 'provided_mtime=1970-01-01T00:00:00Z'
```

`PATCH /files/{path}`

Update file/folder metadata

> Body parameter

```yaml
priority_color: red
provided_mtime: "1970-01-01T00:00:00Z"
```

<h3 id="update-filefolder-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|body|body|object|false|none|
|» priority_color|body|string|false|Priority/Bookmark color of file.|
|» provided_mtime|body|string(date-time)|false|Modified time of file.|

> Example responses

> 200 Response

```json
{
  "crc32": "70976923",
  "created_at": "2000-01-01T01:00:00Z",
  "display_name": "file.txt",
  "download_uri": "https://mysite.files.com/...",
  "is_locked": true,
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "mtime": "2000-01-01T01:00:00Z",
  "path": "path/file.txt",
  "permissions": "rwd",
  "preview": {
    "download_uri": "https://mysite.files.com/...",
    "id": 1,
    "size": "large",
    "status": "complete",
    "type": "image"
  },
  "preview_id": 1,
  "priority_color": "red",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "region": "us-east-1",
  "size": 1024,
  "subfolders_locked?": true,
  "type": "file"
}
```

<h3 id="update-filefolder-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Files object.|[FileEntity](#schemafileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-fileactions">file_actions</h1>

Operations about file_actions

## Begin file upload

<a id="opIdFileActionBeginUpload"></a>

> Code samples

```bash
curl https://example.com/file_actions/begin_upload/string \
  -X POST \
  -H 'Accept: application/json' \
  -F 'mkdir_parents=true' \
  -F 'part=0' \
  -F 'parts=0' \
  -F 'ref=string' \
  -F 'restart=0' \
  -F 'size=0' \
  -F 'with_rename=true'
```

`POST /file_actions/begin_upload/{path}`

Begin file upload

> Body parameter

```yaml
mkdir_parents: true
part: 0
parts: 0
ref: string
restart: 0
size: 0
with_rename: true
```

<h3 id="begin-file-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|body|body|object|false|none|
|» mkdir_parents|body|boolean|false|Create parent directories if they do not exist?|
|» part|body|integer(int32)|false|Part if uploading a part.|
|» parts|body|integer(int32)|false|How many parts to fetch?|
|» ref|body|string|false|none|
|» restart|body|integer(int32)|false|File byte offset to restart from.|
|» size|body|integer(int32)|false|Total bytes of file being uploaded (include bytes being retained if appending/restarting).|
|» with_rename|body|boolean|false|Allow file rename instead of overwrite?|

> Example responses

> 200 Response

```json
[
  {
    "action": "multipart",
    "ask_about_overwrites": true,
    "available_parts": 1,
    "expires": "example",
    "headers": {
      "key": "example value"
    },
    "http_method": "PUT",
    "next_partsize": 1,
    "parallel_parts": true,
    "parameters": {
      "key": "example value"
    },
    "part_number": 1,
    "partsize": 1,
    "path": "path",
    "ref": "upload-1",
    "send": {
      "key": "example value"
    },
    "upload_uri": "example"
  }
]
```

<h3 id="begin-file-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The FileActions object.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="begin-file-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileUploadPartEntity](#schemafileuploadpartentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Copy file/folder

<a id="opIdFileActionCopy"></a>

> Code samples

```bash
curl https://example.com/file_actions/copy/string \
  -X POST \
  -H 'Accept: application/json' \
  -F 'destination=string' \
  -F 'structure=true'
```

`POST /file_actions/copy/{path}`

Copy file/folder

> Body parameter

```yaml
destination: string
structure: true
```

<h3 id="copy-filefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|body|body|object|true|none|
|» destination|body|string|true|Copy destination path.|
|» structure|body|boolean|false|Copy structure only?|

> Example responses

> 201 Response

```json
{
  "file_migration_id": 1,
  "status": "pending"
}
```

<h3 id="copy-filefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The FileActions object.|[FileActionEntity](#schemafileactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Find file/folder by path

<a id="opIdFileActionFind"></a>

> Code samples

```bash
curl https://example.com/file_actions/metadata/string \
  -H 'Accept: application/json'
```

`GET /file_actions/metadata/{path}`

Find file/folder by path

<h3 id="find-filefolder-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|preview_size|query|string|false|Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.|
|with_previews|query|boolean|false|Include file preview information?|
|with_priority_color|query|boolean|false|Include file priority color information?|

> Example responses

> 200 Response

```json
{
  "crc32": "70976923",
  "created_at": "2000-01-01T01:00:00Z",
  "display_name": "file.txt",
  "download_uri": "https://mysite.files.com/...",
  "is_locked": true,
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "mtime": "2000-01-01T01:00:00Z",
  "path": "path/file.txt",
  "permissions": "rwd",
  "preview": {
    "download_uri": "https://mysite.files.com/...",
    "id": 1,
    "size": "large",
    "status": "complete",
    "type": "image"
  },
  "preview_id": 1,
  "priority_color": "red",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "region": "us-east-1",
  "size": 1024,
  "subfolders_locked?": true,
  "type": "file"
}
```

<h3 id="find-filefolder-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The FileActions object.|[FileEntity](#schemafileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Move file/folder

<a id="opIdFileActionMove"></a>

> Code samples

```bash
curl https://example.com/file_actions/move/string \
  -X POST \
  -H 'Accept: application/json' \
  -F 'destination=string'
```

`POST /file_actions/move/{path}`

Move file/folder

> Body parameter

```yaml
destination: string
```

<h3 id="move-filefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|body|body|object|true|none|
|» destination|body|string|true|Move destination path.|

> Example responses

> 201 Response

```json
{
  "file_migration_id": 1,
  "status": "pending"
}
```

<h3 id="move-filefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The FileActions object.|[FileActionEntity](#schemafileactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-filecomments">file_comments</h1>

Operations about file_comments

## Create File Comment

<a id="opIdPostFileComments"></a>

> Code samples

```bash
curl https://example.com/file_comments \
  -X POST \
  -H 'Accept: application/json' \
  -F 'body=string' \
  -F 'path=string'
```

`POST /file_comments`

Create File Comment

> Body parameter

```yaml
body: string
path: string
```

<h3 id="create-file-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» body|body|string|true|Comment body.|
|» path|body|string|true|File path.|

> Example responses

> 201 Response

```json
{
  "body": "What a great file!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

<h3 id="create-file-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The FileComments object.|[FileCommentEntity](#schemafilecommententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List File Comments by path

<a id="opIdFileCommentListForPath"></a>

> Code samples

```bash
curl https://example.com/file_comments/files/string \
  -H 'Accept: application/json'
```

`GET /file_comments/files/{path}`

List File Comments by path

<h3 id="list-file-comments-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|path|path|string|true|Path to operate on.|

> Example responses

> 200 Response

```json
[
  {
    "body": "What a great file!",
    "id": 1,
    "reactions": [
      null
    ]
  }
]
```

<h3 id="list-file-comments-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of FileComments objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-file-comments-by-path-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileCommentEntity](#schemafilecommententity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete File Comment

<a id="opIdDeleteFileCommentsId"></a>

> Code samples

```bash
curl https://example.com/file_comments/0 \
  -X DELETE
```

`DELETE /file_comments/{id}`

Delete File Comment

<h3 id="delete-file-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|File Comment ID.|

<h3 id="delete-file-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update File Comment

<a id="opIdPatchFileCommentsId"></a>

> Code samples

```bash
curl https://example.com/file_comments/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'body=string'
```

`PATCH /file_comments/{id}`

Update File Comment

> Body parameter

```yaml
body: string
```

<h3 id="update-file-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|File Comment ID.|
|body|body|object|true|none|
|» body|body|string|true|Comment body.|

> Example responses

> 200 Response

```json
{
  "body": "What a great file!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

<h3 id="update-file-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The FileComments object.|[FileCommentEntity](#schemafilecommententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-filecommentreactions">file_comment_reactions</h1>

Operations about file_comment_reactions

## Create File Comment Reaction

<a id="opIdPostFileCommentReactions"></a>

> Code samples

```bash
curl https://example.com/file_comment_reactions \
  -X POST \
  -H 'Accept: application/json' \
  -F 'emoji=string' \
  -F 'file_comment_id=0' \
  -F 'user_id=0'
```

`POST /file_comment_reactions`

Create File Comment Reaction

> Body parameter

```yaml
emoji: string
file_comment_id: 0
user_id: 0
```

<h3 id="create-file-comment-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» emoji|body|string|true|Emoji to react with.|
|» file_comment_id|body|integer(int32)|true|ID of file comment to attach reaction to.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "emoji": "👍",
  "id": 1
}
```

<h3 id="create-file-comment-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The FileCommentReactions object.|[FileCommentReactionEntity](#schemafilecommentreactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete File Comment Reaction

<a id="opIdDeleteFileCommentReactionsId"></a>

> Code samples

```bash
curl https://example.com/file_comment_reactions/0 \
  -X DELETE
```

`DELETE /file_comment_reactions/{id}`

Delete File Comment Reaction

<h3 id="delete-file-comment-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|File Comment Reaction ID.|

<h3 id="delete-file-comment-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-filemigrations">file_migrations</h1>

Operations about file_migrations

## Show File Migration

<a id="opIdGetFileMigrationsId"></a>

> Code samples

```bash
curl https://example.com/file_migrations/0 \
  -H 'Accept: application/json'
```

`GET /file_migrations/{id}`

Show File Migration

<h3 id="show-file-migration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|File Migration ID.|

> Example responses

> 200 Response

```json
{
  "dest_path": "MyFolder",
  "files_moved": 1,
  "files_total": 1,
  "id": 1,
  "log_url": "https://www.example.com/log_file",
  "operation": "move",
  "path": "MyFolder",
  "region": "USA",
  "status": "complete"
}
```

<h3 id="show-file-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The FileMigrations object.|[FileMigrationEntity](#schemafilemigrationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-folders">folders</h1>

Operations about folders

## List Folders by path

<a id="opIdFolderListForPath"></a>

> Code samples

```bash
curl https://example.com/folders/string \
  -H 'Accept: application/json'
```

`GET /folders/{path}`

List Folders by path

<h3 id="list-folders-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Send cursor to resume an existing list from the point at which you left off.  Get a cursor from an existing list via the X-Files-Cursor-Next header or the X-Files-Cursor-Prev header.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|path|path|string|true|Path to operate on.|
|filter|query|string|false|If specified, will filter folders/files list by this string.  Wildcards of `*` and `?` are acceptable here.|
|preview_size|query|string|false|Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.|
|search|query|string|false|If `search_all` is `true`, provide the search string here.  Otherwise, this parameter acts like an alias of `filter`.|
|search_all|query|boolean|false|Search entire site?  If set, we will ignore the folder path provided and search the entire site.  This is the same API used by the search bar in the UI.  Search results are a best effort, not real time, and not guaranteed to match every file.  This field should only be used for ad-hoc (human) searching, and not as part of an automated process.|
|with_previews|query|boolean|false|Include file previews?|
|with_priority_color|query|boolean|false|Include file priority color information?|

> Example responses

> 200 Response

```json
[
  {
    "crc32": "70976923",
    "created_at": "2000-01-01T01:00:00Z",
    "display_name": "file.txt",
    "download_uri": "https://mysite.files.com/...",
    "is_locked": true,
    "md5": "17c54824e9931a4688ca032d03f6663c",
    "mime_type": "application/octet-stream",
    "mtime": "2000-01-01T01:00:00Z",
    "path": "path/file.txt",
    "permissions": "rwd",
    "preview": {
      "download_uri": "https://mysite.files.com/...",
      "id": 1,
      "size": "large",
      "status": "complete",
      "type": "image"
    },
    "preview_id": 1,
    "priority_color": "red",
    "provided_mtime": "2000-01-01T01:00:00Z",
    "region": "us-east-1",
    "size": 1024,
    "subfolders_locked?": true,
    "type": "file"
  }
]
```

<h3 id="list-folders-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Folders objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-folders-by-path-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileEntity](#schemafileentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create folder

<a id="opIdPostFoldersPath"></a>

> Code samples

```bash
curl https://example.com/folders/string \
  -X POST \
  -H 'Accept: application/json' \
  -F 'mkdir_parents=true' \
  -F 'provided_mtime=1970-01-01T00:00:00Z'
```

`POST /folders/{path}`

Create folder

> Body parameter

```yaml
mkdir_parents: true
provided_mtime: "1970-01-01T00:00:00Z"
```

<h3 id="create-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path to operate on.|
|body|body|object|false|none|
|» mkdir_parents|body|boolean|false|Create parent directories if they do not exist?|
|» provided_mtime|body|string(date-time)|false|User provided modification time.|

> Example responses

> 201 Response

```json
{
  "crc32": "70976923",
  "created_at": "2000-01-01T01:00:00Z",
  "display_name": "file.txt",
  "download_uri": "https://mysite.files.com/...",
  "is_locked": true,
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "mtime": "2000-01-01T01:00:00Z",
  "path": "path/file.txt",
  "permissions": "rwd",
  "preview": {
    "download_uri": "https://mysite.files.com/...",
    "id": 1,
    "size": "large",
    "status": "complete",
    "type": "image"
  },
  "preview_id": 1,
  "priority_color": "red",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "region": "us-east-1",
  "size": 1024,
  "subfolders_locked?": true,
  "type": "file"
}
```

<h3 id="create-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Folders object.|[FileEntity](#schemafileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-formfieldsets">form_field_sets</h1>

Operations about form_field_sets

## List Form Field Sets

<a id="opIdGetFormFieldSets"></a>

> Code samples

```bash
curl https://example.com/form_field_sets \
  -H 'Accept: application/json'
```

`GET /form_field_sets`

List Form Field Sets

<h3 id="list-form-field-sets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "form_fields": [
      null
    ],
    "form_layout": [
      1,
      2,
      3,
      4
    ],
    "id": 1,
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "Sample Form Title"
  }
]
```

<h3 id="list-form-field-sets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of FormFieldSets objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-form-field-sets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FormFieldSetEntity](#schemaformfieldsetentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Form Field Set

<a id="opIdPostFormFieldSets"></a>

> Code samples

```bash
curl https://example.com/form_field_sets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "form_fields": [
      {
        "default_option": "string",
        "field_type": "string",
        "help_text": "string",
        "id": 0,
        "label": "string",
        "options_for_select": "string",
        "required": true
      }
    ],
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "string",
    "user_id": 0
  }'
```

`POST /form_field_sets`

Create Form Field Set

> Body parameter

```json
{
  "form_fields": [
    {
      "default_option": "string",
      "field_type": "string",
      "help_text": "string",
      "id": 0,
      "label": "string",
      "options_for_select": "string",
      "required": true
    }
  ],
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "string",
  "user_id": 0
}
```

<h3 id="create-form-field-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[postFormFieldSets](#schemapostformfieldsets)|true|none|
|» form_fields|body|[object]|false|none|
|» » default_option|body|string|false|Default option to be preselected in the dropdown or radio.|
|» » field_type|body|string|false|Type of field: text, text_area, dropdown, or radio|
|» » help_text|body|string|false|Help text of field|
|» » id|body|integer(int32)|false|Id of existing Form Field|
|» » label|body|string|false|Label of Field|
|» » options_for_select|body|string|false|List of options for dropdown or radio|
|» » required|body|boolean|false|Is this a required field? (default true)|
|» skip_company|body|boolean|false|Skip validating company|
|» skip_email|body|boolean|false|Skip validating form email|
|» skip_name|body|boolean|false|Skip validating form name|
|» title|body|string|false|Title to be displayed|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "form_fields": [
    null
  ],
  "form_layout": [
    1,
    2,
    3,
    4
  ],
  "id": 1,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "Sample Form Title"
}
```

<h3 id="create-form-field-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The FormFieldSets object.|[FormFieldSetEntity](#schemaformfieldsetentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Form Field Set

<a id="opIdGetFormFieldSetsId"></a>

> Code samples

```bash
curl https://example.com/form_field_sets/0 \
  -H 'Accept: application/json'
```

`GET /form_field_sets/{id}`

Show Form Field Set

<h3 id="show-form-field-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Form Field Set ID.|

> Example responses

> 200 Response

```json
{
  "form_fields": [
    null
  ],
  "form_layout": [
    1,
    2,
    3,
    4
  ],
  "id": 1,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "Sample Form Title"
}
```

<h3 id="show-form-field-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The FormFieldSets object.|[FormFieldSetEntity](#schemaformfieldsetentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Form Field Set

<a id="opIdDeleteFormFieldSetsId"></a>

> Code samples

```bash
curl https://example.com/form_field_sets/0 \
  -X DELETE
```

`DELETE /form_field_sets/{id}`

Delete Form Field Set

<h3 id="delete-form-field-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Form Field Set ID.|

<h3 id="delete-form-field-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Form Field Set

<a id="opIdPatchFormFieldSetsId"></a>

> Code samples

```bash
curl https://example.com/form_field_sets/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "form_fields": [
      {
        "default_option": "string",
        "field_type": "string",
        "help_text": "string",
        "id": 0,
        "label": "string",
        "options_for_select": "string",
        "required": true
      }
    ],
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "string"
  }'
```

`PATCH /form_field_sets/{id}`

Update Form Field Set

> Body parameter

```json
{
  "form_fields": [
    {
      "default_option": "string",
      "field_type": "string",
      "help_text": "string",
      "id": 0,
      "label": "string",
      "options_for_select": "string",
      "required": true
    }
  ],
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "string"
}
```

<h3 id="update-form-field-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Form Field Set ID.|
|body|body|[patchFormFieldSets](#schemapatchformfieldsets)|true|none|
|» form_fields|body|[object]|false|none|
|» » default_option|body|string|false|Default option to be preselected in the dropdown or radio.|
|» » field_type|body|string|false|Type of field: text, text_area, dropdown, or radio|
|» » help_text|body|string|false|Help text of field|
|» » id|body|integer(int32)|false|Id of existing Form Field|
|» » label|body|string|false|Label of Field|
|» » options_for_select|body|string|false|List of options for dropdown or radio|
|» » required|body|boolean|false|Is this a required field? (default true)|
|» skip_company|body|boolean|false|Skip validating company|
|» skip_email|body|boolean|false|Skip validating form email|
|» skip_name|body|boolean|false|Skip validating form name|
|» title|body|string|false|Title to be displayed|

> Example responses

> 200 Response

```json
{
  "form_fields": [
    null
  ],
  "form_layout": [
    1,
    2,
    3,
    4
  ],
  "id": 1,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "Sample Form Title"
}
```

<h3 id="update-form-field-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The FormFieldSets object.|[FormFieldSetEntity](#schemaformfieldsetentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-groups">groups</h1>

Operations about groups

## List Groups

<a id="opIdGetGroups"></a>

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json'
```

`GET /groups`

List Groups

<h3 id="list-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[name]=desc`). Valid fields are `name`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `name`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `name`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `name`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `name`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `name`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `name`.|
|ids|query|string|false|Comma-separated list of group ids to include in results.|

> Example responses

> 200 Response

```json
[
  {
    "admin_ids": "1",
    "id": 1,
    "name": "owners",
    "notes": "example",
    "user_ids": "1",
    "usernames": "example"
  }
]
```

<h3 id="list-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Groups objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupEntity](#schemagroupentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Group

<a id="opIdPostGroups"></a>

> Code samples

```bash
curl https://example.com/groups \
  -X POST \
  -H 'Accept: application/json' \
  -F 'admin_ids=string' \
  -F 'name=string' \
  -F 'notes=string' \
  -F 'user_ids=string'
```

`POST /groups`

Create Group

> Body parameter

```yaml
admin_ids: string
name: string
notes: string
user_ids: string
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» admin_ids|body|string|false|A list of group admin user ids. If sent as a string, should be comma-delimited.|
|» name|body|string|false|Group name.|
|» notes|body|string|false|Group notes.|
|» user_ids|body|string|false|A list of user ids. If sent as a string, should be comma-delimited.|

> Example responses

> 201 Response

```json
{
  "admin_ids": "1",
  "id": 1,
  "name": "owners",
  "notes": "example",
  "user_ids": "1",
  "usernames": "example"
}
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Groups object.|[GroupEntity](#schemagroupentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Group User

<a id="opIdDeleteGroupsGroupIdMembershipsUserId"></a>

> Code samples

```bash
curl https://example.com/groups/0/memberships/0 \
  -X DELETE
```

`DELETE /groups/{group_id}/memberships/{user_id}`

Delete Group User

<h3 id="delete-group-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|integer(int32)|true|Group ID from which to remove user.|
|user_id|path|integer(int32)|true|User ID to remove from group.|

<h3 id="delete-group-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Group User

<a id="opIdPatchGroupsGroupIdMembershipsUserId"></a>

> Code samples

```bash
curl https://example.com/groups/0/memberships/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'admin=true'
```

`PATCH /groups/{group_id}/memberships/{user_id}`

Update Group User

> Body parameter

```yaml
admin: true
```

<h3 id="update-group-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|integer(int32)|true|Group ID to add user to.|
|user_id|path|integer(int32)|true|User ID to add to group.|
|body|body|object|false|none|
|» admin|body|boolean|false|Is the user a group administrator?|

> Example responses

> 200 Response

```json
{
  "admin": true,
  "group_id": 1,
  "group_name": "example",
  "user_id": 1,
  "usernames": [
    "user"
  ]
}
```

<h3 id="update-group-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The GroupUsers object.|[GroupUserEntity](#schemagroupuserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Permissions

<a id="opIdGetGroupsGroupIdPermissions"></a>

> Code samples

```bash
curl https://example.com/groups/string/permissions \
  -H 'Accept: application/json'
```

`GET /groups/{group_id}/permissions`

List Permissions

<h3 id="list-permissions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[group_id]=desc`). Valid fields are `group_id`, `path`, `user_id` or `permission`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|path|query|string|false|DEPRECATED: Permission path.  If provided, will scope permissions to this path. Use `filter[path]` instead.|
|group_id|path|string|true|DEPRECATED: Group ID.  If provided, will scope permissions to this group. Use `filter[group_id]` instead.`|
|user_id|query|string|false|DEPRECATED: User ID.  If provided, will scope permissions to this user. Use `filter[user_id]` instead.`|
|include_groups|query|boolean|false|If searching by user or group, also include user's permissions that are inherited from its groups?|

> Example responses

> 200 Response

```json
[
  {
    "group_id": 0,
    "group_name": "example",
    "id": 1,
    "path": "example",
    "permission": "full",
    "recursive": true,
    "user_id": 1,
    "username": "Sser"
  }
]
```

<h3 id="list-permissions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Permissions objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-permissions-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PermissionEntity](#schemapermissionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List Group Users

<a id="opIdGetGroupsGroupIdUsers"></a>

> Code samples

```bash
curl https://example.com/groups/0/users \
  -H 'Accept: application/json'
```

`GET /groups/{group_id}/users`

List Group Users

<h3 id="list-group-users-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  If provided, will return group_users of this user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|group_id|path|integer(int32)|true|Group ID.  If provided, will return group_users of this group.|

> Example responses

> 200 Response

```json
[
  {
    "admin": true,
    "group_id": 1,
    "group_name": "example",
    "user_id": 1,
    "usernames": [
      "user"
    ]
  }
]
```

<h3 id="list-group-users-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of GroupUsers objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-group-users-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupUserEntity](#schemagroupuserentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create User

<a id="opIdPostGroupsGroupIdUsers"></a>

> Code samples

```bash
curl https://example.com/groups/0/users \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allowed_ips=127.0.0.1' \
  -F 'announcements_read=true' \
  -F 'attachments_permission=true' \
  -F 'authenticate_until=2000-01-01T01:00:00Z' \
  -F 'authentication_method=password' \
  -F 'avatar_delete=true' \
  -F 'avatar_file=@/path/to/file' \
  -F 'billing_permission=true' \
  -F 'bypass_inactive_disable=true' \
  -F 'bypass_site_allowed_ips=true' \
  -F 'change_password=string' \
  -F 'change_password_confirmation=string' \
  -F 'company=ACME Corp.' \
  -F 'dav_permission=true' \
  -F 'disabled=true' \
  -F 'email=string' \
  -F 'ftp_permission=true' \
  -F 'grant_permission=string' \
  -F 'group_ids=string' \
  -F 'header_text=User-specific message.' \
  -F 'imported_password_hash=string' \
  -F 'language=en' \
  -F 'name=John Doe' \
  -F 'notes=Internal notes on this user.' \
  -F 'notification_daily_send_time=18' \
  -F 'office_integration_enabled=true' \
  -F 'password=string' \
  -F 'password_confirmation=string' \
  -F 'password_validity_days=1' \
  -F 'receive_admin_alerts=true' \
  -F 'require_2fa=always_require' \
  -F 'require_password_change=true' \
  -F 'restapi_permission=true' \
  -F 'self_managed=true' \
  -F 'sftp_permission=true' \
  -F 'site_admin=true' \
  -F 'skip_welcome_screen=true' \
  -F 'ssl_required=always_require' \
  -F 'sso_strategy_id=1' \
  -F 'subscribe_to_newsletter=true' \
  -F 'time_zone=Pacific Time (US & Canada)' \
  -F 'user_root=example' \
  -F 'username=user'
```

`POST /groups/{group_id}/users`

Create User

> Body parameter

```yaml
allowed_ips: "127.0.0.1"
announcements_read: true
attachments_permission: true
authenticate_until: "2000-01-01T01:00:00Z"
authentication_method: password
avatar_delete: true
avatar_file: string
billing_permission: true
bypass_inactive_disable: true
bypass_site_allowed_ips: true
change_password: string
change_password_confirmation: string
company: ACME Corp.
dav_permission: true
disabled: true
email: string
ftp_permission: true
grant_permission: string
group_ids: string
header_text: User-specific message.
imported_password_hash: string
language: en
name: John Doe
notes: Internal notes on this user.
notification_daily_send_time: 18
office_integration_enabled: true
password: string
password_confirmation: string
password_validity_days: 1
receive_admin_alerts: true
require_2fa: always_require
require_password_change: true
restapi_permission: true
self_managed: true
sftp_permission: true
site_admin: true
skip_welcome_screen: true
ssl_required: always_require
sso_strategy_id: 1
subscribe_to_newsletter: true
time_zone: "Pacific Time (US & Canada)"
user_root: example
username: user
```

<h3 id="create-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|integer(int32)|true|Group ID to associate this user with.|
|body|body|object|false|none|
|» allowed_ips|body|string|false|A list of allowed IPs if applicable.  Newline delimited|
|» announcements_read|body|boolean|false|Signifies that the user has read all the announcements in the UI.|
|» attachments_permission|body|boolean|false|DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.|
|» authenticate_until|body|string(date-time)|false|Scheduled Date/Time at which user will be deactivated|
|» authentication_method|body|string|false|How is this user authenticated?|
|» avatar_delete|body|boolean|false|If true, the avatar will be deleted.|
|» avatar_file|body|string(binary)|false|An image file for your user avatar.|
|» billing_permission|body|boolean|false|Allow this user to perform operations on the account, payments, and invoices?|
|» bypass_inactive_disable|body|boolean|false|Exempt this user from being disabled based on inactivity?|
|» bypass_site_allowed_ips|body|boolean|false|Allow this user to skip site-wide IP blacklists?|
|» change_password|body|string|false|Used for changing a password on an existing user.|
|» change_password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `change_password`.|
|» company|body|string|false|User's company|
|» dav_permission|body|boolean|false|Can the user connect with WebDAV?|
|» disabled|body|boolean|false|Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.|
|» email|body|string|false|User's email.|
|» ftp_permission|body|boolean|false|Can the user access with FTP/FTPS?|
|» grant_permission|body|string|false|Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, or `history`.|
|» group_ids|body|string|false|A list of group ids to associate this user with.  Comma delimited.|
|» header_text|body|string|false|Text to display to the user in the header of the UI|
|» imported_password_hash|body|string|false|Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.|
|» language|body|string|false|Preferred language|
|» name|body|string|false|User's full name|
|» notes|body|string|false|Any internal notes on the user|
|» notification_daily_send_time|body|integer(int32)|false|Hour of the day at which daily notifications should be sent. Can be in range 0 to 23|
|» office_integration_enabled|body|boolean|false|Enable integration with Office for the web?|
|» password|body|string|false|User password.|
|» password_confirmation|body|string|false|Optional, but if provided, we will ensure that it matches the value sent in `password`.|
|» password_validity_days|body|integer(int32)|false|Number of days to allow user to use the same password|
|» receive_admin_alerts|body|boolean|false|Should the user receive admin alerts such a certificate expiration notifications and overages?|
|» require_2fa|body|string|false|2FA required setting|
|» require_password_change|body|boolean|false|Is a password change required upon next user login?|
|» restapi_permission|body|boolean|false|Can this user access the REST API?|
|» self_managed|body|boolean|false|Does this user manage it's own credentials or is it a shared/bot user?|
|» sftp_permission|body|boolean|false|Can the user access with SFTP?|
|» site_admin|body|boolean|false|Is the user an administrator for this site?|
|» skip_welcome_screen|body|boolean|false|Skip Welcome page in the UI?|
|» ssl_required|body|string|false|SSL required setting|
|» sso_strategy_id|body|integer(int32)|false|SSO (Single Sign On) strategy ID for the user, if applicable.|
|» subscribe_to_newsletter|body|boolean|false|Is the user subscribed to the newsletter?|
|» time_zone|body|string|false|User time zone|
|» user_root|body|string|false|Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.|
|» username|body|string|false|User's username|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authentication_method|password|
|» authentication_method|unused_former_ldap|
|» authentication_method|sso|
|» authentication_method|none|
|» authentication_method|email_signup|
|» authentication_method|password_with_imported_hash|
|» require_2fa|use_system_setting|
|» require_2fa|always_require|
|» require_2fa|never_require|
|» ssl_required|use_system_setting|
|» ssl_required|always_require|
|» ssl_required|never_require|

> Example responses

> 201 Response

```json
{
  "active_2fa": true,
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "api_keys_count": 1,
  "attachments_permission": true,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_inactive_disable": true,
  "bypass_site_allowed_ips": true,
  "company": "ACME Corp.",
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "days_remaining_until_password_expire": 1,
  "disabled": true,
  "email": "example",
  "externally_managed": true,
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "id": 1,
  "language": "en",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_expire_at": "2000-01-01T01:00:00Z",
  "password_expired": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_password_change": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "username": "user"
}
```

<h3 id="create-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Users object.|[UserEntity](#schemauserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Group

<a id="opIdGetGroupsId"></a>

> Code samples

```bash
curl https://example.com/groups/0 \
  -H 'Accept: application/json'
```

`GET /groups/{id}`

Show Group

<h3 id="show-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Group ID.|

> Example responses

> 200 Response

```json
{
  "admin_ids": "1",
  "id": 1,
  "name": "owners",
  "notes": "example",
  "user_ids": "1",
  "usernames": "example"
}
```

<h3 id="show-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Groups object.|[GroupEntity](#schemagroupentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Group

<a id="opIdDeleteGroupsId"></a>

> Code samples

```bash
curl https://example.com/groups/0 \
  -X DELETE
```

`DELETE /groups/{id}`

Delete Group

<h3 id="delete-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Group ID.|

<h3 id="delete-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Group

<a id="opIdPatchGroupsId"></a>

> Code samples

```bash
curl https://example.com/groups/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'admin_ids=string' \
  -F 'name=string' \
  -F 'notes=string' \
  -F 'user_ids=string'
```

`PATCH /groups/{id}`

Update Group

> Body parameter

```yaml
admin_ids: string
name: string
notes: string
user_ids: string
```

<h3 id="update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Group ID.|
|body|body|object|false|none|
|» admin_ids|body|string|false|A list of group admin user ids. If sent as a string, should be comma-delimited.|
|» name|body|string|false|Group name.|
|» notes|body|string|false|Group notes.|
|» user_ids|body|string|false|A list of user ids. If sent as a string, should be comma-delimited.|

> Example responses

> 200 Response

```json
{
  "admin_ids": "1",
  "id": 1,
  "name": "owners",
  "notes": "example",
  "user_ids": "1",
  "usernames": "example"
}
```

<h3 id="update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Groups object.|[GroupEntity](#schemagroupentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-groupusers">group_users</h1>

Operations about group_users

## List Group Users

<a id="opIdGetGroupUsers"></a>

> Code samples

```bash
curl https://example.com/group_users \
  -H 'Accept: application/json'
```

`GET /group_users`

List Group Users

<h3 id="list-group-users-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  If provided, will return group_users of this user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|group_id|query|integer(int32)|false|Group ID.  If provided, will return group_users of this group.|

> Example responses

> 200 Response

```json
[
  {
    "admin": true,
    "group_id": 1,
    "group_name": "example",
    "user_id": 1,
    "usernames": [
      "user"
    ]
  }
]
```

<h3 id="list-group-users-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of GroupUsers objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-group-users-3-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupUserEntity](#schemagroupuserentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Group User

<a id="opIdPostGroupUsers"></a>

> Code samples

```bash
curl https://example.com/group_users \
  -X POST \
  -H 'Accept: application/json' \
  -F 'admin=true' \
  -F 'group_id=0' \
  -F 'user_id=0'
```

`POST /group_users`

Create Group User

> Body parameter

```yaml
admin: true
group_id: 0
user_id: 0
```

<h3 id="create-group-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» admin|body|boolean|false|Is the user a group administrator?|
|» group_id|body|integer(int32)|true|Group ID to add user to.|
|» user_id|body|integer(int32)|true|User ID to add to group.|

> Example responses

> 201 Response

```json
{
  "admin": true,
  "group_id": 1,
  "group_name": "example",
  "user_id": 1,
  "usernames": [
    "user"
  ]
}
```

<h3 id="create-group-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The GroupUsers object.|[GroupUserEntity](#schemagroupuserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Group User

<a id="opIdDeleteGroupUsersId"></a>

> Code samples

```bash
curl 'https://example.com/group_users/0?group_id=0&user_id=0' \
  -X DELETE
```

`DELETE /group_users/{id}`

Delete Group User

<h3 id="delete-group-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Group User ID.|
|group_id|query|integer(int32)|true|Group ID from which to remove user.|
|user_id|query|integer(int32)|true|User ID to remove from group.|

<h3 id="delete-group-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Group User

<a id="opIdPatchGroupUsersId"></a>

> Code samples

```bash
curl https://example.com/group_users/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'admin=true' \
  -F 'group_id=0' \
  -F 'user_id=0'
```

`PATCH /group_users/{id}`

Update Group User

> Body parameter

```yaml
admin: true
group_id: 0
user_id: 0
```

<h3 id="update-group-user-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Group User ID.|
|body|body|object|true|none|
|» admin|body|boolean|false|Is the user a group administrator?|
|» group_id|body|integer(int32)|true|Group ID to add user to.|
|» user_id|body|integer(int32)|true|User ID to add to group.|

> Example responses

> 200 Response

```json
{
  "admin": true,
  "group_id": 1,
  "group_name": "example",
  "user_id": 1,
  "usernames": [
    "user"
  ]
}
```

<h3 id="update-group-user-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The GroupUsers object.|[GroupUserEntity](#schemagroupuserentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-history">history</h1>

Operations about histories

## List site full action history.

<a id="opIdHistoryList"></a>

> Code samples

```bash
curl https://example.com/history \
  -H 'Accept: application/json'
```

`GET /history`

List site full action history.

<h3 id="list-site-full-action-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_at|query|string(date-time)|false|Leave blank or set to a date/time to filter earlier entries.|
|end_at|query|string(date-time)|false|Leave blank or set to a date/time to filter later entries.|
|display|query|string|false|Display format. Leave blank or set to `full` or `parent`.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[path]=desc`). Valid fields are `path`, `folder`, `user_id` or `created_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `user_id`, `folder` or `path`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `user_id`, `folder` or `path`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `user_id`, `folder` or `path`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `user_id`, `folder` or `path`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `user_id`, `folder` or `path`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `user_id`, `folder` or `path`.|

> Example responses

> 200 Response

```json
[
  {
    "action": "create",
    "destination": "/to_path",
    "display": "Actual text of the action here.",
    "failure_type": "none",
    "id": 1,
    "interface": "web",
    "ip": "192.283.128.182",
    "path": "path",
    "source": "/from_path",
    "targets": [],
    "user_id": 1,
    "username": "user",
    "when": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-site-full-action-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of History objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-site-full-action-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionEntity](#schemaactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List history for specific file.

<a id="opIdHistoryListForFile"></a>

> Code samples

```bash
curl https://example.com/history/files/string \
  -H 'Accept: application/json'
```

`GET /history/files/{path}`

List history for specific file.

<h3 id="list-history-for-specific-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_at|query|string(date-time)|false|Leave blank or set to a date/time to filter earlier entries.|
|end_at|query|string(date-time)|false|Leave blank or set to a date/time to filter later entries.|
|display|query|string|false|Display format. Leave blank or set to `full` or `parent`.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[user_id]=desc`). Valid fields are `user_id` and `created_at`.|
|path|path|string|true|Path to operate on.|

> Example responses

> 200 Response

```json
[
  {
    "action": "create",
    "destination": "/to_path",
    "display": "Actual text of the action here.",
    "failure_type": "none",
    "id": 1,
    "interface": "web",
    "ip": "192.283.128.182",
    "path": "path",
    "source": "/from_path",
    "targets": [],
    "user_id": 1,
    "username": "user",
    "when": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-history-for-specific-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of History objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-history-for-specific-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionEntity](#schemaactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List history for specific folder.

<a id="opIdHistoryListForFolder"></a>

> Code samples

```bash
curl https://example.com/history/folders/string \
  -H 'Accept: application/json'
```

`GET /history/folders/{path}`

List history for specific folder.

<h3 id="list-history-for-specific-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_at|query|string(date-time)|false|Leave blank or set to a date/time to filter earlier entries.|
|end_at|query|string(date-time)|false|Leave blank or set to a date/time to filter later entries.|
|display|query|string|false|Display format. Leave blank or set to `full` or `parent`.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[user_id]=desc`). Valid fields are `user_id` and `created_at`.|
|path|path|string|true|Path to operate on.|

> Example responses

> 200 Response

```json
[
  {
    "action": "create",
    "destination": "/to_path",
    "display": "Actual text of the action here.",
    "failure_type": "none",
    "id": 1,
    "interface": "web",
    "ip": "192.283.128.182",
    "path": "path",
    "source": "/from_path",
    "targets": [],
    "user_id": 1,
    "username": "user",
    "when": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-history-for-specific-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of History objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-history-for-specific-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionEntity](#schemaactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List site login history.

<a id="opIdHistoryListLogins"></a>

> Code samples

```bash
curl https://example.com/history/login \
  -H 'Accept: application/json'
```

`GET /history/login`

List site login history.

<h3 id="list-site-login-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_at|query|string(date-time)|false|Leave blank or set to a date/time to filter earlier entries.|
|end_at|query|string(date-time)|false|Leave blank or set to a date/time to filter later entries.|
|display|query|string|false|Display format. Leave blank or set to `full` or `parent`.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[user_id]=desc`). Valid fields are `user_id` and `created_at`.|

> Example responses

> 200 Response

```json
[
  {
    "action": "create",
    "destination": "/to_path",
    "display": "Actual text of the action here.",
    "failure_type": "none",
    "id": 1,
    "interface": "web",
    "ip": "192.283.128.182",
    "path": "path",
    "source": "/from_path",
    "targets": [],
    "user_id": 1,
    "username": "user",
    "when": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-site-login-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of History objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-site-login-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionEntity](#schemaactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List history for specific user.

<a id="opIdHistoryListForUser"></a>

> Code samples

```bash
curl https://example.com/history/users/0 \
  -H 'Accept: application/json'
```

`GET /history/users/{user_id}`

List history for specific user.

<h3 id="list-history-for-specific-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_at|query|string(date-time)|false|Leave blank or set to a date/time to filter earlier entries.|
|end_at|query|string(date-time)|false|Leave blank or set to a date/time to filter later entries.|
|display|query|string|false|Display format. Leave blank or set to `full` or `parent`.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[user_id]=desc`). Valid fields are `user_id` and `created_at`.|
|user_id|path|integer(int32)|true|User ID.|

> Example responses

> 200 Response

```json
[
  {
    "action": "create",
    "destination": "/to_path",
    "display": "Actual text of the action here.",
    "failure_type": "none",
    "id": 1,
    "interface": "web",
    "ip": "192.283.128.182",
    "path": "path",
    "source": "/from_path",
    "targets": [],
    "user_id": 1,
    "username": "user",
    "when": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-history-for-specific-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of History objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-history-for-specific-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionEntity](#schemaactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-historyexports">history_exports</h1>

Operations about history_exports

## Create History Export

<a id="opIdPostHistoryExports"></a>

> Code samples

```bash
curl https://example.com/history_exports \
  -X POST \
  -H 'Accept: application/json' \
  -F 'end_at=2000-01-01T01:00:00Z' \
  -F 'query_action=read' \
  -F 'query_destination=DestFolder' \
  -F 'query_failure_type=bad_password' \
  -F 'query_file_id=1' \
  -F 'query_folder=Folder' \
  -F 'query_interface=ftp' \
  -F 'query_ip=127.0.0.1' \
  -F 'query_parent_id=1' \
  -F 'query_path=MyFile.txt' \
  -F 'query_src=SrcFolder' \
  -F 'query_target_id=1' \
  -F 'query_target_name=full' \
  -F 'query_target_permission=full' \
  -F 'query_target_permission_set=desktop_app' \
  -F 'query_target_platform=windows' \
  -F 'query_target_user_id=1' \
  -F 'query_target_username=jerry' \
  -F 'query_user_id=1' \
  -F 'query_username=jerry' \
  -F 'start_at=2000-01-01T01:00:00Z' \
  -F 'user_id=0'
```

`POST /history_exports`

Create History Export

> Body parameter

```yaml
end_at: "2000-01-01T01:00:00Z"
query_action: read
query_destination: DestFolder
query_failure_type: bad_password
query_file_id: "1"
query_folder: Folder
query_interface: ftp
query_ip: "127.0.0.1"
query_parent_id: "1"
query_path: MyFile.txt
query_src: SrcFolder
query_target_id: "1"
query_target_name: full
query_target_permission: full
query_target_permission_set: desktop_app
query_target_platform: windows
query_target_user_id: "1"
query_target_username: jerry
query_user_id: "1"
query_username: jerry
start_at: "2000-01-01T01:00:00Z"
user_id: 0
```

<h3 id="create-history-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» end_at|body|string(date-time)|false|End date/time of export range.|
|» query_action|body|string|false|Filter results by this this action type. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`|
|» query_destination|body|string|false|Return results that are file moves with this path as destination.|
|» query_failure_type|body|string|false|If searching for Histories about login failures, this parameter restricts results to failures of this specific type.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`, `country_mismatch`|
|» query_file_id|body|string|false|Return results that are file actions related to the file indicated by this File ID|
|» query_folder|body|string|false|Return results that are file actions related to files or folders inside this folder path.|
|» query_interface|body|string|false|Filter results by this this interface type. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`, `office`, `mobile`, `as2`, `inbound_email`, `remote`|
|» query_ip|body|string|false|Filter results by this IP address.|
|» query_parent_id|body|string|false|Return results that are file actions inside the parent folder specified by this folder ID|
|» query_path|body|string|false|Return results that are file actions related to this path.|
|» query_src|body|string|false|Return results that are file moves originating from this path.|
|» query_target_id|body|string|false|If searching for Histories about specific objects (such as Users, or API Keys), this paremeter restricts results to objects that match this ID.|
|» query_target_name|body|string|false|If searching for Histories about Users, Groups or other objects with names, this parameter restricts results to objects with this name/username.|
|» query_target_permission|body|string|false|If searching for Histories about Permisisons, this parameter restricts results to permissions of this level.|
|» query_target_permission_set|body|string|false|If searching for Histories about API keys, this parameter restricts results to API keys with this permission set.|
|» query_target_platform|body|string|false|If searching for Histories about API keys, this parameter restricts results to API keys associated with this platform.|
|» query_target_user_id|body|string|false|If searching for Histories about API keys, this parameter restricts results to API keys created by/for this user ID.|
|» query_target_username|body|string|false|If searching for Histories about API keys, this parameter restricts results to API keys created by/for this username.|
|» query_user_id|body|string|false|Return results that are actions performed by the user indiciated by this User ID|
|» query_username|body|string|false|Filter results by this username.|
|» start_at|body|string(date-time)|false|Start date/time of export range.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "end_at": "2000-01-01T01:00:00Z",
  "history_version": "example",
  "id": 1,
  "query_action": "read",
  "query_destination": "DestFolder",
  "query_failure_type": "bad_password",
  "query_file_id": "1",
  "query_folder": "Folder",
  "query_interface": "ftp",
  "query_ip": "127.0.0.1",
  "query_parent_id": "1",
  "query_path": "MyFile.txt",
  "query_src": "SrcFolder",
  "query_target_id": "1",
  "query_target_name": "full",
  "query_target_permission": "full",
  "query_target_permission_set": "desktop_app",
  "query_target_platform": "windows",
  "query_target_user_id": "1",
  "query_target_username": "jerry",
  "query_user_id": "1",
  "query_username": "jerry",
  "results_url": "https://files.com/history_results.csv",
  "start_at": "2000-01-01T01:00:00Z",
  "status": "ready"
}
```

<h3 id="create-history-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The HistoryExports object.|[HistoryExportEntity](#schemahistoryexportentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show History Export

<a id="opIdGetHistoryExportsId"></a>

> Code samples

```bash
curl https://example.com/history_exports/0 \
  -H 'Accept: application/json'
```

`GET /history_exports/{id}`

Show History Export

<h3 id="show-history-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|History Export ID.|

> Example responses

> 200 Response

```json
{
  "end_at": "2000-01-01T01:00:00Z",
  "history_version": "example",
  "id": 1,
  "query_action": "read",
  "query_destination": "DestFolder",
  "query_failure_type": "bad_password",
  "query_file_id": "1",
  "query_folder": "Folder",
  "query_interface": "ftp",
  "query_ip": "127.0.0.1",
  "query_parent_id": "1",
  "query_path": "MyFile.txt",
  "query_src": "SrcFolder",
  "query_target_id": "1",
  "query_target_name": "full",
  "query_target_permission": "full",
  "query_target_permission_set": "desktop_app",
  "query_target_platform": "windows",
  "query_target_user_id": "1",
  "query_target_username": "jerry",
  "query_user_id": "1",
  "query_username": "jerry",
  "results_url": "https://files.com/history_results.csv",
  "start_at": "2000-01-01T01:00:00Z",
  "status": "ready"
}
```

<h3 id="show-history-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The HistoryExports object.|[HistoryExportEntity](#schemahistoryexportentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-historyexportresults">history_export_results</h1>

Operations about history_export_results

## List History Export Results

<a id="opIdGetHistoryExportResults"></a>

> Code samples

```bash
curl 'https://example.com/history_export_results?history_export_id=0' \
  -H 'Accept: application/json'
```

`GET /history_export_results`

List History Export Results

<h3 id="list-history-export-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|history_export_id|query|integer(int32)|true|ID of the associated history export.|

> Example responses

> 200 Response

```json
[
  {
    "action": "read",
    "created_at": 1,
    "created_at_iso8601": 1,
    "destination": "DestFolder",
    "failure_type": "bad_password",
    "file_id": 1,
    "folder": "Folder",
    "id": 1,
    "interface": "ftp",
    "ip": "127.0.0.1",
    "parent_id": 1,
    "path": "MyFile.txt",
    "src": "SrcFolder",
    "target_expires_at": 1,
    "target_id": 1,
    "target_name": "full",
    "target_permission": "full",
    "target_permission_set": "desktop_app",
    "target_platform": "windows",
    "target_recursive": true,
    "target_user_id": 1,
    "target_username": "jerry",
    "user_id": 1,
    "username": "jerry"
  }
]
```

<h3 id="list-history-export-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of HistoryExportResults objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-history-export-results-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HistoryExportResultEntity](#schemahistoryexportresultentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-inboxrecipients">inbox_recipients</h1>

Operations about inbox_recipients

## List Inbox Recipients

<a id="opIdGetInboxRecipients"></a>

> Code samples

```bash
curl 'https://example.com/inbox_recipients?inbox_id=0' \
  -H 'Accept: application/json'
```

`GET /inbox_recipients`

List Inbox Recipients

<h3 id="list-inbox-recipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[has_registrations]=desc`). Valid fields are `has_registrations`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `has_registrations`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `has_registrations`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `has_registrations`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `has_registrations`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `has_registrations`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `has_registrations`.|
|inbox_id|query|integer(int32)|true|List recipients for the inbox with this ID.|

> Example responses

> 200 Response

```json
[
  {
    "company": "Acme Inc.",
    "name": "John Doe",
    "note": "Some note.",
    "recipient": "john.doe@example.com",
    "sent_at": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-inbox-recipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of InboxRecipients objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-inbox-recipients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InboxRecipientEntity](#schemainboxrecipiententity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Inbox Recipient

<a id="opIdPostInboxRecipients"></a>

> Code samples

```bash
curl https://example.com/inbox_recipients \
  -X POST \
  -H 'Accept: application/json' \
  -F 'company=Acme Ltd' \
  -F 'inbox_id=0' \
  -F 'name=John Smith' \
  -F 'note=Just a note.' \
  -F 'recipient=johndoe@gmail.com' \
  -F 'share_after_create=true' \
  -F 'user_id=0'
```

`POST /inbox_recipients`

Create Inbox Recipient

> Body parameter

```yaml
company: Acme Ltd
inbox_id: 0
name: John Smith
note: Just a note.
recipient: johndoe@gmail.com
share_after_create: true
user_id: 0
```

<h3 id="create-inbox-recipient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» company|body|string|false|Company of recipient.|
|» inbox_id|body|integer(int32)|true|Inbox to share.|
|» name|body|string|false|Name of recipient.|
|» note|body|string|false|Note to include in email.|
|» recipient|body|string|true|Email address to share this inbox with.|
|» share_after_create|body|boolean|false|Set to true to share the link with the recipient upon creation.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "company": "Acme Inc.",
  "name": "John Doe",
  "note": "Some note.",
  "recipient": "john.doe@example.com",
  "sent_at": "2000-01-01T01:00:00Z"
}
```

<h3 id="create-inbox-recipient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The InboxRecipients object.|[InboxRecipientEntity](#schemainboxrecipiententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-inboxregistrations">inbox_registrations</h1>

Operations about inbox_registrations

## List Inbox Registrations

<a id="opIdGetInboxRegistrations"></a>

> Code samples

```bash
curl https://example.com/inbox_registrations \
  -H 'Accept: application/json'
```

`GET /inbox_registrations`

List Inbox Registrations

<h3 id="list-inbox-registrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|folder_behavior_id|query|integer(int32)|false|ID of the associated Inbox.|

> Example responses

> 200 Response

```json
[
  {
    "clickwrap_body": "example",
    "code": "abc123",
    "company": "Action Verb",
    "created_at": "2000-01-01T01:00:00Z",
    "email": "john.doe@files.com",
    "form_field_data": {
      "key": "example value"
    },
    "form_field_set_id": 1,
    "inbox_id": 1,
    "inbox_recipient_id": 1,
    "inbox_title": "example",
    "name": "account"
  }
]
```

<h3 id="list-inbox-registrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of InboxRegistrations objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-inbox-registrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InboxRegistrationEntity](#schemainboxregistrationentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-inboxuploads">inbox_uploads</h1>

Operations about inbox_uploads

## List Inbox Uploads

<a id="opIdGetInboxUploads"></a>

> Code samples

```bash
curl https://example.com/inbox_uploads \
  -H 'Accept: application/json'
```

`GET /inbox_uploads`

List Inbox Uploads

<h3 id="list-inbox-uploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[created_at]=desc`). Valid fields are `created_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `created_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `created_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `created_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `created_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `created_at`.|
|inbox_registration_id|query|integer(int32)|false|InboxRegistration ID|
|inbox_id|query|integer(int32)|false|Inbox ID|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "inbox_registration": {
      "clickwrap_body": "example",
      "code": "abc123",
      "company": "Action Verb",
      "created_at": "2000-01-01T01:00:00Z",
      "email": "john.doe@files.com",
      "form_field_data": {
        "key": "example value"
      },
      "form_field_set_id": 1,
      "inbox_id": 1,
      "inbox_recipient_id": 1,
      "inbox_title": "example",
      "name": "account"
    },
    "path": "a/b/test.txt"
  }
]
```

<h3 id="list-inbox-uploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of InboxUploads objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-inbox-uploads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[InboxUploadEntity](#schemainboxuploadentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-invoices">invoices</h1>

Operations about invoices

## List Invoices

<a id="opIdGetInvoices"></a>

> Code samples

```bash
curl https://example.com/invoices \
  -H 'Accept: application/json'
```

`GET /invoices`

List Invoices

<h3 id="list-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "amount": 1,
    "balance": 1,
    "created_at": "2000-01-01T01:00:00Z",
    "currency": "USD",
    "download_uri": "https://url...",
    "id": 1,
    "invoice_line_items": [
      null
    ],
    "method": "paypal",
    "payment_line_items": [
      null
    ],
    "payment_reversed_at": "2000-01-01T01:00:00Z",
    "payment_type": "example",
    "site_name": "My Site",
    "type": "invoice",
    "updated_at": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Invoices objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-invoices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountLineItemEntity](#schemaaccountlineitementity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Show Invoice

<a id="opIdGetInvoicesId"></a>

> Code samples

```bash
curl https://example.com/invoices/0 \
  -H 'Accept: application/json'
```

`GET /invoices/{id}`

Show Invoice

<h3 id="show-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Invoice ID.|

> Example responses

> 200 Response

```json
{
  "amount": 1,
  "balance": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "currency": "USD",
  "download_uri": "https://url...",
  "id": 1,
  "invoice_line_items": [
    null
  ],
  "method": "paypal",
  "payment_line_items": [
    null
  ],
  "payment_reversed_at": "2000-01-01T01:00:00Z",
  "payment_type": "example",
  "site_name": "My Site",
  "type": "invoice",
  "updated_at": "2000-01-01T01:00:00Z"
}
```

<h3 id="show-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Invoices object.|[AccountLineItemEntity](#schemaaccountlineitementity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-ipaddresses">ip_addresses</h1>

Operations about ip_addresses

## List IP Addresses associated with the current site

<a id="opIdGetIpAddresses"></a>

> Code samples

```bash
curl https://example.com/ip_addresses \
  -H 'Accept: application/json'
```

`GET /ip_addresses`

List IP Addresses associated with the current site

<h3 id="list-ip-addresses-associated-with-the-current-site-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "associated_with": "Site",
    "group_id": 1,
    "id": "Site",
    "ip_addresses": [
      "127.0.0.1"
    ]
  }
]
```

<h3 id="list-ip-addresses-associated-with-the-current-site-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of IpAddresses objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-ip-addresses-associated-with-the-current-site-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IpAddressEntity](#schemaipaddressentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List all possible public ExaVault IP addresses

<a id="opIdGetIpAddressesExavaultReserved"></a>

> Code samples

```bash
curl https://example.com/ip_addresses/exavault-reserved \
  -H 'Accept: application/json'
```

`GET /ip_addresses/exavault-reserved`

List all possible public ExaVault IP addresses

<h3 id="list-all-possible-public-exavault-ip-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "ftp_enabled": true,
    "ip_address": "1.1.1.1",
    "server_name": "server-1",
    "sftp_enabled": true
  }
]
```

<h3 id="list-all-possible-public-exavault-ip-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of IpAddresses objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-all-possible-public-exavault-ip-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicIpAddressEntity](#schemapublicipaddressentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List all possible public IP addresses

<a id="opIdGetIpAddressesReserved"></a>

> Code samples

```bash
curl https://example.com/ip_addresses/reserved \
  -H 'Accept: application/json'
```

`GET /ip_addresses/reserved`

List all possible public IP addresses

<h3 id="list-all-possible-public-ip-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "ftp_enabled": true,
    "ip_address": "1.1.1.1",
    "server_name": "server-1",
    "sftp_enabled": true
  }
]
```

<h3 id="list-all-possible-public-ip-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of IpAddresses objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-all-possible-public-ip-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicIpAddressEntity](#schemapublicipaddressentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-locks">locks</h1>

Operations about locks

## List Locks by path

<a id="opIdLockListForPath"></a>

> Code samples

```bash
curl https://example.com/locks/string \
  -H 'Accept: application/json'
```

`GET /locks/{path}`

List Locks by path

<h3 id="list-locks-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|path|path|string|true|Path to operate on.|
|include_children|query|boolean|false|Include locks from children objects?|

> Example responses

> 200 Response

```json
[
  {
    "allow_access_by_any_user": true,
    "depth": "infinity",
    "exclusive": true,
    "owner": "user",
    "path": "locked_file",
    "recursive": true,
    "scope": "shared",
    "timeout": 1,
    "token": "17c54824e9931a4688ca032d03f6663c",
    "type": "write",
    "user_id": 1,
    "username": "username"
  }
]
```

<h3 id="list-locks-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Locks objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-locks-by-path-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LockEntity](#schemalockentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Lock

<a id="opIdPostLocksPath"></a>

> Code samples

```bash
curl https://example.com/locks/string \
  -X POST \
  -H 'Accept: application/json' \
  -F 'allow_access_by_any_user=true' \
  -F 'exclusive=true' \
  -F 'recursive=string' \
  -F 'timeout=0'
```

`POST /locks/{path}`

Create Lock

> Body parameter

```yaml
allow_access_by_any_user: true
exclusive: true
recursive: string
timeout: 0
```

<h3 id="create-lock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path|
|body|body|object|false|none|
|» allow_access_by_any_user|body|boolean|false|Allow lock to be updated by any user?|
|» exclusive|body|boolean|false|Is lock exclusive?|
|» recursive|body|string|false|Does lock apply to subfolders?|
|» timeout|body|integer(int32)|false|Lock timeout length|

> Example responses

> 201 Response

```json
{
  "allow_access_by_any_user": true,
  "depth": "infinity",
  "exclusive": true,
  "owner": "user",
  "path": "locked_file",
  "recursive": true,
  "scope": "shared",
  "timeout": 1,
  "token": "17c54824e9931a4688ca032d03f6663c",
  "type": "write",
  "user_id": 1,
  "username": "username"
}
```

<h3 id="create-lock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Locks object.|[LockEntity](#schemalockentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Lock

<a id="opIdDeleteLocksPath"></a>

> Code samples

```bash
curl 'https://example.com/locks/string?token=string' \
  -X DELETE
```

`DELETE /locks/{path}`

Delete Lock

<h3 id="delete-lock-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Path|
|token|query|string|true|Lock token|

<h3 id="delete-lock-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-messages">messages</h1>

Operations about messages

## List Messages

<a id="opIdGetMessages"></a>

> Code samples

```bash
curl 'https://example.com/messages?project_id=0' \
  -H 'Accept: application/json'
```

`GET /messages`

List Messages

<h3 id="list-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|project_id|query|integer(int32)|true|Project for which to return messages.|

> Example responses

> 200 Response

```json
[
  {
    "body": "We should upgrade our Files.com account!",
    "comments": [
      null
    ],
    "id": 1,
    "subject": "Files.com Account Upgrade"
  }
]
```

<h3 id="list-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Messages objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageEntity](#schemamessageentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Message

<a id="opIdPostMessages"></a>

> Code samples

```bash
curl https://example.com/messages \
  -X POST \
  -H 'Accept: application/json' \
  -F 'body=We should upgrade our Files.com account!' \
  -F 'project_id=0' \
  -F 'subject=Files.com Account Upgrade' \
  -F 'user_id=0'
```

`POST /messages`

Create Message

> Body parameter

```yaml
body: "We should upgrade our Files.com account!"
project_id: 0
subject: Files.com Account Upgrade
user_id: 0
```

<h3 id="create-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Message body.|
|» project_id|body|integer(int32)|true|Project to which the message should be attached.|
|» subject|body|string|true|Message subject.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "body": "We should upgrade our Files.com account!",
  "comments": [
    null
  ],
  "id": 1,
  "subject": "Files.com Account Upgrade"
}
```

<h3 id="create-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Messages object.|[MessageEntity](#schemamessageentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Message

<a id="opIdGetMessagesId"></a>

> Code samples

```bash
curl https://example.com/messages/0 \
  -H 'Accept: application/json'
```

`GET /messages/{id}`

Show Message

<h3 id="show-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message ID.|

> Example responses

> 200 Response

```json
{
  "body": "We should upgrade our Files.com account!",
  "comments": [
    null
  ],
  "id": 1,
  "subject": "Files.com Account Upgrade"
}
```

<h3 id="show-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Messages object.|[MessageEntity](#schemamessageentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Message

<a id="opIdDeleteMessagesId"></a>

> Code samples

```bash
curl https://example.com/messages/0 \
  -X DELETE
```

`DELETE /messages/{id}`

Delete Message

<h3 id="delete-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message ID.|

<h3 id="delete-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Message

<a id="opIdPatchMessagesId"></a>

> Code samples

```bash
curl https://example.com/messages/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'body=We should upgrade our Files.com account!' \
  -F 'project_id=0' \
  -F 'subject=Files.com Account Upgrade'
```

`PATCH /messages/{id}`

Update Message

> Body parameter

```yaml
body: "We should upgrade our Files.com account!"
project_id: 0
subject: Files.com Account Upgrade
```

<h3 id="update-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message ID.|
|body|body|object|true|none|
|» body|body|string|true|Message body.|
|» project_id|body|integer(int32)|true|Project to which the message should be attached.|
|» subject|body|string|true|Message subject.|

> Example responses

> 200 Response

```json
{
  "body": "We should upgrade our Files.com account!",
  "comments": [
    null
  ],
  "id": 1,
  "subject": "Files.com Account Upgrade"
}
```

<h3 id="update-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Messages object.|[MessageEntity](#schemamessageentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-messagecomments">message_comments</h1>

Operations about message_comments

## List Message Comments

<a id="opIdGetMessageComments"></a>

> Code samples

```bash
curl 'https://example.com/message_comments?message_id=0' \
  -H 'Accept: application/json'
```

`GET /message_comments`

List Message Comments

<h3 id="list-message-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|message_id|query|integer(int32)|true|Message comment to return comments for.|

> Example responses

> 200 Response

```json
[
  {
    "body": "What a great idea, thank you!",
    "id": 1,
    "reactions": [
      null
    ]
  }
]
```

<h3 id="list-message-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of MessageComments objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-message-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageCommentEntity](#schemamessagecommententity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Message Comment

<a id="opIdPostMessageComments"></a>

> Code samples

```bash
curl https://example.com/message_comments \
  -X POST \
  -H 'Accept: application/json' \
  -F 'body=string' \
  -F 'user_id=0'
```

`POST /message_comments`

Create Message Comment

> Body parameter

```yaml
body: string
user_id: 0
```

<h3 id="create-message-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» body|body|string|true|Comment body.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "body": "What a great idea, thank you!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

<h3 id="create-message-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The MessageComments object.|[MessageCommentEntity](#schemamessagecommententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Message Comment

<a id="opIdGetMessageCommentsId"></a>

> Code samples

```bash
curl https://example.com/message_comments/0 \
  -H 'Accept: application/json'
```

`GET /message_comments/{id}`

Show Message Comment

<h3 id="show-message-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Comment ID.|

> Example responses

> 200 Response

```json
{
  "body": "What a great idea, thank you!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

<h3 id="show-message-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The MessageComments object.|[MessageCommentEntity](#schemamessagecommententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Message Comment

<a id="opIdDeleteMessageCommentsId"></a>

> Code samples

```bash
curl https://example.com/message_comments/0 \
  -X DELETE
```

`DELETE /message_comments/{id}`

Delete Message Comment

<h3 id="delete-message-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Comment ID.|

<h3 id="delete-message-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Message Comment

<a id="opIdPatchMessageCommentsId"></a>

> Code samples

```bash
curl https://example.com/message_comments/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'body=string'
```

`PATCH /message_comments/{id}`

Update Message Comment

> Body parameter

```yaml
body: string
```

<h3 id="update-message-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Comment ID.|
|body|body|object|true|none|
|» body|body|string|true|Comment body.|

> Example responses

> 200 Response

```json
{
  "body": "What a great idea, thank you!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

<h3 id="update-message-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The MessageComments object.|[MessageCommentEntity](#schemamessagecommententity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-messagecommentreactions">message_comment_reactions</h1>

Operations about message_comment_reactions

## List Message Comment Reactions

<a id="opIdGetMessageCommentReactions"></a>

> Code samples

```bash
curl 'https://example.com/message_comment_reactions?message_comment_id=0' \
  -H 'Accept: application/json'
```

`GET /message_comment_reactions`

List Message Comment Reactions

<h3 id="list-message-comment-reactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|message_comment_id|query|integer(int32)|true|Message comment to return reactions for.|

> Example responses

> 200 Response

```json
[
  {
    "emoji": "👍",
    "id": 1
  }
]
```

<h3 id="list-message-comment-reactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of MessageCommentReactions objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-message-comment-reactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageCommentReactionEntity](#schemamessagecommentreactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Message Comment Reaction

<a id="opIdPostMessageCommentReactions"></a>

> Code samples

```bash
curl https://example.com/message_comment_reactions \
  -X POST \
  -H 'Accept: application/json' \
  -F 'emoji=string' \
  -F 'user_id=0'
```

`POST /message_comment_reactions`

Create Message Comment Reaction

> Body parameter

```yaml
emoji: string
user_id: 0
```

<h3 id="create-message-comment-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» emoji|body|string|true|Emoji to react with.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "emoji": "👍",
  "id": 1
}
```

<h3 id="create-message-comment-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The MessageCommentReactions object.|[MessageCommentReactionEntity](#schemamessagecommentreactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Message Comment Reaction

<a id="opIdGetMessageCommentReactionsId"></a>

> Code samples

```bash
curl https://example.com/message_comment_reactions/0 \
  -H 'Accept: application/json'
```

`GET /message_comment_reactions/{id}`

Show Message Comment Reaction

<h3 id="show-message-comment-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Comment Reaction ID.|

> Example responses

> 200 Response

```json
{
  "emoji": "👍",
  "id": 1
}
```

<h3 id="show-message-comment-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The MessageCommentReactions object.|[MessageCommentReactionEntity](#schemamessagecommentreactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Message Comment Reaction

<a id="opIdDeleteMessageCommentReactionsId"></a>

> Code samples

```bash
curl https://example.com/message_comment_reactions/0 \
  -X DELETE
```

`DELETE /message_comment_reactions/{id}`

Delete Message Comment Reaction

<h3 id="delete-message-comment-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Comment Reaction ID.|

<h3 id="delete-message-comment-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-messagereactions">message_reactions</h1>

Operations about message_reactions

## List Message Reactions

<a id="opIdGetMessageReactions"></a>

> Code samples

```bash
curl 'https://example.com/message_reactions?message_id=0' \
  -H 'Accept: application/json'
```

`GET /message_reactions`

List Message Reactions

<h3 id="list-message-reactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|message_id|query|integer(int32)|true|Message to return reactions for.|

> Example responses

> 200 Response

```json
[
  {
    "emoji": "👍",
    "id": 1
  }
]
```

<h3 id="list-message-reactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of MessageReactions objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-message-reactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageReactionEntity](#schemamessagereactionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Message Reaction

<a id="opIdPostMessageReactions"></a>

> Code samples

```bash
curl https://example.com/message_reactions \
  -X POST \
  -H 'Accept: application/json' \
  -F 'emoji=string' \
  -F 'user_id=0'
```

`POST /message_reactions`

Create Message Reaction

> Body parameter

```yaml
emoji: string
user_id: 0
```

<h3 id="create-message-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» emoji|body|string|true|Emoji to react with.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "emoji": "👍",
  "id": 1
}
```

<h3 id="create-message-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The MessageReactions object.|[MessageReactionEntity](#schemamessagereactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Message Reaction

<a id="opIdGetMessageReactionsId"></a>

> Code samples

```bash
curl https://example.com/message_reactions/0 \
  -H 'Accept: application/json'
```

`GET /message_reactions/{id}`

Show Message Reaction

<h3 id="show-message-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Reaction ID.|

> Example responses

> 200 Response

```json
{
  "emoji": "👍",
  "id": 1
}
```

<h3 id="show-message-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The MessageReactions object.|[MessageReactionEntity](#schemamessagereactionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Message Reaction

<a id="opIdDeleteMessageReactionsId"></a>

> Code samples

```bash
curl https://example.com/message_reactions/0 \
  -X DELETE
```

`DELETE /message_reactions/{id}`

Delete Message Reaction

<h3 id="delete-message-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Message Reaction ID.|

<h3 id="delete-message-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-notifications">notifications</h1>

Operations about notifications

## List Notifications

<a id="opIdGetNotifications"></a>

> Code samples

```bash
curl https://example.com/notifications \
  -H 'Accept: application/json'
```

`GET /notifications`

List Notifications

<h3 id="list-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|DEPRECATED: Show notifications for this User ID. Use `filter[user_id]` instead.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[path]=desc`). Valid fields are `path`, `user_id` or `group_id`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `user_id`, `group_id` or `path`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `user_id`, `group_id` or `path`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `user_id`, `group_id` or `path`.|
|group_id|query|integer(int32)|false|DEPRECATED: Show notifications for this Group ID. Use `filter[group_id]` instead.|
|path|query|string|false|Show notifications for this Path.|
|include_ancestors|query|boolean|false|If `include_ancestors` is `true` and `path` is specified, include notifications for any parent paths. Ignored if `path` is not specified.|

> Example responses

> 200 Response

```json
[
  {
    "group_id": 0,
    "group_name": "example",
    "id": 1,
    "message": "custom notification email message",
    "notify_on_copy": true,
    "notify_on_delete": true,
    "notify_on_download": true,
    "notify_on_move": true,
    "notify_on_upload": true,
    "notify_user_actions": true,
    "path": "path",
    "recursive": true,
    "send_interval": "fifteen_minutes",
    "suppressed_email": true,
    "trigger_by_share_recipients": true,
    "triggering_filenames": [
      "*.jpg",
      "notify_file.txt"
    ],
    "triggering_group_ids": [
      1
    ],
    "triggering_user_ids": [
      1
    ],
    "unsubscribed": true,
    "unsubscribed_reason": "example",
    "user_id": 1,
    "username": "User"
  }
]
```

<h3 id="list-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Notifications objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationEntity](#schemanotificationentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Notification

<a id="opIdPostNotifications"></a>

> Code samples

```bash
curl https://example.com/notifications \
  -X POST \
  -H 'Accept: application/json' \
  -F 'group_id=0' \
  -F 'message=custom notification email message' \
  -F 'notify_on_copy=true' \
  -F 'notify_on_delete=true' \
  -F 'notify_on_download=true' \
  -F 'notify_on_move=true' \
  -F 'notify_on_upload=true' \
  -F 'notify_user_actions=true' \
  -F 'path=string' \
  -F 'recursive=true' \
  -F 'send_interval=daily' \
  -F 'trigger_by_share_recipients=true' \
  -F 'triggering_filenames=["*.jpg","notify_file.txt"]' \
  -F 'triggering_group_ids=[1]' \
  -F 'triggering_user_ids=[1]' \
  -F 'user_id=0' \
  -F 'username=string'
```

`POST /notifications`

Create Notification

> Body parameter

```yaml
group_id: 0
message: custom notification email message
notify_on_copy: true
notify_on_delete: true
notify_on_download: true
notify_on_move: true
notify_on_upload: true
notify_user_actions: true
path: string
recursive: true
send_interval: daily
trigger_by_share_recipients: true
triggering_filenames:
  - "*.jpg"
  - notify_file.txt
triggering_group_ids:
  - 1
triggering_user_ids:
  - 1
user_id: 0
username: string
```

<h3 id="create-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» group_id|body|integer(int32)|false|The ID of the group to notify.  Provide `user_id`, `username` or `group_id`.|
|» message|body|string|false|Custom message to include in notification emails.|
|» notify_on_copy|body|boolean|false|If `true`, copying or moving resources into this path will trigger a notification, in addition to just uploads.|
|» notify_on_delete|body|boolean|false|Triggers notification when deleting files from this path|
|» notify_on_download|body|boolean|false|Triggers notification when downloading files from this path|
|» notify_on_move|body|boolean|false|Triggers notification when moving files to this path|
|» notify_on_upload|body|boolean|false|Triggers notification when uploading new files to this path|
|» notify_user_actions|body|boolean|false|If `true` actions initiated by the user will still result in a notification|
|» path|body|string|false|Path|
|» recursive|body|boolean|false|If `true`, enable notifications for each subfolder in this path|
|» send_interval|body|string|false|The time interval that notifications are aggregated by.  Can be `five_minutes`, `fifteen_minutes`, `hourly`, or `daily`.|
|» trigger_by_share_recipients|body|boolean|false|Notify when actions are performed by a share recipient?|
|» triggering_filenames|body|[string]|false|Array of filenames (possibly with wildcards) to match for action path|
|» triggering_group_ids|body|[integer(int32)]|false|Only notify on actions made by a member of one of the specified groups|
|» triggering_user_ids|body|[integer(int32)]|false|Only notify on actions made one of the specified users|
|» user_id|body|integer(int32)|false|The id of the user to notify. Provide `user_id`, `username` or `group_id`.|
|» username|body|string|false|The username of the user to notify.  Provide `user_id`, `username` or `group_id`.|

> Example responses

> 201 Response

```json
{
  "group_id": 0,
  "group_name": "example",
  "id": 1,
  "message": "custom notification email message",
  "notify_on_copy": true,
  "notify_on_delete": true,
  "notify_on_download": true,
  "notify_on_move": true,
  "notify_on_upload": true,
  "notify_user_actions": true,
  "path": "path",
  "recursive": true,
  "send_interval": "fifteen_minutes",
  "suppressed_email": true,
  "trigger_by_share_recipients": true,
  "triggering_filenames": [
    "*.jpg",
    "notify_file.txt"
  ],
  "triggering_group_ids": [
    1
  ],
  "triggering_user_ids": [
    1
  ],
  "unsubscribed": true,
  "unsubscribed_reason": "example",
  "user_id": 1,
  "username": "User"
}
```

<h3 id="create-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Notifications object.|[NotificationEntity](#schemanotificationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Notification

<a id="opIdGetNotificationsId"></a>

> Code samples

```bash
curl https://example.com/notifications/0 \
  -H 'Accept: application/json'
```

`GET /notifications/{id}`

Show Notification

<h3 id="show-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Notification ID.|

> Example responses

> 200 Response

```json
{
  "group_id": 0,
  "group_name": "example",
  "id": 1,
  "message": "custom notification email message",
  "notify_on_copy": true,
  "notify_on_delete": true,
  "notify_on_download": true,
  "notify_on_move": true,
  "notify_on_upload": true,
  "notify_user_actions": true,
  "path": "path",
  "recursive": true,
  "send_interval": "fifteen_minutes",
  "suppressed_email": true,
  "trigger_by_share_recipients": true,
  "triggering_filenames": [
    "*.jpg",
    "notify_file.txt"
  ],
  "triggering_group_ids": [
    1
  ],
  "triggering_user_ids": [
    1
  ],
  "unsubscribed": true,
  "unsubscribed_reason": "example",
  "user_id": 1,
  "username": "User"
}
```

<h3 id="show-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Notifications object.|[NotificationEntity](#schemanotificationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Notification

<a id="opIdDeleteNotificationsId"></a>

> Code samples

```bash
curl https://example.com/notifications/0 \
  -X DELETE
```

`DELETE /notifications/{id}`

Delete Notification

<h3 id="delete-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Notification ID.|

<h3 id="delete-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Notification

<a id="opIdPatchNotificationsId"></a>

> Code samples

```bash
curl https://example.com/notifications/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'message=custom notification email message' \
  -F 'notify_on_copy=true' \
  -F 'notify_on_delete=true' \
  -F 'notify_on_download=true' \
  -F 'notify_on_move=true' \
  -F 'notify_on_upload=true' \
  -F 'notify_user_actions=true' \
  -F 'recursive=true' \
  -F 'send_interval=daily' \
  -F 'trigger_by_share_recipients=true' \
  -F 'triggering_filenames=["*.jpg","notify_file.txt"]' \
  -F 'triggering_group_ids=[1]' \
  -F 'triggering_user_ids=[1]'
```

`PATCH /notifications/{id}`

Update Notification

> Body parameter

```yaml
message: custom notification email message
notify_on_copy: true
notify_on_delete: true
notify_on_download: true
notify_on_move: true
notify_on_upload: true
notify_user_actions: true
recursive: true
send_interval: daily
trigger_by_share_recipients: true
triggering_filenames:
  - "*.jpg"
  - notify_file.txt
triggering_group_ids:
  - 1
triggering_user_ids:
  - 1
```

<h3 id="update-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Notification ID.|
|body|body|object|false|none|
|» message|body|string|false|Custom message to include in notification emails.|
|» notify_on_copy|body|boolean|false|If `true`, copying or moving resources into this path will trigger a notification, in addition to just uploads.|
|» notify_on_delete|body|boolean|false|Triggers notification when deleting files from this path|
|» notify_on_download|body|boolean|false|Triggers notification when downloading files from this path|
|» notify_on_move|body|boolean|false|Triggers notification when moving files to this path|
|» notify_on_upload|body|boolean|false|Triggers notification when uploading new files to this path|
|» notify_user_actions|body|boolean|false|If `true` actions initiated by the user will still result in a notification|
|» recursive|body|boolean|false|If `true`, enable notifications for each subfolder in this path|
|» send_interval|body|string|false|The time interval that notifications are aggregated by.  Can be `five_minutes`, `fifteen_minutes`, `hourly`, or `daily`.|
|» trigger_by_share_recipients|body|boolean|false|Notify when actions are performed by a share recipient?|
|» triggering_filenames|body|[string]|false|Array of filenames (possibly with wildcards) to match for action path|
|» triggering_group_ids|body|[integer(int32)]|false|Only notify on actions made by a member of one of the specified groups|
|» triggering_user_ids|body|[integer(int32)]|false|Only notify on actions made one of the specified users|

> Example responses

> 200 Response

```json
{
  "group_id": 0,
  "group_name": "example",
  "id": 1,
  "message": "custom notification email message",
  "notify_on_copy": true,
  "notify_on_delete": true,
  "notify_on_download": true,
  "notify_on_move": true,
  "notify_on_upload": true,
  "notify_user_actions": true,
  "path": "path",
  "recursive": true,
  "send_interval": "fifteen_minutes",
  "suppressed_email": true,
  "trigger_by_share_recipients": true,
  "triggering_filenames": [
    "*.jpg",
    "notify_file.txt"
  ],
  "triggering_group_ids": [
    1
  ],
  "triggering_user_ids": [
    1
  ],
  "unsubscribed": true,
  "unsubscribed_reason": "example",
  "user_id": 1,
  "username": "User"
}
```

<h3 id="update-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Notifications object.|[NotificationEntity](#schemanotificationentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-payments">payments</h1>

Operations about payments

## List Payments

<a id="opIdGetPayments"></a>

> Code samples

```bash
curl https://example.com/payments \
  -H 'Accept: application/json'
```

`GET /payments`

List Payments

<h3 id="list-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "amount": 1,
    "balance": 1,
    "created_at": "2000-01-01T01:00:00Z",
    "currency": "USD",
    "download_uri": "https://url...",
    "id": 1,
    "invoice_line_items": [
      null
    ],
    "method": "paypal",
    "payment_line_items": [
      null
    ],
    "payment_reversed_at": "2000-01-01T01:00:00Z",
    "payment_type": "example",
    "site_name": "My Site",
    "type": "invoice",
    "updated_at": "2000-01-01T01:00:00Z"
  }
]
```

<h3 id="list-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Payments objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-payments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountLineItemEntity](#schemaaccountlineitementity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Show Payment

<a id="opIdGetPaymentsId"></a>

> Code samples

```bash
curl https://example.com/payments/0 \
  -H 'Accept: application/json'
```

`GET /payments/{id}`

Show Payment

<h3 id="show-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Payment ID.|

> Example responses

> 200 Response

```json
{
  "amount": 1,
  "balance": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "currency": "USD",
  "download_uri": "https://url...",
  "id": 1,
  "invoice_line_items": [
    null
  ],
  "method": "paypal",
  "payment_line_items": [
    null
  ],
  "payment_reversed_at": "2000-01-01T01:00:00Z",
  "payment_type": "example",
  "site_name": "My Site",
  "type": "invoice",
  "updated_at": "2000-01-01T01:00:00Z"
}
```

<h3 id="show-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Payments object.|[AccountLineItemEntity](#schemaaccountlineitementity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-permissions">permissions</h1>

Operations about permissions

## List Permissions

<a id="opIdGetPermissions"></a>

> Code samples

```bash
curl https://example.com/permissions \
  -H 'Accept: application/json'
```

`GET /permissions`

List Permissions

<h3 id="list-permissions-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[group_id]=desc`). Valid fields are `group_id`, `path`, `user_id` or `permission`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `group_id`, `user_id` or `path`. Valid field combinations are `[ group_id, path ]` and `[ user_id, path ]`.|
|path|query|string|false|DEPRECATED: Permission path.  If provided, will scope permissions to this path. Use `filter[path]` instead.|
|group_id|query|string|false|DEPRECATED: Group ID.  If provided, will scope permissions to this group. Use `filter[group_id]` instead.`|
|user_id|query|string|false|DEPRECATED: User ID.  If provided, will scope permissions to this user. Use `filter[user_id]` instead.`|
|include_groups|query|boolean|false|If searching by user or group, also include user's permissions that are inherited from its groups?|

> Example responses

> 200 Response

```json
[
  {
    "group_id": 0,
    "group_name": "example",
    "id": 1,
    "path": "example",
    "permission": "full",
    "recursive": true,
    "user_id": 1,
    "username": "Sser"
  }
]
```

<h3 id="list-permissions-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Permissions objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-permissions-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PermissionEntity](#schemapermissionentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Permission

<a id="opIdPostPermissions"></a>

> Code samples

```bash
curl https://example.com/permissions \
  -X POST \
  -H 'Accept: application/json' \
  -F 'group_id=0' \
  -F 'path=string' \
  -F 'permission=string' \
  -F 'recursive=true' \
  -F 'user_id=0' \
  -F 'username=string'
```

`POST /permissions`

Create Permission

> Body parameter

```yaml
group_id: 0
path: string
permission: string
recursive: true
user_id: 0
username: string
```

<h3 id="create-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» group_id|body|integer(int32)|false|Group ID|
|» path|body|string|false|Folder path|
|» permission|body|string|false| Permission type.  Can be `admin`, `full`, `readonly`, `writeonly`, `list`, or `history`|
|» recursive|body|boolean|false|Apply to subfolders recursively?|
|» user_id|body|integer(int32)|false|User ID.  Provide `username` or `user_id`|
|» username|body|string|false|User username.  Provide `username` or `user_id`|

> Example responses

> 201 Response

```json
{
  "group_id": 0,
  "group_name": "example",
  "id": 1,
  "path": "example",
  "permission": "full",
  "recursive": true,
  "user_id": 1,
  "username": "Sser"
}
```

<h3 id="create-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Permissions object.|[PermissionEntity](#schemapermissionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Permission

<a id="opIdDeletePermissionsId"></a>

> Code samples

```bash
curl https://example.com/permissions/0 \
  -X DELETE
```

`DELETE /permissions/{id}`

Delete Permission

<h3 id="delete-permission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Permission ID.|

<h3 id="delete-permission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-priorities">priorities</h1>

Operations about priorities

## List Priorities

<a id="opIdGetPriorities"></a>

> Code samples

```bash
curl 'https://example.com/priorities?path=string' \
  -H 'Accept: application/json'
```

`GET /priorities`

List Priorities

<h3 id="list-priorities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|path|query|string|true|The path to query for priorities|

> Example responses

> 200 Response

```json
[
  {
    "color": "pink",
    "path": "foo/bar"
  }
]
```

<h3 id="list-priorities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Priorities objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-priorities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PriorityEntity](#schemapriorityentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-projects">projects</h1>

Operations about projects

## List Projects

<a id="opIdGetProjects"></a>

> Code samples

```bash
curl https://example.com/projects \
  -H 'Accept: application/json'
```

`GET /projects`

List Projects

<h3 id="list-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "global_access": "none",
    "id": 1
  }
]
```

<h3 id="list-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Projects objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectEntity](#schemaprojectentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Project

<a id="opIdPostProjects"></a>

> Code samples

```bash
curl https://example.com/projects \
  -X POST \
  -H 'Accept: application/json' \
  -F 'global_access=string'
```

`POST /projects`

Create Project

> Body parameter

```yaml
global_access: string
```

<h3 id="create-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» global_access|body|string|true|Global permissions.  Can be: `none`, `anyone_with_read`, `anyone_with_full`.|

> Example responses

> 201 Response

```json
{
  "global_access": "none",
  "id": 1
}
```

<h3 id="create-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Projects object.|[ProjectEntity](#schemaprojectentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Project

<a id="opIdGetProjectsId"></a>

> Code samples

```bash
curl https://example.com/projects/0 \
  -H 'Accept: application/json'
```

`GET /projects/{id}`

Show Project

<h3 id="show-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Project ID.|

> Example responses

> 200 Response

```json
{
  "global_access": "none",
  "id": 1
}
```

<h3 id="show-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Projects object.|[ProjectEntity](#schemaprojectentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Project

<a id="opIdDeleteProjectsId"></a>

> Code samples

```bash
curl https://example.com/projects/0 \
  -X DELETE
```

`DELETE /projects/{id}`

Delete Project

<h3 id="delete-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Project ID.|

<h3 id="delete-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Project

<a id="opIdPatchProjectsId"></a>

> Code samples

```bash
curl https://example.com/projects/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'global_access=string'
```

`PATCH /projects/{id}`

Update Project

> Body parameter

```yaml
global_access: string
```

<h3 id="update-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Project ID.|
|body|body|object|true|none|
|» global_access|body|string|true|Global permissions.  Can be: `none`, `anyone_with_read`, `anyone_with_full`.|

> Example responses

> 200 Response

```json
{
  "global_access": "none",
  "id": 1
}
```

<h3 id="update-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Projects object.|[ProjectEntity](#schemaprojectentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-publickeys">public_keys</h1>

Operations about public_keys

## List Public Keys

<a id="opIdGetPublicKeys"></a>

> Code samples

```bash
curl https://example.com/public_keys \
  -H 'Accept: application/json'
```

`GET /public_keys`

List Public Keys

<h3 id="list-public-keys-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
    "id": 1,
    "title": "My public key"
  }
]
```

<h3 id="list-public-keys-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of PublicKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-public-keys-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicKeyEntity](#schemapublickeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Public Key

<a id="opIdPostPublicKeys"></a>

> Code samples

```bash
curl https://example.com/public_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'public_key=string' \
  -F 'title=My Main Key' \
  -F 'user_id=0'
```

`POST /public_keys`

Create Public Key

> Body parameter

```yaml
public_key: string
title: My Main Key
user_id: 0
```

<h3 id="create-public-key-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» public_key|body|string|true|Actual contents of SSH key.|
|» title|body|string|true|Internal reference for key.|
|» user_id|body|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|

> Example responses

> 201 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
  "id": 1,
  "title": "My public key"
}
```

<h3 id="create-public-key-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The PublicKeys object.|[PublicKeyEntity](#schemapublickeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Public Key

<a id="opIdGetPublicKeysId"></a>

> Code samples

```bash
curl https://example.com/public_keys/0 \
  -H 'Accept: application/json'
```

`GET /public_keys/{id}`

Show Public Key

<h3 id="show-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Public Key ID.|

> Example responses

> 200 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
  "id": 1,
  "title": "My public key"
}
```

<h3 id="show-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The PublicKeys object.|[PublicKeyEntity](#schemapublickeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Public Key

<a id="opIdDeletePublicKeysId"></a>

> Code samples

```bash
curl https://example.com/public_keys/0 \
  -X DELETE
```

`DELETE /public_keys/{id}`

Delete Public Key

<h3 id="delete-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Public Key ID.|

<h3 id="delete-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Public Key

<a id="opIdPatchPublicKeysId"></a>

> Code samples

```bash
curl https://example.com/public_keys/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'title=My Main Key'
```

`PATCH /public_keys/{id}`

Update Public Key

> Body parameter

```yaml
title: My Main Key
```

<h3 id="update-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Public Key ID.|
|body|body|object|true|none|
|» title|body|string|true|Internal reference for key.|

> Example responses

> 200 Response

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
  "id": 1,
  "title": "My public key"
}
```

<h3 id="update-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The PublicKeys object.|[PublicKeyEntity](#schemapublickeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-remotebandwidthsnapshots">remote_bandwidth_snapshots</h1>

Operations about remote_bandwidth_snapshots

## List Remote Bandwidth Snapshots

<a id="opIdGetRemoteBandwidthSnapshots"></a>

> Code samples

```bash
curl https://example.com/remote_bandwidth_snapshots \
  -H 'Accept: application/json'
```

`GET /remote_bandwidth_snapshots`

List Remote Bandwidth Snapshots

<h3 id="list-remote-bandwidth-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[logged_at]=desc`). Valid fields are `logged_at`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `logged_at`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `logged_at`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `logged_at`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `logged_at`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `logged_at`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `logged_at`.|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "logged_at": "2000-01-01T01:00:00Z",
    "remote_server_id": 1,
    "sync_bytes_received": 1,
    "sync_bytes_sent": 1
  }
]
```

<h3 id="list-remote-bandwidth-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of RemoteBandwidthSnapshots objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-remote-bandwidth-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RemoteBandwidthSnapshotEntity](#schemaremotebandwidthsnapshotentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-remoteservers">remote_servers</h1>

Operations about remote_servers

## List Remote Servers

<a id="opIdGetRemoteServers"></a>

> Code samples

```bash
curl https://example.com/remote_servers \
  -H 'Accept: application/json'
```

`GET /remote_servers`

List Remote Servers

<h3 id="list-remote-servers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "auth_account_name": "me@example.com",
    "auth_setup_link": "auth/:provider",
    "auth_status": "in_setup",
    "authentication_method": "password",
    "aws_access_key": "example",
    "azure_blob_storage_account": "storage-account-name",
    "azure_blob_storage_container": "container-name",
    "azure_blob_storage_sas_token": "storage-sas-token",
    "azure_files_storage_account": "storage-account-name",
    "azure_files_storage_sas_token": "storage-sas-token",
    "azure_files_storage_share_name": "share-name",
    "backblaze_b2_bucket": "my-bucket",
    "backblaze_b2_s3_endpoint": "s3.us-west-001.backblazeb2.com",
    "disabled": true,
    "enable_dedicated_ips": true,
    "filebase_access_key": "example",
    "filebase_bucket": "my-bucket",
    "files_agent_api_token": "example",
    "files_agent_permission_set": "read_write",
    "files_agent_root": "example",
    "google_cloud_storage_bucket": "my-bucket",
    "google_cloud_storage_project_id": "my-project",
    "hostname": "remote-server.com",
    "id": 1,
    "max_connections": 1,
    "name": "My Remote server",
    "one_drive_account_type": "personal",
    "pin_to_site_region": true,
    "pinned_region": "us-east-1",
    "port": 1,
    "rackspace_container": "my-container",
    "rackspace_region": "dfw",
    "rackspace_username": "rackspaceuser",
    "remote_home_path": "/home/user1",
    "s3_bucket": "my-bucket",
    "s3_compatible_access_key": "example",
    "s3_compatible_bucket": "my-bucket",
    "s3_compatible_endpoint": "mys3platform.com",
    "s3_compatible_region": "us-east-1",
    "s3_region": "us-east-1",
    "server_certificate": "require_match",
    "server_host_key": "[public key]",
    "server_type": "s3",
    "ssl": "if_available",
    "username": "user",
    "wasabi_access_key": "example",
    "wasabi_bucket": "my-bucket",
    "wasabi_region": "us-west-1"
  }
]
```

<h3 id="list-remote-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of RemoteServers objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-remote-servers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RemoteServerEntity](#schemaremoteserverentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Remote Server

<a id="opIdPostRemoteServers"></a>

> Code samples

```bash
curl https://example.com/remote_servers \
  -X POST \
  -H 'Accept: application/json' \
  -F 'aws_access_key=example' \
  -F 'aws_secret_key=string' \
  -F 'azure_blob_storage_access_key=string' \
  -F 'azure_blob_storage_account=storage-account-name' \
  -F 'azure_blob_storage_container=container-name' \
  -F 'azure_blob_storage_sas_token=storage-sas-token' \
  -F 'azure_files_storage_access_key=string' \
  -F 'azure_files_storage_account=storage-account-name' \
  -F 'azure_files_storage_sas_token=storage-sas-token' \
  -F 'azure_files_storage_share_name=share-name' \
  -F 'backblaze_b2_application_key=string' \
  -F 'backblaze_b2_bucket=my-bucket' \
  -F 'backblaze_b2_key_id=string' \
  -F 'backblaze_b2_s3_endpoint=s3.us-west-001.backblazeb2.com' \
  -F 'enable_dedicated_ips=true' \
  -F 'filebase_access_key=example' \
  -F 'filebase_bucket=my-bucket' \
  -F 'filebase_secret_key=string' \
  -F 'files_agent_permission_set=read_write' \
  -F 'files_agent_root=example' \
  -F 'google_cloud_storage_bucket=my-bucket' \
  -F 'google_cloud_storage_credentials_json=string' \
  -F 'google_cloud_storage_project_id=my-project' \
  -F 'hostname=remote-server.com' \
  -F 'max_connections=1' \
  -F 'name=My Remote server' \
  -F 'one_drive_account_type=personal' \
  -F 'password=string' \
  -F 'pin_to_site_region=true' \
  -F 'port=1' \
  -F 'private_key=string' \
  -F 'private_key_passphrase=string' \
  -F 'rackspace_api_key=string' \
  -F 'rackspace_container=my-container' \
  -F 'rackspace_region=dfw' \
  -F 'rackspace_username=rackspaceuser' \
  -F 'reset_authentication=true' \
  -F 's3_bucket=my-bucket' \
  -F 's3_compatible_access_key=example' \
  -F 's3_compatible_bucket=my-bucket' \
  -F 's3_compatible_endpoint=mys3platform.com' \
  -F 's3_compatible_region=us-east-1' \
  -F 's3_compatible_secret_key=string' \
  -F 's3_region=us-east-1' \
  -F 'server_certificate=require_match' \
  -F 'server_host_key=[public key]' \
  -F 'server_type=s3' \
  -F 'ssl=if_available' \
  -F 'ssl_certificate=string' \
  -F 'username=user' \
  -F 'wasabi_access_key=example' \
  -F 'wasabi_bucket=my-bucket' \
  -F 'wasabi_region=us-west-1' \
  -F 'wasabi_secret_key=string'
```

`POST /remote_servers`

Create Remote Server

> Body parameter

```yaml
aws_access_key: example
aws_secret_key: string
azure_blob_storage_access_key: string
azure_blob_storage_account: storage-account-name
azure_blob_storage_container: container-name
azure_blob_storage_sas_token: storage-sas-token
azure_files_storage_access_key: string
azure_files_storage_account: storage-account-name
azure_files_storage_sas_token: storage-sas-token
azure_files_storage_share_name: share-name
backblaze_b2_application_key: string
backblaze_b2_bucket: my-bucket
backblaze_b2_key_id: string
backblaze_b2_s3_endpoint: s3.us-west-001.backblazeb2.com
enable_dedicated_ips: true
filebase_access_key: example
filebase_bucket: my-bucket
filebase_secret_key: string
files_agent_permission_set: read_write
files_agent_root: example
google_cloud_storage_bucket: my-bucket
google_cloud_storage_credentials_json: string
google_cloud_storage_project_id: my-project
hostname: remote-server.com
max_connections: 1
name: My Remote server
one_drive_account_type: personal
password: string
pin_to_site_region: true
port: 1
private_key: string
private_key_passphrase: string
rackspace_api_key: string
rackspace_container: my-container
rackspace_region: dfw
rackspace_username: rackspaceuser
reset_authentication: true
s3_bucket: my-bucket
s3_compatible_access_key: example
s3_compatible_bucket: my-bucket
s3_compatible_endpoint: mys3platform.com
s3_compatible_region: us-east-1
s3_compatible_secret_key: string
s3_region: us-east-1
server_certificate: require_match
server_host_key: "[public key]"
server_type: s3
ssl: if_available
ssl_certificate: string
username: user
wasabi_access_key: example
wasabi_bucket: my-bucket
wasabi_region: us-west-1
wasabi_secret_key: string
```

<h3 id="create-remote-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» aws_access_key|body|string|false|AWS Access Key.|
|» aws_secret_key|body|string|false|AWS secret key.|
|» azure_blob_storage_access_key|body|string|false|Azure Blob Storage secret key.|
|» azure_blob_storage_account|body|string|false|Azure Blob Storage Account name|
|» azure_blob_storage_container|body|string|false|Azure Blob Storage Container name|
|» azure_blob_storage_sas_token|body|string|false|Shared Access Signature (SAS) token|
|» azure_files_storage_access_key|body|string|false|Azure File Storage access key.|
|» azure_files_storage_account|body|string|false|Azure File Storage Account name|
|» azure_files_storage_sas_token|body|string|false|Shared Access Signature (SAS) token|
|» azure_files_storage_share_name|body|string|false|Azure File Storage Share name|
|» backblaze_b2_application_key|body|string|false|Backblaze B2 Cloud Storage applicationKey.|
|» backblaze_b2_bucket|body|string|false|Backblaze B2 Cloud Storage Bucket name|
|» backblaze_b2_key_id|body|string|false|Backblaze B2 Cloud Storage keyID.|
|» backblaze_b2_s3_endpoint|body|string|false|Backblaze B2 Cloud Storage S3 Endpoint|
|» enable_dedicated_ips|body|boolean|false|`true` if remote server only accepts connections from dedicated IPs|
|» filebase_access_key|body|string|false|Filebase Access Key.|
|» filebase_bucket|body|string|false|Filebase Bucket name|
|» filebase_secret_key|body|string|false|Filebase secret key|
|» files_agent_permission_set|body|string|false|Local permissions for files agent. read_only, write_only, or read_write|
|» files_agent_root|body|string|false|Agent local root path|
|» google_cloud_storage_bucket|body|string|false|Google Cloud Storage bucket name|
|» google_cloud_storage_credentials_json|body|string|false|A JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey|
|» google_cloud_storage_project_id|body|string|false|Google Cloud Project ID|
|» hostname|body|string|false|Hostname or IP address|
|» max_connections|body|integer(int32)|false|Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).|
|» name|body|string|false|Internal name for your reference|
|» one_drive_account_type|body|string|false|Either personal or business_other account types|
|» password|body|string|false|Password if needed.|
|» pin_to_site_region|body|boolean|false|If true, we will ensure that all communications with this remote server are made through the primary region of the site.  This setting can also be overridden by a sitewide setting which will force it to true.|
|» port|body|integer(int32)|false|Port for remote server.  Not needed for S3.|
|» private_key|body|string|false|Private key if needed.|
|» private_key_passphrase|body|string|false|Passphrase for private key if needed.|
|» rackspace_api_key|body|string|false|Rackspace API key from the Rackspace Cloud Control Panel.|
|» rackspace_container|body|string|false|The name of the container (top level directory) where files will sync.|
|» rackspace_region|body|string|false|Three letter airport code for Rackspace region. See https://support.rackspace.com/how-to/about-regions/|
|» rackspace_username|body|string|false|Rackspace username used to login to the Rackspace Cloud Control Panel.|
|» reset_authentication|body|boolean|false|Reset authenticated account|
|» s3_bucket|body|string|false|S3 bucket name|
|» s3_compatible_access_key|body|string|false|S3-compatible Access Key.|
|» s3_compatible_bucket|body|string|false|S3-compatible Bucket name|
|» s3_compatible_endpoint|body|string|false|S3-compatible endpoint|
|» s3_compatible_region|body|string|false|S3-compatible endpoint|
|» s3_compatible_secret_key|body|string|false|S3-compatible secret key|
|» s3_region|body|string|false|S3 region|
|» server_certificate|body|string|false|Remote server certificate|
|» server_host_key|body|string|false|Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts|
|» server_type|body|string|false|Remote server type.|
|» ssl|body|string|false|Should we require SSL?|
|» ssl_certificate|body|string|false|SSL client certificate.|
|» username|body|string|false|Remote server username.  Not needed for S3 buckets.|
|» wasabi_access_key|body|string|false|Wasabi access key.|
|» wasabi_bucket|body|string|false|Wasabi Bucket name|
|» wasabi_region|body|string|false|Wasabi region|
|» wasabi_secret_key|body|string|false|Wasabi secret key.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» files_agent_permission_set|read_write|
|» files_agent_permission_set|read_only|
|» files_agent_permission_set|write_only|
|» one_drive_account_type|personal|
|» one_drive_account_type|business_other|
|» server_certificate|require_match|
|» server_certificate|allow_any|
|» server_type|ftp|
|» server_type|sftp|
|» server_type|s3|
|» server_type|google_cloud_storage|
|» server_type|webdav|
|» server_type|wasabi|
|» server_type|backblaze_b2|
|» server_type|one_drive|
|» server_type|rackspace|
|» server_type|box|
|» server_type|dropbox|
|» server_type|google_drive|
|» server_type|azure|
|» server_type|sharepoint|
|» server_type|s3_compatible|
|» server_type|azure_files|
|» server_type|files_agent|
|» server_type|filebase|
|» ssl|if_available|
|» ssl|require|
|» ssl|require_implicit|
|» ssl|never|

> Example responses

> 201 Response

```json
{
  "auth_account_name": "me@example.com",
  "auth_setup_link": "auth/:provider",
  "auth_status": "in_setup",
  "authentication_method": "password",
  "aws_access_key": "example",
  "azure_blob_storage_account": "storage-account-name",
  "azure_blob_storage_container": "container-name",
  "azure_blob_storage_sas_token": "storage-sas-token",
  "azure_files_storage_account": "storage-account-name",
  "azure_files_storage_sas_token": "storage-sas-token",
  "azure_files_storage_share_name": "share-name",
  "backblaze_b2_bucket": "my-bucket",
  "backblaze_b2_s3_endpoint": "s3.us-west-001.backblazeb2.com",
  "disabled": true,
  "enable_dedicated_ips": true,
  "filebase_access_key": "example",
  "filebase_bucket": "my-bucket",
  "files_agent_api_token": "example",
  "files_agent_permission_set": "read_write",
  "files_agent_root": "example",
  "google_cloud_storage_bucket": "my-bucket",
  "google_cloud_storage_project_id": "my-project",
  "hostname": "remote-server.com",
  "id": 1,
  "max_connections": 1,
  "name": "My Remote server",
  "one_drive_account_type": "personal",
  "pin_to_site_region": true,
  "pinned_region": "us-east-1",
  "port": 1,
  "rackspace_container": "my-container",
  "rackspace_region": "dfw",
  "rackspace_username": "rackspaceuser",
  "remote_home_path": "/home/user1",
  "s3_bucket": "my-bucket",
  "s3_compatible_access_key": "example",
  "s3_compatible_bucket": "my-bucket",
  "s3_compatible_endpoint": "mys3platform.com",
  "s3_compatible_region": "us-east-1",
  "s3_region": "us-east-1",
  "server_certificate": "require_match",
  "server_host_key": "[public key]",
  "server_type": "s3",
  "ssl": "if_available",
  "username": "user",
  "wasabi_access_key": "example",
  "wasabi_bucket": "my-bucket",
  "wasabi_region": "us-west-1"
}
```

<h3 id="create-remote-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The RemoteServers object.|[RemoteServerEntity](#schemaremoteserverentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Remote Server

<a id="opIdGetRemoteServersId"></a>

> Code samples

```bash
curl https://example.com/remote_servers/0 \
  -H 'Accept: application/json'
```

`GET /remote_servers/{id}`

Show Remote Server

<h3 id="show-remote-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Remote Server ID.|

> Example responses

> 200 Response

```json
{
  "auth_account_name": "me@example.com",
  "auth_setup_link": "auth/:provider",
  "auth_status": "in_setup",
  "authentication_method": "password",
  "aws_access_key": "example",
  "azure_blob_storage_account": "storage-account-name",
  "azure_blob_storage_container": "container-name",
  "azure_blob_storage_sas_token": "storage-sas-token",
  "azure_files_storage_account": "storage-account-name",
  "azure_files_storage_sas_token": "storage-sas-token",
  "azure_files_storage_share_name": "share-name",
  "backblaze_b2_bucket": "my-bucket",
  "backblaze_b2_s3_endpoint": "s3.us-west-001.backblazeb2.com",
  "disabled": true,
  "enable_dedicated_ips": true,
  "filebase_access_key": "example",
  "filebase_bucket": "my-bucket",
  "files_agent_api_token": "example",
  "files_agent_permission_set": "read_write",
  "files_agent_root": "example",
  "google_cloud_storage_bucket": "my-bucket",
  "google_cloud_storage_project_id": "my-project",
  "hostname": "remote-server.com",
  "id": 1,
  "max_connections": 1,
  "name": "My Remote server",
  "one_drive_account_type": "personal",
  "pin_to_site_region": true,
  "pinned_region": "us-east-1",
  "port": 1,
  "rackspace_container": "my-container",
  "rackspace_region": "dfw",
  "rackspace_username": "rackspaceuser",
  "remote_home_path": "/home/user1",
  "s3_bucket": "my-bucket",
  "s3_compatible_access_key": "example",
  "s3_compatible_bucket": "my-bucket",
  "s3_compatible_endpoint": "mys3platform.com",
  "s3_compatible_region": "us-east-1",
  "s3_region": "us-east-1",
  "server_certificate": "require_match",
  "server_host_key": "[public key]",
  "server_type": "s3",
  "ssl": "if_available",
  "username": "user",
  "wasabi_access_key": "example",
  "wasabi_bucket": "my-bucket",
  "wasabi_region": "us-west-1"
}
```

<h3 id="show-remote-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The RemoteServers object.|[RemoteServerEntity](#schemaremoteserverentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Remote Server

<a id="opIdDeleteRemoteServersId"></a>

> Code samples

```bash
curl https://example.com/remote_servers/0 \
  -X DELETE
```

`DELETE /remote_servers/{id}`

Delete Remote Server

<h3 id="delete-remote-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Remote Server ID.|

<h3 id="delete-remote-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Remote Server

<a id="opIdPatchRemoteServersId"></a>

> Code samples

```bash
curl https://example.com/remote_servers/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'aws_access_key=example' \
  -F 'aws_secret_key=string' \
  -F 'azure_blob_storage_access_key=string' \
  -F 'azure_blob_storage_account=storage-account-name' \
  -F 'azure_blob_storage_container=container-name' \
  -F 'azure_blob_storage_sas_token=storage-sas-token' \
  -F 'azure_files_storage_access_key=string' \
  -F 'azure_files_storage_account=storage-account-name' \
  -F 'azure_files_storage_sas_token=storage-sas-token' \
  -F 'azure_files_storage_share_name=share-name' \
  -F 'backblaze_b2_application_key=string' \
  -F 'backblaze_b2_bucket=my-bucket' \
  -F 'backblaze_b2_key_id=string' \
  -F 'backblaze_b2_s3_endpoint=s3.us-west-001.backblazeb2.com' \
  -F 'enable_dedicated_ips=true' \
  -F 'filebase_access_key=example' \
  -F 'filebase_bucket=my-bucket' \
  -F 'filebase_secret_key=string' \
  -F 'files_agent_permission_set=read_write' \
  -F 'files_agent_root=example' \
  -F 'google_cloud_storage_bucket=my-bucket' \
  -F 'google_cloud_storage_credentials_json=string' \
  -F 'google_cloud_storage_project_id=my-project' \
  -F 'hostname=remote-server.com' \
  -F 'max_connections=1' \
  -F 'name=My Remote server' \
  -F 'one_drive_account_type=personal' \
  -F 'password=string' \
  -F 'pin_to_site_region=true' \
  -F 'port=1' \
  -F 'private_key=string' \
  -F 'private_key_passphrase=string' \
  -F 'rackspace_api_key=string' \
  -F 'rackspace_container=my-container' \
  -F 'rackspace_region=dfw' \
  -F 'rackspace_username=rackspaceuser' \
  -F 'reset_authentication=true' \
  -F 's3_bucket=my-bucket' \
  -F 's3_compatible_access_key=example' \
  -F 's3_compatible_bucket=my-bucket' \
  -F 's3_compatible_endpoint=mys3platform.com' \
  -F 's3_compatible_region=us-east-1' \
  -F 's3_compatible_secret_key=string' \
  -F 's3_region=us-east-1' \
  -F 'server_certificate=require_match' \
  -F 'server_host_key=[public key]' \
  -F 'server_type=s3' \
  -F 'ssl=if_available' \
  -F 'ssl_certificate=string' \
  -F 'username=user' \
  -F 'wasabi_access_key=example' \
  -F 'wasabi_bucket=my-bucket' \
  -F 'wasabi_region=us-west-1' \
  -F 'wasabi_secret_key=string'
```

`PATCH /remote_servers/{id}`

Update Remote Server

> Body parameter

```yaml
aws_access_key: example
aws_secret_key: string
azure_blob_storage_access_key: string
azure_blob_storage_account: storage-account-name
azure_blob_storage_container: container-name
azure_blob_storage_sas_token: storage-sas-token
azure_files_storage_access_key: string
azure_files_storage_account: storage-account-name
azure_files_storage_sas_token: storage-sas-token
azure_files_storage_share_name: share-name
backblaze_b2_application_key: string
backblaze_b2_bucket: my-bucket
backblaze_b2_key_id: string
backblaze_b2_s3_endpoint: s3.us-west-001.backblazeb2.com
enable_dedicated_ips: true
filebase_access_key: example
filebase_bucket: my-bucket
filebase_secret_key: string
files_agent_permission_set: read_write
files_agent_root: example
google_cloud_storage_bucket: my-bucket
google_cloud_storage_credentials_json: string
google_cloud_storage_project_id: my-project
hostname: remote-server.com
max_connections: 1
name: My Remote server
one_drive_account_type: personal
password: string
pin_to_site_region: true
port: 1
private_key: string
private_key_passphrase: string
rackspace_api_key: string
rackspace_container: my-container
rackspace_region: dfw
rackspace_username: rackspaceuser
reset_authentication: true
s3_bucket: my-bucket
s3_compatible_access_key: example
s3_compatible_bucket: my-bucket
s3_compatible_endpoint: mys3platform.com
s3_compatible_region: us-east-1
s3_compatible_secret_key: string
s3_region: us-east-1
server_certificate: require_match
server_host_key: "[public key]"
server_type: s3
ssl: if_available
ssl_certificate: string
username: user
wasabi_access_key: example
wasabi_bucket: my-bucket
wasabi_region: us-west-1
wasabi_secret_key: string
```

<h3 id="update-remote-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Remote Server ID.|
|body|body|object|false|none|
|» aws_access_key|body|string|false|AWS Access Key.|
|» aws_secret_key|body|string|false|AWS secret key.|
|» azure_blob_storage_access_key|body|string|false|Azure Blob Storage secret key.|
|» azure_blob_storage_account|body|string|false|Azure Blob Storage Account name|
|» azure_blob_storage_container|body|string|false|Azure Blob Storage Container name|
|» azure_blob_storage_sas_token|body|string|false|Shared Access Signature (SAS) token|
|» azure_files_storage_access_key|body|string|false|Azure File Storage access key.|
|» azure_files_storage_account|body|string|false|Azure File Storage Account name|
|» azure_files_storage_sas_token|body|string|false|Shared Access Signature (SAS) token|
|» azure_files_storage_share_name|body|string|false|Azure File Storage Share name|
|» backblaze_b2_application_key|body|string|false|Backblaze B2 Cloud Storage applicationKey.|
|» backblaze_b2_bucket|body|string|false|Backblaze B2 Cloud Storage Bucket name|
|» backblaze_b2_key_id|body|string|false|Backblaze B2 Cloud Storage keyID.|
|» backblaze_b2_s3_endpoint|body|string|false|Backblaze B2 Cloud Storage S3 Endpoint|
|» enable_dedicated_ips|body|boolean|false|`true` if remote server only accepts connections from dedicated IPs|
|» filebase_access_key|body|string|false|Filebase Access Key.|
|» filebase_bucket|body|string|false|Filebase Bucket name|
|» filebase_secret_key|body|string|false|Filebase secret key|
|» files_agent_permission_set|body|string|false|Local permissions for files agent. read_only, write_only, or read_write|
|» files_agent_root|body|string|false|Agent local root path|
|» google_cloud_storage_bucket|body|string|false|Google Cloud Storage bucket name|
|» google_cloud_storage_credentials_json|body|string|false|A JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey|
|» google_cloud_storage_project_id|body|string|false|Google Cloud Project ID|
|» hostname|body|string|false|Hostname or IP address|
|» max_connections|body|integer(int32)|false|Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).|
|» name|body|string|false|Internal name for your reference|
|» one_drive_account_type|body|string|false|Either personal or business_other account types|
|» password|body|string|false|Password if needed.|
|» pin_to_site_region|body|boolean|false|If true, we will ensure that all communications with this remote server are made through the primary region of the site.  This setting can also be overridden by a sitewide setting which will force it to true.|
|» port|body|integer(int32)|false|Port for remote server.  Not needed for S3.|
|» private_key|body|string|false|Private key if needed.|
|» private_key_passphrase|body|string|false|Passphrase for private key if needed.|
|» rackspace_api_key|body|string|false|Rackspace API key from the Rackspace Cloud Control Panel.|
|» rackspace_container|body|string|false|The name of the container (top level directory) where files will sync.|
|» rackspace_region|body|string|false|Three letter airport code for Rackspace region. See https://support.rackspace.com/how-to/about-regions/|
|» rackspace_username|body|string|false|Rackspace username used to login to the Rackspace Cloud Control Panel.|
|» reset_authentication|body|boolean|false|Reset authenticated account|
|» s3_bucket|body|string|false|S3 bucket name|
|» s3_compatible_access_key|body|string|false|S3-compatible Access Key.|
|» s3_compatible_bucket|body|string|false|S3-compatible Bucket name|
|» s3_compatible_endpoint|body|string|false|S3-compatible endpoint|
|» s3_compatible_region|body|string|false|S3-compatible endpoint|
|» s3_compatible_secret_key|body|string|false|S3-compatible secret key|
|» s3_region|body|string|false|S3 region|
|» server_certificate|body|string|false|Remote server certificate|
|» server_host_key|body|string|false|Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts|
|» server_type|body|string|false|Remote server type.|
|» ssl|body|string|false|Should we require SSL?|
|» ssl_certificate|body|string|false|SSL client certificate.|
|» username|body|string|false|Remote server username.  Not needed for S3 buckets.|
|» wasabi_access_key|body|string|false|Wasabi access key.|
|» wasabi_bucket|body|string|false|Wasabi Bucket name|
|» wasabi_region|body|string|false|Wasabi region|
|» wasabi_secret_key|body|string|false|Wasabi secret key.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» files_agent_permission_set|read_write|
|» files_agent_permission_set|read_only|
|» files_agent_permission_set|write_only|
|» one_drive_account_type|personal|
|» one_drive_account_type|business_other|
|» server_certificate|require_match|
|» server_certificate|allow_any|
|» server_type|ftp|
|» server_type|sftp|
|» server_type|s3|
|» server_type|google_cloud_storage|
|» server_type|webdav|
|» server_type|wasabi|
|» server_type|backblaze_b2|
|» server_type|one_drive|
|» server_type|rackspace|
|» server_type|box|
|» server_type|dropbox|
|» server_type|google_drive|
|» server_type|azure|
|» server_type|sharepoint|
|» server_type|s3_compatible|
|» server_type|azure_files|
|» server_type|files_agent|
|» server_type|filebase|
|» ssl|if_available|
|» ssl|require|
|» ssl|require_implicit|
|» ssl|never|

> Example responses

> 200 Response

```json
{
  "auth_account_name": "me@example.com",
  "auth_setup_link": "auth/:provider",
  "auth_status": "in_setup",
  "authentication_method": "password",
  "aws_access_key": "example",
  "azure_blob_storage_account": "storage-account-name",
  "azure_blob_storage_container": "container-name",
  "azure_blob_storage_sas_token": "storage-sas-token",
  "azure_files_storage_account": "storage-account-name",
  "azure_files_storage_sas_token": "storage-sas-token",
  "azure_files_storage_share_name": "share-name",
  "backblaze_b2_bucket": "my-bucket",
  "backblaze_b2_s3_endpoint": "s3.us-west-001.backblazeb2.com",
  "disabled": true,
  "enable_dedicated_ips": true,
  "filebase_access_key": "example",
  "filebase_bucket": "my-bucket",
  "files_agent_api_token": "example",
  "files_agent_permission_set": "read_write",
  "files_agent_root": "example",
  "google_cloud_storage_bucket": "my-bucket",
  "google_cloud_storage_project_id": "my-project",
  "hostname": "remote-server.com",
  "id": 1,
  "max_connections": 1,
  "name": "My Remote server",
  "one_drive_account_type": "personal",
  "pin_to_site_region": true,
  "pinned_region": "us-east-1",
  "port": 1,
  "rackspace_container": "my-container",
  "rackspace_region": "dfw",
  "rackspace_username": "rackspaceuser",
  "remote_home_path": "/home/user1",
  "s3_bucket": "my-bucket",
  "s3_compatible_access_key": "example",
  "s3_compatible_bucket": "my-bucket",
  "s3_compatible_endpoint": "mys3platform.com",
  "s3_compatible_region": "us-east-1",
  "s3_region": "us-east-1",
  "server_certificate": "require_match",
  "server_host_key": "[public key]",
  "server_type": "s3",
  "ssl": "if_available",
  "username": "user",
  "wasabi_access_key": "example",
  "wasabi_bucket": "my-bucket",
  "wasabi_region": "us-west-1"
}
```

<h3 id="update-remote-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The RemoteServers object.|[RemoteServerEntity](#schemaremoteserverentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)

<a id="opIdGetRemoteServersIdConfigurationFile"></a>

> Code samples

```bash
curl https://example.com/remote_servers/0/configuration_file \
  -H 'Accept: application/json'
```

`GET /remote_servers/{id}/configuration_file`

Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)

<h3 id="download-configuration-file-required-for-some-remote-server-integrations-such-as-the-filescom-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Remote Server ID.|

> Example responses

> 200 Response

```json
{
  "api_token": "example",
  "config_version": "example",
  "hostname": "example",
  "id": 1,
  "permission_set": "full",
  "port": 1,
  "private_key": "example",
  "public_key": "example",
  "root": "example",
  "server_host_key": "example",
  "status": "example",
  "subdomain": "example"
}
```

<h3 id="download-configuration-file-required-for-some-remote-server-integrations-such-as-the-filescom-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The RemoteServers object.|[RemoteServerConfigurationFileEntity](#schemaremoteserverconfigurationfileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

<a id="opIdPostRemoteServersIdConfigurationFile"></a>

> Code samples

```bash
curl https://example.com/remote_servers/0/configuration_file \
  -X POST \
  -H 'Accept: application/json' \
  -F 'api_token=example' \
  -F 'config_version=example' \
  -F 'hostname=example' \
  -F 'permission_set=full' \
  -F 'port=1' \
  -F 'private_key=example' \
  -F 'public_key=example' \
  -F 'root=example' \
  -F 'server_host_key=example' \
  -F 'status=example' \
  -F 'subdomain=example'
```

`POST /remote_servers/{id}/configuration_file`

Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

> Body parameter

```yaml
api_token: example
config_version: example
hostname: example
permission_set: full
port: 1
private_key: example
public_key: example
root: example
server_host_key: example
status: example
subdomain: example
```

<h3 id="post-local-changes-check-in-and-download-configuration-file-used-by-some-remote-server-integrations-such-as-the-filescom-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Remote Server ID.|
|body|body|object|false|none|
|» api_token|body|string|false|Files Agent API Token|
|» config_version|body|string|false|agent config version|
|» hostname|body|string|false|none|
|» permission_set|body|string|false|none|
|» port|body|integer(int32)|false|Incoming port for files agent connections|
|» private_key|body|string|false|private key|
|» public_key|body|string|false|public key|
|» root|body|string|false|Agent local root path|
|» server_host_key|body|string|false|none|
|» status|body|string|false|either running or shutdown|
|» subdomain|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "api_token": "example",
  "config_version": "example",
  "hostname": "example",
  "id": 1,
  "permission_set": "full",
  "port": 1,
  "private_key": "example",
  "public_key": "example",
  "root": "example",
  "server_host_key": "example",
  "status": "example",
  "subdomain": "example"
}
```

<h3 id="post-local-changes-check-in-and-download-configuration-file-used-by-some-remote-server-integrations-such-as-the-filescom-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The RemoteServers object.|[RemoteServerConfigurationFileEntity](#schemaremoteserverconfigurationfileentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-requests">requests</h1>

Operations about requests

## List Requests

<a id="opIdGetRequests"></a>

> Code samples

```bash
curl https://example.com/requests \
  -H 'Accept: application/json'
```

`GET /requests`

List Requests

<h3 id="list-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[destination]=desc`). Valid fields are `destination`.|
|mine|query|boolean|false|Only show requests of the current user?  (Defaults to true if current user is not a site admin.)|
|path|query|string|false|Path to show requests for.  If omitted, shows all paths. Send `/` to represent the root directory.|

> Example responses

> 200 Response

```json
[
  {
    "automation_id": "example",
    "destination": "example",
    "id": 1,
    "path": "example",
    "source": "example",
    "user_display_name": "example"
  }
]
```

<h3 id="list-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Requests objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestEntity](#schemarequestentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Request

<a id="opIdPostRequests"></a>

> Code samples

```bash
curl https://example.com/requests \
  -X POST \
  -H 'Accept: application/json' \
  -F 'destination=string' \
  -F 'group_ids=string' \
  -F 'path=string' \
  -F 'user_ids=string'
```

`POST /requests`

Create Request

> Body parameter

```yaml
destination: string
group_ids: string
path: string
user_ids: string
```

<h3 id="create-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» destination|body|string|true|Destination filename (without extension) to request.|
|» group_ids|body|string|false|A list of group IDs to request the file from. If sent as a string, it should be comma-delimited.|
|» path|body|string|true|Folder path on which to request the file.|
|» user_ids|body|string|false|A list of user IDs to request the file from. If sent as a string, it should be comma-delimited.|

> Example responses

> 201 Response

```json
{
  "automation_id": "example",
  "destination": "example",
  "id": 1,
  "path": "example",
  "source": "example",
  "user_display_name": "example"
}
```

<h3 id="create-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Requests object.|[RequestEntity](#schemarequestentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## List Requests

<a id="opIdGetRequestsFoldersPath"></a>

> Code samples

```bash
curl https://example.com/requests/folders/string \
  -H 'Accept: application/json'
```

`GET /requests/folders/{path}`

List Requests

<h3 id="list-requests-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[destination]=desc`). Valid fields are `destination`.|
|mine|query|boolean|false|Only show requests of the current user?  (Defaults to true if current user is not a site admin.)|
|path|path|string|true|Path to show requests for.  If omitted, shows all paths. Send `/` to represent the root directory.|

> Example responses

> 200 Response

```json
[
  {
    "automation_id": "example",
    "destination": "example",
    "id": 1,
    "path": "example",
    "source": "example",
    "user_display_name": "example"
  }
]
```

<h3 id="list-requests-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Requests objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-requests-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestEntity](#schemarequestentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Request

<a id="opIdDeleteRequestsId"></a>

> Code samples

```bash
curl https://example.com/requests/0 \
  -X DELETE
```

`DELETE /requests/{id}`

Delete Request

<h3 id="delete-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Request ID.|

<h3 id="delete-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-sessions">sessions</h1>

Operations about sessions

## Create user session (log in)

<a id="opIdPostSessions"></a>

> Code samples

```bash
curl https://example.com/sessions \
  -X POST \
  -H 'Accept: application/json' \
  -F 'otp=123456' \
  -F 'partial_session_id=string' \
  -F 'password=password' \
  -F 'username=username'
```

`POST /sessions`

Create user session (log in)

> Body parameter

```yaml
otp: "123456"
partial_session_id: string
password: password
username: username
```

<h3 id="create-user-session-log-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» otp|body|string|false|If this user has a 2FA device, provide its OTP or code here.|
|» partial_session_id|body|string|false|Identifier for a partially-completed login|
|» password|body|string|false|Password for sign in|
|» username|body|string|false|Username to sign in as|

> Example responses

> 201 Response

```json
{
  "id": "60525f92e859c4c3d74cb02fd176b1525901b525",
  "language": "en",
  "read_only": true,
  "sftp_insecure_ciphers": true
}
```

<h3 id="create-user-session-log-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The Sessions object.|[SessionEntity](#schemasessionentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete user session (log out)

<a id="opIdDeleteSessions"></a>

> Code samples

```bash
curl https://example.com/sessions \
  -X DELETE
```

`DELETE /sessions`

Delete user session (log out)

<h3 id="delete-user-session-log-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-settingschanges">settings_changes</h1>

Operations about settings_changes

## List Settings Changes

<a id="opIdGetSettingsChanges"></a>

> Code samples

```bash
curl https://example.com/settings_changes \
  -H 'Accept: application/json'
```

`GET /settings_changes`

List Settings Changes

<h3 id="list-settings-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[api_key_id]=desc`). Valid fields are `api_key_id`, `created_at` or `user_id`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `api_key_id` and `user_id`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `api_key_id` and `user_id`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `api_key_id` and `user_id`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `api_key_id` and `user_id`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `api_key_id` and `user_id`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `api_key_id` and `user_id`.|

> Example responses

> 200 Response

```json
[
  {
    "changes": [
      "example"
    ],
    "created_at": "2000-01-01T01:00:00Z",
    "user_id": 1,
    "user_is_files_support": true,
    "username": "some_user"
  }
]
```

<h3 id="list-settings-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of SettingsChanges objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-settings-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SettingsChangeEntity](#schemasettingschangeentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-sftphostkeys">sftp_host_keys</h1>

Operations about sftp_host_keys

## List Sftp Host Keys

<a id="opIdGetSftpHostKeys"></a>

> Code samples

```bash
curl https://example.com/sftp_host_keys \
  -H 'Accept: application/json'
```

`GET /sftp_host_keys`

List Sftp Host Keys

<h3 id="list-sftp-host-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "fingerprint_md5": "example",
    "fingerprint_sha256": "example",
    "id": 1,
    "name": "example"
  }
]
```

<h3 id="list-sftp-host-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of SftpHostKeys objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-sftp-host-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SftpHostKeyEntity](#schemasftphostkeyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Sftp Host Key

<a id="opIdPostSftpHostKeys"></a>

> Code samples

```bash
curl https://example.com/sftp_host_keys \
  -X POST \
  -H 'Accept: application/json' \
  -F 'name=string' \
  -F 'private_key=string'
```

`POST /sftp_host_keys`

Create Sftp Host Key

> Body parameter

```yaml
name: string
private_key: string
```

<h3 id="create-sftp-host-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» name|body|string|false|The friendly name of this SFTP Host Key.|
|» private_key|body|string|false|The private key data.|

> Example responses

> 201 Response

```json
{
  "fingerprint_md5": "example",
  "fingerprint_sha256": "example",
  "id": 1,
  "name": "example"
}
```

<h3 id="create-sftp-host-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The SftpHostKeys object.|[SftpHostKeyEntity](#schemasftphostkeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show Sftp Host Key

<a id="opIdGetSftpHostKeysId"></a>

> Code samples

```bash
curl https://example.com/sftp_host_keys/0 \
  -H 'Accept: application/json'
```

`GET /sftp_host_keys/{id}`

Show Sftp Host Key

<h3 id="show-sftp-host-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Sftp Host Key ID.|

> Example responses

> 200 Response

```json
{
  "fingerprint_md5": "example",
  "fingerprint_sha256": "example",
  "id": 1,
  "name": "example"
}
```

<h3 id="show-sftp-host-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The SftpHostKeys object.|[SftpHostKeyEntity](#schemasftphostkeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Sftp Host Key

<a id="opIdDeleteSftpHostKeysId"></a>

> Code samples

```bash
curl https://example.com/sftp_host_keys/0 \
  -X DELETE
```

`DELETE /sftp_host_keys/{id}`

Delete Sftp Host Key

<h3 id="delete-sftp-host-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Sftp Host Key ID.|

<h3 id="delete-sftp-host-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Sftp Host Key

<a id="opIdPatchSftpHostKeysId"></a>

> Code samples

```bash
curl https://example.com/sftp_host_keys/0 \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'name=string' \
  -F 'private_key=string'
```

`PATCH /sftp_host_keys/{id}`

Update Sftp Host Key

> Body parameter

```yaml
name: string
private_key: string
```

<h3 id="update-sftp-host-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Sftp Host Key ID.|
|body|body|object|false|none|
|» name|body|string|false|The friendly name of this SFTP Host Key.|
|» private_key|body|string|false|The private key data.|

> Example responses

> 200 Response

```json
{
  "fingerprint_md5": "example",
  "fingerprint_sha256": "example",
  "id": 1,
  "name": "example"
}
```

<h3 id="update-sftp-host-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The SftpHostKeys object.|[SftpHostKeyEntity](#schemasftphostkeyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-ssostrategies">sso_strategies</h1>

Operations about sso_strategies

## List Sso Strategies

<a id="opIdGetSsoStrategies"></a>

> Code samples

```bash
curl https://example.com/sso_strategies \
  -H 'Accept: application/json'
```

`GET /sso_strategies`

List Sso Strategies

<h3 id="list-sso-strategies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "deprovision_behavior": "disable",
    "deprovision_groups": true,
    "deprovision_users": true,
    "enabled": true,
    "id": 1,
    "label": "My Corporate SSO Provider",
    "ldap_base_dn": "example",
    "ldap_domain": "mysite.com",
    "ldap_host": "ldap.site.com",
    "ldap_host_2": "ldap2.site.com",
    "ldap_host_3": "ldap3.site.com",
    "ldap_port": 1,
    "ldap_secure": true,
    "ldap_username": "[ldap username]",
    "ldap_username_field": "sAMAccountName",
    "logo_url": "https://mysite.files.com/.../logo.png",
    "protocol": "oauth2",
    "provider": "okta",
    "provision_attachments_permission": true,
    "provision_company": "ACME Corp.",
    "provision_dav_permission": true,
    "provision_email_signup_groups": "Employees",
    "provision_ftp_permission": true,
    "provision_group_default": "Employees",
    "provision_group_exclusion": "Employees",
    "provision_group_inclusion": "Employees",
    "provision_group_required": "example",
    "provision_groups": true,
    "provision_sftp_permission": true,
    "provision_site_admin_groups": "Employees",
    "provision_time_zone": "Eastern Time (US & Canada)",
    "provision_users": true,
    "saml_provider_cert_fingerprint": "example",
    "saml_provider_issuer_url": "example",
    "saml_provider_metadata_content": "example",
    "saml_provider_metadata_url": "example",
    "saml_provider_slo_target_url": "example",
    "saml_provider_sso_target_url": "example",
    "scim_authentication_method": "example",
    "scim_oauth_access_token": "example",
    "scim_oauth_access_token_expires_at": "example",
    "scim_username": "example",
    "subdomain": "my-site"
  }
]
```

<h3 id="list-sso-strategies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of SsoStrategies objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-sso-strategies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SsoStrategyEntity](#schemassostrategyentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Show Sso Strategy

<a id="opIdGetSsoStrategiesId"></a>

> Code samples

```bash
curl https://example.com/sso_strategies/0 \
  -H 'Accept: application/json'
```

`GET /sso_strategies/{id}`

Show Sso Strategy

<h3 id="show-sso-strategy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Sso Strategy ID.|

> Example responses

> 200 Response

```json
{
  "deprovision_behavior": "disable",
  "deprovision_groups": true,
  "deprovision_users": true,
  "enabled": true,
  "id": 1,
  "label": "My Corporate SSO Provider",
  "ldap_base_dn": "example",
  "ldap_domain": "mysite.com",
  "ldap_host": "ldap.site.com",
  "ldap_host_2": "ldap2.site.com",
  "ldap_host_3": "ldap3.site.com",
  "ldap_port": 1,
  "ldap_secure": true,
  "ldap_username": "[ldap username]",
  "ldap_username_field": "sAMAccountName",
  "logo_url": "https://mysite.files.com/.../logo.png",
  "protocol": "oauth2",
  "provider": "okta",
  "provision_attachments_permission": true,
  "provision_company": "ACME Corp.",
  "provision_dav_permission": true,
  "provision_email_signup_groups": "Employees",
  "provision_ftp_permission": true,
  "provision_group_default": "Employees",
  "provision_group_exclusion": "Employees",
  "provision_group_inclusion": "Employees",
  "provision_group_required": "example",
  "provision_groups": true,
  "provision_sftp_permission": true,
  "provision_site_admin_groups": "Employees",
  "provision_time_zone": "Eastern Time (US & Canada)",
  "provision_users": true,
  "saml_provider_cert_fingerprint": "example",
  "saml_provider_issuer_url": "example",
  "saml_provider_metadata_content": "example",
  "saml_provider_metadata_url": "example",
  "saml_provider_slo_target_url": "example",
  "saml_provider_sso_target_url": "example",
  "scim_authentication_method": "example",
  "scim_oauth_access_token": "example",
  "scim_oauth_access_token_expires_at": "example",
  "scim_username": "example",
  "subdomain": "my-site"
}
```

<h3 id="show-sso-strategy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The SsoStrategies object.|[SsoStrategyEntity](#schemassostrategyentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Synchronize provisioning data with the SSO remote server.

<a id="opIdPostSsoStrategiesIdSync"></a>

> Code samples

```bash
curl https://example.com/sso_strategies/0/sync \
  -X POST
```

`POST /sso_strategies/{id}/sync`

Synchronize provisioning data with the SSO remote server.

<h3 id="synchronize-provisioning-data-with-the-sso-remote-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|Sso Strategy ID.|

<h3 id="synchronize-provisioning-data-with-the-sso-remote-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-styles">styles</h1>

Operations about styles

## Show Style

<a id="opIdGetStylesPath"></a>

> Code samples

```bash
curl https://example.com/styles/string \
  -H 'Accept: application/json'
```

`GET /styles/{path}`

Show Style

<h3 id="show-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Style path.|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "logo": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "path": "example",
  "thumbnail": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  }
}
```

<h3 id="show-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Styles object.|[StyleEntity](#schemastyleentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Style

<a id="opIdDeleteStylesPath"></a>

> Code samples

```bash
curl https://example.com/styles/string \
  -X DELETE
```

`DELETE /styles/{path}`

Delete Style

<h3 id="delete-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Style path.|

<h3 id="delete-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Style

<a id="opIdPatchStylesPath"></a>

> Code samples

```bash
curl https://example.com/styles/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -F 'file=@/path/to/file'
```

`PATCH /styles/{path}`

Update Style

> Body parameter

```yaml
file: string
```

<h3 id="update-style-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Style path.|
|body|body|object|true|none|
|» file|body|string(binary)|true|Logo for custom branding.|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "logo": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "path": "example",
  "thumbnail": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  }
}
```

<h3 id="update-style-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Styles object.|[StyleEntity](#schemastyleentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-usagesnapshots">usage_snapshots</h1>

Operations about usage_snapshots

## List Usage Snapshots

<a id="opIdGetUsageSnapshots"></a>

> Code samples

```bash
curl https://example.com/usage_snapshots \
  -H 'Accept: application/json'
```

`GET /usage_snapshots`

List Usage Snapshots

<h3 id="list-usage-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "bytes_sent": 1,
    "current_storage": 1,
    "deleted_files_counted_in_minimum": 1,
    "deleted_files_storage": 1,
    "end_at": "2000-01-01T01:00:00Z",
    "high_water_storage": 1,
    "high_water_user_count": 1,
    "id": 1,
    "root_storage": 1,
    "start_at": "2000-01-01T01:00:00Z",
    "sync_bytes_received": 1,
    "sync_bytes_sent": 1,
    "total_billable_transfer_usage": 1,
    "total_billable_usage": 1,
    "usage_by_top_level_dir": {
      "key": "example value"
    }
  }
]
```

<h3 id="list-usage-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of UsageSnapshots objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-usage-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UsageSnapshotEntity](#schemausagesnapshotentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-usagedailysnapshots">usage_daily_snapshots</h1>

Operations about usage_daily_snapshots

## List Usage Daily Snapshots

<a id="opIdGetUsageDailySnapshots"></a>

> Code samples

```bash
curl https://example.com/usage_daily_snapshots \
  -H 'Accept: application/json'
```

`GET /usage_daily_snapshots`

List Usage Daily Snapshots

<h3 id="list-usage-daily-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|
|sort_by|query|object|false|If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[date]=desc`). Valid fields are `date` and `usage_snapshot_id`.|
|filter|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `date` and `usage_snapshot_id`. Valid field combinations are `[ usage_snapshot_id, date ]`.|
|filter_gt|query|object|false|If set, return records where the specified field is greater than the supplied value. Valid fields are `date` and `usage_snapshot_id`. Valid field combinations are `[ usage_snapshot_id, date ]`.|
|filter_gteq|query|object|false|If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `date` and `usage_snapshot_id`. Valid field combinations are `[ usage_snapshot_id, date ]`.|
|filter_like|query|object|false|If set, return records where the specified field is equal to the supplied value. Valid fields are `date` and `usage_snapshot_id`. Valid field combinations are `[ usage_snapshot_id, date ]`.|
|filter_lt|query|object|false|If set, return records where the specified field is less than the supplied value. Valid fields are `date` and `usage_snapshot_id`. Valid field combinations are `[ usage_snapshot_id, date ]`.|
|filter_lteq|query|object|false|If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `date` and `usage_snapshot_id`. Valid field combinations are `[ usage_snapshot_id, date ]`.|

> Example responses

> 200 Response

```json
[
  {
    "api_usage_available": true,
    "current_storage": 1,
    "date": "2000-01-01T01:00:00Z",
    "deleted_files_counted_in_minimum": 1,
    "deleted_files_storage": 1,
    "id": 1,
    "read_api_usage": 1,
    "root_storage": 1,
    "usage_by_top_level_dir": {
      "key": "example value"
    },
    "user_count": 1,
    "write_api_usage": 1
  }
]
```

<h3 id="list-usage-daily-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of UsageDailySnapshots objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-usage-daily-snapshots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UsageDailySnapshotEntity](#schemausagedailysnapshotentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-usercipheruses">user_cipher_uses</h1>

Operations about user_cipher_uses

## List User Cipher Uses

<a id="opIdGetUserCipherUses"></a>

> Code samples

```bash
curl https://example.com/user_cipher_uses \
  -H 'Accept: application/json'
```

`GET /user_cipher_uses`

List User Cipher Uses

<h3 id="list-user-cipher-uses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|query|integer(int32)|false|User ID.  Provide a value of `0` to operate the current session's user.|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2000-01-01T01:00:00Z",
    "id": 1,
    "interface": "restapi",
    "protocol_cipher": "TLSv1.2; ECDHE-RSA-AES256-GCM-SHA384",
    "updated_at": "2000-01-01T01:00:00Z",
    "user_id": 1
  }
]
```

<h3 id="list-user-cipher-uses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of UserCipherUses objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-user-cipher-uses-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserCipherUseEntity](#schemausercipheruseentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-userrequests">user_requests</h1>

Operations about user_requests

## List User Requests

<a id="opIdGetUserRequests"></a>

> Code samples

```bash
curl https://example.com/user_requests \
  -H 'Accept: application/json'
```

`GET /user_requests`

List User Requests

<h3 id="list-user-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.|
|per_page|query|integer(int32)|false|Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).|

> Example responses

> 200 Response

```json
[
  {
    "details": "Changed Departments",
    "email": "example",
    "id": 1,
    "name": "John Doe"
  }
]
```

<h3 id="list-user-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of UserRequests objects.|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<h3 id="list-user-requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserRequestEntity](#schemauserrequestentity)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create User Request

<a id="opIdPostUserRequests"></a>

> Code samples

```bash
curl https://example.com/user_requests \
  -X POST \
  -H 'Accept: application/json' \
  -F 'details=string' \
  -F 'email=string' \
  -F 'name=string'
```

`POST /user_requests`

Create User Request

> Body parameter

```yaml
details: string
email: string
name: string
```

<h3 id="create-user-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» details|body|string|true|Details of the user request|
|» email|body|string|true|Email of user requested|
|» name|body|string|true|Name of user requested|

> Example responses

> 201 Response

```json
{
  "details": "Changed Departments",
  "email": "example",
  "id": 1,
  "name": "John Doe"
}
```

<h3 id="create-user-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The UserRequests object.|[UserRequestEntity](#schemauserrequestentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Show User Request

<a id="opIdGetUserRequestsId"></a>

> Code samples

```bash
curl https://example.com/user_requests/0 \
  -H 'Accept: application/json'
```

`GET /user_requests/{id}`

Show User Request

<h3 id="show-user-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User Request ID.|

> Example responses

> 200 Response

```json
{
  "details": "Changed Departments",
  "email": "example",
  "id": 1,
  "name": "John Doe"
}
```

<h3 id="show-user-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The UserRequests object.|[UserRequestEntity](#schemauserrequestentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete User Request

<a id="opIdDeleteUserRequestsId"></a>

> Code samples

```bash
curl https://example.com/user_requests/0 \
  -X DELETE
```

`DELETE /user_requests/{id}`

Delete User Request

<h3 id="delete-user-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int32)|true|User Request ID.|

<h3 id="delete-user-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No body.|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filescom-api-webhooktests">webhook_tests</h1>

Operations about webhook_tests

## Create Webhook Test

<a id="opIdPostWebhookTests"></a>

> Code samples

```bash
curl https://example.com/webhook_tests \
  -X POST \
  -H 'Accept: application/json' \
  -F 'action=test' \
  -F 'body={"test-param":"testvalue"}' \
  -F 'encoding=RAW' \
  -F 'file_as_body=true' \
  -F 'file_form_field=upload_file_data' \
  -F 'headers={"x-test-header":"testvalue"}' \
  -F 'method=GET' \
  -F 'raw_body=test body' \
  -F 'url=https://www.site.com/...'
```

`POST /webhook_tests`

Create Webhook Test

> Body parameter

```yaml
action: test
body:
  test-param: testvalue
encoding: RAW
file_as_body: true
file_form_field: upload_file_data
headers:
  x-test-header: testvalue
method: GET
raw_body: test body
url: "https://www.site.com/..."
```

<h3 id="create-webhook-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» action|body|string|false|action for test body|
|» body|body|object|false|Additional body parameters.|
|» encoding|body|string|false|HTTP encoding method.  Can be JSON, XML, or RAW (form data).|
|» file_as_body|body|boolean|false|Send the file data as the request body?|
|» file_form_field|body|string|false|Send the file data as a named parameter in the request POST body|
|» headers|body|object|false|Additional request headers.|
|» method|body|string|false|HTTP method(GET or POST).|
|» raw_body|body|string|false|raw body text|
|» url|body|string|true|URL for testing the webhook.|

> Example responses

> 201 Response

```json
{
  "code": 200,
  "data": {
    "dynamic": {}
  },
  "message": "",
  "status": "",
  "success": true
}
```

<h3 id="create-webhook-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The WebhookTests object.|[WebhookTestEntity](#schemawebhooktestentity)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|409|Conflict|Conflict|None|
|412|Precondition Failed|Precondition Failed|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|423|Locked|Locked|None|
|429|Too Many Requests|Too Many Requests|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccountLineItemEntity">AccountLineItemEntity</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlineitementity"></a>
<a id="schema_AccountLineItemEntity"></a>
<a id="tocSaccountlineitementity"></a>
<a id="tocsaccountlineitementity"></a>

```json
{
  "amount": 1,
  "balance": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "currency": "USD",
  "download_uri": "https://url...",
  "id": 1,
  "invoice_line_items": [
    null
  ],
  "method": "paypal",
  "payment_line_items": [
    null
  ],
  "payment_reversed_at": "2000-01-01T01:00:00Z",
  "payment_type": "example",
  "site_name": "My Site",
  "type": "invoice",
  "updated_at": "2000-01-01T01:00:00Z"
}
```

List Payments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|Line item amount|
|balance|number(double)|false|none|Line item balance|
|created_at|string(date-time)|false|none|Line item created at|
|currency|string|false|none|Line item currency|
|download_uri|string|false|none|Line item download uri|
|id|integer(int32)|false|none|Line item Id|
|invoice_line_items|[[InvoiceLineItemEntity](#schemainvoicelineitementity)]|false|none|Associated invoice line items|
|method|string|false|none|Line item payment method|
|payment_line_items|[[PaymentLineItemEntity](#schemapaymentlineitementity)]|false|none|Associated payment line items|
|payment_reversed_at|string(date-time)|false|none|Date/time payment was reversed if applicable|
|payment_type|string|false|none|Type of payment if applicable|
|site_name|string|false|none|Site name this line item is for|
|type|string|false|none|Type of line item, either payment or invoice|
|updated_at|string(date-time)|false|none|Line item updated at|

<h2 id="tocS_ActionEntity">ActionEntity</h2>
<!-- backwards compatibility -->
<a id="schemaactionentity"></a>
<a id="schema_ActionEntity"></a>
<a id="tocSactionentity"></a>
<a id="tocsactionentity"></a>

```json
{
  "action": "create",
  "destination": "/to_path",
  "display": "Actual text of the action here.",
  "failure_type": "none",
  "id": 1,
  "interface": "web",
  "ip": "192.283.128.182",
  "path": "path",
  "source": "/from_path",
  "targets": [],
  "user_id": 1,
  "username": "user",
  "when": "2000-01-01T01:00:00Z"
}
```

List site full action history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Type of action|
|destination|string|false|none|The destination path for this action, if applicable|
|display|string|false|none|Friendly displayed output|
|failure_type|string|false|none|Failure type.  If action was a user login or session failure, why did it fail?|
|id|integer(int32)|false|none|Action ID|
|interface|string|false|none|Interface on which this action occurred.|
|ip|string|false|none|IP Address that performed this action|
|path|string|false|none|Path|
|source|string|false|none|The source path for this action, if applicable|
|targets|[object]|false|none|Targets|
|user_id|integer(int32)|false|none|User ID|
|username|string|false|none|Username|
|when|string(date-time)|false|none|Action occurrence date/time|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create|
|action|read|
|action|update|
|action|destroy|
|action|move|
|action|login|
|action|failedlogin|
|action|copy|
|action|user_create|
|action|user_update|
|action|user_destroy|
|action|group_create|
|action|group_update|
|action|group_destroy|
|action|permission_create|
|action|permission_destroy|
|action|api_key_create|
|action|api_key_update|
|action|api_key_destroy|
|failure_type|expired_trial|
|failure_type|account_overdue|
|failure_type|locked_out|
|failure_type|ip_mismatch|
|failure_type|password_mismatch|
|failure_type|site_mismatch|
|failure_type|username_not_found|
|failure_type|none|
|failure_type|no_ftp_permission|
|failure_type|no_web_permission|
|failure_type|no_directory|
|failure_type|errno_enoent|
|failure_type|no_sftp_permission|
|failure_type|no_dav_permission|
|failure_type|no_restapi_permission|
|failure_type|key_mismatch|
|failure_type|region_mismatch|
|failure_type|expired_access|
|failure_type|desktop_ip_mismatch|
|failure_type|desktop_api_key_not_used_quickly_enough|
|failure_type|disabled|
|failure_type|country_mismatch|
|interface|web|
|interface|ftp|
|interface|robot|
|interface|jsapi|
|interface|webdesktopapi|
|interface|sftp|
|interface|dav|
|interface|desktop|
|interface|restapi|
|interface|scim|
|interface|office|
|interface|mobile|
|interface|as2|
|interface|inbound_email|
|interface|remote|

<h2 id="tocS_ActionNotificationExportEntity">ActionNotificationExportEntity</h2>
<!-- backwards compatibility -->
<a id="schemaactionnotificationexportentity"></a>
<a id="schema_ActionNotificationExportEntity"></a>
<a id="tocSactionnotificationexportentity"></a>
<a id="tocsactionnotificationexportentity"></a>

```json
{
  "end_at": "2000-01-01T01:00:00Z",
  "export_version": "example",
  "id": 1,
  "query_folder": "MyFolder",
  "query_message": "Connection Refused",
  "query_path": "MyFile.txt",
  "query_request_method": "GET",
  "query_request_url": "http://example.com/webhook",
  "query_status": "200",
  "query_success": true,
  "results_url": "https://files.com/action_notification_results.csv",
  "start_at": "2000-01-01T01:00:00Z",
  "status": "ready"
}
```

Show Action Notification Export

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_at|string(date-time)|false|none|End date/time of export range.|
|export_version|string|false|none|Version of the underlying records for the export.|
|id|integer(int32)|false|none|History Export ID|
|query_folder|string|false|none|Return notifications that were triggered by actions in this folder.|
|query_message|string|false|none|Error message associated with the request, if any.|
|query_path|string|false|none|Return notifications that were triggered by actions on this specific path.|
|query_request_method|string|false|none|The HTTP request method used by the webhook.|
|query_request_url|string|false|none|The target webhook URL.|
|query_status|string|false|none|The HTTP status returned from the server in response to the webhook request.|
|query_success|boolean|false|none|true if the webhook request succeeded (i.e. returned a 200 or 204 response status). false otherwise.|
|results_url|string|false|none|If `status` is `ready`, this will be a URL where all the results can be downloaded at once as a CSV.|
|start_at|string(date-time)|false|none|Start date/time of export range.|
|status|string|false|none|Status of export.  Valid values: `building`, `ready`, or `failed`|

<h2 id="tocS_ActionNotificationExportResultEntity">ActionNotificationExportResultEntity</h2>
<!-- backwards compatibility -->
<a id="schemaactionnotificationexportresultentity"></a>
<a id="schema_ActionNotificationExportResultEntity"></a>
<a id="tocSactionnotificationexportresultentity"></a>
<a id="tocsactionnotificationexportresultentity"></a>

```json
{
  "created_at": 1,
  "folder": "MyFolder",
  "id": 1,
  "message": "Success",
  "path": "MyFolder/MyFile.txt",
  "request_headers": "{\"User-Agent\":\"Files.com Webhook\"}",
  "request_method": "GET",
  "request_url": "www.example.com/webhook_receiver",
  "status": 200,
  "success": true
}
```

List Action Notification Export Results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer(int32)|false|none|When the notification was sent.|
|folder|string|false|none|The folder associated with the triggering action for this notification.|
|id|integer(int32)|false|none|Notification ID|
|message|string|false|none|A message indicating the overall status of the webhook notification.|
|path|string|false|none|The path to the actual file that triggered this notification.|
|request_headers|string|false|none|A JSON-encoded string with headers that were sent with the webhook.|
|request_method|string|false|none|The HTTP verb used to perform the webhook.|
|request_url|string|false|none|The webhook request URL.|
|status|integer(int32)|false|none|HTTP status code returned in the webhook response.|
|success|boolean|false|none|`true` if the webhook succeeded by receiving a 200 or 204 response.|

<h2 id="tocS_ApiKeyEntity">ApiKeyEntity</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyentity"></a>
<a id="schema_ApiKeyEntity"></a>
<a id="tocSapikeyentity"></a>
<a id="tocsapikeyentity"></a>

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "description": "example",
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "expires_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

List Api Keys

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Time which API Key was created|
|description|string|false|none|User-supplied description of API key.|
|descriptive_label|string|false|none|Unique label that describes this API key.  Useful for external systems where you may have API keys from multiple accounts and want a human-readable label for each key.|
|expires_at|string(date-time)|false|none|API Key expiration date|
|id|integer(int32)|false|none|API Key ID|
|key|string|false|none|API Key actual key string|
|last_use_at|string(date-time)|false|none|API Key last used - note this value is only updated once per 3 hour period, so the 'actual' time of last use may be up to 3 hours later than this timestamp.|
|name|string|false|none|Internal name for the API Key.  For your use.|
|path|string|false|none|Folder path restriction for this api key.|
|permission_set|string|false|none|Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.|
|platform|string|false|none|If this API key represents a Desktop app, what platform was it created on?|
|url|string|false|none|URL for API host.|
|user_id|integer(int32)|false|none|User ID for the owner of this API Key.  May be blank for Site-wide API Keys.|

#### Enumerated Values

|Property|Value|
|---|---|
|permission_set|none|
|permission_set|full|
|permission_set|desktop_app|
|permission_set|sync_app|
|permission_set|office_integration|
|permission_set|mobile_app|

<h2 id="tocS_AppEntity">AppEntity</h2>
<!-- backwards compatibility -->
<a id="schemaappentity"></a>
<a id="schema_AppEntity"></a>
<a id="tocSappentity"></a>
<a id="tocsappentity"></a>

```json
{
  "app_type": "example",
  "documentation_links": {
    "Important Info": "http://files.test/learn-more"
  },
  "extended_description": "example",
  "external_homepage_url": "example",
  "featured": true,
  "folder_behavior_type": "example",
  "icon_url": "example",
  "logo_thumbnail_url": "example",
  "logo_url": "example",
  "marketing_youtube_url": "example",
  "name": "example",
  "remote_server_type": "example",
  "screenshot_list_urls": [
    "example"
  ],
  "short_description": "example",
  "sso_strategy_type": "example",
  "tutorial_youtube_url": "example"
}
```

List Apps

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app_type|string|false|none|The type of the App|
|documentation_links|object|false|none|Collection of named links to documentation|
|extended_description|string|false|none|Long form description of the App|
|external_homepage_url|string|false|none|Link to external homepage|
|featured|boolean|false|none|Is featured on the App listing?|
|folder_behavior_type|string|false|none|Associated Folder Behavior type, if any|
|icon_url|string|false|none|App icon|
|logo_thumbnail_url|string|false|none|Logo thumbnail for the App|
|logo_url|string|false|none|Full size logo for the App|
|marketing_youtube_url|string|false|none|Marketing video page|
|name|string|false|none|Name of the App|
|remote_server_type|string|false|none|Associated Remote Server type, if any|
|screenshot_list_urls|[string]|false|none|Screenshots of the App|
|short_description|string|false|none|Short description of the App|
|sso_strategy_type|string|false|none|Associated SSO Strategy type, if any|
|tutorial_youtube_url|string|false|none|Tutorial video page|

#### Enumerated Values

|Property|Value|
|---|---|
|app_type|sdk|
|app_type|sso|
|app_type|remote_server|
|app_type|folder_behavior|
|app_type|client_app|
|app_type|app_integration|
|folder_behavior_type|webhook|
|folder_behavior_type|file_expiration|
|folder_behavior_type|auto_encrypt|
|folder_behavior_type|lock_subfolders|
|folder_behavior_type|storage_region|
|folder_behavior_type|serve_publicly|
|folder_behavior_type|create_user_folders|
|folder_behavior_type|remote_server_sync|
|folder_behavior_type|inbox|
|folder_behavior_type|append_timestamp|
|folder_behavior_type|limit_file_extensions|
|folder_behavior_type|limit_file_regex|
|folder_behavior_type|amazon_sns|
|folder_behavior_type|watermark|
|folder_behavior_type|remote_server_mount|
|folder_behavior_type|slack_webhook|
|folder_behavior_type|auto_decrypt|
|folder_behavior_type|override_upload_filename|
|remote_server_type|ftp|
|remote_server_type|sftp|
|remote_server_type|s3|
|remote_server_type|google_cloud_storage|
|remote_server_type|webdav|
|remote_server_type|wasabi|
|remote_server_type|backblaze_b2|
|remote_server_type|one_drive|
|remote_server_type|rackspace|
|remote_server_type|box|
|remote_server_type|dropbox|
|remote_server_type|google_drive|
|remote_server_type|azure|
|remote_server_type|sharepoint|
|remote_server_type|s3_compatible|
|remote_server_type|azure_files|
|remote_server_type|files_agent|
|remote_server_type|filebase|
|sso_strategy_type|google|
|sso_strategy_type|auth0|
|sso_strategy_type|okta|
|sso_strategy_type|atlassian|
|sso_strategy_type|azure|
|sso_strategy_type|box|
|sso_strategy_type|dropbox|
|sso_strategy_type|slack|
|sso_strategy_type|_unused_ubuntu|
|sso_strategy_type|onelogin|
|sso_strategy_type|saml|
|sso_strategy_type|idaptive|
|sso_strategy_type|ldap|
|sso_strategy_type|scim|

<h2 id="tocS_As2IncomingMessageEntity">As2IncomingMessageEntity</h2>
<!-- backwards compatibility -->
<a id="schemaas2incomingmessageentity"></a>
<a id="schema_As2IncomingMessageEntity"></a>
<a id="tocSas2incomingmessageentity"></a>
<a id="tocsas2incomingmessageentity"></a>

```json
{
  "activity_log": "example",
  "as2_from": "example",
  "as2_partner_id": 1,
  "as2_station_id": 1,
  "as2_to": "example",
  "attachment_filename": "example",
  "body_size": "example",
  "content_type": "example",
  "created_at": "2000-01-01T01:00:00Z",
  "date": "example",
  "encrypted_uri": "example",
  "hex_recipient_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "http_headers": {
    "key": "example value"
  },
  "http_response_code": "example",
  "http_response_headers": {
    "key": "example value"
  },
  "id": 1,
  "ip": "example",
  "mdn_response_uri": "example",
  "message_decrypted": true,
  "message_id": "example",
  "message_mdn_returned": true,
  "message_processing_success": true,
  "message_received": true,
  "message_signature_verified": true,
  "mic": "example",
  "mic_algo": "example",
  "processing_result": "example",
  "processing_result_description": "example",
  "raw_uri": "example",
  "recipient_issuer": "example",
  "recipient_serial": "example",
  "smime_signed_uri": "example",
  "smime_uri": "example",
  "subject": "example",
  "uuid": "example"
}
```

List As2 Incoming Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_log|string|false|none|JSON Structure of the activity log.|
|as2_from|string|false|none|AS2 FROM header of message|
|as2_partner_id|integer(int32)|false|none|Id of the AS2 Partner associated with this message.|
|as2_station_id|integer(int32)|false|none|Id of the AS2 Station associated with this message.|
|as2_to|string|false|none|AS2 TO header of message|
|attachment_filename|string|false|none|Filename of the file being received.|
|body_size|string|false|none|Encrypted Payload Body Size|
|content_type|string|false|none|Content Type header of the incoming message.|
|created_at|string(date-time)|false|none|Message creation date/time|
|date|string|false|none|Date Header|
|encrypted_uri|string|false|none|URL to download the encrypted signed smime that is to sent as AS2 body|
|hex_recipient_serial|string|false|none|Incoming Message Recipient(the Client Cert used to encrypt this message)'s serial in hex format.|
|http_headers|object|false|none|HTTP Headers sent with this message.|
|http_response_code|string|false|none|HTTP Response Code sent for this message|
|http_response_headers|object|false|none|HTTP Headers sent for this message.|
|id|integer(int32)|false|none|Id of the AS2 Partner.|
|ip|string|false|none|IP Address of the Sender|
|mdn_response_uri|string|false|none|URL to download the http response body|
|message_decrypted|boolean|false|none|Message decrypted successfully?|
|message_id|string|false|none|AS2 Message Id|
|message_mdn_returned|boolean|false|none|MDN returned?|
|message_processing_success|boolean|false|none|Message processed successfully?|
|message_received|boolean|false|none|Message body received?|
|message_signature_verified|boolean|false|none|Message signature verified?|
|mic|string|false|none|AS2 Message Integrity Check|
|mic_algo|string|false|none|AS2 Message Integrity Check Algorithm Used|
|processing_result|string|false|none|Result of processing.|
|processing_result_description|string|false|none|Result of processing description.|
|raw_uri|string|false|none|URL to download the original file contents|
|recipient_issuer|string|false|none|Incoming Message Recipient(the Client Cert used to encrypt this message)'s issuer|
|recipient_serial|string|false|none|Incoming Message Recipient(the Client Cert used to encrypt this message)'s serial|
|smime_signed_uri|string|false|none|URL to download the file contents as smime with signature|
|smime_uri|string|false|none|URL to download the file contents encoded as smime|
|subject|string|false|none|AS2 Subject Header|
|uuid|string|false|none|UUID assigned to this message.|

#### Enumerated Values

|Property|Value|
|---|---|
|processing_result|not_started|
|processing_result|unable_to_find_station|
|processing_result|unable_to_find_partner|
|processing_result|unable_to_validate_signature|
|processing_result|decrypt_fail|
|processing_result|file_save_fail|
|processing_result|success|

<h2 id="tocS_As2OutgoingMessageEntity">As2OutgoingMessageEntity</h2>
<!-- backwards compatibility -->
<a id="schemaas2outgoingmessageentity"></a>
<a id="schema_As2OutgoingMessageEntity"></a>
<a id="tocSas2outgoingmessageentity"></a>
<a id="tocsas2outgoingmessageentity"></a>

```json
{
  "activity_log": "example",
  "as2_from": "example",
  "as2_partner_id": 1,
  "as2_station_id": 1,
  "as2_to": "example",
  "attachment_filename": "example",
  "body_size": "example",
  "created_at": "2000-01-01T01:00:00Z",
  "date": "example",
  "encrypted_uri": "example",
  "http_headers": {
    "key": "example value"
  },
  "http_response_code": "example",
  "http_response_headers": {
    "key": "example value"
  },
  "http_transmission_duration": 1,
  "id": 1,
  "mdn_message_id_matched": true,
  "mdn_mic_matched": true,
  "mdn_processing_success": true,
  "mdn_received": true,
  "mdn_response_uri": "example",
  "mdn_signature_verified": true,
  "mdn_valid": true,
  "message_id": "example",
  "mic": "example",
  "mic_sha_256": "example",
  "processing_result": "example",
  "processing_result_description": "example",
  "raw_uri": "example",
  "smime_signed_uri": "example",
  "smime_uri": "example",
  "uuid": "example"
}
```

List As2 Outgoing Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity_log|string|false|none|JSON Structure of the activity log.|
|as2_from|string|false|none|AS2 FROM|
|as2_partner_id|integer(int32)|false|none|Id of the AS2 Partner associated with this message.|
|as2_station_id|integer(int32)|false|none|Id of the AS2 Station associated with this message.|
|as2_to|string|false|none|AS2 TO|
|attachment_filename|string|false|none|Filename of the file being sent.|
|body_size|string|false|none|Encrypted Payload Body Size|
|created_at|string(date-time)|false|none|Message creation date/time|
|date|string|false|none|Date Header|
|encrypted_uri|string|false|none|URL to download the encrypted signed smime that is to sent as AS2 body|
|http_headers|object|false|none|HTTP Headers sent with this message.|
|http_response_code|string|false|none|HTTP Response Code received for this message|
|http_response_headers|object|false|none|HTTP Headers received for this message.|
|http_transmission_duration|number(double)|false|none|HTTP transmission duration in seceonds|
|id|integer(int32)|false|none|Id of the AS2 Partner.|
|mdn_message_id_matched|boolean|false|none|MDN message id matched?|
|mdn_mic_matched|boolean|false|none|MDN MIC matched?|
|mdn_processing_success|boolean|false|none|MDN disposition indicate a successful processing?|
|mdn_received|boolean|false|none|Did the partner give a response body?|
|mdn_response_uri|string|false|none|URL to download the http response body|
|mdn_signature_verified|boolean|false|none|MDN signature verified?|
|mdn_valid|boolean|false|none|Is the response in MDN format?|
|message_id|string|false|none|AS2 Message Id|
|mic|string|false|none|AS2 Message Integrity Check SHA1|
|mic_sha_256|string|false|none|AS2 Message Integrity Check SHA256|
|processing_result|string|false|none|Result of processing.|
|processing_result_description|string|false|none|Result of processing description.|
|raw_uri|string|false|none|URL to download the original file contents|
|smime_signed_uri|string|false|none|URL to download the file contents as smime with signature|
|smime_uri|string|false|none|URL to download the file contents encoded as smime|
|uuid|string|false|none|UUID assigned to this message.|

#### Enumerated Values

|Property|Value|
|---|---|
|processing_result|not_started|
|processing_result|send_failed|
|processing_result|send_success|
|processing_result|send_success_mdn_invalid|
|processing_result|send_success_mic_mismatch|
|processing_result|send_success_message_id_mismatch|
|processing_result|send_success_signature_mismatch|
|processing_result|send_success_processing_failure|
|processing_result|send_failed_unknown_host|
|processing_result|send_failed_bad_http_response_code|
|processing_result|send_failed_ssl_error|
|processing_result|send_failed_connection_refused|

<h2 id="tocS_As2PartnerEntity">As2PartnerEntity</h2>
<!-- backwards compatibility -->
<a id="schemaas2partnerentity"></a>
<a id="schema_As2PartnerEntity"></a>
<a id="tocSas2partnerentity"></a>
<a id="tocsas2partnerentity"></a>

```json
{
  "as2_station_id": 1,
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Partner Name",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "server_certificate": "require_match",
  "uri": "example"
}
```

Create As2 Partner

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|as2_station_id|integer(int32)|false|none|Id of the AS2 Station associated with this partner.|
|hex_public_certificate_serial|string|false|none|Serial of public certificate used for message security in hex format.|
|id|integer(int32)|false|none|Id of the AS2 Partner.|
|name|string|false|none|The partner's formal AS2 name.|
|public_certificate_issuer|string|false|none|Issuer of public certificate used for message security.|
|public_certificate_md5|string|false|none|MD5 hash of public certificate used for message security.|
|public_certificate_not_after|string|false|none|Not after value of public certificate used for message security.|
|public_certificate_not_before|string|false|none|Not before value of public certificate used for message security.|
|public_certificate_serial|string|false|none|Serial of public certificate used for message security.|
|public_certificate_subject|string|false|none|Subject of public certificate used for message security.|
|server_certificate|string|false|none|Remote server certificate security setting|
|uri|string|false|none|Public URI for sending AS2 message to.|

#### Enumerated Values

|Property|Value|
|---|---|
|server_certificate|require_match|
|server_certificate|allow_any|

<h2 id="tocS_As2StationEntity">As2StationEntity</h2>
<!-- backwards compatibility -->
<a id="schemaas2stationentity"></a>
<a id="schema_As2StationEntity"></a>
<a id="tocSas2stationentity"></a>
<a id="tocsas2stationentity"></a>

```json
{
  "domain": "domain.test",
  "hex_public_certificate_serial": "A5:EB:C1:95:DC:D8:2B:E7",
  "id": 1,
  "name": "AS2 Station Name",
  "private_key_md5": "example",
  "private_key_password_md5": "example",
  "public_certificate_issuer": "example",
  "public_certificate_md5": "example",
  "public_certificate_not_after": "example",
  "public_certificate_not_before": "example",
  "public_certificate_serial": "example",
  "public_certificate_subject": "example",
  "uri": "example"
}
```

Create As2 Station

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|The station's AS2 domain name.|
|hex_public_certificate_serial|string|false|none|Serial of public certificate used for message security in hex format.|
|id|integer(int32)|false|none|Id of the AS2 Station.|
|name|string|false|none|The station's formal AS2 name.|
|private_key_md5|string|false|none|MD5 hash of private key used for message security.|
|private_key_password_md5|string|false|none|MD5 hash of private key password used for message security.|
|public_certificate_issuer|string|false|none|Issuer of public certificate used for message security.|
|public_certificate_md5|string|false|none|MD5 hash of public certificate used for message security.|
|public_certificate_not_after|string|false|none|Not after value of public certificate used for message security.|
|public_certificate_not_before|string|false|none|Not before value of public certificate used for message security.|
|public_certificate_serial|string|false|none|Serial of public certificate used for message security.|
|public_certificate_subject|string|false|none|Subject of public certificate used for message security.|
|uri|string|false|none|Public URI for sending AS2 message to.|

<h2 id="tocS_AutoEntity">AutoEntity</h2>
<!-- backwards compatibility -->
<a id="schemaautoentity"></a>
<a id="schema_AutoEntity"></a>
<a id="tocSautoentity"></a>
<a id="tocsautoentity"></a>

```json
{
  "dynamic": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamic|object|false|none|none|

<h2 id="tocS_AutomationEntity">AutomationEntity</h2>
<!-- backwards compatibility -->
<a id="schemaautomationentity"></a>
<a id="schema_AutomationEntity"></a>
<a id="tocSautomationentity"></a>
<a id="tocsautomationentity"></a>

```json
{
  "automation": "create_folder",
  "deleted": true,
  "description": "example",
  "destination_replace_from": "example",
  "destination_replace_to": "example",
  "destinations": [
    "destination"
  ],
  "disabled": true,
  "group_ids": [
    1,
    2
  ],
  "id": 1,
  "interval": "week",
  "last_modified_at": "2000-01-01T01:00:00Z",
  "name": "example",
  "path": "example",
  "schedule": "example",
  "source": "example",
  "sync_ids": [
    1,
    2
  ],
  "trigger": "realtime",
  "trigger_actions": [
    "create"
  ],
  "user_id": 1,
  "user_ids": [
    1,
    2
  ],
  "value": {
    "limit": "1"
  },
  "webhook_url": "https://app.files.com/api/webhooks/abc123"
}
```

List Automations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automation|string|false|none|Automation type|
|deleted|boolean|false|none|Indicates if the automation has been deleted.|
|description|string|false|none|Description for the this Automation.|
|destination_replace_from|string|false|none|If set, this string in the destination path will be replaced with the value in `destination_replace_to`.|
|destination_replace_to|string|false|none|If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.|
|destinations|[string]|false|none|Destination Path|
|disabled|boolean|false|none|If true, this automation will not run.|
|group_ids|[integer(int32)]|false|none|IDs of Groups for the Automation (i.e. who to Request File from)|
|id|integer(int32)|false|none|Automation ID|
|interval|string|false|none|If trigger is `daily`, this specifies how often to run this automation.  One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`|
|last_modified_at|string(date-time)|false|none|Time when automation was last modified. Does not change for name or description updates.|
|name|string|false|none|Name for this automation.|
|path|string|false|none|Path on which this Automation runs.  Supports globs.|
|schedule|object|false|none|If trigger is `custom_schedule`, Custom schedule description for when the automation should be run.|
|source|string|false|none|Source Path|
|sync_ids|[integer(int32)]|false|none|IDs of remote sync folder behaviors to run by this Automation|
|trigger|string|false|none|How this automation is triggered to run. One of: `realtime`, `daily`, `custom_schedule`, `webhook`, `email`, or `action`.|
|trigger_actions|[string]|false|none|If trigger is `action`, this is the list of action types on which to trigger the automation. Valid actions are create, read, update, destroy, move, copy|
|user_id|integer(int32)|false|none|User ID of the Automation's creator.|
|user_ids|[integer(int32)]|false|none|IDs of Users for the Automation (i.e. who to Request File from)|
|value|object|false|none|A Hash of attributes specific to the automation type.|
|webhook_url|string|false|none|If trigger is `webhook`, this is the URL of the webhook to trigger the Automation.|

#### Enumerated Values

|Property|Value|
|---|---|
|automation|create_folder|
|automation|request_file|
|automation|request_move|
|automation|copy_newest_file|
|automation|delete_file|
|automation|copy_file|
|automation|move_file|
|automation|as2_send|
|automation|run_sync|
|trigger|realtime|
|trigger|daily|
|trigger|custom_schedule|
|trigger|webhook|
|trigger|email|
|trigger|action|

<h2 id="tocS_AutomationRunEntity">AutomationRunEntity</h2>
<!-- backwards compatibility -->
<a id="schemaautomationrunentity"></a>
<a id="schema_AutomationRunEntity"></a>
<a id="tocSautomationrunentity"></a>
<a id="tocsautomationrunentity"></a>

```json
{
  "automation_id": 1,
  "completed_at": "2000-01-01T01:00:00Z",
  "created_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "status": "success",
  "status_messages_url": "https://www.example.com/log_file.txt"
}
```

List Automation Runs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automation_id|integer(int32)|false|none|ID of the associated Automation.|
|completed_at|string(date-time)|false|none|Automation run completion/failure date/time.|
|created_at|string(date-time)|false|none|Automation run start date/time.|
|id|integer(int32)|false|none|ID.|
|status|string|false|none|The success status of the AutomationRun. One of `running`, `success`, `partial_failure`, or `failure`.|
|status_messages_url|string|false|none|Link to status messages log file.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|success|
|status|partial_failure|
|status|failure|
|status|skipped|

<h2 id="tocS_BandwidthSnapshotEntity">BandwidthSnapshotEntity</h2>
<!-- backwards compatibility -->
<a id="schemabandwidthsnapshotentity"></a>
<a id="schema_BandwidthSnapshotEntity"></a>
<a id="tocSbandwidthsnapshotentity"></a>
<a id="tocsbandwidthsnapshotentity"></a>

```json
{
  "bytes_received": 1,
  "bytes_sent": 1,
  "id": 1,
  "logged_at": "2000-01-01T01:00:00Z",
  "requests_get": 1,
  "requests_other": 1,
  "requests_put": 1,
  "sync_bytes_received": 1,
  "sync_bytes_sent": 1
}
```

List Bandwidth Snapshots

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes_received|number(double)|false|none|Site bandwidth report bytes received|
|bytes_sent|number(double)|false|none|Site bandwidth report bytes sent|
|id|integer(int32)|false|none|Site bandwidth ID|
|logged_at|string(date-time)|false|none|Time the site bandwidth report was logged|
|requests_get|number(double)|false|none|Site bandwidth report get requests|
|requests_other|number(double)|false|none|Site bandwidth report other requests|
|requests_put|number(double)|false|none|Site bandwidth report put requests|
|sync_bytes_received|number(double)|false|none|Site sync bandwidth report bytes received|
|sync_bytes_sent|number(double)|false|none|Site sync bandwidth report bytes sent|

<h2 id="tocS_BehaviorEntity">BehaviorEntity</h2>
<!-- backwards compatibility -->
<a id="schemabehaviorentity"></a>
<a id="schema_BehaviorEntity"></a>
<a id="tocSbehaviorentity"></a>
<a id="tocsbehaviorentity"></a>

```json
{
  "attachment_url": "example",
  "behavior": "webhook",
  "description": "example",
  "id": 1,
  "name": "example",
  "path": "example",
  "value": {
    "key": "example value"
  }
}
```

List Behaviors

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment_url|string|false|none|URL for attached file|
|behavior|string|false|none|Behavior type.|
|description|string|false|none|Description for this behavior.|
|id|integer(int32)|false|none|Folder behavior ID|
|name|string|false|none|Name for this behavior.|
|path|string|false|none|Folder path|
|value|object|false|none|Settings for this behavior.  See the section above for an example value to provide here.  Formatting is different for each Behavior type.  May be sent as nested JSON or a single JSON-encoded string.  If using XML encoding for the API call, this data must be sent as a JSON-encoded string.|

<h2 id="tocS_BundleDownloadEntity">BundleDownloadEntity</h2>
<!-- backwards compatibility -->
<a id="schemabundledownloadentity"></a>
<a id="schema_BundleDownloadEntity"></a>
<a id="tocSbundledownloadentity"></a>
<a id="tocsbundledownloadentity"></a>

```json
{
  "bundle_registration": {
    "bundle_code": "example",
    "bundle_id": 1,
    "bundle_recipient_id": 1,
    "clickwrap_body": "example",
    "code": "abc123",
    "company": "Action Verb",
    "created_at": "2000-01-01T01:00:00Z",
    "email": "john.doe@files.com",
    "form_field_data": {
      "key": "example value"
    },
    "form_field_set_id": 1,
    "inbox_code": "abc123",
    "ip": "10.1.1.1",
    "name": "account"
  },
  "created_at": "2000-01-01T01:00:00Z",
  "download_method": "file",
  "path": "a/b/test.txt"
}
```

List Bundle Downloads

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle_registration|[BundleRegistrationEntity](#schemabundleregistrationentity)|false|none|List Bundle Registrations|
|created_at|string(date-time)|false|none|Download date/time|
|download_method|string|false|none|Download method (file or full_zip)|
|path|string|false|none|Download path|

#### Enumerated Values

|Property|Value|
|---|---|
|download_method|file|
|download_method|full_zip|

<h2 id="tocS_BundleEntity">BundleEntity</h2>
<!-- backwards compatibility -->
<a id="schemabundleentity"></a>
<a id="schema_BundleEntity"></a>
<a id="tocSbundleentity"></a>
<a id="tocsbundleentity"></a>

```json
{
  "clickwrap_body": "[Legal text]",
  "clickwrap_id": 1,
  "code": "abc123",
  "created_at": "2000-01-01T01:00:00Z",
  "description": "The public description of the bundle.",
  "dont_separate_submissions_by_folder": true,
  "expires_at": "2000-01-01T01:00:00Z",
  "form_field_set": {
    "form_fields": [
      null
    ],
    "form_layout": [
      1,
      2,
      3,
      4
    ],
    "id": 1,
    "skip_company": true,
    "skip_email": true,
    "skip_name": true,
    "title": "Sample Form Title"
  },
  "has_inbox": true,
  "id": 1,
  "inbox_id": 1,
  "max_uses": 1,
  "note": "The internal note on the bundle.",
  "password_protected": true,
  "path_template": "{{name}}_{{ip}}",
  "paths": [
    "file.txt"
  ],
  "permissions": "read",
  "preview_only": true,
  "require_registration": true,
  "require_share_recipient": true,
  "send_email_receipt_to_uploader": true,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "url": "https://subdomain.files.com/f/12345678",
  "user_id": 1,
  "username": "user",
  "watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "watermark_value": {
    "key": "example value"
  }
}
```

Create Bundle

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clickwrap_body|string|false|none|Legal text that must be agreed to prior to accessing Bundle.|
|clickwrap_id|integer(int32)|false|none|ID of the clickwrap to use with this bundle.|
|code|string|false|none|Bundle code.  This code forms the end part of the Public URL.|
|created_at|string(date-time)|false|none|Bundle created at date/time|
|description|string|false|none|Public description|
|dont_separate_submissions_by_folder|boolean|false|none|Do not create subfolders for files uploaded to this share. Note: there are subtle security pitfalls with allowing anonymous uploads from multiple users to live in the same folder. We strongly discourage use of this option unless absolutely required.|
|expires_at|string(date-time)|false|none|Bundle expiration date/time|
|form_field_set|[FormFieldSetEntity](#schemaformfieldsetentity)|false|none|List Form Field Sets|
|has_inbox|boolean|false|none|Does this bundle have an associated inbox?|
|id|integer(int32)|false|none|Bundle ID|
|inbox_id|integer(int32)|false|none|ID of the associated inbox, if available.|
|max_uses|integer(int32)|false|none|Maximum number of times bundle can be accessed|
|note|string|false|none|Bundle internal note|
|password_protected|boolean|false|none|Is this bundle password protected?|
|path_template|string|false|none|Template for creating submission subfolders. Can use the uploader's name, email address, ip, company, and any custom form data.|
|paths|[string]|false|none|A list of paths in this bundle|
|permissions|string|false|none|Permissions that apply to Folders in this Share Link.|
|preview_only|boolean|false|none|Restrict users to previewing files only?|
|require_registration|boolean|false|none|Show a registration page that captures the downloader's name and email address?|
|require_share_recipient|boolean|false|none|Only allow access to recipients who have explicitly received the share via an email sent through the Files.com UI?|
|send_email_receipt_to_uploader|boolean|false|none|Send delivery receipt to the uploader. Note: For writable share only|
|skip_company|boolean|false|none|BundleRegistrations can be saved without providing company?|
|skip_email|boolean|false|none|BundleRegistrations can be saved without providing email?|
|skip_name|boolean|false|none|BundleRegistrations can be saved without providing name?|
|url|string|false|none|Public URL of Share Link|
|user_id|integer(int32)|false|none|Bundle creator user ID|
|username|string|false|none|Bundle creator username|
|watermark_attachment|[ImageEntity](#schemaimageentity)|false|none|none|
|watermark_value|object|false|none|Preview watermark settings applied to all bundle items. Uses the same keys as Behavior.value|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|read|
|permissions|write|
|permissions|read_write|
|permissions|full|
|permissions|none|
|permissions|preview_only|

<h2 id="tocS_BundleNotificationEntity">BundleNotificationEntity</h2>
<!-- backwards compatibility -->
<a id="schemabundlenotificationentity"></a>
<a id="schema_BundleNotificationEntity"></a>
<a id="tocSbundlenotificationentity"></a>
<a id="tocsbundlenotificationentity"></a>

```json
{
  "bundle_id": 1,
  "id": 1,
  "notify_on_registration": true,
  "notify_on_upload": true,
  "user_id": 1
}
```

List Bundle Notifications

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle_id|integer(int32)|false|none|Bundle ID to notify on|
|id|integer(int32)|false|none|Bundle Notification ID|
|notify_on_registration|boolean|false|none|Triggers bundle notification when a registration action occurs for it.|
|notify_on_upload|boolean|false|none|Triggers bundle notification when a upload action occurs for it.|
|user_id|integer(int32)|false|none|The id of the user to notify.|

<h2 id="tocS_BundleRecipientEntity">BundleRecipientEntity</h2>
<!-- backwards compatibility -->
<a id="schemabundlerecipiententity"></a>
<a id="schema_BundleRecipientEntity"></a>
<a id="tocSbundlerecipiententity"></a>
<a id="tocsbundlerecipiententity"></a>

```json
{
  "company": "Acme Inc.",
  "name": "John Doe",
  "note": "Some note.",
  "recipient": "john.doe@example.com",
  "sent_at": "2000-01-01T01:00:00Z"
}
```

List Bundle Recipients

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|false|none|The recipient's company.|
|name|string|false|none|The recipient's name.|
|note|string|false|none|A note sent to the recipient with the bundle.|
|recipient|string|false|none|The recipient's email address.|
|sent_at|string(date-time)|false|none|When the Bundle was shared with this recipient.|

<h2 id="tocS_BundleRegistrationEntity">BundleRegistrationEntity</h2>
<!-- backwards compatibility -->
<a id="schemabundleregistrationentity"></a>
<a id="schema_BundleRegistrationEntity"></a>
<a id="tocSbundleregistrationentity"></a>
<a id="tocsbundleregistrationentity"></a>

```json
{
  "bundle_code": "example",
  "bundle_id": 1,
  "bundle_recipient_id": 1,
  "clickwrap_body": "example",
  "code": "abc123",
  "company": "Action Verb",
  "created_at": "2000-01-01T01:00:00Z",
  "email": "john.doe@files.com",
  "form_field_data": {
    "key": "example value"
  },
  "form_field_set_id": 1,
  "inbox_code": "abc123",
  "ip": "10.1.1.1",
  "name": "account"
}
```

List Bundle Registrations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle_code|string|false|none|Bundle URL code|
|bundle_id|integer(int32)|false|none|Id of associated bundle|
|bundle_recipient_id|integer(int32)|false|none|Id of associated bundle recipient|
|clickwrap_body|string|false|none|Clickwrap text that was shown to the registrant|
|code|string|false|none|Registration cookie code|
|company|string|false|none|Registrant company name|
|created_at|string(date-time)|false|none|Registration creation date/time|
|email|string|false|none|Registrant email address|
|form_field_data|object|false|none|Data for form field set with form field ids as keys and user data as values|
|form_field_set_id|integer(int32)|false|none|Id of associated form field set|
|inbox_code|string|false|none|InboxRegistration cookie code, if there is an associated InboxRegistration|
|ip|string|false|none|Registrant IP Address|
|name|string|false|none|Registrant name|

<h2 id="tocS_ClickwrapEntity">ClickwrapEntity</h2>
<!-- backwards compatibility -->
<a id="schemaclickwrapentity"></a>
<a id="schema_ClickwrapEntity"></a>
<a id="tocSclickwrapentity"></a>
<a id="tocsclickwrapentity"></a>

```json
{
  "body": "[Legal body text]",
  "id": 1,
  "name": "Example Site NDA for Files.com Use",
  "use_with_bundles": "example",
  "use_with_inboxes": "example",
  "use_with_users": "example"
}
```

Create Clickwrap

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Body text of Clickwrap (supports Markdown formatting).|
|id|integer(int32)|false|none|Clickwrap ID|
|name|string|false|none|Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)|
|use_with_bundles|string|false|none|Use this Clickwrap for Bundles?|
|use_with_inboxes|string|false|none|Use this Clickwrap for Inboxes?|
|use_with_users|string|false|none|Use this Clickwrap for User Registrations?  Note: This only applies to User Registrations where the User is invited to your Files.com site using an E-Mail invitation process where they then set their own password.|

#### Enumerated Values

|Property|Value|
|---|---|
|use_with_bundles|none|
|use_with_bundles|available|
|use_with_bundles|require|
|use_with_inboxes|none|
|use_with_inboxes|available|
|use_with_inboxes|require|
|use_with_users|none|
|use_with_users|require|

<h2 id="tocS_DnsRecordEntity">DnsRecordEntity</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordentity"></a>
<a id="schema_DnsRecordEntity"></a>
<a id="tocSdnsrecordentity"></a>
<a id="tocsdnsrecordentity"></a>

```json
{
  "domain": "my-custom-domain.com",
  "id": "example",
  "rrtype": "CNAME",
  "value": "mysite.files.com"
}
```

Show site DNS configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|DNS record domain name|
|id|string|false|none|Unique label for DNS record; used by Zapier and other integrations.|
|rrtype|string|false|none|DNS record type|
|value|string|false|none|DNS record value|

<h2 id="tocS_ErrorsEntity">ErrorsEntity</h2>
<!-- backwards compatibility -->
<a id="schemaerrorsentity"></a>
<a id="schema_ErrorsEntity"></a>
<a id="tocSerrorsentity"></a>
<a id="tocserrorsentity"></a>

```json
{
  "fields": [],
  "messages": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|A list of fields where errors occur|
|messages|[string]|false|none|A list of error messages|

<h2 id="tocS_ExternalEventEntity">ExternalEventEntity</h2>
<!-- backwards compatibility -->
<a id="schemaexternalevententity"></a>
<a id="schema_ExternalEventEntity"></a>
<a id="tocSexternalevententity"></a>
<a id="tocsexternalevententity"></a>

```json
{
  "body": "example",
  "body_url": "example",
  "bytes_synced": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "errored_files": 1,
  "event_type": "example",
  "folder_behavior_id": 1,
  "id": 1,
  "remote_server_type": "example",
  "status": "example",
  "successful_files": 1
}
```

List External Events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Event body|
|body_url|string|false|none|Link to log file.|
|bytes_synced|integer(int32)|false|none|For sync events, the total number of bytes synced.|
|created_at|string(date-time)|false|none|External event create date/time|
|errored_files|integer(int32)|false|none|For sync events, the number of files that encountered errors.|
|event_type|string|false|none|Type of event being recorded.|
|folder_behavior_id|integer(int32)|false|none|Folder Behavior ID|
|id|integer(int32)|false|none|Event ID|
|remote_server_type|string|false|none|Associated Remote Server type, if any|
|status|string|false|none|Status of event.|
|successful_files|integer(int32)|false|none|For sync events, the number of files handled successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|event_type|ldap_sync|
|event_type|remote_server_sync|
|event_type|lockout|
|event_type|ldap_login|
|event_type|saml_login|
|event_type|client_log|
|event_type|pending_work|
|status|success|
|status|failure|
|status|partial_failure|
|status|in_progress|
|status|skipped|

<h2 id="tocS_FileActionEntity">FileActionEntity</h2>
<!-- backwards compatibility -->
<a id="schemafileactionentity"></a>
<a id="schema_FileActionEntity"></a>
<a id="tocSfileactionentity"></a>
<a id="tocsfileactionentity"></a>

```json
{
  "file_migration_id": 1,
  "status": "pending"
}
```

Move file/folder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_migration_id|integer(int32)|false|none|If status is pending, this is the id of the FileMigration to check for status updates.|
|status|string|false|none|Status of file operation.|

<h2 id="tocS_FileCommentEntity">FileCommentEntity</h2>
<!-- backwards compatibility -->
<a id="schemafilecommententity"></a>
<a id="schema_FileCommentEntity"></a>
<a id="tocSfilecommententity"></a>
<a id="tocsfilecommententity"></a>

```json
{
  "body": "What a great file!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

List File Comments by path

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Comment body.|
|id|integer(int32)|false|none|File Comment ID|
|reactions|[[FileCommentReactionEntity](#schemafilecommentreactionentity)]|false|none|Reactions to this comment.|

<h2 id="tocS_FileCommentReactionEntity">FileCommentReactionEntity</h2>
<!-- backwards compatibility -->
<a id="schemafilecommentreactionentity"></a>
<a id="schema_FileCommentReactionEntity"></a>
<a id="tocSfilecommentreactionentity"></a>
<a id="tocsfilecommentreactionentity"></a>

```json
{
  "emoji": "👍",
  "id": 1
}
```

Create File Comment Reaction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|false|none|Emoji used in the reaction.|
|id|integer(int32)|false|none|Reaction ID|

<h2 id="tocS_FileEntity">FileEntity</h2>
<!-- backwards compatibility -->
<a id="schemafileentity"></a>
<a id="schema_FileEntity"></a>
<a id="tocSfileentity"></a>
<a id="tocsfileentity"></a>

```json
{
  "crc32": "70976923",
  "created_at": "2000-01-01T01:00:00Z",
  "display_name": "file.txt",
  "download_uri": "https://mysite.files.com/...",
  "is_locked": true,
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "mtime": "2000-01-01T01:00:00Z",
  "path": "path/file.txt",
  "permissions": "rwd",
  "preview": {
    "download_uri": "https://mysite.files.com/...",
    "id": 1,
    "size": "large",
    "status": "complete",
    "type": "image"
  },
  "preview_id": 1,
  "priority_color": "red",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "region": "us-east-1",
  "size": 1024,
  "subfolders_locked?": true,
  "type": "file"
}
```

List Folders by path

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|crc32|string|false|none|File CRC32 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.|
|created_at|string(date-time)|false|none|File created date/time|
|display_name|string|false|none|File/Folder display name|
|download_uri|string|false|none|Link to download file. Provided only in response to a download request.|
|is_locked|boolean|false|none|Is this folder locked and unable to be modified?|
|md5|string|false|none|File MD5 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.|
|mime_type|string|false|none|MIME Type.  This is determined by the filename extension and is not stored separately internally.|
|mtime|string(date-time)|false|none|File last modified date/time, according to the server.  This is the timestamp of the last Files.com operation of the file, regardless of what modified timestamp was sent.|
|path|string|false|none|File/Folder path|
|permissions|string|false|none|A short string representing the current user's permissions.  Can be `r`,`w`,`d`, `l` or any combination|
|preview|[PreviewEntity](#schemapreviewentity)|false|none|none|
|preview_id|integer(int32)|false|none|File preview ID|
|priority_color|string|false|none|Bookmark/priority color of file/folder|
|provided_mtime|string(date-time)|false|none|File last modified date/time, according to the client who set it.  Files.com allows desktop, FTP, SFTP, and WebDAV clients to set modified at times.  This allows Desktop<->Cloud syncing to preserve modified at times.|
|region|string|false|none|Region location|
|size|integer(int32)|false|none|File/Folder size|
|subfolders_locked?|boolean|false|none|Are subfolders locked and unable to be modified?|
|type|string|false|none|Type: `directory` or `file`.|

<h2 id="tocS_FileMigrationEntity">FileMigrationEntity</h2>
<!-- backwards compatibility -->
<a id="schemafilemigrationentity"></a>
<a id="schema_FileMigrationEntity"></a>
<a id="tocSfilemigrationentity"></a>
<a id="tocsfilemigrationentity"></a>

```json
{
  "dest_path": "MyFolder",
  "files_moved": 1,
  "files_total": 1,
  "id": 1,
  "log_url": "https://www.example.com/log_file",
  "operation": "move",
  "path": "MyFolder",
  "region": "USA",
  "status": "complete"
}
```

Show File Migration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dest_path|string|false|none|Destination path|
|files_moved|integer(int32)|false|none|Number of files processed|
|files_total|integer(int32)|false|none|Deprecated: used to return a count of the applicable files.  Currently returns 0 always.  On remote servers, it is not possible to reliably determine the number of affected files for every migration operation.|
|id|integer(int32)|false|none|File migration ID|
|log_url|string|false|none|Link to download the log file for this migration.|
|operation|string|false|none|The type of operation|
|path|string|false|none|Source path|
|region|string|false|none|Region|
|status|string|false|none|Status|

#### Enumerated Values

|Property|Value|
|---|---|
|operation|delete|
|operation|move|
|operation|copy|
|operation|regional_migration|
|status|pending|
|status|counting|
|status|processing|
|status|completed|
|status|processing_subfolders|
|status|finishing|
|status|creating_dest_folder|
|status|waiting_for_other_jobs|
|status|waiting_for_all_files|
|status|waiting_for_pending_subfolders|
|status|waiting_for_all_subfolders|
|status|failed|
|status|waiting_for_enqueued_operations|
|status|unused|
|status|processing_recursively|
|status|removing_deferred_folders|

<h2 id="tocS_FileUploadPartEntity">FileUploadPartEntity</h2>
<!-- backwards compatibility -->
<a id="schemafileuploadpartentity"></a>
<a id="schema_FileUploadPartEntity"></a>
<a id="tocSfileuploadpartentity"></a>
<a id="tocsfileuploadpartentity"></a>

```json
{
  "action": "multipart",
  "ask_about_overwrites": true,
  "available_parts": 1,
  "expires": "example",
  "headers": {
    "key": "example value"
  },
  "http_method": "PUT",
  "next_partsize": 1,
  "parallel_parts": true,
  "parameters": {
    "key": "example value"
  },
  "part_number": 1,
  "partsize": 1,
  "path": "path",
  "ref": "upload-1",
  "send": {
    "key": "example value"
  },
  "upload_uri": "example"
}
```

Begin file upload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Type of upload|
|ask_about_overwrites|boolean|false|none|If `true`, this file exists and you may wish to ask the user for overwrite confirmation|
|available_parts|integer(int32)|false|none|Number of parts in the upload|
|expires|string|false|none|Date/time of when this Upload part expires and the URL cannot be used any more|
|headers|object|false|none|Additional upload headers to provide as part of the upload|
|http_method|string|false|none|HTTP Method to use for uploading the part, usually `PUT`|
|next_partsize|integer(int32)|false|none|Size in bytes for this part|
|parallel_parts|boolean|false|none|If `true`, multiple parts may be uploaded in parallel.  If `false`, be sure to only upload one part at a time, in order.|
|parameters|object|false|none|Additional HTTP parameters to send with the upload|
|part_number|integer(int32)|false|none|Number of this upload part|
|partsize|integer(int32)|false|none|Size in bytes for the next upload part|
|path|string|false|none|New file path|
|ref|string|false|none|Reference name for this upload part|
|send|object|false|none|Content-Type and File to send|
|upload_uri|string|false|none|URI to upload this part to|

<h2 id="tocS_FormFieldEntity">FormFieldEntity</h2>
<!-- backwards compatibility -->
<a id="schemaformfieldentity"></a>
<a id="schema_FormFieldEntity"></a>
<a id="tocSformfieldentity"></a>
<a id="tocsformfieldentity"></a>

```json
{
  "default_option": "red",
  "field_type": "text",
  "form_field_set_id": 1,
  "help_text": "Help Text",
  "id": 1,
  "label": "Sample Label",
  "options_for_select": [
    "red",
    "green",
    "blue"
  ],
  "required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_option|string|false|none|Default option for radio and dropdown|
|field_type|string|false|none|Type of Field|
|form_field_set_id|integer(int32)|false|none|Form field set id|
|help_text|string|false|none|Help text to be displayed|
|id|integer(int32)|false|none|Form field id|
|label|string|false|none|Label to be displayed|
|options_for_select|[string]|false|none|Options to display for radio and dropdown|
|required|boolean|false|none|Is this a required field?|

#### Enumerated Values

|Property|Value|
|---|---|
|field_type|text|
|field_type|text_area|
|field_type|dropdown|
|field_type|radio|

<h2 id="tocS_FormFieldSetEntity">FormFieldSetEntity</h2>
<!-- backwards compatibility -->
<a id="schemaformfieldsetentity"></a>
<a id="schema_FormFieldSetEntity"></a>
<a id="tocSformfieldsetentity"></a>
<a id="tocsformfieldsetentity"></a>

```json
{
  "form_fields": [
    null
  ],
  "form_layout": [
    1,
    2,
    3,
    4
  ],
  "id": 1,
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "Sample Form Title"
}
```

List Form Field Sets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|form_fields|[[FormFieldEntity](#schemaformfieldentity)]|false|none|Associated form fields|
|form_layout|[integer(int32)]|false|none|Layout of the form|
|id|integer(int32)|false|none|Form field set id|
|skip_company|boolean|false|none|Any associated InboxRegistrations or BundleRegistrations can be saved without providing company|
|skip_email|boolean|false|none|Any associated InboxRegistrations or BundleRegistrations can be saved without providing email|
|skip_name|boolean|false|none|Any associated InboxRegistrations or BundleRegistrations can be saved without providing name|
|title|string|false|none|Title to be displayed|

<h2 id="tocS_GroupEntity">GroupEntity</h2>
<!-- backwards compatibility -->
<a id="schemagroupentity"></a>
<a id="schema_GroupEntity"></a>
<a id="tocSgroupentity"></a>
<a id="tocsgroupentity"></a>

```json
{
  "admin_ids": "1",
  "id": 1,
  "name": "owners",
  "notes": "example",
  "user_ids": "1",
  "usernames": "example"
}
```

List Groups

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin_ids|string|false|none|Comma-delimited list of user IDs who are group administrators (separated by commas)|
|id|integer(int32)|false|none|Group ID|
|name|string|false|none|Group name|
|notes|string|false|none|Notes about this group|
|user_ids|string|false|none|Comma-delimited list of user IDs who belong to this group (separated by commas)|
|usernames|string|false|none|Comma-delimited list of usernames who belong to this group (separated by commas)|

<h2 id="tocS_GroupUserEntity">GroupUserEntity</h2>
<!-- backwards compatibility -->
<a id="schemagroupuserentity"></a>
<a id="schema_GroupUserEntity"></a>
<a id="tocSgroupuserentity"></a>
<a id="tocsgroupuserentity"></a>

```json
{
  "admin": true,
  "group_id": 1,
  "group_name": "example",
  "user_id": 1,
  "usernames": [
    "user"
  ]
}
```

Create Group User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admin|boolean|false|none|Is this user an administrator of this group?|
|group_id|integer(int32)|false|none|Group ID|
|group_name|string|false|none|Group name|
|user_id|integer(int32)|false|none|User ID|
|usernames|[string]|false|none|A list of usernames for users in this group|

<h2 id="tocS_HistoryExportEntity">HistoryExportEntity</h2>
<!-- backwards compatibility -->
<a id="schemahistoryexportentity"></a>
<a id="schema_HistoryExportEntity"></a>
<a id="tocShistoryexportentity"></a>
<a id="tocshistoryexportentity"></a>

```json
{
  "end_at": "2000-01-01T01:00:00Z",
  "history_version": "example",
  "id": 1,
  "query_action": "read",
  "query_destination": "DestFolder",
  "query_failure_type": "bad_password",
  "query_file_id": "1",
  "query_folder": "Folder",
  "query_interface": "ftp",
  "query_ip": "127.0.0.1",
  "query_parent_id": "1",
  "query_path": "MyFile.txt",
  "query_src": "SrcFolder",
  "query_target_id": "1",
  "query_target_name": "full",
  "query_target_permission": "full",
  "query_target_permission_set": "desktop_app",
  "query_target_platform": "windows",
  "query_target_user_id": "1",
  "query_target_username": "jerry",
  "query_user_id": "1",
  "query_username": "jerry",
  "results_url": "https://files.com/history_results.csv",
  "start_at": "2000-01-01T01:00:00Z",
  "status": "ready"
}
```

Show History Export

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_at|string(date-time)|false|none|End date/time of export range.|
|history_version|string|false|none|Version of the history for the export.|
|id|integer(int32)|false|none|History Export ID|
|query_action|string|false|none|Filter results by this this action type. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`|
|query_destination|string|false|none|Return results that are file moves with this path as destination.|
|query_failure_type|string|false|none|If searching for Histories about login failures, this parameter restricts results to failures of this specific type.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`, `country_mismatch`|
|query_file_id|string|false|none|Return results that are file actions related to the file indicated by this File ID|
|query_folder|string|false|none|Return results that are file actions related to files or folders inside this folder path.|
|query_interface|string|false|none|Filter results by this this interface type. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`, `office`, `mobile`, `as2`, `inbound_email`, `remote`|
|query_ip|string|false|none|Filter results by this IP address.|
|query_parent_id|string|false|none|Return results that are file actions inside the parent folder specified by this folder ID|
|query_path|string|false|none|Return results that are file actions related to this path.|
|query_src|string|false|none|Return results that are file moves originating from this path.|
|query_target_id|string|false|none|If searching for Histories about specific objects (such as Users, or API Keys), this paremeter restricts results to objects that match this ID.|
|query_target_name|string|false|none|If searching for Histories about Users, Groups or other objects with names, this parameter restricts results to objects with this name/username.|
|query_target_permission|string|false|none|If searching for Histories about Permisisons, this parameter restricts results to permissions of this level.|
|query_target_permission_set|string|false|none|If searching for Histories about API keys, this parameter restricts results to API keys with this permission set.|
|query_target_platform|string|false|none|If searching for Histories about API keys, this parameter restricts results to API keys associated with this platform.|
|query_target_user_id|string|false|none|If searching for Histories about API keys, this parameter restricts results to API keys created by/for this user ID.|
|query_target_username|string|false|none|If searching for Histories about API keys, this parameter restricts results to API keys created by/for this username.|
|query_user_id|string|false|none|Return results that are actions performed by the user indiciated by this User ID|
|query_username|string|false|none|Filter results by this username.|
|results_url|string|false|none|If `status` is `ready`, this will be a URL where all the results can be downloaded at once as a CSV.|
|start_at|string(date-time)|false|none|Start date/time of export range.|
|status|string|false|none|Status of export.  Will be: `building`, `ready`, or `failed`|

<h2 id="tocS_HistoryExportResultEntity">HistoryExportResultEntity</h2>
<!-- backwards compatibility -->
<a id="schemahistoryexportresultentity"></a>
<a id="schema_HistoryExportResultEntity"></a>
<a id="tocShistoryexportresultentity"></a>
<a id="tocshistoryexportresultentity"></a>

```json
{
  "action": "read",
  "created_at": 1,
  "created_at_iso8601": 1,
  "destination": "DestFolder",
  "failure_type": "bad_password",
  "file_id": 1,
  "folder": "Folder",
  "id": 1,
  "interface": "ftp",
  "ip": "127.0.0.1",
  "parent_id": 1,
  "path": "MyFile.txt",
  "src": "SrcFolder",
  "target_expires_at": 1,
  "target_id": 1,
  "target_name": "full",
  "target_permission": "full",
  "target_permission_set": "desktop_app",
  "target_platform": "windows",
  "target_recursive": true,
  "target_user_id": 1,
  "target_username": "jerry",
  "user_id": 1,
  "username": "jerry"
}
```

List History Export Results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|What action was taken. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`|
|created_at|integer(int32)|false|none|When the action happened|
|created_at_iso8601|integer(int32)|false|none|When the action happened, in ISO8601 format.|
|destination|string|false|none|File moved to this destination folder|
|failure_type|string|false|none|The type of login failure, if applicable.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`, `country_mismatch`|
|file_id|integer(int32)|false|none|File ID related to the action|
|folder|string|false|none|Folder in which the action occurred|
|id|integer(int32)|false|none|Action ID|
|interface|string|false|none|Inteface through which the action was taken. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`, `office`, `mobile`, `as2`, `inbound_email`, `remote`|
|ip|string|false|none|Client IP that performed the action|
|parent_id|integer(int32)|false|none|ID of the parent folder|
|path|string|false|none|Path of the related action|
|src|string|false|none|File move originated from this path|
|target_expires_at|integer(int32)|false|none|If searching for Histories about API keys, this is when the API key will expire|
|target_id|integer(int32)|false|none|ID of the object (such as Users, or API Keys) on which the action was taken|
|target_name|string|false|none|Name of the User, Group or other object with a name related to this action|
|target_permission|string|false|none|Permission level of the action|
|target_permission_set|string|false|none|If searching for Histories about API keys, this represents the permission set of the associated  API key|
|target_platform|string|false|none|If searching for Histories about API keys, this is the platform on which the action was taken|
|target_recursive|boolean|false|none|Whether or not the action was recursive|
|target_user_id|integer(int32)|false|none|If searching for Histories about API keys, this is the User ID on which the action was taken|
|target_username|string|false|none|If searching for Histories about API keys, this is the username on which the action was taken|
|user_id|integer(int32)|false|none|User ID|
|username|string|false|none|Username of the user that performed the action|

<h2 id="tocS_ImageEntity">ImageEntity</h2>
<!-- backwards compatibility -->
<a id="schemaimageentity"></a>
<a id="schema_ImageEntity"></a>
<a id="tocSimageentity"></a>
<a id="tocsimageentity"></a>

```json
{
  "name": "My logo",
  "uri": "https://mysite.files.com/.../my_image.png"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Image name|
|uri|string|false|none|Image URI|

<h2 id="tocS_InboxRecipientEntity">InboxRecipientEntity</h2>
<!-- backwards compatibility -->
<a id="schemainboxrecipiententity"></a>
<a id="schema_InboxRecipientEntity"></a>
<a id="tocSinboxrecipiententity"></a>
<a id="tocsinboxrecipiententity"></a>

```json
{
  "company": "Acme Inc.",
  "name": "John Doe",
  "note": "Some note.",
  "recipient": "john.doe@example.com",
  "sent_at": "2000-01-01T01:00:00Z"
}
```

List Inbox Recipients

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|false|none|The recipient's company.|
|name|string|false|none|The recipient's name.|
|note|string|false|none|A note sent to the recipient with the inbox.|
|recipient|string|false|none|The recipient's email address.|
|sent_at|string(date-time)|false|none|When the Inbox was shared with this recipient.|

<h2 id="tocS_InboxRegistrationEntity">InboxRegistrationEntity</h2>
<!-- backwards compatibility -->
<a id="schemainboxregistrationentity"></a>
<a id="schema_InboxRegistrationEntity"></a>
<a id="tocSinboxregistrationentity"></a>
<a id="tocsinboxregistrationentity"></a>

```json
{
  "clickwrap_body": "example",
  "code": "abc123",
  "company": "Action Verb",
  "created_at": "2000-01-01T01:00:00Z",
  "email": "john.doe@files.com",
  "form_field_data": {
    "key": "example value"
  },
  "form_field_set_id": 1,
  "inbox_id": 1,
  "inbox_recipient_id": 1,
  "inbox_title": "example",
  "name": "account"
}
```

List Inbox Registrations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clickwrap_body|string|false|none|Clickwrap text that was shown to the registrant|
|code|string|false|none|Registration cookie code|
|company|string|false|none|Registrant company name|
|created_at|string(date-time)|false|none|Registration creation date/time|
|email|string|false|none|Registrant email address|
|form_field_data|object|false|none|Data for form field set with form field ids as keys and user data as values|
|form_field_set_id|integer(int32)|false|none|Id of associated form field set|
|inbox_id|integer(int32)|false|none|Id of associated inbox|
|inbox_recipient_id|integer(int32)|false|none|Id of associated inbox recipient|
|inbox_title|string|false|none|Title of associated inbox|
|name|string|false|none|Registrant name|

<h2 id="tocS_InboxUploadEntity">InboxUploadEntity</h2>
<!-- backwards compatibility -->
<a id="schemainboxuploadentity"></a>
<a id="schema_InboxUploadEntity"></a>
<a id="tocSinboxuploadentity"></a>
<a id="tocsinboxuploadentity"></a>

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "inbox_registration": {
    "clickwrap_body": "example",
    "code": "abc123",
    "company": "Action Verb",
    "created_at": "2000-01-01T01:00:00Z",
    "email": "john.doe@files.com",
    "form_field_data": {
      "key": "example value"
    },
    "form_field_set_id": 1,
    "inbox_id": 1,
    "inbox_recipient_id": 1,
    "inbox_title": "example",
    "name": "account"
  },
  "path": "a/b/test.txt"
}
```

List Inbox Uploads

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Upload date/time|
|inbox_registration|[InboxRegistrationEntity](#schemainboxregistrationentity)|false|none|List Inbox Registrations|
|path|string|false|none|Upload path|

<h2 id="tocS_InvoiceLineItemEntity">InvoiceLineItemEntity</h2>
<!-- backwards compatibility -->
<a id="schemainvoicelineitementity"></a>
<a id="schema_InvoiceLineItemEntity"></a>
<a id="tocSinvoicelineitementity"></a>
<a id="tocsinvoicelineitementity"></a>

```json
{
  "amount": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "description": "Service from 2019-01-01 through 2019-12-31",
  "plan": "Premier",
  "service_end_at": "2000-01-01T01:00:00Z",
  "service_start_at": "2000-01-01T01:00:00Z",
  "site": "My site",
  "type": "invoice",
  "updated_at": "2000-01-01T01:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|Invoice line item amount|
|created_at|string(date-time)|false|none|Invoice line item created at date/time|
|description|string|false|none|Invoice line item description|
|plan|string|false|none|Plan name|
|service_end_at|string(date-time)|false|none|Invoice line item service end date/time|
|service_start_at|string(date-time)|false|none|Invoice line item service start date/time|
|site|string|false|none|Site name|
|type|string|false|none|Invoice line item type|
|updated_at|string(date-time)|false|none|Invoice line item updated date/time|

#### Enumerated Values

|Property|Value|
|---|---|
|type|invoice|
|type|invoice_adjustment|
|type|usage_overage|
|type|user_overage|
|type|addon_subscription|
|type|misc_fee|
|type|usage_overage_adjustment|
|type|user_overage_adjustment|
|type|addon_subscription_adjustment|
|type|misc_fee_adjustment|
|type|credit_expiration|

<h2 id="tocS_IpAddressEntity">IpAddressEntity</h2>
<!-- backwards compatibility -->
<a id="schemaipaddressentity"></a>
<a id="schema_IpAddressEntity"></a>
<a id="tocSipaddressentity"></a>
<a id="tocsipaddressentity"></a>

```json
{
  "associated_with": "Site",
  "group_id": 1,
  "id": "Site",
  "ip_addresses": [
    "127.0.0.1"
  ]
}
```

List IP Addresses associated with the current site

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associated_with|string|false|none|The object that this public IP address list is associated with.|
|group_id|integer(int32)|false|none|Group ID|
|id|string|false|none|Unique label for list; used by Zapier and other integrations.|
|ip_addresses|[string]|false|none|A list of IP addresses.|

<h2 id="tocS_LockEntity">LockEntity</h2>
<!-- backwards compatibility -->
<a id="schemalockentity"></a>
<a id="schema_LockEntity"></a>
<a id="tocSlockentity"></a>
<a id="tocslockentity"></a>

```json
{
  "allow_access_by_any_user": true,
  "depth": "infinity",
  "exclusive": true,
  "owner": "user",
  "path": "locked_file",
  "recursive": true,
  "scope": "shared",
  "timeout": 1,
  "token": "17c54824e9931a4688ca032d03f6663c",
  "type": "write",
  "user_id": 1,
  "username": "username"
}
```

List Locks by path

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_access_by_any_user|boolean|false|none|Can lock be modified by users other than its creator?|
|depth|string|false|none|DEPRECATED: Lock depth|
|exclusive|boolean|false|none|Is lock exclusive?|
|owner|string|false|none|Owner of the lock.  This can be any arbitrary string.|
|path|string|false|none|Path|
|recursive|boolean|false|none|Does lock apply to subfolders?|
|scope|string|false|none|DEPRECATED: Lock scope|
|timeout|integer(int32)|false|none|Lock timeout in seconds|
|token|string|false|none|Lock token.  Use to release lock.|
|type|string|false|none|DEPRECATED: Lock type|
|user_id|integer(int32)|false|none|Lock creator user ID|
|username|string|false|none|Lock creator username|

<h2 id="tocS_MessageCommentEntity">MessageCommentEntity</h2>
<!-- backwards compatibility -->
<a id="schemamessagecommententity"></a>
<a id="schema_MessageCommentEntity"></a>
<a id="tocSmessagecommententity"></a>
<a id="tocsmessagecommententity"></a>

```json
{
  "body": "What a great idea, thank you!",
  "id": 1,
  "reactions": [
    null
  ]
}
```

List Message Comments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Comment body.|
|id|integer(int32)|false|none|Message Comment ID|
|reactions|[[MessageCommentReactionEntity](#schemamessagecommentreactionentity)]|false|none|Reactions to this comment.|

<h2 id="tocS_MessageCommentReactionEntity">MessageCommentReactionEntity</h2>
<!-- backwards compatibility -->
<a id="schemamessagecommentreactionentity"></a>
<a id="schema_MessageCommentReactionEntity"></a>
<a id="tocSmessagecommentreactionentity"></a>
<a id="tocsmessagecommentreactionentity"></a>

```json
{
  "emoji": "👍",
  "id": 1
}
```

List Message Comment Reactions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|false|none|Emoji used in the reaction.|
|id|integer(int32)|false|none|Reaction ID|

<h2 id="tocS_MessageEntity">MessageEntity</h2>
<!-- backwards compatibility -->
<a id="schemamessageentity"></a>
<a id="schema_MessageEntity"></a>
<a id="tocSmessageentity"></a>
<a id="tocsmessageentity"></a>

```json
{
  "body": "We should upgrade our Files.com account!",
  "comments": [
    null
  ],
  "id": 1,
  "subject": "Files.com Account Upgrade"
}
```

List Messages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|Message body.|
|comments|[[MessageCommentEntity](#schemamessagecommententity)]|false|none|Comments.|
|id|integer(int32)|false|none|Message ID|
|subject|string|false|none|Message subject.|

<h2 id="tocS_MessageReactionEntity">MessageReactionEntity</h2>
<!-- backwards compatibility -->
<a id="schemamessagereactionentity"></a>
<a id="schema_MessageReactionEntity"></a>
<a id="tocSmessagereactionentity"></a>
<a id="tocsmessagereactionentity"></a>

```json
{
  "emoji": "👍",
  "id": 1
}
```

List Message Reactions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji|string|false|none|Emoji used in the reaction.|
|id|integer(int32)|false|none|Reaction ID|

<h2 id="tocS_NotificationEntity">NotificationEntity</h2>
<!-- backwards compatibility -->
<a id="schemanotificationentity"></a>
<a id="schema_NotificationEntity"></a>
<a id="tocSnotificationentity"></a>
<a id="tocsnotificationentity"></a>

```json
{
  "group_id": 0,
  "group_name": "example",
  "id": 1,
  "message": "custom notification email message",
  "notify_on_copy": true,
  "notify_on_delete": true,
  "notify_on_download": true,
  "notify_on_move": true,
  "notify_on_upload": true,
  "notify_user_actions": true,
  "path": "path",
  "recursive": true,
  "send_interval": "fifteen_minutes",
  "suppressed_email": true,
  "trigger_by_share_recipients": true,
  "triggering_filenames": [
    "*.jpg",
    "notify_file.txt"
  ],
  "triggering_group_ids": [
    1
  ],
  "triggering_user_ids": [
    1
  ],
  "unsubscribed": true,
  "unsubscribed_reason": "example",
  "user_id": 1,
  "username": "User"
}
```

List Notifications

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|integer(int32)|false|none|Notification group id|
|group_name|string|false|none|Group name if applicable|
|id|integer(int32)|false|none|Notification ID|
|message|string|false|none|Custom message to include in notification emails.|
|notify_on_copy|boolean|false|none|Triggers notification when copying files to this path|
|notify_on_delete|boolean|false|none|Triggers notification when deleting files from this path|
|notify_on_download|boolean|false|none|Triggers notification when downloading files from this path|
|notify_on_move|boolean|false|none|Triggers notification when moving files to this path|
|notify_on_upload|boolean|false|none|Triggers notification when uploading new files to this path|
|notify_user_actions|boolean|false|none|Trigger notification on notification user actions?|
|path|string|false|none|Folder path to notify on|
|recursive|boolean|false|none|Enable notifications for each subfolder in this path|
|send_interval|string|false|none|The time interval that notifications are aggregated to|
|suppressed_email|boolean|false|none|If true, it means that the recipient at this user's email address has manually unsubscribed from all emails, or had their email "hard bounce", which means that we are unable to send mail to this user's current email address. Notifications will resume if the user changes their email address.|
|trigger_by_share_recipients|boolean|false|none|Notify when actions are performed by a share recipient?|
|triggering_filenames|[string]|false|none|Array of filenames (possibly with wildcards) to match for action path|
|triggering_group_ids|[integer(int32)]|false|none|Only notify on actions made by a member of one of the specified groups|
|triggering_user_ids|[integer(int32)]|false|none|Only notify on actions made one of the specified users|
|unsubscribed|boolean|false|none|Is the user unsubscribed from this notification?|
|unsubscribed_reason|string|false|none|The reason that the user unsubscribed|
|user_id|integer(int32)|false|none|Notification user ID|
|username|string|false|none|Notification username|

#### Enumerated Values

|Property|Value|
|---|---|
|send_interval|five_minutes|
|send_interval|fifteen_minutes|
|send_interval|hourly|
|send_interval|daily|
|unsubscribed_reason|none|
|unsubscribed_reason|unsubscribe_link_clicked|
|unsubscribed_reason|mail_bounced|
|unsubscribed_reason|mail_marked_as_spam|

<h2 id="tocS_PaymentLineItemEntity">PaymentLineItemEntity</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlineitementity"></a>
<a id="schema_PaymentLineItemEntity"></a>
<a id="tocSpaymentlineitementity"></a>
<a id="tocspaymentlineitementity"></a>

```json
{
  "amount": 1,
  "created_at": "2000-01-01T01:00:00Z",
  "invoice_id": 1,
  "payment_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|Payment line item amount|
|created_at|string(date-time)|false|none|Payment line item created at date/time|
|invoice_id|integer(int32)|false|none|Invoice ID|
|payment_id|integer(int32)|false|none|Payment ID|

<h2 id="tocS_PermissionEntity">PermissionEntity</h2>
<!-- backwards compatibility -->
<a id="schemapermissionentity"></a>
<a id="schema_PermissionEntity"></a>
<a id="tocSpermissionentity"></a>
<a id="tocspermissionentity"></a>

```json
{
  "group_id": 0,
  "group_name": "example",
  "id": 1,
  "path": "example",
  "permission": "full",
  "recursive": true,
  "user_id": 1,
  "username": "Sser"
}
```

List Permissions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|integer(int32)|false|none|Group ID|
|group_name|string|false|none|Group name if applicable|
|id|integer(int32)|false|none|Permission ID|
|path|string|false|none|Folder path|
|permission|string|false|none|Permission type|
|recursive|boolean|false|none|Does this permission apply to subfolders?|
|user_id|integer(int32)|false|none|User ID|
|username|string|false|none|User's username|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|full|
|permission|readonly|
|permission|writeonly|
|permission|list|
|permission|history|
|permission|admin|
|permission|bundle|

<h2 id="tocS_PreviewEntity">PreviewEntity</h2>
<!-- backwards compatibility -->
<a id="schemapreviewentity"></a>
<a id="schema_PreviewEntity"></a>
<a id="tocSpreviewentity"></a>
<a id="tocspreviewentity"></a>

```json
{
  "download_uri": "https://mysite.files.com/...",
  "id": 1,
  "size": "large",
  "status": "complete",
  "type": "image"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_uri|string|false|none|Link to download preview|
|id|integer(int32)|false|none|Preview ID|
|size|string|false|none|Preview size|
|status|string|false|none|Preview status.  Can be invalid, not_generated, generating, complete, or file_too_large|
|type|string|false|none|Preview type. Can be image, pdf, pdf_native, video, or audio|

<h2 id="tocS_PriorityEntity">PriorityEntity</h2>
<!-- backwards compatibility -->
<a id="schemapriorityentity"></a>
<a id="schema_PriorityEntity"></a>
<a id="tocSpriorityentity"></a>
<a id="tocspriorityentity"></a>

```json
{
  "color": "pink",
  "path": "foo/bar"
}
```

List Priorities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|The priority color|
|path|string|false|none|The path corresponding to the priority color|

<h2 id="tocS_ProjectEntity">ProjectEntity</h2>
<!-- backwards compatibility -->
<a id="schemaprojectentity"></a>
<a id="schema_ProjectEntity"></a>
<a id="tocSprojectentity"></a>
<a id="tocsprojectentity"></a>

```json
{
  "global_access": "none",
  "id": 1
}
```

List Projects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|global_access|string|false|none|Global access settings|
|id|integer(int32)|false|none|Project ID|

#### Enumerated Values

|Property|Value|
|---|---|
|global_access|none|
|global_access|anyone_with_read|
|global_access|anyone_with_full|

<h2 id="tocS_PublicIpAddressEntity">PublicIpAddressEntity</h2>
<!-- backwards compatibility -->
<a id="schemapublicipaddressentity"></a>
<a id="schema_PublicIpAddressEntity"></a>
<a id="tocSpublicipaddressentity"></a>
<a id="tocspublicipaddressentity"></a>

```json
{
  "ftp_enabled": true,
  "ip_address": "1.1.1.1",
  "server_name": "server-1",
  "sftp_enabled": true
}
```

List all possible public IP addresses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ftp_enabled|boolean|false|none|none|
|ip_address|string|false|none|The public IP address.|
|server_name|string|false|none|The name of the frontend server.|
|sftp_enabled|boolean|false|none|none|

<h2 id="tocS_PublicKeyEntity">PublicKeyEntity</h2>
<!-- backwards compatibility -->
<a id="schemapublickeyentity"></a>
<a id="schema_PublicKeyEntity"></a>
<a id="tocSpublickeyentity"></a>
<a id="tocspublickeyentity"></a>

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "fingerprint": "43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8",
  "id": 1,
  "title": "My public key"
}
```

List Public Keys

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Public key created at date/time|
|fingerprint|string|false|none|Public key fingerprint|
|id|integer(int32)|false|none|Public key ID|
|title|string|false|none|Public key title|

<h2 id="tocS_RemoteBandwidthSnapshotEntity">RemoteBandwidthSnapshotEntity</h2>
<!-- backwards compatibility -->
<a id="schemaremotebandwidthsnapshotentity"></a>
<a id="schema_RemoteBandwidthSnapshotEntity"></a>
<a id="tocSremotebandwidthsnapshotentity"></a>
<a id="tocsremotebandwidthsnapshotentity"></a>

```json
{
  "id": 1,
  "logged_at": "2000-01-01T01:00:00Z",
  "remote_server_id": 1,
  "sync_bytes_received": 1,
  "sync_bytes_sent": 1
}
```

List Remote Bandwidth Snapshots

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Site bandwidth ID|
|logged_at|string(date-time)|false|none|Time the site bandwidth report was logged|
|remote_server_id|integer(int32)|false|none|ID of related Remote Server|
|sync_bytes_received|number(double)|false|none|Site sync bandwidth report bytes received|
|sync_bytes_sent|number(double)|false|none|Site sync bandwidth report bytes sent|

<h2 id="tocS_RemoteServerConfigurationFileEntity">RemoteServerConfigurationFileEntity</h2>
<!-- backwards compatibility -->
<a id="schemaremoteserverconfigurationfileentity"></a>
<a id="schema_RemoteServerConfigurationFileEntity"></a>
<a id="tocSremoteserverconfigurationfileentity"></a>
<a id="tocsremoteserverconfigurationfileentity"></a>

```json
{
  "api_token": "example",
  "config_version": "example",
  "hostname": "example",
  "id": 1,
  "permission_set": "full",
  "port": 1,
  "private_key": "example",
  "public_key": "example",
  "root": "example",
  "server_host_key": "example",
  "status": "example",
  "subdomain": "example"
}
```

Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_token|string|false|none|Files Agent API Token|
|config_version|string|false|none|agent config version|
|hostname|string|false|none|none|
|id|integer(int32)|false|none|Agent ID|
|permission_set|string|false|none|none|
|port|integer(int32)|false|none|Incoming port for files agent connections|
|private_key|string|false|none|private key|
|public_key|string|false|none|public key|
|root|string|false|none|Agent local root path|
|server_host_key|string|false|none|none|
|status|string|false|none|either running or shutdown|
|subdomain|string|false|none|none|

<h2 id="tocS_RemoteServerEntity">RemoteServerEntity</h2>
<!-- backwards compatibility -->
<a id="schemaremoteserverentity"></a>
<a id="schema_RemoteServerEntity"></a>
<a id="tocSremoteserverentity"></a>
<a id="tocsremoteserverentity"></a>

```json
{
  "auth_account_name": "me@example.com",
  "auth_setup_link": "auth/:provider",
  "auth_status": "in_setup",
  "authentication_method": "password",
  "aws_access_key": "example",
  "azure_blob_storage_account": "storage-account-name",
  "azure_blob_storage_container": "container-name",
  "azure_blob_storage_sas_token": "storage-sas-token",
  "azure_files_storage_account": "storage-account-name",
  "azure_files_storage_sas_token": "storage-sas-token",
  "azure_files_storage_share_name": "share-name",
  "backblaze_b2_bucket": "my-bucket",
  "backblaze_b2_s3_endpoint": "s3.us-west-001.backblazeb2.com",
  "disabled": true,
  "enable_dedicated_ips": true,
  "filebase_access_key": "example",
  "filebase_bucket": "my-bucket",
  "files_agent_api_token": "example",
  "files_agent_permission_set": "read_write",
  "files_agent_root": "example",
  "google_cloud_storage_bucket": "my-bucket",
  "google_cloud_storage_project_id": "my-project",
  "hostname": "remote-server.com",
  "id": 1,
  "max_connections": 1,
  "name": "My Remote server",
  "one_drive_account_type": "personal",
  "pin_to_site_region": true,
  "pinned_region": "us-east-1",
  "port": 1,
  "rackspace_container": "my-container",
  "rackspace_region": "dfw",
  "rackspace_username": "rackspaceuser",
  "remote_home_path": "/home/user1",
  "s3_bucket": "my-bucket",
  "s3_compatible_access_key": "example",
  "s3_compatible_bucket": "my-bucket",
  "s3_compatible_endpoint": "mys3platform.com",
  "s3_compatible_region": "us-east-1",
  "s3_region": "us-east-1",
  "server_certificate": "require_match",
  "server_host_key": "[public key]",
  "server_type": "s3",
  "ssl": "if_available",
  "username": "user",
  "wasabi_access_key": "example",
  "wasabi_bucket": "my-bucket",
  "wasabi_region": "us-west-1"
}
```

Create Remote Server

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_account_name|string|false|none|Describes the authorized account|
|auth_setup_link|string|false|none|Returns link to login with an Oauth provider|
|auth_status|string|false|none|Either `in_setup` or `complete`|
|authentication_method|string|false|none|Type of authentication method|
|aws_access_key|string|false|none|AWS Access Key.|
|azure_blob_storage_account|string|false|none|Azure Blob Storage Account name|
|azure_blob_storage_container|string|false|none|Azure Blob Storage Container name|
|azure_blob_storage_sas_token|string|false|none|Shared Access Signature (SAS) token|
|azure_files_storage_account|string|false|none|Azure File Storage Account name|
|azure_files_storage_sas_token|string|false|none|Shared Access Signature (SAS) token|
|azure_files_storage_share_name|string|false|none|Azure File Storage Share name|
|backblaze_b2_bucket|string|false|none|Backblaze B2 Cloud Storage Bucket name|
|backblaze_b2_s3_endpoint|string|false|none|Backblaze B2 Cloud Storage S3 Endpoint|
|disabled|boolean|false|none|If true, this server has been disabled due to failures.  Make any change or set disabled to false to clear this flag.|
|enable_dedicated_ips|boolean|false|none|`true` if remote server only accepts connections from dedicated IPs|
|filebase_access_key|string|false|none|Filebase Access Key.|
|filebase_bucket|string|false|none|Filebase Bucket name|
|files_agent_api_token|string|false|none|Files Agent API Token|
|files_agent_permission_set|string|false|none|Local permissions for files agent. read_only, write_only, or read_write|
|files_agent_root|string|false|none|Agent local root path|
|google_cloud_storage_bucket|string|false|none|Google Cloud Storage bucket name|
|google_cloud_storage_project_id|string|false|none|Google Cloud Project ID|
|hostname|string|false|none|Hostname or IP address|
|id|integer(int32)|false|none|Remote server ID|
|max_connections|integer(int32)|false|none|Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).|
|name|string|false|none|Internal name for your reference|
|one_drive_account_type|string|false|none|Either personal or business_other account types|
|pin_to_site_region|boolean|false|none|If true, we will ensure that all communications with this remote server are made through the primary region of the site.  This setting can also be overridden by a sitewide setting which will force it to true.|
|pinned_region|string|false|none|If set, all communciations with this remote server are made through the provided region.|
|port|integer(int32)|false|none|Port for remote server.  Not needed for S3.|
|rackspace_container|string|false|none|The name of the container (top level directory) where files will sync.|
|rackspace_region|string|false|none|Three letter airport code for Rackspace region. See https://support.rackspace.com/how-to/about-regions/|
|rackspace_username|string|false|none|Rackspace username used to login to the Rackspace Cloud Control Panel.|
|remote_home_path|string|false|none|Initial home folder on remote server|
|s3_bucket|string|false|none|S3 bucket name|
|s3_compatible_access_key|string|false|none|S3-compatible Access Key.|
|s3_compatible_bucket|string|false|none|S3-compatible Bucket name|
|s3_compatible_endpoint|string|false|none|S3-compatible endpoint|
|s3_compatible_region|string|false|none|S3-compatible endpoint|
|s3_region|string|false|none|S3 region|
|server_certificate|string|false|none|Remote server certificate|
|server_host_key|string|false|none|Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts|
|server_type|string|false|none|Remote server type.|
|ssl|string|false|none|Should we require SSL?|
|username|string|false|none|Remote server username.  Not needed for S3 buckets.|
|wasabi_access_key|string|false|none|Wasabi access key.|
|wasabi_bucket|string|false|none|Wasabi Bucket name|
|wasabi_region|string|false|none|Wasabi region|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_status|not_applicable|
|auth_status|in_setup|
|auth_status|complete|
|auth_status|reauthenticate|
|files_agent_permission_set|read_write|
|files_agent_permission_set|read_only|
|files_agent_permission_set|write_only|
|one_drive_account_type|personal|
|one_drive_account_type|business_other|
|server_certificate|require_match|
|server_certificate|allow_any|
|server_type|ftp|
|server_type|sftp|
|server_type|s3|
|server_type|google_cloud_storage|
|server_type|webdav|
|server_type|wasabi|
|server_type|backblaze_b2|
|server_type|one_drive|
|server_type|rackspace|
|server_type|box|
|server_type|dropbox|
|server_type|google_drive|
|server_type|azure|
|server_type|sharepoint|
|server_type|s3_compatible|
|server_type|azure_files|
|server_type|files_agent|
|server_type|filebase|
|ssl|if_available|
|ssl|require|
|ssl|require_implicit|
|ssl|never|

<h2 id="tocS_RequestEntity">RequestEntity</h2>
<!-- backwards compatibility -->
<a id="schemarequestentity"></a>
<a id="schema_RequestEntity"></a>
<a id="tocSrequestentity"></a>
<a id="tocsrequestentity"></a>

```json
{
  "automation_id": "example",
  "destination": "example",
  "id": 1,
  "path": "example",
  "source": "example",
  "user_display_name": "example"
}
```

List Requests

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automation_id|string|false|none|ID of automation that created request|
|destination|string|false|none|Destination filename|
|id|integer(int32)|false|none|Request ID|
|path|string|false|none|Folder path|
|source|string|false|none|Source filename, if applicable|
|user_display_name|string|false|none|User making the request (if applicable)|

<h2 id="tocS_SessionEntity">SessionEntity</h2>
<!-- backwards compatibility -->
<a id="schemasessionentity"></a>
<a id="schema_SessionEntity"></a>
<a id="tocSsessionentity"></a>
<a id="tocssessionentity"></a>

```json
{
  "id": "60525f92e859c4c3d74cb02fd176b1525901b525",
  "language": "en",
  "read_only": true,
  "sftp_insecure_ciphers": true
}
```

Create user session (log in)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Session ID|
|language|string|false|none|Session language|
|read_only|boolean|false|none|Is this session read only?|
|sftp_insecure_ciphers|boolean|false|none|Are insecure SFTP ciphers allowed for this user? (If this is set to true, the site administrator has signaled that it is ok to use less secure SSH ciphers for this user.)|

<h2 id="tocS_SettingsChangeEntity">SettingsChangeEntity</h2>
<!-- backwards compatibility -->
<a id="schemasettingschangeentity"></a>
<a id="schema_SettingsChangeEntity"></a>
<a id="tocSsettingschangeentity"></a>
<a id="tocssettingschangeentity"></a>

```json
{
  "changes": [
    "example"
  ],
  "created_at": "2000-01-01T01:00:00Z",
  "user_id": 1,
  "user_is_files_support": true,
  "username": "some_user"
}
```

List Settings Changes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[string]|false|none|Markdown-formatted change messages.|
|created_at|string(date-time)|false|none|The time this change was made|
|user_id|integer(int32)|false|none|The user id responsible for this change|
|user_is_files_support|boolean|false|none|true if this change was performed by Files.com support.|
|username|string|false|none|The username of the user responsible for this change|

<h2 id="tocS_SftpHostKeyEntity">SftpHostKeyEntity</h2>
<!-- backwards compatibility -->
<a id="schemasftphostkeyentity"></a>
<a id="schema_SftpHostKeyEntity"></a>
<a id="tocSsftphostkeyentity"></a>
<a id="tocssftphostkeyentity"></a>

```json
{
  "fingerprint_md5": "example",
  "fingerprint_sha256": "example",
  "id": 1,
  "name": "example"
}
```

Create Sftp Host Key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fingerprint_md5|string|false|none|MD5 Fingerpint of the public key|
|fingerprint_sha256|string|false|none|SHA256 Fingerpint of the public key|
|id|integer(int32)|false|none|Sftp Host Key ID|
|name|string|false|none|The friendly name of this SFTP Host Key.|

<h2 id="tocS_SiteEntity">SiteEntity</h2>
<!-- backwards compatibility -->
<a id="schemasiteentity"></a>
<a id="schema_SiteEntity"></a>
<a id="tocSsiteentity"></a>
<a id="tocssiteentity"></a>

```json
{
  "active_sftp_host_key_id": 1,
  "admin_user_id": 1,
  "allow_bundle_names": true,
  "allowed_2fa_method_bypass_for_ftp_sftp_dav": true,
  "allowed_2fa_method_sms": true,
  "allowed_2fa_method_totp": true,
  "allowed_2fa_method_u2f": true,
  "allowed_2fa_method_webauthn": true,
  "allowed_2fa_method_yubi": true,
  "allowed_countries": "US,DE",
  "allowed_ips": "example",
  "ask_about_overwrites": true,
  "bundle_activity_notifications": "never",
  "bundle_expiration": 1,
  "bundle_password_required": true,
  "bundle_registration_notifications": "never",
  "bundle_require_share_recipient": true,
  "bundle_upload_receipt_notifications": "never",
  "bundle_watermark_attachment": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "bundle_watermark_value": {
    "key": "example value"
  },
  "color2_left": "#0066a7",
  "color2_link": "#d34f5d",
  "color2_text": "#0066a7",
  "color2_top": "#000000",
  "color2_top_text": "#ffffff",
  "contact_name": "John Doe",
  "created_at": "2000-01-01T01:00:00Z",
  "currency": "USD",
  "custom_namespace": true,
  "days_to_retain_backups": 30,
  "default_time_zone": "Pacific Time (US & Canada)",
  "desktop_app": true,
  "desktop_app_session_ip_pinning": true,
  "desktop_app_session_lifetime": 1,
  "disable_files_certificate_generation": true,
  "disable_notifications": true,
  "disable_password_reset": true,
  "disable_users_from_inactivity_period_days": 1,
  "disallowed_countries": "US,DE",
  "domain": "my-custom-domain.com",
  "domain_hsts_header": true,
  "domain_letsencrypt_chain": "example",
  "email": "example",
  "folder_permissions_groups_only": true,
  "ftp_enabled": true,
  "hipaa": true,
  "icon128": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon16": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon32": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "icon48": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "immutable_files_set_at": "2000-01-01T01:00:00Z",
  "include_password_in_welcome_email": true,
  "language": "en",
  "ldap_base_dn": "example",
  "ldap_domain": "mysite.com",
  "ldap_enabled": true,
  "ldap_group_action": "disabled",
  "ldap_group_exclusion": "example",
  "ldap_group_inclusion": "example",
  "ldap_host": "ldap.site.com",
  "ldap_host_2": "ldap2.site.com",
  "ldap_host_3": "ldap3.site.com",
  "ldap_port": 1,
  "ldap_secure": true,
  "ldap_type": "open_ldap",
  "ldap_user_action": "disabled",
  "ldap_user_include_groups": "example",
  "ldap_username": "[ldap username]",
  "ldap_username_field": "sAMAccountName",
  "login_help_text": "Login page help text.",
  "logo": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "max_prior_passwords": 1,
  "mobile_app": true,
  "mobile_app_session_ip_pinning": true,
  "mobile_app_session_lifetime": 1,
  "motd_text": "example",
  "motd_use_for_ftp": true,
  "motd_use_for_sftp": true,
  "name": "My Site",
  "next_billing_amount": 1,
  "next_billing_date": "Apr 20",
  "non_sso_groups_allowed": true,
  "non_sso_users_allowed": true,
  "office_integration_available": true,
  "office_integration_type": "example",
  "oncehub_link": "https://go.oncehub.com/files",
  "opt_out_global": true,
  "overage_notified_at": "2000-01-01T01:00:00Z",
  "overage_notify": true,
  "overdue": true,
  "password_min_length": 1,
  "password_require_letter": true,
  "password_require_mixed": true,
  "password_require_number": true,
  "password_require_special": true,
  "password_require_unbreached": true,
  "password_requirements_apply_to_bundles": true,
  "password_validity_days": 1,
  "phone": "555-555-5555",
  "pin_all_remote_servers_to_site_region": true,
  "reply_to_email": "example",
  "require_2fa": true,
  "require_2fa_stop_time": "2000-01-01T01:00:00Z",
  "require_2fa_user_type": "`site_admins`",
  "session": {
    "id": "60525f92e859c4c3d74cb02fd176b1525901b525",
    "language": "en",
    "read_only": true,
    "sftp_insecure_ciphers": true
  },
  "session_expiry": 6,
  "session_expiry_minutes": 360,
  "session_pinned_by_ip": true,
  "sftp_enabled": true,
  "sftp_host_key_type": "default",
  "sftp_insecure_ciphers": true,
  "sftp_user_root_enabled": true,
  "sharing_enabled": true,
  "show_request_access_link": true,
  "site_footer": "example",
  "site_header": "example",
  "smtp_address": "smtp.my-mail-server.com",
  "smtp_authentication": "plain",
  "smtp_from": "me@my-mail-server.com",
  "smtp_port": 25,
  "smtp_username": "mail",
  "ssl_required": true,
  "subdomain": "mysite",
  "switch_to_plan_date": "2000-01-01T01:00:00Z",
  "tls_disabled": true,
  "trial_days_left": 1,
  "trial_until": "2000-01-01T01:00:00Z",
  "updated_at": "2000-01-01T01:00:00Z",
  "uploads_via_email_authentication": true,
  "use_provided_modified_at": true,
  "user": {
    "active_2fa": true,
    "admin_group_ids": [
      1
    ],
    "allowed_ips": "127.0.0.1",
    "api_keys_count": 1,
    "attachments_permission": true,
    "authenticate_until": "2000-01-01T01:00:00Z",
    "authentication_method": "password",
    "avatar_url": "example",
    "billing_permission": true,
    "bypass_inactive_disable": true,
    "bypass_site_allowed_ips": true,
    "company": "ACME Corp.",
    "created_at": "2000-01-01T01:00:00Z",
    "dav_permission": true,
    "days_remaining_until_password_expire": 1,
    "disabled": true,
    "email": "example",
    "externally_managed": true,
    "first_login_at": "2000-01-01T01:00:00Z",
    "ftp_permission": true,
    "group_ids": "example",
    "header_text": "User-specific message.",
    "id": 1,
    "language": "en",
    "last_active_at": "2000-01-01T01:00:00Z",
    "last_api_use_at": "2000-01-01T01:00:00Z",
    "last_dav_login_at": "2000-01-01T01:00:00Z",
    "last_desktop_login_at": "2000-01-01T01:00:00Z",
    "last_ftp_login_at": "2000-01-01T01:00:00Z",
    "last_login_at": "2000-01-01T01:00:00Z",
    "last_protocol_cipher": "example",
    "last_restapi_login_at": "2000-01-01T01:00:00Z",
    "last_sftp_login_at": "2000-01-01T01:00:00Z",
    "last_web_login_at": "2000-01-01T01:00:00Z",
    "lockout_expires": "2000-01-01T01:00:00Z",
    "name": "John Doe",
    "notes": "Internal notes on this user.",
    "notification_daily_send_time": 18,
    "office_integration_enabled": true,
    "password_expire_at": "2000-01-01T01:00:00Z",
    "password_expired": true,
    "password_set_at": "2000-01-01T01:00:00Z",
    "password_validity_days": 1,
    "public_keys_count": 1,
    "receive_admin_alerts": true,
    "require_2fa": "always_require",
    "require_password_change": true,
    "restapi_permission": true,
    "self_managed": true,
    "sftp_permission": true,
    "site_admin": true,
    "skip_welcome_screen": true,
    "ssl_required": "always_require",
    "sso_strategy_id": 1,
    "subscribe_to_newsletter": true,
    "time_zone": "Pacific Time (US & Canada)",
    "type_of_2fa": "yubi",
    "user_root": "example",
    "username": "user"
  },
  "user_lockout": true,
  "user_lockout_lock_period": 1,
  "user_lockout_tries": 1,
  "user_lockout_within": 6,
  "user_requests_enabled": true,
  "user_requests_notify_admins": true,
  "welcome_custom_text": "Welcome to my site!",
  "welcome_email_cc": "example",
  "welcome_email_enabled": true,
  "welcome_email_subject": "example",
  "welcome_screen": "user_controlled",
  "windows_mode_ftp": true
}
```

Show site settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_sftp_host_key_id|integer(int32)|false|none|Id of the currently selected custom SFTP Host Key|
|admin_user_id|integer(int32)|false|none|User ID for the main site administrator|
|allow_bundle_names|boolean|false|none|Are manual Bundle names allowed?|
|allowed_2fa_method_bypass_for_ftp_sftp_dav|boolean|false|none|Are users allowed to configure their two factor authentication to be bypassed for FTP/SFTP/WebDAV?|
|allowed_2fa_method_sms|boolean|false|none|Is SMS two factor authentication allowed?|
|allowed_2fa_method_totp|boolean|false|none|Is TOTP two factor authentication allowed?|
|allowed_2fa_method_u2f|boolean|false|none|Is U2F two factor authentication allowed?|
|allowed_2fa_method_webauthn|boolean|false|none|Is WebAuthn two factor authentication allowed?|
|allowed_2fa_method_yubi|boolean|false|none|Is yubikey two factor authentication allowed?|
|allowed_countries|string|false|none|Comma seperated list of allowed Country codes|
|allowed_ips|string|false|none|List of allowed IP addresses|
|ask_about_overwrites|boolean|false|none|If false, rename conflicting files instead of asking for overwrite confirmation.  Only applies to web interface.|
|bundle_activity_notifications|string|false|none|Do Bundle owners receive activity notifications?|
|bundle_expiration|integer(int32)|false|none|Site-wide Bundle expiration in days|
|bundle_password_required|boolean|false|none|Do Bundles require password protection?|
|bundle_registration_notifications|string|false|none|Do Bundle owners receive registration notification?|
|bundle_require_share_recipient|boolean|false|none|Do Bundles require recipients for sharing?|
|bundle_upload_receipt_notifications|string|false|none|Do Bundle uploaders receive upload confirmation notifications?|
|bundle_watermark_attachment|[ImageEntity](#schemaimageentity)|false|none|none|
|bundle_watermark_value|object|false|none|Preview watermark settings applied to all bundle items. Uses the same keys as Behavior.value|
|color2_left|string|false|none|Page link and button color|
|color2_link|string|false|none|Top bar link color|
|color2_text|string|false|none|Page link and button color|
|color2_top|string|false|none|Top bar background color|
|color2_top_text|string|false|none|Top bar text color|
|contact_name|string|false|none|Site main contact name|
|created_at|string(date-time)|false|none|Time this site was created|
|currency|string|false|none|Preferred currency|
|custom_namespace|boolean|false|none|Is this site using a custom namespace for users?|
|days_to_retain_backups|integer(int32)|false|none|Number of days to keep deleted files|
|default_time_zone|string|false|none|Site default time zone|
|desktop_app|boolean|false|none|Is the desktop app enabled?|
|desktop_app_session_ip_pinning|boolean|false|none|Is desktop app session IP pinning enabled?|
|desktop_app_session_lifetime|integer(int32)|false|none|Desktop app session lifetime (in hours)|
|disable_files_certificate_generation|boolean|false|none|If set, Files.com will not set the CAA records required to generate future SSL certificates for this domain.|
|disable_notifications|boolean|false|none|Are notifications disabled?|
|disable_password_reset|boolean|false|none|Is password reset disabled?|
|disable_users_from_inactivity_period_days|integer(int32)|false|none|If greater than zero, users will unable to login if they do not show activity within this number of days.|
|disallowed_countries|string|false|none|Comma seperated list of disallowed Country codes|
|domain|string|false|none|Custom domain|
|domain_hsts_header|boolean|false|none|Send HSTS (HTTP Strict Transport Security) header when visitors access the site via a custom domain?|
|domain_letsencrypt_chain|string|false|none|Letsencrypt chain to use when registering SSL Certificate for domain.|
|email|string(email)|false|none|Main email for this site|
|folder_permissions_groups_only|boolean|false|none|If true, permissions for this site must be bound to a group (not a user). Otherwise, permissions must be bound to a user.|
|ftp_enabled|boolean|false|none|Is FTP enabled?|
|hipaa|boolean|false|none|Is there a signed HIPAA BAA between Files.com and this site?|
|icon128|[ImageEntity](#schemaimageentity)|false|none|none|
|icon16|[ImageEntity](#schemaimageentity)|false|none|none|
|icon32|[ImageEntity](#schemaimageentity)|false|none|none|
|icon48|[ImageEntity](#schemaimageentity)|false|none|none|
|immutable_files_set_at|string(date-time)|false|none|Can files be modified?|
|include_password_in_welcome_email|boolean|false|none|Include password in emails to new users?|
|language|string|false|none|Site default language|
|ldap_base_dn|string|false|none|Base DN for looking up users in LDAP server|
|ldap_domain|string|false|none|Domain name that will be appended to usernames|
|ldap_enabled|boolean|false|none|Main LDAP setting: is LDAP enabled?|
|ldap_group_action|string|false|none|Should we sync groups from LDAP server?|
|ldap_group_exclusion|string|false|none|Comma or newline separated list of group names (with optional wildcards) to exclude when syncing.|
|ldap_group_inclusion|string|false|none|Comma or newline separated list of group names (with optional wildcards) to include when syncing.|
|ldap_host|string|false|none|LDAP host|
|ldap_host_2|string|false|none|LDAP backup host|
|ldap_host_3|string|false|none|LDAP backup host|
|ldap_port|integer(int32)|false|none|LDAP port|
|ldap_secure|boolean|false|none|Use secure LDAP?|
|ldap_type|string|false|none|LDAP type|
|ldap_user_action|string|false|none|Should we sync users from LDAP server?|
|ldap_user_include_groups|string|false|none|Comma or newline separated list of group names (with optional wildcards) - if provided, only users in these groups will be added or synced.|
|ldap_username|string|false|none|Username for signing in to LDAP server.|
|ldap_username_field|string|false|none|LDAP username field|
|login_help_text|string|false|none|Login help text|
|logo|[ImageEntity](#schemaimageentity)|false|none|none|
|max_prior_passwords|integer(int32)|false|none|Number of prior passwords to disallow|
|mobile_app|boolean|false|none|Is the mobile app enabled?|
|mobile_app_session_ip_pinning|boolean|false|none|Is mobile app session IP pinning enabled?|
|mobile_app_session_lifetime|integer(int32)|false|none|Mobile app session lifetime (in hours)|
|motd_text|string|false|none|A message to show users when they connect via FTP or SFTP.|
|motd_use_for_ftp|boolean|false|none|Show message to users connecting via FTP|
|motd_use_for_sftp|boolean|false|none|Show message to users connecting via SFTP|
|name|string|false|none|Site name|
|next_billing_amount|number(double)|false|none|Next billing amount|
|next_billing_date|string|false|none|Next billing date|
|non_sso_groups_allowed|boolean|false|none|If true, groups can be manually created / modified / deleted by Site Admins. Otherwise, groups can only be managed via your SSO provider.|
|non_sso_users_allowed|boolean|false|none|If true, users can be manually created / modified / deleted by Site Admins. Otherwise, users can only be managed via your SSO provider.|
|office_integration_available|boolean|false|none|Allow users to use Office for the web?|
|office_integration_type|string|false|none|Office integration application used to edit and view the MS Office documents|
|oncehub_link|string|false|none|Link to scheduling a meeting with our Sales team|
|opt_out_global|boolean|false|none|Use servers in the USA only?|
|overage_notified_at|string(date-time)|false|none|Last time the site was notified about an overage|
|overage_notify|boolean|false|none|Notify site email of overages?|
|overdue|boolean|false|none|Is this site's billing overdue?|
|password_min_length|integer(int32)|false|none|Shortest password length for users|
|password_require_letter|boolean|false|none|Require a letter in passwords?|
|password_require_mixed|boolean|false|none|Require lower and upper case letters in passwords?|
|password_require_number|boolean|false|none|Require a number in passwords?|
|password_require_special|boolean|false|none|Require special characters in password?|
|password_require_unbreached|boolean|false|none|Require passwords that have not been previously breached? (see https://haveibeenpwned.com/)|
|password_requirements_apply_to_bundles|boolean|false|none|Require bundles' passwords, and passwords for other items (inboxes, public shares, etc.) to conform to the same requirements as users' passwords?|
|password_validity_days|integer(int32)|false|none|Number of days password is valid|
|phone|string|false|none|Site phone number|
|pin_all_remote_servers_to_site_region|boolean|false|none|If true, we will ensure that all internal communications with any remote server are made through the primary region of the site. This setting overrides individual remote server settings.|
|reply_to_email|string(email)|false|none|Reply-to email for this site|
|require_2fa|boolean|false|none|Require two-factor authentication for all users?|
|require_2fa_stop_time|string(date-time)|false|none|If set, requirement for two-factor authentication has been scheduled to end on this date-time.|
|require_2fa_user_type|string|false|none|What type of user is required to use two-factor authentication (when require_2fa is set to `true` for this site)?|
|session|[SessionEntity](#schemasessionentity)|false|none|Create user session (log in)|
|session_expiry|number(double)|false|none|Session expiry in hours|
|session_expiry_minutes|integer(int32)|false|none|Session expiry in minutes|
|session_pinned_by_ip|boolean|false|none|Are sessions locked to the same IP? (i.e. do users need to log in again if they change IPs?)|
|sftp_enabled|boolean|false|none|Is SFTP enabled?|
|sftp_host_key_type|string|false|none|Sftp Host Key Type|
|sftp_insecure_ciphers|boolean|false|none|Are Insecure Ciphers allowed for SFTP?  Note:  Settting TLS Disabled -> True will always allow insecure ciphers for SFTP as well.  Enabling this is insecure.|
|sftp_user_root_enabled|boolean|false|none|Use user FTP roots also for SFTP?|
|sharing_enabled|boolean|false|none|Allow bundle creation|
|show_request_access_link|boolean|false|none|Show request access link for users without access?  Currently unused.|
|site_footer|string|false|none|Custom site footer text|
|site_header|string|false|none|Custom site header text|
|smtp_address|string|false|none|SMTP server hostname or IP|
|smtp_authentication|string|false|none|SMTP server authentication type|
|smtp_from|string|false|none|From address to use when mailing through custom SMTP|
|smtp_port|integer(int32)|false|none|SMTP server port|
|smtp_username|string|false|none|SMTP server username|
|ssl_required|boolean|false|none|Is SSL required?  Disabling this is insecure.|
|subdomain|string|false|none|Site subdomain|
|switch_to_plan_date|string(date-time)|false|none|If switching plans, when does the new plan take effect?|
|tls_disabled|boolean|false|none|Are Insecure TLS and SFTP Ciphers allowed?  Enabling this is insecure.|
|trial_days_left|integer(int32)|false|none|Number of days left in trial|
|trial_until|string(date-time)|false|none|When does this Site trial expire?|
|updated_at|string(date-time)|false|none|Last time this Site was updated|
|uploads_via_email_authentication|boolean|false|none|Do incoming emails in the Inboxes require checking for SPF/DKIM/DMARC?|
|use_provided_modified_at|boolean|false|none|Allow uploaders to set `provided_modified_at` for uploaded files?|
|user|[UserEntity](#schemauserentity)|false|none|Create User|
|user_lockout|boolean|false|none|Will users be locked out after incorrect login attempts?|
|user_lockout_lock_period|integer(int32)|false|none|How many hours to lock user out for failed password?|
|user_lockout_tries|integer(int32)|false|none|Number of login tries within `user_lockout_within` hours before users are locked out|
|user_lockout_within|integer(int32)|false|none|Number of hours for user lockout window|
|user_requests_enabled|boolean|false|none|Enable User Requests feature|
|user_requests_notify_admins|boolean|false|none|Send email to site admins when a user request is received?|
|welcome_custom_text|string|false|none|Custom text send in user welcome email|
|welcome_email_cc|string(email)|false|none|Include this email in welcome emails if enabled|
|welcome_email_enabled|boolean|false|none|Will the welcome email be sent to new users?|
|welcome_email_subject|string|false|none|Include this email subject in welcome emails if enabled|
|welcome_screen|string|false|none|Does the welcome screen appear?|
|windows_mode_ftp|boolean|false|none|Does FTP user Windows emulation mode?|

#### Enumerated Values

|Property|Value|
|---|---|
|bundle_activity_notifications|never|
|bundle_activity_notifications|always|
|bundle_activity_notifications|per_bundle_setting|
|bundle_registration_notifications|never|
|bundle_registration_notifications|always|
|bundle_registration_notifications|per_bundle_setting|
|bundle_upload_receipt_notifications|never|
|bundle_upload_receipt_notifications|always|
|bundle_upload_receipt_notifications|per_bundle_setting|
|domain_letsencrypt_chain|default|
|domain_letsencrypt_chain|isrg_root_x1|
|domain_letsencrypt_chain|dst_root_ca_x3|
|office_integration_type|only_office|
|office_integration_type|office_365|
|office_integration_type|disabled|
|require_2fa_user_type|all|
|require_2fa_user_type|folder_and_site_admins|
|require_2fa_user_type|site_admins|
|sftp_host_key_type|default|
|sftp_host_key_type|exavault|
|sftp_host_key_type|custom|
|welcome_screen|enabled|
|welcome_screen|hidden|
|welcome_screen|disabled|

<h2 id="tocS_SsoStrategyEntity">SsoStrategyEntity</h2>
<!-- backwards compatibility -->
<a id="schemassostrategyentity"></a>
<a id="schema_SsoStrategyEntity"></a>
<a id="tocSssostrategyentity"></a>
<a id="tocsssostrategyentity"></a>

```json
{
  "deprovision_behavior": "disable",
  "deprovision_groups": true,
  "deprovision_users": true,
  "enabled": true,
  "id": 1,
  "label": "My Corporate SSO Provider",
  "ldap_base_dn": "example",
  "ldap_domain": "mysite.com",
  "ldap_host": "ldap.site.com",
  "ldap_host_2": "ldap2.site.com",
  "ldap_host_3": "ldap3.site.com",
  "ldap_port": 1,
  "ldap_secure": true,
  "ldap_username": "[ldap username]",
  "ldap_username_field": "sAMAccountName",
  "logo_url": "https://mysite.files.com/.../logo.png",
  "protocol": "oauth2",
  "provider": "okta",
  "provision_attachments_permission": true,
  "provision_company": "ACME Corp.",
  "provision_dav_permission": true,
  "provision_email_signup_groups": "Employees",
  "provision_ftp_permission": true,
  "provision_group_default": "Employees",
  "provision_group_exclusion": "Employees",
  "provision_group_inclusion": "Employees",
  "provision_group_required": "example",
  "provision_groups": true,
  "provision_sftp_permission": true,
  "provision_site_admin_groups": "Employees",
  "provision_time_zone": "Eastern Time (US & Canada)",
  "provision_users": true,
  "saml_provider_cert_fingerprint": "example",
  "saml_provider_issuer_url": "example",
  "saml_provider_metadata_content": "example",
  "saml_provider_metadata_url": "example",
  "saml_provider_slo_target_url": "example",
  "saml_provider_sso_target_url": "example",
  "scim_authentication_method": "example",
  "scim_oauth_access_token": "example",
  "scim_oauth_access_token_expires_at": "example",
  "scim_username": "example",
  "subdomain": "my-site"
}
```

List Sso Strategies

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprovision_behavior|string|false|none|Method used for deprovisioning users.|
|deprovision_groups|boolean|false|none|Auto-deprovision group membership based on group memberships on the SSO side?|
|deprovision_users|boolean|false|none|Auto-deprovision users?|
|enabled|boolean|false|none|Is strategy enabled?  This may become automatically set to `false` after a high number and duration of failures.|
|id|integer(int32)|false|none|ID|
|label|string|false|none|Custom label for the SSO provider on the login page.|
|ldap_base_dn|string|false|none|Base DN for looking up users in LDAP server|
|ldap_domain|string|false|none|Domain name that will be appended to LDAP usernames|
|ldap_host|string|false|none|LDAP host|
|ldap_host_2|string|false|none|LDAP backup host|
|ldap_host_3|string|false|none|LDAP backup host|
|ldap_port|integer(int32)|false|none|LDAP port|
|ldap_secure|boolean|false|none|Use secure LDAP?|
|ldap_username|string|false|none|Username for signing in to LDAP server.|
|ldap_username_field|string|false|none|LDAP username field|
|logo_url|string|false|none|URL holding a custom logo for the SSO provider on the login page.|
|protocol|string|false|none|SSO Protocol|
|provider|string|false|none|Provider name|
|provision_attachments_permission|boolean|false|none|DEPRECATED: Auto-provisioned users get Sharing permission. Use a Group with the Bundle permission instead.|
|provision_company|string|false|none|Default company for auto provisioned users.|
|provision_dav_permission|boolean|false|none|Auto-provisioned users get WebDAV permission?|
|provision_email_signup_groups|string|false|none|Comma-separated list of group names whose members will be created with email_signup authentication.|
|provision_ftp_permission|boolean|false|none|Auto-provisioned users get FTP permission?|
|provision_group_default|string|false|none|Comma-separated list of group names for groups to automatically add all auto-provisioned users to.|
|provision_group_exclusion|string|false|none|Comma-separated list of group names for groups (with optional wildcards) that will be excluded from auto-provisioning.|
|provision_group_inclusion|string|false|none|Comma-separated list of group names for groups (with optional wildcards) that will be auto-provisioned.|
|provision_group_required|string|false|none|Comma or newline separated list of group names (with optional wildcards) to require membership for user provisioning.|
|provision_groups|boolean|false|none|Auto-provision group membership based on group memberships on the SSO side?|
|provision_sftp_permission|boolean|false|none|Auto-provisioned users get SFTP permission?|
|provision_site_admin_groups|string|false|none|Comma-separated list of group names whose members will be created as Site Admins.|
|provision_time_zone|string|false|none|Default time zone for auto provisioned users.|
|provision_users|boolean|false|none|Auto-provision users?|
|saml_provider_cert_fingerprint|string|false|none|Identity provider sha256 cert fingerprint if saml_provider_metadata_url is not available.|
|saml_provider_issuer_url|string|false|none|Identity provider issuer url|
|saml_provider_metadata_content|string|false|none|Custom identity provider metadata|
|saml_provider_metadata_url|string|false|none|Metadata URL for the SAML identity provider|
|saml_provider_slo_target_url|string|false|none|Identity provider SLO endpoint|
|saml_provider_sso_target_url|string|false|none|Identity provider SSO endpoint if saml_provider_metadata_url is not available.|
|scim_authentication_method|string|false|none|SCIM authentication type.|
|scim_oauth_access_token|string|false|none|SCIM OAuth Access Token.|
|scim_oauth_access_token_expires_at|string|false|none|SCIM OAuth Access Token Expiration Time.|
|scim_username|string|false|none|SCIM username.|
|subdomain|string|false|none|Subdomain|

#### Enumerated Values

|Property|Value|
|---|---|
|deprovision_behavior|disable|
|deprovision_behavior|delete|
|ldap_username_field|sAMAccountName|
|ldap_username_field|userPrincipalName|
|protocol|oauth2|
|protocol|_unused_openid2|
|protocol|saml|
|protocol|active_directory|
|protocol|open_ldap|
|protocol|scim|
|provider|google|
|provider|auth0|
|provider|okta|
|provider|atlassian|
|provider|azure|
|provider|box|
|provider|dropbox|
|provider|slack|
|provider|_unused_ubuntu|
|provider|onelogin|
|provider|saml|
|provider|idaptive|
|provider|ldap|
|provider|scim|
|scim_authentication_method|none|
|scim_authentication_method|basic|
|scim_authentication_method|token|

<h2 id="tocS_StatusEntity">StatusEntity</h2>
<!-- backwards compatibility -->
<a id="schemastatusentity"></a>
<a id="schema_StatusEntity"></a>
<a id="tocSstatusentity"></a>
<a id="tocsstatusentity"></a>

```json
{
  "clickwrap_body": "example",
  "clickwrap_id": 1,
  "code": 200,
  "data": {
    "dynamic": {}
  },
  "errors": [
    null
  ],
  "message": "example",
  "status": ""
}
```

Test webhook.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clickwrap_body|string|false|none|Required Clickwrap body|
|clickwrap_id|integer(int32)|false|none|Required Clickwrap id|
|code|integer(int32)|false|none|Status HTTP code|
|data|[AutoEntity](#schemaautoentity)|false|none|none|
|errors|[[ErrorsEntity](#schemaerrorsentity)]|false|none|A list of api errors|
|message|string|false|none|Error message|
|status|string|false|none|Status message|

<h2 id="tocS_StyleEntity">StyleEntity</h2>
<!-- backwards compatibility -->
<a id="schemastyleentity"></a>
<a id="schema_StyleEntity"></a>
<a id="tocSstyleentity"></a>
<a id="tocsstyleentity"></a>

```json
{
  "id": 1,
  "logo": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  },
  "path": "example",
  "thumbnail": {
    "name": "My logo",
    "uri": "https://mysite.files.com/.../my_image.png"
  }
}
```

Show Style

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Style ID|
|logo|[ImageEntity](#schemaimageentity)|false|none|none|
|path|string|false|none|Folder path|
|thumbnail|[ImageEntity](#schemaimageentity)|false|none|none|

<h2 id="tocS_UsageDailySnapshotEntity">UsageDailySnapshotEntity</h2>
<!-- backwards compatibility -->
<a id="schemausagedailysnapshotentity"></a>
<a id="schema_UsageDailySnapshotEntity"></a>
<a id="tocSusagedailysnapshotentity"></a>
<a id="tocsusagedailysnapshotentity"></a>

```json
{
  "api_usage_available": true,
  "current_storage": 1,
  "date": "2000-01-01T01:00:00Z",
  "deleted_files_counted_in_minimum": 1,
  "deleted_files_storage": 1,
  "id": 1,
  "read_api_usage": 1,
  "root_storage": 1,
  "usage_by_top_level_dir": {
    "key": "example value"
  },
  "user_count": 1,
  "write_api_usage": 1
}
```

List Usage Daily Snapshots

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_usage_available|boolean|false|none|True if the API usage fields `read_api_usage` and `write_api_usage` can be relied upon.  If this is false, we suggest hiding that value from any UI.|
|current_storage|integer(int32)|false|none|GB of Files Native Storage used on this day.|
|date|string(date)|false|none|The date of this usage record|
|deleted_files_counted_in_minimum|integer(int32)|false|none|GB of Files Native Storage used on this day for files that have been permanently deleted but were uploaded less than 30 days ago, and are still billable.|
|deleted_files_storage|integer(int32)|false|none|GB of Files Native Storage used on this day for files that have been deleted and are stored as backups.|
|id|integer(int32)|false|none|ID of the usage record|
|read_api_usage|integer(int32)|false|none|Read API Calls used on this day. Note: only updated for days before the current day.|
|root_storage|integer(int32)|false|none|GB of Files Native Storage used for the root folder.  Included here because this value will not be part of `usage_by_top_level_dir`|
|usage_by_top_level_dir|object|false|none|Usage broken down by each top-level folder|
|user_count|integer(int32)|false|none|Number of billable users as of this day.|
|write_api_usage|integer(int32)|false|none|Write API Calls used on this day. Note: only updated for days before the current day.|

<h2 id="tocS_UsageSnapshotEntity">UsageSnapshotEntity</h2>
<!-- backwards compatibility -->
<a id="schemausagesnapshotentity"></a>
<a id="schema_UsageSnapshotEntity"></a>
<a id="tocSusagesnapshotentity"></a>
<a id="tocsusagesnapshotentity"></a>

```json
{
  "bytes_sent": 1,
  "current_storage": 1,
  "deleted_files_counted_in_minimum": 1,
  "deleted_files_storage": 1,
  "end_at": "2000-01-01T01:00:00Z",
  "high_water_storage": 1,
  "high_water_user_count": 1,
  "id": 1,
  "root_storage": 1,
  "start_at": "2000-01-01T01:00:00Z",
  "sync_bytes_received": 1,
  "sync_bytes_sent": 1,
  "total_billable_transfer_usage": 1,
  "total_billable_usage": 1,
  "usage_by_top_level_dir": {
    "key": "example value"
  }
}
```

List Usage Snapshots

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bytes_sent|number(double)|false|none|Transfer Usage for period - Outbound GB from Files Native Storage|
|current_storage|number(double)|false|none|Current total Storage Usage GB as of end date (not necessarily high water mark, which is used for billing)|
|deleted_files_counted_in_minimum|number(double)|false|none|Storage Usage for files that are deleted but uploaded within last 30 days as of end date (not necessarily high water mark, which is used for billing)|
|deleted_files_storage|number(double)|false|none|Storage Usage for files that are deleted but retained as backups as of end date (not necessarily high water mark, which is used for billing)|
|end_at|string(date-time)|false|none|Usage snapshot end date/time|
|high_water_storage|number(double)|false|none|Highest Storage Usage GB recorded in time period (used for billing)|
|high_water_user_count|number(double)|false|none|Highest user count number in time period|
|id|integer(int32)|false|none|Usage snapshot ID|
|root_storage|number(double)|false|none|Storage Usage for root folder as of end date (not necessarily high water mark, which is used for billing)|
|start_at|string(date-time)|false|none|Usage snapshot start date/time|
|sync_bytes_received|number(double)|false|none|Transfer Usage for period - Inbound GB to Remote Servers (Sync/Mount)|
|sync_bytes_sent|number(double)|false|none|Transfer Usage for period - Outbound GB from Remote Servers (Sync/Mount)|
|total_billable_transfer_usage|number(double)|false|none|Transfer usage for period - Total Billable amount|
|total_billable_usage|number(double)|false|none|Storage + Transfer Usage - Total Billable amount|
|usage_by_top_level_dir|object|false|none|Storage Usage - map of root folders to their usage as of end date (not necessarily high water mark, which is used for billing)|

<h2 id="tocS_UserCipherUseEntity">UserCipherUseEntity</h2>
<!-- backwards compatibility -->
<a id="schemausercipheruseentity"></a>
<a id="schema_UserCipherUseEntity"></a>
<a id="tocSusercipheruseentity"></a>
<a id="tocsusercipheruseentity"></a>

```json
{
  "created_at": "2000-01-01T01:00:00Z",
  "id": 1,
  "interface": "restapi",
  "protocol_cipher": "TLSv1.2; ECDHE-RSA-AES256-GCM-SHA384",
  "updated_at": "2000-01-01T01:00:00Z",
  "user_id": 1
}
```

List User Cipher Uses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|The earliest recorded use of this combination of interface and protocol and cipher (for this user)|
|id|integer(int32)|false|none|UserCipherUse ID|
|interface|string|false|none|The interface accessed|
|protocol_cipher|string|false|none|The protocol and cipher employed|
|updated_at|string(date-time)|false|none|The most recent use of this combination of interface and protocol and cipher (for this user)|
|user_id|integer(int32)|false|none|ID of the user who performed this access|

#### Enumerated Values

|Property|Value|
|---|---|
|interface|web|
|interface|ftp|
|interface|sftp|
|interface|dav|
|interface|desktop|
|interface|restapi|
|interface|robot|
|interface|jsapi|

<h2 id="tocS_UserEntity">UserEntity</h2>
<!-- backwards compatibility -->
<a id="schemauserentity"></a>
<a id="schema_UserEntity"></a>
<a id="tocSuserentity"></a>
<a id="tocsuserentity"></a>

```json
{
  "active_2fa": true,
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "api_keys_count": 1,
  "attachments_permission": true,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_inactive_disable": true,
  "bypass_site_allowed_ips": true,
  "company": "ACME Corp.",
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "days_remaining_until_password_expire": 1,
  "disabled": true,
  "email": "example",
  "externally_managed": true,
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "id": 1,
  "language": "en",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_expire_at": "2000-01-01T01:00:00Z",
  "password_expired": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_password_change": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "username": "user"
}
```

Create User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_2fa|boolean|false|none|Is 2fa active for the user?|
|admin_group_ids|[integer(int32)]|false|none|List of group IDs of which this user is an administrator|
|allowed_ips|string|false|none|A list of allowed IPs if applicable.  Newline delimited|
|api_keys_count|integer(int32)|false|none|Number of api keys associated with this user|
|attachments_permission|boolean|false|none|DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.|
|authenticate_until|string(date-time)|false|none|Scheduled Date/Time at which user will be deactivated|
|authentication_method|string|false|none|How is this user authenticated?|
|avatar_url|string|false|none|URL holding the user's avatar|
|billing_permission|boolean|false|none|Allow this user to perform operations on the account, payments, and invoices?|
|bypass_inactive_disable|boolean|false|none|Exempt this user from being disabled based on inactivity?|
|bypass_site_allowed_ips|boolean|false|none|Allow this user to skip site-wide IP blacklists?|
|company|string|false|none|User's company|
|created_at|string(date-time)|false|none|When this user was created|
|dav_permission|boolean|false|none|Can the user connect with WebDAV?|
|days_remaining_until_password_expire|integer(int32)|false|none|Number of days remaining until password expires|
|disabled|boolean|false|none|Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.|
|email|string(email)|false|none|User email address|
|externally_managed|boolean|false|none|Is this user managed by a SsoStrategy?|
|first_login_at|string(date-time)|false|none|User's first login time|
|ftp_permission|boolean|false|none|Can the user access with FTP/FTPS?|
|group_ids|string|false|none|Comma-separated list of group IDs of which this user is a member|
|header_text|string|false|none|Text to display to the user in the header of the UI|
|id|integer(int32)|false|none|User ID|
|language|string|false|none|Preferred language|
|last_active_at|string(date-time)|false|none|User's most recent activity time, which is the latest of most recent login, most recent API use, enablement, or creation|
|last_api_use_at|string(date-time)|false|none|User's most recent API use time|
|last_dav_login_at|string(date-time)|false|none|User's most recent login time via WebDAV|
|last_desktop_login_at|string(date-time)|false|none|User's most recent login time via Desktop app|
|last_ftp_login_at|string(date-time)|false|none|User's most recent login time via FTP|
|last_login_at|string(date-time)|false|none|User's most recent login time via any protocol|
|last_protocol_cipher|string|false|none|The most recent protocol and cipher used|
|last_restapi_login_at|string(date-time)|false|none|User's most recent login time via Rest API|
|last_sftp_login_at|string(date-time)|false|none|User's most recent login time via SFTP|
|last_web_login_at|string(date-time)|false|none|User's most recent login time via web|
|lockout_expires|string(date-time)|false|none|Time in the future that the user will no longer be locked out if applicable|
|name|string|false|none|User's full name|
|notes|string|false|none|Any internal notes on the user|
|notification_daily_send_time|integer(int32)|false|none|Hour of the day at which daily notifications should be sent. Can be in range 0 to 23|
|office_integration_enabled|boolean|false|none|Enable integration with Office for the web?|
|password_expire_at|string(date-time)|false|none|Password expiration datetime|
|password_expired|boolean|false|none|Is user's password expired?|
|password_set_at|string(date-time)|false|none|Last time the user's password was set|
|password_validity_days|integer(int32)|false|none|Number of days to allow user to use the same password|
|public_keys_count|integer(int32)|false|none|Number of public keys associated with this user|
|receive_admin_alerts|boolean|false|none|Should the user receive admin alerts such a certificate expiration notifications and overages?|
|require_2fa|string|false|none|2FA required setting|
|require_password_change|boolean|false|none|Is a password change required upon next user login?|
|restapi_permission|boolean|false|none|Can this user access the REST API?|
|self_managed|boolean|false|none|Does this user manage it's own credentials or is it a shared/bot user?|
|sftp_permission|boolean|false|none|Can the user access with SFTP?|
|site_admin|boolean|false|none|Is the user an administrator for this site?|
|skip_welcome_screen|boolean|false|none|Skip Welcome page in the UI?|
|ssl_required|string|false|none|SSL required setting|
|sso_strategy_id|integer(int32)|false|none|SSO (Single Sign On) strategy ID for the user, if applicable.|
|subscribe_to_newsletter|boolean|false|none|Is the user subscribed to the newsletter?|
|time_zone|string|false|none|User time zone|
|type_of_2fa|string|false|none|Type(s) of 2FA methods in use.  Will be either `sms`, `totp`, `u2f`, `yubi`, or multiple values sorted alphabetically and joined by an underscore.|
|user_root|string|false|none|Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.|
|username|string|false|none|User's username|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_method|password|
|authentication_method|unused_former_ldap|
|authentication_method|sso|
|authentication_method|none|
|authentication_method|email_signup|
|authentication_method|password_with_imported_hash|
|require_2fa|use_system_setting|
|require_2fa|always_require|
|require_2fa|never_require|
|ssl_required|use_system_setting|
|ssl_required|always_require|
|ssl_required|never_require|

<h2 id="tocS_UserRequestEntity">UserRequestEntity</h2>
<!-- backwards compatibility -->
<a id="schemauserrequestentity"></a>
<a id="schema_UserRequestEntity"></a>
<a id="tocSuserrequestentity"></a>
<a id="tocsuserrequestentity"></a>

```json
{
  "details": "Changed Departments",
  "email": "example",
  "id": 1,
  "name": "John Doe"
}
```

Create User Request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Details of the user's request|
|email|string(email)|false|none|User email address|
|id|integer(int32)|false|none|ID|
|name|string|false|none|User's full name|

<h2 id="tocS_WebhookTestEntity">WebhookTestEntity</h2>
<!-- backwards compatibility -->
<a id="schemawebhooktestentity"></a>
<a id="schema_WebhookTestEntity"></a>
<a id="tocSwebhooktestentity"></a>
<a id="tocswebhooktestentity"></a>

```json
{
  "code": 200,
  "data": {
    "dynamic": {}
  },
  "message": "",
  "status": "",
  "success": true
}
```

Create Webhook Test

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|Status HTTP code|
|data|[AutoEntity](#schemaautoentity)|false|none|none|
|message|string|false|none|Error message|
|status|string|false|none|Status message|
|success|boolean|false|none|The success status of the webhook test|

<h2 id="tocS_patchFormFieldSets">patchFormFieldSets</h2>
<!-- backwards compatibility -->
<a id="schemapatchformfieldsets"></a>
<a id="schema_patchFormFieldSets"></a>
<a id="tocSpatchformfieldsets"></a>
<a id="tocspatchformfieldsets"></a>

```json
{
  "form_fields": [
    {
      "default_option": "string",
      "field_type": "string",
      "help_text": "string",
      "id": 0,
      "label": "string",
      "options_for_select": "string",
      "required": true
    }
  ],
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "string"
}
```

Update Form Field Set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|form_fields|[object]|false|none|none|
|skip_company|boolean|false|none|Skip validating company|
|skip_email|boolean|false|none|Skip validating form email|
|skip_name|boolean|false|none|Skip validating form name|
|title|string|false|none|Title to be displayed|

<h2 id="tocS_postFormFieldSets">postFormFieldSets</h2>
<!-- backwards compatibility -->
<a id="schemapostformfieldsets"></a>
<a id="schema_postFormFieldSets"></a>
<a id="tocSpostformfieldsets"></a>
<a id="tocspostformfieldsets"></a>

```json
{
  "form_fields": [
    {
      "default_option": "string",
      "field_type": "string",
      "help_text": "string",
      "id": 0,
      "label": "string",
      "options_for_select": "string",
      "required": true
    }
  ],
  "skip_company": true,
  "skip_email": true,
  "skip_name": true,
  "title": "string",
  "user_id": 0
}
```

Create Form Field Set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|form_fields|[object]|false|none|none|
|skip_company|boolean|false|none|Skip validating company|
|skip_email|boolean|false|none|Skip validating form email|
|skip_name|boolean|false|none|Skip validating form name|
|title|string|false|none|Title to be displayed|
|user_id|integer(int32)|false|none|User ID.  Provide a value of `0` to operate the current session's user.|
