<h1 id="box-platform-api">Box Platform API v2025.0</h1>

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

<h1 id="box-platform-api-archives">Archives</h1>

A set of endpoints used to manage archives.

## List archives

<a id="opIdget_archives_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/archives \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /archives`

Retrieves archives for an enterprise.

To learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).

<h3 id="list-archives-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "archive",
      "name": "Archive",
      "size": 123456789,
      "description": "This is an archive for important documents.",
      "owned_by": {
        "id": "12345",
        "type": "user"
      }
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

<h3 id="list-archives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of archives in the enterprise.|[Archives](#schemaarchives)|
|400|Bad Request|Returned when some of the parameters are missing or not valid.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have the right<br>permissions to list archives.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|Returned when an unexpected server error occurs.|[ClientError](#schemaclienterror)|
|default|Default|Returned when an unexpected client error occurs.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create archive

<a id="opIdpost_archives_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/archives \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "name": "Some Archive",
    "description": "This is an archive for important documents.",
    "storage_policy_id": "100001"
  }'
```

`POST /archives`

Creates an archive.

To learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).

> Body parameter

```json
{
  "name": "Some Archive",
  "description": "This is an archive for important documents.",
  "storage_policy_id": "100001"
}
```

<h3 id="create-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|object|true|none|
|» name|body|string|true|The name of the archive.|
|» description|body|string|false|The description of the archive.|
|» storage_policy_id|body|string|false|The ID of the storage policy that the archive is assigned to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 201 Response

```json
{
  "id": "12345",
  "type": "archive",
  "name": "Archive",
  "size": 123456789,
  "description": "This is an archive for important documents.",
  "owned_by": {
    "id": "12345",
    "type": "user"
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

<h3 id="create-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns a new archive object.|[Archive](#schemaarchive)|
|400|Bad Request|Returned when some of the parameters are missing or not valid.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have the right<br>permissions to create an archive.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when an archive with the given name already exists.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|Returned when an unexpected server error occurs.|[ClientError](#schemaclienterror)|
|default|Default|Returned when an unexpected client error occurs.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update archive

<a id="opIdput_archives_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/archives/982312 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "name": "Some Archive",
    "description": "This is an archive for important documents."
  }'
```

`PUT /archives/{archive_id}`

Updates an archive.

To learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).

> Body parameter

```json
{
  "name": "Some Archive",
  "description": "This is an archive for important documents."
}
```

<h3 id="update-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archive_id|path|string|true|The ID of the archive.|
|box-version|header|string|true|Version header.|
|body|body|object|true|none|
|» name|body|string|false|The name of the archive.|
|» description|body|string|false|The description of the archive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "12345",
  "type": "archive",
  "name": "Archive",
  "size": 123456789,
  "description": "This is an archive for important documents.",
  "owned_by": {
    "id": "12345",
    "type": "user"
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

<h3 id="update-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the updated archive object.|[Archive](#schemaarchive)|
|400|Bad Request|Returned when some of the parameters are not valid.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returned when the authenticated user does not have the right<br>permissions to update the archive.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned when the archive is not found.|[ClientError](#schemaclienterror)|
|409|Conflict|Returned when an archive with the given name already exists.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|Returned when an unexpected server error occurs.|[ClientError](#schemaclienterror)|
|default|Default|Returned when an unexpected client error occurs.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete archive

<a id="opIddelete_archives_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/archives/982312 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`DELETE /archives/{archive_id}`

Permanently deletes an archive.

To learn more about the archive APIs, see the [Archive API Guide](https://developer.box.com/guides/archives).

<Danger>
This endpoint is currently unavailable. Please contact support for assistance.
</Danger>

<h3 id="delete-archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|archive_id|path|string|true|The ID of the archive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

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

<h3 id="delete-archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when the archive has been deleted.|None|
|400|Bad Request|Returns an error if the archive is not empty.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returns an error if the user does not have the right<br>permissions to delete the archive.|[ClientError](#schemaclienterror)|
|404|Not Found|Returns an error if the archive is not found.|[ClientError](#schemaclienterror)|
|500|Internal Server Error|An unexpected server error.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-box-doc-gen">Box Doc Gen</h1>

Doc Gen is used to automatically generate documents.

## Get Box Doc Gen job by ID

<a id="opIdget_docgen_jobs_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_jobs/123 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_jobs/{job_id}`

Get details of the Box Doc Gen job.

<h3 id="get-box-doc-gen-job-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string|true|Box Doc Gen job ID.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "12345",
  "type": "docgen_job",
  "external_id": "111222_externalID",
  "batch": {
    "id": "12345",
    "type": "docgen_batch"
  },
  "template_file": {
    "type": "file",
    "id": "42037322"
  },
  "template_file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "output_file": {
    "type": "file",
    "id": "42037322"
  },
  "output_file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "status": "completed",
  "output_type": "docx",
  "failures": {
    "errors": [
      "The tag 'customer_name' was not provided in the input data."
    ],
    "warnings": [
      "The tag 'optional_field' was provided but not used in the template."
    ]
  }
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

<h3 id="get-box-doc-gen-job-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of the Box Doc Gen job.|[DocGenJob](#schemadocgenjob)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the job is not found or the user does not<br>have access to the associated job.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List all Box Doc Gen jobs

<a id="opIdget_docgen_jobs_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_jobs`

Lists all Box Doc Gen jobs for a user.

<h3 id="list-all-box-doc-gen-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "id": "12345",
      "type": "docgen_job",
      "external_id": "111222_externalID",
      "batch": {
        "id": "12345",
        "type": "docgen_batch"
      },
      "template_file": {
        "type": "file",
        "id": "42037322"
      },
      "template_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "output_file": {
        "type": "file",
        "id": "42037322"
      },
      "output_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "status": "completed",
      "output_type": "docx",
      "failures": {
        "errors": [
          "The tag 'customer_name' was not provided in the input data."
        ],
        "warnings": [
          "The tag 'optional_field' was provided but not used in the template."
        ]
      },
      "created_at": "2022-05-11T10:56:11-07:00",
      "created_by": {
        "id": "11446498",
        "type": "user"
      },
      "enterprise": {
        "id": "1910967",
        "type": "enterprise"
      },
      "source": "api"
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

<h3 id="list-all-box-doc-gen-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of Box Doc Gen jobs.|[DocGenJobs--Full](#schemadocgenjobs--full)|
|400|Bad Request|Returned if the user has passed in a malformed marker or limit value.|[ClientError](#schemaclienterror)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get Box Doc Gen jobs by batch ID

<a id="opIdget_docgen_batch_jobs_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_batch_jobs/123 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_batch_jobs/{batch_id}`

Lists Box Doc Gen jobs in a batch.

<h3 id="get-box-doc-gen-jobs-by-batch-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batch_id|path|string|true|Box Doc Gen batch ID.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "id": "12345",
      "type": "docgen_job",
      "external_id": "111222_externalID",
      "batch": {
        "id": "12345",
        "type": "docgen_batch"
      },
      "template_file": {
        "type": "file",
        "id": "42037322"
      },
      "template_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "output_file": {
        "type": "file",
        "id": "42037322"
      },
      "output_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "status": "completed",
      "output_type": "docx",
      "failures": {
        "errors": [
          "The tag 'customer_name' was not provided in the input data."
        ],
        "warnings": [
          "The tag 'optional_field' was provided but not used in the template."
        ]
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

<h3 id="get-box-doc-gen-jobs-by-batch-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of Box Doc Gen jobs in a Box Doc Gen batch.|[DocGenJobs](#schemadocgenjobs)|
|400|Bad Request|Returned if the user has passed in a malformed marker or limit value.|[ClientError](#schemaclienterror)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the batch is not found or the user does not<br>have access to the associated batch.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Generate document using Box Doc Gen template

<a id="opIdpost_docgen_batches_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_batches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "file": {
      "type": "file",
      "id": "42037322"
    },
    "file_version": {
      "id": "12345",
      "type": "file_version"
    },
    "input_source": "api",
    "destination_folder": {
      "type": "folder",
      "id": "42037322"
    },
    "output_type": "docx",
    "document_generation_data": [
      {
        "generated_file_name": "New_Template",
        "user_input": {
          "name": "Aaron Levie"
        },
        "external_id": "111222_externalID"
      }
    ]
  }'
```

`POST /docgen_batches`

Generates a document using a Box Doc Gen template.

> Body parameter

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  },
  "file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "input_source": "api",
  "destination_folder": {
    "type": "folder",
    "id": "42037322"
  },
  "output_type": "docx",
  "document_generation_data": [
    {
      "generated_file_name": "New_Template",
      "user_input": {
        "name": "Aaron Levie"
      },
      "external_id": "111222_externalID"
    }
  ]
}
```

<h3 id="generate-document-using-box-doc-gen-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[DocGenBatchCreateRequest](#schemadocgenbatchcreaterequest)|true|none|
|» file|body|object|true|none|
|» » type|body|string|true|The value will always be `file`.|
|» » id|body|string|true|ID of the object.|
|» file_version|body|object|false|none|
|» » id|body|string|true|The unique identifier that represent a file version.|
|» » type|body|string|true|The value will always be `file_version`.|
|» input_source|body|string|true|Source of input. The value has to be `api` for all the API-based document generation requests.|
|» destination_folder|body|object|true|none|
|» » type|body|string|true|The value will always be `folder`.|
|» » id|body|string|true|ID of the folder.|
|» output_type|body|string|true|Type of the output file.|
|» document_generation_data|body|[[DocGenDocumentGenerationData](#schemadocgendocumentgenerationdata)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|
|» » type|file|
|» » type|file_version|
|» » type|folder|

> Example responses

> 202 Response

```json
{
  "id": "12345",
  "type": "docgen_batch"
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

<h3 id="generate-document-using-box-doc-gen-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The created Batch ID.|[DocGenBatch--Base](#schemadocgenbatch--base)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|413|Payload Too Large|The request payload exceeds the maximum allowed size.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-box-doc-gen-templates">Box Doc Gen templates</h1>

Doc Gen templates are used as input to generate documents.

## List Box Doc Gen templates

<a id="opIdget_docgen_templates_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_templates`

Lists Box Doc Gen templates on which the user is a collaborator.

<h3 id="list-box-doc-gen-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "file": {
        "type": "file",
        "id": "42037322"
      },
      "file_name": "Official contract"
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

<h3 id="list-box-doc-gen-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a collection of templates.|[DocGenTemplates](#schemadocgentemplates)|
|400|Bad Request|Returned if the user has passed in a malformed marker or limit value.|[ClientError](#schemaclienterror)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create Box Doc Gen template

<a id="opIdpost_docgen_templates_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "file": {
      "type": "file",
      "id": "42037322"
    }
  }'
```

`POST /docgen_templates`

Marks a file as a Box Doc Gen template.

> Body parameter

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  }
}
```

<h3 id="create-box-doc-gen-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[DocGenTemplateCreateRequest](#schemadocgentemplatecreaterequest)|true|Marks the provided file as a Box Doc Gen template.|
|» file|body|object|true|none|
|» » type|body|string|true|The value will always be `file`.|
|» » id|body|string|true|ID of the object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|
|» » type|file|

> Example responses

> 201 Response

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
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

<h3 id="create-box-doc-gen-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The file which has now been marked as a Box Doc Gen template.|[DocGenTemplate--Base](#schemadocgentemplate--base)|
|400|Bad Request|The server cannot or will not process the request due to an apparent client error.|[ClientError](#schemaclienterror)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get Box Doc Gen template by ID

<a id="opIdget_docgen_templates_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_templates/123 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_templates/{template_id}`

Lists details of a specific Box Doc Gen template.

<h3 id="get-box-doc-gen-template-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The ID of a Box Doc Gen template.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  },
  "file_name": "Official contract"
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

<h3 id="get-box-doc-gen-template-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a template.|[DocGenTemplate](#schemadocgentemplate)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the template is not found or the user does not<br>have access to the associated template.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete Box Doc Gen template

<a id="opIddelete_docgen_templates_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_templates/123 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`DELETE /docgen_templates/{template_id}`

Unmarks file as Box Doc Gen template.

<h3 id="delete-box-doc-gen-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|ID of the file which will no longer be marked as a Box Doc Gen template.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

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

<h3 id="delete-box-doc-gen-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Returns an empty response when a file is no longer marked as a Box Doc Gen template.|None|
|400|Bad Request|The server cannot or will not process the request due to an apparent client error.|[ClientError](#schemaclienterror)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the template is not found or the user does not<br>have access to the associated template.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List all Box Doc Gen template tags in template

<a id="opIdget_docgen_templates_id_tags_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_templates/123/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_templates/{template_id}/tags`

Lists all tags in a Box Doc Gen template.

<h3 id="list-all-box-doc-gen-template-tags-in-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|ID of template.|
|template_version_id|query|string|false|Id of template version.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "tag_content": "{{item.name}}",
      "tag_type": "text",
      "json_paths": [
        "products",
        "products.name"
      ]
    }
  ]
}
```

> 202 Response

```json
{
  "message": "Processing tags for this file."
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

<h3 id="list-all-box-doc-gen-template-tags-in-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of document generation template tags.|[DocGenTags](#schemadocgentags)|
|202|Accepted|Processing tags for the file.|[DocGenTagsProcessingMessage](#schemadocgentagsprocessingmessage)|
|400|Bad Request|Returned if the user has passed in a malformed marker or limit value.|[ClientError](#schemaclienterror)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|404|Not Found|The requested resource could not be found but may be available in the future.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get list of all Box Doc Gen jobs for template

<a id="opIdget_docgen_template_jobs_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/docgen_template_jobs/123 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /docgen_template_jobs/{template_id}`

Lists the users jobs which use this template.

<h3 id="get-list-of-all-box-doc-gen-jobs-for-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|Id of template to fetch jobs for.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "id": "12345",
      "type": "docgen_job",
      "external_id": "111222_externalID",
      "batch": {
        "id": "12345",
        "type": "docgen_batch"
      },
      "template_file": {
        "type": "file",
        "id": "42037322"
      },
      "template_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "output_file": {
        "type": "file",
        "id": "42037322"
      },
      "output_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "status": "completed",
      "output_type": "docx",
      "failures": {
        "errors": [
          "The tag 'customer_name' was not provided in the input data."
        ],
        "warnings": [
          "The tag 'optional_field' was provided but not used in the template."
        ]
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

<h3 id="get-list-of-all-box-doc-gen-jobs-for-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A single Box Doc Gen template.|[DocGenJobs](#schemadocgenjobs)|
|400|Bad Request|Returned if the user has passed in a malformed marker or limit value.|[ClientError](#schemaclienterror)|
|403|Forbidden|The client does not have access rights to the content or resource requested.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the template is not found or the user does not<br>have access to the associated template.|[ClientError](#schemaclienterror)|
|429|Too Many Requests|The user has sent too many requests in a given amount of time.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected condition was encountered on the server.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-box-hub-collaborations">Box Hub Collaborations</h1>

A set of endpoints used to manage collaborations within a Box Hub.

## Get Box Hub collaborations

<a id="opIdget_hub_collaborations_v2025.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/hub_collaborations?hub_id=12345' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hub_collaborations`

Retrieves all collaborations for a Box Hub.

<h3 id="get-box-hub-collaborations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|query|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345678",
      "type": "hub_collaboration",
      "hub": {
        "id": "12345",
        "type": "hubs"
      },
      "accessible_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "role": "editor",
      "status": "accepted",
      "acceptance_requirements_status": {
        "terms_of_service_requirement": {
          "is_accepted": true,
          "terms_of_service": {
            "id": "11446498",
            "type": "terms_of_service"
          }
        },
        "strong_password_requirement": {
          "enterprise_has_strong_password_required_for_external_users": true,
          "user_has_strong_password": true
        },
        "two_factor_authentication_requirement": {
          "enterprise_has_two_factor_auth_enabled": true,
          "user_has_two_factor_authentication_enabled": true
        }
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
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

<h3 id="get-box-hub-collaborations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieves the collaborations associated with the specified Box Hub.|[HubCollaborations](#schemahubcollaborations)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the Box Hub is not found, or the user does not<br>have access to the Box Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create Box Hub collaboration

<a id="opIdpost_hub_collaborations_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hub_collaborations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "hub": {
      "type": "hubs",
      "id": "42037322"
    },
    "accessible_by": {
      "type": "user",
      "id": "23522323",
      "login": "john@example.com"
    },
    "role": "editor"
  }'
```

`POST /hub_collaborations`

Adds a collaboration for a single user or a single group to a Box Hub.

Collaborations can be created using email address, user IDs, or group IDs.

> Body parameter

```json
{
  "hub": {
    "type": "hubs",
    "id": "42037322"
  },
  "accessible_by": {
    "type": "user",
    "id": "23522323",
    "login": "john@example.com"
  },
  "role": "editor"
}
```

<h3 id="create-box-hub-collaboration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[HubCollaborationCreateRequest](#schemahubcollaborationcreaterequest)|true|none|
|» hub|body|object|true|Box Hubs reference.|
|» » type|body|string|true|The value will always be `hubs`.|
|» » id|body|string|true|ID of the object.|
|» accessible_by|body|object|true|The user or group who gets access to the item.|
|» » type|body|string|true|The type of collaborator to invite.<br>Possible values are `user` or `group`.|
|» » id|body|string|false|The ID of the user or group.<br><br>Alternatively, use `login` to specify a user by email<br>address.|
|» » login|body|string|false|The email address of the user who gets access to the item.<br><br>Alternatively, use `id` to specify a user by user ID.|
|» role|body|string|true|The level of access granted to a Box Hub.<br>Possible values are `editor`, `viewer`, and `co-owner`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|
|» » type|hubs|

> Example responses

> 201 Response

```json
{
  "id": "12345678",
  "type": "hub_collaboration",
  "hub": {
    "id": "12345",
    "type": "hubs"
  },
  "accessible_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "role": "editor",
  "status": "accepted",
  "acceptance_requirements_status": {
    "terms_of_service_requirement": {
      "is_accepted": true,
      "terms_of_service": {
        "id": "11446498",
        "type": "terms_of_service"
      }
    },
    "strong_password_requirement": {
      "enterprise_has_strong_password_required_for_external_users": true,
      "user_has_strong_password": true
    },
    "two_factor_authentication_requirement": {
      "enterprise_has_two_factor_auth_enabled": true,
      "user_has_two_factor_authentication_enabled": true
    }
  }
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

<h3 id="create-box-hub-collaboration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns a new Box Hub collaboration object.|[HubCollaboration](#schemahubcollaboration)|
|403|Forbidden|Returns an error when the user does not have the<br>right permissions to create the collaboration.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get Box Hub collaboration by collaboration ID

<a id="opIdget_hub_collaborations_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hub_collaborations/1234 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hub_collaborations/{hub_collaboration_id}`

Retrieves details for a Box Hub collaboration by collaboration ID.

<h3 id="get-box-hub-collaboration-by-collaboration-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_collaboration_id|path|string|true|The ID of the hub collaboration.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "12345678",
  "type": "hub_collaboration",
  "hub": {
    "id": "12345",
    "type": "hubs"
  },
  "accessible_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "role": "editor",
  "status": "accepted",
  "acceptance_requirements_status": {
    "terms_of_service_requirement": {
      "is_accepted": true,
      "terms_of_service": {
        "id": "11446498",
        "type": "terms_of_service"
      }
    },
    "strong_password_requirement": {
      "enterprise_has_strong_password_required_for_external_users": true,
      "user_has_strong_password": true
    },
    "two_factor_authentication_requirement": {
      "enterprise_has_two_factor_auth_enabled": true,
      "user_has_two_factor_authentication_enabled": true
    }
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

<h3 id="get-box-hub-collaboration-by-collaboration-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a Box Hub collaboration object.|[HubCollaboration](#schemahubcollaboration)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the Box Hub is not found, or the user does not<br>have access to the Box Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update Box Hub collaboration

<a id="opIdput_hub_collaborations_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hub_collaborations/1234 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "role": "editor"
  }'
```

`PUT /hub_collaborations/{hub_collaboration_id}`

Updates a Box Hub collaboration.
Can be used to change the Box Hub role.

> Body parameter

```json
{
  "role": "editor"
}
```

<h3 id="update-box-hub-collaboration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_collaboration_id|path|string|true|The ID of the hub collaboration.|
|box-version|header|string|true|Version header.|
|body|body|[HubCollaborationUpdateRequest](#schemahubcollaborationupdaterequest)|true|none|
|» role|body|string|false|The level of access granted to a Box Hub.<br>Possible values are `editor`, `viewer`, and `co-owner`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "12345678",
  "type": "hub_collaboration",
  "hub": {
    "id": "12345",
    "type": "hubs"
  },
  "accessible_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "role": "editor",
  "status": "accepted",
  "acceptance_requirements_status": {
    "terms_of_service_requirement": {
      "is_accepted": true,
      "terms_of_service": {
        "id": "11446498",
        "type": "terms_of_service"
      }
    },
    "strong_password_requirement": {
      "enterprise_has_strong_password_required_for_external_users": true,
      "user_has_strong_password": true
    },
    "two_factor_authentication_requirement": {
      "enterprise_has_two_factor_auth_enabled": true,
      "user_has_two_factor_authentication_enabled": true
    }
  }
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

<h3 id="update-box-hub-collaboration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns an updated Box Hub collaboration object.|[HubCollaboration](#schemahubcollaboration)|
|403|Forbidden|Returns an error if the authenticated user does not have the right<br>permissions to update the collaboration.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Remove Box Hub collaboration

<a id="opIddelete_hub_collaborations_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hub_collaborations/1234 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`DELETE /hub_collaborations/{hub_collaboration_id}`

Deletes a single Box Hub collaboration.

<h3 id="remove-box-hub-collaboration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_collaboration_id|path|string|true|The ID of the hub collaboration.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

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

<h3 id="remove-box-hub-collaboration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A blank response is returned if the Box Hub collaboration was<br>successfully deleted.|None|
|404|Not Found|Returns an error if the Box Hub collaboration could not be found,<br>or the authenticated user does not have access to the Box Hub collaboration.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-box-hub-document">Box Hub Document</h1>

A set of endpoints used to retrieve Box Hub Document elements (pages and content blocks).

## List Hub Document Pages

<a id="opIdget_hub_document_pages_v2025.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/hub_document_pages?hub_id=12345' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hub_document_pages`

Retrieves a list of Hub Document Pages for the specified hub.
Includes both root-level pages and sub pages.

<h3 id="list-hub-document-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|query|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
      "type": "page",
      "title_fragment": "This is the home page title !!"
    },
    {
      "id": "df6be226-6a40-429e-afd3-0e9ea73f1990",
      "type": "page",
      "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
      "title_fragment": "This is the second page title !!"
    }
  ],
  "type": "document_pages",
  "limit": 1000,
  "next_marker": null
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

<h3 id="list-hub-document-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a Hub Document Pages response whose `entries` array contains root-level pages and sub pages. Includes pagination when more results are available.|[HubDocumentPages](#schemahubdocumentpages)|
|401|Unauthorized|Returned when the access token provided in the Authorization header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the Box Hub is not found, or the user does not<br>have access to the Box Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List Hub Document blocks for page

<a id="opIdget_hub_document_blocks_v2025.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/hub_document_blocks?hub_id=12345&page_id=d97f7c26-0d9b-42a1-a00d-6e6db9619e0f' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hub_document_blocks`

Retrieves a sorted list of all Hub Document Blocks on a specified page in the hub document, excluding items.
Blocks are hierarchically organized by their `parent_id`.
Blocks are sorted in order based on user specification in the user interface.
The response will only include content blocks that belong to the specified page. This will not include sub pages or sub page content blocks.

<h3 id="list-hub-document-blocks-for-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|query|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|page_id|query|string|true|The unique identifier of a page within the Box Hub.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
      "type": "section_title",
      "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
      "fragment": "This is the section title"
    },
    {
      "id": "721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e",
      "type": "item_list",
      "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f"
    }
  ],
  "type": "document_blocks",
  "limit": 1000,
  "next_marker": null
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

<h3 id="list-hub-document-blocks-for-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a Hub Document Blocks response whose `entries` array contains all content blocks of the specified page, except for items.<br>To retrieve items, use the `GET /hub_items` endpoint.|[HubDocumentBlocks](#schemahubdocumentblocks)|
|401|Unauthorized|Returned when the access token provided in the Authorization header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the hub or page is not found, or the user does not<br>have access to the Box Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-box-hub-items">Box Hub Items</h1>

A set of endpoints used to manage items within a Box Hub.

## Get Box Hub items

<a id="opIdget_hub_items_v2025.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/hub_items?hub_id=12345' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hub_items`

Retrieves all items associated with a Box Hub.

<h3 id="get-box-hub-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|query|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|parent_id|query|string|false|The unique identifier of an item list block within the Box Hub.<br><br>When provided, the response will only include items that belong<br>to the specified item list, allowing you to filter results to<br>items on a specific page or section.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.<br><br>This requires `usemarker` to be set to `true`.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345678",
      "type": "file",
      "name": "My File"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
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

<h3 id="get-box-hub-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieves the items associated with the specified Box Hub.|[HubItems](#schemahubitems)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the Box Hub is not found, or the user does not<br>have access to the Box Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Manage Box Hub items

<a id="opIdpost_hubs_id_manage_items_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs/12345/manage_items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "operations": [
      {
        "action": "add",
        "item": {
          "type": "file",
          "id": "42037322"
        },
        "parent_id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd"
      }
    ]
  }'
```

`POST /hubs/{hub_id}/manage_items`

Adds and/or removes Box Hub items from a Box Hub.

> Body parameter

```json
{
  "operations": [
    {
      "action": "add",
      "item": {
        "type": "file",
        "id": "42037322"
      },
      "parent_id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd"
    }
  ]
}
```

<h3 id="manage-box-hub-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|path|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|box-version|header|string|true|Version header.|
|body|body|[HubItemsManageRequest](#schemahubitemsmanagerequest)|true|none|
|» operations|body|[[HubItemOperation](#schemahubitemoperation)]|false|List of operations to perform on Box Hub items.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 207 Response

```json
{
  "operations": [
    {
      "action": "add",
      "item": {
        "type": "file",
        "id": "42037322"
      },
      "parent_id": "721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e",
      "status": 200,
      "error": "Item not found"
    }
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

<h3 id="manage-box-hub-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|207|Multi-Status|Retrieves the status of all the operations.|[HubItemsManageResponse](#schemahubitemsmanageresponse)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the Box Hub is not found, or the user does not<br>have access to the Box Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-box-hubs">Box Hubs</h1>

A set of endpoints used to manage Box Hubs.

## List all Box Hubs

<a id="opIdget_hubs_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hubs`

Retrieves all Box Hubs for requesting user.

<h3 id="list-all-box-hubs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The query string to search for Box Hubs.|
|scope|query|string|false|The scope of the Box Hubs to retrieve. Possible values include `editable`,<br>`view_only`, and `all`. Default is `all`.|
|sort|query|string|false|The field to sort results by. <br>Possible values include `name`, `updated_at`,<br>`last_accessed_at`, `view_count`, and `relevance`.<br>Default is `relevance`.|
|direction|query|string|false|The direction to sort results in. This can be either in alphabetical ascending<br>(`ASC`) or descending (`DESC`) order.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ASC|
|direction|DESC|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "hubs",
      "title": "Contracts",
      "description": "All the contracts for the company.",
      "created_at": "2012-12-12T10:53:43Z",
      "updated_at": "2012-12-12T10:53:43Z",
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
      "view_count": 506,
      "is_ai_enabled": true,
      "is_collaboration_restricted_to_enterprise": true,
      "can_non_owners_invite": true,
      "can_shared_link_be_created": true,
      "can_public_shared_link_be_created": true,
      "copy_hub_access": "company"
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

<h3 id="list-all-box-hubs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all Box Hubs for the given user or enterprise.|[Hubs](#schemahubs)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create Box Hub

<a id="opIdpost_hubs_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "title": "Hub Title",
    "description": "This is a description of the Box Hub."
  }'
```

`POST /hubs`

Creates a new Box Hub.

> Body parameter

```json
{
  "title": "Hub Title",
  "description": "This is a description of the Box Hub."
}
```

<h3 id="create-box-hub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[HubCreateRequest](#schemahubcreaterequest)|true|none|
|» title|body|string|true|Title of the Box Hub. It cannot be empty and should be less than 50 characters.|
|» description|body|string|false|Description of the Box Hub.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 201 Response

```json
{
  "id": "12345",
  "type": "hubs",
  "title": "Contracts",
  "description": "All the contracts for the company.",
  "created_at": "2012-12-12T10:53:43Z",
  "updated_at": "2012-12-12T10:53:43Z",
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
  "view_count": 506,
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
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

<h3 id="create-box-hub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns a new Hub object.|[Hub](#schemahub)|
|400|Bad Request|Returned if any of the request parameters are not valid.|[ClientError](#schemaclienterror)|
|403|Forbidden|Returns an error when the user does not have the<br>right permissions to create a Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## List all Box Hubs for requesting enterprise

<a id="opIdget_enterprise_hubs_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/enterprise_hubs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /enterprise_hubs`

Retrieves all Box Hubs for a given enterprise.

Admins or Hub Co-admins of an enterprise
with GCM scope can make this call.

<h3 id="list-all-box-hubs-for-requesting-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The query string to search for Box Hubs.|
|sort|query|string|false|The field to sort results by.<br>Possible values include `name`, `updated_at`,<br>`last_accessed_at`, `view_count`, and `relevance`.<br>Default is `relevance`.|
|direction|query|string|false|The direction to sort results in. This can be either in alphabetical ascending<br>(`ASC`) or descending (`DESC`) order.|
|marker|query|string|false|Defines the position marker at which to begin returning results. This is<br>used when paginating using marker-based pagination.|
|limit|query|integer(int64)|false|The maximum number of items to return per page.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|ASC|
|direction|DESC|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "hubs",
      "title": "Contracts",
      "description": "All the contracts for the company.",
      "created_at": "2012-12-12T10:53:43Z",
      "updated_at": "2012-12-12T10:53:43Z",
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
      "view_count": 506,
      "is_ai_enabled": true,
      "is_collaboration_restricted_to_enterprise": true,
      "can_non_owners_invite": true,
      "can_shared_link_be_created": true,
      "can_public_shared_link_be_created": true,
      "copy_hub_access": "company"
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

<h3 id="list-all-box-hubs-for-requesting-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns all Box Hubs for the given user or enterprise.|[Hubs](#schemahubs)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get Box Hub information by ID

<a id="opIdget_hubs_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs/12345 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /hubs/{hub_id}`

Retrieves details for a Box Hub by its ID.

<h3 id="get-box-hub-information-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|path|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "12345",
  "type": "hubs",
  "title": "Contracts",
  "description": "All the contracts for the company.",
  "created_at": "2012-12-12T10:53:43Z",
  "updated_at": "2012-12-12T10:53:43Z",
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
  "view_count": 506,
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
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

<h3 id="get-box-hub-information-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a hub object.|[Hub](#schemahub)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the hub is not found, or the user does not<br>have access to the hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update Box Hub information by ID

<a id="opIdput_hubs_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs/12345 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "title": "Hub Title",
    "description": "This is a description of the Box Hub.",
    "is_ai_enabled": true,
    "is_collaboration_restricted_to_enterprise": true,
    "can_non_owners_invite": true,
    "can_shared_link_be_created": true,
    "can_public_shared_link_be_created": true,
    "copy_hub_access": "company"
  }'
```

`PUT /hubs/{hub_id}`

Updates a Box Hub. Can be used to change title, description, or Box Hub settings.

> Body parameter

```json
{
  "title": "Hub Title",
  "description": "This is a description of the Box Hub.",
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
}
```

<h3 id="update-box-hub-information-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|path|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|box-version|header|string|true|Version header.|
|body|body|[HubUpdateRequest](#schemahubupdaterequest)|true|none|
|» title|body|string|false|Title of the Box Hub. It cannot be empty and should be less than 50 characters.|
|» description|body|string|false|Description of the Box Hub.|
|» is_ai_enabled|body|boolean|false|Indicates if AI features are enabled for the Box Hub.|
|» is_collaboration_restricted_to_enterprise|body|boolean|false|Indicates if collaboration is restricted to the enterprise.|
|» can_non_owners_invite|body|boolean|false|Indicates if non-owners can invite others to the Box Hub.|
|» can_shared_link_be_created|body|boolean|false|Indicates if a shared link can be created for the Box Hub.|
|» can_public_shared_link_be_created|body|boolean|false|Indicates if a public shared link can be created for the Box Hub.|
|» copy_hub_access|body|string|false|Specifies who is allowed to copy the Box Hub.<br><br>* `all` - Any user with access to the Hub can copy it.<br>* `company` - Only users within the same enterprise as the Hub can copy it.<br>* `none` - No one can copy the Hub.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|
|» copy_hub_access|all|
|» copy_hub_access|company|
|» copy_hub_access|none|

> Example responses

> 200 Response

```json
{
  "id": "12345",
  "type": "hubs",
  "title": "Contracts",
  "description": "All the contracts for the company.",
  "created_at": "2012-12-12T10:53:43Z",
  "updated_at": "2012-12-12T10:53:43Z",
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
  "view_count": 506,
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
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

<h3 id="update-box-hub-information-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a Hub object.|[Hub](#schemahub)|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the Hub is not found, or the user does not<br>have access to the Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete Box Hub

<a id="opIddelete_hubs_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs/12345 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`DELETE /hubs/{hub_id}`

Deletes a single Box Hub.

<h3 id="delete-box-hub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|path|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

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

<h3 id="delete-box-hub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A blank response is returned if the hub was<br>successfully deleted.|None|
|401|Unauthorized|Returned when the access token provided in the `Authorization` header<br>is not recognized or not provided.|[ClientError](#schemaclienterror)|
|404|Not Found|Returned if the hub is not found or has already been deleted, or the user<br>does not have access to the hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Copy Box Hub

<a id="opIdpost_hubs_id_copy_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/hubs/12345/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "title": "Hub Title",
    "description": "This is a description of the Box Hub.",
    "include_items": true
  }'
```

`POST /hubs/{hub_id}/copy`

Creates a copy of a Box Hub.

The original Box Hub will not be modified.

> Body parameter

```json
{
  "title": "Hub Title",
  "description": "This is a description of the Box Hub.",
  "include_items": true
}
```

<h3 id="copy-box-hub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hub_id|path|string|true|The unique identifier that represent a hub.<br><br>The ID for any hub can be determined<br>by visiting this hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|box-version|header|string|true|Version header.|
|body|body|[HubCopyRequest](#schemahubcopyrequest)|true|none|
|» title|body|string|false|Title of the Box Hub. It cannot be empty and should be less than 50 characters.|
|» description|body|string|false|Description of the Box Hub.|
|» include_items|body|boolean|false|If true, the items which the user has Editor or Owner access to in the original Box Hub will be copied to the new Box Hub.<br>Defaults to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 201 Response

```json
{
  "id": "12345",
  "type": "hubs",
  "title": "Contracts",
  "description": "All the contracts for the company.",
  "created_at": "2012-12-12T10:53:43Z",
  "updated_at": "2012-12-12T10:53:43Z",
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
  "view_count": 506,
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
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

<h3 id="copy-box-hub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns a new Hub object.|[Hub](#schemahub)|
|403|Forbidden|Returns an error when the user does not have the<br>right permissions to create a Hub.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-enterprise-configurations">Enterprise Configurations</h1>

Enterprise configurations admins interact with to drive Box product behavior.

## Get enterprise configuration

<a id="opIdget_enterprise_configurations_id_v2025.0"></a>

> Code samples

```bash
curl 'https://api.box.com/2.0/enterprise_configurations/3442311?categories=security%2Ccontent_and_sharing%2Cuser_settings%2Cshield' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /enterprise_configurations/{enterprise_id}`

Retrieves the configuration for an enterprise.

<h3 id="get-enterprise-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enterprise_id|path|string|true|The ID of the enterprise.|
|categories|query|[string]|true|A comma-separated list of the enterprise configuration categories.<br>Allowed values: `security`, `content_and_sharing`, `user_settings`, `shield`.|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "11446498",
  "type": "enterprise_configuration",
  "security": {
    "is_managed_user_signup_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_signup_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_signup_corporate_email_enabled": {
      "is_used": true,
      "value": true
    },
    "is_new_user_notification_daily_digest_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_email_change_disabled": {
      "is_used": true,
      "value": true
    },
    "is_multi_factor_auth_required": {
      "is_used": true,
      "value": true
    },
    "is_weak_password_prevention_enabled": {
      "is_used": true,
      "value": true
    },
    "is_password_leak_detection_enabled": {
      "is_used": true,
      "value": true
    },
    "last_password_reset_at": {
      "is_used": true,
      "value": "2012-12-12T10:53:43-08:00"
    },
    "is_password_request_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "is_password_change_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "is_strong_password_for_ext_collab_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_migration_disabled": {
      "is_used": true,
      "value": true
    },
    "join_link": {
      "is_used": true,
      "value": "value of configuration"
    },
    "join_url": {
      "is_used": true,
      "value": "value of configuration"
    },
    "failed_login_attempts_to_trigger_admin_notification": {
      "is_used": true,
      "value": 1234
    },
    "password_min_length": {
      "is_used": true,
      "value": 1234
    },
    "password_min_uppercase_characters": {
      "is_used": true,
      "value": 1234
    },
    "password_min_numeric_characters": {
      "is_used": true,
      "value": 1234
    },
    "password_min_special_characters": {
      "is_used": true,
      "value": 1234
    },
    "password_reset_frequency": {
      "is_used": true,
      "value": "value of configuration"
    },
    "previous_password_reuse_limit": {
      "is_used": true,
      "value": "value of configuration"
    },
    "session_duration": {
      "is_used": true,
      "value": "value of configuration"
    },
    "external_collab_multi_factor_auth_settings": {
      "is_used": true,
      "value": {
        "denylist_domains": [
          "example.com"
        ],
        "denylist_emails": [
          "spam@example.com"
        ],
        "allowlist_domains": [
          "example.com"
        ],
        "allowlist_emails": [
          "mail@example.com"
        ],
        "state": "enabled",
        "scheduled_status": "inprogress",
        "scheduled_at": "2012-12-12T10:53:43-08:00",
        "factor_type_settings": "totp"
      }
    },
    "keysafe": {
      "is_used": true,
      "value": {
        "keysafe_enabled": true,
        "cloud_provider": "",
        "key_id": "1234",
        "account_id": "1234",
        "location_id": "1234",
        "project_id": "1234",
        "keyring_id": "1234"
      }
    },
    "is_custom_session_duration_enabled": {
      "is_used": true,
      "value": true
    },
    "custom_session_duration_value": {
      "is_used": true,
      "value": "value of configuration"
    },
    "custom_session_duration_groups": {
      "is_used": true,
      "value": [
        {
          "id": "1234",
          "name": "Group Name"
        }
      ]
    },
    "multi_factor_auth_type": {
      "is_used": true,
      "value": "value of configuration"
    },
    "enforced_mfa_frequency": {
      "is_used": true,
      "value": {
        "days": 30,
        "hours": 24
      }
    }
  },
  "content_and_sharing": {
    "enterprise_feature_settings": [
      {
        "is_used": true,
        "value": {
          "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
          "feature": {
            "id": "canvas"
          },
          "state": "enabled",
          "can_configure": true,
          "is_configured": true,
          "allowlist": [
            {
              "type": "user",
              "id": "12345"
            }
          ],
          "denylist": [
            {
              "type": "user",
              "id": "12345"
            }
          ]
        }
      }
    ],
    "sharing_item_type": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_company_definition": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_access": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_default_access": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_default_permissions_selected": {
      "is_used": true,
      "value": {
        "shared_links_option": "settings_shared_link_preview",
        "default_shared_link_type": "settings_default_shared_link_preview",
        "notes_shared_link_option": "settings_notes_option_to_edit",
        "default_notes_shared_link_type": "settings_default_notes_shared_link_to_edit"
      }
    },
    "is_open_custom_urls_disabled": {
      "is_used": true,
      "value": true
    },
    "is_custom_domain_hidden_in_shared_link": {
      "is_used": true,
      "value": true
    },
    "collaboration_permissions": {
      "is_used": true,
      "value": {
        "is_co_owner_role_enabled": true,
        "is_editor_role_enabled": true,
        "is_previewer_role_enabled": true,
        "is_previewer_uploader_role_enabled": true,
        "is_uploader_role_enabled": true,
        "is_viewer_role_enabled": true,
        "is_viewer_uploader_role_enabled": true
      }
    },
    "default_collaboration_role": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_invite_privilege_restricted": {
      "is_used": true,
      "value": true
    },
    "collaboration_restrictions": {
      "is_used": true,
      "value": [
        "internal"
      ]
    },
    "is_collaborator_invite_links_disabled": {
      "is_used": true,
      "value": true
    },
    "is_invite_group_collaborator_disabled": {
      "is_used": true,
      "value": true
    },
    "is_ownership_transfer_restricted": {
      "is_used": true,
      "value": true
    },
    "external_collaboration_status": {
      "is_used": true,
      "value": "enable_external_collaboration"
    },
    "external_collaboration_allowlist_users": {
      "is_used": true,
      "value": [
        {
          "id": 1234,
          "name": "John Doe",
          "email": "johndoe@box.com"
        }
      ]
    },
    "is_watermarking_enterprise_feature_enabled": {
      "is_used": true,
      "value": true
    },
    "is_root_content_creation_restricted": {
      "is_used": true,
      "value": true
    },
    "is_tag_creation_restricted": {
      "is_used": true,
      "value": true
    },
    "tag_creation_restriction": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_email_uploads_enabled": {
      "is_used": true,
      "value": true
    },
    "is_custom_settings_enabled": {
      "is_used": true,
      "value": true
    },
    "is_forms_login_required": {
      "is_used": true,
      "value": true
    },
    "is_forms_branding_default_enabled": {
      "is_used": true,
      "value": true
    },
    "is_cc_free_trial_active": {
      "is_used": true,
      "value": true
    },
    "is_file_request_editors_allowed": {
      "is_used": true,
      "value": true
    },
    "is_file_request_branding_default_enabled": {
      "is_used": true,
      "value": true
    },
    "is_file_request_login_required": {
      "is_used": true,
      "value": true
    },
    "is_shared_links_expiration_enabled": {
      "is_used": true,
      "value": true
    },
    "shared_links_expiration_days": {
      "is_used": true,
      "value": 1234
    },
    "is_public_shared_links_expiration_enabled": {
      "is_used": true,
      "value": true
    },
    "public_shared_links_expiration_days": {
      "is_used": true,
      "value": 1234
    },
    "shared_expiration_target": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_shared_links_expiration_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "shared_links_expiration_notification_days": {
      "is_used": true,
      "value": 1234
    },
    "is_shared_links_expiration_notification_prevented": {
      "is_used": true,
      "value": true
    },
    "is_auto_delete_enabled": {
      "is_used": true,
      "value": true
    },
    "auto_delete_days": {
      "is_used": true,
      "value": 1234
    },
    "is_auto_delete_expiration_modification_prevented": {
      "is_used": true,
      "value": true
    },
    "auto_delete_target": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_collaboration_expiration_enabled": {
      "is_used": true,
      "value": true
    },
    "collaboration_expiration_days": {
      "is_used": true,
      "value": 1234
    },
    "is_collaboration_expiration_modification_prevented": {
      "is_used": true,
      "value": true
    },
    "is_collaboration_expiration_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "collaboration_expiration_target": {
      "is_used": true,
      "value": "value of configuration"
    },
    "trash_auto_clear_time": {
      "is_used": true,
      "value": 1234
    },
    "permanent_deletion_access": {
      "is_used": true,
      "value": "value of configuration"
    },
    "permanent_deletion_allowlist_users": {
      "is_used": true,
      "value": [
        {
          "id": 1234,
          "name": "John Doe",
          "email": "johndoe@box.com"
        }
      ]
    }
  },
  "user_settings": {
    "enterprise_feature_settings": [
      {
        "is_used": true,
        "value": {
          "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
          "feature": {
            "id": "canvas"
          },
          "state": "enabled",
          "can_configure": true,
          "is_configured": true,
          "allowlist": [
            {
              "type": "user",
              "id": "12345"
            }
          ],
          "denylist": [
            {
              "type": "user",
              "id": "12345"
            }
          ]
        }
      }
    ],
    "user_invites_expiration_time_frame": {
      "is_used": true,
      "value": "7 days"
    },
    "is_username_change_restricted": {
      "is_used": true,
      "value": true
    },
    "is_box_sync_restricted_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_view_all_users_enabled_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_device_limit_exemption_enabled_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_external_collaboration_restricted_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_unlimited_storage_enabled_for_new_users": {
      "is_used": true,
      "value": true
    },
    "new_user_default_storage_limit": {
      "is_used": true,
      "value": 1234
    },
    "new_user_default_timezone": {
      "is_used": true,
      "value": "GMT-05:00 America\\/Chicago CDT"
    },
    "new_user_default_language": {
      "is_used": true,
      "value": "English (US)"
    },
    "is_enterprise_sso_required": {
      "is_used": true,
      "value": true
    },
    "is_enterprise_sso_in_testing": {
      "is_used": true,
      "value": true
    },
    "is_sso_auto_add_groups_enabled": {
      "is_used": true,
      "value": true
    },
    "is_sso_auto_add_user_to_groups_enabled": {
      "is_used": true,
      "value": true
    },
    "is_sso_auto_remove_user_from_groups_enabled": {
      "is_used": true,
      "value": true
    },
    "user_tracking_codes": {
      "is_used": true,
      "value": [
        {
          "id": 1234,
          "name": "Employee ID"
        }
      ]
    },
    "number_of_user_tracking_codes_remaining": {
      "is_used": true,
      "value": 1234
    },
    "is_instant_login_restricted": {
      "is_used": true,
      "value": true
    }
  },
  "shield": {
    "shield_rules": [
      {
        "id": "1234567890",
        "type": "shield_rule",
        "rule_category": "Malicious Content",
        "name": "Block malicious files",
        "description": "Blocks files identified as malicious content",
        "priority": "high",
        "created_at": "2012-12-12T10:53:43-08:00",
        "modified_at": "2012-12-12T10:53:43-08:00"
      }
    ]
  }
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

<h3 id="get-enterprise-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the enterprise configuration.|[EnterpriseConfiguration](#schemaenterpriseconfiguration)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-external-users">External Users</h1>

External users are collaborators from outside of your enterprise.

## Submit job to delete external users

<a id="opIdpost_external_users_submit_delete_job_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/external_users/submit_delete_job \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "external_users": [
      {
        "type": "user",
        "id": "12345"
      }
    ]
  }'
```

`POST /external_users/submit_delete_job`

Delete external users from current user enterprise. This will remove each
external user from all invited collaborations within the current enterprise.

> Body parameter

```json
{
  "external_users": [
    {
      "type": "user",
      "id": "12345"
    }
  ]
}
```

<h3 id="submit-job-to-delete-external-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ExternalUsersSubmitDeleteJobRequest](#schemaexternaluserssubmitdeletejobrequest)|true|none|
|» external_users|body|[[UserReference](#schemauserreference)]|true|List of external users to delete.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 207 Response

```json
{
  "entries": [
    {
      "user_id": "12345",
      "status": 202,
      "detail": "string"
    }
  ]
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

<h3 id="submit-job-to-delete-external-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|207|Multi-Status|Multi-status response containing the result for each external user deletion request.|[ExternalUsersSubmitDeleteJobResponse](#schemaexternaluserssubmitdeletejobresponse)|
|404|Not Found|Returns an error if the listed external users are not found, or the authenticated<br>user does not have the right permissions to delete external users.|[ClientError](#schemaclienterror)|
|default|Default|An unexpected client error.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

<h1 id="box-platform-api-shield-lists">Shield lists</h1>

Shield List allow an administrator to create a list
which will be shared between different
Shield Smart Access and Threat Detection rules.

## Get all shield lists in enterprise

<a id="opIdget_shield_lists_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shield_lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /shield_lists`

Retrieves all shield lists in the enterprise.

<h3 id="get-all-shield-lists-in-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "id": "12345678-1234-1234-1234-123456789012",
      "type": "shield_list",
      "name": "My Shield List",
      "content": {
        "type": "country_code"
      }
    }
  ]
}
```

<h3 id="get-all-shield-lists-in-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of shield list objects.|[ShieldLists](#schemashieldlists)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Create shield list

<a id="opIdpost_shield_lists_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shield_lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "name": "My Shield List",
    "description": "A list of things that are shielded",
    "content": {
      "type": "country",
      "country_codes": [
        "US",
        "PL"
      ]
    }
  }'
```

`POST /shield_lists`

Creates a shield list.

> Body parameter

```json
{
  "name": "My Shield List",
  "description": "A list of things that are shielded",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
}
```

<h3 id="create-shield-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|body|body|[ShieldListsCreate](#schemashieldlistscreate)|true|none|
|» name|body|string|true|The name of the shield list.|
|» description|body|string|false|Optional description of Shield List.|
|» content|body|object|true|none|
|» » *oneOf*|body|[ShieldListContentCountry](#schemashieldlistcontentcountry)|false|Representation of content of a Shield List that contains countries data.|
|» » *oneOf*|body|[ShieldListContentDomain](#schemashieldlistcontentdomain)|false|Representation of content of a Shield List that contains domains data.|
|» » *oneOf*|body|[ShieldListContentEmail](#schemashieldlistcontentemail)|false|Representation of content of a Shield List that contains email addresses data.|
|» » *oneOf*|body|[ShieldListContentIp](#schemashieldlistcontentip)|false|Representation of content of a Shield List that contains ip addresses data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "90fb0e17-c332-40ed-b4f9-fa8908fbbb24",
  "type": "shield_list",
  "name": "Shield List Name",
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "description": "A list of things that are shielded",
  "created_at": "2025-01-13T15:31:01.896Z",
  "updated_at": "2025-01-13T15:31:01.896Z",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
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

<h3 id="create-shield-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shield list object.|[ShieldList](#schemashieldlist)|
|409|Conflict|The shield list with this name already exists.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Get single shield list by shield list id

<a id="opIdget_shield_lists_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shield_lists/90fb0e17-c332-40ed-b4f9-fa8908fbbb24%20 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`GET /shield_lists/{shield_list_id}`

Retrieves a single shield list by its ID.

<h3 id="get-single-shield-list-by-shield-list-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shield_list_id|path|string|true|The unique identifier that represents a shield list.<br>The ID for any Shield List can be determined by the response from the endpoint<br>fetching all shield lists for the enterprise.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "90fb0e17-c332-40ed-b4f9-fa8908fbbb24",
  "type": "shield_list",
  "name": "Shield List Name",
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "description": "A list of things that are shielded",
  "created_at": "2025-01-13T15:31:01.896Z",
  "updated_at": "2025-01-13T15:31:01.896Z",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
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

<h3 id="get-single-shield-list-by-shield-list-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shield list object.|[ShieldList](#schemashieldlist)|
|404|Not Found|The shield list was not found.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Update shield list

<a id="opIdput_shield_lists_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shield_lists/90fb0e17-c332-40ed-b4f9-fa8908fbbb24%20 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0' \
  -d '{
    "name": "My Shield List",
    "description": "A list of things that are shielded",
    "content": {
      "type": "country",
      "country_codes": [
        "US",
        "PL"
      ]
    }
  }'
```

`PUT /shield_lists/{shield_list_id}`

Updates a shield list.

> Body parameter

```json
{
  "name": "My Shield List",
  "description": "A list of things that are shielded",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
}
```

<h3 id="update-shield-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shield_list_id|path|string|true|The unique identifier that represents a shield list.<br>The ID for any Shield List can be determined by the response from the endpoint<br>fetching all shield lists for the enterprise.|
|body|body|[ShieldListsUpdate](#schemashieldlistsupdate)|false|none|
|» name|body|string|true|The name of the shield list.|
|» description|body|string|false|Optional description of Shield List.|
|» content|body|object|true|none|
|» » *oneOf*|body|[ShieldListContentCountry](#schemashieldlistcontentcountry)|false|Representation of content of a Shield List that contains countries data.|
|» » *oneOf*|body|[ShieldListContentDomain](#schemashieldlistcontentdomain)|false|Representation of content of a Shield List that contains domains data.|
|» » *oneOf*|body|[ShieldListContentEmail](#schemashieldlistcontentemail)|false|Representation of content of a Shield List that contains email addresses data.|
|» » *oneOf*|body|[ShieldListContentIp](#schemashieldlistcontentip)|false|Representation of content of a Shield List that contains ip addresses data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

> Example responses

> 200 Response

```json
{
  "id": "90fb0e17-c332-40ed-b4f9-fa8908fbbb24",
  "type": "shield_list",
  "name": "Shield List Name",
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "description": "A list of things that are shielded",
  "created_at": "2025-01-13T15:31:01.896Z",
  "updated_at": "2025-01-13T15:31:01.896Z",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
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

<h3 id="update-shield-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the shield list object.|[ShieldList](#schemashieldlist)|
|404|Not Found|The shield list was not found.|[ClientError](#schemaclienterror)|
|409|Conflict|The shield list with this name already exists.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

## Delete single shield list by shield list id

<a id="opIddelete_shield_lists_id_v2025.0"></a>

> Code samples

```bash
curl https://api.box.com/2.0/shield_lists/90fb0e17-c332-40ed-b4f9-fa8908fbbb24%20 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'box-version: 2025.0'
```

`DELETE /shield_lists/{shield_list_id}`

Delete a single shield list by its ID.

<h3 id="delete-single-shield-list-by-shield-list-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|box-version|header|string|true|Version header.|
|shield_list_id|path|string|true|The unique identifier that represents a shield list.<br>The ID for any Shield List can be determined by the response from the endpoint<br>fetching all shield lists for the enterprise.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|box-version|2025.0|

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

<h3 id="delete-single-shield-list-by-shield-list-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Shield List correctly removed. No content in response.|None|
|400|Bad Request|The shield list is assigned to some rules and cannot be removed.|[ClientError](#schemaclienterror)|
|404|Not Found|The shield list was not found.|[ClientError](#schemaclienterror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2Security
</aside>

# Schemas

<h2 id="tocS_Archive">Archive</h2>
<!-- backwards compatibility -->
<a id="schemaarchive"></a>
<a id="schema_Archive"></a>
<a id="tocSarchive"></a>
<a id="tocsarchive"></a>

```json
{
  "id": "12345",
  "type": "archive",
  "name": "Archive",
  "size": 123456789,
  "description": "This is an archive for important documents.",
  "owned_by": {
    "id": "12345",
    "type": "user"
  }
}
```

An archive is a folder dedicated to storing content that is
redundant, outdated, or trivial. Content in an archive is not accessible to its
owner and collaborators.
To use this feature, you must request GCM scope for your Box application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represents an archive.|
|type|string|true|none|The value is always `archive`.|
|name|string|true|none|The name of the archive.<br><br>The following restrictions to the archive name apply: names containing<br>non-printable ASCII characters, forward and backward slashes<br>(`/`, `\`), names with trailing spaces, and names `.` and `..` are<br>not allowed.|
|size|integer(int64)|true|none|The size of the archive in bytes.|
|description|string \| null|true|none|The description of the archive.|
|owned_by|object|true|none|The part of an archive API response that describes the user who owns the archive.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|archive|

<h2 id="tocS_Archives">Archives</h2>
<!-- backwards compatibility -->
<a id="schemaarchives"></a>
<a id="schema_Archives"></a>
<a id="tocSarchives"></a>
<a id="tocsarchives"></a>

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "archive",
      "name": "Archive",
      "size": 123456789,
      "description": "This is an archive for important documents.",
      "owned_by": {
        "id": "12345",
        "type": "user"
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A list of archives.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Archive](#schemaarchive)]|false|none|A list in which each entry represents an archive object.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

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

<h2 id="tocS_CollaborationPermissions">CollaborationPermissions</h2>
<!-- backwards compatibility -->
<a id="schemacollaborationpermissions"></a>
<a id="schema_CollaborationPermissions"></a>
<a id="tocScollaborationpermissions"></a>
<a id="tocscollaborationpermissions"></a>

```json
{
  "is_co_owner_role_enabled": true,
  "is_editor_role_enabled": true,
  "is_previewer_role_enabled": true,
  "is_previewer_uploader_role_enabled": true,
  "is_uploader_role_enabled": true,
  "is_viewer_role_enabled": true,
  "is_viewer_uploader_role_enabled": true
}
```

The collaboration permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_co_owner_role_enabled|boolean|false|none|The co-owner role is enabled for collaboration.|
|is_editor_role_enabled|boolean|false|none|The editor role is enabled for collaboration.|
|is_previewer_role_enabled|boolean|false|none|The previewer role is enabled for collaboration.|
|is_previewer_uploader_role_enabled|boolean|false|none|The previewer uploader role is enabled for collaboration.|
|is_uploader_role_enabled|boolean|false|none|The uploader role is enabled for collaboration.|
|is_viewer_role_enabled|boolean|false|none|The viewer role is enabled for collaboration.|
|is_viewer_uploader_role_enabled|boolean|false|none|The viewer uploader role is enabled for collaboration.|

<h2 id="tocS_CustomSessionDurationGroupItem">CustomSessionDurationGroupItem</h2>
<!-- backwards compatibility -->
<a id="schemacustomsessiondurationgroupitem"></a>
<a id="schema_CustomSessionDurationGroupItem"></a>
<a id="tocScustomsessiondurationgroupitem"></a>
<a id="tocscustomsessiondurationgroupitem"></a>

```json
{
  "id": "1234",
  "name": "Group Name"
}
```

A custom session duration group item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Group ID (numerical).|
|name|string|false|none|Group Name.|

<h2 id="tocS_DocGenBatch--Base">DocGenBatch--Base</h2>
<!-- backwards compatibility -->
<a id="schemadocgenbatch--base"></a>
<a id="schema_DocGenBatch--Base"></a>
<a id="tocSdocgenbatch--base"></a>
<a id="tocsdocgenbatch--base"></a>

```json
{
  "id": "12345",
  "type": "docgen_batch"
}
```

The basic representation of a Box Doc Gen batch object. A Box Doc Gen batch contains one or more Box Doc Gen jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represents a Box Doc Gen batch.|
|type|string|true|none|The value will always be `docgen_batch`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|docgen_batch|

<h2 id="tocS_DocGenBatchCreateRequest">DocGenBatchCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocgenbatchcreaterequest"></a>
<a id="schema_DocGenBatchCreateRequest"></a>
<a id="tocSdocgenbatchcreaterequest"></a>
<a id="tocsdocgenbatchcreaterequest"></a>

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  },
  "file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "input_source": "api",
  "destination_folder": {
    "type": "folder",
    "id": "42037322"
  },
  "output_type": "docx",
  "document_generation_data": [
    {
      "generated_file_name": "New_Template",
      "user_input": {
        "name": "Aaron Levie"
      },
      "external_id": "111222_externalID"
    }
  ]
}
```

The schema for creating a Box Doc Gen job batch request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|true|none|none|
|file_version|object|false|none|none|
|input_source|string|true|none|Source of input. The value has to be `api` for all the API-based document generation requests.|
|destination_folder|object|true|none|none|
|output_type|string|true|none|Type of the output file.|
|document_generation_data|[[DocGenDocumentGenerationData](#schemadocgendocumentgenerationdata)]|true|none|none|

<h2 id="tocS_DocGenDocumentGenerationData">DocGenDocumentGenerationData</h2>
<!-- backwards compatibility -->
<a id="schemadocgendocumentgenerationdata"></a>
<a id="schema_DocGenDocumentGenerationData"></a>
<a id="tocSdocgendocumentgenerationdata"></a>
<a id="tocsdocgendocumentgenerationdata"></a>

```json
{
  "generated_file_name": "New_Template",
  "user_input": {
    "name": "Aaron Levie"
  },
  "external_id": "111222_externalID"
}
```

The schema for for creating a Box Doc Gen job request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|generated_file_name|string|true|none|File name of the output file.|
|user_input|object|true|none|none|
|external_id|string|false|none|An optional identifier supplied by the caller for this Box Doc Gen job.<br>The value is returned on job responses for correlation only. It is not<br>a Box resource ID, is not required to be unique, and cannot be used to<br>look up the job.|

<h2 id="tocS_DocGenJob">DocGenJob</h2>
<!-- backwards compatibility -->
<a id="schemadocgenjob"></a>
<a id="schema_DocGenJob"></a>
<a id="tocSdocgenjob"></a>
<a id="tocsdocgenjob"></a>

```json
{
  "id": "12345",
  "type": "docgen_job",
  "external_id": "111222_externalID",
  "batch": {
    "id": "12345",
    "type": "docgen_batch"
  },
  "template_file": {
    "type": "file",
    "id": "42037322"
  },
  "template_file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "output_file": {
    "type": "file",
    "id": "42037322"
  },
  "output_file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "status": "completed",
  "output_type": "docx",
  "failures": {
    "errors": [
      "The tag 'customer_name' was not provided in the input data."
    ],
    "warnings": [
      "The tag 'optional_field' was provided but not used in the template."
    ]
  }
}
```

A standard representation of a Box Doc Gen job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represent a Box Doc Gen job.|
|type|string|true|none|The value will always be `docgen_job`.|
|external_id|string|false|none|An optional identifier supplied by the caller when the Box Doc Gen<br>job was created. Returned for correlation only. It is not a Box<br>resource ID, is not required to be unique, and cannot be used to<br>look up the job.|
|batch|object|true|none|none|
|template_file|object|true|none|none|
|template_file_version|object|true|none|none|
|output_file|object|false|none|none|
|output_file_version|object|false|none|none|
|status|string|true|none|Status of the job.|
|output_type|string|true|none|Type of the generated file.|
|failures|object \| null|false|none|Errors and warnings that occurred during document generation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|docgen_job|
|status|submitted|
|status|completed|
|status|failed|
|status|completed_with_error|
|status|pending|

<h2 id="tocS_DocGenJob--Base">DocGenJob--Base</h2>
<!-- backwards compatibility -->
<a id="schemadocgenjob--base"></a>
<a id="schema_DocGenJob--Base"></a>
<a id="tocSdocgenjob--base"></a>
<a id="tocsdocgenjob--base"></a>

```json
{
  "id": "12345",
  "type": "docgen_job"
}
```

The basic representation of a Box Doc Gen job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represent a Box Doc Gen job.|
|type|string|true|none|The value will always be `docgen_job`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|docgen_job|

<h2 id="tocS_DocGenJob--Full">DocGenJob--Full</h2>
<!-- backwards compatibility -->
<a id="schemadocgenjob--full"></a>
<a id="schema_DocGenJob--Full"></a>
<a id="tocSdocgenjob--full"></a>
<a id="tocsdocgenjob--full"></a>

```json
{
  "id": "12345",
  "type": "docgen_job",
  "external_id": "111222_externalID",
  "batch": {
    "id": "12345",
    "type": "docgen_batch"
  },
  "template_file": {
    "type": "file",
    "id": "42037322"
  },
  "template_file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "output_file": {
    "type": "file",
    "id": "42037322"
  },
  "output_file_version": {
    "id": "12345",
    "type": "file_version"
  },
  "status": "completed",
  "output_type": "docx",
  "failures": {
    "errors": [
      "The tag 'customer_name' was not provided in the input data."
    ],
    "warnings": [
      "The tag 'optional_field' was provided but not used in the template."
    ]
  },
  "created_at": "2022-05-11T10:56:11-07:00",
  "created_by": {
    "id": "11446498",
    "type": "user"
  },
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "source": "api"
}
```

A full representation of a Box Doc Gen job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represent a Box Doc Gen job.|
|type|string|true|none|The value will always be `docgen_job`.|
|external_id|string|false|none|An optional identifier supplied by the caller when the Box Doc Gen<br>job was created. Returned for correlation only. It is not a Box<br>resource ID, is not required to be unique, and cannot be used to<br>look up the job.|
|batch|object|true|none|none|
|template_file|object|true|none|none|
|template_file_version|object|true|none|none|
|output_file|object|false|none|none|
|output_file_version|object|false|none|none|
|status|string|true|none|Status of the job.|
|output_type|string|true|none|Type of the generated file.|
|failures|object \| null|false|none|Errors and warnings that occurred during document generation.|
|created_at|string|false|read-only|Time of job creation.|
|created_by|object|true|none|none|
|enterprise|object|true|none|none|
|source|string|true|read-only|Source of the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|docgen_job|
|status|submitted|
|status|completed|
|status|failed|
|status|completed_with_error|
|status|pending|

<h2 id="tocS_DocGenJobs">DocGenJobs</h2>
<!-- backwards compatibility -->
<a id="schemadocgenjobs"></a>
<a id="schema_DocGenJobs"></a>
<a id="tocSdocgenjobs"></a>
<a id="tocsdocgenjobs"></a>

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "id": "12345",
      "type": "docgen_job",
      "external_id": "111222_externalID",
      "batch": {
        "id": "12345",
        "type": "docgen_batch"
      },
      "template_file": {
        "type": "file",
        "id": "42037322"
      },
      "template_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "output_file": {
        "type": "file",
        "id": "42037322"
      },
      "output_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "status": "completed",
      "output_type": "docx",
      "failures": {
        "errors": [
          "The tag 'customer_name' was not provided in the input data."
        ],
        "warnings": [
          "The tag 'optional_field' was provided but not used in the template."
        ]
      }
    }
  ]
}
```

A list of Box Doc Gen jobs with a standard set of parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|
|entries|[[DocGenJob](#schemadocgenjob)]|false|none|List of jobs.|

<h2 id="tocS_DocGenJobs--Full">DocGenJobs--Full</h2>
<!-- backwards compatibility -->
<a id="schemadocgenjobs--full"></a>
<a id="schema_DocGenJobs--Full"></a>
<a id="tocSdocgenjobs--full"></a>
<a id="tocsdocgenjobs--full"></a>

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "id": "12345",
      "type": "docgen_job",
      "external_id": "111222_externalID",
      "batch": {
        "id": "12345",
        "type": "docgen_batch"
      },
      "template_file": {
        "type": "file",
        "id": "42037322"
      },
      "template_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "output_file": {
        "type": "file",
        "id": "42037322"
      },
      "output_file_version": {
        "id": "12345",
        "type": "file_version"
      },
      "status": "completed",
      "output_type": "docx",
      "failures": {
        "errors": [
          "The tag 'customer_name' was not provided in the input data."
        ],
        "warnings": [
          "The tag 'optional_field' was provided but not used in the template."
        ]
      },
      "created_at": "2022-05-11T10:56:11-07:00",
      "created_by": {
        "id": "11446498",
        "type": "user"
      },
      "enterprise": {
        "id": "1910967",
        "type": "enterprise"
      },
      "source": "api"
    }
  ]
}
```

A list of Box Doc Gen jobs with a full set of parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|
|entries|[[DocGenJob--Full](#schemadocgenjob--full)]|false|none|List of jobs.|

<h2 id="tocS_DocGenTag">DocGenTag</h2>
<!-- backwards compatibility -->
<a id="schemadocgentag"></a>
<a id="schema_DocGenTag"></a>
<a id="tocSdocgentag"></a>
<a id="tocsdocgentag"></a>

```json
{
  "tag_content": "{{item.name}}",
  "tag_type": "text",
  "json_paths": [
    "products",
    "products.name"
  ]
}
```

A Box Doc Gen template tag object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag_content|string|true|read-only|The content of the tag.|
|tag_type|string|true|read-only|Type of the tag.|
|json_paths|[string]|true|read-only|List of the paths.|

#### Enumerated Values

|Property|Value|
|---|---|
|tag_type|text|
|tag_type|arithmetic|
|tag_type|conditional|
|tag_type|for-loop|
|tag_type|table-loop|
|tag_type|image|

<h2 id="tocS_DocGenTags">DocGenTags</h2>
<!-- backwards compatibility -->
<a id="schemadocgentags"></a>
<a id="schema_DocGenTags"></a>
<a id="tocSdocgentags"></a>
<a id="tocsdocgentags"></a>

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "tag_content": "{{item.name}}",
      "tag_type": "text",
      "json_paths": [
        "products",
        "products.name"
      ]
    }
  ]
}
```

A list of Box Doc Gen tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|
|entries|[[DocGenTag](#schemadocgentag)]|false|none|List of tags.|

<h2 id="tocS_DocGenTagsProcessingMessage">DocGenTagsProcessingMessage</h2>
<!-- backwards compatibility -->
<a id="schemadocgentagsprocessingmessage"></a>
<a id="schema_DocGenTagsProcessingMessage"></a>
<a id="tocSdocgentagsprocessingmessage"></a>
<a id="tocsdocgentagsprocessingmessage"></a>

```json
{
  "message": "Processing tags for this file."
}
```

A message informing the user that document tags are still being processed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|read-only|A message informing the user that document tags are still being processed.|

<h2 id="tocS_DocGenTemplate">DocGenTemplate</h2>
<!-- backwards compatibility -->
<a id="schemadocgentemplate"></a>
<a id="schema_DocGenTemplate"></a>
<a id="tocSdocgentemplate"></a>
<a id="tocsdocgentemplate"></a>

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  },
  "file_name": "Official contract"
}
```

A Box Doc Gen template object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|
|file_name|string \| null|false|none|The name of the template.|

<h2 id="tocS_DocGenTemplate--Base">DocGenTemplate--Base</h2>
<!-- backwards compatibility -->
<a id="schemadocgentemplate--base"></a>
<a id="schema_DocGenTemplate--Base"></a>
<a id="tocSdocgentemplate--base"></a>
<a id="tocsdocgentemplate--base"></a>

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  }
}
```

A base representation of a Box Doc Gen template, used when
nested within another resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|false|none|none|

<h2 id="tocS_DocGenTemplateCreateRequest">DocGenTemplateCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadocgentemplatecreaterequest"></a>
<a id="schema_DocGenTemplateCreateRequest"></a>
<a id="tocSdocgentemplatecreaterequest"></a>
<a id="tocsdocgentemplatecreaterequest"></a>

```json
{
  "file": {
    "type": "file",
    "id": "42037322"
  }
}
```

The schema for marking document as Box Doc Gen template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|object|true|none|none|

<h2 id="tocS_DocGenTemplates">DocGenTemplates</h2>
<!-- backwards compatibility -->
<a id="schemadocgentemplates"></a>
<a id="schema_DocGenTemplates"></a>
<a id="tocSdocgentemplates"></a>
<a id="tocsdocgentemplates"></a>

```json
{
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii",
  "prev_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVih",
  "entries": [
    {
      "file": {
        "type": "file",
        "id": "42037322"
      },
      "file_name": "Official contract"
    }
  ]
}
```

List of Box Doc Gen templates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|
|prev_marker|string \| null|false|none|The marker for the start of the previous page of results.|
|entries|[[DocGenTemplate](#schemadocgentemplate)]|false|none|A list of templates.|

<h2 id="tocS_EnterpriseConfiguration">EnterpriseConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfiguration"></a>
<a id="schema_EnterpriseConfiguration"></a>
<a id="tocSenterpriseconfiguration"></a>
<a id="tocsenterpriseconfiguration"></a>

```json
{
  "id": "11446498",
  "type": "enterprise_configuration",
  "security": {
    "is_managed_user_signup_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_signup_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_signup_corporate_email_enabled": {
      "is_used": true,
      "value": true
    },
    "is_new_user_notification_daily_digest_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_email_change_disabled": {
      "is_used": true,
      "value": true
    },
    "is_multi_factor_auth_required": {
      "is_used": true,
      "value": true
    },
    "is_weak_password_prevention_enabled": {
      "is_used": true,
      "value": true
    },
    "is_password_leak_detection_enabled": {
      "is_used": true,
      "value": true
    },
    "last_password_reset_at": {
      "is_used": true,
      "value": "2012-12-12T10:53:43-08:00"
    },
    "is_password_request_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "is_password_change_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "is_strong_password_for_ext_collab_enabled": {
      "is_used": true,
      "value": true
    },
    "is_managed_user_migration_disabled": {
      "is_used": true,
      "value": true
    },
    "join_link": {
      "is_used": true,
      "value": "value of configuration"
    },
    "join_url": {
      "is_used": true,
      "value": "value of configuration"
    },
    "failed_login_attempts_to_trigger_admin_notification": {
      "is_used": true,
      "value": 1234
    },
    "password_min_length": {
      "is_used": true,
      "value": 1234
    },
    "password_min_uppercase_characters": {
      "is_used": true,
      "value": 1234
    },
    "password_min_numeric_characters": {
      "is_used": true,
      "value": 1234
    },
    "password_min_special_characters": {
      "is_used": true,
      "value": 1234
    },
    "password_reset_frequency": {
      "is_used": true,
      "value": "value of configuration"
    },
    "previous_password_reuse_limit": {
      "is_used": true,
      "value": "value of configuration"
    },
    "session_duration": {
      "is_used": true,
      "value": "value of configuration"
    },
    "external_collab_multi_factor_auth_settings": {
      "is_used": true,
      "value": {
        "denylist_domains": [
          "example.com"
        ],
        "denylist_emails": [
          "spam@example.com"
        ],
        "allowlist_domains": [
          "example.com"
        ],
        "allowlist_emails": [
          "mail@example.com"
        ],
        "state": "enabled",
        "scheduled_status": "inprogress",
        "scheduled_at": "2012-12-12T10:53:43-08:00",
        "factor_type_settings": "totp"
      }
    },
    "keysafe": {
      "is_used": true,
      "value": {
        "keysafe_enabled": true,
        "cloud_provider": "",
        "key_id": "1234",
        "account_id": "1234",
        "location_id": "1234",
        "project_id": "1234",
        "keyring_id": "1234"
      }
    },
    "is_custom_session_duration_enabled": {
      "is_used": true,
      "value": true
    },
    "custom_session_duration_value": {
      "is_used": true,
      "value": "value of configuration"
    },
    "custom_session_duration_groups": {
      "is_used": true,
      "value": [
        {
          "id": "1234",
          "name": "Group Name"
        }
      ]
    },
    "multi_factor_auth_type": {
      "is_used": true,
      "value": "value of configuration"
    },
    "enforced_mfa_frequency": {
      "is_used": true,
      "value": {
        "days": 30,
        "hours": 24
      }
    }
  },
  "content_and_sharing": {
    "enterprise_feature_settings": [
      {
        "is_used": true,
        "value": {
          "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
          "feature": {
            "id": "canvas"
          },
          "state": "enabled",
          "can_configure": true,
          "is_configured": true,
          "allowlist": [
            {
              "type": "user",
              "id": "12345"
            }
          ],
          "denylist": [
            {
              "type": "user",
              "id": "12345"
            }
          ]
        }
      }
    ],
    "sharing_item_type": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_company_definition": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_access": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_default_access": {
      "is_used": true,
      "value": "value of configuration"
    },
    "shared_link_default_permissions_selected": {
      "is_used": true,
      "value": {
        "shared_links_option": "settings_shared_link_preview",
        "default_shared_link_type": "settings_default_shared_link_preview",
        "notes_shared_link_option": "settings_notes_option_to_edit",
        "default_notes_shared_link_type": "settings_default_notes_shared_link_to_edit"
      }
    },
    "is_open_custom_urls_disabled": {
      "is_used": true,
      "value": true
    },
    "is_custom_domain_hidden_in_shared_link": {
      "is_used": true,
      "value": true
    },
    "collaboration_permissions": {
      "is_used": true,
      "value": {
        "is_co_owner_role_enabled": true,
        "is_editor_role_enabled": true,
        "is_previewer_role_enabled": true,
        "is_previewer_uploader_role_enabled": true,
        "is_uploader_role_enabled": true,
        "is_viewer_role_enabled": true,
        "is_viewer_uploader_role_enabled": true
      }
    },
    "default_collaboration_role": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_invite_privilege_restricted": {
      "is_used": true,
      "value": true
    },
    "collaboration_restrictions": {
      "is_used": true,
      "value": [
        "internal"
      ]
    },
    "is_collaborator_invite_links_disabled": {
      "is_used": true,
      "value": true
    },
    "is_invite_group_collaborator_disabled": {
      "is_used": true,
      "value": true
    },
    "is_ownership_transfer_restricted": {
      "is_used": true,
      "value": true
    },
    "external_collaboration_status": {
      "is_used": true,
      "value": "enable_external_collaboration"
    },
    "external_collaboration_allowlist_users": {
      "is_used": true,
      "value": [
        {
          "id": 1234,
          "name": "John Doe",
          "email": "johndoe@box.com"
        }
      ]
    },
    "is_watermarking_enterprise_feature_enabled": {
      "is_used": true,
      "value": true
    },
    "is_root_content_creation_restricted": {
      "is_used": true,
      "value": true
    },
    "is_tag_creation_restricted": {
      "is_used": true,
      "value": true
    },
    "tag_creation_restriction": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_email_uploads_enabled": {
      "is_used": true,
      "value": true
    },
    "is_custom_settings_enabled": {
      "is_used": true,
      "value": true
    },
    "is_forms_login_required": {
      "is_used": true,
      "value": true
    },
    "is_forms_branding_default_enabled": {
      "is_used": true,
      "value": true
    },
    "is_cc_free_trial_active": {
      "is_used": true,
      "value": true
    },
    "is_file_request_editors_allowed": {
      "is_used": true,
      "value": true
    },
    "is_file_request_branding_default_enabled": {
      "is_used": true,
      "value": true
    },
    "is_file_request_login_required": {
      "is_used": true,
      "value": true
    },
    "is_shared_links_expiration_enabled": {
      "is_used": true,
      "value": true
    },
    "shared_links_expiration_days": {
      "is_used": true,
      "value": 1234
    },
    "is_public_shared_links_expiration_enabled": {
      "is_used": true,
      "value": true
    },
    "public_shared_links_expiration_days": {
      "is_used": true,
      "value": 1234
    },
    "shared_expiration_target": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_shared_links_expiration_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "shared_links_expiration_notification_days": {
      "is_used": true,
      "value": 1234
    },
    "is_shared_links_expiration_notification_prevented": {
      "is_used": true,
      "value": true
    },
    "is_auto_delete_enabled": {
      "is_used": true,
      "value": true
    },
    "auto_delete_days": {
      "is_used": true,
      "value": 1234
    },
    "is_auto_delete_expiration_modification_prevented": {
      "is_used": true,
      "value": true
    },
    "auto_delete_target": {
      "is_used": true,
      "value": "value of configuration"
    },
    "is_collaboration_expiration_enabled": {
      "is_used": true,
      "value": true
    },
    "collaboration_expiration_days": {
      "is_used": true,
      "value": 1234
    },
    "is_collaboration_expiration_modification_prevented": {
      "is_used": true,
      "value": true
    },
    "is_collaboration_expiration_notification_enabled": {
      "is_used": true,
      "value": true
    },
    "collaboration_expiration_target": {
      "is_used": true,
      "value": "value of configuration"
    },
    "trash_auto_clear_time": {
      "is_used": true,
      "value": 1234
    },
    "permanent_deletion_access": {
      "is_used": true,
      "value": "value of configuration"
    },
    "permanent_deletion_allowlist_users": {
      "is_used": true,
      "value": [
        {
          "id": 1234,
          "name": "John Doe",
          "email": "johndoe@box.com"
        }
      ]
    }
  },
  "user_settings": {
    "enterprise_feature_settings": [
      {
        "is_used": true,
        "value": {
          "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
          "feature": {
            "id": "canvas"
          },
          "state": "enabled",
          "can_configure": true,
          "is_configured": true,
          "allowlist": [
            {
              "type": "user",
              "id": "12345"
            }
          ],
          "denylist": [
            {
              "type": "user",
              "id": "12345"
            }
          ]
        }
      }
    ],
    "user_invites_expiration_time_frame": {
      "is_used": true,
      "value": "7 days"
    },
    "is_username_change_restricted": {
      "is_used": true,
      "value": true
    },
    "is_box_sync_restricted_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_view_all_users_enabled_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_device_limit_exemption_enabled_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_external_collaboration_restricted_for_new_users": {
      "is_used": true,
      "value": true
    },
    "is_unlimited_storage_enabled_for_new_users": {
      "is_used": true,
      "value": true
    },
    "new_user_default_storage_limit": {
      "is_used": true,
      "value": 1234
    },
    "new_user_default_timezone": {
      "is_used": true,
      "value": "GMT-05:00 America\\/Chicago CDT"
    },
    "new_user_default_language": {
      "is_used": true,
      "value": "English (US)"
    },
    "is_enterprise_sso_required": {
      "is_used": true,
      "value": true
    },
    "is_enterprise_sso_in_testing": {
      "is_used": true,
      "value": true
    },
    "is_sso_auto_add_groups_enabled": {
      "is_used": true,
      "value": true
    },
    "is_sso_auto_add_user_to_groups_enabled": {
      "is_used": true,
      "value": true
    },
    "is_sso_auto_remove_user_from_groups_enabled": {
      "is_used": true,
      "value": true
    },
    "user_tracking_codes": {
      "is_used": true,
      "value": [
        {
          "id": 1234,
          "name": "Employee ID"
        }
      ]
    },
    "number_of_user_tracking_codes_remaining": {
      "is_used": true,
      "value": 1234
    },
    "is_instant_login_restricted": {
      "is_used": true,
      "value": true
    }
  },
  "shield": {
    "shield_rules": [
      {
        "id": "1234567890",
        "type": "shield_rule",
        "rule_category": "Malicious Content",
        "name": "Block malicious files",
        "description": "Blocks files identified as malicious content",
        "priority": "high",
        "created_at": "2012-12-12T10:53:43-08:00",
        "modified_at": "2012-12-12T10:53:43-08:00"
      }
    ]
  }
}
```

The enterprise configuration for a given enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier of the enterprise configuration which is the ID of the enterprise.|
|type|string|false|none|The value will always be `enterprise_configuration`.|
|security|object|false|none|none|
|content_and_sharing|object|false|none|none|
|user_settings|object|false|none|none|
|shield|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enterprise_configuration|

<h2 id="tocS_EnterpriseConfigurationContentAndSharing">EnterpriseConfigurationContentAndSharing</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationcontentandsharing"></a>
<a id="schema_EnterpriseConfigurationContentAndSharing"></a>
<a id="tocSenterpriseconfigurationcontentandsharing"></a>
<a id="tocsenterpriseconfigurationcontentandsharing"></a>

```json
{
  "enterprise_feature_settings": [
    {
      "is_used": true,
      "value": {
        "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
        "feature": {
          "id": "canvas"
        },
        "state": "enabled",
        "can_configure": true,
        "is_configured": true,
        "allowlist": [
          {
            "type": "user",
            "id": "12345"
          }
        ],
        "denylist": [
          {
            "type": "user",
            "id": "12345"
          }
        ]
      }
    }
  ],
  "sharing_item_type": {
    "is_used": true,
    "value": "value of configuration"
  },
  "shared_link_company_definition": {
    "is_used": true,
    "value": "value of configuration"
  },
  "shared_link_access": {
    "is_used": true,
    "value": "value of configuration"
  },
  "shared_link_default_access": {
    "is_used": true,
    "value": "value of configuration"
  },
  "shared_link_default_permissions_selected": {
    "is_used": true,
    "value": {
      "shared_links_option": "settings_shared_link_preview",
      "default_shared_link_type": "settings_default_shared_link_preview",
      "notes_shared_link_option": "settings_notes_option_to_edit",
      "default_notes_shared_link_type": "settings_default_notes_shared_link_to_edit"
    }
  },
  "is_open_custom_urls_disabled": {
    "is_used": true,
    "value": true
  },
  "is_custom_domain_hidden_in_shared_link": {
    "is_used": true,
    "value": true
  },
  "collaboration_permissions": {
    "is_used": true,
    "value": {
      "is_co_owner_role_enabled": true,
      "is_editor_role_enabled": true,
      "is_previewer_role_enabled": true,
      "is_previewer_uploader_role_enabled": true,
      "is_uploader_role_enabled": true,
      "is_viewer_role_enabled": true,
      "is_viewer_uploader_role_enabled": true
    }
  },
  "default_collaboration_role": {
    "is_used": true,
    "value": "value of configuration"
  },
  "is_invite_privilege_restricted": {
    "is_used": true,
    "value": true
  },
  "collaboration_restrictions": {
    "is_used": true,
    "value": [
      "internal"
    ]
  },
  "is_collaborator_invite_links_disabled": {
    "is_used": true,
    "value": true
  },
  "is_invite_group_collaborator_disabled": {
    "is_used": true,
    "value": true
  },
  "is_ownership_transfer_restricted": {
    "is_used": true,
    "value": true
  },
  "external_collaboration_status": {
    "is_used": true,
    "value": "enable_external_collaboration"
  },
  "external_collaboration_allowlist_users": {
    "is_used": true,
    "value": [
      {
        "id": 1234,
        "name": "John Doe",
        "email": "johndoe@box.com"
      }
    ]
  },
  "is_watermarking_enterprise_feature_enabled": {
    "is_used": true,
    "value": true
  },
  "is_root_content_creation_restricted": {
    "is_used": true,
    "value": true
  },
  "is_tag_creation_restricted": {
    "is_used": true,
    "value": true
  },
  "tag_creation_restriction": {
    "is_used": true,
    "value": "value of configuration"
  },
  "is_email_uploads_enabled": {
    "is_used": true,
    "value": true
  },
  "is_custom_settings_enabled": {
    "is_used": true,
    "value": true
  },
  "is_forms_login_required": {
    "is_used": true,
    "value": true
  },
  "is_forms_branding_default_enabled": {
    "is_used": true,
    "value": true
  },
  "is_cc_free_trial_active": {
    "is_used": true,
    "value": true
  },
  "is_file_request_editors_allowed": {
    "is_used": true,
    "value": true
  },
  "is_file_request_branding_default_enabled": {
    "is_used": true,
    "value": true
  },
  "is_file_request_login_required": {
    "is_used": true,
    "value": true
  },
  "is_shared_links_expiration_enabled": {
    "is_used": true,
    "value": true
  },
  "shared_links_expiration_days": {
    "is_used": true,
    "value": 1234
  },
  "is_public_shared_links_expiration_enabled": {
    "is_used": true,
    "value": true
  },
  "public_shared_links_expiration_days": {
    "is_used": true,
    "value": 1234
  },
  "shared_expiration_target": {
    "is_used": true,
    "value": "value of configuration"
  },
  "is_shared_links_expiration_notification_enabled": {
    "is_used": true,
    "value": true
  },
  "shared_links_expiration_notification_days": {
    "is_used": true,
    "value": 1234
  },
  "is_shared_links_expiration_notification_prevented": {
    "is_used": true,
    "value": true
  },
  "is_auto_delete_enabled": {
    "is_used": true,
    "value": true
  },
  "auto_delete_days": {
    "is_used": true,
    "value": 1234
  },
  "is_auto_delete_expiration_modification_prevented": {
    "is_used": true,
    "value": true
  },
  "auto_delete_target": {
    "is_used": true,
    "value": "value of configuration"
  },
  "is_collaboration_expiration_enabled": {
    "is_used": true,
    "value": true
  },
  "collaboration_expiration_days": {
    "is_used": true,
    "value": 1234
  },
  "is_collaboration_expiration_modification_prevented": {
    "is_used": true,
    "value": true
  },
  "is_collaboration_expiration_notification_enabled": {
    "is_used": true,
    "value": true
  },
  "collaboration_expiration_target": {
    "is_used": true,
    "value": "value of configuration"
  },
  "trash_auto_clear_time": {
    "is_used": true,
    "value": 1234
  },
  "permanent_deletion_access": {
    "is_used": true,
    "value": "value of configuration"
  },
  "permanent_deletion_allowlist_users": {
    "is_used": true,
    "value": [
      {
        "id": 1234,
        "name": "John Doe",
        "email": "johndoe@box.com"
      }
    ]
  }
}
```

The enterprise configuration for the content and sharing category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enterprise_feature_settings|[[EnterpriseFeatureSettingsItem](#schemaenterprisefeaturesettingsitem)]|false|none|none|
|sharing_item_type|object|false|none|none|
|shared_link_company_definition|object|false|none|none|
|shared_link_access|object|false|none|none|
|shared_link_default_access|object|false|none|none|
|shared_link_default_permissions_selected|object|false|none|none|
|is_open_custom_urls_disabled|object|false|none|none|
|is_custom_domain_hidden_in_shared_link|object|false|none|none|
|collaboration_permissions|object|false|none|none|
|default_collaboration_role|object|false|none|none|
|is_invite_privilege_restricted|object|false|none|none|
|collaboration_restrictions|object|false|none|none|
|is_collaborator_invite_links_disabled|object|false|none|none|
|is_invite_group_collaborator_disabled|object|false|none|none|
|is_ownership_transfer_restricted|object|false|none|none|
|external_collaboration_status|object|false|none|none|
|external_collaboration_allowlist_users|object|false|none|none|
|is_watermarking_enterprise_feature_enabled|object|false|none|none|
|is_root_content_creation_restricted|object|false|none|none|
|is_tag_creation_restricted|object|false|none|none|
|tag_creation_restriction|object|false|none|none|
|is_email_uploads_enabled|object|false|none|none|
|is_custom_settings_enabled|object|false|none|none|
|is_forms_login_required|object|false|none|none|
|is_forms_branding_default_enabled|object|false|none|none|
|is_cc_free_trial_active|object|false|none|none|
|is_file_request_editors_allowed|object|false|none|none|
|is_file_request_branding_default_enabled|object|false|none|none|
|is_file_request_login_required|object|false|none|none|
|is_shared_links_expiration_enabled|object|false|none|none|
|shared_links_expiration_days|object|false|none|none|
|is_public_shared_links_expiration_enabled|object|false|none|none|
|public_shared_links_expiration_days|object|false|none|none|
|shared_expiration_target|object|false|none|none|
|is_shared_links_expiration_notification_enabled|object|false|none|none|
|shared_links_expiration_notification_days|object|false|none|none|
|is_shared_links_expiration_notification_prevented|object|false|none|none|
|is_auto_delete_enabled|object|false|none|none|
|auto_delete_days|object|false|none|none|
|is_auto_delete_expiration_modification_prevented|object|false|none|none|
|auto_delete_target|object|false|none|none|
|is_collaboration_expiration_enabled|object|false|none|none|
|collaboration_expiration_days|object|false|none|none|
|is_collaboration_expiration_modification_prevented|object|false|none|none|
|is_collaboration_expiration_notification_enabled|object|false|none|none|
|collaboration_expiration_target|object|false|none|none|
|trash_auto_clear_time|object|false|none|none|
|permanent_deletion_access|object|false|none|none|
|permanent_deletion_allowlist_users|object|false|none|none|

<h2 id="tocS_EnterpriseConfigurationItem">EnterpriseConfigurationItem</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationitem"></a>
<a id="schema_EnterpriseConfigurationItem"></a>
<a id="tocSenterpriseconfigurationitem"></a>
<a id="tocsenterpriseconfigurationitem"></a>

```json
{
  "is_used": true
}
```

The basic data included in each enterprise configuration response object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_used|boolean|false|none|Indicates whether a configuration is used for a given enterprise.|

<h2 id="tocS_EnterpriseConfigurationItemBoolean">EnterpriseConfigurationItemBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationitemboolean"></a>
<a id="schema_EnterpriseConfigurationItemBoolean"></a>
<a id="tocSenterpriseconfigurationitemboolean"></a>
<a id="tocsenterpriseconfigurationitemboolean"></a>

```json
{
  "is_used": true,
  "value": true
}
```

An enterprise configuration item with a boolean type value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_used|boolean|false|none|Indicates whether a configuration is used for a given enterprise.|
|value|boolean \| null|false|none|The value of the enterprise configuration as a boolean.|

<h2 id="tocS_EnterpriseConfigurationItemInteger">EnterpriseConfigurationItemInteger</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationiteminteger"></a>
<a id="schema_EnterpriseConfigurationItemInteger"></a>
<a id="tocSenterpriseconfigurationiteminteger"></a>
<a id="tocsenterpriseconfigurationiteminteger"></a>

```json
{
  "is_used": true,
  "value": 1234
}
```

An enterprise configuration item with a integer type value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_used|boolean|false|none|Indicates whether a configuration is used for a given enterprise.|
|value|integer \| null|false|none|The value of the enterprise configuration as an integer.|

<h2 id="tocS_EnterpriseConfigurationItemString">EnterpriseConfigurationItemString</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationitemstring"></a>
<a id="schema_EnterpriseConfigurationItemString"></a>
<a id="tocSenterpriseconfigurationitemstring"></a>
<a id="tocsenterpriseconfigurationitemstring"></a>

```json
{
  "is_used": true,
  "value": "value of configuration"
}
```

An enterprise configuration item with a string type value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_used|boolean|false|none|Indicates whether a configuration is used for a given enterprise.|
|value|string \| null|false|none|The value of the enterprise configuration as a string.|

<h2 id="tocS_EnterpriseConfigurationSecurity">EnterpriseConfigurationSecurity</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationsecurity"></a>
<a id="schema_EnterpriseConfigurationSecurity"></a>
<a id="tocSenterpriseconfigurationsecurity"></a>
<a id="tocsenterpriseconfigurationsecurity"></a>

```json
{
  "is_managed_user_signup_enabled": {
    "is_used": true,
    "value": true
  },
  "is_managed_user_signup_notification_enabled": {
    "is_used": true,
    "value": true
  },
  "is_managed_user_signup_corporate_email_enabled": {
    "is_used": true,
    "value": true
  },
  "is_new_user_notification_daily_digest_enabled": {
    "is_used": true,
    "value": true
  },
  "is_managed_user_email_change_disabled": {
    "is_used": true,
    "value": true
  },
  "is_multi_factor_auth_required": {
    "is_used": true,
    "value": true
  },
  "is_weak_password_prevention_enabled": {
    "is_used": true,
    "value": true
  },
  "is_password_leak_detection_enabled": {
    "is_used": true,
    "value": true
  },
  "last_password_reset_at": {
    "is_used": true,
    "value": "2012-12-12T10:53:43-08:00"
  },
  "is_password_request_notification_enabled": {
    "is_used": true,
    "value": true
  },
  "is_password_change_notification_enabled": {
    "is_used": true,
    "value": true
  },
  "is_strong_password_for_ext_collab_enabled": {
    "is_used": true,
    "value": true
  },
  "is_managed_user_migration_disabled": {
    "is_used": true,
    "value": true
  },
  "join_link": {
    "is_used": true,
    "value": "value of configuration"
  },
  "join_url": {
    "is_used": true,
    "value": "value of configuration"
  },
  "failed_login_attempts_to_trigger_admin_notification": {
    "is_used": true,
    "value": 1234
  },
  "password_min_length": {
    "is_used": true,
    "value": 1234
  },
  "password_min_uppercase_characters": {
    "is_used": true,
    "value": 1234
  },
  "password_min_numeric_characters": {
    "is_used": true,
    "value": 1234
  },
  "password_min_special_characters": {
    "is_used": true,
    "value": 1234
  },
  "password_reset_frequency": {
    "is_used": true,
    "value": "value of configuration"
  },
  "previous_password_reuse_limit": {
    "is_used": true,
    "value": "value of configuration"
  },
  "session_duration": {
    "is_used": true,
    "value": "value of configuration"
  },
  "external_collab_multi_factor_auth_settings": {
    "is_used": true,
    "value": {
      "denylist_domains": [
        "example.com"
      ],
      "denylist_emails": [
        "spam@example.com"
      ],
      "allowlist_domains": [
        "example.com"
      ],
      "allowlist_emails": [
        "mail@example.com"
      ],
      "state": "enabled",
      "scheduled_status": "inprogress",
      "scheduled_at": "2012-12-12T10:53:43-08:00",
      "factor_type_settings": "totp"
    }
  },
  "keysafe": {
    "is_used": true,
    "value": {
      "keysafe_enabled": true,
      "cloud_provider": "",
      "key_id": "1234",
      "account_id": "1234",
      "location_id": "1234",
      "project_id": "1234",
      "keyring_id": "1234"
    }
  },
  "is_custom_session_duration_enabled": {
    "is_used": true,
    "value": true
  },
  "custom_session_duration_value": {
    "is_used": true,
    "value": "value of configuration"
  },
  "custom_session_duration_groups": {
    "is_used": true,
    "value": [
      {
        "id": "1234",
        "name": "Group Name"
      }
    ]
  },
  "multi_factor_auth_type": {
    "is_used": true,
    "value": "value of configuration"
  },
  "enforced_mfa_frequency": {
    "is_used": true,
    "value": {
      "days": 30,
      "hours": 24
    }
  }
}
```

The enterprise configuration for the security category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_managed_user_signup_enabled|object|false|none|none|
|is_managed_user_signup_notification_enabled|object|false|none|none|
|is_managed_user_signup_corporate_email_enabled|object|false|none|none|
|is_new_user_notification_daily_digest_enabled|object|false|none|none|
|is_managed_user_email_change_disabled|object|false|none|none|
|is_multi_factor_auth_required|object|false|none|none|
|is_weak_password_prevention_enabled|object|false|none|none|
|is_password_leak_detection_enabled|object|false|none|none|
|last_password_reset_at|object|false|none|none|
|is_password_request_notification_enabled|object|false|none|none|
|is_password_change_notification_enabled|object|false|none|none|
|is_strong_password_for_ext_collab_enabled|object|false|none|none|
|is_managed_user_migration_disabled|object|false|none|none|
|join_link|object|false|none|none|
|join_url|object|false|none|none|
|failed_login_attempts_to_trigger_admin_notification|object|false|none|none|
|password_min_length|object|false|none|none|
|password_min_uppercase_characters|object|false|none|none|
|password_min_numeric_characters|object|false|none|none|
|password_min_special_characters|object|false|none|none|
|password_reset_frequency|object|false|none|none|
|previous_password_reuse_limit|object|false|none|none|
|session_duration|object|false|none|none|
|external_collab_multi_factor_auth_settings|object|false|none|none|
|keysafe|object|false|none|none|
|is_custom_session_duration_enabled|object|false|none|none|
|custom_session_duration_value|object|false|none|none|
|custom_session_duration_groups|object|false|none|none|
|multi_factor_auth_type|object|false|none|none|
|enforced_mfa_frequency|object|false|none|none|

<h2 id="tocS_EnterpriseConfigurationShield">EnterpriseConfigurationShield</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationshield"></a>
<a id="schema_EnterpriseConfigurationShield"></a>
<a id="tocSenterpriseconfigurationshield"></a>
<a id="tocsenterpriseconfigurationshield"></a>

```json
{
  "shield_rules": [
    {
      "id": "1234567890",
      "type": "shield_rule",
      "rule_category": "Malicious Content",
      "name": "Block malicious files",
      "description": "Blocks files identified as malicious content",
      "priority": "high",
      "created_at": "2012-12-12T10:53:43-08:00",
      "modified_at": "2012-12-12T10:53:43-08:00"
    }
  ]
}
```

The enterprise configuration for the shield category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shield_rules|[[ShieldRuleItem](#schemashieldruleitem)]|false|none|The shield rules configuration for the enterprise.|

<h2 id="tocS_EnterpriseConfigurationUserSettings">EnterpriseConfigurationUserSettings</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseconfigurationusersettings"></a>
<a id="schema_EnterpriseConfigurationUserSettings"></a>
<a id="tocSenterpriseconfigurationusersettings"></a>
<a id="tocsenterpriseconfigurationusersettings"></a>

```json
{
  "enterprise_feature_settings": [
    {
      "is_used": true,
      "value": {
        "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
        "feature": {
          "id": "canvas"
        },
        "state": "enabled",
        "can_configure": true,
        "is_configured": true,
        "allowlist": [
          {
            "type": "user",
            "id": "12345"
          }
        ],
        "denylist": [
          {
            "type": "user",
            "id": "12345"
          }
        ]
      }
    }
  ],
  "user_invites_expiration_time_frame": {
    "is_used": true,
    "value": "7 days"
  },
  "is_username_change_restricted": {
    "is_used": true,
    "value": true
  },
  "is_box_sync_restricted_for_new_users": {
    "is_used": true,
    "value": true
  },
  "is_view_all_users_enabled_for_new_users": {
    "is_used": true,
    "value": true
  },
  "is_device_limit_exemption_enabled_for_new_users": {
    "is_used": true,
    "value": true
  },
  "is_external_collaboration_restricted_for_new_users": {
    "is_used": true,
    "value": true
  },
  "is_unlimited_storage_enabled_for_new_users": {
    "is_used": true,
    "value": true
  },
  "new_user_default_storage_limit": {
    "is_used": true,
    "value": 1234
  },
  "new_user_default_timezone": {
    "is_used": true,
    "value": "GMT-05:00 America\\/Chicago CDT"
  },
  "new_user_default_language": {
    "is_used": true,
    "value": "English (US)"
  },
  "is_enterprise_sso_required": {
    "is_used": true,
    "value": true
  },
  "is_enterprise_sso_in_testing": {
    "is_used": true,
    "value": true
  },
  "is_sso_auto_add_groups_enabled": {
    "is_used": true,
    "value": true
  },
  "is_sso_auto_add_user_to_groups_enabled": {
    "is_used": true,
    "value": true
  },
  "is_sso_auto_remove_user_from_groups_enabled": {
    "is_used": true,
    "value": true
  },
  "user_tracking_codes": {
    "is_used": true,
    "value": [
      {
        "id": 1234,
        "name": "Employee ID"
      }
    ]
  },
  "number_of_user_tracking_codes_remaining": {
    "is_used": true,
    "value": 1234
  },
  "is_instant_login_restricted": {
    "is_used": true,
    "value": true
  }
}
```

The enterprise configuration for the user settings category.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enterprise_feature_settings|[[EnterpriseFeatureSettingsItem](#schemaenterprisefeaturesettingsitem)]|false|none|none|
|user_invites_expiration_time_frame|object|false|none|none|
|is_username_change_restricted|object|false|none|none|
|is_box_sync_restricted_for_new_users|object|false|none|none|
|is_view_all_users_enabled_for_new_users|object|false|none|none|
|is_device_limit_exemption_enabled_for_new_users|object|false|none|none|
|is_external_collaboration_restricted_for_new_users|object|false|none|none|
|is_unlimited_storage_enabled_for_new_users|object|false|none|none|
|new_user_default_storage_limit|object|false|none|none|
|new_user_default_timezone|object|false|none|none|
|new_user_default_language|object|false|none|none|
|is_enterprise_sso_required|object|false|none|none|
|is_enterprise_sso_in_testing|object|false|none|none|
|is_sso_auto_add_groups_enabled|object|false|none|none|
|is_sso_auto_add_user_to_groups_enabled|object|false|none|none|
|is_sso_auto_remove_user_from_groups_enabled|object|false|none|none|
|user_tracking_codes|object|false|none|none|
|number_of_user_tracking_codes_remaining|object|false|none|none|
|is_instant_login_restricted|object|false|none|none|

<h2 id="tocS_EnterpriseFeatureSetting">EnterpriseFeatureSetting</h2>
<!-- backwards compatibility -->
<a id="schemaenterprisefeaturesetting"></a>
<a id="schema_EnterpriseFeatureSetting"></a>
<a id="tocSenterprisefeaturesetting"></a>
<a id="tocsenterprisefeaturesetting"></a>

```json
{
  "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
  "feature": {
    "id": "canvas"
  },
  "state": "enabled",
  "can_configure": true,
  "is_configured": true,
  "allowlist": [
    {
      "type": "user",
      "id": "12345"
    }
  ],
  "denylist": [
    {
      "type": "user",
      "id": "12345"
    }
  ]
}
```

An enterprise feature setting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|The identifier of the enterprise feature setting.|
|feature|object|false|none|The feature.|
|state|string \| null|false|none|The state of the feature.|
|can_configure|boolean \| null|false|none|Whether the feature can be configured.|
|is_configured|boolean \| null|false|none|Whether the feature is configured.|
|allowlist|[[UserOrGroupReference](#schemauserorgroupreference)]|false|none|Enterprise feature setting is enabled for only this set of users and groups.|
|denylist|[[UserOrGroupReference](#schemauserorgroupreference)]|false|none|Enterprise feature setting is enabled for everyone except this set of users and groups.|

<h2 id="tocS_EnterpriseFeatureSettingsItem">EnterpriseFeatureSettingsItem</h2>
<!-- backwards compatibility -->
<a id="schemaenterprisefeaturesettingsitem"></a>
<a id="schema_EnterpriseFeatureSettingsItem"></a>
<a id="tocSenterprisefeaturesettingsitem"></a>
<a id="tocsenterprisefeaturesettingsitem"></a>

```json
{
  "is_used": true,
  "value": {
    "id": "eyJlbnRlcnByaXNlSWQiOiIxMTExNDQyNzY3IiwiZmVhdHVyZUlkIjoiY2FudmFzIn0=",
    "feature": {
      "id": "canvas"
    },
    "state": "enabled",
    "can_configure": true,
    "is_configured": true,
    "allowlist": [
      {
        "type": "user",
        "id": "12345"
      }
    ],
    "denylist": [
      {
        "type": "user",
        "id": "12345"
      }
    ]
  }
}
```

An enterprise feature settings item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_used|boolean|false|none|Indicates whether a configuration is used for a given enterprise.|
|value|[EnterpriseFeatureSetting](#schemaenterprisefeaturesetting)|false|none|An enterprise feature setting.|

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
|id|string|false|none|The unique identifier for this enterprise.|
|type|string|false|none|The value will always be `enterprise`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|enterprise|

<h2 id="tocS_ExternalCollabSecuritySettings">ExternalCollabSecuritySettings</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcollabsecuritysettings"></a>
<a id="schema_ExternalCollabSecuritySettings"></a>
<a id="tocSexternalcollabsecuritysettings"></a>
<a id="tocsexternalcollabsecuritysettings"></a>

```json
{
  "denylist_domains": [
    "example.com"
  ],
  "denylist_emails": [
    "spam@example.com"
  ],
  "allowlist_domains": [
    "example.com"
  ],
  "allowlist_emails": [
    "mail@example.com"
  ],
  "state": "enabled",
  "scheduled_status": "inprogress",
  "scheduled_at": "2012-12-12T10:53:43-08:00",
  "factor_type_settings": "totp"
}
```

External collaboration security settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denylist_domains|[string]|false|none|List of domains that are not allowed for external collaboration. Applies if state is `denylist`.|
|denylist_emails|[string]|false|none|List of email addresses that are not allowed for external collaboration. Applies if state is `denylist`.|
|allowlist_domains|[string]|false|none|List of domains that are allowed for external collaboration. Applies if state is `allowlist`.|
|allowlist_emails|[string]|false|none|List of email addresses that are allowed for external collaboration. Applies if state is `allowlist`.|
|state|string \| null|false|none|The state of the external collaboration security settings. Possible values include `enabled`, `disabled`, `allowlist`, and `denylist`.|
|scheduled_status|string \| null|false|none|The status of the scheduling to apply external collaboration security settings. Possible values include `in_progress`, `scheduled`, `completed`, `failed`, and `scheduled_immediate`.|
|scheduled_at|string(date-time) \| null|false|none|Scheduled at.|
|factor_type_settings|string \| null|false|none|Factor type for the external collaborators authentication. Possible values include `totp`, `any`, or `unknown`.|

<h2 id="tocS_ExternalUserDeletionResult">ExternalUserDeletionResult</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluserdeletionresult"></a>
<a id="schema_ExternalUserDeletionResult"></a>
<a id="tocSexternaluserdeletionresult"></a>
<a id="tocsexternaluserdeletionresult"></a>

```json
{
  "user_id": "12345",
  "status": 202,
  "detail": "string"
}
```

Result of a single external user deletion request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the external user.|
|status|integer|true|none|HTTP status code for a specific user's deletion request.|
|detail|string|false|none|Deletion request status details. This property is only present when the deletion request is not successful.|

<h2 id="tocS_ExternalUsersSubmitDeleteJobRequest">ExternalUsersSubmitDeleteJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluserssubmitdeletejobrequest"></a>
<a id="schema_ExternalUsersSubmitDeleteJobRequest"></a>
<a id="tocSexternaluserssubmitdeletejobrequest"></a>
<a id="tocsexternaluserssubmitdeletejobrequest"></a>

```json
{
  "external_users": [
    {
      "type": "user",
      "id": "12345"
    }
  ]
}
```

Request to submit a job to delete external users from the current enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_users|[[UserReference](#schemauserreference)]|true|none|List of external users to delete.|

<h2 id="tocS_ExternalUsersSubmitDeleteJobResponse">ExternalUsersSubmitDeleteJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexternaluserssubmitdeletejobresponse"></a>
<a id="schema_ExternalUsersSubmitDeleteJobResponse"></a>
<a id="tocSexternaluserssubmitdeletejobresponse"></a>
<a id="tocsexternaluserssubmitdeletejobresponse"></a>

```json
{
  "entries": [
    {
      "user_id": "12345",
      "status": 202,
      "detail": "string"
    }
  ]
}
```

Multi-status response containing the result for each external user deletion request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ExternalUserDeletionResult](#schemaexternaluserdeletionresult)]|true|none|Array of results of each external user deletion request.|

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
|id|string|true|none|ID of the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|file|

<h2 id="tocS_FileVersion--Base">FileVersion--Base</h2>
<!-- backwards compatibility -->
<a id="schemafileversion--base"></a>
<a id="schema_FileVersion--Base"></a>
<a id="tocSfileversion--base"></a>
<a id="tocsfileversion--base"></a>

```json
{
  "id": "12345",
  "type": "file_version"
}
```

The bare basic representation of a file version, the minimal
amount of fields returned when using the `fields` query
parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represent a file version.|
|type|string|true|none|The value will always be `file_version`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|file_version|

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

<h2 id="tocS_Group--Base">Group--Base</h2>
<!-- backwards compatibility -->
<a id="schemagroup--base"></a>
<a id="schema_Group--Base"></a>
<a id="tocSgroup--base"></a>
<a id="tocsgroup--base"></a>

```json
{
  "id": "11446498",
  "type": "group"
}
```

A base representation of a group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this object.|
|type|string|true|none|The value will always be `group`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|group|

<h2 id="tocS_Group--Mini">Group--Mini</h2>
<!-- backwards compatibility -->
<a id="schemagroup--mini"></a>
<a id="schema_Group--Mini"></a>
<a id="tocSgroup--mini"></a>
<a id="tocsgroup--mini"></a>

```json
{
  "id": "11446498",
  "type": "group",
  "name": "Support",
  "group_type": "managed_group"
}
```

Mini representation of a group, including id and name of
group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this object.|
|type|string|true|none|The value will always be `group`.|
|name|string|false|none|The name of the group.|
|group_type|string|false|none|The type of the group.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|group|
|group_type|managed_group|
|group_type|all_users_group|

<h2 id="tocS_Hub">Hub</h2>
<!-- backwards compatibility -->
<a id="schemahub"></a>
<a id="schema_Hub"></a>
<a id="tocShub"></a>
<a id="tocshub"></a>

```json
{
  "id": "12345",
  "type": "hubs",
  "title": "Contracts",
  "description": "All the contracts for the company.",
  "created_at": "2012-12-12T10:53:43Z",
  "updated_at": "2012-12-12T10:53:43Z",
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
  "view_count": 506,
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
}
```

A standard representation of a Box Hub, as returned from any
Box Hubs API endpoints by default.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represent a Box Hub.<br><br>The ID for any Box Hub can be determined<br>by visiting a Box Hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|type|string|true|none|The value will always be `hubs`.|
|title|string|false|none|The title given to the Box Hub.|
|description|string|false|none|The description of the Box Hub. First 200 characters are returned.|
|created_at|string(date-time)|false|none|The date and time when the folder was created. This value may<br>be `null` for some folders such as the root folder or the trash<br>folder.|
|updated_at|string(date-time)|false|none|The date and time when the Box Hub was last updated.|
|created_by|object|false|none|none|
|updated_by|object|false|none|none|
|view_count|integer(int32)|false|none|The number of views for the Box Hub.|
|is_ai_enabled|boolean|false|none|Indicates if AI features are enabled for the Box Hub.|
|is_collaboration_restricted_to_enterprise|boolean|false|none|Indicates if collaboration is restricted to the enterprise.|
|can_non_owners_invite|boolean|false|none|Indicates if non-owners can invite others to the Box Hub.|
|can_shared_link_be_created|boolean|false|none|Indicates if a shared link can be created for the Box Hub.|
|can_public_shared_link_be_created|boolean|false|none|Indicates if a public shared link can be created for the Box Hub.|
|copy_hub_access|string|false|none|Specifies who is allowed to copy the Box Hub.<br><br>* `all` - Any user with access to the Hub can copy it.<br>* `company` - Only users within the same enterprise as the Hub can copy it.<br>* `none` - No one can copy the Hub.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hubs|
|copy_hub_access|all|
|copy_hub_access|company|
|copy_hub_access|none|

<h2 id="tocS_Hub--Base">Hub--Base</h2>
<!-- backwards compatibility -->
<a id="schemahub--base"></a>
<a id="schema_Hub--Base"></a>
<a id="tocShub--base"></a>
<a id="tocshub--base"></a>

```json
{
  "id": "12345",
  "type": "hubs"
}
```

The bare basic representation of a Box Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier that represent a Box Hub.<br><br>The ID for any Box Hub can be determined<br>by visiting a Box Hub in the web application<br>and copying the ID from the URL. For example,<br>for the URL `https://*.app.box.com/hubs/123`<br>the `hub_id` is `123`.|
|type|string|true|none|The value will always be `hubs`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hubs|

<h2 id="tocS_HubAccessGrantee">HubAccessGrantee</h2>
<!-- backwards compatibility -->
<a id="schemahubaccessgrantee"></a>
<a id="schema_HubAccessGrantee"></a>
<a id="tocShubaccessgrantee"></a>
<a id="tocshubaccessgrantee"></a>

```json
{
  "id": "11446498",
  "type": "user",
  "name": "Aaron Levie",
  "login": "ceo@example.com"
}
```

The user or group that is granted access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[HubCollaborationUser](#schemahubcollaborationuser)|false|none|A mini representation of a user, can be returned only when<br>the status is `pending`.|
|*oneOf*|[Group--Mini](#schemagroup--mini)|false|none|Mini representation of a group, including id and name of<br>group.|

<h2 id="tocS_HubCalloutBoxTextBlock">HubCalloutBoxTextBlock</h2>
<!-- backwards compatibility -->
<a id="schemahubcalloutboxtextblock"></a>
<a id="schema_HubCalloutBoxTextBlock"></a>
<a id="tocShubcalloutboxtextblock"></a>
<a id="tocshubcalloutboxtextblock"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "callout_box",
  "fragment": "This is the callout box"
}
```

A callout box block in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this block.|
|parent_id|string \| null|false|none|The unique identifier of the parent block. Null for direct children of the page.|
|type|string|true|none|The type of this block. The value is always `callout_box`.|
|fragment|string|true|none|Text content of the block. Includes rich text formatting.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|callout_box|

<h2 id="tocS_HubCollaboration">HubCollaboration</h2>
<!-- backwards compatibility -->
<a id="schemahubcollaboration"></a>
<a id="schema_HubCollaboration"></a>
<a id="tocShubcollaboration"></a>
<a id="tocshubcollaboration"></a>

```json
{
  "id": "12345678",
  "type": "hub_collaboration",
  "hub": {
    "id": "12345",
    "type": "hubs"
  },
  "accessible_by": {
    "id": "11446498",
    "type": "user",
    "name": "Aaron Levie",
    "login": "ceo@example.com"
  },
  "role": "editor",
  "status": "accepted",
  "acceptance_requirements_status": {
    "terms_of_service_requirement": {
      "is_accepted": true,
      "terms_of_service": {
        "id": "11446498",
        "type": "terms_of_service"
      }
    },
    "strong_password_requirement": {
      "enterprise_has_strong_password_required_for_external_users": true,
      "user_has_strong_password": true
    },
    "two_factor_authentication_requirement": {
      "enterprise_has_two_factor_auth_enabled": true,
      "user_has_two_factor_authentication_enabled": true
    }
  }
}
```

A Box Hub collaboration object grants a user or group access 
to a Box Hub with permissions defined by a specific role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this collaboration.|
|type|string|true|none|The value will always be `hub_collaboration`.|
|hub|[Hub--Base](#schemahub--base)|false|none|The bare basic representation of a Box Hub.|
|accessible_by|[HubAccessGrantee](#schemahubaccessgrantee)|false|none|The user or group that is granted access.|
|role|string|false|none|The level of access granted to a Box Hub.<br>Possible values are `editor`, `viewer`, and `co-owner`.|
|status|string|false|none|The status of the collaboration invitation. If the status<br>is `pending`, `login` and `name` return an empty string.|
|acceptance_requirements_status|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hub_collaboration|
|status|accepted|
|status|pending|
|status|rejected|

<h2 id="tocS_HubCollaborationCreateRequest">HubCollaborationCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemahubcollaborationcreaterequest"></a>
<a id="schema_HubCollaborationCreateRequest"></a>
<a id="tocShubcollaborationcreaterequest"></a>
<a id="tocshubcollaborationcreaterequest"></a>

```json
{
  "hub": {
    "type": "hubs",
    "id": "42037322"
  },
  "accessible_by": {
    "type": "user",
    "id": "23522323",
    "login": "john@example.com"
  },
  "role": "editor"
}
```

Request body for creating a new Box Hub collaboration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hub|object|true|none|Box Hubs reference.|
|accessible_by|object|true|none|The user or group who gets access to the item.|
|role|string|true|none|The level of access granted to a Box Hub.<br>Possible values are `editor`, `viewer`, and `co-owner`.|

<h2 id="tocS_HubCollaborations">HubCollaborations</h2>
<!-- backwards compatibility -->
<a id="schemahubcollaborations"></a>
<a id="schema_HubCollaborations"></a>
<a id="tocShubcollaborations"></a>
<a id="tocshubcollaborations"></a>

```json
{
  "entries": [
    {
      "id": "12345678",
      "type": "hub_collaboration",
      "hub": {
        "id": "12345",
        "type": "hubs"
      },
      "accessible_by": {
        "id": "11446498",
        "type": "user",
        "name": "Aaron Levie",
        "login": "ceo@example.com"
      },
      "role": "editor",
      "status": "accepted",
      "acceptance_requirements_status": {
        "terms_of_service_requirement": {
          "is_accepted": true,
          "terms_of_service": {
            "id": "11446498",
            "type": "terms_of_service"
          }
        },
        "strong_password_requirement": {
          "enterprise_has_strong_password_required_for_external_users": true,
          "user_has_strong_password": true
        },
        "two_factor_authentication_requirement": {
          "enterprise_has_two_factor_auth_enabled": true,
          "user_has_two_factor_authentication_enabled": true
        }
      }
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A list of Box Hub collaborations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[HubCollaboration](#schemahubcollaboration)]|false|none|A list of Box Hub collaborations.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

<h2 id="tocS_HubCollaborationUpdateRequest">HubCollaborationUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemahubcollaborationupdaterequest"></a>
<a id="schema_HubCollaborationUpdateRequest"></a>
<a id="tocShubcollaborationupdaterequest"></a>
<a id="tocshubcollaborationupdaterequest"></a>

```json
{
  "role": "editor"
}
```

Request body for updating an existing Box Hub collaboration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|The level of access granted to a Box Hub.<br>Possible values are `editor`, `viewer`, and `co-owner`.|

<h2 id="tocS_HubCollaborationUser">HubCollaborationUser</h2>
<!-- backwards compatibility -->
<a id="schemahubcollaborationuser"></a>
<a id="schema_HubCollaborationUser"></a>
<a id="tocShubcollaborationuser"></a>
<a id="tocshubcollaborationuser"></a>

```json
{
  "id": "11446498",
  "type": "user",
  "name": "Aaron Levie",
  "login": "ceo@example.com"
}
```

A mini representation of a user, can be returned only when
the status is `pending`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this user.|
|type|string|true|none|The value will always be `user`.|
|name|string|false|none|The display name of this user. If the collaboration status is `pending`, an empty string is returned.|
|login|string(email)|false|none|The primary email address of this user. If the collaboration status is `pending`, an empty string is returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|

<h2 id="tocS_HubCopyRequest">HubCopyRequest</h2>
<!-- backwards compatibility -->
<a id="schemahubcopyrequest"></a>
<a id="schema_HubCopyRequest"></a>
<a id="tocShubcopyrequest"></a>
<a id="tocshubcopyrequest"></a>

```json
{
  "title": "Hub Title",
  "description": "This is a description of the Box Hub.",
  "include_items": true
}
```

Request schema for copying a Box Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the Box Hub. It cannot be empty and should be less than 50 characters.|
|description|string|false|none|Description of the Box Hub.|
|include_items|boolean|false|none|If true, the items which the user has Editor or Owner access to in the original Box Hub will be copied to the new Box Hub.<br>Defaults to false.|

<h2 id="tocS_HubCreateRequest">HubCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemahubcreaterequest"></a>
<a id="schema_HubCreateRequest"></a>
<a id="tocShubcreaterequest"></a>
<a id="tocshubcreaterequest"></a>

```json
{
  "title": "Hub Title",
  "description": "This is a description of the Box Hub."
}
```

Request schema for creating a new Box Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|Title of the Box Hub. It cannot be empty and should be less than 50 characters.|
|description|string|false|none|Description of the Box Hub.|

<h2 id="tocS_HubDividerBlock">HubDividerBlock</h2>
<!-- backwards compatibility -->
<a id="schemahubdividerblock"></a>
<a id="schema_HubDividerBlock"></a>
<a id="tocShubdividerblock"></a>
<a id="tocshubdividerblock"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "divider"
}
```

A divider block in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this block.|
|parent_id|string \| null|false|none|The unique identifier of the parent block. Null for direct children of the page.|
|type|string|true|none|The type of this block. The value is always `divider`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|divider|

<h2 id="tocS_HubDocumentBlock">HubDocumentBlock</h2>
<!-- backwards compatibility -->
<a id="schemahubdocumentblock"></a>
<a id="schema_HubDocumentBlock"></a>
<a id="tocShubdocumentblock"></a>
<a id="tocshubdocumentblock"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f"
}
```

Base block in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this block.|
|parent_id|string \| null|false|none|The unique identifier of the parent block. Null for direct children of the page.|

<h2 id="tocS_HubDocumentBlockEntry">HubDocumentBlockEntry</h2>
<!-- backwards compatibility -->
<a id="schemahubdocumentblockentry"></a>
<a id="schema_HubDocumentBlockEntry"></a>
<a id="tocShubdocumentblockentry"></a>
<a id="tocshubdocumentblockentry"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "paragraph",
  "fragment": "This is the paragraph"
}
```

A single block in a Hub Document Blocks list.
Text-bearing block types (`paragraph`, `section_title`, `callout_box`)
include a `fragment` property with rich text content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[HubParagraphTextBlock](#schemahubparagraphtextblock)|false|none|A paragraph block in the Box Hub Document.|
|*oneOf*|[HubSectionTitleTextBlock](#schemahubsectiontitletextblock)|false|none|A section title block in the Box Hub Document.|
|*oneOf*|[HubCalloutBoxTextBlock](#schemahubcalloutboxtextblock)|false|none|A callout box block in the Box Hub Document.|
|*oneOf*|[HubItemListBlock](#schemahubitemlistblock)|false|none|An item list block in the Box Hub Document.|
|*oneOf*|[HubDividerBlock](#schemahubdividerblock)|false|none|A divider block in the Box Hub Document.|

<h2 id="tocS_HubDocumentBlocks">HubDocumentBlocks</h2>
<!-- backwards compatibility -->
<a id="schemahubdocumentblocks"></a>
<a id="schema_HubDocumentBlocks"></a>
<a id="tocShubdocumentblocks"></a>
<a id="tocshubdocumentblocks"></a>

```json
{
  "entries": [
    {
      "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
      "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
      "type": "paragraph",
      "fragment": "This is the paragraph"
    }
  ],
  "type": "document_blocks",
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A list of Hub Document blocks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[HubDocumentBlockEntry](#schemahubdocumentblockentry)]|true|none|Ordered list of blocks.|
|type|string|true|none|The value will always be `document_blocks`.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document_blocks|

<h2 id="tocS_HubDocumentPage">HubDocumentPage</h2>
<!-- backwards compatibility -->
<a id="schemahubdocumentpage"></a>
<a id="schema_HubDocumentPage"></a>
<a id="tocShubdocumentpage"></a>
<a id="tocshubdocumentpage"></a>

```json
{
  "id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "page",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "title_fragment": "This is the home page title"
}
```

A Page in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this page.|
|type|string|true|none|The type of this resource. The value is always `page`.|
|parent_id|string \| null|false|none|The unique identifier of the parent page. Null for root-level pages.|
|title_fragment|string|true|none|The title text of the page. Includes rich text formatting.|

<h2 id="tocS_HubDocumentPages">HubDocumentPages</h2>
<!-- backwards compatibility -->
<a id="schemahubdocumentpages"></a>
<a id="schema_HubDocumentPages"></a>
<a id="tocShubdocumentpages"></a>
<a id="tocshubdocumentpages"></a>

```json
{
  "entries": [
    {
      "id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
      "type": "page",
      "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
      "title_fragment": "This is the home page title"
    }
  ],
  "type": "document_pages",
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A list of Hub Document Pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[HubDocumentPage](#schemahubdocumentpage)]|true|none|Ordered list of pages.|
|type|string|true|none|The value will always be `document_pages`.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document_pages|

<h2 id="tocS_HubItem">HubItem</h2>
<!-- backwards compatibility -->
<a id="schemahubitem"></a>
<a id="schema_HubItem"></a>
<a id="tocShubitem"></a>
<a id="tocshubitem"></a>

```json
{
  "id": "12345678",
  "type": "file",
  "name": "My File"
}
```

A Box Hub Item is a Box Item that is referenced in a Box Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this item.|
|type|string|true|none|The type of the item.|
|name|string|true|none|The name of the item.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|file|
|type|folder|
|type|web_link|

<h2 id="tocS_HubItemListBlock">HubItemListBlock</h2>
<!-- backwards compatibility -->
<a id="schemahubitemlistblock"></a>
<a id="schema_HubItemListBlock"></a>
<a id="tocShubitemlistblock"></a>
<a id="tocshubitemlistblock"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "item_list"
}
```

An item list block in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this block.|
|parent_id|string \| null|false|none|The unique identifier of the parent block. Null for direct children of the page.|
|type|string|true|none|The type of this block. The value is always `item_list`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item_list|

<h2 id="tocS_HubItemOperation">HubItemOperation</h2>
<!-- backwards compatibility -->
<a id="schemahubitemoperation"></a>
<a id="schema_HubItemOperation"></a>
<a id="tocShubitemoperation"></a>
<a id="tocshubitemoperation"></a>

```json
{
  "action": "add",
  "item": {
    "type": "file",
    "id": "42037322"
  },
  "parent_id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd"
}
```

An operation to perform on a Box Hub item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action to perform on a Box Hub item.|
|item|[HubItemReference](#schemahubitemreference)|true|none|Reference to an item that can be added to a Box Hub.|
|parent_id|string|false|none|The ID of the parent block to add the item to. Must be an Item List block. If not provided, the item will be added to the first page's first Item List block.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|add|
|action|remove|

<h2 id="tocS_HubItemOperationResult">HubItemOperationResult</h2>
<!-- backwards compatibility -->
<a id="schemahubitemoperationresult"></a>
<a id="schema_HubItemOperationResult"></a>
<a id="tocShubitemoperationresult"></a>
<a id="tocshubitemoperationresult"></a>

```json
{
  "action": "add",
  "item": {
    "type": "file",
    "id": "42037322"
  },
  "parent_id": "721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e",
  "status": 200,
  "error": "Item not found"
}
```

Result of a Box Hub item operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action performed on the item.|
|item|[HubItemReference](#schemahubitemreference)|false|none|Reference to an item that can be added to a Box Hub.|
|parent_id|string|false|none|The ID of the parent block the item was added to.|
|status|integer|false|none|The HTTP status code of the operation.|
|error|string|false|none|Error message if the operation failed.|

<h2 id="tocS_HubItemReference">HubItemReference</h2>
<!-- backwards compatibility -->
<a id="schemahubitemreference"></a>
<a id="schema_HubItemReference"></a>
<a id="tocShubitemreference"></a>
<a id="tocshubitemreference"></a>

```json
{
  "type": "file",
  "id": "42037322"
}
```

Reference to an item that can be added to a Box Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[FileReference](#schemafilereference)|false|none|File reference.|
|*oneOf*|[FolderReference](#schemafolderreference)|false|none|Folder reference.|
|*oneOf*|[WeblinkReference](#schemaweblinkreference)|false|none|Web link reference.|

<h2 id="tocS_HubItems">HubItems</h2>
<!-- backwards compatibility -->
<a id="schemahubitems"></a>
<a id="schema_HubItems"></a>
<a id="tocShubitems"></a>
<a id="tocshubitems"></a>

```json
{
  "entries": [
    {
      "id": "12345678",
      "type": "file",
      "name": "My File"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A list of Box Hub items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[HubItem](#schemahubitem)]|false|none|A list of Box Hub items.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

<h2 id="tocS_HubItemsManageRequest">HubItemsManageRequest</h2>
<!-- backwards compatibility -->
<a id="schemahubitemsmanagerequest"></a>
<a id="schema_HubItemsManageRequest"></a>
<a id="tocShubitemsmanagerequest"></a>
<a id="tocshubitemsmanagerequest"></a>

```json
{
  "operations": [
    {
      "action": "add",
      "item": {
        "type": "file",
        "id": "42037322"
      },
      "parent_id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd"
    }
  ]
}
```

Request schema for managing Box Hub items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[HubItemOperation](#schemahubitemoperation)]|false|none|List of operations to perform on Box Hub items.|

<h2 id="tocS_HubItemsManageResponse">HubItemsManageResponse</h2>
<!-- backwards compatibility -->
<a id="schemahubitemsmanageresponse"></a>
<a id="schema_HubItemsManageResponse"></a>
<a id="tocShubitemsmanageresponse"></a>
<a id="tocshubitemsmanageresponse"></a>

```json
{
  "operations": [
    {
      "action": "add",
      "item": {
        "type": "file",
        "id": "42037322"
      },
      "parent_id": "721d97d7-ac8a-4e5e-adb6-ef11af4e6d9e",
      "status": 200,
      "error": "Item not found"
    }
  ]
}
```

Response schema for the status of Box Hub items management operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[HubItemOperationResult](#schemahubitemoperationresult)]|true|none|List of operations performed on Box Hub items.|

<h2 id="tocS_HubParagraphTextBlock">HubParagraphTextBlock</h2>
<!-- backwards compatibility -->
<a id="schemahubparagraphtextblock"></a>
<a id="schema_HubParagraphTextBlock"></a>
<a id="tocShubparagraphtextblock"></a>
<a id="tocshubparagraphtextblock"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "paragraph",
  "fragment": "This is the paragraph"
}
```

A paragraph block in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this block.|
|parent_id|string \| null|false|none|The unique identifier of the parent block. Null for direct children of the page.|
|type|string|true|none|The type of this block. The value is always `paragraph`.|
|fragment|string|true|none|Text content of the block. Includes rich text formatting.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|paragraph|

<h2 id="tocS_Hubs">Hubs</h2>
<!-- backwards compatibility -->
<a id="schemahubs"></a>
<a id="schema_Hubs"></a>
<a id="tocShubs"></a>
<a id="tocshubs"></a>

```json
{
  "entries": [
    {
      "id": "12345",
      "type": "hubs",
      "title": "Contracts",
      "description": "All the contracts for the company.",
      "created_at": "2012-12-12T10:53:43Z",
      "updated_at": "2012-12-12T10:53:43Z",
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
      "view_count": 506,
      "is_ai_enabled": true,
      "is_collaboration_restricted_to_enterprise": true,
      "can_non_owners_invite": true,
      "can_shared_link_be_created": true,
      "can_public_shared_link_be_created": true,
      "copy_hub_access": "company"
    }
  ],
  "limit": 1000,
  "next_marker": "JV9IRGZmieiBasejOG9yDCRNgd2ymoZIbjsxbJMjIs3kioVii"
}
```

A paginated list of hubs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[Hub](#schemahub)]|false|none|A list of hubs.|
|limit|integer(int64)|false|none|The limit that was used for these entries. This will be the same as the<br>`limit` query parameter unless that value exceeded the maximum value<br>allowed. The maximum value varies by API.|
|next_marker|string \| null|false|none|The marker for the start of the next page of results.|

<h2 id="tocS_HubSectionTitleTextBlock">HubSectionTitleTextBlock</h2>
<!-- backwards compatibility -->
<a id="schemahubsectiontitletextblock"></a>
<a id="schema_HubSectionTitleTextBlock"></a>
<a id="tocShubsectiontitletextblock"></a>
<a id="tocshubsectiontitletextblock"></a>

```json
{
  "id": "c9588f08-22d7-4d17-8ca9-f1e61c98c0bd",
  "parent_id": "d97f7c26-0d9b-42a1-a00d-6e6db9619e0f",
  "type": "section_title",
  "fragment": "This is the section title"
}
```

A section title block in the Box Hub Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this block.|
|parent_id|string \| null|false|none|The unique identifier of the parent block. Null for direct children of the page.|
|type|string|true|none|The type of this block. The value is always `section_title`.|
|fragment|string|true|none|Text content of the block. Includes rich text formatting.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|section_title|

<h2 id="tocS_HubUpdateRequest">HubUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemahubupdaterequest"></a>
<a id="schema_HubUpdateRequest"></a>
<a id="tocShubupdaterequest"></a>
<a id="tocshubupdaterequest"></a>

```json
{
  "title": "Hub Title",
  "description": "This is a description of the Box Hub.",
  "is_ai_enabled": true,
  "is_collaboration_restricted_to_enterprise": true,
  "can_non_owners_invite": true,
  "can_shared_link_be_created": true,
  "can_public_shared_link_be_created": true,
  "copy_hub_access": "company"
}
```

Request schema for updating an existing Box Hub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Title of the Box Hub. It cannot be empty and should be less than 50 characters.|
|description|string|false|none|Description of the Box Hub.|
|is_ai_enabled|boolean|false|none|Indicates if AI features are enabled for the Box Hub.|
|is_collaboration_restricted_to_enterprise|boolean|false|none|Indicates if collaboration is restricted to the enterprise.|
|can_non_owners_invite|boolean|false|none|Indicates if non-owners can invite others to the Box Hub.|
|can_shared_link_be_created|boolean|false|none|Indicates if a shared link can be created for the Box Hub.|
|can_public_shared_link_be_created|boolean|false|none|Indicates if a public shared link can be created for the Box Hub.|
|copy_hub_access|string|false|none|Specifies who is allowed to copy the Box Hub.<br><br>* `all` - Any user with access to the Hub can copy it.<br>* `company` - Only users within the same enterprise as the Hub can copy it.<br>* `none` - No one can copy the Hub.|

#### Enumerated Values

|Property|Value|
|---|---|
|copy_hub_access|all|
|copy_hub_access|company|
|copy_hub_access|none|

<h2 id="tocS_KeysafeSettings">KeysafeSettings</h2>
<!-- backwards compatibility -->
<a id="schemakeysafesettings"></a>
<a id="schema_KeysafeSettings"></a>
<a id="tocSkeysafesettings"></a>
<a id="tocskeysafesettings"></a>

```json
{
  "keysafe_enabled": true,
  "cloud_provider": "",
  "key_id": "1234",
  "account_id": "1234",
  "location_id": "1234",
  "project_id": "1234",
  "keyring_id": "1234"
}
```

The KeySafe settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keysafe_enabled|boolean|false|none|Whether KeySafe addon is enabled for the enterprise.|
|cloud_provider|string \| null|false|none|The cloud provider.|
|key_id|string \| null|false|none|The key ID.|
|account_id|string \| null|false|none|The account ID.|
|location_id|string \| null|false|none|The location ID.|
|project_id|string \| null|false|none|The project ID.|
|keyring_id|string \| null|false|none|The key ring ID.|

<h2 id="tocS_ListUser">ListUser</h2>
<!-- backwards compatibility -->
<a id="schemalistuser"></a>
<a id="schema_ListUser"></a>
<a id="tocSlistuser"></a>
<a id="tocslistuser"></a>

```json
{
  "id": 1234,
  "name": "John Doe",
  "email": "johndoe@box.com"
}
```

A user in allowlist or denylist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer \| null|false|none|The ID of the user.|
|name|string \| null|false|none|The name of the user.|
|email|string \| null|false|none|The email of the user.|

<h2 id="tocS_SharedLinkPermissions">SharedLinkPermissions</h2>
<!-- backwards compatibility -->
<a id="schemasharedlinkpermissions"></a>
<a id="schema_SharedLinkPermissions"></a>
<a id="tocSsharedlinkpermissions"></a>
<a id="tocssharedlinkpermissions"></a>

```json
{
  "shared_links_option": "settings_shared_link_preview",
  "default_shared_link_type": "settings_default_shared_link_preview",
  "notes_shared_link_option": "settings_notes_option_to_edit",
  "default_notes_shared_link_type": "settings_default_notes_shared_link_to_edit"
}
```

The shared link permissions for the enterprise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shared_links_option|string \| null|false|none|The selected option for shared links permissions.|
|default_shared_link_type|string \| null|false|none|The default shared link type.|
|notes_shared_link_option|string \| null|false|none|The selected option for notes shared links permissions.|
|default_notes_shared_link_type|string \| null|false|none|The default notes shared link type.|

<h2 id="tocS_ShieldList">ShieldList</h2>
<!-- backwards compatibility -->
<a id="schemashieldlist"></a>
<a id="schema_ShieldList"></a>
<a id="tocSshieldlist"></a>
<a id="tocsshieldlist"></a>

```json
{
  "id": "90fb0e17-c332-40ed-b4f9-fa8908fbbb24",
  "type": "shield_list",
  "name": "Shield List Name",
  "enterprise": {
    "id": "1910967",
    "type": "enterprise"
  },
  "description": "A list of things that are shielded",
  "created_at": "2025-01-13T15:31:01.896Z",
  "updated_at": "2025-01-13T15:31:01.896Z",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
}
```

A standard representation of a Shield List.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the shield list.|
|type|string|true|none|Type of the object.|
|name|string|true|none|Name of the shield list.|
|enterprise|object|true|none|none|
|description|string|false|none|Description of Shield List.|
|created_at|string(date-time)|true|none|ISO date time string when this shield list object was created.|
|updated_at|string(date-time)|true|none|ISO date time string when this shield list object was updated.|
|content|object|true|none|none|

<h2 id="tocS_ShieldList--Mini">ShieldList--Mini</h2>
<!-- backwards compatibility -->
<a id="schemashieldlist--mini"></a>
<a id="schema_ShieldList--Mini"></a>
<a id="tocSshieldlist--mini"></a>
<a id="tocsshieldlist--mini"></a>

```json
{
  "id": "12345678-1234-1234-1234-123456789012",
  "type": "shield_list",
  "name": "My Shield List",
  "content": {
    "type": "country_code"
  }
}
```

A mini representation of a Shield List.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique global identifier for this list.|
|type|string|true|none|The type of object.|
|name|string|true|none|Name of Shield List.|
|content|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shield_list|

<h2 id="tocS_ShieldListContent">ShieldListContent</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontent"></a>
<a id="schema_ShieldListContent"></a>
<a id="tocSshieldlistcontent"></a>
<a id="tocsshieldlistcontent"></a>

```json
{
  "type": "country",
  "country_codes": [
    "US",
    "PL"
  ]
}
```

Representation of content of a Shield List.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShieldListContentCountry](#schemashieldlistcontentcountry)|false|none|Representation of content of a Shield List that contains countries data.|
|*oneOf*|[ShieldListContentDomain](#schemashieldlistcontentdomain)|false|none|Representation of content of a Shield List that contains domains data.|
|*oneOf*|[ShieldListContentEmail](#schemashieldlistcontentemail)|false|none|Representation of content of a Shield List that contains email addresses data.|
|*oneOf*|[ShieldListContentIp](#schemashieldlistcontentip)|false|none|Representation of content of a Shield List that contains ip addresses data.|
|*oneOf*|[ShieldListContentIntegration](#schemashieldlistcontentintegration)|false|none|Representation of content of a Shield List that contains integrations data.|

<h2 id="tocS_ShieldListContentCountry">ShieldListContentCountry</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontentcountry"></a>
<a id="schema_ShieldListContentCountry"></a>
<a id="tocSshieldlistcontentcountry"></a>
<a id="tocsshieldlistcontentcountry"></a>

```json
{
  "type": "country",
  "country_codes": [
    "US",
    "PL"
  ]
}
```

Representation of content of a Shield List that contains countries data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of content in the shield list.|
|country_codes|[string]|true|none|List of country codes values.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|country|

<h2 id="tocS_ShieldListContentDomain">ShieldListContentDomain</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontentdomain"></a>
<a id="schema_ShieldListContentDomain"></a>
<a id="tocSshieldlistcontentdomain"></a>
<a id="tocsshieldlistcontentdomain"></a>

```json
{
  "type": "domain",
  "domains": [
    "box.com",
    "example.com"
  ]
}
```

Representation of content of a Shield List that contains domains data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of content in the shield list.|
|domains|[string]|true|none|List of domain.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|domain|

<h2 id="tocS_ShieldListContentEmail">ShieldListContentEmail</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontentemail"></a>
<a id="schema_ShieldListContentEmail"></a>
<a id="tocSshieldlistcontentemail"></a>
<a id="tocsshieldlistcontentemail"></a>

```json
{
  "type": "email",
  "email_addresses": [
    "example1@box.com",
    "example2@gmail.com"
  ]
}
```

Representation of content of a Shield List that contains email addresses data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of content in the shield list.|
|email_addresses|[string]|true|none|List of emails.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|email|

<h2 id="tocS_ShieldListContentIntegration">ShieldListContentIntegration</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontentintegration"></a>
<a id="schema_ShieldListContentIntegration"></a>
<a id="tocSshieldlistcontentintegration"></a>
<a id="tocsshieldlistcontentintegration"></a>

```json
{
  "type": "integration",
  "integrations": [
    {
      "id": "505e40b5-5d04-446a-9268-72a0ccc13669"
    }
  ]
}
```

Representation of content of a Shield List that contains integrations data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of content in the shield list.|
|integrations|[object]|true|none|List of integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|integration|

<h2 id="tocS_ShieldListContentIp">ShieldListContentIp</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontentip"></a>
<a id="schema_ShieldListContentIp"></a>
<a id="tocSshieldlistcontentip"></a>
<a id="tocsshieldlistcontentip"></a>

```json
{
  "type": "ip",
  "ip_addresses": [
    "127.0.0.1",
    "80.12.12.12/24"
  ]
}
```

Representation of content of a Shield List that contains ip addresses data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of content in the shield list.|
|ip_addresses|[string]|true|none|List of ip addresses and CIDRs.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ip|

<h2 id="tocS_ShieldListContentRequest">ShieldListContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistcontentrequest"></a>
<a id="schema_ShieldListContentRequest"></a>
<a id="tocSshieldlistcontentrequest"></a>
<a id="tocsshieldlistcontentrequest"></a>

```json
{
  "type": "country",
  "country_codes": [
    "US",
    "PL"
  ]
}
```

Representation of content of a Shield List.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShieldListContentCountry](#schemashieldlistcontentcountry)|false|none|Representation of content of a Shield List that contains countries data.|
|*oneOf*|[ShieldListContentDomain](#schemashieldlistcontentdomain)|false|none|Representation of content of a Shield List that contains domains data.|
|*oneOf*|[ShieldListContentEmail](#schemashieldlistcontentemail)|false|none|Representation of content of a Shield List that contains email addresses data.|
|*oneOf*|[ShieldListContentIp](#schemashieldlistcontentip)|false|none|Representation of content of a Shield List that contains ip addresses data.|

<h2 id="tocS_ShieldLists">ShieldLists</h2>
<!-- backwards compatibility -->
<a id="schemashieldlists"></a>
<a id="schema_ShieldLists"></a>
<a id="tocSshieldlists"></a>
<a id="tocsshieldlists"></a>

```json
{
  "entries": [
    {
      "id": "12345678-1234-1234-1234-123456789012",
      "type": "shield_list",
      "name": "My Shield List",
      "content": {
        "type": "country_code"
      }
    }
  ]
}
```

List of Shield List objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[ShieldList--Mini](#schemashieldlist--mini)]|false|none|A list of shield list objects.|

<h2 id="tocS_ShieldListsCreate">ShieldListsCreate</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistscreate"></a>
<a id="schema_ShieldListsCreate"></a>
<a id="tocSshieldlistscreate"></a>
<a id="tocsshieldlistscreate"></a>

```json
{
  "name": "My Shield List",
  "description": "A list of things that are shielded",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
}
```

The schema for Shield List create request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the shield list.|
|description|string|false|none|Optional description of Shield List.|
|content|object|true|none|none|

<h2 id="tocS_ShieldListsUpdate">ShieldListsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemashieldlistsupdate"></a>
<a id="schema_ShieldListsUpdate"></a>
<a id="tocSshieldlistsupdate"></a>
<a id="tocsshieldlistsupdate"></a>

```json
{
  "name": "My Shield List",
  "description": "A list of things that are shielded",
  "content": {
    "type": "country",
    "country_codes": [
      "US",
      "PL"
    ]
  }
}
```

The schema for Shield List update request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the shield list.|
|description|string|false|none|Optional description of Shield List.|
|content|object|true|none|none|

<h2 id="tocS_ShieldRuleItem">ShieldRuleItem</h2>
<!-- backwards compatibility -->
<a id="schemashieldruleitem"></a>
<a id="schema_ShieldRuleItem"></a>
<a id="tocSshieldruleitem"></a>
<a id="tocsshieldruleitem"></a>

```json
{
  "id": "1234567890",
  "type": "shield_rule",
  "rule_category": "Malicious Content",
  "name": "Block malicious files",
  "description": "Blocks files identified as malicious content",
  "priority": "high",
  "created_at": "2012-12-12T10:53:43-08:00",
  "modified_at": "2012-12-12T10:53:43-08:00"
}
```

A Shield rule item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The identifier of the shield rule.|
|type|string|false|none|The value will always be `shield_rule`.|
|rule_category|string|false|none|The category of the shield rule.|
|name|string|false|none|The name of the shield rule.|
|description|string|false|none|The description of the shield rule.|
|priority|string|false|none|The priority level of the shield rule.|
|created_at|string(date-time)|false|none|The date and time when the shield rule was created.|
|modified_at|string(date-time)|false|none|The date and time when the shield rule was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|shield_rule|
|priority|informational|
|priority|low|
|priority|medium|
|priority|high|
|priority|critical|

<h2 id="tocS_TermsOfService--Base">TermsOfService--Base</h2>
<!-- backwards compatibility -->
<a id="schematermsofservice--base"></a>
<a id="schema_TermsOfService--Base"></a>
<a id="tocStermsofservice--base"></a>
<a id="tocstermsofservice--base"></a>

```json
{
  "id": "11446498",
  "type": "terms_of_service"
}
```

The root-level record that is supposed to represent a
single Terms of Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for this terms of service.|
|type|string|true|none|The value will always be `terms_of_service`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|terms_of_service|

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

<h2 id="tocS_UserOrGroupReference">UserOrGroupReference</h2>
<!-- backwards compatibility -->
<a id="schemauserorgroupreference"></a>
<a id="schema_UserOrGroupReference"></a>
<a id="tocSuserorgroupreference"></a>
<a id="tocsuserorgroupreference"></a>

```json
{
  "type": "user",
  "id": "12345"
}
```

A reference to a user or group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type `user` or `group`.|
|id|string|false|none|The identifier of the user or group.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|group|

<h2 id="tocS_UserReference">UserReference</h2>
<!-- backwards compatibility -->
<a id="schemauserreference"></a>
<a id="schema_UserReference"></a>
<a id="tocSuserreference"></a>
<a id="tocsuserreference"></a>

```json
{
  "type": "user",
  "id": "12345"
}
```

User reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value is always `user`.|
|id|string|true|none|The unique identifier for the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|

<h2 id="tocS_UserTrackingCode">UserTrackingCode</h2>
<!-- backwards compatibility -->
<a id="schemausertrackingcode"></a>
<a id="schema_UserTrackingCode"></a>
<a id="tocSusertrackingcode"></a>
<a id="tocsusertrackingcode"></a>

```json
{
  "id": 1234,
  "name": "Employee ID"
}
```

A user tracking code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64) \| null|false|none|The ID of the user tracking code.|
|name|string \| null|false|none|The name of the user tracking code.|

<h2 id="tocS_WeblinkReference">WeblinkReference</h2>
<!-- backwards compatibility -->
<a id="schemaweblinkreference"></a>
<a id="schema_WeblinkReference"></a>
<a id="tocSweblinkreference"></a>
<a id="tocsweblinkreference"></a>

```json
{
  "type": "web_link",
  "id": "42037322"
}
```

Web link reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The value will always be `web_link`.|
|id|string|true|none|ID of the web link.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|web_link|
