<h1 id="box-platform-api">Box Platform API v2026.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[Box Platform](https://developer.box.com) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

Base URLs:

* <a href="https://api.box.com/2.0">https://api.box.com/2.0</a> - Box Platform API server.

<a href="https://cloud.app.box.com/s/rmwxu64h1ipr41u49w3bbuvbsa29wku9">Terms of service</a>
Email: <a href="mailto:devrel@box.com">Box, Inc</a> 
Web: <a href="https://developer.box.com">Box, Inc</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache-2.0</a>

<a href="https://developer.box.com">Box Developer Documentation.</a>

# Authentication

- oAuth2 authentication. The access token received from the authorization server in the OAuth 2.0 flow.

    - Flow: authorizationCode
    - Authorization URL = [https://account.box.com/api/oauth2/authorize](https://account.box.com/api/oauth2/authorize)
    - Token URL = [https://api.box.com/oauth2/token](https://api.box.com/oauth2/token)

|Scope|Scope Description|
|---|---|
|root_readonly|Read all files and folders stored in Box|
|root_readwrite|Read and write all files and folders stored in Box|
|manage_app_users|Provision and manage app users|
|manage_managed_users|Provision and manage managed users|
|manage_groups|Manage an enterprise's groups|
|manage_webhook|Create webhooks programmatically through the API|
|manage_enterprise_properties|Manage enterprise properties|
|manage_data_retention|Manage data retention polices|
|manage_legal_hold|Manage Legal Holds|

<h1 id="box-platform-api-automate-workflows">Automate Workflows</h1>

Endpoints for listing and manually starting Automate workflow actions.

## List Automate workflows defined as callable actions

<a id="opIdget_automate_workflows_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/automate_workflows?folder_id=12345' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /automate_workflows`

Returns workflow actions from Automate for a folder, using the
`WORKFLOW` action category.

<h3 id="list-automate-workflows-defined-as-callable-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder_id|query|string|true|The unique identifier that represent a folder.<br><br>The ID for any folder can be determined<br>by visiting this folder in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/folder/123`<br>the `folder_id` is `123`.<br><br>The root folder of a Box account is<br>always represented by the ID `0`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "981",
      "type": "workflow_action",
      "action_type": "run_workflow",
      "description": "Runs workflow execution for selected files",
      "created_at": "2026-04-01T10:00:00.000Z",
      "updated_at": "2026-04-02T11:00:00.000Z",
      "created_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "updated_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "workflow": {
        "id": "545",
        "type": "workflow",
        "name": "Contract approval workflow"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="list-automate-workflows-defined-as-callable-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns workflow actions that can be manually started.|[AutomateWorkflows](#schemaautomateworkflows)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Start Automate workflow

<a id="opIdpost_automate_workflows_id_start_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/automate_workflows/12345/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "workflow_action_id": "981",
    "file_ids": [
      "123"
    ]
  }'
```

`POST /automate_workflows/{workflow_id}/start`

Starts an Automate workflow manually by using a workflow action ID and file IDs.

> Body parameter

```json
{
  "workflow_action_id": "981",
  "file_ids": [
    "123"
  ]
}
```

<h3 id="start-automate-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflow_id|path|string|true|The ID of the workflow.|
|box-version|header|string|true|Version header.|
|body|body|[AutomateWorkflowStartRequest](#schemaautomateworkflowstartrequest)|true|none|
|» workflow_action_id|body|string|true|The callable action ID used to trigger the selected workflow.|
|» file_ids|body|[string]|true|The files to process with the selected workflow.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="start-automate-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Starts the workflow.|None|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-convert-to-box-note">Convert to Box Note</h1>

Create Box Notes from supported source content (for example Markdown).

## Convert content to Box Note

<a id="opIdpost_notes_convert_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/notes/convert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "content": "# My note\\n\\nHello from Markdown.",
    "content_format": "markdown",
    "parent": {
      "type": "folder",
      "id": "42037322"
    },
    "name": "Quarterly plan"
  }'
```

`POST /notes/convert`

Creates a Box Note (`.boxnote` file) from supported source content. See the `content_format` field for supported formats.

> Body parameter

```json
{
  "content": "# My note\\n\\nHello from Markdown.",
  "content_format": "markdown",
  "parent": {
    "type": "folder",
    "id": "42037322"
  },
  "name": "Quarterly plan"
}
```

<h3 id="convert-content-to-box-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[NotesConvertRequestBody](#schemanotesconvertrequestbody)|true|none|
|» content|body|string|true|The content to convert to a note. See the `content_format` field for supported formats.|
|» content_format|body|string|true|Format of the content to convert.|
|» parent|body|[FolderReference](#schemafolderreference)|true|Folder reference.|
|» name|body|string|true|The name for the created note. The `.boxnote` extension is appended automatically.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» content_format|markdown|

> Example responses

> 201 Response

```json
{
  "type": "file",
  "id": "1234567890"
}
```

> 400 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 401 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 403 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 404 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 409 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 413 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 422 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 500 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 501 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="convert-content-to-box-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The note was created successfully.|[NotesConvertResponse](#schemanotesconvertresponse)|
|400|Bad Request|Returned when the request body is malformed, fails schema validation, or<br>required fields are missing. A missing or unknown parent folder is not<br>indicated with this status (see `404`).|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have permission to create<br>a file in the parent folder.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the parent folder does not exist, or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when a preflight check fails (for example, a name conflict).|[ClientError](#schemaclienterror)|
|413|Payload Too Large|Returned when the request payload is too large.|[ClientError](#schemaclienterror)|
|422|Unprocessable Entity|Returned when the content could not be converted to a note.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|Returned when an unexpected server error occurs.|[ClientError](#schemaclienterror)|
|501|Not Implemented|Returned when this operation is not implemented or not yet available on<br>the server (for example, while routing to the Notes service is still being<br>enabled).|[ClientError](#schemaclienterror)|
|default|Default|Returned when an unexpected client error occurs.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-document-split">Document Split</h1>

A set of endpoints used to split a paginated source document into multiple
files based on user-defined or AI-generated page ranges.

## List Document Split jobs

<a id="opIdget_document_splits_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/document_splits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /document_splits`

Returns a paginated list of Document Split jobs accessible to the
authenticated user.

<h3 id="list-document-split-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "1748426",
      "type": "document_split",
      "source_file": {
        "type": "file",
        "id": "42037322"
      },
      "status": "submitted",
      "split_input": {
        "split_type": "manual",
        "version": "v_1",
        "split_definition": [
          {
            "start": 1,
            "end": 5
          },
          {
            "start": 6,
            "end": 14
          }
        ]
      },
      "output": {
        "generated_files": [
          {
            "type": "file",
            "id": "42037322"
          }
        ],
        "split_definition": [
          {
            "start": 1,
            "end": 10
          },
          {
            "start": 11,
            "end": 25
          }
        ]
      },
      "destination_folder": {
        "type": "folder",
        "id": "42037322"
      },
      "input_source": "api",
      "created_at": "2023-10-26T15:30:00Z",
      "created_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "enterprise": {
        "id": "1910967",
        "type": "enterprise"
      },
      "failures": {
        "errors": [
          "The source file could not be processed."
        ],
        "warnings": [
          "Some pages were skipped because they were blank."
        ]
      },
      "external_id": "invoice-48291"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

> 400 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 401 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 403 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 429 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="list-document-split-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of Document Split jobs.|[DocumentSplits](#schemadocumentsplits)|
|400|Bad Request|Returned when the user has passed in a malformed `marker` or `limit`<br>value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have access to the<br>Document Generation feature.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create Document Split job

<a id="opIdpost_document_splits_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/document_splits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "source_file_id": "12345",
    "destination_folder_id": "14047816008",
    "input_source": "api",
    "split_input": {
      "split_type": "manual",
      "split_definition": [
        {
          "start": 1,
          "end": 5
        },
        {
          "start": 6,
          "end": 14
        }
      ]
    }
  }'
```

`POST /document_splits`

Initiates a Document Split job for the supplied source file. The job runs
asynchronously; clients can poll the returned job ID to track progress.

All split-specific input lives under `split_input`. When
`split_input.split_type` is `manual`, provide
`split_input.split_definition` (continuous page ranges; `version` may be
omitted or `v_1`). When `split_input.split_type` is `page_selection`,
provide `split_input.page_selection` (non-linear page segments; `version`
may be omitted or `v_2`). `split_input.prompt` must not be provided for
either of those variants. When `split_input.split_type` is `smart`,
`split_input.prompt` is required and neither
`split_input.split_definition` nor `split_input.page_selection` must be
provided.

> Body parameter

```json
{
  "source_file_id": "12345",
  "destination_folder_id": "14047816008",
  "input_source": "api",
  "split_input": {
    "split_type": "manual",
    "split_definition": [
      {
        "start": 1,
        "end": 5
      },
      {
        "start": 6,
        "end": 14
      }
    ]
  }
}
```

<h3 id="create-document-split-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[DocumentSplitCreateRequest](#schemadocumentsplitcreaterequest)|true|none|
|» source_file_id|body|string|true|The ID of the source file to split.|
|» destination_folder_id|body|string|true|The ID of the folder where the resulting files will be uploaded.|
|» input_source|body|string|true|The system that initiated the request, used for analytics and<br>traceability.|
|» split_input|body|[DocumentSplitCreateRequestType](#schemadocumentsplitcreaterequesttype)|true|Validation rules for the supported Document Split create request types.|
|» external_id|body|string|false|An optional identifier supplied by the caller for this Document Split job.<br>The value is returned on job responses for correlation only. It is not<br>a Box resource ID, is not required to be unique, and cannot be used to<br>look up the job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» input_source|api|
|» input_source|box|
|» input_source|relay|
|» input_source|salesforce|

> Example responses

> 202 Response

```json
{
  "type": "document_split",
  "id": "1748426"
}
```

> 400 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 401 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 403 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 404 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 429 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="create-document-split-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The Document Split job was accepted for processing. Returns a reference<br>to the newly created job.|[DocumentSplitCreateResponse](#schemadocumentsplitcreateresponse)|
|400|Bad Request|Returned when the request body is malformed or required fields are<br>missing.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have access to the<br>Document Generation feature.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the source file or destination folder cannot be found<br>or the user does not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get Document Split job by ID

<a id="opIdget_document_splits_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/document_splits/1748426 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /document_splits/{document_split_id}`

Returns details for a single Document Split job identified by its ID,
including the current status, the input definition, and any output files
produced by the job.

<h3 id="get-document-split-job-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|document_split_id|path|string|true|The unique identifier for the Document Split job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "1748426",
  "type": "document_split",
  "source_file": {
    "type": "file",
    "id": "42037322"
  },
  "status": "submitted",
  "split_input": {
    "split_type": "manual",
    "version": "v_1",
    "split_definition": [
      {
        "start": 1,
        "end": 5
      },
      {
        "start": 6,
        "end": 14
      }
    ]
  },
  "output": {
    "generated_files": [
      {
        "type": "file",
        "id": "42037322"
      }
    ],
    "split_definition": [
      {
        "start": 1,
        "end": 10
      },
      {
        "start": 11,
        "end": 25
      }
    ]
  },
  "destination_folder": {
    "type": "folder",
    "id": "42037322"
  },
  "input_source": "api",
  "created_at": "2023-10-26T15:30:00Z",
  "created_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "failures": {
    "errors": [
      "The source file could not be processed."
    ],
    "warnings": [
      "Some pages were skipped because they were blank."
    ]
  },
  "external_id": "invoice-48291"
}
```

> 401 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 403 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 404 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 429 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="get-document-split-job-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Document Split job.|[DocumentSplit](#schemadocumentsplit)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have access to the<br>Document Generation feature.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the Document Split job is not found or the user does not<br>have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-query">Query</h1>

Query for your items.

## Box Query

<a id="opIdpost_query_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "query": {
      "predicate": "enterprise_12345678:book:purchasePrice >= :price AND box:item:name = :name",
      "params": {
        "price": 100,
        "name": "The Hobbit"
      },
      "ancestors": [
        {
          "id": "789",
          "type": "folder"
        }
      ]
    },
    "order_by": [
      {
        "field_key": "enterprise_12345678:book:purchasePrice",
        "direction": "asc"
      }
    ],
    "limit": 1,
    "fields": [
      "box:item:name",
      "enterprise_12345678:book"
    ]
  }'
```

`POST /query`

Runs a query to discover Box items using a logical predicate, similar to a SQL
WHERE clause. The predicate can filter across multiple metadata templates and
item fields in a single request. Results can be sorted, paginated with markers,
and shaped with fields so each entry includes additional item or metadata
attributes.

This is the item-retrieval endpoint in the Query API (version 2026.0). Unlike
the [Metadata Query API](https://developer.box.com/reference/post-metadata-queries-execute-read),
it is not limited to a single metadata template or to files and folders. For
totals and grouped metrics over the same predicates, use
[Query Insights](https://developer.box.com/reference/v2026.0/post-query-insights)
instead of paging through every matching item.

For predicate syntax, parameters, examples, pagination behavior, and error
codes, see the
[Box Query guide](https://developer.box.com/guides/query/box-query). For shared
response schemas, including Query results and result entries, see
[Query resources](https://developer.box.com/reference/v2026.0/query-resources).

> Body parameter

```json
{
  "query": {
    "predicate": "enterprise_12345678:book:purchasePrice >= :price AND box:item:name = :name",
    "params": {
      "price": 100,
      "name": "The Hobbit"
    },
    "ancestors": [
      {
        "id": "789",
        "type": "folder"
      }
    ]
  },
  "order_by": [
    {
      "field_key": "enterprise_12345678:book:purchasePrice",
      "direction": "asc"
    }
  ],
  "limit": 1,
  "fields": [
    "box:item:name",
    "enterprise_12345678:book"
  ]
}
```

<h3 id="box-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[QueryRequestBody](#schemaqueryrequestbody)|true|none|
|» query|body|object|true|The query definition, including the filtering predicate and its optional<br>parameters and ancestor restrictions.|
|» » predicate|body|string|true|A logical expression used to filter the dataset, similar to an SQL<br>`WHERE` clause. May include named parameters referenced as<br>`:placeholder`.|
|» » params|body|object|false|A map of placeholder names (without the `:` prefix) to their values.<br>Required only when the predicate contains parameter placeholders. The<br>type of each value must match the type of the field it is compared to.|
|» » » **additionalProperties**|body|object|false|none|
|» » ancestors|body|[[QueryAncestorReference](#schemaqueryancestorreference)]|false|Restricts results to the specified ancestor entities and their<br>recursive descendants. The user must have read access to every listed<br>ancestor.|
|» order_by|body|[[QueryOrderBy](#schemaqueryorderby)]|false|The sorting criteria for the result set. Entries are applied sequentially<br>to define multi-level sorting.|
|» limit|body|integer(int32)|false|The maximum number of results to return. Defaults to `50` when not<br>provided.|
|» fields|body|[string]|false|Controls which additional fields are included in each result entry. Each<br>value must be one of: a fully qualified item field key (for example<br>`box:item:name`), a metadata template key to hydrate the full template (for<br>example `enterprise_12345678:project`), or a specific metadata template<br>field key to hydrate a single field from the template (for example<br>`enterprise_12345678:project:name`). When omitted, entries include only the<br>item type and identifier.|
|» marker|body|string|false|An opaque token returned from a previous response, used to continue<br>retrieval. When provided, all other request parameters must exactly match<br>those of the original request.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "file",
      "box": {
        "item": {
          "name": "My Form"
        }
      },
      "enterprise_12345678": {
        "book": {
          "$parent": "file_12345",
          "$scope": "enterprise_12345678",
          "$template": "book",
          "$version": 4,
          "isbn": "1871263670",
          "purchasePrice": 234.57,
          "publicationYear": "1937"
        }
      }
    }
  ],
  "next_marker": "xppy0jjG1kBRSc7NBBSgQmBz1Gk6VaQdg5Vyb+Ob0iA=",
  "limit": 1
}
```

> 400 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 401 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 403 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 404 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 429 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 500 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="box-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of items matching the query.|[QueryResults](#schemaqueryresults)|
|400|Bad Request|Returned when the query could not be parsed, the request body fails schema<br>validation, a referenced scope is not valid, or an unexpected JSON type was<br>provided.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header is<br>missing, not valid, or expired.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the query matched too many items, or too many inaccessible<br>items, to be processed.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when a referenced metadata template or item does not exist, or the<br>user does not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the enterprise exceeds the allowed request rate.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|Returned when an unexpected server error occurs while processing the query.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create insights for Box items

<a id="opIdpost_query_insights_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/query_insights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "query": {
      "predicate": "EXISTS(:templateArg) AND box:item:created_at >= :dateArg1 AND box:item:created_at < :dateArg2",
      "params": {
        "templateArg": "enterprise_12345678:sales",
        "dateArg1": "2025-06-01T00:00:00-07:00",
        "dateArg2": "2025-07-01T00:00:00-07:00"
      },
      "ancestors": [
        {
          "id": "123",
          "type": "folder"
        }
      ],
      "group_by": [
        {
          "field": "enterprise_12345678:sales:contractType",
          "bucket_limit": 3
        }
      ]
    },
    "metrics": {
      "totalContractValue": {
        "type": "sum",
        "field": "enterprise_12345678:sales:contractValue"
      },
      "countContractType": {
        "type": "count",
        "field": "enterprise_12345678:sales:contractType"
      }
    }
  }'
```

`POST /query_insights`

Computes aggregated metrics over Box items matching a query predicate.
Filters are applied first, followed by optional grouping, after which the
requested metrics (such as `sum`, `avg`, `min`, `max`, and `count`) are
computed for each resulting group or over the entire filtered dataset.

> Body parameter

```json
{
  "query": {
    "predicate": "EXISTS(:templateArg) AND box:item:created_at >= :dateArg1 AND box:item:created_at < :dateArg2",
    "params": {
      "templateArg": "enterprise_12345678:sales",
      "dateArg1": "2025-06-01T00:00:00-07:00",
      "dateArg2": "2025-07-01T00:00:00-07:00"
    },
    "ancestors": [
      {
        "id": "123",
        "type": "folder"
      }
    ],
    "group_by": [
      {
        "field": "enterprise_12345678:sales:contractType",
        "bucket_limit": 3
      }
    ]
  },
  "metrics": {
    "totalContractValue": {
      "type": "sum",
      "field": "enterprise_12345678:sales:contractValue"
    },
    "countContractType": {
      "type": "count",
      "field": "enterprise_12345678:sales:contractType"
    }
  }
}
```

<h3 id="create-insights-for-box-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[QueryInsightsRequestBody](#schemaqueryinsightsrequestbody)|true|none|
|» query|body|object|true|The filtering and grouping definition. Filters are applied first, followed<br>by grouping, before metrics are computed.|
|» » predicate|body|string|true|A logical expression used to filter the dataset prior to metric<br>computation, similar to an SQL `WHERE` clause. May include<br>named parameters referenced as `:placeholder`.|
|» » params|body|object|false|A map of placeholder names (without the `:` prefix) to their values.<br>Required only when the predicate contains parameter placeholders. The<br>type of each value must match the type of the field it is compared to.|
|» » » **additionalProperties**|body|object|false|none|
|» » ancestors|body|[[QueryAncestorReference](#schemaqueryancestorreference)]|false|Restricts results to items contained within any of the specified<br>ancestors. The user must have access to every listed ancestor. When<br>omitted, insights are computed across all accessible items.|
|» » group_by|body|[[QueryInsightsGroupBy](#schemaqueryinsightsgroupby)]|false|Defines how data is grouped for insights computation. Currently only a<br>single grouping field is supported.|
|» metrics|body|object|true|A map of user-defined metric aliases to their definitions. A maximum of 10<br>metrics may be defined. Each alias must be a unique, non-empty string of up<br>to 256 characters, containing only letters, digits, `_`, `-`, or `.`, and<br>must not start with a digit, `_`, `-`, or `.`. May be empty to request<br>only a total count.|
|» » **additionalProperties**|body|[QueryInsightsMetricDefinition](#schemaqueryinsightsmetricdefinition)|false|Defines a single metric to compute, including the aggregation function and the<br>field it is applied to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "insights": [
    {
      "key": [
        "ContractType1"
      ],
      "type": "group",
      "metrics": {
        "totalContractValue": {
          "type": "sum",
          "values": {
            "sum": 180000
          }
        },
        "countContractType": {
          "type": "count",
          "values": {
            "count": 245
          }
        }
      }
    },
    {
      "key": [
        "ContractType4"
      ],
      "type": "group",
      "metrics": {
        "totalContractValue": {
          "type": "sum",
          "values": {
            "sum": 100000
          }
        },
        "countContractType": {
          "type": "count",
          "values": {
            "count": 185
          }
        }
      }
    },
    {
      "key": [
        "ContractType2"
      ],
      "type": "group",
      "metrics": {
        "totalContractValue": {
          "type": "sum",
          "values": {
            "sum": 200000
          }
        },
        "countContractType": {
          "type": "count",
          "values": {
            "count": 150
          }
        }
      }
    },
    {
      "key": [],
      "type": "other",
      "metrics": {
        "totalCountBeyondTopGroups": {
          "type": "count",
          "values": {
            "count": 165
          }
        }
      }
    }
  ]
}
```

> 400 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 401 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 403 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 404 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 429 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> 500 Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

> default Response

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

<h3 id="create-insights-for-box-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the computed insight entries.|[QueryInsights](#schemaqueryinsights)|
|400|Bad Request|Returned when the query could not be parsed, the request body fails schema<br>validation, or an unexpected JSON type was provided.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header is<br>missing, not valid, or expired.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the query is restricted for this enterprise or scope.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when a referenced metadata template does not exist, or the user<br>does not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the enterprise exceeds the allowed request rate.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|Returned when an unexpected server error occurs while computing insights.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

# Schemas

<h2 id="tocS_AutomateWorkflowAction">AutomateWorkflowAction</h2>
<!-- backwards compatibility -->
<a id="schemaautomateworkflowaction"></a>
<a id="schema_AutomateWorkflowAction"></a>
<a id="tocSautomateworkflowaction"></a>
<a id="tocsautomateworkflowaction"></a>

```json
{
  "id": "981",
  "type": "workflow_action",
  "action_type": "run_workflow",
  "description": "Runs workflow execution for selected files",
  "created_at": "2026-04-01T10:00:00.000Z",
  "updated_at": "2026-04-02T11:00:00.000Z",
  "created_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "updated_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "workflow": {
    "id": "545",
    "type": "workflow",
    "name": "Contract approval workflow"
  }
}
```

An Automate action that can start a workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier for the Automate action.|
|type|string|true|none|The object type for this workflow action wrapper.|
|action_type|string|true|none|The type that defines the behavior of this action.|
|description|string|false|none|A human-readable description of the workflow action.|
|created_at|string(date-time)|false|none|The date and time when the action was created.|
|updated_at|string(date-time)|false|none|The date and time when the action was last updated.|
|created_by|object|false|none|none|
|updated_by|object|false|none|none|
|workflow|[AutomateWorkflowReference](#schemaautomateworkflowreference)|true|none|A reference to an Automate workflow.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|workflow_action|
|action_type|run_workflow|

<h2 id="tocS_AutomateWorkflowReference">AutomateWorkflowReference</h2>
<!-- backwards compatibility -->
<a id="schemaautomateworkflowreference"></a>
<a id="schema_AutomateWorkflowReference"></a>
<a id="tocSautomateworkflowreference"></a>
<a id="tocsautomateworkflowreference"></a>

```json
{
  "id": "545",
  "type": "workflow",
  "name": "Contract approval workflow"
}
```

A reference to an Automate workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The identifier for the Automate workflow instance.|
|type|string|true|none|The object type.|
|name|string|false|none|The display name for the Automate workflow.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|workflow|

<h2 id="tocS_AutomateWorkflows">AutomateWorkflows</h2>
<!-- backwards compatibility -->
<a id="schemaautomateworkflows"></a>
<a id="schema_AutomateWorkflows"></a>
<a id="tocSautomateworkflows"></a>
<a id="tocsautomateworkflows"></a>

```json
{
  "entries": [
    {
      "id": "981",
      "type": "workflow_action",
      "action_type": "run_workflow",
      "description": "Runs workflow execution for selected files",
      "created_at": "2026-04-01T10:00:00.000Z",
      "updated_at": "2026-04-02T11:00:00.000Z",
      "created_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "updated_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "workflow": {
        "id": "545",
        "type": "workflow",
        "name": "Contract approval workflow"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A list of Automate workflow actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[AutomateWorkflowAction](#schemaautomateworkflowaction)]|false|none|Workflow actions available for manual start.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

<h2 id="tocS_AutomateWorkflowStartRequest">AutomateWorkflowStartRequest</h2>
<!-- backwards compatibility -->
<a id="schemaautomateworkflowstartrequest"></a>
<a id="schema_AutomateWorkflowStartRequest"></a>
<a id="tocSautomateworkflowstartrequest"></a>
<a id="tocsautomateworkflowstartrequest"></a>

```json
{
  "workflow_action_id": "981",
  "file_ids": [
    "123"
  ]
}
```

Request body to start an Automate workflow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflow_action_id|string|true|none|The callable action ID used to trigger the selected workflow.|
|file_ids|[string]|true|none|The files to process with the selected workflow.|

<h2 id="tocS_ClientError">ClientError</h2>
<!-- backwards compatibility -->
<a id="schemaclienterror"></a>
<a id="schema_ClientError"></a>
<a id="tocSclienterror"></a>
<a id="tocsclienterror"></a>

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "message": "Method Not Allowed",
  "context_info": {
    "message": "Something went wrong"
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "request_id": "abcdef123456"
}
```

A generic error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The value will always be `error`.|
|status|integer(int32)|false|none|The HTTP status of the response.|
|code|string|false|none|A Box-specific error code.|
|message|string|false|none|A short message describing the error.|
|context_info|object \| null|false|none|A free-form object that contains additional context<br>about the error. The possible fields are defined on<br>a per-endpoint basis. `message` is only one example.|
|help_url|string|false|none|A URL that links to more information about why this error occurred.|
|request_id|string|false|none|A unique identifier for this response, which can be used<br>when contacting Box support.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|error|
|code|created|
|code|accepted|
|code|no_content|
|code|redirect|
|code|not_modified|
|code|bad_request|
|code|unauthorized|
|code|forbidden|
|code|not_found|
|code|method_not_allowed|
|code|conflict|
|code|precondition_failed|
|code|too_many_requests|
|code|internal_server_error|
|code|unavailable|
|code|item_name_invalid|
|code|insufficient_scope|

<h2 id="tocS_DocumentFailures">DocumentFailures</h2>
<!-- backwards compatibility -->
<a id="schemadocumentfailures"></a>
<a id="schema_DocumentFailures"></a>
<a id="tocSdocumentfailures"></a>
<a id="tocsdocumentfailures"></a>

```json
{
  "errors": [
    "The source file could not be processed."
  ],
  "warnings": [
    "Some pages were skipped because they were blank."
  ]
}
```

Errors and warnings that occurred during a document job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|true|none|A list of errors that occurred during the document job.|
|warnings|[string]|true|none|A list of warnings that occurred during the document job.|

<h2 id="tocS_DocumentSplit">DocumentSplit</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplit"></a>
<a id="schema_DocumentSplit"></a>
<a id="tocSdocumentsplit"></a>
<a id="tocsdocumentsplit"></a>

```json
{
  "id": "1748426",
  "type": "document_split",
  "source_file": {
    "type": "file",
    "id": "42037322"
  },
  "status": "submitted",
  "split_input": {
    "split_type": "manual",
    "version": "v_1",
    "split_definition": [
      {
        "start": 1,
        "end": 5
      },
      {
        "start": 6,
        "end": 14
      }
    ]
  },
  "output": {
    "generated_files": [
      {
        "type": "file",
        "id": "42037322"
      }
    ],
    "split_definition": [
      {
        "start": 1,
        "end": 10
      },
      {
        "start": 11,
        "end": 25
      }
    ]
  },
  "destination_folder": {
    "type": "folder",
    "id": "42037322"
  },
  "input_source": "api",
  "created_at": "2023-10-26T15:30:00Z",
  "created_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "failures": {
    "errors": [
      "The source file could not be processed."
    ],
    "warnings": [
      "Some pages were skipped because they were blank."
    ]
  },
  "external_id": "invoice-48291"
}
```

A standard representation of a Document Split job. The job represents a
request to split a paginated source document into multiple files based on
either a manual set of page ranges, a non-linear page selection, or a
smart prompt-driven analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the Document Split job.|
|type|string|true|none|The value will always be `document_split`.|
|source_file|object|true|none|none|
|status|string|true|none|The current state of the Document Split job.|
|split_input|object|true|none|none|
|output|[DocumentSplitOutput](#schemadocumentsplitoutput) \| object \| null|false|none|The result of the Document Split job. `null` until the job has produced<br>output.|
|destination_folder|object|true|none|none|
|input_source|string|true|none|The system that initiated the request, used for analytics and<br>traceability.|
|created_at|string(date-time)|false|none|When the Document Split job was created.|
|created_by|object|false|none|none|
|enterprise|object|false|none|none|
|failures|[DocumentSplitFailures](#schemadocumentsplitfailures) \| object \| null|false|none|Errors and warnings that occurred during the document split. `null` when<br>no failures were recorded.|
|external_id|string|false|none|An optional identifier supplied by the caller when the Document Split<br>job was created. Returned for correlation only. It is not a Box<br>resource ID, is not required to be unique, and cannot be used to<br>look up the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document_split|
|status|submitted|
|status|completed|
|status|failed|
|status|completed_with_error|
|input_source|api|
|input_source|box|
|input_source|relay|
|input_source|salesforce|

<h2 id="tocS_DocumentSplitCreateRequest">DocumentSplitCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitcreaterequest"></a>
<a id="schema_DocumentSplitCreateRequest"></a>
<a id="tocSdocumentsplitcreaterequest"></a>
<a id="tocsdocumentsplitcreaterequest"></a>

```json
{
  "source_file_id": "12345",
  "destination_folder_id": "14047816008",
  "input_source": "api",
  "split_input": {
    "split_type": "manual",
    "version": "v_1",
    "split_definition": [
      {
        "start": 1,
        "end": 5
      },
      {
        "start": 6,
        "end": 14
      }
    ]
  },
  "external_id": "invoice-48291"
}
```

The request body for creating a Document Split job. The `split_input`
property carries the caller-supplied input that determines how the split
is performed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_file_id|string|true|none|The ID of the source file to split.|
|destination_folder_id|string|true|none|The ID of the folder where the resulting files will be uploaded.|
|input_source|string|true|none|The system that initiated the request, used for analytics and<br>traceability.|
|split_input|[DocumentSplitCreateRequestType](#schemadocumentsplitcreaterequesttype)|true|none|Validation rules for the supported Document Split create request types.|
|external_id|string|false|none|An optional identifier supplied by the caller for this Document Split job.<br>The value is returned on job responses for correlation only. It is not<br>a Box resource ID, is not required to be unique, and cannot be used to<br>look up the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|input_source|api|
|input_source|box|
|input_source|relay|
|input_source|salesforce|

<h2 id="tocS_DocumentSplitCreateRequestManual">DocumentSplitCreateRequestManual</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitcreaterequestmanual"></a>
<a id="schema_DocumentSplitCreateRequestManual"></a>
<a id="tocSdocumentsplitcreaterequestmanual"></a>
<a id="tocsdocumentsplitcreaterequestmanual"></a>

```json
{
  "split_type": "manual",
  "version": "v_1",
  "split_definition": [
    {
      "start": 1,
      "end": 5
    },
    {
      "start": 6,
      "end": 14
    }
  ]
}
```

Validation rules for creating a Document Split job using caller-supplied page
ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|split_type|string|true|none|Discriminator. Must be `manual` for this variant.|
|version|string|false|none|The version of the manual split input format. Omitted or `v_1` is the<br>legacy `split_definition` format. Existing clients may omit this field.|
|split_definition|[[DocumentSplitPageRange](#schemadocumentsplitpagerange)]|true|none|Page ranges that define the split. Each entry produces one output file<br>containing the inclusive page range `[start, end]`.|

#### Enumerated Values

|Property|Value|
|---|---|
|split_type|manual|
|version|v_1|

<h2 id="tocS_DocumentSplitCreateRequestPageSelection">DocumentSplitCreateRequestPageSelection</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitcreaterequestpageselection"></a>
<a id="schema_DocumentSplitCreateRequestPageSelection"></a>
<a id="tocSdocumentsplitcreaterequestpageselection"></a>
<a id="tocsdocumentsplitcreaterequestpageselection"></a>

```json
{
  "split_type": "page_selection",
  "version": "v_2",
  "page_selection": [
    {
      "name": "exhibits",
      "segments": [
        {
          "type": "single_page",
          "page": 4
        },
        {
          "type": "single_page",
          "page": 8
        },
        {
          "type": "page_range",
          "start": 6,
          "end": 8
        }
      ]
    }
  ]
}
```

Validation rules for creating a Document Split job using non-linear page
selections. Each item produces one output file from the declared page
segments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|split_type|string|true|none|Discriminator. Must be `page_selection` for this variant.|
|version|string|false|none|The version of the page selection input format. Optional. When provided<br>must be `v_2`.|
|page_selection|[DocumentSplitPageSelection](#schemadocumentsplitpageselection)|true|none|Defines a non-sequential page selection for a Document Split job. Each item<br>in the array produces one output PDF assembled from the declared page<br>segments.|

#### Enumerated Values

|Property|Value|
|---|---|
|split_type|page_selection|
|version|v_2|

<h2 id="tocS_DocumentSplitCreateRequestSmart">DocumentSplitCreateRequestSmart</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitcreaterequestsmart"></a>
<a id="schema_DocumentSplitCreateRequestSmart"></a>
<a id="tocSdocumentsplitcreaterequestsmart"></a>
<a id="tocsdocumentsplitcreaterequestsmart"></a>

```json
{
  "split_type": "smart",
  "prompt": "Split this contract into one file per signed section."
}
```

Validation rules for creating a Document Split job using Box-generated page
ranges guided by a caller-supplied prompt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|split_type|string|true|none|Discriminator. Must be `smart` for this variant.|
|prompt|string|true|none|A natural language prompt that guides automatic page range detection.|

#### Enumerated Values

|Property|Value|
|---|---|
|split_type|smart|

<h2 id="tocS_DocumentSplitCreateRequestType">DocumentSplitCreateRequestType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitcreaterequesttype"></a>
<a id="schema_DocumentSplitCreateRequestType"></a>
<a id="tocSdocumentsplitcreaterequesttype"></a>
<a id="tocsdocumentsplitcreaterequesttype"></a>

```json
{
  "split_type": "manual",
  "version": "v_1",
  "split_definition": [
    {
      "start": 1,
      "end": 5
    },
    {
      "start": 6,
      "end": 14
    }
  ]
}
```

Validation rules for the supported Document Split create request types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DocumentSplitCreateRequestManual](#schemadocumentsplitcreaterequestmanual)|false|none|Validation rules for creating a Document Split job using caller-supplied page<br>ranges.|
|*oneOf*|[DocumentSplitCreateRequestPageSelection](#schemadocumentsplitcreaterequestpageselection)|false|none|Validation rules for creating a Document Split job using non-linear page<br>selections. Each item produces one output file from the declared page<br>segments.|
|*oneOf*|[DocumentSplitCreateRequestSmart](#schemadocumentsplitcreaterequestsmart)|false|none|Validation rules for creating a Document Split job using Box-generated page<br>ranges guided by a caller-supplied prompt.|

<h2 id="tocS_DocumentSplitCreateResponse">DocumentSplitCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitcreateresponse"></a>
<a id="schema_DocumentSplitCreateResponse"></a>
<a id="tocSdocumentsplitcreateresponse"></a>
<a id="tocsdocumentsplitcreateresponse"></a>

```json
{
  "type": "document_split",
  "id": "1748426"
}
```

A reference to a newly created Document Split job. Returned when a Document
Split job is accepted for asynchronous processing. Clients can poll the
full job representation using this ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `document_split`.|
|id|string|true|none|The unique identifier of the created Document Split job.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document_split|

<h2 id="tocS_DocumentSplitFailures">DocumentSplitFailures</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitfailures"></a>
<a id="schema_DocumentSplitFailures"></a>
<a id="tocSdocumentsplitfailures"></a>
<a id="tocsdocumentsplitfailures"></a>

```json
{
  "errors": [
    "The source file could not be processed."
  ],
  "warnings": [
    "Some pages were skipped because they were blank."
  ]
}
```

Errors and warnings that occurred during a Document Split job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|true|none|A list of errors that occurred during the document job.|
|warnings|[string]|true|none|A list of warnings that occurred during the document job.|

<h2 id="tocS_DocumentSplitOutput">DocumentSplitOutput</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitoutput"></a>
<a id="schema_DocumentSplitOutput"></a>
<a id="tocSdocumentsplitoutput"></a>
<a id="tocsdocumentsplitoutput"></a>

```json
{
  "generated_files": [
    {
      "type": "file",
      "id": "42037322"
    }
  ],
  "split_definition": [
    {
      "start": 1,
      "end": 10
    },
    {
      "start": 11,
      "end": 25
    }
  ]
}
```

The set of files produced by a completed Document Split job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generated_files|[[FileReference](#schemafilereference)]|false|none|References to the files that were created by the split.|
|split_definition|[[DocumentSplitPageRange](#schemadocumentsplitpagerange)]|false|none|The page ranges that Box produced for a `smart` split. Each entry<br>corresponds to one generated file with the inclusive page range<br>`[start, end]`. Omitted or `null` for `manual` splits, where the<br>caller-supplied ranges are available in `split_input.split_definition`.<br>Omitted for `page_selection` splits, where the caller-supplied page<br>layout is available in `split_input.page_selection`.|

<h2 id="tocS_DocumentSplitPageRange">DocumentSplitPageRange</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitpagerange"></a>
<a id="schema_DocumentSplitPageRange"></a>
<a id="tocSdocumentsplitpagerange"></a>
<a id="tocsdocumentsplitpagerange"></a>

```json
{
  "start": 1,
  "end": 10
}
```

An inclusive page range used to define one slice of a manual Document Split job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|integer(int32)|true|none|The first page (inclusive) included in this slice.|
|end|integer(int32)|true|none|The last page (inclusive) included in this slice.|

<h2 id="tocS_DocumentSplitPageSelection">DocumentSplitPageSelection</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitpageselection"></a>
<a id="schema_DocumentSplitPageSelection"></a>
<a id="tocSdocumentsplitpageselection"></a>
<a id="tocsdocumentsplitpageselection"></a>

```json
[
  {
    "name": "exhibits",
    "segments": [
      {
        "type": "single_page",
        "page": 4
      },
      {
        "type": "single_page",
        "page": 8
      },
      {
        "type": "page_range",
        "start": 6,
        "end": 8
      }
    ]
  }
]
```

Defines a non-sequential page selection for a Document Split job. Each item
in the array produces one output PDF assembled from the declared page
segments.

<h2 id="tocS_DocumentSplitPageSelectionItem">DocumentSplitPageSelectionItem</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitpageselectionitem"></a>
<a id="schema_DocumentSplitPageSelectionItem"></a>
<a id="tocSdocumentsplitpageselectionitem"></a>
<a id="tocsdocumentsplitpageselectionitem"></a>

```json
{
  "name": "exhibits",
  "segments": [
    {
      "type": "single_page",
      "page": 4
    },
    {
      "type": "page_range",
      "start": 6,
      "end": 8
    }
  ]
}
```

A single output file definition within a page selection request. Each item
produces one PDF containing the pages specified by its segments array.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Optional name for the output file (without extension). When omitted the<br>system generates a sequential name based on the source file name.|
|segments|[[DocumentSplitPageSelectionSegment](#schemadocumentsplitpageselectionsegment)]|true|none|An ordered list of page segments to include in this output file. Each<br>segment specifies either a single page or a contiguous page range.|

<h2 id="tocS_DocumentSplitPageSelectionPageRange">DocumentSplitPageSelectionPageRange</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitpageselectionpagerange"></a>
<a id="schema_DocumentSplitPageSelectionPageRange"></a>
<a id="tocSdocumentsplitpageselectionpagerange"></a>
<a id="tocsdocumentsplitpageselectionpagerange"></a>

```json
{
  "type": "page_range",
  "start": 6,
  "end": 8
}
```

A page selection segment that includes an inclusive page range from the
source document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Discriminator. Must be `page_range` for this variant.|
|start|integer(int32)|true|none|The first page (inclusive) included in this segment.|
|end|integer(int32)|true|none|The last page (inclusive) included in this segment.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|page_range|

<h2 id="tocS_DocumentSplitPageSelectionSegment">DocumentSplitPageSelectionSegment</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitpageselectionsegment"></a>
<a id="schema_DocumentSplitPageSelectionSegment"></a>
<a id="tocSdocumentsplitpageselectionsegment"></a>
<a id="tocsdocumentsplitpageselectionsegment"></a>

```json
{
  "type": "single_page",
  "page": 4
}
```

A single page segment within a page selection item. The `type` field
identifies whether the segment is a single page or an inclusive page range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DocumentSplitPageSelectionSinglePage](#schemadocumentsplitpageselectionsinglepage)|false|none|A page selection segment that includes a single page from the source<br>document.|
|*oneOf*|[DocumentSplitPageSelectionPageRange](#schemadocumentsplitpageselectionpagerange)|false|none|A page selection segment that includes an inclusive page range from the<br>source document.|

<h2 id="tocS_DocumentSplitPageSelectionSinglePage">DocumentSplitPageSelectionSinglePage</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplitpageselectionsinglepage"></a>
<a id="schema_DocumentSplitPageSelectionSinglePage"></a>
<a id="tocSdocumentsplitpageselectionsinglepage"></a>
<a id="tocsdocumentsplitpageselectionsinglepage"></a>

```json
{
  "type": "single_page",
  "page": 4
}
```

A page selection segment that includes a single page from the source
document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Discriminator. Must be `single_page` for this variant.|
|page|integer(int32)|true|none|A single page number to include.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|single_page|

<h2 id="tocS_DocumentSplits">DocumentSplits</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsplits"></a>
<a id="schema_DocumentSplits"></a>
<a id="tocSdocumentsplits"></a>
<a id="tocsdocumentsplits"></a>

```json
{
  "entries": [
    {
      "id": "1748426",
      "type": "document_split",
      "source_file": {
        "type": "file",
        "id": "42037322"
      },
      "status": "submitted",
      "split_input": {
        "split_type": "manual",
        "version": "v_1",
        "split_definition": [
          {
            "start": 1,
            "end": 5
          },
          {
            "start": 6,
            "end": 14
          }
        ]
      },
      "output": {
        "generated_files": [
          {
            "type": "file",
            "id": "42037322"
          }
        ],
        "split_definition": [
          {
            "start": 1,
            "end": 10
          },
          {
            "start": 11,
            "end": 25
          }
        ]
      },
      "destination_folder": {
        "type": "folder",
        "id": "42037322"
      },
      "input_source": "api",
      "created_at": "2023-10-26T15:30:00Z",
      "created_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "enterprise": {
        "id": "1910967",
        "type": "enterprise"
      },
      "failures": {
        "errors": [
          "The source file could not be processed."
        ],
        "warnings": [
          "Some pages were skipped because they were blank."
        ]
      },
      "external_id": "invoice-48291"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A paginated list of Document Split jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[DocumentSplit](#schemadocumentsplit)]|false|none|A list of Document Split jobs.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

<h2 id="tocS_EnterpriseReference">EnterpriseReference</h2>
<!-- backwards compatibility -->
<a id="schemaenterprisereference"></a>
<a id="schema_EnterpriseReference"></a>
<a id="tocSenterprisereference"></a>
<a id="tocsenterprisereference"></a>

```json
{
  "id": "1910967",
  "type": "enterprise"
}
```

A reference to an enterprise, used when
nested within another resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this enterprise.|
|type|string|true|none|The value will always be `enterprise`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enterprise|

<h2 id="tocS_FileReference">FileReference</h2>
<!-- backwards compatibility -->
<a id="schemafilereference"></a>
<a id="schema_FileReference"></a>
<a id="tocSfilereference"></a>
<a id="tocsfilereference"></a>

```json
{
  "type": "file",
  "id": "42037322"
}
```

File reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `file`.|
|id|string|true|none|ID of the file.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|file|

<h2 id="tocS_FolderReference">FolderReference</h2>
<!-- backwards compatibility -->
<a id="schemafolderreference"></a>
<a id="schema_FolderReference"></a>
<a id="tocSfolderreference"></a>
<a id="tocsfolderreference"></a>

```json
{
  "type": "folder",
  "id": "42037322"
}
```

Folder reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `folder`.|
|id|string|true|none|ID of the folder.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|folder|

<h2 id="tocS_NotesConvertRequestBody">NotesConvertRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemanotesconvertrequestbody"></a>
<a id="schema_NotesConvertRequestBody"></a>
<a id="tocSnotesconvertrequestbody"></a>
<a id="tocsnotesconvertrequestbody"></a>

```json
{
  "content": "# My note\\n\\nHello from Markdown.",
  "content_format": "markdown",
  "parent": {
    "type": "folder",
    "id": "42037322"
  },
  "name": "Quarterly plan"
}
```

Request body for converting source content into a Box Note file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|The content to convert to a note. See the `content_format` field for supported formats.|
|content_format|string|true|none|Format of the content to convert.|
|parent|[FolderReference](#schemafolderreference)|true|none|Folder reference.|
|name|string|true|none|The name for the created note. The `.boxnote` extension is appended automatically.|

#### Enumerated Values

|Property|Value|
|---|---|
|content_format|markdown|

<h2 id="tocS_NotesConvertResponse">NotesConvertResponse</h2>
<!-- backwards compatibility -->
<a id="schemanotesconvertresponse"></a>
<a id="schema_NotesConvertResponse"></a>
<a id="tocSnotesconvertresponse"></a>
<a id="tocsnotesconvertresponse"></a>

```json
{
  "type": "file",
  "id": "1234567890"
}
```

Identifies the created Box Note file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The Box resource type; always `file` for a Box file.|
|id|string|true|none|Box file ID of the created `.boxnote` file.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|file|

<h2 id="tocS_QueryAncestorReference">QueryAncestorReference</h2>
<!-- backwards compatibility -->
<a id="schemaqueryancestorreference"></a>
<a id="schema_QueryAncestorReference"></a>
<a id="tocSqueryancestorreference"></a>
<a id="tocsqueryancestorreference"></a>

```json
{
  "id": "789",
  "type": "folder"
}
```

A reference to an ancestor entity used to restrict query results to that
entity and its recursive descendants.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the ancestor entity.|
|type|string|true|none|The type of the ancestor entity. Possible value: folder.|

<h2 id="tocS_QueryInsightEntry">QueryInsightEntry</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinsightentry"></a>
<a id="schema_QueryInsightEntry"></a>
<a id="tocSqueryinsightentry"></a>
<a id="tocsqueryinsightentry"></a>

```json
{
  "key": [
    "ContractType1"
  ],
  "type": "group",
  "metrics": {
    "totalContractValue": {
      "type": "sum",
      "values": {
        "sum": 180000
      }
    },
    "countContractType": {
      "type": "count",
      "values": {
        "count": 245
      }
    }
  }
}
```

A single computed insight entry, containing its grouping keys (if applicable)
and the computed metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|[string]|true|none|The grouping key values associated with the entry. Contains one value per<br>`group_by` field for `group` entries, and is empty for `overall` and<br>`other` entries.|
|type|string|true|none|The type of insight entry, indicating how the associated metrics are<br>aggregated.|
|metrics|object|true|none|A map of metric aliases to their computed results. For `other` entries, the<br>count is reported under the `totalCountBeyondTopGroups` key.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|group|
|type|overall|
|type|other|

<h2 id="tocS_QueryInsightMetricResult">QueryInsightMetricResult</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinsightmetricresult"></a>
<a id="schema_QueryInsightMetricResult"></a>
<a id="tocSqueryinsightmetricresult"></a>
<a id="tocsqueryinsightmetricresult"></a>

```json
{
  "type": "sum",
  "values": {
    "sum": 50
  }
}
```

The computed result for a single metric, including the metric type and its
computed value(s).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The metric type that was computed.|
|values|object|true|none|The computed metric result(s), keyed by the metric function (for example<br>`sum`, `avg`, `min`, `max`, or `count`).|

<h2 id="tocS_QueryInsights">QueryInsights</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinsights"></a>
<a id="schema_QueryInsights"></a>
<a id="tocSqueryinsights"></a>
<a id="tocsqueryinsights"></a>

```json
{
  "insights": [
    {
      "key": [
        "ContractType1"
      ],
      "type": "group",
      "metrics": {
        "totalContractValue": {
          "type": "sum",
          "values": {
            "sum": 180000
          }
        },
        "countContractType": {
          "type": "count",
          "values": {
            "count": 245
          }
        }
      }
    },
    {
      "key": [
        "ContractType4"
      ],
      "type": "group",
      "metrics": {
        "totalContractValue": {
          "type": "sum",
          "values": {
            "sum": 100000
          }
        },
        "countContractType": {
          "type": "count",
          "values": {
            "count": 185
          }
        }
      }
    },
    {
      "key": [
        "ContractType2"
      ],
      "type": "group",
      "metrics": {
        "totalContractValue": {
          "type": "sum",
          "values": {
            "sum": 200000
          }
        },
        "countContractType": {
          "type": "count",
          "values": {
            "count": 150
          }
        }
      }
    },
    {
      "key": [],
      "type": "other",
      "metrics": {
        "totalCountBeyondTopGroups": {
          "type": "count",
          "values": {
            "count": 165
          }
        }
      }
    }
  ]
}
```

The computed results of an insights request, as a list of insight entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|insights|[[QueryInsightEntry](#schemaqueryinsightentry)]|true|none|The list of computed insight entries. Each entry corresponds to a group,<br>the overall dataset, or the aggregate of groups outside the top results.|

<h2 id="tocS_QueryInsightsGroupBy">QueryInsightsGroupBy</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinsightsgroupby"></a>
<a id="schema_QueryInsightsGroupBy"></a>
<a id="tocSqueryinsightsgroupby"></a>
<a id="tocsqueryinsightsgroupby"></a>

```json
{
  "field": "enterprise_12345678:sales:contractType",
  "bucket_limit": 3
}
```

Defines a single grouping criterion for an insights request. Currently only a
single grouping field is supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|true|none|The fully qualified field name to group by. Supports metadata and item<br>properties.|
|bucket_limit|integer(int32)|false|none|The maximum number of buckets to return for the grouping. Defaults to `5`.|

<h2 id="tocS_QueryInsightsMetricDefinition">QueryInsightsMetricDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinsightsmetricdefinition"></a>
<a id="schema_QueryInsightsMetricDefinition"></a>
<a id="tocSqueryinsightsmetricdefinition"></a>
<a id="tocsqueryinsightsmetricdefinition"></a>

```json
{
  "type": "sum",
  "field": "enterprise_12345678:sales:contractValue"
}
```

Defines a single metric to compute, including the aggregation function and the
field it is applied to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The aggregation function to apply.|
|field|string|true|none|The fully qualified field name on which the metric is computed.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sum|
|type|avg|
|type|min|
|type|max|
|type|count|

<h2 id="tocS_QueryInsightsRequestBody">QueryInsightsRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinsightsrequestbody"></a>
<a id="schema_QueryInsightsRequestBody"></a>
<a id="tocSqueryinsightsrequestbody"></a>
<a id="tocsqueryinsightsrequestbody"></a>

```json
{
  "query": {
    "predicate": "EXISTS(:templateArg) AND box:item:created_at >= :dateArg1 AND box:item:created_at < :dateArg2",
    "params": {
      "templateArg": "enterprise_12345678:sales",
      "dateArg1": "2025-06-01T00:00:00-07:00",
      "dateArg2": "2025-07-01T00:00:00-07:00"
    },
    "ancestors": [
      {
        "id": "123",
        "type": "folder"
      }
    ],
    "group_by": [
      {
        "field": "enterprise_12345678:sales:contractType",
        "bucket_limit": 3
      }
    ]
  },
  "metrics": {
    "totalContractValue": {
      "type": "sum",
      "field": "enterprise_12345678:sales:contractValue"
    },
    "countContractType": {
      "type": "count",
      "field": "enterprise_12345678:sales:contractType"
    }
  }
}
```

Request body describing the filtering, grouping, and metrics for an insights
computation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|The filtering and grouping definition. Filters are applied first, followed<br>by grouping, before metrics are computed.|
|metrics|object|true|none|A map of user-defined metric aliases to their definitions. A maximum of 10<br>metrics may be defined. Each alias must be a unique, non-empty string of up<br>to 256 characters, containing only letters, digits, `_`, `-`, or `.`, and<br>must not start with a digit, `_`, `-`, or `.`. May be empty to request<br>only a total count.|

<h2 id="tocS_QueryOrderBy">QueryOrderBy</h2>
<!-- backwards compatibility -->
<a id="schemaqueryorderby"></a>
<a id="schema_QueryOrderBy"></a>
<a id="tocSqueryorderby"></a>
<a id="tocsqueryorderby"></a>

```json
{
  "field_key": "enterprise_12345678:book:purchasePrice",
  "direction": "asc"
}
```

A single sorting criterion applied to the query result set. Multiple criteria
are applied sequentially in the order specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_key|string|true|none|The fully qualified field key to sort by.|
|direction|string|true|none|The direction in which results are ordered.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|asc|
|direction|desc|

<h2 id="tocS_QueryRequestBody">QueryRequestBody</h2>
<!-- backwards compatibility -->
<a id="schemaqueryrequestbody"></a>
<a id="schema_QueryRequestBody"></a>
<a id="tocSqueryrequestbody"></a>
<a id="tocsqueryrequestbody"></a>

```json
{
  "query": {
    "predicate": "enterprise_12345678:book:purchasePrice >= :price AND box:item:name = :name",
    "params": {
      "price": 100,
      "name": "The Hobbit"
    },
    "ancestors": [
      {
        "id": "789",
        "type": "folder"
      }
    ]
  },
  "order_by": [
    {
      "field_key": "enterprise_12345678:book:purchasePrice",
      "direction": "asc"
    }
  ],
  "limit": 1,
  "fields": [
    "box:item:name",
    "enterprise_12345678:book"
  ]
}
```

Request body describing the query to run, including the filtering predicate,
optional sorting, pagination, and the fields to return for each result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|The query definition, including the filtering predicate and its optional<br>parameters and ancestor restrictions.|
|order_by|[[QueryOrderBy](#schemaqueryorderby)]|false|none|The sorting criteria for the result set. Entries are applied sequentially<br>to define multi-level sorting.|
|limit|integer(int32)|false|none|The maximum number of results to return. Defaults to `50` when not<br>provided.|
|fields|[string]|false|none|Controls which additional fields are included in each result entry. Each<br>value must be one of: a fully qualified item field key (for example<br>`box:item:name`), a metadata template key to hydrate the full template (for<br>example `enterprise_12345678:project`), or a specific metadata template<br>field key to hydrate a single field from the template (for example<br>`enterprise_12345678:project:name`). When omitted, entries include only the<br>item type and identifier.|
|marker|string|false|none|An opaque token returned from a previous response, used to continue<br>retrieval. When provided, all other request parameters must exactly match<br>those of the original request.|

<h2 id="tocS_QueryResultEntry">QueryResultEntry</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresultentry"></a>
<a id="schema_QueryResultEntry"></a>
<a id="tocSqueryresultentry"></a>
<a id="tocsqueryresultentry"></a>

```json
{
  "id": "12345",
  "type": "file",
  "property1": null,
  "property2": null
}
```

A single item matching the query. Always includes the item `type` and `id`.
If a `fields` parameter was specified in the request, then additional item
and/or metadata fields will be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the matching item.|
|type|string|true|none|The type of the matching item.|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_QueryResults">QueryResults</h2>
<!-- backwards compatibility -->
<a id="schemaqueryresults"></a>
<a id="schema_QueryResults"></a>
<a id="tocSqueryresults"></a>
<a id="tocsqueryresults"></a>

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "file",
      "box": {
        "item": {
          "name": "My Form"
        }
      },
      "enterprise_12345678": {
        "book": {
          "$parent": "file_12345",
          "$scope": "enterprise_12345678",
          "$template": "book",
          "$version": 4,
          "isbn": "1871263670",
          "purchasePrice": 234.57,
          "publicationYear": "1937"
        }
      }
    }
  ],
  "next_marker": "xppy0jjG1kBRSc7NBBSgQmBz1Gk6VaQdg5Vyb+Ob0iA=",
  "limit": 1
}
```

A paginated list of items matching the query, using milestone-based marker
pagination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[QueryResultEntry](#schemaqueryresultentry)]|true|none|The list of items matching the query predicate.|
|next_marker|string \| null|true|none|The marker for the start of the next page of results. When `null`, there<br>are no further results available.|
|limit|integer(int32)|true|none|The limit that was used for this request. This will be the same as the limit query <br>parameter unless that value exceeded the maximum value allowed.|

<h2 id="tocS_User--Base">User--Base</h2>
<!-- backwards compatibility -->
<a id="schemauser--base"></a>
<a id="schema_User--Base"></a>
<a id="tocSuser--base"></a>
<a id="tocsuser--base"></a>

```json
{
  "id": "11446498",
  "type": "user"
}
```

A mini representation of a user, used when
nested within another resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this user.|
|type|string|true|none|The value will always be `user`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|

<h2 id="tocS_User--Mini">User--Mini</h2>
<!-- backwards compatibility -->
<a id="schemauser--mini"></a>
<a id="schema_User--Mini"></a>
<a id="tocSuser--mini"></a>
<a id="tocsuser--mini"></a>

```json
{
  "id": "11446498",
  "type": "user",
  "name": "Aaron Levie",
  "login": "ceo@example.com"
}
```

A mini representation of a user, as can be returned when nested within other
resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this user.|
|type|string|true|none|The value will always be `user`.|
|name|string|false|none|The display name of this user.|
|login|string(email)|false|none|The primary email address of this user.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
