<h1 id="cloud-spanner-api">Cloud Spanner API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.

Base URLs:

* <a href="https://spanner.googleapis.com/">https://spanner.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/spanner/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/spanner.admin|Administer your Spanner databases|
|https://www.googleapis.com/auth/spanner.data|View and manage the contents of your Spanner databases|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/spanner.admin|Administer your Spanner databases|
|https://www.googleapis.com/auth/spanner.data|View and manage the contents of your Spanner databases|

<h1 id="cloud-spanner-api-projects">projects</h1>

## spanner.projects.instances.databases.dropDatabase

<a id="opIdspanner.projects.instances.databases.dropDatabase"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{database}`

Drops (aka deletes) a Cloud Spanner database. Completed backups for the database will be retained according to their `expire_time`. Note: Cloud Spanner might continue to accept requests for a few seconds after the database has been deleted.

<h3 id="spannerprojectsinstancesdatabasesdropdatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database|path|string|true|Required. The database to be dropped.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="spannerprojectsinstancesdatabasesdropdatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.getDdl

<a id="opIdspanner.projects.instances.databases.getDdl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/ddl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{database}/ddl`

Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.

<h3 id="spannerprojectsinstancesdatabasesgetddl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database|path|string|true|Required. The database whose schema we wish to get. Values are of the form `projects//instances//databases/`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "protoDescriptors": "string",
  "statements": [
    "string"
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasesgetddl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetDatabaseDdlResponse](#schemagetdatabaseddlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.updateDdl

<a id="opIdspanner.projects.instances.databases.updateDdl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/ddl \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "operationId": "string",
    "protoDescriptors": "string",
    "statements": [
      "string"
    ]
  }'
```

`PATCH /v1/{database}/ddl`

Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `/operations/` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata. The operation has no response.

> Body parameter

```json
{
  "operationId": "string",
  "protoDescriptors": "string",
  "statements": [
    "string"
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasesupdateddl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database|path|string|true|Required. The database to update.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[UpdateDatabaseDdlRequest](#schemaupdatedatabaseddlrequest)|false|none|
|» operationId|body|string|false|If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, `operation_id` is used to construct the name of the resulting Operation. Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and `operation_id` fields can be combined to form the name of the resulting longrunning.Operation: `/operations/`. `operation_id` should be unique within the database, and must be a valid identifier: `a-z*`. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns `ALREADY_EXISTS`.|
|» protoDescriptors|body|string(byte)|false|Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).|
|» statements|body|[string]|false|Required. DDL statements to be applied to the database.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancesdatabasesupdateddl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.sessions.list

<a id="opIdspanner.projects.instances.databases.sessions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{database}/sessions`

Lists all sessions in a given database.

<h3 id="spannerprojectsinstancesdatabasessessionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database|path|string|true|Required. The database in which to list sessions.|
|filter|query|string|false|An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `labels.key` where key is the name of a label Some examples of using filters are: * `labels.env:*` --> The session has the label "env". * `labels.env:dev` --> The session has the label "env" and the value of the label contains the string "dev".|
|pageSize|query|integer|false|Number of sessions to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListSessionsResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "sessions": [
    {
      "approximateLastUseTime": "string",
      "createTime": "string",
      "creatorRole": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasessessionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSessionsResponse](#schemalistsessionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.create

<a id="opIdspanner.projects.instances.databases.sessions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "session": {
      "creatorRole": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /v1/{database}/sessions`

Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions. Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit. Active sessions use additional server resources, so it is a good idea to delete idle and unneeded sessions. Aside from explicit deletes, Cloud Spanner may delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`. Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT 1"`.

> Body parameter

```json
{
  "session": {
    "creatorRole": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database|path|string|true|Required. The database in which the new session is created.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CreateSessionRequest](#schemacreatesessionrequest)|false|none|
|» session|body|[Session](#schemasession)|false|Required. The session to create.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "approximateLastUseTime": "string",
  "createTime": "string",
  "creatorRole": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasessessionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.batchCreate

<a id="opIdspanner.projects.instances.databases.sessions.batchCreate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/sessions:batchCreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sessionCount": 0,
    "sessionTemplate": {
      "creatorRole": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /v1/{database}/sessions:batchCreate`

Creates multiple new sessions. This API can be used to initialize a session cache on the clients. See https://goo.gl/TgSFN2 for best practices on session cache management.

> Body parameter

```json
{
  "sessionCount": 0,
  "sessionTemplate": {
    "creatorRole": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsbatchcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|database|path|string|true|Required. The database in which the new sessions are created.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BatchCreateSessionsRequest](#schemabatchcreatesessionsrequest)|false|none|
|» sessionCount|body|integer(int32)|false|Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary).|
|» sessionTemplate|body|[Session](#schemasession)|false|Parameters to be applied to each created session.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "session": [
    {
      "approximateLastUseTime": "string",
      "createTime": "string",
      "creatorRole": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsbatchcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreateSessionsResponse](#schemabatchcreatesessionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.operations.list

<a id="opIdspanner.projects.instances.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="spannerprojectsinstancesoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="spannerprojectsinstancesoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.operations.delete

<a id="opIdspanner.projects.instances.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="spannerprojectsinstancesoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|etag|query|string|false|Used for optimistic concurrency control as a way to help prevent simultaneous deletes of an instance config from overwriting each other. If not empty, the API only deletes the instance config when the etag provided matches the current status of the requested instance config. Otherwise, deletes the instance config without checking the current status of the requested instance config.|
|validateOnly|query|boolean|false|An option to validate, but not actually execute, a request, and provide the same response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="spannerprojectsinstancesoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.patch

<a id="opIdspanner.projects.instances.databases.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "enableDropProtection": true,
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Updates a Cloud Spanner database. The returned long-running operation can be used to track the progress of updating the database. If the named database does not exist, returns `NOT_FOUND`. While the operation is pending: * The database's reconciling field is set to true. * Cancelling the operation is best-effort. If the cancellation succeeds, the operation metadata's cancel_time is set, the updates are reverted, and the operation terminates with a `CANCELLED` status. * New UpdateDatabase requests will return a `FAILED_PRECONDITION` error until the pending operation is done (returns successfully or with error). * Reading the database via the API continues to give the pre-request values. Upon completion of the returned operation: * The new values are in effect and readable via the API. * The database's reconciling field becomes false. The returned long-running operation will have a name of the format `projects//instances//databases//operations/` and can be used to track the database modification. The metadata field type is UpdateDatabaseMetadata. The response field type is Database, if successful.

> Body parameter

```json
{
  "enableDropProtection": true,
  "name": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.|
|updateMask|query|string|false|Required. The list of fields to update. Currently, only `enable_drop_protection` field can be updated.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Database](#schemadatabase)|false|none|
|» enableDropProtection|body|boolean|false|Whether drop protection is enabled for this database. Defaults to false, if not set.|
|» name|body|string|false|Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancesdatabasespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.getScans

<a id="opIdspanner.projects.instances.databases.getScans"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/scans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/scans`

Request a specific scan with Database-specific data for Cloud Key Visualizer.

<h3 id="spannerprojectsinstancesdatabasesgetscans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The unique name of the scan containing the requested information, specific to the Database service implementing this interface.|
|endTime|query|string|false|The upper bound for the time range to retrieve Scan data for.|
|startTime|query|string|false|These fields restrict the Database-specific information returned in the `Scan.data` field. If a `View` is provided that does not include the `Scan.data` field, these are ignored. This range of time must be entirely contained within the defined time range of the targeted scan. The lower bound for the time range to retrieve Scan data for.|
|view|query|string|false|Specifies which parts of the Scan should be returned in the response. Note, if left unspecified, the FULL view is assumed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|SUMMARY|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "details": {
    "property1": null,
    "property2": null
  },
  "endTime": "string",
  "name": "string",
  "scanData": {
    "data": {
      "dataSourceEndToken": "string",
      "dataSourceSeparatorToken": "string",
      "diagnosticMessages": [
        {
          "info": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "metric": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "metricSpecific": true,
          "severity": "SEVERITY_UNSPECIFIED",
          "shortMessage": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          }
        }
      ],
      "endKeyStrings": [
        "string"
      ],
      "hasPii": true,
      "indexedKeys": [
        "string"
      ],
      "keySeparator": "string",
      "keyUnit": "KEY_UNIT_UNSPECIFIED",
      "metrics": [
        {
          "aggregation": "AGGREGATION_UNSPECIFIED",
          "category": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "derived": {
            "denominator": {
              "args": {
                "property1": "string",
                "property2": "string"
              },
              "message": "string",
              "token": "string"
            },
            "numerator": {
              "args": {
                "property1": "string",
                "property2": "string"
              },
              "message": "string",
              "token": "string"
            }
          },
          "displayLabel": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "hasNonzeroData": true,
          "hotValue": 0,
          "indexedHotKeys": {
            "property1": {
              "sparseHotKeys": {
                "property1": 0,
                "property2": 0
              }
            },
            "property2": {
              "sparseHotKeys": {
                "property1": 0,
                "property2": 0
              }
            }
          },
          "indexedKeyRangeInfos": {
            "property1": {
              "keyRangeInfos": {
                "property1": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                },
                "property2": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                }
              }
            },
            "property2": {
              "keyRangeInfos": {
                "property1": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                },
                "property2": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                }
              }
            }
          },
          "info": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "matrix": {
            "rows": [
              {
                "cols": [
                  0
                ]
              }
            ]
          },
          "unit": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "visible": true
        }
      ],
      "prefixNodes": [
        {
          "dataSourceNode": true,
          "depth": 0,
          "endIndex": 0,
          "startIndex": 0,
          "word": "string"
        }
      ]
    },
    "endTime": "string",
    "startTime": "string"
  },
  "startTime": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasesgetscans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Scan](#schemascan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.operations.cancel

<a id="opIdspanner.projects.instances.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="spannerprojectsinstancesoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="spannerprojectsinstancesoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.backupOperations.list

<a id="opIdspanner.projects.instances.backupOperations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backupOperations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/backupOperations`

Lists the backup long-running operations in the given instance. A backup operation has a name of the form `projects//instances//backups//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.

<h3 id="spannerprojectsinstancesbackupoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The instance of the backup operations. Values are of the form `projects//instances/`.|
|filter|query|string|false|An expression that filters the list of returned backup operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateBackupMetadata is `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `metadata.database:prod` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The source database name of backup contains the string "prod". * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.name:howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CreateBackupMetadata. * The backup name contains the string "howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \ `(metadata.source_backup:test) AND` \ `(metadata.progress.start_time < \"2022-01-18T14:50:00Z\") AND` \ `(error:*)` - Returns operations where: * The operation's metadata type is CopyBackupMetadata. * The source backup name contains the string "test". * The operation started before 2022-01-18T14:50:00Z. * The operation resulted in an error. * `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` \ `(metadata.database:test_db)) OR` \ `((metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) AND` \ `(metadata.source_backup:test_bkp)) AND` \ `(error:*)` - Returns operations where: * The operation's metadata matches either of criteria: * The operation's metadata type is CreateBackupMetadata AND the source database name of the backup contains the string "test_db" * The operation's metadata type is CopyBackupMetadata AND the source backup name contains the string "test_bkp" * The operation resulted in an error.|
|pageSize|query|integer|false|Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListBackupOperationsResponse to the same `parent` and with the same `filter`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="spannerprojectsinstancesbackupoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupOperationsResponse](#schemalistbackupoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.backups.list

<a id="opIdspanner.projects.instances.backups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/backups`

Lists completed and pending backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.

<h3 id="spannerprojectsinstancesbackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The instance to list backups from. Values are of the form `projects//instances/`.|
|filter|query|string|false|An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `name` * `database` * `state` * `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `version_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `name:Howl` - The backup's name contains the string "howl". * `database:prod` - The database's name contains the string "prod". * `state:CREATING` - The backup is pending creation. * `state:READY` - The backup is fully created and ready for use. * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")` - The backup name contains the string "howl" and `create_time` of the backup is before 2018-03-28T14:50:00Z. * `expire_time < \"2018-03-28T14:50:00Z\"` - The backup `expire_time` is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` - The backup's size is greater than 10GB|
|pageSize|query|integer|false|Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "backups": [
    {
      "createTime": "string",
      "database": "string",
      "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
      "encryptionInfo": {
        "encryptionStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "encryptionType": "TYPE_UNSPECIFIED",
        "kmsKeyVersion": "string"
      },
      "expireTime": "string",
      "maxExpireTime": "string",
      "name": "string",
      "referencingBackups": [
        "string"
      ],
      "referencingDatabases": [
        "string"
      ],
      "sizeBytes": "string",
      "state": "STATE_UNSPECIFIED",
      "versionTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="spannerprojectsinstancesbackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupsResponse](#schemalistbackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.backups.create

<a id="opIdspanner.projects.instances.backups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "database": "string",
    "expireTime": "string",
    "name": "string",
    "versionTime": "string"
  }'
```

`POST /v1/{parent}/backups`

Starts creating a new Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup. There can be only one pending backup creation per database. Backup creation of different databases can run concurrently.

> Body parameter

```json
{
  "database": "string",
  "expireTime": "string",
  "name": "string",
  "versionTime": "string"
}
```

<h3 id="spannerprojectsinstancesbackupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the instance in which the backup will be created. This must be the same instance that contains the database the backup will be created from. The backup will be stored in the location(s) specified in the instance configuration of this instance. Values are of the form `projects//instances/`.|
|backupId|query|string|false|Required. The id of the backup to be created. The `backup_id` appended to `parent` forms the full backup name of the form `projects//instances//backups/`.|
|encryptionConfig.encryptionType|query|string|false|Required. The encryption type of the backup.|
|encryptionConfig.kmsKeyName|query|string|false|Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Backup](#schemabackup)|false|none|
|» database|body|string|false|Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`.|
|» expireTime|body|string(google-datetime)|false|Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.|
|» name|body|string|false|Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`.|
|» versionTime|body|string(google-datetime)|false|The backup will contain an externally consistent copy of the database at the timestamp specified by `version_time`. If `version_time` is not specified, the system will set `version_time` to the `create_time` of the backup.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|encryptionConfig.encryptionType|ENCRYPTION_TYPE_UNSPECIFIED|
|encryptionConfig.encryptionType|USE_DATABASE_ENCRYPTION|
|encryptionConfig.encryptionType|GOOGLE_DEFAULT_ENCRYPTION|
|encryptionConfig.encryptionType|CUSTOMER_MANAGED_ENCRYPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancesbackupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.backups.copy

<a id="opIdspanner.projects.instances.backups.copy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/backups:copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backupId": "string",
    "encryptionConfig": {
      "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
      "kmsKeyName": "string"
    },
    "expireTime": "string",
    "sourceBackup": "string"
  }'
```

`POST /v1/{parent}/backups:copy`

Starts copying a Cloud Spanner Backup. The returned backup long-running operation will have a name of the format `projects//instances//backups//operations/` and can be used to track copying of the backup. The operation is associated with the destination backup. The metadata field type is CopyBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the copying and delete the destination backup. Concurrent CopyBackup requests can run on the same source backup.

> Body parameter

```json
{
  "backupId": "string",
  "encryptionConfig": {
    "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
    "kmsKeyName": "string"
  },
  "expireTime": "string",
  "sourceBackup": "string"
}
```

<h3 id="spannerprojectsinstancesbackupscopy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects//instances/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CopyBackupRequest](#schemacopybackuprequest)|false|none|
|» backupId|body|string|false|Required. The id of the backup copy. The `backup_id` appended to `parent` forms the full backup_uri of the form `projects//instances//backups/`.|
|» encryptionConfig|body|[CopyBackupEncryptionConfig](#schemacopybackupencryptionconfig)|false|Optional. The encryption configuration used to encrypt the backup. If this field is not specified, the backup will use the same encryption configuration as the source backup by default, namely encryption_type = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.|
|» expireTime|body|string(google-datetime)|false|Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.|
|» sourceBackup|body|string|false|Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//backups/`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancesbackupscopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databaseOperations.list

<a id="opIdspanner.projects.instances.databaseOperations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/databaseOperations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/databaseOperations`

Lists database longrunning-operations. A database operation has a name of the form `projects//instances//databases//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations.

<h3 id="spannerprojectsinstancesdatabaseoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The instance of the database operations. Values are of the form `projects//instances/`.|
|filter|query|string|false|An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for RestoreDatabaseMetadata is `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` \ `(metadata.source_type:BACKUP) AND` \ `(metadata.backup_info.backup:backup_howl) AND` \ `(metadata.name:restored_howl) AND` \ `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is RestoreDatabaseMetadata. * The database is restored from a backup. * The backup name contains "backup_howl". * The restored database's name contains "restored_howl". * The operation started before 2018-03-28T14:50:00Z. * The operation resulted in an error.|
|pageSize|query|integer|false|Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseOperationsResponse to the same `parent` and with the same `filter`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="spannerprojectsinstancesdatabaseoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatabaseOperationsResponse](#schemalistdatabaseoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.databaseRoles.list

<a id="opIdspanner.projects.instances.databases.databaseRoles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/databaseRoles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/databaseRoles`

Lists Cloud Spanner database roles.

<h3 id="spannerprojectsinstancesdatabasesdatabaseroleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The database whose roles should be listed. Values are of the form `projects//instances//databases/`.|
|pageSize|query|integer|false|Number of database roles to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListDatabaseRolesResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "databaseRoles": [
    {
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasesdatabaseroleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatabaseRolesResponse](#schemalistdatabaserolesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.list

<a id="opIdspanner.projects.instances.databases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/databases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/databases`

Lists Cloud Spanner databases.

<h3 id="spannerprojectsinstancesdatabaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The instance whose databases should be listed. Values are of the form `projects//instances/`.|
|pageSize|query|integer|false|Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "databases": [
    {
      "createTime": "string",
      "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
      "defaultLeader": "string",
      "earliestVersionTime": "string",
      "enableDropProtection": true,
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "name": "string",
      "reconciling": true,
      "restoreInfo": {
        "backupInfo": {
          "backup": "string",
          "createTime": "string",
          "sourceDatabase": "string",
          "versionTime": "string"
        },
        "sourceType": "TYPE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "versionRetentionPeriod": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="spannerprojectsinstancesdatabaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatabasesResponse](#schemalistdatabasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.create

<a id="opIdspanner.projects.instances.databases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/databases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createStatement": "string",
    "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "extraStatements": [
      "string"
    ],
    "protoDescriptors": "string"
  }'
```

`POST /v1/{parent}/databases`

Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `/operations/` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.

> Body parameter

```json
{
  "createStatement": "string",
  "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "extraStatements": [
    "string"
  ],
  "protoDescriptors": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the instance that will serve the new database. Values are of the form `projects//instances/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CreateDatabaseRequest](#schemacreatedatabaserequest)|false|none|
|» createStatement|body|string|false|Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``).|
|» databaseDialect|body|string|false|Optional. The dialect of the Cloud Spanner Database.|
|» encryptionConfig|body|[EncryptionConfig](#schemaencryptionconfig)|false|Optional. The encryption configuration for the database. If this field is not specified, Cloud Spanner will encrypt/decrypt all data at rest using Google default encryption.|
|» extraStatements|body|[string]|false|Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.|
|» protoDescriptors|body|string(byte)|false|Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements in 'extra_statements' above. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» databaseDialect|DATABASE_DIALECT_UNSPECIFIED|
|» databaseDialect|GOOGLE_STANDARD_SQL|
|» databaseDialect|POSTGRESQL|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancesdatabasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.restore

<a id="opIdspanner.projects.instances.databases.restore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/databases:restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backup": "string",
    "databaseId": "string",
    "encryptionConfig": {
      "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
      "kmsKeyName": "string"
    }
  }'
```

`POST /v1/{parent}/databases:restore`

Create a new database by restoring from a completed backup. The new database must be in the same project and in an instance with the same instance configuration as the instance containing the backup. The returned database long-running operation has a name of the format `projects//instances//databases//operations/`, and can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreDatabaseMetadata. The response type is Database, if successful. Cancelling the returned operation will stop the restore and delete the database. There can be only one database being restored into an instance at a time. Once the restore operation completes, a new restore operation can be initiated, without waiting for the optimize operation associated with the first restore to complete.

> Body parameter

```json
{
  "backup": "string",
  "databaseId": "string",
  "encryptionConfig": {
    "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
    "kmsKeyName": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasesrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the instance in which to create the restored database. This instance must be in the same project and have the same instance configuration as the instance containing the source backup. Values are of the form `projects//instances/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[RestoreDatabaseRequest](#schemarestoredatabaserequest)|false|none|
|» backup|body|string|false|Name of the backup from which to restore. Values are of the form `projects//instances//backups/`.|
|» databaseId|body|string|false|Required. The id of the database to create and restore to. This database must not already exist. The `database_id` appended to `parent` forms the full database name of the form `projects//instances//databases/`.|
|» encryptionConfig|body|[RestoreDatabaseEncryptionConfig](#schemarestoredatabaseencryptionconfig)|false|Optional. An encryption configuration describing the encryption type and key resources in Cloud KMS used to encrypt/decrypt the database to restore to. If this field is not specified, the restored database will use the same encryption configuration as the backup by default, namely encryption_type = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancesdatabasesrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instanceConfigOperations.list

<a id="opIdspanner.projects.instanceConfigOperations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instanceConfigOperations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/instanceConfigOperations`

Lists the user-managed instance config long-running operations in the given project. An instance config operation has a name of the form `projects//instanceConfigs//operations/`. The long-running operation metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that have completed/failed/canceled within the last 7 days, and pending operations. Operations returned are ordered by `operation.metadata.value.start_time` in descending order starting from the most recently started operation.

<h3 id="spannerprojectsinstanceconfigoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project of the instance config operations. Values are of the form `projects/`.|
|filter|query|string|false|An expression that filters the list of returned operations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Operation are eligible for filtering: * `name` - The name of the long-running operation * `done` - False if the operation is in progress, else true. * `metadata.@type` - the type of metadata. For example, the type string for CreateInstanceConfigMetadata is `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata`. * `metadata.` - any field in metadata.value. `metadata.@type` must be specified first, if filtering on metadata fields. * `error` - Error associated with the long-running operation. * `response.@type` - the type of response. * `response.` - any field in response.value. You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic. However, you can specify AND, OR, and NOT logic explicitly. Here are a few examples: * `done:true` - The operation is complete. * `(metadata.@type=` \ `type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata) AND` \ `(metadata.instance_config.name:custom-config) AND` \ `(metadata.progress.start_time < \"2021-03-28T14:50:00Z\") AND` \ `(error:*)` - Return operations where: * The operation's metadata type is CreateInstanceConfigMetadata. * The instance config name contains "custom-config". * The operation started before 2021-03-28T14:50:00Z. * The operation resulted in an error.|
|pageSize|query|integer|false|Number of operations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigOperationsResponse to the same `parent` and with the same `filter`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="spannerprojectsinstanceconfigoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstanceConfigOperationsResponse](#schemalistinstanceconfigoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instanceConfigs.list

<a id="opIdspanner.projects.instanceConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instanceConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/instanceConfigs`

Lists the supported instance configurations for a given project.

<h3 id="spannerprojectsinstanceconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/`.|
|pageSize|query|integer|false|Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "instanceConfigs": [
    {
      "baseConfig": "string",
      "configType": "TYPE_UNSPECIFIED",
      "displayName": "string",
      "etag": "string",
      "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "leaderOptions": [
        "string"
      ],
      "name": "string",
      "optionalReplicas": [
        {
          "defaultLeaderLocation": true,
          "location": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "reconciling": true,
      "replicas": [
        {
          "defaultLeaderLocation": true,
          "location": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="spannerprojectsinstanceconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstanceConfigsResponse](#schemalistinstanceconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instanceConfigs.create

<a id="opIdspanner.projects.instanceConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instanceConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instanceConfig": {
      "baseConfig": "string",
      "displayName": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "leaderOptions": [
        "string"
      ],
      "name": "string",
      "replicas": [
        {
          "defaultLeaderLocation": true,
          "location": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ]
    },
    "instanceConfigId": "string",
    "validateOnly": true
  }'
```

`POST /v1/{parent}/instanceConfigs`

Creates an instance config and begins preparing it to be used. The returned long-running operation can be used to track the progress of preparing the new instance config. The instance config name is assigned by the caller. If the named instance config already exists, `CreateInstanceConfig` returns `ALREADY_EXISTS`. Immediately after the request returns: * The instance config is readable via the API, with all requested attributes. The instance config's reconciling field is set to true. Its state is `CREATING`. While the operation is pending: * Cancelling the operation renders the instance config immediately unreadable via the API. * Except for deleting the creating resource, all other attempts to modify the instance config are rejected. Upon completion of the returned operation: * Instances can be created using the instance configuration. * The instance config's reconciling field becomes false. Its state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance config. The metadata field type is CreateInstanceConfigMetadata. The response field type is InstanceConfig, if successful. Authorization requires `spanner.instanceConfigs.create` permission on the resource parent.

> Body parameter

```json
{
  "instanceConfig": {
    "baseConfig": "string",
    "displayName": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "leaderOptions": [
      "string"
    ],
    "name": "string",
    "replicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ]
  },
  "instanceConfigId": "string",
  "validateOnly": true
}
```

<h3 id="spannerprojectsinstanceconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in which to create the instance config. Values are of the form `projects/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CreateInstanceConfigRequest](#schemacreateinstanceconfigrequest)|false|none|
|» instanceConfig|body|[InstanceConfig](#schemainstanceconfig)|false|Required. The InstanceConfig proto of the configuration to create. instance_config.name must be `/instanceConfigs/`. instance_config.base_config must be a Google managed configuration name, e.g. /instanceConfigs/us-east1, /instanceConfigs/nam3.|
|» instanceConfigId|body|string|false|Required. The ID of the instance config to create. Valid identifiers are of the form `custom-[-a-z0-9]*[a-z0-9]` and must be between 2 and 64 characters in length. The `custom-` prefix is required to avoid name conflicts with Google managed configurations.|
|» validateOnly|body|boolean|false|An option to validate, but not actually execute, a request, and provide the same response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstanceconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.list

<a id="opIdspanner.projects.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/instances`

Lists all instances in the given project.

<h3 id="spannerprojectsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project for which a list of instances is requested. Values are of the form `projects/`.|
|filter|query|string|false|An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `display_name` * `labels.key` where key is the name of a label Some examples of using filters are: * `name:*` --> The instance has a name. * `name:Howl` --> The instance's name contains the string "howl". * `name:HOWL` --> Equivalent to above. * `NAME:howl` --> Equivalent to above. * `labels.env:*` --> The instance has the label "env". * `labels.env:dev` --> The instance has the label "env" and the value of the label contains the string "dev". * `name:howl labels.env:dev` --> The instance's name contains "howl" and it has the label "env" with its value containing "dev".|
|instanceDeadline|query|string|false|Deadline used while retrieving metadata for instances. Instances whose metadata cannot be retrieved within this deadline will be added to unreachable in ListInstancesResponse.|
|pageSize|query|integer|false|Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.|
|pageToken|query|string|false|If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "instances": [
    {
      "config": "string",
      "createTime": "string",
      "displayName": "string",
      "endpointUris": [
        "string"
      ],
      "freeInstanceMetadata": {
        "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
        "expireTime": "string",
        "upgradeTime": "string"
      },
      "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nodeCount": 0,
      "processingUnits": 0,
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="spannerprojectsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInstancesResponse](#schemalistinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.create

<a id="opIdspanner.projects.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instance": {
      "config": "string",
      "displayName": "string",
      "endpointUris": [
        "string"
      ],
      "freeInstanceMetadata": {
        "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED"
      },
      "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nodeCount": 0,
      "processingUnits": 0
    },
    "instanceId": "string"
  }'
```

`POST /v1/{parent}/instances`

Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`. Immediately upon completion of this request: * The instance is readable via the API, with all requested attributes but no allocated resources. Its state is `CREATING`. Until completion of the returned operation: * Cancelling the operation renders the instance immediately unreadable via the API. * The instance can be deleted. * All other attempts to modify the instance are rejected. Upon completion of the returned operation: * Billing for all successfully-allocated resources begins (some types may have lower than the requested levels). * Databases can be created in the instance. * The instance's allocated resource levels are readable via the API. * The instance's state becomes `READY`. The returned long-running operation will have a name of the format `/operations/` and can be used to track creation of the instance. The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.

> Body parameter

```json
{
  "instance": {
    "config": "string",
    "displayName": "string",
    "endpointUris": [
      "string"
    ],
    "freeInstanceMetadata": {
      "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED"
    },
    "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeCount": 0,
    "processingUnits": 0
  },
  "instanceId": "string"
}
```

<h3 id="spannerprojectsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project in which to create the instance. Values are of the form `projects/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CreateInstanceRequest](#schemacreateinstancerequest)|false|none|
|» instance|body|[Instance](#schemainstance)|false|Required. The instance to create. The name may be omitted, but if specified must be `/instances/`.|
|» instanceId|body|string|false|Required. The ID of the instance to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="spannerprojectsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.getIamPolicy

<a id="opIdspanner.projects.instances.databases.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v1/{resource}:getIamPolicy`

Gets the access control policy for a database or backup resource. Returns an empty policy if a database or backup exists but does not have a policy set. Authorization requires `spanner.databases.getIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.getIamPolicy` permission on resource.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="spannerprojectsinstancesdatabasesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="spannerprojectsinstancesdatabasesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.setIamPolicy

<a id="opIdspanner.projects.instances.databases.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    }
  }'
```

`POST /v1/{resource}:setIamPolicy`

Sets the access control policy on a database or backup resource. Replaces any existing policy. Authorization requires `spanner.databases.setIamPolicy` permission on resource. For backups, authorization requires `spanner.backups.setIamPolicy` permission on resource.

> Body parameter

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for databases resources.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="spannerprojectsinstancesdatabasessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.databaseRoles.testIamPermissions

<a id="opIdspanner.projects.instances.databases.databaseRoles.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1/{resource}:testIamPermissions`

Returns permissions that the caller has on the specified database or backup resource. Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions. Calling this method on a backup that does not exist will result in a NOT_FOUND error if the user has `spanner.backups.list` permission on the containing instance.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasesdatabaserolestestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects//instances/` for instance resources and `projects//instances//databases/` for database resources.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|REQUIRED: The set of permissions to check for 'resource'. Permissions with wildcards (such as '*', 'spanner.*', 'spanner.instances.*') are not allowed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasesdatabaserolestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.admin )
</aside>

## spanner.projects.instances.databases.sessions.beginTransaction

<a id="opIdspanner.projects.instances.databases.sessions.beginTransaction"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:beginTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    }
  }'
```

`POST /v1/{session}:beginTransaction`

Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.

> Body parameter

```json
{
  "options": {
    "partitionedDml": {},
    "readOnly": {
      "exactStaleness": "string",
      "maxStaleness": "string",
      "minReadTimestamp": "string",
      "readTimestamp": "string",
      "returnReadTimestamp": true,
      "strong": true
    },
    "readWrite": {
      "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
    }
  },
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsbegintransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the transaction runs.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BeginTransactionRequest](#schemabegintransactionrequest)|false|none|
|» options|body|[TransactionOptions](#schematransactionoptions)|false|Required. Options for the new transaction.|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request. Priority is ignored for this request. Setting the priority in this request_options struct will not do anything. To set the priority for a transaction, set it on the reads and writes that are part of this transaction instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "readTimestamp": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsbegintransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Transaction](#schematransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.commit

<a id="opIdspanner.projects.instances.databases.sessions.commit"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:commit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mutations": [
      {
        "delete": {
          "keySet": {
            "all": true,
            "keys": [
              [
                null
              ]
            ],
            "ranges": [
              {
                "endClosed": [
                  null
                ],
                "endOpen": [
                  null
                ],
                "startClosed": [
                  null
                ],
                "startOpen": [
                  null
                ]
              }
            ]
          },
          "table": "string"
        },
        "insert": {
          "columns": [
            "string"
          ],
          "table": "string",
          "values": [
            [
              null
            ]
          ]
        },
        "insertOrUpdate": {
          "columns": [
            "string"
          ],
          "table": "string",
          "values": [
            [
              null
            ]
          ]
        },
        "replace": {
          "columns": [
            "string"
          ],
          "table": "string",
          "values": [
            [
              null
            ]
          ]
        },
        "update": {
          "columns": [
            "string"
          ],
          "table": "string",
          "values": [
            [
              null
            ]
          ]
        }
      }
    ],
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    },
    "returnCommitStats": true,
    "singleUseTransaction": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "transactionId": "string"
  }'
```

`POST /v1/{session}:commit`

Commits a transaction. The request includes the mutations to be applied to rows in the database. `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session. On very rare occasions, `Commit` might return `UNKNOWN`. This can happen, for example, if the client job experiences a 1+ hour networking failure. At that point, Cloud Spanner has lost track of the transaction outcome and we recommend that you perform another read from the database to see the state of things as they are now.

> Body parameter

```json
{
  "mutations": [
    {
      "delete": {
        "keySet": {
          "all": true,
          "keys": [
            [
              null
            ]
          ],
          "ranges": [
            {
              "endClosed": [
                null
              ],
              "endOpen": [
                null
              ],
              "startClosed": [
                null
              ],
              "startOpen": [
                null
              ]
            }
          ]
        },
        "table": "string"
      },
      "insert": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      },
      "insertOrUpdate": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      },
      "replace": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      },
      "update": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      }
    }
  ],
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "returnCommitStats": true,
  "singleUseTransaction": {
    "partitionedDml": {},
    "readOnly": {
      "exactStaleness": "string",
      "maxStaleness": "string",
      "minReadTimestamp": "string",
      "readTimestamp": "string",
      "returnReadTimestamp": true,
      "strong": true
    },
    "readWrite": {
      "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
    }
  },
  "transactionId": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasessessionscommit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the transaction to be committed is running.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CommitRequest](#schemacommitrequest)|false|none|
|» mutations|body|[[Mutation](#schemamutation)]|false|The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request.|
|» returnCommitStats|body|boolean|false|If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`.|
|» singleUseTransaction|body|[TransactionOptions](#schematransactionoptions)|false|Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.|
|» transactionId|body|string(byte)|false|Commit a previously-started transaction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "commitStats": {
    "mutationCount": "string"
  },
  "commitTimestamp": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasessessionscommit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CommitResponse](#schemacommitresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.executeBatchDml

<a id="opIdspanner.projects.instances.databases.sessions.executeBatchDml"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:executeBatchDml \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    },
    "seqno": "string",
    "statements": [
      {
        "paramTypes": {
          "property1": {
            "arrayElementType": {},
            "code": "TYPE_CODE_UNSPECIFIED",
            "protoTypeFqn": "string",
            "structType": {},
            "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
          },
          "property2": {
            "arrayElementType": {},
            "code": "TYPE_CODE_UNSPECIFIED",
            "protoTypeFqn": "string",
            "structType": {},
            "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
          }
        },
        "params": {
          "property1": null,
          "property2": null
        },
        "sql": "string"
      }
    ],
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:executeBatchDml`

Executes a batch of SQL DML statements. This method allows many statements to be run with lower latency than submitting them sequentially with ExecuteSql. Statements are executed in sequential order. A request can succeed even if a statement fails. The ExecuteBatchDmlResponse.status field in the response provides information about the statement that failed. Clients must inspect this field to determine whether an error occurred. Execution stops after the first failed statement; the remaining statements are not executed.

> Body parameter

```json
{
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "seqno": "string",
  "statements": [
    {
      "paramTypes": {
        "property1": {
          "arrayElementType": {},
          "code": "TYPE_CODE_UNSPECIFIED",
          "protoTypeFqn": "string",
          "structType": {},
          "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
        },
        "property2": {
          "arrayElementType": {},
          "code": "TYPE_CODE_UNSPECIFIED",
          "protoTypeFqn": "string",
          "structType": {},
          "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
        }
      },
      "params": {
        "property1": null,
        "property2": null
      },
      "sql": "string"
    }
  ],
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsexecutebatchdml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the DML statements should be performed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ExecuteBatchDmlRequest](#schemaexecutebatchdmlrequest)|false|none|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request.|
|» seqno|body|string(int64)|false|Required. A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.|
|» statements|body|[[Statement](#schemastatement)]|false|Required. The list of statements to execute in this batch. Statements are executed serially, such that the effects of statement `i` are visible to statement `i+1`. Each statement must be a DML statement. Execution stops at the first failed statement; the remaining statements are not executed. Callers must provide at least one statement.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|Required. The transaction to use. Must be a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "resultSets": [
    {
      "metadata": {
        "rowType": {
          "fields": [
            {}
          ]
        },
        "transaction": {
          "id": "string",
          "readTimestamp": "string"
        },
        "undeclaredParameters": {
          "fields": [
            {}
          ]
        }
      },
      "rows": [
        [
          null
        ]
      ],
      "stats": {
        "queryPlan": {
          "planNodes": [
            {
              "childLinks": [
                {
                  "childIndex": 0,
                  "type": "string",
                  "variable": "string"
                }
              ],
              "displayName": "string",
              "executionStats": {
                "property1": null,
                "property2": null
              },
              "index": 0,
              "kind": "KIND_UNSPECIFIED",
              "metadata": {
                "property1": null,
                "property2": null
              },
              "shortRepresentation": {
                "description": "string",
                "subqueries": {
                  "property1": 0,
                  "property2": 0
                }
              }
            }
          ]
        },
        "queryStats": {
          "property1": null,
          "property2": null
        },
        "rowCountExact": "string",
        "rowCountLowerBound": "string"
      }
    }
  ],
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsexecutebatchdml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExecuteBatchDmlResponse](#schemaexecutebatchdmlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.executeSql

<a id="opIdspanner.projects.instances.databases.sessions.executeSql"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:executeSql \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataBoostEnabled": true,
    "paramTypes": {
      "property1": {
        "arrayElementType": {},
        "code": "TYPE_CODE_UNSPECIFIED",
        "protoTypeFqn": "string",
        "structType": {},
        "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
      },
      "property2": {
        "arrayElementType": {},
        "code": "TYPE_CODE_UNSPECIFIED",
        "protoTypeFqn": "string",
        "structType": {},
        "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
      }
    },
    "params": {
      "property1": null,
      "property2": null
    },
    "partitionToken": "string",
    "queryMode": "NORMAL",
    "queryOptions": {
      "optimizerStatisticsPackage": "string",
      "optimizerVersion": "string"
    },
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    },
    "resumeToken": "string",
    "seqno": "string",
    "sql": "string",
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:executeSql`

Executes an SQL statement, returning all results in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error. Operations inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.

> Body parameter

```json
{
  "dataBoostEnabled": true,
  "paramTypes": {
    "property1": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    },
    "property2": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    }
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "partitionToken": "string",
  "queryMode": "NORMAL",
  "queryOptions": {
    "optimizerStatisticsPackage": "string",
    "optimizerVersion": "string"
  },
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "resumeToken": "string",
  "seqno": "string",
  "sql": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsexecutesql-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the SQL query should be performed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ExecuteSqlRequest](#schemaexecutesqlrequest)|false|none|
|» dataBoostEnabled|body|boolean|false|If this is for a partitioned query and this field is set to `true`, the request will be executed via Spanner independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API will return an `INVALID_ARGUMENT` error.|
|» paramTypes|body|object|false|It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.|
|» » **additionalProperties**|body|[Type](#schematype)|false|`Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.|
|» params|body|object|false|Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» partitionToken|body|string(byte)|false|If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token.|
|» queryMode|body|string|false|Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL.|
|» queryOptions|body|[QueryOptions](#schemaqueryoptions)|false|Query optimizer configuration to use for the given query.|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request.|
|» resumeToken|body|string(byte)|false|If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.|
|» seqno|body|string(int64)|false|A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries.|
|» sql|body|string|false|Required. The SQL string.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|The transaction to use. For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency. Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction. Partitioned DML requires an existing Partitioned DML transaction ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» queryMode|NORMAL|
|» queryMode|PLAN|
|» queryMode|PROFILE|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "rowType": {
      "fields": [
        {}
      ]
    },
    "transaction": {
      "id": "string",
      "readTimestamp": "string"
    },
    "undeclaredParameters": {
      "fields": [
        {}
      ]
    }
  },
  "rows": [
    [
      null
    ]
  ],
  "stats": {
    "queryPlan": {
      "planNodes": [
        {
          "childLinks": [
            {
              "childIndex": 0,
              "type": "string",
              "variable": "string"
            }
          ],
          "displayName": "string",
          "executionStats": {
            "property1": null,
            "property2": null
          },
          "index": 0,
          "kind": "KIND_UNSPECIFIED",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "shortRepresentation": {
            "description": "string",
            "subqueries": {
              "property1": 0,
              "property2": 0
            }
          }
        }
      ]
    },
    "queryStats": {
      "property1": null,
      "property2": null
    },
    "rowCountExact": "string",
    "rowCountLowerBound": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsexecutesql-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResultSet](#schemaresultset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.executeStreamingSql

<a id="opIdspanner.projects.instances.databases.sessions.executeStreamingSql"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:executeStreamingSql \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataBoostEnabled": true,
    "paramTypes": {
      "property1": {
        "arrayElementType": {},
        "code": "TYPE_CODE_UNSPECIFIED",
        "protoTypeFqn": "string",
        "structType": {},
        "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
      },
      "property2": {
        "arrayElementType": {},
        "code": "TYPE_CODE_UNSPECIFIED",
        "protoTypeFqn": "string",
        "structType": {},
        "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
      }
    },
    "params": {
      "property1": null,
      "property2": null
    },
    "partitionToken": "string",
    "queryMode": "NORMAL",
    "queryOptions": {
      "optimizerStatisticsPackage": "string",
      "optimizerVersion": "string"
    },
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    },
    "resumeToken": "string",
    "seqno": "string",
    "sql": "string",
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:executeStreamingSql`

Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.

> Body parameter

```json
{
  "dataBoostEnabled": true,
  "paramTypes": {
    "property1": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    },
    "property2": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    }
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "partitionToken": "string",
  "queryMode": "NORMAL",
  "queryOptions": {
    "optimizerStatisticsPackage": "string",
    "optimizerVersion": "string"
  },
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "resumeToken": "string",
  "seqno": "string",
  "sql": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsexecutestreamingsql-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the SQL query should be performed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ExecuteSqlRequest](#schemaexecutesqlrequest)|false|none|
|» dataBoostEnabled|body|boolean|false|If this is for a partitioned query and this field is set to `true`, the request will be executed via Spanner independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API will return an `INVALID_ARGUMENT` error.|
|» paramTypes|body|object|false|It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.|
|» » **additionalProperties**|body|[Type](#schematype)|false|`Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.|
|» params|body|object|false|Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» partitionToken|body|string(byte)|false|If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token.|
|» queryMode|body|string|false|Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL.|
|» queryOptions|body|[QueryOptions](#schemaqueryoptions)|false|Query optimizer configuration to use for the given query.|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request.|
|» resumeToken|body|string(byte)|false|If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.|
|» seqno|body|string(int64)|false|A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries.|
|» sql|body|string|false|Required. The SQL string.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|The transaction to use. For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency. Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction. Partitioned DML requires an existing Partitioned DML transaction ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» queryMode|NORMAL|
|» queryMode|PLAN|
|» queryMode|PROFILE|

> Example responses

> 200 Response

```json
{
  "chunkedValue": true,
  "metadata": {
    "rowType": {
      "fields": [
        {}
      ]
    },
    "transaction": {
      "id": "string",
      "readTimestamp": "string"
    },
    "undeclaredParameters": {
      "fields": [
        {}
      ]
    }
  },
  "resumeToken": "string",
  "stats": {
    "queryPlan": {
      "planNodes": [
        {
          "childLinks": [
            {
              "childIndex": 0,
              "type": "string",
              "variable": "string"
            }
          ],
          "displayName": "string",
          "executionStats": {
            "property1": null,
            "property2": null
          },
          "index": 0,
          "kind": "KIND_UNSPECIFIED",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "shortRepresentation": {
            "description": "string",
            "subqueries": {
              "property1": 0,
              "property2": 0
            }
          }
        }
      ]
    },
    "queryStats": {
      "property1": null,
      "property2": null
    },
    "rowCountExact": "string",
    "rowCountLowerBound": "string"
  },
  "values": [
    null
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsexecutestreamingsql-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PartialResultSet](#schemapartialresultset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.partitionQuery

<a id="opIdspanner.projects.instances.databases.sessions.partitionQuery"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:partitionQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "paramTypes": {
      "property1": {
        "arrayElementType": {},
        "code": "TYPE_CODE_UNSPECIFIED",
        "protoTypeFqn": "string",
        "structType": {},
        "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
      },
      "property2": {
        "arrayElementType": {},
        "code": "TYPE_CODE_UNSPECIFIED",
        "protoTypeFqn": "string",
        "structType": {},
        "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
      }
    },
    "params": {
      "property1": null,
      "property2": null
    },
    "partitionOptions": {
      "maxPartitions": "string",
      "partitionSizeBytes": "string"
    },
    "sql": "string",
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:partitionQuery`

Creates a set of partition tokens that can be used to execute a query operation in parallel. Each of the returned partition tokens can be used by ExecuteStreamingSql to specify a subset of the query result to read. The same session and read-only transaction must be used by the PartitionQueryRequest used to create the partition tokens and the ExecuteSqlRequests that use the partition tokens. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the query, and the whole operation must be restarted from the beginning.

> Body parameter

```json
{
  "paramTypes": {
    "property1": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    },
    "property2": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    }
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "partitionOptions": {
    "maxPartitions": "string",
    "partitionSizeBytes": "string"
  },
  "sql": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionspartitionquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session used to create the partitions.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PartitionQueryRequest](#schemapartitionqueryrequest)|false|none|
|» paramTypes|body|object|false|It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL query parameters. See the definition of Type for more information about SQL types.|
|» » **additionalProperties**|body|[Type](#schematype)|false|`Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.|
|» params|body|object|false|Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» partitionOptions|body|[PartitionOptions](#schemapartitionoptions)|false|Additional options that affect how many partitions are created.|
|» sql|body|string|false|Required. The query request to generate partitions for. The request will fail if the query is not root partitionable. The query plan of a root partitionable query has a single distributed union operator. A distributed union operator conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results. This must not contain DML commands, such as INSERT, UPDATE, or DELETE. Use ExecuteStreamingSql with a PartitionedDml transaction for large, partition-friendly DML operations.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|Read only snapshot transactions are supported, read/write and single use transactions are not.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "partitions": [
    {
      "partitionToken": "string"
    }
  ],
  "transaction": {
    "id": "string",
    "readTimestamp": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionspartitionquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PartitionResponse](#schemapartitionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.partitionRead

<a id="opIdspanner.projects.instances.databases.sessions.partitionRead"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:partitionRead \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "columns": [
      "string"
    ],
    "index": "string",
    "keySet": {
      "all": true,
      "keys": [
        [
          null
        ]
      ],
      "ranges": [
        {
          "endClosed": [
            null
          ],
          "endOpen": [
            null
          ],
          "startClosed": [
            null
          ],
          "startOpen": [
            null
          ]
        }
      ]
    },
    "partitionOptions": {
      "maxPartitions": "string",
      "partitionSizeBytes": "string"
    },
    "table": "string",
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:partitionRead`

Creates a set of partition tokens that can be used to execute a read operation in parallel. Each of the returned partition tokens can be used by StreamingRead to specify a subset of the read result to read. The same session and read-only transaction must be used by the PartitionReadRequest used to create the partition tokens and the ReadRequests that use the partition tokens. There are no ordering guarantees on rows returned among the returned partition tokens, or even within each individual StreamingRead call issued with a partition_token. Partition tokens become invalid when the session used to create them is deleted, is idle for too long, begins a new transaction, or becomes too old. When any of these happen, it is not possible to resume the read, and the whole operation must be restarted from the beginning.

> Body parameter

```json
{
  "columns": [
    "string"
  ],
  "index": "string",
  "keySet": {
    "all": true,
    "keys": [
      [
        null
      ]
    ],
    "ranges": [
      {
        "endClosed": [
          null
        ],
        "endOpen": [
          null
        ],
        "startClosed": [
          null
        ],
        "startOpen": [
          null
        ]
      }
    ]
  },
  "partitionOptions": {
    "maxPartitions": "string",
    "partitionSizeBytes": "string"
  },
  "table": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionspartitionread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session used to create the partitions.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[PartitionReadRequest](#schemapartitionreadrequest)|false|none|
|» columns|body|[string]|false|The columns of table to be returned for each row matching this request.|
|» index|body|string|false|If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.|
|» keySet|body|[KeySet](#schemakeyset)|false|Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index. It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.|
|» partitionOptions|body|[PartitionOptions](#schemapartitionoptions)|false|Additional options that affect how many partitions are created.|
|» table|body|string|false|Required. The name of the table in the database to be read.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|Read only snapshot transactions are supported, read/write and single use transactions are not.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "partitions": [
    {
      "partitionToken": "string"
    }
  ],
  "transaction": {
    "id": "string",
    "readTimestamp": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionspartitionread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PartitionResponse](#schemapartitionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.read

<a id="opIdspanner.projects.instances.databases.sessions.read"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "columns": [
      "string"
    ],
    "dataBoostEnabled": true,
    "index": "string",
    "keySet": {
      "all": true,
      "keys": [
        [
          null
        ]
      ],
      "ranges": [
        {
          "endClosed": [
            null
          ],
          "endOpen": [
            null
          ],
          "startClosed": [
            null
          ],
          "startOpen": [
            null
          ]
        }
      ]
    },
    "limit": "string",
    "partitionToken": "string",
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    },
    "resumeToken": "string",
    "table": "string",
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:read`

Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql. This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error. Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details. Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.

> Body parameter

```json
{
  "columns": [
    "string"
  ],
  "dataBoostEnabled": true,
  "index": "string",
  "keySet": {
    "all": true,
    "keys": [
      [
        null
      ]
    ],
    "ranges": [
      {
        "endClosed": [
          null
        ],
        "endOpen": [
          null
        ],
        "startClosed": [
          null
        ],
        "startOpen": [
          null
        ]
      }
    ]
  },
  "limit": "string",
  "partitionToken": "string",
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "resumeToken": "string",
  "table": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the read should be performed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ReadRequest](#schemareadrequest)|false|none|
|» columns|body|[string]|false|Required. The columns of table to be returned for each row matching this request.|
|» dataBoostEnabled|body|boolean|false|If this is for a partitioned read and this field is set to `true`, the request will be executed via Spanner independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API will return an `INVALID_ARGUMENT` error.|
|» index|body|string|false|If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.|
|» keySet|body|[KeySet](#schemakeyset)|false|Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index. If the partition_token field is empty, rows are yielded in table primary key order (if index is empty) or index key order (if index is non-empty). If the partition_token field is not empty, rows will be yielded in an unspecified order. It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.|
|» limit|body|string(int64)|false|If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set.|
|» partitionToken|body|string(byte)|false|If present, results will be restricted to the specified partition previously created using PartitionRead(). There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token.|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request.|
|» resumeToken|body|string(byte)|false|If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token.|
|» table|body|string|false|Required. The name of the table in the database to be read.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|The transaction to use. If none is provided, the default is a temporary read-only transaction with strong concurrency.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "rowType": {
      "fields": [
        {}
      ]
    },
    "transaction": {
      "id": "string",
      "readTimestamp": "string"
    },
    "undeclaredParameters": {
      "fields": [
        {}
      ]
    }
  },
  "rows": [
    [
      null
    ]
  ],
  "stats": {
    "queryPlan": {
      "planNodes": [
        {
          "childLinks": [
            {
              "childIndex": 0,
              "type": "string",
              "variable": "string"
            }
          ],
          "displayName": "string",
          "executionStats": {
            "property1": null,
            "property2": null
          },
          "index": 0,
          "kind": "KIND_UNSPECIFIED",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "shortRepresentation": {
            "description": "string",
            "subqueries": {
              "property1": 0,
              "property2": 0
            }
          }
        }
      ]
    },
    "queryStats": {
      "property1": null,
      "property2": null
    },
    "rowCountExact": "string",
    "rowCountLowerBound": "string"
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResultSet](#schemaresultset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.rollback

<a id="opIdspanner.projects.instances.databases.sessions.rollback"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:rollback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transactionId": "string"
  }'
```

`POST /v1/{session}:rollback`

Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit. `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.

> Body parameter

```json
{
  "transactionId": "string"
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsrollback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the transaction to roll back is running.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[RollbackRequest](#schemarollbackrequest)|false|none|
|» transactionId|body|string(byte)|false|Required. The transaction to roll back.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="spannerprojectsinstancesdatabasessessionsrollback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

## spanner.projects.instances.databases.sessions.streamingRead

<a id="opIdspanner.projects.instances.databases.sessions.streamingRead"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:streamingRead \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "columns": [
      "string"
    ],
    "dataBoostEnabled": true,
    "index": "string",
    "keySet": {
      "all": true,
      "keys": [
        [
          null
        ]
      ],
      "ranges": [
        {
          "endClosed": [
            null
          ],
          "endOpen": [
            null
          ],
          "startClosed": [
            null
          ],
          "startOpen": [
            null
          ]
        }
      ]
    },
    "limit": "string",
    "partitionToken": "string",
    "requestOptions": {
      "priority": "PRIORITY_UNSPECIFIED",
      "requestTag": "string",
      "transactionTag": "string"
    },
    "resumeToken": "string",
    "table": "string",
    "transaction": {
      "begin": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      },
      "id": "string",
      "singleUse": {
        "partitionedDml": {},
        "readOnly": {
          "exactStaleness": "string",
          "maxStaleness": "string",
          "minReadTimestamp": "string",
          "readTimestamp": "string",
          "returnReadTimestamp": true,
          "strong": true
        },
        "readWrite": {
          "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
        }
      }
    }
  }'
```

`POST /v1/{session}:streamingRead`

Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.

> Body parameter

```json
{
  "columns": [
    "string"
  ],
  "dataBoostEnabled": true,
  "index": "string",
  "keySet": {
    "all": true,
    "keys": [
      [
        null
      ]
    ],
    "ranges": [
      {
        "endClosed": [
          null
        ],
        "endOpen": [
          null
        ],
        "startClosed": [
          null
        ],
        "startOpen": [
          null
        ]
      }
    ]
  },
  "limit": "string",
  "partitionToken": "string",
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "resumeToken": "string",
  "table": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsstreamingread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|session|path|string|true|Required. The session in which the read should be performed.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ReadRequest](#schemareadrequest)|false|none|
|» columns|body|[string]|false|Required. The columns of table to be returned for each row matching this request.|
|» dataBoostEnabled|body|boolean|false|If this is for a partitioned read and this field is set to `true`, the request will be executed via Spanner independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API will return an `INVALID_ARGUMENT` error.|
|» index|body|string|false|If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.|
|» keySet|body|[KeySet](#schemakeyset)|false|Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index. If the partition_token field is empty, rows are yielded in table primary key order (if index is empty) or index key order (if index is non-empty). If the partition_token field is not empty, rows will be yielded in an unspecified order. It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.|
|» limit|body|string(int64)|false|If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set.|
|» partitionToken|body|string(byte)|false|If present, results will be restricted to the specified partition previously created using PartitionRead(). There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token.|
|» requestOptions|body|[RequestOptions](#schemarequestoptions)|false|Common options for this request.|
|» resumeToken|body|string(byte)|false|If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token.|
|» table|body|string|false|Required. The name of the table in the database to be read.|
|» transaction|body|[TransactionSelector](#schematransactionselector)|false|The transaction to use. If none is provided, the default is a temporary read-only transaction with strong concurrency.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "chunkedValue": true,
  "metadata": {
    "rowType": {
      "fields": [
        {}
      ]
    },
    "transaction": {
      "id": "string",
      "readTimestamp": "string"
    },
    "undeclaredParameters": {
      "fields": [
        {}
      ]
    }
  },
  "resumeToken": "string",
  "stats": {
    "queryPlan": {
      "planNodes": [
        {
          "childLinks": [
            {
              "childIndex": 0,
              "type": "string",
              "variable": "string"
            }
          ],
          "displayName": "string",
          "executionStats": {
            "property1": null,
            "property2": null
          },
          "index": 0,
          "kind": "KIND_UNSPECIFIED",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "shortRepresentation": {
            "description": "string",
            "subqueries": {
              "property1": 0,
              "property2": 0
            }
          }
        }
      ]
    },
    "queryStats": {
      "property1": null,
      "property2": null
    },
    "rowCountExact": "string",
    "rowCountLowerBound": "string"
  },
  "values": [
    null
  ]
}
```

<h3 id="spannerprojectsinstancesdatabasessessionsstreamingread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PartialResultSet](#schemapartialresultset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

<h1 id="cloud-spanner-api-scans">scans</h1>

## spanner.scans.list

<a id="opIdspanner.scans.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}`

Return available scans given a Database-specific resource name.

<h3 id="spannerscanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The unique name of the parent resource, specific to the Database service implementing this interface.|
|filter|query|string|false|A filter expression to restrict the results based on information present in the available Scan collection. The filter applies to all fields within the Scan message except for `data`.|
|pageSize|query|integer|false|The maximum number of items to return.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
|view|query|string|false|Specifies which parts of the Scan should be returned in the response. Note, only the SUMMARY view (the default) is currently supported for ListScans.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|SUMMARY|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "scans": [
    {
      "details": {
        "property1": null,
        "property2": null
      },
      "endTime": "string",
      "name": "string",
      "scanData": {
        "data": {
          "dataSourceEndToken": "string",
          "dataSourceSeparatorToken": "string",
          "diagnosticMessages": [
            {
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "metric": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "metricSpecific": true,
              "severity": "SEVERITY_UNSPECIFIED",
              "shortMessage": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              }
            }
          ],
          "endKeyStrings": [
            "string"
          ],
          "hasPii": true,
          "indexedKeys": [
            "string"
          ],
          "keySeparator": "string",
          "keyUnit": "KEY_UNIT_UNSPECIFIED",
          "metrics": [
            {
              "aggregation": "AGGREGATION_UNSPECIFIED",
              "category": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "derived": {
                "denominator": {
                  "args": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "message": "string",
                  "token": "string"
                },
                "numerator": {
                  "args": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "message": "string",
                  "token": "string"
                }
              },
              "displayLabel": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "hasNonzeroData": true,
              "hotValue": 0,
              "indexedHotKeys": {
                "property1": {
                  "sparseHotKeys": {
                    "property1": 0,
                    "property2": 0
                  }
                },
                "property2": {
                  "sparseHotKeys": {
                    "property1": 0,
                    "property2": 0
                  }
                }
              },
              "indexedKeyRangeInfos": {
                "property1": {
                  "keyRangeInfos": {
                    "property1": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    },
                    "property2": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    }
                  }
                },
                "property2": {
                  "keyRangeInfos": {
                    "property1": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    },
                    "property2": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    }
                  }
                }
              },
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "matrix": {
                "rows": [
                  {
                    "cols": [
                      0
                    ]
                  }
                ]
              },
              "unit": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "visible": true
            }
          ],
          "prefixNodes": [
            {
              "dataSourceNode": true,
              "depth": 0,
              "endIndex": 0,
              "startIndex": 0,
              "word": "string"
            }
          ]
        },
        "endTime": "string",
        "startTime": "string"
      },
      "startTime": "string"
    }
  ]
}
```

<h3 id="spannerscanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListScansResponse](#schemalistscansresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spanner.data ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spanner.data )
</aside>

# Schemas

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "createTime": "string",
  "database": "string",
  "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
  "encryptionInfo": {
    "encryptionStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "encryptionType": "TYPE_UNSPECIFIED",
    "kmsKeyVersion": "string"
  },
  "expireTime": "string",
  "maxExpireTime": "string",
  "name": "string",
  "referencingBackups": [
    "string"
  ],
  "referencingDatabases": [
    "string"
  ],
  "sizeBytes": "string",
  "state": "STATE_UNSPECIFIED",
  "versionTime": "string"
}
```

A backup of a Cloud Spanner database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the CreateBackup request is received. If the request does not specify `version_time`, the `version_time` of the backup will be equivalent to the `create_time`.|
|database|string|false|none|Required for the CreateBackup operation. Name of the database from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects//instances//databases/`.|
|databaseDialect|string|false|read-only|Output only. The database dialect information for the backup.|
|encryptionInfo|[EncryptionInfo](#schemaencryptioninfo)|false|none|Output only. The encryption information for the backup.|
|expireTime|string(google-datetime)|false|none|Required for the CreateBackup operation. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 366 days from the time the CreateBackup request is processed. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.|
|maxExpireTime|string(google-datetime)|false|read-only|Output only. The max allowed expiration time of the backup, with microseconds granularity. A backup's expiration time can be configured in multiple APIs: CreateBackup, UpdateBackup, CopyBackup. When updating or copying an existing backup, the expiration time specified must be less than `Backup.max_expire_time`.|
|name|string|false|none|Output only for the CreateBackup operation. Required for the UpdateBackup operation. A globally unique identifier for the backup which cannot be changed. Values are of the form `projects//instances//backups/a-z*[a-z0-9]` The final segment of the name must be between 2 and 60 characters in length. The backup is stored in the location(s) specified in the instance configuration of the instance containing the backup, identified by the prefix of the backup name of the form `projects//instances/`.|
|referencingBackups|[string]|false|read-only|Output only. The names of the destination backups being created by copying this source backup. The backup names are of the form `projects//instances//backups/`. Referencing backups may exist in different instances. The existence of any referencing backup prevents the backup from being deleted. When the copy operation is done (either successfully completed or cancelled or the destination backup is deleted), the reference to the backup is removed.|
|referencingDatabases|[string]|false|read-only|Output only. The names of the restored databases that reference the backup. The database names are of the form `projects//instances//databases/`. Referencing databases may exist in different instances. The existence of any referencing database prevents the backup from being deleted. When a restored database from the backup enters the `READY` state, the reference to the backup is removed.|
|sizeBytes|string(int64)|false|read-only|Output only. Size of the backup in bytes.|
|state|string|false|read-only|Output only. The current state of the backup.|
|versionTime|string(google-datetime)|false|none|The backup will contain an externally consistent copy of the database at the timestamp specified by `version_time`. If `version_time` is not specified, the system will set `version_time` to the `create_time` of the backup.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseDialect|DATABASE_DIALECT_UNSPECIFIED|
|databaseDialect|GOOGLE_STANDARD_SQL|
|databaseDialect|POSTGRESQL|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|

<h2 id="tocS_BackupInfo">BackupInfo</h2>
<!-- backwards compatibility -->
<a id="schemabackupinfo"></a>
<a id="schema_BackupInfo"></a>
<a id="tocSbackupinfo"></a>
<a id="tocsbackupinfo"></a>

```json
{
  "backup": "string",
  "createTime": "string",
  "sourceDatabase": "string",
  "versionTime": "string"
}
```

Information about a backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|none|Name of the backup.|
|createTime|string(google-datetime)|false|none|The time the CreateBackup request was received.|
|sourceDatabase|string|false|none|Name of the database the backup was created from.|
|versionTime|string(google-datetime)|false|none|The backup contains an externally consistent copy of `source_database` at the timestamp specified by `version_time`. If the CreateBackup request did not specify `version_time`, the `version_time` of the backup is equivalent to the `create_time`.|

<h2 id="tocS_BatchCreateSessionsRequest">BatchCreateSessionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatesessionsrequest"></a>
<a id="schema_BatchCreateSessionsRequest"></a>
<a id="tocSbatchcreatesessionsrequest"></a>
<a id="tocsbatchcreatesessionsrequest"></a>

```json
{
  "sessionCount": 0,
  "sessionTemplate": {
    "approximateLastUseTime": "string",
    "createTime": "string",
    "creatorRole": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }
}
```

The request for BatchCreateSessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionCount|integer(int32)|false|none|Required. The number of sessions to be created in this batch call. The API may return fewer than the requested number of sessions. If a specific number of sessions are desired, the client can make additional calls to BatchCreateSessions (adjusting session_count as necessary).|
|sessionTemplate|[Session](#schemasession)|false|none|Parameters to be applied to each created session.|

<h2 id="tocS_BatchCreateSessionsResponse">BatchCreateSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreatesessionsresponse"></a>
<a id="schema_BatchCreateSessionsResponse"></a>
<a id="tocSbatchcreatesessionsresponse"></a>
<a id="tocsbatchcreatesessionsresponse"></a>

```json
{
  "session": [
    {
      "approximateLastUseTime": "string",
      "createTime": "string",
      "creatorRole": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ]
}
```

The response for BatchCreateSessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|[[Session](#schemasession)]|false|none|The freshly created sessions.|

<h2 id="tocS_BeginTransactionRequest">BeginTransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabegintransactionrequest"></a>
<a id="schema_BeginTransactionRequest"></a>
<a id="tocSbegintransactionrequest"></a>
<a id="tocsbegintransactionrequest"></a>

```json
{
  "options": {
    "partitionedDml": {},
    "readOnly": {
      "exactStaleness": "string",
      "maxStaleness": "string",
      "minReadTimestamp": "string",
      "readTimestamp": "string",
      "returnReadTimestamp": true,
      "strong": true
    },
    "readWrite": {
      "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
    }
  },
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  }
}
```

The request for BeginTransaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[TransactionOptions](#schematransactionoptions)|false|none|Required. Options for the new transaction.|
|requestOptions|[RequestOptions](#schemarequestoptions)|false|none|Common options for this request. Priority is ignored for this request. Setting the priority in this request_options struct will not do anything. To set the priority for a transaction, set it on the reads and writes that are part of this transaction instead.|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_ChildLink">ChildLink</h2>
<!-- backwards compatibility -->
<a id="schemachildlink"></a>
<a id="schema_ChildLink"></a>
<a id="tocSchildlink"></a>
<a id="tocschildlink"></a>

```json
{
  "childIndex": 0,
  "type": "string",
  "variable": "string"
}
```

Metadata associated with a parent-child relationship appearing in a PlanNode.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childIndex|integer(int32)|false|none|The node to which the link points.|
|type|string|false|none|The type of the link. For example, in Hash Joins this could be used to distinguish between the build child and the probe child, or in the case of the child being an output variable, to represent the tag associated with the output variable.|
|variable|string|false|none|Only present if the child node is SCALAR and corresponds to an output variable of the parent node. The field carries the name of the output variable. For example, a `TableScan` operator that reads rows from a table will have child links to the `SCALAR` nodes representing the output variables created for each column that is read by the operator. The corresponding `variable` fields will be set to the variable names assigned to the columns.|

<h2 id="tocS_CommitRequest">CommitRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommitrequest"></a>
<a id="schema_CommitRequest"></a>
<a id="tocScommitrequest"></a>
<a id="tocscommitrequest"></a>

```json
{
  "mutations": [
    {
      "delete": {
        "keySet": {
          "all": true,
          "keys": [
            [
              null
            ]
          ],
          "ranges": [
            {
              "endClosed": [
                null
              ],
              "endOpen": [
                null
              ],
              "startClosed": [
                null
              ],
              "startOpen": [
                null
              ]
            }
          ]
        },
        "table": "string"
      },
      "insert": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      },
      "insertOrUpdate": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      },
      "replace": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      },
      "update": {
        "columns": [
          "string"
        ],
        "table": "string",
        "values": [
          [
            null
          ]
        ]
      }
    }
  ],
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "returnCommitStats": true,
  "singleUseTransaction": {
    "partitionedDml": {},
    "readOnly": {
      "exactStaleness": "string",
      "maxStaleness": "string",
      "minReadTimestamp": "string",
      "readTimestamp": "string",
      "returnReadTimestamp": true,
      "strong": true
    },
    "readWrite": {
      "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
    }
  },
  "transactionId": "string"
}
```

The request for Commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mutations|[[Mutation](#schemamutation)]|false|none|The mutations to be executed when this transaction commits. All mutations are applied atomically, in the order they appear in this list.|
|requestOptions|[RequestOptions](#schemarequestoptions)|false|none|Common options for this request.|
|returnCommitStats|boolean|false|none|If `true`, then statistics related to the transaction will be included in the CommitResponse. Default value is `false`.|
|singleUseTransaction|[TransactionOptions](#schematransactionoptions)|false|none|Execute mutations in a temporary transaction. Note that unlike commit of a previously-started transaction, commit with a temporary transaction is non-idempotent. That is, if the `CommitRequest` is sent to Cloud Spanner more than once (for instance, due to retries in the application, or in the transport library), it is possible that the mutations are executed more than once. If this is undesirable, use BeginTransaction and Commit instead.|
|transactionId|string(byte)|false|none|Commit a previously-started transaction.|

<h2 id="tocS_CommitResponse">CommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemacommitresponse"></a>
<a id="schema_CommitResponse"></a>
<a id="tocScommitresponse"></a>
<a id="tocscommitresponse"></a>

```json
{
  "commitStats": {
    "mutationCount": "string"
  },
  "commitTimestamp": "string"
}
```

The response for Commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitStats|[CommitStats](#schemacommitstats)|false|none|The statistics about this Commit. Not returned by default. For more information, see CommitRequest.return_commit_stats.|
|commitTimestamp|string(google-datetime)|false|none|The Cloud Spanner timestamp at which the transaction committed.|

<h2 id="tocS_CommitStats">CommitStats</h2>
<!-- backwards compatibility -->
<a id="schemacommitstats"></a>
<a id="schema_CommitStats"></a>
<a id="tocScommitstats"></a>
<a id="tocscommitstats"></a>

```json
{
  "mutationCount": "string"
}
```

Additional statistics about a commit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mutationCount|string(int64)|false|none|The total number of mutations for the transaction. Knowing the `mutation_count` value can help you maximize the number of mutations in a transaction and minimize the number of API round trips. You can also monitor this value to prevent transactions from exceeding the system [limit](https://cloud.google.com/spanner/quotas#limits_for_creating_reading_updating_and_deleting_data). If the number of mutations exceeds the limit, the server returns [INVALID_ARGUMENT](https://cloud.google.com/spanner/docs/reference/rest/v1/Code#ENUM_VALUES.INVALID_ARGUMENT).|

<h2 id="tocS_ContextValue">ContextValue</h2>
<!-- backwards compatibility -->
<a id="schemacontextvalue"></a>
<a id="schema_ContextValue"></a>
<a id="tocScontextvalue"></a>
<a id="tocscontextvalue"></a>

```json
{
  "label": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "severity": "SEVERITY_UNSPECIFIED",
  "unit": "string",
  "value": 0
}
```

A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|[LocalizedString](#schemalocalizedstring)|false|none|The label for the context value. e.g. "latency".|
|severity|string|false|none|The severity of this context.|
|unit|string|false|none|The unit of the context value.|
|value|number(float)|false|none|The value for the context.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|INFO|
|severity|WARNING|
|severity|ERROR|
|severity|FATAL|

<h2 id="tocS_CopyBackupEncryptionConfig">CopyBackupEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemacopybackupencryptionconfig"></a>
<a id="schema_CopyBackupEncryptionConfig"></a>
<a id="tocScopybackupencryptionconfig"></a>
<a id="tocscopybackupencryptionconfig"></a>

```json
{
  "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
  "kmsKeyName": "string"
}
```

Encryption configuration for the copied backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|string|false|none|Required. The encryption type of the backup.|
|kmsKeyName|string|false|none|Optional. The Cloud KMS key that will be used to protect the backup. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionType|ENCRYPTION_TYPE_UNSPECIFIED|
|encryptionType|USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION|
|encryptionType|GOOGLE_DEFAULT_ENCRYPTION|
|encryptionType|CUSTOMER_MANAGED_ENCRYPTION|

<h2 id="tocS_CopyBackupMetadata">CopyBackupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacopybackupmetadata"></a>
<a id="schema_CopyBackupMetadata"></a>
<a id="tocScopybackupmetadata"></a>
<a id="tocscopybackupmetadata"></a>

```json
{
  "cancelTime": "string",
  "name": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  },
  "sourceBackup": "string"
}
```

Metadata type for the operation returned by CopyBackup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which cancellation of CopyBackup operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|name|string|false|none|The name of the backup being created through the copy operation. Values are of the form `projects//instances//backups/`.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the CopyBackup operation.|
|sourceBackup|string|false|none|The name of the source backup that is being copied. Values are of the form `projects//instances//backups/`.|

<h2 id="tocS_CopyBackupRequest">CopyBackupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopybackuprequest"></a>
<a id="schema_CopyBackupRequest"></a>
<a id="tocScopybackuprequest"></a>
<a id="tocscopybackuprequest"></a>

```json
{
  "backupId": "string",
  "encryptionConfig": {
    "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
    "kmsKeyName": "string"
  },
  "expireTime": "string",
  "sourceBackup": "string"
}
```

The request for CopyBackup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupId|string|false|none|Required. The id of the backup copy. The `backup_id` appended to `parent` forms the full backup_uri of the form `projects//instances//backups/`.|
|encryptionConfig|[CopyBackupEncryptionConfig](#schemacopybackupencryptionconfig)|false|none|Optional. The encryption configuration used to encrypt the backup. If this field is not specified, the backup will use the same encryption configuration as the source backup by default, namely encryption_type = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.|
|expireTime|string(google-datetime)|false|none|Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.|
|sourceBackup|string|false|none|Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//backups/`.|

<h2 id="tocS_CreateBackupMetadata">CreateBackupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatebackupmetadata"></a>
<a id="schema_CreateBackupMetadata"></a>
<a id="tocScreatebackupmetadata"></a>
<a id="tocscreatebackupmetadata"></a>

```json
{
  "cancelTime": "string",
  "database": "string",
  "name": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  }
}
```

Metadata type for the operation returned by CreateBackup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|database|string|false|none|The name of the database the backup is created from.|
|name|string|false|none|The name of the backup being created.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the CreateBackup operation.|

<h2 id="tocS_CreateDatabaseMetadata">CreateDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabasemetadata"></a>
<a id="schema_CreateDatabaseMetadata"></a>
<a id="tocScreatedatabasemetadata"></a>
<a id="tocscreatedatabasemetadata"></a>

```json
{
  "database": "string"
}
```

Metadata type for the operation returned by CreateDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|The database being created.|

<h2 id="tocS_CreateDatabaseRequest">CreateDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabaserequest"></a>
<a id="schema_CreateDatabaseRequest"></a>
<a id="tocScreatedatabaserequest"></a>
<a id="tocscreatedatabaserequest"></a>

```json
{
  "createStatement": "string",
  "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "extraStatements": [
    "string"
  ],
  "protoDescriptors": "string"
}
```

The request for CreateDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createStatement|string|false|none|Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `a-z*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` ``).|
|databaseDialect|string|false|none|Optional. The dialect of the Cloud Spanner Database.|
|encryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|Optional. The encryption configuration for the database. If this field is not specified, Cloud Spanner will encrypt/decrypt all data at rest using Google default encryption.|
|extraStatements|[string]|false|none|Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.|
|protoDescriptors|string(byte)|false|none|Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements in 'extra_statements' above. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseDialect|DATABASE_DIALECT_UNSPECIFIED|
|databaseDialect|GOOGLE_STANDARD_SQL|
|databaseDialect|POSTGRESQL|

<h2 id="tocS_CreateInstanceConfigMetadata">CreateInstanceConfigMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceconfigmetadata"></a>
<a id="schema_CreateInstanceConfigMetadata"></a>
<a id="tocScreateinstanceconfigmetadata"></a>
<a id="tocscreateinstanceconfigmetadata"></a>

```json
{
  "cancelTime": "string",
  "instanceConfig": {
    "baseConfig": "string",
    "configType": "TYPE_UNSPECIFIED",
    "displayName": "string",
    "etag": "string",
    "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "leaderOptions": [
      "string"
    ],
    "name": "string",
    "optionalReplicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "reconciling": true,
    "replicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  }
}
```

Metadata type for the operation returned by CreateInstanceConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which this operation was cancelled.|
|instanceConfig|[InstanceConfig](#schemainstanceconfig)|false|none|The target instance config end state.|
|progress|[InstanceOperationProgress](#schemainstanceoperationprogress)|false|none|The progress of the CreateInstanceConfig operation.|

<h2 id="tocS_CreateInstanceConfigRequest">CreateInstanceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstanceconfigrequest"></a>
<a id="schema_CreateInstanceConfigRequest"></a>
<a id="tocScreateinstanceconfigrequest"></a>
<a id="tocscreateinstanceconfigrequest"></a>

```json
{
  "instanceConfig": {
    "baseConfig": "string",
    "configType": "TYPE_UNSPECIFIED",
    "displayName": "string",
    "etag": "string",
    "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "leaderOptions": [
      "string"
    ],
    "name": "string",
    "optionalReplicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "reconciling": true,
    "replicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "instanceConfigId": "string",
  "validateOnly": true
}
```

The request for CreateInstanceConfigRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceConfig|[InstanceConfig](#schemainstanceconfig)|false|none|Required. The InstanceConfig proto of the configuration to create. instance_config.name must be `/instanceConfigs/`. instance_config.base_config must be a Google managed configuration name, e.g. /instanceConfigs/us-east1, /instanceConfigs/nam3.|
|instanceConfigId|string|false|none|Required. The ID of the instance config to create. Valid identifiers are of the form `custom-[-a-z0-9]*[a-z0-9]` and must be between 2 and 64 characters in length. The `custom-` prefix is required to avoid name conflicts with Google managed configurations.|
|validateOnly|boolean|false|none|An option to validate, but not actually execute, a request, and provide the same response.|

<h2 id="tocS_CreateInstanceMetadata">CreateInstanceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancemetadata"></a>
<a id="schema_CreateInstanceMetadata"></a>
<a id="tocScreateinstancemetadata"></a>
<a id="tocscreateinstancemetadata"></a>

```json
{
  "cancelTime": "string",
  "endTime": "string",
  "instance": {
    "config": "string",
    "createTime": "string",
    "displayName": "string",
    "endpointUris": [
      "string"
    ],
    "freeInstanceMetadata": {
      "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
      "expireTime": "string",
      "upgradeTime": "string"
    },
    "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeCount": 0,
    "processingUnits": 0,
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  },
  "startTime": "string"
}
```

Metadata type for the operation returned by CreateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again.|
|endTime|string(google-datetime)|false|none|The time at which this operation failed or was completed successfully.|
|instance|[Instance](#schemainstance)|false|none|The instance being created.|
|startTime|string(google-datetime)|false|none|The time at which the CreateInstance request was received.|

<h2 id="tocS_CreateInstanceRequest">CreateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateinstancerequest"></a>
<a id="schema_CreateInstanceRequest"></a>
<a id="tocScreateinstancerequest"></a>
<a id="tocscreateinstancerequest"></a>

```json
{
  "instance": {
    "config": "string",
    "createTime": "string",
    "displayName": "string",
    "endpointUris": [
      "string"
    ],
    "freeInstanceMetadata": {
      "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
      "expireTime": "string",
      "upgradeTime": "string"
    },
    "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeCount": 0,
    "processingUnits": 0,
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  },
  "instanceId": "string"
}
```

The request for CreateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instance|[Instance](#schemainstance)|false|none|Required. The instance to create. The name may be omitted, but if specified must be `/instances/`.|
|instanceId|string|false|none|Required. The ID of the instance to create. Valid identifiers are of the form `a-z*[a-z0-9]` and must be between 2 and 64 characters in length.|

<h2 id="tocS_CreateSessionRequest">CreateSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionrequest"></a>
<a id="schema_CreateSessionRequest"></a>
<a id="tocScreatesessionrequest"></a>
<a id="tocscreatesessionrequest"></a>

```json
{
  "session": {
    "approximateLastUseTime": "string",
    "createTime": "string",
    "creatorRole": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }
}
```

The request for CreateSession.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|[Session](#schemasession)|false|none|Required. The session to create.|

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "createTime": "string",
  "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
  "defaultLeader": "string",
  "earliestVersionTime": "string",
  "enableDropProtection": true,
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "encryptionInfo": [
    {
      "encryptionStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "encryptionType": "TYPE_UNSPECIFIED",
      "kmsKeyVersion": "string"
    }
  ],
  "name": "string",
  "reconciling": true,
  "restoreInfo": {
    "backupInfo": {
      "backup": "string",
      "createTime": "string",
      "sourceDatabase": "string",
      "versionTime": "string"
    },
    "sourceType": "TYPE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "versionRetentionPeriod": "string"
}
```

A Cloud Spanner database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. If exists, the time at which the database creation started.|
|databaseDialect|string|false|read-only|Output only. The dialect of the Cloud Spanner Database.|
|defaultLeader|string|false|read-only|Output only. The read-write region which contains the database's leader replicas. This is the same as the value of default_leader database option set using DatabaseAdmin.CreateDatabase or DatabaseAdmin.UpdateDatabaseDdl. If not explicitly set, this is empty.|
|earliestVersionTime|string(google-datetime)|false|read-only|Output only. Earliest timestamp at which older versions of the data can be read. This value is continuously updated by Cloud Spanner and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery.|
|enableDropProtection|boolean|false|none|Whether drop protection is enabled for this database. Defaults to false, if not set.|
|encryptionConfig|[EncryptionConfig](#schemaencryptionconfig)|false|none|Output only. For databases that are using customer managed encryption, this field contains the encryption configuration for the database. For databases that are using Google default or other types of encryption, this field is empty.|
|encryptionInfo|[[EncryptionInfo](#schemaencryptioninfo)]|false|read-only|Output only. For databases that are using customer managed encryption, this field contains the encryption information for the database, such as all Cloud KMS key versions that are in use. The `encryption_status' field inside of each `EncryptionInfo` is not populated. For databases that are using Google default or other types of encryption, this field is empty. This field is propagated lazily from the backend. There might be a delay from when a key version is being used and when it appears in this field.|
|name|string|false|none|Required. The name of the database. Values are of the form `projects//instances//databases/`, where `` is as specified in the `CREATE DATABASE` statement. This name can be passed to other API methods to identify the database.|
|reconciling|boolean|false|read-only|Output only. If true, the database is being updated. If false, there are no ongoing update operations for the database.|
|restoreInfo|[RestoreInfo](#schemarestoreinfo)|false|none|Output only. Applicable only for restored databases. Contains information about the restore source.|
|state|string|false|read-only|Output only. The current database state.|
|versionRetentionPeriod|string|false|read-only|Output only. The period in which Cloud Spanner retains all versions of data for the database. This is the same as the value of version_retention_period database option set using UpdateDatabaseDdl. Defaults to 1 hour, if not set.|

#### Enumerated Values

|Property|Value|
|---|---|
|databaseDialect|DATABASE_DIALECT_UNSPECIFIED|
|databaseDialect|GOOGLE_STANDARD_SQL|
|databaseDialect|POSTGRESQL|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|READY_OPTIMIZING|

<h2 id="tocS_DatabaseRole">DatabaseRole</h2>
<!-- backwards compatibility -->
<a id="schemadatabaserole"></a>
<a id="schema_DatabaseRole"></a>
<a id="tocSdatabaserole"></a>
<a id="tocsdatabaserole"></a>

```json
{
  "name": "string"
}
```

A Cloud Spanner database role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The name of the database role. Values are of the form `projects//instances//databases//databaseRoles/` where `` is as specified in the `CREATE ROLE` DDL statement.|

<h2 id="tocS_Delete">Delete</h2>
<!-- backwards compatibility -->
<a id="schemadelete"></a>
<a id="schema_Delete"></a>
<a id="tocSdelete"></a>
<a id="tocsdelete"></a>

```json
{
  "keySet": {
    "all": true,
    "keys": [
      [
        null
      ]
    ],
    "ranges": [
      {
        "endClosed": [
          null
        ],
        "endOpen": [
          null
        ],
        "startClosed": [
          null
        ],
        "startOpen": [
          null
        ]
      }
    ]
  },
  "table": "string"
}
```

Arguments to delete operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keySet|[KeySet](#schemakeyset)|false|none|Required. The primary keys of the rows within table to delete. The primary keys must be specified in the order in which they appear in the `PRIMARY KEY()` clause of the table's equivalent DDL statement (the DDL statement used to create the table). Delete is idempotent. The transaction will succeed even if some or all rows do not exist.|
|table|string|false|none|Required. The table whose rows will be deleted.|

<h2 id="tocS_DerivedMetric">DerivedMetric</h2>
<!-- backwards compatibility -->
<a id="schemaderivedmetric"></a>
<a id="schema_DerivedMetric"></a>
<a id="tocSderivedmetric"></a>
<a id="tocsderivedmetric"></a>

```json
{
  "denominator": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "numerator": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  }
}
```

A message representing a derived metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denominator|[LocalizedString](#schemalocalizedstring)|false|none|The name of the denominator metric. e.g. "rows".|
|numerator|[LocalizedString](#schemalocalizedstring)|false|none|The name of the numerator metric. e.g. "latency".|

<h2 id="tocS_DiagnosticMessage">DiagnosticMessage</h2>
<!-- backwards compatibility -->
<a id="schemadiagnosticmessage"></a>
<a id="schema_DiagnosticMessage"></a>
<a id="tocSdiagnosticmessage"></a>
<a id="tocsdiagnosticmessage"></a>

```json
{
  "info": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "metric": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "metricSpecific": true,
  "severity": "SEVERITY_UNSPECIFIED",
  "shortMessage": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  }
}
```

A message representing the key visualizer diagnostic messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[LocalizedString](#schemalocalizedstring)|false|none|Information about this diagnostic information.|
|metric|[LocalizedString](#schemalocalizedstring)|false|none|The metric.|
|metricSpecific|boolean|false|none|Whether this message is specific only for the current metric. By default Diagnostics are shown for all metrics, regardless which metric is the currently selected metric in the UI. However occasionally a metric will generate so many messages that the resulting visual clutter becomes overwhelming. In this case setting this to true, will show the diagnostic messages for that metric only if it is the currently selected metric.|
|severity|string|false|none|The severity of the diagnostic message.|
|shortMessage|[LocalizedString](#schemalocalizedstring)|false|none|The short message.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|INFO|
|severity|WARNING|
|severity|ERROR|
|severity|FATAL|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_EncryptionConfig">EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionconfig"></a>
<a id="schema_EncryptionConfig"></a>
<a id="tocSencryptionconfig"></a>
<a id="tocsencryptionconfig"></a>

```json
{
  "kmsKeyName": "string"
}
```

Encryption configuration for a Cloud Spanner database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|The Cloud KMS key to be used for encrypting and decrypting the database. Values are of the form `projects//locations//keyRings//cryptoKeys/`.|

<h2 id="tocS_EncryptionInfo">EncryptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaencryptioninfo"></a>
<a id="schema_EncryptionInfo"></a>
<a id="tocSencryptioninfo"></a>
<a id="tocsencryptioninfo"></a>

```json
{
  "encryptionStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "encryptionType": "TYPE_UNSPECIFIED",
  "kmsKeyVersion": "string"
}
```

Encryption information for a Cloud Spanner database or backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionStatus|[Status](#schemastatus)|false|none|Output only. If present, the status of a recent encrypt/decrypt call on underlying data for this database or backup. Regardless of status, data is always encrypted at rest.|
|encryptionType|string|false|read-only|Output only. The type of encryption.|
|kmsKeyVersion|string|false|read-only|Output only. A Cloud KMS key version that is being used to protect the database or backup.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionType|TYPE_UNSPECIFIED|
|encryptionType|GOOGLE_DEFAULT_ENCRYPTION|
|encryptionType|CUSTOMER_MANAGED_ENCRYPTION|

<h2 id="tocS_ExecuteBatchDmlRequest">ExecuteBatchDmlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutebatchdmlrequest"></a>
<a id="schema_ExecuteBatchDmlRequest"></a>
<a id="tocSexecutebatchdmlrequest"></a>
<a id="tocsexecutebatchdmlrequest"></a>

```json
{
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "seqno": "string",
  "statements": [
    {
      "paramTypes": {
        "property1": {
          "arrayElementType": {},
          "code": "TYPE_CODE_UNSPECIFIED",
          "protoTypeFqn": "string",
          "structType": {},
          "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
        },
        "property2": {
          "arrayElementType": {},
          "code": "TYPE_CODE_UNSPECIFIED",
          "protoTypeFqn": "string",
          "structType": {},
          "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
        }
      },
      "params": {
        "property1": null,
        "property2": null
      },
      "sql": "string"
    }
  ],
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

The request for ExecuteBatchDml.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestOptions|[RequestOptions](#schemarequestoptions)|false|none|Common options for this request.|
|seqno|string(int64)|false|none|Required. A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution.|
|statements|[[Statement](#schemastatement)]|false|none|Required. The list of statements to execute in this batch. Statements are executed serially, such that the effects of statement `i` are visible to statement `i+1`. Each statement must be a DML statement. Execution stops at the first failed statement; the remaining statements are not executed. Callers must provide at least one statement.|
|transaction|[TransactionSelector](#schematransactionselector)|false|none|Required. The transaction to use. Must be a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction.|

<h2 id="tocS_ExecuteBatchDmlResponse">ExecuteBatchDmlResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutebatchdmlresponse"></a>
<a id="schema_ExecuteBatchDmlResponse"></a>
<a id="tocSexecutebatchdmlresponse"></a>
<a id="tocsexecutebatchdmlresponse"></a>

```json
{
  "resultSets": [
    {
      "metadata": {
        "rowType": {
          "fields": [
            {}
          ]
        },
        "transaction": {
          "id": "string",
          "readTimestamp": "string"
        },
        "undeclaredParameters": {
          "fields": [
            {}
          ]
        }
      },
      "rows": [
        [
          null
        ]
      ],
      "stats": {
        "queryPlan": {
          "planNodes": [
            {
              "childLinks": [
                {
                  "childIndex": 0,
                  "type": "string",
                  "variable": "string"
                }
              ],
              "displayName": "string",
              "executionStats": {
                "property1": null,
                "property2": null
              },
              "index": 0,
              "kind": "KIND_UNSPECIFIED",
              "metadata": {
                "property1": null,
                "property2": null
              },
              "shortRepresentation": {
                "description": "string",
                "subqueries": {
                  "property1": 0,
                  "property2": 0
                }
              }
            }
          ]
        },
        "queryStats": {
          "property1": null,
          "property2": null
        },
        "rowCountExact": "string",
        "rowCountLowerBound": "string"
      }
    }
  ],
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

The response for ExecuteBatchDml. Contains a list of ResultSet messages, one for each DML statement that has successfully executed, in the same order as the statements in the request. If a statement fails, the status in the response body identifies the cause of the failure. To check for DML statements that failed, use the following approach: 1. Check the status in the response message. The google.rpc.Code enum value `OK` indicates that all statements were executed successfully. 2. If the status was not `OK`, check the number of result sets in the response. If the response contains `N` ResultSet messages, then statement `N+1` in the request failed. Example 1: * Request: 5 DML statements, all executed successfully. * Response: 5 ResultSet messages, with the status `OK`. Example 2: * Request: 5 DML statements. The third statement has a syntax error. * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`) status. The number of ResultSet messages indicates that the third statement failed, and the fourth and fifth statements were not executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultSets|[[ResultSet](#schemaresultset)]|false|none|One ResultSet for each statement in the request that ran successfully, in the same order as the statements in the request. Each ResultSet does not contain any rows. The ResultSetStats in each ResultSet contain the number of rows modified by the statement. Only the first ResultSet in the response contains valid ResultSetMetadata.|
|status|[Status](#schemastatus)|false|none|If all DML statements are executed successfully, the status is `OK`. Otherwise, the error status of the first failed statement.|

<h2 id="tocS_ExecuteSqlRequest">ExecuteSqlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutesqlrequest"></a>
<a id="schema_ExecuteSqlRequest"></a>
<a id="tocSexecutesqlrequest"></a>
<a id="tocsexecutesqlrequest"></a>

```json
{
  "dataBoostEnabled": true,
  "paramTypes": {
    "property1": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    },
    "property2": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    }
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "partitionToken": "string",
  "queryMode": "NORMAL",
  "queryOptions": {
    "optimizerStatisticsPackage": "string",
    "optimizerVersion": "string"
  },
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "resumeToken": "string",
  "seqno": "string",
  "sql": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

The request for ExecuteSql and ExecuteStreamingSql.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataBoostEnabled|boolean|false|none|If this is for a partitioned query and this field is set to `true`, the request will be executed via Spanner independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API will return an `INVALID_ARGUMENT` error.|
|paramTypes|object|false|none|It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.|
|params|object|false|none|Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names must conform to the naming requirements of identifiers as specified at https://cloud.google.com/spanner/docs/lexical#identifiers. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.|
|partitionToken|string(byte)|false|none|If present, results will be restricted to the specified partition previously created using PartitionQuery(). There must be an exact match for the values of fields common to this message and the PartitionQueryRequest message used to create this partition_token.|
|queryMode|string|false|none|Used to control the amount of debugging information returned in ResultSetStats. If partition_token is set, query_mode can only be set to QueryMode.NORMAL.|
|queryOptions|[QueryOptions](#schemaqueryoptions)|false|none|Query optimizer configuration to use for the given query.|
|requestOptions|[RequestOptions](#schemarequestoptions)|false|none|Common options for this request.|
|resumeToken|string(byte)|false|none|If this request is resuming a previously interrupted SQL statement execution, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new SQL statement execution to resume where the last one left off. The rest of the request parameters must exactly match the request that yielded this token.|
|seqno|string(int64)|false|none|A per-transaction sequence number used to identify this request. This field makes each request idempotent such that if the request is received multiple times, at most one will succeed. The sequence number must be monotonically increasing within the transaction. If a request arrives for the first time with an out-of-order sequence number, the transaction may be aborted. Replays of previously handled requests will yield the same response as the first execution. Required for DML statements. Ignored for queries.|
|sql|string|false|none|Required. The SQL string.|
|transaction|[TransactionSelector](#schematransactionselector)|false|none|The transaction to use. For queries, if none is provided, the default is a temporary read-only transaction with strong concurrency. Standard DML statements require a read-write transaction. To protect against replays, single-use transactions are not supported. The caller must either supply an existing transaction ID or begin a new transaction. Partitioned DML requires an existing Partitioned DML transaction ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|queryMode|NORMAL|
|queryMode|PLAN|
|queryMode|PROFILE|

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "name": "string",
  "type": {
    "arrayElementType": {},
    "code": "TYPE_CODE_UNSPECIFIED",
    "protoTypeFqn": "string",
    "structType": {},
    "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
  }
}
```

Message representing a single field of a struct.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the field. For reads, this is the column name. For SQL queries, it is the column alias (e.g., `"Word"` in the query `"SELECT 'hello' AS Word"`), or the column name (e.g., `"ColName"` in the query `"SELECT ColName FROM Table"`). Some columns might have an empty name (e.g., `"SELECT UPPER(ColName)"`). Note that a query result can contain multiple fields with the same name.|
|type|[Type](#schematype)|false|none|The type of the field.|

<h2 id="tocS_FreeInstanceMetadata">FreeInstanceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafreeinstancemetadata"></a>
<a id="schema_FreeInstanceMetadata"></a>
<a id="tocSfreeinstancemetadata"></a>
<a id="tocsfreeinstancemetadata"></a>

```json
{
  "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
  "expireTime": "string",
  "upgradeTime": "string"
}
```

Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireBehavior|string|false|none|Specifies the expiration behavior of a free instance. The default of ExpireBehavior is `REMOVE_AFTER_GRACE_PERIOD`. This can be modified during or after creation, and before expiration.|
|expireTime|string(google-datetime)|false|read-only|Output only. Timestamp after which the instance will either be upgraded or scheduled for deletion after a grace period. ExpireBehavior is used to choose between upgrading or scheduling the free instance for deletion. This timestamp is set during the creation of a free instance.|
|upgradeTime|string(google-datetime)|false|read-only|Output only. If present, the timestamp at which the free instance was upgraded to a provisioned instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|expireBehavior|EXPIRE_BEHAVIOR_UNSPECIFIED|
|expireBehavior|FREE_TO_PROVISIONED|
|expireBehavior|REMOVE_AFTER_GRACE_PERIOD|

<h2 id="tocS_GetDatabaseDdlResponse">GetDatabaseDdlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdatabaseddlresponse"></a>
<a id="schema_GetDatabaseDdlResponse"></a>
<a id="tocSgetdatabaseddlresponse"></a>
<a id="tocsgetdatabaseddlresponse"></a>

```json
{
  "protoDescriptors": "string",
  "statements": [
    "string"
  ]
}
```

The response for GetDatabaseDdl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protoDescriptors|string(byte)|false|none|Proto descriptors stored in the database. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).|
|statements|[string]|false|none|A list of formatted DDL statements defining the schema of the database specified in the request.|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_IndexedHotKey">IndexedHotKey</h2>
<!-- backwards compatibility -->
<a id="schemaindexedhotkey"></a>
<a id="schema_IndexedHotKey"></a>
<a id="tocSindexedhotkey"></a>
<a id="tocsindexedhotkey"></a>

```json
{
  "sparseHotKeys": {
    "property1": 0,
    "property2": 0
  }
}
```

A message representing a (sparse) collection of hot keys for specific key buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sparseHotKeys|object|false|none|A (sparse) mapping from key bucket index to the index of the specific hot row key for that key bucket. The index of the hot row key can be translated to the actual row key via the ScanData.VisualizationData.indexed_keys repeated field.|

<h2 id="tocS_IndexedKeyRangeInfos">IndexedKeyRangeInfos</h2>
<!-- backwards compatibility -->
<a id="schemaindexedkeyrangeinfos"></a>
<a id="schema_IndexedKeyRangeInfos"></a>
<a id="tocSindexedkeyrangeinfos"></a>
<a id="tocsindexedkeyrangeinfos"></a>

```json
{
  "keyRangeInfos": {
    "property1": {
      "infos": [
        {
          "contextValues": [
            {
              "label": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "severity": "SEVERITY_UNSPECIFIED",
              "unit": "string",
              "value": 0
            }
          ],
          "endKeyIndex": 0,
          "info": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "keysCount": "string",
          "metric": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "startKeyIndex": 0,
          "timeOffset": "string",
          "unit": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "value": 0
        }
      ],
      "totalSize": 0
    },
    "property2": {
      "infos": [
        {
          "contextValues": [
            {
              "label": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "severity": "SEVERITY_UNSPECIFIED",
              "unit": "string",
              "value": 0
            }
          ],
          "endKeyIndex": 0,
          "info": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "keysCount": "string",
          "metric": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "startKeyIndex": 0,
          "timeOffset": "string",
          "unit": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "value": 0
        }
      ],
      "totalSize": 0
    }
  }
}
```

A message representing a (sparse) collection of KeyRangeInfos for specific key buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyRangeInfos|object|false|none|A (sparse) mapping from key bucket index to the KeyRangeInfos for that key bucket.|

<h2 id="tocS_Instance">Instance</h2>
<!-- backwards compatibility -->
<a id="schemainstance"></a>
<a id="schema_Instance"></a>
<a id="tocSinstance"></a>
<a id="tocsinstance"></a>

```json
{
  "config": "string",
  "createTime": "string",
  "displayName": "string",
  "endpointUris": [
    "string"
  ],
  "freeInstanceMetadata": {
    "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
    "expireTime": "string",
    "upgradeTime": "string"
  },
  "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "nodeCount": 0,
  "processingUnits": 0,
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

An isolated set of Cloud Spanner resources on which databases can be hosted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|Required. The name of the instance's configuration. Values are of the form `projects//instanceConfigs/`. See also InstanceConfig and ListInstanceConfigs.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the instance was created.|
|displayName|string|false|none|Required. The descriptive name for this instance as it appears in UIs. Must be unique per project and between 4 and 30 characters in length.|
|endpointUris|[string]|false|none|Deprecated. This field is not populated.|
|freeInstanceMetadata|[FreeInstanceMetadata](#schemafreeinstancemetadata)|false|none|Free instance metadata. Only populated for free instances.|
|instanceType|string|false|none|The `InstanceType` of the current instance.|
|labels|object|false|none|Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. And so you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.|
|name|string|false|none|Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects//instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.|
|nodeCount|integer(int32)|false|none|The number of nodes allocated to this instance. At most one of either node_count or processing_units should be present in the message. Users can set the node_count field to specify the target number of nodes allocated to the instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units.|
|processingUnits|integer(int32)|false|none|The number of processing units allocated to this instance. At most one of processing_units or node_count should be present in the message. Users can set the processing_units field to specify the target number of processing units allocated to the instance. This may be zero in API responses for instances that are not yet in state `READY`. See [the documentation](https://cloud.google.com/spanner/docs/compute-capacity) for more information about nodes and processing units.|
|state|string|false|read-only|Output only. The current instance state. For CreateInstance, the state must be either omitted or set to `CREATING`. For UpdateInstance, the state must be either omitted or set to `READY`.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which the instance was most recently updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|instanceType|INSTANCE_TYPE_UNSPECIFIED|
|instanceType|PROVISIONED|
|instanceType|FREE_INSTANCE|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|

<h2 id="tocS_InstanceConfig">InstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfig"></a>
<a id="schema_InstanceConfig"></a>
<a id="tocSinstanceconfig"></a>
<a id="tocsinstanceconfig"></a>

```json
{
  "baseConfig": "string",
  "configType": "TYPE_UNSPECIFIED",
  "displayName": "string",
  "etag": "string",
  "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "leaderOptions": [
    "string"
  ],
  "name": "string",
  "optionalReplicas": [
    {
      "defaultLeaderLocation": true,
      "location": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "reconciling": true,
  "replicas": [
    {
      "defaultLeaderLocation": true,
      "location": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseConfig|string|false|none|Base configuration name, e.g. projects//instanceConfigs/nam3, based on which this configuration is created. Only set for user managed configurations. `base_config` must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration.|
|configType|string|false|read-only|Output only. Whether this instance config is a Google or User Managed Configuration.|
|displayName|string|false|none|The name of this instance configuration as it appears in UIs.|
|etag|string|false|none|etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a instance config from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform instance config updates in order to avoid race conditions: An etag is returned in the response which contains instance configs, and systems are expected to put that etag in the request to update instance config to ensure that their change will be applied to the same version of the instance config. If no etag is provided in the call to update instance config, then the existing instance config is overwritten blindly.|
|freeInstanceAvailability|string|false|read-only|Output only. Describes whether free instances are available to be created in this instance config.|
|labels|object|false|none|Cloud Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. Cloud Labels can be used to filter collections of resources. They can be used to control how resource metrics are aggregated. And they can be used as arguments to policy management rules (e.g. route, firewall, load balancing, etc.). * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `a-z{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `[a-z0-9_-]{0,63}`. * No more than 64 labels can be associated with a given resource. See https://goo.gl/xmQnxf for more information on and examples of labels. If you plan to use labels in your own code, please note that additional characters may be allowed in the future. Therefore, you are advised to use an internal label representation, such as JSON, which doesn't rely upon specific characters being disallowed. For example, representing labels as the string: name + "_" + value would prove problematic if we were to allow "_" in a future release.|
|leaderOptions|[string]|false|none|Allowed values of the "default_leader" schema option for databases in instances that use this instance configuration.|
|name|string|false|none|A unique identifier for the instance configuration. Values are of the form `projects//instanceConfigs/a-z*`.|
|optionalReplicas|[[ReplicaInfo](#schemareplicainfo)]|false|read-only|Output only. The available optional replicas to choose from for user managed configurations. Populated for Google managed configurations.|
|reconciling|boolean|false|read-only|Output only. If true, the instance config is being created or updated. If false, there are no ongoing operations for the instance config.|
|replicas|[[ReplicaInfo](#schemareplicainfo)]|false|none|The geographic placement of nodes in this instance configuration and their replication properties.|
|state|string|false|read-only|Output only. The current instance config state.|

#### Enumerated Values

|Property|Value|
|---|---|
|configType|TYPE_UNSPECIFIED|
|configType|GOOGLE_MANAGED|
|configType|USER_MANAGED|
|freeInstanceAvailability|FREE_INSTANCE_AVAILABILITY_UNSPECIFIED|
|freeInstanceAvailability|AVAILABLE|
|freeInstanceAvailability|UNSUPPORTED|
|freeInstanceAvailability|DISABLED|
|freeInstanceAvailability|QUOTA_EXCEEDED|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|

<h2 id="tocS_InstanceOperationProgress">InstanceOperationProgress</h2>
<!-- backwards compatibility -->
<a id="schemainstanceoperationprogress"></a>
<a id="schema_InstanceOperationProgress"></a>
<a id="tocSinstanceoperationprogress"></a>
<a id="tocsinstanceoperationprogress"></a>

```json
{
  "endTime": "string",
  "progressPercent": 0,
  "startTime": "string"
}
```

Encapsulates progress related information for a Cloud Spanner long running instance operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|If set, the time at which this operation failed or was completed successfully.|
|progressPercent|integer(int32)|false|none|Percent completion of the operation. Values are between 0 and 100 inclusive.|
|startTime|string(google-datetime)|false|none|Time the request was received.|

<h2 id="tocS_KeyRange">KeyRange</h2>
<!-- backwards compatibility -->
<a id="schemakeyrange"></a>
<a id="schema_KeyRange"></a>
<a id="tocSkeyrange"></a>
<a id="tocskeyrange"></a>

```json
{
  "endClosed": [
    null
  ],
  "endOpen": [
    null
  ],
  "startClosed": [
    null
  ],
  "startOpen": [
    null
  ]
}
```

KeyRange represents a range of rows in a table or index. A range has a start key and an end key. These keys can be open or closed, indicating if the range includes rows with that key. Keys are represented by lists, where the ith value in the list corresponds to the ith component of the table or index primary key. Individual values are encoded as described here. For example, consider the following table definition: CREATE TABLE UserEvents ( UserName STRING(MAX), EventDate STRING(10) ) PRIMARY KEY(UserName, EventDate); The following keys name rows in this table: "Bob", "2014-09-23" Since the `UserEvents` table's `PRIMARY KEY` clause names two columns, each `UserEvents` key has two elements; the first is the `UserName`, and the second is the `EventDate`. Key ranges with multiple components are interpreted lexicographically by component using the table or index key's declared sort order. For example, the following range returns all events for user `"Bob"` that occurred in the year 2015: "start_closed": ["Bob", "2015-01-01"] "end_closed": ["Bob", "2015-12-31"] Start and end keys can omit trailing key components. This affects the inclusion and exclusion of rows that exactly match the provided key components: if the key is closed, then rows that exactly match the provided components are included; if the key is open, then rows that exactly match are not included. For example, the following range includes all events for `"Bob"` that occurred during and after the year 2000: "start_closed": ["Bob", "2000-01-01"] "end_closed": ["Bob"] The next example retrieves all events for `"Bob"`: "start_closed": ["Bob"] "end_closed": ["Bob"] To retrieve events before the year 2000: "start_closed": ["Bob"] "end_open": ["Bob", "2000-01-01"] The following range includes all rows in the table: "start_closed": [] "end_closed": [] This range returns all users whose `UserName` begins with any character from A to C: "start_closed": ["A"] "end_open": ["D"] This range returns all users whose `UserName` begins with B: "start_closed": ["B"] "end_open": ["C"] Key ranges honor column sort order. For example, suppose a table is defined as follows: CREATE TABLE DescendingSortedTable { Key INT64, ... ) PRIMARY KEY(Key DESC); The following range retrieves all rows with key values between 1 and 100 inclusive: "start_closed": ["100"] "end_closed": ["1"] Note that 100 is passed as the start, and 1 is passed as the end, because `Key` is a descending column in the schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endClosed|[object]|false|none|If the end is closed, then the range includes all rows whose first `len(end_closed)` key columns exactly match `end_closed`.|
|endOpen|[object]|false|none|If the end is open, then the range excludes rows whose first `len(end_open)` key columns exactly match `end_open`.|
|startClosed|[object]|false|none|If the start is closed, then the range includes all rows whose first `len(start_closed)` key columns exactly match `start_closed`.|
|startOpen|[object]|false|none|If the start is open, then the range excludes rows whose first `len(start_open)` key columns exactly match `start_open`.|

<h2 id="tocS_KeyRangeInfo">KeyRangeInfo</h2>
<!-- backwards compatibility -->
<a id="schemakeyrangeinfo"></a>
<a id="schema_KeyRangeInfo"></a>
<a id="tocSkeyrangeinfo"></a>
<a id="tocskeyrangeinfo"></a>

```json
{
  "contextValues": [
    {
      "label": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "severity": "SEVERITY_UNSPECIFIED",
      "unit": "string",
      "value": 0
    }
  ],
  "endKeyIndex": 0,
  "info": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "keysCount": "string",
  "metric": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "startKeyIndex": 0,
  "timeOffset": "string",
  "unit": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "value": 0
}
```

A message representing information for a key range (possibly one key).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contextValues|[[ContextValue](#schemacontextvalue)]|false|none|The list of context values for this key range.|
|endKeyIndex|integer(int32)|false|none|The index of the end key in indexed_keys.|
|info|[LocalizedString](#schemalocalizedstring)|false|none|Information about this key range, for all metrics.|
|keysCount|string(int64)|false|none|The number of keys this range covers.|
|metric|[LocalizedString](#schemalocalizedstring)|false|none|The name of the metric. e.g. "latency".|
|startKeyIndex|integer(int32)|false|none|The index of the start key in indexed_keys.|
|timeOffset|string(google-duration)|false|none|The time offset. This is the time since the start of the time interval.|
|unit|[LocalizedString](#schemalocalizedstring)|false|none|The unit of the metric. This is an unstructured field and will be mapped as is to the user.|
|value|number(float)|false|none|The value of the metric.|

<h2 id="tocS_KeyRangeInfos">KeyRangeInfos</h2>
<!-- backwards compatibility -->
<a id="schemakeyrangeinfos"></a>
<a id="schema_KeyRangeInfos"></a>
<a id="tocSkeyrangeinfos"></a>
<a id="tocskeyrangeinfos"></a>

```json
{
  "infos": [
    {
      "contextValues": [
        {
          "label": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "severity": "SEVERITY_UNSPECIFIED",
          "unit": "string",
          "value": 0
        }
      ],
      "endKeyIndex": 0,
      "info": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "keysCount": "string",
      "metric": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "startKeyIndex": 0,
      "timeOffset": "string",
      "unit": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "value": 0
    }
  ],
  "totalSize": 0
}
```

A message representing a list of specific information for multiple key ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|infos|[[KeyRangeInfo](#schemakeyrangeinfo)]|false|none|The list individual KeyRangeInfos.|
|totalSize|integer(int32)|false|none|The total size of the list of all KeyRangeInfos. This may be larger than the number of repeated messages above. If that is the case, this number may be used to determine how many are not being shown.|

<h2 id="tocS_KeySet">KeySet</h2>
<!-- backwards compatibility -->
<a id="schemakeyset"></a>
<a id="schema_KeySet"></a>
<a id="tocSkeyset"></a>
<a id="tocskeyset"></a>

```json
{
  "all": true,
  "keys": [
    [
      null
    ]
  ],
  "ranges": [
    {
      "endClosed": [
        null
      ],
      "endOpen": [
        null
      ],
      "startClosed": [
        null
      ],
      "startOpen": [
        null
      ]
    }
  ]
}
```

`KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All the keys are expected to be in the same table or index. The keys need not be sorted in any particular way. If the same key is specified multiple times in the set (for example if two ranges, two keys, or a key and a range overlap), Cloud Spanner behaves as if the key were only specified once.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|boolean|false|none|For convenience `all` can be set to `true` to indicate that this `KeySet` matches all keys in the table or index. Note that any keys specified in `keys` or `ranges` are only yielded once.|
|keys|[[object]]|false|none|A list of specific keys. Entries in `keys` should have exactly as many elements as there are columns in the primary or index key with which this `KeySet` is used. Individual key values are encoded as described here.|
|ranges|[[KeyRange](#schemakeyrange)]|false|none|A list of key ranges. See KeyRange for more information about key range specifications.|

<h2 id="tocS_ListBackupOperationsResponse">ListBackupOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupoperationsresponse"></a>
<a id="schema_ListBackupOperationsResponse"></a>
<a id="tocSlistbackupoperationsresponse"></a>
<a id="tocslistbackupoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response for ListBackupOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListBackupOperations call to fetch more of the matching metadata.|
|operations|[[Operation](#schemaoperation)]|false|none|The list of matching backup long-running operations. Each operation's name will be prefixed by the backup's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata. Operations returned include those that are pending or have completed/failed/canceled within the last 7 days. Operations returned are ordered by `operation.metadata.value.progress.start_time` in descending order starting from the most recently started operation.|

<h2 id="tocS_ListBackupsResponse">ListBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupsresponse"></a>
<a id="schema_ListBackupsResponse"></a>
<a id="tocSlistbackupsresponse"></a>
<a id="tocslistbackupsresponse"></a>

```json
{
  "backups": [
    {
      "createTime": "string",
      "database": "string",
      "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
      "encryptionInfo": {
        "encryptionStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "encryptionType": "TYPE_UNSPECIFIED",
        "kmsKeyVersion": "string"
      },
      "expireTime": "string",
      "maxExpireTime": "string",
      "name": "string",
      "referencingBackups": [
        "string"
      ],
      "referencingDatabases": [
        "string"
      ],
      "sizeBytes": "string",
      "state": "STATE_UNSPECIFIED",
      "versionTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ListBackups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[[Backup](#schemabackup)]|false|none|The list of matching backups. Backups returned are ordered by `create_time` in descending order, starting from the most recent `create_time`.|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups.|

<h2 id="tocS_ListDatabaseOperationsResponse">ListDatabaseOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabaseoperationsresponse"></a>
<a id="schema_ListDatabaseOperationsResponse"></a>
<a id="tocSlistdatabaseoperationsresponse"></a>
<a id="tocslistdatabaseoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response for ListDatabaseOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListDatabaseOperations call to fetch more of the matching metadata.|
|operations|[[Operation](#schemaoperation)]|false|none|The list of matching database long-running operations. Each operation's name will be prefixed by the database's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata.|

<h2 id="tocS_ListDatabaseRolesResponse">ListDatabaseRolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabaserolesresponse"></a>
<a id="schema_ListDatabaseRolesResponse"></a>
<a id="tocSlistdatabaserolesresponse"></a>
<a id="tocslistdatabaserolesresponse"></a>

```json
{
  "databaseRoles": [
    {
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ListDatabaseRoles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseRoles|[[DatabaseRole](#schemadatabaserole)]|false|none|Database roles that matched the request.|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListDatabaseRoles call to fetch more of the matching roles.|

<h2 id="tocS_ListDatabasesResponse">ListDatabasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabasesresponse"></a>
<a id="schema_ListDatabasesResponse"></a>
<a id="tocSlistdatabasesresponse"></a>
<a id="tocslistdatabasesresponse"></a>

```json
{
  "databases": [
    {
      "createTime": "string",
      "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
      "defaultLeader": "string",
      "earliestVersionTime": "string",
      "enableDropProtection": true,
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "name": "string",
      "reconciling": true,
      "restoreInfo": {
        "backupInfo": {
          "backup": "string",
          "createTime": "string",
          "sourceDatabase": "string",
          "versionTime": "string"
        },
        "sourceType": "TYPE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "versionRetentionPeriod": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ListDatabases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databases|[[Database](#schemadatabase)]|false|none|Databases that matched the request.|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListDatabases call to fetch more of the matching databases.|

<h2 id="tocS_ListInstanceConfigOperationsResponse">ListInstanceConfigOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstanceconfigoperationsresponse"></a>
<a id="schema_ListInstanceConfigOperationsResponse"></a>
<a id="tocSlistinstanceconfigoperationsresponse"></a>
<a id="tocslistinstanceconfigoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response for ListInstanceConfigOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListInstanceConfigOperations call to fetch more of the matching metadata.|
|operations|[[Operation](#schemaoperation)]|false|none|The list of matching instance config long-running operations. Each operation's name will be prefixed by the instance config's name. The operation's metadata field type `metadata.type_url` describes the type of the metadata.|

<h2 id="tocS_ListInstanceConfigsResponse">ListInstanceConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstanceconfigsresponse"></a>
<a id="schema_ListInstanceConfigsResponse"></a>
<a id="tocSlistinstanceconfigsresponse"></a>
<a id="tocslistinstanceconfigsresponse"></a>

```json
{
  "instanceConfigs": [
    {
      "baseConfig": "string",
      "configType": "TYPE_UNSPECIFIED",
      "displayName": "string",
      "etag": "string",
      "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "leaderOptions": [
        "string"
      ],
      "name": "string",
      "optionalReplicas": [
        {
          "defaultLeaderLocation": true,
          "location": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "reconciling": true,
      "replicas": [
        {
          "defaultLeaderLocation": true,
          "location": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

The response for ListInstanceConfigs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceConfigs|[[InstanceConfig](#schemainstanceconfig)]|false|none|The list of requested instance configurations.|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListInstanceConfigs call to fetch more of the matching instance configurations.|

<h2 id="tocS_ListInstancesResponse">ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinstancesresponse"></a>
<a id="schema_ListInstancesResponse"></a>
<a id="tocSlistinstancesresponse"></a>
<a id="tocslistinstancesresponse"></a>

```json
{
  "instances": [
    {
      "config": "string",
      "createTime": "string",
      "displayName": "string",
      "endpointUris": [
        "string"
      ],
      "freeInstanceMetadata": {
        "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
        "expireTime": "string",
        "upgradeTime": "string"
      },
      "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "nodeCount": 0,
      "processingUnits": 0,
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

The response for ListInstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[Instance](#schemainstance)]|false|none|The list of requested instances.|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListInstances call to fetch more of the matching instances.|
|unreachable|[string]|false|none|The list of unreachable instances. It includes the names of instances whose metadata could not be retrieved within instance_deadline.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListScansResponse">ListScansResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistscansresponse"></a>
<a id="schema_ListScansResponse"></a>
<a id="tocSlistscansresponse"></a>
<a id="tocslistscansresponse"></a>

```json
{
  "nextPageToken": "string",
  "scans": [
    {
      "details": {
        "property1": null,
        "property2": null
      },
      "endTime": "string",
      "name": "string",
      "scanData": {
        "data": {
          "dataSourceEndToken": "string",
          "dataSourceSeparatorToken": "string",
          "diagnosticMessages": [
            {
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "metric": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "metricSpecific": true,
              "severity": "SEVERITY_UNSPECIFIED",
              "shortMessage": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              }
            }
          ],
          "endKeyStrings": [
            "string"
          ],
          "hasPii": true,
          "indexedKeys": [
            "string"
          ],
          "keySeparator": "string",
          "keyUnit": "KEY_UNIT_UNSPECIFIED",
          "metrics": [
            {
              "aggregation": "AGGREGATION_UNSPECIFIED",
              "category": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "derived": {
                "denominator": {
                  "args": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "message": "string",
                  "token": "string"
                },
                "numerator": {
                  "args": {
                    "property1": "string",
                    "property2": "string"
                  },
                  "message": "string",
                  "token": "string"
                }
              },
              "displayLabel": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "hasNonzeroData": true,
              "hotValue": 0,
              "indexedHotKeys": {
                "property1": {
                  "sparseHotKeys": {
                    "property1": 0,
                    "property2": 0
                  }
                },
                "property2": {
                  "sparseHotKeys": {
                    "property1": 0,
                    "property2": 0
                  }
                }
              },
              "indexedKeyRangeInfos": {
                "property1": {
                  "keyRangeInfos": {
                    "property1": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    },
                    "property2": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    }
                  }
                },
                "property2": {
                  "keyRangeInfos": {
                    "property1": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    },
                    "property2": {
                      "infos": [
                        {
                          "contextValues": [
                            {
                              "label": {
                                "args": {
                                  "property1": "string",
                                  "property2": "string"
                                },
                                "message": "string",
                                "token": "string"
                              },
                              "severity": "SEVERITY_UNSPECIFIED",
                              "unit": "string",
                              "value": 0
                            }
                          ],
                          "endKeyIndex": 0,
                          "info": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "keysCount": "string",
                          "metric": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "startKeyIndex": 0,
                          "timeOffset": "string",
                          "unit": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "value": 0
                        }
                      ],
                      "totalSize": 0
                    }
                  }
                }
              },
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "matrix": {
                "rows": [
                  {
                    "cols": [
                      0
                    ]
                  }
                ]
              },
              "unit": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "visible": true
            }
          ],
          "prefixNodes": [
            {
              "dataSourceNode": true,
              "depth": 0,
              "endIndex": 0,
              "startIndex": 0,
              "word": "string"
            }
          ]
        },
        "endTime": "string",
        "startTime": "string"
      },
      "startTime": "string"
    }
  ]
}
```

Response method from the ListScans method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|scans|[[Scan](#schemascan)]|false|none|Available scans based on the list query parameters.|

<h2 id="tocS_ListSessionsResponse">ListSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsessionsresponse"></a>
<a id="schema_ListSessionsResponse"></a>
<a id="tocSlistsessionsresponse"></a>
<a id="tocslistsessionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "sessions": [
    {
      "approximateLastUseTime": "string",
      "createTime": "string",
      "creatorRole": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ]
}
```

The response for ListSessions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|`next_page_token` can be sent in a subsequent ListSessions call to fetch more of the matching sessions.|
|sessions|[[Session](#schemasession)]|false|none|The list of requested sessions.|

<h2 id="tocS_LocalizedString">LocalizedString</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedstring"></a>
<a id="schema_LocalizedString"></a>
<a id="tocSlocalizedstring"></a>
<a id="tocslocalizedstring"></a>

```json
{
  "args": {
    "property1": "string",
    "property2": "string"
  },
  "message": "string",
  "token": "string"
}
```

A message representing a user-facing string whose value may need to be translated before being displayed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|object|false|none|A map of arguments used when creating the localized message. Keys represent parameter names which may be used by the localized version when substituting dynamic values.|
|message|string|false|none|The canonical English version of this message. If no token is provided or the front-end has no message associated with the token, this text will be displayed as-is.|
|token|string|false|none|The token identifying the message, e.g. 'METRIC_READ_CPU'. This should be unique within the service.|

<h2 id="tocS_Metric">Metric</h2>
<!-- backwards compatibility -->
<a id="schemametric"></a>
<a id="schema_Metric"></a>
<a id="tocSmetric"></a>
<a id="tocsmetric"></a>

```json
{
  "aggregation": "AGGREGATION_UNSPECIFIED",
  "category": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "derived": {
    "denominator": {
      "args": {
        "property1": "string",
        "property2": "string"
      },
      "message": "string",
      "token": "string"
    },
    "numerator": {
      "args": {
        "property1": "string",
        "property2": "string"
      },
      "message": "string",
      "token": "string"
    }
  },
  "displayLabel": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "hasNonzeroData": true,
  "hotValue": 0,
  "indexedHotKeys": {
    "property1": {
      "sparseHotKeys": {
        "property1": 0,
        "property2": 0
      }
    },
    "property2": {
      "sparseHotKeys": {
        "property1": 0,
        "property2": 0
      }
    }
  },
  "indexedKeyRangeInfos": {
    "property1": {
      "keyRangeInfos": {
        "property1": {
          "infos": [
            {
              "contextValues": [
                {
                  "label": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "severity": "SEVERITY_UNSPECIFIED",
                  "unit": "string",
                  "value": 0
                }
              ],
              "endKeyIndex": 0,
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "keysCount": "string",
              "metric": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "startKeyIndex": 0,
              "timeOffset": "string",
              "unit": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "value": 0
            }
          ],
          "totalSize": 0
        },
        "property2": {
          "infos": [
            {
              "contextValues": [
                {
                  "label": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "severity": "SEVERITY_UNSPECIFIED",
                  "unit": "string",
                  "value": 0
                }
              ],
              "endKeyIndex": 0,
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "keysCount": "string",
              "metric": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "startKeyIndex": 0,
              "timeOffset": "string",
              "unit": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "value": 0
            }
          ],
          "totalSize": 0
        }
      }
    },
    "property2": {
      "keyRangeInfos": {
        "property1": {
          "infos": [
            {
              "contextValues": [
                {
                  "label": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "severity": "SEVERITY_UNSPECIFIED",
                  "unit": "string",
                  "value": 0
                }
              ],
              "endKeyIndex": 0,
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "keysCount": "string",
              "metric": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "startKeyIndex": 0,
              "timeOffset": "string",
              "unit": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "value": 0
            }
          ],
          "totalSize": 0
        },
        "property2": {
          "infos": [
            {
              "contextValues": [
                {
                  "label": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "severity": "SEVERITY_UNSPECIFIED",
                  "unit": "string",
                  "value": 0
                }
              ],
              "endKeyIndex": 0,
              "info": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "keysCount": "string",
              "metric": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "startKeyIndex": 0,
              "timeOffset": "string",
              "unit": {
                "args": {
                  "property1": "string",
                  "property2": "string"
                },
                "message": "string",
                "token": "string"
              },
              "value": 0
            }
          ],
          "totalSize": 0
        }
      }
    }
  },
  "info": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "matrix": {
    "rows": [
      {
        "cols": [
          0
        ]
      }
    ]
  },
  "unit": {
    "args": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "token": "string"
  },
  "visible": true
}
```

A message representing the actual monitoring data, values for each key bucket over time, of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregation|string|false|none|The aggregation function used to aggregate each key bucket|
|category|[LocalizedString](#schemalocalizedstring)|false|none|The category of the metric, e.g. "Activity", "Alerts", "Reads", etc.|
|derived|[DerivedMetric](#schemaderivedmetric)|false|none|The references to numerator and denominator metrics for a derived metric.|
|displayLabel|[LocalizedString](#schemalocalizedstring)|false|none|The displayed label of the metric.|
|hasNonzeroData|boolean|false|none|Whether the metric has any non-zero data.|
|hotValue|number(float)|false|none|The value that is considered hot for the metric. On a per metric basis hotness signals high utilization and something that might potentially be a cause for concern by the end user. hot_value is used to calibrate and scale visual color scales.|
|indexedHotKeys|object|false|none|The (sparse) mapping from time index to an IndexedHotKey message, representing those time intervals for which there are hot keys.|
|indexedKeyRangeInfos|object|false|none|The (sparse) mapping from time interval index to an IndexedKeyRangeInfos message, representing those time intervals for which there are informational messages concerning key ranges.|
|info|[LocalizedString](#schemalocalizedstring)|false|none|Information about the metric.|
|matrix|[MetricMatrix](#schemametricmatrix)|false|none|The data for the metric as a matrix.|
|unit|[LocalizedString](#schemalocalizedstring)|false|none|The unit of the metric.|
|visible|boolean|false|none|Whether the metric is visible to the end user.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregation|AGGREGATION_UNSPECIFIED|
|aggregation|MAX|
|aggregation|SUM|

<h2 id="tocS_MetricMatrix">MetricMatrix</h2>
<!-- backwards compatibility -->
<a id="schemametricmatrix"></a>
<a id="schema_MetricMatrix"></a>
<a id="tocSmetricmatrix"></a>
<a id="tocsmetricmatrix"></a>

```json
{
  "rows": [
    {
      "cols": [
        0
      ]
    }
  ]
}
```

A message representing a matrix of floats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[[MetricMatrixRow](#schemametricmatrixrow)]|false|none|The rows of the matrix.|

<h2 id="tocS_MetricMatrixRow">MetricMatrixRow</h2>
<!-- backwards compatibility -->
<a id="schemametricmatrixrow"></a>
<a id="schema_MetricMatrixRow"></a>
<a id="tocSmetricmatrixrow"></a>
<a id="tocsmetricmatrixrow"></a>

```json
{
  "cols": [
    0
  ]
}
```

A message representing a row of a matrix of floats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|[number(float)]|false|none|The columns of the row.|

<h2 id="tocS_Mutation">Mutation</h2>
<!-- backwards compatibility -->
<a id="schemamutation"></a>
<a id="schema_Mutation"></a>
<a id="tocSmutation"></a>
<a id="tocsmutation"></a>

```json
{
  "delete": {
    "keySet": {
      "all": true,
      "keys": [
        [
          null
        ]
      ],
      "ranges": [
        {
          "endClosed": [
            null
          ],
          "endOpen": [
            null
          ],
          "startClosed": [
            null
          ],
          "startOpen": [
            null
          ]
        }
      ]
    },
    "table": "string"
  },
  "insert": {
    "columns": [
      "string"
    ],
    "table": "string",
    "values": [
      [
        null
      ]
    ]
  },
  "insertOrUpdate": {
    "columns": [
      "string"
    ],
    "table": "string",
    "values": [
      [
        null
      ]
    ]
  },
  "replace": {
    "columns": [
      "string"
    ],
    "table": "string",
    "values": [
      [
        null
      ]
    ]
  },
  "update": {
    "columns": [
      "string"
    ],
    "table": "string",
    "values": [
      [
        null
      ]
    ]
  }
}
```

A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|[Delete](#schemadelete)|false|none|Delete rows from a table. Succeeds whether or not the named rows were present.|
|insert|[Write](#schemawrite)|false|none|Insert new rows in a table. If any of the rows already exist, the write or transaction fails with error `ALREADY_EXISTS`.|
|insertOrUpdate|[Write](#schemawrite)|false|none|Like insert, except that if the row already exists, then its column values are overwritten with the ones provided. Any column values not explicitly written are preserved. When using insert_or_update, just as when using insert, all `NOT NULL` columns in the table must be given a value. This holds true even when the row already exists and will therefore actually be updated.|
|replace|[Write](#schemawrite)|false|none|Like insert, except that if the row already exists, it is deleted, and the column values provided are inserted instead. Unlike insert_or_update, this means any values not explicitly written become `NULL`. In an interleaved table, if you create the child table with the `ON DELETE CASCADE` annotation, then replacing a parent row also deletes the child rows. Otherwise, you must delete the child rows before you replace the parent row.|
|update|[Write](#schemawrite)|false|none|Update existing rows in a table. If any of the rows does not already exist, the transaction fails with error `NOT_FOUND`.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationProgress">OperationProgress</h2>
<!-- backwards compatibility -->
<a id="schemaoperationprogress"></a>
<a id="schema_OperationProgress"></a>
<a id="tocSoperationprogress"></a>
<a id="tocsoperationprogress"></a>

```json
{
  "endTime": "string",
  "progressPercent": 0,
  "startTime": "string"
}
```

Encapsulates progress related information for a Cloud Spanner long running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|If set, the time at which this operation failed or was completed successfully.|
|progressPercent|integer(int32)|false|none|Percent completion of the operation. Values are between 0 and 100 inclusive.|
|startTime|string(google-datetime)|false|none|Time the request was received.|

<h2 id="tocS_OptimizeRestoredDatabaseMetadata">OptimizeRestoredDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoptimizerestoreddatabasemetadata"></a>
<a id="schema_OptimizeRestoredDatabaseMetadata"></a>
<a id="tocSoptimizerestoreddatabasemetadata"></a>
<a id="tocsoptimizerestoreddatabasemetadata"></a>

```json
{
  "name": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  }
}
```

Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored database. This long-running operation is automatically created by the system after the successful completion of a database restore, and cannot be cancelled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the restored database being optimized.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the post-restore optimizations.|

<h2 id="tocS_PartialResultSet">PartialResultSet</h2>
<!-- backwards compatibility -->
<a id="schemapartialresultset"></a>
<a id="schema_PartialResultSet"></a>
<a id="tocSpartialresultset"></a>
<a id="tocspartialresultset"></a>

```json
{
  "chunkedValue": true,
  "metadata": {
    "rowType": {
      "fields": [
        {}
      ]
    },
    "transaction": {
      "id": "string",
      "readTimestamp": "string"
    },
    "undeclaredParameters": {
      "fields": [
        {}
      ]
    }
  },
  "resumeToken": "string",
  "stats": {
    "queryPlan": {
      "planNodes": [
        {
          "childLinks": [
            {
              "childIndex": 0,
              "type": "string",
              "variable": "string"
            }
          ],
          "displayName": "string",
          "executionStats": {
            "property1": null,
            "property2": null
          },
          "index": 0,
          "kind": "KIND_UNSPECIFIED",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "shortRepresentation": {
            "description": "string",
            "subqueries": {
              "property1": 0,
              "property2": 0
            }
          }
        }
      ]
    },
    "queryStats": {
      "property1": null,
      "property2": null
    },
    "rowCountExact": "string",
    "rowCountLowerBound": "string"
  },
  "values": [
    null
  ]
}
```

Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chunkedValue|boolean|false|none|If true, then the final value in values is chunked, and must be combined with more values from subsequent `PartialResultSet`s to obtain a complete field value.|
|metadata|[ResultSetMetadata](#schemaresultsetmetadata)|false|none|Metadata about the result set, such as row type information. Only present in the first response.|
|resumeToken|string(byte)|false|none|Streaming calls might be interrupted for a variety of reasons, such as TCP connection loss. If this occurs, the stream of results can be resumed by re-sending the original request and including `resume_token`. Note that executing any other transaction in the same session invalidates the token.|
|stats|[ResultSetStats](#schemaresultsetstats)|false|none|Query plan and execution statistics for the statement that produced this streaming result set. These can be requested by setting ExecuteSqlRequest.query_mode and are sent only once with the last response in the stream. This field will also be present in the last response for DML statements.|
|values|[object]|false|none|A streamed result set consists of a stream of values, which might be split into many `PartialResultSet` messages to accommodate large rows and/or large values. Every N complete values defines a row, where N is equal to the number of entries in metadata.row_type.fields. Most values are encoded based on type as described here. It is possible that the last value in values is "chunked", meaning that the rest of the value is sent in subsequent `PartialResultSet`(s). This is denoted by the chunked_value field. Two or more chunked values can be merged to form a complete value as follows: * `bool/number/null`: cannot be chunked * `string`: concatenate the strings * `list`: concatenate the lists. If the last element in a list is a `string`, `list`, or `object`, merge it with the first element in the next list by applying these rules recursively. * `object`: concatenate the (field name, field value) pairs. If a field name is duplicated, then apply these rules recursively to merge the field values. Some examples of merging: # Strings are concatenated. "foo", "bar" => "foobar" # Lists of non-strings are concatenated. [2, 3], [4] => [2, 3, 4] # Lists are concatenated, but the last and first elements are merged # because they are strings. ["a", "b"], ["c", "d"] => ["a", "bc", "d"] # Lists are concatenated, but the last and first elements are merged # because they are lists. Recursively, the last and first elements # of the inner lists are merged because they are strings. ["a", ["b", "c"]], [["d"], "e"] => ["a", ["b", "cd"], "e"] # Non-overlapping object fields are combined. {"a": "1"}, {"b": "2"} => {"a": "1", "b": 2"} # Overlapping object fields are merged. {"a": "1"}, {"a": "2"} => {"a": "12"} # Examples of merging objects containing lists of strings. {"a": ["1"]}, {"a": ["2"]} => {"a": ["12"]} For a more complete example, suppose a streaming SQL query is yielding a result set whose rows contain a single string field. The following `PartialResultSet`s might be yielded: { "metadata": { ... } "values": ["Hello", "W"] "chunked_value": true "resume_token": "Af65..." } { "values": ["orl"] "chunked_value": true } { "values": ["d"] "resume_token": "Zx1B..." } This sequence of `PartialResultSet`s encodes two rows, one containing the field value `"Hello"`, and a second containing the field value `"World" = "W" + "orl" + "d"`. Not all `PartialResultSet`s contain a `resume_token`. Execution can only be resumed from a previously yielded `resume_token`. For the above sequence of `PartialResultSet`s, resuming the query with `"resume_token": "Af65..."` will yield results from the `PartialResultSet` with value `["orl"]`.|

<h2 id="tocS_Partition">Partition</h2>
<!-- backwards compatibility -->
<a id="schemapartition"></a>
<a id="schema_Partition"></a>
<a id="tocSpartition"></a>
<a id="tocspartition"></a>

```json
{
  "partitionToken": "string"
}
```

Information returned for each partition returned in a PartitionResponse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitionToken|string(byte)|false|none|This token can be passed to Read, StreamingRead, ExecuteSql, or ExecuteStreamingSql requests to restrict the results to those identified by this partition token.|

<h2 id="tocS_PartitionOptions">PartitionOptions</h2>
<!-- backwards compatibility -->
<a id="schemapartitionoptions"></a>
<a id="schema_PartitionOptions"></a>
<a id="tocSpartitionoptions"></a>
<a id="tocspartitionoptions"></a>

```json
{
  "maxPartitions": "string",
  "partitionSizeBytes": "string"
}
```

Options for a PartitionQueryRequest and PartitionReadRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxPartitions|string(int64)|false|none|**Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired maximum number of partitions to return. For example, this may be set to the number of workers available. The default for this option is currently 10,000. The maximum value is currently 200,000. This is only a hint. The actual number of partitions returned may be smaller or larger than this maximum count request.|
|partitionSizeBytes|string(int64)|false|none|**Note:** This hint is currently ignored by PartitionQuery and PartitionRead requests. The desired data size for each partition generated. The default for this option is currently 1 GiB. This is only a hint. The actual size of each partition may be smaller or larger than this size request.|

<h2 id="tocS_PartitionQueryRequest">PartitionQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartitionqueryrequest"></a>
<a id="schema_PartitionQueryRequest"></a>
<a id="tocSpartitionqueryrequest"></a>
<a id="tocspartitionqueryrequest"></a>

```json
{
  "paramTypes": {
    "property1": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    },
    "property2": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    }
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "partitionOptions": {
    "maxPartitions": "string",
    "partitionSizeBytes": "string"
  },
  "sql": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

The request for PartitionQuery

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paramTypes|object|false|none|It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL query parameters. See the definition of Type for more information about SQL types.|
|params|object|false|none|Parameter names and values that bind to placeholders in the SQL string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.|
|partitionOptions|[PartitionOptions](#schemapartitionoptions)|false|none|Additional options that affect how many partitions are created.|
|sql|string|false|none|Required. The query request to generate partitions for. The request will fail if the query is not root partitionable. The query plan of a root partitionable query has a single distributed union operator. A distributed union operator conceptually divides one or more tables into multiple splits, remotely evaluates a subquery independently on each split, and then unions all results. This must not contain DML commands, such as INSERT, UPDATE, or DELETE. Use ExecuteStreamingSql with a PartitionedDml transaction for large, partition-friendly DML operations.|
|transaction|[TransactionSelector](#schematransactionselector)|false|none|Read only snapshot transactions are supported, read/write and single use transactions are not.|

<h2 id="tocS_PartitionReadRequest">PartitionReadRequest</h2>
<!-- backwards compatibility -->
<a id="schemapartitionreadrequest"></a>
<a id="schema_PartitionReadRequest"></a>
<a id="tocSpartitionreadrequest"></a>
<a id="tocspartitionreadrequest"></a>

```json
{
  "columns": [
    "string"
  ],
  "index": "string",
  "keySet": {
    "all": true,
    "keys": [
      [
        null
      ]
    ],
    "ranges": [
      {
        "endClosed": [
          null
        ],
        "endOpen": [
          null
        ],
        "startClosed": [
          null
        ],
        "startOpen": [
          null
        ]
      }
    ]
  },
  "partitionOptions": {
    "maxPartitions": "string",
    "partitionSizeBytes": "string"
  },
  "table": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

The request for PartitionRead

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|The columns of table to be returned for each row matching this request.|
|index|string|false|none|If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.|
|keySet|[KeySet](#schemakeyset)|false|none|Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index. It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.|
|partitionOptions|[PartitionOptions](#schemapartitionoptions)|false|none|Additional options that affect how many partitions are created.|
|table|string|false|none|Required. The name of the table in the database to be read.|
|transaction|[TransactionSelector](#schematransactionselector)|false|none|Read only snapshot transactions are supported, read/write and single use transactions are not.|

<h2 id="tocS_PartitionResponse">PartitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapartitionresponse"></a>
<a id="schema_PartitionResponse"></a>
<a id="tocSpartitionresponse"></a>
<a id="tocspartitionresponse"></a>

```json
{
  "partitions": [
    {
      "partitionToken": "string"
    }
  ],
  "transaction": {
    "id": "string",
    "readTimestamp": "string"
  }
}
```

The response for PartitionQuery or PartitionRead

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitions|[[Partition](#schemapartition)]|false|none|Partitions created by this request.|
|transaction|[Transaction](#schematransaction)|false|none|Transaction created by this request.|

<h2 id="tocS_PartitionedDml">PartitionedDml</h2>
<!-- backwards compatibility -->
<a id="schemapartitioneddml"></a>
<a id="schema_PartitionedDml"></a>
<a id="tocSpartitioneddml"></a>
<a id="tocspartitioneddml"></a>

```json
{}
```

Message type to initiate a Partitioned DML transaction.

<h2 id="tocS_PlanNode">PlanNode</h2>
<!-- backwards compatibility -->
<a id="schemaplannode"></a>
<a id="schema_PlanNode"></a>
<a id="tocSplannode"></a>
<a id="tocsplannode"></a>

```json
{
  "childLinks": [
    {
      "childIndex": 0,
      "type": "string",
      "variable": "string"
    }
  ],
  "displayName": "string",
  "executionStats": {
    "property1": null,
    "property2": null
  },
  "index": 0,
  "kind": "KIND_UNSPECIFIED",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "shortRepresentation": {
    "description": "string",
    "subqueries": {
      "property1": 0,
      "property2": 0
    }
  }
}
```

Node information for nodes appearing in a QueryPlan.plan_nodes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childLinks|[[ChildLink](#schemachildlink)]|false|none|List of child node `index`es and their relationship to this parent.|
|displayName|string|false|none|The display name for the node.|
|executionStats|object|false|none|The execution statistics associated with the node, contained in a group of key-value pairs. Only present if the plan was returned as a result of a profile query. For example, number of executions, number of rows/time per execution etc.|
|index|integer(int32)|false|none|The `PlanNode`'s index in node list.|
|kind|string|false|none|Used to determine the type of node. May be needed for visualizing different kinds of nodes differently. For example, If the node is a SCALAR node, it will have a condensed representation which can be used to directly embed a description of the node in its parent.|
|metadata|object|false|none|Attributes relevant to the node contained in a group of key-value pairs. For example, a Parameter Reference node could have the following information in its metadata: { "parameter_reference": "param1", "parameter_type": "array" }|
|shortRepresentation|[ShortRepresentation](#schemashortrepresentation)|false|none|Condensed representation for SCALAR nodes.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|KIND_UNSPECIFIED|
|kind|RELATIONAL|
|kind|SCALAR|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PrefixNode">PrefixNode</h2>
<!-- backwards compatibility -->
<a id="schemaprefixnode"></a>
<a id="schema_PrefixNode"></a>
<a id="tocSprefixnode"></a>
<a id="tocsprefixnode"></a>

```json
{
  "dataSourceNode": true,
  "depth": 0,
  "endIndex": 0,
  "startIndex": 0,
  "word": "string"
}
```

A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceNode|boolean|false|none|Whether this corresponds to a data_source name.|
|depth|integer(int32)|false|none|The depth in the prefix hierarchy.|
|endIndex|integer(int32)|false|none|The index of the end key bucket of the range that this node spans.|
|startIndex|integer(int32)|false|none|The index of the start key bucket of the range that this node spans.|
|word|string|false|none|The string represented by the prefix node.|

<h2 id="tocS_QueryOptions">QueryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoptions"></a>
<a id="schema_QueryOptions"></a>
<a id="tocSqueryoptions"></a>
<a id="tocsqueryoptions"></a>

```json
{
  "optimizerStatisticsPackage": "string",
  "optimizerVersion": "string"
}
```

Query optimizer configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|optimizerStatisticsPackage|string|false|none|An option to control the selection of optimizer statistics package. This parameter allows individual queries to use a different query optimizer statistics package. Specifying `latest` as a value instructs Cloud Spanner to use the latest generated statistics package. If not specified, Cloud Spanner uses the statistics package set at the database level options, or the latest package if the database option is not set. The statistics package requested by the query has to be exempt from garbage collection. This can be achieved with the following DDL statement: ``` ALTER STATISTICS SET OPTIONS (allow_gc=false) ``` The list of available statistics packages can be queried from `INFORMATION_SCHEMA.SPANNER_STATISTICS`. Executing a SQL statement with an invalid optimizer statistics package or with a statistics package that allows garbage collection fails with an `INVALID_ARGUMENT` error.|
|optimizerVersion|string|false|none|An option to control the selection of optimizer version. This parameter allows individual queries to pick different query optimizer versions. Specifying `latest` as a value instructs Cloud Spanner to use the latest supported query optimizer version. If not specified, Cloud Spanner uses the optimizer version set at the database level options. Any other positive integer (from the list of supported optimizer versions) overrides the default optimizer version for query execution. The list of supported optimizer versions can be queried from SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS. Executing a SQL statement with an invalid optimizer version fails with an `INVALID_ARGUMENT` error. See https://cloud.google.com/spanner/docs/query-optimizer/manage-query-optimizer for more information on managing the query optimizer. The `optimizer_version` statement hint has precedence over this setting.|

<h2 id="tocS_QueryPlan">QueryPlan</h2>
<!-- backwards compatibility -->
<a id="schemaqueryplan"></a>
<a id="schema_QueryPlan"></a>
<a id="tocSqueryplan"></a>
<a id="tocsqueryplan"></a>

```json
{
  "planNodes": [
    {
      "childLinks": [
        {
          "childIndex": 0,
          "type": "string",
          "variable": "string"
        }
      ],
      "displayName": "string",
      "executionStats": {
        "property1": null,
        "property2": null
      },
      "index": 0,
      "kind": "KIND_UNSPECIFIED",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "shortRepresentation": {
        "description": "string",
        "subqueries": {
          "property1": 0,
          "property2": 0
        }
      }
    }
  ]
}
```

Contains an ordered list of nodes appearing in the query plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planNodes|[[PlanNode](#schemaplannode)]|false|none|The nodes in the query plan. Plan nodes are returned in pre-order starting with the plan root. Each PlanNode's `id` corresponds to its index in `plan_nodes`.|

<h2 id="tocS_ReadOnly">ReadOnly</h2>
<!-- backwards compatibility -->
<a id="schemareadonly"></a>
<a id="schema_ReadOnly"></a>
<a id="tocSreadonly"></a>
<a id="tocsreadonly"></a>

```json
{
  "exactStaleness": "string",
  "maxStaleness": "string",
  "minReadTimestamp": "string",
  "readTimestamp": "string",
  "returnReadTimestamp": true,
  "strong": true
}
```

Message type to initiate a read-only transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exactStaleness|string(google-duration)|false|none|Executes all reads at a timestamp that is `exact_staleness` old. The timestamp is chosen soon after the read is started. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading at nearby replicas without the distributed timestamp negotiation overhead of `max_staleness`.|
|maxStaleness|string(google-duration)|false|none|Read data at a timestamp >= `NOW - max_staleness` seconds. Guarantees that all writes that have committed more than the specified number of seconds ago are visible. Because Cloud Spanner chooses the exact timestamp, this mode works even if the client's local clock is substantially skewed from Cloud Spanner commit timestamps. Useful for reading the freshest data available at a nearby replica, while bounding the possible staleness if the local replica has fallen behind. Note that this option can only be used in single-use transactions.|
|minReadTimestamp|string(google-datetime)|false|none|Executes all reads at a timestamp >= `min_read_timestamp`. This is useful for requesting fresher data than some previous read, or data that is fresh enough to observe the effects of some previously committed transaction whose timestamp is known. Note that this option can only be used in single-use transactions. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`.|
|readTimestamp|string(google-datetime)|false|none|Executes all reads at the given timestamp. Unlike other modes, reads at a specific timestamp are repeatable; the same read at the same timestamp always returns the same data. If the timestamp is in the future, the read will block until the specified timestamp, modulo the read's deadline. Useful for large scale consistent reads such as mapreduces, or for coordinating many reads against a consistent snapshot of the data. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`.|
|returnReadTimestamp|boolean|false|none|If true, the Cloud Spanner-selected read timestamp is included in the Transaction message that describes the transaction.|
|strong|boolean|false|none|Read at a timestamp where all previously committed transactions are visible.|

<h2 id="tocS_ReadRequest">ReadRequest</h2>
<!-- backwards compatibility -->
<a id="schemareadrequest"></a>
<a id="schema_ReadRequest"></a>
<a id="tocSreadrequest"></a>
<a id="tocsreadrequest"></a>

```json
{
  "columns": [
    "string"
  ],
  "dataBoostEnabled": true,
  "index": "string",
  "keySet": {
    "all": true,
    "keys": [
      [
        null
      ]
    ],
    "ranges": [
      {
        "endClosed": [
          null
        ],
        "endOpen": [
          null
        ],
        "startClosed": [
          null
        ],
        "startOpen": [
          null
        ]
      }
    ]
  },
  "limit": "string",
  "partitionToken": "string",
  "requestOptions": {
    "priority": "PRIORITY_UNSPECIFIED",
    "requestTag": "string",
    "transactionTag": "string"
  },
  "resumeToken": "string",
  "table": "string",
  "transaction": {
    "begin": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    },
    "id": "string",
    "singleUse": {
      "partitionedDml": {},
      "readOnly": {
        "exactStaleness": "string",
        "maxStaleness": "string",
        "minReadTimestamp": "string",
        "readTimestamp": "string",
        "returnReadTimestamp": true,
        "strong": true
      },
      "readWrite": {
        "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
      }
    }
  }
}
```

The request for Read and StreamingRead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|Required. The columns of table to be returned for each row matching this request.|
|dataBoostEnabled|boolean|false|none|If this is for a partitioned read and this field is set to `true`, the request will be executed via Spanner independent compute resources. If the field is set to `true` but the request does not set `partition_token`, the API will return an `INVALID_ARGUMENT` error.|
|index|string|false|none|If non-empty, the name of an index on table. This index is used instead of the table primary key when interpreting key_set and sorting result rows. See key_set for further information.|
|keySet|[KeySet](#schemakeyset)|false|none|Required. `key_set` identifies the rows to be yielded. `key_set` names the primary keys of the rows in table to be yielded, unless index is present. If index is present, then key_set instead names index keys in index. If the partition_token field is empty, rows are yielded in table primary key order (if index is empty) or index key order (if index is non-empty). If the partition_token field is not empty, rows will be yielded in an unspecified order. It is not an error for the `key_set` to name rows that do not exist in the database. Read yields nothing for nonexistent rows.|
|limit|string(int64)|false|none|If greater than zero, only the first `limit` rows are yielded. If `limit` is zero, the default is no limit. A limit cannot be specified if `partition_token` is set.|
|partitionToken|string(byte)|false|none|If present, results will be restricted to the specified partition previously created using PartitionRead(). There must be an exact match for the values of fields common to this message and the PartitionReadRequest message used to create this partition_token.|
|requestOptions|[RequestOptions](#schemarequestoptions)|false|none|Common options for this request.|
|resumeToken|string(byte)|false|none|If this request is resuming a previously interrupted read, `resume_token` should be copied from the last PartialResultSet yielded before the interruption. Doing this enables the new read to resume where the last read left off. The rest of the request parameters must exactly match the request that yielded this token.|
|table|string|false|none|Required. The name of the table in the database to be read.|
|transaction|[TransactionSelector](#schematransactionselector)|false|none|The transaction to use. If none is provided, the default is a temporary read-only transaction with strong concurrency.|

<h2 id="tocS_ReadWrite">ReadWrite</h2>
<!-- backwards compatibility -->
<a id="schemareadwrite"></a>
<a id="schema_ReadWrite"></a>
<a id="tocSreadwrite"></a>
<a id="tocsreadwrite"></a>

```json
{
  "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
}
```

Message type to initiate a read-write transaction. Currently this transaction type has no options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|readLockMode|string|false|none|Read lock mode for the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|readLockMode|READ_LOCK_MODE_UNSPECIFIED|
|readLockMode|PESSIMISTIC|
|readLockMode|OPTIMISTIC|

<h2 id="tocS_ReplicaInfo">ReplicaInfo</h2>
<!-- backwards compatibility -->
<a id="schemareplicainfo"></a>
<a id="schema_ReplicaInfo"></a>
<a id="tocSreplicainfo"></a>
<a id="tocsreplicainfo"></a>

```json
{
  "defaultLeaderLocation": true,
  "location": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultLeaderLocation|boolean|false|none|If true, this location is designated as the default leader location where leader replicas are placed. See the [region types documentation](https://cloud.google.com/spanner/docs/instances#region_types) for more details.|
|location|string|false|none|The location of the serving resources, e.g. "us-central1".|
|type|string|false|none|The type of replica.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|READ_WRITE|
|type|READ_ONLY|
|type|WITNESS|

<h2 id="tocS_RequestOptions">RequestOptions</h2>
<!-- backwards compatibility -->
<a id="schemarequestoptions"></a>
<a id="schema_RequestOptions"></a>
<a id="tocSrequestoptions"></a>
<a id="tocsrequestoptions"></a>

```json
{
  "priority": "PRIORITY_UNSPECIFIED",
  "requestTag": "string",
  "transactionTag": "string"
}
```

Common request options for various APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|string|false|none|Priority for the request.|
|requestTag|string|false|none|A per-request tag which can be applied to queries or reads, used for statistics collection. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. This field is ignored for requests where it's not applicable (e.g. CommitRequest). Legal characters for `request_tag` values are all printable characters (ASCII 32 - 126) and the length of a request_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string.|
|transactionTag|string|false|none|A tag used for statistics collection about this transaction. Both request_tag and transaction_tag can be specified for a read or query that belongs to a transaction. The value of transaction_tag should be the same for all requests belonging to the same transaction. If this request doesn't belong to any transaction, transaction_tag will be ignored. Legal characters for `transaction_tag` values are all printable characters (ASCII 32 - 126) and the length of a transaction_tag is limited to 50 characters. Values that exceed this limit are truncated. Any leading underscore (_) characters will be removed from the string.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|PRIORITY_UNSPECIFIED|
|priority|PRIORITY_LOW|
|priority|PRIORITY_MEDIUM|
|priority|PRIORITY_HIGH|

<h2 id="tocS_RestoreDatabaseEncryptionConfig">RestoreDatabaseEncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemarestoredatabaseencryptionconfig"></a>
<a id="schema_RestoreDatabaseEncryptionConfig"></a>
<a id="tocSrestoredatabaseencryptionconfig"></a>
<a id="tocsrestoredatabaseencryptionconfig"></a>

```json
{
  "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
  "kmsKeyName": "string"
}
```

Encryption configuration for the restored database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|string|false|none|Required. The encryption type of the restored database.|
|kmsKeyName|string|false|none|Optional. The Cloud KMS key that will be used to encrypt/decrypt the restored database. This field should be set only when encryption_type is `CUSTOMER_MANAGED_ENCRYPTION`. Values are of the form `projects//locations//keyRings//cryptoKeys/`.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionType|ENCRYPTION_TYPE_UNSPECIFIED|
|encryptionType|USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION|
|encryptionType|GOOGLE_DEFAULT_ENCRYPTION|
|encryptionType|CUSTOMER_MANAGED_ENCRYPTION|

<h2 id="tocS_RestoreDatabaseMetadata">RestoreDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarestoredatabasemetadata"></a>
<a id="schema_RestoreDatabaseMetadata"></a>
<a id="tocSrestoredatabasemetadata"></a>
<a id="tocsrestoredatabasemetadata"></a>

```json
{
  "backupInfo": {
    "backup": "string",
    "createTime": "string",
    "sourceDatabase": "string",
    "versionTime": "string"
  },
  "cancelTime": "string",
  "name": "string",
  "optimizeDatabaseOperationName": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  },
  "sourceType": "TYPE_UNSPECIFIED"
}
```

Metadata type for the long-running operation returned by RestoreDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupInfo|[BackupInfo](#schemabackupinfo)|false|none|Information about the backup used to restore the database.|
|cancelTime|string(google-datetime)|false|none|The time at which cancellation of this operation was received. Operations.CancelOperation starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|name|string|false|none|Name of the database being created and restored to.|
|optimizeDatabaseOperationName|string|false|none|If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored database, and remove the dependency on the restore source. The name is of the form `projects//instances//databases//operations/` where the is the name of database being created and restored to. The metadata type of the long-running operation is OptimizeRestoredDatabaseMetadata. This long-running operation will be automatically created by the system after the RestoreDatabase long-running operation completes successfully. This operation will not be created if the restore was not successful.|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the RestoreDatabase operation.|
|sourceType|string|false|none|The type of the restore source.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|TYPE_UNSPECIFIED|
|sourceType|BACKUP|

<h2 id="tocS_RestoreDatabaseRequest">RestoreDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoredatabaserequest"></a>
<a id="schema_RestoreDatabaseRequest"></a>
<a id="tocSrestoredatabaserequest"></a>
<a id="tocsrestoredatabaserequest"></a>

```json
{
  "backup": "string",
  "databaseId": "string",
  "encryptionConfig": {
    "encryptionType": "ENCRYPTION_TYPE_UNSPECIFIED",
    "kmsKeyName": "string"
  }
}
```

The request for RestoreDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backup|string|false|none|Name of the backup from which to restore. Values are of the form `projects//instances//backups/`.|
|databaseId|string|false|none|Required. The id of the database to create and restore to. This database must not already exist. The `database_id` appended to `parent` forms the full database name of the form `projects//instances//databases/`.|
|encryptionConfig|[RestoreDatabaseEncryptionConfig](#schemarestoredatabaseencryptionconfig)|false|none|Optional. An encryption configuration describing the encryption type and key resources in Cloud KMS used to encrypt/decrypt the database to restore to. If this field is not specified, the restored database will use the same encryption configuration as the backup by default, namely encryption_type = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.|

<h2 id="tocS_RestoreInfo">RestoreInfo</h2>
<!-- backwards compatibility -->
<a id="schemarestoreinfo"></a>
<a id="schema_RestoreInfo"></a>
<a id="tocSrestoreinfo"></a>
<a id="tocsrestoreinfo"></a>

```json
{
  "backupInfo": {
    "backup": "string",
    "createTime": "string",
    "sourceDatabase": "string",
    "versionTime": "string"
  },
  "sourceType": "TYPE_UNSPECIFIED"
}
```

Information about the database restore.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupInfo|[BackupInfo](#schemabackupinfo)|false|none|Information about the backup used to restore the database. The backup may no longer exist.|
|sourceType|string|false|none|The type of the restore source.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|TYPE_UNSPECIFIED|
|sourceType|BACKUP|

<h2 id="tocS_ResultSet">ResultSet</h2>
<!-- backwards compatibility -->
<a id="schemaresultset"></a>
<a id="schema_ResultSet"></a>
<a id="tocSresultset"></a>
<a id="tocsresultset"></a>

```json
{
  "metadata": {
    "rowType": {
      "fields": [
        {}
      ]
    },
    "transaction": {
      "id": "string",
      "readTimestamp": "string"
    },
    "undeclaredParameters": {
      "fields": [
        {}
      ]
    }
  },
  "rows": [
    [
      null
    ]
  ],
  "stats": {
    "queryPlan": {
      "planNodes": [
        {
          "childLinks": [
            {
              "childIndex": 0,
              "type": "string",
              "variable": "string"
            }
          ],
          "displayName": "string",
          "executionStats": {
            "property1": null,
            "property2": null
          },
          "index": 0,
          "kind": "KIND_UNSPECIFIED",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "shortRepresentation": {
            "description": "string",
            "subqueries": {
              "property1": 0,
              "property2": 0
            }
          }
        }
      ]
    },
    "queryStats": {
      "property1": null,
      "property2": null
    },
    "rowCountExact": "string",
    "rowCountLowerBound": "string"
  }
}
```

Results from Read or ExecuteSql.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[ResultSetMetadata](#schemaresultsetmetadata)|false|none|Metadata about the result set, such as row type information.|
|rows|[[object]]|false|none|Each element in `rows` is a row whose format is defined by metadata.row_type. The ith element in each row matches the ith field in metadata.row_type. Elements are encoded based on type as described here.|
|stats|[ResultSetStats](#schemaresultsetstats)|false|none|Query plan and execution statistics for the SQL statement that produced this result set. These can be requested by setting ExecuteSqlRequest.query_mode. DML statements always produce stats containing the number of rows modified, unless executed using the ExecuteSqlRequest.QueryMode.PLAN ExecuteSqlRequest.query_mode. Other fields may or may not be populated, based on the ExecuteSqlRequest.query_mode.|

<h2 id="tocS_ResultSetMetadata">ResultSetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresultsetmetadata"></a>
<a id="schema_ResultSetMetadata"></a>
<a id="tocSresultsetmetadata"></a>
<a id="tocsresultsetmetadata"></a>

```json
{
  "rowType": {
    "fields": [
      {}
    ]
  },
  "transaction": {
    "id": "string",
    "readTimestamp": "string"
  },
  "undeclaredParameters": {
    "fields": [
      {}
    ]
  }
}
```

Metadata about a ResultSet or PartialResultSet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rowType|[StructType](#schemastructtype)|false|none|Indicates the field names and types for the rows in the result set. For example, a SQL query like `"SELECT UserId, UserName FROM Users"` could return a `row_type` value like: "fields": [ { "name": "UserId", "type": { "code": "INT64" } }, { "name": "UserName", "type": { "code": "STRING" } }, ]|
|transaction|[Transaction](#schematransaction)|false|none|If the read or SQL query began a transaction as a side-effect, the information about the new transaction is yielded here.|
|undeclaredParameters|[StructType](#schemastructtype)|false|none|A SQL query can be parameterized. In PLAN mode, these parameters can be undeclared. This indicates the field names and types for those undeclared parameters in the SQL query. For example, a SQL query like `"SELECT * FROM Users where UserId = @userId and UserName = @userName "` could return a `undeclared_parameters` value like: "fields": [ { "name": "UserId", "type": { "code": "INT64" } }, { "name": "UserName", "type": { "code": "STRING" } }, ]|

<h2 id="tocS_ResultSetStats">ResultSetStats</h2>
<!-- backwards compatibility -->
<a id="schemaresultsetstats"></a>
<a id="schema_ResultSetStats"></a>
<a id="tocSresultsetstats"></a>
<a id="tocsresultsetstats"></a>

```json
{
  "queryPlan": {
    "planNodes": [
      {
        "childLinks": [
          {
            "childIndex": 0,
            "type": "string",
            "variable": "string"
          }
        ],
        "displayName": "string",
        "executionStats": {
          "property1": null,
          "property2": null
        },
        "index": 0,
        "kind": "KIND_UNSPECIFIED",
        "metadata": {
          "property1": null,
          "property2": null
        },
        "shortRepresentation": {
          "description": "string",
          "subqueries": {
            "property1": 0,
            "property2": 0
          }
        }
      }
    ]
  },
  "queryStats": {
    "property1": null,
    "property2": null
  },
  "rowCountExact": "string",
  "rowCountLowerBound": "string"
}
```

Additional statistics about a ResultSet or PartialResultSet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryPlan|[QueryPlan](#schemaqueryplan)|false|none|QueryPlan for the query associated with this result.|
|queryStats|object|false|none|Aggregated statistics from the execution of the query. Only present when the query is profiled. For example, a query could return the statistics as follows: { "rows_returned": "3", "elapsed_time": "1.22 secs", "cpu_time": "1.19 secs" }|
|rowCountExact|string(int64)|false|none|Standard DML returns an exact count of rows that were modified.|
|rowCountLowerBound|string(int64)|false|none|Partitioned DML does not offer exactly-once semantics, so it returns a lower bound of the rows modified.|

<h2 id="tocS_RollbackRequest">RollbackRequest</h2>
<!-- backwards compatibility -->
<a id="schemarollbackrequest"></a>
<a id="schema_RollbackRequest"></a>
<a id="tocSrollbackrequest"></a>
<a id="tocsrollbackrequest"></a>

```json
{
  "transactionId": "string"
}
```

The request for Rollback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionId|string(byte)|false|none|Required. The transaction to roll back.|

<h2 id="tocS_Scan">Scan</h2>
<!-- backwards compatibility -->
<a id="schemascan"></a>
<a id="schema_Scan"></a>
<a id="tocSscan"></a>
<a id="tocsscan"></a>

```json
{
  "details": {
    "property1": null,
    "property2": null
  },
  "endTime": "string",
  "name": "string",
  "scanData": {
    "data": {
      "dataSourceEndToken": "string",
      "dataSourceSeparatorToken": "string",
      "diagnosticMessages": [
        {
          "info": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "metric": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "metricSpecific": true,
          "severity": "SEVERITY_UNSPECIFIED",
          "shortMessage": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          }
        }
      ],
      "endKeyStrings": [
        "string"
      ],
      "hasPii": true,
      "indexedKeys": [
        "string"
      ],
      "keySeparator": "string",
      "keyUnit": "KEY_UNIT_UNSPECIFIED",
      "metrics": [
        {
          "aggregation": "AGGREGATION_UNSPECIFIED",
          "category": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "derived": {
            "denominator": {
              "args": {
                "property1": "string",
                "property2": "string"
              },
              "message": "string",
              "token": "string"
            },
            "numerator": {
              "args": {
                "property1": "string",
                "property2": "string"
              },
              "message": "string",
              "token": "string"
            }
          },
          "displayLabel": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "hasNonzeroData": true,
          "hotValue": 0,
          "indexedHotKeys": {
            "property1": {
              "sparseHotKeys": {
                "property1": 0,
                "property2": 0
              }
            },
            "property2": {
              "sparseHotKeys": {
                "property1": 0,
                "property2": 0
              }
            }
          },
          "indexedKeyRangeInfos": {
            "property1": {
              "keyRangeInfos": {
                "property1": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                },
                "property2": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                }
              }
            },
            "property2": {
              "keyRangeInfos": {
                "property1": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                },
                "property2": {
                  "infos": [
                    {
                      "contextValues": [
                        {
                          "label": {
                            "args": {
                              "property1": "string",
                              "property2": "string"
                            },
                            "message": "string",
                            "token": "string"
                          },
                          "severity": "SEVERITY_UNSPECIFIED",
                          "unit": "string",
                          "value": 0
                        }
                      ],
                      "endKeyIndex": 0,
                      "info": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "keysCount": "string",
                      "metric": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "startKeyIndex": 0,
                      "timeOffset": "string",
                      "unit": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "value": 0
                    }
                  ],
                  "totalSize": 0
                }
              }
            }
          },
          "info": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "matrix": {
            "rows": [
              {
                "cols": [
                  0
                ]
              }
            ]
          },
          "unit": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "visible": true
        }
      ],
      "prefixNodes": [
        {
          "dataSourceNode": true,
          "depth": 0,
          "endIndex": 0,
          "startIndex": 0,
          "word": "string"
        }
      ]
    },
    "endTime": "string",
    "startTime": "string"
  },
  "startTime": "string"
}
```

Scan is a structure which describes Cloud Key Visualizer scan information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|Additional information provided by the implementer.|
|endTime|string(google-datetime)|false|none|The upper bound for when the scan is defined.|
|name|string|false|none|The unique name of the scan, specific to the Database service implementing this interface.|
|scanData|[ScanData](#schemascandata)|false|none|Output only. Cloud Key Visualizer scan data. Note, this field is not available to the ListScans method.|
|startTime|string(google-datetime)|false|none|A range of time (inclusive) for when the scan is defined. The lower bound for when the scan is defined.|

<h2 id="tocS_ScanData">ScanData</h2>
<!-- backwards compatibility -->
<a id="schemascandata"></a>
<a id="schema_ScanData"></a>
<a id="tocSscandata"></a>
<a id="tocsscandata"></a>

```json
{
  "data": {
    "dataSourceEndToken": "string",
    "dataSourceSeparatorToken": "string",
    "diagnosticMessages": [
      {
        "info": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "metric": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "metricSpecific": true,
        "severity": "SEVERITY_UNSPECIFIED",
        "shortMessage": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        }
      }
    ],
    "endKeyStrings": [
      "string"
    ],
    "hasPii": true,
    "indexedKeys": [
      "string"
    ],
    "keySeparator": "string",
    "keyUnit": "KEY_UNIT_UNSPECIFIED",
    "metrics": [
      {
        "aggregation": "AGGREGATION_UNSPECIFIED",
        "category": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "derived": {
          "denominator": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          },
          "numerator": {
            "args": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "token": "string"
          }
        },
        "displayLabel": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "hasNonzeroData": true,
        "hotValue": 0,
        "indexedHotKeys": {
          "property1": {
            "sparseHotKeys": {
              "property1": 0,
              "property2": 0
            }
          },
          "property2": {
            "sparseHotKeys": {
              "property1": 0,
              "property2": 0
            }
          }
        },
        "indexedKeyRangeInfos": {
          "property1": {
            "keyRangeInfos": {
              "property1": {
                "infos": [
                  {
                    "contextValues": [
                      {
                        "label": {
                          "args": {
                            "property1": "string",
                            "property2": "string"
                          },
                          "message": "string",
                          "token": "string"
                        },
                        "severity": "SEVERITY_UNSPECIFIED",
                        "unit": "string",
                        "value": 0
                      }
                    ],
                    "endKeyIndex": 0,
                    "info": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "keysCount": "string",
                    "metric": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "startKeyIndex": 0,
                    "timeOffset": "string",
                    "unit": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "value": 0
                  }
                ],
                "totalSize": 0
              },
              "property2": {
                "infos": [
                  {
                    "contextValues": [
                      {
                        "label": {
                          "args": {
                            "property1": "string",
                            "property2": "string"
                          },
                          "message": "string",
                          "token": "string"
                        },
                        "severity": "SEVERITY_UNSPECIFIED",
                        "unit": "string",
                        "value": 0
                      }
                    ],
                    "endKeyIndex": 0,
                    "info": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "keysCount": "string",
                    "metric": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "startKeyIndex": 0,
                    "timeOffset": "string",
                    "unit": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "value": 0
                  }
                ],
                "totalSize": 0
              }
            }
          },
          "property2": {
            "keyRangeInfos": {
              "property1": {
                "infos": [
                  {
                    "contextValues": [
                      {
                        "label": {
                          "args": {
                            "property1": "string",
                            "property2": "string"
                          },
                          "message": "string",
                          "token": "string"
                        },
                        "severity": "SEVERITY_UNSPECIFIED",
                        "unit": "string",
                        "value": 0
                      }
                    ],
                    "endKeyIndex": 0,
                    "info": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "keysCount": "string",
                    "metric": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "startKeyIndex": 0,
                    "timeOffset": "string",
                    "unit": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "value": 0
                  }
                ],
                "totalSize": 0
              },
              "property2": {
                "infos": [
                  {
                    "contextValues": [
                      {
                        "label": {
                          "args": {
                            "property1": "string",
                            "property2": "string"
                          },
                          "message": "string",
                          "token": "string"
                        },
                        "severity": "SEVERITY_UNSPECIFIED",
                        "unit": "string",
                        "value": 0
                      }
                    ],
                    "endKeyIndex": 0,
                    "info": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "keysCount": "string",
                    "metric": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "startKeyIndex": 0,
                    "timeOffset": "string",
                    "unit": {
                      "args": {
                        "property1": "string",
                        "property2": "string"
                      },
                      "message": "string",
                      "token": "string"
                    },
                    "value": 0
                  }
                ],
                "totalSize": 0
              }
            }
          }
        },
        "info": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "matrix": {
          "rows": [
            {
              "cols": [
                0
              ]
            }
          ]
        },
        "unit": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "visible": true
      }
    ],
    "prefixNodes": [
      {
        "dataSourceNode": true,
        "depth": 0,
        "endIndex": 0,
        "startIndex": 0,
        "word": "string"
      }
    ]
  },
  "endTime": "string",
  "startTime": "string"
}
```

ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[VisualizationData](#schemavisualizationdata)|false|none|Cloud Key Visualizer scan data. The range of time this information covers is captured via the above time range fields. Note, this field is not available to the ListScans method.|
|endTime|string(google-datetime)|false|none|The upper bound for when the contained data is defined.|
|startTime|string(google-datetime)|false|none|A range of time (inclusive) for when the contained data is defined. The lower bound for when the contained data is defined.|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "approximateLastUseTime": "string",
  "createTime": "string",
  "creatorRole": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

A session in the Cloud Spanner API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approximateLastUseTime|string(google-datetime)|false|read-only|Output only. The approximate timestamp when the session is last used. It is typically earlier than the actual last use time.|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the session is created.|
|creatorRole|string|false|none|The database role which created this session.|
|labels|object|false|none|The labels for the session. * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. * Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. * No more than 64 labels can be associated with a given session. See https://goo.gl/xmQnxf for more information on and examples of labels.|
|name|string|false|read-only|Output only. The name of the session. This is always system-assigned.|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

<h2 id="tocS_ShortRepresentation">ShortRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemashortrepresentation"></a>
<a id="schema_ShortRepresentation"></a>
<a id="tocSshortrepresentation"></a>
<a id="tocsshortrepresentation"></a>

```json
{
  "description": "string",
  "subqueries": {
    "property1": 0,
    "property2": 0
  }
}
```

Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string representation of the expression subtree rooted at this node.|
|subqueries|object|false|none|A mapping of (subquery variable name) -> (subquery node id) for cases where the `description` string of this node references a `SCALAR` subquery contained in the expression subtree rooted at this node. The referenced `SCALAR` subquery may not necessarily be a direct child of this node.|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "paramTypes": {
    "property1": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    },
    "property2": {
      "arrayElementType": {},
      "code": "TYPE_CODE_UNSPECIFIED",
      "protoTypeFqn": "string",
      "structType": {},
      "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
    }
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "sql": "string"
}
```

A single DML statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paramTypes|object|false|none|It is not always possible for Cloud Spanner to infer the right SQL type from a JSON value. For example, values of type `BYTES` and values of type `STRING` both appear in params as JSON strings. In these cases, `param_types` can be used to specify the exact SQL type for some or all of the SQL statement parameters. See the definition of Type for more information about SQL types.|
|params|object|false|none|Parameter names and values that bind to placeholders in the DML string. A parameter placeholder consists of the `@` character followed by the parameter name (for example, `@firstName`). Parameter names can contain letters, numbers, and underscores. Parameters can appear anywhere that a literal value is expected. The same parameter name can be used more than once, for example: `"WHERE id > @msg_id AND id < @msg_id + 100"` It is an error to execute a SQL statement with unbound parameters.|
|sql|string|false|none|Required. The DML string.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_StructType">StructType</h2>
<!-- backwards compatibility -->
<a id="schemastructtype"></a>
<a id="schema_StructType"></a>
<a id="tocSstructtype"></a>
<a id="tocsstructtype"></a>

```json
{
  "fields": [
    {
      "name": "string",
      "type": {}
    }
  ]
}
```

`StructType` defines the fields of a STRUCT type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[Field](#schemafield)]|false|none|The list of fields that make up this struct. Order is significant, because values of this struct type are represented as lists, where the order of field values matches the order of fields in the StructType. In turn, the order of fields matches the order of columns in a read request, or the order of fields in the `SELECT` clause of a query.|

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|REQUIRED: The set of permissions to check for 'resource'. Permissions with wildcards (such as '*', 'spanner.*', 'spanner.instances.*') are not allowed.|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "id": "string",
  "readTimestamp": "string"
}
```

A transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(byte)|false|none|`id` may be used to identify the transaction in subsequent Read, ExecuteSql, Commit, or Rollback calls. Single-use read-only transactions do not have IDs, because single-use transactions do not support multiple requests.|
|readTimestamp|string(google-datetime)|false|none|For snapshot read-only transactions, the read timestamp chosen for the transaction. Not returned by default: see TransactionOptions.ReadOnly.return_read_timestamp. A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds. Example: `"2014-10-02T15:01:23.045123456Z"`.|

<h2 id="tocS_TransactionOptions">TransactionOptions</h2>
<!-- backwards compatibility -->
<a id="schematransactionoptions"></a>
<a id="schema_TransactionOptions"></a>
<a id="tocStransactionoptions"></a>
<a id="tocstransactionoptions"></a>

```json
{
  "partitionedDml": {},
  "readOnly": {
    "exactStaleness": "string",
    "maxStaleness": "string",
    "minReadTimestamp": "string",
    "readTimestamp": "string",
    "returnReadTimestamp": true,
    "strong": true
  },
  "readWrite": {
    "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
  }
}
```

Transactions: Each session can have at most one active transaction at a time (note that standalone reads and queries use a transaction internally and do count towards the one transaction limit). After the active transaction is completed, the session can immediately be re-used for the next transaction. It is not necessary to create a new session for each transaction. Transaction modes: Cloud Spanner supports three transaction modes: 1. Locking read-write. This type of transaction is the only way to write data into Cloud Spanner. These transactions rely on pessimistic locking and, if necessary, two-phase commit. Locking read-write transactions may abort, requiring the application to retry. 2. Snapshot read-only. Snapshot read-only transactions provide guaranteed consistency across several reads, but do not allow writes. Snapshot read-only transactions can be configured to read at timestamps in the past, or configured to perform a strong read (where Spanner will select a timestamp such that the read is guaranteed to see the effects of all transactions that have committed before the start of the read). Snapshot read-only transactions do not need to be committed. Queries on change streams must be performed with the snapshot read-only transaction mode, specifying a strong read. Please see TransactionOptions.ReadOnly.strong for more details. 3. Partitioned DML. This type of transaction is used to execute a single Partitioned DML statement. Partitioned DML partitions the key space and runs the DML statement over each partition in parallel using separate, internal transactions that commit independently. Partitioned DML transactions do not need to be committed. For transactions that only read, snapshot read-only transactions provide simpler semantics and are almost always faster. In particular, read-only transactions do not take locks, so they do not conflict with read-write transactions. As a consequence of not taking locks, they also do not abort, so retry loops are not needed. Transactions may only read-write data in a single database. They may, however, read-write data in different tables within that database. Locking read-write transactions: Locking transactions may be used to atomically read-modify-write data anywhere in a database. This type of transaction is externally consistent. Clients should attempt to minimize the amount of time a transaction is active. Faster transactions commit with higher probability and cause less contention. Cloud Spanner attempts to keep read locks active as long as the transaction continues to do reads, and the transaction has not been terminated by Commit or Rollback. Long periods of inactivity at the client may cause Cloud Spanner to release a transaction's locks and abort it. Conceptually, a read-write transaction consists of zero or more reads or SQL statements followed by Commit. At any time before Commit, the client can send a Rollback request to abort the transaction. Semantics: Cloud Spanner can commit the transaction if all read locks it acquired are still valid at commit time, and it is able to acquire write locks for all writes. Cloud Spanner can abort the transaction for any reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees that the transaction has not modified any user data in Cloud Spanner. Unless the transaction commits, Cloud Spanner makes no guarantees about how long the transaction's locks were held for. It is an error to use Cloud Spanner locks for any sort of mutual exclusion other than between Cloud Spanner transactions themselves. Retrying aborted transactions: When a transaction aborts, the application can choose to retry the whole transaction again. To maximize the chances of successfully committing the retry, the client should execute the retry in the same session as the original attempt. The original session's lock priority increases with each consecutive abort, meaning that each attempt has a slightly better chance of success than the previous. Under some circumstances (for example, many transactions attempting to modify the same row(s)), a transaction can abort many times in a short period before successfully committing. Thus, it is not a good idea to cap the number of retries a transaction can attempt; instead, it is better to limit the total amount of time spent retrying. Idle transactions: A transaction is considered idle if it has no outstanding reads or SQL queries and has not started a read or SQL query within the last 10 seconds. Idle transactions can be aborted by Cloud Spanner so that they don't hold on to locks indefinitely. If an idle transaction is aborted, the commit will fail with error `ABORTED`. If this behavior is undesirable, periodically executing a simple SQL query in the transaction (for example, `SELECT 1`) prevents the transaction from becoming idle. Snapshot read-only transactions: Snapshot read-only transactions provides a simpler method than locking read-write transactions for doing several consistent reads. However, this type of transaction does not support writes. Snapshot transactions do not take locks. Instead, they work by choosing a Cloud Spanner timestamp, then executing all reads at that timestamp. Since they do not acquire locks, they do not block concurrent read-write transactions. Unlike locking read-write transactions, snapshot read-only transactions never abort. They can fail if the chosen read timestamp is garbage collected; however, the default garbage collection policy is generous enough that most applications do not need to worry about this in practice. Snapshot read-only transactions do not need to call Commit or Rollback (and in fact are not permitted to do so). To execute a snapshot transaction, the client specifies a timestamp bound, which tells Cloud Spanner how to choose a read timestamp. The types of timestamp bound are: - Strong (the default). - Bounded staleness. - Exact staleness. If the Cloud Spanner database to be read is geographically distributed, stale read-only transactions can execute more quickly than strong or read-write transactions, because they are able to execute far from the leader replica. Each type of timestamp bound is discussed in detail below. Strong: Strong reads are guaranteed to see the effects of all transactions that have committed before the start of the read. Furthermore, all rows yielded by a single read are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Strong reads are not repeatable: two consecutive strong read-only transactions might return inconsistent results if there are concurrent writes. If consistency across reads is required, the reads should be executed within a transaction or at an exact read timestamp. Queries on change streams (see below for more details) must also specify the strong read timestamp bound. See TransactionOptions.ReadOnly.strong. Exact staleness: These timestamp bounds execute reads at a user-specified timestamp. Reads at a timestamp are guaranteed to see a consistent prefix of the global transaction history: they observe modifications done by all transactions with a commit timestamp less than or equal to the read timestamp, and observe none of the modifications done by transactions with a larger commit timestamp. They will block until all conflicting transactions that may be assigned commit timestamps <= the read timestamp have finished. The timestamp can either be expressed as an absolute Cloud Spanner commit timestamp or a staleness relative to the current time. These modes do not require a "negotiation phase" to pick a timestamp. As a result, they execute slightly faster than the equivalent boundedly stale concurrency modes. On the other hand, boundedly stale reads usually return fresher results. See TransactionOptions.ReadOnly.read_timestamp and TransactionOptions.ReadOnly.exact_staleness. Bounded staleness: Bounded staleness modes allow Cloud Spanner to pick the read timestamp, subject to a user-provided staleness bound. Cloud Spanner chooses the newest timestamp within the staleness bound that allows execution of the reads at the closest available replica without blocking. All rows yielded are consistent with each other -- if any part of the read observes a transaction, all parts of the read see the transaction. Boundedly stale reads are not repeatable: two stale reads, even if they use the same staleness bound, can execute at different timestamps and thus return inconsistent results. Boundedly stale reads execute in two phases: the first phase negotiates a timestamp among all replicas needed to serve the read. In the second phase, reads are executed at the negotiated timestamp. As a result of the two phase execution, bounded staleness reads are usually a little slower than comparable exact staleness reads. However, they are typically able to return fresher results, and are more likely to execute at the closest replica. Because the timestamp negotiation requires up-front knowledge of which rows will be read, it can only be used with single-use read-only transactions. See TransactionOptions.ReadOnly.max_staleness and TransactionOptions.ReadOnly.min_read_timestamp. Old read timestamps and garbage collection: Cloud Spanner continuously garbage collects deleted and overwritten data in the background to reclaim storage space. This process is known as "version GC". By default, version GC reclaims versions after they are one hour old. Because of this, Cloud Spanner cannot perform reads at read timestamps more than one hour in the past. This restriction also applies to in-progress reads and/or SQL queries whose timestamp become too old while executing. Reads and SQL queries with too-old read timestamps fail with the error `FAILED_PRECONDITION`. You can configure and extend the `VERSION_RETENTION_PERIOD` of a database up to a period as long as one week, which allows Cloud Spanner to perform reads up to one week in the past. Querying change Streams: A Change Stream is a schema object that can be configured to watch data changes on the entire database, a set of tables, or a set of columns in a database. When a change stream is created, Spanner automatically defines a corresponding SQL Table-Valued Function (TVF) that can be used to query the change records in the associated change stream using the ExecuteStreamingSql API. The name of the TVF for a change stream is generated from the name of the change stream: READ_. All queries on change stream TVFs must be executed using the ExecuteStreamingSql API with a single-use read-only transaction with a strong read-only timestamp_bound. The change stream TVF allows users to specify the start_timestamp and end_timestamp for the time range of interest. All change records within the retention period is accessible using the strong read-only timestamp_bound. All other TransactionOptions are invalid for change stream queries. In addition, if TransactionOptions.read_only.return_read_timestamp is set to true, a special value of 2^63 - 2 will be returned in the Transaction message that describes the transaction, instead of a valid read timestamp. This special value should be discarded and not used for any subsequent queries. Please see https://cloud.google.com/spanner/docs/change-streams for more details on how to query the change stream TVFs. Partitioned DML transactions: Partitioned DML transactions are used to execute DML statements with a different execution strategy that provides different, and often better, scalability properties for large, table-wide operations than DML in a ReadWrite transaction. Smaller scoped statements, such as an OLTP workload, should prefer using ReadWrite transactions. Partitioned DML partitions the keyspace and runs the DML statement on each partition in separate, internal transactions. These transactions commit automatically when complete, and run independently from one another. To reduce lock contention, this execution strategy only acquires read locks on rows that match the WHERE clause of the statement. Additionally, the smaller per-partition transactions hold locks for less time. That said, Partitioned DML is not a drop-in replacement for standard DML used in ReadWrite transactions. - The DML statement must be fully-partitionable. Specifically, the statement must be expressible as the union of many statements which each access only a single row of the table. - The statement is not applied atomically to all rows of the table. Rather, the statement is applied atomically to partitions of the table, in independent transactions. Secondary index rows are updated atomically with the base table rows. - Partitioned DML does not guarantee exactly-once execution semantics against a partition. The statement will be applied at least once to each partition. It is strongly recommended that the DML statement should be idempotent to avoid unexpected results. For instance, it is potentially dangerous to run a statement such as `UPDATE table SET column = column + 1` as it could be run multiple times against some rows. - The partitions are committed automatically - there is no support for Commit or Rollback. If the call returns an error, or if the client issuing the ExecuteSql call dies, it is possible that some rows had the statement executed on them successfully. It is also possible that statement was never executed against other rows. - Partitioned DML transactions may only contain the execution of a single DML statement via ExecuteSql or ExecuteStreamingSql. - If any error is encountered during the execution of the partitioned DML operation (for instance, a UNIQUE INDEX violation, division by zero, or a value that cannot be stored due to schema constraints), then the operation is stopped at that point and an error is returned. It is possible that at this point, some partitions have been committed (or even committed multiple times), and other partitions have not been run at all. Given the above, Partitioned DML is good fit for large, database-wide, operations that are idempotent, such as deleting old rows from a very large table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitionedDml|[PartitionedDml](#schemapartitioneddml)|false|none|Partitioned DML transaction. Authorization to begin a Partitioned DML transaction requires `spanner.databases.beginPartitionedDmlTransaction` permission on the `session` resource.|
|readOnly|[ReadOnly](#schemareadonly)|false|none|Transaction will not write. Authorization to begin a read-only transaction requires `spanner.databases.beginReadOnlyTransaction` permission on the `session` resource.|
|readWrite|[ReadWrite](#schemareadwrite)|false|none|Transaction may write. Authorization to begin a read-write transaction requires `spanner.databases.beginOrRollbackReadWriteTransaction` permission on the `session` resource.|

<h2 id="tocS_TransactionSelector">TransactionSelector</h2>
<!-- backwards compatibility -->
<a id="schematransactionselector"></a>
<a id="schema_TransactionSelector"></a>
<a id="tocStransactionselector"></a>
<a id="tocstransactionselector"></a>

```json
{
  "begin": {
    "partitionedDml": {},
    "readOnly": {
      "exactStaleness": "string",
      "maxStaleness": "string",
      "minReadTimestamp": "string",
      "readTimestamp": "string",
      "returnReadTimestamp": true,
      "strong": true
    },
    "readWrite": {
      "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
    }
  },
  "id": "string",
  "singleUse": {
    "partitionedDml": {},
    "readOnly": {
      "exactStaleness": "string",
      "maxStaleness": "string",
      "minReadTimestamp": "string",
      "readTimestamp": "string",
      "returnReadTimestamp": true,
      "strong": true
    },
    "readWrite": {
      "readLockMode": "READ_LOCK_MODE_UNSPECIFIED"
    }
  }
}
```

This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|begin|[TransactionOptions](#schematransactionoptions)|false|none|Begin a new transaction and execute this read or SQL query in it. The transaction ID of the new transaction is returned in ResultSetMetadata.transaction, which is a Transaction.|
|id|string(byte)|false|none|Execute the read or SQL query in a previously-started transaction.|
|singleUse|[TransactionOptions](#schematransactionoptions)|false|none|Execute the read or SQL query in a temporary transaction. This is the most efficient way to execute a transaction that consists of a single SQL query.|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "arrayElementType": {
    "arrayElementType": {},
    "code": "TYPE_CODE_UNSPECIFIED",
    "protoTypeFqn": "string",
    "structType": {},
    "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
  },
  "code": "TYPE_CODE_UNSPECIFIED",
  "protoTypeFqn": "string",
  "structType": {
    "fields": [
      {}
    ]
  },
  "typeAnnotation": "TYPE_ANNOTATION_CODE_UNSPECIFIED"
}
```

`Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrayElementType|[Type](#schematype)|false|none|If code == ARRAY, then `array_element_type` is the type of the array elements.|
|code|string|false|none|Required. The TypeCode for this type.|
|protoTypeFqn|string|false|none|If code == PROTO or code == ENUM, then `proto_type_fqn` is the fully qualified name of the proto type representing the proto/enum definition.|
|structType|[StructType](#schemastructtype)|false|none|If code == STRUCT, then `struct_type` provides type information for the struct's fields.|
|typeAnnotation|string|false|none|The TypeAnnotationCode that disambiguates SQL type that Spanner will use to represent values of this type during query processing. This is necessary for some type codes because a single TypeCode can be mapped to different SQL types depending on the SQL dialect. type_annotation typically is not needed to process the content of a value (it doesn't affect serialization) and clients can ignore it on the read path.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|TYPE_CODE_UNSPECIFIED|
|code|BOOL|
|code|INT64|
|code|FLOAT64|
|code|TIMESTAMP|
|code|DATE|
|code|STRING|
|code|BYTES|
|code|ARRAY|
|code|STRUCT|
|code|NUMERIC|
|code|JSON|
|code|PROTO|
|code|ENUM|
|typeAnnotation|TYPE_ANNOTATION_CODE_UNSPECIFIED|
|typeAnnotation|PG_NUMERIC|
|typeAnnotation|PG_JSONB|

<h2 id="tocS_UpdateDatabaseDdlMetadata">UpdateDatabaseDdlMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabaseddlmetadata"></a>
<a id="schema_UpdateDatabaseDdlMetadata"></a>
<a id="tocSupdatedatabaseddlmetadata"></a>
<a id="tocsupdatedatabaseddlmetadata"></a>

```json
{
  "commitTimestamps": [
    "string"
  ],
  "database": "string",
  "progress": [
    {
      "endTime": "string",
      "progressPercent": 0,
      "startTime": "string"
    }
  ],
  "statements": [
    "string"
  ],
  "throttled": true
}
```

Metadata type for the operation returned by UpdateDatabaseDdl.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitTimestamps|[string(google-datetime)]|false|none|Reports the commit timestamps of all statements that have succeeded so far, where `commit_timestamps[i]` is the commit timestamp for the statement `statements[i]`.|
|database|string|false|none|The database being modified.|
|progress|[[OperationProgress](#schemaoperationprogress)]|false|none|The progress of the UpdateDatabaseDdl operations. Currently, only index creation statements will have a continuously updating progress. For non-index creation statements, `progress[i]` will have start time and end time populated with commit timestamp of operation, as well as a progress of 100% once the operation has completed. `progress[i]` is the operation progress for `statements[i]`.|
|statements|[string]|false|none|For an update this list contains all the statements. For an individual statement, this list contains only that statement.|
|throttled|boolean|false|read-only|Output only. When true, indicates that the operation is throttled e.g. due to resource constraints. When resources become available the operation will resume and this field will be false again.|

<h2 id="tocS_UpdateDatabaseDdlRequest">UpdateDatabaseDdlRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabaseddlrequest"></a>
<a id="schema_UpdateDatabaseDdlRequest"></a>
<a id="tocSupdatedatabaseddlrequest"></a>
<a id="tocsupdatedatabaseddlrequest"></a>

```json
{
  "operationId": "string",
  "protoDescriptors": "string",
  "statements": [
    "string"
  ]
}
```

Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled. Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationId|string|false|none|If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, `operation_id` is used to construct the name of the resulting Operation. Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and `operation_id` fields can be combined to form the name of the resulting longrunning.Operation: `/operations/`. `operation_id` should be unique within the database, and must be a valid identifier: `a-z*`. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns `ALREADY_EXISTS`.|
|protoDescriptors|string(byte)|false|none|Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run `protoc` with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run """ $protoc --proto_path=/app_path --proto_path=/lib_path \ --include_imports \ --descriptor_set_out=descriptors.data \ moon/shot/app.proto """ For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description).|
|statements|[string]|false|none|Required. DDL statements to be applied to the database.|

<h2 id="tocS_UpdateDatabaseMetadata">UpdateDatabaseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabasemetadata"></a>
<a id="schema_UpdateDatabaseMetadata"></a>
<a id="tocSupdatedatabasemetadata"></a>
<a id="tocsupdatedatabasemetadata"></a>

```json
{
  "cancelTime": "string",
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  },
  "request": {
    "database": {
      "createTime": "string",
      "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
      "defaultLeader": "string",
      "earliestVersionTime": "string",
      "enableDropProtection": true,
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "encryptionInfo": [
        {
          "encryptionStatus": {
            "code": 0,
            "details": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "message": "string"
          },
          "encryptionType": "TYPE_UNSPECIFIED",
          "kmsKeyVersion": "string"
        }
      ],
      "name": "string",
      "reconciling": true,
      "restoreInfo": {
        "backupInfo": {
          "backup": "string",
          "createTime": "string",
          "sourceDatabase": "string",
          "versionTime": "string"
        },
        "sourceType": "TYPE_UNSPECIFIED"
      },
      "state": "STATE_UNSPECIFIED",
      "versionRetentionPeriod": "string"
    },
    "updateMask": "string"
  }
}
```

Metadata type for the operation returned by UpdateDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is best-effort).|
|progress|[OperationProgress](#schemaoperationprogress)|false|none|The progress of the UpdateDatabase operation.|
|request|[UpdateDatabaseRequest](#schemaupdatedatabaserequest)|false|none|The request for UpdateDatabase.|

<h2 id="tocS_UpdateDatabaseRequest">UpdateDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedatabaserequest"></a>
<a id="schema_UpdateDatabaseRequest"></a>
<a id="tocSupdatedatabaserequest"></a>
<a id="tocsupdatedatabaserequest"></a>

```json
{
  "database": {
    "createTime": "string",
    "databaseDialect": "DATABASE_DIALECT_UNSPECIFIED",
    "defaultLeader": "string",
    "earliestVersionTime": "string",
    "enableDropProtection": true,
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "encryptionInfo": [
      {
        "encryptionStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "encryptionType": "TYPE_UNSPECIFIED",
        "kmsKeyVersion": "string"
      }
    ],
    "name": "string",
    "reconciling": true,
    "restoreInfo": {
      "backupInfo": {
        "backup": "string",
        "createTime": "string",
        "sourceDatabase": "string",
        "versionTime": "string"
      },
      "sourceType": "TYPE_UNSPECIFIED"
    },
    "state": "STATE_UNSPECIFIED",
    "versionRetentionPeriod": "string"
  },
  "updateMask": "string"
}
```

The request for UpdateDatabase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|[Database](#schemadatabase)|false|none|Required. The database to update. The `name` field of the database is of the form `projects//instances//databases/`.|
|updateMask|string(google-fieldmask)|false|none|Required. The list of fields to update. Currently, only `enable_drop_protection` field can be updated.|

<h2 id="tocS_UpdateInstanceConfigMetadata">UpdateInstanceConfigMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceconfigmetadata"></a>
<a id="schema_UpdateInstanceConfigMetadata"></a>
<a id="tocSupdateinstanceconfigmetadata"></a>
<a id="tocsupdateinstanceconfigmetadata"></a>

```json
{
  "cancelTime": "string",
  "instanceConfig": {
    "baseConfig": "string",
    "configType": "TYPE_UNSPECIFIED",
    "displayName": "string",
    "etag": "string",
    "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "leaderOptions": [
      "string"
    ],
    "name": "string",
    "optionalReplicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "reconciling": true,
    "replicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "progress": {
    "endTime": "string",
    "progressPercent": 0,
    "startTime": "string"
  }
}
```

Metadata type for the operation returned by UpdateInstanceConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which this operation was cancelled.|
|instanceConfig|[InstanceConfig](#schemainstanceconfig)|false|none|The desired instance config after updating.|
|progress|[InstanceOperationProgress](#schemainstanceoperationprogress)|false|none|The progress of the UpdateInstanceConfig operation.|

<h2 id="tocS_UpdateInstanceConfigRequest">UpdateInstanceConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstanceconfigrequest"></a>
<a id="schema_UpdateInstanceConfigRequest"></a>
<a id="tocSupdateinstanceconfigrequest"></a>
<a id="tocsupdateinstanceconfigrequest"></a>

```json
{
  "instanceConfig": {
    "baseConfig": "string",
    "configType": "TYPE_UNSPECIFIED",
    "displayName": "string",
    "etag": "string",
    "freeInstanceAvailability": "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "leaderOptions": [
      "string"
    ],
    "name": "string",
    "optionalReplicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "reconciling": true,
    "replicas": [
      {
        "defaultLeaderLocation": true,
        "location": "string",
        "type": "TYPE_UNSPECIFIED"
      }
    ],
    "state": "STATE_UNSPECIFIED"
  },
  "updateMask": "string",
  "validateOnly": true
}
```

The request for UpdateInstanceConfigRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceConfig|[InstanceConfig](#schemainstanceconfig)|false|none|Required. The user instance config to update, which must always include the instance config name. Otherwise, only fields mentioned in update_mask need be included. To prevent conflicts of concurrent updates, etag can be used.|
|updateMask|string(google-fieldmask)|false|none|Required. A mask specifying which fields in InstanceConfig should be updated. The field mask must always be specified; this prevents any future fields in InstanceConfig from being erased accidentally by clients that do not know about them. Only display_name and labels can be updated.|
|validateOnly|boolean|false|none|An option to validate, but not actually execute, a request, and provide the same response.|

<h2 id="tocS_UpdateInstanceMetadata">UpdateInstanceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancemetadata"></a>
<a id="schema_UpdateInstanceMetadata"></a>
<a id="tocSupdateinstancemetadata"></a>
<a id="tocsupdateinstancemetadata"></a>

```json
{
  "cancelTime": "string",
  "endTime": "string",
  "instance": {
    "config": "string",
    "createTime": "string",
    "displayName": "string",
    "endpointUris": [
      "string"
    ],
    "freeInstanceMetadata": {
      "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
      "expireTime": "string",
      "upgradeTime": "string"
    },
    "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeCount": 0,
    "processingUnits": 0,
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  },
  "startTime": "string"
}
```

Metadata type for the operation returned by UpdateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelTime|string(google-datetime)|false|none|The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again.|
|endTime|string(google-datetime)|false|none|The time at which this operation failed or was completed successfully.|
|instance|[Instance](#schemainstance)|false|none|The desired end state of the update.|
|startTime|string(google-datetime)|false|none|The time at which UpdateInstance request was received.|

<h2 id="tocS_UpdateInstanceRequest">UpdateInstanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateinstancerequest"></a>
<a id="schema_UpdateInstanceRequest"></a>
<a id="tocSupdateinstancerequest"></a>
<a id="tocsupdateinstancerequest"></a>

```json
{
  "fieldMask": "string",
  "instance": {
    "config": "string",
    "createTime": "string",
    "displayName": "string",
    "endpointUris": [
      "string"
    ],
    "freeInstanceMetadata": {
      "expireBehavior": "EXPIRE_BEHAVIOR_UNSPECIFIED",
      "expireTime": "string",
      "upgradeTime": "string"
    },
    "instanceType": "INSTANCE_TYPE_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "nodeCount": 0,
    "processingUnits": 0,
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

The request for UpdateInstance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldMask|string(google-fieldmask)|false|none|Required. A mask specifying which fields in Instance should be updated. The field mask must always be specified; this prevents any future fields in Instance from being erased accidentally by clients that do not know about them.|
|instance|[Instance](#schemainstance)|false|none|Required. The instance to update, which must always include the instance name. Otherwise, only fields mentioned in field_mask need be included.|

<h2 id="tocS_VisualizationData">VisualizationData</h2>
<!-- backwards compatibility -->
<a id="schemavisualizationdata"></a>
<a id="schema_VisualizationData"></a>
<a id="tocSvisualizationdata"></a>
<a id="tocsvisualizationdata"></a>

```json
{
  "dataSourceEndToken": "string",
  "dataSourceSeparatorToken": "string",
  "diagnosticMessages": [
    {
      "info": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "metric": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "metricSpecific": true,
      "severity": "SEVERITY_UNSPECIFIED",
      "shortMessage": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      }
    }
  ],
  "endKeyStrings": [
    "string"
  ],
  "hasPii": true,
  "indexedKeys": [
    "string"
  ],
  "keySeparator": "string",
  "keyUnit": "KEY_UNIT_UNSPECIFIED",
  "metrics": [
    {
      "aggregation": "AGGREGATION_UNSPECIFIED",
      "category": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "derived": {
        "denominator": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        },
        "numerator": {
          "args": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "token": "string"
        }
      },
      "displayLabel": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "hasNonzeroData": true,
      "hotValue": 0,
      "indexedHotKeys": {
        "property1": {
          "sparseHotKeys": {
            "property1": 0,
            "property2": 0
          }
        },
        "property2": {
          "sparseHotKeys": {
            "property1": 0,
            "property2": 0
          }
        }
      },
      "indexedKeyRangeInfos": {
        "property1": {
          "keyRangeInfos": {
            "property1": {
              "infos": [
                {
                  "contextValues": [
                    {
                      "label": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "severity": "SEVERITY_UNSPECIFIED",
                      "unit": "string",
                      "value": 0
                    }
                  ],
                  "endKeyIndex": 0,
                  "info": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "keysCount": "string",
                  "metric": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "startKeyIndex": 0,
                  "timeOffset": "string",
                  "unit": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "value": 0
                }
              ],
              "totalSize": 0
            },
            "property2": {
              "infos": [
                {
                  "contextValues": [
                    {
                      "label": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "severity": "SEVERITY_UNSPECIFIED",
                      "unit": "string",
                      "value": 0
                    }
                  ],
                  "endKeyIndex": 0,
                  "info": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "keysCount": "string",
                  "metric": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "startKeyIndex": 0,
                  "timeOffset": "string",
                  "unit": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "value": 0
                }
              ],
              "totalSize": 0
            }
          }
        },
        "property2": {
          "keyRangeInfos": {
            "property1": {
              "infos": [
                {
                  "contextValues": [
                    {
                      "label": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "severity": "SEVERITY_UNSPECIFIED",
                      "unit": "string",
                      "value": 0
                    }
                  ],
                  "endKeyIndex": 0,
                  "info": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "keysCount": "string",
                  "metric": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "startKeyIndex": 0,
                  "timeOffset": "string",
                  "unit": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "value": 0
                }
              ],
              "totalSize": 0
            },
            "property2": {
              "infos": [
                {
                  "contextValues": [
                    {
                      "label": {
                        "args": {
                          "property1": "string",
                          "property2": "string"
                        },
                        "message": "string",
                        "token": "string"
                      },
                      "severity": "SEVERITY_UNSPECIFIED",
                      "unit": "string",
                      "value": 0
                    }
                  ],
                  "endKeyIndex": 0,
                  "info": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "keysCount": "string",
                  "metric": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "startKeyIndex": 0,
                  "timeOffset": "string",
                  "unit": {
                    "args": {
                      "property1": "string",
                      "property2": "string"
                    },
                    "message": "string",
                    "token": "string"
                  },
                  "value": 0
                }
              ],
              "totalSize": 0
            }
          }
        }
      },
      "info": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "matrix": {
        "rows": [
          {
            "cols": [
              0
            ]
          }
        ]
      },
      "unit": {
        "args": {
          "property1": "string",
          "property2": "string"
        },
        "message": "string",
        "token": "string"
      },
      "visible": true
    }
  ],
  "prefixNodes": [
    {
      "dataSourceNode": true,
      "depth": 0,
      "endIndex": 0,
      "startIndex": 0,
      "word": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceEndToken|string|false|none|The token signifying the end of a data_source.|
|dataSourceSeparatorToken|string|false|none|The token delimiting a datasource name from the rest of a key in a data_source.|
|diagnosticMessages|[[DiagnosticMessage](#schemadiagnosticmessage)]|false|none|The list of messages (info, alerts, ...)|
|endKeyStrings|[string]|false|none|We discretize the entire keyspace into buckets. Assuming each bucket has an inclusive keyrange and covers keys from k(i) ... k(n). In this case k(n) would be an end key for a given range. end_key_string is the collection of all such end keys|
|hasPii|boolean|false|none|Whether this scan contains PII.|
|indexedKeys|[string]|false|none|Keys of key ranges that contribute significantly to a given metric Can be thought of as heavy hitters.|
|keySeparator|string|false|none|The token delimiting the key prefixes.|
|keyUnit|string|false|none|The unit for the key: e.g. 'key' or 'chunk'.|
|metrics|[[Metric](#schemametric)]|false|none|The list of data objects for each metric.|
|prefixNodes|[[PrefixNode](#schemaprefixnode)]|false|none|The list of extracted key prefix nodes used in the key prefix hierarchy.|

#### Enumerated Values

|Property|Value|
|---|---|
|keyUnit|KEY_UNIT_UNSPECIFIED|
|keyUnit|KEY|
|keyUnit|CHUNK|

<h2 id="tocS_Write">Write</h2>
<!-- backwards compatibility -->
<a id="schemawrite"></a>
<a id="schema_Write"></a>
<a id="tocSwrite"></a>
<a id="tocswrite"></a>

```json
{
  "columns": [
    "string"
  ],
  "table": "string",
  "values": [
    [
      null
    ]
  ]
}
```

Arguments to insert, update, insert_or_update, and replace operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified.|
|table|string|false|none|Required. The table whose rows will be written.|
|values|[[object]]|false|none|The values to be written. `values` can contain more than one list of values. If it does, then multiple rows are written, one for each entry in `values`. Each list in `values` must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple `Mutation`s, each containing one `values` entry and repeating table and columns. Individual values in each list are encoded as described here.|
