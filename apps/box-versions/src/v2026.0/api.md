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

<h1 id="box-platform-api-shuttle">Shuttle</h1>

Endpoints for managing Box Shuttle, the service that migrates content into
Box from external sources. Use these endpoints to manage the systems that
Shuttle migrates content from and the migration jobs that Shuttle runs.

## List shuttle systems

<a id="opIdget_shuttle_systems_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_systems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_systems`

Returns a paginated list of shuttle systems accessible to the
authenticated user.

<h3 id="list-shuttle-systems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a315c0754833bfc5df067bf",
      "type": "shuttle_system",
      "name": "BoxProd",
      "system_type": "box",
      "label": "Box (Production)",
      "state": "connected"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-systems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle systems.|[ShuttleSystems](#schemashuttlesystems)|
|400|Bad Request|Returned when the user has passed in a malformed `marker` or `limit`<br>value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle system

<a id="opIdpost_shuttle_systems_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_systems \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "name": "NYC File Server",
    "system_type": "windows"
  }'
```

`POST /shuttle_systems`

Creates a new shuttle system. Only Windows agent systems can be created
through the public API; other system types must be configured through the
Shuttle application.

> Body parameter

```json
{
  "name": "NYC File Server",
  "system_type": "windows"
}
```

<h3 id="create-shuttle-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttleSystemCreateRequest](#schemashuttlesystemcreaterequest)|true|none|
|» name|body|string|true|The display name for the new shuttle system.|
|» system_type|body|string|true|The public system type identifier for the new shuttle system. Only<br>`windows` is currently supported through the public API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» system_type|windows|

> Example responses

> 201 Response

```json
{
  "id": "6a315c0754833bfc5df067bf",
  "type": "shuttle_system",
  "name": "BoxProd",
  "system_type": "box",
  "label": "Box (Production)",
  "state": "connected"
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

<h3 id="create-shuttle-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created shuttle system.|[ShuttleSystem](#schemashuttlesystem)|
|400|Bad Request|Returned when the request body is malformed or required fields are<br>missing.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle system by ID

<a id="opIdget_shuttle_systems_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_systems/6a315c0754833bfc5df067bf \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_systems/{shuttle_system_id}`

Returns details for a single shuttle system identified by its ID,
including its type and connection state.

<h3 id="get-shuttle-system-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_system_id|path|string|true|The unique identifier for the shuttle system.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a315c0754833bfc5df067bf",
  "type": "shuttle_system",
  "name": "BoxProd",
  "system_type": "box",
  "label": "Box (Production)",
  "state": "connected"
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

<h3 id="get-shuttle-system-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle system.|[ShuttleSystem](#schemashuttlesystem)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle system is not found or the user does not<br>have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update shuttle system

<a id="opIdput_shuttle_systems_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_systems/6a315c0754833bfc5df067bf \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "name": "NYC File Server (Primary)"
  }'
```

`PUT /shuttle_systems/{shuttle_system_id}`

Updates the mutable properties of an existing shuttle system identified by
its ID. Only the fields supplied in the request body are changed.

> Body parameter

```json
{
  "name": "NYC File Server (Primary)"
}
```

<h3 id="update-shuttle-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_system_id|path|string|true|The unique identifier for the shuttle system.|
|body|body|[ShuttleSystemUpdateRequest](#schemashuttlesystemupdaterequest)|true|none|
|» name|body|string|false|The updated display name for the shuttle system.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a315c0754833bfc5df067bf",
  "type": "shuttle_system",
  "name": "BoxProd",
  "system_type": "box",
  "label": "Box (Production)",
  "state": "connected"
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

<h3 id="update-shuttle-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated shuttle system.|[ShuttleSystem](#schemashuttlesystem)|
|400|Bad Request|Returned when the request body is malformed, empty, or fails<br>validation.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle system is not found or the user does not<br>have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete shuttle system

<a id="opIddelete_shuttle_systems_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_systems/6a315c0754833bfc5df067bf \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`DELETE /shuttle_systems/{shuttle_system_id}`

Permanently deletes the shuttle system identified by its ID. This does not
affect content that has already been migrated.

<h3 id="delete-shuttle-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_system_id|path|string|true|The unique identifier for the shuttle system.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="delete-shuttle-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when the shuttle system was successfully<br>deleted.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle system is not found or the user does not<br>have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Issue registration token for Windows system

<a id="opIdpost_shuttle_systems_id_issue_registration_token_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_systems/6a315c0754833bfc5df067bf/issue_registration_token \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`POST /shuttle_systems/{shuttle_system_id}/issue_registration_token`

Issues a new installation token for the Windows shuttle system identified
by its ID. Paste the returned token into the Windows agent installer to
register the agent with this system.

<h3 id="issue-registration-token-for-windows-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_system_id|path|string|true|The unique identifier for the shuttle system.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "registration_token": "eyJhbGciOi...",
  "expires_at": "2026-03-16T12:00:00Z"
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

<h3 id="issue-registration-token-for-windows-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the agent installation credentials for the Windows system.|[ShuttleAgentCredentials](#schemashuttleagentcredentials)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle system is not found or the user does not<br>have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle jobs

<a id="opIdget_shuttle_jobs_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_jobs`

Returns a paginated list of shuttle jobs accessible to the authenticated
user.

<h3 id="list-shuttle-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a3ba68e810d9156194530a1",
      "type": "shuttle_job",
      "name": "Q4 SharePoint to Box",
      "comment": "Migrating the finance department archives.",
      "job_type": "transfer",
      "state": "created",
      "mapping_state": "awaiting_path_mapping",
      "source_system": {
        "type": "shuttle_system",
        "id": "6a3ba68e810d9156194530a1",
        "name": "SharePoint"
      },
      "account_mapping": {
        "is_enabled": true,
        "permission_conflict_strategy": "preserve_structure_restrict_sharing",
        "are_external_shares_mapped": false,
        "are_permissions_mapped": true
      },
      "tags": [
        "q4",
        "hr"
      ],
      "settings": {
        "bandwidth_limit_bytes_per_sec": 10485760,
        "are_deletions_mirrored": false,
        "are_file_versions_synced": true,
        "max_file_versions": 10,
        "is_overwrite_enabled": false,
        "are_completed_mappings_skipped_on_rerun": true,
        "is_content_scanning_enabled": false,
        "include_shared_source_folders": true,
        "include_shared_destination_folders": false
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle jobs.|[ShuttleJobs](#schemashuttlejobs)|
|400|Bad Request|Returned when the user has passed in a malformed `marker` or `limit`<br>value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle job

<a id="opIdpost_shuttle_jobs_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "name": "Q4 SharePoint to Box",
    "job_type": "transfer",
    "source_system_id": "6a3ba68e810d9156194530a1"
  }'
```

`POST /shuttle_jobs`

Creates a new shuttle job that describes a migration from the given source
system into Box.

> Body parameter

```json
{
  "name": "Q4 SharePoint to Box",
  "job_type": "transfer",
  "source_system_id": "6a3ba68e810d9156194530a1"
}
```

<h3 id="create-shuttle-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttleJobCreateRequest](#schemashuttlejobcreaterequest)|true|none|
|» name|body|string|true|The human-readable name of the shuttle job.|
|» job_type|body|string|true|The type of work the shuttle job performs.|
|» source_system_id|body|string|true|The unique identifier of the source system to migrate from.|
|» comment|body|string|false|An optional free-form comment describing the shuttle job.|
|» tags|body|[string]|false|A list of free-form tags associated with the shuttle job.|
|» account_mapping|body|object|false|The account mapping configuration that controls how source identities<br>and permissions are translated into Box. When this object is omitted,<br>the job is created with `is_enabled` set to `false`.|
|» » is_enabled|body|boolean|false|Whether account mapping is enabled for the shuttle job. Defaults to<br>`false` when `account_mapping` is omitted on create.|
|» » permission_conflict_strategy|body|[ShuttleJobPermissionConflictStrategy](#schemashuttlejobpermissionconflictstrategy) \| object \| null|false|The strategy used to resolve permission conflicts. `null` when<br>unset.|
|» » » *oneOf*|body|[ShuttleJobPermissionConflictStrategy](#schemashuttlejobpermissionconflictstrategy)|false|The strategy used to resolve permission conflicts.|
|» » » *oneOf*|body|object \| null|false|The definition for a null schema type in OpenAPI `3.0`.|
|» » are_external_shares_mapped|body|boolean|false|Whether external shares are mapped during the migration.|
|» » are_permissions_mapped|body|boolean|false|Whether permissions are mapped during the migration.|
|» settings|body|object|false|The tunable settings that control how the shuttle job runs.|
|» » bandwidth_limit_bytes_per_sec|body|integer(int64) \| null|false|The maximum transfer bandwidth in bytes per second. `null` when<br>unlimited.|
|» » are_deletions_mirrored|body|boolean|false|Whether deletions in the source system are mirrored in Box.|
|» » are_file_versions_synced|body|boolean|false|Whether prior file versions are synced during the migration.|
|» » max_file_versions|body|integer(int32) \| null|false|The maximum number of file versions to sync. `null` when unlimited.|
|» » is_overwrite_enabled|body|boolean|false|Whether existing files in Box are overwritten.|
|» » are_completed_mappings_skipped_on_rerun|body|boolean|false|Whether mappings that already completed successfully are skipped when<br>the job is rerun.|
|» » is_content_scanning_enabled|body|boolean|false|Whether migrated content is scanned during the migration. Applies<br>only when the source system supports content scanning; ignored<br>otherwise.|
|» » include_shared_source_folders|body|boolean|false|Whether shared folders on the source are included in the migration.<br>Applies only when the source system supports shared folders; ignored<br>otherwise.|
|» » include_shared_destination_folders|body|boolean|false|Whether shared folders on the destination are included in the<br>migration. Applies only when the destination system supports shared<br>folders; ignored otherwise.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» job_type|transfer|
|» job_type|analysis|
|» » » *oneOf*|preserve_structure_restrict_sharing|
|» » » *oneOf*|preserve_structure_expand_sharing|
|» » » *oneOf*|preserve_sharing_modify_structure|
|» » » *oneOf*|warn_permissions_conflicts|

> Example responses

> 201 Response

```json
{
  "id": "6a3ba68e810d9156194530a1",
  "type": "shuttle_job",
  "name": "Q4 SharePoint to Box",
  "comment": "Migrating the finance department archives.",
  "job_type": "transfer",
  "state": "created",
  "mapping_state": "awaiting_path_mapping",
  "source_system": {
    "type": "shuttle_system",
    "id": "6a3ba68e810d9156194530a1",
    "name": "SharePoint"
  },
  "account_mapping": {
    "is_enabled": true,
    "permission_conflict_strategy": "preserve_structure_restrict_sharing",
    "are_external_shares_mapped": false,
    "are_permissions_mapped": true
  },
  "tags": [
    "q4",
    "hr"
  ],
  "settings": {
    "bandwidth_limit_bytes_per_sec": 10485760,
    "are_deletions_mirrored": false,
    "are_file_versions_synced": true,
    "max_file_versions": 10,
    "is_overwrite_enabled": false,
    "are_completed_mappings_skipped_on_rerun": true,
    "is_content_scanning_enabled": false,
    "include_shared_source_folders": true,
    "include_shared_destination_folders": false
  }
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

<h3 id="create-shuttle-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created shuttle job.|[ShuttleJob](#schemashuttlejob)|
|400|Bad Request|Returned when the request body is malformed or required fields are<br>missing.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the referenced source system cannot be found or the user<br>does not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle job by ID

<a id="opIdget_shuttle_jobs_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs/6a3ba68e810d9156194530a1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_jobs/{shuttle_job_id}`

Returns details for a single shuttle job identified by its ID, including
its current state, mapping-preparation state, and configured source system.

<h3 id="get-shuttle-job-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_id|path|string|true|The unique identifier for the shuttle job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba68e810d9156194530a1",
  "type": "shuttle_job",
  "name": "Q4 SharePoint to Box",
  "comment": "Migrating the finance department archives.",
  "job_type": "transfer",
  "state": "created",
  "mapping_state": "awaiting_path_mapping",
  "source_system": {
    "type": "shuttle_system",
    "id": "6a3ba68e810d9156194530a1",
    "name": "SharePoint"
  },
  "account_mapping": {
    "is_enabled": true,
    "permission_conflict_strategy": "preserve_structure_restrict_sharing",
    "are_external_shares_mapped": false,
    "are_permissions_mapped": true
  },
  "tags": [
    "q4",
    "hr"
  ],
  "settings": {
    "bandwidth_limit_bytes_per_sec": 10485760,
    "are_deletions_mirrored": false,
    "are_file_versions_synced": true,
    "max_file_versions": 10,
    "is_overwrite_enabled": false,
    "are_completed_mappings_skipped_on_rerun": true,
    "is_content_scanning_enabled": false,
    "include_shared_source_folders": true,
    "include_shared_destination_folders": false
  }
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

<h3 id="get-shuttle-job-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle job.|[ShuttleJob](#schemashuttlejob)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update shuttle job

<a id="opIdput_shuttle_jobs_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs/6a3ba68e810d9156194530a1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "name": "Q4 SharePoint to Box (Primary)"
  }'
```

`PUT /shuttle_jobs/{shuttle_job_id}`

Updates the mutable properties of an existing shuttle job identified by its
ID. Only the fields supplied in the request body are changed.

> Body parameter

```json
{
  "name": "Q4 SharePoint to Box (Primary)"
}
```

<h3 id="update-shuttle-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_id|path|string|true|The unique identifier for the shuttle job.|
|body|body|[ShuttleJobUpdateRequest](#schemashuttlejobupdaterequest)|true|none|
|» name|body|string|false|The human-readable name of the shuttle job.|
|» comment|body|string \| null|false|An optional free-form comment describing the shuttle job.|
|» tags|body|[string]|false|A list of free-form tags associated with the shuttle job.|
|» account_mapping|body|object|false|The account mapping configuration that controls how source identities<br>and permissions are translated into Box.|
|» » is_enabled|body|boolean|false|Whether account mapping is enabled for the shuttle job.|
|» » permission_conflict_strategy|body|[ShuttleJobPermissionConflictStrategy](#schemashuttlejobpermissionconflictstrategy) \| object \| null|false|The strategy used to resolve permission conflicts. `null` when<br>unset.|
|» » » *oneOf*|body|[ShuttleJobPermissionConflictStrategy](#schemashuttlejobpermissionconflictstrategy)|false|The strategy used to resolve permission conflicts.|
|» » » *oneOf*|body|object \| null|false|The definition for a null schema type in OpenAPI `3.0`.|
|» » are_external_shares_mapped|body|boolean|false|Whether external shares are mapped during the migration.|
|» » are_permissions_mapped|body|boolean|false|Whether permissions are mapped during the migration.|
|» settings|body|object|false|The tunable settings that control how the shuttle job runs.|
|» » bandwidth_limit_bytes_per_sec|body|integer(int64) \| null|false|The maximum transfer bandwidth in bytes per second. `null` when<br>unlimited.|
|» » are_deletions_mirrored|body|boolean|false|Whether deletions in the source system are mirrored in Box.|
|» » are_file_versions_synced|body|boolean|false|Whether prior file versions are synced during the migration.|
|» » max_file_versions|body|integer(int32) \| null|false|The maximum number of file versions to sync. `null` when unlimited.|
|» » is_overwrite_enabled|body|boolean|false|Whether existing files in Box are overwritten.|
|» » are_completed_mappings_skipped_on_rerun|body|boolean|false|Whether mappings that already completed successfully are skipped when<br>the job is rerun.|
|» » is_content_scanning_enabled|body|boolean|false|Whether migrated content is scanned during the migration. Applies<br>only when the source system supports content scanning; ignored<br>otherwise.|
|» » include_shared_source_folders|body|boolean|false|Whether shared folders on the source are included in the migration.<br>Applies only when the source system supports shared folders; ignored<br>otherwise.|
|» » include_shared_destination_folders|body|boolean|false|Whether shared folders on the destination are included in the<br>migration. Applies only when the destination system supports shared<br>folders; ignored otherwise.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» » » *oneOf*|preserve_structure_restrict_sharing|
|» » » *oneOf*|preserve_structure_expand_sharing|
|» » » *oneOf*|preserve_sharing_modify_structure|
|» » » *oneOf*|warn_permissions_conflicts|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba68e810d9156194530a1",
  "type": "shuttle_job",
  "name": "Q4 SharePoint to Box",
  "comment": "Migrating the finance department archives.",
  "job_type": "transfer",
  "state": "created",
  "mapping_state": "awaiting_path_mapping",
  "source_system": {
    "type": "shuttle_system",
    "id": "6a3ba68e810d9156194530a1",
    "name": "SharePoint"
  },
  "account_mapping": {
    "is_enabled": true,
    "permission_conflict_strategy": "preserve_structure_restrict_sharing",
    "are_external_shares_mapped": false,
    "are_permissions_mapped": true
  },
  "tags": [
    "q4",
    "hr"
  ],
  "settings": {
    "bandwidth_limit_bytes_per_sec": 10485760,
    "are_deletions_mirrored": false,
    "are_file_versions_synced": true,
    "max_file_versions": 10,
    "is_overwrite_enabled": false,
    "are_completed_mappings_skipped_on_rerun": true,
    "is_content_scanning_enabled": false,
    "include_shared_source_folders": true,
    "include_shared_destination_folders": false
  }
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

<h3 id="update-shuttle-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated shuttle job.|[ShuttleJob](#schemashuttlejob)|
|400|Bad Request|Returned when the request body is malformed, empty, or fails<br>validation.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete shuttle job

<a id="opIddelete_shuttle_jobs_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs/6a3ba68e810d9156194530a1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`DELETE /shuttle_jobs/{shuttle_job_id}`

Permanently deletes the shuttle job identified by its ID. This does not
affect content that has already been migrated.

<h3 id="delete-shuttle-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_id|path|string|true|The unique identifier for the shuttle job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="delete-shuttle-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when the shuttle job was successfully deleted.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Start shuttle job

<a id="opIdpost_shuttle_jobs_id_start_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs/6a3ba68e810d9156194530a1/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "mode": "simulation"
  }'
```

`POST /shuttle_jobs/{shuttle_job_id}/start`

Starts the job in the given mode. When no body is provided the job runs in
simulation mode.

> Body parameter

```json
{
  "mode": "simulation"
}
```

<h3 id="start-shuttle-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_id|path|string|true|The unique identifier for the shuttle job.|
|body|body|[ShuttleJobStartRequest](#schemashuttlejobstartrequest)|false|none|
|» mode|body|string|false|The run mode. Defaults to simulation when omitted.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» mode|transfer|
|» mode|simulation|
|» mode|scan|
|» mode|analysis|

> Example responses

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

<h3 id="start-shuttle-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The shuttle job was accepted and is being started.|None|
|400|Bad Request|Returned when the request body is malformed or fails validation.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when the job is not ready or is in a state that does not allow<br>starting.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Stop shuttle job

<a id="opIdpost_shuttle_jobs_id_stop_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs/6a3ba68e810d9156194530a1/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`POST /shuttle_jobs/{shuttle_job_id}/stop`

Stops a running shuttle job identified by its ID. Any work already in
progress is allowed to finish before the job transitions to a stopped
state.

<h3 id="stop-shuttle-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_id|path|string|true|The unique identifier for the shuttle job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="stop-shuttle-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The shuttle job was accepted and is being stopped.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when the job is not in a running state and cannot be stopped.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Prepare migration

<a id="opIdpost_shuttle_jobs_id_prepare_migration_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_jobs/6a3ba68e810d9156194530a1/prepare_migration \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`POST /shuttle_jobs/{shuttle_job_id}/prepare_migration`

Validates the configured account and path mappings before a transfer. Only
relevant when account mapping is enabled.

<h3 id="prepare-migration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_id|path|string|true|The unique identifier for the shuttle job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="prepare-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The migration preparation was accepted and is being processed.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when the job is not in a state that allows migration<br>preparation, or account mapping is not enabled.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle runs

<a id="opIdget_shuttle_runs_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_runs?job_id=6a3ba68e810d9156194530a1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_runs`

Returns a paginated list of runs for the shuttle job identified by
`job_id`.

<h3 id="list-shuttle-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose runs to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a3ba68e810d9156194530a1:42",
      "type": "shuttle_run",
      "job_id": "6a3ba68e810d9156194530a1",
      "run_mode": "transfer",
      "state": "completed",
      "started_at": "2026-03-15T02:00:00Z",
      "ended_at": "2026-03-15T06:30:00Z",
      "duration_seconds": 16200,
      "stats": {
        "bytes_sent": 1073741824,
        "files_sent": 4200,
        "folders_created": 350,
        "is_estimated": false
      },
      "created_by": {
        "id": "11446498",
        "type": "user"
      },
      "available_report_sections": [
        "event_log",
        "files_and_folders"
      ]
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle runs.|[ShuttleRuns](#schemashuttleruns)|
|400|Bad Request|Returned when `job_id` is missing or the user has passed in a malformed<br>`marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle run by ID

<a id="opIdget_shuttle_runs_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_runs/6a3ba68e810d9156194530a1%3A42 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_runs/{shuttle_run_id}`

Returns details for a single shuttle run identified by its ID, including
its mode, state, timing, and transfer statistics.

<h3 id="get-shuttle-run-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_run_id|path|string|true|The unique identifier for the shuttle run, in the form<br>`{job_id}:{run_number}`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba68e810d9156194530a1:42",
  "type": "shuttle_run",
  "job_id": "6a3ba68e810d9156194530a1",
  "run_mode": "transfer",
  "state": "completed",
  "started_at": "2026-03-15T02:00:00Z",
  "ended_at": "2026-03-15T06:30:00Z",
  "duration_seconds": 16200,
  "stats": {
    "bytes_sent": 1073741824,
    "files_sent": 4200,
    "folders_created": 350,
    "is_estimated": false
  },
  "created_by": {
    "id": "11446498",
    "type": "user"
  },
  "available_report_sections": [
    "event_log",
    "files_and_folders"
  ]
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

<h3 id="get-shuttle-run-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle run.|[ShuttleRun](#schemashuttlerun)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle run is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle job schedules

<a id="opIdget_shuttle_job_schedules_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_job_schedules?job_id=6a3ba68e810d9156194530a1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_job_schedules`

Returns a paginated list of schedules for the shuttle job identified by
`job_id`.

<h3 id="list-shuttle-job-schedules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose schedules to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "7c1ba68e810d9156194530b2",
      "type": "shuttle_job_schedule",
      "job_id": "6a3ba68e810d9156194530a1",
      "state": "enabled",
      "run_mode": "transfer",
      "description": "Nightly finance share replay.",
      "last_attempt_at": "2026-03-16T09:00:12Z",
      "trigger": {
        "type": "by_time",
        "start_at": "2026-03-16T09:00:00",
        "time_zone": "America/Los_Angeles",
        "repeat": "daily"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-job-schedules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle job schedules.|[ShuttleJobSchedules](#schemashuttlejobschedules)|
|400|Bad Request|Returned when `job_id` is missing or the user has passed in a malformed<br>`marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle job schedule

<a id="opIdpost_shuttle_job_schedules_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_job_schedules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "job_id": "6a3ba68e810d9156194530a1",
    "run_mode": "transfer",
    "state": "enabled",
    "description": "Nightly finance share replay.",
    "trigger": {
      "type": "by_time",
      "start_at": "2026-03-16T09:00:00",
      "time_zone": "America/Los_Angeles",
      "repeat": "daily"
    }
  }'
```

`POST /shuttle_job_schedules`

Creates a schedule that starts runs of the shuttle job identified by
`job_id`. The schedule starts a run either at a wall-clock time or after
another job's run meets a condition. Schedules cannot start a run in
`scan` mode.

> Body parameter

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "run_mode": "transfer",
  "state": "enabled",
  "description": "Nightly finance share replay.",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
}
```

<h3 id="create-shuttle-job-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttleJobScheduleCreateRequest](#schemashuttlejobschedulecreaterequest)|true|none|
|» job_id|body|string|true|The unique identifier of the shuttle job this schedule belongs to.|
|» run_mode|body|string|true|The kind of run the schedule starts. `scan` is not a valid schedule<br>run mode.|
|» state|body|string|false|Whether the schedule is active. When omitted, defaults to `enabled`.|
|» description|body|string \| null|false|An optional human-readable description of the schedule.|
|» trigger|body|[ShuttleJobScheduleTrigger](#schemashuttlejobscheduletrigger)|true|When a shuttle job schedule should start a run. Exactly one trigger<br>variant is present, discriminated by `type`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» run_mode|transfer|
|» run_mode|simulation|
|» run_mode|analysis|
|» state|enabled|
|» state|paused|

> Example responses

> 201 Response

```json
{
  "id": "7c1ba68e810d9156194530b2",
  "type": "shuttle_job_schedule",
  "job_id": "6a3ba68e810d9156194530a1",
  "state": "enabled",
  "run_mode": "transfer",
  "description": "Nightly finance share replay.",
  "last_attempt_at": "2026-03-16T09:00:12Z",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
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

<h3 id="create-shuttle-job-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created shuttle job schedule.|[ShuttleJobSchedule](#schemashuttlejobschedule)|
|400|Bad Request|Returned when the request body is malformed or required fields are<br>missing.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when a referenced shuttle job cannot be found or the user<br>does not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle job schedule

<a id="opIdget_shuttle_job_schedules_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_job_schedules/7c1ba68e810d9156194530b2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_job_schedules/{shuttle_job_schedule_id}`

Retrieves the shuttle job schedule identified by its ID.

<h3 id="get-shuttle-job-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_schedule_id|path|string|true|The unique identifier for the shuttle job schedule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "7c1ba68e810d9156194530b2",
  "type": "shuttle_job_schedule",
  "job_id": "6a3ba68e810d9156194530a1",
  "state": "enabled",
  "run_mode": "transfer",
  "description": "Nightly finance share replay.",
  "last_attempt_at": "2026-03-16T09:00:12Z",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
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

<h3 id="get-shuttle-job-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle job schedule.|[ShuttleJobSchedule](#schemashuttlejobschedule)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job schedule is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update shuttle job schedule

<a id="opIdput_shuttle_job_schedules_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_job_schedules/7c1ba68e810d9156194530b2 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "state": "paused"
  }'
```

`PUT /shuttle_job_schedules/{shuttle_job_schedule_id}`

Updates the mutable properties of an existing shuttle job schedule
identified by its ID. Only the fields supplied in the request body are
changed. The owning job cannot be changed.

> Body parameter

```json
{
  "state": "paused"
}
```

<h3 id="update-shuttle-job-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_schedule_id|path|string|true|The unique identifier for the shuttle job schedule.|
|body|body|[ShuttleJobScheduleUpdateRequest](#schemashuttlejobscheduleupdaterequest)|true|none|
|» state|body|string|false|Whether the schedule is active.|
|» run_mode|body|string|false|The kind of run the schedule starts. `scan` is not a valid schedule<br>run mode.|
|» description|body|string \| null|false|An optional human-readable description of the schedule.|
|» trigger|body|[ShuttleJobScheduleTrigger](#schemashuttlejobscheduletrigger)|false|When a shuttle job schedule should start a run. Exactly one trigger<br>variant is present, discriminated by `type`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» state|enabled|
|» state|paused|
|» run_mode|transfer|
|» run_mode|simulation|
|» run_mode|analysis|

> Example responses

> 200 Response

```json
{
  "id": "7c1ba68e810d9156194530b2",
  "type": "shuttle_job_schedule",
  "job_id": "6a3ba68e810d9156194530a1",
  "state": "enabled",
  "run_mode": "transfer",
  "description": "Nightly finance share replay.",
  "last_attempt_at": "2026-03-16T09:00:12Z",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
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

<h3 id="update-shuttle-job-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated shuttle job schedule.|[ShuttleJobSchedule](#schemashuttlejobschedule)|
|400|Bad Request|Returned when the request body is malformed, empty, or fails<br>validation.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job schedule is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete shuttle job schedule

<a id="opIddelete_shuttle_job_schedules_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_job_schedules/7c1ba68e810d9156194530b2 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`DELETE /shuttle_job_schedules/{shuttle_job_schedule_id}`

Permanently deletes the shuttle job schedule identified by its ID. This
does not affect runs that have already started.

<h3 id="delete-shuttle-job-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_job_schedule_id|path|string|true|The unique identifier for the shuttle job schedule.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="delete-shuttle-job-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when the shuttle job schedule was<br>successfully deleted.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job schedule is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle path mappings

<a id="opIdget_shuttle_path_mappings_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_path_mappings?job_id=6a3ba68e810d9156194530a1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_path_mappings`

Returns a paginated list of path mappings for the shuttle job identified
by `job_id`.

<h3 id="list-shuttle-path-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose path mappings to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a3ba7a24ea17bc9461eeacd",
      "type": "shuttle_path_mapping",
      "job_id": "6a3ba68e810d9156194530a1",
      "is_path_skipped": false,
      "source": {
        "type": "account",
        "path": "/HR Migration",
        "path_id": "1234567890",
        "account": {
          "id": "123456",
          "email": "admin@company.box.com",
          "name": "Box Admin"
        },
        "is_directory": true
      },
      "target": {
        "type": "account",
        "path": "/HR Migration",
        "path_id": "1234567890",
        "account": {
          "id": "123456",
          "email": "admin@company.box.com",
          "name": "Box Admin"
        },
        "is_directory": true
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-path-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle path mappings.|[ShuttlePathMappings](#schemashuttlepathmappings)|
|400|Bad Request|Returned when `job_id` is missing or the user has passed in a malformed<br>`marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle path mapping

<a id="opIdpost_shuttle_path_mappings_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_path_mappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "job_id": "6a3ba68e810d9156194530a1",
    "source": {
      "type": "shared_space",
      "space": "HR Team Site",
      "path": "/Shared Documents",
      "path_id": "sp-folder-001",
      "is_directory": true
    },
    "target": {
      "type": "account",
      "path": "/HR Migration",
      "path_id": "1234567890",
      "account": {
        "email": "admin@company.box.com"
      }
    }
  }'
```

`POST /shuttle_path_mappings`

Creates a path mapping that connects a source location on the migrated
system to a destination in Box for the given shuttle job.

> Body parameter

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "source": {
    "type": "shared_space",
    "space": "HR Team Site",
    "path": "/Shared Documents",
    "path_id": "sp-folder-001",
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "email": "admin@company.box.com"
    }
  }
}
```

<h3 id="create-shuttle-path-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttlePathMappingCreateRequest](#schemashuttlepathmappingcreaterequest)|true|none|
|» job_id|body|string|true|The unique identifier of the shuttle job this mapping belongs to.|
|» is_path_skipped|body|boolean|false|Whether this source path should be skipped during the migration.<br>Defaults to `false`.|
|» source|body|object|true|none|
|» » *oneOf*|body|[ShuttlePathMappingAccountLocationInput](#schemashuttlepathmappingaccountlocationinput)|false|An account-scoped source location supplied when creating or updating a path<br>mapping.|
|» » *oneOf*|body|[ShuttlePathMappingSharedSpaceLocationInput](#schemashuttlepathmappingsharedspacelocationinput)|false|A shared-container source location supplied when creating or updating a<br>path mapping.|
|» target|body|[ShuttlePathMappingTargetLocationInput](#schemashuttlepathmappingtargetlocationinput) \| object \| null|false|The destination location to migrate to. Omit or set to `null` when the<br>source path is skipped.|
|» » *oneOf*|body|[ShuttlePathMappingTargetLocationInput](#schemashuttlepathmappingtargetlocationinput)|false|A destination location supplied when creating or updating a path mapping.<br>The object shape is determined by `type`. Destination input does not<br>include `is_directory`; that flag is taken from the source.|
|» » *oneOf*|body|object \| null|false|The definition for a null schema type in OpenAPI `3.0`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 201 Response

```json
{
  "id": "6a3ba7a24ea17bc9461eeacd",
  "type": "shuttle_path_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "is_path_skipped": false,
  "source": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  }
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

<h3 id="create-shuttle-path-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created shuttle path mapping.|[ShuttlePathMapping](#schemashuttlepathmapping)|
|400|Bad Request|Returned when the request body is malformed or required fields are<br>missing.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the referenced shuttle job cannot be found or the user<br>does not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle path mapping by ID

<a id="opIdget_shuttle_path_mappings_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_path_mappings/6a3ba7a24ea17bc9461eeacd \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_path_mappings/{shuttle_path_mapping_id}`

Returns details for a single shuttle path mapping identified by its ID,
including the source location and destination, if any.

<h3 id="get-shuttle-path-mapping-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_path_mapping_id|path|string|true|The unique identifier for the shuttle path mapping.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba7a24ea17bc9461eeacd",
  "type": "shuttle_path_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "is_path_skipped": false,
  "source": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  }
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

<h3 id="get-shuttle-path-mapping-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle path mapping.|[ShuttlePathMapping](#schemashuttlepathmapping)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle path mapping is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update shuttle path mapping

<a id="opIdput_shuttle_path_mappings_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_path_mappings/6a3ba7a24ea17bc9461eeacd \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "is_path_skipped": true,
    "target": null
  }'
```

`PUT /shuttle_path_mappings/{shuttle_path_mapping_id}`

Updates the mutable properties of an existing shuttle path mapping
identified by its ID. Only the fields supplied in the request body are
changed.

> Body parameter

```json
{
  "is_path_skipped": true,
  "target": null
}
```

<h3 id="update-shuttle-path-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_path_mapping_id|path|string|true|The unique identifier for the shuttle path mapping.|
|body|body|[ShuttlePathMappingUpdateRequest](#schemashuttlepathmappingupdaterequest)|true|none|
|» is_path_skipped|body|boolean|false|Whether this source path should be skipped during the migration.|
|» source|body|object|false|none|
|» » *oneOf*|body|[ShuttlePathMappingAccountLocationInput](#schemashuttlepathmappingaccountlocationinput)|false|An account-scoped source location supplied when creating or updating a path<br>mapping.|
|» » *oneOf*|body|[ShuttlePathMappingSharedSpaceLocationInput](#schemashuttlepathmappingsharedspacelocationinput)|false|A shared-container source location supplied when creating or updating a<br>path mapping.|
|» target|body|[ShuttlePathMappingTargetLocationInput](#schemashuttlepathmappingtargetlocationinput) \| object \| null|false|The destination location to migrate to. Set to `null` to clear the<br>destination, for example when skipping the source path.|
|» » *oneOf*|body|[ShuttlePathMappingTargetLocationInput](#schemashuttlepathmappingtargetlocationinput)|false|A destination location supplied when creating or updating a path mapping.<br>The object shape is determined by `type`. Destination input does not<br>include `is_directory`; that flag is taken from the source.|
|» » *oneOf*|body|object \| null|false|The definition for a null schema type in OpenAPI `3.0`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba7a24ea17bc9461eeacd",
  "type": "shuttle_path_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "is_path_skipped": false,
  "source": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  }
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

<h3 id="update-shuttle-path-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated shuttle path mapping.|[ShuttlePathMapping](#schemashuttlepathmapping)|
|400|Bad Request|Returned when the request body is malformed, empty, or fails<br>validation.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle path mapping is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete shuttle path mapping

<a id="opIddelete_shuttle_path_mappings_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_path_mappings/6a3ba7a24ea17bc9461eeacd \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`DELETE /shuttle_path_mappings/{shuttle_path_mapping_id}`

Permanently deletes the shuttle path mapping identified by its ID. This
does not affect content that has already been migrated.

<h3 id="delete-shuttle-path-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_path_mapping_id|path|string|true|The unique identifier for the shuttle path mapping.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="delete-shuttle-path-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when the shuttle path mapping was<br>successfully deleted.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle path mapping is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle path mapping import

<a id="opIdpost_shuttle_path_mapping_imports_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_path_mapping_imports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "job_id": "6a3ba68e810d9156194530a1",
    "file_id": "12345678901"
  }'
```

`POST /shuttle_path_mapping_imports`

Accepts a spreadsheet of path mappings, already stored in Box, and replaces
the job's path mappings.
A file that is not a mapping workbook, or that exceeds the size or row
limits (10 MiB Box download limit; 100,000 mapping rows), returns `400`
synchronously and leaves the job unchanged.
An accepted import always replaces every path mapping on the job. When all
rows are valid the workbook is deployed in full. When any row is invalid
the job ends with no path mappings and `mapping_state` becomes
`paths_import_rejected` until the next import or the next manual
path-mapping change. Row problems are listed by
`GET /shuttle_mapping_errors?job_id=…` with category `path_import`, messages
of the form `Row N: …`, at most 500 entries plus one overflow entry.
Validation and deployment are asynchronous after acceptance. Poll
`GET /shuttle_jobs/{shuttle_job_id}` while `mapping_state` is
`importing_paths`. Only one import may be in flight per job.

> Body parameter

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "file_id": "12345678901"
}
```

<h3 id="create-shuttle-path-mapping-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttlePathMappingImportCreateRequest](#schemashuttlepathmappingimportcreaterequest)|true|none|
|» job_id|body|string|true|The unique identifier of the shuttle job whose path mappings are<br>replaced.|
|» file_id|body|string|true|The unique identifier of the Box file holding the mapping workbook. The<br>file is read as the calling user, so it must live somewhere that user can<br>download from.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="create-shuttle-path-mapping-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The import was accepted. Validation and deployment continue<br>asynchronously. Poll `GET /shuttle_jobs/{shuttle_job_id}` until<br>`mapping_state` is no longer `importing_paths`. A rejected import ends<br>with `mapping_state` `paths_import_rejected` and an empty path-mapping<br>list; a successful import moves on to a later mapping-preparation state<br>such as `paths_ready` or `ready`.|None|
|400|Bad Request|Returned when the request body is malformed or fails request validation,<br>or when the referenced file cannot be accepted as a mapping workbook<br>(for example it is not a spreadsheet, has no mapping sheets, or exceeds<br>the size or row limits). Nothing is stored and the job's path mappings<br>are unchanged. Row-level mapping errors are not returned here; after a<br>`202` they finish asynchronously as `paths_import_rejected` and appear<br>on `GET /shuttle_mapping_errors`.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found, or the referenced file does<br>not exist or cannot be read by the authenticated user.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when an import is already in progress for the shuttle job.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle subject mapping import

<a id="opIdpost_shuttle_subject_mapping_imports_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_subject_mapping_imports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "job_id": "6a3ba68e810d9156194530a1",
    "file_id": "12345678901"
  }'
```

`POST /shuttle_subject_mapping_imports`

Accepts a spreadsheet of subject (user and group) mappings, already stored
in Box, and replaces the job's subject mappings.
A file that is not a subject-mapping workbook, or that exceeds the size or
row limits (10 MiB Box download limit; 50,000 mapping rows), returns `400`
synchronously and leaves the job unchanged.
An accepted import always replaces every subject mapping on the job. When
all rows are valid the workbook is deployed in full. When any row is
invalid the job ends with no subject mappings and `mapping_state` becomes
`subjects_import_rejected` until the next import or the next manual
subject-mapping change. Row problems are listed by
`GET /shuttle_mapping_errors?job_id=…` with category `subject_import`,
messages of the form `Row N: …`, at most 500 entries plus one overflow
entry.
Validation and deployment are asynchronous after acceptance. Poll
`GET /shuttle_jobs/{shuttle_job_id}` while `mapping_state` is
`importing_subjects`. Only one import may be in flight per job. The job
must map subjects (`account_mapping` enabled) and its source scan must be
finished; otherwise the request returns `409`.

Expected workbook format (API clients cannot download the UI template):
sheets `Users` and/or `Groups` (a sheet named `Subjects` is also accepted).
Columns are `Source User <Key>`, `Target User <Key>`, `Skip` on `Users`,
and `Source Group <Key>`, `Target Group <Key>`, `Skip` on `Groups`, where
`<Key>` is the primary identifier for that role and system:
- Users: `Email` for most systems; `ID` for `SharePoint` (2007/2010/2013);
  `Name` for Windows (`windows_union`, stored as the user id).
- Groups: `Name` for most systems; `Email` for Google Drive admin groups.
Source rows for a template can be taken from
`GET /shuttle_discovered_subjects`.

> Body parameter

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "file_id": "12345678901"
}
```

<h3 id="create-shuttle-subject-mapping-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttleSubjectMappingImportCreateRequest](#schemashuttlesubjectmappingimportcreaterequest)|true|none|
|» job_id|body|string|true|The unique identifier of the shuttle job whose subject mappings are<br>replaced.|
|» file_id|body|string|true|The unique identifier of the Box file holding the mapping workbook. The<br>file is read as the calling user, so it must live somewhere that user can<br>download from.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="create-shuttle-subject-mapping-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The import was accepted. Validation and deployment continue<br>asynchronously. Poll `GET /shuttle_jobs/{shuttle_job_id}` until<br>`mapping_state` is no longer `importing_subjects`. A rejected import<br>ends with `mapping_state` `subjects_import_rejected` and an empty<br>subject-mapping list; a successful import moves on to a later<br>mapping-preparation state such as `mapping_complete` or `ready`.|None|
|400|Bad Request|Returned when the request body is malformed or fails request validation,<br>or when the referenced file cannot be accepted as a subject-mapping<br>workbook (for example it is not a spreadsheet, has none of the `Users`,<br>`Groups`, or `Subjects` sheets, or exceeds the size or row limits).<br>Nothing is stored and the job's subject mappings are unchanged.<br>Row-level mapping errors are not returned here; after a `202` they<br>finish asynchronously as `subjects_import_rejected` and appear on<br>`GET /shuttle_mapping_errors`.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found, or the referenced file does<br>not exist or cannot be read by the authenticated user.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when an import is already in progress for the shuttle job, the<br>job does not map subjects, or the source scan has not finished (or is<br>out of date relative to the current path mappings).|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle subject mappings

<a id="opIdget_shuttle_subject_mappings_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_subject_mappings?job_id=6a3ba68e810d9156194530a1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_subject_mappings`

Returns a paginated list of subject mappings for the shuttle job identified
by `job_id`.

<h3 id="list-shuttle-subject-mappings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose subject mappings to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a3ba7b12ea17bc9461eeace",
      "type": "shuttle_subject_mapping",
      "job_id": "6a3ba68e810d9156194530a1",
      "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
      "revision": 3,
      "is_subject_skipped": false,
      "source": {
        "type": "user",
        "id": "sp-user-001",
        "email": "user@example.com",
        "name": "Jane Doe",
        "roles": [
          "owner"
        ]
      },
      "target": {
        "type": "user",
        "id": "12345678",
        "email": "jane.doe@company.box.com",
        "name": "Jane Doe"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-subject-mappings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle subject mappings.|[ShuttleSubjectMappings](#schemashuttlesubjectmappings)|
|400|Bad Request|Returned when `job_id` is missing or the user has passed in a malformed<br>`marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle subject mapping

<a id="opIdpost_shuttle_subject_mappings_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_subject_mappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "job_id": "6a3ba68e810d9156194530a1",
    "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
    "target": {
      "type": "user",
      "id": "12345678"
    }
  }'
```

`POST /shuttle_subject_mappings`

Creates a subject mapping that connects a discovered source subject to a
Box user or group for the given shuttle job.

> Body parameter

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
  "target": {
    "type": "user",
    "id": "12345678"
  }
}
```

<h3 id="create-shuttle-subject-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttleSubjectMappingCreateRequest](#schemashuttlesubjectmappingcreaterequest)|true|none|
|» job_id|body|string|true|The unique identifier of the shuttle job this mapping belongs to.|
|» discovered_subject_id|body|string|true|The unique identifier of the discovered subject to map.|
|» revision|body|integer(int32)|false|The discovery-requirements revision to resolve against. Omit to use the<br>latest revision.|
|» is_subject_skipped|body|boolean|false|Whether this subject should be skipped during the migration. Defaults<br>to `false`.|
|» target|body|[ShuttleTargetSubjectInput](#schemashuttletargetsubjectinput) \| object \| null|false|The Box target to map to. Omit or set to `null` when the subject is<br>skipped.|
|» » *oneOf*|body|[ShuttleTargetSubjectInput](#schemashuttletargetsubjectinput)|false|A Box user or group to map a source subject to.|
|» » *oneOf*|body|object \| null|false|The definition for a null schema type in OpenAPI `3.0`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 201 Response

```json
{
  "id": "6a3ba7b12ea17bc9461eeace",
  "type": "shuttle_subject_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
  "revision": 3,
  "is_subject_skipped": false,
  "source": {
    "type": "user",
    "id": "sp-user-001",
    "email": "user@example.com",
    "name": "Jane Doe",
    "roles": [
      "owner"
    ]
  },
  "target": {
    "type": "user",
    "id": "12345678",
    "email": "jane.doe@company.box.com",
    "name": "Jane Doe"
  }
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

<h3 id="create-shuttle-subject-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns the newly created shuttle subject mapping.|[ShuttleSubjectMapping](#schemashuttlesubjectmapping)|
|400|Bad Request|Returned when the request body is malformed or required fields are<br>missing.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the referenced shuttle job or discovered subject cannot<br>be found or the user does not have access to it.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when the provided revision does not match the current<br>discovery-requirements revision.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle subject mapping by ID

<a id="opIdget_shuttle_subject_mappings_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_subject_mappings/6a3ba7b12ea17bc9461eeace \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_subject_mappings/{shuttle_subject_mapping_id}`

Returns details for a single shuttle subject mapping identified by its ID,
including the source subject and Box target, if any.

<h3 id="get-shuttle-subject-mapping-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_subject_mapping_id|path|string|true|The unique identifier for the shuttle subject mapping.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba7b12ea17bc9461eeace",
  "type": "shuttle_subject_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
  "revision": 3,
  "is_subject_skipped": false,
  "source": {
    "type": "user",
    "id": "sp-user-001",
    "email": "user@example.com",
    "name": "Jane Doe",
    "roles": [
      "owner"
    ]
  },
  "target": {
    "type": "user",
    "id": "12345678",
    "email": "jane.doe@company.box.com",
    "name": "Jane Doe"
  }
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

<h3 id="get-shuttle-subject-mapping-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle subject mapping.|[ShuttleSubjectMapping](#schemashuttlesubjectmapping)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle subject mapping is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update shuttle subject mapping

<a id="opIdput_shuttle_subject_mappings_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_subject_mappings/6a3ba7b12ea17bc9461eeace \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "is_subject_skipped": true
  }'
```

`PUT /shuttle_subject_mappings/{shuttle_subject_mapping_id}`

Updates the mutable properties of an existing shuttle subject mapping
identified by its ID. Only the fields supplied in the request body are
changed.

> Body parameter

```json
{
  "is_subject_skipped": true
}
```

<h3 id="update-shuttle-subject-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_subject_mapping_id|path|string|true|The unique identifier for the shuttle subject mapping.|
|body|body|[ShuttleSubjectMappingUpdateRequest](#schemashuttlesubjectmappingupdaterequest)|true|none|
|» is_subject_skipped|body|boolean|false|Whether this subject should be skipped during the migration.|
|» target|body|[ShuttleTargetSubjectInput](#schemashuttletargetsubjectinput) \| object \| null|false|The Box target to map to. Set to `null` only for a skipped subject.<br>Setting it to `null` while the mapping is active fails validation.<br>Updating `is_subject_skipped` alone preserves the existing target.|
|» » *oneOf*|body|[ShuttleTargetSubjectInput](#schemashuttletargetsubjectinput)|false|A Box user or group to map a source subject to.|
|» » *oneOf*|body|object \| null|false|The definition for a null schema type in OpenAPI `3.0`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba7b12ea17bc9461eeace",
  "type": "shuttle_subject_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
  "revision": 3,
  "is_subject_skipped": false,
  "source": {
    "type": "user",
    "id": "sp-user-001",
    "email": "user@example.com",
    "name": "Jane Doe",
    "roles": [
      "owner"
    ]
  },
  "target": {
    "type": "user",
    "id": "12345678",
    "email": "jane.doe@company.box.com",
    "name": "Jane Doe"
  }
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

<h3 id="update-shuttle-subject-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated shuttle subject mapping.|[ShuttleSubjectMapping](#schemashuttlesubjectmapping)|
|400|Bad Request|Returned when the request body is malformed, empty, or fails<br>validation.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle subject mapping is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete shuttle subject mapping

<a id="opIddelete_shuttle_subject_mappings_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_subject_mappings/6a3ba7b12ea17bc9461eeace \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`DELETE /shuttle_subject_mappings/{shuttle_subject_mapping_id}`

Permanently deletes the shuttle subject mapping identified by its ID.

<h3 id="delete-shuttle-subject-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_subject_mapping_id|path|string|true|The unique identifier for the shuttle subject mapping.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

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

<h3 id="delete-shuttle-subject-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when the shuttle subject mapping was<br>successfully deleted.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle subject mapping is not found or the user does<br>not have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle discovered subjects

<a id="opIdget_shuttle_discovered_subjects_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_discovered_subjects?job_id=6a3ba68e810d9156194530a1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_discovered_subjects`

Returns a paginated list of subjects discovered on the source system for
the shuttle job identified by `job_id`.

<h3 id="list-shuttle-discovered-subjects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose discovered subjects to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a315c0754833bfc5df067bf",
      "type": "shuttle_discovered_subject",
      "job_id": "6a3ba68e810d9156194530a1",
      "revision": 3,
      "source": {
        "type": "user",
        "id": "sp-user-001",
        "email": "user@example.com",
        "name": "Jane Doe",
        "roles": [
          "owner"
        ]
      },
      "suggested_target": {
        "type": "user",
        "id": "12345678",
        "email": "user@example.com",
        "name": "Jane Doe"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-discovered-subjects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of discovered subjects.|[ShuttleDiscoveredSubjects](#schemashuttlediscoveredsubjects)|
|400|Bad Request|Returned when `job_id` is missing or the user has passed in a malformed<br>`marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle path entries

<a id="opIdget_shuttle_path_entries_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_path_entries?job_id=6a3ba68e810d9156194530a1&side=source' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_path_entries`

Returns a paginated list of source or target path entries for a shuttle
job. Call with only `job_id` and `side` to list the roots, then browse one
level at a time using `path`, `path_id`, or both. Each entry includes
`path`, `path_id`, `is_directory`, and a `scope` object (`account` or
`shared_space`) so a mapping can be created from that row without extra
browse state. Valid values depend on the selected system.

<h3 id="list-shuttle-path-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose path entries to list.|
|side|query|string|true|The side of the migration to browse.|
|path|query|string|false|The human-readable parent path whose children are returned. This can<br>be used with or without `path_id`. Omit both, or pass `/` as `path`,<br>to list root entries.|
|path_id|query|string|false|The `path_id` value of the parent entry whose children are<br>returned. This can be used with or without `path`. It distinguishes<br>paths with identical names on systems that support stable identifiers.|
|account_email|query|string|false|The email of the account whose path entries are returned. This is a<br>system-native identifier and is not always an RFC 5322 address.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|side|source|
|side|target|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "6a3ba7c02ea17bc9461eeacf",
      "type": "shuttle_path_entry",
      "name": "Projects",
      "path": "/Shared Documents/Projects",
      "path_id": "01ABCDEF23456789",
      "parent_path": "/Shared Documents",
      "scope": {
        "type": "shared_space",
        "space": "HR Team Site"
      },
      "is_directory": true,
      "can_map": true
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-path-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle path entries.|[ShuttlePathEntries](#schemashuttlepathentries)|
|400|Bad Request|Returned when a required parameter is missing, a parameter is<br>malformed, or the selected system cannot browse the supplied<br>combination of `path` and `path_id`.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle mapping errors

<a id="opIdget_shuttle_mapping_errors_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_mapping_errors?job_id=6a3ba68e810d9156194530a1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_mapping_errors`

Returns a paginated list of mapping errors for a shuttle job. Only the latest
record for each error is returned. The revision field identifies the mapping
revision in which that error was generated.

<h3 id="list-shuttle-mapping-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|job_id|query|string|true|The unique identifier of the shuttle job whose mapping errors to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a3ba7c02ea17bc9461eeacf",
      "type": "shuttle_mapping_error",
      "job_id": "6a3ba68e810d9156194530a1",
      "revision": 3,
      "category": "path",
      "path": "/Shared Documents/Projects",
      "messages": [
        "The source path could not be resolved."
      ]
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-mapping-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle mapping errors.|[ShuttleMappingErrors](#schemashuttlemappingerrors)|
|400|Bad Request|Returned when `job_id` is missing or the user has passed in a malformed<br>`marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle job is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List shuttle reports

<a id="opIdget_shuttle_reports_v2026.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/shuttle_reports?run_id=6a3ba68e810d9156194530a1%3A42' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_reports`

Returns a paginated list of reports generated for the shuttle run
identified by `run_id`.

<h3 id="list-shuttle-reports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|run_id|query|string|true|The unique identifier of the shuttle run whose reports to list.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|

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
      "id": "6a3ba8d14f2c91e8370b4d12",
      "type": "shuttle_report",
      "run_id": "6a3ba68e810d9156194530a1:42",
      "status": "complete",
      "format": "xlsx",
      "sections": [
        "event_log",
        "transfer_overview"
      ],
      "users_scope": "migrated",
      "output": {
        "id": "12345678",
        "type": "file"
      },
      "created_at": "2026-03-15T06:35:00Z",
      "completed_at": "2026-03-15T06:36:12Z"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
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

<h3 id="list-shuttle-reports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a paginated list of shuttle reports.|[ShuttleReports](#schemashuttlereports)|
|400|Bad Request|Returned when `run_id` is missing or the user has passed in a<br>malformed `marker` or `limit` value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle run is not found or the user does not have<br>access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shuttle report

<a id="opIdpost_shuttle_reports_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0' \
  -d '{
    "run_id": "6a3ba68e810d9156194530a1:42",
    "format": "xlsx",
    "sections": [
      "event_log",
      "transfer_overview"
    ],
    "users_scope": "migrated"
  }'
```

`POST /shuttle_reports`

Requests asynchronous generation of a report for a shuttle run. The
report is returned immediately in `pending` or `processing` status.
Poll `GET /shuttle_reports/{shuttle_report_id}` while `status` is
`pending` or `processing`. Stop when `status` is `complete`, `failed`,
`canceled`, or `unknown`. Repeating this request with the same
parameters reuses the existing report instead of creating a duplicate.

> Body parameter

```json
{
  "run_id": "6a3ba68e810d9156194530a1:42",
  "format": "xlsx",
  "sections": [
    "event_log",
    "transfer_overview"
  ],
  "users_scope": "migrated"
}
```

<h3 id="create-shuttle-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShuttleReportCreateRequest](#schemashuttlereportcreaterequest)|true|none|
|» run_id|body|string|true|The unique identifier of the shuttle run to generate a report for.|
|» format|body|string|true|The output file format of the report.|
|» sections|body|[string]|true|The sections to include in the report. Must be a non-empty subset of<br>the run's `available_report_sections`. This is an open list whose set<br>of values is expected to grow; the currently documented values include<br>`files_and_folders`, `event_log`, `transfer_overview`, `source_users`,<br>`target_users`, `source_collaborators`, `target_collaborators`,<br>`source_collaborations`, and `target_collaborations`.|
|» users_scope|body|string|false|Which users to include in user-related report sections. Defaults to<br>`migrated` when omitted.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|
|» format|xlsx|
|» format|csv|
|» users_scope|migrated|
|» users_scope|all|

> Example responses

> 202 Response

```json
{
  "id": "6a3ba8d14f2c91e8370b4d12",
  "type": "shuttle_report",
  "run_id": "6a3ba68e810d9156194530a1:42",
  "status": "complete",
  "format": "xlsx",
  "sections": [
    "event_log",
    "transfer_overview"
  ],
  "users_scope": "migrated",
  "output": {
    "id": "12345678",
    "type": "file"
  },
  "created_at": "2026-03-15T06:35:00Z",
  "completed_at": "2026-03-15T06:36:12Z"
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

<h3 id="create-shuttle-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The report was accepted for generation. Returns the shuttle report;<br>generation continues asynchronously. Repeating this request with the<br>same parameters reuses the existing report instead of creating a<br>duplicate.|[ShuttleReport](#schemashuttlereport)|
|400|Bad Request|Returned when the request body is malformed, required fields are<br>missing, or `sections` is not a subset of the run's<br>`available_report_sections`.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the referenced shuttle run cannot be found or the user<br>does not have access to it.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when a report cannot be generated for the run in its current<br>state.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get shuttle report by ID

<a id="opIdget_shuttle_reports_id_v2026.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shuttle_reports/6a3ba8d14f2c91e8370b4d12 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2026.0'
```

`GET /shuttle_reports/{shuttle_report_id}`

Returns details for a single shuttle report identified by its ID,
including generation status and, once generation finishes, the Box
output reference.

<h3 id="get-shuttle-report-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shuttle_report_id|path|string|true|The unique identifier for the shuttle report.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2026.0|

> Example responses

> 200 Response

```json
{
  "id": "6a3ba8d14f2c91e8370b4d12",
  "type": "shuttle_report",
  "run_id": "6a3ba68e810d9156194530a1:42",
  "status": "complete",
  "format": "xlsx",
  "sections": [
    "event_log",
    "transfer_overview"
  ],
  "users_scope": "migrated",
  "output": {
    "id": "12345678",
    "type": "file"
  },
  "created_at": "2026-03-15T06:35:00Z",
  "completed_at": "2026-03-15T06:36:12Z"
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

<h3 id="get-shuttle-report-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shuttle report.|[ShuttleReport](#schemashuttlereport)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user is not an admin or co-admin with<br>permission to manage enterprise properties.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the shuttle report is not found or the user does not<br>have access to it.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|Returned when the user has sent too many requests in a given amount of<br>time.|[ClientError](#schemaclienterror)|
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

<h2 id="tocS_ShuttleAgentCredentials">ShuttleAgentCredentials</h2>
<!-- backwards compatibility -->
<a id="schemashuttleagentcredentials"></a>
<a id="schema_ShuttleAgentCredentials"></a>
<a id="tocSshuttleagentcredentials"></a>
<a id="tocsshuttleagentcredentials"></a>

```json
{
  "registration_token": "eyJhbGciOi...",
  "expires_at": "2026-03-16T12:00:00Z"
}
```

The installation credentials issued for a Windows shuttle system. The
registration token is pasted into the Windows agent installer to register
the agent with its system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registration_token|string|true|none|The installation token to paste into the Windows agent installer to<br>register the agent.|
|expires_at|string(date-time)|true|none|When the registration token expires and can no longer be used.|

<h2 id="tocS_ShuttleDiscoveredSubject">ShuttleDiscoveredSubject</h2>
<!-- backwards compatibility -->
<a id="schemashuttlediscoveredsubject"></a>
<a id="schema_ShuttleDiscoveredSubject"></a>
<a id="tocSshuttlediscoveredsubject"></a>
<a id="tocsshuttlediscoveredsubject"></a>

```json
{
  "id": "6a315c0754833bfc5df067bf",
  "type": "shuttle_discovered_subject",
  "job_id": "6a3ba68e810d9156194530a1",
  "revision": 3,
  "source": {
    "type": "user",
    "id": "sp-user-001",
    "email": "user@example.com",
    "name": "Jane Doe",
    "roles": [
      "owner"
    ]
  },
  "suggested_target": {
    "type": "user",
    "id": "12345678",
    "email": "user@example.com",
    "name": "Jane Doe"
  }
}
```

A subject discovered on the source system during a scan, with an optional
suggested Box target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the discovered subject.|
|type|string|true|none|The value will always be `shuttle_discovered_subject`.|
|job_id|string|true|none|The unique identifier of the shuttle job this subject belongs to.|
|revision|integer(int32)|true|none|The scan revision this discovered subject belongs to.|
|source|object|true|none|none|
|suggested_target|[ShuttleTargetSubject](#schemashuttletargetsubject) \| object \| null|false|none|A suggested Box target inferred during the scan. `null` when no<br>suggestion was made.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_discovered_subject|

<h2 id="tocS_ShuttleDiscoveredSubjects">ShuttleDiscoveredSubjects</h2>
<!-- backwards compatibility -->
<a id="schemashuttlediscoveredsubjects"></a>
<a id="schema_ShuttleDiscoveredSubjects"></a>
<a id="tocSshuttlediscoveredsubjects"></a>
<a id="tocsshuttlediscoveredsubjects"></a>

```json
{
  "entries": [
    {
      "id": "6a315c0754833bfc5df067bf",
      "type": "shuttle_discovered_subject",
      "job_id": "6a3ba68e810d9156194530a1",
      "revision": 3,
      "source": {
        "type": "user",
        "id": "sp-user-001",
        "email": "user@example.com",
        "name": "Jane Doe",
        "roles": [
          "owner"
        ]
      },
      "suggested_target": {
        "type": "user",
        "id": "12345678",
        "email": "user@example.com",
        "name": "Jane Doe"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of subjects discovered on the source system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleDiscoveredSubject](#schemashuttlediscoveredsubject)]|true|none|A list of discovered subjects.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleJob">ShuttleJob</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejob"></a>
<a id="schema_ShuttleJob"></a>
<a id="tocSshuttlejob"></a>
<a id="tocsshuttlejob"></a>

```json
{
  "id": "6a3ba68e810d9156194530a1",
  "type": "shuttle_job",
  "name": "Q4 SharePoint to Box",
  "comment": "Migrating the finance department archives.",
  "job_type": "transfer",
  "state": "created",
  "mapping_state": "awaiting_path_mapping",
  "source_system": {
    "type": "shuttle_system",
    "id": "6a3ba68e810d9156194530a1",
    "name": "SharePoint"
  },
  "account_mapping": {
    "is_enabled": true,
    "permission_conflict_strategy": "preserve_structure_restrict_sharing",
    "are_external_shares_mapped": false,
    "are_permissions_mapped": true
  },
  "tags": [
    "q4",
    "hr"
  ],
  "settings": {
    "bandwidth_limit_bytes_per_sec": 10485760,
    "are_deletions_mirrored": false,
    "are_file_versions_synced": true,
    "max_file_versions": 10,
    "is_overwrite_enabled": false,
    "are_completed_mappings_skipped_on_rerun": true,
    "is_content_scanning_enabled": false,
    "include_shared_source_folders": true,
    "include_shared_destination_folders": false
  }
}
```

A standard representation of a shuttle job. A shuttle job describes a
migration of content from a source system into Box, including its current
state, mapping-preparation state, and mapping configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle job.|
|type|string|true|none|The value will always be `shuttle_job`.|
|name|string|true|none|The human-readable name of the shuttle job.|
|comment|string \| null|false|none|An optional free-form comment describing the shuttle job.|
|job_type|string|true|none|The type of work the shuttle job performs.|
|state|string|true|none|The current state of the shuttle job. This is an open string whose set<br>of values is expected to grow; the currently documented values include<br>`created`, `started`, `stopped`, `completed`, `failed`, `invalid`, and<br>`unknown`. Clients should treat any value they do not recognize as<br>`unknown`.|
|mapping_state|string|true|none|The current mapping-preparation state of the job. This is an open string<br>whose set of values is expected to grow; the currently documented values<br>include `awaiting_path_mapping`, `importing_paths`,<br>`paths_import_rejected`, `paths_invalid`, `paths_ready`,<br>`scanning_source`, `source_scan_failed`, `source_scan_out_of_date`,<br>`awaiting_subject_mapping`, `importing_subjects`,<br>`subjects_import_rejected`, `mapping_complete`, `building_map`,<br>`map_build_failed`, `map_out_of_date`, and `ready`.<br>`paths_import_rejected` means the last path-mapping spreadsheet was<br>rejected or failed and the path mappings have not been changed since;<br>it clears on the next import or the next manual path-mapping change.<br>`subjects_import_rejected` means the last subject-mapping spreadsheet<br>was rejected or failed and the subject mappings have not been changed<br>since; it clears on the next import or the next manual subject-mapping<br>change.|
|source_system|object|true|none|The source system the shuttle job migrates content from.|
|account_mapping|object|false|none|The account mapping configuration that controls how source identities<br>and permissions are translated into Box.|
|tags|[string]|false|none|A list of free-form tags associated with the shuttle job.|
|settings|object|false|none|The tunable settings that control how the shuttle job runs.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_job|
|job_type|transfer|
|job_type|analysis|

<h2 id="tocS_ShuttleJobCreateRequest">ShuttleJobCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobcreaterequest"></a>
<a id="schema_ShuttleJobCreateRequest"></a>
<a id="tocSshuttlejobcreaterequest"></a>
<a id="tocsshuttlejobcreaterequest"></a>

```json
{
  "name": "Q4 SharePoint to Box",
  "job_type": "transfer",
  "source_system_id": "6a3ba68e810d9156194530a1",
  "comment": "Migrating the finance department archives.",
  "tags": [
    "q4",
    "hr"
  ],
  "account_mapping": {
    "is_enabled": true,
    "permission_conflict_strategy": "preserve_structure_restrict_sharing",
    "are_external_shares_mapped": false,
    "are_permissions_mapped": true
  },
  "settings": {
    "bandwidth_limit_bytes_per_sec": 10485760,
    "are_deletions_mirrored": false,
    "are_file_versions_synced": true,
    "max_file_versions": 10,
    "is_overwrite_enabled": false,
    "are_completed_mappings_skipped_on_rerun": true,
    "is_content_scanning_enabled": false,
    "include_shared_source_folders": true,
    "include_shared_destination_folders": false
  }
}
```

The request body used to create a new shuttle job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The human-readable name of the shuttle job.|
|job_type|string|true|none|The type of work the shuttle job performs.|
|source_system_id|string|true|none|The unique identifier of the source system to migrate from.|
|comment|string|false|none|An optional free-form comment describing the shuttle job.|
|tags|[string]|false|none|A list of free-form tags associated with the shuttle job.|
|account_mapping|object|false|none|The account mapping configuration that controls how source identities<br>and permissions are translated into Box. When this object is omitted,<br>the job is created with `is_enabled` set to `false`.|
|settings|object|false|none|The tunable settings that control how the shuttle job runs.|

#### Enumerated Values

|Property|Value|
|---|---|
|job_type|transfer|
|job_type|analysis|

<h2 id="tocS_ShuttleJobPermissionConflictStrategy">ShuttleJobPermissionConflictStrategy</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobpermissionconflictstrategy"></a>
<a id="schema_ShuttleJobPermissionConflictStrategy"></a>
<a id="tocSshuttlejobpermissionconflictstrategy"></a>
<a id="tocsshuttlejobpermissionconflictstrategy"></a>

```json
"preserve_structure_restrict_sharing"
```

The strategy used to resolve permission conflicts.

<h2 id="tocS_ShuttleJobs">ShuttleJobs</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobs"></a>
<a id="schema_ShuttleJobs"></a>
<a id="tocSshuttlejobs"></a>
<a id="tocsshuttlejobs"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba68e810d9156194530a1",
      "type": "shuttle_job",
      "name": "Q4 SharePoint to Box",
      "comment": "Migrating the finance department archives.",
      "job_type": "transfer",
      "state": "created",
      "mapping_state": "awaiting_path_mapping",
      "source_system": {
        "type": "shuttle_system",
        "id": "6a3ba68e810d9156194530a1",
        "name": "SharePoint"
      },
      "account_mapping": {
        "is_enabled": true,
        "permission_conflict_strategy": "preserve_structure_restrict_sharing",
        "are_external_shares_mapped": false,
        "are_permissions_mapped": true
      },
      "tags": [
        "q4",
        "hr"
      ],
      "settings": {
        "bandwidth_limit_bytes_per_sec": 10485760,
        "are_deletions_mirrored": false,
        "are_file_versions_synced": true,
        "max_file_versions": 10,
        "is_overwrite_enabled": false,
        "are_completed_mappings_skipped_on_rerun": true,
        "is_content_scanning_enabled": false,
        "include_shared_source_folders": true,
        "include_shared_destination_folders": false
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleJob](#schemashuttlejob)]|true|none|A list of shuttle jobs.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleJobSchedule">ShuttleJobSchedule</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobschedule"></a>
<a id="schema_ShuttleJobSchedule"></a>
<a id="tocSshuttlejobschedule"></a>
<a id="tocsshuttlejobschedule"></a>

```json
{
  "id": "7c1ba68e810d9156194530b2",
  "type": "shuttle_job_schedule",
  "job_id": "6a3ba68e810d9156194530a1",
  "state": "enabled",
  "run_mode": "transfer",
  "description": "Nightly finance share replay.",
  "last_attempt_at": "2026-03-16T09:00:12Z",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
}
```

A schedule that starts runs of a shuttle job. A schedule is either
time-based or triggered by another job's run. Schedules cannot start a
run in `scan` mode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle job schedule.|
|type|string|true|none|The value will always be `shuttle_job_schedule`.|
|job_id|string|true|none|The unique identifier of the shuttle job this schedule belongs to.|
|state|string|true|none|Whether the schedule is active.|
|run_mode|string|true|none|The kind of run the schedule starts. `scan` is not a valid schedule<br>run mode.|
|description|string \| null|false|none|An optional human-readable description of the schedule.|
|last_attempt_at|string(date-time) \| null|false|none|When the schedule last attempted to start a run. `null` when the<br>schedule has never started a run.|
|trigger|[ShuttleJobScheduleTrigger](#schemashuttlejobscheduletrigger)|true|none|When a shuttle job schedule should start a run. Exactly one trigger<br>variant is present, discriminated by `type`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_job_schedule|
|state|enabled|
|state|paused|
|run_mode|transfer|
|run_mode|simulation|
|run_mode|analysis|

<h2 id="tocS_ShuttleJobScheduleCreateRequest">ShuttleJobScheduleCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobschedulecreaterequest"></a>
<a id="schema_ShuttleJobScheduleCreateRequest"></a>
<a id="tocSshuttlejobschedulecreaterequest"></a>
<a id="tocsshuttlejobschedulecreaterequest"></a>

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "run_mode": "transfer",
  "state": "enabled",
  "description": "Nightly finance share replay.",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
}
```

The request body used to create a shuttle job schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|The unique identifier of the shuttle job this schedule belongs to.|
|run_mode|string|true|none|The kind of run the schedule starts. `scan` is not a valid schedule<br>run mode.|
|state|string|false|none|Whether the schedule is active. When omitted, defaults to `enabled`.|
|description|string \| null|false|none|An optional human-readable description of the schedule.|
|trigger|[ShuttleJobScheduleTrigger](#schemashuttlejobscheduletrigger)|true|none|When a shuttle job schedule should start a run. Exactly one trigger<br>variant is present, discriminated by `type`.|

#### Enumerated Values

|Property|Value|
|---|---|
|run_mode|transfer|
|run_mode|simulation|
|run_mode|analysis|
|state|enabled|
|state|paused|

<h2 id="tocS_ShuttleJobSchedules">ShuttleJobSchedules</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobschedules"></a>
<a id="schema_ShuttleJobSchedules"></a>
<a id="tocSshuttlejobschedules"></a>
<a id="tocsshuttlejobschedules"></a>

```json
{
  "entries": [
    {
      "id": "7c1ba68e810d9156194530b2",
      "type": "shuttle_job_schedule",
      "job_id": "6a3ba68e810d9156194530a1",
      "state": "enabled",
      "run_mode": "transfer",
      "description": "Nightly finance share replay.",
      "last_attempt_at": "2026-03-16T09:00:12Z",
      "trigger": {
        "type": "by_time",
        "start_at": "2026-03-16T09:00:00",
        "time_zone": "America/Los_Angeles",
        "repeat": "daily"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle job schedules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleJobSchedule](#schemashuttlejobschedule)]|true|none|A list of shuttle job schedules.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleJobScheduleTrigger">ShuttleJobScheduleTrigger</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobscheduletrigger"></a>
<a id="schema_ShuttleJobScheduleTrigger"></a>
<a id="tocSshuttlejobscheduletrigger"></a>
<a id="tocsshuttlejobscheduletrigger"></a>

```json
{
  "type": "by_time",
  "start_at": "2026-03-16T09:00:00",
  "time_zone": "America/Los_Angeles",
  "repeat": "daily"
}
```

When a shuttle job schedule should start a run. Exactly one trigger
variant is present, discriminated by `type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShuttleJobScheduleTriggerByTime](#schemashuttlejobscheduletriggerbytime)|false|none|A time-based trigger that starts the schedule at a wall-clock time and<br>optionally repeats.|
|*oneOf*|[ShuttleJobScheduleTriggerByJob](#schemashuttlejobscheduletriggerbyjob)|false|none|A job-based trigger that starts this schedule after another shuttle<br>job's run meets a condition.|

<h2 id="tocS_ShuttleJobScheduleTriggerByJob">ShuttleJobScheduleTriggerByJob</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobscheduletriggerbyjob"></a>
<a id="schema_ShuttleJobScheduleTriggerByJob"></a>
<a id="tocSshuttlejobscheduletriggerbyjob"></a>
<a id="tocsshuttlejobscheduletriggerbyjob"></a>

```json
{
  "type": "by_job",
  "triggered_by_job_id": "8d2ca68e810d9156194530c3",
  "last_run_condition": "on_success"
}
```

A job-based trigger that starts this schedule after another shuttle
job's run meets a condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `by_job`.|
|triggered_by_job_id|string|true|none|The unique identifier of the shuttle job whose run starts this<br>schedule.|
|last_run_condition|string|true|none|When this schedule should start a run relative to the last run of<br>the triggering job.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|by_job|
|last_run_condition|always|
|last_run_condition|on_success|
|last_run_condition|on_finish|

<h2 id="tocS_ShuttleJobScheduleTriggerByTime">ShuttleJobScheduleTriggerByTime</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobscheduletriggerbytime"></a>
<a id="schema_ShuttleJobScheduleTriggerByTime"></a>
<a id="tocSshuttlejobscheduletriggerbytime"></a>
<a id="tocsshuttlejobscheduletriggerbytime"></a>

```json
{
  "type": "by_time",
  "start_at": "2026-03-16T09:00:00",
  "time_zone": "America/Los_Angeles",
  "repeat": "daily"
}
```

A time-based trigger that starts the schedule at a wall-clock time and
optionally repeats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `by_time`.|
|start_at|string|true|none|The local wall-clock time when the schedule should first start a<br>run, without an offset or `Z` suffix. Combined with `time_zone` to<br>determine the instant, including DST.|
|time_zone|string|true|none|The IANA time zone that gives `start_at` its calendar meaning (for<br>example `America/Los_Angeles`). Recurrence and DST transitions are<br>evaluated in this zone.|
|repeat|string|true|none|How often the schedule repeats after `start_at`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|by_time|
|repeat|none|
|repeat|daily|
|repeat|weekly|
|repeat|weekdays|
|repeat|weekends|

<h2 id="tocS_ShuttleJobScheduleUpdateRequest">ShuttleJobScheduleUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobscheduleupdaterequest"></a>
<a id="schema_ShuttleJobScheduleUpdateRequest"></a>
<a id="tocSshuttlejobscheduleupdaterequest"></a>
<a id="tocsshuttlejobscheduleupdaterequest"></a>

```json
{
  "state": "paused",
  "run_mode": "simulation",
  "description": "Nightly finance share replay.",
  "trigger": {
    "type": "by_time",
    "start_at": "2026-03-16T09:00:00",
    "time_zone": "America/Los_Angeles",
    "repeat": "daily"
  }
}
```

The request body used to update an existing shuttle job schedule. Only
the fields supplied in the request body are changed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|Whether the schedule is active.|
|run_mode|string|false|none|The kind of run the schedule starts. `scan` is not a valid schedule<br>run mode.|
|description|string \| null|false|none|An optional human-readable description of the schedule.|
|trigger|[ShuttleJobScheduleTrigger](#schemashuttlejobscheduletrigger)|false|none|When a shuttle job schedule should start a run. Exactly one trigger<br>variant is present, discriminated by `type`.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|enabled|
|state|paused|
|run_mode|transfer|
|run_mode|simulation|
|run_mode|analysis|

<h2 id="tocS_ShuttleJobStartRequest">ShuttleJobStartRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobstartrequest"></a>
<a id="schema_ShuttleJobStartRequest"></a>
<a id="tocSshuttlejobstartrequest"></a>
<a id="tocsshuttlejobstartrequest"></a>

```json
{
  "mode": "simulation"
}
```

The request body used to start a shuttle job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|The run mode. Defaults to simulation when omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|transfer|
|mode|simulation|
|mode|scan|
|mode|analysis|

<h2 id="tocS_ShuttleJobUpdateRequest">ShuttleJobUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlejobupdaterequest"></a>
<a id="schema_ShuttleJobUpdateRequest"></a>
<a id="tocSshuttlejobupdaterequest"></a>
<a id="tocsshuttlejobupdaterequest"></a>

```json
{
  "name": "Q4 SharePoint to Box",
  "comment": "Migrating the finance department archives.",
  "tags": [
    "q4",
    "hr"
  ],
  "account_mapping": {
    "is_enabled": true,
    "permission_conflict_strategy": "preserve_structure_restrict_sharing",
    "are_external_shares_mapped": false,
    "are_permissions_mapped": true
  },
  "settings": {
    "bandwidth_limit_bytes_per_sec": 10485760,
    "are_deletions_mirrored": false,
    "are_file_versions_synced": true,
    "max_file_versions": 10,
    "is_overwrite_enabled": false,
    "are_completed_mappings_skipped_on_rerun": true,
    "is_content_scanning_enabled": false,
    "include_shared_source_folders": true,
    "include_shared_destination_folders": false
  }
}
```

The request body used to update an existing shuttle job. Only the fields
supplied in the request body are changed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The human-readable name of the shuttle job.|
|comment|string \| null|false|none|An optional free-form comment describing the shuttle job.|
|tags|[string]|false|none|A list of free-form tags associated with the shuttle job.|
|account_mapping|object|false|none|The account mapping configuration that controls how source identities<br>and permissions are translated into Box.|
|settings|object|false|none|The tunable settings that control how the shuttle job runs.|

<h2 id="tocS_ShuttleMappingError">ShuttleMappingError</h2>
<!-- backwards compatibility -->
<a id="schemashuttlemappingerror"></a>
<a id="schema_ShuttleMappingError"></a>
<a id="tocSshuttlemappingerror"></a>
<a id="tocsshuttlemappingerror"></a>

```json
{
  "id": "6a3ba7c02ea17bc9461eeacf",
  "type": "shuttle_mapping_error",
  "job_id": "6a3ba68e810d9156194530a1",
  "revision": 3,
  "category": "path",
  "path": "/Shared Documents/Projects",
  "messages": [
    "The source path could not be resolved."
  ]
}
```

A problem encountered while preparing path, subject, or permission
mappings for a shuttle job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the mapping error.|
|type|string|true|none|The value will always be `shuttle_mapping_error`.|
|job_id|string|true|none|The unique identifier of the shuttle job this error belongs to.|
|revision|integer(int32)|true|none|The mapping revision this error belongs to.|
|category|string|true|none|The category of mapping work that produced the error. This is an open<br>string whose set of values can grow.|
|path|string|true|none|The path or subject that the mapping error refers to.|
|messages|[string]|true|none|Human-readable messages describing the mapping error.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_mapping_error|

<h2 id="tocS_ShuttleMappingErrors">ShuttleMappingErrors</h2>
<!-- backwards compatibility -->
<a id="schemashuttlemappingerrors"></a>
<a id="schema_ShuttleMappingErrors"></a>
<a id="tocSshuttlemappingerrors"></a>
<a id="tocsshuttlemappingerrors"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba7c02ea17bc9461eeacf",
      "type": "shuttle_mapping_error",
      "job_id": "6a3ba68e810d9156194530a1",
      "revision": 3,
      "category": "path",
      "path": "/Shared Documents/Projects",
      "messages": [
        "The source path could not be resolved."
      ]
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle mapping errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleMappingError](#schemashuttlemappingerror)]|true|none|A list of shuttle mapping errors.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttlePathEntries">ShuttlePathEntries</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathentries"></a>
<a id="schema_ShuttlePathEntries"></a>
<a id="tocSshuttlepathentries"></a>
<a id="tocsshuttlepathentries"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba7c02ea17bc9461eeacf",
      "type": "shuttle_path_entry",
      "name": "Projects",
      "path": "/Shared Documents/Projects",
      "path_id": "01ABCDEF23456789",
      "parent_path": "/Shared Documents",
      "scope": {
        "type": "shared_space",
        "space": "HR Team Site"
      },
      "is_directory": true,
      "can_map": true
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle path entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttlePathEntry](#schemashuttlepathentry)]|true|none|A list of shuttle path entries.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttlePathEntry">ShuttlePathEntry</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathentry"></a>
<a id="schema_ShuttlePathEntry"></a>
<a id="tocSshuttlepathentry"></a>
<a id="tocsshuttlepathentry"></a>

```json
{
  "id": "6a3ba7c02ea17bc9461eeacf",
  "type": "shuttle_path_entry",
  "name": "Projects",
  "path": "/Shared Documents/Projects",
  "path_id": "01ABCDEF23456789",
  "parent_path": "/Shared Documents",
  "scope": {
    "type": "shared_space",
    "space": "HR Team Site"
  },
  "is_directory": true,
  "can_map": true
}
```

A browsable entry on the source or target system used to build shuttle
path mappings. Shared fields describe the node. `scope` is a
discriminated object that identifies the mapping namespace so a path
mapping can be created from this row without extra browse state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of this browse row. This is not the account<br>identifier; when `scope.type` is `account`, the account identifier is<br>`scope.id`.|
|type|string|true|none|The value will always be `shuttle_path_entry`.|
|name|string|true|none|The display name of the path entry.|
|path|string|true|none|The human-readable path of the entry.|
|path_id|string \| null|false|none|The system-native identifier of the path. `null` when the selected<br>system does not provide one. Maps to `path_id` on a path mapping<br>location.|
|parent_path|string \| null|false|none|The human-readable path of the parent entry, or `null` for a root<br>entry.|
|scope|object|true|none|none|
|is_directory|boolean|true|none|Whether the entry is a directory (`true`) or a single file<br>(`false`). Maps to `is_directory` on a path mapping location.|
|can_map|boolean|true|none|Whether the entry can be selected in a path mapping.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_path_entry|

<h2 id="tocS_ShuttlePathEntryAccountScope">ShuttlePathEntryAccountScope</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathentryaccountscope"></a>
<a id="schema_ShuttlePathEntryAccountScope"></a>
<a id="tocSshuttlepathentryaccountscope"></a>
<a id="tocsshuttlepathentryaccountscope"></a>

```json
{
  "type": "account",
  "id": "123456",
  "email": "user@example.com",
  "name": "Jane Doe"
}
```

The mapping scope of a path entry that lives under a user or service
account. `type` is the discriminator. The remaining fields are the
account itself, flattened onto this object — they are not a nested
`account` wrapper. `id` here is the account identifier, not the path
entry `id`. Copy these fields onto `account` when creating an
account-scoped path mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `account`.|
|id|string \| null|false|none|The platform-native identifier of the account that owns this entry.<br>`null` when the system does not provide one. This is not the path<br>entry `id`. Maps to `account.id` on an account-scoped path mapping<br>location.|
|email|string \| null|false|none|The email of the account that owns this entry. This is a<br>system-native identifier and is not always an RFC 5322 address.<br>`null` when unknown. Maps to `account.email` on an account-scoped<br>path mapping location.|
|name|string \| null|false|none|The display name of the account that owns this entry. `null` when<br>unknown. Maps to `account.name` on an account-scoped path mapping<br>location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|

<h2 id="tocS_ShuttlePathEntryScope">ShuttlePathEntryScope</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathentryscope"></a>
<a id="schema_ShuttlePathEntryScope"></a>
<a id="tocSshuttlepathentryscope"></a>
<a id="tocsshuttlepathentryscope"></a>

```json
{
  "type": "account",
  "id": "123456",
  "email": "user@example.com",
  "name": "Jane Doe"
}
```

Which mapping namespace this path entry belongs to. Discriminated by
`type`: `account` flattens the owning account onto the object;
`shared_space` carries the shared container name. File versus folder
is not part of scope. Use `is_directory` on the path entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShuttlePathEntryAccountScope](#schemashuttlepathentryaccountscope)|false|none|The mapping scope of a path entry that lives under a user or service<br>account. `type` is the discriminator. The remaining fields are the<br>account itself, flattened onto this object — they are not a nested<br>`account` wrapper. `id` here is the account identifier, not the path<br>entry `id`. Copy these fields onto `account` when creating an<br>account-scoped path mapping.|
|*oneOf*|[ShuttlePathEntrySharedSpaceScope](#schemashuttlepathentrysharedspacescope)|false|none|The mapping scope of a path entry that lives under a shared container<br>such as a site, team drive, bucket, or file share. `type` is the<br>discriminator. Copy `space` onto a shared-space path mapping location<br>when creating a mapping from this row.|

<h2 id="tocS_ShuttlePathEntrySharedSpaceScope">ShuttlePathEntrySharedSpaceScope</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathentrysharedspacescope"></a>
<a id="schema_ShuttlePathEntrySharedSpaceScope"></a>
<a id="tocSshuttlepathentrysharedspacescope"></a>
<a id="tocsshuttlepathentrysharedspacescope"></a>

```json
{
  "type": "shared_space",
  "space": "HR Team Site"
}
```

The mapping scope of a path entry that lives under a shared container
such as a site, team drive, bucket, or file share. `type` is the
discriminator. Copy `space` onto a shared-space path mapping location
when creating a mapping from this row.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `shared_space`.|
|space|string \| null|false|none|The display name of the shared container this entry belongs to.<br>`null` when the system has a single implicit container. Maps to<br>`space` on a shared-space path mapping location.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shared_space|

<h2 id="tocS_ShuttlePathMapping">ShuttlePathMapping</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmapping"></a>
<a id="schema_ShuttlePathMapping"></a>
<a id="tocSshuttlepathmapping"></a>
<a id="tocsshuttlepathmapping"></a>

```json
{
  "id": "6a3ba7a24ea17bc9461eeacd",
  "type": "shuttle_path_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "is_path_skipped": false,
  "source": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "path_id": "1234567890",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com",
      "name": "Box Admin"
    },
    "is_directory": true
  }
}
```

A standard representation of a shuttle path mapping. A path mapping
connects a source location on the migrated system to a destination in Box,
or marks the source path as skipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle path mapping.|
|type|string|true|none|The value will always be `shuttle_path_mapping`.|
|job_id|string|true|none|The unique identifier of the shuttle job this mapping belongs to.|
|is_path_skipped|boolean|true|none|Whether this source path is skipped during the migration.|
|source|object|true|none|none|
|target|[ShuttlePathMappingLocation](#schemashuttlepathmappinglocation) \| object \| null|false|none|The destination location. `null` when the source path is skipped or<br>the job has no destination, such as an analysis job.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_path_mapping|

<h2 id="tocS_ShuttlePathMappingAccount">ShuttlePathMappingAccount</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingaccount"></a>
<a id="schema_ShuttlePathMappingAccount"></a>
<a id="tocSshuttlepathmappingaccount"></a>
<a id="tocsshuttlepathmappingaccount"></a>

```json
{
  "id": "123456",
  "email": "admin@company.box.com",
  "name": "Box Admin"
}
```

The account that owns an account-scoped path mapping location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|The platform-native identifier of the account. `null` when the system<br>does not provide one.|
|email|string \| null|false|none|The email address of the account. `null` when unknown.|
|name|string \| null|false|none|The display name of the account. `null` when unknown.|

<h2 id="tocS_ShuttlePathMappingAccountInput">ShuttlePathMappingAccountInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingaccountinput"></a>
<a id="schema_ShuttlePathMappingAccountInput"></a>
<a id="tocSshuttlepathmappingaccountinput"></a>
<a id="tocsshuttlepathmappingaccountinput"></a>

```json
{
  "id": "123456",
  "email": "admin@company.box.com"
}
```

The account that owns an account-scoped path mapping location. Provide at
least one of `id` or `email`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The platform-native identifier of the account.|
|email|string|false|none|The email address of the account.|

<h2 id="tocS_ShuttlePathMappingAccountLocation">ShuttlePathMappingAccountLocation</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingaccountlocation"></a>
<a id="schema_ShuttlePathMappingAccountLocation"></a>
<a id="tocSshuttlepathmappingaccountlocation"></a>
<a id="tocsshuttlepathmappingaccountlocation"></a>

```json
{
  "type": "account",
  "path": "/HR Migration",
  "path_id": "1234567890",
  "account": {
    "id": "123456",
    "email": "admin@company.box.com",
    "name": "Box Admin"
  },
  "is_directory": true
}
```

A path mapping location scoped to a user or service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `account`.|
|path|string|true|none|The human-readable path relative to the account root.|
|path_id|string \| null|false|none|The stable identifier of the location. `null` when the system does not<br>provide one.|
|account|object|false|none|none|
|is_directory|boolean \| null|false|none|Whether the location is a directory. `null` when unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|

<h2 id="tocS_ShuttlePathMappingAccountLocationInput">ShuttlePathMappingAccountLocationInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingaccountlocationinput"></a>
<a id="schema_ShuttlePathMappingAccountLocationInput"></a>
<a id="tocSshuttlepathmappingaccountlocationinput"></a>
<a id="tocsshuttlepathmappingaccountlocationinput"></a>

```json
{
  "type": "account",
  "path": "/Shared Documents",
  "path_id": "sp-folder-001",
  "account": {
    "id": "123456",
    "email": "admin@company.box.com"
  },
  "is_directory": true
}
```

An account-scoped source location supplied when creating or updating a path
mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `account`.|
|path|string|true|none|The human-readable path relative to the account root.|
|path_id|string|false|none|An optional stable identifier of the location, when obtained from<br>browsing.|
|account|object|true|none|none|
|is_directory|boolean|false|none|Whether the location is a directory. When set, the destination must be<br>the same kind of object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|

<h2 id="tocS_ShuttlePathMappingAccountLocationTargetInput">ShuttlePathMappingAccountLocationTargetInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingaccountlocationtargetinput"></a>
<a id="schema_ShuttlePathMappingAccountLocationTargetInput"></a>
<a id="tocSshuttlepathmappingaccountlocationtargetinput"></a>
<a id="tocsshuttlepathmappingaccountlocationtargetinput"></a>

```json
{
  "type": "account",
  "path": "/HR Migration",
  "path_id": "1234567890",
  "account": {
    "id": "123456",
    "email": "admin@company.box.com"
  }
}
```

An account-scoped destination location supplied when creating or updating a
path mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `account`.|
|path|string|true|none|The human-readable path relative to the account root.|
|path_id|string|false|none|An optional stable identifier of the location, when obtained from<br>browsing.|
|account|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account|

<h2 id="tocS_ShuttlePathMappingCreateRequest">ShuttlePathMappingCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingcreaterequest"></a>
<a id="schema_ShuttlePathMappingCreateRequest"></a>
<a id="tocSshuttlepathmappingcreaterequest"></a>
<a id="tocsshuttlepathmappingcreaterequest"></a>

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "is_path_skipped": false,
  "source": {
    "type": "account",
    "path": "/Shared Documents",
    "path_id": "sp-folder-001",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com"
    },
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "account": {
      "email": "admin@company.box.com"
    }
  }
}
```

The request body used to create a new shuttle path mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|The unique identifier of the shuttle job this mapping belongs to.|
|is_path_skipped|boolean|false|none|Whether this source path should be skipped during the migration.<br>Defaults to `false`.|
|source|object|true|none|none|
|target|[ShuttlePathMappingTargetLocationInput](#schemashuttlepathmappingtargetlocationinput) \| object \| null|false|none|The destination location to migrate to. Omit or set to `null` when the<br>source path is skipped.|

<h2 id="tocS_ShuttlePathMappingImportCreateRequest">ShuttlePathMappingImportCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingimportcreaterequest"></a>
<a id="schema_ShuttlePathMappingImportCreateRequest"></a>
<a id="tocSshuttlepathmappingimportcreaterequest"></a>
<a id="tocsshuttlepathmappingimportcreaterequest"></a>

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "file_id": "12345678901"
}
```

The request body used to import a shuttle job's path mappings from a
spreadsheet already stored in Box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|The unique identifier of the shuttle job whose path mappings are<br>replaced.|
|file_id|string|true|none|The unique identifier of the Box file holding the mapping workbook. The<br>file is read as the calling user, so it must live somewhere that user can<br>download from.|

<h2 id="tocS_ShuttlePathMappingLocation">ShuttlePathMappingLocation</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappinglocation"></a>
<a id="schema_ShuttlePathMappingLocation"></a>
<a id="tocSshuttlepathmappinglocation"></a>
<a id="tocsshuttlepathmappinglocation"></a>

```json
{
  "type": "account",
  "path": "/HR Migration",
  "path_id": "1234567890",
  "account": {
    "id": "123456",
    "email": "admin@company.box.com",
    "name": "Box Admin"
  },
  "is_directory": true
}
```

One side of a path mapping. The object shape is determined by `type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShuttlePathMappingAccountLocation](#schemashuttlepathmappingaccountlocation)|false|none|A path mapping location scoped to a user or service account.|
|*oneOf*|[ShuttlePathMappingSharedSpaceLocation](#schemashuttlepathmappingsharedspacelocation)|false|none|A path mapping location scoped to a shared container such as a site, team<br>drive, bucket, or file share.|

<h2 id="tocS_ShuttlePathMappingLocationInput">ShuttlePathMappingLocationInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappinglocationinput"></a>
<a id="schema_ShuttlePathMappingLocationInput"></a>
<a id="tocSshuttlepathmappinglocationinput"></a>
<a id="tocsshuttlepathmappinglocationinput"></a>

```json
{
  "type": "account",
  "path": "/Shared Documents",
  "path_id": "sp-folder-001",
  "account": {
    "id": "123456",
    "email": "admin@company.box.com"
  },
  "is_directory": true
}
```

A source location supplied when creating or updating a path mapping. The
object shape is determined by `type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShuttlePathMappingAccountLocationInput](#schemashuttlepathmappingaccountlocationinput)|false|none|An account-scoped source location supplied when creating or updating a path<br>mapping.|
|*oneOf*|[ShuttlePathMappingSharedSpaceLocationInput](#schemashuttlepathmappingsharedspacelocationinput)|false|none|A shared-container source location supplied when creating or updating a<br>path mapping.|

<h2 id="tocS_ShuttlePathMappings">ShuttlePathMappings</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappings"></a>
<a id="schema_ShuttlePathMappings"></a>
<a id="tocSshuttlepathmappings"></a>
<a id="tocsshuttlepathmappings"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba7a24ea17bc9461eeacd",
      "type": "shuttle_path_mapping",
      "job_id": "6a3ba68e810d9156194530a1",
      "is_path_skipped": false,
      "source": {
        "type": "account",
        "path": "/HR Migration",
        "path_id": "1234567890",
        "account": {
          "id": "123456",
          "email": "admin@company.box.com",
          "name": "Box Admin"
        },
        "is_directory": true
      },
      "target": {
        "type": "account",
        "path": "/HR Migration",
        "path_id": "1234567890",
        "account": {
          "id": "123456",
          "email": "admin@company.box.com",
          "name": "Box Admin"
        },
        "is_directory": true
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle path mappings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttlePathMapping](#schemashuttlepathmapping)]|true|none|A list of shuttle path mappings.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttlePathMappingSharedSpaceLocation">ShuttlePathMappingSharedSpaceLocation</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingsharedspacelocation"></a>
<a id="schema_ShuttlePathMappingSharedSpaceLocation"></a>
<a id="tocSshuttlepathmappingsharedspacelocation"></a>
<a id="tocsshuttlepathmappingsharedspacelocation"></a>

```json
{
  "type": "shared_space",
  "space": "HR Team Site",
  "path": "/Shared Documents",
  "path_id": "sp-folder-001",
  "is_directory": true
}
```

A path mapping location scoped to a shared container such as a site, team
drive, bucket, or file share.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `shared_space`.|
|space|string \| null|false|none|The display name of the shared container. `null` when the system has a<br>single implicit container.|
|path|string|true|none|The human-readable path relative to the shared container.|
|path_id|string \| null|false|none|The stable identifier of the location. `null` when the system does not<br>provide one.|
|is_directory|boolean \| null|false|none|Whether the location is a directory. `null` when unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shared_space|

<h2 id="tocS_ShuttlePathMappingSharedSpaceLocationInput">ShuttlePathMappingSharedSpaceLocationInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingsharedspacelocationinput"></a>
<a id="schema_ShuttlePathMappingSharedSpaceLocationInput"></a>
<a id="tocSshuttlepathmappingsharedspacelocationinput"></a>
<a id="tocsshuttlepathmappingsharedspacelocationinput"></a>

```json
{
  "type": "shared_space",
  "space": "HR Team Site",
  "path": "/Shared Documents",
  "path_id": "sp-folder-001",
  "is_directory": true
}
```

A shared-container source location supplied when creating or updating a
path mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `shared_space`.|
|space|string|false|none|The display name of the shared container. Required for systems with<br>multiple containers.|
|path|string|true|none|The human-readable path relative to the shared container.|
|path_id|string|false|none|An optional stable identifier of the location, when obtained from<br>browsing.|
|is_directory|boolean|false|none|Whether the location is a directory. When set, the destination must be<br>the same kind of object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shared_space|

<h2 id="tocS_ShuttlePathMappingSharedSpaceLocationTargetInput">ShuttlePathMappingSharedSpaceLocationTargetInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingsharedspacelocationtargetinput"></a>
<a id="schema_ShuttlePathMappingSharedSpaceLocationTargetInput"></a>
<a id="tocSshuttlepathmappingsharedspacelocationtargetinput"></a>
<a id="tocsshuttlepathmappingsharedspacelocationtargetinput"></a>

```json
{
  "type": "shared_space",
  "space": "HR Team Site",
  "path": "/HR Migration",
  "path_id": "1234567890"
}
```

A shared-container destination location supplied when creating or updating
a path mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `shared_space`.|
|space|string|false|none|The display name of the shared container. Required for systems with<br>multiple containers.|
|path|string|true|none|The human-readable path relative to the shared container.|
|path_id|string|false|none|An optional stable identifier of the location, when obtained from<br>browsing.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shared_space|

<h2 id="tocS_ShuttlePathMappingTargetLocationInput">ShuttlePathMappingTargetLocationInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingtargetlocationinput"></a>
<a id="schema_ShuttlePathMappingTargetLocationInput"></a>
<a id="tocSshuttlepathmappingtargetlocationinput"></a>
<a id="tocsshuttlepathmappingtargetlocationinput"></a>

```json
{
  "type": "account",
  "path": "/HR Migration",
  "path_id": "1234567890",
  "account": {
    "id": "123456",
    "email": "admin@company.box.com"
  }
}
```

A destination location supplied when creating or updating a path mapping.
The object shape is determined by `type`. Destination input does not
include `is_directory`; that flag is taken from the source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShuttlePathMappingAccountLocationTargetInput](#schemashuttlepathmappingaccountlocationtargetinput)|false|none|An account-scoped destination location supplied when creating or updating a<br>path mapping.|
|*oneOf*|[ShuttlePathMappingSharedSpaceLocationTargetInput](#schemashuttlepathmappingsharedspacelocationtargetinput)|false|none|A shared-container destination location supplied when creating or updating<br>a path mapping.|

<h2 id="tocS_ShuttlePathMappingUpdateRequest">ShuttlePathMappingUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlepathmappingupdaterequest"></a>
<a id="schema_ShuttlePathMappingUpdateRequest"></a>
<a id="tocSshuttlepathmappingupdaterequest"></a>
<a id="tocsshuttlepathmappingupdaterequest"></a>

```json
{
  "is_path_skipped": true,
  "source": {
    "type": "account",
    "path": "/Shared Documents",
    "path_id": "sp-folder-001",
    "account": {
      "id": "123456",
      "email": "admin@company.box.com"
    },
    "is_directory": true
  },
  "target": {
    "type": "account",
    "path": "/HR Migration",
    "account": {
      "email": "admin@company.box.com"
    }
  }
}
```

The request body used to update an existing shuttle path mapping. Only the
fields supplied in the request body are changed. `job_id`, `id`, and `type`
are immutable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_path_skipped|boolean|false|none|Whether this source path should be skipped during the migration.|
|source|object|false|none|none|
|target|[ShuttlePathMappingTargetLocationInput](#schemashuttlepathmappingtargetlocationinput) \| object \| null|false|none|The destination location to migrate to. Set to `null` to clear the<br>destination, for example when skipping the source path.|

<h2 id="tocS_ShuttleReport">ShuttleReport</h2>
<!-- backwards compatibility -->
<a id="schemashuttlereport"></a>
<a id="schema_ShuttleReport"></a>
<a id="tocSshuttlereport"></a>
<a id="tocsshuttlereport"></a>

```json
{
  "id": "6a3ba8d14f2c91e8370b4d12",
  "type": "shuttle_report",
  "run_id": "6a3ba68e810d9156194530a1:42",
  "status": "complete",
  "format": "xlsx",
  "sections": [
    "event_log",
    "transfer_overview"
  ],
  "users_scope": "migrated",
  "output": {
    "id": "12345678",
    "type": "file"
  },
  "created_at": "2026-03-15T06:35:00Z",
  "completed_at": "2026-03-15T06:36:12Z"
}
```

A report generated asynchronously for a shuttle job run. Keep polling
while `status` is `pending` or `processing`. Stop when `status` is
`complete`, `failed`, `canceled`, or `unknown`. The generated Box file
or folder is `null` until generation finishes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle report.|
|type|string|true|none|The value will always be `shuttle_report`.|
|run_id|string|true|none|The unique identifier of the shuttle run this report was generated<br>for.|
|status|string|true|none|The generation status of the report. This is an open string whose set<br>of values is expected to grow; the currently documented values include<br>`pending`, `processing`, `complete`, `failed`, `canceled`, and<br>`unknown`. Keep polling `pending` and `processing`. Stop on<br>`complete`, `failed`, `canceled`, and `unknown`. Treat any value that<br>is not recognized the same as `unknown`: do not fail parsing, and do<br>not keep polling.|
|format|string|true|none|The output file format of the report.|
|sections|[string]|false|none|The sections included in the report. Echoes the sections requested on<br>create. This is an open list whose set of values is expected to grow;<br>the currently documented values include `files_and_folders`,<br>`event_log`, `transfer_overview`, `source_users`, `target_users`,<br>`source_collaborators`, `target_collaborators`,<br>`source_collaborations`, and `target_collaborations`. Omitted on<br>older reports that have no stored section list. New reports always<br>include this field.|
|users_scope|string|false|none|Which users are included in user-related report sections.|
|output|[ShuttleReportOutput](#schemashuttlereportoutput) \| object \| null|true|none|The generated Box file or folder. Always present; `null` until<br>`status` is `complete`.|
|created_at|string(date-time)|false|none|When report generation was requested.|
|completed_at|string(date-time) \| null|true|none|When report generation finished. Always present; `null` while<br>generation is still in progress.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_report|
|format|xlsx|
|format|csv|
|users_scope|migrated|
|users_scope|all|

<h2 id="tocS_ShuttleReportCreateRequest">ShuttleReportCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlereportcreaterequest"></a>
<a id="schema_ShuttleReportCreateRequest"></a>
<a id="tocSshuttlereportcreaterequest"></a>
<a id="tocsshuttlereportcreaterequest"></a>

```json
{
  "run_id": "6a3ba68e810d9156194530a1:42",
  "format": "xlsx",
  "sections": [
    "event_log",
    "transfer_overview"
  ],
  "users_scope": "migrated"
}
```

The request body used to generate a report for a shuttle run. Generation
is asynchronous: the created report is returned immediately in `pending`
or `processing` status. Poll `GET /shuttle_reports/{shuttle_report_id}`
while `status` is `pending` or `processing`. Stop when `status` is
`complete`, `failed`, `canceled`, or `unknown`. Repeating this request
with the same parameters reuses the existing report instead of creating
a duplicate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|run_id|string|true|none|The unique identifier of the shuttle run to generate a report for.|
|format|string|true|none|The output file format of the report.|
|sections|[string]|true|none|The sections to include in the report. Must be a non-empty subset of<br>the run's `available_report_sections`. This is an open list whose set<br>of values is expected to grow; the currently documented values include<br>`files_and_folders`, `event_log`, `transfer_overview`, `source_users`,<br>`target_users`, `source_collaborators`, `target_collaborators`,<br>`source_collaborations`, and `target_collaborations`.|
|users_scope|string|false|none|Which users to include in user-related report sections. Defaults to<br>`migrated` when omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|xlsx|
|format|csv|
|users_scope|migrated|
|users_scope|all|

<h2 id="tocS_ShuttleReportOutput">ShuttleReportOutput</h2>
<!-- backwards compatibility -->
<a id="schemashuttlereportoutput"></a>
<a id="schema_ShuttleReportOutput"></a>
<a id="tocSshuttlereportoutput"></a>
<a id="tocsshuttlereportoutput"></a>

```json
{
  "id": "12345678",
  "type": "file"
}
```

A reference to the generated Box file or folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier of the generated Box file or folder.|
|type|string|true|none|The Box object type of the generated file or folder.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|file|
|type|folder|

<h2 id="tocS_ShuttleReports">ShuttleReports</h2>
<!-- backwards compatibility -->
<a id="schemashuttlereports"></a>
<a id="schema_ShuttleReports"></a>
<a id="tocSshuttlereports"></a>
<a id="tocsshuttlereports"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba8d14f2c91e8370b4d12",
      "type": "shuttle_report",
      "run_id": "6a3ba68e810d9156194530a1:42",
      "status": "complete",
      "format": "xlsx",
      "sections": [
        "event_log",
        "transfer_overview"
      ],
      "users_scope": "migrated",
      "output": {
        "id": "12345678",
        "type": "file"
      },
      "created_at": "2026-03-15T06:35:00Z",
      "completed_at": "2026-03-15T06:36:12Z"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle reports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleReport](#schemashuttlereport)]|true|none|A list of shuttle reports.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleRun">ShuttleRun</h2>
<!-- backwards compatibility -->
<a id="schemashuttlerun"></a>
<a id="schema_ShuttleRun"></a>
<a id="tocSshuttlerun"></a>
<a id="tocsshuttlerun"></a>

```json
{
  "id": "6a3ba68e810d9156194530a1:42",
  "type": "shuttle_run",
  "job_id": "6a3ba68e810d9156194530a1",
  "run_mode": "transfer",
  "state": "completed",
  "started_at": "2026-03-15T02:00:00Z",
  "ended_at": "2026-03-15T06:30:00Z",
  "duration_seconds": 16200,
  "stats": {
    "bytes_sent": 1073741824,
    "files_sent": 4200,
    "folders_created": 350,
    "is_estimated": false
  },
  "created_by": {
    "id": "11446498",
    "type": "user"
  },
  "available_report_sections": [
    "event_log",
    "files_and_folders"
  ]
}
```

A historical instance of a shuttle job run. A run is created each time
a job is started. Run IDs have the form `{job_id}:{run_number}`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle run, in the form<br>`{job_id}:{run_number}`.|
|type|string|true|none|The value will always be `shuttle_run`.|
|job_id|string|true|none|The unique identifier of the shuttle job this run belongs to.|
|run_mode|string|true|none|The mode the run was started in. This is an open string whose set of<br>values is expected to grow; the currently documented values include<br>`transfer`, `simulation`, `analysis`, `scan`, and `unknown`. Clients<br>should treat any value they do not recognize as `unknown`.|
|state|string|true|none|The current state of the shuttle run. This is an open string whose set<br>of values is expected to grow; the currently documented values include<br>`running`, `stopping`, `completed`, `completed_with_errors`, `stopped`,<br>`failed`, `timed_out`, and `unknown`. Clients should treat any value<br>they do not recognize as `unknown`.|
|started_at|string(date-time)|false|none|When the run started.|
|ended_at|string(date-time) \| null|false|none|When the run ended. `null` while the run is still in progress.|
|duration_seconds|integer(int64) \| null|false|none|Total duration of the run in seconds. `null` while the run is still in<br>progress.|
|stats|object|false|none|Transfer statistics collected during the run.|
|created_by|[User--Base](#schemauser--base) \| object \| null|false|none|The user who started the run. `null` for schedule- or system-initiated<br>runs.|
|available_report_sections|[string]|false|none|Report sections that can be requested for this run. This is an open<br>list whose set of values is expected to grow; the currently documented<br>values include `files_and_folders`, `event_log`, `transfer_overview`,<br>`source_users`, `target_users`, `source_collaborators`,<br>`target_collaborators`, `source_collaborations`, and<br>`target_collaborations`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_run|

<h2 id="tocS_ShuttleRuns">ShuttleRuns</h2>
<!-- backwards compatibility -->
<a id="schemashuttleruns"></a>
<a id="schema_ShuttleRuns"></a>
<a id="tocSshuttleruns"></a>
<a id="tocsshuttleruns"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba68e810d9156194530a1:42",
      "type": "shuttle_run",
      "job_id": "6a3ba68e810d9156194530a1",
      "run_mode": "transfer",
      "state": "completed",
      "started_at": "2026-03-15T02:00:00Z",
      "ended_at": "2026-03-15T06:30:00Z",
      "duration_seconds": 16200,
      "stats": {
        "bytes_sent": 1073741824,
        "files_sent": 4200,
        "folders_created": 350,
        "is_estimated": false
      },
      "created_by": {
        "id": "11446498",
        "type": "user"
      },
      "available_report_sections": [
        "event_log",
        "files_and_folders"
      ]
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleRun](#schemashuttlerun)]|true|none|A list of shuttle runs.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleSubject">ShuttleSubject</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubject"></a>
<a id="schema_ShuttleSubject"></a>
<a id="tocSshuttlesubject"></a>
<a id="tocsshuttlesubject"></a>

```json
{
  "type": "user",
  "id": "sp-user-001",
  "email": "user@example.com",
  "name": "Jane Doe",
  "roles": [
    "owner"
  ]
}
```

A subject discovered on the source migration system, such as a user or
group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Whether this subject is a user or a group.|
|id|string \| null|false|none|The platform-native identifier of the subject. `null` when the system<br>does not provide one.|
|email|string \| null|false|none|The email address of the subject. `null` when unknown.|
|name|string \| null|false|none|The display name of the subject. `null` when unknown.|
|roles|[[ShuttleSubjectRole](#schemashuttlesubjectrole)]|false|none|Roles this subject holds on the source. `null` when no roles are known.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|group|
|roles|owner|
|roles|creator|
|roles|updater|
|roles|namespace_account|
|roles|sharee|
|roles|account_holder|
|roles|unknown|

<h2 id="tocS_ShuttleSubjectMapping">ShuttleSubjectMapping</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubjectmapping"></a>
<a id="schema_ShuttleSubjectMapping"></a>
<a id="tocSshuttlesubjectmapping"></a>
<a id="tocsshuttlesubjectmapping"></a>

```json
{
  "id": "6a3ba7b12ea17bc9461eeace",
  "type": "shuttle_subject_mapping",
  "job_id": "6a3ba68e810d9156194530a1",
  "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
  "revision": 3,
  "is_subject_skipped": false,
  "source": {
    "type": "user",
    "id": "sp-user-001",
    "email": "user@example.com",
    "name": "Jane Doe",
    "roles": [
      "owner"
    ]
  },
  "target": {
    "type": "user",
    "id": "12345678",
    "email": "jane.doe@company.box.com",
    "name": "Jane Doe"
  }
}
```

A standard representation of a shuttle subject mapping. A subject mapping
connects a discovered source subject to a Box user or group, or marks the
subject as skipped.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle subject mapping.|
|type|string|true|none|The value will always be `shuttle_subject_mapping`.|
|job_id|string|true|none|The unique identifier of the shuttle job this mapping belongs to.|
|discovered_subject_id|string \| null|false|none|The unique identifier of the discovered subject this mapping applies to.<br>`null` for legacy mappings created before this field was tracked.|
|revision|integer(int32) \| null|false|none|The discovery-requirements revision this mapping was resolved against.<br>`null` for legacy mappings.|
|is_subject_skipped|boolean|true|none|Whether this subject is skipped during the migration.|
|source|object|true|none|none|
|target|[ShuttleTargetSubject](#schemashuttletargetsubject) \| object \| null|false|none|The Box target subject. `null` when the subject is skipped or not yet<br>assigned.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_subject_mapping|

<h2 id="tocS_ShuttleSubjectMappingCreateRequest">ShuttleSubjectMappingCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubjectmappingcreaterequest"></a>
<a id="schema_ShuttleSubjectMappingCreateRequest"></a>
<a id="tocSshuttlesubjectmappingcreaterequest"></a>
<a id="tocsshuttlesubjectmappingcreaterequest"></a>

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
  "revision": 3,
  "is_subject_skipped": false,
  "target": {
    "type": "user",
    "id": "12345678"
  }
}
```

The request body used to create a new shuttle subject mapping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|The unique identifier of the shuttle job this mapping belongs to.|
|discovered_subject_id|string|true|none|The unique identifier of the discovered subject to map.|
|revision|integer(int32)|false|none|The discovery-requirements revision to resolve against. Omit to use the<br>latest revision.|
|is_subject_skipped|boolean|false|none|Whether this subject should be skipped during the migration. Defaults<br>to `false`.|
|target|[ShuttleTargetSubjectInput](#schemashuttletargetsubjectinput) \| object \| null|false|none|The Box target to map to. Omit or set to `null` when the subject is<br>skipped.|

<h2 id="tocS_ShuttleSubjectMappingImportCreateRequest">ShuttleSubjectMappingImportCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubjectmappingimportcreaterequest"></a>
<a id="schema_ShuttleSubjectMappingImportCreateRequest"></a>
<a id="tocSshuttlesubjectmappingimportcreaterequest"></a>
<a id="tocsshuttlesubjectmappingimportcreaterequest"></a>

```json
{
  "job_id": "6a3ba68e810d9156194530a1",
  "file_id": "12345678901"
}
```

The request body used to import a shuttle job's subject mappings from a
spreadsheet already stored in Box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job_id|string|true|none|The unique identifier of the shuttle job whose subject mappings are<br>replaced.|
|file_id|string|true|none|The unique identifier of the Box file holding the mapping workbook. The<br>file is read as the calling user, so it must live somewhere that user can<br>download from.|

<h2 id="tocS_ShuttleSubjectMappings">ShuttleSubjectMappings</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubjectmappings"></a>
<a id="schema_ShuttleSubjectMappings"></a>
<a id="tocSshuttlesubjectmappings"></a>
<a id="tocsshuttlesubjectmappings"></a>

```json
{
  "entries": [
    {
      "id": "6a3ba7b12ea17bc9461eeace",
      "type": "shuttle_subject_mapping",
      "job_id": "6a3ba68e810d9156194530a1",
      "discovered_subject_id": "6a3ba7c02ea17bc9461eeacf",
      "revision": 3,
      "is_subject_skipped": false,
      "source": {
        "type": "user",
        "id": "sp-user-001",
        "email": "user@example.com",
        "name": "Jane Doe",
        "roles": [
          "owner"
        ]
      },
      "target": {
        "type": "user",
        "id": "12345678",
        "email": "jane.doe@company.box.com",
        "name": "Jane Doe"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle subject mappings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleSubjectMapping](#schemashuttlesubjectmapping)]|true|none|A list of shuttle subject mappings.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleSubjectMappingUpdateRequest">ShuttleSubjectMappingUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubjectmappingupdaterequest"></a>
<a id="schema_ShuttleSubjectMappingUpdateRequest"></a>
<a id="tocSshuttlesubjectmappingupdaterequest"></a>
<a id="tocsshuttlesubjectmappingupdaterequest"></a>

```json
{
  "is_subject_skipped": true,
  "target": {
    "type": "user",
    "id": "12345678"
  }
}
```

The request body used to update an existing shuttle subject mapping. Only
the fields supplied in the request body are changed. `job_id`, `id`,
`type`, `source`, `discovered_subject_id`, and `revision` are immutable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_subject_skipped|boolean|false|none|Whether this subject should be skipped during the migration.|
|target|[ShuttleTargetSubjectInput](#schemashuttletargetsubjectinput) \| object \| null|false|none|The Box target to map to. Set to `null` only for a skipped subject.<br>Setting it to `null` while the mapping is active fails validation.<br>Updating `is_subject_skipped` alone preserves the existing target.|

<h2 id="tocS_ShuttleSubjectRole">ShuttleSubjectRole</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesubjectrole"></a>
<a id="schema_ShuttleSubjectRole"></a>
<a id="tocSshuttlesubjectrole"></a>
<a id="tocsshuttlesubjectrole"></a>

```json
"owner"
```

A role a source subject holds on the source system.

<h2 id="tocS_ShuttleSystem">ShuttleSystem</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesystem"></a>
<a id="schema_ShuttleSystem"></a>
<a id="tocSshuttlesystem"></a>
<a id="tocsshuttlesystem"></a>

```json
{
  "id": "6a315c0754833bfc5df067bf",
  "type": "shuttle_system",
  "name": "BoxProd",
  "system_type": "box",
  "label": "Box (Production)",
  "state": "connected"
}
```

A standard representation of a shuttle system. A shuttle system describes a
source or destination that Shuttle can migrate content to or from, along
with its current connection state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the shuttle system.|
|type|string|true|none|The value will always be `shuttle_system`.|
|name|string|true|none|The display name of the shuttle system.|
|system_type|string|true|none|Identifies the kind of source or destination this system represents, for<br>example `box`, `windows`, `sharepoint`, or `amazon_s3`. New system types<br>are added over time, so clients must tolerate values they do not<br>recognize rather than treating this as a fixed set.|
|label|string|false|none|A server-computed display label for the system.|
|state|string|true|none|The current connection state of the shuttle system.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shuttle_system|
|state|connected|
|state|disconnected|
|state|unknown|

<h2 id="tocS_ShuttleSystemCreateRequest">ShuttleSystemCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesystemcreaterequest"></a>
<a id="schema_ShuttleSystemCreateRequest"></a>
<a id="tocSshuttlesystemcreaterequest"></a>
<a id="tocsshuttlesystemcreaterequest"></a>

```json
{
  "name": "NYC File Server",
  "system_type": "windows"
}
```

The request body for creating a shuttle system. Only Windows agent systems
can be created through the public API, so `system_type` must be `windows`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The display name for the new shuttle system.|
|system_type|string|true|none|The public system type identifier for the new shuttle system. Only<br>`windows` is currently supported through the public API.|

#### Enumerated Values

|Property|Value|
|---|---|
|system_type|windows|

<h2 id="tocS_ShuttleSystems">ShuttleSystems</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesystems"></a>
<a id="schema_ShuttleSystems"></a>
<a id="tocSshuttlesystems"></a>
<a id="tocsshuttlesystems"></a>

```json
{
  "entries": [
    {
      "id": "6a315c0754833bfc5df067bf",
      "type": "shuttle_system",
      "name": "BoxProd",
      "system_type": "box",
      "label": "Box (Production)",
      "state": "connected"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih"
}
```

A paginated list of shuttle systems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShuttleSystem](#schemashuttlesystem)]|true|none|A list of shuttle systems.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|

<h2 id="tocS_ShuttleSystemUpdateRequest">ShuttleSystemUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemashuttlesystemupdaterequest"></a>
<a id="schema_ShuttleSystemUpdateRequest"></a>
<a id="tocSshuttlesystemupdaterequest"></a>
<a id="tocsshuttlesystemupdaterequest"></a>

```json
{
  "name": "NYC File Server (Primary)"
}
```

The request body for updating a shuttle system. Only the fields supplied are
changed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The updated display name for the shuttle system.|

<h2 id="tocS_ShuttleTargetSubject">ShuttleTargetSubject</h2>
<!-- backwards compatibility -->
<a id="schemashuttletargetsubject"></a>
<a id="schema_ShuttleTargetSubject"></a>
<a id="tocSshuttletargetsubject"></a>
<a id="tocsshuttletargetsubject"></a>

```json
{
  "type": "user",
  "id": "12345678",
  "email": "user@example.com",
  "name": "Jane Doe"
}
```

A Box user or group that a source subject is mapped to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Whether the Box target is a user or a group.|
|id|string \| null|false|none|The Box user or group ID. `null` when the mapping was not created<br>through this API and is identified by email (user) or name (group)<br>instead. Skip is represented by `target: null`, not a missing `id`.<br>Create and update always send `id`.|
|email|string \| null|false|none|The email address of the target. `null` when unknown.|
|name|string \| null|false|none|The display name of the target. `null` when unknown.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|group|

<h2 id="tocS_ShuttleTargetSubjectInput">ShuttleTargetSubjectInput</h2>
<!-- backwards compatibility -->
<a id="schemashuttletargetsubjectinput"></a>
<a id="schema_ShuttleTargetSubjectInput"></a>
<a id="tocSshuttletargetsubjectinput"></a>
<a id="tocsshuttletargetsubjectinput"></a>

```json
{
  "type": "user",
  "id": "12345678"
}
```

A Box user or group to map a source subject to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Whether the Box target is a user or a group.|
|id|string|true|none|The identifier of the target Box subject.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|group|

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
