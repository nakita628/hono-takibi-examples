<h1 id="neon-api">Neon API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Neon API allows you to access and manage Neon programmatically. You can use the Neon API to manage API keys, projects, branches, compute endpoints, databases, roles, and operations. For information about these features, refer to the [Neon documentation](https://neon.tech/docs/manage/overview/).

You can run Neon API requests from this API reference using the **Try It** feature. Enter your API key as a **Bearer** token in the **Authoization** section of the page.

You can create and manage API keys in the Neon Console. See [Manage API keys](https://neon.tech/docs/manage/api-keys/) for instructions.

Base URLs:

* <a href="https://console.neon.tech/api/v2">https://console.neon.tech/api/v2</a>

Email: <a href="mailto:support@neon.tech">support@neon.tech</a> 
License: Proprietary

# Authentication

- HTTP Authentication, scheme: bearer The Neon API requires an API key to authorize your requests, which you can enter below.
Refer to our documentation to find out how to generate and use [API keys](https://neon.tech/docs/manage/api-keys).

* API Key (CookieAuth)
    - Parameter Name: **zenith**, in: cookie.

* API Key (TokenCookieAuth)
    - Parameter Name: **keycloak_token**, in: cookie.

<h1 id="neon-api-api-key">API Key</h1>

These methods allow you to create and manage API keys for your Neon account. For related information, see [Manage API keys](https://neon.tech/docs/manage/api-keys).

## Get a list of API keys

<a id="opIdlistApiKeys"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/api_keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api_keys`

Retrieves the API keys for your Neon account.
The response does not include API key tokens. A token is only provided when creating an API key.
API keys can also be managed in the Neon Console.
For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).


> Example responses

> 200 Response

```json
[
  {
    "id": 165432,
    "name": "mykey_1",
    "created_at": "2022-11-15T20:13:35Z",
    "created_by": {
      "id": "629982cc-de05-43db-ae16-28f2399c4910",
      "name": "John Smith",
      "image": "http://link.to.image"
    },
    "last_used_at": "2022-11-15T20:22:51Z",
    "last_used_from_addr": "192.0.2.255"
  },
  {
    "id": 165433,
    "name": "mykey_2",
    "created_at": "2022-11-15T20:12:36Z",
    "created_by": {
      "id": "629982cc-de05-43db-ae16-28f2399c4910",
      "name": "John Smith",
      "image": "http://link.to.image"
    },
    "last_used_at": "2022-11-15T20:15:04Z",
    "last_used_from_addr": "192.0.2.255"
  }
]
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned the API keys for the Neon account|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-a-list-of-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeysListResponseItem](#schemaapikeyslistresponseitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create an API key

<a id="opIdcreateApiKey"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/api_keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key_name": "mykey"
  }'
```

`POST /api_keys`

Creates an API key.
The `key_name` is a user-specified name for the key.
This method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.
API keys can also be managed in the Neon Console.
See [Manage API keys](https://neon.tech/docs/manage/api-keys/).


> Body parameter

```json
{
  "key_name": "mykey"
}
```

<h3 id="create-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiKeyCreateRequest](#schemaapikeycreaterequest)|true|none|
|» key_name|body|string|true|A user-specified API key name. This value is required when creating an API key.|

> Example responses

> 200 Response

```json
{
  "id": 165434,
  "key": "9v1faketcjbl4sn1013keyd43n2a8qlfakeog8yvp40hx16keyjo1bpds4y2dfms3",
  "name": "mykey",
  "created_at": "2022-11-15T20:13:35Z",
  "created_by": "629982cc-de05-43db-ae16-28f2399c4910"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created an API key|[ApiKeyCreateResponse](#schemaapikeycreateresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Revoke an API key

<a id="opIdrevokeApiKey"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/api_keys/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api_keys/{key_id}`

Revokes the specified API key.
An API key that is no longer needed can be revoked.
This action cannot be reversed.
You can obtain `key_id` values by listing the API keys for your Neon account.
API keys can also be managed in the Neon Console.
See [Manage API keys](https://neon.tech/docs/manage/api-keys/).


<h3 id="revoke-an-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|integer(int64)|true|The API key ID|

> Example responses

> 200 Response

```json
{
  "id": 165435,
  "name": "mykey",
  "created_at": "2022-11-15T20:13:35Z",
  "created_by": "629982cc-de05-43db-ae16-28f2399c4910",
  "last_used_at": "2022-11-15T20:15:04Z",
  "last_used_from_addr": "192.0.2.255",
  "revoked": true
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="revoke-an-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Revoked the specified API key|[ApiKeyRevokeResponse](#schemaapikeyrevokeresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-operation">Operation</h1>

These methods allow you to view operation details for your Neon project. For related information, see [Operations](https://neon.tech/docs/manage/operations).

## Get operation details

<a id="opIdgetProjectOperation"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/operations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/operations/{operation_id}`

Retrieves details for the specified operation.
An operation is an action performed on a Neon project resource.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain a `operation_id` by listing operations for the project.


<h3 id="get-operation-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|operation_id|path|string(uuid)|true|The operation ID|

> Example responses

> 200 Response

```json
{
  "operation": {
    "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
    "project_id": "floral-king-961888",
    "branch_id": "br-bitter-sound-247814",
    "endpoint_id": "ep-dark-snowflake-942567",
    "action": "create_timeline",
    "status": "finished",
    "failures_count": 0,
    "created_at": "2022-10-04T18:20:17Z",
    "updated_at": "2022-10-04T18:20:18Z",
    "total_duration_ms": 100
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-operation-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned details for the specified operation|[OperationResponse](#schemaoperationresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a list of operations

<a id="opIdlistProjectOperations"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/operations`

Retrieves a list of operations for the specified Neon project.
You can obtain a `project_id` by listing the projects for your Neon account.
The number of operations returned can be large.
To paginate the response, issue an initial request with a `limit` value.
Then, add the `cursor` value that was returned in the response to the next request.


<h3 id="get-a-list-of-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Specify the cursor value from the previous response to get the next batch of operations|
|limit|query|integer|false|Specify a value from 1 to 1000 to limit number of operations in the response|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ],
  "pagination": {
    "cursor": "2022-12-07T00:45:05.262011Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of operations<br>|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-a-list-of-operations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[Operation](#schemaoperation)]|true|none|none|
|pagination|[Pagination](#schemapagination)|false|none|Cursor based pagination is used. The user must pass the cursor as is to the backend.<br>For more information about cursor based pagination, see<br>https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-project">Project</h1>

These methods allow you to create and manage Neon projects. For related information, see [Manage projects](https://neon.tech/docs/manage/projects).

## Get a list of projects

<a id="opIdlistProjects"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects`

Retrieves a list of projects for the Neon account.
A project is the top-level object in the Neon object hierarchy.
For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).


<h3 id="get-a-list-of-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Specify the cursor value from the previous response to retrieve the next batch of projects.|
|limit|query|integer|false|Specify a value from 1 to 400 to limit number of projects in the response.|
|search|query|string|false|Search by project `name` or `id`. You can specify partial `name` or `id` values to filter results.|
|org_id|query|string|false|Search for projects by `org_id`.|
|timeout|query|integer|false|Specify an explicit timeout in milliseconds to limit response delay.<br>After timing out, the incomplete list of project data fetched so far will be returned.<br>Projects still being fetched when the timeout occurred are listed in the "unavailable" attribute of the response.<br>If not specified, an implicit implementation defined timeout is chosen with the same behaviour as above<br>|

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "id": "shiny-wind-028834",
      "platform_id": "aws",
      "region_id": "aws-us-east-2",
      "name": "shiny-wind-028834",
      "provisioner": "k8s-pod",
      "pg_version": 15,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:25Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "cpu_used_sec": 0,
      "branch_logical_size_limit": 0,
      "owner_id": "1232111",
      "creation_source": "console",
      "store_passwords": true,
      "branch_logical_size_limit_bytes": 10800,
      "active_time": 100
    },
    {
      "id": "winter-boat-259881",
      "platform_id": "aws",
      "region_id": "aws-us-east-2",
      "name": "winter-boat-259881",
      "provisioner": "k8s-pod",
      "pg_version": 15,
      "created_at": "2022-11-23T17:52:25Z",
      "updated_at": "2022-11-23T17:52:25Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "cpu_used_sec": 0,
      "branch_logical_size_limit": 0,
      "owner_id": "1232111",
      "creation_source": "console",
      "store_passwords": true,
      "branch_logical_size_limit_bytes": 10800,
      "active_time": 100,
      "org_id": "org-morning-bread-81040908"
    }
  ],
  "applications": {
    "winter-boat-259881": [
      "vercel",
      "github"
    ]
  },
  "integrations": {
    "winter-boat-259881": [
      "vercel",
      "github"
    ]
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of projects for the Neon account|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-a-list-of-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[ProjectListItem](#schemaprojectlistitem)]|true|none|none|
|unavailable_project_ids|[string]|false|none|A list of project IDs indicating which projects are known to exist, but whose details could not<br>be fetched within the requested (or implicit) time limit<br>|
|pagination|[Pagination](#schemapagination)|false|none|Cursor based pagination is used. The user must pass the cursor as is to the backend.<br>For more information about cursor based pagination, see<br>https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination<br>|
|applications|object|true|none|none|
|» **additionalProperties**|[string]|false|none|none|
|integrations|object|true|none|none|
|» **additionalProperties**|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» **additionalProperties**|vercel|
|» **additionalProperties**|github|
|» **additionalProperties**|datadog|
|» **additionalProperties**|vercel|
|» **additionalProperties**|github|
|» **additionalProperties**|datadog|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create a project

<a id="opIdcreateProject"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "project": {
      "name": "myproject"
    }
  }'
```

`POST /projects`

Creates a Neon project.
A project is the top-level object in the Neon object hierarchy.
Plan limits define how many projects you can create.
For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).

You can specify a region and Postgres version in the request body.
Neon currently supports PostgreSQL 14, 15, 16, and 17.
For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).


> Body parameter

```json
{
  "project": {
    "name": "myproject"
  }
}
```

<h3 id="create-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectCreateRequest](#schemaprojectcreaterequest)|true|none|
|» project|body|object|true|none|
|» » settings|body|[ProjectSettingsData](#schemaprojectsettingsdata)|false|none|
|» » name|body|string|false|The project name|
|» » branch|body|object|false|none|
|» » » name|body|string|false|The default branch name. If not specified, the default branch name, `main`, will be used.<br>|
|» » » role_name|body|string|false|The role name. If not specified, the default role name, `{database_name}_owner`, will be used.<br>|
|» » » database_name|body|string|false|The database name. If not specified, the default database name, `neondb`, will be used.<br>|
|» » autoscaling_limit_min_cu|body|[ComputeUnit](#schemacomputeunit)|false|**Deprecated.** DEPRECATED, use default_endpoint_settings.autoscaling_limit_min_cu instead.<br><br>The minimum number of Compute Units. The minimum value is `0.25`.<br>See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|» » autoscaling_limit_max_cu|body|[ComputeUnit](#schemacomputeunit)|false|**Deprecated.** DEPRECATED, use default_endpoint_settings.autoscaling_limit_max_cu instead.<br><br>The maximum number of Compute Units. See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|» » provisioner|body|[Provisioner](#schemaprovisioner)|false|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|» » region_id|body|string|false|The region identifier. Refer to our [Regions](https://neon.tech/docs/introduction/regions) documentation for supported regions. Values are specified in this format: `aws-us-east-1`<br>|
|» » default_endpoint_settings|body|[DefaultEndpointSettings](#schemadefaultendpointsettings)|false|A collection of settings for a Neon endpoint|
|» » pg_version|body|[PgVersion](#schemapgversion)|false|The major Postgres version number. Currently supported versions are `14`, `15`, `16`, and `17`.|
|» » store_passwords|body|boolean|false|Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.<br>|
|» » history_retention_seconds|body|integer(int32)|false|The number of seconds to retain the shared history for all branches in this project.<br>The default is 1 day (86400 seconds).<br>|
|» » org_id|body|string|false|Organization id in case the project created belongs to an organization.<br>If not present, project is owned by a user and not by org.<br>|

> Example responses

> 201 Response

```json
{
  "project": {
    "id": "spring-example-302709",
    "platform_id": "aws",
    "region_id": "aws-us-east-2",
    "name": "spring-example-302709",
    "provisioner": "k8s-pod",
    "pg_version": 15,
    "proxy_host": "us-east-2.aws.neon.tech",
    "store_passwords": true,
    "creation_source": "console",
    "history_retention_seconds": 604800,
    "created_at": "2022-12-13T01:30:55Z",
    "updated_at": "2022-12-13T01:30:55Z",
    "owner": {
      "name": "John Smith",
      "email": "some@email.com",
      "branches_limit": 10,
      "subscription_type": "scale"
    },
    "org_id": "org-morning-bread-81040908"
  },
  "connection_uris": [
    {
      "connection_uri": "string",
      "connection_parameters": {
        "database": "string",
        "password": "string",
        "role": "string",
        "host": "string",
        "pooler_host": "string"
      }
    }
  ],
  "roles": [
    {
      "branch_id": "br-wispy-meadow-118737",
      "name": "casey",
      "protected": false,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:25Z"
    }
  ],
  "databases": [
    {
      "id": 834686,
      "branch_id": "br-wispy-meadow-118737",
      "name": "neondb",
      "owner_name": "casey",
      "created_at": "2022-11-30T18:25:15Z",
      "updated_at": "2022-11-30T18:25:15Z"
    }
  ],
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ],
  "branch": {
    "id": "br-wispy-meadow-118737",
    "project_id": "spring-example-302709",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1DE2850",
    "name": "dev2",
    "protected": false,
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "creation_source": "console",
    "created_at": "2022-11-30T19:09:48Z",
    "updated_at": "2022-12-01T19:53:05Z",
    "default": true
  },
  "endpoints": [
    {
      "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
      "id": "ep-silent-smoke-806639",
      "project_id": "spring-example-302709",
      "branch_id": "br-wispy-meadow-118737",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "init",
      "pending_state": "active",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "creation_source": "console",
      "created_at": "2022-12-03T15:37:07Z",
      "updated_at": "2022-12-03T15:37:07Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "suspend_timeout_seconds": 0
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created a project.<br>The project includes a connection URI with a database, password, and role.<br>At least one non-protected role is created with a password.<br>Wait until the operations are finished before attempting to connect to a project database.<br>|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="create-a-project-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|[Project](#schemaproject)|true|none|none|
|connection_uris|[[ConnectionDetails](#schemaconnectiondetails)]|true|none|none|
|roles|[[Role](#schemarole)]|true|none|none|
|databases|[[Database](#schemadatabase)]|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|
|branch|[Branch](#schemabranch)|true|none|none|
|endpoints|[[Endpoint](#schemaendpoint)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a list of shared projects

<a id="opIdlistSharedProjects"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/shared \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/shared`

Retrieves a list of shared projects for the Neon account.
A project is the top-level object in the Neon object hierarchy.
For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).


<h3 id="get-a-list-of-shared-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Specify the cursor value from the previous response to get the next batch of projects.|
|limit|query|integer|false|Specify a value from 1 to 400 to limit number of projects in the response.|
|search|query|string|false|Search query by name or id.|

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "id": "shiny-wind-028834",
      "platform_id": "aws",
      "region_id": "aws-us-east-2",
      "name": "shiny-wind-028834",
      "provisioner": "k8s-pod",
      "pg_version": 15,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:25Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "cpu_used_sec": 0,
      "branch_logical_size_limit": 0,
      "owner_id": "1232111",
      "creation_source": "console",
      "store_passwords": true,
      "branch_logical_size_limit_bytes": 10800,
      "active_time": 100
    },
    {
      "id": "winter-boat-259881",
      "platform_id": "aws",
      "region_id": "aws-us-east-2",
      "name": "winter-boat-259881",
      "provisioner": "k8s-pod",
      "pg_version": 15,
      "created_at": "2022-11-23T17:52:25Z",
      "updated_at": "2022-11-23T17:52:25Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "cpu_used_sec": 0,
      "branch_logical_size_limit": 0,
      "owner_id": "1232111",
      "creation_source": "console",
      "store_passwords": true,
      "branch_logical_size_limit_bytes": 10800,
      "active_time": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-shared-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of shared projects for the Neon account|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-a-list-of-shared-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[ProjectListItem](#schemaprojectlistitem)]|true|none|none|
|unavailable_project_ids|[string]|false|none|A list of project IDs indicating which projects are known to exist, but whose details could not<br>be fetched within the requested (or implicit) time limit<br>|
|pagination|[Pagination](#schemapagination)|false|none|Cursor based pagination is used. The user must pass the cursor as is to the backend.<br>For more information about cursor based pagination, see<br>https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get project details

<a id="opIdgetProject"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}`

Retrieves information about the specified project.
A project is the top-level object in the Neon object hierarchy.
You can obtain a `project_id` by listing the projects for your Neon account.


<h3 id="get-project-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "project": {
    "id": "shiny-wind-028834",
    "platform_id": "aws",
    "region_id": "aws-us-east-2",
    "name": "shiny-wind-028834",
    "provisioner": "k8s-pod",
    "pg_version": 15,
    "history_retention_seconds": 604800,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:25Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "branch_logical_size_limit": 0,
    "cpu_used_sec": 10,
    "owner_id": "1232111",
    "owner": {
      "name": "John Smith",
      "email": "some@email.com",
      "branches_limit": 10,
      "subscription_type": "scale"
    },
    "creation_source": "console",
    "store_passwords": true,
    "branch_logical_size_limit_bytes": 10500,
    "data_storage_bytes_hour": 1040,
    "data_transfer_bytes": 1000000,
    "written_data_bytes": 100800,
    "compute_time_seconds": 100,
    "active_time_seconds": 100,
    "consumption_period_start": "2023-02-01T00:00:00Z",
    "consumption_period_end": "2023-03-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-project-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the specified project|[ProjectResponse](#schemaprojectresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a project

<a id="opIddeleteProject"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}`

Deletes the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.
Deleting a project is a permanent action.
Deleting a project also deletes endpoints, branches, databases, and users that belong to the project.


<h3 id="delete-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "project": {
    "id": "bold-cloud-468218",
    "platform_id": "aws",
    "region_id": "aws-us-east-2",
    "name": "bold-cloud-468218",
    "provisioner": "k8s-pod",
    "pg_version": 15,
    "created_at": "2022-11-30T18:41:29Z",
    "updated_at": "2022-11-30T18:41:29Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "cpu_used_sec": 23004200,
    "branch_logical_size_limit": 0,
    "owner_id": "1232111",
    "creation_source": "console",
    "store_passwords": true,
    "branch_logical_size_limit_bytes": 10500,
    "data_storage_bytes_hour": 1040,
    "data_transfer_bytes": 1000000,
    "written_data_bytes": 100800,
    "compute_time_seconds": 100,
    "active_time_seconds": 100,
    "history_retention_seconds": 604800,
    "consumption_period_start": "2023-02-01T00:00:00Z",
    "consumption_period_end": "2023-03-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified project|[ProjectResponse](#schemaprojectresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Update a project

<a id="opIdupdateProject"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "project": {
      "name": "myproject"
    }
  }'
```

`PATCH /projects/{project_id}`

Updates the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.
Neon permits updating the project name only.


> Body parameter

```json
{
  "project": {
    "name": "myproject"
  }
}
```

<h3 id="update-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|body|body|[ProjectUpdateRequest](#schemaprojectupdaterequest)|true|none|
|» project|body|object|true|none|
|» » settings|body|[ProjectSettingsData](#schemaprojectsettingsdata)|false|none|
|» » name|body|string|false|The project name|
|» » default_endpoint_settings|body|[DefaultEndpointSettings](#schemadefaultendpointsettings)|false|A collection of settings for a Neon endpoint|
|» » history_retention_seconds|body|integer(int32)|false|The number of seconds to retain the shared history for all branches in this project.<br>The default is 1 day (604800 seconds).<br>|

> Example responses

> 200 Response

```json
{
  "operations": [],
  "project": {
    "id": "shiny-wind-028834",
    "platform_id": "aws",
    "region_id": "aws-us-east-2",
    "name": "myproject",
    "provisioner": "k8s-pod",
    "pg_version": 15,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-12-04T02:39:25Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "branch_logical_size_limit": 0,
    "cpu_used_sec": 213230,
    "owner_id": "1232111",
    "creation_source": "console",
    "store_passwords": true,
    "branch_logical_size_limit_bytes": 10500,
    "data_storage_bytes_hour": 1040,
    "data_transfer_bytes": 1000000,
    "written_data_bytes": 100800,
    "compute_time_seconds": 100,
    "active_time_seconds": 100,
    "history_retention_seconds": 604800,
    "consumption_period_start": "2023-02-01T00:00:00Z",
    "consumption_period_end": "2023-03-01T00:00:00Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the specified project|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="update-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|[Project](#schemaproject)|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## List project access

<a id="opIdlistProjectPermissions"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/permissions`

Retrieves details about users who have access to the project, including the permission `id`, the granted-to email address, and the date project access was granted.

<h3 id="list-project-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "project_permissions": [
    {
      "id": "string",
      "granted_to_email": "string",
      "granted_at": "1970-01-01T00:00:00Z",
      "revoked_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="list-project-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned project access details|[ProjectPermissions](#schemaprojectpermissions)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Grant project access

<a id="opIdgrantPermissionToProject"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "string"
  }'
```

`POST /projects/{project_id}/permissions`

Grants project access to the account associated with the specified email address

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="grant-project-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|none|
|body|body|[GrantPermissionToProjectRequest](#schemagrantpermissiontoprojectrequest)|true|none|
|» email|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "granted_to_email": "string",
  "granted_at": "1970-01-01T00:00:00Z",
  "revoked_at": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="grant-project-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Granted project access|[ProjectPermission](#schemaprojectpermission)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Revoke project access

<a id="opIdrevokePermissionFromProject"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/permissions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/permissions/{permission_id}`

Revokes project access from the user associted with the specified permisison `id`. You can retrieve a user's permission `id` by listing project access.

<h3 id="revoke-project-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|none|
|permission_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "granted_to_email": "string",
  "granted_at": "1970-01-01T00:00:00Z",
  "revoked_at": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="revoke-project-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Revoked project access|[ProjectPermission](#schemaprojectpermission)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Returns all available JWKS URLs for a project

<a id="opIdgetProjectJWKS"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/jwks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/jwks`

Returns all the available JWKS URLs that can be used for verifying JWTs used as the authentication mechanism for the specified project.


<h3 id="returns-all-available-jwks-urls-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "jwks": [
    {
      "id": "string",
      "project_id": "string",
      "branch_id": "string",
      "jwks_url": "string",
      "provider_name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "jwt_audience": "string"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="returns-all-available-jwks-urls-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The JWKS URLs available for the project|[ProjectJWKSResponse](#schemaprojectjwksresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Adds a JWKS URL to a project

<a id="opIdaddProjectJWKS"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/jwks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "jwks_url": "string",
    "provider_name": "string",
    "branch_id": "string",
    "jwt_audience": "string",
    "role_names": [
      "string"
    ]
  }'
```

`POST /projects/{project_id}/jwks`

Add a new JWKS URL to a project, such that it can be used for verifying JWTs used as the authentication mechanism for the specified project.

The URL must be a valid HTTPS URL that returns a JSON Web Key Set.

The `provider_name` field allows you to specify which authentication provider you're using (e.g., Clerk, Auth0, AWS Cognito, etc.).

The `branch_id` can be used to specify on which branches the JWKS URL will be accepted. If not specified, then it will work on any branch.

The `role_names` can be used to specify for which roles the JWKS URL will be accepted.

The `jwt_audience` can be used to specify which "aud" values should be accepted by Neon in the JWTs that are used for authentication.


> Body parameter

```json
{
  "jwks_url": "string",
  "provider_name": "string",
  "branch_id": "string",
  "jwt_audience": "string",
  "role_names": [
    "string"
  ]
}
```

<h3 id="adds-a-jwks-url-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|body|body|[AddProjectJWKSRequest](#schemaaddprojectjwksrequest)|true|none|
|» jwks_url|body|string|true|The URL that lists the JWKS|
|» provider_name|body|string|true|The name of the authentication provider (e.g., Clerk, Stytch, Auth0)|
|» branch_id|body|string|false|Branch ID|
|» jwt_audience|body|string|false|The name of the required JWT Audience to be used|
|» role_names|body|[string]|true|The roles the JWKS should be mapped to|

> Example responses

> 201 Response

```json
{
  "jwks": {
    "id": "string",
    "project_id": "string",
    "branch_id": "string",
    "jwks_url": "string",
    "provider_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "jwt_audience": "string"
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="adds-a-jwks-url-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The JWKS URL was added to the project's authentication connections|[JWKSCreationOperation](#schemajwkscreationoperation)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a JWKS URL

<a id="opIddeleteProjectJWKS"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/jwks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/jwks/{jwks_id}`

Deletes a JWKS URL from the specified project

<h3 id="delete-a-jwks-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|jwks_id|path|string|true|The JWKS ID|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "project_id": "string",
  "branch_id": "string",
  "jwks_url": "string",
  "provider_name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "jwt_audience": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-jwks-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted a JWKS URL from the project|[JWKS](#schemajwks)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a connection URI

<a id="opIdgetConnectionURI"></a>

> Code samples

```bash
curl 'https://console.neon.tech/api/v2/projects/string/connection_uri?database_name=string&role_name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/connection_uri`

Retrieves a connection URI for the specified database.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `database_name` by listing the databases for a branch.
You can obtain a `role_name` by listing the roles for a branch.


<h3 id="get-a-connection-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|query|string|false|The branch ID. Defaults to your project's default `branch_id` if not specified.|
|endpoint_id|query|string|false|The endpoint ID. Defaults to the read-write `endpoint_id` associated with the `branch_id` if not specified.|
|database_name|query|string|true|The database name|
|role_name|query|string|true|The role name|
|pooled|query|boolean|false|Adds the `-pooler` option to the connection URI when set to `true`, creating a pooled connection URI.|

> Example responses

> 200 Response

```json
{
  "uri": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-connection-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned the connection URI|[ConnectionURIResponse](#schemaconnectionuriresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get the list of VPC endpoint restrictions

<a id="opIdlistProjectVPCEndpoints"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/vpc_endpoints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/vpc_endpoints`

Retrieves the list of VPC endpoint restrictions for the specified project.
This endpoint is under active development and its semantics may change in the future.


<h3 id="get-the-list-of-vpc-endpoint-restrictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "endpoints": [
    {
      "vpc_endpoint_id": "string",
      "label": "string"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-the-list-of-vpc-endpoint-restrictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of configured VPC endpoint restrictions for the specified project|[VPCEndpointsResponse](#schemavpcendpointsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Assign or update a VPC endpoint restriction

<a id="opIdassignProjectVPCEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/vpc_endpoints/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "string"
  }'
```

`POST /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}`

Configures the specified VPC endpoint as restriction for the project,
or updates the existing restriction. When a VPC endpoint is assigned
as a restriction, only connections from this specific VPC are accepted.
Note that a VPC endpoint can only used as a restriction on a project
after it has been assigned to the parent organization.
This endpoint is under active development and its semantics may change in the future.


> Body parameter

```json
{
  "label": "string"
}
```

<h3 id="assign-or-update-a-vpc-endpoint-restriction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|vpc_endpoint_id|path|string|true|The VPC endpoint ID|
|body|body|[VPCEndpointAssignment](#schemavpcendpointassignment)|true|none|
|» label|body|string|true|none|

> Example responses

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="assign-or-update-a-vpc-endpoint-restriction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configured the specified VPC endpoint as a restriction for the specified project.|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a VPC endpoint

<a id="opIddeleteProjectVPCEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/vpc_endpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/vpc_endpoints/{vpc_endpoint_id}`

Deletes the specified VPC endpoint restriction from the specified project.
This endpoint is under active development and its semantics may change in the future.


<h3 id="delete-a-vpc-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|vpc_endpoint_id|path|string|true|The VPC endpoint ID|

> Example responses

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-vpc-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified VPC endpoint restriction from the specified project|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-branch">Branch</h1>

These methods allow you to create and manage branches in your Neon project. For related information, see [Manage branches](https://neon.tech/docs/manage/branches).

## Get a list of branches

<a id="opIdlistProjectBranches"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches`

Retrieves a list of branches for the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.

Each Neon project has a root branch named `main`.
A `branch_id` value has a `br-` prefix.
A project may contain child branches that were branched from `main` or from another branch.
A parent branch is identified by the `parent_id` value, which is the `id` of the parent branch.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).


<h3 id="get-a-list-of-branches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Search by branch `name` or `id`. You can specify partial `name` or `id` values to filter results.|
|sort_by|query|string|false|Sort the branches by sort_field. If not provided, branches will be sorted by updated_at descending order|
|cursor|query|string|false|A cursor to use in pagination. A cursor defines your place in the data list. Include `response.pagination.next` or `response.pagination.previous` in subsequent API calls to fetch next or previous page of the list.|
|sort_order|query|string|false|Defines the sorting order of entities.|
|limit|query|integer|false|The maximum number of records to be returned in the response|
|project_id|path|string|true|The Neon project ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|name|
|sort_by|created_at|
|sort_by|updated_at|
|sort_order|asc|
|sort_order|desc|

> Example responses

> 200 Response

```json
{
  "branches": [
    {
      "id": "br-aged-salad-637688",
      "project_id": "shiny-wind-028834",
      "name": "main",
      "current_state": "ready",
      "state_changed_at": "2022-11-30T20:09:48Z",
      "logical_size": 28,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:26Z",
      "data_transfer_bytes": 1000000,
      "written_data_bytes": 100800,
      "compute_time_seconds": 100,
      "active_time_seconds": 100,
      "cpu_used_sec": 100,
      "default": true,
      "protected": false,
      "creation_source": "console"
    },
    {
      "id": "br-sweet-breeze-497520",
      "project_id": "shiny-wind-028834",
      "parent_id": "br-aged-salad-637688",
      "parent_lsn": "0/1DE2850",
      "name": "dev2",
      "current_state": "ready",
      "state_changed_at": "2022-11-30T20:09:48Z",
      "logical_size": 28,
      "created_at": "2022-11-30T19:09:48Z",
      "updated_at": "2022-11-30T19:09:49Z",
      "data_transfer_bytes": 1000000,
      "written_data_bytes": 100800,
      "compute_time_seconds": 100,
      "active_time_seconds": 100,
      "cpu_used_sec": 100,
      "default": true,
      "protected": false,
      "creation_source": "console"
    },
    {
      "id": "br-raspy-hill-832856",
      "project_id": "shiny-wind-028834",
      "parent_id": "br-aged-salad-637688",
      "parent_lsn": "0/19623D8",
      "name": "dev1",
      "current_state": "ready",
      "state_changed_at": "2022-11-30T20:09:48Z",
      "logical_size": 21,
      "created_at": "2022-11-30T17:36:57Z",
      "updated_at": "2022-11-30T17:36:57Z",
      "data_transfer_bytes": 1000000,
      "written_data_bytes": 100800,
      "compute_time_seconds": 100,
      "active_time_seconds": 100,
      "cpu_used_sec": 100,
      "default": true,
      "protected": false,
      "creation_source": "console"
    }
  ],
  "annotations": {
    "br-aged-salad-637688": {
      "object": {
        "type": "console/branch",
        "id": "br-aged-salad-637688"
      },
      "value": {
        "vercel-commit-ref": "test"
      },
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:26Z"
    }
  },
  "pagination": {
    "next": "eyJjcmVhdGV",
    "previous": "eyJjcmVhdGV",
    "sort_by": "updated_at",
    "sort_order": "desc"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-branches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of branches for the specified project|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-a-list-of-branches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|[[Branch](#schemabranch)]|true|none|none|
|annotations|object|true|none|none|
|» **additionalProperties**|[AnnotationData](#schemaannotationdata)|false|none|none|
|pagination|[CursorPagination](#schemacursorpagination)|false|none|To paginate the response, issue an initial request with `limit` value. Then, add the value returned in the response `.pagination.next` attribute into the request under the `cursor` query parameter to the subsequent request to retrieve next page in pagination. Using `.pagination.previous` as cursor will return the previous page. The contents on cursor `next` and `previous` are opaque, clients are not expected to make any assumptions on the format of the data inside the cursor.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create a branch

<a id="opIdcreateProjectBranch"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch": {
      "parent_id": "br-aged-salad-637688",
      "name": "mybranch"
    }
  }'
```

`POST /projects/{project_id}/branches`

Creates a branch in the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.

This method does not require a request body, but you can specify one to create a compute endpoint for the branch or to select a non-default parent branch.
The default behavior is to create a branch from the project's default branch with no compute endpoint, and the branch name is auto-generated.
There is a maximum of one read-write endpoint per branch.
A branch can have multiple read-only endpoints.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).


> Body parameter

```json
{
  "branch": {
    "parent_id": "br-aged-salad-637688",
    "name": "mybranch"
  }
}
```

<h3 id="create-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|body|body|object|false|none|
|» endpoints|body|[[BranchCreateRequestEndpointOptions](#schemabranchcreaterequestendpointoptions)]|false|none|
|» branch|body|object|false|none|
|» » parent_id|body|string|false|The `branch_id` of the parent branch. If omitted or empty, the branch will be created from the project's default branch.<br>|
|» » name|body|string|false|The branch name<br>|
|» » parent_lsn|body|string|false|A Log Sequence Number (LSN) on the parent branch. The branch will be created with data from this LSN.<br>|
|» » parent_timestamp|body|string(date-time)|false|A timestamp identifying a point in time on the parent branch. The branch will be created with data starting from this point in time.<br>The timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.<br>|
|» » protected|body|boolean|false|Whether the branch is protected<br>|
|» » archived|body|boolean|false|Whether to create the branch as archived<br>|
|» » init_source|body|string|false|The initialization source type for the branch. Valid values are `import`, `empty`, `schema` and `parent-data`.<br>This parameter is under active development and may change its semantics in the future.<br>|
|» annotation_value|body|[AnnotationValueData](#schemaannotationvaluedata)|false|Annotation properties.|

> Example responses

> 201 Response

```json
{
  "branch": {
    "id": "br-wispy-meadow-118737",
    "project_id": "spring-example-302709",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1DE2850",
    "name": "dev2",
    "protected": false,
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "creation_source": "console",
    "created_at": "2022-11-30T19:09:48Z",
    "updated_at": "2022-12-01T19:53:05Z",
    "default": true
  },
  "endpoints": [
    {
      "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
      "id": "ep-silent-smoke-806639",
      "project_id": "spring-example-302709",
      "branch_id": "br-wispy-meadow-118737",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "init",
      "pending_state": "active",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "creation_source": "console",
      "created_at": "2022-12-03T15:37:07Z",
      "updated_at": "2022-12-03T15:37:07Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "suspend_timeout_seconds": 0
    }
  ],
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ],
  "roles": [
    {
      "branch_id": "br-wispy-meadow-118737",
      "name": "casey",
      "protected": false,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:25Z"
    }
  ],
  "databases": [
    {
      "id": 834686,
      "branch_id": "br-wispy-meadow-118737",
      "name": "neondb",
      "owner_name": "casey",
      "created_at": "2022-11-30T18:25:15Z",
      "updated_at": "2022-11-30T18:25:15Z"
    }
  ],
  "connection_uris": [
    {
      "connection_uri": "string",
      "connection_parameters": {
        "database": "string",
        "password": "string",
        "role": "string",
        "host": "string",
        "pooler_host": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created a branch. An endpoint is only created if it was specified in the request.|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="create-a-branch-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|[Branch](#schemabranch)|true|none|none|
|endpoints|[[Endpoint](#schemaendpoint)]|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|
|roles|[[Role](#schemarole)]|true|none|none|
|databases|[[Database](#schemadatabase)]|true|none|none|
|connection_uris|[[ConnectionDetails](#schemaconnectiondetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get the total number of branches in a project

<a id="opIdcountProjectBranches"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/count`

Retrieves the total number of branches in the specified project.
You can obtain a `project_id` by listing the projects for your Neon account.


<h3 id="get-the-total-number-of-branches-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|Count branches matching the `name` in search query|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "count": 0
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-the-total-number-of-branches-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a count of branches for the specified project|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-the-total-number-of-branches-in-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get branch details

<a id="opIdgetProjectBranch"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}`

Retrieves information about the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain a `branch_id` by listing the project's branches.
A `branch_id` value has a `br-` prefix.

Each Neon project is initially created with a root and default branch named `main`.
A project can contain one or more branches.
A parent branch is identified by a `parent_id` value, which is the `id` of the parent branch.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).


<h3 id="get-branch-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|

> Example responses

> 200 Response

```json
{
  "branch": {
    "id": "br-aged-salad-637688",
    "project_id": "shiny-wind-028834",
    "name": "main",
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "logical_size": 28,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:26Z",
    "data_transfer_bytes": 1000000,
    "written_data_bytes": 100800,
    "compute_time_seconds": 100,
    "active_time_seconds": 100,
    "cpu_used_sec": 100,
    "default": true,
    "protected": false,
    "creation_source": "console"
  },
  "annotation": {
    "object": {
      "type": "console/branch",
      "id": "br-aged-salad-637688"
    },
    "value": {
      "vercel-commit-ref": "test"
    },
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:26Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-branch-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the specified branch|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-branch-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|[Branch](#schemabranch)|true|none|none|
|annotation|[AnnotationData](#schemaannotationdata)|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a branch

<a id="opIddeleteProjectBranch"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/branches/{branch_id}`

Deletes the specified branch from a project, and places
all compute endpoints into an idle state, breaking existing client connections.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain a `branch_id` by listing the project's branches.
For related information, see [Manage branches](https://neon.tech/docs/manage/branches/).

When a successful response status is received, the compute endpoints are still active,
and the branch is not yet deleted from storage.
The deletion occurs after all operations finish.
You cannot delete a project's root or default branch, and you cannot delete a branch that has a child branch.
A project must have at least one branch.


<h3 id="delete-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|

> Example responses

> 200 Response

```json
{
  "branch": {
    "id": "br-aged-salad-637688",
    "project_id": "shiny-wind-028834",
    "name": "main",
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "logical_size": 28,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:26Z",
    "data_transfer_bytes": 1000000,
    "written_data_bytes": 100800,
    "compute_time_seconds": 100,
    "active_time_seconds": 100,
    "cpu_used_sec": 100,
    "default": true,
    "protected": false,
    "creation_source": "console"
  },
  "operations": [
    {
      "id": "b6afbc21-2990-4a76-980b-b57d8c2948f2",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-sweet-breeze-497520",
      "endpoint_id": "ep-soft-violet-752733",
      "action": "suspend_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-01T19:53:05Z",
      "updated_at": "2022-12-01T19:53:05Z",
      "total_duration_ms": 100
    },
    {
      "id": "b6afbc21-2990-4a76-980b-b57d8c2948f2",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-sweet-breeze-497520",
      "action": "delete_timeline",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-01T19:53:05Z",
      "updated_at": "2022-12-01T19:53:05Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified branch|[BranchOperations](#schemabranchoperations)|
|204|No Content|Returned if the branch doesn't exist or has already been deleted|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Update a branch

<a id="opIdupdateProjectBranch"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch": {
      "name": "mybranch"
    }
  }'
```

`PATCH /projects/{project_id}/branches/{branch_id}`

Updates the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).


> Body parameter

```json
{
  "branch": {
    "name": "mybranch"
  }
}
```

<h3 id="update-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|body|body|[BranchUpdateRequest](#schemabranchupdaterequest)|true|none|
|» branch|body|object|true|none|
|» » name|body|string|false|none|
|» » protected|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "branch": {
    "id": "br-icy-dream-250089",
    "project_id": "shiny-wind-028834",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1E19478",
    "name": "mybranch",
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:26Z",
    "data_transfer_bytes": 1000000,
    "written_data_bytes": 100800,
    "compute_time_seconds": 100,
    "active_time_seconds": 100,
    "cpu_used_sec": 100,
    "default": true,
    "protected": false,
    "creation_source": "console"
  },
  "operations": []
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the specified branch|[BranchOperations](#schemabranchoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Restore a branch

<a id="opIdrestoreProjectBranch"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "source_branch_id": "string",
    "source_lsn": "string",
    "source_timestamp": "1970-01-01T00:00:00Z",
    "preserve_under_name": "string"
  }'
```

`POST /projects/{project_id}/branches/{branch_id}/restore`

Restores a branch to an earlier state in its own or another branch's history

> Body parameter

```json
{
  "source_branch_id": "string",
  "source_lsn": "string",
  "source_timestamp": "1970-01-01T00:00:00Z",
  "preserve_under_name": "string"
}
```

<h3 id="restore-a-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|body|body|[BranchRestoreRequest](#schemabranchrestorerequest)|true|none|
|» source_branch_id|body|string|true|The `branch_id` of the restore source branch.<br>If `source_timestamp` and `source_lsn` are omitted, the branch will be restored to head.<br>If `source_branch_id` is equal to the branch's id, `source_timestamp` or `source_lsn` is required.<br>|
|» source_lsn|body|string|false|A Log Sequence Number (LSN) on the source branch. The branch will be restored with data from this LSN.<br>|
|» source_timestamp|body|string(date-time)|false|A timestamp identifying a point in time on the source branch. The branch will be restored with data starting from this point in time.<br>The timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.<br>|
|» preserve_under_name|body|string|false|If not empty, the previous state of the branch will be saved to a branch with this name.<br>If the branch has children or the `source_branch_id` is equal to the branch id, this field is required. All existing child branches will be moved to the newly created branch under the name `preserve_under_name`.<br>|

> Example responses

> 200 Response

```json
{
  "branch": {
    "id": "br-wispy-meadow-118737",
    "project_id": "spring-example-302709",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1DE2850",
    "name": "dev2",
    "protected": false,
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "creation_source": "console",
    "created_at": "2022-11-30T19:09:48Z",
    "updated_at": "2022-12-01T19:53:05Z",
    "default": true
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="restore-a-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the specified branch|[BranchOperations](#schemabranchoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get the database schema

<a id="opIdgetProjectBranchSchema"></a>

> Code samples

```bash
curl 'https://console.neon.tech/api/v2/projects/string/branches/string/schema?db_name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/schema`

Retrieves the schema from the specified database. The `lsn` and `timestamp` values cannot be specified at the same time. If both are omitted, the database schema is retrieved from database's head.

<h3 id="get-the-database-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|db_name|query|string|true|Name of the database for which the schema is retrieved|
|lsn|query|string|false|The Log Sequence Number (LSN) for which the schema is retrieved<br>|
|timestamp|query|string(date-time)|false|The point in time for which the schema is retrieved<br>|

> Example responses

> 200 Response

```json
{
  "sql": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-the-database-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Schema definition|[BranchSchemaResponse](#schemabranchschemaresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Compare the database schema with another branch's schema

<a id="opIdgetProjectBranchSchemaComparison"></a>

> Code samples

```bash
curl 'https://console.neon.tech/api/v2/projects/string/branches/string/compare_schema?db_name=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/compare_schema`

Compares the schema from the specified database with another branch's schema. Hidden from the public spec.

<h3 id="compare-the-database-schema-with-another-branchs-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|base_branch_id|query|string|false|The branch ID to compare the schema with|
|db_name|query|string|true|Name of the database for which the schema is retrieved|
|lsn|query|string|false|The Log Sequence Number (LSN) for which the schema is retrieved<br>|
|timestamp|query|string(date-time)|false|The point in time for which the schema is retrieved<br>|
|base_lsn|query|string|false|The Log Sequence Number (LSN) for the base branch schema<br>|
|base_timestamp|query|string(date-time)|false|The point in time for the base branch schema<br>|

> Example responses

> 200 Response

```json
{
  "diff": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="compare-the-database-schema-with-another-branchs-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Difference between the schemas|[BranchSchemaCompareResponse](#schemabranchschemacompareresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Set branch as default

<a id="opIdsetDefaultProjectBranch"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/set_as_default \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{project_id}/branches/{branch_id}/set_as_default`

Sets the specified branch as the project's default branch.
The default designation is automatically removed from the previous default branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For more information, see [Manage branches](https://neon.tech/docs/manage/branches/).


<h3 id="set-branch-as-default-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|

> Example responses

> 200 Response

```json
{
  "branch": {
    "cpu_used_sec": 1,
    "active_time_seconds": 1,
    "compute_time_seconds": 1,
    "written_data_bytes": 100,
    "data_transfer_bytes": 100,
    "id": "br-icy-dream-250089",
    "project_id": "shiny-wind-028834",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1E19478",
    "name": "mybranch",
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:26Z",
    "default": true,
    "protected": false,
    "creation_source": "console"
  },
  "operations": []
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="set-branch-as-default-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the specified branch|[BranchOperations](#schemabranchoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a list of branch endpoints

<a id="opIdlistProjectBranchEndpoints"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/endpoints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/endpoints`

Retrieves a list of compute endpoints for the specified branch.
Neon permits only one read-write compute endpoint per branch.
A branch can have multiple read-only compute endpoints.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.


<h3 id="get-a-list-of-branch-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|

> Example responses

> 200 Response

```json
{
  "endpoints": [
    {
      "host": "ep-little-smoke-851426.us-east-2.aws.neon.tech",
      "id": "ep-little-smoke-851426",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-aged-salad-637688",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "idle",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "last_active": "2022-11-23T17:00:00Z",
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-30T18:25:21Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "creation_source": "console",
      "provisioner": "k8s-pod",
      "suspend_timeout_seconds": 10800
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-branch-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of endpoints for the specified branch|[EndpointsResponse](#schemaendpointsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a list of databases

<a id="opIdlistProjectBranchDatabases"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/databases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/databases`

Retrieves a list of databases for the specified branch.
A branch can have multiple databases.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


<h3 id="get-a-list-of-databases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|

> Example responses

> 200 Response

```json
{
  "databases": [
    {
      "id": 834686,
      "branch_id": "br-aged-salad-637688",
      "name": "main",
      "owner_name": "casey",
      "created_at": "2022-11-30T18:25:15Z",
      "updated_at": "2022-11-30T18:25:15Z"
    },
    {
      "id": 834686,
      "branch_id": "br-aged-salad-637688",
      "name": "mydb",
      "owner_name": "casey",
      "created_at": "2022-10-30T17:14:13Z",
      "updated_at": "2022-10-30T17:14:13Z"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-databases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of databases of the specified branch|[DatabasesResponse](#schemadatabasesresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create a database

<a id="opIdcreateProjectBranchDatabase"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/databases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "database": {
      "name": "mydb",
      "owner_name": "casey"
    }
  }'
```

`POST /projects/{project_id}/branches/{branch_id}/databases`

Creates a database in the specified branch.
A branch can have multiple databases.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


> Body parameter

```json
{
  "database": {
    "name": "mydb",
    "owner_name": "casey"
  }
}
```

<h3 id="create-a-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|body|body|[DatabaseCreateRequest](#schemadatabasecreaterequest)|true|none|
|» database|body|object|true|none|
|» » name|body|string|true|The name of the datbase<br>|
|» » owner_name|body|string|true|The name of the role that owns the database<br>|

> Example responses

> 201 Response

```json
{
  "database": {
    "id": 876692,
    "branch_id": "br-aged-salad-637688",
    "name": "mydb",
    "owner_name": "casey",
    "created_at": "2022-12-04T00:15:04Z",
    "updated_at": "2022-12-04T00:15:04Z"
  },
  "operations": [
    {
      "id": "39426015-db00-40fa-85c5-1c7072df46d0",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-aged-salad-637688",
      "endpoint_id": "ep-little-smoke-851426",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-04T00:15:04Z",
      "updated_at": "2022-12-04T00:15:04Z",
      "total_duration_ms": 100
    },
    {
      "id": "b7483d4e-33da-4d40-b319-ac858d4d3e69",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-aged-salad-637688",
      "endpoint_id": "ep-little-smoke-851426",
      "action": "suspend_compute",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-04T00:15:04Z",
      "updated_at": "2022-12-04T00:15:04Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created a database in the specified branch|[DatabaseOperations](#schemadatabaseoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get database details

<a id="opIdgetProjectBranchDatabase"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/databases/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/databases/{database_name}`

Retrieves information about the specified database.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` and `database_name` by listing the branch's databases.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


<h3 id="get-database-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|database_name|path|string|true|The database name|

> Example responses

> 200 Response

```json
{
  "database": {
    "id": 834686,
    "branch_id": "br-aged-salad-637688",
    "name": "main",
    "owner_name": "casey",
    "created_at": "2022-11-30T18:25:15Z",
    "updated_at": "2022-11-30T18:25:15Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-database-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned the database details|[DatabaseResponse](#schemadatabaseresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a database

<a id="opIddeleteProjectBranchDatabase"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/databases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/branches/{branch_id}/databases/{database_name}`

Deletes the specified database from the branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` and `database_name` by listing the branch's databases.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


<h3 id="delete-a-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|database_name|path|string|true|The database name|

> Example responses

> 200 Response

```json
{
  "database": {
    "id": 851537,
    "branch_id": "br-raspy-hill-832856",
    "name": "mydb",
    "owner_name": "casey",
    "created_at": "2022-12-01T19:41:46Z",
    "updated_at": "2022-12-01T19:41:46Z"
  },
  "operations": [
    {
      "id": "9ef1c2ed-dce4-43aa-bae8-78aea636bf8a",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-raspy-hill-832856",
      "endpoint_id": "ep-steep-bush-777093",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-01T19:51:41Z",
      "updated_at": "2022-12-01T19:51:41Z",
      "total_duration_ms": 100
    },
    {
      "id": "42dafb46-f861-497b-ae89-f2bec54f4966",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-raspy-hill-832856",
      "endpoint_id": "ep-steep-bush-777093",
      "action": "suspend_compute",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-01T19:51:41Z",
      "updated_at": "2022-12-01T19:51:41Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified database|[DatabaseOperations](#schemadatabaseoperations)|
|204|No Content|Returned if the database doesn't exist or has already been deleted|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Update a database

<a id="opIdupdateProjectBranchDatabase"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/databases/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "database": {
      "name": "mydb",
      "owner_name": "sally"
    }
  }'
```

`PATCH /projects/{project_id}/branches/{branch_id}/databases/{database_name}`

Updates the specified database in the branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` and `database_name` by listing the branch's databases.
For related information, see [Manage databases](https://neon.tech/docs/manage/databases/).


> Body parameter

```json
{
  "database": {
    "name": "mydb",
    "owner_name": "sally"
  }
}
```

<h3 id="update-a-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|database_name|path|string|true|The database name|
|body|body|[DatabaseUpdateRequest](#schemadatabaseupdaterequest)|true|none|
|» database|body|object|true|none|
|» » name|body|string|false|The name of the database<br>|
|» » owner_name|body|string|false|The name of the role that owns the database<br>|

> Example responses

> 200 Response

```json
{
  "database": {
    "id": 876692,
    "branch_id": "br-aged-salad-637688",
    "name": "mydb",
    "owner_name": "sally",
    "created_at": "2022-12-04T00:15:04Z",
    "updated_at": "2022-12-04T00:15:04Z"
  },
  "operations": [
    {
      "id": "9ef1c2ed-dce4-43aa-bae8-78aea636bf8a",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-aged-salad-637688",
      "endpoint_id": "ep-little-smoke-851426",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-04T00:21:01Z",
      "updated_at": "2022-12-04T00:21:01Z",
      "total_duration_ms": 100
    },
    {
      "id": "42dafb46-f861-497b-ae89-f2bec54f4966",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-aged-salad-637688",
      "endpoint_id": "ep-little-smoke-851426",
      "action": "suspend_compute",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-04T00:21:01Z",
      "updated_at": "2022-12-04T00:21:01Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the database|[DatabaseOperations](#schemadatabaseoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a list of roles

<a id="opIdlistProjectBranchRoles"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/roles`

Retrieves a list of Postgres roles from the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).


<h3 id="get-a-list-of-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|

> Example responses

> 200 Response

```json
{
  "roles": [
    {
      "branch_id": "br-aged-salad-637688",
      "name": "casey",
      "protected": false,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:25Z"
    },
    {
      "branch_id": "br-aged-salad-637688",
      "name": "thomas",
      "protected": false,
      "created_at": "2022-10-22T17:38:21Z",
      "updated_at": "2022-10-22T17:38:21Z"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of roles from the specified branch.|[RolesResponse](#schemarolesresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create a role

<a id="opIdcreateProjectBranchRole"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": {
      "name": "sally"
    }
  }'
```

`POST /projects/{project_id}/branches/{branch_id}/roles`

Creates a Postgres role in the specified branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).

Connections established to the active compute endpoint will be dropped.
If the compute endpoint is idle, the endpoint becomes active for a short period of time and is suspended afterward.


> Body parameter

```json
{
  "role": {
    "name": "sally"
  }
}
```

<h3 id="create-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|body|body|[RoleCreateRequest](#schemarolecreaterequest)|true|none|
|» role|body|object|true|none|
|» » name|body|string|true|The role name. Cannot exceed 63 bytes in length.<br>|

> Example responses

> 201 Response

```json
{
  "role": {
    "branch_id": "br-noisy-sunset-458773",
    "name": "sally",
    "password": "Onf1AjayKwe0",
    "protected": false,
    "created_at": "2022-12-03T11:58:29Z",
    "updated_at": "2022-12-03T11:58:29Z"
  },
  "operations": [
    {
      "id": "2c2be371-d5ac-4db5-8b68-79f05e8bc287",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-noisy-sunset-458773",
      "endpoint_id": "ep-small-pine-767857",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T11:58:29Z",
      "updated_at": "2022-12-03T11:58:29Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created a role in the specified branch|[RoleOperations](#schemaroleoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get role details

<a id="opIdgetProjectBranchRole"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/roles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/roles/{role_name}`

Retrieves details about the specified role.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
In Neon, the terms "role" and "user" are synonymous.
For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).


<h3 id="get-role-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|role_name|path|string|true|The role name|

> Example responses

> 200 Response

```json
{
  "role": {
    "branch_id": "br-noisy-sunset-458773",
    "name": "casey",
    "protected": false,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:25Z"
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-role-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned details for the specified role|[RoleResponse](#schemaroleresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a role

<a id="opIddeleteProjectBranchRole"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/roles/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/branches/{branch_id}/roles/{role_name}`

Deletes the specified Postgres role from the branch.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).


<h3 id="delete-a-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|role_name|path|string|true|The role name|

> Example responses

> 200 Response

```json
{
  "role": {
    "branch_id": "br-raspy-hill-832856",
    "name": "thomas",
    "protected": false,
    "created_at": "2022-12-01T14:36:23Z",
    "updated_at": "2022-12-01T14:36:23Z"
  },
  "operations": [
    {
      "id": "db646be3-eace-4910-9f60-8150823c5cb8",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-raspy-hill-832856",
      "endpoint_id": "ep-steep-bush-777093",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-01T19:48:11Z",
      "updated_at": "2022-12-01T19:48:11Z",
      "total_duration_ms": 100
    },
    {
      "id": "ab94cdad-7630-4943-a55e-5a0952d2e598",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-raspy-hill-832856",
      "endpoint_id": "ep-steep-bush-777093",
      "action": "suspend_compute",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-01T19:48:11Z",
      "updated_at": "2022-12-01T19:48:11Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified role from the branch|[RoleOperations](#schemaroleoperations)|
|204|No Content|Returned if the role doesn't exist or has already been deleted|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get role password

<a id="opIdgetProjectBranchRolePassword"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/roles/string/reveal_password \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/branches/{branch_id}/roles/{role_name}/reveal_password`

Retrieves the password for the specified Postgres role, if possible.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).


<h3 id="get-role-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|role_name|path|string|true|The role name|

> Example responses

> 200 Response

```json
{
  "password": "mypass"
}
```

> 404 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 412 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-role-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned password for the specified role|[RolePasswordResponse](#schemarolepasswordresponse)|
|404|Not Found|Role not found|[GeneralError](#schemageneralerror)|
|412|Precondition Failed|Storing passwords is disabled|[GeneralError](#schemageneralerror)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Reset the role password

<a id="opIdresetProjectBranchRolePassword"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/branches/string/roles/string/reset_password \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{project_id}/branches/{branch_id}/roles/{role_name}/reset_password`

Resets the password for the specified Postgres role.
Returns a new password and operations. The new password is ready to use when the last operation finishes.
The old password remains valid until last operation finishes.
Connections to the compute endpoint are dropped. If idle,
the compute endpoint becomes active for a short period of time.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain the `branch_id` by listing the project's branches.
You can obtain the `role_name` by listing the roles for a branch.
For related information, see [Manage roles](https://neon.tech/docs/manage/roles/).


<h3 id="reset-the-role-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|branch_id|path|string|true|The branch ID|
|role_name|path|string|true|The role nam|

> Example responses

> 200 Response

```json
{
  "role": {
    "branch_id": "br-noisy-sunset-458773",
    "name": "sally",
    "password": "ClfD0aVuK3eK",
    "protected": false,
    "created_at": "2022-12-03T12:39:39Z",
    "updated_at": "2022-12-03T12:58:18Z"
  },
  "operations": [
    {
      "id": "6bef07a0-ebca-40cd-9100-7324036cfff2",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-noisy-sunset-458773",
      "endpoint_id": "ep-small-pine-767857",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T12:58:18Z",
      "updated_at": "2022-12-03T12:58:18Z",
      "total_duration_ms": 100
    },
    {
      "id": "16b5bfca-4697-4194-a338-d2cdc9aca2af",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-noisy-sunset-458773",
      "endpoint_id": "ep-small-pine-767857",
      "action": "suspend_compute",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-03T12:58:18Z",
      "updated_at": "2022-12-03T12:58:18Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="reset-the-role-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reset the passsword for the specified role|[RoleOperations](#schemaroleoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-endpoint">Endpoint</h1>

These methods allow you to create and manage compute endpoints in your Neon project. For related information, see [Manage compute endpoints](https://neon.tech/docs/manage/endpoints).

## Get a list of compute endpoints

<a id="opIdlistProjectEndpoints"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/endpoints`

Retrieves a list of compute endpoints for the specified project.
A compute endpoint is a Neon compute instance.
You can obtain a `project_id` by listing the projects for your Neon account.
For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


<h3 id="get-a-list-of-compute-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|

> Example responses

> 200 Response

```json
{
  "endpoints": [
    {
      "host": "ep-little-smoke-851426.us-east-2.aws.neon.tech",
      "creation_source": "console",
      "suspend_timeout_seconds": 10800,
      "provisioner": "k8s-pod",
      "id": "ep-little-smoke-851426",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-aged-salad-637688",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "idle",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "last_active": "2022-11-23T17:00:00Z",
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-30T18:25:21Z",
      "proxy_host": "us-east-2.aws.neon.tech"
    },
    {
      "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
      "creation_source": "console",
      "suspend_timeout_seconds": 10800,
      "provisioner": "k8s-pod",
      "id": "ep-steep-bush-777093",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-raspy-hill-832856",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "idle",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "last_active": "2022-11-30T17:00:00Z",
      "created_at": "2022-11-30T17:36:57Z",
      "updated_at": "2022-11-30T18:42:58Z",
      "proxy_host": "us-east-2.aws.neon.tech"
    },
    {
      "host": "ep-soft-violet-752733.us-east-2.aws.neon.tech",
      "creation_source": "console",
      "suspend_timeout_seconds": 10800,
      "provisioner": "k8s-pod",
      "id": "ep-soft-violet-752733",
      "project_id": "shiny-wind-028834",
      "branch_id": "br-sweet-breeze-497520",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "idle",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "last_active": "2022-11-30T19:00:00Z",
      "created_at": "2022-11-30T19:09:48Z",
      "updated_at": "2022-11-30T19:14:51Z",
      "proxy_host": "us-east-2.aws.neon.tech"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-compute-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned a list of endpoints for the specified project|[EndpointsResponse](#schemaendpointsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create a compute endpoint

<a id="opIdcreateProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoint": {
      "branch_id": "br-floral-mountain-251143",
      "type": "read_write"
    }
  }'
```

`POST /projects/{project_id}/endpoints`

Creates a compute endpoint for the specified branch.
An endpoint is a Neon compute instance.
There is a maximum of one read-write compute endpoint per branch.
If the specified branch already has a read-write compute endpoint, the operation fails.
A branch can have multiple read-only compute endpoints.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain `branch_id` by listing the project's branches.
A `branch_id` has a `br-` prefix.
For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


> Body parameter

```json
{
  "endpoint": {
    "branch_id": "br-floral-mountain-251143",
    "type": "read_write"
  }
}
```

<h3 id="create-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|body|body|[EndpointCreateRequest](#schemaendpointcreaterequest)|true|none|
|» endpoint|body|object|true|none|
|» » branch_id|body|string|true|The ID of the branch the compute endpoint will be associated with<br>|
|» » region_id|body|string|false|The region where the compute endpoint will be created. Only the project's `region_id` is permitted.<br>|
|» » type|body|[EndpointType](#schemaendpointtype)|true|The compute endpoint type. Either `read_write` or `read_only`.<br>|
|» » settings|body|[EndpointSettingsData](#schemaendpointsettingsdata)|false|A collection of settings for a compute endpoint|
|» » autoscaling_limit_min_cu|body|[ComputeUnit](#schemacomputeunit)|false|The minimum number of Compute Units. The minimum value is `0.25`.<br>See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|» » autoscaling_limit_max_cu|body|[ComputeUnit](#schemacomputeunit)|false|The maximum number of Compute Units.<br>See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|» » provisioner|body|[Provisioner](#schemaprovisioner)|false|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|» » pooler_enabled|body|boolean|false|**Deprecated.** Whether to enable connection pooling for the compute endpoint<br>|
|» » pooler_mode|body|[EndpointPoolerMode](#schemaendpointpoolermode)|false|The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.<br>|
|» » disabled|body|boolean|false|Whether to restrict connections to the compute endpoint.<br>Enabling this option schedules a suspend compute operation.<br>A disabled compute endpoint cannot be enabled by a connection or<br>console action. However, the compute endpoint is periodically<br>enabled by check_availability operations.<br>|
|» » passwordless_access|body|boolean|false|NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.<br>|
|» » suspend_timeout_seconds|body|[SuspendTimeoutSeconds](#schemasuspendtimeoutseconds)|false|Duration of inactivity in seconds after which the compute endpoint is<br>automatically suspended. The value `0` means use the default value.<br>The value `-1` means never suspend. The default value is `300` seconds (5 minutes).<br>The minimum value is `60` seconds (1 minute).<br>The maximum value is `604800` seconds (1 week). For more information, see<br>[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|read_only|
|» » type|read_write|
|» » pooler_mode|transaction|

> Example responses

> 201 Response

```json
{
  "endpoint": {
    "host": "ep-shrill-thunder-454069.us-east-2.aws.neon.tech",
    "id": "ep-shrill-thunder-454069",
    "project_id": "bitter-meadow-966132",
    "branch_id": "br-proud-paper-090813",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "init",
    "pending_state": "active",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:37:07Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "suspend_timeout_seconds": 10800,
    "provisioner": "k8s-pod"
  },
  "operations": [
    {
      "id": "874f8bfe-f51d-4c61-85af-a29bea73e0e2",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "start_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:37:07Z",
      "updated_at": "2022-12-03T15:37:07Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created a compute endpoint|[EndpointOperations](#schemaendpointoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a compute endpoint

<a id="opIdgetProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /projects/{project_id}/endpoints/{endpoint_id}`

Retrieves information about the specified compute endpoint.
A compute endpoint is a Neon compute instance.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's compute endpoints.
An `endpoint_id` has an `ep-` prefix.
For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


<h3 id="get-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|endpoint_id|path|string|true|The endpoint ID|

> Example responses

> 200 Response

```json
{
  "endpoint": {
    "host": "ep-little-smoke-851426.us-east-2.aws.neon.tech",
    "id": "ep-little-smoke-851426",
    "project_id": "shiny-wind-028834",
    "branch_id": "br-aged-salad-637688",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "idle",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "last_active": "2022-11-23T17:00:00Z",
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-30T18:25:21Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "provisioner": "k8s-pod",
    "suspend_timeout_seconds": 10800
  }
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the specified endpoint|[EndpointResponse](#schemaendpointresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a compute endpoint

<a id="opIddeleteProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /projects/{project_id}/endpoints/{endpoint_id}`

Delete the specified compute endpoint.
A compute endpoint is a Neon compute instance.
Deleting a compute endpoint drops existing network connections to the compute endpoint.
The deletion is completed when last operation in the chain finishes successfully.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's compute endpoints.
An `endpoint_id` has an `ep-` prefix.
For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


<h3 id="delete-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|endpoint_id|path|string|true|The endpoint ID|

> Example responses

> 200 Response

```json
{
  "endpoint": {
    "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
    "id": "ep-steep-bush-777093",
    "project_id": "shiny-wind-028834",
    "branch_id": "br-raspy-hill-832856",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "idle",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "last_active": "2022-12-03T15:00:00Z",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:49:10Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "provisioner": "k8s-pod",
    "suspend_timeout_seconds": 10800
  },
  "operations": [
    {
      "id": "fd11748e-3c68-458f-b9e3-66d409e3eef0",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "suspend_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified compute endpoint|[EndpointOperations](#schemaendpointoperations)|
|204|No Content|Returned if the endpoint doesn't exist or has already been deleted|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Update a compute endpoint

<a id="opIdupdateProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpoint": {
      "suspend_timeout_seconds": 300
    }
  }'
```

`PATCH /projects/{project_id}/endpoints/{endpoint_id}`

Updates the specified compute endpoint.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` and `branch_id` by listing your project's compute endpoints.
An `endpoint_id` has an `ep-` prefix. A `branch_id` has a `br-` prefix.
 For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).

If the returned list of operations is not empty, the compute endpoint is not ready to use.
The client must wait for the last operation to finish before using the compute endpoint.
If the compute endpoint was idle before the update, it becomes active for a short period of time,
and the control plane suspends it again after the update.


> Body parameter

```json
{
  "endpoint": {
    "suspend_timeout_seconds": 300
  }
}
```

<h3 id="update-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|endpoint_id|path|string|true|The endpoint ID|
|body|body|[EndpointUpdateRequest](#schemaendpointupdaterequest)|true|none|
|» endpoint|body|object|true|none|
|» » branch_id|body|string|false|**Deprecated.** DEPRECATED: This field will be removed in a future release.<br>The destination branch ID. The destination branch must not have an exsiting read-write endpoint.<br>|
|» » autoscaling_limit_min_cu|body|[ComputeUnit](#schemacomputeunit)|false|The minimum number of Compute Units. The minimum value is `0.25`.<br>See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|» » autoscaling_limit_max_cu|body|[ComputeUnit](#schemacomputeunit)|false|The maximum number of Compute Units.<br>See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|» » provisioner|body|[Provisioner](#schemaprovisioner)|false|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|» » settings|body|[EndpointSettingsData](#schemaendpointsettingsdata)|false|A collection of settings for a compute endpoint|
|» » pooler_enabled|body|boolean|false|**Deprecated.** Whether to enable connection pooling for the compute endpoint<br>|
|» » pooler_mode|body|[EndpointPoolerMode](#schemaendpointpoolermode)|false|The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.<br>|
|» » disabled|body|boolean|false|Whether to restrict connections to the compute endpoint.<br>Enabling this option schedules a suspend compute operation.<br>A disabled compute endpoint cannot be enabled by a connection or<br>console action. However, the compute endpoint is periodically<br>enabled by check_availability operations.<br>|
|» » passwordless_access|body|boolean|false|NOT YET IMPLEMENTED. Whether to permit passwordless access to the compute endpoint.<br>|
|» » suspend_timeout_seconds|body|[SuspendTimeoutSeconds](#schemasuspendtimeoutseconds)|false|Duration of inactivity in seconds after which the compute endpoint is<br>automatically suspended. The value `0` means use the default value.<br>The value `-1` means never suspend. The default value is `300` seconds (5 minutes).<br>The minimum value is `60` seconds (1 minute).<br>The maximum value is `604800` seconds (1 week). For more information, see<br>[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » pooler_mode|transaction|

> Example responses

> 200 Response

```json
{
  "endpoint": {
    "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
    "id": "ep-steep-bush-777093",
    "project_id": "shiny-wind-028834",
    "branch_id": "br-raspy-hill-832856",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "idle",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "last_active": "2022-12-03T15:00:00Z",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:49:10Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "provisioner": "k8s-pod",
    "suspend_timeout_seconds": 10800
  },
  "operations": [
    {
      "id": "3fc98ab8-f191-47b8-a427-5eb668ccc5b9",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "apply_config",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    },
    {
      "id": "9ffda74b-a582-4cff-b0f0-aaa8d14b8e6a",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "suspend_compute",
      "status": "scheduling",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated the specified compute endpoint|[EndpointOperations](#schemaendpointoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Start a compute endpoint

<a id="opIdstartProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{project_id}/endpoints/{endpoint_id}/start`

Starts a compute endpoint. The compute endpoint is ready to use
after the last operation in chain finishes successfully.

You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's compute endpoints.
An `endpoint_id` has an `ep-` prefix.
For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


<h3 id="start-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|endpoint_id|path|string|true|The endpoint ID|

> Example responses

> 200 Response

```json
{
  "endpoint": {
    "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
    "id": "ep-steep-bush-777093",
    "project_id": "shiny-wind-028834",
    "branch_id": "br-raspy-hill-832856",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "idle",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "last_active": "2022-12-03T15:00:00Z",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:49:10Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "provisioner": "k8s-pod",
    "suspend_timeout_seconds": 10800
  },
  "operations": [
    {
      "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "start_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="start-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Started the specified compute endpoint|[EndpointOperations](#schemaendpointoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Suspend a compute endpoint

<a id="opIdsuspendProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints/string/suspend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{project_id}/endpoints/{endpoint_id}/suspend`

Suspend the specified compute endpoint
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's compute endpoints.
An `endpoint_id` has an `ep-` prefix.
For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


<h3 id="suspend-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|endpoint_id|path|string|true|The endpoint ID|

> Example responses

> 200 Response

```json
{
  "endpoint": {
    "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
    "id": "ep-steep-bush-777093",
    "project_id": "shiny-wind-028834",
    "branch_id": "br-raspy-hill-832856",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "idle",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "last_active": "2022-12-03T15:00:00Z",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:49:10Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "provisioner": "k8s-pod",
    "suspend_timeout_seconds": 10800
  },
  "operations": [
    {
      "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "suspend_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="suspend-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Suspended the specified endpoint|[EndpointOperations](#schemaendpointoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Restart a compute endpoint

<a id="opIdrestartProjectEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/projects/string/endpoints/string/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /projects/{project_id}/endpoints/{endpoint_id}/restart`

Restart the specified compute endpoint: suspend immediately followed by start operations.
You can obtain a `project_id` by listing the projects for your Neon account.
You can obtain an `endpoint_id` by listing your project's compute endpoints.
An `endpoint_id` has an `ep-` prefix.
For information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).


<h3 id="restart-a-compute-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string|true|The Neon project ID|
|endpoint_id|path|string|true|The endpoint ID|

> Example responses

> 200 Response

```json
{
  "endpoint": {
    "host": "ep-steep-bush-777093.us-east-2.aws.neon.tech",
    "id": "ep-steep-bush-777093",
    "project_id": "shiny-wind-028834",
    "branch_id": "br-raspy-hill-832856",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "idle",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "last_active": "2022-12-03T15:00:00Z",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:49:10Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "creation_source": "console",
    "provisioner": "k8s-pod",
    "suspend_timeout_seconds": 10800
  },
  "operations": [
    {
      "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "suspend_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    },
    {
      "id": "e061087e-3c99-4856-b9c8-6b7751a253af",
      "project_id": "bitter-meadow-966132",
      "branch_id": "br-proud-paper-090813",
      "endpoint_id": "ep-shrill-thunder-454069",
      "action": "start_compute",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-12-03T15:51:06Z",
      "updated_at": "2022-12-03T15:51:06Z",
      "total_duration_ms": 100
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="restart-a-compute-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Restarted endpoint|[EndpointOperations](#schemaendpointoperations)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-region">Region</h1>

These methods allow you to inspect Neon regions.

## Get current active regions

<a id="opIdgetActiveRegions"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/regions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /regions`

Retrieves the list of supported Neon regions


> Example responses

> 200 Response

```json
{
  "regions": [
    {
      "region_id": "string",
      "name": "string",
      "default": true,
      "geo_lat": "string",
      "geo_long": "string"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-current-active-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of active regions|[ActiveRegionsResponse](#schemaactiveregionsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-users">Users</h1>

These methods allow you to manage your Neon user account.

## Get current user details

<a id="opIdgetCurrentUserInfo"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me`

Retrieves information about the current Neon user account.


> Example responses

> 200 Response

```json
{
  "active_seconds_limit": 0,
  "billing_account": {
    "state": "UNKNOWN",
    "payment_source": {
      "type": "string",
      "card": {
        "last4": "string",
        "brand": "amex",
        "exp_month": 0,
        "exp_year": 0
      }
    },
    "subscription_type": "UNKNOWN",
    "payment_method": "UNKNOWN",
    "quota_reset_at_last": "1970-01-01T00:00:00Z",
    "name": "string",
    "email": "string",
    "address_city": "string",
    "address_country": "string",
    "address_country_name": "string",
    "address_line1": "string",
    "address_line2": "string",
    "address_postal_code": "string",
    "address_state": "string",
    "orb_portal_url": "string",
    "tax_id": "string",
    "tax_id_type": "string"
  },
  "auth_accounts": [
    {
      "email": "string",
      "image": "string",
      "login": "string",
      "name": "string",
      "provider": "github"
    }
  ],
  "email": "string",
  "id": "string",
  "image": "string",
  "login": "string",
  "name": "string",
  "last_name": "string",
  "projects_limit": 0,
  "branches_limit": 0,
  "max_autoscaling_limit": 0.25,
  "compute_seconds_limit": 0,
  "plan": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-current-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the current user<br>|[CurrentUserInfoResponse](#schemacurrentuserinforesponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get current user organizations list

<a id="opIdgetCurrentUserOrganizations"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/users/me/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/organizations`

Retrieves information about the current Neon user's organizations


> Example responses

> 200 Response

```json
{
  "organizations": [
    {
      "id": "string",
      "name": "string",
      "handle": "string",
      "plan": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "managed_by": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-current-user-organizations-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the current user organizations<br>|[OrganizationsResponse](#schemaorganizationsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Transfer projects from your personal account to a specified destination account

<a id="opIdtransferProjectsFromUserToOrg"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/users/me/projects/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "org_id": "string",
    "project_ids": [
      "string"
    ]
  }'
```

`POST /users/me/projects/transfer`

Transfers selected projects, identified by their IDs, from your personal account to a specified organization.


> Body parameter

```json
{
  "org_id": "string",
  "project_ids": [
    "string"
  ]
}
```

<h3 id="transfer-projects-from-your-personal-account-to-a-specified-destination-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferProjectsToOrganizationRequest](#schematransferprojectstoorganizationrequest)|true|none|
|» org_id|body|string|true|none|
|» project_ids|body|[string]|true|The list of projects ids to transfer. Maximum of 400 project ids|

> Example responses

> 200 Response

```json
{}
```

> 406 Response

```json
{
  "limits": [
    {
      "name": "projects_count",
      "actual": "2",
      "expected": "1"
    },
    {
      "name": "subscription_type",
      "actual": "launch",
      "expected": "scale"
    }
  ]
}
```

> 422 Response

```json
{
  "projects": [
    {
      "id": "round-frog-53611540",
      "integration": "github"
    },
    {
      "id": "long-leaf-72329067",
      "integration": "vercel"
    },
    {
      "id": "shrill-bush-06966719",
      "integration": "outerbase"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="transfer-projects-from-your-personal-account-to-a-specified-destination-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Projects successfully transferred from personal account to organization|[EmptyResponse](#schemaemptyresponse)|
|406|Not Acceptable|Transfer failed - the organization has too many projects or its plan is incompatible with the source account. Reduce projects or upgrade the organization.|Inline|
|422|Unprocessable Entity|One or more of project ids provided is linked by GitHub or Vercel integration. Transferring integration projects is currently not supported|[ProjectsWithIntegrationResponse](#schemaprojectswithintegrationresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="transfer-projects-from-your-personal-account-to-a-specified-destination-account-responseschema">Response Schema</h3>

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[LimitsUnsatisfiedResponse](#schemalimitsunsatisfiedresponse)|false|none|none|
|*oneOf*|[GeneralError](#schemageneralerror)|false|none|General Error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-consumption">Consumption</h1>

These methods allow you to view consumption details for your Neon account.

## Get account consumption metrics

<a id="opIdgetConsumptionHistoryPerAccount"></a>

> Code samples

```bash
curl 'https://console.neon.tech/api/v2/consumption_history/account?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z&granularity=hourly' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumption_history/account`

Retrieves consumption metrics for Scale and Business plan accounts. History begins at the time of upgrade.
Available for Scale and Business plan users only.


<h3 id="get-account-consumption-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string(date-time)|true|Specify the start `date-time` for the consumption period.<br>The `date-time` value is rounded according to the specified `granularity`.<br>For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.<br>The specified `date-time` value must respect the specified granularity:<br>- For `hourly`, consumption metrics are limited to the last 168 hours.<br>- For `daily`, consumption metrics are limited to the last 60 days.<br>- For `monthly`, consumption metrics are limited to the past year.<br><br>The consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.<br>|
|to|query|string(date-time)|true|Specify the end `date-time` for the consumption period.<br>The `date-time` value is rounded according to the specified granularity.<br>For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.<br>The specified `date-time` value must respect the specified granularity:<br>- For `hourly`, consumption metrics are limited to the last 168 hours.<br>- For `daily`, consumption metrics are limited to the last 60 days.<br>- For `monthly`, consumption metrics are limited to the past year.<br>|
|granularity|query|[ConsumptionHistoryGranularity](#schemaconsumptionhistorygranularity)|true|Specify the granularity of consumption metrics.<br>Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days,<br>and 1 year, respectively.<br>|
|org_id|query|string|false|Specify the organization for which the consumption metrics should be returned.<br>If this parameter is not provided, the endpoint will return the metrics for the<br>authenticated user's account.<br>|
|include_v1_metrics|query|boolean|false|Include metrics utilized in previous pricing models.<br>- **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour<br>  for each project, which never decreases.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|granularity|hourly|
|granularity|daily|
|granularity|monthly|

> Example responses

> 200 Response

```json
{
  "periods": [
    {
      "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
      "period_plan": "scale",
      "period_start": "2024-03-01T00:00:00Z",
      "consumption": [
        {
          "timeframe_start": "2024-03-22T00:00:00Z",
          "timeframe_end": "2024-03-23T00:00:00Z",
          "active_time_seconds": 27853,
          "compute_time_seconds": 18346,
          "written_data_bytes": 1073741824,
          "synthetic_storage_size_bytes": 5368709120
        },
        {
          "timeframe_start": "2024-03-23T00:00:00Z",
          "timeframe_end": "2024-03-24T00:00:00Z",
          "active_time_seconds": 17498,
          "compute_time_seconds": 3378,
          "written_data_bytes": 5741824,
          "synthetic_storage_size_bytes": 2370912
        }
      ]
    }
  ]
}
```

> 403 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-account-consumption-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned consumption metrics for the Neon account|[ConsumptionHistoryPerAccountResponse](#schemaconsumptionhistoryperaccountresponse)|
|403|Forbidden|This endpoint is not available. It is only supported for Scale and Business plan accounts.|[GeneralError](#schemageneralerror)|
|404|Not Found|Account is not a member of the organization specified by `org_id`.|[GeneralError](#schemageneralerror)|
|406|Not Acceptable|The specified `date-time` range is outside the boundaries of the specified `granularity`.<br>Adjust your `from` and `to` values or select a different `granularity`.<br>|[GeneralError](#schemageneralerror)|
|429|Too Many Requests|Too many requests|[GeneralError](#schemageneralerror)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get consumption metrics for each project

<a id="opIdgetConsumptionHistoryPerProject"></a>

> Code samples

```bash
curl 'https://console.neon.tech/api/v2/consumption_history/projects?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z&granularity=hourly' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /consumption_history/projects`

Retrieves consumption metrics for Scale and Business plan projects. History begins at the time of upgrade.
Available for Scale and Business plan users only.
Issuing a call to this API does not wake a project's compute endpoint.


<h3 id="get-consumption-metrics-for-each-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|Specify the cursor value from the previous response to get the next batch of projects.|
|limit|query|integer|false|Specify a value from 1 to 100 to limit number of projects in the response.|
|project_ids|query|[string]|false|Specify a list of project IDs to filter the response.<br>If omitted, the response will contain all projects.<br>A list of project IDs can be specified as an array of parameter values or as a comma-separated list in a single parameter value.<br>- As an array of parameter values: `project_ids=cold-poetry-09157238%20&project_ids=quiet-snow-71788278`<br>- As a comma-separated list in a single parameter value: `project_ids=cold-poetry-09157238,quiet-snow-71788278`<br>|
|from|query|string(date-time)|true|Specify the start `date-time` for the consumption period.<br>The `date-time` value is rounded according to the specified `granularity`.<br>For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.<br>The specified `date-time` value must respect the specified `granularity`:<br>- For `hourly`, consumption metrics are limited to the last 168 hours.<br>- For `daily`, consumption metrics are limited to the last 60 days.<br>- For `monthly`, consumption metrics are limited to the last year.<br><br>The consumption history is available starting from `March 1, 2024, at 00:00:00 UTC`.<br>|
|to|query|string(date-time)|true|Specify the end `date-time` for the consumption period.<br>The `date-time` value is rounded according to the specified granularity.<br>For example, `2024-03-15T15:30:00Z` for `daily` granularity will be rounded to `2024-03-15T00:00:00Z`.<br>The specified `date-time` value must respect the specified `granularity`:<br>- For `hourly`, consumption metrics are limited to the last 168 hours.<br>- For `daily`, consumption metrics are limited to the last 60 days.<br>- For `monthly`, consumption metrics are limited to the last year.<br>|
|granularity|query|[ConsumptionHistoryGranularity](#schemaconsumptionhistorygranularity)|true|Specify the granularity of consumption metrics.<br>Hourly, daily, and monthly metrics are available for the last 168 hours, 60 days,<br>and 1 year, respectively.<br>|
|org_id|query|string|false|Specify the organization for which the project consumption metrics should be returned.<br>If this parameter is not provided, the endpoint will return the metrics for the<br>authenticated user's projects.<br>|
|include_v1_metrics|query|boolean|false|Include metrics utilized in previous pricing models.<br>- **data_storage_bytes_hour**: The sum of the maximum observed storage values for each hour,<br>  which never decreases.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|granularity|hourly|
|granularity|daily|
|granularity|monthly|

> Example responses

> 200 Response

```json
{
  "projects": [
    {
      "project_id": "string",
      "periods": [
        {
          "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
          "period_plan": "scale",
          "period_start": "2024-03-01T00:00:00Z",
          "consumption": [
            {
              "timeframe_start": "2024-03-22T00:00:00Z",
              "timeframe_end": "2024-03-23T00:00:00Z",
              "active_time_seconds": 27853,
              "compute_time_seconds": 18346,
              "written_data_bytes": 1073741824,
              "synthetic_storage_size_bytes": 5368709120
            },
            {
              "timeframe_start": "2024-03-23T00:00:00Z",
              "timeframe_end": "2024-03-24T00:00:00Z",
              "active_time_seconds": 17498,
              "compute_time_seconds": 3378,
              "written_data_bytes": 5741824,
              "synthetic_storage_size_bytes": 2370912
            }
          ]
        }
      ]
    }
  ],
  "pagination": {
    "cursor": "2022-12-07T00:45:05.262011Z"
  }
}
```

> 403 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 406 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> 429 Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-consumption-metrics-for-each-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned project consumption metrics for the Neon account|Inline|
|403|Forbidden|This endpoint is not available. It is only supported with Scale and Business plan accounts.|[GeneralError](#schemageneralerror)|
|404|Not Found|Account is not a member of the organization specified by `org_id`.|[GeneralError](#schemageneralerror)|
|406|Not Acceptable|The specified `date-time` range is outside the boundaries of the specified `granularity`.<br>Adjust your `from` and `to` values or select a different `granularity`.<br>|[GeneralError](#schemageneralerror)|
|429|Too Many Requests|Too many requests|[GeneralError](#schemageneralerror)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-consumption-metrics-for-each-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[ConsumptionHistoryPerProject](#schemaconsumptionhistoryperproject)]|true|none|none|
|pagination|[Pagination](#schemapagination)|false|none|Cursor based pagination is used. The user must pass the cursor as is to the backend.<br>For more information about cursor based pagination, see<br>https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

<h1 id="neon-api-organizations">Organizations</h1>

These methods allow you to manage your Neon organizations.

## Get organization details

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}`

Retrieves information about the specified organization.


<h3 id="get-organization-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|

> Example responses

> 200 Response

```json
{
  "id": "my-organization-morning-bread-81040908",
  "name": "my-organization",
  "handle": "my-organization-my-organization-morning-bread-81040908",
  "plan": "scale",
  "managed_by": "console",
  "created_at": "2024-02-23T17:42:25Z",
  "updated_at": "2024-02-26T20:41:25Z"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-organization-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the organization|[Organization](#schemaorganization)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get a list of organization API keys

<a id="opIdlistOrgApiKeys"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/api_keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}/api_keys`

Retrieves the API keys for the specified organization.
The response does not include API key tokens. A token is only provided when creating an API key.
API keys can also be managed in the Neon Console.
For more information, see [Manage API keys](https://neon.tech/docs/manage/api-keys/).


<h3 id="get-a-list-of-organization-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|

> Example responses

> 200 Response

```json
[
  {
    "id": 165432,
    "name": "orgkey_1",
    "created_at": "2022-11-15T20:13:35Z",
    "created_by": {
      "id": "629982cc-de05-43db-ae16-28f2399c4910",
      "name": "John Smith",
      "image": "http://link.to.image"
    },
    "last_used_at": "2022-11-15T20:22:51Z",
    "last_used_from_addr": "192.0.2.255"
  },
  {
    "id": 165433,
    "name": "orgkey_2",
    "created_at": "2022-11-15T20:12:36Z",
    "created_by": {
      "id": "629982cc-de05-43db-ae16-28f2399c4910",
      "name": "John Smith",
      "image": "http://link.to.image"
    },
    "last_used_at": "2022-11-15T20:15:04Z",
    "last_used_from_addr": "192.0.2.255"
  }
]
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-list-of-organization-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned the API keys for the specified organization|Inline|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<h3 id="get-a-list-of-organization-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrgApiKeysListResponseItem](#schemaorgapikeyslistresponseitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create an organization API key

<a id="opIdcreateOrgApiKey"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/api_keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key_name": "orgkey"
  }'
```

`POST /organizations/{org_id}/api_keys`

Creates an API key for the specified organization.
The `key_name` is a user-specified name for the key.
This method returns an `id` and `key`. The `key` is a randomly generated, 64-bit token required to access the Neon API.
API keys can also be managed in the Neon Console.
See [Manage API keys](https://neon.tech/docs/manage/api-keys/).


> Body parameter

```json
{
  "key_name": "orgkey"
}
```

<h3 id="create-an-organization-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|body|body|[OrgApiKeyCreateRequest](#schemaorgapikeycreaterequest)|true|none|
|» key_name|body|string|true|A user-specified API key name. This value is required when creating an API key.|
|» project_id|body|string|false|If set, the API key can access only this project|

> Example responses

> 200 Response

```json
{
  "id": 165434,
  "key": "9v1faketcjbl4sn1013keyd43n2a8qlfakeog8yvp40hx16keyjo1bpds4y2dfms3",
  "name": "orgkey",
  "created_at": "2022-11-15T20:13:35Z",
  "created_by": "629982cc-de05-43db-ae16-28f2399c4910"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-an-organization-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created an organization API key|[OrgApiKeyCreateResponse](#schemaorgapikeycreateresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Revoke an organization API key

<a id="opIdrevokeOrgApiKey"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/api_keys/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{org_id}/api_keys/{key_id}`

Revokes the specified organization API key.
An API key that is no longer needed can be revoked.
This action cannot be reversed.
You can obtain `key_id` values by listing the API keys for an organization.
API keys can also be managed in the Neon Console.
See [Manage API keys](https://neon.tech/docs/manage/api-keys/).


<h3 id="revoke-an-organization-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|integer(int64)|true|The API key ID|
|org_id|path|string|true|The Neon organization ID|

> Example responses

> 200 Response

```json
{
  "id": 165435,
  "name": "orgkey",
  "created_at": "2022-11-15T20:13:35Z",
  "created_by": "629982cc-de05-43db-ae16-28f2399c4910",
  "last_used_at": "2022-11-15T20:15:04Z",
  "last_used_from_addr": "192.0.2.255",
  "revoked": true
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="revoke-an-organization-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Revoked the specified organization API key|[OrgApiKeyRevokeResponse](#schemaorgapikeyrevokeresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get organization members details

<a id="opIdgetOrganizationMembers"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}/members`

Retrieves information about the specified organization members.


<h3 id="get-organization-members-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|

> Example responses

> 200 Response

```json
{
  "members": [
    {
      "member": {
        "id": "d57833f2-d308-4ede-9d2e-468d9d013d1b",
        "user_id": "b107d689-6dd2-4c9a-8b9e-0b25e457cf56",
        "org_id": "my-organization-morning-bread-81040908",
        "role": "admin",
        "joined_at": "2024-02-23T17:42:25Z"
      },
      "user": {
        "email": "user1@email.com"
      }
    },
    {
      "member": {
        "id": "5fee13ac-957b-40cd-8de0-4d494cc28e28",
        "user_id": "6df052ac-ca9a-4321-8963-b6507b2d7dee",
        "org_id": "my-organization-morning-bread-81040908",
        "role": "member",
        "joined_at": "2024-02-21T16:42:25Z"
      },
      "user": {
        "email": "user2@email.com"
      }
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-organization-members-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about organization members|[OrganizationMembersResponse](#schemaorganizationmembersresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get organization member details

<a id="opIdgetOrganizationMember"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/members/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}/members/{member_id}`

Retrieves information about the specified organization member.


<h3 id="get-organization-member-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|member_id|path|string(uuid)|true|The Neon organization member ID|

> Example responses

> 200 Response

```json
{
  "id": "d57833f2-d308-4ede-9d2e-468d9d013d1b",
  "user_id": "b107d689-6dd2-4c9a-8b9e-0b25e457cf56",
  "org_id": "my-organization-morning-bread-81040908",
  "role": "admin",
  "joined_at": "2024-02-23T17:42:25Z"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-organization-member-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the organization member|[Member](#schemamember)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Remove member from the organization

<a id="opIdremoveOrganizationMember"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/members/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{org_id}/members/{member_id}`

Remove member from the organization.
Only an admin of the organization can perform this action.
If another admin is being removed, it will not be allows in case it is the only admin left in the organization.


<h3 id="remove-member-from-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|member_id|path|string(uuid)|true|The Neon organization member ID|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="remove-member-from-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Removed organization member|[EmptyResponse](#schemaemptyresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Update the role for an organization member

<a id="opIdupdateOrganizationMember"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/members/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "admin"
  }'
```

`PATCH /organizations/{org_id}/members/{member_id}`

Only an admin can perform this action.


> Body parameter

```json
{
  "role": "admin"
}
```

<h3 id="update-the-role-for-an-organization-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|member_id|path|string(uuid)|true|The Neon organization member ID|
|body|body|[OrganizationMemberUpdateRequest](#schemaorganizationmemberupdaterequest)|true|none|
|» role|body|[MemberRole](#schemamemberrole)|true|The role of the organization member|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|admin|
|» role|member|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_id": "string",
  "role": "admin",
  "joined_at": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="update-the-role-for-an-organization-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated organization member|[Member](#schemamember)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get organization invitation details

<a id="opIdgetOrganizationInvitations"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}/invitations`

Retrieves information about extended invitations for the specified organization


<h3 id="get-organization-invitation-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|

> Example responses

> 200 Response

```json
{
  "invitations": [
    {
      "id": "db8faf32-b07f-4b0f-94c8-5c288909f5d3",
      "email": "invited1@email.com",
      "org_id": "my-organization-morning-bread-81040908",
      "invited_by": "some@email.com",
      "role": "admin",
      "invited_at": "2024-02-23T17:42:25Z"
    },
    {
      "id": "c52f0d22-ebd9-4708-ae44-2872cae49a83",
      "email": "invited2@email.com",
      "org_id": "my-organization-morning-bread-81040908",
      "invited_by": "some@email.com",
      "role": "member",
      "invited_at": "2024-02-23T12:42:25Z"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-organization-invitation-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returned information about the organization invitations|[OrganizationInvitationsResponse](#schemaorganizationinvitationsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Create organization invitations

<a id="opIdcreateOrganizationInvitations"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "invitations": [
      {
        "email": "invited-user@email.com",
        "role": "member"
      }
    ]
  }'
```

`POST /organizations/{org_id}/invitations`

Creates invitations for a specific organization.
If the invited user has an existing account, they automatically join as a member.
If they don't yet have an account, they are invited to create one, after which they become a member.
Each invited user receives an email notification.


> Body parameter

```json
{
  "invitations": [
    {
      "email": "invited-user@email.com",
      "role": "member"
    }
  ]
}
```

<h3 id="create-organization-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|body|body|[OrganizationInvitesCreateRequest](#schemaorganizationinvitescreaterequest)|true|none|
|» invitations|body|[[OrganizationInviteCreateRequest](#schemaorganizationinvitecreaterequest)]|true|none|

> Example responses

> 200 Response

```json
{
  "invitations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "user@example.com",
      "org_id": "string",
      "invited_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "invited_at": "1970-01-01T00:00:00Z",
      "role": "admin"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="create-organization-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The created organization invitation|[OrganizationInvitationsResponse](#schemaorganizationinvitationsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Get the list of VPC endpoints

<a id="opIdlistOrganizationVPCEndpoints"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/vpc/region/string/vpc_endpoints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints`

Retrieves the list of VPC endpoints for the specified organization.
This endpoint is under active development and its semantics may change in the future.


<h3 id="get-the-list-of-vpc-endpoints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|region_id|path|string|true|The Neon region ID|

> Example responses

> 200 Response

```json
{
  "endpoints": [
    {
      "vpc_endpoint_id": "string",
      "label": "string"
    }
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="get-the-list-of-vpc-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of configured VPC endpoint IDs for the specified organization|[VPCEndpointsResponse](#schemavpcendpointsresponse)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Retrieve the state of a VPC endpoint configuration

<a id="opIdgetOrganizationVPCEndpointDetails"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/vpc/region/string/vpc_endpoints/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}`

Retrieves detailed information about the VPC endpoint.
This endpoint is under active development and its semantics may change in the future.


<h3 id="retrieve-the-state-of-a-vpc-endpoint-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|region_id|path|string|true|The Neon region ID.<br>Note that Azure regions are not yet supported.<br>|
|vpc_endpoint_id|path|string|true|The VPC endpoint ID|

> Example responses

> 200 Response

```json
{
  "vpc_endpoint_id": "string",
  "label": "string",
  "state": "string",
  "num_restricted_projects": 0,
  "example_restricted_projects": [
    "string"
  ]
}
```

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="retrieve-the-state-of-a-vpc-endpoint-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The detailed state of the VPC endpoint|[VPCEndpointDetails](#schemavpcendpointdetails)|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Assign or update a VPC endpoint

<a id="opIdassignOrganizationVPCEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/vpc/region/string/vpc_endpoints/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "label": "string"
  }'
```

`POST /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}`

Assigns the specified VPC endpoint to the specified organization
or updates the existing assignment.
This endpoint is under active development and its semantics may change in the future.


> Body parameter

```json
{
  "label": "string"
}
```

<h3 id="assign-or-update-a-vpc-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|region_id|path|string|true|The Neon region ID.<br>Note that Azure regions are not yet supported.<br>|
|vpc_endpoint_id|path|string|true|The VPC endpoint ID|
|body|body|[VPCEndpointAssignment](#schemavpcendpointassignment)|true|none|
|» label|body|string|true|none|

> Example responses

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="assign-or-update-a-vpc-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Assigned the specified VPC endpoint to the specified organization|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

## Delete a VPC endpoint

<a id="opIddeleteOrganizationVPCEndpoint"></a>

> Code samples

```bash
curl https://console.neon.tech/api/v2/organizations/string/vpc/region/string/vpc_endpoints/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{org_id}/vpc/region/{region_id}/vpc_endpoints/{vpc_endpoint_id}`

Deletes the specified VPC endpoint from the specified organization.
This endpoint is under active development and its semantics may change in the future.


<h3 id="delete-a-vpc-endpoint-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|path|string|true|The Neon organization ID|
|region_id|path|string|true|The Neon region ID.<br>Note that Azure regions are not yet supported.<br>|
|vpc_endpoint_id|path|string|true|The VPC endpoint ID|

> Example responses

> default Response

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-vpc-endpoint-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted the specified VPC endpoint from the specified organization|None|
|default|Default|General Error|[GeneralError](#schemageneralerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerAuth, CookieAuth, TokenCookieAuth
</aside>

# Schemas

<h2 id="tocS_Features">Features</h2>
<!-- backwards compatibility -->
<a id="schemafeatures"></a>
<a id="schema_Features"></a>
<a id="tocSfeatures"></a>
<a id="tocsfeatures"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|boolean|false|none|none|

<h2 id="tocS_FeatureFlags">FeatureFlags</h2>
<!-- backwards compatibility -->
<a id="schemafeatureflags"></a>
<a id="schema_FeatureFlags"></a>
<a id="tocSfeatureflags"></a>
<a id="tocsfeatureflags"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|boolean \| string|false|none|none|

<h2 id="tocS_ComputeUnit">ComputeUnit</h2>
<!-- backwards compatibility -->
<a id="schemacomputeunit"></a>
<a id="schema_ComputeUnit"></a>
<a id="tocScomputeunit"></a>
<a id="tocscomputeunit"></a>

```json
0.25
```

<h2 id="tocS_Provisioner">Provisioner</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioner"></a>
<a id="schema_Provisioner"></a>
<a id="tocSprovisioner"></a>
<a id="tocsprovisioner"></a>

```json
"string"
```

The Neon compute provisioner.
Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.

Provisioner can be one of the following values:
* k8s-pod
* k8s-neonvm

Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.

<h2 id="tocS_PaginationResponse">PaginationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaginationresponse"></a>
<a id="schema_PaginationResponse"></a>
<a id="tocSpaginationresponse"></a>
<a id="tocspaginationresponse"></a>

```json
{
  "pagination": {
    "cursor": "2022-12-07T00:45:05.262011Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|Cursor based pagination is used. The user must pass the cursor as is to the backend.<br>For more information about cursor based pagination, see<br>https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination<br>|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "cursor": "2022-12-07T00:45:05.262011Z"
}
```

Cursor based pagination is used. The user must pass the cursor as is to the backend.
For more information about cursor based pagination, see
https://learn.microsoft.com/en-us/ef/core/querying/pagination#keyset-pagination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursor|string|true|none|none|

<h2 id="tocS_EmptyResponse">EmptyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemptyresponse"></a>
<a id="schema_EmptyResponse"></a>
<a id="tocSemptyresponse"></a>
<a id="tocsemptyresponse"></a>

```json
{}
```

Empty response.

<h2 id="tocS_AddProjectJWKSRequest">AddProjectJWKSRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddprojectjwksrequest"></a>
<a id="schema_AddProjectJWKSRequest"></a>
<a id="tocSaddprojectjwksrequest"></a>
<a id="tocsaddprojectjwksrequest"></a>

```json
{
  "jwks_url": "string",
  "provider_name": "string",
  "branch_id": "string",
  "jwt_audience": "string",
  "role_names": [
    "string"
  ]
}
```

Add a new JWKS to a specific endpoint of a project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwks_url|string|true|none|The URL that lists the JWKS|
|provider_name|string|true|none|The name of the authentication provider (e.g., Clerk, Stytch, Auth0)|
|branch_id|string|false|none|Branch ID|
|jwt_audience|string|false|none|The name of the required JWT Audience to be used|
|role_names|[string]|true|none|The roles the JWKS should be mapped to|

<h2 id="tocS_JWKS">JWKS</h2>
<!-- backwards compatibility -->
<a id="schemajwks"></a>
<a id="schema_JWKS"></a>
<a id="tocSjwks"></a>
<a id="tocsjwks"></a>

```json
{
  "id": "string",
  "project_id": "string",
  "branch_id": "string",
  "jwks_url": "string",
  "provider_name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z",
  "jwt_audience": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|JWKS ID|
|project_id|string|true|none|Project ID|
|branch_id|string|false|none|Branch ID|
|jwks_url|string|true|none|The URL that lists the JWKS|
|provider_name|string|true|none|The name of the authentication provider (e.g., Clerk, Stytch, Auth0)|
|created_at|string(date-time)|true|none|The date and time when the JWKS was created|
|updated_at|string(date-time)|true|none|The date and time when the JWKS was last modified|
|jwt_audience|string|false|none|The name of the required JWT Audience to be used|

<h2 id="tocS_ProjectJWKSResponse">ProjectJWKSResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectjwksresponse"></a>
<a id="schema_ProjectJWKSResponse"></a>
<a id="tocSprojectjwksresponse"></a>
<a id="tocsprojectjwksresponse"></a>

```json
{
  "jwks": [
    {
      "id": "string",
      "project_id": "string",
      "branch_id": "string",
      "jwks_url": "string",
      "provider_name": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z",
      "jwt_audience": "string"
    }
  ]
}
```

The list of configured JWKS definitions for a project

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwks|[[JWKS](#schemajwks)]|true|none|none|

<h2 id="tocS_ApiKeyCreateRequest">ApiKeyCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycreaterequest"></a>
<a id="schema_ApiKeyCreateRequest"></a>
<a id="tocSapikeycreaterequest"></a>
<a id="tocsapikeycreaterequest"></a>

```json
{
  "key_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key_name|string|true|none|A user-specified API key name. This value is required when creating an API key.|

<h2 id="tocS_OrgApiKeyCreateRequest">OrgApiKeyCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorgapikeycreaterequest"></a>
<a id="schema_OrgApiKeyCreateRequest"></a>
<a id="tocSorgapikeycreaterequest"></a>
<a id="tocsorgapikeycreaterequest"></a>

```json
{
  "key_name": "string",
  "project_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key_name|string|true|none|A user-specified API key name. This value is required when creating an API key.|
|project_id|string|false|none|If set, the API key can access only this project|

<h2 id="tocS_ApiKeyCreateResponse">ApiKeyCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycreateresponse"></a>
<a id="schema_ApiKeyCreateResponse"></a>
<a id="tocSapikeycreateresponse"></a>
<a id="tocsapikeycreateresponse"></a>

```json
{
  "id": 0,
  "key": "string",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The API key ID|
|key|string|true|none|The generated 64-bit token required to access the Neon API|
|name|string|true|none|The user-specified API key name|
|created_at|string(date-time)|true|none|A timestamp indicating when the API key was created|
|created_by|string(uuid)|true|none|ID of the user who created this API key|

<h2 id="tocS_OrgApiKeyCreateResponse">OrgApiKeyCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorgapikeycreateresponse"></a>
<a id="schema_OrgApiKeyCreateResponse"></a>
<a id="tocSorgapikeycreateresponse"></a>
<a id="tocsorgapikeycreateresponse"></a>

```json
{
  "id": 0,
  "key": "string",
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "project_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The API key ID|
|key|string|true|none|The generated 64-bit token required to access the Neon API|
|name|string|true|none|The user-specified API key name|
|created_at|string(date-time)|true|none|A timestamp indicating when the API key was created|
|created_by|string(uuid)|true|none|ID of the user who created this API key|
|project_id|string|false|none|If set, the API key can access only this project|

<h2 id="tocS_ApiKeyRevokeResponse">ApiKeyRevokeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrevokeresponse"></a>
<a id="schema_ApiKeyRevokeResponse"></a>
<a id="tocSapikeyrevokeresponse"></a>
<a id="tocsapikeyrevokeresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_used_at": "1970-01-01T00:00:00Z",
  "last_used_from_addr": "string",
  "revoked": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The API key ID|
|name|string|true|none|The user-specified API key name|
|created_at|string(date-time)|true|none|A timestamp indicating when the API key was created|
|created_by|string(uuid)|true|none|ID of the user who created this API key|
|last_used_at|string(date-time) \| null|false|none|A timestamp indicating when the API was last used|
|last_used_from_addr|string|true|none|The IP address from which the API key was last used|
|revoked|boolean|true|none|A `true` or `false` value indicating whether the API key is revoked|

<h2 id="tocS_OrgApiKeyRevokeResponse">OrgApiKeyRevokeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorgapikeyrevokeresponse"></a>
<a id="schema_OrgApiKeyRevokeResponse"></a>
<a id="tocSorgapikeyrevokeresponse"></a>
<a id="tocsorgapikeyrevokeresponse"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_used_at": "1970-01-01T00:00:00Z",
  "last_used_from_addr": "string",
  "revoked": true,
  "project_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The API key ID|
|name|string|true|none|The user-specified API key name|
|created_at|string(date-time)|true|none|A timestamp indicating when the API key was created|
|created_by|string(uuid)|true|none|ID of the user who created this API key|
|last_used_at|string(date-time) \| null|false|none|A timestamp indicating when the API was last used|
|last_used_from_addr|string|true|none|The IP address from which the API key was last used|
|revoked|boolean|true|none|A `true` or `false` value indicating whether the API key is revoked|
|project_id|string|false|none|If set, the API key can access only this project|

<h2 id="tocS_ApiKeysListResponseItem">ApiKeysListResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyslistresponseitem"></a>
<a id="schema_ApiKeysListResponseItem"></a>
<a id="tocSapikeyslistresponseitem"></a>
<a id="tocsapikeyslistresponseitem"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "image": "string"
  },
  "last_used_at": "1970-01-01T00:00:00Z",
  "last_used_from_addr": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The API key ID|
|name|string|true|none|The user-specified API key name|
|created_at|string(date-time)|true|none|A timestamp indicating when the API key was created|
|created_by|[ApiKeyCreatorData](#schemaapikeycreatordata)|true|none|The user data of the user that created this API key.|
|last_used_at|string(date-time) \| null|false|none|A timestamp indicating when the API was last used|
|last_used_from_addr|string|true|none|The IP address from which the API key was last used|

<h2 id="tocS_OrgApiKeysListResponseItem">OrgApiKeysListResponseItem</h2>
<!-- backwards compatibility -->
<a id="schemaorgapikeyslistresponseitem"></a>
<a id="schema_OrgApiKeysListResponseItem"></a>
<a id="tocSorgapikeyslistresponseitem"></a>
<a id="tocsorgapikeyslistresponseitem"></a>

```json
{
  "id": 0,
  "name": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "created_by": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "image": "string"
  },
  "last_used_at": "1970-01-01T00:00:00Z",
  "last_used_from_addr": "string",
  "project_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The API key ID|
|name|string|true|none|The user-specified API key name|
|created_at|string(date-time)|true|none|A timestamp indicating when the API key was created|
|created_by|[ApiKeyCreatorData](#schemaapikeycreatordata)|true|none|The user data of the user that created this API key.|
|last_used_at|string(date-time) \| null|false|none|A timestamp indicating when the API was last used|
|last_used_from_addr|string|true|none|The IP address from which the API key was last used|
|project_id|string|false|none|If set, the API key can access only this project|

<h2 id="tocS_ApiKeyCreatorData">ApiKeyCreatorData</h2>
<!-- backwards compatibility -->
<a id="schemaapikeycreatordata"></a>
<a id="schema_ApiKeyCreatorData"></a>
<a id="tocSapikeycreatordata"></a>
<a id="tocsapikeycreatordata"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "image": "string"
}
```

The user data of the user that created this API key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|ID of the user who created this API key|
|name|string|true|none|The name of the user.|
|image|string|true|none|The URL to the user's avatar image.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
[
  {
    "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
    "project_id": "spring-example-302709",
    "branch_id": "br-wispy-meadow-118737",
    "endpoint_id": "ep-silent-smoke-806639",
    "action": "create_branch",
    "status": "running",
    "failures_count": 0,
    "created_at": "2022-11-08T23:33:16Z",
    "updated_at": "2022-11-08T23:33:20Z",
    "total_duration_ms": 400
  },
  {
    "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
    "project_id": "spring-example-302709",
    "branch_id": "br-wispy-meadow-118737",
    "endpoint_id": "ep-silent-smoke-806639",
    "action": "start_compute",
    "status": "finished",
    "failures_count": 0,
    "created_at": "2022-11-15T20:02:00Z",
    "updated_at": "2022-11-15T20:02:02Z",
    "total_duration_ms": 200
  }
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|The operation ID|
|project_id|string|true|none|The Neon project ID|
|branch_id|string|false|none|The branch ID|
|endpoint_id|string|false|none|The endpoint ID|
|action|[OperationAction](#schemaoperationaction)|true|none|The action performed by the operation|
|status|[OperationStatus](#schemaoperationstatus)|true|none|The status of the operation|
|error|string|false|none|The error that occured|
|failures_count|integer(int32)|true|none|The number of times the operation failed|
|retry_at|string(date-time)|false|none|A timestamp indicating when the operation was last retried|
|created_at|string(date-time)|true|none|A timestamp indicating when the operation was created|
|updated_at|string(date-time)|true|none|A timestamp indicating when the operation status was last updated|
|total_duration_ms|integer(int32)|true|none|The total duration of the operation in milliseconds|

#### Enumerated Values

|Property|Value|
|---|---|
|action|create_compute|
|action|create_timeline|
|action|start_compute|
|action|suspend_compute|
|action|apply_config|
|action|check_availability|
|action|delete_timeline|
|action|create_branch|
|action|tenant_ignore|
|action|tenant_attach|
|action|tenant_detach|
|action|tenant_reattach|
|action|replace_safekeeper|
|action|disable_maintenance|
|action|apply_storage_config|
|action|prepare_secondary_pageserver|
|action|switch_pageserver|
|action|detach_parent_branch|
|action|timeline_archive|
|action|timeline_unarchive|
|action|start_reserved_compute|
|action|sync_dbs_and_roles_from_compute|
|status|scheduling|
|status|running|
|status|finished|
|status|failed|
|status|error|
|status|cancelling|
|status|cancelled|
|status|skipped|

<h2 id="tocS_OperationResponse">OperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoperationresponse"></a>
<a id="schema_OperationResponse"></a>
<a id="tocSoperationresponse"></a>
<a id="tocsoperationresponse"></a>

```json
{
  "operation": [
    {
      "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
      "project_id": "spring-example-302709",
      "branch_id": "br-wispy-meadow-118737",
      "endpoint_id": "ep-silent-smoke-806639",
      "action": "create_branch",
      "status": "running",
      "failures_count": 0,
      "created_at": "2022-11-08T23:33:16Z",
      "updated_at": "2022-11-08T23:33:20Z",
      "total_duration_ms": 400
    },
    {
      "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
      "project_id": "spring-example-302709",
      "branch_id": "br-wispy-meadow-118737",
      "endpoint_id": "ep-silent-smoke-806639",
      "action": "start_compute",
      "status": "finished",
      "failures_count": 0,
      "created_at": "2022-11-15T20:02:00Z",
      "updated_at": "2022-11-15T20:02:02Z",
      "total_duration_ms": 200
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|[Operation](#schemaoperation)|true|none|none|

<h2 id="tocS_OperationsResponse">OperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoperationsresponse"></a>
<a id="schema_OperationsResponse"></a>
<a id="tocSoperationsresponse"></a>
<a id="tocsoperationsresponse"></a>

```json
{
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_OperationAction">OperationAction</h2>
<!-- backwards compatibility -->
<a id="schemaoperationaction"></a>
<a id="schema_OperationAction"></a>
<a id="tocSoperationaction"></a>
<a id="tocsoperationaction"></a>

```json
"create_compute"
```

The action performed by the operation

<h2 id="tocS_OperationStatus">OperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaoperationstatus"></a>
<a id="schema_OperationStatus"></a>
<a id="tocSoperationstatus"></a>
<a id="tocsoperationstatus"></a>

```json
"scheduling"
```

The status of the operation

<h2 id="tocS_ProjectListItem">ProjectListItem</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlistitem"></a>
<a id="schema_ProjectListItem"></a>
<a id="tocSprojectlistitem"></a>
<a id="tocsprojectlistitem"></a>

```json
{
  "id": "spring-example-302709",
  "platform_id": "aws",
  "region_id": "aws-us-east-2",
  "name": "spring-example-302709",
  "provisioner": "k8s-pod",
  "pg_version": 15,
  "proxy_host": "us-east-2.aws.neon.tech",
  "store_passwords": true,
  "creation_source": "console",
  "created_at": "2022-12-13T01:30:55Z",
  "updated_at": "2022-12-13T01:30:55Z"
}
```

Essential data about the project. Full data is available at the getProject endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The project ID|
|platform_id|string|true|none|The cloud platform identifier. Currently, only AWS is supported, for which the identifier is `aws`.<br>|
|region_id|string|true|none|The region identifier<br>|
|name|string|true|none|The project name<br>|
|provisioner|[Provisioner](#schemaprovisioner)|true|none|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|default_endpoint_settings|[DefaultEndpointSettings](#schemadefaultendpointsettings)|false|none|A collection of settings for a Neon endpoint|
|settings|[ProjectSettingsData](#schemaprojectsettingsdata)|false|none|none|
|pg_version|[PgVersion](#schemapgversion)|true|none|The major Postgres version number. Currently supported versions are `14`, `15`, `16`, and `17`.|
|proxy_host|string|true|none|The proxy host for the project. This value combines the `region_id`, the `platform_id`, and the Neon domain (`neon.tech`).<br>|
|branch_logical_size_limit|integer(int64)|true|none|The logical size limit for a branch. The value is in MiB.<br>|
|branch_logical_size_limit_bytes|integer(int64)|true|none|The logical size limit for a branch. The value is in B.<br>|
|store_passwords|boolean|true|none|Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.<br>|
|active_time|integer(int64)|true|none|Control plane observed endpoints of this project being active this amount of wall-clock time.<br>|
|cpu_used_sec|integer(int64)|true|none|**Deprecated.** DEPRECATED. Use data from the getProject endpoint instead.<br>|
|maintenance_starts_at|string(date-time)|false|none|A timestamp indicating when project maintenance begins. If set, the project is placed into maintenance mode at this time.<br>|
|creation_source|string|true|none|The project creation source<br>|
|created_at|string(date-time)|true|none|A timestamp indicating when the project was created<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the project was last updated<br>|
|synthetic_storage_size|integer(int64)|false|none|The current space occupied by the project in storage, in bytes. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches in a project.<br>|
|quota_reset_at|string(date-time)|false|none|**Deprecated.** DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.<br>A timestamp indicating when the project quota resets<br>|
|owner_id|string|true|none|none|
|compute_last_active_at|string(date-time)|false|none|The most recent time when any endpoint of this project was active.<br><br>Omitted when observed no actitivy for endpoints of this project.<br>|
|org_id|string|false|none|Organization id if a project belongs to organization.<br>Permissions for the project will be given to organization members as defined by the organization admins.<br>The permissions of the project do not depend on the user that created the project if a project belongs to an organization.<br>|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": "spring-example-302709",
  "platform_id": "aws",
  "region_id": "aws-us-east-2",
  "name": "spring-example-302709",
  "provisioner": "k8s-pod",
  "pg_version": 15,
  "proxy_host": "us-east-2.aws.neon.tech",
  "store_passwords": true,
  "creation_source": "console",
  "history_retention_seconds": 604800,
  "created_at": "2022-12-13T01:30:55Z",
  "updated_at": "2022-12-13T01:30:55Z",
  "owner": {
    "name": "John Smith",
    "email": "some@email.com",
    "branches_limit": 10,
    "subscription_type": "scale"
  },
  "org_id": "org-morning-bread-81040908"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_storage_bytes_hour|integer(int64)|true|none|Bytes-Hour. Project consumed that much storage hourly during the billing period. The value has some lag.<br>The value is reset at the beginning of each billing period.<br>|
|data_transfer_bytes|integer(int64)|true|none|Bytes. Egress traffic from the Neon cloud to the client for given project over the billing period.<br>Includes deleted endpoints. The value has some lag. The value is reset at the beginning of each billing period.<br>|
|written_data_bytes|integer(int64)|true|none|Bytes. Amount of WAL that travelled through storage for given project across all branches.<br>The value has some lag. The value is reset at the beginning of each billing period.<br>|
|compute_time_seconds|integer(int64)|true|none|Seconds. The number of CPU seconds used by the project's compute endpoints, including compute endpoints that have been deleted.<br>The value has some lag. The value is reset at the beginning of each billing period.<br>Examples:<br>1. An endpoint that uses 1 CPU for 1 second is equal to `compute_time=1`.<br>2. An endpoint that uses 2 CPUs simultaneously for 1 second is equal to `compute_time=2`.<br>|
|active_time_seconds|integer(int64)|true|none|Seconds. Control plane observed endpoints of this project being active this amount of wall-clock time.<br>The value has some lag.<br>The value is reset at the beginning of each billing period.<br>|
|cpu_used_sec|integer(int64)|true|none|**Deprecated.** DEPRECATED, use compute_time instead.<br>|
|id|string|true|none|The project ID|
|platform_id|string|true|none|The cloud platform identifier. Currently, only AWS is supported, for which the identifier is `aws`.<br>|
|region_id|string|true|none|The region identifier<br>|
|name|string|true|none|The project name<br>|
|provisioner|[Provisioner](#schemaprovisioner)|true|none|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|default_endpoint_settings|[DefaultEndpointSettings](#schemadefaultendpointsettings)|false|none|A collection of settings for a Neon endpoint|
|settings|[ProjectSettingsData](#schemaprojectsettingsdata)|false|none|none|
|pg_version|[PgVersion](#schemapgversion)|true|none|The major Postgres version number. Currently supported versions are `14`, `15`, `16`, and `17`.|
|proxy_host|string|true|none|The proxy host for the project. This value combines the `region_id`, the `platform_id`, and the Neon domain (`neon.tech`).<br>|
|branch_logical_size_limit|integer(int64)|true|none|The logical size limit for a branch. The value is in MiB.<br>|
|branch_logical_size_limit_bytes|integer(int64)|true|none|The logical size limit for a branch. The value is in B.<br>|
|store_passwords|boolean|true|none|Whether or not passwords are stored for roles in the Neon project. Storing passwords facilitates access to Neon features that require authorization.<br>|
|maintenance_starts_at|string(date-time)|false|none|A timestamp indicating when project maintenance begins. If set, the project is placed into maintenance mode at this time.<br>|
|creation_source|string|true|none|The project creation source<br>|
|history_retention_seconds|integer(int32)|true|none|The number of seconds to retain the shared history for all branches in this project. The default for all plans is 1 day (86400 seconds).<br>|
|created_at|string(date-time)|true|none|A timestamp indicating when the project was created<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the project was last updated<br>|
|synthetic_storage_size|integer(int64)|false|none|The current space occupied by the project in storage, in bytes. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches in a project.<br>|
|consumption_period_start|string(date-time)|true|none|A date-time indicating when Neon Cloud started measuring consumption for current consumption period.<br>|
|consumption_period_end|string(date-time)|true|none|A date-time indicating when Neon Cloud plans to stop measuring consumption for current consumption period.<br>|
|quota_reset_at|string(date-time)|false|none|**Deprecated.** DEPRECATED. Use `consumption_period_end` from the getProject endpoint instead.<br>A timestamp indicating when the project quota resets.<br>|
|owner_id|string|true|none|none|
|owner|[ProjectOwnerData](#schemaprojectownerdata)|false|none|none|
|compute_last_active_at|string(date-time)|false|none|The most recent time when any endpoint of this project was active.<br><br>Omitted when observed no actitivy for endpoints of this project.<br>|
|org_id|string|false|none|none|

<h2 id="tocS_ProjectCreateRequest">ProjectCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcreaterequest"></a>
<a id="schema_ProjectCreateRequest"></a>
<a id="tocSprojectcreaterequest"></a>
<a id="tocsprojectcreaterequest"></a>

```json
{
  "project": {
    "settings": {
      "quota": {
        "active_time_seconds": 0,
        "compute_time_seconds": 0,
        "written_data_bytes": 0,
        "data_transfer_bytes": 0,
        "logical_size_bytes": 0
      },
      "allowed_ips": {
        "ips": [
          "string"
        ],
        "protected_branches_only": true
      },
      "enable_logical_replication": true,
      "maintenance_window": {
        "weekdays": [
          0
        ],
        "start_time": "string",
        "end_time": "string"
      },
      "block_public_connections": true,
      "block_vpc_connections": true
    },
    "name": "string",
    "branch": {
      "name": "string",
      "role_name": "string",
      "database_name": "string"
    },
    "autoscaling_limit_min_cu": 0.25,
    "autoscaling_limit_max_cu": 0.25,
    "provisioner": "string",
    "region_id": "string",
    "default_endpoint_settings": {
      "pg_settings": {
        "property1": "string",
        "property2": "string"
      },
      "pgbouncer_settings": {
        "property1": "string",
        "property2": "string"
      },
      "autoscaling_limit_min_cu": 0.25,
      "autoscaling_limit_max_cu": 0.25,
      "suspend_timeout_seconds": -1,
      "property1": "string",
      "property2": "string"
    },
    "pg_version": 17,
    "store_passwords": true,
    "history_retention_seconds": 0,
    "org_id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|true|none|none|

<h2 id="tocS_ProjectUpdateRequest">ProjectUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprojectupdaterequest"></a>
<a id="schema_ProjectUpdateRequest"></a>
<a id="tocSprojectupdaterequest"></a>
<a id="tocsprojectupdaterequest"></a>

```json
{
  "project": {
    "settings": {
      "quota": {
        "active_time_seconds": 0,
        "compute_time_seconds": 0,
        "written_data_bytes": 0,
        "data_transfer_bytes": 0,
        "logical_size_bytes": 0
      },
      "allowed_ips": {
        "ips": [
          "string"
        ],
        "protected_branches_only": true
      },
      "enable_logical_replication": true,
      "maintenance_window": {
        "weekdays": [
          0
        ],
        "start_time": "string",
        "end_time": "string"
      },
      "block_public_connections": true,
      "block_vpc_connections": true
    },
    "name": "string",
    "default_endpoint_settings": {
      "pg_settings": {
        "property1": "string",
        "property2": "string"
      },
      "pgbouncer_settings": {
        "property1": "string",
        "property2": "string"
      },
      "autoscaling_limit_min_cu": 0.25,
      "autoscaling_limit_max_cu": 0.25,
      "suspend_timeout_seconds": -1,
      "property1": "string",
      "property2": "string"
    },
    "history_retention_seconds": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|object|true|none|none|

<h2 id="tocS_ProjectSettingsData">ProjectSettingsData</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsettingsdata"></a>
<a id="schema_ProjectSettingsData"></a>
<a id="tocSprojectsettingsdata"></a>
<a id="tocsprojectsettingsdata"></a>

```json
{
  "quota": {
    "active_time_seconds": 0,
    "compute_time_seconds": 0,
    "written_data_bytes": 0,
    "data_transfer_bytes": 0,
    "logical_size_bytes": 0
  },
  "allowed_ips": {
    "ips": [
      "string"
    ],
    "protected_branches_only": true
  },
  "enable_logical_replication": true,
  "maintenance_window": {
    "weekdays": [
      0
    ],
    "start_time": "string",
    "end_time": "string"
  },
  "block_public_connections": true,
  "block_vpc_connections": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quota|[ProjectQuota](#schemaprojectquota)|false|none|Per-project consumption quota. If the quota is exceeded, all active computes<br>are automatically suspended and it will not be possible to start them with<br>an API method call or incoming proxy connections. The only exception is<br>`logical_size_bytes`, which is applied on per-branch basis, i.e., only the<br>compute on the branch that exceeds the `logical_size` quota will be suspended.<br><br>Quotas are enforced based on per-project consumption metrics with the same names,<br>which are reset at the end of each billing period (the first day of the month).<br>Logical size is also an exception in this case, as it represents the total size<br>of data stored in a branch, so it is not reset.<br><br>A zero or empty quota value means 'unlimited'.<br>|
|allowed_ips|[AllowedIps](#schemaallowedips)|false|none|A list of IP addresses that are allowed to connect to the compute endpoint.<br>If the list is empty or not set, all IP addresses are allowed.<br>If protected_branches_only is true, the list will be applied only to protected branches.<br>|
|enable_logical_replication|boolean|false|none|Sets wal_level=logical for all compute endpoints in this project.<br>All active endpoints will be suspended.<br>Once enabled, logical replication cannot be disabled.<br>|
|maintenance_window|[MaintenanceWindow](#schemamaintenancewindow)|false|none|A maintenance window is a time period during which Neon may perform maintenance on the project's infrastructure.<br>During this time, the project's compute endpoints may be unavailable and existing connections can be<br>interrupted.<br>|
|block_public_connections|boolean|false|none|When set, connections from the public internet<br>are disallowed. This supersedes the AllowedIPs list.<br>This parameter is under active development and its semantics may change in the future.<br>|
|block_vpc_connections|boolean|false|none|When set, connections using VPC endpoints are disallowed.<br>This parameter is under active development and its semantics may change in the future.<br>|

<h2 id="tocS_ProjectResponse">ProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectresponse"></a>
<a id="schema_ProjectResponse"></a>
<a id="tocSprojectresponse"></a>
<a id="tocsprojectresponse"></a>

```json
{
  "project": {
    "id": "spring-example-302709",
    "platform_id": "aws",
    "region_id": "aws-us-east-2",
    "name": "spring-example-302709",
    "provisioner": "k8s-pod",
    "pg_version": 15,
    "proxy_host": "us-east-2.aws.neon.tech",
    "store_passwords": true,
    "creation_source": "console",
    "history_retention_seconds": 604800,
    "created_at": "2022-12-13T01:30:55Z",
    "updated_at": "2022-12-13T01:30:55Z",
    "owner": {
      "name": "John Smith",
      "email": "some@email.com",
      "branches_limit": 10,
      "subscription_type": "scale"
    },
    "org_id": "org-morning-bread-81040908"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project|[Project](#schemaproject)|true|none|none|

<h2 id="tocS_ProjectsResponse">ProjectsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsresponse"></a>
<a id="schema_ProjectsResponse"></a>
<a id="tocSprojectsresponse"></a>
<a id="tocsprojectsresponse"></a>

```json
{
  "projects": [
    {
      "id": "spring-example-302709",
      "platform_id": "aws",
      "region_id": "aws-us-east-2",
      "name": "spring-example-302709",
      "provisioner": "k8s-pod",
      "pg_version": 15,
      "proxy_host": "us-east-2.aws.neon.tech",
      "store_passwords": true,
      "creation_source": "console",
      "created_at": "2022-12-13T01:30:55Z",
      "updated_at": "2022-12-13T01:30:55Z"
    }
  ],
  "unavailable_project_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[ProjectListItem](#schemaprojectlistitem)]|true|none|none|
|unavailable_project_ids|[string]|false|none|A list of project IDs indicating which projects are known to exist, but whose details could not<br>be fetched within the requested (or implicit) time limit<br>|

<h2 id="tocS_ProjectPermission">ProjectPermission</h2>
<!-- backwards compatibility -->
<a id="schemaprojectpermission"></a>
<a id="schema_ProjectPermission"></a>
<a id="tocSprojectpermission"></a>
<a id="tocsprojectpermission"></a>

```json
{
  "id": "string",
  "granted_to_email": "string",
  "granted_at": "1970-01-01T00:00:00Z",
  "revoked_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|granted_to_email|string|true|none|none|
|granted_at|string(date-time)|true|none|none|
|revoked_at|string(date-time)|false|none|none|

<h2 id="tocS_ProjectPermissions">ProjectPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaprojectpermissions"></a>
<a id="schema_ProjectPermissions"></a>
<a id="tocSprojectpermissions"></a>
<a id="tocsprojectpermissions"></a>

```json
{
  "project_permissions": [
    {
      "id": "string",
      "granted_to_email": "string",
      "granted_at": "1970-01-01T00:00:00Z",
      "revoked_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_permissions|[[ProjectPermission](#schemaprojectpermission)]|true|none|none|

<h2 id="tocS_GrantPermissionToProjectRequest">GrantPermissionToProjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemagrantpermissiontoprojectrequest"></a>
<a id="schema_GrantPermissionToProjectRequest"></a>
<a id="tocSgrantpermissiontoprojectrequest"></a>
<a id="tocsgrantpermissiontoprojectrequest"></a>

```json
{
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|

<h2 id="tocS_ConsumptionHistoryPerAccountResponse">ConsumptionHistoryPerAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionhistoryperaccountresponse"></a>
<a id="schema_ConsumptionHistoryPerAccountResponse"></a>
<a id="tocSconsumptionhistoryperaccountresponse"></a>
<a id="tocsconsumptionhistoryperaccountresponse"></a>

```json
{
  "periods": [
    {
      "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
      "period_plan": "scale",
      "period_start": "2024-03-01T00:00:00Z",
      "consumption": [
        {
          "timeframe_start": "2024-03-22T00:00:00Z",
          "timeframe_end": "2024-03-23T00:00:00Z",
          "active_time_seconds": 27853,
          "compute_time_seconds": 18346,
          "written_data_bytes": 1073741824,
          "synthetic_storage_size_bytes": 5368709120
        },
        {
          "timeframe_start": "2024-03-23T00:00:00Z",
          "timeframe_end": "2024-03-24T00:00:00Z",
          "active_time_seconds": 17498,
          "compute_time_seconds": 3378,
          "written_data_bytes": 5741824,
          "synthetic_storage_size_bytes": 2370912
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periods|[[ConsumptionHistoryPerPeriod](#schemaconsumptionhistoryperperiod)]|true|none|none|

<h2 id="tocS_ConsumptionHistoryPerProjectResponse">ConsumptionHistoryPerProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionhistoryperprojectresponse"></a>
<a id="schema_ConsumptionHistoryPerProjectResponse"></a>
<a id="tocSconsumptionhistoryperprojectresponse"></a>
<a id="tocsconsumptionhistoryperprojectresponse"></a>

```json
{
  "projects": [
    {
      "project_id": "string",
      "periods": [
        {
          "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
          "period_plan": "scale",
          "period_start": "2024-03-01T00:00:00Z",
          "consumption": [
            {
              "timeframe_start": "2024-03-22T00:00:00Z",
              "timeframe_end": "2024-03-23T00:00:00Z",
              "active_time_seconds": 27853,
              "compute_time_seconds": 18346,
              "written_data_bytes": 1073741824,
              "synthetic_storage_size_bytes": 5368709120
            },
            {
              "timeframe_start": "2024-03-23T00:00:00Z",
              "timeframe_end": "2024-03-24T00:00:00Z",
              "active_time_seconds": 17498,
              "compute_time_seconds": 3378,
              "written_data_bytes": 5741824,
              "synthetic_storage_size_bytes": 2370912
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[[ConsumptionHistoryPerProject](#schemaconsumptionhistoryperproject)]|true|none|none|

<h2 id="tocS_ConsumptionHistoryPerProject">ConsumptionHistoryPerProject</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionhistoryperproject"></a>
<a id="schema_ConsumptionHistoryPerProject"></a>
<a id="tocSconsumptionhistoryperproject"></a>
<a id="tocsconsumptionhistoryperproject"></a>

```json
{
  "project_id": "string",
  "periods": [
    {
      "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
      "period_plan": "scale",
      "period_start": "2024-03-01T00:00:00Z",
      "consumption": [
        {
          "timeframe_start": "2024-03-22T00:00:00Z",
          "timeframe_end": "2024-03-23T00:00:00Z",
          "active_time_seconds": 27853,
          "compute_time_seconds": 18346,
          "written_data_bytes": 1073741824,
          "synthetic_storage_size_bytes": 5368709120
        },
        {
          "timeframe_start": "2024-03-23T00:00:00Z",
          "timeframe_end": "2024-03-24T00:00:00Z",
          "active_time_seconds": 17498,
          "compute_time_seconds": 3378,
          "written_data_bytes": 5741824,
          "synthetic_storage_size_bytes": 2370912
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|project_id|string|true|none|The project ID|
|periods|[[ConsumptionHistoryPerPeriod](#schemaconsumptionhistoryperperiod)]|true|none|none|

<h2 id="tocS_ConsumptionHistoryPerPeriod">ConsumptionHistoryPerPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionhistoryperperiod"></a>
<a id="schema_ConsumptionHistoryPerPeriod"></a>
<a id="tocSconsumptionhistoryperperiod"></a>
<a id="tocsconsumptionhistoryperperiod"></a>

```json
{
  "period_id": "79ec829f-1828-4006-ac82-9f1828a0067d",
  "period_plan": "scale",
  "period_start": "2024-03-01T00:00:00Z",
  "consumption": [
    {
      "timeframe_start": "2024-03-22T00:00:00Z",
      "timeframe_end": "2024-03-23T00:00:00Z",
      "active_time_seconds": 27853,
      "compute_time_seconds": 18346,
      "written_data_bytes": 1073741824,
      "synthetic_storage_size_bytes": 5368709120
    },
    {
      "timeframe_start": "2024-03-23T00:00:00Z",
      "timeframe_end": "2024-03-24T00:00:00Z",
      "active_time_seconds": 17498,
      "compute_time_seconds": 3378,
      "written_data_bytes": 5741824,
      "synthetic_storage_size_bytes": 2370912
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|period_id|string(uuid)|true|none|The ID assigned to the specified billing period.|
|period_plan|string|true|none|The billing plan applicable during the billing period.|
|period_start|string(date-time)|true|none|The start date-time of the billing period.<br>|
|period_end|string(date-time)|false|none|The end date-time of the billing period, available for the past periods only.<br>|
|consumption|[[ConsumptionHistoryPerTimeframe](#schemaconsumptionhistorypertimeframe)]|true|none|none|

<h2 id="tocS_ConsumptionHistoryPerTimeframe">ConsumptionHistoryPerTimeframe</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionhistorypertimeframe"></a>
<a id="schema_ConsumptionHistoryPerTimeframe"></a>
<a id="tocSconsumptionhistorypertimeframe"></a>
<a id="tocsconsumptionhistorypertimeframe"></a>

```json
{
  "timeframe_start": "1970-01-01T00:00:00Z",
  "timeframe_end": "1970-01-01T00:00:00Z",
  "active_time_seconds": 0,
  "compute_time_seconds": 0,
  "written_data_bytes": 0,
  "synthetic_storage_size_bytes": 0,
  "data_storage_bytes_hour": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeframe_start|string(date-time)|true|none|The specified start date-time for the reported consumption.<br>|
|timeframe_end|string(date-time)|true|none|The specified end date-time for the reported consumption.<br>|
|active_time_seconds|integer(uint64)|true|none|Seconds. The amount of time the compute endpoints have been active.<br>|
|compute_time_seconds|integer(uint64)|true|none|Seconds. The number of CPU seconds used by compute endpoints, including compute endpoints that have been deleted.<br>|
|written_data_bytes|integer(uint64)|true|none|Bytes. The amount of written data for all branches.<br>|
|synthetic_storage_size_bytes|integer(uint64)|true|none|Bytes. The space occupied in storage. Synthetic storage size combines the logical data size and Write-Ahead Log (WAL) size for all branches.<br>|
|data_storage_bytes_hour|integer(uint64)|false|none|Bytes-Hour. The amount of storage consumed hourly.<br>|

<h2 id="tocS_ConsumptionHistoryGranularity">ConsumptionHistoryGranularity</h2>
<!-- backwards compatibility -->
<a id="schemaconsumptionhistorygranularity"></a>
<a id="schema_ConsumptionHistoryGranularity"></a>
<a id="tocSconsumptionhistorygranularity"></a>
<a id="tocsconsumptionhistorygranularity"></a>

```json
"hourly"
```

<h2 id="tocS_ProjectLimits">ProjectLimits</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlimits"></a>
<a id="schema_ProjectLimits"></a>
<a id="tocSprojectlimits"></a>
<a id="tocsprojectlimits"></a>

```json
{
  "limits": {
    "active_time": 0,
    "max_projects": 0,
    "max_branches": 0,
    "max_protected_branches": 0,
    "max_autoscaling_cu": 0,
    "max_fixed_size_cu": 0,
    "cpu_seconds": 0,
    "max_compute_time_non_primary": 0,
    "max_active_endpoints": 0,
    "max_read_only_endpoints": 0,
    "max_allowed_ips": 0,
    "max_vpc_endpoints_per_region": 0,
    "max_monitoring_retention_hours": 0,
    "max_history_retention_seconds": 0,
    "min_autosuspend_seconds": 0,
    "max_data_transfer": 0,
    "min_idle_seconds_to_autoarchive": 0,
    "min_age_seconds_to_autoarchive": 0,
    "max_branch_roles": 0,
    "max_branch_databases": 0,
    "max_concurrent_scheduled_operation_chains_per_project": 0,
    "max_concurrent_executing_operation_chains_per_project": 0
  },
  "features": {
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|[Limits](#schemalimits)|true|none|none|
|features|[Features](#schemafeatures)|true|none|none|

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
{
  "active_time": 0,
  "max_projects": 0,
  "max_branches": 0,
  "max_protected_branches": 0,
  "max_autoscaling_cu": 0,
  "max_fixed_size_cu": 0,
  "cpu_seconds": 0,
  "max_compute_time_non_primary": 0,
  "max_active_endpoints": 0,
  "max_read_only_endpoints": 0,
  "max_allowed_ips": 0,
  "max_vpc_endpoints_per_region": 0,
  "max_monitoring_retention_hours": 0,
  "max_history_retention_seconds": 0,
  "min_autosuspend_seconds": 0,
  "max_data_transfer": 0,
  "min_idle_seconds_to_autoarchive": 0,
  "min_age_seconds_to_autoarchive": 0,
  "max_branch_roles": 0,
  "max_branch_databases": 0,
  "max_concurrent_scheduled_operation_chains_per_project": 0,
  "max_concurrent_executing_operation_chains_per_project": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_time|integer(int64)|true|none|none|
|max_projects|integer|true|none|none|
|max_branches|integer|true|none|none|
|max_protected_branches|integer|true|none|none|
|max_autoscaling_cu|number(float64)|true|none|none|
|max_fixed_size_cu|number(float64)|true|none|none|
|cpu_seconds|integer(int64)|true|none|none|
|max_compute_time_non_primary|integer(int64)|true|none|none|
|max_active_endpoints|integer|true|none|none|
|max_read_only_endpoints|integer|true|none|none|
|max_allowed_ips|integer|true|none|none|
|max_vpc_endpoints_per_region|integer|true|none|none|
|max_monitoring_retention_hours|integer|true|none|none|
|max_history_retention_seconds|integer(int32)|true|none|none|
|min_autosuspend_seconds|integer|true|none|none|
|max_data_transfer|integer(int64)|true|none|none|
|min_idle_seconds_to_autoarchive|integer(int64)|true|none|none|
|min_age_seconds_to_autoarchive|integer(int64)|true|none|none|
|max_branch_roles|integer|true|none|none|
|max_branch_databases|integer|true|none|none|
|max_concurrent_scheduled_operation_chains_per_project|integer|true|none|none|
|max_concurrent_executing_operation_chains_per_project|integer|true|none|none|

<h2 id="tocS_Branch">Branch</h2>
<!-- backwards compatibility -->
<a id="schemabranch"></a>
<a id="schema_Branch"></a>
<a id="tocSbranch"></a>
<a id="tocsbranch"></a>

```json
{
  "id": "br-wispy-meadow-118737",
  "project_id": "spring-example-302709",
  "parent_id": "br-aged-salad-637688",
  "parent_lsn": "0/1DE2850",
  "name": "dev2",
  "protected": false,
  "current_state": "ready",
  "state_changed_at": "2022-11-30T20:09:48Z",
  "creation_source": "console",
  "created_at": "2022-11-30T19:09:48Z",
  "updated_at": "2022-12-01T19:53:05Z",
  "default": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The branch ID. This value is generated when a branch is created. A `branch_id` value has a `br` prefix. For example: `br-small-term-683261`.<br>|
|project_id|string|true|none|The ID of the project to which the branch belongs<br>|
|parent_id|string|false|none|The `branch_id` of the parent branch<br>|
|parent_lsn|string|false|none|The Log Sequence Number (LSN) on the parent branch from which this branch was created<br>|
|parent_timestamp|string(date-time)|false|none|The point in time on the parent branch from which this branch was created<br>|
|name|string|true|none|The branch name<br>|
|current_state|[BranchState](#schemabranchstate)|true|none|The branch’s state, indicating if it is initializing, ready for use, or archived.<br>  * 'init' - the branch is being created but is not available for querying.<br>  * 'ready' - the branch is fully operational and ready for querying. Expect normal query response times.<br>  * 'archived' - the branch is stored in cost-effective archival storage. Expect slow query response times.<br>|
|pending_state|[BranchState](#schemabranchstate)|false|none|The branch’s state, indicating if it is initializing, ready for use, or archived.<br>  * 'init' - the branch is being created but is not available for querying.<br>  * 'ready' - the branch is fully operational and ready for querying. Expect normal query response times.<br>  * 'archived' - the branch is stored in cost-effective archival storage. Expect slow query response times.<br>|
|state_changed_at|string(date-time)|true|none|A UTC timestamp indicating when the `current_state` began<br>|
|logical_size|integer(int64)|false|none|The logical size of the branch, in bytes<br>|
|creation_source|string|true|none|The branch creation source<br>|
|primary|boolean|false|none|**Deprecated.** DEPRECATED. Use `default` field.<br>Whether the branch is the project's primary branch<br>|
|default|boolean|true|none|Whether the branch is the project's default branch<br>|
|protected|boolean|true|none|Whether the branch is protected<br>|
|cpu_used_sec|integer(int64)|true|none|**Deprecated.** CPU seconds used by all of the branch's compute endpoints, including deleted ones.<br>This value is reset at the beginning of each billing period.<br>Examples:<br>1. A branch that uses 1 CPU for 1 second is equal to `cpu_used_sec=1`.<br>2. A branch that uses 2 CPUs simultaneously for 1 second is equal to `cpu_used_sec=2`.<br>|
|compute_time_seconds|integer(int64)|true|none|none|
|active_time_seconds|integer(int64)|true|none|none|
|written_data_bytes|integer(int64)|true|none|none|
|data_transfer_bytes|integer(int64)|true|none|none|
|created_at|string(date-time)|true|none|A timestamp indicating when the branch was created<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the branch was last updated<br>|
|last_reset_at|string(date-time)|false|none|A timestamp indicating when the branch was last reset<br>|
|created_by|object|false|none|The resolved user model that contains details of the user/org/integration/api_key used for branch creation. This field is filled only in listing/get/create/get/update/delete methods, if it is empty when calling other handlers, it does not mean that it is empty in the system.<br>|

<h2 id="tocS_BranchState">BranchState</h2>
<!-- backwards compatibility -->
<a id="schemabranchstate"></a>
<a id="schema_BranchState"></a>
<a id="tocSbranchstate"></a>
<a id="tocsbranchstate"></a>

```json
"string"
```

The branch’s state, indicating if it is initializing, ready for use, or archived.
  * 'init' - the branch is being created but is not available for querying.
  * 'ready' - the branch is fully operational and ready for querying. Expect normal query response times.
  * 'archived' - the branch is stored in cost-effective archival storage. Expect slow query response times.

<h2 id="tocS_BranchCreateRequestEndpointOptions">BranchCreateRequestEndpointOptions</h2>
<!-- backwards compatibility -->
<a id="schemabranchcreaterequestendpointoptions"></a>
<a id="schema_BranchCreateRequestEndpointOptions"></a>
<a id="tocSbranchcreaterequestendpointoptions"></a>
<a id="tocsbranchcreaterequestendpointoptions"></a>

```json
{
  "type": "read_only",
  "autoscaling_limit_min_cu": 0.25,
  "autoscaling_limit_max_cu": 0.25,
  "provisioner": "string",
  "suspend_timeout_seconds": -1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[EndpointType](#schemaendpointtype)|true|none|The compute endpoint type. Either `read_write` or `read_only`.<br>|
|autoscaling_limit_min_cu|[ComputeUnit](#schemacomputeunit)|false|none|The minimum number of Compute Units. The minimum value is `0.25`.<br>    See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>    for more information.<br>|
|autoscaling_limit_max_cu|[ComputeUnit](#schemacomputeunit)|false|none|The maximum number of Compute Units.<br>    See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>    for more information.<br>|
|provisioner|[Provisioner](#schemaprovisioner)|false|none|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|suspend_timeout_seconds|[SuspendTimeoutSeconds](#schemasuspendtimeoutseconds)|false|none|Duration of inactivity in seconds after which the compute endpoint is<br>automatically suspended. The value `0` means use the default value.<br>The value `-1` means never suspend. The default value is `300` seconds (5 minutes).<br>The minimum value is `60` seconds (1 minute).<br>The maximum value is `604800` seconds (1 week). For more information, see<br>[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|read_only|
|type|read_write|

<h2 id="tocS_BranchCreateRequest">BranchCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabranchcreaterequest"></a>
<a id="schema_BranchCreateRequest"></a>
<a id="tocSbranchcreaterequest"></a>
<a id="tocsbranchcreaterequest"></a>

```json
{
  "endpoints": [
    {
      "type": "read_only",
      "autoscaling_limit_min_cu": 0.25,
      "autoscaling_limit_max_cu": 0.25,
      "provisioner": "string",
      "suspend_timeout_seconds": -1
    }
  ],
  "branch": {
    "parent_id": "string",
    "name": "string",
    "parent_lsn": "string",
    "parent_timestamp": "1970-01-01T00:00:00Z",
    "protected": true,
    "archived": true,
    "init_source": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|[[BranchCreateRequestEndpointOptions](#schemabranchcreaterequestendpointoptions)]|false|none|none|
|branch|object|false|none|none|

<h2 id="tocS_BranchUpdateRequest">BranchUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabranchupdaterequest"></a>
<a id="schema_BranchUpdateRequest"></a>
<a id="tocSbranchupdaterequest"></a>
<a id="tocsbranchupdaterequest"></a>

```json
{
  "branch": {
    "name": "string",
    "protected": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|object|true|none|none|

<h2 id="tocS_BranchRestoreRequest">BranchRestoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemabranchrestorerequest"></a>
<a id="schema_BranchRestoreRequest"></a>
<a id="tocSbranchrestorerequest"></a>
<a id="tocsbranchrestorerequest"></a>

```json
{
  "source_branch_id": "string",
  "source_lsn": "string",
  "source_timestamp": "1970-01-01T00:00:00Z",
  "preserve_under_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_branch_id|string|true|none|The `branch_id` of the restore source branch.<br>If `source_timestamp` and `source_lsn` are omitted, the branch will be restored to head.<br>If `source_branch_id` is equal to the branch's id, `source_timestamp` or `source_lsn` is required.<br>|
|source_lsn|string|false|none|A Log Sequence Number (LSN) on the source branch. The branch will be restored with data from this LSN.<br>|
|source_timestamp|string(date-time)|false|none|A timestamp identifying a point in time on the source branch. The branch will be restored with data starting from this point in time.<br>The timestamp must be provided in ISO 8601 format; for example: `2024-02-26T12:00:00Z`.<br>|
|preserve_under_name|string|false|none|If not empty, the previous state of the branch will be saved to a branch with this name.<br>If the branch has children or the `source_branch_id` is equal to the branch id, this field is required. All existing child branches will be moved to the newly created branch under the name `preserve_under_name`.<br>|

<h2 id="tocS_BranchResponse">BranchResponse</h2>
<!-- backwards compatibility -->
<a id="schemabranchresponse"></a>
<a id="schema_BranchResponse"></a>
<a id="tocSbranchresponse"></a>
<a id="tocsbranchresponse"></a>

```json
{
  "branch": {
    "id": "br-wispy-meadow-118737",
    "project_id": "spring-example-302709",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1DE2850",
    "name": "dev2",
    "protected": false,
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "creation_source": "console",
    "created_at": "2022-11-30T19:09:48Z",
    "updated_at": "2022-12-01T19:53:05Z",
    "default": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|[Branch](#schemabranch)|true|none|none|

<h2 id="tocS_BranchSchemaResponse">BranchSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemabranchschemaresponse"></a>
<a id="schema_BranchSchemaResponse"></a>
<a id="tocSbranchschemaresponse"></a>
<a id="tocsbranchschemaresponse"></a>

```json
{
  "sql": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sql|string|false|none|none|

<h2 id="tocS_BranchSchemaCompareResponse">BranchSchemaCompareResponse</h2>
<!-- backwards compatibility -->
<a id="schemabranchschemacompareresponse"></a>
<a id="schema_BranchSchemaCompareResponse"></a>
<a id="tocSbranchschemacompareresponse"></a>
<a id="tocsbranchschemacompareresponse"></a>

```json
{
  "diff": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diff|string|false|none|none|

<h2 id="tocS_BranchesResponse">BranchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabranchesresponse"></a>
<a id="schema_BranchesResponse"></a>
<a id="tocSbranchesresponse"></a>
<a id="tocsbranchesresponse"></a>

```json
{
  "branches": [
    {
      "id": "br-wispy-meadow-118737",
      "project_id": "spring-example-302709",
      "parent_id": "br-aged-salad-637688",
      "parent_lsn": "0/1DE2850",
      "name": "dev2",
      "protected": false,
      "current_state": "ready",
      "state_changed_at": "2022-11-30T20:09:48Z",
      "creation_source": "console",
      "created_at": "2022-11-30T19:09:48Z",
      "updated_at": "2022-12-01T19:53:05Z",
      "default": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|[[Branch](#schemabranch)]|true|none|none|

<h2 id="tocS_BranchesCountResponse">BranchesCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemabranchescountresponse"></a>
<a id="schema_BranchesCountResponse"></a>
<a id="tocSbranchescountresponse"></a>
<a id="tocsbranchescountresponse"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int)|true|none|none|

<h2 id="tocS_ConnectionParameters">ConnectionParameters</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionparameters"></a>
<a id="schema_ConnectionParameters"></a>
<a id="tocSconnectionparameters"></a>
<a id="tocsconnectionparameters"></a>

```json
{
  "database": "string",
  "password": "string",
  "role": "string",
  "host": "string",
  "pooler_host": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|true|none|Database name<br>|
|password|string|true|none|Password for the role<br>|
|role|string|true|none|Role name<br>|
|host|string|true|none|Hostname<br>|
|pooler_host|string|true|none|Pooler hostname<br>|

<h2 id="tocS_ConnectionDetails">ConnectionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaconnectiondetails"></a>
<a id="schema_ConnectionDetails"></a>
<a id="tocSconnectiondetails"></a>
<a id="tocsconnectiondetails"></a>

```json
{
  "connection_uri": "string",
  "connection_parameters": {
    "database": "string",
    "password": "string",
    "role": "string",
    "host": "string",
    "pooler_host": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_uri|string|true|none|The connection URI is defined as specified here: [Connection URIs](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS)<br>The connection URI can be used to connect to a Postgres database with psql or defined in a DATABASE_URL environment variable.<br>When creating a branch from a parent with more than one role or database, the response body does not include a connection URI.<br>|
|connection_parameters|[ConnectionParameters](#schemaconnectionparameters)|true|none|none|

<h2 id="tocS_ConnectionURIResponse">ConnectionURIResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionuriresponse"></a>
<a id="schema_ConnectionURIResponse"></a>
<a id="tocSconnectionuriresponse"></a>
<a id="tocsconnectionuriresponse"></a>

```json
{
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|true|none|The connection URI.<br>|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
  "id": "ep-silent-smoke-806639",
  "project_id": "spring-example-302709",
  "branch_id": "br-wispy-meadow-118737",
  "autoscaling_limit_min_cu": 1,
  "autoscaling_limit_max_cu": 1,
  "region_id": "aws-us-east-2",
  "type": "read_write",
  "current_state": "init",
  "pending_state": "active",
  "settings": {
    "pg_settings": {}
  },
  "pooler_enabled": false,
  "pooler_mode": "transaction",
  "disabled": false,
  "passwordless_access": true,
  "creation_source": "console",
  "created_at": "2022-12-03T15:37:07Z",
  "updated_at": "2022-12-03T15:37:07Z",
  "proxy_host": "us-east-2.aws.neon.tech",
  "suspend_timeout_seconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|true|none|The hostname of the compute endpoint. This is the hostname specified when connecting to a Neon database.<br>|
|id|string|true|none|The compute endpoint ID. Compute endpoint IDs have an `ep-` prefix. For example: `ep-little-smoke-851426`<br>|
|project_id|string|true|none|The ID of the project to which the compute endpoint belongs<br>|
|branch_id|string|true|none|The ID of the branch that the compute endpoint is associated with<br>|
|autoscaling_limit_min_cu|[ComputeUnit](#schemacomputeunit)|true|none|The minimum number of Compute Units<br>|
|autoscaling_limit_max_cu|[ComputeUnit](#schemacomputeunit)|true|none|The maximum number of Compute Units<br>|
|region_id|string|true|none|The region identifier<br>|
|type|[EndpointType](#schemaendpointtype)|true|none|The compute endpoint type. Either `read_write` or `read_only`.<br>|
|current_state|[EndpointState](#schemaendpointstate)|true|none|The state of the compute endpoint<br>|
|pending_state|[EndpointState](#schemaendpointstate)|false|none|The state of the compute endpoint<br>|
|settings|[EndpointSettingsData](#schemaendpointsettingsdata)|true|none|A collection of settings for a compute endpoint|
|pooler_enabled|boolean|true|none|Whether connection pooling is enabled for the compute endpoint<br>|
|pooler_mode|[EndpointPoolerMode](#schemaendpointpoolermode)|true|none|The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.<br>|
|disabled|boolean|true|none|Whether to restrict connections to the compute endpoint.<br>Enabling this option schedules a suspend compute operation.<br>A disabled compute endpoint cannot be enabled by a connection or<br>console action. However, the compute endpoint is periodically<br>enabled by check_availability operations.<br>|
|passwordless_access|boolean|true|none|Whether to permit passwordless access to the compute endpoint<br>|
|last_active|string(date-time)|false|none|A timestamp indicating when the compute endpoint was last active<br>|
|creation_source|string|true|none|The compute endpoint creation source<br>|
|created_at|string(date-time)|true|none|A timestamp indicating when the compute endpoint was created<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the compute endpoint was last updated<br>|
|proxy_host|string|true|none|DEPRECATED. Use the "host" property instead.<br>|
|suspend_timeout_seconds|[SuspendTimeoutSeconds](#schemasuspendtimeoutseconds)|true|none|Duration of inactivity in seconds after which the compute endpoint is<br>automatically suspended. The value `0` means use the default value.<br>The value `-1` means never suspend. The default value is `300` seconds (5 minutes).<br>The minimum value is `60` seconds (1 minute).<br>The maximum value is `604800` seconds (1 week). For more information, see<br>[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).<br>|
|provisioner|[Provisioner](#schemaprovisioner)|true|none|The Neon compute provisioner.<br>Specify the `k8s-neonvm` provisioner to create a compute endpoint that supports Autoscaling.<br><br>Provisioner can be one of the following values:<br>* k8s-pod<br>* k8s-neonvm<br><br>Clients must expect, that any string value that is not documented in the description above should be treated as a error. UNKNOWN value if safe to treat as an error too.<br>|
|compute_release_version|string|false|none|Attached compute's release version number.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|read_only|
|type|read_write|
|current_state|init|
|current_state|active|
|current_state|idle|
|pending_state|init|
|pending_state|active|
|pending_state|idle|
|pooler_mode|transaction|

<h2 id="tocS_EndpointState">EndpointState</h2>
<!-- backwards compatibility -->
<a id="schemaendpointstate"></a>
<a id="schema_EndpointState"></a>
<a id="tocSendpointstate"></a>
<a id="tocsendpointstate"></a>

```json
"init"
```

The state of the compute endpoint

<h2 id="tocS_EndpointType">EndpointType</h2>
<!-- backwards compatibility -->
<a id="schemaendpointtype"></a>
<a id="schema_EndpointType"></a>
<a id="tocSendpointtype"></a>
<a id="tocsendpointtype"></a>

```json
"read_only"
```

The compute endpoint type. Either `read_write` or `read_only`.

<h2 id="tocS_EndpointPoolerMode">EndpointPoolerMode</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpoolermode"></a>
<a id="schema_EndpointPoolerMode"></a>
<a id="tocSendpointpoolermode"></a>
<a id="tocsendpointpoolermode"></a>

```json
"transaction"
```

The connection pooler mode. Neon supports PgBouncer in `transaction` mode only.

<h2 id="tocS_SuspendTimeoutSeconds">SuspendTimeoutSeconds</h2>
<!-- backwards compatibility -->
<a id="schemasuspendtimeoutseconds"></a>
<a id="schema_SuspendTimeoutSeconds"></a>
<a id="tocSsuspendtimeoutseconds"></a>
<a id="tocssuspendtimeoutseconds"></a>

```json
-1
```

Duration of inactivity in seconds after which the compute endpoint is
automatically suspended. The value `0` means use the default value.
The value `-1` means never suspend. The default value is `300` seconds (5 minutes).
The minimum value is `60` seconds (1 minute).
The maximum value is `604800` seconds (1 week). For more information, see
[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).

<h2 id="tocS_AllowedIps">AllowedIps</h2>
<!-- backwards compatibility -->
<a id="schemaallowedips"></a>
<a id="schema_AllowedIps"></a>
<a id="tocSallowedips"></a>
<a id="tocsallowedips"></a>

```json
{
  "ips": [
    "string"
  ],
  "protected_branches_only": true
}
```

A list of IP addresses that are allowed to connect to the compute endpoint.
If the list is empty or not set, all IP addresses are allowed.
If protected_branches_only is true, the list will be applied only to protected branches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ips|[string]|false|none|A list of IP addresses that are allowed to connect to the endpoint.|
|protected_branches_only|boolean|false|none|If true, the list will be applied only to protected branches.|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "weekdays": [
    0
  ],
  "start_time": "string",
  "end_time": "string"
}
```

A maintenance window is a time period during which Neon may perform maintenance on the project's infrastructure.
During this time, the project's compute endpoints may be unavailable and existing connections can be
interrupted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weekdays|[integer]|true|none|A list of weekdays when the maintenance window is active.<br>Encoded as ints, where 1 - Monday, and 7 - Sunday.<br>|
|start_time|string|true|none|Start time of the maintenance window, in the format of "HH:MM". Uses UTC.<br>|
|end_time|string|true|none|End time of the maintenance window, in the format of "HH:MM". Uses UTC.<br>|

<h2 id="tocS_EndpointCreateRequest">EndpointCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaendpointcreaterequest"></a>
<a id="schema_EndpointCreateRequest"></a>
<a id="tocSendpointcreaterequest"></a>
<a id="tocsendpointcreaterequest"></a>

```json
{
  "endpoint": {
    "branch_id": "string",
    "region_id": "string",
    "type": "read_only",
    "settings": {
      "pg_settings": {
        "property1": "string",
        "property2": "string"
      },
      "pgbouncer_settings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "autoscaling_limit_min_cu": 0.25,
    "autoscaling_limit_max_cu": 0.25,
    "provisioner": "string",
    "pooler_enabled": true,
    "pooler_mode": "transaction",
    "disabled": true,
    "passwordless_access": true,
    "suspend_timeout_seconds": -1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|true|none|none|

<h2 id="tocS_EndpointUpdateRequest">EndpointUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaendpointupdaterequest"></a>
<a id="schema_EndpointUpdateRequest"></a>
<a id="tocSendpointupdaterequest"></a>
<a id="tocsendpointupdaterequest"></a>

```json
{
  "endpoint": {
    "branch_id": "string",
    "autoscaling_limit_min_cu": 0.25,
    "autoscaling_limit_max_cu": 0.25,
    "provisioner": "string",
    "settings": {
      "pg_settings": {
        "property1": "string",
        "property2": "string"
      },
      "pgbouncer_settings": {
        "property1": "string",
        "property2": "string"
      }
    },
    "pooler_enabled": true,
    "pooler_mode": "transaction",
    "disabled": true,
    "passwordless_access": true,
    "suspend_timeout_seconds": -1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|object|true|none|none|

<h2 id="tocS_EndpointResponse">EndpointResponse</h2>
<!-- backwards compatibility -->
<a id="schemaendpointresponse"></a>
<a id="schema_EndpointResponse"></a>
<a id="tocSendpointresponse"></a>
<a id="tocsendpointresponse"></a>

```json
{
  "endpoint": {
    "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
    "id": "ep-silent-smoke-806639",
    "project_id": "spring-example-302709",
    "branch_id": "br-wispy-meadow-118737",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "init",
    "pending_state": "active",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "creation_source": "console",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:37:07Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "suspend_timeout_seconds": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|[Endpoint](#schemaendpoint)|true|none|none|

<h2 id="tocS_ConnectionURIsResponse">ConnectionURIsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionurisresponse"></a>
<a id="schema_ConnectionURIsResponse"></a>
<a id="tocSconnectionurisresponse"></a>
<a id="tocsconnectionurisresponse"></a>

```json
{
  "connection_uris": [
    {
      "connection_uri": "string",
      "connection_parameters": {
        "database": "string",
        "password": "string",
        "role": "string",
        "host": "string",
        "pooler_host": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_uris|[[ConnectionDetails](#schemaconnectiondetails)]|true|none|none|

<h2 id="tocS_ConnectionURIsOptionalResponse">ConnectionURIsOptionalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionurisoptionalresponse"></a>
<a id="schema_ConnectionURIsOptionalResponse"></a>
<a id="tocSconnectionurisoptionalresponse"></a>
<a id="tocsconnectionurisoptionalresponse"></a>

```json
{
  "connection_uris": [
    {
      "connection_uri": "string",
      "connection_parameters": {
        "database": "string",
        "password": "string",
        "role": "string",
        "host": "string",
        "pooler_host": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_uris|[[ConnectionDetails](#schemaconnectiondetails)]|false|none|none|

<h2 id="tocS_VPCEndpointsResponse">VPCEndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointsresponse"></a>
<a id="schema_VPCEndpointsResponse"></a>
<a id="tocSvpcendpointsresponse"></a>
<a id="tocsvpcendpointsresponse"></a>

```json
{
  "endpoints": [
    {
      "vpc_endpoint_id": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|[[VPCEndpoint](#schemavpcendpoint)]|true|none|none|

<h2 id="tocS_VPCEndpoint">VPCEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpoint"></a>
<a id="schema_VPCEndpoint"></a>
<a id="tocSvpcendpoint"></a>
<a id="tocsvpcendpoint"></a>

```json
{
  "vpc_endpoint_id": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpc_endpoint_id|string|true|none|none|
|label|string|true|none|none|

<h2 id="tocS_VPCEndpointDetails">VPCEndpointDetails</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointdetails"></a>
<a id="schema_VPCEndpointDetails"></a>
<a id="tocSvpcendpointdetails"></a>
<a id="tocsvpcendpointdetails"></a>

```json
{
  "vpc_endpoint_id": "string",
  "label": "string",
  "state": "string",
  "num_restricted_projects": 0,
  "example_restricted_projects": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vpc_endpoint_id|string|true|none|The ID of the VPC endpoint|
|label|string|true|none|The custom descriptive label for the VPC endpoint|
|state|string|true|none|The current state of the VPC endpoint. Possible values are<br>`new` (just configured, pending acceptance) or `accepted`<br>(VPC connection was accepted by Neon).<br>|
|num_restricted_projects|integer|true|none|The number of projects that are restricted to use this VPC endpoint.<br>|
|example_restricted_projects|[string]|true|none|A list of example projects that are restricted to use this VPC endpoint.<br>There are at most 3 projects in the list, even if more projects are restricted.<br>|

<h2 id="tocS_VPCEndpointAssignment">VPCEndpointAssignment</h2>
<!-- backwards compatibility -->
<a id="schemavpcendpointassignment"></a>
<a id="schema_VPCEndpointAssignment"></a>
<a id="tocSvpcendpointassignment"></a>
<a id="tocsvpcendpointassignment"></a>

```json
{
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|

<h2 id="tocS_EndpointsResponse">EndpointsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsresponse"></a>
<a id="schema_EndpointsResponse"></a>
<a id="tocSendpointsresponse"></a>
<a id="tocsendpointsresponse"></a>

```json
{
  "endpoints": [
    {
      "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
      "id": "ep-silent-smoke-806639",
      "project_id": "spring-example-302709",
      "branch_id": "br-wispy-meadow-118737",
      "autoscaling_limit_min_cu": 1,
      "autoscaling_limit_max_cu": 1,
      "region_id": "aws-us-east-2",
      "type": "read_write",
      "current_state": "init",
      "pending_state": "active",
      "settings": {
        "pg_settings": {}
      },
      "pooler_enabled": false,
      "pooler_mode": "transaction",
      "disabled": false,
      "passwordless_access": true,
      "creation_source": "console",
      "created_at": "2022-12-03T15:37:07Z",
      "updated_at": "2022-12-03T15:37:07Z",
      "proxy_host": "us-east-2.aws.neon.tech",
      "suspend_timeout_seconds": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|[[Endpoint](#schemaendpoint)]|true|none|none|

<h2 id="tocS_EndpointPasswordlessSessionAuthRequest">EndpointPasswordlessSessionAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpasswordlesssessionauthrequest"></a>
<a id="schema_EndpointPasswordlessSessionAuthRequest"></a>
<a id="tocSendpointpasswordlesssessionauthrequest"></a>
<a id="tocsendpointpasswordlesssessionauthrequest"></a>

```json
{
  "session_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session_id|string|true|none|none|

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
0
```

A Duration represents the elapsed time between two instants
as an int64 nanosecond count. The representation limits the
largest representable duration to approximately 290 years.

<h2 id="tocS_StatementResult">StatementResult</h2>
<!-- backwards compatibility -->
<a id="schemastatementresult"></a>
<a id="schema_StatementResult"></a>
<a id="tocSstatementresult"></a>
<a id="tocsstatementresult"></a>

```json
{
  "data": {
    "fields": [
      "string"
    ],
    "rows": [
      [
        "string"
      ]
    ],
    "truncated": true
  },
  "error": "string",
  "explain_data": [
    {
      "QUERY PLAN": "string"
    }
  ],
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[StatementData](#schemastatementdata)|false|none|none|
|error|string|false|none|none|
|explain_data|[[ExplainData](#schemaexplaindata)]|false|none|none|
|query|string|true|none|none|

<h2 id="tocS_StatementData">StatementData</h2>
<!-- backwards compatibility -->
<a id="schemastatementdata"></a>
<a id="schema_StatementData"></a>
<a id="tocSstatementdata"></a>
<a id="tocsstatementdata"></a>

```json
{
  "fields": [
    "string"
  ],
  "rows": [
    [
      "string"
    ]
  ],
  "truncated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|none|
|rows|[[string]]|false|none|none|
|truncated|boolean|true|none|none|

<h2 id="tocS_ExplainData">ExplainData</h2>
<!-- backwards compatibility -->
<a id="schemaexplaindata"></a>
<a id="schema_ExplainData"></a>
<a id="tocSexplaindata"></a>
<a id="tocsexplaindata"></a>

```json
{
  "QUERY PLAN": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|QUERY PLAN|string|true|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "branch_id": "br-wispy-meadow-118737",
  "name": "casey",
  "protected": false,
  "created_at": "2022-11-23T17:42:25Z",
  "updated_at": "2022-11-23T17:42:25Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_id|string|true|none|The ID of the branch to which the role belongs<br>|
|name|string|true|none|The role name<br>|
|password|string|false|none|The role password<br>|
|protected|boolean|false|none|Whether or not the role is system-protected<br>|
|created_at|string(date-time)|true|none|A timestamp indicating when the role was created<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the role was last updated<br>|

<h2 id="tocS_RoleCreateRequest">RoleCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemarolecreaterequest"></a>
<a id="schema_RoleCreateRequest"></a>
<a id="tocSrolecreaterequest"></a>
<a id="tocsrolecreaterequest"></a>

```json
{
  "role": {
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|object|true|none|none|

<h2 id="tocS_RoleResponse">RoleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaroleresponse"></a>
<a id="schema_RoleResponse"></a>
<a id="tocSroleresponse"></a>
<a id="tocsroleresponse"></a>

```json
{
  "role": {
    "branch_id": "br-wispy-meadow-118737",
    "name": "casey",
    "protected": false,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:25Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[Role](#schemarole)|true|none|none|

<h2 id="tocS_JWKSResponse">JWKSResponse</h2>
<!-- backwards compatibility -->
<a id="schemajwksresponse"></a>
<a id="schema_JWKSResponse"></a>
<a id="tocSjwksresponse"></a>
<a id="tocsjwksresponse"></a>

```json
{
  "jwks": {
    "id": "string",
    "project_id": "string",
    "branch_id": "string",
    "jwks_url": "string",
    "provider_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "jwt_audience": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwks|[JWKS](#schemajwks)|true|none|none|

<h2 id="tocS_RolesResponse">RolesResponse</h2>
<!-- backwards compatibility -->
<a id="schemarolesresponse"></a>
<a id="schema_RolesResponse"></a>
<a id="tocSrolesresponse"></a>
<a id="tocsrolesresponse"></a>

```json
{
  "roles": [
    {
      "branch_id": "br-wispy-meadow-118737",
      "name": "casey",
      "protected": false,
      "created_at": "2022-11-23T17:42:25Z",
      "updated_at": "2022-11-23T17:42:25Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[Role](#schemarole)]|true|none|none|

<h2 id="tocS_RolePasswordResponse">RolePasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemarolepasswordresponse"></a>
<a id="schema_RolePasswordResponse"></a>
<a id="tocSrolepasswordresponse"></a>
<a id="tocsrolepasswordresponse"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|The role password<br>|

<h2 id="tocS_PaymentSourceBankCard">PaymentSourceBankCard</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsourcebankcard"></a>
<a id="schema_PaymentSourceBankCard"></a>
<a id="tocSpaymentsourcebankcard"></a>
<a id="tocspaymentsourcebankcard"></a>

```json
{
  "last4": "string",
  "brand": "amex",
  "exp_month": 0,
  "exp_year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last4|string|true|none|Last 4 digits of the card.<br>|
|brand|string|false|none|Brand of credit card.<br>|
|exp_month|integer(int64)|false|none|Credit card expiration month<br>|
|exp_year|integer(int64)|false|none|Credit card expiration year<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|brand|amex|
|brand|diners|
|brand|discover|
|brand|jcb|
|brand|mastercard|
|brand|unionpay|
|brand|unknown|
|brand|visa|

<h2 id="tocS_PaymentSource">PaymentSource</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsource"></a>
<a id="schema_PaymentSource"></a>
<a id="tocSpaymentsource"></a>
<a id="tocspaymentsource"></a>

```json
{
  "type": "string",
  "card": {
    "last4": "string",
    "brand": "amex",
    "exp_month": 0,
    "exp_year": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Type of payment source. E.g. "card".<br>|
|card|[PaymentSourceBankCard](#schemapaymentsourcebankcard)|false|none|none|

<h2 id="tocS_BillingAccount">BillingAccount</h2>
<!-- backwards compatibility -->
<a id="schemabillingaccount"></a>
<a id="schema_BillingAccount"></a>
<a id="tocSbillingaccount"></a>
<a id="tocsbillingaccount"></a>

```json
{
  "state": "UNKNOWN",
  "payment_source": {
    "type": "string",
    "card": {
      "last4": "string",
      "brand": "amex",
      "exp_month": 0,
      "exp_year": 0
    }
  },
  "subscription_type": "UNKNOWN",
  "payment_method": "UNKNOWN",
  "quota_reset_at_last": "1970-01-01T00:00:00Z",
  "name": "string",
  "email": "string",
  "address_city": "string",
  "address_country": "string",
  "address_country_name": "string",
  "address_line1": "string",
  "address_line2": "string",
  "address_postal_code": "string",
  "address_state": "string",
  "orb_portal_url": "string",
  "tax_id": "string",
  "tax_id_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[BillingAccountState](#schemabillingaccountstate)|true|none|State of the billing account.<br>|
|payment_source|[PaymentSource](#schemapaymentsource)|true|none|none|
|subscription_type|[BillingSubscriptionType](#schemabillingsubscriptiontype)|true|none|Type of subscription to Neon Cloud.<br>Notice that for users without billing account this will be "UNKNOWN"<br>|
|payment_method|[BillingPaymentMethod](#schemabillingpaymentmethod)|true|none|Indicates whether and how an account makes payments.<br>|
|quota_reset_at_last|string(date-time)|true|none|The last time the quota was reset. Defaults to the date-time the account is created.<br>|
|name|string|true|none|The full name of the individual or entity that owns the billing account. This name appears on invoices.|
|email|string|true|none|Billing email, to receive emails related to invoices and subscriptions.<br>|
|address_city|string|true|none|Billing address city.<br>|
|address_country|string|true|none|Billing address country code defined by ISO 3166-1 alpha-2.<br>|
|address_country_name|string|false|none|Billing address country name.<br>|
|address_line1|string|true|none|Billing address line 1.<br>|
|address_line2|string|true|none|Billing address line 2.<br>|
|address_postal_code|string|true|none|Billing address postal code.<br>|
|address_state|string|true|none|Billing address state or region.<br>|
|orb_portal_url|string|false|none|Orb user portal url<br>|
|tax_id|string|false|none|The tax identification number for the billing account, displayed on invoices.<br>|
|tax_id_type|string|false|none|The type of the tax identification number based on the country.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN|
|state|active|
|state|suspended|
|state|deactivated|
|state|deleted|
|subscription_type|UNKNOWN|
|subscription_type|direct_sales|
|subscription_type|aws_marketplace|
|subscription_type|free_v2|
|subscription_type|launch|
|subscription_type|scale|
|subscription_type|business|
|subscription_type|vercel_pg_legacy|
|payment_method|UNKNOWN|
|payment_method|none|
|payment_method|stripe|
|payment_method|direct_payment|
|payment_method|aws_mp|
|payment_method|azure_mp|
|payment_method|vercel_mp|
|payment_method|staff|
|payment_method|trial|
|payment_method|sponsorship|

<h2 id="tocS_BillingAccountState">BillingAccountState</h2>
<!-- backwards compatibility -->
<a id="schemabillingaccountstate"></a>
<a id="schema_BillingAccountState"></a>
<a id="tocSbillingaccountstate"></a>
<a id="tocsbillingaccountstate"></a>

```json
"UNKNOWN"
```

State of the billing account.

<h2 id="tocS_BillingSubscriptionType">BillingSubscriptionType</h2>
<!-- backwards compatibility -->
<a id="schemabillingsubscriptiontype"></a>
<a id="schema_BillingSubscriptionType"></a>
<a id="tocSbillingsubscriptiontype"></a>
<a id="tocsbillingsubscriptiontype"></a>

```json
"UNKNOWN"
```

Type of subscription to Neon Cloud.
Notice that for users without billing account this will be "UNKNOWN"

<h2 id="tocS_BillingPaymentMethod">BillingPaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemabillingpaymentmethod"></a>
<a id="schema_BillingPaymentMethod"></a>
<a id="tocSbillingpaymentmethod"></a>
<a id="tocsbillingpaymentmethod"></a>

```json
"UNKNOWN"
```

Indicates whether and how an account makes payments.

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "id": 834686,
  "branch_id": "br-wispy-meadow-118737",
  "name": "neondb",
  "owner_name": "casey",
  "created_at": "2022-11-30T18:25:15Z",
  "updated_at": "2022-11-30T18:25:15Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|The database ID<br>|
|branch_id|string|true|none|The ID of the branch to which the database belongs<br>|
|name|string|true|none|The database name<br>|
|owner_name|string|true|none|The name of role that owns the database<br>|
|created_at|string(date-time)|true|none|A timestamp indicating when the database was created<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the database was last updated<br>|

<h2 id="tocS_DatabaseCreateRequest">DatabaseCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadatabasecreaterequest"></a>
<a id="schema_DatabaseCreateRequest"></a>
<a id="tocSdatabasecreaterequest"></a>
<a id="tocsdatabasecreaterequest"></a>

```json
{
  "database": {
    "name": "string",
    "owner_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|object|true|none|none|

<h2 id="tocS_DatabaseUpdateRequest">DatabaseUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseupdaterequest"></a>
<a id="schema_DatabaseUpdateRequest"></a>
<a id="tocSdatabaseupdaterequest"></a>
<a id="tocsdatabaseupdaterequest"></a>

```json
{
  "database": {
    "name": "string",
    "owner_name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|object|true|none|none|

<h2 id="tocS_DatabaseResponse">DatabaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseresponse"></a>
<a id="schema_DatabaseResponse"></a>
<a id="tocSdatabaseresponse"></a>
<a id="tocsdatabaseresponse"></a>

```json
{
  "database": {
    "id": 834686,
    "branch_id": "br-wispy-meadow-118737",
    "name": "neondb",
    "owner_name": "casey",
    "created_at": "2022-11-30T18:25:15Z",
    "updated_at": "2022-11-30T18:25:15Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|[Database](#schemadatabase)|true|none|none|

<h2 id="tocS_DatabasesResponse">DatabasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabasesresponse"></a>
<a id="schema_DatabasesResponse"></a>
<a id="tocSdatabasesresponse"></a>
<a id="tocsdatabasesresponse"></a>

```json
{
  "databases": [
    {
      "id": 834686,
      "branch_id": "br-wispy-meadow-118737",
      "name": "neondb",
      "owner_name": "casey",
      "created_at": "2022-11-30T18:25:15Z",
      "updated_at": "2022-11-30T18:25:15Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databases|[[Database](#schemadatabase)]|true|none|none|

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com",
  "org_id": "string",
  "invited_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "invited_at": "1970-01-01T00:00:00Z",
  "role": "admin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|email|string(email)|true|none|Email of the invited user|
|org_id|string|true|none|Organization id as it is stored in Neon|
|invited_by|string(uuid)|true|none|UUID for the user_id who extended the invitation|
|invited_at|string(date-time)|true|none|Timestamp when the invitation was created|
|role|[MemberRole](#schemamemberrole)|true|none|The role of the organization member|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|

<h2 id="tocS_MemberRole">MemberRole</h2>
<!-- backwards compatibility -->
<a id="schemamemberrole"></a>
<a id="schema_MemberRole"></a>
<a id="tocSmemberrole"></a>
<a id="tocsmemberrole"></a>

```json
"admin"
```

The role of the organization member

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "org_id": "string",
  "role": "admin",
  "joined_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|user_id|string(uuid)|true|none|none|
|org_id|string|true|none|none|
|role|[MemberRole](#schemamemberrole)|true|none|The role of the organization member|
|joined_at|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|

<h2 id="tocS_MemberUserInfo">MemberUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemamemberuserinfo"></a>
<a id="schema_MemberUserInfo"></a>
<a id="tocSmemberuserinfo"></a>
<a id="tocsmemberuserinfo"></a>

```json
{
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|

<h2 id="tocS_MemberWithUser">MemberWithUser</h2>
<!-- backwards compatibility -->
<a id="schemamemberwithuser"></a>
<a id="schema_MemberWithUser"></a>
<a id="tocSmemberwithuser"></a>
<a id="tocsmemberwithuser"></a>

```json
{
  "member": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "org_id": "string",
    "role": "admin",
    "joined_at": "1970-01-01T00:00:00Z"
  },
  "user": {
    "email": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member|[Member](#schemamember)|true|none|none|
|user|[MemberUserInfo](#schemamemberuserinfo)|true|none|none|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "id": "string",
  "name": "string",
  "handle": "string",
  "plan": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "managed_by": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|handle|string|true|none|none|
|plan|string|true|none|none|
|created_at|string(date-time)|true|none|A timestamp indicting when the organization was created<br>|
|managed_by|string|true|none|Organizations created via the Console or the API are managed by `console`.<br>Organizations created by other methods can't be deleted via the Console or the API.<br>|
|updated_at|string(date-time)|true|none|A timestamp indicating when the organization was updated<br>|

<h2 id="tocS_OrganizationsResponse">OrganizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsresponse"></a>
<a id="schema_OrganizationsResponse"></a>
<a id="tocSorganizationsresponse"></a>
<a id="tocsorganizationsresponse"></a>

```json
{
  "organizations": [
    {
      "id": "string",
      "name": "string",
      "handle": "string",
      "plan": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "managed_by": "string",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizations|[[Organization](#schemaorganization)]|true|none|none|

<h2 id="tocS_OrganizationsUpdateRequest">OrganizationsUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsupdaterequest"></a>
<a id="schema_OrganizationsUpdateRequest"></a>
<a id="tocSorganizationsupdaterequest"></a>
<a id="tocsorganizationsupdaterequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_OrganizationInvitationsResponse">OrganizationInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinvitationsresponse"></a>
<a id="schema_OrganizationInvitationsResponse"></a>
<a id="tocSorganizationinvitationsresponse"></a>
<a id="tocsorganizationinvitationsresponse"></a>

```json
{
  "invitations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "user@example.com",
      "org_id": "string",
      "invited_by": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "invited_at": "1970-01-01T00:00:00Z",
      "role": "admin"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[Invitation](#schemainvitation)]|true|none|none|

<h2 id="tocS_OrganizationInviteCreateRequest">OrganizationInviteCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinvitecreaterequest"></a>
<a id="schema_OrganizationInviteCreateRequest"></a>
<a id="tocSorganizationinvitecreaterequest"></a>
<a id="tocsorganizationinvitecreaterequest"></a>

```json
{
  "email": "user@example.com",
  "role": "admin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|none|
|role|[MemberRole](#schemamemberrole)|true|none|The role of the organization member|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|

<h2 id="tocS_OrganizationInvitesCreateRequest">OrganizationInvitesCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinvitescreaterequest"></a>
<a id="schema_OrganizationInvitesCreateRequest"></a>
<a id="tocSorganizationinvitescreaterequest"></a>
<a id="tocsorganizationinvitescreaterequest"></a>

```json
{
  "invitations": [
    {
      "email": "user@example.com",
      "role": "admin"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[OrganizationInviteCreateRequest](#schemaorganizationinvitecreaterequest)]|true|none|none|

<h2 id="tocS_OrganizationInviteUpdateRequest">OrganizationInviteUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinviteupdaterequest"></a>
<a id="schema_OrganizationInviteUpdateRequest"></a>
<a id="tocSorganizationinviteupdaterequest"></a>
<a id="tocsorganizationinviteupdaterequest"></a>

```json
{
  "email": "user@example.com",
  "role": "admin",
  "resend": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|none|
|role|[MemberRole](#schemamemberrole)|false|none|The role of the organization member|
|resend|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|

<h2 id="tocS_OrganizationGuestsResponse">OrganizationGuestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationguestsresponse"></a>
<a id="schema_OrganizationGuestsResponse"></a>
<a id="tocSorganizationguestsresponse"></a>
<a id="tocsorganizationguestsresponse"></a>

```json
[
  {
    "permission_id": "string",
    "user_email": "string",
    "project_id": "string",
    "project_name": "string"
  }
]
```

A list of details for guests of an organization

<h2 id="tocS_OrganizationGuest">OrganizationGuest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationguest"></a>
<a id="schema_OrganizationGuest"></a>
<a id="tocSorganizationguest"></a>
<a id="tocsorganizationguest"></a>

```json
{
  "permission_id": "string",
  "user_email": "string",
  "project_id": "string",
  "project_name": "string"
}
```

Details of an organization guest, who is not directly a member of
an organization but has been shared one of the projects it owns

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission_id|string|true|none|none|
|user_email|string|true|none|none|
|project_id|string|true|none|none|
|project_name|string|true|none|none|

<h2 id="tocS_OrganizationMemberUpdateRequest">OrganizationMemberUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmemberupdaterequest"></a>
<a id="schema_OrganizationMemberUpdateRequest"></a>
<a id="tocSorganizationmemberupdaterequest"></a>
<a id="tocsorganizationmemberupdaterequest"></a>

```json
{
  "role": "admin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[MemberRole](#schemamemberrole)|true|none|The role of the organization member|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|

<h2 id="tocS_OrganizationMembersResponse">OrganizationMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationmembersresponse"></a>
<a id="schema_OrganizationMembersResponse"></a>
<a id="tocSorganizationmembersresponse"></a>
<a id="tocsorganizationmembersresponse"></a>

```json
{
  "members": [
    {
      "member": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "user_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "org_id": "string",
        "role": "admin",
        "joined_at": "1970-01-01T00:00:00Z"
      },
      "user": {
        "email": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[[MemberWithUser](#schemamemberwithuser)]|true|none|none|

<h2 id="tocS_InvitationCreateRequest">InvitationCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemainvitationcreaterequest"></a>
<a id="schema_InvitationCreateRequest"></a>
<a id="tocSinvitationcreaterequest"></a>
<a id="tocsinvitationcreaterequest"></a>

```json
{
  "email": "string",
  "role": "admin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email to invite|
|role|[MemberRole](#schemamemberrole)|true|none|The role of the organization member|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|member|

<h2 id="tocS_OrganizationCreateRequest">OrganizationCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationcreaterequest"></a>
<a id="schema_OrganizationCreateRequest"></a>
<a id="tocSorganizationcreaterequest"></a>
<a id="tocsorganizationcreaterequest"></a>

```json
{
  "organization": {
    "name": "string",
    "invitations": [
      {
        "email": "string",
        "role": "admin"
      }
    ]
  },
  "subscription_type": "UNKNOWN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization|object|true|none|none|
|subscription_type|[BillingSubscriptionType](#schemabillingsubscriptiontype)|true|none|Type of subscription to Neon Cloud.<br>Notice that for users without billing account this will be "UNKNOWN"<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|subscription_type|UNKNOWN|
|subscription_type|direct_sales|
|subscription_type|aws_marketplace|
|subscription_type|free_v2|
|subscription_type|launch|
|subscription_type|scale|
|subscription_type|business|
|subscription_type|vercel_pg_legacy|

<h2 id="tocS_OrganizationLimits">OrganizationLimits</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationlimits"></a>
<a id="schema_OrganizationLimits"></a>
<a id="tocSorganizationlimits"></a>
<a id="tocsorganizationlimits"></a>

```json
{
  "limits": {
    "active_time": 0,
    "max_projects": 0,
    "max_branches": 0,
    "max_protected_branches": 0,
    "max_autoscaling_cu": 0,
    "max_fixed_size_cu": 0,
    "cpu_seconds": 0,
    "max_compute_time_non_primary": 0,
    "max_active_endpoints": 0,
    "max_read_only_endpoints": 0,
    "max_allowed_ips": 0,
    "max_vpc_endpoints_per_region": 0,
    "max_monitoring_retention_hours": 0,
    "max_history_retention_seconds": 0,
    "min_autosuspend_seconds": 0,
    "max_data_transfer": 0,
    "min_idle_seconds_to_autoarchive": 0,
    "min_age_seconds_to_autoarchive": 0,
    "max_branch_roles": 0,
    "max_branch_databases": 0,
    "max_concurrent_scheduled_operation_chains_per_project": 0,
    "max_concurrent_executing_operation_chains_per_project": 0
  },
  "features": {
    "property1": true,
    "property2": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|[Limits](#schemalimits)|true|none|none|
|features|[Features](#schemafeatures)|true|none|none|

<h2 id="tocS_ActiveRegionsResponse">ActiveRegionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactiveregionsresponse"></a>
<a id="schema_ActiveRegionsResponse"></a>
<a id="tocSactiveregionsresponse"></a>
<a id="tocsactiveregionsresponse"></a>

```json
{
  "regions": [
    {
      "region_id": "string",
      "name": "string",
      "default": true,
      "geo_lat": "string",
      "geo_long": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regions|[[RegionResponse](#schemaregionresponse)]|true|none|The list of active regions|

<h2 id="tocS_RegionResponse">RegionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregionresponse"></a>
<a id="schema_RegionResponse"></a>
<a id="tocSregionresponse"></a>
<a id="tocsregionresponse"></a>

```json
{
  "region_id": "string",
  "name": "string",
  "default": true,
  "geo_lat": "string",
  "geo_long": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region_id|string|true|none|The region ID as used in other API endpoints|
|name|string|true|none|A short description of the region.|
|default|boolean|true|none|Whether this region is used by default in new projects.|
|geo_lat|string|true|none|The geographical latitude (approximate) for the region. Empty if unknown.|
|geo_long|string|true|none|The geographical longitude (approximate) for the region. Empty if unknown.|

<h2 id="tocS_CurrentUserAuthAccount">CurrentUserAuthAccount</h2>
<!-- backwards compatibility -->
<a id="schemacurrentuserauthaccount"></a>
<a id="schema_CurrentUserAuthAccount"></a>
<a id="tocScurrentuserauthaccount"></a>
<a id="tocscurrentuserauthaccount"></a>

```json
{
  "email": "string",
  "image": "string",
  "login": "string",
  "name": "string",
  "provider": "github"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|image|string|true|none|none|
|login|string|true|none|**Deprecated.** DEPRECATED. Use `email` field.<br>|
|name|string|true|none|none|
|provider|[IdentityProviderId](#schemaidentityproviderid)|true|none|Identity provider id from keycloak|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|github|
|provider|google|
|provider|hasura|
|provider|microsoft|
|provider|microsoftv2|
|provider|vercelmp|
|provider|keycloak|
|provider|test|

<h2 id="tocS_LinkedAuthAccount">LinkedAuthAccount</h2>
<!-- backwards compatibility -->
<a id="schemalinkedauthaccount"></a>
<a id="schema_LinkedAuthAccount"></a>
<a id="tocSlinkedauthaccount"></a>
<a id="tocslinkedauthaccount"></a>

```json
{
  "provider": "github",
  "provider_display_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[IdentityProviderId](#schemaidentityproviderid)|true|none|Identity provider id from keycloak|
|provider_display_name|string|true|none|none|
|username|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|github|
|provider|google|
|provider|hasura|
|provider|microsoft|
|provider|microsoftv2|
|provider|vercelmp|
|provider|keycloak|
|provider|test|

<h2 id="tocS_UpdateUserInfoRequest">UpdateUserInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserinforequest"></a>
<a id="schema_UpdateUserInfoRequest"></a>
<a id="tocSupdateuserinforequest"></a>
<a id="tocsupdateuserinforequest"></a>

```json
{
  "email": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "image": "string",
  "first_name": "string",
  "last_name": "string",
  "password": "string",
  "new_password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|id|string(uuid)|true|none|none|
|image|string|false|none|**Deprecated.** DEPRECATED. This field is ignored.<br>|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|password|string|false|none|none|
|new_password|string|false|none|none|

<h2 id="tocS_CurrentUserInfoResponse">CurrentUserInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacurrentuserinforesponse"></a>
<a id="schema_CurrentUserInfoResponse"></a>
<a id="tocScurrentuserinforesponse"></a>
<a id="tocscurrentuserinforesponse"></a>

```json
{
  "active_seconds_limit": 0,
  "billing_account": {
    "state": "UNKNOWN",
    "payment_source": {
      "type": "string",
      "card": {
        "last4": "string",
        "brand": "amex",
        "exp_month": 0,
        "exp_year": 0
      }
    },
    "subscription_type": "UNKNOWN",
    "payment_method": "UNKNOWN",
    "quota_reset_at_last": "1970-01-01T00:00:00Z",
    "name": "string",
    "email": "string",
    "address_city": "string",
    "address_country": "string",
    "address_country_name": "string",
    "address_line1": "string",
    "address_line2": "string",
    "address_postal_code": "string",
    "address_state": "string",
    "orb_portal_url": "string",
    "tax_id": "string",
    "tax_id_type": "string"
  },
  "auth_accounts": [
    {
      "email": "string",
      "image": "string",
      "login": "string",
      "name": "string",
      "provider": "github"
    }
  ],
  "email": "string",
  "id": "string",
  "image": "string",
  "login": "string",
  "name": "string",
  "last_name": "string",
  "projects_limit": 0,
  "branches_limit": 0,
  "max_autoscaling_limit": 0.25,
  "compute_seconds_limit": 0,
  "plan": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_seconds_limit|integer(int64)|true|none|Control plane observes active endpoints of a user this amount of wall-clock time.<br>|
|billing_account|[BillingAccount](#schemabillingaccount)|true|none|none|
|auth_accounts|[[CurrentUserAuthAccount](#schemacurrentuserauthaccount)]|true|none|none|
|email|string|true|none|none|
|id|string|true|none|none|
|image|string|true|none|none|
|login|string|true|none|**Deprecated.** DEPRECATED. Use `email` field.<br>|
|name|string|true|none|none|
|last_name|string|true|none|none|
|projects_limit|integer(int64)|true|none|none|
|branches_limit|integer(int64)|true|none|none|
|max_autoscaling_limit|[ComputeUnit](#schemacomputeunit)|true|none|none|
|compute_seconds_limit|integer(int64)|false|none|none|
|plan|string|true|none|none|

<h2 id="tocS_ConvertUserToOrgRequest">ConvertUserToOrgRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconvertusertoorgrequest"></a>
<a id="schema_ConvertUserToOrgRequest"></a>
<a id="tocSconvertusertoorgrequest"></a>
<a id="tocsconvertusertoorgrequest"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_CurrentUserInfoAuthResponse">CurrentUserInfoAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemacurrentuserinfoauthresponse"></a>
<a id="schema_CurrentUserInfoAuthResponse"></a>
<a id="tocScurrentuserinfoauthresponse"></a>
<a id="tocscurrentuserinfoauthresponse"></a>

```json
{
  "password_stored": true,
  "auth_accounts": [
    {
      "email": "string",
      "image": "string",
      "login": "string",
      "name": "string",
      "provider": "github"
    }
  ],
  "linked_accounts": [
    {
      "provider": "github",
      "provider_display_name": "string",
      "username": "string"
    }
  ],
  "provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password_stored|boolean|true|none|none|
|auth_accounts|[[CurrentUserAuthAccount](#schemacurrentuserauthaccount)]|true|none|none|
|linked_accounts|[[LinkedAuthAccount](#schemalinkedauthaccount)]|true|none|none|
|provider|string|true|none|none|

<h2 id="tocS_TransferProjectsToOrganizationRequest">TransferProjectsToOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferprojectstoorganizationrequest"></a>
<a id="schema_TransferProjectsToOrganizationRequest"></a>
<a id="tocStransferprojectstoorganizationrequest"></a>
<a id="tocstransferprojectstoorganizationrequest"></a>

```json
{
  "org_id": "string",
  "project_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|org_id|string|true|none|none|
|project_ids|[string]|true|none|The list of projects ids to transfer. Maximum of 400 project ids|

<h2 id="tocS_VerifyUserPasswordRequest">VerifyUserPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyuserpasswordrequest"></a>
<a id="schema_VerifyUserPasswordRequest"></a>
<a id="tocSverifyuserpasswordrequest"></a>
<a id="tocsverifyuserpasswordrequest"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|

<h2 id="tocS_IdentityProviderId">IdentityProviderId</h2>
<!-- backwards compatibility -->
<a id="schemaidentityproviderid"></a>
<a id="schema_IdentityProviderId"></a>
<a id="tocSidentityproviderid"></a>
<a id="tocsidentityproviderid"></a>

```json
"github"
```

Identity provider id from keycloak

<h2 id="tocS_EndpointSettingsData">EndpointSettingsData</h2>
<!-- backwards compatibility -->
<a id="schemaendpointsettingsdata"></a>
<a id="schema_EndpointSettingsData"></a>
<a id="tocSendpointsettingsdata"></a>
<a id="tocsendpointsettingsdata"></a>

```json
{
  "pg_settings": {
    "property1": "string",
    "property2": "string"
  },
  "pgbouncer_settings": {
    "property1": "string",
    "property2": "string"
  }
}
```

A collection of settings for a compute endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pg_settings|[PgSettingsData](#schemapgsettingsdata)|false|none|A raw representation of Postgres settings|
|pgbouncer_settings|[PgbouncerSettingsData](#schemapgbouncersettingsdata)|false|none|A raw representation of PgBouncer settings|

<h2 id="tocS_ProjectQuota">ProjectQuota</h2>
<!-- backwards compatibility -->
<a id="schemaprojectquota"></a>
<a id="schema_ProjectQuota"></a>
<a id="tocSprojectquota"></a>
<a id="tocsprojectquota"></a>

```json
{
  "active_time_seconds": 0,
  "compute_time_seconds": 0,
  "written_data_bytes": 0,
  "data_transfer_bytes": 0,
  "logical_size_bytes": 0
}
```

Per-project consumption quota. If the quota is exceeded, all active computes
are automatically suspended and it will not be possible to start them with
an API method call or incoming proxy connections. The only exception is
`logical_size_bytes`, which is applied on per-branch basis, i.e., only the
compute on the branch that exceeds the `logical_size` quota will be suspended.

Quotas are enforced based on per-project consumption metrics with the same names,
which are reset at the end of each billing period (the first day of the month).
Logical size is also an exception in this case, as it represents the total size
of data stored in a branch, so it is not reset.

A zero or empty quota value means 'unlimited'.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active_time_seconds|integer(int64)|false|none|The total amount of wall-clock time allowed to be spent by the project's compute endpoints.<br>|
|compute_time_seconds|integer(int64)|false|none|The total amount of CPU seconds allowed to be spent by the project's compute endpoints.<br>|
|written_data_bytes|integer(int64)|false|none|Total amount of data written to all of a project's branches.<br>|
|data_transfer_bytes|integer(int64)|false|none|Total amount of data transferred from all of a project's branches using the proxy.<br>|
|logical_size_bytes|integer(int64)|false|none|Limit on the logical size of every project's branch.<br>|

<h2 id="tocS_DefaultEndpointSettings">DefaultEndpointSettings</h2>
<!-- backwards compatibility -->
<a id="schemadefaultendpointsettings"></a>
<a id="schema_DefaultEndpointSettings"></a>
<a id="tocSdefaultendpointsettings"></a>
<a id="tocsdefaultendpointsettings"></a>

```json
{
  "pg_settings": {
    "property1": "string",
    "property2": "string"
  },
  "pgbouncer_settings": {
    "property1": "string",
    "property2": "string"
  },
  "autoscaling_limit_min_cu": 0.25,
  "autoscaling_limit_max_cu": 0.25,
  "suspend_timeout_seconds": -1,
  "property1": "string",
  "property2": "string"
}
```

A collection of settings for a Neon endpoint

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pg_settings|[PgSettingsData](#schemapgsettingsdata)|false|none|A raw representation of Postgres settings|
|pgbouncer_settings|[PgbouncerSettingsData](#schemapgbouncersettingsdata)|false|none|A raw representation of PgBouncer settings|
|autoscaling_limit_min_cu|[ComputeUnit](#schemacomputeunit)|false|none|The minimum number of Compute Units. The minimum value is `0.25`.<br>See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|autoscaling_limit_max_cu|[ComputeUnit](#schemacomputeunit)|false|none|The maximum number of Compute Units. See [Compute size and Autoscaling configuration](https://neon.tech/docs/manage/endpoints#compute-size-and-autoscaling-configuration)<br>for more information.<br>|
|suspend_timeout_seconds|[SuspendTimeoutSeconds](#schemasuspendtimeoutseconds)|false|none|Duration of inactivity in seconds after which the compute endpoint is<br>automatically suspended. The value `0` means use the default value.<br>The value `-1` means never suspend. The default value is `300` seconds (5 minutes).<br>The minimum value is `60` seconds (1 minute).<br>The maximum value is `604800` seconds (1 week). For more information, see<br>[Scale to zero configuration](https://neon.tech/docs/manage/endpoints#scale-to-zero-configuration).<br>|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_PgSettingsData">PgSettingsData</h2>
<!-- backwards compatibility -->
<a id="schemapgsettingsdata"></a>
<a id="schema_PgSettingsData"></a>
<a id="tocSpgsettingsdata"></a>
<a id="tocspgsettingsdata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A raw representation of Postgres settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_PgbouncerSettingsData">PgbouncerSettingsData</h2>
<!-- backwards compatibility -->
<a id="schemapgbouncersettingsdata"></a>
<a id="schema_PgbouncerSettingsData"></a>
<a id="tocSpgbouncersettingsdata"></a>
<a id="tocspgbouncersettingsdata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

A raw representation of PgBouncer settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_PgVersion">PgVersion</h2>
<!-- backwards compatibility -->
<a id="schemapgversion"></a>
<a id="schema_PgVersion"></a>
<a id="tocSpgversion"></a>
<a id="tocspgversion"></a>

```json
17
```

The major Postgres version number. Currently supported versions are `14`, `15`, `16`, and `17`.

<h2 id="tocS_HealthCheck">HealthCheck</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheck"></a>
<a id="schema_HealthCheck"></a>
<a id="tocShealthcheck"></a>
<a id="tocshealthcheck"></a>

```json
{
  "status": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Service status|

<h2 id="tocS_ProjectOwnerData">ProjectOwnerData</h2>
<!-- backwards compatibility -->
<a id="schemaprojectownerdata"></a>
<a id="schema_ProjectOwnerData"></a>
<a id="tocSprojectownerdata"></a>
<a id="tocsprojectownerdata"></a>

```json
{
  "email": "string",
  "name": "string",
  "branches_limit": 0,
  "subscription_type": "UNKNOWN"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|name|string|true|none|none|
|branches_limit|integer|true|none|none|
|subscription_type|[BillingSubscriptionType](#schemabillingsubscriptiontype)|true|none|Type of subscription to Neon Cloud.<br>Notice that for users without billing account this will be "UNKNOWN"<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|subscription_type|UNKNOWN|
|subscription_type|direct_sales|
|subscription_type|aws_marketplace|
|subscription_type|free_v2|
|subscription_type|launch|
|subscription_type|scale|
|subscription_type|business|
|subscription_type|vercel_pg_legacy|

<h2 id="tocS_LimitsUnsatisfiedResponse">LimitsUnsatisfiedResponse</h2>
<!-- backwards compatibility -->
<a id="schemalimitsunsatisfiedresponse"></a>
<a id="schema_LimitsUnsatisfiedResponse"></a>
<a id="tocSlimitsunsatisfiedresponse"></a>
<a id="tocslimitsunsatisfiedresponse"></a>

```json
{
  "limits": [
    {
      "name": "projects_count",
      "actual": "2",
      "expected": "1"
    },
    {
      "name": "subscription_type",
      "actual": "launch",
      "expected": "scale"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limits|[object]|true|none|none|

<h2 id="tocS_ProjectsWithIntegrationResponse">ProjectsWithIntegrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectswithintegrationresponse"></a>
<a id="schema_ProjectsWithIntegrationResponse"></a>
<a id="tocSprojectswithintegrationresponse"></a>
<a id="tocsprojectswithintegrationresponse"></a>

```json
{
  "projects": [
    {
      "id": "round-frog-53611540",
      "integration": "github"
    },
    {
      "id": "long-leaf-72329067",
      "integration": "vercel"
    },
    {
      "id": "shrill-bush-06966719",
      "integration": "outerbase"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projects|[object]|true|none|none|

<h2 id="tocS_UserDeletionConditionName">UserDeletionConditionName</h2>
<!-- backwards compatibility -->
<a id="schemauserdeletionconditionname"></a>
<a id="schema_UserDeletionConditionName"></a>
<a id="tocSuserdeletionconditionname"></a>
<a id="tocsuserdeletionconditionname"></a>

```json
"project_count"
```

<h2 id="tocS_OrgDeletionConditionName">OrgDeletionConditionName</h2>
<!-- backwards compatibility -->
<a id="schemaorgdeletionconditionname"></a>
<a id="schema_OrgDeletionConditionName"></a>
<a id="tocSorgdeletionconditionname"></a>
<a id="tocsorgdeletionconditionname"></a>

```json
"project_count"
```

<h2 id="tocS_IdentitySupportedAuthProvider">IdentitySupportedAuthProvider</h2>
<!-- backwards compatibility -->
<a id="schemaidentitysupportedauthprovider"></a>
<a id="schema_IdentitySupportedAuthProvider"></a>
<a id="tocSidentitysupportedauthprovider"></a>
<a id="tocsidentitysupportedauthprovider"></a>

```json
"mock"
```

<h2 id="tocS_ListProjectIdentityIntegrationsResponse">ListProjectIdentityIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistprojectidentityintegrationsresponse"></a>
<a id="schema_ListProjectIdentityIntegrationsResponse"></a>
<a id="tocSlistprojectidentityintegrationsresponse"></a>
<a id="tocslistprojectidentityintegrationsresponse"></a>

```json
{
  "data": [
    {
      "auth_provider": "string",
      "auth_provider_project_id": "string",
      "branch_id": "string",
      "db_name": "string",
      "created_at": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[IdentityIntegration](#schemaidentityintegration)]|true|none|none|

<h2 id="tocS_IdentityIntegration">IdentityIntegration</h2>
<!-- backwards compatibility -->
<a id="schemaidentityintegration"></a>
<a id="schema_IdentityIntegration"></a>
<a id="tocSidentityintegration"></a>
<a id="tocsidentityintegration"></a>

```json
{
  "auth_provider": "string",
  "auth_provider_project_id": "string",
  "branch_id": "string",
  "db_name": "string",
  "created_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_provider|string|true|none|none|
|auth_provider_project_id|string|true|none|none|
|branch_id|string|true|none|none|
|db_name|string|true|none|none|
|created_at|string(date-time)|true|none|none|

<h2 id="tocS_GeneralError">GeneralError</h2>
<!-- backwards compatibility -->
<a id="schemageneralerror"></a>
<a id="schema_GeneralError"></a>
<a id="tocSgeneralerror"></a>
<a id="tocsgeneralerror"></a>

```json
{
  "request_id": "string",
  "code": "string",
  "message": "string"
}
```

General Error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request_id|string|false|none|none|
|code|[ErrorCode](#schemaerrorcode)|true|none|none|
|message|string|true|none|Error message|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"string"
```

<h2 id="tocS_BranchOperations">BranchOperations</h2>
<!-- backwards compatibility -->
<a id="schemabranchoperations"></a>
<a id="schema_BranchOperations"></a>
<a id="tocSbranchoperations"></a>
<a id="tocsbranchoperations"></a>

```json
{
  "branch": {
    "id": "br-wispy-meadow-118737",
    "project_id": "spring-example-302709",
    "parent_id": "br-aged-salad-637688",
    "parent_lsn": "0/1DE2850",
    "name": "dev2",
    "protected": false,
    "current_state": "ready",
    "state_changed_at": "2022-11-30T20:09:48Z",
    "creation_source": "console",
    "created_at": "2022-11-30T19:09:48Z",
    "updated_at": "2022-12-01T19:53:05Z",
    "default": true
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|[Branch](#schemabranch)|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_EndpointOperations">EndpointOperations</h2>
<!-- backwards compatibility -->
<a id="schemaendpointoperations"></a>
<a id="schema_EndpointOperations"></a>
<a id="tocSendpointoperations"></a>
<a id="tocsendpointoperations"></a>

```json
{
  "endpoint": {
    "host": "ep-silent-smoke-806639.us-east-2.aws.neon.tech",
    "id": "ep-silent-smoke-806639",
    "project_id": "spring-example-302709",
    "branch_id": "br-wispy-meadow-118737",
    "autoscaling_limit_min_cu": 1,
    "autoscaling_limit_max_cu": 1,
    "region_id": "aws-us-east-2",
    "type": "read_write",
    "current_state": "init",
    "pending_state": "active",
    "settings": {
      "pg_settings": {}
    },
    "pooler_enabled": false,
    "pooler_mode": "transaction",
    "disabled": false,
    "passwordless_access": true,
    "creation_source": "console",
    "created_at": "2022-12-03T15:37:07Z",
    "updated_at": "2022-12-03T15:37:07Z",
    "proxy_host": "us-east-2.aws.neon.tech",
    "suspend_timeout_seconds": 0
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|[Endpoint](#schemaendpoint)|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_DatabaseOperations">DatabaseOperations</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseoperations"></a>
<a id="schema_DatabaseOperations"></a>
<a id="tocSdatabaseoperations"></a>
<a id="tocsdatabaseoperations"></a>

```json
{
  "database": {
    "id": 834686,
    "branch_id": "br-wispy-meadow-118737",
    "name": "neondb",
    "owner_name": "casey",
    "created_at": "2022-11-30T18:25:15Z",
    "updated_at": "2022-11-30T18:25:15Z"
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|[Database](#schemadatabase)|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_RoleOperations">RoleOperations</h2>
<!-- backwards compatibility -->
<a id="schemaroleoperations"></a>
<a id="schema_RoleOperations"></a>
<a id="tocSroleoperations"></a>
<a id="tocsroleoperations"></a>

```json
{
  "role": {
    "branch_id": "br-wispy-meadow-118737",
    "name": "casey",
    "protected": false,
    "created_at": "2022-11-23T17:42:25Z",
    "updated_at": "2022-11-23T17:42:25Z"
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|[Role](#schemarole)|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_JWKSCreationOperation">JWKSCreationOperation</h2>
<!-- backwards compatibility -->
<a id="schemajwkscreationoperation"></a>
<a id="schema_JWKSCreationOperation"></a>
<a id="tocSjwkscreationoperation"></a>
<a id="tocsjwkscreationoperation"></a>

```json
{
  "jwks": {
    "id": "string",
    "project_id": "string",
    "branch_id": "string",
    "jwks_url": "string",
    "provider_name": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z",
    "jwt_audience": "string"
  },
  "operations": [
    [
      {
        "id": "a07f8772-1877-4da9-a939-3a3ae62d1d8d",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "create_branch",
        "status": "running",
        "failures_count": 0,
        "created_at": "2022-11-08T23:33:16Z",
        "updated_at": "2022-11-08T23:33:20Z",
        "total_duration_ms": 400
      },
      {
        "id": "d8ac46eb-a757-42b1-9907-f78322ee394e",
        "project_id": "spring-example-302709",
        "branch_id": "br-wispy-meadow-118737",
        "endpoint_id": "ep-silent-smoke-806639",
        "action": "start_compute",
        "status": "finished",
        "failures_count": 0,
        "created_at": "2022-11-15T20:02:00Z",
        "updated_at": "2022-11-15T20:02:02Z",
        "total_duration_ms": 200
      }
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwks|[JWKS](#schemajwks)|true|none|none|
|operations|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_SupportTicketSeverity">SupportTicketSeverity</h2>
<!-- backwards compatibility -->
<a id="schemasupportticketseverity"></a>
<a id="schema_SupportTicketSeverity"></a>
<a id="tocSsupportticketseverity"></a>
<a id="tocssupportticketseverity"></a>

```json
"low"
```

<h2 id="tocS_AnnotationData">AnnotationData</h2>
<!-- backwards compatibility -->
<a id="schemaannotationdata"></a>
<a id="schema_AnnotationData"></a>
<a id="tocSannotationdata"></a>
<a id="tocsannotationdata"></a>

```json
{
  "object": {
    "type": "string",
    "id": "string"
  },
  "value": {
    "property1": {
      "github-commit-ref": "github-branch-name"
    },
    "property2": {
      "github-commit-ref": "github-branch-name"
    }
  },
  "created_at": "1970-01-01T00:00:00Z",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|object|[AnnotationObjectData](#schemaannotationobjectdata)|true|none|none|
|value|[AnnotationValueData](#schemaannotationvaluedata)|true|none|Annotation properties.|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|

<h2 id="tocS_AnnotationValueData">AnnotationValueData</h2>
<!-- backwards compatibility -->
<a id="schemaannotationvaluedata"></a>
<a id="schema_AnnotationValueData"></a>
<a id="tocSannotationvaluedata"></a>
<a id="tocsannotationvaluedata"></a>

```json
{
  "property1": {
    "github-commit-ref": "github-branch-name"
  },
  "property2": {
    "github-commit-ref": "github-branch-name"
  }
}
```

Annotation properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_AnnotationObjectData">AnnotationObjectData</h2>
<!-- backwards compatibility -->
<a id="schemaannotationobjectdata"></a>
<a id="schema_AnnotationObjectData"></a>
<a id="tocSannotationobjectdata"></a>
<a id="tocsannotationobjectdata"></a>

```json
{
  "type": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_AnnotationCreateValueRequest">AnnotationCreateValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaannotationcreatevaluerequest"></a>
<a id="schema_AnnotationCreateValueRequest"></a>
<a id="tocSannotationcreatevaluerequest"></a>
<a id="tocsannotationcreatevaluerequest"></a>

```json
{
  "annotation_value": {
    "property1": {
      "github-commit-ref": "github-branch-name"
    },
    "property2": {
      "github-commit-ref": "github-branch-name"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation_value|[AnnotationValueData](#schemaannotationvaluedata)|false|none|Annotation properties.|

<h2 id="tocS_AnnotationResponse">AnnotationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaannotationresponse"></a>
<a id="schema_AnnotationResponse"></a>
<a id="tocSannotationresponse"></a>
<a id="tocsannotationresponse"></a>

```json
{
  "annotation": {
    "object": {
      "type": "string",
      "id": "string"
    },
    "value": {
      "property1": {
        "github-commit-ref": "github-branch-name"
      },
      "property2": {
        "github-commit-ref": "github-branch-name"
      }
    },
    "created_at": "1970-01-01T00:00:00Z",
    "updated_at": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation|[AnnotationData](#schemaannotationdata)|true|none|none|

<h2 id="tocS_AnnotationsMapResponse">AnnotationsMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaannotationsmapresponse"></a>
<a id="schema_AnnotationsMapResponse"></a>
<a id="tocSannotationsmapresponse"></a>
<a id="tocsannotationsmapresponse"></a>

```json
{
  "annotations": {
    "property1": {
      "object": {
        "type": "string",
        "id": "string"
      },
      "value": {
        "property1": {
          "github-commit-ref": "github-branch-name"
        },
        "property2": {
          "github-commit-ref": "github-branch-name"
        }
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "property2": {
      "object": {
        "type": "string",
        "id": "string"
      },
      "value": {
        "property1": {
          "github-commit-ref": "github-branch-name"
        },
        "property2": {
          "github-commit-ref": "github-branch-name"
        }
      },
      "created_at": "1970-01-01T00:00:00Z",
      "updated_at": "1970-01-01T00:00:00Z"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|true|none|none|

<h2 id="tocS_ProjectsApplicationsMapResponse">ProjectsApplicationsMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsapplicationsmapresponse"></a>
<a id="schema_ProjectsApplicationsMapResponse"></a>
<a id="tocSprojectsapplicationsmapresponse"></a>
<a id="tocsprojectsapplicationsmapresponse"></a>

```json
{
  "winter-boat-259881": [
    "vercel",
    "github",
    "datadog"
  ]
}
```

A map where key is a project ID and a value is a list of installed applications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|object|true|none|none|

<h2 id="tocS_ProjectsIntegrationsMapResponse">ProjectsIntegrationsMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsintegrationsmapresponse"></a>
<a id="schema_ProjectsIntegrationsMapResponse"></a>
<a id="tocSprojectsintegrationsmapresponse"></a>
<a id="tocsprojectsintegrationsmapresponse"></a>

```json
{
  "winter-boat-259881": [
    "vercel",
    "github",
    "datadog"
  ]
}
```

A map where key is a project ID and a value is a list of installed integrations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrations|object|true|none|none|

<h2 id="tocS_CursorPaginationResponse">CursorPaginationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacursorpaginationresponse"></a>
<a id="schema_CursorPaginationResponse"></a>
<a id="tocScursorpaginationresponse"></a>
<a id="tocscursorpaginationresponse"></a>

```json
{
  "pagination": {
    "next": "string",
    "previous": "string",
    "sort_by": "string",
    "sort_order": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[CursorPagination](#schemacursorpagination)|false|none|To paginate the response, issue an initial request with `limit` value. Then, add the value returned in the response `.pagination.next` attribute into the request under the `cursor` query parameter to the subsequent request to retrieve next page in pagination. Using `.pagination.previous` as cursor will return the previous page. The contents on cursor `next` and `previous` are opaque, clients are not expected to make any assumptions on the format of the data inside the cursor.|

<h2 id="tocS_CursorPagination">CursorPagination</h2>
<!-- backwards compatibility -->
<a id="schemacursorpagination"></a>
<a id="schema_CursorPagination"></a>
<a id="tocScursorpagination"></a>
<a id="tocscursorpagination"></a>

```json
{
  "next": "string",
  "previous": "string",
  "sort_by": "string",
  "sort_order": "string"
}
```

To paginate the response, issue an initial request with `limit` value. Then, add the value returned in the response `.pagination.next` attribute into the request under the `cursor` query parameter to the subsequent request to retrieve next page in pagination. Using `.pagination.previous` as cursor will return the previous page. The contents on cursor `next` and `previous` are opaque, clients are not expected to make any assumptions on the format of the data inside the cursor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string|false|none|none|
|previous|string|false|none|none|
|sort_by|string|false|none|none|
|sort_order|string|false|none|none|
